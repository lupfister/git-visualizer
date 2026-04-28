(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function $x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Bv(){if(ny)return oc;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var sy;function Lv(){return sy||(sy=1,Oh.exports=Bv()),Oh.exports}var r=Lv(),zh={exports:{}},ic={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Ov(){return oy||(oy=1,(function(t){function n($,ie){var F=$.length;$.push(ie);e:for(;0<F;){var fe=F-1>>>1,Ee=$[fe];if(0<c(Ee,ie))$[fe]=ie,$[F]=Ee,F=fe;else break e}}function i($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var ie=$[0],F=$.pop();if(F!==ie){$[0]=F;e:for(var fe=0,Ee=$.length,I=Ee>>>1;fe<I;){var de=2*(fe+1)-1,q=$[de],me=de+1,be=$[me];if(0>c(q,F))me<Ee&&0>c(be,q)?($[fe]=be,$[me]=F,fe=me):($[fe]=q,$[de]=F,fe=de);else if(me<Ee&&0>c(be,F))$[fe]=be,$[me]=F,fe=me;else break e}}return ie}function c($,ie){var F=$.sortIndex-ie.sortIndex;return F!==0?F:$.id-ie.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,S=!1,C=!1,j=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D($){for(var ie=i(y);ie!==null;){if(ie.callback===null)a(y);else if(ie.startTime<=$)a(y),ie.sortIndex=ie.expirationTime,n(p,ie);else break;ie=i(y)}}function Q($){if(j=!1,D($),!C)if(i(p)!==null)C=!0,X||(X=!0,Ae());else{var ie=i(y);ie!==null&&he(Q,ie.startTime-$)}}var X=!1,W=-1,V=5,ee=-1;function ae(){return E?!0:!(t.unstable_now()-ee<V)}function re(){if(E=!1,X){var $=t.unstable_now();ee=$;var ie=!0;try{e:{C=!1,j&&(j=!1,O(W),W=-1),S=!0;var F=b;try{t:{for(D($),x=i(p);x!==null&&!(x.expirationTime>$&&ae());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,b=x.priorityLevel;var Ee=fe(x.expirationTime<=$);if($=t.unstable_now(),typeof Ee=="function"){x.callback=Ee,D($),ie=!0;break t}x===i(p)&&a(p),D($)}else a(p);x=i(p)}if(x!==null)ie=!0;else{var I=i(y);I!==null&&he(Q,I.startTime-$),ie=!1}}break e}finally{x=null,b=F,S=!1}ie=void 0}}finally{ie?Ae():X=!1}}}var Ae;if(typeof L=="function")Ae=function(){L(re)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,ne=Pe.port2;Pe.port1.onmessage=re,Ae=function(){ne.postMessage(null)}}else Ae=function(){T(re,0)};function he($,ie){W=T(function(){$(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function($){switch(b){case 1:case 2:case 3:var ie=3;break;default:ie=b}var F=b;b=ie;try{return $()}finally{b=F}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function($,ie){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=b;b=$;try{return ie()}finally{b=F}},t.unstable_scheduleCallback=function($,ie,F){var fe=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?fe+F:fe):F=fe,$){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=F+Ee,$={id:g++,callback:ie,priorityLevel:$,startTime:F,expirationTime:Ee,sortIndex:-1},F>fe?($.sortIndex=F,n(y,$),i(p)===null&&$===i(y)&&(j?(O(W),W=-1):j=!0,he(Q,F-fe))):($.sortIndex=Ee,n(p,$),C||S||(C=!0,X||(X=!0,Ae()))),$},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function($){var ie=b;return function(){var F=b;b=ie;try{return $.apply(this,arguments)}finally{b=F}}}})(Ih)),Ih}var iy;function zv(){return iy||(iy=1,$h.exports=Ov()),$h.exports}var Ph={exports:{}},Qt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function $v(){if(ay)return Qt;ay=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,E={};function T(I,de,q){this.props=I,this.context=de,this.refs=E,this.updater=q||C}T.prototype.isReactComponent={},T.prototype.setState=function(I,de){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,de,"setState")},T.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=T.prototype;function L(I,de,q){this.props=I,this.context=de,this.refs=E,this.updater=q||C}var D=L.prototype=new O;D.constructor=L,j(D,T.prototype),D.isPureReactComponent=!0;var Q=Array.isArray;function X(){}var W={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function ee(I,de,q){var me=q.ref;return{$$typeof:t,type:I,key:de,ref:me!==void 0?me:null,props:q}}function ae(I,de){return ee(I.type,de,I.props)}function re(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function Ae(I){var de={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return de[q]})}var Pe=/\/+/g;function ne(I,de){return typeof I=="object"&&I!==null&&I.key!=null?Ae(""+I.key):de.toString(36)}function he(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(X,X):(I.status="pending",I.then(function(de){I.status==="pending"&&(I.status="fulfilled",I.value=de)},function(de){I.status==="pending"&&(I.status="rejected",I.reason=de)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function $(I,de,q,me,be){var Te=typeof I;(Te==="undefined"||Te==="boolean")&&(I=null);var We=!1;if(I===null)We=!0;else switch(Te){case"bigint":case"string":case"number":We=!0;break;case"object":switch(I.$$typeof){case t:case n:We=!0;break;case g:return We=I._init,$(We(I._payload),de,q,me,be)}}if(We)return be=be(I),We=me===""?"."+ne(I,0):me,Q(be)?(q="",We!=null&&(q=We.replace(Pe,"$&/")+"/"),$(be,de,q,"",function(Lt){return Lt})):be!=null&&(re(be)&&(be=ae(be,q+(be.key==null||I&&I.key===be.key?"":(""+be.key).replace(Pe,"$&/")+"/")+We)),de.push(be)),1;We=0;var Ke=me===""?".":me+":";if(Q(I))for(var Ze=0;Ze<I.length;Ze++)me=I[Ze],Te=Ke+ne(me,Ze),We+=$(me,de,q,Te,be);else if(Ze=S(I),typeof Ze=="function")for(I=Ze.call(I),Ze=0;!(me=I.next()).done;)me=me.value,Te=Ke+ne(me,Ze++),We+=$(me,de,q,Te,be);else if(Te==="object"){if(typeof I.then=="function")return $(he(I),de,q,me,be);throw de=String(I),Error("Objects are not valid as a React child (found: "+(de==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":de)+"). If you meant to render a collection of children, use an array instead.")}return We}function ie(I,de,q){if(I==null)return I;var me=[],be=0;return $(I,me,"","",function(Te){return de.call(q,Te,be++)}),me}function F(I){if(I._status===-1){var de=I._result;de=de(),de.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=de)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var de=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(de))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Ee={map:ie,forEach:function(I,de,q){ie(I,function(){de.apply(this,arguments)},q)},count:function(I){var de=0;return ie(I,function(){de++}),de},toArray:function(I){return ie(I,function(de){return de})||[]},only:function(I){if(!re(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Qt.Activity=x,Qt.Children=Ee,Qt.Component=T,Qt.Fragment=i,Qt.Profiler=c,Qt.PureComponent=L,Qt.StrictMode=a,Qt.Suspense=p,Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Qt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return W.H.useMemoCache(I)}},Qt.cache=function(I){return function(){return I.apply(null,arguments)}},Qt.cacheSignal=function(){return null},Qt.cloneElement=function(I,de,q){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var me=j({},I.props),be=I.key;if(de!=null)for(Te in de.key!==void 0&&(be=""+de.key),de)!V.call(de,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&de.ref===void 0||(me[Te]=de[Te]);var Te=arguments.length-2;if(Te===1)me.children=q;else if(1<Te){for(var We=Array(Te),Ke=0;Ke<Te;Ke++)We[Ke]=arguments[Ke+2];me.children=We}return ee(I.type,be,me)},Qt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Qt.createElement=function(I,de,q){var me,be={},Te=null;if(de!=null)for(me in de.key!==void 0&&(Te=""+de.key),de)V.call(de,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(be[me]=de[me]);var We=arguments.length-2;if(We===1)be.children=q;else if(1<We){for(var Ke=Array(We),Ze=0;Ze<We;Ze++)Ke[Ze]=arguments[Ze+2];be.children=Ke}if(I&&I.defaultProps)for(me in We=I.defaultProps,We)be[me]===void 0&&(be[me]=We[me]);return ee(I,Te,be)},Qt.createRef=function(){return{current:null}},Qt.forwardRef=function(I){return{$$typeof:h,render:I}},Qt.isValidElement=re,Qt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:F}},Qt.memo=function(I,de){return{$$typeof:y,type:I,compare:de===void 0?null:de}},Qt.startTransition=function(I){var de=W.T,q={};W.T=q;try{var me=I(),be=W.S;be!==null&&be(q,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(X,fe)}catch(Te){fe(Te)}finally{de!==null&&q.types!==null&&(de.types=q.types),W.T=de}},Qt.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Qt.use=function(I){return W.H.use(I)},Qt.useActionState=function(I,de,q){return W.H.useActionState(I,de,q)},Qt.useCallback=function(I,de){return W.H.useCallback(I,de)},Qt.useContext=function(I){return W.H.useContext(I)},Qt.useDebugValue=function(){},Qt.useDeferredValue=function(I,de){return W.H.useDeferredValue(I,de)},Qt.useEffect=function(I,de){return W.H.useEffect(I,de)},Qt.useEffectEvent=function(I){return W.H.useEffectEvent(I)},Qt.useId=function(){return W.H.useId()},Qt.useImperativeHandle=function(I,de,q){return W.H.useImperativeHandle(I,de,q)},Qt.useInsertionEffect=function(I,de){return W.H.useInsertionEffect(I,de)},Qt.useLayoutEffect=function(I,de){return W.H.useLayoutEffect(I,de)},Qt.useMemo=function(I,de){return W.H.useMemo(I,de)},Qt.useOptimistic=function(I,de){return W.H.useOptimistic(I,de)},Qt.useReducer=function(I,de,q){return W.H.useReducer(I,de,q)},Qt.useRef=function(I){return W.H.useRef(I)},Qt.useState=function(I){return W.H.useState(I)},Qt.useSyncExternalStore=function(I,de,q){return W.H.useSyncExternalStore(I,de,q)},Qt.useTransition=function(){return W.H.useTransition()},Qt.version="19.2.4",Qt}var ry;function up(){return ry||(ry=1,Ph.exports=$v()),Ph.exports}var Hh={exports:{}},Oo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Iv(){if(ly)return Oo;ly=1;var t=up();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Oo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Oo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Oo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Oo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Oo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Oo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,S=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Oo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Oo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Oo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Oo.requestFormReset=function(p){a.d.r(p)},Oo.unstable_batchedUpdates=function(p,y){return p(y)},Oo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Oo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Oo.version="19.2.4",Oo}var cy;function Ix(){if(cy)return Hh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Iv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Pv(){if(uy)return ic;uy=1;var t=zv(),n=up(),i=Ix();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,l=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===l)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=f,l=m;else{for(var v=!1,N=f.child;N;){if(N===o){v=!0,o=f,l=m;break}if(N===l){v=!0,l=f,o=m;break}N=N.sibling}if(!v){for(N=m.child;N;){if(N===o){v=!0,o=m,l=f;break}if(N===l){v=!0,l=m,o=f;break}N=N.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case Q:return"Suspense";case X:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return s=e.displayName||null,s!==null?s:ne(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return ne(e(s))}catch{}}return null}var he=Array.isArray,$=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function I(e){return{current:e}}function de(e){0>Ee||(e.current=fe[Ee],fe[Ee]=null,Ee--)}function q(e,s){Ee++,fe[Ee]=e.current,e.current=s}var me=I(null),be=I(null),Te=I(null),We=I(null);function Ke(e,s){switch(q(Te,s),q(be,e),q(me,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=k0(s),e=j0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}de(me),q(me,e)}function Ze(){de(me),de(be),de(Te)}function Lt(e){e.memoizedState!==null&&q(We,e);var s=me.current,o=j0(s,e.type);s!==o&&(q(be,e),q(me,o))}function qt(e){be.current===e&&(de(me),de(be)),We.current===e&&(de(We),ec._currentValue=F)}var pt,ze;function Et(e){if(pt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);pt=s&&s[1]||"",ze=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+ze}var Qe=!1;function vt(e,s){if(!e||Qe)return"";Qe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var $e=function(){throw Error()};if(Object.defineProperty($e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($e,[])}catch(Se){var xe=Se}Reflect.construct(e,[],$e)}else{try{$e.call()}catch(Se){xe=Se}e.call($e.prototype)}}else{try{throw Error()}catch(Se){xe=Se}($e=e())&&typeof $e.catch=="function"&&$e.catch(function(){})}}catch(Se){if(Se&&xe&&typeof Se.stack=="string")return[Se.stack,xe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],N=m[1];if(v&&N){var Z=v.split(`
`),ye=N.split(`
`);for(f=l=0;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(l===Z.length||f===ye.length)for(l=Z.length-1,f=ye.length-1;1<=l&&0<=f&&Z[l]!==ye[f];)f--;for(;1<=l&&0<=f;l--,f--)if(Z[l]!==ye[f]){if(l!==1||f!==1)do if(l--,f--,0>f||Z[l]!==ye[f]){var De=`
`+Z[l].replace(" at new "," at ");return e.displayName&&De.includes("<anonymous>")&&(De=De.replace("<anonymous>",e.displayName)),De}while(1<=l&&0<=f);break}}}finally{Qe=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Et(o):""}function we(e,s){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==s&&s!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return vt(e.type,!1);case 11:return vt(e.type.render,!1);case 1:return vt(e.type,!0);case 31:return Et("Activity");default:return""}}function oe(e){try{var s="",o=null;do s+=we(e,o),o=e,e=e.return;while(e);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Re=Object.prototype.hasOwnProperty,Xe=t.unstable_scheduleCallback,He=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,tt=t.unstable_requestPaint,ot=t.unstable_now,gt=t.unstable_getCurrentPriorityLevel,xt=t.unstable_ImmediatePriority,Ot=t.unstable_UserBlockingPriority,it=t.unstable_NormalPriority,H=t.unstable_LowPriority,J=t.unstable_IdlePriority,_e=t.log,Ce=t.unstable_setDisableYieldValue,et=null,Je=null;function Me(e){if(typeof _e=="function"&&Ce(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(et,e)}catch{}}var _t=Math.clz32?Math.clz32:yt,Ie=Math.log,Wt=Math.LN2;function yt(e){return e>>>=0,e===0?32:31-(Ie(e)/Wt|0)|0}var rt=256,Rt=262144,Dt=4194304;function Kt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,s,o){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var N=l&134217727;return N!==0?(l=N&~m,l!==0?f=Kt(l):(v&=N,v!==0?f=Kt(v):o||(o=N&~e,o!==0&&(f=Kt(o))))):(N=l&~m,N!==0?f=Kt(N):v!==0?f=Kt(v):o||(o=l&~e,o!==0&&(f=Kt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function nt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function jt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function At(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ht(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,s,o,l,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var N=e.entanglements,Z=e.expirationTimes,ye=e.hiddenUpdates;for(o=v&~o;0<o;){var De=31-_t(o),$e=1<<De;N[De]=0,Z[De]=-1;var xe=ye[De];if(xe!==null)for(ye[De]=null,De=0;De<xe.length;De++){var Se=xe[De];Se!==null&&(Se.lane&=-536870913)}o&=~$e}l!==0&&fn(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function fn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var l=31-_t(s);e.entangledLanes|=s,e.entanglements[l]=e.entanglements[l]|1073741824|o&261930}function rn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var l=31-_t(o),f=1<<l;f&s|e[l]&s&&(e[l]|=s),o&=~f}}function sn(e,s){var o=s&-s;return o=(o&42)!==0?1:Xn(o),(o&(e.suspendedLanes|s))!==0?0:o}function Xn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kn(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function wn(e,s){var o=ie.p;try{return ie.p=e,s()}finally{ie.p=o}}var as=Math.random().toString(36).slice(2),Xt="__reactFiber$"+as,$n="__reactProps$"+as,at="__reactContainer$"+as,In="__reactEvents$"+as,po="__reactListeners$"+as,Go="__reactHandles$"+as,Us="__reactResources$"+as,js="__reactMarker$"+as;function ai(e){delete e[Xt],delete e[$n],delete e[In],delete e[po],delete e[Go]}function gs(e){var s=e[Xt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[at]||o[Xt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=R0(e);e!==null;){if(o=e[Xt])return o;e=R0(e)}return s}e=o,o=e.parentNode}return null}function bo(e){if(e=e[Xt]||e[at]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function qo(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Bs(e){var s=e[Us];return s||(s=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function jn(e){e[js]=!0}var Ko=new Set,ws={};function yn(e,s){Un(e,s),Un(e+"Capture",s)}function Un(e,s){for(ws[e]=s,e=0;e<s.length;e++)Ko.add(s[e])}var so=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},rs={};function ts(e){return Re.call(rs,e)?!0:Re.call(Vs,e)?!1:so.test(e)?rs[e]=!0:(Vs[e]=!0,!1)}function Ys(e,s,o){if(ts(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function xn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function hn(e,s,o,l){if(l===null)e.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+l)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function yi(e,s,o){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Qo(e){if(!e._valueTracker){var s=Nn(e)?"checked":"value";e._valueTracker=yi(e,s,""+e[s])}}function Ii(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),l="";return e&&(l=Nn(e)?e.checked?"true":"false":e.value),e=l,e!==o?(s.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $o=/[\n"\\]/g;function us(e){return e.replace($o,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function vo(e,s,o,l,f,m,v,N){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Jt(s)):e.value!==""+Jt(s)&&(e.value=""+Jt(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Ws(e,v,Jt(s)):o!=null?Ws(e,v,Jt(o)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Jt(N):e.removeAttribute("name")}function Dn(e,s,o,l,f,m,v,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Qo(e);return}o=o!=null?""+Jt(o):"",s=s!=null?""+Jt(s):o,N||s===e.value||(e.value=s),e.defaultValue=s}l=l!=null?l:f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=N?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Qo(e)}function Ws(e,s,o){s==="number"&&oo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ds(e,s,o,l){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&l&&(e[o].defaultSelected=!0)}else{for(o=""+Jt(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Gn(e,s,o){if(s!=null&&(s=""+Jt(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Jt(o):""}function xi(e,s,o,l){if(s==null){if(l!=null){if(o!=null)throw Error(a(92));if(he(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),s=o}o=Jt(s),e.defaultValue=o,l=e.textContent,l===o&&l!==""&&l!==null&&(e.value=l),Qo(e)}function ys(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ut(e,s,o){var l=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":l?e.setProperty(s,o):typeof o!="number"||o===0||bi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function xs(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&o[f]!==l&&Ut(e,f,l)}else for(var m in s)s.hasOwnProperty(m)&&Ut(e,m,s[m])}function Ms(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return vi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Es(){}var ri=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,wo=null;function Po(e){var s=bo(e);if(s&&(e=s.stateNode)){var o=e[$n]||null;e:switch(e=s.stateNode,s.type){case"input":if(vo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+us(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var l=o[s];if(l!==e&&l.form===e.form){var f=l[$n]||null;if(!f)throw Error(a(90));vo(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)l=o[s],l.form===e.form&&Ii(l)}break e;case"textarea":Gn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ds(e,!!o.multiple,s,!1)}}}var fs=!1;function Fs(e,s,o){if(fs)return e(s,o);fs=!0;try{var l=e(s);return l}finally{if(fs=!1,(bn!==null||wo!==null)&&(vu(),bn&&(s=bn,e=wo,wo=bn=null,Po(s),e)))for(s=0;s<e.length;s++)Po(e[s])}}function on(e,s){var o=e.stateNode;if(o===null)return null;var l=o[$n]||null;if(l===null)return null;o=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Xs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(Xs)try{var io={};Object.defineProperty(io,"passive",{get:function(){Os=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Os=!1}var Ss=null,No=null,Gs=null;function So(){if(Gs)return Gs;var e,s=No,o=s.length,l,f="value"in Ss?Ss.value:Ss.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(l=1;l<=v&&s[o-l]===f[m-l];l++);return Gs=f.slice(e,1<l?1-l:void 0)}function _o(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function Mn(){return!1}function Pn(e){function s(o,l,f,m,v){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(o=e[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Rn:Mn,this.isPropagationStopped=Mn,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Pn(Vn),Ts=x({},Vn,{view:0,detail:0}),Cs=Pn(Ts),Ho,ro,hs,ks=x({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hs&&(hs&&e.type==="mousemove"?(Ho=e.screenX-hs.screenX,ro=e.screenY-hs.screenY):ro=Ho=0,hs=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),Do=Pn(ks),go=x({},ks,{dataTransfer:0}),lo=Pn(go),Ro=x({},Ts,{relatedTarget:0}),Bo=Pn(Ro),wi=x({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),ta=Pn(wi),Pi=x({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hi=Pn(Pi),Zo=x({},Vn,{data:0}),Tt=Pn(Zo),Si={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ci={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ui={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function li(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Ui[e])?!!s[e]:!1}function yo(){return li}var Uo=x({},Ts,{key:function(e){if(e.key){var s=Si[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ci[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ci=Pn(Uo),M=x({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U=Pn(M),le=x({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),ke=Pn(le),Ve=x({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ge=Pn(Ve),Pt=x({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),It=Pn(Pt),Ft=x({},Vn,{newState:0,oldState:0}),Gt=Pn(Ft),tn=[9,13,27,32],mn=Xs&&"CompositionEvent"in window,cn=null;Xs&&"documentMode"in document&&(cn=document.documentMode);var zs=Xs&&"TextEvent"in window&&!cn,Vt=Xs&&(!mn||cn&&8<cn&&11>=cn),ns=" ",bs=!1;function ms(e,s){switch(e){case"keyup":return tn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function co(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function $s(e,s){switch(e){case"compositionend":return co(s);case"keypress":return s.which!==32?null:(bs=!0,ns);case"textInput":return e=s.data,e===ns&&bs?null:e;default:return null}}function Ks(e,s){if(qs)return e==="compositionend"||!mn&&ms(e,s)?(e=So(),Gs=No=Ss=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Vt&&s.locale!=="ko"?null:s.data;default:return null}}var uo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!uo[e.type]:s==="textarea"}function G(e,s,o,l){bn?wo?wo.push(l):wo=[l]:bn=l,s=Eu(s,"onChange"),0<s.length&&(o=new ao("onChange","change",null,o,l),e.push({event:o,listeners:s}))}var K=null,ue=null;function Y(e){x0(e,0)}function w(e){var s=qo(e);if(Ii(s))return e}function k(e,s){if(e==="change")return s}var A=!1;if(Xs){var R;if(Xs){var P="oninput"in document;if(!P){var te=document.createElement("div");te.setAttribute("oninput","return;"),P=typeof te.oninput=="function"}R=P}else R=!1;A=R&&(!document.documentMode||9<document.documentMode)}function ve(){K&&(K.detachEvent("onpropertychange",pe),ue=K=null)}function pe(e){if(e.propertyName==="value"&&w(ue)){var s=[];G(s,ue,e,Ls(e)),Fs(Y,s)}}function Ne(e,s,o){e==="focusin"?(ve(),K=s,ue=o,K.attachEvent("onpropertychange",pe)):e==="focusout"&&ve()}function Ye(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return w(ue)}function ct(e,s){if(e==="click")return w(s)}function dt(e,s){if(e==="input"||e==="change")return w(s)}function ft(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var st=typeof Object.is=="function"?Object.is:ft;function lt(e,s){if(st(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),l=Object.keys(s);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!Re.call(s,f)||!st(e[f],s[f]))return!1}return!0}function Sn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cn(e,s){var o=Sn(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=s&&l>=s)return{node:o,offset:s-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sn(o)}}function Bn(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?Bn(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function an(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=oo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=oo(e.document)}return s}function zt(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var wt=Xs&&"documentMode"in document&&11>=document.documentMode,Nt=null,Ln=null,pn=null,fo=!1;function Lo(e,s,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fo||Nt==null||Nt!==oo(l)||(l=Nt,"selectionStart"in l&&zt(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pn&&lt(pn,l)||(pn=l,l=Eu(Ln,"onSelect"),0<l.length&&(s=new ao("onSelect","select",null,s,o),e.push({event:s,listeners:l}),s.target=Nt)))}function ss(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ki={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},Vi={},Yi={};Xs&&(Yi=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function qn(e){if(Vi[e])return Vi[e];if(!ki[e])return e;var s=ki[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Yi)return Vi[e]=s[o];return e}var Wi=qn("animationend"),na=qn("animationiteration"),Pc=qn("animationstart"),Wd=qn("transitionrun"),Fd=qn("transitionstart"),Xd=qn("transitioncancel"),Zp=qn("transitionend"),Jp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Fi(e,s){Jp.set(e,s),yn(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ji=[],Br=0,qd=0;function Uc(){for(var e=Br,s=qd=Br=0;s<e;){var o=ji[s];ji[s++]=null;var l=ji[s];ji[s++]=null;var f=ji[s];ji[s++]=null;var m=ji[s];if(ji[s++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&e_(o,f,m)}}function Vc(e,s,o,l){ji[Br++]=e,ji[Br++]=s,ji[Br++]=o,ji[Br++]=l,qd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Kd(e,s,o,l){return Vc(e,s,o,l),Yc(e)}function cr(e,s){return Vc(e,null,null,s),Yc(e)}function e_(e,s,o){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-_t(o),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[s]:l.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function g2(e,s,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,s,o,l){return new g2(e,s,o,l)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,s){var o=e.alternate;return o===null?(o=ui(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function t_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,l,f,m){var v=0;if(l=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=wv(e,o,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=ui(31,o,s,f),e.elementType=ee,e.lanes=m,e;case j:return ur(o.children,f,m,s);case E:v=8,f|=24;break;case T:return e=ui(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case Q:return e=ui(13,o,s,f),e.elementType=Q,e.lanes=m,e;case X:return e=ui(19,o,s,f),e.elementType=X,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case O:v=9;break e;case D:v=11;break e;case W:v=14;break e;case V:v=16,l=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),l=null}return s=ui(v,o,s,f),s.elementType=e,s.type=l,s.lanes=m,s}function ur(e,s,o,l){return e=ui(7,e,l,s),e.lanes=o,e}function Zd(e,s,o){return e=ui(6,e,null,s),e.lanes=o,e}function n_(e){var s=ui(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=ui(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var s_=new WeakMap;function Mi(e,s){if(typeof e=="object"&&e!==null){var o=s_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:oe(s)},s_.set(e,s),s)}return{value:e,source:s,stack:oe(s)}}var Or=[],zr=0,Fc=null,jl=0,Ei=[],Ti=0,Da=null,sa=1,oa="";function ma(e,s){Or[zr++]=jl,Or[zr++]=Fc,Fc=e,jl=s}function o_(e,s,o){Ei[Ti++]=sa,Ei[Ti++]=oa,Ei[Ti++]=Da,Da=e;var l=sa;e=oa;var f=32-_t(l)-1;l&=~(1<<f),o+=1;var m=32-_t(s)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,sa=1<<32-_t(s)+f|o<<f|l,oa=m+e}else sa=1<<m|o<<f|l,oa=e}function ef(e){e.return!==null&&(ma(e,1),o_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,jl=Or[--zr],Or[zr]=null;for(;e===Da;)Da=Ei[--Ti],Ei[Ti]=null,oa=Ei[--Ti],Ei[Ti]=null,sa=Ei[--Ti],Ei[Ti]=null}function i_(e,s){Ei[Ti++]=sa,Ei[Ti++]=oa,Ei[Ti++]=Da,sa=s.id,oa=s.overflow,Da=e}var Co=null,ps=null,vn=!1,Ra=null,Ai=!1,nf=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Mi(s,e)),nf}function a_(e){var s=e.stateNode,o=e.type,l=e.memoizedProps;switch(s[Xt]=e,s[$n]=l,o){case"dialog":dn("cancel",s),dn("close",s);break;case"iframe":case"object":case"embed":dn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)dn(ql[o],s);break;case"source":dn("error",s);break;case"img":case"image":case"link":dn("error",s),dn("load",s);break;case"details":dn("toggle",s);break;case"input":dn("invalid",s),Dn(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":dn("invalid",s);break;case"textarea":dn("invalid",s),xi(s,l.value,l.defaultValue,l.children)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||l.suppressHydrationWarning===!0||S0(s.textContent,o)?(l.popover!=null&&(dn("beforetoggle",s),dn("toggle",s)),l.onScroll!=null&&dn("scroll",s),l.onScrollEnd!=null&&dn("scrollend",s),l.onClick!=null&&(s.onclick=Es),s=!0):s=!1,s||Ba(e,!0)}function r_(e){for(Co=e.return;Co;)switch(Co.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Co=Co.return}}function $r(e){if(e!==Co)return!1;if(!vn)return r_(e),vn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ps&&Ba(e),r_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ps=D0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ps=D0(e)}else s===27?(s=ps,Ga(e.type)?(e=jh,jh=null,ps=e):ps=s):ps=Co?Di(e.stateNode.nextSibling):null;return!0}function dr(){ps=Co=null,vn=!1}function sf(){var e=Ra;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ra=null),e}function Ml(e){Ra===null?Ra=[e]:Ra.push(e)}var of=I(null),fr=null,pa=null;function La(e,s,o){q(of,s._currentValue),s._currentValue=o}function _a(e){e._currentValue=of.current,de(of)}function af(e,s,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var N=m;m=f;for(var Z=0;Z<s.length;Z++)if(N.context===s[Z]){m.lanes|=o,N=m.alternate,N!==null&&(N.lanes|=o),af(m.return,o,e),l||(v=null);break e}m=N.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,l){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var N=f.type;st(f.pendingProps.value,v.value)||(e!==null?e.push(N):e=[N])}}else if(f===We.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&rf(s,e,o,l),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!st(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ko(e){return l_(fr,e)}function Gc(e,s){return fr===null&&hr(e),l_(e,s)}function l_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},pa===null){if(e===null)throw Error(a(308));pa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else pa=pa.next=s;return o}var y2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,l){e.push(l)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},x2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,Qs={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new y2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&x2(b2,function(){e.controller.abort()})}var Tl=null,cf=0,Pr=0,Hr=null;function v2(e,s){if(Tl===null){var o=Tl=[];cf=0,Pr=fh(),Hr={status:"pending",value:void 0,then:function(l){o.push(l)}}}return cf++,s.then(c_,c_),s}function c_(){if(--cf===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function w2(e,s){var o=[],l={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),l}var u_=$.S;$.S=function(e,s){Xg=ot(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&v2(e,s),u_!==null&&u_(e,s)};var mr=I(null);function uf(){var e=mr.current;return e!==null?e:os.pooledCache}function qc(e,s){s===null?q(mr,mr.current):q(mr,s.pool)}function d_(){var e=uf();return e===null?null:{parent:Qs._currentValue,pool:e}}var Ur=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function f_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Es,Es),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e;default:if(typeof s.status=="string")s.then(Es,Es);else{if(e=os,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e}throw _r=s,Ur}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Ur):o}}var _r=null;function m_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function p_(e){if(e===Ur||e===Kc)throw Error(a(483))}var Vr=null,Al=0;function Zc(e){var s=Al;return Al+=1,Vr===null&&(Vr=[]),h_(Vr,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function __(e){function s(ce,se){if(e){var ge=ce.deletions;ge===null?(ce.deletions=[se],ce.flags|=16):ge.push(se)}}function o(ce,se){if(!e)return null;for(;se!==null;)s(ce,se),se=se.sibling;return null}function l(ce){for(var se=new Map;ce!==null;)ce.key!==null?se.set(ce.key,ce):se.set(ce.index,ce),ce=ce.sibling;return se}function f(ce,se){return ce=ha(ce,se),ce.index=0,ce.sibling=null,ce}function m(ce,se,ge){return ce.index=ge,e?(ge=ce.alternate,ge!==null?(ge=ge.index,ge<se?(ce.flags|=67108866,se):ge):(ce.flags|=67108866,se)):(ce.flags|=1048576,se)}function v(ce){return e&&ce.alternate===null&&(ce.flags|=67108866),ce}function N(ce,se,ge,Oe){return se===null||se.tag!==6?(se=Zd(ge,ce.mode,Oe),se.return=ce,se):(se=f(se,ge),se.return=ce,se)}function Z(ce,se,ge,Oe){var $t=ge.type;return $t===j?De(ce,se,ge.props.children,Oe,ge.key):se!==null&&(se.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&pr($t)===se.type)?(se=f(se,ge.props),Nl(se,ge),se.return=ce,se):(se=Wc(ge.type,ge.key,ge.props,null,ce.mode,Oe),Nl(se,ge),se.return=ce,se)}function ye(ce,se,ge,Oe){return se===null||se.tag!==4||se.stateNode.containerInfo!==ge.containerInfo||se.stateNode.implementation!==ge.implementation?(se=Jd(ge,ce.mode,Oe),se.return=ce,se):(se=f(se,ge.children||[]),se.return=ce,se)}function De(ce,se,ge,Oe,$t){return se===null||se.tag!==7?(se=ur(ge,ce.mode,Oe,$t),se.return=ce,se):(se=f(se,ge),se.return=ce,se)}function $e(ce,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=Zd(""+se,ce.mode,ge),se.return=ce,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case S:return ge=Wc(se.type,se.key,se.props,null,ce.mode,ge),Nl(ge,se),ge.return=ce,ge;case C:return se=Jd(se,ce.mode,ge),se.return=ce,se;case V:return se=pr(se),$e(ce,se,ge)}if(he(se)||Ae(se))return se=ur(se,ce.mode,ge,null),se.return=ce,se;if(typeof se.then=="function")return $e(ce,Zc(se),ge);if(se.$$typeof===L)return $e(ce,Gc(ce,se),ge);Jc(ce,se)}return null}function xe(ce,se,ge,Oe){var $t=se!==null?se.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return $t!==null?null:N(ce,se,""+ge,Oe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return ge.key===$t?Z(ce,se,ge,Oe):null;case C:return ge.key===$t?ye(ce,se,ge,Oe):null;case V:return ge=pr(ge),xe(ce,se,ge,Oe)}if(he(ge)||Ae(ge))return $t!==null?null:De(ce,se,ge,Oe,null);if(typeof ge.then=="function")return xe(ce,se,Zc(ge),Oe);if(ge.$$typeof===L)return xe(ce,se,Gc(ce,ge),Oe);Jc(ce,ge)}return null}function Se(ce,se,ge,Oe,$t){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number"||typeof Oe=="bigint")return ce=ce.get(ge)||null,N(se,ce,""+Oe,$t);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case S:return ce=ce.get(Oe.key===null?ge:Oe.key)||null,Z(se,ce,Oe,$t);case C:return ce=ce.get(Oe.key===null?ge:Oe.key)||null,ye(se,ce,Oe,$t);case V:return Oe=pr(Oe),Se(ce,se,ge,Oe,$t)}if(he(Oe)||Ae(Oe))return ce=ce.get(ge)||null,De(se,ce,Oe,$t,null);if(typeof Oe.then=="function")return Se(ce,se,ge,Zc(Oe),$t);if(Oe.$$typeof===L)return Se(ce,se,ge,Gc(se,Oe),$t);Jc(se,Oe)}return null}function Ct(ce,se,ge,Oe){for(var $t=null,En=null,Mt=se,nn=se=0,gn=null;Mt!==null&&nn<ge.length;nn++){Mt.index>nn?(gn=Mt,Mt=null):gn=Mt.sibling;var Tn=xe(ce,Mt,ge[nn],Oe);if(Tn===null){Mt===null&&(Mt=gn);break}e&&Mt&&Tn.alternate===null&&s(ce,Mt),se=m(Tn,se,nn),En===null?$t=Tn:En.sibling=Tn,En=Tn,Mt=gn}if(nn===ge.length)return o(ce,Mt),vn&&ma(ce,nn),$t;if(Mt===null){for(;nn<ge.length;nn++)Mt=$e(ce,ge[nn],Oe),Mt!==null&&(se=m(Mt,se,nn),En===null?$t=Mt:En.sibling=Mt,En=Mt);return vn&&ma(ce,nn),$t}for(Mt=l(Mt);nn<ge.length;nn++)gn=Se(Mt,ce,nn,ge[nn],Oe),gn!==null&&(e&&gn.alternate!==null&&Mt.delete(gn.key===null?nn:gn.key),se=m(gn,se,nn),En===null?$t=gn:En.sibling=gn,En=gn);return e&&Mt.forEach(function(Ja){return s(ce,Ja)}),vn&&ma(ce,nn),$t}function Yt(ce,se,ge,Oe){if(ge==null)throw Error(a(151));for(var $t=null,En=null,Mt=se,nn=se=0,gn=null,Tn=ge.next();Mt!==null&&!Tn.done;nn++,Tn=ge.next()){Mt.index>nn?(gn=Mt,Mt=null):gn=Mt.sibling;var Ja=xe(ce,Mt,Tn.value,Oe);if(Ja===null){Mt===null&&(Mt=gn);break}e&&Mt&&Ja.alternate===null&&s(ce,Mt),se=m(Ja,se,nn),En===null?$t=Ja:En.sibling=Ja,En=Ja,Mt=gn}if(Tn.done)return o(ce,Mt),vn&&ma(ce,nn),$t;if(Mt===null){for(;!Tn.done;nn++,Tn=ge.next())Tn=$e(ce,Tn.value,Oe),Tn!==null&&(se=m(Tn,se,nn),En===null?$t=Tn:En.sibling=Tn,En=Tn);return vn&&ma(ce,nn),$t}for(Mt=l(Mt);!Tn.done;nn++,Tn=ge.next())Tn=Se(Mt,ce,nn,Tn.value,Oe),Tn!==null&&(e&&Tn.alternate!==null&&Mt.delete(Tn.key===null?nn:Tn.key),se=m(Tn,se,nn),En===null?$t=Tn:En.sibling=Tn,En=Tn);return e&&Mt.forEach(function(Rv){return s(ce,Rv)}),vn&&ma(ce,nn),$t}function Zn(ce,se,ge,Oe){if(typeof ge=="object"&&ge!==null&&ge.type===j&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:e:{for(var $t=ge.key;se!==null;){if(se.key===$t){if($t=ge.type,$t===j){if(se.tag===7){o(ce,se.sibling),Oe=f(se,ge.props.children),Oe.return=ce,ce=Oe;break e}}else if(se.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&pr($t)===se.type){o(ce,se.sibling),Oe=f(se,ge.props),Nl(Oe,ge),Oe.return=ce,ce=Oe;break e}o(ce,se);break}else s(ce,se);se=se.sibling}ge.type===j?(Oe=ur(ge.props.children,ce.mode,Oe,ge.key),Oe.return=ce,ce=Oe):(Oe=Wc(ge.type,ge.key,ge.props,null,ce.mode,Oe),Nl(Oe,ge),Oe.return=ce,ce=Oe)}return v(ce);case C:e:{for($t=ge.key;se!==null;){if(se.key===$t)if(se.tag===4&&se.stateNode.containerInfo===ge.containerInfo&&se.stateNode.implementation===ge.implementation){o(ce,se.sibling),Oe=f(se,ge.children||[]),Oe.return=ce,ce=Oe;break e}else{o(ce,se);break}else s(ce,se);se=se.sibling}Oe=Jd(ge,ce.mode,Oe),Oe.return=ce,ce=Oe}return v(ce);case V:return ge=pr(ge),Zn(ce,se,ge,Oe)}if(he(ge))return Ct(ce,se,ge,Oe);if(Ae(ge)){if($t=Ae(ge),typeof $t!="function")throw Error(a(150));return ge=$t.call(ge),Yt(ce,se,ge,Oe)}if(typeof ge.then=="function")return Zn(ce,se,Zc(ge),Oe);if(ge.$$typeof===L)return Zn(ce,se,Gc(ce,ge),Oe);Jc(ce,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint"?(ge=""+ge,se!==null&&se.tag===6?(o(ce,se.sibling),Oe=f(se,ge),Oe.return=ce,ce=Oe):(o(ce,se),Oe=Zd(ge,ce.mode,Oe),Oe.return=ce,ce=Oe),v(ce)):o(ce,se)}return function(ce,se,ge,Oe){try{Al=0;var $t=Zn(ce,se,ge,Oe);return Vr=null,$t}catch(Mt){if(Mt===Ur||Mt===Kc)throw Mt;var En=ui(29,Mt,null,ce.mode);return En.lanes=Oe,En.return=ce,En}finally{}}}var gr=__(!0),g_=__(!1),Oa=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(On&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=Yc(e),e_(e,null,o),s}return Vc(e,l,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,rn(e,o)}}function mf(e,s){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Rl(){if(pf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,l){pf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var Z=N,ye=Z.next;Z.next=null,v===null?m=ye:v.next=ye,v=Z;var De=e.alternate;De!==null&&(De=De.updateQueue,N=De.lastBaseUpdate,N!==v&&(N===null?De.firstBaseUpdate=ye:N.next=ye,De.lastBaseUpdate=Z))}if(m!==null){var $e=f.baseState;v=0,De=ye=Z=null,N=m;do{var xe=N.lane&-536870913,Se=xe!==N.lane;if(Se?(_n&xe)===xe:(l&xe)===xe){xe!==0&&xe===Pr&&(pf=!0),De!==null&&(De=De.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ct=e,Yt=N;xe=s;var Zn=o;switch(Yt.tag){case 1:if(Ct=Yt.payload,typeof Ct=="function"){$e=Ct.call(Zn,$e,xe);break e}$e=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Yt.payload,xe=typeof Ct=="function"?Ct.call(Zn,$e,xe):Ct,xe==null)break e;$e=x({},$e,xe);break e;case 2:Oa=!0}}xe=N.callback,xe!==null&&(e.flags|=64,Se&&(e.flags|=8192),Se=f.callbacks,Se===null?f.callbacks=[xe]:Se.push(xe))}else Se={lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},De===null?(ye=De=Se,Z=$e):De=De.next=Se,v|=xe;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Se=N,N=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);De===null&&(Z=$e),f.baseState=Z,f.firstBaseUpdate=ye,f.lastBaseUpdate=De,m===null&&(f.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=$e}}function y_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function x_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)y_(o[e],s)}var Yr=I(null),eu=I(0);function b_(e,s){e=ka,q(eu,e),q(Yr,s),ka=e|s.baseLanes}function _f(){q(eu,ka),q(Yr,Yr.current)}function gf(){ka=eu.current,de(Yr),de(eu)}var di=I(null),Ni=null;function Ia(e){var s=e.alternate;q(Is,Is.current&1),q(di,e),Ni===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Ni=e)}function yf(e){q(Is,Is.current),q(di,e),Ni===null&&(Ni=e)}function v_(e){e.tag===22?(q(Is,Is.current),q(di,e),Ni===null&&(Ni=e)):Pa()}function Pa(){q(Is,Is.current),q(di,di.current)}function fi(e){de(di),Ni===e&&(Ni=null),de(Is)}var Is=I(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ga=0,en=null,Kn=null,Zs=null,nu=!1,Wr=!1,yr=!1,su=0,Ll=0,Fr=null,S2=0;function As(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!st(e[o],s[o]))return!1;return!0}function bf(e,s,o,l,f,m){return ga=m,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=e===null||e.memoizedState===null?og:Lf,yr=!1,m=o(l,f),yr=!1,Wr&&(m=S_(s,o,l,f)),w_(e),m}function w_(e){$.H=$l;var s=Kn!==null&&Kn.next!==null;if(ga=0,Zs=Kn=en=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||Js||(e=e.dependencies,e!==null&&Xc(e)&&(Js=!0))}function S_(e,s,o,l){en=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,Zs=Kn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=ig,m=s(o,l)}while(Wr);return m}function C2(){var e=$.H,s=e.useState()[0];return s=typeof s.then=="function"?Ol(s):s,e=e.useState()[0],(Kn!==null?Kn.memoizedState:null)!==e&&(en.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ga=0,Zs=Kn=en=null,Wr=!1,Ll=su=0,Fr=null}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zs===null?en.memoizedState=Zs=e:Zs=Zs.next=e,Zs}function Ps(){if(Kn===null){var e=en.alternate;e=e!==null?e.memoizedState:null}else e=Kn.next;var s=Zs===null?en.memoizedState:Zs.next;if(s!==null)Zs=s,Kn=e;else{if(e===null)throw en.alternate===null?Error(a(467)):Error(a(310));Kn=e,e={memoizedState:Kn.memoizedState,baseState:Kn.baseState,baseQueue:Kn.baseQueue,queue:Kn.queue,next:null},Zs===null?en.memoizedState=Zs=e:Zs=Zs.next=e}return Zs}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=h_(Fr,e,s),s=en,(Zs===null?s.memoizedState:Zs.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?og:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===L)return ko(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=en.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var l=en.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),en.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),l=0;l<e;l++)o[l]=ae;return s.index++,o}function ya(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Ps();return kf(s,Kn,e)}function kf(e,s,o){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var N=v=null,Z=null,ye=s,De=!1;do{var $e=ye.lane&-536870913;if($e!==ye.lane?(_n&$e)===$e:(ga&$e)===$e){var xe=ye.revertLane;if(xe===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),$e===Pr&&(De=!0);else if((ga&xe)===xe){ye=ye.next,xe===Pr&&(De=!0);continue}else $e={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Z===null?(N=Z=$e,v=m):Z=Z.next=$e,en.lanes|=xe,Va|=xe;$e=ye.action,yr&&o(m,$e),m=ye.hasEagerState?ye.eagerState:o(m,$e)}else xe={lane:$e,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Z===null?(N=Z=xe,v=m):Z=Z.next=xe,en.lanes|=$e,Va|=$e;ye=ye.next}while(ye!==null&&ye!==s);if(Z===null?v=m:Z.next=N,!st(m,e.memoizedState)&&(Js=!0,De&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Z,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jf(e){var s=Ps(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var l=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);st(m,s.memoizedState)||(Js=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,l]}function C_(e,s,o){var l=en,f=Ps(),m=vn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!st((Kn||f).memoizedState,o);if(v&&(f.memoizedState=o,Js=!0),f=f.queue,Tf(M_.bind(null,l,f,e),[e]),f.getSnapshot!==s||v||Zs!==null&&Zs.memoizedState.tag&1){if(l.flags|=2048,Xr(9,{destroy:void 0},j_.bind(null,l,f,o,s),null),os===null)throw Error(a(349));m||(ga&127)!==0||k_(l,s,o)}return o}function k_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=en.updateQueue,s===null?(s=ou(),en.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function j_(e,s,o,l){s.value=o,s.getSnapshot=l,E_(s)&&T_(e)}function M_(e,s,o){return o(function(){E_(s)&&T_(e)})}function E_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!st(e,o)}catch{return!0}}function T_(e){var s=cr(e,2);s!==null&&si(s,e,2)}function Mf(e){var s=Vo();if(typeof e=="function"){var o=e;if(e=o(),yr){Me(!0);try{o()}finally{Me(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},s}function A_(e,s,o,l){return e.baseState=o,kf(e,Kn,typeof l=="function"?l:ya)}function k2(e,s,o,l,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};$.T!==null?o(!0):m.isTransition=!1,l(m),o=s.pending,o===null?(m.next=s.pending=m,N_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function N_(e,s){var o=s.action,l=s.payload,f=e.state;if(s.isTransition){var m=$.T,v={};$.T=v;try{var N=o(f,l),Z=$.S;Z!==null&&Z(v,N),D_(e,s,N)}catch(ye){Ef(e,s,ye)}finally{m!==null&&v.types!==null&&(m.types=v.types),$.T=m}}else try{m=o(f,l),D_(e,s,m)}catch(ye){Ef(e,s,ye)}}function D_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){R_(e,s,l)},function(l){return Ef(e,s,l)}):R_(e,s,o)}function R_(e,s,o){s.status="fulfilled",s.value=o,B_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,N_(e,o)))}function Ef(e,s,o){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=o,B_(s),s=s.next;while(s!==l)}e.action=null}function B_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function L_(e,s){return s}function O_(e,s){if(vn){var o=os.formState;if(o!==null){e:{var l=en;if(vn){if(ps){t:{for(var f=ps,m=Ai;f.nodeType!==8;){if(!m){f=null;break t}if(f=Di(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ps=Di(f.nextSibling),l=f.data==="F!";break e}}Ba(l)}l=!1}l&&(s=o[0])}}return o=Vo(),o.memoizedState=o.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:s},o.queue=l,o=tg.bind(null,en,l),l.dispatch=o,l=Mf(!1),m=Bf.bind(null,en,!1,l.queue),l=Vo(),f={state:s,dispatch:null,action:e,pending:null},l.queue=f,o=k2.bind(null,en,f,m,o),f.dispatch=o,l.memoizedState=e,[s,o,!1]}function z_(e){var s=Ps();return $_(s,Kn,e)}function $_(e,s,o){if(s=kf(e,s,L_)[0],e=au(ya)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=Ol(s)}catch(v){throw v===Ur?Kc:v}else l=s;s=Ps();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(en.flags|=2048,Xr(9,{destroy:void 0},j2.bind(null,f,o),null)),[l,m,e]}function j2(e,s){e.action=s}function I_(e){var s=Ps(),o=Kn;if(o!==null)return $_(s,o,e);Ps(),s=s.memoizedState,o=Ps();var l=o.queue.dispatch;return o.memoizedState=e,[s,l,!1]}function Xr(e,s,o,l){return e={tag:e,create:o,deps:l,inst:s,next:null},s=en.updateQueue,s===null&&(s=ou(),en.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,s.lastEffect=e),e}function P_(){return Ps().memoizedState}function ru(e,s,o,l){var f=Vo();en.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,l===void 0?null:l)}function lu(e,s,o,l){var f=Ps();l=l===void 0?null:l;var m=f.memoizedState.inst;Kn!==null&&l!==null&&xf(l,Kn.memoizedState.deps)?f.memoizedState=Xr(s,m,o,l):(en.flags|=e,f.memoizedState=Xr(1|s,m,o,l))}function H_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function M2(e){en.flags|=4;var s=en.updateQueue;if(s===null)s=ou(),en.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function U_(e){var s=Ps().memoizedState;return M2({ref:s,nextImpl:e}),function(){if((On&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function V_(e,s){return lu(4,2,e,s)}function Y_(e,s){return lu(4,4,e,s)}function W_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function F_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,W_.bind(null,s,e),o)}function Af(){}function X_(e,s){var o=Ps();s=s===void 0?null:s;var l=o.memoizedState;return s!==null&&xf(s,l[1])?l[0]:(o.memoizedState=[e,s],e)}function G_(e,s){var o=Ps();s=s===void 0?null:s;var l=o.memoizedState;if(s!==null&&xf(s,l[1]))return l[0];if(l=e(),yr){Me(!0);try{e()}finally{Me(!1)}}return o.memoizedState=[l,s],l}function Nf(e,s,o){return o===void 0||(ga&1073741824)!==0&&(_n&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=qg(),en.lanes|=e,Va|=e,o)}function q_(e,s,o,l){return st(o,s)?o:Yr.current!==null?(e=Nf(e,o,l),st(e,s)||(Js=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(_n&261930)===0?(Js=!0,e.memoizedState=o):(e=qg(),en.lanes|=e,Va|=e,s)}function K_(e,s,o,l,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var v=$.T,N={};$.T=N,Bf(e,!1,s,o);try{var Z=f(),ye=$.S;if(ye!==null&&ye(N,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var De=w2(Z,l);zl(e,s,De,pi(e))}else zl(e,s,l,pi(e))}catch($e){zl(e,s,{then:function(){},status:"rejected",reason:$e},pi())}finally{ie.p=m,v!==null&&N.types!==null&&(v.types=N.types),$.T=v}}function E2(){}function Df(e,s,o,l){if(e.tag!==5)throw Error(a(476));var f=Q_(e).queue;K_(e,f,s,F,o===null?E2:function(){return Z_(e),o(l)})}function Q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Z_(e){var s=Q_(e);s.next===null&&(s=e.alternate.memoizedState),zl(e,s.next.queue,{},pi())}function Rf(){return ko(ec)}function J_(){return Ps().memoizedState}function eg(){return Ps().memoizedState}function T2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=pi();e=za(o);var l=$a(s,e,o);l!==null&&(si(l,s,o),Dl(l,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function A2(e,s,o){var l=pi();o={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?ng(s,o):(o=Kd(e,s,o,l),o!==null&&(si(o,e,l),sg(o,s,l)))}function tg(e,s,o){var l=pi();zl(e,s,o,l)}function zl(e,s,o,l){var f={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))ng(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,N=m(v,o);if(f.hasEagerState=!0,f.eagerState=N,st(N,v))return Vc(e,s,f,0),os===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,l),o!==null)return si(o,e,l),sg(o,s,l),!0}return!1}function Bf(e,s,o,l){if(l={lane:2,revertLane:fh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,l,2),s!==null&&si(s,e,2)}function cu(e){var s=e.alternate;return e===en||s!==null&&s===en}function ng(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function sg(e,s,o){if((o&4194048)!==0){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,rn(e,o)}}var $l={readContext:ko,use:iu,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useLayoutEffect:As,useInsertionEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useSyncExternalStore:As,useId:As,useHostTransitionStatus:As,useFormState:As,useActionState:As,useOptimistic:As,useMemoCache:As,useCacheRefresh:As};$l.useEffectEvent=As;var og={readContext:ko,use:iu,useCallback:function(e,s){return Vo().memoizedState=[e,s===void 0?null:s],e},useContext:ko,useEffect:H_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,W_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Vo();s=s===void 0?null:s;var l=e();if(yr){Me(!0);try{e()}finally{Me(!1)}}return o.memoizedState=[l,s],l},useReducer:function(e,s,o){var l=Vo();if(o!==void 0){var f=o(s);if(yr){Me(!0);try{o(s)}finally{Me(!1)}}}else f=s;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=A2.bind(null,en,e),[l.memoizedState,e]},useRef:function(e){var s=Vo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=tg.bind(null,en,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Vo();return Nf(o,e,s)},useTransition:function(){var e=Mf(!1);return e=K_.bind(null,en,e.queue,!0,!1),Vo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var l=en,f=Vo();if(vn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),os===null)throw Error(a(349));(_n&127)!==0||k_(l,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,H_(M_.bind(null,l,m,e),[e]),l.flags|=2048,Xr(9,{destroy:void 0},j_.bind(null,l,m,o,s),null),o},useId:function(){var e=Vo(),s=os.identifierPrefix;if(vn){var o=oa,l=sa;o=(l&~(1<<32-_t(l)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=S2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e){var s=Vo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,en,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Vo().memoizedState=T2.bind(null,en)},useEffectEvent:function(e){var s=Vo(),o={impl:e};return s.memoizedState=o,function(){if((On&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:ko,use:iu,useCallback:X_,useContext:ko,useEffect:Tf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:au,useRef:P_,useState:function(){return au(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ps();return q_(o,Kn.memoizedState,e,s)},useTransition:function(){var e=au(ya)[0],s=Ps().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:Rf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=Ps();return A_(o,Kn,e,s)},useMemoCache:Cf,useCacheRefresh:eg};Lf.useEffectEvent=U_;var ig={readContext:ko,use:iu,useCallback:X_,useContext:ko,useEffect:Tf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:jf,useRef:P_,useState:function(){return jf(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ps();return Kn===null?Nf(o,e,s):q_(o,Kn.memoizedState,e,s)},useTransition:function(){var e=jf(ya)[0],s=Ps().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:Rf,useFormState:I_,useActionState:I_,useOptimistic:function(e,s){var o=Ps();return Kn!==null?A_(o,Kn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:eg};ig.useEffectEvent=U_;function Of(e,s,o,l){s=e.memoizedState,o=o(l,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var l=pi(),f=za(l);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,l),s!==null&&(si(s,e,l),Dl(s,e,l))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var l=pi(),f=za(l);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,l),s!==null&&(si(s,e,l),Dl(s,e,l))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=pi(),l=za(o);l.tag=2,s!=null&&(l.callback=s),s=$a(e,l,o),s!==null&&(si(s,e,o),Dl(s,e,o))}};function ag(e,s,o,l,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):s.prototype&&s.prototype.isPureReactComponent?!lt(o,l)||!lt(f,m):!0}function rg(e,s,o,l){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,l),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var l in s)l!=="ref"&&(o[l]=s[l])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function lg(e){Hc(e)}function cg(e){console.error(e)}function ug(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function dg(e,s,o){try{var l=e.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function fg(e){return e=za(e),e.tag=3,e}function hg(e,s,o,l){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){dg(s,o,l)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dg(s,o,l),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function N2(e,s,o,l,f){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=di.current,o!==null){switch(o.tag){case 31:case 13:return Ni===null?wu():o.alternate===null&&Ns===0&&(Ns=3),o.flags&=-257,o.flags|=65536,o.lanes=f,l===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([l]):s.add(l),ch(e,l,f)),!1;case 22:return o.flags|=65536,l===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([l]):o.add(l)),ch(e,l,f)),!1}throw Error(a(435,o.tag))}return ch(e,l,f),wu(),!1}if(vn)return s=di.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==nf&&(e=Error(a(422),{cause:l}),Ml(Mi(e,o)))):(l!==nf&&(s=Error(a(423),{cause:l}),Ml(Mi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Mi(l,o),f=$f(e.stateNode,l,f),mf(e,f),Ns!==4&&(Ns=2)),!1;var m=Error(a(520),{cause:l});if(m=Mi(m,o),Fl===null?Fl=[m]:Fl.push(m),Ns!==4&&(Ns=2),s===null)return!0;l=Mi(l,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,l,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=fg(f),hg(f,e,o,l),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),Js=!1;function jo(e,s,o,l){s.child=e===null?g_(s,null,o,l):gr(s,e.child,o,l)}function mg(e,s,o,l,f){o=o.render;var m=s.ref;if("ref"in l){var v={};for(var N in l)N!=="ref"&&(v[N]=l[N])}else v=l;return hr(s),l=bf(e,s,o,v,m,f),N=vf(),e!==null&&!Js?(wf(e,s,f),xa(e,s,f)):(vn&&N&&ef(s),s.flags|=1,jo(e,s,l,f),s.child)}function pg(e,s,o,l,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,_g(e,s,m,l,f)):(e=Wc(o.type,null,l,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:lt,o(v,l)&&e.ref===s.ref)return xa(e,s,f)}return s.flags|=1,e=ha(m,l),e.ref=s.ref,e.return=s,s.child=e}function _g(e,s,o,l,f){if(e!==null){var m=e.memoizedProps;if(lt(m,l)&&e.ref===s.ref)if(Js=!1,s.pendingProps=l=m,Xf(e,f))(e.flags&131072)!==0&&(Js=!0);else return s.lanes=e.lanes,xa(e,s,f)}return Pf(e,s,o,l,f)}function gg(e,s,o,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(l=s.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,s.child=null;return yg(e,s,m,o,l)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?b_(s,m):_f(),v_(s);else return l=s.lanes=536870912,yg(e,s,m!==null?m.baseLanes|o:o,o,l)}else m!==null?(qc(s,m.cachePool),b_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Pa());return jo(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function yg(e,s,o,l,f){var m=uf();return m=m===null?null:{parent:Qs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),v_(s),e!==null&&Ir(e,s,l,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function xg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,fi(s),s.memoizedState=null,e}function D2(e,s,o){var l=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(vn){if(l.mode==="hidden")return e=du(s,l),s.lanes=536870912,Il(null,e);if(yf(s),(e=ps)?(e=N0(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,Co=s,ps=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,l)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=xg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Js||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,Js||f){if(l=os,l!==null&&(v=sn(l,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,cr(e,v),si(l,e,v),If;wu(),s=xg(e,s,o)}else e=m.treeContext,ps=Di(v.nextSibling),Co=s,vn=!0,Ra=null,Ai=!1,e!==null&&i_(s,e),s=du(s,l),s.flags|=4096;return s}return e=ha(e.child,{mode:l.mode,children:l.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,l,f){return hr(s),o=bf(e,s,o,l,void 0,f),l=vf(),e!==null&&!Js?(wf(e,s,f),xa(e,s,f)):(vn&&l&&ef(s),s.flags|=1,jo(e,s,o,f),s.child)}function bg(e,s,o,l,f,m){return hr(s),s.updateQueue=null,o=S_(s,l,o,f),w_(e),l=vf(),e!==null&&!Js?(wf(e,s,m),xa(e,s,m)):(vn&&l&&ef(s),s.flags|=1,jo(e,s,o,m),s.child)}function vg(e,s,o,l,f){if(hr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=ko(v)),m=new o(l,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=l,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?ko(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,l),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Bl(s,l,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(e===null){m=s.stateNode;var N=s.memoizedProps,Z=xr(o,N);m.props=Z;var ye=m.context,De=o.contextType;v=Lr,typeof De=="object"&&De!==null&&(v=ko(De));var $e=o.getDerivedStateFromProps;De=typeof $e=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=s.pendingProps!==N,De||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||ye!==v)&&rg(s,m,l,v),Oa=!1;var xe=s.memoizedState;m.state=xe,Bl(s,l,m,f),Rl(),ye=s.memoizedState,N||xe!==ye||Oa?(typeof $e=="function"&&(Of(s,o,$e,l),ye=s.memoizedState),(Z=Oa||ag(s,o,Z,l,xe,ye,v))?(De||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=ye),m.props=l,m.state=ye,m.context=v,l=Z):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,De=xr(o,v),m.props=De,$e=s.pendingProps,xe=m.context,ye=o.contextType,Z=Lr,typeof ye=="object"&&ye!==null&&(Z=ko(ye)),N=o.getDerivedStateFromProps,(ye=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==$e||xe!==Z)&&rg(s,m,l,Z),Oa=!1,xe=s.memoizedState,m.state=xe,Bl(s,l,m,f),Rl();var Se=s.memoizedState;v!==$e||xe!==Se||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof N=="function"&&(Of(s,o,N,l),Se=s.memoizedState),(De=Oa||ag(s,o,De,l,xe,Se,Z)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Se,Z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Se,Z)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=Se),m.props=l,m.state=Se,m.context=Z,l=De):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),l=!1)}return m=l,fu(e,s),l=(s.flags&128)!==0,m||l?(m=s.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&l?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):jo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=xa(e,s,f),e}function wg(e,s,o,l){return dr(),s.flags|=256,jo(e,s,o,l),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:d_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=mi),e}function Sg(e,s,o){var l=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Is.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(vn){if(f?Ia(s):Pa(),(e=ps)?(e=N0(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,Co=s,ps=null)):e=null,e===null)throw Ba(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var N=l.children;return l=l.fallback,f?(Pa(),f=s.mode,N=hu({mode:"hidden",children:N},f),l=ur(l,f,o,null),N.return=s,l.return=s,N.sibling=l,s.child=N,l=s.child,l.memoizedState=Uf(o),l.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(null,l)):(Ia(s),Yf(s,N))}var Z=e.memoizedState;if(Z!==null&&(N=Z.dehydrated,N!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),N=l.fallback,f=s.mode,l=hu({mode:"visible",children:l.children},f),N=ur(N,f,o,null),N.flags|=2,l.return=s,N.return=s,l.sibling=N,s.child=l,gr(s,e.child,null,o),l=s.child,l.memoizedState=Uf(o),l.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=Il(null,l));else if(Ia(s),kh(N)){if(v=N.nextSibling&&N.nextSibling.dataset,v)var ye=v.dgst;v=ye,l=Error(a(419)),l.stack="",l.digest=v,Ml({value:l,source:null,stack:null}),s=Wf(e,s,o)}else if(Js||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,Js||v){if(v=os,v!==null&&(l=sn(v,o),l!==0&&l!==Z.retryLane))throw Z.retryLane=l,cr(e,l),si(v,e,l),If;Ch(N)||wu(),s=Wf(e,s,o)}else Ch(N)?(s.flags|=192,s.child=e.child,s=null):(e=Z.treeContext,ps=Di(N.nextSibling),Co=s,vn=!0,Ra=null,Ai=!1,e!==null&&i_(s,e),s=Yf(s,l.children),s.flags|=4096);return s}return f?(Pa(),N=l.fallback,f=s.mode,Z=e.child,ye=Z.sibling,l=ha(Z,{mode:"hidden",children:l.children}),l.subtreeFlags=Z.subtreeFlags&65011712,ye!==null?N=ha(ye,N):(N=ur(N,f,o,null),N.flags|=2),N.return=s,l.return=s,l.sibling=N,s.child=l,Il(null,l),l=s.child,N=e.child.memoizedState,N===null?N=Uf(o):(f=N.cachePool,f!==null?(Z=Qs._currentValue,f=f.parent!==Z?{parent:Z,pool:Z}:f):f=d_(),N={baseLanes:N.baseLanes|o,cachePool:f}),l.memoizedState=N,l.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(e.child,l)):(Ia(s),o=e.child,e=o.sibling,o=ha(o,{mode:"visible",children:l.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=ui(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return gr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Cg(e,s,o){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,l,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function kg(e,s,o){var l=s.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var v=Is.current,N=(v&2)!==0;if(N?(v=v&1|2,s.flags|=128):v&=1,q(Is,v),jo(e,s,l,o),l=vn?jl:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,o,s);else if(e.tag===19)Cg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,l);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,l);break;case"together":Ff(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function xa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ha(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ha(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function R2(e,s,o){switch(s.tag){case 3:Ke(s,s.stateNode.containerInfo),La(s,Qs,e.memoizedState.cache),dr();break;case 27:case 5:Lt(s);break;case 4:Ke(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Sg(e,s,o):(Ia(s),e=xa(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(l=(o&s.childLanes)!==0,l||(Ir(e,s,o,!1),l=(o&s.childLanes)!==0),f){if(l)return kg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),q(Is,Is.current),l)break;return null;case 22:return s.lanes=0,gg(e,s,o,s.pendingProps);case 24:La(s,Qs,e.memoizedState.cache)}return xa(e,s,o)}function jg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Js=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return Js=!1,R2(e,s,o);Js=(e.flags&131072)!==0}else Js=!1,vn&&(s.flags&1048576)!==0&&o_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(l=xr(e,l),s.tag=1,s=vg(null,s,e,l,o)):(s.tag=0,s=Pf(null,s,e,l,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=mg(null,s,e,l,o);break e}else if(f===W){s.tag=14,s=pg(null,s,e,l,o);break e}}throw s=ne(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return l=s.type,f=xr(l,s.pendingProps),vg(e,s,l,f,o);case 3:e:{if(Ke(s,s.stateNode.containerInfo),e===null)throw Error(a(387));l=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Bl(s,l,null,o);var v=s.memoizedState;if(l=v.cache,La(s,Qs,l),l!==m.cache&&rf(s,[Qs],o,!0),Rl(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=wg(e,s,l,o);break e}else if(l!==f){f=Mi(Error(a(424)),s),Ml(f),s=wg(e,s,l,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ps=Di(e.firstChild),Co=s,vn=!0,Ra=null,Ai=!0,o=g_(s,null,l,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),l===f){s=xa(e,s,o);break e}jo(e,s,l,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=z0(s.type,null,s.pendingProps,null))?s.memoizedState=o:vn||(o=s.type,e=s.pendingProps,l=Tu(Te.current).createElement(o),l[Xt]=s,l[$n]=e,Mo(l,o,e),jn(l),s.stateNode=l):s.memoizedState=z0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Lt(s),e===null&&vn&&(l=s.stateNode=B0(s.type,s.pendingProps,Te.current),Co=s,Ai=!0,f=ps,Ga(s.type)?(jh=f,ps=Di(l.firstChild)):ps=f),jo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&vn&&((f=l=ps)&&(l=cv(l,s.type,s.pendingProps,Ai),l!==null?(s.stateNode=l,Co=s,ps=Di(l.firstChild),Ai=!1,f=!0):f=!1),f||Ba(s)),Lt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,vh(f,m)?l=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,C2,null,null,o),ec._currentValue=f),fu(e,s),jo(e,s,l,o),s.child;case 6:return e===null&&vn&&((e=o=ps)&&(o=uv(o,s.pendingProps,Ai),o!==null?(s.stateNode=o,Co=s,ps=null,e=!0):e=!1),e||Ba(s)),null;case 13:return Sg(e,s,o);case 4:return Ke(s,s.stateNode.containerInfo),l=s.pendingProps,e===null?s.child=gr(s,null,l,o):jo(e,s,l,o),s.child;case 11:return mg(e,s,s.type,s.pendingProps,o);case 7:return jo(e,s,s.pendingProps,o),s.child;case 8:return jo(e,s,s.pendingProps.children,o),s.child;case 12:return jo(e,s,s.pendingProps.children,o),s.child;case 10:return l=s.pendingProps,La(s,s.type,l.value),jo(e,s,l.children,o),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,hr(s),f=ko(f),l=l(f),s.flags|=1,jo(e,s,l,o),s.child;case 14:return pg(e,s,s.type,s.pendingProps,o);case 15:return _g(e,s,s.type,s.pendingProps,o);case 19:return kg(e,s,o);case 31:return D2(e,s,o);case 22:return gg(e,s,o,s.pendingProps);case 24:return hr(s),l=ko(Qs),e===null?(f=uf(),f===null&&(f=os,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:l,cache:f},ff(s),La(s,Qs,f)):((e.lanes&o)!==0&&(hf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,Qs,l)):(l=m.cache,La(s,Qs,l),l!==f.cache&&rf(s,[Qs],o,!0))),jo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ba(e){e.flags|=4}function Gf(e,s,o,l,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw _r=Qc,df}else e.flags&=-16777217}function Mg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(s))if(Jg())e.flags|=8192;else throw _r=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?mt():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!vn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _s(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=o,s}function B2(e,s,o){var l=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _s(s),null;case 1:return _s(s),null;case 3:return o=s.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),_a(Qs),Ze(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?ba(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),_s(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ba(s),m!==null?(_s(s),Mg(s,m)):(_s(s),Gf(s,f,null,l,o))):m?m!==e.memoizedState?(ba(s),_s(s),Mg(s,m)):(_s(s),s.flags&=-16777217):(e=e.memoizedProps,e!==l&&ba(s),_s(s),Gf(s,f,e,l,o)),null;case 27:if(qt(s),o=Te.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&ba(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return _s(s),null}e=me.current,$r(s)?a_(s):(e=B0(f,l,o),s.stateNode=e,ba(s))}return _s(s),null;case 5:if(qt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&ba(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return _s(s),null}if(m=me.current,$r(s))a_(s);else{var v=Tu(Te.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}m[Xt]=s,m[$n]=l;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Mo(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ba(s)}}return _s(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==l&&ba(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(a(166));if(e=Te.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,l=null,f=Co,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Xt]=s,e=!!(e.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||S0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(l),e[Xt]=s,s.stateNode=e}return _s(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(l=$r(s),o!==null){if(e===null){if(!l)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_s(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(fi(s),s):(fi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return _s(s),null;case 13:if(l=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_s(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(fi(s),s):(fi(s),null)}return fi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=l!==null,e=e!==null&&e.memoizedState!==null,o&&(l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),_s(s),null);case 4:return Ze(),e===null&&_h(s.stateNode.containerInfo),_s(s),null;case 10:return _a(s.type),_s(s),null;case 19:if(de(Is),l=s.memoizedState,l===null)return _s(s),null;if(f=(s.flags&128)!==0,m=l.rendering,m===null)if(f)Pl(l,!1);else{if(Ns!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(l,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)t_(o,e),o=o.sibling;return q(Is,Is.current&1|2),vn&&ma(s,l.treeForkCount),s.child}e=e.sibling}l.tail!==null&&ot()>xu&&(s.flags|=128,f=!0,Pl(l,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!vn)return _s(s),null}else 2*ot()-l.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(l,!1),s.lanes=4194304);l.isBackwards?(m.sibling=s.child,s.child=m):(e=l.last,e!==null?e.sibling=m:s.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ot(),e.sibling=null,o=Is.current,q(Is,f?o&1|2:o&1),vn&&ma(s,l.treeForkCount),e):(_s(s),null);case 22:case 23:return fi(s),gf(),l=s.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(o&536870912)!==0&&(s.flags&128)===0&&(_s(s),s.subtreeFlags&6&&(s.flags|=8192)):_s(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==o&&(s.flags|=2048),e!==null&&de(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_a(Qs),_s(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function L2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return _a(Qs),Ze(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return qt(s),null;case 31:if(s.memoizedState!==null){if(fi(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(fi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return de(Is),null;case 4:return Ze(),null;case 10:return _a(s.type),null;case 22:case 23:return fi(s),gf(),e!==null&&de(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return _a(Qs),null;case 25:return null;default:return null}}function Eg(e,s){switch(tf(s),s.tag){case 3:_a(Qs),Ze();break;case 26:case 27:case 5:qt(s);break;case 4:Ze();break;case 31:s.memoizedState!==null&&fi(s);break;case 13:fi(s);break;case 19:de(Is);break;case 10:_a(s.type);break;case 22:case 23:fi(s),gf(),e!==null&&de(mr);break;case 24:_a(Qs)}}function Hl(e,s){try{var o=s.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var f=l.next;o=f;do{if((o.tag&e)===e){l=void 0;var m=o.create,v=o.inst;l=m(),v.destroy=l}o=o.next}while(o!==f)}}catch(N){Wn(s,s.return,N)}}function Ha(e,s,o){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var v=l.inst,N=v.destroy;if(N!==void 0){v.destroy=void 0,f=s;var Z=o,ye=N;try{ye()}catch(De){Wn(f,Z,De)}}}l=l.next}while(l!==m)}}catch(De){Wn(s,s.return,De)}}function Tg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{x_(s,o)}catch(l){Wn(e,e.return,l)}}}function Ag(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(l){Wn(e,s,l)}}function Ul(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof o=="function"?e.refCleanup=o(l):o.current=l}}catch(f){Wn(e,s,f)}}function ia(e,s){var o=e.ref,l=e.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(f){Wn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Wn(e,s,f)}else o.current=null}function Ng(e){var s=e.type,o=e.memoizedProps,l=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(f){Wn(e,e.return,f)}}function qf(e,s,o){try{var l=e.stateNode;sv(l,e.type,o,s),l[$n]=s}catch(f){Wn(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Es));else if(l!==4&&(l===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(l!==4&&(l===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Rg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var l=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Mo(s,l,o),s[Xt]=e,s[$n]=o}catch(m){Wn(e,e.return,m)}}var va=!1,eo=!1,Zf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,xo=null;function O2(e,s){if(e=e.containerInfo,xh=Ou,e=an(e),zt(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,N=-1,Z=-1,ye=0,De=0,$e=e,xe=null;t:for(;;){for(var Se;$e!==o||f!==0&&$e.nodeType!==3||(N=v+f),$e!==m||l!==0&&$e.nodeType!==3||(Z=v+l),$e.nodeType===3&&(v+=$e.nodeValue.length),(Se=$e.firstChild)!==null;)xe=$e,$e=Se;for(;;){if($e===e)break t;if(xe===o&&++ye===f&&(N=v),xe===m&&++De===l&&(Z=v),(Se=$e.nextSibling)!==null)break;$e=xe,xe=$e.parentNode}$e=Se}o=N===-1||Z===-1?null:{start:N,end:Z}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,xo=s;xo!==null;)if(s=xo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,xo=e;else for(;xo!==null;){switch(s=xo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var Ct=xr(o.type,f);e=l.getSnapshotBeforeUpdate(Ct,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Wn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,xo=e;break}xo=s.return}}function Lg(e,s,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(e,o),l&4&&Hl(5,o);break;case 1:if(Sa(e,o),l&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Wn(o,o.return,v)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wn(o,o.return,v)}}l&64&&Tg(o),l&512&&Ul(o,o.return);break;case 3:if(Sa(e,o),l&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{x_(e,s)}catch(v){Wn(o,o.return,v)}}break;case 27:s===null&&l&4&&Rg(o);case 26:case 5:Sa(e,o),s===null&&l&4&&Ng(o),l&512&&Ul(o,o.return);break;case 12:Sa(e,o);break;case 31:Sa(e,o),l&4&&$g(e,o);break;case 13:Sa(e,o),l&4&&Ig(e,o),l&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=W2.bind(null,o),dv(e,o))));break;case 22:if(l=o.memoizedState!==null||va,!l){s=s!==null&&s.memoizedState!==null||eo,f=va;var m=eo;va=l,(eo=s)&&!m?Ca(e,o,(o.subtreeFlags&8772)!==0):Sa(e,o),va=f,eo=m}break;case 30:break;default:Sa(e,o)}}function Og(e){var s=e.alternate;s!==null&&(e.alternate=null,Og(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ai(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vs=null,Jo=!1;function wa(e,s,o){for(o=o.child;o!==null;)zg(e,s,o),o=o.sibling}function zg(e,s,o){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 26:eo||ia(o,s),wa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:eo||ia(o,s);var l=vs,f=Jo;Ga(o.type)&&(vs=o.stateNode,Jo=!1),wa(e,s,o),Ql(o.stateNode),vs=l,Jo=f;break;case 5:eo||ia(o,s);case 6:if(l=vs,f=Jo,vs=null,wa(e,s,o),vs=l,Jo=f,vs!==null)if(Jo)try{(vs.nodeType===9?vs.body:vs.nodeName==="HTML"?vs.ownerDocument.body:vs).removeChild(o.stateNode)}catch(m){Wn(o,s,m)}else try{vs.removeChild(o.stateNode)}catch(m){Wn(o,s,m)}break;case 18:vs!==null&&(Jo?(e=vs,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):T0(vs,o.stateNode));break;case 4:l=vs,f=Jo,vs=o.stateNode.containerInfo,Jo=!0,wa(e,s,o),vs=l,Jo=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),eo||Ha(4,o,s),wa(e,s,o);break;case 1:eo||(ia(o,s),l=o.stateNode,typeof l.componentWillUnmount=="function"&&Ag(o,s,l)),wa(e,s,o);break;case 21:wa(e,s,o);break;case 22:eo=(l=eo)||o.memoizedState!==null,wa(e,s,o),eo=l;break;default:wa(e,s,o)}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Wn(s,s.return,o)}}}function Ig(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Wn(s,s.return,o)}}function z2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Bg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Bg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=z2(e);s.forEach(function(l){if(!o.has(l)){o.add(l);var f=F2.bind(null,e,l);l.then(f,f)}})}function ei(e,s){var o=s.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l],m=e,v=s,N=v;e:for(;N!==null;){switch(N.tag){case 27:if(Ga(N.type)){vs=N.stateNode,Jo=!1;break e}break;case 5:vs=N.stateNode,Jo=!1;break e;case 3:case 4:vs=N.stateNode.containerInfo,Jo=!0;break e}N=N.return}if(vs===null)throw Error(a(160));zg(m,v,f),vs=null,Jo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Pg(s,e),s=s.sibling}var Xi=null;function Pg(e,s){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(s,e),ti(e),l&4&&(Ha(3,e,e.return),Hl(3,e),Ha(5,e,e.return));break;case 1:ei(s,e),ti(e),l&512&&(eo||o===null||ia(o,o.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var f=Xi;if(ei(s,e),ti(e),l&512&&(eo||o===null||ia(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=e.memoizedState,o===null)if(l===null)if(e.stateNode===null){e:{l=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[js]||m[Xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Mo(m,l,o),m[Xt]=e,jn(m),l=m;break e;case"link":var v=P0("link","href",f).get(l+(o.href||""));if(v){for(var N=0;N<v.length;N++)if(m=v[N],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(N,1);break t}}m=f.createElement(l),Mo(m,l,o),f.head.appendChild(m);break;case"meta":if(v=P0("meta","content",f).get(l+(o.content||""))){for(N=0;N<v.length;N++)if(m=v[N],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(N,1);break t}}m=f.createElement(l),Mo(m,l,o),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[Xt]=e,jn(m),l=m}e.stateNode=l}else H0(f,e.type,e.stateNode);else e.stateNode=I0(f,l,e.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?H0(f,e.type,e.stateNode):I0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ei(s,e),ti(e),l&512&&(eo||o===null||ia(o,o.return)),o!==null&&l&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ei(s,e),ti(e),l&512&&(eo||o===null||ia(o,o.return)),e.flags&32){f=e.stateNode;try{ys(f,"")}catch(Ct){Wn(e,e.return,Ct)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),l&1024&&(Zf=!0);break;case 6:if(ei(s,e),ti(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,o=e.stateNode;try{o.nodeValue=l}catch(Ct){Wn(e,e.return,Ct)}}break;case 3:if(Du=null,f=Xi,Xi=Au(s.containerInfo),ei(s,e),Xi=f,ti(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(Ct){Wn(e,e.return,Ct)}Zf&&(Zf=!1,Hg(e));break;case 4:l=Xi,Xi=Au(e.stateNode.containerInfo),ei(s,e),ti(e),Xi=l;break;case 12:ei(s,e),ti(e);break;case 31:ei(s,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_u(e,l)));break;case 13:ei(s,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_u(e,l)));break;case 22:f=e.memoizedState!==null;var Z=o!==null&&o.memoizedState!==null,ye=va,De=eo;if(va=ye||f,eo=De||Z,ei(s,e),eo=De,va=ye,ti(e),l&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Z||va||eo||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Z=o=s;try{if(m=Z.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{N=Z.stateNode;var $e=Z.memoizedProps.style,xe=$e!=null&&$e.hasOwnProperty("display")?$e.display:null;N.style.display=xe==null||typeof xe=="boolean"?"":(""+xe).trim()}}catch(Ct){Wn(Z,Z.return,Ct)}}}else if(s.tag===6){if(o===null){Z=s;try{Z.stateNode.nodeValue=f?"":Z.memoizedProps}catch(Ct){Wn(Z,Z.return,Ct)}}}else if(s.tag===18){if(o===null){Z=s;try{var Se=Z.stateNode;f?A0(Se,!0):A0(Z.stateNode,!1)}catch(Ct){Wn(Z,Z.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=e.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,_u(e,o))));break;case 19:ei(s,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_u(e,l)));break;case 30:break;case 21:break;default:ei(s,e),ti(e)}}function ti(e){var s=e.flags;if(s&2){try{for(var o,l=e.return;l!==null;){if(Dg(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(ys(v,""),o.flags&=-33);var N=Kf(e);pu(e,N,v);break;case 3:case 4:var Z=o.stateNode.containerInfo,ye=Kf(e);Qf(e,ye,Z);break;default:throw Error(a(161))}}catch(De){Wn(e,e.return,De)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Hg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Sa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Lg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:ia(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Ag(s,s.return,o),br(s);break;case 27:Ql(s.stateNode);case 26:case 5:ia(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,o),Hl(4,m);break;case 1:if(Ca(f,m,o),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Wn(l,l.return,ye)}if(l=m,f=l.updateQueue,f!==null){var N=l.stateNode;try{var Z=f.shared.hiddenCallbacks;if(Z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Z.length;f++)y_(Z[f],N)}catch(ye){Wn(l,l.return,ye)}}o&&v&64&&Tg(m),Ul(m,m.return);break;case 27:Rg(m);case 26:case 5:Ca(f,m,o),o&&l===null&&v&4&&Ng(m),Ul(m,m.return);break;case 12:Ca(f,m,o);break;case 31:Ca(f,m,o),o&&v&4&&$g(f,m);break;case 13:Ca(f,m,o),o&&v&4&&Ig(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,o),Ul(m,m.return);break;case 30:break;default:Ca(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Gi(e,s,o,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ug(e,s,o,l),s=s.sibling}function Ug(e,s,o,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(e,s,o,l),f&2048&&Hl(9,s);break;case 1:Gi(e,s,o,l);break;case 3:Gi(e,s,o,l),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Gi(e,s,o,l),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,N=m.onPostCommit;typeof N=="function"&&N(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Z){Wn(s,s.return,Z)}}else Gi(e,s,o,l);break;case 31:Gi(e,s,o,l);break;case 13:Gi(e,s,o,l);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Gi(e,s,o,l):Vl(e,s):m._visibility&2?Gi(e,s,o,l):(m._visibility|=2,Gr(e,s,o,l,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Gi(e,s,o,l),f&2048&&eh(s.alternate,s);break;default:Gi(e,s,o,l)}}function Gr(e,s,o,l,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,N=o,Z=l,ye=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,N,Z,f),Hl(8,v);break;case 23:break;case 22:var De=v.stateNode;v.memoizedState!==null?De._visibility&2?Gr(m,v,N,Z,f):Vl(m,v):(De._visibility|=2,Gr(m,v,N,Z,f)),f&&ye&2048&&Jf(v.alternate,v);break;case 24:Gr(m,v,N,Z,f),f&&ye&2048&&eh(v.alternate,v);break;default:Gr(m,v,N,Z,f)}s=s.sibling}}function Vl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,l=s,f=l.flags;switch(l.tag){case 22:Vl(o,l),f&2048&&Jf(l.alternate,l);break;case 24:Vl(o,l),f&2048&&eh(l.alternate,l);break;default:Vl(o,l)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Vg(e,s,o),e=e.sibling}function Vg(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&Sv(o,Xi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var l=Xi;Xi=Au(e.stateNode.containerInfo),qr(e,s,o),Xi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Yl,Yl=16777216,qr(e,s,o),Yl=l):qr(e,s,o));break;default:qr(e,s,o)}}function Yg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];xo=l,Fg(l,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];xo=l,Fg(l,e)}Yg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Fg(e,s){for(;xo!==null;){var o=xo;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:El(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,xo=l;else e:for(o=e;xo!==null;){l=xo;var f=l.sibling,m=l.return;if(Og(l),l===o){xo=null;break e}if(f!==null){f.return=m,xo=f;break e}xo=m}}}var $2={getCacheForType:function(e){var s=ko(Qs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return ko(Qs).controller.signal}},I2=typeof WeakMap=="function"?WeakMap:Map,On=0,os=null,un=null,_n=0,Yn=0,hi=null,Ua=!1,Kr=!1,th=!1,ka=0,Ns=0,Va=0,vr=0,nh=0,mi=0,Qr=0,Fl=null,ni=null,sh=!1,yu=0,Xg=0,xu=1/0,bu=null,Ya=null,ho=0,Wa=null,Zr=null,ja=0,oh=0,ih=null,Gg=null,Xl=0,ah=null;function pi(){return(On&2)!==0&&_n!==0?_n&-_n:$.T!==null?fh():kn()}function qg(){if(mi===0)if((_n&536870912)===0||vn){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),mi=e}else mi=536870912;return e=di.current,e!==null&&(e.flags|=32),mi}function si(e,s,o){(e===os&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,_n,mi,!1)),ht(e,o),((On&2)===0||e!==os)&&(e===os&&((On&2)===0&&(vr|=o),Ns===4&&Fa(e,_n,mi,!1)),aa(e))}function Kg(e,s,o){if((On&6)!==0)throw Error(a(327));var l=!o&&(s&127)===0&&(s&e.expiredLanes)===0||nt(e,s),f=l?U2(e,s):lh(e,s,!0),m=l;do{if(f===0){Kr&&!l&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!P2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var N=e;f=Fl;var Z=N.current.memoizedState.isDehydrated;if(Z&&(Jr(N,v).flags|=256),v=lh(N,v,!1),v!==2){if(th&&!Z){N.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=ni,ni=f,m!==null&&(ni===null?ni=m:ni.push.apply(ni,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(l,s,mi,!Ua);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ot(),10<f)){if(Fa(l,s,mi,!Ua),ut(l,0,!0)!==0)break e;ja=s,l.timeoutHandle=M0(Qg.bind(null,l,o,ni,bu,sh,s,mi,vr,Qr,Ua,m,"Throttled",-0,0),f);break e}Qg(l,o,ni,bu,sh,s,mi,vr,Qr,Ua,m,null,-0,0)}}break}while(!0);aa(e)}function Qg(e,s,o,l,f,m,v,N,Z,ye,De,$e,xe,Se){if(e.timeoutHandle=-1,$e=s.subtreeFlags,$e&8192||($e&16785408)===16785408){$e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Es},Vg(s,m,$e);var Ct=(m&62914560)===m?yu-ot():(m&4194048)===m?Xg-ot():0;if(Ct=Cv($e,Ct),Ct!==null){ja=m,e.cancelPendingCommit=Ct(i0.bind(null,e,s,m,o,l,f,v,N,Z,De,$e,null,xe,Se)),Fa(e,m,v,!ye);return}}i0(e,s,m,o,l,f,v,N,Z)}function P2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var f=o[l],m=f.getSnapshot;f=f.value;try{if(!st(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,l){s&=~nh,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,l&&(e.warmLanes|=s),l=e.expirationTimes;for(var f=s;0<f;){var m=31-_t(f),v=1<<m;l[m]=-1,f&=~v}o!==0&&fn(e,o,s)}function vu(){return(On&6)===0?(Gl(0),!1):!0}function rh(){if(un!==null){if(Yn===0)var e=un.return;else e=un,pa=fr=null,Sf(e),Vr=null,Al=0,e=un;for(;e!==null;)Eg(e.alternate,e),e=e.return;un=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,av(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ja=0,rh(),os=e,un=o=ha(e.current,null),_n=s,Yn=0,hi=null,Ua=!1,Kr=nt(e,s),th=!1,Qr=mi=nh=vr=Va=Ns=0,ni=Fl=null,sh=!1,(s&8)!==0&&(s|=s&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=s;0<l;){var f=31-_t(l),m=1<<f;s|=e[f],l&=~m}return ka=s,Uc(),o}function Zg(e,s){en=null,$.H=$l,s===Ur||s===Kc?(s=m_(),Yn=3):s===df?(s=m_(),Yn=4):Yn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,hi=s,un===null&&(Ns=1,uu(e,Mi(s,e.current)))}function Jg(){var e=di.current;return e===null?!0:(_n&4194048)===_n?Ni===null:(_n&62914560)===_n||(_n&536870912)!==0?e===Ni:!1}function e0(){var e=$.H;return $.H=$l,e===null?$l:e}function t0(){var e=$.A;return $.A=$2,e}function wu(){Ns=4,Ua||(_n&4194048)!==_n&&di.current!==null||(Kr=!0),(Va&134217727)===0&&(vr&134217727)===0||os===null||Fa(os,_n,mi,!1)}function lh(e,s,o){var l=On;On|=2;var f=e0(),m=t0();(os!==e||_n!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Ns;e:do try{if(Yn!==0&&un!==null){var N=un,Z=hi;switch(Yn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(s=!0);var ye=Yn;if(Yn=0,hi=null,el(e,N,Z,ye),o&&Kr){v=0;break e}break;default:ye=Yn,Yn=0,hi=null,el(e,N,Z,ye)}}H2(),v=Ns;break}catch(De){Zg(e,De)}while(!0);return s&&e.shellSuspendCounter++,pa=fr=null,On=l,$.H=f,$.A=m,un===null&&(os=null,_n=0,Uc()),v}function H2(){for(;un!==null;)n0(un)}function U2(e,s){var o=On;On|=2;var l=e0(),f=t0();os!==e||_n!==s?(bu=null,xu=ot()+500,Jr(e,s)):Kr=nt(e,s);e:do try{if(Yn!==0&&un!==null){s=un;var m=hi;t:switch(Yn){case 1:Yn=0,hi=null,el(e,s,m,1);break;case 2:case 9:if(f_(m)){Yn=0,hi=null,s0(s);break}s=function(){Yn!==2&&Yn!==9||os!==e||(Yn=7),aa(e)},m.then(s,s);break e;case 3:Yn=7;break e;case 4:Yn=5;break e;case 7:f_(m)?(Yn=0,hi=null,s0(s)):(Yn=0,hi=null,el(e,s,m,7));break;case 5:var v=null;switch(un.tag){case 26:v=un.memoizedState;case 5:case 27:var N=un;if(v?U0(v):N.stateNode.complete){Yn=0,hi=null;var Z=N.sibling;if(Z!==null)un=Z;else{var ye=N.return;ye!==null?(un=ye,Su(ye)):un=null}break t}}Yn=0,hi=null,el(e,s,m,5);break;case 6:Yn=0,hi=null,el(e,s,m,6);break;case 8:rh(),Ns=6;break e;default:throw Error(a(462))}}V2();break}catch(De){Zg(e,De)}while(!0);return pa=fr=null,$.H=l,$.A=f,On=o,un!==null?0:(os=null,_n=0,Uc(),Ns)}function V2(){for(;un!==null&&!Fe();)n0(un)}function n0(e){var s=jg(e.alternate,e,ka);e.memoizedProps=e.pendingProps,s===null?Su(e):un=s}function s0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=bg(o,s,s.pendingProps,s.type,void 0,_n);break;case 11:s=bg(o,s,s.pendingProps,s.type.render,s.ref,_n);break;case 5:Sf(s);default:Eg(o,s),s=un=t_(s,ka),s=jg(o,s,ka)}e.memoizedProps=e.pendingProps,s===null?Su(e):un=s}function el(e,s,o,l){pa=fr=null,Sf(s),Vr=null,Al=0;var f=s.return;try{if(N2(e,f,s,o,_n)){Ns=1,uu(e,Mi(o,e.current)),un=null;return}}catch(m){if(f!==null)throw un=f,m;Ns=1,uu(e,Mi(o,e.current)),un=null;return}s.flags&32768?(vn||l===1?e=!0:Kr||(_n&536870912)!==0?e=!1:(Ua=e=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),o0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){o0(s,Ua);return}e=s.return;var o=B2(s.alternate,s,ka);if(o!==null){un=o;return}if(s=s.sibling,s!==null){un=s;return}un=s=e}while(s!==null);Ns===0&&(Ns=5)}function o0(e,s){do{var o=L2(e.alternate,e);if(o!==null){o.flags&=32767,un=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){un=e;return}un=e=o}while(e!==null);Ns=6,un=null}function i0(e,s,o,l,f,m,v,N,Z){e.cancelPendingCommit=null;do Cu();while(ho!==0);if((On&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Bt(e,o,m,v,N,Z),e===os&&(un=os=null,_n=0),Zr=s,Wa=e,ja=o,oh=m,ih=f,Gg=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,X2(it,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=$.T,$.T=null,f=ie.p,ie.p=2,v=On,On|=4;try{O2(e,s,o)}finally{On=v,ie.p=f,$.T=l}}ho=1,a0(),r0(),l0()}}function a0(){if(ho===1){ho=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var l=ie.p;ie.p=2;var f=On;On|=4;try{Pg(s,e);var m=bh,v=an(e.containerInfo),N=m.focusedElem,Z=m.selectionRange;if(v!==N&&N&&N.ownerDocument&&Bn(N.ownerDocument.documentElement,N)){if(Z!==null&&zt(N)){var ye=Z.start,De=Z.end;if(De===void 0&&(De=ye),"selectionStart"in N)N.selectionStart=ye,N.selectionEnd=Math.min(De,N.value.length);else{var $e=N.ownerDocument||document,xe=$e&&$e.defaultView||window;if(xe.getSelection){var Se=xe.getSelection(),Ct=N.textContent.length,Yt=Math.min(Z.start,Ct),Zn=Z.end===void 0?Yt:Math.min(Z.end,Ct);!Se.extend&&Yt>Zn&&(v=Zn,Zn=Yt,Yt=v);var ce=Cn(N,Yt),se=Cn(N,Zn);if(ce&&se&&(Se.rangeCount!==1||Se.anchorNode!==ce.node||Se.anchorOffset!==ce.offset||Se.focusNode!==se.node||Se.focusOffset!==se.offset)){var ge=$e.createRange();ge.setStart(ce.node,ce.offset),Se.removeAllRanges(),Yt>Zn?(Se.addRange(ge),Se.extend(se.node,se.offset)):(ge.setEnd(se.node,se.offset),Se.addRange(ge))}}}}for($e=[],Se=N;Se=Se.parentNode;)Se.nodeType===1&&$e.push({element:Se,left:Se.scrollLeft,top:Se.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<$e.length;N++){var Oe=$e[N];Oe.element.scrollLeft=Oe.left,Oe.element.scrollTop=Oe.top}}Ou=!!xh,bh=xh=null}finally{On=f,ie.p=l,$.T=o}}e.current=s,ho=2}}function r0(){if(ho===2){ho=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var l=ie.p;ie.p=2;var f=On;On|=4;try{Lg(e,s.alternate,s)}finally{On=f,ie.p=l,$.T=o}}ho=3}}function l0(){if(ho===4||ho===3){ho=0,tt();var e=Wa,s=Zr,o=ja,l=Gg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?ho=5:(ho=0,Zr=Wa=null,c0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),Hn(o),s=s.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(et,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=$.T,f=ie.p,ie.p=2,$.T=null;try{for(var m=e.onRecoverableError,v=0;v<l.length;v++){var N=l[v];m(N.value,{componentStack:N.stack})}}finally{$.T=s,ie.p=f}}(ja&3)!==0&&Cu(),aa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Xl++:(Xl=0,ah=e):Xl=0,Gl(0)}}function c0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return a0(),r0(),l0(),u0()}function u0(){if(ho!==5)return!1;var e=Wa,s=oh;oh=0;var o=Hn(ja),l=$.T,f=ie.p;try{ie.p=32>o?32:o,$.T=null,o=ih,ih=null;var m=Wa,v=ja;if(ho=0,Zr=Wa=null,ja=0,(On&6)!==0)throw Error(a(331));var N=On;if(On|=4,Wg(m.current),Ug(m,m.current,v,o),On=N,Gl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(et,m)}catch{}return!0}finally{ie.p=f,$.T=l,c0(e,s)}}function d0(e,s,o){s=Mi(o,s),s=$f(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(ht(e,2),aa(e))}function Wn(e,s,o){if(e.tag===3)d0(e,e,o);else for(;s!==null;){if(s.tag===3){d0(s,e,o);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))){e=Mi(o,e),o=fg(2),l=$a(s,o,2),l!==null&&(hg(o,l,s,e),ht(l,2),aa(l));break}}s=s.return}}function ch(e,s,o){var l=e.pingCache;if(l===null){l=e.pingCache=new I2;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(o)||(th=!0,f.add(o),e=Y2.bind(null,e,s,o),s.then(e,e))}function Y2(e,s,o){var l=e.pingCache;l!==null&&l.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,os===e&&(_n&o)===o&&(Ns===4||Ns===3&&(_n&62914560)===_n&&300>ot()-yu?(On&2)===0&&Jr(e,0):nh|=o,Qr===_n&&(Qr=0)),aa(e)}function f0(e,s){s===0&&(s=mt()),e=cr(e,s),e!==null&&(ht(e,s),aa(e))}function W2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),f0(e,o)}function F2(e,s){var o=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(s),f0(e,o)}function X2(e,s){return Xe(e,s)}var ku=null,tl=null,uh=!1,ju=!1,dh=!1,Xa=0;function aa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,uh||(uh=!0,q2())}function Gl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,l=ku;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,N=l.pingedLanes;m=(1<<31-_t(42|e)+1)-1,m&=f&~(v&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,_0(l,m))}else m=_n,m=ut(l,l===os?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||nt(l,m)||(o=!0,_0(l,m));l=l.next}while(o);dh=!1}}function G2(){h0()}function h0(){ju=uh=!1;var e=0;Xa!==0&&iv()&&(e=Xa);for(var s=ot(),o=null,l=ku;l!==null;){var f=l.next,m=m0(l,s);m===0?(l.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=l,(e!==0||(m&3)!==0)&&(ju=!0)),l=f}ho!==0&&ho!==5||Gl(e),Xa!==0&&(Xa=0)}function m0(e,s){for(var o=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-_t(m),N=1<<v,Z=f[v];Z===-1?((N&o)===0||(N&l)!==0)&&(f[v]=jt(N,s)):Z<=s&&(e.expiredLanes|=N),m&=~N}if(s=os,o=_n,o=ut(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,o===0||e===s&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&He(l),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||nt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(l!==null&&He(l),Hn(o)){case 2:case 8:o=Ot;break;case 32:o=it;break;case 268435456:o=J;break;default:o=it}return l=p0.bind(null,e),o=Xe(o,l),e.callbackPriority=s,e.callbackNode=o,s}return l!==null&&l!==null&&He(l),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,s){if(ho!==0&&ho!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var l=_n;return l=ut(e,e===os?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Kg(e,l,s),m0(e,ot()),e.callbackNode!=null&&e.callbackNode===o?p0.bind(null,e):null)}function _0(e,s){if(Cu())return null;Kg(e,s,!0)}function q2(){rv(function(){(On&6)!==0?Xe(xt,G2):h0()})}function fh(){if(Xa===0){var e=Pr;e===0&&(e=rt,rt<<=1,(rt&261888)===0&&(rt=256)),Xa=e}return Xa}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function y0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function K2(e,s,o,l,f){if(s==="submit"&&o&&o.stateNode===f){var m=g0((f[$n]||null).action),v=l.submitter;v&&(s=(s=v[$n]||null)?g0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var N=new ao("action","action",null,l,f);e.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var Z=v?y0(f,v):new FormData(f);Df(o,{pending:!0,data:Z,method:f.method,action:m},null,Z)}}else typeof m=="function"&&(N.preventDefault(),Z=v?y0(f,v):new FormData(f),Df(o,{pending:!0,data:Z,method:f.method,action:m},m,Z))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],Q2=mh.toLowerCase(),Z2=mh[0].toUpperCase()+mh.slice(1);Fi(Q2,"on"+Z2)}Fi(Wi,"onAnimationEnd"),Fi(na,"onAnimationIteration"),Fi(Pc,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(Wd,"onTransitionRun"),Fi(Fd,"onTransitionStart"),Fi(Xd,"onTransitionCancel"),Fi(Zp,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function x0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],f=l.event;l=l.listeners;e:{var m=void 0;if(s)for(var v=l.length-1;0<=v;v--){var N=l[v],Z=N.instance,ye=N.currentTarget;if(N=N.listener,Z!==m&&f.isPropagationStopped())break e;m=N,f.currentTarget=ye;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Z}else for(v=0;v<l.length;v++){if(N=l[v],Z=N.instance,ye=N.currentTarget,N=N.listener,Z!==m&&f.isPropagationStopped())break e;m=N,f.currentTarget=ye;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Z}}}}function dn(e,s){var o=s[In];o===void 0&&(o=s[In]=new Set);var l=e+"__bubble";o.has(l)||(b0(s,e,2,!1),o.add(l))}function ph(e,s,o){var l=0;s&&(l|=4),b0(o,e,l,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,Ko.forEach(function(o){o!=="selectionchange"&&(J2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function b0(e,s,o,l){switch(q0(s)){case 2:var f=Mv;break;case 8:f=Ev;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!Os||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,l,f){var m=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var N=l.stateNode.containerInfo;if(N===f)break;if(v===4)for(v=l.return;v!==null;){var Z=v.tag;if((Z===3||Z===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;N!==null;){if(v=gs(N),v===null)return;if(Z=v.tag,Z===5||Z===6||Z===26||Z===27){l=m=v;continue e}N=N.parentNode}}l=l.return}Fs(function(){var ye=m,De=Ls(o),$e=[];e:{var xe=Jp.get(e);if(xe!==void 0){var Se=ao,Ct=e;switch(e){case"keypress":if(_o(o)===0)break e;case"keydown":case"keyup":Se=ci;break;case"focusin":Ct="focus",Se=Bo;break;case"focusout":Ct="blur",Se=Bo;break;case"beforeblur":case"afterblur":Se=Bo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=Do;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=lo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=ke;break;case Wi:case na:case Pc:Se=ta;break;case Zp:Se=Ge;break;case"scroll":case"scrollend":Se=Cs;break;case"wheel":Se=It;break;case"copy":case"cut":case"paste":Se=Hi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=U;break;case"toggle":case"beforetoggle":Se=Gt}var Yt=(s&4)!==0,Zn=!Yt&&(e==="scroll"||e==="scrollend"),ce=Yt?xe!==null?xe+"Capture":null:xe;Yt=[];for(var se=ye,ge;se!==null;){var Oe=se;if(ge=Oe.stateNode,Oe=Oe.tag,Oe!==5&&Oe!==26&&Oe!==27||ge===null||ce===null||(Oe=on(se,ce),Oe!=null&&Yt.push(Kl(se,Oe,ge))),Zn)break;se=se.return}0<Yt.length&&(xe=new Se(xe,Ct,null,o,De),$e.push({event:xe,listeners:Yt}))}}if((s&7)===0){e:{if(xe=e==="mouseover"||e==="pointerover",Se=e==="mouseout"||e==="pointerout",xe&&o!==ri&&(Ct=o.relatedTarget||o.fromElement)&&(gs(Ct)||Ct[at]))break e;if((Se||xe)&&(xe=De.window===De?De:(xe=De.ownerDocument)?xe.defaultView||xe.parentWindow:window,Se?(Ct=o.relatedTarget||o.toElement,Se=ye,Ct=Ct?gs(Ct):null,Ct!==null&&(Zn=u(Ct),Yt=Ct.tag,Ct!==Zn||Yt!==5&&Yt!==27&&Yt!==6)&&(Ct=null)):(Se=null,Ct=ye),Se!==Ct)){if(Yt=Do,Oe="onMouseLeave",ce="onMouseEnter",se="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=U,Oe="onPointerLeave",ce="onPointerEnter",se="pointer"),Zn=Se==null?xe:qo(Se),ge=Ct==null?xe:qo(Ct),xe=new Yt(Oe,se+"leave",Se,o,De),xe.target=Zn,xe.relatedTarget=ge,Oe=null,gs(De)===ye&&(Yt=new Yt(ce,se+"enter",Ct,o,De),Yt.target=ge,Yt.relatedTarget=Zn,Oe=Yt),Zn=Oe,Se&&Ct)t:{for(Yt=ev,ce=Se,se=Ct,ge=0,Oe=ce;Oe;Oe=Yt(Oe))ge++;Oe=0;for(var $t=se;$t;$t=Yt($t))Oe++;for(;0<ge-Oe;)ce=Yt(ce),ge--;for(;0<Oe-ge;)se=Yt(se),Oe--;for(;ge--;){if(ce===se||se!==null&&ce===se.alternate){Yt=ce;break t}ce=Yt(ce),se=Yt(se)}Yt=null}else Yt=null;Se!==null&&v0($e,xe,Se,Yt,!1),Ct!==null&&Zn!==null&&v0($e,Zn,Ct,Yt,!0)}}e:{if(xe=ye?qo(ye):window,Se=xe.nodeName&&xe.nodeName.toLowerCase(),Se==="select"||Se==="input"&&xe.type==="file")var En=k;else if(B(xe))if(A)En=dt;else{En=Ye;var Mt=Ne}else Se=xe.nodeName,!Se||Se.toLowerCase()!=="input"||xe.type!=="checkbox"&&xe.type!=="radio"?ye&&Ms(ye.elementType)&&(En=k):En=ct;if(En&&(En=En(e,ye))){G($e,En,o,De);break e}Mt&&Mt(e,xe,ye),e==="focusout"&&ye&&xe.type==="number"&&ye.memoizedProps.value!=null&&Ws(xe,"number",xe.value)}switch(Mt=ye?qo(ye):window,e){case"focusin":(B(Mt)||Mt.contentEditable==="true")&&(Nt=Mt,Ln=ye,pn=null);break;case"focusout":pn=Ln=Nt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Lo($e,o,De);break;case"selectionchange":if(wt)break;case"keydown":case"keyup":Lo($e,o,De)}var nn;if(mn)e:{switch(e){case"compositionstart":var gn="onCompositionStart";break e;case"compositionend":gn="onCompositionEnd";break e;case"compositionupdate":gn="onCompositionUpdate";break e}gn=void 0}else qs?ms(e,o)&&(gn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(gn="onCompositionStart");gn&&(Vt&&o.locale!=="ko"&&(qs||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&qs&&(nn=So()):(Ss=De,No="value"in Ss?Ss.value:Ss.textContent,qs=!0)),Mt=Eu(ye,gn),0<Mt.length&&(gn=new Tt(gn,e,null,o,De),$e.push({event:gn,listeners:Mt}),nn?gn.data=nn:(nn=co(o),nn!==null&&(gn.data=nn)))),(nn=zs?$s(e,o):Ks(e,o))&&(gn=Eu(ye,"onBeforeInput"),0<gn.length&&(Mt=new Tt("onBeforeInput","beforeinput",null,o,De),$e.push({event:Mt,listeners:gn}),Mt.data=nn)),K2($e,e,ye,o,De)}x0($e,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=on(e,o),f!=null&&l.unshift(Kl(e,f,m)),f=on(e,s),f!=null&&l.push(Kl(e,f,m))),e.tag===3)return l;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,s,o,l,f){for(var m=s._reactName,v=[];o!==null&&o!==l;){var N=o,Z=N.alternate,ye=N.stateNode;if(N=N.tag,Z!==null&&Z===l)break;N!==5&&N!==26&&N!==27||ye===null||(Z=ye,f?(ye=on(o,m),ye!=null&&v.unshift(Kl(o,ye,Z))):f||(ye=on(o,m),ye!=null&&v.push(Kl(o,ye,Z)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function w0(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function S0(e,s){return s=w0(s),w0(e)===s}function Qn(e,s,o,l,f,m){switch(o){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||ys(e,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&ys(e,""+l);break;case"className":xn(e,"class",l);break;case"tabIndex":xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,o,l);break;case"style":xs(e,l,m);break;case"data":if(s!=="object"){xn(e,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=Io(""+l),e.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Qn(e,s,"name",f.name,f,null),Qn(e,s,"formEncType",f.formEncType,f,null),Qn(e,s,"formMethod",f.formMethod,f,null),Qn(e,s,"formTarget",f.formTarget,f,null)):(Qn(e,s,"encType",f.encType,f,null),Qn(e,s,"method",f.method,f,null),Qn(e,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=Io(""+l),e.setAttribute(o,l);break;case"onClick":l!=null&&(e.onclick=Es);break;case"onScroll":l!=null&&dn("scroll",e);break;case"onScrollEnd":l!=null&&dn("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}o=Io(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""+l):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":l===!0?e.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,l):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(o,l):e.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(o):e.setAttribute(o,l);break;case"popover":dn("beforetoggle",e),dn("toggle",e),Ys(e,"popover",l);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ys(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ao.get(o)||o,Ys(e,o,l))}}function yh(e,s,o,l,f,m){switch(o){case"style":xs(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof l=="string"?ys(e,l):(typeof l=="number"||typeof l=="bigint")&&ys(e,""+l);break;case"onScroll":l!=null&&dn("scroll",e);break;case"onScrollEnd":l!=null&&dn("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ws.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[$n]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,l,f);break e}o in e?e[o]=l:l===!0?e.setAttribute(o,""):Ys(e,o,l)}}}function Mo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dn("error",e),dn("load",e);var l=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Qn(e,s,m,v,o,null)}}f&&Qn(e,s,"srcSet",o.srcSet,o,null),l&&Qn(e,s,"src",o.src,o,null);return;case"input":dn("invalid",e);var N=m=v=f=null,Z=null,ye=null;for(l in o)if(o.hasOwnProperty(l)){var De=o[l];if(De!=null)switch(l){case"name":f=De;break;case"type":v=De;break;case"checked":Z=De;break;case"defaultChecked":ye=De;break;case"value":m=De;break;case"defaultValue":N=De;break;case"children":case"dangerouslySetInnerHTML":if(De!=null)throw Error(a(137,s));break;default:Qn(e,s,l,De,o,null)}}Dn(e,m,N,Z,ye,v,f,!1);return;case"select":dn("invalid",e),l=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(N=o[f],N!=null))switch(f){case"value":m=N;break;case"defaultValue":v=N;break;case"multiple":l=N;default:Qn(e,s,f,N,o,null)}s=m,o=v,e.multiple=!!l,s!=null?ds(e,!!l,s,!1):o!=null&&ds(e,!!l,o,!0);return;case"textarea":dn("invalid",e),m=f=l=null;for(v in o)if(o.hasOwnProperty(v)&&(N=o[v],N!=null))switch(v){case"value":l=N;break;case"defaultValue":f=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:Qn(e,s,v,N,o,null)}xi(e,l,f,m);return;case"option":for(Z in o)if(o.hasOwnProperty(Z)&&(l=o[Z],l!=null))switch(Z){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qn(e,s,Z,l,o,null)}return;case"dialog":dn("beforetoggle",e),dn("toggle",e),dn("cancel",e),dn("close",e);break;case"iframe":case"object":dn("load",e);break;case"video":case"audio":for(l=0;l<ql.length;l++)dn(ql[l],e);break;case"image":dn("error",e),dn("load",e);break;case"details":dn("toggle",e);break;case"embed":case"source":case"link":dn("error",e),dn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(l=o[ye],l!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Qn(e,s,ye,l,o,null)}return;default:if(Ms(s)){for(De in o)o.hasOwnProperty(De)&&(l=o[De],l!==void 0&&yh(e,s,De,l,o,void 0));return}}for(N in o)o.hasOwnProperty(N)&&(l=o[N],l!=null&&Qn(e,s,N,l,o,null))}function sv(e,s,o,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,N=null,Z=null,ye=null,De=null;for(Se in o){var $e=o[Se];if(o.hasOwnProperty(Se)&&$e!=null)switch(Se){case"checked":break;case"value":break;case"defaultValue":Z=$e;default:l.hasOwnProperty(Se)||Qn(e,s,Se,null,l,$e)}}for(var xe in l){var Se=l[xe];if($e=o[xe],l.hasOwnProperty(xe)&&(Se!=null||$e!=null))switch(xe){case"type":m=Se;break;case"name":f=Se;break;case"checked":ye=Se;break;case"defaultChecked":De=Se;break;case"value":v=Se;break;case"defaultValue":N=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,s));break;default:Se!==$e&&Qn(e,s,xe,Se,l,$e)}}vo(e,v,N,Z,ye,De,m,f);return;case"select":Se=v=N=xe=null;for(m in o)if(Z=o[m],o.hasOwnProperty(m)&&Z!=null)switch(m){case"value":break;case"multiple":Se=Z;default:l.hasOwnProperty(m)||Qn(e,s,m,null,l,Z)}for(f in l)if(m=l[f],Z=o[f],l.hasOwnProperty(f)&&(m!=null||Z!=null))switch(f){case"value":xe=m;break;case"defaultValue":N=m;break;case"multiple":v=m;default:m!==Z&&Qn(e,s,f,m,l,Z)}s=N,o=v,l=Se,xe!=null?ds(e,!!o,xe,!1):!!l!=!!o&&(s!=null?ds(e,!!o,s,!0):ds(e,!!o,o?[]:"",!1));return;case"textarea":Se=xe=null;for(N in o)if(f=o[N],o.hasOwnProperty(N)&&f!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Qn(e,s,N,null,l,f)}for(v in l)if(f=l[v],m=o[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":xe=f;break;case"defaultValue":Se=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Qn(e,s,v,f,l,m)}Gn(e,xe,Se);return;case"option":for(var Ct in o)if(xe=o[Ct],o.hasOwnProperty(Ct)&&xe!=null&&!l.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:Qn(e,s,Ct,null,l,xe)}for(Z in l)if(xe=l[Z],Se=o[Z],l.hasOwnProperty(Z)&&xe!==Se&&(xe!=null||Se!=null))switch(Z){case"selected":e.selected=xe&&typeof xe!="function"&&typeof xe!="symbol";break;default:Qn(e,s,Z,xe,l,Se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)xe=o[Yt],o.hasOwnProperty(Yt)&&xe!=null&&!l.hasOwnProperty(Yt)&&Qn(e,s,Yt,null,l,xe);for(ye in l)if(xe=l[ye],Se=o[ye],l.hasOwnProperty(ye)&&xe!==Se&&(xe!=null||Se!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:Qn(e,s,ye,xe,l,Se)}return;default:if(Ms(s)){for(var Zn in o)xe=o[Zn],o.hasOwnProperty(Zn)&&xe!==void 0&&!l.hasOwnProperty(Zn)&&yh(e,s,Zn,void 0,l,xe);for(De in l)xe=l[De],Se=o[De],!l.hasOwnProperty(De)||xe===Se||xe===void 0&&Se===void 0||yh(e,s,De,xe,l,Se);return}}for(var ce in o)xe=o[ce],o.hasOwnProperty(ce)&&xe!=null&&!l.hasOwnProperty(ce)&&Qn(e,s,ce,null,l,xe);for($e in l)xe=l[$e],Se=o[$e],!l.hasOwnProperty($e)||xe===Se||xe==null&&Se==null||Qn(e,s,$e,xe,l,Se)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var f=o[l],m=f.transferSize,v=f.initiatorType,N=f.duration;if(m&&N&&C0(v)){for(v=0,N=f.responseEnd,l+=1;l<o.length;l++){var Z=o[l],ye=Z.startTime;if(ye>N)break;var De=Z.transferSize,$e=Z.initiatorType;De&&C0($e)&&(Z=Z.responseEnd,v+=De*(Z<N?1:(N-ye)/(Z-ye)))}if(--l,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(lv)}:M0;function lv(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function T0(e,s){var o=s,l=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(l===0){e.removeChild(f),il(s);return}l--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")l++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,N=m.nodeName;m[js]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function A0(e,s){var o=e;e=0;do{var l=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=l}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),ai(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function cv(e,s,o,l){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[js])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function uv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Di(e.nextSibling),e===null))return null;return e}function N0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var l=function(){s(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Di(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function D0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Di(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function B0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ai(e)}var Ri=new Map,L0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=ie.d;ie.d={f:fv,r:hv,D:mv,C:pv,L:_v,m:gv,X:xv,S:yv,M:bv};function fv(){var e=Ma.f(),s=vu();return e||s}function hv(e){var s=bo(e);s!==null&&s.tag===5&&s.type==="form"?Z_(s):Ma.r(e)}var nl=typeof document>"u"?null:document;function O0(e,s,o){var l=nl;if(l&&typeof s=="string"&&s){var f=us(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),L0.has(f)||(L0.add(f),e={rel:e,crossOrigin:o,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),Mo(s,"link",e),jn(s),l.head.appendChild(s)))}}function mv(e){Ma.D(e),O0("dns-prefetch",e,null)}function pv(e,s){Ma.C(e,s),O0("preconnect",e,s)}function _v(e,s,o){Ma.L(e,s,o);var l=nl;if(l&&e&&s){var f='link[rel="preload"][as="'+us(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+us(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+us(o.imageSizes)+'"]')):f+='[href="'+us(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Ri.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ri.set(m,e),l.querySelector(f)!==null||s==="style"&&l.querySelector(Zl(m))||s==="script"&&l.querySelector(Jl(m))||(s=l.createElement("link"),Mo(s,"link",e),jn(s),l.head.appendChild(s)))}}function gv(e,s){Ma.m(e,s);var o=nl;if(o&&e){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+us(l)+'"][href="'+us(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Ri.has(m)&&(e=x({rel:"modulepreload",href:e},s),Ri.set(m,e),o.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}l=o.createElement("link"),Mo(l,"link",e),jn(l),o.head.appendChild(l)}}}function yv(e,s,o){Ma.S(e,s,o);var l=nl;if(l&&e){var f=Bs(l).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var N={loading:0,preload:null};if(v=l.querySelector(Zl(m)))N.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ri.get(m))&&Mh(e,o);var Z=v=l.createElement("link");jn(Z),Mo(Z,"link",e),Z._p=new Promise(function(ye,De){Z.onload=ye,Z.onerror=De}),Z.addEventListener("load",function(){N.loading|=1}),Z.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Nu(v,s,l)}v={type:"stylesheet",instance:v,count:1,state:N},f.set(m,v)}}}function xv(e,s){Ma.X(e,s);var o=nl;if(o&&e){var l=Bs(o).hoistableScripts,f=ol(e),m=l.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Ri.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),Mo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function bv(e,s){Ma.M(e,s);var o=nl;if(o&&e){var l=Bs(o).hoistableScripts,f=ol(e),m=l.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Ri.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),Mo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function z0(e,s,o,l){var f=(f=Te.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=Bs(f).hoistableStyles,l=o.get(s),l||(l={type:"style",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=Bs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Ri.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ri.set(e,o),m||vv(f,e,o,v.state))),s&&l===null)throw Error(a(528,""));return v}if(s&&l!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=Bs(f).hoistableScripts,l=o.get(s),l||(l={type:"script",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+us(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function vv(e,s,o,l){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=e.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),Mo(s,"link",o),jn(s),e.head.appendChild(s))}function ol(e){return'[src="'+us(e)+'"]'}function Jl(e){return"script[async]"+e}function I0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var l=e.querySelector('style[data-href~="'+us(o.href)+'"]');if(l)return s.instance=l,jn(l),l;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),jn(l),Mo(l,"style",f),Nu(l,o.precedence,e),s.instance=l;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,jn(m),m;l=$0(o),(f=Ri.get(f))&&Mh(l,f),m=(e.ownerDocument||e).createElement("link"),jn(m);var v=m;return v._p=new Promise(function(N,Z){v.onload=N,v.onerror=Z}),Mo(m,"link",l),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,jn(f),f):(l=o,(f=Ri.get(m))&&(l=x({},o),Eh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),jn(f),Mo(f,"link",l),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,Nu(l,o.precedence,e));return s.instance}function Nu(e,s,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var N=l[v];if(N.dataset.precedence===s)m=N;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function P0(e,s,o){if(Du===null){var l=new Map,f=Du=new Map;f.set(o,l)}else f=Du,l=f.get(o),l||(l=new Map,f.set(o,l));if(l.has(e))return l;for(l.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[js]||m[Xt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var N=l.get(v);N?N.push(m):l.set(v,[m])}}return l}function H0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function wv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sv(e,s,o,l){if(o.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(l.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,jn(m);return}m=s.ownerDocument||s,l=$0(l),(f=Ri.get(f))&&Mh(l,f),m=m.createElement("link"),jn(m);var v=m;v._p=new Promise(function(N,Z){v.onload=N,v.onerror=Z}),Mo(m,"link",l),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function Cv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var l=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*ov());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(kv,e),Bu=null,Ru.call(e))}function kv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var l=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),l=v)}l&&o.set(null,l)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||l,m===l&&o.set(null,f),o.set(v,f),this.count++,l=Ru.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:L,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function jv(e,s,o,l,f,m,v,N,Z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function V0(e,s,o,l,f,m,v,N,Z,ye,De,$e){return e=new jv(e,s,o,v,Z,ye,De,$e,N),s=1,m===!0&&(s|=24),m=ui(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:s},ff(m),e}function Y0(e){return e?(e=Lr,e):Lr}function W0(e,s,o,l,f,m){f=Y0(f),l.context===null?l.context=f:l.pendingContext=f,l=za(s),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=$a(e,l,s),o!==null&&(si(o,e,s),Dl(o,e,s))}function F0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){F0(e,s),(e=e.alternate)&&F0(e,s)}function X0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&si(s,e,67108864),Ah(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var s=pi();s=Xn(s);var o=cr(e,s);o!==null&&si(o,e,s),Ah(e,s)}}var Ou=!0;function Mv(e,s,o,l){var f=$.T;$.T=null;var m=ie.p;try{ie.p=2,Nh(e,s,o,l)}finally{ie.p=m,$.T=f}}function Ev(e,s,o,l){var f=$.T;$.T=null;var m=ie.p;try{ie.p=8,Nh(e,s,o,l)}finally{ie.p=m,$.T=f}}function Nh(e,s,o,l){if(Ou){var f=Dh(l);if(f===null)gh(e,s,l,zu,o),K0(e,l);else if(Av(f,e,s,o,l))l.stopPropagation();else if(K0(e,l),s&4&&-1<Tv.indexOf(e)){for(;f!==null;){var m=bo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Kt(m.pendingLanes);if(v!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;v;){var Z=1<<31-_t(v);N.entanglements[1]|=Z,v&=~Z}aa(m),(On&6)===0&&(xu=ot()+500,Gl(0))}}break;case 31:case 13:N=cr(m,2),N!==null&&si(N,m,2),vu(),Ah(m,2)}if(m=Dh(l),m===null&&gh(e,s,l,zu,o),m===f)break;f=m}f!==null&&l.stopPropagation()}else gh(e,s,l,null,o)}}function Dh(e){return e=Ls(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=gs(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case xt:return 2;case Ot:return 8;case it:case H:return 32;case J:return 268435456;default:return 32}default:return 32}}var Bh=!1,qa=null,Ka=null,Qa=null,tc=new Map,nc=new Map,Za=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},s!==null&&(s=bo(s),s!==null&&X0(s)),e):(e.eventSystemFlags|=l,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Av(e,s,o,l,f){switch(s){case"focusin":return qa=sc(qa,e,s,o,l,f),!0;case"dragenter":return Ka=sc(Ka,e,s,o,l,f),!0;case"mouseover":return Qa=sc(Qa,e,s,o,l,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,l,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,l,f)),!0}return!1}function Q0(e){var s=gs(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,wn(e.priority,function(){G0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,wn(e.priority,function(){G0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);ri=l,o.target.dispatchEvent(l),ri=null}else return s=bo(o),s!==null&&X0(s),e.blockedOn=o,!1;s.shift()}return!0}function Z0(e,s,o){$u(e)&&o.delete(s)}function Nv(){Bh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),tc.forEach(Z0),nc.forEach(Z0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Nv)))}var Pu=null;function J0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],l=e[s+1],f=e[s+2];if(typeof l!="function"){if(Rh(l||o)===null)continue;break}var m=bo(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:l},l,f))}}))}function il(e){function s(Z){return Iu(Z,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Za.length;o++){var l=Za[o];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)Q0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var f=o[l],m=o[l+1],v=f[$n]||null;if(typeof m=="function")v||J0(o);else if(v){var N=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[$n]||null)N=v.formAction;else if(Rh(f)!==null)continue}else N=v.action;typeof N=="function"?o[l+1]=N:(o.splice(l,3),l-=3),J0(o)}}}function ey(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,l=pi();W0(o,l,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;W0(e.current,2,null,e,null,null),vu(),s[at]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=kn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&Q0(e)}};var ty=n.version;if(ty!=="19.2.4")throw Error(a(527,ty,"19.2.4"));ie.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{et=Uu.inject(Dv),Je=Uu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,l="",f=lg,m=cg,v=ug;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=V0(e,1,!1,null,null,o,l,null,f,m,v,ey),e[at]=s.current,_h(e),new Lh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var l=!1,f="",m=lg,v=cg,N=ug,Z=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(N=o.onRecoverableError),o.formState!==void 0&&(Z=o.formState)),s=V0(e,1,!0,s,o!=null?o:null,l,f,Z,m,v,N,ey),s.context=Y0(null),o=s.current,l=pi(),l=Xn(l),f=za(l),f.callback=null,$a(o,f,l),o=l,s.current.lanes=o,ht(s,o),aa(s),e[at]=s.current,_h(e),new Hu(s)},ic.version="19.2.4",ic}var dy;function Hv(){if(dy)return zh.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Pv(),zh.exports}var Uv=Hv();const Vv=$x(Uv);var _=up();const Yv=$x(_);function Wv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Fv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const zi="__TAURI_TO_IPC_KEY__";function Xv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function je(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Gv{get rid(){return Wv(this,hd,"f")}constructor(n){hd.set(this,void 0),Fv(this,hd,n)}async close(){return je("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var _i;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(_i||(_i={}));async function Px(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await je("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return je("plugin:event|listen",{event:t,target:c,handler:Xv(n)}).then(u=>async()=>Px(t,u))}async function qv(t,n,i){return yc(t,a=>{Px(t,a.id),n(a)},i)}async function Kv(t,n){await je("plugin:event|emit",{event:t,payload:n})}async function Qv(t,n,i){await je("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Hx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[zi](){return{width:this.width,height:this.height}}toJSON(){return this[zi]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Hx(this.width/n,this.height/n)}[zi](){return{width:this.width,height:this.height}}toJSON(){return this[zi]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Hx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[zi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[zi]()}}class Ux{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[zi](){return{x:this.x,y:this.y}}toJSON(){return this[zi]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ux(this.x/n,this.y/n)}[zi](){return{x:this.x,y:this.y}}toJSON(){return this[zi]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ux?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[zi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[zi]()}}class bc extends Gv{constructor(n){super(n)}static async new(n,i,a){return je("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return je("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return je("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return je("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return je("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Em;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Em||(Em={}));class Zv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var fy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(fy||(fy={}));function dp(){return new Vx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return je("plugin:window|get_all_windows").then(t=>t.map(n=>new Vx(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Vx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||je("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return dp()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:qv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Kv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Qv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return je("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return je("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return je("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return je("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return je("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return je("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return je("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return je("plugin:window|is_maximized",{label:this.label})}async isFocused(){return je("plugin:window|is_focused",{label:this.label})}async isDecorated(){return je("plugin:window|is_decorated",{label:this.label})}async isResizable(){return je("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return je("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return je("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return je("plugin:window|is_closable",{label:this.label})}async isVisible(){return je("plugin:window|is_visible",{label:this.label})}async title(){return je("plugin:window|title",{label:this.label})}async theme(){return je("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return je("plugin:window|is_always_on_top",{label:this.label})}async center(){return je("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Em.Critical?i={type:"Critical"}:i={type:"Informational"}),je("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return je("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return je("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return je("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return je("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return je("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return je("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return je("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return je("plugin:window|maximize",{label:this.label})}async unmaximize(){return je("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return je("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return je("plugin:window|minimize",{label:this.label})}async unminimize(){return je("plugin:window|unminimize",{label:this.label})}async show(){return je("plugin:window|show",{label:this.label})}async hide(){return je("plugin:window|hide",{label:this.label})}async close(){return je("plugin:window|close",{label:this.label})}async destroy(){return je("plugin:window|destroy",{label:this.label})}async setDecorations(n){return je("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return je("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return je("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return je("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return je("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return je("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return je("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return je("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return je("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return je("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return je("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return je("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return je("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return je("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return je("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return je("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return je("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return je("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return je("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return je("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return je("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return je("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return je("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return je("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return je("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return je("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return je("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return je("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return je("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return je("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return je("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return je("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return je("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(_i.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(_i.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(_i.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Zv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(_i.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(_i.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(_i.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(_i.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(_i.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(_i.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(_i.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(_i.WINDOW_THEME_CHANGED,n)}}var hy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(hy||(hy={}));var my;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(my||(my={}));var py;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(py||(py={}));var _y;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(_y||(_y={}));async function Jv(t={}){return typeof t=="object"&&Object.freeze(t),await je("plugin:dialog|open",{options:t})}/**
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
 */const gy=t=>{const n=tw(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const $i=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(ow,{ref:u,iconNode:n,className:Yx(`lucide-${ew(gy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=gy(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wx=$i("chevron-down",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rw=$i("chevron-right",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],cw=$i("chevron-up",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],dw=$i("ellipsis",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],hw=$i("folder-git-2",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Fx=$i("git-branch-plus",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],_w=$i("git-commit-horizontal",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],yw=$i("git-merge",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],fp=$i("loader-circle",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],vw=$i("panel-left-close",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Sw=$i("panel-left-open",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],kw=$i("search",Cw),jw=3.7,Yu=200,Tm=240,ls=540,Ds=176,Yh=32,vl=20,Mw=Tm/2,rl=ls+Mw,Ea=18,Ta=18,Wh="#E6E6E6";function yy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Aa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Aa(t).localeCompare(Aa(n))}function Xx(t){return[...t].sort(_c)}function Ew(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(S=>[Aa(S),S])),i=new Map,a=new Map;t.forEach(S=>i.set(Aa(S),0));for(const S of t){const C=((h=S.parentShas)!=null?h:[]).length>0?(p=S.parentShas)!=null?p:[]:S.parentSha?[S.parentSha]:[];for(const j of C){if(!j||!n.has(j))continue;const E=Aa(S);i.set(E,((y=i.get(E))!=null?y:0)+1);const T=(g=a.get(j))!=null?g:[];T.push(S),a.set(j,T)}}for(const S of a.values())S.sort(_c);const c=t.filter(S=>{var C;return((C=i.get(Aa(S)))!=null?C:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const S=c.shift(),C=Aa(S);if(!d.has(C)){d.add(C),u.push(S);for(const j of(x=a.get(C))!=null?x:[]){const E=Aa(j),T=((b=i.get(E))!=null?b:0)-1;i.set(E,T),T===0&&c.push(j)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(S=>!d.has(Aa(S))).sort(_c)]}function Gx(t,n){var i;return Xx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function qx(t,n,i){return Gx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Tw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Aw(t,n,i){var g,x,b,S,C,j,E;const a=qx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Mr(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(S=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(C=c[0])==null?void 0:C.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((E=(j=Tw(c,p!=null?p:void 0))!=null?j:c[0])!=null?E:null)}function Nw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Gx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function hp(t,n,i={},a={}){var ae,re,Ae,Pe;const u=new Map(t.map(ne=>[ne.name,ne])),d=new Map,h=new Map;for(const ne of t){const $=((ae=i[ne.name])!=null?ae:[]).filter(ie=>ie.kind!=="branch-created").map(ie=>new Date(ie.date).getTime()).filter(ie=>Number.isFinite(ie)).sort((ie,F)=>ie-F)[0];$!=null&&h.set(ne.name,$)}const p=ne=>{const he=h.get(ne.name);return he!=null?he:yy(ne).start},y=ne=>{var $;const he=($=a[ne.name])!=null?$:null;return he&&he!==ne.name&&(he===n||u.has(he))?he:ne.name===n?null:ne.parentBranch&&ne.parentBranch!==ne.name&&(ne.parentBranch===n||u.has(ne.parentBranch))?ne.parentBranch:null};for(const ne of t){if(ne.name===n)continue;const he=(re=y(ne))!=null?re:n,$=(Ae=d.get(he))!=null?Ae:[];$.push(ne),d.set(he,$)}for(const ne of d.values())ne.sort((he,$)=>p(he)-p($)||he.name.localeCompare($.name));const g=new Map,x=[],b=new Map,S=new Map,C=new Map;for(const ne of Object.values(i))for(const he of ne){const $=new Date(he.date).getTime();Number.isFinite($)&&(he.fullSha&&C.set(he.fullSha,$),he.sha&&C.set(he.sha,$))}const j=(ne,he)=>({start:Math.min(ne,he),end:Math.max(ne,he)}),E=ne=>{var q,me;const he=j(p(ne),yy(ne).end),$=[he],ie=he.start,F=Nw(ne,n,i),fe=F?C.get(F):void 0,Ee=new Date((me=(q=ne.divergedFromDate)!=null?q:ne.createdDate)!=null?me:ne.lastCommitDate).getTime(),I=Number.isFinite(fe!=null?fe:NaN)?fe:Number.isFinite(Ee)?Ee:null;if(I==null)return $;const de=j(I,ie);return de.start!==de.end&&$.push(de),$},T=Math.max(1,360*60*1e3*jw),O=(ne,he)=>!(ne.start-he.end>=T||he.start-ne.end>=T),L=(ne,he)=>he.some($=>{var ie;return((ie=S.get(ne))!=null?ie:[]).some(F=>O($,F))}),D=(ne,he=new Set)=>{const $=b.get(ne);if($!=null)return $;if(he.has(ne))return 1;he.add(ne);const ie=u.get(ne);if(!ie||ne===n)return he.delete(ne),b.set(ne,0),0;const F=y(ie),fe=F?D(F,he)+1:1;return he.delete(ne),b.set(ne,fe),fe},Q=(ne,he=new Set)=>{var Te,We;const $=g.get(ne);if($)return $.column;if(he.has(ne))return 0;he.add(ne);const ie=u.get(ne);if(!ie)return he.delete(ne),0;if(ne===n){const Ke={name:ne,column:0,parentName:null};g.set(ne,Ke),x.push(Ke);const Ze=E(ie);return S.set(0,[...(Te=S.get(0))!=null?Te:[],...Ze]),he.delete(ne),0}const F=y(ie),fe=F&&!he.has(F)?F:null,Ee=fe?Q(fe,he):0,I=Math.max(1,D(ne)),de=Math.max(fe?Ee+1:1,I),q=E(ie);let me=de;for(;L(me,q);)me+=1;const be={name:ne,column:me,parentName:fe};return g.set(ne,be),x.push(be),S.set(me,[...(We=S.get(me))!=null?We:[],...q]),he.delete(ne),me};Q(n);const X=t.filter(ne=>!g.has(ne.name)).sort((ne,he)=>p(ne)-p(he)||ne.name.localeCompare(he.name)),W=X.filter(ne=>y(ne)!=null),V=X.filter(ne=>y(ne)==null);for(const ne of W)Q(ne.name);let ee=Math.max(0,...x.map(ne=>ne.column))+1+1;for(const ne of V){const he=E(ne);let $=ee;for(;L($,he);)$+=1;const ie={name:ne.name,column:$,parentName:null};g.set(ne.name,ie),x.push(ie),S.set($,[...(Pe=S.get($))!=null?Pe:[],...he]),ee=$+1}return x.sort((ne,he)=>ne.column-he.column||ne.name.localeCompare(he.name))}function Dw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,qi=0,Xh=0,Rw=3600*1e3,Bw=3600*1e3,Bi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Eo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function xy(t,n,i=new Map){var V,ee,ae,re,Ae,Pe,ne,he,$,ie,F,fe,Ee,I,de;if(t.length===0)return new Map;const a=[...t].sort((q,me)=>{const be=Bi(q.date)-Bi(me.date);return be!==0?be:q.id!==me.id?q.id.localeCompare(me.id):q.visualId.localeCompare(me.visualId)}),c=new Map;for(const q of t){const me=(V=q.parentSha)!=null?V:null;if(me){const be=(ee=c.get(me))!=null?ee:new Set;be.add(q.id),c.set(me,be)}for(const be of(ae=i.get(q.id))!=null?ae:[]){if(!be)continue;const Te=(re=c.get(be))!=null?re:new Set;Te.add(q.id),c.set(be,Te)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const q of t){const me=(Ae=y.get(q.branchName))!=null?Ae:new Set;me.add(q.id),y.set(q.branchName,me);const be=(ne=(Pe=n.get(q.branchName))==null?void 0:Pe.column)!=null?ne:0,Te=(he=g.get(q.id))!=null?he:new Set;Te.add(be),g.set(q.id,Te);const We=new Set;q.parentSha&&We.add(q.parentSha),x.set(q.visualId,We);const Ke=new Set(We);for(const Ze of($=i.get(q.id))!=null?$:[])Ze&&Ke.add(Ze);b.set(q.visualId,Ke)}const S=new Set(Array.from(g.keys())),C=Array.from(S),j=new Map,E=q=>{const me=[];for(const be of C)Eo(be,q)&&me.push(be);return me},T=new Map;for(const q of C)T.set(q,new Set);for(const q of t){const me=E(q.id);if(me.length===0)continue;const be=(ie=b.get(q.visualId))!=null?ie:new Set,Te=new Set;for(const We of be)for(const Ke of E(We))Te.add(Ke);for(const We of me){const Ke=(F=T.get(We))!=null?F:new Set;for(const Ze of Te)Ke.add(Ze);T.set(We,Ke)}}const O=new Map,L=(q,me=new Set)=>{var Ke;const be=O.get(q);if(be)return be;if(me.has(q))return new Set;me.add(q);const Te=(Ke=T.get(q))!=null?Ke:new Set,We=new Set;for(const Ze of Te){We.add(Ze);for(const Lt of L(Ze,me))We.add(Lt)}return me.delete(q),O.set(q,We),We},D=(q,me)=>{if(Eo(q,me))return!0;const be=E(q),Te=E(me);for(const We of be){const Ke=L(We);for(const Ze of Te)if(Ke.has(Ze))return!0}for(const We of Te){const Ke=L(We);for(const Ze of be)if(Ke.has(Ze))return!0}return!1};let Q=1;const X=(q,me)=>{var Xe,He,Fe,tt,ot,gt,xt,Ot,it;const be=(He=(Xe=n.get(q.branchName))==null?void 0:Xe.column)!=null?He:0,Te=(Fe=y.get(q.branchName))!=null?Fe:new Set,Ke=!(!!q.parentSha&&Te.has(q.parentSha))&&q.parentSha?q.parentSha:null,Ze=Array.from(me).flatMap(H=>E(H).flatMap(J=>{var _e;return(_e=j.get(J))!=null?_e:[]})),Lt=(q.kind==="branch-created"||q.kind==="stash")&&Ze.length>0?Math.max(...Ze)+1:null,qt=Ze.length>0?Math.max(...Ze)+1:1,pt=(tt=c.get(q.id))!=null?tt:new Set,Et=Array.from(pt).flatMap(H=>{var J;return Array.from((J=g.get(H))!=null?J:[])}).some(H=>H!==be),Qe=new Date(q.date).getTime(),vt=Math.max(qt,1);let we=null;for(let H=vt;H<Q;H+=1){const J=(ot=d.get(H))!=null?ot:[];if(J.length===0||Et||p.has(H))continue;const _e=(gt=b.get(q.visualId))!=null?gt:new Set;if(!(J.some(Me=>D(q.id,Me.sha)?!0:Array.from(_e).some(Ie=>Eo(Ie,Me.sha)))||J.some(Me=>Me.column===be)||!Number.isFinite(Qe)||!J.every(Me=>{if(!Number.isFinite(Me.time))return!1;const Ie=!!Ke&&!!Me.branchEntryParentSha&&Ke===Me.branchEntryParentSha?Bw:Rw;return Math.abs(Me.time-Qe)<=Ie}))){we=H;break}}Lt!=null&&(we=Lt),we==null&&(we=Math.max(qt,Q)),u.set(q.visualId,we),we>=Q&&(Q=we+1);const oe=(xt=d.get(we))!=null?xt:[];oe.push({visualId:q.visualId,sha:q.id,column:be,time:Qe,branchEntryParentSha:Ke}),d.set(we,oe),Et&&p.add(we);for(const H of me){const J=(Ot=h.get(H))!=null?Ot:[];J.push(we),h.set(H,J)}const Re=(it=j.get(q.id))!=null?it:[];Re.push(we),j.set(q.id,Re)};for(const q of a){const me=(fe=x.get(q.visualId))!=null?fe:new Set;X(q,me)}const W=Math.max(1,a.length*2);for(let q=0;q<W;q+=1){let me=!1;for(const be of a){const Te=(Ee=x.get(be.visualId))!=null?Ee:new Set;if(Te.size===0)continue;const We=(I=u.get(be.visualId))!=null?I:1;let Ke=1;for(const Ze of Te){const Lt=E(Ze).flatMap(qt=>{var pt;return(pt=j.get(qt))!=null?pt:[]});Lt.length>0&&(Ke=Math.max(Ke,Math.max(...Lt)+1))}if(We<Ke){u.set(be.visualId,Ke);const Ze=(de=j.get(be.id))!=null?de:[];Ze.length===0?j.set(be.id,[Ke]):j.set(be.id,[...Ze.slice(0,-1),Ke]),me=!0}}if(!me)break}return u}function Mc(t){var xi,ys,bi,Ut,xs,Ms,Ao,vi,Io,Es,ri,Ls,bn,wo,Po,fs,Fs,on,Xs,Os,io,Ss,No,Gs,So,_o,Rn,Mn,Pn,Vn,ao,Ts,Cs,Ho,ro,hs,ks,Do,go,lo,Ro,Bo,wi,ta,Pi,Hi,Zo,Tt,Si,Ci,Ui,li,yo,Uo,ci;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:C,checkedOutRef:j,orientation:E="horizontal",nodePositionOverrides:T={}}=t,O=E==="horizontal",L=new Map(i.map(M=>[M.name,M])),D=new Map(n.map(M=>[M.name,M])),Q=Ew([...a.map(M=>{var U,le,ke,Ve;return{id:M.fullSha,branchName:d,message:(U=M.prTitle)!=null?U:M.sha,author:"",date:M.date,parentSha:(ke=(le=M.parentShas)==null?void 0:le[0])!=null?ke:null,parentShas:(Ve=M.parentShas)!=null?Ve:[]}}),...((xi=h[d])!=null?xi:[]).map(M=>Mr(d,M)),...c.map(M=>Mr(M.branch||"",M)),...u.map(M=>Mr(M.branch||"",M))]),X=new Map,W=new Map;for(const M of i){if(M.name===d)continue;const U=qx(M.name,y,h);W.set(M.name,U);const le=Xx(U.map(It=>Mr(M.name,It)));if(le.length>0){X.set(M.name,le);continue}const ke=(Ut=(bi=(ys=M.presidesFromSha)!=null?ys:M.divergedFromSha)!=null?bi:M.createdFromSha)!=null?Ut:null;if(!ke)continue;const Ve=(xs=c.find(It=>Eo(It.fullSha,ke)||Eo(It.sha,ke)))==null?void 0:xs.date,Ge=Ve?null:(Ms=Object.values(h).flat().find(It=>Eo(It.fullSha,ke)||Eo(It.sha,ke)))==null?void 0:Ms.date,Pt={id:`BRANCH_HEAD:${M.name}:${ke}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(Io=(vi=(Ao=Ve!=null?Ve:Ge)!=null?Ao:M.createdDate)!=null?vi:M.divergedFromDate)!=null?Io:M.lastCommitDate,parentSha:ke,clusterKey:null,childShas:[],kind:"branch-created"};X.set(M.name,[Pt])}const V=new Set(Q.map(M=>M.id)),ee=(Es=[...Q].sort((M,U)=>Bi(M.date)-Bi(U.date)||M.id.localeCompare(U.id))[0])!=null?Es:null,ae=new Map(Array.from(X.entries()).map(([M,U])=>[M,new Set(U.map(le=>le.id))])),re=new Map;for(const M of i){if(M.name===d)continue;const U=Aw(M.name,h,y);if(U){re.set(M.name,U);continue}const le=(ri=X.get(M.name))==null?void 0:ri[0];if(le){const ke=(wo=(bn=(Ls=M.presidesFromSha)!=null?Ls:M.divergedFromSha)!=null?bn:M.createdFromSha)!=null?wo:null;re.set(M.name,{...le,parentSha:ke})}}const Ae=new Map;for(const[M,U]of X.entries()){const le=U.find(ke=>ke.kind!=="branch-created");le&&Ae.set(M,le)}const Pe=new Map;for(const[M,U]of X.entries()){const le=U.filter(Ge=>Ge.kind!=="branch-created"),Ve=(Po=(le.length>0?le:U)[0])!=null?Po:null;Ve&&Pe.set(M,Ve)}const ne=new Map;for(const M of i){if(M.name===d)continue;const U=(fs=Pe.get(M.name))!=null?fs:null,le=(on=(Fs=re.get(M.name))==null?void 0:Fs.parentSha)!=null?on:null,ke=(io=(Os=(Xs=M.presidesFromSha)!=null?Xs:M.divergedFromSha)!=null?Os:M.createdFromSha)!=null?io:null,Ve=(Ss=U==null?void 0:U.parentSha)!=null?Ss:null,Ge=(No=Ve!=null?Ve:le)!=null?No:ke;Ge&&ne.set(M.name,Ge)}const he=M=>{var Ge,Pt,It,Ft,Gt,tn,mn,cn;const U=(Ge=p[M.name])!=null?Ge:null;if(!(U&&U!==d&&U!==M.name&&L.has(U)))return U!=null?U:"";const ke=(Ft=(It=(Pt=ne.get(M.name))!=null?Pt:M.presidesFromSha)!=null?It:M.divergedFromSha)!=null?Ft:M.createdFromSha;if(ke&&((Gt=ae.get(U))!=null?Gt:new Set).has(ke))return U;const Ve=(mn=(tn=re.get(M.name))==null?void 0:tn.parentSha)!=null?mn:null;return Ve&&((cn=ae.get(U))!=null?cn:new Set).has(Ve),U},$=M=>{var Ve,Ge,Pt,It,Ft,Gt,tn,mn;const U=re.get(M.name),le=(Ft=(It=(Pt=(Ge=(Ve=ne.get(M.name))!=null?Ve:U==null?void 0:U.parentSha)!=null?Ge:M.presidesFromSha)!=null?Pt:M.divergedFromSha)!=null?It:M.createdFromSha)!=null?Ft:null;if(!M.parentBranch&&!le||!le)return null;if(he(M)===d){if(V.has(le))return le;const cn=(Gt=U==null?void 0:U.parentSha)!=null?Gt:null;return cn&&V.has(cn)?cn:(mn=(tn=ee==null?void 0:ee.id)!=null?tn:cn)!=null?mn:le}return V.has(le),le},ie=M=>$(M),F=new Map;for(const M of[...c,...u]){const U={...Mr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};F.set(M.fullSha,U)}const fe=new Map(F),Ee=M=>{fe.has(M.id)||fe.set(M.id,M)},I=new Set(u.map(M=>M.fullSha)),de=new Map(Array.from(X.entries()).map(([M,U])=>[M,new Set(U.map(le=>le.id))])),q=new Set;for(const M of de.values())for(const U of M)q.add(U);for(const M of Q)q.has(M.id)||Ee({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,U]of X.entries())for(const le of U)Ee({...le,visualId:`${M}:${le.id}`});const be=[...Array.from(fe.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,U)=>Bi(M.date)-Bi(U.date)||M.id.localeCompare(U.id)),Te=new Map;for(const M of be){const U=(Gs=Te.get(M.branchName))!=null?Gs:new Set;U.add(M.id),Te.set(M.branchName,U)}const We=(M,U)=>{const le=Te.get(M);if(!le||le.size===0)return!1;for(const ke of le)if(Eo(ke,U))return!0;return!1},Ke=(M,U)=>{const le=Array.from(Te.entries()).filter(([ke])=>ke!==U).filter(([,ke])=>Array.from(ke).some(Ve=>Eo(Ve,M))).map(([ke])=>ke);return le.length>0?le.sort()[0]:M.slice(0,7)},Ze=[],Lt=new Map,qt=new Map;for(const M of a){const U=M.fullSha,le=M.targetBranch,ke=M.targetCommitSha;if(!U||!le||!ke||!We(le,ke))continue;const Ve=((So=M.parentShas)!=null?So:[]).slice(1).filter(Pt=>!!Pt&&!Eo(Pt,U));if(Ve.length===0)continue;const Ge=(_o=qt.get(U))!=null?_o:new Set;for(const Pt of Ve){Ge.add(Pt);const It=Ke(Pt,le);Ze.push({sourceCommitSha:Pt,sourceBranchName:It,mergeCommitSha:U,targetCommitSha:ke,targetBranchName:le});const Ft=(Rn=Lt.get(It))!=null?Rn:new Map,Gt=(Mn=Ft.get(Pt))!=null?Mn:new Set;Gt.add(le),Ft.set(Pt,Gt),Lt.set(It,Ft)}qt.set(U,Ge)}const pt=new Map;for(const M of i){if(M.name===d)continue;const U=$(M);U&&pt.set(M.name,U)}const ze=new Map;for(const M of be){const U=qt.get(M.id);if(U&&U.size>0){const Ve=(Pn=ze.get(M.id))!=null?Pn:new Set;for(const Ge of U)Ve.add(Ge);ze.set(M.id,Ve)}if(M.branchName===d)continue;const le=pt.get(M.branchName);if(!le||le===M.id)continue;const ke=(Vn=ze.get(M.id))!=null?Vn:new Set;ke.add(le),ze.set(M.id,ke)}const Et=new Map,Qe=new Map;for(const M of be){if(Qe.set(M.id,M),M.parentSha){const U=(ao=Et.get(M.parentSha))!=null?ao:new Set;U.add(M.id),Et.set(M.parentSha,U)}for(const U of(Ts=ze.get(M.id))!=null?Ts:[]){if(!U)continue;const le=(Cs=Et.get(U))!=null?Cs:new Set;le.add(M.id),Et.set(U,le)}}const vt=new Map;for(const[M,U]of Et.entries())vt.set(M,Array.from(U));const we=new Set(["branch-created","stash"]),oe=new Set,Re=M=>{if(!M)return null;const U=be.find(le=>Eo(le.id,M)||Eo(le.visualId.split(":").slice(1).join(":"),M));return U!=null?U:null};for(const M of be){if(M.parentSha){const le=Re(M.parentSha),ke=!!le&&oe.has(le.visualId);le&&(M.kind==="stash"||M.kind==="branch-created"||ke)&&oe.add(le.visualId)}const U=(Ho=Et.get(M.id))!=null?Ho:new Set;(U.size>1||Array.from(U).map(le=>Qe.get(le)).some(le=>le!=null&&le.kind!=null&&we.has(le.kind)))&&oe.add(M.visualId)}const Xe=be.map(M=>{var U,le;return{...M,childShas:(le=(U=vt.get(M.id))!=null?U:M.childShas)!=null?le:[]}}),He=xy(Xe,D,ze),Fe=new Map;for(const M of Xe){const U=(ro=Fe.get(M.branchName))!=null?ro:[];U.push(M),Fe.set(M.branchName,U)}const tt=new Map,ot=new Map,gt=new Map,xt=new Map,Ot=new Map,it=(M,U)=>{var Gt,tn,mn,cn,zs;if(U.length===0)return[];const le=[...U].sort((Vt,ns)=>{var co,qs;const bs=(co=He.get(Vt.visualId))!=null?co:Number.MAX_SAFE_INTEGER,ms=(qs=He.get(ns.visualId))!=null?qs:Number.MAX_SAFE_INTEGER;return bs!==ms?bs-ms:Bi(Vt.date)-Bi(ns.date)||Vt.id.localeCompare(ns.id)}),ke=new Map;let Ve=null,Ge=0;const Pt=Vt=>Vt.kind==="uncommitted"?"uncommitted":Vt.kind==="stash"?"stash":Vt.kind==="branch-created"?"branch-created":I.has(Vt.id)?"unpushed":"pushed";let It=null;for(const Vt of le){const ns=Vt.kind==="stash"||Vt.kind==="branch-created",bs=oe.has(Vt.visualId);if(ns)continue;const ms=Pt(Vt);(!Ve||It!=null&&It!==ms)&&(Ge+=1,Ve=`cluster:${M}:segment:${Ge}`);const co=(Gt=ke.get(Ve))!=null?Gt:[];co.push(Vt),ke.set(Ve,co),bs&&(Ve=null),It=ms}const Ft=[];for(const[Vt,ns]of ke.entries()){if(ns.length===0)continue;const ms=[...ns].sort(($s,Ks)=>{var G,K;const uo=(G=He.get($s.visualId))!=null?G:Number.MIN_SAFE_INTEGER,B=(K=He.get(Ks.visualId))!=null?K:Number.MIN_SAFE_INTEGER;return uo!==B?B-uo:Bi(Ks.date)-Bi($s.date)||Ks.id.localeCompare($s.id)})[0].visualId,co={branchName:M,key:Vt,commitIds:ns.map($s=>$s.visualId),leadId:ms,count:ns.length};Ft.push(co);const qs=(tn=Ot.get(Vt))!=null?tn:0;if(!xt.has(Vt))xt.set(Vt,ms);else{const $s=xt.get(Vt),Ks=Qe.get($s.split(":").slice(1).join(":"));if(Ks){const uo=(mn=He.get(Ks.visualId))!=null?mn:Number.MIN_SAFE_INTEGER;((cn=He.get(ms))!=null?cn:Number.MIN_SAFE_INTEGER)>uo&&xt.set(Vt,ms)}}Ot.set(Vt,Math.max(qs,ns.length));for(const $s of co.commitIds){ot.set($s,Vt);const Ks=$s.split(":").slice(1).join(":"),uo=(zs=gt.get(Ks))!=null?zs:[];uo.includes(Vt)||uo.push(Vt),gt.set(Ks,uo)}}return Ft};for(const[M,U]of Fe.entries())tt.set(M,it(M,U));const H=new Map;for(const M of Xe)H.set(M.id,M);const J=M=>{if(!M)return"none";const U=Array.from(H.values()).find(le=>Eo(le.id,M)||Eo(le.id.slice(0,7),M)||Eo(M,le.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:M.slice(0,7)},_e=b?["Lane rows (expected):",...[...n].sort((M,U)=>M.column-U.column||M.name.localeCompare(U.name)).map(M=>{var U;return`  row=${M.column} branch=${M.name} parent=${(U=M.parentName)!=null?U:"none"}`}),"",...i.flatMap(M=>{var Pt,It,Ft,Gt,tn,mn,cn,zs;const U=(Pt=h[M.name])!=null?Pt:[],le=[...(It=W.get(M.name))!=null?It:[]].reverse(),ke=new Set(((Ft=X.get(M.name))!=null?Ft:[]).map(Vt=>Vt.id)),Ve=(tn=(Gt=le.find(Vt=>!Vt.parentSha||!le.some(ns=>{var bs;return Eo(ns.fullSha,(bs=Vt.parentSha)!=null?bs:"")})))!=null?Gt:le[0])!=null?tn:null,Ge=(cn=(mn=Ve==null?void 0:Ve.parentSha)!=null?mn:ne.get(M.name))!=null?cn:null;return[`Branch ${M.name}`,`  ahead=${(zs=y[M.name])!=null?zs:0} previews=${le.length} rendered=${ke.size}`,`  db parent commit=${J(Ge)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${M.name}`:"none"}`,...le.map(Vt=>{const ns=ke.has(Vt.fullSha)?"visible":"hidden",bs=ke.has(Vt.fullSha)?"kept by render set":"dropped by render set";return`  ${ns} ${Vt.fullSha.slice(0,7)} ${Vt.message} [${bs}]`}),U.length===0?"  no preview data":null].filter(Vt=>Vt!=null)})]:[],Ce=b?Array.from(X.entries()).map(([M,U])=>[`Branch debug ${M}`,...U.map(le=>`  ${le.id.slice(0,7)} ${le.message}`)].join(`
`)):[],et=He,Je=Tm/Fu,Me=20/Fu,_t=O?ls+Je+Me:Yu+Je+Me,Ie=O?Yu+Je+Me:rl,Wt=Math.max(0,...Xe.map(M=>{var U;return(U=et.get(M.visualId))!=null?U:1})),yt=Xe.map(M=>{var Ve,Ge;const U=D.get(M.branchName),le=(Ve=et.get(M.visualId))!=null?Ve:1,ke=(Ge=U==null?void 0:U.column)!=null?Ge:0;return O?{commit:M,row:le,column:ke,x:Ta+(le-1)*_t,y:Ea+ke*Ie}:{commit:M,row:le,column:ke,x:Ta+ke*rl,y:Ea+(Wt-le)*_t}}),rt=M=>{var le;const U=(le=T[M.commit.visualId])!=null?le:T[M.commit.id];return U?{...M,x:U.x,y:U.y}:M},Rt=yt.map(rt),Dt=S.trim().toLowerCase(),Kt=Dt?Rt.filter(M=>{const U=M.commit.id.toLowerCase(),le=M.commit.id.slice(0,7).toLowerCase(),ke=M.commit.message.toLowerCase(),Ve=M.commit.branchName.toLowerCase();return U.includes(Dt)||le.includes(Dt)||ke.includes(Dt)||Ve.includes(Dt)}):Rt,ut=C&&(hs=Rt.find(M=>M.commit.id===C))!=null?hs:null,nt=new Set(Kt.map(M=>M.commit.id)),jt=(ks=j==null?void 0:j.headSha)!=null?ks:null,mt=(()=>{var U,le;const M=(U=j==null?void 0:j.branchName)!=null?U:null;return!jt||!M?null:(le=ot.get(`${M}:${jt}`))!=null?le:null})(),At=new Set;for(const[M,U]of Ot.entries())U>1&&M!==mt&&At.add(M);const ht=[...be].filter(M=>{var Ge;const U=ot.get(M.visualId);if(!U)return!0;const le=xt.get(U),ke=(Ge=Ot.get(U))!=null?Ge:1,Ve=g.has(U)||!At.has(U)&&!x.has(U);return ke<=1||Ve||le===M.visualId}),Bt=xy(ht,D,ze),fn=Tm/Fu,rn=20/Fu,sn=O?ls+fn+rn:Yu+fn+rn,Xn=O?Yu+fn+rn:rl,Hn=Math.max(0,...be.map(M=>{var U;return(U=He.get(M.visualId))!=null?U:1})),kn=Math.max(0,...ht.map(M=>{var U;return(U=Bt.get(M.visualId))!=null?U:1})),wn=Math.max(0,Hn-kn),Xt=[...ht.map(M=>{var Ve,Ge;const U=D.get(M.branchName),le=(Ve=Bt.get(M.visualId))!=null?Ve:1,ke=(Ge=U==null?void 0:U.column)!=null?Ge:0;return rt(O?{commit:M,row:le,column:ke,x:Ta+(wn+le-1)*sn,y:Ea+ke*Xn}:{commit:M,row:le,column:ke,x:Ta+ke*rl,y:Ea+(kn-le)*sn})})].sort((M,U)=>M.row!==U.row?M.row-U.row:M.column!==U.column?M.column-U.column:M.commit.visualId.localeCompare(U.commit.visualId)).map(M=>({...M})),$n=new Set;for(const M of Xt){let U=M.row,le=`${M.column}:${U}`;for(;$n.has(le);)U+=1,le=`${M.column}:${U}`;M.row=U,$n.add(le)}const at=Math.max(0,...Xt.map(M=>M.row));for(const M of Xt){if(O){M.x=Ta+(wn+M.row-1)*sn,M.y=Ea+M.column*Xn;continue}M.x=Ta+M.column*rl,M.y=Ea+(at-M.row)*sn}const In=new Map;for(const M of Xt){const U=(Do=In.get(M.commit.id))!=null?Do:[];U.push(M),In.set(M.commit.id,U)}const po=new Map;for(const M of Xt){const U=ot.get(M.commit.visualId);if(!U)continue;const le=po.get(U);(!le||(O?M.x>le.x:M.y<le.y))&&po.set(U,M)}const Go=(M,U)=>`${M.toFixed(1)} ${U.toFixed(1)}`,Us=Math.max(0,...Xt.map(M=>M.row)),js=Math.max(0,...n.map(M=>M.column)),ai=Math.max(0,...Xt.map(M=>M.x+ls)),gs=Math.max(0,...Xt.map(M=>M.y+vl+Ds)),bo=Math.max(O?Ta*2+Math.max(0,Us-1)*sn+ls+Yh+rn:Ta*2+(js+1)*rl,ai+Ta),qo=Math.max(O?Ea*2+js*Xn+Ds+Yh+rn:Ea*2+Math.max(0,Us-1)*sn+Ds+Yh+rn,gs+Ea),Bs=[],jn=new Map(i.map(M=>{var le,ke;const U=new Date((ke=(le=M.createdDate)!=null?le:M.divergedFromDate)!=null?ke:M.lastCommitDate).getTime();return[M.name,Number.isFinite(U)?U:0]})),Ko=M=>{var U;return(U=jn.get(M))!=null?U:0},ws=[],yn=M=>{b&&ws.push(M)},Un=new Set,so=new Map,Vs=(M,U)=>{var ke;const le=(ke=so.get(M))!=null?ke:[];le.includes(U)||le.push(U),so.set(M,le)},rs=new Set,ts=new Set,Ys=new Set,xn=(M,U)=>{var Ve,Ge;if(!M)return null;const le=Wu(In,M,U);if(le)return le;const ke=(Ve=ot.get(`${U!=null?U:d}:${M}`))!=null?Ve:ot.get(M);return ke&&(Ge=po.get(ke))!=null?Ge:null},hn=new Set;for(const M of i){const U=ie(M);U&&ts.add(U);const le=(go=ne.get(M.name))!=null?go:null;le&&Ys.add(le)}const Jt=M=>{var Ve;const U=xn(M.id,M.branchName);if(U)return U;const le=ot.get(M.visualId);if(!le)return null;const ke=xt.get(le);return ke&&(Ve=Xt.find(Ge=>Ge.commit.id===ke))!=null?Ve:null},Nn=(M,U)=>M?Wu(In,M,U):null,yi=(M,U)=>O?{x:M.x-qi,y:M.y+Ds/2,face:"left"}:{x:M.x+ls/2,y:M.y+Ds+qi,face:"bottom"},Qo=M=>O?{x:M.x-qi,y:M.y+Ds/2,face:"left"}:{x:M.x+ls/2,y:M.y+Ds+qi,face:"bottom"},Ii=(M,U)=>M.column!==U.column?!0:O?M.commit.branchName!==U.commit.branchName:!1,oo=(M,U,le)=>{if(!O)return{x:U?M.x+ls:M.x+ls/2,y:U?M.y+Ds/2:M.y,face:U?"right":"top"};if(!U)return{x:M.x+ls+qi,y:M.y+Ds/2,face:"right"};if(le&&le.column===M.column&&le.commit.branchName!==M.commit.branchName){if(le.x>M.x)return{x:M.x+ls/2,y:M.y+Ds+qi,face:"bottom"};if(le.x<M.x)return{x:M.x+ls/2,y:M.y-qi,face:"top"}}return!le||le.column===M.column?{x:M.x+ls+qi,y:M.y+Ds/2,face:"right"}:le.column>M.column?{x:M.x+ls/2,y:M.y+Ds+qi,face:"bottom"}:{x:M.x+ls/2,y:M.y-qi,face:"top"}},$o=M=>O?{x:M.x+ls/2,y:M.y+Ds+qi,face:"bottom"}:{x:M.x+ls,y:M.y+Ds/2,face:"right"},us=(M,U)=>Wu(In,M,U),vo=(M,U)=>Nn(M,U),Dn=[],Ws=new Set;for(const M of Ze){const U=(lo=xn(M.targetCommitSha,M.targetBranchName))!=null?lo:null;if(!U){yn({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const le=M.sourceCommitSha,ke=`merge:${M.mergeCommitSha}:${le!=null?le:"unknown"}`;if(!le||Eo(le,M.targetCommitSha)){yn({id:ke,kind:"merge",parent:le!=null?le:"unknown",child:M.targetCommitSha,rendered:!1,reason:le?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(Ro=Wu(In,le))!=null?Ro:null;if(!Ve){yn({id:ke,kind:"merge",parent:le,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===U.commit.id){yn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Ge,Pt,It;const Ft=O?U.x+ls/2:U.x+ls-Xh,Gt=O?U.y+Ds+Xh:U.y+Ds/2,tn=O?"bottom":"right";O?(Ge=Ve.x+ls+Xh,Pt=Ve.y+Ds/2,It="right"):(Ge=Ve.x+ls/2,Pt=Ve.y,It="top");const mn=`${Ge.toFixed(2)}:${Pt.toFixed(2)}:${Ft.toFixed(2)}:${Gt.toFixed(2)}`;if(Ws.has(mn)){yn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Ws.add(mn),Dn.push({id:ke,fromX:Ge,fromY:Pt,toX:Ft,toY:Gt,fromFace:It,toFace:tn,zIndex:Ko(Ve.commit.branchName)}),yn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const ds=new Set;for(const M of i){if(M.name===d)continue;const U=re.get(M.name);if(!U)continue;const le=he(M),ke=us((Bo=ne.get(M.name))!=null?Bo:"",le),Ve=(wi=Ae.get(M.name))!=null?wi:U,Ge=(ta=vo(Ve.id,M.name))!=null?ta:Jt(Ve);if(!ke||!Ge||ke.commit.id===Ge.commit.id){const tn=ot.get(`${M.name}:${U.id}`),mn=ot.get(`${M.name}:${Ve.id}`),cn=!!tn&&!At.has(tn),zs=!!mn&&!At.has(mn),Vt=!!tn&&!g.has(tn)&&(cn?x.has(tn):!0),ns=!!mn&&!g.has(mn)&&(zs?x.has(mn):!0);!ke&&!Vt&&Vs((Pi=Ge==null?void 0:Ge.commit.id)!=null?Pi:U.id,"Missing parent node"),!Ge&&!ns&&Vs(U.id,"Missing child node"),yn({id:`branch:${(Hi=ke==null?void 0:ke.commit.id)!=null?Hi:"null"}->${(Zo=Ge==null?void 0:Ge.commit.id)!=null?Zo:"null"}`,kind:"branch",parent:(Tt=ke==null?void 0:ke.commit.id)!=null?Tt:"null",child:(Si=Ge==null?void 0:Ge.commit.id)!=null?Si:"null",rendered:!1,reason:ke?Ge?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Pt=`branch:${ke.commit.id}->${Ge.commit.id}`;if(hn.has(Pt)){yn({id:Pt,kind:"branch",parent:ke.commit.id,child:Ge.commit.id,rendered:!1,reason:"duplicate connector key"});continue}hn.add(Pt),rs.add(ke.commit.id);const It=Ii(ke,Ge);ke.commit.branchName!==Ge.commit.branchName&&ds.add(ke.commit.id);const Ft=$o(ke),Gt=Qo(Ge);Bs.push({id:Pt,fromX:Ft.x,fromY:Ft.y,toX:Gt.x,toY:Gt.y,fromFace:Ft.face,toFace:Gt.face,zIndex:Ko(Ge.commit.branchName)}),yn({id:Pt,kind:"branch",parent:ke.commit.id,child:Ge.commit.id,rendered:!0,reason:It?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const M of be){const U=Jt(M);if(!U)continue;const le=(Ci=M.parentSha)!=null?Ci:null;if(!le)continue;const ke=(Ui=xn(le,M.branchName))!=null?Ui:us(le,M.branchName);if(!ke){const Ft=(li=ot.get(`${M.branchName}:${le}`))!=null?li:ot.get(le),Gt=!!Ft&&!At.has(Ft);!!Ft&&!g.has(Ft)&&(Gt?x.has(Ft):!0)||Vs(M.id,"Missing parent node"),yn({id:`${M.visualId}->${le}`,kind:"ancestry",parent:le,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===ke.commit.id){Vs(U.commit.id,"Parent and child resolve to the same node"),yn({id:`${ke.commit.id}->${U.commit.id}`,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${M.branchName}:${(yo=ke.commit.visualId)!=null?yo:ke.commit.id}->${U.commit.visualId}`;if(hn.has(Ve)){Vs(ke.commit.id,"Duplicate connector key"),Vs(U.commit.id,"Duplicate connector key"),yn({id:Ve,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}hn.add(Ve),rs.add(ke.commit.id);const Ge=Ii(ke,U),Pt=oo(ke,Ge,U),It=yi(U);Bs.push({id:Ve,fromX:Pt.x,fromY:Pt.y,toX:It.x,toY:It.y,fromFace:Pt.face,toFace:It.face,zIndex:Ko(U.commit.branchName)}),yn({id:Ve,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!0,reason:Ge?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),Un.add(ke.commit.id),Un.add(U.commit.id)}const Gn=new Map;for(const M of Xt){const U=(Uo=Gn.get(M.commit.branchName))!=null?Uo:[];U.push(M),Gn.set(M.commit.branchName,U)}for(const[M,U]of Gn.entries()){if(U.length<2)continue;const le=[...U].sort((ke,Ve)=>{var Ge,Pt,It,Ft,Gt,tn,mn,cn;return ke.row!==Ve.row?ke.row-Ve.row:Bi((Pt=(Ge=ke==null?void 0:ke.commit)==null?void 0:Ge.date)!=null?Pt:null)-Bi((Ft=(It=Ve==null?void 0:Ve.commit)==null?void 0:It.date)!=null?Ft:null)||((tn=(Gt=ke==null?void 0:ke.commit)==null?void 0:Gt.id)!=null?tn:"").localeCompare((cn=(mn=Ve==null?void 0:Ve.commit)==null?void 0:mn.id)!=null?cn:"")});for(let ke=1;ke<le.length;ke+=1){const Ve=le[ke-1],Ge=le[ke];if(Ve.commit.id===Ge.commit.id)continue;const Pt=(ci=Ge.commit.parentSha)!=null?ci:null;if(Pt&&us(Pt,Ge.commit.branchName))continue;const It=`chain:${M}:${Ve.commit.id}->${Ge.commit.id}`;if(hn.has(It)){Vs(Ve.commit.id,"Duplicate branch chain connector"),Vs(Ge.commit.id,"Duplicate branch chain connector"),yn({id:It,kind:"ancestry",parent:Ve.commit.id,child:Ge.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}hn.add(It);const Ft=Ii(Ve,Ge),Gt=oo(Ve,Ft,Ge),tn=yi(Ge);Bs.push({id:It,fromX:Gt.x,fromY:Gt.y,toX:tn.x,toY:tn.y,fromFace:Gt.face,toFace:tn.face,zIndex:Ko(Ge.commit.branchName)}),yn({id:It,kind:"ancestry",parent:Ve.commit.id,child:Ge.commit.id,rendered:!0,reason:"branch chain rendered"}),Un.add(Ve.commit.id),Un.add(Ge.commit.id)}}return{branchByName:L,laneByName:D,mainCommits:Q,branchCommitsByLane:X,branchPreviewSets:W,allCommits:be,clustersByBranch:tt,clusterKeyByCommitId:ot,clusterKeyBySha:gt,leadByClusterKey:xt,clusterCounts:Ot,debugRows:_e,branchDebugRows:Ce,nodes:yt,normalizedSearchQuery:Dt,matchingNodes:Kt,matchingNodeIds:nt,focusedNode:ut,checkedOutClusterKey:mt,defaultCollapsedClumps:At,visibleCommitsList:ht,renderNodes:Xt,visibleNodesBySha:In,visibleNodeByClusterKey:po,pointFormatter:Go,contentWidth:bo,contentHeight:qo,connectors:Bs,mergeConnectors:Dn,connectorDecisions:ws,nodeWarnings:so,connectorParentShas:rs,branchStartShas:ts,branchOffNodeShas:Ys,crossBranchOutgoingShas:ds,commitIdsWithRenderedAncestry:Un,branchBaseCommitByName:re,firstBranchCommitByName:Pe,mergeDestinations:Ze,mergeTargetBranchesBySourceBranchAndCommitSha:Lt}}const Lw=8,Ow=44,by=120,vy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Kx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Lw){const X=d/g,W=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+X*V,c1y:n+W*V,c2x:i-X*V,c2y:a-W*V}}if(Math.min(p,y)<Ow){const X=d/g,W=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+X*V,c1y:n+W*V,c2x:i-X*V,c2y:a-W*V}}const S=Math.min(160,p*.42),C=Math.min(100,p*.22),j=Math.min(120,y*.32),E=Math.min(160,y*.42),T=vy(c),O=vy(u);if(!(T==="v"&&O==="h"||T==="v"&&O==null&&y>=p||T==null&&O==="h"&&y>=p||T==="v"&&O==="v"||T==null&&O==null&&y>p)){const X=i,W=n;return{kind:"elbowH",cx:X,cy:W,s1c1x:t+x*S,s1c1y:n,s1c2x:X-x*C,s1c2y:W,s2c1x:X,s2c1y:W+b*j,s2c2x:i,s2c2y:a-b*E}}const D=t,Q=a;return{kind:"elbowV",cx:D,cy:Q,s1c1x:t,s1c1y:n+b*E,s1c2x:D,s1c2y:Q-b*j,s2c1x:D+x*S,s2c1y:Q,s2c2x:i-x*C,s2c2y:a}}function zw(t,n,i,a,c,u){const d=Kx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function wy(t,n,i,a,c,u,d){const h=Kx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),C=i>=t?1:-1,j=a>=n?1:-1,E=h.cx-C*S,T=h.cy+j*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(E-C*S*.5,h.cy)} ${c(E,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const mp=2.25,ac=mp/2,$w=.45,Iw=.01,ua=mp,kd=10,Pw=-100,Sy=0,Cy=.9,Hw=.9,ky=.001,Gh=.001,Uw=12,Vw=ls+48;function An(...t){return t.filter(Boolean).join(" ")}function Yw(t){return Math.max($w,Math.min(mp,t))}function Ww(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Fw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Xw(t,n,i,a,c,u,d){const h=zw(t,n,i,a,u,d),p=Fw(h);return Qx(c,p)}function Zx(t,n){return{left:t.x,top:t.y+n,right:t.x+ls,bottom:t.y+vl+Ds+4}}function Gw(t,n){const i=Vw,a=Math.max(120,Math.ceil(vl+Ds+4-n+24)),c=new Map;for(const u of t){const d=Zx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=y;S<=g;S++){const C=`${b},${S}`;let j=c.get(C);j||(j=new Set,c.set(C,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function qw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let C=y;C<=g;C++){const j=d.get(`${S},${C}`);if(j)for(const E of j)x.add(E)}const b=new Set;for(const S of x){const C=i.get(S);if(!C)continue;const j=Zx(C,a);Qx(n,j)&&b.add(S)}return b}function jy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ua;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Kw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function My(t,n,i){const a=n/ua;return!Number.isFinite(a)||a<=0?t:Kw(t,100/a)}function Ey(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function gi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=Ey(n),a=Ey(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function Qw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Zw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:S,selectedPushTargets:C,selectedPushLabel:j,canPushCurrentBranch:E,pushCurrentBranchLabel:T,pushableRemoteBranchCount:O,selectedCommitTargetOption:L,mergeInProgress:D,setMergeTargetCommitSha:Q,worktrees:X,currentRepoPath:W,worktreeMenuOpen:V,setWorktreeMenuOpen:ee,onSwitchToWorktree:ae,onRemoveWorktree:re,removeWorktreeInProgress:Ae,setCommitDialogOpen:Pe,setNewBranchDialogOpen:ne}){var qt,pt;const he=t.length>0,$=t.length>0&&t.every(ze=>ze==="WORKING_TREE"),[ie,F]=_.useState(!1),fe=_.useRef(null),Ee=_.useRef(null),I="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",de=!!p&&d&&!i&&!n&&(!he||$),q=!!g&&E&&!he&&!u,me=!!b&&C.length>0&&!u,be=!!x&&O>=2&&!he&&!u,Te=!!y&&!c&&!he&&!a,We="Push Selected...",Ke=()=>r.jsx(fp,{className:"h-3.5 w-3.5 shrink-0 animate-spin","aria-hidden":"true"}),Ze=de?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>Pe(!0),disabled:!de}:q?{label:u?"Pushing...":T,iconSrc:"/icon-pushBranch.svg",run:()=>void(g==null?void 0:g()),disabled:!q}:me?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(C.map(ze=>({branchName:ze.branchName,targetSha:ze.targetSha})))),disabled:!me}:null;return _.useEffect(()=>{const ze=Et=>{var vt,we;const Qe=Et.target;Qe&&((vt=fe.current)!=null&&vt.contains(Qe)||(we=Ee.current)!=null&&we.contains(Qe)||(F(!1),ee(!1)))};return window.addEventListener("pointerdown",ze),()=>window.removeEventListener("pointerdown",ze)},[ee]),r.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:r.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[r.jsxs("div",{ref:fe,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[r.jsx("button",{type:"button",onClick:()=>{Ze&&Ze.run()},disabled:!Ze||Ze.disabled,className:An(I,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:r.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[n||u||a?r.jsx(Ke,{}):r.jsx("img",{src:(qt=Ze==null?void 0:Ze.iconSrc)!=null?qt:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),r.jsx("span",{children:(pt=Ze==null?void 0:Ze.label)!=null?pt:"Commit"})]})}),r.jsx("button",{type:"button",onClick:()=>F(ze=>!ze),disabled:!Ze,"aria-haspopup":"menu","aria-expanded":ie,className:An(I,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:r.jsx(Wx,{className:"h-3.5 w-3.5 shrink-0"})}),ie&&Ze?r.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[r.jsxs("button",{type:"button",onClick:()=>{F(!1),Pe(!0)},disabled:!de,className:An(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!de&&"text-muted-foreground opacity-50"),children:[n?r.jsx(Ke,{}):r.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing changes...":"Commit"]}),r.jsxs("button",{type:"button",onClick:()=>{F(!1),g==null||g()},disabled:!q,className:An(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!q&&"text-muted-foreground opacity-50"),children:[u?r.jsx(Ke,{}):r.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing to remote...":T]}),r.jsxs("button",{type:"button",onClick:()=>{F(!1),b==null||b(C.map(ze=>({branchName:ze.branchName,targetSha:ze.targetSha})))},disabled:!me,className:An(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!me&&"text-muted-foreground opacity-50"),title:j,children:[u?r.jsx(Ke,{}):r.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),We]}),r.jsxs("button",{type:"button",onClick:()=>{F(!1),x==null||x()},disabled:!be,className:An(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!be&&"text-muted-foreground opacity-50"),children:[u?r.jsx(Ke,{}):r.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing branches...":"Push all"]}),r.jsxs("button",{type:"button",onClick:()=>{F(!1),y==null||y()},disabled:!Te,className:An(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Te&&"text-muted-foreground opacity-50"),children:[a?r.jsx(Ke,{}):r.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing changes...":"Stash"]})]}):null]}),r.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:r.jsxs("button",{type:"button",onClick:()=>ne(!0),disabled:h,className:An(I,"pointer-events-auto relative z-10 bg-background"),children:[r.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&L.options.length>0&&L.targetBranch&&S?r.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[r.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(ze=>{const Et=ze.targetBranch===L.targetBranch;return r.jsx("button",{type:"button",onClick:()=>Q(ze.targetSha),className:An("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Et?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:ze.targetBranch},`merge-${ze.targetBranch}`)}),r.jsxs("button",{type:"button",onClick:()=>void S(L.sources,L.targetBranch),disabled:L.sources.length===0||D,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[r.jsx(yw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),D?"Merging...":"Confirm"]})]}):null,X.length>0&&(ae||re)?r.jsxs("div",{ref:Ee,className:"pointer-events-auto relative",children:[r.jsxs("button",{type:"button",onClick:()=>ee(ze=>!ze),className:I,children:[r.jsx(hw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),X.length," ",X.length===1?"Worktree":"Worktrees"]}),V?r.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:X.map(ze=>{var Et;return r.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:ze.path,children:Am(ze,W)?Qw(ze.path):"This window"}),r.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(Et=ze.branchName)!=null?Et:"detached"," • ",ze.headSha.slice(0,7)]})]}),Am(ze,W)?r.jsxs("div",{className:"flex items-center gap-1",children:[ae?r.jsx("button",{type:"button",onClick:()=>{ee(!1),ae(ze.path)},disabled:Ae||ze.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,re?r.jsx("button",{type:"button",onClick:()=>void re(ze.path,ze.isPrunable),disabled:Ae,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ae?"...":"Remove"}):null]}):null]},ze.path)})}):null]}):null]})})}function Jw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),r.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function eS({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:S,normalizedSearchQuery:C,matchingNodeIds:j,focusedNode:E,renderNodes:T,shouldRenderNode:O,manuallyOpenedClumps:L,manuallyClosedClumps:D,defaultCollapsedClumps:Q,leadByClusterKey:X,clusterKeyByCommitId:W,clusterCounts:V,commitIdsWithRenderedAncestry:ee,nodeWarnings:ae,connectorParentShas:re,branchStartShas:Ae,branchOffNodeShas:Pe,crossBranchOutgoingShas:ne,branchBaseCommitByName:he,branchStartAccentClass:$,connectorParentAccentClass:ie,commitCornerRadiusPx:F,lineStrokeWidth:fe,pointFormatter:Ee,connectors:I,mergeConnectors:de,cullConnectorPath:q,flushCameraReactTick:me,setManuallyOpenedClumps:be,setManuallyClosedClumps:Te,onCommitCardClick:We,unpushedCommitShasSetByBranch:Ke,checkedOutHeadSha:Ze}){const[Lt,qt]=_.useState(new Set),pt=_.useRef(null);_.useEffect(()=>{const we=new Set;V.forEach((Xe,He)=>{(L.has(He)||!Q.has(He)&&!D.has(He))&&we.add(He)});const oe=pt.current;if(oe==null){pt.current=we;return}const Re=[];if(we.forEach(Xe=>{oe.has(Xe)||Re.push(Xe)}),Re.length>0){qt(He=>{const Fe=new Set(He);return Re.forEach(tt=>Fe.add(tt)),Fe});const Xe=window.setTimeout(()=>{qt(He=>{const Fe=new Set(He);return Re.forEach(tt=>Fe.delete(tt)),Fe})},260);return pt.current=we,()=>{window.clearTimeout(Xe)}}pt.current=we},[V,Q,D,L]);const ze=(we,oe)=>{const Re=oe.zIndex-we.zIndex;if(Re!==0)return Re;const Xe=Math.min(we.fromY,we.toY),He=Math.min(oe.fromY,oe.toY),Fe=Xe-He;return Fe!==0?Fe:we.id.localeCompare(oe.id)},Et=de.filter(we=>q(we)).sort(ze),Qe=I.filter(we=>q(we)).sort(ze),vt=T.filter(we=>O(we));return r.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:r.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:r.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[vt.map(we=>{var yt,rt,Rt,Dt,Kt,ut;const oe=W.get(we.commit.visualId),Re=oe?L.has(oe)||!Q.has(oe)&&!D.has(oe):!1,Xe=oe?X.get(oe)===we.commit.visualId:!1,He=oe!=null&&Re&&!Xe&&Lt.has(oe),Fe=oe&&(yt=V.get(oe))!=null?yt:1,tt=ee.has(we.commit.id),ot=(rt=ae.get(we.commit.id))!=null?rt:[],gt=ot.length>0&&!tt,xt=S.includes(we.commit.id),Ot=we.commit.id==="WORKING_TREE"||we.commit.kind==="uncommitted",it=we.commit.kind==="stash"||we.commit.id.startsWith("STASH:"),H=/^STASH:(\d+)$/.exec(we.commit.id),J=H?`Stash:${H[1]}`:null,_e=it?we.commit.message.trim()&&we.commit.message.trim()!=="git-visualizer"?we.commit.message:"Stashed changes":we.commit.message,Ce=we.commit.kind==="branch-created"&&we.commit.id.startsWith("BRANCH_HEAD:"),et=Ot||((Dt=(Rt=Ke.get(we.commit.branchName))==null?void 0:Rt.has(we.commit.id))!=null?Dt:!1),Me=(Ot||Ze!=null&&we.commit.id===Ze)&&!xt,_t=Me?"text-[#38BDF2]":xt?"text-[#158EFC]":"text-muted-foreground",Ie=Me?{color:"#38BDF2"}:xt?{color:"#158EFC"}:void 0,Wt=(Kt=Ie==null?void 0:Ie.color)!=null?Kt:"#8B8B8B";return r.jsxs(Jw,{fadeIn:He,dataCommitCard:"true",className:An("group absolute z-20 cursor-grab active:cursor-grabbing",C&&!j.has(we.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&j.has(we.commit.id)?"scale-[1.01]":"",(E==null?void 0:E.commit.id)===we.commit.id?"z-30":""),style:{left:we.x,top:we.y,width:ls,height:vl+Ds+4,overflow:"visible"},onClick:nt=>We(nt,we),onPointerDown:nt=>y(nt,we),children:[r.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:r.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[r.jsx("div",{className:An("min-w-0 h-4 flex-1 text-sm font-medium leading-none",_t,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ie,children:it&&J?J:we.commit.branchName?`${we.commit.branchName}/${we.commit.id.slice(0,7)}`:we.commit.id.slice(0,7)}),Xe&&Fe>1?r.jsx("button",{type:"button",onMouseDown:nt=>{nt.stopPropagation()},onClick:nt=>{if(nt.stopPropagation(),nt.preventDefault(),!oe)return;!Q.has(oe)?(be(mt=>{if(!mt.has(oe))return mt;const At=new Set(mt);return At.delete(oe),At}),Te(mt=>{const At=new Set(mt);return At.has(oe)?At.delete(oe):At.add(oe),At})):(Te(mt=>{if(!mt.has(oe))return mt;const At=new Set(mt);return At.delete(oe),At}),be(mt=>{const At=new Set(mt);return At.has(oe)?At.delete(oe):At.add(oe),At})),me()},className:An("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",_t),style:Ie,children:Re?r.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Fe}`}):null]})}),r.jsx("div",{className:An("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Me&&!et&&!it&&!Ce?"bg-[#EBF7FE]":xt&&!et&&!it&&!Ce?"bg-[#E5F0FF]":et||it||Ce?"bg-transparent":"bg-[#F5F5F5]",it||Ot||Ce?"border-dashed":"",Pe.has(we.commit.id)||Ae.has(we.commit.id)||ne.has(we.commit.id)?$:re.has(we.commit.id)?ie:((ut=he.get(we.commit.branchName))==null?void 0:ut.id)===we.commit.id?"border-amber-500":gt?"border-red-500":"",(C&&j.has(we.commit.id)&&!d,"")),style:{top:0,borderWidth:(E==null?void 0:E.commit.id)===we.commit.id?`${it||Ot||Ce?fe*(2/1.5):fe}px`:`${it||Ot||Ce?fe*(2/1.5):fe}px`,borderColor:(E==null?void 0:E.commit.id)===we.commit.id?Wt:Me?"#38BDF2":xt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${F}px`,borderBottomRightRadius:`${F}px`,borderBottomLeftRadius:`${F}px`},children:r.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[r.jsxs("div",{className:"min-h-0 flex-1",children:[r.jsx("div",{className:An("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",_t,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Ie,children:Xe&&Re?_e:Xe&&Fe>1?`${_e} +${Fe-1}`:_e}),r.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:gt?r.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ot.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!it?r.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[r.jsxs("div",{className:An("select-text text-sm font-medium",_t),"data-selectable-text":"true",style:Ie,children:["@",we.commit.author]}),r.jsx("div",{className:An("select-text text-sm font-medium",_t),"data-selectable-text":"true",style:Ie,children:new Date(we.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},we.commit.visualId)}),r.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Et.map(we=>{const{fromX:oe,fromY:Re,toX:Xe,toY:He}=we,Fe=wy(oe,Re,Xe,He,Ee,we.fromFace,we.toFace);return r.jsx("path",{d:Fe,fill:"none",stroke:Wh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},we.id)}),Qe.map(we=>{const{fromX:oe,fromY:Re,toX:Xe,toY:He}=we,Fe=wy(oe,Re,Xe,He,Ee,we.fromFace,we.toFace);return r.jsx("path",{d:Fe,fill:"none",stroke:Wh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},we.id)})]})]})})})}function tS({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return r.jsx(r.Fragment,{children:t?r.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),r.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),r.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:r.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null})}function nS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:C,onNewBranchNameChange:j,onNewBranchCreateModeChange:E,onNewBranchDialogClose:T,onNewBranchConfirm:O,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:Q}){const X=()=>r.jsx(fp,{className:"mr-1.5 h-3.5 w-3.5 shrink-0 animate-spin","aria-hidden":"true"});return r.jsxs(r.Fragment,{children:[t?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:W=>W.stopPropagation(),children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),r.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),r.jsx("textarea",{value:n,onChange:W=>i(W.target.value),onKeyDown:W=>{(W.metaKey||W.ctrlKey)&&W.key==="Enter"&&(W.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[u?r.jsx(X,{}):r.jsx(_w,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Writing commit...":"Commit"]})]})]})}):null,d?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:W=>W.stopPropagation(),children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),r.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(W=>r.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:W},W))}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:W=>W.stopPropagation(),children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),r.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[r.jsx("button",{type:"button",onClick:()=>E("from-selected-node"),className:An("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),r.jsx("button",{type:"button",onClick:()=>E("new-root"),className:An("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),r.jsx("input",{value:S,onChange:W=>j(W.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsxs("button",{type:"button",onClick:O,disabled:!S.trim()||Q||C==="from-selected-node"&&!L&&!D,className:An("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[Q?r.jsx(X,{}):r.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),Q?"Creating branch...":"Create"]})]})]})}):null]})}const Ty="/icon-GitOrientation.svg";function sS({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return r.jsxs("button",{type:"button",onClick:()=>n(i),className:An("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[r.jsx("span",{className:"relative size-4 shrink-0",children:r.jsx("span",{"aria-hidden":"true",className:An("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ty})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ty})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),r.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function oS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return r.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[r.jsx(kw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),r.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),r.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:r.jsx(cw,{className:"h-4 w-4 shrink-0"})}),r.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:r.jsx(Wx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function iS({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(ac),c=_.useRef({panX:0,panY:0,zoom:ac}),u=_.useRef(null),d=_.useRef(ac),h=_.useRef(null),[p,y]=_.useState(!1),[g,x]=_.useState(ac),[b,S]=_.useState(0),C=_.useRef(null),j=_.useRef(0),E=_.useCallback(()=>{const ee=t.current;if(!ee)return null;const ae=ee.getBoundingClientRect(),re=getComputedStyle(ee),Ae=Number.parseFloat(re.borderLeftWidth)||0,Pe=Number.parseFloat(re.borderTopWidth)||0,ne=Number.parseFloat(re.paddingLeft)||kd,he=Number.parseFloat(re.paddingTop)||kd;return{x:ae.left+Ae+ne,y:ae.top+Pe+he}},[t]),T=_.useCallback(()=>{C.current!=null&&(window.clearTimeout(C.current),C.current=null),_.startTransition(()=>{S(ee=>ee+1)}),j.current=performance.now()},[]),O=_.useCallback((ee,ae,re)=>{const Ae=c.current;c.current={panX:ee,panY:ae,zoom:re};const Pe=n.current;if(Pe&&(Pe.style.transform=`translate3d(${ee}px, ${ae}px, 0) scale(${re/ua})`),Math.abs(d.current-re)>Gh&&(d.current=re,x(re)),Math.abs(re-Ae.zoom)>Gh){T();return}const $=performance.now()-j.current;if($>=Sy){T();return}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{C.current=null,T()},Sy-$)},[T,n]),L=_.useRef(null),D=_.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),Q=_.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),X=_.useCallback((ee,ae,re)=>{i.current={x:ee,y:ae},a.current=re,Q(),D()},[Q,D]);L.current=()=>{u.current=null;const ee=c.current,ae=i.current.x,re=i.current.y,Ae=a.current,Pe=Math.abs(ae-ee.panX)<=ky?ae:ee.panX+(ae-ee.panX)*Cy,ne=Math.abs(re-ee.panY)<=ky?re:ee.panY+(re-ee.panY)*Cy,he=Math.abs(Ae-ee.zoom)<=Gh?Ae:ee.zoom+(Ae-ee.zoom)*Hw;O(Pe,ne,he),Pe!==ae||ne!==re||he!==Ae?L.current&&(u.current=window.requestAnimationFrame(L.current)):T()};const W=_.useCallback((ee,ae,re)=>{const Ae=Yw(re),Pe=i.current.x,ne=i.current.y,he=a.current,$=E();if(!$){X(Pe,ne,Ae);return}const ie=ee-$.x,F=ae-$.y,fe=he/ua,Ee=Ae/ua,I=(ie-Pe)/fe,de=(F-ne)/fe,q=ie-I*Ee,me=F-de*Ee;i.current={x:q,y:me},a.current=Ae,O(q,me,Ae)},[O,E]),V=_.useCallback(ee=>{if(ee.preventDefault(),ee.ctrlKey||ee.metaKey){const ae=Math.exp(-ee.deltaY*Iw);W(ee.clientX,ee.clientY,a.current*ae);return}X(i.current.x-ee.deltaX,i.current.y-ee.deltaY,a.current)},[X,W]);return _.useLayoutEffect(()=>(O(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),C.current!=null&&(window.clearTimeout(C.current),C.current=null)}),[O]),_.useLayoutEffect(()=>{const ee=n.current;if(!ee)return;const ae=c.current;ee.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/ua})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:E,flushCameraReactTick:T,syncCamera:X,handleWheel:V}}function aS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function rS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[S,C]=_.useState([]),[j,E]=_.useState(null),T=_.useCallback(L=>{const D=t.current,Q=i();if(!D||!Q)return[];const X=D.getBoundingClientRect(),W=n.current.zoom/ua;if(W<=0)return[];const V=[],ee=L.left,ae=L.left+L.width,re=L.top,Ae=L.top+L.height;for(const Pe of a){if(!c(Pe))continue;const ne=Q.x+n.current.panX+Pe.x*W-X.left,he=Q.y+n.current.panY+Pe.y*W-X.top,$=ne+ls*W,ie=he+(vl+Ds)*W;!($<ee||ne>ae||ie<re||he>Ae)&&V.push(Pe.commit.id)}return V},[i,a,n,t,c]),O=_.useCallback(L=>{if(L.button!==0)return;const D=L.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const Q=t.current;if(!Q)return;L.preventDefault();const X=Q.getBoundingClientRect(),W=L.clientX-X.left,V=L.clientY-X.top;d.current={startX:W,startY:V,currentX:W,currentY:V,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?S:[],g(!0),b({left:W,top:V,width:0,height:0})},[t,S]);return _.useEffect(()=>{const L=Q=>{var re;const X=d.current;if(!X)return;const W=t.current;if(!W)return;const V=W.getBoundingClientRect();X.currentX=Q.clientX-V.left,X.currentY=Q.clientY-V.top,!h.current&&(Math.abs(X.currentX-X.startX)>2||Math.abs(X.currentY-X.startY)>2)&&(h.current=!0);const ee=aS(X);b(ee);const ae=T(ee);C(X.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),X.additive||E((re=ae[ae.length-1])!=null?re:null)},D=()=>{if(d.current){const Q=h.current;d.current=null,h.current=!1,g(!1),b(null),Q||(C([]),E(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",D)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:C,mergeTargetCommitSha:j,setMergeTargetCommitSha:E,startMarqueeDrag:O}}function Ay({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:C=0,onMergeRefsIntoBranch:j,mergeInProgress:E=!1,onPushAllBranches:T,onPushCurrentBranch:O,onPushCommitTargets:L,pushInProgress:D=!1,onDeleteSelection:Q,deleteInProgress:X=!1,worktrees:W=[],currentRepoPath:V,onRemoveWorktree:ee,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:re,onStashLocalChanges:Ae,stashInProgress:Pe=!1,stashDisabled:ne=!1,onCommitLocalChanges:he,commitInProgress:$=!1,commitDisabled:ie=!1,onStageAllChanges:F,stageInProgress:fe=!1,onCreateBranchFromNode:Ee,onCreateRootBranch:I,createBranchFromNodeInProgress:de=!1,isDebugOpen:q=!1,onDebugClose:me,orientation:be="horizontal",branchCommitPreviews:Te={},branchParentByName:We={},branchUniqueAheadCounts:Ke={},gridSearchQuery:Ze="",gridSearchJumpToken:Lt=0,gridSearchJumpDirection:qt=1,gridFocusSha:pt=null,checkedOutRef:ze=null,onGridSearchResultCountChange:Et,onGridSearchResultIndexChange:Qe,onGridSearchFocusChange:vt,onInteractionChange:we,manuallyOpenedClumps:oe,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,gridHudProps:Fe}){var zs,Vt,ns,bs,ms,co,qs,$s,Ks,uo,B,G,K,ue;const tt=_.useRef(null),ot=_.useRef(null),gt=_.useRef(null),xt=_.useRef(null),Ot=_.useRef(void 0),it=_.useRef(void 0),H=_.useRef(void 0),J=_.useRef(0),_e=_.useRef(null),[Ce,et]=_.useState(!1),[Je,Me]=_.useState(!1),[_t,Ie]=_.useState(""),[Wt,yt]=_.useState(!1),[rt,Rt]=_.useState(!1),[Dt,Kt]=_.useState(""),[ut,nt]=_.useState("from-selected-node"),[jt,mt]=_.useState(()=>new Set),[At,ht]=_.useState(()=>new Set),[Bt,fn]=_.useState({}),rn=_.useRef(!1),sn=_.useRef(null),Xn=_.useRef(null),Hn=oe!=null?oe:jt,kn=Re!=null?Re:At,wn=Xe!=null?Xe:mt,as=He!=null?He:ht,[Xt,$n]=_.useState(null),[at,In]=_.useState(null),{isCameraMoving:po,renderedZoom:Go,cameraRenderTick:Us,renderedCameraRef:js,interactionIdleTimeoutRef:ai,getTransformLayerOriginScreen:gs,flushCameraReactTick:bo,syncCamera:qo,handleWheel:Bs}=iS({mapPadHostRef:ot,transformLayerRef:gt}),jn=_.useMemo(()=>hp(t,d,Te,We),[t,d,Te,We]),ws=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Te,branchParentByName:We,branchUniqueAheadCounts:Ke,manuallyOpenedClumps:Hn,manuallyClosedClumps:kn,isDebugOpen:q,gridSearchQuery:Ze,gridFocusSha:pt,checkedOutRef:ze!=null?ze:null,orientation:be,nodePositionOverrides:Bt}),[jn,t,n,i,a,d,Te,We,Ke,Hn,kn,q,Ze,pt,(zs=ze==null?void 0:ze.headSha)!=null?zs:null,(Vt=ze==null?void 0:ze.branchName)!=null?Vt:null,be,Bt]),yn=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Te,branchParentByName:We,branchUniqueAheadCounts:Ke,manuallyOpenedClumps:Hn,manuallyClosedClumps:kn,isDebugOpen:q,gridSearchQuery:Ze,gridFocusSha:pt,checkedOutRef:ze!=null?ze:null,orientation:be,nodePositionOverrides:Bt}),[jn,t,n,i,a,d,Te,We,Ke,Hn,kn,q,Ze,pt,(ns=ze==null?void 0:ze.headSha)!=null?ns:null,(bs=ze==null?void 0:ze.branchName)!=null?bs:null,be,Bt]),{allCommits:Un,clusterKeyByCommitId:so,leadByClusterKey:Vs,clusterCounts:rs,matchingNodes:ts,matchingNodeIds:Ys,normalizedSearchQuery:xn,focusedNode:hn,defaultCollapsedClumps:Jt,renderNodes:Nn,visibleNodesBySha:yi,contentWidth:Qo,contentHeight:Ii,connectors:oo,mergeConnectors:$o,connectorDecisions:us,nodeWarnings:vo,commitIdsWithRenderedAncestry:Dn,connectorParentShas:Ws,branchStartShas:ds,branchOffNodeShas:Gn,crossBranchOutgoingShas:xi,branchBaseCommitByName:ys,pointFormatter:bi}=ws,Ut=!!xn,xs=Go/ua,Ms=_.useMemo(()=>({transform:`scale(${1/xs})`,transformOrigin:"top left",width:`${100*xs}%`,height:`${100*xs}%`}),[xs]),Ao=-(20/xs),vi=_.useMemo(()=>{const Y=new Map;for(const w of Nn)Y.set(w.commit.visualId,w);return Y},[Nn]),Io=_.useMemo(()=>Gw(Nn,Ao),[Nn,Ao]),Es=Y=>{var R;const w=Y.commit.id,k=Y.commit.visualId;if(Ut&&Ys.has(w)||(hn==null?void 0:hn.commit.id)===w||Xt===null)return!0;if(!Xt.has(k))return!1;const A=so.get(k);return A&&((R=rs.get(A))!=null?R:1)>1&&(Hn.has(A)||!Jt.has(A)&&!kn.has(A)),!0},ri=1.5/xs,Ls=Uw/xs,bn="border-slate-400/70",wo="border-blue-500",Po=_.useMemo(()=>new Map(t.map(Y=>[Y.name,Y])),[t]),fs=(ms=ze==null?void 0:ze.hasUncommittedChanges)!=null?ms:!1;_.useMemo(()=>new Set(t.filter(Y=>Y.commitsAhead===0&&!Y.name.startsWith("*")).map(Y=>Y.name)),[t]);const Fs=_.useMemo(()=>{var w,k;const Y=new Map;for(const A of Nn){const R=(w=Y.get(A.commit.id))!=null?w:new Set;R.add(A.commit.branchName),Y.set(A.commit.id,R)}for(const A of i){const R=(k=Y.get(A.fullSha))!=null?k:new Set;A.branch&&R.add(A.branch),Y.set(A.fullSha,R)}return Y},[Nn,i,d]),on=_.useMemo(()=>new Map(Object.entries(c).map(([Y,w])=>[Y,new Set(w)])),[c]),Xs=_.useCallback(()=>{ai.current,bo()},[bo,ai]),{isMarqueeSelecting:Os,marqueeRect:io,selectedCommitShas:Ss,setSelectedCommitShas:No,mergeTargetCommitSha:Gs,setMergeTargetCommitSha:So,startMarqueeDrag:_o}=rS({scrollContainerRef:tt,renderedCameraRef:js,getTransformLayerOriginScreen:gs,renderNodes:Nn,shouldRenderNode:Es,onPointerReleaseNoMarquee:Xs}),Rn=_.useMemo(()=>new Set(Nn.map(Y=>Y.commit.id)),[Nn]),Mn=_.useMemo(()=>Ss.filter(Y=>Rn.has(Y)),[Ss,Rn]),Pn=_.useCallback((Y,w)=>{var R;if(!w)return!1;if(((R=Te[Y])!=null?R:[]).some(P=>gi(P.fullSha,w)||gi(P.sha,w)))return!0;const A=Po.get(Y);return!!(A!=null&&A.headSha&&gi(A.headSha,w))},[Te,Po]),Vn=(co=ze==null?void 0:ze.branchName)!=null?co:null,ao=(qs=ze==null?void 0:ze.headSha)!=null?qs:null,Ts=Vn==null,Cs=_.useMemo(()=>{if(!pt)return null;const Y=Nn.filter(w=>w.commit.id===pt);return Y.length===0?null:Y.length===1||!hn?Y[0]:Y.reduce((w,k)=>{const A=(w.x-hn.x)**2+(w.y-hn.y)**2;return(k.x-hn.x)**2+(k.y-hn.y)**2<A?k:w})},[pt,Nn,hn]),Ho=_.useCallback((Y,w,k)=>{for(const A of W){if(!qh(A,V))continue;if(A.branchName){if(A.branchName===Y&&gi(A.headSha,w))return A;continue}if(!gi(A.headSha,w)&&!gi(A.headSha,k))continue;if(A.parentSha&&Pn(Y,A.parentSha)||Pn(Y,A.headSha))return A;const R=Po.get(Y);if(R&&gi(R.headSha,A.headSha)||Y===d&&i.some(P=>gi(P.fullSha,A.headSha)))return A}return null},[W,V,Pn,Po,d,i]),ro=_.useCallback(Y=>{for(const w of W)if(qh(w,V)&&w.branchName===Y)return w;return null},[W,V]),hs=_.useCallback((Y,w)=>{for(const k of W)if(qh(k,V)&&(gi(k.headSha,Y)||gi(k.headSha,w)))return k;return null},[W,V]),ks=_.useCallback(Y=>{var w;return Array.from((w=Fs.get(Y))!=null?w:[])},[Fs]),Do=_.useMemo(()=>{var R,P,te,ve;const Y=new Map;for(const pe of Mn){const Ne=ks(pe);if(Ne.length===0)continue;const Ye=(R=Ne.find(dt=>dt!==d))!=null?R:Ne[0],ct=Mn.filter(dt=>dt!==pe).filter(dt=>!new Set(ks(dt)).has(Ye));Y.set(Ye,{targetSha:pe,targetBranch:Ye,sourceRefs:ct})}const w=Array.from(Y.values()),k=Gs?w.find(pe=>{var Ne;return pe.targetSha===Gs||pe.targetBranch===((Ne=ks(Gs)[0])!=null?Ne:"")}):null,A=(P=k!=null?k:w[w.length-1])!=null?P:null;return{options:w,selected:A,targetBranch:(te=A==null?void 0:A.targetBranch)!=null?te:null,sources:(ve=A==null?void 0:A.sourceRefs)!=null?ve:[]}},[Mn,ks,d,Gs]),go=_.useMemo(()=>{const Y=[...Vn===d?[{name:d,headSha:ao!=null?ao:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(w=>!w.name.startsWith("*")&&w.unpushedCommits>0&&w.remoteSyncStatus!=="on-github").map(w=>[w.name,w]);return new Map(Y)},[t,Vn,ao,d,a.length]),lo=_.useMemo(()=>{const Y=A=>{var P;const R=ks(A).filter(te=>go.has(te));return R.length===0?null:R.length===1?R[0]:Vn&&R.includes(Vn)?Vn:(P=R.find(te=>te!==d))!=null?P:R[0]},w=A=>{var R;return A===d?a.map(P=>{var te,ve;return{fullSha:P.fullSha,sha:P.sha,parentSha:(te=P.parentSha)!=null?te:null,message:P.message,author:P.author,date:P.date,kind:(ve=P.kind)!=null?ve:"commit"}}):(R=Te[A])!=null?R:[]},k=new Map;for(const A of Mn){const R=Y(A);if(!R)continue;const P=go.get(R);if(!P)continue;const te=w(R).slice(0,P.unpushedCommits),ve=te.findIndex(Ne=>Ne.fullSha===A);if(ve===-1)continue;const pe=k.get(R);(!pe||ve<pe.targetIndex)&&k.set(R,{branchName:R,targetSha:A,targetIndex:ve,commitCount:te.length-ve})}return Array.from(k.values())},[Mn,ks,go,Vn,d,a,Te]),Ro=_.useMemo(()=>Array.from(new Set(Mn.map(Y=>/^STASH:(\d+)$/.exec(Y)).filter(Y=>!!Y).map(Y=>parseInt(Y[1],10)))).sort((Y,w)=>Y-w),[Mn]),Bo=Mn.includes("WORKING_TREE"),wi=(Bo?1:0)+Ro.length,ta=[...Bo?["Uncommitted changes"]:[],...Ro.map(Y=>`Stash ${Y+1}`)],Pi=go.size,Hi=!Ts&&!!Vn&&go.has(Vn),Zo=Vn?`Push ${Vn}`:"Push current branch",Tt=lo.length===1?lo[0].commitCount>1?`Push ${lo[0].commitCount} commits on ${lo[0].branchName}`:`Push ${lo[0].targetSha.slice(0,7)} on ${lo[0].branchName}`:`Push ${lo.length} selected ranges`,Si=_.useCallback(Y=>{const w=Y.target;w!=null&&w.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||dp().startDragging()},[]);_.useEffect(()=>{const Y=po||Os;xt.current!==Y&&(xt.current=Y,we==null||we(Y))},[po,Os,we]),_.useEffect(()=>{const Y=xn?ts.length:null;Ot.current!==Y&&(Ot.current=Y,Et==null||Et(Y))},[ts.length,xn,Et]),_.useEffect(()=>{const Y=xn&&pt?(()=>{const w=ts.findIndex(k=>k.commit.id===pt);return w>=0?w:null})():null;it.current!==Y&&(it.current=Y,Qe==null||Qe(Y))},[pt,ts,xn,Qe]);const Ci=_.useMemo(()=>{var pe,Ne,Ye,ct,dt,ft;if(!xn)return null;const Y=xn,w=t.map(st=>st.name),k=w.find(st=>st.toLowerCase()===Y),A=k!=null?k:w.find(st=>st.toLowerCase().startsWith(Y)),P=A!=null?A:w.find(st=>st.toLowerCase().includes(Y));if(!P)return null;const te=(pe=t.find(st=>st.name===P))!=null?pe:null;if(te!=null&&te.headSha)return te.headSha;const ve=(Ne=Te[P])!=null?Ne:[];return ve.length>0?(ct=(Ye=ve[0])==null?void 0:Ye.fullSha)!=null?ct:null:P===d&&(ft=(dt=i[0])==null?void 0:dt.fullSha)!=null?ft:null},[xn,t,Te,d,i]);_.useEffect(()=>{var A,R,P;if(!xn){if(J.current=Lt,H.current===null)return;H.current=null,vt==null||vt(null);return}if(Lt<=0||J.current===Lt)return;J.current=Lt;let Y;const w=pt?ts.findIndex(te=>te.commit.id===pt):-1,k=ts.length>0?w<0?0:(w+qt+ts.length)%ts.length:-1;Y=(P=(R=(A=ts[k])==null?void 0:A.commit.id)!=null?R:Ci)!=null?P:null,H.current!==Y&&(H.current=Y,vt==null||vt(Y))},[ts,xn,vt,Ci,Lt,qt]),_.useLayoutEffect(()=>{if(!pt)return;const Y=`${pt}:${Lt}`;if(_e.current===Y)return;const w=tt.current,k=Cs;if(!w||!k)return;const A=gs();if(!A)return;const R=w.getBoundingClientRect(),P=js.current.zoom,te=P/ua,ve=k.x+ls/2,pe=k.y+vl+Ds/2,Ne=R.left+R.width/2,Ye=R.top+R.height/2;qo(Ne-A.x-ve*te,Ye-A.y-pe*te,P),_e.current=Y},[pt,Lt,Cs,gs,qo,js]);const Ui=(uo=(Ks=at==null?void 0:at.width)!=null?Ks:($s=tt.current)==null?void 0:$s.clientWidth)!=null?uo:0,li=(K=(G=at==null?void 0:at.height)!=null?G:(B=tt.current)==null?void 0:B.clientHeight)!=null?K:0,yo=Ui>0&&li>0?jy(Ui,li,js.current,{innerPaddingPx:kd}):null,Uo=yo!=null?My(yo,js.current.zoom):null,ci=Y=>{if(!Uo)return!0;const{fromX:w,fromY:k,toX:A,toY:R}=Y;return Xw(w,k,A,R,Uo,Y.fromFace,Y.toFace)};_.useLayoutEffect(()=>{var te;const Y=tt.current;if(!Y||Y.clientWidth<=0||Y.clientHeight<=0)return;const w=Y.clientWidth,k=Y.clientHeight;In(ve=>(ve==null?void 0:ve.width)===w&&(ve==null?void 0:ve.height)===k?ve:{width:w,height:k});const A=jy(w,k,js.current,{innerPaddingPx:kd});if(!A){$n(ve=>ve===null?ve:null);return}const R=My(A,js.current.zoom),P=qw(Io,R,vi,Ao);for(const ve of Nn){const pe=so.get(ve.commit.visualId);if(!pe||((te=rs.get(pe))!=null?te:1)<=1)continue;(Hn.has(pe)||!Jt.has(pe)&&!kn.has(pe))&&P.add(ve.commit.visualId)}$n(ve=>Ww(ve,P)?ve:P)},[Go,Lt,pt,po,Us,Hn,kn,Jt,so,rs,Nn,at,Io,vi,Ao]),_.useLayoutEffect(()=>{const Y=tt.current;if(!Y)return;const w=()=>{const A=Y.clientWidth,R=Y.clientHeight;A<=0||R<=0||In(P=>(P==null?void 0:P.width)===A&&(P==null?void 0:P.height)===R?P:{width:A,height:R})};w();const k=new ResizeObserver(w);return k.observe(Y),()=>k.disconnect()},[Un.length]);const M=Nn.filter(Y=>Es(Y)).length,U=$o.filter(Y=>ci(Y)).length,le=oo.filter(Y=>ci(Y)).length,ke=_.useCallback((Y,w)=>{if(rn.current){Y.preventDefault(),Y.stopPropagation();return}Y.stopPropagation();const k=w.commit.id;if(Y.shiftKey?(No(te=>te.includes(k)?te.filter(ve=>ve!==k):[...te,k]),So(k)):(No(te=>te.includes(k)?[]:[k]),So(te=>te===k?null:k)),!(Y.metaKey||Y.ctrlKey||Y.detail>=2)||k==="WORKING_TREE")return;const R=k.length>=40?k.slice(0,7):k;let P=null;if(w.commit.branchName?(P=Ho(w.commit.branchName,k,R),P||(P=ro(w.commit.branchName))):P=hs(k,R),P&&re){re(P.path);return}h==null||h({commitSha:k})},[hs,Ho,ro,h,re]),Ve=_.useCallback((Y,w)=>{var ve,pe,Ne,Ye,ct;if(Y.button!==0)return;const k=Y.target;if(k!=null&&k.closest('[data-selectable-text="true"]')||k!=null&&k.closest("button, a, input, textarea, select"))return;Y.stopPropagation(),Y.preventDefault(),rn.current=!1,Y.currentTarget.setPointerCapture(Y.pointerId);const A=(ve=Bt[w.commit.visualId])!=null?ve:Bt[w.commit.id];sn.current={nodeId:w.commit.visualId,startX:Y.clientX,startY:Y.clientY,baseX:(pe=A==null?void 0:A.x)!=null?pe:w.x,baseY:(Ne=A==null?void 0:A.y)!=null?Ne:w.y,moved:!1,pendingX:(Ye=A==null?void 0:A.x)!=null?Ye:w.x,pendingY:(ct=A==null?void 0:A.y)!=null?ct:w.y};const R=()=>{Xn.current=null;const dt=sn.current;dt&&fn(ft=>({...ft,[dt.nodeId]:{x:dt.pendingX,y:dt.pendingY}}))},P=dt=>{const ft=sn.current;if(!ft)return;const st=js.current.zoom/ua,lt=st>0?1/st:1,Sn=(dt.clientX-ft.startX)*lt,Cn=(dt.clientY-ft.startY)*lt;(Math.abs(Sn)>2||Math.abs(Cn)>2)&&(ft.moved=!0),ft.moved&&(rn.current=!0),ft.pendingX=ft.baseX+Sn,ft.pendingY=ft.baseY+Cn,Xn.current==null&&(Xn.current=window.requestAnimationFrame(R))},te=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",te),window.removeEventListener("pointercancel",te),Xn.current!=null&&(window.cancelAnimationFrame(Xn.current),Xn.current=null,R());try{Y.currentTarget.releasePointerCapture(Y.pointerId)}catch{}const dt=sn.current;sn.current=null,dt&&window.setTimeout(()=>{rn.current=!1},0)};window.addEventListener("pointermove",P),window.addEventListener("pointerup",te),window.addEventListener("pointercancel",te)},[Bt]),Ge=_.useCallback(async()=>{if(!he)return;await he(_t)&&(Me(!1),Ie(""))},[he,_t]),Pt=_.useCallback(async()=>{Q&&(await Q({branchNames:[],discardUncommittedChanges:Bo,stashIndices:Ro}),yt(!1),No([]),So(null))},[Q,Bo,Ro]),It=_.useCallback(async()=>{var w;const Y=Dt.trim();if(Y){if(ut==="new-root"){if(!I)return;await I(Y)}else{if(!Ee)return;const k=Mn.length===1?Mn[0]:(w=ze==null?void 0:ze.headSha)!=null?w:null;if(!k||!(k==="WORKING_TREE"||k.startsWith("STASH:")||k===(ze==null?void 0:ze.headSha)))return;await Ee(k,Y)}Rt(!1),Kt(""),nt("from-selected-node"),No([]),So(null)}},[ze==null?void 0:ze.headSha,ut,Dt,Ee,I,Mn]),Ft=!!(ze!=null&&ze.headSha),Gt=Mn.length===0&&Ft,tn=Mn.length===1&&(Mn[0]==="WORKING_TREE"||Mn[0].startsWith("STASH:"))||Gt,mn=!!I,cn=_.useMemo(()=>$?"Committing changes":D?"Pushing to remote":Pe?"Stashing changes":fe?"Staging changes":E?"Merging refs":de?"Creating branch":ae?"Updating worktrees":x?"Loading repository":null,[$,de,x,E,D,ae,fe,Pe]);return _.useEffect(()=>{if(rt){if(!tn&&!Gt&&mn){nt("new-root");return}(tn||Gt)&&nt("from-selected-node")}},[mn,Gt,rt,tn]),_.useEffect(()=>{const Y=w=>{if(!Q||Wt||Mn.length===0)return;const k=w.target;k!=null&&k.closest('input, textarea, select, button, [contenteditable="true"]')||w.key!=="Delete"&&w.key!=="Backspace"||(w.preventDefault(),yt(!0))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[Wt,Q,Mn.length]),r.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[r.jsx(tS,{isOpen:q,onClose:()=>me==null?void 0:me(),visibleBounds:Uo,renderedNodeCount:M,totalNodeCount:Nn.length,renderedMergeConnectorCount:U,totalMergeConnectorCount:$o.length,renderedConnectorCount:le,totalConnectorCount:oo.length,mapGridCullViewportInsetScreenPx:Pw,debugRows:yn.debugRows,branchDebugRows:yn.branchDebugRows,connectorDecisions:us}),Fe?r.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Si,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[r.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[r.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:r.jsx(Zw,{selectedVisibleCommitShas:Mn,commitInProgress:$,commitDisabled:ie,stageInProgress:fe,stashInProgress:Pe,stashDisabled:ne,pushInProgress:D,hasUncommittedChanges:fs,createBranchFromNodeInProgress:de,onCommitLocalChanges:he,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:Ae,onPushCurrentBranch:O,onPushAllBranches:T,onPushCommitTargets:L,onMergeRefsIntoBranch:j,selectedPushTargets:lo,selectedPushLabel:Tt,canPushCurrentBranch:Hi,pushCurrentBranchLabel:Zo,pushableRemoteBranchCount:Pi,selectedCommitTargetOption:Do,mergeInProgress:E,mergeTargetCommitSha:Gs,setMergeTargetCommitSha:So,worktrees:W,currentRepoPath:V,worktreeMenuOpen:Ce,setWorktreeMenuOpen:et,onSwitchToWorktree:re,onRemoveWorktree:ee,removeWorktreeInProgress:ae,setCommitDialogOpen:Me,setNewBranchDialogOpen:Rt})}),r.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:r.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[r.jsx(oS,{query:Fe.gridSearchQuery,onQueryChange:Fe.setGridSearchQuery,resultCount:Fe.gridSearchResultCount,resultIndex:Fe.gridSearchResultIndex,onJump:Y=>{Fe.setGridSearchJumpDirection(Y),Fe.setGridSearchJumpToken(w=>w+1)}}),r.jsx(sS,{orientation:Fe.mapGridOrientation,onOrientationChange:Fe.setMapGridOrientation})]})})]}),r.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(ue=Fe.githubAuthStatus)!=null&&ue.ghAvailable&&!Fe.githubAuthStatus.authenticated?r.jsx("button",{onClick:Fe.onGitHubAuthSetup,disabled:Fe.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Fe.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Fe.githubAuthStatus&&!Fe.githubAuthStatus.ghAvailable?r.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[r.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),r.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Fe.githubAuthMessage?r.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[r.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),r.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Fe.githubAuthMessage,children:Fe.githubAuthMessage})]}):null,Fe.commitSwitchFeedback?r.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Fe.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Fe.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Fe.commitSwitchFeedback.message,children:[r.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Fe.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),r.jsx("p",{className:"truncate text-[11px]",children:Fe.commitSwitchFeedback.message})]}):null]})]}):null,cn?r.jsx("div",{className:"pointer-events-none absolute left-1/2 top-14 z-[75] -translate-x-1/2",children:r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm",children:[r.jsx(fp,{className:"h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground","aria-hidden":"true"}),r.jsxs("span",{children:[cn,"..."]})]})}):null,Un.length===0?r.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:r.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):r.jsx(eS,{scrollContainerRef:tt,mapPadHostRef:ot,transformLayerRef:gt,isMarqueeSelecting:Os,contentWidth:Qo,contentHeight:Ii,isCameraMoving:po,onWheel:Bs,onMouseDown:_o,onNodePointerDown:Ve,labelTopPx:Ao,inverseZoomStyle:Ms,displayZoom:xs,selectedVisibleCommitShas:Mn,normalizedSearchQuery:xn,matchingNodeIds:Ys,focusedNode:Cs,renderNodes:Nn,shouldRenderNode:Es,manuallyOpenedClumps:Hn,manuallyClosedClumps:kn,defaultCollapsedClumps:Jt,leadByClusterKey:Vs,clusterKeyByCommitId:so,clusterCounts:rs,commitIdsWithRenderedAncestry:Dn,nodeWarnings:vo,connectorParentShas:Ws,branchStartShas:ds,branchOffNodeShas:Gn,crossBranchOutgoingShas:xi,branchBaseCommitByName:ys,branchStartAccentClass:wo,connectorParentAccentClass:bn,commitCornerRadiusPx:Ls,lineStrokeWidth:ri,pointFormatter:bi,connectors:oo,mergeConnectors:$o,cullConnectorPath:ci,flushCameraReactTick:bo,setManuallyOpenedClumps:wn,setManuallyClosedClumps:as,onCommitCardClick:ke,unpushedCommitShasSetByBranch:on,checkedOutHeadSha:ao,orientation:be}),io&&Os?r.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:io.left,top:io.top,width:io.width,height:io.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,r.jsx(nS,{commitDialogOpen:Je,commitMessageDraft:_t,onCommitMessageDraftChange:Ie,onCommitDialogClose:()=>Me(!1),onCommitConfirm:()=>void Ge(),commitInProgress:$,deleteConfirmOpen:Wt,deleteSelectionItems:ta,onDeleteConfirmClose:()=>yt(!1),onDeleteConfirm:()=>void Pt(),deleteInProgress:X,deletableSelectionCount:wi,newBranchDialogOpen:rt,newBranchName:Dt,newBranchCreateMode:ut,onNewBranchNameChange:Kt,onNewBranchCreateModeChange:nt,onNewBranchDialogClose:()=>Rt(!1),onNewBranchConfirm:()=>void It(),selectedCommitCanCreateBranch:tn,currentCheckedOutCommitCanCreateBranch:Gt,createBranchFromNodeInProgress:de})]})}function lS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:C=0,gridSearchJumpDirection:j=1,gridFocusSha:E=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,view:D="time",isLoading:Q=!1,scrollRequest:X,focusedErrorBranch:W,checkedOutRef:V=null,mapTopInsetPx:ee=0,onMergeRefsIntoBranch:ae,mergeInProgress:re=!1,onPushAllBranches:Ae,onPushCurrentBranch:Pe,onPushCommitTargets:ne,pushInProgress:he=!1,onDeleteSelection:$,worktrees:ie=[],currentRepoPath:F,onRemoveWorktree:fe,removeWorktreeInProgress:Ee=!1,onSwitchToWorktree:I,onStashLocalChanges:de,stashInProgress:q=!1,stashDisabled:me=!1,onCommitLocalChanges:be,commitInProgress:Te=!1,commitDisabled:We=!1,onStageAllChanges:Ke,stageInProgress:Ze=!1,onCreateBranchFromNode:Lt,onCreateRootBranch:qt,createBranchFromNodeInProgress:pt=!1,onMoveNodeBackToBranch:ze,isDebugOpen:Et=!1,onDebugClose:Qe,orientation:vt="horizontal",onInteractionChange:we,manuallyOpenedClumps:oe,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,gridHudProps:tt}){const ot=new Set(u.map(H=>H.branchName)),gt=14*864e5,xt=Date.now();function Ot(H){return ot.has(H.name)||xt-new Date(H.lastCommitDate).getTime()<=gt}const it=t.filter(H=>H.status==="stale"&&Ot(H)).sort((H,J)=>new Date(J.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return r.jsx("div",{className:"h-full flex flex-col",children:D==="time"?r.jsx("div",{className:"flex-1 min-h-0",children:r.jsx(Ay,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridSearchJumpDirection:j,gridFocusSha:E,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,staleBranches:it,isLoading:Q,scrollRequest:X,focusedErrorBranch:W,checkedOutRef:V,mapTopInsetPx:ee,onMergeRefsIntoBranch:ae,mergeInProgress:re,onPushAllBranches:Ae,onPushCurrentBranch:Pe,onPushCommitTargets:ne,pushInProgress:he,onDeleteSelection:$,worktrees:ie,currentRepoPath:F,onRemoveWorktree:fe,removeWorktreeInProgress:Ee,onSwitchToWorktree:I,onStashLocalChanges:de,stashInProgress:q,stashDisabled:me,onCommitLocalChanges:be,commitInProgress:Te,commitDisabled:We,onStageAllChanges:Ke,stageInProgress:Ze,onCreateBranchFromNode:Lt,onCreateRootBranch:qt,createBranchFromNodeInProgress:pt,onMoveNodeBackToBranch:ze,isDebugOpen:Et,onDebugClose:Qe,orientation:vt,onInteractionChange:we,manuallyOpenedClumps:oe,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,gridHudProps:tt})}):D==="grid"?r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(Ay,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridSearchJumpDirection:j,gridFocusSha:E,checkedOutRef:V,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,onInteractionChange:we,manuallyOpenedClumps:oe,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,isDebugOpen:Et,onDebugClose:Qe,orientation:vt,gridHudProps:tt})}):null})}const Ji=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Ny(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function Kh(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Ji(p.fullSha,i)||Ji(p.sha,i)?Ny(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Ji(g.fullSha,i)||Ji(g.sha,i))?Ny(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function cS(t,n,i,a){if(!t)return null;const c=d=>Ji(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function uS(t,n,i,a,c,u,d=!1){var Ae,Pe,ne,he,$;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=(Pe=(Ae=i[0])==null?void 0:Ae.fullSha)!=null?Pe:null,x=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ie=>({name:ie.name,headSha:ie.headSha,isDefault:!1}))],b=h?x.filter(ie=>Ji(ie.headSha,h)):[],S=cS(h,i,a,u),C=S?x.find(ie=>ie.name===S):void 0,j=(he=(ne=b.find(ie=>ie.isDefault))!=null?ne:b[0])!=null?he:C,E=!!(j&&h&&Ji(j.headSha,h)),T=j&&!j.isDefault?n.find(ie=>ie.name===j.name):void 0,O=(()=>{var F;if(!h)return null;const ie=i.find(fe=>Ji(fe.fullSha,h)||Ji(fe.sha,h));if(ie!=null&&ie.date)return ie.date;if(T&&!d){const fe=((F=a[T.name])!=null?F:[]).find(Ee=>Ji(Ee.fullSha,h)||Ji(Ee.sha,h));if(fe!=null&&fe.date)return fe.date}return null})(),L=O?new Date(O).getTime():Number.NaN,D=Date.now(),Q=Number.isFinite(L)?Math.max(D,L+1+t.index):D+t.index,X=new Date(Q).toISOString(),W=t.message.trim(),V={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:W||y,author:"You",date:X,kind:"stash"};if(E&&T){const ie=Kh(i,a,h,p,T.name,u);return{branches:n.map(fe=>fe.name===T.name?{...fe,commitsAhead:fe.commitsAhead+1,unpushedCommits:fe.unpushedCommits+1,lastCommitDate:X,headSha:p}:fe),directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[T.name]:[V,...a[T.name]||[]]},branchUniqueAheadCounts:{...c,[T.name]:Math.max(0,($=Object.prototype.hasOwnProperty.call(c,T.name)?c[T.name]:T.commitsAhead)!=null?$:0)+1}}}if(E&&(j!=null&&j.isDefault)&&!d){const ie=Kh(i,a,h,p,u,u);return{branches:n,directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[u]:[V,...a[u]||[]]},branchUniqueAheadCounts:c}}const ee=`*Stash:${t.index}`,ae={name:ee,commitsAhead:1,commitsBehind:0,lastCommitDate:X,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(j==null?void 0:j.name)||u},re=Kh(i,a,h,p,ee,u);return{branches:[ae,...n],directCommits:re.directCommits,branchCommitPreviews:{...re.branchCommitPreviews,[ee]:[V]},branchUniqueAheadCounts:{...c,[ee]:1}}}function Jx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=uS(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function dS({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:C="horizontal"}){var W,V;const j=Jx(y,t,i,u,h,c,(W=p==null?void 0:p.hasUncommittedChanges)!=null?W:!1);let E=j.branches,T=j.directCommits,O=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ee=p.headSha||p.parentSha||null,ae=(F,fe)=>!F||!fe?!1:F===fe||F.startsWith(fe)||fe.startsWith(F),re=p.branchName?E.find(F=>F.name===p.branchName):void 0,Ae=(()=>{var fe;if(!ee)return null;const F=T.find(Ee=>ae(Ee.fullSha,ee)||ae(Ee.sha,ee));if(F!=null&&F.date)return F.date;if(re){const Ee=((fe=O[re.name])!=null?fe:[]).find(I=>ae(I.fullSha,ee)||ae(I.sha,ee));if(Ee!=null&&Ee.date)return Ee.date}return null})(),Pe=Ae?new Date(Ae).getTime():Number.NaN,ne=Date.now(),he=Number.isFinite(Pe)?Math.max(ne,Pe+1):ne,$=new Date(he).toISOString(),ie={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ee,message:"Local uncommitted changes",author:"You",date:$,kind:"uncommitted"};re?(E=E.map(F=>F.name===re.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:$,headSha:"WORKING_TREE"}:F),O={...O,[re.name]:[ie,...O[re.name]||[]]},L={...L,[re.name]:Math.max(0,(V=Object.prototype.hasOwnProperty.call(L,re.name)?L[re.name]:re.commitsAhead)!=null?V:0)+1}):O={...O,[c]:[ie,...O[c]||[]]}}const D={...d};D[c]=null;const Q=hp(E,c,O,D),X=Mc({lanes:Q,branches:E,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:O,branchParentByName:D,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:C});return{enrichedBranches:E,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:T,sharedGridLayoutModel:X}}const Dy="git-visualizer:expanded-projects",Ry="git-visualizer:expanded-branches";function fS(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function hS(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function mS(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O}){var I,de;if(g.has(t)||!a.get(t))return null;const D=(I=u.get(t))!=null?I:[],Q=D.length>0,X=_.useMemo(()=>{var q;return[...(q=c[t])!=null?q:[]]},[c,t]),W=x&&X.length>0,V=x,ee=Q||W,ae=h.has(t),re=V?X:[],Ae=ae&&re.length>0,Pe=y===t,ne=new Set(g);ne.add(t);const he="top-[-0.2rem] h-4.5 w-[10px]",$="rounded-bl-[7px]",ie="left-[0.65rem]",F=new Map,fe=[];for(const q of D){const me=d.get(q);if(me){const be=re.findIndex(Te=>gi(Te.fullSha,me)||gi(Te.sha,me));if(be>=0){const Te=(de=F.get(be))!=null?de:[];Te.push(q),F.set(be,Te);continue}}fe.push(q)}const Ee=_.useMemo(()=>{if(!x||re.length===0)return[];const q=[];let me=[],be=null;const Te=()=>{if(me.length===0)return;const We=me[me.length-1],Ke=`sidebar-single-${t}-${We.fullSha}`;q.push({key:be!=null?be:Ke,commits:me,count:me.length,lead:We}),me=[],be=null};return re.forEach(We=>{var Ze;const Ke=(Ze=C.get(`${t}:${We.fullSha}`))!=null?Ze:null;if(me.length===0){me=[We],be=Ke;return}if(Ke===be){me.push(We);return}Te(),me=[We],be=Ke}),Te(),q},[t,x,re,C]);return r.jsxs("li",{className:An("relative",n>0?"pl-4":"pl-0",n===0&&!i?ae?"mb-5":"mb-1":""),children:[n>0?r.jsx("span",{"aria-hidden":"true",className:An("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",$,ie,he)}):null,!i&&n>0?r.jsx("span",{"aria-hidden":"true",className:An("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ie)}):null,r.jsx("div",{className:"flex items-center gap-1",children:r.jsxs("div",{className:An("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Pe?"text-foreground":"text-muted-foreground hover:text-foreground"),role:ee?"button":void 0,tabIndex:ee?0:void 0,onClick:()=>{ee?p(t):O==null||O(t)},onKeyDown:q=>{ee&&(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),p(t))},children:[ee?r.jsx("button",{type:"button","aria-label":`${ae?"Collapse":"Expand"} ${t}`,onPointerDown:q=>{q.preventDefault()},onClick:q=>{q.preventDefault(),q.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:r.jsx(rw,{"aria-hidden":"true",className:An("h-3.5 w-3.5 shrink-0 transition-transform",ae?"rotate-90":"")})}):null,r.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),Ae?r.jsx("ul",{className:"relative space-y-1 pl-4",children:Ee.map(q=>{const me=q.count>1&&!j(q.key);return(me?[q.lead]:q.commits).map(Te=>{var Ze;const We=re.findIndex(Lt=>Lt.fullSha===Te.fullSha),Ke=b(Te.fullSha,S!=null?S:t);return r.jsxs("li",{children:[r.jsxs("div",{className:"flex items-start gap-1",children:[r.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(Te.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Te.message,children:[r.jsx("span",{className:"block truncate",children:Te.message}),Ke.length>0?r.jsx("span",{className:"mt-0 block space-y-0.5",children:Ke.map(Lt=>r.jsxs("span",{className:"block truncate",children:[r.jsx("span",{children:"Merged to "}),r.jsx("span",{className:"font-medium text-muted-foreground",children:Lt})]},`${Te.fullSha}:${Lt}`))}):null]}),q.count>1&&Te.fullSha===q.lead.fullSha?r.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${q.lead.fullSha}`,onClick:()=>E(q.key,`${t}:${q.lead.fullSha}`),className:An("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",me?"":"min-w-[2ch] text-center"),children:me?`+${Math.max(1,q.count-1)}`:"−"}):null]}),(Ze=F.get(We))!=null&&Ze.length?r.jsx("ul",{className:"relative mb-1.75 space-y-0",children:F.get(We).map((Lt,qt,pt)=>r.jsx(Nm,{branchName:Lt,depth:n+1,isLast:qt===pt.length-1&&fe.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ne,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Lt,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O},Lt))}):null]},`${t}:${Te.fullSha}`)})})}):null,Q&&ae&&fe.length>0?r.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:fe.map((q,me)=>r.jsx(Nm,{branchName:q,depth:n+1,isLast:me===fe.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ne,showCommits:x,getMergeTargetLabels:b,sourceBranchName:q,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O},q))}):null]})}function pS({open:t}){return r.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function _S({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:g={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:S,setManuallyClosedClumps:C,gridLayoutModel:j,onSelectCommit:E,onSelectBranch:T,showCommits:O,onToggleShowCommits:L,className:D,style:Q,collapsed:X=!1}){var Et;const W=_.useRef(null),V=_.useRef(null),[ee,ae]=_.useState(()=>{if(typeof window>"u")return new Set;try{const Qe=window.localStorage.getItem(Dy);if(Qe){const vt=JSON.parse(Qe);if(Array.isArray(vt)){const we=new Set;for(const oe of vt)typeof oe=="string"&&we.add(oe);return we}}}catch{}return new Set(t.map(Qe=>Qe.path))}),[re,Ae]=_.useState({}),[Pe,ne]=_.useState(()=>new Set),[he,$]=_.useState(()=>new Set),[ie,F]=_.useState(null),fe=x!=null?x:Pe,Ee=b!=null?b:he,I=S!=null?S:ne,de=C!=null?C:$,[q,me]=_.useState(null),[be,Te]=_.useState(null),We=Qe=>{try{window.localStorage.setItem(Dy,JSON.stringify(Array.from(Qe)))}catch{}},Ke=Qe=>{try{const vt=Object.fromEntries(Object.entries(Qe).map(([we,oe])=>[we,Array.from(oe)]));window.localStorage.setItem(Ry,JSON.stringify(vt))}catch{}};_.useEffect(()=>{We(ee)},[ee]),_.useEffect(()=>{try{const Qe=window.localStorage.getItem(Ry);if(!Qe)return;const vt=JSON.parse(Qe);if(!vt||typeof vt!="object")return;const we={};for(const[oe,Re]of Object.entries(vt)){if(!Array.isArray(Re))continue;const Xe=new Set;for(const He of Re)typeof He=="string"&&Xe.add(He);we[oe]=Xe}Ae(we)}catch{}},[]),_.useEffect(()=>{Ke(re)},[re]);const Ze=(Et=j==null?void 0:j.defaultCollapsedClumps)!=null?Et:new Set,Lt=Qe=>fe.has(Qe)||!Ze.has(Qe)&&!Ee.has(Qe),qt=(Qe,vt)=>{const we=W.current,oe=V.current;if(we&&oe){const Re=`[data-clump-toggle-id="${vt}"]`,Xe=we.querySelector(Re);if(Xe){const He=Xe.getBoundingClientRect().top-oe.getBoundingClientRect().top;Te({id:vt,topWithinScrollBody:He})}else Te(null)}else Te(null);me(vt),I(Re=>{const Xe=new Set(Re),He=Lt(Qe);return de(Fe=>{const tt=new Set(Fe);return He?(Xe.delete(Qe),tt.add(Qe)):(tt.delete(Qe),Xe.add(Qe)),tt}),Xe})};_.useLayoutEffect(()=>{if(!q)return;const Qe=W.current,vt=V.current;if(!Qe||!vt)return;const we=`[data-clump-toggle-id="${q}"]`,oe=Qe.querySelector(we);if(oe){if((be==null?void 0:be.id)===q){const Xe=oe.getBoundingClientRect().top-vt.getBoundingClientRect().top-be.topWithinScrollBody;Number.isFinite(Xe)&&Xe!==0&&(vt.scrollTop+=Xe)}oe.focus({preventScroll:!0}),me(null),Te(null)}},[fe,Ee,q,be]);const pt=(Qe,vt)=>{Ae(we=>{var He;const oe=(He=we[Qe])!=null?He:new Set,Re=new Set(oe);Re.has(vt)?Re.delete(vt):Re.add(vt);const Xe={...we,[Qe]:Re};return Ke(Xe),Xe})};_.useEffect(()=>{if(ie==null)return;const Qe=()=>F(null);return window.addEventListener("pointerdown",Qe),()=>window.removeEventListener("pointerdown",Qe)},[ie]);const ze=_.useMemo(()=>{var vt,we,oe,Re,Xe,He,Fe,tt,ot,gt,xt,Ot,it,H;const Qe=new Map;for(const J of t){const _e=dS({branches:J.branches,mergeNodes:J.mergeNodes,directCommits:J.directCommits,unpushedDirectCommits:J.unpushedDirectCommits,defaultBranch:J.defaultBranch,branchCommitPreviews:J.branchCommitPreviews,branchUniqueAheadCounts:J.branchUniqueAheadCounts,checkedOutRef:J.checkedOutRef,stashes:J.stashes,manuallyOpenedClumps:(vt=y[J.path])!=null?vt:new Set,manuallyClosedClumps:(we=g[J.path])!=null?we:new Set}),Ce=_e.enrichedBranches.some(nt=>nt.name===J.defaultBranch)?_e.enrichedBranches:[{name:J.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},..._e.enrichedBranches],et=new Map(_e.sharedGridLayoutModel.nodes.map(nt=>[nt.commit.visualId,nt.row])),Je={};for(const nt of _e.sharedGridLayoutModel.allCommits){const jt=(oe=Je[nt.branchName])!=null?oe:[];jt.push({fullSha:nt.id,sha:nt.id.slice(0,7),parentSha:(Re=nt.parentSha)!=null?Re:null,message:nt.message,author:nt.author,date:nt.date,kind:(Xe=nt.kind)!=null?Xe:"commit"}),Je[nt.branchName]=jt}for(const nt of Object.keys(Je))Je[nt]=Je[nt].sort((jt,mt)=>{var rn,sn;const At=new Date(jt.date).getTime(),ht=new Date(mt.date).getTime();if(At!==ht)return At-ht;const Bt=(rn=et.get(`${nt}:${jt.fullSha}`))!=null?rn:Number.MAX_SAFE_INTEGER,fn=(sn=et.get(`${nt}:${mt.fullSha}`))!=null?sn:Number.MAX_SAFE_INTEGER;return Bt!==fn?Bt-fn:jt.fullSha.localeCompare(mt.fullSha)});const Me=(He=_e.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?He:new Map,_t=(nt,jt)=>{const mt=Me.get(jt);if(!mt)return[];for(const[At,ht]of mt.entries())if(gi(nt,At))return Array.from(ht).sort();return[]},Ie=fS(Ce,J.defaultBranch),Wt=hS(Ce,J.defaultBranch,Ie),yt=new Map(Ce.map(nt=>[nt.name,nt])),rt=new Map;for(const nt of Ce){const jt=(tt=(Fe=_e.sharedGridLayoutModel.firstBranchCommitByName.get(nt.name))==null?void 0:Fe.parentSha)!=null?tt:null,mt=jt!=null?jt:null;rt.set(nt.name,mt)}const Rt=(ot=_e.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ot:new Set,Dt=(gt=y[J.path])!=null?gt:new Set,Kt=(xt=g[J.path])!=null?xt:new Set,ut=nt=>Dt.has(nt)||!Rt.has(nt)&&!Kt.has(nt);Qe.set(J.path,{rootBranchNames:Wt,branchByName:yt,branchCommitPreviewsFromLayout:Je,childNamesByParent:Ie,branchAnchorShaByName:rt,checkedOutBranchName:(it=(Ot=J.checkedOutRef)==null?void 0:Ot.branchName)!=null?it:null,clusterKeyByCommitId:(H=_e.sharedGridLayoutModel.clusterKeyByCommitId)!=null?H:new Map,getMergeTargetLabels:_t,isGridClusterOpen:ut})}return Qe},[n,g,y,t]);return r.jsxs("aside",{ref:W,"aria-label":"Dense branch sidebar",className:An("pointer-events-auto relative h-full select-none overflow-hidden",D),style:Q,children:[r.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:r.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[r.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:r.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4.5 w-4.5 shrink-0",children:[r.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),r.jsx("button",{type:"button",onClick:L,"aria-hidden":"true",tabIndex:-1,className:"hidden",children:O?"Hide Commits":"Show Commits"})]})}),r.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&r.jsx("div",{className:"px-2.5 pb-2",children:r.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),r.jsx("div",{ref:V,className:An("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",X?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Qe=>{var He,Fe;const vt=Qe.path===n,we=ee.has(Qe.path),oe=(He=Qe.treeLoaded)!=null?He:Qe.branches.length>0,Re=ze.get(Qe.path),Xe=(Fe=re[Qe.path])!=null?Fe:Re?mS(Re.rootBranchNames,Re.childNamesByParent,p,Qe.defaultBranch):new Set;return r.jsx("div",{className:An("relative z-0",we&&Re?"mb-5":"mb-1"),children:r.jsxs("div",{className:"relative z-0 px-1",children:[r.jsxs("div",{className:An("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",vt?"text-foreground":"text-muted-foreground"),children:[r.jsx("button",{type:"button",onClick:()=>{ae(tt=>{const ot=new Set(tt);return ot.has(Qe.path)?ot.delete(Qe.path):ot.add(Qe.path),We(ot),ot})},"aria-expanded":we,"aria-label":`${we?"Collapse":"Expand"} ${Qe.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:r.jsx(pS,{open:we})}),r.jsx("button",{type:"button",onClick:()=>{i(Qe.path)},className:An("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors hover:text-foreground","font-normal",vt?"text-primary":"text-muted-foreground"),children:Qe.name}),r.jsxs("div",{className:"relative shrink-0",children:[r.jsx("button",{type:"button","aria-label":`Project actions for ${Qe.name}`,"aria-expanded":ie===Qe.path,onClick:tt=>{tt.stopPropagation(),F(ot=>ot===Qe.path?null:Qe.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-muted-foreground",children:r.jsx(dw,{className:"h-4 w-4 shrink-0"})}),ie===Qe.path?r.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:tt=>tt.stopPropagation(),children:[r.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),u(Qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),r.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),c(Qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),we?oe&&Re?r.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Re.rootBranchNames.map((tt,ot)=>r.jsx(Nm,{branchName:tt,depth:0,isLast:ot===Re.rootBranchNames.length-1,branchByName:Re.branchByName,branchCommitPreviews:Re.branchCommitPreviewsFromLayout,childNamesByParent:Re.childNamesByParent,branchAnchorShaByName:Re.branchAnchorShaByName,expandedBranchNames:Xe,onToggleBranch:gt=>pt(Qe.path,gt),checkedOutBranchName:Re.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:Re.getMergeTargetLabels,sourceBranchName:tt,clusterKeyByCommitId:Re.clusterKeyByCommitId,isGridClusterOpen:Re.isGridClusterOpen,onToggleGridCluster:qt,onSelectCommit:async gt=>{vt||await i(Qe.path),E==null||E(gt)},onSelectBranch:async gt=>{vt||await i(Qe.path),T==null||T(gt)}},`${Qe.path}:${tt}`))}):r.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Qe.path)})})]})]})}const gS="git-visualizer",Qh="git-visualizer:projects",By=12,Ly=1400,yS=180,Oy="git-visualizer:sidebar-width",zy="git-visualizer:sidebar-collapsed",$y="git-visualizer:grid-clumps",Iy=432,Py=280,Hy=640;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function xS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function bS(t){return md(t)===gS}function Uy(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function vS(){var co,qs,$s,Ks,uo;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,S]=_.useState([]),[C,j]=_.useState([]),[E,T]=_.useState([]),[O,L]=_.useState({}),[D,Q]=_.useState([]),[X,W]=_.useState("main"),[V,ee]=_.useState(null),[ae,re]=_.useState([]),[Ae,Pe]=_.useState(!1),[ne,he]=_.useState(""),[$,ie]=_.useState(0),[F,fe]=_.useState(1),[Ee,I]=_.useState({}),[de,q]=_.useState({}),[me,be]=_.useState(null),[Te,We]=_.useState(null),[Ke,Ze]=_.useState(null),[Lt,qt]=_.useState(!1),[pt,ze]=_.useState(!1),[Et,Qe]=_.useState(!1),[vt,we]=_.useState(null),[oe,Re]=_.useState(!1),[Xe,He]=_.useState(!1),[Fe,tt]=_.useState("active"),[ot,gt]=_.useState(null),[xt,Ot]=_.useState(null),[it,H]=_.useState(!1),[J,_e]=_.useState(null),[Ce,et]=_.useState(!1),[Je,Me]=_.useState(null),[_t,Ie]=_.useState(null),[Wt,yt]=_.useState(!1),[rt,Rt]=_.useState(!1),[Dt,Kt]=_.useState(!1),[ut,nt]=_.useState(!1),[jt,mt]=_.useState({}),[At,ht]=_.useState({}),[Bt,fn]=_.useState({}),[rn,sn]=_.useState({}),[Xn,Hn]=_.useState({}),[kn,wn]=_.useState([]),[as,Xt]=_.useState(!1),[$n,at]=_.useState(!1),[In,po]=_.useState(!1),[Go,Us]=_.useState(!1),[js,ai]=_.useState(!1),[gs,bo]=_.useState("horizontal"),[qo,Bs]=_.useState(!1),[jn,Ko]=_.useState(Iy),[ws,yn]=_.useState(!1),[Un,so]=_.useState({dragging:!1,lastEvent:"idle"}),Vs=_.useRef(null),rs=_.useRef(0),ts=_.useRef(0),Ys=_.useRef({}),xn=_.useRef(null),hn=_.useRef({}),Jt=_.useRef({}),Nn=_.useRef(null),yi=_.useRef(Iy),Qo=_.useRef(null),Ii=pt||Et,oo=pt?"Opening repository":Et?"Switching worktree":p?"Refreshing branch tree":null,$o=_.useRef(null),us=bS(t)||!0,vo=_.useRef(!1),Dn=_.useRef(!1),Ws=_.useRef(new Set),ds=_.useRef([]),Gn=_.useRef([]),xi=_.useRef(null),ys=t!=null?t:"__no-repo__",bi=(B,G)=>{try{const K={opened:Object.fromEntries(Object.entries(B).map(([ue,Y])=>[ue,Array.from(Y)])),closed:Object.fromEntries(Object.entries(G).map(([ue,Y])=>[ue,Array.from(Y)]))};window.localStorage.setItem($y,JSON.stringify(K))}catch{}};_.useEffect(()=>{var B,G;try{const K=window.localStorage.getItem($y);if(!K)return;const ue=JSON.parse(K);if(!ue||typeof ue!="object")return;const Y={},w={},k=ue;for(const[A,R]of Object.entries((B=k.opened)!=null?B:{}))Array.isArray(R)&&(Y[A]=new Set(R.filter(P=>typeof P=="string")));for(const[A,R]of Object.entries((G=k.closed)!=null?G:{}))Array.isArray(R)&&(w[A]=new Set(R.filter(P=>typeof P=="string")));I(Y),q(w)}catch{}},[]),_.useEffect(()=>{bi(Ee,de)},[de,Ee]);const Ut=_.useMemo(()=>{var B;return(B=Ee[ys])!=null?B:new Set},[ys,Ee]),xs=_.useMemo(()=>{var B;return(B=de[ys])!=null?B:new Set},[ys,de]),Ms=_.useCallback(B=>{I(G=>{var w;const K=(w=G[ys])!=null?w:new Set,ue=typeof B=="function"?B(K):B,Y={...G,[ys]:new Set(ue)};return bi(Y,de),Y})},[ys,de]),Ao=_.useCallback(B=>{q(G=>{var w;const K=(w=G[ys])!=null?w:new Set,ue=typeof B=="function"?B(K):B,Y={...G,[ys]:new Set(ue)};return bi(Ee,Y),Y})},[ys,Ee]),vi=_.useMemo(()=>c.map(B=>{var G,K,ue,Y,w,k,A,R,P,te,ve,pe,Ne,Ye,ct,dt,ft,st,lt,Sn,Cn,Bn,an,zt,wt,Nt,Ln,pn;return{...B,...(G=d[B.path])!=null?G:{},branches:(ue=(K=d[B.path])==null?void 0:K.branches)!=null?ue:[],mergeNodes:(w=(Y=d[B.path])==null?void 0:Y.mergeNodes)!=null?w:[],directCommits:(A=(k=d[B.path])==null?void 0:k.directCommits)!=null?A:[],unpushedDirectCommits:(P=(R=d[B.path])==null?void 0:R.unpushedDirectCommits)!=null?P:[],unpushedCommitShasByBranch:(ve=(te=d[B.path])==null?void 0:te.unpushedCommitShasByBranch)!=null?ve:{},checkedOutRef:(Ne=(pe=d[B.path])==null?void 0:pe.checkedOutRef)!=null?Ne:null,worktrees:(ct=(Ye=d[B.path])==null?void 0:Ye.worktrees)!=null?ct:[],stashes:(ft=(dt=d[B.path])==null?void 0:dt.stashes)!=null?ft:[],branchCommitPreviews:(lt=(st=d[B.path])==null?void 0:st.branchCommitPreviews)!=null?lt:{},laneByBranch:(Cn=(Sn=d[B.path])==null?void 0:Sn.laneByBranch)!=null?Cn:{},branchUniqueAheadCounts:(an=(Bn=d[B.path])==null?void 0:Bn.branchUniqueAheadCounts)!=null?an:{},defaultBranch:(Nt=(wt=(zt=d[B.path])==null?void 0:zt.defaultBranch)!=null?wt:B.branchName)!=null?Nt:"main",treeLoaded:(pn=(Ln=d[B.path])==null?void 0:Ln.loaded)!=null?pn:!1}}),[c,d]),Io=_.useMemo(()=>({githubAuthStatus:J,githubAuthLoading:Ce,onGitHubAuthSetup:Ho,gridSearchQuery:ne,setGridSearchQuery:he,gridSearchResultCount:me,gridSearchResultIndex:Te,setGridSearchJumpDirection:fe,setGridSearchJumpToken:ie,mapGridOrientation:gs,setMapGridOrientation:bo,setIsGridDebugOpen:Bs,githubAuthMessage:Je,commitSwitchFeedback:_t,isCommitSwitchFeedbackVisible:Wt}),[_t,Ce,Je,J,ne,me,Te,Ho,Wt,gs,he,fe,ie,Bs,bo]);function Es(B,G){const K=Uy(G);return Ys.current[B]===K?!1:(Ys.current={...Ys.current,[B]:K},h(Y=>Y[B]===G?Y:{...Y,[B]:G}),!0)}function ri(B){var G;return[B.repoPath,B.defaultBranch,B.headSha,(G=B.upstreamSha)!=null?G:"",B.hasUncommittedChanges?"1":"0",B.branchCount,B.worktreeCount,B.stashCount].join("|")}function Ls(B){var G;return[B.repoPath,B.headSha,(G=B.upstreamSha)!=null?G:"",B.hasUncommittedChanges?"1":"0"].join("|")}function bn(B,G){var K,ue,Y,w,k,A;return{repoPath:B,headSha:(ue=(K=G.checkedOutRef)==null?void 0:K.headSha)!=null?ue:"",upstreamSha:(w=(Y=G.checkedOutRef)==null?void 0:Y.parentSha)!=null?w:null,hasUncommittedChanges:(A=(k=G.checkedOutRef)==null?void 0:k.hasUncommittedChanges)!=null?A:!1}}function wo(B,G,K){var ue,Y,w,k,A,R;return{repoPath:B,defaultBranch:G,headSha:(Y=(ue=K.checkedOutRef)==null?void 0:ue.headSha)!=null?Y:"",upstreamSha:(k=(w=K.checkedOutRef)==null?void 0:w.parentSha)!=null?k:null,hasUncommittedChanges:(R=(A=K.checkedOutRef)==null?void 0:A.hasUncommittedChanges)!=null?R:!1,branchCount:K.branches.length,worktreeCount:K.worktrees.length,stashCount:K.stashes.length}}_.useEffect(()=>{try{const B=localStorage.getItem(Qh);if(!B)return;const G=JSON.parse(B);if(!Array.isArray(G))return;const K=G.filter(ue=>typeof ue=="object"&&ue!==null&&typeof ue.path=="string"&&typeof ue.name=="string"&&typeof ue.lastOpenedAt=="number");u(K.slice(0,By))}catch{u([])}},[]),_.useEffect(()=>{Dn.current||t||c.length!==0&&(Dn.current=!0,Ts(c[0].path))},[c,t]);const Po=_.useMemo(()=>b.reduce((B,G)=>(B[G.targetCommitSha]=G.targetBranch,B),{}),[b]);_.useEffect(()=>{t&&h(B=>{var G,K;return{...B,[t]:{path:t,name:i||md(t),branches:g,mergeNodes:b,directCommits:C,unpushedDirectCommits:E,mergeTargetBranchByCommitSha:b.reduce((ue,Y)=>(ue[Y.targetCommitSha]=Y.targetBranch,ue),{}),unpushedCommitShasByBranch:O,checkedOutRef:V,worktrees:ae,stashes:kn,branchCommitPreviews:At,branchParentByName:Bt,laneByBranch:rn,branchUniqueAheadCounts:Xn,defaultBranch:X,loaded:!0,cacheSchemaVersion:(K=(G=B[t])==null?void 0:G.cacheSchemaVersion)!=null?K:1,updatedAtMs:Date.now()}}})},[t,i,g,b,C,E,Po,O,V,ae,kn,At,Bt,rn,Xn,X]);async function fs(B,G=!1){var ue;const K=er(B);if(K&&!Ws.current.has(K)&&!(!G&&((ue=d[K])!=null&&ue.loaded))){Ws.current.add(K),K===t&&y(!0);try{const Y=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:G});Es(K,Y)}finally{Ws.current.delete(K),K===t&&Ws.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(B=>{fs(B.path),je("watch_repo",{repoPath:B.path}).catch(console.error)})},[c]),_.useEffect(()=>{let B=!1,G=null;return yc("git-activity",K=>{if(B)return;const ue=er(K.payload.repoPath);!ue||ue===t||fs(ue,!0)}).then(K=>{B?K():G=K}).catch(console.error),()=>{B=!0,G&&G()}},[t]);function Fs(B){u(G=>{const K=er(B.path);if(!K)return G;const ue={...B,path:K},w=(G.some(k=>k.path===K)?G.map(k=>k.path===K?ue:k):[...G,ue]).slice(-By);try{localStorage.setItem(Qh,JSON.stringify(w))}catch{}return w})}async function on(B){const G=er(B);if(G){we(null);try{const[K,ue]=await Promise.all([je("get_repo_info",{repoPath:G}),je("get_default_branch",{repoPath:G}).catch(()=>"main")]);Fs({path:G,name:K.name,lastOpenedAt:Date.now(),branchName:ue}),await fs(G,!0)}catch(K){we(K instanceof Error?K.message:String(K))}}}function Xs(B){var K,ue;const G=er(B);if(G&&(u(Y=>{const w=Y.filter(k=>k.path!==G);try{localStorage.setItem(Qh,JSON.stringify(w))}catch{}return w}),h(Y=>{if(!(G in Y))return Y;const w={...Y};return delete w[G],w}),t===G)){const Y=(ue=(K=c.find(w=>w.path!==G))==null?void 0:K.path)!=null?ue:null;Y?Ts(Y):(n(null),a(""),x([]),S([]),j([]),T([]),L({}),ee(null),re([]),wn([]),ht({}),fn({}),sn({}),Hn({}))}}async function Os(B){const G=er(B);if(G)try{await je("reveal_in_finder",{path:G})}catch(K){we(K instanceof Error?K.message:String(K))}}const io=()=>{(async()=>{var B,G;try{const K=await Jv({directory:!0,multiple:!1,defaultPath:(G=(B=c[0])==null?void 0:B.path)!=null?G:void 0});typeof K=="string"&&K&&await on(K)}catch(K){we(K instanceof Error?K.message:String(K))}})()};async function Ss(B,G){const ue=[];let Y=0;for(;;){const w=await je("get_merge_nodes",{repoPath:B,branch:G,page:Y,perPage:100});if(ue.push(...w.nodes),!w.hasMore||w.nodes.length===0)break;Y+=1}return ue}async function No(B,G,K){const ue=Array.from(new Set([K,...G.map(k=>k.name)].filter(k=>!!k)));if(ue.length===0)return[];const Y=await Promise.all(ue.map(k=>Ss(B,k).catch(()=>[]))),w=new Map;for(const k of Y)for(const A of k){const R=`${A.targetCommitSha}:${A.targetBranch}`;w.has(R)||w.set(R,A)}return Array.from(w.values())}const Gs=B=>B.map(G=>`${G.name}|${G.headSha}|${G.commitsAhead}|${G.commitsBehind}|${G.unpushedCommits}|${G.remoteSyncStatus}`).join("||"),So=B=>B.map(G=>G.fullSha).join("|"),_o=B=>{var G,K;return B?`${(G=B.branchName)!=null?G:""}|${B.headSha}|${(K=B.parentSha)!=null?K:""}|${B.hasUncommittedChanges?1:0}`:"__none__"};async function Rn(B,G,K){var Ye,ct;const ue=G!=null?G:X,Y=(Ye=K==null?void 0:K.includeMergeNodes)!=null?Ye:!0,w=(ct=K==null?void 0:K.includeUnpushedShaMap)!=null?ct:!0,[k,A,R,P,te,ve]=await Promise.all([je("get_branches",{repoPath:B}),je("get_all_repo_commits",{repoPath:B}),je("get_unpushed_direct_commits",{repoPath:B,branch:ue}).catch(()=>[]),je("get_checked_out_ref",{repoPath:B}).catch(()=>null),je("list_worktrees",{repoPath:B}).catch(()=>[]),je("list_stashes",{repoPath:B}).catch(()=>[])]),pe=Y?await No(B,k,ue):b,Ne=w?await Promise.all([ue,...k.map(dt=>dt.name)].map(async dt=>{const ft=await je("get_branch_unpushed_commit_shas",{repoPath:B,branch:dt}).catch(()=>[]);return[dt,ft]})):Object.entries(O);x(k),S(pe),j(A),T(R),L(Object.fromEntries(Ne)),ee(P),re(te),wn(ve)}async function Mn(B){const[G,K,ue]=await Promise.all([je("get_branches",{repoPath:B}).catch(()=>[]),je("get_all_repo_commits",{repoPath:B}).catch(()=>[]),je("get_checked_out_ref",{repoPath:B}).catch(()=>null)]);return Gs(G)!==Gs(ds.current)||So(K)!==So(Gn.current)||_o(ue)!==_o(xi.current)}async function Pn(B){Ie(null),Qe(!0);try{const[G,K]=await Promise.all([je("get_repo_info",{repoPath:B}),je("get_default_branch",{repoPath:B})]);a(G.name),W(K),n(B),await Rn(B,K),Cs(B),Ie({kind:"success",message:`Now targeting worktree at ${B}`})}catch(G){const K=G instanceof Error?G.message:String(G);Ie({kind:"error",message:K}),console.error("Failed to switch worktree:",K)}finally{Qe(!1)}}async function Vn(B,G){if(!(!t||Ae)){Pe(!0),Ie(null);try{await je("remove_worktree",{repoPath:t,worktreePath:B,force:G}),await Rn(t),Ie({kind:"success",message:`Removed worktree at ${B}`})}catch(K){const ue=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ue}),console.error("Failed to remove worktree:",ue)}finally{Pe(!1)}}}function ao(B,G){var ue,Y;const K=Uy(G);return xn.current===K?!1:(xn.current=K,a(G.name||md(B)),W(G.defaultBranch||"main"),x(G.branches),S(G.mergeNodes),j(G.directCommits),T(G.unpushedDirectCommits),L(G.unpushedCommitShasByBranch),ee(G.checkedOutRef),re(G.worktrees),wn(G.stashes),ht(G.branchCommitPreviews),fn((ue=G.branchParentByName)!=null?ue:{}),sn((Y=G.laneByBranch)!=null?Y:{}),Hn(G.branchUniqueAheadCounts),n(B),!0)}async function Ts(B){var Y;const G=++rs.current,K=er(B);if(!K)return;const ue=d[K];if(ue!=null&&ue.loaded)try{const w=await je("get_repo_quick_state",{repoPath:K});if(G!==rs.current)return;const k=Ls(w);if(((Y=Jt.current[K])!=null?Y:ue?Ls(bn(K,ue)):null)===k){we(null),Jt.current={...Jt.current,[K]:k},ao(K,ue),Fs({path:K,name:ue.name||md(K),lastOpenedAt:Date.now(),branchName:ue.defaultBranch}),Qe(!1),ze(!1),Cs(K),(async()=>{try{const R=await je("get_repo_refresh_fingerprint",{repoPath:K}),P=ri(R);if(G!==rs.current)return;if(hn.current[K]!==P){const te=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:!0});if(G!==rs.current)return;Es(K,te),hn.current={...hn.current,[K]:P},Jt.current={...Jt.current,[K]:Ls(bn(K,te))},ao(K,te)}}catch{}})();return}Jt.current={...Jt.current,[K]:k}}catch{}if(ze(!0),Qe(!0),we(null),await new Promise(w=>setTimeout(w,15)),G===rs.current)try{const[w,k]=await Promise.all([je("get_repo_info",{repoPath:K}),je("get_default_branch",{repoPath:K})]);if(G!==rs.current)return;a(w.name),W(k);const A=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:!0});if(G!==rs.current)return;Es(K,A),hn.current={...hn.current,[K]:ri(wo(K,k,A))},Jt.current={...Jt.current,[K]:Ls(bn(K,A))},ao(K,A),Fs({path:K,name:w.name,lastOpenedAt:Date.now(),branchName:k}),Qe(!1),ze(!1),Cs(K)}catch(w){if(G!==rs.current)return;console.error("Failed to load repo:",w),we(w instanceof Error?w.message:String(w)),n(null),ze(!1),Qe(!1)}}async function Cs(B){const G=++ts.current;try{if(G!==ts.current)return;H(!1),Me(null);const K=await je("get_github_info",{repoPath:B}),ue=await je("get_github_auth_status");if(G!==ts.current||(_e(ue),!ue.ghAvailable||!ue.authenticated))return;const Y=await je("get_open_prs",{owner:K.owner,repo:K.repo});if(G!==ts.current)return;Q(Y),H(!0)}catch(K){if(G!==ts.current)return;console.log("GitHub data not available:",K),Me(K instanceof Error?K.message:String(K)),H(!1)}}_.useEffect(()=>{let B=null,G=!1;const K=(()=>{try{return dp().label}catch{return null}})(),ue=async w=>{var A;const k=(A=w==null?void 0:w.path)==null?void 0:A.trim();!k||G||t!==k&&await Ts(k)};return(async()=>{K==="main"&&(B=await yc("gitviz://open-repo",async k=>{await ue(k.payload)}));const w=await je("take_pending_open_repo");await ue(w)})(),()=>{G=!0,B&&B()}},[t]),_.useEffect(()=>{ds.current=g},[g]),_.useEffect(()=>{Gn.current=C},[C]),_.useEffect(()=>{xi.current=V},[V]),_.useEffect(()=>{vo.current=js},[js]),_.useEffect(()=>{},[t,X,us]),_.useEffect(()=>{if(!t||!X||!us)return;je("watch_repo",{repoPath:t}).catch(console.error);let B=!1,G=!1,K=!1,ue=!1,Y=null,w=null,k=null;const A=async()=>{if(!B){if(vo.current){G=!0;return}if(K){G=!0;return}K=!0;try{if(!await Mn(t)||B)return;await Rn(t,X)}catch(te){console.warn("Frozen git-activity refresh failed:",te)}finally{K=!1,G&&!B&&(G=!1,window.setTimeout(()=>{A()},0))}}},R=()=>{G=!0,A()},P=async()=>{if(!(B||ue||document.visibilityState!=="visible")){ue=!0;try{const te=await je("get_remote_branch_head_sha",{repoPath:t,branch:X});if(B||te==null)return;if(Y==null){Y=te;return}if(te===Y)return;Y=te,await Rn(t,X)}catch(te){console.warn("Remote tip refresh failed:",te)}finally{ue=!1}}};return w=window.setInterval(()=>{P()},15e3),P(),yc("git-activity",te=>{er(te.payload.repoPath)===t&&(fs(t,!0),R())}).then(te=>{B?te():k=te}).catch(console.error),()=>{B=!0,w!=null&&window.clearInterval(w),k&&k()}},[t,X,us]);async function Ho(){if(t){et(!0),Me(null);try{await je("authenticate_github");const B=await je("get_github_auth_status");_e(B),B.authenticated?await Cs(t):B.message&&Me(B.message)}catch(B){Me(B instanceof Error?B.message:String(B))}finally{et(!1)}}}const ro=new Set(D.map(B=>B.branchName)),hs=14*864e5,ks=Date.now(),Do=g.filter(B=>B.status==="stale"),go=Do.filter(B=>ro.has(B.name)||ks-new Date(B.lastCommitDate).getTime()<=hs),lo=Do.filter(B=>!ro.has(B.name)&&ks-new Date(B.lastCommitDate).getTime()>hs),Ro=B=>{var G;return Object.prototype.hasOwnProperty.call(Xn,B.name)?Math.max(0,(G=Xn[B.name])!=null?G:0):Math.max(0,B.commitsAhead)};_.useEffect(()=>{mt({}),$o.current=null,et(!1),_e(null),Me(null),Q([]),Ie(null)},[t]),_.useEffect(()=>{var R,P,te,ve;if(!t||!X){mt({}),ht({}),fn({}),sn({}),Hn({}),$o.current=null;return}const B=g.map(pe=>{var Ne;return`${pe.name}:${pe.headSha}:${(Ne=pe.parentBranch)!=null?Ne:""}:${pe.commitsAhead}`}).join("|"),G=b.map(pe=>{var Ne,Ye;return`${pe.fullSha}:${(Ye=(Ne=pe.parentShas)==null?void 0:Ne[1])!=null?Ye:""}`}).join("|"),K=`${t}|${X}|${B}|${G}`;if($o.current===K)return;$o.current=K;const ue={},Y={};for(const pe of g){if(pe.name===X)continue;const Ne=C.filter(Ye=>Ye.branch===pe.name).map(Ye=>{var ct;return{fullSha:Ye.fullSha,sha:Ye.sha,parentSha:(ct=Ye.parentSha)!=null?ct:null,message:Ye.message,author:Ye.author,date:Ye.date,kind:"commit"}});ue[pe.name]=Ne,Y[pe.name]=Ne.length}const w=new Map;for(const pe of C)w.set(pe.fullSha,pe.branch);const k=pe=>{if(!pe)return null;const Ne=w.get(pe);if(Ne)return Ne;for(const[Ye,ct]of w.entries())if(Ye.startsWith(pe)||pe.startsWith(Ye))return ct;return null},A={[X]:null};for(const pe of g){if(pe.name===X){A[pe.name]=null;continue}const Ne=C.filter(ft=>ft.branch===pe.name),Ye=new Set(Ne.map(ft=>ft.fullSha)),ct=(P=(R=Ne.filter(ft=>{var lt;const st=(lt=ft.parentSha)!=null?lt:null;return!st||!Ye.has(st)}).sort((ft,st)=>{const lt=new Date(ft.date).getTime()-new Date(st.date).getTime();return lt!==0?lt:ft.fullSha.localeCompare(st.fullSha)})[0])==null?void 0:R.parentSha)!=null?P:null,dt=k(ct);A[pe.name]=(ve=(te=dt!=null?dt:Bt[pe.name])!=null?te:pe.parentBranch)!=null?ve:null}mt({}),ht(ue),fn(A),sn(pe=>{const Ne={};for(const Ye of g){const ct=pe[Ye.name];ct!=null&&Number.isFinite(ct)&&(Ne[Ye.name]=ct)}return Ne}),Hn(Y)},[t,X,g,b,C,Bt]),_.useEffect(()=>{if(!_t){yt(!1);return}yt(!0);const B=window.setTimeout(()=>{yt(!1)},Ly),G=window.setTimeout(()=>{Ie(null)},Ly+yS);return()=>{window.clearTimeout(B),window.clearTimeout(G)}},[_t]),_.useEffect(()=>{if(!t||g.length===0)return;const B=ue=>new Promise(Y=>setTimeout(Y,ue));async function G(){const Y=`${await je("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Y}`),await B(800),await je("screenshot",{path:`${Y}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Y}`)}const K=ue=>{if((ue.metaKey||ue.ctrlKey)&&!ue.shiftKey&&!ue.altKey&&ue.key.toLowerCase()==="b"){ue.preventDefault(),yn(Y=>!Y);return}(ue.metaKey||ue.ctrlKey)&&ue.shiftKey&&ue.key==="S"&&(ue.preventDefault(),G())};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[t,i,g]);function Bo(){He(!0),setTimeout(()=>{Re(!1),He(!1),tt("active"),Ot(null)},100)}async function wi(B){if(!t)return;Ie(null);const G=/^STASH:(\d+)$/.exec(B.commitSha);if(G){try{const K=parseInt(G[1],10),ue=await je("apply_stash_restore",{repoPath:t,stashIndex:K});ee(ue),await Rn(t);const Y=`Stash ${K+1}`,w=ue.branchName?` on branch ${ue.branchName}`:" at the stash base (detached HEAD)";Ie({kind:"success",message:`Restored ${Y}${w}; stash applied and dropped (uncommitted changes).`})}catch(K){const ue=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ue}),console.error("Failed to apply stash:",ue)}return}if(B.branchName){const K=(Y,w)=>{const k=Y.replace(/\\/g,"/").replace(/\/+$/,""),A=w.replace(/\\/g,"/").replace(/\/+$/,"");return k===A||k.toLowerCase()===A.toLowerCase()},ue=ae.find(Y=>Y.pathExists===!1||Y.isCurrent||t&&K(Y.path,t)?!1:Y.branchName===B.branchName);if(ue){await Pn(ue.path);return}}try{let K="";(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await je("stash_push",{repoPath:t,includeUntracked:!0}),K="Stashed local changes (including untracked), then ",await Rn(t));const Y=B.branchName?await je("checkout_branch",{repoPath:t,branchName:B.branchName}):await je("checkout_ref",{repoPath:t,refName:B.commitSha}),w=await je("get_checked_out_ref",{repoPath:t}).catch(()=>Y);ee(w),await Rn(t);const k=w.branchName?w.branchName:`${w.headSha.slice(0,7)} (detached)`;Ie({kind:"success",message:`${K}Checked out ${k}`})}catch(K){const ue=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ue}),console.error("Failed to checkout commit:",ue)}}async function ta(){if(!(!t||as)){Ie(null),Xt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ie({kind:"error",message:"No local changes to stash."});return}await je("stash_push",{repoPath:t,includeUntracked:!0}),await Rn(t),Ie({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(B){const G=B instanceof Error?B.message:String(B);Ie({kind:"error",message:G}),console.error("Failed to stash:",G)}finally{Xt(!1)}}}async function Pi(B){if(!t||$n)return!1;const G=B.trim();if(!G)return Ie({kind:"error",message:"Enter a commit message."}),!1;Ie(null),at(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to commit."}),!1;const ue=await je("commit_working_tree",{repoPath:t,message:G});return ee(ue),Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:"Committed local changes."}),!0}catch(K){const ue=K instanceof Error?K.message:String(K);return Ie({kind:"error",message:ue}),console.error("Failed to commit:",ue),!1}finally{at(!1)}}async function Hi(){if(!t||In)return!1;Ie(null),po(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to stage."}),!1;const G=await je("stage_working_tree",{repoPath:t});return ee(G),Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:"Staged all changes."}),!0}catch(B){const G=B instanceof Error?B.message:String(B);return Ie({kind:"error",message:G}),console.error("Failed to stage:",G),!1}finally{po(!1)}}async function Zo(B,G){if(!(!t||Go)){Us(!0),Ie(null);try{const K=/^STASH:(\d+)$/.exec(B);let ue;if(K){const Y=parseInt(K[1],10);ue=await je("move_stash_to_new_branch",{repoPath:t,stashIndex:Y,branchName:G})}else ue=await je("create_branch_from_uncommitted",{repoPath:t,branchName:G});ee(ue),Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Moved to new branch "${G}"`})}catch(K){const ue=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ue}),console.error("Failed to create branch from node:",ue)}finally{Us(!1)}}}async function Tt(B){if(!(!t||Go)){Us(!0),Ie(null);try{const G=await je("create_root_branch",{repoPath:t,branchName:B});ee(G),Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Created new root branch "${B}"`})}catch(G){const K=G instanceof Error?G.message:String(G);Ie({kind:"error",message:K}),console.error("Failed to create root branch:",K)}finally{Us(!1)}}}async function Si(B,G){if(!t)return;const K=Array.from(new Set(B.filter(ue=>!!ue&&ue!==G)));if(K.length!==0){Ie(null),Rt(!0);try{let ue=null;for(const Y of K)ue=await je("merge_ref_into_branch",{repoPath:t,sourceRef:Y,targetBranch:G});Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),ue&&ee(ue),Ie({kind:"success",message:K.length===1?`Merged ${K[0].slice(0,7)} into ${G}`:`Merged ${K.length} commits into ${G}`})}catch(ue){const Y=ue instanceof Error?ue.message:String(ue);Ie({kind:"error",message:Y}),console.error("Failed to merge refs into branch:",Y)}finally{Rt(!1)}}}async function Ci(){if(!(!t||Dt)){Ie(null),Kt(!0);try{const B=await je("push_all_unpushed_branches",{repoPath:t});Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:B.length>0?B.length===1?`Pushed ${B[0].branchName}`:`Pushed ${B.length} branches`:"Everything local is already pushed."})}catch(B){const G=B instanceof Error?B.message:String(B);Ie({kind:"error",message:G}),console.error("Failed to push all branches:",G)}finally{Kt(!1)}}}async function Ui(){if(!(!t||Dt)){Ie(null),Kt(!0);try{const B=await je("push_current_branch",{repoPath:t});Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Pushed ${B.branchName}`})}catch(B){const G=B instanceof Error?B.message:String(B);Ie({kind:"error",message:G}),console.error("Failed to push current branch:",G)}finally{Kt(!1)}}}async function li(B){var K;if(!t||Dt)return;const G=Array.from(new Map(B.filter(ue=>ue.branchName&&ue.targetSha).map(ue=>[ue.branchName,ue])).values());if(G.length!==0){Ie(null),Kt(!0);try{for(const ue of G)await je("push_branch",{repoPath:t,branchName:ue.branchName,targetSha:ue.targetSha});Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:G.length===1?`Pushed ${G[0].branchName} through ${(K=G[0].targetSha)==null?void 0:K.slice(0,7)}`:`Pushed ${G.length} selected commit ranges`})}catch(ue){const Y=ue instanceof Error?ue.message:String(ue);Ie({kind:"error",message:Y}),console.error("Failed to push selected commits:",Y)}finally{Kt(!1)}}}async function yo(B){var w;if(!t||ut)return;const G=Array.from(new Set(B.branchNames.filter(k=>k&&k!==X))),K=!!B.discardUncommittedChanges,ue=(w=B.stashIndices)!=null?w:[],Y=Array.from(new Set(ue)).sort((k,A)=>A-k);if(!(G.length===0&&!K&&Y.length===0)){Ie(null),nt(!0);try{for(const R of Y)await je("stash_drop",{repoPath:t,stashIndex:R});const k=G.length>0||K?await je("delete_selected_elements",{repoPath:t,branchNames:G,discardUncommittedChanges:K}):{deletedBranches:[],discardedUncommittedChanges:!1};Rn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1});const A=[];Y.length>0&&A.push(Y.length===1?`removed stash ${Y[0]+1}`:`removed ${Y.length} stashes`),k.discardedUncommittedChanges&&A.push("discarded local uncommitted changes"),k.deletedBranches.length>0&&A.push(k.deletedBranches.length===1?`deleted ${k.deletedBranches[0]}`:`deleted ${k.deletedBranches.length} branches`),Ie({kind:"success",message:A.length>0?A.join(" and "):"Nothing to delete."})}catch(k){const A=k instanceof Error?k.message:String(k);Ie({kind:"error",message:A}),console.error("Failed to delete selected elements:",A)}finally{nt(!1)}}}function Uo(B){Ot(B),gt(G=>{var K;return{branch:B,seq:((K=G==null?void 0:G.seq)!=null?K:0)+1}})}function ci(B){B&&(Ze(B),ie(G=>G+1))}function M(B){B&&(he(B),ie(G=>G+1))}_.useEffect(()=>{var K;const B=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(K=V==null?void 0:V.headSha)!=null?K:null;if(!B)return;const G=`${t!=null?t:"__no-repo__"}|${gs}|${B}`;Vs.current!==G&&(Vs.current=G,Ze(B),ie(ue=>ue+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,gs,t]),_.useEffect(()=>{Vs.current=null},[t]);const{enrichedBranches:U,enrichedBranchCommitPreviews:le,enrichedBranchUniqueAheadCounts:ke,enrichedDirectCommits:Ve}=_.useMemo(()=>{var lt,Sn,Cn,Bn,an;const B=Jx(kn,g,C,At,Xn,X,(lt=V==null?void 0:V.hasUncommittedChanges)!=null?lt:!1);let G=B.branches,K=B.directCommits,ue=B.branchCommitPreviews,Y=B.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:G,enrichedDirectCommits:K,enrichedBranchCommitPreviews:ue,enrichedBranchUniqueAheadCounts:Y};const w=V.headSha||V.parentSha||null,k=(Cn=(Sn=K[0])==null?void 0:Sn.fullSha)!=null?Cn:null,A=(zt,wt)=>!zt||!wt?!1:zt===wt||zt.startsWith(wt)||wt.startsWith(zt),R=[{name:X,headSha:k!=null?k:"",isDefault:!0},...G.map(zt=>({name:zt.name,headSha:zt.headSha,isDefault:!1}))],P=V.branchName?R.find(zt=>zt.name===V.branchName):void 0,te=w?R.filter(zt=>A(zt.headSha,w)):[],ve=(Bn=P!=null?P:te.find(zt=>zt.isDefault))!=null?Bn:te[0],pe=ve&&!ve.isDefault?G.find(zt=>zt.name===ve.name):void 0,Ne=(()=>{var wt;if(!w)return null;const zt=K.find(Nt=>A(Nt.fullSha,w)||A(Nt.sha,w));if(zt!=null&&zt.date)return zt.date;if(pe){const Nt=((wt=ue[pe.name])!=null?wt:[]).find(Ln=>A(Ln.fullSha,w)||A(Ln.sha,w));if(Nt!=null&&Nt.date)return Nt.date}return null})(),Ye=Ne?new Date(Ne).getTime():Number.NaN,ct=Date.now(),dt=Number.isFinite(Ye)?Math.max(ct,Ye+1):ct,ft=new Date(dt).toISOString(),st={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:w,message:"Local uncommitted changes",author:"You",date:ft,kind:"uncommitted"};return pe?{enrichedBranches:G.map(wt=>wt.name===pe.name?{...wt,commitsAhead:wt.commitsAhead+1,unpushedCommits:wt.unpushedCommits+1,lastCommitDate:ft,headSha:"WORKING_TREE"}:wt),enrichedDirectCommits:K,enrichedBranchCommitPreviews:{...ue,[pe.name]:[st,...ue[pe.name]||[]]},enrichedBranchUniqueAheadCounts:{...Y,[pe.name]:Math.max(0,(an=Object.prototype.hasOwnProperty.call(Y,pe.name)?Y[pe.name]:pe.commitsAhead)!=null?an:0)+1}}:{enrichedBranches:G,enrichedBranchCommitPreviews:{...ue,[X]:[st,...ue[X]||[]]},enrichedBranchUniqueAheadCounts:{...Y},enrichedDirectCommits:K}},[g,At,Xn,V,X,C,kn]),Ge=_.useMemo(()=>{const B={...Bt};return B[X]=null,B},[Bt,X,U]),Pt=_.useMemo(()=>{var B;return(B=Dw(U,X,Ge,rn))!=null?B:hp(U,X,le,Ge)},[U,X,le,Ge,rn]),It=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,defaultBranch:X,branchCommitPreviews:le,branchParentByName:Ge,branchUniqueAheadCounts:ke,manuallyOpenedClumps:Ut,manuallyClosedClumps:xs,isDebugOpen:!1,gridSearchQuery:ne,gridFocusSha:Ke,checkedOutRef:V!=null?V:null,orientation:gs}),[Pt,U,b,Ve,E,X,le,Ge,ke,Ut,xs,ne,Ke,(co=V==null?void 0:V.headSha)!=null?co:null,(qs=V==null?void 0:V.branchName)!=null?qs:null,gs]),Ft=_.useMemo(()=>{var B;return Ke&&(B=It.clusterKeyByCommitId.get(Ke))!=null?B:null},[It.clusterKeyByCommitId,Ke]),Gt=_.useMemo(()=>{if(!Ft||xs.has(Ft))return Ut;const B=new Set(Ut);return B.add(Ft),B},[xs,Ut,Ft]),tn=_.useMemo(()=>{if(!Ft)return xs;const B=new Set(xs);return B.delete(Ft),B},[xs,Ft]),mn=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,defaultBranch:X,branchCommitPreviews:le,branchParentByName:Ge,branchUniqueAheadCounts:ke,manuallyOpenedClumps:Gt,manuallyClosedClumps:tn,isDebugOpen:!1,gridSearchQuery:ne,gridFocusSha:Ke,checkedOutRef:V!=null?V:null,orientation:gs}),[Pt,U,b,Ve,E,X,le,Ge,ke,Gt,tn,ne,Ke,($s=V==null?void 0:V.headSha)!=null?$s:null,(Ks=V==null?void 0:V.branchName)!=null?Ks:null,gs]);_.useEffect(()=>{try{const B=window.localStorage.getItem(Oy);if(B){const K=Number(B);Number.isFinite(K)&&Ko(Math.min(Hy,Math.max(Py,K)))}const G=window.localStorage.getItem(zy);G!=null&&yn(G==="true")}catch{}},[]),_.useEffect(()=>{yi.current=jn},[jn]),_.useEffect(()=>{const B=Qo.current;B&&(B.style.width=ws?"0px":`${jn}px`)},[jn,ws]),_.useEffect(()=>{try{window.localStorage.setItem(zy,String(ws))}catch{}},[ws]);const cn=B=>{const G=Nn.current;if(!G)return;const K=G.startWidth+(B-G.startX);G.pendingWidth=Math.min(Hy,Math.max(Py,K));const ue=Qo.current;ue&&(ue.style.width=`${G.pendingWidth}px`)},zs=(B,G)=>{const K=Nn.current;if(K&&!(G!=null&&K.pointerId!==G)){Nn.current=null,so({dragging:!1,lastEvent:B}),document.body.style.cursor="",document.body.style.userSelect="",Ko(K.pendingWidth);try{window.localStorage.setItem(Oy,String(K.pendingWidth))}catch{}}},Vt=B=>{B.button===0&&(B.preventDefault(),so({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:B.pointerId,clientX:B.clientX,width:yi.current}),Nn.current={startX:B.clientX,startWidth:yi.current,pendingWidth:yi.current,pointerId:B.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",B.currentTarget.setPointerCapture(B.pointerId))},ns=B=>{const G=Nn.current;!G||G.pointerId!==B.pointerId||(Un.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:B.clientX}),so(K=>K.dragging?{dragging:!0,lastEvent:"move"}:K),cn(B.clientX))},bs=B=>{if(Nn.current){console.debug("[sidebar-resize] pointerup",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}zs("pointerup",B.pointerId)}},ms=B=>{if(Nn.current){console.debug("[sidebar-resize] pointercancel",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}zs("pointercancel",B.pointerId)}};return r.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[Ii?r.jsx("div",{className:"pointer-events-none absolute inset-0 z-[90] flex items-center justify-center bg-background/55 backdrop-blur-[1px]",children:r.jsxs("div",{className:"flex min-w-72 max-w-[min(28rem,calc(100vw-2rem))] flex-col gap-3 rounded-2xl border border-border bg-card/95 p-5 shadow-lg",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/40",children:r.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-border border-t-primary"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:oo!=null?oo:"Loading"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Reading refs, branches, worktrees, and recent history"})]})]}),r.jsx("div",{className:"h-1.5 overflow-hidden rounded-full bg-muted/60",children:r.jsx("div",{className:"h-full w-1/2 animate-pulse rounded-full bg-primary/60"})})]})}):null,r.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:r.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[r.jsxs("div",{ref:Qo,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:ws?64:jn},children:[r.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":ws?"Open sidebar":"Collapse sidebar",onClick:()=>yn(B=>!B),children:ws?r.jsx(Sw,{className:"h-4 w-4 shrink-0"}):r.jsx(vw,{className:"h-4 w-4 shrink-0"})}),r.jsx(_S,{className:xS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:ws,projects:vi,activeProjectPath:t,onSelectProject:Ts,onAddProject:io,onRemoveProject:Xs,onRevealProjectInFinder:Os,projectLoading:pt||(p&&t?!((uo=d[t])!=null&&uo.loaded):!1),projectError:vt,checkedOutRef:V,showCommits:Lt,onToggleShowCommits:()=>qt(B=>!B),manuallyOpenedClumpsByProject:Ee,manuallyClosedClumpsByProject:de,manuallyOpenedClumps:Gt,manuallyClosedClumps:tn,setManuallyOpenedClumps:Ms,setManuallyClosedClumps:Ao,gridLayoutModel:mn,onSelectCommit:ci,onSelectBranch:M}),ws?null:r.jsx("div",{"aria-hidden":"true",onPointerDown:Vt,onPointerMove:ns,onPointerUp:bs,onPointerCancel:ms,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),r.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[r.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),r.jsx(lS,{branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,unpushedCommitShasByBranch:O,defaultBranch:X,branchCommitPreviews:le,branchParentByName:Ge,branchUniqueAheadCounts:ke,gridSearchQuery:ne,gridSearchJumpToken:$,gridSearchJumpDirection:F,gridFocusSha:Ke,onGridSearchResultCountChange:be,onGridSearchResultIndexChange:We,onGridSearchFocusChange:Ze,checkedOutRef:V,onCommitClick:wi,onMergeRefsIntoBranch:Si,mergeInProgress:rt,onPushAllBranches:Ci,onPushCurrentBranch:Ui,onPushCommitTargets:li,pushInProgress:Dt,onDeleteSelection:yo,deleteInProgress:ut,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Vn,removeWorktreeInProgress:Ae,onSwitchToWorktree:Pn,onStashLocalChanges:ta,stashInProgress:as,stashDisabled:!1,onCommitLocalChanges:Pi,commitInProgress:$n,commitDisabled:!1,onStageAllChanges:Hi,stageInProgress:In,onCreateBranchFromNode:Zo,onCreateRootBranch:Tt,createBranchFromNodeInProgress:Go,isDebugOpen:qo,onDebugClose:()=>Bs(!1),onInteractionChange:ai,manuallyOpenedClumps:Gt,manuallyClosedClumps:tn,setManuallyOpenedClumps:Ms,setManuallyClosedClumps:Ao,layoutModel:mn,orientation:gs,gridHudProps:Io})]}),oe&&r.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Xe?"animate-error-panel-out":"animate-error-panel-in"}`,children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),r.jsx("button",{onClick:Bo,className:"text-muted-foreground hover:text-foreground transition-colors",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[r.jsxs("button",{onClick:()=>tt("active"),className:`text-xs font-medium transition-colors ${Fe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[go.length," active"]}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),r.jsxs("button",{onClick:()=>tt("inactive"),className:`text-xs font-medium transition-colors ${Fe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[lo.length," inactive"]})]}),r.jsx("div",{className:"overflow-y-auto max-h-64",children:(Fe==="active"?go:lo).map(B=>{const G=(xt==null?void 0:xt.name)===B.name,K=Ro(B);return r.jsxs("button",{onClick:()=>Uo(B),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:`text-sm font-medium truncate ${G?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:B.name}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[K>0&&`${K} ahead`,K>0&&B.commitsBehind>0&&", ",B.commitsBehind>0&&`${B.commitsBehind} behind`]})]}),r.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},B.name)})})]})]})})]})}var Bc=Ix(),wS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,SS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=wS}var is=SS,CS=`.icon-transitions-module__iconState___uqK9J {
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
}`,kS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=CS}var Jn=kS,jS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),MS=({size:t=24,style:n={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ES=({size:t=20,...n})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),TS=({size:t=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Jn.iconState} ${n?Jn.hiddenScaled:Jn.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Jn.iconState} ${n?Jn.visibleScaled:Jn.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),AS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Jn.iconStateFast} ${i?Jn.visibleScaled:u?Jn.sending:Jn.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Jn.iconStateFast} ${a?Jn.visibleScaled:Jn.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jn.iconStateFast} ${c?Jn.visibleScaled:Jn.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},NS=({size:t=24,isOpen:n=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jn.iconFade} ${n?Jn.visible:Jn.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jn.iconFade} ${n?Jn.hidden:Jn.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),DS=({size:t=24,isPaused:n=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jn.iconFadeFast} ${n?Jn.hidden:Jn.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Jn.iconFadeFast} ${n?Jn.visible:Jn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),RS=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),BS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),eb=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),LS=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),OS=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),zS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),$S=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),IS=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),PS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),HS=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),tb=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Zh=tb.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Jh="__agentation_freeze";function US(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Jh]||(t[Jh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Jh]}var ln=US();typeof window<"u"&&!ln.installed&&(ln.origSetTimeout=window.setTimeout.bind(window),ln.origSetInterval=window.setInterval.bind(window),ln.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?ln.origSetTimeout(t,n):ln.origSetTimeout((...a)=>{ln.frozen?ln.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?ln.origSetInterval(t,n):ln.origSetInterval((...a)=>{ln.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>ln.origRAF(n=>{ln.frozen?ln.frozenRAFQueue.push(t):t(n)}),ln.installed=!0);var Ht=ln.origSetTimeout,VS=ln.origSetInterval,fl=ln.origRAF;function YS(t){return t?tb.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function WS(){if(typeof document>"u"||ln.frozen)return;ln.frozen=!0,ln.frozenTimeoutQueue=[],ln.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Zh},
    *${Zh}::before,
    *${Zh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),ln.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;YS(i)||(n.pause(),ln.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Vy(){var i;if(typeof document>"u"||!ln.frozen)return;ln.frozen=!1;const t=ln.frozenTimeoutQueue;ln.frozenTimeoutQueue=[];for(const a of t)ln.origSetTimeout(()=>{if(ln.frozen){ln.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=ln.frozenRAFQueue;ln.frozenRAFQueue=[];for(const a of n)ln.origRAF(c=>{if(ln.frozen){ln.frozenRAFQueue.push(a);return}a(c)});for(const a of ln.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}ln.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function em(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:C},j){const[E,T]=_.useState(u),[O,L]=_.useState(!1),[D,Q]=_.useState("initial"),[X,W]=_.useState(!1),[V,ee]=_.useState(!1),ae=_.useRef(null),re=_.useRef(null),Ae=_.useRef(null),Pe=_.useRef(null);_.useEffect(()=>{b&&D!=="exit"&&Q("exit")},[b,D]),_.useEffect(()=>{Ht(()=>{Q("enter")},0);const fe=Ht(()=>{Q("entered")},200),Ee=Ht(()=>{const I=ae.current;I&&(em(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(fe),clearTimeout(Ee),Ae.current&&clearTimeout(Ae.current),Pe.current&&clearTimeout(Pe.current)}},[]);const ne=_.useCallback(()=>{Pe.current&&clearTimeout(Pe.current),L(!0),Pe.current=Ht(()=>{L(!1),em(ae.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:ne}),[ne]);const he=_.useCallback(()=>{Q("exit"),Ae.current=Ht(()=>{p()},150)},[p]),$=_.useCallback(()=>{E.trim()&&h(E.trim())},[E,h]),ie=_.useCallback(fe=>{fe.stopPropagation(),!fe.nativeEvent.isComposing&&(fe.key==="Enter"&&!fe.shiftKey&&(fe.preventDefault(),$()),fe.key==="Escape"&&he())},[$,he]),F=[is.popup,S?is.light:"",D==="enter"?is.enter:"",D==="entered"?is.entered:"",D==="exit"?is.exit:"",O?is.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:re,className:F,"data-annotation-popup":!0,style:g,onClick:fe=>fe.stopPropagation(),children:[r.jsxs("div",{className:is.header,children:[C&&Object.keys(C).length>0?r.jsxs("button",{className:is.headerToggle,onClick:()=>{const fe=V;ee(!V),fe&&Ht(()=>em(ae.current),0)},type:"button",children:[r.jsx("svg",{className:`${is.chevron} ${V?is.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:is.element,children:n})]}):r.jsx("span",{className:is.element,children:n}),i&&r.jsx("span",{className:is.timestamp,children:i})]}),C&&Object.keys(C).length>0&&r.jsx("div",{className:`${is.stylesWrapper} ${V?is.expanded:""}`,children:r.jsx("div",{className:is.stylesInner,children:r.jsx("div",{className:is.stylesBlock,children:Object.entries(C).map(([fe,Ee])=>r.jsxs("div",{className:is.styleLine,children:[r.jsx("span",{className:is.styleProperty,children:fe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:is.styleValue,children:Ee}),";"]},fe))})})}),a&&r.jsxs("div",{className:is.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),r.jsx("textarea",{ref:ae,className:is.textarea,style:{borderColor:X?x:void 0},placeholder:c,value:E,onChange:fe=>T(fe.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ie}),r.jsxs("div",{className:is.actions,children:[y&&r.jsx("div",{className:is.deleteWrapper,children:r.jsx("button",{className:is.deleteButton,onClick:y,type:"button",children:r.jsx(IS,{size:22})})}),r.jsx("button",{className:is.cancel,onClick:he,children:"Cancel"}),r.jsx("button",{className:is.submit,style:{backgroundColor:x,opacity:E.trim()?1:.4},onClick:$,disabled:!E.trim(),children:d})]})]})}),FS=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ht(()=>{c(!0)},500)},C=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:y,onMouseEnter:S,onMouseLeave:C,...i,children:n}),u&&Bc.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},XS=`.styles-module__tooltip___mcXL2 {
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
}`,GS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=XS}var Yy=GS,Er=({content:t})=>r.jsx(FS,{className:Yy.tooltip,content:t,children:r.jsx(ES,{className:Yy.tooltipIcon})}),bt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},nb=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...bt.navigation},{type:"header",label:"Header",...bt.header},{type:"hero",label:"Hero",...bt.hero},{type:"section",label:"Section",...bt.section},{type:"sidebar",label:"Sidebar",...bt.sidebar},{type:"footer",label:"Footer",...bt.footer},{type:"modal",label:"Modal",...bt.modal},{type:"banner",label:"Banner",...bt.banner},{type:"drawer",label:"Drawer",...bt.drawer},{type:"popover",label:"Popover",...bt.popover},{type:"divider",label:"Divider",...bt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...bt.card},{type:"text",label:"Text",...bt.text},{type:"image",label:"Image",...bt.image},{type:"video",label:"Video",...bt.video},{type:"table",label:"Table",...bt.table},{type:"grid",label:"Grid",...bt.grid},{type:"list",label:"List",...bt.list},{type:"chart",label:"Chart",...bt.chart},{type:"codeBlock",label:"Code Block",...bt.codeBlock},{type:"map",label:"Map",...bt.map},{type:"timeline",label:"Timeline",...bt.timeline},{type:"calendar",label:"Calendar",...bt.calendar},{type:"accordion",label:"Accordion",...bt.accordion},{type:"carousel",label:"Carousel",...bt.carousel},{type:"logo",label:"Logo",...bt.logo},{type:"faq",label:"FAQ",...bt.faq},{type:"gallery",label:"Gallery",...bt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...bt.button},{type:"input",label:"Input",...bt.input},{type:"search",label:"Search",...bt.search},{type:"form",label:"Form",...bt.form},{type:"tabs",label:"Tabs",...bt.tabs},{type:"dropdown",label:"Dropdown",...bt.dropdown},{type:"toggle",label:"Toggle",...bt.toggle},{type:"stepper",label:"Stepper",...bt.stepper},{type:"rating",label:"Rating",...bt.rating},{type:"fileUpload",label:"File Upload",...bt.fileUpload},{type:"checkbox",label:"Checkbox",...bt.checkbox},{type:"radio",label:"Radio",...bt.radio},{type:"slider",label:"Slider",...bt.slider},{type:"datePicker",label:"Date Picker",...bt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...bt.avatar},{type:"badge",label:"Badge",...bt.badge},{type:"tag",label:"Tag",...bt.tag},{type:"breadcrumb",label:"Breadcrumb",...bt.breadcrumb},{type:"pagination",label:"Pagination",...bt.pagination},{type:"progress",label:"Progress",...bt.progress},{type:"alert",label:"Alert",...bt.alert},{type:"toast",label:"Toast",...bt.toast},{type:"notification",label:"Notification",...bt.notification},{type:"tooltip",label:"Tooltip",...bt.tooltip},{type:"stat",label:"Stat",...bt.stat},{type:"skeleton",label:"Skeleton",...bt.skeleton},{type:"chip",label:"Chip",...bt.chip},{type:"icon",label:"Icon",...bt.icon},{type:"spinner",label:"Spinner",...bt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...bt.pricing},{type:"testimonial",label:"Testimonial",...bt.testimonial},{type:"cta",label:"CTA",...bt.cta},{type:"productCard",label:"Product Card",...bt.productCard},{type:"profile",label:"Profile",...bt.profile},{type:"feature",label:"Feature",...bt.feature},{type:"team",label:"Team",...bt.team},{type:"login",label:"Login",...bt.login},{type:"contact",label:"Contact",...bt.contact}]}],Zi={};for(const t of nb)for(const n of t.items)Zi[n.type]=n;function Ue({w:t,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Fn({w:t,h:n,radius:i=3,style:a}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Xo({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function qS({width:t,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[r.jsx(Fn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx(Ue,{w:t*.06}),r.jsx(Ue,{w:t*.07}),r.jsx(Ue,{w:t*.05}),r.jsx(Ue,{w:t*.06})]}),r.jsx(Fn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function KS({width:t,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx(Ue,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(Ue,{w:t*.6}),r.jsx(Ue,{w:t*.4}),r.jsx(Fn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function QS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(Ue,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Fn,{w:10,h:10,radius:2}),r.jsx(Ue,{w:t*(.4+c*17%30/100)})]},c))]})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Ue,{w:"60%",h:3,strong:!0}),r.jsx(Ue,{w:"80%",h:2}),r.jsx(Ue,{w:"70%",h:2}),r.jsx(Ue,{w:"60%",h:2})]},c))})}function JS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(Ue,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(Ue,{w:"90%"}),r.jsx(Ue,{w:"70%"}),r.jsx(Ue,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Fn,{w:70,h:26,radius:4}),r.jsx(Fn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function e4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Ue,{w:"70%",h:4,strong:!0}),r.jsx(Ue,{w:"95%",h:2}),r.jsx(Ue,{w:"85%",h:2}),r.jsx(Ue,{w:"50%",h:2})]})]})}function t4({width:t,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(Ue,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>r.jsx(Ue,{w:`${70+u*13%25}%`,h:2},u))]})}function n4({width:t,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function s4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(Ue,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(Ue,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function o4({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(Xo,{size:8}),r.jsx(Ue,{w:`${55+c*17%35}%`,h:2})]},c))})}function i4({width:t,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx(Ue,{w:Math.max(20,t*.5),h:3,strong:!0})})}function a4({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(Ue,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(Ue,{w:"40%",h:2})})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Ue,{w:60+c*17%30,h:2}),r.jsx(Fn,{w:"100%",h:28,radius:4})]},c)),r.jsx(Fn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function l4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(Ue,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(Ue,{w:"80%",h:2}),r.jsx(Ue,{w:"65%",h:2}),r.jsx(Ue,{w:"75%",h:2})]})]})}function c4({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function u4({width:t,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0})})}function d4({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(Ue,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(Ue,{w:t*.35})]})}function f4({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[r.jsx(Ue,{w:t*.3,h:4,strong:!0}),r.jsx(Ue,{w:t*.7}),r.jsx(Ue,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[r.jsx(Fn,{w:"33%",h:"100%",radius:4}),r.jsx(Fn,{w:"33%",h:"100%",radius:4}),r.jsx(Fn,{w:"33%",h:"100%",radius:4})]})]})}function h4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx(Fn,{w:"100%",h:"100%",radius:4},u))})}function m4({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(Ue,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(Ue,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function p4({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function _4({width:t,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(Xo,{size:Math.min(14,n*.4)}),r.jsx(Ue,{w:"50%",h:2})]})}function g4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Xo,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:"60%",h:3,strong:!0}),r.jsx(Ue,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function y4({width:t,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function x4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return r.jsx(Fn,{w:a,h:`${d}%`,radius:2},u)})})}function b4({width:t,height:n}){const i=Math.min(t,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Fn,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function v4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ue,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function w4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(Ue,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function S4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Fn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function C4({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function k4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(Ue,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function j4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Fn,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(Xo,{size:5}),r.jsx(Xo,{size:5}),r.jsx(Xo,{size:5})]})]})}function M4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(Ue,{w:t*.4,h:3,strong:!0}),r.jsx(Ue,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(Xo,{size:5}),r.jsx(Ue,{w:`${50+a*17%35}%`,h:2})]},a))}),r.jsx(Fn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function E4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Ue,{w:"90%",h:2}),r.jsx(Ue,{w:"75%",h:2}),r.jsx(Ue,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Xo,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(Ue,{w:60,h:3,strong:!0}),r.jsx(Ue,{w:40,h:2})]})]})]})}function T4({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(Ue,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(Ue,{w:t*.35}),r.jsx(Fn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function A4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:"40%",h:3,strong:!0}),r.jsx(Ue,{w:"70%",h:2})]})]})}function N4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(Ue,{w:t*.4,h:3,strong:!0}),r.jsx(Fn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function D4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(Ue,{w:t*.5,h:2}),r.jsx(Ue,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(Ue,{w:t*.3,h:2})]})}function R4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function B4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function L4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function O4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function z4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(Xo,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(Ue,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function $4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(Ue,{w:t*.4,h:2}),r.jsx(Ue,{w:t*.25,h:2})]})}function I4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(Xo,{size:6}),r.jsx(Xo,{size:6}),r.jsx(Xo,{size:6})]}),Array.from({length:i},(a,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx(Ue,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function P4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ue,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(Ue,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function H4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Xo,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:"50%",h:3,strong:!0}),r.jsx(Ue,{w:"75%",h:2})]}),r.jsx(Ue,{w:30,h:2})]})}function U4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Ue,{w:"65%",h:4,strong:!0}),r.jsx(Ue,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(Ue,{w:"30%",h:5,strong:!0}),r.jsx(Fn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function V4({width:t,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(Xo,{size:i}),r.jsx(Ue,{w:t*.45,h:4,strong:!0}),r.jsx(Ue,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Ue,{w:20,h:3,strong:!0}),r.jsx(Ue,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Ue,{w:20,h:3,strong:!0}),r.jsx(Ue,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Ue,{w:20,h:3,strong:!0}),r.jsx(Ue,{w:28,h:2})]})]})]})}function Y4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(Ue,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(Ue,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function W4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Ue,{w:"70%",h:3,strong:!0}),r.jsx(Ue,{w:"90%",h:2}),r.jsx(Ue,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function F4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Fn,{w:i,h:i,radius:i*.25}),r.jsx(Ue,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function X4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(Ue,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function G4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function q4({width:t,height:n}){const i=Math.min(t,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function K4({width:t,height:n}){const i=Math.min(t,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function Q4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Z4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(Ue,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ue,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function J4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function e6({width:t,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(Ue,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function t6({width:t,height:n}){const i=Math.min(t,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function n6({width:t,height:n}){const i=Math.min(t,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function s6({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Fn,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Ue,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(Ue,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function o6({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(Ue,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(Xo,{size:a}),r.jsx(Ue,{w:t*.12,h:3,strong:!0}),r.jsx(Ue,{w:t*.08,h:2})]},u))})]})}function i6({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[r.jsx(Ue,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(Ue,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:Math.min(60,t*.2),h:2}),r.jsx(Fn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Fn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(Ue,{w:t*.4,h:2})]})}function a6({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[r.jsx(Ue,{w:t*.4,h:4,strong:!0}),r.jsx(Ue,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:50,h:2}),r.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:40,h:2}),r.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Ue,{w:50,h:2}),r.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(Ue,{w:60,h:2}),r.jsx(Fn,{w:"100%",h:"100%",radius:4})]}),r.jsx(Fn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var r6={navigation:qS,hero:KS,sidebar:QS,footer:ZS,modal:JS,card:e4,text:t4,image:n4,table:s4,list:o4,button:i4,input:a4,form:r4,tabs:l4,avatar:c4,badge:u4,header:d4,section:f4,grid:h4,dropdown:m4,toggle:p4,search:_4,toast:g4,progress:y4,chart:x4,video:b4,tooltip:v4,breadcrumb:w4,pagination:S4,divider:C4,accordion:k4,carousel:j4,pricing:M4,testimonial:E4,cta:T4,alert:A4,banner:N4,stat:D4,stepper:R4,tag:B4,rating:L4,map:O4,timeline:z4,fileUpload:$4,codeBlock:I4,calendar:P4,notification:H4,productCard:U4,profile:V4,drawer:Y4,popover:W4,logo:F4,faq:X4,gallery:G4,checkbox:q4,radio:K4,slider:Q4,datePicker:Z4,skeleton:J4,chip:e6,icon:t6,spinner:n6,feature:s6,team:o6,login:i6,contact:a6};function l6({type:t,width:n,height:i,text:a}){const c=r6[t];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:a})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var c6=`svg[fill=none] {
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
}`,u6={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=c6}var Le=u6,ll=24,Xu=5;function Wy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,C=S?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=S?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],E=[];for(const re of n)i.has(re.id)||E.push(re);c&&E.push(...c);for(const re of E){const Ae=re.x,Pe=re.x+re.width,ne=re.x+re.width/2,he=re.y,$=re.y+re.height,ie=re.y+re.height/2;for(const F of C)for(const fe of[Ae,Pe,ne]){const Ee=fe-F;Math.abs(Ee)<Xu&&Math.abs(Ee)<Math.abs(u)&&(u=Ee)}for(const F of j)for(const fe of[he,$,ie]){const Ee=fe-F;Math.abs(Ee)<Xu&&Math.abs(Ee)<Math.abs(d)&&(d=Ee)}}const T=Math.abs(u)<Xu?u:0,O=Math.abs(d)<Xu?d:0,L=[],D=new Set,Q=h+T,X=p+T,W=y+T,V=g+O,ee=x+O,ae=b+O;for(const re of E){const Ae=re.x,Pe=re.x+re.width,ne=re.x+re.width/2,he=re.y,$=re.y+re.height,ie=re.y+re.height/2;for(const F of[Ae,ne,Pe])for(const fe of[Q,W,X])if(Math.abs(fe-F)<.5){const Ee=`x:${Math.round(F)}`;D.has(Ee)||(D.add(Ee),L.push({axis:"x",pos:F}))}for(const F of[he,ie,$])for(const fe of[V,ae,ee])if(Math.abs(fe-F)<.5){const Ee=`y:${Math.round(F)}`;D.has(Ee)||(D.add(Ee),L.push({axis:"y",pos:F}))}}return{dx:T,dy:O,guides:L}}function Fy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function d6({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:C,wireframe:j}){const[E,T]=_.useState(new Set),[O,L]=_.useState(null),[D,Q]=_.useState(null),[X,W]=_.useState(null),[V,ee]=_.useState([]),[ae,re]=_.useState(null),[Ae,Pe]=_.useState(!1),ne=_.useRef(!1),[he,$]=_.useState(new Set),ie=_.useRef(new Map),F=_.useRef(null),fe=_.useRef(null),Ee=_.useRef(t);Ee.current=t;const I=_.useRef(g);I.current=g;const de=_.useRef(b);de.current=b;const q=_.useRef(S);q.current=S;const me=_.useRef(x);_.useEffect(()=>{x!==me.current&&(me.current=x,T(new Set))},[x]);const be=_.useRef(C);_.useEffect(()=>{if(C!==void 0&&C!==be.current){be.current=C;const oe=new Set(Ee.current.map(Re=>Re.id));oe.size>0&&($(oe),T(new Set),fe.current=null,Ht(()=>{n([]),$(new Set)},180))}},[C,n]),_.useEffect(()=>{const oe=Re=>{const Xe=Re.target;if(!(Xe.tagName==="INPUT"||Xe.tagName==="TEXTAREA"||Xe.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&E.size>0){Re.preventDefault();const Fe=new Set(E);$(Fe),T(new Set),Ht(()=>{n(Ee.current.filter(tt=>!Fe.has(tt.id))),$(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&E.size>0){Re.preventDefault();const Fe=Re.shiftKey?20:1,tt=Re.key==="ArrowLeft"?-Fe:Re.key==="ArrowRight"?Fe:0,ot=Re.key==="ArrowUp"?-Fe:Re.key==="ArrowDown"?Fe:0;n(t.map(gt=>E.has(gt.id)?{...gt,x:Math.max(0,gt.x+tt),y:Math.max(0,gt.y+ot)}:gt));return}if(Re.key==="Escape"){i?a(null):E.size>0&&T(new Set);return}}};return document.addEventListener("keydown",oe),()=>document.removeEventListener("keydown",oe)},[E,i,t,n,a]);const Te=_.useCallback(oe=>{if(oe.button!==0||p||oe.target.closest(`.${Le.placement}`))return;oe.preventDefault(),oe.stopPropagation();const Xe=window.scrollY,He=oe.clientX,Fe=oe.clientY;if(i){fe.current="place",d==null||d(!0);let tt=!1,ot=He,gt=Fe;const xt=it=>{ot=it.clientX,gt=it.clientY;const H=Math.abs(ot-He),J=Math.abs(gt-Fe);if((H>5||J>5)&&(tt=!0),tt){const _e=Math.min(He,ot),Ce=Math.min(Fe,gt),et=Math.abs(ot-He),Je=Math.abs(gt-Fe);L({x:_e,y:Ce,w:et,h:Je}),W({x:it.clientX+12,y:it.clientY+12,text:`${Math.round(et)} × ${Math.round(Je)}`})}},Ot=it=>{window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",Ot),L(null),W(null),fe.current=null,d==null||d(!1);const H=bt[i];let J,_e,Ce,et;tt?(J=Math.min(He,ot),_e=Math.min(Fe,gt)+Xe,Ce=Math.max(ll,Math.abs(ot-He)),et=Math.max(ll,Math.abs(gt-Fe))):(Ce=H.width,et=H.height,J=He-Ce/2,_e=Fe+Xe-et/2),J=Math.max(0,J),_e=Math.max(0,_e);const Je={id:Fy(),type:i,x:J,y:_e,width:Ce,height:et,scrollY:Xe,timestamp:Date.now()},Me=[...t,Je];n(Me),T(new Set([Je.id])),a(null)};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",Ot)}else{oe.shiftKey||T(new Set),fe.current="select";let tt=!1;const ot=xt=>{const Ot=Math.abs(xt.clientX-He),it=Math.abs(xt.clientY-Fe);if((Ot>4||it>4)&&(tt=!0),tt){const H=Math.min(He,xt.clientX),J=Math.min(Fe,xt.clientY);Q({x:H,y:J,w:Math.abs(xt.clientX-He),h:Math.abs(xt.clientY-Fe)})}},gt=xt=>{if(window.removeEventListener("mousemove",ot),window.removeEventListener("mouseup",gt),fe.current=null,tt){const Ot=Math.min(He,xt.clientX),it=Math.min(Fe,xt.clientY)+Xe,H=Math.abs(xt.clientX-He),J=Math.abs(xt.clientY-Fe),_e=new Set(oe.shiftKey?E:new Set);for(const Ce of t)Ce.y-Xe,Ce.x+Ce.width>Ot&&Ce.x<Ot+H&&Ce.y+Ce.height>it&&Ce.y<it+J&&_e.add(Ce.id);T(_e)}Q(null)};window.addEventListener("mousemove",ot),window.addEventListener("mouseup",gt)}},[i,p,t,n,E]),We=_.useCallback((oe,Re)=>{var Je;if(oe.button!==0)return;const Xe=oe.target;if(Xe.closest(`.${Le.handle}`)||Xe.closest(`.${Le.deleteButton}`))return;oe.preventDefault(),oe.stopPropagation();let He;oe.shiftKey?(He=new Set(E),He.has(Re)?He.delete(Re):He.add(Re)):E.has(Re)?He=new Set(E):He=new Set([Re]),T(He),(He.size!==E.size||[...He].some(Me=>!E.has(Me)))&&((Je=I.current)==null||Je.call(I,He,oe.shiftKey));const tt=oe.clientX,ot=oe.clientY,gt=new Map;for(const Me of t)He.has(Me.id)&&gt.set(Me.id,{x:Me.x,y:Me.y});fe.current="move",d==null||d(!0);let xt=!1,Ot=!1,it=t,H=0,J=0;const _e=new Map;for(const Me of t)gt.has(Me.id)&&_e.set(Me.id,{w:Me.width,h:Me.height});const Ce=Me=>{var At;const _t=Me.clientX-tt,Ie=Me.clientY-ot;if((Math.abs(_t)>2||Math.abs(Ie)>2)&&(xt=!0),!xt)return;if(Me.altKey&&!Ot){Ot=!0;const ht=[];for(const Bt of t)gt.has(Bt.id)&&ht.push({...Bt,id:Fy(),timestamp:Date.now()});it=[...t,...ht]}let Wt=1/0,yt=1/0,rt=-1/0,Rt=-1/0;for(const[ht,Bt]of gt){const fn=_e.get(ht);fn&&(Wt=Math.min(Wt,Bt.x+_t),yt=Math.min(yt,Bt.y+Ie),rt=Math.max(rt,Bt.x+_t+fn.w),Rt=Math.max(Rt,Bt.y+Ie+fn.h))}const Dt={x:Wt,y:yt,width:rt-Wt,height:Rt-yt},{dx:Kt,dy:ut,guides:nt}=Wy(Dt,it,new Set(gt.keys()),void 0,y);ee(nt);const jt=_t+Kt,mt=Ie+ut;H=jt,J=mt,n(it.map(ht=>{const Bt=gt.get(ht.id);return Bt?{...ht,x:Math.max(0,Bt.x+jt),y:Math.max(0,Bt.y+mt)}:ht})),(At=de.current)==null||At.call(de,jt,mt)},et=()=>{var Me;window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",et),fe.current=null,d==null||d(!1),ee([]),(Me=q.current)==null||Me.call(q,H,J,xt)};window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",et)},[E,t,n,d]),Ke=_.useCallback((oe,Re,Xe)=>{oe.preventDefault(),oe.stopPropagation();const He=t.find(_e=>_e.id===Re);if(!He)return;T(new Set([Re])),fe.current="resize",d==null||d(!0);const Fe=oe.clientX,tt=oe.clientY,ot=He.width,gt=He.height,xt=He.x,Ot=He.y,it={left:Xe.includes("w"),right:Xe.includes("e"),top:Xe.includes("n"),bottom:Xe.includes("s")},H=_e=>{const Ce=_e.clientX-Fe,et=_e.clientY-tt;let Je=ot,Me=gt,_t=xt,Ie=Ot;Xe.includes("e")&&(Je=Math.max(ll,ot+Ce)),Xe.includes("w")&&(Je=Math.max(ll,ot-Ce),_t=xt+ot-Je),Xe.includes("s")&&(Me=Math.max(ll,gt+et)),Xe.includes("n")&&(Me=Math.max(ll,gt-et),Ie=Ot+gt-Me);const Wt={x:_t,y:Ie,width:Je,height:Me},{dx:yt,dy:rt,guides:Rt}=Wy(Wt,Ee.current,new Set([Re]),it,y);ee(Rt),yt!==0&&(it.right?Je+=yt:it.left&&(_t+=yt,Je-=yt)),rt!==0&&(it.bottom?Me+=rt:it.top&&(Ie+=rt,Me-=rt)),n(Ee.current.map(Dt=>Dt.id===Re?{...Dt,x:_t,y:Ie,width:Je,height:Me}:Dt)),W({x:_e.clientX+12,y:_e.clientY+12,text:`${Math.round(Je)} × ${Math.round(Me)}`})},J=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",J),W(null),fe.current=null,d==null||d(!1),ee([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",J)},[t,n,d]),Ze=_.useCallback(oe=>{fe.current=null,$(Re=>{const Xe=new Set(Re);return Xe.add(oe),Xe}),T(Re=>{const Xe=new Set(Re);return Xe.delete(oe),Xe}),Ht(()=>{n(Ee.current.filter(Re=>Re.id!==oe)),$(Re=>{const Xe=new Set(Re);return Xe.delete(oe),Xe})},180)},[n]),Lt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},qt=_.useCallback(oe=>{const Re=t.find(Xe=>Xe.id===oe);Re&&(ne.current=!!Re.text,re(oe),Pe(!1))},[t]),pt=_.useCallback(()=>{ae&&(Pe(!0),Ht(()=>{re(null),Pe(!1)},150))},[ae]);_.useEffect(()=>{u&&ae&&pt()},[u]);const ze=_.useCallback(oe=>{ae&&(n(t.map(Re=>Re.id===ae?{...Re,text:oe.trim()||void 0}:Re)),pt())},[ae,t,n,pt]),Et=typeof window<"u"?window.scrollY:0,Qe=["nw","ne","se","sw"],vt=j?"#f97316":"#3c82f7",we=[{dir:"n",cls:Le.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:vt})})},{dir:"e",cls:Le.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:vt})})},{dir:"s",cls:Le.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:vt})})},{dir:"w",cls:Le.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:vt})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:F,className:`${Le.overlay} ${c?"":Le.light} ${i?Le.placing:""} ${p?Le.passthrough:""} ${u?Le.overlayExiting:""} ${j?Le.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Te,children:t.map(oe=>{var Fe;const Re=E.has(oe.id),Xe=((Fe=Zi[oe.type])==null?void 0:Fe.label)||oe.type,He=oe.y-Et;return r.jsxs("div",{"data-design-placement":oe.id,className:`${Le.placement} ${Re?Le.selected:""} ${he.has(oe.id)?Le.exiting:""}`,style:{left:oe.x,top:He,width:oe.width,height:oe.height,position:"fixed"},onMouseDown:tt=>We(tt,oe.id),onDoubleClick:()=>qt(oe.id),children:[r.jsx("span",{className:Le.placementLabel,children:Xe}),r.jsx("span",{className:`${Le.placementAnnotation} ${oe.text?Le.annotationVisible:""}`,children:(oe.text&&ie.current.set(oe.id,oe.text),oe.text||ie.current.get(oe.id)||"")}),r.jsx("div",{className:Le.placementContent,children:r.jsx(l6,{type:oe.type,width:oe.width,height:oe.height,text:oe.text})}),r.jsx("div",{className:Le.deleteButton,onMouseDown:tt=>tt.stopPropagation(),onClick:()=>Ze(oe.id),children:"✕"}),Qe.map(tt=>r.jsx("div",{className:`${Le.handle} ${Le[`handle${tt.charAt(0).toUpperCase()}${tt.slice(1)}`]}`,onMouseDown:ot=>Ke(ot,oe.id,tt)},tt)),we.map(({dir:tt,cls:ot,arrow:gt})=>r.jsx("div",{className:`${Le.edgeHandle} ${ot}`,onMouseDown:xt=>Ke(xt,oe.id,tt),children:gt},tt))]},oe.id)})}),ae&&(()=>{var Ot,it;const oe=t.find(H=>H.id===ae);if(!oe)return null;const Re=oe.y-Et,Xe=oe.x+oe.width/2,He=Re-8,Fe=Re+oe.height+8,tt=He>200,ot=Fe<window.innerHeight-100,gt=Math.max(160,Math.min(window.innerWidth-160,Xe));let xt;return tt?xt={left:gt,bottom:window.innerHeight-He}:ot?xt={left:gt,top:Fe}:xt={left:gt,top:Math.max(80,window.innerHeight/2-80)},r.jsx(jd,{element:((Ot=Zi[oe.type])==null?void 0:Ot.label)||oe.type,placeholder:Lt[oe.type]||"Label or content text",initialValue:(it=oe.text)!=null?it:"",submitLabel:ne.current?"Save":"Set",onSubmit:ze,onCancel:pt,onDelete:ne.current?()=>{ze("")}:void 0,isExiting:Ae,lightMode:!c,style:xt})})(),O&&r.jsx("div",{className:Le.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),D&&r.jsx("div",{className:Le.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),X&&r.jsx("div",{className:Le.sizeIndicator,style:{left:X.x,top:X.y},"data-feedback-toolbar":!0,children:X.text}),V.map((oe,Re)=>r.jsx("div",{className:Le.guideLine,style:oe.axis==="x"?{position:"fixed",left:oe.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:oe.pos-Et,right:0,height:1},"data-feedback-toolbar":!0},`${oe.axis}-${oe.pos}-${Re}`))]})}function f6(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Le.fadeTop:""} ${i?Le.fadeBottom:""}`}var z="currentColor",Be="0.5";function h6({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:z,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:z,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:z,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:z,strokeWidth:Be})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:z,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:z,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:z,strokeWidth:Be})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:z,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:z,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:z,strokeWidth:Be,fill:z,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:z,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:z,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Be})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:z,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:z,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Be})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:z,strokeWidth:Be,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:z,strokeWidth:Be,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:z,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:z,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:z,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:z,strokeWidth:Be})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Be})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:z,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:z,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:z,strokeWidth:Be})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:z,strokeWidth:Be,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:z,strokeWidth:Be,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:z,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:z,opacity:".15",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Be})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:z,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:z,strokeWidth:Be})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:z,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:z,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:z,strokeWidth:Be,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:z,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:z,strokeWidth:Be})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:z,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:z,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:z,strokeWidth:Be})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:z,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:z,opacity:".2",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:z,strokeWidth:Be})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:z,strokeWidth:Be,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:z,strokeWidth:Be,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:z,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:z,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:z,strokeWidth:Be,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:z,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:z,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:z,opacity:".15",stroke:z,strokeWidth:Be})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:z,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:z,opacity:".2",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:z,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Be,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:z,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:z,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:z,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:z,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:z,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:z,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:z,strokeWidth:Be,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:z,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:z,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:z,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:z,strokeWidth:Be})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Be,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:z,strokeWidth:Be})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:z,strokeWidth:Be,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:z,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:z,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Be})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:z,strokeWidth:Be,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:z,strokeWidth:Be}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:z,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:z,strokeWidth:Be})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:z,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:z,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:z,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:z,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:z,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:z,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:z,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:z,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:z,opacity:".08",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:z,strokeWidth:Be,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:z,strokeWidth:Be,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:z,strokeWidth:Be,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:z,strokeWidth:Be,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:z,strokeWidth:Be,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:z,strokeWidth:Be,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:z,strokeWidth:Be,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:z,strokeWidth:Be,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:z,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:z,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:z,strokeWidth:Be}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:z,opacity:".2"})]});default:return null}}function m6({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:a,className:`${Le.placeScroll} ${c||""}`,children:nb.map(d=>r.jsxs("div",{className:Le.paletteSection,children:[r.jsx("div",{className:Le.paletteSectionTitle,children:d.section}),d.items.map(h=>r.jsxs("div",{className:`${Le.paletteItem} ${t===h.type?Le.active:""} ${u?Le.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[r.jsx("div",{className:Le.paletteItemIcon,children:r.jsx(h6,{type:h.type})}),r.jsx("span",{className:Le.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function p6({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?r.jsxs(r.Fragment,{children:[t,n?` ${n}`:""]}):x?r.jsxs("span",{className:Le.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),r.jsxs("span",{className:`${Le.rollingNum} ${d==="up"?Le.exitUp:Le.exitDown}`,children:[i," ",c]},`o${i}-${t}`),r.jsxs("span",{className:`${Le.rollingNum} ${d==="up"?Le.enterUp:Le.enterDown}`,children:[t," ",n]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:Le.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${Le.rollingNum} ${d==="up"?Le.exitUp:Le.exitDown}`,children:i},`o${i}-${t}`),r.jsx("span",{className:`${Le.rollingNum} ${d==="up"?Le.enterUp:Le.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function _6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:C}){const[j,E]=_.useState(!1),[T,O]=_.useState("exit"),[L,D]=_.useState(!1),[Q,X]=_.useState(!0),W=_.useRef(0),V=_.useRef(""),ee=_.useRef(0),ae=_.useRef(),re=_.useRef(null),[Ae,Pe]=_.useState("");_.useEffect(()=>(u?(E(!0),clearTimeout(ae.current),cancelAnimationFrame(ee.current),ee.current=fl(()=>{ee.current=fl(()=>{O("enter")})})):(cancelAnimationFrame(ee.current),O("exit"),clearTimeout(ae.current),ae.current=Ht(()=>{E(!1),d==null||d()},200)),()=>cancelAnimationFrame(ee.current)),[u]);const ne=h>0||a>0,he=h+a;return he>0&&(W.current=he,V.current=g?he===1?"Component":"Components":he===1?"Change":"Changes"),_.useEffect(()=>{if(ne)L?X(!1):(X(!0),D(!0),fl(()=>{fl(()=>{X(!1)})}));else{X(!0);const $=Ht(()=>D(!1),300);return()=>clearTimeout($)}},[ne]),_.useEffect(()=>{if(!j)return;const $=re.current;if(!$)return;const ie=()=>Pe(f6($));ie(),$.addEventListener("scroll",ie,{passive:!0});const F=new ResizeObserver(ie);return F.observe($),()=>{$.removeEventListener("scroll",ie),F.disconnect()}},[j]),j?r.jsxs("div",{className:`${Le.palette} ${Le[T]} ${i?"":Le.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation(),onTransitionEnd:$=>{$.target===$.currentTarget&&(u||(clearTimeout(ae.current),E(!1),O("exit"),d==null||d()))},children:[r.jsxs("div",{className:Le.paletteHeader,children:[r.jsx("div",{className:Le.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:Le.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${Le.canvasToggle} ${g?Le.active:""}`,onClick:()=>x(!g),children:[r.jsx("span",{className:Le.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:Le.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${Le.wireframePurposeWrap} ${g?"":Le.collapsed}`,children:r.jsx("div",{className:Le.wireframePurposeInner,children:r.jsx("textarea",{className:Le.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:$=>S($.target.value),rows:2})})}),r.jsx(m6,{activeType:t,onSelect:n,onDragStart:y,scrollRef:re,fadeClass:Ae,blankCanvas:g}),L&&r.jsx("div",{className:`${Le.paletteFooterWrap} ${Q?Le.footerHidden:""}`,children:r.jsx("div",{className:Le.paletteFooterInner,children:r.jsx("div",{className:Le.paletteFooterInnerContent,children:r.jsxs("div",{className:Le.paletteFooter,children:[r.jsx("span",{className:Le.paletteFooterCount,children:r.jsx(p6,{value:W.current,suffix:V.current})}),r.jsx("button",{className:Le.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function gl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Yo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=gl(i)}return null}function g6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=gl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,g;const n=g6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Yo(t,"svg");if(x){const b=gl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=gl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const C=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=gl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var C;const x=g.tagName.toLowerCase(),b=g.className;let S="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E));j&&(S=`.${j}`)}if(x==="button"||x==="a"){const j=(C=g.textContent)==null?void 0:C.trim().slice(0,15);if(j)return`${x}${S} "${j}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var sb=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),y6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),x6=new Set(["input","textarea","select"]),b6=new Set(["img","video","canvas","svg"]),v6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;y6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:x6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:b6.has(a)?c=["width","height","objectFit","borderRadius"]:v6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!sb.has(h)&&(i[u]=h)}return i}var w6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of w6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!sb.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function S6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=gl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var C6=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Xy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},k6=new Set(["script","style","noscript","link","meta"]),j6=40;function ob(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(Xy[n])return Xy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function ib(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function ab(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function M6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(k6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<j6)return;const y=C6.has(d),g=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,S=ob(c),C={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:ib(c),textSnippet:ab(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:S})}),a}function E6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=ob(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:ib(t),textSnippet:ab(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Gy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},qy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Ky=16,ed=5;function Qy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const V=W.x,ee=W.x+W.width,ae=W.x+W.width/2,re=W.y,Ae=W.y+W.height,Pe=W.y+W.height/2;for(const ne of[d,h,p])for(const he of[V,ee,ae]){const $=he-ne;Math.abs($)<ed&&Math.abs($)<Math.abs(c)&&(c=$)}for(const ne of[y,g,x])for(const he of[re,Ae,Pe]){const $=he-ne;Math.abs($)<ed&&Math.abs($)<Math.abs(u)&&(u=$)}}const S=Math.abs(c)<ed?c:0,C=Math.abs(u)<ed?u:0,j=[],E=new Set,T=d+S,O=h+S,L=p+S,D=y+C,Q=g+C,X=x+C;for(const W of b){const V=W.x,ee=W.x+W.width,ae=W.x+W.width/2,re=W.y,Ae=W.y+W.height,Pe=W.y+W.height/2;for(const ne of[V,ae,ee])for(const he of[T,L,O])if(Math.abs(he-ne)<.5){const $=`x:${Math.round(ne)}`;E.has($)||(E.add($),j.push({axis:"x",pos:ne}))}for(const ne of[re,Pe,Ae])for(const he of[D,X,Q])if(Math.abs(he-ne)<.5){const $=`y:${Math.round(ne)}`;E.has($)||(E.add($),j.push({axis:"y",pos:ne}))}}return{dx:S,dy:C,guides:j}}var T6=new Set(["script","style","noscript","link","meta","br","hr"]);function Zy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(T6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Ky&&i.height>=Ky)return n;n=n.parentElement}return null}function A6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,S=_.useRef(t);S.current=t;const[C,j]=_.useState(new Set),[E,T]=_.useState(!1),O=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==O.current&&(O.current=x,b.length>0&&T(!0))},[x,b.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[D,Q]=_.useState(null),[X,W]=_.useState(!1),V=_.useRef(!1),ee=_.useCallback(H=>{const J=b.find(_e=>_e.id===H);J&&(V.current=!!J.note,Q(H),W(!1))},[b]),ae=_.useCallback(()=>{D&&(W(!0),Ht(()=>{Q(null),W(!1)},150))},[D]),re=_.useCallback(H=>{D&&(n({...t,sections:b.map(J=>J.id===D?{...J,note:H.trim()||void 0}:J)}),ae())},[D,b,t,n,ae]);_.useEffect(()=>{a&&D&&ae()},[a]);const[Ae,Pe]=_.useState(new Set),ne=_.useRef(new Map),[he,$]=_.useState(null),[ie,F]=_.useState(null),[fe,Ee]=_.useState([]),[I,de]=_.useState(0),q=_.useRef(null),me=_.useRef(new Set),be=_.useRef(new Map),[Te,We]=_.useState(new Map),[Ke,Ze]=_.useState(new Map),Lt=_.useRef(new Set),qt=_.useRef(new Map),pt=_.useRef(h);pt.current=h;const ze=_.useRef(y);ze.current=y;const Et=_.useRef(g);Et.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[Qe,vt]=_.useState(()=>!t.sections.some(H=>{const J=H.originalRect,_e=H.currentRect;return Math.abs(J.x-_e.x)>1||Math.abs(J.y-_e.y)>1||Math.abs(J.width-_e.width)>1||Math.abs(J.height-_e.height)>1}));_.useEffect(()=>{if(!Qe){const H=Ht(()=>vt(!0),380);return()=>clearTimeout(H)}},[]);const we=_.useRef(new Set);_.useEffect(()=>{we.current=new Set(b.map(H=>H.selector))},[b]),_.useEffect(()=>{const H=()=>de(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),_.useEffect(()=>{const H=J=>{if(q.current){$(null);return}const _e=document.elementFromPoint(J.clientX,J.clientY);if(!_e){$(null);return}if(_e.closest("[data-feedback-toolbar]")){$(null);return}if(_e.closest("[data-design-placement]")){$(null);return}if(_e.closest("[data-annotation-popup]")){$(null);return}const Ce=Zy(_e);if(!Ce){$(null);return}for(const Je of we.current)try{const Me=document.querySelector(Je);if(Me&&(Me===Ce||Ce.contains(Me))){$(null);return}}catch{}const et=Ce.getBoundingClientRect();$({x:et.x,y:et.y,w:et.width,h:et.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),_.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),_.useEffect(()=>{const H=J=>{var Me,_t,Ie,Wt;if(q.current||J.button!==0)return;const _e=J.target;if(!_e||_e.closest("[data-feedback-toolbar]")||_e.closest("[data-design-placement]")||_e.closest("[data-annotation-popup]"))return;const Ce=Zy(_e);let et=!1;if(Ce)for(const yt of we.current)try{const rt=document.querySelector(yt);if(rt&&(rt===Ce||Ce.contains(rt))){et=!0;break}}catch{}const Je=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(Ce&&!et){J.preventDefault(),J.stopPropagation();const yt=E6(Ce),rt=[...b,yt],Rt=[...t.originalOrder,yt.id];n({...t,sections:rt,originalOrder:Rt});const Dt=new Set([yt.id]);j(Dt),(Me=pt.current)==null||Me.call(pt,Dt,Je),$(null);const Kt=J.clientX,ut=J.clientY,nt={x:yt.currentRect.x,y:yt.currentRect.y};yt.originalRect;let jt=!1,mt=0,At=0;q.current="move";const ht=fn=>{var Xt;const rn=fn.clientX-Kt,sn=fn.clientY-ut;if(!jt&&(Math.abs(rn)>2||Math.abs(sn)>2)&&(jt=!0),!jt)return;const Xn={x:nt.x+rn,y:nt.y+sn,width:yt.currentRect.width,height:yt.currentRect.height},Hn=Qy(Xn,rt,new Set([yt.id]),d);Ee(Hn.guides);const kn=rn+Hn.dx,wn=sn+Hn.dy;mt=kn,At=wn;const as=document.querySelector(`[data-rearrange-section="${yt.id}"]`);as&&(as.style.transform=`translate(${kn}px, ${wn}px)`),We(new Map([[yt.id,{x:nt.x+kn,y:nt.y+wn,width:yt.currentRect.width,height:yt.currentRect.height}]])),(Xt=ze.current)==null||Xt.call(ze,kn,wn)},Bt=()=>{var rn;window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",Bt),q.current=null,Ee([]),We(new Map);const fn=document.querySelector(`[data-rearrange-section="${yt.id}"]`);fn&&(fn.style.transform=""),jt&&n({...t,sections:rt.map(sn=>sn.id===yt.id?{...sn,currentRect:{...sn.currentRect,x:Math.max(0,nt.x+mt),y:Math.max(0,nt.y+At)}}:sn),originalOrder:Rt}),(rn=Et.current)==null||rn.call(Et,mt,At,jt)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",Bt)}else if(et&&Ce){J.preventDefault();for(const yt of b)try{const rt=document.querySelector(yt.selector);if(rt&&rt===Ce){const Rt=new Set([yt.id]);j(Rt),(_t=pt.current)==null||_t.call(pt,Rt,Je);return}}catch{}Je||(j(new Set),(Ie=pt.current)==null||Ie.call(pt,new Set,!1))}else Je||(j(new Set),(Wt=pt.current)==null||Wt.call(pt,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),_.useEffect(()=>{const H=J=>{const _e=J.target;if(!(_e.tagName==="INPUT"||_e.tagName==="TEXTAREA"||_e.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&C.size>0){J.preventDefault();const Ce=new Set(C);Pe(et=>{const Je=new Set(et);for(const Me of Ce)Je.add(Me);return Je}),j(new Set),Ht(()=>{const et=S.current;n({...et,sections:et.sections.filter(Je=>!Ce.has(Je.id)),originalOrder:et.originalOrder.filter(Je=>!Ce.has(Je))}),Pe(Je=>{const Me=new Set(Je);for(const _t of Ce)Me.delete(_t);return Me})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&C.size>0){J.preventDefault();const Ce=J.shiftKey?20:1,et=J.key==="ArrowLeft"?-Ce:J.key==="ArrowRight"?Ce:0,Je=J.key==="ArrowUp"?-Ce:J.key==="ArrowDown"?Ce:0;n({...t,sections:b.map(Me=>C.has(Me.id)?{...Me,currentRect:{...Me.currentRect,x:Math.max(0,Me.currentRect.x+et),y:Math.max(0,Me.currentRect.y+Je)}}:Me)});return}J.key==="Escape"&&C.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[C,b,t,n]);const oe=_.useCallback((H,J)=>{var Kt;if(H.button!==0)return;const _e=H.target;if(_e.closest(`.${Le.handle}`)||_e.closest(`.${Le.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let Ce;H.shiftKey||H.metaKey||H.ctrlKey?(Ce=new Set(C),Ce.has(J)?Ce.delete(J):Ce.add(J)):C.has(J)?Ce=new Set(C):Ce=new Set([J]),j(Ce),(Ce.size!==C.size||[...Ce].some(ut=>!C.has(ut)))&&((Kt=pt.current)==null||Kt.call(pt,Ce,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Je=H.clientX,Me=H.clientY,_t=new Map;for(const ut of b)Ce.has(ut.id)&&_t.set(ut.id,{x:ut.currentRect.x,y:ut.currentRect.y});q.current="move";let Ie=!1,Wt=0,yt=0;const rt=new Map;for(const ut of b)if(Ce.has(ut.id)){const nt=document.querySelector(`[data-rearrange-section="${ut.id}"]`);rt.set(ut.id,{outlineEl:nt,curW:ut.currentRect.width,curH:ut.currentRect.height})}const Rt=ut=>{var Hn;const nt=ut.clientX-Je,jt=ut.clientY-Me;if(nt===0&&jt===0)return;Ie=!0;let mt=1/0,At=1/0,ht=-1/0,Bt=-1/0;for(const[kn,{curW:wn,curH:as}]of rt){const Xt=_t.get(kn);if(!Xt)continue;const $n=Xt.x+nt,at=Xt.y+jt;mt=Math.min(mt,$n),At=Math.min(At,at),ht=Math.max(ht,$n+wn),Bt=Math.max(Bt,at+as)}const fn=Qy({x:mt,y:At,width:ht-mt,height:Bt-At},b,Ce,d),rn=nt+fn.dx,sn=jt+fn.dy;Wt=rn,yt=sn,Ee(fn.guides);for(const[,{outlineEl:kn}]of rt)kn&&(kn.style.transform=`translate(${rn}px, ${sn}px)`);const Xn=new Map;for(const[kn,{curW:wn,curH:as}]of rt){const Xt=_t.get(kn);if(Xt){const $n={x:Math.max(0,Xt.x+rn),y:Math.max(0,Xt.y+sn),width:wn,height:as};Xn.set(kn,$n)}}We(Xn),(Hn=ze.current)==null||Hn.call(ze,rn,sn)},Dt=ut=>{var nt,jt;window.removeEventListener("mousemove",Rt),window.removeEventListener("mouseup",Dt),q.current=null,Ee([]),We(new Map);for(const[,{outlineEl:mt}]of rt)mt&&(mt.style.transform="");if(Ie){const mt=ut.clientX-Je,At=ut.clientY-Me;if(Math.abs(mt)<5&&Math.abs(At)<5)n({...t,sections:b.map(ht=>{const Bt=_t.get(ht.id);return Bt?{...ht,currentRect:{...ht.currentRect,x:Bt.x,y:Bt.y}}:ht})});else{n({...t,sections:b.map(ht=>{const Bt=_t.get(ht.id);return Bt?{...ht,currentRect:{...ht.currentRect,x:Math.max(0,Bt.x+Wt),y:Math.max(0,Bt.y+yt)}}:ht})}),(nt=Et.current)==null||nt.call(Et,Wt,yt,!0);return}}(jt=Et.current)==null||jt.call(Et,0,0,!1)};window.addEventListener("mousemove",Rt),window.addEventListener("mouseup",Dt)},[C,b,t,n]),Re=_.useCallback((H,J,_e)=>{H.preventDefault(),H.stopPropagation();const Ce=b.find(Rt=>Rt.id===J);if(!Ce)return;j(new Set([J])),q.current="resize";const et=H.clientX,Je=H.clientY,Me={...Ce.currentRect};Ce.originalRect;const _t=Me.width/Me.height;let Ie={...Me};const Wt=document.querySelector(`[data-rearrange-section="${J}"]`),yt=Rt=>{const Dt=Rt.clientX-et,Kt=Rt.clientY-Je;let ut=Me.x,nt=Me.y,jt=Me.width,mt=Me.height;if(_e.includes("e")&&(jt=Math.max(Ju,Me.width+Dt)),_e.includes("w")&&(jt=Math.max(Ju,Me.width-Dt),ut=Me.x+Me.width-jt),_e.includes("s")&&(mt=Math.max(Ju,Me.height+Kt)),_e.includes("n")&&(mt=Math.max(Ju,Me.height-Kt),nt=Me.y+Me.height-mt),Rt.shiftKey)if(_e.length===2){const ht=Math.abs(jt-Me.width),Bt=Math.abs(mt-Me.height);ht>Bt?mt=jt/_t:jt=mt*_t,_e.includes("w")&&(ut=Me.x+Me.width-jt),_e.includes("n")&&(nt=Me.y+Me.height-mt)}else _e==="e"||_e==="w"?mt=jt/_t:jt=mt*_t,_e==="w"&&(ut=Me.x+Me.width-jt),_e==="n"&&(nt=Me.y+Me.height-mt);Ie={x:ut,y:nt,width:jt,height:mt},Wt&&(Wt.style.left=`${ut}px`,Wt.style.top=`${nt-I}px`,Wt.style.width=`${jt}px`,Wt.style.height=`${mt}px`),F({x:Rt.clientX+12,y:Rt.clientY+12,text:`${Math.round(jt)} × ${Math.round(mt)}`}),We(new Map([[J,Ie]]))},rt=()=>{window.removeEventListener("mousemove",yt),window.removeEventListener("mouseup",rt),F(null),q.current=null,We(new Map),n({...t,sections:b.map(Rt=>Rt.id===J?{...Rt,currentRect:Ie}:Rt)})};window.addEventListener("mousemove",yt),window.addEventListener("mouseup",rt)},[b,t,n,I]),Xe=_.useCallback(H=>{Pe(J=>{const _e=new Set(J);return _e.add(H),_e}),j(J=>{const _e=new Set(J);return _e.delete(H),_e}),Ht(()=>{const J=S.current;n({...J,sections:J.sections.filter(_e=>_e.id!==H),originalOrder:J.originalOrder.filter(_e=>_e!==H)}),Pe(_e=>{const Ce=new Set(_e);return Ce.delete(H),Ce})},180)},[n]),He=H=>{const J=H.originalRect,_e=H.currentRect;return Math.abs(J.x-_e.x)>1||Math.abs(J.y-_e.y)>1||Math.abs(J.width-_e.width)>1||Math.abs(J.height-_e.height)>1},Fe=H=>{const J=H.originalRect,_e=H.currentRect;return Math.abs(J.x-_e.x)>1||Math.abs(J.y-_e.y)>1},tt=H=>{const J=H.originalRect,_e=H.currentRect;return Math.abs(J.width-_e.width)>1||Math.abs(J.height-_e.height)>1};for(const H of b)be.current.has(H.id)||(Fe(H)?be.current.set(H.id,"move"):tt(H)&&be.current.set(H.id,"resize"));for(const H of be.current.keys())b.some(J=>J.id===H)||be.current.delete(H);const ot=b.filter(H=>{try{if(Ae.has(H.id)||C.has(H.id))return!0;const J=document.querySelector(H.selector);if(!J)return!1;const _e=J.getBoundingClientRect(),Ce=H.originalRect;return Math.abs(_e.width-Ce.width)+Math.abs(_e.height-Ce.height)<200}catch{return!1}}),gt=ot.filter(H=>He(H)),xt=ot.filter(H=>!He(H)),Ot=new Set(gt.map(H=>H.id));for(const H of me.current)Ot.has(H)||me.current.delete(H);const it=[...Ot].sort().join(",");for(const H of gt)qt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return _.useEffect(()=>{const H=Lt.current;Lt.current=Ot;const J=new Map;for(const _e of H)if(!Ot.has(_e)){if(!b.some(et=>et.id===_e))continue;const Ce=qt.current.get(_e);Ce&&(J.set(_e,{orig:Ce.originalRect,target:Ce.currentRect,isFixed:Ce.isFixed}),qt.current.delete(_e))}if(J.size>0){Ze(Ce=>{const et=new Map(Ce);for(const[Je,Me]of J)et.set(Je,Me);return et});const _e=Ht(()=>{Ze(Ce=>{const et=new Map(Ce);for(const Je of J.keys())et.delete(Je);return et})},250);return()=>clearTimeout(_e)}},[it,b]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${Le.rearrangeOverlay} ${i?"":Le.light} ${a?Le.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[he&&r.jsx("div",{className:Le.hoverHighlight,style:{left:he.x,top:he.y,width:he.w,height:he.h}}),xt.map(H=>{const J=H.currentRect,_e=H.isFixed?J.y:J.y-I,Ce=Gy,et=C.has(H.id);return r.jsxs("div",{"data-rearrange-section":H.id,className:`${Le.sectionOutline} ${et?Le.selected:""} ${E||a||Ae.has(H.id)?Le.exiting:""}`,style:{left:J.x,top:_e,width:J.width,height:J.height,borderColor:Ce.border,backgroundColor:Ce.bg,...Qe?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Je=>oe(Je,H.id),onDoubleClick:()=>ee(H.id),children:[r.jsx("span",{className:Le.sectionLabel,style:{backgroundColor:Ce.pill},children:H.label}),r.jsx("span",{className:`${Le.sectionAnnotation} ${H.note?Le.annotationVisible:""}`,children:(H.note&&ne.current.set(H.id,H.note),H.note||ne.current.get(H.id)||"")}),r.jsxs("span",{className:Le.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Le.deleteButton,onMouseDown:Je=>Je.stopPropagation(),onClick:()=>Xe(H.id),children:"✕"}),qy.map(Je=>r.jsx("div",{className:`${Le.handle} ${Le[`handle${Je.charAt(0).toUpperCase()}${Je.slice(1)}`]}`,onMouseDown:Me=>Re(Me,H.id,Je)},Je))]},H.id)}),gt.map(H=>{const J=H.currentRect,_e=H.isFixed?J.y:J.y-I,Ce=C.has(H.id),et=Fe(H),Je=tt(H);if(u&&!Ce)return null;const _t=!me.current.has(H.id);return _t&&me.current.add(H.id),r.jsxs("div",{"data-rearrange-section":H.id,className:`${Le.ghostOutline} ${Ce?Le.selected:""} ${E||a||Ae.has(H.id)?Le.exiting:""}`,style:{left:J.x,top:_e,width:J.width,height:J.height,...Qe?{}:{opacity:0,animation:"none",transition:"none"},..._t?{}:{animation:"none"}},onMouseDown:Ie=>oe(Ie,H.id),onDoubleClick:()=>ee(H.id),children:[r.jsx("span",{className:Le.sectionLabel,style:{backgroundColor:Gy.pill},children:H.label}),r.jsx("span",{className:`${Le.sectionAnnotation} ${H.note?Le.annotationVisible:""}`,children:(H.note&&ne.current.set(H.id,H.note),H.note||ne.current.get(H.id)||"")}),r.jsxs("span",{className:Le.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Le.deleteButton,onMouseDown:Ie=>Ie.stopPropagation(),onClick:()=>Xe(H.id),children:"✕"}),qy.map(Ie=>r.jsx("div",{className:`${Le.handle} ${Le[`handle${Ie.charAt(0).toUpperCase()}${Ie.slice(1)}`]}`,onMouseDown:Wt=>Re(Wt,H.id,Ie)},Ie)),r.jsx("span",{className:Le.ghostBadge,children:(()=>{const Ie=be.current.get(H.id);if(et&&Je){const[Wt,yt]=Ie==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Wt," ",r.jsxs("span",{className:Le.ghostBadgeExtra,children:["& ",yt]})]})}return`Suggested ${Je?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const J of gt){const _e=Te.get(J.id);H.push({id:J.id,orig:J.originalRect,target:_e||J.currentRect,isFixed:J.isFixed,isSelected:C.has(J.id),isExiting:Ae.has(J.id)})}for(const[J,_e]of Te)if(!H.some(Ce=>Ce.id===J)){const Ce=b.find(et=>et.id===J);Ce&&H.push({id:J,orig:Ce.originalRect,target:_e,isFixed:Ce.isFixed,isSelected:C.has(J)})}for(const[J,_e]of Ke)H.some(Ce=>Ce.id===J)||H.push({id:J,orig:_e.orig,target:_e.target,isFixed:_e.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:r.jsxs("svg",{className:`${Le.connectorSvg} ${E||a?Le.connectorExiting:""}`,children:[H.map(({id:J,orig:_e,target:Ce,isFixed:et,isSelected:Je,isExiting:Me})=>{const _t=_e.x+_e.width/2,Ie=(et?_e.y:_e.y-I)+_e.height/2,Wt=Ce.x+Ce.width/2,yt=(et?Ce.y:Ce.y-I)+Ce.height/2,rt=Wt-_t,Rt=yt-Ie,Dt=Math.sqrt(rt*rt+Rt*Rt);if(Dt<2)return null;const Kt=Math.min(1,Dt/40),ut=Math.min(Dt*.3,60),nt=Dt>0?-Rt/Dt:0,jt=Dt>0?rt/Dt:0,mt=(_t+Wt)/2+nt*ut,At=(Ie+yt)/2+jt*ut,ht=Te.has(J),Bt=ht||Je?1:.4,fn=ht||Je?1:.5;return r.jsxs("g",{className:Me?Le.connectorExiting:"",children:[r.jsx("path",{className:Le.connectorLine,d:`M ${_t} ${Ie} Q ${mt} ${At} ${Wt} ${yt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Bt*Kt}),r.jsx("circle",{className:Le.connectorDot,cx:_t,cy:Ie,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:fn*Kt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:Le.connectorDot,cx:Wt,cy:yt,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:fn*Kt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var yt;const H=b.find(rt=>rt.id===D);if(!H)return null;const J=H.currentRect,_e=H.isFixed?J.y:J.y-I,Ce=J.x+J.width/2,et=_e-8,Je=_e+J.height+8,Me=et>200,_t=Je<window.innerHeight-100,Ie=Math.max(160,Math.min(window.innerWidth-160,Ce));let Wt;return Me?Wt={left:Ie,bottom:window.innerHeight-et}:_t?Wt={left:Ie,top:Je}:Wt={left:Ie,top:Math.max(80,window.innerHeight/2-80)},r.jsx(jd,{element:H.label,placeholder:"Add a note about this section",initialValue:(yt=H.note)!=null?yt:"",submitLabel:V.current?"Save":"Set",onSubmit:re,onCancel:ae,onDelete:V.current?()=>{re("")}:void 0,isExiting:X,lightMode:!i,style:Wt})})(),ie&&r.jsx("div",{className:Le.sizeIndicator,style:{left:ie.x,top:ie.y},"data-feedback-toolbar":!0,children:ie.text}),fe.map((H,J)=>r.jsx("div",{className:Le.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-I,width:"100vw",height:1}},`${H.axis}-${H.pos}-${J}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function N6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function D6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function R6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?D6(n):N6(),a=R6(t);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-t.width)<2&&Math.abs(C.bottom-C.top-t.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const j=a.right>C.left+5&&a.left<C.right-5,E=a.bottom>C.top+5&&a.top<C.bottom-5;if(j&&C.bottom<=a.top+5){const T=Math.round(a.top-C.bottom);(!c||T<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(j&&C.top>=a.bottom-5){const T=Math.round(C.top-a.bottom);(!u||T<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(E&&C.right<=a.left+5){const T=Math.round(a.left-C.right);(!d||T<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(E&&C.left>=a.right-5){const T=Math.round(C.left-a.right);(!h||T<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,x=L6(t,y),b=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,S=B6(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function B6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function L6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function rb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function lb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=rb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function O6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(rb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Jy=15;function e1(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Jy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Jy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function z6(t){var d;if(t.length<2)return[];const n=e1(t.map(h=>({label:h.label,rect:h.originalRect}))),i=e1(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(S=>p.has(S)),b=x.join(", ");if(y.type!==h.type){const S=h.type==="row"?"y":"x",C=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${C}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const S=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${C}${j}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function cb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function $6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ub(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function db(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function I6(t){const n=$6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function t1(t,n,i,a="standard"){var E,T,O,L;if(t.length===0)return"";const c=[...t].sort((D,Q)=>Math.abs(D.y-Q.y)<20?D.x-Q.x:D.y-Q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,Q)=>{var W;const X=((W=Zi[D.type])==null?void 0:W.label)||D.type;u+=`${Q+1}. **${X}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=cb(n);u+=db(d),u+=`### Components
`,c.forEach((D,Q)=>{var Ae;const X=((Ae=Zi[D.type])==null?void 0:Ae.label)||D.type,W={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${Q+1}. **${X}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const V=Lm(W),ae=lb(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Pe of ae)u+=`   - ${Pe}
`;const re=ub(W,d);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const Q=h.find(X=>Math.abs(X.y-D.y)<30);Q?Q.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,Q)=>D.y-Q.y),h.forEach((D,Q)=>{D.items.sort((W,V)=>W.x-V.x);const X=D.items.map(W=>{var V;return((V=Zi[W.type])==null?void 0:V.label)||W.type});if(D.items.length===1){const V=D.items[0].width>n.width*.8;u+=`- Row ${Q+1} (y≈${Math.round(D.y)}): ${X[0]}${V?" — full width":""}
`}else u+=`- Row ${Q+1} (y≈${Math.round(D.y)}): ${X.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const Q=c[D],X=c[D+1],W=((E=Zi[Q.type])==null?void 0:E.label)||Q.type,V=((T=Zi[X.type])==null?void 0:T.label)||X.type,ee=Math.round(X.y-(Q.y+Q.height)),ae=Math.round(X.x-(Q.x+Q.width));Math.abs(Q.y-X.y)<30?u+=`- ${W} → ${V}: \`${ae}px\` horizontal gap
`:u+=`- ${W} → ${V}: \`${ee}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let Q=D+1;Q<c.length;Q++){const X=c[D],W=c[Q],V=((O=Zi[X.type])==null?void 0:O.label)||X.type,ee=((L=Zi[W.type])==null?void 0:L.label)||W.type,ae=Math.round(W.y-(X.y+X.height)),re=Math.round(W.x-(X.x+X.width));u+=`- ${V} ↔ ${ee}: h=\`${re}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,Q)=>{var W;const X=((W=Zi[D.type])==null?void 0:W.label)||D.type;u+=`${Q}. ${X} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),y=c.some(D=>D.type==="hero"),g=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),S=c.filter(D=>D.type==="form"),C=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const D=c.find(Q=>Q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function n1(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,S=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,C=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!S&&!C){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:S,sizeChanged:C})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=cb({width:d,height:h});n!=="compact"&&(u+=db(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const S=g.originalRect,C=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`,x){const E=Lm(S,y("original")),T=Lm(C,y("current")),O=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${O6(E,{x:S.x,y:S.y},O)}
`;const L=b?{width:C.width,height:C.height}:void 0,D=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,Q=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",W=lb(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${D}${Q}: ${W[0]}
`;for(let ee=1;ee<W.length;ee++)u+=`    ${W[ee]}
`}else u+=`  - Suggested position ${D}${Q}
`;const V=ub(C,p);V&&(u+=`  - CSS: ${V}
`)}const j=I6(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const E=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;E!==g.selector&&(u+=`  - Element: \`${E}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=z6(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",fb=7;function Ed(t){return`${Om}${t}`}function tm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-fb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function hb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function P6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-fb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));hb(t,a)}var pp="agentation-design-";function H6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function U6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function V6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var _p="agentation-rearrange-";function Y6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${_p}${t}`);return n?JSON.parse(n):null}catch{return null}}function W6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${_p}${t}`,JSON.stringify(n))}catch{}}function F6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${_p}${t}`)}catch{}}var gp="agentation-wireframe-";function X6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${gp}${t}`);return n?JSON.parse(n):null}catch{return null}}function s1(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${gp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${gp}${t}`)}catch{}}var mb="agentation-session-";function yp(t){return`${mb}${t}`}function G6(t){if(typeof window>"u")return null;try{return localStorage.getItem(yp(t))}catch{return null}}function nm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(yp(t),n)}catch{}}function q6(t){if(!(typeof window>"u"))try{localStorage.removeItem(yp(t))}catch{}}var pb=`${mb}toolbar-hidden`;function K6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(pb)==="1"}catch{return!1}}function Q6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(pb,"1")}catch{}}async function sm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function o1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function i1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var zn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},a1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),r1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Z6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function J6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=a1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...a1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...r1,...t.skipPatterns]:r1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:Z6,filter:t==null?void 0:t.filter}}function eC(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function tC(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function nC(t,n){const i=eC(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function sC(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&nC(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,oC=new WeakMap;function om(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function iC(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&om(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&om(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(om(n))return ul=!0,!0}return ul=!1,!1}var uc={map:oC};function aC(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function rC(t){const n=aC(t);return n?t[n]:null}function wr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function lC(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===zn.HostComponent||n===zn.HostText||n===zn.HostHoistable||n===zn.HostSingleton||n===zn.Fragment||n===zn.Mode||n===zn.Profiler||n===zn.DehydratedFragment||n===zn.HostRoot||n===zn.HostPortal||n===zn.ScopeComponent||n===zn.OffscreenComponent||n===zn.LegacyHiddenComponent||n===zn.CacheComponent||n===zn.TracingMarkerComponent||n===zn.Throw||n===zn.ViewTransitionComponent||n===zn.ActivityComponent)return null;if(n===zn.ForwardRef){const u=a;if(u!=null&&u.render){const d=wr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===zn.MemoComponent||n===zn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=wr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===zn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===zn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===zn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?wr(u._result):null}return n===zn.SuspenseComponent||n===zn.SuspenseListComponent?null:n===zn.IncompleteClassComponent||n===zn.IncompleteFunctionComponent||n===zn.FunctionComponent||n===zn.ClassComponent||n===zn.IndeterminateComponent?wr(i):null}function cC(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function uC(t,n){const i=J6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!iC()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?tC(t):void 0,u=[];try{let p=rC(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=lC(p);g&&!cC(g)&&sC(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function dC(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function fC(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function hC(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function mC(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function pC(){const t=Yv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function _C(t){const n=t.split(`
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
}`,SC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=wC}var qe=SC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function l1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,kC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=CC}var Hs=kC;function c1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:C,onClick:j,onContextMenu:E}){const T=(h||p)&&!y,O=T&&x==="delete",L=t.isMultiSelect,D=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",Q=c?Hs.exit:u?Hs.clearing:d?"":Hs.enter,X=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${Hs.marker} ${L?Hs.multiSelect:""} ${Q} ${O?Hs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:O?void 0:D,animationDelay:X},onMouseEnter:()=>S(t),onMouseLeave:C,onClick:W=>{W.stopPropagation(),c||j(t)},onContextMenu:E?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||E(t))}:void 0,children:[T?O?r.jsx(eb,{size:L?18:16}):r.jsx($S,{size:16}):r.jsx("span",{className:g!==null&&n>=g?Hs.renumber:void 0,children:n+1}),h&&!y&&r.jsxs("div",{className:`${Hs.markerTooltip} ${Hs.enter}`,style:b,children:[r.jsxs("span",{className:Hs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Hs.markerNote,children:t.comment})]})]})}function jC({x:t,y:n,isMultiSelect:i,isExiting:a}){return r.jsx("div",{className:`${Hs.marker} ${Hs.pending} ${i?Hs.multiSelect:""} ${a?Hs.exit:Hs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(jS,{size:12})})}function u1({annotation:t,fixed:n}){const i=t.isMultiSelect;return r.jsx("div",{className:`${Hs.marker} ${n?Hs.fixed:""} ${Hs.hovered} ${i?Hs.multiSelect:""} ${Hs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(eb,{size:i?12:10})})}var MC=`.styles-module__switchContainer___Ka-AB {
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
}`,EC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=MC}var im=EC,am=({className:t="",...n})=>r.jsxs("div",{className:`${im.switchContainer} ${t}`,children:[r.jsx("input",{className:im.switchInput,type:"checkbox",...n}),r.jsx("div",{className:im.switchThumb})]}),TC=`.styles-module__checkboxContainer___joqZk {
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
}`,AC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=TC}var sd=AC,NC=({className:t="",...n})=>r.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[r.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),DC=`.styles-module__container___w8eAF {
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
}`,RC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=DC}var d1=RC,f1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return r.jsxs("div",{className:`${d1.container} ${t}`,...u,children:[r.jsx(NC,{id:d,onChange:c,checked:a}),r.jsx("label",{className:d1.label,htmlFor:d,children:n}),i&&r.jsx(Er,{content:i})]})},BC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,LC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=BC}var St=LC;function OC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return r.jsx("div",{className:`${St.settingsPanel} ${h?St.enter:St.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:St.settingsPanelContainer,children:[r.jsxs("div",{className:`${St.settingsPage} ${y==="automations"?St.slideLeft:""}`,children:[r.jsxs("div",{className:St.settingsHeader,children:[r.jsx("a",{className:St.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:St.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:St.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:St.themeIconWrapper,children:r.jsx("span",{className:St.themeIcon,children:i?r.jsx(OS,{size:20}):r.jsx(zS,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("div",{className:St.settingsLabel,children:["Output Detail",r.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:St.cycleButton,onClick:()=>{const C=(fc.findIndex(j=>j.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[C].value})},children:[r.jsx("span",{className:St.cycleButtonText,children:(b=fc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),r.jsx("span",{className:St.cycleDots,children:fc.map(S=>r.jsx("span",{className:`${St.cycleDot} ${t.outputDetail===S.value?St.active:""}`},S.value))})]})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop} ${c?"":St.settingsRowDisabled}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["React Components",r.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(am,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["Hide Until Restart",r.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(am,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx("div",{className:`${St.settingsLabel} ${St.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:St.colorOptions,children:vc.map(S=>r.jsx("button",{className:`${St.colorOption} ${t.annotationColorId===S.id?St.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx(f1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(f1,{className:St.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),r.jsx("div",{className:St.divider}),r.jsxs("button",{className:St.settingsNavLink,onClick:()=>g("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:St.settingsNavLinkRight,children:[d&&u!=="disconnected"&&r.jsx("span",{className:`${St.mcpNavIndicator} ${St[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${St.settingsPage} ${St.automationsPage} ${y==="automations"?St.slideIn:""}`,children:[r.jsxs("button",{className:St.settingsBackButton,onClick:()=>g("main"),children:[r.jsx(PS,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["MCP Connection",r.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&r.jsx("div",{className:`${St.mcpStatusDot} ${St[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:St.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:St.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:`${St.settingsSection} ${St.settingsSectionGrow}`,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["Webhooks",r.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:St.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${St.autoSendLabel} ${t.webhooksEnabled?St.active:""} ${t.webhookUrl?"":St.disabled}`,children:"Auto-Send"}),r.jsx(am,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:St.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:St.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function rm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=uC(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var h1=!1,lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ra=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],zC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};zC();function Sr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function cm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:vC(t);if(i.found&&i.source)return bC(i.source,"path")}function $C({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:S,className:C}={}){var Ks,uo,B,G,K,ue,Y;const[j,E]=_.useState(!1),[T,O]=_.useState([]),[L,D]=_.useState(!0),[Q,X]=_.useState(()=>K6()),[W,V]=_.useState(!1),ee=_.useRef(null);_.useEffect(()=>{const w=A=>{const R=ee.current;R&&R.contains(A.target)&&A.stopPropagation()},k=["mousedown","click","pointerdown"];return k.forEach(A=>document.body.addEventListener(A,w)),()=>{k.forEach(A=>document.body.removeEventListener(A,w))}},[]);const[ae,re]=_.useState(!1),[Ae,Pe]=_.useState(!1),[ne,he]=_.useState(null),[$,ie]=_.useState({x:0,y:0}),[F,fe]=_.useState(null),[Ee,I]=_.useState(!1),[de,q]=_.useState("idle"),[me,be]=_.useState(!1),[Te,We]=_.useState(!1),[Ke,Ze]=_.useState(null),[Lt,qt]=_.useState(null),[pt,ze]=_.useState([]),[Et,Qe]=_.useState(null),[vt,we]=_.useState(null),[oe,Re]=_.useState(null),[Xe,He]=_.useState(null),[Fe,tt]=_.useState([]),[ot,gt]=_.useState(0),[xt,Ot]=_.useState(!1),[it,H]=_.useState(!1),[J,_e]=_.useState(!1),[Ce,et]=_.useState(!1),[Je,Me]=_.useState(!1),[_t,Ie]=_.useState("main"),[Wt,yt]=_.useState(!1),[rt,Rt]=_.useState(!1),[Dt,Kt]=_.useState(!1),[ut,nt]=_.useState([]),[jt,mt]=_.useState(null),At=_.useRef(!1),[ht,Bt]=_.useState(!1),[fn,rn]=_.useState(!1),[sn,Xn]=_.useState(1),[Hn,kn]=_.useState("new-page"),[wn,as]=_.useState(""),[Xt,$n]=_.useState(!1),[at,In]=_.useState(null),po=_.useRef(!1),Go=_.useRef({rearrange:null,placements:[]}),Us=_.useRef({rearrange:null,placements:[]}),[js,ai]=_.useState(0),[gs,bo]=_.useState(0),[qo,Bs]=_.useState(0),[jn,Ko]=_.useState(0),ws=_.useRef(new Set),yn=_.useRef(new Set),Un=_.useRef(null),so=_.useRef(),Vs=rt&&j&&!Dt&&ht;_.useEffect(()=>{if(Vs){rn(!1);const w=fl(()=>{rn(!0)});return()=>cancelAnimationFrame(w)}else rn(!1)},[Vs]);const rs=_.useRef(new Map),ts=_.useRef(new Map),Ys=_.useRef(),[xn,hn]=_.useState(!1),[Jt,Nn]=_.useState([]),yi=_.useRef(Jt);yi.current=Jt;const[Qo,Ii]=_.useState(null),oo=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[$o,us]=_.useState(!1),vo=_.useRef(null),[Dn,Ws]=_.useState([]),ds=_.useRef({cmd:!1,shift:!1}),Gn=()=>{yt(!0)},xi=()=>{yt(!1)},ys=()=>{$o||(vo.current=Ht(()=>us(!0),850))},bi=()=>{vo.current&&(clearTimeout(vo.current),vo.current=null),us(!1),xi()};_.useEffect(()=>()=>{vo.current&&clearTimeout(vo.current)},[]);const[Ut,xs]=_.useState(()=>{var w;try{const k=JSON.parse((w=localStorage.getItem("feedback-toolbar-settings"))!=null?w:"");return{...lm,...k,annotationColorId:vc.find(A=>A.id===k.annotationColorId)?k.annotationColorId:lm.annotationColorId}}catch{return lm}}),[Ms,Ao]=_.useState(!0),[vi,Io]=_.useState(!1),Es=()=>{var w;(w=ee.current)==null||w.classList.add(qe.disableTransitions),Ao(k=>!k),fl(()=>{var k;(k=ee.current)==null||k.classList.remove(qe.disableTransitions)})},ri=!1,Ls="off",[bn,wo]=_.useState(x!=null?x:null),Po=_.useRef(!1),[fs,Fs]=_.useState(g?"connecting":"disconnected"),[on,Xs]=_.useState(null),[Os,io]=_.useState(!1),[Ss,No]=_.useState(null),Gs=_.useRef(!1),[So,_o]=_.useState(new Set),[Rn,Mn]=_.useState(new Set),[Pn,Vn]=_.useState(!1),[ao,Ts]=_.useState(!1),[Cs,Ho]=_.useState(!1),ro=_.useRef(null),hs=_.useRef(null),ks=_.useRef(null),Do=_.useRef(null),go=_.useRef(!1),lo=_.useRef(0),Ro=_.useRef(null),Bo=_.useRef(null),wi=8,ta=50,Pi=_.useRef(null),Hi=_.useRef(null),Zo=_.useRef(null),Tt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ce)Me(!0);else{yt(!1),Ie("main");const w=Ht(()=>Me(!1),0);return()=>clearTimeout(w)}},[Ce]);const Si=j&&L&&!rt;_.useEffect(()=>{if(Si){Pe(!1),re(!0),_o(new Set);const w=Ht(()=>{_o(k=>{const A=new Set(k);return T.forEach(R=>A.add(R.id)),A})},350);return()=>clearTimeout(w)}else if(ae){Pe(!0);const w=Ht(()=>{re(!1),Pe(!1)},250);return()=>clearTimeout(w)}},[Si]),_.useEffect(()=>{H(!0),gt(window.scrollY);const w=tm(Tt);O(w.filter(Cr)),h1||(Io(!0),h1=!0,Ht(()=>Io(!1),750));try{const k=localStorage.getItem("feedback-toolbar-theme");k!==null&&Ao(k==="dark")}catch{}try{const k=localStorage.getItem("feedback-toolbar-position");if(k){const A=JSON.parse(k);typeof A.x=="number"&&typeof A.y=="number"&&Xs(A)}}catch{}},[Tt]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Ut))},[Ut,it]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-theme",Ms?"dark":"light")},[Ms,it]);const Ci=_.useRef(!1);_.useEffect(()=>{const w=Ci.current;Ci.current=Os,w&&!Os&&on&&it&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(on))},[Os,on,it]),_.useEffect(()=>{if(!g||!it||Po.current)return;Po.current=!0,Fs("connecting"),(async()=>{try{const k=G6(Tt),A=x||k;let R=!1;if(A)try{const P=await o1(g,A);wo(P.id),Fs("connected"),nm(Tt,P.id),R=!0;const te=tm(Tt),ve=new Set(P.annotations.map(Ne=>Ne.id)),pe=te.filter(Ne=>!ve.has(Ne.id));if(pe.length>0){const Ye=`${typeof window<"u"?window.location.origin:""}${Tt}`,dt=(await Promise.allSettled(pe.map(st=>cl(g,P.id,{...st,sessionId:P.id,url:Ye})))).map((st,lt)=>st.status==="fulfilled"?st.value:(console.warn("[Agentation] Failed to sync annotation:",st.reason),pe[lt])),ft=[...P.annotations,...dt];O(ft.filter(Cr)),cc(Tt,ft.filter(Cr),P.id)}else O(P.annotations.filter(Cr)),cc(Tt,P.annotations.filter(Cr),P.id)}catch(P){console.warn("[Agentation] Could not join session, creating new:",P),q6(Tt)}if(!R){const P=typeof window<"u"?window.location.href:"/",te=await sm(g,P);wo(te.id),Fs("connected"),nm(Tt,te.id),b==null||b(te.id);const ve=P6(),pe=typeof window<"u"?window.location.origin:"",Ne=[];for(const[Ye,ct]of ve){const dt=ct.filter(lt=>!lt._syncedTo);if(dt.length===0)continue;const ft=`${pe}${Ye}`,st=Ye===Tt;Ne.push((async()=>{try{const lt=st?te:await sm(g,ft),Bn=(await Promise.allSettled(dt.map(an=>cl(g,lt.id,{...an,sessionId:lt.id,url:ft})))).map((an,zt)=>an.status==="fulfilled"?an.value:(console.warn("[Agentation] Failed to sync annotation:",an.reason),dt[zt])).filter(Cr);if(cc(Ye,Bn,lt.id),st){const an=new Set(dt.map(zt=>zt.id));O(zt=>{const wt=zt.filter(Nt=>!an.has(Nt.id));return[...Bn,...wt]})}}catch(lt){console.warn(`[Agentation] Failed to sync annotations for ${Ye}:`,lt)}})())}await Promise.allSettled(Ne)}}catch(k){Fs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",k)}})()},[g,x,it,b,Tt]),_.useEffect(()=>{if(!g||!it)return;const w=async()=>{try{(await fetch(`${g}/health`)).ok?Fs("connected"):Fs("disconnected")}catch{Fs("disconnected")}};w();const k=VS(w,1e4);return()=>clearInterval(k)},[g,it]),_.useEffect(()=>{if(!g||!it||!bn)return;const w=new EventSource(`${g}/sessions/${bn}/events`),k=["resolved","dismissed"],A=R=>{var P;try{const te=JSON.parse(R.data);if(k.includes((P=te.payload)==null?void 0:P.status)){const ve=te.payload.id,pe=te.payload.kind;if(pe==="placement"){for(const[Ne,Ye]of rs.current)if(Ye===ve){rs.current.delete(Ne),nt(ct=>ct.filter(dt=>dt.id!==Ne));break}}else if(pe==="rearrange"){for(const[Ne,Ye]of ts.current)if(Ye===ve){ts.current.delete(Ne),In(ct=>{if(!ct)return null;const dt=ct.sections.filter(ft=>ft.id!==Ne);return dt.length===0?null:{...ct,sections:dt}});break}}else Mn(Ne=>new Set(Ne).add(ve)),Ht(()=>{O(Ne=>Ne.filter(Ye=>Ye.id!==ve)),Mn(Ne=>{const Ye=new Set(Ne);return Ye.delete(ve),Ye})},150)}}catch{}};return w.addEventListener("annotation.updated",A),()=>{w.removeEventListener("annotation.updated",A),w.close()}},[g,it,bn]),_.useEffect(()=>{if(!g||!it)return;const w=Bo.current==="disconnected",k=fs==="connected";Bo.current=fs,w&&k&&(async()=>{try{const R=tm(Tt);if(R.length===0)return;const te=`${typeof window<"u"?window.location.origin:""}${Tt}`;let ve=bn,pe=[];if(ve)try{pe=(await o1(g,ve)).annotations}catch{ve=null}ve||(ve=(await sm(g,te)).id,wo(ve),nm(Tt,ve));const Ne=new Set(pe.map(ct=>ct.id)),Ye=R.filter(ct=>!Ne.has(ct.id));if(Ye.length>0){const dt=(await Promise.allSettled(Ye.map(lt=>cl(g,ve,{...lt,sessionId:ve,url:te})))).map((lt,Sn)=>lt.status==="fulfilled"?lt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",lt.reason),Ye[Sn])),st=[...pe,...dt].filter(Cr);O(st),cc(Tt,st,ve)}}catch(R){console.warn("[Agentation] Failed to sync on reconnect:",R)}})()},[fs,g,it,bn,Tt]);const Ui=_.useCallback(()=>{W||(V(!0),et(!1),E(!1),Ht(()=>{Q6(!0),X(!0),V(!1)},400))},[W]);_.useEffect(()=>{if(!i||!it||!t||t.length===0||T.length>0)return;const w=[];return w.push(Ht(()=>{E(!0)},n-200)),t.forEach((k,A)=>{const R=n+A*300;w.push(Ht(()=>{const P=document.querySelector(k.selector);if(!P)return;const te=P.getBoundingClientRect(),{name:ve,path:pe}=_l(P),Ne={id:`demo-${Date.now()}-${A}`,x:(te.left+te.width/2)/window.innerWidth*100,y:te.top+te.height/2+window.scrollY,comment:k.comment,element:ve,elementPath:pe,timestamp:Date.now(),selectedText:k.selectedText,boundingBox:{x:te.left,y:te.top+window.scrollY,width:te.width,height:te.height},nearbyText:rc(P),cssClasses:lc(P)};O(Ye=>[...Ye,Ne])},R))}),()=>{w.forEach(clearTimeout)}},[i,it,t,n]),_.useEffect(()=>{const w=()=>{gt(window.scrollY),Ot(!0),Zo.current&&clearTimeout(Zo.current),Zo.current=Ht(()=>{Ot(!1)},150)};return window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),Zo.current&&clearTimeout(Zo.current)}},[]),_.useEffect(()=>{it&&T.length>0?bn?cc(Tt,T,bn):hb(Tt,T):it&&T.length===0&&localStorage.removeItem(Ed(Tt))},[T,Tt,it,bn]),_.useEffect(()=>{if(it&&!At.current){At.current=!0;const w=H6(Tt);w.length>0&&nt(w)}},[it,Tt]),_.useEffect(()=>{it&&At.current&&!ht&&(ut.length>0?U6(Tt,ut):V6(Tt))},[ut,Tt,it,ht]),_.useEffect(()=>{if(it&&!po.current){po.current=!0;const w=Y6(Tt);if(w){const k={...w,sections:w.sections.map(A=>{var R;return{...A,currentRect:(R=A.currentRect)!=null?R:{...A.originalRect}}})};In(k)}}},[it,Tt]),_.useEffect(()=>{it&&po.current&&!ht&&(at?W6(Tt,at):F6(Tt))},[at,Tt,it,ht]);const li=_.useRef(!1);_.useEffect(()=>{if(it&&!li.current){li.current=!0;const w=X6(Tt);w&&(Us.current={rearrange:w.rearrange,placements:w.placements||[]},w.purpose&&as(w.purpose))}},[it,Tt]),_.useEffect(()=>{var k,A,R,P,te;if(!it||!li.current)return;const w=Us.current;ht?((A=(k=at==null?void 0:at.sections)==null?void 0:k.length)!=null?A:0)>0||ut.length>0||wn?s1(Tt,{rearrange:at,placements:ut,purpose:wn}):td(Tt):((te=(P=(R=w.rearrange)==null?void 0:R.sections)==null?void 0:P.length)!=null?te:0)>0||w.placements.length>0||wn?s1(Tt,{rearrange:w.rearrange,placements:w.placements,purpose:wn}):td(Tt)},[at,ut,wn,ht,Tt,it]),_.useEffect(()=>{rt&&!at&&In({sections:[],originalOrder:[],detectedAt:Date.now()})},[rt,at]),_.useEffect(()=>{if(!g||!bn)return;const w=rs.current,k=new Set(ut.map(A=>A.id));for(const A of ut){if(w.has(A.id))continue;w.set(A.id,"");const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;cl(g,bn,{id:A.id,x:A.x/window.innerWidth*100,y:A.y,comment:`Place ${A.type} at (${Math.round(A.x)}, ${Math.round(A.y)}), ${A.width}×${A.height}px${A.text?` — "${A.text}"`:""}`,element:`[design:${A.type}]`,elementPath:"[placement]",timestamp:A.timestamp,url:R,intent:"change",severity:"important",kind:"placement",placement:{componentType:A.type,width:A.width,height:A.height,scrollY:A.scrollY,text:A.text}}).then(P=>{w.has(A.id)&&w.set(A.id,P.id)}).catch(P=>{console.warn("[Agentation] Failed to sync placement annotation:",P),w.delete(A.id)})}for(const[A,R]of w)k.has(A)||(w.delete(A),R&&tr(g,R).catch(()=>{}))},[ut,g,bn,Tt]),_.useEffect(()=>{if(!(!g||!bn))return Ys.current&&clearTimeout(Ys.current),Ys.current=Ht(()=>{const w=ts.current;if(!at||at.sections.length===0){for(const[,R]of w)R&&tr(g,R).catch(()=>{});w.clear();return}const k=new Set(at.sections.map(R=>R.id)),A=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;for(const R of at.sections){const P=R.originalRect,te=R.currentRect;if(!(Math.abs(P.x-te.x)>1||Math.abs(P.y-te.y)>1||Math.abs(P.width-te.width)>1||Math.abs(P.height-te.height)>1)){const Ne=w.get(R.id);Ne&&(w.delete(R.id),tr(g,Ne).catch(()=>{}));continue}const pe=w.get(R.id);pe?i1(g,pe,{comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)}`}).catch(Ne=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ne)}):(w.set(R.id,""),cl(g,bn,{id:R.id,x:te.x/window.innerWidth*100,y:te.y,comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)}`,element:R.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:A,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:R.selector,label:R.label,tagName:R.tagName,originalRect:P,currentRect:te}}).then(Ne=>{w.has(R.id)&&w.set(R.id,Ne.id)}).catch(Ne=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ne),w.delete(R.id)}))}for(const[R,P]of w)k.has(R)||(w.delete(R),P&&tr(g,P).catch(()=>{}))},300),()=>{Ys.current&&clearTimeout(Ys.current)}},[at,g,bn,Tt]);const yo=_.useRef(new Map);_.useLayoutEffect(()=>{var A;const w=(A=at==null?void 0:at.sections)!=null?A:[],k=new Set;if((rt||Dt)&&j)for(const R of w){k.add(R.id);try{const P=document.querySelector(R.selector);if(!P)continue;if(!yo.current.has(R.id)){const te={transform:P.style.transform,transformOrigin:P.style.transformOrigin,opacity:P.style.opacity,position:P.style.position,zIndex:P.style.zIndex,display:P.style.display},ve=[];let pe=P.parentElement;for(;pe&&pe!==document.body;){const Ye=getComputedStyle(pe);(Ye.overflow!=="visible"||Ye.overflowX!=="visible"||Ye.overflowY!=="visible")&&(ve.push({el:pe,overflow:pe.style.overflow}),pe.style.overflow="visible"),pe=pe.parentElement}getComputedStyle(P).display==="inline"&&(P.style.display="inline-block"),yo.current.set(R.id,{el:P,origStyles:te,ancestors:ve}),P.style.transformOrigin="top left",P.style.zIndex="9999"}}catch{}}for(const[R,P]of yo.current)if(!k.has(R)){const{el:te,origStyles:ve,ancestors:pe}=P;te.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",te.style.transform=ve.transform,te.style.transformOrigin=ve.transformOrigin,te.style.opacity=ve.opacity,te.style.position=ve.position,te.style.zIndex=ve.zIndex,yo.current.delete(R),Ht(()=>{te.style.transition="",te.style.display=ve.display;for(const Ne of pe)Ne.el.style.overflow=Ne.overflow},450)}},[at,rt,Dt,j]),_.useEffect(()=>()=>{for(const[,w]of yo.current){const{el:k,origStyles:A,ancestors:R}=w;k.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",k.style.transform=A.transform,k.style.transformOrigin=A.transformOrigin,k.style.opacity=A.opacity,k.style.position=A.position,k.style.zIndex=A.zIndex,Ht(()=>{k.style.transition="",k.style.display=A.display;for(const P of R)P.el.style.overflow=P.overflow},450)}yo.current.clear()},[]);const Uo=_.useCallback(()=>{Kt(!0),Rt(!1),mt(null),clearTimeout(so.current),so.current=Ht(()=>{Kt(!1)},300)},[]),ci=_.useCallback(()=>{rt&&(Kt(!0),Rt(!1),mt(null),clearTimeout(so.current),so.current=Ht(()=>{Kt(!1)},300)),E(!1)},[rt]),M=_.useCallback(()=>{J||(WS(),_e(!0))},[J]),U=_.useCallback(()=>{J&&(Vy(),_e(!1))},[J]),le=_.useCallback(()=>{J?U():M()},[J,M,U]),ke=_.useCallback(()=>{if(Dn.length===0)return;const w=Dn[0],k=w.element,A=Dn.length>1,R=Dn.map(P=>P.element.getBoundingClientRect());if(A){const P={left:Math.min(...R.map(lt=>lt.left)),top:Math.min(...R.map(lt=>lt.top)),right:Math.max(...R.map(lt=>lt.right)),bottom:Math.max(...R.map(lt=>lt.bottom))},te=Dn.slice(0,5).map(lt=>lt.name).join(", "),ve=Dn.length>5?` +${Dn.length-5} more`:"",pe=R.map(lt=>({x:lt.left,y:lt.top+window.scrollY,width:lt.width,height:lt.height})),Ye=Dn[Dn.length-1].element,ct=R[R.length-1],dt=ct.left+ct.width/2,ft=ct.top+ct.height/2,st=cm(Ye);fe({x:dt/window.innerWidth*100,y:st?ft:ft+window.scrollY,clientY:ft,element:`${Dn.length} elements: ${te}${ve}`,elementPath:"multi-select",boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.right-P.left,height:P.bottom-P.top},isMultiSelect:!0,isFixed:st,elementBoundingBoxes:pe,multiSelectElements:Dn.map(lt=>lt.element),targetElement:Ye,fullPath:Zu(k),accessibility:Qu(k),computedStyles:Ku(k),computedStylesObj:qu(k),nearbyElements:Gu(k),cssClasses:lc(k),nearbyText:rc(k),sourceFile:od(k)})}else{const P=R[0],te=cm(k);fe({x:P.left/window.innerWidth*100,y:te?P.top:P.top+window.scrollY,clientY:P.top,element:w.name,elementPath:w.path,boundingBox:{x:P.left,y:te?P.top:P.top+window.scrollY,width:P.width,height:P.height},isFixed:te,fullPath:Zu(k),accessibility:Qu(k),computedStyles:Ku(k),computedStylesObj:qu(k),nearbyElements:Gu(k),cssClasses:lc(k),nearbyText:rc(k),reactComponents:w.reactComponents,sourceFile:od(k)})}Ws([]),he(null)},[Dn]);_.useEffect(()=>{j||(fe(null),Re(null),He(null),tt([]),he(null),et(!1),Ws([]),ds.current={cmd:!1,shift:!1},J&&U())},[j,J,U]),_.useEffect(()=>()=>{Vy()},[]),_.useEffect(()=>{if(!j)return;const w=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),k=":not([data-agentation-root]):not([data-agentation-root] *)",A=document.createElement("style");return A.id="feedback-cursor-styles",A.textContent=`
      body ${k} {
        cursor: crosshair !important;
      }

      body :is(${w})${k} {
        cursor: text !important;
      }
    `,document.head.appendChild(A),()=>{const R=document.getElementById("feedback-cursor-styles");R&&R.remove()}},[j]),_.useEffect(()=>{if(Qo!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Qo,j]),_.useEffect(()=>{if(!j||F||xn||rt)return;const w=k=>{const A=k.composedPath()[0]||k.target;if(Yo(A,"[data-feedback-toolbar]")){he(null);return}const R=Sr(k.clientX,k.clientY);if(!R||Yo(R,"[data-feedback-toolbar]")){he(null);return}const{name:P,elementName:te,path:ve,reactComponents:pe}=rm(R,Ls),Ne=R.getBoundingClientRect();he({element:P,elementName:te,elementPath:ve,rect:Ne,reactComponents:pe}),ie({x:k.clientX,y:k.clientY})};return document.addEventListener("mousemove",w),()=>document.removeEventListener("mousemove",w)},[j,F,xn,rt,Ls,Jt]);const Ve=_.useCallback(w=>{var k;if(Re(w),Ze(null),qt(null),ze([]),(k=w.elementBoundingBoxes)!=null&&k.length){const A=[];for(const R of w.elementBoundingBoxes){const P=R.x+R.width/2,te=R.y+R.height/2-window.scrollY,ve=Sr(P,te);ve&&A.push(ve)}tt(A),He(null)}else if(w.boundingBox){const A=w.boundingBox,R=A.x+A.width/2,P=w.isFixed?A.y+A.height/2:A.y+A.height/2-window.scrollY,te=Sr(R,P);if(te){const ve=te.getBoundingClientRect(),pe=ve.width/A.width,Ne=ve.height/A.height;pe<.5||Ne<.5?He(null):He(te)}else He(null);tt([])}else He(null),tt([])},[]);_.useEffect(()=>{if(!j||xn||rt)return;const w=k=>{var Cn,Bn;if(go.current){go.current=!1;return}const A=k.composedPath()[0]||k.target;if(Yo(A,"[data-feedback-toolbar]")||Yo(A,"[data-annotation-popup]")||Yo(A,"[data-annotation-marker]"))return;if(k.metaKey&&k.shiftKey&&!F&&!oe){k.preventDefault(),k.stopPropagation();const an=Sr(k.clientX,k.clientY);if(!an)return;const zt=an.getBoundingClientRect(),{name:wt,path:Nt,reactComponents:Ln}=rm(an,Ls),pn=Dn.findIndex(fo=>fo.element===an);pn>=0?Ws(fo=>fo.filter((Lo,ss)=>ss!==pn)):Ws(fo=>[...fo,{element:an,rect:zt,name:wt,path:Nt,reactComponents:Ln!=null?Ln:void 0}]);return}const R=Yo(A,"button, a, input, select, textarea, [role='button'], [onclick]");if(Ut.blockInteractions&&R&&(k.preventDefault(),k.stopPropagation()),F){if(R&&!Ut.blockInteractions)return;k.preventDefault(),(Cn=Pi.current)==null||Cn.shake();return}if(oe){if(R&&!Ut.blockInteractions)return;k.preventDefault(),(Bn=Hi.current)==null||Bn.shake();return}k.preventDefault();const P=Sr(k.clientX,k.clientY);if(!P)return;const{name:te,path:ve,reactComponents:pe}=rm(P,Ls),Ne=P.getBoundingClientRect(),Ye=k.clientX/window.innerWidth*100,ct=cm(P),dt=ct?k.clientY:k.clientY+window.scrollY,ft=window.getSelection();let st;ft&&ft.toString().trim().length>0&&(st=ft.toString().trim().slice(0,500));const lt=qu(P),Sn=Ku(P);fe({x:Ye,y:dt,clientY:k.clientY,element:te,elementPath:ve,selectedText:st,boundingBox:{x:Ne.left,y:ct?Ne.top:Ne.top+window.scrollY,width:Ne.width,height:Ne.height},nearbyText:rc(P),cssClasses:lc(P),isFixed:ct,fullPath:Zu(P),accessibility:Qu(P),computedStyles:Sn,computedStylesObj:lt,nearbyElements:Gu(P),reactComponents:pe!=null?pe:void 0,sourceFile:od(P),targetElement:P}),he(null)};return document.addEventListener("click",w,!0),()=>document.removeEventListener("click",w,!0)},[j,xn,rt,F,oe,Ut.blockInteractions,Ls,Dn]),_.useEffect(()=>{if(!j)return;const w=R=>{R.key==="Meta"&&(ds.current.cmd=!0),R.key==="Shift"&&(ds.current.shift=!0)},k=R=>{const P=ds.current.cmd&&ds.current.shift;R.key==="Meta"&&(ds.current.cmd=!1),R.key==="Shift"&&(ds.current.shift=!1);const te=ds.current.cmd&&ds.current.shift;P&&!te&&Dn.length>0&&ke()},A=()=>{ds.current={cmd:!1,shift:!1},Ws([])};return document.addEventListener("keydown",w),document.addEventListener("keyup",k),window.addEventListener("blur",A),()=>{document.removeEventListener("keydown",w),document.removeEventListener("keyup",k),window.removeEventListener("blur",A)}},[j,Dn,ke]),_.useEffect(()=>{if(!j||F||xn||rt)return;const w=k=>{const A=k.composedPath()[0]||k.target;Yo(A,"[data-feedback-toolbar]")||Yo(A,"[data-annotation-marker]")||Yo(A,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(A.tagName)||A.isContentEditable||(k.preventDefault(),ro.current={x:k.clientX,y:k.clientY})};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[j,F,xn,rt]),_.useEffect(()=>{if(!j||F)return;const w=k=>{if(!ro.current)return;const A=k.clientX-ro.current.x,R=k.clientY-ro.current.y,P=A*A+R*R,te=wi*wi;if(!Cs&&P>=te&&(hs.current=ro.current,Ho(!0),k.preventDefault()),(Cs||P>=te)&&hs.current){if(ks.current){const wt=Math.min(hs.current.x,k.clientX),Nt=Math.min(hs.current.y,k.clientY),Ln=Math.abs(k.clientX-hs.current.x),pn=Math.abs(k.clientY-hs.current.y);ks.current.style.transform=`translate(${wt}px, ${Nt}px)`,ks.current.style.width=`${Ln}px`,ks.current.style.height=`${pn}px`}const ve=Date.now();if(ve-lo.current<ta)return;lo.current=ve;const pe=hs.current.x,Ne=hs.current.y,Ye=Math.min(pe,k.clientX),ct=Math.min(Ne,k.clientY),dt=Math.max(pe,k.clientX),ft=Math.max(Ne,k.clientY),st=(Ye+dt)/2,lt=(ct+ft)/2,Sn=new Set,Cn=[[Ye,ct],[dt,ct],[Ye,ft],[dt,ft],[st,lt],[st,ct],[st,ft],[Ye,lt],[dt,lt]];for(const[wt,Nt]of Cn){const Ln=document.elementsFromPoint(wt,Nt);for(const pn of Ln)pn instanceof HTMLElement&&Sn.add(pn)}const Bn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const wt of Bn)if(wt instanceof HTMLElement){const Nt=wt.getBoundingClientRect(),Ln=Nt.left+Nt.width/2,pn=Nt.top+Nt.height/2,fo=Ln>=Ye&&Ln<=dt&&pn>=ct&&pn<=ft,Lo=Math.min(Nt.right,dt)-Math.max(Nt.left,Ye),ss=Math.min(Nt.bottom,ft)-Math.max(Nt.top,ct),ki=Lo>0&&ss>0?Lo*ss:0,Vi=Nt.width*Nt.height,Yi=Vi>0?ki/Vi:0;(fo||Yi>.5)&&Sn.add(wt)}const an=[],zt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const wt of Sn){if(Yo(wt,"[data-feedback-toolbar]")||Yo(wt,"[data-annotation-marker]"))continue;const Nt=wt.getBoundingClientRect();if(!(Nt.width>window.innerWidth*.8&&Nt.height>window.innerHeight*.5)&&!(Nt.width<10||Nt.height<10)&&Nt.left<dt&&Nt.right>Ye&&Nt.top<ft&&Nt.bottom>ct){const Ln=wt.tagName;let pn=zt.has(Ln);if(!pn&&(Ln==="DIV"||Ln==="SPAN")){const fo=wt.textContent&&wt.textContent.trim().length>0,Lo=wt.onclick!==null||wt.getAttribute("role")==="button"||wt.getAttribute("role")==="link"||wt.classList.contains("clickable")||wt.hasAttribute("data-clickable");(fo||Lo)&&!wt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(pn=!0)}if(pn){let fo=!1;for(const Lo of an)if(Lo.left<=Nt.left&&Lo.right>=Nt.right&&Lo.top<=Nt.top&&Lo.bottom>=Nt.bottom){fo=!0;break}fo||an.push(Nt)}}}if(Do.current){const wt=Do.current;for(;wt.children.length>an.length;)wt.removeChild(wt.lastChild);an.forEach((Nt,Ln)=>{let pn=wt.children[Ln];pn||(pn=document.createElement("div"),pn.className=qe.selectedElementHighlight,wt.appendChild(pn)),pn.style.transform=`translate(${Nt.left}px, ${Nt.top}px)`,pn.style.width=`${Nt.width}px`,pn.style.height=`${Nt.height}px`})}}};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[j,F,Cs,wi]),_.useEffect(()=>{if(!j)return;const w=k=>{const A=Cs,R=hs.current;if(Cs&&R){go.current=!0;const P=Math.min(R.x,k.clientX),te=Math.min(R.y,k.clientY),ve=Math.max(R.x,k.clientX),pe=Math.max(R.y,k.clientY),Ne=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(st=>{if(!(st instanceof HTMLElement)||Yo(st,"[data-feedback-toolbar]")||Yo(st,"[data-annotation-marker]"))return;const lt=st.getBoundingClientRect();lt.width>window.innerWidth*.8&&lt.height>window.innerHeight*.5||lt.width<10||lt.height<10||lt.left<ve&&lt.right>P&&lt.top<pe&&lt.bottom>te&&Ne.push({element:st,rect:lt})});const ct=Ne.filter(({element:st})=>!Ne.some(({element:lt})=>lt!==st&&st.contains(lt))),dt=k.clientX/window.innerWidth*100,ft=k.clientY+window.scrollY;if(ct.length>0){const st=ct.reduce((zt,{rect:wt})=>({left:Math.min(zt.left,wt.left),top:Math.min(zt.top,wt.top),right:Math.max(zt.right,wt.right),bottom:Math.max(zt.bottom,wt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),lt=ct.slice(0,5).map(({element:zt})=>_l(zt).name).join(", "),Sn=ct.length>5?` +${ct.length-5} more`:"",Cn=ct[0].element,Bn=qu(Cn),an=Ku(Cn);fe({x:dt,y:ft,clientY:k.clientY,element:`${ct.length} elements: ${lt}${Sn}`,elementPath:"multi-select",boundingBox:{x:st.left,y:st.top+window.scrollY,width:st.right-st.left,height:st.bottom-st.top},isMultiSelect:!0,fullPath:Zu(Cn),accessibility:Qu(Cn),computedStyles:an,computedStylesObj:Bn,nearbyElements:Gu(Cn),cssClasses:lc(Cn),nearbyText:rc(Cn),sourceFile:od(Cn)})}else{const st=Math.abs(ve-P),lt=Math.abs(pe-te);st>20&&lt>20&&fe({x:dt,y:ft,clientY:k.clientY,element:"Area selection",elementPath:`region at (${Math.round(P)}, ${Math.round(te)})`,boundingBox:{x:P,y:te+window.scrollY,width:st,height:lt},isMultiSelect:!0})}he(null)}else A&&(go.current=!0);ro.current=null,hs.current=null,Ho(!1),Do.current&&(Do.current.innerHTML="")};return document.addEventListener("mouseup",w),()=>document.removeEventListener("mouseup",w)},[j,Cs]);const Ge=_.useCallback(async(w,k,A)=>{const R=Ut.webhookUrl||S;if(!R||!Ut.webhooksEnabled&&!A)return!1;try{return(await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:w,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...k})})).ok}catch(P){return console.warn("[Agentation] Webhook failed:",P),!1}},[S,Ut.webhookUrl,Ut.webhooksEnabled]),Pt=_.useCallback(w=>{var A;if(!F)return;const k={id:Date.now().toString(),x:F.x,y:F.y,comment:w,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&bn?{sessionId:bn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};O(R=>[...R,k]),Ro.current=k.id,Ht(()=>{Ro.current=null},300),Ht(()=>{_o(R=>new Set(R).add(k.id))},250),a==null||a(k),Ge("annotation.add",{annotation:k}),Vn(!0),Ht(()=>{fe(null),Vn(!1)},150),(A=window.getSelection())==null||A.removeAllRanges(),g&&bn&&cl(g,bn,k).then(R=>{R.id!==k.id&&(O(P=>P.map(te=>te.id===k.id?{...te,id:R.id}:te)),_o(P=>{const te=new Set(P);return te.delete(k.id),te.add(R.id),te}))}).catch(R=>{console.warn("[Agentation] Failed to sync annotation:",R)})},[F,a,Ge,g,bn]),It=_.useCallback(()=>{Vn(!0),Ht(()=>{fe(null),Vn(!1)},150)},[]),Ft=_.useCallback(w=>{const k=T.findIndex(R=>R.id===w),A=T[k];(oe==null?void 0:oe.id)===w&&(Ts(!0),Ht(()=>{Re(null),He(null),tt([]),Ts(!1)},150)),Qe(w),Mn(R=>new Set(R).add(w)),A&&(c==null||c(A),Ge("annotation.delete",{annotation:A})),g&&tr(g,w).catch(R=>{console.warn("[Agentation] Failed to delete annotation from server:",R)}),Ht(()=>{O(R=>R.filter(P=>P.id!==w)),Mn(R=>{const P=new Set(R);return P.delete(w),P}),Qe(null),k<T.length-1&&(we(k),Ht(()=>we(null),200))},150)},[T,oe,c,Ge,g]),Gt=_.useCallback(w=>{var k;if(!w){Ze(null),qt(null),ze([]);return}if(Ze(w.id),(k=w.elementBoundingBoxes)!=null&&k.length){const A=[];for(const R of w.elementBoundingBoxes){const P=R.x+R.width/2,te=R.y+R.height/2-window.scrollY,pe=document.elementsFromPoint(P,te).find(Ne=>!Ne.closest("[data-annotation-marker]")&&!Ne.closest("[data-agentation-root]"));pe&&A.push(pe)}ze(A),qt(null)}else if(w.boundingBox){const A=w.boundingBox,R=A.x+A.width/2,P=w.isFixed?A.y+A.height/2:A.y+A.height/2-window.scrollY,te=Sr(R,P);if(te){const ve=te.getBoundingClientRect(),pe=ve.width/A.width,Ne=ve.height/A.height;pe<.5||Ne<.5?qt(null):qt(te)}else qt(null);ze([])}else qt(null),ze([])},[]),tn=_.useCallback(w=>{if(!oe)return;const k={...oe,comment:w};O(A=>A.map(R=>R.id===oe.id?k:R)),u==null||u(k),Ge("annotation.update",{annotation:k}),g&&i1(g,oe.id,{comment:w}).catch(A=>{console.warn("[Agentation] Failed to update annotation on server:",A)}),Ts(!0),Ht(()=>{Re(null),He(null),tt([]),Ts(!1)},150)},[oe,u,Ge,g]),mn=_.useCallback(()=>{Ts(!0),Ht(()=>{Re(null),He(null),tt([]),Ts(!1)},150)},[]),cn=_.useCallback(()=>{const w=T.length,k=ut.length>0||!!at;if(w===0&&Jt.length===0&&!k)return;if(d==null||d(T),Ge("annotations.clear",{annotations:T}),g){Promise.all(T.map(P=>tr(g,P.id).catch(te=>{console.warn("[Agentation] Failed to delete annotation from server:",te)})));for(const[,P]of rs.current)P&&tr(g,P).catch(()=>{});rs.current.clear();for(const[,P]of ts.current)P&&tr(g,P).catch(()=>{});ts.current.clear()}We(!0),be(!0),Nn([]);const A=oo.current;if(A){const P=A.getContext("2d");P&&P.clearRect(0,0,A.width,A.height)}(ut.length>0||at)&&(Bs(P=>P+1),Ko(P=>P+1),Ht(()=>{nt([]),In(null)},200)),ht&&Bt(!1),wn&&as(""),Us.current={rearrange:null,placements:[]},td(Tt);const R=w*30+200;Ht(()=>{O([]),_o(new Set),localStorage.removeItem(Ed(Tt)),We(!1)},R),Ht(()=>be(!1),1500)},[Tt,T,Jt,ut,at,ht,wn,d,Ge,g]),zs=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt,k=rt&&ht;let A;if(k){if(ut.length===0&&!at&&!wn)return;A=""}else{if(A=l1(T,w,Ut.outputDetail),!A&&Jt.length===0&&ut.length===0&&!at)return;A||(A=`## Page Feedback: ${w}
`)}if(!k&&Jt.length>0){const R=new Set;for(const pe of T)pe.drawingIndex!=null&&R.add(pe.drawingIndex);const P=oo.current;P&&(P.style.visibility="hidden");const te=[],ve=window.scrollY;for(let pe=0;pe<Jt.length;pe++){if(R.has(pe))continue;const Ne=Jt[pe];if(Ne.points.length<2)continue;const Ye=Ne.fixed?Ne.points:Ne.points.map(qn=>({x:qn.x,y:qn.y-ve}));let ct=1/0,dt=1/0,ft=-1/0,st=-1/0;for(const qn of Ye)ct=Math.min(ct,qn.x),dt=Math.min(dt,qn.y),ft=Math.max(ft,qn.x),st=Math.max(st,qn.y);const lt=ft-ct,Sn=st-dt,Cn=Math.hypot(lt,Sn),Bn=Ye[0],an=Ye[Ye.length-1],zt=Math.hypot(an.x-Bn.x,an.y-Bn.y);let wt;const Nt=zt<Cn*.35,Ln=lt/Math.max(Sn,1);if(Nt&&Cn>20){const qn=Math.max(lt,Sn)*.15;let Wi=0;for(const na of Ye){const Pc=na.x-ct<qn,Wd=ft-na.x<qn,Fd=na.y-dt<qn,Xd=st-na.y<qn;(Pc||Wd)&&(Fd||Xd)&&Wi++}wt=Wi>Ye.length*.15?"box":"circle"}else Ln>3&&Sn<40?wt="underline":zt>Cn*.5?wt="arrow":wt="drawing";const pn=Math.min(10,Ye.length),fo=Math.max(1,Math.floor(Ye.length/pn)),Lo=new Set,ss=[],ki=[Bn];for(let qn=fo;qn<Ye.length-1;qn+=fo)ki.push(Ye[qn]);ki.push(an);for(const qn of ki){const Wi=Sr(qn.x,qn.y);if(!Wi||Lo.has(Wi)||Yo(Wi,"[data-feedback-toolbar]"))continue;Lo.add(Wi);const{name:na}=_l(Wi);ss.includes(na)||ss.push(na)}const Vi=`${Math.round(ct)},${Math.round(dt)} → ${Math.round(ft)},${Math.round(st)}`;let Yi;(wt==="circle"||wt==="box")&&ss.length>0?Yi=`${wt==="box"?"Boxed":"Circled"} **${ss[0]}**${ss.length>1?` (and ${ss.slice(1).join(", ")})`:""} (region: ${Vi})`:wt==="underline"&&ss.length>0?Yi=`Underlined **${ss[0]}** (${Vi})`:wt==="arrow"&&ss.length>=2?Yi=`Arrow from **${ss[0]}** to **${ss[ss.length-1]}** (${Math.round(Bn.x)},${Math.round(Bn.y)} → ${Math.round(an.x)},${Math.round(an.y)})`:ss.length>0?Yi=`${wt==="arrow"?"Arrow":"Drawing"} near **${ss.join("**, **")}** (region: ${Vi})`:Yi=`Drawing at ${Vi}`,te.push(Yi)}P&&(P.style.visibility=""),te.length>0&&(A+=`
**Drawings:**
`,te.forEach((pe,Ne)=>{A+=`${Ne+1}. ${pe}
`}))}if((ut.length>0||k&&wn)&&(A+=`
`+t1(ut,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ht,wireframePurpose:wn||void 0},Ut.outputDetail)),at){const R=n1(at,Ut.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(A+=`
`+R)}if(y)try{await navigator.clipboard.writeText(A)}catch{}h==null||h(A),I(!0),Ht(()=>I(!1),2e3),Ut.autoClearAfterCopy&&Ht(()=>cn(),500)},[T,Jt,ut,at,ht,rt,Hn,wn,Tt,Ut.outputDetail,Ls,Ut.autoClearAfterCopy,cn,y,h]),Vt=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;let k=l1(T,w,Ut.outputDetail);if(!k&&ut.length===0&&!at)return;if(k||(k=`## Page Feedback: ${w}
`),ut.length>0&&(k+=`
`+t1(ut,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ht,wireframePurpose:wn||void 0},Ut.outputDetail)),at){const R=n1(at,Ut.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(k+=`
`+R)}p&&p(k,T),q("sending"),await new Promise(R=>Ht(R,150));const A=await Ge("submit",{output:k,annotations:T},!0);q(A?"sent":"failed"),Ht(()=>q("idle"),2500),A&&Ut.autoClearAfterCopy&&Ht(()=>cn(),500)},[p,Ge,T,ut,at,ht,Hn,Tt,Ut.outputDetail,Ls,Ut.autoClearAfterCopy,cn]);_.useEffect(()=>{if(!Ss)return;const w=10,k=R=>{const P=R.clientX-Ss.x,te=R.clientY-Ss.y,ve=Math.sqrt(P*P+te*te);if(!Os&&ve>w&&io(!0),Os||ve>w){let pe=Ss.toolbarX+P,Ne=Ss.toolbarY+te;const Ye=20,ct=337,dt=44,st=ct-(j?fs==="connected"?297:257:44),lt=Ye-st,Sn=window.innerWidth-Ye-ct;pe=Math.max(lt,Math.min(Sn,pe)),Ne=Math.max(Ye,Math.min(window.innerHeight-dt-Ye,Ne)),Xs({x:pe,y:Ne})}},A=()=>{Os&&(Gs.current=!0),io(!1),No(null)};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",A),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",A)}},[Ss,Os,j,fs]);const ns=_.useCallback(w=>{var te,ve;if(w.target.closest("button")||w.target.closest("[data-agentation-settings-panel]"))return;const k=w.currentTarget.parentElement;if(!k)return;const A=k.getBoundingClientRect(),R=(te=on==null?void 0:on.x)!=null?te:A.left,P=(ve=on==null?void 0:on.y)!=null?ve:A.top;No({x:w.clientX,y:w.clientY,toolbarX:R,toolbarY:P})},[on]);if(_.useEffect(()=>{if(!on)return;const w=()=>{let P=on.x,te=on.y;const Ne=20-(337-(j?fs==="connected"?297:257:44)),Ye=window.innerWidth-20-337;P=Math.max(Ne,Math.min(Ye,P)),te=Math.max(20,Math.min(window.innerHeight-44-20,te)),(P!==on.x||te!==on.y)&&Xs({x:P,y:te})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[on,j,fs]),_.useEffect(()=>{const w=k=>{const A=k.target,R=A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.isContentEditable;if(k.key==="Escape"){if(rt){jt?mt(null):Uo();return}if(xn){hn(!1);return}if(Dn.length>0){Ws([]);return}F||j&&(Gn(),E(!1))}if((k.metaKey||k.ctrlKey)&&k.shiftKey&&(k.key==="f"||k.key==="F")){k.preventDefault(),Gn(),j?ci():E(!0);return}if(!(R||k.metaKey||k.ctrlKey)&&((k.key==="p"||k.key==="P")&&(k.preventDefault(),Gn(),le()),(k.key==="l"||k.key==="L")&&(k.preventDefault(),Gn(),xn&&hn(!1),Ce&&et(!1),F&&It(),rt?Uo():Rt(!0)),(k.key==="h"||k.key==="H")&&T.length>0&&(k.preventDefault(),Gn(),D(P=>!P)),(k.key==="c"||k.key==="C")&&(T.length>0||ut.length>0||at)&&(k.preventDefault(),Gn(),zs()),(k.key==="x"||k.key==="X")&&(T.length>0||ut.length>0||at)&&(k.preventDefault(),Gn(),cn(),ut.length>0&&nt([]),at&&In(null)),k.key==="s"||k.key==="S")){const P=ra(Ut.webhookUrl)||ra(S||"");T.length>0&&P&&de==="idle"&&(k.preventDefault(),Gn(),Vt())}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j,xn,rt,jt,ut,at,F,T.length,Ut.webhookUrl,S,de,Vt,le,zs,cn,Dn]),!it||Q)return null;const bs=T.length>0,ms=T.filter(w=>!Rn.has(w.id)&&w.kind!=="placement"&&w.kind!=="rearrange"),co=ms.length>0,qs=T.filter(w=>Rn.has(w.id)),$s=w=>{const te=w.x/100*window.innerWidth,ve=typeof w.y=="string"?parseFloat(w.y):w.y,pe={};window.innerHeight-ve-22-10<80&&(pe.top="auto",pe.bottom="calc(100% + 10px)");const Ye=te-200/2,ct=10;if(Ye<ct){const dt=ct-Ye;pe.left=`calc(50% + ${dt}px)`}else if(Ye+200>window.innerWidth-ct){const dt=Ye+200-(window.innerWidth-ct);pe.left=`calc(50% - ${dt}px)`}return pe};return Bc.createPortal(r.jsxs("div",{ref:ee,style:{display:"contents"},"data-agentation-theme":Ms?"dark":"light","data-agentation-accent":Ut.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${qe.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:on?{left:on.x,top:on.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${qe.toolbarContainer} ${j?qe.expanded:qe.collapsed} ${vi?qe.entrance:""} ${W?qe.hiding:""} ${!Ut.webhooksEnabled&&(ra(Ut.webhookUrl)||ra(S||""))?qe.serverConnected:""}`,onClick:j?void 0:w=>{if(Gs.current){Gs.current=!1,w.preventDefault();return}E(!0)},onMouseDown:ns,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${qe.toggleContent} ${j?qe.hidden:qe.visible}`,children:[r.jsx(MS,{size:24}),co&&r.jsx("span",{className:`${qe.badge} ${j?qe.fadeOut:""} ${vi?qe.entrance:""}`,children:ms.length})]}),r.jsxs("div",{className:`${qe.controlsContent} ${j?qe.visible:qe.hidden} ${on&&on.y<100?qe.tooltipBelow:""} ${Wt||Ce?qe.tooltipsHidden:""} ${$o?qe.tooltipsInSession:""}`,onMouseEnter:ys,onMouseLeave:bi,children:[r.jsxs("div",{className:`${qe.buttonWrapper} ${on&&on.x<120?qe.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:qe.controlButton,onClick:w=>{w.stopPropagation(),Gn(),le()},"data-active":J,children:r.jsx(DS,{size:24,isPaused:J})}),r.jsxs("span",{className:qe.buttonTooltip,children:[J?"Resume animations":"Pause animations",r.jsx("span",{className:qe.shortcut,children:"P"})]})]}),r.jsxs("div",{className:qe.buttonWrapper,children:[r.jsx("button",{className:`${qe.controlButton} ${Ms?"":qe.light}`,onClick:w=>{w.stopPropagation(),Gn(),xn&&hn(!1),Ce&&et(!1),F&&It(),rt?Uo():Rt(!0)},"data-active":rt,style:rt&&ht?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(HS,{size:21})}),r.jsxs("span",{className:qe.buttonTooltip,children:[rt?"Exit layout mode":"Layout mode",r.jsx("span",{className:qe.shortcut,children:"L"})]})]}),r.jsxs("div",{className:qe.buttonWrapper,children:[r.jsx("button",{className:qe.controlButton,onClick:w=>{w.stopPropagation(),Gn(),D(!L)},disabled:!bs||rt,children:r.jsx(NS,{size:24,isOpen:L})}),r.jsxs("span",{className:qe.buttonTooltip,children:[L?"Hide markers":"Show markers",r.jsx("span",{className:qe.shortcut,children:"H"})]})]}),r.jsxs("div",{className:qe.buttonWrapper,children:[r.jsx("button",{className:`${qe.controlButton} ${Ee?qe.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Gn(),zs()},disabled:rt&&ht?ut.length===0&&!((Ks=at==null?void 0:at.sections)!=null&&Ks.length):!bs&&Jt.length===0&&ut.length===0&&!((uo=at==null?void 0:at.sections)!=null&&uo.length),"data-active":Ee,children:r.jsx(TS,{size:24,copied:Ee,tint:rt&&ht&&(ut.length>0||(B=at==null?void 0:at.sections)!=null&&B.length)?"#f97316":void 0})}),r.jsxs("span",{className:qe.buttonTooltip,children:[rt&&ht?"Copy layout":"Copy feedback",r.jsx("span",{className:qe.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${qe.buttonWrapper} ${qe.sendButtonWrapper} ${j&&!Ut.webhooksEnabled&&(ra(Ut.webhookUrl)||ra(S||""))?qe.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${qe.controlButton} ${de==="sent"||de==="failed"?qe.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Gn(),Vt()},disabled:!bs||!ra(Ut.webhookUrl)&&!ra(S||"")||de==="sending","data-no-hover":de==="sent"||de==="failed",tabIndex:ra(Ut.webhookUrl)||ra(S||"")?0:-1,children:[r.jsx(AS,{size:24,state:de}),bs&&de==="idle"&&r.jsx("span",{className:qe.buttonBadge,children:T.length})]}),r.jsxs("span",{className:qe.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:qe.shortcut,children:"S"})]})]}),r.jsxs("div",{className:qe.buttonWrapper,children:[r.jsx("button",{className:qe.controlButton,onClick:w=>{w.stopPropagation(),Gn(),cn()},disabled:!bs&&Jt.length===0&&ut.length===0&&!((G=at==null?void 0:at.sections)!=null&&G.length),"data-danger":!0,children:r.jsx(BS,{size:24})}),r.jsxs("span",{className:qe.buttonTooltip,children:["Clear all",r.jsx("span",{className:qe.shortcut,children:"X"})]})]}),r.jsxs("div",{className:qe.buttonWrapper,children:[r.jsx("button",{className:qe.controlButton,onClick:w=>{w.stopPropagation(),Gn(),rt&&Uo(),et(!Ce)},children:r.jsx(RS,{size:24})}),g&&fs!=="disconnected"&&r.jsx("span",{className:`${qe.mcpIndicator} ${qe[fs]} ${Ce?qe.hidden:""}`,title:fs==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:qe.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:qe.divider}),r.jsxs("div",{className:`${qe.buttonWrapper} ${on&&typeof window<"u"&&on.x>window.innerWidth-120?qe.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:qe.controlButton,onClick:w=>{w.stopPropagation(),Gn(),ci()},children:r.jsx(LS,{size:24})}),r.jsxs("span",{className:qe.buttonTooltip,children:["Exit",r.jsx("span",{className:qe.shortcut,children:"Esc"})]})]})]}),r.jsx(_6,{visible:rt&&j,activeType:jt,onSelect:w=>{mt(jt===w?null:w)},isDarkMode:Ms,sectionCount:(K=at==null?void 0:at.sections.length)!=null?K:0,onDetectSections:()=>{var ve,pe;const w=M6(),k=(ve=at==null?void 0:at.sections)!=null?ve:[],A=new Set(k.map(Ne=>Ne.selector)),R=w.filter(Ne=>!A.has(Ne.selector)),P=[...k,...R],te=[...(pe=at==null?void 0:at.originalOrder)!=null?pe:[],...R.map(Ne=>Ne.id)];In({sections:P,originalOrder:te,detectedAt:Date.now()})},placementCount:ut.length,onClearPlacements:()=>{Bs(w=>w+1),Ko(w=>w+1),Ht(()=>{In({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ht,onBlankCanvasChange:w=>{const k={sections:[],originalOrder:[],detectedAt:Date.now()};w?(Go.current={rearrange:at,placements:ut},In(Us.current.rearrange||k),nt(Us.current.placements),mt(null)):(Us.current={rearrange:at,placements:ut},In(Go.current.rearrange||k),nt(Go.current.placements)),Bt(w)},wireframePurpose:wn,onWireframePurposeChange:as,Tooltip:Er,onDragStart:(w,k)=>{var dt;k.preventDefault();const A=bt[w];let R=null,P=!1;const te=k.clientX,ve=k.clientY,pe=k.target.closest("[data-feedback-toolbar]"),Ne=(dt=pe==null?void 0:pe.getBoundingClientRect().top)!=null?dt:window.innerHeight,Ye=ft=>{const st=ft.clientX-te,lt=ft.clientY-ve;if(!P&&(Math.abs(st)>4||Math.abs(lt)>4)&&(P=!0,R=document.createElement("div"),R.className=`${Le.dragPreview}${ht?` ${Le.dragPreviewWireframe}`:""}`,document.body.appendChild(R)),!R)return;const Sn=Math.max(0,Ne-ft.clientY),Cn=Math.min(1,Sn/180),Bn=1-Math.pow(1-Cn,2),an=28,zt=20,wt=Math.min(140,A.width*.18),Nt=Math.min(90,A.height*.18),Ln=an+(wt-an)*Bn,pn=zt+(Nt-zt)*Bn;R.style.width=`${Ln}px`,R.style.height=`${pn}px`,R.style.left=`${ft.clientX-Ln/2}px`,R.style.top=`${ft.clientY-pn/2}px`,R.style.opacity=`${.5+.5*Bn}`,R.textContent=Bn>.25?w:""},ct=ft=>{if(window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",ct),R&&document.body.removeChild(R),P){const st=A.width,lt=A.height,Sn=window.scrollY,Cn=Math.max(0,ft.clientX-st/2),Bn=Math.max(0,ft.clientY+Sn-lt/2),an={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:w,x:Cn,y:Bn,width:st,height:lt,scrollY:Sn,timestamp:Date.now()};nt(zt=>[...zt,an]),mt(null),ws.current=new Set,ai(zt=>zt+1)}};window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",ct)}}),r.jsx(OC,{settings:Ut,onSettingsChange:w=>xs(k=>({...k,...w})),isDarkMode:Ms,onToggleTheme:Es,isDevMode:ri,connectionStatus:fs,endpoint:g,isVisible:Je,toolbarNearBottom:!!on&&on.y<230,settingsPage:_t,onSettingsPageChange:Ie,onHideToolbar:Ui})]})}),(rt||Dt)&&r.jsx("div",{className:`${Le.blankCanvas} ${fn?Le.visible:""} ${Xt?Le.gridActive:""}`,style:{"--canvas-opacity":sn},"data-feedback-toolbar":!0}),rt&&ht&&fn&&r.jsxs("div",{className:Le.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:Le.wireframeOpacityRow,children:[r.jsx("span",{className:Le.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:Le.wireframeOpacitySlider,min:0,max:1,step:.01,value:sn,onChange:w=>Xn(Number(w.target.value))})]}),r.jsxs("div",{className:Le.wireframeNoticeTitleRow,children:[r.jsx("span",{className:Le.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:Le.wireframeNoticeDivider}),r.jsx("button",{className:Le.wireframeStartOver,onClick:()=>{Bs(w=>w+1),In({sections:[],originalOrder:[],detectedAt:Date.now()}),Us.current={rearrange:null,placements:[]},as(""),td(Tt)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(rt||Dt)&&r.jsx(d6,{placements:ut,onChange:nt,activeComponent:Dt?null:jt,onActiveComponentChange:mt,isDarkMode:Ms,exiting:Dt,onInteractionChange:$n,passthrough:!jt,extraSnapRects:at==null?void 0:at.sections.map(w=>w.currentRect),deselectSignal:js,clearSignal:qo,wireframe:ht,onSelectionChange:(w,k)=>{ws.current=w,k||(yn.current=new Set,bo(A=>A+1))},onDragMove:(w,k)=>{const A=yn.current;if(!(!A.size||!at)){if(!Un.current){Un.current=new Map;for(const R of at.sections)A.has(R.id)&&Un.current.set(R.id,{x:R.currentRect.x,y:R.currentRect.y})}for(const R of at.sections){if(!A.has(R.id)||!Un.current.get(R.id))continue;const te=document.querySelector(`[data-rearrange-section="${R.id}"]`);te&&(te.style.transform=`translate(${w}px, ${k}px)`)}}},onDragEnd:(w,k,A)=>{const R=yn.current,P=Un.current;if(Un.current=null,!(!R.size||!at||!P)){for(const te of R){const ve=document.querySelector(`[data-rearrange-section="${te}"]`);ve&&(ve.style.transform="")}A&&In(te=>te&&{...te,sections:te.sections.map(ve=>{const pe=P.get(ve.id);return pe?{...ve,currentRect:{...ve.currentRect,x:Math.max(0,pe.x+w),y:Math.max(0,pe.y+k)}}:ve})})}}}),(rt||Dt)&&at&&r.jsx(A6,{rearrangeState:at,onChange:In,isDarkMode:Ms,exiting:Dt,blankCanvas:ht,extraSnapRects:ut.map(w=>({x:w.x,y:w.y,width:w.width,height:w.height})),clearSignal:jn,deselectSignal:gs,onSelectionChange:(w,k)=>{yn.current=w,k||(ws.current=new Set,ai(A=>A+1))},onDragMove:(w,k)=>{const A=ws.current;if(A.size){if(!Un.current){Un.current=new Map;for(const R of ut)A.has(R.id)&&Un.current.set(R.id,{x:R.x,y:R.y})}for(const R of A){const P=document.querySelector(`[data-design-placement="${R}"]`);P&&(P.style.transform=`translate(${w}px, ${k}px)`)}}},onDragEnd:(w,k,A)=>{const R=ws.current,P=Un.current;if(Un.current=null,!(!R.size||!P)){for(const te of R){const ve=document.querySelector(`[data-design-placement="${te}"]`);ve&&(ve.style.transform="")}A&&nt(te=>te.map(ve=>{const pe=P.get(ve.id);return pe?{...ve,x:Math.max(0,pe.x+w),y:Math.max(0,pe.y+k)}:ve}))}}}),r.jsx("canvas",{ref:oo,className:`${qe.drawCanvas} ${xn?qe.active:""}`,style:{opacity:Si?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:qe.markersLayer,"data-feedback-toolbar":!0,children:[ae&&ms.filter(w=>!w.isFixed).map((w,k,A)=>r.jsx(c1,{annotation:w,globalIndex:ms.findIndex(R=>R.id===w.id),layerIndex:k,layerSize:A.length,isExiting:Ae,isClearing:Te,isAnimated:So.has(w.id),isHovered:!Ae&&Ke===w.id,isDeleting:Et===w.id,isEditingAny:!!oe,renumberFrom:vt,markerClickBehavior:Ut.markerClickBehavior,tooltipStyle:$s(w),onHoverEnter:R=>!Ae&&R.id!==Ro.current&&Gt(R),onHoverLeave:()=>Gt(null),onClick:R=>Ut.markerClickBehavior==="delete"?Ft(R.id):Ve(R),onContextMenu:Ve},w.id)),ae&&!Ae&&qs.filter(w=>!w.isFixed).map(w=>r.jsx(u1,{annotation:w},w.id))]}),r.jsxs("div",{className:qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&ms.filter(w=>w.isFixed).map((w,k,A)=>r.jsx(c1,{annotation:w,globalIndex:ms.findIndex(R=>R.id===w.id),layerIndex:k,layerSize:A.length,isExiting:Ae,isClearing:Te,isAnimated:So.has(w.id),isHovered:!Ae&&Ke===w.id,isDeleting:Et===w.id,isEditingAny:!!oe,renumberFrom:vt,markerClickBehavior:Ut.markerClickBehavior,tooltipStyle:$s(w),onHoverEnter:R=>!Ae&&R.id!==Ro.current&&Gt(R),onHoverLeave:()=>Gt(null),onClick:R=>Ut.markerClickBehavior==="delete"?Ft(R.id):Ve(R),onContextMenu:Ve},w.id)),ae&&!Ae&&qs.filter(w=>w.isFixed).map(w=>r.jsx(u1,{annotation:w,fixed:!0},w.id))]}),j&&r.jsxs("div",{className:qe.overlay,"data-feedback-toolbar":!0,style:F||oe?{zIndex:99999}:void 0,children:[(ne==null?void 0:ne.rect)&&!F&&!xt&&!Cs&&r.jsx("div",{className:`${qe.hoverHighlight} ${qe.enter}`,style:{left:ne.rect.left,top:ne.rect.top,width:ne.rect.width,height:ne.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Dn.filter(w=>document.contains(w.element)).map((w,k)=>{const A=w.element.getBoundingClientRect(),R=Dn.length>1;return r.jsx("div",{className:R?qe.multiSelectOutline:qe.singleSelectOutline,style:{position:"fixed",left:A.left,top:A.top,width:A.width,height:A.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},k)}),Ke&&!F&&(()=>{var P;const w=T.find(te=>te.id===Ke);if(!(w!=null&&w.boundingBox))return null;if((P=w.elementBoundingBoxes)!=null&&P.length)return pt.length>0?pt.filter(te=>document.contains(te)).map((te,ve)=>{const pe=te.getBoundingClientRect();return r.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:pe.left,top:pe.top,width:pe.width,height:pe.height}},`hover-outline-live-${ve}`)}):w.elementBoundingBoxes.map((te,ve)=>r.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:te.x,top:te.y-ot,width:te.width,height:te.height}},`hover-outline-${ve}`));const k=Lt&&document.contains(Lt)?Lt.getBoundingClientRect():null,A=k?{x:k.left,y:k.top,width:k.width,height:k.height}:{x:w.boundingBox.x,y:w.isFixed?w.boundingBox.y:w.boundingBox.y-ot,width:w.boundingBox.width,height:w.boundingBox.height},R=w.isMultiSelect;return r.jsx("div",{className:`${R?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:A.x,top:A.y,width:A.width,height:A.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ne&&!F&&!xt&&!Cs&&r.jsxs("div",{className:`${qe.hoverTooltip} ${qe.enter}`,style:{left:Math.max(8,Math.min($.x,window.innerWidth-100)),top:Math.max($.y-(ne.reactComponents?48:32),8)},children:[ne.reactComponents&&r.jsx("div",{className:qe.hoverReactPath,children:ne.reactComponents}),r.jsx("div",{className:qe.hoverElementName,children:ne.elementName})]}),F&&r.jsxs(r.Fragment,{children:[(ue=F.multiSelectElements)!=null&&ue.length?F.multiSelectElements.filter(w=>document.contains(w)).map((w,k)=>{const A=w.getBoundingClientRect();return r.jsx("div",{className:`${qe.multiSelectOutline} ${Pn?qe.exit:qe.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`pending-multi-${k}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const w=F.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${qe.singleSelectOutline} ${Pn?qe.exit:qe.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&r.jsx("div",{className:`${F.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${Pn?qe.exit:qe.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-ot,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const w=F.x,k=F.isFixed?F.y:F.y-ot;return r.jsxs(r.Fragment,{children:[r.jsx(jC,{x:w,y:k,isMultiSelect:F.isMultiSelect,isExiting:Pn}),r.jsx(jd,{ref:Pi,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Pt,onCancel:It,isExiting:Pn,lightMode:!Ms,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,w/100*window.innerWidth)),...k>window.innerHeight-290?{bottom:window.innerHeight-k+20}:{top:k+20}}})]})})()]}),oe&&r.jsxs(r.Fragment,{children:[(Y=oe.elementBoundingBoxes)!=null&&Y.length?Fe.length>0?Fe.filter(w=>document.contains(w)).map((w,k)=>{const A=w.getBoundingClientRect();return r.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`edit-multi-live-${k}`)}):oe.elementBoundingBoxes.map((w,k)=>r.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:w.x,top:w.y-ot,width:w.width,height:w.height}},`edit-multi-${k}`)):(()=>{const w=Xe&&document.contains(Xe)?Xe.getBoundingClientRect():null,k=w?{x:w.left,y:w.top,width:w.width,height:w.height}:oe.boundingBox?{x:oe.boundingBox.x,y:oe.isFixed?oe.boundingBox.y:oe.boundingBox.y-ot,width:oe.boundingBox.width,height:oe.boundingBox.height}:null;return k?r.jsx("div",{className:`${oe.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:k.x,top:k.y,width:k.width,height:k.height,...oe.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(jd,{ref:Hi,element:oe.element,selectedText:oe.selectedText,computedStyles:S6(oe.computedStyles),placeholder:"Edit your feedback...",initialValue:oe.comment,submitLabel:"Save",onSubmit:tn,onCancel:mn,onDelete:()=>Ft(oe.id),isExiting:ao,lightMode:!Ms,accentColor:oe.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const w=oe.isFixed?oe.y:oe.y-ot;return{left:Math.max(160,Math.min(window.innerWidth-160,oe.x/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}})()})]}),Cs&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:ks,className:qe.dragSelection}),r.jsx("div",{ref:Do,className:qe.highlightsContainer})]})]})]}),document.body)}const xp=_.createContext({});function Lc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const IC=typeof window<"u",bp=IC?_.useLayoutEffect:_.useEffect,zd=_.createContext(null);function vp(t,n){t.indexOf(n)===-1&&t.push(n)}function yl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const fa=(t,n,i)=>i>n?n:i<t?t:i;let wp=()=>{};const ar={},_b=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function gb(t){return typeof t=="object"&&t!==null}const yb=t=>/^0[^.\s]+$/u.test(t);function xb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Oi=t=>t,PC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(PC),xl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class Sp{constructor(){this.subscriptions=[]}add(n){return vp(this.subscriptions,n),()=>yl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ii=t=>t*1e3,Li=t=>t/1e3;function bb(t,n){return n?t*(1e3/n):0}const HC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},vb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,UC=1e-7,VC=12;function YC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=vb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>UC&&++h<VC);return d}function zc(t,n,i,a){if(t===n&&i===a)return Oi;const c=u=>YC(u,0,1,t,i);return u=>u===0||u===1?u:vb(c(u),n,a)}const wb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,Sb=t=>n=>1-t(1-n),Cb=zc(.33,1.53,.69,.99),Cp=Sb(Cb),kb=wb(Cp),jb=t=>t>=1?1:(t*=2)<1?.5*Cp(t):.5*(2-Math.pow(2,-10*(t-1))),kp=t=>1-Math.sin(Math.acos(t)),Mb=Sb(kp),Eb=wb(kp),WC=zc(.42,0,1,1),FC=zc(0,0,.58,1),Tb=zc(.42,0,.58,1),Ab=t=>Array.isArray(t)&&typeof t[0]!="number";function Nb(t,n){return Ab(t)?t[HC(0,t.length,n)]:t}const Db=t=>Array.isArray(t)&&typeof t[0]=="number",XC={linear:Oi,easeIn:WC,easeInOut:Tb,easeOut:FC,circIn:kp,circInOut:Eb,circOut:Mb,backIn:Cp,backInOut:kb,backOut:Cb,anticipate:jb},GC=t=>typeof t=="string",m1=t=>{if(Db(t)){wp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(GC(t))return XC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const C=b&&c?i:a;return x&&d.add(g),C.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const KC=40;function Rb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,D)=>(L[D]=qC(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:S,postRender:C}=d,j=()=>{const L=ar.useManualTiming,D=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,KC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),S.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},E=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,D)=>{const Q=d[D];return L[D]=(X,W=!1,V=!1)=>(i||E(),Q.schedule(X,W,V)),L},{}),cancel:L=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(L)},state:c,steps:d}}const{schedule:es,cancel:Na,state:To,steps:um}=Rb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oi,!0);let pd;function QC(){pd=void 0}const Wo={now:()=>(pd===void 0&&Wo.set(To.isProcessing||ar.useManualTiming?To.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(QC)}},Bb=t=>n=>typeof n=="string"&&n.startsWith(t),Lb=Bb("--"),ZC=Bb("var(--"),jp=t=>ZC(t)?JC.test(t.split("/*")[0].trim()):!1,JC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function p1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...wl,transform:t=>fa(0,1,t)},ad={...wl,default:1},wc=t=>Math.round(t*1e5)/1e5,Mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e3(t){return t==null}const t3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ep=(t,n)=>i=>!!(typeof i=="string"&&t3.test(i)&&i.startsWith(t)||n&&!e3(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ob=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Mp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},n3=t=>fa(0,255,t),dm={...wl,transform:t=>Math.round(n3(t))},Tr={test:Ep("rgb","red"),parse:Ob("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+dm.transform(t)+", "+dm.transform(n)+", "+dm.transform(i)+", "+wc(Tc.transform(a))+")"};function s3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:Ep("#"),parse:s3,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=$c("deg"),da=$c("%"),kt=$c("px"),o3=$c("vh"),i3=$c("vw"),_1={...da,parse:t=>da.parse(t)/100,transform:t=>da.transform(t*100)},hl={test:Ep("hsl","hue"),parse:Ob("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+da.transform(wc(n))+", "+da.transform(wc(i))+", "+wc(Tc.transform(a))+")"},no={test:t=>Tr.test(t)||$m.test(t)||hl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):hl.test(t)?hl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):hl.transform(t),getAnimatableNone:t=>{const n=no.parse(t);return n.alpha=0,no.transform(n)}},a3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r3(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Mp))==null?void 0:n.length)||0)+(((i=t.match(a3))==null?void 0:i.length)||0)>0}const zb="number",$b="color",l3="var",c3="var(",g1="${}",u3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(u3,p=>(no.test(p)?(a.color.push(u),c.push($b),i.push(no.parse(p))):p.startsWith(c3)?(a.var.push(u),c.push(l3),i.push(p)):(a.number.push(u),c.push(zb),i.push(parseFloat(p))),++u,g1)).split(g1);return{values:i,split:h,indexes:a,types:c}}function d3(t){return bl(t).values}function Ib({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===zb?c+=wc(a[u]):d===$b?c+=no.transform(a[u]):c+=a[u]}return c}}function f3(t){return Ib(bl(t))}const h3=t=>typeof t=="number"?0:no.test(t)?no.getAnimatableNone(t):t,m3=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:h3(t);function p3(t){const n=bl(t);return Ib(n)(n.values.map((a,c)=>m3(a,n.split[c])))}const ea={test:r3,parse:d3,createTransformer:f3,getAnimatableNone:p3};function fm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function _3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=fm(p,h,t+1/3),u=fm(p,h,t),d=fm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const cs=(t,n,i)=>t+(n-t)*i,hm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},g3=[$m,Tr,hl],y3=t=>g3.find(n=>n.test(t));function y1(t){const n=y3(t);if(!n)return!1;let i=n.parse(t);return n===hl&&(i=_3(i)),i}const x1=(t,n)=>{const i=y1(t),a=y1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=hm(i.red,a.red,u),c.green=hm(i.green,a.green,u),c.blue=hm(i.blue,a.blue,u),c.alpha=cs(i.alpha,a.alpha,u),Tr.transform(c))},Im=new Set(["none","hidden"]);function x3(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function b3(t,n){return i=>cs(t,n,i)}function Tp(t){return typeof t=="number"?b3:typeof t=="string"?jp(t)?Td:no.test(t)?x1:S3:Array.isArray(t)?Pb:typeof t=="object"?no.test(t)?x1:v3:Td}function Pb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Tp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function v3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Tp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function w3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const S3=(t,n)=>{const i=ea.createTransformer(n),a=bl(t),c=bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?x3(t,n):Oc(Pb(w3(a,c),c.values),i):Td(t,n)};function Hb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?cs(t,n,i):Tp(t)(t,n)}const C3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>es.update(n,i),stop:()=>Na(n),now:()=>To.isProcessing?To.timestamp:Wo.now()}},Ub=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Ap(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Vb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ap(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Li(c)}}const Rs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const k3=12;function j3(t,n,i){let a=i;for(let c=1;c<k3;c++)a=a-t(a)/n(a);return a}const mm=.001;function M3({duration:t=Rs.duration,bounce:n=Rs.bounce,velocity:i=Rs.velocity,mass:a=Rs.mass}){let c,u,d=1-n;d=fa(Rs.minDamping,Rs.maxDamping,d),t=fa(Rs.minDuration,Rs.maxDuration,Li(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,S=Pm(y,d),C=Math.exp(-x);return mm-b/S*C},u=y=>{const x=y*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(y,2)*t,C=Math.exp(-x),j=Pm(Math.pow(y,2),d);return(-c(y)+mm>0?-1:1)*((b-S)*C)/j}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-mm+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=j3(c,u,h);if(t=ii(t),isNaN(p))return{stiffness:Rs.stiffness,damping:Rs.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const E3=["duration","bounce"],T3=["stiffness","damping","mass"];function b1(t,n){return n.some(i=>t[i]!==void 0)}function A3(t){let n={velocity:Rs.velocity,stiffness:Rs.stiffness,damping:Rs.damping,mass:Rs.mass,isResolvedFromDuration:!1,...t};if(!b1(t,T3)&&b1(t,E3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*fa(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Rs.mass,stiffness:c,damping:u}}else{const i=M3({...t,velocity:0});n={...n,...i,mass:Rs.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Rs.visualDuration,n=Rs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:S}=A3({...i,velocity:-Li(i.velocity||0)}),C=b||0,j=y/(2*Math.sqrt(p*g)),E=d-u,T=Li(Math.sqrt(p/g)),O=Math.abs(E)<5;a||(a=O?Rs.restSpeed.granular:Rs.restSpeed.default),c||(c=O?Rs.restDelta.granular:Rs.restDelta.default);let L,D,Q,X,W,V;if(j<1)Q=Pm(T,j),X=(C+j*T*E)/Q,L=ae=>{const re=Math.exp(-j*T*ae);return d-re*(X*Math.sin(Q*ae)+E*Math.cos(Q*ae))},W=j*T*X+E*Q,V=j*T*E-X*Q,D=ae=>Math.exp(-j*T*ae)*(W*Math.sin(Q*ae)+V*Math.cos(Q*ae));else if(j===1){L=re=>d-Math.exp(-T*re)*(E+(C+T*E)*re);const ae=C+T*E;D=re=>Math.exp(-T*re)*(T*ae*re-C)}else{const ae=T*Math.sqrt(j*j-1);L=ne=>{const he=Math.exp(-j*T*ne),$=Math.min(ae*ne,300);return d-he*((C+j*T*E)*Math.sinh($)+ae*E*Math.cosh($))/ae};const re=(C+j*T*E)/ae,Ae=j*T*re-E*ae,Pe=j*T*E-re*ae;D=ne=>{const he=Math.exp(-j*T*ne),$=Math.min(ae*ne,300);return he*(Ae*Math.sinh($)+Pe*Math.cosh($))}}const ee={calculatedDuration:S&&x||null,velocity:ae=>ii(D(ae)),next:ae=>{if(!S&&j<1){const Ae=Math.exp(-j*T*ae),Pe=Math.sin(Q*ae),ne=Math.cos(Q*ae),he=d-Ae*(X*Pe+E*ne),$=ii(Ae*(W*Pe+V*ne));return h.done=Math.abs($)<=a&&Math.abs(d-he)<=c,h.value=h.done?d:he,h}const re=L(ae);if(S)h.done=ae>=x;else{const Ae=ii(D(ae));h.done=Math.abs(Ae)<=a&&Math.abs(d-re)<=c}return h.value=h.done?d:re,h},toString:()=>{const ae=Math.min(Ap(ee),Ad),re=Ub(Ae=>ee.next(ae*Ae).value,ae,30);return ae+"ms "+re},toTransition:()=>{}};return ee}Ac.applyToOptions=t=>{const n=Vb(t,100,Ac);return t.ease=n.ease,t.duration=ii(n.duration),t.type="keyframes",t};const N3=5;function Yb(t,n,i){const a=Math.max(n-N3,0);return bb(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},S=V=>h!==void 0&&V<h||p!==void 0&&V>p,C=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let j=i*n;const E=x+j,T=d===void 0?E:d(E);T!==E&&(j=T-x);const O=V=>-j*Math.exp(-V/a),L=V=>T+O(V),D=V=>{const ee=O(V),ae=L(V);b.done=Math.abs(ee)<=y,b.value=b.done?T:ae};let Q,X;const W=V=>{S(b.value)&&(Q=V,X=Ac({keyframes:[b.value,C(b.value)],velocity:Yb(L,V,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return W(0),{calculatedDuration:null,next:V=>{let ee=!1;return!X&&Q===void 0&&(ee=!0,D(V),W(V)),Q!==void 0&&V>=Q?X.next(V-Q):(!ee&&D(V),b)}}}function D3(t,n,i){const a=[],c=i||ar.mix||Hb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Oi:n;h=Oc(p,h)}a.push(h)}return a}function Wb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(wp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=D3(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=xl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(fa(t[0],t[u-1],g)):y}function Fb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=xl(0,n,a);t.push(cs(i,1,c))}}function Xb(t){const n=[0];return Fb(n,t.length-1),n}function R3(t,n){return t.map(i=>i*n)}function B3(t,n){return t.map(()=>n||Tb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Ab(a)?a.map(m1):m1(a),u={done:!1,value:n[0]},d=R3(i&&i.length===n.length?i:Xb(n),t),h=Wb(d,n,{ease:Array.isArray(c)?c:B3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const L3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(L3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const O3={decay:Hm,inertia:Hm,tween:Sc,keyframes:Sc,spring:Ac};function Gb(t){typeof t.type=="string"&&(t.type=O3[t.type])}class Np{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const z3=t=>t/100;class Nd extends Np{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Wo.now()&&this.tick(Wo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Gb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(z3,Hb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ap(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:S,type:C,onUpdate:j,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,D=a;if(x){const V=Math.min(this.currentTime,c)/h;let ee=Math.floor(V),ae=V%1;!ae&&V>=1&&(ae=1),ae===1&&ee--,ee=Math.min(ee,x+1),!!(ee%2)&&(b==="reverse"?(ae=1-ae,S&&(ae-=S/h)):b==="mirror"&&(D=d)),L=fa(0,1,ae)*h}let Q;O?(this.delayState.value=g[0],Q=this.delayState):Q=D.next(L),u&&!O&&(Q.value=u(Q.value));let{done:X}=Q;!O&&p!==null&&(X=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return W&&C!==Hm&&(Q.value=$d(g,this.options,E,this.speed)),j&&j(Q.value),W&&this.finish(),Q}then(n,i){return this.finished.then(n,i)}get duration(){return Li(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Li(n)}get time(){return Li(this.currentTime)}set time(n){n=ii(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Yb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Wo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Li(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=C3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function $3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Um=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Vm(n)},I3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),v1=Um,w1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),S1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),P3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:w1,scaleY:S1,scale:t=>(w1(t)+S1(t))/2,rotateX:t=>Vm(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Ar(Math.atan2(-t[2],t[0]))),rotateZ:v1,rotate:v1,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=P3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=I3,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(U3);return typeof u=="function"?u(d):d[u]}const H3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function U3(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),C1=t=>t===wl||t===kt,V3=new Set(["x","y","z"]),Y3=Sl.filter(t=>!V3.has(t));function W3(t){const n=[];return Y3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Nr=new Set;let Fm=!1,Xm=!1,Gm=!1;function qb(){if(Xm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=W3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,Nr.forEach(t=>t.complete(Gm)),Nr.clear()}function Kb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function F3(){Gm=!0,Kb(),qb(),Gm=!1}class Dp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Fm||(Fm=!0,es.read(Kb),es.resolveKeyframes(qb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}$3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const X3=t=>t.startsWith("--");function Qb(t,n,i){X3(n)?t.style.setProperty(n,i):t.style[n]=i}const G3={};function Zb(t,n){const i=xb(t);return()=>{var a;return(a=G3[n])!=null?a:i()}}const q3=Zb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Jb=Zb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,k1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function e5(t,n){if(t)return typeof t=="function"?Jb()?Ub(t,n):"ease-out":Db(t)?gc(t):Array.isArray(t)?t.map(i=>e5(i,n)||k1.easeOut):k1[t]}function K3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=e5(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Rp(t){return typeof t=="function"&&"applyToOptions"in t}function Q3({type:t,...n}){var i,a;return Rp(t)&&Jb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class t5 extends Np{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,wp(typeof n.type!="string");const y=Q3(n);this.animation=K3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Qb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Li(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Li(n)}get time(){return Li(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ii(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&q3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Oi):c(this)}}const n5={anticipate:jb,backInOut:kb,circInOut:Eb};function Z3(t){return t in n5}function J3(t){typeof t.ease=="string"&&Z3(t.ease)&&(t.ease=n5[t.ease])}const pm=10;class ek extends t5{constructor(n){J3(n),Gb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(pm,Wo.now()-this.startTime),y=fa(0,pm,p-pm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Qb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const j1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ea.test(t)||t==="0")&&!t.startsWith("url("));function tk(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function nk(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=j1(c,n),h=j1(u,n);return!d||!h?!1:tk(t)||(i==="spring"||Rp(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const s5=new Set(["opacity","clipPath","filter","transform"]),sk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ok(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&sk.test(t[n]))return!0;return!1}const ik=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ak=xb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function rk(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return ak()&&i&&(s5.has(i)||ik.has(i)&&ok(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const lk=40;class ck extends Np{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var C;super(),this.stop=()=>{var j,E;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Wo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||Dp;this.keyframeResolver=new S(h,(j,E,T)=>this.onKeyframesResolved(j,E,b,!T),p,y,g),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,O;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=Wo.now();let x=!0;nk(n,u,d,h)||(x=!1,(ar.instantAnimations||!p)&&(g==null||g($d(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>lk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=x&&!y&&rk(S),j=(O=(T=S.motionValue)==null?void 0:T.owner)==null?void 0:O.current;let E;if(C)try{E=new ek({...S,element:j})}catch{E=new Nd(S)}else E=new Nd(S);E.finished.then(()=>{this.notifyFinished()}).catch(Oi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),F3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class uk{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return M1(this.animations,"duration")}get iterationDuration(){return M1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function M1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class dk extends uk{then(n,i){return this.finished.finally(n).then(()=>{})}}function o5(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const fk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hk(t){const n=fk.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function i5(t,n,i=1){const[a,c]=hk(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return _b(d)?parseFloat(d):d}return jp(c)?i5(c,n,i+1):c}const mk={type:"spring",stiffness:500,damping:25,restSpeed:10},pk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_k={type:"keyframes",duration:.8},gk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yk=(t,{keyframes:n})=>n.length>2?_k:Cl.has(t)?t.startsWith("scale")?pk(n[1]):mk:gk;function a5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Bp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?a5(i,t):i}const xk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bk(t){for(const n in t)if(!xk.has(n))return!0;return!1}const Lp=(t,n,i,a={},c,u)=>d=>{const h=Bp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ii(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};bk(h)||Object.assign(g,yk(t,g)),g.duration&&(g.duration=ii(g.duration)),g.repeatDelay&&(g.repeatDelay=ii(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(qm(g),g.delay===0&&(x=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(g.keyframes,h);if(b!==void 0){es.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Nd(g):new ck(g)};function E1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Op(t,n,i,a){if(typeof n=="function"){const[c,u]=E1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=E1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Op(a,n,i!==void 0?i:a.custom,t)}const r5=new Set(["width","height","top","left","right","bottom",...Sl]),T1=30,vk=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class wk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Wo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Wo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=vk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Sp);const a=this.events[n].add(i);return n==="change"?()=>{a(),es.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Wo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>T1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,T1);return bb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new wk(t,n)}const Km=t=>Array.isArray(t);function Sk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function Ck(t){return Km(t)?t[t.length-1]||0:t}function kk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=Ck(u[d]);Sk(t,d,h)}}const mo=t=>!!(t&&t.getVelocity);function jk(t){return!!(mo(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(jk(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function zp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Mk="framerAppearId",l5="data-"+zp(Mk);function c5(t){return t.props[l5]}function Ek({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function $p(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?a5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const C=t.getValue(S,(b=t.latestValues[S])!=null?b:null),j=h[S];if(j===void 0||x&&Ek(x,S))continue;const E={delay:i,...Bp(u||{},S)},T=C.get();if(T!==void 0&&!C.isAnimating()&&!Array.isArray(j)&&j===T&&!E.velocity){es.update(()=>C.set(j));continue}let O=!1;if(window.MotionHandoffAnimation){const Q=c5(t);if(Q){const X=window.MotionHandoffAnimation(Q,S,es);X!==null&&(E.startTime=X,O=!0)}}Qm(t,S);const L=y!=null?y:t.shouldReduceMotion;C.start(Lp(S,C,j,L&&r5.has(S)?{type:!1}:E,t,O));const D=C.animation;D&&g.push(D)}if(d){const S=()=>es.update(()=>{d&&kk(t,d)});g.length?Promise.all(g).then(S):S()}return g}function Zm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all($p(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return Tk(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function Tk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+o5(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function Ak(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all($p(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const Nk={test:t=>t==="auto",parse:t=>t},u5=t=>n=>n.test(t),d5=[wl,kt,da,nr,i3,o3,Nk],A1=t=>d5.find(u5(t));function Dk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||yb(t):!0}const Rk=new Set(["brightness","contrast","saturate","opacity"]);function Bk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Mp)||[];if(!a)return t;const c=i.replace(a,"");let u=Rk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const Lk=/\b([a-z-]*)\(.*?\)/gu,Jm={...ea,getAnimatableNone:t=>{const n=t.match(Lk);return n?n.map(Bk).join(" "):t}},ep={...ea,getAnimatableNone:t=>{const n=ea.parse(t);return ea.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},N1={...wl,transform:Math.round},Ok={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:nr,skewX:nr,skewY:nr,distance:kt,translateX:kt,translateY:kt,translateZ:kt,x:kt,y:kt,z:kt,perspective:kt,transformPerspective:kt,opacity:Tc,originX:_1,originY:_1,originZ:kt},Ip={borderWidth:kt,borderTopWidth:kt,borderRightWidth:kt,borderBottomWidth:kt,borderLeftWidth:kt,borderRadius:kt,borderTopLeftRadius:kt,borderTopRightRadius:kt,borderBottomRightRadius:kt,borderBottomLeftRadius:kt,width:kt,maxWidth:kt,height:kt,maxHeight:kt,top:kt,right:kt,bottom:kt,left:kt,inset:kt,insetBlock:kt,insetBlockStart:kt,insetBlockEnd:kt,insetInline:kt,insetInlineStart:kt,insetInlineEnd:kt,padding:kt,paddingTop:kt,paddingRight:kt,paddingBottom:kt,paddingLeft:kt,paddingBlock:kt,paddingBlockStart:kt,paddingBlockEnd:kt,paddingInline:kt,paddingInlineStart:kt,paddingInlineEnd:kt,margin:kt,marginTop:kt,marginRight:kt,marginBottom:kt,marginLeft:kt,marginBlock:kt,marginBlockStart:kt,marginBlockEnd:kt,marginInline:kt,marginInlineStart:kt,marginInlineEnd:kt,fontSize:kt,backgroundPositionX:kt,backgroundPositionY:kt,...Ok,zIndex:N1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:N1},zk={...Ip,color:no,backgroundColor:no,outlineColor:no,fill:no,stroke:no,borderColor:no,borderTopColor:no,borderRightColor:no,borderBottomColor:no,borderLeftColor:no,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},f5=t=>zk[t],$k=new Set([Jm,ep]);function h5(t,n){let i=f5(t);return $k.has(i)||(i=ea),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Ik=new Set(["auto","none","0"]);function Pk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Ik.has(u)&&bl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=h5(i,c)}class Hk extends Dp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),jp(x))){const b=i5(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!r5.has(a)||n.length!==2)return;const[c,u]=n,d=A1(c),h=A1(u),p=p1(c),y=p1(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if(C1(d)&&C1(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||Dk(n[c]))&&a.push(c);a.length&&Pk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Pp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const m5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return gb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Hp}=Rb(queueMicrotask,!1),Qi={x:!1,y:!1};function p5(){return Qi.x||Qi.y}function Uk(t){return t==="x"||t==="y"?Qi[t]?null:(Qi[t]=!0,()=>{Qi[t]=!1}):Qi.x||Qi.y?null:(Qi.x=Qi.y=!0,()=>{Qi.x=Qi.y=!1})}function _5(t,n){const i=Pp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Vk(t){return!(t.pointerType==="touch"||p5())}function Yk(t,n,i={}){const[a,c,u]=_5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",C)},x=E=>{y&&(y(E),y=void 0),g()},b=E=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(E))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},C=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}x(E)}},j=E=>{if(!Vk(E))return;p=!1;const T=n(d,E);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",S,c)}),u}const g5=(t,n)=>n?t===n?!0:g5(t,n.parentElement):!1,Up=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Wk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Fk(t){return Wk.has(t.tagName)||t.isContentEditable===!0}const Xk=new Set(["INPUT","SELECT","TEXTAREA"]);function Gk(t){return Xk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function D1(t){return n=>{n.key==="Enter"&&t(n)}}function _m(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const qk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=D1(()=>{if(gd.has(i))return;_m(i,"down");const c=D1(()=>{_m(i,"up")}),u=()=>_m(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function R1(t){return Up(t)&&!p5()}const B1=new WeakSet;function Kk(t,n,i={}){const[a,c,u]=_5(t,i),d=h=>{const p=h.currentTarget;if(!R1(h)||B1.has(h))return;gd.add(p),i.stopPropagation&&B1.add(h);const y=n(p,h),g=(S,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),R1(S)&&typeof y=="function"&&y(S,{success:C})},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||g5(p,S.target))},b=S=>{g(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>qk(y,c)),!Fk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return gb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let sr;const y5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Qk=y5("inline","width","offsetWidth"),Zk=y5("block","height","offsetHeight");function Jk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Qk(t,n)},get height(){return Zk(t,n)}})})}function e8(t){t.forEach(Jk)}function t8(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(e8))}function n8(t,n){sr||t8();const i=Pp(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const xd=new Set;let ml;function s8(){ml=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",ml)}function o8(t){return xd.add(t),ml||s8(),()=>{xd.delete(t),!xd.size&&typeof ml=="function"&&(window.removeEventListener("resize",ml),ml=void 0)}}function L1(t,n){return typeof t=="function"?o8(t):n8(t,n)}function x5(t){return Id(t)&&t.tagName==="svg"}function i8(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Wb(c,u,d);return n?h(a):h}const a8=[...d5,no,ea],r8=t=>a8.find(u5(t)),O1=()=>({translate:0,scale:1,origin:0,originPoint:0}),pl=()=>({x:O1(),y:O1()}),z1=()=>({min:0,max:0}),to=()=>({x:z1(),y:z1()}),Nc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yp=["initial",...Vp];function Hd(t){return Pd(t.animate)||Yp.some(n=>Dc(t[n]))}function b5(t){return!!(Hd(t)||t.variants)}function l8(t,n,i){for(const a in n){const c=n[a],u=i[a];if(mo(c))t.addValue(a,c);else if(mo(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},v5={current:!1},c8=typeof window<"u";function u8(){if(v5.current=!0,!!c8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const $1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function w5(t){Dd=t}function d8(){return Dd}class S5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Wo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,es.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=b5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const C=b[S];y[S]!==void 0&&mo(C)&&C.set(y[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Nc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(v5.current||u8(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&s5.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new t5({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ii(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&es.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):to()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<$1.length;a++){const c=$1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=l8(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(_b(a)||yb(a))?a=parseFloat(a):!r8(a)&&ea.test(i)&&(a=h5(n,i)),this.setBaseTarget(n,mo(a)?a.get():a)),mo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Op(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!mo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Sp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Hp.render(this.render)}}class C5 extends S5{constructor(){super(...arguments),this.KeyframeResolver=Hk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;mo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function k5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function f8({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function h8(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function gm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!gm(t)||!gm(n)||!gm(i)}function jr(t){return np(t)||j5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function j5(t){return I1(t.x)||I1(t.y)}function I1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function P1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=P1(t.min,n,i,a,c),t.max=P1(t.max,n,i,a,c)}function M5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const H1=.999999999999,U1=1.0000000000001;function m8(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ca(t.x,-u.scroll.offset.x),ca(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,M5(t,d)),a&&jr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<U1&&n.x>H1&&(n.x=1),n.y<U1&&n.y>H1&&(n.y=1)}function ca(t,n){t.min+=n,t.max+=n}function V1(t,n,i,a,c=.5){const u=cs(t.min,t.max,c);sp(t,n,i,u,a)}function Y1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;V1(t.x,Y1(n.x,a.x),n.scaleX,n.scale,n.originX),V1(t.y,Y1(n.y,a.y),n.scaleY,n.scale,n.originY)}function E5(t,n){return k5(h8(t.getBoundingClientRect(),n))}function p8(t,n,i){const a=E5(t,i),{scroll:c}=n;return c&&(ca(a.x,c.offset.x),ca(a.y,c.offset.y)),a}const _8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},g8=Sl.length;function y8(t,n,i){let a="",c=!0;for(let u=0;u<g8;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=m5(h,Ip[d]);if(!p){c=!1;const g=_8[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Wp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(Lb(p)){c[p]=y;continue}else{const g=m5(y,Ip[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=y8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function T5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function W1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(kt.test(t))t=parseFloat(t);else return t;const i=W1(t,n.target.x),a=W1(t,n.target.y);return`${i}% ${a}%`}},x8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=ea.parse(t);if(c.length>5)return a;const u=ea.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=cs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},op={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:x8};function A5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Fp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(mo(a[h])||c&&mo(c[h])||A5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function b8(t){return window.getComputedStyle(t)}class N5 extends C5{constructor(){super(...arguments),this.type="html",this.renderInstance=T5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):H3(n,i);{const c=b8(n),u=(Lb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return E5(n,i)}build(n,i,a){Wp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Fp(n,i,a)}}function v8(t,n){return t in n}class w8 extends S5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(v8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return to()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const S8={offset:"stroke-dashoffset",array:"stroke-dasharray"},C8={offset:"strokeDashoffset",array:"strokeDasharray"};function k8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?S8:C8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const j8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function D5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var S,C;if(Wp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(C=g==null?void 0:g.transformBox)!=null?C:"fill-box",delete x.transformBox);for(const j of j8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&k8(x,c,u,d,!1)}const R5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),B5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function M8(t,n,i,a){T5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(R5.has(c)?c:zp(c),n.attrs[c])}function L5(t,n,i){const a=Fp(t,n,i);for(const c in t)if(mo(t[c])||mo(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class O5 extends C5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=to}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=f5(i);return a&&a.default||0}return i=R5.has(i)?i:zp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return L5(n,i,a)}build(n,i,a){D5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){M8(n,i,a,c)}mount(n){this.isSVGTag=B5(n.tagName),super.mount(n)}}const E8=Yp.length;function z5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?z5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<E8;i++){const a=Yp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function $5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const T8=[...Vp].reverse(),A8=Vp.length;function N8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>Ak(t,i,a)))}function D8(t){let n=N8(t),i=F1(),a=!0,c=!1;const u=y=>(g,x)=>{var S;const b=Dr(t,x,y==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:j,...E}=b;g={...g,...E,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=z5(t.parent)||{},b=[],S=new Set;let C={},j=1/0;for(let T=0;T<A8;T++){const O=T8[T],L=i[O],D=g[O]!==void 0?g[O]:x[O],Q=Dc(D),X=O===y?L.isActive:null;X===!1&&(j=T);let W=D===x[O]&&D!==g[O]&&Q;if(W&&(a||c)&&t.manuallyAnimateOnMount&&(W=!1),L.protectedKeys={...C},!L.isActive&&X===null||!D&&!L.prevProp||Pd(D)||typeof D=="boolean")continue;if(O==="exit"&&L.isActive&&X!==!0){L.prevResolvedValues&&(C={...C,...L.prevResolvedValues});continue}const V=R8(L.prevProp,D);let ee=V||O===y&&L.isActive&&!W&&Q||T>j&&Q,ae=!1;const re=Array.isArray(D)?D:[D];let Ae=re.reduce(u(O),{});X===!1&&(Ae={});const{prevResolvedValues:Pe={}}=L,ne={...Pe,...Ae},he=F=>{ee=!0,S.has(F)&&(ae=!0,S.delete(F)),L.needsAnimating[F]=!0;const fe=t.getValue(F);fe&&(fe.liveStyle=!1)};for(const F in ne){const fe=Ae[F],Ee=Pe[F];if(C.hasOwnProperty(F))continue;let I=!1;Km(fe)&&Km(Ee)?I=!$5(fe,Ee):I=fe!==Ee,I?fe!=null?he(F):S.add(F):fe!==void 0&&S.has(F)?he(F):L.protectedKeys[F]=!0}L.prevProp=D,L.prevResolvedValues=Ae,L.isActive&&(C={...C,...Ae}),(a||c)&&t.blockInitialAnimation&&(ee=!1);const $=W&&V;ee&&(!$||ae)&&b.push(...re.map(F=>{const fe={type:O};if(typeof F=="string"&&(a||c)&&!$&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ee}=t,I=Dr(Ee,F);if(Ee.enteringChildren&&I){const{delayChildren:de}=I.transition||{};fe.delay=o5(Ee.enteringChildren,t,de)}}return{animation:F,options:fe}}))}if(S.size){const T={};if(typeof g.initial!="boolean"){const O=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);O&&O.transition&&(T.transition=O.transition)}S.forEach(O=>{const L=t.getBaseTarget(O),D=t.getValue(O);D&&(D.liveStyle=!0),T[O]=L!=null?L:null}),b.push({animation:T})}let E=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(E=!1),a=!1,c=!1,E?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=F1(),c=!0}}}function R8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!$5(n,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function F1(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}function ip(t,n){t.min=n.min,t.max=n.max}function Ki(t,n){ip(t.x,n.x),ip(t.y,n.y)}function X1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const I5=1e-4,B8=1-I5,L8=1+I5,P5=.01,O8=0-P5,z8=0+P5;function Fo(t){return t.max-t.min}function $8(t,n,i){return Math.abs(t-n)<=i}function G1(t,n,i,a=.5){t.origin=a,t.originPoint=cs(n.min,n.max,t.origin),t.scale=Fo(i)/Fo(n),t.translate=cs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=B8&&t.scale<=L8||isNaN(t.scale))&&(t.scale=1),(t.translate>=O8&&t.translate<=z8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){G1(t.x,n.x,i.x,a?a.originX:void 0),G1(t.y,n.y,i.y,a?a.originY:void 0)}function q1(t,n,i,a=0){const c=a?cs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Fo(n)}function I8(t,n,i,a){q1(t.x,n.x,i.x,a==null?void 0:a.x),q1(t.y,n.y,i.y,a==null?void 0:a.y)}function K1(t,n,i,a=0){const c=a?cs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Fo(n)}function Bd(t,n,i,a){K1(t.x,n.x,i.x,a==null?void 0:a.x),K1(t.y,n.y,i.y,a==null?void 0:a.y)}function Q1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function P8(t,n=0,i=1,a=.5,c,u=t,d=t){if(da.test(n)&&(n=parseFloat(n),n=cs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=cs(u.min,u.max,a);t===u&&(h-=n),t.min=Q1(t.min,n,i,h,c),t.max=Q1(t.max,n,i,h,c)}function Z1(t,n,[i,a,c],u,d){P8(t,n[i],n[a],n[c],n.scale,u,d)}const H8=["x","scaleX","originX"],U8=["y","scaleY","originY"];function J1(t,n,i,a){Z1(t.x,n,H8,i?i.x:void 0,a?a.x:void 0),Z1(t.y,n,U8,i?i.y:void 0,a?a.y:void 0)}function ex(t){return t.translate===0&&t.scale===1}function H5(t){return ex(t.x)&&ex(t.y)}function tx(t,n){return t.min===n.min&&t.max===n.max}function V8(t,n){return tx(t.x,n.x)&&tx(t.y,n.y)}function nx(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function U5(t,n){return nx(t.x,n.x)&&nx(t.y,n.y)}function sx(t){return Fo(t.x)/Fo(t.y)}function ox(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function la(t){return[t("x"),t("y")]}function Y8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:S,skewY:C}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const V5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],W8=V5.length,ix=t=>typeof t=="string"?parseFloat(t):t,ax=t=>typeof t=="number"||kt.test(t);function F8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=cs(0,(d=i.opacity)!=null?d:1,X8(a)),t.opacityExit=cs((h=n.opacity)!=null?h:1,0,G8(a))):u&&(t.opacity=cs((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<W8;g++){const x=V5[g];let b=rx(n,x),S=rx(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||ax(b)===ax(S)?(t[x]=Math.max(cs(ix(b),ix(S),a),0),(da.test(S)||da.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=cs(n.rotate||0,i.rotate||0,a))}function rx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const X8=Y5(0,.5,Mb),G8=Y5(.5,.95,Oi);function Y5(t,n,i){return a=>a<t?0:a>n?1:i(xl(t,n,a))}function W5(t,n,i){const a=mo(t)?t:rr(t);return a.start(Lp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const q8=(t,n)=>t.depth-n.depth;class K8{constructor(){this.children=[],this.isDirty=!1}add(n){vp(this.children,n),this.isDirty=!0}remove(n){yl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(q8),this.isDirty=!1,this.children.forEach(n)}}function Q8(t,n){const i=Wo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Na(a),t(u-n))};return es.setup(a,!0),()=>Na(a)}function vd(t){return mo(t)?t.get():t}class Z8{constructor(){this.members=[]}add(n){vp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(yl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(yl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ym=["","X","Y","Z"],J8=1e3;let ej=0;function xm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function F5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=c5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",es,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&F5(a)}function X5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=ej++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sj),this.nodes.forEach(cj),this.nodes.forEach(uj),this.nodes.forEach(oj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new K8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Sp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!x5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;es.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,g&&g(),g=Q8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ux)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||y.getDefaultTransition()||pj,{onLayoutAnimationStart:j,onLayoutAnimationComplete:E}=y.getProps(),T=!this.targetLayout||!U5(this.targetLayout,S),O=!x&&b;if(this.options.layoutRoot||this.resumeFrom||O||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Bp(C,"layout"),onPlay:j,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,O)}else x||ux(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&F5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(aj),this.nodes.forEach(lx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rj),this.nodes.forEach(lj),this.nodes.forEach(tj),this.nodes.forEach(nj)):this.nodes.forEach(cx),this.clearAllSnapshots();const h=Wo.now();To.delta=fa(0,1e3/60,h-To.timestamp),To.timestamp=h,To.isProcessing=!0,um.update.process(To),um.preRender.process(To),um.render.process(To),To.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ij),this.sharedNodes.forEach(fj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,es.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){es.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fo(this.snapshot.measuredBox.x)&&!Fo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=to()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!H5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),_j(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return to();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(gj))){const{scroll:g}=this.root;g&&(ca(h.x,g.offset.x),ca(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=to();if(Ki(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ki(h,d),ca(h.x,x.offset.x),ca(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||to();Ki(y,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(ca(y.x,-S.scroll.offset.x),ca(y.y,-S.scroll.offset.y)),jr(S.latestValues)&&bd(y,S.latestValues,(g=S.layout)==null?void 0:g.layoutBox)}return jr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=to();Ki(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!jr(g.latestValues))continue;let x;g.instance&&(np(g.latestValues)&&g.updateSnapshot(),x=to(),Ki(x,g.measurePageBox())),J1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&J1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==To.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=To.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=to(),this.targetWithTransforms=to()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),I8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ki(this.target,this.layout.layoutBox),M5(this.target,this.targetDelta)):Ki(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||j5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=to(),this.relativeTargetOrigin=to(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ki(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===To.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;Ki(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;m8(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=to());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(X1(this.prevProjectionDelta.x,this.projectionDelta.x),X1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ox(this.projectionDelta.x,this.prevProjectionDelta.x)||!ox(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pl(),this.projectionDelta=pl(),this.projectionDeltaWithTransform=pl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=pl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=to(),S=p?p.source:void 0,C=this.layout?this.layout.source:void 0,j=S!==C,E=this.getStack(),T=!E||E.members.length<=1,O=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(mj));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const Q=D/1e3;dx(x.x,d.x,Q),dx(x.y,d.y,Q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),hj(this.relativeTarget,this.relativeTargetOrigin,b,Q),L&&V8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=to()),Ki(L,this.relativeTarget)),j&&(this.animationValues=g,F8(g,y,this.latestValues,Q,O,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=es.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=W5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&G5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||to();const x=Fo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Fo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ki(h,p),bd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Z8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&xm("z",d,y,this.animationValues);for(let g=0;g<ym.length;g++)xm(`rotate${ym[g]}`,d,y,this.animationValues),xm(`skew${ym[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var C,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=Y8(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(C=g.opacity)!=null?C:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in op){if(g[E]===void 0)continue;const{correct:T,applyTo:O,isCSSVariable:L}=op[E],D=x==="none"?g[E]:T(g[E],y);if(O){const Q=O.length;for(let X=0;X<Q;X++)d[O[X]]=D}else L?this.options.visualElement.renderState.vars[E]=D:d[E]=D}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(lx),this.root.sharedNodes.clear()}}}function tj(t){t.updateLayout()}function nj(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Fo(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else G5(u,n.layoutBox,a)&&la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Fo(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=pl();kc(h,a,n.layoutBox);const p=pl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!H5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const C=t.options.layoutAnchor||void 0,j=to();Bd(j,n.layoutBox,b.layoutBox,C);const E=to();Bd(E,a,S.layoutBox,C),U5(j,E)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function sj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ij(t){t.clearSnapshot()}function lx(t){t.clearMeasurements()}function aj(t){t.isLayoutDirty=!0,t.updateLayout()}function cx(t){t.isLayoutDirty=!1}function rj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function lj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ux(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function cj(t){t.resolveTargetDelta()}function uj(t){t.calcProjection()}function dj(t){t.resetSkewAndRotation()}function fj(t){t.removeLeadSnapshot()}function dx(t,n,i){t.translate=cs(n.translate,0,i),t.scale=cs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function fx(t,n,i,a){t.min=cs(n.min,i.min,a),t.max=cs(n.max,i.max,a)}function hj(t,n,i,a){fx(t.x,n.x,i.x,a),fx(t.y,n.y,i.y,a)}function mj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const pj={duration:.45,ease:[.4,0,.1,1]},hx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),mx=hx("applewebkit/")&&!hx("chrome/")?Math.round:Oi;function px(t){t.min=mx(t.min),t.max=mx(t.max)}function _j(t){px(t.x),px(t.y)}function G5(t,n,i){return t==="position"||t==="preserve-aspect"&&!$8(sx(n),sx(i),.2)}function gj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const yj=X5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bm={current:void 0},q5=X5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bm.current){const t=new yj({});t.mount(window),t.setOptions({layoutScroll:!0}),bm.current=t}return bm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function _x(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function xj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=_x(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():_x(t[c],null)}}}}function bj(...t){return _.useCallback(xj(...t),t)}class vj extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function wj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Ud),g=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=bj(h,g);return _.useInsertionEffect(()=>{const{width:C,height:j,top:E,left:T,right:O,bottom:L}=p.current;if(n||u===!1||!h.current||!C||!j)return;const D=i==="left"?`left: ${T}`:`right: ${O}`,Q=a==="bottom"?`bottom: ${L}`:`top: ${E}`;h.current.dataset.motionPopId=d;const X=document.createElement("style");y&&(X.nonce=y);const W=c!=null?c:document.head;return W.appendChild(X),X.sheet&&X.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${Q}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),W.contains(X)&&W.removeChild(X)}},[n]),r.jsx(vj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const Sj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Lc(Cj),x=_.useId();let b=!0,S=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:C=>{g.set(C,!0);for(const j of g.values())if(!j)return;a&&a()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[i,g,a]);return u&&b&&(S={...S}),_.useMemo(()=>{g.forEach((C,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=r.jsx(wj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),r.jsx(zd.Provider,{value:S,children:t})};function Cj(){return new Map}function K5(t=!0){const n=_.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function gx(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=K5(d),b=_.useMemo(()=>gx(t),[t]),S=d&&!g?[]:b.map(rd),C=_.useRef(!0),j=_.useRef(b),E=Lc(()=>new Map),T=_.useRef(new Set),[O,L]=_.useState(b),[D,Q]=_.useState(b);bp(()=>{C.current=!1,j.current=b;for(let V=0;V<D.length;V++){const ee=rd(D[V]);S.includes(ee)?(E.delete(ee),T.current.delete(ee)):E.get(ee)!==!0&&E.set(ee,!1)}},[D,S.length,S.join("-")]);const X=[];if(b!==O){let V=[...b];for(let ee=0;ee<D.length;ee++){const ae=D[ee],re=rd(ae);S.includes(re)||(V.splice(ee,0,ae),X.push(ae))}return u==="wait"&&X.length&&(V=X),Q(gx(V)),L(b),null}const{forceRender:W}=_.useContext(xp);return r.jsx(r.Fragment,{children:D.map(V=>{const ee=rd(V),ae=d&&!g?!1:b===D||S.includes(ee),re=()=>{if(T.current.has(ee))return;if(E.has(ee))T.current.add(ee),E.set(ee,!0);else return;let Ae=!0;E.forEach(Pe=>{Pe||(Ae=!1)}),Ae&&(W==null||W(),Q(j.current),d&&(x==null||x()),a&&a())};return r.jsx(Sj,{isPresent:ae,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:ae?void 0:re,anchorX:h,anchorY:p,children:V},ee)})})},Q5=_.createContext({strict:!1}),yx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xx=!1;function kj(){if(xx)return;const t={};for(const n in yx)t[n]={isEnabled:i=>yx[n].some(a=>!!i[a])};w5(t),xx=!0}function Z5(){return kj(),d8()}function jj(t){const n=Z5();for(const i in t)n[i]={...n[i],...t[i]};w5(n)}const Mj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Mj.has(t)}let J5=t=>!Ld(t);function Ej(t){typeof t=="function"&&(J5=n=>n.startsWith("on")?!Ld(n):t(n))}try{Ej(require("@emotion/is-prop-valid").default)}catch{}function Tj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||mo(t[c])||(J5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=_.createContext({});function Aj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Nj(t){const{initial:n,animate:i}=Aj(t,_.useContext(Yd));return _.useMemo(()=>({initial:n,animate:i}),[bx(n),bx(i)])}function bx(t){return Array.isArray(t)?t.join(" "):t}const Xp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function e2(t,n,i){for(const a in n)!mo(n[a])&&!A5(a,i)&&(t[a]=n[a])}function Dj({transformTemplate:t},n){return _.useMemo(()=>{const i=Xp();return Wp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Rj(t,n){const i=t.style||{},a={};return e2(a,i,t),Object.assign(a,Dj(t,n)),a}function Bj(t,n){const i={},a=Rj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const t2=()=>({...Xp(),attrs:{}});function Lj(t,n,i,a){const c=_.useMemo(()=>{const u=t2();return D5(u,n,B5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};e2(u,t.style,t),c.style={...u,...c.style}}return c}const Oj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gp(t){return typeof t!="string"||t.includes("-")?!1:!!(Oj.indexOf(t)>-1||/[A-Z]/u.test(t))}function zj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Gp(t))?Lj:Bj)(n,a,c,t),y=Tj(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>mo(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function $j({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Ij(i,a,c,t),renderState:n()}}function Ij(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=b5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const C=Op(t,b[S]);if(C){const{transitionEnd:j,transition:E,...T}=C;for(const O in T){let L=T[O];if(Array.isArray(L)){const D=g?L.length-1:0;L=L[D]}L!==null&&(c[O]=L)}for(const O in j)c[O]=j[O]}}}return c}const n2=t=>(n,i)=>{const a=_.useContext(Yd),c=_.useContext(zd),u=()=>$j(t,n,a,c);return i?u():Lc(u)},Pj=n2({scrapeMotionValuesFromProps:Fp,createRenderState:Xp}),Hj=n2({scrapeMotionValuesFromProps:L5,createRenderState:t2}),Uj=Symbol.for("motionComponentSymbol");function Vj(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const s2=_.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Yj(t,n,i,a,c,u){var L,D;const{visualElement:d}=_.useContext(Yd),h=_.useContext(Q5),p=_.useContext(zd),y=_.useContext(Ud),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),S=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const C=b.current,j=_.useContext(s2);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&Wj(b.current,i,c,j);const E=_.useRef(!1);_.useInsertionEffect(()=>{C&&E.current&&C.update(i,p)});const T=i[l5],O=_.useRef(!!T&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,T))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,T)));return bp(()=>{S.current=!0,C&&(E.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),O.current&&C.animationState&&C.animationState.animateChanges())}),_.useEffect(()=>{C&&(!O.current&&C.animationState&&C.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var Q;(Q=window.MotionHandoffMarkAsComplete)==null||Q.call(window,T)}),O.current=!1),C.enteringChildren=void 0)}),C}function Wj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:o2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function o2(t){if(t)return t.options.allowProjection!==!1?t.projection:o2(t.parent)}function vm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&jj(a);const u=i?i==="svg":Gp(t),d=u?Hj:Pj;function h(x,b){let S;const C={..._.useContext(Ud),...x,layoutId:Fj(x)},{isStatic:j}=C,E=Nj(x),T=d(x,j);if(!j&&typeof window<"u"){Xj();const O=Gj(C);S=O.MeasureLayout,E.visualElement=Yj(t,T,C,c,O.ProjectionNode,u)}return r.jsxs(Yd.Provider,{value:E,children:[S&&E.visualElement?r.jsx(S,{visualElement:E.visualElement,...C}):null,zj(t,x,Vj(T,E.visualElement,b),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[Uj]=t,p}function Fj({layoutId:t}){const n=_.useContext(xp).id;return n&&t!==void 0?n+"-"+t:t}function Xj(t,n){_.useContext(Q5).strict}function Gj(t){const n=Z5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function qj(t,n){if(typeof Proxy>"u")return vm;const i=new Map,a=(u,d)=>vm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,vm(d,void 0,t,n)),i.get(d))})}const Kj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Gp(t))?new O5(n):new N5(n,{allowProjection:t!==_.Fragment})};class Qj extends lr{constructor(n){super(n),n.animationState||(n.animationState=D8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Zj=0;class Jj extends lr{constructor(){super(...arguments),this.id=Zj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const eM={animation:{Feature:Qj},exit:{Feature:Jj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const tM=t=>n=>Up(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,tM(i),a)}const i2=({current:t})=>t?t.ownerDocument.defaultView:null,vx=(t,n)=>Math.abs(t-n);function nM(t,n){const i=vx(t.x,n.x),a=vx(t.y,n.y);return Math.sqrt(i**2+a**2)}const wx=new Set(["auto","scroll"]);class a2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const S=wm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,j=nM(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!j)return;const{point:E}=S,{timestamp:T}=To;this.history.push({...E,timestamp:T});const{onStart:O,onMove:L}=this.handlers;C||(O&&O(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=ld(C,this.transformPagePoint),es.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:j,onSessionEnd:E,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=wm(S.type==="pointercancel"?this.lastMoveEventInfo:ld(C,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,O),E&&E(S,O)},!Up(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=To;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,wm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(wx.has(a.overflowX)||wx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),es.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function Sx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function wm({point:t},n){return{point:t,delta:Sx(t,r2(n)),offset:Sx(t,sM(n)),velocity:oM(n,.1)}}function sM(t){return t[0]}function r2(t){return t[t.length-1]}function oM(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=r2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ii(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ii(n)*2&&(a=t[1]);const u=Li(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function iM(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?cs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?cs(i,t,a.max):Math.min(t,i)),t}function Cx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function aM(t,{top:n,left:i,bottom:a,right:c}){return{x:Cx(t.x,i,c),y:Cx(t.y,n,a)}}function kx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function rM(t,n){return{x:kx(t.x,n.x),y:kx(t.y,n.y)}}function lM(t,n){let i=.5;const a=Fo(t),c=Fo(n);return c>a?i=xl(n.min,n.max-a,t.min):a>c&&(i=xl(t.min,t.max-c,n.min)),fa(0,1,i)}function cM(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function uM(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:jx(t,"left","right"),y:jx(t,"top","bottom")}}function jx(t,n,i){return{min:Mx(t,n),max:Mx(t,i)}}function Mx(t,n){return typeof t=="number"?t:t[n]||0}const dM=new WeakMap;class fM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=to(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:C,onDragStart:j}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Uk(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),la(T=>{let O=this.getAxisMotionValue(T).get()||0;if(da.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[T];D&&(O=Fo(D)*(parseFloat(O)/100))}}this.originPoint[T]=O}),j&&es.update(()=>j(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:j,onDrag:E}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:T}=b;if(C&&this.currentDirection===null){this.currentDirection=mM(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),E&&es.update(()=>E(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new a2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:i2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&es.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=iM(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=aM(a.layoutBox,n):this.constraints=!1,this.elastic=uM(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&la(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=cM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=p8(a,c.root,this.visualElement.getTransformPagePoint());let d=rM(c.layout.layoutBox,u);if(i){const h=i(f8(d));this.hasMutatedConstraints=!!h,h&&(d=k5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=la(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,C)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Lp(n,a,0,i,this.visualElement,!1))}stopAnimation(){la(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){la(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-cs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};la(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=lM({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),la(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(cs(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dM.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,S=b!==n&&Gk(b);g&&x&&!S&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=hM(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),es.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(la(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Ex(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function hM(t,n,i){const a=L1(t,Ex(i)),c=L1(n,Ex(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function mM(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class pM extends lr{constructor(n){super(n),this.removeGroupControls=Oi,this.removeListeners=Oi,this.controls=new fM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Oi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Sm=t=>(n,i)=>{t&&es.update(()=>t(n,i),!1,!0)};class _M extends lr{constructor(){super(...arguments),this.removePointerDownListener=Oi}onPointerDown(n){this.session=new a2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:Sm(n),onStart:Sm(i),onMove:Sm(a),onEnd:(u,d)=>{delete this.session,c&&es.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Cm=!1;class gM extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Cm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Cm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||es.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Hp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Cm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function l2(t){const[n,i]=K5(),a=_.useContext(xp);return r.jsx(gM,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(s2),isPresent:n,safeToRemove:i})}const yM={pan:{Feature:_M},drag:{Feature:pM,ProjectionNode:q5,MeasureLayout:l2}};function Tx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&es.postRender(()=>u(n,Ic(n)))}class xM extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=Yk(n,(i,a)=>(Tx(this.node,a,"Start"),c=>Tx(this.node,c,"End"))))}unmount(){}}class bM extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ax(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&es.postRender(()=>u(n,Ic(n)))}class vM extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Kk(n,(c,u)=>(Ax(this.node,u,"Start"),(d,{success:h})=>Ax(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,km=new WeakMap,wM=t=>{const n=rp.get(t.target);n&&n(t)},SM=t=>{t.forEach(wM)};function CM({root:t,...n}){const i=t||document;km.has(i)||km.set(i,{});const a=km.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(SM,{root:t,...n})),a[c]}function kM(t,n,i){const a=CM(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const jM={some:0,all:1};class MM extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:jM[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(y)};this.stopObserver=kM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(EM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function EM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const TM={inView:{Feature:MM},tap:{Feature:vM},focus:{Feature:bM},hover:{Feature:xM}},AM={layout:{ProjectionNode:q5,MeasureLayout:l2}},NM={...eM,...TM,...yM,...AM},oi=qj(NM,Kj);function lp(t){const n=Lc(()=>rr(t)),{isStatic:i}=_.useContext(Ud);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function c2(t,n){const i=lp(n()),a=()=>i.set(n());return a(),bp(()=>{const c=()=>es.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Na(a)}}),i}function DM(t){Cc.current=[],t();const n=c2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return DM(t);const u=typeof n=="function"?n:i8(n,i,a),d=Array.isArray(t)?Nx(t,u):Nx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Nx(t,n){const i=Lc(()=>[]);return c2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function qp(t){return typeof t=="object"&&!Array.isArray(t)}function u2(t,n,i,a){return t==null?[]:typeof t=="string"&&qp(n)?Pp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function RM(t,n,i){return t*(n+1)}function Dx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function BM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(yl(t,c),a--)}}function LM(t,n,i,a,c,u){BM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:cs(c,u,a[d]),easing:Nb(i,d)})}function OM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function zM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const $M="easeInOut";function IM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let S=0;S<t.length;S++){const C=t[S];if(typeof C=="string"){y.set(C,x);continue}else if(!Array.isArray(C)){y.set(C.name,Dx(x,C.at,g,y));continue}let[j,E,T={}]=C;T.at!==void 0&&(x=Dx(x,T.at,g,y));let O=0;const L=(D,Q,X,W=0,V=0)=>{const ee=PM(D),{delay:ae=0,times:re=Xb(ee),type:Ae=n.type||"keyframes",repeat:Pe,repeatType:ne,repeatDelay:he=0,...$}=Q;let{ease:ie=n.ease||"easeOut",duration:F}=Q;const fe=typeof ae=="function"?ae(W,V):ae,Ee=ee.length,I=Rp(Ae)?Ae:c==null?void 0:c[Ae||"keyframes"];if(Ee<=2&&I){let be=100;if(Ee===2&&VM(ee)){const Ke=ee[1]-ee[0];be=Math.abs(Ke)}const Te={...n,...$};F!==void 0&&(Te.duration=ii(F));const We=Vb(Te,be,I);ie=We.ease,F=We.duration}F!=null||(F=u);const de=x+fe;re.length===1&&re[0]===0&&(re[1]=1);const q=re.length-ee.length;if(q>0&&Fb(re,q),ee.length===1&&ee.unshift(null),Pe){F=RM(F,Pe);const be=[...ee],Te=[...re];ie=Array.isArray(ie)?[...ie]:[ie];const We=[...ie];for(let Ke=0;Ke<Pe;Ke++){ee.push(...be);for(let Ze=0;Ze<be.length;Ze++)re.push(Te[Ze]+(Ke+1)),ie.push(Ze===0?"linear":Nb(We,Ze-1))}OM(re,Pe)}const me=de+F;LM(X,ee,ie,re,de,me),O=Math.max(fe+F,O),b=Math.max(me,b)};if(mo(j)){const D=Rx(j,h);L(E,T,Bx("default",D))}else{const D=u2(j,E,a,p),Q=D.length;for(let X=0;X<Q;X++){E=E,T=T;const W=D[X],V=Rx(W,h);for(const ee in E)L(E[ee],HM(T,ee),Bx(ee,V),X,Q)}}g=x,x+=O}return h.forEach((S,C)=>{for(const j in S){const E=S[j];E.sort(zM);const T=[],O=[],L=[];for(let W=0;W<E.length;W++){const{at:V,value:ee,easing:ae}=E[W];T.push(ee),O.push(xl(0,b,V)),L.push(ae||"easeOut")}O[0]!==0&&(O.unshift(0),T.unshift(T[0]),L.unshift($M)),O[O.length-1]!==1&&(O.push(1),T.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const D=d.get(C);D.keyframes[j]=T;const{type:Q,...X}=n;D.transition[j]={...X,duration:b,ease:L,times:O,...i}}}),d}function Rx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Bx(t,n){return n[t]||(n[t]=[]),n[t]}function PM(t){return Array.isArray(t)?t:[t]}function HM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const UM=t=>typeof t=="number",VM=t=>t.every(UM);function YM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!x5(t)?new O5(n):new N5(n);i.mount(t),Nc.set(t,i)}function WM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new w8(n);i.mount(t),Nc.set(t,i)}function FM(t,n){return mo(t)||typeof t=="number"||typeof t=="string"&&!qp(n)}function d2(t,n,i,a){const c=[];if(FM(t,n))c.push(W5(t,qp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=u2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?YM:WM;Nc.has(p)||y(p);const g=Nc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...$p(g,{...n,transition:x},{}))}}return c}function XM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return IM(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...d2(p,d,h))}),a}function GM(t){return Array.isArray(t)&&t.some(Array.isArray)}function qM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(GM(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=XM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=d2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new dk(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{yl(n.animations,y)})),y}return a}const Lx=qM();var KM=Object.freeze({}),QM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,C]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],C,d.get(S));this.initTransitionModes(i,"",p);for(const[S,C]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const j=S.slice(0,-7),E=d.get(j);(E==null?void 0:E.type)==="transition"&&(p[S]=C)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,C]of Object.entries(h))x[S]=this.normalizePreservedValue(g[S],C,d.get(S));for(const[S,C]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=C);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:KM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Zt=new QM;function ZM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(Zt.registerPanel(c,t,u.current,p.current),()=>Zt.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}Zt.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>Zt.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>Zt.subscribe(c,b),()=>Zt.getValues(c),()=>Zt.getValues(c));return f2(n,x,"")}function f2(t,n,i){var c,u,d,h,p,y,g,x,b,S;const a={};for(const[C,j]of Object.entries(t)){if(C==="_collapsed")continue;const E=i?`${i}.${C}`:C;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[C]=(c=n[E])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[C]=(u=n[E])!=null?u:j;else if(JM(j)||e7(j))a[C]=(d=n[E])!=null?d:j;else if(t7(j))a[C]=(h=n[E])!=null?h:j;else if(n7(j)){const T=(p=j.default)!=null?p:i7(j.options);a[C]=(y=n[E])!=null?y:T}else s7(j)?a[C]=(x=(g=n[E])!=null?g:j.default)!=null?x:"#000000":o7(j)?a[C]=(S=(b=n[E])!=null?b:j.default)!=null?S:"":typeof j=="object"&&j!==null&&(a[C]=f2(j,n,E))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function JM(t){return kl(t,"spring")}function e7(t){return kl(t,"easing")}function t7(t){return kl(t,"action")}function n7(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function s7(t){return kl(t,"color")}function o7(t){return kl(t,"text")}function i7(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,g;const u=Zt.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));Zt.updateValue(t,n,Sd(p,a))}function a7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function jm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function h2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=h2(i.children,n);if(a)return a}}return null}var fd=4;function r7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function l7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=r7(n);return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function c7(t){return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function m2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var p2=_.createContext({activePanelId:null,activePath:null});function u7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=Zt.getPanels();for(const b of x)for(const[S,C]of Object.entries(b.shortcuts)){if(!C.key||C.key.toLowerCase()!==g||((y=C.interaction)!=null?y:"scroll")!==p)continue;const j=h2(b.controls,S);if(j&&j.type==="slider")return{panelId:b.id,path:S,control:j,shortcut:C}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(dd())return;const E=j.key.toLowerCase();if((E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const Q=E==="arrowright"||E==="arrowup"?1:-1,X=mc(D.control,D.shortcut);pc(D.panelId,D.path,D.control,X,Q);return}}const T=a.current.has(E);a.current.add(E);const O=jm(j),L=Zt.resolveShortcutTarget(E,O);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!T&&L.control.type==="toggle")){const D=Zt.getValue(L.panelId,L.path);Zt.updateValue(L.panelId,L.path,!D)}T||(u.current=null,d.current=0)},y=j=>{const E=j.key.toLowerCase();if(a.current.delete(E),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const O of a.current){const L=jm(j),D=Zt.resolveShortcutTarget(O,L);if(D){i({activePanelId:D.panelId,activePath:D.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=j=>{var O,L;if(dd())return;const E=jm(j);if(a.current.size>0)for(const D of a.current){const Q=Zt.resolveShortcutTarget(D,E);if(!Q)continue;const{panelId:X,path:W,control:V}=Q;if(((L=(O=V.shortcut)==null?void 0:O.interaction)!=null?L:"scroll")!=="scroll"||V.type!=="slider")continue;j.preventDefault();const ae=mc(V,V.shortcut),re=j.deltaY>0?-1:1;pc(X,W,V,ae,re);return}const T=Zt.resolveScrollOnlyTargets();for(const{panelId:D,path:Q,control:X,shortcut:W}of T){if(X.type!=="slider")continue;j.preventDefault();const V=mc(X,W),ee=j.deltaY>0?-1:1;pc(D,Q,X,V,ee);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=j=>{if(dd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const O=j.clientX-u.current;u.current=j.clientX,d.current+=O;const L=mc(T.control,T.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,pc(T.panelId,T.path,T.control,L,D))}return}const E=h("move");if(E){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const O=mc(E.control,E.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(E.panelId,E.path,E.control,O,L))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",C)}},[h]),r.jsx(p2.Provider,{value:n,children:t})}var Kp="M6 9.5L12 15.5L18 9.5",d7="M5 12.75L10 19L19 5",Mm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},f7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],h7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ox={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,S]=_.useState(void 0),[C,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const O=()=>j(window.innerHeight);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[a]),_.useEffect(()=>{const O=x.current;if(!O)return;const L=new ResizeObserver(()=>{if(h){const D=O.offsetHeight;S(Q=>Q===D?Q:D)}});return L.observe(O),()=>L.disconnect()},[h]);const E=()=>{if(c&&a)return;const O=!h;p(O),g(!O),u==null||u(O)},T=r.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[r.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:E,children:[r.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&r.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("path",{opacity:"0.5",d:Ox.path,fill:"currentColor"}),Ox.circles.map((O,L)=>r.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&r.jsx(oi.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:r.jsx("path",{d:Kp})})]}),a&&d&&h&&r.jsx("div",{className:"dialkit-panel-toolbar",onClick:O=>O.stopPropagation(),children:d})]}),r.jsx(Vd,{initial:!1,children:h&&r.jsx(oi.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:r.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return r.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const O=h?{width:280,height:b!==void 0?Math.min(b+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return r.jsx(oi.div,{className:"dialkit-panel-inner",style:O,onClick:h?void 0:E,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var m7=3,p7=32,_7=200,g7=8;function zo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var it;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),S=_.useRef(null),[C,j]=_.useState(!1),[E,T]=_.useState(!1),[O,L]=_.useState(!1),[D,Q]=_.useState(!1),[X,W]=_.useState(!1),[V,ee]=_.useState(!1),[ae,re]=_.useState(""),Ae=_.useRef(null),Pe=_.useRef(null),ne=_.useRef(!0),he=_.useRef(null),$=_.useRef(null),ie=_.useRef(1),F=(n-a)/(c-a)*100,fe=C||O,Ee=lp(F),I=ud(Ee,H=>`${H}%`),de=ud(Ee,H=>`max(5px, calc(${H}% - 9px))`),q=lp(0),me=ud(q,H=>`calc(100% + ${Math.abs(H)}px)`),be=ud(q,H=>H<0?H:0);_.useEffect(()=>{!C&&!he.current&&Ee.jump(F)},[F,C,Ee]);const Te=_.useCallback(H=>{const J=$.current;if(!J)return n;const Ce=(H-J.left)/ie.current,et=y.current?y.current.offsetWidth:J.width,Je=Math.max(0,Math.min(1,Ce/et)),Me=a+Je*(c-a);return Math.max(a,Math.min(c,Me))},[a,c,n]),We=_.useCallback(H=>(H-a)/(c-a)*100,[a,c]),Ke=_.useCallback((H,J)=>{const _e=$.current;if(!_e)return 0;const Ce=J<0?_e.left-H:H-_e.right,et=Math.max(0,Ce-p7);return J*g7*Math.sqrt(Math.min(et/_7,1))},[]),Ze=_.useCallback(H=>{if(!V&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Pe.current={x:H.clientX,y:H.clientY},ne.current=!0,j(!0),y.current)){$.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;ie.current=$.current.width/J}},[V]),Lt=_.useCallback(H=>{if(!C||!Pe.current)return;const J=H.clientX-Pe.current.x,_e=H.clientY-Pe.current.y,Ce=Math.sqrt(J*J+_e*_e);if(ne.current&&Ce>m7&&(ne.current=!1,T(!0)),!ne.current){const et=$.current;et&&(H.clientX<et.left?q.jump(Ke(H.clientX,-1)):H.clientX>et.right?q.jump(Ke(H.clientX,1)):q.jump(0));const Je=Te(H.clientX),Me=We(Je);he.current&&(he.current.stop(),he.current=null),Ee.jump(Me),i(Sd(Je,u))}},[C,Te,We,i,Ee,q,Ke]),qt=_.useCallback(H=>{if(C){if(ne.current){const J=Te(H.clientX),Ce=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):a7(J,a,c),et=We(Ce);he.current&&he.current.stop(),he.current=Lx(Ee,et,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{he.current=null}}),i(Sd(Ce,u))}q.get()!==0&&Lx(q,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),Pe.current=null}},[C,Te,We,i,a,c,Ee,q]);_.useEffect(()=>(D&&!V&&!X?Ae.current=setTimeout(()=>{W(!0)},800):!D&&!V&&(Ae.current&&(clearTimeout(Ae.current),Ae.current=null),W(!1)),()=>{Ae.current&&clearTimeout(Ae.current)}),[D,V,X]),_.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const pt=H=>{re(H.target.value)},ze=()=>{const H=parseFloat(ae);if(!isNaN(H)){const J=Math.max(a,Math.min(c,H));i(Sd(J,u))}ee(!1),Q(!1),W(!1)},Et=H=>{X&&(H.stopPropagation(),H.preventDefault(),ee(!0),re(n.toFixed(cp(u))))},Qe=H=>{H.key==="Enter"?ze():H.key==="Escape"&&(ee(!1),Q(!1))},vt=()=>{ze()},we=n.toFixed(cp(u)),oe=8,Re=10,Xe=10;let He=30,Fe=78;const tt=(it=y.current)==null?void 0:it.offsetWidth;tt&&tt>0&&(b.current&&(He=(Re+b.current.offsetWidth+oe)/tt*100),S.current&&(Fe=(tt-Xe-S.current.offsetWidth-oe)/tt*100));const ot=F<He||F>Fe,gt=fe?ot?.1:E?.9:.5:0,xt=(c-a)/u,Ot=xt<=10?Array.from({length:xt-1},(H,J)=>{const _e=(J+1)*u/(c-a)*100;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${_e}%`}},J)}):Array.from({length:9},(H,J)=>{const _e=(J+1)*10;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${_e}%`}},J)});return r.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:r.jsxs(oi.div,{ref:g,className:`dialkit-slider ${fe?"dialkit-slider-active":""}`,onPointerDown:Ze,onPointerMove:Lt,onPointerUp:qt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:me,x:be},children:[r.jsx("div",{className:"dialkit-slider-hashmarks",children:Ot}),r.jsx(oi.div,{className:"dialkit-slider-fill",style:{width:I}}),r.jsx(oi.div,{className:"dialkit-slider-handle",style:{left:de,y:"-50%"},animate:{opacity:gt,scaleX:fe?1:.25,scaleY:fe&&ot?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),r.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&r.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:l7(h)})]}),V?r.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:pt,onKeyDown:Qe,onBlur:vt,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):r.jsx("span",{ref:S,className:`dialkit-slider-value ${X?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>Q(!0),onMouseLeave:()=>Q(!1),onClick:Et,onMouseDown:H=>X&&H.stopPropagation(),style:{cursor:X?"text":"default"},children:we})]})})}function Qp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,r.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&r.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return r.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function y7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&r.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:c7(a)})]}),r.jsx(Qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function x7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),S=-n*p,C=(b+S)/i;p+=C*d,h+=p*d}return c}function _2({spring:t,isSimpleMode:n}){var j,E,T,O,L;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,Q=(E=t.bounce)!=null?E:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-Q)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(O=t.damping)!=null?O:17,d=(L=t.mass)!=null?L:1;const h=2,p=x7(c,u,d,h),y=p.map(([,D])=>D),g=Math.min(...y),b=Math.max(...y)-g,S=p.map(([D,Q],X)=>{const W=D/h*256,ee=140-((Q-g)/(b||1)*140*.6+140*.2);return`${X===0?"M":"L"} ${W} ${ee}`}).join(" "),C=[];for(let D=1;D<4;D++){const Q=64*D,X=140/4*D;C.push(r.jsx("line",{x1:Q,y1:0,x2:Q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),r.jsx("line",{x1:0,y1:X,x2:256,y2:X,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return r.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,r.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,S,C;const u=_.useSyncExternalStore(j=>Zt.subscribe(t,j),()=>Zt.getSpringMode(t,n),()=>Zt.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Zt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,E)=>{if(d){const{stiffness:T,damping:O,mass:L,...D}=a;c({...D,[j]:E})}else{const{visualDuration:T,bounce:O,...L}=a;c({...L,[j]:E})}};return r.jsx(Od,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx(_2,{spring:a,isSimpleMode:d}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(zo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),r.jsx(zo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(zo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),r.jsx(zo,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),r.jsx(zo,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function v7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return r.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[r.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function w7({panelId:t,path:n,label:i,value:a,onChange:c}){var C,j,E,T,O;const u=_.useSyncExternalStore(L=>Zt.subscribe(t,L),()=>Zt.getTransitionMode(t,n),()=>Zt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{Zt.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,D)=>{if(h){const{stiffness:Q,damping:X,mass:W,...V}=y;c({...V,[L]:D})}else{const{visualDuration:Q,bounce:X,...W}=y;c({...W,[L]:D})}},S=(L,D)=>{const Q=[...g.ease];Q[L]=D,c({...g,ease:Q})};return r.jsx(Od,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?r.jsx(v7,{easing:g}):r.jsx(_2,{spring:y,isSimpleMode:h}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(zo,{label:"x1",value:g.ease[0],onChange:L=>S(0,L),min:0,max:1,step:.01}),r.jsx(zo,{label:"y1",value:g.ease[1],onChange:L=>S(1,L),min:-1,max:2,step:.01}),r.jsx(zo,{label:"x2",value:g.ease[2],onChange:L=>S(2,L),min:0,max:1,step:.01}),r.jsx(zo,{label:"y2",value:g.ease[3],onChange:L=>S(3,L),min:-1,max:2,step:.01}),r.jsx(zo,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),r.jsx(C7,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?r.jsxs(r.Fragment,{children:[r.jsx(zo,{label:"Duration",value:(C=y.visualDuration)!=null?C:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),r.jsx(zo,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(zo,{label:"Stiffness",value:(E=y.stiffness)!=null?E:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),r.jsx(zo,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),r.jsx(zo,{label:"Mass",value:(O=y.mass)!=null?O:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function zx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function S7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function C7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(zx(t)),a(!0)},h=()=>{const y=S7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:zx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function k7({label:t,value:n,onChange:i,placeholder:a}){return r.jsxs("div",{className:"dialkit-text-control",children:[r.jsx("label",{className:"dialkit-text-label",children:t}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function j7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function M7(t){return t.map(n=>typeof n=="string"?{value:n,label:j7(n)}:n)}function E7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=M7(i),S=b.find(E=>E.value===n),C=_.useCallback(()=>{const E=d.current;if(!E)return;const T=E.getBoundingClientRect(),O=8+b.length*36,L=window.innerHeight-T.bottom-4,D=L<O&&T.top>L;x({top:D?T.top-4:T.bottom+4,left:T.left,width:T.width,above:D})},[b.length]);return _.useEffect(()=>{var T;const E=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(E!=null?E:document.body)},[]),_.useEffect(()=>{c&&C()},[c,C]),_.useEffect(()=>{if(!c)return;const E=T=>{const O=T.target;d.current&&!d.current.contains(O)&&h.current&&!h.current.contains(O)&&u(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c]),r.jsxs("div",{className:"dialkit-select-row",children:[r.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[r.jsx("span",{className:"dialkit-select-label",children:t}),r.jsxs("div",{className:"dialkit-select-right",children:[r.jsx("span",{className:"dialkit-select-value",children:(j=S==null?void 0:S.label)!=null?j:n}),r.jsx(oi.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Kp})})]})]}),p&&Bc.createPortal(r.jsx(Vd,{children:c&&g&&r.jsx(oi.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(E=>r.jsx("button",{className:"dialkit-select-option","data-selected":String(E.value===n),onClick:()=>{a(E.value),u(!1)},children:E.label},E.value))})}),p)]})}var T7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function A7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),T7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return r.jsxs("div",{className:"dialkit-color-control",children:[r.jsx("span",{className:"dialkit-color-label",children:t}),r.jsxs("div",{className:"dialkit-color-inputs",children:[a?r.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):r.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),r.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),r.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?N7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function N7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function D7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(T=>T.id===i),b=_.useCallback(()=>{var O;if(!g)return;const T=(O=d.current)==null?void 0:O.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),S=_.useCallback(()=>u(!1),[]),C=_.useCallback(()=>{c?S():b()},[c,b,S]);_.useEffect(()=>{if(!c)return;const T=O=>{var D,Q;const L=O.target;(D=d.current)!=null&&D.contains(L)||(Q=h.current)!=null&&Q.contains(L)||S()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,S]);const j=T=>{T?Zt.loadPreset(t,T):Zt.clearActivePreset(t),S()},E=(T,O)=>{T.stopPropagation(),Zt.deletePreset(t,O)};return r.jsxs("div",{className:"dialkit-preset-manager",children:[r.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[r.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),r.jsx(oi.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Kp})})]}),Bc.createPortal(r.jsx(Vd,{children:c&&r.jsxs(oi.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[r.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:r.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>r.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[r.jsx("span",{className:"dialkit-preset-name",children:T.name}),r.jsx("button",{className:"dialkit-preset-delete",onClick:O=>E(O,T.id),title:"Delete preset",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h7.map((O,L)=>r.jsx("path",{d:O},L))})})]},T.id))]})}),document.body)]})}function R7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(p2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(E=>Zt.subscribe(t.id,E),()=>Zt.getValues(t.id),()=>Zt.getValues(t.id)),y=Zt.getPresets(t.id),g=Zt.getActivePresetId(t.id),x=()=>{const E=y.length+2;Zt.savePreset(t.id,`Version ${E}`)},b=()=>{const E=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${E}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},S=E=>{var O,L,D;const T=p[E.path];switch(E.type){case"slider":return r.jsx(zo,{label:E.label,value:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q),min:E.min,max:E.max,step:E.step,shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"toggle":return r.jsx(y7,{label:E.label,checked:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q),shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"spring":return r.jsx(b7,{panelId:t.id,path:E.path,label:E.label,spring:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q)},E.path);case"transition":return r.jsx(w7,{panelId:t.id,path:E.path,label:E.label,value:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q)},E.path);case"folder":return r.jsx(Od,{title:E.label,defaultOpen:(O=E.defaultOpen)!=null?O:!0,children:(L=E.children)==null?void 0:L.map(S)},E.path);case"text":return r.jsx(k7,{label:E.label,value:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q),placeholder:E.placeholder},E.path);case"select":return r.jsx(E7,{label:E.label,value:T,options:(D=E.options)!=null?D:[],onChange:Q=>Zt.updateValue(t.id,E.path,Q)},E.path);case"color":return r.jsx(A7,{label:E.label,value:T,onChange:Q=>Zt.updateValue(t.id,E.path,Q)},E.path);case"action":return r.jsx("button",{className:"dialkit-button",onClick:()=>Zt.triggerAction(t.id,E.path),children:E.label},E.path);default:return null}},C=()=>t.controls.map(S),j=r.jsxs(r.Fragment,{children:[r.jsx(oi.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f7.map((E,T)=>r.jsx("path",{d:E},T))})}),r.jsx(D7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),r.jsx(oi.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("span",{style:{position:"relative",width:16,height:16},children:r.jsx(Vd,{initial:!1,mode:"wait",children:a?r.jsx(oi.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:r.jsx("path",{d:d7})},"check"):r.jsxs(oi.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[r.jsx("path",{d:Mm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),r.jsx("path",{d:Mm.sparkle,fill:"currentColor"}),r.jsx("path",{d:Mm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return r.jsx("div",{className:"dialkit-panel-wrapper",children:r.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:C()})})}var B7=typeof process<"u"?!1:!(typeof import.meta<"u");function L7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=B7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[S,C]=_.useState(t),j=_.useRef(null),E=_.useRef(!1),T=_.useRef(null),O=_.useRef(!1);_.useEffect(()=>(p(!0),d(Zt.getPanels()),Zt.subscribeGlobal(()=>{d(Zt.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const V=new MutationObserver(()=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee)return;if(ee.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Ae=x.x+21,Pe=window.innerWidth/2;C(Ae<Pe?"top-left":"top-right")}else C(t);b(null)}});return V.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[y,x,t]);const L=_.useCallback(V=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee||ee.getAttribute("data-collapsed")!=="true")return;const ae=g.current.getBoundingClientRect();T.current={pointerX:V.clientX,pointerY:V.clientY,elX:ae.left,elY:ae.top},O.current=!1,E.current=!0,V.target.setPointerCapture(V.pointerId)},[]),D=_.useCallback(V=>{if(!E.current||!T.current)return;const ee=V.clientX-T.current.pointerX,ae=V.clientY-T.current.pointerY;!O.current&&Math.abs(ee)+Math.abs(ae)<4||(O.current=!0,b({x:T.current.elX+ee,y:T.current.elY+ae}))},[]),Q=_.useCallback(V=>{var ee;if(E.current&&(E.current=!1,T.current=null,O.current)){V.stopPropagation();const ae=(ee=g.current)==null?void 0:ee.querySelector(".dialkit-panel-inner");if(ae){const re=Ae=>{Ae.stopPropagation()};ae.addEventListener("click",re,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const X=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=r.jsx(u7,{children:r.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:r.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:S,"data-mode":i,style:X,onPointerDown:y?void 0:L,onPointerMove:y?void 0:D,onPointerUp:y?void 0:Q,children:u.map(V=>r.jsx(R7,{panel:V,defaultOpen:y||n,inline:y},V.id))})})});return y?W:Bc.createPortal(W,document.body)}const O7=()=>(ZM("Git Visualizer",{preview:[1,0,1]}),null),z7=({children:t})=>r.jsxs(r.Fragment,{children:[t,r.jsx(O7,{}),r.jsx(L7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),r.jsx($C,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Vv.createRoot(document.getElementById("root")).render(r.jsx(z7,{children:r.jsx(vS,{})}));

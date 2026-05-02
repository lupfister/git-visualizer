(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function $x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hh={exports:{}},hc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Bv(){if(ny)return hc;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return hc.Fragment=n,hc.jsx=i,hc.jsxs=i,hc}var sy;function Lv(){return sy||(sy=1,Hh.exports=Bv()),Hh.exports}var l=Lv(),Uh={exports:{}},mc={},Vh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Ov(){return oy||(oy=1,(function(t){function n(z,ce){var W=z.length;z.push(ce);e:for(;0<W;){var ge=W-1>>>1,De=z[ge];if(0<c(De,ce))z[ge]=ce,z[W]=De,W=ge;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var ce=z[0],W=z.pop();if(W!==ce){z[0]=W;e:for(var ge=0,De=z.length,P=De>>>1;ge<P;){var ue=2*(ge+1)-1,ne=z[ue],ke=ue+1,de=z[ke];if(0>c(ne,W))ke<De&&0>c(de,ne)?(z[ge]=de,z[ke]=W,ge=ke):(z[ge]=ne,z[ue]=W,ge=ue);else if(ke<De&&0>c(de,W))z[ge]=de,z[ke]=W,ge=ke;else break e}}return ce}function c(z,ce){var W=z.sortIndex-ce.sortIndex;return W!==0?W:z.id-ce.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,w=!1,S=!1,k=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function M(z){for(var ce=i(y);ce!==null;){if(ce.callback===null)a(y);else if(ce.startTime<=z)a(y),ce.sortIndex=ce.expirationTime,n(p,ce);else break;ce=i(y)}}function q(z){if(k=!1,M(z),!S)if(i(p)!==null)S=!0,U||(U=!0,Se());else{var ce=i(y);ce!==null&&le(q,ce.startTime-z)}}var U=!1,X=-1,Z=5,he=-1;function me(){return j?!0:!(t.unstable_now()-he<Z)}function pe(){if(j=!1,U){var z=t.unstable_now();he=z;var ce=!0;try{e:{S=!1,k&&(k=!1,O(X),X=-1),w=!0;var W=b;try{t:{for(M(z),x=i(p);x!==null&&!(x.expirationTime>z&&me());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,b=x.priorityLevel;var De=ge(x.expirationTime<=z);if(z=t.unstable_now(),typeof De=="function"){x.callback=De,M(z),ce=!0;break t}x===i(p)&&a(p),M(z)}else a(p);x=i(p)}if(x!==null)ce=!0;else{var P=i(y);P!==null&&le(q,P.startTime-z),ce=!1}}break e}finally{x=null,b=W,w=!1}ce=void 0}}finally{ce?Se():U=!1}}}var Se;if(typeof N=="function")Se=function(){N(pe)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ee=Le.port2;Le.port1.onmessage=pe,Se=function(){ee.postMessage(null)}}else Se=function(){E(pe,0)};function le(z,ce){X=E(function(){z(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var ce=3;break;default:ce=b}var W=b;b=ce;try{return z()}finally{b=W}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=b;b=z;try{return ce()}finally{b=W}},t.unstable_scheduleCallback=function(z,ce,W){var ge=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,z){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=W+De,z={id:g++,callback:ce,priorityLevel:z,startTime:W,expirationTime:De,sortIndex:-1},W>ge?(z.sortIndex=W,n(y,z),i(p)===null&&z===i(y)&&(k?(O(X),X=-1):k=!0,le(q,W-ge))):(z.sortIndex=De,n(p,z),S||w||(S=!0,U||(U=!0,Se()))),z},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(z){var ce=b;return function(){var W=b;b=ce;try{return z.apply(this,arguments)}finally{b=W}}}})(Yh)),Yh}var iy;function zv(){return iy||(iy=1,Vh.exports=Ov()),Vh.exports}var Wh={exports:{}},un={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function $v(){if(ay)return un;ay=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,j={};function E(P,ue,ne){this.props=P,this.context=ue,this.refs=j,this.updater=ne||S}E.prototype.isReactComponent={},E.prototype.setState=function(P,ue){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ue,"setState")},E.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=E.prototype;function N(P,ue,ne){this.props=P,this.context=ue,this.refs=j,this.updater=ne||S}var M=N.prototype=new O;M.constructor=N,k(M,E.prototype),M.isPureReactComponent=!0;var q=Array.isArray;function U(){}var X={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function he(P,ue,ne){var ke=ne.ref;return{$$typeof:t,type:P,key:ue,ref:ke!==void 0?ke:null,props:ne}}function me(P,ue){return he(P.type,ue,P.props)}function pe(P){return typeof P=="object"&&P!==null&&P.$$typeof===t}function Se(P){var ue={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ne){return ue[ne]})}var Le=/\/+/g;function ee(P,ue){return typeof P=="object"&&P!==null&&P.key!=null?Se(""+P.key):ue.toString(36)}function le(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(ue){P.status==="pending"&&(P.status="fulfilled",P.value=ue)},function(ue){P.status==="pending"&&(P.status="rejected",P.reason=ue)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,ue,ne,ke,de){var Me=typeof P;(Me==="undefined"||Me==="boolean")&&(P=null);var Ye=!1;if(P===null)Ye=!0;else switch(Me){case"bigint":case"string":case"number":Ye=!0;break;case"object":switch(P.$$typeof){case t:case n:Ye=!0;break;case g:return Ye=P._init,z(Ye(P._payload),ue,ne,ke,de)}}if(Ye)return de=de(P),Ye=ke===""?"."+ee(P,0):ke,q(de)?(ne="",Ye!=null&&(ne=Ye.replace(Le,"$&/")+"/"),z(de,ue,ne,"",function(Dt){return Dt})):de!=null&&(pe(de)&&(de=me(de,ne+(de.key==null||P&&P.key===de.key?"":(""+de.key).replace(Le,"$&/")+"/")+Ye)),ue.push(de)),1;Ye=0;var Je=ke===""?".":ke+":";if(q(P))for(var He=0;He<P.length;He++)ke=P[He],Me=Je+ee(ke,He),Ye+=z(ke,ue,ne,Me,de);else if(He=w(P),typeof He=="function")for(P=He.call(P),He=0;!(ke=P.next()).done;)ke=ke.value,Me=Je+ee(ke,He++),Ye+=z(ke,ue,ne,Me,de);else if(Me==="object"){if(typeof P.then=="function")return z(le(P),ue,ne,ke,de);throw ue=String(P),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.")}return Ye}function ce(P,ue,ne){if(P==null)return P;var ke=[],de=0;return z(P,ke,"","",function(Me){return ue.call(ne,Me,de++)}),ke}function W(P){if(P._status===-1){var ue=P._result;ue=ue(),ue.then(function(ne){(P._status===0||P._status===-1)&&(P._status=1,P._result=ne)},function(ne){(P._status===0||P._status===-1)&&(P._status=2,P._result=ne)}),P._status===-1&&(P._status=0,P._result=ue)}if(P._status===1)return P._result.default;throw P._result}var ge=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ue=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ue))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},De={map:ce,forEach:function(P,ue,ne){ce(P,function(){ue.apply(this,arguments)},ne)},count:function(P){var ue=0;return ce(P,function(){ue++}),ue},toArray:function(P){return ce(P,function(ue){return ue})||[]},only:function(P){if(!pe(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return un.Activity=x,un.Children=De,un.Component=E,un.Fragment=i,un.Profiler=c,un.PureComponent=N,un.StrictMode=a,un.Suspense=p,un.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,un.__COMPILER_RUNTIME={__proto__:null,c:function(P){return X.H.useMemoCache(P)}},un.cache=function(P){return function(){return P.apply(null,arguments)}},un.cacheSignal=function(){return null},un.cloneElement=function(P,ue,ne){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ke=k({},P.props),de=P.key;if(ue!=null)for(Me in ue.key!==void 0&&(de=""+ue.key),ue)!Z.call(ue,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&ue.ref===void 0||(ke[Me]=ue[Me]);var Me=arguments.length-2;if(Me===1)ke.children=ne;else if(1<Me){for(var Ye=Array(Me),Je=0;Je<Me;Je++)Ye[Je]=arguments[Je+2];ke.children=Ye}return he(P.type,de,ke)},un.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},un.createElement=function(P,ue,ne){var ke,de={},Me=null;if(ue!=null)for(ke in ue.key!==void 0&&(Me=""+ue.key),ue)Z.call(ue,ke)&&ke!=="key"&&ke!=="__self"&&ke!=="__source"&&(de[ke]=ue[ke]);var Ye=arguments.length-2;if(Ye===1)de.children=ne;else if(1<Ye){for(var Je=Array(Ye),He=0;He<Ye;He++)Je[He]=arguments[He+2];de.children=Je}if(P&&P.defaultProps)for(ke in Ye=P.defaultProps,Ye)de[ke]===void 0&&(de[ke]=Ye[ke]);return he(P,Me,de)},un.createRef=function(){return{current:null}},un.forwardRef=function(P){return{$$typeof:h,render:P}},un.isValidElement=pe,un.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:W}},un.memo=function(P,ue){return{$$typeof:y,type:P,compare:ue===void 0?null:ue}},un.startTransition=function(P){var ue=X.T,ne={};X.T=ne;try{var ke=P(),de=X.S;de!==null&&de(ne,ke),typeof ke=="object"&&ke!==null&&typeof ke.then=="function"&&ke.then(U,ge)}catch(Me){ge(Me)}finally{ue!==null&&ne.types!==null&&(ue.types=ne.types),X.T=ue}},un.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},un.use=function(P){return X.H.use(P)},un.useActionState=function(P,ue,ne){return X.H.useActionState(P,ue,ne)},un.useCallback=function(P,ue){return X.H.useCallback(P,ue)},un.useContext=function(P){return X.H.useContext(P)},un.useDebugValue=function(){},un.useDeferredValue=function(P,ue){return X.H.useDeferredValue(P,ue)},un.useEffect=function(P,ue){return X.H.useEffect(P,ue)},un.useEffectEvent=function(P){return X.H.useEffectEvent(P)},un.useId=function(){return X.H.useId()},un.useImperativeHandle=function(P,ue,ne){return X.H.useImperativeHandle(P,ue,ne)},un.useInsertionEffect=function(P,ue){return X.H.useInsertionEffect(P,ue)},un.useLayoutEffect=function(P,ue){return X.H.useLayoutEffect(P,ue)},un.useMemo=function(P,ue){return X.H.useMemo(P,ue)},un.useOptimistic=function(P,ue){return X.H.useOptimistic(P,ue)},un.useReducer=function(P,ue,ne){return X.H.useReducer(P,ue,ne)},un.useRef=function(P){return X.H.useRef(P)},un.useState=function(P){return X.H.useState(P)},un.useSyncExternalStore=function(P,ue,ne){return X.H.useSyncExternalStore(P,ue,ne)},un.useTransition=function(){return X.H.useTransition()},un.version="19.2.4",un}var ry;function hp(){return ry||(ry=1,Wh.exports=$v()),Wh.exports}var Fh={exports:{}},qo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Iv(){if(ly)return qo;ly=1;var t=hp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return qo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},qo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},qo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},qo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},qo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},qo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},qo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},qo.requestFormReset=function(p){a.d.r(p)},qo.unstable_batchedUpdates=function(p,y){return p(y)},qo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},qo.useFormStatus=function(){return d.H.useHostTransitionStatus()},qo.version="19.2.4",qo}var cy;function Ix(){if(cy)return Fh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Fh.exports=Iv(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Pv(){if(uy)return mc;uy=1;var t=zv(),n=hp(),i=Ix();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case E:return"Profiler";case j:return"StrictMode";case q:return"Suspense";case U:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case N:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case M:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return s=e.displayName||null,s!==null?s:ee(e.type)||"Memo";case Z:s=e._payload,e=e._init;try{return ee(e(s))}catch{}}return null}var le=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ge=[],De=-1;function P(e){return{current:e}}function ue(e){0>De||(e.current=ge[De],ge[De]=null,De--)}function ne(e,s){De++,ge[De]=e.current,e.current=s}var ke=P(null),de=P(null),Me=P(null),Ye=P(null);function Je(e,s){switch(ne(Me,s),ne(de,e),ne(ke,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=k0(s),e=j0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ue(ke),ne(ke,e)}function He(){ue(ke),ue(de),ue(Me)}function Dt(e){e.memoizedState!==null&&ne(Ye,e);var s=ke.current,o=j0(s,e.type);s!==o&&(ne(de,e),ne(ke,o))}function It(e){de.current===e&&(ue(ke),ue(de)),Ye.current===e&&(ue(Ye),cc._currentValue=W)}var yt,lt;function ut(e){if(yt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);yt=s&&s[1]||"",lt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+lt}var Zt=!1;function fn(e,s){if(!e||Zt)return"";Zt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ve=function(){throw Error()};if(Object.defineProperty(Ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ve,[])}catch(Ee){var we=Ee}Reflect.construct(e,[],Ve)}else{try{Ve.call()}catch(Ee){we=Ee}e.call(Ve.prototype)}}else{try{throw Error()}catch(Ee){we=Ee}(Ve=e())&&typeof Ve.catch=="function"&&Ve.catch(function(){})}}catch(Ee){if(Ee&&we&&typeof Ee.stack=="string")return[Ee.stack,we.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var K=v.split(`
`),be=A.split(`
`);for(f=r=0;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;for(;f<be.length&&!be[f].includes("DetermineComponentFrameRoot");)f++;if(r===K.length||f===be.length)for(r=K.length-1,f=be.length-1;1<=r&&0<=f&&K[r]!==be[f];)f--;for(;1<=r&&0<=f;r--,f--)if(K[r]!==be[f]){if(r!==1||f!==1)do if(r--,f--,0>f||K[r]!==be[f]){var Oe=`
`+K[r].replace(" at new "," at ");return e.displayName&&Oe.includes("<anonymous>")&&(Oe=Oe.replace("<anonymous>",e.displayName)),Oe}while(1<=r&&0<=f);break}}}finally{Zt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?ut(o):""}function tn(e,s){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==s&&s!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return ut("Activity");default:return""}}function Q(e){try{var s="",o=null;do s+=tn(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var $e=Object.prototype.hasOwnProperty,ct=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,ot=t.unstable_shouldYield,it=t.unstable_requestPaint,mt=t.unstable_now,Tt=t.unstable_getCurrentPriorityLevel,Ct=t.unstable_ImmediatePriority,zt=t.unstable_UserBlockingPriority,ft=t.unstable_NormalPriority,H=t.unstable_LowPriority,J=t.unstable_IdlePriority,ve=t.log,Ae=t.unstable_setDisableYieldValue,at=null,Ke=null;function Re(e){if(typeof ve=="function"&&Ae(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(at,e)}catch{}}var _e=Math.clz32?Math.clz32:Qe,et=Math.log,We=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(et(e)/We|0)|0}var Be=256,tt=262144,xt=4194304;function jt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=jt(r):(v&=A,v!==0?f=jt(v):o||(o=A&~e,o!==0&&(f=jt(o))))):(A=r&~m,A!==0?f=jt(A):v!==0?f=jt(v):o||(o=r&~e,o!==0&&(f=jt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Lt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function wt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function nn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function _t(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,K=e.expirationTimes,be=e.hiddenUpdates;for(o=v&~o;0<o;){var Oe=31-_e(o),Ve=1<<Oe;A[Oe]=0,K[Oe]=-1;var we=be[Oe];if(we!==null)for(be[Oe]=null,Oe=0;Oe<we.length;Oe++){var Ee=we[Oe];Ee!==null&&(Ee.lane&=-536870913)}o&=~Ve}r!==0&&en(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function en(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-_e(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function Rt(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-_e(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function vt(e,s){var o=s&-s;return o=(o&42)!==0?1:Jt(o),(o&(e.suspendedLanes|s))!==0?0:o}function Jt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rn(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function $t(e,s){var o=ce.p;try{return ce.p=e,s()}finally{ce.p=o}}var bn=Math.random().toString(36).slice(2),kt="__reactFiber$"+bn,Fn="__reactProps$"+bn,rt="__reactContainer$"+bn,kn="__reactEvents$"+bn,ho="__reactListeners$"+bn,Fo="__reactHandles$"+bn,mo="__reactResources$"+bn,So="__reactMarker$"+bn;function Co(e){delete e[kt],delete e[Fn],delete e[kn],delete e[ho],delete e[Fo]}function qt(e){var s=e[kt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[rt]||o[kt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=R0(e);e!==null;){if(o=e[kt])return o;e=R0(e)}return s}e=o,o=e.parentNode}return null}function An(e){if(e=e[kt]||e[rt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Ds(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Xn(e){var s=e[mo];return s||(s=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function wn(e){e[So]=!0}var Bs=new Set,$s={};function jn(e,s){In(e,s),In(e+"Capture",s)}function In(e,s){for($s[e]=s,e=0;e<s.length;e++)Bs.add(s[e])}var Ms=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Is={},Ps={};function Ro(e){return $e.call(Ps,e)?!0:$e.call(Is,e)?!1:Ms.test(e)?Ps[e]=!0:(Is[e]=!0,!1)}function no(e,s,o){if(Ro(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function is(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Ss(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function Dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function so(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ci(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Ls(e){if(!e._valueTracker){var s=so(e)?"checked":"value";e._valueTracker=ci(e,s,""+e[s])}}function oo(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=so(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cs=/[\n"\\]/g;function es(e){return e.replace(Cs,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ko(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Dn(s)):e.value!==""+Dn(s)&&(e.value=""+Dn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Es(e,v,Dn(s)):o!=null?Es(e,v,Dn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Dn(A):e.removeAttribute("name")}function Pn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ls(e);return}o=o!=null?""+Dn(o):"",s=s!=null?""+Dn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ls(e)}function Es(e,s,o){s==="number"&&po(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ys(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+Dn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function us(e,s,o){if(s!=null&&(s=""+Dn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Dn(o):""}function Qi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(le(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Dn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Ls(e)}function Qo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Li.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function ui(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&sn(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&sn(e,m,s[m])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ji=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(e){return Ji.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xs(){}var Oi=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yn=null,jo=null;function di(e){var s=An(e);if(s&&(e=s.stateNode)){var o=e[Fn]||null;e:switch(e=s.stateNode,s.type){case"input":if(ko(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+es(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Fn]||null;if(!f)throw Error(a(90));ko(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&oo(r)}break e;case"textarea":us(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ys(e,!!o.multiple,s,!1)}}}var Us=!1;function Lo(e,s,o){if(Us)return e(s,o);Us=!0;try{var r=e(s);return r}finally{if(Us=!1,(Yn!==null||jo!==null)&&(Mu(),Yn&&(s=Yn,e=jo,jo=Yn=null,di(s),e)))for(s=0;s<e.length;s++)di(e[s])}}function gn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Fn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var qs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=!1;if(qs)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Vs=!1}var Wn=null,Zo=null,io=null;function zi(){if(io)return io;var e,s=Zo,o=s.length,r,f="value"in Wn?Wn.value:Wn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return io=f.slice(e,1<r?1-r:void 0)}function Ks(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Oo(){return!1}function Gn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Eo:Oo,this.isPropagationStopped=Oo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),s}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Gn(ks),_o=x({},ks,{view:0,detail:0}),go=Gn(_o),ts,yo,qn,Qs=x({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(ts=e.screenX-qn.screenX,yo=e.screenY-qn.screenY):yo=ts=0,qn=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),Jo=Gn(Qs),ei=x({},Qs,{dataTransfer:0}),$i=Gn(ei),fi=x({},_o,{relatedTarget:0}),hi=Gn(fi),zo=x({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Gn(zo),zs=x({},ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ns=Gn(zs),Zs=x({},ks,{data:0}),Et=Gn(Zs),Xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ti(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=$o[e])?!!s[e]:!1}function Ao(){return ti}var xo=x({},_o,{key:function(e){if(e.key){var s=Xo[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?Ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mi=Gn(xo),C=x({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Y=Gn(C),re=x({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Te=Gn(re),Xe=x({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),st=Gn(Xe),Kt=x({},Qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wt=Gn(Kt),ln=x({},ks,{newState:0,oldState:0}),mn=Gn(ln),Nn=[9,13,27,32],Hn=qs&&"CompositionEvent"in window,Mn=null;qs&&"documentMode"in document&&(Mn=document.documentMode);var B=qs&&"TextEvent"in window&&!Mn,R=qs&&(!Hn||Mn&&8<Mn&&11>=Mn),I=" ",te=!1;function fe(e,s){switch(e){case"keyup":return Nn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ue(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ge=!1;function bt(e,s){switch(e){case"compositionend":return Ue(s);case"keypress":return s.which!==32?null:(te=!0,I);case"textInput":return e=s.data,e===I&&te?null:e;default:return null}}function an(e,s){if(Ge)return e==="compositionend"||!Hn&&fe(e,s)?(e=zi(),io=Zo=Wn=null,Ge=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return R&&s.locale!=="ko"?null:s.data;default:return null}}var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xt(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Un[e.type]:s==="textarea"}function bs(e,s,o,r){Yn?jo?jo.push(r):jo=[r]:Yn=r,s=Bu(s,"onChange"),0<s.length&&(o=new To("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var Pt=null,Sn=null;function Rn(e){x0(e,0)}function D(e){var s=Ds(e);if(oo(s))return e}function L(e,s){if(e==="change")return s}var F=!1;if(qs){var G;if(qs){var T="oninput"in document;if(!T){var V=document.createElement("div");V.setAttribute("oninput","return;"),T=typeof V.oninput=="function"}G=T}else G=!1;F=G&&(!document.documentMode||9<document.documentMode)}function ie(){Pt&&(Pt.detachEvent("onpropertychange",oe),Sn=Pt=null)}function oe(e){if(e.propertyName==="value"&&D(Sn)){var s=[];bs(s,Sn,e,Hs(e)),Lo(Rn,s)}}function ye(e,s,o){e==="focusin"?(ie(),Pt=s,Sn=o,Pt.attachEvent("onpropertychange",oe)):e==="focusout"&&ie()}function Ne(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(Sn)}function qe(e,s){if(e==="click")return D(s)}function pt(e,s){if(e==="input"||e==="change")return D(s)}function St(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ht=typeof Object.is=="function"?Object.is:St;function dt(e,s){if(ht(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!$e.call(s,f)||!ht(e[f],s[f]))return!1}return!0}function Bn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function on(e,s){var o=Bn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bn(o)}}function cn(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?cn(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Qt(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=po(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=po(e.document)}return s}function Ln(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Ht=qs&&"documentMode"in document&&11>=document.documentMode,Yt=null,ds=null,On=null,Ys=!1;function bo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ys||Yt==null||Yt!==po(r)||(r=Yt,"selectionStart"in r&&Ln(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&dt(On,r)||(On=r,r=Bu(ds,"onSelect"),0<r.length&&(s=new To("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Yt)))}function as(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ni={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},pi={},_i={};qs&&(_i=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function ns(e){if(pi[e])return pi[e];if(!ni[e])return e;var s=ni[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in _i)return pi[e]=s[o];return e}var gi=ns("animationend"),Ci=ns("animationiteration"),mr=ns("animationstart"),Pr=ns("transitionrun"),Hr=ns("transitionstart"),vn=ns("transitioncancel"),fs=ns("transitionend"),Io=new Map,ki="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ki.push("scrollEnd");function Go(e,s){Io.set(e,s),jn(s,[e])}var Do=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kn=[],Ur=0,ef=0;function Gc(){for(var e=Ur,s=ef=Ur=0;s<e;){var o=Kn[s];Kn[s++]=null;var r=Kn[s];Kn[s++]=null;var f=Kn[s];Kn[s++]=null;var m=Kn[s];if(Kn[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&e_(o,f,m)}}function qc(e,s,o,r){Kn[Ur++]=e,Kn[Ur++]=s,Kn[Ur++]=o,Kn[Ur++]=r,ef|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tf(e,s,o,r){return qc(e,s,o,r),Kc(e)}function pr(e,s){return qc(e,null,null,s),Kc(e)}function e_(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-_e(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Kc(e){if(50<nc)throw nc=0,dh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Vr={};function g2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(e,s,o,r){return new g2(e,s,o,r)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,s){var o=e.alternate;return o===null?(o=ji(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function t_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Qc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")nf(e)&&(v=1);else if(typeof e=="string")v=wv(e,o,ke.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=ji(31,o,s,f),e.elementType=he,e.lanes=m,e;case k:return _r(o.children,f,m,s);case j:v=8,f|=24;break;case E:return e=ji(12,o,s,f|2),e.elementType=E,e.lanes=m,e;case q:return e=ji(13,o,s,f),e.elementType=q,e.lanes=m,e;case U:return e=ji(19,o,s,f),e.elementType=U,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case O:v=9;break e;case M:v=11;break e;case X:v=14;break e;case Z:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=ji(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function _r(e,s,o,r){return e=ji(7,e,r,s),e.lanes=o,e}function sf(e,s,o){return e=ji(6,e,null,s),e.lanes=o,e}function n_(e){var s=ji(18,null,null,0);return s.stateNode=e,s}function of(e,s,o){return s=ji(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var s_=new WeakMap;function Ii(e,s){if(typeof e=="object"&&e!==null){var o=s_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:Q(s)},s_.set(e,s),s)}return{value:e,source:s,stack:Q(s)}}var Yr=[],Wr=0,Zc=null,Ll=0,Pi=[],Hi=0,$a=null,ca=1,ua="";function xa(e,s){Yr[Wr++]=Ll,Yr[Wr++]=Zc,Zc=e,Ll=s}function o_(e,s,o){Pi[Hi++]=ca,Pi[Hi++]=ua,Pi[Hi++]=$a,$a=e;var r=ca;e=ua;var f=32-_e(r)-1;r&=~(1<<f),o+=1;var m=32-_e(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ca=1<<32-_e(s)+f|o<<f|r,ua=m+e}else ca=1<<m|o<<f|r,ua=e}function af(e){e.return!==null&&(xa(e,1),o_(e,1,0))}function rf(e){for(;e===Zc;)Zc=Yr[--Wr],Yr[Wr]=null,Ll=Yr[--Wr],Yr[Wr]=null;for(;e===$a;)$a=Pi[--Hi],Pi[Hi]=null,ua=Pi[--Hi],Pi[Hi]=null,ca=Pi[--Hi],Pi[Hi]=null}function i_(e,s){Pi[Hi++]=ca,Pi[Hi++]=ua,Pi[Hi++]=$a,ca=s.id,ua=s.overflow,$a=e}var Po=null,Ts=null,Vn=!1,Ia=null,Ui=!1,lf=Error(a(519));function Pa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Ii(s,e)),lf}function a_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[kt]=e,s[Fn]=r,o){case"dialog":Tn("cancel",s),Tn("close",s);break;case"iframe":case"object":case"embed":Tn("load",s);break;case"video":case"audio":for(o=0;o<oc.length;o++)Tn(oc[o],s);break;case"source":Tn("error",s);break;case"img":case"image":case"link":Tn("error",s),Tn("load",s);break;case"details":Tn("toggle",s);break;case"input":Tn("invalid",s),Pn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Tn("invalid",s);break;case"textarea":Tn("invalid",s),Qi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||S0(s.textContent,o)?(r.popover!=null&&(Tn("beforetoggle",s),Tn("toggle",s)),r.onScroll!=null&&Tn("scroll",s),r.onScrollEnd!=null&&Tn("scrollend",s),r.onClick!=null&&(s.onclick=xs),s=!0):s=!1,s||Pa(e,!0)}function r_(e){for(Po=e.return;Po;)switch(Po.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Po=Po.return}}function Fr(e){if(e!==Po)return!1;if(!Vn)return r_(e),Vn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||jh(e.type,e.memoizedProps)),o=!o),o&&Ts&&Pa(e),r_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ts=N0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ts=N0(e)}else s===27?(s=Ts,er(e.type)?(e=Dh,Dh=null,Ts=e):Ts=s):Ts=Po?Yi(e.stateNode.nextSibling):null;return!0}function gr(){Ts=Po=null,Vn=!1}function cf(){var e=Ia;return e!==null&&(vi===null?vi=e:vi.push.apply(vi,e),Ia=null),e}function Ol(e){Ia===null?Ia=[e]:Ia.push(e)}var uf=P(null),yr=null,ba=null;function Ha(e,s,o){ne(uf,s._currentValue),s._currentValue=o}function va(e){e._currentValue=uf.current,ue(uf)}function df(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function ff(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var K=0;K<s.length;K++)if(A.context===s[K]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),df(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),df(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Xr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;ht(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Ye.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(cc):e=[cc])}f=f.return}e!==null&&ff(s,e,o,r),s.flags|=262144}function Jc(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xr(e){yr=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ho(e){return l_(yr,e)}function eu(e,s){return yr===null&&xr(e),l_(e,s)}function l_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ba===null){if(e===null)throw Error(a(308));ba=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ba=ba.next=s;return o}var y2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},x2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,ao={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new y2,data:new Map,refCount:0}}function zl(e){e.refCount--,e.refCount===0&&x2(b2,function(){e.controller.abort()})}var $l=null,mf=0,Gr=0,qr=null;function v2(e,s){if($l===null){var o=$l=[];mf=0,Gr=gh(),qr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return mf++,s.then(c_,c_),s}function c_(){if(--mf===0&&$l!==null){qr!==null&&(qr.status="fulfilled");var e=$l;$l=null,Gr=0,qr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function w2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var u_=z.S;z.S=function(e,s){Xg=mt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&v2(e,s),u_!==null&&u_(e,s)};var br=P(null);function pf(){var e=br.current;return e!==null?e:vs.pooledCache}function tu(e,s){s===null?ne(br,br.current):ne(br,s.pool)}function d_(){var e=pf();return e===null?null:{parent:ao._currentValue,pool:e}}var Kr=Error(a(460)),_f=Error(a(474)),nu=Error(a(542)),su={then:function(){}};function f_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(xs,xs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e;default:if(typeof s.status=="string")s.then(xs,xs);else{if(e=vs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e}throw wr=s,Kr}}function vr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(wr=o,Kr):o}}var wr=null;function m_(){if(wr===null)throw Error(a(459));var e=wr;return wr=null,e}function p_(e){if(e===Kr||e===nu)throw Error(a(483))}var Qr=null,Il=0;function ou(e){var s=Il;return Il+=1,Qr===null&&(Qr=[]),h_(Qr,e,s)}function Pl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function iu(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function __(e){function s(ae,se){if(e){var xe=ae.deletions;xe===null?(ae.deletions=[se],ae.flags|=16):xe.push(se)}}function o(ae,se){if(!e)return null;for(;se!==null;)s(ae,se),se=se.sibling;return null}function r(ae){for(var se=new Map;ae!==null;)ae.key!==null?se.set(ae.key,ae):se.set(ae.index,ae),ae=ae.sibling;return se}function f(ae,se){return ae=ya(ae,se),ae.index=0,ae.sibling=null,ae}function m(ae,se,xe){return ae.index=xe,e?(xe=ae.alternate,xe!==null?(xe=xe.index,xe<se?(ae.flags|=67108866,se):xe):(ae.flags|=67108866,se)):(ae.flags|=1048576,se)}function v(ae){return e&&ae.alternate===null&&(ae.flags|=67108866),ae}function A(ae,se,xe,Pe){return se===null||se.tag!==6?(se=sf(xe,ae.mode,Pe),se.return=ae,se):(se=f(se,xe),se.return=ae,se)}function K(ae,se,xe,Pe){var Ut=xe.type;return Ut===k?Oe(ae,se,xe.props.children,Pe,xe.key):se!==null&&(se.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===Z&&vr(Ut)===se.type)?(se=f(se,xe.props),Pl(se,xe),se.return=ae,se):(se=Qc(xe.type,xe.key,xe.props,null,ae.mode,Pe),Pl(se,xe),se.return=ae,se)}function be(ae,se,xe,Pe){return se===null||se.tag!==4||se.stateNode.containerInfo!==xe.containerInfo||se.stateNode.implementation!==xe.implementation?(se=of(xe,ae.mode,Pe),se.return=ae,se):(se=f(se,xe.children||[]),se.return=ae,se)}function Oe(ae,se,xe,Pe,Ut){return se===null||se.tag!==7?(se=_r(xe,ae.mode,Pe,Ut),se.return=ae,se):(se=f(se,xe),se.return=ae,se)}function Ve(ae,se,xe){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=sf(""+se,ae.mode,xe),se.return=ae,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case w:return xe=Qc(se.type,se.key,se.props,null,ae.mode,xe),Pl(xe,se),xe.return=ae,xe;case S:return se=of(se,ae.mode,xe),se.return=ae,se;case Z:return se=vr(se),Ve(ae,se,xe)}if(le(se)||Se(se))return se=_r(se,ae.mode,xe,null),se.return=ae,se;if(typeof se.then=="function")return Ve(ae,ou(se),xe);if(se.$$typeof===N)return Ve(ae,eu(ae,se),xe);iu(ae,se)}return null}function we(ae,se,xe,Pe){var Ut=se!==null?se.key:null;if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Ut!==null?null:A(ae,se,""+xe,Pe);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case w:return xe.key===Ut?K(ae,se,xe,Pe):null;case S:return xe.key===Ut?be(ae,se,xe,Pe):null;case Z:return xe=vr(xe),we(ae,se,xe,Pe)}if(le(xe)||Se(xe))return Ut!==null?null:Oe(ae,se,xe,Pe,null);if(typeof xe.then=="function")return we(ae,se,ou(xe),Pe);if(xe.$$typeof===N)return we(ae,se,eu(ae,xe),Pe);iu(ae,xe)}return null}function Ee(ae,se,xe,Pe,Ut){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number"||typeof Pe=="bigint")return ae=ae.get(xe)||null,A(se,ae,""+Pe,Ut);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case w:return ae=ae.get(Pe.key===null?xe:Pe.key)||null,K(se,ae,Pe,Ut);case S:return ae=ae.get(Pe.key===null?xe:Pe.key)||null,be(se,ae,Pe,Ut);case Z:return Pe=vr(Pe),Ee(ae,se,xe,Pe,Ut)}if(le(Pe)||Se(Pe))return ae=ae.get(xe)||null,Oe(se,ae,Pe,Ut,null);if(typeof Pe.then=="function")return Ee(ae,se,xe,ou(Pe),Ut);if(Pe.$$typeof===N)return Ee(ae,se,xe,eu(se,Pe),Ut);iu(se,Pe)}return null}function Nt(ae,se,xe,Pe){for(var Ut=null,Qn=null,Ot=se,xn=se=0,$n=null;Ot!==null&&xn<xe.length;xn++){Ot.index>xn?($n=Ot,Ot=null):$n=Ot.sibling;var Zn=we(ae,Ot,xe[xn],Pe);if(Zn===null){Ot===null&&(Ot=$n);break}e&&Ot&&Zn.alternate===null&&s(ae,Ot),se=m(Zn,se,xn),Qn===null?Ut=Zn:Qn.sibling=Zn,Qn=Zn,Ot=$n}if(xn===xe.length)return o(ae,Ot),Vn&&xa(ae,xn),Ut;if(Ot===null){for(;xn<xe.length;xn++)Ot=Ve(ae,xe[xn],Pe),Ot!==null&&(se=m(Ot,se,xn),Qn===null?Ut=Ot:Qn.sibling=Ot,Qn=Ot);return Vn&&xa(ae,xn),Ut}for(Ot=r(Ot);xn<xe.length;xn++)$n=Ee(Ot,ae,xn,xe[xn],Pe),$n!==null&&(e&&$n.alternate!==null&&Ot.delete($n.key===null?xn:$n.key),se=m($n,se,xn),Qn===null?Ut=$n:Qn.sibling=$n,Qn=$n);return e&&Ot.forEach(function(ir){return s(ae,ir)}),Vn&&xa(ae,xn),Ut}function Gt(ae,se,xe,Pe){if(xe==null)throw Error(a(151));for(var Ut=null,Qn=null,Ot=se,xn=se=0,$n=null,Zn=xe.next();Ot!==null&&!Zn.done;xn++,Zn=xe.next()){Ot.index>xn?($n=Ot,Ot=null):$n=Ot.sibling;var ir=we(ae,Ot,Zn.value,Pe);if(ir===null){Ot===null&&(Ot=$n);break}e&&Ot&&ir.alternate===null&&s(ae,Ot),se=m(ir,se,xn),Qn===null?Ut=ir:Qn.sibling=ir,Qn=ir,Ot=$n}if(Zn.done)return o(ae,Ot),Vn&&xa(ae,xn),Ut;if(Ot===null){for(;!Zn.done;xn++,Zn=xe.next())Zn=Ve(ae,Zn.value,Pe),Zn!==null&&(se=m(Zn,se,xn),Qn===null?Ut=Zn:Qn.sibling=Zn,Qn=Zn);return Vn&&xa(ae,xn),Ut}for(Ot=r(Ot);!Zn.done;xn++,Zn=xe.next())Zn=Ee(Ot,ae,xn,Zn.value,Pe),Zn!==null&&(e&&Zn.alternate!==null&&Ot.delete(Zn.key===null?xn:Zn.key),se=m(Zn,se,xn),Qn===null?Ut=Zn:Qn.sibling=Zn,Qn=Zn);return e&&Ot.forEach(function(Rv){return s(ae,Rv)}),Vn&&xa(ae,xn),Ut}function ps(ae,se,xe,Pe){if(typeof xe=="object"&&xe!==null&&xe.type===k&&xe.key===null&&(xe=xe.props.children),typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case w:e:{for(var Ut=xe.key;se!==null;){if(se.key===Ut){if(Ut=xe.type,Ut===k){if(se.tag===7){o(ae,se.sibling),Pe=f(se,xe.props.children),Pe.return=ae,ae=Pe;break e}}else if(se.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===Z&&vr(Ut)===se.type){o(ae,se.sibling),Pe=f(se,xe.props),Pl(Pe,xe),Pe.return=ae,ae=Pe;break e}o(ae,se);break}else s(ae,se);se=se.sibling}xe.type===k?(Pe=_r(xe.props.children,ae.mode,Pe,xe.key),Pe.return=ae,ae=Pe):(Pe=Qc(xe.type,xe.key,xe.props,null,ae.mode,Pe),Pl(Pe,xe),Pe.return=ae,ae=Pe)}return v(ae);case S:e:{for(Ut=xe.key;se!==null;){if(se.key===Ut)if(se.tag===4&&se.stateNode.containerInfo===xe.containerInfo&&se.stateNode.implementation===xe.implementation){o(ae,se.sibling),Pe=f(se,xe.children||[]),Pe.return=ae,ae=Pe;break e}else{o(ae,se);break}else s(ae,se);se=se.sibling}Pe=of(xe,ae.mode,Pe),Pe.return=ae,ae=Pe}return v(ae);case Z:return xe=vr(xe),ps(ae,se,xe,Pe)}if(le(xe))return Nt(ae,se,xe,Pe);if(Se(xe)){if(Ut=Se(xe),typeof Ut!="function")throw Error(a(150));return xe=Ut.call(xe),Gt(ae,se,xe,Pe)}if(typeof xe.then=="function")return ps(ae,se,ou(xe),Pe);if(xe.$$typeof===N)return ps(ae,se,eu(ae,xe),Pe);iu(ae,xe)}return typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint"?(xe=""+xe,se!==null&&se.tag===6?(o(ae,se.sibling),Pe=f(se,xe),Pe.return=ae,ae=Pe):(o(ae,se),Pe=sf(xe,ae.mode,Pe),Pe.return=ae,ae=Pe),v(ae)):o(ae,se)}return function(ae,se,xe,Pe){try{Il=0;var Ut=ps(ae,se,xe,Pe);return Qr=null,Ut}catch(Ot){if(Ot===Kr||Ot===nu)throw Ot;var Qn=ji(29,Ot,null,ae.mode);return Qn.lanes=Pe,Qn.return=ae,Qn}finally{}}}var Sr=__(!0),g_=__(!1),Ua=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ss&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Kc(e),e_(e,null,o),s}return qc(e,r,s,o),Kc(e)}function Hl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Rt(e,o)}}function xf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var bf=!1;function Ul(){if(bf){var e=qr;if(e!==null)throw e}}function Vl(e,s,o,r){bf=!1;var f=e.updateQueue;Ua=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var K=A,be=K.next;K.next=null,v===null?m=be:v.next=be,v=K;var Oe=e.alternate;Oe!==null&&(Oe=Oe.updateQueue,A=Oe.lastBaseUpdate,A!==v&&(A===null?Oe.firstBaseUpdate=be:A.next=be,Oe.lastBaseUpdate=K))}if(m!==null){var Ve=f.baseState;v=0,Oe=be=K=null,A=m;do{var we=A.lane&-536870913,Ee=we!==A.lane;if(Ee?(zn&we)===we:(r&we)===we){we!==0&&we===Gr&&(bf=!0),Oe!==null&&(Oe=Oe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Nt=e,Gt=A;we=s;var ps=o;switch(Gt.tag){case 1:if(Nt=Gt.payload,typeof Nt=="function"){Ve=Nt.call(ps,Ve,we);break e}Ve=Nt;break e;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Gt.payload,we=typeof Nt=="function"?Nt.call(ps,Ve,we):Nt,we==null)break e;Ve=x({},Ve,we);break e;case 2:Ua=!0}}we=A.callback,we!==null&&(e.flags|=64,Ee&&(e.flags|=8192),Ee=f.callbacks,Ee===null?f.callbacks=[we]:Ee.push(we))}else Ee={lane:we,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Oe===null?(be=Oe=Ee,K=Ve):Oe=Oe.next=Ee,v|=we;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Ee=A,A=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);Oe===null&&(K=Ve),f.baseState=K,f.firstBaseUpdate=be,f.lastBaseUpdate=Oe,m===null&&(f.shared.lanes=0),qa|=v,e.lanes=v,e.memoizedState=Ve}}function y_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function x_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)y_(o[e],s)}var Zr=P(null),au=P(0);function b_(e,s){e=Aa,ne(au,e),ne(Zr,s),Aa=e|s.baseLanes}function vf(){ne(au,Aa),ne(Zr,Zr.current)}function wf(){Aa=au.current,ue(Zr),ue(au)}var Mi=P(null),Vi=null;function Wa(e){var s=e.alternate;ne(Js,Js.current&1),ne(Mi,e),Vi===null&&(s===null||Zr.current!==null||s.memoizedState!==null)&&(Vi=e)}function Sf(e){ne(Js,Js.current),ne(Mi,e),Vi===null&&(Vi=e)}function v_(e){e.tag===22?(ne(Js,Js.current),ne(Mi,e),Vi===null&&(Vi=e)):Fa()}function Fa(){ne(Js,Js.current),ne(Mi,Mi.current)}function Ei(e){ue(Mi),Vi===e&&(Vi=null),ue(Js)}var Js=P(0);function ru(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Th(o)||Ah(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wa=0,pn=null,hs=null,ro=null,lu=!1,Jr=!1,Cr=!1,cu=0,Yl=0,el=null,S2=0;function Ws(){throw Error(a(321))}function Cf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ht(e[o],s[o]))return!1;return!0}function kf(e,s,o,r,f,m){return wa=m,pn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?og:Pf,Cr=!1,m=o(r,f),Cr=!1,Jr&&(m=S_(s,o,r,f)),w_(e),m}function w_(e){z.H=Xl;var s=hs!==null&&hs.next!==null;if(wa=0,ro=hs=pn=null,lu=!1,Yl=0,el=null,s)throw Error(a(300));e===null||lo||(e=e.dependencies,e!==null&&Jc(e)&&(lo=!0))}function S_(e,s,o,r){pn=e;var f=0;do{if(Jr&&(el=null),Yl=0,Jr=!1,25<=f)throw Error(a(301));if(f+=1,ro=hs=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=ig,m=s(o,r)}while(Jr);return m}function C2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Wl(s):s,e=e.useState()[0],(hs!==null?hs.memoizedState:null)!==e&&(pn.flags|=1024),s}function jf(){var e=cu!==0;return cu=0,e}function Mf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Ef(e){if(lu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}lu=!1}wa=0,ro=hs=pn=null,Jr=!1,Yl=cu=0,el=null}function si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ro===null?pn.memoizedState=ro=e:ro=ro.next=e,ro}function eo(){if(hs===null){var e=pn.alternate;e=e!==null?e.memoizedState:null}else e=hs.next;var s=ro===null?pn.memoizedState:ro.next;if(s!==null)ro=s,hs=e;else{if(e===null)throw pn.alternate===null?Error(a(467)):Error(a(310));hs=e,e={memoizedState:hs.memoizedState,baseState:hs.baseState,baseQueue:hs.baseQueue,queue:hs.queue,next:null},ro===null?pn.memoizedState=ro=e:ro=ro.next=e}return ro}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var s=Yl;return Yl+=1,el===null&&(el=[]),e=h_(el,e,s),s=pn,(ro===null?s.memoizedState:ro.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?og:Pf),e}function du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===N)return Ho(e)}throw Error(a(438,String(e)))}function Tf(e){var s=null,o=pn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=pn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=uu(),pn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=me;return s.index++,o}function Sa(e,s){return typeof s=="function"?s(e):s}function fu(e){var s=eo();return Af(s,hs,e)}function Af(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,K=null,be=s,Oe=!1;do{var Ve=be.lane&-536870913;if(Ve!==be.lane?(zn&Ve)===Ve:(wa&Ve)===Ve){var we=be.revertLane;if(we===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),Ve===Gr&&(Oe=!0);else if((wa&we)===we){be=be.next,we===Gr&&(Oe=!0);continue}else Ve={lane:0,revertLane:be.revertLane,gesture:null,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null},K===null?(A=K=Ve,v=m):K=K.next=Ve,pn.lanes|=we,qa|=we;Ve=be.action,Cr&&o(m,Ve),m=be.hasEagerState?be.eagerState:o(m,Ve)}else we={lane:Ve,revertLane:be.revertLane,gesture:be.gesture,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null},K===null?(A=K=we,v=m):K=K.next=we,pn.lanes|=Ve,qa|=Ve;be=be.next}while(be!==null&&be!==s);if(K===null?v=m:K.next=A,!ht(m,e.memoizedState)&&(lo=!0,Oe&&(o=qr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=K,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Df(e){var s=eo(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);ht(m,s.memoizedState)||(lo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function C_(e,s,o){var r=pn,f=eo(),m=Vn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!ht((hs||f).memoizedState,o);if(v&&(f.memoizedState=o,lo=!0),f=f.queue,Bf(M_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||ro!==null&&ro.memoizedState.tag&1){if(r.flags|=2048,tl(9,{destroy:void 0},j_.bind(null,r,f,o,s),null),vs===null)throw Error(a(349));m||(wa&127)!==0||k_(r,s,o)}return o}function k_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=pn.updateQueue,s===null?(s=uu(),pn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function j_(e,s,o,r){s.value=o,s.getSnapshot=r,E_(s)&&T_(e)}function M_(e,s,o){return o(function(){E_(s)&&T_(e)})}function E_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ht(e,o)}catch{return!0}}function T_(e){var s=pr(e,2);s!==null&&wi(s,e,2)}function Nf(e){var s=si();if(typeof e=="function"){var o=e;if(e=o(),Cr){Re(!0);try{o()}finally{Re(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},s}function A_(e,s,o,r){return e.baseState=o,Af(e,hs,typeof r=="function"?r:Sa)}function k2(e,s,o,r,f){if(pu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,D_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function D_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var A=o(f,r),K=z.S;K!==null&&K(v,A),N_(e,s,A)}catch(be){Rf(e,s,be)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,r),N_(e,s,m)}catch(be){Rf(e,s,be)}}function N_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){R_(e,s,r)},function(r){return Rf(e,s,r)}):R_(e,s,o)}function R_(e,s,o){s.status="fulfilled",s.value=o,B_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,D_(e,o)))}function Rf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,B_(s),s=s.next;while(s!==r)}e.action=null}function B_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function L_(e,s){return s}function O_(e,s){if(Vn){var o=vs.formState;if(o!==null){e:{var r=pn;if(Vn){if(Ts){t:{for(var f=Ts,m=Ui;f.nodeType!==8;){if(!m){f=null;break t}if(f=Yi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ts=Yi(f.nextSibling),r=f.data==="F!";break e}}Pa(r)}r=!1}r&&(s=o[0])}}return o=si(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:s},o.queue=r,o=tg.bind(null,pn,r),r.dispatch=o,r=Nf(!1),m=If.bind(null,pn,!1,r.queue),r=si(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=k2.bind(null,pn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function z_(e){var s=eo();return $_(s,hs,e)}function $_(e,s,o){if(s=Af(e,s,L_)[0],e=fu(Sa)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Wl(s)}catch(v){throw v===Kr?nu:v}else r=s;s=eo();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(pn.flags|=2048,tl(9,{destroy:void 0},j2.bind(null,f,o),null)),[r,m,e]}function j2(e,s){e.action=s}function I_(e){var s=eo(),o=hs;if(o!==null)return $_(s,o,e);eo(),s=s.memoizedState,o=eo();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function tl(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=pn.updateQueue,s===null&&(s=uu(),pn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function P_(){return eo().memoizedState}function hu(e,s,o,r){var f=si();pn.flags|=e,f.memoizedState=tl(1|s,{destroy:void 0},o,r===void 0?null:r)}function mu(e,s,o,r){var f=eo();r=r===void 0?null:r;var m=f.memoizedState.inst;hs!==null&&r!==null&&Cf(r,hs.memoizedState.deps)?f.memoizedState=tl(s,m,o,r):(pn.flags|=e,f.memoizedState=tl(1|s,m,o,r))}function H_(e,s){hu(8390656,8,e,s)}function Bf(e,s){mu(2048,8,e,s)}function M2(e){pn.flags|=4;var s=pn.updateQueue;if(s===null)s=uu(),pn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function U_(e){var s=eo().memoizedState;return M2({ref:s,nextImpl:e}),function(){if((ss&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function V_(e,s){return mu(4,2,e,s)}function Y_(e,s){return mu(4,4,e,s)}function W_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function F_(e,s,o){o=o!=null?o.concat([e]):null,mu(4,4,W_.bind(null,s,e),o)}function Lf(){}function X_(e,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Cf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function G_(e,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Cf(s,r[1]))return r[0];if(r=e(),Cr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r}function Of(e,s,o){return o===void 0||(wa&1073741824)!==0&&(zn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=qg(),pn.lanes|=e,qa|=e,o)}function q_(e,s,o,r){return ht(o,s)?o:Zr.current!==null?(e=Of(e,o,r),ht(e,s)||(lo=!0),e):(wa&42)===0||(wa&1073741824)!==0&&(zn&261930)===0?(lo=!0,e.memoizedState=o):(e=qg(),pn.lanes|=e,qa|=e,s)}function K_(e,s,o,r,f){var m=ce.p;ce.p=m!==0&&8>m?m:8;var v=z.T,A={};z.T=A,If(e,!1,s,o);try{var K=f(),be=z.S;if(be!==null&&be(A,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var Oe=w2(K,r);Fl(e,s,Oe,Di(e))}else Fl(e,s,r,Di(e))}catch(Ve){Fl(e,s,{then:function(){},status:"rejected",reason:Ve},Di())}finally{ce.p=m,v!==null&&A.types!==null&&(v.types=A.types),z.T=v}}function E2(){}function zf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=Q_(e).queue;K_(e,f,s,W,o===null?E2:function(){return Z_(e),o(r)})}function Q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Z_(e){var s=Q_(e);s.next===null&&(s=e.alternate.memoizedState),Fl(e,s.next.queue,{},Di())}function $f(){return Ho(cc)}function J_(){return eo().memoizedState}function eg(){return eo().memoizedState}function T2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=Di();e=Va(o);var r=Ya(s,e,o);r!==null&&(wi(r,s,o),Hl(r,s,o)),s={cache:hf()},e.payload=s;return}s=s.return}}function A2(e,s,o){var r=Di();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},pu(e)?ng(s,o):(o=tf(e,s,o,r),o!==null&&(wi(o,e,r),sg(o,s,r)))}function tg(e,s,o){var r=Di();Fl(e,s,o,r)}function Fl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(pu(e))ng(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,ht(A,v))return qc(e,s,f,0),vs===null&&Gc(),!1}catch{}finally{}if(o=tf(e,s,f,r),o!==null)return wi(o,e,r),sg(o,s,r),!0}return!1}function If(e,s,o,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pu(e)){if(s)throw Error(a(479))}else s=tf(e,o,r,2),s!==null&&wi(s,e,2)}function pu(e){var s=e.alternate;return e===pn||s!==null&&s===pn}function ng(e,s){Jr=lu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function sg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Rt(e,o)}}var Xl={readContext:Ho,use:du,useCallback:Ws,useContext:Ws,useEffect:Ws,useImperativeHandle:Ws,useLayoutEffect:Ws,useInsertionEffect:Ws,useMemo:Ws,useReducer:Ws,useRef:Ws,useState:Ws,useDebugValue:Ws,useDeferredValue:Ws,useTransition:Ws,useSyncExternalStore:Ws,useId:Ws,useHostTransitionStatus:Ws,useFormState:Ws,useActionState:Ws,useOptimistic:Ws,useMemoCache:Ws,useCacheRefresh:Ws};Xl.useEffectEvent=Ws;var og={readContext:Ho,use:du,useCallback:function(e,s){return si().memoizedState=[e,s===void 0?null:s],e},useContext:Ho,useEffect:H_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,hu(4194308,4,W_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return hu(4194308,4,e,s)},useInsertionEffect:function(e,s){hu(4,2,e,s)},useMemo:function(e,s){var o=si();s=s===void 0?null:s;var r=e();if(Cr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=si();if(o!==void 0){var f=o(s);if(Cr){Re(!0);try{o(s)}finally{Re(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=A2.bind(null,pn,e),[r.memoizedState,e]},useRef:function(e){var s=si();return e={current:e},s.memoizedState=e},useState:function(e){e=Nf(e);var s=e.queue,o=tg.bind(null,pn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Lf,useDeferredValue:function(e,s){var o=si();return Of(o,e,s)},useTransition:function(){var e=Nf(!1);return e=K_.bind(null,pn,e.queue,!0,!1),si().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=pn,f=si();if(Vn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),vs===null)throw Error(a(349));(zn&127)!==0||k_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,H_(M_.bind(null,r,m,e),[e]),r.flags|=2048,tl(9,{destroy:void 0},j_.bind(null,r,m,o,s),null),o},useId:function(){var e=si(),s=vs.identifierPrefix;if(Vn){var o=ua,r=ca;o=(r&~(1<<32-_e(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=cu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=S2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:$f,useFormState:O_,useActionState:O_,useOptimistic:function(e){var s=si();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=If.bind(null,pn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Tf,useCacheRefresh:function(){return si().memoizedState=T2.bind(null,pn)},useEffectEvent:function(e){var s=si(),o={impl:e};return s.memoizedState=o,function(){if((ss&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Pf={readContext:Ho,use:du,useCallback:X_,useContext:Ho,useEffect:Bf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:fu,useRef:P_,useState:function(){return fu(Sa)},useDebugValue:Lf,useDeferredValue:function(e,s){var o=eo();return q_(o,hs.memoizedState,e,s)},useTransition:function(){var e=fu(Sa)[0],s=eo().memoizedState;return[typeof e=="boolean"?e:Wl(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:$f,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=eo();return A_(o,hs,e,s)},useMemoCache:Tf,useCacheRefresh:eg};Pf.useEffectEvent=U_;var ig={readContext:Ho,use:du,useCallback:X_,useContext:Ho,useEffect:Bf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:Df,useRef:P_,useState:function(){return Df(Sa)},useDebugValue:Lf,useDeferredValue:function(e,s){var o=eo();return hs===null?Of(o,e,s):q_(o,hs.memoizedState,e,s)},useTransition:function(){var e=Df(Sa)[0],s=eo().memoizedState;return[typeof e=="boolean"?e:Wl(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:$f,useFormState:I_,useActionState:I_,useOptimistic:function(e,s){var o=eo();return hs!==null?A_(o,hs,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:eg};ig.useEffectEvent=U_;function Hf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Uf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=Di(),f=Va(r);f.payload=s,o!=null&&(f.callback=o),s=Ya(e,f,r),s!==null&&(wi(s,e,r),Hl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=Di(),f=Va(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ya(e,f,r),s!==null&&(wi(s,e,r),Hl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=Di(),r=Va(o);r.tag=2,s!=null&&(r.callback=s),s=Ya(e,r,o),s!==null&&(wi(s,e,o),Hl(s,e,o))}};function ag(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!dt(o,r)||!dt(f,m):!0}function rg(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Uf.enqueueReplaceState(s,s.state,null)}function kr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function lg(e){Do(e)}function cg(e){console.error(e)}function ug(e){Do(e)}function _u(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function dg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(e,s,o){return o=Va(o),o.tag=3,o.payload={element:null},o.callback=function(){_u(e,s)},o}function fg(e){return e=Va(e),e.tag=3,e}function hg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){dg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dg(s,o,r),typeof f!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function D2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Xr(s,o,f,!0),o=Mi.current,o!==null){switch(o.tag){case 31:case 13:return Vi===null?Eu():o.alternate===null&&Fs===0&&(Fs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===su?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),mh(e,r,f)),!1;case 22:return o.flags|=65536,r===su?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),mh(e,r,f)),!1}throw Error(a(435,o.tag))}return mh(e,r,f),Eu(),!1}if(Vn)return s=Mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==lf&&(e=Error(a(422),{cause:r}),Ol(Ii(e,o)))):(r!==lf&&(s=Error(a(423),{cause:r}),Ol(Ii(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ii(r,o),f=Vf(e.stateNode,r,f),xf(e,f),Fs!==4&&(Fs=2)),!1;var m=Error(a(520),{cause:r});if(m=Ii(m,o),tc===null?tc=[m]:tc.push(m),Fs!==4&&(Fs=2),s===null)return!0;r=Ii(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Vf(o.stateNode,r,e),xf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ka===null||!Ka.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=fg(f),hg(f,e,o,r),xf(o,f),!1}o=o.return}while(o!==null);return!1}var Yf=Error(a(461)),lo=!1;function Uo(e,s,o,r){s.child=e===null?g_(s,null,o,r):Sr(s,e.child,o,r)}function mg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return xr(s),r=kf(e,s,o,v,m,f),A=jf(),e!==null&&!lo?(Mf(e,s,f),Ca(e,s,f)):(Vn&&A&&af(s),s.flags|=1,Uo(e,s,r,f),s.child)}function pg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,_g(e,s,m,r,f)):(e=Qc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Zf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:dt,o(v,r)&&e.ref===s.ref)return Ca(e,s,f)}return s.flags|=1,e=ya(m,r),e.ref=s.ref,e.return=s,s.child=e}function _g(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(dt(m,r)&&e.ref===s.ref)if(lo=!1,s.pendingProps=r=m,Zf(e,f))(e.flags&131072)!==0&&(lo=!0);else return s.lanes=e.lanes,Ca(e,s,f)}return Wf(e,s,o,r,f)}function gg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return yg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&tu(s,m!==null?m.cachePool:null),m!==null?b_(s,m):vf(),v_(s);else return r=s.lanes=536870912,yg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(tu(s,m.cachePool),b_(s,m),Fa(),s.memoizedState=null):(e!==null&&tu(s,null),vf(),Fa());return Uo(e,s,f,o),s.child}function Gl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function yg(e,s,o,r,f){var m=pf();return m=m===null?null:{parent:ao._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&tu(s,null),vf(),v_(s),e!==null&&Xr(e,s,r,!0),s.childLanes=f,null}function gu(e,s){return s=xu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function xg(e,s,o){return Sr(s,e.child,null,o),e=gu(s,s.pendingProps),e.flags|=2,Ei(s),s.memoizedState=null,e}function N2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Vn){if(r.mode==="hidden")return e=gu(s,r),s.lanes=536870912,Gl(null,e);if(Sf(s),(e=Ts)?(e=D0(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:$a!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,Po=s,Ts=null)):e=null,e===null)throw Pa(s);return s.lanes=536870912,null}return gu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(Sf(s),f)if(s.flags&256)s.flags&=-257,s=xg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(lo||Xr(e,s,o,!1),f=(o&e.childLanes)!==0,lo||f){if(r=vs,r!==null&&(v=vt(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,pr(e,v),wi(r,e,v),Yf;Eu(),s=xg(e,s,o)}else e=m.treeContext,Ts=Yi(v.nextSibling),Po=s,Vn=!0,Ia=null,Ui=!1,e!==null&&i_(s,e),s=gu(s,r),s.flags|=4096;return s}return e=ya(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function yu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Wf(e,s,o,r,f){return xr(s),o=kf(e,s,o,r,void 0,f),r=jf(),e!==null&&!lo?(Mf(e,s,f),Ca(e,s,f)):(Vn&&r&&af(s),s.flags|=1,Uo(e,s,o,f),s.child)}function bg(e,s,o,r,f,m){return xr(s),s.updateQueue=null,o=S_(s,r,o,f),w_(e),r=jf(),e!==null&&!lo?(Mf(e,s,m),Ca(e,s,m)):(Vn&&r&&af(s),s.flags|=1,Uo(e,s,o,m),s.child)}function vg(e,s,o,r,f){if(xr(s),s.stateNode===null){var m=Vr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Ho(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},gf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Ho(v):Vr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Hf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Uf.enqueueReplaceState(m,m.state,null),Vl(s,r,m,f),Ul(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,K=kr(o,A);m.props=K;var be=m.context,Oe=o.contextType;v=Vr,typeof Oe=="object"&&Oe!==null&&(v=Ho(Oe));var Ve=o.getDerivedStateFromProps;Oe=typeof Ve=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Oe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||be!==v)&&rg(s,m,r,v),Ua=!1;var we=s.memoizedState;m.state=we,Vl(s,r,m,f),Ul(),be=s.memoizedState,A||we!==be||Ua?(typeof Ve=="function"&&(Hf(s,o,Ve,r),be=s.memoizedState),(K=Ua||ag(s,o,K,r,we,be,v))?(Oe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=be),m.props=r,m.state=be,m.context=v,r=K):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,yf(e,s),v=s.memoizedProps,Oe=kr(o,v),m.props=Oe,Ve=s.pendingProps,we=m.context,be=o.contextType,K=Vr,typeof be=="object"&&be!==null&&(K=Ho(be)),A=o.getDerivedStateFromProps,(be=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Ve||we!==K)&&rg(s,m,r,K),Ua=!1,we=s.memoizedState,m.state=we,Vl(s,r,m,f),Ul();var Ee=s.memoizedState;v!==Ve||we!==Ee||Ua||e!==null&&e.dependencies!==null&&Jc(e.dependencies)?(typeof A=="function"&&(Hf(s,o,A,r),Ee=s.memoizedState),(Oe=Ua||ag(s,o,Oe,r,we,Ee,K)||e!==null&&e.dependencies!==null&&Jc(e.dependencies))?(be||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Ee,K),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Ee,K)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&we===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&we===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Ee),m.props=r,m.state=Ee,m.context=K,r=Oe):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&we===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&we===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,yu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=Sr(s,e.child,null,f),s.child=Sr(s,null,o,f)):Uo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=Ca(e,s,f),e}function wg(e,s,o,r){return gr(),s.flags|=256,Uo(e,s,o,r),s.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(e){return{baseLanes:e,cachePool:d_()}}function Gf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=Ai),e}function Sg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Js.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Vn){if(f?Wa(s):Fa(),(e=Ts)?(e=D0(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:$a!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,Po=s,Ts=null)):e=null,e===null)throw Pa(s);return Ah(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Fa(),f=s.mode,A=xu({mode:"hidden",children:A},f),r=_r(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(e,v,o),s.memoizedState=Ff,Gl(null,r)):(Wa(s),qf(s,A))}var K=e.memoizedState;if(K!==null&&(A=K.dehydrated,A!==null)){if(m)s.flags&256?(Wa(s),s.flags&=-257,s=Kf(e,s,o)):s.memoizedState!==null?(Fa(),s.child=e.child,s.flags|=128,s=null):(Fa(),A=r.fallback,f=s.mode,r=xu({mode:"visible",children:r.children},f),A=_r(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,Sr(s,e.child,null,o),r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(e,v,o),s.memoizedState=Ff,s=Gl(null,r));else if(Wa(s),Ah(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var be=v.dgst;v=be,r=Error(a(419)),r.stack="",r.digest=v,Ol({value:r,source:null,stack:null}),s=Kf(e,s,o)}else if(lo||Xr(e,s,o,!1),v=(o&e.childLanes)!==0,lo||v){if(v=vs,v!==null&&(r=vt(v,o),r!==0&&r!==K.retryLane))throw K.retryLane=r,pr(e,r),wi(v,e,r),Yf;Th(A)||Eu(),s=Kf(e,s,o)}else Th(A)?(s.flags|=192,s.child=e.child,s=null):(e=K.treeContext,Ts=Yi(A.nextSibling),Po=s,Vn=!0,Ia=null,Ui=!1,e!==null&&i_(s,e),s=qf(s,r.children),s.flags|=4096);return s}return f?(Fa(),A=r.fallback,f=s.mode,K=e.child,be=K.sibling,r=ya(K,{mode:"hidden",children:r.children}),r.subtreeFlags=K.subtreeFlags&65011712,be!==null?A=ya(be,A):(A=_r(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Gl(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Xf(o):(f=A.cachePool,f!==null?(K=ao._currentValue,f=f.parent!==K?{parent:K,pool:K}:f):f=d_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Gf(e,v,o),s.memoizedState=Ff,Gl(e.child,r)):(Wa(s),o=e.child,e=o.sibling,o=ya(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function qf(e,s){return s=xu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function xu(e,s){return e=ji(22,e,null,s),e.lanes=0,e}function Kf(e,s,o){return Sr(s,e.child,null,o),e=qf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Cg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),df(e.return,s,o)}function Qf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function kg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Js.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,ne(Js,v),Uo(e,s,r,o),r=Vn?Ll:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,o,s);else if(e.tag===19)Cg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&ru(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Qf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&ru(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Qf(s,!0,o,null,m,r);break;case"together":Qf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Ca(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),qa|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Xr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ya(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ya(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Zf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Jc(e)))}function R2(e,s,o){switch(s.tag){case 3:Je(s,s.stateNode.containerInfo),Ha(s,ao,e.memoizedState.cache),gr();break;case 27:case 5:Dt(s);break;case 4:Je(s,s.stateNode.containerInfo);break;case 10:Ha(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Sf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Wa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Sg(e,s,o):(Wa(s),e=Ca(e,s,o),e!==null?e.sibling:null);Wa(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Xr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return kg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(Js,Js.current),r)break;return null;case 22:return s.lanes=0,gg(e,s,o,s.pendingProps);case 24:Ha(s,ao,e.memoizedState.cache)}return Ca(e,s,o)}function jg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)lo=!0;else{if(!Zf(e,o)&&(s.flags&128)===0)return lo=!1,R2(e,s,o);lo=(e.flags&131072)!==0}else lo=!1,Vn&&(s.flags&1048576)!==0&&o_(s,Ll,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=vr(s.elementType),s.type=e,typeof e=="function")nf(e)?(r=kr(e,r),s.tag=1,s=vg(null,s,e,r,o)):(s.tag=0,s=Wf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===M){s.tag=11,s=mg(null,s,e,r,o);break e}else if(f===X){s.tag=14,s=pg(null,s,e,r,o);break e}}throw s=ee(e)||e,Error(a(306,s,""))}}return s;case 0:return Wf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=kr(r,s.pendingProps),vg(e,s,r,f,o);case 3:e:{if(Je(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,yf(e,s),Vl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ha(s,ao,r),r!==m.cache&&ff(s,[ao],o,!0),Ul(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=wg(e,s,r,o);break e}else if(r!==f){f=Ii(Error(a(424)),s),Ol(f),s=wg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ts=Yi(e.firstChild),Po=s,Vn=!0,Ia=null,Ui=!0,o=g_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(gr(),r===f){s=Ca(e,s,o);break e}Uo(e,s,r,o)}s=s.child}return s;case 26:return yu(e,s),e===null?(o=z0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Vn||(o=s.type,e=s.pendingProps,r=Lu(Me.current).createElement(o),r[kt]=s,r[Fn]=e,Vo(r,o,e),wn(r),s.stateNode=r):s.memoizedState=z0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Dt(s),e===null&&Vn&&(r=s.stateNode=B0(s.type,s.pendingProps,Me.current),Po=s,Ui=!0,f=Ts,er(s.type)?(Dh=f,Ts=Yi(r.firstChild)):Ts=f),Uo(e,s,s.pendingProps.children,o),yu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Vn&&((f=r=Ts)&&(r=cv(r,s.type,s.pendingProps,Ui),r!==null?(s.stateNode=r,Po=s,Ts=Yi(r.firstChild),Ui=!1,f=!0):f=!1),f||Pa(s)),Dt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,jh(f,m)?r=null:v!==null&&jh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=kf(e,s,C2,null,null,o),cc._currentValue=f),yu(e,s),Uo(e,s,r,o),s.child;case 6:return e===null&&Vn&&((e=o=Ts)&&(o=uv(o,s.pendingProps,Ui),o!==null?(s.stateNode=o,Po=s,Ts=null,e=!0):e=!1),e||Pa(s)),null;case 13:return Sg(e,s,o);case 4:return Je(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=Sr(s,null,r,o):Uo(e,s,r,o),s.child;case 11:return mg(e,s,s.type,s.pendingProps,o);case 7:return Uo(e,s,s.pendingProps,o),s.child;case 8:return Uo(e,s,s.pendingProps.children,o),s.child;case 12:return Uo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ha(s,s.type,r.value),Uo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,xr(s),f=Ho(f),r=r(f),s.flags|=1,Uo(e,s,r,o),s.child;case 14:return pg(e,s,s.type,s.pendingProps,o);case 15:return _g(e,s,s.type,s.pendingProps,o);case 19:return kg(e,s,o);case 31:return N2(e,s,o);case 22:return gg(e,s,o,s.pendingProps);case 24:return xr(s),r=Ho(ao),e===null?(f=pf(),f===null&&(f=vs,m=hf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},gf(s),Ha(s,ao,f)):((e.lanes&o)!==0&&(yf(e,s),Vl(s,null,null,o),Ul()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ha(s,ao,r)):(r=m.cache,Ha(s,ao,r),r!==f.cache&&ff(s,[ao],o,!0))),Uo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ka(e){e.flags|=4}function Jf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw wr=su,_f}else e.flags&=-16777217}function Mg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(s))if(Jg())e.flags|=8192;else throw wr=su,_f}function bu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?gt():536870912,e.lanes|=s,il|=s)}function ql(e,s){if(!Vn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function As(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function B2(e,s,o){var r=s.pendingProps;switch(rf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return As(s),null;case 1:return As(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),va(ao),He(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Fr(s)?ka(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,cf())),As(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ka(s),m!==null?(As(s),Mg(s,m)):(As(s),Jf(s,f,null,r,o))):m?m!==e.memoizedState?(ka(s),As(s),Mg(s,m)):(As(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ka(s),As(s),Jf(s,f,e,r,o)),null;case 27:if(It(s),o=Me.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ka(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return As(s),null}e=ke.current,Fr(s)?a_(s):(e=B0(f,r,o),s.stateNode=e,ka(s))}return As(s),null;case 5:if(It(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ka(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return As(s),null}if(m=ke.current,Fr(s))a_(s);else{var v=Lu(Me.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[kt]=s,m[Fn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Vo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ka(s)}}return As(s),Jf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ka(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Me.current,Fr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Po,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[kt]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||S0(e.nodeValue,o)),e||Pa(s,!0)}else e=Lu(e).createTextNode(r),e[kt]=s,s.stateNode=e}return As(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Fr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[kt]=s}else gr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;As(s),e=!1}else o=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(Ei(s),s):(Ei(s),null);if((s.flags&128)!==0)throw Error(a(558))}return As(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Fr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[kt]=s}else gr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;As(s),f=!1}else f=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ei(s),s):(Ei(s),null)}return Ei(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),bu(s,s.updateQueue),As(s),null);case 4:return He(),e===null&&vh(s.stateNode.containerInfo),As(s),null;case 10:return va(s.type),As(s),null;case 19:if(ue(Js),r=s.memoizedState,r===null)return As(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)ql(r,!1);else{if(Fs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=ru(e),m!==null){for(s.flags|=128,ql(r,!1),e=m.updateQueue,s.updateQueue=e,bu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)t_(o,e),o=o.sibling;return ne(Js,Js.current&1|2),Vn&&xa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&mt()>ku&&(s.flags|=128,f=!0,ql(r,!1),s.lanes=4194304)}else{if(!f)if(e=ru(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,bu(s,e),ql(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Vn)return As(s),null}else 2*mt()-r.renderingStartTime>ku&&o!==536870912&&(s.flags|=128,f=!0,ql(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=mt(),e.sibling=null,o=Js.current,ne(Js,f?o&1|2:o&1),Vn&&xa(s,r.treeForkCount),e):(As(s),null);case 22:case 23:return Ei(s),wf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(As(s),s.subtreeFlags&6&&(s.flags|=8192)):As(s),o=s.updateQueue,o!==null&&bu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ue(br),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),va(ao),As(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function L2(e,s){switch(rf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return va(ao),He(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return It(s),null;case 31:if(s.memoizedState!==null){if(Ei(s),s.alternate===null)throw Error(a(340));gr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(Ei(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));gr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ue(Js),null;case 4:return He(),null;case 10:return va(s.type),null;case 22:case 23:return Ei(s),wf(),e!==null&&ue(br),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return va(ao),null;case 25:return null;default:return null}}function Eg(e,s){switch(rf(s),s.tag){case 3:va(ao),He();break;case 26:case 27:case 5:It(s);break;case 4:He();break;case 31:s.memoizedState!==null&&Ei(s);break;case 13:Ei(s);break;case 19:ue(Js);break;case 10:va(s.type);break;case 22:case 23:Ei(s),wf(),e!==null&&ue(br);break;case 24:va(ao)}}function Kl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){ls(s,s.return,A)}}function Xa(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var K=o,be=A;try{be()}catch(Oe){ls(f,K,Oe)}}}r=r.next}while(r!==m)}}catch(Oe){ls(s,s.return,Oe)}}function Tg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{x_(s,o)}catch(r){ls(e,e.return,r)}}}function Ag(e,s,o){o.props=kr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){ls(e,s,r)}}function Ql(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){ls(e,s,f)}}function da(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){ls(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ls(e,s,f)}else o.current=null}function Dg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){ls(e,e.return,f)}}function eh(e,s,o){try{var r=e.stateNode;sv(r,e.type,o,s),r[Fn]=s}catch(f){ls(e,e.return,f)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&er(e.type)||e.tag===4}function th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&er(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=xs));else if(r!==4&&(r===27&&er(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(nh(e,s,o),e=e.sibling;e!==null;)nh(e,s,o),e=e.sibling}function vu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&er(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(vu(e,s,o),e=e.sibling;e!==null;)vu(e,s,o),e=e.sibling}function Rg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Vo(s,r,o),s[kt]=e,s[Fn]=o}catch(m){ls(e,e.return,m)}}var ja=!1,co=!1,sh=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,No=null;function O2(e,s){if(e=e.containerInfo,Ch=Uu,e=Qt(e),Ln(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,K=-1,be=0,Oe=0,Ve=e,we=null;t:for(;;){for(var Ee;Ve!==o||f!==0&&Ve.nodeType!==3||(A=v+f),Ve!==m||r!==0&&Ve.nodeType!==3||(K=v+r),Ve.nodeType===3&&(v+=Ve.nodeValue.length),(Ee=Ve.firstChild)!==null;)we=Ve,Ve=Ee;for(;;){if(Ve===e)break t;if(we===o&&++be===f&&(A=v),we===m&&++Oe===r&&(K=v),(Ee=Ve.nextSibling)!==null)break;Ve=we,we=Ve.parentNode}Ve=Ee}o=A===-1||K===-1?null:{start:A,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(kh={focusedElem:e,selectionRange:o},Uu=!1,No=s;No!==null;)if(s=No,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,No=e;else for(;No!==null;){switch(s=No,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Nt=kr(o.type,f);e=r.getSnapshotBeforeUpdate(Nt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Gt){ls(o,o.return,Gt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Eh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,No=e;break}No=s.return}}function Lg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Ea(e,o),r&4&&Kl(5,o);break;case 1:if(Ea(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){ls(o,o.return,v)}else{var f=kr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ls(o,o.return,v)}}r&64&&Tg(o),r&512&&Ql(o,o.return);break;case 3:if(Ea(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{x_(e,s)}catch(v){ls(o,o.return,v)}}break;case 27:s===null&&r&4&&Rg(o);case 26:case 5:Ea(e,o),s===null&&r&4&&Dg(o),r&512&&Ql(o,o.return);break;case 12:Ea(e,o);break;case 31:Ea(e,o),r&4&&$g(e,o);break;case 13:Ea(e,o),r&4&&Ig(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=W2.bind(null,o),dv(e,o))));break;case 22:if(r=o.memoizedState!==null||ja,!r){s=s!==null&&s.memoizedState!==null||co,f=ja;var m=co;ja=r,(co=s)&&!m?Ta(e,o,(o.subtreeFlags&8772)!==0):Ea(e,o),ja=f,co=m}break;case 30:break;default:Ea(e,o)}}function Og(e){var s=e.alternate;s!==null&&(e.alternate=null,Og(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Co(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rs=null,yi=!1;function Ma(e,s,o){for(o=o.child;o!==null;)zg(e,s,o),o=o.sibling}function zg(e,s,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(at,o)}catch{}switch(o.tag){case 26:co||da(o,s),Ma(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:co||da(o,s);var r=Rs,f=yi;er(o.type)&&(Rs=o.stateNode,yi=!1),Ma(e,s,o),ac(o.stateNode),Rs=r,yi=f;break;case 5:co||da(o,s);case 6:if(r=Rs,f=yi,Rs=null,Ma(e,s,o),Rs=r,yi=f,Rs!==null)if(yi)try{(Rs.nodeType===9?Rs.body:Rs.nodeName==="HTML"?Rs.ownerDocument.body:Rs).removeChild(o.stateNode)}catch(m){ls(o,s,m)}else try{Rs.removeChild(o.stateNode)}catch(m){ls(o,s,m)}break;case 18:Rs!==null&&(yi?(e=Rs,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),hl(e)):T0(Rs,o.stateNode));break;case 4:r=Rs,f=yi,Rs=o.stateNode.containerInfo,yi=!0,Ma(e,s,o),Rs=r,yi=f;break;case 0:case 11:case 14:case 15:Xa(2,o,s),co||Xa(4,o,s),Ma(e,s,o);break;case 1:co||(da(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Ag(o,s,r)),Ma(e,s,o);break;case 21:Ma(e,s,o);break;case 22:co=(r=co)||o.memoizedState!==null,Ma(e,s,o),co=r;break;default:Ma(e,s,o)}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hl(e)}catch(o){ls(s,s.return,o)}}}function Ig(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(o){ls(s,s.return,o)}}function z2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Bg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Bg),s;default:throw Error(a(435,e.tag))}}function wu(e,s){var o=z2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=F2.bind(null,e,r);r.then(f,f)}})}function xi(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(er(A.type)){Rs=A.stateNode,yi=!1;break e}break;case 5:Rs=A.stateNode,yi=!1;break e;case 3:case 4:Rs=A.stateNode.containerInfo,yi=!0;break e}A=A.return}if(Rs===null)throw Error(a(160));zg(m,v,f),Rs=null,yi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Pg(s,e),s=s.sibling}var ea=null;function Pg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xi(s,e),bi(e),r&4&&(Xa(3,e,e.return),Kl(3,e),Xa(5,e,e.return));break;case 1:xi(s,e),bi(e),r&512&&(co||o===null||da(o,o.return)),r&64&&ja&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=ea;if(xi(s,e),bi(e),r&512&&(co||o===null||da(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[So]||m[kt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Vo(m,r,o),m[kt]=e,wn(m),r=m;break e;case"link":var v=P0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Vo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=P0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Vo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[kt]=e,wn(m),r=m}e.stateNode=r}else H0(f,e.type,e.stateNode);else e.stateNode=I0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?H0(f,e.type,e.stateNode):I0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&eh(e,e.memoizedProps,o.memoizedProps)}break;case 27:xi(s,e),bi(e),r&512&&(co||o===null||da(o,o.return)),o!==null&&r&4&&eh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(xi(s,e),bi(e),r&512&&(co||o===null||da(o,o.return)),e.flags&32){f=e.stateNode;try{Qo(f,"")}catch(Nt){ls(e,e.return,Nt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,eh(e,f,o!==null?o.memoizedProps:f)),r&1024&&(sh=!0);break;case 6:if(xi(s,e),bi(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Nt){ls(e,e.return,Nt)}}break;case 3:if($u=null,f=ea,ea=Ou(s.containerInfo),xi(s,e),ea=f,bi(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{hl(s.containerInfo)}catch(Nt){ls(e,e.return,Nt)}sh&&(sh=!1,Hg(e));break;case 4:r=ea,ea=Ou(e.stateNode.containerInfo),xi(s,e),bi(e),ea=r;break;case 12:xi(s,e),bi(e);break;case 31:xi(s,e),bi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wu(e,r)));break;case 13:xi(s,e),bi(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Cu=mt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wu(e,r)));break;case 22:f=e.memoizedState!==null;var K=o!==null&&o.memoizedState!==null,be=ja,Oe=co;if(ja=be||f,co=Oe||K,xi(s,e),co=Oe,ja=be,bi(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||K||ja||co||jr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){K=o=s;try{if(m=K.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=K.stateNode;var Ve=K.memoizedProps.style,we=Ve!=null&&Ve.hasOwnProperty("display")?Ve.display:null;A.style.display=we==null||typeof we=="boolean"?"":(""+we).trim()}}catch(Nt){ls(K,K.return,Nt)}}}else if(s.tag===6){if(o===null){K=s;try{K.stateNode.nodeValue=f?"":K.memoizedProps}catch(Nt){ls(K,K.return,Nt)}}}else if(s.tag===18){if(o===null){K=s;try{var Ee=K.stateNode;f?A0(Ee,!0):A0(K.stateNode,!1)}catch(Nt){ls(K,K.return,Nt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,wu(e,o))));break;case 19:xi(s,e),bi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wu(e,r)));break;case 30:break;case 21:break;default:xi(s,e),bi(e)}}function bi(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ng(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=th(e);vu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Qo(v,""),o.flags&=-33);var A=th(e);vu(e,A,v);break;case 3:case 4:var K=o.stateNode.containerInfo,be=th(e);nh(e,be,K);break;default:throw Error(a(161))}}catch(Oe){ls(e,e.return,Oe)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Hg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Ea(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Lg(e,s.alternate,s),s=s.sibling}function jr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Xa(4,s,s.return),jr(s);break;case 1:da(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Ag(s,s.return,o),jr(s);break;case 27:ac(s.stateNode);case 26:case 5:da(s,s.return),jr(s);break;case 22:s.memoizedState===null&&jr(s);break;case 30:jr(s);break;default:jr(s)}e=e.sibling}}function Ta(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ta(f,m,o),Kl(4,m);break;case 1:if(Ta(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(be){ls(r,r.return,be)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var K=f.shared.hiddenCallbacks;if(K!==null)for(f.shared.hiddenCallbacks=null,f=0;f<K.length;f++)y_(K[f],A)}catch(be){ls(r,r.return,be)}}o&&v&64&&Tg(m),Ql(m,m.return);break;case 27:Rg(m);case 26:case 5:Ta(f,m,o),o&&r===null&&v&4&&Dg(m),Ql(m,m.return);break;case 12:Ta(f,m,o);break;case 31:Ta(f,m,o),o&&v&4&&$g(f,m);break;case 13:Ta(f,m,o),o&&v&4&&Ig(f,m);break;case 22:m.memoizedState===null&&Ta(f,m,o),Ql(m,m.return);break;case 30:break;default:Ta(f,m,o)}s=s.sibling}}function oh(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&zl(o))}function ih(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&zl(e))}function ta(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ug(e,s,o,r),s=s.sibling}function Ug(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ta(e,s,o,r),f&2048&&Kl(9,s);break;case 1:ta(e,s,o,r);break;case 3:ta(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&zl(e)));break;case 12:if(f&2048){ta(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(K){ls(s,s.return,K)}}else ta(e,s,o,r);break;case 31:ta(e,s,o,r);break;case 13:ta(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?ta(e,s,o,r):Zl(e,s):m._visibility&2?ta(e,s,o,r):(m._visibility|=2,nl(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&oh(v,s);break;case 24:ta(e,s,o,r),f&2048&&ih(s.alternate,s);break;default:ta(e,s,o,r)}}function nl(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,K=r,be=v.flags;switch(v.tag){case 0:case 11:case 15:nl(m,v,A,K,f),Kl(8,v);break;case 23:break;case 22:var Oe=v.stateNode;v.memoizedState!==null?Oe._visibility&2?nl(m,v,A,K,f):Zl(m,v):(Oe._visibility|=2,nl(m,v,A,K,f)),f&&be&2048&&oh(v.alternate,v);break;case 24:nl(m,v,A,K,f),f&&be&2048&&ih(v.alternate,v);break;default:nl(m,v,A,K,f)}s=s.sibling}}function Zl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Zl(o,r),f&2048&&oh(r.alternate,r);break;case 24:Zl(o,r),f&2048&&ih(r.alternate,r);break;default:Zl(o,r)}s=s.sibling}}var Jl=8192;function sl(e,s,o){if(e.subtreeFlags&Jl)for(e=e.child;e!==null;)Vg(e,s,o),e=e.sibling}function Vg(e,s,o){switch(e.tag){case 26:sl(e,s,o),e.flags&Jl&&e.memoizedState!==null&&Sv(o,ea,e.memoizedState,e.memoizedProps);break;case 5:sl(e,s,o);break;case 3:case 4:var r=ea;ea=Ou(e.stateNode.containerInfo),sl(e,s,o),ea=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Jl,Jl=16777216,sl(e,s,o),Jl=r):sl(e,s,o));break;default:sl(e,s,o)}}function Yg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function ec(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];No=r,Fg(r,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:ec(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:ec(e);break;case 12:ec(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,Su(e)):ec(e);break;default:ec(e)}}function Su(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];No=r,Fg(r,e)}Yg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Xa(8,s,s.return),Su(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Su(s));break;default:Su(s)}e=e.sibling}}function Fg(e,s){for(;No!==null;){var o=No;switch(o.tag){case 0:case 11:case 15:Xa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:zl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,No=r;else e:for(o=e;No!==null;){r=No;var f=r.sibling,m=r.return;if(Og(r),r===o){No=null;break e}if(f!==null){f.return=m,No=f;break e}No=m}}}var $2={getCacheForType:function(e){var s=Ho(ao),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Ho(ao).controller.signal}},I2=typeof WeakMap=="function"?WeakMap:Map,ss=0,vs=null,En=null,zn=0,rs=0,Ti=null,Ga=!1,ol=!1,ah=!1,Aa=0,Fs=0,qa=0,Mr=0,rh=0,Ai=0,il=0,tc=null,vi=null,lh=!1,Cu=0,Xg=0,ku=1/0,ju=null,Ka=null,vo=0,Qa=null,al=null,Da=0,ch=0,uh=null,Gg=null,nc=0,dh=null;function Di(){return(ss&2)!==0&&zn!==0?zn&-zn:z.T!==null?gh():rn()}function qg(){if(Ai===0)if((zn&536870912)===0||Vn){var e=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Ai=e}else Ai=536870912;return e=Mi.current,e!==null&&(e.flags|=32),Ai}function wi(e,s,o){(e===vs&&(rs===2||rs===9)||e.cancelPendingCommit!==null)&&(rl(e,0),Za(e,zn,Ai,!1)),_t(e,o),((ss&2)===0||e!==vs)&&(e===vs&&((ss&2)===0&&(Mr|=o),Fs===4&&Za(e,zn,Ai,!1)),fa(e))}function Kg(e,s,o){if((ss&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Lt(e,s),f=r?U2(e,s):hh(e,s,!0),m=r;do{if(f===0){ol&&!r&&Za(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!P2(o)){f=hh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=tc;var K=A.current.memoizedState.isDehydrated;if(K&&(rl(A,v).flags|=256),v=hh(A,v,!1),v!==2){if(ah&&!K){A.errorRecoveryDisabledLanes|=m,Mr|=m,f=4;break e}m=vi,vi=f,m!==null&&(vi===null?vi=m:vi.push.apply(vi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){rl(e,0),Za(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Za(r,s,Ai,!Ga);break e;case 2:vi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Cu+300-mt(),10<f)){if(Za(r,s,Ai,!Ga),nt(r,0,!0)!==0)break e;Da=s,r.timeoutHandle=M0(Qg.bind(null,r,o,vi,ju,lh,s,Ai,Mr,il,Ga,m,"Throttled",-0,0),f);break e}Qg(r,o,vi,ju,lh,s,Ai,Mr,il,Ga,m,null,-0,0)}}break}while(!0);fa(e)}function Qg(e,s,o,r,f,m,v,A,K,be,Oe,Ve,we,Ee){if(e.timeoutHandle=-1,Ve=s.subtreeFlags,Ve&8192||(Ve&16785408)===16785408){Ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xs},Vg(s,m,Ve);var Nt=(m&62914560)===m?Cu-mt():(m&4194048)===m?Xg-mt():0;if(Nt=Cv(Ve,Nt),Nt!==null){Da=m,e.cancelPendingCommit=Nt(i0.bind(null,e,s,m,o,r,f,v,A,K,Oe,Ve,null,we,Ee)),Za(e,m,v,!be);return}}i0(e,s,m,o,r,f,v,A,K)}function P2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ht(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Za(e,s,o,r){s&=~rh,s&=~Mr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-_e(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&en(e,o,s)}function Mu(){return(ss&6)===0?(sc(0),!1):!0}function fh(){if(En!==null){if(rs===0)var e=En.return;else e=En,ba=yr=null,Ef(e),Qr=null,Il=0,e=En;for(;e!==null;)Eg(e.alternate,e),e=e.return;En=null}}function rl(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,av(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Da=0,fh(),vs=e,En=o=ya(e.current,null),zn=s,rs=0,Ti=null,Ga=!1,ol=Lt(e,s),ah=!1,il=Ai=rh=Mr=qa=Fs=0,vi=tc=null,lh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-_e(r),m=1<<f;s|=e[f],r&=~m}return Aa=s,Gc(),o}function Zg(e,s){pn=null,z.H=Xl,s===Kr||s===nu?(s=m_(),rs=3):s===_f?(s=m_(),rs=4):rs=s===Yf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ti=s,En===null&&(Fs=1,_u(e,Ii(s,e.current)))}function Jg(){var e=Mi.current;return e===null?!0:(zn&4194048)===zn?Vi===null:(zn&62914560)===zn||(zn&536870912)!==0?e===Vi:!1}function e0(){var e=z.H;return z.H=Xl,e===null?Xl:e}function t0(){var e=z.A;return z.A=$2,e}function Eu(){Fs=4,Ga||(zn&4194048)!==zn&&Mi.current!==null||(ol=!0),(qa&134217727)===0&&(Mr&134217727)===0||vs===null||Za(vs,zn,Ai,!1)}function hh(e,s,o){var r=ss;ss|=2;var f=e0(),m=t0();(vs!==e||zn!==s)&&(ju=null,rl(e,s)),s=!1;var v=Fs;e:do try{if(rs!==0&&En!==null){var A=En,K=Ti;switch(rs){case 8:fh(),v=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(s=!0);var be=rs;if(rs=0,Ti=null,ll(e,A,K,be),o&&ol){v=0;break e}break;default:be=rs,rs=0,Ti=null,ll(e,A,K,be)}}H2(),v=Fs;break}catch(Oe){Zg(e,Oe)}while(!0);return s&&e.shellSuspendCounter++,ba=yr=null,ss=r,z.H=f,z.A=m,En===null&&(vs=null,zn=0,Gc()),v}function H2(){for(;En!==null;)n0(En)}function U2(e,s){var o=ss;ss|=2;var r=e0(),f=t0();vs!==e||zn!==s?(ju=null,ku=mt()+500,rl(e,s)):ol=Lt(e,s);e:do try{if(rs!==0&&En!==null){s=En;var m=Ti;t:switch(rs){case 1:rs=0,Ti=null,ll(e,s,m,1);break;case 2:case 9:if(f_(m)){rs=0,Ti=null,s0(s);break}s=function(){rs!==2&&rs!==9||vs!==e||(rs=7),fa(e)},m.then(s,s);break e;case 3:rs=7;break e;case 4:rs=5;break e;case 7:f_(m)?(rs=0,Ti=null,s0(s)):(rs=0,Ti=null,ll(e,s,m,7));break;case 5:var v=null;switch(En.tag){case 26:v=En.memoizedState;case 5:case 27:var A=En;if(v?U0(v):A.stateNode.complete){rs=0,Ti=null;var K=A.sibling;if(K!==null)En=K;else{var be=A.return;be!==null?(En=be,Tu(be)):En=null}break t}}rs=0,Ti=null,ll(e,s,m,5);break;case 6:rs=0,Ti=null,ll(e,s,m,6);break;case 8:fh(),Fs=6;break e;default:throw Error(a(462))}}V2();break}catch(Oe){Zg(e,Oe)}while(!0);return ba=yr=null,z.H=r,z.A=f,ss=o,En!==null?0:(vs=null,zn=0,Gc(),Fs)}function V2(){for(;En!==null&&!ot();)n0(En)}function n0(e){var s=jg(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,s===null?Tu(e):En=s}function s0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=bg(o,s,s.pendingProps,s.type,void 0,zn);break;case 11:s=bg(o,s,s.pendingProps,s.type.render,s.ref,zn);break;case 5:Ef(s);default:Eg(o,s),s=En=t_(s,Aa),s=jg(o,s,Aa)}e.memoizedProps=e.pendingProps,s===null?Tu(e):En=s}function ll(e,s,o,r){ba=yr=null,Ef(s),Qr=null,Il=0;var f=s.return;try{if(D2(e,f,s,o,zn)){Fs=1,_u(e,Ii(o,e.current)),En=null;return}}catch(m){if(f!==null)throw En=f,m;Fs=1,_u(e,Ii(o,e.current)),En=null;return}s.flags&32768?(Vn||r===1?e=!0:ol||(zn&536870912)!==0?e=!1:(Ga=e=!0,(r===2||r===9||r===3||r===6)&&(r=Mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),o0(s,e)):Tu(s)}function Tu(e){var s=e;do{if((s.flags&32768)!==0){o0(s,Ga);return}e=s.return;var o=B2(s.alternate,s,Aa);if(o!==null){En=o;return}if(s=s.sibling,s!==null){En=s;return}En=s=e}while(s!==null);Fs===0&&(Fs=5)}function o0(e,s){do{var o=L2(e.alternate,e);if(o!==null){o.flags&=32767,En=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){En=e;return}En=e=o}while(e!==null);Fs=6,En=null}function i0(e,s,o,r,f,m,v,A,K){e.cancelPendingCommit=null;do Au();while(vo!==0);if((ss&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=ef,Vt(e,o,m,v,A,K),e===vs&&(En=vs=null,zn=0),al=s,Qa=e,Da=o,ch=m,uh=f,Gg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,X2(ft,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=ce.p,ce.p=2,v=ss,ss|=4;try{O2(e,s,o)}finally{ss=v,ce.p=f,z.T=r}}vo=1,a0(),r0(),l0()}}function a0(){if(vo===1){vo=0;var e=Qa,s=al,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=ce.p;ce.p=2;var f=ss;ss|=4;try{Pg(s,e);var m=kh,v=Qt(e.containerInfo),A=m.focusedElem,K=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&cn(A.ownerDocument.documentElement,A)){if(K!==null&&Ln(A)){var be=K.start,Oe=K.end;if(Oe===void 0&&(Oe=be),"selectionStart"in A)A.selectionStart=be,A.selectionEnd=Math.min(Oe,A.value.length);else{var Ve=A.ownerDocument||document,we=Ve&&Ve.defaultView||window;if(we.getSelection){var Ee=we.getSelection(),Nt=A.textContent.length,Gt=Math.min(K.start,Nt),ps=K.end===void 0?Gt:Math.min(K.end,Nt);!Ee.extend&&Gt>ps&&(v=ps,ps=Gt,Gt=v);var ae=on(A,Gt),se=on(A,ps);if(ae&&se&&(Ee.rangeCount!==1||Ee.anchorNode!==ae.node||Ee.anchorOffset!==ae.offset||Ee.focusNode!==se.node||Ee.focusOffset!==se.offset)){var xe=Ve.createRange();xe.setStart(ae.node,ae.offset),Ee.removeAllRanges(),Gt>ps?(Ee.addRange(xe),Ee.extend(se.node,se.offset)):(xe.setEnd(se.node,se.offset),Ee.addRange(xe))}}}}for(Ve=[],Ee=A;Ee=Ee.parentNode;)Ee.nodeType===1&&Ve.push({element:Ee,left:Ee.scrollLeft,top:Ee.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Ve.length;A++){var Pe=Ve[A];Pe.element.scrollLeft=Pe.left,Pe.element.scrollTop=Pe.top}}Uu=!!Ch,kh=Ch=null}finally{ss=f,ce.p=r,z.T=o}}e.current=s,vo=2}}function r0(){if(vo===2){vo=0;var e=Qa,s=al,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=ce.p;ce.p=2;var f=ss;ss|=4;try{Lg(e,s.alternate,s)}finally{ss=f,ce.p=r,z.T=o}}vo=3}}function l0(){if(vo===4||vo===3){vo=0,it();var e=Qa,s=al,o=Da,r=Gg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?vo=5:(vo=0,al=Qa=null,c0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ka=null),hn(o),s=s.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(at,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=ce.p,ce.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{z.T=s,ce.p=f}}(Da&3)!==0&&Au(),fa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===dh?nc++:(nc=0,dh=e):nc=0,sc(0)}}function c0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,zl(s)))}function Au(){return a0(),r0(),l0(),u0()}function u0(){if(vo!==5)return!1;var e=Qa,s=ch;ch=0;var o=hn(Da),r=z.T,f=ce.p;try{ce.p=32>o?32:o,z.T=null,o=uh,uh=null;var m=Qa,v=Da;if(vo=0,al=Qa=null,Da=0,(ss&6)!==0)throw Error(a(331));var A=ss;if(ss|=4,Wg(m.current),Ug(m,m.current,v,o),ss=A,sc(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(at,m)}catch{}return!0}finally{ce.p=f,z.T=r,c0(e,s)}}function d0(e,s,o){s=Ii(o,s),s=Vf(e.stateNode,s,2),e=Ya(e,s,2),e!==null&&(_t(e,2),fa(e))}function ls(e,s,o){if(e.tag===3)d0(e,e,o);else for(;s!==null;){if(s.tag===3){d0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){e=Ii(o,e),o=fg(2),r=Ya(s,o,2),r!==null&&(hg(o,r,s,e),_t(r,2),fa(r));break}}s=s.return}}function mh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new I2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(ah=!0,f.add(o),e=Y2.bind(null,e,s,o),s.then(e,e))}function Y2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,vs===e&&(zn&o)===o&&(Fs===4||Fs===3&&(zn&62914560)===zn&&300>mt()-Cu?(ss&2)===0&&rl(e,0):rh|=o,il===zn&&(il=0)),fa(e)}function f0(e,s){s===0&&(s=gt()),e=pr(e,s),e!==null&&(_t(e,s),fa(e))}function W2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),f0(e,o)}function F2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),f0(e,o)}function X2(e,s){return ct(e,s)}var Du=null,cl=null,ph=!1,Nu=!1,_h=!1,Ja=0;function fa(e){e!==cl&&e.next===null&&(cl===null?Du=cl=e:cl=cl.next=e),Nu=!0,ph||(ph=!0,q2())}function sc(e,s){if(!_h&&Nu){_h=!0;do for(var o=!1,r=Du;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-_e(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,_0(r,m))}else m=zn,m=nt(r,r===vs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Lt(r,m)||(o=!0,_0(r,m));r=r.next}while(o);_h=!1}}function G2(){h0()}function h0(){Nu=ph=!1;var e=0;Ja!==0&&iv()&&(e=Ja);for(var s=mt(),o=null,r=Du;r!==null;){var f=r.next,m=m0(r,s);m===0?(r.next=null,o===null?Du=f:o.next=f,f===null&&(cl=o)):(o=r,(e!==0||(m&3)!==0)&&(Nu=!0)),r=f}vo!==0&&vo!==5||sc(e),Ja!==0&&(Ja=0)}function m0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-_e(m),A=1<<v,K=f[v];K===-1?((A&o)===0||(A&r)!==0)&&(f[v]=wt(A,s)):K<=s&&(e.expiredLanes|=A),m&=~A}if(s=vs,o=zn,o=nt(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(rs===2||rs===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Lt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&je(r),hn(o)){case 2:case 8:o=zt;break;case 32:o=ft;break;case 268435456:o=J;break;default:o=ft}return r=p0.bind(null,e),o=ct(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,s){if(vo!==0&&vo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Au()&&e.callbackNode!==o)return null;var r=zn;return r=nt(e,e===vs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Kg(e,r,s),m0(e,mt()),e.callbackNode!=null&&e.callbackNode===o?p0.bind(null,e):null)}function _0(e,s){if(Au())return null;Kg(e,s,!0)}function q2(){rv(function(){(ss&6)!==0?ct(Ct,G2):h0()})}function gh(){if(Ja===0){var e=Gr;e===0&&(e=Be,Be<<=1,(Be&261888)===0&&(Be=256)),Ja=e}return Ja}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bo(""+e)}function y0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function K2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=g0((f[Fn]||null).action),v=r.submitter;v&&(s=(s=v[Fn]||null)?g0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new To("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ja!==0){var K=v?y0(f,v):new FormData(f);zf(o,{pending:!0,data:K,method:f.method,action:m},null,K)}}else typeof m=="function"&&(A.preventDefault(),K=v?y0(f,v):new FormData(f),zf(o,{pending:!0,data:K,method:f.method,action:m},m,K))},currentTarget:f}]})}}for(var yh=0;yh<ki.length;yh++){var xh=ki[yh],Q2=xh.toLowerCase(),Z2=xh[0].toUpperCase()+xh.slice(1);Go(Q2,"on"+Z2)}Go(gi,"onAnimationEnd"),Go(Ci,"onAnimationIteration"),Go(mr,"onAnimationStart"),Go("dblclick","onDoubleClick"),Go("focusin","onFocus"),Go("focusout","onBlur"),Go(Pr,"onTransitionRun"),Go(Hr,"onTransitionStart"),Go(vn,"onTransitionCancel"),Go(fs,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oc));function x0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],K=A.instance,be=A.currentTarget;if(A=A.listener,K!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=be;try{m(f)}catch(Oe){Do(Oe)}f.currentTarget=null,m=K}else for(v=0;v<r.length;v++){if(A=r[v],K=A.instance,be=A.currentTarget,A=A.listener,K!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=be;try{m(f)}catch(Oe){Do(Oe)}f.currentTarget=null,m=K}}}}function Tn(e,s){var o=s[kn];o===void 0&&(o=s[kn]=new Set);var r=e+"__bubble";o.has(r)||(b0(s,e,2,!1),o.add(r))}function bh(e,s,o){var r=0;s&&(r|=4),b0(o,e,r,s)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function vh(e){if(!e[Ru]){e[Ru]=!0,Bs.forEach(function(o){o!=="selectionchange"&&(J2.has(o)||bh(o,!1,e),bh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Ru]||(s[Ru]=!0,bh("selectionchange",!1,s))}}function b0(e,s,o,r){switch(q0(s)){case 2:var f=Mv;break;case 8:f=Ev;break;default:f=Oh}o=f.bind(null,s,o,e),f=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function wh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var K=v.tag;if((K===3||K===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=qt(A),v===null)return;if(K=v.tag,K===5||K===6||K===26||K===27){r=m=v;continue e}A=A.parentNode}}r=r.return}Lo(function(){var be=m,Oe=Hs(o),Ve=[];e:{var we=Io.get(e);if(we!==void 0){var Ee=To,Nt=e;switch(e){case"keypress":if(Ks(o)===0)break e;case"keydown":case"keyup":Ee=mi;break;case"focusin":Nt="focus",Ee=hi;break;case"focusout":Nt="blur",Ee=hi;break;case"beforeblur":case"afterblur":Ee=hi;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ee=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ee=$i;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ee=Te;break;case gi:case Ci:case mr:Ee=la;break;case fs:Ee=st;break;case"scroll":case"scrollend":Ee=go;break;case"wheel":Ee=Wt;break;case"copy":case"cut":case"paste":Ee=Ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ee=Y;break;case"toggle":case"beforetoggle":Ee=mn}var Gt=(s&4)!==0,ps=!Gt&&(e==="scroll"||e==="scrollend"),ae=Gt?we!==null?we+"Capture":null:we;Gt=[];for(var se=be,xe;se!==null;){var Pe=se;if(xe=Pe.stateNode,Pe=Pe.tag,Pe!==5&&Pe!==26&&Pe!==27||xe===null||ae===null||(Pe=gn(se,ae),Pe!=null&&Gt.push(ic(se,Pe,xe))),ps)break;se=se.return}0<Gt.length&&(we=new Ee(we,Nt,null,o,Oe),Ve.push({event:we,listeners:Gt}))}}if((s&7)===0){e:{if(we=e==="mouseover"||e==="pointerover",Ee=e==="mouseout"||e==="pointerout",we&&o!==Oi&&(Nt=o.relatedTarget||o.fromElement)&&(qt(Nt)||Nt[rt]))break e;if((Ee||we)&&(we=Oe.window===Oe?Oe:(we=Oe.ownerDocument)?we.defaultView||we.parentWindow:window,Ee?(Nt=o.relatedTarget||o.toElement,Ee=be,Nt=Nt?qt(Nt):null,Nt!==null&&(ps=u(Nt),Gt=Nt.tag,Nt!==ps||Gt!==5&&Gt!==27&&Gt!==6)&&(Nt=null)):(Ee=null,Nt=be),Ee!==Nt)){if(Gt=Jo,Pe="onMouseLeave",ae="onMouseEnter",se="mouse",(e==="pointerout"||e==="pointerover")&&(Gt=Y,Pe="onPointerLeave",ae="onPointerEnter",se="pointer"),ps=Ee==null?we:Ds(Ee),xe=Nt==null?we:Ds(Nt),we=new Gt(Pe,se+"leave",Ee,o,Oe),we.target=ps,we.relatedTarget=xe,Pe=null,qt(Oe)===be&&(Gt=new Gt(ae,se+"enter",Nt,o,Oe),Gt.target=xe,Gt.relatedTarget=ps,Pe=Gt),ps=Pe,Ee&&Nt)t:{for(Gt=ev,ae=Ee,se=Nt,xe=0,Pe=ae;Pe;Pe=Gt(Pe))xe++;Pe=0;for(var Ut=se;Ut;Ut=Gt(Ut))Pe++;for(;0<xe-Pe;)ae=Gt(ae),xe--;for(;0<Pe-xe;)se=Gt(se),Pe--;for(;xe--;){if(ae===se||se!==null&&ae===se.alternate){Gt=ae;break t}ae=Gt(ae),se=Gt(se)}Gt=null}else Gt=null;Ee!==null&&v0(Ve,we,Ee,Gt,!1),Nt!==null&&ps!==null&&v0(Ve,ps,Nt,Gt,!0)}}e:{if(we=be?Ds(be):window,Ee=we.nodeName&&we.nodeName.toLowerCase(),Ee==="select"||Ee==="input"&&we.type==="file")var Qn=L;else if(Xt(we))if(F)Qn=pt;else{Qn=Ne;var Ot=ye}else Ee=we.nodeName,!Ee||Ee.toLowerCase()!=="input"||we.type!=="checkbox"&&we.type!=="radio"?be&&Os(be.elementType)&&(Qn=L):Qn=qe;if(Qn&&(Qn=Qn(e,be))){bs(Ve,Qn,o,Oe);break e}Ot&&Ot(e,we,be),e==="focusout"&&be&&we.type==="number"&&be.memoizedProps.value!=null&&Es(we,"number",we.value)}switch(Ot=be?Ds(be):window,e){case"focusin":(Xt(Ot)||Ot.contentEditable==="true")&&(Yt=Ot,ds=be,On=null);break;case"focusout":On=ds=Yt=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,bo(Ve,o,Oe);break;case"selectionchange":if(Ht)break;case"keydown":case"keyup":bo(Ve,o,Oe)}var xn;if(Hn)e:{switch(e){case"compositionstart":var $n="onCompositionStart";break e;case"compositionend":$n="onCompositionEnd";break e;case"compositionupdate":$n="onCompositionUpdate";break e}$n=void 0}else Ge?fe(e,o)&&($n="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&($n="onCompositionStart");$n&&(R&&o.locale!=="ko"&&(Ge||$n!=="onCompositionStart"?$n==="onCompositionEnd"&&Ge&&(xn=zi()):(Wn=Oe,Zo="value"in Wn?Wn.value:Wn.textContent,Ge=!0)),Ot=Bu(be,$n),0<Ot.length&&($n=new Et($n,e,null,o,Oe),Ve.push({event:$n,listeners:Ot}),xn?$n.data=xn:(xn=Ue(o),xn!==null&&($n.data=xn)))),(xn=B?bt(e,o):an(e,o))&&($n=Bu(be,"onBeforeInput"),0<$n.length&&(Ot=new Et("onBeforeInput","beforeinput",null,o,Oe),Ve.push({event:Ot,listeners:$n}),Ot.data=xn)),K2(Ve,e,be,o,Oe)}x0(Ve,s)})}function ic(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Bu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=gn(e,o),f!=null&&r.unshift(ic(e,f,m)),f=gn(e,s),f!=null&&r.push(ic(e,f,m))),e.tag===3)return r;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,K=A.alternate,be=A.stateNode;if(A=A.tag,K!==null&&K===r)break;A!==5&&A!==26&&A!==27||be===null||(K=be,f?(be=gn(o,m),be!=null&&v.unshift(ic(o,be,K))):f||(be=gn(o,m),be!=null&&v.push(ic(o,be,K)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function w0(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function S0(e,s){return s=w0(s),w0(e)===s}function ms(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Qo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Qo(e,""+r);break;case"className":is(e,"class",r);break;case"tabIndex":is(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":is(e,o,r);break;case"style":ui(e,r,m);break;case"data":if(s!=="object"){is(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Bo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ms(e,s,"name",f.name,f,null),ms(e,s,"formEncType",f.formEncType,f,null),ms(e,s,"formMethod",f.formMethod,f,null),ms(e,s,"formTarget",f.formTarget,f,null)):(ms(e,s,"encType",f.encType,f,null),ms(e,s,"method",f.method,f,null),ms(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Bo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=xs);break;case"onScroll":r!=null&&Tn("scroll",e);break;case"onScrollEnd":r!=null&&Tn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Bo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":Tn("beforetoggle",e),Tn("toggle",e),no(e,"popover",r);break;case"xlinkActuate":Ss(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ss(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ss(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ss(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ss(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ss(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ss(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ss(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ss(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":no(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Zi.get(o)||o,no(e,o,r))}}function Sh(e,s,o,r,f,m){switch(o){case"style":ui(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Qo(e,r):(typeof r=="number"||typeof r=="bigint")&&Qo(e,""+r);break;case"onScroll":r!=null&&Tn("scroll",e);break;case"onScrollEnd":r!=null&&Tn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=xs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Fn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):no(e,o,r)}}}function Vo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tn("error",e),Tn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ms(e,s,m,v,o,null)}}f&&ms(e,s,"srcSet",o.srcSet,o,null),r&&ms(e,s,"src",o.src,o,null);return;case"input":Tn("invalid",e);var A=m=v=f=null,K=null,be=null;for(r in o)if(o.hasOwnProperty(r)){var Oe=o[r];if(Oe!=null)switch(r){case"name":f=Oe;break;case"type":v=Oe;break;case"checked":K=Oe;break;case"defaultChecked":be=Oe;break;case"value":m=Oe;break;case"defaultValue":A=Oe;break;case"children":case"dangerouslySetInnerHTML":if(Oe!=null)throw Error(a(137,s));break;default:ms(e,s,r,Oe,o,null)}}Pn(e,m,A,K,be,v,f,!1);return;case"select":Tn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ms(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?ys(e,!!r,s,!1):o!=null&&ys(e,!!r,o,!0);return;case"textarea":Tn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ms(e,s,v,A,o,null)}Qi(e,r,f,m);return;case"option":for(K in o)if(o.hasOwnProperty(K)&&(r=o[K],r!=null))switch(K){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ms(e,s,K,r,o,null)}return;case"dialog":Tn("beforetoggle",e),Tn("toggle",e),Tn("cancel",e),Tn("close",e);break;case"iframe":case"object":Tn("load",e);break;case"video":case"audio":for(r=0;r<oc.length;r++)Tn(oc[r],e);break;case"image":Tn("error",e),Tn("load",e);break;case"details":Tn("toggle",e);break;case"embed":case"source":case"link":Tn("error",e),Tn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(be in o)if(o.hasOwnProperty(be)&&(r=o[be],r!=null))switch(be){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ms(e,s,be,r,o,null)}return;default:if(Os(s)){for(Oe in o)o.hasOwnProperty(Oe)&&(r=o[Oe],r!==void 0&&Sh(e,s,Oe,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ms(e,s,A,r,o,null))}function sv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,K=null,be=null,Oe=null;for(Ee in o){var Ve=o[Ee];if(o.hasOwnProperty(Ee)&&Ve!=null)switch(Ee){case"checked":break;case"value":break;case"defaultValue":K=Ve;default:r.hasOwnProperty(Ee)||ms(e,s,Ee,null,r,Ve)}}for(var we in r){var Ee=r[we];if(Ve=o[we],r.hasOwnProperty(we)&&(Ee!=null||Ve!=null))switch(we){case"type":m=Ee;break;case"name":f=Ee;break;case"checked":be=Ee;break;case"defaultChecked":Oe=Ee;break;case"value":v=Ee;break;case"defaultValue":A=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(a(137,s));break;default:Ee!==Ve&&ms(e,s,we,Ee,r,Ve)}}ko(e,v,A,K,be,Oe,m,f);return;case"select":Ee=v=A=we=null;for(m in o)if(K=o[m],o.hasOwnProperty(m)&&K!=null)switch(m){case"value":break;case"multiple":Ee=K;default:r.hasOwnProperty(m)||ms(e,s,m,null,r,K)}for(f in r)if(m=r[f],K=o[f],r.hasOwnProperty(f)&&(m!=null||K!=null))switch(f){case"value":we=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==K&&ms(e,s,f,m,r,K)}s=A,o=v,r=Ee,we!=null?ys(e,!!o,we,!1):!!r!=!!o&&(s!=null?ys(e,!!o,s,!0):ys(e,!!o,o?[]:"",!1));return;case"textarea":Ee=we=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ms(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":we=f;break;case"defaultValue":Ee=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ms(e,s,v,f,r,m)}us(e,we,Ee);return;case"option":for(var Nt in o)if(we=o[Nt],o.hasOwnProperty(Nt)&&we!=null&&!r.hasOwnProperty(Nt))switch(Nt){case"selected":e.selected=!1;break;default:ms(e,s,Nt,null,r,we)}for(K in r)if(we=r[K],Ee=o[K],r.hasOwnProperty(K)&&we!==Ee&&(we!=null||Ee!=null))switch(K){case"selected":e.selected=we&&typeof we!="function"&&typeof we!="symbol";break;default:ms(e,s,K,we,r,Ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Gt in o)we=o[Gt],o.hasOwnProperty(Gt)&&we!=null&&!r.hasOwnProperty(Gt)&&ms(e,s,Gt,null,r,we);for(be in r)if(we=r[be],Ee=o[be],r.hasOwnProperty(be)&&we!==Ee&&(we!=null||Ee!=null))switch(be){case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:ms(e,s,be,we,r,Ee)}return;default:if(Os(s)){for(var ps in o)we=o[ps],o.hasOwnProperty(ps)&&we!==void 0&&!r.hasOwnProperty(ps)&&Sh(e,s,ps,void 0,r,we);for(Oe in r)we=r[Oe],Ee=o[Oe],!r.hasOwnProperty(Oe)||we===Ee||we===void 0&&Ee===void 0||Sh(e,s,Oe,we,r,Ee);return}}for(var ae in o)we=o[ae],o.hasOwnProperty(ae)&&we!=null&&!r.hasOwnProperty(ae)&&ms(e,s,ae,null,r,we);for(Ve in r)we=r[Ve],Ee=o[Ve],!r.hasOwnProperty(Ve)||we===Ee||we==null&&Ee==null||ms(e,s,Ve,we,r,Ee)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&C0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var K=o[r],be=K.startTime;if(be>A)break;var Oe=K.transferSize,Ve=K.initiatorType;Oe&&C0(Ve)&&(K=K.responseEnd,v+=Oe*(K<A?1:(A-be)/(K-be)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ch=null,kh=null;function Lu(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function jh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mh=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(lv)}:M0;function lv(e){setTimeout(function(){throw e})}function er(e){return e==="head"}function T0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),hl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")ac(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,ac(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[So]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&ac(e.ownerDocument.body);o=f}while(o);hl(s)}function A0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Eh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Eh(o),Co(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function cv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[So])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Yi(e.nextSibling),e===null)break}return null}function uv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Yi(e.nextSibling),e===null))return null;return e}function D0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Yi(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function Ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Yi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Dh=null;function N0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Yi(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function B0(e,s,o){switch(s=Lu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ac(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Co(e)}var Wi=new Map,L0=new Set;function Ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=ce.d;ce.d={f:fv,r:hv,D:mv,C:pv,L:_v,m:gv,X:xv,S:yv,M:bv};function fv(){var e=Na.f(),s=Mu();return e||s}function hv(e){var s=An(e);s!==null&&s.tag===5&&s.type==="form"?Z_(s):Na.r(e)}var ul=typeof document>"u"?null:document;function O0(e,s,o){var r=ul;if(r&&typeof s=="string"&&s){var f=es(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),L0.has(f)||(L0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Vo(s,"link",e),wn(s),r.head.appendChild(s)))}}function mv(e){Na.D(e),O0("dns-prefetch",e,null)}function pv(e,s){Na.C(e,s),O0("preconnect",e,s)}function _v(e,s,o){Na.L(e,s,o);var r=ul;if(r&&e&&s){var f='link[rel="preload"][as="'+es(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+es(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+es(o.imageSizes)+'"]')):f+='[href="'+es(e)+'"]';var m=f;switch(s){case"style":m=dl(e);break;case"script":m=fl(e)}Wi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Wi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(rc(m))||s==="script"&&r.querySelector(lc(m))||(s=r.createElement("link"),Vo(s,"link",e),wn(s),r.head.appendChild(s)))}}function gv(e,s){Na.m(e,s);var o=ul;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+es(r)+'"][href="'+es(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fl(e)}if(!Wi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Wi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lc(m)))return}r=o.createElement("link"),Vo(r,"link",e),wn(r),o.head.appendChild(r)}}}function yv(e,s,o){Na.S(e,s,o);var r=ul;if(r&&e){var f=Xn(r).hoistableStyles,m=dl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(rc(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Wi.get(m))&&Nh(e,o);var K=v=r.createElement("link");wn(K),Vo(K,"link",e),K._p=new Promise(function(be,Oe){K.onload=be,K.onerror=Oe}),K.addEventListener("load",function(){A.loading|=1}),K.addEventListener("error",function(){A.loading|=2}),A.loading|=4,zu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function xv(e,s){Na.X(e,s);var o=ul;if(o&&e){var r=Xn(o).hoistableScripts,f=fl(e),m=r.get(f);m||(m=o.querySelector(lc(f)),m||(e=x({src:e,async:!0},s),(s=Wi.get(f))&&Rh(e,s),m=o.createElement("script"),wn(m),Vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function bv(e,s){Na.M(e,s);var o=ul;if(o&&e){var r=Xn(o).hoistableScripts,f=fl(e),m=r.get(f);m||(m=o.querySelector(lc(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Wi.get(f))&&Rh(e,s),m=o.createElement("script"),wn(m),Vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function z0(e,s,o,r){var f=(f=Me.current)?Ou(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=dl(o.href),o=Xn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=dl(o.href);var m=Xn(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(rc(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Wi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Wi.set(e,o),m||vv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=fl(o),o=Xn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function dl(e){return'href="'+es(e)+'"'}function rc(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function vv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Vo(s,"link",o),wn(s),e.head.appendChild(s))}function fl(e){return'[src="'+es(e)+'"]'}function lc(e){return"script[async]"+e}function I0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+es(o.href)+'"]');if(r)return s.instance=r,wn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),wn(r),Vo(r,"style",f),zu(r,o.precedence,e),s.instance=r;case"stylesheet":f=dl(o.href);var m=e.querySelector(rc(f));if(m)return s.state.loading|=4,s.instance=m,wn(m),m;r=$0(o),(f=Wi.get(f))&&Nh(r,f),m=(e.ownerDocument||e).createElement("link"),wn(m);var v=m;return v._p=new Promise(function(A,K){v.onload=A,v.onerror=K}),Vo(m,"link",r),s.state.loading|=4,zu(m,o.precedence,e),s.instance=m;case"script":return m=fl(o.src),(f=e.querySelector(lc(m)))?(s.instance=f,wn(f),f):(r=o,(f=Wi.get(m))&&(r=x({},o),Rh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),wn(f),Vo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,zu(r,o.precedence,e));return s.instance}function zu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Nh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Rh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var $u=null;function P0(e,s,o){if($u===null){var r=new Map,f=$u=new Map;f.set(o,r)}else f=$u,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[So]||m[kt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function H0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function wv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=dl(r.href),m=s.querySelector(rc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Iu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,wn(m);return}m=s.ownerDocument||s,r=$0(r),(f=Wi.get(f))&&Nh(r,f),m=m.createElement("link"),wn(m);var v=m;v._p=new Promise(function(A,K){v.onload=A,v.onerror=K}),Vo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Iu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Bh=0;function Cv(e,s){return e.stylesheets&&e.count===0&&Hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Bh===0&&(Bh=62500*ov());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Bh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pu=null;function Hu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pu=new Map,s.forEach(kv,e),Pu=null,Iu.call(e))}function kv(e,s){if(!(s.state.loading&4)){var o=Pu.get(e);if(o)var r=o.get(null);else{o=new Map,Pu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Iu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var cc={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function jv(e,s,o,r,f,m,v,A,K){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nn(0),this.hiddenUpdates=nn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.incompleteTransitions=new Map}function V0(e,s,o,r,f,m,v,A,K,be,Oe,Ve){return e=new jv(e,s,o,v,K,be,Oe,Ve,A),s=1,m===!0&&(s|=24),m=ji(3,null,null,s),e.current=m,m.stateNode=e,s=hf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},gf(m),e}function Y0(e){return e?(e=Vr,e):Vr}function W0(e,s,o,r,f,m){f=Y0(f),r.context===null?r.context=f:r.pendingContext=f,r=Va(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ya(e,r,s),o!==null&&(wi(o,e,s),Hl(o,e,s))}function F0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Lh(e,s){F0(e,s),(e=e.alternate)&&F0(e,s)}function X0(e){if(e.tag===13||e.tag===31){var s=pr(e,67108864);s!==null&&wi(s,e,67108864),Lh(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var s=Di();s=Jt(s);var o=pr(e,s);o!==null&&wi(o,e,s),Lh(e,s)}}var Uu=!0;function Mv(e,s,o,r){var f=z.T;z.T=null;var m=ce.p;try{ce.p=2,Oh(e,s,o,r)}finally{ce.p=m,z.T=f}}function Ev(e,s,o,r){var f=z.T;z.T=null;var m=ce.p;try{ce.p=8,Oh(e,s,o,r)}finally{ce.p=m,z.T=f}}function Oh(e,s,o,r){if(Uu){var f=zh(r);if(f===null)wh(e,s,r,Vu,o),K0(e,r);else if(Av(f,e,s,o,r))r.stopPropagation();else if(K0(e,r),s&4&&-1<Tv.indexOf(e)){for(;f!==null;){var m=An(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=jt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var K=1<<31-_e(v);A.entanglements[1]|=K,v&=~K}fa(m),(ss&6)===0&&(ku=mt()+500,sc(0))}}break;case 31:case 13:A=pr(m,2),A!==null&&wi(A,m,2),Mu(),Lh(m,2)}if(m=zh(r),m===null&&wh(e,s,r,Vu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else wh(e,s,r,null,o)}}function zh(e){return e=Hs(e),$h(e)}var Vu=null;function $h(e){if(Vu=null,e=qt(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Vu=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case Ct:return 2;case zt:return 8;case ft:case H:return 32;case J:return 268435456;default:return 32}default:return 32}}var Ih=!1,tr=null,nr=null,sr=null,uc=new Map,dc=new Map,or=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,s){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":uc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(s.pointerId)}}function fc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=An(s),s!==null&&X0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Av(e,s,o,r,f){switch(s){case"focusin":return tr=fc(tr,e,s,o,r,f),!0;case"dragenter":return nr=fc(nr,e,s,o,r,f),!0;case"mouseover":return sr=fc(sr,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return uc.set(m,fc(uc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,dc.set(m,fc(dc.get(m)||null,e,s,o,r,f)),!0}return!1}function Q0(e){var s=qt(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,$t(e.priority,function(){G0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,$t(e.priority,function(){G0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=zh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Oi=r,o.target.dispatchEvent(r),Oi=null}else return s=An(o),s!==null&&X0(s),e.blockedOn=o,!1;s.shift()}return!0}function Z0(e,s,o){Yu(e)&&o.delete(s)}function Dv(){Ih=!1,tr!==null&&Yu(tr)&&(tr=null),nr!==null&&Yu(nr)&&(nr=null),sr!==null&&Yu(sr)&&(sr=null),uc.forEach(Z0),dc.forEach(Z0)}function Wu(e,s){e.blockedOn===s&&(e.blockedOn=null,Ih||(Ih=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Dv)))}var Fu=null;function J0(e){Fu!==e&&(Fu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Fu===e&&(Fu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if($h(r||o)===null)continue;break}var m=An(o);m!==null&&(e.splice(s,3),s-=3,zf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function hl(e){function s(K){return Wu(K,e)}tr!==null&&Wu(tr,e),nr!==null&&Wu(nr,e),sr!==null&&Wu(sr,e),uc.forEach(s),dc.forEach(s);for(var o=0;o<or.length;o++){var r=or[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<or.length&&(o=or[0],o.blockedOn===null);)Q0(o),o.blockedOn===null&&or.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Fn]||null;if(typeof m=="function")v||J0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Fn]||null)A=v.formAction;else if($h(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),J0(o)}}}function ey(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Ph(e){this._internalRoot=e}Xu.prototype.render=Ph.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Di();W0(o,r,e,s,null,null)},Xu.prototype.unmount=Ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;W0(e.current,2,null,e,null,null),Mu(),s[rt]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var s=rn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<or.length&&s!==0&&s<or[o].priority;o++);or.splice(o,0,e),o===0&&Q0(e)}};var ty=n.version;if(ty!=="19.2.4")throw Error(a(527,ty,"19.2.4"));ce.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Nv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{at=Gu.inject(Nv),Ke=Gu}catch{}}return mc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=lg,m=cg,v=ug;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=V0(e,1,!1,null,null,o,r,null,f,m,v,ey),e[rt]=s.current,vh(e),new Ph(s)},mc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=lg,v=cg,A=ug,K=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(K=o.formState)),s=V0(e,1,!0,s,o!=null?o:null,r,f,K,m,v,A,ey),s.context=Y0(null),o=s.current,r=Di(),r=Jt(r),f=Va(r),f.callback=null,Ya(o,f,r),o=r,s.current.lanes=o,_t(s,o),fa(s),e[rt]=s.current,vh(e),new Xu(s)},mc.version="19.2.4",mc}var dy;function Hv(){if(dy)return Uh.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Uh.exports=Pv(),Uh.exports}var Uv=Hv();const Vv=$x(Uv);var _=hp();const Yv=$x(_);function Wv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Fv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var wd;const Ki="__TAURI_TO_IPC_KEY__";function Xv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Ce(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Gv{get rid(){return Wv(this,wd,"f")}constructor(n){wd.set(this,void 0),Fv(this,wd,n)}async close(){return Ce("plugin:resources|close",{rid:this.rid})}}wd=new WeakMap;var Ri;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(Ri||(Ri={}));async function Px(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Ce("plugin:event|unlisten",{event:t,eventId:n})}async function Mc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Ce("plugin:event|listen",{event:t,target:c,handler:Xv(n)}).then(u=>async()=>Px(t,u))}async function qv(t,n,i){return Mc(t,a=>{Px(t,a.id),n(a)},i)}async function Kv(t,n){await Ce("plugin:event|emit",{event:t,payload:n})}async function Qv(t,n,i){await Ce("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Hx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Ec(this.width*n,this.height*n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class Ec{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Hx(this.width/n,this.height/n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class ml{constructor(n){this.size=n}toLogical(n){return this.size instanceof Hx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Ec?this.size:this.size.toPhysical(n)}[Ki](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ki]()}}class Ux{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new cr(this.x*n,this.y*n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class cr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ux(this.x/n,this.y/n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class qu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ux?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof cr?this.position:this.position.toPhysical(n)}[Ki](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ki]()}}class Tc extends Gv{constructor(n){super(n)}static async new(n,i,a){return Ce("plugin:image|new",{rgba:Rd(n),width:i,height:a}).then(c=>new Tc(c))}static async fromBytes(n){return Ce("plugin:image|from_bytes",{bytes:Rd(n)}).then(i=>new Tc(i))}static async fromPath(n){return Ce("plugin:image|from_path",{path:n}).then(i=>new Tc(i))}async rgba(){return Ce("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Ce("plugin:image|size",{rid:this.rid})}}function Rd(t){return t==null?null:typeof t=="string"?t:t instanceof Tc?t.rid:t}var Dm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Dm||(Dm={}));class Zv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var fy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(fy||(fy={}));function mp(){return new Vx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Xh(){return Ce("plugin:window|get_all_windows").then(t=>t.map(n=>new Vx(n,{skip:!0})))}const Gh=["tauri://created","tauri://error"];class Vx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Ce("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Xh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return mp()}static async getAll(){return Xh()}static async getFocusedWindow(){for(const n of await Xh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Mc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:qv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Gh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Kv(n,i)}async emitTo(n,i,a){if(Gh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Qv(n,i,a)}_handleTauriEvent(n,i){return Gh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Ce("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Ce("plugin:window|inner_position",{label:this.label}).then(n=>new cr(n))}async outerPosition(){return Ce("plugin:window|outer_position",{label:this.label}).then(n=>new cr(n))}async innerSize(){return Ce("plugin:window|inner_size",{label:this.label}).then(n=>new Ec(n))}async outerSize(){return Ce("plugin:window|outer_size",{label:this.label}).then(n=>new Ec(n))}async isFullscreen(){return Ce("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Ce("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Ce("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Ce("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Ce("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Ce("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Ce("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Ce("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Ce("plugin:window|is_closable",{label:this.label})}async isVisible(){return Ce("plugin:window|is_visible",{label:this.label})}async title(){return Ce("plugin:window|title",{label:this.label})}async theme(){return Ce("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Ce("plugin:window|is_always_on_top",{label:this.label})}async center(){return Ce("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Dm.Critical?i={type:"Critical"}:i={type:"Informational"}),Ce("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Ce("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Ce("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Ce("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Ce("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Ce("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Ce("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Ce("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Ce("plugin:window|maximize",{label:this.label})}async unmaximize(){return Ce("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Ce("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Ce("plugin:window|minimize",{label:this.label})}async unminimize(){return Ce("plugin:window|unminimize",{label:this.label})}async show(){return Ce("plugin:window|show",{label:this.label})}async hide(){return Ce("plugin:window|hide",{label:this.label})}async close(){return Ce("plugin:window|close",{label:this.label})}async destroy(){return Ce("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Ce("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Ce("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Ce("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Ce("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Ce("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Ce("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Ce("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Ce("plugin:window|set_size",{label:this.label,value:n instanceof ml?n:new ml(n)})}async setMinSize(n){return Ce("plugin:window|set_min_size",{label:this.label,value:n instanceof ml?n:n?new ml(n):null})}async setMaxSize(n){return Ce("plugin:window|set_max_size",{label:this.label,value:n instanceof ml?n:n?new ml(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Ce("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Ce("plugin:window|set_position",{label:this.label,value:n instanceof qu?n:new qu(n)})}async setFullscreen(n){return Ce("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Ce("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Ce("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Ce("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Ce("plugin:window|set_icon",{label:this.label,value:Rd(n)})}async setSkipTaskbar(n){return Ce("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Ce("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Ce("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Ce("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Ce("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Ce("plugin:window|set_cursor_position",{label:this.label,value:n instanceof qu?n:new qu(n)})}async setIgnoreCursorEvents(n){return Ce("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Ce("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Ce("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Ce("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Ce("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Ce("plugin:window|set_overlay_icon",{label:this.label,value:n?Rd(n):void 0})}async setProgressBar(n){return Ce("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Ce("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Ce("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Ce("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Ri.WINDOW_RESIZED,i=>{i.payload=new Ec(i.payload),n(i)})}async onMoved(n){return this.listen(Ri.WINDOW_MOVED,i=>{i.payload=new cr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Ri.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Zv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Ri.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new cr(d.payload.position)}})}),a=await this.listen(Ri.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new cr(d.payload.position)}})}),c=await this.listen(Ri.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new cr(d.payload.position)}})}),u=await this.listen(Ri.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Ri.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Ri.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Ri.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Ri.WINDOW_THEME_CHANGED,n)}}var hy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(hy||(hy={}));var my;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(my||(my={}));var py;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(py||(py={}));var _y;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(_y||(_y={}));async function Jv(t={}){return typeof t=="object"&&Object.freeze(t),await Ce("plugin:dialog|open",{options:t})}/**
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
 */const ra=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(ow,{ref:u,iconNode:n,className:Yx(`lucide-${ew(gy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=gy(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wx=ra("chevron-down",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rw=ra("chevron-right",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],cw=ra("chevron-up",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],dw=ra("ellipsis",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],hw=ra("folder-git-2",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Fx=ra("git-branch-plus",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],_w=ra("git-commit-horizontal",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],yw=ra("git-merge",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],bw=ra("panel-left-close",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],ww=ra("panel-left-open",vw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Cw=ra("search",Sw),kw=3.7,Ku=200,Nm=240,Jn=540,Xs=176,qh=32,Tl=20,jw=Nm/2,pl=Jn+jw,Ra=18,Ba=18,Kh="var(--border)";function yy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Rr(t,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function La(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function kc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:La(t).localeCompare(La(n))}function Xx(t){return[...t].sort(kc)}function Mw(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(w=>[La(w),w])),i=new Map,a=new Map;t.forEach(w=>i.set(La(w),0));for(const w of t){const S=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const k of S){if(!k||!n.has(k))continue;const j=La(w);i.set(j,((y=i.get(j))!=null?y:0)+1);const E=(g=a.get(k))!=null?g:[];E.push(w),a.set(k,E)}}for(const w of a.values())w.sort(kc);const c=t.filter(w=>{var S;return((S=i.get(La(w)))!=null?S:0)===0}).sort(kc),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),S=La(w);if(!d.has(S)){d.add(S),u.push(w);for(const k of(x=a.get(S))!=null?x:[]){const j=La(k),E=((b=i.get(j))!=null?b:0)-1;i.set(j,E),E===0&&c.push(k)}c.sort(kc)}}return u.length===t.length?u:[...u,...t.filter(w=>!d.has(La(w))).sort(kc)]}function Gx(t,n){var i;return Xx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function qx(t,n,i){return Gx(t,i)}function Qh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Ew(t,n){var u,d;if(!n||t.length===0)return Qh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Qh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Qh(t)}function Qu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Tw(t,n,i){var g,x,b,w,S,k,j;const a=qx(t,i,n);if(a.length===0)return null;const c=a.map(E=>Rr(t,E)),u=new Set(c.map(E=>E.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(E=>E.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(E=>h&&E.id===h||d&&E.id===d?!0:!E.parentSha||!u.has(E.parentSha));return y||((j=(k=Ew(c,p!=null?p:void 0))!=null?k:c[0])!=null?j:null)}function Aw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Gx(t.name,i);if(a.length>0){const y=a.map(b=>Rr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function pp(t,n,i={},a={}){var me,pe,Se,Le;const u=new Map(t.map(ee=>[ee.name,ee])),d=new Map,h=new Map;for(const ee of t){const z=((me=i[ee.name])!=null?me:[]).filter(ce=>ce.kind!=="branch-created").map(ce=>new Date(ce.date).getTime()).filter(ce=>Number.isFinite(ce)).sort((ce,W)=>ce-W)[0];z!=null&&h.set(ee.name,z)}const p=ee=>{const le=h.get(ee.name);return le!=null?le:yy(ee).start},y=ee=>{var z;const le=(z=a[ee.name])!=null?z:null;return le&&le!==ee.name&&(le===n||u.has(le))?le:ee.name===n?null:ee.parentBranch&&ee.parentBranch!==ee.name&&(ee.parentBranch===n||u.has(ee.parentBranch))?ee.parentBranch:null};for(const ee of t){if(ee.name===n)continue;const le=(pe=y(ee))!=null?pe:n,z=(Se=d.get(le))!=null?Se:[];z.push(ee),d.set(le,z)}for(const ee of d.values())ee.sort((le,z)=>p(le)-p(z)||le.name.localeCompare(z.name));const g=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ee of Object.values(i))for(const le of ee){const z=new Date(le.date).getTime();Number.isFinite(z)&&(le.fullSha&&S.set(le.fullSha,z),le.sha&&S.set(le.sha,z))}const k=(ee,le)=>({start:Math.min(ee,le),end:Math.max(ee,le)}),j=ee=>{var ne,ke;const le=k(p(ee),yy(ee).end),z=[le],ce=le.start,W=Aw(ee,n,i),ge=W?S.get(W):void 0,De=new Date((ke=(ne=ee.divergedFromDate)!=null?ne:ee.createdDate)!=null?ke:ee.lastCommitDate).getTime(),P=Number.isFinite(ge!=null?ge:NaN)?ge:Number.isFinite(De)?De:null;if(P==null)return z;const ue=k(P,ce);return ue.start!==ue.end&&z.push(ue),z},E=Math.max(1,360*60*1e3*kw),O=(ee,le)=>!(ee.start-le.end>=E||le.start-ee.end>=E),N=(ee,le)=>le.some(z=>{var ce;return((ce=w.get(ee))!=null?ce:[]).some(W=>O(z,W))}),M=(ee,le=new Set)=>{const z=b.get(ee);if(z!=null)return z;if(le.has(ee))return 1;le.add(ee);const ce=u.get(ee);if(!ce||ee===n)return le.delete(ee),b.set(ee,0),0;const W=y(ce),ge=W?M(W,le)+1:1;return le.delete(ee),b.set(ee,ge),ge},q=(ee,le=new Set)=>{var Me,Ye;const z=g.get(ee);if(z)return z.column;if(le.has(ee))return 0;le.add(ee);const ce=u.get(ee);if(!ce)return le.delete(ee),0;if(ee===n){const Je={name:ee,column:0,parentName:null};g.set(ee,Je),x.push(Je);const He=j(ce);return w.set(0,[...(Me=w.get(0))!=null?Me:[],...He]),le.delete(ee),0}const W=y(ce),ge=W&&!le.has(W)?W:null,De=ge?q(ge,le):0,P=Math.max(1,M(ee)),ue=Math.max(ge?De+1:1,P),ne=j(ce);let ke=ue;for(;N(ke,ne);)ke+=1;const de={name:ee,column:ke,parentName:ge};return g.set(ee,de),x.push(de),w.set(ke,[...(Ye=w.get(ke))!=null?Ye:[],...ne]),le.delete(ee),ke};q(n);const U=t.filter(ee=>!g.has(ee.name)).sort((ee,le)=>p(ee)-p(le)||ee.name.localeCompare(le.name)),X=U.filter(ee=>y(ee)!=null),Z=U.filter(ee=>y(ee)==null);for(const ee of X)q(ee.name);let he=Math.max(0,...x.map(ee=>ee.column))+1+1;for(const ee of Z){const le=j(ee);let z=he;for(;N(z,le);)z+=1;const ce={name:ee.name,column:z,parentName:null};g.set(ee.name,ce),x.push(ce),w.set(z,[...(Le=w.get(z))!=null?Le:[],...le]),he=z+1}return x.sort((ee,le)=>ee.column-le.column||ee.name.localeCompare(le.name))}function Dw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Zu=2.25,na=0,Zh=0,Nw=3600*1e3,Rw=3600*1e3,Fi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Yo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function xy(t,n,i=new Map){var Z,he,me,pe,Se,Le,ee,le,z,ce,W,ge,De,P,ue;if(t.length===0)return new Map;const a=[...t].sort((ne,ke)=>{const de=Fi(ne.date)-Fi(ke.date);return de!==0?de:ne.id!==ke.id?ne.id.localeCompare(ke.id):ne.visualId.localeCompare(ke.visualId)}),c=new Map;for(const ne of t){const ke=(Z=ne.parentSha)!=null?Z:null;if(ke){const de=(he=c.get(ke))!=null?he:new Set;de.add(ne.id),c.set(ke,de)}for(const de of(me=i.get(ne.id))!=null?me:[]){if(!de)continue;const Me=(pe=c.get(de))!=null?pe:new Set;Me.add(ne.id),c.set(de,Me)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const ne of t){const ke=(Se=y.get(ne.branchName))!=null?Se:new Set;ke.add(ne.id),y.set(ne.branchName,ke);const de=(ee=(Le=n.get(ne.branchName))==null?void 0:Le.column)!=null?ee:0,Me=(le=g.get(ne.id))!=null?le:new Set;Me.add(de),g.set(ne.id,Me);const Ye=new Set;ne.parentSha&&Ye.add(ne.parentSha),x.set(ne.visualId,Ye);const Je=new Set(Ye);for(const He of(z=i.get(ne.id))!=null?z:[])He&&Je.add(He);b.set(ne.visualId,Je)}const w=new Set(Array.from(g.keys())),S=Array.from(w),k=new Map,j=ne=>{const ke=[];for(const de of S)Yo(de,ne)&&ke.push(de);return ke},E=new Map;for(const ne of S)E.set(ne,new Set);for(const ne of t){const ke=j(ne.id);if(ke.length===0)continue;const de=(ce=b.get(ne.visualId))!=null?ce:new Set,Me=new Set;for(const Ye of de)for(const Je of j(Ye))Me.add(Je);for(const Ye of ke){const Je=(W=E.get(Ye))!=null?W:new Set;for(const He of Me)Je.add(He);E.set(Ye,Je)}}const O=new Map,N=(ne,ke=new Set)=>{var Je;const de=O.get(ne);if(de)return de;if(ke.has(ne))return new Set;ke.add(ne);const Me=(Je=E.get(ne))!=null?Je:new Set,Ye=new Set;for(const He of Me){Ye.add(He);for(const Dt of N(He,ke))Ye.add(Dt)}return ke.delete(ne),O.set(ne,Ye),Ye},M=(ne,ke)=>{if(Yo(ne,ke))return!0;const de=j(ne),Me=j(ke);for(const Ye of de){const Je=N(Ye);for(const He of Me)if(Je.has(He))return!0}for(const Ye of Me){const Je=N(Ye);for(const He of de)if(Je.has(He))return!0}return!1};let q=1;const U=(ne,ke)=>{var ct,je,ot,it,mt,Tt,Ct,zt,ft;const de=(je=(ct=n.get(ne.branchName))==null?void 0:ct.column)!=null?je:0,Me=(ot=y.get(ne.branchName))!=null?ot:new Set,Je=!(!!ne.parentSha&&Me.has(ne.parentSha))&&ne.parentSha?ne.parentSha:null,He=Array.from(ke).flatMap(H=>j(H).flatMap(J=>{var ve;return(ve=k.get(J))!=null?ve:[]})),Dt=(ne.kind==="branch-created"||ne.kind==="stash")&&He.length>0?Math.max(...He)+1:null,It=He.length>0?Math.max(...He)+1:1,yt=(it=c.get(ne.id))!=null?it:new Set,ut=Array.from(yt).flatMap(H=>{var J;return Array.from((J=g.get(H))!=null?J:[])}).some(H=>H!==de),Zt=new Date(ne.date).getTime(),fn=Math.max(It,1);let tn=null;for(let H=fn;H<q;H+=1){const J=(mt=d.get(H))!=null?mt:[];if(J.length===0||ut||p.has(H))continue;const ve=(Tt=b.get(ne.visualId))!=null?Tt:new Set;if(!(J.some(Re=>M(ne.id,Re.sha)?!0:Array.from(ve).some(et=>Yo(et,Re.sha)))||J.some(Re=>Re.column===de)||!Number.isFinite(Zt)||!J.every(Re=>{if(!Number.isFinite(Re.time))return!1;const et=!!Je&&!!Re.branchEntryParentSha&&Je===Re.branchEntryParentSha?Rw:Nw;return Math.abs(Re.time-Zt)<=et}))){tn=H;break}}Dt!=null&&(tn=Dt),tn==null&&(tn=Math.max(It,q)),u.set(ne.visualId,tn),tn>=q&&(q=tn+1);const Q=(Ct=d.get(tn))!=null?Ct:[];Q.push({visualId:ne.visualId,sha:ne.id,column:de,time:Zt,branchEntryParentSha:Je}),d.set(tn,Q),ut&&p.add(tn);for(const H of ke){const J=(zt=h.get(H))!=null?zt:[];J.push(tn),h.set(H,J)}const $e=(ft=k.get(ne.id))!=null?ft:[];$e.push(tn),k.set(ne.id,$e)};for(const ne of a){const ke=(ge=x.get(ne.visualId))!=null?ge:new Set;U(ne,ke)}const X=Math.max(1,a.length*2);for(let ne=0;ne<X;ne+=1){let ke=!1;for(const de of a){const Me=(De=x.get(de.visualId))!=null?De:new Set;if(Me.size===0)continue;const Ye=(P=u.get(de.visualId))!=null?P:1;let Je=1;for(const He of Me){const Dt=j(He).flatMap(It=>{var yt;return(yt=k.get(It))!=null?yt:[]});Dt.length>0&&(Je=Math.max(Je,Math.max(...Dt)+1))}if(Ye<Je){u.set(de.visualId,Je);const He=(ue=k.get(de.id))!=null?ue:[];He.length===0?k.set(de.id,[Je]):k.set(de.id,[...He.slice(0,-1),Je]),ke=!0}}if(!ke)break}return u}function Oc(t){var Qi,Qo,Li,sn,ui,Os,Zi,Ji,Bo,xs,Oi,Hs,Yn,jo,di,Us,Lo,gn,qs,Vs,Mo,Wn,Zo,io,zi,Ks,Eo,Oo,Gn,ks,To,_o,go,ts,yo,qn,Qs,Jo,ei,$i,fi,hi,zo,la,zs,Ns,Zs,Et,Xo,yn,$o,ti,Ao,xo,mi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:j="horizontal",nodePositionOverrides:E={}}=t,O=j==="horizontal",N=new Map(i.map(C=>[C.name,C])),M=new Map(n.map(C=>[C.name,C])),q=Mw([...a.map(C=>{var Y,re,Te,Xe;return{id:C.fullSha,branchName:d,message:(Y=C.prTitle)!=null?Y:C.sha,author:"",date:C.date,parentSha:(Te=(re=C.parentShas)==null?void 0:re[0])!=null?Te:null,parentShas:(Xe=C.parentShas)!=null?Xe:[]}}),...((Qi=h[d])!=null?Qi:[]).map(C=>Rr(d,C)),...c.map(C=>Rr(C.branch||"",C)),...u.map(C=>Rr(C.branch||"",C))]),U=new Map,X=new Map;for(const C of i){if(C.name===d)continue;const Y=qx(C.name,y,h);X.set(C.name,Y);const re=Xx(Y.map(Wt=>Rr(C.name,Wt)));if(re.length>0){U.set(C.name,re);continue}const Te=(sn=(Li=(Qo=C.presidesFromSha)!=null?Qo:C.divergedFromSha)!=null?Li:C.createdFromSha)!=null?sn:null;if(!Te)continue;const Xe=(ui=c.find(Wt=>Yo(Wt.fullSha,Te)||Yo(Wt.sha,Te)))==null?void 0:ui.date,st=Xe?null:(Os=Object.values(h).flat().find(Wt=>Yo(Wt.fullSha,Te)||Yo(Wt.sha,Te)))==null?void 0:Os.date,Kt={id:`BRANCH_HEAD:${C.name}:${Te}`,branchName:C.name,message:`Branch ${C.name}`,author:C.lastCommitAuthor,date:(Bo=(Ji=(Zi=Xe!=null?Xe:st)!=null?Zi:C.createdDate)!=null?Ji:C.divergedFromDate)!=null?Bo:C.lastCommitDate,parentSha:Te,clusterKey:null,childShas:[],kind:"branch-created"};U.set(C.name,[Kt])}const Z=new Set(q.map(C=>C.id)),he=(xs=[...q].sort((C,Y)=>Fi(C.date)-Fi(Y.date)||C.id.localeCompare(Y.id))[0])!=null?xs:null,me=new Map(Array.from(U.entries()).map(([C,Y])=>[C,new Set(Y.map(re=>re.id))])),pe=new Map;for(const C of i){if(C.name===d)continue;const Y=Tw(C.name,h,y);if(Y){pe.set(C.name,Y);continue}const re=(Oi=U.get(C.name))==null?void 0:Oi[0];if(re){const Te=(jo=(Yn=(Hs=C.presidesFromSha)!=null?Hs:C.divergedFromSha)!=null?Yn:C.createdFromSha)!=null?jo:null;pe.set(C.name,{...re,parentSha:Te})}}const Se=new Map;for(const[C,Y]of U.entries()){const re=Y.find(Te=>Te.kind!=="branch-created");re&&Se.set(C,re)}const Le=new Map;for(const[C,Y]of U.entries()){const re=Y.filter(st=>st.kind!=="branch-created"),Xe=(di=(re.length>0?re:Y)[0])!=null?di:null;Xe&&Le.set(C,Xe)}const ee=new Map;for(const C of i){if(C.name===d)continue;const Y=(Us=Le.get(C.name))!=null?Us:null,re=(gn=(Lo=pe.get(C.name))==null?void 0:Lo.parentSha)!=null?gn:null,Te=(Mo=(Vs=(qs=C.presidesFromSha)!=null?qs:C.divergedFromSha)!=null?Vs:C.createdFromSha)!=null?Mo:null,Xe=(Wn=Y==null?void 0:Y.parentSha)!=null?Wn:null,st=(Zo=Xe!=null?Xe:re)!=null?Zo:Te;st&&ee.set(C.name,st)}const le=C=>{var st,Kt,Wt,ln,mn,Nn,Hn,Mn;const Y=(st=p[C.name])!=null?st:null;if(!(Y&&Y!==d&&Y!==C.name&&N.has(Y)))return Y!=null?Y:"";const Te=(ln=(Wt=(Kt=ee.get(C.name))!=null?Kt:C.presidesFromSha)!=null?Wt:C.divergedFromSha)!=null?ln:C.createdFromSha;if(Te&&((mn=me.get(Y))!=null?mn:new Set).has(Te))return Y;const Xe=(Hn=(Nn=pe.get(C.name))==null?void 0:Nn.parentSha)!=null?Hn:null;return Xe&&((Mn=me.get(Y))!=null?Mn:new Set).has(Xe),Y},z=C=>{var Xe,st,Kt,Wt,ln,mn,Nn,Hn;const Y=pe.get(C.name),re=(ln=(Wt=(Kt=(st=(Xe=ee.get(C.name))!=null?Xe:Y==null?void 0:Y.parentSha)!=null?st:C.presidesFromSha)!=null?Kt:C.divergedFromSha)!=null?Wt:C.createdFromSha)!=null?ln:null;if(!C.parentBranch&&!re||!re)return null;if(le(C)===d){if(Z.has(re))return re;const Mn=(mn=Y==null?void 0:Y.parentSha)!=null?mn:null;return Mn&&Z.has(Mn)?Mn:(Hn=(Nn=he==null?void 0:he.id)!=null?Nn:Mn)!=null?Hn:re}return Z.has(re),re},ce=C=>z(C),W=new Map;for(const C of[...c,...u]){const Y={...Rr(C.branch||"",C),visualId:`${C.branch||""}:${C.fullSha}`};W.set(C.fullSha,Y)}const ge=new Map(W),De=C=>{ge.has(C.id)||ge.set(C.id,C)},P=new Set(u.map(C=>C.fullSha)),ue=new Map(Array.from(U.entries()).map(([C,Y])=>[C,new Set(Y.map(re=>re.id))])),ne=new Set;for(const C of ue.values())for(const Y of C)ne.add(Y);for(const C of q)ne.has(C.id)||De({...C,visualId:`${C.branchName}:${C.id}`});for(const[C,Y]of U.entries())for(const re of Y)De({...re,visualId:`${C}:${re.id}`});const de=[...Array.from(ge.values()).map(C=>({...C,visualId:`${C.branchName}:${C.id}`}))].sort((C,Y)=>Fi(C.date)-Fi(Y.date)||C.id.localeCompare(Y.id)),Me=new Map;for(const C of de){const Y=(io=Me.get(C.branchName))!=null?io:new Set;Y.add(C.id),Me.set(C.branchName,Y)}const Ye=(C,Y)=>{const re=Me.get(C);if(!re||re.size===0)return!1;for(const Te of re)if(Yo(Te,Y))return!0;return!1},Je=(C,Y)=>{const re=Array.from(Me.entries()).filter(([Te])=>Te!==Y).filter(([,Te])=>Array.from(Te).some(Xe=>Yo(Xe,C))).map(([Te])=>Te);return re.length>0?re.sort()[0]:C.slice(0,7)},He=[],Dt=new Map,It=new Map;for(const C of a){const Y=C.fullSha,re=C.targetBranch,Te=C.targetCommitSha;if(!Y||!re||!Te||!Ye(re,Te))continue;const Xe=((zi=C.parentShas)!=null?zi:[]).slice(1).filter(Kt=>!!Kt&&!Yo(Kt,Y));if(Xe.length===0)continue;const st=(Ks=It.get(Y))!=null?Ks:new Set;for(const Kt of Xe){st.add(Kt);const Wt=Je(Kt,re);He.push({sourceCommitSha:Kt,sourceBranchName:Wt,mergeCommitSha:Y,targetCommitSha:Te,targetBranchName:re});const ln=(Eo=Dt.get(Wt))!=null?Eo:new Map,mn=(Oo=ln.get(Kt))!=null?Oo:new Set;mn.add(re),ln.set(Kt,mn),Dt.set(Wt,ln)}It.set(Y,st)}const yt=new Map;for(const C of i){if(C.name===d)continue;const Y=z(C);Y&&yt.set(C.name,Y)}const lt=new Map;for(const C of de){const Y=It.get(C.id);if(Y&&Y.size>0){const Xe=(Gn=lt.get(C.id))!=null?Gn:new Set;for(const st of Y)Xe.add(st);lt.set(C.id,Xe)}if(C.branchName===d)continue;const re=yt.get(C.branchName);if(!re||re===C.id)continue;const Te=(ks=lt.get(C.id))!=null?ks:new Set;Te.add(re),lt.set(C.id,Te)}const ut=new Map,Zt=new Map;for(const C of de){if(Zt.set(C.id,C),C.parentSha){const Y=(To=ut.get(C.parentSha))!=null?To:new Set;Y.add(C.id),ut.set(C.parentSha,Y)}for(const Y of(_o=lt.get(C.id))!=null?_o:[]){if(!Y)continue;const re=(go=ut.get(Y))!=null?go:new Set;re.add(C.id),ut.set(Y,re)}}const fn=new Map;for(const[C,Y]of ut.entries())fn.set(C,Array.from(Y));const tn=new Set(["branch-created","stash"]),Q=new Set,$e=C=>{if(!C)return null;const Y=de.find(re=>Yo(re.id,C)||Yo(re.visualId.split(":").slice(1).join(":"),C));return Y!=null?Y:null};for(const C of de){if(C.parentSha){const re=$e(C.parentSha),Te=!!re&&Q.has(re.visualId);re&&(C.kind==="stash"||C.kind==="branch-created"||Te)&&Q.add(re.visualId)}const Y=(ts=ut.get(C.id))!=null?ts:new Set;(Y.size>1||Array.from(Y).map(re=>Zt.get(re)).some(re=>re!=null&&re.kind!=null&&tn.has(re.kind)))&&Q.add(C.visualId)}const ct=de.map(C=>{var Y,re;return{...C,childShas:(re=(Y=fn.get(C.id))!=null?Y:C.childShas)!=null?re:[]}}),je=xy(ct,M,lt),ot=new Map;for(const C of ct){const Y=(yo=ot.get(C.branchName))!=null?yo:[];Y.push(C),ot.set(C.branchName,Y)}const it=new Map,mt=new Map,Tt=new Map,Ct=new Map,zt=new Map,ft=(C,Y)=>{var mn,Nn,Hn,Mn,B;if(Y.length===0)return[];const re=[...Y].sort((R,I)=>{var Ue,Ge;const te=(Ue=je.get(R.visualId))!=null?Ue:Number.MAX_SAFE_INTEGER,fe=(Ge=je.get(I.visualId))!=null?Ge:Number.MAX_SAFE_INTEGER;return te!==fe?te-fe:Fi(R.date)-Fi(I.date)||R.id.localeCompare(I.id)}),Te=new Map;let Xe=null,st=0;const Kt=R=>R.kind==="uncommitted"?"uncommitted":R.kind==="stash"?"stash":R.kind==="branch-created"?"branch-created":P.has(R.id)||R.isRemote===!1?"unpushed":"pushed";let Wt=null;for(const R of re){const I=R.kind==="stash"||R.kind==="branch-created",te=Q.has(R.visualId);if(I)continue;const fe=Kt(R);(!Xe||Wt!=null&&Wt!==fe)&&(st+=1,Xe=`cluster:${C}:segment:${st}`);const Ue=(mn=Te.get(Xe))!=null?mn:[];Ue.push(R),Te.set(Xe,Ue),te&&(Xe=null),Wt=fe}const ln=[];for(const[R,I]of Te.entries()){if(I.length===0)continue;const fe=[...I].sort((bt,an)=>{var bs,Pt;const Un=(bs=je.get(bt.visualId))!=null?bs:Number.MIN_SAFE_INTEGER,Xt=(Pt=je.get(an.visualId))!=null?Pt:Number.MIN_SAFE_INTEGER;return Un!==Xt?Xt-Un:Fi(an.date)-Fi(bt.date)||an.id.localeCompare(bt.id)})[0].visualId,Ue={branchName:C,key:R,commitIds:I.map(bt=>bt.visualId),leadId:fe,count:I.length};ln.push(Ue);const Ge=(Nn=zt.get(R))!=null?Nn:0;if(!Ct.has(R))Ct.set(R,fe);else{const bt=Ct.get(R),an=Zt.get(bt.split(":").slice(1).join(":"));if(an){const Un=(Hn=je.get(an.visualId))!=null?Hn:Number.MIN_SAFE_INTEGER;((Mn=je.get(fe))!=null?Mn:Number.MIN_SAFE_INTEGER)>Un&&Ct.set(R,fe)}}zt.set(R,Math.max(Ge,I.length));for(const bt of Ue.commitIds){mt.set(bt,R);const an=bt.split(":").slice(1).join(":"),Un=(B=Tt.get(an))!=null?B:[];Un.includes(R)||Un.push(R),Tt.set(an,Un)}}return ln};for(const[C,Y]of ot.entries())it.set(C,ft(C,Y));const H=new Map;for(const C of ct)H.set(C.id,C);const J=C=>{if(!C)return"none";const Y=Array.from(H.values()).find(re=>Yo(re.id,C)||Yo(re.id.slice(0,7),C)||Yo(C,re.id));return Y?`${Y.id.slice(0,7)} ${Y.branchName}`:C.slice(0,7)},ve=b?["Lane rows (expected):",...[...n].sort((C,Y)=>C.column-Y.column||C.name.localeCompare(Y.name)).map(C=>{var Y;return`  row=${C.column} branch=${C.name} parent=${(Y=C.parentName)!=null?Y:"none"}`}),"",...i.flatMap(C=>{var Kt,Wt,ln,mn,Nn,Hn,Mn,B;const Y=(Kt=h[C.name])!=null?Kt:[],re=[...(Wt=X.get(C.name))!=null?Wt:[]].reverse(),Te=new Set(((ln=U.get(C.name))!=null?ln:[]).map(R=>R.id)),Xe=(Nn=(mn=re.find(R=>!R.parentSha||!re.some(I=>{var te;return Yo(I.fullSha,(te=R.parentSha)!=null?te:"")})))!=null?mn:re[0])!=null?Nn:null,st=(Mn=(Hn=Xe==null?void 0:Xe.parentSha)!=null?Hn:ee.get(C.name))!=null?Mn:null;return[`Branch ${C.name}`,`  ahead=${(B=y[C.name])!=null?B:0} previews=${re.length} rendered=${Te.size}`,`  db parent commit=${J(st)}`,`  db child commit=${Xe?`${Xe.fullSha.slice(0,7)} ${C.name}`:"none"}`,...re.map(R=>{const I=Te.has(R.fullSha)?"visible":"hidden",te=Te.has(R.fullSha)?"kept by render set":"dropped by render set";return`  ${I} ${R.fullSha.slice(0,7)} ${R.message} [${te}]`}),Y.length===0?"  no preview data":null].filter(R=>R!=null)})]:[],Ae=b?Array.from(U.entries()).map(([C,Y])=>[`Branch debug ${C}`,...Y.map(re=>`  ${re.id.slice(0,7)} ${re.message}`)].join(`
`)):[],at=je,Ke=Nm/Zu,Re=20/Zu,_e=O?Jn+Ke+Re:Ku+Ke+Re,et=O?Ku+Ke+Re:pl,We=Math.max(0,...ct.map(C=>{var Y;return(Y=at.get(C.visualId))!=null?Y:1})),Qe=ct.map(C=>{var Xe,st;const Y=M.get(C.branchName),re=(Xe=at.get(C.visualId))!=null?Xe:1,Te=(st=Y==null?void 0:Y.column)!=null?st:0;return O?{commit:C,row:re,column:Te,x:Ba+(re-1)*_e,y:Ra+Te*et}:{commit:C,row:re,column:Te,x:Ba+Te*pl,y:Ra+(We-re)*_e}}),Be=C=>{var re;const Y=(re=E[C.commit.visualId])!=null?re:E[C.commit.id];return Y?{...C,x:Y.x,y:Y.y}:C},tt=Qe.map(Be),xt=w.trim().toLowerCase(),jt=xt?tt.filter(C=>{const Y=C.commit.id.toLowerCase(),re=C.commit.id.slice(0,7).toLowerCase(),Te=C.commit.message.toLowerCase(),Xe=C.commit.branchName.toLowerCase();return Y.includes(xt)||re.includes(xt)||Te.includes(xt)||Xe.includes(xt)}):tt,nt=S&&(qn=tt.find(C=>C.commit.id===S))!=null?qn:null,Lt=new Set(jt.map(C=>C.commit.id)),wt=(Qs=k==null?void 0:k.headSha)!=null?Qs:null,gt=(()=>{var Y,re;const C=(Y=k==null?void 0:k.branchName)!=null?Y:null;return!wt||!C?null:(re=mt.get(`${C}:${wt}`))!=null?re:null})(),nn=new Set;for(const[C,Y]of zt.entries())Y>1&&C!==gt&&nn.add(C);const _t=[...de].filter(C=>{var st;const Y=mt.get(C.visualId);if(!Y)return!0;const re=Ct.get(Y),Te=(st=zt.get(Y))!=null?st:1,Xe=g.has(Y)||!nn.has(Y)&&!x.has(Y);return Te<=1||Xe||re===C.visualId}),Vt=xy(_t,M,lt),en=Nm/Zu,Rt=20/Zu,vt=O?Jn+en+Rt:Ku+en+Rt,Jt=O?Ku+en+Rt:pl,hn=Math.max(0,...de.map(C=>{var Y;return(Y=je.get(C.visualId))!=null?Y:1})),rn=Math.max(0,..._t.map(C=>{var Y;return(Y=Vt.get(C.visualId))!=null?Y:1})),$t=Math.max(0,hn-rn),kt=[..._t.map(C=>{var Xe,st;const Y=M.get(C.branchName),re=(Xe=Vt.get(C.visualId))!=null?Xe:1,Te=(st=Y==null?void 0:Y.column)!=null?st:0;return Be(O?{commit:C,row:re,column:Te,x:Ba+($t+re-1)*vt,y:Ra+Te*Jt}:{commit:C,row:re,column:Te,x:Ba+Te*pl,y:Ra+(rn-re)*vt})})].sort((C,Y)=>C.row!==Y.row?C.row-Y.row:C.column!==Y.column?C.column-Y.column:C.commit.visualId.localeCompare(Y.commit.visualId)).map(C=>({...C})),Fn=new Set;for(const C of kt){let Y=C.row,re=`${C.column}:${Y}`;for(;Fn.has(re);)Y+=1,re=`${C.column}:${Y}`;C.row=Y,Fn.add(re)}const rt=Math.max(0,...kt.map(C=>C.row));for(const C of kt){if(O){C.x=Ba+($t+C.row-1)*vt,C.y=Ra+C.column*Jt;continue}C.x=Ba+C.column*pl,C.y=Ra+(rt-C.row)*vt}const kn=new Map;for(const C of kt){const Y=(Jo=kn.get(C.commit.id))!=null?Jo:[];Y.push(C),kn.set(C.commit.id,Y)}const ho=new Map;for(const C of kt){const Y=mt.get(C.commit.visualId);if(!Y)continue;const re=ho.get(Y);(!re||(O?C.x>re.x:C.y<re.y))&&ho.set(Y,C)}const Fo=(C,Y)=>`${C.toFixed(1)} ${Y.toFixed(1)}`,mo=Math.max(0,...kt.map(C=>C.row)),So=Math.max(0,...n.map(C=>C.column)),Co=Math.max(0,...kt.map(C=>C.x+Jn)),qt=Math.max(0,...kt.map(C=>C.y+Tl+Xs)),An=Math.max(O?Ba*2+Math.max(0,mo-1)*vt+Jn+qh+Rt:Ba*2+(So+1)*pl,Co+Ba),Ds=Math.max(O?Ra*2+So*Jt+Xs+qh+Rt:Ra*2+Math.max(0,mo-1)*vt+Xs+qh+Rt,qt+Ra),Xn=[],wn=new Map(i.map(C=>{var re,Te;const Y=new Date((Te=(re=C.createdDate)!=null?re:C.divergedFromDate)!=null?Te:C.lastCommitDate).getTime();return[C.name,Number.isFinite(Y)?Y:0]})),Bs=C=>{var Y;return(Y=wn.get(C))!=null?Y:0},$s=[],jn=C=>{b&&$s.push(C)},In=new Set,Ms=new Map,Is=(C,Y)=>{var Te;const re=(Te=Ms.get(C))!=null?Te:[];re.includes(Y)||re.push(Y),Ms.set(C,re)},Ps=new Set,Ro=new Set,no=new Set,is=(C,Y)=>{var Xe,st;if(!C)return null;const re=Qu(kn,C,Y);if(re)return re;const Te=(Xe=mt.get(`${Y!=null?Y:d}:${C}`))!=null?Xe:mt.get(C);return Te&&(st=ho.get(Te))!=null?st:null},Ss=new Set;for(const C of i){const Y=ce(C);Y&&Ro.add(Y);const re=(ei=ee.get(C.name))!=null?ei:null;re&&no.add(re)}const Dn=C=>{var Xe;const Y=is(C.id,C.branchName);if(Y)return Y;const re=mt.get(C.visualId);if(!re)return null;const Te=Ct.get(re);return Te&&(Xe=kt.find(st=>st.commit.id===Te))!=null?Xe:null},so=(C,Y)=>C?Qu(kn,C,Y):null,ci=(C,Y)=>O?{x:C.x-na,y:C.y+Xs/2,face:"left"}:{x:C.x+Jn/2,y:C.y+Xs+na,face:"bottom"},Ls=C=>O?{x:C.x-na,y:C.y+Xs/2,face:"left"}:{x:C.x+Jn/2,y:C.y+Xs+na,face:"bottom"},oo=(C,Y)=>C.column!==Y.column?!0:O?C.commit.branchName!==Y.commit.branchName:!1,po=(C,Y,re)=>{if(!O)return{x:Y?C.x+Jn:C.x+Jn/2,y:Y?C.y+Xs/2:C.y,face:Y?"right":"top"};if(!Y)return{x:C.x+Jn+na,y:C.y+Xs/2,face:"right"};if(re&&re.column===C.column&&re.commit.branchName!==C.commit.branchName){if(re.x>C.x)return{x:C.x+Jn/2,y:C.y+Xs+na,face:"bottom"};if(re.x<C.x)return{x:C.x+Jn/2,y:C.y-na,face:"top"}}return!re||re.column===C.column?{x:C.x+Jn+na,y:C.y+Xs/2,face:"right"}:re.column>C.column?{x:C.x+Jn/2,y:C.y+Xs+na,face:"bottom"}:{x:C.x+Jn/2,y:C.y-na,face:"top"}},Cs=C=>O?{x:C.x+Jn/2,y:C.y+Xs+na,face:"bottom"}:{x:C.x+Jn,y:C.y+Xs/2,face:"right"},es=(C,Y)=>Qu(kn,C,Y),ko=(C,Y)=>so(C,Y),Pn=[],Es=new Set;for(const C of He){const Y=($i=is(C.targetCommitSha,C.targetBranchName))!=null?$i:null;if(!Y){jn({id:`merge:${C.mergeCommitSha}:${C.sourceCommitSha}:target`,kind:"merge",parent:C.sourceCommitSha,child:C.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const re=C.sourceCommitSha,Te=`merge:${C.mergeCommitSha}:${re!=null?re:"unknown"}`;if(!re||Yo(re,C.targetCommitSha)){jn({id:Te,kind:"merge",parent:re!=null?re:"unknown",child:C.targetCommitSha,rendered:!1,reason:re?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Xe=(fi=Qu(kn,re))!=null?fi:null;if(!Xe){jn({id:Te,kind:"merge",parent:re,child:C.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Xe.commit.id===Y.commit.id){jn({id:Te,kind:"merge",parent:Xe.commit.id,child:Y.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let st,Kt,Wt;const ln=O?Y.x+Jn/2:Y.x+Jn-Zh,mn=O?Y.y+Xs+Zh:Y.y+Xs/2,Nn=O?"bottom":"right";O?(st=Xe.x+Jn+Zh,Kt=Xe.y+Xs/2,Wt="right"):(st=Xe.x+Jn/2,Kt=Xe.y,Wt="top");const Hn=`${st.toFixed(2)}:${Kt.toFixed(2)}:${ln.toFixed(2)}:${mn.toFixed(2)}`;if(Es.has(Hn)){jn({id:Te,kind:"merge",parent:Xe.commit.id,child:Y.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Es.add(Hn),Pn.push({id:Te,fromX:st,fromY:Kt,toX:ln,toY:mn,fromFace:Wt,toFace:Nn,zIndex:Bs(Xe.commit.branchName)}),jn({id:Te,kind:"merge",parent:Xe.commit.id,child:Y.commit.id,rendered:!0,reason:`merge connector rendered to ${C.targetBranchName}`})}const ys=new Set;for(const C of i){if(C.name===d)continue;const Y=pe.get(C.name);if(!Y)continue;const re=le(C),Te=es((hi=ee.get(C.name))!=null?hi:"",re),Xe=(zo=Se.get(C.name))!=null?zo:Y,st=(la=ko(Xe.id,C.name))!=null?la:Dn(Xe);if(!Te||!st||Te.commit.id===st.commit.id){const Nn=mt.get(`${C.name}:${Y.id}`),Hn=mt.get(`${C.name}:${Xe.id}`),Mn=!!Nn&&!nn.has(Nn),B=!!Hn&&!nn.has(Hn),R=!!Nn&&!g.has(Nn)&&(Mn?x.has(Nn):!0),I=!!Hn&&!g.has(Hn)&&(B?x.has(Hn):!0);!Te&&!R&&Is((zs=st==null?void 0:st.commit.id)!=null?zs:Y.id,"Missing parent node"),!st&&!I&&Is(Y.id,"Missing child node"),jn({id:`branch:${(Ns=Te==null?void 0:Te.commit.id)!=null?Ns:"null"}->${(Zs=st==null?void 0:st.commit.id)!=null?Zs:"null"}`,kind:"branch",parent:(Et=Te==null?void 0:Te.commit.id)!=null?Et:"null",child:(Xo=st==null?void 0:st.commit.id)!=null?Xo:"null",rendered:!1,reason:Te?st?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Kt=`branch:${Te.commit.id}->${st.commit.id}`;if(Ss.has(Kt)){jn({id:Kt,kind:"branch",parent:Te.commit.id,child:st.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ss.add(Kt),Ps.add(Te.commit.id);const Wt=oo(Te,st);Te.commit.branchName!==st.commit.branchName&&ys.add(Te.commit.id);const ln=Cs(Te),mn=Ls(st);Xn.push({id:Kt,fromX:ln.x,fromY:ln.y,toX:mn.x,toY:mn.y,fromFace:ln.face,toFace:mn.face,zIndex:Bs(st.commit.branchName)}),jn({id:Kt,kind:"branch",parent:Te.commit.id,child:st.commit.id,rendered:!0,reason:Wt?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const C of de){const Y=Dn(C);if(!Y)continue;const re=(yn=C.parentSha)!=null?yn:null;if(!re)continue;const Te=($o=is(re,C.branchName))!=null?$o:es(re,C.branchName);if(!Te){const ln=(ti=mt.get(`${C.branchName}:${re}`))!=null?ti:mt.get(re),mn=!!ln&&!nn.has(ln);!!ln&&!g.has(ln)&&(mn?x.has(ln):!0)||Is(C.id,"Missing parent node"),jn({id:`${C.visualId}->${re}`,kind:"ancestry",parent:re,child:C.id,rendered:!1,reason:"missing parent node"});continue}if(Y.commit.id===Te.commit.id){Is(Y.commit.id,"Parent and child resolve to the same node"),jn({id:`${Te.commit.id}->${Y.commit.id}`,kind:"ancestry",parent:Te.commit.id,child:Y.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Xe=`${C.branchName}:${(Ao=Te.commit.visualId)!=null?Ao:Te.commit.id}->${Y.commit.visualId}`;if(Ss.has(Xe)){Is(Te.commit.id,"Duplicate connector key"),Is(Y.commit.id,"Duplicate connector key"),jn({id:Xe,kind:"ancestry",parent:Te.commit.id,child:Y.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ss.add(Xe),Ps.add(Te.commit.id);const st=oo(Te,Y),Kt=po(Te,st,Y),Wt=ci(Y);Xn.push({id:Xe,fromX:Kt.x,fromY:Kt.y,toX:Wt.x,toY:Wt.y,fromFace:Kt.face,toFace:Wt.face,zIndex:Bs(Y.commit.branchName)}),jn({id:Xe,kind:"ancestry",parent:Te.commit.id,child:Y.commit.id,rendered:!0,reason:st?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),In.add(Te.commit.id),In.add(Y.commit.id)}const us=new Map;for(const C of kt){const Y=(xo=us.get(C.commit.branchName))!=null?xo:[];Y.push(C),us.set(C.commit.branchName,Y)}for(const[C,Y]of us.entries()){if(Y.length<2)continue;const re=[...Y].sort((Te,Xe)=>{var st,Kt,Wt,ln,mn,Nn,Hn,Mn;return Te.row!==Xe.row?Te.row-Xe.row:Fi((Kt=(st=Te==null?void 0:Te.commit)==null?void 0:st.date)!=null?Kt:null)-Fi((ln=(Wt=Xe==null?void 0:Xe.commit)==null?void 0:Wt.date)!=null?ln:null)||((Nn=(mn=Te==null?void 0:Te.commit)==null?void 0:mn.id)!=null?Nn:"").localeCompare((Mn=(Hn=Xe==null?void 0:Xe.commit)==null?void 0:Hn.id)!=null?Mn:"")});for(let Te=1;Te<re.length;Te+=1){const Xe=re[Te-1],st=re[Te];if(Xe.commit.id===st.commit.id)continue;const Kt=(mi=st.commit.parentSha)!=null?mi:null;if(Kt&&es(Kt,st.commit.branchName))continue;const Wt=`chain:${C}:${Xe.commit.id}->${st.commit.id}`;if(Ss.has(Wt)){Is(Xe.commit.id,"Duplicate branch chain connector"),Is(st.commit.id,"Duplicate branch chain connector"),jn({id:Wt,kind:"ancestry",parent:Xe.commit.id,child:st.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Ss.add(Wt);const ln=oo(Xe,st),mn=po(Xe,ln,st),Nn=ci(st);Xn.push({id:Wt,fromX:mn.x,fromY:mn.y,toX:Nn.x,toY:Nn.y,fromFace:mn.face,toFace:Nn.face,zIndex:Bs(st.commit.branchName)}),jn({id:Wt,kind:"ancestry",parent:Xe.commit.id,child:st.commit.id,rendered:!0,reason:"branch chain rendered"}),In.add(Xe.commit.id),In.add(st.commit.id)}}return{branchByName:N,laneByName:M,mainCommits:q,branchCommitsByLane:U,branchPreviewSets:X,allCommits:de,clustersByBranch:it,clusterKeyByCommitId:mt,clusterKeyBySha:Tt,leadByClusterKey:Ct,clusterCounts:zt,debugRows:ve,branchDebugRows:Ae,nodes:Qe,normalizedSearchQuery:xt,matchingNodes:jt,matchingNodeIds:Lt,focusedNode:nt,checkedOutClusterKey:gt,defaultCollapsedClumps:nn,visibleCommitsList:_t,renderNodes:kt,visibleNodesBySha:kn,visibleNodeByClusterKey:ho,pointFormatter:Fo,contentWidth:An,contentHeight:Ds,connectors:Xn,mergeConnectors:Pn,connectorDecisions:$s,nodeWarnings:Ms,connectorParentShas:Ps,branchStartShas:Ro,branchOffNodeShas:no,crossBranchOutgoingShas:ys,commitIdsWithRenderedAncestry:In,branchBaseCommitByName:pe,firstBranchCommitByName:Le,mergeDestinations:He,mergeTargetBranchesBySourceBranchAndCommitSha:Dt}}const Bw=8,Lw=44,by=120,vy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Kx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Bw){const U=d/g,X=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*Z,c1y:n+X*Z,c2x:i-U*Z,c2y:a-X*Z}}if(Math.min(p,y)<Lw){const U=d/g,X=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*Z,c1y:n+X*Z,c2x:i-U*Z,c2y:a-X*Z}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,y*.32),j=Math.min(160,y*.42),E=vy(c),O=vy(u);if(!(E==="v"&&O==="h"||E==="v"&&O==null&&y>=p||E==null&&O==="h"&&y>=p||E==="v"&&O==="v"||E==null&&O==null&&y>p)){const U=i,X=n;return{kind:"elbowH",cx:U,cy:X,s1c1x:t+x*w,s1c1y:n,s1c2x:U-x*S,s1c2y:X,s2c1x:U,s2c1y:X+b*k,s2c2x:i,s2c2y:a-b*j}}const M=t,q=a;return{kind:"elbowV",cx:M,cy:q,s1c1x:t,s1c1y:n+b*j,s1c2x:M,s1c2y:q-b*k,s2c1x:M+x*w,s2c1y:q,s2c2x:i-x*S,s2c2y:a}}function Ow(t,n,i,a,c,u){const d=Kx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function wy(t,n,i,a,c,u,d){const h=Kx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,j=h.cx-S*w,E=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(j-S*w*.5,h.cy)} ${c(j,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,E)}`,`C ${c(h.cx,E+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const _p=2.25,pc=_p/2,zw=.45,$w=.02,Xi=_p,Bd=10,Iw=-100,Sy=0,Pw=.25,Ju=.001,Hw=12,Uw=Jn+48;function _n(...t){return t.filter(Boolean).join(" ")}function Vw(t){return Math.max(zw,Math.min(_p,t))}function Yw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ww(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Fw(t,n,i,a,c,u,d){const h=Ow(t,n,i,a,u,d),p=Ww(h);return Qx(c,p)}function Zx(t,n){return{left:t.x,top:t.y+n,right:t.x+Jn,bottom:t.y+Tl+Xs+4}}function Xw(t,n){const i=Uw,a=Math.max(120,Math.ceil(Tl+Xs+4-n+24)),c=new Map;for(const u of t){const d=Zx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=g;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Gw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=g;S++){const k=d.get(`${w},${S}`);if(k)for(const j of k)x.add(j)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=Zx(S,a);Qx(n,k)&&b.add(w)}return b}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/Xi;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function qw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/Xi;return!Number.isFinite(a)||a<=0?t:qw(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function Bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Rm(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Jh(t,n){return t.pathExists===!1?!1:Rm(t,n)}function Kw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Qw({compactLabels:t=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:w,onMergeRefsIntoBranch:S,selectedPushTargets:k,selectedPushLabel:j,canPushCurrentBranch:E,pushCurrentBranchLabel:O,pushableRemoteBranchCount:N,selectedCommitTargetOption:M,mergeInProgress:q,setMergeTargetCommitSha:U,worktrees:X,currentRepoPath:Z,worktreeMenuOpen:he,setWorktreeMenuOpen:me,onSwitchToWorktree:pe,onRemoveWorktree:Se,removeWorktreeInProgress:Le,setCommitDialogOpen:ee,setNewBranchDialogOpen:le}){var yt,lt;const z=n.length>0,ce=n.length>0&&n.every(ut=>ut==="WORKING_TREE"),[W,ge]=_.useState(!1),De=_.useRef(null),P=_.useRef(null),ue="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ne=!!y&&h&&!a&&!i&&(!z||ce),ke=!!x&&E&&!z&&!d,de=!!w&&k.length>0&&!d,Me=!!b&&N>=2&&!z&&!d,Ye=!!g&&!u&&!z&&!c,Je="Push Selected...",He=ne?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>ee(!0),disabled:!ne}:ke?{label:d?"Pushing...":O,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!ke}:de?{label:Je,iconSrc:"/icon-pushSelected.svg",run:()=>void(w==null?void 0:w(k.map(ut=>({branchName:ut.branchName,targetSha:ut.targetSha})))),disabled:!de}:null,Dt=(ut,Zt)=>l.jsx("span",{"aria-hidden":"true",className:_n("inline-block shrink-0 bg-current",Zt),style:{WebkitMaskImage:`url(${ut})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${ut})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const ut=Zt=>{var tn,Q;const fn=Zt.target;fn&&((tn=De.current)!=null&&tn.contains(fn)||(Q=P.current)!=null&&Q.contains(fn)||(ge(!1),me(!1)))};return window.addEventListener("pointerdown",ut),()=>window.removeEventListener("pointerdown",ut)},[me]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:De,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{He&&He.run()},disabled:!He||He.disabled,className:_n(ue,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[Dt((yt=He==null?void 0:He.iconSrc)!=null?yt:"/icon-commit.svg","h-4.5 w-4.5"),t?null:l.jsx("span",{children:(lt=He==null?void 0:He.label)!=null?lt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>ge(ut=>!ut),disabled:!He,"aria-haspopup":"menu","aria-expanded":W,className:_n(ue,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(Wx,{className:"h-3.5 w-3.5 shrink-0"})}),W&&He?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{ge(!1),ee(!0)},disabled:!ne,className:_n(ue,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ne&&"text-foreground opacity-50"),children:[Dt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{ge(!1),x==null||x()},disabled:!ke,className:_n(ue,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ke&&"text-foreground opacity-50"),children:[Dt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":O]}),l.jsxs("button",{type:"button",onClick:()=>{ge(!1),w==null||w(k.map(ut=>({branchName:ut.branchName,targetSha:ut.targetSha})))},disabled:!de,className:_n(ue,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!de&&"text-foreground opacity-50"),title:j,children:[Dt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),Je]}),l.jsxs("button",{type:"button",onClick:()=>{ge(!1),b==null||b()},disabled:!Me,className:_n(ue,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Me&&"text-foreground opacity-50"),children:[Dt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{ge(!1),g==null||g()},disabled:!Ye,className:_n(ue,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Ye&&"text-foreground opacity-50"),children:[Dt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>le(!0),disabled:p,className:_n(ue,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",t?"w-7 justify-center px-0":""),children:[l.jsx(Fx,{className:_n("h-3.5 w-3.5 shrink-0",t?"":"mr-1.5")}),t?null:p?"Creating...":"Branch"]})}),n.length>1&&M.options.length>0&&M.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),M.options.map(ut=>{const Zt=ut.targetBranch===M.targetBranch;return l.jsx("button",{type:"button",onClick:()=>U(ut.targetSha),className:_n("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Zt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:ut.targetBranch},`merge-${ut.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(M.sources,M.targetBranch),disabled:M.sources.length===0||q,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(yw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),q?"Merging...":"Confirm"]})]}):null,X.length>0&&(pe||Se)?l.jsxs("div",{ref:P,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>me(ut=>!ut),className:_n(ue,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(hw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),X.length,t?null:` ${X.length===1?"Worktree":"Worktrees"}`]}),he?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:X.map(ut=>{var Zt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:ut.path,children:Rm(ut,Z)?Kw(ut.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(Zt=ut.branchName)!=null?Zt:"detached"," • ",ut.headSha.slice(0,7)]})]}),Rm(ut,Z)?l.jsxs("div",{className:"flex items-center gap-1",children:[pe?l.jsx("button",{type:"button",onClick:()=>{me(!1),pe(ut.path)},disabled:Le||ut.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Se?l.jsx("button",{type:"button",onClick:()=>void Se(ut.path,ut.isPrunable),disabled:Le,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Le?"...":"Remove"}):null]}):null]},ut.path)})}):null]}):null]})})}function Zw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Jw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:k,focusedNode:j,renderNodes:E,shouldRenderNode:O,manuallyOpenedClumps:N,manuallyClosedClumps:M,defaultCollapsedClumps:q,leadByClusterKey:U,clusterKeyByCommitId:X,clusterCounts:Z,commitIdsWithRenderedAncestry:he,nodeWarnings:me,connectorParentShas:pe,branchStartShas:Se,branchOffNodeShas:Le,crossBranchOutgoingShas:ee,branchBaseCommitByName:le,branchStartAccentClass:z,connectorParentAccentClass:ce,commitCornerRadiusPx:W,lineStrokeWidth:ge,pointFormatter:De,connectors:P,mergeConnectors:ue,cullConnectorPath:ne,flushCameraReactTick:ke,setManuallyOpenedClumps:de,setManuallyClosedClumps:Me,onCommitCardClick:Ye,unpushedCommitShasSetByBranch:Je,remoteCommitShas:He,checkedOutHeadSha:Dt}){const[It,yt]=_.useState(new Set),lt=_.useRef(null);_.useEffect(()=>{const Q=new Set;Z.forEach((je,ot)=>{(N.has(ot)||!q.has(ot)&&!M.has(ot))&&Q.add(ot)});const $e=lt.current;if($e==null){lt.current=Q;return}const ct=[];if(Q.forEach(je=>{$e.has(je)||ct.push(je)}),ct.length>0){yt(ot=>{const it=new Set(ot);return ct.forEach(mt=>it.add(mt)),it});const je=window.setTimeout(()=>{yt(ot=>{const it=new Set(ot);return ct.forEach(mt=>it.delete(mt)),it})},260);return lt.current=Q,()=>{window.clearTimeout(je)}}lt.current=Q},[Z,q,M,N]);const ut=(Q,$e)=>{const ct=$e.zIndex-Q.zIndex;if(ct!==0)return ct;const je=Math.min(Q.fromY,Q.toY),ot=Math.min($e.fromY,$e.toY),it=je-ot;return it!==0?it:Q.id.localeCompare($e.id)},Zt=ue.filter(Q=>ne(Q)).sort(ut),fn=P.filter(Q=>ne(Q)).sort(ut),tn=E.filter(Q=>O(Q));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[tn.map(Q=>{var Vt,en,Rt,vt,Jt,hn;const $e=X.get(Q.commit.visualId),ct=$e?N.has($e)||!q.has($e)&&!M.has($e):!1,je=$e?U.get($e)===Q.commit.visualId:!1,ot=$e!=null&&ct&&!je&&It.has($e),it=$e&&(Vt=Z.get($e))!=null?Vt:1,mt=he.has(Q.commit.id),Tt=(en=me.get(Q.commit.id))!=null?en:[],Ct=Tt.length>0&&!mt,zt=w.includes(Q.commit.id),ft=Q.commit.id==="WORKING_TREE"||Q.commit.kind==="uncommitted",H=Q.commit.kind==="stash"||Q.commit.id.startsWith("STASH:"),J=/^STASH:(\d+)$/.exec(Q.commit.id),ve=J?`Stash:${J[1]}`:null,Ae=H?Q.commit.message.trim()&&Q.commit.message.trim()!=="git-visualizer"?Q.commit.message:"Stashed changes":Q.commit.message,at=Q.commit.kind==="branch-created"&&Q.commit.id.startsWith("BRANCH_HEAD:"),Ke=ft||((vt=(Rt=Je.get(Q.commit.branchName))==null?void 0:Rt.has(Q.commit.id))!=null?vt:!1),Re=Q.commit.isRemote===!0,_e=!ft&&!Ke&&(Re||He.has(Q.commit.id)),We=(ft||Dt!=null&&Q.commit.id===Dt)&&!zt,Qe=_e&&!We&&!zt,Be=We?"text-checked":Qe?"text-remote":zt?"text-select":"text-foreground",tt=We?{color:"var(--checked)"}:Qe?{color:"var(--remote)"}:zt?{color:"var(--select)"}:void 0,xt=(Jt=tt==null?void 0:tt.color)!=null?Jt:"var(--foreground)",jt=(j==null?void 0:j.commit.id)===Q.commit.id?xt:We?"var(--checked)":Qe?"var(--remote)":zt?"var(--select)":Kh,nt=H||at||ft?1.25/b:ge,Lt=H||ft||at,wt=`${12/b} ${6/b}`,gt=nt/2,nn=`M ${gt} ${gt} H ${Jn-gt-W} Q ${Jn-gt} ${gt} ${Jn-gt} ${gt+W} V ${176-gt-W} Q ${Jn-gt} ${176-gt} ${Jn-gt-W} ${176-gt} H ${gt+W} Q ${gt} ${176-gt} ${gt} ${176-gt-W} V ${gt}`,_t=Ke&&!We&&!zt?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(Zw,{fadeIn:ot,dataCommitCard:"true",className:_n("group absolute z-20",S&&!k.has(Q.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&k.has(Q.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===Q.commit.id?"z-30":""),style:{left:Q.x,top:Q.y,width:Jn,height:Tl+Xs+4,overflow:"visible"},onClick:rn=>Ye(rn,Q),onPointerDown:rn=>y(rn,Q),children:[Lt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Jn} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:nn,fill:"none",stroke:jt,strokeWidth:nt,strokeDasharray:wt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:_n("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:tt!=null?tt:_t,children:H&&ve?ve:Q.commit.branchName?`${Q.commit.branchName}/${Q.commit.id.slice(0,7)}`:Q.commit.id.slice(0,7)}),je&&it>1?l.jsx("button",{type:"button",onMouseDown:rn=>{rn.stopPropagation()},onClick:rn=>{if(rn.stopPropagation(),rn.preventDefault(),!$e)return;!q.has($e)?(de(bn=>{if(!bn.has($e))return bn;const kt=new Set(bn);return kt.delete($e),kt}),Me(bn=>{const kt=new Set(bn);return kt.has($e)?kt.delete($e):kt.add($e),kt})):(Me(bn=>{if(!bn.has($e))return bn;const kt=new Set(bn);return kt.delete($e),kt}),de(bn=>{const kt=new Set(bn);return kt.has($e)?kt.delete($e):kt.add($e),kt})),ke()},className:_n("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Be),style:tt!=null?tt:_t,children:ct?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${it-1}`}):null]})}),l.jsx("div",{className:_n("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",We&&!Ke&&!H&&!at?"bg-checked-muted":Qe&&!H&&!at?"bg-remote-muted":zt&&!Ke&&!H&&!at?"bg-select-muted":Ke||H||at?"bg-transparent":"bg-muted",Lt?"border-solid":"",Le.has(Q.commit.id)||Se.has(Q.commit.id)||ee.has(Q.commit.id)?z:pe.has(Q.commit.id)?ce:((hn=le.get(Q.commit.branchName))==null?void 0:hn.id)===Q.commit.id?"border-amber-500":Ct?"border-red-500":"",(S&&k.has(Q.commit.id)&&!d,"")),style:{top:0,borderWidth:`${nt}px`,borderColor:Lt?"transparent":jt,borderTopLeftRadius:0,borderTopRightRadius:`${W}px`,borderBottomRightRadius:`${W}px`,borderBottomLeftRadius:`${W}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:_n("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:tt!=null?tt:_t,children:je&&ct?Ae:je&&it>1?`${Ae} +${it-1}`:Ae}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Ct?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:Tt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!H?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:_n("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:tt!=null?tt:_t,children:["@",Q.commit.author]}),l.jsx("div",{className:_n("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:tt!=null?tt:_t,children:new Date(Q.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Q.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Zt.map(Q=>{const{fromX:$e,fromY:ct,toX:je,toY:ot}=Q,it=wy($e,ct,je,ot,De,Q.fromFace,Q.toFace);return l.jsx("path",{d:it,fill:"none",stroke:Kh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)}),fn.map(Q=>{const{fromX:$e,fromY:ct,toX:je,toY:ot}=Q,it=wy($e,ct,je,ot,De,Q.fromFace,Q.toFace);return l.jsx("path",{d:it,fill:"none",stroke:Kh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)})]})]})})})}function eS({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function tS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:j,onNewBranchDialogClose:E,onNewBranchConfirm:O,selectedCommitCanCreateBranch:N,currentCheckedOutCommitCanCreateBranch:M,createBranchFromNodeInProgress:q}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:U=>i(U.target.value),onKeyDown:U=>{(U.metaKey||U.ctrlKey)&&U.key==="Enter"&&(U.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(_w,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(U=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:U},U))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:E,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>j("from-selected-node"),className:_n("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>j("new-root"),className:_n("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:U=>k(U.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:E,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:O,disabled:!w.trim()||q||S==="from-selected-node"&&!N&&!M,className:_n("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),q?"Creating...":"Create"]})]})]})}):null]})}const My="/icon-GitOrientation.svg";function nS({compactLabels:t=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:_n("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",t?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:_n("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${My})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${My})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),t?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function sS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Cw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(cw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Wx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function oS({mapPadHostRef:t,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a}){const c=_.useRef({x:0,y:0}),u=_.useRef(pc),d=_.useRef(null),h=_.useRef({panX:0,panY:0,zoom:pc}),p=_.useRef(null),y=_.useRef(pc),g=_.useRef(null),[x,b]=_.useState(!1),[w,S]=_.useState(pc),[k,j]=_.useState(0),E=_.useRef(null),O=_.useRef(0),N=_.useCallback(()=>{const Se=t.current;if(!Se)return null;const Le=Se.getBoundingClientRect(),ee=getComputedStyle(Se),le=Number.parseFloat(ee.borderLeftWidth)||0,z=Number.parseFloat(ee.borderTopWidth)||0,ce=Number.parseFloat(ee.paddingLeft)||Bd,W=Number.parseFloat(ee.paddingTop)||Bd;return{x:Le.left+le+ce,y:Le.top+z+W}},[t]),M=_.useCallback(()=>{E.current!=null&&(window.clearTimeout(E.current),E.current=null),_.startTransition(()=>{j(Se=>Se+1)}),O.current=performance.now()},[]),q=_.useCallback((Se,Le,ee)=>{const le=h.current;h.current={panX:Se,panY:Le,zoom:ee};const z=n.current;if(z&&(z.style.transform=`translate3d(${Se}px, ${Le}px, 0) scale(${ee/Xi})`),Math.abs(y.current-ee)>Ju&&(y.current=ee,S(ee)),Math.abs(ee-le.zoom)>Ju){M();return}const ge=performance.now()-O.current;if(ge>=Sy){M();return}E.current!=null&&window.clearTimeout(E.current),E.current=window.setTimeout(()=>{E.current=null,M()},Sy-ge)},[M,n]),U=_.useRef(null),X=_.useCallback(()=>{p.current!=null||!U.current||(p.current=window.requestAnimationFrame(U.current))},[]),Z=_.useCallback(()=>{b(!0),g.current!=null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{g.current=null,b(!1)},90)},[]),he=_.useCallback((Se,Le,ee)=>{i&&(c.current={x:Se,y:Le},u.current=ee,Z(),X())},[i,Z,X]);U.current=()=>{p.current=null;const Se=h.current,Le=c.current.x,ee=c.current.y,le=u.current,z=d.current,ce=Math.abs(le-Se.zoom)<=Ju?le:Se.zoom+(le-Se.zoom)*Pw,W=z!=null?z.anchorX-z.worldX*(ce/Xi):Le,ge=z!=null?z.anchorY-z.worldY*(ce/Xi):ee;z!=null&&Math.abs(ce-le)<=Ju&&(d.current=null),q(W,ge,ce),W!==Le||ge!==ee||ce!==le?U.current&&(p.current=window.requestAnimationFrame(U.current)):M()};const me=_.useCallback((Se,Le,ee)=>{if(!i)return;const le=Vw(ee),z=c.current.x,ce=c.current.y,W=u.current,ge=N();if(!ge){he(z,ce,le);return}const De=Se-ge.x,P=Le-ge.y,ue=W/Xi,ne=le/Xi,ke=(De-z)/ue,de=(P-ce)/ue,Me=De-ke*ne,Ye=P-de*ne;d.current={anchorX:De,anchorY:P,worldX:ke,worldY:de},he(Me,Ye,le)},[N,i,he]),pe=_.useCallback(Se=>{if(!i)return;if(Se.preventDefault(),Se.ctrlKey||Se.metaKey){a==null||a();const z=Math.exp(-Se.deltaY*$w);me(Se.clientX,Se.clientY,u.current*z);return}a==null||a(),d.current=null;const Le=h.current;c.current={x:Le.panX,y:Le.panY},u.current=Le.zoom;const ee=Le.panX-Se.deltaX,le=Le.panY-Se.deltaY;c.current={x:ee,y:le},q(ee,le,Le.zoom)},[q,i,a,me]);return _.useLayoutEffect(()=>{if(i)return q(0,0,pc),()=>{g.current!=null&&window.clearTimeout(g.current),p.current!=null&&window.cancelAnimationFrame(p.current),E.current!=null&&(window.clearTimeout(E.current),E.current=null)}},[q,i]),_.useLayoutEffect(()=>{const Se=n.current;if(!Se)return;const Le=h.current;Se.style.transform=`translate3d(${Le.panX}px, ${Le.panY}px, 0) scale(${Le.zoom/Xi})`}),{isCameraMoving:x,renderedZoom:w,cameraRenderTick:k,renderedCameraRef:h,interactionIdleTimeoutRef:g,getTransformLayerOriginScreen:N,flushCameraReactTick:M,syncCamera:he,handleWheel:pe}}function iS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function aS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[w,S]=_.useState([]),[k,j]=_.useState(null),E=_.useCallback(N=>{const M=t.current,q=i();if(!M||!q)return[];const U=M.getBoundingClientRect(),X=n.current.zoom/Xi;if(X<=0)return[];const Z=[],he=N.left,me=N.left+N.width,pe=N.top,Se=N.top+N.height;for(const Le of a){if(!c(Le))continue;const ee=q.x+n.current.panX+Le.x*X-U.left,le=q.y+n.current.panY+Le.y*X-U.top,z=ee+Jn*X,ce=le+(Tl+Xs)*X;!(z<he||ee>me||ce<pe||le>Se)&&Z.push(Le.commit.id)}return Z},[i,a,n,t,c]),O=_.useCallback(N=>{if(N.button!==0)return;const M=N.target;if(M!=null&&M.closest("[data-commit-card]")||M!=null&&M.closest("button, a, input, textarea, select"))return;const q=t.current;if(!q)return;N.preventDefault();const U=q.getBoundingClientRect(),X=N.clientX-U.left,Z=N.clientY-U.top;d.current={startX:X,startY:Z,currentX:X,currentY:Z,additive:N.metaKey||N.ctrlKey},h.current=!1,p.current=N.metaKey||N.ctrlKey?w:[],g(!0),b({left:X,top:Z,width:0,height:0})},[t,w]);return _.useEffect(()=>{const N=q=>{var pe;const U=d.current;if(!U)return;const X=t.current;if(!X)return;const Z=X.getBoundingClientRect();U.currentX=q.clientX-Z.left,U.currentY=q.clientY-Z.top,!h.current&&(Math.abs(U.currentX-U.startX)>2||Math.abs(U.currentY-U.startY)>2)&&(h.current=!0);const he=iS(U);b(he);const me=E(he);S(U.additive?Array.from(new Set([...p.current,...me])):Array.from(new Set(me))),U.additive||j((pe=me[me.length-1])!=null?pe:null)},M=()=>{if(d.current){const q=h.current;d.current=null,h.current=!1,g(!1),b(null),q||(S([]),j(null));return}u()};return window.addEventListener("mousemove",N),window.addEventListener("mouseup",M),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",M)}},[E,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:j,startMarqueeDrag:O}}function rS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Ey({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:j=!1,onPushAllBranches:E,onPushCurrentBranch:O,onPushCommitTargets:N,pushInProgress:M=!1,onDeleteSelection:q,deleteInProgress:U=!1,worktrees:X=[],currentRepoPath:Z,onRemoveWorktree:he,removeWorktreeInProgress:me=!1,onSwitchToWorktree:pe,onStashLocalChanges:Se,stashInProgress:Le=!1,stashDisabled:ee=!1,onCommitLocalChanges:le,commitInProgress:z=!1,commitDisabled:ce=!1,onStageAllChanges:W,stageInProgress:ge=!1,onCreateBranchFromNode:De,onCreateRootBranch:P,createBranchFromNodeInProgress:ue=!1,isDebugOpen:ne=!1,onDebugClose:ke,orientation:de="horizontal",branchCommitPreviews:Me={},branchParentByName:Ye={},branchUniqueAheadCounts:Je={},gridSearchQuery:He="",gridSearchJumpToken:Dt=0,gridSearchJumpDirection:It=1,gridFocusSha:yt=null,checkedOutRef:lt=null,onGridSearchResultCountChange:ut,onGridSearchResultIndexChange:Zt,onGridSearchFocusChange:fn,onInteractionChange:tn,manuallyOpenedClumps:Q,manuallyClosedClumps:$e,setManuallyOpenedClumps:ct,setManuallyClosedClumps:je,gridHudProps:ot}){var Ue,Ge,bt,an,Un,Xt,bs,Pt,Sn,Rn,D,L,F,G;const it=_.useRef(null),mt=_.useRef(null),Tt=_.useRef(null),Ct=_.useRef(null),zt=_.useRef(null),ft=_.useRef(void 0),H=_.useRef(void 0),J=_.useRef(void 0),ve=_.useRef(0),Ae=_.useRef(null),[at,Ke]=_.useState(!1),[Re,_e]=_.useState(!1),[et,We]=_.useState(""),[Qe,Be]=_.useState(!1),[tt,xt]=_.useState(!1),[jt,nt]=_.useState(""),[Lt,wt]=_.useState("from-selected-node"),[gt,nn]=_.useState(()=>new Set),[_t,Vt]=_.useState(()=>new Set),[en,Rt]=_.useState({}),vt=_.useRef(!1),Jt=_.useRef(null),hn=_.useRef(null),rn=Q!=null?Q:gt,$t=$e!=null?$e:_t,bn=ct!=null?ct:nn,kt=je!=null?je:Vt,[Fn,rt]=_.useState(null),[kn,ho]=_.useState(null),[Fo,mo]=_.useState(!1),[So,Co]=_.useState(!1),{isCameraMoving:qt,renderedZoom:An,cameraRenderTick:Ds,renderedCameraRef:Xn,interactionIdleTimeoutRef:wn,getTransformLayerOriginScreen:Bs,flushCameraReactTick:$s,syncCamera:jn,handleWheel:In}=oS({mapPadHostRef:Tt,transformLayerRef:Ct}),Ms=_.useMemo(()=>pp(t,d,Me,Ye),[t,d,Me,Ye]),Ps=_.useMemo(()=>Oc({lanes:Ms,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Me,branchParentByName:Ye,branchUniqueAheadCounts:Je,manuallyOpenedClumps:rn,manuallyClosedClumps:$t,isDebugOpen:ne,gridSearchQuery:He,gridFocusSha:yt,checkedOutRef:lt!=null?lt:null,orientation:de,nodePositionOverrides:en}),[Ms,t,n,i,a,d,Me,Ye,Je,rn,$t,ne,He,yt,(Ue=lt==null?void 0:lt.headSha)!=null?Ue:null,(Ge=lt==null?void 0:lt.branchName)!=null?Ge:null,de,en]),Ro=_.useMemo(()=>Oc({lanes:Ms,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Me,branchParentByName:Ye,branchUniqueAheadCounts:Je,manuallyOpenedClumps:rn,manuallyClosedClumps:$t,isDebugOpen:ne,gridSearchQuery:He,gridFocusSha:yt,checkedOutRef:lt!=null?lt:null,orientation:de,nodePositionOverrides:en}),[Ms,t,n,i,a,d,Me,Ye,Je,rn,$t,ne,He,yt,(bt=lt==null?void 0:lt.headSha)!=null?bt:null,(an=lt==null?void 0:lt.branchName)!=null?an:null,de,en]),{allCommits:no,clusterKeyByCommitId:is,leadByClusterKey:Ss,clusterCounts:Dn,matchingNodes:so,matchingNodeIds:ci,normalizedSearchQuery:Ls,focusedNode:oo,defaultCollapsedClumps:po,renderNodes:Cs,visibleNodesBySha:es,contentWidth:ko,contentHeight:Pn,connectors:Es,mergeConnectors:ys,connectorDecisions:us,nodeWarnings:Qi,commitIdsWithRenderedAncestry:Qo,connectorParentShas:Li,branchStartShas:sn,branchOffNodeShas:ui,crossBranchOutgoingShas:Os,branchBaseCommitByName:Zi,pointFormatter:Ji}=Ps,Bo=!!Ls,xs=An/Xi,Oi=_.useMemo(()=>({transform:`scale(${1/xs})`,transformOrigin:"top left",width:`${100*xs}%`,height:`${100*xs}%`}),[xs]),Hs=-(20/xs),Yn=_.useMemo(()=>{const T=new Map;for(const V of Cs)T.set(V.commit.visualId,V);return T},[Cs]),jo=_.useMemo(()=>Xw(Cs,Hs),[Cs,Hs]),di=T=>{var ye;const V=T.commit.id,ie=T.commit.visualId;if(Bo&&ci.has(V)||(oo==null?void 0:oo.commit.id)===V||Fn===null)return!0;if(!Fn.has(ie))return!1;const oe=is.get(ie);return oe&&((ye=Dn.get(oe))!=null?ye:1)>1&&(rn.has(oe)||!po.has(oe)&&!$t.has(oe)),!0},Us=1.25/xs,Lo=Hw/xs,gn="border-border/70",qs="border-select",Vs=_.useMemo(()=>new Map(t.map(T=>[T.name,T])),[t]),Mo=(Un=lt==null?void 0:lt.hasUncommittedChanges)!=null?Un:!1;_.useMemo(()=>new Set(t.filter(T=>T.commitsAhead===0&&!T.name.startsWith("*")).map(T=>T.name)),[t]);const Wn=_.useMemo(()=>{var V,ie;const T=new Map;for(const oe of Cs){const ye=(V=T.get(oe.commit.id))!=null?V:new Set;ye.add(oe.commit.branchName),T.set(oe.commit.id,ye)}for(const oe of i){const ye=(ie=T.get(oe.fullSha))!=null?ie:new Set;oe.branch&&ye.add(oe.branch),T.set(oe.fullSha,ye)}return T},[Cs,i,d]),Zo=_.useMemo(()=>new Map(Object.entries(c).map(([T,V])=>[T,new Set(V)])),[c]),io=_.useMemo(()=>{var oe;const T=new Set(i.map(ye=>ye.fullSha)),V=new Set,ie=ye=>{ye&&(V.add(ye),V.add(ye.slice(0,7)))};for(const ye of t){if(ye.commitsBehind<=0)continue;const Ne=(oe=Me[ye.name])!=null?oe:[];for(const qe of Ne)qe.kind==="branch-created"||qe.kind==="uncommitted"||qe.kind==="stash"||T.has(qe.fullSha)||ie(qe.fullSha);ye.headSha&&!T.has(ye.headSha)&&ie(ye.headSha)}return V},[t,Me,i]),zi=_.useCallback(()=>{wn.current,$s()},[$s,wn]),{isMarqueeSelecting:Ks,marqueeRect:Eo,selectedCommitShas:Oo,setSelectedCommitShas:Gn,mergeTargetCommitSha:ks,setMergeTargetCommitSha:To,startMarqueeDrag:_o}=aS({scrollContainerRef:it,renderedCameraRef:Xn,getTransformLayerOriginScreen:Bs,renderNodes:Cs,shouldRenderNode:di,onPointerReleaseNoMarquee:zi}),go=_.useMemo(()=>new Set(Cs.map(T=>T.commit.id)),[Cs]),ts=_.useMemo(()=>Oo.filter(T=>go.has(T)),[Oo,go]),yo=_.useCallback((T,V)=>{var ye;if(!V)return!1;if(((ye=Me[T])!=null?ye:[]).some(Ne=>Bi(Ne.fullSha,V)||Bi(Ne.sha,V)))return!0;const oe=Vs.get(T);return!!(oe!=null&&oe.headSha&&Bi(oe.headSha,V))},[Me,Vs]),qn=(Xt=lt==null?void 0:lt.branchName)!=null?Xt:null,Qs=(bs=lt==null?void 0:lt.headSha)!=null?bs:null,Jo=qn==null,ei=_.useMemo(()=>{if(!yt)return null;const T=Cs.filter(V=>V.commit.id===yt);return T.length===0?null:T.length===1||!oo?T[0]:T.reduce((V,ie)=>{const oe=(V.x-oo.x)**2+(V.y-oo.y)**2;return(ie.x-oo.x)**2+(ie.y-oo.y)**2<oe?ie:V})},[yt,Cs,oo]),$i=_.useCallback((T,V,ie)=>{for(const oe of X){if(!Jh(oe,Z))continue;if(oe.branchName){if(oe.branchName===T&&Bi(oe.headSha,V))return oe;continue}if(!Bi(oe.headSha,V)&&!Bi(oe.headSha,ie))continue;if(oe.parentSha&&yo(T,oe.parentSha)||yo(T,oe.headSha))return oe;const ye=Vs.get(T);if(ye&&Bi(ye.headSha,oe.headSha)||T===d&&i.some(Ne=>Bi(Ne.fullSha,oe.headSha)))return oe}return null},[X,Z,yo,Vs,d,i]),fi=_.useCallback(T=>{for(const V of X)if(Jh(V,Z)&&V.branchName===T)return V;return null},[X,Z]),hi=_.useCallback((T,V)=>{for(const ie of X)if(Jh(ie,Z)&&(Bi(ie.headSha,T)||Bi(ie.headSha,V)))return ie;return null},[X,Z]),zo=_.useCallback(T=>{var V;return Array.from((V=Wn.get(T))!=null?V:[])},[Wn]),la=_.useMemo(()=>{var ye,Ne,qe,pt;const T=new Map;for(const St of ts){const ht=zo(St);if(ht.length===0)continue;const dt=(ye=ht.find(on=>on!==d))!=null?ye:ht[0],Bn=ts.filter(on=>on!==St).filter(on=>!new Set(zo(on)).has(dt));T.set(dt,{targetSha:St,targetBranch:dt,sourceRefs:Bn})}const V=Array.from(T.values()),ie=ks?V.find(St=>{var ht;return St.targetSha===ks||St.targetBranch===((ht=zo(ks)[0])!=null?ht:"")}):null,oe=(Ne=ie!=null?ie:V[V.length-1])!=null?Ne:null;return{options:V,selected:oe,targetBranch:(qe=oe==null?void 0:oe.targetBranch)!=null?qe:null,sources:(pt=oe==null?void 0:oe.sourceRefs)!=null?pt:[]}},[ts,zo,d,ks]),zs=_.useMemo(()=>{const T=[...qn===d?[{name:d,headSha:Qs!=null?Qs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(V=>!V.name.startsWith("*")&&V.unpushedCommits>0&&V.remoteSyncStatus!=="on-github").map(V=>[V.name,V]);return new Map(T)},[t,qn,Qs,d,a.length]),Ns=_.useMemo(()=>{const T=oe=>{var Ne;const ye=zo(oe).filter(qe=>zs.has(qe));return ye.length===0?null:ye.length===1?ye[0]:qn&&ye.includes(qn)?qn:(Ne=ye.find(qe=>qe!==d))!=null?Ne:ye[0]},V=oe=>{var ye;return oe===d?a.map(Ne=>{var qe,pt;return{fullSha:Ne.fullSha,sha:Ne.sha,parentSha:(qe=Ne.parentSha)!=null?qe:null,message:Ne.message,author:Ne.author,date:Ne.date,kind:(pt=Ne.kind)!=null?pt:"commit"}}):(ye=Me[oe])!=null?ye:[]},ie=new Map;for(const oe of ts){const ye=T(oe);if(!ye)continue;const Ne=zs.get(ye);if(!Ne)continue;const qe=V(ye).slice(0,Ne.unpushedCommits),pt=qe.findIndex(ht=>ht.fullSha===oe);if(pt===-1)continue;const St=ie.get(ye);(!St||pt<St.targetIndex)&&ie.set(ye,{branchName:ye,targetSha:oe,targetIndex:pt,commitCount:qe.length-pt})}return Array.from(ie.values())},[ts,zo,zs,qn,d,a,Me]),Zs=_.useMemo(()=>Array.from(new Set(ts.map(T=>/^STASH:(\d+)$/.exec(T)).filter(T=>!!T).map(T=>parseInt(T[1],10)))).sort((T,V)=>T-V),[ts]),Et=ts.includes("WORKING_TREE"),Xo=(Et?1:0)+Zs.length,yn=[...Et?["Uncommitted changes"]:[],...Zs.map(T=>`Stash ${T+1}`)],$o=zs.size,ti=!Jo&&!!qn&&zs.has(qn),Ao=qn?`Push ${qn}`:"Push current branch",xo=Ns.length===1?Ns[0].commitCount>1?`Push ${Ns[0].commitCount} commits on ${Ns[0].branchName}`:`Push ${Ns[0].targetSha.slice(0,7)} on ${Ns[0].branchName}`:`Push ${Ns.length} selected ranges`,mi=_.useCallback(T=>{const V=T.target;V!=null&&V.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||mp().startDragging()},[]);_.useEffect(()=>{const T=qt||Ks;zt.current!==T&&(zt.current=T,tn==null||tn(T))},[qt,Ks,tn]),_.useEffect(()=>{const T=Ls?so.length:null;ft.current!==T&&(ft.current=T,ut==null||ut(T))},[so.length,Ls,ut]),_.useEffect(()=>{const T=Ls&&yt?(()=>{const V=so.findIndex(ie=>ie.commit.id===yt);return V>=0?V:null})():null;H.current!==T&&(H.current=T,Zt==null||Zt(T))},[yt,so,Ls,Zt]);const C=_.useMemo(()=>{var St,ht,dt,Bn,on,cn;if(!Ls)return null;const T=Ls,V=t.map(Qt=>Qt.name),ie=V.find(Qt=>Qt.toLowerCase()===T),oe=ie!=null?ie:V.find(Qt=>Qt.toLowerCase().startsWith(T)),Ne=oe!=null?oe:V.find(Qt=>Qt.toLowerCase().includes(T));if(!Ne)return null;const qe=(St=t.find(Qt=>Qt.name===Ne))!=null?St:null;if(qe!=null&&qe.headSha)return qe.headSha;const pt=(ht=Me[Ne])!=null?ht:[];return pt.length>0?(Bn=(dt=pt[0])==null?void 0:dt.fullSha)!=null?Bn:null:Ne===d&&(cn=(on=i[0])==null?void 0:on.fullSha)!=null?cn:null},[Ls,t,Me,d,i]);_.useEffect(()=>{var oe,ye,Ne;if(!Ls){if(ve.current=Dt,J.current===null)return;J.current=null,fn==null||fn(null);return}if(Dt<=0||ve.current===Dt)return;ve.current=Dt;let T;const V=yt?so.findIndex(qe=>qe.commit.id===yt):-1,ie=so.length>0?V<0?0:(V+It+so.length)%so.length:-1;T=(Ne=(ye=(oe=so[ie])==null?void 0:oe.commit.id)!=null?ye:C)!=null?Ne:null,J.current!==T&&(J.current=T,fn==null||fn(T))},[so,Ls,fn,C,Dt,It]),_.useLayoutEffect(()=>{if(!yt)return;const T=`${yt}:${Dt}`;if(Ae.current===T)return;const V=it.current,ie=ei;if(!V||!ie)return;const oe=Bs();if(!oe)return;const ye=V.getBoundingClientRect(),Ne=Xn.current.zoom,qe=Ne/Xi,pt=ie.x+Jn/2,St=ie.y+Tl+Xs/2,ht=ye.left+ye.width/2,dt=ye.top+ye.height/2;jn(ht-oe.x-pt*qe,dt-oe.y-St*qe,Ne),Ae.current=T},[yt,Dt,ei,Bs,jn,Xn]);const Y=(Rn=(Sn=kn==null?void 0:kn.width)!=null?Sn:(Pt=it.current)==null?void 0:Pt.clientWidth)!=null?Rn:0,re=(F=(L=kn==null?void 0:kn.height)!=null?L:(D=it.current)==null?void 0:D.clientHeight)!=null?F:0,Te=Y>0&&re>0?Cy(Y,re,Xn.current,{innerPaddingPx:Bd}):null,Xe=Te!=null?ky(Te,Xn.current.zoom):null,st=T=>{if(!Xe)return!0;const{fromX:V,fromY:ie,toX:oe,toY:ye}=T;return Fw(V,ie,oe,ye,Xe,T.fromFace,T.toFace)};_.useLayoutEffect(()=>{var qe;const T=it.current;if(!T||T.clientWidth<=0||T.clientHeight<=0)return;const V=T.clientWidth,ie=T.clientHeight;ho(pt=>(pt==null?void 0:pt.width)===V&&(pt==null?void 0:pt.height)===ie?pt:{width:V,height:ie});const oe=Cy(V,ie,Xn.current,{innerPaddingPx:Bd});if(!oe){rt(pt=>pt===null?pt:null);return}const ye=ky(oe,Xn.current.zoom),Ne=Gw(jo,ye,Yn,Hs);for(const pt of Cs){const St=is.get(pt.commit.visualId);if(!St||((qe=Dn.get(St))!=null?qe:1)<=1)continue;(rn.has(St)||!po.has(St)&&!$t.has(St))&&Ne.add(pt.commit.visualId)}rt(pt=>Yw(pt,Ne)?pt:Ne)},[An,Dt,yt,qt,Ds,rn,$t,po,is,Dn,Cs,kn,jo,Yn,Hs]),_.useLayoutEffect(()=>{const T=it.current;if(!T)return;const V=()=>{const oe=T.clientWidth,ye=T.clientHeight;oe<=0||ye<=0||ho(Ne=>(Ne==null?void 0:Ne.width)===oe&&(Ne==null?void 0:Ne.height)===ye?Ne:{width:oe,height:ye})};V();const ie=new ResizeObserver(V);return ie.observe(T),()=>ie.disconnect()},[no.length]);const Kt=Cs.filter(T=>di(T)).length,Wt=ys.filter(T=>st(T)).length,ln=Es.filter(T=>st(T)).length,mn=_.useCallback((T,V)=>{if(vt.current){T.preventDefault(),T.stopPropagation();return}T.stopPropagation();const ie=V.commit.id;if(T.shiftKey?(Gn(qe=>qe.includes(ie)?qe.filter(pt=>pt!==ie):[...qe,ie]),To(ie)):(Gn(qe=>qe.includes(ie)?[]:[ie]),To(qe=>qe===ie?null:ie)),!(T.metaKey||T.ctrlKey||T.detail>=2)||ie==="WORKING_TREE")return;const ye=ie.length>=40?ie.slice(0,7):ie;let Ne=null;if(V.commit.branchName?(Ne=$i(V.commit.branchName,ie,ye),Ne||(Ne=fi(V.commit.branchName))):Ne=hi(ie,ye),Ne&&pe){pe(Ne.path);return}h==null||h({commitSha:ie})},[hi,$i,fi,h,pe]),Nn=_.useCallback((T,V)=>{var pt,St,ht,dt,Bn;if(T.button!==0)return;const ie=T.target;if(ie!=null&&ie.closest('[data-selectable-text="true"]')||ie!=null&&ie.closest("button, a, input, textarea, select"))return;T.stopPropagation(),T.preventDefault(),vt.current=!1,T.currentTarget.setPointerCapture(T.pointerId);const oe=(pt=en[V.commit.visualId])!=null?pt:en[V.commit.id];Jt.current={nodeId:V.commit.visualId,startX:T.clientX,startY:T.clientY,baseX:(St=oe==null?void 0:oe.x)!=null?St:V.x,baseY:(ht=oe==null?void 0:oe.y)!=null?ht:V.y,moved:!1,pendingX:(dt=oe==null?void 0:oe.x)!=null?dt:V.x,pendingY:(Bn=oe==null?void 0:oe.y)!=null?Bn:V.y};const ye=()=>{hn.current=null;const on=Jt.current;on&&Rt(cn=>({...cn,[on.nodeId]:{x:on.pendingX,y:on.pendingY}}))},Ne=on=>{const cn=Jt.current;if(!cn)return;const Qt=Xn.current.zoom/Xi,Ln=Qt>0?1/Qt:1,Ht=(on.clientX-cn.startX)*Ln,Yt=(on.clientY-cn.startY)*Ln;(Math.abs(Ht)>2||Math.abs(Yt)>2)&&(cn.moved=!0),cn.moved&&(vt.current=!0),cn.pendingX=cn.baseX+Ht,cn.pendingY=cn.baseY+Yt,hn.current==null&&(hn.current=window.requestAnimationFrame(ye))},qe=()=>{window.removeEventListener("pointermove",Ne),window.removeEventListener("pointerup",qe),window.removeEventListener("pointercancel",qe),hn.current!=null&&(window.cancelAnimationFrame(hn.current),hn.current=null,ye());try{T.currentTarget.releasePointerCapture(T.pointerId)}catch{}const on=Jt.current;Jt.current=null,on&&window.setTimeout(()=>{vt.current=!1},0)};window.addEventListener("pointermove",Ne),window.addEventListener("pointerup",qe),window.addEventListener("pointercancel",qe)},[en]),Hn=_.useCallback(async()=>{if(!le)return;await le(et)&&(_e(!1),We(""))},[le,et]),Mn=_.useCallback(async()=>{q&&(await q({branchNames:[],discardUncommittedChanges:Et,stashIndices:Zs}),Be(!1),Gn([]),To(null))},[q,Et,Zs]),B=_.useCallback(async()=>{var V;const T=jt.trim();if(T){if(Lt==="new-root"){if(!P)return;await P(T)}else{if(!De)return;const ie=ts.length===1?ts[0]:(V=lt==null?void 0:lt.headSha)!=null?V:null;if(!ie||!(ie==="WORKING_TREE"||ie.startsWith("STASH:")||ie===(lt==null?void 0:lt.headSha)))return;await De(ie,T)}xt(!1),nt(""),wt("from-selected-node"),Gn([]),To(null)}},[lt==null?void 0:lt.headSha,Lt,jt,De,P,ts]),R=!!(lt!=null&&lt.headSha),I=ts.length===0&&R,te=ts.length===1&&(ts[0]==="WORKING_TREE"||ts[0].startsWith("STASH:"))||I,fe=!!P;return _.useEffect(()=>{if(tt){if(!te&&!I&&fe){wt("new-root");return}(te||I)&&wt("from-selected-node")}},[fe,I,tt,te]),_.useEffect(()=>{const T=mt.current;if(!T)return;const V=640,ie=440,oe=()=>{const Ne=T.getBoundingClientRect().width;mo(Ne<V),Co(Ne<ie)};oe();const ye=new ResizeObserver(()=>oe());return ye.observe(T),()=>ye.disconnect()},[]),_.useEffect(()=>{const T=V=>{if(!q||Qe||ts.length===0)return;const ie=V.target;ie!=null&&ie.closest('input, textarea, select, button, [contenteditable="true"]')||V.key!=="Delete"&&V.key!=="Backspace"||(V.preventDefault(),Be(!0))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[Qe,q,ts.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(eS,{isOpen:ne,onClose:()=>ke==null?void 0:ke(),visibleBounds:Xe,renderedNodeCount:Kt,totalNodeCount:Cs.length,renderedMergeConnectorCount:Wt,totalMergeConnectorCount:ys.length,renderedConnectorCount:ln,totalConnectorCount:Es.length,mapGridCullViewportInsetScreenPx:Iw,debugRows:Ro.debugRows,branchDebugRows:Ro.branchDebugRows,connectorDecisions:us}),ot?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:mi,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:mt,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Qw,{compactLabels:Fo,selectedVisibleCommitShas:ts,commitInProgress:z,commitDisabled:ce,stageInProgress:ge,stashInProgress:Le,stashDisabled:ee,pushInProgress:M,hasUncommittedChanges:Mo,createBranchFromNodeInProgress:ue,onCommitLocalChanges:le,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:Se,onPushCurrentBranch:O,onPushAllBranches:E,onPushCommitTargets:N,onMergeRefsIntoBranch:k,selectedPushTargets:Ns,selectedPushLabel:xo,canPushCurrentBranch:ti,pushCurrentBranchLabel:Ao,pushableRemoteBranchCount:$o,selectedCommitTargetOption:la,mergeInProgress:j,mergeTargetCommitSha:ks,setMergeTargetCommitSha:To,worktrees:X,currentRepoPath:Z,worktreeMenuOpen:at,setWorktreeMenuOpen:Ke,onSwitchToWorktree:pe,onRemoveWorktree:he,removeWorktreeInProgress:me,setCommitDialogOpen:_e,setNewBranchDialogOpen:xt})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[So?null:l.jsx(sS,{query:ot.gridSearchQuery,onQueryChange:ot.setGridSearchQuery,resultCount:ot.gridSearchResultCount,resultIndex:ot.gridSearchResultIndex,onJump:T=>{ot.setGridSearchJumpDirection(T),ot.setGridSearchJumpToken(V=>V+1)}}),l.jsx(nS,{compactLabels:Fo,orientation:ot.mapGridOrientation,onOrientationChange:ot.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(G=ot.githubAuthStatus)!=null&&G.ghAvailable&&!ot.githubAuthStatus.authenticated?l.jsx("button",{onClick:ot.onGitHubAuthSetup,disabled:ot.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:ot.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,ot.githubAuthStatus&&!ot.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,ot.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:ot.githubAuthMessage,children:ot.githubAuthMessage})]}):null,ot.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${ot.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${ot.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:ot.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:ot.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:ot.commitSwitchFeedback.message})]}):null]})]}):null,x||no.length===0?l.jsx(rS,{}):l.jsx(Jw,{scrollContainerRef:it,mapPadHostRef:Tt,transformLayerRef:Ct,isMarqueeSelecting:Ks,contentWidth:ko,contentHeight:Pn,isCameraMoving:qt,onWheel:In,onMouseDown:_o,onNodePointerDown:Nn,labelTopPx:Hs,inverseZoomStyle:Oi,displayZoom:xs,selectedVisibleCommitShas:ts,normalizedSearchQuery:Ls,matchingNodeIds:ci,focusedNode:ei,renderNodes:Cs,shouldRenderNode:di,manuallyOpenedClumps:rn,manuallyClosedClumps:$t,defaultCollapsedClumps:po,leadByClusterKey:Ss,clusterKeyByCommitId:is,clusterCounts:Dn,commitIdsWithRenderedAncestry:Qo,nodeWarnings:Qi,connectorParentShas:Li,branchStartShas:sn,branchOffNodeShas:ui,crossBranchOutgoingShas:Os,branchBaseCommitByName:Zi,branchStartAccentClass:qs,connectorParentAccentClass:gn,commitCornerRadiusPx:Lo,lineStrokeWidth:Us,pointFormatter:Ji,connectors:Es,mergeConnectors:ys,cullConnectorPath:st,flushCameraReactTick:$s,setManuallyOpenedClumps:bn,setManuallyClosedClumps:kt,onCommitCardClick:mn,unpushedCommitShasSetByBranch:Zo,remoteCommitShas:io,checkedOutHeadSha:Qs,orientation:de}),Eo&&Ks?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Eo.left,top:Eo.top,width:Eo.width,height:Eo.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(tS,{commitDialogOpen:Re,commitMessageDraft:et,onCommitMessageDraftChange:We,onCommitDialogClose:()=>_e(!1),onCommitConfirm:()=>void Hn(),commitInProgress:z,deleteConfirmOpen:Qe,deleteSelectionItems:yn,onDeleteConfirmClose:()=>Be(!1),onDeleteConfirm:()=>void Mn(),deleteInProgress:U,deletableSelectionCount:Xo,newBranchDialogOpen:tt,newBranchName:jt,newBranchCreateMode:Lt,onNewBranchNameChange:nt,onNewBranchCreateModeChange:wt,onNewBranchDialogClose:()=>xt(!1),onNewBranchConfirm:()=>void B(),selectedCommitCanCreateBranch:te,currentCheckedOutCommitCanCreateBranch:I,createBranchFromNodeInProgress:ue})]})}function lS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:k=1,gridFocusSha:j=null,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:N,view:M="time",isLoading:q=!1,scrollRequest:U,focusedErrorBranch:X,checkedOutRef:Z=null,mapTopInsetPx:he=0,onMergeRefsIntoBranch:me,mergeInProgress:pe=!1,onPushAllBranches:Se,onPushCurrentBranch:Le,onPushCommitTargets:ee,pushInProgress:le=!1,onDeleteSelection:z,worktrees:ce=[],currentRepoPath:W,onRemoveWorktree:ge,removeWorktreeInProgress:De=!1,onSwitchToWorktree:P,onStashLocalChanges:ue,stashInProgress:ne=!1,stashDisabled:ke=!1,onCommitLocalChanges:de,commitInProgress:Me=!1,commitDisabled:Ye=!1,onStageAllChanges:Je,stageInProgress:He=!1,onCreateBranchFromNode:Dt,onCreateRootBranch:It,createBranchFromNodeInProgress:yt=!1,isMutationBusy:lt=!1,onMoveNodeBackToBranch:ut,isDebugOpen:Zt=!1,onDebugClose:fn,orientation:tn="horizontal",onInteractionChange:Q,manuallyOpenedClumps:$e,manuallyClosedClumps:ct,setManuallyOpenedClumps:je,setManuallyClosedClumps:ot,layoutModel:it,gridHudProps:mt}){const Tt=new Set(u.map(J=>J.branchName)),Ct=14*864e5,zt=Date.now();function ft(J){return Tt.has(J.name)||zt-new Date(J.lastCommitDate).getTime()<=Ct}const H=t.filter(J=>J.status==="stale"&&ft(J)).sort((J,ve)=>new Date(ve.lastCommitDate).getTime()-new Date(J.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:M==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:j,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:N,staleBranches:H,isLoading:q,scrollRequest:U,focusedErrorBranch:X,checkedOutRef:Z,mapTopInsetPx:he,onMergeRefsIntoBranch:me,mergeInProgress:pe,onPushAllBranches:Se,onPushCurrentBranch:Le,onPushCommitTargets:ee,pushInProgress:le,onDeleteSelection:z,worktrees:ce,currentRepoPath:W,onRemoveWorktree:ge,removeWorktreeInProgress:De,onSwitchToWorktree:P,onStashLocalChanges:ue,stashInProgress:ne,stashDisabled:ke,onCommitLocalChanges:de,commitInProgress:Me,commitDisabled:Ye,onStageAllChanges:Je,stageInProgress:He,onCreateBranchFromNode:Dt,onCreateRootBranch:It,createBranchFromNodeInProgress:yt,isMutationBusy:lt,onMoveNodeBackToBranch:ut,isDebugOpen:Zt,onDebugClose:fn,orientation:tn,onInteractionChange:Q,manuallyOpenedClumps:$e,manuallyClosedClumps:ct,setManuallyOpenedClumps:je,setManuallyClosedClumps:ot,layoutModel:it,gridHudProps:mt})}):M==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:j,checkedOutRef:Z,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:N,onInteractionChange:Q,manuallyOpenedClumps:$e,manuallyClosedClumps:ct,setManuallyOpenedClumps:je,setManuallyClosedClumps:ot,layoutModel:it,isDebugOpen:Zt,onDebugClose:fn,orientation:tn,gridHudProps:mt})}):null})}var Al=Ix();const gp=_.createContext({});function Vc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const cS=typeof window<"u",yp=cS?_.useLayoutEffect:_.useEffect,Fd=_.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function kl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ga=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const dr={},Jx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function eb(t){return typeof t=="object"&&t!==null}const tb=t=>/^0[^.\s]+$/u.test(t);function nb(t){let n;return()=>(n===void 0&&(n=t()),n)}const qi=t=>t,uS=(t,n)=>i=>n(t(i)),Yc=(...t)=>t.reduce(uS),jl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>kl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Si=t=>t*1e3,Gi=t=>t/1e3;function sb(t,n){return n?t*(1e3/n):0}const dS=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},ob=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,fS=1e-7,hS=12;function mS(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=ob(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>fS&&++h<hS);return d}function Wc(t,n,i,a){if(t===n&&i===a)return qi;const c=u=>mS(u,0,1,t,i);return u=>u===0||u===1?u:ob(c(u),n,a)}const ib=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,ab=t=>n=>1-t(1-n),rb=Wc(.33,1.53,.69,.99),wp=ab(rb),lb=ib(wp),cb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),ub=ab(Sp),db=ib(Sp),pS=Wc(.42,0,1,1),_S=Wc(0,0,.58,1),fb=Wc(.42,0,.58,1),hb=t=>Array.isArray(t)&&typeof t[0]!="number";function mb(t,n){return hb(t)?t[dS(0,t.length,n)]:t}const pb=t=>Array.isArray(t)&&typeof t[0]=="number",gS={linear:qi,easeIn:pS,easeInOut:fb,easeOut:_S,circIn:Sp,circInOut:db,circOut:ub,backIn:wp,backInOut:lb,backOut:rb,anticipate:cb},yS=t=>typeof t=="string",Ty=t=>{if(pb(t)){bp(t.length===4);const[n,i,a,c]=t;return Wc(n,i,a,c)}else if(yS(t))return gS[t];return t},ed=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function xS(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const bS=40;function _b(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=ed.reduce((N,M)=>(N[M]=xS(u),N),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const N=dr.useManualTiming,M=N?c.timestamp:performance.now();i=!1,N||(c.delta=a?1e3/60:Math.max(Math.min(M-c.timestamp,bS),1)),c.timestamp=M,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},j=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:ed.reduce((N,M)=>{const q=d[M];return N[M]=(U,X=!1,Z=!1)=>(i||j(),q.schedule(U,X,Z)),N},{}),cancel:N=>{for(let M=0;M<ed.length;M++)d[ed[M]].cancel(N)},state:c,steps:d}}const{schedule:gs,cancel:za,state:Wo,steps:em}=_b(typeof requestAnimationFrame<"u"?requestAnimationFrame:qi,!0);let Sd;function vS(){Sd=void 0}const ii={now:()=>(Sd===void 0&&ii.set(Wo.isProcessing||dr.useManualTiming?Wo.timestamp:performance.now()),Sd),set:t=>{Sd=t,queueMicrotask(vS)}},gb=t=>n=>typeof n=="string"&&n.startsWith(t),yb=gb("--"),wS=gb("var(--"),Cp=t=>wS(t)?SS.test(t.split("/*")[0].trim()):!1,SS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ay(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Dl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},zc={...Dl,transform:t=>ga(0,1,t)},td={...Dl,default:1},Ac=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CS(t){return t==null}const kS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&kS.test(i)&&i.startsWith(t)||n&&!CS(i)&&Object.prototype.hasOwnProperty.call(i,n)),xb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},jS=t=>ga(0,255,t),tm={...Dl,transform:t=>Math.round(jS(t))},Lr={test:jp("rgb","red"),parse:xb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+tm.transform(t)+", "+tm.transform(n)+", "+tm.transform(i)+", "+Ac(zc.transform(a))+")"};function MS(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Bm={test:jp("#"),parse:MS,transform:Lr.transform},Fc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),rr=Fc("deg"),_a=Fc("%"),Bt=Fc("px"),ES=Fc("vh"),TS=Fc("vw"),Dy={..._a,parse:t=>_a.parse(t)/100,transform:t=>_a.transform(t*100)},bl={test:jp("hsl","hue"),parse:xb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+_a.transform(Ac(n))+", "+_a.transform(Ac(i))+", "+Ac(zc.transform(a))+")"},fo={test:t=>Lr.test(t)||Bm.test(t)||bl.test(t),parse:t=>Lr.test(t)?Lr.parse(t):bl.test(t)?bl.parse(t):Bm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Lr.transform(t):bl.transform(t),getAnimatableNone:t=>{const n=fo.parse(t);return n.alpha=0,fo.transform(n)}},AS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DS(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(AS))==null?void 0:i.length)||0)>0}const bb="number",vb="color",NS="var",RS="var(",Ny="${}",BS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ml(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(BS,p=>(fo.test(p)?(a.color.push(u),c.push(vb),i.push(fo.parse(p))):p.startsWith(RS)?(a.var.push(u),c.push(NS),i.push(p)):(a.number.push(u),c.push(bb),i.push(parseFloat(p))),++u,Ny)).split(Ny);return{values:i,split:h,indexes:a,types:c}}function LS(t){return Ml(t).values}function wb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===bb?c+=Ac(a[u]):d===vb?c+=fo.transform(a[u]):c+=a[u]}return c}}function OS(t){return wb(Ml(t))}const zS=t=>typeof t=="number"?0:fo.test(t)?fo.getAnimatableNone(t):t,$S=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:zS(t);function IS(t){const n=Ml(t);return wb(n)(n.values.map((a,c)=>$S(a,n.split[c])))}const aa={test:DS,parse:LS,createTransformer:OS,getAnimatableNone:IS};function nm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function PS({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=nm(p,h,t+1/3),u=nm(p,h,t),d=nm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ld(t,n){return i=>i>0?n:t}const js=(t,n,i)=>t+(n-t)*i,sm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},HS=[Bm,Lr,bl],US=t=>HS.find(n=>n.test(t));function Ry(t){const n=US(t);if(!n)return!1;let i=n.parse(t);return n===bl&&(i=PS(i)),i}const By=(t,n)=>{const i=Ry(t),a=Ry(n);if(!i||!a)return Ld(t,n);const c={...i};return u=>(c.red=sm(i.red,a.red,u),c.green=sm(i.green,a.green,u),c.blue=sm(i.blue,a.blue,u),c.alpha=js(i.alpha,a.alpha,u),Lr.transform(c))},Lm=new Set(["none","hidden"]);function VS(t,n){return Lm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function YS(t,n){return i=>js(t,n,i)}function Mp(t){return typeof t=="number"?YS:typeof t=="string"?Cp(t)?Ld:fo.test(t)?By:XS:Array.isArray(t)?Sb:typeof t=="object"?fo.test(t)?By:WS:Ld}function Sb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function WS(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function FS(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const XS=(t,n)=>{const i=aa.createTransformer(n),a=Ml(t),c=Ml(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Lm.has(t)&&!c.values.length||Lm.has(n)&&!a.values.length?VS(t,n):Yc(Sb(FS(a,c),c.values),i):Ld(t,n)};function Cb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?js(t,n,i):Mp(t)(t,n)}const GS=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>gs.update(n,i),stop:()=>za(n),now:()=>Wo.isProcessing?Wo.timestamp:ii.now()}},kb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Od=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Od;)n+=i,a=t.next(n);return n>=Od?1/0:n}function jb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),Od);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Gi(c)}}const Gs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Om(t,n){return t*Math.sqrt(1-n*n)}const qS=12;function KS(t,n,i){let a=i;for(let c=1;c<qS;c++)a=a-t(a)/n(a);return a}const om=.001;function QS({duration:t=Gs.duration,bounce:n=Gs.bounce,velocity:i=Gs.velocity,mass:a=Gs.mass}){let c,u,d=1-n;d=ga(Gs.minDamping,Gs.maxDamping,d),t=ga(Gs.minDuration,Gs.maxDuration,Gi(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,w=Om(y,d),S=Math.exp(-x);return om-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),k=Om(Math.pow(y,2),d);return(-c(y)+om>0?-1:1)*((b-w)*S)/k}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-om+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=KS(c,u,h);if(t=Si(t),isNaN(p))return{stiffness:Gs.stiffness,damping:Gs.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const ZS=["duration","bounce"],JS=["stiffness","damping","mass"];function Ly(t,n){return n.some(i=>t[i]!==void 0)}function e4(t){let n={velocity:Gs.velocity,stiffness:Gs.stiffness,damping:Gs.damping,mass:Gs.mass,isResolvedFromDuration:!1,...t};if(!Ly(t,JS)&&Ly(t,ZS))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ga(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Gs.mass,stiffness:c,damping:u}}else{const i=QS({...t,velocity:0});n={...n,...i,mass:Gs.mass},n.isResolvedFromDuration=!0}return n}function $c(t=Gs.visualDuration,n=Gs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=e4({...i,velocity:-Gi(i.velocity||0)}),S=b||0,k=y/(2*Math.sqrt(p*g)),j=d-u,E=Gi(Math.sqrt(p/g)),O=Math.abs(j)<5;a||(a=O?Gs.restSpeed.granular:Gs.restSpeed.default),c||(c=O?Gs.restDelta.granular:Gs.restDelta.default);let N,M,q,U,X,Z;if(k<1)q=Om(E,k),U=(S+k*E*j)/q,N=me=>{const pe=Math.exp(-k*E*me);return d-pe*(U*Math.sin(q*me)+j*Math.cos(q*me))},X=k*E*U+j*q,Z=k*E*j-U*q,M=me=>Math.exp(-k*E*me)*(X*Math.sin(q*me)+Z*Math.cos(q*me));else if(k===1){N=pe=>d-Math.exp(-E*pe)*(j+(S+E*j)*pe);const me=S+E*j;M=pe=>Math.exp(-E*pe)*(E*me*pe-S)}else{const me=E*Math.sqrt(k*k-1);N=ee=>{const le=Math.exp(-k*E*ee),z=Math.min(me*ee,300);return d-le*((S+k*E*j)*Math.sinh(z)+me*j*Math.cosh(z))/me};const pe=(S+k*E*j)/me,Se=k*E*pe-j*me,Le=k*E*j-pe*me;M=ee=>{const le=Math.exp(-k*E*ee),z=Math.min(me*ee,300);return le*(Se*Math.sinh(z)+Le*Math.cosh(z))}}const he={calculatedDuration:w&&x||null,velocity:me=>Si(M(me)),next:me=>{if(!w&&k<1){const Se=Math.exp(-k*E*me),Le=Math.sin(q*me),ee=Math.cos(q*me),le=d-Se*(U*Le+j*ee),z=Si(Se*(X*Le+Z*ee));return h.done=Math.abs(z)<=a&&Math.abs(d-le)<=c,h.value=h.done?d:le,h}const pe=N(me);if(w)h.done=me>=x;else{const Se=Si(M(me));h.done=Math.abs(Se)<=a&&Math.abs(d-pe)<=c}return h.value=h.done?d:pe,h},toString:()=>{const me=Math.min(Ep(he),Od),pe=kb(Se=>he.next(me*Se).value,me,30);return me+"ms "+pe},toTransition:()=>{}};return he}$c.applyToOptions=t=>{const n=jb(t,100,$c);return t.ease=n.ease,t.duration=Si(n.duration),t.type="keyframes",t};const t4=5;function Mb(t,n,i){const a=Math.max(n-t4,0);return sb(i-t(a),n-a)}function zm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},w=Z=>h!==void 0&&Z<h||p!==void 0&&Z>p,S=Z=>h===void 0?p:p===void 0||Math.abs(h-Z)<Math.abs(p-Z)?h:p;let k=i*n;const j=x+k,E=d===void 0?j:d(j);E!==j&&(k=E-x);const O=Z=>-k*Math.exp(-Z/a),N=Z=>E+O(Z),M=Z=>{const he=O(Z),me=N(Z);b.done=Math.abs(he)<=y,b.value=b.done?E:me};let q,U;const X=Z=>{w(b.value)&&(q=Z,U=$c({keyframes:[b.value,S(b.value)],velocity:Mb(N,Z,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return X(0),{calculatedDuration:null,next:Z=>{let he=!1;return!U&&q===void 0&&(he=!0,M(Z),X(Z)),q!==void 0&&Z>=q?U.next(Z-q):(!he&&M(Z),b)}}}function n4(t,n,i){const a=[],c=i||dr.mix||Cb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||qi:n;h=Yc(p,h)}a.push(h)}return a}function Eb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=n4(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=jl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(ga(t[0],t[u-1],g)):y}function Tb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=jl(0,n,a);t.push(js(i,1,c))}}function Ab(t){const n=[0];return Tb(n,t.length-1),n}function s4(t,n){return t.map(i=>i*n)}function o4(t,n){return t.map(()=>n||fb).splice(0,t.length-1)}function Dc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=hb(a)?a.map(Ty):Ty(a),u={done:!1,value:n[0]},d=s4(i&&i.length===n.length?i:Ab(n),t),h=Eb(d,n,{ease:Array.isArray(c)?c:o4(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const i4=t=>t!==null;function Xd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(i4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const a4={decay:zm,inertia:zm,tween:Dc,keyframes:Dc,spring:$c};function Db(t){typeof t.type=="string"&&(t.type=a4[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const r4=t=>t/100;class zd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ii.now()&&this.tick(ii.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Db(n);const{type:i=Dc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Dc;p!==Dc&&typeof h[0]!="number"&&(this.mixKeyframes=Yc(r4,Cb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ep(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const E=this.currentTime-y*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?E<0:E>c;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let N=this.currentTime,M=a;if(x){const Z=Math.min(this.currentTime,c)/h;let he=Math.floor(Z),me=Z%1;!me&&Z>=1&&(me=1),me===1&&he--,he=Math.min(he,x+1),!!(he%2)&&(b==="reverse"?(me=1-me,w&&(me-=w/h)):b==="mirror"&&(M=d)),N=ga(0,1,me)*h}let q;O?(this.delayState.value=g[0],q=this.delayState):q=M.next(N),u&&!O&&(q.value=u(q.value));let{done:U}=q;!O&&p!==null&&(U=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return X&&S!==zm&&(q.value=Xd(g,this.options,j,this.speed)),k&&k(q.value),X&&this.finish(),q}then(n,i){return this.finished.then(n,i)}get duration(){return Gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(this.currentTime)}set time(n){n=Si(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Mb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ii.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=GS,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ii.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function l4(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Or=t=>t*180/Math.PI,$m=t=>{const n=Or(Math.atan2(t[1],t[0]));return Im(n)},c4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:$m,rotateZ:$m,skewX:t=>Or(Math.atan(t[1])),skewY:t=>Or(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Im=t=>(t=t%360,t<0&&(t+=360),t),Oy=$m,zy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),$y=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),u4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zy,scaleY:$y,scale:t=>(zy(t)+$y(t))/2,rotateX:t=>Im(Or(Math.atan2(t[6],t[5]))),rotateY:t=>Im(Or(Math.atan2(-t[2],t[0]))),rotateZ:Oy,rotate:Oy,skewX:t=>Or(Math.atan(t[4])),skewY:t=>Or(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Pm(t){return t.includes("scale")?1:0}function Hm(t,n){if(!t||t==="none")return Pm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=u4,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=c4,c=h}if(!c)return Pm(n);const u=a[n],d=c[1].split(",").map(f4);return typeof u=="function"?u(d):d[u]}const d4=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Hm(i,n)};function f4(t){return parseFloat(t.trim())}const Nl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rl=new Set(Nl),Iy=t=>t===Dl||t===Bt,h4=new Set(["x","y","z"]),m4=Nl.filter(t=>!h4.has(t));function p4(t){const n=[];return m4.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ur={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Hm(n,"x"),y:(t,{transform:n})=>Hm(n,"y")};ur.translateX=ur.x;ur.translateY=ur.y;const zr=new Set;let Um=!1,Vm=!1,Ym=!1;function Nb(){if(Vm){const t=Array.from(zr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=p4(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Vm=!1,Um=!1,zr.forEach(t=>t.complete(Ym)),zr.clear()}function Rb(){zr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Vm=!0)})}function _4(){Ym=!0,Rb(),Nb(),Ym=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(zr.add(this),Um||(Um=!0,gs.read(Rb),gs.resolveKeyframes(Nb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}l4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),zr.delete(this)}cancel(){this.state==="scheduled"&&(zr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const g4=t=>t.startsWith("--");function Bb(t,n,i){g4(n)?t.style.setProperty(n,i):t.style[n]=i}const y4={};function Lb(t,n){const i=nb(t);return()=>{var a;return(a=y4[n])!=null?a:i()}}const x4=Lb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ob=Lb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),jc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,Py={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:jc([0,.65,.55,1]),circOut:jc([.55,0,1,.45]),backIn:jc([.31,.01,.66,-.59]),backOut:jc([.33,1.53,.69,.99])};function zb(t,n){if(t)return typeof t=="function"?Ob()?kb(t,n):"ease-out":pb(t)?jc(t):Array.isArray(t)?t.map(i=>zb(i,n)||Py.easeOut):Py[t]}function b4(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=zb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function v4({type:t,...n}){var i,a;return Dp(t)&&Ob()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class $b extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const y=v4(n);this.animation=b4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Xd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Bb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Si(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&x4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),qi):c(this)}}const Ib={anticipate:cb,backInOut:lb,circInOut:db};function w4(t){return t in Ib}function S4(t){typeof t.ease=="string"&&w4(t.ease)&&(t.ease=Ib[t.ease])}const im=10;class C4 extends $b{constructor(n){S4(n),Db(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new zd({...d,autoplay:!1}),p=Math.max(im,ii.now()-this.startTime),y=ga(0,im,p-im),g=h.sample(p).value,{name:x}=this.options;u&&x&&Bb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Hy=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(aa.test(t)||t==="0")&&!t.startsWith("url("));function k4(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function j4(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=Hy(c,n),h=Hy(u,n);return!d||!h?!1:k4(t)||(i==="spring"||Dp(i))&&a}function Wm(t){t.duration=0,t.type="keyframes"}const Pb=new Set(["opacity","clipPath","filter","transform"]),M4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function E4(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&M4.test(t[n]))return!0;return!1}const T4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),A4=nb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function D4(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return A4()&&i&&(Pb.has(i)||T4.has(i)&&E4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const N4=40;class R4 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var S;super(),this.stop=()=>{var k,j;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(j=this.keyframeResolver)==null||j.cancel()},this.createdAt=ii.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(k,j,E)=>this.onKeyframesResolved(k,j,b,!E),p,y,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var E,O;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ii.now();let x=!0;j4(n,u,d,h)||(x=!1,(dr.instantAnimations||!p)&&(g==null||g(Xd(n,a,i))),n[0]=n[n.length-1],Wm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>N4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&D4(w),k=(O=(E=w.motionValue)==null?void 0:E.owner)==null?void 0:O.current;let j;if(S)try{j=new C4({...w,element:k})}catch{j=new zd(w)}else j=new zd(w);j.finished.then(()=>{this.notifyFinished()}).catch(qi),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),_4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class B4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Uy(this.animations,"duration")}get iterationDuration(){return Uy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Uy(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class L4 extends B4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Hb(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const O4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function z4(t){const n=O4.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Ub(t,n,i=1){const[a,c]=z4(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Jx(d)?parseFloat(d):d}return Cp(c)?Ub(c,n,i+1):c}const $4={type:"spring",stiffness:500,damping:25,restSpeed:10},I4=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),P4={type:"keyframes",duration:.8},H4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},U4=(t,{keyframes:n})=>n.length>2?P4:Rl.has(t)?t.startsWith("scale")?I4(n[1]):$4:H4;function Vb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Vb(i,t):i}const V4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Y4(t){for(const n in t)if(!V4.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-Si(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};Y4(h)||Object.assign(g,U4(t,g)),g.duration&&(g.duration=Si(g.duration)),g.repeatDelay&&(g.repeatDelay=Si(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Wm(g),g.delay===0&&(x=!0)),(dr.instantAnimations||dr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Wm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Xd(g.keyframes,h);if(b!==void 0){gs.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new zd(g):new R4(g)};function Vy(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=Vy(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=Vy(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function $r(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const Yb=new Set(["width","height","top","left","right","bottom",...Nl]),Yy=30,W4=t=>!isNaN(parseFloat(t)),Nc={current:void 0};class F4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ii.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ii.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=W4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),gs.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Nc.current&&Nc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Yy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Yy);return sb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fr(t,n){return new F4(t,n)}const Fm=t=>Array.isArray(t);function X4(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,fr(i))}function G4(t){return Fm(t)?t[t.length-1]||0:t}function q4(t,n){const i=$r(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=G4(u[d]);X4(t,d,h)}}const wo=t=>!!(t&&t.getVelocity);function K4(t){return!!(wo(t)&&t.add)}function Xm(t,n){const i=t.getValue("willChange");if(K4(i))return i.add(n);if(!i&&dr.WillChange){const a=new dr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Q4="framerAppearId",Wb="data-"+Lp(Q4);function Fb(t){return t.props[Wb]}function Z4({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Vb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&Z4(x,w))continue;const j={delay:i,...Np(u||{},w)},E=S.get();if(E!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===E&&!j.velocity){gs.update(()=>S.set(k));continue}let O=!1;if(window.MotionHandoffAnimation){const q=Fb(t);if(q){const U=window.MotionHandoffAnimation(q,w,gs);U!==null&&(j.startTime=U,O=!0)}}Xm(t,w);const N=y!=null?y:t.shouldReduceMotion;S.start(Rp(w,S,k,N&&Yb.has(w)?{type:!1}:j,t,O));const M=S.animation;M&&g.push(M)}if(d){const w=()=>gs.update(()=>{d&&q4(t,d)});g.length?Promise.all(g).then(w):w()}return g}function Gm(t,n,i={}){var p;const a=$r(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return J4(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function J4(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Gm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Hb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function e6(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Gm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Gm(t,n,i);else{const c=typeof n=="function"?$r(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const t6={test:t=>t==="auto",parse:t=>t},Xb=t=>n=>n.test(t),Gb=[Dl,Bt,_a,rr,TS,ES,t6],Wy=t=>Gb.find(Xb(t));function n6(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||tb(t):!0}const s6=new Set(["brightness","contrast","saturate","opacity"]);function o6(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=s6.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const i6=/\b([a-z-]*)\(.*?\)/gu,qm={...aa,getAnimatableNone:t=>{const n=t.match(i6);return n?n.map(o6).join(" "):t}},Km={...aa,getAnimatableNone:t=>{const n=aa.parse(t);return aa.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Fy={...Dl,transform:Math.round},a6={rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:td,scaleX:td,scaleY:td,scaleZ:td,skew:rr,skewX:rr,skewY:rr,distance:Bt,translateX:Bt,translateY:Bt,translateZ:Bt,x:Bt,y:Bt,z:Bt,perspective:Bt,transformPerspective:Bt,opacity:zc,originX:Dy,originY:Dy,originZ:Bt},zp={borderWidth:Bt,borderTopWidth:Bt,borderRightWidth:Bt,borderBottomWidth:Bt,borderLeftWidth:Bt,borderRadius:Bt,borderTopLeftRadius:Bt,borderTopRightRadius:Bt,borderBottomRightRadius:Bt,borderBottomLeftRadius:Bt,width:Bt,maxWidth:Bt,height:Bt,maxHeight:Bt,top:Bt,right:Bt,bottom:Bt,left:Bt,inset:Bt,insetBlock:Bt,insetBlockStart:Bt,insetBlockEnd:Bt,insetInline:Bt,insetInlineStart:Bt,insetInlineEnd:Bt,padding:Bt,paddingTop:Bt,paddingRight:Bt,paddingBottom:Bt,paddingLeft:Bt,paddingBlock:Bt,paddingBlockStart:Bt,paddingBlockEnd:Bt,paddingInline:Bt,paddingInlineStart:Bt,paddingInlineEnd:Bt,margin:Bt,marginTop:Bt,marginRight:Bt,marginBottom:Bt,marginLeft:Bt,marginBlock:Bt,marginBlockStart:Bt,marginBlockEnd:Bt,marginInline:Bt,marginInlineStart:Bt,marginInlineEnd:Bt,fontSize:Bt,backgroundPositionX:Bt,backgroundPositionY:Bt,...a6,zIndex:Fy,fillOpacity:zc,strokeOpacity:zc,numOctaves:Fy},r6={...zp,color:fo,backgroundColor:fo,outlineColor:fo,fill:fo,stroke:fo,borderColor:fo,borderTopColor:fo,borderRightColor:fo,borderBottomColor:fo,borderLeftColor:fo,filter:qm,WebkitFilter:qm,mask:Km,WebkitMask:Km},qb=t=>r6[t],l6=new Set([qm,Km]);function Kb(t,n){let i=qb(t);return l6.has(i)||(i=aa),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const c6=new Set(["auto","none","0"]);function u6(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!c6.has(u)&&Ml(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Kb(i,c)}class d6 extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=Ub(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Yb.has(a)||n.length!==2)return;const[c,u]=n,d=Wy(c),h=Wy(u),p=Ay(c),y=Ay(u);if(p!==y&&ur[a]){this.needsMeasurement=!0;return}if(d!==h)if(Iy(d)&&Iy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ur[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||n6(n[c]))&&a.push(c);a.length&&u6(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ur[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ur[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const Qb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function Cd(t){return eb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=_b(queueMicrotask,!1),oa={x:!1,y:!1};function Zb(){return oa.x||oa.y}function f6(t){return t==="x"||t==="y"?oa[t]?null:(oa[t]=!0,()=>{oa[t]=!1}):oa.x||oa.y?null:(oa.x=oa.y=!0,()=>{oa.x=oa.y=!1})}function Jb(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function h6(t){return!(t.pointerType==="touch"||Zb())}function m6(t,n,i={}){const[a,c,u]=Jb(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",S)},x=j=>{y&&(y(j),y=void 0),g()},b=j=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(j))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=j=>{if(j.pointerType!=="touch"){if(h){p=!0;return}x(j)}},k=j=>{if(!h6(j))return;p=!1;const E=n(d,j);typeof E=="function"&&(y=E,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const e5=(t,n)=>n?t===n?!0:e5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,p6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _6(t){return p6.has(t.tagName)||t.isContentEditable===!0}const g6=new Set(["INPUT","SELECT","TEXTAREA"]);function y6(t){return g6.has(t.tagName)||t.isContentEditable===!0}const kd=new WeakSet;function Xy(t){return n=>{n.key==="Enter"&&t(n)}}function am(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const x6=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=Xy(()=>{if(kd.has(i))return;am(i,"down");const c=Xy(()=>{am(i,"up")}),u=()=>am(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function Gy(t){return Pp(t)&&!Zb()}const qy=new WeakSet;function b6(t,n,i={}){const[a,c,u]=Jb(t,i),d=h=>{const p=h.currentTarget;if(!Gy(h)||qy.has(h))return;kd.add(p),i.stopPropagation&&qy.add(h);const y=n(p,h),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),kd.has(p)&&kd.delete(p),Gy(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||e5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Cd(h)&&(h.addEventListener("focus",y=>x6(y,c)),!_6(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Gd(t){return eb(t)&&"ownerSVGElement"in t}const jd=new WeakMap;let lr;const t5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Gd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],v6=t5("inline","width","offsetWidth"),w6=t5("block","height","offsetHeight");function S6({target:t,borderBoxSize:n}){var i;(i=jd.get(t))==null||i.forEach(a=>{a(t,{get width(){return v6(t,n)},get height(){return w6(t,n)}})})}function C6(t){t.forEach(S6)}function k6(){typeof ResizeObserver>"u"||(lr=new ResizeObserver(C6))}function j6(t,n){lr||k6();const i=$p(t);return i.forEach(a=>{let c=jd.get(a);c||(c=new Set,jd.set(a,c)),c.add(n),lr==null||lr.observe(a)}),()=>{i.forEach(a=>{const c=jd.get(a);c==null||c.delete(n),c!=null&&c.size||lr==null||lr.unobserve(a)})}}const Md=new Set;let vl;function M6(){vl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Md.forEach(n=>n(t))},window.addEventListener("resize",vl)}function E6(t){return Md.add(t),vl||M6(),()=>{Md.delete(t),!Md.size&&typeof vl=="function"&&(window.removeEventListener("resize",vl),vl=void 0)}}function Ky(t,n){return typeof t=="function"?E6(t):j6(t,n)}function n5(t){return Gd(t)&&t.tagName==="svg"}function T6(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Eb(c,u,d);return n?h(a):h}const A6=[...Gb,fo,aa],D6=t=>A6.find(Xb(t)),Qy=()=>({translate:0,scale:1,origin:0,originPoint:0}),wl=()=>({x:Qy(),y:Qy()}),Zy=()=>({min:0,max:0}),uo=()=>({x:Zy(),y:Zy()}),Ic=new WeakMap;function qd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Pc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Kd(t){return qd(t.animate)||Up.some(n=>Pc(t[n]))}function s5(t){return!!(Kd(t)||t.variants)}function N6(t,n,i){for(const a in n){const c=n[a],u=i[a];if(wo(c))t.addValue(a,c);else if(wo(u))t.addValue(a,fr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,fr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Qm={current:null},o5={current:!1},R6=typeof window<"u";function B6(){if(o5.current=!0,!!R6)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Qm.current=t.matches;t.addEventListener("change",n),n()}else Qm.current=!1}const Jy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let $d={};function i5(t){$d=t}function L6(){return $d}class a5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ii.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,gs.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Kd(i),this.isVariantNode=s5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&wo(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ic.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(o5.current||B6(),this.shouldReduceMotion=Qm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),za(this.notifyUpdate),za(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Pb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new $b({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:Si(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Rl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&gs.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in $d){const i=$d[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):uo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<Jy.length;a++){const c=Jy[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=N6(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=fr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Jx(a)||tb(a))?a=parseFloat(a):!D6(a)&&aa.test(i)&&(a=Kb(n,i)),this.setBaseTarget(n,wo(a)?a.get():a)),wo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!wo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class r5 extends a5{constructor(){super(...arguments),this.KeyframeResolver=d6}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;wo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class hr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function l5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function O6({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function z6(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function rm(t){return t===void 0||t===1}function Zm({scale:t,scaleX:n,scaleY:i}){return!rm(t)||!rm(n)||!rm(i)}function Nr(t){return Zm(t)||c5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function c5(t){return e1(t.x)||e1(t.y)}function e1(t){return t&&t!=="0%"}function Id(t,n,i){const a=t-i,c=n*a;return i+c}function t1(t,n,i,a,c){return c!==void 0&&(t=Id(t,c,a)),Id(t,i,a)+n}function Jm(t,n=0,i=1,a,c){t.min=t1(t.min,n,i,a,c),t.max=t1(t.max,n,i,a,c)}function u5(t,{x:n,y:i}){Jm(t.x,n.translate,n.scale,n.originPoint),Jm(t.y,i.translate,i.scale,i.originPoint)}const n1=.999999999999,s1=1.0000000000001;function $6(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(pa(t.x,-u.scroll.offset.x),pa(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,u5(t,d)),a&&Nr(u.latestValues)&&Ed(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<s1&&n.x>n1&&(n.x=1),n.y<s1&&n.y>n1&&(n.y=1)}function pa(t,n){t.min+=n,t.max+=n}function o1(t,n,i,a,c=.5){const u=js(t.min,t.max,c);Jm(t,n,i,u,a)}function i1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function Ed(t,n,i){const a=i!=null?i:t;o1(t.x,i1(n.x,a.x),n.scaleX,n.scale,n.originX),o1(t.y,i1(n.y,a.y),n.scaleY,n.scale,n.originY)}function d5(t,n){return l5(z6(t.getBoundingClientRect(),n))}function I6(t,n,i){const a=d5(t,i),{scroll:c}=n;return c&&(pa(a.x,c.offset.x),pa(a.y,c.offset.y)),a}const P6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},H6=Nl.length;function U6(t,n,i){let a="",c=!0;for(let u=0;u<H6;u++){const d=Nl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=Qb(h,zp[d]);if(!p){c=!1;const g=P6[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Rl.has(p)){d=!0;continue}else if(yb(p)){c[p]=y;continue}else{const g=Qb(y,zp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=U6(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function f5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function a1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const _c={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Bt.test(t))t=parseFloat(t);else return t;const i=a1(t,n.target.x),a=a1(t,n.target.y);return`${i}% ${a}%`}},V6={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=aa.parse(t);if(c.length>5)return a;const u=aa.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=js(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},ep={borderRadius:{..._c,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_c,borderTopRightRadius:_c,borderBottomLeftRadius:_c,borderBottomRightRadius:_c,boxShadow:V6};function h5(t,{layout:n,layoutId:i}){return Rl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!ep[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(wo(a[h])||c&&wo(c[h])||h5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Y6(t){return window.getComputedStyle(t)}class m5 extends r5{constructor(){super(...arguments),this.type="html",this.renderInstance=f5}readValueFromInstance(n,i){var a;if(Rl.has(i))return(a=this.projection)!=null&&a.isProjecting?Pm(i):d4(n,i);{const c=Y6(n),u=(yb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return d5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function W6(t,n){return t in n}class F6 extends a5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(W6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return uo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const X6={offset:"stroke-dashoffset",array:"stroke-dasharray"},G6={offset:"strokeDashoffset",array:"strokeDasharray"};function q6(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?X6:G6;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const K6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function p5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var w,S;if(Vp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of K6)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&q6(x,c,u,d,!1)}const _5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),g5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Q6(t,n,i,a){f5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(_5.has(c)?c:Lp(c),n.attrs[c])}function y5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(wo(t[c])||wo(n[c])){const u=Nl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class x5 extends r5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=uo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Rl.has(i)){const a=qb(i);return a&&a.default||0}return i=_5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return y5(n,i,a)}build(n,i,a){p5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Q6(n,i,a,c)}mount(n){this.isSVGTag=g5(n.tagName),super.mount(n)}}const Z6=Up.length;function b5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?b5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Z6;i++){const a=Up[i],c=t.props[a];(Pc(c)||c===!1)&&(n[a]=c)}return n}function v5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const J6=[...Hp].reverse(),eC=Hp.length;function tC(t){return n=>Promise.all(n.map(({animation:i,options:a})=>e6(t,i,a)))}function nC(t){let n=tC(t),i=r1(),a=!0,c=!1;const u=y=>(g,x)=>{var w;const b=$r(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...j}=b;g={...g,...j,...k}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=b5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let E=0;E<eC;E++){const O=J6[E],N=i[O],M=g[O]!==void 0?g[O]:x[O],q=Pc(M),U=O===y?N.isActive:null;U===!1&&(k=E);let X=M===x[O]&&M!==g[O]&&q;if(X&&(a||c)&&t.manuallyAnimateOnMount&&(X=!1),N.protectedKeys={...S},!N.isActive&&U===null||!M&&!N.prevProp||qd(M)||typeof M=="boolean")continue;if(O==="exit"&&N.isActive&&U!==!0){N.prevResolvedValues&&(S={...S,...N.prevResolvedValues});continue}const Z=sC(N.prevProp,M);let he=Z||O===y&&N.isActive&&!X&&q||E>k&&q,me=!1;const pe=Array.isArray(M)?M:[M];let Se=pe.reduce(u(O),{});U===!1&&(Se={});const{prevResolvedValues:Le={}}=N,ee={...Le,...Se},le=W=>{he=!0,w.has(W)&&(me=!0,w.delete(W)),N.needsAnimating[W]=!0;const ge=t.getValue(W);ge&&(ge.liveStyle=!1)};for(const W in ee){const ge=Se[W],De=Le[W];if(S.hasOwnProperty(W))continue;let P=!1;Fm(ge)&&Fm(De)?P=!v5(ge,De):P=ge!==De,P?ge!=null?le(W):w.add(W):ge!==void 0&&w.has(W)?le(W):N.protectedKeys[W]=!0}N.prevProp=M,N.prevResolvedValues=Se,N.isActive&&(S={...S,...Se}),(a||c)&&t.blockInitialAnimation&&(he=!1);const z=X&&Z;he&&(!z||me)&&b.push(...pe.map(W=>{const ge={type:O};if(typeof W=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:De}=t,P=$r(De,W);if(De.enteringChildren&&P){const{delayChildren:ue}=P.transition||{};ge.delay=Hb(De.enteringChildren,t,ue)}}return{animation:W,options:ge}}))}if(w.size){const E={};if(typeof g.initial!="boolean"){const O=$r(t,Array.isArray(g.initial)?g.initial[0]:g.initial);O&&O.transition&&(E.transition=O.transition)}w.forEach(O=>{const N=t.getBaseTarget(O),M=t.getValue(O);M&&(M.liveStyle=!0),E[O]=N!=null?N:null}),b.push({animation:E})}let j=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(j=!1),a=!1,c=!1,j?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=r1(),c=!0}}}function sC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!v5(n,t):!1}function Er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function r1(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}function tp(t,n){t.min=n.min,t.max=n.max}function sa(t,n){tp(t.x,n.x),tp(t.y,n.y)}function l1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const w5=1e-4,oC=1-w5,iC=1+w5,S5=.01,aC=0-S5,rC=0+S5;function ai(t){return t.max-t.min}function lC(t,n,i){return Math.abs(t-n)<=i}function c1(t,n,i,a=.5){t.origin=a,t.originPoint=js(n.min,n.max,t.origin),t.scale=ai(i)/ai(n),t.translate=js(i.min,i.max,t.origin)-t.originPoint,(t.scale>=oC&&t.scale<=iC||isNaN(t.scale))&&(t.scale=1),(t.translate>=aC&&t.translate<=rC||isNaN(t.translate))&&(t.translate=0)}function Rc(t,n,i,a){c1(t.x,n.x,i.x,a?a.originX:void 0),c1(t.y,n.y,i.y,a?a.originY:void 0)}function u1(t,n,i,a=0){const c=a?js(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+ai(n)}function cC(t,n,i,a){u1(t.x,n.x,i.x,a==null?void 0:a.x),u1(t.y,n.y,i.y,a==null?void 0:a.y)}function d1(t,n,i,a=0){const c=a?js(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+ai(n)}function Pd(t,n,i,a){d1(t.x,n.x,i.x,a==null?void 0:a.x),d1(t.y,n.y,i.y,a==null?void 0:a.y)}function f1(t,n,i,a,c){return t-=n,t=Id(t,1/i,a),c!==void 0&&(t=Id(t,1/c,a)),t}function uC(t,n=0,i=1,a=.5,c,u=t,d=t){if(_a.test(n)&&(n=parseFloat(n),n=js(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=js(u.min,u.max,a);t===u&&(h-=n),t.min=f1(t.min,n,i,h,c),t.max=f1(t.max,n,i,h,c)}function h1(t,n,[i,a,c],u,d){uC(t,n[i],n[a],n[c],n.scale,u,d)}const dC=["x","scaleX","originX"],fC=["y","scaleY","originY"];function m1(t,n,i,a){h1(t.x,n,dC,i?i.x:void 0,a?a.x:void 0),h1(t.y,n,fC,i?i.y:void 0,a?a.y:void 0)}function p1(t){return t.translate===0&&t.scale===1}function C5(t){return p1(t.x)&&p1(t.y)}function _1(t,n){return t.min===n.min&&t.max===n.max}function hC(t,n){return _1(t.x,n.x)&&_1(t.y,n.y)}function g1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function k5(t,n){return g1(t.x,n.x)&&g1(t.y,n.y)}function y1(t){return ai(t.x)/ai(t.y)}function x1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function ma(t){return[t("x"),t("y")]}function mC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const j5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],pC=j5.length,b1=t=>typeof t=="string"?parseFloat(t):t,v1=t=>typeof t=="number"||Bt.test(t);function _C(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=js(0,(d=i.opacity)!=null?d:1,gC(a)),t.opacityExit=js((h=n.opacity)!=null?h:1,0,yC(a))):u&&(t.opacity=js((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<pC;g++){const x=j5[g];let b=w1(n,x),w=w1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||v1(b)===v1(w)?(t[x]=Math.max(js(b1(b),b1(w),a),0),(_a.test(w)||_a.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=js(n.rotate||0,i.rotate||0,a))}function w1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const gC=M5(0,.5,ub),yC=M5(.5,.95,qi);function M5(t,n,i){return a=>a<t?0:a>n?1:i(jl(t,n,a))}function E5(t,n,i){const a=wo(t)?t:fr(t);return a.start(Rp("",a,n,i)),a.animation}function Hc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const xC=(t,n)=>t.depth-n.depth;class bC{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){kl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(xC),this.isDirty=!1,this.children.forEach(n)}}function vC(t,n){const i=ii.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(za(a),t(u-n))};return gs.setup(a,!0),()=>za(a)}function Td(t){return wo(t)?t.get():t}class wC{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(kl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(kl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Ad={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lm=["","X","Y","Z"],SC=1e3;let CC=0;function cm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function T5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Fb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",gs,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&T5(a)}function A5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=CC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(MC),this.nodes.forEach(RC),this.nodes.forEach(BC),this.nodes.forEach(EC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new bC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Gd(d)&&!n5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;gs.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=vC(b,250),Ad.hasAnimatedSinceResize&&(Ad.hasAnimatedSinceResize=!1,this.nodes.forEach(k1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||IC,{onLayoutAnimationStart:k,onLayoutAnimationComplete:j}=y.getProps(),E=!this.targetLayout||!k5(this.targetLayout,w),O=!x&&b;if(this.options.layoutRoot||this.resumeFrom||O||x&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Np(S,"layout"),onPlay:k,onComplete:j};(y.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(g,O)}else x||k1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),za(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&T5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(AC),this.nodes.forEach(S1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(C1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(DC),this.nodes.forEach(NC),this.nodes.forEach(kC),this.nodes.forEach(jC)):this.nodes.forEach(C1),this.clearAllSnapshots();const h=ii.now();Wo.delta=ga(0,1e3/60,h-Wo.timestamp),Wo.timestamp=h,Wo.isProcessing=!0,em.update.process(Wo),em.preRender.process(Wo),em.render.process(Wo),Wo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TC),this.sharedNodes.forEach(OC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,gs.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){gs.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ai(this.snapshot.measuredBox.x)&&!ai(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=uo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!C5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||Nr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),PC(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return uo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(HC))){const{scroll:g}=this.root;g&&(pa(h.x,g.offset.x),pa(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=uo();if(sa(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&sa(h,d),pa(h.x,x.offset.x),pa(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||uo();sa(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(pa(y.x,-w.scroll.offset.x),pa(y.y,-w.scroll.offset.y)),Nr(w.latestValues)&&Ed(y,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return Nr(this.latestValues)&&Ed(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=uo();sa(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!Nr(g.latestValues))continue;let x;g.instance&&(Zm(g.latestValues)&&g.updateSnapshot(),x=uo(),sa(x,g.measurePageBox())),m1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return Nr(this.latestValues)&&m1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Wo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=uo(),this.targetWithTransforms=uo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sa(this.target,this.layout.layoutBox),u5(this.target,this.targetDelta)):sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zm(this.parent.latestValues)||c5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=uo(),this.relativeTargetOrigin=uo(),Pd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),sa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Wo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;sa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;$6(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=uo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(l1(this.prevProjectionDelta.x,this.projectionDelta.x),l1(this.prevProjectionDelta.y,this.projectionDelta.y)),Rc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!x1(this.projectionDelta.x,this.prevProjectionDelta.x)||!x1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wl(),this.projectionDelta=wl(),this.projectionDeltaWithTransform=wl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=wl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=uo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,j=this.getStack(),E=!j||j.members.length<=1,O=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some($C));this.animationProgress=0;let N;this.mixTargetDelta=M=>{const q=M/1e3;j1(x.x,d.x,q),j1(x.y,d.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),zC(this.relativeTarget,this.relativeTargetOrigin,b,q),N&&hC(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=uo()),sa(N,this.relativeTarget)),k&&(this.animationValues=g,_C(g,y,this.latestValues,q,O,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(za(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=gs.update(()=>{Ad.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fr(0)),this.motionValue.jump(0,!1),this.currentAnimation=E5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(SC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&D5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||uo();const x=ai(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=ai(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}sa(h,p),Ed(h,g),Rc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new wC),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&cm("z",d,y,this.animationValues);for(let g=0;g<lm.length;g++)cm(`rotate${lm[g]}`,d,y,this.animationValues),cm(`skew${lm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Td(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Td(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Nr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=mC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(k=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const j in ep){if(g[j]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:N}=ep[j],M=x==="none"?g[j]:E(g[j],y);if(O){const q=O.length;for(let U=0;U<q;U++)d[O[U]]=M}else N?this.options.visualElement.renderState.vars[j]=M:d[j]=M}this.options.layoutId&&(d.pointerEvents=y===this?Td(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(S1),this.root.sharedNodes.clear()}}}function kC(t){t.updateLayout()}function jC(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=ai(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";tp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else D5(u,n.layoutBox,a)&&ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=ai(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=wl();Rc(h,a,n.layoutBox);const p=wl();d?Rc(p,t.applyTransform(c,!0),n.measuredBox):Rc(p,a,n.layoutBox);const y=!C5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=uo();Pd(k,n.layoutBox,b.layoutBox,S);const j=uo();Pd(j,a,w.layoutBox,S),k5(k,j)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=j,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function MC(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function EC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function TC(t){t.clearSnapshot()}function S1(t){t.clearMeasurements()}function AC(t){t.isLayoutDirty=!0,t.updateLayout()}function C1(t){t.isLayoutDirty=!1}function DC(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function NC(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function k1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function RC(t){t.resolveTargetDelta()}function BC(t){t.calcProjection()}function LC(t){t.resetSkewAndRotation()}function OC(t){t.removeLeadSnapshot()}function j1(t,n,i){t.translate=js(n.translate,0,i),t.scale=js(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function M1(t,n,i,a){t.min=js(n.min,i.min,a),t.max=js(n.max,i.max,a)}function zC(t,n,i,a){M1(t.x,n.x,i.x,a),M1(t.y,n.y,i.y,a)}function $C(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const IC={duration:.45,ease:[.4,0,.1,1]},E1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),T1=E1("applewebkit/")&&!E1("chrome/")?Math.round:qi;function A1(t){t.min=T1(t.min),t.max=T1(t.max)}function PC(t){A1(t.x),A1(t.y)}function D5(t,n,i){return t==="position"||t==="preserve-aspect"&&!lC(y1(n),y1(i),.2)}function HC(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const UC=A5({attachResizeListener:(t,n)=>Hc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),um={current:void 0},N5=A5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!um.current){const t=new UC({});t.mount(window),t.setOptions({layoutScroll:!0}),um.current=t}return um.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Qd=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function D1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function VC(...t){return n=>{let i=!1;const a=t.map(c=>{const u=D1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():D1(t[c],null)}}}}function YC(...t){return _.useCallback(VC(...t),t)}class WC extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Cd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Cd(a)&&a.offsetWidth||0,u=Cd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function FC({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Qd),g=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=YC(h,g);return _.useInsertionEffect(()=>{const{width:S,height:k,top:j,left:E,right:O,bottom:N}=p.current;if(n||u===!1||!h.current||!S||!k)return;const M=i==="left"?`left: ${E}`:`right: ${O}`,q=a==="bottom"?`bottom: ${N}`:`top: ${j}`;h.current.dataset.motionPopId=d;const U=document.createElement("style");y&&(U.nonce=y);const X=c!=null?c:document.head;return X.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${M}px !important;
            ${q}px !important;
          }
        `),()=>{var Z;(Z=h.current)==null||Z.removeAttribute("data-motion-pop-id"),X.contains(U)&&X.removeChild(U)}},[n]),l.jsx(WC,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const XC=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Vc(GC),x=_.useId();let b=!0,w=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const k of g.values())if(!k)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&b&&(w={...w}),_.useMemo(()=>{g.forEach((S,k)=>g.set(k,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(FC,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(Fd.Provider,{value:w,children:t})};function GC(){return new Map}function R5(t=!0){const n=_.useContext(Fd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const nd=t=>t.key||"";function N1(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Zd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=R5(d),b=_.useMemo(()=>N1(t),[t]),w=d&&!g?[]:b.map(nd),S=_.useRef(!0),k=_.useRef(b),j=Vc(()=>new Map),E=_.useRef(new Set),[O,N]=_.useState(b),[M,q]=_.useState(b);yp(()=>{S.current=!1,k.current=b;for(let Z=0;Z<M.length;Z++){const he=nd(M[Z]);w.includes(he)?(j.delete(he),E.current.delete(he)):j.get(he)!==!0&&j.set(he,!1)}},[M,w.length,w.join("-")]);const U=[];if(b!==O){let Z=[...b];for(let he=0;he<M.length;he++){const me=M[he],pe=nd(me);w.includes(pe)||(Z.splice(he,0,me),U.push(me))}return u==="wait"&&U.length&&(Z=U),q(N1(Z)),N(b),null}const{forceRender:X}=_.useContext(gp);return l.jsx(l.Fragment,{children:M.map(Z=>{const he=nd(Z),me=d&&!g?!1:b===M||w.includes(he),pe=()=>{if(E.current.has(he))return;if(j.has(he))E.current.add(he),j.set(he,!0);else return;let Se=!0;j.forEach(Le=>{Le||(Se=!1)}),Se&&(X==null||X(),q(k.current),d&&(x==null||x()),a&&a())};return l.jsx(XC,{isPresent:me,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:me?void 0:pe,anchorX:h,anchorY:p,children:Z},he)})})},B5=_.createContext({strict:!1}),R1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let B1=!1;function qC(){if(B1)return;const t={};for(const n in R1)t[n]={isEnabled:i=>R1[n].some(a=>!!i[a])};i5(t),B1=!0}function L5(){return qC(),L6()}function KC(t){const n=L5();for(const i in t)n[i]={...n[i],...t[i]};i5(n)}const QC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Hd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||QC.has(t)}let O5=t=>!Hd(t);function ZC(t){typeof t=="function"&&(O5=n=>n.startsWith("on")?!Hd(n):t(n))}try{ZC(require("@emotion/is-prop-valid").default)}catch{}function JC(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||wo(t[c])||(O5(c)||i===!0&&Hd(c)||!n&&!Hd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Jd=_.createContext({});function e3(t,n){if(Kd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Pc(i)?i:void 0,animate:Pc(a)?a:void 0}}return t.inherit!==!1?n:{}}function t3(t){const{initial:n,animate:i}=e3(t,_.useContext(Jd));return _.useMemo(()=>({initial:n,animate:i}),[L1(n),L1(i)])}function L1(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function z5(t,n,i){for(const a in n)!wo(n[a])&&!h5(a,i)&&(t[a]=n[a])}function n3({transformTemplate:t},n){return _.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function s3(t,n){const i=t.style||{},a={};return z5(a,i,t),Object.assign(a,n3(t,n)),a}function o3(t,n){const i={},a=s3(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const $5=()=>({...Wp(),attrs:{}});function i3(t,n,i,a){const c=_.useMemo(()=>{const u=$5();return p5(u,n,g5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};z5(u,t.style,t),c.style={...u,...c.style}}return c}const a3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(a3.indexOf(t)>-1||/[A-Z]/u.test(t))}function r3(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?i3:o3)(n,a,c,t),y=JC(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>wo(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function l3({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:c3(i,a,c,t),renderState:n()}}function c3(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=Td(u[b]);let{initial:d,animate:h}=t;const p=Kd(t),y=s5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!qd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:k,transition:j,...E}=S;for(const O in E){let N=E[O];if(Array.isArray(N)){const M=g?N.length-1:0;N=N[M]}N!==null&&(c[O]=N)}for(const O in k)c[O]=k[O]}}}return c}const I5=t=>(n,i)=>{const a=_.useContext(Jd),c=_.useContext(Fd),u=()=>l3(t,n,a,c);return i?u():Vc(u)},u3=I5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),d3=I5({scrapeMotionValuesFromProps:y5,createRenderState:$5}),f3=Symbol.for("motionComponentSymbol");function h3(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const P5=_.createContext({});function xl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function m3(t,n,i,a,c,u){var N,M;const{visualElement:d}=_.useContext(Jd),h=_.useContext(B5),p=_.useContext(Fd),y=_.useContext(Qd),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),w=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=_.useContext(P5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&p3(b.current,i,c,k);const j=_.useRef(!1);_.useInsertionEffect(()=>{S&&j.current&&S.update(i,p)});const E=i[Wb],O=_.useRef(!!E&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,E))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,E)));return yp(()=>{w.current=!0,S&&(j.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),O.current&&S.animationState&&S.animationState.animateChanges())}),_.useEffect(()=>{S&&(!O.current&&S.animationState&&S.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,E)}),O.current=!1),S.enteringChildren=void 0)}),S}function p3(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:H5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&xl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function H5(t){if(t)return t.options.allowProjection!==!1?t.projection:H5(t.parent)}function dm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&KC(a);const u=i?i==="svg":Fp(t),d=u?d3:u3;function h(x,b){let w;const S={..._.useContext(Qd),...x,layoutId:_3(x)},{isStatic:k}=S,j=t3(x),E=d(x,k);if(!k&&typeof window<"u"){g3();const O=y3(S);w=O.MeasureLayout,j.visualElement=m3(t,E,S,c,O.ProjectionNode,u)}return l.jsxs(Jd.Provider,{value:j,children:[w&&j.visualElement?l.jsx(w,{visualElement:j.visualElement,...S}):null,r3(t,x,h3(E,j.visualElement,b),E,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[f3]=t,p}function _3({layoutId:t}){const n=_.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function g3(t,n){_.useContext(B5).strict}function y3(t){const n=L5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function x3(t,n){if(typeof Proxy>"u")return dm;const i=new Map,a=(u,d)=>dm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,dm(d,void 0,t,n)),i.get(d))})}const b3=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new x5(n):new m5(n,{allowProjection:t!==_.Fragment})};class v3 extends hr{constructor(n){super(n),n.animationState||(n.animationState=nC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();qd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let w3=0;class S3 extends hr{constructor(){super(...arguments),this.id=w3++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=$r(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const C3={animation:{Feature:v3},exit:{Feature:S3}};function Xc(t){return{point:{x:t.pageX,y:t.pageY}}}const k3=t=>n=>Pp(n)&&t(n,Xc(n));function Bc(t,n,i,a){return Hc(t,n,k3(i),a)}const U5=({current:t})=>t?t.ownerDocument.defaultView:null,O1=(t,n)=>Math.abs(t-n);function j3(t,n){const i=O1(t.x,n.x),a=O1(t.y,n.y);return Math.sqrt(i**2+a**2)}const z1=new Set(["auto","scroll"]);class V5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=sd(this.lastRawMoveEventInfo,this.transformPagePoint));const w=fm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=j3(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:j}=w,{timestamp:E}=Wo;this.history.push({...j,timestamp:E});const{onStart:O,onMove:N}=this.handlers;S||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=sd(S,this.transformPagePoint),gs.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:j,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=fm(w.type==="pointercancel"?this.lastMoveEventInfo:sd(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,O),j&&j(w,O)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Xc(n),y=sd(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Wo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,fm(y,this.history)),this.removeListeners=Yc(Bc(this.contextWindow,"pointermove",this.handlePointerMove),Bc(this.contextWindow,"pointerup",this.handlePointerUp),Bc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(z1.has(a.overflowX)||z1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),gs.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),za(this.updatePoint)}}function sd(t,n){return n?{point:n(t.point)}:t}function $1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function fm({point:t},n){return{point:t,delta:$1(t,Y5(n)),offset:$1(t,M3(n)),velocity:E3(n,.1)}}function M3(t){return t[0]}function Y5(t){return t[t.length-1]}function E3(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=Y5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>Si(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>Si(n)*2&&(a=t[1]);const u=Gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function T3(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?js(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?js(i,t,a.max):Math.min(t,i)),t}function I1(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function A3(t,{top:n,left:i,bottom:a,right:c}){return{x:I1(t.x,i,c),y:I1(t.y,n,a)}}function P1(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function D3(t,n){return{x:P1(t.x,n.x),y:P1(t.y,n.y)}}function N3(t,n){let i=.5;const a=ai(t),c=ai(n);return c>a?i=jl(n.min,n.max-a,t.min):a>c&&(i=jl(t.min,t.max-c,n.min)),ga(0,1,i)}function R3(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const np=.35;function B3(t=np){return t===!1?t=0:t===!0&&(t=np),{x:H1(t,"left","right"),y:H1(t,"top","bottom")}}function H1(t,n,i){return{min:U1(t,n),max:U1(t,i)}}function U1(t,n){return typeof t=="number"?t:t[n]||0}const L3=new WeakMap;class O3{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=uo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Xc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=f6(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ma(E=>{let O=this.getAxisMotionValue(E).get()||0;if(_a.test(O)){const{projection:N}=this.visualElement;if(N&&N.layout){const M=N.layout.layoutBox[E];M&&(O=ai(M)*(parseFloat(O)/100))}}this.originPoint[E]=O}),k&&gs.update(()=>k(x,b),!1,!0),Xm(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:j}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=b;if(S&&this.currentDirection===null){this.currentDirection=$3(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),j&&gs.update(()=>j(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new V5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:U5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&gs.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!od(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=T3(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&xl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=A3(a.layoutBox,n):this.constraints=!1,this.elastic=B3(i),c!==this.constraints&&!xl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ma(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=R3(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!xl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=I6(a,c.root,this.visualElement.getTransformPagePoint());let d=D3(c.layout.layoutBox,u);if(i){const h=i(O6(d));this.hasMutatedConstraints=!!h,h&&(d=l5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=ma(g=>{if(!od(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Xm(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){ma(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ma(i=>{const{drag:a}=this.getProps();if(!od(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-js(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!xl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ma(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=N3({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ma(d=>{if(!od(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(js(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;L3.set(this.visualElement,this);const n=this.visualElement.current,i=Bc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&y6(b);g&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();xl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=z3(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),gs.read(c);const h=Hc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(ma(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=np,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function V1(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function z3(t,n,i){const a=Ky(t,V1(i)),c=Ky(n,V1(i));return()=>{a(),c()}}function od(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function $3(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class I3 extends hr{constructor(n){super(n),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new O3(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hm=t=>(n,i)=>{t&&gs.update(()=>t(n,i),!1,!0)};class P3 extends hr{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(n){this.session=new V5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:U5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:hm(n),onStart:hm(i),onMove:hm(a),onEnd:(u,d)=>{delete this.session,c&&gs.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Bc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let mm=!1;class H3 extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),mm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ad.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),mm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||gs.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;mm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function W5(t){const[n,i]=R5(),a=_.useContext(gp);return l.jsx(H3,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(P5),isPresent:n,safeToRemove:i})}const U3={pan:{Feature:P3},drag:{Feature:I3,ProjectionNode:N5,MeasureLayout:W5}};function Y1(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&gs.postRender(()=>u(n,Xc(n)))}class V3 extends hr{mount(){const{current:n}=this.node;n&&(this.unmount=m6(n,(i,a)=>(Y1(this.node,a,"Start"),c=>Y1(this.node,c,"End"))))}unmount(){}}class Y3 extends hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yc(Hc(this.node.current,"focus",()=>this.onFocus()),Hc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function W1(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&gs.postRender(()=>u(n,Xc(n)))}class W3 extends hr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=b6(n,(c,u)=>(W1(this.node,u,"Start"),(d,{success:h})=>W1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const sp=new WeakMap,pm=new WeakMap,F3=t=>{const n=sp.get(t.target);n&&n(t)},X3=t=>{t.forEach(F3)};function G3({root:t,...n}){const i=t||document;pm.has(i)||pm.set(i,{});const a=pm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(X3,{root:t,...n})),a[c]}function q3(t,n,i){const a=G3(n);return sp.set(t,i),a.observe(t),()=>{sp.delete(t),a.unobserve(t)}}const K3={some:0,all:1};class Q3 extends hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:K3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(y)};this.stopObserver=q3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Z3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Z3({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const J3={inView:{Feature:Q3},tap:{Feature:W3},focus:{Feature:Y3},hover:{Feature:V3}},ek={layout:{ProjectionNode:N5,MeasureLayout:W5}},tk={...C3,...J3,...U3,...ek},ri=x3(tk,b3);function op(t){const n=Vc(()=>fr(t)),{isStatic:i}=_.useContext(Qd);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function F5(t,n){const i=op(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>gs.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),za(a)}}),i}function nk(t){Nc.current=[],t();const n=F5(Nc.current,t);return Nc.current=void 0,n}function id(t,n,i,a){if(typeof t=="function")return nk(t);const u=typeof n=="function"?n:T6(n,i,a),d=Array.isArray(t)?F1(t,u):F1([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function F1(t,n){const i=Vc(()=>[]);return F5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function X5(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function sk(t,n,i){return t*(n+1)}function X1(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function ok(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(kl(t,c),a--)}}function ik(t,n,i,a,c,u){ok(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:js(c,u,a[d]),easing:mb(i,d)})}function ak(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function rk(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const lk="easeInOut";function ck(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,X1(x,S.at,g,y));continue}let[k,j,E={}]=S;E.at!==void 0&&(x=X1(x,E.at,g,y));let O=0;const N=(M,q,U,X=0,Z=0)=>{const he=uk(M),{delay:me=0,times:pe=Ab(he),type:Se=n.type||"keyframes",repeat:Le,repeatType:ee,repeatDelay:le=0,...z}=q;let{ease:ce=n.ease||"easeOut",duration:W}=q;const ge=typeof me=="function"?me(X,Z):me,De=he.length,P=Dp(Se)?Se:c==null?void 0:c[Se||"keyframes"];if(De<=2&&P){let de=100;if(De===2&&hk(he)){const Je=he[1]-he[0];de=Math.abs(Je)}const Me={...n,...z};W!==void 0&&(Me.duration=Si(W));const Ye=jb(Me,de,P);ce=Ye.ease,W=Ye.duration}W!=null||(W=u);const ue=x+ge;pe.length===1&&pe[0]===0&&(pe[1]=1);const ne=pe.length-he.length;if(ne>0&&Tb(pe,ne),he.length===1&&he.unshift(null),Le){W=sk(W,Le);const de=[...he],Me=[...pe];ce=Array.isArray(ce)?[...ce]:[ce];const Ye=[...ce];for(let Je=0;Je<Le;Je++){he.push(...de);for(let He=0;He<de.length;He++)pe.push(Me[He]+(Je+1)),ce.push(He===0?"linear":mb(Ye,He-1))}ak(pe,Le)}const ke=ue+W;ik(U,he,ce,pe,ue,ke),O=Math.max(ge+W,O),b=Math.max(ke,b)};if(wo(k)){const M=G1(k,h);N(j,E,q1("default",M))}else{const M=X5(k,j,a,p),q=M.length;for(let U=0;U<q;U++){j=j,E=E;const X=M[U],Z=G1(X,h);for(const he in j)N(j[he],dk(E,he),q1(he,Z),U,q)}}g=x,x+=O}return h.forEach((w,S)=>{for(const k in w){const j=w[k];j.sort(rk);const E=[],O=[],N=[];for(let X=0;X<j.length;X++){const{at:Z,value:he,easing:me}=j[X];E.push(he),O.push(jl(0,b,Z)),N.push(me||"easeOut")}O[0]!==0&&(O.unshift(0),E.unshift(E[0]),N.unshift(lk)),O[O.length-1]!==1&&(O.push(1),E.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const M=d.get(S);M.keyframes[k]=E;const{type:q,...U}=n;M.transition[k]={...U,duration:b,ease:N,times:O,...i}}}),d}function G1(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function q1(t,n){return n[t]||(n[t]=[]),n[t]}function uk(t){return Array.isArray(t)?t:[t]}function dk(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const fk=t=>typeof t=="number",hk=t=>t.every(fk);function mk(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Gd(t)&&!n5(t)?new x5(n):new m5(n);i.mount(t),Ic.set(t,i)}function pk(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new F6(n);i.mount(t),Ic.set(t,i)}function _k(t,n){return wo(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function G5(t,n,i,a){const c=[];if(_k(t,n))c.push(E5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=X5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?mk:pk;Ic.has(p)||y(p);const g=Ic.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(g,{...n,transition:x},{}))}}return c}function gk(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=fr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return ck(c,n,i,{spring:$c}).forEach(({keyframes:d,transition:h},p)=>{a.push(...G5(p,d,h))}),a}function yk(t){return Array.isArray(t)&&t.some(Array.isArray)}function xk(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(yk(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=gk(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=G5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new L4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{kl(n.animations,y)})),y}return a}const K1=xk(),Oa=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Q1(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function bk(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Oa(p.fullSha,i)||Oa(p.sha,i)?Q1(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Oa(g.fullSha,i)||Oa(g.sha,i))?Q1(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function vk(t,n,i,a){if(!t)return null;const c=d=>Oa(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function wk(t,n,i,a,c,u,d=!1){const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=vk(h,i,a,u),x=(()=>{var U;if(!h)return null;const q=i.find(X=>Oa(X.fullSha,h)||Oa(X.sha,h));if(q!=null&&q.date)return q.date;if(g&&!d){const X=((U=a[g])!=null?U:[]).find(Z=>Oa(Z.fullSha,h)||Oa(Z.sha,h));if(X!=null&&X.date)return X.date}return null})(),b=x?new Date(x).getTime():Number.NaN,w=Date.now(),S=Number.isFinite(b)?Math.max(w,b+1+t.index):w+t.index,k=new Date(S).toISOString(),j=t.message.trim(),E={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:j||y,author:"You",date:k,kind:"stash"},O=`*Stash:${t.index}`,N={name:O,commitsAhead:1,commitsBehind:0,lastCommitDate:k,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},M=bk(i,a,h,p,O,u);return{branches:[N,...n],directCommits:M.directCommits,branchCommitPreviews:{...M.branchCommitPreviews,[O]:[E]},branchUniqueAheadCounts:{...c,[O]:1}}}function q5(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=wk(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function Sk({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var X,Z;const k=q5(y,t,i,u,h,c,(X=p==null?void 0:p.hasUncommittedChanges)!=null?X:!1);let j=k.branches,E=k.directCommits,O=k.branchCommitPreviews,N=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const he=p.headSha||p.parentSha||null,me=(W,ge)=>!W||!ge?!1:W===ge||W.startsWith(ge)||ge.startsWith(W),pe=p.branchName?j.find(W=>W.name===p.branchName):void 0,Se=(()=>{var ge;if(!he)return null;const W=E.find(De=>me(De.fullSha,he)||me(De.sha,he));if(W!=null&&W.date)return W.date;if(pe){const De=((ge=O[pe.name])!=null?ge:[]).find(P=>me(P.fullSha,he)||me(P.sha,he));if(De!=null&&De.date)return De.date}return null})(),Le=Se?new Date(Se).getTime():Number.NaN,ee=Date.now(),le=Number.isFinite(Le)?Math.max(ee,Le+1):ee,z=new Date(le).toISOString(),ce={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:he,message:"Local uncommitted changes",author:"You",date:z,kind:"uncommitted"};pe?(j=j.map(W=>W.name===pe.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:z,headSha:"WORKING_TREE"}:W),O={...O,[pe.name]:[ce,...O[pe.name]||[]]},N={...N,[pe.name]:Math.max(0,(Z=Object.prototype.hasOwnProperty.call(N,pe.name)?N[pe.name]:pe.commitsAhead)!=null?Z:0)+1}):O={...O,[c]:[ce,...O[c]||[]]}}const M={...d};M[c]=null;const q=pp(j,c,O,M),U=Oc({lanes:q,branches:j,mergeNodes:n,directCommits:E,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:O,branchParentByName:M,branchUniqueAheadCounts:N,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:j,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:N,enrichedDirectCommits:E,sharedGridLayoutModel:U}}const Z1="git-visualizer:expanded-projects",J1="git-visualizer:expanded-branches";function Ck(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function kk(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function jk(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function ex(t,n){if(!t||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(t),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function ip({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:w,sourceBranchName:S,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:O,onSelectBranch:N,isActiveProject:M}){var ne,ke;if(x.has(t))return null;const q=a.get(t);if(!q)return null;const U=(ne=u.get(t))!=null?ne:[],X=U.length>0,Z=_.useMemo(()=>{var de;return[...(de=c[t])!=null?de:[]]},[c,t]),he=b&&Z.length>0,me=b,pe=X||he,Se=h.has(t),Le=me?Z:[],ee=Se&&Le.length>0,le=y===t||g!=null&&q.headSha===g,z=new Set(x);z.add(t);const ce="top-[-0.45rem] h-5 w-[10px]",W="rounded-bl-[7px]",ge="left-[0.65rem]",De=new Map,P=[];for(const de of U){const Me=d.get(de);if(Me){const Ye=Le.findIndex(Je=>Bi(Je.fullSha,Me)||Bi(Je.sha,Me));if(Ye>=0){const Je=(ke=De.get(Ye))!=null?ke:[];Je.push(de),De.set(Ye,Je);continue}}P.push(de)}const ue=_.useMemo(()=>{if(!b||Le.length===0)return[];const de=[];let Me=[],Ye=null;const Je=()=>{if(Me.length===0)return;const He=Me[Me.length-1],Dt=`sidebar-single-${t}-${He.fullSha}`;de.push({key:Ye!=null?Ye:Dt,commits:Me,count:Me.length,lead:He}),Me=[],Ye=null};return Le.forEach(He=>{var It;const Dt=(It=k.get(`${t}:${He.fullSha}`))!=null?It:null;if(Me.length===0){Me=[He],Ye=Dt;return}if(Dt===Ye){Me.push(He);return}Je(),Me=[He],Ye=Dt}),Je(),de},[t,b,Le,k]);return l.jsxs("li",{className:_n("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Se?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:_n("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",W,ge,ce)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:_n("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",ge)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:_n("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":M?"true":"false","data-checked-out-branch":le?"true":"false",style:{color:M?le?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{M?N==null||N(t):pe?p(t):N==null||N(t)},onKeyDown:de=>{(de.key==="Enter"||de.key===" ")&&(de.preventDefault(),M?N==null||N(t):pe?p(t):N==null||N(t))},children:[pe?l.jsx("button",{type:"button","aria-label":`${Se?"Collapse":"Expand"} ${t}`,onPointerDown:de=>{de.preventDefault()},onClick:de=>{de.preventDefault(),de.stopPropagation(),p(t)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(rw,{"aria-hidden":"true",className:_n("h-3.5 w-3.5 shrink-0 transition-transform text-current",Se?"rotate-90":"")})}):null,l.jsx("span",{className:_n("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:t})]})}),ee?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ue.map(de=>{const Me=de.count>1&&!j(de.key);return(Me?[de.lead]:de.commits).map(Je=>{var It;const He=Le.findIndex(yt=>yt.fullSha===Je.fullSha),Dt=w(Je.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>O==null?void 0:O(Je.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:Je.message,children:[l.jsx("span",{className:"block truncate",children:Je.message}),Dt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Dt.map(yt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:yt})]},`${Je.fullSha}:${yt}`))}):null]}),de.count>1&&Je.fullSha===de.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${de.lead.fullSha}`,onClick:()=>E(de.key,`${t}:${de.lead.fullSha}`),className:_n("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Me?"":"min-w-[2ch] text-center"),children:Me?`+${Math.max(1,de.count-1)}`:"−"}):null]}),(It=De.get(He))!=null&&It.length?l.jsx("ul",{className:"relative space-y-1",children:De.get(He).map((yt,lt,ut)=>l.jsx(ip,{branchName:yt,depth:n+1,isLast:lt===ut.length-1&&P.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:z,showCommits:b,getMergeTargetLabels:w,sourceBranchName:yt,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:O,onSelectBranch:N,isActiveProject:M},yt))}):null]},`${t}:${Je.fullSha}`)})})}):null,X&&Se&&P.length>0?l.jsx("ul",{className:"relative space-y-1",children:P.map((de,Me)=>l.jsx(ip,{branchName:de,depth:n+1,isLast:Me===P.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:z,showCommits:b,getMergeTargetLabels:w,sourceBranchName:de,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:O,onSelectBranch:N,isActiveProject:M},de))}):null]})}function Mk({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function Ek({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:w,setManuallyOpenedClumps:S,setManuallyClosedClumps:k,gridLayoutModel:j,onSelectCommit:E,onSelectBranch:O,showCommits:N,className:M,style:q,collapsed:U=!1}){var Ke,Re;const X=_.useRef(null),Z=_.useRef(null),[he,me]=_.useState(()=>{if(typeof window>"u")return new Set;try{const _e=window.localStorage.getItem(Z1);if(_e){const et=JSON.parse(_e);if(Array.isArray(et)){const We=new Set;for(const Qe of et)typeof Qe=="string"&&We.add(Qe);return We}}}catch{}return new Set(t.map(_e=>_e.path))}),[pe,Se]=_.useState({}),[Le,ee]=_.useState(()=>new Set),[le,z]=_.useState(()=>new Set),[ce,W]=_.useState(null),ge=b!=null?b:Le,De=w!=null?w:le,P=S!=null?S:ee,ue=k!=null?k:z,[ne,ke]=_.useState(null),[de,Me]=_.useState(null),[Ye,Je]=_.useState(null),[He,Dt]=_.useState(null),[It,yt]=_.useState(null),[lt,ut]=_.useState(null),[Zt,fn]=_.useState(null),tn=_.useRef(new Map),Q=_.useRef(!1),$e=_.useRef(null),ct=_.useRef(null),je=_e=>{try{window.localStorage.setItem(Z1,JSON.stringify(Array.from(_e)))}catch{}},ot=_e=>{try{const et=Object.fromEntries(Object.entries(_e).map(([We,Qe])=>[We,Array.from(Qe)]));window.localStorage.setItem(J1,JSON.stringify(et))}catch{}};_.useEffect(()=>{je(he)},[he]),_.useEffect(()=>{try{const _e=window.localStorage.getItem(J1);if(!_e)return;const et=JSON.parse(_e);if(!et||typeof et!="object")return;const We={};for(const[Qe,Be]of Object.entries(et)){if(!Array.isArray(Be))continue;const tt=new Set;for(const xt of Be)typeof xt=="string"&&tt.add(xt);We[Qe]=tt}Se(We)}catch{}},[]),_.useEffect(()=>{ot(pe)},[pe]);const it=t,mt=_.useMemo(()=>{if(!He)return it;const _e=it.find(Be=>Be.path===He);if(!_e)return it;const et=it.filter(Be=>Be.path!==He);if(It==null)return et;const We=[...et],Qe=Math.max(0,Math.min(It,We.length));return We.splice(Qe,0,_e),We},[It,He,it]),Tt=_.useCallback(_e=>{d==null||d(_e)},[d]),Ct=_.useCallback(()=>{Je(null),Dt(null),yt(null),ut(null)},[]);_.useEffect(()=>{if(!Ye)return;const _e=We=>{const Qe=$e.current;!Qe||!Qe.active||Math.abs(We.clientX-Qe.startX)<=4&&Math.abs(We.clientY-Qe.startY)<=4||ct.current==null&&(ct.current=window.requestAnimationFrame(()=>{var nt,Lt;ct.current=null;const Be=$e.current;if(!Be||!Be.active)return;(Math.abs(We.clientX-Be.startX)>4||Math.abs(We.clientY-Be.startY)>4)&&(Be.moved=!0,Dt(Be.path)),ut({x:We.clientX-Be.offsetX,y:We.clientY-Be.offsetY,width:Be.width});const xt=Array.from((Lt=(nt=Z.current)==null?void 0:nt.querySelectorAll("[data-project-path]"))!=null?Lt:[]).filter(wt=>wt.dataset.projectPath&&wt.dataset.projectPath!==Be.path);let jt=xt.length;if(xt.length>0)for(let wt=0;wt<xt.length;wt+=1){const gt=xt[wt].getBoundingClientRect(),nn=gt.top+gt.height/2;if(We.clientY<nn){jt=wt;break}}yt(jt)}))},et=()=>{const We=$e.current;if($e.current=null,ct.current!=null&&(window.cancelAnimationFrame(ct.current),ct.current=null),!We){Ct();return}if(!We.moved){Ct();return}Q.current=!0;const Qe=it.map(nt=>nt.path);if(Qe.indexOf(We.path)<0){Ct();return}const tt=It;if(tt==null){Ct();return}const xt=Qe.filter(nt=>nt!==We.path),jt=Math.max(0,Math.min(tt,xt.length));xt.splice(jt,0,We.path),Tt(xt),Ct(),window.requestAnimationFrame(()=>{Q.current=!1,W(null)})};return window.addEventListener("pointermove",_e),window.addEventListener("pointerup",et),window.addEventListener("pointercancel",et),()=>{window.removeEventListener("pointermove",_e),window.removeEventListener("pointerup",et),window.removeEventListener("pointercancel",et)}},[Ct,Tt,Ye,It,it]);const zt=_.useCallback((_e,et)=>{if(_e.button!==0)return;const We=_e.currentTarget.getBoundingClientRect();$e.current={active:!0,path:et,startX:_e.clientX,startY:_e.clientY,offsetX:_e.clientX-We.left,offsetY:_e.clientY-We.top,width:We.width,moved:!1},Je(et),Dt(null),yt(null),ut({x:_e.clientX-We.left,y:_e.clientY-We.top,width:We.width})},[]),ft=(Ke=j==null?void 0:j.defaultCollapsedClumps)!=null?Ke:new Set,H=_e=>ge.has(_e)||!ft.has(_e)&&!De.has(_e),J=(_e,et)=>{const We=X.current,Qe=Z.current;if(We&&Qe){const Be=`[data-clump-toggle-id="${et}"]`,tt=We.querySelector(Be);if(tt){const xt=tt.getBoundingClientRect().top-Qe.getBoundingClientRect().top;Me({id:et,topWithinScrollBody:xt})}else Me(null)}else Me(null);ke(et),P(Be=>{const tt=new Set(Be),xt=H(_e);return ue(jt=>{const nt=new Set(jt);return xt?(tt.delete(_e),nt.add(_e)):(nt.delete(_e),tt.add(_e)),nt}),tt})};_.useLayoutEffect(()=>{if(!ne)return;const _e=X.current,et=Z.current;if(!_e||!et)return;const We=`[data-clump-toggle-id="${ne}"]`,Qe=_e.querySelector(We);if(Qe){if((de==null?void 0:de.id)===ne){const tt=Qe.getBoundingClientRect().top-et.getBoundingClientRect().top-de.topWithinScrollBody;Number.isFinite(tt)&&tt!==0&&(et.scrollTop+=tt)}Qe.focus({preventScroll:!0}),ke(null),Me(null)}},[ge,De,ne,de]);const ve=(_e,et)=>{Se(We=>{var xt;const Qe=(xt=We[_e])!=null?xt:new Set,Be=new Set(Qe);Be.has(et)?Be.delete(et):Be.add(et);const tt={...We,[_e]:Be};return ot(tt),tt})};_.useEffect(()=>{if(ce==null)return;const _e=()=>{const We=tn.current.get(ce);if(!We)return;const Qe=We.getBoundingClientRect();fn({top:Qe.bottom+8,right:Math.max(8,window.innerWidth-Qe.right)})};_e();const et=()=>W(null);return window.addEventListener("pointerdown",et),window.addEventListener("resize",_e),window.addEventListener("scroll",_e,!0),()=>{window.removeEventListener("pointerdown",et),window.removeEventListener("resize",_e),window.removeEventListener("scroll",_e,!0)}},[ce]);const Ae=_.useMemo(()=>{var et,We,Qe,Be,tt,xt,jt,nt,Lt,wt,gt,nn,_t,Vt,en,Rt;const _e=new Map;for(const vt of t){const Jt=Sk({branches:vt.branches,mergeNodes:vt.mergeNodes,directCommits:vt.directCommits,unpushedDirectCommits:vt.unpushedDirectCommits,defaultBranch:vt.defaultBranch,branchCommitPreviews:vt.branchCommitPreviews,branchUniqueAheadCounts:vt.branchUniqueAheadCounts,checkedOutRef:vt.checkedOutRef,stashes:vt.stashes,manuallyOpenedClumps:(et=g[vt.path])!=null?et:new Set,manuallyClosedClumps:(We=x[vt.path])!=null?We:new Set}),hn=Jt.enrichedBranches.some(qt=>qt.name===vt.defaultBranch)?Jt.enrichedBranches:[{name:vt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Jt.enrichedBranches],rn=new Map(Jt.sharedGridLayoutModel.nodes.map(qt=>[qt.commit.visualId,qt.row])),$t={};for(const qt of Jt.sharedGridLayoutModel.allCommits){const An=(Qe=$t[qt.branchName])!=null?Qe:[];An.push({fullSha:qt.id,sha:qt.id.slice(0,7),parentSha:(Be=qt.parentSha)!=null?Be:null,message:qt.message,author:qt.author,date:qt.date,kind:(tt=qt.kind)!=null?tt:"commit"}),$t[qt.branchName]=An}for(const qt of Object.keys($t))$t[qt]=$t[qt].sort((An,Ds)=>{var jn,In;const Xn=new Date(An.date).getTime(),wn=new Date(Ds.date).getTime();if(Xn!==wn)return Xn-wn;const Bs=(jn=rn.get(`${qt}:${An.fullSha}`))!=null?jn:Number.MAX_SAFE_INTEGER,$s=(In=rn.get(`${qt}:${Ds.fullSha}`))!=null?In:Number.MAX_SAFE_INTEGER;return Bs!==$s?Bs-$s:An.fullSha.localeCompare(Ds.fullSha)});const bn=(xt=Jt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?xt:new Map,kt=(qt,An)=>{const Ds=bn.get(An);if(!Ds)return[];for(const[Xn,wn]of Ds.entries())if(Bi(qt,Xn))return Array.from(wn).sort();return[]},Fn=Ck(hn,vt.defaultBranch),rt=kk(hn,vt.defaultBranch,Fn),kn=new Map(hn.map(qt=>[qt.name,qt])),ho=new Map;for(const qt of hn){const An=(nt=(jt=Jt.sharedGridLayoutModel.firstBranchCommitByName.get(qt.name))==null?void 0:jt.parentSha)!=null?nt:null,Ds=An!=null?An:null;ho.set(qt.name,Ds)}const Fo=(Lt=Jt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Lt:new Set,mo=(wt=g[vt.path])!=null?wt:new Set,So=(gt=x[vt.path])!=null?gt:new Set,Co=qt=>mo.has(qt)||!Fo.has(qt)&&!So.has(qt);_e.set(vt.path,{rootBranchNames:rt,branchByName:kn,branchCommitPreviewsFromLayout:$t,childNamesByParent:Fn,branchAnchorShaByName:ho,checkedOutBranchName:(_t=(nn=vt.checkedOutRef)==null?void 0:nn.branchName)!=null?_t:null,checkedOutHeadSha:(en=(Vt=vt.checkedOutRef)==null?void 0:Vt.headSha)!=null?en:null,clusterKeyByCommitId:(Rt=Jt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Rt:new Map,getMergeTargetLabels:kt,isGridClusterOpen:Co})}return _e},[n,x,g,t]),at=(_e,et={})=>{var gt,nn,_t,Vt,en;const We=(gt=et.ghostMode)!=null?gt:!1,Qe=(nn=et.hideLive)!=null?nn:!1,Be=ex(_e.path,n),tt=he.has(_e.path),xt=(_t=_e.treeLoaded)!=null?_t:_e.branches.length>0,jt=Ae.get(_e.path),nt=(Vt=pe[_e.path])!=null?Vt:jt?jk(jt.rootBranchNames,jt.childNamesByParent,y,_e.defaultBranch):new Set,Lt=He===_e.path,wt=ex(_e.path,n);return l.jsxs(ri.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":_e.path,"data-active-project":wt?"true":"false",className:_n("project-row relative z-10 flex flex-col gap-1 transition-colors",tt&&jt?"mb-2.5":""),children:[It!==null&&He!==_e.path&&((en=mt[It])==null?void 0:en.path)===_e.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:_n("relative z-0 px-1",Qe?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:_n(We?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Lt&&!We?"opacity-0":""),onPointerDownCapture:Rt=>{if(We)return;const vt=Rt.target;vt!=null&&vt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||zt(Rt,_e.path)},onClick:Rt=>{if(We||wt||He===_e.path||Q.current)return;const vt=Rt.target;vt!=null&&vt.closest('button, input, textarea, select, [contenteditable="true"]')||i(_e.path)},children:[l.jsx("button",{type:"button",onPointerDown:Rt=>Rt.stopPropagation(),onClick:Rt=>{Rt.preventDefault(),Rt.stopPropagation(),me(vt=>{const Jt=new Set(vt);return Jt.has(_e.path)?Jt.delete(_e.path):Jt.add(_e.path),je(Jt),Jt})},"aria-expanded":tt,"aria-label":`${tt?"Collapse":"Expand"} ${_e.name}`,className:_n("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",We?"pointer-events-none":""),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(Mk,{open:tt})}),l.jsx("span",{className:_n("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:_e.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Rt=>Rt.stopPropagation(),"aria-label":`Project actions for ${_e.name}`,"aria-expanded":ce===_e.path,ref:Rt=>{tn.current.set(_e.path,Rt)},onClick:Rt=>{Rt.stopPropagation();const vt=Rt.currentTarget.getBoundingClientRect();fn({top:vt.bottom+8,right:Math.max(8,window.innerWidth-vt.right)}),W(Jt=>Jt===_e.path?null:_e.path)},className:_n("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",We?"pointer-events-none":""),children:l.jsx(dw,{className:"h-4 w-4 shrink-0"})}),ce===_e.path&&!We&&Zt&&typeof document<"u"?Al.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${Zt.top}px`,right:`${Zt.right}px`},onPointerDownCapture:Rt=>Rt.stopPropagation(),onClick:Rt=>Rt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Rt=>Rt.stopPropagation(),onClick:()=>{W(null),u(_e.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Rt=>Rt.stopPropagation(),onClick:()=>{W(null),c(_e.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),tt?xt&&jt?l.jsx("ul",{className:_n("relative z-0 space-y-1 pt-0",We?"opacity-70":""),children:jt.rootBranchNames.map((Rt,vt)=>l.jsx(ip,{branchName:Rt,depth:0,isLast:vt===jt.rootBranchNames.length-1,branchByName:jt.branchByName,branchCommitPreviews:jt.branchCommitPreviewsFromLayout,childNamesByParent:jt.childNamesByParent,branchAnchorShaByName:jt.branchAnchorShaByName,expandedBranchNames:nt,onToggleBranch:Jt=>ve(_e.path,Jt),checkedOutBranchName:jt.checkedOutBranchName,checkedOutHeadSha:jt.checkedOutHeadSha,ancestors:new Set,showCommits:N,getMergeTargetLabels:jt.getMergeTargetLabels,sourceBranchName:Rt,clusterKeyByCommitId:jt.clusterKeyByCommitId,isGridClusterOpen:jt.isGridClusterOpen,onToggleGridCluster:J,onSelectCommit:async Jt=>{Be||await i(_e.path),E==null||E(Jt)},onSelectBranch:async Jt=>{Be||await i(_e.path),O==null||O(Jt)},isActiveProject:wt},`${_e.path}:${Rt}`))}):l.jsx("p",{className:_n("px-2 py-2 text-xs text-muted-foreground",We?"opacity-70":""),children:"Loading branch tree..."}):null]})]},_e.path)};return l.jsxs("aside",{ref:X,"aria-label":"Dense branch sidebar",className:_n("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",M),style:q,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:_n("px-2 pb-2",U?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:Z,className:_n("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",U?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:mt.map(_e=>at(_e,{hideLive:He===_e.path}))})]}),He&&lt?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${lt.x}px, ${lt.y}px, 0)`,width:`${lt.width}px`},children:at((Re=t.find(_e=>_e.path===He))!=null?Re:it.find(_e=>_e.path===He),{ghostMode:!0})}):null]})}const Tk="git-visualizer",ad="git-visualizer:projects",_m="git-visualizer:active-project",tx="git-visualizer:map-orientation",rd=12,nx=1400,Ak=180,sx="git-visualizer:sidebar-width",ox="git-visualizer:sidebar-collapsed",ix="git-visualizer:grid-clumps",ax=360,rx=180,lx=360;function Ni(t){return t==="/"?t:t.replace(/\/+$/,"")}function Dk(...t){return t.filter(Boolean).join(" ")}function Dd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Nk(t){return Dd(t)===Tk}function cx(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function Rk(){var ln,mn,Nn,Hn,Mn;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,w]=_.useState([]),[S,k]=_.useState([]),[j,E]=_.useState([]),[O,N]=_.useState({}),[M,q]=_.useState("main"),[U,X]=_.useState(null),[Z,he]=_.useState([]),[me,pe]=_.useState(!1),[Se,Le]=_.useState(""),[ee,le]=_.useState(0),[z,ce]=_.useState(1),[W,ge]=_.useState({}),[De,P]=_.useState({}),[ue,ne]=_.useState(null),[ke,de]=_.useState(null),[Me,Ye]=_.useState(null),[Je,He]=_.useState(!1),[Dt,It]=_.useState(!1),[yt,lt]=_.useState(null),[ut,Zt]=_.useState(null),[fn,tn]=_.useState(!1),[Q,$e]=_.useState(null),[ct,je]=_.useState(null),[ot,it]=_.useState(!1),[mt,Tt]=_.useState(!1),[Ct,zt]=_.useState(!1),[ft,H]=_.useState(!1),[J,ve]=_.useState({}),[Ae,at]=_.useState({}),[Ke,Re]=_.useState({}),[_e,et]=_.useState({}),[We,Qe]=_.useState({}),[Be,tt]=_.useState([]),[xt,jt]=_.useState([]),[nt,Lt]=_.useState(!1),[wt,gt]=_.useState(!1),[nn,_t]=_.useState(!1),[Vt,en]=_.useState(!1),Rt=wt||nn||nt||Ct||ft||mt||me||Vt,[vt,Jt]=_.useState(!1),[hn,rn]=_.useState("horizontal"),[$t,bn]=_.useState(null),[kt,Fn]=_.useState(null),[rt,kn]=_.useState(null),[ho,Fo]=_.useState(!1),[mo,So]=_.useState(!1),[Co,qt]=_.useState(ax),[An,Ds]=_.useState(!1),Xn=_.useRef(null),wn=_.useRef(0),Bs=_.useRef(0),$s=_.useRef({}),jn=_.useRef(null),In=_.useRef({}),Ms=_.useRef({}),Is=_.useRef(!1),Ps=_.useRef(null),Ro=_.useRef(ax),no=_.useRef(null),is=_.useRef(null),Ss=Nk(t)||!0,Dn=_.useRef(!1),so=_.useRef(!1),ci=_.useRef(new Set),Ls=_.useRef([]),oo=_.useRef([]),po=_.useRef(null),Cs=_.useRef({}),es=t!=null?t:"__no-repo__",ko=(B,R)=>{try{const I={opened:Object.fromEntries(Object.entries(B).map(([te,fe])=>[te,Array.from(fe)])),closed:Object.fromEntries(Object.entries(R).map(([te,fe])=>[te,Array.from(fe)]))};window.localStorage.setItem(ix,JSON.stringify(I))}catch{}};_.useEffect(()=>{var B,R;try{const I=window.localStorage.getItem(ix);if(!I)return;const te=JSON.parse(I);if(!te||typeof te!="object")return;const fe={},Ue={},Ge=te;for(const[bt,an]of Object.entries((B=Ge.opened)!=null?B:{}))Array.isArray(an)&&(fe[bt]=new Set(an.filter(Un=>typeof Un=="string")));for(const[bt,an]of Object.entries((R=Ge.closed)!=null?R:{}))Array.isArray(an)&&(Ue[bt]=new Set(an.filter(Un=>typeof Un=="string")));ge(fe),P(Ue)}catch{}},[]),_.useEffect(()=>{ko(W,De)},[De,W]);const Pn=_.useMemo(()=>{var B;return(B=W[es])!=null?B:new Set},[es,W]),Es=_.useMemo(()=>{var B;return(B=De[es])!=null?B:new Set},[es,De]),ys=_.useCallback(B=>{ge(R=>{var Ue;const I=(Ue=R[es])!=null?Ue:new Set,te=typeof B=="function"?B(I):B,fe={...R,[es]:new Set(te)};return ko(fe,De),fe})},[es,De]),us=_.useCallback(B=>{P(R=>{var Ue;const I=(Ue=R[es])!=null?Ue:new Set,te=typeof B=="function"?B(I):B,fe={...R,[es]:new Set(te)};return ko(W,fe),fe})},[es,W]),Qi=_.useMemo(()=>c.map(B=>{var te,fe,Ue,Ge,bt,an,Un,Xt,bs,Pt,Sn,Rn,D,L,F;const R=(()=>{if(!t)return!1;const G=Ni(B.path).toLowerCase(),T=Ni(t).toLowerCase();return G===T})(),I=(te=d[B.path])!=null?te:{};return{...B,...I,branches:(fe=I.branches)!=null?fe:[],mergeNodes:(Ue=I.mergeNodes)!=null?Ue:[],directCommits:(Ge=I.directCommits)!=null?Ge:[],unpushedDirectCommits:(bt=I.unpushedDirectCommits)!=null?bt:[],unpushedCommitShasByBranch:(an=I.unpushedCommitShasByBranch)!=null?an:{},checkedOutRef:R?U:(Un=I.checkedOutRef)!=null?Un:null,worktrees:(Xt=I.worktrees)!=null?Xt:[],stashes:(bs=I.stashes)!=null?bs:[],branchCommitPreviews:(Pt=I.branchCommitPreviews)!=null?Pt:{},laneByBranch:(Sn=I.laneByBranch)!=null?Sn:{},branchUniqueAheadCounts:(Rn=I.branchUniqueAheadCounts)!=null?Rn:{},defaultBranch:(L=(D=I.defaultBranch)!=null?D:B.branchName)!=null?L:"main",treeLoaded:(F=I.loaded)!=null?F:!1}}),[c,d,t,U]),Qo=_.useMemo(()=>({githubAuthStatus:ut,githubAuthLoading:fn,onGitHubAuthSetup:To,gridSearchQuery:Se,setGridSearchQuery:Le,gridSearchResultCount:ue,gridSearchResultIndex:ke,setGridSearchJumpDirection:ce,setGridSearchJumpToken:le,mapGridOrientation:hn,setMapGridOrientation:rn,setIsGridDebugOpen:So,githubAuthMessage:Q,commitSwitchFeedback:ct,isCommitSwitchFeedbackVisible:ot}),[ct,fn,Q,ut,Se,ue,ke,To,ot,hn,Le,ce,le,So,rn]);function Li(B,R){const I=cx(R);return $s.current[B]===I?!1:($s.current={...$s.current,[B]:I},h(fe=>fe[B]===R?fe:{...fe,[B]:R}),!0)}function sn(B){var R;return[B.repoPath,B.defaultBranch,B.headSha,(R=B.upstreamSha)!=null?R:"",B.hasUncommittedChanges?"1":"0",B.branchCount,B.worktreeCount,B.stashCount].join("|")}function ui(B){var R;return[B.repoPath,B.headSha,(R=B.upstreamSha)!=null?R:"",B.hasUncommittedChanges?"1":"0"].join("|")}function Os(B,R){var I,te,fe,Ue,Ge,bt;return{repoPath:B,headSha:(te=(I=R.checkedOutRef)==null?void 0:I.headSha)!=null?te:"",upstreamSha:(Ue=(fe=R.checkedOutRef)==null?void 0:fe.parentSha)!=null?Ue:null,hasUncommittedChanges:(bt=(Ge=R.checkedOutRef)==null?void 0:Ge.hasUncommittedChanges)!=null?bt:!1}}function Zi(B,R,I){var te,fe,Ue,Ge,bt,an;return{repoPath:B,defaultBranch:R,headSha:(fe=(te=I.checkedOutRef)==null?void 0:te.headSha)!=null?fe:"",upstreamSha:(Ge=(Ue=I.checkedOutRef)==null?void 0:Ue.parentSha)!=null?Ge:null,hasUncommittedChanges:(an=(bt=I.checkedOutRef)==null?void 0:bt.hasUncommittedChanges)!=null?an:!1,branchCount:I.branches.length,worktreeCount:I.worktrees.length,stashCount:I.stashes.length}}_.useEffect(()=>{try{const B=localStorage.getItem(ad);if(!B)return;const R=JSON.parse(B);if(!Array.isArray(R))return;const I=R.filter(te=>typeof te=="object"&&te!==null&&typeof te.path=="string"&&typeof te.name=="string"&&typeof te.lastOpenedAt=="number");u(I.slice(0,rd))}catch{u([])}},[]),_.useEffect(()=>{try{const B=window.localStorage.getItem(tx);(B==="vertical"||B==="horizontal")&&rn(B)}catch{}},[]),_.useEffect(()=>{var I;if(so.current||t||c.length===0)return;const B=(()=>{try{return window.localStorage.getItem(_m)}catch{return null}})(),R=B?c.find(te=>Ni(te.path).toLowerCase()===Ni(B).toLowerCase()):null;so.current=!0,Gn((I=R==null?void 0:R.path)!=null?I:c[0].path)},[c,t]),_.useEffect(()=>{if(t)try{window.localStorage.setItem(_m,t)}catch{}},[t]),_.useEffect(()=>{try{window.localStorage.setItem(tx,hn)}catch{}},[hn]);const Ji=_.useMemo(()=>b.reduce((B,R)=>(B[R.targetCommitSha]=R.targetBranch,B),{}),[b]);_.useEffect(()=>{t&&(Is.current||h(B=>{var R,I;return{...B,[t]:{path:t,name:i||Dd(t),branches:g,mergeNodes:b,directCommits:S,unpushedDirectCommits:j,mergeTargetBranchByCommitSha:b.reduce((te,fe)=>(te[fe.targetCommitSha]=fe.targetBranch,te),{}),unpushedCommitShasByBranch:O,checkedOutRef:U,worktrees:Z,stashes:Be,branchCommitPreviews:Ae,branchParentByName:Ke,laneByBranch:_e,branchUniqueAheadCounts:We,defaultBranch:M,loaded:!0,cacheSchemaVersion:(I=(R=B[t])==null?void 0:R.cacheSchemaVersion)!=null?I:1,updatedAtMs:Date.now()}}}))},[t,i,g,b,S,j,Ji,O,U,Z,Be,Ae,Ke,_e,We,M]);async function Bo(B,R=!1){var te;const I=Ni(B);if(I&&!ci.current.has(I)&&!(!R&&((te=d[I])!=null&&te.loaded))){ci.current.add(I),I===t&&y(!0);try{const fe=await Ce("get_repo_visual_snapshot",{repoPath:I,forceRefresh:R});Li(I,fe)}finally{ci.current.delete(I),I===t&&ci.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(B=>{Bo(B.path),Ce("watch_repo",{repoPath:B.path}).catch(console.error)})},[c]),_.useEffect(()=>{let B=!1,R=null;return Mc("git-activity",I=>{if(B)return;const te=Ni(I.payload.repoPath);!te||te===t||Bo(te,!0)}).then(I=>{B?I():R=I}).catch(console.error),()=>{B=!0,R&&R()}},[t]);function xs(B){u(R=>{const I=Ni(B.path);if(!I)return R;const te={...B,path:I},Ue=(R.some(Ge=>Ge.path===I)?R.map(Ge=>Ge.path===I?te:Ge):[...R,te]).slice(-rd);try{localStorage.setItem(ad,JSON.stringify(Ue))}catch{}return Ue})}function Oi(B){u(R=>{const I=new Map(R.map(fe=>[fe.path,fe])),te=[];for(const fe of B){const Ue=I.get(fe);Ue&&(te.push(Ue),I.delete(fe))}for(const fe of R)I.has(fe.path)&&te.push(fe);try{localStorage.setItem(ad,JSON.stringify(te.slice(0,rd)))}catch{}return te.slice(0,rd)})}async function Hs(B){const R=Ni(B);if(R){lt(null);try{const[I,te]=await Promise.all([Ce("get_repo_info",{repoPath:R}),Ce("get_default_branch",{repoPath:R}).catch(()=>"main")]);xs({path:R,name:I.name,lastOpenedAt:Date.now(),branchName:te}),await Bo(R,!0)}catch(I){lt(I instanceof Error?I.message:String(I))}}}function Yn(B){var I,te;const R=Ni(B);if(R){u(fe=>{const Ue=fe.filter(Ge=>Ge.path!==R);try{localStorage.setItem(ad,JSON.stringify(Ue))}catch{}return Ue});try{t&&Ni(t).toLowerCase()===R.toLowerCase()&&window.localStorage.removeItem(_m)}catch{}if(h(fe=>{if(!(R in fe))return fe;const Ue={...fe};return delete Ue[R],Ue}),t===R){const fe=(te=(I=c.find(Ue=>Ue.path!==R))==null?void 0:I.path)!=null?te:null;fe?Gn(fe):(n(null),a(""),x([]),w([]),k([]),E([]),N({}),X(null),he([]),tt([]),at({}),Re({}),et({}),Qe({}))}}}async function jo(B){const R=Ni(B);if(R)try{await Ce("reveal_in_finder",{path:R})}catch(I){lt(I instanceof Error?I.message:String(I))}}const di=()=>{(async()=>{var B,R;try{const I=await Jv({directory:!0,multiple:!1,defaultPath:(R=(B=c[0])==null?void 0:B.path)!=null?R:void 0});typeof I=="string"&&I&&await Hs(I)}catch(I){lt(I instanceof Error?I.message:String(I))}})()};async function Us(B,R){const te=[];let fe=0;for(;;){const Ue=await Ce("get_merge_nodes",{repoPath:B,branch:R,page:fe,perPage:100});if(te.push(...Ue.nodes),!Ue.hasMore||Ue.nodes.length===0)break;fe+=1}return te}async function Lo(B,R,I){const te=Array.from(new Set([I,...R.map(Ge=>Ge.name)].filter(Ge=>!!Ge)));if(te.length===0)return[];const fe=await Promise.all(te.map(Ge=>Us(B,Ge).catch(()=>[]))),Ue=new Map;for(const Ge of fe)for(const bt of Ge){const an=`${bt.targetCommitSha}:${bt.targetBranch}`;Ue.has(an)||Ue.set(an,bt)}return Array.from(Ue.values())}const gn=B=>B.map(R=>`${R.name}|${R.headSha}|${R.commitsAhead}|${R.commitsBehind}|${R.unpushedCommits}|${R.remoteSyncStatus}`).join("||"),qs=B=>B.map(R=>R.fullSha).join("|"),Vs=B=>{var R,I;return B?`${(R=B.branchName)!=null?R:""}|${B.headSha}|${(I=B.parentSha)!=null?I:""}|${B.hasUncommittedChanges?1:0}`:"__none__"};async function Mo(B,R,I){var L,F,G,T;const te=R!=null?R:M,fe=(L=I==null?void 0:I.includeMergeNodes)!=null?L:!0,Ue=(F=I==null?void 0:I.includeUnpushedShaMap)!=null?F:!0,Ge=(G=I==null?void 0:I.includeWorktrees)!=null?G:!0,bt=(T=I==null?void 0:I.includeStashes)!=null?T:!0,[an,Un,Xt,bs,Pt,Sn]=await Promise.all([Ce("get_branches",{repoPath:B}),Ce("get_all_repo_commits",{repoPath:B}),Ce("get_unpushed_direct_commits",{repoPath:B,branch:te}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:B}).catch(()=>null),Ge?Ce("list_worktrees",{repoPath:B}).catch(()=>[]):Promise.resolve(Z),bt?Ce("list_stashes",{repoPath:B}).catch(()=>[]):Promise.resolve(Be)]),Rn=fe?await Lo(B,an,te):b,D=Ue?await Promise.all([te,...an.map(V=>V.name)].map(async V=>{const ie=await Ce("get_branch_unpushed_commit_shas",{repoPath:B,branch:V}).catch(()=>[]);return[V,ie]})):Object.entries(O);_.startTransition(()=>{x(an),w(Rn),k(Un),E(Xt),N(Object.fromEntries(D)),X(bs),he(Pt),tt(Sn)})}async function Wn(B,R){await Mo(B,R,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Zo(B,R){const I=M,[te,fe]=await Promise.all([Ce("get_branches",{repoPath:B}),Ce("get_checked_out_ref",{repoPath:B}).catch(()=>null)]),Ue=await Promise.all([I,...te.map(Ge=>Ge.name)].map(async Ge=>{const bt=await Ce("get_branch_unpushed_commit_shas",{repoPath:B,branch:Ge}).catch(()=>[]);return[Ge,bt]}));_.startTransition(()=>{x(te),N(Object.fromEntries(Ue)),X(fe)})}async function io(){await new Promise(B=>{window.requestAnimationFrame(()=>B())})}async function zi(B){const[R,I,te]=await Promise.all([Ce("get_branches",{repoPath:B}).catch(()=>[]),Ce("get_all_repo_commits",{repoPath:B}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:B}).catch(()=>null)]);return gn(R)!==gn(Ls.current)||qs(I)!==qs(oo.current)||Vs(te)!==Vs(po.current)}async function Ks(B){je(null),It(!0),Is.current=!0;try{const[R,I]=await Promise.all([Ce("get_repo_info",{repoPath:B}),Ce("get_default_branch",{repoPath:B})]);a(R.name),q(I),n(B),await Mo(B,I),ks(B),je({kind:"success",message:`Now targeting worktree at ${B}`})}catch(R){const I=R instanceof Error?R.message:String(R);je({kind:"error",message:I}),console.error("Failed to switch worktree:",I)}finally{It(!1),Is.current=!1}}async function Eo(B,R){if(!(!t||me)){pe(!0),je(null);try{await Ce("remove_worktree",{repoPath:t,worktreePath:B,force:R}),await Wn(t),je({kind:"success",message:`Removed worktree at ${B}`})}catch(I){const te=I instanceof Error?I.message:String(I);je({kind:"error",message:te}),console.error("Failed to remove worktree:",te)}finally{pe(!1)}}}function Oo(B,R){var te,fe;const I=cx(R);return jn.current===I?!1:(jn.current=I,a(R.name||Dd(B)),q(R.defaultBranch||"main"),x(R.branches),w(R.mergeNodes),k(R.directCommits),E(R.unpushedDirectCommits),N(R.unpushedCommitShasByBranch),X(R.checkedOutRef),he(R.worktrees),tt(R.stashes),at(R.branchCommitPreviews),Re((te=R.branchParentByName)!=null?te:{}),et((fe=R.laneByBranch)!=null?fe:{}),Qe(R.branchUniqueAheadCounts),n(B),!0)}async function Gn(B){var fe;const R=++wn.current,I=Ni(B);if(!I)return;Is.current=!0;const te=d[I];if(te!=null&&te.loaded)try{const Ue=await Ce("get_repo_quick_state",{repoPath:I});if(R!==wn.current)return;const Ge=ui(Ue);if(((fe=Ms.current[I])!=null?fe:te?ui(Os(I,te)):null)===Ge){lt(null),Ms.current={...Ms.current,[I]:Ge},Oo(I,te),xs({path:I,name:te.name||Dd(I),lastOpenedAt:Date.now(),branchName:te.defaultBranch}),It(!1),He(!1),ks(I),(async()=>{try{const an=await Ce("get_repo_refresh_fingerprint",{repoPath:I}),Un=sn(an);if(R!==wn.current)return;if(In.current[I]!==Un){const Xt=await Ce("get_repo_visual_snapshot",{repoPath:I,forceRefresh:!0});if(R!==wn.current)return;Li(I,Xt),In.current={...In.current,[I]:Un},Ms.current={...Ms.current,[I]:ui(Os(I,Xt))},Oo(I,Xt)}}catch{}})(),Is.current=!1;return}Ms.current={...Ms.current,[I]:Ge}}catch{}if(He(!0),It(!0),lt(null),await new Promise(Ue=>setTimeout(Ue,15)),R===wn.current)try{const[Ue,Ge]=await Promise.all([Ce("get_repo_info",{repoPath:I}),Ce("get_default_branch",{repoPath:I})]);if(R!==wn.current)return;a(Ue.name),q(Ge);const bt=await Ce("get_repo_visual_snapshot",{repoPath:I,forceRefresh:!0});if(R!==wn.current)return;Li(I,bt),In.current={...In.current,[I]:sn(Zi(I,Ge,bt))},Ms.current={...Ms.current,[I]:ui(Os(I,bt))},Oo(I,bt),xs({path:I,name:Ue.name,lastOpenedAt:Date.now(),branchName:Ge}),It(!1),He(!1),ks(I)}catch(Ue){if(R!==wn.current)return;console.error("Failed to load repo:",Ue),lt(Ue instanceof Error?Ue.message:String(Ue)),n(null),He(!1),It(!1)}finally{Is.current=!1}}async function ks(B){const R=++Bs.current;try{if(R!==Bs.current)return;$e(null);const I=await Ce("get_github_info",{repoPath:B}),te=await Ce("get_github_auth_status");if(R!==Bs.current||(Zt(te),!te.ghAvailable||!te.authenticated))return;const fe=await Ce("get_open_prs",{owner:I.owner,repo:I.repo});if(R!==Bs.current)return;jt(fe)}catch(I){if(R!==Bs.current)return;console.log("GitHub data not available:",I),$e(I instanceof Error?I.message:String(I))}}_.useEffect(()=>{let B=null,R=!1;const I=(()=>{try{return mp().label}catch{return null}})(),te=async Ue=>{var bt;const Ge=(bt=Ue==null?void 0:Ue.path)==null?void 0:bt.trim();!Ge||R||t!==Ge&&await Gn(Ge)};return(async()=>{I==="main"&&(B=await Mc("gitviz://open-repo",async Ge=>{await te(Ge.payload)}));const Ue=await Ce("take_pending_open_repo");await te(Ue)})(),()=>{R=!0,B&&B()}},[t]),_.useEffect(()=>{Ls.current=g},[g]),_.useEffect(()=>{oo.current=S},[S]),_.useEffect(()=>{po.current=U},[U]),_.useEffect(()=>{Cs.current=Ke},[Ke]),_.useEffect(()=>{Dn.current=vt},[vt]),_.useEffect(()=>{},[t,M,Ss]),_.useEffect(()=>{if(!t||!M||!Ss)return;Ce("watch_repo",{repoPath:t}).catch(console.error);let B=!1,R=!1,I=!1,te=!1,fe=null,Ue=null,Ge=null;const bt=async()=>{if(!B){if(Dn.current){R=!0;return}if(I){R=!0;return}I=!0;try{if(!await zi(t)||B)return;await Mo(t,M)}catch(Xt){console.warn("Frozen git-activity refresh failed:",Xt)}finally{I=!1,R&&!B&&(R=!1,window.setTimeout(()=>{bt()},0))}}},an=()=>{R=!0,bt()},Un=async()=>{if(!(B||te||document.visibilityState!=="visible")){te=!0;try{const Xt=await Ce("get_remote_branch_head_sha",{repoPath:t,branch:M});if(B)return;if(Xt==null){Fo(!0);return}bn(Xt);const bs=await Ce("get_commit_metadata",{repoPath:t,sha:Xt}).catch(()=>null);Fn(bs&&bs.subject.trim().length>0?bs:null);const Pt=U==null?void 0:U.headSha,Sn=Pt?await Ce("get_merge_base",{repoPath:t,leftSha:Xt,rightSha:Pt}).catch(()=>null):null;if(kn(Sn),Fo(!0),fe==null){fe=Xt;return}if(Xt===fe)return;fe=Xt,await Mo(t,M)}catch(Xt){console.warn("Remote tip refresh failed:",Xt)}finally{te=!1}}};return Ue=window.setInterval(()=>{Un()},15e3),Un(),Mc("git-activity",Xt=>{Ni(Xt.payload.repoPath)===t&&(Bo(t,!0),an())}).then(Xt=>{B?Xt():Ge=Xt}).catch(console.error),()=>{B=!0,bn(null),Fn(null),kn(null),Fo(!1),Ue!=null&&window.clearInterval(Ue),Ge&&Ge()}},[t,M,Ss]);async function To(){if(t){tn(!0),$e(null);try{await Ce("authenticate_github");const B=await Ce("get_github_auth_status");Zt(B),B.authenticated?await ks(t):B.message&&$e(B.message)}catch(B){$e(B instanceof Error?B.message:String(B))}finally{tn(!1)}}}_.useEffect(()=>{ve({}),is.current=null,tn(!1),Zt(null),$e(null),jt([]),je(null)},[t]),_.useEffect(()=>{var an,Un,Xt,bs;if(!t||!M){ve({}),at({}),Re({}),et({}),Qe({}),is.current=null;return}const B=g.map(Pt=>{var Sn;return`${Pt.name}:${Pt.headSha}:${(Sn=Pt.parentBranch)!=null?Sn:""}:${Pt.commitsAhead}`}).join("|"),R=b.map(Pt=>{var Sn,Rn;return`${Pt.fullSha}:${(Rn=(Sn=Pt.parentShas)==null?void 0:Sn[1])!=null?Rn:""}`}).join("|"),I=`${t}|${M}|${B}|${R}`;if(is.current===I)return;is.current=I;const te={},fe={};for(const Pt of g){if(Pt.name===M)continue;const Sn=S.filter(Rn=>Rn.branch===Pt.name).map(Rn=>{var D;return{fullSha:Rn.fullSha,sha:Rn.sha,parentSha:(D=Rn.parentSha)!=null?D:null,message:Rn.message,author:Rn.author,date:Rn.date,kind:"commit"}});te[Pt.name]=Sn,fe[Pt.name]=Sn.length}const Ue=new Map;for(const Pt of S)Ue.set(Pt.fullSha,Pt.branch);const Ge=Pt=>{if(!Pt)return null;const Sn=Ue.get(Pt);if(Sn)return Sn;for(const[Rn,D]of Ue.entries())if(Rn.startsWith(Pt)||Pt.startsWith(Rn))return D;return null},bt={[M]:null};for(const Pt of g){if(Pt.name===M){bt[Pt.name]=null;continue}const Sn=S.filter(F=>F.branch===Pt.name),Rn=new Set(Sn.map(F=>F.fullSha)),D=(Un=(an=Sn.filter(F=>{var T;const G=(T=F.parentSha)!=null?T:null;return!G||!Rn.has(G)}).sort((F,G)=>{const T=new Date(F.date).getTime()-new Date(G.date).getTime();return T!==0?T:F.fullSha.localeCompare(G.fullSha)})[0])==null?void 0:an.parentSha)!=null?Un:null,L=Ge(D);bt[Pt.name]=(bs=(Xt=L!=null?L:Cs.current[Pt.name])!=null?Xt:Pt.parentBranch)!=null?bs:null}ve({}),at(te),Re(bt),et(Pt=>{const Sn={};for(const Rn of g){const D=Pt[Rn.name];D!=null&&Number.isFinite(D)&&(Sn[Rn.name]=D)}return Sn}),Qe(fe)},[t,M,g,b,S]),_.useEffect(()=>{if(!ct){it(!1);return}it(!0);const B=window.setTimeout(()=>{it(!1)},nx),R=window.setTimeout(()=>{je(null)},nx+Ak);return()=>{window.clearTimeout(B),window.clearTimeout(R)}},[ct]),_.useEffect(()=>{if(!t||g.length===0)return;const B=te=>new Promise(fe=>setTimeout(fe,te));async function R(){const fe=`${await Ce("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${fe}`),await B(800),await Ce("screenshot",{path:`${fe}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${fe}`)}const I=te=>{if((te.metaKey||te.ctrlKey)&&!te.shiftKey&&!te.altKey&&te.key.toLowerCase()==="b"){te.preventDefault(),Ds(fe=>!fe);return}(te.metaKey||te.ctrlKey)&&te.shiftKey&&te.key==="S"&&(te.preventDefault(),R())};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[t,i,g]);async function _o(B){if(!t)return;je(null);const R=/^STASH:(\d+)$/.exec(B.commitSha);if(R){try{const I=parseInt(R[1],10),te=await Ce("apply_stash_restore",{repoPath:t,stashIndex:I});X(te),await Wn(t);const fe=`Stash ${I+1}`,Ue=te.branchName?` on branch ${te.branchName}`:" at the stash base (detached HEAD)";je({kind:"success",message:`Restored ${fe}${Ue}; stash applied and dropped (uncommitted changes).`})}catch(I){const te=I instanceof Error?I.message:String(I);je({kind:"error",message:te}),console.error("Failed to apply stash:",te)}return}if(B.branchName){const I=(fe,Ue)=>{const Ge=fe.replace(/\\/g,"/").replace(/\/+$/,""),bt=Ue.replace(/\\/g,"/").replace(/\/+$/,"");return Ge===bt||Ge.toLowerCase()===bt.toLowerCase()},te=Z.find(fe=>fe.pathExists===!1||fe.isCurrent||t&&I(fe.path,t)?!1:fe.branchName===B.branchName);if(te){await Ks(te.path);return}}try{let I="";(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Ce("stash_push",{repoPath:t,includeUntracked:!0}),I="Stashed local changes (including untracked), then ",await Wn(t));const fe=B.branchName?await Ce("checkout_branch",{repoPath:t,branchName:B.branchName}):await Ce("checkout_ref",{repoPath:t,refName:B.commitSha}),Ue=await Ce("get_checked_out_ref",{repoPath:t}).catch(()=>fe);X(Ue),await Wn(t);const Ge=Ue.branchName?Ue.branchName:`${Ue.headSha.slice(0,7)} (detached)`;je({kind:"success",message:`${I}Checked out ${Ge}`})}catch(I){const te=I instanceof Error?I.message:String(I);je({kind:"error",message:te}),console.error("Failed to checkout commit:",te)}}async function go(){if(!(!t||nt)){je(null),Lt(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){je({kind:"error",message:"No local changes to stash."});return}await Ce("stash_push",{repoPath:t,includeUntracked:!0}),await io(),await Wn(t),je({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(B){const R=B instanceof Error?B.message:String(B);je({kind:"error",message:R}),console.error("Failed to stash:",R)}finally{Lt(!1)}}}async function ts(B){if(!t||wt)return!1;const R=B.trim();if(!R)return je({kind:"error",message:"Enter a commit message."}),!1;je(null),gt(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return je({kind:"error",message:"No local changes to commit."}),!1;const te=await Ce("commit_working_tree",{repoPath:t,message:R});return X(te),await io(),await Wn(t),je({kind:"success",message:"Committed local changes."}),!0}catch(I){const te=I instanceof Error?I.message:String(I);return je({kind:"error",message:te}),console.error("Failed to commit:",te),!1}finally{gt(!1)}}async function yo(){if(!t||nn)return!1;je(null),_t(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return je({kind:"error",message:"No local changes to stage."}),!1;const R=await Ce("stage_working_tree",{repoPath:t});return X(R),await io(),await Wn(t),je({kind:"success",message:"Staged all changes."}),!0}catch(B){const R=B instanceof Error?B.message:String(B);return je({kind:"error",message:R}),console.error("Failed to stage:",R),!1}finally{_t(!1)}}async function qn(B,R){if(!(!t||Vt)){en(!0),je(null);try{const I=/^STASH:(\d+)$/.exec(B);let te;if(I){const fe=parseInt(I[1],10);te=await Ce("move_stash_to_new_branch",{repoPath:t,stashIndex:fe,branchName:R})}else te=await Ce("create_branch_from_uncommitted",{repoPath:t,branchName:R});X(te),await Wn(t),je({kind:"success",message:`Moved to new branch "${R}"`})}catch(I){const te=I instanceof Error?I.message:String(I);je({kind:"error",message:te}),console.error("Failed to create branch from node:",te)}finally{en(!1)}}}async function Qs(B){if(!(!t||Vt)){en(!0),je(null);try{const R=await Ce("create_root_branch",{repoPath:t,branchName:B});X(R),await Wn(t),je({kind:"success",message:`Created new root branch "${B}"`})}catch(R){const I=R instanceof Error?R.message:String(R);je({kind:"error",message:I}),console.error("Failed to create root branch:",I)}finally{en(!1)}}}async function Jo(B,R){if(!t)return;const I=Array.from(new Set(B.filter(te=>!!te&&te!==R)));if(I.length!==0){je(null),Tt(!0);try{let te=null;for(const fe of I)te=await Ce("merge_ref_into_branch",{repoPath:t,sourceRef:fe,targetBranch:R});await Wn(t),te&&X(te),je({kind:"success",message:I.length===1?`Merged ${I[0].slice(0,7)} into ${R}`:`Merged ${I.length} commits into ${R}`})}catch(te){const fe=te instanceof Error?te.message:String(te);je({kind:"error",message:fe}),console.error("Failed to merge refs into branch:",fe)}finally{Tt(!1)}}}async function ei(){if(!(!t||Ct)){je(null),zt(!0);try{let B=[];try{B=await Ce("push_all_unpushed_branches",{repoPath:t})}catch(R){const I=R instanceof Error?R.message:String(R);if(!/non-fast-forward|fetch first|rejected/i.test(I))throw R;const fe=U==null?void 0:U.branchName;if(!fe)throw R;const Ue=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Ce("pull_branch_with_strategy",{repoPath:t,branchName:fe,rebase:Ue}),B=await Ce("push_all_unpushed_branches",{repoPath:t})}await io(),await Zo(t),je({kind:"success",message:B.length>0?B.length===1?`Pushed ${B[0].branchName}`:`Pushed ${B.length} branches`:"Everything local is already pushed."})}catch(B){const R=B instanceof Error?B.message:String(B);je({kind:"error",message:R}),console.error("Failed to push all branches:",R)}finally{zt(!1)}}}async function $i(){if(!(!t||Ct)){je(null),zt(!0);try{const B=await Ce("push_current_branch",{repoPath:t});await io(),await Zo(t),je({kind:"success",message:`Pushed ${B.branchName}`})}catch(B){const R=B instanceof Error?B.message:String(B);if(/non-fast-forward|fetch first|rejected/i.test(R)){const te=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const fe=U==null?void 0:U.branchName;if(!fe)throw new Error("Cannot resolve current branch for pull.");await Ce("pull_branch_with_strategy",{repoPath:t,branchName:fe,rebase:te});const Ue=await Ce("push_current_branch",{repoPath:t});await io(),await Zo(t),je({kind:"success",message:`Pulled (${te?"rebase":"merge"}) and pushed ${Ue.branchName}`});return}catch(fe){const Ue=fe instanceof Error?fe.message:String(fe);je({kind:"error",message:Ue}),console.error("Failed to resolve non-fast-forward:",Ue);return}}je({kind:"error",message:R}),console.error("Failed to push current branch:",R)}finally{zt(!1)}}}async function fi(B){var I;if(!t||Ct)return;const R=Array.from(new Map(B.filter(te=>te.branchName&&te.targetSha).map(te=>[te.branchName,te])).values());if(R.length!==0){je(null),zt(!0);try{for(const te of R)try{await Ce("push_branch",{repoPath:t,branchName:te.branchName,targetSha:te.targetSha})}catch(fe){const Ue=fe instanceof Error?fe.message:String(fe);if(!/non-fast-forward|fetch first|rejected/i.test(Ue))throw fe;const bt=window.confirm(`Push rejected for ${te.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Ce("pull_branch_with_strategy",{repoPath:t,branchName:te.branchName,rebase:bt}),await Ce("push_branch",{repoPath:t,branchName:te.branchName,targetSha:te.targetSha})}await Wn(t),je({kind:"success",message:R.length===1?`Pushed ${R[0].branchName} through ${(I=R[0].targetSha)==null?void 0:I.slice(0,7)}`:`Pushed ${R.length} selected commit ranges`})}catch(te){const fe=te instanceof Error?te.message:String(te);je({kind:"error",message:fe}),console.error("Failed to push selected commits:",fe)}finally{zt(!1)}}}async function hi(B){var Ue;if(!t||ft)return;const R=Array.from(new Set(B.branchNames.filter(Ge=>Ge&&Ge!==M))),I=!!B.discardUncommittedChanges,te=(Ue=B.stashIndices)!=null?Ue:[],fe=Array.from(new Set(te)).sort((Ge,bt)=>bt-Ge);if(!(R.length===0&&!I&&fe.length===0)){je(null),H(!0);try{for(const an of fe)await Ce("stash_drop",{repoPath:t,stashIndex:an});const Ge=R.length>0||I?await Ce("delete_selected_elements",{repoPath:t,branchNames:R,discardUncommittedChanges:I}):{deletedBranches:[],discardedUncommittedChanges:!1};await Wn(t);const bt=[];fe.length>0&&bt.push(fe.length===1?`removed stash ${fe[0]+1}`:`removed ${fe.length} stashes`),Ge.discardedUncommittedChanges&&bt.push("discarded local uncommitted changes"),Ge.deletedBranches.length>0&&bt.push(Ge.deletedBranches.length===1?`deleted ${Ge.deletedBranches[0]}`:`deleted ${Ge.deletedBranches.length} branches`),je({kind:"success",message:bt.length>0?bt.join(" and "):"Nothing to delete."})}catch(Ge){const bt=Ge instanceof Error?Ge.message:String(Ge);je({kind:"error",message:bt}),console.error("Failed to delete selected elements:",bt)}finally{H(!1)}}}function zo(B){B&&(Ye(B),le(R=>R+1))}function la(B){B&&(Le(B),le(R=>R+1))}const{enrichedBranches:zs,enrichedBranchCommitPreviews:Ns,enrichedBranchUniqueAheadCounts:Zs,enrichedDirectCommits:Et,enrichedUnpushedDirectCommits:Xo,visualCheckedOutRef:yn}=_.useMemo(()=>{var Ne,qe,pt,St,ht,dt,Bn,on,cn,Qt,Ln,Ht,Yt,ds,On,Ys,bo,as,ni,pi,_i,ns,gi,Ci,mr,Pr,Hr;const B=q5(Be,g,S,Ae,We,M,(Ne=U==null?void 0:U.hasUncommittedChanges)!=null?Ne:!1);let R=B.branches,I=B.directCommits,te=j,fe=B.branchCommitPreviews,Ue=B.branchUniqueAheadCounts,Ge=U;const bt=$t?I.some(vn=>vn.fullSha===$t||vn.sha===$t.slice(0,7)):!0;if($t&&rt&&!bt){const vn=(dt=(ht=(qe=I.find(Do=>Do.fullSha===rt||Do.sha===rt.slice(0,7)))==null?void 0:qe.date)!=null?ht:(St=(pt=fe[M])==null?void 0:pt.find(Do=>Do.fullSha===rt||Do.sha===rt.slice(0,7)))==null?void 0:St.date)!=null?dt:null,fs=vn?new Date(new Date(vn).getTime()+1e3).toISOString():new Date().toISOString(),Io=(Qt=rt!=null?rt:(Bn=R.find(Do=>Do.name===M))==null?void 0:Bn.headSha)!=null?Qt:(cn=(on=I[0])==null?void 0:on.fullSha)!=null?cn:null,ki={fullSha:$t,sha:$t.slice(0,7),parentSha:Io,message:((Ln=kt==null?void 0:kt.subject)==null?void 0:Ln.trim())||`Remote commit on origin/${M}`,author:((Ht=kt==null?void 0:kt.author)==null?void 0:Ht.trim())||"Unknown",date:fs,kind:"commit",isRemote:!0};I=[{fullSha:$t,sha:$t.slice(0,7),parentSha:Io,parentShas:Io?[Io]:[],childShas:[],branch:M,message:ki.message,author:ki.author,date:fs,kind:"commit",isRemote:!0},...I],fe={...fe,[M]:[ki,...(Yt=fe[M])!=null?Yt:[]]},R=R.map(Do=>Do.name===M?{...Do,headSha:$t,lastCommitDate:fs}:Do)}if(!!$t&&!!rt&&!bt&&(U==null?void 0:U.branchName)===M&&U.headSha!==$t&&(U.hasUncommittedChanges||j.length>0)){const vn=`${M} (local)`,fs=new Set(j.map(Kn=>Kn.fullSha));U!=null&&U.headSha&&fs.add(U.headSha);const Io=(bo=(Ys=(ds=j[0])==null?void 0:ds.date)!=null?Ys:U!=null&&U.headSha?(On=I.find(Kn=>Kn.fullSha===U.headSha))==null?void 0:On.date:void 0)!=null?bo:new Date().toISOString();R.some(Kn=>Kn.name===vn)||(R=[...R,{name:vn,commitsAhead:Math.max(1,fs.size),commitsBehind:0,lastCommitDate:Io,lastCommitAuthor:(as=U==null?void 0:U.branchName)!=null?as:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,fs.size),headSha:(_i=U==null?void 0:U.headSha)!=null?_i:(pi=(ni=j[0])==null?void 0:ni.fullSha)!=null?pi:"WORKING_TREE",parentBranch:M}]),I=I.map(Kn=>Kn.branch===M&&fs.has(Kn.fullSha)?{...Kn,branch:vn}:Kn),te=te.map(Kn=>Kn.branch===M&&fs.has(Kn.fullSha)?{...Kn,branch:vn}:Kn);const ki=(ns=fe[M])!=null?ns:[],Go=ki.filter(Kn=>Kn.fullSha==="WORKING_TREE"||fs.has(Kn.fullSha)),Do=ki.filter(Kn=>!Go.includes(Kn));Go.length>0&&(fe={...fe,[M]:Do,[vn]:[...Go,...(gi=fe[vn])!=null?gi:[]]}),Ue={...Ue,[vn]:Math.max(1,fs.size)},(Ge==null?void 0:Ge.branchName)===M&&(Ge={...Ge,branchName:vn})}if(!(Ge!=null&&Ge.hasUncommittedChanges))return{enrichedBranches:R,enrichedDirectCommits:I,enrichedUnpushedDirectCommits:te,enrichedBranchCommitPreviews:fe,enrichedBranchUniqueAheadCounts:Ue,visualCheckedOutRef:Ge};const Xt=Ge.headSha||Ge.parentSha||null,bs=(mr=(Ci=I[0])==null?void 0:Ci.fullSha)!=null?mr:null,Pt=(vn,fs)=>!vn||!fs?!1:vn===fs||vn.startsWith(fs)||fs.startsWith(vn),Sn=[{name:M,headSha:bs!=null?bs:"",isDefault:!0},...R.map(vn=>({name:vn.name,headSha:vn.headSha,isDefault:!1}))],Rn=Ge.branchName?Sn.find(vn=>vn.name===Ge.branchName):void 0,D=Xt?Sn.filter(vn=>Pt(vn.headSha,Xt)):[],L=(Pr=Rn!=null?Rn:D.find(vn=>vn.isDefault))!=null?Pr:D[0],F=L&&!L.isDefault?R.find(vn=>vn.name===L.name):void 0,G=(()=>{var fs;if(!Xt)return null;const vn=I.find(Io=>Pt(Io.fullSha,Xt)||Pt(Io.sha,Xt));if(vn!=null&&vn.date)return vn.date;if(F){const Io=((fs=fe[F.name])!=null?fs:[]).find(ki=>Pt(ki.fullSha,Xt)||Pt(ki.sha,Xt));if(Io!=null&&Io.date)return Io.date}return null})(),T=G?new Date(G).getTime():Number.NaN,V=Date.now(),ie=Number.isFinite(T)?Math.max(V,T+1):V,oe=new Date(ie).toISOString(),ye={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Xt,message:"Local uncommitted changes",author:"You",date:oe,kind:"uncommitted"};return F?{enrichedBranches:R.map(fs=>fs.name===F.name?{...fs,commitsAhead:fs.commitsAhead+1,unpushedCommits:fs.unpushedCommits+1,lastCommitDate:oe,headSha:"WORKING_TREE"}:fs),enrichedDirectCommits:I,enrichedUnpushedDirectCommits:te,enrichedBranchCommitPreviews:{...fe,[F.name]:[ye,...fe[F.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ue,[F.name]:Math.max(0,(Hr=Object.prototype.hasOwnProperty.call(Ue,F.name)?Ue[F.name]:F.commitsAhead)!=null?Hr:0)+1},visualCheckedOutRef:Ge}:{enrichedBranches:R,enrichedBranchCommitPreviews:{...fe,[M]:[ye,...fe[M]||[]]},enrichedBranchUniqueAheadCounts:{...Ue},enrichedDirectCommits:I,enrichedUnpushedDirectCommits:te,visualCheckedOutRef:Ge}},[g,Ae,We,U,M,S,kt,rt,$t,Be,j]);_.useEffect(()=>{var te;if(!(!Dt&&!Je&&($t==null||ho&&rt!=null)))return;const R=yn!=null&&yn.hasUncommittedChanges?"WORKING_TREE":(te=yn==null?void 0:yn.headSha)!=null?te:null;if(!R)return;const I=`${t!=null?t:"__no-repo__"}|${hn}|${R}`;Xn.current!==I&&(Xn.current=I,Ye(R),le(fe=>fe+1))},[ho,Je,hn,Dt,rt,$t,t,yn==null?void 0:yn.hasUncommittedChanges,yn==null?void 0:yn.headSha]),_.useEffect(()=>{Xn.current=null},[t]);const $o=_.useMemo(()=>{const B={...Ke};return B[M]=null,B},[Ke,M,zs]),ti=_.useMemo(()=>{var B;return(B=Dw(zs,M,$o,_e))!=null?B:pp(zs,M,Ns,$o)},[zs,M,Ns,$o,_e]),Ao=_.useMemo(()=>Oc({lanes:ti,branches:zs,mergeNodes:b,directCommits:Et,unpushedDirectCommits:Xo,defaultBranch:M,branchCommitPreviews:Ns,branchParentByName:$o,branchUniqueAheadCounts:Zs,manuallyOpenedClumps:Pn,manuallyClosedClumps:Es,isDebugOpen:!1,gridSearchQuery:Se,gridFocusSha:Me,checkedOutRef:yn!=null?yn:null,orientation:hn}),[ti,zs,b,Et,Xo,M,Ns,$o,Zs,Pn,Es,Se,Me,(ln=yn==null?void 0:yn.headSha)!=null?ln:null,(mn=yn==null?void 0:yn.branchName)!=null?mn:null,hn]),xo=_.useMemo(()=>{var B;return Me&&(B=Ao.clusterKeyByCommitId.get(Me))!=null?B:null},[Ao.clusterKeyByCommitId,Me]),mi=_.useMemo(()=>{if(!xo||Es.has(xo))return Pn;const B=new Set(Pn);return B.add(xo),B},[Es,Pn,xo]),C=_.useMemo(()=>{if(!xo)return Es;const B=new Set(Es);return B.delete(xo),B},[Es,xo]),Y=_.useMemo(()=>Oc({lanes:ti,branches:zs,mergeNodes:b,directCommits:Et,unpushedDirectCommits:Xo,defaultBranch:M,branchCommitPreviews:Ns,branchParentByName:$o,branchUniqueAheadCounts:Zs,manuallyOpenedClumps:mi,manuallyClosedClumps:C,isDebugOpen:!1,gridSearchQuery:Se,gridFocusSha:Me,checkedOutRef:yn!=null?yn:null,orientation:hn}),[ti,zs,b,Et,Xo,M,Ns,$o,Zs,mi,C,Se,Me,(Nn=yn==null?void 0:yn.headSha)!=null?Nn:null,(Hn=yn==null?void 0:yn.branchName)!=null?Hn:null,hn]);_.useEffect(()=>{try{const B=window.localStorage.getItem(sx);if(B){const I=Number(B);Number.isFinite(I)&&qt(Math.min(lx,Math.max(rx,I)))}const R=window.localStorage.getItem(ox);R!=null&&Ds(R==="true")}catch{}},[]),_.useEffect(()=>{Ro.current=Co},[Co]),_.useEffect(()=>{const B=no.current;B&&(B.style.width=An?"0px":`${Co}px`)},[Co,An]),_.useEffect(()=>{try{window.localStorage.setItem(ox,String(An))}catch{}},[An]);const re=B=>{const R=Ps.current;if(!R)return;const I=R.startWidth+(B-R.startX);R.pendingWidth=Math.min(lx,Math.max(rx,I));const te=no.current;te&&(te.style.width=`${R.pendingWidth}px`)},Te=(B,R)=>{const I=Ps.current;if(I&&!(R!=null&&I.pointerId!==R)){Ps.current=null,document.body.style.cursor="",document.body.style.userSelect="",qt(I.pendingWidth);try{window.localStorage.setItem(sx,String(I.pendingWidth))}catch{}}},Xe=B=>{B.button===0&&(B.preventDefault(),Ps.current={startX:B.clientX,startWidth:Ro.current,pendingWidth:Ro.current,pointerId:B.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",B.currentTarget.setPointerCapture(B.pointerId))},st=B=>{const R=Ps.current;!R||R.pointerId!==B.pointerId||re(B.clientX)},Kt=B=>{if(Ps.current){try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Te("pointerup",B.pointerId)}},Wt=B=>{if(Ps.current){try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Te("pointercancel",B.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:no,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:An?64:Co},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":An?"Open sidebar":"Collapse sidebar",onClick:()=>Ds(B=>!B),children:An?l.jsx(ww,{className:"h-4 w-4 shrink-0"}):l.jsx(bw,{className:"h-4 w-4 shrink-0"})}),l.jsx(Ek,{className:Dk("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:An,projects:Qi,activeProjectPath:t,onSelectProject:Gn,onAddProject:di,onRemoveProject:Yn,onReorderProjects:Oi,onRevealProjectInFinder:jo,projectLoading:Je||(p&&t?!((Mn=d[t])!=null&&Mn.loaded):!1),projectError:yt,checkedOutRef:U,showCommits:!1,manuallyOpenedClumpsByProject:W,manuallyClosedClumpsByProject:De,manuallyOpenedClumps:mi,manuallyClosedClumps:C,setManuallyOpenedClumps:ys,setManuallyClosedClumps:us,gridLayoutModel:Y,onSelectCommit:zo,onSelectBranch:la}),An?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Xe,onPointerMove:st,onPointerUp:Kt,onPointerCancel:Wt,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(lS,{branches:zs,mergeNodes:b,directCommits:Et,unpushedDirectCommits:Xo,unpushedCommitShasByBranch:O,openPRs:xt,defaultBranch:M,branchCommitPreviews:Ns,branchParentByName:$o,branchUniqueAheadCounts:Zs,gridSearchQuery:Se,gridSearchJumpToken:ee,gridSearchJumpDirection:z,gridFocusSha:Me,onGridSearchResultCountChange:ne,onGridSearchResultIndexChange:de,onGridSearchFocusChange:Ye,checkedOutRef:yn,onCommitClick:_o,onMergeRefsIntoBranch:Jo,mergeInProgress:mt,onPushAllBranches:ei,onPushCurrentBranch:$i,onPushCommitTargets:fi,pushInProgress:Ct,onDeleteSelection:hi,deleteInProgress:ft,worktrees:Z,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Eo,removeWorktreeInProgress:me,onSwitchToWorktree:Ks,onStashLocalChanges:go,stashInProgress:nt,stashDisabled:!1,onCommitLocalChanges:ts,commitInProgress:wt,commitDisabled:!1,onStageAllChanges:yo,stageInProgress:nn,onCreateBranchFromNode:qn,onCreateRootBranch:Qs,createBranchFromNodeInProgress:Vt,isMutationBusy:Rt,isDebugOpen:mo,onDebugClose:()=>So(!1),onInteractionChange:Jt,manuallyOpenedClumps:mi,manuallyClosedClumps:C,setManuallyOpenedClumps:ys,setManuallyClosedClumps:us,layoutModel:Y,orientation:hn,gridHudProps:Qo})]})]})})})}var Bk=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Lk={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Bk}var ws=Lk,Ok=`.icon-transitions-module__iconState___uqK9J {
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
}`,zk={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Ok}var _s=zk,$k=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ik=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Pk=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Hk=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${_s.iconState} ${n?_s.hiddenScaled:_s.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${_s.iconState} ${n?_s.visibleScaled:_s.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Uk=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${_s.iconStateFast} ${i?_s.visibleScaled:u?_s.sending:_s.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${_s.iconStateFast} ${a?_s.visibleScaled:_s.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${_s.iconStateFast} ${c?_s.visibleScaled:_s.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Vk=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${_s.iconFade} ${n?_s.visible:_s.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${_s.iconFade} ${n?_s.hidden:_s.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Yk=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${_s.iconFadeFast} ${n?_s.hidden:_s.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${_s.iconFadeFast} ${n?_s.visible:_s.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Wk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Fk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),K5=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Xk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Gk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),qk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Kk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Qk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Zk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Jk=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Q5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],gm=Q5.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),ap="feedback-freeze-styles",ym="__agentation_freeze";function e8(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[ym]||(t[ym]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[ym]}var Cn=e8();typeof window<"u"&&!Cn.installed&&(Cn.origSetTimeout=window.setTimeout.bind(window),Cn.origSetInterval=window.setInterval.bind(window),Cn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?Cn.origSetTimeout(t,n):Cn.origSetTimeout((...a)=>{Cn.frozen?Cn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?Cn.origSetInterval(t,n):Cn.origSetInterval((...a)=>{Cn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>Cn.origRAF(n=>{Cn.frozen?Cn.frozenRAFQueue.push(t):t(n)}),Cn.installed=!0);var Ft=Cn.origSetTimeout,t8=Cn.origSetInterval,Sl=Cn.origRAF;function n8(t){return t?Q5.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function s8(){if(typeof document>"u"||Cn.frozen)return;Cn.frozen=!0,Cn.frozenTimeoutQueue=[],Cn.frozenRAFQueue=[];let t=document.getElementById(ap);t||(t=document.createElement("style"),t.id=ap),t.textContent=`
    *${gm},
    *${gm}::before,
    *${gm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),Cn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;n8(i)||(n.pause(),Cn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function ux(){var i;if(typeof document>"u"||!Cn.frozen)return;Cn.frozen=!1;const t=Cn.frozenTimeoutQueue;Cn.frozenTimeoutQueue=[];for(const a of t)Cn.origSetTimeout(()=>{if(Cn.frozen){Cn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Cn.frozenRAFQueue;Cn.frozenRAFQueue=[];for(const a of n)Cn.origRAF(c=>{if(Cn.frozen){Cn.frozenRAFQueue.push(a);return}a(c)});for(const a of Cn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Cn.pausedAnimations=[],(i=document.getElementById(ap))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function xm(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Ud=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[j,E]=_.useState(u),[O,N]=_.useState(!1),[M,q]=_.useState("initial"),[U,X]=_.useState(!1),[Z,he]=_.useState(!1),me=_.useRef(null),pe=_.useRef(null),Se=_.useRef(null),Le=_.useRef(null);_.useEffect(()=>{b&&M!=="exit"&&q("exit")},[b,M]),_.useEffect(()=>{Ft(()=>{q("enter")},0);const ge=Ft(()=>{q("entered")},200),De=Ft(()=>{const P=me.current;P&&(xm(P),P.selectionStart=P.selectionEnd=P.value.length,P.scrollTop=P.scrollHeight)},50);return()=>{clearTimeout(ge),clearTimeout(De),Se.current&&clearTimeout(Se.current),Le.current&&clearTimeout(Le.current)}},[]);const ee=_.useCallback(()=>{Le.current&&clearTimeout(Le.current),N(!0),Le.current=Ft(()=>{N(!1),xm(me.current)},250)},[]);_.useImperativeHandle(k,()=>({shake:ee}),[ee]);const le=_.useCallback(()=>{q("exit"),Se.current=Ft(()=>{p()},150)},[p]),z=_.useCallback(()=>{j.trim()&&h(j.trim())},[j,h]),ce=_.useCallback(ge=>{ge.stopPropagation(),!ge.nativeEvent.isComposing&&(ge.key==="Enter"&&!ge.shiftKey&&(ge.preventDefault(),z()),ge.key==="Escape"&&le())},[z,le]),W=[ws.popup,w?ws.light:"",M==="enter"?ws.enter:"",M==="entered"?ws.entered:"",M==="exit"?ws.exit:"",O?ws.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:pe,className:W,"data-annotation-popup":!0,style:g,onClick:ge=>ge.stopPropagation(),children:[l.jsxs("div",{className:ws.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ws.headerToggle,onClick:()=>{const ge=Z;he(!Z),ge&&Ft(()=>xm(me.current),0)},type:"button",children:[l.jsx("svg",{className:`${ws.chevron} ${Z?ws.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ws.element,children:n})]}):l.jsx("span",{className:ws.element,children:n}),i&&l.jsx("span",{className:ws.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ws.stylesWrapper} ${Z?ws.expanded:""}`,children:l.jsx("div",{className:ws.stylesInner,children:l.jsx("div",{className:ws.stylesBlock,children:Object.entries(S).map(([ge,De])=>l.jsxs("div",{className:ws.styleLine,children:[l.jsx("span",{className:ws.styleProperty,children:ge.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ws.styleValue,children:De}),";"]},ge))})})}),a&&l.jsxs("div",{className:ws.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:me,className:ws.textarea,style:{borderColor:U?x:void 0},placeholder:c,value:j,onChange:ge=>E(ge.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:ce}),l.jsxs("div",{className:ws.actions,children:[y&&l.jsx("div",{className:ws.deleteWrapper,children:l.jsx("button",{className:ws.deleteButton,onClick:y,type:"button",children:l.jsx(Qk,{size:22})})}),l.jsx("button",{className:ws.cancel,onClick:le,children:"Cancel"}),l.jsx("button",{className:ws.submit,style:{backgroundColor:x,opacity:j.trim()?1:.4},onClick:z,disabled:!j.trim(),children:d})]})]})}),o8=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const k=y.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ft(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ft(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Al.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},i8=`.styles-module__tooltip___mcXL2 {
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
}`,a8={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=i8}var dx=a8,Br=({content:t})=>l.jsx(o8,{className:dx.tooltip,content:t,children:l.jsx(Pk,{className:dx.tooltipIcon})}),Mt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Z5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Mt.navigation},{type:"header",label:"Header",...Mt.header},{type:"hero",label:"Hero",...Mt.hero},{type:"section",label:"Section",...Mt.section},{type:"sidebar",label:"Sidebar",...Mt.sidebar},{type:"footer",label:"Footer",...Mt.footer},{type:"modal",label:"Modal",...Mt.modal},{type:"banner",label:"Banner",...Mt.banner},{type:"drawer",label:"Drawer",...Mt.drawer},{type:"popover",label:"Popover",...Mt.popover},{type:"divider",label:"Divider",...Mt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Mt.card},{type:"text",label:"Text",...Mt.text},{type:"image",label:"Image",...Mt.image},{type:"video",label:"Video",...Mt.video},{type:"table",label:"Table",...Mt.table},{type:"grid",label:"Grid",...Mt.grid},{type:"list",label:"List",...Mt.list},{type:"chart",label:"Chart",...Mt.chart},{type:"codeBlock",label:"Code Block",...Mt.codeBlock},{type:"map",label:"Map",...Mt.map},{type:"timeline",label:"Timeline",...Mt.timeline},{type:"calendar",label:"Calendar",...Mt.calendar},{type:"accordion",label:"Accordion",...Mt.accordion},{type:"carousel",label:"Carousel",...Mt.carousel},{type:"logo",label:"Logo",...Mt.logo},{type:"faq",label:"FAQ",...Mt.faq},{type:"gallery",label:"Gallery",...Mt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Mt.button},{type:"input",label:"Input",...Mt.input},{type:"search",label:"Search",...Mt.search},{type:"form",label:"Form",...Mt.form},{type:"tabs",label:"Tabs",...Mt.tabs},{type:"dropdown",label:"Dropdown",...Mt.dropdown},{type:"toggle",label:"Toggle",...Mt.toggle},{type:"stepper",label:"Stepper",...Mt.stepper},{type:"rating",label:"Rating",...Mt.rating},{type:"fileUpload",label:"File Upload",...Mt.fileUpload},{type:"checkbox",label:"Checkbox",...Mt.checkbox},{type:"radio",label:"Radio",...Mt.radio},{type:"slider",label:"Slider",...Mt.slider},{type:"datePicker",label:"Date Picker",...Mt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Mt.avatar},{type:"badge",label:"Badge",...Mt.badge},{type:"tag",label:"Tag",...Mt.tag},{type:"breadcrumb",label:"Breadcrumb",...Mt.breadcrumb},{type:"pagination",label:"Pagination",...Mt.pagination},{type:"progress",label:"Progress",...Mt.progress},{type:"alert",label:"Alert",...Mt.alert},{type:"toast",label:"Toast",...Mt.toast},{type:"notification",label:"Notification",...Mt.notification},{type:"tooltip",label:"Tooltip",...Mt.tooltip},{type:"stat",label:"Stat",...Mt.stat},{type:"skeleton",label:"Skeleton",...Mt.skeleton},{type:"chip",label:"Chip",...Mt.chip},{type:"icon",label:"Icon",...Mt.icon},{type:"spinner",label:"Spinner",...Mt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Mt.pricing},{type:"testimonial",label:"Testimonial",...Mt.testimonial},{type:"cta",label:"CTA",...Mt.cta},{type:"productCard",label:"Product Card",...Mt.productCard},{type:"profile",label:"Profile",...Mt.profile},{type:"feature",label:"Feature",...Mt.feature},{type:"team",label:"Team",...Mt.team},{type:"login",label:"Login",...Mt.login},{type:"contact",label:"Contact",...Mt.contact}]}],ia={};for(const t of Z5)for(const n of t.items)ia[n.type]=n;function Fe({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function cs({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function li({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function r8({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(cs,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Fe,{w:t*.06}),l.jsx(Fe,{w:t*.07}),l.jsx(Fe,{w:t*.05}),l.jsx(Fe,{w:t*.06})]}),l.jsx(cs,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function l8({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Fe,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Fe,{w:t*.6}),l.jsx(Fe,{w:t*.4}),l.jsx(cs,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function c8({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Fe,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(cs,{w:10,h:10,radius:2}),l.jsx(Fe,{w:t*(.4+c*17%30/100)})]},c))]})}function u8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"70%",h:2}),l.jsx(Fe,{w:"60%",h:2})]},c))})}function d8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"90%"}),l.jsx(Fe,{w:"70%"}),l.jsx(Fe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(cs,{w:70,h:26,radius:4}),l.jsx(cs,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function f8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:4,strong:!0}),l.jsx(Fe,{w:"95%",h:2}),l.jsx(Fe,{w:"85%",h:2}),l.jsx(Fe,{w:"50%",h:2})]})]})}function h8({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Fe,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Fe,{w:`${70+u*13%25}%`,h:2},u))]})}function m8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function p8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function _8({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(li,{size:8}),l.jsx(Fe,{w:`${55+c*17%35}%`,h:2})]},c))})}function g8({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Fe,{w:Math.max(20,t*.5),h:3,strong:!0})})}function y8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Fe,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Fe,{w:"40%",h:2})})]})}function x8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:60+c*17%30,h:2}),l.jsx(cs,{w:"100%",h:28,radius:4})]},c)),l.jsx(cs,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function b8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Fe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"65%",h:2}),l.jsx(Fe,{w:"75%",h:2})]})]})}function v8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function w8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:Math.max(16,t*.5),h:2,strong:!0})})}function S8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Fe,{w:t*.35})]})}function C8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Fe,{w:t*.3,h:4,strong:!0}),l.jsx(Fe,{w:t*.7}),l.jsx(Fe,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(cs,{w:"33%",h:"100%",radius:4}),l.jsx(cs,{w:"33%",h:"100%",radius:4}),l.jsx(cs,{w:"33%",h:"100%",radius:4})]})]})}function k8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(cs,{w:"100%",h:"100%",radius:4},u))})}function j8({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Fe,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Fe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function M8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function E8({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(li,{size:Math.min(14,n*.4)}),l.jsx(Fe,{w:"50%",h:2})]})}function T8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function A8({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function D8({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(cs,{w:a,h:`${d}%`,radius:2},u)})})}function N8({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(cs,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function R8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function B8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Fe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function L8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(cs,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function O8({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function z8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Fe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function $8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(cs,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(li,{size:5}),l.jsx(li,{size:5})]})]})}function I8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Fe,{w:t*.4,h:3,strong:!0}),l.jsx(Fe,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(Fe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(cs,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function P8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"75%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(li,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Fe,{w:60,h:3,strong:!0}),l.jsx(Fe,{w:40,h:2})]})]})]})}function H8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Fe,{w:t*.35}),l.jsx(cs,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function U8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"40%",h:3,strong:!0}),l.jsx(Fe,{w:"70%",h:2})]})]})}function V8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Fe,{w:t*.4,h:3,strong:!0}),l.jsx(cs,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Y8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Fe,{w:t*.5,h:2}),l.jsx(Fe,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Fe,{w:t*.3,h:2})]})}function W8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function F8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Fe,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function X8({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function G8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function q8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(li,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function K8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Fe,{w:t*.4,h:2}),l.jsx(Fe,{w:t*.25,h:2})]})}function Q8({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(li,{size:6}),l.jsx(li,{size:6}),l.jsx(li,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Fe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function Z8({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Fe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function J8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"50%",h:3,strong:!0}),l.jsx(Fe,{w:"75%",h:2})]}),l.jsx(Fe,{w:30,h:2})]})}function ej({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"65%",h:4,strong:!0}),l.jsx(Fe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"30%",h:5,strong:!0}),l.jsx(cs,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function tj({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(li,{size:i}),l.jsx(Fe,{w:t*.45,h:4,strong:!0}),l.jsx(Fe,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]})]})]})}function nj({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Fe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Fe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function sj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:3,strong:!0}),l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function oj({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(cs,{w:i,h:i,radius:i*.25}),l.jsx(Fe,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function ij({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Fe,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function aj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function rj({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function lj({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function cj({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function uj({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function dj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function fj({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Fe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function hj({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function mj({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function pj({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(cs,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function _j({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Fe,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(li,{size:a}),l.jsx(Fe,{w:t*.12,h:3,strong:!0}),l.jsx(Fe,{w:t*.08,h:2})]},u))})]})}function gj({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Fe,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Fe,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:Math.min(60,t*.2),h:2}),l.jsx(cs,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(cs,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Fe,{w:t*.4,h:2})]})}function yj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Fe,{w:t*.4,h:4,strong:!0}),l.jsx(Fe,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(cs,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:40,h:2}),l.jsx(cs,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(cs,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Fe,{w:60,h:2}),l.jsx(cs,{w:"100%",h:"100%",radius:4})]}),l.jsx(cs,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var xj={navigation:r8,hero:l8,sidebar:c8,footer:u8,modal:d8,card:f8,text:h8,image:m8,table:p8,list:_8,button:g8,input:y8,form:x8,tabs:b8,avatar:v8,badge:w8,header:S8,section:C8,grid:k8,dropdown:j8,toggle:M8,search:E8,toast:T8,progress:A8,chart:D8,video:N8,tooltip:R8,breadcrumb:B8,pagination:L8,divider:O8,accordion:z8,carousel:$8,pricing:I8,testimonial:P8,cta:H8,alert:U8,banner:V8,stat:Y8,stepper:W8,tag:F8,rating:X8,map:G8,timeline:q8,fileUpload:K8,codeBlock:Q8,calendar:Z8,notification:J8,productCard:ej,profile:tj,drawer:nj,popover:sj,logo:oj,faq:ij,gallery:aj,checkbox:rj,radio:lj,slider:cj,datePicker:uj,skeleton:dj,chip:fj,icon:hj,spinner:mj,feature:pj,team:_j,login:gj,contact:yj};function bj({type:t,width:n,height:i,text:a}){const c=xj[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var vj=`svg[fill=none] {
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
}`,wj={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=vj}var Ie=wj,_l=24,ld=5;function fx(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],j=[];for(const pe of n)i.has(pe.id)||j.push(pe);c&&j.push(...c);for(const pe of j){const Se=pe.x,Le=pe.x+pe.width,ee=pe.x+pe.width/2,le=pe.y,z=pe.y+pe.height,ce=pe.y+pe.height/2;for(const W of S)for(const ge of[Se,Le,ee]){const De=ge-W;Math.abs(De)<ld&&Math.abs(De)<Math.abs(u)&&(u=De)}for(const W of k)for(const ge of[le,z,ce]){const De=ge-W;Math.abs(De)<ld&&Math.abs(De)<Math.abs(d)&&(d=De)}}const E=Math.abs(u)<ld?u:0,O=Math.abs(d)<ld?d:0,N=[],M=new Set,q=h+E,U=p+E,X=y+E,Z=g+O,he=x+O,me=b+O;for(const pe of j){const Se=pe.x,Le=pe.x+pe.width,ee=pe.x+pe.width/2,le=pe.y,z=pe.y+pe.height,ce=pe.y+pe.height/2;for(const W of[Se,ee,Le])for(const ge of[q,X,U])if(Math.abs(ge-W)<.5){const De=`x:${Math.round(W)}`;M.has(De)||(M.add(De),N.push({axis:"x",pos:W}))}for(const W of[le,ce,z])for(const ge of[Z,me,he])if(Math.abs(ge-W)<.5){const De=`y:${Math.round(W)}`;M.has(De)||(M.add(De),N.push({axis:"y",pos:W}))}}return{dx:E,dy:O,guides:N}}function hx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Sj({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[j,E]=_.useState(new Set),[O,N]=_.useState(null),[M,q]=_.useState(null),[U,X]=_.useState(null),[Z,he]=_.useState([]),[me,pe]=_.useState(null),[Se,Le]=_.useState(!1),ee=_.useRef(!1),[le,z]=_.useState(new Set),ce=_.useRef(new Map),W=_.useRef(null),ge=_.useRef(null),De=_.useRef(t);De.current=t;const P=_.useRef(g);P.current=g;const ue=_.useRef(b);ue.current=b;const ne=_.useRef(w);ne.current=w;const ke=_.useRef(x);_.useEffect(()=>{x!==ke.current&&(ke.current=x,E(new Set))},[x]);const de=_.useRef(S);_.useEffect(()=>{if(S!==void 0&&S!==de.current){de.current=S;const Q=new Set(De.current.map($e=>$e.id));Q.size>0&&(z(Q),E(new Set),ge.current=null,Ft(()=>{n([]),z(new Set)},180))}},[S,n]),_.useEffect(()=>{const Q=$e=>{const ct=$e.target;if(!(ct.tagName==="INPUT"||ct.tagName==="TEXTAREA"||ct.isContentEditable)){if(($e.key==="Backspace"||$e.key==="Delete")&&j.size>0){$e.preventDefault();const ot=new Set(j);z(ot),E(new Set),Ft(()=>{n(De.current.filter(it=>!ot.has(it.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes($e.key)&&j.size>0){$e.preventDefault();const ot=$e.shiftKey?20:1,it=$e.key==="ArrowLeft"?-ot:$e.key==="ArrowRight"?ot:0,mt=$e.key==="ArrowUp"?-ot:$e.key==="ArrowDown"?ot:0;n(t.map(Tt=>j.has(Tt.id)?{...Tt,x:Math.max(0,Tt.x+it),y:Math.max(0,Tt.y+mt)}:Tt));return}if($e.key==="Escape"){i?a(null):j.size>0&&E(new Set);return}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[j,i,t,n,a]);const Me=_.useCallback(Q=>{if(Q.button!==0||p||Q.target.closest(`.${Ie.placement}`))return;Q.preventDefault(),Q.stopPropagation();const ct=window.scrollY,je=Q.clientX,ot=Q.clientY;if(i){ge.current="place",d==null||d(!0);let it=!1,mt=je,Tt=ot;const Ct=ft=>{mt=ft.clientX,Tt=ft.clientY;const H=Math.abs(mt-je),J=Math.abs(Tt-ot);if((H>5||J>5)&&(it=!0),it){const ve=Math.min(je,mt),Ae=Math.min(ot,Tt),at=Math.abs(mt-je),Ke=Math.abs(Tt-ot);N({x:ve,y:Ae,w:at,h:Ke}),X({x:ft.clientX+12,y:ft.clientY+12,text:`${Math.round(at)} × ${Math.round(Ke)}`})}},zt=ft=>{window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",zt),N(null),X(null),ge.current=null,d==null||d(!1);const H=Mt[i];let J,ve,Ae,at;it?(J=Math.min(je,mt),ve=Math.min(ot,Tt)+ct,Ae=Math.max(_l,Math.abs(mt-je)),at=Math.max(_l,Math.abs(Tt-ot))):(Ae=H.width,at=H.height,J=je-Ae/2,ve=ot+ct-at/2),J=Math.max(0,J),ve=Math.max(0,ve);const Ke={id:hx(),type:i,x:J,y:ve,width:Ae,height:at,scrollY:ct,timestamp:Date.now()},Re=[...t,Ke];n(Re),E(new Set([Ke.id])),a(null)};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",zt)}else{Q.shiftKey||E(new Set),ge.current="select";let it=!1;const mt=Ct=>{const zt=Math.abs(Ct.clientX-je),ft=Math.abs(Ct.clientY-ot);if((zt>4||ft>4)&&(it=!0),it){const H=Math.min(je,Ct.clientX),J=Math.min(ot,Ct.clientY);q({x:H,y:J,w:Math.abs(Ct.clientX-je),h:Math.abs(Ct.clientY-ot)})}},Tt=Ct=>{if(window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Tt),ge.current=null,it){const zt=Math.min(je,Ct.clientX),ft=Math.min(ot,Ct.clientY)+ct,H=Math.abs(Ct.clientX-je),J=Math.abs(Ct.clientY-ot),ve=new Set(Q.shiftKey?j:new Set);for(const Ae of t)Ae.y-ct,Ae.x+Ae.width>zt&&Ae.x<zt+H&&Ae.y+Ae.height>ft&&Ae.y<ft+J&&ve.add(Ae.id);E(ve)}q(null)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Tt)}},[i,p,t,n,j]),Ye=_.useCallback((Q,$e)=>{var Ke;if(Q.button!==0)return;const ct=Q.target;if(ct.closest(`.${Ie.handle}`)||ct.closest(`.${Ie.deleteButton}`))return;Q.preventDefault(),Q.stopPropagation();let je;Q.shiftKey?(je=new Set(j),je.has($e)?je.delete($e):je.add($e)):j.has($e)?je=new Set(j):je=new Set([$e]),E(je),(je.size!==j.size||[...je].some(Re=>!j.has(Re)))&&((Ke=P.current)==null||Ke.call(P,je,Q.shiftKey));const it=Q.clientX,mt=Q.clientY,Tt=new Map;for(const Re of t)je.has(Re.id)&&Tt.set(Re.id,{x:Re.x,y:Re.y});ge.current="move",d==null||d(!0);let Ct=!1,zt=!1,ft=t,H=0,J=0;const ve=new Map;for(const Re of t)Tt.has(Re.id)&&ve.set(Re.id,{w:Re.width,h:Re.height});const Ae=Re=>{var nn;const _e=Re.clientX-it,et=Re.clientY-mt;if((Math.abs(_e)>2||Math.abs(et)>2)&&(Ct=!0),!Ct)return;if(Re.altKey&&!zt){zt=!0;const _t=[];for(const Vt of t)Tt.has(Vt.id)&&_t.push({...Vt,id:hx(),timestamp:Date.now()});ft=[...t,..._t]}let We=1/0,Qe=1/0,Be=-1/0,tt=-1/0;for(const[_t,Vt]of Tt){const en=ve.get(_t);en&&(We=Math.min(We,Vt.x+_e),Qe=Math.min(Qe,Vt.y+et),Be=Math.max(Be,Vt.x+_e+en.w),tt=Math.max(tt,Vt.y+et+en.h))}const xt={x:We,y:Qe,width:Be-We,height:tt-Qe},{dx:jt,dy:nt,guides:Lt}=fx(xt,ft,new Set(Tt.keys()),void 0,y);he(Lt);const wt=_e+jt,gt=et+nt;H=wt,J=gt,n(ft.map(_t=>{const Vt=Tt.get(_t.id);return Vt?{..._t,x:Math.max(0,Vt.x+wt),y:Math.max(0,Vt.y+gt)}:_t})),(nn=ue.current)==null||nn.call(ue,wt,gt)},at=()=>{var Re;window.removeEventListener("mousemove",Ae),window.removeEventListener("mouseup",at),ge.current=null,d==null||d(!1),he([]),(Re=ne.current)==null||Re.call(ne,H,J,Ct)};window.addEventListener("mousemove",Ae),window.addEventListener("mouseup",at)},[j,t,n,d]),Je=_.useCallback((Q,$e,ct)=>{Q.preventDefault(),Q.stopPropagation();const je=t.find(ve=>ve.id===$e);if(!je)return;E(new Set([$e])),ge.current="resize",d==null||d(!0);const ot=Q.clientX,it=Q.clientY,mt=je.width,Tt=je.height,Ct=je.x,zt=je.y,ft={left:ct.includes("w"),right:ct.includes("e"),top:ct.includes("n"),bottom:ct.includes("s")},H=ve=>{const Ae=ve.clientX-ot,at=ve.clientY-it;let Ke=mt,Re=Tt,_e=Ct,et=zt;ct.includes("e")&&(Ke=Math.max(_l,mt+Ae)),ct.includes("w")&&(Ke=Math.max(_l,mt-Ae),_e=Ct+mt-Ke),ct.includes("s")&&(Re=Math.max(_l,Tt+at)),ct.includes("n")&&(Re=Math.max(_l,Tt-at),et=zt+Tt-Re);const We={x:_e,y:et,width:Ke,height:Re},{dx:Qe,dy:Be,guides:tt}=fx(We,De.current,new Set([$e]),ft,y);he(tt),Qe!==0&&(ft.right?Ke+=Qe:ft.left&&(_e+=Qe,Ke-=Qe)),Be!==0&&(ft.bottom?Re+=Be:ft.top&&(et+=Be,Re-=Be)),n(De.current.map(xt=>xt.id===$e?{...xt,x:_e,y:et,width:Ke,height:Re}:xt)),X({x:ve.clientX+12,y:ve.clientY+12,text:`${Math.round(Ke)} × ${Math.round(Re)}`})},J=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",J),X(null),ge.current=null,d==null||d(!1),he([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",J)},[t,n,d]),He=_.useCallback(Q=>{ge.current=null,z($e=>{const ct=new Set($e);return ct.add(Q),ct}),E($e=>{const ct=new Set($e);return ct.delete(Q),ct}),Ft(()=>{n(De.current.filter($e=>$e.id!==Q)),z($e=>{const ct=new Set($e);return ct.delete(Q),ct})},180)},[n]),Dt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},It=_.useCallback(Q=>{const $e=t.find(ct=>ct.id===Q);$e&&(ee.current=!!$e.text,pe(Q),Le(!1))},[t]),yt=_.useCallback(()=>{me&&(Le(!0),Ft(()=>{pe(null),Le(!1)},150))},[me]);_.useEffect(()=>{u&&me&&yt()},[u]);const lt=_.useCallback(Q=>{me&&(n(t.map($e=>$e.id===me?{...$e,text:Q.trim()||void 0}:$e)),yt())},[me,t,n,yt]),ut=typeof window<"u"?window.scrollY:0,Zt=["nw","ne","se","sw"],fn=k?"#f97316":"#3c82f7",tn=[{dir:"n",cls:Ie.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:fn})})},{dir:"e",cls:Ie.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:fn})})},{dir:"s",cls:Ie.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:fn})})},{dir:"w",cls:Ie.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:fn})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${Ie.overlay} ${c?"":Ie.light} ${i?Ie.placing:""} ${p?Ie.passthrough:""} ${u?Ie.overlayExiting:""} ${k?Ie.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Me,children:t.map(Q=>{var ot;const $e=j.has(Q.id),ct=((ot=ia[Q.type])==null?void 0:ot.label)||Q.type,je=Q.y-ut;return l.jsxs("div",{"data-design-placement":Q.id,className:`${Ie.placement} ${$e?Ie.selected:""} ${le.has(Q.id)?Ie.exiting:""}`,style:{left:Q.x,top:je,width:Q.width,height:Q.height,position:"fixed"},onMouseDown:it=>Ye(it,Q.id),onDoubleClick:()=>It(Q.id),children:[l.jsx("span",{className:Ie.placementLabel,children:ct}),l.jsx("span",{className:`${Ie.placementAnnotation} ${Q.text?Ie.annotationVisible:""}`,children:(Q.text&&ce.current.set(Q.id,Q.text),Q.text||ce.current.get(Q.id)||"")}),l.jsx("div",{className:Ie.placementContent,children:l.jsx(bj,{type:Q.type,width:Q.width,height:Q.height,text:Q.text})}),l.jsx("div",{className:Ie.deleteButton,onMouseDown:it=>it.stopPropagation(),onClick:()=>He(Q.id),children:"✕"}),Zt.map(it=>l.jsx("div",{className:`${Ie.handle} ${Ie[`handle${it.charAt(0).toUpperCase()}${it.slice(1)}`]}`,onMouseDown:mt=>Je(mt,Q.id,it)},it)),tn.map(({dir:it,cls:mt,arrow:Tt})=>l.jsx("div",{className:`${Ie.edgeHandle} ${mt}`,onMouseDown:Ct=>Je(Ct,Q.id,it),children:Tt},it))]},Q.id)})}),me&&(()=>{var zt,ft;const Q=t.find(H=>H.id===me);if(!Q)return null;const $e=Q.y-ut,ct=Q.x+Q.width/2,je=$e-8,ot=$e+Q.height+8,it=je>200,mt=ot<window.innerHeight-100,Tt=Math.max(160,Math.min(window.innerWidth-160,ct));let Ct;return it?Ct={left:Tt,bottom:window.innerHeight-je}:mt?Ct={left:Tt,top:ot}:Ct={left:Tt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Ud,{element:((zt=ia[Q.type])==null?void 0:zt.label)||Q.type,placeholder:Dt[Q.type]||"Label or content text",initialValue:(ft=Q.text)!=null?ft:"",submitLabel:ee.current?"Save":"Set",onSubmit:lt,onCancel:yt,onDelete:ee.current?()=>{lt("")}:void 0,isExiting:Se,lightMode:!c,style:Ct})})(),O&&l.jsx("div",{className:Ie.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),M&&l.jsx("div",{className:Ie.selectBox,style:{left:M.x,top:M.y,width:M.w,height:M.h},"data-feedback-toolbar":!0}),U&&l.jsx("div",{className:Ie.sizeIndicator,style:{left:U.x,top:U.y},"data-feedback-toolbar":!0,children:U.text}),Z.map((Q,$e)=>l.jsx("div",{className:Ie.guideLine,style:Q.axis==="x"?{position:"fixed",left:Q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Q.pos-ut,right:0,height:1},"data-feedback-toolbar":!0},`${Q.axis}-${Q.pos}-${$e}`))]})}function Cj(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ie.fadeTop:""} ${i?Ie.fadeBottom:""}`}var $="currentColor",ze="0.5";function kj({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:ze})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:ze})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:ze,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:ze})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:ze})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:ze,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:ze,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:ze})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:ze})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:ze,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:ze})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:ze})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:ze})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:ze})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:ze})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:ze})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:ze,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:ze,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:ze,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:ze})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:ze,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:ze})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:ze,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:ze})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:ze})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:ze,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:ze}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:ze})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:ze,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:ze,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:ze,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:ze,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:ze,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:ze,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:ze,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:ze}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function jj({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Ie.placeScroll} ${c||""}`,children:Z5.map(d=>l.jsxs("div",{className:Ie.paletteSection,children:[l.jsx("div",{className:Ie.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Ie.paletteItem} ${t===h.type?Ie.active:""} ${u?Ie.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Ie.paletteItemIcon,children:l.jsx(kj,{type:h.type})}),l.jsx("span",{className:Ie.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function Mj({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ft(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Ie.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Ie.rollingNum} ${d==="up"?Ie.exitUp:Ie.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Ie.rollingNum} ${d==="up"?Ie.enterUp:Ie.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Ie.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Ie.rollingNum} ${d==="up"?Ie.exitUp:Ie.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Ie.rollingNum} ${d==="up"?Ie.enterUp:Ie.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function Ej({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,j]=_.useState(!1),[E,O]=_.useState("exit"),[N,M]=_.useState(!1),[q,U]=_.useState(!0),X=_.useRef(0),Z=_.useRef(""),he=_.useRef(0),me=_.useRef(),pe=_.useRef(null),[Se,Le]=_.useState("");_.useEffect(()=>(u?(j(!0),clearTimeout(me.current),cancelAnimationFrame(he.current),he.current=Sl(()=>{he.current=Sl(()=>{O("enter")})})):(cancelAnimationFrame(he.current),O("exit"),clearTimeout(me.current),me.current=Ft(()=>{j(!1),d==null||d()},200)),()=>cancelAnimationFrame(he.current)),[u]);const ee=h>0||a>0,le=h+a;return le>0&&(X.current=le,Z.current=g?le===1?"Component":"Components":le===1?"Change":"Changes"),_.useEffect(()=>{if(ee)N?U(!1):(U(!0),M(!0),Sl(()=>{Sl(()=>{U(!1)})}));else{U(!0);const z=Ft(()=>M(!1),300);return()=>clearTimeout(z)}},[ee]),_.useEffect(()=>{if(!k)return;const z=pe.current;if(!z)return;const ce=()=>Le(Cj(z));ce(),z.addEventListener("scroll",ce,{passive:!0});const W=new ResizeObserver(ce);return W.observe(z),()=>{z.removeEventListener("scroll",ce),W.disconnect()}},[k]),k?l.jsxs("div",{className:`${Ie.palette} ${Ie[E]} ${i?"":Ie.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(me.current),j(!1),O("exit"),d==null||d()))},children:[l.jsxs("div",{className:Ie.paletteHeader,children:[l.jsx("div",{className:Ie.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Ie.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Ie.canvasToggle} ${g?Ie.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Ie.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Ie.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Ie.wireframePurposeWrap} ${g?"":Ie.collapsed}`,children:l.jsx("div",{className:Ie.wireframePurposeInner,children:l.jsx("textarea",{className:Ie.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),l.jsx(jj,{activeType:t,onSelect:n,onDragStart:y,scrollRef:pe,fadeClass:Se,blankCanvas:g}),N&&l.jsx("div",{className:`${Ie.paletteFooterWrap} ${q?Ie.footerHidden:""}`,children:l.jsx("div",{className:Ie.paletteFooterInner,children:l.jsx("div",{className:Ie.paletteFooterInnerContent,children:l.jsxs("div",{className:Ie.paletteFooter,children:[l.jsx("span",{className:Ie.paletteFooterCount,children:l.jsx(Mj,{value:X.current,suffix:Z.current})}),l.jsx("button",{className:Ie.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function El(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function oi(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=El(i)}return null}function Tj(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=El(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Cl(t){var a,c,u,d,h,p,y,g;const n=Tj(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=oi(t,"svg");if(x){const b=El(x);if(b instanceof HTMLElement)return{name:`graphic in ${Cl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=El(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function gc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function cd(t){const n=El(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(j=>j.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function yc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var J5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Aj=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Dj=new Set(["input","textarea","select"]),Nj=new Set(["img","video","canvas","svg"]),Rj=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function ud(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Aj.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Dj.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Nj.has(a)?c=["width","height","objectFit","borderRadius"]:Rj.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!J5.has(h)&&(i[u]=h)}return i}var Bj=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function dd(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of Bj){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!J5.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function Lj(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function fd(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function hd(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=El(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var Oj=new Set(["nav","header","main","section","article","footer","aside"]),rp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},mx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},zj=new Set(["script","style","noscript","link","meta"]),$j=40;function e2(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Ir(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Ir(i)} > ${n}:nth-child(${c})`}return n}function Vd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&rp[a])return rp[a];if(mx[n])return mx[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Cl(t);return u.charAt(0).toUpperCase()+u.slice(1)}function t2(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function n2(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function Ij(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(zj.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<$j)return;const y=Oj.has(d),g=c.getAttribute("role")&&rp[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,w=e2(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Vd(c),tagName:d,selector:Ir(c),role:c.getAttribute("role"),className:t2(c),textSnippet:n2(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function Pj(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=e2(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Vd(t),tagName:t.tagName.toLowerCase(),selector:Ir(t),role:t.getAttribute("role"),className:t2(t),textSnippet:n2(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var px={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},_x=["nw","n","ne","e","se","s","sw","w"],md=24,gx=16,pd=5;function yx(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const X of n)i.has(X.id)||b.push(X.currentRect);a&&b.push(...a);for(const X of b){const Z=X.x,he=X.x+X.width,me=X.x+X.width/2,pe=X.y,Se=X.y+X.height,Le=X.y+X.height/2;for(const ee of[d,h,p])for(const le of[Z,he,me]){const z=le-ee;Math.abs(z)<pd&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const ee of[y,g,x])for(const le of[pe,Se,Le]){const z=le-ee;Math.abs(z)<pd&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<pd?c:0,S=Math.abs(u)<pd?u:0,k=[],j=new Set,E=d+w,O=h+w,N=p+w,M=y+S,q=g+S,U=x+S;for(const X of b){const Z=X.x,he=X.x+X.width,me=X.x+X.width/2,pe=X.y,Se=X.y+X.height,Le=X.y+X.height/2;for(const ee of[Z,me,he])for(const le of[E,N,O])if(Math.abs(le-ee)<.5){const z=`x:${Math.round(ee)}`;j.has(z)||(j.add(z),k.push({axis:"x",pos:ee}))}for(const ee of[pe,Le,Se])for(const le of[M,U,q])if(Math.abs(le-ee)<.5){const z=`y:${Math.round(ee)}`;j.has(z)||(j.add(z),k.push({axis:"y",pos:ee}))}}return{dx:w,dy:S,guides:k}}var Hj=new Set(["script","style","noscript","link","meta","br","hr"]);function xx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Hj.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=gx&&i.height>=gx)return n;n=n.parentElement}return null}function Uj({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,w=_.useRef(t);w.current=t;const[S,k]=_.useState(new Set),[j,E]=_.useState(!1),O=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==O.current&&(O.current=x,b.length>0&&E(!0))},[x,b.length]);const N=_.useRef(p);_.useEffect(()=>{p!==N.current&&(N.current=p,k(new Set))},[p]);const[M,q]=_.useState(null),[U,X]=_.useState(!1),Z=_.useRef(!1),he=_.useCallback(H=>{const J=b.find(ve=>ve.id===H);J&&(Z.current=!!J.note,q(H),X(!1))},[b]),me=_.useCallback(()=>{M&&(X(!0),Ft(()=>{q(null),X(!1)},150))},[M]),pe=_.useCallback(H=>{M&&(n({...t,sections:b.map(J=>J.id===M?{...J,note:H.trim()||void 0}:J)}),me())},[M,b,t,n,me]);_.useEffect(()=>{a&&M&&me()},[a]);const[Se,Le]=_.useState(new Set),ee=_.useRef(new Map),[le,z]=_.useState(null),[ce,W]=_.useState(null),[ge,De]=_.useState([]),[P,ue]=_.useState(0),ne=_.useRef(null),ke=_.useRef(new Set),de=_.useRef(new Map),[Me,Ye]=_.useState(new Map),[Je,He]=_.useState(new Map),Dt=_.useRef(new Set),It=_.useRef(new Map),yt=_.useRef(h);yt.current=h;const lt=_.useRef(y);lt.current=y;const ut=_.useRef(g);ut.current=g,_.useEffect(()=>{u&&k(new Set)},[u]);const[Zt,fn]=_.useState(()=>!t.sections.some(H=>{const J=H.originalRect,ve=H.currentRect;return Math.abs(J.x-ve.x)>1||Math.abs(J.y-ve.y)>1||Math.abs(J.width-ve.width)>1||Math.abs(J.height-ve.height)>1}));_.useEffect(()=>{if(!Zt){const H=Ft(()=>fn(!0),380);return()=>clearTimeout(H)}},[]);const tn=_.useRef(new Set);_.useEffect(()=>{tn.current=new Set(b.map(H=>H.selector))},[b]),_.useEffect(()=>{const H=()=>ue(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),_.useEffect(()=>{const H=J=>{if(ne.current){z(null);return}const ve=document.elementFromPoint(J.clientX,J.clientY);if(!ve){z(null);return}if(ve.closest("[data-feedback-toolbar]")){z(null);return}if(ve.closest("[data-design-placement]")){z(null);return}if(ve.closest("[data-annotation-popup]")){z(null);return}const Ae=xx(ve);if(!Ae){z(null);return}for(const Ke of tn.current)try{const Re=document.querySelector(Ke);if(Re&&(Re===Ae||Ae.contains(Re))){z(null);return}}catch{}const at=Ae.getBoundingClientRect();z({x:at.x,y:at.y,w:at.width,h:at.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),_.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),_.useEffect(()=>{const H=J=>{var Re,_e,et,We;if(ne.current||J.button!==0)return;const ve=J.target;if(!ve||ve.closest("[data-feedback-toolbar]")||ve.closest("[data-design-placement]")||ve.closest("[data-annotation-popup]"))return;const Ae=xx(ve);let at=!1;if(Ae)for(const Qe of tn.current)try{const Be=document.querySelector(Qe);if(Be&&(Be===Ae||Ae.contains(Be))){at=!0;break}}catch{}const Ke=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(Ae&&!at){J.preventDefault(),J.stopPropagation();const Qe=Pj(Ae),Be=[...b,Qe],tt=[...t.originalOrder,Qe.id];n({...t,sections:Be,originalOrder:tt});const xt=new Set([Qe.id]);k(xt),(Re=yt.current)==null||Re.call(yt,xt,Ke),z(null);const jt=J.clientX,nt=J.clientY,Lt={x:Qe.currentRect.x,y:Qe.currentRect.y};Qe.originalRect;let wt=!1,gt=0,nn=0;ne.current="move";const _t=en=>{var kt;const Rt=en.clientX-jt,vt=en.clientY-nt;if(!wt&&(Math.abs(Rt)>2||Math.abs(vt)>2)&&(wt=!0),!wt)return;const Jt={x:Lt.x+Rt,y:Lt.y+vt,width:Qe.currentRect.width,height:Qe.currentRect.height},hn=yx(Jt,Be,new Set([Qe.id]),d);De(hn.guides);const rn=Rt+hn.dx,$t=vt+hn.dy;gt=rn,nn=$t;const bn=document.querySelector(`[data-rearrange-section="${Qe.id}"]`);bn&&(bn.style.transform=`translate(${rn}px, ${$t}px)`),Ye(new Map([[Qe.id,{x:Lt.x+rn,y:Lt.y+$t,width:Qe.currentRect.width,height:Qe.currentRect.height}]])),(kt=lt.current)==null||kt.call(lt,rn,$t)},Vt=()=>{var Rt;window.removeEventListener("mousemove",_t),window.removeEventListener("mouseup",Vt),ne.current=null,De([]),Ye(new Map);const en=document.querySelector(`[data-rearrange-section="${Qe.id}"]`);en&&(en.style.transform=""),wt&&n({...t,sections:Be.map(vt=>vt.id===Qe.id?{...vt,currentRect:{...vt.currentRect,x:Math.max(0,Lt.x+gt),y:Math.max(0,Lt.y+nn)}}:vt),originalOrder:tt}),(Rt=ut.current)==null||Rt.call(ut,gt,nn,wt)};window.addEventListener("mousemove",_t),window.addEventListener("mouseup",Vt)}else if(at&&Ae){J.preventDefault();for(const Qe of b)try{const Be=document.querySelector(Qe.selector);if(Be&&Be===Ae){const tt=new Set([Qe.id]);k(tt),(_e=yt.current)==null||_e.call(yt,tt,Ke);return}}catch{}Ke||(k(new Set),(et=yt.current)==null||et.call(yt,new Set,!1))}else Ke||(k(new Set),(We=yt.current)==null||We.call(yt,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),_.useEffect(()=>{const H=J=>{const ve=J.target;if(!(ve.tagName==="INPUT"||ve.tagName==="TEXTAREA"||ve.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&S.size>0){J.preventDefault();const Ae=new Set(S);Le(at=>{const Ke=new Set(at);for(const Re of Ae)Ke.add(Re);return Ke}),k(new Set),Ft(()=>{const at=w.current;n({...at,sections:at.sections.filter(Ke=>!Ae.has(Ke.id)),originalOrder:at.originalOrder.filter(Ke=>!Ae.has(Ke))}),Le(Ke=>{const Re=new Set(Ke);for(const _e of Ae)Re.delete(_e);return Re})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&S.size>0){J.preventDefault();const Ae=J.shiftKey?20:1,at=J.key==="ArrowLeft"?-Ae:J.key==="ArrowRight"?Ae:0,Ke=J.key==="ArrowUp"?-Ae:J.key==="ArrowDown"?Ae:0;n({...t,sections:b.map(Re=>S.has(Re.id)?{...Re,currentRect:{...Re.currentRect,x:Math.max(0,Re.currentRect.x+at),y:Math.max(0,Re.currentRect.y+Ke)}}:Re)});return}J.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[S,b,t,n]);const Q=_.useCallback((H,J)=>{var jt;if(H.button!==0)return;const ve=H.target;if(ve.closest(`.${Ie.handle}`)||ve.closest(`.${Ie.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let Ae;H.shiftKey||H.metaKey||H.ctrlKey?(Ae=new Set(S),Ae.has(J)?Ae.delete(J):Ae.add(J)):S.has(J)?Ae=new Set(S):Ae=new Set([J]),k(Ae),(Ae.size!==S.size||[...Ae].some(nt=>!S.has(nt)))&&((jt=yt.current)==null||jt.call(yt,Ae,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Ke=H.clientX,Re=H.clientY,_e=new Map;for(const nt of b)Ae.has(nt.id)&&_e.set(nt.id,{x:nt.currentRect.x,y:nt.currentRect.y});ne.current="move";let et=!1,We=0,Qe=0;const Be=new Map;for(const nt of b)if(Ae.has(nt.id)){const Lt=document.querySelector(`[data-rearrange-section="${nt.id}"]`);Be.set(nt.id,{outlineEl:Lt,curW:nt.currentRect.width,curH:nt.currentRect.height})}const tt=nt=>{var hn;const Lt=nt.clientX-Ke,wt=nt.clientY-Re;if(Lt===0&&wt===0)return;et=!0;let gt=1/0,nn=1/0,_t=-1/0,Vt=-1/0;for(const[rn,{curW:$t,curH:bn}]of Be){const kt=_e.get(rn);if(!kt)continue;const Fn=kt.x+Lt,rt=kt.y+wt;gt=Math.min(gt,Fn),nn=Math.min(nn,rt),_t=Math.max(_t,Fn+$t),Vt=Math.max(Vt,rt+bn)}const en=yx({x:gt,y:nn,width:_t-gt,height:Vt-nn},b,Ae,d),Rt=Lt+en.dx,vt=wt+en.dy;We=Rt,Qe=vt,De(en.guides);for(const[,{outlineEl:rn}]of Be)rn&&(rn.style.transform=`translate(${Rt}px, ${vt}px)`);const Jt=new Map;for(const[rn,{curW:$t,curH:bn}]of Be){const kt=_e.get(rn);if(kt){const Fn={x:Math.max(0,kt.x+Rt),y:Math.max(0,kt.y+vt),width:$t,height:bn};Jt.set(rn,Fn)}}Ye(Jt),(hn=lt.current)==null||hn.call(lt,Rt,vt)},xt=nt=>{var Lt,wt;window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",xt),ne.current=null,De([]),Ye(new Map);for(const[,{outlineEl:gt}]of Be)gt&&(gt.style.transform="");if(et){const gt=nt.clientX-Ke,nn=nt.clientY-Re;if(Math.abs(gt)<5&&Math.abs(nn)<5)n({...t,sections:b.map(_t=>{const Vt=_e.get(_t.id);return Vt?{..._t,currentRect:{..._t.currentRect,x:Vt.x,y:Vt.y}}:_t})});else{n({...t,sections:b.map(_t=>{const Vt=_e.get(_t.id);return Vt?{..._t,currentRect:{..._t.currentRect,x:Math.max(0,Vt.x+We),y:Math.max(0,Vt.y+Qe)}}:_t})}),(Lt=ut.current)==null||Lt.call(ut,We,Qe,!0);return}}(wt=ut.current)==null||wt.call(ut,0,0,!1)};window.addEventListener("mousemove",tt),window.addEventListener("mouseup",xt)},[S,b,t,n]),$e=_.useCallback((H,J,ve)=>{H.preventDefault(),H.stopPropagation();const Ae=b.find(tt=>tt.id===J);if(!Ae)return;k(new Set([J])),ne.current="resize";const at=H.clientX,Ke=H.clientY,Re={...Ae.currentRect};Ae.originalRect;const _e=Re.width/Re.height;let et={...Re};const We=document.querySelector(`[data-rearrange-section="${J}"]`),Qe=tt=>{const xt=tt.clientX-at,jt=tt.clientY-Ke;let nt=Re.x,Lt=Re.y,wt=Re.width,gt=Re.height;if(ve.includes("e")&&(wt=Math.max(md,Re.width+xt)),ve.includes("w")&&(wt=Math.max(md,Re.width-xt),nt=Re.x+Re.width-wt),ve.includes("s")&&(gt=Math.max(md,Re.height+jt)),ve.includes("n")&&(gt=Math.max(md,Re.height-jt),Lt=Re.y+Re.height-gt),tt.shiftKey)if(ve.length===2){const _t=Math.abs(wt-Re.width),Vt=Math.abs(gt-Re.height);_t>Vt?gt=wt/_e:wt=gt*_e,ve.includes("w")&&(nt=Re.x+Re.width-wt),ve.includes("n")&&(Lt=Re.y+Re.height-gt)}else ve==="e"||ve==="w"?gt=wt/_e:wt=gt*_e,ve==="w"&&(nt=Re.x+Re.width-wt),ve==="n"&&(Lt=Re.y+Re.height-gt);et={x:nt,y:Lt,width:wt,height:gt},We&&(We.style.left=`${nt}px`,We.style.top=`${Lt-P}px`,We.style.width=`${wt}px`,We.style.height=`${gt}px`),W({x:tt.clientX+12,y:tt.clientY+12,text:`${Math.round(wt)} × ${Math.round(gt)}`}),Ye(new Map([[J,et]]))},Be=()=>{window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",Be),W(null),ne.current=null,Ye(new Map),n({...t,sections:b.map(tt=>tt.id===J?{...tt,currentRect:et}:tt)})};window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",Be)},[b,t,n,P]),ct=_.useCallback(H=>{Le(J=>{const ve=new Set(J);return ve.add(H),ve}),k(J=>{const ve=new Set(J);return ve.delete(H),ve}),Ft(()=>{const J=w.current;n({...J,sections:J.sections.filter(ve=>ve.id!==H),originalOrder:J.originalOrder.filter(ve=>ve!==H)}),Le(ve=>{const Ae=new Set(ve);return Ae.delete(H),Ae})},180)},[n]),je=H=>{const J=H.originalRect,ve=H.currentRect;return Math.abs(J.x-ve.x)>1||Math.abs(J.y-ve.y)>1||Math.abs(J.width-ve.width)>1||Math.abs(J.height-ve.height)>1},ot=H=>{const J=H.originalRect,ve=H.currentRect;return Math.abs(J.x-ve.x)>1||Math.abs(J.y-ve.y)>1},it=H=>{const J=H.originalRect,ve=H.currentRect;return Math.abs(J.width-ve.width)>1||Math.abs(J.height-ve.height)>1};for(const H of b)de.current.has(H.id)||(ot(H)?de.current.set(H.id,"move"):it(H)&&de.current.set(H.id,"resize"));for(const H of de.current.keys())b.some(J=>J.id===H)||de.current.delete(H);const mt=b.filter(H=>{try{if(Se.has(H.id)||S.has(H.id))return!0;const J=document.querySelector(H.selector);if(!J)return!1;const ve=J.getBoundingClientRect(),Ae=H.originalRect;return Math.abs(ve.width-Ae.width)+Math.abs(ve.height-Ae.height)<200}catch{return!1}}),Tt=mt.filter(H=>je(H)),Ct=mt.filter(H=>!je(H)),zt=new Set(Tt.map(H=>H.id));for(const H of ke.current)zt.has(H)||ke.current.delete(H);const ft=[...zt].sort().join(",");for(const H of Tt)It.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return _.useEffect(()=>{const H=Dt.current;Dt.current=zt;const J=new Map;for(const ve of H)if(!zt.has(ve)){if(!b.some(at=>at.id===ve))continue;const Ae=It.current.get(ve);Ae&&(J.set(ve,{orig:Ae.originalRect,target:Ae.currentRect,isFixed:Ae.isFixed}),It.current.delete(ve))}if(J.size>0){He(Ae=>{const at=new Map(Ae);for(const[Ke,Re]of J)at.set(Ke,Re);return at});const ve=Ft(()=>{He(Ae=>{const at=new Map(Ae);for(const Ke of J.keys())at.delete(Ke);return at})},250);return()=>clearTimeout(ve)}},[ft,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Ie.rearrangeOverlay} ${i?"":Ie.light} ${a?Ie.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[le&&l.jsx("div",{className:Ie.hoverHighlight,style:{left:le.x,top:le.y,width:le.w,height:le.h}}),Ct.map(H=>{const J=H.currentRect,ve=H.isFixed?J.y:J.y-P,Ae=px,at=S.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${Ie.sectionOutline} ${at?Ie.selected:""} ${j||a||Se.has(H.id)?Ie.exiting:""}`,style:{left:J.x,top:ve,width:J.width,height:J.height,borderColor:Ae.border,backgroundColor:Ae.bg,...Zt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ke=>Q(Ke,H.id),onDoubleClick:()=>he(H.id),children:[l.jsx("span",{className:Ie.sectionLabel,style:{backgroundColor:Ae.pill},children:H.label}),l.jsx("span",{className:`${Ie.sectionAnnotation} ${H.note?Ie.annotationVisible:""}`,children:(H.note&&ee.current.set(H.id,H.note),H.note||ee.current.get(H.id)||"")}),l.jsxs("span",{className:Ie.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ie.deleteButton,onMouseDown:Ke=>Ke.stopPropagation(),onClick:()=>ct(H.id),children:"✕"}),_x.map(Ke=>l.jsx("div",{className:`${Ie.handle} ${Ie[`handle${Ke.charAt(0).toUpperCase()}${Ke.slice(1)}`]}`,onMouseDown:Re=>$e(Re,H.id,Ke)},Ke))]},H.id)}),Tt.map(H=>{const J=H.currentRect,ve=H.isFixed?J.y:J.y-P,Ae=S.has(H.id),at=ot(H),Ke=it(H);if(u&&!Ae)return null;const _e=!ke.current.has(H.id);return _e&&ke.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${Ie.ghostOutline} ${Ae?Ie.selected:""} ${j||a||Se.has(H.id)?Ie.exiting:""}`,style:{left:J.x,top:ve,width:J.width,height:J.height,...Zt?{}:{opacity:0,animation:"none",transition:"none"},..._e?{}:{animation:"none"}},onMouseDown:et=>Q(et,H.id),onDoubleClick:()=>he(H.id),children:[l.jsx("span",{className:Ie.sectionLabel,style:{backgroundColor:px.pill},children:H.label}),l.jsx("span",{className:`${Ie.sectionAnnotation} ${H.note?Ie.annotationVisible:""}`,children:(H.note&&ee.current.set(H.id,H.note),H.note||ee.current.get(H.id)||"")}),l.jsxs("span",{className:Ie.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ie.deleteButton,onMouseDown:et=>et.stopPropagation(),onClick:()=>ct(H.id),children:"✕"}),_x.map(et=>l.jsx("div",{className:`${Ie.handle} ${Ie[`handle${et.charAt(0).toUpperCase()}${et.slice(1)}`]}`,onMouseDown:We=>$e(We,H.id,et)},et)),l.jsx("span",{className:Ie.ghostBadge,children:(()=>{const et=de.current.get(H.id);if(at&&Ke){const[We,Qe]=et==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",We," ",l.jsxs("span",{className:Ie.ghostBadgeExtra,children:["& ",Qe]})]})}return`Suggested ${Ke?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const J of Tt){const ve=Me.get(J.id);H.push({id:J.id,orig:J.originalRect,target:ve||J.currentRect,isFixed:J.isFixed,isSelected:S.has(J.id),isExiting:Se.has(J.id)})}for(const[J,ve]of Me)if(!H.some(Ae=>Ae.id===J)){const Ae=b.find(at=>at.id===J);Ae&&H.push({id:J,orig:Ae.originalRect,target:ve,isFixed:Ae.isFixed,isSelected:S.has(J)})}for(const[J,ve]of Je)H.some(Ae=>Ae.id===J)||H.push({id:J,orig:ve.orig,target:ve.target,isFixed:ve.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${Ie.connectorSvg} ${j||a?Ie.connectorExiting:""}`,children:[H.map(({id:J,orig:ve,target:Ae,isFixed:at,isSelected:Ke,isExiting:Re})=>{const _e=ve.x+ve.width/2,et=(at?ve.y:ve.y-P)+ve.height/2,We=Ae.x+Ae.width/2,Qe=(at?Ae.y:Ae.y-P)+Ae.height/2,Be=We-_e,tt=Qe-et,xt=Math.sqrt(Be*Be+tt*tt);if(xt<2)return null;const jt=Math.min(1,xt/40),nt=Math.min(xt*.3,60),Lt=xt>0?-tt/xt:0,wt=xt>0?Be/xt:0,gt=(_e+We)/2+Lt*nt,nn=(et+Qe)/2+wt*nt,_t=Me.has(J),Vt=_t||Ke?1:.4,en=_t||Ke?1:.5;return l.jsxs("g",{className:Re?Ie.connectorExiting:"",children:[l.jsx("path",{className:Ie.connectorLine,d:`M ${_e} ${et} Q ${gt} ${nn} ${We} ${Qe}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Vt*jt}),l.jsx("circle",{className:Ie.connectorDot,cx:_e,cy:et,r:4*jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:en*jt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Ie.connectorDot,cx:We,cy:Qe,r:4*jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:en*jt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),M&&(()=>{var Qe;const H=b.find(Be=>Be.id===M);if(!H)return null;const J=H.currentRect,ve=H.isFixed?J.y:J.y-P,Ae=J.x+J.width/2,at=ve-8,Ke=ve+J.height+8,Re=at>200,_e=Ke<window.innerHeight-100,et=Math.max(160,Math.min(window.innerWidth-160,Ae));let We;return Re?We={left:et,bottom:window.innerHeight-at}:_e?We={left:et,top:Ke}:We={left:et,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Ud,{element:H.label,placeholder:"Add a note about this section",initialValue:(Qe=H.note)!=null?Qe:"",submitLabel:Z.current?"Save":"Set",onSubmit:pe,onCancel:me,onDelete:Z.current?()=>{pe("")}:void 0,isExiting:U,lightMode:!i,style:We})})(),ce&&l.jsx("div",{className:Ie.sizeIndicator,style:{left:ce.x,top:ce.y},"data-feedback-toolbar":!0,children:ce.text}),ge.map((H,J)=>l.jsx("div",{className:Ie.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-P,width:"100vw",height:1}},`${H.axis}-${H.pos}-${J}`))]})}var lp=new Set(["script","style","noscript","link","meta","br","hr"]);function Vj(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||lp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Vd(c),selector:Ir(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||lp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Vd(h),selector:Ir(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function Yj(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Wj(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function cp(t,n){const i=n?Yj(n):Vj(),a=Wj(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,j=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const E=Math.round(a.top-S.bottom);(!c||E<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(k&&S.top>=a.bottom-5){const E=Math.round(S.top-a.bottom);(!u||E<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.right<=a.left+5){const E=Math.round(a.left-S.right);(!d||E<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.left>=a.right-5){const E=Math.round(S.left-a.right);(!h||E<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}}const y=window.innerWidth,g=window.innerHeight,x=Xj(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=Fj(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function Fj(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function Xj(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function s2(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function o2(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=s2(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function Gj(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(s2(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var bx=15;function vx(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<bx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<bx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function qj(t){var d;if(t.length<2)return[];const n=vx(t.map(h=>({label:h.label,rect:h.originalRect}))),i=vx(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",k=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function i2(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||lp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Ir(h)}}}return{viewport:t,contentArea:null}}function Kj(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Ir(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function a2(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function r2(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function Qj(t){const n=Kj(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function wx(t,n,i,a="standard"){var j,E,O,N;if(t.length===0)return"";const c=[...t].sort((M,q)=>Math.abs(M.y-q.y)<20?M.x-q.x:M.y-q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((M,q)=>{var X;const U=((X=ia[M.type])==null?void 0:X.label)||M.type;u+=`${q+1}. **${U}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}),u;const d=i2(n);u+=r2(d),u+=`### Components
`,c.forEach((M,q)=>{var Se;const U=((Se=ia[M.type])==null?void 0:Se.label)||M.type,X={x:M.x,y:M.y,width:M.width,height:M.height};u+=`${q+1}. **${U}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`;const Z=cp(X),me=o2(Z,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Le of me)u+=`   - ${Le}
`;const pe=a2(X,d);pe&&(u+=`   - CSS: ${pe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const M of c){const q=h.find(U=>Math.abs(U.y-M.y)<30);q?q.items.push(M):h.push({y:M.y,items:[M]})}if(h.sort((M,q)=>M.y-q.y),h.forEach((M,q)=>{M.items.sort((X,Z)=>X.x-Z.x);const U=M.items.map(X=>{var Z;return((Z=ia[X.type])==null?void 0:Z.label)||X.type});if(M.items.length===1){const Z=M.items[0].width>n.width*.8;u+=`- Row ${q+1} (y≈${Math.round(M.y)}): ${U[0]}${Z?" — full width":""}
`}else u+=`- Row ${q+1} (y≈${Math.round(M.y)}): ${U.join(" | ")} — ${M.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let M=0;M<c.length-1;M++){const q=c[M],U=c[M+1],X=((j=ia[q.type])==null?void 0:j.label)||q.type,Z=((E=ia[U.type])==null?void 0:E.label)||U.type,he=Math.round(U.y-(q.y+q.height)),me=Math.round(U.x-(q.x+q.width));Math.abs(q.y-U.y)<30?u+=`- ${X} → ${Z}: \`${me}px\` horizontal gap
`:u+=`- ${X} → ${Z}: \`${he}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let M=0;M<c.length;M++)for(let q=M+1;q<c.length;q++){const U=c[M],X=c[q],Z=((O=ia[U.type])==null?void 0:O.label)||U.type,he=((N=ia[X.type])==null?void 0:N.label)||X.type,me=Math.round(X.y-(U.y+U.height)),pe=Math.round(X.x-(U.x+U.width));u+=`- ${Z} ↔ ${he}: h=\`${pe}px\` v=\`${me}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((M,q)=>{var X;const U=((X=ia[M.type])==null?void 0:X.label)||M.type;u+=`${q}. ${U} at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(M=>M.type==="navigation"),y=c.some(M=>M.type==="hero"),g=c.some(M=>M.type==="sidebar"),x=c.some(M=>M.type==="footer"),b=c.filter(M=>M.type==="card"),w=c.filter(M=>M.type==="form"),S=c.filter(M=>M.type==="table"),k=c.filter(M=>M.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),k.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const M=c.find(q=>q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(M.width)}px 1fr;\`
`}if(b.length>1){const M=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${M}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Sx(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=i2({width:d,height:h});n!=="compact"&&(u+=r2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const j=cp(w,y("original")),E=cp(S,y("current")),O=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${Gj(j,{x:w.x,y:w.y},O)}
`;const N=b?{width:S.width,height:S.height}:void 0,M=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,q=N?`, ${Math.round(N.width)}×${Math.round(N.height)}px`:"",X=o2(E,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){u+=`  - Suggested position ${M}${q}: ${X[0]}
`;for(let he=1;he<X.length;he++)u+=`    ${X[he]}
`}else u+=`  - Suggested position ${M}${q}
`;const Z=a2(S,p);Z&&(u+=`  - CSS: ${Z}
`)}const k=Qj(g.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const j=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;j!==g.selector&&(u+=`  - Element: \`${j}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=qj(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var up="feedback-annotations-",l2=7;function Yd(t){return`${up}${t}`}function bm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Yd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-l2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function c2(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Yd(t),JSON.stringify(n))}catch{}}function Zj(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-l2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(up)){const c=a.slice(up.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function xc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));c2(t,a)}var Gp="agentation-design-";function Jj(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Gp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function eM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Gp}${t}`,JSON.stringify(n))}catch{}}function tM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Gp}${t}`)}catch{}}var qp="agentation-rearrange-";function nM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${qp}${t}`);return n?JSON.parse(n):null}catch{return null}}function sM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${qp}${t}`,JSON.stringify(n))}catch{}}function oM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${qp}${t}`)}catch{}}var Kp="agentation-wireframe-";function iM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Kp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Cx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Kp}${t}`,JSON.stringify(n))}catch{}}function _d(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Kp}${t}`)}catch{}}var u2="agentation-session-";function Qp(t){return`${u2}${t}`}function aM(t){if(typeof window>"u")return null;try{return localStorage.getItem(Qp(t))}catch{return null}}function vm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Qp(t),n)}catch{}}function rM(t){if(!(typeof window>"u"))try{localStorage.removeItem(Qp(t))}catch{}}var d2=`${u2}toolbar-hidden`;function lM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(d2)==="1"}catch{return!1}}function cM(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(d2,"1")}catch{}}async function wm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function kx(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function gl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function jx(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function ar(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var os={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Mx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ex=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],uM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function dM(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Mx;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Mx,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Ex,...t.skipPatterns]:Ex,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:uM,filter:t==null?void 0:t.filter}}function fM(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function hM(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function mM(t,n){const i=fM(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function pM(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&mM(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var yl=null,_M=new WeakMap;function Sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function gM(){if(yl!==null)return yl;if(typeof document>"u")return!1;if(document.body&&Sm(document.body))return yl=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&Sm(i))return yl=!0,!0}if(document.body){for(const n of document.body.children)if(Sm(n))return yl=!0,!0}return yl=!1,!1}var bc={map:_M};function yM(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function xM(t){const n=yM(t);return n?t[n]:null}function Tr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function bM(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===os.HostComponent||n===os.HostText||n===os.HostHoistable||n===os.HostSingleton||n===os.Fragment||n===os.Mode||n===os.Profiler||n===os.DehydratedFragment||n===os.HostRoot||n===os.HostPortal||n===os.ScopeComponent||n===os.OffscreenComponent||n===os.LegacyHiddenComponent||n===os.CacheComponent||n===os.TracingMarkerComponent||n===os.Throw||n===os.ViewTransitionComponent||n===os.ActivityComponent)return null;if(n===os.ForwardRef){const u=a;if(u!=null&&u.render){const d=Tr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Tr(i)}if(n===os.MemoComponent||n===os.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Tr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Tr(i)}if(n===os.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===os.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===os.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Tr(u._result):null}return n===os.SuspenseComponent||n===os.SuspenseListComponent?null:n===os.IncompleteClassComponent||n===os.IncompleteFunctionComponent||n===os.FunctionComponent||n===os.ClassComponent||n===os.IndeterminateComponent?Tr(i):null}function vM(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function wM(t,n){const i=dM(n),a=i.mode==="all";if(a){const p=bc.map.get(t);if(p!==void 0)return p}if(!gM()){const p={path:null,components:[]};return a&&bc.map.set(t,p),p}const c=i.mode==="smart"?hM(t):void 0,u=[];try{let p=xM(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=bM(p);g&&!vM(g)&&pM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&bc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&bc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&bc.map.set(t,h),h}var vc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function SM(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Uc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function CM(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Uc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Uc(i._debugOwner)};i=i.return,a++}return null}function kM(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Uc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Uc(n)}}}n=n.return,i++}return null}var gd=new Map;function jM(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===vc.FunctionComponent||n===vc.IndeterminateComponent)&&typeof i=="function")return i;if(n===vc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===vc.MemoComponent||n===vc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function MM(){const t=Yv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function EM(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function TM(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function AM(t){const n=jM(t);if(!n)return null;if(gd.has(n))return gd.get(n);const i=MM();if(!i)return gd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=EM(d.stack);h&&(c={fileName:TM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Uc(t)||void 0})}}}finally{i.set(a)}return gd.set(n,c),c}function DM(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=AM(i);if(c)return c;i=i.return,a++}return null}function dp(t){const n=SM(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=CM(n);if(i||(i=kM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=DM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function NM(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function RM(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=dp(i);if(c.found)return c;i=i.parentElement,a++}return dp(t)}var BM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,LM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=BM}var Ze=LM,wc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Tx(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var OM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,zM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=OM}var to=zM;function Ax({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:j}){const E=(h||p)&&!y,O=E&&x==="delete",N=t.isMultiSelect,M=N?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=c?to.exit:u?to.clearing:d?"":to.enter,U=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${to.marker} ${N?to.multiSelect:""} ${q} ${O?to.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:O?void 0:M,animationDelay:U},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:X=>{X.stopPropagation(),c||k(t)},onContextMenu:j?X=>{x==="delete"&&(X.preventDefault(),X.stopPropagation(),c||j(t))}:void 0,children:[E?O?l.jsx(K5,{size:N?18:16}):l.jsx(Kk,{size:16}):l.jsx("span",{className:g!==null&&n>=g?to.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${to.markerTooltip} ${to.enter}`,style:b,children:[l.jsxs("span",{className:to.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:to.markerNote,children:t.comment})]})]})}function $M({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${to.marker} ${to.pending} ${i?to.multiSelect:""} ${a?to.exit:to.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx($k,{size:12})})}function Dx({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${to.marker} ${n?to.fixed:""} ${to.hovered} ${i?to.multiSelect:""} ${to.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(K5,{size:i?12:10})})}var IM=`.styles-module__switchContainer___Ka-AB {
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
}`,PM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=IM}var Cm=PM,km=({className:t="",...n})=>l.jsxs("div",{className:`${Cm.switchContainer} ${t}`,children:[l.jsx("input",{className:Cm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Cm.switchThumb})]}),HM=`.styles-module__checkboxContainer___joqZk {
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
}`,UM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=HM}var yd=UM,VM=({className:t="",...n})=>l.jsxs("div",{className:`${yd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:yd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:yd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:yd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),YM=`.styles-module__container___w8eAF {
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
}`,WM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=YM}var Nx=WM,Rx=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Nx.container} ${t}`,...u,children:[l.jsx(VM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Nx.label,htmlFor:d,children:n}),i&&l.jsx(Br,{content:i})]})},FM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,XM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=FM}var At=XM;function GM({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${At.settingsPanel} ${h?At.enter:At.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:At.settingsPanelContainer,children:[l.jsxs("div",{className:`${At.settingsPage} ${y==="automations"?At.slideLeft:""}`,children:[l.jsxs("div",{className:At.settingsHeader,children:[l.jsx("a",{className:At.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:At.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:At.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:At.themeIconWrapper,children:l.jsx("span",{className:At.themeIcon,children:i?l.jsx(Gk,{size:20}):l.jsx(qk,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("div",{className:At.settingsLabel,children:["Output Detail",l.jsx(Br,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:At.cycleButton,onClick:()=>{const S=(wc.findIndex(k=>k.value===t.outputDetail)+1)%wc.length;n({outputDetail:wc[S].value})},children:[l.jsx("span",{className:At.cycleButtonText,children:(b=wc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:At.cycleDots,children:wc.map(w=>l.jsx("span",{className:`${At.cycleDot} ${t.outputDetail===w.value?At.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${At.settingsRow} ${At.settingsRowMarginTop} ${c?"":At.settingsRowDisabled}`,children:[l.jsxs("div",{className:At.settingsLabel,children:["React Components",l.jsx(Br,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(km,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${At.settingsRow} ${At.settingsRowMarginTop}`,children:[l.jsxs("div",{className:At.settingsLabel,children:["Hide Until Restart",l.jsx(Br,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(km,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsx("div",{className:`${At.settingsLabel} ${At.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:At.colorOptions,children:Lc.map(w=>l.jsx("button",{className:`${At.colorOption} ${t.annotationColorId===w.id?At.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsx(Rx,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Rx,{className:At.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:At.divider}),l.jsxs("button",{className:At.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:At.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${At.mcpNavIndicator} ${At[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${At.settingsPage} ${At.automationsPage} ${y==="automations"?At.slideIn:""}`,children:[l.jsxs("button",{className:At.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(Zk,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("span",{className:At.automationHeader,children:["MCP Connection",l.jsx(Br,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${At.mcpStatusDot} ${At[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:At.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:At.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:`${At.settingsSection} ${At.settingsSectionGrow}`,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("span",{className:At.automationHeader,children:["Webhooks",l.jsx(Br,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:At.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${At.autoSendLabel} ${t.webhooksEnabled?At.active:""} ${t.webhookUrl?"":At.disabled}`,children:"Auto-Send"}),l.jsx(km,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:At.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:At.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function jm(t,n="filtered"){const{name:i,path:a}=Cl(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=wM(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Bx=!1,Mm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ha=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Lc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],qM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Lc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Lc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Lc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};qM();function Ar(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function Em(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Dr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function xd(t){const n=dp(t),i=n.found?n:RM(t);if(i.found&&i.source)return NM(i.source,"path")}function KM({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var an,Un,Xt,bs,Pt,Sn,Rn;const[k,j]=_.useState(!1),[E,O]=_.useState([]),[N,M]=_.useState(!0),[q,U]=_.useState(()=>lM()),[X,Z]=_.useState(!1),he=_.useRef(null);_.useEffect(()=>{const D=F=>{const G=he.current;G&&G.contains(F.target)&&F.stopPropagation()},L=["mousedown","click","pointerdown"];return L.forEach(F=>document.body.addEventListener(F,D)),()=>{L.forEach(F=>document.body.removeEventListener(F,D))}},[]);const[me,pe]=_.useState(!1),[Se,Le]=_.useState(!1),[ee,le]=_.useState(null),[z,ce]=_.useState({x:0,y:0}),[W,ge]=_.useState(null),[De,P]=_.useState(!1),[ue,ne]=_.useState("idle"),[ke,de]=_.useState(!1),[Me,Ye]=_.useState(!1),[Je,He]=_.useState(null),[Dt,It]=_.useState(null),[yt,lt]=_.useState([]),[ut,Zt]=_.useState(null),[fn,tn]=_.useState(null),[Q,$e]=_.useState(null),[ct,je]=_.useState(null),[ot,it]=_.useState([]),[mt,Tt]=_.useState(0),[Ct,zt]=_.useState(!1),[ft,H]=_.useState(!1),[J,ve]=_.useState(!1),[Ae,at]=_.useState(!1),[Ke,Re]=_.useState(!1),[_e,et]=_.useState("main"),[We,Qe]=_.useState(!1),[Be,tt]=_.useState(!1),[xt,jt]=_.useState(!1),[nt,Lt]=_.useState([]),[wt,gt]=_.useState(null),nn=_.useRef(!1),[_t,Vt]=_.useState(!1),[en,Rt]=_.useState(!1),[vt,Jt]=_.useState(1),[hn,rn]=_.useState("new-page"),[$t,bn]=_.useState(""),[kt,Fn]=_.useState(!1),[rt,kn]=_.useState(null),ho=_.useRef(!1),Fo=_.useRef({rearrange:null,placements:[]}),mo=_.useRef({rearrange:null,placements:[]}),[So,Co]=_.useState(0),[qt,An]=_.useState(0),[Ds,Xn]=_.useState(0),[wn,Bs]=_.useState(0),$s=_.useRef(new Set),jn=_.useRef(new Set),In=_.useRef(null),Ms=_.useRef(),Is=Be&&k&&!xt&&_t;_.useEffect(()=>{if(Is){Rt(!1);const D=Sl(()=>{Rt(!0)});return()=>cancelAnimationFrame(D)}else Rt(!1)},[Is]);const Ps=_.useRef(new Map),Ro=_.useRef(new Map),no=_.useRef(),[is,Ss]=_.useState(!1),[Dn,so]=_.useState([]),ci=_.useRef(Dn);ci.current=Dn;const[Ls,oo]=_.useState(null),po=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Cs,es]=_.useState(!1),ko=_.useRef(null),[Pn,Es]=_.useState([]),ys=_.useRef({cmd:!1,shift:!1}),us=()=>{Qe(!0)},Qi=()=>{Qe(!1)},Qo=()=>{Cs||(ko.current=Ft(()=>es(!0),850))},Li=()=>{ko.current&&(clearTimeout(ko.current),ko.current=null),es(!1),Qi()};_.useEffect(()=>()=>{ko.current&&clearTimeout(ko.current)},[]);const[sn,ui]=_.useState(()=>{var D;try{const L=JSON.parse((D=localStorage.getItem("feedback-toolbar-settings"))!=null?D:"");return{...Mm,...L,annotationColorId:Lc.find(F=>F.id===L.annotationColorId)?L.annotationColorId:Mm.annotationColorId}}catch{return Mm}}),[Os,Zi]=_.useState(!0),[Ji,Bo]=_.useState(!1),xs=()=>{var D;(D=he.current)==null||D.classList.add(Ze.disableTransitions),Zi(L=>!L),Sl(()=>{var L;(L=he.current)==null||L.classList.remove(Ze.disableTransitions)})},Oi=!1,Hs="off",[Yn,jo]=_.useState(x!=null?x:null),di=_.useRef(!1),[Us,Lo]=_.useState(g?"connecting":"disconnected"),[gn,qs]=_.useState(null),[Vs,Mo]=_.useState(!1),[Wn,Zo]=_.useState(null),io=_.useRef(!1),[zi,Ks]=_.useState(new Set),[Eo,Oo]=_.useState(new Set),[Gn,ks]=_.useState(!1),[To,_o]=_.useState(!1),[go,ts]=_.useState(!1),yo=_.useRef(null),qn=_.useRef(null),Qs=_.useRef(null),Jo=_.useRef(null),ei=_.useRef(!1),$i=_.useRef(0),fi=_.useRef(null),hi=_.useRef(null),zo=8,la=50,zs=_.useRef(null),Ns=_.useRef(null),Zs=_.useRef(null),Et=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ae)Re(!0);else{Qe(!1),et("main");const D=Ft(()=>Re(!1),0);return()=>clearTimeout(D)}},[Ae]);const Xo=k&&N&&!Be;_.useEffect(()=>{if(Xo){Le(!1),pe(!0),Ks(new Set);const D=Ft(()=>{Ks(L=>{const F=new Set(L);return E.forEach(G=>F.add(G.id)),F})},350);return()=>clearTimeout(D)}else if(me){Le(!0);const D=Ft(()=>{pe(!1),Le(!1)},250);return()=>clearTimeout(D)}},[Xo]),_.useEffect(()=>{H(!0),Tt(window.scrollY);const D=bm(Et);O(D.filter(Dr)),Bx||(Bo(!0),Bx=!0,Ft(()=>Bo(!1),750));try{const L=localStorage.getItem("feedback-toolbar-theme");L!==null&&Zi(L==="dark")}catch{}try{const L=localStorage.getItem("feedback-toolbar-position");if(L){const F=JSON.parse(L);typeof F.x=="number"&&typeof F.y=="number"&&qs(F)}}catch{}},[Et]),_.useEffect(()=>{ft&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(sn))},[sn,ft]),_.useEffect(()=>{ft&&localStorage.setItem("feedback-toolbar-theme",Os?"dark":"light")},[Os,ft]);const yn=_.useRef(!1);_.useEffect(()=>{const D=yn.current;yn.current=Vs,D&&!Vs&&gn&&ft&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(gn))},[Vs,gn,ft]),_.useEffect(()=>{if(!g||!ft||di.current)return;di.current=!0,Lo("connecting"),(async()=>{try{const L=aM(Et),F=x||L;let G=!1;if(F)try{const T=await kx(g,F);jo(T.id),Lo("connected"),vm(Et,T.id),G=!0;const V=bm(Et),ie=new Set(T.annotations.map(ye=>ye.id)),oe=V.filter(ye=>!ie.has(ye.id));if(oe.length>0){const Ne=`${typeof window<"u"?window.location.origin:""}${Et}`,pt=(await Promise.allSettled(oe.map(ht=>gl(g,T.id,{...ht,sessionId:T.id,url:Ne})))).map((ht,dt)=>ht.status==="fulfilled"?ht.value:(console.warn("[Agentation] Failed to sync annotation:",ht.reason),oe[dt])),St=[...T.annotations,...pt];O(St.filter(Dr)),xc(Et,St.filter(Dr),T.id)}else O(T.annotations.filter(Dr)),xc(Et,T.annotations.filter(Dr),T.id)}catch(T){console.warn("[Agentation] Could not join session, creating new:",T),rM(Et)}if(!G){const T=typeof window<"u"?window.location.href:"/",V=await wm(g,T);jo(V.id),Lo("connected"),vm(Et,V.id),b==null||b(V.id);const ie=Zj(),oe=typeof window<"u"?window.location.origin:"",ye=[];for(const[Ne,qe]of ie){const pt=qe.filter(dt=>!dt._syncedTo);if(pt.length===0)continue;const St=`${oe}${Ne}`,ht=Ne===Et;ye.push((async()=>{try{const dt=ht?V:await wm(g,St),cn=(await Promise.allSettled(pt.map(Qt=>gl(g,dt.id,{...Qt,sessionId:dt.id,url:St})))).map((Qt,Ln)=>Qt.status==="fulfilled"?Qt.value:(console.warn("[Agentation] Failed to sync annotation:",Qt.reason),pt[Ln])).filter(Dr);if(xc(Ne,cn,dt.id),ht){const Qt=new Set(pt.map(Ln=>Ln.id));O(Ln=>{const Ht=Ln.filter(Yt=>!Qt.has(Yt.id));return[...cn,...Ht]})}}catch(dt){console.warn(`[Agentation] Failed to sync annotations for ${Ne}:`,dt)}})())}await Promise.allSettled(ye)}}catch(L){Lo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",L)}})()},[g,x,ft,b,Et]),_.useEffect(()=>{if(!g||!ft)return;const D=async()=>{try{(await fetch(`${g}/health`)).ok?Lo("connected"):Lo("disconnected")}catch{Lo("disconnected")}};D();const L=t8(D,1e4);return()=>clearInterval(L)},[g,ft]),_.useEffect(()=>{if(!g||!ft||!Yn)return;const D=new EventSource(`${g}/sessions/${Yn}/events`),L=["resolved","dismissed"],F=G=>{var T;try{const V=JSON.parse(G.data);if(L.includes((T=V.payload)==null?void 0:T.status)){const ie=V.payload.id,oe=V.payload.kind;if(oe==="placement"){for(const[ye,Ne]of Ps.current)if(Ne===ie){Ps.current.delete(ye),Lt(qe=>qe.filter(pt=>pt.id!==ye));break}}else if(oe==="rearrange"){for(const[ye,Ne]of Ro.current)if(Ne===ie){Ro.current.delete(ye),kn(qe=>{if(!qe)return null;const pt=qe.sections.filter(St=>St.id!==ye);return pt.length===0?null:{...qe,sections:pt}});break}}else Oo(ye=>new Set(ye).add(ie)),Ft(()=>{O(ye=>ye.filter(Ne=>Ne.id!==ie)),Oo(ye=>{const Ne=new Set(ye);return Ne.delete(ie),Ne})},150)}}catch{}};return D.addEventListener("annotation.updated",F),()=>{D.removeEventListener("annotation.updated",F),D.close()}},[g,ft,Yn]),_.useEffect(()=>{if(!g||!ft)return;const D=hi.current==="disconnected",L=Us==="connected";hi.current=Us,D&&L&&(async()=>{try{const G=bm(Et);if(G.length===0)return;const V=`${typeof window<"u"?window.location.origin:""}${Et}`;let ie=Yn,oe=[];if(ie)try{oe=(await kx(g,ie)).annotations}catch{ie=null}ie||(ie=(await wm(g,V)).id,jo(ie),vm(Et,ie));const ye=new Set(oe.map(qe=>qe.id)),Ne=G.filter(qe=>!ye.has(qe.id));if(Ne.length>0){const pt=(await Promise.allSettled(Ne.map(dt=>gl(g,ie,{...dt,sessionId:ie,url:V})))).map((dt,Bn)=>dt.status==="fulfilled"?dt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",dt.reason),Ne[Bn])),ht=[...oe,...pt].filter(Dr);O(ht),xc(Et,ht,ie)}}catch(G){console.warn("[Agentation] Failed to sync on reconnect:",G)}})()},[Us,g,ft,Yn,Et]);const $o=_.useCallback(()=>{X||(Z(!0),at(!1),j(!1),Ft(()=>{cM(!0),U(!0),Z(!1)},400))},[X]);_.useEffect(()=>{if(!i||!ft||!t||t.length===0||E.length>0)return;const D=[];return D.push(Ft(()=>{j(!0)},n-200)),t.forEach((L,F)=>{const G=n+F*300;D.push(Ft(()=>{const T=document.querySelector(L.selector);if(!T)return;const V=T.getBoundingClientRect(),{name:ie,path:oe}=Cl(T),ye={id:`demo-${Date.now()}-${F}`,x:(V.left+V.width/2)/window.innerWidth*100,y:V.top+V.height/2+window.scrollY,comment:L.comment,element:ie,elementPath:oe,timestamp:Date.now(),selectedText:L.selectedText,boundingBox:{x:V.left,y:V.top+window.scrollY,width:V.width,height:V.height},nearbyText:gc(T),cssClasses:yc(T)};O(Ne=>[...Ne,ye])},G))}),()=>{D.forEach(clearTimeout)}},[i,ft,t,n]),_.useEffect(()=>{const D=()=>{Tt(window.scrollY),zt(!0),Zs.current&&clearTimeout(Zs.current),Zs.current=Ft(()=>{zt(!1)},150)};return window.addEventListener("scroll",D,{passive:!0}),()=>{window.removeEventListener("scroll",D),Zs.current&&clearTimeout(Zs.current)}},[]),_.useEffect(()=>{ft&&E.length>0?Yn?xc(Et,E,Yn):c2(Et,E):ft&&E.length===0&&localStorage.removeItem(Yd(Et))},[E,Et,ft,Yn]),_.useEffect(()=>{if(ft&&!nn.current){nn.current=!0;const D=Jj(Et);D.length>0&&Lt(D)}},[ft,Et]),_.useEffect(()=>{ft&&nn.current&&!_t&&(nt.length>0?eM(Et,nt):tM(Et))},[nt,Et,ft,_t]),_.useEffect(()=>{if(ft&&!ho.current){ho.current=!0;const D=nM(Et);if(D){const L={...D,sections:D.sections.map(F=>{var G;return{...F,currentRect:(G=F.currentRect)!=null?G:{...F.originalRect}}})};kn(L)}}},[ft,Et]),_.useEffect(()=>{ft&&ho.current&&!_t&&(rt?sM(Et,rt):oM(Et))},[rt,Et,ft,_t]);const ti=_.useRef(!1);_.useEffect(()=>{if(ft&&!ti.current){ti.current=!0;const D=iM(Et);D&&(mo.current={rearrange:D.rearrange,placements:D.placements||[]},D.purpose&&bn(D.purpose))}},[ft,Et]),_.useEffect(()=>{var L,F,G,T,V;if(!ft||!ti.current)return;const D=mo.current;_t?((F=(L=rt==null?void 0:rt.sections)==null?void 0:L.length)!=null?F:0)>0||nt.length>0||$t?Cx(Et,{rearrange:rt,placements:nt,purpose:$t}):_d(Et):((V=(T=(G=D.rearrange)==null?void 0:G.sections)==null?void 0:T.length)!=null?V:0)>0||D.placements.length>0||$t?Cx(Et,{rearrange:D.rearrange,placements:D.placements,purpose:$t}):_d(Et)},[rt,nt,$t,_t,Et,ft]),_.useEffect(()=>{Be&&!rt&&kn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Be,rt]),_.useEffect(()=>{if(!g||!Yn)return;const D=Ps.current,L=new Set(nt.map(F=>F.id));for(const F of nt){if(D.has(F.id))continue;D.set(F.id,"");const G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;gl(g,Yn,{id:F.id,x:F.x/window.innerWidth*100,y:F.y,comment:`Place ${F.type} at (${Math.round(F.x)}, ${Math.round(F.y)}), ${F.width}×${F.height}px${F.text?` — "${F.text}"`:""}`,element:`[design:${F.type}]`,elementPath:"[placement]",timestamp:F.timestamp,url:G,intent:"change",severity:"important",kind:"placement",placement:{componentType:F.type,width:F.width,height:F.height,scrollY:F.scrollY,text:F.text}}).then(T=>{D.has(F.id)&&D.set(F.id,T.id)}).catch(T=>{console.warn("[Agentation] Failed to sync placement annotation:",T),D.delete(F.id)})}for(const[F,G]of D)L.has(F)||(D.delete(F),G&&ar(g,G).catch(()=>{}))},[nt,g,Yn,Et]),_.useEffect(()=>{if(!(!g||!Yn))return no.current&&clearTimeout(no.current),no.current=Ft(()=>{const D=Ro.current;if(!rt||rt.sections.length===0){for(const[,G]of D)G&&ar(g,G).catch(()=>{});D.clear();return}const L=new Set(rt.sections.map(G=>G.id)),F=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;for(const G of rt.sections){const T=G.originalRect,V=G.currentRect;if(!(Math.abs(T.x-V.x)>1||Math.abs(T.y-V.y)>1||Math.abs(T.width-V.width)>1||Math.abs(T.height-V.height)>1)){const ye=D.get(G.id);ye&&(D.delete(G.id),ar(g,ye).catch(()=>{}));continue}const oe=D.get(G.id);oe?jx(g,oe,{comment:`Move ${G.label} section (${G.tagName}) — from (${Math.round(T.x)},${Math.round(T.y)}) ${Math.round(T.width)}×${Math.round(T.height)} to (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)}`}).catch(ye=>{console.warn("[Agentation] Failed to update rearrange annotation:",ye)}):(D.set(G.id,""),gl(g,Yn,{id:G.id,x:V.x/window.innerWidth*100,y:V.y,comment:`Move ${G.label} section (${G.tagName}) — from (${Math.round(T.x)},${Math.round(T.y)}) ${Math.round(T.width)}×${Math.round(T.height)} to (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)}`,element:G.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:F,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:G.selector,label:G.label,tagName:G.tagName,originalRect:T,currentRect:V}}).then(ye=>{D.has(G.id)&&D.set(G.id,ye.id)}).catch(ye=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ye),D.delete(G.id)}))}for(const[G,T]of D)L.has(G)||(D.delete(G),T&&ar(g,T).catch(()=>{}))},300),()=>{no.current&&clearTimeout(no.current)}},[rt,g,Yn,Et]);const Ao=_.useRef(new Map);_.useLayoutEffect(()=>{var F;const D=(F=rt==null?void 0:rt.sections)!=null?F:[],L=new Set;if((Be||xt)&&k)for(const G of D){L.add(G.id);try{const T=document.querySelector(G.selector);if(!T)continue;if(!Ao.current.has(G.id)){const V={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},ie=[];let oe=T.parentElement;for(;oe&&oe!==document.body;){const Ne=getComputedStyle(oe);(Ne.overflow!=="visible"||Ne.overflowX!=="visible"||Ne.overflowY!=="visible")&&(ie.push({el:oe,overflow:oe.style.overflow}),oe.style.overflow="visible"),oe=oe.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),Ao.current.set(G.id,{el:T,origStyles:V,ancestors:ie}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(const[G,T]of Ao.current)if(!L.has(G)){const{el:V,origStyles:ie,ancestors:oe}=T;V.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",V.style.transform=ie.transform,V.style.transformOrigin=ie.transformOrigin,V.style.opacity=ie.opacity,V.style.position=ie.position,V.style.zIndex=ie.zIndex,Ao.current.delete(G),Ft(()=>{V.style.transition="",V.style.display=ie.display;for(const ye of oe)ye.el.style.overflow=ye.overflow},450)}},[rt,Be,xt,k]),_.useEffect(()=>()=>{for(const[,D]of Ao.current){const{el:L,origStyles:F,ancestors:G}=D;L.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",L.style.transform=F.transform,L.style.transformOrigin=F.transformOrigin,L.style.opacity=F.opacity,L.style.position=F.position,L.style.zIndex=F.zIndex,Ft(()=>{L.style.transition="",L.style.display=F.display;for(const T of G)T.el.style.overflow=T.overflow},450)}Ao.current.clear()},[]);const xo=_.useCallback(()=>{jt(!0),tt(!1),gt(null),clearTimeout(Ms.current),Ms.current=Ft(()=>{jt(!1)},300)},[]),mi=_.useCallback(()=>{Be&&(jt(!0),tt(!1),gt(null),clearTimeout(Ms.current),Ms.current=Ft(()=>{jt(!1)},300)),j(!1)},[Be]),C=_.useCallback(()=>{J||(s8(),ve(!0))},[J]),Y=_.useCallback(()=>{J&&(ux(),ve(!1))},[J]),re=_.useCallback(()=>{J?Y():C()},[J,C,Y]),Te=_.useCallback(()=>{if(Pn.length===0)return;const D=Pn[0],L=D.element,F=Pn.length>1,G=Pn.map(T=>T.element.getBoundingClientRect());if(F){const T={left:Math.min(...G.map(dt=>dt.left)),top:Math.min(...G.map(dt=>dt.top)),right:Math.max(...G.map(dt=>dt.right)),bottom:Math.max(...G.map(dt=>dt.bottom))},V=Pn.slice(0,5).map(dt=>dt.name).join(", "),ie=Pn.length>5?` +${Pn.length-5} more`:"",oe=G.map(dt=>({x:dt.left,y:dt.top+window.scrollY,width:dt.width,height:dt.height})),Ne=Pn[Pn.length-1].element,qe=G[G.length-1],pt=qe.left+qe.width/2,St=qe.top+qe.height/2,ht=Em(Ne);ge({x:pt/window.innerWidth*100,y:ht?St:St+window.scrollY,clientY:St,element:`${Pn.length} elements: ${V}${ie}`,elementPath:"multi-select",boundingBox:{x:T.left,y:T.top+window.scrollY,width:T.right-T.left,height:T.bottom-T.top},isMultiSelect:!0,isFixed:ht,elementBoundingBoxes:oe,multiSelectElements:Pn.map(dt=>dt.element),targetElement:Ne,fullPath:hd(L),accessibility:fd(L),computedStyles:dd(L),computedStylesObj:ud(L),nearbyElements:cd(L),cssClasses:yc(L),nearbyText:gc(L),sourceFile:xd(L)})}else{const T=G[0],V=Em(L);ge({x:T.left/window.innerWidth*100,y:V?T.top:T.top+window.scrollY,clientY:T.top,element:D.name,elementPath:D.path,boundingBox:{x:T.left,y:V?T.top:T.top+window.scrollY,width:T.width,height:T.height},isFixed:V,fullPath:hd(L),accessibility:fd(L),computedStyles:dd(L),computedStylesObj:ud(L),nearbyElements:cd(L),cssClasses:yc(L),nearbyText:gc(L),reactComponents:D.reactComponents,sourceFile:xd(L)})}Es([]),le(null)},[Pn]);_.useEffect(()=>{k||(ge(null),$e(null),je(null),it([]),le(null),at(!1),Es([]),ys.current={cmd:!1,shift:!1},J&&Y())},[k,J,Y]),_.useEffect(()=>()=>{ux()},[]),_.useEffect(()=>{if(!k)return;const D=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),L=":not([data-agentation-root]):not([data-agentation-root] *)",F=document.createElement("style");return F.id="feedback-cursor-styles",F.textContent=`
      body ${L} {
        cursor: crosshair !important;
      }

      body :is(${D})${L} {
        cursor: text !important;
      }
    `,document.head.appendChild(F),()=>{const G=document.getElementById("feedback-cursor-styles");G&&G.remove()}},[k]),_.useEffect(()=>{if(Ls!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ls,k]),_.useEffect(()=>{if(!k||W||is||Be)return;const D=L=>{const F=L.composedPath()[0]||L.target;if(oi(F,"[data-feedback-toolbar]")){le(null);return}const G=Ar(L.clientX,L.clientY);if(!G||oi(G,"[data-feedback-toolbar]")){le(null);return}const{name:T,elementName:V,path:ie,reactComponents:oe}=jm(G,Hs),ye=G.getBoundingClientRect();le({element:T,elementName:V,elementPath:ie,rect:ye,reactComponents:oe}),ce({x:L.clientX,y:L.clientY})};return document.addEventListener("mousemove",D),()=>document.removeEventListener("mousemove",D)},[k,W,is,Be,Hs,Dn]);const Xe=_.useCallback(D=>{var L;if($e(D),He(null),It(null),lt([]),(L=D.elementBoundingBoxes)!=null&&L.length){const F=[];for(const G of D.elementBoundingBoxes){const T=G.x+G.width/2,V=G.y+G.height/2-window.scrollY,ie=Ar(T,V);ie&&F.push(ie)}it(F),je(null)}else if(D.boundingBox){const F=D.boundingBox,G=F.x+F.width/2,T=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,V=Ar(G,T);if(V){const ie=V.getBoundingClientRect(),oe=ie.width/F.width,ye=ie.height/F.height;oe<.5||ye<.5?je(null):je(V)}else je(null);it([])}else je(null),it([])},[]);_.useEffect(()=>{if(!k||is||Be)return;const D=L=>{var on,cn;if(ei.current){ei.current=!1;return}const F=L.composedPath()[0]||L.target;if(oi(F,"[data-feedback-toolbar]")||oi(F,"[data-annotation-popup]")||oi(F,"[data-annotation-marker]"))return;if(L.metaKey&&L.shiftKey&&!W&&!Q){L.preventDefault(),L.stopPropagation();const Qt=Ar(L.clientX,L.clientY);if(!Qt)return;const Ln=Qt.getBoundingClientRect(),{name:Ht,path:Yt,reactComponents:ds}=jm(Qt,Hs),On=Pn.findIndex(Ys=>Ys.element===Qt);On>=0?Es(Ys=>Ys.filter((bo,as)=>as!==On)):Es(Ys=>[...Ys,{element:Qt,rect:Ln,name:Ht,path:Yt,reactComponents:ds!=null?ds:void 0}]);return}const G=oi(F,"button, a, input, select, textarea, [role='button'], [onclick]");if(sn.blockInteractions&&G&&(L.preventDefault(),L.stopPropagation()),W){if(G&&!sn.blockInteractions)return;L.preventDefault(),(on=zs.current)==null||on.shake();return}if(Q){if(G&&!sn.blockInteractions)return;L.preventDefault(),(cn=Ns.current)==null||cn.shake();return}L.preventDefault();const T=Ar(L.clientX,L.clientY);if(!T)return;const{name:V,path:ie,reactComponents:oe}=jm(T,Hs),ye=T.getBoundingClientRect(),Ne=L.clientX/window.innerWidth*100,qe=Em(T),pt=qe?L.clientY:L.clientY+window.scrollY,St=window.getSelection();let ht;St&&St.toString().trim().length>0&&(ht=St.toString().trim().slice(0,500));const dt=ud(T),Bn=dd(T);ge({x:Ne,y:pt,clientY:L.clientY,element:V,elementPath:ie,selectedText:ht,boundingBox:{x:ye.left,y:qe?ye.top:ye.top+window.scrollY,width:ye.width,height:ye.height},nearbyText:gc(T),cssClasses:yc(T),isFixed:qe,fullPath:hd(T),accessibility:fd(T),computedStyles:Bn,computedStylesObj:dt,nearbyElements:cd(T),reactComponents:oe!=null?oe:void 0,sourceFile:xd(T),targetElement:T}),le(null)};return document.addEventListener("click",D,!0),()=>document.removeEventListener("click",D,!0)},[k,is,Be,W,Q,sn.blockInteractions,Hs,Pn]),_.useEffect(()=>{if(!k)return;const D=G=>{G.key==="Meta"&&(ys.current.cmd=!0),G.key==="Shift"&&(ys.current.shift=!0)},L=G=>{const T=ys.current.cmd&&ys.current.shift;G.key==="Meta"&&(ys.current.cmd=!1),G.key==="Shift"&&(ys.current.shift=!1);const V=ys.current.cmd&&ys.current.shift;T&&!V&&Pn.length>0&&Te()},F=()=>{ys.current={cmd:!1,shift:!1},Es([])};return document.addEventListener("keydown",D),document.addEventListener("keyup",L),window.addEventListener("blur",F),()=>{document.removeEventListener("keydown",D),document.removeEventListener("keyup",L),window.removeEventListener("blur",F)}},[k,Pn,Te]),_.useEffect(()=>{if(!k||W||is||Be)return;const D=L=>{const F=L.composedPath()[0]||L.target;oi(F,"[data-feedback-toolbar]")||oi(F,"[data-annotation-marker]")||oi(F,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(F.tagName)||F.isContentEditable||(L.preventDefault(),yo.current={x:L.clientX,y:L.clientY})};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[k,W,is,Be]),_.useEffect(()=>{if(!k||W)return;const D=L=>{if(!yo.current)return;const F=L.clientX-yo.current.x,G=L.clientY-yo.current.y,T=F*F+G*G,V=zo*zo;if(!go&&T>=V&&(qn.current=yo.current,ts(!0),L.preventDefault()),(go||T>=V)&&qn.current){if(Qs.current){const Ht=Math.min(qn.current.x,L.clientX),Yt=Math.min(qn.current.y,L.clientY),ds=Math.abs(L.clientX-qn.current.x),On=Math.abs(L.clientY-qn.current.y);Qs.current.style.transform=`translate(${Ht}px, ${Yt}px)`,Qs.current.style.width=`${ds}px`,Qs.current.style.height=`${On}px`}const ie=Date.now();if(ie-$i.current<la)return;$i.current=ie;const oe=qn.current.x,ye=qn.current.y,Ne=Math.min(oe,L.clientX),qe=Math.min(ye,L.clientY),pt=Math.max(oe,L.clientX),St=Math.max(ye,L.clientY),ht=(Ne+pt)/2,dt=(qe+St)/2,Bn=new Set,on=[[Ne,qe],[pt,qe],[Ne,St],[pt,St],[ht,dt],[ht,qe],[ht,St],[Ne,dt],[pt,dt]];for(const[Ht,Yt]of on){const ds=document.elementsFromPoint(Ht,Yt);for(const On of ds)On instanceof HTMLElement&&Bn.add(On)}const cn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ht of cn)if(Ht instanceof HTMLElement){const Yt=Ht.getBoundingClientRect(),ds=Yt.left+Yt.width/2,On=Yt.top+Yt.height/2,Ys=ds>=Ne&&ds<=pt&&On>=qe&&On<=St,bo=Math.min(Yt.right,pt)-Math.max(Yt.left,Ne),as=Math.min(Yt.bottom,St)-Math.max(Yt.top,qe),ni=bo>0&&as>0?bo*as:0,pi=Yt.width*Yt.height,_i=pi>0?ni/pi:0;(Ys||_i>.5)&&Bn.add(Ht)}const Qt=[],Ln=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ht of Bn){if(oi(Ht,"[data-feedback-toolbar]")||oi(Ht,"[data-annotation-marker]"))continue;const Yt=Ht.getBoundingClientRect();if(!(Yt.width>window.innerWidth*.8&&Yt.height>window.innerHeight*.5)&&!(Yt.width<10||Yt.height<10)&&Yt.left<pt&&Yt.right>Ne&&Yt.top<St&&Yt.bottom>qe){const ds=Ht.tagName;let On=Ln.has(ds);if(!On&&(ds==="DIV"||ds==="SPAN")){const Ys=Ht.textContent&&Ht.textContent.trim().length>0,bo=Ht.onclick!==null||Ht.getAttribute("role")==="button"||Ht.getAttribute("role")==="link"||Ht.classList.contains("clickable")||Ht.hasAttribute("data-clickable");(Ys||bo)&&!Ht.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(On=!0)}if(On){let Ys=!1;for(const bo of Qt)if(bo.left<=Yt.left&&bo.right>=Yt.right&&bo.top<=Yt.top&&bo.bottom>=Yt.bottom){Ys=!0;break}Ys||Qt.push(Yt)}}}if(Jo.current){const Ht=Jo.current;for(;Ht.children.length>Qt.length;)Ht.removeChild(Ht.lastChild);Qt.forEach((Yt,ds)=>{let On=Ht.children[ds];On||(On=document.createElement("div"),On.className=Ze.selectedElementHighlight,Ht.appendChild(On)),On.style.transform=`translate(${Yt.left}px, ${Yt.top}px)`,On.style.width=`${Yt.width}px`,On.style.height=`${Yt.height}px`})}}};return document.addEventListener("mousemove",D,{passive:!0}),()=>document.removeEventListener("mousemove",D)},[k,W,go,zo]),_.useEffect(()=>{if(!k)return;const D=L=>{const F=go,G=qn.current;if(go&&G){ei.current=!0;const T=Math.min(G.x,L.clientX),V=Math.min(G.y,L.clientY),ie=Math.max(G.x,L.clientX),oe=Math.max(G.y,L.clientY),ye=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ht=>{if(!(ht instanceof HTMLElement)||oi(ht,"[data-feedback-toolbar]")||oi(ht,"[data-annotation-marker]"))return;const dt=ht.getBoundingClientRect();dt.width>window.innerWidth*.8&&dt.height>window.innerHeight*.5||dt.width<10||dt.height<10||dt.left<ie&&dt.right>T&&dt.top<oe&&dt.bottom>V&&ye.push({element:ht,rect:dt})});const qe=ye.filter(({element:ht})=>!ye.some(({element:dt})=>dt!==ht&&ht.contains(dt))),pt=L.clientX/window.innerWidth*100,St=L.clientY+window.scrollY;if(qe.length>0){const ht=qe.reduce((Ln,{rect:Ht})=>({left:Math.min(Ln.left,Ht.left),top:Math.min(Ln.top,Ht.top),right:Math.max(Ln.right,Ht.right),bottom:Math.max(Ln.bottom,Ht.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),dt=qe.slice(0,5).map(({element:Ln})=>Cl(Ln).name).join(", "),Bn=qe.length>5?` +${qe.length-5} more`:"",on=qe[0].element,cn=ud(on),Qt=dd(on);ge({x:pt,y:St,clientY:L.clientY,element:`${qe.length} elements: ${dt}${Bn}`,elementPath:"multi-select",boundingBox:{x:ht.left,y:ht.top+window.scrollY,width:ht.right-ht.left,height:ht.bottom-ht.top},isMultiSelect:!0,fullPath:hd(on),accessibility:fd(on),computedStyles:Qt,computedStylesObj:cn,nearbyElements:cd(on),cssClasses:yc(on),nearbyText:gc(on),sourceFile:xd(on)})}else{const ht=Math.abs(ie-T),dt=Math.abs(oe-V);ht>20&&dt>20&&ge({x:pt,y:St,clientY:L.clientY,element:"Area selection",elementPath:`region at (${Math.round(T)}, ${Math.round(V)})`,boundingBox:{x:T,y:V+window.scrollY,width:ht,height:dt},isMultiSelect:!0})}le(null)}else F&&(ei.current=!0);yo.current=null,qn.current=null,ts(!1),Jo.current&&(Jo.current.innerHTML="")};return document.addEventListener("mouseup",D),()=>document.removeEventListener("mouseup",D)},[k,go]);const st=_.useCallback(async(D,L,F)=>{const G=sn.webhookUrl||w;if(!G||!sn.webhooksEnabled&&!F)return!1;try{return(await fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:D,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...L})})).ok}catch(T){return console.warn("[Agentation] Webhook failed:",T),!1}},[w,sn.webhookUrl,sn.webhooksEnabled]),Kt=_.useCallback(D=>{var F;if(!W)return;const L={id:Date.now().toString(),x:W.x,y:W.y,comment:D,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,...g&&Yn?{sessionId:Yn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};O(G=>[...G,L]),fi.current=L.id,Ft(()=>{fi.current=null},300),Ft(()=>{Ks(G=>new Set(G).add(L.id))},250),a==null||a(L),st("annotation.add",{annotation:L}),ks(!0),Ft(()=>{ge(null),ks(!1)},150),(F=window.getSelection())==null||F.removeAllRanges(),g&&Yn&&gl(g,Yn,L).then(G=>{G.id!==L.id&&(O(T=>T.map(V=>V.id===L.id?{...V,id:G.id}:V)),Ks(T=>{const V=new Set(T);return V.delete(L.id),V.add(G.id),V}))}).catch(G=>{console.warn("[Agentation] Failed to sync annotation:",G)})},[W,a,st,g,Yn]),Wt=_.useCallback(()=>{ks(!0),Ft(()=>{ge(null),ks(!1)},150)},[]),ln=_.useCallback(D=>{const L=E.findIndex(G=>G.id===D),F=E[L];(Q==null?void 0:Q.id)===D&&(_o(!0),Ft(()=>{$e(null),je(null),it([]),_o(!1)},150)),Zt(D),Oo(G=>new Set(G).add(D)),F&&(c==null||c(F),st("annotation.delete",{annotation:F})),g&&ar(g,D).catch(G=>{console.warn("[Agentation] Failed to delete annotation from server:",G)}),Ft(()=>{O(G=>G.filter(T=>T.id!==D)),Oo(G=>{const T=new Set(G);return T.delete(D),T}),Zt(null),L<E.length-1&&(tn(L),Ft(()=>tn(null),200))},150)},[E,Q,c,st,g]),mn=_.useCallback(D=>{var L;if(!D){He(null),It(null),lt([]);return}if(He(D.id),(L=D.elementBoundingBoxes)!=null&&L.length){const F=[];for(const G of D.elementBoundingBoxes){const T=G.x+G.width/2,V=G.y+G.height/2-window.scrollY,oe=document.elementsFromPoint(T,V).find(ye=>!ye.closest("[data-annotation-marker]")&&!ye.closest("[data-agentation-root]"));oe&&F.push(oe)}lt(F),It(null)}else if(D.boundingBox){const F=D.boundingBox,G=F.x+F.width/2,T=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,V=Ar(G,T);if(V){const ie=V.getBoundingClientRect(),oe=ie.width/F.width,ye=ie.height/F.height;oe<.5||ye<.5?It(null):It(V)}else It(null);lt([])}else It(null),lt([])},[]),Nn=_.useCallback(D=>{if(!Q)return;const L={...Q,comment:D};O(F=>F.map(G=>G.id===Q.id?L:G)),u==null||u(L),st("annotation.update",{annotation:L}),g&&jx(g,Q.id,{comment:D}).catch(F=>{console.warn("[Agentation] Failed to update annotation on server:",F)}),_o(!0),Ft(()=>{$e(null),je(null),it([]),_o(!1)},150)},[Q,u,st,g]),Hn=_.useCallback(()=>{_o(!0),Ft(()=>{$e(null),je(null),it([]),_o(!1)},150)},[]),Mn=_.useCallback(()=>{const D=E.length,L=nt.length>0||!!rt;if(D===0&&Dn.length===0&&!L)return;if(d==null||d(E),st("annotations.clear",{annotations:E}),g){Promise.all(E.map(T=>ar(g,T.id).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)})));for(const[,T]of Ps.current)T&&ar(g,T).catch(()=>{});Ps.current.clear();for(const[,T]of Ro.current)T&&ar(g,T).catch(()=>{});Ro.current.clear()}Ye(!0),de(!0),so([]);const F=po.current;if(F){const T=F.getContext("2d");T&&T.clearRect(0,0,F.width,F.height)}(nt.length>0||rt)&&(Xn(T=>T+1),Bs(T=>T+1),Ft(()=>{Lt([]),kn(null)},200)),_t&&Vt(!1),$t&&bn(""),mo.current={rearrange:null,placements:[]},_d(Et);const G=D*30+200;Ft(()=>{O([]),Ks(new Set),localStorage.removeItem(Yd(Et)),Ye(!1)},G),Ft(()=>de(!1),1500)},[Et,E,Dn,nt,rt,_t,$t,d,st,g]),B=_.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et,L=Be&&_t;let F;if(L){if(nt.length===0&&!rt&&!$t)return;F=""}else{if(F=Tx(E,D,sn.outputDetail),!F&&Dn.length===0&&nt.length===0&&!rt)return;F||(F=`## Page Feedback: ${D}
`)}if(!L&&Dn.length>0){const G=new Set;for(const oe of E)oe.drawingIndex!=null&&G.add(oe.drawingIndex);const T=po.current;T&&(T.style.visibility="hidden");const V=[],ie=window.scrollY;for(let oe=0;oe<Dn.length;oe++){if(G.has(oe))continue;const ye=Dn[oe];if(ye.points.length<2)continue;const Ne=ye.fixed?ye.points:ye.points.map(ns=>({x:ns.x,y:ns.y-ie}));let qe=1/0,pt=1/0,St=-1/0,ht=-1/0;for(const ns of Ne)qe=Math.min(qe,ns.x),pt=Math.min(pt,ns.y),St=Math.max(St,ns.x),ht=Math.max(ht,ns.y);const dt=St-qe,Bn=ht-pt,on=Math.hypot(dt,Bn),cn=Ne[0],Qt=Ne[Ne.length-1],Ln=Math.hypot(Qt.x-cn.x,Qt.y-cn.y);let Ht;const Yt=Ln<on*.35,ds=dt/Math.max(Bn,1);if(Yt&&on>20){const ns=Math.max(dt,Bn)*.15;let gi=0;for(const Ci of Ne){const mr=Ci.x-qe<ns,Pr=St-Ci.x<ns,Hr=Ci.y-pt<ns,vn=ht-Ci.y<ns;(mr||Pr)&&(Hr||vn)&&gi++}Ht=gi>Ne.length*.15?"box":"circle"}else ds>3&&Bn<40?Ht="underline":Ln>on*.5?Ht="arrow":Ht="drawing";const On=Math.min(10,Ne.length),Ys=Math.max(1,Math.floor(Ne.length/On)),bo=new Set,as=[],ni=[cn];for(let ns=Ys;ns<Ne.length-1;ns+=Ys)ni.push(Ne[ns]);ni.push(Qt);for(const ns of ni){const gi=Ar(ns.x,ns.y);if(!gi||bo.has(gi)||oi(gi,"[data-feedback-toolbar]"))continue;bo.add(gi);const{name:Ci}=Cl(gi);as.includes(Ci)||as.push(Ci)}const pi=`${Math.round(qe)},${Math.round(pt)} → ${Math.round(St)},${Math.round(ht)}`;let _i;(Ht==="circle"||Ht==="box")&&as.length>0?_i=`${Ht==="box"?"Boxed":"Circled"} **${as[0]}**${as.length>1?` (and ${as.slice(1).join(", ")})`:""} (region: ${pi})`:Ht==="underline"&&as.length>0?_i=`Underlined **${as[0]}** (${pi})`:Ht==="arrow"&&as.length>=2?_i=`Arrow from **${as[0]}** to **${as[as.length-1]}** (${Math.round(cn.x)},${Math.round(cn.y)} → ${Math.round(Qt.x)},${Math.round(Qt.y)})`:as.length>0?_i=`${Ht==="arrow"?"Arrow":"Drawing"} near **${as.join("**, **")}** (region: ${pi})`:_i=`Drawing at ${pi}`,V.push(_i)}T&&(T.style.visibility=""),V.length>0&&(F+=`
**Drawings:**
`,V.forEach((oe,ye)=>{F+=`${ye+1}. ${oe}
`}))}if((nt.length>0||L&&$t)&&(F+=`
`+wx(nt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:_t,wireframePurpose:$t||void 0},sn.outputDetail)),rt){const G=Sx(rt,sn.outputDetail,{width:window.innerWidth,height:window.innerHeight});G&&(F+=`
`+G)}if(y)try{await navigator.clipboard.writeText(F)}catch{}h==null||h(F),P(!0),Ft(()=>P(!1),2e3),sn.autoClearAfterCopy&&Ft(()=>Mn(),500)},[E,Dn,nt,rt,_t,Be,hn,$t,Et,sn.outputDetail,Hs,sn.autoClearAfterCopy,Mn,y,h]),R=_.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;let L=Tx(E,D,sn.outputDetail);if(!L&&nt.length===0&&!rt)return;if(L||(L=`## Page Feedback: ${D}
`),nt.length>0&&(L+=`
`+wx(nt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:_t,wireframePurpose:$t||void 0},sn.outputDetail)),rt){const G=Sx(rt,sn.outputDetail,{width:window.innerWidth,height:window.innerHeight});G&&(L+=`
`+G)}p&&p(L,E),ne("sending"),await new Promise(G=>Ft(G,150));const F=await st("submit",{output:L,annotations:E},!0);ne(F?"sent":"failed"),Ft(()=>ne("idle"),2500),F&&sn.autoClearAfterCopy&&Ft(()=>Mn(),500)},[p,st,E,nt,rt,_t,hn,Et,sn.outputDetail,Hs,sn.autoClearAfterCopy,Mn]);_.useEffect(()=>{if(!Wn)return;const D=10,L=G=>{const T=G.clientX-Wn.x,V=G.clientY-Wn.y,ie=Math.sqrt(T*T+V*V);if(!Vs&&ie>D&&Mo(!0),Vs||ie>D){let oe=Wn.toolbarX+T,ye=Wn.toolbarY+V;const Ne=20,qe=337,pt=44,ht=qe-(k?Us==="connected"?297:257:44),dt=Ne-ht,Bn=window.innerWidth-Ne-qe;oe=Math.max(dt,Math.min(Bn,oe)),ye=Math.max(Ne,Math.min(window.innerHeight-pt-Ne,ye)),qs({x:oe,y:ye})}},F=()=>{Vs&&(io.current=!0),Mo(!1),Zo(null)};return document.addEventListener("mousemove",L),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",F)}},[Wn,Vs,k,Us]);const I=_.useCallback(D=>{var V,ie;if(D.target.closest("button")||D.target.closest("[data-agentation-settings-panel]"))return;const L=D.currentTarget.parentElement;if(!L)return;const F=L.getBoundingClientRect(),G=(V=gn==null?void 0:gn.x)!=null?V:F.left,T=(ie=gn==null?void 0:gn.y)!=null?ie:F.top;Zo({x:D.clientX,y:D.clientY,toolbarX:G,toolbarY:T})},[gn]);if(_.useEffect(()=>{if(!gn)return;const D=()=>{let T=gn.x,V=gn.y;const ye=20-(337-(k?Us==="connected"?297:257:44)),Ne=window.innerWidth-20-337;T=Math.max(ye,Math.min(Ne,T)),V=Math.max(20,Math.min(window.innerHeight-44-20,V)),(T!==gn.x||V!==gn.y)&&qs({x:T,y:V})};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[gn,k,Us]),_.useEffect(()=>{const D=L=>{const F=L.target,G=F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable;if(L.key==="Escape"){if(Be){wt?gt(null):xo();return}if(is){Ss(!1);return}if(Pn.length>0){Es([]);return}W||k&&(us(),j(!1))}if((L.metaKey||L.ctrlKey)&&L.shiftKey&&(L.key==="f"||L.key==="F")){L.preventDefault(),us(),k?mi():j(!0);return}if(!(G||L.metaKey||L.ctrlKey)&&((L.key==="p"||L.key==="P")&&(L.preventDefault(),us(),re()),(L.key==="l"||L.key==="L")&&(L.preventDefault(),us(),is&&Ss(!1),Ae&&at(!1),W&&Wt(),Be?xo():tt(!0)),(L.key==="h"||L.key==="H")&&E.length>0&&(L.preventDefault(),us(),M(T=>!T)),(L.key==="c"||L.key==="C")&&(E.length>0||nt.length>0||rt)&&(L.preventDefault(),us(),B()),(L.key==="x"||L.key==="X")&&(E.length>0||nt.length>0||rt)&&(L.preventDefault(),us(),Mn(),nt.length>0&&Lt([]),rt&&kn(null)),L.key==="s"||L.key==="S")){const T=ha(sn.webhookUrl)||ha(w||"");E.length>0&&T&&ue==="idle"&&(L.preventDefault(),us(),R())}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[k,is,Be,wt,nt,rt,W,E.length,sn.webhookUrl,w,ue,R,re,B,Mn,Pn]),!ft||q)return null;const te=E.length>0,fe=E.filter(D=>!Eo.has(D.id)&&D.kind!=="placement"&&D.kind!=="rearrange"),Ue=fe.length>0,Ge=E.filter(D=>Eo.has(D.id)),bt=D=>{const V=D.x/100*window.innerWidth,ie=typeof D.y=="string"?parseFloat(D.y):D.y,oe={};window.innerHeight-ie-22-10<80&&(oe.top="auto",oe.bottom="calc(100% + 10px)");const Ne=V-200/2,qe=10;if(Ne<qe){const pt=qe-Ne;oe.left=`calc(50% + ${pt}px)`}else if(Ne+200>window.innerWidth-qe){const pt=Ne+200-(window.innerWidth-qe);oe.left=`calc(50% - ${pt}px)`}return oe};return Al.createPortal(l.jsxs("div",{ref:he,style:{display:"contents"},"data-agentation-theme":Os?"dark":"light","data-agentation-accent":sn.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ze.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:gn?{left:gn.x,top:gn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ze.toolbarContainer} ${k?Ze.expanded:Ze.collapsed} ${Ji?Ze.entrance:""} ${X?Ze.hiding:""} ${!sn.webhooksEnabled&&(ha(sn.webhookUrl)||ha(w||""))?Ze.serverConnected:""}`,onClick:k?void 0:D=>{if(io.current){io.current=!1,D.preventDefault();return}j(!0)},onMouseDown:I,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ze.toggleContent} ${k?Ze.hidden:Ze.visible}`,children:[l.jsx(Ik,{size:24}),Ue&&l.jsx("span",{className:`${Ze.badge} ${k?Ze.fadeOut:""} ${Ji?Ze.entrance:""}`,children:fe.length})]}),l.jsxs("div",{className:`${Ze.controlsContent} ${k?Ze.visible:Ze.hidden} ${gn&&gn.y<100?Ze.tooltipBelow:""} ${We||Ae?Ze.tooltipsHidden:""} ${Cs?Ze.tooltipsInSession:""}`,onMouseEnter:Qo,onMouseLeave:Li,children:[l.jsxs("div",{className:`${Ze.buttonWrapper} ${gn&&gn.x<120?Ze.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ze.controlButton,onClick:D=>{D.stopPropagation(),us(),re()},"data-active":J,children:l.jsx(Yk,{size:24,isPaused:J})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:Ze.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:`${Ze.controlButton} ${Os?"":Ze.light}`,onClick:D=>{D.stopPropagation(),us(),is&&Ss(!1),Ae&&at(!1),W&&Wt(),Be?xo():tt(!0)},"data-active":Be,style:Be&&_t?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Jk,{size:21})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[Be?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ze.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:D=>{D.stopPropagation(),us(),M(!N)},disabled:!te||Be,children:l.jsx(Vk,{size:24,isOpen:N})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[N?"Hide markers":"Show markers",l.jsx("span",{className:Ze.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:`${Ze.controlButton} ${De?Ze.statusShowing:""}`,onClick:D=>{D.stopPropagation(),us(),B()},disabled:Be&&_t?nt.length===0&&!((an=rt==null?void 0:rt.sections)!=null&&an.length):!te&&Dn.length===0&&nt.length===0&&!((Un=rt==null?void 0:rt.sections)!=null&&Un.length),"data-active":De,children:l.jsx(Hk,{size:24,copied:De,tint:Be&&_t&&(nt.length>0||(Xt=rt==null?void 0:rt.sections)!=null&&Xt.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[Be&&_t?"Copy layout":"Copy feedback",l.jsx("span",{className:Ze.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ze.buttonWrapper} ${Ze.sendButtonWrapper} ${k&&!sn.webhooksEnabled&&(ha(sn.webhookUrl)||ha(w||""))?Ze.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ze.controlButton} ${ue==="sent"||ue==="failed"?Ze.statusShowing:""}`,onClick:D=>{D.stopPropagation(),us(),R()},disabled:!te||!ha(sn.webhookUrl)&&!ha(w||"")||ue==="sending","data-no-hover":ue==="sent"||ue==="failed",tabIndex:ha(sn.webhookUrl)||ha(w||"")?0:-1,children:[l.jsx(Uk,{size:24,state:ue}),te&&ue==="idle"&&l.jsx("span",{className:Ze.buttonBadge,children:E.length})]}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ze.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:D=>{D.stopPropagation(),us(),Mn()},disabled:!te&&Dn.length===0&&nt.length===0&&!((bs=rt==null?void 0:rt.sections)!=null&&bs.length),"data-danger":!0,children:l.jsx(Fk,{size:24})}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ze.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:D=>{D.stopPropagation(),us(),Be&&xo(),at(!Ae)},children:l.jsx(Wk,{size:24})}),g&&Us!=="disconnected"&&l.jsx("span",{className:`${Ze.mcpIndicator} ${Ze[Us]} ${Ae?Ze.hidden:""}`,title:Us==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ze.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ze.divider}),l.jsxs("div",{className:`${Ze.buttonWrapper} ${gn&&typeof window<"u"&&gn.x>window.innerWidth-120?Ze.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ze.controlButton,onClick:D=>{D.stopPropagation(),us(),mi()},children:l.jsx(Xk,{size:24})}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Exit",l.jsx("span",{className:Ze.shortcut,children:"Esc"})]})]})]}),l.jsx(Ej,{visible:Be&&k,activeType:wt,onSelect:D=>{gt(wt===D?null:D)},isDarkMode:Os,sectionCount:(Pt=rt==null?void 0:rt.sections.length)!=null?Pt:0,onDetectSections:()=>{var ie,oe;const D=Ij(),L=(ie=rt==null?void 0:rt.sections)!=null?ie:[],F=new Set(L.map(ye=>ye.selector)),G=D.filter(ye=>!F.has(ye.selector)),T=[...L,...G],V=[...(oe=rt==null?void 0:rt.originalOrder)!=null?oe:[],...G.map(ye=>ye.id)];kn({sections:T,originalOrder:V,detectedAt:Date.now()})},placementCount:nt.length,onClearPlacements:()=>{Xn(D=>D+1),Bs(D=>D+1),Ft(()=>{kn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:_t,onBlankCanvasChange:D=>{const L={sections:[],originalOrder:[],detectedAt:Date.now()};D?(Fo.current={rearrange:rt,placements:nt},kn(mo.current.rearrange||L),Lt(mo.current.placements),gt(null)):(mo.current={rearrange:rt,placements:nt},kn(Fo.current.rearrange||L),Lt(Fo.current.placements)),Vt(D)},wireframePurpose:$t,onWireframePurposeChange:bn,Tooltip:Br,onDragStart:(D,L)=>{var pt;L.preventDefault();const F=Mt[D];let G=null,T=!1;const V=L.clientX,ie=L.clientY,oe=L.target.closest("[data-feedback-toolbar]"),ye=(pt=oe==null?void 0:oe.getBoundingClientRect().top)!=null?pt:window.innerHeight,Ne=St=>{const ht=St.clientX-V,dt=St.clientY-ie;if(!T&&(Math.abs(ht)>4||Math.abs(dt)>4)&&(T=!0,G=document.createElement("div"),G.className=`${Ie.dragPreview}${_t?` ${Ie.dragPreviewWireframe}`:""}`,document.body.appendChild(G)),!G)return;const Bn=Math.max(0,ye-St.clientY),on=Math.min(1,Bn/180),cn=1-Math.pow(1-on,2),Qt=28,Ln=20,Ht=Math.min(140,F.width*.18),Yt=Math.min(90,F.height*.18),ds=Qt+(Ht-Qt)*cn,On=Ln+(Yt-Ln)*cn;G.style.width=`${ds}px`,G.style.height=`${On}px`,G.style.left=`${St.clientX-ds/2}px`,G.style.top=`${St.clientY-On/2}px`,G.style.opacity=`${.5+.5*cn}`,G.textContent=cn>.25?D:""},qe=St=>{if(window.removeEventListener("mousemove",Ne),window.removeEventListener("mouseup",qe),G&&document.body.removeChild(G),T){const ht=F.width,dt=F.height,Bn=window.scrollY,on=Math.max(0,St.clientX-ht/2),cn=Math.max(0,St.clientY+Bn-dt/2),Qt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:D,x:on,y:cn,width:ht,height:dt,scrollY:Bn,timestamp:Date.now()};Lt(Ln=>[...Ln,Qt]),gt(null),$s.current=new Set,Co(Ln=>Ln+1)}};window.addEventListener("mousemove",Ne),window.addEventListener("mouseup",qe)}}),l.jsx(GM,{settings:sn,onSettingsChange:D=>ui(L=>({...L,...D})),isDarkMode:Os,onToggleTheme:xs,isDevMode:Oi,connectionStatus:Us,endpoint:g,isVisible:Ke,toolbarNearBottom:!!gn&&gn.y<230,settingsPage:_e,onSettingsPageChange:et,onHideToolbar:$o})]})}),(Be||xt)&&l.jsx("div",{className:`${Ie.blankCanvas} ${en?Ie.visible:""} ${kt?Ie.gridActive:""}`,style:{"--canvas-opacity":vt},"data-feedback-toolbar":!0}),Be&&_t&&en&&l.jsxs("div",{className:Ie.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Ie.wireframeOpacityRow,children:[l.jsx("span",{className:Ie.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Ie.wireframeOpacitySlider,min:0,max:1,step:.01,value:vt,onChange:D=>Jt(Number(D.target.value))})]}),l.jsxs("div",{className:Ie.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Ie.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Ie.wireframeNoticeDivider}),l.jsx("button",{className:Ie.wireframeStartOver,onClick:()=>{Xn(D=>D+1),kn({sections:[],originalOrder:[],detectedAt:Date.now()}),mo.current={rearrange:null,placements:[]},bn(""),_d(Et)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Be||xt)&&l.jsx(Sj,{placements:nt,onChange:Lt,activeComponent:xt?null:wt,onActiveComponentChange:gt,isDarkMode:Os,exiting:xt,onInteractionChange:Fn,passthrough:!wt,extraSnapRects:rt==null?void 0:rt.sections.map(D=>D.currentRect),deselectSignal:So,clearSignal:Ds,wireframe:_t,onSelectionChange:(D,L)=>{$s.current=D,L||(jn.current=new Set,An(F=>F+1))},onDragMove:(D,L)=>{const F=jn.current;if(!(!F.size||!rt)){if(!In.current){In.current=new Map;for(const G of rt.sections)F.has(G.id)&&In.current.set(G.id,{x:G.currentRect.x,y:G.currentRect.y})}for(const G of rt.sections){if(!F.has(G.id)||!In.current.get(G.id))continue;const V=document.querySelector(`[data-rearrange-section="${G.id}"]`);V&&(V.style.transform=`translate(${D}px, ${L}px)`)}}},onDragEnd:(D,L,F)=>{const G=jn.current,T=In.current;if(In.current=null,!(!G.size||!rt||!T)){for(const V of G){const ie=document.querySelector(`[data-rearrange-section="${V}"]`);ie&&(ie.style.transform="")}F&&kn(V=>V&&{...V,sections:V.sections.map(ie=>{const oe=T.get(ie.id);return oe?{...ie,currentRect:{...ie.currentRect,x:Math.max(0,oe.x+D),y:Math.max(0,oe.y+L)}}:ie})})}}}),(Be||xt)&&rt&&l.jsx(Uj,{rearrangeState:rt,onChange:kn,isDarkMode:Os,exiting:xt,blankCanvas:_t,extraSnapRects:nt.map(D=>({x:D.x,y:D.y,width:D.width,height:D.height})),clearSignal:wn,deselectSignal:qt,onSelectionChange:(D,L)=>{jn.current=D,L||($s.current=new Set,Co(F=>F+1))},onDragMove:(D,L)=>{const F=$s.current;if(F.size){if(!In.current){In.current=new Map;for(const G of nt)F.has(G.id)&&In.current.set(G.id,{x:G.x,y:G.y})}for(const G of F){const T=document.querySelector(`[data-design-placement="${G}"]`);T&&(T.style.transform=`translate(${D}px, ${L}px)`)}}},onDragEnd:(D,L,F)=>{const G=$s.current,T=In.current;if(In.current=null,!(!G.size||!T)){for(const V of G){const ie=document.querySelector(`[data-design-placement="${V}"]`);ie&&(ie.style.transform="")}F&&Lt(V=>V.map(ie=>{const oe=T.get(ie.id);return oe?{...ie,x:Math.max(0,oe.x+D),y:Math.max(0,oe.y+L)}:ie}))}}}),l.jsx("canvas",{ref:po,className:`${Ze.drawCanvas} ${is?Ze.active:""}`,style:{opacity:Xo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ze.markersLayer,"data-feedback-toolbar":!0,children:[me&&fe.filter(D=>!D.isFixed).map((D,L,F)=>l.jsx(Ax,{annotation:D,globalIndex:fe.findIndex(G=>G.id===D.id),layerIndex:L,layerSize:F.length,isExiting:Se,isClearing:Me,isAnimated:zi.has(D.id),isHovered:!Se&&Je===D.id,isDeleting:ut===D.id,isEditingAny:!!Q,renumberFrom:fn,markerClickBehavior:sn.markerClickBehavior,tooltipStyle:bt(D),onHoverEnter:G=>!Se&&G.id!==fi.current&&mn(G),onHoverLeave:()=>mn(null),onClick:G=>sn.markerClickBehavior==="delete"?ln(G.id):Xe(G),onContextMenu:Xe},D.id)),me&&!Se&&Ge.filter(D=>!D.isFixed).map(D=>l.jsx(Dx,{annotation:D},D.id))]}),l.jsxs("div",{className:Ze.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[me&&fe.filter(D=>D.isFixed).map((D,L,F)=>l.jsx(Ax,{annotation:D,globalIndex:fe.findIndex(G=>G.id===D.id),layerIndex:L,layerSize:F.length,isExiting:Se,isClearing:Me,isAnimated:zi.has(D.id),isHovered:!Se&&Je===D.id,isDeleting:ut===D.id,isEditingAny:!!Q,renumberFrom:fn,markerClickBehavior:sn.markerClickBehavior,tooltipStyle:bt(D),onHoverEnter:G=>!Se&&G.id!==fi.current&&mn(G),onHoverLeave:()=>mn(null),onClick:G=>sn.markerClickBehavior==="delete"?ln(G.id):Xe(G),onContextMenu:Xe},D.id)),me&&!Se&&Ge.filter(D=>D.isFixed).map(D=>l.jsx(Dx,{annotation:D,fixed:!0},D.id))]}),k&&l.jsxs("div",{className:Ze.overlay,"data-feedback-toolbar":!0,style:W||Q?{zIndex:99999}:void 0,children:[(ee==null?void 0:ee.rect)&&!W&&!Ct&&!go&&l.jsx("div",{className:`${Ze.hoverHighlight} ${Ze.enter}`,style:{left:ee.rect.left,top:ee.rect.top,width:ee.rect.width,height:ee.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Pn.filter(D=>document.contains(D.element)).map((D,L)=>{const F=D.element.getBoundingClientRect(),G=Pn.length>1;return l.jsx("div",{className:G?Ze.multiSelectOutline:Ze.singleSelectOutline,style:{position:"fixed",left:F.left,top:F.top,width:F.width,height:F.height,...G?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},L)}),Je&&!W&&(()=>{var T;const D=E.find(V=>V.id===Je);if(!(D!=null&&D.boundingBox))return null;if((T=D.elementBoundingBoxes)!=null&&T.length)return yt.length>0?yt.filter(V=>document.contains(V)).map((V,ie)=>{const oe=V.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:oe.left,top:oe.top,width:oe.width,height:oe.height}},`hover-outline-live-${ie}`)}):D.elementBoundingBoxes.map((V,ie)=>l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:V.x,top:V.y-mt,width:V.width,height:V.height}},`hover-outline-${ie}`));const L=Dt&&document.contains(Dt)?Dt.getBoundingClientRect():null,F=L?{x:L.left,y:L.top,width:L.width,height:L.height}:{x:D.boundingBox.x,y:D.isFixed?D.boundingBox.y:D.boundingBox.y-mt,width:D.boundingBox.width,height:D.boundingBox.height},G=D.isMultiSelect;return l.jsx("div",{className:`${G?Ze.multiSelectOutline:Ze.singleSelectOutline} ${Ze.enter}`,style:{left:F.x,top:F.y,width:F.width,height:F.height,...G?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ee&&!W&&!Ct&&!go&&l.jsxs("div",{className:`${Ze.hoverTooltip} ${Ze.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(ee.reactComponents?48:32),8)},children:[ee.reactComponents&&l.jsx("div",{className:Ze.hoverReactPath,children:ee.reactComponents}),l.jsx("div",{className:Ze.hoverElementName,children:ee.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(Sn=W.multiSelectElements)!=null&&Sn.length?W.multiSelectElements.filter(D=>document.contains(D)).map((D,L)=>{const F=D.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${Gn?Ze.exit:Ze.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`pending-multi-${L}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const D=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ze.singleSelectOutline} ${Gn?Ze.exit:Ze.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?Ze.multiSelectOutline:Ze.singleSelectOutline} ${Gn?Ze.exit:Ze.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-mt,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const D=W.x,L=W.isFixed?W.y:W.y-mt;return l.jsxs(l.Fragment,{children:[l.jsx($M,{x:D,y:L,isMultiSelect:W.isMultiSelect,isExiting:Gn}),l.jsx(Ud,{ref:zs,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Kt,onCancel:Wt,isExiting:Gn,lightMode:!Os,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,D/100*window.innerWidth)),...L>window.innerHeight-290?{bottom:window.innerHeight-L+20}:{top:L+20}}})]})})()]}),Q&&l.jsxs(l.Fragment,{children:[(Rn=Q.elementBoundingBoxes)!=null&&Rn.length?ot.length>0?ot.filter(D=>document.contains(D)).map((D,L)=>{const F=D.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`edit-multi-live-${L}`)}):Q.elementBoundingBoxes.map((D,L)=>l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:D.x,top:D.y-mt,width:D.width,height:D.height}},`edit-multi-${L}`)):(()=>{const D=ct&&document.contains(ct)?ct.getBoundingClientRect():null,L=D?{x:D.left,y:D.top,width:D.width,height:D.height}:Q.boundingBox?{x:Q.boundingBox.x,y:Q.isFixed?Q.boundingBox.y:Q.boundingBox.y-mt,width:Q.boundingBox.width,height:Q.boundingBox.height}:null;return L?l.jsx("div",{className:`${Q.isMultiSelect?Ze.multiSelectOutline:Ze.singleSelectOutline} ${Ze.enter}`,style:{left:L.x,top:L.y,width:L.width,height:L.height,...Q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Ud,{ref:Ns,element:Q.element,selectedText:Q.selectedText,computedStyles:Lj(Q.computedStyles),placeholder:"Edit your feedback...",initialValue:Q.comment,submitLabel:"Save",onSubmit:Nn,onCancel:Hn,onDelete:()=>ln(Q.id),isExiting:To,lightMode:!Os,accentColor:Q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const D=Q.isFixed?Q.y:Q.y-mt;return{left:Math.max(160,Math.min(window.innerWidth-160,Q.x/100*window.innerWidth)),...D>window.innerHeight-290?{bottom:window.innerHeight-D+20}:{top:D+20}}})()})]}),go&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Qs,className:Ze.dragSelection}),l.jsx("div",{ref:Jo,className:Ze.highlightsContainer})]})]})]}),document.body)}var QM=Object.freeze({}),ZM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),j=d.get(k);(j==null?void 0:j.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:QM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},dn=new ZM;function JM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(dn.registerPanel(c,t,u.current,p.current),()=>dn.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}dn.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>dn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>dn.subscribe(c,b),()=>dn.getValues(c),()=>dn.getValues(c));return f2(n,x,"")}function f2(t,n,i){var c,u,d,h,p,y,g,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const j=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[j])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[j])!=null?u:k;else if(e7(k)||t7(k))a[S]=(d=n[j])!=null?d:k;else if(n7(k))a[S]=(h=n[j])!=null?h:k;else if(s7(k)){const E=(p=k.default)!=null?p:a7(k.options);a[S]=(y=n[j])!=null?y:E}else o7(k)?a[S]=(x=(g=n[j])!=null?g:k.default)!=null?x:"#000000":i7(k)?a[S]=(w=(b=n[j])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=f2(k,n,j))}return a}function Bl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function e7(t){return Bl(t,"spring")}function t7(t){return Bl(t,"easing")}function n7(t){return Bl(t,"action")}function s7(t){return Bl(t,"select")&&"options"in t&&Array.isArray(t.options)}function o7(t){return Bl(t,"color")}function i7(t){return Bl(t,"text")}function a7(t){const n=t[0];return typeof n=="string"?n:n.value}function fp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Nd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(fp(n)))}function Sc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function Cc(t,n,i,a,c){var y,g;const u=dn.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));dn.updateValue(t,n,Nd(p,a))}function r7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function bd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Tm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function h2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=h2(i.children,n);if(a)return a}}return null}var vd=4;function l7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function c7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=l7(n);return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function u7(t){return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function m2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var p2=_.createContext({activePanelId:null,activePath:null});function d7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=dn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((y=S.interaction)!=null?y:"scroll")!==p)continue;const k=h2(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return _.useEffect(()=>{const p=k=>{if(bd())return;const j=k.key.toLowerCase();if((j==="arrowleft"||j==="arrowright"||j==="arrowup"||j==="arrowdown")&&a.current.size>0){const M=h("scroll")||h("drag")||h("move");if(M&&M.control.type==="slider"){k.preventDefault();const q=j==="arrowright"||j==="arrowup"?1:-1,U=Sc(M.control,M.shortcut);Cc(M.panelId,M.path,M.control,U,q);return}}const E=a.current.has(j);a.current.add(j);const O=Tm(k),N=dn.resolveShortcutTarget(j,O);if(N&&(i({activePanelId:N.panelId,activePath:N.path}),!E&&N.control.type==="toggle")){const M=dn.getValue(N.panelId,N.path);dn.updateValue(N.panelId,N.path,!M)}E||(u.current=null,d.current=0)},y=k=>{const j=k.key.toLowerCase();if(a.current.delete(j),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let E=!1;for(const O of a.current){const N=Tm(k),M=dn.resolveShortcutTarget(O,N);if(M){i({activePanelId:M.panelId,activePath:M.path}),E=!0;break}}E||i({activePanelId:null,activePath:null})}},g=k=>{var O,N;if(bd())return;const j=Tm(k);if(a.current.size>0)for(const M of a.current){const q=dn.resolveShortcutTarget(M,j);if(!q)continue;const{panelId:U,path:X,control:Z}=q;if(((N=(O=Z.shortcut)==null?void 0:O.interaction)!=null?N:"scroll")!=="scroll"||Z.type!=="slider")continue;k.preventDefault();const me=Sc(Z,Z.shortcut),pe=k.deltaY>0?-1:1;Cc(U,X,Z,me,pe);return}const E=dn.resolveScrollOnlyTargets();for(const{panelId:M,path:q,control:U,shortcut:X}of E){if(U.type!=="slider")continue;k.preventDefault();const Z=Sc(U,X),he=k.deltaY>0?-1:1;Cc(M,q,U,Z,he);return}},x=k=>{if(bd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(bd()||a.current.size===0)return;if(c.current){const E=h("drag");if(E&&u.current!==null){const O=k.clientX-u.current;u.current=k.clientX,d.current+=O;const N=Sc(E.control,E.shortcut),M=Math.trunc(d.current/vd);M!==0&&(d.current-=M*vd,Cc(E.panelId,E.path,E.control,N,M))}return}const j=h("move");if(j){if(u.current===null){u.current=k.clientX;return}const E=k.clientX-u.current;u.current=k.clientX,d.current+=E;const O=Sc(j.control,j.shortcut),N=Math.trunc(d.current/vd);N!==0&&(d.current-=N*vd,Cc(j.panelId,j.path,j.control,O,N))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(p2.Provider,{value:n,children:t})}var Zp="M6 9.5L12 15.5L18 9.5",f7="M5 12.75L10 19L19 5",Am={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},h7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],m7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Lx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Wd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,w]=_.useState(void 0),[S,k]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const O=()=>k(window.innerHeight);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[a]),_.useEffect(()=>{const O=x.current;if(!O)return;const N=new ResizeObserver(()=>{if(h){const M=O.offsetHeight;w(q=>q===M?q:M)}});return N.observe(O),()=>N.disconnect()},[h]);const j=()=>{if(c&&a)return;const O=!h;p(O),g(!O),u==null||u(O)},E=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:j,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Lx.path,fill:"currentColor"}),Lx.circles.map((O,N)=>l.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},N))]}),!a&&l.jsx(ri.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Zp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:O=>O.stopPropagation(),children:d})]}),l.jsx(Zd,{initial:!1,children:h&&l.jsx(ri.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:E});const O=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ri.div,{className:"dialkit-panel-inner",style:O,onClick:h?void 0:j,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:E})}return E}var p7=3,_7=32,g7=200,y7=8;function Ko({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ft;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),w=_.useRef(null),[S,k]=_.useState(!1),[j,E]=_.useState(!1),[O,N]=_.useState(!1),[M,q]=_.useState(!1),[U,X]=_.useState(!1),[Z,he]=_.useState(!1),[me,pe]=_.useState(""),Se=_.useRef(null),Le=_.useRef(null),ee=_.useRef(!0),le=_.useRef(null),z=_.useRef(null),ce=_.useRef(1),W=(n-a)/(c-a)*100,ge=S||O,De=op(W),P=id(De,H=>`${H}%`),ue=id(De,H=>`max(5px, calc(${H}% - 9px))`),ne=op(0),ke=id(ne,H=>`calc(100% + ${Math.abs(H)}px)`),de=id(ne,H=>H<0?H:0);_.useEffect(()=>{!S&&!le.current&&De.jump(W)},[W,S,De]);const Me=_.useCallback(H=>{const J=z.current;if(!J)return n;const Ae=(H-J.left)/ce.current,at=y.current?y.current.offsetWidth:J.width,Ke=Math.max(0,Math.min(1,Ae/at)),Re=a+Ke*(c-a);return Math.max(a,Math.min(c,Re))},[a,c,n]),Ye=_.useCallback(H=>(H-a)/(c-a)*100,[a,c]),Je=_.useCallback((H,J)=>{const ve=z.current;if(!ve)return 0;const Ae=J<0?ve.left-H:H-ve.right,at=Math.max(0,Ae-_7);return J*y7*Math.sqrt(Math.min(at/g7,1))},[]),He=_.useCallback(H=>{if(!Z&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Le.current={x:H.clientX,y:H.clientY},ee.current=!0,k(!0),y.current)){z.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;ce.current=z.current.width/J}},[Z]),Dt=_.useCallback(H=>{if(!S||!Le.current)return;const J=H.clientX-Le.current.x,ve=H.clientY-Le.current.y,Ae=Math.sqrt(J*J+ve*ve);if(ee.current&&Ae>p7&&(ee.current=!1,E(!0)),!ee.current){const at=z.current;at&&(H.clientX<at.left?ne.jump(Je(H.clientX,-1)):H.clientX>at.right?ne.jump(Je(H.clientX,1)):ne.jump(0));const Ke=Me(H.clientX),Re=Ye(Ke);le.current&&(le.current.stop(),le.current=null),De.jump(Re),i(Nd(Ke,u))}},[S,Me,Ye,i,De,ne,Je]),It=_.useCallback(H=>{if(S){if(ee.current){const J=Me(H.clientX),Ae=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):r7(J,a,c),at=Ye(Ae);le.current&&le.current.stop(),le.current=K1(De,at,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{le.current=null}}),i(Nd(Ae,u))}ne.get()!==0&&K1(ne,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),E(!1),Le.current=null}},[S,Me,Ye,i,a,c,De,ne]);_.useEffect(()=>(M&&!Z&&!U?Se.current=setTimeout(()=>{X(!0)},800):!M&&!Z&&(Se.current&&(clearTimeout(Se.current),Se.current=null),X(!1)),()=>{Se.current&&clearTimeout(Se.current)}),[M,Z,U]),_.useEffect(()=>{Z&&x.current&&(x.current.focus(),x.current.select())},[Z]);const yt=H=>{pe(H.target.value)},lt=()=>{const H=parseFloat(me);if(!isNaN(H)){const J=Math.max(a,Math.min(c,H));i(Nd(J,u))}he(!1),q(!1),X(!1)},ut=H=>{U&&(H.stopPropagation(),H.preventDefault(),he(!0),pe(n.toFixed(fp(u))))},Zt=H=>{H.key==="Enter"?lt():H.key==="Escape"&&(he(!1),q(!1))},fn=()=>{lt()},tn=n.toFixed(fp(u)),Q=8,$e=10,ct=10;let je=30,ot=78;const it=(ft=y.current)==null?void 0:ft.offsetWidth;it&&it>0&&(b.current&&(je=($e+b.current.offsetWidth+Q)/it*100),w.current&&(ot=(it-ct-w.current.offsetWidth-Q)/it*100));const mt=W<je||W>ot,Tt=ge?mt?.1:j?.9:.5:0,Ct=(c-a)/u,zt=Ct<=10?Array.from({length:Ct-1},(H,J)=>{const ve=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},J)}):Array.from({length:9},(H,J)=>{const ve=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},J)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ri.div,{ref:g,className:`dialkit-slider ${ge?"dialkit-slider-active":""}`,onPointerDown:He,onPointerMove:Dt,onPointerUp:It,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),style:{width:ke,x:de},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:zt}),l.jsx(ri.div,{className:"dialkit-slider-fill",style:{width:P}}),l.jsx(ri.div,{className:"dialkit-slider-handle",style:{left:ue,y:"-50%"},animate:{opacity:Tt,scaleX:ge?1:.25,scaleY:ge&&mt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:c7(h)})]}),Z?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:me,onChange:yt,onKeyDown:Zt,onBlur:fn,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${U?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:ut,onMouseDown:H=>U&&H.stopPropagation(),style:{cursor:U?"text":"default"},children:tn})]})})}function Jp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function x7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:u7(a)})]}),l.jsx(Jp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function b7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function _2({spring:t,isSimpleMode:n}){var k,j,E,O,N;let c,u,d;if(n){const M=(k=t.visualDuration)!=null?k:.3,q=(j=t.bounce)!=null?j:.2;d=1,c=2*Math.PI/M,c=Math.pow(c,2),u=2*(1-q)*Math.sqrt(c*d)}else c=(E=t.stiffness)!=null?E:400,u=(O=t.damping)!=null?O:17,d=(N=t.mass)!=null?N:1;const h=2,p=b7(c,u,d,h),y=p.map(([,M])=>M),g=Math.min(...y),b=Math.max(...y)-g,w=p.map(([M,q],U)=>{const X=M/h*256,he=140-((q-g)/(b||1)*140*.6+140*.2);return`${U===0?"M":"L"} ${X} ${he}`}).join(" "),S=[];for(let M=1;M<4;M++){const q=64*M,U=140/4*M;S.push(l.jsx("line",{x1:q,y1:0,x2:q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${M}`),l.jsx("line",{x1:0,y1:U,x2:256,y2:U,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${M}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function v7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,S;const u=_.useSyncExternalStore(k=>dn.subscribe(t,k),()=>dn.getSpringMode(t,n),()=>dn.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{dn.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},y=(k,j)=>{if(d){const{stiffness:E,damping:O,mass:N,...M}=a;c({...M,[k]:j})}else{const{visualDuration:E,bounce:O,...N}=a;c({...N,[k]:j})}};return l.jsx(Wd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(_2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Jp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:k=>y("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>y("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>y("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>y("damping",k),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>y("mass",k),min:.1,max:10,step:.1})]})]})})}function w7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function S7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,j,E,O;const u=_.useSyncExternalStore(N=>dn.subscribe(t,N),()=>dn.getTransitionMode(t,n),()=>dn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=N=>{dn.updateTransitionMode(t,n,N),c(N==="easing"?p.current.easing:N==="simple"?p.current.simple:p.current.advanced)},b=(N,M)=>{if(h){const{stiffness:q,damping:U,mass:X,...Z}=y;c({...Z,[N]:M})}else{const{visualDuration:q,bounce:U,...X}=y;c({...X,[N]:M})}},w=(N,M)=>{const q=[...g.ease];q[N]=M,c({...g,ease:q})};return l.jsx(Wd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(w7,{easing:g}):l.jsx(_2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Jp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"x1",value:g.ease[0],onChange:N=>w(0,N),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y1",value:g.ease[1],onChange:N=>w(1,N),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"x2",value:g.ease[2],onChange:N=>w(2,N),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y2",value:g.ease[3],onChange:N=>w(3,N),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"Duration",value:g.duration,onChange:N=>c({...g,duration:N}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(k7,{ease:g.ease,onChange:N=>c({...g,ease:N})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:N=>b("visualDuration",N),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(k=y.bounce)!=null?k:.2,onChange:N=>b("bounce",N),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(j=y.stiffness)!=null?j:400,onChange:N=>b("stiffness",N),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(E=y.damping)!=null?E:17,onChange:N=>b("damping",N),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(O=y.mass)!=null?O:1,onChange:N=>b("mass",N),min:.1,max:10,step:.1})]})]})})}function Ox(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function C7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function k7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Ox(t)),a(!0)},h=()=>{const y=C7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Ox(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function j7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function M7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function E7(t){return t.map(n=>typeof n=="string"?{value:n,label:M7(n)}:n)}function T7({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=E7(i),w=b.find(j=>j.value===n),S=_.useCallback(()=>{const j=d.current;if(!j)return;const E=j.getBoundingClientRect(),O=8+b.length*36,N=window.innerHeight-E.bottom-4,M=N<O&&E.top>N;x({top:M?E.top-4:E.bottom+4,left:E.left,width:E.width,above:M})},[b.length]);return _.useEffect(()=>{var E;const j=(E=d.current)==null?void 0:E.closest(".dialkit-root");y(j!=null?j:document.body)},[]),_.useEffect(()=>{c&&S()},[c,S]),_.useEffect(()=>{if(!c)return;const j=E=>{const O=E.target;d.current&&!d.current.contains(O)&&h.current&&!h.current.contains(O)&&u(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Zp})})]})]}),p&&Al.createPortal(l.jsx(Zd,{children:c&&g&&l.jsx(ri.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(j=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(j.value===n),onClick:()=>{a(j.value),u(!1)},children:j.label},j.value))})}),p)]})}var A7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function D7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),A7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?N7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function N7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function R7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(E=>E.id===i),b=_.useCallback(()=>{var O;if(!g)return;const E=(O=d.current)==null?void 0:O.getBoundingClientRect();E&&y({top:E.bottom+4,left:E.left,width:E.width}),u(!0)},[g]),w=_.useCallback(()=>u(!1),[]),S=_.useCallback(()=>{c?w():b()},[c,b,w]);_.useEffect(()=>{if(!c)return;const E=O=>{var M,q;const N=O.target;(M=d.current)!=null&&M.contains(N)||(q=h.current)!=null&&q.contains(N)||w()};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c,w]);const k=E=>{E?dn.loadPreset(t,E):dn.clearActivePreset(t),w()},j=(E,O)=>{E.stopPropagation(),dn.deletePreset(t,O)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Zp})})]}),Al.createPortal(l.jsx(Zd,{children:c&&l.jsxs(ri.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(E=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(E.id===i),onClick:()=>k(E.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:E.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:O=>j(O,E.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m7.map((O,N)=>l.jsx("path",{d:O},N))})})]},E.id))]})}),document.body)]})}function B7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(p2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(j=>dn.subscribe(t.id,j),()=>dn.getValues(t.id),()=>dn.getValues(t.id)),y=dn.getPresets(t.id),g=dn.getActivePresetId(t.id),x=()=>{const j=y.length+2;dn.savePreset(t.id,`Version ${j}`)},b=()=>{const j=JSON.stringify(p,null,2),E=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${j}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(E),c(!0),setTimeout(()=>c(!1),1500)},w=j=>{var O,N,M;const E=p[j.path];switch(j.type){case"slider":return l.jsx(Ko,{label:j.label,value:E,onChange:q=>dn.updateValue(t.id,j.path,q),min:j.min,max:j.max,step:j.step,shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"toggle":return l.jsx(x7,{label:j.label,checked:E,onChange:q=>dn.updateValue(t.id,j.path,q),shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"spring":return l.jsx(v7,{panelId:t.id,path:j.path,label:j.label,spring:E,onChange:q=>dn.updateValue(t.id,j.path,q)},j.path);case"transition":return l.jsx(S7,{panelId:t.id,path:j.path,label:j.label,value:E,onChange:q=>dn.updateValue(t.id,j.path,q)},j.path);case"folder":return l.jsx(Wd,{title:j.label,defaultOpen:(O=j.defaultOpen)!=null?O:!0,children:(N=j.children)==null?void 0:N.map(w)},j.path);case"text":return l.jsx(j7,{label:j.label,value:E,onChange:q=>dn.updateValue(t.id,j.path,q),placeholder:j.placeholder},j.path);case"select":return l.jsx(T7,{label:j.label,value:E,options:(M=j.options)!=null?M:[],onChange:q=>dn.updateValue(t.id,j.path,q)},j.path);case"color":return l.jsx(D7,{label:j.label,value:E,onChange:q=>dn.updateValue(t.id,j.path,q)},j.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>dn.triggerAction(t.id,j.path),children:j.label},j.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:h7.map((j,E)=>l.jsx("path",{d:j},E))})}),l.jsx(R7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Zd,{initial:!1,mode:"wait",children:a?l.jsx(ri.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:f7})},"check"):l.jsxs(ri.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Am.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Am.sparkle,fill:"currentColor"}),l.jsx("path",{d:Am.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Wd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var L7=typeof process<"u"?!1:!(typeof import.meta<"u");function O7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=L7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[w,S]=_.useState(t),k=_.useRef(null),j=_.useRef(!1),E=_.useRef(null),O=_.useRef(!1);_.useEffect(()=>(p(!0),d(dn.getPanels()),dn.subscribeGlobal(()=>{d(dn.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const Z=new MutationObserver(()=>{var pe;const he=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!he)return;if(he.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const Se=x.x+21,Le=window.innerWidth/2;S(Se<Le?"top-left":"top-right")}else S(t);b(null)}});return Z.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>Z.disconnect()},[y,x,t]);const N=_.useCallback(Z=>{var pe;const he=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!he||he.getAttribute("data-collapsed")!=="true")return;const me=g.current.getBoundingClientRect();E.current={pointerX:Z.clientX,pointerY:Z.clientY,elX:me.left,elY:me.top},O.current=!1,j.current=!0,Z.target.setPointerCapture(Z.pointerId)},[]),M=_.useCallback(Z=>{if(!j.current||!E.current)return;const he=Z.clientX-E.current.pointerX,me=Z.clientY-E.current.pointerY;!O.current&&Math.abs(he)+Math.abs(me)<4||(O.current=!0,b({x:E.current.elX+he,y:E.current.elY+me}))},[]),q=_.useCallback(Z=>{var he;if(j.current&&(j.current=!1,E.current=null,O.current)){Z.stopPropagation();const me=(he=g.current)==null?void 0:he.querySelector(".dialkit-panel-inner");if(me){const pe=Se=>{Se.stopPropagation()};me.addEventListener("click",pe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const U=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,X=l.jsx(d7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:U,onPointerDown:y?void 0:N,onPointerMove:y?void 0:M,onPointerUp:y?void 0:q,children:u.map(Z=>l.jsx(B7,{panel:Z,defaultOpen:y||n,inline:y},Z.id))})})});return y?X:Al.createPortal(X,document.body)}const z7=()=>(JM("Git Visualizer",{preview:[1,0,1]}),null),zx="git-visualizer.chrome-ui-hidden",$7=({children:t})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(zx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(zx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[t,l.jsx(z7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(O7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(KM,{})]})]})};document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Vv.createRoot(document.getElementById("root")).render(l.jsx($7,{children:l.jsx(Rk,{})}));

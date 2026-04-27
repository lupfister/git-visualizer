(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Bx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zh={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Av(){if(ey)return oc;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var ty;function Nv(){return ty||(ty=1,zh.exports=Av()),zh.exports}var l=Nv(),Oh={exports:{}},ic={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Dv(){return ny||(ny=1,(function(t){function n(z,re){var W=z.length;z.push(re);e:for(;0<W;){var ge=W-1>>>1,Ee=z[ge];if(0<c(Ee,re))z[ge]=re,z[W]=Ee,W=ge;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var re=z[0],W=z.pop();if(W!==re){z[0]=W;e:for(var ge=0,Ee=z.length,I=Ee>>>1;ge<I;){var ue=2*(ge+1)-1,X=z[ue],le=ue+1,be=z[le];if(0>c(X,W))le<Ee&&0>c(be,X)?(z[ge]=be,z[le]=W,ge=le):(z[ge]=X,z[ue]=W,ge=ue);else if(le<Ee&&0>c(be,W))z[ge]=be,z[le]=W,ge=le;else break e}}return re}function c(z,re){var W=z.sortIndex-re.sortIndex;return W!==0?W:z.id-re.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],_=1,x=null,b=3,w=!1,S=!1,k=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var re=i(y);re!==null;){if(re.callback===null)a(y);else if(re.startTime<=z)a(y),re.sortIndex=re.expirationTime,n(p,re);else break;re=i(y)}}function G(z){if(k=!1,N(z),!S)if(i(p)!==null)S=!0,V||(V=!0,Me());else{var re=i(y);re!==null&&de(G,re.startTime-z)}}var V=!1,K=-1,H=5,J=-1;function ie(){return M?!0:!(t.unstable_now()-J<H)}function se(){if(M=!1,V){var z=t.unstable_now();J=z;var re=!0;try{e:{S=!1,k&&(k=!1,O(K),K=-1),w=!0;var W=b;try{t:{for(N(z),x=i(p);x!==null&&!(x.expirationTime>z&&ie());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,b=x.priorityLevel;var Ee=ge(x.expirationTime<=z);if(z=t.unstable_now(),typeof Ee=="function"){x.callback=Ee,N(z),re=!0;break t}x===i(p)&&a(p),N(z)}else a(p);x=i(p)}if(x!==null)re=!0;else{var I=i(y);I!==null&&de(G,I.startTime-z),re=!1}}break e}finally{x=null,b=W,w=!1}re=void 0}}finally{re?Me():V=!1}}}var Me;if(typeof L=="function")Me=function(){L(se)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,ee=Ue.port2;Ue.port1.onmessage=se,Me=function(){ee.postMessage(null)}}else Me=function(){E(se,0)};function de(z,re){K=E(function(){z(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var re=3;break;default:re=b}var W=b;b=re;try{return z()}finally{b=W}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(z,re){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=b;b=z;try{return re()}finally{b=W}},t.unstable_scheduleCallback=function(z,re,W){var ge=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=W+Ee,z={id:_++,callback:re,priorityLevel:z,startTime:W,expirationTime:Ee,sortIndex:-1},W>ge?(z.sortIndex=W,n(y,z),i(p)===null&&z===i(y)&&(k?(O(K),K=-1):k=!0,de(G,W-ge))):(z.sortIndex=Ee,n(p,z),S||w||(S=!0,V||(V=!0,Me()))),z},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(z){var re=b;return function(){var W=b;b=re;try{return z.apply(this,arguments)}finally{b=W}}}})(Ih)),Ih}var sy;function Rv(){return sy||(sy=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},sn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Bv(){if(oy)return sn;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,M={};function E(I,ue,X){this.props=I,this.context=ue,this.refs=M,this.updater=X||S}E.prototype.isReactComponent={},E.prototype.setState=function(I,ue){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ue,"setState")},E.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=E.prototype;function L(I,ue,X){this.props=I,this.context=ue,this.refs=M,this.updater=X||S}var N=L.prototype=new O;N.constructor=L,k(N,E.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function V(){}var K={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function J(I,ue,X){var le=X.ref;return{$$typeof:t,type:I,key:ue,ref:le!==void 0?le:null,props:X}}function ie(I,ue){return J(I.type,ue,I.props)}function se(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function Me(I){var ue={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(X){return ue[X]})}var Ue=/\/+/g;function ee(I,ue){return typeof I=="object"&&I!==null&&I.key!=null?Me(""+I.key):ue.toString(36)}function de(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(V,V):(I.status="pending",I.then(function(ue){I.status==="pending"&&(I.status="fulfilled",I.value=ue)},function(ue){I.status==="pending"&&(I.status="rejected",I.reason=ue)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,ue,X,le,be){var Te=typeof I;(Te==="undefined"||Te==="boolean")&&(I=null);var Ye=!1;if(I===null)Ye=!0;else switch(Te){case"bigint":case"string":case"number":Ye=!0;break;case"object":switch(I.$$typeof){case t:case n:Ye=!0;break;case _:return Ye=I._init,z(Ye(I._payload),ue,X,le,be)}}if(Ye)return be=be(I),Ye=le===""?"."+ee(I,0):le,G(be)?(X="",Ye!=null&&(X=Ye.replace(Ue,"$&/")+"/"),z(be,ue,X,"",function(Bt){return Bt})):be!=null&&(se(be)&&(be=ie(be,X+(be.key==null||I&&I.key===be.key?"":(""+be.key).replace(Ue,"$&/")+"/")+Ye)),ue.push(be)),1;Ye=0;var Ie=le===""?".":le+":";if(G(I))for(var it=0;it<I.length;it++)le=I[it],Te=Ie+ee(le,it),Ye+=z(le,ue,X,Te,be);else if(it=w(I),typeof it=="function")for(I=it.call(I),it=0;!(le=I.next()).done;)le=le.value,Te=Ie+ee(le,it++),Ye+=z(le,ue,X,Te,be);else if(Te==="object"){if(typeof I.then=="function")return z(de(I),ue,X,le,be);throw ue=String(I),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.")}return Ye}function re(I,ue,X){if(I==null)return I;var le=[],be=0;return z(I,le,"","",function(Te){return ue.call(X,Te,be++)}),le}function W(I){if(I._status===-1){var ue=I._result;ue=ue(),ue.then(function(X){(I._status===0||I._status===-1)&&(I._status=1,I._result=X)},function(X){(I._status===0||I._status===-1)&&(I._status=2,I._result=X)}),I._status===-1&&(I._status=0,I._result=ue)}if(I._status===1)return I._result.default;throw I._result}var ge=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ue=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ue))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Ee={map:re,forEach:function(I,ue,X){re(I,function(){ue.apply(this,arguments)},X)},count:function(I){var ue=0;return re(I,function(){ue++}),ue},toArray:function(I){return re(I,function(ue){return ue})||[]},only:function(I){if(!se(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return sn.Activity=x,sn.Children=Ee,sn.Component=E,sn.Fragment=i,sn.Profiler=c,sn.PureComponent=L,sn.StrictMode=a,sn.Suspense=p,sn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,sn.__COMPILER_RUNTIME={__proto__:null,c:function(I){return K.H.useMemoCache(I)}},sn.cache=function(I){return function(){return I.apply(null,arguments)}},sn.cacheSignal=function(){return null},sn.cloneElement=function(I,ue,X){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var le=k({},I.props),be=I.key;if(ue!=null)for(Te in ue.key!==void 0&&(be=""+ue.key),ue)!H.call(ue,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&ue.ref===void 0||(le[Te]=ue[Te]);var Te=arguments.length-2;if(Te===1)le.children=X;else if(1<Te){for(var Ye=Array(Te),Ie=0;Ie<Te;Ie++)Ye[Ie]=arguments[Ie+2];le.children=Ye}return J(I.type,be,le)},sn.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},sn.createElement=function(I,ue,X){var le,be={},Te=null;if(ue!=null)for(le in ue.key!==void 0&&(Te=""+ue.key),ue)H.call(ue,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(be[le]=ue[le]);var Ye=arguments.length-2;if(Ye===1)be.children=X;else if(1<Ye){for(var Ie=Array(Ye),it=0;it<Ye;it++)Ie[it]=arguments[it+2];be.children=Ie}if(I&&I.defaultProps)for(le in Ye=I.defaultProps,Ye)be[le]===void 0&&(be[le]=Ye[le]);return J(I,Te,be)},sn.createRef=function(){return{current:null}},sn.forwardRef=function(I){return{$$typeof:h,render:I}},sn.isValidElement=se,sn.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:W}},sn.memo=function(I,ue){return{$$typeof:y,type:I,compare:ue===void 0?null:ue}},sn.startTransition=function(I){var ue=K.T,X={};K.T=X;try{var le=I(),be=K.S;be!==null&&be(X,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(V,ge)}catch(Te){ge(Te)}finally{ue!==null&&X.types!==null&&(ue.types=X.types),K.T=ue}},sn.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},sn.use=function(I){return K.H.use(I)},sn.useActionState=function(I,ue,X){return K.H.useActionState(I,ue,X)},sn.useCallback=function(I,ue){return K.H.useCallback(I,ue)},sn.useContext=function(I){return K.H.useContext(I)},sn.useDebugValue=function(){},sn.useDeferredValue=function(I,ue){return K.H.useDeferredValue(I,ue)},sn.useEffect=function(I,ue){return K.H.useEffect(I,ue)},sn.useEffectEvent=function(I){return K.H.useEffectEvent(I)},sn.useId=function(){return K.H.useId()},sn.useImperativeHandle=function(I,ue,X){return K.H.useImperativeHandle(I,ue,X)},sn.useInsertionEffect=function(I,ue){return K.H.useInsertionEffect(I,ue)},sn.useLayoutEffect=function(I,ue){return K.H.useLayoutEffect(I,ue)},sn.useMemo=function(I,ue){return K.H.useMemo(I,ue)},sn.useOptimistic=function(I,ue){return K.H.useOptimistic(I,ue)},sn.useReducer=function(I,ue,X){return K.H.useReducer(I,ue,X)},sn.useRef=function(I){return K.H.useRef(I)},sn.useState=function(I){return K.H.useState(I)},sn.useSyncExternalStore=function(I,ue,X){return K.H.useSyncExternalStore(I,ue,X)},sn.useTransition=function(){return K.H.useTransition()},sn.version="19.2.4",sn}var iy;function cp(){return iy||(iy=1,Ph.exports=Bv()),Ph.exports}var Hh={exports:{}},$o={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Lv(){if(ay)return $o;ay=1;var t=cp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$o.createPortal=function(p,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,_)},$o.flushSync=function(p){var y=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=_,a.d.f()}},$o.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},$o.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},$o.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$o.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},$o.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$o.preloadModule=function(p,y){if(typeof p=="string")if(y){var _=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},$o.requestFormReset=function(p){a.d.r(p)},$o.unstable_batchedUpdates=function(p,y){return p(y)},$o.useFormState=function(p,y,_){return d.H.useFormState(p,y,_)},$o.useFormStatus=function(){return d.H.useHostTransitionStatus()},$o.version="19.2.4",$o}var ry;function Lx(){if(ry)return Hh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Lv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function zv(){if(ly)return ic;ly=1;var t=Rv(),n=cp(),i=Lx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case E:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return s=e.displayName||null,s!==null?s:ee(e.type)||"Memo";case H:s=e._payload,e=e._init;try{return ee(e(s))}catch{}}return null}var de=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function I(e){return{current:e}}function ue(e){0>Ee||(e.current=ge[Ee],ge[Ee]=null,Ee--)}function X(e,s){Ee++,ge[Ee]=e.current,e.current=s}var le=I(null),be=I(null),Te=I(null),Ye=I(null);function Ie(e,s){switch(X(Te,s),X(be,e),X(le,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ue(le),X(le,e)}function it(){ue(le),ue(be),ue(Te)}function Bt(e){e.memoizedState!==null&&X(Ye,e);var s=le.current,o=C0(s,e.type);s!==o&&(X(be,e),X(le,o))}function tn(e){be.current===e&&(ue(le),ue(be)),Ye.current===e&&(ue(Ye),ec._currentValue=W)}var Ge,rt;function Ut(e){if(Ge===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ge=s&&s[1]||"",rt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+e+rt}var Ze=!1;function vt(e,s){if(!e||Ze)return"";Ze=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(ve){var ye=ve}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(ve){ye=ve}e.call(ze.prototype)}}else{try{throw Error()}catch(ve){ye=ve}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(ve){if(ve&&ye&&typeof ve.stack=="string")return[ve.stack,ye.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Q=v.split(`
`),_e=A.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<_e.length&&!_e[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===_e.length)for(r=Q.length-1,f=_e.length-1;1<=r&&0<=f&&Q[r]!==_e[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==_e[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==_e[f]){var Ae=`
`+Q[r].replace(" at new "," at ");return e.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",e.displayName)),Ae}while(1<=r&&0<=f);break}}}finally{Ze=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Ut(o):""}function xe(e,s){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==s&&s!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return vt(e.type,!1);case 11:return vt(e.type.render,!1);case 1:return vt(e.type,!0);case 31:return Ut("Activity");default:return""}}function te(e){try{var s="",o=null;do s+=xe(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ne=Object.prototype.hasOwnProperty,Ve=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,We=t.unstable_shouldYield,Je=t.unstable_requestPaint,mt=t.unstable_now,_t=t.unstable_getCurrentPriorityLevel,Dt=t.unstable_ImmediatePriority,Kt=t.unstable_UserBlockingPriority,dt=t.unstable_NormalPriority,P=t.unstable_LowPriority,q=t.unstable_IdlePriority,fe=t.log,ke=t.unstable_setDisableYieldValue,nt=null,Qe=null;function je(e){if(typeof fe=="function"&&ke(e),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(nt,e)}catch{}}var xt=Math.clz32?Math.clz32:gt,Fe=Math.log,Lt=Math.LN2;function gt(e){return e>>>=0,e===0?32:31-(Fe(e)/Lt|0)|0}var tt=256,It=262144,Ot=4194304;function Zt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Zt(r):(v&=A,v!==0?f=Zt(v):o||(o=A&~e,o!==0&&(f=Zt(o))))):(A=r&~m,A!==0?f=Zt(A):v!==0?f=Zt(v):o||(o=r&~e,o!==0&&(f=Zt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function at(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Tt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Jt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ft(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Q=e.expirationTimes,_e=e.hiddenUpdates;for(o=v&~o;0<o;){var Ae=31-xt(o),ze=1<<Ae;A[Ae]=0,Q[Ae]=-1;var ye=_e[Ae];if(ye!==null)for(_e[Ae]=null,Ae=0;Ae<ye.length;Ae++){var ve=ye[Ae];ve!==null&&(ve.lane&=-536870913)}o&=~ze}r!==0&&Sn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Sn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-xt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function en(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-xt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Vt(e,s){var o=s&-s;return o=(o&42)!==0?1:_s(o),(o&(e.suspendedLanes|s))!==0?0:o}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function un(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mn(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function En(e,s){var o=re.p;try{return re.p=e,s()}finally{re.p=o}}var Tn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Tn,Wn="__reactProps$"+Tn,ot="__reactContainer$"+Tn,gs="__reactEvents$"+Tn,Po="__reactListeners$"+Tn,ei="__reactHandles$"+Tn,oo="__reactResources$"+Tn,Ps="__reactMarker$"+Tn;function No(e){delete e[rn],delete e[Wn],delete e[gs],delete e[Po],delete e[ei]}function js(e){var s=e[rn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[ot]||o[rn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=N0(e);e!==null;){if(o=e[rn])return o;e=N0(e)}return s}e=o,o=e.parentNode}return null}function io(e){if(e=e[rn]||e[ot]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Ho(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function On(e){var s=e[oo];return s||(s=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function pn(e){e[Ps]=!0}var fi=new Set,Fn={};function Ms(e,s){fs(e,s),fs(e+"Capture",s)}function fs(e,s){for(Fn[e]=s,e=0;e<s.length;e++)fi.add(s[e])}var po=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},Pn={};function as(e){return Ne.call(Pn,e)?!0:Ne.call(Vo,e)?!1:po.test(e)?Pn[e]=!0:(Vo[e]=!0,!1)}function Es(e,s,o){if(as(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function xn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Xn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function da(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Uo(e){if(!e._valueTracker){var s=Zn(e)?"checked":"value";e._valueTracker=da(e,s,""+e[s])}}function vi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Zn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ti=/[\n"\\]/g;function Ts(e){return e.replace(ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function rs(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+dn(s)):e.value!==""+dn(s)&&(e.value=""+dn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Ns(e,v,dn(s)):o!=null?Ns(e,v,dn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+dn(A):e.removeAttribute("name")}function Dn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Uo(e);return}o=o!=null?""+dn(o):"",s=s!=null?""+dn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Uo(e)}function Ns(e,s,o){s==="number"&&_o(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Hn(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+dn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ls(e,s,o){if(s!=null&&(s=""+dn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+dn(o):""}function wi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(de(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=dn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Uo(e)}function Yo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Zi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Xs(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&qt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&qt(e,m,s[m])}function Hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Si=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(e){return Si.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gs(){}var Ci=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,go=null;function Vn(e){var s=io(e);if(s&&(e=s.stateNode)){var o=e[Wn]||null;e:switch(e=s.stateNode,s.type){case"input":if(rs(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ts(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Wn]||null;if(!f)throw Error(a(90));rs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&vi(r)}break e;case"textarea":ls(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Hn(e,!!o.multiple,s,!1)}}}var Ds=!1;function ro(e,s,o){if(Ds)return e(s,o);Ds=!0;try{var r=e(s);return r}finally{if(Ds=!1,(kn!==null||go!==null)&&(vu(),kn&&(s=kn,e=go,go=kn=null,Vn(s),e)))for(s=0;s<e.length;s++)Vn(e[s])}}function cn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Wn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Vs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=!1;if(Vs)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Us=!1}var hs=null,Do=null,qs=null;function So(){if(qs)return qs;var e,s=Do,o=s.length,r,f="value"in hs?hs.value:hs.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return qs=f.slice(e,1<r?1-r:void 0)}function yo(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function An(){return!1}function Un(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ro:An,this.isPropagationStopped=An,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),s}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Un(Gn),lo=x({},Gn,{view:0,detail:0}),Ks=Un(lo),ni,xo,Ss,Bs=x({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:j,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ss&&(Ss&&e.type==="mousemove"?(ni=e.screenX-Ss.screenX,xo=e.screenY-Ss.screenY):xo=ni=0,Ss=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),Xo=Un(Bs),ko=x({},Bs,{dataTransfer:0}),bo=Un(ko),Bo=x({},lo,{relatedTarget:0}),Lo=Un(Bo),ki=x({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ji=Un(ki),Ii=x({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),co=Un(Ii),Qs=x({},Gn,{data:0}),jt=Un(Qs),zo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},si={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oi(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=si[e])?!!s[e]:!1}function j(){return oi}var U=x({},lo,{key:function(e){if(e.key){var s=zo[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:j,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),he=Un(U),we=x({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qe=Un(we),et=x({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:j}),At=Un(et),Pt=x({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xt=Un(Pt),fn=x({},Bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=Un(fn),nn=x({},Gn,{newState:0,oldState:0}),hn=Un(nn),Cs=[9,13,27,32],D=Vs&&"CompositionEvent"in window,Y=null;Vs&&"documentMode"in document&&(Y=document.documentMode);var Z=Vs&&"TextEvent"in window&&!Y,ce=Vs&&(!D||Y&&8<Y&&11>=Y),Pe=" ",lt=!1;function ht(e,s){switch(e){case"keyup":return Cs.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function As(e,s){switch(e){case"compositionend":return Wt(s);case"keypress":return s.which!==32?null:(lt=!0,Pe);case"textInput":return e=s.data,e===Pe&&lt?null:e;default:return null}}function vo(e,s){if(bn)return e==="compositionend"||!D&&ht(e,s)?(e=So(),qs=Do=hs=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ce&&s.locale!=="ko"?null:s.data;default:return null}}var Ls={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $t(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Ls[e.type]:s==="textarea"}function Rn(e,s,o,r){kn?go?go.push(r):go=[r]:kn=r,s=Eu(s,"onChange"),0<s.length&&(o=new Co("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var _n=null,me=null;function $e(e){g0(e,0)}function C(e){var s=Ho(e);if(vi(s))return e}function T(e,s){if(e==="change")return s}var R=!1;if(Vs){var B;if(Vs){var F="oninput"in document;if(!F){var oe=document.createElement("div");oe.setAttribute("oninput","return;"),F=typeof oe.oninput=="function"}B=F}else B=!1;R=B&&(!document.documentMode||9<document.documentMode)}function De(){_n&&(_n.detachEvent("onpropertychange",Ce),me=_n=null)}function Ce(e){if(e.propertyName==="value"&&C(me)){var s=[];Rn(s,me,e,ao(e)),ro($e,s)}}function Oe(e,s,o){e==="focusin"?(De(),_n=s,me=o,_n.attachEvent("onpropertychange",Ce)):e==="focusout"&&De()}function ct(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(me)}function ut(e,s){if(e==="click")return C(s)}function Mt(e,s){if(e==="input"||e==="change")return C(s)}function Rt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var bt=typeof Object.is=="function"?Object.is:Rt;function pt(e,s){if(bt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Ne.call(s,f)||!bt(e[f],s[f]))return!1}return!0}function Jn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,s){var o=Jn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Jn(o)}}function xs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?xs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function jn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=_o(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=_o(e.document)}return s}function Yn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Gt=Vs&&"documentMode"in document&&11>=document.documentMode,Qt=null,bs=null,Nn=null,fo=!1;function Oo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fo||Qt==null||Qt!==_o(r)||(r=Qt,"selectionStart"in r&&Yn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&pt(Nn,r)||(Nn=r,r=Eu(bs,"onSelect"),0<r.length&&(s=new Co("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Qt)))}function cs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Pi={},Hi={};Vs&&(Hi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function es(e){if(Pi[e])return Pi[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Hi)return Pi[e]=s[o];return e}var Vi=es("animationend"),ea=es("animationiteration"),Pc=es("animationstart"),Wd=es("transitionrun"),Fd=es("transitionstart"),Xd=es("transitioncancel"),Kp=es("transitionend"),Qp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Ui(e,s){Qp.set(e,s),Ms(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Br=0,qd=0;function Vc(){for(var e=Br,s=qd=Br=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Uc(e,s,o,r){Mi[Br++]=e,Mi[Br++]=s,Mi[Br++]=o,Mi[Br++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Uc(e,s,o,r),Yc(e)}function lr(e,s){return Uc(e,null,null,s),Yc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-xt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function h2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,s,o,r){return new h2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,s){var o=e.alternate;return o===null?(o=hi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=yv(e,o,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=hi(31,o,s,f),e.elementType=J,e.lanes=m,e;case k:return cr(o.children,f,m,s);case M:v=8,f|=24;break;case E:return e=hi(12,o,s,f|2),e.elementType=E,e.lanes=m,e;case G:return e=hi(13,o,s,f),e.elementType=G,e.lanes=m,e;case V:return e=hi(19,o,s,f),e.elementType=V,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case O:v=9;break e;case N:v=11;break e;case K:v=14;break e;case H:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=hi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function cr(e,s,o,r){return e=hi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=hi(6,e,null,s),e.lanes=o,e}function e_(e){var s=hi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=hi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:te(s)},t_.set(e,s),s)}return{value:e,source:s,stack:te(s)}}var zr=[],Or=0,Fc=null,jl=0,Ti=[],Ai=0,Na=null,ta=1,na="";function ha(e,s){zr[Or++]=jl,zr[Or++]=Fc,Fc=e,jl=s}function n_(e,s,o){Ti[Ai++]=ta,Ti[Ai++]=na,Ti[Ai++]=Na,Na=e;var r=ta;e=na;var f=32-xt(r)-1;r&=~(1<<f),o+=1;var m=32-xt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ta=1<<32-xt(s)+f|o<<f|r,na=m+e}else ta=1<<m|o<<f|r,na=e}function ef(e){e.return!==null&&(ha(e,1),n_(e,1,0))}function tf(e){for(;e===Fc;)Fc=zr[--Or],zr[Or]=null,jl=zr[--Or],zr[Or]=null;for(;e===Na;)Na=Ti[--Ai],Ti[Ai]=null,na=Ti[--Ai],Ti[Ai]=null,ta=Ti[--Ai],Ti[Ai]=null}function s_(e,s){Ti[Ai++]=ta,Ti[Ai++]=na,Ti[Ai++]=Na,ta=s.id,na=s.overflow,Na=e}var jo=null,vs=null,Cn=!1,Da=null,Ni=!1,nf=Error(a(519));function Ra(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ei(s,e)),nf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[rn]=e,s[Wn]=r,o){case"dialog":yn("cancel",s),yn("close",s);break;case"iframe":case"object":case"embed":yn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)yn(ql[o],s);break;case"source":yn("error",s);break;case"img":case"image":case"link":yn("error",s),yn("load",s);break;case"details":yn("toggle",s);break;case"input":yn("invalid",s),Dn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yn("invalid",s);break;case"textarea":yn("invalid",s),wi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(yn("beforetoggle",s),yn("toggle",s)),r.onScroll!=null&&yn("scroll",s),r.onScrollEnd!=null&&yn("scrollend",s),r.onClick!=null&&(s.onclick=Gs),s=!0):s=!1,s||Ra(e,!0)}function i_(e){for(jo=e.return;jo;)switch(jo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:jo=jo.return}}function $r(e){if(e!==jo)return!1;if(!Cn)return i_(e),Cn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&vs&&Ra(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));vs=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));vs=A0(e)}else s===27?(s=vs,Xa(e.type)?(e=jh,jh=null,vs=e):vs=s):vs=jo?Ri(e.stateNode.nextSibling):null;return!0}function ur(){vs=jo=null,Cn=!1}function sf(){var e=Da;return e!==null&&(li===null?li=e:li.push.apply(li,e),Da=null),e}function Ml(e){Da===null?Da=[e]:Da.push(e)}var of=I(null),dr=null,ma=null;function Ba(e,s,o){X(of,s._currentValue),s._currentValue=o}function pa(e){e._currentValue=of.current,ue(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Q=0;Q<s.length;Q++)if(A.context===s[Q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;bt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Ye.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){dr=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mo(e){return a_(dr,e)}function Gc(e,s){return dr===null&&fr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ma===null){if(e===null)throw Error(a(308));ma=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ma=ma.next=s;return o}var m2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},p2=t.unstable_scheduleCallback,_2=t.unstable_NormalPriority,Zs={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new m2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&p2(_2,function(){e.controller.abort()})}var Tl=null,cf=0,Pr=0,Hr=null;function g2(e,s){if(Tl===null){var o=Tl=[];cf=0,Pr=fh(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(r_,r_),s}function r_(){if(--cf===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function y2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=z.S;z.S=function(e,s){Wg=mt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&g2(e,s),l_!==null&&l_(e,s)};var hr=I(null);function uf(){var e=hr.current;return e!==null?e:us.pooledCache}function qc(e,s){s===null?X(hr,hr.current):X(hr,s.pool)}function c_(){var e=uf();return e===null?null:{parent:Zs._currentValue,pool:e}}var Vr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Gs,Gs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(Gs,Gs);else{if(e=us,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw pr=s,Vr}}function mr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(pr=o,Vr):o}}var pr=null;function f_(){if(pr===null)throw Error(a(459));var e=pr;return pr=null,e}function h_(e){if(e===Vr||e===Kc)throw Error(a(483))}var Ur=null,Al=0;function Zc(e){var s=Al;return Al+=1,Ur===null&&(Ur=[]),d_(Ur,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(ae,ne){if(e){var pe=ae.deletions;pe===null?(ae.deletions=[ne],ae.flags|=16):pe.push(ne)}}function o(ae,ne){if(!e)return null;for(;ne!==null;)s(ae,ne),ne=ne.sibling;return null}function r(ae){for(var ne=new Map;ae!==null;)ae.key!==null?ne.set(ae.key,ae):ne.set(ae.index,ae),ae=ae.sibling;return ne}function f(ae,ne){return ae=fa(ae,ne),ae.index=0,ae.sibling=null,ae}function m(ae,ne,pe){return ae.index=pe,e?(pe=ae.alternate,pe!==null?(pe=pe.index,pe<ne?(ae.flags|=67108866,ne):pe):(ae.flags|=67108866,ne)):(ae.flags|=1048576,ne)}function v(ae){return e&&ae.alternate===null&&(ae.flags|=67108866),ae}function A(ae,ne,pe,Le){return ne===null||ne.tag!==6?(ne=Zd(pe,ae.mode,Le),ne.return=ae,ne):(ne=f(ne,pe),ne.return=ae,ne)}function Q(ae,ne,pe,Le){var zt=pe.type;return zt===k?Ae(ae,ne,pe.props.children,Le,pe.key):ne!==null&&(ne.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===H&&mr(zt)===ne.type)?(ne=f(ne,pe.props),Nl(ne,pe),ne.return=ae,ne):(ne=Wc(pe.type,pe.key,pe.props,null,ae.mode,Le),Nl(ne,pe),ne.return=ae,ne)}function _e(ae,ne,pe,Le){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==pe.containerInfo||ne.stateNode.implementation!==pe.implementation?(ne=Jd(pe,ae.mode,Le),ne.return=ae,ne):(ne=f(ne,pe.children||[]),ne.return=ae,ne)}function Ae(ae,ne,pe,Le,zt){return ne===null||ne.tag!==7?(ne=cr(pe,ae.mode,Le,zt),ne.return=ae,ne):(ne=f(ne,pe),ne.return=ae,ne)}function ze(ae,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Zd(""+ne,ae.mode,pe),ne.return=ae,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case w:return pe=Wc(ne.type,ne.key,ne.props,null,ae.mode,pe),Nl(pe,ne),pe.return=ae,pe;case S:return ne=Jd(ne,ae.mode,pe),ne.return=ae,ne;case H:return ne=mr(ne),ze(ae,ne,pe)}if(de(ne)||Me(ne))return ne=cr(ne,ae.mode,pe,null),ne.return=ae,ne;if(typeof ne.then=="function")return ze(ae,Zc(ne),pe);if(ne.$$typeof===L)return ze(ae,Gc(ae,ne),pe);Jc(ae,ne)}return null}function ye(ae,ne,pe,Le){var zt=ne!==null?ne.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return zt!==null?null:A(ae,ne,""+pe,Le);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case w:return pe.key===zt?Q(ae,ne,pe,Le):null;case S:return pe.key===zt?_e(ae,ne,pe,Le):null;case H:return pe=mr(pe),ye(ae,ne,pe,Le)}if(de(pe)||Me(pe))return zt!==null?null:Ae(ae,ne,pe,Le,null);if(typeof pe.then=="function")return ye(ae,ne,Zc(pe),Le);if(pe.$$typeof===L)return ye(ae,ne,Gc(ae,pe),Le);Jc(ae,pe)}return null}function ve(ae,ne,pe,Le,zt){if(typeof Le=="string"&&Le!==""||typeof Le=="number"||typeof Le=="bigint")return ae=ae.get(pe)||null,A(ne,ae,""+Le,zt);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case w:return ae=ae.get(Le.key===null?pe:Le.key)||null,Q(ne,ae,Le,zt);case S:return ae=ae.get(Le.key===null?pe:Le.key)||null,_e(ne,ae,Le,zt);case H:return Le=mr(Le),ve(ae,ne,pe,Le,zt)}if(de(Le)||Me(Le))return ae=ae.get(pe)||null,Ae(ne,ae,Le,zt,null);if(typeof Le.then=="function")return ve(ae,ne,pe,Zc(Le),zt);if(Le.$$typeof===L)return ve(ae,ne,pe,Gc(ne,Le),zt);Jc(ne,Le)}return null}function kt(ae,ne,pe,Le){for(var zt=null,Bn=null,Nt=ne,ln=ne=0,wn=null;Nt!==null&&ln<pe.length;ln++){Nt.index>ln?(wn=Nt,Nt=null):wn=Nt.sibling;var Ln=ye(ae,Nt,pe[ln],Le);if(Ln===null){Nt===null&&(Nt=wn);break}e&&Nt&&Ln.alternate===null&&s(ae,Nt),ne=m(Ln,ne,ln),Bn===null?zt=Ln:Bn.sibling=Ln,Bn=Ln,Nt=wn}if(ln===pe.length)return o(ae,Nt),Cn&&ha(ae,ln),zt;if(Nt===null){for(;ln<pe.length;ln++)Nt=ze(ae,pe[ln],Le),Nt!==null&&(ne=m(Nt,ne,ln),Bn===null?zt=Nt:Bn.sibling=Nt,Bn=Nt);return Cn&&ha(ae,ln),zt}for(Nt=r(Nt);ln<pe.length;ln++)wn=ve(Nt,ae,ln,pe[ln],Le),wn!==null&&(e&&wn.alternate!==null&&Nt.delete(wn.key===null?ln:wn.key),ne=m(wn,ne,ln),Bn===null?zt=wn:Bn.sibling=wn,Bn=wn);return e&&Nt.forEach(function(Za){return s(ae,Za)}),Cn&&ha(ae,ln),zt}function Ft(ae,ne,pe,Le){if(pe==null)throw Error(a(151));for(var zt=null,Bn=null,Nt=ne,ln=ne=0,wn=null,Ln=pe.next();Nt!==null&&!Ln.done;ln++,Ln=pe.next()){Nt.index>ln?(wn=Nt,Nt=null):wn=Nt.sibling;var Za=ye(ae,Nt,Ln.value,Le);if(Za===null){Nt===null&&(Nt=wn);break}e&&Nt&&Za.alternate===null&&s(ae,Nt),ne=m(Za,ne,ln),Bn===null?zt=Za:Bn.sibling=Za,Bn=Za,Nt=wn}if(Ln.done)return o(ae,Nt),Cn&&ha(ae,ln),zt;if(Nt===null){for(;!Ln.done;ln++,Ln=pe.next())Ln=ze(ae,Ln.value,Le),Ln!==null&&(ne=m(Ln,ne,ln),Bn===null?zt=Ln:Bn.sibling=Ln,Bn=Ln);return Cn&&ha(ae,ln),zt}for(Nt=r(Nt);!Ln.done;ln++,Ln=pe.next())Ln=ve(Nt,ae,ln,Ln.value,Le),Ln!==null&&(e&&Ln.alternate!==null&&Nt.delete(Ln.key===null?ln:Ln.key),ne=m(Ln,ne,ln),Bn===null?zt=Ln:Bn.sibling=Ln,Bn=Ln);return e&&Nt.forEach(function(Tv){return s(ae,Tv)}),Cn&&ha(ae,ln),zt}function ss(ae,ne,pe,Le){if(typeof pe=="object"&&pe!==null&&pe.type===k&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case w:e:{for(var zt=pe.key;ne!==null;){if(ne.key===zt){if(zt=pe.type,zt===k){if(ne.tag===7){o(ae,ne.sibling),Le=f(ne,pe.props.children),Le.return=ae,ae=Le;break e}}else if(ne.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===H&&mr(zt)===ne.type){o(ae,ne.sibling),Le=f(ne,pe.props),Nl(Le,pe),Le.return=ae,ae=Le;break e}o(ae,ne);break}else s(ae,ne);ne=ne.sibling}pe.type===k?(Le=cr(pe.props.children,ae.mode,Le,pe.key),Le.return=ae,ae=Le):(Le=Wc(pe.type,pe.key,pe.props,null,ae.mode,Le),Nl(Le,pe),Le.return=ae,ae=Le)}return v(ae);case S:e:{for(zt=pe.key;ne!==null;){if(ne.key===zt)if(ne.tag===4&&ne.stateNode.containerInfo===pe.containerInfo&&ne.stateNode.implementation===pe.implementation){o(ae,ne.sibling),Le=f(ne,pe.children||[]),Le.return=ae,ae=Le;break e}else{o(ae,ne);break}else s(ae,ne);ne=ne.sibling}Le=Jd(pe,ae.mode,Le),Le.return=ae,ae=Le}return v(ae);case H:return pe=mr(pe),ss(ae,ne,pe,Le)}if(de(pe))return kt(ae,ne,pe,Le);if(Me(pe)){if(zt=Me(pe),typeof zt!="function")throw Error(a(150));return pe=zt.call(pe),Ft(ae,ne,pe,Le)}if(typeof pe.then=="function")return ss(ae,ne,Zc(pe),Le);if(pe.$$typeof===L)return ss(ae,ne,Gc(ae,pe),Le);Jc(ae,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint"?(pe=""+pe,ne!==null&&ne.tag===6?(o(ae,ne.sibling),Le=f(ne,pe),Le.return=ae,ae=Le):(o(ae,ne),Le=Zd(pe,ae.mode,Le),Le.return=ae,ae=Le),v(ae)):o(ae,ne)}return function(ae,ne,pe,Le){try{Al=0;var zt=ss(ae,ne,pe,Le);return Ur=null,zt}catch(Nt){if(Nt===Vr||Nt===Kc)throw Nt;var Bn=hi(29,Nt,null,ae.mode);return Bn.lanes=Le,Bn.return=ae,Bn}finally{}}}var _r=m_(!0),p_=m_(!1),La=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($n&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Zp(e,null,o),s}return Uc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,en(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Rl(){if(pf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,r){pf=!1;var f=e.updateQueue;La=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Q=A,_e=Q.next;Q.next=null,v===null?m=_e:v.next=_e,v=Q;var Ae=e.alternate;Ae!==null&&(Ae=Ae.updateQueue,A=Ae.lastBaseUpdate,A!==v&&(A===null?Ae.firstBaseUpdate=_e:A.next=_e,Ae.lastBaseUpdate=Q))}if(m!==null){var ze=f.baseState;v=0,Ae=_e=Q=null,A=m;do{var ye=A.lane&-536870913,ve=ye!==A.lane;if(ve?(vn&ye)===ye:(r&ye)===ye){ye!==0&&ye===Pr&&(pf=!0),Ae!==null&&(Ae=Ae.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var kt=e,Ft=A;ye=s;var ss=o;switch(Ft.tag){case 1:if(kt=Ft.payload,typeof kt=="function"){ze=kt.call(ss,ze,ye);break e}ze=kt;break e;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Ft.payload,ye=typeof kt=="function"?kt.call(ss,ze,ye):kt,ye==null)break e;ze=x({},ze,ye);break e;case 2:La=!0}}ye=A.callback,ye!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ye]:ve.push(ye))}else ve={lane:ye,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Ae===null?(_e=Ae=ve,Q=ze):Ae=Ae.next=ve,v|=ye;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Ae===null&&(Q=ze),f.baseState=Q,f.firstBaseUpdate=_e,f.lastBaseUpdate=Ae,m===null&&(f.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=ze}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Yr=I(null),eu=I(0);function y_(e,s){e=Ca,X(eu,e),X(Yr,s),Ca=e|s.baseLanes}function _f(){X(eu,Ca),X(Yr,Yr.current)}function gf(){Ca=eu.current,ue(Yr),ue(eu)}var mi=I(null),Di=null;function $a(e){var s=e.alternate;X(Ys,Ys.current&1),X(mi,e),Di===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Di=e)}function yf(e){X(Ys,Ys.current),X(mi,e),Di===null&&(Di=e)}function x_(e){e.tag===22?(X(Ys,Ys.current),X(mi,e),Di===null&&(Di=e)):Ia()}function Ia(){X(Ys,Ys.current),X(mi,mi.current)}function pi(e){ue(mi),Di===e&&(Di=null),ue(Ys)}var Ys=I(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _a=0,an=null,ts=null,Js=null,nu=!1,Wr=!1,gr=!1,su=0,Ll=0,Fr=null,x2=0;function zs(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!bt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return _a=m,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?ng:Lf,gr=!1,m=o(r,f),gr=!1,Wr&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){z.H=$l;var s=ts!==null&&ts.next!==null;if(_a=0,Js=ts=an=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||eo||(e=e.dependencies,e!==null&&Xc(e)&&(eo=!0))}function v_(e,s,o,r){an=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,Js=ts=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=sg,m=s(o,r)}while(Wr);return m}function b2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?zl(s):s,e=e.useState()[0],(ts!==null?ts.memoizedState:null)!==e&&(an.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}_a=0,Js=ts=an=null,Wr=!1,Ll=su=0,Fr=null}function Go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Js===null?an.memoizedState=Js=e:Js=Js.next=e,Js}function Ws(){if(ts===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=ts.next;var s=Js===null?an.memoizedState:Js.next;if(s!==null)Js=s,ts=e;else{if(e===null)throw an.alternate===null?Error(a(467)):Error(a(310));ts=e,e={memoizedState:ts.memoizedState,baseState:ts.baseState,baseQueue:ts.baseQueue,queue:ts.queue,next:null},Js===null?an.memoizedState=Js=e:Js=Js.next=e}return Js}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zl(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=d_(Fr,e,s),s=an,(Js===null?s.memoizedState:Js.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?ng:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zl(e);if(e.$$typeof===L)return Mo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=an.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=an.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),an.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ie;return s.index++,o}function ga(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Ws();return kf(s,ts,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Q=null,_e=s,Ae=!1;do{var ze=_e.lane&-536870913;if(ze!==_e.lane?(vn&ze)===ze:(_a&ze)===ze){var ye=_e.revertLane;if(ye===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),ze===Pr&&(Ae=!0);else if((_a&ye)===ye){_e=_e.next,ye===Pr&&(Ae=!0);continue}else ze={lane:0,revertLane:_e.revertLane,gesture:null,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null},Q===null?(A=Q=ze,v=m):Q=Q.next=ze,an.lanes|=ye,Va|=ye;ze=_e.action,gr&&o(m,ze),m=_e.hasEagerState?_e.eagerState:o(m,ze)}else ye={lane:ze,revertLane:_e.revertLane,gesture:_e.gesture,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null},Q===null?(A=Q=ye,v=m):Q=Q.next=ye,an.lanes|=ze,Va|=ze;_e=_e.next}while(_e!==null&&_e!==s);if(Q===null?v=m:Q.next=A,!bt(m,e.memoizedState)&&(eo=!0,Ae&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Ws(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);bt(m,s.memoizedState)||(eo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=an,f=Ws(),m=Cn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!bt((ts||f).memoizedState,o);if(v&&(f.memoizedState=o,eo=!0),f=f.queue,Tf(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Js!==null&&Js.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),us===null)throw Error(a(349));m||(_a&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=an.updateQueue,s===null?(s=ou(),an.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!bt(e,o)}catch{return!0}}function M_(e){var s=lr(e,2);s!==null&&ci(s,e,2)}function Mf(e){var s=Go();if(typeof e=="function"){var o=e;if(e=o(),gr){je(!0);try{o()}finally{je(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},s}function E_(e,s,o,r){return e.baseState=o,kf(e,ts,typeof r=="function"?r:ga)}function v2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var A=o(f,r),Q=z.S;Q!==null&&Q(v,A),A_(e,s,A)}catch(_e){Ef(e,s,_e)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(_e){Ef(e,s,_e)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){N_(e,s,r)},function(r){return Ef(e,s,r)}):N_(e,s,o)}function N_(e,s,o){s.status="fulfilled",s.value=o,D_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,D_(s),s=s.next;while(s!==r)}e.action=null}function D_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(Cn){var o=us.formState;if(o!==null){e:{var r=an;if(Cn){if(vs){t:{for(var f=vs,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vs=Ri(f.nextSibling),r=f.data==="F!";break e}}Ra(r)}r=!1}r&&(s=o[0])}}return o=Go(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,an,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,an,!1,r.queue),r=Go(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=v2.bind(null,an,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=Ws();return z_(s,ts,e)}function z_(e,s,o){if(s=kf(e,s,R_)[0],e=au(ga)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=zl(s)}catch(v){throw v===Vr?Kc:v}else r=s;s=Ws();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(an.flags|=2048,Xr(9,{destroy:void 0},w2.bind(null,f,o),null)),[r,m,e]}function w2(e,s){e.action=s}function O_(e){var s=Ws(),o=ts;if(o!==null)return z_(s,o,e);Ws(),s=s.memoizedState,o=Ws();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=an.updateQueue,s===null&&(s=ou(),an.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return Ws().memoizedState}function ru(e,s,o,r){var f=Go();an.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Ws();r=r===void 0?null:r;var m=f.memoizedState.inst;ts!==null&&r!==null&&xf(r,ts.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(an.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function I_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function S2(e){an.flags|=4;var s=an.updateQueue;if(s===null)s=ou(),an.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=Ws().memoizedState;return S2({ref:s,nextImpl:e}),function(){if(($n&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return lu(4,2,e,s)}function V_(e,s){return lu(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,U_.bind(null,s,e),o)}function Af(){}function W_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),gr){je(!0);try{e()}finally{je(!1)}}return o.memoizedState=[r,s],r}function Nf(e,s,o){return o===void 0||(_a&1073741824)!==0&&(vn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),an.lanes|=e,Va|=e,o)}function X_(e,s,o,r){return bt(o,s)?o:Yr.current!==null?(e=Nf(e,o,r),bt(e,s)||(eo=!0),e):(_a&42)===0||(_a&1073741824)!==0&&(vn&261930)===0?(eo=!0,e.memoizedState=o):(e=Xg(),an.lanes|=e,Va|=e,s)}function G_(e,s,o,r,f){var m=re.p;re.p=m!==0&&8>m?m:8;var v=z.T,A={};z.T=A,Bf(e,!1,s,o);try{var Q=f(),_e=z.S;if(_e!==null&&_e(A,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Ae=y2(Q,r);Ol(e,s,Ae,yi(e))}else Ol(e,s,r,yi(e))}catch(ze){Ol(e,s,{then:function(){},status:"rejected",reason:ze},yi())}finally{re.p=m,v!==null&&A.types!==null&&(v.types=A.types),z.T=v}}function C2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;G_(e,f,s,W,o===null?C2:function(){return K_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Ol(e,s.next.queue,{},yi())}function Rf(){return Mo(ec)}function Q_(){return Ws().memoizedState}function Z_(){return Ws().memoizedState}function k2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=yi();e=za(o);var r=Oa(s,e,o);r!==null&&(ci(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function j2(e,s,o){var r=yi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?eg(s,o):(o=Kd(e,s,o,r),o!==null&&(ci(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=yi();Ol(e,s,o,r)}function Ol(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,bt(A,v))return Uc(e,s,f,0),us===null&&Vc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ci(o,e,r),tg(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ci(s,e,2)}function cu(e){var s=e.alternate;return e===an||s!==null&&s===an}function eg(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,en(e,o)}}var $l={readContext:Mo,use:iu,useCallback:zs,useContext:zs,useEffect:zs,useImperativeHandle:zs,useLayoutEffect:zs,useInsertionEffect:zs,useMemo:zs,useReducer:zs,useRef:zs,useState:zs,useDebugValue:zs,useDeferredValue:zs,useTransition:zs,useSyncExternalStore:zs,useId:zs,useHostTransitionStatus:zs,useFormState:zs,useActionState:zs,useOptimistic:zs,useMemoCache:zs,useCacheRefresh:zs};$l.useEffectEvent=zs;var ng={readContext:Mo,use:iu,useCallback:function(e,s){return Go().memoizedState=[e,s===void 0?null:s],e},useContext:Mo,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Go();s=s===void 0?null:s;var r=e();if(gr){je(!0);try{e()}finally{je(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Go();if(o!==void 0){var f=o(s);if(gr){je(!0);try{o(s)}finally{je(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=j2.bind(null,an,e),[r.memoizedState,e]},useRef:function(e){var s=Go();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=J_.bind(null,an,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Go();return Nf(o,e,s)},useTransition:function(){var e=Mf(!1);return e=G_.bind(null,an,e.queue,!0,!1),Go().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=an,f=Go();if(Cn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),us===null)throw Error(a(349));(vn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Go(),s=us.identifierPrefix;if(Cn){var o=na,r=ta;o=(r&~(1<<32-xt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=x2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Go();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,an,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Go().memoizedState=k2.bind(null,an)},useEffectEvent:function(e){var s=Go(),o={impl:e};return s.memoizedState=o,function(){if(($n&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Mo,use:iu,useCallback:W_,useContext:Mo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:F_,useReducer:au,useRef:$_,useState:function(){return au(ga)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return X_(o,ts.memoizedState,e,s)},useTransition:function(){var e=au(ga)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:zl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=Ws();return E_(o,ts,e,s)},useMemoCache:Cf,useCacheRefresh:Z_};Lf.useEffectEvent=P_;var sg={readContext:Mo,use:iu,useCallback:W_,useContext:Mo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:F_,useReducer:jf,useRef:$_,useState:function(){return jf(ga)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return ts===null?Nf(o,e,s):X_(o,ts.memoizedState,e,s)},useTransition:function(){var e=jf(ga)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:zl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Ws();return ts!==null?E_(o,ts,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function zf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=Oa(e,f,r),s!==null&&(ci(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Oa(e,f,r),s!==null&&(ci(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=yi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=Oa(e,r,o),s!==null&&(ci(s,e,o),Dl(s,e,o))}};function og(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!pt(o,r)||!pt(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function yr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){Hc(e)}function rg(e){console.error(e)}function lg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function ug(e){return e=za(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function M2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=mi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?wu():o.alternate===null&&Os===0&&(Os=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(Cn)return s=mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),Ml(Ei(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),Ml(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=$f(e.stateNode,r,f),mf(e,f),Os!==4&&(Os=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Fl===null?Fl=[m]:Fl.push(m),Os!==4&&(Os=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ua===null||!Ua.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),eo=!1;function Eo(e,s,o,r){s.child=e===null?p_(s,null,o,r):_r(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return fr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!eo?(wf(e,s,f),ya(e,s,f)):(Cn&&A&&ef(s),s.flags|=1,Eo(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:pt,o(v,r)&&e.ref===s.ref)return ya(e,s,f)}return s.flags|=1,e=fa(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(pt(m,r)&&e.ref===s.ref)if(eo=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(eo=!0);else return s.lanes=e.lanes,ya(e,s,f)}return Pf(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):_f(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),y_(s,m),Ia(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Ia());return Eo(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Zs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),x_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return _r(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,pi(s),s.memoizedState=null,e}function E2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Cn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Il(null,e);if(yf(s),(e=vs)?(e=T0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,jo=s,vs=null)):e=null,e===null)throw Ra(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(eo||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,eo||f){if(r=us,r!==null&&(v=Vt(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,lr(e,v),ci(r,e,v),If;wu(),s=gg(e,s,o)}else e=m.treeContext,vs=Ri(v.nextSibling),jo=s,Cn=!0,Da=null,Ni=!1,e!==null&&s_(s,e),s=du(s,r),s.flags|=4096;return s}return e=fa(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return fr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!eo?(wf(e,s,f),ya(e,s,f)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return fr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=vf(),e!==null&&!eo?(wf(e,s,m),ya(e,s,m)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(fr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Mo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Mo(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(zf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),Bl(s,r,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Q=yr(o,A);m.props=Q;var _e=m.context,Ae=o.contextType;v=Lr,typeof Ae=="object"&&Ae!==null&&(v=Mo(Ae));var ze=o.getDerivedStateFromProps;Ae=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Ae||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||_e!==v)&&ig(s,m,r,v),La=!1;var ye=s.memoizedState;m.state=ye,Bl(s,r,m,f),Rl(),_e=s.memoizedState,A||ye!==_e||La?(typeof ze=="function"&&(zf(s,o,ze,r),_e=s.memoizedState),(Q=La||og(s,o,Q,r,ye,_e,v))?(Ae||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=_e),m.props=r,m.state=_e,m.context=v,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Ae=yr(o,v),m.props=Ae,ze=s.pendingProps,ye=m.context,_e=o.contextType,Q=Lr,typeof _e=="object"&&_e!==null&&(Q=Mo(_e)),A=o.getDerivedStateFromProps,(_e=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||ye!==Q)&&ig(s,m,r,Q),La=!1,ye=s.memoizedState,m.state=ye,Bl(s,r,m,f),Rl();var ve=s.memoizedState;v!==ze||ye!==ve||La||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(zf(s,o,A,r),ve=s.memoizedState),(Ae=La||og(s,o,Ae,r,ye,ve,Q)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(_e||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=Q,r=Ae):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=_r(s,e.child,null,f),s.child=_r(s,null,o,f)):Eo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ya(e,s,f),e}function bg(e,s,o,r){return ur(),s.flags|=256,Eo(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:c_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=gi),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Ys.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Cn){if(f?$a(s):Ia(),(e=vs)?(e=T0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,jo=s,vs=null)):e=null,e===null)throw Ra(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Ia(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=cr(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,Il(null,r)):($a(s),Yf(s,A))}var Q=e.memoizedState;if(Q!==null&&(A=Q.dehydrated,A!==null)){if(m)s.flags&256?($a(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Ia(),s.child=e.child,s.flags|=128,s=null):(Ia(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=cr(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,_r(s,e.child,null,o),r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,s=Il(null,r));else if($a(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var _e=v.dgst;v=_e,r=Error(a(419)),r.stack="",r.digest=v,Ml({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(eo||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,eo||v){if(v=us,v!==null&&(r=Vt(v,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,lr(e,r),ci(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=Q.treeContext,vs=Ri(A.nextSibling),jo=s,Cn=!0,Da=null,Ni=!1,e!==null&&s_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Ia(),A=r.fallback,f=s.mode,Q=e.child,_e=Q.sibling,r=fa(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,_e!==null?A=fa(_e,A):(A=cr(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Il(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Vf(o):(f=A.cachePool,f!==null?(Q=Zs._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=c_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Uf(e,v,o),s.memoizedState=Hf,Il(e.child,r)):($a(s),o=e.child,e=o.sibling,o=fa(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=hi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return _r(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Ys.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,X(Ys,v),Eo(e,s,r,o),r=Cn?jl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ya(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=fa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=fa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function T2(e,s,o){switch(s.tag){case 3:Ie(s,s.stateNode.containerInfo),Ba(s,Zs,e.memoizedState.cache),ur();break;case 27:case 5:Bt(s);break;case 4:Ie(s,s.stateNode.containerInfo);break;case 10:Ba(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?($a(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):($a(s),e=ya(e,s,o),e!==null?e.sibling:null);$a(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),X(Ys,Ys.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:Ba(s,Zs,e.memoizedState.cache)}return ya(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)eo=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return eo=!1,T2(e,s,o);eo=(e.flags&131072)!==0}else eo=!1,Cn&&(s.flags&1048576)!==0&&n_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=mr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=yr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===K){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=ee(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=yr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(Ie(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Bl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ba(s,Zs,r),r!==m.cache&&rf(s,[Zs],o,!0),Rl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),Ml(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(vs=Ri(e.firstChild),jo=s,Cn=!0,Da=null,Ni=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ur(),r===f){s=ya(e,s,o);break e}Eo(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Cn||(o=s.type,e=s.pendingProps,r=Tu(Te.current).createElement(o),r[rn]=s,r[Wn]=e,To(r,o,e),pn(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Bt(s),e===null&&Cn&&(r=s.stateNode=D0(s.type,s.pendingProps,Te.current),jo=s,Ni=!0,f=vs,Xa(s.type)?(jh=f,vs=Ri(r.firstChild)):vs=f),Eo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Cn&&((f=r=vs)&&(r=iv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,jo=s,vs=Ri(r.firstChild),Ni=!1,f=!0):f=!1),f||Ra(s)),Bt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,b2,null,null,o),ec._currentValue=f),fu(e,s),Eo(e,s,r,o),s.child;case 6:return e===null&&Cn&&((e=o=vs)&&(o=av(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,jo=s,vs=null,e=!0):e=!1),e||Ra(s)),null;case 13:return vg(e,s,o);case 4:return Ie(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=_r(s,null,r,o):Eo(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return Eo(e,s,s.pendingProps,o),s.child;case 8:return Eo(e,s,s.pendingProps.children,o),s.child;case 12:return Eo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ba(s,s.type,r.value),Eo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,fr(s),f=Mo(f),r=r(f),s.flags|=1,Eo(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return E2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return fr(s),r=Mo(Zs),e===null?(f=uf(),f===null&&(f=us,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Ba(s,Zs,f)):((e.lanes&o)!==0&&(hf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ba(s,Zs,r)):(r=m.cache,Ba(s,Zs,r),r!==f.cache&&rf(s,[Zs],o,!0))),Eo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function xa(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw pr=Qc,df}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw pr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?St():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!Cn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ws(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function A2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ws(s),null;case 1:return ws(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),pa(Zs),it(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?xa(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),ws(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(xa(s),m!==null?(ws(s),kg(s,m)):(ws(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(xa(s),ws(s),kg(s,m)):(ws(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&xa(s),ws(s),Gf(s,f,e,r,o)),null;case 27:if(tn(s),o=Te.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ws(s),null}e=le.current,$r(s)?o_(s):(e=D0(f,r,o),s.stateNode=e,xa(s))}return ws(s),null;case 5:if(tn(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ws(s),null}if(m=le.current,$r(s))o_(s);else{var v=Tu(Te.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[rn]=s,m[Wn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(To(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&xa(s)}}return ws(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Te.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=jo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[rn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||Ra(s,!0)}else e=Tu(e).createTextNode(r),e[rn]=s,s.stateNode=e}return ws(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=s}else ur(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ws(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(pi(s),s):(pi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ws(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[rn]=s}else ur(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ws(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(pi(s),s):(pi(s),null)}return pi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),ws(s),null);case 4:return it(),e===null&&_h(s.stateNode.containerInfo),ws(s),null;case 10:return pa(s.type),ws(s),null;case 19:if(ue(Ys),r=s.memoizedState,r===null)return ws(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Pl(r,!1);else{if(Os!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return X(Ys,Ys.current&1|2),Cn&&ha(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&mt()>xu&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Cn)return ws(s),null}else 2*mt()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=mt(),e.sibling=null,o=Ys.current,X(Ys,f?o&1|2:o&1),Cn&&ha(s,r.treeForkCount),e):(ws(s),null);case 22:case 23:return pi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ws(s),s.subtreeFlags&6&&(s.flags|=8192)):ws(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ue(hr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),pa(Zs),ws(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function N2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return pa(Zs),it(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return tn(s),null;case 31:if(s.memoizedState!==null){if(pi(s),s.alternate===null)throw Error(a(340));ur()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(pi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ur()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ue(Ys),null;case 4:return it(),null;case 10:return pa(s.type),null;case 22:case 23:return pi(s),gf(),e!==null&&ue(hr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return pa(Zs),null;case 25:return null;default:return null}}function jg(e,s){switch(tf(s),s.tag){case 3:pa(Zs),it();break;case 26:case 27:case 5:tn(s);break;case 4:it();break;case 31:s.memoizedState!==null&&pi(s);break;case 13:pi(s);break;case 19:ue(Ys);break;case 10:pa(s.type);break;case 22:case 23:pi(s),gf(),e!==null&&ue(hr);break;case 24:pa(Zs)}}function Hl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Kn(s,s.return,A)}}function Pa(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Q=o,_e=A;try{_e()}catch(Ae){Kn(f,Q,Ae)}}}r=r.next}while(r!==m)}}catch(Ae){Kn(s,s.return,Ae)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){Kn(e,e.return,r)}}}function Eg(e,s,o){o.props=yr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Kn(e,s,r)}}function Vl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Kn(e,s,f)}}function sa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Kn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Kn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Kn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;J2(r,e.type,o,s),r[Wn]=s}catch(f){Kn(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Gs));else if(r!==4&&(r===27&&Xa(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Xa(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Ng(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);To(s,r,o),s[rn]=e,s[Wn]=o}catch(m){Kn(e,e.return,m)}}var ba=!1,to=!1,Zf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,wo=null;function D2(e,s){if(e=e.containerInfo,xh=zu,e=jn(e),Yn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Q=-1,_e=0,Ae=0,ze=e,ye=null;t:for(;;){for(var ve;ze!==o||f!==0&&ze.nodeType!==3||(A=v+f),ze!==m||r!==0&&ze.nodeType!==3||(Q=v+r),ze.nodeType===3&&(v+=ze.nodeValue.length),(ve=ze.firstChild)!==null;)ye=ze,ze=ve;for(;;){if(ze===e)break t;if(ye===o&&++_e===f&&(A=v),ye===m&&++Ae===r&&(Q=v),(ve=ze.nextSibling)!==null)break;ze=ye,ye=ze.parentNode}ze=ve}o=A===-1||Q===-1?null:{start:A,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},zu=!1,wo=s;wo!==null;)if(s=wo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,wo=e;else for(;wo!==null;){switch(s=wo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var kt=yr(o.type,f);e=r.getSnapshotBeforeUpdate(kt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){Kn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,wo=e;break}wo=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:wa(e,o),r&4&&Hl(5,o);break;case 1:if(wa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Kn(o,o.return,v)}else{var f=yr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Kn(o,o.return,v)}}r&64&&Mg(o),r&512&&Vl(o,o.return);break;case 3:if(wa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(v){Kn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ng(o);case 26:case 5:wa(e,o),s===null&&r&4&&Tg(o),r&512&&Vl(o,o.return);break;case 12:wa(e,o);break;case 31:wa(e,o),r&4&&zg(e,o);break;case 13:wa(e,o),r&4&&Og(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=H2.bind(null,o),rv(e,o))));break;case 22:if(r=o.memoizedState!==null||ba,!r){s=s!==null&&s.memoizedState!==null||to,f=ba;var m=to;ba=r,(to=s)&&!m?Sa(e,o,(o.subtreeFlags&8772)!==0):wa(e,o),ba=f,to=m}break;case 30:break;default:wa(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&No(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ks=null,ii=!1;function va(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 26:to||sa(o,s),va(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:to||sa(o,s);var r=ks,f=ii;Xa(o.type)&&(ks=o.stateNode,ii=!1),va(e,s,o),Ql(o.stateNode),ks=r,ii=f;break;case 5:to||sa(o,s);case 6:if(r=ks,f=ii,ks=null,va(e,s,o),ks=r,ii=f,ks!==null)if(ii)try{(ks.nodeType===9?ks.body:ks.nodeName==="HTML"?ks.ownerDocument.body:ks).removeChild(o.stateNode)}catch(m){Kn(o,s,m)}else try{ks.removeChild(o.stateNode)}catch(m){Kn(o,s,m)}break;case 18:ks!==null&&(ii?(e=ks,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):M0(ks,o.stateNode));break;case 4:r=ks,f=ii,ks=o.stateNode.containerInfo,ii=!0,va(e,s,o),ks=r,ii=f;break;case 0:case 11:case 14:case 15:Pa(2,o,s),to||Pa(4,o,s),va(e,s,o);break;case 1:to||(sa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Eg(o,s,r)),va(e,s,o);break;case 21:va(e,s,o);break;case 22:to=(r=to)||o.memoizedState!==null,va(e,s,o),to=r;break;default:va(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Kn(s,s.return,o)}}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Kn(s,s.return,o)}}function R2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Dg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Dg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=R2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=V2.bind(null,e,r);r.then(f,f)}})}function ai(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Xa(A.type)){ks=A.stateNode,ii=!1;break e}break;case 5:ks=A.stateNode,ii=!1;break e;case 3:case 4:ks=A.stateNode.containerInfo,ii=!0;break e}A=A.return}if(ks===null)throw Error(a(160));Lg(m,v,f),ks=null,ii=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Yi=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(s,e),ri(e),r&4&&(Pa(3,e,e.return),Hl(3,e),Pa(5,e,e.return));break;case 1:ai(s,e),ri(e),r&512&&(to||o===null||sa(o,o.return)),r&64&&ba&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Yi;if(ai(s,e),ri(e),r&512&&(to||o===null||sa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ps]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),To(m,r,o),m[rn]=e,pn(m),r=m;break e;case"link":var v=$0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[rn]=e,pn(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=O0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):O0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ai(s,e),ri(e),r&512&&(to||o===null||sa(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ai(s,e),ri(e),r&512&&(to||o===null||sa(o,o.return)),e.flags&32){f=e.stateNode;try{Yo(f,"")}catch(kt){Kn(e,e.return,kt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ai(s,e),ri(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(kt){Kn(e,e.return,kt)}}break;case 3:if(Du=null,f=Yi,Yi=Au(s.containerInfo),ai(s,e),Yi=f,ri(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(kt){Kn(e,e.return,kt)}Zf&&(Zf=!1,Ig(e));break;case 4:r=Yi,Yi=Au(e.stateNode.containerInfo),ai(s,e),ri(e),Yi=r;break;case 12:ai(s,e),ri(e);break;case 31:ai(s,e),ri(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ai(s,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=mt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,_e=ba,Ae=to;if(ba=_e||f,to=Ae||Q,ai(s,e),to=Ae,ba=_e,ri(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||ba||to||xr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Q.stateNode;var ze=Q.memoizedProps.style,ye=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;A.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(kt){Kn(Q,Q.return,kt)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(kt){Kn(Q,Q.return,kt)}}}else if(s.tag===18){if(o===null){Q=s;try{var ve=Q.stateNode;f?E0(ve,!0):E0(Q.stateNode,!1)}catch(kt){Kn(Q,Q.return,kt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ai(s,e),ri(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ai(s,e),ri(e)}}function ri(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Yo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var Q=o.stateNode.containerInfo,_e=Kf(e);Qf(e,_e,Q);break;default:throw Error(a(161))}}catch(Ae){Kn(e,e.return,Ae)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function wa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function xr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Pa(4,s,s.return),xr(s);break;case 1:sa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Eg(s,s.return,o),xr(s);break;case 27:Ql(s.stateNode);case 26:case 5:sa(s,s.return),xr(s);break;case 22:s.memoizedState===null&&xr(s);break;case 30:xr(s);break;default:xr(s)}e=e.sibling}}function Sa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Sa(f,m,o),Hl(4,m);break;case 1:if(Sa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(_e){Kn(r,r.return,_e)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)__(Q[f],A)}catch(_e){Kn(r,r.return,_e)}}o&&v&64&&Mg(m),Vl(m,m.return);break;case 27:Ng(m);case 26:case 5:Sa(f,m,o),o&&r===null&&v&4&&Tg(m),Vl(m,m.return);break;case 12:Sa(f,m,o);break;case 31:Sa(f,m,o),o&&v&4&&zg(f,m);break;case 13:Sa(f,m,o),o&&v&4&&Og(f,m);break;case 22:m.memoizedState===null&&Sa(f,m,o),Vl(m,m.return);break;case 30:break;default:Sa(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Wi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(e,s,o,r),f&2048&&Hl(9,s);break;case 1:Wi(e,s,o,r);break;case 3:Wi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Wi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){Kn(s,s.return,Q)}}else Wi(e,s,o,r);break;case 31:Wi(e,s,o,r);break;case 13:Wi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Wi(e,s,o,r):Ul(e,s):m._visibility&2?Wi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Wi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Wi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Q=r,_e=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,A,Q,f),Hl(8,v);break;case 23:break;case 22:var Ae=v.stateNode;v.memoizedState!==null?Ae._visibility&2?Gr(m,v,A,Q,f):Ul(m,v):(Ae._visibility|=2,Gr(m,v,A,Q,f)),f&&_e&2048&&Jf(v.alternate,v);break;case 24:Gr(m,v,A,Q,f),f&&_e&2048&&eh(v.alternate,v);break;default:Gr(m,v,A,Q,f)}s=s.sibling}}function Ul(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Ul(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Ul(o,r),f&2048&&eh(r.alternate,r);break;default:Ul(o,r)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&xv(o,Yi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Yi;Yi=Au(e.stateNode.containerInfo),qr(e,s,o),Yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yl,Yl=16777216,qr(e,s,o),Yl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Yg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Yg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Pa(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Yg(e,s){for(;wo!==null;){var o=wo;switch(o.tag){case 0:case 11:case 15:Pa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:El(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,wo=r;else e:for(o=e;wo!==null;){r=wo;var f=r.sibling,m=r.return;if(Bg(r),r===o){wo=null;break e}if(f!==null){f.return=m,wo=f;break e}wo=m}}}var B2={getCacheForType:function(e){var s=Mo(Zs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Mo(Zs).controller.signal}},L2=typeof WeakMap=="function"?WeakMap:Map,$n=0,us=null,gn=null,vn=0,qn=0,_i=null,Ha=!1,Kr=!1,th=!1,Ca=0,Os=0,Va=0,br=0,nh=0,gi=0,Qr=0,Fl=null,li=null,sh=!1,yu=0,Wg=0,xu=1/0,bu=null,Ua=null,ho=0,Ya=null,Zr=null,ka=0,oh=0,ih=null,Fg=null,Xl=0,ah=null;function yi(){return($n&2)!==0&&vn!==0?vn&-vn:z.T!==null?fh():Mn()}function Xg(){if(gi===0)if((vn&536870912)===0||Cn){var e=It;It<<=1,(It&3932160)===0&&(It=262144),gi=e}else gi=536870912;return e=mi.current,e!==null&&(e.flags|=32),gi}function ci(e,s,o){(e===us&&(qn===2||qn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Wa(e,vn,gi,!1)),ft(e,o),(($n&2)===0||e!==us)&&(e===us&&(($n&2)===0&&(br|=o),Os===4&&Wa(e,vn,gi,!1)),oa(e))}function Gg(e,s,o){if(($n&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||at(e,s),f=r?$2(e,s):lh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Wa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!z2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Fl;var Q=A.current.memoizedState.isDehydrated;if(Q&&(Jr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!Q){A.errorRecoveryDisabledLanes|=m,br|=m,f=4;break e}m=li,li=f,m!==null&&(li===null?li=m:li.push.apply(li,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Wa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Wa(r,s,gi,!Ha);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-mt(),10<f)){if(Wa(r,s,gi,!Ha),st(r,0,!0)!==0)break e;ka=s,r.timeoutHandle=k0(qg.bind(null,r,o,li,bu,sh,s,gi,br,Qr,Ha,m,"Throttled",-0,0),f);break e}qg(r,o,li,bu,sh,s,gi,br,Qr,Ha,m,null,-0,0)}}break}while(!0);oa(e)}function qg(e,s,o,r,f,m,v,A,Q,_e,Ae,ze,ye,ve){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gs},Hg(s,m,ze);var kt=(m&62914560)===m?yu-mt():(m&4194048)===m?Wg-mt():0;if(kt=bv(ze,kt),kt!==null){ka=m,e.cancelPendingCommit=kt(s0.bind(null,e,s,m,o,r,f,v,A,Q,Ae,ze,null,ye,ve)),Wa(e,m,v,!_e);return}}s0(e,s,m,o,r,f,v,A,Q)}function z2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!bt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Wa(e,s,o,r){s&=~nh,s&=~br,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-xt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&Sn(e,o,s)}function vu(){return($n&6)===0?(Gl(0),!1):!0}function rh(){if(gn!==null){if(qn===0)var e=gn.return;else e=gn,ma=dr=null,Sf(e),Ur=null,Al=0,e=gn;for(;e!==null;)jg(e.alternate,e),e=e.return;gn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,nv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ka=0,rh(),us=e,gn=o=fa(e.current,null),vn=s,qn=0,_i=null,Ha=!1,Kr=at(e,s),th=!1,Qr=gi=nh=br=Va=Os=0,li=Fl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-xt(r),m=1<<f;s|=e[f],r&=~m}return Ca=s,Vc(),o}function Kg(e,s){an=null,z.H=$l,s===Vr||s===Kc?(s=f_(),qn=3):s===df?(s=f_(),qn=4):qn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,_i=s,gn===null&&(Os=1,uu(e,Ei(s,e.current)))}function Qg(){var e=mi.current;return e===null?!0:(vn&4194048)===vn?Di===null:(vn&62914560)===vn||(vn&536870912)!==0?e===Di:!1}function Zg(){var e=z.H;return z.H=$l,e===null?$l:e}function Jg(){var e=z.A;return z.A=B2,e}function wu(){Os=4,Ha||(vn&4194048)!==vn&&mi.current!==null||(Kr=!0),(Va&134217727)===0&&(br&134217727)===0||us===null||Wa(us,vn,gi,!1)}function lh(e,s,o){var r=$n;$n|=2;var f=Zg(),m=Jg();(us!==e||vn!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Os;e:do try{if(qn!==0&&gn!==null){var A=gn,Q=_i;switch(qn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(s=!0);var _e=qn;if(qn=0,_i=null,el(e,A,Q,_e),o&&Kr){v=0;break e}break;default:_e=qn,qn=0,_i=null,el(e,A,Q,_e)}}O2(),v=Os;break}catch(Ae){Kg(e,Ae)}while(!0);return s&&e.shellSuspendCounter++,ma=dr=null,$n=r,z.H=f,z.A=m,gn===null&&(us=null,vn=0,Vc()),v}function O2(){for(;gn!==null;)e0(gn)}function $2(e,s){var o=$n;$n|=2;var r=Zg(),f=Jg();us!==e||vn!==s?(bu=null,xu=mt()+500,Jr(e,s)):Kr=at(e,s);e:do try{if(qn!==0&&gn!==null){s=gn;var m=_i;t:switch(qn){case 1:qn=0,_i=null,el(e,s,m,1);break;case 2:case 9:if(u_(m)){qn=0,_i=null,t0(s);break}s=function(){qn!==2&&qn!==9||us!==e||(qn=7),oa(e)},m.then(s,s);break e;case 3:qn=7;break e;case 4:qn=5;break e;case 7:u_(m)?(qn=0,_i=null,t0(s)):(qn=0,_i=null,el(e,s,m,7));break;case 5:var v=null;switch(gn.tag){case 26:v=gn.memoizedState;case 5:case 27:var A=gn;if(v?P0(v):A.stateNode.complete){qn=0,_i=null;var Q=A.sibling;if(Q!==null)gn=Q;else{var _e=A.return;_e!==null?(gn=_e,Su(_e)):gn=null}break t}}qn=0,_i=null,el(e,s,m,5);break;case 6:qn=0,_i=null,el(e,s,m,6);break;case 8:rh(),Os=6;break e;default:throw Error(a(462))}}I2();break}catch(Ae){Kg(e,Ae)}while(!0);return ma=dr=null,z.H=r,z.A=f,$n=o,gn!==null?0:(us=null,vn=0,Vc(),Os)}function I2(){for(;gn!==null&&!We();)e0(gn)}function e0(e){var s=Cg(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,s===null?Su(e):gn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,vn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,vn);break;case 5:Sf(s);default:jg(o,s),s=gn=Jp(s,Ca),s=Cg(o,s,Ca)}e.memoizedProps=e.pendingProps,s===null?Su(e):gn=s}function el(e,s,o,r){ma=dr=null,Sf(s),Ur=null,Al=0;var f=s.return;try{if(M2(e,f,s,o,vn)){Os=1,uu(e,Ei(o,e.current)),gn=null;return}}catch(m){if(f!==null)throw gn=f,m;Os=1,uu(e,Ei(o,e.current)),gn=null;return}s.flags&32768?(Cn||r===1?e=!0:Kr||(vn&536870912)!==0?e=!1:(Ha=e=!0,(r===2||r===9||r===3||r===6)&&(r=mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){n0(s,Ha);return}e=s.return;var o=A2(s.alternate,s,Ca);if(o!==null){gn=o;return}if(s=s.sibling,s!==null){gn=s;return}gn=s=e}while(s!==null);Os===0&&(Os=5)}function n0(e,s){do{var o=N2(e.alternate,e);if(o!==null){o.flags&=32767,gn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){gn=e;return}gn=e=o}while(e!==null);Os=6,gn=null}function s0(e,s,o,r,f,m,v,A,Q){e.cancelPendingCommit=null;do Cu();while(ho!==0);if(($n&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,yt(e,o,m,v,A,Q),e===us&&(gn=us=null,vn=0),Zr=s,Ya=e,ka=o,oh=m,ih=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U2(dt,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=re.p,re.p=2,v=$n,$n|=4;try{D2(e,s,o)}finally{$n=v,re.p=f,z.T=r}}ho=1,o0(),i0(),a0()}}function o0(){if(ho===1){ho=0;var e=Ya,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=re.p;re.p=2;var f=$n;$n|=4;try{$g(s,e);var m=bh,v=jn(e.containerInfo),A=m.focusedElem,Q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&xs(A.ownerDocument.documentElement,A)){if(Q!==null&&Yn(A)){var _e=Q.start,Ae=Q.end;if(Ae===void 0&&(Ae=_e),"selectionStart"in A)A.selectionStart=_e,A.selectionEnd=Math.min(Ae,A.value.length);else{var ze=A.ownerDocument||document,ye=ze&&ze.defaultView||window;if(ye.getSelection){var ve=ye.getSelection(),kt=A.textContent.length,Ft=Math.min(Q.start,kt),ss=Q.end===void 0?Ft:Math.min(Q.end,kt);!ve.extend&&Ft>ss&&(v=ss,ss=Ft,Ft=v);var ae=ys(A,Ft),ne=ys(A,ss);if(ae&&ne&&(ve.rangeCount!==1||ve.anchorNode!==ae.node||ve.anchorOffset!==ae.offset||ve.focusNode!==ne.node||ve.focusOffset!==ne.offset)){var pe=ze.createRange();pe.setStart(ae.node,ae.offset),ve.removeAllRanges(),Ft>ss?(ve.addRange(pe),ve.extend(ne.node,ne.offset)):(pe.setEnd(ne.node,ne.offset),ve.addRange(pe))}}}}for(ze=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&ze.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ze.length;A++){var Le=ze[A];Le.element.scrollLeft=Le.left,Le.element.scrollTop=Le.top}}zu=!!xh,bh=xh=null}finally{$n=f,re.p=r,z.T=o}}e.current=s,ho=2}}function i0(){if(ho===2){ho=0;var e=Ya,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=re.p;re.p=2;var f=$n;$n|=4;try{Rg(e,s.alternate,s)}finally{$n=f,re.p=r,z.T=o}}ho=3}}function a0(){if(ho===4||ho===3){ho=0,Je();var e=Ya,s=Zr,o=ka,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?ho=5:(ho=0,Zr=Ya=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ua=null),un(o),s=s.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(nt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=re.p,re.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{z.T=s,re.p=f}}(ka&3)!==0&&Cu(),oa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Xl++:(Xl=0,ah=e):Xl=0,Gl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return o0(),i0(),a0(),l0()}function l0(){if(ho!==5)return!1;var e=Ya,s=oh;oh=0;var o=un(ka),r=z.T,f=re.p;try{re.p=32>o?32:o,z.T=null,o=ih,ih=null;var m=Ya,v=ka;if(ho=0,Zr=Ya=null,ka=0,($n&6)!==0)throw Error(a(331));var A=$n;if($n|=4,Ug(m.current),Pg(m,m.current,v,o),$n=A,Gl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(nt,m)}catch{}return!0}finally{re.p=f,z.T=r,r0(e,s)}}function c0(e,s,o){s=Ei(o,s),s=$f(e.stateNode,s,2),e=Oa(e,s,2),e!==null&&(ft(e,2),oa(e))}function Kn(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))){e=Ei(o,e),o=ug(2),r=Oa(s,o,2),r!==null&&(dg(o,r,s,e),ft(r,2),oa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new L2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=P2.bind(null,e,s,o),s.then(e,e))}function P2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,us===e&&(vn&o)===o&&(Os===4||Os===3&&(vn&62914560)===vn&&300>mt()-yu?($n&2)===0&&Jr(e,0):nh|=o,Qr===vn&&(Qr=0)),oa(e)}function u0(e,s){s===0&&(s=St()),e=lr(e,s),e!==null&&(ft(e,s),oa(e))}function H2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function V2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function U2(e,s){return Ve(e,s)}var ku=null,tl=null,uh=!1,ju=!1,dh=!1,Fa=0;function oa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,uh||(uh=!0,W2())}function Gl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-xt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=vn,m=st(r,r===us?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||at(r,m)||(o=!0,m0(r,m));r=r.next}while(o);dh=!1}}function Y2(){d0()}function d0(){ju=uh=!1;var e=0;Fa!==0&&tv()&&(e=Fa);for(var s=mt(),o=null,r=ku;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}ho!==0&&ho!==5||Gl(e),Fa!==0&&(Fa=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-xt(m),A=1<<v,Q=f[v];Q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Tt(A,s)):Q<=s&&(e.expiredLanes|=A),m&=~A}if(s=us,o=vn,o=st(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(qn===2||qn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||at(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Xe(r),un(o)){case 2:case 8:o=Kt;break;case 32:o=dt;break;case 268435456:o=q;break;default:o=dt}return r=h0.bind(null,e),o=Ve(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(ho!==0&&ho!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=vn;return r=st(e,e===us?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gg(e,r,s),f0(e,mt()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(Cu())return null;Gg(e,s,!0)}function W2(){sv(function(){($n&6)!==0?Ve(Dt,Y2):d0()})}function fh(){if(Fa===0){var e=Pr;e===0&&(e=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Fa=e}return Fa}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fo(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function F2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[Wn]||null).action),v=r.submitter;v&&(s=(s=v[Wn]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Co("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Fa!==0){var Q=v?_0(f,v):new FormData(f);Df(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(A.preventDefault(),Q=v?_0(f,v):new FormData(f),Df(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],X2=mh.toLowerCase(),G2=mh[0].toUpperCase()+mh.slice(1);Ui(X2,"on"+G2)}Ui(Vi,"onAnimationEnd"),Ui(ea,"onAnimationIteration"),Ui(Pc,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Wd,"onTransitionRun"),Ui(Fd,"onTransitionStart"),Ui(Xd,"onTransitionCancel"),Ui(Kp,"onTransitionEnd"),fs("onMouseEnter",["mouseout","mouseover"]),fs("onMouseLeave",["mouseout","mouseover"]),fs("onPointerEnter",["pointerout","pointerover"]),fs("onPointerLeave",["pointerout","pointerover"]),Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Q=A.instance,_e=A.currentTarget;if(A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=_e;try{m(f)}catch(Ae){Hc(Ae)}f.currentTarget=null,m=Q}else for(v=0;v<r.length;v++){if(A=r[v],Q=A.instance,_e=A.currentTarget,A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=_e;try{m(f)}catch(Ae){Hc(Ae)}f.currentTarget=null,m=Q}}}}function yn(e,s){var o=s[gs];o===void 0&&(o=s[gs]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,fi.forEach(function(o){o!=="selectionchange"&&(q2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=Sv;break;case 8:f=Cv;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=js(A),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}ro(function(){var _e=m,Ae=ao(o),ze=[];e:{var ye=Qp.get(e);if(ye!==void 0){var ve=Co,kt=e;switch(e){case"keypress":if(yo(o)===0)break e;case"keydown":case"keyup":ve=he;break;case"focusin":kt="focus",ve=Lo;break;case"focusout":kt="blur",ve=Lo;break;case"beforeblur":case"afterblur":ve=Lo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=bo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=At;break;case Vi:case ea:case Pc:ve=Ji;break;case Kp:ve=Xt;break;case"scroll":case"scrollend":ve=Ks;break;case"wheel":ve=Yt;break;case"copy":case"cut":case"paste":ve=co;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=qe;break;case"toggle":case"beforetoggle":ve=hn}var Ft=(s&4)!==0,ss=!Ft&&(e==="scroll"||e==="scrollend"),ae=Ft?ye!==null?ye+"Capture":null:ye;Ft=[];for(var ne=_e,pe;ne!==null;){var Le=ne;if(pe=Le.stateNode,Le=Le.tag,Le!==5&&Le!==26&&Le!==27||pe===null||ae===null||(Le=cn(ne,ae),Le!=null&&Ft.push(Kl(ne,Le,pe))),ss)break;ne=ne.return}0<Ft.length&&(ye=new ve(ye,kt,null,o,Ae),ze.push({event:ye,listeners:Ft}))}}if((s&7)===0){e:{if(ye=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ye&&o!==Ci&&(kt=o.relatedTarget||o.fromElement)&&(js(kt)||kt[ot]))break e;if((ve||ye)&&(ye=Ae.window===Ae?Ae:(ye=Ae.ownerDocument)?ye.defaultView||ye.parentWindow:window,ve?(kt=o.relatedTarget||o.toElement,ve=_e,kt=kt?js(kt):null,kt!==null&&(ss=u(kt),Ft=kt.tag,kt!==ss||Ft!==5&&Ft!==27&&Ft!==6)&&(kt=null)):(ve=null,kt=_e),ve!==kt)){if(Ft=Xo,Le="onMouseLeave",ae="onMouseEnter",ne="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=qe,Le="onPointerLeave",ae="onPointerEnter",ne="pointer"),ss=ve==null?ye:Ho(ve),pe=kt==null?ye:Ho(kt),ye=new Ft(Le,ne+"leave",ve,o,Ae),ye.target=ss,ye.relatedTarget=pe,Le=null,js(Ae)===_e&&(Ft=new Ft(ae,ne+"enter",kt,o,Ae),Ft.target=pe,Ft.relatedTarget=ss,Le=Ft),ss=Le,ve&&kt)t:{for(Ft=K2,ae=ve,ne=kt,pe=0,Le=ae;Le;Le=Ft(Le))pe++;Le=0;for(var zt=ne;zt;zt=Ft(zt))Le++;for(;0<pe-Le;)ae=Ft(ae),pe--;for(;0<Le-pe;)ne=Ft(ne),Le--;for(;pe--;){if(ae===ne||ne!==null&&ae===ne.alternate){Ft=ae;break t}ae=Ft(ae),ne=Ft(ne)}Ft=null}else Ft=null;ve!==null&&x0(ze,ye,ve,Ft,!1),kt!==null&&ss!==null&&x0(ze,ss,kt,Ft,!0)}}e:{if(ye=_e?Ho(_e):window,ve=ye.nodeName&&ye.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ye.type==="file")var Bn=T;else if($t(ye))if(R)Bn=Mt;else{Bn=ct;var Nt=Oe}else ve=ye.nodeName,!ve||ve.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?_e&&Hs(_e.elementType)&&(Bn=T):Bn=ut;if(Bn&&(Bn=Bn(e,_e))){Rn(ze,Bn,o,Ae);break e}Nt&&Nt(e,ye,_e),e==="focusout"&&_e&&ye.type==="number"&&_e.memoizedProps.value!=null&&Ns(ye,"number",ye.value)}switch(Nt=_e?Ho(_e):window,e){case"focusin":($t(Nt)||Nt.contentEditable==="true")&&(Qt=Nt,bs=_e,Nn=null);break;case"focusout":Nn=bs=Qt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Oo(ze,o,Ae);break;case"selectionchange":if(Gt)break;case"keydown":case"keyup":Oo(ze,o,Ae)}var ln;if(D)e:{switch(e){case"compositionstart":var wn="onCompositionStart";break e;case"compositionend":wn="onCompositionEnd";break e;case"compositionupdate":wn="onCompositionUpdate";break e}wn=void 0}else bn?ht(e,o)&&(wn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(wn="onCompositionStart");wn&&(ce&&o.locale!=="ko"&&(bn||wn!=="onCompositionStart"?wn==="onCompositionEnd"&&bn&&(ln=So()):(hs=Ae,Do="value"in hs?hs.value:hs.textContent,bn=!0)),Nt=Eu(_e,wn),0<Nt.length&&(wn=new jt(wn,e,null,o,Ae),ze.push({event:wn,listeners:Nt}),ln?wn.data=ln:(ln=Wt(o),ln!==null&&(wn.data=ln)))),(ln=Z?As(e,o):vo(e,o))&&(wn=Eu(_e,"onBeforeInput"),0<wn.length&&(Nt=new jt("onBeforeInput","beforeinput",null,o,Ae),ze.push({event:Nt,listeners:wn}),Nt.data=ln)),F2(ze,e,_e,o,Ae)}g0(ze,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=cn(e,o),f!=null&&r.unshift(Kl(e,f,m)),f=cn(e,s),f!=null&&r.push(Kl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function K2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Q=A.alternate,_e=A.stateNode;if(A=A.tag,Q!==null&&Q===r)break;A!==5&&A!==26&&A!==27||_e===null||(Q=_e,f?(_e=cn(o,m),_e!=null&&v.unshift(Kl(o,_e,Q))):f||(_e=cn(o,m),_e!=null&&v.push(Kl(o,_e,Q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var Q2=/\r\n?/g,Z2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(Q2,`
`).replace(Z2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function ns(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Yo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Yo(e,""+r);break;case"className":xn(e,"class",r);break;case"tabIndex":xn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,o,r);break;case"style":Xs(e,r,m);break;case"data":if(s!=="object"){xn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Fo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ns(e,s,"name",f.name,f,null),ns(e,s,"formEncType",f.formEncType,f,null),ns(e,s,"formMethod",f.formMethod,f,null),ns(e,s,"formTarget",f.formTarget,f,null)):(ns(e,s,"encType",f.encType,f,null),ns(e,s,"method",f.method,f,null),ns(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Fo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Gs);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Fo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":yn("beforetoggle",e),yn("toggle",e),Es(e,"popover",r);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Es(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Wo.get(o)||o,Es(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":Xs(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Yo(e,r):(typeof r=="number"||typeof r=="bigint")&&Yo(e,""+r);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Gs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fn.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Wn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Es(e,o,r)}}}function To(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yn("error",e),yn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(e,s,m,v,o,null)}}f&&ns(e,s,"srcSet",o.srcSet,o,null),r&&ns(e,s,"src",o.src,o,null);return;case"input":yn("invalid",e);var A=m=v=f=null,Q=null,_e=null;for(r in o)if(o.hasOwnProperty(r)){var Ae=o[r];if(Ae!=null)switch(r){case"name":f=Ae;break;case"type":v=Ae;break;case"checked":Q=Ae;break;case"defaultChecked":_e=Ae;break;case"value":m=Ae;break;case"defaultValue":A=Ae;break;case"children":case"dangerouslySetInnerHTML":if(Ae!=null)throw Error(a(137,s));break;default:ns(e,s,r,Ae,o,null)}}Dn(e,m,A,Q,_e,v,f,!1);return;case"select":yn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ns(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?Hn(e,!!r,s,!1):o!=null&&Hn(e,!!r,o,!0);return;case"textarea":yn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ns(e,s,v,A,o,null)}wi(e,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ns(e,s,Q,r,o,null)}return;case"dialog":yn("beforetoggle",e),yn("toggle",e),yn("cancel",e),yn("close",e);break;case"iframe":case"object":yn("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)yn(ql[r],e);break;case"image":yn("error",e),yn("load",e);break;case"details":yn("toggle",e);break;case"embed":case"source":case"link":yn("error",e),yn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_e in o)if(o.hasOwnProperty(_e)&&(r=o[_e],r!=null))switch(_e){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(e,s,_e,r,o,null)}return;default:if(Hs(s)){for(Ae in o)o.hasOwnProperty(Ae)&&(r=o[Ae],r!==void 0&&yh(e,s,Ae,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ns(e,s,A,r,o,null))}function J2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Q=null,_e=null,Ae=null;for(ve in o){var ze=o[ve];if(o.hasOwnProperty(ve)&&ze!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":Q=ze;default:r.hasOwnProperty(ve)||ns(e,s,ve,null,r,ze)}}for(var ye in r){var ve=r[ye];if(ze=o[ye],r.hasOwnProperty(ye)&&(ve!=null||ze!=null))switch(ye){case"type":m=ve;break;case"name":f=ve;break;case"checked":_e=ve;break;case"defaultChecked":Ae=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==ze&&ns(e,s,ye,ve,r,ze)}}rs(e,v,A,Q,_e,Ae,m,f);return;case"select":ve=v=A=ye=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":ve=Q;default:r.hasOwnProperty(m)||ns(e,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":ye=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Q&&ns(e,s,f,m,r,Q)}s=A,o=v,r=ve,ye!=null?Hn(e,!!o,ye,!1):!!r!=!!o&&(s!=null?Hn(e,!!o,s,!0):Hn(e,!!o,o?[]:"",!1));return;case"textarea":ve=ye=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ns(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ye=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ns(e,s,v,f,r,m)}ls(e,ye,ve);return;case"option":for(var kt in o)if(ye=o[kt],o.hasOwnProperty(kt)&&ye!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:ns(e,s,kt,null,r,ye)}for(Q in r)if(ye=r[Q],ve=o[Q],r.hasOwnProperty(Q)&&ye!==ve&&(ye!=null||ve!=null))switch(Q){case"selected":e.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:ns(e,s,Q,ye,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)ye=o[Ft],o.hasOwnProperty(Ft)&&ye!=null&&!r.hasOwnProperty(Ft)&&ns(e,s,Ft,null,r,ye);for(_e in r)if(ye=r[_e],ve=o[_e],r.hasOwnProperty(_e)&&ye!==ve&&(ye!=null||ve!=null))switch(_e){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:ns(e,s,_e,ye,r,ve)}return;default:if(Hs(s)){for(var ss in o)ye=o[ss],o.hasOwnProperty(ss)&&ye!==void 0&&!r.hasOwnProperty(ss)&&yh(e,s,ss,void 0,r,ye);for(Ae in r)ye=r[Ae],ve=o[Ae],!r.hasOwnProperty(Ae)||ye===ve||ye===void 0&&ve===void 0||yh(e,s,Ae,ye,r,ve);return}}for(var ae in o)ye=o[ae],o.hasOwnProperty(ae)&&ye!=null&&!r.hasOwnProperty(ae)&&ns(e,s,ae,null,r,ye);for(ze in r)ye=r[ze],ve=o[ze],!r.hasOwnProperty(ze)||ye===ve||ye==null&&ve==null||ns(e,s,ze,ye,r,ve)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ev(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&w0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],_e=Q.startTime;if(_e>A)break;var Ae=Q.transferSize,ze=Q.initiatorType;Ae&&w0(ze)&&(Q=Q.responseEnd,v+=Ae*(Q<A?1:(A-_e)/(Q-_e)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function tv(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,sv=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(ov)}:k0;function ov(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function E0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),No(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function iv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ps])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function av(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function N0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function D0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);No(e)}var Bi=new Map,R0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=re.d;re.d={f:lv,r:cv,D:uv,C:dv,L:fv,m:hv,X:pv,S:mv,M:_v};function lv(){var e=ja.f(),s=vu();return e||s}function cv(e){var s=io(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):ja.r(e)}var nl=typeof document>"u"?null:document;function B0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=Ts(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),To(s,"link",e),pn(s),r.head.appendChild(s)))}}function uv(e){ja.D(e),B0("dns-prefetch",e,null)}function dv(e,s){ja.C(e,s),B0("preconnect",e,s)}function fv(e,s,o){ja.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+Ts(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ts(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ts(o.imageSizes)+'"]')):f+='[href="'+Ts(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Zl(m))||s==="script"&&r.querySelector(Jl(m))||(s=r.createElement("link"),To(s,"link",e),pn(s),r.head.appendChild(s)))}}function hv(e,s){ja.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ts(r)+'"][href="'+Ts(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}r=o.createElement("link"),To(r,"link",e),pn(r),o.head.appendChild(r)}}}function mv(e,s,o){ja.S(e,s,o);var r=nl;if(r&&e){var f=On(r).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Zl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var Q=v=r.createElement("link");pn(Q),To(Q,"link",e),Q._p=new Promise(function(_e,Ae){Q.onload=_e,Q.onerror=Ae}),Q.addEventListener("load",function(){A.loading|=1}),Q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function pv(e,s){ja.X(e,s);var o=nl;if(o&&e){var r=On(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),pn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function _v(e,s){ja.M(e,s);var o=nl;if(o&&e){var r=On(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),pn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=Te.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=On(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=On(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||gv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=On(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+Ts(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function gv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),To(s,"link",o),pn(s),e.head.appendChild(s))}function ol(e){return'[src="'+Ts(e)+'"]'}function Jl(e){return"script[async]"+e}function O0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ts(o.href)+'"]');if(r)return s.instance=r,pn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),pn(r),To(r,"style",f),Nu(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,pn(m),m;r=z0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),pn(m);var v=m;return v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),To(m,"link",r),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,pn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),pn(f),To(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Nu(r,o.precedence,e));return s.instance}function Nu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function $0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Ps]||m[rn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function yv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,pn(m);return}m=s.ownerDocument||s,r=z0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),pn(m);var v=m;v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),To(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function bv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*ev());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(vv,e),Bu=null,Ru.call(e))}function vv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function wv(e,s,o,r,f,m,v,A,Q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jt(0),this.hiddenUpdates=Jt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,v,A,Q,_e,Ae,ze){return e=new wv(e,s,o,v,Q,_e,Ae,ze,A),s=1,m===!0&&(s|=24),m=hi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function V0(e){return e?(e=Lr,e):Lr}function U0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Oa(e,r,s),o!==null&&(ci(o,e,s),Dl(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=lr(e,67108864);s!==null&&ci(s,e,67108864),Ah(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=yi();s=_s(s);var o=lr(e,s);o!==null&&ci(o,e,s),Ah(e,s)}}var zu=!0;function Sv(e,s,o,r){var f=z.T;z.T=null;var m=re.p;try{re.p=2,Nh(e,s,o,r)}finally{re.p=m,z.T=f}}function Cv(e,s,o,r){var f=z.T;z.T=null;var m=re.p;try{re.p=8,Nh(e,s,o,r)}finally{re.p=m,z.T=f}}function Nh(e,s,o,r){if(zu){var f=Dh(r);if(f===null)gh(e,s,r,Ou,o),G0(e,r);else if(jv(f,e,s,o,r))r.stopPropagation();else if(G0(e,r),s&4&&-1<kv.indexOf(e)){for(;f!==null;){var m=io(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Zt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Q=1<<31-xt(v);A.entanglements[1]|=Q,v&=~Q}oa(m),($n&6)===0&&(xu=mt()+500,Gl(0))}}break;case 31:case 13:A=lr(m,2),A!==null&&ci(A,m,2),vu(),Ah(m,2)}if(m=Dh(r),m===null&&gh(e,s,r,Ou,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Dh(e){return e=ao(e),Rh(e)}var Ou=null;function Rh(e){if(Ou=null,e=js(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Ou=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_t()){case Dt:return 2;case Kt:return 8;case dt:case P:return 32;case q:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ga=null,qa=null,Ka=null,tc=new Map,nc=new Map,Qa=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,s){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=io(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function jv(e,s,o,r,f){switch(s){case"focusin":return Ga=sc(Ga,e,s,o,r,f),!0;case"dragenter":return qa=sc(qa,e,s,o,r,f),!0;case"mouseover":return Ka=sc(Ka,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=js(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,En(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,En(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Ci=r,o.target.dispatchEvent(r),Ci=null}else return s=io(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){$u(e)&&o.delete(s)}function Mv(){Bh=!1,Ga!==null&&$u(Ga)&&(Ga=null),qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),tc.forEach(K0),nc.forEach(K0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Mv)))}var Pu=null;function Q0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=io(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(Q){return Iu(Q,e)}Ga!==null&&Iu(Ga,e),qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Qa.length;o++){var r=Qa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Qa.length&&(o=Qa[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&Qa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Wn]||null;if(typeof m=="function")v||Q0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Wn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=yi();U0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),vu(),s[ot]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Mn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Qa.length&&s!==0&&s<Qa[o].priority;o++);Qa.splice(o,0,e),o===0&&q0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));re.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Ev={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{nt=Vu.inject(Ev),Qe=Vu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,v,Z0),e[ot]=s.current,_h(e),new Lh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,v=rg,A=lg,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,Q,m,v,A,Z0),s.context=V0(null),o=s.current,r=yi(),r=_s(r),f=za(r),f.callback=null,Oa(o,f,r),o=r,s.current.lanes=o,ft(s,o),oa(s),e[ot]=s.current,_h(e),new Hu(s)},ic.version="19.2.4",ic}var cy;function Ov(){if(cy)return Oh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=zv(),Oh.exports}var $v=Ov();const Iv=Bx($v);var g=cp();const Pv=Bx(g);function Hv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Vv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const $i="__TAURI_TO_IPC_KEY__";function Uv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Se(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Yv{get rid(){return Hv(this,hd,"f")}constructor(n){hd.set(this,void 0),Vv(this,hd,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var xi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(xi||(xi={}));async function zx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Se("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:t,target:c,handler:Uv(n)}).then(u=>async()=>zx(t,u))}async function Wv(t,n,i){return yc(t,a=>{zx(t,a.id),n(a)},i)}async function Fv(t,n){await Se("plugin:event|emit",{event:t,payload:n})}async function Xv(t,n,i){await Se("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ox{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ox(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ox?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class $x{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new sr(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class sr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new $x(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Uu{constructor(n){this.position=n}toLogical(n){return this.position instanceof $x?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof sr?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class bc extends Yv{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class Gv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function up(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Vh(){return Se("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Vh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return up()}static async getAll(){return Vh()}static async getFocusedWindow(){for(const n of await Vh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Wv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Fv(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Xv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new sr(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new sr(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(xi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(xi.WINDOW_MOVED,i=>{i.payload=new sr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(xi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Gv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(xi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new sr(d.payload.position)}})}),a=await this.listen(xi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new sr(d.payload.position)}})}),c=await this.listen(xi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new sr(d.payload.position)}})}),u=await this.listen(xi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(xi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(xi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(xi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(xi.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function qv(t={}){return typeof t=="object"&&Object.freeze(t),await Se("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=t=>{const n=Qv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=g.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>g.createElement("svg",{ref:p,...Zv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Jv(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,_])=>g.createElement(y,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=(t,n)=>{const i=g.forwardRef(({className:a,...c},u)=>g.createElement(ew,{ref:u,iconNode:n,className:Px(`lucide-${Kv(py(t))}`,`lucide-${t}`,a),...c}));return i.displayName=py(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hx=Qi("chevron-down",tw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],sw=Qi("chevron-right",nw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],iw=Qi("chevron-up",ow);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],rw=Qi("ellipsis",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],cw=Qi("folder-git-2",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Vx=Qi("git-branch-plus",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],fw=Qi("git-commit-horizontal",dw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],mw=Qi("git-merge",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],_w=Qi("panel-left-close",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],yw=Qi("panel-left-open",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bw=Qi("search",xw),vw=3.7,Yu=200,Em=240,ms=540,$s=176,Yh=32,vl=20,ww=Em/2,rl=ms+ww,Ma=18,Ea=18,Wh="#E6E6E6";function _y(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Ta(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Ta(t).localeCompare(Ta(n))}function Ux(t){return[...t].sort(_c)}function Sw(t){var h,p,y,_,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(w=>[Ta(w),w])),i=new Map,a=new Map;t.forEach(w=>i.set(Ta(w),0));for(const w of t){const S=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const k of S){if(!k||!n.has(k))continue;const M=Ta(w);i.set(M,((y=i.get(M))!=null?y:0)+1);const E=(_=a.get(k))!=null?_:[];E.push(w),a.set(k,E)}}for(const w of a.values())w.sort(_c);const c=t.filter(w=>{var S;return((S=i.get(Ta(w)))!=null?S:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),S=Ta(w);if(!d.has(S)){d.add(S),u.push(w);for(const k of(x=a.get(S))!=null?x:[]){const M=Ta(k),E=((b=i.get(M))!=null?b:0)-1;i.set(M,E),E===0&&c.push(k)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(w=>!d.has(Ta(w))).sort(_c)]}function Yx(t,n){var i;return Ux(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Wx(t,n,i){return Yx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Cw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function kw(t,n,i){var _,x,b,w,S,k,M;const a=Wx(t,i,n);if(a.length===0)return null;const c=a.map(E=>Mr(t,E)),u=new Set(c.map(E=>E.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(E=>E.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(E=>h&&E.id===h||d&&E.id===d?!0:!E.parentSha||!u.has(E.parentSha));return y||((M=(k=Cw(c,p!=null?p:void 0))!=null?k:c[0])!=null?M:null)}function jw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Yx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),_=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var ie,se,Me,Ue;const u=new Map(t.map(ee=>[ee.name,ee])),d=new Map,h=new Map;for(const ee of t){const z=((ie=i[ee.name])!=null?ie:[]).filter(re=>re.kind!=="branch-created").map(re=>new Date(re.date).getTime()).filter(re=>Number.isFinite(re)).sort((re,W)=>re-W)[0];z!=null&&h.set(ee.name,z)}const p=ee=>{const de=h.get(ee.name);return de!=null?de:_y(ee).start},y=ee=>{var z;const de=(z=a[ee.name])!=null?z:null;return de&&de!==ee.name&&(de===n||u.has(de))?de:ee.name===n?null:ee.parentBranch&&ee.parentBranch!==ee.name&&(ee.parentBranch===n||u.has(ee.parentBranch))?ee.parentBranch:null};for(const ee of t){if(ee.name===n)continue;const de=(se=y(ee))!=null?se:n,z=(Me=d.get(de))!=null?Me:[];z.push(ee),d.set(de,z)}for(const ee of d.values())ee.sort((de,z)=>p(de)-p(z)||de.name.localeCompare(z.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ee of Object.values(i))for(const de of ee){const z=new Date(de.date).getTime();Number.isFinite(z)&&(de.fullSha&&S.set(de.fullSha,z),de.sha&&S.set(de.sha,z))}const k=(ee,de)=>({start:Math.min(ee,de),end:Math.max(ee,de)}),M=ee=>{var X,le;const de=k(p(ee),_y(ee).end),z=[de],re=de.start,W=jw(ee,n,i),ge=W?S.get(W):void 0,Ee=new Date((le=(X=ee.divergedFromDate)!=null?X:ee.createdDate)!=null?le:ee.lastCommitDate).getTime(),I=Number.isFinite(ge!=null?ge:NaN)?ge:Number.isFinite(Ee)?Ee:null;if(I==null)return z;const ue=k(I,re);return ue.start!==ue.end&&z.push(ue),z},E=Math.max(1,360*60*1e3*vw),O=(ee,de)=>!(ee.start-de.end>=E||de.start-ee.end>=E),L=(ee,de)=>de.some(z=>{var re;return((re=w.get(ee))!=null?re:[]).some(W=>O(z,W))}),N=(ee,de=new Set)=>{const z=b.get(ee);if(z!=null)return z;if(de.has(ee))return 1;de.add(ee);const re=u.get(ee);if(!re||ee===n)return de.delete(ee),b.set(ee,0),0;const W=y(re),ge=W?N(W,de)+1:1;return de.delete(ee),b.set(ee,ge),ge},G=(ee,de=new Set)=>{var Te,Ye;const z=_.get(ee);if(z)return z.column;if(de.has(ee))return 0;de.add(ee);const re=u.get(ee);if(!re)return de.delete(ee),0;if(ee===n){const Ie={name:ee,column:0,parentName:null};_.set(ee,Ie),x.push(Ie);const it=M(re);return w.set(0,[...(Te=w.get(0))!=null?Te:[],...it]),de.delete(ee),0}const W=y(re),ge=W&&!de.has(W)?W:null,Ee=ge?G(ge,de):0,I=Math.max(1,N(ee)),ue=Math.max(ge?Ee+1:1,I),X=M(re);let le=ue;for(;L(le,X);)le+=1;const be={name:ee,column:le,parentName:ge};return _.set(ee,be),x.push(be),w.set(le,[...(Ye=w.get(le))!=null?Ye:[],...X]),de.delete(ee),le};G(n);const V=t.filter(ee=>!_.has(ee.name)).sort((ee,de)=>p(ee)-p(de)||ee.name.localeCompare(de.name)),K=V.filter(ee=>y(ee)!=null),H=V.filter(ee=>y(ee)==null);for(const ee of K)G(ee.name);let J=Math.max(0,...x.map(ee=>ee.column))+1+1;for(const ee of H){const de=M(ee);let z=J;for(;L(z,de);)z+=1;const re={name:ee.name,column:z,parentName:null};_.set(ee.name,re),x.push(re),w.set(z,[...(Ue=w.get(z))!=null?Ue:[],...de]),J=z+1}return x.sort((ee,de)=>ee.column-de.column||ee.name.localeCompare(de.name))}function Mw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Fi=0,Xh=0,Ew=1800*1e3,Tw=1440*60*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ko=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function gy(t,n,i=new Map){var H,J,ie,se,Me,Ue,ee,de,z,re,W,ge,Ee,I,ue;if(t.length===0)return new Map;const a=[...t].sort((X,le)=>{const be=Li(X.date)-Li(le.date);return be!==0?be:X.id!==le.id?X.id.localeCompare(le.id):X.visualId.localeCompare(le.visualId)}),c=new Map;for(const X of t){const le=(H=X.parentSha)!=null?H:null;if(le){const be=(J=c.get(le))!=null?J:new Set;be.add(X.id),c.set(le,be)}for(const be of(ie=i.get(X.id))!=null?ie:[]){if(!be)continue;const Te=(se=c.get(be))!=null?se:new Set;Te.add(X.id),c.set(be,Te)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,_=new Map,x=new Map,b=new Map;for(const X of t){const le=(Me=y.get(X.branchName))!=null?Me:new Set;le.add(X.id),y.set(X.branchName,le);const be=(ee=(Ue=n.get(X.branchName))==null?void 0:Ue.column)!=null?ee:0,Te=(de=_.get(X.id))!=null?de:new Set;Te.add(be),_.set(X.id,Te);const Ye=new Set;X.parentSha&&Ye.add(X.parentSha),x.set(X.visualId,Ye);const Ie=new Set(Ye);for(const it of(z=i.get(X.id))!=null?z:[])it&&Ie.add(it);b.set(X.visualId,Ie)}const w=new Set(Array.from(_.keys())),S=Array.from(w),k=new Map,M=X=>{const le=[];for(const be of S)Ko(be,X)&&le.push(be);return le},E=new Map;for(const X of S)E.set(X,new Set);for(const X of t){const le=M(X.id);if(le.length===0)continue;const be=(re=b.get(X.visualId))!=null?re:new Set,Te=new Set;for(const Ye of be)for(const Ie of M(Ye))Te.add(Ie);for(const Ye of le){const Ie=(W=E.get(Ye))!=null?W:new Set;for(const it of Te)Ie.add(it);E.set(Ye,Ie)}}const O=new Map,L=(X,le=new Set)=>{var Ie;const be=O.get(X);if(be)return be;if(le.has(X))return new Set;le.add(X);const Te=(Ie=E.get(X))!=null?Ie:new Set,Ye=new Set;for(const it of Te){Ye.add(it);for(const Bt of L(it,le))Ye.add(Bt)}return le.delete(X),O.set(X,Ye),Ye},N=(X,le)=>{if(Ko(X,le))return!0;const be=M(X),Te=M(le);for(const Ye of be){const Ie=L(Ye);for(const it of Te)if(Ie.has(it))return!0}for(const Ye of Te){const Ie=L(Ye);for(const it of be)if(Ie.has(it))return!0}return!1};let G=1;const V=(X,le)=>{var Ve,Xe,We,Je,mt,_t,Dt,Kt,dt;const be=(Xe=(Ve=n.get(X.branchName))==null?void 0:Ve.column)!=null?Xe:0,Te=(We=y.get(X.branchName))!=null?We:new Set,Ie=!(!!X.parentSha&&Te.has(X.parentSha))&&X.parentSha?X.parentSha:null,it=Array.from(le).flatMap(P=>M(P).flatMap(q=>{var fe;return(fe=k.get(q))!=null?fe:[]})),Bt=(X.kind==="branch-created"||X.kind==="stash")&&it.length>0?Math.max(...it)+1:null,tn=it.length>0?Math.max(...it)+1:1,Ge=(Je=c.get(X.id))!=null?Je:new Set,Ut=Array.from(Ge).flatMap(P=>{var q;return Array.from((q=_.get(P))!=null?q:[])}).some(P=>P!==be),Ze=new Date(X.date).getTime(),vt=Math.max(tn,1);let xe=null;for(let P=vt;P<G;P+=1){const q=(mt=d.get(P))!=null?mt:[];if(q.length===0||Ut||p.has(P))continue;const fe=(_t=b.get(X.visualId))!=null?_t:new Set;if(!(q.some(je=>N(X.id,je.sha)?!0:Array.from(fe).some(Fe=>Ko(Fe,je.sha)))||q.some(je=>je.column===be)||!Number.isFinite(Ze)||!q.every(je=>{if(!Number.isFinite(je.time))return!1;const Fe=!!Ie&&!!je.branchEntryParentSha&&Ie===je.branchEntryParentSha?Tw:Ew;return Math.abs(je.time-Ze)<=Fe}))){xe=P;break}}Bt!=null&&(xe=Bt),xe==null&&(xe=Math.max(tn,G)),u.set(X.visualId,xe),xe>=G&&(G=xe+1);const te=(Dt=d.get(xe))!=null?Dt:[];te.push({visualId:X.visualId,sha:X.id,column:be,time:Ze,branchEntryParentSha:Ie}),d.set(xe,te),Ut&&p.add(xe);for(const P of le){const q=(Kt=h.get(P))!=null?Kt:[];q.push(xe),h.set(P,q)}const Ne=(dt=k.get(X.id))!=null?dt:[];Ne.push(xe),k.set(X.id,Ne)};for(const X of a){const le=(ge=x.get(X.visualId))!=null?ge:new Set;V(X,le)}const K=Math.max(1,a.length*2);for(let X=0;X<K;X+=1){let le=!1;for(const be of a){const Te=(Ee=x.get(be.visualId))!=null?Ee:new Set;if(Te.size===0)continue;const Ye=(I=u.get(be.visualId))!=null?I:1;let Ie=1;for(const it of Te){const Bt=M(it).flatMap(tn=>{var Ge;return(Ge=k.get(tn))!=null?Ge:[]});Bt.length>0&&(Ie=Math.max(Ie,Math.max(...Bt)+1))}if(Ye<Ie){u.set(be.visualId,Ie);const it=(ue=k.get(be.id))!=null?ue:[];it.length===0?k.set(be.id,[Ie]):k.set(be.id,[...it.slice(0,-1),Ie]),le=!0}}if(!le)break}return u}function Mc(t){var Dn,Ns,Hn,ls,wi,Yo,Zi,qt,Xs,Hs,Wo,Si,Fo,Gs,Ci,ao,kn,go,Vn,Ds,ro,cn,Vs,Us,Rs,hs,Do,qs,So,yo,Ro,An,Un,Gn,Co,lo,Ks,ni,xo,Ss,Bs,Xo,ko,bo,Bo,Lo,ki,Ji,Ii,co,Qs,jt,zo,uo,si,oi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:M="horizontal",nodePositionOverrides:E={}}=t,O=M==="horizontal",L=new Map(i.map(j=>[j.name,j])),N=new Map(n.map(j=>[j.name,j])),G=Sw([...a.map(j=>{var U,he,we,qe;return{id:j.fullSha,branchName:d,message:(U=j.prTitle)!=null?U:j.sha,author:"",date:j.date,parentSha:(we=(he=j.parentShas)==null?void 0:he[0])!=null?we:null,parentShas:(qe=j.parentShas)!=null?qe:[]}}),...((Dn=h[d])!=null?Dn:[]).map(j=>Mr(d,j)),...c.map(j=>Mr(j.branch||"",j)),...u.map(j=>Mr(j.branch||"",j))]),V=new Map,K=new Map;for(const j of i){if(j.name===d)continue;const U=Wx(j.name,y,h);K.set(j.name,U);const he=Ux(U.map(Pt=>Mr(j.name,Pt)));if(he.length>0){V.set(j.name,he);continue}const we=(ls=(Hn=(Ns=j.presidesFromSha)!=null?Ns:j.divergedFromSha)!=null?Hn:j.createdFromSha)!=null?ls:null;if(!we)continue;const qe=(wi=c.find(Pt=>Ko(Pt.fullSha,we)||Ko(Pt.sha,we)))==null?void 0:wi.date,et=qe?null:(Yo=Object.values(h).flat().find(Pt=>Ko(Pt.fullSha,we)||Ko(Pt.sha,we)))==null?void 0:Yo.date,At={id:`BRANCH_HEAD:${j.name}:${we}`,branchName:j.name,message:`Branch ${j.name}`,author:j.lastCommitAuthor,date:(Xs=(qt=(Zi=qe!=null?qe:et)!=null?Zi:j.createdDate)!=null?qt:j.divergedFromDate)!=null?Xs:j.lastCommitDate,parentSha:we,kind:"branch-created"};V.set(j.name,[At])}const H=new Set(G.map(j=>j.id)),J=(Hs=[...G].sort((j,U)=>Li(j.date)-Li(U.date)||j.id.localeCompare(U.id))[0])!=null?Hs:null,ie=new Map(Array.from(V.entries()).map(([j,U])=>[j,new Set(U.map(he=>he.id))])),se=new Map;for(const j of i){if(j.name===d)continue;const U=kw(j.name,h,y);if(U){se.set(j.name,U);continue}const he=(Wo=V.get(j.name))==null?void 0:Wo[0];if(he){const we=(Gs=(Fo=(Si=j.presidesFromSha)!=null?Si:j.divergedFromSha)!=null?Fo:j.createdFromSha)!=null?Gs:null;se.set(j.name,{...he,parentSha:we})}}const Me=new Map;for(const[j,U]of V.entries()){const he=U.find(we=>we.kind!=="branch-created");he&&Me.set(j,he)}const Ue=new Map;for(const[j,U]of V.entries()){const he=U.filter(et=>et.kind!=="branch-created"),qe=(Ci=(he.length>0?he:U)[0])!=null?Ci:null;qe&&Ue.set(j,qe)}const ee=new Map;for(const j of i){if(j.name===d)continue;const U=(ao=Ue.get(j.name))!=null?ao:null,he=(go=(kn=se.get(j.name))==null?void 0:kn.parentSha)!=null?go:null,we=(ro=(Ds=(Vn=j.presidesFromSha)!=null?Vn:j.divergedFromSha)!=null?Ds:j.createdFromSha)!=null?ro:null,qe=(cn=U==null?void 0:U.parentSha)!=null?cn:null,et=(Vs=qe!=null?qe:he)!=null?Vs:we;et&&ee.set(j.name,et)}const de=j=>{var et,At,Pt,Xt,fn,Yt,nn,hn;const U=(et=p[j.name])!=null?et:null;if(!(U&&U!==d&&U!==j.name&&L.has(U)))return U!=null?U:"";const we=(Xt=(Pt=(At=ee.get(j.name))!=null?At:j.presidesFromSha)!=null?Pt:j.divergedFromSha)!=null?Xt:j.createdFromSha;if(we&&((fn=ie.get(U))!=null?fn:new Set).has(we))return U;const qe=(nn=(Yt=se.get(j.name))==null?void 0:Yt.parentSha)!=null?nn:null;return qe&&((hn=ie.get(U))!=null?hn:new Set).has(qe),U},z=j=>{var qe,et,At,Pt,Xt,fn,Yt,nn;const U=se.get(j.name),he=(Xt=(Pt=(At=(et=(qe=ee.get(j.name))!=null?qe:U==null?void 0:U.parentSha)!=null?et:j.presidesFromSha)!=null?At:j.divergedFromSha)!=null?Pt:j.createdFromSha)!=null?Xt:null;if(!j.parentBranch&&!he||!he)return null;if(de(j)===d){if(H.has(he))return he;const hn=(fn=U==null?void 0:U.parentSha)!=null?fn:null;return hn&&H.has(hn)?hn:(nn=(Yt=J==null?void 0:J.id)!=null?Yt:hn)!=null?nn:he}return H.has(he),he},re=j=>z(j),W=new Map;for(const j of[...c,...u]){const U={...Mr(j.branch||"",j),visualId:`${j.branch||""}:${j.fullSha}`};W.set(j.fullSha,U)}const ge=new Map(W),Ee=j=>{ge.has(j.id)||ge.set(j.id,j)},I=new Map(Array.from(V.entries()).map(([j,U])=>[j,new Set(U.map(he=>he.id))])),ue=new Set;for(const j of I.values())for(const U of j)ue.add(U);for(const j of G)ue.has(j.id)||Ee({...j,visualId:`${j.branchName}:${j.id}`});for(const[j,U]of V.entries())for(const he of U)Ee({...he,visualId:`${j}:${he.id}`});const le=[...Array.from(ge.values()).map(j=>({...j,visualId:`${j.branchName}:${j.id}`}))].sort((j,U)=>Li(j.date)-Li(U.date)||j.id.localeCompare(U.id)),be=new Map;for(const j of le){const U=(Us=be.get(j.branchName))!=null?Us:new Set;U.add(j.id),be.set(j.branchName,U)}const Te=(j,U)=>{const he=be.get(j);if(!he||he.size===0)return!1;for(const we of he)if(Ko(we,U))return!0;return!1},Ye=(j,U)=>{const he=Array.from(be.entries()).filter(([we])=>we!==U).filter(([,we])=>Array.from(we).some(qe=>Ko(qe,j))).map(([we])=>we);return he.length>0?he.sort()[0]:j.slice(0,7)},Ie=[],it=new Map,Bt=new Map;for(const j of a){const U=j.fullSha,he=j.targetBranch,we=j.targetCommitSha;if(!U||!he||!we||!Te(he,we))continue;const qe=((Rs=j.parentShas)!=null?Rs:[]).slice(1).filter(At=>!!At&&!Ko(At,U));if(qe.length===0)continue;const et=(hs=Bt.get(U))!=null?hs:new Set;for(const At of qe){et.add(At);const Pt=Ye(At,he);Ie.push({sourceCommitSha:At,sourceBranchName:Pt,mergeCommitSha:U,targetCommitSha:we,targetBranchName:he});const Xt=(Do=it.get(Pt))!=null?Do:new Map,fn=(qs=Xt.get(At))!=null?qs:new Set;fn.add(he),Xt.set(At,fn),it.set(Pt,Xt)}Bt.set(U,et)}const tn=new Map;for(const j of i){if(j.name===d)continue;const U=z(j);U&&tn.set(j.name,U)}const Ge=new Map;for(const j of le){const U=Bt.get(j.id);if(U&&U.size>0){const qe=(So=Ge.get(j.id))!=null?So:new Set;for(const et of U)qe.add(et);Ge.set(j.id,qe)}if(j.branchName===d)continue;const he=tn.get(j.branchName);if(!he||he===j.id)continue;const we=(yo=Ge.get(j.id))!=null?yo:new Set;we.add(he),Ge.set(j.id,we)}const rt=new Map,Ut=new Map;for(const j of le){if(Ut.set(j.id,j),j.parentSha){const U=(Ro=rt.get(j.parentSha))!=null?Ro:new Set;U.add(j.id),rt.set(j.parentSha,U)}for(const U of(An=Ge.get(j.id))!=null?An:[]){if(!U)continue;const he=(Un=rt.get(U))!=null?Un:new Set;he.add(j.id),rt.set(U,he)}}const Ze=new Set(["branch-created","stash"]),vt=new Map;for(const j of le){const U=(Gn=j.clusterKey)==null?void 0:Gn.trim();if(U){vt.set(j.visualId,U);continue}const he=(Co=rt.get(j.id))!=null?Co:new Set;if(he.size===0)continue;const we=Array.from(he).map(At=>Ut.get(At)).filter(At=>At!=null);if(!(we.length>1||we.some(At=>At.kind!=null&&Ze.has(At.kind))))continue;const et=`cluster:${j.branchName}:${j.id}`;vt.set(j.visualId,et);for(const At of we)vt.set(At.visualId,et)}const xe=gy(le,N,Ge),te=new Map;for(const j of le){const U=(lo=te.get(j.branchName))!=null?lo:[];U.push(j),te.set(j.branchName,U)}const Ne=new Map,Ve=new Map,Xe=new Map,We=new Map,Je=new Map,mt=(j,U)=>{var et,At,Pt,Xt,fn;if(U.length===0)return[];const he=[...U].sort((Yt,nn)=>{var D,Y;const hn=(D=xe.get(Yt.visualId))!=null?D:Number.MAX_SAFE_INTEGER,Cs=(Y=xe.get(nn.visualId))!=null?Y:Number.MAX_SAFE_INTEGER;return hn!==Cs?hn-Cs:Li(Yt.date)-Li(nn.date)||Yt.id.localeCompare(nn.id)}),we=new Map;for(const Yt of he){const nn=(Pt=(At=vt.get(Yt.visualId))!=null?At:(et=Yt.clusterKey)==null?void 0:et.trim())!=null?Pt:`cluster:${j}:${Yt.id}`,hn=(Xt=we.get(nn))!=null?Xt:[];hn.push(Yt),we.set(nn,hn)}const qe=[];for(const[Yt,nn]of we.entries()){if(nn.length===0)continue;const Cs=[...nn].sort((Y,Z)=>{var lt,ht;const ce=(lt=xe.get(Y.visualId))!=null?lt:Number.MIN_SAFE_INTEGER,Pe=(ht=xe.get(Z.visualId))!=null?ht:Number.MIN_SAFE_INTEGER;return ce!==Pe?Pe-ce:Li(Z.date)-Li(Y.date)||Z.id.localeCompare(Y.id)})[0].visualId,D={branchName:j,key:Yt,commitIds:nn.map(Y=>Y.visualId),leadId:Cs,count:nn.length};qe.push(D),We.set(Yt,Cs),Je.set(Yt,nn.length);for(const Y of D.commitIds){Ve.set(Y,Yt);const Z=Y.split(":").slice(1).join(":"),ce=(fn=Xe.get(Z))!=null?fn:[];ce.includes(Yt)||ce.push(Yt),Xe.set(Z,ce)}}return qe};for(const[j,U]of te.entries())Ne.set(j,mt(j,U));const _t=new Map;for(const j of le)_t.set(j.id,j);const Dt=j=>{if(!j)return"none";const U=Array.from(_t.values()).find(he=>Ko(he.id,j)||Ko(he.id.slice(0,7),j)||Ko(j,he.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:j.slice(0,7)},Kt=b?["Lane rows (expected):",...[...n].sort((j,U)=>j.column-U.column||j.name.localeCompare(U.name)).map(j=>{var U;return`  row=${j.column} branch=${j.name} parent=${(U=j.parentName)!=null?U:"none"}`}),"",...i.flatMap(j=>{var At,Pt,Xt,fn,Yt,nn,hn,Cs;const U=(At=h[j.name])!=null?At:[],he=[...(Pt=K.get(j.name))!=null?Pt:[]].reverse(),we=new Set(((Xt=V.get(j.name))!=null?Xt:[]).map(D=>D.id)),qe=(Yt=(fn=he.find(D=>!D.parentSha||!he.some(Y=>{var Z;return Ko(Y.fullSha,(Z=D.parentSha)!=null?Z:"")})))!=null?fn:he[0])!=null?Yt:null,et=(hn=(nn=qe==null?void 0:qe.parentSha)!=null?nn:ee.get(j.name))!=null?hn:null;return[`Branch ${j.name}`,`  ahead=${(Cs=y[j.name])!=null?Cs:0} previews=${he.length} rendered=${we.size}`,`  db parent commit=${Dt(et)}`,`  db child commit=${qe?`${qe.fullSha.slice(0,7)} ${j.name}`:"none"}`,...he.map(D=>{const Y=we.has(D.fullSha)?"visible":"hidden",Z=we.has(D.fullSha)?"kept by render set":"dropped by render set";return`  ${Y} ${D.fullSha.slice(0,7)} ${D.message} [${Z}]`}),U.length===0?"  no preview data":null].filter(D=>D!=null)})]:[],dt=b?Array.from(V.entries()).map(([j,U])=>[`Branch debug ${j}`,...U.map(he=>`  ${he.id.slice(0,7)} ${he.message}`)].join(`
`)):[],P=xe,q=Em/Fu,fe=20/Fu,ke=O?ms+q+fe:Yu+q+fe,nt=O?Yu+q+fe:rl,Qe=Math.max(0,...le.map(j=>{var U;return(U=P.get(j.visualId))!=null?U:1})),je=le.map(j=>{var qe,et;const U=N.get(j.branchName),he=(qe=P.get(j.visualId))!=null?qe:1,we=(et=U==null?void 0:U.column)!=null?et:0;return O?{commit:j,row:he,column:we,x:Ea+(he-1)*ke,y:Ma+we*nt}:{commit:j,row:he,column:we,x:Ea+we*rl,y:Ma+(Qe-he)*ke}}),xt=j=>{var he;const U=(he=E[j.commit.visualId])!=null?he:E[j.commit.id];return U?{...j,x:U.x,y:U.y}:j},Fe=je.map(xt),Lt=w.trim().toLowerCase(),gt=Lt?Fe.filter(j=>{const U=j.commit.id.toLowerCase(),he=j.commit.id.slice(0,7).toLowerCase(),we=j.commit.message.toLowerCase(),qe=j.commit.branchName.toLowerCase();return U.includes(Lt)||he.includes(Lt)||we.includes(Lt)||qe.includes(Lt)}):Fe,tt=S&&(Ks=Fe.find(j=>j.commit.id===S))!=null?Ks:null,It=new Set(gt.map(j=>j.commit.id)),Ot=(ni=k==null?void 0:k.headSha)!=null?ni:null,Zt=(()=>{var U,he;const j=(U=k==null?void 0:k.branchName)!=null?U:null;return!Ot||!j?null:(he=Ve.get(`${j}:${Ot}`))!=null?he:null})(),st=new Set;for(const j of Ne.values())for(const U of j)U.count>1&&U.key!==Zt&&st.add(U.key);const at=[...le].filter(j=>{var et;const U=Ve.get(j.visualId);if(!U)return!0;const he=We.get(U),we=(et=Je.get(U))!=null?et:1,qe=_.has(U)||!st.has(U)&&!x.has(U);return we<=1||qe||he===j.visualId}),Tt=gy(at,N,Ge),St=Em/Fu,Jt=20/Fu,ft=O?ms+St+Jt:Yu+St+Jt,yt=O?Yu+St+Jt:rl,Sn=Math.max(0,...le.map(j=>{var U;return(U=xe.get(j.visualId))!=null?U:1})),en=Math.max(0,...at.map(j=>{var U;return(U=Tt.get(j.visualId))!=null?U:1})),Vt=Math.max(0,Sn-en),un=[...at.map(j=>{var qe,et;const U=N.get(j.branchName),he=(qe=Tt.get(j.visualId))!=null?qe:1,we=(et=U==null?void 0:U.column)!=null?et:0;return xt(O?{commit:j,row:he,column:we,x:Ea+(Vt+he-1)*ft,y:Ma+we*yt}:{commit:j,row:he,column:we,x:Ea+we*rl,y:Ma+(en-he)*ft})})].sort((j,U)=>j.row!==U.row?j.row-U.row:j.column!==U.column?j.column-U.column:j.commit.visualId.localeCompare(U.commit.visualId)).map(j=>({...j})),Mn=new Set;for(const j of un){let U=j.row,he=`${j.column}:${U}`;for(;Mn.has(he);)U+=1,he=`${j.column}:${U}`;j.row=U,Mn.add(he)}const En=Math.max(0,...un.map(j=>j.row));for(const j of un){if(O){j.x=Ea+(Vt+j.row-1)*ft,j.y=Ma+j.column*yt;continue}j.x=Ea+j.column*rl,j.y=Ma+(En-j.row)*ft}const Tn=new Map;for(const j of un){const U=(xo=Tn.get(j.commit.id))!=null?xo:[];U.push(j),Tn.set(j.commit.id,U)}const rn=new Map;for(const j of un){const U=Ve.get(j.commit.visualId);if(!U)continue;const he=rn.get(U);(!he||(O?j.x>he.x:j.y<he.y))&&rn.set(U,j)}const Wn=(j,U)=>`${j.toFixed(1)} ${U.toFixed(1)}`,ot=Math.max(0,...un.map(j=>j.row)),gs=Math.max(0,...n.map(j=>j.column)),Po=Math.max(0,...un.map(j=>j.x+ms)),ei=Math.max(0,...un.map(j=>j.y+vl+$s)),oo=Math.max(O?Ea*2+Math.max(0,ot-1)*ft+ms+Yh+Jt:Ea*2+(gs+1)*rl,Po+Ea),Ps=Math.max(O?Ma*2+gs*yt+$s+Yh+Jt:Ma*2+Math.max(0,ot-1)*ft+$s+Yh+Jt,ei+Ma),No=[],js=new Map(i.map(j=>{var he,we;const U=new Date((we=(he=j.createdDate)!=null?he:j.divergedFromDate)!=null?we:j.lastCommitDate).getTime();return[j.name,Number.isFinite(U)?U:0]})),io=j=>{var U;return(U=js.get(j))!=null?U:0},Ho=[],On=j=>{b&&Ho.push(j)},pn=new Set,fi=new Map,Fn=(j,U)=>{var we;const he=(we=fi.get(j))!=null?we:[];he.includes(U)||he.push(U),fi.set(j,he)},Ms=new Set,fs=new Set,po=new Set,Vo=(j,U)=>{var qe,et;if(!j)return null;const he=Wu(Tn,j,U);if(he)return he;const we=(qe=Ve.get(`${U!=null?U:d}:${j}`))!=null?qe:Ve.get(j);return we&&(et=rn.get(we))!=null?et:null},Pn=new Set;for(const j of i){const U=re(j);U&&fs.add(U);const he=(Ss=ee.get(j.name))!=null?Ss:null;he&&po.add(he)}const as=j=>{var qe;const U=Vo(j.id,j.branchName);if(U)return U;const he=Ve.get(j.visualId);if(!he)return null;const we=We.get(he);return we&&(qe=un.find(et=>et.commit.id===we))!=null?qe:null},Es=(j,U)=>j?Wu(Tn,j,U):null,xn=(j,U)=>O?{x:j.x-Fi,y:j.y+$s/2,face:"left"}:{x:j.x+ms/2,y:j.y+$s+Fi,face:"bottom"},Xn=j=>O?{x:j.x-Fi,y:j.y+$s/2,face:"left"}:{x:j.x+ms/2,y:j.y+$s+Fi,face:"bottom"},dn=(j,U)=>j.column!==U.column?!0:O?j.commit.branchName!==U.commit.branchName:!1,Zn=(j,U,he)=>{if(!O)return{x:U?j.x+ms:j.x+ms/2,y:U?j.y+$s/2:j.y,face:U?"right":"top"};if(!U)return{x:j.x+ms+Fi,y:j.y+$s/2,face:"right"};if(he&&he.column===j.column&&he.commit.branchName!==j.commit.branchName){if(he.x>j.x)return{x:j.x+ms/2,y:j.y+$s+Fi,face:"bottom"};if(he.x<j.x)return{x:j.x+ms/2,y:j.y-Fi,face:"top"}}return!he||he.column===j.column?{x:j.x+ms+Fi,y:j.y+$s/2,face:"right"}:he.column>j.column?{x:j.x+ms/2,y:j.y+$s+Fi,face:"bottom"}:{x:j.x+ms/2,y:j.y-Fi,face:"top"}},da=j=>O?{x:j.x+ms/2,y:j.y+$s+Fi,face:"bottom"}:{x:j.x+ms,y:j.y+$s/2,face:"right"},Uo=(j,U)=>Wu(Tn,j,U),vi=(j,U)=>Es(j,U),_o=[],ti=new Set;for(const j of Ie){const U=(Bs=Vo(j.targetCommitSha,j.targetBranchName))!=null?Bs:null;if(!U){On({id:`merge:${j.mergeCommitSha}:${j.sourceCommitSha}:target`,kind:"merge",parent:j.sourceCommitSha,child:j.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const he=j.sourceCommitSha,we=`merge:${j.mergeCommitSha}:${he!=null?he:"unknown"}`;if(!he||Ko(he,j.targetCommitSha)){On({id:we,kind:"merge",parent:he!=null?he:"unknown",child:j.targetCommitSha,rendered:!1,reason:he?"merged parent equals merge target sha":"missing merged parent sha"});continue}const qe=(Xo=Wu(Tn,he))!=null?Xo:null;if(!qe){On({id:we,kind:"merge",parent:he,child:j.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(qe.commit.id===U.commit.id){On({id:we,kind:"merge",parent:qe.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let et,At,Pt;const Xt=O?U.x+ms/2:U.x+ms-Xh,fn=O?U.y+$s+Xh:U.y+$s/2,Yt=O?"bottom":"right";O?(et=qe.x+ms+Xh,At=qe.y+$s/2,Pt="right"):(et=qe.x+ms/2,At=qe.y,Pt="top");const nn=`${et.toFixed(2)}:${At.toFixed(2)}:${Xt.toFixed(2)}:${fn.toFixed(2)}`;if(ti.has(nn)){On({id:we,kind:"merge",parent:qe.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}ti.add(nn),_o.push({id:we,fromX:et,fromY:At,toX:Xt,toY:fn,fromFace:Pt,toFace:Yt,zIndex:io(qe.commit.branchName)}),On({id:we,kind:"merge",parent:qe.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${j.targetBranchName}`})}const Ts=new Set;for(const j of i){if(j.name===d)continue;const U=se.get(j.name);if(!U)continue;const he=de(j),we=Uo((ko=ee.get(j.name))!=null?ko:"",he),qe=(bo=Me.get(j.name))!=null?bo:U,et=(Bo=vi(qe.id,j.name))!=null?Bo:as(qe);if(!we||!et||we.commit.id===et.commit.id){const Yt=Ve.get(`${j.name}:${U.id}`),nn=Ve.get(`${j.name}:${qe.id}`),hn=!!Yt&&!st.has(Yt),Cs=!!nn&&!st.has(nn),D=!!Yt&&!_.has(Yt)&&(hn?x.has(Yt):!0),Y=!!nn&&!_.has(nn)&&(Cs?x.has(nn):!0);!we&&!D&&Fn((Lo=et==null?void 0:et.commit.id)!=null?Lo:U.id,"Missing parent node"),!et&&!Y&&Fn(U.id,"Missing child node"),On({id:`branch:${(ki=we==null?void 0:we.commit.id)!=null?ki:"null"}->${(Ji=et==null?void 0:et.commit.id)!=null?Ji:"null"}`,kind:"branch",parent:(Ii=we==null?void 0:we.commit.id)!=null?Ii:"null",child:(co=et==null?void 0:et.commit.id)!=null?co:"null",rendered:!1,reason:we?et?"parent and child are the same node":"missing child node":"missing parent node"});continue}const At=`branch:${we.commit.id}->${et.commit.id}`;if(Pn.has(At)){On({id:At,kind:"branch",parent:we.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Pn.add(At),Ms.add(we.commit.id);const Pt=dn(we,et);we.commit.branchName!==et.commit.branchName&&Ts.add(we.commit.id);const Xt=da(we),fn=Xn(et);No.push({id:At,fromX:Xt.x,fromY:Xt.y,toX:fn.x,toY:fn.y,fromFace:Xt.face,toFace:fn.face,zIndex:io(et.commit.branchName)}),On({id:At,kind:"branch",parent:we.commit.id,child:et.commit.id,rendered:!0,reason:Pt?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const j of le){const U=as(j);if(!U)continue;const he=(Qs=j.parentSha)!=null?Qs:null;if(!he)continue;const we=(jt=Vo(he,j.branchName))!=null?jt:Uo(he,j.branchName);if(!we){const Xt=(zo=Ve.get(`${j.branchName}:${he}`))!=null?zo:Ve.get(he),fn=!!Xt&&!st.has(Xt);!!Xt&&!_.has(Xt)&&(fn?x.has(Xt):!0)||Fn(j.id,"Missing parent node"),On({id:`${j.visualId}->${he}`,kind:"ancestry",parent:he,child:j.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===we.commit.id){Fn(U.commit.id,"Parent and child resolve to the same node"),On({id:`${we.commit.id}->${U.commit.id}`,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const qe=`${j.branchName}:${(uo=we.commit.visualId)!=null?uo:we.commit.id}->${U.commit.visualId}`;if(Pn.has(qe)){Fn(we.commit.id,"Duplicate connector key"),Fn(U.commit.id,"Duplicate connector key"),On({id:qe,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Pn.add(qe),Ms.add(we.commit.id);const et=dn(we,U),At=Zn(we,et,U),Pt=xn(U);No.push({id:qe,fromX:At.x,fromY:At.y,toX:Pt.x,toY:Pt.y,fromFace:At.face,toFace:Pt.face,zIndex:io(U.commit.branchName)}),On({id:qe,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!0,reason:et?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),pn.add(we.commit.id),pn.add(U.commit.id)}const rs=new Map;for(const j of un){const U=(si=rs.get(j.commit.branchName))!=null?si:[];U.push(j),rs.set(j.commit.branchName,U)}for(const[j,U]of rs.entries()){if(U.length<2)continue;const he=[...U].sort((we,qe)=>{var et,At,Pt,Xt,fn,Yt,nn,hn;return we.row!==qe.row?we.row-qe.row:Li((At=(et=we==null?void 0:we.commit)==null?void 0:et.date)!=null?At:null)-Li((Xt=(Pt=qe==null?void 0:qe.commit)==null?void 0:Pt.date)!=null?Xt:null)||((Yt=(fn=we==null?void 0:we.commit)==null?void 0:fn.id)!=null?Yt:"").localeCompare((hn=(nn=qe==null?void 0:qe.commit)==null?void 0:nn.id)!=null?hn:"")});for(let we=1;we<he.length;we+=1){const qe=he[we-1],et=he[we];if(qe.commit.id===et.commit.id)continue;const At=(oi=et.commit.parentSha)!=null?oi:null;if(At&&Uo(At,et.commit.branchName))continue;const Pt=`chain:${j}:${qe.commit.id}->${et.commit.id}`;if(Pn.has(Pt)){Fn(qe.commit.id,"Duplicate branch chain connector"),Fn(et.commit.id,"Duplicate branch chain connector"),On({id:Pt,kind:"ancestry",parent:qe.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Pn.add(Pt);const Xt=dn(qe,et),fn=Zn(qe,Xt,et),Yt=xn(et);No.push({id:Pt,fromX:fn.x,fromY:fn.y,toX:Yt.x,toY:Yt.y,fromFace:fn.face,toFace:Yt.face,zIndex:io(et.commit.branchName)}),On({id:Pt,kind:"ancestry",parent:qe.commit.id,child:et.commit.id,rendered:!0,reason:"branch chain rendered"}),pn.add(qe.commit.id),pn.add(et.commit.id)}}return{branchByName:L,laneByName:N,mainCommits:G,branchCommitsByLane:V,branchPreviewSets:K,allCommits:le,clustersByBranch:Ne,clusterKeyByCommitId:Ve,clusterKeyBySha:Xe,leadByClusterKey:We,clusterCounts:Je,debugRows:Kt,branchDebugRows:dt,nodes:je,normalizedSearchQuery:Lt,matchingNodes:gt,matchingNodeIds:It,focusedNode:tt,checkedOutClusterKey:Zt,defaultCollapsedClumps:st,visibleCommitsList:at,renderNodes:un,visibleNodesBySha:Tn,visibleNodeByClusterKey:rn,pointFormatter:Wn,contentWidth:oo,contentHeight:Ps,connectors:No,mergeConnectors:_o,connectorDecisions:Ho,nodeWarnings:fi,connectorParentShas:Ms,branchStartShas:fs,branchOffNodeShas:po,crossBranchOutgoingShas:Ts,commitIdsWithRenderedAncestry:pn,branchBaseCommitByName:se,firstBranchCommitByName:Ue,mergeDestinations:Ie,mergeTargetBranchesBySourceBranchAndCommitSha:it}}const Aw=8,Nw=44,yy=120,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Fx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Aw){const V=d/_,K=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*H,c1y:n+K*H,c2x:i-V*H,c2y:a-K*H}}if(Math.min(p,y)<Nw){const V=d/_,K=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*H,c1y:n+K*H,c2x:i-V*H,c2y:a-K*H}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,y*.32),M=Math.min(160,y*.42),E=xy(c),O=xy(u);if(!(E==="v"&&O==="h"||E==="v"&&O==null&&y>=p||E==null&&O==="h"&&y>=p||E==="v"&&O==="v"||E==null&&O==null&&y>p)){const V=i,K=n;return{kind:"elbowH",cx:V,cy:K,s1c1x:t+x*w,s1c1y:n,s1c2x:V-x*S,s1c2y:K,s2c1x:V,s2c1y:K+b*k,s2c2x:i,s2c2y:a-b*M}}const N=t,G=a;return{kind:"elbowV",cx:N,cy:G,s1c1x:t,s1c1y:n+b*M,s1c2x:N,s1c2y:G-b*k,s2c1x:N+x*w,s2c1y:G,s2c2x:i-x*S,s2c2y:a}}function Dw(t,n,i,a,c,u){const d=Fx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,i,a,c,u,d){const h=Fx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,M=h.cx-S*w,E=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(M-S*w*.5,h.cy)} ${c(M,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,E)}`,`C ${c(h.cx,E+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,ac=fp/2,Rw=.45,Bw=.01,la=fp,kd=10,Lw=-100,vy=0,wy=.9,zw=.9,Sy=.001,Gh=.001,Ow=12,$w=ms+48;function zn(...t){return t.filter(Boolean).join(" ")}function Iw(t){return Math.max(Rw,Math.min(fp,t))}function Pw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Xx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Hw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Vw(t,n,i,a,c,u,d){const h=Dw(t,n,i,a,u,d),p=Hw(h);return Xx(c,p)}function Gx(t,n){return{left:t.x,top:t.y+n,right:t.x+ms,bottom:t.y+vl+$s+4}}function Uw(t,n){const i=$w,a=Math.max(120,Math.ceil(vl+$s+4-n+24)),c=new Map;for(const u of t){const d=Gx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=_;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Yw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=_;S++){const k=d.get(`${w},${S}`);if(k)for(const M of k)x.add(M)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=Gx(S,a);Xx(n,k)&&b.add(w)}return b}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/la;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Ww(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/la;return!Number.isFinite(a)||a<=0?t:Ww(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Tm(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Tm(t,n)}function Fw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Xw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:_,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:k,canPushCurrentBranch:M,pushCurrentBranchLabel:E,pushableRemoteBranchCount:O,selectedCommitTargetOption:L,mergeInProgress:N,setMergeTargetCommitSha:G,worktrees:V,currentRepoPath:K,worktreeMenuOpen:H,setWorktreeMenuOpen:J,onSwitchToWorktree:ie,onRemoveWorktree:se,removeWorktreeInProgress:Me,setCommitDialogOpen:Ue,setNewBranchDialogOpen:ee}){var Bt,tn;const de=t.length>0,z=t.length>0&&t.every(Ge=>Ge==="WORKING_TREE"),[re,W]=g.useState(!1),ge=g.useRef(null),Ee=g.useRef(null),I="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ue=!!p&&d&&!i&&!n&&(!de||z),X=!!_&&M&&!de&&!u,le=!!b&&S.length>0&&!u,be=!!x&&O>=2&&!de&&!u,Te=!!y&&!c&&!de&&!a,Ye="Push Selected...",Ie=ue?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>Ue(!0),disabled:!ue}:X?{label:u?"Pushing...":E,iconSrc:"/icon-pushBranch.svg",run:()=>void(_==null?void 0:_()),disabled:!X}:le?{label:Ye,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(S.map(Ge=>({branchName:Ge.branchName,targetSha:Ge.targetSha})))),disabled:!le}:null;return g.useEffect(()=>{const Ge=rt=>{var Ze,vt;const Ut=rt.target;Ut&&((Ze=ge.current)!=null&&Ze.contains(Ut)||(vt=Ee.current)!=null&&vt.contains(Ut)||(W(!1),J(!1)))};return window.addEventListener("pointerdown",Ge),()=>window.removeEventListener("pointerdown",Ge)},[J]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:ge,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{Ie&&Ie.run()},disabled:!Ie||Ie.disabled,className:zn(I,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[l.jsx("img",{src:(Bt=Ie==null?void 0:Ie.iconSrc)!=null?Bt:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),l.jsx("span",{children:(tn=Ie==null?void 0:Ie.label)!=null?tn:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>W(Ge=>!Ge),disabled:!Ie,"aria-haspopup":"menu","aria-expanded":re,className:zn(I,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),re&&Ie?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{W(!1),Ue(!0)},disabled:!ue,className:zn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ue&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),_==null||_()},disabled:!X,className:zn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!X&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing...":E]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),b==null||b(S.map(Ge=>({branchName:Ge.branchName,targetSha:Ge.targetSha})))},disabled:!le,className:zn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!le&&"text-muted-foreground opacity-50"),title:k,children:[l.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),Ye]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),x==null||x()},disabled:!be,className:zn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!be&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),y==null||y()},disabled:!Te,className:zn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Te&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>ee(!0),disabled:h,className:zn(I,"pointer-events-auto relative z-10 bg-background"),children:[l.jsx(Vx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&L.options.length>0&&L.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(Ge=>{const rt=Ge.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>G(Ge.targetSha),className:zn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",rt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Ge.targetBranch},`merge-${Ge.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void w(L.sources,L.targetBranch),disabled:L.sources.length===0||N,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(mw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),N?"Merging...":"Confirm"]})]}):null,V.length>0&&(ie||se)?l.jsxs("div",{ref:Ee,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>J(Ge=>!Ge),className:I,children:[l.jsx(cw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),V.length," ",V.length===1?"Worktree":"Worktrees"]}),H?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:V.map(Ge=>{var rt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Ge.path,children:Tm(Ge,K)?Fw(Ge.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(rt=Ge.branchName)!=null?rt:"detached"," • ",Ge.headSha.slice(0,7)]})]}),Tm(Ge,K)?l.jsxs("div",{className:"flex items-center gap-1",children:[ie?l.jsx("button",{type:"button",onClick:()=>{J(!1),ie(Ge.path)},disabled:Me||Ge.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,se?l.jsx("button",{type:"button",onClick:()=>void se(Ge.path,Ge.isPrunable),disabled:Me,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Me?"...":"Remove"}):null]}):null]},Ge.path)})}):null]}):null]})})}function Gw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=g.useState(!t);return g.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const _=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function qw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:k,focusedNode:M,renderNodes:E,shouldRenderNode:O,manuallyOpenedClumps:L,manuallyClosedClumps:N,defaultCollapsedClumps:G,leadByClusterKey:V,clusterKeyByCommitId:K,clusterCounts:H,commitIdsWithRenderedAncestry:J,nodeWarnings:ie,connectorParentShas:se,branchStartShas:Me,branchOffNodeShas:Ue,crossBranchOutgoingShas:ee,branchBaseCommitByName:de,branchStartAccentClass:z,connectorParentAccentClass:re,commitCornerRadiusPx:W,lineStrokeWidth:ge,pointFormatter:Ee,connectors:I,mergeConnectors:ue,cullConnectorPath:X,flushCameraReactTick:le,setManuallyOpenedClumps:be,setManuallyClosedClumps:Te,onCommitCardClick:Ye,unpushedCommitShasSetByBranch:Ie,checkedOutHeadSha:it}){const[Bt,tn]=g.useState(new Set),Ge=g.useRef(null);g.useEffect(()=>{const xe=new Set;H.forEach((Ve,Xe)=>{(L.has(Xe)||!G.has(Xe)&&!N.has(Xe))&&xe.add(Xe)});const te=Ge.current;if(te==null){Ge.current=xe;return}const Ne=[];if(xe.forEach(Ve=>{te.has(Ve)||Ne.push(Ve)}),Ne.length>0){tn(Xe=>{const We=new Set(Xe);return Ne.forEach(Je=>We.add(Je)),We});const Ve=window.setTimeout(()=>{tn(Xe=>{const We=new Set(Xe);return Ne.forEach(Je=>We.delete(Je)),We})},260);return Ge.current=xe,()=>{window.clearTimeout(Ve)}}Ge.current=xe},[H,G,N,L]);const rt=(xe,te)=>{const Ne=te.zIndex-xe.zIndex;if(Ne!==0)return Ne;const Ve=Math.min(xe.fromY,xe.toY),Xe=Math.min(te.fromY,te.toY),We=Ve-Xe;return We!==0?We:xe.id.localeCompare(te.id)},Ut=ue.filter(xe=>X(xe)).sort(rt),Ze=I.filter(xe=>X(xe)).sort(rt),vt=E.filter(xe=>O(xe));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[vt.map(xe=>{var Ot,Zt,st,at,Tt,St,Jt,ft;const te=K.get(xe.commit.visualId),Ne=te!=null?te:"none",Ve=((Ot=xe.commit.parentShas)!=null&&Ot.length?xe.commit.parentShas:xe.commit.parentSha?[xe.commit.parentSha]:["none"]).map(yt=>yt==="none"?yt:yt.slice(0,7)).join(", "),Xe=(Zt=xe.commit.childShas)!=null&&Zt.length?xe.commit.childShas.map(yt=>yt.slice(0,7)).join(", "):"none",We=te?L.has(te)||!G.has(te)&&!N.has(te):!1,Je=te?V.get(te)===xe.commit.visualId:!1,mt=te!=null&&We&&!Je&&Bt.has(te),_t=te&&(st=H.get(te))!=null?st:1,Dt=J.has(xe.commit.id),Kt=(at=ie.get(xe.commit.id))!=null?at:[],dt=Kt.length>0&&!Dt,P=w.includes(xe.commit.id),q=xe.commit.id==="WORKING_TREE"||xe.commit.kind==="uncommitted",fe=xe.commit.kind==="stash"||xe.commit.id.startsWith("STASH:"),ke=/^STASH:(\d+)$/.exec(xe.commit.id),nt=ke?`Stash:${ke[1]}`:null,Qe=fe?xe.commit.message.trim()&&xe.commit.message.trim()!=="git-visualizer"?xe.commit.message:"Stashed changes":xe.commit.message,je=xe.commit.kind==="branch-created"&&xe.commit.id.startsWith("BRANCH_HEAD:"),xt=q||((St=(Tt=Ie.get(xe.commit.branchName))==null?void 0:Tt.has(xe.commit.id))!=null?St:!1),Lt=(q||it!=null&&xe.commit.id===it)&&!P,gt=Lt?"text-[#38BDF2]":P?"text-[#158EFC]":"text-muted-foreground",tt=Lt?{color:"#38BDF2"}:P?{color:"#158EFC"}:void 0,It=(Jt=tt==null?void 0:tt.color)!=null?Jt:"#8B8B8B";return l.jsxs(Gw,{fadeIn:mt,dataCommitCard:"true",className:zn("group absolute z-20 cursor-grab active:cursor-grabbing",S&&!k.has(xe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&k.has(xe.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===xe.commit.id?"z-30":""),style:{left:xe.x,top:xe.y,width:ms,height:vl+$s+4,overflow:"visible"},onClick:yt=>Ye(yt,xe),onPointerDown:yt=>y(yt,xe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:zn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",gt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:tt,children:fe&&nt?nt:xe.commit.branchName?`${xe.commit.branchName}/${xe.commit.id.slice(0,7)}`:xe.commit.id.slice(0,7)}),Je&&_t>1?l.jsx("button",{type:"button",onMouseDown:yt=>{yt.stopPropagation()},onClick:yt=>{if(yt.stopPropagation(),yt.preventDefault(),!te)return;!G.has(te)?(be(en=>{if(!en.has(te))return en;const Vt=new Set(en);return Vt.delete(te),Vt}),Te(en=>{const Vt=new Set(en);return Vt.has(te)?Vt.delete(te):Vt.add(te),Vt})):(Te(en=>{if(!en.has(te))return en;const Vt=new Set(en);return Vt.delete(te),Vt}),be(en=>{const Vt=new Set(en);return Vt.has(te)?Vt.delete(te):Vt.add(te),Vt})),le()},className:zn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",gt),style:tt,children:We?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${_t}`}):null]})}),l.jsx("div",{className:zn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Lt&&!xt&&!fe&&!je?"bg-[#EBF7FE]":P&&!xt&&!fe&&!je?"bg-[#E5F0FF]":xt||fe||je?"bg-transparent":"bg-[#F5F5F5]",fe||q||je?"border-dashed":"",Ue.has(xe.commit.id)||Me.has(xe.commit.id)||ee.has(xe.commit.id)?z:se.has(xe.commit.id)?re:((ft=de.get(xe.commit.branchName))==null?void 0:ft.id)===xe.commit.id?"border-amber-500":dt?"border-red-500":"",(S&&k.has(xe.commit.id)&&!d,"")),style:{top:0,borderWidth:(M==null?void 0:M.commit.id)===xe.commit.id?`${fe||q||je?ge*(2/1.5):ge}px`:`${fe||q||je?ge*(2/1.5):ge}px`,borderColor:(M==null?void 0:M.commit.id)===xe.commit.id?It:Lt?"#38BDF2":P?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${W}px`,borderBottomRightRadius:`${W}px`,borderBottomLeftRadius:`${W}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:zn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",gt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:tt,children:Je&&We?Qe:Je&&_t>1?`${Qe} +${_t-1}`:Qe}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:dt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:Kt.join(`
`),children:"Broken ancestry"}):null}),l.jsxs("div",{className:"mt-2 select-text text-[10px] font-mono uppercase tracking-wide text-muted-foreground/70","data-selectable-text":"true",children:["clusterKey: ",Ne]}),l.jsxs("div",{className:"mt-1 select-text text-[10px] font-mono uppercase tracking-wide text-muted-foreground/70","data-selectable-text":"true",children:["parents: ",Ve," | children: ",Xe]})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:zn("select-text text-sm font-medium",gt),"data-selectable-text":"true",style:tt,children:["@",xe.commit.author]}),l.jsx("div",{className:zn("select-text text-sm font-medium",gt),"data-selectable-text":"true",style:tt,children:new Date(xe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},xe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Ut.map(xe=>{const{fromX:te,fromY:Ne,toX:Ve,toY:Xe}=xe,We=by(te,Ne,Ve,Xe,Ee,xe.fromFace,xe.toFace);return l.jsx("path",{d:We,fill:"none",stroke:Wh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},xe.id)}),Ze.map(xe=>{const{fromX:te,fromY:Ne,toX:Ve,toY:Xe}=xe,We=by(te,Ne,Ve,Xe,Ee,xe.fromFace,xe.toFace);return l.jsx("path",{d:We,fill:"none",stroke:Wh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},xe.id)})]})]})})})}function Kw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:_,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",..._,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Qw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:M,onNewBranchDialogClose:E,onNewBranchConfirm:O,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:G}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:V=>i(V.target.value),onKeyDown:V=>{(V.metaKey||V.ctrlKey)&&V.key==="Enter"&&(V.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(fw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(V=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:V},V))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:E,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>M("from-selected-node"),className:zn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>M("new-root"),className:zn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:V=>k(V.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:E,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:O,disabled:!w.trim()||G||S==="from-selected-node"&&!L&&!N,className:zn("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Vx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),G?"Creating...":"Create"]})]})]})}):null]})}const My="/icon-GitOrientation.svg";function Zw({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:zn("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:zn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${My})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${My})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function Jw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=g.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(bw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(iw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function eS({mapPadHostRef:t,transformLayerRef:n}){const i=g.useRef({x:0,y:0}),a=g.useRef(ac),c=g.useRef({panX:0,panY:0,zoom:ac}),u=g.useRef(null),d=g.useRef(ac),h=g.useRef(null),[p,y]=g.useState(!1),[_,x]=g.useState(ac),[b,w]=g.useState(0),S=g.useRef(null),k=g.useRef(0),M=g.useCallback(()=>{const J=t.current;if(!J)return null;const ie=J.getBoundingClientRect(),se=getComputedStyle(J),Me=Number.parseFloat(se.borderLeftWidth)||0,Ue=Number.parseFloat(se.borderTopWidth)||0,ee=Number.parseFloat(se.paddingLeft)||kd,de=Number.parseFloat(se.paddingTop)||kd;return{x:ie.left+Me+ee,y:ie.top+Ue+de}},[t]),E=g.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),g.startTransition(()=>{w(J=>J+1)}),k.current=performance.now()},[]),O=g.useCallback((J,ie,se)=>{const Me=c.current;c.current={panX:J,panY:ie,zoom:se};const Ue=n.current;if(Ue&&(Ue.style.transform=`translate3d(${J}px, ${ie}px, 0) scale(${se/la})`),Math.abs(d.current-se)>Gh&&(d.current=se,x(se)),Math.abs(se-Me.zoom)>Gh){E();return}const z=performance.now()-k.current;if(z>=vy){E();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,E()},vy-z)},[E,n]),L=g.useRef(null),N=g.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),G=g.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),V=g.useCallback((J,ie,se)=>{i.current={x:J,y:ie},a.current=se,G(),N()},[G,N]);L.current=()=>{u.current=null;const J=c.current,ie=i.current.x,se=i.current.y,Me=a.current,Ue=Math.abs(ie-J.panX)<=Sy?ie:J.panX+(ie-J.panX)*wy,ee=Math.abs(se-J.panY)<=Sy?se:J.panY+(se-J.panY)*wy,de=Math.abs(Me-J.zoom)<=Gh?Me:J.zoom+(Me-J.zoom)*zw;O(Ue,ee,de),Ue!==ie||ee!==se||de!==Me?L.current&&(u.current=window.requestAnimationFrame(L.current)):E()};const K=g.useCallback((J,ie,se)=>{const Me=Iw(se),Ue=i.current.x,ee=i.current.y,de=a.current,z=M();if(!z){V(Ue,ee,Me);return}const re=J-z.x,W=ie-z.y,ge=de/la,Ee=Me/la,I=(re-Ue)/ge,ue=(W-ee)/ge,X=re-I*Ee,le=W-ue*Ee;i.current={x:X,y:le},a.current=Me,O(X,le,Me)},[O,M]),H=g.useCallback(J=>{if(J.preventDefault(),J.ctrlKey||J.metaKey){const ie=Math.exp(-J.deltaY*Bw);K(J.clientX,J.clientY,a.current*ie);return}V(i.current.x-J.deltaX,i.current.y-J.deltaY,a.current)},[V,K]);return g.useLayoutEffect(()=>(O(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[O]),g.useLayoutEffect(()=>{const J=n.current;if(!J)return;const ie=c.current;J.style.transform=`translate3d(${ie.panX}px, ${ie.panY}px, 0) scale(${ie.zoom/la})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:M,flushCameraReactTick:E,syncCamera:V,handleWheel:H}}function tS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function nS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=g.useRef(null),h=g.useRef(!1),p=g.useRef([]),[y,_]=g.useState(!1),[x,b]=g.useState(null),[w,S]=g.useState([]),[k,M]=g.useState(null),E=g.useCallback(L=>{const N=t.current,G=i();if(!N||!G)return[];const V=N.getBoundingClientRect(),K=n.current.zoom/la;if(K<=0)return[];const H=[],J=L.left,ie=L.left+L.width,se=L.top,Me=L.top+L.height;for(const Ue of a){if(!c(Ue))continue;const ee=G.x+n.current.panX+Ue.x*K-V.left,de=G.y+n.current.panY+Ue.y*K-V.top,z=ee+ms*K,re=de+(vl+$s)*K;!(z<J||ee>ie||re<se||de>Me)&&H.push(Ue.commit.id)}return H},[i,a,n,t,c]),O=g.useCallback(L=>{if(L.button!==0)return;const N=L.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const G=t.current;if(!G)return;L.preventDefault();const V=G.getBoundingClientRect(),K=L.clientX-V.left,H=L.clientY-V.top;d.current={startX:K,startY:H,currentX:K,currentY:H,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],_(!0),b({left:K,top:H,width:0,height:0})},[t,w]);return g.useEffect(()=>{const L=G=>{var se;const V=d.current;if(!V)return;const K=t.current;if(!K)return;const H=K.getBoundingClientRect();V.currentX=G.clientX-H.left,V.currentY=G.clientY-H.top,!h.current&&(Math.abs(V.currentX-V.startX)>2||Math.abs(V.currentY-V.startY)>2)&&(h.current=!0);const J=tS(V);b(J);const ie=E(J);S(V.additive?Array.from(new Set([...p.current,...ie])):Array.from(new Set(ie))),V.additive||M((se=ie[ie.length-1])!=null?se:null)},N=()=>{if(d.current){const G=h.current;d.current=null,h.current=!1,_(!1),b(null),G||(S([]),M(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",N)}},[E,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:M,startMarqueeDrag:O}}function Ey({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:M=!1,onPushAllBranches:E,onPushCurrentBranch:O,onPushCommitTargets:L,pushInProgress:N=!1,onDeleteSelection:G,deleteInProgress:V=!1,worktrees:K=[],currentRepoPath:H,onRemoveWorktree:J,removeWorktreeInProgress:ie=!1,onSwitchToWorktree:se,onStashLocalChanges:Me,stashInProgress:Ue=!1,stashDisabled:ee=!1,onCommitLocalChanges:de,commitInProgress:z=!1,commitDisabled:re=!1,onStageAllChanges:W,stageInProgress:ge=!1,onCreateBranchFromNode:Ee,onCreateRootBranch:I,createBranchFromNodeInProgress:ue=!1,isDebugOpen:X=!1,onDebugClose:le,orientation:be="horizontal",branchCommitPreviews:Te={},branchParentByName:Ye={},branchUniqueAheadCounts:Ie={},gridSearchQuery:it="",gridSearchJumpToken:Bt=0,gridSearchJumpDirection:tn=1,gridFocusSha:Ge=null,checkedOutRef:rt=null,onGridSearchResultCountChange:Ut,onGridSearchResultIndexChange:Ze,onGridSearchFocusChange:vt,onInteractionChange:xe,manuallyOpenedClumps:te,manuallyClosedClumps:Ne,setManuallyOpenedClumps:Ve,setManuallyClosedClumps:Xe,gridHudProps:We}){var Y,Z,ce,Pe,lt,ht,Wt,bn,As,vo,Ls,$t,Rn,_n;const Je=g.useRef(null),mt=g.useRef(null),_t=g.useRef(null),Dt=g.useRef(null),Kt=g.useRef(void 0),dt=g.useRef(void 0),P=g.useRef(void 0),q=g.useRef(0),fe=g.useRef(null),[ke,nt]=g.useState(!1),[Qe,je]=g.useState(!1),[xt,Fe]=g.useState(""),[Lt,gt]=g.useState(!1),[tt,It]=g.useState(!1),[Ot,Zt]=g.useState(""),[st,at]=g.useState("from-selected-node"),[Tt,St]=g.useState(()=>new Set),[Jt,ft]=g.useState(()=>new Set),[yt,Sn]=g.useState({}),en=g.useRef(!1),Vt=g.useRef(null),_s=g.useRef(null),un=te!=null?te:Tt,Mn=Ne!=null?Ne:Jt,En=Ve!=null?Ve:St,Tn=Xe!=null?Xe:ft,[rn,Wn]=g.useState(null),[ot,gs]=g.useState(null),{isCameraMoving:Po,renderedZoom:ei,cameraRenderTick:oo,renderedCameraRef:Ps,interactionIdleTimeoutRef:No,getTransformLayerOriginScreen:js,flushCameraReactTick:io,syncCamera:Ho,handleWheel:On}=eS({mapPadHostRef:mt,transformLayerRef:_t}),pn=g.useMemo(()=>dp(t,d,Te,Ye),[t,d,Te,Ye]),Fn=g.useMemo(()=>Mc({lanes:pn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Te,branchParentByName:Ye,branchUniqueAheadCounts:Ie,manuallyOpenedClumps:un,manuallyClosedClumps:Mn,isDebugOpen:X,gridSearchQuery:it,gridFocusSha:Ge,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:yt}),[pn,t,n,i,a,d,Te,Ye,Ie,un,Mn,X,it,Ge,(Y=rt==null?void 0:rt.headSha)!=null?Y:null,(Z=rt==null?void 0:rt.branchName)!=null?Z:null,be,yt]),Ms=g.useMemo(()=>Mc({lanes:pn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Te,branchParentByName:Ye,branchUniqueAheadCounts:Ie,manuallyOpenedClumps:un,manuallyClosedClumps:Mn,isDebugOpen:X,gridSearchQuery:it,gridFocusSha:Ge,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:yt}),[pn,t,n,i,a,d,Te,Ye,Ie,un,Mn,X,it,Ge,(ce=rt==null?void 0:rt.headSha)!=null?ce:null,(Pe=rt==null?void 0:rt.branchName)!=null?Pe:null,be,yt]),{allCommits:fs,clusterKeyByCommitId:po,leadByClusterKey:Vo,clusterCounts:Pn,matchingNodes:as,matchingNodeIds:Es,normalizedSearchQuery:xn,focusedNode:Xn,defaultCollapsedClumps:dn,renderNodes:Zn,visibleNodesBySha:da,contentWidth:Uo,contentHeight:vi,connectors:_o,mergeConnectors:ti,connectorDecisions:Ts,nodeWarnings:rs,commitIdsWithRenderedAncestry:Dn,connectorParentShas:Ns,branchStartShas:Hn,branchOffNodeShas:ls,crossBranchOutgoingShas:wi,branchBaseCommitByName:Yo,pointFormatter:Zi}=Fn,qt=!!xn,Xs=ei/la,Hs=g.useMemo(()=>({transform:`scale(${1/Xs})`,transformOrigin:"top left",width:`${100*Xs}%`,height:`${100*Xs}%`}),[Xs]),Wo=-(20/Xs),Si=g.useMemo(()=>{const me=new Map;for(const $e of Zn)me.set($e.commit.visualId,$e);return me},[Zn]),Fo=g.useMemo(()=>Uw(Zn,Wo),[Zn,Wo]),Gs=me=>{var R;const $e=me.commit.id,C=me.commit.visualId;if(qt&&Es.has($e)||(Xn==null?void 0:Xn.commit.id)===$e||rn===null)return!0;if(!rn.has(C))return!1;const T=po.get(C);return T&&((R=Pn.get(T))!=null?R:1)>1&&(un.has(T)||!dn.has(T)&&!Mn.has(T)),!0},Ci=1.5/Xs,ao=Ow/Xs,kn="border-slate-400/70",go="border-blue-500",Vn=g.useMemo(()=>new Map(t.map(me=>[me.name,me])),[t]),Ds=(lt=rt==null?void 0:rt.hasUncommittedChanges)!=null?lt:!1;g.useMemo(()=>new Set(t.filter(me=>me.commitsAhead===0&&!me.name.startsWith("*")).map(me=>me.name)),[t]);const ro=g.useMemo(()=>{var $e,C;const me=new Map;for(const T of Zn){const R=($e=me.get(T.commit.id))!=null?$e:new Set;R.add(T.commit.branchName),me.set(T.commit.id,R)}for(const T of i){const R=(C=me.get(T.fullSha))!=null?C:new Set;T.branch&&R.add(T.branch),me.set(T.fullSha,R)}return me},[Zn,i,d]),cn=g.useMemo(()=>new Map(Object.entries(c).map(([me,$e])=>[me,new Set($e)])),[c]),Vs=g.useCallback(()=>{No.current,io()},[io,No]),{isMarqueeSelecting:Us,marqueeRect:Rs,selectedCommitShas:hs,setSelectedCommitShas:Do,mergeTargetCommitSha:qs,setMergeTargetCommitSha:So,startMarqueeDrag:yo}=nS({scrollContainerRef:Je,renderedCameraRef:Ps,getTransformLayerOriginScreen:js,renderNodes:Zn,shouldRenderNode:Gs,onPointerReleaseNoMarquee:Vs}),Ro=g.useMemo(()=>new Set(Zn.map(me=>me.commit.id)),[Zn]),An=g.useMemo(()=>hs.filter(me=>Ro.has(me)),[hs,Ro]),Un=g.useCallback((me,$e)=>{var R;if(!$e)return!1;if(((R=Te[me])!=null?R:[]).some(B=>bi(B.fullSha,$e)||bi(B.sha,$e)))return!0;const T=Vn.get(me);return!!(T!=null&&T.headSha&&bi(T.headSha,$e))},[Te,Vn]),Gn=(ht=rt==null?void 0:rt.branchName)!=null?ht:null,Co=(Wt=rt==null?void 0:rt.headSha)!=null?Wt:null,lo=Gn==null,Ks=g.useMemo(()=>{if(!Ge)return null;const me=Zn.filter($e=>$e.commit.id===Ge);return me.length===0?null:me.length===1||!Xn?me[0]:me.reduce(($e,C)=>{const T=($e.x-Xn.x)**2+($e.y-Xn.y)**2;return(C.x-Xn.x)**2+(C.y-Xn.y)**2<T?C:$e})},[Ge,Zn,Xn]),ni=g.useCallback((me,$e,C)=>{for(const T of K){if(!qh(T,H))continue;if(T.branchName){if(T.branchName===me&&bi(T.headSha,$e))return T;continue}if(!bi(T.headSha,$e)&&!bi(T.headSha,C))continue;if(T.parentSha&&Un(me,T.parentSha)||Un(me,T.headSha))return T;const R=Vn.get(me);if(R&&bi(R.headSha,T.headSha)||me===d&&i.some(B=>bi(B.fullSha,T.headSha)))return T}return null},[K,H,Un,Vn,d,i]),xo=g.useCallback(me=>{for(const $e of K)if(qh($e,H)&&$e.branchName===me)return $e;return null},[K,H]),Ss=g.useCallback((me,$e)=>{for(const C of K)if(qh(C,H)&&(bi(C.headSha,me)||bi(C.headSha,$e)))return C;return null},[K,H]),Bs=g.useCallback(me=>{var $e;return Array.from(($e=ro.get(me))!=null?$e:[])},[ro]),Xo=g.useMemo(()=>{var R,B,F,oe;const me=new Map;for(const De of An){const Ce=Bs(De);if(Ce.length===0)continue;const Oe=(R=Ce.find(ut=>ut!==d))!=null?R:Ce[0],ct=An.filter(ut=>ut!==De).filter(ut=>!new Set(Bs(ut)).has(Oe));me.set(Oe,{targetSha:De,targetBranch:Oe,sourceRefs:ct})}const $e=Array.from(me.values()),C=qs?$e.find(De=>{var Ce;return De.targetSha===qs||De.targetBranch===((Ce=Bs(qs)[0])!=null?Ce:"")}):null,T=(B=C!=null?C:$e[$e.length-1])!=null?B:null;return{options:$e,selected:T,targetBranch:(F=T==null?void 0:T.targetBranch)!=null?F:null,sources:(oe=T==null?void 0:T.sourceRefs)!=null?oe:[]}},[An,Bs,d,qs]),ko=g.useMemo(()=>{const me=[...Gn===d?[{name:d,headSha:Co!=null?Co:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter($e=>!$e.name.startsWith("*")&&$e.unpushedCommits>0&&$e.remoteSyncStatus!=="on-github").map($e=>[$e.name,$e]);return new Map(me)},[t,Gn,Co,d,a.length]),bo=g.useMemo(()=>{const me=T=>{var B;const R=Bs(T).filter(F=>ko.has(F));return R.length===0?null:R.length===1?R[0]:Gn&&R.includes(Gn)?Gn:(B=R.find(F=>F!==d))!=null?B:R[0]},$e=T=>{var R;return T===d?a.map(B=>{var F,oe;return{fullSha:B.fullSha,sha:B.sha,parentSha:(F=B.parentSha)!=null?F:null,message:B.message,author:B.author,date:B.date,kind:(oe=B.kind)!=null?oe:"commit"}}):(R=Te[T])!=null?R:[]},C=new Map;for(const T of An){const R=me(T);if(!R)continue;const B=ko.get(R);if(!B)continue;const F=$e(R).slice(0,B.unpushedCommits),oe=F.findIndex(Ce=>Ce.fullSha===T);if(oe===-1)continue;const De=C.get(R);(!De||oe<De.targetIndex)&&C.set(R,{branchName:R,targetSha:T,targetIndex:oe,commitCount:F.length-oe})}return Array.from(C.values())},[An,Bs,ko,Gn,d,a,Te]),Bo=g.useMemo(()=>Array.from(new Set(An.map(me=>/^STASH:(\d+)$/.exec(me)).filter(me=>!!me).map(me=>parseInt(me[1],10)))).sort((me,$e)=>me-$e),[An]),Lo=An.includes("WORKING_TREE"),ki=(Lo?1:0)+Bo.length,Ji=[...Lo?["Uncommitted changes"]:[],...Bo.map(me=>`Stash ${me+1}`)],Ii=ko.size,co=!lo&&!!Gn&&ko.has(Gn),Qs=Gn?`Push ${Gn}`:"Push current branch",jt=bo.length===1?bo[0].commitCount>1?`Push ${bo[0].commitCount} commits on ${bo[0].branchName}`:`Push ${bo[0].targetSha.slice(0,7)} on ${bo[0].branchName}`:`Push ${bo.length} selected ranges`,zo=g.useCallback(me=>{const $e=me.target;$e!=null&&$e.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||up().startDragging()},[]);g.useEffect(()=>{const me=Po||Us;Dt.current!==me&&(Dt.current=me,xe==null||xe(me))},[Po,Us,xe]),g.useEffect(()=>{const me=xn?as.length:null;Kt.current!==me&&(Kt.current=me,Ut==null||Ut(me))},[as.length,xn,Ut]),g.useEffect(()=>{const me=xn&&Ge?(()=>{const $e=as.findIndex(C=>C.commit.id===Ge);return $e>=0?$e:null})():null;dt.current!==me&&(dt.current=me,Ze==null||Ze(me))},[Ge,as,xn,Ze]);const uo=g.useMemo(()=>{var De,Ce,Oe,ct,ut,Mt;if(!xn)return null;const me=xn,$e=t.map(Rt=>Rt.name),C=$e.find(Rt=>Rt.toLowerCase()===me),T=C!=null?C:$e.find(Rt=>Rt.toLowerCase().startsWith(me)),B=T!=null?T:$e.find(Rt=>Rt.toLowerCase().includes(me));if(!B)return null;const F=(De=t.find(Rt=>Rt.name===B))!=null?De:null;if(F!=null&&F.headSha)return F.headSha;const oe=(Ce=Te[B])!=null?Ce:[];return oe.length>0?(ct=(Oe=oe[0])==null?void 0:Oe.fullSha)!=null?ct:null:B===d&&(Mt=(ut=i[0])==null?void 0:ut.fullSha)!=null?Mt:null},[xn,t,Te,d,i]);g.useEffect(()=>{var T,R,B;if(!xn){if(q.current=Bt,P.current===null)return;P.current=null,vt==null||vt(null);return}if(Bt<=0||q.current===Bt)return;q.current=Bt;let me;const $e=Ge?as.findIndex(F=>F.commit.id===Ge):-1,C=as.length>0?$e<0?0:($e+tn+as.length)%as.length:-1;me=(B=(R=(T=as[C])==null?void 0:T.commit.id)!=null?R:uo)!=null?B:null,P.current!==me&&(P.current=me,vt==null||vt(me))},[as,xn,vt,uo,Bt,tn]),g.useLayoutEffect(()=>{if(!Ge)return;const me=`${Ge}:${Bt}`;if(fe.current===me)return;const $e=Je.current,C=Ks;if(!$e||!C)return;const T=js();if(!T)return;const R=$e.getBoundingClientRect(),B=Ps.current.zoom,F=B/la,oe=C.x+ms/2,De=C.y+vl+$s/2,Ce=R.left+R.width/2,Oe=R.top+R.height/2;Ho(Ce-T.x-oe*F,Oe-T.y-De*F,B),fe.current=me},[Ge,Bt,Ks,js,Ho,Ps]);const si=(vo=(As=ot==null?void 0:ot.width)!=null?As:(bn=Je.current)==null?void 0:bn.clientWidth)!=null?vo:0,oi=(Rn=($t=ot==null?void 0:ot.height)!=null?$t:(Ls=Je.current)==null?void 0:Ls.clientHeight)!=null?Rn:0,j=si>0&&oi>0?Cy(si,oi,Ps.current,{innerPaddingPx:kd}):null,U=j!=null?ky(j,Ps.current.zoom):null,he=me=>{if(!U)return!0;const{fromX:$e,fromY:C,toX:T,toY:R}=me;return Vw($e,C,T,R,U,me.fromFace,me.toFace)};g.useLayoutEffect(()=>{var F;const me=Je.current;if(!me||me.clientWidth<=0||me.clientHeight<=0)return;const $e=me.clientWidth,C=me.clientHeight;gs(oe=>(oe==null?void 0:oe.width)===$e&&(oe==null?void 0:oe.height)===C?oe:{width:$e,height:C});const T=Cy($e,C,Ps.current,{innerPaddingPx:kd});if(!T){Wn(oe=>oe===null?oe:null);return}const R=ky(T,Ps.current.zoom),B=Yw(Fo,R,Si,Wo);for(const oe of Zn){const De=po.get(oe.commit.visualId);if(!De||((F=Pn.get(De))!=null?F:1)<=1)continue;(un.has(De)||!dn.has(De)&&!Mn.has(De))&&B.add(oe.commit.visualId)}Wn(oe=>Pw(oe,B)?oe:B)},[ei,Bt,Ge,Po,oo,un,Mn,dn,po,Pn,Zn,ot,Fo,Si,Wo]),g.useLayoutEffect(()=>{const me=Je.current;if(!me)return;const $e=()=>{const T=me.clientWidth,R=me.clientHeight;T<=0||R<=0||gs(B=>(B==null?void 0:B.width)===T&&(B==null?void 0:B.height)===R?B:{width:T,height:R})};$e();const C=new ResizeObserver($e);return C.observe(me),()=>C.disconnect()},[fs.length]);const we=Zn.filter(me=>Gs(me)).length,qe=ti.filter(me=>he(me)).length,et=_o.filter(me=>he(me)).length,At=g.useCallback((me,$e)=>{if(en.current){me.preventDefault(),me.stopPropagation();return}me.stopPropagation();const C=$e.commit.id;if(me.shiftKey?(Do(F=>F.includes(C)?F.filter(oe=>oe!==C):[...F,C]),So(C)):(Do(F=>F.includes(C)?[]:[C]),So(F=>F===C?null:C)),!(me.metaKey||me.ctrlKey||me.detail>=2)||C==="WORKING_TREE")return;const R=C.length>=40?C.slice(0,7):C;let B=null;if($e.commit.branchName?(B=ni($e.commit.branchName,C,R),B||(B=xo($e.commit.branchName))):B=Ss(C,R),B&&se){se(B.path);return}h==null||h({commitSha:C})},[Ss,ni,xo,h,se]),Pt=g.useCallback((me,$e)=>{var oe,De,Ce,Oe,ct;if(me.button!==0)return;const C=me.target;if(C!=null&&C.closest('[data-selectable-text="true"]')||C!=null&&C.closest("button, a, input, textarea, select"))return;me.stopPropagation(),me.preventDefault(),en.current=!1,me.currentTarget.setPointerCapture(me.pointerId);const T=(oe=yt[$e.commit.visualId])!=null?oe:yt[$e.commit.id];Vt.current={nodeId:$e.commit.visualId,startX:me.clientX,startY:me.clientY,baseX:(De=T==null?void 0:T.x)!=null?De:$e.x,baseY:(Ce=T==null?void 0:T.y)!=null?Ce:$e.y,moved:!1,pendingX:(Oe=T==null?void 0:T.x)!=null?Oe:$e.x,pendingY:(ct=T==null?void 0:T.y)!=null?ct:$e.y};const R=()=>{_s.current=null;const ut=Vt.current;ut&&Sn(Mt=>({...Mt,[ut.nodeId]:{x:ut.pendingX,y:ut.pendingY}}))},B=ut=>{const Mt=Vt.current;if(!Mt)return;const Rt=Ps.current.zoom/la,bt=Rt>0?1/Rt:1,pt=(ut.clientX-Mt.startX)*bt,Jn=(ut.clientY-Mt.startY)*bt;(Math.abs(pt)>2||Math.abs(Jn)>2)&&(Mt.moved=!0),Mt.moved&&(en.current=!0),Mt.pendingX=Mt.baseX+pt,Mt.pendingY=Mt.baseY+Jn,_s.current==null&&(_s.current=window.requestAnimationFrame(R))},F=()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",F),_s.current!=null&&(window.cancelAnimationFrame(_s.current),_s.current=null,R());try{me.currentTarget.releasePointerCapture(me.pointerId)}catch{}const ut=Vt.current;Vt.current=null,ut&&window.setTimeout(()=>{en.current=!1},0)};window.addEventListener("pointermove",B),window.addEventListener("pointerup",F),window.addEventListener("pointercancel",F)},[yt]),Xt=g.useCallback(async()=>{if(!de)return;await de(xt)&&(je(!1),Fe(""))},[de,xt]),fn=g.useCallback(async()=>{G&&(await G({branchNames:[],discardUncommittedChanges:Lo,stashIndices:Bo}),gt(!1),Do([]),So(null))},[G,Lo,Bo]),Yt=g.useCallback(async()=>{var $e;const me=Ot.trim();if(me){if(st==="new-root"){if(!I)return;await I(me)}else{if(!Ee)return;const C=An.length===1?An[0]:($e=rt==null?void 0:rt.headSha)!=null?$e:null;if(!C||!(C==="WORKING_TREE"||C.startsWith("STASH:")||C===(rt==null?void 0:rt.headSha)))return;await Ee(C,me)}It(!1),Zt(""),at("from-selected-node"),Do([]),So(null)}},[rt==null?void 0:rt.headSha,st,Ot,Ee,I,An]),nn=!!(rt!=null&&rt.headSha),hn=An.length===0&&nn,Cs=An.length===1&&(An[0]==="WORKING_TREE"||An[0].startsWith("STASH:"))||hn,D=!!I;return g.useEffect(()=>{if(tt){if(!Cs&&!hn&&D){at("new-root");return}(Cs||hn)&&at("from-selected-node")}},[D,hn,tt,Cs]),g.useEffect(()=>{const me=$e=>{if(!G||Lt||An.length===0)return;const C=$e.target;C!=null&&C.closest('input, textarea, select, button, [contenteditable="true"]')||$e.key!=="Delete"&&$e.key!=="Backspace"||($e.preventDefault(),gt(!0))};return window.addEventListener("keydown",me),()=>window.removeEventListener("keydown",me)},[Lt,G,An.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Kw,{isOpen:X,onClose:()=>le==null?void 0:le(),visibleBounds:U,renderedNodeCount:we,totalNodeCount:Zn.length,renderedMergeConnectorCount:qe,totalMergeConnectorCount:ti.length,renderedConnectorCount:et,totalConnectorCount:_o.length,mapGridCullViewportInsetScreenPx:Lw,debugRows:Ms.debugRows,branchDebugRows:Ms.branchDebugRows,connectorDecisions:Ts}),We?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:zo,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:l.jsx("div",{className:"window-no-drag pointer-events-auto flex min-w-0 flex-1 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Xw,{selectedVisibleCommitShas:An,commitInProgress:z,commitDisabled:re,stageInProgress:ge,stashInProgress:Ue,stashDisabled:ee,pushInProgress:N,hasUncommittedChanges:Ds,createBranchFromNodeInProgress:ue,onCommitLocalChanges:de,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:Me,onPushCurrentBranch:O,onPushAllBranches:E,onPushCommitTargets:L,onMergeRefsIntoBranch:k,selectedPushTargets:bo,selectedPushLabel:jt,canPushCurrentBranch:co,pushCurrentBranchLabel:Qs,pushableRemoteBranchCount:Ii,selectedCommitTargetOption:Xo,mergeInProgress:M,mergeTargetCommitSha:qs,setMergeTargetCommitSha:So,worktrees:K,currentRepoPath:H,worktreeMenuOpen:ke,setWorktreeMenuOpen:nt,onSwitchToWorktree:se,onRemoveWorktree:J,removeWorktreeInProgress:ie,setCommitDialogOpen:je,setNewBranchDialogOpen:It})})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(Jw,{query:We.gridSearchQuery,onQueryChange:We.setGridSearchQuery,resultCount:We.gridSearchResultCount,resultIndex:We.gridSearchResultIndex,onJump:me=>{We.setGridSearchJumpDirection(me),We.setGridSearchJumpToken($e=>$e+1)}}),l.jsx(Zw,{orientation:We.mapGridOrientation,onOrientationChange:We.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(_n=We.githubAuthStatus)!=null&&_n.ghAvailable&&!We.githubAuthStatus.authenticated?l.jsx("button",{onClick:We.onGitHubAuthSetup,disabled:We.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:We.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,We.githubAuthStatus&&!We.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,We.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:We.githubAuthMessage,children:We.githubAuthMessage})]}):null,We.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${We.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${We.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:We.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:We.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:We.commitSwitchFeedback.message})]}):null]})]}):null,fs.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(qw,{scrollContainerRef:Je,mapPadHostRef:mt,transformLayerRef:_t,isMarqueeSelecting:Us,contentWidth:Uo,contentHeight:vi,isCameraMoving:Po,onWheel:On,onMouseDown:yo,onNodePointerDown:Pt,labelTopPx:Wo,inverseZoomStyle:Hs,displayZoom:Xs,selectedVisibleCommitShas:An,normalizedSearchQuery:xn,matchingNodeIds:Es,focusedNode:Ks,renderNodes:Zn,shouldRenderNode:Gs,manuallyOpenedClumps:un,manuallyClosedClumps:Mn,defaultCollapsedClumps:dn,leadByClusterKey:Vo,clusterKeyByCommitId:po,clusterCounts:Pn,commitIdsWithRenderedAncestry:Dn,nodeWarnings:rs,connectorParentShas:Ns,branchStartShas:Hn,branchOffNodeShas:ls,crossBranchOutgoingShas:wi,branchBaseCommitByName:Yo,branchStartAccentClass:go,connectorParentAccentClass:kn,commitCornerRadiusPx:ao,lineStrokeWidth:Ci,pointFormatter:Zi,connectors:_o,mergeConnectors:ti,cullConnectorPath:he,flushCameraReactTick:io,setManuallyOpenedClumps:En,setManuallyClosedClumps:Tn,onCommitCardClick:At,unpushedCommitShasSetByBranch:cn,checkedOutHeadSha:Co,orientation:be}),Rs&&Us?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Rs.left,top:Rs.top,width:Rs.width,height:Rs.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Qw,{commitDialogOpen:Qe,commitMessageDraft:xt,onCommitMessageDraftChange:Fe,onCommitDialogClose:()=>je(!1),onCommitConfirm:()=>void Xt(),commitInProgress:z,deleteConfirmOpen:Lt,deleteSelectionItems:Ji,onDeleteConfirmClose:()=>gt(!1),onDeleteConfirm:()=>void fn(),deleteInProgress:V,deletableSelectionCount:ki,newBranchDialogOpen:tt,newBranchName:Ot,newBranchCreateMode:st,onNewBranchNameChange:Zt,onNewBranchCreateModeChange:at,onNewBranchDialogClose:()=>It(!1),onNewBranchConfirm:()=>void Yt(),selectedCommitCanCreateBranch:Cs,currentCheckedOutCommitCanCreateBranch:hn,createBranchFromNodeInProgress:ue})]})}function sS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:k=1,gridFocusSha:M=null,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,view:N="time",isLoading:G=!1,scrollRequest:V,focusedErrorBranch:K,checkedOutRef:H=null,mapTopInsetPx:J=0,onMergeRefsIntoBranch:ie,mergeInProgress:se=!1,onPushAllBranches:Me,onPushCurrentBranch:Ue,onPushCommitTargets:ee,pushInProgress:de=!1,onDeleteSelection:z,worktrees:re=[],currentRepoPath:W,onRemoveWorktree:ge,removeWorktreeInProgress:Ee=!1,onSwitchToWorktree:I,onStashLocalChanges:ue,stashInProgress:X=!1,stashDisabled:le=!1,onCommitLocalChanges:be,commitInProgress:Te=!1,commitDisabled:Ye=!1,onStageAllChanges:Ie,stageInProgress:it=!1,onCreateBranchFromNode:Bt,onCreateRootBranch:tn,createBranchFromNodeInProgress:Ge=!1,onMoveNodeBackToBranch:rt,isDebugOpen:Ut=!1,onDebugClose:Ze,orientation:vt="horizontal",onInteractionChange:xe,manuallyOpenedClumps:te,manuallyClosedClumps:Ne,setManuallyOpenedClumps:Ve,setManuallyClosedClumps:Xe,layoutModel:We,gridHudProps:Je}){const mt=new Set(u.map(P=>P.branchName)),_t=14*864e5,Dt=Date.now();function Kt(P){return mt.has(P.name)||Dt-new Date(P.lastCommitDate).getTime()<=_t}const dt=t.filter(P=>P.status==="stale"&&Kt(P)).sort((P,q)=>new Date(q.lastCommitDate).getTime()-new Date(P.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:M,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,staleBranches:dt,isLoading:G,scrollRequest:V,focusedErrorBranch:K,checkedOutRef:H,mapTopInsetPx:J,onMergeRefsIntoBranch:ie,mergeInProgress:se,onPushAllBranches:Me,onPushCurrentBranch:Ue,onPushCommitTargets:ee,pushInProgress:de,onDeleteSelection:z,worktrees:re,currentRepoPath:W,onRemoveWorktree:ge,removeWorktreeInProgress:Ee,onSwitchToWorktree:I,onStashLocalChanges:ue,stashInProgress:X,stashDisabled:le,onCommitLocalChanges:be,commitInProgress:Te,commitDisabled:Ye,onStageAllChanges:Ie,stageInProgress:it,onCreateBranchFromNode:Bt,onCreateRootBranch:tn,createBranchFromNodeInProgress:Ge,onMoveNodeBackToBranch:rt,isDebugOpen:Ut,onDebugClose:Ze,orientation:vt,onInteractionChange:xe,manuallyOpenedClumps:te,manuallyClosedClumps:Ne,setManuallyOpenedClumps:Ve,setManuallyClosedClumps:Xe,layoutModel:We,gridHudProps:Je})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:M,checkedOutRef:H,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,onInteractionChange:xe,manuallyOpenedClumps:te,manuallyClosedClumps:Ne,setManuallyOpenedClumps:Ve,setManuallyClosedClumps:Xe,layoutModel:We,isDebugOpen:Ut,onDebugClose:Ze,orientation:vt,gridHudProps:Je})}):null})}const kr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function oS(t,n,i,a){if(!t)return null;const c=d=>kr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function iS(t,n,i,a,c,u,d=!1){var se,Me,Ue,ee,de;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,_=(Me=(se=i[0])==null?void 0:se.fullSha)!=null?Me:null,x=[{name:u,headSha:_!=null?_:"",isDefault:!0},...n.map(z=>({name:z.name,headSha:z.headSha,isDefault:!1}))],b=h?x.filter(z=>kr(z.headSha,h)):[],w=oS(h,i,a,u),S=w?x.find(z=>z.name===w):void 0,k=(ee=(Ue=b.find(z=>z.isDefault))!=null?Ue:b[0])!=null?ee:S,M=!!(k&&h&&kr(k.headSha,h)),E=k&&!k.isDefault?n.find(z=>z.name===k.name):void 0,O=(()=>{var re;if(!h)return null;const z=i.find(W=>kr(W.fullSha,h)||kr(W.sha,h));if(z!=null&&z.date)return z.date;if(E&&!d){const W=((re=a[E.name])!=null?re:[]).find(ge=>kr(ge.fullSha,h)||kr(ge.sha,h));if(W!=null&&W.date)return W.date}return null})(),L=O?new Date(O).getTime():Number.NaN,N=Date.now(),G=Number.isFinite(L)?Math.max(N,L+1+t.index):N+t.index,V=new Date(G).toISOString(),K=t.message.trim(),H={fullSha:p,sha:y,parentSha:h,message:K||y,author:"You",date:V,kind:"stash"};if(M&&E)return{branches:n.map(re=>re.name===E.name?{...re,commitsAhead:re.commitsAhead+1,unpushedCommits:re.unpushedCommits+1,lastCommitDate:V,headSha:p}:re),directCommits:i,branchCommitPreviews:{...a,[E.name]:[H,...a[E.name]||[]]},branchUniqueAheadCounts:{...c,[E.name]:Math.max(0,(de=Object.prototype.hasOwnProperty.call(c,E.name)?c[E.name]:E.commitsAhead)!=null?de:0)+1}};if(M&&(k!=null&&k.isDefault)&&!d)return{branches:n,directCommits:i,branchCommitPreviews:{...a,[u]:[H,...a[u]||[]]},branchUniqueAheadCounts:c};const J=`*Stash:${t.index}`;return{branches:[{name:J,commitsAhead:1,commitsBehind:0,lastCommitDate:V,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(k==null?void 0:k.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[J]:[H]},branchUniqueAheadCounts:{...c,[J]:1}}}function qx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,_)=>y.index-_.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=iS(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function aS({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var K,H;const k=qx(y,t,i,u,h,c,(K=p==null?void 0:p.hasUncommittedChanges)!=null?K:!1);let M=k.branches,E=k.directCommits,O=k.branchCommitPreviews,L=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const J=p.headSha||p.parentSha||null,ie=(W,ge)=>!W||!ge?!1:W===ge||W.startsWith(ge)||ge.startsWith(W),se=p.branchName?M.find(W=>W.name===p.branchName):void 0,Me=(()=>{var ge;if(!J)return null;const W=E.find(Ee=>ie(Ee.fullSha,J)||ie(Ee.sha,J));if(W!=null&&W.date)return W.date;if(se){const Ee=((ge=O[se.name])!=null?ge:[]).find(I=>ie(I.fullSha,J)||ie(I.sha,J));if(Ee!=null&&Ee.date)return Ee.date}return null})(),Ue=Me?new Date(Me).getTime():Number.NaN,ee=Date.now(),de=Number.isFinite(Ue)?Math.max(ee,Ue+1):ee,z=new Date(de).toISOString(),re={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:J,message:"Local uncommitted changes",author:"You",date:z,kind:"uncommitted"};se?(M=M.map(W=>W.name===se.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:z,headSha:"WORKING_TREE"}:W),O={...O,[se.name]:[re,...O[se.name]||[]]},L={...L,[se.name]:Math.max(0,(H=Object.prototype.hasOwnProperty.call(L,se.name)?L[se.name]:se.commitsAhead)!=null?H:0)+1}):O={...O,[c]:[re,...O[c]||[]]}}const N={...d};N[c]=null;const G=dp(M,c,O,N),V=Mc({lanes:G,branches:M,mergeNodes:n,directCommits:E,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:O,branchParentByName:N,branchUniqueAheadCounts:L,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:M,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:E,sharedGridLayoutModel:V}}const Ty="git-visualizer:expanded-projects",Ay="git-visualizer:expanded-branches";function rS(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function lS(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function cS(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const _=[...h,y];if(y===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O}){var I,ue;if(_.has(t)||!a.get(t))return null;const N=(I=u.get(t))!=null?I:[],G=N.length>0,V=g.useMemo(()=>{var X;return[...(X=c[t])!=null?X:[]]},[c,t]),K=x&&V.length>0,H=x,J=G||K,ie=h.has(t),se=H?V:[],Me=ie&&se.length>0,Ue=y===t,ee=new Set(_);ee.add(t);const de="top-[-0.2rem] h-4.5 w-[10px]",z="rounded-bl-[7px]",re="left-[0.65rem]",W=new Map,ge=[];for(const X of N){const le=d.get(X);if(le){const be=se.findIndex(Te=>bi(Te.fullSha,le)||bi(Te.sha,le));if(be>=0){const Te=(ue=W.get(be))!=null?ue:[];Te.push(X),W.set(be,Te);continue}}ge.push(X)}const Ee=g.useMemo(()=>{if(!x||se.length===0)return[];const X=[];let le=[],be=null;const Te=()=>{if(le.length===0)return;const Ye=le[le.length-1],Ie=`sidebar-single-${t}-${Ye.fullSha}`;X.push({key:be!=null?be:Ie,commits:le,count:le.length,lead:Ye}),le=[],be=null};return se.forEach(Ye=>{var it;const Ie=(it=S.get(`${t}:${Ye.fullSha}`))!=null?it:null;if(le.length===0){le=[Ye],be=Ie;return}if(Ie===be){le.push(Ye);return}Te(),le=[Ye],be=Ie}),Te(),X},[t,x,se,S]);return l.jsxs("li",{className:zn("relative",n>0?"pl-4":"pl-0",n===0&&!i?ie?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:zn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",z,re,de)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:zn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",re)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:zn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Ue?"text-foreground":"text-muted-foreground hover:text-foreground"),role:J?"button":void 0,tabIndex:J?0:void 0,onClick:()=>{J?p(t):O==null||O(t)},onKeyDown:X=>{J&&(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),p(t))},children:[J?l.jsx("button",{type:"button","aria-label":`${ie?"Collapse":"Expand"} ${t}`,onPointerDown:X=>{X.preventDefault()},onClick:X=>{X.preventDefault(),X.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(sw,{"aria-hidden":"true",className:zn("h-3.5 w-3.5 shrink-0 transition-transform",ie?"rotate-90":"")})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),Me?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Ee.map(X=>{const le=X.count>1&&!k(X.key);return(le?[X.lead]:X.commits).map(Te=>{var it;const Ye=se.findIndex(Bt=>Bt.fullSha===Te.fullSha),Ie=b(Te.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>E==null?void 0:E(Te.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Te.message,children:[l.jsx("span",{className:"block truncate",children:Te.message}),Ie.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:Ie.map(Bt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Bt})]},`${Te.fullSha}:${Bt}`))}):null]}),X.count>1&&Te.fullSha===X.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${X.lead.fullSha}`,onClick:()=>M(X.key,`${t}:${X.lead.fullSha}`),className:zn("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",le?"":"min-w-[2ch] text-center"),children:le?`+${Math.max(1,X.count-1)}`:"−"}):null]}),(it=W.get(Ye))!=null&&it.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:W.get(Ye).map((Bt,tn,Ge)=>l.jsx(Am,{branchName:Bt,depth:n+1,isLast:tn===Ge.length-1&&ge.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Bt,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O},Bt))}):null]},`${t}:${Te.fullSha}`)})})}):null,G&&ie&&ge.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:ge.map((X,le)=>l.jsx(Am,{branchName:X,depth:n+1,isLast:le===ge.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:X,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O},X))}):null]})}function uS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function dS({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:_={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:w,setManuallyClosedClumps:S,gridLayoutModel:k,onSelectCommit:M,onSelectBranch:E,showCommits:O,onToggleShowCommits:L,className:N,style:G,collapsed:V=!1}){var Ut;const K=g.useRef(null),H=g.useRef(null),[J,ie]=g.useState(()=>{if(typeof window>"u")return new Set;try{const Ze=window.localStorage.getItem(Ty);if(Ze){const vt=JSON.parse(Ze);if(Array.isArray(vt)){const xe=new Set;for(const te of vt)typeof te=="string"&&xe.add(te);return xe}}}catch{}return new Set(t.map(Ze=>Ze.path))}),[se,Me]=g.useState({}),[Ue,ee]=g.useState(()=>new Set),[de,z]=g.useState(()=>new Set),[re,W]=g.useState(null),ge=x!=null?x:Ue,Ee=b!=null?b:de,I=w!=null?w:ee,ue=S!=null?S:z,[X,le]=g.useState(null),[be,Te]=g.useState(null),Ye=Ze=>{try{window.localStorage.setItem(Ty,JSON.stringify(Array.from(Ze)))}catch{}},Ie=Ze=>{try{const vt=Object.fromEntries(Object.entries(Ze).map(([xe,te])=>[xe,Array.from(te)]));window.localStorage.setItem(Ay,JSON.stringify(vt))}catch{}};g.useEffect(()=>{Ye(J)},[J]),g.useEffect(()=>{try{const Ze=window.localStorage.getItem(Ay);if(!Ze)return;const vt=JSON.parse(Ze);if(!vt||typeof vt!="object")return;const xe={};for(const[te,Ne]of Object.entries(vt)){if(!Array.isArray(Ne))continue;const Ve=new Set;for(const Xe of Ne)typeof Xe=="string"&&Ve.add(Xe);xe[te]=Ve}Me(xe)}catch{}},[]),g.useEffect(()=>{Ie(se)},[se]);const it=(Ut=k==null?void 0:k.defaultCollapsedClumps)!=null?Ut:new Set,Bt=Ze=>ge.has(Ze)||!it.has(Ze)&&!Ee.has(Ze),tn=(Ze,vt)=>{const xe=K.current,te=H.current;if(xe&&te){const Ne=`[data-clump-toggle-id="${vt}"]`,Ve=xe.querySelector(Ne);if(Ve){const Xe=Ve.getBoundingClientRect().top-te.getBoundingClientRect().top;Te({id:vt,topWithinScrollBody:Xe})}else Te(null)}else Te(null);le(vt),I(Ne=>{const Ve=new Set(Ne),Xe=Bt(Ze);return ue(We=>{const Je=new Set(We);return Xe?(Ve.delete(Ze),Je.add(Ze)):(Je.delete(Ze),Ve.add(Ze)),Je}),Ve})};g.useLayoutEffect(()=>{if(!X)return;const Ze=K.current,vt=H.current;if(!Ze||!vt)return;const xe=`[data-clump-toggle-id="${X}"]`,te=Ze.querySelector(xe);if(te){if((be==null?void 0:be.id)===X){const Ve=te.getBoundingClientRect().top-vt.getBoundingClientRect().top-be.topWithinScrollBody;Number.isFinite(Ve)&&Ve!==0&&(vt.scrollTop+=Ve)}te.focus({preventScroll:!0}),le(null),Te(null)}},[ge,Ee,X,be]);const Ge=(Ze,vt)=>{Me(xe=>{var Xe;const te=(Xe=xe[Ze])!=null?Xe:new Set,Ne=new Set(te);Ne.has(vt)?Ne.delete(vt):Ne.add(vt);const Ve={...xe,[Ze]:Ne};return Ie(Ve),Ve})};g.useEffect(()=>{if(re==null)return;const Ze=()=>W(null);return window.addEventListener("pointerdown",Ze),()=>window.removeEventListener("pointerdown",Ze)},[re]);const rt=g.useMemo(()=>{var vt,xe,te,Ne,Ve,Xe,We,Je,mt,_t,Dt,Kt,dt,P;const Ze=new Map;for(const q of t){const fe=aS({branches:q.branches,mergeNodes:q.mergeNodes,directCommits:q.directCommits,unpushedDirectCommits:q.unpushedDirectCommits,defaultBranch:q.defaultBranch,branchCommitPreviews:q.branchCommitPreviews,branchUniqueAheadCounts:q.branchUniqueAheadCounts,checkedOutRef:q.checkedOutRef,stashes:q.stashes,manuallyOpenedClumps:(vt=y[q.path])!=null?vt:new Set,manuallyClosedClumps:(xe=_[q.path])!=null?xe:new Set}),ke=fe.enrichedBranches.some(at=>at.name===q.defaultBranch)?fe.enrichedBranches:[{name:q.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...fe.enrichedBranches],nt=new Map(fe.sharedGridLayoutModel.nodes.map(at=>[at.commit.visualId,at.row])),Qe={};for(const at of fe.sharedGridLayoutModel.allCommits){const Tt=(te=Qe[at.branchName])!=null?te:[];Tt.push({fullSha:at.id,sha:at.id.slice(0,7),parentSha:(Ne=at.parentSha)!=null?Ne:null,message:at.message,author:at.author,date:at.date,kind:(Ve=at.kind)!=null?Ve:"commit"}),Qe[at.branchName]=Tt}for(const at of Object.keys(Qe))Qe[at]=Qe[at].sort((Tt,St)=>{var en,Vt;const Jt=new Date(Tt.date).getTime(),ft=new Date(St.date).getTime();if(Jt!==ft)return Jt-ft;const yt=(en=nt.get(`${at}:${Tt.fullSha}`))!=null?en:Number.MAX_SAFE_INTEGER,Sn=(Vt=nt.get(`${at}:${St.fullSha}`))!=null?Vt:Number.MAX_SAFE_INTEGER;return yt!==Sn?yt-Sn:Tt.fullSha.localeCompare(St.fullSha)});const je=(Xe=fe.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Xe:new Map,xt=(at,Tt)=>{const St=je.get(Tt);if(!St)return[];for(const[Jt,ft]of St.entries())if(bi(at,Jt))return Array.from(ft).sort();return[]},Fe=rS(ke,q.defaultBranch),Lt=lS(ke,q.defaultBranch,Fe),gt=new Map(ke.map(at=>[at.name,at])),tt=new Map;for(const at of ke){const Tt=(Je=(We=fe.sharedGridLayoutModel.firstBranchCommitByName.get(at.name))==null?void 0:We.parentSha)!=null?Je:null,St=Tt!=null?Tt:null;tt.set(at.name,St)}const It=(mt=fe.sharedGridLayoutModel.defaultCollapsedClumps)!=null?mt:new Set,Ot=(_t=y[q.path])!=null?_t:new Set,Zt=(Dt=_[q.path])!=null?Dt:new Set,st=at=>Ot.has(at)||!It.has(at)&&!Zt.has(at);Ze.set(q.path,{rootBranchNames:Lt,branchByName:gt,branchCommitPreviewsFromLayout:Qe,childNamesByParent:Fe,branchAnchorShaByName:tt,checkedOutBranchName:(dt=(Kt=q.checkedOutRef)==null?void 0:Kt.branchName)!=null?dt:null,clusterKeyByCommitId:(P=fe.sharedGridLayoutModel.clusterKeyByCommitId)!=null?P:new Map,getMergeTargetLabels:xt,isGridClusterOpen:st})}return Ze},[n,_,y,t]);return l.jsxs("aside",{ref:K,"aria-label":"Dense branch sidebar",className:zn("pointer-events-auto relative h-full select-none overflow-hidden",N),style:G,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4.5 w-4.5 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:L,"aria-hidden":"true",tabIndex:-1,className:"hidden",children:O?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:H,className:zn("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",V?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Ze=>{var Xe,We;const vt=Ze.path===n,xe=J.has(Ze.path),te=(Xe=Ze.treeLoaded)!=null?Xe:Ze.branches.length>0,Ne=rt.get(Ze.path),Ve=(We=se[Ze.path])!=null?We:Ne?cS(Ne.rootBranchNames,Ne.childNamesByParent,p,Ze.defaultBranch):new Set;return l.jsx("div",{className:zn("relative z-0",xe&&Ne?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:zn("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",vt?"text-foreground":"text-muted-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{ie(Je=>{const mt=new Set(Je);return mt.has(Ze.path)?mt.delete(Ze.path):mt.add(Ze.path),Ye(mt),mt})},"aria-expanded":xe,"aria-label":`${xe?"Collapse":"Expand"} ${Ze.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(uS,{open:xe})}),l.jsx("button",{type:"button",onClick:()=>{i(Ze.path)},className:zn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors hover:text-foreground","font-normal",vt?"text-primary":"text-muted-foreground"),children:Ze.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${Ze.name}`,"aria-expanded":re===Ze.path,onClick:Je=>{Je.stopPropagation(),W(mt=>mt===Ze.path?null:Ze.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-muted-foreground",children:l.jsx(rw,{className:"h-4 w-4 shrink-0"})}),re===Ze.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:Je=>Je.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),u(Ze.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),c(Ze.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),xe?te&&Ne?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Ne.rootBranchNames.map((Je,mt)=>l.jsx(Am,{branchName:Je,depth:0,isLast:mt===Ne.rootBranchNames.length-1,branchByName:Ne.branchByName,branchCommitPreviews:Ne.branchCommitPreviewsFromLayout,childNamesByParent:Ne.childNamesByParent,branchAnchorShaByName:Ne.branchAnchorShaByName,expandedBranchNames:Ve,onToggleBranch:_t=>Ge(Ze.path,_t),checkedOutBranchName:Ne.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:Ne.getMergeTargetLabels,sourceBranchName:Je,clusterKeyByCommitId:Ne.clusterKeyByCommitId,isGridClusterOpen:Ne.isGridClusterOpen,onToggleGridCluster:tn,onSelectCommit:async _t=>{vt||await i(Ze.path),M==null||M(_t)},onSelectBranch:async _t=>{vt||await i(Ze.path),E==null||E(_t)}},`${Ze.path}:${Je}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Ze.path)})})]})]})}const fS="git-visualizer",Kh="git-visualizer:projects",Ny=12,Dy=1400,hS=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly="git-visualizer:grid-clumps",zy=432,Oy=280,$y=640;function Ja(t){return t==="/"?t:t.replace(/\/+$/,"")}function mS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function pS(t){return md(t)===fS}function _S(){var Yt,nn,hn,Cs;const[t,n]=g.useState(null),[i,a]=g.useState(""),[c,u]=g.useState([]),[d,h]=g.useState({}),[p,y]=g.useState(!1),[_,x]=g.useState([]),[b,w]=g.useState([]),[S,k]=g.useState([]),[M,E]=g.useState([]),[O,L]=g.useState({}),[N,G]=g.useState([]),[V,K]=g.useState("main"),[H,J]=g.useState(null),[ie,se]=g.useState([]),[Me,Ue]=g.useState(!1),[ee,de]=g.useState(""),[z,re]=g.useState(0),[W,ge]=g.useState(1),[Ee,I]=g.useState({}),[ue,X]=g.useState({}),[le,be]=g.useState(null),[Te,Ye]=g.useState(null),[Ie,it]=g.useState(null),[Bt,tn]=g.useState(!1),[Ge,rt]=g.useState(!1),[Ut,Ze]=g.useState(!1),[vt,xe]=g.useState(null),[te,Ne]=g.useState(!1),[Ve,Xe]=g.useState(!1),[We,Je]=g.useState("active"),[mt,_t]=g.useState(null),[Dt,Kt]=g.useState(null),[dt,P]=g.useState(!1),[q,fe]=g.useState(null),[ke,nt]=g.useState(!1),[Qe,je]=g.useState(null),[xt,Fe]=g.useState(null),[Lt,gt]=g.useState(!1),[tt,It]=g.useState(!1),[Ot,Zt]=g.useState(!1),[st,at]=g.useState(!1),[Tt,St]=g.useState({}),[Jt,ft]=g.useState({}),[yt,Sn]=g.useState({}),[en,Vt]=g.useState({}),[_s,un]=g.useState({}),[Mn,En]=g.useState([]),[Tn,rn]=g.useState(!1),[Wn,ot]=g.useState(!1),[gs,Po]=g.useState(!1),[ei,oo]=g.useState(!1),[Ps,No]=g.useState(!1),[js,io]=g.useState("horizontal"),[Ho,On]=g.useState(!1),[pn,fi]=g.useState(zy),[Fn,Ms]=g.useState(!1),[fs,po]=g.useState({dragging:!1,lastEvent:"idle"}),Vo=g.useRef(null),Pn=g.useRef(0),as=g.useRef(0),Es=g.useRef(null),xn=g.useRef(zy),Xn=g.useRef(null),dn=g.useRef(null),Zn=pS(t)||!0,da=g.useRef(!1),Uo=g.useRef(!1),vi=g.useRef(new Set),_o=g.useRef([]),ti=g.useRef([]),Ts=g.useRef(null),rs=t!=null?t:"__no-repo__",Dn=(D,Y)=>{try{const Z={opened:Object.fromEntries(Object.entries(D).map(([ce,Pe])=>[ce,Array.from(Pe)])),closed:Object.fromEntries(Object.entries(Y).map(([ce,Pe])=>[ce,Array.from(Pe)]))};window.localStorage.setItem(Ly,JSON.stringify(Z))}catch{}};g.useEffect(()=>{var D,Y;try{const Z=window.localStorage.getItem(Ly);if(!Z)return;const ce=JSON.parse(Z);if(!ce||typeof ce!="object")return;const Pe={},lt={},ht=ce;for(const[Wt,bn]of Object.entries((D=ht.opened)!=null?D:{}))Array.isArray(bn)&&(Pe[Wt]=new Set(bn.filter(As=>typeof As=="string")));for(const[Wt,bn]of Object.entries((Y=ht.closed)!=null?Y:{}))Array.isArray(bn)&&(lt[Wt]=new Set(bn.filter(As=>typeof As=="string")));I(Pe),X(lt)}catch{}},[]),g.useEffect(()=>{Dn(Ee,ue)},[ue,Ee]);const Ns=g.useMemo(()=>{var D;return(D=Ee[rs])!=null?D:new Set},[rs,Ee]),Hn=g.useMemo(()=>{var D;return(D=ue[rs])!=null?D:new Set},[rs,ue]),ls=g.useCallback(D=>{I(Y=>{var lt;const Z=(lt=Y[rs])!=null?lt:new Set,ce=typeof D=="function"?D(Z):D,Pe={...Y,[rs]:new Set(ce)};return Dn(Pe,ue),Pe})},[rs,ue]),wi=g.useCallback(D=>{X(Y=>{var lt;const Z=(lt=Y[rs])!=null?lt:new Set,ce=typeof D=="function"?D(Z):D,Pe={...Y,[rs]:new Set(ce)};return Dn(Ee,Pe),Pe})},[rs,Ee]),Yo=g.useMemo(()=>c.map(D=>{var Y,Z,ce,Pe,lt,ht,Wt,bn,As,vo,Ls,$t,Rn,_n,me,$e,C,T,R,B,F,oe,De,Ce,Oe,ct,ut,Mt;return{...D,...(Y=d[D.path])!=null?Y:{},branches:(ce=(Z=d[D.path])==null?void 0:Z.branches)!=null?ce:[],mergeNodes:(lt=(Pe=d[D.path])==null?void 0:Pe.mergeNodes)!=null?lt:[],directCommits:(Wt=(ht=d[D.path])==null?void 0:ht.directCommits)!=null?Wt:[],unpushedDirectCommits:(As=(bn=d[D.path])==null?void 0:bn.unpushedDirectCommits)!=null?As:[],unpushedCommitShasByBranch:(Ls=(vo=d[D.path])==null?void 0:vo.unpushedCommitShasByBranch)!=null?Ls:{},checkedOutRef:(Rn=($t=d[D.path])==null?void 0:$t.checkedOutRef)!=null?Rn:null,worktrees:(me=(_n=d[D.path])==null?void 0:_n.worktrees)!=null?me:[],stashes:(C=($e=d[D.path])==null?void 0:$e.stashes)!=null?C:[],branchCommitPreviews:(R=(T=d[D.path])==null?void 0:T.branchCommitPreviews)!=null?R:{},laneByBranch:(F=(B=d[D.path])==null?void 0:B.laneByBranch)!=null?F:{},branchUniqueAheadCounts:(De=(oe=d[D.path])==null?void 0:oe.branchUniqueAheadCounts)!=null?De:{},defaultBranch:(ct=(Oe=(Ce=d[D.path])==null?void 0:Ce.defaultBranch)!=null?Oe:D.branchName)!=null?ct:"main",treeLoaded:(Mt=(ut=d[D.path])==null?void 0:ut.loaded)!=null?Mt:!1}}),[c,d]);g.useEffect(()=>{try{const D=localStorage.getItem(Kh);if(!D)return;const Y=JSON.parse(D);if(!Array.isArray(Y))return;const Z=Y.filter(ce=>typeof ce=="object"&&ce!==null&&typeof ce.path=="string"&&typeof ce.name=="string"&&typeof ce.lastOpenedAt=="number");u(Z.slice(0,Ny))}catch{u([])}},[]),g.useEffect(()=>{Uo.current||t||c.length!==0&&(Uo.current=!0,Rs(c[0].path))},[c,t]);const Zi=g.useMemo(()=>b.reduce((D,Y)=>(D[Y.targetCommitSha]=Y.targetBranch,D),{}),[b]);g.useEffect(()=>{t&&h(D=>{var Y,Z;return{...D,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:M,mergeTargetBranchByCommitSha:b.reduce((ce,Pe)=>(ce[Pe.targetCommitSha]=Pe.targetBranch,ce),{}),unpushedCommitShasByBranch:O,checkedOutRef:H,worktrees:ie,stashes:Mn,branchCommitPreviews:Jt,branchParentByName:yt,laneByBranch:en,branchUniqueAheadCounts:_s,defaultBranch:V,loaded:!0,cacheSchemaVersion:(Z=(Y=D[t])==null?void 0:Y.cacheSchemaVersion)!=null?Z:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,M,Zi,O,H,ie,Mn,Jt,yt,en,_s,V]);async function qt(D,Y=!1){var ce;const Z=Ja(D);if(Z&&!vi.current.has(Z)&&!(!Y&&((ce=d[Z])!=null&&ce.loaded))){vi.current.add(Z),y(!0);try{const Pe=await Se("get_repo_visual_snapshot",{repoPath:Z,forceRefresh:Y});h(lt=>({...lt,[Z]:Pe}))}finally{vi.current.delete(Z),vi.current.size===0&&y(!1)}}}g.useEffect(()=>{c.length!==0&&c.forEach(D=>{qt(D.path),Se("watch_repo",{repoPath:D.path}).catch(console.error)})},[c]),g.useEffect(()=>{let D=!1,Y=null;return yc("git-activity",Z=>{if(D)return;const ce=Ja(Z.payload.repoPath);!ce||ce===t||qt(ce,!0)}).then(Z=>{D?Z():Y=Z}).catch(console.error),()=>{D=!0,Y&&Y()}},[t]);function Xs(D){u(Y=>{const Z=Ja(D.path);if(!Z)return Y;const ce={...D,path:Z},lt=(Y.some(ht=>ht.path===Z)?Y.map(ht=>ht.path===Z?ce:ht):[...Y,ce]).slice(-Ny);try{localStorage.setItem(Kh,JSON.stringify(lt))}catch{}return lt})}async function Hs(D){const Y=Ja(D);if(Y){xe(null);try{const[Z,ce]=await Promise.all([Se("get_repo_info",{repoPath:Y}),Se("get_default_branch",{repoPath:Y}).catch(()=>"main")]);Xs({path:Y,name:Z.name,lastOpenedAt:Date.now(),branchName:ce}),await qt(Y,!0)}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}}}function Wo(D){var Z,ce;const Y=Ja(D);if(Y&&(u(Pe=>{const lt=Pe.filter(ht=>ht.path!==Y);try{localStorage.setItem(Kh,JSON.stringify(lt))}catch{}return lt}),h(Pe=>{if(!(Y in Pe))return Pe;const lt={...Pe};return delete lt[Y],lt}),t===Y)){const Pe=(ce=(Z=c.find(lt=>lt.path!==Y))==null?void 0:Z.path)!=null?ce:null;Pe?Rs(Pe):(n(null),a(""),x([]),w([]),k([]),E([]),L({}),J(null),se([]),En([]),ft({}),Sn({}),Vt({}),un({}))}}async function Si(D){const Y=Ja(D);if(Y)try{await Se("reveal_in_finder",{path:Y})}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}}const Fo=()=>{(async()=>{var D,Y;try{const Z=await qv({directory:!0,multiple:!1,defaultPath:(Y=(D=c[0])==null?void 0:D.path)!=null?Y:void 0});typeof Z=="string"&&Z&&await Hs(Z)}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}})()};async function Gs(D,Y){const ce=[];let Pe=0;for(;;){const lt=await Se("get_merge_nodes",{repoPath:D,branch:Y,page:Pe,perPage:100});if(ce.push(...lt.nodes),!lt.hasMore||lt.nodes.length===0)break;Pe+=1}return ce}async function Ci(D,Y,Z){const ce=Array.from(new Set([Z,...Y.map(ht=>ht.name)].filter(ht=>!!ht)));if(ce.length===0)return[];const Pe=await Promise.all(ce.map(ht=>Gs(D,ht).catch(()=>[]))),lt=new Map;for(const ht of Pe)for(const Wt of ht){const bn=`${Wt.targetCommitSha}:${Wt.targetBranch}`;lt.has(bn)||lt.set(bn,Wt)}return Array.from(lt.values())}const ao=D=>D.map(Y=>`${Y.name}|${Y.headSha}|${Y.commitsAhead}|${Y.commitsBehind}|${Y.unpushedCommits}|${Y.remoteSyncStatus}`).join("||"),kn=D=>D.map(Y=>Y.fullSha).join("|"),go=D=>{var Y,Z;return D?`${(Y=D.branchName)!=null?Y:""}|${D.headSha}|${(Z=D.parentSha)!=null?Z:""}|${D.hasUncommittedChanges?1:0}`:"__none__"};async function Vn(D,Y){const Z=Y!=null?Y:V,[ce,Pe,lt,ht,Wt,bn]=await Promise.all([Se("get_branches",{repoPath:D}),Se("get_all_repo_commits",{repoPath:D}),Se("get_unpushed_direct_commits",{repoPath:D,branch:Z}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:D}).catch(()=>null),Se("list_worktrees",{repoPath:D}).catch(()=>[]),Se("list_stashes",{repoPath:D}).catch(()=>[])]),As=await Ci(D,ce,Z),vo=await Promise.all([Z,...ce.map(Ls=>Ls.name)].map(async Ls=>{const $t=await Se("get_branch_unpushed_commit_shas",{repoPath:D,branch:Ls}).catch(()=>[]);return[Ls,$t]}));x(ce),w(As),k(Pe),E(lt),L(Object.fromEntries(vo)),J(ht),se(Wt),En(bn)}async function Ds(D){const[Y,Z,ce]=await Promise.all([Se("get_branches",{repoPath:D}).catch(()=>[]),Se("get_all_repo_commits",{repoPath:D}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:D}).catch(()=>null)]);return ao(Y)!==ao(_o.current)||kn(Z)!==kn(ti.current)||go(ce)!==go(Ts.current)}async function ro(D){Fe(null),Ze(!0);try{const[Y,Z]=await Promise.all([Se("get_repo_info",{repoPath:D}),Se("get_default_branch",{repoPath:D})]);a(Y.name),K(Z),n(D),await Vn(D,Z),hs(D),Fe({kind:"success",message:`Now targeting worktree at ${D}`})}catch(Y){const Z=Y instanceof Error?Y.message:String(Y);Fe({kind:"error",message:Z}),console.error("Failed to switch worktree:",Z)}finally{Ze(!1)}}async function cn(D,Y){if(!(!t||Me)){Ue(!0),Fe(null);try{await Se("remove_worktree",{repoPath:t,worktreePath:D,force:Y}),await Vn(t),Fe({kind:"success",message:`Removed worktree at ${D}`})}catch(Z){const ce=Z instanceof Error?Z.message:String(Z);Fe({kind:"error",message:ce}),console.error("Failed to remove worktree:",ce)}finally{Ue(!1)}}}function Vs(D,Y){var Z,ce;a(Y.name||md(D)),K(Y.defaultBranch||"main"),x(Y.branches),w(Y.mergeNodes),k(Y.directCommits),E(Y.unpushedDirectCommits),L(Y.unpushedCommitShasByBranch),J(Y.checkedOutRef),se(Y.worktrees),En(Y.stashes),ft(Y.branchCommitPreviews),Sn((Z=Y.branchParentByName)!=null?Z:{}),Vt((ce=Y.laneByBranch)!=null?ce:{}),un(Y.branchUniqueAheadCounts),n(D)}async function Us(D,Y,Z){const ce=Z==null?void 0:Z.forceRefresh,Pe=Z==null?void 0:Z.applyToActiveState;try{const[lt,ht]=await Promise.all([Se("get_repo_info",{repoPath:D}),Se("get_default_branch",{repoPath:D})]);if(Y!==Pn.current)return;const Wt=await Se("get_repo_visual_snapshot",{repoPath:D,forceRefresh:ce});if(Y!==Pn.current)return;h(bn=>({...bn,[D]:Wt})),Pe&&(t===D||Pn.current),hs(D)}catch(lt){if(Y!==Pn.current)return;console.error("Background snapshot refresh failed:",lt)}}async function Rs(D){const Y=++Pn.current,Z=Ja(D);if(!Z)return;const ce=d[Z];if(ce!=null&&ce.loaded){xe(null),Vs(Z,ce),Xs({path:Z,name:ce.name||md(Z),lastOpenedAt:Date.now(),branchName:ce.defaultBranch}),Ze(!1),rt(!1),Us(Z,Y,{forceRefresh:!1,applyToActiveState:!1});return}if(rt(!0),Ze(!0),xe(null),await new Promise(Pe=>setTimeout(Pe,15)),Y===Pn.current)try{const[Pe,lt]=await Promise.all([Se("get_repo_info",{repoPath:Z}),Se("get_default_branch",{repoPath:Z})]);if(Y!==Pn.current)return;a(Pe.name),K(lt);const ht=await Se("get_repo_visual_snapshot",{repoPath:Z,forceRefresh:!0});if(Y!==Pn.current)return;h(Wt=>({...Wt,[Z]:ht})),Vs(Z,ht),Xs({path:Z,name:Pe.name,lastOpenedAt:Date.now(),branchName:lt}),Ze(!1),rt(!1),hs(Z)}catch(Pe){if(Y!==Pn.current)return;console.error("Failed to load repo:",Pe),xe(Pe instanceof Error?Pe.message:String(Pe)),n(null),rt(!1),Ze(!1)}}async function hs(D){const Y=++as.current;try{if(Y!==as.current)return;P(!1),je(null);const Z=await Se("get_github_info",{repoPath:D}),ce=await Se("get_github_auth_status");if(Y!==as.current||(fe(ce),!ce.ghAvailable||!ce.authenticated))return;const Pe=await Se("get_open_prs",{owner:Z.owner,repo:Z.repo});if(Y!==as.current)return;G(Pe),P(!0)}catch(Z){if(Y!==as.current)return;console.log("GitHub data not available:",Z),je(Z instanceof Error?Z.message:String(Z)),P(!1)}}g.useEffect(()=>{let D=null,Y=!1;const Z=(()=>{try{return up().label}catch{return null}})(),ce=async lt=>{var Wt;const ht=(Wt=lt==null?void 0:lt.path)==null?void 0:Wt.trim();!ht||Y||t!==ht&&await Rs(ht)};return(async()=>{Z==="main"&&(D=await yc("gitviz://open-repo",async ht=>{await ce(ht.payload)}));const lt=await Se("take_pending_open_repo");await ce(lt)})(),()=>{Y=!0,D&&D()}},[t]),g.useEffect(()=>{_o.current=_},[_]),g.useEffect(()=>{ti.current=S},[S]),g.useEffect(()=>{Ts.current=H},[H]),g.useEffect(()=>{da.current=Ps},[Ps]),g.useEffect(()=>{},[t,V,Zn]),g.useEffect(()=>{if(!t||!V||!Zn)return;Se("watch_repo",{repoPath:t}).catch(console.error);let D=!1,Y=!1,Z=!1,ce=null;const Pe=async()=>{if(!D){if(da.current){Y=!0;return}if(Z){Y=!0;return}Z=!0;try{if(!await Ds(t)||D)return;await Vn(t,V)}catch(ht){console.warn("Frozen git-activity refresh failed:",ht)}finally{Z=!1,Y&&!D&&(Y=!1,window.setTimeout(()=>{Pe()},0))}}},lt=()=>{Y=!0,Pe()};return yc("git-activity",ht=>{Ja(ht.payload.repoPath)===t&&(qt(t,!0),lt())}).then(ht=>{D?ht():ce=ht}).catch(console.error),()=>{D=!0,ce&&ce()}},[t,V,Zn]);async function Do(){if(t){nt(!0),je(null);try{await Se("authenticate_github");const D=await Se("get_github_auth_status");fe(D),D.authenticated?await hs(t):D.message&&je(D.message)}catch(D){je(D instanceof Error?D.message:String(D))}finally{nt(!1)}}}const qs=new Set(N.map(D=>D.branchName)),So=14*864e5,yo=Date.now(),Ro=_.filter(D=>D.status==="stale"),An=Ro.filter(D=>qs.has(D.name)||yo-new Date(D.lastCommitDate).getTime()<=So),Un=Ro.filter(D=>!qs.has(D.name)&&yo-new Date(D.lastCommitDate).getTime()>So),Gn=D=>{var Y;return Object.prototype.hasOwnProperty.call(_s,D.name)?Math.max(0,(Y=_s[D.name])!=null?Y:0):Math.max(0,D.commitsAhead)};g.useEffect(()=>{St({}),dn.current=null,nt(!1),fe(null),je(null),G([]),Fe(null)},[t]),g.useEffect(()=>{var bn,As,vo,Ls;if(!t||!V){St({}),ft({}),Sn({}),Vt({}),un({}),dn.current=null;return}const D=_.map($t=>{var Rn;return`${$t.name}:${$t.headSha}:${(Rn=$t.parentBranch)!=null?Rn:""}:${$t.commitsAhead}`}).join("|"),Y=b.map($t=>{var Rn,_n;return`${$t.fullSha}:${(_n=(Rn=$t.parentShas)==null?void 0:Rn[1])!=null?_n:""}`}).join("|"),Z=`${t}|${V}|${D}|${Y}`;if(dn.current===Z)return;dn.current=Z;const ce={},Pe={};for(const $t of _){if($t.name===V)continue;const Rn=S.filter(_n=>_n.branch===$t.name).map(_n=>{var me;return{fullSha:_n.fullSha,sha:_n.sha,parentSha:(me=_n.parentSha)!=null?me:null,message:_n.message,author:_n.author,date:_n.date,kind:"commit"}});ce[$t.name]=Rn,Pe[$t.name]=Rn.length}const lt=new Map;for(const $t of S)lt.set($t.fullSha,$t.branch);const ht=$t=>{if(!$t)return null;const Rn=lt.get($t);if(Rn)return Rn;for(const[_n,me]of lt.entries())if(_n.startsWith($t)||$t.startsWith(_n))return me;return null},Wt={[V]:null};for(const $t of _){if($t.name===V){Wt[$t.name]=null;continue}const Rn=S.filter(C=>C.branch===$t.name),_n=new Set(Rn.map(C=>C.fullSha)),me=(As=(bn=Rn.filter(C=>{var R;const T=(R=C.parentSha)!=null?R:null;return!T||!_n.has(T)}).sort((C,T)=>{const R=new Date(C.date).getTime()-new Date(T.date).getTime();return R!==0?R:C.fullSha.localeCompare(T.fullSha)})[0])==null?void 0:bn.parentSha)!=null?As:null,$e=ht(me);Wt[$t.name]=(Ls=(vo=$e!=null?$e:yt[$t.name])!=null?vo:$t.parentBranch)!=null?Ls:null}St({}),ft(ce),Sn(Wt),Vt($t=>{const Rn={};for(const _n of _){const me=$t[_n.name];me!=null&&Number.isFinite(me)&&(Rn[_n.name]=me)}return Rn}),un(Pe)},[t,V,_,b,S,yt]),g.useEffect(()=>{if(!xt){gt(!1);return}gt(!0);const D=window.setTimeout(()=>{gt(!1)},Dy),Y=window.setTimeout(()=>{Fe(null)},Dy+hS);return()=>{window.clearTimeout(D),window.clearTimeout(Y)}},[xt]),g.useEffect(()=>{if(!t||_.length===0)return;const D=ce=>new Promise(Pe=>setTimeout(Pe,ce));async function Y(){const Pe=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Pe}`),await D(800),await Se("screenshot",{path:`${Pe}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Pe}`)}const Z=ce=>{if((ce.metaKey||ce.ctrlKey)&&!ce.shiftKey&&!ce.altKey&&ce.key.toLowerCase()==="b"){ce.preventDefault(),Ms(Pe=>!Pe);return}(ce.metaKey||ce.ctrlKey)&&ce.shiftKey&&ce.key==="S"&&(ce.preventDefault(),Y())};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[t,i,_]);function Co(){Xe(!0),setTimeout(()=>{Ne(!1),Xe(!1),Je("active"),Kt(null)},100)}async function lo(D){if(!t)return;Fe(null);const Y=/^STASH:(\d+)$/.exec(D.commitSha);if(Y){try{const Z=parseInt(Y[1],10),ce=await Se("apply_stash_restore",{repoPath:t,stashIndex:Z});J(ce),await Vn(t);const Pe=`Stash ${Z+1}`,lt=ce.branchName?` on branch ${ce.branchName}`:" at the stash base (detached HEAD)";Fe({kind:"success",message:`Restored ${Pe}${lt}; stash applied and dropped (uncommitted changes).`})}catch(Z){const ce=Z instanceof Error?Z.message:String(Z);Fe({kind:"error",message:ce}),console.error("Failed to apply stash:",ce)}return}if(D.branchName){const Z=(Pe,lt)=>{const ht=Pe.replace(/\\/g,"/").replace(/\/+$/,""),Wt=lt.replace(/\\/g,"/").replace(/\/+$/,"");return ht===Wt||ht.toLowerCase()===Wt.toLowerCase()},ce=ie.find(Pe=>Pe.pathExists===!1||Pe.isCurrent||t&&Z(Pe.path,t)?!1:Pe.branchName===D.branchName);if(ce){await ro(ce.path);return}}try{let Z="";(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:t,includeUntracked:!0}),Z="Stashed local changes (including untracked), then ",await Vn(t));const Pe=D.branchName?await Se("checkout_branch",{repoPath:t,branchName:D.branchName}):await Se("checkout_ref",{repoPath:t,refName:D.commitSha}),lt=await Se("get_checked_out_ref",{repoPath:t}).catch(()=>Pe);J(lt),await Vn(t);const ht=lt.branchName?lt.branchName:`${lt.headSha.slice(0,7)} (detached)`;Fe({kind:"success",message:`${Z}Checked out ${ht}`})}catch(Z){const ce=Z instanceof Error?Z.message:String(Z);Fe({kind:"error",message:ce}),console.error("Failed to checkout commit:",ce)}}async function Ks(){if(!(!t||Tn)){Fe(null),rn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Fe({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:t,includeUntracked:!0}),await Vn(t),Fe({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(D){const Y=D instanceof Error?D.message:String(D);Fe({kind:"error",message:Y}),console.error("Failed to stash:",Y)}finally{rn(!1)}}}async function ni(D){if(!t||Wn)return!1;const Y=D.trim();if(!Y)return Fe({kind:"error",message:"Enter a commit message."}),!1;Fe(null),ot(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Fe({kind:"error",message:"No local changes to commit."}),!1;const ce=await Se("commit_working_tree",{repoPath:t,message:Y});return J(ce),await Vn(t),Fe({kind:"success",message:"Committed local changes."}),!0}catch(Z){const ce=Z instanceof Error?Z.message:String(Z);return Fe({kind:"error",message:ce}),console.error("Failed to commit:",ce),!1}finally{ot(!1)}}async function xo(){if(!t||gs)return!1;Fe(null),Po(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Fe({kind:"error",message:"No local changes to stage."}),!1;const Y=await Se("stage_working_tree",{repoPath:t});return J(Y),await Vn(t),Fe({kind:"success",message:"Staged all changes."}),!0}catch(D){const Y=D instanceof Error?D.message:String(D);return Fe({kind:"error",message:Y}),console.error("Failed to stage:",Y),!1}finally{Po(!1)}}async function Ss(D,Y){if(!(!t||ei)){oo(!0),Fe(null);try{const Z=/^STASH:(\d+)$/.exec(D);let ce;if(Z){const Pe=parseInt(Z[1],10);ce=await Se("move_stash_to_new_branch",{repoPath:t,stashIndex:Pe,branchName:Y})}else ce=await Se("create_branch_from_uncommitted",{repoPath:t,branchName:Y});J(ce),await Vn(t),Fe({kind:"success",message:`Moved to new branch "${Y}"`})}catch(Z){const ce=Z instanceof Error?Z.message:String(Z);Fe({kind:"error",message:ce}),console.error("Failed to create branch from node:",ce)}finally{oo(!1)}}}async function Bs(D){if(!(!t||ei)){oo(!0),Fe(null);try{const Y=await Se("create_root_branch",{repoPath:t,branchName:D});J(Y),await Vn(t),Fe({kind:"success",message:`Created new root branch "${D}"`})}catch(Y){const Z=Y instanceof Error?Y.message:String(Y);Fe({kind:"error",message:Z}),console.error("Failed to create root branch:",Z)}finally{oo(!1)}}}async function Xo(D,Y){if(!t)return;const Z=Array.from(new Set(D.filter(ce=>!!ce&&ce!==Y)));if(Z.length!==0){Fe(null),It(!0);try{let ce=null;for(const Pe of Z)ce=await Se("merge_ref_into_branch",{repoPath:t,sourceRef:Pe,targetBranch:Y});await Vn(t),ce&&J(ce),Fe({kind:"success",message:Z.length===1?`Merged ${Z[0].slice(0,7)} into ${Y}`:`Merged ${Z.length} commits into ${Y}`})}catch(ce){const Pe=ce instanceof Error?ce.message:String(ce);Fe({kind:"error",message:Pe}),console.error("Failed to merge refs into branch:",Pe)}finally{It(!1)}}}async function ko(){if(!(!t||Ot)){Fe(null),Zt(!0);try{const D=await Se("push_all_unpushed_branches",{repoPath:t});await Vn(t),Fe({kind:"success",message:D.length>0?D.length===1?`Pushed ${D[0].branchName}`:`Pushed ${D.length} branches`:"Everything local is already pushed."})}catch(D){const Y=D instanceof Error?D.message:String(D);Fe({kind:"error",message:Y}),console.error("Failed to push all branches:",Y)}finally{Zt(!1)}}}async function bo(){if(!(!t||Ot)){Fe(null),Zt(!0);try{const D=await Se("push_current_branch",{repoPath:t});await Vn(t),Fe({kind:"success",message:`Pushed ${D.branchName}`})}catch(D){const Y=D instanceof Error?D.message:String(D);Fe({kind:"error",message:Y}),console.error("Failed to push current branch:",Y)}finally{Zt(!1)}}}async function Bo(D){var Z;if(!t||Ot)return;const Y=Array.from(new Map(D.filter(ce=>ce.branchName&&ce.targetSha).map(ce=>[ce.branchName,ce])).values());if(Y.length!==0){Fe(null),Zt(!0);try{for(const ce of Y)await Se("push_branch",{repoPath:t,branchName:ce.branchName,targetSha:ce.targetSha});await Vn(t),Fe({kind:"success",message:Y.length===1?`Pushed ${Y[0].branchName} through ${(Z=Y[0].targetSha)==null?void 0:Z.slice(0,7)}`:`Pushed ${Y.length} selected commit ranges`})}catch(ce){const Pe=ce instanceof Error?ce.message:String(ce);Fe({kind:"error",message:Pe}),console.error("Failed to push selected commits:",Pe)}finally{Zt(!1)}}}async function Lo(D){var lt;if(!t||st)return;const Y=Array.from(new Set(D.branchNames.filter(ht=>ht&&ht!==V))),Z=!!D.discardUncommittedChanges,ce=(lt=D.stashIndices)!=null?lt:[],Pe=Array.from(new Set(ce)).sort((ht,Wt)=>Wt-ht);if(!(Y.length===0&&!Z&&Pe.length===0)){Fe(null),at(!0);try{for(const bn of Pe)await Se("stash_drop",{repoPath:t,stashIndex:bn});const ht=Y.length>0||Z?await Se("delete_selected_elements",{repoPath:t,branchNames:Y,discardUncommittedChanges:Z}):{deletedBranches:[],discardedUncommittedChanges:!1};await Vn(t);const Wt=[];Pe.length>0&&Wt.push(Pe.length===1?`removed stash ${Pe[0]+1}`:`removed ${Pe.length} stashes`),ht.discardedUncommittedChanges&&Wt.push("discarded local uncommitted changes"),ht.deletedBranches.length>0&&Wt.push(ht.deletedBranches.length===1?`deleted ${ht.deletedBranches[0]}`:`deleted ${ht.deletedBranches.length} branches`),Fe({kind:"success",message:Wt.length>0?Wt.join(" and "):"Nothing to delete."})}catch(ht){const Wt=ht instanceof Error?ht.message:String(ht);Fe({kind:"error",message:Wt}),console.error("Failed to delete selected elements:",Wt)}finally{at(!1)}}}function ki(D){Kt(D),_t(Y=>{var Z;return{branch:D,seq:((Z=Y==null?void 0:Y.seq)!=null?Z:0)+1}})}function Ji(D){D&&(it(D),re(Y=>Y+1))}function Ii(D){D&&(de(D),re(Y=>Y+1))}g.useEffect(()=>{var Z;const D=H!=null&&H.hasUncommittedChanges?"WORKING_TREE":(Z=H==null?void 0:H.headSha)!=null?Z:null;if(!D)return;const Y=`${t!=null?t:"__no-repo__"}|${js}|${D}`;Vo.current!==Y&&(Vo.current=Y,it(D),re(ce=>ce+1))},[H==null?void 0:H.hasUncommittedChanges,H==null?void 0:H.headSha,js,t]),g.useEffect(()=>{Vo.current=null},[t]);const{enrichedBranches:co,enrichedBranchCommitPreviews:Qs,enrichedBranchUniqueAheadCounts:jt,enrichedDirectCommits:zo}=g.useMemo(()=>{var R,B,F,oe,De;const D=qx(Mn,_,S,Jt,_s,V,(R=H==null?void 0:H.hasUncommittedChanges)!=null?R:!1);let Y=D.branches,Z=D.directCommits,ce=D.branchCommitPreviews,Pe=D.branchUniqueAheadCounts;if(!(H!=null&&H.hasUncommittedChanges))return{enrichedBranches:Y,enrichedDirectCommits:Z,enrichedBranchCommitPreviews:ce,enrichedBranchUniqueAheadCounts:Pe};const lt=H.headSha||H.parentSha||null,ht=(F=(B=Z[0])==null?void 0:B.fullSha)!=null?F:null,Wt=(Ce,Oe)=>!Ce||!Oe?!1:Ce===Oe||Ce.startsWith(Oe)||Oe.startsWith(Ce),bn=[{name:V,headSha:ht!=null?ht:"",isDefault:!0},...Y.map(Ce=>({name:Ce.name,headSha:Ce.headSha,isDefault:!1}))],As=H.branchName?bn.find(Ce=>Ce.name===H.branchName):void 0,vo=lt?bn.filter(Ce=>Wt(Ce.headSha,lt)):[],Ls=(oe=As!=null?As:vo.find(Ce=>Ce.isDefault))!=null?oe:vo[0],$t=Ls&&!Ls.isDefault?Y.find(Ce=>Ce.name===Ls.name):void 0,Rn=(()=>{var Oe;if(!lt)return null;const Ce=Z.find(ct=>Wt(ct.fullSha,lt)||Wt(ct.sha,lt));if(Ce!=null&&Ce.date)return Ce.date;if($t){const ct=((Oe=ce[$t.name])!=null?Oe:[]).find(ut=>Wt(ut.fullSha,lt)||Wt(ut.sha,lt));if(ct!=null&&ct.date)return ct.date}return null})(),_n=Rn?new Date(Rn).getTime():Number.NaN,me=Date.now(),$e=Number.isFinite(_n)?Math.max(me,_n+1):me,C=new Date($e).toISOString(),T={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:lt,message:"Local uncommitted changes",author:"You",date:C,kind:"uncommitted"};return $t?{enrichedBranches:Y.map(Oe=>Oe.name===$t.name?{...Oe,commitsAhead:Oe.commitsAhead+1,unpushedCommits:Oe.unpushedCommits+1,lastCommitDate:C,headSha:"WORKING_TREE"}:Oe),enrichedDirectCommits:Z,enrichedBranchCommitPreviews:{...ce,[$t.name]:[T,...ce[$t.name]||[]]},enrichedBranchUniqueAheadCounts:{...Pe,[$t.name]:Math.max(0,(De=Object.prototype.hasOwnProperty.call(Pe,$t.name)?Pe[$t.name]:$t.commitsAhead)!=null?De:0)+1}}:{enrichedBranches:Y,enrichedBranchCommitPreviews:{...ce,[V]:[T,...ce[V]||[]]},enrichedBranchUniqueAheadCounts:{...Pe},enrichedDirectCommits:Z}},[_,Jt,_s,H,V,S,Mn]),uo=g.useMemo(()=>{const D={...yt};return D[V]=null,D},[yt,V,co]),si=g.useMemo(()=>{var D;return(D=Mw(co,V,uo,en))!=null?D:dp(co,V,Qs,uo)},[co,V,Qs,uo,en]),oi=g.useMemo(()=>Mc({lanes:si,branches:co,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,defaultBranch:V,branchCommitPreviews:Qs,branchParentByName:uo,branchUniqueAheadCounts:jt,manuallyOpenedClumps:Ns,manuallyClosedClumps:Hn,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:Ie,checkedOutRef:H!=null?H:null,orientation:js}),[si,co,b,zo,M,V,Qs,uo,jt,Ns,Hn,ee,Ie,(Yt=H==null?void 0:H.headSha)!=null?Yt:null,(nn=H==null?void 0:H.branchName)!=null?nn:null,js]),j=g.useMemo(()=>{var D;return Ie&&(D=oi.clusterKeyByCommitId.get(Ie))!=null?D:null},[oi.clusterKeyByCommitId,Ie]),U=g.useMemo(()=>{if(!j||Hn.has(j))return Ns;const D=new Set(Ns);return D.add(j),D},[Hn,Ns,j]),he=g.useMemo(()=>{if(!j)return Hn;const D=new Set(Hn);return D.delete(j),D},[Hn,j]),we=g.useMemo(()=>Mc({lanes:si,branches:co,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,defaultBranch:V,branchCommitPreviews:Qs,branchParentByName:uo,branchUniqueAheadCounts:jt,manuallyOpenedClumps:U,manuallyClosedClumps:he,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:Ie,checkedOutRef:H!=null?H:null,orientation:js}),[si,co,b,zo,M,V,Qs,uo,jt,U,he,ee,Ie,(hn=H==null?void 0:H.headSha)!=null?hn:null,(Cs=H==null?void 0:H.branchName)!=null?Cs:null,js]);g.useEffect(()=>{try{const D=window.localStorage.getItem(Ry);if(D){const Z=Number(D);Number.isFinite(Z)&&fi(Math.min($y,Math.max(Oy,Z)))}const Y=window.localStorage.getItem(By);Y!=null&&Ms(Y==="true")}catch{}},[]),g.useEffect(()=>{xn.current=pn},[pn]),g.useEffect(()=>{const D=Xn.current;D&&(D.style.width=Fn?"0px":`${pn}px`)},[pn,Fn]),g.useEffect(()=>{try{window.localStorage.setItem(By,String(Fn))}catch{}},[Fn]);const qe=D=>{const Y=Es.current;if(!Y)return;const Z=Y.startWidth+(D-Y.startX);Y.pendingWidth=Math.min($y,Math.max(Oy,Z));const ce=Xn.current;ce&&(ce.style.width=`${Y.pendingWidth}px`)},et=(D,Y)=>{const Z=Es.current;if(Z&&!(Y!=null&&Z.pointerId!==Y)){Es.current=null,po({dragging:!1,lastEvent:D}),document.body.style.cursor="",document.body.style.userSelect="",fi(Z.pendingWidth);try{window.localStorage.setItem(Ry,String(Z.pendingWidth))}catch{}}},At=D=>{D.button===0&&(D.preventDefault(),po({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:D.pointerId,clientX:D.clientX,width:xn.current}),Es.current={startX:D.clientX,startWidth:xn.current,pendingWidth:xn.current,pointerId:D.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",D.currentTarget.setPointerCapture(D.pointerId))},Pt=D=>{const Y=Es.current;!Y||Y.pointerId!==D.pointerId||(fs.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:D.clientX}),po(Z=>Z.dragging?{dragging:!0,lastEvent:"move"}:Z),qe(D.clientX))},Xt=D=>{if(Es.current){console.debug("[sidebar-resize] pointerup",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}et("pointerup",D.pointerId)}},fn=D=>{if(Es.current){console.debug("[sidebar-resize] pointercancel",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}et("pointercancel",D.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Xn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Fn?64:pn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":Fn?"Open sidebar":"Collapse sidebar",onClick:()=>Ms(D=>!D),children:Fn?l.jsx(yw,{className:"h-4 w-4 shrink-0"}):l.jsx(_w,{className:"h-4 w-4 shrink-0"})}),l.jsx(dS,{className:mS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Fn,projects:Yo,activeProjectPath:t,onSelectProject:Rs,onAddProject:Fo,onRemoveProject:Wo,onRevealProjectInFinder:Si,projectLoading:Ge||p,projectError:vt,checkedOutRef:H,showCommits:Bt,onToggleShowCommits:()=>tn(D=>!D),manuallyOpenedClumpsByProject:Ee,manuallyClosedClumpsByProject:ue,manuallyOpenedClumps:U,manuallyClosedClumps:he,setManuallyOpenedClumps:ls,setManuallyClosedClumps:wi,gridLayoutModel:we,onSelectCommit:Ji,onSelectBranch:Ii}),Fn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:At,onPointerMove:Pt,onPointerUp:Xt,onPointerCancel:fn,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(sS,{branches:co,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,unpushedCommitShasByBranch:O,defaultBranch:V,branchCommitPreviews:Qs,branchParentByName:uo,branchUniqueAheadCounts:jt,gridSearchQuery:ee,gridSearchJumpToken:z,gridSearchJumpDirection:W,gridFocusSha:Ie,onGridSearchResultCountChange:be,onGridSearchResultIndexChange:Ye,onGridSearchFocusChange:it,checkedOutRef:H,onCommitClick:lo,onMergeRefsIntoBranch:Xo,mergeInProgress:tt,onPushAllBranches:ko,onPushCurrentBranch:bo,onPushCommitTargets:Bo,pushInProgress:Ot,onDeleteSelection:Lo,deleteInProgress:st,worktrees:ie,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:cn,removeWorktreeInProgress:Me,onSwitchToWorktree:ro,onStashLocalChanges:Ks,stashInProgress:Tn,stashDisabled:!1,onCommitLocalChanges:ni,commitInProgress:Wn,commitDisabled:!1,onStageAllChanges:xo,stageInProgress:gs,onCreateBranchFromNode:Ss,onCreateRootBranch:Bs,createBranchFromNodeInProgress:ei,isDebugOpen:Ho,onDebugClose:()=>On(!1),onInteractionChange:No,manuallyOpenedClumps:U,manuallyClosedClumps:he,setManuallyOpenedClumps:ls,setManuallyClosedClumps:wi,layoutModel:we,orientation:js,gridHudProps:{githubAuthStatus:q,githubAuthLoading:ke,onGitHubAuthSetup:Do,gridSearchQuery:ee,setGridSearchQuery:de,gridSearchResultCount:le,gridSearchResultIndex:Te,setGridSearchJumpDirection:ge,setGridSearchJumpToken:re,mapGridOrientation:js,setMapGridOrientation:io,setIsGridDebugOpen:On,githubAuthMessage:Qe,commitSwitchFeedback:xt,isCommitSwitchFeedbackVisible:Lt}})]}),te&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Ve?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Co,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Je("active"),className:`text-xs font-medium transition-colors ${We==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[An.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Je("inactive"),className:`text-xs font-medium transition-colors ${We==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Un.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(We==="active"?An:Un).map(D=>{const Y=(Dt==null?void 0:Dt.name)===D.name,Z=Gn(D);return l.jsxs("button",{onClick:()=>ki(D),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${Y?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:D.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[Z>0&&`${Z} ahead`,Z>0&&D.commitsBehind>0&&", ",D.commitsBehind>0&&`${D.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},D.name)})})]})]})})})}var Bc=Lx(),gS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,yS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=gS}var ds=yS,xS=`.icon-transitions-module__iconState___uqK9J {
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
}`,bS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=xS}var os=bS,vS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),wS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),SS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),CS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${os.iconState} ${n?os.hiddenScaled:os.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${os.iconState} ${n?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),kS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${os.iconStateFast} ${i?os.visibleScaled:u?os.sending:os.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${os.iconStateFast} ${a?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconStateFast} ${c?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},jS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFade} ${n?os.visible:os.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconFade} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),MS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFadeFast} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${os.iconFadeFast} ${n?os.visible:os.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ES=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),TS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Kx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),AS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),NS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),DS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),RS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),BS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),LS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),zS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Qx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Qx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Nm="feedback-freeze-styles",Zh="__agentation_freeze";function OS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var mn=OS();typeof window<"u"&&!mn.installed&&(mn.origSetTimeout=window.setTimeout.bind(window),mn.origSetInterval=window.setInterval.bind(window),mn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?mn.origSetTimeout(t,n):mn.origSetTimeout((...a)=>{mn.frozen?mn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?mn.origSetInterval(t,n):mn.origSetInterval((...a)=>{mn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>mn.origRAF(n=>{mn.frozen?mn.frozenRAFQueue.push(t):t(n)}),mn.installed=!0);var Ht=mn.origSetTimeout,$S=mn.origSetInterval,fl=mn.origRAF;function IS(t){return t?Qx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function PS(){if(typeof document>"u"||mn.frozen)return;mn.frozen=!0,mn.frozenTimeoutQueue=[],mn.frozenRAFQueue=[];let t=document.getElementById(Nm);t||(t=document.createElement("style"),t.id=Nm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),mn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;IS(i)||(n.pause(),mn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Iy(){var i;if(typeof document>"u"||!mn.frozen)return;mn.frozen=!1;const t=mn.frozenTimeoutQueue;mn.frozenTimeoutQueue=[];for(const a of t)mn.origSetTimeout(()=>{if(mn.frozen){mn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=mn.frozenRAFQueue;mn.frozenRAFQueue=[];for(const a of n)mn.origRAF(c=>{if(mn.frozen){mn.frozenRAFQueue.push(a);return}a(c)});for(const a of mn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}mn.pausedAnimations=[],(i=document.getElementById(Nm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=g.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[M,E]=g.useState(u),[O,L]=g.useState(!1),[N,G]=g.useState("initial"),[V,K]=g.useState(!1),[H,J]=g.useState(!1),ie=g.useRef(null),se=g.useRef(null),Me=g.useRef(null),Ue=g.useRef(null);g.useEffect(()=>{b&&N!=="exit"&&G("exit")},[b,N]),g.useEffect(()=>{Ht(()=>{G("enter")},0);const ge=Ht(()=>{G("entered")},200),Ee=Ht(()=>{const I=ie.current;I&&(Jh(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(ge),clearTimeout(Ee),Me.current&&clearTimeout(Me.current),Ue.current&&clearTimeout(Ue.current)}},[]);const ee=g.useCallback(()=>{Ue.current&&clearTimeout(Ue.current),L(!0),Ue.current=Ht(()=>{L(!1),Jh(ie.current)},250)},[]);g.useImperativeHandle(k,()=>({shake:ee}),[ee]);const de=g.useCallback(()=>{G("exit"),Me.current=Ht(()=>{p()},150)},[p]),z=g.useCallback(()=>{M.trim()&&h(M.trim())},[M,h]),re=g.useCallback(ge=>{ge.stopPropagation(),!ge.nativeEvent.isComposing&&(ge.key==="Enter"&&!ge.shiftKey&&(ge.preventDefault(),z()),ge.key==="Escape"&&de())},[z,de]),W=[ds.popup,w?ds.light:"",N==="enter"?ds.enter:"",N==="entered"?ds.entered:"",N==="exit"?ds.exit:"",O?ds.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:se,className:W,"data-annotation-popup":!0,style:_,onClick:ge=>ge.stopPropagation(),children:[l.jsxs("div",{className:ds.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ds.headerToggle,onClick:()=>{const ge=H;J(!H),ge&&Ht(()=>Jh(ie.current),0)},type:"button",children:[l.jsx("svg",{className:`${ds.chevron} ${H?ds.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ds.element,children:n})]}):l.jsx("span",{className:ds.element,children:n}),i&&l.jsx("span",{className:ds.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ds.stylesWrapper} ${H?ds.expanded:""}`,children:l.jsx("div",{className:ds.stylesInner,children:l.jsx("div",{className:ds.stylesBlock,children:Object.entries(S).map(([ge,Ee])=>l.jsxs("div",{className:ds.styleLine,children:[l.jsx("span",{className:ds.styleProperty,children:ge.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ds.styleValue,children:Ee}),";"]},ge))})})}),a&&l.jsxs("div",{className:ds.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ie,className:ds.textarea,style:{borderColor:V?x:void 0},placeholder:c,value:M,onChange:ge=>E(ge.target.value),onFocus:()=>K(!0),onBlur:()=>K(!1),rows:2,onKeyDown:re}),l.jsxs("div",{className:ds.actions,children:[y&&l.jsx("div",{className:ds.deleteWrapper,children:l.jsx("button",{className:ds.deleteButton,onClick:y,type:"button",children:l.jsx(BS,{size:22})})}),l.jsx("button",{className:ds.cancel,onClick:de,children:"Cancel"}),l.jsx("button",{className:ds.submit,style:{backgroundColor:x,opacity:M.trim()?1:.4},onClick:z,disabled:!M.trim(),children:d})]})]})}),HS=({content:t,children:n,...i})=>{const[a,c]=g.useState(!1),[u,d]=g.useState(!1),[h,p]=g.useState({top:0,right:0}),y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=()=>{if(y.current){const k=y.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ht(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return g.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},VS=`.styles-module__tooltip___mcXL2 {
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
}`,US={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=VS}var Py=US,Er=({content:t})=>l.jsx(HS,{className:Py.tooltip,content:t,children:l.jsx(SS,{className:Py.tooltipIcon})}),wt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Zx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...wt.navigation},{type:"header",label:"Header",...wt.header},{type:"hero",label:"Hero",...wt.hero},{type:"section",label:"Section",...wt.section},{type:"sidebar",label:"Sidebar",...wt.sidebar},{type:"footer",label:"Footer",...wt.footer},{type:"modal",label:"Modal",...wt.modal},{type:"banner",label:"Banner",...wt.banner},{type:"drawer",label:"Drawer",...wt.drawer},{type:"popover",label:"Popover",...wt.popover},{type:"divider",label:"Divider",...wt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...wt.card},{type:"text",label:"Text",...wt.text},{type:"image",label:"Image",...wt.image},{type:"video",label:"Video",...wt.video},{type:"table",label:"Table",...wt.table},{type:"grid",label:"Grid",...wt.grid},{type:"list",label:"List",...wt.list},{type:"chart",label:"Chart",...wt.chart},{type:"codeBlock",label:"Code Block",...wt.codeBlock},{type:"map",label:"Map",...wt.map},{type:"timeline",label:"Timeline",...wt.timeline},{type:"calendar",label:"Calendar",...wt.calendar},{type:"accordion",label:"Accordion",...wt.accordion},{type:"carousel",label:"Carousel",...wt.carousel},{type:"logo",label:"Logo",...wt.logo},{type:"faq",label:"FAQ",...wt.faq},{type:"gallery",label:"Gallery",...wt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...wt.button},{type:"input",label:"Input",...wt.input},{type:"search",label:"Search",...wt.search},{type:"form",label:"Form",...wt.form},{type:"tabs",label:"Tabs",...wt.tabs},{type:"dropdown",label:"Dropdown",...wt.dropdown},{type:"toggle",label:"Toggle",...wt.toggle},{type:"stepper",label:"Stepper",...wt.stepper},{type:"rating",label:"Rating",...wt.rating},{type:"fileUpload",label:"File Upload",...wt.fileUpload},{type:"checkbox",label:"Checkbox",...wt.checkbox},{type:"radio",label:"Radio",...wt.radio},{type:"slider",label:"Slider",...wt.slider},{type:"datePicker",label:"Date Picker",...wt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...wt.avatar},{type:"badge",label:"Badge",...wt.badge},{type:"tag",label:"Tag",...wt.tag},{type:"breadcrumb",label:"Breadcrumb",...wt.breadcrumb},{type:"pagination",label:"Pagination",...wt.pagination},{type:"progress",label:"Progress",...wt.progress},{type:"alert",label:"Alert",...wt.alert},{type:"toast",label:"Toast",...wt.toast},{type:"notification",label:"Notification",...wt.notification},{type:"tooltip",label:"Tooltip",...wt.tooltip},{type:"stat",label:"Stat",...wt.stat},{type:"skeleton",label:"Skeleton",...wt.skeleton},{type:"chip",label:"Chip",...wt.chip},{type:"icon",label:"Icon",...wt.icon},{type:"spinner",label:"Spinner",...wt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...wt.pricing},{type:"testimonial",label:"Testimonial",...wt.testimonial},{type:"cta",label:"CTA",...wt.cta},{type:"productCard",label:"Product Card",...wt.productCard},{type:"profile",label:"Profile",...wt.profile},{type:"feature",label:"Feature",...wt.feature},{type:"team",label:"Team",...wt.team},{type:"login",label:"Login",...wt.login},{type:"contact",label:"Contact",...wt.contact}]}],qi={};for(const t of Zx)for(const n of t.items)qi[n.type]=n;function He({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Qn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Jo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function YS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Qn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(He,{w:t*.06}),l.jsx(He,{w:t*.07}),l.jsx(He,{w:t*.05}),l.jsx(He,{w:t*.06})]}),l.jsx(Qn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function WS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(He,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(He,{w:t*.6}),l.jsx(He,{w:t*.4}),l.jsx(Qn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function FS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(He,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Qn,{w:10,h:10,radius:2}),l.jsx(He,{w:t*(.4+c*17%30/100)})]},c))]})}function XS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"70%",h:2}),l.jsx(He,{w:"60%",h:2})]},c))})}function GS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"90%"}),l.jsx(He,{w:"70%"}),l.jsx(He,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Qn,{w:70,h:26,radius:4}),l.jsx(Qn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function qS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:4,strong:!0}),l.jsx(He,{w:"95%",h:2}),l.jsx(He,{w:"85%",h:2}),l.jsx(He,{w:"50%",h:2})]})]})}function KS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(He,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(He,{w:`${70+u*13%25}%`,h:2},u))]})}function QS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function JS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Jo,{size:8}),l.jsx(He,{w:`${55+c*17%35}%`,h:2})]},c))})}function e4({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(He,{w:Math.max(20,t*.5),h:3,strong:!0})})}function t4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(He,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(He,{w:"40%",h:2})})]})}function n4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:60+c*17%30,h:2}),l.jsx(Qn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Qn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function s4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(He,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"65%",h:2}),l.jsx(He,{w:"75%",h:2})]})]})}function o4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function i4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0})})}function a4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(He,{w:t*.35})]})}function r4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx(He,{w:t*.7}),l.jsx(He,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Qn,{w:"33%",h:"100%",radius:4}),l.jsx(Qn,{w:"33%",h:"100%",radius:4}),l.jsx(Qn,{w:"33%",h:"100%",radius:4})]})]})}function l4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Qn,{w:"100%",h:"100%",radius:4},u))})}function c4({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(He,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(He,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function u4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function d4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Jo,{size:Math.min(14,n*.4)}),l.jsx(He,{w:"50%",h:2})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function h4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function m4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Qn,{w:a,h:`${d}%`,radius:2},u)})})}function p4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Qn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function g4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(He,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Qn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function x4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function b4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(He,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Qn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5})]})]})}function w4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(He,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(He,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Qn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"75%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(He,{w:60,h:3,strong:!0}),l.jsx(He,{w:40,h:2})]})]})]})}function C4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(He,{w:t*.35}),l.jsx(Qn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function k4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"40%",h:3,strong:!0}),l.jsx(He,{w:"70%",h:2})]})]})}function j4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(Qn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(He,{w:t*.5,h:2}),l.jsx(He,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(He,{w:t*.3,h:2})]})}function E4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function T4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function A4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function D4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Jo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(He,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function R4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(He,{w:t*.4,h:2}),l.jsx(He,{w:t*.25,h:2})]})}function B4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(He,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function L4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(He,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function z4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"50%",h:3,strong:!0}),l.jsx(He,{w:"75%",h:2})]}),l.jsx(He,{w:30,h:2})]})}function O4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"65%",h:4,strong:!0}),l.jsx(He,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:"30%",h:5,strong:!0}),l.jsx(Qn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function $4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Jo,{size:i}),l.jsx(He,{w:t*.45,h:4,strong:!0}),l.jsx(He,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]})]})]})}function I4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(He,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(He,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function P4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:3,strong:!0}),l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function H4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Qn,{w:i,h:i,radius:i*.25}),l.jsx(He,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function V4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(He,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function U4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function Y4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function W4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function F4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function X4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(He,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function G4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function q4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(He,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function K4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Q4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Z4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Qn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(He,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function J4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:a}),l.jsx(He,{w:t*.12,h:3,strong:!0}),l.jsx(He,{w:t*.08,h:2})]},u))})]})}function e6({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(He,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:Math.min(60,t*.2),h:2}),l.jsx(Qn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Qn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(He,{w:t*.4,h:2})]})}function t6({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(He,{w:t*.4,h:4,strong:!0}),l.jsx(He,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:40,h:2}),l.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(He,{w:60,h:2}),l.jsx(Qn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Qn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var n6={navigation:YS,hero:WS,sidebar:FS,footer:XS,modal:GS,card:qS,text:KS,image:QS,table:ZS,list:JS,button:e4,input:t4,form:n4,tabs:s4,avatar:o4,badge:i4,header:a4,section:r4,grid:l4,dropdown:c4,toggle:u4,search:d4,toast:f4,progress:h4,chart:m4,video:p4,tooltip:_4,breadcrumb:g4,pagination:y4,divider:x4,accordion:b4,carousel:v4,pricing:w4,testimonial:S4,cta:C4,alert:k4,banner:j4,stat:M4,stepper:E4,tag:T4,rating:A4,map:N4,timeline:D4,fileUpload:R4,codeBlock:B4,calendar:L4,notification:z4,productCard:O4,profile:$4,drawer:I4,popover:P4,logo:H4,faq:V4,gallery:U4,checkbox:Y4,radio:W4,slider:F4,datePicker:X4,skeleton:G4,chip:q4,icon:K4,spinner:Q4,feature:Z4,team:J4,login:e6,contact:t6};function s6({type:t,width:n,height:i,text:a}){const c=n6[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var o6=`svg[fill=none] {
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
}`,i6={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=o6}var Be=i6,ll=24,Xu=5;function Hy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],M=[];for(const se of n)i.has(se.id)||M.push(se);c&&M.push(...c);for(const se of M){const Me=se.x,Ue=se.x+se.width,ee=se.x+se.width/2,de=se.y,z=se.y+se.height,re=se.y+se.height/2;for(const W of S)for(const ge of[Me,Ue,ee]){const Ee=ge-W;Math.abs(Ee)<Xu&&Math.abs(Ee)<Math.abs(u)&&(u=Ee)}for(const W of k)for(const ge of[de,z,re]){const Ee=ge-W;Math.abs(Ee)<Xu&&Math.abs(Ee)<Math.abs(d)&&(d=Ee)}}const E=Math.abs(u)<Xu?u:0,O=Math.abs(d)<Xu?d:0,L=[],N=new Set,G=h+E,V=p+E,K=y+E,H=_+O,J=x+O,ie=b+O;for(const se of M){const Me=se.x,Ue=se.x+se.width,ee=se.x+se.width/2,de=se.y,z=se.y+se.height,re=se.y+se.height/2;for(const W of[Me,ee,Ue])for(const ge of[G,K,V])if(Math.abs(ge-W)<.5){const Ee=`x:${Math.round(W)}`;N.has(Ee)||(N.add(Ee),L.push({axis:"x",pos:W}))}for(const W of[de,re,z])for(const ge of[H,ie,J])if(Math.abs(ge-W)<.5){const Ee=`y:${Math.round(W)}`;N.has(Ee)||(N.add(Ee),L.push({axis:"y",pos:W}))}}return{dx:E,dy:O,guides:L}}function Vy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function a6({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[M,E]=g.useState(new Set),[O,L]=g.useState(null),[N,G]=g.useState(null),[V,K]=g.useState(null),[H,J]=g.useState([]),[ie,se]=g.useState(null),[Me,Ue]=g.useState(!1),ee=g.useRef(!1),[de,z]=g.useState(new Set),re=g.useRef(new Map),W=g.useRef(null),ge=g.useRef(null),Ee=g.useRef(t);Ee.current=t;const I=g.useRef(_);I.current=_;const ue=g.useRef(b);ue.current=b;const X=g.useRef(w);X.current=w;const le=g.useRef(x);g.useEffect(()=>{x!==le.current&&(le.current=x,E(new Set))},[x]);const be=g.useRef(S);g.useEffect(()=>{if(S!==void 0&&S!==be.current){be.current=S;const te=new Set(Ee.current.map(Ne=>Ne.id));te.size>0&&(z(te),E(new Set),ge.current=null,Ht(()=>{n([]),z(new Set)},180))}},[S,n]),g.useEffect(()=>{const te=Ne=>{const Ve=Ne.target;if(!(Ve.tagName==="INPUT"||Ve.tagName==="TEXTAREA"||Ve.isContentEditable)){if((Ne.key==="Backspace"||Ne.key==="Delete")&&M.size>0){Ne.preventDefault();const We=new Set(M);z(We),E(new Set),Ht(()=>{n(Ee.current.filter(Je=>!We.has(Je.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Ne.key)&&M.size>0){Ne.preventDefault();const We=Ne.shiftKey?20:1,Je=Ne.key==="ArrowLeft"?-We:Ne.key==="ArrowRight"?We:0,mt=Ne.key==="ArrowUp"?-We:Ne.key==="ArrowDown"?We:0;n(t.map(_t=>M.has(_t.id)?{..._t,x:Math.max(0,_t.x+Je),y:Math.max(0,_t.y+mt)}:_t));return}if(Ne.key==="Escape"){i?a(null):M.size>0&&E(new Set);return}}};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[M,i,t,n,a]);const Te=g.useCallback(te=>{if(te.button!==0||p||te.target.closest(`.${Be.placement}`))return;te.preventDefault(),te.stopPropagation();const Ve=window.scrollY,Xe=te.clientX,We=te.clientY;if(i){ge.current="place",d==null||d(!0);let Je=!1,mt=Xe,_t=We;const Dt=dt=>{mt=dt.clientX,_t=dt.clientY;const P=Math.abs(mt-Xe),q=Math.abs(_t-We);if((P>5||q>5)&&(Je=!0),Je){const fe=Math.min(Xe,mt),ke=Math.min(We,_t),nt=Math.abs(mt-Xe),Qe=Math.abs(_t-We);L({x:fe,y:ke,w:nt,h:Qe}),K({x:dt.clientX+12,y:dt.clientY+12,text:`${Math.round(nt)} × ${Math.round(Qe)}`})}},Kt=dt=>{window.removeEventListener("mousemove",Dt),window.removeEventListener("mouseup",Kt),L(null),K(null),ge.current=null,d==null||d(!1);const P=wt[i];let q,fe,ke,nt;Je?(q=Math.min(Xe,mt),fe=Math.min(We,_t)+Ve,ke=Math.max(ll,Math.abs(mt-Xe)),nt=Math.max(ll,Math.abs(_t-We))):(ke=P.width,nt=P.height,q=Xe-ke/2,fe=We+Ve-nt/2),q=Math.max(0,q),fe=Math.max(0,fe);const Qe={id:Vy(),type:i,x:q,y:fe,width:ke,height:nt,scrollY:Ve,timestamp:Date.now()},je=[...t,Qe];n(je),E(new Set([Qe.id])),a(null)};window.addEventListener("mousemove",Dt),window.addEventListener("mouseup",Kt)}else{te.shiftKey||E(new Set),ge.current="select";let Je=!1;const mt=Dt=>{const Kt=Math.abs(Dt.clientX-Xe),dt=Math.abs(Dt.clientY-We);if((Kt>4||dt>4)&&(Je=!0),Je){const P=Math.min(Xe,Dt.clientX),q=Math.min(We,Dt.clientY);G({x:P,y:q,w:Math.abs(Dt.clientX-Xe),h:Math.abs(Dt.clientY-We)})}},_t=Dt=>{if(window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",_t),ge.current=null,Je){const Kt=Math.min(Xe,Dt.clientX),dt=Math.min(We,Dt.clientY)+Ve,P=Math.abs(Dt.clientX-Xe),q=Math.abs(Dt.clientY-We),fe=new Set(te.shiftKey?M:new Set);for(const ke of t)ke.y-Ve,ke.x+ke.width>Kt&&ke.x<Kt+P&&ke.y+ke.height>dt&&ke.y<dt+q&&fe.add(ke.id);E(fe)}G(null)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",_t)}},[i,p,t,n,M]),Ye=g.useCallback((te,Ne)=>{var Qe;if(te.button!==0)return;const Ve=te.target;if(Ve.closest(`.${Be.handle}`)||Ve.closest(`.${Be.deleteButton}`))return;te.preventDefault(),te.stopPropagation();let Xe;te.shiftKey?(Xe=new Set(M),Xe.has(Ne)?Xe.delete(Ne):Xe.add(Ne)):M.has(Ne)?Xe=new Set(M):Xe=new Set([Ne]),E(Xe),(Xe.size!==M.size||[...Xe].some(je=>!M.has(je)))&&((Qe=I.current)==null||Qe.call(I,Xe,te.shiftKey));const Je=te.clientX,mt=te.clientY,_t=new Map;for(const je of t)Xe.has(je.id)&&_t.set(je.id,{x:je.x,y:je.y});ge.current="move",d==null||d(!0);let Dt=!1,Kt=!1,dt=t,P=0,q=0;const fe=new Map;for(const je of t)_t.has(je.id)&&fe.set(je.id,{w:je.width,h:je.height});const ke=je=>{var Jt;const xt=je.clientX-Je,Fe=je.clientY-mt;if((Math.abs(xt)>2||Math.abs(Fe)>2)&&(Dt=!0),!Dt)return;if(je.altKey&&!Kt){Kt=!0;const ft=[];for(const yt of t)_t.has(yt.id)&&ft.push({...yt,id:Vy(),timestamp:Date.now()});dt=[...t,...ft]}let Lt=1/0,gt=1/0,tt=-1/0,It=-1/0;for(const[ft,yt]of _t){const Sn=fe.get(ft);Sn&&(Lt=Math.min(Lt,yt.x+xt),gt=Math.min(gt,yt.y+Fe),tt=Math.max(tt,yt.x+xt+Sn.w),It=Math.max(It,yt.y+Fe+Sn.h))}const Ot={x:Lt,y:gt,width:tt-Lt,height:It-gt},{dx:Zt,dy:st,guides:at}=Hy(Ot,dt,new Set(_t.keys()),void 0,y);J(at);const Tt=xt+Zt,St=Fe+st;P=Tt,q=St,n(dt.map(ft=>{const yt=_t.get(ft.id);return yt?{...ft,x:Math.max(0,yt.x+Tt),y:Math.max(0,yt.y+St)}:ft})),(Jt=ue.current)==null||Jt.call(ue,Tt,St)},nt=()=>{var je;window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",nt),ge.current=null,d==null||d(!1),J([]),(je=X.current)==null||je.call(X,P,q,Dt)};window.addEventListener("mousemove",ke),window.addEventListener("mouseup",nt)},[M,t,n,d]),Ie=g.useCallback((te,Ne,Ve)=>{te.preventDefault(),te.stopPropagation();const Xe=t.find(fe=>fe.id===Ne);if(!Xe)return;E(new Set([Ne])),ge.current="resize",d==null||d(!0);const We=te.clientX,Je=te.clientY,mt=Xe.width,_t=Xe.height,Dt=Xe.x,Kt=Xe.y,dt={left:Ve.includes("w"),right:Ve.includes("e"),top:Ve.includes("n"),bottom:Ve.includes("s")},P=fe=>{const ke=fe.clientX-We,nt=fe.clientY-Je;let Qe=mt,je=_t,xt=Dt,Fe=Kt;Ve.includes("e")&&(Qe=Math.max(ll,mt+ke)),Ve.includes("w")&&(Qe=Math.max(ll,mt-ke),xt=Dt+mt-Qe),Ve.includes("s")&&(je=Math.max(ll,_t+nt)),Ve.includes("n")&&(je=Math.max(ll,_t-nt),Fe=Kt+_t-je);const Lt={x:xt,y:Fe,width:Qe,height:je},{dx:gt,dy:tt,guides:It}=Hy(Lt,Ee.current,new Set([Ne]),dt,y);J(It),gt!==0&&(dt.right?Qe+=gt:dt.left&&(xt+=gt,Qe-=gt)),tt!==0&&(dt.bottom?je+=tt:dt.top&&(Fe+=tt,je-=tt)),n(Ee.current.map(Ot=>Ot.id===Ne?{...Ot,x:xt,y:Fe,width:Qe,height:je}:Ot)),K({x:fe.clientX+12,y:fe.clientY+12,text:`${Math.round(Qe)} × ${Math.round(je)}`})},q=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",q),K(null),ge.current=null,d==null||d(!1),J([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",q)},[t,n,d]),it=g.useCallback(te=>{ge.current=null,z(Ne=>{const Ve=new Set(Ne);return Ve.add(te),Ve}),E(Ne=>{const Ve=new Set(Ne);return Ve.delete(te),Ve}),Ht(()=>{n(Ee.current.filter(Ne=>Ne.id!==te)),z(Ne=>{const Ve=new Set(Ne);return Ve.delete(te),Ve})},180)},[n]),Bt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},tn=g.useCallback(te=>{const Ne=t.find(Ve=>Ve.id===te);Ne&&(ee.current=!!Ne.text,se(te),Ue(!1))},[t]),Ge=g.useCallback(()=>{ie&&(Ue(!0),Ht(()=>{se(null),Ue(!1)},150))},[ie]);g.useEffect(()=>{u&&ie&&Ge()},[u]);const rt=g.useCallback(te=>{ie&&(n(t.map(Ne=>Ne.id===ie?{...Ne,text:te.trim()||void 0}:Ne)),Ge())},[ie,t,n,Ge]),Ut=typeof window<"u"?window.scrollY:0,Ze=["nw","ne","se","sw"],vt=k?"#f97316":"#3c82f7",xe=[{dir:"n",cls:Be.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:vt})})},{dir:"e",cls:Be.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:vt})})},{dir:"s",cls:Be.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:vt})})},{dir:"w",cls:Be.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:vt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${Be.overlay} ${c?"":Be.light} ${i?Be.placing:""} ${p?Be.passthrough:""} ${u?Be.overlayExiting:""} ${k?Be.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Te,children:t.map(te=>{var We;const Ne=M.has(te.id),Ve=((We=qi[te.type])==null?void 0:We.label)||te.type,Xe=te.y-Ut;return l.jsxs("div",{"data-design-placement":te.id,className:`${Be.placement} ${Ne?Be.selected:""} ${de.has(te.id)?Be.exiting:""}`,style:{left:te.x,top:Xe,width:te.width,height:te.height,position:"fixed"},onMouseDown:Je=>Ye(Je,te.id),onDoubleClick:()=>tn(te.id),children:[l.jsx("span",{className:Be.placementLabel,children:Ve}),l.jsx("span",{className:`${Be.placementAnnotation} ${te.text?Be.annotationVisible:""}`,children:(te.text&&re.current.set(te.id,te.text),te.text||re.current.get(te.id)||"")}),l.jsx("div",{className:Be.placementContent,children:l.jsx(s6,{type:te.type,width:te.width,height:te.height,text:te.text})}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Je=>Je.stopPropagation(),onClick:()=>it(te.id),children:"✕"}),Ze.map(Je=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Je.charAt(0).toUpperCase()}${Je.slice(1)}`]}`,onMouseDown:mt=>Ie(mt,te.id,Je)},Je)),xe.map(({dir:Je,cls:mt,arrow:_t})=>l.jsx("div",{className:`${Be.edgeHandle} ${mt}`,onMouseDown:Dt=>Ie(Dt,te.id,Je),children:_t},Je))]},te.id)})}),ie&&(()=>{var Kt,dt;const te=t.find(P=>P.id===ie);if(!te)return null;const Ne=te.y-Ut,Ve=te.x+te.width/2,Xe=Ne-8,We=Ne+te.height+8,Je=Xe>200,mt=We<window.innerHeight-100,_t=Math.max(160,Math.min(window.innerWidth-160,Ve));let Dt;return Je?Dt={left:_t,bottom:window.innerHeight-Xe}:mt?Dt={left:_t,top:We}:Dt={left:_t,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((Kt=qi[te.type])==null?void 0:Kt.label)||te.type,placeholder:Bt[te.type]||"Label or content text",initialValue:(dt=te.text)!=null?dt:"",submitLabel:ee.current?"Save":"Set",onSubmit:rt,onCancel:Ge,onDelete:ee.current?()=>{rt("")}:void 0,isExiting:Me,lightMode:!c,style:Dt})})(),O&&l.jsx("div",{className:Be.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Be.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),V&&l.jsx("div",{className:Be.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),H.map((te,Ne)=>l.jsx("div",{className:Be.guideLine,style:te.axis==="x"?{position:"fixed",left:te.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:te.pos-Ut,right:0,height:1},"data-feedback-toolbar":!0},`${te.axis}-${te.pos}-${Ne}`))]})}function r6(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Be.fadeTop:""} ${i?Be.fadeBottom:""}`}var $="currentColor",Re="0.5";function l6({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:Re})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:Re})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:Re,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Re})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Re})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:Re,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:Re,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:Re})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Re})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:Re})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Re})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:Re})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:Re})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:Re})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:Re})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:Re,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:Re,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:Re})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Re,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:Re})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Re,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:Re})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Re})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:Re,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:Re})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:Re,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:Re,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:Re,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:Re,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:Re,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function c6({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Be.placeScroll} ${c||""}`,children:Zx.map(d=>l.jsxs("div",{className:Be.paletteSection,children:[l.jsx("div",{className:Be.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Be.paletteItem} ${t===h.type?Be.active:""} ${u?Be.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Be.paletteItemIcon,children:l.jsx(l6,{type:h.type})}),l.jsx("span",{className:Be.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function u6({value:t,suffix:n}){const[i,a]=g.useState(null),[c,u]=g.useState(n),[d,h]=g.useState("up"),p=g.useRef(t),y=g.useRef(n),_=g.useRef(),x=i!==null&&c!==n;return g.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(_.current),_.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Be.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Be.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function d6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,M]=g.useState(!1),[E,O]=g.useState("exit"),[L,N]=g.useState(!1),[G,V]=g.useState(!0),K=g.useRef(0),H=g.useRef(""),J=g.useRef(0),ie=g.useRef(),se=g.useRef(null),[Me,Ue]=g.useState("");g.useEffect(()=>(u?(M(!0),clearTimeout(ie.current),cancelAnimationFrame(J.current),J.current=fl(()=>{J.current=fl(()=>{O("enter")})})):(cancelAnimationFrame(J.current),O("exit"),clearTimeout(ie.current),ie.current=Ht(()=>{M(!1),d==null||d()},200)),()=>cancelAnimationFrame(J.current)),[u]);const ee=h>0||a>0,de=h+a;return de>0&&(K.current=de,H.current=_?de===1?"Component":"Components":de===1?"Change":"Changes"),g.useEffect(()=>{if(ee)L?V(!1):(V(!0),N(!0),fl(()=>{fl(()=>{V(!1)})}));else{V(!0);const z=Ht(()=>N(!1),300);return()=>clearTimeout(z)}},[ee]),g.useEffect(()=>{if(!k)return;const z=se.current;if(!z)return;const re=()=>Ue(r6(z));re(),z.addEventListener("scroll",re,{passive:!0});const W=new ResizeObserver(re);return W.observe(z),()=>{z.removeEventListener("scroll",re),W.disconnect()}},[k]),k?l.jsxs("div",{className:`${Be.palette} ${Be[E]} ${i?"":Be.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(ie.current),M(!1),O("exit"),d==null||d()))},children:[l.jsxs("div",{className:Be.paletteHeader,children:[l.jsx("div",{className:Be.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Be.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Be.canvasToggle} ${_?Be.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Be.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Be.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Be.wireframePurposeWrap} ${_?"":Be.collapsed}`,children:l.jsx("div",{className:Be.wireframePurposeInner,children:l.jsx("textarea",{className:Be.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),l.jsx(c6,{activeType:t,onSelect:n,onDragStart:y,scrollRef:se,fadeClass:Me,blankCanvas:_}),L&&l.jsx("div",{className:`${Be.paletteFooterWrap} ${G?Be.footerHidden:""}`,children:l.jsx("div",{className:Be.paletteFooterInner,children:l.jsx("div",{className:Be.paletteFooterInnerContent,children:l.jsxs("div",{className:Be.paletteFooter,children:[l.jsx("span",{className:Be.paletteFooterCount,children:l.jsx(u6,{value:K.current,suffix:H.current})}),l.jsx("button",{className:Be.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function gl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function qo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=gl(i)}return null}function f6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=gl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,_;const n=f6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=qo(t,"svg");if(x){const b=gl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=gl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=gl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Jx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),h6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),m6=new Set(["input","textarea","select"]),p6=new Set(["img","video","canvas","svg"]),_6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;h6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:m6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:p6.has(a)?c=["width","height","objectFit","borderRadius"]:_6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Jx.has(h)&&(i[u]=h)}return i}var g6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of g6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Jx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function y6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=gl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var x6=new Set(["nav","header","main","section","article","footer","aside"]),Dm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},b6=new Set(["script","style","noscript","link","meta"]),v6=40;function eb(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Dm[a])return Dm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function tb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function nb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function w6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(b6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<v6)return;const y=x6.has(d),_=c.getAttribute("role")&&Dm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!_&&!x)return;const b=window.scrollY,w=eb(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:tb(c),textSnippet:nb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function S6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=eb(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:tb(t),textSnippet:nb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Yy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Wy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Fy=16,ed=5;function Xy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const K of n)i.has(K.id)||b.push(K.currentRect);a&&b.push(...a);for(const K of b){const H=K.x,J=K.x+K.width,ie=K.x+K.width/2,se=K.y,Me=K.y+K.height,Ue=K.y+K.height/2;for(const ee of[d,h,p])for(const de of[H,J,ie]){const z=de-ee;Math.abs(z)<ed&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const ee of[y,_,x])for(const de of[se,Me,Ue]){const z=de-ee;Math.abs(z)<ed&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,k=[],M=new Set,E=d+w,O=h+w,L=p+w,N=y+S,G=_+S,V=x+S;for(const K of b){const H=K.x,J=K.x+K.width,ie=K.x+K.width/2,se=K.y,Me=K.y+K.height,Ue=K.y+K.height/2;for(const ee of[H,ie,J])for(const de of[E,L,O])if(Math.abs(de-ee)<.5){const z=`x:${Math.round(ee)}`;M.has(z)||(M.add(z),k.push({axis:"x",pos:ee}))}for(const ee of[se,Ue,Me])for(const de of[N,V,G])if(Math.abs(de-ee)<.5){const z=`y:${Math.round(ee)}`;M.has(z)||(M.add(z),k.push({axis:"y",pos:ee}))}}return{dx:w,dy:S,guides:k}}var C6=new Set(["script","style","noscript","link","meta","br","hr"]);function Gy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(C6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Fy&&i.height>=Fy)return n;n=n.parentElement}return null}function k6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=g.useRef(t);w.current=t;const[S,k]=g.useState(new Set),[M,E]=g.useState(!1),O=g.useRef(x);g.useEffect(()=>{x!==void 0&&x!==O.current&&(O.current=x,b.length>0&&E(!0))},[x,b.length]);const L=g.useRef(p);g.useEffect(()=>{p!==L.current&&(L.current=p,k(new Set))},[p]);const[N,G]=g.useState(null),[V,K]=g.useState(!1),H=g.useRef(!1),J=g.useCallback(P=>{const q=b.find(fe=>fe.id===P);q&&(H.current=!!q.note,G(P),K(!1))},[b]),ie=g.useCallback(()=>{N&&(K(!0),Ht(()=>{G(null),K(!1)},150))},[N]),se=g.useCallback(P=>{N&&(n({...t,sections:b.map(q=>q.id===N?{...q,note:P.trim()||void 0}:q)}),ie())},[N,b,t,n,ie]);g.useEffect(()=>{a&&N&&ie()},[a]);const[Me,Ue]=g.useState(new Set),ee=g.useRef(new Map),[de,z]=g.useState(null),[re,W]=g.useState(null),[ge,Ee]=g.useState([]),[I,ue]=g.useState(0),X=g.useRef(null),le=g.useRef(new Set),be=g.useRef(new Map),[Te,Ye]=g.useState(new Map),[Ie,it]=g.useState(new Map),Bt=g.useRef(new Set),tn=g.useRef(new Map),Ge=g.useRef(h);Ge.current=h;const rt=g.useRef(y);rt.current=y;const Ut=g.useRef(_);Ut.current=_,g.useEffect(()=>{u&&k(new Set)},[u]);const[Ze,vt]=g.useState(()=>!t.sections.some(P=>{const q=P.originalRect,fe=P.currentRect;return Math.abs(q.x-fe.x)>1||Math.abs(q.y-fe.y)>1||Math.abs(q.width-fe.width)>1||Math.abs(q.height-fe.height)>1}));g.useEffect(()=>{if(!Ze){const P=Ht(()=>vt(!0),380);return()=>clearTimeout(P)}},[]);const xe=g.useRef(new Set);g.useEffect(()=>{xe.current=new Set(b.map(P=>P.selector))},[b]),g.useEffect(()=>{const P=()=>ue(window.scrollY);return P(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[]),g.useEffect(()=>{const P=q=>{if(X.current){z(null);return}const fe=document.elementFromPoint(q.clientX,q.clientY);if(!fe){z(null);return}if(fe.closest("[data-feedback-toolbar]")){z(null);return}if(fe.closest("[data-design-placement]")){z(null);return}if(fe.closest("[data-annotation-popup]")){z(null);return}const ke=Gy(fe);if(!ke){z(null);return}for(const Qe of xe.current)try{const je=document.querySelector(Qe);if(je&&(je===ke||ke.contains(je))){z(null);return}}catch{}const nt=ke.getBoundingClientRect();z({x:nt.x,y:nt.y,w:nt.width,h:nt.height})};return document.addEventListener("mousemove",P,{passive:!0}),()=>document.removeEventListener("mousemove",P)},[b]),g.useEffect(()=>{const P=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=P}},[]),g.useEffect(()=>{const P=q=>{var je,xt,Fe,Lt;if(X.current||q.button!==0)return;const fe=q.target;if(!fe||fe.closest("[data-feedback-toolbar]")||fe.closest("[data-design-placement]")||fe.closest("[data-annotation-popup]"))return;const ke=Gy(fe);let nt=!1;if(ke)for(const gt of xe.current)try{const tt=document.querySelector(gt);if(tt&&(tt===ke||ke.contains(tt))){nt=!0;break}}catch{}const Qe=!!(q.shiftKey||q.metaKey||q.ctrlKey);if(ke&&!nt){q.preventDefault(),q.stopPropagation();const gt=S6(ke),tt=[...b,gt],It=[...t.originalOrder,gt.id];n({...t,sections:tt,originalOrder:It});const Ot=new Set([gt.id]);k(Ot),(je=Ge.current)==null||je.call(Ge,Ot,Qe),z(null);const Zt=q.clientX,st=q.clientY,at={x:gt.currentRect.x,y:gt.currentRect.y};gt.originalRect;let Tt=!1,St=0,Jt=0;X.current="move";const ft=Sn=>{var rn;const en=Sn.clientX-Zt,Vt=Sn.clientY-st;if(!Tt&&(Math.abs(en)>2||Math.abs(Vt)>2)&&(Tt=!0),!Tt)return;const _s={x:at.x+en,y:at.y+Vt,width:gt.currentRect.width,height:gt.currentRect.height},un=Xy(_s,tt,new Set([gt.id]),d);Ee(un.guides);const Mn=en+un.dx,En=Vt+un.dy;St=Mn,Jt=En;const Tn=document.querySelector(`[data-rearrange-section="${gt.id}"]`);Tn&&(Tn.style.transform=`translate(${Mn}px, ${En}px)`),Ye(new Map([[gt.id,{x:at.x+Mn,y:at.y+En,width:gt.currentRect.width,height:gt.currentRect.height}]])),(rn=rt.current)==null||rn.call(rt,Mn,En)},yt=()=>{var en;window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",yt),X.current=null,Ee([]),Ye(new Map);const Sn=document.querySelector(`[data-rearrange-section="${gt.id}"]`);Sn&&(Sn.style.transform=""),Tt&&n({...t,sections:tt.map(Vt=>Vt.id===gt.id?{...Vt,currentRect:{...Vt.currentRect,x:Math.max(0,at.x+St),y:Math.max(0,at.y+Jt)}}:Vt),originalOrder:It}),(en=Ut.current)==null||en.call(Ut,St,Jt,Tt)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",yt)}else if(nt&&ke){q.preventDefault();for(const gt of b)try{const tt=document.querySelector(gt.selector);if(tt&&tt===ke){const It=new Set([gt.id]);k(It),(xt=Ge.current)==null||xt.call(Ge,It,Qe);return}}catch{}Qe||(k(new Set),(Fe=Ge.current)==null||Fe.call(Ge,new Set,!1))}else Qe||(k(new Set),(Lt=Ge.current)==null||Lt.call(Ge,new Set,!1))};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[b,t,n]),g.useEffect(()=>{const P=q=>{const fe=q.target;if(!(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.isContentEditable)){if((q.key==="Backspace"||q.key==="Delete")&&S.size>0){q.preventDefault();const ke=new Set(S);Ue(nt=>{const Qe=new Set(nt);for(const je of ke)Qe.add(je);return Qe}),k(new Set),Ht(()=>{const nt=w.current;n({...nt,sections:nt.sections.filter(Qe=>!ke.has(Qe.id)),originalOrder:nt.originalOrder.filter(Qe=>!ke.has(Qe))}),Ue(Qe=>{const je=new Set(Qe);for(const xt of ke)je.delete(xt);return je})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(q.key)&&S.size>0){q.preventDefault();const ke=q.shiftKey?20:1,nt=q.key==="ArrowLeft"?-ke:q.key==="ArrowRight"?ke:0,Qe=q.key==="ArrowUp"?-ke:q.key==="ArrowDown"?ke:0;n({...t,sections:b.map(je=>S.has(je.id)?{...je,currentRect:{...je.currentRect,x:Math.max(0,je.currentRect.x+nt),y:Math.max(0,je.currentRect.y+Qe)}}:je)});return}q.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[S,b,t,n]);const te=g.useCallback((P,q)=>{var Zt;if(P.button!==0)return;const fe=P.target;if(fe.closest(`.${Be.handle}`)||fe.closest(`.${Be.deleteButton}`))return;P.preventDefault(),P.stopPropagation();let ke;P.shiftKey||P.metaKey||P.ctrlKey?(ke=new Set(S),ke.has(q)?ke.delete(q):ke.add(q)):S.has(q)?ke=new Set(S):ke=new Set([q]),k(ke),(ke.size!==S.size||[...ke].some(st=>!S.has(st)))&&((Zt=Ge.current)==null||Zt.call(Ge,ke,!!(P.shiftKey||P.metaKey||P.ctrlKey)));const Qe=P.clientX,je=P.clientY,xt=new Map;for(const st of b)ke.has(st.id)&&xt.set(st.id,{x:st.currentRect.x,y:st.currentRect.y});X.current="move";let Fe=!1,Lt=0,gt=0;const tt=new Map;for(const st of b)if(ke.has(st.id)){const at=document.querySelector(`[data-rearrange-section="${st.id}"]`);tt.set(st.id,{outlineEl:at,curW:st.currentRect.width,curH:st.currentRect.height})}const It=st=>{var un;const at=st.clientX-Qe,Tt=st.clientY-je;if(at===0&&Tt===0)return;Fe=!0;let St=1/0,Jt=1/0,ft=-1/0,yt=-1/0;for(const[Mn,{curW:En,curH:Tn}]of tt){const rn=xt.get(Mn);if(!rn)continue;const Wn=rn.x+at,ot=rn.y+Tt;St=Math.min(St,Wn),Jt=Math.min(Jt,ot),ft=Math.max(ft,Wn+En),yt=Math.max(yt,ot+Tn)}const Sn=Xy({x:St,y:Jt,width:ft-St,height:yt-Jt},b,ke,d),en=at+Sn.dx,Vt=Tt+Sn.dy;Lt=en,gt=Vt,Ee(Sn.guides);for(const[,{outlineEl:Mn}]of tt)Mn&&(Mn.style.transform=`translate(${en}px, ${Vt}px)`);const _s=new Map;for(const[Mn,{curW:En,curH:Tn}]of tt){const rn=xt.get(Mn);if(rn){const Wn={x:Math.max(0,rn.x+en),y:Math.max(0,rn.y+Vt),width:En,height:Tn};_s.set(Mn,Wn)}}Ye(_s),(un=rt.current)==null||un.call(rt,en,Vt)},Ot=st=>{var at,Tt;window.removeEventListener("mousemove",It),window.removeEventListener("mouseup",Ot),X.current=null,Ee([]),Ye(new Map);for(const[,{outlineEl:St}]of tt)St&&(St.style.transform="");if(Fe){const St=st.clientX-Qe,Jt=st.clientY-je;if(Math.abs(St)<5&&Math.abs(Jt)<5)n({...t,sections:b.map(ft=>{const yt=xt.get(ft.id);return yt?{...ft,currentRect:{...ft.currentRect,x:yt.x,y:yt.y}}:ft})});else{n({...t,sections:b.map(ft=>{const yt=xt.get(ft.id);return yt?{...ft,currentRect:{...ft.currentRect,x:Math.max(0,yt.x+Lt),y:Math.max(0,yt.y+gt)}}:ft})}),(at=Ut.current)==null||at.call(Ut,Lt,gt,!0);return}}(Tt=Ut.current)==null||Tt.call(Ut,0,0,!1)};window.addEventListener("mousemove",It),window.addEventListener("mouseup",Ot)},[S,b,t,n]),Ne=g.useCallback((P,q,fe)=>{P.preventDefault(),P.stopPropagation();const ke=b.find(It=>It.id===q);if(!ke)return;k(new Set([q])),X.current="resize";const nt=P.clientX,Qe=P.clientY,je={...ke.currentRect};ke.originalRect;const xt=je.width/je.height;let Fe={...je};const Lt=document.querySelector(`[data-rearrange-section="${q}"]`),gt=It=>{const Ot=It.clientX-nt,Zt=It.clientY-Qe;let st=je.x,at=je.y,Tt=je.width,St=je.height;if(fe.includes("e")&&(Tt=Math.max(Ju,je.width+Ot)),fe.includes("w")&&(Tt=Math.max(Ju,je.width-Ot),st=je.x+je.width-Tt),fe.includes("s")&&(St=Math.max(Ju,je.height+Zt)),fe.includes("n")&&(St=Math.max(Ju,je.height-Zt),at=je.y+je.height-St),It.shiftKey)if(fe.length===2){const ft=Math.abs(Tt-je.width),yt=Math.abs(St-je.height);ft>yt?St=Tt/xt:Tt=St*xt,fe.includes("w")&&(st=je.x+je.width-Tt),fe.includes("n")&&(at=je.y+je.height-St)}else fe==="e"||fe==="w"?St=Tt/xt:Tt=St*xt,fe==="w"&&(st=je.x+je.width-Tt),fe==="n"&&(at=je.y+je.height-St);Fe={x:st,y:at,width:Tt,height:St},Lt&&(Lt.style.left=`${st}px`,Lt.style.top=`${at-I}px`,Lt.style.width=`${Tt}px`,Lt.style.height=`${St}px`),W({x:It.clientX+12,y:It.clientY+12,text:`${Math.round(Tt)} × ${Math.round(St)}`}),Ye(new Map([[q,Fe]]))},tt=()=>{window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",tt),W(null),X.current=null,Ye(new Map),n({...t,sections:b.map(It=>It.id===q?{...It,currentRect:Fe}:It)})};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",tt)},[b,t,n,I]),Ve=g.useCallback(P=>{Ue(q=>{const fe=new Set(q);return fe.add(P),fe}),k(q=>{const fe=new Set(q);return fe.delete(P),fe}),Ht(()=>{const q=w.current;n({...q,sections:q.sections.filter(fe=>fe.id!==P),originalOrder:q.originalOrder.filter(fe=>fe!==P)}),Ue(fe=>{const ke=new Set(fe);return ke.delete(P),ke})},180)},[n]),Xe=P=>{const q=P.originalRect,fe=P.currentRect;return Math.abs(q.x-fe.x)>1||Math.abs(q.y-fe.y)>1||Math.abs(q.width-fe.width)>1||Math.abs(q.height-fe.height)>1},We=P=>{const q=P.originalRect,fe=P.currentRect;return Math.abs(q.x-fe.x)>1||Math.abs(q.y-fe.y)>1},Je=P=>{const q=P.originalRect,fe=P.currentRect;return Math.abs(q.width-fe.width)>1||Math.abs(q.height-fe.height)>1};for(const P of b)be.current.has(P.id)||(We(P)?be.current.set(P.id,"move"):Je(P)&&be.current.set(P.id,"resize"));for(const P of be.current.keys())b.some(q=>q.id===P)||be.current.delete(P);const mt=b.filter(P=>{try{if(Me.has(P.id)||S.has(P.id))return!0;const q=document.querySelector(P.selector);if(!q)return!1;const fe=q.getBoundingClientRect(),ke=P.originalRect;return Math.abs(fe.width-ke.width)+Math.abs(fe.height-ke.height)<200}catch{return!1}}),_t=mt.filter(P=>Xe(P)),Dt=mt.filter(P=>!Xe(P)),Kt=new Set(_t.map(P=>P.id));for(const P of le.current)Kt.has(P)||le.current.delete(P);const dt=[...Kt].sort().join(",");for(const P of _t)tn.current.set(P.id,{currentRect:P.currentRect,originalRect:P.originalRect,isFixed:P.isFixed});return g.useEffect(()=>{const P=Bt.current;Bt.current=Kt;const q=new Map;for(const fe of P)if(!Kt.has(fe)){if(!b.some(nt=>nt.id===fe))continue;const ke=tn.current.get(fe);ke&&(q.set(fe,{orig:ke.originalRect,target:ke.currentRect,isFixed:ke.isFixed}),tn.current.delete(fe))}if(q.size>0){it(ke=>{const nt=new Map(ke);for(const[Qe,je]of q)nt.set(Qe,je);return nt});const fe=Ht(()=>{it(ke=>{const nt=new Map(ke);for(const Qe of q.keys())nt.delete(Qe);return nt})},250);return()=>clearTimeout(fe)}},[dt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Be.rearrangeOverlay} ${i?"":Be.light} ${a?Be.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[de&&l.jsx("div",{className:Be.hoverHighlight,style:{left:de.x,top:de.y,width:de.w,height:de.h}}),Dt.map(P=>{const q=P.currentRect,fe=P.isFixed?q.y:q.y-I,ke=Yy,nt=S.has(P.id);return l.jsxs("div",{"data-rearrange-section":P.id,className:`${Be.sectionOutline} ${nt?Be.selected:""} ${M||a||Me.has(P.id)?Be.exiting:""}`,style:{left:q.x,top:fe,width:q.width,height:q.height,borderColor:ke.border,backgroundColor:ke.bg,...Ze?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Qe=>te(Qe,P.id),onDoubleClick:()=>J(P.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:ke.pill},children:P.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${P.note?Be.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(q.width)," × ",Math.round(q.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Qe=>Qe.stopPropagation(),onClick:()=>Ve(P.id),children:"✕"}),Wy.map(Qe=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Qe.charAt(0).toUpperCase()}${Qe.slice(1)}`]}`,onMouseDown:je=>Ne(je,P.id,Qe)},Qe))]},P.id)}),_t.map(P=>{const q=P.currentRect,fe=P.isFixed?q.y:q.y-I,ke=S.has(P.id),nt=We(P),Qe=Je(P);if(u&&!ke)return null;const xt=!le.current.has(P.id);return xt&&le.current.add(P.id),l.jsxs("div",{"data-rearrange-section":P.id,className:`${Be.ghostOutline} ${ke?Be.selected:""} ${M||a||Me.has(P.id)?Be.exiting:""}`,style:{left:q.x,top:fe,width:q.width,height:q.height,...Ze?{}:{opacity:0,animation:"none",transition:"none"},...xt?{}:{animation:"none"}},onMouseDown:Fe=>te(Fe,P.id),onDoubleClick:()=>J(P.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:Yy.pill},children:P.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${P.note?Be.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(q.width)," × ",Math.round(q.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Fe=>Fe.stopPropagation(),onClick:()=>Ve(P.id),children:"✕"}),Wy.map(Fe=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Fe.charAt(0).toUpperCase()}${Fe.slice(1)}`]}`,onMouseDown:Lt=>Ne(Lt,P.id,Fe)},Fe)),l.jsx("span",{className:Be.ghostBadge,children:(()=>{const Fe=be.current.get(P.id);if(nt&&Qe){const[Lt,gt]=Fe==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Lt," ",l.jsxs("span",{className:Be.ghostBadgeExtra,children:["& ",gt]})]})}return`Suggested ${Qe?"Resize":"Move"}`})()})]},P.id)})]}),!u&&(()=>{const P=[];for(const q of _t){const fe=Te.get(q.id);P.push({id:q.id,orig:q.originalRect,target:fe||q.currentRect,isFixed:q.isFixed,isSelected:S.has(q.id),isExiting:Me.has(q.id)})}for(const[q,fe]of Te)if(!P.some(ke=>ke.id===q)){const ke=b.find(nt=>nt.id===q);ke&&P.push({id:q,orig:ke.originalRect,target:fe,isFixed:ke.isFixed,isSelected:S.has(q)})}for(const[q,fe]of Ie)P.some(ke=>ke.id===q)||P.push({id:q,orig:fe.orig,target:fe.target,isFixed:fe.isFixed,isSelected:!1,isExiting:!0});return P.length===0?null:l.jsxs("svg",{className:`${Be.connectorSvg} ${M||a?Be.connectorExiting:""}`,children:[P.map(({id:q,orig:fe,target:ke,isFixed:nt,isSelected:Qe,isExiting:je})=>{const xt=fe.x+fe.width/2,Fe=(nt?fe.y:fe.y-I)+fe.height/2,Lt=ke.x+ke.width/2,gt=(nt?ke.y:ke.y-I)+ke.height/2,tt=Lt-xt,It=gt-Fe,Ot=Math.sqrt(tt*tt+It*It);if(Ot<2)return null;const Zt=Math.min(1,Ot/40),st=Math.min(Ot*.3,60),at=Ot>0?-It/Ot:0,Tt=Ot>0?tt/Ot:0,St=(xt+Lt)/2+at*st,Jt=(Fe+gt)/2+Tt*st,ft=Te.has(q),yt=ft||Qe?1:.4,Sn=ft||Qe?1:.5;return l.jsxs("g",{className:je?Be.connectorExiting:"",children:[l.jsx("path",{className:Be.connectorLine,d:`M ${xt} ${Fe} Q ${St} ${Jt} ${Lt} ${gt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:yt*Zt}),l.jsx("circle",{className:Be.connectorDot,cx:xt,cy:Fe,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Sn*Zt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Be.connectorDot,cx:Lt,cy:gt,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Sn*Zt,filter:"url(#connDotShadow)"})]},`conn-${q}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var gt;const P=b.find(tt=>tt.id===N);if(!P)return null;const q=P.currentRect,fe=P.isFixed?q.y:q.y-I,ke=q.x+q.width/2,nt=fe-8,Qe=fe+q.height+8,je=nt>200,xt=Qe<window.innerHeight-100,Fe=Math.max(160,Math.min(window.innerWidth-160,ke));let Lt;return je?Lt={left:Fe,bottom:window.innerHeight-nt}:xt?Lt={left:Fe,top:Qe}:Lt={left:Fe,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:P.label,placeholder:"Add a note about this section",initialValue:(gt=P.note)!=null?gt:"",submitLabel:H.current?"Save":"Set",onSubmit:se,onCancel:ie,onDelete:H.current?()=>{se("")}:void 0,isExiting:V,lightMode:!i,style:Lt})})(),re&&l.jsx("div",{className:Be.sizeIndicator,style:{left:re.x,top:re.y},"data-feedback-toolbar":!0,children:re.text}),ge.map((P,q)=>l.jsx("div",{className:Be.guideLine,style:P.axis==="x"?{position:"fixed",left:P.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:P.pos-I,width:"100vw",height:1}},`${P.axis}-${P.pos}-${q}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function j6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function M6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function E6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?M6(n):j6(),a=E6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,M=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const E=Math.round(a.top-S.bottom);(!c||E<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(k&&S.top>=a.bottom-5){const E=Math.round(S.top-a.bottom);(!u||E<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(M&&S.right<=a.left+5){const E=Math.round(a.left-S.right);(!d||E<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(M&&S.left>=a.right-5){const E=Math.round(S.left-a.right);(!h||E<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}}const y=window.innerWidth,_=window.innerHeight,x=A6(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=T6(a,t,y,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function T6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(y){const _=[];t.left<y.left-2&&_.push("left"),t.right>y.right+2&&_.push("right"),t.top<y.top-2&&_.push("top"),t.bottom>y.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function A6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function sb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function ob(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=sb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function N6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(sb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var qy=15;function Ky(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function D6(t){var d;if(t.length<2)return[];const n=Ky(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Ky(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(y=x,_=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",k=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function ib(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function R6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ab(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,_=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function rb(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function B6(t){const n=R6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Qy(t,n,i,a="standard"){var M,E,O,L;if(t.length===0)return"";const c=[...t].sort((N,G)=>Math.abs(N.y-G.y)<20?N.x-G.x:N.y-G.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,G)=>{var K;const V=((K=qi[N.type])==null?void 0:K.label)||N.type;u+=`${G+1}. **${V}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=ib(n);u+=rb(d),u+=`### Components
`,c.forEach((N,G)=>{var Me;const V=((Me=qi[N.type])==null?void 0:Me.label)||N.type,K={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${G+1}. **${V}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const H=Bm(K),ie=ob(H,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ue of ie)u+=`   - ${Ue}
`;const se=ab(K,d);se&&(u+=`   - CSS: ${se}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const G=h.find(V=>Math.abs(V.y-N.y)<30);G?G.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,G)=>N.y-G.y),h.forEach((N,G)=>{N.items.sort((K,H)=>K.x-H.x);const V=N.items.map(K=>{var H;return((H=qi[K.type])==null?void 0:H.label)||K.type});if(N.items.length===1){const H=N.items[0].width>n.width*.8;u+=`- Row ${G+1} (y≈${Math.round(N.y)}): ${V[0]}${H?" — full width":""}
`}else u+=`- Row ${G+1} (y≈${Math.round(N.y)}): ${V.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const G=c[N],V=c[N+1],K=((M=qi[G.type])==null?void 0:M.label)||G.type,H=((E=qi[V.type])==null?void 0:E.label)||V.type,J=Math.round(V.y-(G.y+G.height)),ie=Math.round(V.x-(G.x+G.width));Math.abs(G.y-V.y)<30?u+=`- ${K} → ${H}: \`${ie}px\` horizontal gap
`:u+=`- ${K} → ${H}: \`${J}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let G=N+1;G<c.length;G++){const V=c[N],K=c[G],H=((O=qi[V.type])==null?void 0:O.label)||V.type,J=((L=qi[K.type])==null?void 0:L.label)||K.type,ie=Math.round(K.y-(V.y+V.height)),se=Math.round(K.x-(V.x+V.width));u+=`- ${H} ↔ ${J}: h=\`${se}px\` v=\`${ie}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,G)=>{var K;const V=((K=qi[N.type])==null?void 0:K.label)||N.type;u+=`${G}. ${V} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),y=c.some(N=>N.type==="hero"),_=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),w=c.filter(N=>N.type==="form"),S=c.filter(N=>N.type==="table"),k=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),k.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const N=c.find(G=>G.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Zy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=ib({width:d,height:h});n!=="compact"&&(u+=rb(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const M=Bm(w,y("original")),E=Bm(S,y("current")),O=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${N6(M,{x:w.x,y:w.y},O)}
`;const L=b?{width:S.width,height:S.height}:void 0,N=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,G=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",K=ob(E,{includeLeftRight:n==="detailed"||n==="forensic"});if(K.length>0){u+=`  - Suggested position ${N}${G}: ${K[0]}
`;for(let J=1;J<K.length;J++)u+=`    ${K[J]}
`}else u+=`  - Suggested position ${N}${G}
`;const H=ab(S,p);H&&(u+=`  - CSS: ${H}
`)}const k=B6(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const M=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;M!==_.selector&&(u+=`  - Element: \`${M}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=D6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",lb=7;function Ed(t){return`${Lm}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-lb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function cb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function L6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-lb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));cb(t,a)}var hp="agentation-design-";function z6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function O6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function $6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function I6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function P6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function H6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function V6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Jy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var ub="agentation-session-";function _p(t){return`${ub}${t}`}function U6(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function Y6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var db=`${ub}toolbar-hidden`;function W6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(db)==="1"}catch{return!1}}function F6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(db,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function e1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function t1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function er(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var In={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},n1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),s1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],X6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function G6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=n1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...n1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...s1,...t.skipPatterns]:s1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:X6,filter:t==null?void 0:t.filter}}function q6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function K6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function Q6(t,n){const i=q6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function Z6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&Q6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,J6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function e3(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ul=!0,!0}return ul=!1,!1}var uc={map:J6};function t3(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function n3(t){const n=t3(t);return n?t[n]:null}function vr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function s3(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===In.HostComponent||n===In.HostText||n===In.HostHoistable||n===In.HostSingleton||n===In.Fragment||n===In.Mode||n===In.Profiler||n===In.DehydratedFragment||n===In.HostRoot||n===In.HostPortal||n===In.ScopeComponent||n===In.OffscreenComponent||n===In.LegacyHiddenComponent||n===In.CacheComponent||n===In.TracingMarkerComponent||n===In.Throw||n===In.ViewTransitionComponent||n===In.ActivityComponent)return null;if(n===In.ForwardRef){const u=a;if(u!=null&&u.render){const d=vr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:vr(i)}if(n===In.MemoComponent||n===In.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=vr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:vr(i)}if(n===In.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===In.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===In.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?vr(u._result):null}return n===In.SuspenseComponent||n===In.SuspenseListComponent?null:n===In.IncompleteClassComponent||n===In.IncompleteFunctionComponent||n===In.FunctionComponent||n===In.ClassComponent||n===In.IndeterminateComponent?vr(i):null}function o3(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function i3(t,n){const i=G6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!e3()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?K6(t):void 0,u=[];try{let p=n3(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const _=s3(p);_&&!o3(_)&&Z6(_,y,i,c)&&u.push(_),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function a3(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function r3(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function l3(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function c3(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function u3(){const t=Pv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function d3(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function f3(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function h3(t){const n=c3(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=u3();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=d3(d.stack);h&&(c={fileName:f3(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Ec(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function m3(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=h3(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=a3(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=r3(n);if(i||(i=l3(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=m3(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function p3(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function _3(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var g3=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,y3={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=g3}var Ke=y3,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function o1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var x3=`@keyframes styles-module__markerIn___x4G8D {
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
}`,b3={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=x3}var Fs=b3;function i1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:M}){const E=(h||p)&&!y,O=E&&x==="delete",L=t.isMultiSelect,N=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",G=c?Fs.exit:u?Fs.clearing:d?"":Fs.enter,V=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Fs.marker} ${L?Fs.multiSelect:""} ${G} ${O?Fs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:O?void 0:N,animationDelay:V},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:K=>{K.stopPropagation(),c||k(t)},onContextMenu:M?K=>{x==="delete"&&(K.preventDefault(),K.stopPropagation(),c||M(t))}:void 0,children:[E?O?l.jsx(Kx,{size:L?18:16}):l.jsx(RS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Fs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Fs.markerTooltip} ${Fs.enter}`,style:b,children:[l.jsxs("span",{className:Fs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Fs.markerNote,children:t.comment})]})]})}function v3({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Fs.marker} ${Fs.pending} ${i?Fs.multiSelect:""} ${a?Fs.exit:Fs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(vS,{size:12})})}function a1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Fs.marker} ${n?Fs.fixed:""} ${Fs.hovered} ${i?Fs.multiSelect:""} ${Fs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Kx,{size:i?12:10})})}var w3=`.styles-module__switchContainer___Ka-AB {
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
}`,S3={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=w3}var om=S3,im=({className:t="",...n})=>l.jsxs("div",{className:`${om.switchContainer} ${t}`,children:[l.jsx("input",{className:om.switchInput,type:"checkbox",...n}),l.jsx("div",{className:om.switchThumb})]}),C3=`.styles-module__checkboxContainer___joqZk {
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
}`,k3={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=C3}var sd=k3,j3=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),M3=`.styles-module__container___w8eAF {
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
}`,E3={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=M3}var r1=E3,l1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=g.useId();return l.jsxs("div",{className:`${r1.container} ${t}`,...u,children:[l.jsx(j3,{id:d,onChange:c,checked:a}),l.jsx("label",{className:r1.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},T3=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,A3={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=T3}var Ct=A3;function N3({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${y==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(NS,{size:20}):l.jsx(DS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const S=(fc.findIndex(k=>k.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===w.value?Ct.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===w.id?Ct.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(l1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(l1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${y==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(LS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=i3(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var c1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ia=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],D3=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};D3();function wr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Sr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:_3(t);if(i.found&&i.source)return p3(i.source,"path")}function R3({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var vo,Ls,$t,Rn,_n,me,$e;const[k,M]=g.useState(!1),[E,O]=g.useState([]),[L,N]=g.useState(!0),[G,V]=g.useState(()=>W6()),[K,H]=g.useState(!1),J=g.useRef(null);g.useEffect(()=>{const C=R=>{const B=J.current;B&&B.contains(R.target)&&R.stopPropagation()},T=["mousedown","click","pointerdown"];return T.forEach(R=>document.body.addEventListener(R,C)),()=>{T.forEach(R=>document.body.removeEventListener(R,C))}},[]);const[ie,se]=g.useState(!1),[Me,Ue]=g.useState(!1),[ee,de]=g.useState(null),[z,re]=g.useState({x:0,y:0}),[W,ge]=g.useState(null),[Ee,I]=g.useState(!1),[ue,X]=g.useState("idle"),[le,be]=g.useState(!1),[Te,Ye]=g.useState(!1),[Ie,it]=g.useState(null),[Bt,tn]=g.useState(null),[Ge,rt]=g.useState([]),[Ut,Ze]=g.useState(null),[vt,xe]=g.useState(null),[te,Ne]=g.useState(null),[Ve,Xe]=g.useState(null),[We,Je]=g.useState([]),[mt,_t]=g.useState(0),[Dt,Kt]=g.useState(!1),[dt,P]=g.useState(!1),[q,fe]=g.useState(!1),[ke,nt]=g.useState(!1),[Qe,je]=g.useState(!1),[xt,Fe]=g.useState("main"),[Lt,gt]=g.useState(!1),[tt,It]=g.useState(!1),[Ot,Zt]=g.useState(!1),[st,at]=g.useState([]),[Tt,St]=g.useState(null),Jt=g.useRef(!1),[ft,yt]=g.useState(!1),[Sn,en]=g.useState(!1),[Vt,_s]=g.useState(1),[un,Mn]=g.useState("new-page"),[En,Tn]=g.useState(""),[rn,Wn]=g.useState(!1),[ot,gs]=g.useState(null),Po=g.useRef(!1),ei=g.useRef({rearrange:null,placements:[]}),oo=g.useRef({rearrange:null,placements:[]}),[Ps,No]=g.useState(0),[js,io]=g.useState(0),[Ho,On]=g.useState(0),[pn,fi]=g.useState(0),Fn=g.useRef(new Set),Ms=g.useRef(new Set),fs=g.useRef(null),po=g.useRef(),Vo=tt&&k&&!Ot&&ft;g.useEffect(()=>{if(Vo){en(!1);const C=fl(()=>{en(!0)});return()=>cancelAnimationFrame(C)}else en(!1)},[Vo]);const Pn=g.useRef(new Map),as=g.useRef(new Map),Es=g.useRef(),[xn,Xn]=g.useState(!1),[dn,Zn]=g.useState([]),da=g.useRef(dn);da.current=dn;const[Uo,vi]=g.useState(null),_o=g.useRef(null);g.useRef(!1),g.useRef([]),g.useRef(0),g.useRef(null),g.useRef(null),g.useRef(1);const[ti,Ts]=g.useState(!1),rs=g.useRef(null),[Dn,Ns]=g.useState([]),Hn=g.useRef({cmd:!1,shift:!1}),ls=()=>{gt(!0)},wi=()=>{gt(!1)},Yo=()=>{ti||(rs.current=Ht(()=>Ts(!0),850))},Zi=()=>{rs.current&&(clearTimeout(rs.current),rs.current=null),Ts(!1),wi()};g.useEffect(()=>()=>{rs.current&&clearTimeout(rs.current)},[]);const[qt,Xs]=g.useState(()=>{var C;try{const T=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...rm,...T,annotationColorId:vc.find(R=>R.id===T.annotationColorId)?T.annotationColorId:rm.annotationColorId}}catch{return rm}}),[Hs,Wo]=g.useState(!0),[Si,Fo]=g.useState(!1),Gs=()=>{var C;(C=J.current)==null||C.classList.add(Ke.disableTransitions),Wo(T=>!T),fl(()=>{var T;(T=J.current)==null||T.classList.remove(Ke.disableTransitions)})},Ci=!1,ao="off",[kn,go]=g.useState(x!=null?x:null),Vn=g.useRef(!1),[Ds,ro]=g.useState(_?"connecting":"disconnected"),[cn,Vs]=g.useState(null),[Us,Rs]=g.useState(!1),[hs,Do]=g.useState(null),qs=g.useRef(!1),[So,yo]=g.useState(new Set),[Ro,An]=g.useState(new Set),[Un,Gn]=g.useState(!1),[Co,lo]=g.useState(!1),[Ks,ni]=g.useState(!1),xo=g.useRef(null),Ss=g.useRef(null),Bs=g.useRef(null),Xo=g.useRef(null),ko=g.useRef(!1),bo=g.useRef(0),Bo=g.useRef(null),Lo=g.useRef(null),ki=8,Ji=50,Ii=g.useRef(null),co=g.useRef(null),Qs=g.useRef(null),jt=typeof window<"u"?window.location.pathname:"/";g.useEffect(()=>{if(ke)je(!0);else{gt(!1),Fe("main");const C=Ht(()=>je(!1),0);return()=>clearTimeout(C)}},[ke]);const zo=k&&L&&!tt;g.useEffect(()=>{if(zo){Ue(!1),se(!0),yo(new Set);const C=Ht(()=>{yo(T=>{const R=new Set(T);return E.forEach(B=>R.add(B.id)),R})},350);return()=>clearTimeout(C)}else if(ie){Ue(!0);const C=Ht(()=>{se(!1),Ue(!1)},250);return()=>clearTimeout(C)}},[zo]),g.useEffect(()=>{P(!0),_t(window.scrollY);const C=em(jt);O(C.filter(Sr)),c1||(Fo(!0),c1=!0,Ht(()=>Fo(!1),750));try{const T=localStorage.getItem("feedback-toolbar-theme");T!==null&&Wo(T==="dark")}catch{}try{const T=localStorage.getItem("feedback-toolbar-position");if(T){const R=JSON.parse(T);typeof R.x=="number"&&typeof R.y=="number"&&Vs(R)}}catch{}},[jt]),g.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(qt))},[qt,dt]),g.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-theme",Hs?"dark":"light")},[Hs,dt]);const uo=g.useRef(!1);g.useEffect(()=>{const C=uo.current;uo.current=Us,C&&!Us&&cn&&dt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(cn))},[Us,cn,dt]),g.useEffect(()=>{if(!_||!dt||Vn.current)return;Vn.current=!0,ro("connecting"),(async()=>{try{const T=U6(jt),R=x||T;let B=!1;if(R)try{const F=await e1(_,R);go(F.id),ro("connected"),tm(jt,F.id),B=!0;const oe=em(jt),De=new Set(F.annotations.map(Oe=>Oe.id)),Ce=oe.filter(Oe=>!De.has(Oe.id));if(Ce.length>0){const ct=`${typeof window<"u"?window.location.origin:""}${jt}`,Mt=(await Promise.allSettled(Ce.map(bt=>cl(_,F.id,{...bt,sessionId:F.id,url:ct})))).map((bt,pt)=>bt.status==="fulfilled"?bt.value:(console.warn("[Agentation] Failed to sync annotation:",bt.reason),Ce[pt])),Rt=[...F.annotations,...Mt];O(Rt.filter(Sr)),cc(jt,Rt.filter(Sr),F.id)}else O(F.annotations.filter(Sr)),cc(jt,F.annotations.filter(Sr),F.id)}catch(F){console.warn("[Agentation] Could not join session, creating new:",F),Y6(jt)}if(!B){const F=typeof window<"u"?window.location.href:"/",oe=await nm(_,F);go(oe.id),ro("connected"),tm(jt,oe.id),b==null||b(oe.id);const De=L6(),Ce=typeof window<"u"?window.location.origin:"",Oe=[];for(const[ct,ut]of De){const Mt=ut.filter(pt=>!pt._syncedTo);if(Mt.length===0)continue;const Rt=`${Ce}${ct}`,bt=ct===jt;Oe.push((async()=>{try{const pt=bt?oe:await nm(_,Rt),xs=(await Promise.allSettled(Mt.map(jn=>cl(_,pt.id,{...jn,sessionId:pt.id,url:Rt})))).map((jn,Yn)=>jn.status==="fulfilled"?jn.value:(console.warn("[Agentation] Failed to sync annotation:",jn.reason),Mt[Yn])).filter(Sr);if(cc(ct,xs,pt.id),bt){const jn=new Set(Mt.map(Yn=>Yn.id));O(Yn=>{const Gt=Yn.filter(Qt=>!jn.has(Qt.id));return[...xs,...Gt]})}}catch(pt){console.warn(`[Agentation] Failed to sync annotations for ${ct}:`,pt)}})())}await Promise.allSettled(Oe)}}catch(T){ro("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",T)}})()},[_,x,dt,b,jt]),g.useEffect(()=>{if(!_||!dt)return;const C=async()=>{try{(await fetch(`${_}/health`)).ok?ro("connected"):ro("disconnected")}catch{ro("disconnected")}};C();const T=$S(C,1e4);return()=>clearInterval(T)},[_,dt]),g.useEffect(()=>{if(!_||!dt||!kn)return;const C=new EventSource(`${_}/sessions/${kn}/events`),T=["resolved","dismissed"],R=B=>{var F;try{const oe=JSON.parse(B.data);if(T.includes((F=oe.payload)==null?void 0:F.status)){const De=oe.payload.id,Ce=oe.payload.kind;if(Ce==="placement"){for(const[Oe,ct]of Pn.current)if(ct===De){Pn.current.delete(Oe),at(ut=>ut.filter(Mt=>Mt.id!==Oe));break}}else if(Ce==="rearrange"){for(const[Oe,ct]of as.current)if(ct===De){as.current.delete(Oe),gs(ut=>{if(!ut)return null;const Mt=ut.sections.filter(Rt=>Rt.id!==Oe);return Mt.length===0?null:{...ut,sections:Mt}});break}}else An(Oe=>new Set(Oe).add(De)),Ht(()=>{O(Oe=>Oe.filter(ct=>ct.id!==De)),An(Oe=>{const ct=new Set(Oe);return ct.delete(De),ct})},150)}}catch{}};return C.addEventListener("annotation.updated",R),()=>{C.removeEventListener("annotation.updated",R),C.close()}},[_,dt,kn]),g.useEffect(()=>{if(!_||!dt)return;const C=Lo.current==="disconnected",T=Ds==="connected";Lo.current=Ds,C&&T&&(async()=>{try{const B=em(jt);if(B.length===0)return;const oe=`${typeof window<"u"?window.location.origin:""}${jt}`;let De=kn,Ce=[];if(De)try{Ce=(await e1(_,De)).annotations}catch{De=null}De||(De=(await nm(_,oe)).id,go(De),tm(jt,De));const Oe=new Set(Ce.map(ut=>ut.id)),ct=B.filter(ut=>!Oe.has(ut.id));if(ct.length>0){const Mt=(await Promise.allSettled(ct.map(pt=>cl(_,De,{...pt,sessionId:De,url:oe})))).map((pt,Jn)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),ct[Jn])),bt=[...Ce,...Mt].filter(Sr);O(bt),cc(jt,bt,De)}}catch(B){console.warn("[Agentation] Failed to sync on reconnect:",B)}})()},[Ds,_,dt,kn,jt]);const si=g.useCallback(()=>{K||(H(!0),nt(!1),M(!1),Ht(()=>{F6(!0),V(!0),H(!1)},400))},[K]);g.useEffect(()=>{if(!i||!dt||!t||t.length===0||E.length>0)return;const C=[];return C.push(Ht(()=>{M(!0)},n-200)),t.forEach((T,R)=>{const B=n+R*300;C.push(Ht(()=>{const F=document.querySelector(T.selector);if(!F)return;const oe=F.getBoundingClientRect(),{name:De,path:Ce}=_l(F),Oe={id:`demo-${Date.now()}-${R}`,x:(oe.left+oe.width/2)/window.innerWidth*100,y:oe.top+oe.height/2+window.scrollY,comment:T.comment,element:De,elementPath:Ce,timestamp:Date.now(),selectedText:T.selectedText,boundingBox:{x:oe.left,y:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:rc(F),cssClasses:lc(F)};O(ct=>[...ct,Oe])},B))}),()=>{C.forEach(clearTimeout)}},[i,dt,t,n]),g.useEffect(()=>{const C=()=>{_t(window.scrollY),Kt(!0),Qs.current&&clearTimeout(Qs.current),Qs.current=Ht(()=>{Kt(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),Qs.current&&clearTimeout(Qs.current)}},[]),g.useEffect(()=>{dt&&E.length>0?kn?cc(jt,E,kn):cb(jt,E):dt&&E.length===0&&localStorage.removeItem(Ed(jt))},[E,jt,dt,kn]),g.useEffect(()=>{if(dt&&!Jt.current){Jt.current=!0;const C=z6(jt);C.length>0&&at(C)}},[dt,jt]),g.useEffect(()=>{dt&&Jt.current&&!ft&&(st.length>0?O6(jt,st):$6(jt))},[st,jt,dt,ft]),g.useEffect(()=>{if(dt&&!Po.current){Po.current=!0;const C=I6(jt);if(C){const T={...C,sections:C.sections.map(R=>{var B;return{...R,currentRect:(B=R.currentRect)!=null?B:{...R.originalRect}}})};gs(T)}}},[dt,jt]),g.useEffect(()=>{dt&&Po.current&&!ft&&(ot?P6(jt,ot):H6(jt))},[ot,jt,dt,ft]);const oi=g.useRef(!1);g.useEffect(()=>{if(dt&&!oi.current){oi.current=!0;const C=V6(jt);C&&(oo.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&Tn(C.purpose))}},[dt,jt]),g.useEffect(()=>{var T,R,B,F,oe;if(!dt||!oi.current)return;const C=oo.current;ft?((R=(T=ot==null?void 0:ot.sections)==null?void 0:T.length)!=null?R:0)>0||st.length>0||En?Jy(jt,{rearrange:ot,placements:st,purpose:En}):td(jt):((oe=(F=(B=C.rearrange)==null?void 0:B.sections)==null?void 0:F.length)!=null?oe:0)>0||C.placements.length>0||En?Jy(jt,{rearrange:C.rearrange,placements:C.placements,purpose:En}):td(jt)},[ot,st,En,ft,jt,dt]),g.useEffect(()=>{tt&&!ot&&gs({sections:[],originalOrder:[],detectedAt:Date.now()})},[tt,ot]),g.useEffect(()=>{if(!_||!kn)return;const C=Pn.current,T=new Set(st.map(R=>R.id));for(const R of st){if(C.has(R.id))continue;C.set(R.id,"");const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;cl(_,kn,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}×${R.height}px${R.text?` — "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:B,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then(F=>{C.has(R.id)&&C.set(R.id,F.id)}).catch(F=>{console.warn("[Agentation] Failed to sync placement annotation:",F),C.delete(R.id)})}for(const[R,B]of C)T.has(R)||(C.delete(R),B&&er(_,B).catch(()=>{}))},[st,_,kn,jt]),g.useEffect(()=>{if(!(!_||!kn))return Es.current&&clearTimeout(Es.current),Es.current=Ht(()=>{const C=as.current;if(!ot||ot.sections.length===0){for(const[,B]of C)B&&er(_,B).catch(()=>{});C.clear();return}const T=new Set(ot.sections.map(B=>B.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;for(const B of ot.sections){const F=B.originalRect,oe=B.currentRect;if(!(Math.abs(F.x-oe.x)>1||Math.abs(F.y-oe.y)>1||Math.abs(F.width-oe.width)>1||Math.abs(F.height-oe.height)>1)){const Oe=C.get(B.id);Oe&&(C.delete(B.id),er(_,Oe).catch(()=>{}));continue}const Ce=C.get(B.id);Ce?t1(_,Ce,{comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(F.x)},${Math.round(F.y)}) ${Math.round(F.width)}×${Math.round(F.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`}).catch(Oe=>{console.warn("[Agentation] Failed to update rearrange annotation:",Oe)}):(C.set(B.id,""),cl(_,kn,{id:B.id,x:oe.x/window.innerWidth*100,y:oe.y,comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(F.x)},${Math.round(F.y)}) ${Math.round(F.width)}×${Math.round(F.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`,element:B.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:B.selector,label:B.label,tagName:B.tagName,originalRect:F,currentRect:oe}}).then(Oe=>{C.has(B.id)&&C.set(B.id,Oe.id)}).catch(Oe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Oe),C.delete(B.id)}))}for(const[B,F]of C)T.has(B)||(C.delete(B),F&&er(_,F).catch(()=>{}))},300),()=>{Es.current&&clearTimeout(Es.current)}},[ot,_,kn,jt]);const j=g.useRef(new Map);g.useLayoutEffect(()=>{var R;const C=(R=ot==null?void 0:ot.sections)!=null?R:[],T=new Set;if((tt||Ot)&&k)for(const B of C){T.add(B.id);try{const F=document.querySelector(B.selector);if(!F)continue;if(!j.current.has(B.id)){const oe={transform:F.style.transform,transformOrigin:F.style.transformOrigin,opacity:F.style.opacity,position:F.style.position,zIndex:F.style.zIndex,display:F.style.display},De=[];let Ce=F.parentElement;for(;Ce&&Ce!==document.body;){const ct=getComputedStyle(Ce);(ct.overflow!=="visible"||ct.overflowX!=="visible"||ct.overflowY!=="visible")&&(De.push({el:Ce,overflow:Ce.style.overflow}),Ce.style.overflow="visible"),Ce=Ce.parentElement}getComputedStyle(F).display==="inline"&&(F.style.display="inline-block"),j.current.set(B.id,{el:F,origStyles:oe,ancestors:De}),F.style.transformOrigin="top left",F.style.zIndex="9999"}}catch{}}for(const[B,F]of j.current)if(!T.has(B)){const{el:oe,origStyles:De,ancestors:Ce}=F;oe.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",oe.style.transform=De.transform,oe.style.transformOrigin=De.transformOrigin,oe.style.opacity=De.opacity,oe.style.position=De.position,oe.style.zIndex=De.zIndex,j.current.delete(B),Ht(()=>{oe.style.transition="",oe.style.display=De.display;for(const Oe of Ce)Oe.el.style.overflow=Oe.overflow},450)}},[ot,tt,Ot,k]),g.useEffect(()=>()=>{for(const[,C]of j.current){const{el:T,origStyles:R,ancestors:B}=C;T.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",T.style.transform=R.transform,T.style.transformOrigin=R.transformOrigin,T.style.opacity=R.opacity,T.style.position=R.position,T.style.zIndex=R.zIndex,Ht(()=>{T.style.transition="",T.style.display=R.display;for(const F of B)F.el.style.overflow=F.overflow},450)}j.current.clear()},[]);const U=g.useCallback(()=>{Zt(!0),It(!1),St(null),clearTimeout(po.current),po.current=Ht(()=>{Zt(!1)},300)},[]),he=g.useCallback(()=>{tt&&(Zt(!0),It(!1),St(null),clearTimeout(po.current),po.current=Ht(()=>{Zt(!1)},300)),M(!1)},[tt]),we=g.useCallback(()=>{q||(PS(),fe(!0))},[q]),qe=g.useCallback(()=>{q&&(Iy(),fe(!1))},[q]),et=g.useCallback(()=>{q?qe():we()},[q,we,qe]),At=g.useCallback(()=>{if(Dn.length===0)return;const C=Dn[0],T=C.element,R=Dn.length>1,B=Dn.map(F=>F.element.getBoundingClientRect());if(R){const F={left:Math.min(...B.map(pt=>pt.left)),top:Math.min(...B.map(pt=>pt.top)),right:Math.max(...B.map(pt=>pt.right)),bottom:Math.max(...B.map(pt=>pt.bottom))},oe=Dn.slice(0,5).map(pt=>pt.name).join(", "),De=Dn.length>5?` +${Dn.length-5} more`:"",Ce=B.map(pt=>({x:pt.left,y:pt.top+window.scrollY,width:pt.width,height:pt.height})),ct=Dn[Dn.length-1].element,ut=B[B.length-1],Mt=ut.left+ut.width/2,Rt=ut.top+ut.height/2,bt=lm(ct);ge({x:Mt/window.innerWidth*100,y:bt?Rt:Rt+window.scrollY,clientY:Rt,element:`${Dn.length} elements: ${oe}${De}`,elementPath:"multi-select",boundingBox:{x:F.left,y:F.top+window.scrollY,width:F.right-F.left,height:F.bottom-F.top},isMultiSelect:!0,isFixed:bt,elementBoundingBoxes:Ce,multiSelectElements:Dn.map(pt=>pt.element),targetElement:ct,fullPath:Zu(T),accessibility:Qu(T),computedStyles:Ku(T),computedStylesObj:qu(T),nearbyElements:Gu(T),cssClasses:lc(T),nearbyText:rc(T),sourceFile:od(T)})}else{const F=B[0],oe=lm(T);ge({x:F.left/window.innerWidth*100,y:oe?F.top:F.top+window.scrollY,clientY:F.top,element:C.name,elementPath:C.path,boundingBox:{x:F.left,y:oe?F.top:F.top+window.scrollY,width:F.width,height:F.height},isFixed:oe,fullPath:Zu(T),accessibility:Qu(T),computedStyles:Ku(T),computedStylesObj:qu(T),nearbyElements:Gu(T),cssClasses:lc(T),nearbyText:rc(T),reactComponents:C.reactComponents,sourceFile:od(T)})}Ns([]),de(null)},[Dn]);g.useEffect(()=>{k||(ge(null),Ne(null),Xe(null),Je([]),de(null),nt(!1),Ns([]),Hn.current={cmd:!1,shift:!1},q&&qe())},[k,q,qe]),g.useEffect(()=>()=>{Iy()},[]),g.useEffect(()=>{if(!k)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),T=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${T} {
        cursor: crosshair !important;
      }

      body :is(${C})${T} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{const B=document.getElementById("feedback-cursor-styles");B&&B.remove()}},[k]),g.useEffect(()=>{if(Uo!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Uo,k]),g.useEffect(()=>{if(!k||W||xn||tt)return;const C=T=>{const R=T.composedPath()[0]||T.target;if(qo(R,"[data-feedback-toolbar]")){de(null);return}const B=wr(T.clientX,T.clientY);if(!B||qo(B,"[data-feedback-toolbar]")){de(null);return}const{name:F,elementName:oe,path:De,reactComponents:Ce}=am(B,ao),Oe=B.getBoundingClientRect();de({element:F,elementName:oe,elementPath:De,rect:Oe,reactComponents:Ce}),re({x:T.clientX,y:T.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[k,W,xn,tt,ao,dn]);const Pt=g.useCallback(C=>{var T;if(Ne(C),it(null),tn(null),rt([]),(T=C.elementBoundingBoxes)!=null&&T.length){const R=[];for(const B of C.elementBoundingBoxes){const F=B.x+B.width/2,oe=B.y+B.height/2-window.scrollY,De=wr(F,oe);De&&R.push(De)}Je(R),Xe(null)}else if(C.boundingBox){const R=C.boundingBox,B=R.x+R.width/2,F=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,oe=wr(B,F);if(oe){const De=oe.getBoundingClientRect(),Ce=De.width/R.width,Oe=De.height/R.height;Ce<.5||Oe<.5?Xe(null):Xe(oe)}else Xe(null);Je([])}else Xe(null),Je([])},[]);g.useEffect(()=>{if(!k||xn||tt)return;const C=T=>{var ys,xs;if(ko.current){ko.current=!1;return}const R=T.composedPath()[0]||T.target;if(qo(R,"[data-feedback-toolbar]")||qo(R,"[data-annotation-popup]")||qo(R,"[data-annotation-marker]"))return;if(T.metaKey&&T.shiftKey&&!W&&!te){T.preventDefault(),T.stopPropagation();const jn=wr(T.clientX,T.clientY);if(!jn)return;const Yn=jn.getBoundingClientRect(),{name:Gt,path:Qt,reactComponents:bs}=am(jn,ao),Nn=Dn.findIndex(fo=>fo.element===jn);Nn>=0?Ns(fo=>fo.filter((Oo,cs)=>cs!==Nn)):Ns(fo=>[...fo,{element:jn,rect:Yn,name:Gt,path:Qt,reactComponents:bs!=null?bs:void 0}]);return}const B=qo(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(qt.blockInteractions&&B&&(T.preventDefault(),T.stopPropagation()),W){if(B&&!qt.blockInteractions)return;T.preventDefault(),(ys=Ii.current)==null||ys.shake();return}if(te){if(B&&!qt.blockInteractions)return;T.preventDefault(),(xs=co.current)==null||xs.shake();return}T.preventDefault();const F=wr(T.clientX,T.clientY);if(!F)return;const{name:oe,path:De,reactComponents:Ce}=am(F,ao),Oe=F.getBoundingClientRect(),ct=T.clientX/window.innerWidth*100,ut=lm(F),Mt=ut?T.clientY:T.clientY+window.scrollY,Rt=window.getSelection();let bt;Rt&&Rt.toString().trim().length>0&&(bt=Rt.toString().trim().slice(0,500));const pt=qu(F),Jn=Ku(F);ge({x:ct,y:Mt,clientY:T.clientY,element:oe,elementPath:De,selectedText:bt,boundingBox:{x:Oe.left,y:ut?Oe.top:Oe.top+window.scrollY,width:Oe.width,height:Oe.height},nearbyText:rc(F),cssClasses:lc(F),isFixed:ut,fullPath:Zu(F),accessibility:Qu(F),computedStyles:Jn,computedStylesObj:pt,nearbyElements:Gu(F),reactComponents:Ce!=null?Ce:void 0,sourceFile:od(F),targetElement:F}),de(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[k,xn,tt,W,te,qt.blockInteractions,ao,Dn]),g.useEffect(()=>{if(!k)return;const C=B=>{B.key==="Meta"&&(Hn.current.cmd=!0),B.key==="Shift"&&(Hn.current.shift=!0)},T=B=>{const F=Hn.current.cmd&&Hn.current.shift;B.key==="Meta"&&(Hn.current.cmd=!1),B.key==="Shift"&&(Hn.current.shift=!1);const oe=Hn.current.cmd&&Hn.current.shift;F&&!oe&&Dn.length>0&&At()},R=()=>{Hn.current={cmd:!1,shift:!1},Ns([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",T),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",T),window.removeEventListener("blur",R)}},[k,Dn,At]),g.useEffect(()=>{if(!k||W||xn||tt)return;const C=T=>{const R=T.composedPath()[0]||T.target;qo(R,"[data-feedback-toolbar]")||qo(R,"[data-annotation-marker]")||qo(R,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable||(T.preventDefault(),xo.current={x:T.clientX,y:T.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[k,W,xn,tt]),g.useEffect(()=>{if(!k||W)return;const C=T=>{if(!xo.current)return;const R=T.clientX-xo.current.x,B=T.clientY-xo.current.y,F=R*R+B*B,oe=ki*ki;if(!Ks&&F>=oe&&(Ss.current=xo.current,ni(!0),T.preventDefault()),(Ks||F>=oe)&&Ss.current){if(Bs.current){const Gt=Math.min(Ss.current.x,T.clientX),Qt=Math.min(Ss.current.y,T.clientY),bs=Math.abs(T.clientX-Ss.current.x),Nn=Math.abs(T.clientY-Ss.current.y);Bs.current.style.transform=`translate(${Gt}px, ${Qt}px)`,Bs.current.style.width=`${bs}px`,Bs.current.style.height=`${Nn}px`}const De=Date.now();if(De-bo.current<Ji)return;bo.current=De;const Ce=Ss.current.x,Oe=Ss.current.y,ct=Math.min(Ce,T.clientX),ut=Math.min(Oe,T.clientY),Mt=Math.max(Ce,T.clientX),Rt=Math.max(Oe,T.clientY),bt=(ct+Mt)/2,pt=(ut+Rt)/2,Jn=new Set,ys=[[ct,ut],[Mt,ut],[ct,Rt],[Mt,Rt],[bt,pt],[bt,ut],[bt,Rt],[ct,pt],[Mt,pt]];for(const[Gt,Qt]of ys){const bs=document.elementsFromPoint(Gt,Qt);for(const Nn of bs)Nn instanceof HTMLElement&&Jn.add(Nn)}const xs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Gt of xs)if(Gt instanceof HTMLElement){const Qt=Gt.getBoundingClientRect(),bs=Qt.left+Qt.width/2,Nn=Qt.top+Qt.height/2,fo=bs>=ct&&bs<=Mt&&Nn>=ut&&Nn<=Rt,Oo=Math.min(Qt.right,Mt)-Math.max(Qt.left,ct),cs=Math.min(Qt.bottom,Rt)-Math.max(Qt.top,ut),ji=Oo>0&&cs>0?Oo*cs:0,Pi=Qt.width*Qt.height,Hi=Pi>0?ji/Pi:0;(fo||Hi>.5)&&Jn.add(Gt)}const jn=[],Yn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Gt of Jn){if(qo(Gt,"[data-feedback-toolbar]")||qo(Gt,"[data-annotation-marker]"))continue;const Qt=Gt.getBoundingClientRect();if(!(Qt.width>window.innerWidth*.8&&Qt.height>window.innerHeight*.5)&&!(Qt.width<10||Qt.height<10)&&Qt.left<Mt&&Qt.right>ct&&Qt.top<Rt&&Qt.bottom>ut){const bs=Gt.tagName;let Nn=Yn.has(bs);if(!Nn&&(bs==="DIV"||bs==="SPAN")){const fo=Gt.textContent&&Gt.textContent.trim().length>0,Oo=Gt.onclick!==null||Gt.getAttribute("role")==="button"||Gt.getAttribute("role")==="link"||Gt.classList.contains("clickable")||Gt.hasAttribute("data-clickable");(fo||Oo)&&!Gt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Nn=!0)}if(Nn){let fo=!1;for(const Oo of jn)if(Oo.left<=Qt.left&&Oo.right>=Qt.right&&Oo.top<=Qt.top&&Oo.bottom>=Qt.bottom){fo=!0;break}fo||jn.push(Qt)}}}if(Xo.current){const Gt=Xo.current;for(;Gt.children.length>jn.length;)Gt.removeChild(Gt.lastChild);jn.forEach((Qt,bs)=>{let Nn=Gt.children[bs];Nn||(Nn=document.createElement("div"),Nn.className=Ke.selectedElementHighlight,Gt.appendChild(Nn)),Nn.style.transform=`translate(${Qt.left}px, ${Qt.top}px)`,Nn.style.width=`${Qt.width}px`,Nn.style.height=`${Qt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[k,W,Ks,ki]),g.useEffect(()=>{if(!k)return;const C=T=>{const R=Ks,B=Ss.current;if(Ks&&B){ko.current=!0;const F=Math.min(B.x,T.clientX),oe=Math.min(B.y,T.clientY),De=Math.max(B.x,T.clientX),Ce=Math.max(B.y,T.clientY),Oe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(bt=>{if(!(bt instanceof HTMLElement)||qo(bt,"[data-feedback-toolbar]")||qo(bt,"[data-annotation-marker]"))return;const pt=bt.getBoundingClientRect();pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5||pt.width<10||pt.height<10||pt.left<De&&pt.right>F&&pt.top<Ce&&pt.bottom>oe&&Oe.push({element:bt,rect:pt})});const ut=Oe.filter(({element:bt})=>!Oe.some(({element:pt})=>pt!==bt&&bt.contains(pt))),Mt=T.clientX/window.innerWidth*100,Rt=T.clientY+window.scrollY;if(ut.length>0){const bt=ut.reduce((Yn,{rect:Gt})=>({left:Math.min(Yn.left,Gt.left),top:Math.min(Yn.top,Gt.top),right:Math.max(Yn.right,Gt.right),bottom:Math.max(Yn.bottom,Gt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pt=ut.slice(0,5).map(({element:Yn})=>_l(Yn).name).join(", "),Jn=ut.length>5?` +${ut.length-5} more`:"",ys=ut[0].element,xs=qu(ys),jn=Ku(ys);ge({x:Mt,y:Rt,clientY:T.clientY,element:`${ut.length} elements: ${pt}${Jn}`,elementPath:"multi-select",boundingBox:{x:bt.left,y:bt.top+window.scrollY,width:bt.right-bt.left,height:bt.bottom-bt.top},isMultiSelect:!0,fullPath:Zu(ys),accessibility:Qu(ys),computedStyles:jn,computedStylesObj:xs,nearbyElements:Gu(ys),cssClasses:lc(ys),nearbyText:rc(ys),sourceFile:od(ys)})}else{const bt=Math.abs(De-F),pt=Math.abs(Ce-oe);bt>20&&pt>20&&ge({x:Mt,y:Rt,clientY:T.clientY,element:"Area selection",elementPath:`region at (${Math.round(F)}, ${Math.round(oe)})`,boundingBox:{x:F,y:oe+window.scrollY,width:bt,height:pt},isMultiSelect:!0})}de(null)}else R&&(ko.current=!0);xo.current=null,Ss.current=null,ni(!1),Xo.current&&(Xo.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[k,Ks]);const Xt=g.useCallback(async(C,T,R)=>{const B=qt.webhookUrl||w;if(!B||!qt.webhooksEnabled&&!R)return!1;try{return(await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...T})})).ok}catch(F){return console.warn("[Agentation] Webhook failed:",F),!1}},[w,qt.webhookUrl,qt.webhooksEnabled]),fn=g.useCallback(C=>{var R;if(!W)return;const T={id:Date.now().toString(),x:W.x,y:W.y,comment:C,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,..._&&kn?{sessionId:kn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};O(B=>[...B,T]),Bo.current=T.id,Ht(()=>{Bo.current=null},300),Ht(()=>{yo(B=>new Set(B).add(T.id))},250),a==null||a(T),Xt("annotation.add",{annotation:T}),Gn(!0),Ht(()=>{ge(null),Gn(!1)},150),(R=window.getSelection())==null||R.removeAllRanges(),_&&kn&&cl(_,kn,T).then(B=>{B.id!==T.id&&(O(F=>F.map(oe=>oe.id===T.id?{...oe,id:B.id}:oe)),yo(F=>{const oe=new Set(F);return oe.delete(T.id),oe.add(B.id),oe}))}).catch(B=>{console.warn("[Agentation] Failed to sync annotation:",B)})},[W,a,Xt,_,kn]),Yt=g.useCallback(()=>{Gn(!0),Ht(()=>{ge(null),Gn(!1)},150)},[]),nn=g.useCallback(C=>{const T=E.findIndex(B=>B.id===C),R=E[T];(te==null?void 0:te.id)===C&&(lo(!0),Ht(()=>{Ne(null),Xe(null),Je([]),lo(!1)},150)),Ze(C),An(B=>new Set(B).add(C)),R&&(c==null||c(R),Xt("annotation.delete",{annotation:R})),_&&er(_,C).catch(B=>{console.warn("[Agentation] Failed to delete annotation from server:",B)}),Ht(()=>{O(B=>B.filter(F=>F.id!==C)),An(B=>{const F=new Set(B);return F.delete(C),F}),Ze(null),T<E.length-1&&(xe(T),Ht(()=>xe(null),200))},150)},[E,te,c,Xt,_]),hn=g.useCallback(C=>{var T;if(!C){it(null),tn(null),rt([]);return}if(it(C.id),(T=C.elementBoundingBoxes)!=null&&T.length){const R=[];for(const B of C.elementBoundingBoxes){const F=B.x+B.width/2,oe=B.y+B.height/2-window.scrollY,Ce=document.elementsFromPoint(F,oe).find(Oe=>!Oe.closest("[data-annotation-marker]")&&!Oe.closest("[data-agentation-root]"));Ce&&R.push(Ce)}rt(R),tn(null)}else if(C.boundingBox){const R=C.boundingBox,B=R.x+R.width/2,F=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,oe=wr(B,F);if(oe){const De=oe.getBoundingClientRect(),Ce=De.width/R.width,Oe=De.height/R.height;Ce<.5||Oe<.5?tn(null):tn(oe)}else tn(null);rt([])}else tn(null),rt([])},[]),Cs=g.useCallback(C=>{if(!te)return;const T={...te,comment:C};O(R=>R.map(B=>B.id===te.id?T:B)),u==null||u(T),Xt("annotation.update",{annotation:T}),_&&t1(_,te.id,{comment:C}).catch(R=>{console.warn("[Agentation] Failed to update annotation on server:",R)}),lo(!0),Ht(()=>{Ne(null),Xe(null),Je([]),lo(!1)},150)},[te,u,Xt,_]),D=g.useCallback(()=>{lo(!0),Ht(()=>{Ne(null),Xe(null),Je([]),lo(!1)},150)},[]),Y=g.useCallback(()=>{const C=E.length,T=st.length>0||!!ot;if(C===0&&dn.length===0&&!T)return;if(d==null||d(E),Xt("annotations.clear",{annotations:E}),_){Promise.all(E.map(F=>er(_,F.id).catch(oe=>{console.warn("[Agentation] Failed to delete annotation from server:",oe)})));for(const[,F]of Pn.current)F&&er(_,F).catch(()=>{});Pn.current.clear();for(const[,F]of as.current)F&&er(_,F).catch(()=>{});as.current.clear()}Ye(!0),be(!0),Zn([]);const R=_o.current;if(R){const F=R.getContext("2d");F&&F.clearRect(0,0,R.width,R.height)}(st.length>0||ot)&&(On(F=>F+1),fi(F=>F+1),Ht(()=>{at([]),gs(null)},200)),ft&&yt(!1),En&&Tn(""),oo.current={rearrange:null,placements:[]},td(jt);const B=C*30+200;Ht(()=>{O([]),yo(new Set),localStorage.removeItem(Ed(jt)),Ye(!1)},B),Ht(()=>be(!1),1500)},[jt,E,dn,st,ot,ft,En,d,Xt,_]),Z=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt,T=tt&&ft;let R;if(T){if(st.length===0&&!ot&&!En)return;R=""}else{if(R=o1(E,C,qt.outputDetail),!R&&dn.length===0&&st.length===0&&!ot)return;R||(R=`## Page Feedback: ${C}
`)}if(!T&&dn.length>0){const B=new Set;for(const Ce of E)Ce.drawingIndex!=null&&B.add(Ce.drawingIndex);const F=_o.current;F&&(F.style.visibility="hidden");const oe=[],De=window.scrollY;for(let Ce=0;Ce<dn.length;Ce++){if(B.has(Ce))continue;const Oe=dn[Ce];if(Oe.points.length<2)continue;const ct=Oe.fixed?Oe.points:Oe.points.map(es=>({x:es.x,y:es.y-De}));let ut=1/0,Mt=1/0,Rt=-1/0,bt=-1/0;for(const es of ct)ut=Math.min(ut,es.x),Mt=Math.min(Mt,es.y),Rt=Math.max(Rt,es.x),bt=Math.max(bt,es.y);const pt=Rt-ut,Jn=bt-Mt,ys=Math.hypot(pt,Jn),xs=ct[0],jn=ct[ct.length-1],Yn=Math.hypot(jn.x-xs.x,jn.y-xs.y);let Gt;const Qt=Yn<ys*.35,bs=pt/Math.max(Jn,1);if(Qt&&ys>20){const es=Math.max(pt,Jn)*.15;let Vi=0;for(const ea of ct){const Pc=ea.x-ut<es,Wd=Rt-ea.x<es,Fd=ea.y-Mt<es,Xd=bt-ea.y<es;(Pc||Wd)&&(Fd||Xd)&&Vi++}Gt=Vi>ct.length*.15?"box":"circle"}else bs>3&&Jn<40?Gt="underline":Yn>ys*.5?Gt="arrow":Gt="drawing";const Nn=Math.min(10,ct.length),fo=Math.max(1,Math.floor(ct.length/Nn)),Oo=new Set,cs=[],ji=[xs];for(let es=fo;es<ct.length-1;es+=fo)ji.push(ct[es]);ji.push(jn);for(const es of ji){const Vi=wr(es.x,es.y);if(!Vi||Oo.has(Vi)||qo(Vi,"[data-feedback-toolbar]"))continue;Oo.add(Vi);const{name:ea}=_l(Vi);cs.includes(ea)||cs.push(ea)}const Pi=`${Math.round(ut)},${Math.round(Mt)} → ${Math.round(Rt)},${Math.round(bt)}`;let Hi;(Gt==="circle"||Gt==="box")&&cs.length>0?Hi=`${Gt==="box"?"Boxed":"Circled"} **${cs[0]}**${cs.length>1?` (and ${cs.slice(1).join(", ")})`:""} (region: ${Pi})`:Gt==="underline"&&cs.length>0?Hi=`Underlined **${cs[0]}** (${Pi})`:Gt==="arrow"&&cs.length>=2?Hi=`Arrow from **${cs[0]}** to **${cs[cs.length-1]}** (${Math.round(xs.x)},${Math.round(xs.y)} → ${Math.round(jn.x)},${Math.round(jn.y)})`:cs.length>0?Hi=`${Gt==="arrow"?"Arrow":"Drawing"} near **${cs.join("**, **")}** (region: ${Pi})`:Hi=`Drawing at ${Pi}`,oe.push(Hi)}F&&(F.style.visibility=""),oe.length>0&&(R+=`
**Drawings:**
`,oe.forEach((Ce,Oe)=>{R+=`${Oe+1}. ${Ce}
`}))}if((st.length>0||T&&En)&&(R+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:En||void 0},qt.outputDetail)),ot){const B=Zy(ot,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(R+=`
`+B)}if(y)try{await navigator.clipboard.writeText(R)}catch{}h==null||h(R),I(!0),Ht(()=>I(!1),2e3),qt.autoClearAfterCopy&&Ht(()=>Y(),500)},[E,dn,st,ot,ft,tt,un,En,jt,qt.outputDetail,ao,qt.autoClearAfterCopy,Y,y,h]),ce=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;let T=o1(E,C,qt.outputDetail);if(!T&&st.length===0&&!ot)return;if(T||(T=`## Page Feedback: ${C}
`),st.length>0&&(T+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:En||void 0},qt.outputDetail)),ot){const B=Zy(ot,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(T+=`
`+B)}p&&p(T,E),X("sending"),await new Promise(B=>Ht(B,150));const R=await Xt("submit",{output:T,annotations:E},!0);X(R?"sent":"failed"),Ht(()=>X("idle"),2500),R&&qt.autoClearAfterCopy&&Ht(()=>Y(),500)},[p,Xt,E,st,ot,ft,un,jt,qt.outputDetail,ao,qt.autoClearAfterCopy,Y]);g.useEffect(()=>{if(!hs)return;const C=10,T=B=>{const F=B.clientX-hs.x,oe=B.clientY-hs.y,De=Math.sqrt(F*F+oe*oe);if(!Us&&De>C&&Rs(!0),Us||De>C){let Ce=hs.toolbarX+F,Oe=hs.toolbarY+oe;const ct=20,ut=337,Mt=44,bt=ut-(k?Ds==="connected"?297:257:44),pt=ct-bt,Jn=window.innerWidth-ct-ut;Ce=Math.max(pt,Math.min(Jn,Ce)),Oe=Math.max(ct,Math.min(window.innerHeight-Mt-ct,Oe)),Vs({x:Ce,y:Oe})}},R=()=>{Us&&(qs.current=!0),Rs(!1),Do(null)};return document.addEventListener("mousemove",T),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",R)}},[hs,Us,k,Ds]);const Pe=g.useCallback(C=>{var oe,De;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const T=C.currentTarget.parentElement;if(!T)return;const R=T.getBoundingClientRect(),B=(oe=cn==null?void 0:cn.x)!=null?oe:R.left,F=(De=cn==null?void 0:cn.y)!=null?De:R.top;Do({x:C.clientX,y:C.clientY,toolbarX:B,toolbarY:F})},[cn]);if(g.useEffect(()=>{if(!cn)return;const C=()=>{let F=cn.x,oe=cn.y;const Oe=20-(337-(k?Ds==="connected"?297:257:44)),ct=window.innerWidth-20-337;F=Math.max(Oe,Math.min(ct,F)),oe=Math.max(20,Math.min(window.innerHeight-44-20,oe)),(F!==cn.x||oe!==cn.y)&&Vs({x:F,y:oe})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[cn,k,Ds]),g.useEffect(()=>{const C=T=>{const R=T.target,B=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(T.key==="Escape"){if(tt){Tt?St(null):U();return}if(xn){Xn(!1);return}if(Dn.length>0){Ns([]);return}W||k&&(ls(),M(!1))}if((T.metaKey||T.ctrlKey)&&T.shiftKey&&(T.key==="f"||T.key==="F")){T.preventDefault(),ls(),k?he():M(!0);return}if(!(B||T.metaKey||T.ctrlKey)&&((T.key==="p"||T.key==="P")&&(T.preventDefault(),ls(),et()),(T.key==="l"||T.key==="L")&&(T.preventDefault(),ls(),xn&&Xn(!1),ke&&nt(!1),W&&Yt(),tt?U():It(!0)),(T.key==="h"||T.key==="H")&&E.length>0&&(T.preventDefault(),ls(),N(F=>!F)),(T.key==="c"||T.key==="C")&&(E.length>0||st.length>0||ot)&&(T.preventDefault(),ls(),Z()),(T.key==="x"||T.key==="X")&&(E.length>0||st.length>0||ot)&&(T.preventDefault(),ls(),Y(),st.length>0&&at([]),ot&&gs(null)),T.key==="s"||T.key==="S")){const F=ia(qt.webhookUrl)||ia(w||"");E.length>0&&F&&ue==="idle"&&(T.preventDefault(),ls(),ce())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[k,xn,tt,Tt,st,ot,W,E.length,qt.webhookUrl,w,ue,ce,et,Z,Y,Dn]),!dt||G)return null;const lt=E.length>0,ht=E.filter(C=>!Ro.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Wt=ht.length>0,bn=E.filter(C=>Ro.has(C.id)),As=C=>{const oe=C.x/100*window.innerWidth,De=typeof C.y=="string"?parseFloat(C.y):C.y,Ce={};window.innerHeight-De-22-10<80&&(Ce.top="auto",Ce.bottom="calc(100% + 10px)");const ct=oe-200/2,ut=10;if(ct<ut){const Mt=ut-ct;Ce.left=`calc(50% + ${Mt}px)`}else if(ct+200>window.innerWidth-ut){const Mt=ct+200-(window.innerWidth-ut);Ce.left=`calc(50% - ${Mt}px)`}return Ce};return Bc.createPortal(l.jsxs("div",{ref:J,style:{display:"contents"},"data-agentation-theme":Hs?"dark":"light","data-agentation-accent":qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ke.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:cn?{left:cn.x,top:cn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ke.toolbarContainer} ${k?Ke.expanded:Ke.collapsed} ${Si?Ke.entrance:""} ${K?Ke.hiding:""} ${!qt.webhooksEnabled&&(ia(qt.webhookUrl)||ia(w||""))?Ke.serverConnected:""}`,onClick:k?void 0:C=>{if(qs.current){qs.current=!1,C.preventDefault();return}M(!0)},onMouseDown:Pe,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ke.toggleContent} ${k?Ke.hidden:Ke.visible}`,children:[l.jsx(wS,{size:24}),Wt&&l.jsx("span",{className:`${Ke.badge} ${k?Ke.fadeOut:""} ${Si?Ke.entrance:""}`,children:ht.length})]}),l.jsxs("div",{className:`${Ke.controlsContent} ${k?Ke.visible:Ke.hidden} ${cn&&cn.y<100?Ke.tooltipBelow:""} ${Lt||ke?Ke.tooltipsHidden:""} ${ti?Ke.tooltipsInSession:""}`,onMouseEnter:Yo,onMouseLeave:Zi,children:[l.jsxs("div",{className:`${Ke.buttonWrapper} ${cn&&cn.x<120?Ke.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ke.controlButton,onClick:C=>{C.stopPropagation(),ls(),et()},"data-active":q,children:l.jsx(MS,{size:24,isPaused:q})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[q?"Resume animations":"Pause animations",l.jsx("span",{className:Ke.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:`${Ke.controlButton} ${Hs?"":Ke.light}`,onClick:C=>{C.stopPropagation(),ls(),xn&&Xn(!1),ke&&nt(!1),W&&Yt(),tt?U():It(!0)},"data-active":tt,style:tt&&ft?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(zS,{size:21})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[tt?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ke.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:C=>{C.stopPropagation(),ls(),N(!L)},disabled:!lt||tt,children:l.jsx(jS,{size:24,isOpen:L})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Ke.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:`${Ke.controlButton} ${Ee?Ke.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ls(),Z()},disabled:tt&&ft?st.length===0&&!((vo=ot==null?void 0:ot.sections)!=null&&vo.length):!lt&&dn.length===0&&st.length===0&&!((Ls=ot==null?void 0:ot.sections)!=null&&Ls.length),"data-active":Ee,children:l.jsx(CS,{size:24,copied:Ee,tint:tt&&ft&&(st.length>0||($t=ot==null?void 0:ot.sections)!=null&&$t.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[tt&&ft?"Copy layout":"Copy feedback",l.jsx("span",{className:Ke.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ke.buttonWrapper} ${Ke.sendButtonWrapper} ${k&&!qt.webhooksEnabled&&(ia(qt.webhookUrl)||ia(w||""))?Ke.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ke.controlButton} ${ue==="sent"||ue==="failed"?Ke.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ls(),ce()},disabled:!lt||!ia(qt.webhookUrl)&&!ia(w||"")||ue==="sending","data-no-hover":ue==="sent"||ue==="failed",tabIndex:ia(qt.webhookUrl)||ia(w||"")?0:-1,children:[l.jsx(kS,{size:24,state:ue}),lt&&ue==="idle"&&l.jsx("span",{className:Ke.buttonBadge,children:E.length})]}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ke.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:C=>{C.stopPropagation(),ls(),Y()},disabled:!lt&&dn.length===0&&st.length===0&&!((Rn=ot==null?void 0:ot.sections)!=null&&Rn.length),"data-danger":!0,children:l.jsx(TS,{size:24})}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ke.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:C=>{C.stopPropagation(),ls(),tt&&U(),nt(!ke)},children:l.jsx(ES,{size:24})}),_&&Ds!=="disconnected"&&l.jsx("span",{className:`${Ke.mcpIndicator} ${Ke[Ds]} ${ke?Ke.hidden:""}`,title:Ds==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ke.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ke.divider}),l.jsxs("div",{className:`${Ke.buttonWrapper} ${cn&&typeof window<"u"&&cn.x>window.innerWidth-120?Ke.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ke.controlButton,onClick:C=>{C.stopPropagation(),ls(),he()},children:l.jsx(AS,{size:24})}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Exit",l.jsx("span",{className:Ke.shortcut,children:"Esc"})]})]})]}),l.jsx(d6,{visible:tt&&k,activeType:Tt,onSelect:C=>{St(Tt===C?null:C)},isDarkMode:Hs,sectionCount:(_n=ot==null?void 0:ot.sections.length)!=null?_n:0,onDetectSections:()=>{var De,Ce;const C=w6(),T=(De=ot==null?void 0:ot.sections)!=null?De:[],R=new Set(T.map(Oe=>Oe.selector)),B=C.filter(Oe=>!R.has(Oe.selector)),F=[...T,...B],oe=[...(Ce=ot==null?void 0:ot.originalOrder)!=null?Ce:[],...B.map(Oe=>Oe.id)];gs({sections:F,originalOrder:oe,detectedAt:Date.now()})},placementCount:st.length,onClearPlacements:()=>{On(C=>C+1),fi(C=>C+1),Ht(()=>{gs({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:C=>{const T={sections:[],originalOrder:[],detectedAt:Date.now()};C?(ei.current={rearrange:ot,placements:st},gs(oo.current.rearrange||T),at(oo.current.placements),St(null)):(oo.current={rearrange:ot,placements:st},gs(ei.current.rearrange||T),at(ei.current.placements)),yt(C)},wireframePurpose:En,onWireframePurposeChange:Tn,Tooltip:Er,onDragStart:(C,T)=>{var Mt;T.preventDefault();const R=wt[C];let B=null,F=!1;const oe=T.clientX,De=T.clientY,Ce=T.target.closest("[data-feedback-toolbar]"),Oe=(Mt=Ce==null?void 0:Ce.getBoundingClientRect().top)!=null?Mt:window.innerHeight,ct=Rt=>{const bt=Rt.clientX-oe,pt=Rt.clientY-De;if(!F&&(Math.abs(bt)>4||Math.abs(pt)>4)&&(F=!0,B=document.createElement("div"),B.className=`${Be.dragPreview}${ft?` ${Be.dragPreviewWireframe}`:""}`,document.body.appendChild(B)),!B)return;const Jn=Math.max(0,Oe-Rt.clientY),ys=Math.min(1,Jn/180),xs=1-Math.pow(1-ys,2),jn=28,Yn=20,Gt=Math.min(140,R.width*.18),Qt=Math.min(90,R.height*.18),bs=jn+(Gt-jn)*xs,Nn=Yn+(Qt-Yn)*xs;B.style.width=`${bs}px`,B.style.height=`${Nn}px`,B.style.left=`${Rt.clientX-bs/2}px`,B.style.top=`${Rt.clientY-Nn/2}px`,B.style.opacity=`${.5+.5*xs}`,B.textContent=xs>.25?C:""},ut=Rt=>{if(window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",ut),B&&document.body.removeChild(B),F){const bt=R.width,pt=R.height,Jn=window.scrollY,ys=Math.max(0,Rt.clientX-bt/2),xs=Math.max(0,Rt.clientY+Jn-pt/2),jn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:ys,y:xs,width:bt,height:pt,scrollY:Jn,timestamp:Date.now()};at(Yn=>[...Yn,jn]),St(null),Fn.current=new Set,No(Yn=>Yn+1)}};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",ut)}}),l.jsx(N3,{settings:qt,onSettingsChange:C=>Xs(T=>({...T,...C})),isDarkMode:Hs,onToggleTheme:Gs,isDevMode:Ci,connectionStatus:Ds,endpoint:_,isVisible:Qe,toolbarNearBottom:!!cn&&cn.y<230,settingsPage:xt,onSettingsPageChange:Fe,onHideToolbar:si})]})}),(tt||Ot)&&l.jsx("div",{className:`${Be.blankCanvas} ${Sn?Be.visible:""} ${rn?Be.gridActive:""}`,style:{"--canvas-opacity":Vt},"data-feedback-toolbar":!0}),tt&&ft&&Sn&&l.jsxs("div",{className:Be.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Be.wireframeOpacityRow,children:[l.jsx("span",{className:Be.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Be.wireframeOpacitySlider,min:0,max:1,step:.01,value:Vt,onChange:C=>_s(Number(C.target.value))})]}),l.jsxs("div",{className:Be.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Be.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Be.wireframeNoticeDivider}),l.jsx("button",{className:Be.wireframeStartOver,onClick:()=>{On(C=>C+1),gs({sections:[],originalOrder:[],detectedAt:Date.now()}),oo.current={rearrange:null,placements:[]},Tn(""),td(jt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(tt||Ot)&&l.jsx(a6,{placements:st,onChange:at,activeComponent:Ot?null:Tt,onActiveComponentChange:St,isDarkMode:Hs,exiting:Ot,onInteractionChange:Wn,passthrough:!Tt,extraSnapRects:ot==null?void 0:ot.sections.map(C=>C.currentRect),deselectSignal:Ps,clearSignal:Ho,wireframe:ft,onSelectionChange:(C,T)=>{Fn.current=C,T||(Ms.current=new Set,io(R=>R+1))},onDragMove:(C,T)=>{const R=Ms.current;if(!(!R.size||!ot)){if(!fs.current){fs.current=new Map;for(const B of ot.sections)R.has(B.id)&&fs.current.set(B.id,{x:B.currentRect.x,y:B.currentRect.y})}for(const B of ot.sections){if(!R.has(B.id)||!fs.current.get(B.id))continue;const oe=document.querySelector(`[data-rearrange-section="${B.id}"]`);oe&&(oe.style.transform=`translate(${C}px, ${T}px)`)}}},onDragEnd:(C,T,R)=>{const B=Ms.current,F=fs.current;if(fs.current=null,!(!B.size||!ot||!F)){for(const oe of B){const De=document.querySelector(`[data-rearrange-section="${oe}"]`);De&&(De.style.transform="")}R&&gs(oe=>oe&&{...oe,sections:oe.sections.map(De=>{const Ce=F.get(De.id);return Ce?{...De,currentRect:{...De.currentRect,x:Math.max(0,Ce.x+C),y:Math.max(0,Ce.y+T)}}:De})})}}}),(tt||Ot)&&ot&&l.jsx(k6,{rearrangeState:ot,onChange:gs,isDarkMode:Hs,exiting:Ot,blankCanvas:ft,extraSnapRects:st.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:pn,deselectSignal:js,onSelectionChange:(C,T)=>{Ms.current=C,T||(Fn.current=new Set,No(R=>R+1))},onDragMove:(C,T)=>{const R=Fn.current;if(R.size){if(!fs.current){fs.current=new Map;for(const B of st)R.has(B.id)&&fs.current.set(B.id,{x:B.x,y:B.y})}for(const B of R){const F=document.querySelector(`[data-design-placement="${B}"]`);F&&(F.style.transform=`translate(${C}px, ${T}px)`)}}},onDragEnd:(C,T,R)=>{const B=Fn.current,F=fs.current;if(fs.current=null,!(!B.size||!F)){for(const oe of B){const De=document.querySelector(`[data-design-placement="${oe}"]`);De&&(De.style.transform="")}R&&at(oe=>oe.map(De=>{const Ce=F.get(De.id);return Ce?{...De,x:Math.max(0,Ce.x+C),y:Math.max(0,Ce.y+T)}:De}))}}}),l.jsx("canvas",{ref:_o,className:`${Ke.drawCanvas} ${xn?Ke.active:""}`,style:{opacity:zo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ke.markersLayer,"data-feedback-toolbar":!0,children:[ie&&ht.filter(C=>!C.isFixed).map((C,T,R)=>l.jsx(i1,{annotation:C,globalIndex:ht.findIndex(B=>B.id===C.id),layerIndex:T,layerSize:R.length,isExiting:Me,isClearing:Te,isAnimated:So.has(C.id),isHovered:!Me&&Ie===C.id,isDeleting:Ut===C.id,isEditingAny:!!te,renumberFrom:vt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:As(C),onHoverEnter:B=>!Me&&B.id!==Bo.current&&hn(B),onHoverLeave:()=>hn(null),onClick:B=>qt.markerClickBehavior==="delete"?nn(B.id):Pt(B),onContextMenu:Pt},C.id)),ie&&!Me&&bn.filter(C=>!C.isFixed).map(C=>l.jsx(a1,{annotation:C},C.id))]}),l.jsxs("div",{className:Ke.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ie&&ht.filter(C=>C.isFixed).map((C,T,R)=>l.jsx(i1,{annotation:C,globalIndex:ht.findIndex(B=>B.id===C.id),layerIndex:T,layerSize:R.length,isExiting:Me,isClearing:Te,isAnimated:So.has(C.id),isHovered:!Me&&Ie===C.id,isDeleting:Ut===C.id,isEditingAny:!!te,renumberFrom:vt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:As(C),onHoverEnter:B=>!Me&&B.id!==Bo.current&&hn(B),onHoverLeave:()=>hn(null),onClick:B=>qt.markerClickBehavior==="delete"?nn(B.id):Pt(B),onContextMenu:Pt},C.id)),ie&&!Me&&bn.filter(C=>C.isFixed).map(C=>l.jsx(a1,{annotation:C,fixed:!0},C.id))]}),k&&l.jsxs("div",{className:Ke.overlay,"data-feedback-toolbar":!0,style:W||te?{zIndex:99999}:void 0,children:[(ee==null?void 0:ee.rect)&&!W&&!Dt&&!Ks&&l.jsx("div",{className:`${Ke.hoverHighlight} ${Ke.enter}`,style:{left:ee.rect.left,top:ee.rect.top,width:ee.rect.width,height:ee.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Dn.filter(C=>document.contains(C.element)).map((C,T)=>{const R=C.element.getBoundingClientRect(),B=Dn.length>1;return l.jsx("div",{className:B?Ke.multiSelectOutline:Ke.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},T)}),Ie&&!W&&(()=>{var F;const C=E.find(oe=>oe.id===Ie);if(!(C!=null&&C.boundingBox))return null;if((F=C.elementBoundingBoxes)!=null&&F.length)return Ge.length>0?Ge.filter(oe=>document.contains(oe)).map((oe,De)=>{const Ce=oe.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:Ce.left,top:Ce.top,width:Ce.width,height:Ce.height}},`hover-outline-live-${De}`)}):C.elementBoundingBoxes.map((oe,De)=>l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:oe.x,top:oe.y-mt,width:oe.width,height:oe.height}},`hover-outline-${De}`));const T=Bt&&document.contains(Bt)?Bt.getBoundingClientRect():null,R=T?{x:T.left,y:T.top,width:T.width,height:T.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-mt,width:C.boundingBox.width,height:C.boundingBox.height},B=C.isMultiSelect;return l.jsx("div",{className:`${B?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Ke.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ee&&!W&&!Dt&&!Ks&&l.jsxs("div",{className:`${Ke.hoverTooltip} ${Ke.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(ee.reactComponents?48:32),8)},children:[ee.reactComponents&&l.jsx("div",{className:Ke.hoverReactPath,children:ee.reactComponents}),l.jsx("div",{className:Ke.hoverElementName,children:ee.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(me=W.multiSelectElements)!=null&&me.length?W.multiSelectElements.filter(C=>document.contains(C)).map((C,T)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Un?Ke.exit:Ke.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${T}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const C=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ke.singleSelectOutline} ${Un?Ke.exit:Ke.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Un?Ke.exit:Ke.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-mt,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=W.x,T=W.isFixed?W.y:W.y-mt;return l.jsxs(l.Fragment,{children:[l.jsx(v3,{x:C,y:T,isMultiSelect:W.isMultiSelect,isExiting:Un}),l.jsx(jd,{ref:Ii,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:fn,onCancel:Yt,isExiting:Un,lightMode:!Hs,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}})]})})()]}),te&&l.jsxs(l.Fragment,{children:[($e=te.elementBoundingBoxes)!=null&&$e.length?We.length>0?We.filter(C=>document.contains(C)).map((C,T)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${T}`)}):te.elementBoundingBoxes.map((C,T)=>l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:C.x,top:C.y-mt,width:C.width,height:C.height}},`edit-multi-${T}`)):(()=>{const C=Ve&&document.contains(Ve)?Ve.getBoundingClientRect():null,T=C?{x:C.left,y:C.top,width:C.width,height:C.height}:te.boundingBox?{x:te.boundingBox.x,y:te.isFixed?te.boundingBox.y:te.boundingBox.y-mt,width:te.boundingBox.width,height:te.boundingBox.height}:null;return T?l.jsx("div",{className:`${te.isMultiSelect?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Ke.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...te.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:co,element:te.element,selectedText:te.selectedText,computedStyles:y6(te.computedStyles),placeholder:"Edit your feedback...",initialValue:te.comment,submitLabel:"Save",onSubmit:Cs,onCancel:D,onDelete:()=>nn(te.id),isExiting:Co,lightMode:!Hs,accentColor:te.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=te.isFixed?te.y:te.y-mt;return{left:Math.max(160,Math.min(window.innerWidth-160,te.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),Ks&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Bs,className:Ke.dragSelection}),l.jsx("div",{ref:Xo,className:Ke.highlightsContainer})]})]})]}),document.body)}const gp=g.createContext({});function Lc(t){const n=g.useRef(null);return n.current===null&&(n.current=t()),n.current}const B3=typeof window<"u",yp=B3?g.useLayoutEffect:g.useEffect,Od=g.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function yl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ua=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const ir={},fb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function hb(t){return typeof t=="object"&&t!==null}const mb=t=>/^0[^.\s]+$/u.test(t);function pb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Oi=t=>t,L3=(t,n)=>i=>n(t(i)),zc=(...t)=>t.reduce(L3),xl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>yl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const di=t=>t*1e3,zi=t=>t/1e3;function _b(t,n){return n?t*(1e3/n):0}const z3=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},gb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,O3=1e-7,$3=12;function I3(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=gb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>O3&&++h<$3);return d}function Oc(t,n,i,a){if(t===n&&i===a)return Oi;const c=u=>I3(u,0,1,t,i);return u=>u===0||u===1?u:gb(c(u),n,a)}const yb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,xb=t=>n=>1-t(1-n),bb=Oc(.33,1.53,.69,.99),wp=xb(bb),vb=yb(wp),wb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),Sb=xb(Sp),Cb=yb(Sp),P3=Oc(.42,0,1,1),H3=Oc(0,0,.58,1),kb=Oc(.42,0,.58,1),jb=t=>Array.isArray(t)&&typeof t[0]!="number";function Mb(t,n){return jb(t)?t[z3(0,t.length,n)]:t}const Eb=t=>Array.isArray(t)&&typeof t[0]=="number",V3={linear:Oi,easeIn:P3,easeInOut:kb,easeOut:H3,circIn:Sp,circInOut:Cb,circOut:Sb,backIn:wp,backInOut:vb,backOut:bb,anticipate:wb},U3=t=>typeof t=="string",u1=t=>{if(Eb(t)){bp(t.length===4);const[n,i,a,c]=t;return Oc(n,i,a,c)}else if(U3(t))return V3[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Y3(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(y.schedule(_),t()),_(h)}const y={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(_))}};return y}const W3=40;function Tb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,N)=>(L[N]=Y3(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const L=ir.useManualTiming,N=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,W3),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},M=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:id.reduce((L,N)=>{const G=d[N];return L[N]=(V,K=!1,H=!1)=>(i||M(),G.schedule(V,K,H)),L},{}),cancel:L=>{for(let N=0;N<id.length;N++)d[id[N]].cancel(L)},state:c,steps:d}}const{schedule:is,cancel:Aa,state:Ao,steps:cm}=Tb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oi,!0);let pd;function F3(){pd=void 0}const Qo={now:()=>(pd===void 0&&Qo.set(Ao.isProcessing||ir.useManualTiming?Ao.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(F3)}},Ab=t=>n=>typeof n=="string"&&n.startsWith(t),Nb=Ab("--"),X3=Ab("var(--"),Cp=t=>X3(t)?G3.test(t.split("/*")[0].trim()):!1,G3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function d1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...wl,transform:t=>ua(0,1,t)},ad={...wl,default:1},wc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function q3(t){return t==null}const K3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&K3.test(i)&&i.startsWith(t)||n&&!q3(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},Q3=t=>ua(0,255,t),um={...wl,transform:t=>Math.round(Q3(t))},Tr={test:jp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+wc(Tc.transform(a))+")"};function Z3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Om={test:jp("#"),parse:Z3,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),tr=$c("deg"),ca=$c("%"),Et=$c("px"),J3=$c("vh"),eC=$c("vw"),f1={...ca,parse:t=>ca.parse(t)/100,transform:t=>ca.transform(t*100)},hl={test:jp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ca.transform(wc(n))+", "+ca.transform(wc(i))+", "+wc(Tc.transform(a))+")"},so={test:t=>Tr.test(t)||Om.test(t)||hl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):hl.test(t)?hl.parse(t):Om.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):hl.transform(t),getAnimatableNone:t=>{const n=so.parse(t);return n.alpha=0,so.transform(n)}},tC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(tC))==null?void 0:i.length)||0)>0}const Rb="number",Bb="color",sC="var",oC="var(",h1="${}",iC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(iC,p=>(so.test(p)?(a.color.push(u),c.push(Bb),i.push(so.parse(p))):p.startsWith(oC)?(a.var.push(u),c.push(sC),i.push(p)):(a.number.push(u),c.push(Rb),i.push(parseFloat(p))),++u,h1)).split(h1);return{values:i,split:h,indexes:a,types:c}}function aC(t){return bl(t).values}function Lb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Rb?c+=wc(a[u]):d===Bb?c+=so.transform(a[u]):c+=a[u]}return c}}function rC(t){return Lb(bl(t))}const lC=t=>typeof t=="number"?0:so.test(t)?so.getAnimatableNone(t):t,cC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:lC(t);function uC(t){const n=bl(t);return Lb(n)(n.values.map((a,c)=>cC(a,n.split[c])))}const Ki={test:nC,parse:aC,createTransformer:rC,getAnimatableNone:uC};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function dC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ps=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},fC=[Om,Tr,hl],hC=t=>fC.find(n=>n.test(t));function m1(t){const n=hC(t);if(!n)return!1;let i=n.parse(t);return n===hl&&(i=dC(i)),i}const p1=(t,n)=>{const i=m1(t),a=m1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=ps(i.alpha,a.alpha,u),Tr.transform(c))},$m=new Set(["none","hidden"]);function mC(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function pC(t,n){return i=>ps(t,n,i)}function Mp(t){return typeof t=="number"?pC:typeof t=="string"?Cp(t)?Td:so.test(t)?p1:yC:Array.isArray(t)?zb:typeof t=="object"?so.test(t)?p1:_C:Td}function zb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function _C(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function gC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const yC=(t,n)=>{const i=Ki.createTransformer(n),a=bl(t),c=bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?mC(t,n):zc(zb(gC(a,c),c.values),i):Td(t,n)};function Ob(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ps(t,n,i):Mp(t)(t,n)}const xC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>is.update(n,i),stop:()=>Aa(n),now:()=>Ao.isProcessing?Ao.timestamp:Qo.now()}},$b=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Ib(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:zi(c)}}const Is={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const bC=12;function vC(t,n,i){let a=i;for(let c=1;c<bC;c++)a=a-t(a)/n(a);return a}const hm=.001;function wC({duration:t=Is.duration,bounce:n=Is.bounce,velocity:i=Is.velocity,mass:a=Is.mass}){let c,u,d=1-n;d=ua(Is.minDamping,Is.maxDamping,d),t=ua(Is.minDuration,Is.maxDuration,zi(t)),d<1?(c=y=>{const _=y*d,x=_*t,b=_-i,w=Im(y,d),S=Math.exp(-x);return hm-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),k=Im(Math.pow(y,2),d);return(-c(y)+hm>0?-1:1)*((b-w)*S)/k}):(c=y=>{const _=Math.exp(-y*t),x=(y-i)*t+1;return-hm+_*x},u=y=>{const _=Math.exp(-y*t),x=(i-y)*(t*t);return _*x});const h=5/t,p=vC(c,u,h);if(t=di(t),isNaN(p))return{stiffness:Is.stiffness,damping:Is.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const SC=["duration","bounce"],CC=["stiffness","damping","mass"];function _1(t,n){return n.some(i=>t[i]!==void 0)}function kC(t){let n={velocity:Is.velocity,stiffness:Is.stiffness,damping:Is.damping,mass:Is.mass,isResolvedFromDuration:!1,...t};if(!_1(t,CC)&&_1(t,SC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ua(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Is.mass,stiffness:c,damping:u}}else{const i=wC({...t,velocity:0});n={...n,...i,mass:Is.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Is.visualDuration,n=Is.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=kC({...i,velocity:-zi(i.velocity||0)}),S=b||0,k=y/(2*Math.sqrt(p*_)),M=d-u,E=zi(Math.sqrt(p/_)),O=Math.abs(M)<5;a||(a=O?Is.restSpeed.granular:Is.restSpeed.default),c||(c=O?Is.restDelta.granular:Is.restDelta.default);let L,N,G,V,K,H;if(k<1)G=Im(E,k),V=(S+k*E*M)/G,L=ie=>{const se=Math.exp(-k*E*ie);return d-se*(V*Math.sin(G*ie)+M*Math.cos(G*ie))},K=k*E*V+M*G,H=k*E*M-V*G,N=ie=>Math.exp(-k*E*ie)*(K*Math.sin(G*ie)+H*Math.cos(G*ie));else if(k===1){L=se=>d-Math.exp(-E*se)*(M+(S+E*M)*se);const ie=S+E*M;N=se=>Math.exp(-E*se)*(E*ie*se-S)}else{const ie=E*Math.sqrt(k*k-1);L=ee=>{const de=Math.exp(-k*E*ee),z=Math.min(ie*ee,300);return d-de*((S+k*E*M)*Math.sinh(z)+ie*M*Math.cosh(z))/ie};const se=(S+k*E*M)/ie,Me=k*E*se-M*ie,Ue=k*E*M-se*ie;N=ee=>{const de=Math.exp(-k*E*ee),z=Math.min(ie*ee,300);return de*(Me*Math.sinh(z)+Ue*Math.cosh(z))}}const J={calculatedDuration:w&&x||null,velocity:ie=>di(N(ie)),next:ie=>{if(!w&&k<1){const Me=Math.exp(-k*E*ie),Ue=Math.sin(G*ie),ee=Math.cos(G*ie),de=d-Me*(V*Ue+M*ee),z=di(Me*(K*Ue+H*ee));return h.done=Math.abs(z)<=a&&Math.abs(d-de)<=c,h.value=h.done?d:de,h}const se=L(ie);if(w)h.done=ie>=x;else{const Me=di(N(ie));h.done=Math.abs(Me)<=a&&Math.abs(d-se)<=c}return h.value=h.done?d:se,h},toString:()=>{const ie=Math.min(Ep(J),Ad),se=$b(Me=>J.next(ie*Me).value,ie,30);return ie+"ms "+se},toTransition:()=>{}};return J}Ac.applyToOptions=t=>{const n=Ib(t,100,Ac);return t.ease=n.ease,t.duration=di(n.duration),t.type="keyframes",t};const jC=5;function Pb(t,n,i){const a=Math.max(n-jC,0);return _b(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=H=>h!==void 0&&H<h||p!==void 0&&H>p,S=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let k=i*n;const M=x+k,E=d===void 0?M:d(M);E!==M&&(k=E-x);const O=H=>-k*Math.exp(-H/a),L=H=>E+O(H),N=H=>{const J=O(H),ie=L(H);b.done=Math.abs(J)<=y,b.value=b.done?E:ie};let G,V;const K=H=>{w(b.value)&&(G=H,V=Ac({keyframes:[b.value,S(b.value)],velocity:Pb(L,H,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:_}))};return K(0),{calculatedDuration:null,next:H=>{let J=!1;return!V&&G===void 0&&(J=!0,N(H),K(H)),G!==void 0&&H>=G?V.next(H-G):(!J&&N(H),b)}}}function MC(t,n,i){const a=[],c=i||ir.mix||Ob,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Oi:n;h=zc(p,h)}a.push(h)}return a}function Hb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=MC(n,a,c),p=h.length,y=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=xl(t[x],t[x+1],_);return h[x](b)};return i?_=>y(ua(t[0],t[u-1],_)):y}function Vb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=xl(0,n,a);t.push(ps(i,1,c))}}function Ub(t){const n=[0];return Vb(n,t.length-1),n}function EC(t,n){return t.map(i=>i*n)}function TC(t,n){return t.map(()=>n||kb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=jb(a)?a.map(u1):u1(a),u={done:!1,value:n[0]},d=EC(i&&i.length===n.length?i:Ub(n),t),h=Hb(d,n,{ease:Array.isArray(c)?c:TC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const AC=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(AC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const NC={decay:Pm,inertia:Pm,tween:Sc,keyframes:Sc,spring:Ac};function Yb(t){typeof t.type=="string"&&(t.type=NC[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const DC=t=>t/100;class Nd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Qo.now()&&this.tick(Qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Yb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=zc(DC,Ob(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ep(y));const{calculatedDuration:_}=y;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const E=this.currentTime-y*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?E<0:E>c;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,N=a;if(x){const H=Math.min(this.currentTime,c)/h;let J=Math.floor(H),ie=H%1;!ie&&H>=1&&(ie=1),ie===1&&J--,J=Math.min(J,x+1),!!(J%2)&&(b==="reverse"?(ie=1-ie,w&&(ie-=w/h)):b==="mirror"&&(N=d)),L=ua(0,1,ie)*h}let G;O?(this.delayState.value=_[0],G=this.delayState):G=N.next(L),u&&!O&&(G.value=u(G.value));let{done:V}=G;!O&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return K&&S!==Pm&&(G.value=$d(_,this.options,M,this.speed)),k&&k(G.value),K&&this.finish(),G}then(n,i){return this.finished.then(n,i)}get duration(){return zi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(this.currentTime)}set time(n){n=di(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Pb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=zi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=xC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function RC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Hm=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Vm(n)},BC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),g1=Hm,y1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),x1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),LC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y1,scaleY:x1,scale:t=>(y1(t)+x1(t))/2,rotateX:t=>Vm(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Ar(Math.atan2(-t[2],t[0]))),rotateZ:g1,rotate:g1,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Um(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Um(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=LC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=BC,c=h}if(!c)return Um(n);const u=a[n],d=c[1].split(",").map(OC);return typeof u=="function"?u(d):d[u]}const zC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function OC(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),b1=t=>t===wl||t===Et,$C=new Set(["x","y","z"]),IC=Sl.filter(t=>!$C.has(t));function PC(t){const n=[];return IC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const or={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};or.translateX=or.x;or.translateY=or.y;const Nr=new Set;let Wm=!1,Fm=!1,Xm=!1;function Wb(){if(Fm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=PC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Nr.forEach(t=>t.complete(Xm)),Nr.clear()}function Fb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function HC(){Xm=!0,Fb(),Wb(),Xm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Wm||(Wm=!0,is.read(Fb),is.resolveKeyframes(Wb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}RC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const VC=t=>t.startsWith("--");function Xb(t,n,i){VC(n)?t.style.setProperty(n,i):t.style[n]=i}const UC={};function Gb(t,n){const i=pb(t);return()=>{var a;return(a=UC[n])!=null?a:i()}}const YC=Gb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),qb=Gb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,v1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function Kb(t,n){if(t)return typeof t=="function"?qb()?$b(t,n):"ease-out":Eb(t)?gc(t):Array.isArray(t)?t.map(i=>Kb(i,n)||v1.easeOut):v1[t]}function WC(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const _={[n]:i};p&&(_.offset=p);const x=Kb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(_,b)}function Np(t){return typeof t=="function"&&"applyToOptions"in t}function FC({type:t,...n}){var i,a;return Np(t)&&qb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Qb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const y=FC(n);this.animation=WC(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Xb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return zi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=di(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&YC()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Oi):c(this)}}const Zb={anticipate:wb,backInOut:vb,circInOut:Cb};function XC(t){return t in Zb}function GC(t){typeof t.ease=="string"&&XC(t.ease)&&(t.ease=Zb[t.ease])}const mm=10;class qC extends Qb{constructor(n){GC(n),Yb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(mm,Qo.now()-this.startTime),y=ua(0,mm,p-mm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Xb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,_,y),h.stop()}}const w1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ki.test(t)||t==="0")&&!t.startsWith("url("));function KC(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function QC(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=w1(c,n),h=w1(u,n);return!d||!h?!1:KC(t)||(i==="spring"||Np(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Jb=new Set(["opacity","clipPath","filter","transform"]),ZC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function JC(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&ZC.test(t[n]))return!0;return!1}const ek=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),tk=pb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nk(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:_}=n.owner.getProps();return tk()&&i&&(Jb.has(i)||ek.has(i)&&JC(h))&&(i!=="transform"||!_)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const sk=40;class ok extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:_,...x}){var S;super(),this.stop=()=>{var k,M;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=Qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(k,M,E)=>this.onKeyframesResolved(k,M,b,!E),p,y,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var E,O;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:_}=a;this.resolvedAt=Qo.now();let x=!0;QC(n,u,d,h)||(x=!1,(ir.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>sk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&nk(w),k=(O=(E=w.motionValue)==null?void 0:E.owner)==null?void 0:O.current;let M;if(S)try{M=new qC({...w,element:k})}catch{M=new Nd(w)}else M=new Nd(w);M.finished.then(()=>{this.notifyFinished()}).catch(Oi),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),HC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class ik{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return S1(this.animations,"duration")}get iterationDuration(){return S1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function S1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class ak extends ik{then(n,i){return this.finished.finally(n).then(()=>{})}}function e5(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,_)=>y.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const rk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lk(t){const n=rk.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function t5(t,n,i=1){const[a,c]=lk(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return fb(d)?parseFloat(d):d}return Cp(c)?t5(c,n,i+1):c}const ck={type:"spring",stiffness:500,damping:25,restSpeed:10},uk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),dk={type:"keyframes",duration:.8},fk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hk=(t,{keyframes:n})=>n.length>2?dk:Cl.has(t)?t.startsWith("scale")?uk(n[1]):ck:fk;function n5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Dp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?n5(i,t):i}const mk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function pk(t){for(const n in t)if(!mk.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Dp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-di(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};pk(h)||Object.assign(_,hk(t,_)),_.duration&&(_.duration=di(_.duration)),_.repeatDelay&&(_.repeatDelay=di(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Gm(_),_.delay===0&&(x=!0)),(ir.instantAnimations||ir.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){is.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Nd(_):new ok(_)};function C1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const s5=new Set(["width","height","top","left","right","bottom",...Sl]),k1=30,_k=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class gk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=_k(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),is.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>k1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,k1);return _b(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ar(t,n){return new gk(t,n)}const qm=t=>Array.isArray(t);function yk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,ar(i))}function xk(t){return qm(t)?t[t.length-1]||0:t}function bk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=xk(u[d]);yk(t,d,h)}}const mo=t=>!!(t&&t.getVelocity);function vk(t){return!!(mo(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(vk(i))return i.add(n);if(!i&&ir.WillChange){const a=new ir.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const wk="framerAppearId",o5="data-"+Lp(wk);function i5(t){return t.props[o5]}function Sk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function zp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?n5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&Sk(x,w))continue;const M={delay:i,...Dp(u||{},w)},E=S.get();if(E!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===E&&!M.velocity){is.update(()=>S.set(k));continue}let O=!1;if(window.MotionHandoffAnimation){const G=i5(t);if(G){const V=window.MotionHandoffAnimation(G,w,is);V!==null&&(M.startTime=V,O=!0)}}Km(t,w);const L=y!=null?y:t.shouldReduceMotion;S.start(Rp(w,S,k,L&&s5.has(w)?{type:!1}:M,t,O));const N=S.animation;N&&_.push(N)}if(d){const w=()=>is.update(()=>{d&&bk(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Qm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(zp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return Ck(t,n,y,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,_]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function Ck(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+e5(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function kk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(zp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const jk={test:t=>t==="auto",parse:t=>t},a5=t=>n=>n.test(t),r5=[wl,Et,ca,tr,eC,J3,jk],j1=t=>r5.find(a5(t));function Mk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||mb(t):!0}const Ek=new Set(["brightness","contrast","saturate","opacity"]);function Tk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=Ek.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const Ak=/\b([a-z-]*)\(.*?\)/gu,Zm={...Ki,getAnimatableNone:t=>{const n=t.match(Ak);return n?n.map(Tk).join(" "):t}},Jm={...Ki,getAnimatableNone:t=>{const n=Ki.parse(t);return Ki.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},M1={...wl,transform:Math.round},Nk={rotate:tr,rotateX:tr,rotateY:tr,rotateZ:tr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:tr,skewX:tr,skewY:tr,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:Tc,originX:f1,originY:f1,originZ:Et},Op={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,top:Et,right:Et,bottom:Et,left:Et,inset:Et,insetBlock:Et,insetBlockStart:Et,insetBlockEnd:Et,insetInline:Et,insetInlineStart:Et,insetInlineEnd:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,paddingBlock:Et,paddingBlockStart:Et,paddingBlockEnd:Et,paddingInline:Et,paddingInlineStart:Et,paddingInlineEnd:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,marginBlock:Et,marginBlockStart:Et,marginBlockEnd:Et,marginInline:Et,marginInlineStart:Et,marginInlineEnd:Et,fontSize:Et,backgroundPositionX:Et,backgroundPositionY:Et,...Nk,zIndex:M1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:M1},Dk={...Op,color:so,backgroundColor:so,outlineColor:so,fill:so,stroke:so,borderColor:so,borderTopColor:so,borderRightColor:so,borderBottomColor:so,borderLeftColor:so,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},l5=t=>Dk[t],Rk=new Set([Zm,Jm]);function c5(t,n){let i=l5(t);return Rk.has(i)||(i=Ki),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Bk=new Set(["auto","none","0"]);function Lk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Bk.has(u)&&bl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=c5(i,c)}class zk extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=t5(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!s5.has(a)||n.length!==2)return;const[c,u]=n,d=j1(c),h=j1(u),p=d1(c),y=d1(u);if(p!==y&&or[a]){this.needsMeasurement=!0;return}if(d!==h)if(b1(d)&&b1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else or[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||Mk(n[c]))&&a.push(c);a.length&&Lk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=or[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=or[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const u5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return hb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=Tb(queueMicrotask,!1),Gi={x:!1,y:!1};function d5(){return Gi.x||Gi.y}function Ok(t){return t==="x"||t==="y"?Gi[t]?null:(Gi[t]=!0,()=>{Gi[t]=!1}):Gi.x||Gi.y?null:(Gi.x=Gi.y=!0,()=>{Gi.x=Gi.y=!1})}function f5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function $k(t){return!(t.pointerType==="touch"||d5())}function Ik(t,n,i={}){const[a,c,u]=f5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const _=()=>{d.removeEventListener("pointerleave",S)},x=M=>{y&&(y(M),y=void 0),_()},b=M=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(M))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=M=>{if(M.pointerType!=="touch"){if(h){p=!0;return}x(M)}},k=M=>{if(!$k(M))return;p=!1;const E=n(d,M);typeof E=="function"&&(y=E,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const h5=(t,n)=>n?t===n?!0:h5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Pk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Hk(t){return Pk.has(t.tagName)||t.isContentEditable===!0}const Vk=new Set(["INPUT","SELECT","TEXTAREA"]);function Uk(t){return Vk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function E1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Yk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=E1(()=>{if(gd.has(i))return;pm(i,"down");const c=E1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return Pp(t)&&!d5()}const A1=new WeakSet;function Wk(t,n,i={}){const[a,c,u]=f5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||A1.has(h))return;gd.add(p),i.stopPropagation&&A1.add(h);const y=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||h5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>Yk(y,c)),!Hk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return hb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let nr;const m5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Fk=m5("inline","width","offsetWidth"),Xk=m5("block","height","offsetHeight");function Gk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Fk(t,n)},get height(){return Xk(t,n)}})})}function qk(t){t.forEach(Gk)}function Kk(){typeof ResizeObserver>"u"||(nr=new ResizeObserver(qk))}function Qk(t,n){nr||Kk();const i=$p(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),nr==null||nr.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||nr==null||nr.unobserve(a)})}}const xd=new Set;let ml;function Zk(){ml=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",ml)}function Jk(t){return xd.add(t),ml||Zk(),()=>{xd.delete(t),!xd.size&&typeof ml=="function"&&(window.removeEventListener("resize",ml),ml=void 0)}}function N1(t,n){return typeof t=="function"?Jk(t):Qk(t,n)}function p5(t){return Id(t)&&t.tagName==="svg"}function e8(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Hb(c,u,d);return n?h(a):h}const t8=[...r5,so,Ki],n8=t=>t8.find(a5(t)),D1=()=>({translate:0,scale:1,origin:0,originPoint:0}),pl=()=>({x:D1(),y:D1()}),R1=()=>({min:0,max:0}),no=()=>({x:R1(),y:R1()}),Nc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Hp];function Hd(t){return Pd(t.animate)||Vp.some(n=>Dc(t[n]))}function _5(t){return!!(Hd(t)||t.variants)}function s8(t,n,i){for(const a in n){const c=n[a],u=i[a];if(mo(c))t.addValue(a,c);else if(mo(u))t.addValue(a,ar(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,ar(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},g5={current:!1},o8=typeof window<"u";function i8(){if(g5.current=!0,!!o8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const B1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function y5(t){Dd=t}function a8(){return Dd}class x5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Qo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,is.render(this.render,!1,!0))};const{latestValues:y,renderState:_}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=_5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&mo(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Nc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(g5.current||i8(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Aa(this.notifyUpdate),Aa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Jb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:_}=i.accelerate,x=new Qb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:di(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&is.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):no()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<B1.length;a++){const c=B1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=s8(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=ar(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(fb(a)||mb(a))?a=parseFloat(a):!n8(a)&&Ki.test(i)&&(a=c5(n,i)),this.setBaseTarget(n,mo(a)?a.get():a)),mo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!mo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class b5 extends x5{constructor(){super(...arguments),this.KeyframeResolver=zk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;mo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class rr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function v5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function r8({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function l8(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function jr(t){return tp(t)||w5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function w5(t){return L1(t.x)||L1(t.y)}function L1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function z1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=z1(t.min,n,i,a,c),t.max=z1(t.max,n,i,a,c)}function S5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const O1=.999999999999,$1=1.0000000000001;function c8(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ra(t.x,-u.scroll.offset.x),ra(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,S5(t,d)),a&&jr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<$1&&n.x>O1&&(n.x=1),n.y<$1&&n.y>O1&&(n.y=1)}function ra(t,n){t.min+=n,t.max+=n}function I1(t,n,i,a,c=.5){const u=ps(t.min,t.max,c);np(t,n,i,u,a)}function P1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;I1(t.x,P1(n.x,a.x),n.scaleX,n.scale,n.originX),I1(t.y,P1(n.y,a.y),n.scaleY,n.scale,n.originY)}function C5(t,n){return v5(l8(t.getBoundingClientRect(),n))}function u8(t,n,i){const a=C5(t,i),{scroll:c}=n;return c&&(ra(a.x,c.offset.x),ra(a.y,c.offset.y)),a}const d8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},f8=Sl.length;function h8(t,n,i){let a="",c=!0;for(let u=0;u<f8;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=u5(h,Op[d]);if(!p){c=!1;const _=d8[d]||d;a+=`${_}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(Nb(p)){c[p]=y;continue}else{const _=u5(y,Op[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=h8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${y} ${_}`}}function k5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function H1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Et.test(t))t=parseFloat(t);else return t;const i=H1(t,n.target.x),a=H1(t,n.target.y);return`${i}% ${a}%`}},m8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ki.parse(t);if(c.length>5)return a;const u=Ki.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ps(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},sp={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:m8};function j5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(mo(a[h])||c&&mo(c[h])||j5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function p8(t){return window.getComputedStyle(t)}class M5 extends b5{constructor(){super(...arguments),this.type="html",this.renderInstance=k5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?Um(i):zC(n,i);{const c=p8(n),u=(Nb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return C5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function _8(t,n){return t in n}class g8 extends x5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(_8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return no()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const y8={offset:"stroke-dashoffset",array:"stroke-dasharray"},x8={offset:"strokeDashoffset",array:"strokeDasharray"};function b8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?y8:x8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const v8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function E5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,_){var w,S;if(Up(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of v8)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&b8(x,c,u,d,!1)}const T5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),A5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function w8(t,n,i,a){k5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(T5.has(c)?c:Lp(c),n.attrs[c])}function N5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(mo(t[c])||mo(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends b5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=no}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=l5(i);return a&&a.default||0}return i=T5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return N5(n,i,a)}build(n,i,a){E5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){w8(n,i,a,c)}mount(n){this.isSVGTag=A5(n.tagName),super.mount(n)}}const S8=Vp.length;function R5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?R5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<S8;i++){const a=Vp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function B5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const C8=[...Hp].reverse(),k8=Hp.length;function j8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>kk(t,i,a)))}function M8(t){let n=j8(t),i=V1(),a=!0,c=!1;const u=y=>(_,x)=>{var w;const b=Dr(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...M}=b;_={..._,...M,...k}}return _};function d(y){n=y(t)}function h(y){const{props:_}=t,x=R5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let E=0;E<k8;E++){const O=C8[E],L=i[O],N=_[O]!==void 0?_[O]:x[O],G=Dc(N),V=O===y?L.isActive:null;V===!1&&(k=E);let K=N===x[O]&&N!==_[O]&&G;if(K&&(a||c)&&t.manuallyAnimateOnMount&&(K=!1),L.protectedKeys={...S},!L.isActive&&V===null||!N&&!L.prevProp||Pd(N)||typeof N=="boolean")continue;if(O==="exit"&&L.isActive&&V!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const H=E8(L.prevProp,N);let J=H||O===y&&L.isActive&&!K&&G||E>k&&G,ie=!1;const se=Array.isArray(N)?N:[N];let Me=se.reduce(u(O),{});V===!1&&(Me={});const{prevResolvedValues:Ue={}}=L,ee={...Ue,...Me},de=W=>{J=!0,w.has(W)&&(ie=!0,w.delete(W)),L.needsAnimating[W]=!0;const ge=t.getValue(W);ge&&(ge.liveStyle=!1)};for(const W in ee){const ge=Me[W],Ee=Ue[W];if(S.hasOwnProperty(W))continue;let I=!1;qm(ge)&&qm(Ee)?I=!B5(ge,Ee):I=ge!==Ee,I?ge!=null?de(W):w.add(W):ge!==void 0&&w.has(W)?de(W):L.protectedKeys[W]=!0}L.prevProp=N,L.prevResolvedValues=Me,L.isActive&&(S={...S,...Me}),(a||c)&&t.blockInitialAnimation&&(J=!1);const z=K&&H;J&&(!z||ie)&&b.push(...se.map(W=>{const ge={type:O};if(typeof W=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ee}=t,I=Dr(Ee,W);if(Ee.enteringChildren&&I){const{delayChildren:ue}=I.transition||{};ge.delay=e5(Ee.enteringChildren,t,ue)}}return{animation:W,options:ge}}))}if(w.size){const E={};if(typeof _.initial!="boolean"){const O=Dr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);O&&O.transition&&(E.transition=O.transition)}w.forEach(O=>{const L=t.getBaseTarget(O),N=t.getValue(O);N&&(N.liveStyle=!0),E[O]=L!=null?L:null}),b.push({animation:E})}let M=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(M=!1),a=!1,c=!1,M?n(b):Promise.resolve()}function p(y,_){var b;if(i[y].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,_)}),i[y].isActive=_;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=V1(),c=!0}}}function E8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!B5(n,t):!1}function Cr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V1(){return{animate:Cr(!0),whileInView:Cr(),whileHover:Cr(),whileTap:Cr(),whileDrag:Cr(),whileFocus:Cr(),exit:Cr()}}function op(t,n){t.min=n.min,t.max=n.max}function Xi(t,n){op(t.x,n.x),op(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const L5=1e-4,T8=1-L5,A8=1+L5,z5=.01,N8=0-z5,D8=0+z5;function Zo(t){return t.max-t.min}function R8(t,n,i){return Math.abs(t-n)<=i}function Y1(t,n,i,a=.5){t.origin=a,t.originPoint=ps(n.min,n.max,t.origin),t.scale=Zo(i)/Zo(n),t.translate=ps(i.min,i.max,t.origin)-t.originPoint,(t.scale>=T8&&t.scale<=A8||isNaN(t.scale))&&(t.scale=1),(t.translate>=N8&&t.translate<=D8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){Y1(t.x,n.x,i.x,a?a.originX:void 0),Y1(t.y,n.y,i.y,a?a.originY:void 0)}function W1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Zo(n)}function B8(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Zo(n)}function Bd(t,n,i,a){F1(t.x,n.x,i.x,a==null?void 0:a.x),F1(t.y,n.y,i.y,a==null?void 0:a.y)}function X1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function L8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ca.test(n)&&(n=parseFloat(n),n=ps(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ps(u.min,u.max,a);t===u&&(h-=n),t.min=X1(t.min,n,i,h,c),t.max=X1(t.max,n,i,h,c)}function G1(t,n,[i,a,c],u,d){L8(t,n[i],n[a],n[c],n.scale,u,d)}const z8=["x","scaleX","originX"],O8=["y","scaleY","originY"];function q1(t,n,i,a){G1(t.x,n,z8,i?i.x:void 0,a?a.x:void 0),G1(t.y,n,O8,i?i.y:void 0,a?a.y:void 0)}function K1(t){return t.translate===0&&t.scale===1}function O5(t){return K1(t.x)&&K1(t.y)}function Q1(t,n){return t.min===n.min&&t.max===n.max}function $8(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function $5(t,n){return Z1(t.x,n.x)&&Z1(t.y,n.y)}function J1(t){return Zo(t.x)/Zo(t.y)}function ex(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function aa(t){return[t("x"),t("y")]}function I8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const I5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],P8=I5.length,tx=t=>typeof t=="string"?parseFloat(t):t,nx=t=>typeof t=="number"||Et.test(t);function H8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=ps(0,(d=i.opacity)!=null?d:1,V8(a)),t.opacityExit=ps((h=n.opacity)!=null?h:1,0,U8(a))):u&&(t.opacity=ps((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let _=0;_<P8;_++){const x=I5[_];let b=sx(n,x),w=sx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||nx(b)===nx(w)?(t[x]=Math.max(ps(tx(b),tx(w),a),0),(ca.test(w)||ca.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=ps(n.rotate||0,i.rotate||0,a))}function sx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const V8=P5(0,.5,Sb),U8=P5(.5,.95,Oi);function P5(t,n,i){return a=>a<t?0:a>n?1:i(xl(t,n,a))}function H5(t,n,i){const a=mo(t)?t:ar(t);return a.start(Rp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const Y8=(t,n)=>t.depth-n.depth;class W8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){yl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Y8),this.isDirty=!1,this.children.forEach(n)}}function F8(t,n){const i=Qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Aa(a),t(u-n))};return is.setup(a,!0),()=>Aa(a)}function vd(t){return mo(t)?t.get():t}class X8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(yl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(yl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],G8=1e3;let q8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function V5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=i5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",is,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&V5(a)}function U5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=q8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Z8),this.nodes.forEach(oj),this.nodes.forEach(ij),this.nodes.forEach(J8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new W8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!p5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;is.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=F8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ax)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||uj,{onLayoutAnimationStart:k,onLayoutAnimationComplete:M}=y.getProps(),E=!this.targetLayout||!$5(this.targetLayout,w),O=!x&&b;if(this.options.layoutRoot||this.resumeFrom||O||x&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Dp(S,"layout"),onPlay:k,onComplete:M};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(_,O)}else x||ax(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Aa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&V5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(tj),this.nodes.forEach(ox);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nj),this.nodes.forEach(sj),this.nodes.forEach(K8),this.nodes.forEach(Q8)):this.nodes.forEach(ix),this.clearAllSnapshots();const h=Qo.now();Ao.delta=ua(0,1e3/60,h-Ao.timestamp),Ao.timestamp=h,Ao.isProcessing=!0,cm.update.process(Ao),cm.preRender.process(Ao),cm.render.process(Ao),Ao.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ej),this.sharedNodes.forEach(rj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,is.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){is.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zo(this.snapshot.measuredBox.x)&&!Zo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=no()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!O5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,_=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||_)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),dj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return no();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(fj))){const{scroll:_}=this.root;_&&(ra(h.x,_.offset.x),ra(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=no();if(Xi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const _=this.path[y],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Xi(h,d),ra(h.x,x.offset.x),ra(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const y=p||no();Xi(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(y.x,-w.scroll.offset.x),ra(y.y,-w.scroll.offset.y)),jr(w.latestValues)&&bd(y,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return jr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=no();Xi(h,d);for(let y=0;y<this.path.length;y++){const _=this.path[y];if(!jr(_.latestValues))continue;let x;_.instance&&(tp(_.latestValues)&&_.updateSnapshot(),x=no(),Xi(x,_.measurePageBox())),q1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ao.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Ao.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=no(),this.targetWithTransforms=no()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),B8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xi(this.target,this.layout.layoutBox),S5(this.target,this.targetDelta)):Xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||w5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=no(),this.relativeTargetOrigin=no(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Xi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ao.timestamp&&(p=!1),p)return;const{layout:y,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||_))return;Xi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;c8(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=no());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ex(this.projectionDelta.x,this.prevProjectionDelta.x)||!ex(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pl(),this.projectionDelta=pl(),this.projectionDeltaWithTransform=pl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},_={...this.latestValues},x=pl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=no(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,M=this.getStack(),E=!M||M.members.length<=1,O=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some(cj));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const G=N/1e3;rx(x.x,d.x,G),rx(x.y,d.y,G),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),lj(this.relativeTarget,this.relativeTargetOrigin,b,G),L&&$8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=no()),Xi(L,this.relativeTarget)),k&&(this.animationValues=_,H8(_,y,this.latestValues,G,O,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Aa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=is.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ar(0)),this.motionValue.jump(0,!1),this.currentAnimation=H5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(G8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:_}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&Y5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||no();const x=Zo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Zo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Xi(h,p),bd(h,_),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new X8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&ym("z",d,y,this.animationValues);for(let _=0;_<gm.length;_++)ym(`rotate${gm[_]}`,d,y,this.animationValues),ym(`skew${gm[_]}`,d,y,this.animationValues);d.render();for(const _ in y)d.setStaticValue(_,y[_]),this.animationValues&&(this.animationValues[_]=y[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=I8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(k=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=y===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const M in sp){if(_[M]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:L}=sp[M],N=x==="none"?_[M]:E(_[M],y);if(O){const G=O.length;for(let V=0;V<G;V++)d[O[V]]=N}else L?this.options.visualElement.renderState.vars[M]=N:d[M]=N}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ox),this.root.sharedNodes.clear()}}}function K8(t){t.updateLayout()}function Q8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else Y5(u,n.layoutBox,a)&&aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=pl();kc(h,a,n.layoutBox);const p=pl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!O5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=no();Bd(k,n.layoutBox,b.layoutBox,S);const M=no();Bd(M,a,w.layoutBox,S),$5(k,M)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function Z8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function J8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ej(t){t.clearSnapshot()}function ox(t){t.clearMeasurements()}function tj(t){t.isLayoutDirty=!0,t.updateLayout()}function ix(t){t.isLayoutDirty=!1}function nj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function sj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ax(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function oj(t){t.resolveTargetDelta()}function ij(t){t.calcProjection()}function aj(t){t.resetSkewAndRotation()}function rj(t){t.removeLeadSnapshot()}function rx(t,n,i){t.translate=ps(n.translate,0,i),t.scale=ps(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function lx(t,n,i,a){t.min=ps(n.min,i.min,a),t.max=ps(n.max,i.max,a)}function lj(t,n,i,a){lx(t.x,n.x,i.x,a),lx(t.y,n.y,i.y,a)}function cj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const uj={duration:.45,ease:[.4,0,.1,1]},cx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ux=cx("applewebkit/")&&!cx("chrome/")?Math.round:Oi;function dx(t){t.min=ux(t.min),t.max=ux(t.max)}function dj(t){dx(t.x),dx(t.y)}function Y5(t,n,i){return t==="position"||t==="preserve-aspect"&&!R8(J1(n),J1(i),.2)}function fj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const hj=U5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},W5=U5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new hj({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Vd=g.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function fx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function mj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=fx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():fx(t[c],null)}}}}function pj(...t){return g.useCallback(mj(...t),t)}class _j extends g.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function gj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=g.useId(),h=g.useRef(null),p=g.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=g.useContext(Vd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=pj(h,_);return g.useInsertionEffect(()=>{const{width:S,height:k,top:M,left:E,right:O,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!k)return;const N=i==="left"?`left: ${E}`:`right: ${O}`,G=a==="bottom"?`bottom: ${L}`:`top: ${M}`;h.current.dataset.motionPopId=d;const V=document.createElement("style");y&&(V.nonce=y);const K=c!=null?c:document.head;return K.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${N}px !important;
            ${G}px !important;
          }
        `),()=>{var H;(H=h.current)==null||H.removeAttribute("data-motion-pop-id"),K.contains(V)&&K.removeChild(V)}},[n]),l.jsx(_j,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:g.cloneElement(t,{ref:x})})}const yj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const _=Lc(xj),x=g.useId();let b=!0,w=g.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const k of _.values())if(!k)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),g.useMemo(()=>{_.forEach((S,k)=>_.set(k,!1))},[i]),g.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(gj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(Od.Provider,{value:w,children:t})};function xj(){return new Map}function F5(t=!0){const n=g.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=g.useId();g.useEffect(()=>{if(t)return c(u)},[t]);const d=g.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function hx(t){const n=[];return g.Children.forEach(t,i=>{g.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[_,x]=F5(d),b=g.useMemo(()=>hx(t),[t]),w=d&&!_?[]:b.map(rd),S=g.useRef(!0),k=g.useRef(b),M=Lc(()=>new Map),E=g.useRef(new Set),[O,L]=g.useState(b),[N,G]=g.useState(b);yp(()=>{S.current=!1,k.current=b;for(let H=0;H<N.length;H++){const J=rd(N[H]);w.includes(J)?(M.delete(J),E.current.delete(J)):M.get(J)!==!0&&M.set(J,!1)}},[N,w.length,w.join("-")]);const V=[];if(b!==O){let H=[...b];for(let J=0;J<N.length;J++){const ie=N[J],se=rd(ie);w.includes(se)||(H.splice(J,0,ie),V.push(ie))}return u==="wait"&&V.length&&(H=V),G(hx(H)),L(b),null}const{forceRender:K}=g.useContext(gp);return l.jsx(l.Fragment,{children:N.map(H=>{const J=rd(H),ie=d&&!_?!1:b===N||w.includes(J),se=()=>{if(E.current.has(J))return;if(M.has(J))E.current.add(J),M.set(J,!0);else return;let Me=!0;M.forEach(Ue=>{Ue||(Me=!1)}),Me&&(K==null||K(),G(k.current),d&&(x==null||x()),a&&a())};return l.jsx(yj,{isPresent:ie,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:ie?void 0:se,anchorX:h,anchorY:p,children:H},J)})})},X5=g.createContext({strict:!1}),mx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let px=!1;function bj(){if(px)return;const t={};for(const n in mx)t[n]={isEnabled:i=>mx[n].some(a=>!!i[a])};y5(t),px=!0}function G5(){return bj(),a8()}function vj(t){const n=G5();for(const i in t)n[i]={...n[i],...t[i]};y5(n)}const wj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||wj.has(t)}let q5=t=>!Ld(t);function Sj(t){typeof t=="function"&&(q5=n=>n.startsWith("on")?!Ld(n):t(n))}try{Sj(require("@emotion/is-prop-valid").default)}catch{}function Cj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||mo(t[c])||(q5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=g.createContext({});function kj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function jj(t){const{initial:n,animate:i}=kj(t,g.useContext(Yd));return g.useMemo(()=>({initial:n,animate:i}),[_x(n),_x(i)])}function _x(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function K5(t,n,i){for(const a in n)!mo(n[a])&&!j5(a,i)&&(t[a]=n[a])}function Mj({transformTemplate:t},n){return g.useMemo(()=>{const i=Wp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Ej(t,n){const i=t.style||{},a={};return K5(a,i,t),Object.assign(a,Mj(t,n)),a}function Tj(t,n){const i={},a=Ej(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const Q5=()=>({...Wp(),attrs:{}});function Aj(t,n,i,a){const c=g.useMemo(()=>{const u=Q5();return E5(u,n,A5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};K5(u,t.style,t),c.style={...u,...c.style}}return c}const Nj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(Nj.indexOf(t)>-1||/[A-Z]/u.test(t))}function Dj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?Aj:Tj)(n,a,c,t),y=Cj(n,typeof t=="string",u),_=t!==g.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=g.useMemo(()=>mo(x)?x.get():x,[x]);return g.createElement(t,{..._,children:b})}function Rj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Bj(i,a,c,t),renderState:n()}}function Bj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=_5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:k,transition:M,...E}=S;for(const O in E){let L=E[O];if(Array.isArray(L)){const N=_?L.length-1:0;L=L[N]}L!==null&&(c[O]=L)}for(const O in k)c[O]=k[O]}}}return c}const Z5=t=>(n,i)=>{const a=g.useContext(Yd),c=g.useContext(Od),u=()=>Rj(t,n,a,c);return i?u():Lc(u)},Lj=Z5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),zj=Z5({scrapeMotionValuesFromProps:N5,createRenderState:Q5}),Oj=Symbol.for("motionComponentSymbol");function $j(t,n,i){const a=g.useRef(i);g.useInsertionEffect(()=>{a.current=i});const c=g.useRef(null);return g.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const J5=g.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Ij(t,n,i,a,c,u){var L,N;const{visualElement:d}=g.useContext(Yd),h=g.useContext(X5),p=g.useContext(Od),y=g.useContext(Vd),_=y.reducedMotion,x=y.skipAnimations,b=g.useRef(null),w=g.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=g.useContext(J5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Pj(b.current,i,c,k);const M=g.useRef(!1);g.useInsertionEffect(()=>{S&&M.current&&S.update(i,p)});const E=i[o5],O=g.useRef(!!E&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,E))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,E)));return yp(()=>{w.current=!0,S&&(M.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),O.current&&S.animationState&&S.animationState.animateChanges())}),g.useEffect(()=>{S&&(!O.current&&S.animationState&&S.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var G;(G=window.MotionHandoffMarkAsComplete)==null||G.call(window,E)}),O.current=!1),S.enteringChildren=void 0)}),S}function Pj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:e2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:_})}function e2(t){if(t)return t.options.allowProjection!==!1?t.projection:e2(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,_;a&&vj(a);const u=i?i==="svg":Fp(t),d=u?zj:Lj;function h(x,b){let w;const S={...g.useContext(Vd),...x,layoutId:Hj(x)},{isStatic:k}=S,M=jj(x),E=d(x,k);if(!k&&typeof window<"u"){Vj();const O=Uj(S);w=O.MeasureLayout,M.visualElement=Ij(t,E,S,c,O.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:M,children:[w&&M.visualElement?l.jsx(w,{visualElement:M.visualElement,...S}):null,Dj(t,x,$j(E,M.visualElement,b),E,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(y=t.displayName)!=null?y:t.name)!=null?_:""})`}`;const p=g.forwardRef(h);return p[Oj]=t,p}function Hj({layoutId:t}){const n=g.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function Vj(t,n){g.useContext(X5).strict}function Uj(t){const n=G5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Yj(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const Wj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new D5(n):new M5(n,{allowProjection:t!==g.Fragment})};class Fj extends rr{constructor(n){super(n),n.animationState||(n.animationState=M8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Xj=0;class Gj extends rr{constructor(){super(...arguments),this.id=Xj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const qj={animation:{Feature:Fj},exit:{Feature:Gj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Kj=t=>n=>Pp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,Kj(i),a)}const t2=({current:t})=>t?t.ownerDocument.defaultView:null,gx=(t,n)=>Math.abs(t-n);function Qj(t,n){const i=gx(t.x,n.x),a=gx(t.y,n.y);return Math.sqrt(i**2+a**2)}const yx=new Set(["auto","scroll"]);class n2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=vm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=Qj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:M}=w,{timestamp:E}=Ao;this.history.push({...M,timestamp:E});const{onStart:O,onMove:L}=this.handlers;S||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),is.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:M,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=vm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,O),M&&M(w,O)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:_}=y,{timestamp:x}=Ao;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,vm(y,this.history)),this.removeListeners=zc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(yx.has(a.overflowX)||yx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),is.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Aa(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function xx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:xx(t,s2(n)),offset:xx(t,Zj(n)),velocity:Jj(n,.1)}}function Zj(t){return t[0]}function s2(t){return t[t.length-1]}function Jj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=s2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>di(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>di(n)*2&&(a=t[1]);const u=zi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function eM(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ps(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ps(i,t,a.max):Math.min(t,i)),t}function bx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function tM(t,{top:n,left:i,bottom:a,right:c}){return{x:bx(t.x,i,c),y:bx(t.y,n,a)}}function vx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function nM(t,n){return{x:vx(t.x,n.x),y:vx(t.y,n.y)}}function sM(t,n){let i=.5;const a=Zo(t),c=Zo(n);return c>a?i=xl(n.min,n.max-a,t.min):a>c&&(i=xl(t.min,t.max-c,n.min)),ua(0,1,i)}function oM(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function iM(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:wx(t,"left","right"),y:wx(t,"top","bottom")}}function wx(t,n,i){return{min:Sx(t,n),max:Sx(t,i)}}function Sx(t,n){return typeof t=="number"?t:t[n]||0}const aM=new WeakMap;class rM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=no(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ok(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(E=>{let O=this.getAxisMotionValue(E).get()||0;if(ca.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[E];N&&(O=Zo(N)*(parseFloat(O)/100))}}this.originPoint[E]=O}),k&&is.update(()=>k(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:M}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=b;if(S&&this.currentDirection===null){this.currentDirection=cM(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),M&&is.update(()=>M(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new n2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:t2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&is.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=eM(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=tM(a.layoutBox,n):this.constraints=!1,this.elastic=iM(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=oM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=u8(a,c.root,this.visualElement.getTransformPagePoint());let d=nM(c.layout.layoutBox,u);if(i){const h=i(r8(d));this.hasMutatedConstraints=!!h,h&&(d=v5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=aa(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){aa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){aa(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ps(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=sM({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ps(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;aM.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&Uk(b);_&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=lM(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),is.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:_})=>{this.isDragging&&_&&(aa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Cx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function lM(t,n,i){const a=N1(t,Cx(i)),c=N1(n,Cx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function cM(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class uM extends rr{constructor(n){super(n),this.removeGroupControls=Oi,this.removeListeners=Oi,this.controls=new rM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Oi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&is.update(()=>t(n,i),!1,!0)};class dM extends rr{constructor(){super(...arguments),this.removePointerDownListener=Oi}onPointerDown(n){this.session=new n2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:t2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&is.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class fM extends g.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||is.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function o2(t){const[n,i]=F5(),a=g.useContext(gp);return l.jsx(fM,{...t,layoutGroup:a,switchLayoutGroup:g.useContext(J5),isPresent:n,safeToRemove:i})}const hM={pan:{Feature:dM},drag:{Feature:uM,ProjectionNode:W5,MeasureLayout:o2}};function kx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&is.postRender(()=>u(n,Ic(n)))}class mM extends rr{mount(){const{current:n}=this.node;n&&(this.unmount=Ik(n,(i,a)=>(kx(this.node,a,"Start"),c=>kx(this.node,c,"End"))))}unmount(){}}class pM extends rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&is.postRender(()=>u(n,Ic(n)))}class _M extends rr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Wk(n,(c,u)=>(jx(this.node,u,"Start"),(d,{success:h})=>jx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Cm=new WeakMap,gM=t=>{const n=ap.get(t.target);n&&n(t)},yM=t=>{t.forEach(gM)};function xM({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(yM,{root:t,...n})),a[c]}function bM(t,n,i){const a=xM(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const vM={some:0,all:1};class wM extends rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:vM[c]},h=y=>{const{isIntersecting:_}=y;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(y)};this.stopObserver=bM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(SM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function SM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const CM={inView:{Feature:wM},tap:{Feature:_M},focus:{Feature:pM},hover:{Feature:mM}},kM={layout:{ProjectionNode:W5,MeasureLayout:o2}},jM={...qj,...CM,...hM,...kM},ui=Yj(jM,Wj);function rp(t){const n=Lc(()=>ar(t)),{isStatic:i}=g.useContext(Vd);if(i){const[,a]=g.useState(t);g.useEffect(()=>n.on("change",a),[])}return n}function i2(t,n){const i=rp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>is.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Aa(a)}}),i}function MM(t){Cc.current=[],t();const n=i2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return MM(t);const u=typeof n=="function"?n:e8(n,i,a),d=Array.isArray(t)?Mx(t,u):Mx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Mx(t,n){const i=Lc(()=>[]);return i2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function a2(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function EM(t,n,i){return t*(n+1)}function Ex(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function TM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(yl(t,c),a--)}}function AM(t,n,i,a,c,u){TM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ps(c,u,a[d]),easing:Mb(i,d)})}function NM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function DM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const RM="easeInOut";function BM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,Ex(x,S.at,_,y));continue}let[k,M,E={}]=S;E.at!==void 0&&(x=Ex(x,E.at,_,y));let O=0;const L=(N,G,V,K=0,H=0)=>{const J=LM(N),{delay:ie=0,times:se=Ub(J),type:Me=n.type||"keyframes",repeat:Ue,repeatType:ee,repeatDelay:de=0,...z}=G;let{ease:re=n.ease||"easeOut",duration:W}=G;const ge=typeof ie=="function"?ie(K,H):ie,Ee=J.length,I=Np(Me)?Me:c==null?void 0:c[Me||"keyframes"];if(Ee<=2&&I){let be=100;if(Ee===2&&$M(J)){const Ie=J[1]-J[0];be=Math.abs(Ie)}const Te={...n,...z};W!==void 0&&(Te.duration=di(W));const Ye=Ib(Te,be,I);re=Ye.ease,W=Ye.duration}W!=null||(W=u);const ue=x+ge;se.length===1&&se[0]===0&&(se[1]=1);const X=se.length-J.length;if(X>0&&Vb(se,X),J.length===1&&J.unshift(null),Ue){W=EM(W,Ue);const be=[...J],Te=[...se];re=Array.isArray(re)?[...re]:[re];const Ye=[...re];for(let Ie=0;Ie<Ue;Ie++){J.push(...be);for(let it=0;it<be.length;it++)se.push(Te[it]+(Ie+1)),re.push(it===0?"linear":Mb(Ye,it-1))}NM(se,Ue)}const le=ue+W;AM(V,J,re,se,ue,le),O=Math.max(ge+W,O),b=Math.max(le,b)};if(mo(k)){const N=Tx(k,h);L(M,E,Ax("default",N))}else{const N=a2(k,M,a,p),G=N.length;for(let V=0;V<G;V++){M=M,E=E;const K=N[V],H=Tx(K,h);for(const J in M)L(M[J],zM(E,J),Ax(J,H),V,G)}}_=x,x+=O}return h.forEach((w,S)=>{for(const k in w){const M=w[k];M.sort(DM);const E=[],O=[],L=[];for(let K=0;K<M.length;K++){const{at:H,value:J,easing:ie}=M[K];E.push(J),O.push(xl(0,b,H)),L.push(ie||"easeOut")}O[0]!==0&&(O.unshift(0),E.unshift(E[0]),L.unshift(RM)),O[O.length-1]!==1&&(O.push(1),E.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const N=d.get(S);N.keyframes[k]=E;const{type:G,...V}=n;N.transition[k]={...V,duration:b,ease:L,times:O,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ax(t,n){return n[t]||(n[t]=[]),n[t]}function LM(t){return Array.isArray(t)?t:[t]}function zM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const OM=t=>typeof t=="number",$M=t=>t.every(OM);function IM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!p5(t)?new D5(n):new M5(n);i.mount(t),Nc.set(t,i)}function PM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new g8(n);i.mount(t),Nc.set(t,i)}function HM(t,n){return mo(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function r2(t,n,i,a){const c=[];if(HM(t,n))c.push(H5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=a2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?IM:PM;Nc.has(p)||y(p);const _=Nc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...zp(_,{...n,transition:x},{}))}}return c}function VM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=ar(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return BM(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...r2(p,d,h))}),a}function UM(t){return Array.isArray(t)&&t.some(Array.isArray)}function YM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(UM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=VM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=r2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new ak(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{yl(n.animations,y)})),y}return a}const Nx=YM();var WM=Object.freeze({}),FM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),M=d.get(k);(M==null?void 0:M.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:WM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],_=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},on=new FM;function XM(t,n,i){const a=g.useId(),c=`${t}-${a}`,u=g.useRef(n),d=JSON.stringify(n);u.current=n;const h=g.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=g.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);g.useEffect(()=>(on.registerPanel(c,t,u.current,p.current),()=>on.unregisterPanel(c)),[c,t]);const _=g.useRef(!1);g.useEffect(()=>{if(!_.current){_.current=!0;return}on.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),g.useEffect(()=>on.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=g.useSyncExternalStore(b=>on.subscribe(c,b),()=>on.getValues(c),()=>on.getValues(c));return l2(n,x,"")}function l2(t,n,i){var c,u,d,h,p,y,_,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const M=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[M])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[M])!=null?u:k;else if(GM(k)||qM(k))a[S]=(d=n[M])!=null?d:k;else if(KM(k))a[S]=(h=n[M])!=null?h:k;else if(QM(k)){const E=(p=k.default)!=null?p:e7(k.options);a[S]=(y=n[M])!=null?y:E}else ZM(k)?a[S]=(x=(_=n[M])!=null?_:k.default)!=null?x:"#000000":JM(k)?a[S]=(w=(b=n[M])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=l2(k,n,M))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function GM(t){return kl(t,"spring")}function qM(t){return kl(t,"easing")}function KM(t){return kl(t,"action")}function QM(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function ZM(t){return kl(t,"color")}function JM(t){return kl(t,"text")}function e7(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,_;const u=on.getValue(t,n),d=(y=i.min)!=null?y:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));on.updateValue(t,n,Sd(p,a))}function t7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function c2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=c2(i.children,n);if(a)return a}}return null}var fd=4;function n7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function s7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=n7(n);return t.key?`${u2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function o7(t){return t.key?`${u2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function u2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var d2=g.createContext({activePanelId:null,activePath:null});function i7({children:t}){const[n,i]=g.useState({activePanelId:null,activePath:null}),a=g.useRef(new Set),c=g.useRef(!1),u=g.useRef(null),d=g.useRef(0),h=g.useCallback(p=>{var y;for(const _ of a.current){const x=on.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((y=S.interaction)!=null?y:"scroll")!==p)continue;const k=c2(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return g.useEffect(()=>{const p=k=>{if(dd())return;const M=k.key.toLowerCase();if((M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){k.preventDefault();const G=M==="arrowright"||M==="arrowup"?1:-1,V=mc(N.control,N.shortcut);pc(N.panelId,N.path,N.control,V,G);return}}const E=a.current.has(M);a.current.add(M);const O=km(k),L=on.resolveShortcutTarget(M,O);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!E&&L.control.type==="toggle")){const N=on.getValue(L.panelId,L.path);on.updateValue(L.panelId,L.path,!N)}E||(u.current=null,d.current=0)},y=k=>{const M=k.key.toLowerCase();if(a.current.delete(M),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let E=!1;for(const O of a.current){const L=km(k),N=on.resolveShortcutTarget(O,L);if(N){i({activePanelId:N.panelId,activePath:N.path}),E=!0;break}}E||i({activePanelId:null,activePath:null})}},_=k=>{var O,L;if(dd())return;const M=km(k);if(a.current.size>0)for(const N of a.current){const G=on.resolveShortcutTarget(N,M);if(!G)continue;const{panelId:V,path:K,control:H}=G;if(((L=(O=H.shortcut)==null?void 0:O.interaction)!=null?L:"scroll")!=="scroll"||H.type!=="slider")continue;k.preventDefault();const ie=mc(H,H.shortcut),se=k.deltaY>0?-1:1;pc(V,K,H,ie,se);return}const E=on.resolveScrollOnlyTargets();for(const{panelId:N,path:G,control:V,shortcut:K}of E){if(V.type!=="slider")continue;k.preventDefault();const H=mc(V,K),J=k.deltaY>0?-1:1;pc(N,G,V,H,J);return}},x=k=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(dd()||a.current.size===0)return;if(c.current){const E=h("drag");if(E&&u.current!==null){const O=k.clientX-u.current;u.current=k.clientX,d.current+=O;const L=mc(E.control,E.shortcut),N=Math.trunc(d.current/fd);N!==0&&(d.current-=N*fd,pc(E.panelId,E.path,E.control,L,N))}return}const M=h("move");if(M){if(u.current===null){u.current=k.clientX;return}const E=k.clientX-u.current;u.current=k.clientX,d.current+=E;const O=mc(M.control,M.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(M.panelId,M.path,M.control,O,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(d2.Provider,{value:n,children:t})}var Gp="M6 9.5L12 15.5L18 9.5",a7="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},r7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],l7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Dx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function zd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=g.useState(i),[y,_]=g.useState(!i),x=g.useRef(null),[b,w]=g.useState(void 0),[S,k]=g.useState(typeof window<"u"?window.innerHeight:800);g.useEffect(()=>{if(!a)return;const O=()=>k(window.innerHeight);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[a]),g.useEffect(()=>{const O=x.current;if(!O)return;const L=new ResizeObserver(()=>{if(h){const N=O.offsetHeight;w(G=>G===N?G:N)}});return L.observe(O),()=>L.disconnect()},[h]);const M=()=>{if(c&&a)return;const O=!h;p(O),_(!O),u==null||u(O)},E=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:M,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Dx.path,fill:"currentColor"}),Dx.circles.map((O,L)=>l.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ui.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Gp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:O=>O.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ui.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:E});const O=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ui.div,{className:"dialkit-panel-inner",style:O,onClick:h?void 0:M,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:E})}return E}var c7=3,u7=32,d7=200,f7=8;function Io({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var dt;const y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=g.useRef(null),w=g.useRef(null),[S,k]=g.useState(!1),[M,E]=g.useState(!1),[O,L]=g.useState(!1),[N,G]=g.useState(!1),[V,K]=g.useState(!1),[H,J]=g.useState(!1),[ie,se]=g.useState(""),Me=g.useRef(null),Ue=g.useRef(null),ee=g.useRef(!0),de=g.useRef(null),z=g.useRef(null),re=g.useRef(1),W=(n-a)/(c-a)*100,ge=S||O,Ee=rp(W),I=ud(Ee,P=>`${P}%`),ue=ud(Ee,P=>`max(5px, calc(${P}% - 9px))`),X=rp(0),le=ud(X,P=>`calc(100% + ${Math.abs(P)}px)`),be=ud(X,P=>P<0?P:0);g.useEffect(()=>{!S&&!de.current&&Ee.jump(W)},[W,S,Ee]);const Te=g.useCallback(P=>{const q=z.current;if(!q)return n;const ke=(P-q.left)/re.current,nt=y.current?y.current.offsetWidth:q.width,Qe=Math.max(0,Math.min(1,ke/nt)),je=a+Qe*(c-a);return Math.max(a,Math.min(c,je))},[a,c,n]),Ye=g.useCallback(P=>(P-a)/(c-a)*100,[a,c]),Ie=g.useCallback((P,q)=>{const fe=z.current;if(!fe)return 0;const ke=q<0?fe.left-P:P-fe.right,nt=Math.max(0,ke-u7);return q*f7*Math.sqrt(Math.min(nt/d7,1))},[]),it=g.useCallback(P=>{if(!H&&(P.preventDefault(),P.target.setPointerCapture(P.pointerId),Ue.current={x:P.clientX,y:P.clientY},ee.current=!0,k(!0),y.current)){z.current=y.current.getBoundingClientRect();const q=y.current.offsetWidth;re.current=z.current.width/q}},[H]),Bt=g.useCallback(P=>{if(!S||!Ue.current)return;const q=P.clientX-Ue.current.x,fe=P.clientY-Ue.current.y,ke=Math.sqrt(q*q+fe*fe);if(ee.current&&ke>c7&&(ee.current=!1,E(!0)),!ee.current){const nt=z.current;nt&&(P.clientX<nt.left?X.jump(Ie(P.clientX,-1)):P.clientX>nt.right?X.jump(Ie(P.clientX,1)):X.jump(0));const Qe=Te(P.clientX),je=Ye(Qe);de.current&&(de.current.stop(),de.current=null),Ee.jump(je),i(Sd(Qe,u))}},[S,Te,Ye,i,Ee,X,Ie]),tn=g.useCallback(P=>{if(S){if(ee.current){const q=Te(P.clientX),ke=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((q-a)/u)*u)):t7(q,a,c),nt=Ye(ke);de.current&&de.current.stop(),de.current=Nx(Ee,nt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{de.current=null}}),i(Sd(ke,u))}X.get()!==0&&Nx(X,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),E(!1),Ue.current=null}},[S,Te,Ye,i,a,c,Ee,X]);g.useEffect(()=>(N&&!H&&!V?Me.current=setTimeout(()=>{K(!0)},800):!N&&!H&&(Me.current&&(clearTimeout(Me.current),Me.current=null),K(!1)),()=>{Me.current&&clearTimeout(Me.current)}),[N,H,V]),g.useEffect(()=>{H&&x.current&&(x.current.focus(),x.current.select())},[H]);const Ge=P=>{se(P.target.value)},rt=()=>{const P=parseFloat(ie);if(!isNaN(P)){const q=Math.max(a,Math.min(c,P));i(Sd(q,u))}J(!1),G(!1),K(!1)},Ut=P=>{V&&(P.stopPropagation(),P.preventDefault(),J(!0),se(n.toFixed(lp(u))))},Ze=P=>{P.key==="Enter"?rt():P.key==="Escape"&&(J(!1),G(!1))},vt=()=>{rt()},xe=n.toFixed(lp(u)),te=8,Ne=10,Ve=10;let Xe=30,We=78;const Je=(dt=y.current)==null?void 0:dt.offsetWidth;Je&&Je>0&&(b.current&&(Xe=(Ne+b.current.offsetWidth+te)/Je*100),w.current&&(We=(Je-Ve-w.current.offsetWidth-te)/Je*100));const mt=W<Xe||W>We,_t=ge?mt?.1:M?.9:.5:0,Dt=(c-a)/u,Kt=Dt<=10?Array.from({length:Dt-1},(P,q)=>{const fe=(q+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},q)}):Array.from({length:9},(P,q)=>{const fe=(q+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},q)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ui.div,{ref:_,className:`dialkit-slider ${ge?"dialkit-slider-active":""}`,onPointerDown:it,onPointerMove:Bt,onPointerUp:tn,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:le,x:be},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Kt}),l.jsx(ui.div,{className:"dialkit-slider-fill",style:{width:I}}),l.jsx(ui.div,{className:"dialkit-slider-handle",style:{left:ue,y:"-50%"},animate:{opacity:_t,scaleX:ge?1:.25,scaleY:ge&&mt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:s7(h)})]}),H?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ie,onChange:Ge,onKeyDown:Ze,onBlur:vt,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${V?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>G(!0),onMouseLeave:()=>G(!1),onClick:Ut,onMouseDown:P=>V&&P.stopPropagation(),style:{cursor:V?"text":"default"},children:xe})]})})}function qp({options:t,value:n,onChange:i}){const a=g.useRef(null),c=g.useRef(!1),[u,d]=g.useState(null),h=g.useCallback(()=>{const y=a.current;if(!y)return;const _=y.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);g.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const _=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(_),children:y.label},y.value)})]})}function h7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:o7(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function m7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function f2({spring:t,isSimpleMode:n}){var k,M,E,O,L;let c,u,d;if(n){const N=(k=t.visualDuration)!=null?k:.3,G=(M=t.bounce)!=null?M:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-G)*Math.sqrt(c*d)}else c=(E=t.stiffness)!=null?E:400,u=(O=t.damping)!=null?O:17,d=(L=t.mass)!=null?L:1;const h=2,p=m7(c,u,d,h),y=p.map(([,N])=>N),_=Math.min(...y),b=Math.max(...y)-_,w=p.map(([N,G],V)=>{const K=N/h*256,J=140-((G-_)/(b||1)*140*.6+140*.2);return`${V===0?"M":"L"} ${K} ${J}`}).join(" "),S=[];for(let N=1;N<4;N++){const G=64*N,V=140/4*N;S.push(l.jsx("line",{x1:G,y1:0,x2:G,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:V,x2:256,y2:V,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function p7({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=g.useSyncExternalStore(k=>on.subscribe(t,k),()=>on.getSpringMode(t,n),()=>on.getSpringMode(t,n)),d=u==="simple",h=g.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{on.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},y=(k,M)=>{if(d){const{stiffness:E,damping:O,mass:L,...N}=a;c({...N,[k]:M})}else{const{visualDuration:E,bounce:O,...L}=a;c({...L,[k]:M})}};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(f2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>y("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Io,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>y("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>y("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Io,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>y("damping",k),min:1,max:100,step:1}),l.jsx(Io,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>y("mass",k),min:.1,max:10,step:.1})]})]})})}function _7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function g7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,M,E,O;const u=g.useSyncExternalStore(L=>on.subscribe(t,L),()=>on.getTransitionMode(t,n),()=>on.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=g.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=L=>{on.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,N)=>{if(h){const{stiffness:G,damping:V,mass:K,...H}=y;c({...H,[L]:N})}else{const{visualDuration:G,bounce:V,...K}=y;c({...K,[L]:N})}},w=(L,N)=>{const G=[..._.ease];G[L]=N,c({..._,ease:G})};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(_7,{easing:_}):l.jsx(f2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"x1",value:_.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Io,{label:"y1",value:_.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Io,{label:"x2",value:_.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Io,{label:"y2",value:_.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Io,{label:"Duration",value:_.duration,onChange:L=>c({..._,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(x7,{ease:_.ease,onChange:L=>c({..._,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Io,{label:"Bounce",value:(k=y.bounce)!=null?k:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Stiffness",value:(M=y.stiffness)!=null?M:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Io,{label:"Damping",value:(E=y.damping)!=null?E:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Io,{label:"Mass",value:(O=y.mass)!=null?O:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Rx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function y7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function x7({ease:t,onChange:n}){const[i,a]=g.useState(!1),[c,u]=g.useState(""),d=()=>{u(Rx(t)),a(!0)},h=()=>{const y=y7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Rx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function b7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function v7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function w7(t){return t.map(n=>typeof n=="string"?{value:n,label:v7(n)}:n)}function S7({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState(null),[_,x]=g.useState(null),b=w7(i),w=b.find(M=>M.value===n),S=g.useCallback(()=>{const M=d.current;if(!M)return;const E=M.getBoundingClientRect(),O=8+b.length*36,L=window.innerHeight-E.bottom-4,N=L<O&&E.top>L;x({top:N?E.top-4:E.bottom+4,left:E.left,width:E.width,above:N})},[b.length]);return g.useEffect(()=>{var E;const M=(E=d.current)==null?void 0:E.closest(".dialkit-root");y(M!=null?M:document.body)},[]),g.useEffect(()=>{c&&S()},[c,S]),g.useEffect(()=>{if(!c)return;const M=E=>{const O=E.target;d.current&&!d.current.contains(O)&&h.current&&!h.current.contains(O)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(ui.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]})]}),p&&Bc.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ui.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(M=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(M.value===n),onClick:()=>{a(M.value),u(!1)},children:M.label},M.value))})}),p)]})}var C7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function k7({label:t,value:n,onChange:i}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useRef(null);g.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),C7.test(u)?i(u):d(n)}function y(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?j7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function j7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function M7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(E=>E.id===i),b=g.useCallback(()=>{var O;if(!_)return;const E=(O=d.current)==null?void 0:O.getBoundingClientRect();E&&y({top:E.bottom+4,left:E.left,width:E.width}),u(!0)},[_]),w=g.useCallback(()=>u(!1),[]),S=g.useCallback(()=>{c?w():b()},[c,b,w]);g.useEffect(()=>{if(!c)return;const E=O=>{var N,G;const L=O.target;(N=d.current)!=null&&N.contains(L)||(G=h.current)!=null&&G.contains(L)||w()};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c,w]);const k=E=>{E?on.loadPreset(t,E):on.clearActivePreset(t),w()},M=(E,O)=>{E.stopPropagation(),on.deletePreset(t,O)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ui.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]}),Bc.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ui.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(E=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(E.id===i),onClick:()=>k(E.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:E.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:O=>M(O,E.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l7.map((O,L)=>l.jsx("path",{d:O},L))})})]},E.id))]})}),document.body)]})}function E7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useContext(d2);Object.keys(t.shortcuts).length>0;const p=g.useSyncExternalStore(M=>on.subscribe(t.id,M),()=>on.getValues(t.id),()=>on.getValues(t.id)),y=on.getPresets(t.id),_=on.getActivePresetId(t.id),x=()=>{const M=y.length+2;on.savePreset(t.id,`Version ${M}`)},b=()=>{const M=JSON.stringify(p,null,2),E=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${M}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(E),c(!0),setTimeout(()=>c(!1),1500)},w=M=>{var O,L,N;const E=p[M.path];switch(M.type){case"slider":return l.jsx(Io,{label:M.label,value:E,onChange:G=>on.updateValue(t.id,M.path,G),min:M.min,max:M.max,step:M.step,shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"toggle":return l.jsx(h7,{label:M.label,checked:E,onChange:G=>on.updateValue(t.id,M.path,G),shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"spring":return l.jsx(p7,{panelId:t.id,path:M.path,label:M.label,spring:E,onChange:G=>on.updateValue(t.id,M.path,G)},M.path);case"transition":return l.jsx(g7,{panelId:t.id,path:M.path,label:M.label,value:E,onChange:G=>on.updateValue(t.id,M.path,G)},M.path);case"folder":return l.jsx(zd,{title:M.label,defaultOpen:(O=M.defaultOpen)!=null?O:!0,children:(L=M.children)==null?void 0:L.map(w)},M.path);case"text":return l.jsx(b7,{label:M.label,value:E,onChange:G=>on.updateValue(t.id,M.path,G),placeholder:M.placeholder},M.path);case"select":return l.jsx(S7,{label:M.label,value:E,options:(N=M.options)!=null?N:[],onChange:G=>on.updateValue(t.id,M.path,G)},M.path);case"color":return l.jsx(k7,{label:M.label,value:E,onChange:G=>on.updateValue(t.id,M.path,G)},M.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>on.triggerAction(t.id,M.path),children:M.label},M.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(ui.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r7.map((M,E)=>l.jsx("path",{d:M},E))})}),l.jsx(M7,{panelId:t.id,presets:y,activePresetId:_,onAdd:x}),l.jsx(ui.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ui.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:a7})},"check"):l.jsxs(ui.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(zd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var T7=typeof process<"u"?!1:!(typeof import.meta<"u");function A7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=T7}){if(!c)return null;const[u,d]=g.useState([]),[h,p]=g.useState(!1),y=i==="inline",_=g.useRef(null),[x,b]=g.useState(null),[w,S]=g.useState(t),k=g.useRef(null),M=g.useRef(!1),E=g.useRef(null),O=g.useRef(!1);g.useEffect(()=>(p(!0),d(on.getPanels()),on.subscribeGlobal(()=>{d(on.getPanels())})),[]),g.useEffect(()=>{if(!_.current||y)return;const H=new MutationObserver(()=>{var se;const J=(se=_.current)==null?void 0:se.querySelector(".dialkit-panel-inner");if(!J)return;if(J.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const Me=x.x+21,Ue=window.innerWidth/2;S(Me<Ue?"top-left":"top-right")}else S(t);b(null)}});return H.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>H.disconnect()},[y,x,t]);const L=g.useCallback(H=>{var se;const J=(se=_.current)==null?void 0:se.querySelector(".dialkit-panel-inner");if(!J||J.getAttribute("data-collapsed")!=="true")return;const ie=_.current.getBoundingClientRect();E.current={pointerX:H.clientX,pointerY:H.clientY,elX:ie.left,elY:ie.top},O.current=!1,M.current=!0,H.target.setPointerCapture(H.pointerId)},[]),N=g.useCallback(H=>{if(!M.current||!E.current)return;const J=H.clientX-E.current.pointerX,ie=H.clientY-E.current.pointerY;!O.current&&Math.abs(J)+Math.abs(ie)<4||(O.current=!0,b({x:E.current.elX+J,y:E.current.elY+ie}))},[]),G=g.useCallback(H=>{var J;if(M.current&&(M.current=!1,E.current=null,O.current)){H.stopPropagation();const ie=(J=_.current)==null?void 0:J.querySelector(".dialkit-panel-inner");if(ie){const se=Me=>{Me.stopPropagation()};ie.addEventListener("click",se,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const V=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,K=l.jsx(i7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:V,onPointerDown:y?void 0:L,onPointerMove:y?void 0:N,onPointerUp:y?void 0:G,children:u.map(H=>l.jsx(E7,{panel:H,defaultOpen:y||n,inline:y},H.id))})})});return y?K:Bc.createPortal(K,document.body)}const N7=()=>(XM("Git Visualizer",{preview:[1,0,1]}),null),D7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(N7,{}),l.jsx(A7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(R3,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Iv.createRoot(document.getElementById("root")).render(l.jsx(D7,{children:l.jsx(_S,{})}));

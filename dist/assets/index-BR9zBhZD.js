(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Ox(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Dv(){if(ty)return oc;ty=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var ny;function Rv(){return ny||(ny=1,Oh.exports=Dv()),Oh.exports}var l=Rv(),zh={exports:{}},ic={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Bv(){return sy||(sy=1,(function(t){function n(I,se){var W=I.length;I.push(se);e:for(;0<W;){var he=W-1>>>1,Me=I[he];if(0<c(Me,se))I[he]=se,I[W]=Me,W=he;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var se=I[0],W=I.pop();if(W!==se){I[0]=W;e:for(var he=0,Me=I.length,$=Me>>>1;he<$;){var ue=2*(he+1)-1,X=I[ue],de=ue+1,be=I[de];if(0>c(X,W))de<Me&&0>c(be,X)?(I[he]=be,I[de]=W,he=de):(I[he]=X,I[ue]=W,he=ue);else if(de<Me&&0>c(be,W))I[he]=be,I[de]=W,he=de;else break e}}return se}function c(I,se){var W=I.sortIndex-se.sortIndex;return W!==0?W:I.id-se.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],_=1,x=null,b=3,w=!1,S=!1,j=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var se=i(y);se!==null;){if(se.callback===null)a(y);else if(se.startTime<=I)a(y),se.sortIndex=se.expirationTime,n(p,se);else break;se=i(y)}}function G(I){if(j=!1,D(I),!S)if(i(p)!==null)S=!0,V||(V=!0,Ee());else{var se=i(y);se!==null&&fe(G,se.startTime-I)}}var V=!1,q=-1,H=5,J=-1;function ae(){return M?!0:!(t.unstable_now()-J<H)}function oe(){if(M=!1,V){var I=t.unstable_now();J=I;var se=!0;try{e:{S=!1,j&&(j=!1,O(q),q=-1),w=!0;var W=b;try{t:{for(D(I),x=i(p);x!==null&&!(x.expirationTime>I&&ae());){var he=x.callback;if(typeof he=="function"){x.callback=null,b=x.priorityLevel;var Me=he(x.expirationTime<=I);if(I=t.unstable_now(),typeof Me=="function"){x.callback=Me,D(I),se=!0;break t}x===i(p)&&a(p),D(I)}else a(p);x=i(p)}if(x!==null)se=!0;else{var $=i(y);$!==null&&fe(G,$.startTime-I),se=!1}}break e}finally{x=null,b=W,w=!1}se=void 0}}finally{se?Ee():V=!1}}}var Ee;if(typeof L=="function")Ee=function(){L(oe)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ee=Ve.port2;Ve.port1.onmessage=oe,Ee=function(){ee.postMessage(null)}}else Ee=function(){E(oe,0)};function fe(I,se){q=E(function(){I(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(I){switch(b){case 1:case 2:case 3:var se=3;break;default:se=b}var W=b;b=se;try{return I()}finally{b=W}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(I,se){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=b;b=I;try{return se()}finally{b=W}},t.unstable_scheduleCallback=function(I,se,W){var he=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?he+W:he):W=he,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=W+Me,I={id:_++,callback:se,priorityLevel:I,startTime:W,expirationTime:Me,sortIndex:-1},W>he?(I.sortIndex=W,n(y,I),i(p)===null&&I===i(y)&&(j?(O(q),q=-1):j=!0,fe(G,W-he))):(I.sortIndex=Me,n(p,I),S||w||(S=!0,V||(V=!0,Ee()))),I},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(I){var se=b;return function(){var W=b;b=se;try{return I.apply(this,arguments)}finally{b=W}}}})(Ih)),Ih}var oy;function Lv(){return oy||(oy=1,$h.exports=Bv()),$h.exports}var Ph={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function Ov(){if(iy)return nn;iy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w($){return $===null||typeof $!="object"?null:($=b&&$[b]||$["@@iterator"],typeof $=="function"?$:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function E($,ue,X){this.props=$,this.context=ue,this.refs=M,this.updater=X||S}E.prototype.isReactComponent={},E.prototype.setState=function($,ue){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,ue,"setState")},E.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function O(){}O.prototype=E.prototype;function L($,ue,X){this.props=$,this.context=ue,this.refs=M,this.updater=X||S}var D=L.prototype=new O;D.constructor=L,j(D,E.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function J($,ue,X){var de=X.ref;return{$$typeof:t,type:$,key:ue,ref:de!==void 0?de:null,props:X}}function ae($,ue){return J($.type,ue,$.props)}function oe($){return typeof $=="object"&&$!==null&&$.$$typeof===t}function Ee($){var ue={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(X){return ue[X]})}var Ve=/\/+/g;function ee($,ue){return typeof $=="object"&&$!==null&&$.key!=null?Ee(""+$.key):ue.toString(36)}function fe($){switch($.status){case"fulfilled":return $.value;case"rejected":throw $.reason;default:switch(typeof $.status=="string"?$.then(V,V):($.status="pending",$.then(function(ue){$.status==="pending"&&($.status="fulfilled",$.value=ue)},function(ue){$.status==="pending"&&($.status="rejected",$.reason=ue)})),$.status){case"fulfilled":return $.value;case"rejected":throw $.reason}}throw $}function I($,ue,X,de,be){var Ae=typeof $;(Ae==="undefined"||Ae==="boolean")&&($=null);var Ue=!1;if($===null)Ue=!0;else switch(Ae){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch($.$$typeof){case t:case n:Ue=!0;break;case _:return Ue=$._init,I(Ue($._payload),ue,X,de,be)}}if(Ue)return be=be($),Ue=de===""?"."+ee($,0):de,G(be)?(X="",Ue!=null&&(X=Ue.replace(Ve,"$&/")+"/"),I(be,ue,X,"",function(Ot){return Ot})):be!=null&&(oe(be)&&(be=ae(be,X+(be.key==null||$&&$.key===be.key?"":(""+be.key).replace(Ve,"$&/")+"/")+Ue)),ue.push(be)),1;Ue=0;var Pe=de===""?".":de+":";if(G($))for(var at=0;at<$.length;at++)de=$[at],Ae=Pe+ee(de,at),Ue+=I(de,ue,X,Ae,be);else if(at=w($),typeof at=="function")for($=at.call($),at=0;!(de=$.next()).done;)de=de.value,Ae=Pe+ee(de,at++),Ue+=I(de,ue,X,Ae,be);else if(Ae==="object"){if(typeof $.then=="function")return I(fe($),ue,X,de,be);throw ue=String($),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function se($,ue,X){if($==null)return $;var de=[],be=0;return I($,de,"","",function(Ae){return ue.call(X,Ae,be++)}),de}function W($){if($._status===-1){var ue=$._result;ue=ue(),ue.then(function(X){($._status===0||$._status===-1)&&($._status=1,$._result=X)},function(X){($._status===0||$._status===-1)&&($._status=2,$._result=X)}),$._status===-1&&($._status=0,$._result=ue)}if($._status===1)return $._result.default;throw $._result}var he=typeof reportError=="function"?reportError:function($){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ue=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof $=="object"&&$!==null&&typeof $.message=="string"?String($.message):String($),error:$});if(!window.dispatchEvent(ue))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",$);return}console.error($)},Me={map:se,forEach:function($,ue,X){se($,function(){ue.apply(this,arguments)},X)},count:function($){var ue=0;return se($,function(){ue++}),ue},toArray:function($){return se($,function(ue){return ue})||[]},only:function($){if(!oe($))throw Error("React.Children.only expected to receive a single React element child.");return $}};return nn.Activity=x,nn.Children=Me,nn.Component=E,nn.Fragment=i,nn.Profiler=c,nn.PureComponent=L,nn.StrictMode=a,nn.Suspense=p,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,nn.__COMPILER_RUNTIME={__proto__:null,c:function($){return q.H.useMemoCache($)}},nn.cache=function($){return function(){return $.apply(null,arguments)}},nn.cacheSignal=function(){return null},nn.cloneElement=function($,ue,X){if($==null)throw Error("The argument must be a React element, but you passed "+$+".");var de=j({},$.props),be=$.key;if(ue!=null)for(Ae in ue.key!==void 0&&(be=""+ue.key),ue)!H.call(ue,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ue.ref===void 0||(de[Ae]=ue[Ae]);var Ae=arguments.length-2;if(Ae===1)de.children=X;else if(1<Ae){for(var Ue=Array(Ae),Pe=0;Pe<Ae;Pe++)Ue[Pe]=arguments[Pe+2];de.children=Ue}return J($.type,be,de)},nn.createContext=function($){return $={$$typeof:d,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null},$.Provider=$,$.Consumer={$$typeof:u,_context:$},$},nn.createElement=function($,ue,X){var de,be={},Ae=null;if(ue!=null)for(de in ue.key!==void 0&&(Ae=""+ue.key),ue)H.call(ue,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(be[de]=ue[de]);var Ue=arguments.length-2;if(Ue===1)be.children=X;else if(1<Ue){for(var Pe=Array(Ue),at=0;at<Ue;at++)Pe[at]=arguments[at+2];be.children=Pe}if($&&$.defaultProps)for(de in Ue=$.defaultProps,Ue)be[de]===void 0&&(be[de]=Ue[de]);return J($,Ae,be)},nn.createRef=function(){return{current:null}},nn.forwardRef=function($){return{$$typeof:h,render:$}},nn.isValidElement=oe,nn.lazy=function($){return{$$typeof:_,_payload:{_status:-1,_result:$},_init:W}},nn.memo=function($,ue){return{$$typeof:y,type:$,compare:ue===void 0?null:ue}},nn.startTransition=function($){var ue=q.T,X={};q.T=X;try{var de=$(),be=q.S;be!==null&&be(X,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(V,he)}catch(Ae){he(Ae)}finally{ue!==null&&X.types!==null&&(ue.types=X.types),q.T=ue}},nn.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},nn.use=function($){return q.H.use($)},nn.useActionState=function($,ue,X){return q.H.useActionState($,ue,X)},nn.useCallback=function($,ue){return q.H.useCallback($,ue)},nn.useContext=function($){return q.H.useContext($)},nn.useDebugValue=function(){},nn.useDeferredValue=function($,ue){return q.H.useDeferredValue($,ue)},nn.useEffect=function($,ue){return q.H.useEffect($,ue)},nn.useEffectEvent=function($){return q.H.useEffectEvent($)},nn.useId=function(){return q.H.useId()},nn.useImperativeHandle=function($,ue,X){return q.H.useImperativeHandle($,ue,X)},nn.useInsertionEffect=function($,ue){return q.H.useInsertionEffect($,ue)},nn.useLayoutEffect=function($,ue){return q.H.useLayoutEffect($,ue)},nn.useMemo=function($,ue){return q.H.useMemo($,ue)},nn.useOptimistic=function($,ue){return q.H.useOptimistic($,ue)},nn.useReducer=function($,ue,X){return q.H.useReducer($,ue,X)},nn.useRef=function($){return q.H.useRef($)},nn.useState=function($){return q.H.useState($)},nn.useSyncExternalStore=function($,ue,X){return q.H.useSyncExternalStore($,ue,X)},nn.useTransition=function(){return q.H.useTransition()},nn.version="19.2.4",nn}var ay;function up(){return ay||(ay=1,Ph.exports=Ov()),Ph.exports}var Hh={exports:{}},Io={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function zv(){if(ry)return Io;ry=1;var t=up();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Io.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Io.createPortal=function(p,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,_)},Io.flushSync=function(p){var y=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=_,a.d.f()}},Io.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Io.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Io.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Io.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Io.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Io.preloadModule=function(p,y){if(typeof p=="string")if(y){var _=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Io.requestFormReset=function(p){a.d.r(p)},Io.unstable_batchedUpdates=function(p,y){return p(y)},Io.useFormState=function(p,y,_){return d.H.useFormState(p,y,_)},Io.useFormStatus=function(){return d.H.useHostTransitionStatus()},Io.version="19.2.4",Io}var ly;function zx(){if(ly)return Hh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=zv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function $v(){if(cy)return ic;cy=1;var t=Lv(),n=up(),i=zx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function Ee(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case E:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return s=e.displayName||null,s!==null?s:ee(e.type)||"Memo";case H:s=e._payload,e=e._init;try{return ee(e(s))}catch{}}return null}var fe=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},he=[],Me=-1;function $(e){return{current:e}}function ue(e){0>Me||(e.current=he[Me],he[Me]=null,Me--)}function X(e,s){Me++,he[Me]=e.current,e.current=s}var de=$(null),be=$(null),Ae=$(null),Ue=$(null);function Pe(e,s){switch(X(Ae,s),X(be,e),X(de,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=C0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ue(de),X(de,e)}function at(){ue(de),ue(be),ue(Ae)}function Ot(e){e.memoizedState!==null&&X(Ue,e);var s=de.current,o=k0(s,e.type);s!==o&&(X(be,e),X(de,o))}function Qt(e){be.current===e&&(ue(de),ue(be)),Ue.current===e&&(ue(Ue),ec._currentValue=W)}var Fe,rt;function Ut(e){if(Fe===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Fe=s&&s[1]||"",rt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+e+rt}var Je=!1;function St(e,s){if(!e||Je)return"";Je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(ve){var ye=ve}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(ve){ye=ve}e.call(ze.prototype)}}else{try{throw Error()}catch(ve){ye=ve}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(ve){if(ve&&ye&&typeof ve.stack=="string")return[ve.stack,ye.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Q=v.split(`
`),ge=A.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ge.length&&!ge[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===ge.length)for(r=Q.length-1,f=ge.length-1;1<=r&&0<=f&&Q[r]!==ge[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==ge[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==ge[f]){var Ne=`
`+Q[r].replace(" at new "," at ");return e.displayName&&Ne.includes("<anonymous>")&&(Ne=Ne.replace("<anonymous>",e.displayName)),Ne}while(1<=r&&0<=f);break}}}finally{Je=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Ut(o):""}function xe(e,s){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==s&&s!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return St(e.type,!1);case 11:return St(e.type.render,!1);case 1:return St(e.type,!0);case 31:return Ut("Activity");default:return""}}function ne(e){try{var s="",o=null;do s+=xe(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Te=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,We=t.unstable_cancelCallback,Xe=t.unstable_shouldYield,Ge=t.unstable_requestPaint,ht=t.unstable_now,pt=t.unstable_getCurrentPriorityLevel,At=t.unstable_ImmediatePriority,qt=t.unstable_UserBlockingPriority,dt=t.unstable_NormalPriority,P=t.unstable_LowPriority,K=t.unstable_IdlePriority,me=t.log,ke=t.unstable_setDisableYieldValue,nt=null,Ze=null;function je(e){if(typeof me=="function"&&ke(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(nt,e)}catch{}}var bt=Math.clz32?Math.clz32:gt,qe=Math.log,Pt=Math.LN2;function gt(e){return e>>>=0,e===0?32:31-(qe(e)/Pt|0)|0}var tt=256,Bt=262144,$t=4194304;function Zt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Zt(r):(v&=A,v!==0?f=Zt(v):o||(o=A&~e,o!==0&&(f=Zt(o))))):(A=r&~m,A!==0?f=Zt(A):v!==0?f=Zt(v):o||(o=r&~e,o!==0&&(f=Zt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function lt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Tt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=$t;return $t<<=1,($t&62914560)===0&&($t=4194304),e}function en(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function mt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Q=e.expirationTimes,ge=e.hiddenUpdates;for(o=v&~o;0<o;){var Ne=31-bt(o),ze=1<<Ne;A[Ne]=0,Q[Ne]=-1;var ye=ge[Ne];if(ye!==null)for(ge[Ne]=null,Ne=0;Ne<ye.length;Ne++){var ve=ye[Ne];ve!==null&&(ve.lane&=-536870913)}o&=~ze}r!==0&&cn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function cn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-bt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function Wt(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-bt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Ht(e,s){var o=s&-s;return o=(o&42)!==0?1:ds(o),(o&(e.suspendedLanes|s))!==0?0:o}function ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mn(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function An(e,s){var o=se.p;try{return se.p=e,s()}finally{se.p=o}}var mn=Math.random().toString(36).slice(2),fn="__reactFiber$"+mn,Yn="__reactProps$"+mn,et="__reactContainer$"+mn,ss="__reactEvents$"+mn,Ho="__reactListeners$"+mn,Vo="__reactHandles$"+mn,Xs="__reactResources$"+mn,Is="__reactMarker$"+mn;function di(e){delete e[fn],delete e[Yn],delete e[ss],delete e[Ho],delete e[Vo]}function Ts(e){var s=e[fn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[et]||o[fn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[fn])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function Do(e){if(e=e[fn]||e[et]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function bo(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function vo(e){var s=e[Xs];return s||(s=e[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function xn(e){e[Is]=!0}var vi=new Set,bn={};function gs(e,s){os(e,s),os(e+"Capture",s)}function os(e,s){for(bn[e]=s,e=0;e<s.length;e++)vi.add(s[e])}var ks=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uo={},fs={};function is(e){return Te.call(fs,e)?!0:Te.call(Uo,e)?!1:ks.test(e)?fs[e]=!0:(Uo[e]=!0,!1)}function ys(e,s,o){if(is(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function un(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Pn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function fa(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Yo(e){if(!e._valueTracker){var s=qn(e)?"checked":"value";e._valueTracker=fa(e,s,""+e[s])}}function fi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=qn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wo=/[\n"\\]/g;function As(e){return e.replace(Wo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function hs(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+pn(s)):e.value!==""+pn(s)&&(e.value=""+pn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Ns(e,v,pn(s)):o!=null?Ns(e,v,pn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+pn(A):e.removeAttribute("name")}function Nn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Yo(e);return}o=o!=null?""+pn(o):"",s=s!=null?""+pn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Yo(e)}function Ns(e,s,o){s==="number"&&wo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function On(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+pn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function as(e,s,o){if(s!=null&&(s=""+pn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+pn(o):""}function wi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(fe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=pn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Yo(e)}function Fo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Ji.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Gs(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Gt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Gt(e,m,s[m])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Si=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Si.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qs(){}var Ci=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,mo=null;function Hn(e){var s=Do(e);if(s&&(e=s.stateNode)){var o=e[Yn]||null;e:switch(e=s.stateNode,s.type){case"input":if(hs(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+As(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Yn]||null;if(!f)throw Error(a(90));hs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&fi(r)}break e;case"textarea":as(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&On(e,!!o.multiple,s,!1)}}}var Ds=!1;function ao(e,s,o){if(Ds)return e(s,o);Ds=!0;try{var r=e(s);return r}finally{if(Ds=!1,(kn!==null||mo!==null)&&(vu(),kn&&(s=kn,e=mo,mo=kn=null,Hn(s),e)))for(s=0;s<e.length;s++)Hn(e[s])}}function dn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Yn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Hs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=!1;if(Hs)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Vs=!1}var ms=null,Ro=null,Ks=null;function So(){if(Ks)return Ks;var e,s=Ro,o=s.length,r,f="value"in ms?ms.value:ms.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Ks=f.slice(e,1<r?1-r:void 0)}function po(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function En(){return!1}function Vn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bo:En,this.isPropagationStopped=En,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Vn(Wn),ro=x({},Wn,{view:0,detail:0}),Qs=Vn(ro),ti,_o,js,Bs=x({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(ti=e.screenX-js.screenX,_o=e.screenY-js.screenY):_o=ti=0,js=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),qo=Vn(Bs),ko=x({},Bs,{dataTransfer:0}),go=Vn(ko),Lo=x({},ro,{relatedTarget:0}),Oo=Vn(Lo),ki=x({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ea=Vn(ki),Ii=x({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lo=Vn(Ii),Zs=x({},Wn,{data:0}),jt=Vn(Zs),zo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},co={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ni={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function si(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=ni[e])?!!s[e]:!1}function Ms(){return si}var yo=x({},ro,{key:function(e){if(e.key){var s=zo[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?co[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k=Vn(yo),U=x({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ce=Vn(U),we=x({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),Ke=Vn(we),st=x({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rt=Vn(st),Ft=x({},Bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tn=Vn(Ft),rn=x({},Wn,{newState:0,oldState:0}),on=Vn(rn),vn=[9,13,27,32],N=Hs&&"CompositionEvent"in window,Y=null;Hs&&"documentMode"in document&&(Y=document.documentMode);var Z=Hs&&"TextEvent"in window&&!Y,re=Hs&&(!N||Y&&8<Y&&11>=Y),Le=" ",ot=!1;function it(e,s){switch(e){case"keyup":return vn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function rs(e,s){switch(e){case"compositionend":return Nt(s);case"keypress":return s.which!==32?null:(ot=!0,Le);case"textInput":return e=s.data,e===Le&&ot?null:e;default:return null}}function Us(e,s){if(Jt)return e==="compositionend"||!N&&it(e,s)?(e=So(),Ks=Ro=ms=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return re&&s.locale!=="ko"?null:s.data;default:return null}}var xs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function It(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!xs[e.type]:s==="textarea"}function Dn(e,s,o,r){kn?mo?mo.push(r):mo=[r]:kn=r,s=Eu(s,"onChange"),0<s.length&&(o=new Co("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var _n=null,pe=null;function Ie(e){y0(e,0)}function C(e){var s=bo(e);if(fi(s))return e}function T(e,s){if(e==="change")return s}var R=!1;if(Hs){var B;if(Hs){var F="oninput"in document;if(!F){var ie=document.createElement("div");ie.setAttribute("oninput","return;"),F=typeof ie.oninput=="function"}B=F}else B=!1;R=B&&(!document.documentMode||9<document.documentMode)}function De(){_n&&(_n.detachEvent("onpropertychange",Ce),pe=_n=null)}function Ce(e){if(e.propertyName==="value"&&C(pe)){var s=[];Dn(s,pe,e,io(e)),ao(Ie,s)}}function $e(e,s,o){e==="focusin"?(De(),_n=s,pe=o,_n.attachEvent("onpropertychange",Ce)):e==="focusout"&&De()}function ut(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(pe)}function ft(e,s){if(e==="click")return C(s)}function Mt(e,s){if(e==="input"||e==="change")return C(s)}function Lt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var xt=typeof Object.is=="function"?Object.is:Lt;function _t(e,s){if(xt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Te.call(s,f)||!xt(e[f],s[f]))return!1}return!0}function Kn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,s){var o=Kn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kn(o)}}function vs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?vs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function jn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=wo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=wo(e.document)}return s}function Un(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Xt=Hs&&"documentMode"in document&&11>=document.documentMode,Kt=null,ws=null,Tn=null,uo=!1;function $o(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uo||Kt==null||Kt!==wo(r)||(r=Kt,"selectionStart"in r&&Un(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&_t(Tn,r)||(Tn=r,r=Eu(ws,"onSelect"),0<r.length&&(s=new Co("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Kt)))}function ls(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Pi={},Hi={};Hs&&(Hi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Qn(e){if(Pi[e])return Pi[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Hi)return Pi[e]=s[o];return e}var Vi=Qn("animationend"),ta=Qn("animationiteration"),Pc=Qn("animationstart"),Wd=Qn("transitionrun"),Fd=Qn("transitionstart"),Xd=Qn("transitioncancel"),Qp=Qn("transitionend"),Zp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Ui(e,s){Zp.set(e,s),gs(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Br=0,qd=0;function Vc(){for(var e=Br,s=qd=Br=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Jp(o,f,m)}}function Uc(e,s,o,r){Mi[Br++]=e,Mi[Br++]=s,Mi[Br++]=o,Mi[Br++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Uc(e,s,o,r),Yc(e)}function cr(e,s){return Uc(e,null,null,s),Yc(e)}function Jp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-bt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function p2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,s,o,r){return new p2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,s){var o=e.alternate;return o===null?(o=hi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function e_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=bv(e,o,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=hi(31,o,s,f),e.elementType=J,e.lanes=m,e;case j:return ur(o.children,f,m,s);case M:v=8,f|=24;break;case E:return e=hi(12,o,s,f|2),e.elementType=E,e.lanes=m,e;case G:return e=hi(13,o,s,f),e.elementType=G,e.lanes=m,e;case V:return e=hi(19,o,s,f),e.elementType=V,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case O:v=9;break e;case D:v=11;break e;case q:v=14;break e;case H:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=hi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ur(e,s,o,r){return e=hi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=hi(6,e,null,s),e.lanes=o,e}function t_(e){var s=hi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=hi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var n_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=n_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ne(s)},n_.set(e,s),s)}return{value:e,source:s,stack:ne(s)}}var Or=[],zr=0,Fc=null,jl=0,Ti=[],Ai=0,Da=null,na=1,sa="";function ma(e,s){Or[zr++]=jl,Or[zr++]=Fc,Fc=e,jl=s}function s_(e,s,o){Ti[Ai++]=na,Ti[Ai++]=sa,Ti[Ai++]=Da,Da=e;var r=na;e=sa;var f=32-bt(r)-1;r&=~(1<<f),o+=1;var m=32-bt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,na=1<<32-bt(s)+f|o<<f|r,sa=m+e}else na=1<<m|o<<f|r,sa=e}function ef(e){e.return!==null&&(ma(e,1),s_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,jl=Or[--zr],Or[zr]=null;for(;e===Da;)Da=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null,na=Ti[--Ai],Ti[Ai]=null}function o_(e,s){Ti[Ai++]=na,Ti[Ai++]=sa,Ti[Ai++]=Da,na=s.id,sa=s.overflow,Da=e}var jo=null,Ss=null,Cn=!1,Ra=null,Ni=!1,nf=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ei(s,e)),nf}function i_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[fn]=e,s[Yn]=r,o){case"dialog":yn("cancel",s),yn("close",s);break;case"iframe":case"object":case"embed":yn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)yn(ql[o],s);break;case"source":yn("error",s);break;case"img":case"image":case"link":yn("error",s),yn("load",s);break;case"details":yn("toggle",s);break;case"input":yn("invalid",s),Nn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yn("invalid",s);break;case"textarea":yn("invalid",s),wi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||w0(s.textContent,o)?(r.popover!=null&&(yn("beforetoggle",s),yn("toggle",s)),r.onScroll!=null&&yn("scroll",s),r.onScrollEnd!=null&&yn("scrollend",s),r.onClick!=null&&(s.onclick=qs),s=!0):s=!1,s||Ba(e,!0)}function a_(e){for(jo=e.return;jo;)switch(jo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:jo=jo.return}}function $r(e){if(e!==jo)return!1;if(!Cn)return a_(e),Cn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&Ss&&Ba(e),a_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=N0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=N0(e)}else s===27?(s=Ss,Ga(e.type)?(e=jh,jh=null,Ss=e):Ss=s):Ss=jo?Ri(e.stateNode.nextSibling):null;return!0}function dr(){Ss=jo=null,Cn=!1}function sf(){var e=Ra;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ra=null),e}function Ml(e){Ra===null?Ra=[e]:Ra.push(e)}var of=$(null),fr=null,pa=null;function La(e,s,o){X(of,s._currentValue),s._currentValue=o}function _a(e){e._currentValue=of.current,ue(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Q=0;Q<s.length;Q++)if(A.context===s[Q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;xt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Ue.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mo(e){return r_(fr,e)}function Gc(e,s){return fr===null&&hr(e),r_(e,s)}function r_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},pa===null){if(e===null)throw Error(a(308));pa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else pa=pa.next=s;return o}var _2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},g2=t.unstable_scheduleCallback,y2=t.unstable_NormalPriority,Js={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new _2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&g2(y2,function(){e.controller.abort()})}var Tl=null,cf=0,Pr=0,Hr=null;function x2(e,s){if(Tl===null){var o=Tl=[];cf=0,Pr=fh(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(l_,l_),s}function l_(){if(--cf===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function b2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var c_=I.S;I.S=function(e,s){Fg=ht(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&x2(e,s),c_!==null&&c_(e,s)};var mr=$(null);function uf(){var e=mr.current;return e!==null?e:cs.pooledCache}function qc(e,s){s===null?X(mr,mr.current):X(mr,s.pool)}function u_(){var e=uf();return e===null?null:{parent:Js._currentValue,pool:e}}var Vr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function d_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(qs,qs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e;default:if(typeof s.status=="string")s.then(qs,qs);else{if(e=cs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e}throw _r=s,Vr}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Vr):o}}var _r=null;function h_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function m_(e){if(e===Vr||e===Kc)throw Error(a(483))}var Ur=null,Al=0;function Zc(e){var s=Al;return Al+=1,Ur===null&&(Ur=[]),f_(Ur,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function p_(e){function s(le,te){if(e){var _e=le.deletions;_e===null?(le.deletions=[te],le.flags|=16):_e.push(te)}}function o(le,te){if(!e)return null;for(;te!==null;)s(le,te),te=te.sibling;return null}function r(le){for(var te=new Map;le!==null;)le.key!==null?te.set(le.key,le):te.set(le.index,le),le=le.sibling;return te}function f(le,te){return le=ha(le,te),le.index=0,le.sibling=null,le}function m(le,te,_e){return le.index=_e,e?(_e=le.alternate,_e!==null?(_e=_e.index,_e<te?(le.flags|=67108866,te):_e):(le.flags|=67108866,te)):(le.flags|=1048576,te)}function v(le){return e&&le.alternate===null&&(le.flags|=67108866),le}function A(le,te,_e,Oe){return te===null||te.tag!==6?(te=Zd(_e,le.mode,Oe),te.return=le,te):(te=f(te,_e),te.return=le,te)}function Q(le,te,_e,Oe){var zt=_e.type;return zt===j?Ne(le,te,_e.props.children,Oe,_e.key):te!==null&&(te.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===H&&pr(zt)===te.type)?(te=f(te,_e.props),Nl(te,_e),te.return=le,te):(te=Wc(_e.type,_e.key,_e.props,null,le.mode,Oe),Nl(te,_e),te.return=le,te)}function ge(le,te,_e,Oe){return te===null||te.tag!==4||te.stateNode.containerInfo!==_e.containerInfo||te.stateNode.implementation!==_e.implementation?(te=Jd(_e,le.mode,Oe),te.return=le,te):(te=f(te,_e.children||[]),te.return=le,te)}function Ne(le,te,_e,Oe,zt){return te===null||te.tag!==7?(te=ur(_e,le.mode,Oe,zt),te.return=le,te):(te=f(te,_e),te.return=le,te)}function ze(le,te,_e){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return te=Zd(""+te,le.mode,_e),te.return=le,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case w:return _e=Wc(te.type,te.key,te.props,null,le.mode,_e),Nl(_e,te),_e.return=le,_e;case S:return te=Jd(te,le.mode,_e),te.return=le,te;case H:return te=pr(te),ze(le,te,_e)}if(fe(te)||Ee(te))return te=ur(te,le.mode,_e,null),te.return=le,te;if(typeof te.then=="function")return ze(le,Zc(te),_e);if(te.$$typeof===L)return ze(le,Gc(le,te),_e);Jc(le,te)}return null}function ye(le,te,_e,Oe){var zt=te!==null?te.key:null;if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return zt!==null?null:A(le,te,""+_e,Oe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case w:return _e.key===zt?Q(le,te,_e,Oe):null;case S:return _e.key===zt?ge(le,te,_e,Oe):null;case H:return _e=pr(_e),ye(le,te,_e,Oe)}if(fe(_e)||Ee(_e))return zt!==null?null:Ne(le,te,_e,Oe,null);if(typeof _e.then=="function")return ye(le,te,Zc(_e),Oe);if(_e.$$typeof===L)return ye(le,te,Gc(le,_e),Oe);Jc(le,_e)}return null}function ve(le,te,_e,Oe,zt){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number"||typeof Oe=="bigint")return le=le.get(_e)||null,A(te,le,""+Oe,zt);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case w:return le=le.get(Oe.key===null?_e:Oe.key)||null,Q(te,le,Oe,zt);case S:return le=le.get(Oe.key===null?_e:Oe.key)||null,ge(te,le,Oe,zt);case H:return Oe=pr(Oe),ve(le,te,_e,Oe,zt)}if(fe(Oe)||Ee(Oe))return le=le.get(_e)||null,Ne(te,le,Oe,zt,null);if(typeof Oe.then=="function")return ve(le,te,_e,Zc(Oe),zt);if(Oe.$$typeof===L)return ve(le,te,_e,Gc(te,Oe),zt);Jc(te,Oe)}return null}function kt(le,te,_e,Oe){for(var zt=null,Rn=null,Dt=te,ln=te=0,Sn=null;Dt!==null&&ln<_e.length;ln++){Dt.index>ln?(Sn=Dt,Dt=null):Sn=Dt.sibling;var Bn=ye(le,Dt,_e[ln],Oe);if(Bn===null){Dt===null&&(Dt=Sn);break}e&&Dt&&Bn.alternate===null&&s(le,Dt),te=m(Bn,te,ln),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn,Dt=Sn}if(ln===_e.length)return o(le,Dt),Cn&&ma(le,ln),zt;if(Dt===null){for(;ln<_e.length;ln++)Dt=ze(le,_e[ln],Oe),Dt!==null&&(te=m(Dt,te,ln),Rn===null?zt=Dt:Rn.sibling=Dt,Rn=Dt);return Cn&&ma(le,ln),zt}for(Dt=r(Dt);ln<_e.length;ln++)Sn=ve(Dt,le,ln,_e[ln],Oe),Sn!==null&&(e&&Sn.alternate!==null&&Dt.delete(Sn.key===null?ln:Sn.key),te=m(Sn,te,ln),Rn===null?zt=Sn:Rn.sibling=Sn,Rn=Sn);return e&&Dt.forEach(function(Ja){return s(le,Ja)}),Cn&&ma(le,ln),zt}function Yt(le,te,_e,Oe){if(_e==null)throw Error(a(151));for(var zt=null,Rn=null,Dt=te,ln=te=0,Sn=null,Bn=_e.next();Dt!==null&&!Bn.done;ln++,Bn=_e.next()){Dt.index>ln?(Sn=Dt,Dt=null):Sn=Dt.sibling;var Ja=ye(le,Dt,Bn.value,Oe);if(Ja===null){Dt===null&&(Dt=Sn);break}e&&Dt&&Ja.alternate===null&&s(le,Dt),te=m(Ja,te,ln),Rn===null?zt=Ja:Rn.sibling=Ja,Rn=Ja,Dt=Sn}if(Bn.done)return o(le,Dt),Cn&&ma(le,ln),zt;if(Dt===null){for(;!Bn.done;ln++,Bn=_e.next())Bn=ze(le,Bn.value,Oe),Bn!==null&&(te=m(Bn,te,ln),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn);return Cn&&ma(le,ln),zt}for(Dt=r(Dt);!Bn.done;ln++,Bn=_e.next())Bn=ve(Dt,le,ln,Bn.value,Oe),Bn!==null&&(e&&Bn.alternate!==null&&Dt.delete(Bn.key===null?ln:Bn.key),te=m(Bn,te,ln),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn);return e&&Dt.forEach(function(Nv){return s(le,Nv)}),Cn&&ma(le,ln),zt}function es(le,te,_e,Oe){if(typeof _e=="object"&&_e!==null&&_e.type===j&&_e.key===null&&(_e=_e.props.children),typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case w:e:{for(var zt=_e.key;te!==null;){if(te.key===zt){if(zt=_e.type,zt===j){if(te.tag===7){o(le,te.sibling),Oe=f(te,_e.props.children),Oe.return=le,le=Oe;break e}}else if(te.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===H&&pr(zt)===te.type){o(le,te.sibling),Oe=f(te,_e.props),Nl(Oe,_e),Oe.return=le,le=Oe;break e}o(le,te);break}else s(le,te);te=te.sibling}_e.type===j?(Oe=ur(_e.props.children,le.mode,Oe,_e.key),Oe.return=le,le=Oe):(Oe=Wc(_e.type,_e.key,_e.props,null,le.mode,Oe),Nl(Oe,_e),Oe.return=le,le=Oe)}return v(le);case S:e:{for(zt=_e.key;te!==null;){if(te.key===zt)if(te.tag===4&&te.stateNode.containerInfo===_e.containerInfo&&te.stateNode.implementation===_e.implementation){o(le,te.sibling),Oe=f(te,_e.children||[]),Oe.return=le,le=Oe;break e}else{o(le,te);break}else s(le,te);te=te.sibling}Oe=Jd(_e,le.mode,Oe),Oe.return=le,le=Oe}return v(le);case H:return _e=pr(_e),es(le,te,_e,Oe)}if(fe(_e))return kt(le,te,_e,Oe);if(Ee(_e)){if(zt=Ee(_e),typeof zt!="function")throw Error(a(150));return _e=zt.call(_e),Yt(le,te,_e,Oe)}if(typeof _e.then=="function")return es(le,te,Zc(_e),Oe);if(_e.$$typeof===L)return es(le,te,Gc(le,_e),Oe);Jc(le,_e)}return typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint"?(_e=""+_e,te!==null&&te.tag===6?(o(le,te.sibling),Oe=f(te,_e),Oe.return=le,le=Oe):(o(le,te),Oe=Zd(_e,le.mode,Oe),Oe.return=le,le=Oe),v(le)):o(le,te)}return function(le,te,_e,Oe){try{Al=0;var zt=es(le,te,_e,Oe);return Ur=null,zt}catch(Dt){if(Dt===Vr||Dt===Kc)throw Dt;var Rn=hi(29,Dt,null,le.mode);return Rn.lanes=Oe,Rn.return=le,Rn}finally{}}}var gr=p_(!0),__=p_(!1),Oa=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Jp(e,null,o),s}return Uc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Wt(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Rl(){if(pf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,r){pf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Q=A,ge=Q.next;Q.next=null,v===null?m=ge:v.next=ge,v=Q;var Ne=e.alternate;Ne!==null&&(Ne=Ne.updateQueue,A=Ne.lastBaseUpdate,A!==v&&(A===null?Ne.firstBaseUpdate=ge:A.next=ge,Ne.lastBaseUpdate=Q))}if(m!==null){var ze=f.baseState;v=0,Ne=ge=Q=null,A=m;do{var ye=A.lane&-536870913,ve=ye!==A.lane;if(ve?(wn&ye)===ye:(r&ye)===ye){ye!==0&&ye===Pr&&(pf=!0),Ne!==null&&(Ne=Ne.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var kt=e,Yt=A;ye=s;var es=o;switch(Yt.tag){case 1:if(kt=Yt.payload,typeof kt=="function"){ze=kt.call(es,ze,ye);break e}ze=kt;break e;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Yt.payload,ye=typeof kt=="function"?kt.call(es,ze,ye):kt,ye==null)break e;ze=x({},ze,ye);break e;case 2:Oa=!0}}ye=A.callback,ye!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ye]:ve.push(ye))}else ve={lane:ye,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Ne===null?(ge=Ne=ve,Q=ze):Ne=Ne.next=ve,v|=ye;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Ne===null&&(Q=ze),f.baseState=Q,f.firstBaseUpdate=ge,f.lastBaseUpdate=Ne,m===null&&(f.shared.lanes=0),Ua|=v,e.lanes=v,e.memoizedState=ze}}function g_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function y_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)g_(o[e],s)}var Yr=$(null),eu=$(0);function x_(e,s){e=ka,X(eu,e),X(Yr,s),ka=e|s.baseLanes}function _f(){X(eu,ka),X(Yr,Yr.current)}function gf(){ka=eu.current,ue(Yr),ue(eu)}var mi=$(null),Di=null;function Ia(e){var s=e.alternate;X(Ys,Ys.current&1),X(mi,e),Di===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Di=e)}function yf(e){X(Ys,Ys.current),X(mi,e),Di===null&&(Di=e)}function b_(e){e.tag===22?(X(Ys,Ys.current),X(mi,e),Di===null&&(Di=e)):Pa()}function Pa(){X(Ys,Ys.current),X(mi,mi.current)}function pi(e){ue(mi),Di===e&&(Di=null),ue(Ys)}var Ys=$(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ga=0,an=null,Zn=null,eo=null,nu=!1,Wr=!1,yr=!1,su=0,Ll=0,Fr=null,v2=0;function Ls(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!xt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return ga=m,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,I.H=e===null||e.memoizedState===null?sg:Lf,yr=!1,m=o(r,f),yr=!1,Wr&&(m=w_(s,o,r,f)),v_(e),m}function v_(e){I.H=$l;var s=Zn!==null&&Zn.next!==null;if(ga=0,eo=Zn=an=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||to||(e=e.dependencies,e!==null&&Xc(e)&&(to=!0))}function w_(e,s,o,r){an=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,eo=Zn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=og,m=s(o,r)}while(Wr);return m}function w2(){var e=I.H,s=e.useState()[0];return s=typeof s.then=="function"?Ol(s):s,e=e.useState()[0],(Zn!==null?Zn.memoizedState:null)!==e&&(an.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ga=0,eo=Zn=an=null,Wr=!1,Ll=su=0,Fr=null}function Ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return eo===null?an.memoizedState=eo=e:eo=eo.next=e,eo}function Ws(){if(Zn===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=Zn.next;var s=eo===null?an.memoizedState:eo.next;if(s!==null)eo=s,Zn=e;else{if(e===null)throw an.alternate===null?Error(a(467)):Error(a(310));Zn=e,e={memoizedState:Zn.memoizedState,baseState:Zn.baseState,baseQueue:Zn.baseQueue,queue:Zn.queue,next:null},eo===null?an.memoizedState=eo=e:eo=eo.next=e}return eo}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=f_(Fr,e,s),s=an,(eo===null?s.memoizedState:eo.next)===null&&(s=s.alternate,I.H=s===null||s.memoizedState===null?sg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===L)return Mo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=an.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=an.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),an.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ae;return s.index++,o}function ya(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Ws();return kf(s,Zn,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Q=null,ge=s,Ne=!1;do{var ze=ge.lane&-536870913;if(ze!==ge.lane?(wn&ze)===ze:(ga&ze)===ze){var ye=ge.revertLane;if(ye===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),ze===Pr&&(Ne=!0);else if((ga&ye)===ye){ge=ge.next,ye===Pr&&(Ne=!0);continue}else ze={lane:0,revertLane:ge.revertLane,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},Q===null?(A=Q=ze,v=m):Q=Q.next=ze,an.lanes|=ye,Ua|=ye;ze=ge.action,yr&&o(m,ze),m=ge.hasEagerState?ge.eagerState:o(m,ze)}else ye={lane:ze,revertLane:ge.revertLane,gesture:ge.gesture,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},Q===null?(A=Q=ye,v=m):Q=Q.next=ye,an.lanes|=ze,Ua|=ze;ge=ge.next}while(ge!==null&&ge!==s);if(Q===null?v=m:Q.next=A,!xt(m,e.memoizedState)&&(to=!0,Ne&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Ws(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);xt(m,s.memoizedState)||(to=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function S_(e,s,o){var r=an,f=Ws(),m=Cn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!xt((Zn||f).memoizedState,o);if(v&&(f.memoizedState=o,to=!0),f=f.queue,Tf(j_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||eo!==null&&eo.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,f,o,s),null),cs===null)throw Error(a(349));m||(ga&127)!==0||C_(r,s,o)}return o}function C_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=an.updateQueue,s===null?(s=ou(),an.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function k_(e,s,o,r){s.value=o,s.getSnapshot=r,M_(s)&&E_(e)}function j_(e,s,o){return o(function(){M_(s)&&E_(e)})}function M_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!xt(e,o)}catch{return!0}}function E_(e){var s=cr(e,2);s!==null&&li(s,e,2)}function Mf(e){var s=Ko();if(typeof e=="function"){var o=e;if(e=o(),yr){je(!0);try{o()}finally{je(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,kf(e,Zn,typeof r=="function"?r:ya)}function S2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};I.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,A_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function A_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=I.T,v={};I.T=v;try{var A=o(f,r),Q=I.S;Q!==null&&Q(v,A),N_(e,s,A)}catch(ge){Ef(e,s,ge)}finally{m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}else try{m=o(f,r),N_(e,s,m)}catch(ge){Ef(e,s,ge)}}function N_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,R_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,A_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,R_(s),s=s.next;while(s!==r)}e.action=null}function R_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function B_(e,s){return s}function L_(e,s){if(Cn){var o=cs.formState;if(o!==null){e:{var r=an;if(Cn){if(Ss){t:{for(var f=Ss,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ss=Ri(f.nextSibling),r=f.data==="F!";break e}}Ba(r)}r=!1}r&&(s=o[0])}}return o=Ko(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:s},o.queue=r,o=eg.bind(null,an,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,an,!1,r.queue),r=Ko(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=S2.bind(null,an,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function O_(e){var s=Ws();return z_(s,Zn,e)}function z_(e,s,o){if(s=kf(e,s,B_)[0],e=au(ya)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ol(s)}catch(v){throw v===Vr?Kc:v}else r=s;s=Ws();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(an.flags|=2048,Xr(9,{destroy:void 0},C2.bind(null,f,o),null)),[r,m,e]}function C2(e,s){e.action=s}function $_(e){var s=Ws(),o=Zn;if(o!==null)return z_(s,o,e);Ws(),s=s.memoizedState,o=Ws();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=an.updateQueue,s===null&&(s=ou(),an.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function I_(){return Ws().memoizedState}function ru(e,s,o,r){var f=Ko();an.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Ws();r=r===void 0?null:r;var m=f.memoizedState.inst;Zn!==null&&r!==null&&xf(r,Zn.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(an.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function P_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function k2(e){an.flags|=4;var s=an.updateQueue;if(s===null)s=ou(),an.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function H_(e){var s=Ws().memoizedState;return k2({ref:s,nextImpl:e}),function(){if((zn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function V_(e,s){return lu(4,2,e,s)}function U_(e,s){return lu(4,4,e,s)}function Y_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,Y_.bind(null,s,e),o)}function Af(){}function F_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function X_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),yr){je(!0);try{e()}finally{je(!1)}}return o.memoizedState=[r,s],r}function Nf(e,s,o){return o===void 0||(ga&1073741824)!==0&&(wn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Gg(),an.lanes|=e,Ua|=e,o)}function G_(e,s,o,r){return xt(o,s)?o:Yr.current!==null?(e=Nf(e,o,r),xt(e,s)||(to=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(wn&261930)===0?(to=!0,e.memoizedState=o):(e=Gg(),an.lanes|=e,Ua|=e,s)}function q_(e,s,o,r,f){var m=se.p;se.p=m!==0&&8>m?m:8;var v=I.T,A={};I.T=A,Bf(e,!1,s,o);try{var Q=f(),ge=I.S;if(ge!==null&&ge(A,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Ne=b2(Q,r);zl(e,s,Ne,yi(e))}else zl(e,s,r,yi(e))}catch(ze){zl(e,s,{then:function(){},status:"rejected",reason:ze},yi())}finally{se.p=m,v!==null&&A.types!==null&&(v.types=A.types),I.T=v}}function j2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=K_(e).queue;q_(e,f,s,W,o===null?j2:function(){return Q_(e),o(r)})}function K_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Q_(e){var s=K_(e);s.next===null&&(s=e.alternate.memoizedState),zl(e,s.next.queue,{},yi())}function Rf(){return Mo(ec)}function Z_(){return Ws().memoizedState}function J_(){return Ws().memoizedState}function M2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=yi();e=za(o);var r=$a(s,e,o);r!==null&&(li(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function E2(e,s,o){var r=yi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?tg(s,o):(o=Kd(e,s,o,r),o!==null&&(li(o,e,r),ng(o,s,r)))}function eg(e,s,o){var r=yi();zl(e,s,o,r)}function zl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))tg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,xt(A,v))return Uc(e,s,f,0),cs===null&&Vc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return li(o,e,r),ng(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&li(s,e,2)}function cu(e){var s=e.alternate;return e===an||s!==null&&s===an}function tg(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function ng(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Wt(e,o)}}var $l={readContext:Mo,use:iu,useCallback:Ls,useContext:Ls,useEffect:Ls,useImperativeHandle:Ls,useLayoutEffect:Ls,useInsertionEffect:Ls,useMemo:Ls,useReducer:Ls,useRef:Ls,useState:Ls,useDebugValue:Ls,useDeferredValue:Ls,useTransition:Ls,useSyncExternalStore:Ls,useId:Ls,useHostTransitionStatus:Ls,useFormState:Ls,useActionState:Ls,useOptimistic:Ls,useMemoCache:Ls,useCacheRefresh:Ls};$l.useEffectEvent=Ls;var sg={readContext:Mo,use:iu,useCallback:function(e,s){return Ko().memoizedState=[e,s===void 0?null:s],e},useContext:Mo,useEffect:P_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,Y_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Ko();s=s===void 0?null:s;var r=e();if(yr){je(!0);try{e()}finally{je(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Ko();if(o!==void 0){var f=o(s);if(yr){je(!0);try{o(s)}finally{je(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=E2.bind(null,an,e),[r.memoizedState,e]},useRef:function(e){var s=Ko();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=eg.bind(null,an,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ko();return Nf(o,e,s)},useTransition:function(){var e=Mf(!1);return e=q_.bind(null,an,e.queue,!0,!1),Ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=an,f=Ko();if(Cn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),cs===null)throw Error(a(349));(wn&127)!==0||C_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,P_(j_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,m,o,s),null),o},useId:function(){var e=Ko(),s=cs.identifierPrefix;if(Cn){var o=sa,r=na;o=(r&~(1<<32-bt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=v2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Ko();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,an,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Ko().memoizedState=M2.bind(null,an)},useEffectEvent:function(e){var s=Ko(),o={impl:e};return s.memoizedState=o,function(){if((zn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Mo,use:iu,useCallback:F_,useContext:Mo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:U_,useMemo:X_,useReducer:au,useRef:I_,useState:function(){return au(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return G_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=au(ya)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Ws();return T_(o,Zn,e,s)},useMemoCache:Cf,useCacheRefresh:J_};Lf.useEffectEvent=H_;var og={readContext:Mo,use:iu,useCallback:F_,useContext:Mo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:U_,useMemo:X_,useReducer:jf,useRef:I_,useState:function(){return jf(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return Zn===null?Nf(o,e,s):G_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=jf(ya)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:$_,useActionState:$_,useOptimistic:function(e,s){var o=Ws();return Zn!==null?T_(o,Zn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:J_};og.useEffectEvent=H_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=yi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=$a(e,r,o),s!==null&&(li(s,e,o),Dl(s,e,o))}};function ig(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!_t(o,r)||!_t(f,m):!0}function ag(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function rg(e){Hc(e)}function lg(e){console.error(e)}function cg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function ug(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function dg(e){return e=za(e),e.tag=3,e}function fg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){ug(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ug(s,o,r),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function T2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=mi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?wu():o.alternate===null&&Os===0&&(Os=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(Cn)return s=mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),Ml(Ei(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),Ml(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=$f(e.stateNode,r,f),mf(e,f),Os!==4&&(Os=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Fl===null?Fl=[m]:Fl.push(m),Os!==4&&(Os=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dg(f),fg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),to=!1;function Eo(e,s,o,r){s.child=e===null?__(s,null,o,r):gr(s,e.child,o,r)}function hg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return hr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!to?(wf(e,s,f),xa(e,s,f)):(Cn&&A&&ef(s),s.flags|=1,Eo(e,s,r,f),s.child)}function mg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,pg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:_t,o(v,r)&&e.ref===s.ref)return xa(e,s,f)}return s.flags|=1,e=ha(m,r),e.ref=s.ref,e.return=s,s.child=e}function pg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(_t(m,r)&&e.ref===s.ref)if(to=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(to=!0);else return s.lanes=e.lanes,xa(e,s,f)}return Pf(e,s,o,r,f)}function _g(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return gg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?x_(s,m):_f(),b_(s);else return r=s.lanes=536870912,gg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),x_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Pa());return Eo(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function gg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Js._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),b_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function yg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,pi(s),s.memoizedState=null,e}function A2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Cn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Il(null,e);if(yf(s),(e=Ss)?(e=A0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:na,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,jo=s,Ss=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=yg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(to||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,to||f){if(r=cs,r!==null&&(v=Ht(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,cr(e,v),li(r,e,v),If;wu(),s=yg(e,s,o)}else e=m.treeContext,Ss=Ri(v.nextSibling),jo=s,Cn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ha(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return hr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!to?(wf(e,s,f),xa(e,s,f)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,f),s.child)}function xg(e,s,o,r,f,m){return hr(s),s.updateQueue=null,o=w_(s,r,o,f),v_(e),r=vf(),e!==null&&!to?(wf(e,s,m),xa(e,s,m)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,m),s.child)}function bg(e,s,o,r,f){if(hr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Mo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Mo(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Bl(s,r,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Q=xr(o,A);m.props=Q;var ge=m.context,Ne=o.contextType;v=Lr,typeof Ne=="object"&&Ne!==null&&(v=Mo(Ne));var ze=o.getDerivedStateFromProps;Ne=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||ge!==v)&&ag(s,m,r,v),Oa=!1;var ye=s.memoizedState;m.state=ye,Bl(s,r,m,f),Rl(),ge=s.memoizedState,A||ye!==ge||Oa?(typeof ze=="function"&&(Of(s,o,ze,r),ge=s.memoizedState),(Q=Oa||ig(s,o,Q,r,ye,ge,v))?(Ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ge),m.props=r,m.state=ge,m.context=v,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Ne=xr(o,v),m.props=Ne,ze=s.pendingProps,ye=m.context,ge=o.contextType,Q=Lr,typeof ge=="object"&&ge!==null&&(Q=Mo(ge)),A=o.getDerivedStateFromProps,(ge=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||ye!==Q)&&ag(s,m,r,Q),Oa=!1,ye=s.memoizedState,m.state=ye,Bl(s,r,m,f),Rl();var ve=s.memoizedState;v!==ze||ye!==ve||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),ve=s.memoizedState),(Ne=Oa||ig(s,o,Ne,r,ye,ve,Q)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(ge||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=Q,r=Ne):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):Eo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=xa(e,s,f),e}function vg(e,s,o,r){return dr(),s.flags|=256,Eo(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:u_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=gi),e}function wg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Ys.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Cn){if(f?Ia(s):Pa(),(e=Ss)?(e=A0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:na,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,jo=s,Ss=null)):e=null,e===null)throw Ba(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Pa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ur(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,Il(null,r)):(Ia(s),Yf(s,A))}var Q=e.memoizedState;if(Q!==null&&(A=Q.dehydrated,A!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ur(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,gr(s,e.child,null,o),r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,s=Il(null,r));else if(Ia(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var ge=v.dgst;v=ge,r=Error(a(419)),r.stack="",r.digest=v,Ml({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(to||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,to||v){if(v=cs,v!==null&&(r=Ht(v,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,cr(e,r),li(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=Q.treeContext,Ss=Ri(A.nextSibling),jo=s,Cn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Pa(),A=r.fallback,f=s.mode,Q=e.child,ge=Q.sibling,r=ha(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,ge!==null?A=ha(ge,A):(A=ur(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Il(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Vf(o):(f=A.cachePool,f!==null?(Q=Js._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=u_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Uf(e,v,o),s.memoizedState=Hf,Il(e.child,r)):(Ia(s),o=e.child,e=o.sibling,o=ha(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=hi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return gr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Sg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Cg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Ys.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,X(Ys,v),Eo(e,s,r,o),r=Cn?jl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,o,s);else if(e.tag===19)Sg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function xa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ua|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ha(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ha(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function N2(e,s,o){switch(s.tag){case 3:Pe(s,s.stateNode.containerInfo),La(s,Js,e.memoizedState.cache),dr();break;case 27:case 5:Ot(s);break;case 4:Pe(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?wg(e,s,o):(Ia(s),e=xa(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Cg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),X(Ys,Ys.current),r)break;return null;case 22:return s.lanes=0,_g(e,s,o,s.pendingProps);case 24:La(s,Js,e.memoizedState.cache)}return xa(e,s,o)}function kg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)to=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return to=!1,N2(e,s,o);to=(e.flags&131072)!==0}else to=!1,Cn&&(s.flags&1048576)!==0&&s_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=xr(e,r),s.tag=1,s=bg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=hg(null,s,e,r,o);break e}else if(f===q){s.tag=14,s=mg(null,s,e,r,o);break e}}throw s=ee(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=xr(r,s.pendingProps),bg(e,s,r,f,o);case 3:e:{if(Pe(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Bl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,La(s,Js,r),r!==m.cache&&rf(s,[Js],o,!0),Rl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=vg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),Ml(f),s=vg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ss=Ri(e.firstChild),jo=s,Cn=!0,Ra=null,Ni=!0,o=__(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),r===f){s=xa(e,s,o);break e}Eo(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Cn||(o=s.type,e=s.pendingProps,r=Tu(Ae.current).createElement(o),r[fn]=s,r[Yn]=e,To(r,o,e),xn(r),s.stateNode=r):s.memoizedState=O0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Ot(s),e===null&&Cn&&(r=s.stateNode=R0(s.type,s.pendingProps,Ae.current),jo=s,Ni=!0,f=Ss,Ga(s.type)?(jh=f,Ss=Ri(r.firstChild)):Ss=f),Eo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Cn&&((f=r=Ss)&&(r=rv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,jo=s,Ss=Ri(r.firstChild),Ni=!1,f=!0):f=!1),f||Ba(s)),Ot(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,w2,null,null,o),ec._currentValue=f),fu(e,s),Eo(e,s,r,o),s.child;case 6:return e===null&&Cn&&((e=o=Ss)&&(o=lv(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,jo=s,Ss=null,e=!0):e=!1),e||Ba(s)),null;case 13:return wg(e,s,o);case 4:return Pe(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=gr(s,null,r,o):Eo(e,s,r,o),s.child;case 11:return hg(e,s,s.type,s.pendingProps,o);case 7:return Eo(e,s,s.pendingProps,o),s.child;case 8:return Eo(e,s,s.pendingProps.children,o),s.child;case 12:return Eo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,La(s,s.type,r.value),Eo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,hr(s),f=Mo(f),r=r(f),s.flags|=1,Eo(e,s,r,o),s.child;case 14:return mg(e,s,s.type,s.pendingProps,o);case 15:return pg(e,s,s.type,s.pendingProps,o);case 19:return Cg(e,s,o);case 31:return A2(e,s,o);case 22:return _g(e,s,o,s.pendingProps);case 24:return hr(s),r=Mo(Js),e===null?(f=uf(),f===null&&(f=cs,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),La(s,Js,f)):((e.lanes&o)!==0&&(hf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,Js,r)):(r=m.cache,La(s,Js,r),r!==f.cache&&rf(s,[Js],o,!0))),Eo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ba(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw _r=Qc,df}else e.flags&=-16777217}function jg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(s))if(Zg())e.flags|=8192;else throw _r=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?vt():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!Cn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Cs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function D2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cs(s),null;case 1:return Cs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),_a(Js),at(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?ba(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Cs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ba(s),m!==null?(Cs(s),jg(s,m)):(Cs(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ba(s),Cs(s),jg(s,m)):(Cs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ba(s),Cs(s),Gf(s,f,e,r,o)),null;case 27:if(Qt(s),o=Ae.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}e=de.current,$r(s)?i_(s):(e=R0(f,r,o),s.stateNode=e,ba(s))}return Cs(s),null;case 5:if(Qt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}if(m=de.current,$r(s))i_(s);else{var v=Tu(Ae.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[fn]=s,m[Yn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(To(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ba(s)}}return Cs(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ae.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=jo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[fn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(r),e[fn]=s,s.stateNode=e}return Cs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(pi(s),s):(pi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Cs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(pi(s),s):(pi(s),null)}return pi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),Cs(s),null);case 4:return at(),e===null&&_h(s.stateNode.containerInfo),Cs(s),null;case 10:return _a(s.type),Cs(s),null;case 19:if(ue(Ys),r=s.memoizedState,r===null)return Cs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Pl(r,!1);else{if(Os!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)e_(o,e),o=o.sibling;return X(Ys,Ys.current&1|2),Cn&&ma(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ht()>xu&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Cn)return Cs(s),null}else 2*ht()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ht(),e.sibling=null,o=Ys.current,X(Ys,f?o&1|2:o&1),Cn&&ma(s,r.treeForkCount),e):(Cs(s),null);case 22:case 23:return pi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Cs(s),s.subtreeFlags&6&&(s.flags|=8192)):Cs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ue(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_a(Js),Cs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function R2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return _a(Js),at(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Qt(s),null;case 31:if(s.memoizedState!==null){if(pi(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(pi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ue(Ys),null;case 4:return at(),null;case 10:return _a(s.type),null;case 22:case 23:return pi(s),gf(),e!==null&&ue(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return _a(Js),null;case 25:return null;default:return null}}function Mg(e,s){switch(tf(s),s.tag){case 3:_a(Js),at();break;case 26:case 27:case 5:Qt(s);break;case 4:at();break;case 31:s.memoizedState!==null&&pi(s);break;case 13:pi(s);break;case 19:ue(Ys);break;case 10:_a(s.type);break;case 22:case 23:pi(s),gf(),e!==null&&ue(mr);break;case 24:_a(Js)}}function Hl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function Ha(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Q=o,ge=A;try{ge()}catch(Ne){Xn(f,Q,Ne)}}}r=r.next}while(r!==m)}}catch(Ne){Xn(s,s.return,Ne)}}function Eg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{y_(s,o)}catch(r){Xn(e,e.return,r)}}}function Tg(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Vl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function oa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Ag(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;tv(r,e.type,o,s),r[Yn]=s}catch(f){Xn(e,e.return,f)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=qs));else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);To(s,r,o),s[fn]=e,s[Yn]=o}catch(m){Xn(e,e.return,m)}}var va=!1,no=!1,Zf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,xo=null;function B2(e,s){if(e=e.containerInfo,xh=Ou,e=jn(e),Un(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Q=-1,ge=0,Ne=0,ze=e,ye=null;t:for(;;){for(var ve;ze!==o||f!==0&&ze.nodeType!==3||(A=v+f),ze!==m||r!==0&&ze.nodeType!==3||(Q=v+r),ze.nodeType===3&&(v+=ze.nodeValue.length),(ve=ze.firstChild)!==null;)ye=ze,ze=ve;for(;;){if(ze===e)break t;if(ye===o&&++ge===f&&(A=v),ye===m&&++Ne===r&&(Q=v),(ve=ze.nextSibling)!==null)break;ze=ye,ye=ze.parentNode}ze=ve}o=A===-1||Q===-1?null:{start:A,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,xo=s;xo!==null;)if(s=xo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,xo=e;else for(;xo!==null;){switch(s=xo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var kt=xr(o.type,f);e=r.getSnapshotBeforeUpdate(kt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Xn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,xo=e;break}xo=s.return}}function Bg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(e,o),r&4&&Hl(5,o);break;case 1:if(Sa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&Eg(o),r&512&&Vl(o,o.return);break;case 3:if(Sa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{y_(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:Sa(e,o),s===null&&r&4&&Ag(o),r&512&&Vl(o,o.return);break;case 12:Sa(e,o);break;case 31:Sa(e,o),r&4&&zg(e,o);break;case 13:Sa(e,o),r&4&&$g(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=U2.bind(null,o),cv(e,o))));break;case 22:if(r=o.memoizedState!==null||va,!r){s=s!==null&&s.memoizedState!==null||no,f=va;var m=no;va=r,(no=s)&&!m?Ca(e,o,(o.subtreeFlags&8772)!==0):Sa(e,o),va=f,no=m}break;case 30:break;default:Sa(e,o)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&di(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Es=null,oi=!1;function wa(e,s,o){for(o=o.child;o!==null;)Og(e,s,o),o=o.sibling}function Og(e,s,o){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 26:no||oa(o,s),wa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:no||oa(o,s);var r=Es,f=oi;Ga(o.type)&&(Es=o.stateNode,oi=!1),wa(e,s,o),Ql(o.stateNode),Es=r,oi=f;break;case 5:no||oa(o,s);case 6:if(r=Es,f=oi,Es=null,wa(e,s,o),Es=r,oi=f,Es!==null)if(oi)try{(Es.nodeType===9?Es.body:Es.nodeName==="HTML"?Es.ownerDocument.body:Es).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{Es.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:Es!==null&&(oi?(e=Es,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):E0(Es,o.stateNode));break;case 4:r=Es,f=oi,Es=o.stateNode.containerInfo,oi=!0,wa(e,s,o),Es=r,oi=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),no||Ha(4,o,s),wa(e,s,o);break;case 1:no||(oa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),wa(e,s,o);break;case 21:wa(e,s,o);break;case 22:no=(r=no)||o.memoizedState!==null,wa(e,s,o),no=r;break;default:wa(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Xn(s,s.return,o)}}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Xn(s,s.return,o)}}function L2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Rg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Rg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=L2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=Y2.bind(null,e,r);r.then(f,f)}})}function ii(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Es=A.stateNode,oi=!1;break e}break;case 5:Es=A.stateNode,oi=!1;break e;case 3:case 4:Es=A.stateNode.containerInfo,oi=!0;break e}A=A.return}if(Es===null)throw Error(a(160));Og(m,v,f),Es=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ig(s,e),s=s.sibling}var Yi=null;function Ig(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(s,e),ai(e),r&4&&(Ha(3,e,e.return),Hl(3,e),Ha(5,e,e.return));break;case 1:ii(s,e),ai(e),r&512&&(no||o===null||oa(o,o.return)),r&64&&va&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Yi;if(ii(s,e),ai(e),r&512&&(no||o===null||oa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Is]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),To(m,r,o),m[fn]=e,xn(m),r=m;break e;case"link":var v=I0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;case"meta":if(v=I0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[fn]=e,xn(m),r=m}e.stateNode=r}else P0(f,e.type,e.stateNode);else e.stateNode=$0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?P0(f,e.type,e.stateNode):$0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ii(s,e),ai(e),r&512&&(no||o===null||oa(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ii(s,e),ai(e),r&512&&(no||o===null||oa(o,o.return)),e.flags&32){f=e.stateNode;try{Fo(f,"")}catch(kt){Xn(e,e.return,kt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ii(s,e),ai(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(kt){Xn(e,e.return,kt)}}break;case 3:if(Du=null,f=Yi,Yi=Au(s.containerInfo),ii(s,e),Yi=f,ai(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(kt){Xn(e,e.return,kt)}Zf&&(Zf=!1,Pg(e));break;case 4:r=Yi,Yi=Au(e.stateNode.containerInfo),ii(s,e),ai(e),Yi=r;break;case 12:ii(s,e),ai(e);break;case 31:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ii(s,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ht()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,ge=va,Ne=no;if(va=ge||f,no=Ne||Q,ii(s,e),no=Ne,va=ge,ai(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||va||no||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Q.stateNode;var ze=Q.memoizedProps.style,ye=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;A.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(kt){Xn(Q,Q.return,kt)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(kt){Xn(Q,Q.return,kt)}}}else if(s.tag===18){if(o===null){Q=s;try{var ve=Q.stateNode;f?T0(ve,!0):T0(Q.stateNode,!1)}catch(kt){Xn(Q,Q.return,kt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ii(s,e),ai(e)}}function ai(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ng(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Fo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var Q=o.stateNode.containerInfo,ge=Kf(e);Qf(e,ge,Q);break;default:throw Error(a(161))}}catch(Ne){Xn(e,e.return,Ne)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Pg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Sa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Bg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:oa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),br(s);break;case 27:Ql(s.stateNode);case 26:case 5:oa(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,o),Hl(4,m);break;case 1:if(Ca(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){Xn(r,r.return,ge)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)g_(Q[f],A)}catch(ge){Xn(r,r.return,ge)}}o&&v&64&&Eg(m),Vl(m,m.return);break;case 27:Dg(m);case 26:case 5:Ca(f,m,o),o&&r===null&&v&4&&Ag(m),Vl(m,m.return);break;case 12:Ca(f,m,o);break;case 31:Ca(f,m,o),o&&v&4&&zg(f,m);break;case 13:Ca(f,m,o),o&&v&4&&$g(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,o),Vl(m,m.return);break;case 30:break;default:Ca(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Wi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Hg(e,s,o,r),s=s.sibling}function Hg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(e,s,o,r),f&2048&&Hl(9,s);break;case 1:Wi(e,s,o,r);break;case 3:Wi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Wi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){Xn(s,s.return,Q)}}else Wi(e,s,o,r);break;case 31:Wi(e,s,o,r);break;case 13:Wi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Wi(e,s,o,r):Ul(e,s):m._visibility&2?Wi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Wi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Wi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Q=r,ge=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,A,Q,f),Hl(8,v);break;case 23:break;case 22:var Ne=v.stateNode;v.memoizedState!==null?Ne._visibility&2?Gr(m,v,A,Q,f):Ul(m,v):(Ne._visibility|=2,Gr(m,v,A,Q,f)),f&&ge&2048&&Jf(v.alternate,v);break;case 24:Gr(m,v,A,Q,f),f&&ge&2048&&eh(v.alternate,v);break;default:Gr(m,v,A,Q,f)}s=s.sibling}}function Ul(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Ul(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Ul(o,r),f&2048&&eh(r.alternate,r);break;default:Ul(o,r)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Vg(e,s,o),e=e.sibling}function Vg(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&vv(o,Yi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Yi;Yi=Au(e.stateNode.containerInfo),qr(e,s,o),Yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yl,Yl=16777216,qr(e,s,o),Yl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Ug(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];xo=r,Wg(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];xo=r,Wg(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Wg(e,s){for(;xo!==null;){var o=xo;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:El(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,xo=r;else e:for(o=e;xo!==null;){r=xo;var f=r.sibling,m=r.return;if(Lg(r),r===o){xo=null;break e}if(f!==null){f.return=m,xo=f;break e}xo=m}}}var O2={getCacheForType:function(e){var s=Mo(Js),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Mo(Js).controller.signal}},z2=typeof WeakMap=="function"?WeakMap:Map,zn=0,cs=null,gn=null,wn=0,Fn=0,_i=null,Va=!1,Kr=!1,th=!1,ka=0,Os=0,Ua=0,vr=0,nh=0,gi=0,Qr=0,Fl=null,ri=null,sh=!1,yu=0,Fg=0,xu=1/0,bu=null,Ya=null,fo=0,Wa=null,Zr=null,ja=0,oh=0,ih=null,Xg=null,Xl=0,ah=null;function yi(){return(zn&2)!==0&&wn!==0?wn&-wn:I.T!==null?fh():Mn()}function Gg(){if(gi===0)if((wn&536870912)===0||Cn){var e=Bt;Bt<<=1,(Bt&3932160)===0&&(Bt=262144),gi=e}else gi=536870912;return e=mi.current,e!==null&&(e.flags|=32),gi}function li(e,s,o){(e===cs&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,wn,gi,!1)),mt(e,o),((zn&2)===0||e!==cs)&&(e===cs&&((zn&2)===0&&(vr|=o),Os===4&&Fa(e,wn,gi,!1)),ia(e))}function qg(e,s,o){if((zn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||lt(e,s),f=r?P2(e,s):lh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!$2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Fl;var Q=A.current.memoizedState.isDehydrated;if(Q&&(Jr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!Q){A.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=ri,ri=f,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(r,s,gi,!Va);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ht(),10<f)){if(Fa(r,s,gi,!Va),ct(r,0,!0)!==0)break e;ja=s,r.timeoutHandle=j0(Kg.bind(null,r,o,ri,bu,sh,s,gi,vr,Qr,Va,m,"Throttled",-0,0),f);break e}Kg(r,o,ri,bu,sh,s,gi,vr,Qr,Va,m,null,-0,0)}}break}while(!0);ia(e)}function Kg(e,s,o,r,f,m,v,A,Q,ge,Ne,ze,ye,ve){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qs},Vg(s,m,ze);var kt=(m&62914560)===m?yu-ht():(m&4194048)===m?Fg-ht():0;if(kt=wv(ze,kt),kt!==null){ja=m,e.cancelPendingCommit=kt(o0.bind(null,e,s,m,o,r,f,v,A,Q,Ne,ze,null,ye,ve)),Fa(e,m,v,!ge);return}}o0(e,s,m,o,r,f,v,A,Q)}function $2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!xt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,r){s&=~nh,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-bt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&cn(e,o,s)}function vu(){return(zn&6)===0?(Gl(0),!1):!0}function rh(){if(gn!==null){if(Fn===0)var e=gn.return;else e=gn,pa=fr=null,Sf(e),Ur=null,Al=0,e=gn;for(;e!==null;)Mg(e.alternate,e),e=e.return;gn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,ov(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ja=0,rh(),cs=e,gn=o=ha(e.current,null),wn=s,Fn=0,_i=null,Va=!1,Kr=lt(e,s),th=!1,Qr=gi=nh=vr=Ua=Os=0,ri=Fl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-bt(r),m=1<<f;s|=e[f],r&=~m}return ka=s,Vc(),o}function Qg(e,s){an=null,I.H=$l,s===Vr||s===Kc?(s=h_(),Fn=3):s===df?(s=h_(),Fn=4):Fn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,_i=s,gn===null&&(Os=1,uu(e,Ei(s,e.current)))}function Zg(){var e=mi.current;return e===null?!0:(wn&4194048)===wn?Di===null:(wn&62914560)===wn||(wn&536870912)!==0?e===Di:!1}function Jg(){var e=I.H;return I.H=$l,e===null?$l:e}function e0(){var e=I.A;return I.A=O2,e}function wu(){Os=4,Va||(wn&4194048)!==wn&&mi.current!==null||(Kr=!0),(Ua&134217727)===0&&(vr&134217727)===0||cs===null||Fa(cs,wn,gi,!1)}function lh(e,s,o){var r=zn;zn|=2;var f=Jg(),m=e0();(cs!==e||wn!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Os;e:do try{if(Fn!==0&&gn!==null){var A=gn,Q=_i;switch(Fn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(s=!0);var ge=Fn;if(Fn=0,_i=null,el(e,A,Q,ge),o&&Kr){v=0;break e}break;default:ge=Fn,Fn=0,_i=null,el(e,A,Q,ge)}}I2(),v=Os;break}catch(Ne){Qg(e,Ne)}while(!0);return s&&e.shellSuspendCounter++,pa=fr=null,zn=r,I.H=f,I.A=m,gn===null&&(cs=null,wn=0,Vc()),v}function I2(){for(;gn!==null;)t0(gn)}function P2(e,s){var o=zn;zn|=2;var r=Jg(),f=e0();cs!==e||wn!==s?(bu=null,xu=ht()+500,Jr(e,s)):Kr=lt(e,s);e:do try{if(Fn!==0&&gn!==null){s=gn;var m=_i;t:switch(Fn){case 1:Fn=0,_i=null,el(e,s,m,1);break;case 2:case 9:if(d_(m)){Fn=0,_i=null,n0(s);break}s=function(){Fn!==2&&Fn!==9||cs!==e||(Fn=7),ia(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:d_(m)?(Fn=0,_i=null,n0(s)):(Fn=0,_i=null,el(e,s,m,7));break;case 5:var v=null;switch(gn.tag){case 26:v=gn.memoizedState;case 5:case 27:var A=gn;if(v?H0(v):A.stateNode.complete){Fn=0,_i=null;var Q=A.sibling;if(Q!==null)gn=Q;else{var ge=A.return;ge!==null?(gn=ge,Su(ge)):gn=null}break t}}Fn=0,_i=null,el(e,s,m,5);break;case 6:Fn=0,_i=null,el(e,s,m,6);break;case 8:rh(),Os=6;break e;default:throw Error(a(462))}}H2();break}catch(Ne){Qg(e,Ne)}while(!0);return pa=fr=null,I.H=r,I.A=f,zn=o,gn!==null?0:(cs=null,wn=0,Vc(),Os)}function H2(){for(;gn!==null&&!Xe();)t0(gn)}function t0(e){var s=kg(e.alternate,e,ka);e.memoizedProps=e.pendingProps,s===null?Su(e):gn=s}function n0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=xg(o,s,s.pendingProps,s.type,void 0,wn);break;case 11:s=xg(o,s,s.pendingProps,s.type.render,s.ref,wn);break;case 5:Sf(s);default:Mg(o,s),s=gn=e_(s,ka),s=kg(o,s,ka)}e.memoizedProps=e.pendingProps,s===null?Su(e):gn=s}function el(e,s,o,r){pa=fr=null,Sf(s),Ur=null,Al=0;var f=s.return;try{if(T2(e,f,s,o,wn)){Os=1,uu(e,Ei(o,e.current)),gn=null;return}}catch(m){if(f!==null)throw gn=f,m;Os=1,uu(e,Ei(o,e.current)),gn=null;return}s.flags&32768?(Cn||r===1?e=!0:Kr||(wn&536870912)!==0?e=!1:(Va=e=!0,(r===2||r===9||r===3||r===6)&&(r=mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),s0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){s0(s,Va);return}e=s.return;var o=D2(s.alternate,s,ka);if(o!==null){gn=o;return}if(s=s.sibling,s!==null){gn=s;return}gn=s=e}while(s!==null);Os===0&&(Os=5)}function s0(e,s){do{var o=R2(e.alternate,e);if(o!==null){o.flags&=32767,gn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){gn=e;return}gn=e=o}while(e!==null);Os=6,gn=null}function o0(e,s,o,r,f,m,v,A,Q){e.cancelPendingCommit=null;do Cu();while(fo!==0);if((zn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,yt(e,o,m,v,A,Q),e===cs&&(gn=cs=null,wn=0),Zr=s,Wa=e,ja=o,oh=m,ih=f,Xg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,W2(dt,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,f=se.p,se.p=2,v=zn,zn|=4;try{B2(e,s,o)}finally{zn=v,se.p=f,I.T=r}}fo=1,i0(),a0(),r0()}}function i0(){if(fo===1){fo=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var r=se.p;se.p=2;var f=zn;zn|=4;try{Ig(s,e);var m=bh,v=jn(e.containerInfo),A=m.focusedElem,Q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&vs(A.ownerDocument.documentElement,A)){if(Q!==null&&Un(A)){var ge=Q.start,Ne=Q.end;if(Ne===void 0&&(Ne=ge),"selectionStart"in A)A.selectionStart=ge,A.selectionEnd=Math.min(Ne,A.value.length);else{var ze=A.ownerDocument||document,ye=ze&&ze.defaultView||window;if(ye.getSelection){var ve=ye.getSelection(),kt=A.textContent.length,Yt=Math.min(Q.start,kt),es=Q.end===void 0?Yt:Math.min(Q.end,kt);!ve.extend&&Yt>es&&(v=es,es=Yt,Yt=v);var le=bs(A,Yt),te=bs(A,es);if(le&&te&&(ve.rangeCount!==1||ve.anchorNode!==le.node||ve.anchorOffset!==le.offset||ve.focusNode!==te.node||ve.focusOffset!==te.offset)){var _e=ze.createRange();_e.setStart(le.node,le.offset),ve.removeAllRanges(),Yt>es?(ve.addRange(_e),ve.extend(te.node,te.offset)):(_e.setEnd(te.node,te.offset),ve.addRange(_e))}}}}for(ze=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&ze.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ze.length;A++){var Oe=ze[A];Oe.element.scrollLeft=Oe.left,Oe.element.scrollTop=Oe.top}}Ou=!!xh,bh=xh=null}finally{zn=f,se.p=r,I.T=o}}e.current=s,fo=2}}function a0(){if(fo===2){fo=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var r=se.p;se.p=2;var f=zn;zn|=4;try{Bg(e,s.alternate,s)}finally{zn=f,se.p=r,I.T=o}}fo=3}}function r0(){if(fo===4||fo===3){fo=0,Ge();var e=Wa,s=Zr,o=ja,r=Xg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?fo=5:(fo=0,Zr=Wa=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),In(o),s=s.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(nt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=I.T,f=se.p,se.p=2,I.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{I.T=s,se.p=f}}(ja&3)!==0&&Cu(),ia(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Xl++:(Xl=0,ah=e):Xl=0,Gl(0)}}function l0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return i0(),a0(),r0(),c0()}function c0(){if(fo!==5)return!1;var e=Wa,s=oh;oh=0;var o=In(ja),r=I.T,f=se.p;try{se.p=32>o?32:o,I.T=null,o=ih,ih=null;var m=Wa,v=ja;if(fo=0,Zr=Wa=null,ja=0,(zn&6)!==0)throw Error(a(331));var A=zn;if(zn|=4,Yg(m.current),Hg(m,m.current,v,o),zn=A,Gl(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(nt,m)}catch{}return!0}finally{se.p=f,I.T=r,l0(e,s)}}function u0(e,s,o){s=Ei(o,s),s=$f(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(mt(e,2),ia(e))}function Xn(e,s,o){if(e.tag===3)u0(e,e,o);else for(;s!==null;){if(s.tag===3){u0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){e=Ei(o,e),o=dg(2),r=$a(s,o,2),r!==null&&(fg(o,r,s,e),mt(r,2),ia(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new z2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=V2.bind(null,e,s,o),s.then(e,e))}function V2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,cs===e&&(wn&o)===o&&(Os===4||Os===3&&(wn&62914560)===wn&&300>ht()-yu?(zn&2)===0&&Jr(e,0):nh|=o,Qr===wn&&(Qr=0)),ia(e)}function d0(e,s){s===0&&(s=vt()),e=cr(e,s),e!==null&&(mt(e,s),ia(e))}function U2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(e,o)}function Y2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),d0(e,o)}function W2(e,s){return Ye(e,s)}var ku=null,tl=null,uh=!1,ju=!1,dh=!1,Xa=0;function ia(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,uh||(uh=!0,X2())}function Gl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-bt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,p0(r,m))}else m=wn,m=ct(r,r===cs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||lt(r,m)||(o=!0,p0(r,m));r=r.next}while(o);dh=!1}}function F2(){f0()}function f0(){ju=uh=!1;var e=0;Xa!==0&&sv()&&(e=Xa);for(var s=ht(),o=null,r=ku;r!==null;){var f=r.next,m=h0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}fo!==0&&fo!==5||Gl(e),Xa!==0&&(Xa=0)}function h0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-bt(m),A=1<<v,Q=f[v];Q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Tt(A,s)):Q<=s&&(e.expiredLanes|=A),m&=~A}if(s=cs,o=wn,o=ct(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&We(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||lt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&We(r),In(o)){case 2:case 8:o=qt;break;case 32:o=dt;break;case 268435456:o=K;break;default:o=dt}return r=m0.bind(null,e),o=Ye(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&We(r),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,s){if(fo!==0&&fo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=wn;return r=ct(e,e===cs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),h0(e,ht()),e.callbackNode!=null&&e.callbackNode===o?m0.bind(null,e):null)}function p0(e,s){if(Cu())return null;qg(e,s,!0)}function X2(){iv(function(){(zn&6)!==0?Ye(At,F2):f0()})}function fh(){if(Xa===0){var e=Pr;e===0&&(e=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Xa=e}return Xa}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function g0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function G2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=_0((f[Yn]||null).action),v=r.submitter;v&&(s=(s=v[Yn]||null)?_0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Co("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var Q=v?g0(f,v):new FormData(f);Df(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(A.preventDefault(),Q=v?g0(f,v):new FormData(f),Df(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],q2=mh.toLowerCase(),K2=mh[0].toUpperCase()+mh.slice(1);Ui(q2,"on"+K2)}Ui(Vi,"onAnimationEnd"),Ui(ta,"onAnimationIteration"),Ui(Pc,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Wd,"onTransitionRun"),Ui(Fd,"onTransitionStart"),Ui(Xd,"onTransitionCancel"),Ui(Qp,"onTransitionEnd"),os("onMouseEnter",["mouseout","mouseover"]),os("onMouseLeave",["mouseout","mouseover"]),os("onPointerEnter",["pointerout","pointerover"]),os("onPointerLeave",["pointerout","pointerover"]),gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gs("onBeforeInput",["compositionend","keypress","textInput","paste"]),gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function y0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Q=A.instance,ge=A.currentTarget;if(A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ge;try{m(f)}catch(Ne){Hc(Ne)}f.currentTarget=null,m=Q}else for(v=0;v<r.length;v++){if(A=r[v],Q=A.instance,ge=A.currentTarget,A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ge;try{m(f)}catch(Ne){Hc(Ne)}f.currentTarget=null,m=Q}}}}function yn(e,s){var o=s[ss];o===void 0&&(o=s[ss]=new Set);var r=e+"__bubble";o.has(r)||(x0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),x0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,vi.forEach(function(o){o!=="selectionchange"&&(Q2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function x0(e,s,o,r){switch(G0(s)){case 2:var f=kv;break;case 8:f=jv;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=Ts(A),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}ao(function(){var ge=m,Ne=io(o),ze=[];e:{var ye=Zp.get(e);if(ye!==void 0){var ve=Co,kt=e;switch(e){case"keypress":if(po(o)===0)break e;case"keydown":case"keyup":ve=k;break;case"focusin":kt="focus",ve=Oo;break;case"focusout":kt="blur",ve=Oo;break;case"beforeblur":case"afterblur":ve=Oo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=go;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Ke;break;case Vi:case ta:case Pc:ve=ea;break;case Qp:ve=Rt;break;case"scroll":case"scrollend":ve=Qs;break;case"wheel":ve=tn;break;case"copy":case"cut":case"paste":ve=lo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=ce;break;case"toggle":case"beforetoggle":ve=on}var Yt=(s&4)!==0,es=!Yt&&(e==="scroll"||e==="scrollend"),le=Yt?ye!==null?ye+"Capture":null:ye;Yt=[];for(var te=ge,_e;te!==null;){var Oe=te;if(_e=Oe.stateNode,Oe=Oe.tag,Oe!==5&&Oe!==26&&Oe!==27||_e===null||le===null||(Oe=dn(te,le),Oe!=null&&Yt.push(Kl(te,Oe,_e))),es)break;te=te.return}0<Yt.length&&(ye=new ve(ye,kt,null,o,Ne),ze.push({event:ye,listeners:Yt}))}}if((s&7)===0){e:{if(ye=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ye&&o!==Ci&&(kt=o.relatedTarget||o.fromElement)&&(Ts(kt)||kt[et]))break e;if((ve||ye)&&(ye=Ne.window===Ne?Ne:(ye=Ne.ownerDocument)?ye.defaultView||ye.parentWindow:window,ve?(kt=o.relatedTarget||o.toElement,ve=ge,kt=kt?Ts(kt):null,kt!==null&&(es=u(kt),Yt=kt.tag,kt!==es||Yt!==5&&Yt!==27&&Yt!==6)&&(kt=null)):(ve=null,kt=ge),ve!==kt)){if(Yt=qo,Oe="onMouseLeave",le="onMouseEnter",te="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=ce,Oe="onPointerLeave",le="onPointerEnter",te="pointer"),es=ve==null?ye:bo(ve),_e=kt==null?ye:bo(kt),ye=new Yt(Oe,te+"leave",ve,o,Ne),ye.target=es,ye.relatedTarget=_e,Oe=null,Ts(Ne)===ge&&(Yt=new Yt(le,te+"enter",kt,o,Ne),Yt.target=_e,Yt.relatedTarget=es,Oe=Yt),es=Oe,ve&&kt)t:{for(Yt=Z2,le=ve,te=kt,_e=0,Oe=le;Oe;Oe=Yt(Oe))_e++;Oe=0;for(var zt=te;zt;zt=Yt(zt))Oe++;for(;0<_e-Oe;)le=Yt(le),_e--;for(;0<Oe-_e;)te=Yt(te),Oe--;for(;_e--;){if(le===te||te!==null&&le===te.alternate){Yt=le;break t}le=Yt(le),te=Yt(te)}Yt=null}else Yt=null;ve!==null&&b0(ze,ye,ve,Yt,!1),kt!==null&&es!==null&&b0(ze,es,kt,Yt,!0)}}e:{if(ye=ge?bo(ge):window,ve=ye.nodeName&&ye.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ye.type==="file")var Rn=T;else if(It(ye))if(R)Rn=Mt;else{Rn=ut;var Dt=$e}else ve=ye.nodeName,!ve||ve.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?ge&&Ps(ge.elementType)&&(Rn=T):Rn=ft;if(Rn&&(Rn=Rn(e,ge))){Dn(ze,Rn,o,Ne);break e}Dt&&Dt(e,ye,ge),e==="focusout"&&ge&&ye.type==="number"&&ge.memoizedProps.value!=null&&Ns(ye,"number",ye.value)}switch(Dt=ge?bo(ge):window,e){case"focusin":(It(Dt)||Dt.contentEditable==="true")&&(Kt=Dt,ws=ge,Tn=null);break;case"focusout":Tn=ws=Kt=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,$o(ze,o,Ne);break;case"selectionchange":if(Xt)break;case"keydown":case"keyup":$o(ze,o,Ne)}var ln;if(N)e:{switch(e){case"compositionstart":var Sn="onCompositionStart";break e;case"compositionend":Sn="onCompositionEnd";break e;case"compositionupdate":Sn="onCompositionUpdate";break e}Sn=void 0}else Jt?it(e,o)&&(Sn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Sn="onCompositionStart");Sn&&(re&&o.locale!=="ko"&&(Jt||Sn!=="onCompositionStart"?Sn==="onCompositionEnd"&&Jt&&(ln=So()):(ms=Ne,Ro="value"in ms?ms.value:ms.textContent,Jt=!0)),Dt=Eu(ge,Sn),0<Dt.length&&(Sn=new jt(Sn,e,null,o,Ne),ze.push({event:Sn,listeners:Dt}),ln?Sn.data=ln:(ln=Nt(o),ln!==null&&(Sn.data=ln)))),(ln=Z?rs(e,o):Us(e,o))&&(Sn=Eu(ge,"onBeforeInput"),0<Sn.length&&(Dt=new jt("onBeforeInput","beforeinput",null,o,Ne),ze.push({event:Dt,listeners:Sn}),Dt.data=ln)),G2(ze,e,ge,o,Ne)}y0(ze,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=dn(e,o),f!=null&&r.unshift(Kl(e,f,m)),f=dn(e,s),f!=null&&r.push(Kl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function Z2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Q=A.alternate,ge=A.stateNode;if(A=A.tag,Q!==null&&Q===r)break;A!==5&&A!==26&&A!==27||ge===null||(Q=ge,f?(ge=dn(o,m),ge!=null&&v.unshift(Kl(o,ge,Q))):f||(ge=dn(o,m),ge!=null&&v.push(Kl(o,ge,Q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var J2=/\r\n?/g,ev=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(J2,`
`).replace(ev,"")}function w0(e,s){return s=v0(s),v0(e)===s}function Jn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Fo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Fo(e,""+r);break;case"className":un(e,"class",r);break;case"tabIndex":un(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":un(e,o,r);break;case"style":Gs(e,r,m);break;case"data":if(s!=="object"){un(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Go(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Jn(e,s,"name",f.name,f,null),Jn(e,s,"formEncType",f.formEncType,f,null),Jn(e,s,"formMethod",f.formMethod,f,null),Jn(e,s,"formTarget",f.formTarget,f,null)):(Jn(e,s,"encType",f.encType,f,null),Jn(e,s,"method",f.method,f,null),Jn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Go(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=qs);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Go(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":yn("beforetoggle",e),yn("toggle",e),ys(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ys(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Xo.get(o)||o,ys(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":Gs(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Fo(e,r):(typeof r=="number"||typeof r=="bigint")&&Fo(e,""+r);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bn.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Yn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):ys(e,o,r)}}}function To(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yn("error",e),yn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,m,v,o,null)}}f&&Jn(e,s,"srcSet",o.srcSet,o,null),r&&Jn(e,s,"src",o.src,o,null);return;case"input":yn("invalid",e);var A=m=v=f=null,Q=null,ge=null;for(r in o)if(o.hasOwnProperty(r)){var Ne=o[r];if(Ne!=null)switch(r){case"name":f=Ne;break;case"type":v=Ne;break;case"checked":Q=Ne;break;case"defaultChecked":ge=Ne;break;case"value":m=Ne;break;case"defaultValue":A=Ne;break;case"children":case"dangerouslySetInnerHTML":if(Ne!=null)throw Error(a(137,s));break;default:Jn(e,s,r,Ne,o,null)}}Nn(e,m,A,Q,ge,v,f,!1);return;case"select":yn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Jn(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?On(e,!!r,s,!1):o!=null&&On(e,!!r,o,!0);return;case"textarea":yn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Jn(e,s,v,A,o,null)}wi(e,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Jn(e,s,Q,r,o,null)}return;case"dialog":yn("beforetoggle",e),yn("toggle",e),yn("cancel",e),yn("close",e);break;case"iframe":case"object":yn("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)yn(ql[r],e);break;case"image":yn("error",e),yn("load",e);break;case"details":yn("toggle",e);break;case"embed":case"source":case"link":yn("error",e),yn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ge in o)if(o.hasOwnProperty(ge)&&(r=o[ge],r!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,ge,r,o,null)}return;default:if(Ps(s)){for(Ne in o)o.hasOwnProperty(Ne)&&(r=o[Ne],r!==void 0&&yh(e,s,Ne,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&Jn(e,s,A,r,o,null))}function tv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Q=null,ge=null,Ne=null;for(ve in o){var ze=o[ve];if(o.hasOwnProperty(ve)&&ze!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":Q=ze;default:r.hasOwnProperty(ve)||Jn(e,s,ve,null,r,ze)}}for(var ye in r){var ve=r[ye];if(ze=o[ye],r.hasOwnProperty(ye)&&(ve!=null||ze!=null))switch(ye){case"type":m=ve;break;case"name":f=ve;break;case"checked":ge=ve;break;case"defaultChecked":Ne=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==ze&&Jn(e,s,ye,ve,r,ze)}}hs(e,v,A,Q,ge,Ne,m,f);return;case"select":ve=v=A=ye=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":ve=Q;default:r.hasOwnProperty(m)||Jn(e,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":ye=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Q&&Jn(e,s,f,m,r,Q)}s=A,o=v,r=ve,ye!=null?On(e,!!o,ye,!1):!!r!=!!o&&(s!=null?On(e,!!o,s,!0):On(e,!!o,o?[]:"",!1));return;case"textarea":ve=ye=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Jn(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ye=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Jn(e,s,v,f,r,m)}as(e,ye,ve);return;case"option":for(var kt in o)if(ye=o[kt],o.hasOwnProperty(kt)&&ye!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Jn(e,s,kt,null,r,ye)}for(Q in r)if(ye=r[Q],ve=o[Q],r.hasOwnProperty(Q)&&ye!==ve&&(ye!=null||ve!=null))switch(Q){case"selected":e.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:Jn(e,s,Q,ye,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)ye=o[Yt],o.hasOwnProperty(Yt)&&ye!=null&&!r.hasOwnProperty(Yt)&&Jn(e,s,Yt,null,r,ye);for(ge in r)if(ye=r[ge],ve=o[ge],r.hasOwnProperty(ge)&&ye!==ve&&(ye!=null||ve!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:Jn(e,s,ge,ye,r,ve)}return;default:if(Ps(s)){for(var es in o)ye=o[es],o.hasOwnProperty(es)&&ye!==void 0&&!r.hasOwnProperty(es)&&yh(e,s,es,void 0,r,ye);for(Ne in r)ye=r[Ne],ve=o[Ne],!r.hasOwnProperty(Ne)||ye===ve||ye===void 0&&ve===void 0||yh(e,s,Ne,ye,r,ve);return}}for(var le in o)ye=o[le],o.hasOwnProperty(le)&&ye!=null&&!r.hasOwnProperty(le)&&Jn(e,s,le,null,r,ye);for(ze in r)ye=r[ze],ve=o[ze],!r.hasOwnProperty(ze)||ye===ve||ye==null&&ve==null||Jn(e,s,ze,ye,r,ve)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&S0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],ge=Q.startTime;if(ge>A)break;var Ne=Q.transferSize,ze=Q.initiatorType;Ne&&S0(ze)&&(Q=Q.responseEnd,v+=Ne*(Q<A?1:(A-ge)/(Q-ge)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function sv(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(av)}:j0;function av(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function E0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Is]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),di(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function rv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Is])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function lv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function A0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function N0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function R0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);di(e)}var Bi=new Map,B0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=se.d;se.d={f:uv,r:dv,D:fv,C:hv,L:mv,m:pv,X:gv,S:_v,M:yv};function uv(){var e=Ma.f(),s=vu();return e||s}function dv(e){var s=Do(e);s!==null&&s.tag===5&&s.type==="form"?Q_(s):Ma.r(e)}var nl=typeof document>"u"?null:document;function L0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=As(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),To(s,"link",e),xn(s),r.head.appendChild(s)))}}function fv(e){Ma.D(e),L0("dns-prefetch",e,null)}function hv(e,s){Ma.C(e,s),L0("preconnect",e,s)}function mv(e,s,o){Ma.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+As(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+As(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+As(o.imageSizes)+'"]')):f+='[href="'+As(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Zl(m))||s==="script"&&r.querySelector(Jl(m))||(s=r.createElement("link"),To(s,"link",e),xn(s),r.head.appendChild(s)))}}function pv(e,s){Ma.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+As(r)+'"][href="'+As(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}r=o.createElement("link"),To(r,"link",e),xn(r),o.head.appendChild(r)}}}function _v(e,s,o){Ma.S(e,s,o);var r=nl;if(r&&e){var f=vo(r).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Zl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var Q=v=r.createElement("link");xn(Q),To(Q,"link",e),Q._p=new Promise(function(ge,Ne){Q.onload=ge,Q.onerror=Ne}),Q.addEventListener("load",function(){A.loading|=1}),Q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function gv(e,s){Ma.X(e,s);var o=nl;if(o&&e){var r=vo(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),xn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function yv(e,s){Ma.M(e,s);var o=nl;if(o&&e){var r=vo(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),xn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function O0(e,s,o,r){var f=(f=Ae.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=vo(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=vo(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||xv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=vo(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+As(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function xv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),To(s,"link",o),xn(s),e.head.appendChild(s))}function ol(e){return'[src="'+As(e)+'"]'}function Jl(e){return"script[async]"+e}function $0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+As(o.href)+'"]');if(r)return s.instance=r,xn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),xn(r),To(r,"style",f),Nu(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,xn(m),m;r=z0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),xn(m);var v=m;return v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),To(m,"link",r),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,xn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),xn(f),To(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Nu(r,o.precedence,e));return s.instance}function Nu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function I0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Is]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function P0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function bv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,xn(m);return}m=s.ownerDocument||s,r=z0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),xn(m);var v=m;v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),To(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function wv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*nv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(Sv,e),Bu=null,Ru.call(e))}function Sv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Cv(e,s,o,r,f,m,v,A,Q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=en(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=en(0),this.hiddenUpdates=en(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function V0(e,s,o,r,f,m,v,A,Q,ge,Ne,ze){return e=new Cv(e,s,o,v,Q,ge,Ne,ze,A),s=1,m===!0&&(s|=24),m=hi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function U0(e){return e?(e=Lr,e):Lr}function Y0(e,s,o,r,f,m){f=U0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=$a(e,r,s),o!==null&&(li(o,e,s),Dl(o,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&li(s,e,67108864),Ah(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var s=yi();s=ds(s);var o=cr(e,s);o!==null&&li(o,e,s),Ah(e,s)}}var Ou=!0;function kv(e,s,o,r){var f=I.T;I.T=null;var m=se.p;try{se.p=2,Nh(e,s,o,r)}finally{se.p=m,I.T=f}}function jv(e,s,o,r){var f=I.T;I.T=null;var m=se.p;try{se.p=8,Nh(e,s,o,r)}finally{se.p=m,I.T=f}}function Nh(e,s,o,r){if(Ou){var f=Dh(r);if(f===null)gh(e,s,r,zu,o),q0(e,r);else if(Ev(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<Mv.indexOf(e)){for(;f!==null;){var m=Do(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Zt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Q=1<<31-bt(v);A.entanglements[1]|=Q,v&=~Q}ia(m),(zn&6)===0&&(xu=ht()+500,Gl(0))}}break;case 31:case 13:A=cr(m,2),A!==null&&li(A,m,2),vu(),Ah(m,2)}if(m=Dh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Dh(e){return e=io(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=Ts(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pt()){case At:return 2;case qt:return 8;case dt:case P:return 32;case K:return 268435456;default:return 32}default:return 32}}var Bh=!1,qa=null,Ka=null,Qa=null,tc=new Map,nc=new Map,Za=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Do(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Ev(e,s,o,r,f){switch(s){case"focusin":return qa=sc(qa,e,s,o,r,f),!0;case"dragenter":return Ka=sc(Ka,e,s,o,r,f),!0;case"mouseover":return Qa=sc(Qa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,r,f)),!0}return!1}function K0(e){var s=Ts(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,An(e.priority,function(){X0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,An(e.priority,function(){X0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Ci=r,o.target.dispatchEvent(r),Ci=null}else return s=Do(o),s!==null&&F0(s),e.blockedOn=o,!1;s.shift()}return!0}function Q0(e,s,o){$u(e)&&o.delete(s)}function Tv(){Bh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),tc.forEach(Q0),nc.forEach(Q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Tv)))}var Pu=null;function Z0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=Do(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(Q){return Iu(Q,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Za.length;o++){var r=Za[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)K0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Yn]||null;if(typeof m=="function")v||Z0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Yn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Z0(o)}}}function J0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=yi();Y0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Y0(e.current,2,null,e,null,null),vu(),s[et]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Mn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&K0(e)}};var ey=n.version;if(ey!=="19.2.4")throw Error(a(527,ey,"19.2.4"));se.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Av={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{nt=Vu.inject(Av),Ze=Vu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=rg,m=lg,v=cg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=V0(e,1,!1,null,null,o,r,null,f,m,v,J0),e[et]=s.current,_h(e),new Lh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=rg,v=lg,A=cg,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=V0(e,1,!0,s,o!=null?o:null,r,f,Q,m,v,A,J0),s.context=U0(null),o=s.current,r=yi(),r=ds(r),f=za(r),f.callback=null,$a(o,f,r),o=r,s.current.lanes=o,mt(s,o),ia(s),e[et]=s.current,_h(e),new Hu(s)},ic.version="19.2.4",ic}var uy;function Iv(){if(uy)return zh.exports;uy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=$v(),zh.exports}var Pv=Iv();const Hv=Ox(Pv);var g=up();const Vv=Ox(g);function Uv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Yv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const $i="__TAURI_TO_IPC_KEY__";function Wv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Se(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Fv{get rid(){return Uv(this,hd,"f")}constructor(n){hd.set(this,void 0),Yv(this,hd,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var xi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(xi||(xi={}));async function $x(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Se("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:t,target:c,handler:Wv(n)}).then(u=>async()=>$x(t,u))}async function Xv(t,n,i){return yc(t,a=>{$x(t,a.id),n(a)},i)}async function Gv(t,n){await Se("plugin:event|emit",{event:t,payload:n})}async function qv(t,n,i){await Se("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ix{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ix(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ix?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class Px{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Px(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Uu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Px?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class bc extends Fv{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Em;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Em||(Em={}));class Kv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var dy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(dy||(dy={}));function dp(){return new Hx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Vh(){return Se("plugin:window|get_all_windows").then(t=>t.map(n=>new Hx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Hx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Vh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return dp()}static async getAll(){return Vh()}static async getFocusedWindow(){for(const n of await Vh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Xv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Gv(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return qv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Em.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(xi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(xi.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(xi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Kv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(xi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(xi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(xi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(xi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(xi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(xi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(xi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(xi.WINDOW_THEME_CHANGED,n)}}var fy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(fy||(fy={}));var hy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(hy||(hy={}));var my;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(my||(my={}));var py;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(py||(py={}));async function Qv(t={}){return typeof t=="object"&&Object.freeze(t),await Se("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
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
 */const nw=g.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>g.createElement("svg",{ref:p,...ew,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Vx("lucide",c),...!u&&!tw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,_])=>g.createElement(y,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=(t,n)=>{const i=g.forwardRef(({className:a,...c},u)=>g.createElement(nw,{ref:u,iconNode:n,className:Vx(`lucide-${Zv(_y(t))}`,`lucide-${t}`,a),...c}));return i.displayName=_y(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ux=Zi("chevron-down",sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],iw=Zi("chevron-right",ow);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],rw=Zi("chevron-up",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],cw=Zi("ellipsis",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],dw=Zi("folder-git-2",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Yx=Zi("git-branch-plus",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],mw=Zi("git-commit-horizontal",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],_w=Zi("git-merge",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],yw=Zi("panel-left-close",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],bw=Zi("panel-left-open",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ww=Zi("search",vw),Sw=3.7,Yu=200,Tm=240,ps=540,zs=176,Yh=32,vl=20,Cw=Tm/2,rl=ps+Cw,Ea=18,Ta=18,Wh="#E6E6E6";function gy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Aa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Aa(t).localeCompare(Aa(n))}function Wx(t){return[...t].sort(_c)}function kw(t){var h,p,y,_,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(w=>[Aa(w),w])),i=new Map,a=new Map;t.forEach(w=>i.set(Aa(w),0));for(const w of t){const S=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const j of S){if(!j||!n.has(j))continue;const M=Aa(w);i.set(M,((y=i.get(M))!=null?y:0)+1);const E=(_=a.get(j))!=null?_:[];E.push(w),a.set(j,E)}}for(const w of a.values())w.sort(_c);const c=t.filter(w=>{var S;return((S=i.get(Aa(w)))!=null?S:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),S=Aa(w);if(!d.has(S)){d.add(S),u.push(w);for(const j of(x=a.get(S))!=null?x:[]){const M=Aa(j),E=((b=i.get(M))!=null?b:0)-1;i.set(M,E),E===0&&c.push(j)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(w=>!d.has(Aa(w))).sort(_c)]}function Fx(t,n){var i;return Wx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Xx(t,n,i){return Fx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function jw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Mw(t,n,i){var _,x,b,w,S,j,M;const a=Xx(t,i,n);if(a.length===0)return null;const c=a.map(E=>Mr(t,E)),u=new Set(c.map(E=>E.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(E=>E.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(E=>h&&E.id===h||d&&E.id===d?!0:!E.parentSha||!u.has(E.parentSha));return y||((M=(j=jw(c,p!=null?p:void 0))!=null?j:c[0])!=null?M:null)}function Ew(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Fx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),_=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function fp(t,n,i={},a={}){var ae,oe,Ee,Ve;const u=new Map(t.map(ee=>[ee.name,ee])),d=new Map,h=new Map;for(const ee of t){const I=((ae=i[ee.name])!=null?ae:[]).filter(se=>se.kind!=="branch-created").map(se=>new Date(se.date).getTime()).filter(se=>Number.isFinite(se)).sort((se,W)=>se-W)[0];I!=null&&h.set(ee.name,I)}const p=ee=>{const fe=h.get(ee.name);return fe!=null?fe:gy(ee).start},y=ee=>{var I;const fe=(I=a[ee.name])!=null?I:null;return fe&&fe!==ee.name&&(fe===n||u.has(fe))?fe:ee.name===n?null:ee.parentBranch&&ee.parentBranch!==ee.name&&(ee.parentBranch===n||u.has(ee.parentBranch))?ee.parentBranch:null};for(const ee of t){if(ee.name===n)continue;const fe=(oe=y(ee))!=null?oe:n,I=(Ee=d.get(fe))!=null?Ee:[];I.push(ee),d.set(fe,I)}for(const ee of d.values())ee.sort((fe,I)=>p(fe)-p(I)||fe.name.localeCompare(I.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ee of Object.values(i))for(const fe of ee){const I=new Date(fe.date).getTime();Number.isFinite(I)&&(fe.fullSha&&S.set(fe.fullSha,I),fe.sha&&S.set(fe.sha,I))}const j=(ee,fe)=>({start:Math.min(ee,fe),end:Math.max(ee,fe)}),M=ee=>{var X,de;const fe=j(p(ee),gy(ee).end),I=[fe],se=fe.start,W=Ew(ee,n,i),he=W?S.get(W):void 0,Me=new Date((de=(X=ee.divergedFromDate)!=null?X:ee.createdDate)!=null?de:ee.lastCommitDate).getTime(),$=Number.isFinite(he!=null?he:NaN)?he:Number.isFinite(Me)?Me:null;if($==null)return I;const ue=j($,se);return ue.start!==ue.end&&I.push(ue),I},E=Math.max(1,360*60*1e3*Sw),O=(ee,fe)=>!(ee.start-fe.end>=E||fe.start-ee.end>=E),L=(ee,fe)=>fe.some(I=>{var se;return((se=w.get(ee))!=null?se:[]).some(W=>O(I,W))}),D=(ee,fe=new Set)=>{const I=b.get(ee);if(I!=null)return I;if(fe.has(ee))return 1;fe.add(ee);const se=u.get(ee);if(!se||ee===n)return fe.delete(ee),b.set(ee,0),0;const W=y(se),he=W?D(W,fe)+1:1;return fe.delete(ee),b.set(ee,he),he},G=(ee,fe=new Set)=>{var Ae,Ue;const I=_.get(ee);if(I)return I.column;if(fe.has(ee))return 0;fe.add(ee);const se=u.get(ee);if(!se)return fe.delete(ee),0;if(ee===n){const Pe={name:ee,column:0,parentName:null};_.set(ee,Pe),x.push(Pe);const at=M(se);return w.set(0,[...(Ae=w.get(0))!=null?Ae:[],...at]),fe.delete(ee),0}const W=y(se),he=W&&!fe.has(W)?W:null,Me=he?G(he,fe):0,$=Math.max(1,D(ee)),ue=Math.max(he?Me+1:1,$),X=M(se);let de=ue;for(;L(de,X);)de+=1;const be={name:ee,column:de,parentName:he};return _.set(ee,be),x.push(be),w.set(de,[...(Ue=w.get(de))!=null?Ue:[],...X]),fe.delete(ee),de};G(n);const V=t.filter(ee=>!_.has(ee.name)).sort((ee,fe)=>p(ee)-p(fe)||ee.name.localeCompare(fe.name)),q=V.filter(ee=>y(ee)!=null),H=V.filter(ee=>y(ee)==null);for(const ee of q)G(ee.name);let J=Math.max(0,...x.map(ee=>ee.column))+1+1;for(const ee of H){const fe=M(ee);let I=J;for(;L(I,fe);)I+=1;const se={name:ee.name,column:I,parentName:null};_.set(ee.name,se),x.push(se),w.set(I,[...(Ve=w.get(I))!=null?Ve:[],...fe]),J=I+1}return x.sort((ee,fe)=>ee.column-fe.column||ee.name.localeCompare(fe.name))}function Tw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Fi=0,Xh=0,Aw=1800*1e3,Nw=1440*60*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ao=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function yy(t,n,i=new Map){var H,J,ae,oe,Ee,Ve,ee,fe,I,se,W,he,Me,$,ue;if(t.length===0)return new Map;const a=[...t].sort((X,de)=>{const be=Li(X.date)-Li(de.date);return be!==0?be:X.id!==de.id?X.id.localeCompare(de.id):X.visualId.localeCompare(de.visualId)}),c=new Map;for(const X of t){const de=(H=X.parentSha)!=null?H:null;if(de){const be=(J=c.get(de))!=null?J:new Set;be.add(X.id),c.set(de,be)}for(const be of(ae=i.get(X.id))!=null?ae:[]){if(!be)continue;const Ae=(oe=c.get(be))!=null?oe:new Set;Ae.add(X.id),c.set(be,Ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,_=new Map,x=new Map,b=new Map;for(const X of t){const de=(Ee=y.get(X.branchName))!=null?Ee:new Set;de.add(X.id),y.set(X.branchName,de);const be=(ee=(Ve=n.get(X.branchName))==null?void 0:Ve.column)!=null?ee:0,Ae=(fe=_.get(X.id))!=null?fe:new Set;Ae.add(be),_.set(X.id,Ae);const Ue=new Set;X.parentSha&&Ue.add(X.parentSha),x.set(X.visualId,Ue);const Pe=new Set(Ue);for(const at of(I=i.get(X.id))!=null?I:[])at&&Pe.add(at);b.set(X.visualId,Pe)}const w=new Set(Array.from(_.keys())),S=Array.from(w),j=new Map,M=X=>{const de=[];for(const be of S)Ao(be,X)&&de.push(be);return de},E=new Map;for(const X of S)E.set(X,new Set);for(const X of t){const de=M(X.id);if(de.length===0)continue;const be=(se=b.get(X.visualId))!=null?se:new Set,Ae=new Set;for(const Ue of be)for(const Pe of M(Ue))Ae.add(Pe);for(const Ue of de){const Pe=(W=E.get(Ue))!=null?W:new Set;for(const at of Ae)Pe.add(at);E.set(Ue,Pe)}}const O=new Map,L=(X,de=new Set)=>{var Pe;const be=O.get(X);if(be)return be;if(de.has(X))return new Set;de.add(X);const Ae=(Pe=E.get(X))!=null?Pe:new Set,Ue=new Set;for(const at of Ae){Ue.add(at);for(const Ot of L(at,de))Ue.add(Ot)}return de.delete(X),O.set(X,Ue),Ue},D=(X,de)=>{if(Ao(X,de))return!0;const be=M(X),Ae=M(de);for(const Ue of be){const Pe=L(Ue);for(const at of Ae)if(Pe.has(at))return!0}for(const Ue of Ae){const Pe=L(Ue);for(const at of be)if(Pe.has(at))return!0}return!1};let G=1;const V=(X,de)=>{var Ye,We,Xe,Ge,ht,pt,At,qt,dt;const be=(We=(Ye=n.get(X.branchName))==null?void 0:Ye.column)!=null?We:0,Ae=(Xe=y.get(X.branchName))!=null?Xe:new Set,Pe=!(!!X.parentSha&&Ae.has(X.parentSha))&&X.parentSha?X.parentSha:null,at=Array.from(de).flatMap(P=>M(P).flatMap(K=>{var me;return(me=j.get(K))!=null?me:[]})),Ot=(X.kind==="branch-created"||X.kind==="stash")&&at.length>0?Math.max(...at)+1:null,Qt=at.length>0?Math.max(...at)+1:1,Fe=(Ge=c.get(X.id))!=null?Ge:new Set,Ut=Array.from(Fe).flatMap(P=>{var K;return Array.from((K=_.get(P))!=null?K:[])}).some(P=>P!==be),Je=new Date(X.date).getTime(),St=Math.max(Qt,1);let xe=null;for(let P=St;P<G;P+=1){const K=(ht=d.get(P))!=null?ht:[];if(K.length===0||Ut||p.has(P))continue;const me=(pt=b.get(X.visualId))!=null?pt:new Set;if(!(K.some(je=>D(X.id,je.sha)?!0:Array.from(me).some(qe=>Ao(qe,je.sha)))||K.some(je=>je.column===be)||!Number.isFinite(Je)||!K.every(je=>{if(!Number.isFinite(je.time))return!1;const qe=!!Pe&&!!je.branchEntryParentSha&&Pe===je.branchEntryParentSha?Nw:Aw;return Math.abs(je.time-Je)<=qe}))){xe=P;break}}Ot!=null&&(xe=Ot),xe==null&&(xe=Math.max(Qt,G)),u.set(X.visualId,xe),xe>=G&&(G=xe+1);const ne=(At=d.get(xe))!=null?At:[];ne.push({visualId:X.visualId,sha:X.id,column:be,time:Je,branchEntryParentSha:Pe}),d.set(xe,ne),Ut&&p.add(xe);for(const P of de){const K=(qt=h.get(P))!=null?qt:[];K.push(xe),h.set(P,K)}const Te=(dt=j.get(X.id))!=null?dt:[];Te.push(xe),j.set(X.id,Te)};for(const X of a){const de=(he=x.get(X.visualId))!=null?he:new Set;V(X,de)}const q=Math.max(1,a.length*2);for(let X=0;X<q;X+=1){let de=!1;for(const be of a){const Ae=(Me=x.get(be.visualId))!=null?Me:new Set;if(Ae.size===0)continue;const Ue=($=u.get(be.visualId))!=null?$:1;let Pe=1;for(const at of Ae){const Ot=M(at).flatMap(Qt=>{var Fe;return(Fe=j.get(Qt))!=null?Fe:[]});Ot.length>0&&(Pe=Math.max(Pe,Math.max(...Ot)+1))}if(Ue<Pe){u.set(be.visualId,Pe);const at=(ue=j.get(be.id))!=null?ue:[];at.length===0?j.set(be.id,[Pe]):j.set(be.id,[...at.slice(0,-1),Pe]),de=!0}}if(!de)break}return u}function Mc(t){var as,wi,Fo,Ji,Gt,Gs,Ps,Xo,Si,Go,qs,Ci,io,kn,mo,Hn,Ds,ao,dn,Hs,Vs,Rs,ms,Ro,Ks,So,po,Bo,En,Vn,Wn,Co,ro,Qs,ti,_o,js,Bs,qo,ko,go,Lo,Oo,ki,ea,Ii,lo,Zs,jt,zo,co,ni,si,Ms,yo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:M="horizontal",nodePositionOverrides:E={}}=t,O=M==="horizontal",L=new Map(i.map(k=>[k.name,k])),D=new Map(n.map(k=>[k.name,k])),G=kw([...a.map(k=>{var U,ce,we,Ke;return{id:k.fullSha,branchName:d,message:(U=k.prTitle)!=null?U:k.sha,author:"",date:k.date,parentSha:(we=(ce=k.parentShas)==null?void 0:ce[0])!=null?we:null,parentShas:(Ke=k.parentShas)!=null?Ke:[]}}),...((as=h[d])!=null?as:[]).map(k=>Mr(d,k)),...c.map(k=>Mr(k.branch||"",k)),...u.map(k=>Mr(k.branch||"",k))]),V=new Map,q=new Map;for(const k of i){if(k.name===d)continue;const U=Xx(k.name,y,h);q.set(k.name,U);const ce=Wx(U.map(Ft=>Mr(k.name,Ft)));if(ce.length>0){V.set(k.name,ce);continue}const we=(Ji=(Fo=(wi=k.presidesFromSha)!=null?wi:k.divergedFromSha)!=null?Fo:k.createdFromSha)!=null?Ji:null;if(!we)continue;const Ke=(Gt=c.find(Ft=>Ao(Ft.fullSha,we)||Ao(Ft.sha,we)))==null?void 0:Gt.date,st=Ke?null:(Gs=Object.values(h).flat().find(Ft=>Ao(Ft.fullSha,we)||Ao(Ft.sha,we)))==null?void 0:Gs.date,Rt={id:`BRANCH_HEAD:${k.name}:${we}`,branchName:k.name,message:`Branch ${k.name}`,author:k.lastCommitAuthor,date:(Si=(Xo=(Ps=Ke!=null?Ke:st)!=null?Ps:k.createdDate)!=null?Xo:k.divergedFromDate)!=null?Si:k.lastCommitDate,parentSha:we,clusterKey:null,childShas:[],kind:"branch-created"};V.set(k.name,[Rt])}const H=new Set(G.map(k=>k.id)),J=(Go=[...G].sort((k,U)=>Li(k.date)-Li(U.date)||k.id.localeCompare(U.id))[0])!=null?Go:null,ae=new Map(Array.from(V.entries()).map(([k,U])=>[k,new Set(U.map(ce=>ce.id))])),oe=new Map;for(const k of i){if(k.name===d)continue;const U=Mw(k.name,h,y);if(U){oe.set(k.name,U);continue}const ce=(qs=V.get(k.name))==null?void 0:qs[0];if(ce){const we=(kn=(io=(Ci=k.presidesFromSha)!=null?Ci:k.divergedFromSha)!=null?io:k.createdFromSha)!=null?kn:null;oe.set(k.name,{...ce,parentSha:we})}}const Ee=new Map;for(const[k,U]of V.entries()){const ce=U.find(we=>we.kind!=="branch-created");ce&&Ee.set(k,ce)}const Ve=new Map;for(const[k,U]of V.entries()){const ce=U.filter(st=>st.kind!=="branch-created"),Ke=(mo=(ce.length>0?ce:U)[0])!=null?mo:null;Ke&&Ve.set(k,Ke)}const ee=new Map;for(const k of i){if(k.name===d)continue;const U=(Hn=Ve.get(k.name))!=null?Hn:null,ce=(ao=(Ds=oe.get(k.name))==null?void 0:Ds.parentSha)!=null?ao:null,we=(Vs=(Hs=(dn=k.presidesFromSha)!=null?dn:k.divergedFromSha)!=null?Hs:k.createdFromSha)!=null?Vs:null,Ke=(Rs=U==null?void 0:U.parentSha)!=null?Rs:null,st=(ms=Ke!=null?Ke:ce)!=null?ms:we;st&&ee.set(k.name,st)}const fe=k=>{var st,Rt,Ft,tn,rn,on,vn,N;const U=(st=p[k.name])!=null?st:null;if(!(U&&U!==d&&U!==k.name&&L.has(U)))return U!=null?U:"";const we=(tn=(Ft=(Rt=ee.get(k.name))!=null?Rt:k.presidesFromSha)!=null?Ft:k.divergedFromSha)!=null?tn:k.createdFromSha;if(we&&((rn=ae.get(U))!=null?rn:new Set).has(we))return U;const Ke=(vn=(on=oe.get(k.name))==null?void 0:on.parentSha)!=null?vn:null;return Ke&&((N=ae.get(U))!=null?N:new Set).has(Ke),U},I=k=>{var Ke,st,Rt,Ft,tn,rn,on,vn;const U=oe.get(k.name),ce=(tn=(Ft=(Rt=(st=(Ke=ee.get(k.name))!=null?Ke:U==null?void 0:U.parentSha)!=null?st:k.presidesFromSha)!=null?Rt:k.divergedFromSha)!=null?Ft:k.createdFromSha)!=null?tn:null;if(!k.parentBranch&&!ce||!ce)return null;if(fe(k)===d){if(H.has(ce))return ce;const N=(rn=U==null?void 0:U.parentSha)!=null?rn:null;return N&&H.has(N)?N:(vn=(on=J==null?void 0:J.id)!=null?on:N)!=null?vn:ce}return H.has(ce),ce},se=k=>I(k),W=new Map;for(const k of[...c,...u]){const U={...Mr(k.branch||"",k),visualId:`${k.branch||""}:${k.fullSha}`};W.set(k.fullSha,U)}const he=new Map(W),Me=k=>{he.has(k.id)||he.set(k.id,k)},$=new Map(Array.from(V.entries()).map(([k,U])=>[k,new Set(U.map(ce=>ce.id))])),ue=new Set;for(const k of $.values())for(const U of k)ue.add(U);for(const k of G)ue.has(k.id)||Me({...k,visualId:`${k.branchName}:${k.id}`});for(const[k,U]of V.entries())for(const ce of U)Me({...ce,visualId:`${k}:${ce.id}`});const de=[...Array.from(he.values()).map(k=>({...k,visualId:`${k.branchName}:${k.id}`}))].sort((k,U)=>Li(k.date)-Li(U.date)||k.id.localeCompare(U.id)),be=new Map;for(const k of de){const U=(Ro=be.get(k.branchName))!=null?Ro:new Set;U.add(k.id),be.set(k.branchName,U)}const Ae=(k,U)=>{const ce=be.get(k);if(!ce||ce.size===0)return!1;for(const we of ce)if(Ao(we,U))return!0;return!1},Ue=(k,U)=>{const ce=Array.from(be.entries()).filter(([we])=>we!==U).filter(([,we])=>Array.from(we).some(Ke=>Ao(Ke,k))).map(([we])=>we);return ce.length>0?ce.sort()[0]:k.slice(0,7)},Pe=[],at=new Map,Ot=new Map;for(const k of a){const U=k.fullSha,ce=k.targetBranch,we=k.targetCommitSha;if(!U||!ce||!we||!Ae(ce,we))continue;const Ke=((Ks=k.parentShas)!=null?Ks:[]).slice(1).filter(Rt=>!!Rt&&!Ao(Rt,U));if(Ke.length===0)continue;const st=(So=Ot.get(U))!=null?So:new Set;for(const Rt of Ke){st.add(Rt);const Ft=Ue(Rt,ce);Pe.push({sourceCommitSha:Rt,sourceBranchName:Ft,mergeCommitSha:U,targetCommitSha:we,targetBranchName:ce});const tn=(po=at.get(Ft))!=null?po:new Map,rn=(Bo=tn.get(Rt))!=null?Bo:new Set;rn.add(ce),tn.set(Rt,rn),at.set(Ft,tn)}Ot.set(U,st)}const Qt=new Map;for(const k of i){if(k.name===d)continue;const U=I(k);U&&Qt.set(k.name,U)}const Fe=new Map;for(const k of de){const U=Ot.get(k.id);if(U&&U.size>0){const Ke=(En=Fe.get(k.id))!=null?En:new Set;for(const st of U)Ke.add(st);Fe.set(k.id,Ke)}if(k.branchName===d)continue;const ce=Qt.get(k.branchName);if(!ce||ce===k.id)continue;const we=(Vn=Fe.get(k.id))!=null?Vn:new Set;we.add(ce),Fe.set(k.id,we)}const rt=new Map,Ut=new Map;for(const k of de){if(Ut.set(k.id,k),k.parentSha){const U=(Wn=rt.get(k.parentSha))!=null?Wn:new Set;U.add(k.id),rt.set(k.parentSha,U)}for(const U of(Co=Fe.get(k.id))!=null?Co:[]){if(!U)continue;const ce=(ro=rt.get(U))!=null?ro:new Set;ce.add(k.id),rt.set(U,ce)}}const Je=new Map;for(const[k,U]of rt.entries())Je.set(k,Array.from(U));const St=new Set(["branch-created","stash"]),xe=new Set,ne=k=>{if(!k)return null;const U=de.find(ce=>Ao(ce.id,k)||Ao(ce.visualId.split(":").slice(1).join(":"),k));return U!=null?U:null};for(const k of de){if(k.parentSha){const ce=ne(k.parentSha),we=!!ce&&xe.has(ce.visualId);ce&&(k.kind==="stash"||k.kind==="branch-created"||we)&&xe.add(ce.visualId)}const U=(Qs=rt.get(k.id))!=null?Qs:new Set;(U.size>1||Array.from(U).map(ce=>Ut.get(ce)).some(ce=>ce!=null&&ce.kind!=null&&St.has(ce.kind)))&&xe.add(k.visualId)}const Te=de.map(k=>{var U,ce;return{...k,childShas:(ce=(U=Je.get(k.id))!=null?U:k.childShas)!=null?ce:[]}}),Ye=yy(Te,D,Fe),We=new Map;for(const k of Te){const U=(ti=We.get(k.branchName))!=null?ti:[];U.push(k),We.set(k.branchName,U)}const Xe=new Map,Ge=new Map,ht=new Map,pt=new Map,At=new Map,qt=(k,U)=>{var Ft,tn,rn,on,vn;if(U.length===0)return[];const ce=[...U].sort((N,Y)=>{var Le,ot;const Z=(Le=Ye.get(N.visualId))!=null?Le:Number.MAX_SAFE_INTEGER,re=(ot=Ye.get(Y.visualId))!=null?ot:Number.MAX_SAFE_INTEGER;return Z!==re?Z-re:Li(N.date)-Li(Y.date)||N.id.localeCompare(Y.id)}),we=new Map;let Ke=null,st=0;for(const N of ce){const Y=N.kind==="stash"||N.kind==="branch-created",Z=xe.has(N.visualId);if(Y)continue;Ke||(st+=1,Ke=`cluster:${k}:segment:${st}`);const re=(Ft=we.get(Ke))!=null?Ft:[];re.push(N),we.set(Ke,re),Z&&(Ke=null)}const Rt=[];for(const[N,Y]of we.entries()){if(Y.length===0)continue;const re=[...Y].sort((it,Nt)=>{var Us,xs;const Jt=(Us=Ye.get(it.visualId))!=null?Us:Number.MIN_SAFE_INTEGER,rs=(xs=Ye.get(Nt.visualId))!=null?xs:Number.MIN_SAFE_INTEGER;return Jt!==rs?rs-Jt:Li(Nt.date)-Li(it.date)||Nt.id.localeCompare(it.id)})[0].visualId,Le={branchName:k,key:N,commitIds:Y.map(it=>it.visualId),leadId:re,count:Y.length};Rt.push(Le);const ot=(tn=At.get(N))!=null?tn:0;if(!pt.has(N))pt.set(N,re);else{const it=pt.get(N),Nt=Ut.get(it.split(":").slice(1).join(":"));if(Nt){const Jt=(rn=Ye.get(Nt.visualId))!=null?rn:Number.MIN_SAFE_INTEGER;((on=Ye.get(re))!=null?on:Number.MIN_SAFE_INTEGER)>Jt&&pt.set(N,re)}}At.set(N,Math.max(ot,Y.length));for(const it of Le.commitIds){Ge.set(it,N);const Nt=it.split(":").slice(1).join(":"),Jt=(vn=ht.get(Nt))!=null?vn:[];Jt.includes(N)||Jt.push(N),ht.set(Nt,Jt)}}return Rt};for(const[k,U]of We.entries())Xe.set(k,qt(k,U));const dt=new Map;for(const k of Te)dt.set(k.id,k);const P=k=>{if(!k)return"none";const U=Array.from(dt.values()).find(ce=>Ao(ce.id,k)||Ao(ce.id.slice(0,7),k)||Ao(k,ce.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:k.slice(0,7)},K=b?["Lane rows (expected):",...[...n].sort((k,U)=>k.column-U.column||k.name.localeCompare(U.name)).map(k=>{var U;return`  row=${k.column} branch=${k.name} parent=${(U=k.parentName)!=null?U:"none"}`}),"",...i.flatMap(k=>{var Rt,Ft,tn,rn,on,vn,N,Y;const U=(Rt=h[k.name])!=null?Rt:[],ce=[...(Ft=q.get(k.name))!=null?Ft:[]].reverse(),we=new Set(((tn=V.get(k.name))!=null?tn:[]).map(Z=>Z.id)),Ke=(on=(rn=ce.find(Z=>!Z.parentSha||!ce.some(re=>{var Le;return Ao(re.fullSha,(Le=Z.parentSha)!=null?Le:"")})))!=null?rn:ce[0])!=null?on:null,st=(N=(vn=Ke==null?void 0:Ke.parentSha)!=null?vn:ee.get(k.name))!=null?N:null;return[`Branch ${k.name}`,`  ahead=${(Y=y[k.name])!=null?Y:0} previews=${ce.length} rendered=${we.size}`,`  db parent commit=${P(st)}`,`  db child commit=${Ke?`${Ke.fullSha.slice(0,7)} ${k.name}`:"none"}`,...ce.map(Z=>{const re=we.has(Z.fullSha)?"visible":"hidden",Le=we.has(Z.fullSha)?"kept by render set":"dropped by render set";return`  ${re} ${Z.fullSha.slice(0,7)} ${Z.message} [${Le}]`}),U.length===0?"  no preview data":null].filter(Z=>Z!=null)})]:[],me=b?Array.from(V.entries()).map(([k,U])=>[`Branch debug ${k}`,...U.map(ce=>`  ${ce.id.slice(0,7)} ${ce.message}`)].join(`
`)):[],ke=Ye,nt=Tm/Fu,Ze=20/Fu,je=O?ps+nt+Ze:Yu+nt+Ze,bt=O?Yu+nt+Ze:rl,qe=Math.max(0,...Te.map(k=>{var U;return(U=ke.get(k.visualId))!=null?U:1})),Pt=Te.map(k=>{var Ke,st;const U=D.get(k.branchName),ce=(Ke=ke.get(k.visualId))!=null?Ke:1,we=(st=U==null?void 0:U.column)!=null?st:0;return O?{commit:k,row:ce,column:we,x:Ta+(ce-1)*je,y:Ea+we*bt}:{commit:k,row:ce,column:we,x:Ta+we*rl,y:Ea+(qe-ce)*je}}),gt=k=>{var ce;const U=(ce=E[k.commit.visualId])!=null?ce:E[k.commit.id];return U?{...k,x:U.x,y:U.y}:k},tt=Pt.map(gt),Bt=w.trim().toLowerCase(),$t=Bt?tt.filter(k=>{const U=k.commit.id.toLowerCase(),ce=k.commit.id.slice(0,7).toLowerCase(),we=k.commit.message.toLowerCase(),Ke=k.commit.branchName.toLowerCase();return U.includes(Bt)||ce.includes(Bt)||we.includes(Bt)||Ke.includes(Bt)}):tt,Zt=S&&(_o=tt.find(k=>k.commit.id===S))!=null?_o:null,ct=new Set($t.map(k=>k.commit.id)),lt=(js=j==null?void 0:j.headSha)!=null?js:null,Tt=(()=>{var U,ce;const k=(U=j==null?void 0:j.branchName)!=null?U:null;return!lt||!k?null:(ce=Ge.get(`${k}:${lt}`))!=null?ce:null})(),vt=new Set;for(const[k,U]of At.entries())U>1&&k!==Tt&&vt.add(k);const en=[...de].filter(k=>{var st;const U=Ge.get(k.visualId);if(!U)return!0;const ce=pt.get(U),we=(st=At.get(U))!=null?st:1,Ke=_.has(U)||!vt.has(U)&&!x.has(U);return we<=1||Ke||ce===k.visualId}),mt=yy(en,D,Fe),yt=Tm/Fu,cn=20/Fu,Wt=O?ps+yt+cn:Yu+yt+cn,Ht=O?Yu+yt+cn:rl,ds=Math.max(0,...de.map(k=>{var U;return(U=Ye.get(k.visualId))!=null?U:1})),In=Math.max(0,...en.map(k=>{var U;return(U=mt.get(k.visualId))!=null?U:1})),Mn=Math.max(0,ds-In),mn=[...en.map(k=>{var Ke,st;const U=D.get(k.branchName),ce=(Ke=mt.get(k.visualId))!=null?Ke:1,we=(st=U==null?void 0:U.column)!=null?st:0;return gt(O?{commit:k,row:ce,column:we,x:Ta+(Mn+ce-1)*Wt,y:Ea+we*Ht}:{commit:k,row:ce,column:we,x:Ta+we*rl,y:Ea+(In-ce)*Wt})})].sort((k,U)=>k.row!==U.row?k.row-U.row:k.column!==U.column?k.column-U.column:k.commit.visualId.localeCompare(U.commit.visualId)).map(k=>({...k})),fn=new Set;for(const k of mn){let U=k.row,ce=`${k.column}:${U}`;for(;fn.has(ce);)U+=1,ce=`${k.column}:${U}`;k.row=U,fn.add(ce)}const Yn=Math.max(0,...mn.map(k=>k.row));for(const k of mn){if(O){k.x=Ta+(Mn+k.row-1)*Wt,k.y=Ea+k.column*Ht;continue}k.x=Ta+k.column*rl,k.y=Ea+(Yn-k.row)*Wt}const et=new Map;for(const k of mn){const U=(Bs=et.get(k.commit.id))!=null?Bs:[];U.push(k),et.set(k.commit.id,U)}const ss=new Map;for(const k of mn){const U=Ge.get(k.commit.visualId);if(!U)continue;const ce=ss.get(U);(!ce||(O?k.x>ce.x:k.y<ce.y))&&ss.set(U,k)}const Ho=(k,U)=>`${k.toFixed(1)} ${U.toFixed(1)}`,Vo=Math.max(0,...mn.map(k=>k.row)),Xs=Math.max(0,...n.map(k=>k.column)),Is=Math.max(0,...mn.map(k=>k.x+ps)),di=Math.max(0,...mn.map(k=>k.y+vl+zs)),Ts=Math.max(O?Ta*2+Math.max(0,Vo-1)*Wt+ps+Yh+cn:Ta*2+(Xs+1)*rl,Is+Ta),Do=Math.max(O?Ea*2+Xs*Ht+zs+Yh+cn:Ea*2+Math.max(0,Vo-1)*Wt+zs+Yh+cn,di+Ea),bo=[],vo=new Map(i.map(k=>{var ce,we;const U=new Date((we=(ce=k.createdDate)!=null?ce:k.divergedFromDate)!=null?we:k.lastCommitDate).getTime();return[k.name,Number.isFinite(U)?U:0]})),xn=k=>{var U;return(U=vo.get(k))!=null?U:0},vi=[],bn=k=>{b&&vi.push(k)},gs=new Set,os=new Map,ks=(k,U)=>{var we;const ce=(we=os.get(k))!=null?we:[];ce.includes(U)||ce.push(U),os.set(k,ce)},Uo=new Set,fs=new Set,is=new Set,ys=(k,U)=>{var Ke,st;if(!k)return null;const ce=Wu(et,k,U);if(ce)return ce;const we=(Ke=Ge.get(`${U!=null?U:d}:${k}`))!=null?Ke:Ge.get(k);return we&&(st=ss.get(we))!=null?st:null},un=new Set;for(const k of i){const U=se(k);U&&fs.add(U);const ce=(qo=ee.get(k.name))!=null?qo:null;ce&&is.add(ce)}const Pn=k=>{var Ke;const U=ys(k.id,k.branchName);if(U)return U;const ce=Ge.get(k.visualId);if(!ce)return null;const we=pt.get(ce);return we&&(Ke=mn.find(st=>st.commit.id===we))!=null?Ke:null},pn=(k,U)=>k?Wu(et,k,U):null,qn=(k,U)=>O?{x:k.x-Fi,y:k.y+zs/2,face:"left"}:{x:k.x+ps/2,y:k.y+zs+Fi,face:"bottom"},fa=k=>O?{x:k.x-Fi,y:k.y+zs/2,face:"left"}:{x:k.x+ps/2,y:k.y+zs+Fi,face:"bottom"},Yo=(k,U)=>k.column!==U.column?!0:O?k.commit.branchName!==U.commit.branchName:!1,fi=(k,U,ce)=>{if(!O)return{x:U?k.x+ps:k.x+ps/2,y:U?k.y+zs/2:k.y,face:U?"right":"top"};if(!U)return{x:k.x+ps+Fi,y:k.y+zs/2,face:"right"};if(ce&&ce.column===k.column&&ce.commit.branchName!==k.commit.branchName){if(ce.x>k.x)return{x:k.x+ps/2,y:k.y+zs+Fi,face:"bottom"};if(ce.x<k.x)return{x:k.x+ps/2,y:k.y-Fi,face:"top"}}return!ce||ce.column===k.column?{x:k.x+ps+Fi,y:k.y+zs/2,face:"right"}:ce.column>k.column?{x:k.x+ps/2,y:k.y+zs+Fi,face:"bottom"}:{x:k.x+ps/2,y:k.y-Fi,face:"top"}},wo=k=>O?{x:k.x+ps/2,y:k.y+zs+Fi,face:"bottom"}:{x:k.x+ps,y:k.y+zs/2,face:"right"},Wo=(k,U)=>Wu(et,k,U),As=(k,U)=>pn(k,U),hs=[],Nn=new Set;for(const k of Pe){const U=(ko=ys(k.targetCommitSha,k.targetBranchName))!=null?ko:null;if(!U){bn({id:`merge:${k.mergeCommitSha}:${k.sourceCommitSha}:target`,kind:"merge",parent:k.sourceCommitSha,child:k.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ce=k.sourceCommitSha,we=`merge:${k.mergeCommitSha}:${ce!=null?ce:"unknown"}`;if(!ce||Ao(ce,k.targetCommitSha)){bn({id:we,kind:"merge",parent:ce!=null?ce:"unknown",child:k.targetCommitSha,rendered:!1,reason:ce?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ke=(go=Wu(et,ce))!=null?go:null;if(!Ke){bn({id:we,kind:"merge",parent:ce,child:k.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ke.commit.id===U.commit.id){bn({id:we,kind:"merge",parent:Ke.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let st,Rt,Ft;const tn=O?U.x+ps/2:U.x+ps-Xh,rn=O?U.y+zs+Xh:U.y+zs/2,on=O?"bottom":"right";O?(st=Ke.x+ps+Xh,Rt=Ke.y+zs/2,Ft="right"):(st=Ke.x+ps/2,Rt=Ke.y,Ft="top");const vn=`${st.toFixed(2)}:${Rt.toFixed(2)}:${tn.toFixed(2)}:${rn.toFixed(2)}`;if(Nn.has(vn)){bn({id:we,kind:"merge",parent:Ke.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Nn.add(vn),hs.push({id:we,fromX:st,fromY:Rt,toX:tn,toY:rn,fromFace:Ft,toFace:on,zIndex:xn(Ke.commit.branchName)}),bn({id:we,kind:"merge",parent:Ke.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${k.targetBranchName}`})}const Ns=new Set;for(const k of i){if(k.name===d)continue;const U=oe.get(k.name);if(!U)continue;const ce=fe(k),we=Wo((Lo=ee.get(k.name))!=null?Lo:"",ce),Ke=(Oo=Ee.get(k.name))!=null?Oo:U,st=(ki=As(Ke.id,k.name))!=null?ki:Pn(Ke);if(!we||!st||we.commit.id===st.commit.id){const on=Ge.get(`${k.name}:${U.id}`),vn=Ge.get(`${k.name}:${Ke.id}`),N=!!on&&!vt.has(on),Y=!!vn&&!vt.has(vn),Z=!!on&&!_.has(on)&&(N?x.has(on):!0),re=!!vn&&!_.has(vn)&&(Y?x.has(vn):!0);!we&&!Z&&ks((ea=st==null?void 0:st.commit.id)!=null?ea:U.id,"Missing parent node"),!st&&!re&&ks(U.id,"Missing child node"),bn({id:`branch:${(Ii=we==null?void 0:we.commit.id)!=null?Ii:"null"}->${(lo=st==null?void 0:st.commit.id)!=null?lo:"null"}`,kind:"branch",parent:(Zs=we==null?void 0:we.commit.id)!=null?Zs:"null",child:(jt=st==null?void 0:st.commit.id)!=null?jt:"null",rendered:!1,reason:we?st?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Rt=`branch:${we.commit.id}->${st.commit.id}`;if(un.has(Rt)){bn({id:Rt,kind:"branch",parent:we.commit.id,child:st.commit.id,rendered:!1,reason:"duplicate connector key"});continue}un.add(Rt),Uo.add(we.commit.id);const Ft=Yo(we,st);we.commit.branchName!==st.commit.branchName&&Ns.add(we.commit.id);const tn=wo(we),rn=fa(st);bo.push({id:Rt,fromX:tn.x,fromY:tn.y,toX:rn.x,toY:rn.y,fromFace:tn.face,toFace:rn.face,zIndex:xn(st.commit.branchName)}),bn({id:Rt,kind:"branch",parent:we.commit.id,child:st.commit.id,rendered:!0,reason:Ft?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const k of de){const U=Pn(k);if(!U)continue;const ce=(zo=k.parentSha)!=null?zo:null;if(!ce)continue;const we=(co=ys(ce,k.branchName))!=null?co:Wo(ce,k.branchName);if(!we){const tn=(ni=Ge.get(`${k.branchName}:${ce}`))!=null?ni:Ge.get(ce),rn=!!tn&&!vt.has(tn);!!tn&&!_.has(tn)&&(rn?x.has(tn):!0)||ks(k.id,"Missing parent node"),bn({id:`${k.visualId}->${ce}`,kind:"ancestry",parent:ce,child:k.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===we.commit.id){ks(U.commit.id,"Parent and child resolve to the same node"),bn({id:`${we.commit.id}->${U.commit.id}`,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ke=`${k.branchName}:${(si=we.commit.visualId)!=null?si:we.commit.id}->${U.commit.visualId}`;if(un.has(Ke)){ks(we.commit.id,"Duplicate connector key"),ks(U.commit.id,"Duplicate connector key"),bn({id:Ke,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}un.add(Ke),Uo.add(we.commit.id);const st=Yo(we,U),Rt=fi(we,st,U),Ft=qn(U);bo.push({id:Ke,fromX:Rt.x,fromY:Rt.y,toX:Ft.x,toY:Ft.y,fromFace:Rt.face,toFace:Ft.face,zIndex:xn(U.commit.branchName)}),bn({id:Ke,kind:"ancestry",parent:we.commit.id,child:U.commit.id,rendered:!0,reason:st?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),gs.add(we.commit.id),gs.add(U.commit.id)}const On=new Map;for(const k of mn){const U=(Ms=On.get(k.commit.branchName))!=null?Ms:[];U.push(k),On.set(k.commit.branchName,U)}for(const[k,U]of On.entries()){if(U.length<2)continue;const ce=[...U].sort((we,Ke)=>{var st,Rt,Ft,tn,rn,on,vn,N;return we.row!==Ke.row?we.row-Ke.row:Li((Rt=(st=we==null?void 0:we.commit)==null?void 0:st.date)!=null?Rt:null)-Li((tn=(Ft=Ke==null?void 0:Ke.commit)==null?void 0:Ft.date)!=null?tn:null)||((on=(rn=we==null?void 0:we.commit)==null?void 0:rn.id)!=null?on:"").localeCompare((N=(vn=Ke==null?void 0:Ke.commit)==null?void 0:vn.id)!=null?N:"")});for(let we=1;we<ce.length;we+=1){const Ke=ce[we-1],st=ce[we];if(Ke.commit.id===st.commit.id)continue;const Rt=(yo=st.commit.parentSha)!=null?yo:null;if(Rt&&Wo(Rt,st.commit.branchName))continue;const Ft=`chain:${k}:${Ke.commit.id}->${st.commit.id}`;if(un.has(Ft)){ks(Ke.commit.id,"Duplicate branch chain connector"),ks(st.commit.id,"Duplicate branch chain connector"),bn({id:Ft,kind:"ancestry",parent:Ke.commit.id,child:st.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}un.add(Ft);const tn=Yo(Ke,st),rn=fi(Ke,tn,st),on=qn(st);bo.push({id:Ft,fromX:rn.x,fromY:rn.y,toX:on.x,toY:on.y,fromFace:rn.face,toFace:on.face,zIndex:xn(st.commit.branchName)}),bn({id:Ft,kind:"ancestry",parent:Ke.commit.id,child:st.commit.id,rendered:!0,reason:"branch chain rendered"}),gs.add(Ke.commit.id),gs.add(st.commit.id)}}return{branchByName:L,laneByName:D,mainCommits:G,branchCommitsByLane:V,branchPreviewSets:q,allCommits:de,clustersByBranch:Xe,clusterKeyByCommitId:Ge,clusterKeyBySha:ht,leadByClusterKey:pt,clusterCounts:At,debugRows:K,branchDebugRows:me,nodes:Pt,normalizedSearchQuery:Bt,matchingNodes:$t,matchingNodeIds:ct,focusedNode:Zt,checkedOutClusterKey:Tt,defaultCollapsedClumps:vt,visibleCommitsList:en,renderNodes:mn,visibleNodesBySha:et,visibleNodeByClusterKey:ss,pointFormatter:Ho,contentWidth:Ts,contentHeight:Do,connectors:bo,mergeConnectors:hs,connectorDecisions:vi,nodeWarnings:os,connectorParentShas:Uo,branchStartShas:fs,branchOffNodeShas:is,crossBranchOutgoingShas:Ns,commitIdsWithRenderedAncestry:gs,branchBaseCommitByName:oe,firstBranchCommitByName:Ve,mergeDestinations:Pe,mergeTargetBranchesBySourceBranchAndCommitSha:at}}const Dw=8,Rw=44,xy=120,by=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Gx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Dw){const V=d/_,q=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*H,c1y:n+q*H,c2x:i-V*H,c2y:a-q*H}}if(Math.min(p,y)<Rw){const V=d/_,q=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*H,c1y:n+q*H,c2x:i-V*H,c2y:a-q*H}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,y*.32),M=Math.min(160,y*.42),E=by(c),O=by(u);if(!(E==="v"&&O==="h"||E==="v"&&O==null&&y>=p||E==null&&O==="h"&&y>=p||E==="v"&&O==="v"||E==null&&O==null&&y>p)){const V=i,q=n;return{kind:"elbowH",cx:V,cy:q,s1c1x:t+x*w,s1c1y:n,s1c2x:V-x*S,s1c2y:q,s2c1x:V,s2c1y:q+b*j,s2c2x:i,s2c2y:a-b*M}}const D=t,G=a;return{kind:"elbowV",cx:D,cy:G,s1c1x:t,s1c1y:n+b*M,s1c2x:D,s1c2y:G-b*j,s2c1x:D+x*w,s2c1y:G,s2c2x:i-x*S,s2c2y:a}}function Bw(t,n,i,a,c,u){const d=Gx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function vy(t,n,i,a,c,u,d){const h=Gx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,M=h.cx-S*w,E=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(M-S*w*.5,h.cy)} ${c(M,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,E)}`,`C ${c(h.cx,E+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const hp=2.25,ac=hp/2,Lw=.45,Ow=.01,ca=hp,kd=10,zw=-100,wy=0,Sy=.9,$w=.9,Cy=.001,Gh=.001,Iw=12,Pw=ps+48;function Ln(...t){return t.filter(Boolean).join(" ")}function Hw(t){return Math.max(Lw,Math.min(hp,t))}function Vw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Uw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Yw(t,n,i,a,c,u,d){const h=Bw(t,n,i,a,u,d),p=Uw(h);return qx(c,p)}function Kx(t,n){return{left:t.x,top:t.y+n,right:t.x+ps,bottom:t.y+vl+zs+4}}function Ww(t,n){const i=Pw,a=Math.max(120,Math.ceil(vl+zs+4-n+24)),c=new Map;for(const u of t){const d=Kx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=_;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Fw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=_;S++){const j=d.get(`${w},${S}`);if(j)for(const M of j)x.add(M)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Kx(S,a);qx(n,j)&&b.add(w)}return b}function ky(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ca;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Xw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function jy(t,n,i){const a=n/ca;return!Number.isFinite(a)||a<=0?t:Xw(t,100/a)}function My(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=My(n),a=My(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function Gw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function qw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:_,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:j,canPushCurrentBranch:M,pushCurrentBranchLabel:E,pushableRemoteBranchCount:O,selectedCommitTargetOption:L,mergeInProgress:D,setMergeTargetCommitSha:G,worktrees:V,currentRepoPath:q,worktreeMenuOpen:H,setWorktreeMenuOpen:J,onSwitchToWorktree:ae,onRemoveWorktree:oe,removeWorktreeInProgress:Ee,setCommitDialogOpen:Ve,setNewBranchDialogOpen:ee}){var Ot,Qt;const fe=t.length>0,I=t.length>0&&t.every(Fe=>Fe==="WORKING_TREE"),[se,W]=g.useState(!1),he=g.useRef(null),Me=g.useRef(null),$="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ue=!!p&&d&&!i&&!n&&(!fe||I),X=!!_&&M&&!fe&&!u,de=!!b&&S.length>0&&!u,be=!!x&&O>=2&&!fe&&!u,Ae=!!y&&!c&&!fe&&!a,Ue="Push Selected...",Pe=ue?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>Ve(!0),disabled:!ue}:X?{label:u?"Pushing...":E,iconSrc:"/icon-pushBranch.svg",run:()=>void(_==null?void 0:_()),disabled:!X}:de?{label:Ue,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(S.map(Fe=>({branchName:Fe.branchName,targetSha:Fe.targetSha})))),disabled:!de}:null;return g.useEffect(()=>{const Fe=rt=>{var Je,St;const Ut=rt.target;Ut&&((Je=he.current)!=null&&Je.contains(Ut)||(St=Me.current)!=null&&St.contains(Ut)||(W(!1),J(!1)))};return window.addEventListener("pointerdown",Fe),()=>window.removeEventListener("pointerdown",Fe)},[J]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:he,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{Pe&&Pe.run()},disabled:!Pe||Pe.disabled,className:Ln($,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[l.jsx("img",{src:(Ot=Pe==null?void 0:Pe.iconSrc)!=null?Ot:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),l.jsx("span",{children:(Qt=Pe==null?void 0:Pe.label)!=null?Qt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>W(Fe=>!Fe),disabled:!Pe,"aria-haspopup":"menu","aria-expanded":se,className:Ln($,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Ux,{className:"h-3.5 w-3.5 shrink-0"})}),se&&Pe?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{W(!1),Ve(!0)},disabled:!ue,className:Ln($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ue&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),_==null||_()},disabled:!X,className:Ln($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!X&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing...":E]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),b==null||b(S.map(Fe=>({branchName:Fe.branchName,targetSha:Fe.targetSha})))},disabled:!de,className:Ln($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!de&&"text-muted-foreground opacity-50"),title:j,children:[l.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),Ue]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),x==null||x()},disabled:!be,className:Ln($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!be&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{W(!1),y==null||y()},disabled:!Ae,className:Ln($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Ae&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>ee(!0),disabled:h,className:Ln($,"pointer-events-auto relative z-10 bg-background"),children:[l.jsx(Yx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&L.options.length>0&&L.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(Fe=>{const rt=Fe.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>G(Fe.targetSha),className:Ln("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",rt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Fe.targetBranch},`merge-${Fe.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void w(L.sources,L.targetBranch),disabled:L.sources.length===0||D,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(_w,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),D?"Merging...":"Confirm"]})]}):null,V.length>0&&(ae||oe)?l.jsxs("div",{ref:Me,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>J(Fe=>!Fe),className:$,children:[l.jsx(dw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),V.length," ",V.length===1?"Worktree":"Worktrees"]}),H?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:V.map(Fe=>{var rt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Fe.path,children:Am(Fe,q)?Gw(Fe.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(rt=Fe.branchName)!=null?rt:"detached"," • ",Fe.headSha.slice(0,7)]})]}),Am(Fe,q)?l.jsxs("div",{className:"flex items-center gap-1",children:[ae?l.jsx("button",{type:"button",onClick:()=>{J(!1),ae(Fe.path)},disabled:Ee||Fe.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,oe?l.jsx("button",{type:"button",onClick:()=>void oe(Fe.path,Fe.isPrunable),disabled:Ee,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ee?"...":"Remove"}):null]}):null]},Fe.path)})}):null]}):null]})})}function Kw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=g.useState(!t);return g.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const _=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Qw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:j,focusedNode:M,renderNodes:E,shouldRenderNode:O,manuallyOpenedClumps:L,manuallyClosedClumps:D,defaultCollapsedClumps:G,leadByClusterKey:V,clusterKeyByCommitId:q,clusterCounts:H,commitIdsWithRenderedAncestry:J,nodeWarnings:ae,connectorParentShas:oe,branchStartShas:Ee,branchOffNodeShas:Ve,crossBranchOutgoingShas:ee,branchBaseCommitByName:fe,branchStartAccentClass:I,connectorParentAccentClass:se,commitCornerRadiusPx:W,lineStrokeWidth:he,pointFormatter:Me,connectors:$,mergeConnectors:ue,cullConnectorPath:X,flushCameraReactTick:de,setManuallyOpenedClumps:be,setManuallyClosedClumps:Ae,onCommitCardClick:Ue,unpushedCommitShasSetByBranch:Pe,checkedOutHeadSha:at}){const[Ot,Qt]=g.useState(new Set),Fe=g.useRef(null);g.useEffect(()=>{const xe=new Set;H.forEach((Ye,We)=>{(L.has(We)||!G.has(We)&&!D.has(We))&&xe.add(We)});const ne=Fe.current;if(ne==null){Fe.current=xe;return}const Te=[];if(xe.forEach(Ye=>{ne.has(Ye)||Te.push(Ye)}),Te.length>0){Qt(We=>{const Xe=new Set(We);return Te.forEach(Ge=>Xe.add(Ge)),Xe});const Ye=window.setTimeout(()=>{Qt(We=>{const Xe=new Set(We);return Te.forEach(Ge=>Xe.delete(Ge)),Xe})},260);return Fe.current=xe,()=>{window.clearTimeout(Ye)}}Fe.current=xe},[H,G,D,L]);const rt=(xe,ne)=>{const Te=ne.zIndex-xe.zIndex;if(Te!==0)return Te;const Ye=Math.min(xe.fromY,xe.toY),We=Math.min(ne.fromY,ne.toY),Xe=Ye-We;return Xe!==0?Xe:xe.id.localeCompare(ne.id)},Ut=ue.filter(xe=>X(xe)).sort(rt),Je=$.filter(xe=>X(xe)).sort(rt),St=E.filter(xe=>O(xe));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[St.map(xe=>{var $t,Zt,ct,lt,Tt,vt,en,mt;const ne=q.get(xe.commit.visualId),Te=ne!=null?ne:"none",Ye=(($t=xe.commit.parentShas)!=null&&$t.length?xe.commit.parentShas:xe.commit.parentSha?[xe.commit.parentSha]:["none"]).map(yt=>yt==="none"?yt:yt.slice(0,7)).join(", "),We=(Zt=xe.commit.childShas)!=null&&Zt.length?xe.commit.childShas.map(yt=>yt.slice(0,7)).join(", "):"none",Xe=ne?L.has(ne)||!G.has(ne)&&!D.has(ne):!1,Ge=ne?V.get(ne)===xe.commit.visualId:!1,ht=ne!=null&&Xe&&!Ge&&Ot.has(ne),pt=ne&&(ct=H.get(ne))!=null?ct:1,At=J.has(xe.commit.id),qt=(lt=ae.get(xe.commit.id))!=null?lt:[],dt=qt.length>0&&!At,P=w.includes(xe.commit.id),K=xe.commit.id==="WORKING_TREE"||xe.commit.kind==="uncommitted",me=xe.commit.kind==="stash"||xe.commit.id.startsWith("STASH:"),ke=/^STASH:(\d+)$/.exec(xe.commit.id),nt=ke?`Stash:${ke[1]}`:null,Ze=me?xe.commit.message.trim()&&xe.commit.message.trim()!=="git-visualizer"?xe.commit.message:"Stashed changes":xe.commit.message,je=xe.commit.kind==="branch-created"&&xe.commit.id.startsWith("BRANCH_HEAD:"),bt=K||((vt=(Tt=Pe.get(xe.commit.branchName))==null?void 0:Tt.has(xe.commit.id))!=null?vt:!1),Pt=(K||at!=null&&xe.commit.id===at)&&!P,gt=Pt?"text-[#38BDF2]":P?"text-[#158EFC]":"text-muted-foreground",tt=Pt?{color:"#38BDF2"}:P?{color:"#158EFC"}:void 0,Bt=(en=tt==null?void 0:tt.color)!=null?en:"#8B8B8B";return l.jsxs(Kw,{fadeIn:ht,dataCommitCard:"true",className:Ln("group absolute z-20 cursor-grab active:cursor-grabbing",S&&!j.has(xe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&j.has(xe.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===xe.commit.id?"z-30":""),style:{left:xe.x,top:xe.y,width:ps,height:vl+zs+4,overflow:"visible"},onClick:yt=>Ue(yt,xe),onPointerDown:yt=>y(yt,xe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Ln("min-w-0 h-4 flex-1 text-sm font-medium leading-none",gt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:tt,children:me&&nt?nt:xe.commit.branchName?`${xe.commit.branchName}/${xe.commit.id.slice(0,7)}`:xe.commit.id.slice(0,7)}),Ge&&pt>1?l.jsx("button",{type:"button",onMouseDown:yt=>{yt.stopPropagation()},onClick:yt=>{if(yt.stopPropagation(),yt.preventDefault(),!ne)return;!G.has(ne)?(be(Wt=>{if(!Wt.has(ne))return Wt;const Ht=new Set(Wt);return Ht.delete(ne),Ht}),Ae(Wt=>{const Ht=new Set(Wt);return Ht.has(ne)?Ht.delete(ne):Ht.add(ne),Ht})):(Ae(Wt=>{if(!Wt.has(ne))return Wt;const Ht=new Set(Wt);return Ht.delete(ne),Ht}),be(Wt=>{const Ht=new Set(Wt);return Ht.has(ne)?Ht.delete(ne):Ht.add(ne),Ht})),de()},className:Ln("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",gt),style:tt,children:Xe?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${pt}`}):null]})}),l.jsx("div",{className:Ln("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Pt&&!bt&&!me&&!je?"bg-[#EBF7FE]":P&&!bt&&!me&&!je?"bg-[#E5F0FF]":bt||me||je?"bg-transparent":"bg-[#F5F5F5]",me||K||je?"border-dashed":"",Ve.has(xe.commit.id)||Ee.has(xe.commit.id)||ee.has(xe.commit.id)?I:oe.has(xe.commit.id)?se:((mt=fe.get(xe.commit.branchName))==null?void 0:mt.id)===xe.commit.id?"border-amber-500":dt?"border-red-500":"",(S&&j.has(xe.commit.id)&&!d,"")),style:{top:0,borderWidth:(M==null?void 0:M.commit.id)===xe.commit.id?`${me||K||je?he*(2/1.5):he}px`:`${me||K||je?he*(2/1.5):he}px`,borderColor:(M==null?void 0:M.commit.id)===xe.commit.id?Bt:Pt?"#38BDF2":P?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${W}px`,borderBottomRightRadius:`${W}px`,borderBottomLeftRadius:`${W}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Ln("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",gt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:tt,children:Ge&&Xe?Ze:Ge&&pt>1?`${Ze} +${pt-1}`:Ze}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:dt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:qt.join(`
`),children:"Broken ancestry"}):null}),l.jsxs("div",{className:"mt-2 select-text text-[10px] font-mono uppercase tracking-wide text-muted-foreground/70","data-selectable-text":"true",children:["clusterKey: ",Te]}),l.jsxs("div",{className:"mt-1 select-text text-[10px] font-mono uppercase tracking-wide text-muted-foreground/70","data-selectable-text":"true",children:["parents: ",Ye," | children: ",We]})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Ln("select-text text-sm font-medium",gt),"data-selectable-text":"true",style:tt,children:["@",xe.commit.author]}),l.jsx("div",{className:Ln("select-text text-sm font-medium",gt),"data-selectable-text":"true",style:tt,children:new Date(xe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},xe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Ut.map(xe=>{const{fromX:ne,fromY:Te,toX:Ye,toY:We}=xe,Xe=vy(ne,Te,Ye,We,Me,xe.fromFace,xe.toFace);return l.jsx("path",{d:Xe,fill:"none",stroke:Wh,strokeWidth:he,strokeLinecap:"round",strokeLinejoin:"round"},xe.id)}),Je.map(xe=>{const{fromX:ne,fromY:Te,toX:Ye,toY:We}=xe,Xe=vy(ne,Te,Ye,We,Me,xe.fromFace,xe.toFace);return l.jsx("path",{d:Xe,fill:"none",stroke:Wh,strokeWidth:he,strokeLinecap:"round",strokeLinejoin:"round"},xe.id)})]})]})})})}function Zw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:_,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",..._,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Jw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:M,onNewBranchDialogClose:E,onNewBranchConfirm:O,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:G}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:V=>i(V.target.value),onKeyDown:V=>{(V.metaKey||V.ctrlKey)&&V.key==="Enter"&&(V.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(mw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(V=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:V},V))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:E,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:V=>V.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>M("from-selected-node"),className:Ln("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>M("new-root"),className:Ln("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:V=>j(V.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:E,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:O,disabled:!w.trim()||G||S==="from-selected-node"&&!L&&!D,className:Ln("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Yx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),G?"Creating...":"Create"]})]})]})}):null]})}const Ey="/icon-GitOrientation.svg";function eS({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:Ln("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:Ln("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ey})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ey})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function tS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=g.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(ww,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(rw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Ux,{className:"h-4 w-4 shrink-0"})})]}):null]})}function nS({mapPadHostRef:t,transformLayerRef:n}){const i=g.useRef({x:0,y:0}),a=g.useRef(ac),c=g.useRef({panX:0,panY:0,zoom:ac}),u=g.useRef(null),d=g.useRef(ac),h=g.useRef(null),[p,y]=g.useState(!1),[_,x]=g.useState(ac),[b,w]=g.useState(0),S=g.useRef(null),j=g.useRef(0),M=g.useCallback(()=>{const J=t.current;if(!J)return null;const ae=J.getBoundingClientRect(),oe=getComputedStyle(J),Ee=Number.parseFloat(oe.borderLeftWidth)||0,Ve=Number.parseFloat(oe.borderTopWidth)||0,ee=Number.parseFloat(oe.paddingLeft)||kd,fe=Number.parseFloat(oe.paddingTop)||kd;return{x:ae.left+Ee+ee,y:ae.top+Ve+fe}},[t]),E=g.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),g.startTransition(()=>{w(J=>J+1)}),j.current=performance.now()},[]),O=g.useCallback((J,ae,oe)=>{const Ee=c.current;c.current={panX:J,panY:ae,zoom:oe};const Ve=n.current;if(Ve&&(Ve.style.transform=`translate3d(${J}px, ${ae}px, 0) scale(${oe/ca})`),Math.abs(d.current-oe)>Gh&&(d.current=oe,x(oe)),Math.abs(oe-Ee.zoom)>Gh){E();return}const I=performance.now()-j.current;if(I>=wy){E();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,E()},wy-I)},[E,n]),L=g.useRef(null),D=g.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),G=g.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),V=g.useCallback((J,ae,oe)=>{i.current={x:J,y:ae},a.current=oe,G(),D()},[G,D]);L.current=()=>{u.current=null;const J=c.current,ae=i.current.x,oe=i.current.y,Ee=a.current,Ve=Math.abs(ae-J.panX)<=Cy?ae:J.panX+(ae-J.panX)*Sy,ee=Math.abs(oe-J.panY)<=Cy?oe:J.panY+(oe-J.panY)*Sy,fe=Math.abs(Ee-J.zoom)<=Gh?Ee:J.zoom+(Ee-J.zoom)*$w;O(Ve,ee,fe),Ve!==ae||ee!==oe||fe!==Ee?L.current&&(u.current=window.requestAnimationFrame(L.current)):E()};const q=g.useCallback((J,ae,oe)=>{const Ee=Hw(oe),Ve=i.current.x,ee=i.current.y,fe=a.current,I=M();if(!I){V(Ve,ee,Ee);return}const se=J-I.x,W=ae-I.y,he=fe/ca,Me=Ee/ca,$=(se-Ve)/he,ue=(W-ee)/he,X=se-$*Me,de=W-ue*Me;i.current={x:X,y:de},a.current=Ee,O(X,de,Ee)},[O,M]),H=g.useCallback(J=>{if(J.preventDefault(),J.ctrlKey||J.metaKey){const ae=Math.exp(-J.deltaY*Ow);q(J.clientX,J.clientY,a.current*ae);return}V(i.current.x-J.deltaX,i.current.y-J.deltaY,a.current)},[V,q]);return g.useLayoutEffect(()=>(O(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[O]),g.useLayoutEffect(()=>{const J=n.current;if(!J)return;const ae=c.current;J.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/ca})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:M,flushCameraReactTick:E,syncCamera:V,handleWheel:H}}function sS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function oS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=g.useRef(null),h=g.useRef(!1),p=g.useRef([]),[y,_]=g.useState(!1),[x,b]=g.useState(null),[w,S]=g.useState([]),[j,M]=g.useState(null),E=g.useCallback(L=>{const D=t.current,G=i();if(!D||!G)return[];const V=D.getBoundingClientRect(),q=n.current.zoom/ca;if(q<=0)return[];const H=[],J=L.left,ae=L.left+L.width,oe=L.top,Ee=L.top+L.height;for(const Ve of a){if(!c(Ve))continue;const ee=G.x+n.current.panX+Ve.x*q-V.left,fe=G.y+n.current.panY+Ve.y*q-V.top,I=ee+ps*q,se=fe+(vl+zs)*q;!(I<J||ee>ae||se<oe||fe>Ee)&&H.push(Ve.commit.id)}return H},[i,a,n,t,c]),O=g.useCallback(L=>{if(L.button!==0)return;const D=L.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const G=t.current;if(!G)return;L.preventDefault();const V=G.getBoundingClientRect(),q=L.clientX-V.left,H=L.clientY-V.top;d.current={startX:q,startY:H,currentX:q,currentY:H,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],_(!0),b({left:q,top:H,width:0,height:0})},[t,w]);return g.useEffect(()=>{const L=G=>{var oe;const V=d.current;if(!V)return;const q=t.current;if(!q)return;const H=q.getBoundingClientRect();V.currentX=G.clientX-H.left,V.currentY=G.clientY-H.top,!h.current&&(Math.abs(V.currentX-V.startX)>2||Math.abs(V.currentY-V.startY)>2)&&(h.current=!0);const J=sS(V);b(J);const ae=E(J);S(V.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),V.additive||M((oe=ae[ae.length-1])!=null?oe:null)},D=()=>{if(d.current){const G=h.current;d.current=null,h.current=!1,_(!1),b(null),G||(S([]),M(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",D)}},[E,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:M,startMarqueeDrag:O}}function Ty({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:M=!1,onPushAllBranches:E,onPushCurrentBranch:O,onPushCommitTargets:L,pushInProgress:D=!1,onDeleteSelection:G,deleteInProgress:V=!1,worktrees:q=[],currentRepoPath:H,onRemoveWorktree:J,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:oe,onStashLocalChanges:Ee,stashInProgress:Ve=!1,stashDisabled:ee=!1,onCommitLocalChanges:fe,commitInProgress:I=!1,commitDisabled:se=!1,onStageAllChanges:W,stageInProgress:he=!1,onCreateBranchFromNode:Me,onCreateRootBranch:$,createBranchFromNodeInProgress:ue=!1,isDebugOpen:X=!1,onDebugClose:de,orientation:be="horizontal",branchCommitPreviews:Ae={},branchParentByName:Ue={},branchUniqueAheadCounts:Pe={},gridSearchQuery:at="",gridSearchJumpToken:Ot=0,gridSearchJumpDirection:Qt=1,gridFocusSha:Fe=null,checkedOutRef:rt=null,onGridSearchResultCountChange:Ut,onGridSearchResultIndexChange:Je,onGridSearchFocusChange:St,onInteractionChange:xe,manuallyOpenedClumps:ne,manuallyClosedClumps:Te,setManuallyOpenedClumps:Ye,setManuallyClosedClumps:We,gridHudProps:Xe}){var Y,Z,re,Le,ot,it,Nt,Jt,rs,Us,xs,It,Dn,_n;const Ge=g.useRef(null),ht=g.useRef(null),pt=g.useRef(null),At=g.useRef(null),qt=g.useRef(void 0),dt=g.useRef(void 0),P=g.useRef(void 0),K=g.useRef(0),me=g.useRef(null),[ke,nt]=g.useState(!1),[Ze,je]=g.useState(!1),[bt,qe]=g.useState(""),[Pt,gt]=g.useState(!1),[tt,Bt]=g.useState(!1),[$t,Zt]=g.useState(""),[ct,lt]=g.useState("from-selected-node"),[Tt,vt]=g.useState(()=>new Set),[en,mt]=g.useState(()=>new Set),[yt,cn]=g.useState({}),Wt=g.useRef(!1),Ht=g.useRef(null),ds=g.useRef(null),In=ne!=null?ne:Tt,Mn=Te!=null?Te:en,An=Ye!=null?Ye:vt,mn=We!=null?We:mt,[fn,Yn]=g.useState(null),[et,ss]=g.useState(null),{isCameraMoving:Ho,renderedZoom:Vo,cameraRenderTick:Xs,renderedCameraRef:Is,interactionIdleTimeoutRef:di,getTransformLayerOriginScreen:Ts,flushCameraReactTick:Do,syncCamera:bo,handleWheel:vo}=nS({mapPadHostRef:ht,transformLayerRef:pt}),xn=g.useMemo(()=>fp(t,d,Ae,Ue),[t,d,Ae,Ue]),bn=g.useMemo(()=>Mc({lanes:xn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:Ue,branchUniqueAheadCounts:Pe,manuallyOpenedClumps:In,manuallyClosedClumps:Mn,isDebugOpen:X,gridSearchQuery:at,gridFocusSha:Fe,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:yt}),[xn,t,n,i,a,d,Ae,Ue,Pe,In,Mn,X,at,Fe,(Y=rt==null?void 0:rt.headSha)!=null?Y:null,(Z=rt==null?void 0:rt.branchName)!=null?Z:null,be,yt]),gs=g.useMemo(()=>Mc({lanes:xn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:Ue,branchUniqueAheadCounts:Pe,manuallyOpenedClumps:In,manuallyClosedClumps:Mn,isDebugOpen:X,gridSearchQuery:at,gridFocusSha:Fe,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:yt}),[xn,t,n,i,a,d,Ae,Ue,Pe,In,Mn,X,at,Fe,(re=rt==null?void 0:rt.headSha)!=null?re:null,(Le=rt==null?void 0:rt.branchName)!=null?Le:null,be,yt]),{allCommits:os,clusterKeyByCommitId:ks,leadByClusterKey:Uo,clusterCounts:fs,matchingNodes:is,matchingNodeIds:ys,normalizedSearchQuery:un,focusedNode:Pn,defaultCollapsedClumps:pn,renderNodes:qn,visibleNodesBySha:fa,contentWidth:Yo,contentHeight:fi,connectors:wo,mergeConnectors:Wo,connectorDecisions:As,nodeWarnings:hs,commitIdsWithRenderedAncestry:Nn,connectorParentShas:Ns,branchStartShas:On,branchOffNodeShas:as,crossBranchOutgoingShas:wi,branchBaseCommitByName:Fo,pointFormatter:Ji}=bn,Gt=!!un,Gs=Vo/ca,Ps=g.useMemo(()=>({transform:`scale(${1/Gs})`,transformOrigin:"top left",width:`${100*Gs}%`,height:`${100*Gs}%`}),[Gs]),Xo=-(20/Gs),Si=g.useMemo(()=>{const pe=new Map;for(const Ie of qn)pe.set(Ie.commit.visualId,Ie);return pe},[qn]),Go=g.useMemo(()=>Ww(qn,Xo),[qn,Xo]),qs=pe=>{var R;const Ie=pe.commit.id,C=pe.commit.visualId;if(Gt&&ys.has(Ie)||(Pn==null?void 0:Pn.commit.id)===Ie||fn===null)return!0;if(!fn.has(C))return!1;const T=ks.get(C);return T&&((R=fs.get(T))!=null?R:1)>1&&(In.has(T)||!pn.has(T)&&!Mn.has(T)),!0},Ci=1.5/Gs,io=Iw/Gs,kn="border-slate-400/70",mo="border-blue-500",Hn=g.useMemo(()=>new Map(t.map(pe=>[pe.name,pe])),[t]),Ds=(ot=rt==null?void 0:rt.hasUncommittedChanges)!=null?ot:!1;g.useMemo(()=>new Set(t.filter(pe=>pe.commitsAhead===0&&!pe.name.startsWith("*")).map(pe=>pe.name)),[t]);const ao=g.useMemo(()=>{var Ie,C;const pe=new Map;for(const T of qn){const R=(Ie=pe.get(T.commit.id))!=null?Ie:new Set;R.add(T.commit.branchName),pe.set(T.commit.id,R)}for(const T of i){const R=(C=pe.get(T.fullSha))!=null?C:new Set;T.branch&&R.add(T.branch),pe.set(T.fullSha,R)}return pe},[qn,i,d]),dn=g.useMemo(()=>new Map(Object.entries(c).map(([pe,Ie])=>[pe,new Set(Ie)])),[c]),Hs=g.useCallback(()=>{di.current,Do()},[Do,di]),{isMarqueeSelecting:Vs,marqueeRect:Rs,selectedCommitShas:ms,setSelectedCommitShas:Ro,mergeTargetCommitSha:Ks,setMergeTargetCommitSha:So,startMarqueeDrag:po}=oS({scrollContainerRef:Ge,renderedCameraRef:Is,getTransformLayerOriginScreen:Ts,renderNodes:qn,shouldRenderNode:qs,onPointerReleaseNoMarquee:Hs}),Bo=g.useMemo(()=>new Set(qn.map(pe=>pe.commit.id)),[qn]),En=g.useMemo(()=>ms.filter(pe=>Bo.has(pe)),[ms,Bo]),Vn=g.useCallback((pe,Ie)=>{var R;if(!Ie)return!1;if(((R=Ae[pe])!=null?R:[]).some(B=>bi(B.fullSha,Ie)||bi(B.sha,Ie)))return!0;const T=Hn.get(pe);return!!(T!=null&&T.headSha&&bi(T.headSha,Ie))},[Ae,Hn]),Wn=(it=rt==null?void 0:rt.branchName)!=null?it:null,Co=(Nt=rt==null?void 0:rt.headSha)!=null?Nt:null,ro=Wn==null,Qs=g.useMemo(()=>{if(!Fe)return null;const pe=qn.filter(Ie=>Ie.commit.id===Fe);return pe.length===0?null:pe.length===1||!Pn?pe[0]:pe.reduce((Ie,C)=>{const T=(Ie.x-Pn.x)**2+(Ie.y-Pn.y)**2;return(C.x-Pn.x)**2+(C.y-Pn.y)**2<T?C:Ie})},[Fe,qn,Pn]),ti=g.useCallback((pe,Ie,C)=>{for(const T of q){if(!qh(T,H))continue;if(T.branchName){if(T.branchName===pe&&bi(T.headSha,Ie))return T;continue}if(!bi(T.headSha,Ie)&&!bi(T.headSha,C))continue;if(T.parentSha&&Vn(pe,T.parentSha)||Vn(pe,T.headSha))return T;const R=Hn.get(pe);if(R&&bi(R.headSha,T.headSha)||pe===d&&i.some(B=>bi(B.fullSha,T.headSha)))return T}return null},[q,H,Vn,Hn,d,i]),_o=g.useCallback(pe=>{for(const Ie of q)if(qh(Ie,H)&&Ie.branchName===pe)return Ie;return null},[q,H]),js=g.useCallback((pe,Ie)=>{for(const C of q)if(qh(C,H)&&(bi(C.headSha,pe)||bi(C.headSha,Ie)))return C;return null},[q,H]),Bs=g.useCallback(pe=>{var Ie;return Array.from((Ie=ao.get(pe))!=null?Ie:[])},[ao]),qo=g.useMemo(()=>{var R,B,F,ie;const pe=new Map;for(const De of En){const Ce=Bs(De);if(Ce.length===0)continue;const $e=(R=Ce.find(ft=>ft!==d))!=null?R:Ce[0],ut=En.filter(ft=>ft!==De).filter(ft=>!new Set(Bs(ft)).has($e));pe.set($e,{targetSha:De,targetBranch:$e,sourceRefs:ut})}const Ie=Array.from(pe.values()),C=Ks?Ie.find(De=>{var Ce;return De.targetSha===Ks||De.targetBranch===((Ce=Bs(Ks)[0])!=null?Ce:"")}):null,T=(B=C!=null?C:Ie[Ie.length-1])!=null?B:null;return{options:Ie,selected:T,targetBranch:(F=T==null?void 0:T.targetBranch)!=null?F:null,sources:(ie=T==null?void 0:T.sourceRefs)!=null?ie:[]}},[En,Bs,d,Ks]),ko=g.useMemo(()=>{const pe=[...Wn===d?[{name:d,headSha:Co!=null?Co:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Ie=>!Ie.name.startsWith("*")&&Ie.unpushedCommits>0&&Ie.remoteSyncStatus!=="on-github").map(Ie=>[Ie.name,Ie]);return new Map(pe)},[t,Wn,Co,d,a.length]),go=g.useMemo(()=>{const pe=T=>{var B;const R=Bs(T).filter(F=>ko.has(F));return R.length===0?null:R.length===1?R[0]:Wn&&R.includes(Wn)?Wn:(B=R.find(F=>F!==d))!=null?B:R[0]},Ie=T=>{var R;return T===d?a.map(B=>{var F,ie;return{fullSha:B.fullSha,sha:B.sha,parentSha:(F=B.parentSha)!=null?F:null,message:B.message,author:B.author,date:B.date,kind:(ie=B.kind)!=null?ie:"commit"}}):(R=Ae[T])!=null?R:[]},C=new Map;for(const T of En){const R=pe(T);if(!R)continue;const B=ko.get(R);if(!B)continue;const F=Ie(R).slice(0,B.unpushedCommits),ie=F.findIndex(Ce=>Ce.fullSha===T);if(ie===-1)continue;const De=C.get(R);(!De||ie<De.targetIndex)&&C.set(R,{branchName:R,targetSha:T,targetIndex:ie,commitCount:F.length-ie})}return Array.from(C.values())},[En,Bs,ko,Wn,d,a,Ae]),Lo=g.useMemo(()=>Array.from(new Set(En.map(pe=>/^STASH:(\d+)$/.exec(pe)).filter(pe=>!!pe).map(pe=>parseInt(pe[1],10)))).sort((pe,Ie)=>pe-Ie),[En]),Oo=En.includes("WORKING_TREE"),ki=(Oo?1:0)+Lo.length,ea=[...Oo?["Uncommitted changes"]:[],...Lo.map(pe=>`Stash ${pe+1}`)],Ii=ko.size,lo=!ro&&!!Wn&&ko.has(Wn),Zs=Wn?`Push ${Wn}`:"Push current branch",jt=go.length===1?go[0].commitCount>1?`Push ${go[0].commitCount} commits on ${go[0].branchName}`:`Push ${go[0].targetSha.slice(0,7)} on ${go[0].branchName}`:`Push ${go.length} selected ranges`,zo=g.useCallback(pe=>{const Ie=pe.target;Ie!=null&&Ie.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||dp().startDragging()},[]);g.useEffect(()=>{const pe=Ho||Vs;At.current!==pe&&(At.current=pe,xe==null||xe(pe))},[Ho,Vs,xe]),g.useEffect(()=>{const pe=un?is.length:null;qt.current!==pe&&(qt.current=pe,Ut==null||Ut(pe))},[is.length,un,Ut]),g.useEffect(()=>{const pe=un&&Fe?(()=>{const Ie=is.findIndex(C=>C.commit.id===Fe);return Ie>=0?Ie:null})():null;dt.current!==pe&&(dt.current=pe,Je==null||Je(pe))},[Fe,is,un,Je]);const co=g.useMemo(()=>{var De,Ce,$e,ut,ft,Mt;if(!un)return null;const pe=un,Ie=t.map(Lt=>Lt.name),C=Ie.find(Lt=>Lt.toLowerCase()===pe),T=C!=null?C:Ie.find(Lt=>Lt.toLowerCase().startsWith(pe)),B=T!=null?T:Ie.find(Lt=>Lt.toLowerCase().includes(pe));if(!B)return null;const F=(De=t.find(Lt=>Lt.name===B))!=null?De:null;if(F!=null&&F.headSha)return F.headSha;const ie=(Ce=Ae[B])!=null?Ce:[];return ie.length>0?(ut=($e=ie[0])==null?void 0:$e.fullSha)!=null?ut:null:B===d&&(Mt=(ft=i[0])==null?void 0:ft.fullSha)!=null?Mt:null},[un,t,Ae,d,i]);g.useEffect(()=>{var T,R,B;if(!un){if(K.current=Ot,P.current===null)return;P.current=null,St==null||St(null);return}if(Ot<=0||K.current===Ot)return;K.current=Ot;let pe;const Ie=Fe?is.findIndex(F=>F.commit.id===Fe):-1,C=is.length>0?Ie<0?0:(Ie+Qt+is.length)%is.length:-1;pe=(B=(R=(T=is[C])==null?void 0:T.commit.id)!=null?R:co)!=null?B:null,P.current!==pe&&(P.current=pe,St==null||St(pe))},[is,un,St,co,Ot,Qt]),g.useLayoutEffect(()=>{if(!Fe)return;const pe=`${Fe}:${Ot}`;if(me.current===pe)return;const Ie=Ge.current,C=Qs;if(!Ie||!C)return;const T=Ts();if(!T)return;const R=Ie.getBoundingClientRect(),B=Is.current.zoom,F=B/ca,ie=C.x+ps/2,De=C.y+vl+zs/2,Ce=R.left+R.width/2,$e=R.top+R.height/2;bo(Ce-T.x-ie*F,$e-T.y-De*F,B),me.current=pe},[Fe,Ot,Qs,Ts,bo,Is]);const ni=(Us=(rs=et==null?void 0:et.width)!=null?rs:(Jt=Ge.current)==null?void 0:Jt.clientWidth)!=null?Us:0,si=(Dn=(It=et==null?void 0:et.height)!=null?It:(xs=Ge.current)==null?void 0:xs.clientHeight)!=null?Dn:0,Ms=ni>0&&si>0?ky(ni,si,Is.current,{innerPaddingPx:kd}):null,yo=Ms!=null?jy(Ms,Is.current.zoom):null,k=pe=>{if(!yo)return!0;const{fromX:Ie,fromY:C,toX:T,toY:R}=pe;return Yw(Ie,C,T,R,yo,pe.fromFace,pe.toFace)};g.useLayoutEffect(()=>{var F;const pe=Ge.current;if(!pe||pe.clientWidth<=0||pe.clientHeight<=0)return;const Ie=pe.clientWidth,C=pe.clientHeight;ss(ie=>(ie==null?void 0:ie.width)===Ie&&(ie==null?void 0:ie.height)===C?ie:{width:Ie,height:C});const T=ky(Ie,C,Is.current,{innerPaddingPx:kd});if(!T){Yn(ie=>ie===null?ie:null);return}const R=jy(T,Is.current.zoom),B=Fw(Go,R,Si,Xo);for(const ie of qn){const De=ks.get(ie.commit.visualId);if(!De||((F=fs.get(De))!=null?F:1)<=1)continue;(In.has(De)||!pn.has(De)&&!Mn.has(De))&&B.add(ie.commit.visualId)}Yn(ie=>Vw(ie,B)?ie:B)},[Vo,Ot,Fe,Ho,Xs,In,Mn,pn,ks,fs,qn,et,Go,Si,Xo]),g.useLayoutEffect(()=>{const pe=Ge.current;if(!pe)return;const Ie=()=>{const T=pe.clientWidth,R=pe.clientHeight;T<=0||R<=0||ss(B=>(B==null?void 0:B.width)===T&&(B==null?void 0:B.height)===R?B:{width:T,height:R})};Ie();const C=new ResizeObserver(Ie);return C.observe(pe),()=>C.disconnect()},[os.length]);const U=qn.filter(pe=>qs(pe)).length,ce=Wo.filter(pe=>k(pe)).length,we=wo.filter(pe=>k(pe)).length,Ke=g.useCallback((pe,Ie)=>{if(Wt.current){pe.preventDefault(),pe.stopPropagation();return}pe.stopPropagation();const C=Ie.commit.id;if(pe.shiftKey?(Ro(F=>F.includes(C)?F.filter(ie=>ie!==C):[...F,C]),So(C)):(Ro(F=>F.includes(C)?[]:[C]),So(F=>F===C?null:C)),!(pe.metaKey||pe.ctrlKey||pe.detail>=2)||C==="WORKING_TREE")return;const R=C.length>=40?C.slice(0,7):C;let B=null;if(Ie.commit.branchName?(B=ti(Ie.commit.branchName,C,R),B||(B=_o(Ie.commit.branchName))):B=js(C,R),B&&oe){oe(B.path);return}h==null||h({commitSha:C})},[js,ti,_o,h,oe]),st=g.useCallback((pe,Ie)=>{var ie,De,Ce,$e,ut;if(pe.button!==0)return;const C=pe.target;if(C!=null&&C.closest('[data-selectable-text="true"]')||C!=null&&C.closest("button, a, input, textarea, select"))return;pe.stopPropagation(),pe.preventDefault(),Wt.current=!1,pe.currentTarget.setPointerCapture(pe.pointerId);const T=(ie=yt[Ie.commit.visualId])!=null?ie:yt[Ie.commit.id];Ht.current={nodeId:Ie.commit.visualId,startX:pe.clientX,startY:pe.clientY,baseX:(De=T==null?void 0:T.x)!=null?De:Ie.x,baseY:(Ce=T==null?void 0:T.y)!=null?Ce:Ie.y,moved:!1,pendingX:($e=T==null?void 0:T.x)!=null?$e:Ie.x,pendingY:(ut=T==null?void 0:T.y)!=null?ut:Ie.y};const R=()=>{ds.current=null;const ft=Ht.current;ft&&cn(Mt=>({...Mt,[ft.nodeId]:{x:ft.pendingX,y:ft.pendingY}}))},B=ft=>{const Mt=Ht.current;if(!Mt)return;const Lt=Is.current.zoom/ca,xt=Lt>0?1/Lt:1,_t=(ft.clientX-Mt.startX)*xt,Kn=(ft.clientY-Mt.startY)*xt;(Math.abs(_t)>2||Math.abs(Kn)>2)&&(Mt.moved=!0),Mt.moved&&(Wt.current=!0),Mt.pendingX=Mt.baseX+_t,Mt.pendingY=Mt.baseY+Kn,ds.current==null&&(ds.current=window.requestAnimationFrame(R))},F=()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",F),ds.current!=null&&(window.cancelAnimationFrame(ds.current),ds.current=null,R());try{pe.currentTarget.releasePointerCapture(pe.pointerId)}catch{}const ft=Ht.current;Ht.current=null,ft&&window.setTimeout(()=>{Wt.current=!1},0)};window.addEventListener("pointermove",B),window.addEventListener("pointerup",F),window.addEventListener("pointercancel",F)},[yt]),Rt=g.useCallback(async()=>{if(!fe)return;await fe(bt)&&(je(!1),qe(""))},[fe,bt]),Ft=g.useCallback(async()=>{G&&(await G({branchNames:[],discardUncommittedChanges:Oo,stashIndices:Lo}),gt(!1),Ro([]),So(null))},[G,Oo,Lo]),tn=g.useCallback(async()=>{var Ie;const pe=$t.trim();if(pe){if(ct==="new-root"){if(!$)return;await $(pe)}else{if(!Me)return;const C=En.length===1?En[0]:(Ie=rt==null?void 0:rt.headSha)!=null?Ie:null;if(!C||!(C==="WORKING_TREE"||C.startsWith("STASH:")||C===(rt==null?void 0:rt.headSha)))return;await Me(C,pe)}Bt(!1),Zt(""),lt("from-selected-node"),Ro([]),So(null)}},[rt==null?void 0:rt.headSha,ct,$t,Me,$,En]),rn=!!(rt!=null&&rt.headSha),on=En.length===0&&rn,vn=En.length===1&&(En[0]==="WORKING_TREE"||En[0].startsWith("STASH:"))||on,N=!!$;return g.useEffect(()=>{if(tt){if(!vn&&!on&&N){lt("new-root");return}(vn||on)&&lt("from-selected-node")}},[N,on,tt,vn]),g.useEffect(()=>{const pe=Ie=>{if(!G||Pt||En.length===0)return;const C=Ie.target;C!=null&&C.closest('input, textarea, select, button, [contenteditable="true"]')||Ie.key!=="Delete"&&Ie.key!=="Backspace"||(Ie.preventDefault(),gt(!0))};return window.addEventListener("keydown",pe),()=>window.removeEventListener("keydown",pe)},[Pt,G,En.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Zw,{isOpen:X,onClose:()=>de==null?void 0:de(),visibleBounds:yo,renderedNodeCount:U,totalNodeCount:qn.length,renderedMergeConnectorCount:ce,totalMergeConnectorCount:Wo.length,renderedConnectorCount:we,totalConnectorCount:wo.length,mapGridCullViewportInsetScreenPx:zw,debugRows:gs.debugRows,branchDebugRows:gs.branchDebugRows,connectorDecisions:As}),Xe?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:zo,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:l.jsx("div",{className:"window-no-drag pointer-events-auto flex min-w-0 flex-1 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(qw,{selectedVisibleCommitShas:En,commitInProgress:I,commitDisabled:se,stageInProgress:he,stashInProgress:Ve,stashDisabled:ee,pushInProgress:D,hasUncommittedChanges:Ds,createBranchFromNodeInProgress:ue,onCommitLocalChanges:fe,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:Ee,onPushCurrentBranch:O,onPushAllBranches:E,onPushCommitTargets:L,onMergeRefsIntoBranch:j,selectedPushTargets:go,selectedPushLabel:jt,canPushCurrentBranch:lo,pushCurrentBranchLabel:Zs,pushableRemoteBranchCount:Ii,selectedCommitTargetOption:qo,mergeInProgress:M,mergeTargetCommitSha:Ks,setMergeTargetCommitSha:So,worktrees:q,currentRepoPath:H,worktreeMenuOpen:ke,setWorktreeMenuOpen:nt,onSwitchToWorktree:oe,onRemoveWorktree:J,removeWorktreeInProgress:ae,setCommitDialogOpen:je,setNewBranchDialogOpen:Bt})})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(tS,{query:Xe.gridSearchQuery,onQueryChange:Xe.setGridSearchQuery,resultCount:Xe.gridSearchResultCount,resultIndex:Xe.gridSearchResultIndex,onJump:pe=>{Xe.setGridSearchJumpDirection(pe),Xe.setGridSearchJumpToken(Ie=>Ie+1)}}),l.jsx(eS,{orientation:Xe.mapGridOrientation,onOrientationChange:Xe.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(_n=Xe.githubAuthStatus)!=null&&_n.ghAvailable&&!Xe.githubAuthStatus.authenticated?l.jsx("button",{onClick:Xe.onGitHubAuthSetup,disabled:Xe.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Xe.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Xe.githubAuthStatus&&!Xe.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Xe.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Xe.githubAuthMessage,children:Xe.githubAuthMessage})]}):null,Xe.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Xe.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Xe.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Xe.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Xe.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Xe.commitSwitchFeedback.message})]}):null]})]}):null,os.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(Qw,{scrollContainerRef:Ge,mapPadHostRef:ht,transformLayerRef:pt,isMarqueeSelecting:Vs,contentWidth:Yo,contentHeight:fi,isCameraMoving:Ho,onWheel:vo,onMouseDown:po,onNodePointerDown:st,labelTopPx:Xo,inverseZoomStyle:Ps,displayZoom:Gs,selectedVisibleCommitShas:En,normalizedSearchQuery:un,matchingNodeIds:ys,focusedNode:Qs,renderNodes:qn,shouldRenderNode:qs,manuallyOpenedClumps:In,manuallyClosedClumps:Mn,defaultCollapsedClumps:pn,leadByClusterKey:Uo,clusterKeyByCommitId:ks,clusterCounts:fs,commitIdsWithRenderedAncestry:Nn,nodeWarnings:hs,connectorParentShas:Ns,branchStartShas:On,branchOffNodeShas:as,crossBranchOutgoingShas:wi,branchBaseCommitByName:Fo,branchStartAccentClass:mo,connectorParentAccentClass:kn,commitCornerRadiusPx:io,lineStrokeWidth:Ci,pointFormatter:Ji,connectors:wo,mergeConnectors:Wo,cullConnectorPath:k,flushCameraReactTick:Do,setManuallyOpenedClumps:An,setManuallyClosedClumps:mn,onCommitCardClick:Ke,unpushedCommitShasSetByBranch:dn,checkedOutHeadSha:Co,orientation:be}),Rs&&Vs?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Rs.left,top:Rs.top,width:Rs.width,height:Rs.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Jw,{commitDialogOpen:Ze,commitMessageDraft:bt,onCommitMessageDraftChange:qe,onCommitDialogClose:()=>je(!1),onCommitConfirm:()=>void Rt(),commitInProgress:I,deleteConfirmOpen:Pt,deleteSelectionItems:ea,onDeleteConfirmClose:()=>gt(!1),onDeleteConfirm:()=>void Ft(),deleteInProgress:V,deletableSelectionCount:ki,newBranchDialogOpen:tt,newBranchName:$t,newBranchCreateMode:ct,onNewBranchNameChange:Zt,onNewBranchCreateModeChange:lt,onNewBranchDialogClose:()=>Bt(!1),onNewBranchConfirm:()=>void tn(),selectedCommitCanCreateBranch:vn,currentCheckedOutCommitCanCreateBranch:on,createBranchFromNodeInProgress:ue})]})}function iS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:M=null,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,view:D="time",isLoading:G=!1,scrollRequest:V,focusedErrorBranch:q,checkedOutRef:H=null,mapTopInsetPx:J=0,onMergeRefsIntoBranch:ae,mergeInProgress:oe=!1,onPushAllBranches:Ee,onPushCurrentBranch:Ve,onPushCommitTargets:ee,pushInProgress:fe=!1,onDeleteSelection:I,worktrees:se=[],currentRepoPath:W,onRemoveWorktree:he,removeWorktreeInProgress:Me=!1,onSwitchToWorktree:$,onStashLocalChanges:ue,stashInProgress:X=!1,stashDisabled:de=!1,onCommitLocalChanges:be,commitInProgress:Ae=!1,commitDisabled:Ue=!1,onStageAllChanges:Pe,stageInProgress:at=!1,onCreateBranchFromNode:Ot,onCreateRootBranch:Qt,createBranchFromNodeInProgress:Fe=!1,onMoveNodeBackToBranch:rt,isDebugOpen:Ut=!1,onDebugClose:Je,orientation:St="horizontal",onInteractionChange:xe,manuallyOpenedClumps:ne,manuallyClosedClumps:Te,setManuallyOpenedClumps:Ye,setManuallyClosedClumps:We,layoutModel:Xe,gridHudProps:Ge}){const ht=new Set(u.map(P=>P.branchName)),pt=14*864e5,At=Date.now();function qt(P){return ht.has(P.name)||At-new Date(P.lastCommitDate).getTime()<=pt}const dt=t.filter(P=>P.status==="stale"&&qt(P)).sort((P,K)=>new Date(K.lastCommitDate).getTime()-new Date(P.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:M,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,staleBranches:dt,isLoading:G,scrollRequest:V,focusedErrorBranch:q,checkedOutRef:H,mapTopInsetPx:J,onMergeRefsIntoBranch:ae,mergeInProgress:oe,onPushAllBranches:Ee,onPushCurrentBranch:Ve,onPushCommitTargets:ee,pushInProgress:fe,onDeleteSelection:I,worktrees:se,currentRepoPath:W,onRemoveWorktree:he,removeWorktreeInProgress:Me,onSwitchToWorktree:$,onStashLocalChanges:ue,stashInProgress:X,stashDisabled:de,onCommitLocalChanges:be,commitInProgress:Ae,commitDisabled:Ue,onStageAllChanges:Pe,stageInProgress:at,onCreateBranchFromNode:Ot,onCreateRootBranch:Qt,createBranchFromNodeInProgress:Fe,onMoveNodeBackToBranch:rt,isDebugOpen:Ut,onDebugClose:Je,orientation:St,onInteractionChange:xe,manuallyOpenedClumps:ne,manuallyClosedClumps:Te,setManuallyOpenedClumps:Ye,setManuallyClosedClumps:We,layoutModel:Xe,gridHudProps:Ge})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:M,checkedOutRef:H,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,onInteractionChange:xe,manuallyOpenedClumps:ne,manuallyClosedClumps:Te,setManuallyOpenedClumps:Ye,setManuallyClosedClumps:We,layoutModel:Xe,isDebugOpen:Ut,onDebugClose:Je,orientation:St,gridHudProps:Ge})}):null})}const Ki=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Ay(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function Kh(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Ki(p.fullSha,i)||Ki(p.sha,i)?Ay(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(_=>(p===c||p===u)&&(Ki(_.fullSha,i)||Ki(_.sha,i))?Ay(_,a):_)]));return{directCommits:d,branchCommitPreviews:h}}function aS(t,n,i,a){if(!t)return null;const c=d=>Ki(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function rS(t,n,i,a,c,u,d=!1){var Ee,Ve,ee,fe,I;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,_=(Ve=(Ee=i[0])==null?void 0:Ee.fullSha)!=null?Ve:null,x=[{name:u,headSha:_!=null?_:"",isDefault:!0},...n.map(se=>({name:se.name,headSha:se.headSha,isDefault:!1}))],b=h?x.filter(se=>Ki(se.headSha,h)):[],w=aS(h,i,a,u),S=w?x.find(se=>se.name===w):void 0,j=(fe=(ee=b.find(se=>se.isDefault))!=null?ee:b[0])!=null?fe:S,M=!!(j&&h&&Ki(j.headSha,h)),E=j&&!j.isDefault?n.find(se=>se.name===j.name):void 0,O=(()=>{var W;if(!h)return null;const se=i.find(he=>Ki(he.fullSha,h)||Ki(he.sha,h));if(se!=null&&se.date)return se.date;if(E&&!d){const he=((W=a[E.name])!=null?W:[]).find(Me=>Ki(Me.fullSha,h)||Ki(Me.sha,h));if(he!=null&&he.date)return he.date}return null})(),L=O?new Date(O).getTime():Number.NaN,D=Date.now(),G=Number.isFinite(L)?Math.max(D,L+1+t.index):D+t.index,V=new Date(G).toISOString(),q=t.message.trim(),H={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:q||y,author:"You",date:V,kind:"stash"};if(M&&E){const se=Kh(i,a,h,p,E.name,u);return{branches:n.map(he=>he.name===E.name?{...he,commitsAhead:he.commitsAhead+1,unpushedCommits:he.unpushedCommits+1,lastCommitDate:V,headSha:p}:he),directCommits:se.directCommits,branchCommitPreviews:{...se.branchCommitPreviews,[E.name]:[H,...a[E.name]||[]]},branchUniqueAheadCounts:{...c,[E.name]:Math.max(0,(I=Object.prototype.hasOwnProperty.call(c,E.name)?c[E.name]:E.commitsAhead)!=null?I:0)+1}}}if(M&&(j!=null&&j.isDefault)&&!d){const se=Kh(i,a,h,p,u,u);return{branches:n,directCommits:se.directCommits,branchCommitPreviews:{...se.branchCommitPreviews,[u]:[H,...a[u]||[]]},branchUniqueAheadCounts:c}}const J=`*Stash:${t.index}`,ae={name:J,commitsAhead:1,commitsBehind:0,lastCommitDate:V,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(j==null?void 0:j.name)||u},oe=Kh(i,a,h,p,J,u);return{branches:[ae,...n],directCommits:oe.directCommits,branchCommitPreviews:{...oe.branchCommitPreviews,[J]:[H]},branchUniqueAheadCounts:{...c,[J]:1}}}function Qx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,_)=>y.index-_.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=rS(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function lS({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var q,H;const j=Qx(y,t,i,u,h,c,(q=p==null?void 0:p.hasUncommittedChanges)!=null?q:!1);let M=j.branches,E=j.directCommits,O=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const J=p.headSha||p.parentSha||null,ae=(W,he)=>!W||!he?!1:W===he||W.startsWith(he)||he.startsWith(W),oe=p.branchName?M.find(W=>W.name===p.branchName):void 0,Ee=(()=>{var he;if(!J)return null;const W=E.find(Me=>ae(Me.fullSha,J)||ae(Me.sha,J));if(W!=null&&W.date)return W.date;if(oe){const Me=((he=O[oe.name])!=null?he:[]).find($=>ae($.fullSha,J)||ae($.sha,J));if(Me!=null&&Me.date)return Me.date}return null})(),Ve=Ee?new Date(Ee).getTime():Number.NaN,ee=Date.now(),fe=Number.isFinite(Ve)?Math.max(ee,Ve+1):ee,I=new Date(fe).toISOString(),se={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:J,message:"Local uncommitted changes",author:"You",date:I,kind:"uncommitted"};oe?(M=M.map(W=>W.name===oe.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:I,headSha:"WORKING_TREE"}:W),O={...O,[oe.name]:[se,...O[oe.name]||[]]},L={...L,[oe.name]:Math.max(0,(H=Object.prototype.hasOwnProperty.call(L,oe.name)?L[oe.name]:oe.commitsAhead)!=null?H:0)+1}):O={...O,[c]:[se,...O[c]||[]]}}const D={...d};D[c]=null;const G=fp(M,c,O,D),V=Mc({lanes:G,branches:M,mergeNodes:n,directCommits:E,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:O,branchParentByName:D,branchUniqueAheadCounts:L,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:M,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:E,sharedGridLayoutModel:V}}const Ny="git-visualizer:expanded-projects",Dy="git-visualizer:expanded-branches";function cS(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function uS(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function dS(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const _=[...h,y];if(y===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O}){var $,ue;if(_.has(t)||!a.get(t))return null;const D=($=u.get(t))!=null?$:[],G=D.length>0,V=g.useMemo(()=>{var X;return[...(X=c[t])!=null?X:[]]},[c,t]),q=x&&V.length>0,H=x,J=G||q,ae=h.has(t),oe=H?V:[],Ee=ae&&oe.length>0,Ve=y===t,ee=new Set(_);ee.add(t);const fe="top-[-0.2rem] h-4.5 w-[10px]",I="rounded-bl-[7px]",se="left-[0.65rem]",W=new Map,he=[];for(const X of D){const de=d.get(X);if(de){const be=oe.findIndex(Ae=>bi(Ae.fullSha,de)||bi(Ae.sha,de));if(be>=0){const Ae=(ue=W.get(be))!=null?ue:[];Ae.push(X),W.set(be,Ae);continue}}he.push(X)}const Me=g.useMemo(()=>{if(!x||oe.length===0)return[];const X=[];let de=[],be=null;const Ae=()=>{if(de.length===0)return;const Ue=de[de.length-1],Pe=`sidebar-single-${t}-${Ue.fullSha}`;X.push({key:be!=null?be:Pe,commits:de,count:de.length,lead:Ue}),de=[],be=null};return oe.forEach(Ue=>{var at;const Pe=(at=S.get(`${t}:${Ue.fullSha}`))!=null?at:null;if(de.length===0){de=[Ue],be=Pe;return}if(Pe===be){de.push(Ue);return}Ae(),de=[Ue],be=Pe}),Ae(),X},[t,x,oe,S]);return l.jsxs("li",{className:Ln("relative",n>0?"pl-4":"pl-0",n===0&&!i?ae?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Ln("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",I,se,fe)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Ln("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",se)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:Ln("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Ve?"text-foreground":"text-muted-foreground hover:text-foreground"),role:J?"button":void 0,tabIndex:J?0:void 0,onClick:()=>{J?p(t):O==null||O(t)},onKeyDown:X=>{J&&(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),p(t))},children:[J?l.jsx("button",{type:"button","aria-label":`${ae?"Collapse":"Expand"} ${t}`,onPointerDown:X=>{X.preventDefault()},onClick:X=>{X.preventDefault(),X.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(iw,{"aria-hidden":"true",className:Ln("h-3.5 w-3.5 shrink-0 transition-transform",ae?"rotate-90":"")})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),Ee?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Me.map(X=>{const de=X.count>1&&!j(X.key);return(de?[X.lead]:X.commits).map(Ae=>{var at;const Ue=oe.findIndex(Ot=>Ot.fullSha===Ae.fullSha),Pe=b(Ae.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>E==null?void 0:E(Ae.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ae.message,children:[l.jsx("span",{className:"block truncate",children:Ae.message}),Pe.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:Pe.map(Ot=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Ot})]},`${Ae.fullSha}:${Ot}`))}):null]}),X.count>1&&Ae.fullSha===X.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${X.lead.fullSha}`,onClick:()=>M(X.key,`${t}:${X.lead.fullSha}`),className:Ln("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",de?"":"min-w-[2ch] text-center"),children:de?`+${Math.max(1,X.count-1)}`:"−"}):null]}),(at=W.get(Ue))!=null&&at.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:W.get(Ue).map((Ot,Qt,Fe)=>l.jsx(Nm,{branchName:Ot,depth:n+1,isLast:Qt===Fe.length-1&&he.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Ot,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O},Ot))}):null]},`${t}:${Ae.fullSha}`)})})}):null,G&&ae&&he.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:he.map((X,de)=>l.jsx(Nm,{branchName:X,depth:n+1,isLast:de===he.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:X,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:E,onSelectBranch:O},X))}):null]})}function fS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function hS({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:_={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:w,setManuallyClosedClumps:S,gridLayoutModel:j,onSelectCommit:M,onSelectBranch:E,showCommits:O,onToggleShowCommits:L,className:D,style:G,collapsed:V=!1}){var Ut;const q=g.useRef(null),H=g.useRef(null),[J,ae]=g.useState(()=>{if(typeof window>"u")return new Set;try{const Je=window.localStorage.getItem(Ny);if(Je){const St=JSON.parse(Je);if(Array.isArray(St)){const xe=new Set;for(const ne of St)typeof ne=="string"&&xe.add(ne);return xe}}}catch{}return new Set(t.map(Je=>Je.path))}),[oe,Ee]=g.useState({}),[Ve,ee]=g.useState(()=>new Set),[fe,I]=g.useState(()=>new Set),[se,W]=g.useState(null),he=x!=null?x:Ve,Me=b!=null?b:fe,$=w!=null?w:ee,ue=S!=null?S:I,[X,de]=g.useState(null),[be,Ae]=g.useState(null),Ue=Je=>{try{window.localStorage.setItem(Ny,JSON.stringify(Array.from(Je)))}catch{}},Pe=Je=>{try{const St=Object.fromEntries(Object.entries(Je).map(([xe,ne])=>[xe,Array.from(ne)]));window.localStorage.setItem(Dy,JSON.stringify(St))}catch{}};g.useEffect(()=>{Ue(J)},[J]),g.useEffect(()=>{try{const Je=window.localStorage.getItem(Dy);if(!Je)return;const St=JSON.parse(Je);if(!St||typeof St!="object")return;const xe={};for(const[ne,Te]of Object.entries(St)){if(!Array.isArray(Te))continue;const Ye=new Set;for(const We of Te)typeof We=="string"&&Ye.add(We);xe[ne]=Ye}Ee(xe)}catch{}},[]),g.useEffect(()=>{Pe(oe)},[oe]);const at=(Ut=j==null?void 0:j.defaultCollapsedClumps)!=null?Ut:new Set,Ot=Je=>he.has(Je)||!at.has(Je)&&!Me.has(Je),Qt=(Je,St)=>{const xe=q.current,ne=H.current;if(xe&&ne){const Te=`[data-clump-toggle-id="${St}"]`,Ye=xe.querySelector(Te);if(Ye){const We=Ye.getBoundingClientRect().top-ne.getBoundingClientRect().top;Ae({id:St,topWithinScrollBody:We})}else Ae(null)}else Ae(null);de(St),$(Te=>{const Ye=new Set(Te),We=Ot(Je);return ue(Xe=>{const Ge=new Set(Xe);return We?(Ye.delete(Je),Ge.add(Je)):(Ge.delete(Je),Ye.add(Je)),Ge}),Ye})};g.useLayoutEffect(()=>{if(!X)return;const Je=q.current,St=H.current;if(!Je||!St)return;const xe=`[data-clump-toggle-id="${X}"]`,ne=Je.querySelector(xe);if(ne){if((be==null?void 0:be.id)===X){const Ye=ne.getBoundingClientRect().top-St.getBoundingClientRect().top-be.topWithinScrollBody;Number.isFinite(Ye)&&Ye!==0&&(St.scrollTop+=Ye)}ne.focus({preventScroll:!0}),de(null),Ae(null)}},[he,Me,X,be]);const Fe=(Je,St)=>{Ee(xe=>{var We;const ne=(We=xe[Je])!=null?We:new Set,Te=new Set(ne);Te.has(St)?Te.delete(St):Te.add(St);const Ye={...xe,[Je]:Te};return Pe(Ye),Ye})};g.useEffect(()=>{if(se==null)return;const Je=()=>W(null);return window.addEventListener("pointerdown",Je),()=>window.removeEventListener("pointerdown",Je)},[se]);const rt=g.useMemo(()=>{var St,xe,ne,Te,Ye,We,Xe,Ge,ht,pt,At,qt,dt,P;const Je=new Map;for(const K of t){const me=lS({branches:K.branches,mergeNodes:K.mergeNodes,directCommits:K.directCommits,unpushedDirectCommits:K.unpushedDirectCommits,defaultBranch:K.defaultBranch,branchCommitPreviews:K.branchCommitPreviews,branchUniqueAheadCounts:K.branchUniqueAheadCounts,checkedOutRef:K.checkedOutRef,stashes:K.stashes,manuallyOpenedClumps:(St=y[K.path])!=null?St:new Set,manuallyClosedClumps:(xe=_[K.path])!=null?xe:new Set}),ke=me.enrichedBranches.some(lt=>lt.name===K.defaultBranch)?me.enrichedBranches:[{name:K.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...me.enrichedBranches],nt=new Map(me.sharedGridLayoutModel.nodes.map(lt=>[lt.commit.visualId,lt.row])),Ze={};for(const lt of me.sharedGridLayoutModel.allCommits){const Tt=(ne=Ze[lt.branchName])!=null?ne:[];Tt.push({fullSha:lt.id,sha:lt.id.slice(0,7),parentSha:(Te=lt.parentSha)!=null?Te:null,message:lt.message,author:lt.author,date:lt.date,kind:(Ye=lt.kind)!=null?Ye:"commit"}),Ze[lt.branchName]=Tt}for(const lt of Object.keys(Ze))Ze[lt]=Ze[lt].sort((Tt,vt)=>{var Wt,Ht;const en=new Date(Tt.date).getTime(),mt=new Date(vt.date).getTime();if(en!==mt)return en-mt;const yt=(Wt=nt.get(`${lt}:${Tt.fullSha}`))!=null?Wt:Number.MAX_SAFE_INTEGER,cn=(Ht=nt.get(`${lt}:${vt.fullSha}`))!=null?Ht:Number.MAX_SAFE_INTEGER;return yt!==cn?yt-cn:Tt.fullSha.localeCompare(vt.fullSha)});const je=(We=me.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?We:new Map,bt=(lt,Tt)=>{const vt=je.get(Tt);if(!vt)return[];for(const[en,mt]of vt.entries())if(bi(lt,en))return Array.from(mt).sort();return[]},qe=cS(ke,K.defaultBranch),Pt=uS(ke,K.defaultBranch,qe),gt=new Map(ke.map(lt=>[lt.name,lt])),tt=new Map;for(const lt of ke){const Tt=(Ge=(Xe=me.sharedGridLayoutModel.firstBranchCommitByName.get(lt.name))==null?void 0:Xe.parentSha)!=null?Ge:null,vt=Tt!=null?Tt:null;tt.set(lt.name,vt)}const Bt=(ht=me.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ht:new Set,$t=(pt=y[K.path])!=null?pt:new Set,Zt=(At=_[K.path])!=null?At:new Set,ct=lt=>$t.has(lt)||!Bt.has(lt)&&!Zt.has(lt);Je.set(K.path,{rootBranchNames:Pt,branchByName:gt,branchCommitPreviewsFromLayout:Ze,childNamesByParent:qe,branchAnchorShaByName:tt,checkedOutBranchName:(dt=(qt=K.checkedOutRef)==null?void 0:qt.branchName)!=null?dt:null,clusterKeyByCommitId:(P=me.sharedGridLayoutModel.clusterKeyByCommitId)!=null?P:new Map,getMergeTargetLabels:bt,isGridClusterOpen:ct})}return Je},[n,_,y,t]);return l.jsxs("aside",{ref:q,"aria-label":"Dense branch sidebar",className:Ln("pointer-events-auto relative h-full select-none overflow-hidden",D),style:G,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4.5 w-4.5 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:L,"aria-hidden":"true",tabIndex:-1,className:"hidden",children:O?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:H,className:Ln("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",V?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Je=>{var We,Xe;const St=Je.path===n,xe=J.has(Je.path),ne=(We=Je.treeLoaded)!=null?We:Je.branches.length>0,Te=rt.get(Je.path),Ye=(Xe=oe[Je.path])!=null?Xe:Te?dS(Te.rootBranchNames,Te.childNamesByParent,p,Je.defaultBranch):new Set;return l.jsx("div",{className:Ln("relative z-0",xe&&Te?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Ln("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",St?"text-foreground":"text-muted-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{ae(Ge=>{const ht=new Set(Ge);return ht.has(Je.path)?ht.delete(Je.path):ht.add(Je.path),Ue(ht),ht})},"aria-expanded":xe,"aria-label":`${xe?"Collapse":"Expand"} ${Je.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(fS,{open:xe})}),l.jsx("button",{type:"button",onClick:()=>{i(Je.path)},className:Ln("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors hover:text-foreground","font-normal",St?"text-primary":"text-muted-foreground"),children:Je.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${Je.name}`,"aria-expanded":se===Je.path,onClick:Ge=>{Ge.stopPropagation(),W(ht=>ht===Je.path?null:Je.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-muted-foreground",children:l.jsx(cw,{className:"h-4 w-4 shrink-0"})}),se===Je.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:Ge=>Ge.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),u(Je.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),c(Je.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),xe?ne&&Te?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Te.rootBranchNames.map((Ge,ht)=>l.jsx(Nm,{branchName:Ge,depth:0,isLast:ht===Te.rootBranchNames.length-1,branchByName:Te.branchByName,branchCommitPreviews:Te.branchCommitPreviewsFromLayout,childNamesByParent:Te.childNamesByParent,branchAnchorShaByName:Te.branchAnchorShaByName,expandedBranchNames:Ye,onToggleBranch:pt=>Fe(Je.path,pt),checkedOutBranchName:Te.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:Te.getMergeTargetLabels,sourceBranchName:Ge,clusterKeyByCommitId:Te.clusterKeyByCommitId,isGridClusterOpen:Te.isGridClusterOpen,onToggleGridCluster:Qt,onSelectCommit:async pt=>{St||await i(Je.path),M==null||M(pt)},onSelectBranch:async pt=>{St||await i(Je.path),E==null||E(pt)}},`${Je.path}:${Ge}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Je.path)})})]})]})}const mS="git-visualizer",Qh="git-visualizer:projects",Ry=12,By=1400,pS=180,Ly="git-visualizer:sidebar-width",Oy="git-visualizer:sidebar-collapsed",zy="git-visualizer:grid-clumps",$y=432,Iy=280,Py=640;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function _S(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function gS(t){return md(t)===mS}function yS(){var tn,rn,on,vn;const[t,n]=g.useState(null),[i,a]=g.useState(""),[c,u]=g.useState([]),[d,h]=g.useState({}),[p,y]=g.useState(!1),[_,x]=g.useState([]),[b,w]=g.useState([]),[S,j]=g.useState([]),[M,E]=g.useState([]),[O,L]=g.useState({}),[D,G]=g.useState([]),[V,q]=g.useState("main"),[H,J]=g.useState(null),[ae,oe]=g.useState([]),[Ee,Ve]=g.useState(!1),[ee,fe]=g.useState(""),[I,se]=g.useState(0),[W,he]=g.useState(1),[Me,$]=g.useState({}),[ue,X]=g.useState({}),[de,be]=g.useState(null),[Ae,Ue]=g.useState(null),[Pe,at]=g.useState(null),[Ot,Qt]=g.useState(!1),[Fe,rt]=g.useState(!1),[Ut,Je]=g.useState(!1),[St,xe]=g.useState(null),[ne,Te]=g.useState(!1),[Ye,We]=g.useState(!1),[Xe,Ge]=g.useState("active"),[ht,pt]=g.useState(null),[At,qt]=g.useState(null),[dt,P]=g.useState(!1),[K,me]=g.useState(null),[ke,nt]=g.useState(!1),[Ze,je]=g.useState(null),[bt,qe]=g.useState(null),[Pt,gt]=g.useState(!1),[tt,Bt]=g.useState(!1),[$t,Zt]=g.useState(!1),[ct,lt]=g.useState(!1),[Tt,vt]=g.useState({}),[en,mt]=g.useState({}),[yt,cn]=g.useState({}),[Wt,Ht]=g.useState({}),[ds,In]=g.useState({}),[Mn,An]=g.useState([]),[mn,fn]=g.useState(!1),[Yn,et]=g.useState(!1),[ss,Ho]=g.useState(!1),[Vo,Xs]=g.useState(!1),[Is,di]=g.useState(!1),[Ts,Do]=g.useState("horizontal"),[bo,vo]=g.useState(!1),[xn,vi]=g.useState($y),[bn,gs]=g.useState(!1),[os,ks]=g.useState({dragging:!1,lastEvent:"idle"}),Uo=g.useRef(null),fs=g.useRef(0),is=g.useRef(0),ys=g.useRef(null),un=g.useRef($y),Pn=g.useRef(null),pn=g.useRef(null),qn=gS(t)||!0,fa=g.useRef(!1),Yo=g.useRef(!1),fi=g.useRef(new Set),wo=g.useRef([]),Wo=g.useRef([]),As=g.useRef(null),hs=t!=null?t:"__no-repo__",Nn=(N,Y)=>{try{const Z={opened:Object.fromEntries(Object.entries(N).map(([re,Le])=>[re,Array.from(Le)])),closed:Object.fromEntries(Object.entries(Y).map(([re,Le])=>[re,Array.from(Le)]))};window.localStorage.setItem(zy,JSON.stringify(Z))}catch{}};g.useEffect(()=>{var N,Y;try{const Z=window.localStorage.getItem(zy);if(!Z)return;const re=JSON.parse(Z);if(!re||typeof re!="object")return;const Le={},ot={},it=re;for(const[Nt,Jt]of Object.entries((N=it.opened)!=null?N:{}))Array.isArray(Jt)&&(Le[Nt]=new Set(Jt.filter(rs=>typeof rs=="string")));for(const[Nt,Jt]of Object.entries((Y=it.closed)!=null?Y:{}))Array.isArray(Jt)&&(ot[Nt]=new Set(Jt.filter(rs=>typeof rs=="string")));$(Le),X(ot)}catch{}},[]),g.useEffect(()=>{Nn(Me,ue)},[ue,Me]);const Ns=g.useMemo(()=>{var N;return(N=Me[hs])!=null?N:new Set},[hs,Me]),On=g.useMemo(()=>{var N;return(N=ue[hs])!=null?N:new Set},[hs,ue]),as=g.useCallback(N=>{$(Y=>{var ot;const Z=(ot=Y[hs])!=null?ot:new Set,re=typeof N=="function"?N(Z):N,Le={...Y,[hs]:new Set(re)};return Nn(Le,ue),Le})},[hs,ue]),wi=g.useCallback(N=>{X(Y=>{var ot;const Z=(ot=Y[hs])!=null?ot:new Set,re=typeof N=="function"?N(Z):N,Le={...Y,[hs]:new Set(re)};return Nn(Me,Le),Le})},[hs,Me]),Fo=g.useMemo(()=>c.map(N=>{var Y,Z,re,Le,ot,it,Nt,Jt,rs,Us,xs,It,Dn,_n,pe,Ie,C,T,R,B,F,ie,De,Ce,$e,ut,ft,Mt;return{...N,...(Y=d[N.path])!=null?Y:{},branches:(re=(Z=d[N.path])==null?void 0:Z.branches)!=null?re:[],mergeNodes:(ot=(Le=d[N.path])==null?void 0:Le.mergeNodes)!=null?ot:[],directCommits:(Nt=(it=d[N.path])==null?void 0:it.directCommits)!=null?Nt:[],unpushedDirectCommits:(rs=(Jt=d[N.path])==null?void 0:Jt.unpushedDirectCommits)!=null?rs:[],unpushedCommitShasByBranch:(xs=(Us=d[N.path])==null?void 0:Us.unpushedCommitShasByBranch)!=null?xs:{},checkedOutRef:(Dn=(It=d[N.path])==null?void 0:It.checkedOutRef)!=null?Dn:null,worktrees:(pe=(_n=d[N.path])==null?void 0:_n.worktrees)!=null?pe:[],stashes:(C=(Ie=d[N.path])==null?void 0:Ie.stashes)!=null?C:[],branchCommitPreviews:(R=(T=d[N.path])==null?void 0:T.branchCommitPreviews)!=null?R:{},laneByBranch:(F=(B=d[N.path])==null?void 0:B.laneByBranch)!=null?F:{},branchUniqueAheadCounts:(De=(ie=d[N.path])==null?void 0:ie.branchUniqueAheadCounts)!=null?De:{},defaultBranch:(ut=($e=(Ce=d[N.path])==null?void 0:Ce.defaultBranch)!=null?$e:N.branchName)!=null?ut:"main",treeLoaded:(Mt=(ft=d[N.path])==null?void 0:ft.loaded)!=null?Mt:!1}}),[c,d]);g.useEffect(()=>{try{const N=localStorage.getItem(Qh);if(!N)return;const Y=JSON.parse(N);if(!Array.isArray(Y))return;const Z=Y.filter(re=>typeof re=="object"&&re!==null&&typeof re.path=="string"&&typeof re.name=="string"&&typeof re.lastOpenedAt=="number");u(Z.slice(0,Ry))}catch{u([])}},[]),g.useEffect(()=>{Yo.current||t||c.length!==0&&(Yo.current=!0,Rs(c[0].path))},[c,t]);const Ji=g.useMemo(()=>b.reduce((N,Y)=>(N[Y.targetCommitSha]=Y.targetBranch,N),{}),[b]);g.useEffect(()=>{t&&h(N=>{var Y,Z;return{...N,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:M,mergeTargetBranchByCommitSha:b.reduce((re,Le)=>(re[Le.targetCommitSha]=Le.targetBranch,re),{}),unpushedCommitShasByBranch:O,checkedOutRef:H,worktrees:ae,stashes:Mn,branchCommitPreviews:en,branchParentByName:yt,laneByBranch:Wt,branchUniqueAheadCounts:ds,defaultBranch:V,loaded:!0,cacheSchemaVersion:(Z=(Y=N[t])==null?void 0:Y.cacheSchemaVersion)!=null?Z:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,M,Ji,O,H,ae,Mn,en,yt,Wt,ds,V]);async function Gt(N,Y=!1){var re;const Z=er(N);if(Z&&!fi.current.has(Z)&&!(!Y&&((re=d[Z])!=null&&re.loaded))){fi.current.add(Z),y(!0);try{const Le=await Se("get_repo_visual_snapshot",{repoPath:Z,forceRefresh:Y});h(ot=>({...ot,[Z]:Le}))}finally{fi.current.delete(Z),fi.current.size===0&&y(!1)}}}g.useEffect(()=>{c.length!==0&&c.forEach(N=>{Gt(N.path),Se("watch_repo",{repoPath:N.path}).catch(console.error)})},[c]),g.useEffect(()=>{let N=!1,Y=null;return yc("git-activity",Z=>{if(N)return;const re=er(Z.payload.repoPath);!re||re===t||Gt(re,!0)}).then(Z=>{N?Z():Y=Z}).catch(console.error),()=>{N=!0,Y&&Y()}},[t]);function Gs(N){u(Y=>{const Z=er(N.path);if(!Z)return Y;const re={...N,path:Z},ot=(Y.some(it=>it.path===Z)?Y.map(it=>it.path===Z?re:it):[...Y,re]).slice(-Ry);try{localStorage.setItem(Qh,JSON.stringify(ot))}catch{}return ot})}async function Ps(N){const Y=er(N);if(Y){xe(null);try{const[Z,re]=await Promise.all([Se("get_repo_info",{repoPath:Y}),Se("get_default_branch",{repoPath:Y}).catch(()=>"main")]);Gs({path:Y,name:Z.name,lastOpenedAt:Date.now(),branchName:re}),await Gt(Y,!0)}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}}}function Xo(N){var Z,re;const Y=er(N);if(Y&&(u(Le=>{const ot=Le.filter(it=>it.path!==Y);try{localStorage.setItem(Qh,JSON.stringify(ot))}catch{}return ot}),h(Le=>{if(!(Y in Le))return Le;const ot={...Le};return delete ot[Y],ot}),t===Y)){const Le=(re=(Z=c.find(ot=>ot.path!==Y))==null?void 0:Z.path)!=null?re:null;Le?Rs(Le):(n(null),a(""),x([]),w([]),j([]),E([]),L({}),J(null),oe([]),An([]),mt({}),cn({}),Ht({}),In({}))}}async function Si(N){const Y=er(N);if(Y)try{await Se("reveal_in_finder",{path:Y})}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}}const Go=()=>{(async()=>{var N,Y;try{const Z=await Qv({directory:!0,multiple:!1,defaultPath:(Y=(N=c[0])==null?void 0:N.path)!=null?Y:void 0});typeof Z=="string"&&Z&&await Ps(Z)}catch(Z){xe(Z instanceof Error?Z.message:String(Z))}})()};async function qs(N,Y){const re=[];let Le=0;for(;;){const ot=await Se("get_merge_nodes",{repoPath:N,branch:Y,page:Le,perPage:100});if(re.push(...ot.nodes),!ot.hasMore||ot.nodes.length===0)break;Le+=1}return re}async function Ci(N,Y,Z){const re=Array.from(new Set([Z,...Y.map(it=>it.name)].filter(it=>!!it)));if(re.length===0)return[];const Le=await Promise.all(re.map(it=>qs(N,it).catch(()=>[]))),ot=new Map;for(const it of Le)for(const Nt of it){const Jt=`${Nt.targetCommitSha}:${Nt.targetBranch}`;ot.has(Jt)||ot.set(Jt,Nt)}return Array.from(ot.values())}const io=N=>N.map(Y=>`${Y.name}|${Y.headSha}|${Y.commitsAhead}|${Y.commitsBehind}|${Y.unpushedCommits}|${Y.remoteSyncStatus}`).join("||"),kn=N=>N.map(Y=>Y.fullSha).join("|"),mo=N=>{var Y,Z;return N?`${(Y=N.branchName)!=null?Y:""}|${N.headSha}|${(Z=N.parentSha)!=null?Z:""}|${N.hasUncommittedChanges?1:0}`:"__none__"};async function Hn(N,Y){const Z=Y!=null?Y:V,[re,Le,ot,it,Nt,Jt]=await Promise.all([Se("get_branches",{repoPath:N}),Se("get_all_repo_commits",{repoPath:N}),Se("get_unpushed_direct_commits",{repoPath:N,branch:Z}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:N}).catch(()=>null),Se("list_worktrees",{repoPath:N}).catch(()=>[]),Se("list_stashes",{repoPath:N}).catch(()=>[])]),rs=await Ci(N,re,Z),Us=await Promise.all([Z,...re.map(xs=>xs.name)].map(async xs=>{const It=await Se("get_branch_unpushed_commit_shas",{repoPath:N,branch:xs}).catch(()=>[]);return[xs,It]}));x(re),w(rs),j(Le),E(ot),L(Object.fromEntries(Us)),J(it),oe(Nt),An(Jt)}async function Ds(N){const[Y,Z,re]=await Promise.all([Se("get_branches",{repoPath:N}).catch(()=>[]),Se("get_all_repo_commits",{repoPath:N}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:N}).catch(()=>null)]);return io(Y)!==io(wo.current)||kn(Z)!==kn(Wo.current)||mo(re)!==mo(As.current)}async function ao(N){qe(null),Je(!0);try{const[Y,Z]=await Promise.all([Se("get_repo_info",{repoPath:N}),Se("get_default_branch",{repoPath:N})]);a(Y.name),q(Z),n(N),await Hn(N,Z),ms(N),qe({kind:"success",message:`Now targeting worktree at ${N}`})}catch(Y){const Z=Y instanceof Error?Y.message:String(Y);qe({kind:"error",message:Z}),console.error("Failed to switch worktree:",Z)}finally{Je(!1)}}async function dn(N,Y){if(!(!t||Ee)){Ve(!0),qe(null);try{await Se("remove_worktree",{repoPath:t,worktreePath:N,force:Y}),await Hn(t),qe({kind:"success",message:`Removed worktree at ${N}`})}catch(Z){const re=Z instanceof Error?Z.message:String(Z);qe({kind:"error",message:re}),console.error("Failed to remove worktree:",re)}finally{Ve(!1)}}}function Hs(N,Y){var Z,re;a(Y.name||md(N)),q(Y.defaultBranch||"main"),x(Y.branches),w(Y.mergeNodes),j(Y.directCommits),E(Y.unpushedDirectCommits),L(Y.unpushedCommitShasByBranch),J(Y.checkedOutRef),oe(Y.worktrees),An(Y.stashes),mt(Y.branchCommitPreviews),cn((Z=Y.branchParentByName)!=null?Z:{}),Ht((re=Y.laneByBranch)!=null?re:{}),In(Y.branchUniqueAheadCounts),n(N)}async function Vs(N,Y,Z){const re=Z==null?void 0:Z.forceRefresh,Le=Z==null?void 0:Z.applyToActiveState;try{const[ot,it]=await Promise.all([Se("get_repo_info",{repoPath:N}),Se("get_default_branch",{repoPath:N})]);if(Y!==fs.current)return;const Nt=await Se("get_repo_visual_snapshot",{repoPath:N,forceRefresh:re});if(Y!==fs.current)return;h(Jt=>({...Jt,[N]:Nt})),Le&&(t===N||fs.current),ms(N)}catch(ot){if(Y!==fs.current)return;console.error("Background snapshot refresh failed:",ot)}}async function Rs(N){const Y=++fs.current,Z=er(N);if(!Z)return;const re=d[Z];if(re!=null&&re.loaded){xe(null),Hs(Z,re),Gs({path:Z,name:re.name||md(Z),lastOpenedAt:Date.now(),branchName:re.defaultBranch}),Je(!1),rt(!1),Vs(Z,Y,{forceRefresh:!1,applyToActiveState:!1});return}if(rt(!0),Je(!0),xe(null),await new Promise(Le=>setTimeout(Le,15)),Y===fs.current)try{const[Le,ot]=await Promise.all([Se("get_repo_info",{repoPath:Z}),Se("get_default_branch",{repoPath:Z})]);if(Y!==fs.current)return;a(Le.name),q(ot);const it=await Se("get_repo_visual_snapshot",{repoPath:Z,forceRefresh:!0});if(Y!==fs.current)return;h(Nt=>({...Nt,[Z]:it})),Hs(Z,it),Gs({path:Z,name:Le.name,lastOpenedAt:Date.now(),branchName:ot}),Je(!1),rt(!1),ms(Z)}catch(Le){if(Y!==fs.current)return;console.error("Failed to load repo:",Le),xe(Le instanceof Error?Le.message:String(Le)),n(null),rt(!1),Je(!1)}}async function ms(N){const Y=++is.current;try{if(Y!==is.current)return;P(!1),je(null);const Z=await Se("get_github_info",{repoPath:N}),re=await Se("get_github_auth_status");if(Y!==is.current||(me(re),!re.ghAvailable||!re.authenticated))return;const Le=await Se("get_open_prs",{owner:Z.owner,repo:Z.repo});if(Y!==is.current)return;G(Le),P(!0)}catch(Z){if(Y!==is.current)return;console.log("GitHub data not available:",Z),je(Z instanceof Error?Z.message:String(Z)),P(!1)}}g.useEffect(()=>{let N=null,Y=!1;const Z=(()=>{try{return dp().label}catch{return null}})(),re=async ot=>{var Nt;const it=(Nt=ot==null?void 0:ot.path)==null?void 0:Nt.trim();!it||Y||t!==it&&await Rs(it)};return(async()=>{Z==="main"&&(N=await yc("gitviz://open-repo",async it=>{await re(it.payload)}));const ot=await Se("take_pending_open_repo");await re(ot)})(),()=>{Y=!0,N&&N()}},[t]),g.useEffect(()=>{wo.current=_},[_]),g.useEffect(()=>{Wo.current=S},[S]),g.useEffect(()=>{As.current=H},[H]),g.useEffect(()=>{fa.current=Is},[Is]),g.useEffect(()=>{},[t,V,qn]),g.useEffect(()=>{if(!t||!V||!qn)return;Se("watch_repo",{repoPath:t}).catch(console.error);let N=!1,Y=!1,Z=!1,re=null;const Le=async()=>{if(!N){if(fa.current){Y=!0;return}if(Z){Y=!0;return}Z=!0;try{if(!await Ds(t)||N)return;await Hn(t,V)}catch(it){console.warn("Frozen git-activity refresh failed:",it)}finally{Z=!1,Y&&!N&&(Y=!1,window.setTimeout(()=>{Le()},0))}}},ot=()=>{Y=!0,Le()};return yc("git-activity",it=>{er(it.payload.repoPath)===t&&(Gt(t,!0),ot())}).then(it=>{N?it():re=it}).catch(console.error),()=>{N=!0,re&&re()}},[t,V,qn]);async function Ro(){if(t){nt(!0),je(null);try{await Se("authenticate_github");const N=await Se("get_github_auth_status");me(N),N.authenticated?await ms(t):N.message&&je(N.message)}catch(N){je(N instanceof Error?N.message:String(N))}finally{nt(!1)}}}const Ks=new Set(D.map(N=>N.branchName)),So=14*864e5,po=Date.now(),Bo=_.filter(N=>N.status==="stale"),En=Bo.filter(N=>Ks.has(N.name)||po-new Date(N.lastCommitDate).getTime()<=So),Vn=Bo.filter(N=>!Ks.has(N.name)&&po-new Date(N.lastCommitDate).getTime()>So),Wn=N=>{var Y;return Object.prototype.hasOwnProperty.call(ds,N.name)?Math.max(0,(Y=ds[N.name])!=null?Y:0):Math.max(0,N.commitsAhead)};g.useEffect(()=>{vt({}),pn.current=null,nt(!1),me(null),je(null),G([]),qe(null)},[t]),g.useEffect(()=>{var Jt,rs,Us,xs;if(!t||!V){vt({}),mt({}),cn({}),Ht({}),In({}),pn.current=null;return}const N=_.map(It=>{var Dn;return`${It.name}:${It.headSha}:${(Dn=It.parentBranch)!=null?Dn:""}:${It.commitsAhead}`}).join("|"),Y=b.map(It=>{var Dn,_n;return`${It.fullSha}:${(_n=(Dn=It.parentShas)==null?void 0:Dn[1])!=null?_n:""}`}).join("|"),Z=`${t}|${V}|${N}|${Y}`;if(pn.current===Z)return;pn.current=Z;const re={},Le={};for(const It of _){if(It.name===V)continue;const Dn=S.filter(_n=>_n.branch===It.name).map(_n=>{var pe;return{fullSha:_n.fullSha,sha:_n.sha,parentSha:(pe=_n.parentSha)!=null?pe:null,message:_n.message,author:_n.author,date:_n.date,kind:"commit"}});re[It.name]=Dn,Le[It.name]=Dn.length}const ot=new Map;for(const It of S)ot.set(It.fullSha,It.branch);const it=It=>{if(!It)return null;const Dn=ot.get(It);if(Dn)return Dn;for(const[_n,pe]of ot.entries())if(_n.startsWith(It)||It.startsWith(_n))return pe;return null},Nt={[V]:null};for(const It of _){if(It.name===V){Nt[It.name]=null;continue}const Dn=S.filter(C=>C.branch===It.name),_n=new Set(Dn.map(C=>C.fullSha)),pe=(rs=(Jt=Dn.filter(C=>{var R;const T=(R=C.parentSha)!=null?R:null;return!T||!_n.has(T)}).sort((C,T)=>{const R=new Date(C.date).getTime()-new Date(T.date).getTime();return R!==0?R:C.fullSha.localeCompare(T.fullSha)})[0])==null?void 0:Jt.parentSha)!=null?rs:null,Ie=it(pe);Nt[It.name]=(xs=(Us=Ie!=null?Ie:yt[It.name])!=null?Us:It.parentBranch)!=null?xs:null}vt({}),mt(re),cn(Nt),Ht(It=>{const Dn={};for(const _n of _){const pe=It[_n.name];pe!=null&&Number.isFinite(pe)&&(Dn[_n.name]=pe)}return Dn}),In(Le)},[t,V,_,b,S,yt]),g.useEffect(()=>{if(!bt){gt(!1);return}gt(!0);const N=window.setTimeout(()=>{gt(!1)},By),Y=window.setTimeout(()=>{qe(null)},By+pS);return()=>{window.clearTimeout(N),window.clearTimeout(Y)}},[bt]),g.useEffect(()=>{if(!t||_.length===0)return;const N=re=>new Promise(Le=>setTimeout(Le,re));async function Y(){const Le=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Le}`),await N(800),await Se("screenshot",{path:`${Le}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Le}`)}const Z=re=>{if((re.metaKey||re.ctrlKey)&&!re.shiftKey&&!re.altKey&&re.key.toLowerCase()==="b"){re.preventDefault(),gs(Le=>!Le);return}(re.metaKey||re.ctrlKey)&&re.shiftKey&&re.key==="S"&&(re.preventDefault(),Y())};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[t,i,_]);function Co(){We(!0),setTimeout(()=>{Te(!1),We(!1),Ge("active"),qt(null)},100)}async function ro(N){if(!t)return;qe(null);const Y=/^STASH:(\d+)$/.exec(N.commitSha);if(Y){try{const Z=parseInt(Y[1],10),re=await Se("apply_stash_restore",{repoPath:t,stashIndex:Z});J(re),await Hn(t);const Le=`Stash ${Z+1}`,ot=re.branchName?` on branch ${re.branchName}`:" at the stash base (detached HEAD)";qe({kind:"success",message:`Restored ${Le}${ot}; stash applied and dropped (uncommitted changes).`})}catch(Z){const re=Z instanceof Error?Z.message:String(Z);qe({kind:"error",message:re}),console.error("Failed to apply stash:",re)}return}if(N.branchName){const Z=(Le,ot)=>{const it=Le.replace(/\\/g,"/").replace(/\/+$/,""),Nt=ot.replace(/\\/g,"/").replace(/\/+$/,"");return it===Nt||it.toLowerCase()===Nt.toLowerCase()},re=ae.find(Le=>Le.pathExists===!1||Le.isCurrent||t&&Z(Le.path,t)?!1:Le.branchName===N.branchName);if(re){await ao(re.path);return}}try{let Z="";(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:t,includeUntracked:!0}),Z="Stashed local changes (including untracked), then ",await Hn(t));const Le=N.branchName?await Se("checkout_branch",{repoPath:t,branchName:N.branchName}):await Se("checkout_ref",{repoPath:t,refName:N.commitSha}),ot=await Se("get_checked_out_ref",{repoPath:t}).catch(()=>Le);J(ot),await Hn(t);const it=ot.branchName?ot.branchName:`${ot.headSha.slice(0,7)} (detached)`;qe({kind:"success",message:`${Z}Checked out ${it}`})}catch(Z){const re=Z instanceof Error?Z.message:String(Z);qe({kind:"error",message:re}),console.error("Failed to checkout commit:",re)}}async function Qs(){if(!(!t||mn)){qe(null),fn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){qe({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:t,includeUntracked:!0}),await Hn(t),qe({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(N){const Y=N instanceof Error?N.message:String(N);qe({kind:"error",message:Y}),console.error("Failed to stash:",Y)}finally{fn(!1)}}}async function ti(N){if(!t||Yn)return!1;const Y=N.trim();if(!Y)return qe({kind:"error",message:"Enter a commit message."}),!1;qe(null),et(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return qe({kind:"error",message:"No local changes to commit."}),!1;const re=await Se("commit_working_tree",{repoPath:t,message:Y});return J(re),await Hn(t),qe({kind:"success",message:"Committed local changes."}),!0}catch(Z){const re=Z instanceof Error?Z.message:String(Z);return qe({kind:"error",message:re}),console.error("Failed to commit:",re),!1}finally{et(!1)}}async function _o(){if(!t||ss)return!1;qe(null),Ho(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return qe({kind:"error",message:"No local changes to stage."}),!1;const Y=await Se("stage_working_tree",{repoPath:t});return J(Y),await Hn(t),qe({kind:"success",message:"Staged all changes."}),!0}catch(N){const Y=N instanceof Error?N.message:String(N);return qe({kind:"error",message:Y}),console.error("Failed to stage:",Y),!1}finally{Ho(!1)}}async function js(N,Y){if(!(!t||Vo)){Xs(!0),qe(null);try{const Z=/^STASH:(\d+)$/.exec(N);let re;if(Z){const Le=parseInt(Z[1],10);re=await Se("move_stash_to_new_branch",{repoPath:t,stashIndex:Le,branchName:Y})}else re=await Se("create_branch_from_uncommitted",{repoPath:t,branchName:Y});J(re),await Hn(t),qe({kind:"success",message:`Moved to new branch "${Y}"`})}catch(Z){const re=Z instanceof Error?Z.message:String(Z);qe({kind:"error",message:re}),console.error("Failed to create branch from node:",re)}finally{Xs(!1)}}}async function Bs(N){if(!(!t||Vo)){Xs(!0),qe(null);try{const Y=await Se("create_root_branch",{repoPath:t,branchName:N});J(Y),await Hn(t),qe({kind:"success",message:`Created new root branch "${N}"`})}catch(Y){const Z=Y instanceof Error?Y.message:String(Y);qe({kind:"error",message:Z}),console.error("Failed to create root branch:",Z)}finally{Xs(!1)}}}async function qo(N,Y){if(!t)return;const Z=Array.from(new Set(N.filter(re=>!!re&&re!==Y)));if(Z.length!==0){qe(null),Bt(!0);try{let re=null;for(const Le of Z)re=await Se("merge_ref_into_branch",{repoPath:t,sourceRef:Le,targetBranch:Y});await Hn(t),re&&J(re),qe({kind:"success",message:Z.length===1?`Merged ${Z[0].slice(0,7)} into ${Y}`:`Merged ${Z.length} commits into ${Y}`})}catch(re){const Le=re instanceof Error?re.message:String(re);qe({kind:"error",message:Le}),console.error("Failed to merge refs into branch:",Le)}finally{Bt(!1)}}}async function ko(){if(!(!t||$t)){qe(null),Zt(!0);try{const N=await Se("push_all_unpushed_branches",{repoPath:t});await Hn(t),qe({kind:"success",message:N.length>0?N.length===1?`Pushed ${N[0].branchName}`:`Pushed ${N.length} branches`:"Everything local is already pushed."})}catch(N){const Y=N instanceof Error?N.message:String(N);qe({kind:"error",message:Y}),console.error("Failed to push all branches:",Y)}finally{Zt(!1)}}}async function go(){if(!(!t||$t)){qe(null),Zt(!0);try{const N=await Se("push_current_branch",{repoPath:t});await Hn(t),qe({kind:"success",message:`Pushed ${N.branchName}`})}catch(N){const Y=N instanceof Error?N.message:String(N);qe({kind:"error",message:Y}),console.error("Failed to push current branch:",Y)}finally{Zt(!1)}}}async function Lo(N){var Z;if(!t||$t)return;const Y=Array.from(new Map(N.filter(re=>re.branchName&&re.targetSha).map(re=>[re.branchName,re])).values());if(Y.length!==0){qe(null),Zt(!0);try{for(const re of Y)await Se("push_branch",{repoPath:t,branchName:re.branchName,targetSha:re.targetSha});await Hn(t),qe({kind:"success",message:Y.length===1?`Pushed ${Y[0].branchName} through ${(Z=Y[0].targetSha)==null?void 0:Z.slice(0,7)}`:`Pushed ${Y.length} selected commit ranges`})}catch(re){const Le=re instanceof Error?re.message:String(re);qe({kind:"error",message:Le}),console.error("Failed to push selected commits:",Le)}finally{Zt(!1)}}}async function Oo(N){var ot;if(!t||ct)return;const Y=Array.from(new Set(N.branchNames.filter(it=>it&&it!==V))),Z=!!N.discardUncommittedChanges,re=(ot=N.stashIndices)!=null?ot:[],Le=Array.from(new Set(re)).sort((it,Nt)=>Nt-it);if(!(Y.length===0&&!Z&&Le.length===0)){qe(null),lt(!0);try{for(const Jt of Le)await Se("stash_drop",{repoPath:t,stashIndex:Jt});const it=Y.length>0||Z?await Se("delete_selected_elements",{repoPath:t,branchNames:Y,discardUncommittedChanges:Z}):{deletedBranches:[],discardedUncommittedChanges:!1};await Hn(t);const Nt=[];Le.length>0&&Nt.push(Le.length===1?`removed stash ${Le[0]+1}`:`removed ${Le.length} stashes`),it.discardedUncommittedChanges&&Nt.push("discarded local uncommitted changes"),it.deletedBranches.length>0&&Nt.push(it.deletedBranches.length===1?`deleted ${it.deletedBranches[0]}`:`deleted ${it.deletedBranches.length} branches`),qe({kind:"success",message:Nt.length>0?Nt.join(" and "):"Nothing to delete."})}catch(it){const Nt=it instanceof Error?it.message:String(it);qe({kind:"error",message:Nt}),console.error("Failed to delete selected elements:",Nt)}finally{lt(!1)}}}function ki(N){qt(N),pt(Y=>{var Z;return{branch:N,seq:((Z=Y==null?void 0:Y.seq)!=null?Z:0)+1}})}function ea(N){N&&(at(N),se(Y=>Y+1))}function Ii(N){N&&(fe(N),se(Y=>Y+1))}g.useEffect(()=>{var Z;const N=H!=null&&H.hasUncommittedChanges?"WORKING_TREE":(Z=H==null?void 0:H.headSha)!=null?Z:null;if(!N)return;const Y=`${t!=null?t:"__no-repo__"}|${Ts}|${N}`;Uo.current!==Y&&(Uo.current=Y,at(N),se(re=>re+1))},[H==null?void 0:H.hasUncommittedChanges,H==null?void 0:H.headSha,Ts,t]),g.useEffect(()=>{Uo.current=null},[t]);const{enrichedBranches:lo,enrichedBranchCommitPreviews:Zs,enrichedBranchUniqueAheadCounts:jt,enrichedDirectCommits:zo}=g.useMemo(()=>{var R,B,F,ie,De;const N=Qx(Mn,_,S,en,ds,V,(R=H==null?void 0:H.hasUncommittedChanges)!=null?R:!1);let Y=N.branches,Z=N.directCommits,re=N.branchCommitPreviews,Le=N.branchUniqueAheadCounts;if(!(H!=null&&H.hasUncommittedChanges))return{enrichedBranches:Y,enrichedDirectCommits:Z,enrichedBranchCommitPreviews:re,enrichedBranchUniqueAheadCounts:Le};const ot=H.headSha||H.parentSha||null,it=(F=(B=Z[0])==null?void 0:B.fullSha)!=null?F:null,Nt=(Ce,$e)=>!Ce||!$e?!1:Ce===$e||Ce.startsWith($e)||$e.startsWith(Ce),Jt=[{name:V,headSha:it!=null?it:"",isDefault:!0},...Y.map(Ce=>({name:Ce.name,headSha:Ce.headSha,isDefault:!1}))],rs=H.branchName?Jt.find(Ce=>Ce.name===H.branchName):void 0,Us=ot?Jt.filter(Ce=>Nt(Ce.headSha,ot)):[],xs=(ie=rs!=null?rs:Us.find(Ce=>Ce.isDefault))!=null?ie:Us[0],It=xs&&!xs.isDefault?Y.find(Ce=>Ce.name===xs.name):void 0,Dn=(()=>{var $e;if(!ot)return null;const Ce=Z.find(ut=>Nt(ut.fullSha,ot)||Nt(ut.sha,ot));if(Ce!=null&&Ce.date)return Ce.date;if(It){const ut=(($e=re[It.name])!=null?$e:[]).find(ft=>Nt(ft.fullSha,ot)||Nt(ft.sha,ot));if(ut!=null&&ut.date)return ut.date}return null})(),_n=Dn?new Date(Dn).getTime():Number.NaN,pe=Date.now(),Ie=Number.isFinite(_n)?Math.max(pe,_n+1):pe,C=new Date(Ie).toISOString(),T={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ot,message:"Local uncommitted changes",author:"You",date:C,kind:"uncommitted"};return It?{enrichedBranches:Y.map($e=>$e.name===It.name?{...$e,commitsAhead:$e.commitsAhead+1,unpushedCommits:$e.unpushedCommits+1,lastCommitDate:C,headSha:"WORKING_TREE"}:$e),enrichedDirectCommits:Z,enrichedBranchCommitPreviews:{...re,[It.name]:[T,...re[It.name]||[]]},enrichedBranchUniqueAheadCounts:{...Le,[It.name]:Math.max(0,(De=Object.prototype.hasOwnProperty.call(Le,It.name)?Le[It.name]:It.commitsAhead)!=null?De:0)+1}}:{enrichedBranches:Y,enrichedBranchCommitPreviews:{...re,[V]:[T,...re[V]||[]]},enrichedBranchUniqueAheadCounts:{...Le},enrichedDirectCommits:Z}},[_,en,ds,H,V,S,Mn]),co=g.useMemo(()=>{const N={...yt};return N[V]=null,N},[yt,V,lo]),ni=g.useMemo(()=>{var N;return(N=Tw(lo,V,co,Wt))!=null?N:fp(lo,V,Zs,co)},[lo,V,Zs,co,Wt]),si=g.useMemo(()=>Mc({lanes:ni,branches:lo,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,defaultBranch:V,branchCommitPreviews:Zs,branchParentByName:co,branchUniqueAheadCounts:jt,manuallyOpenedClumps:Ns,manuallyClosedClumps:On,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:Pe,checkedOutRef:H!=null?H:null,orientation:Ts}),[ni,lo,b,zo,M,V,Zs,co,jt,Ns,On,ee,Pe,(tn=H==null?void 0:H.headSha)!=null?tn:null,(rn=H==null?void 0:H.branchName)!=null?rn:null,Ts]),Ms=g.useMemo(()=>{var N;return Pe&&(N=si.clusterKeyByCommitId.get(Pe))!=null?N:null},[si.clusterKeyByCommitId,Pe]),yo=g.useMemo(()=>{if(!Ms||On.has(Ms))return Ns;const N=new Set(Ns);return N.add(Ms),N},[On,Ns,Ms]),k=g.useMemo(()=>{if(!Ms)return On;const N=new Set(On);return N.delete(Ms),N},[On,Ms]),U=g.useMemo(()=>Mc({lanes:ni,branches:lo,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,defaultBranch:V,branchCommitPreviews:Zs,branchParentByName:co,branchUniqueAheadCounts:jt,manuallyOpenedClumps:yo,manuallyClosedClumps:k,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:Pe,checkedOutRef:H!=null?H:null,orientation:Ts}),[ni,lo,b,zo,M,V,Zs,co,jt,yo,k,ee,Pe,(on=H==null?void 0:H.headSha)!=null?on:null,(vn=H==null?void 0:H.branchName)!=null?vn:null,Ts]);g.useEffect(()=>{try{const N=window.localStorage.getItem(Ly);if(N){const Z=Number(N);Number.isFinite(Z)&&vi(Math.min(Py,Math.max(Iy,Z)))}const Y=window.localStorage.getItem(Oy);Y!=null&&gs(Y==="true")}catch{}},[]),g.useEffect(()=>{un.current=xn},[xn]),g.useEffect(()=>{const N=Pn.current;N&&(N.style.width=bn?"0px":`${xn}px`)},[xn,bn]),g.useEffect(()=>{try{window.localStorage.setItem(Oy,String(bn))}catch{}},[bn]);const ce=N=>{const Y=ys.current;if(!Y)return;const Z=Y.startWidth+(N-Y.startX);Y.pendingWidth=Math.min(Py,Math.max(Iy,Z));const re=Pn.current;re&&(re.style.width=`${Y.pendingWidth}px`)},we=(N,Y)=>{const Z=ys.current;if(Z&&!(Y!=null&&Z.pointerId!==Y)){ys.current=null,ks({dragging:!1,lastEvent:N}),document.body.style.cursor="",document.body.style.userSelect="",vi(Z.pendingWidth);try{window.localStorage.setItem(Ly,String(Z.pendingWidth))}catch{}}},Ke=N=>{N.button===0&&(N.preventDefault(),ks({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:N.pointerId,clientX:N.clientX,width:un.current}),ys.current={startX:N.clientX,startWidth:un.current,pendingWidth:un.current,pointerId:N.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",N.currentTarget.setPointerCapture(N.pointerId))},st=N=>{const Y=ys.current;!Y||Y.pointerId!==N.pointerId||(os.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:N.clientX}),ks(Z=>Z.dragging?{dragging:!0,lastEvent:"move"}:Z),ce(N.clientX))},Rt=N=>{if(ys.current){console.debug("[sidebar-resize] pointerup",{pointerId:N.pointerId});try{N.currentTarget.releasePointerCapture(N.pointerId)}catch{}we("pointerup",N.pointerId)}},Ft=N=>{if(ys.current){console.debug("[sidebar-resize] pointercancel",{pointerId:N.pointerId});try{N.currentTarget.releasePointerCapture(N.pointerId)}catch{}we("pointercancel",N.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Pn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:bn?64:xn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":bn?"Open sidebar":"Collapse sidebar",onClick:()=>gs(N=>!N),children:bn?l.jsx(bw,{className:"h-4 w-4 shrink-0"}):l.jsx(yw,{className:"h-4 w-4 shrink-0"})}),l.jsx(hS,{className:_S("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:bn,projects:Fo,activeProjectPath:t,onSelectProject:Rs,onAddProject:Go,onRemoveProject:Xo,onRevealProjectInFinder:Si,projectLoading:Fe||p,projectError:St,checkedOutRef:H,showCommits:Ot,onToggleShowCommits:()=>Qt(N=>!N),manuallyOpenedClumpsByProject:Me,manuallyClosedClumpsByProject:ue,manuallyOpenedClumps:yo,manuallyClosedClumps:k,setManuallyOpenedClumps:as,setManuallyClosedClumps:wi,gridLayoutModel:U,onSelectCommit:ea,onSelectBranch:Ii}),bn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Ke,onPointerMove:st,onPointerUp:Rt,onPointerCancel:Ft,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(iS,{branches:lo,mergeNodes:b,directCommits:zo,unpushedDirectCommits:M,unpushedCommitShasByBranch:O,defaultBranch:V,branchCommitPreviews:Zs,branchParentByName:co,branchUniqueAheadCounts:jt,gridSearchQuery:ee,gridSearchJumpToken:I,gridSearchJumpDirection:W,gridFocusSha:Pe,onGridSearchResultCountChange:be,onGridSearchResultIndexChange:Ue,onGridSearchFocusChange:at,checkedOutRef:H,onCommitClick:ro,onMergeRefsIntoBranch:qo,mergeInProgress:tt,onPushAllBranches:ko,onPushCurrentBranch:go,onPushCommitTargets:Lo,pushInProgress:$t,onDeleteSelection:Oo,deleteInProgress:ct,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:dn,removeWorktreeInProgress:Ee,onSwitchToWorktree:ao,onStashLocalChanges:Qs,stashInProgress:mn,stashDisabled:!1,onCommitLocalChanges:ti,commitInProgress:Yn,commitDisabled:!1,onStageAllChanges:_o,stageInProgress:ss,onCreateBranchFromNode:js,onCreateRootBranch:Bs,createBranchFromNodeInProgress:Vo,isDebugOpen:bo,onDebugClose:()=>vo(!1),onInteractionChange:di,manuallyOpenedClumps:yo,manuallyClosedClumps:k,setManuallyOpenedClumps:as,setManuallyClosedClumps:wi,layoutModel:U,orientation:Ts,gridHudProps:{githubAuthStatus:K,githubAuthLoading:ke,onGitHubAuthSetup:Ro,gridSearchQuery:ee,setGridSearchQuery:fe,gridSearchResultCount:de,gridSearchResultIndex:Ae,setGridSearchJumpDirection:he,setGridSearchJumpToken:se,mapGridOrientation:Ts,setMapGridOrientation:Do,setIsGridDebugOpen:vo,githubAuthMessage:Ze,commitSwitchFeedback:bt,isCommitSwitchFeedbackVisible:Pt}})]}),ne&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Ye?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Co,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ge("active"),className:`text-xs font-medium transition-colors ${Xe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[En.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ge("inactive"),className:`text-xs font-medium transition-colors ${Xe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Vn.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Xe==="active"?En:Vn).map(N=>{const Y=(At==null?void 0:At.name)===N.name,Z=Wn(N);return l.jsxs("button",{onClick:()=>ki(N),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${Y?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:N.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[Z>0&&`${Z} ahead`,Z>0&&N.commitsBehind>0&&", ",N.commitsBehind>0&&`${N.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},N.name)})})]})]})})})}var Bc=zx(),xS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,bS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=xS}var us=bS,vS=`.icon-transitions-module__iconState___uqK9J {
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
}`,wS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=vS}var ts=wS,SS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),CS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),kS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),jS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ts.iconState} ${n?ts.hiddenScaled:ts.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ts.iconState} ${n?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),MS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ts.iconStateFast} ${i?ts.visibleScaled:u?ts.sending:ts.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ts.iconStateFast} ${a?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ts.iconStateFast} ${c?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},ES=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ts.iconFade} ${n?ts.visible:ts.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ts.iconFade} ${n?ts.hidden:ts.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),TS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ts.iconFadeFast} ${n?ts.hidden:ts.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ts.iconFadeFast} ${n?ts.visible:ts.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),AS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),NS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Zx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),DS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),RS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),BS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),LS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),OS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),zS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),$S=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Jx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Zh=Jx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Jh="__agentation_freeze";function IS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Jh]||(t[Jh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Jh]}var hn=IS();typeof window<"u"&&!hn.installed&&(hn.origSetTimeout=window.setTimeout.bind(window),hn.origSetInterval=window.setInterval.bind(window),hn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?hn.origSetTimeout(t,n):hn.origSetTimeout((...a)=>{hn.frozen?hn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?hn.origSetInterval(t,n):hn.origSetInterval((...a)=>{hn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>hn.origRAF(n=>{hn.frozen?hn.frozenRAFQueue.push(t):t(n)}),hn.installed=!0);var Vt=hn.origSetTimeout,PS=hn.origSetInterval,fl=hn.origRAF;function HS(t){return t?Jx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function VS(){if(typeof document>"u"||hn.frozen)return;hn.frozen=!0,hn.frozenTimeoutQueue=[],hn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Zh},
    *${Zh}::before,
    *${Zh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),hn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;HS(i)||(n.pause(),hn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Hy(){var i;if(typeof document>"u"||!hn.frozen)return;hn.frozen=!1;const t=hn.frozenTimeoutQueue;hn.frozenTimeoutQueue=[];for(const a of t)hn.origSetTimeout(()=>{if(hn.frozen){hn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=hn.frozenRAFQueue;hn.frozenRAFQueue=[];for(const a of n)hn.origRAF(c=>{if(hn.frozen){hn.frozenRAFQueue.push(a);return}a(c)});for(const a of hn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}hn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function em(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=g.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[M,E]=g.useState(u),[O,L]=g.useState(!1),[D,G]=g.useState("initial"),[V,q]=g.useState(!1),[H,J]=g.useState(!1),ae=g.useRef(null),oe=g.useRef(null),Ee=g.useRef(null),Ve=g.useRef(null);g.useEffect(()=>{b&&D!=="exit"&&G("exit")},[b,D]),g.useEffect(()=>{Vt(()=>{G("enter")},0);const he=Vt(()=>{G("entered")},200),Me=Vt(()=>{const $=ae.current;$&&(em($),$.selectionStart=$.selectionEnd=$.value.length,$.scrollTop=$.scrollHeight)},50);return()=>{clearTimeout(he),clearTimeout(Me),Ee.current&&clearTimeout(Ee.current),Ve.current&&clearTimeout(Ve.current)}},[]);const ee=g.useCallback(()=>{Ve.current&&clearTimeout(Ve.current),L(!0),Ve.current=Vt(()=>{L(!1),em(ae.current)},250)},[]);g.useImperativeHandle(j,()=>({shake:ee}),[ee]);const fe=g.useCallback(()=>{G("exit"),Ee.current=Vt(()=>{p()},150)},[p]),I=g.useCallback(()=>{M.trim()&&h(M.trim())},[M,h]),se=g.useCallback(he=>{he.stopPropagation(),!he.nativeEvent.isComposing&&(he.key==="Enter"&&!he.shiftKey&&(he.preventDefault(),I()),he.key==="Escape"&&fe())},[I,fe]),W=[us.popup,w?us.light:"",D==="enter"?us.enter:"",D==="entered"?us.entered:"",D==="exit"?us.exit:"",O?us.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:oe,className:W,"data-annotation-popup":!0,style:_,onClick:he=>he.stopPropagation(),children:[l.jsxs("div",{className:us.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:us.headerToggle,onClick:()=>{const he=H;J(!H),he&&Vt(()=>em(ae.current),0)},type:"button",children:[l.jsx("svg",{className:`${us.chevron} ${H?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:us.element,children:n})]}):l.jsx("span",{className:us.element,children:n}),i&&l.jsx("span",{className:us.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${us.stylesWrapper} ${H?us.expanded:""}`,children:l.jsx("div",{className:us.stylesInner,children:l.jsx("div",{className:us.stylesBlock,children:Object.entries(S).map(([he,Me])=>l.jsxs("div",{className:us.styleLine,children:[l.jsx("span",{className:us.styleProperty,children:he.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:us.styleValue,children:Me}),";"]},he))})})}),a&&l.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ae,className:us.textarea,style:{borderColor:V?x:void 0},placeholder:c,value:M,onChange:he=>E(he.target.value),onFocus:()=>q(!0),onBlur:()=>q(!1),rows:2,onKeyDown:se}),l.jsxs("div",{className:us.actions,children:[y&&l.jsx("div",{className:us.deleteWrapper,children:l.jsx("button",{className:us.deleteButton,onClick:y,type:"button",children:l.jsx(OS,{size:22})})}),l.jsx("button",{className:us.cancel,onClick:fe,children:"Cancel"}),l.jsx("button",{className:us.submit,style:{backgroundColor:x,opacity:M.trim()?1:.4},onClick:I,disabled:!M.trim(),children:d})]})]})}),US=({content:t,children:n,...i})=>{const[a,c]=g.useState(!1),[u,d]=g.useState(!1),[h,p]=g.useState({top:0,right:0}),y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Vt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Vt(()=>{d(!1)},150)};return g.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},YS=`.styles-module__tooltip___mcXL2 {
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
}`,WS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=YS}var Vy=WS,Er=({content:t})=>l.jsx(US,{className:Vy.tooltip,content:t,children:l.jsx(kS,{className:Vy.tooltipIcon})}),wt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},eb=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...wt.navigation},{type:"header",label:"Header",...wt.header},{type:"hero",label:"Hero",...wt.hero},{type:"section",label:"Section",...wt.section},{type:"sidebar",label:"Sidebar",...wt.sidebar},{type:"footer",label:"Footer",...wt.footer},{type:"modal",label:"Modal",...wt.modal},{type:"banner",label:"Banner",...wt.banner},{type:"drawer",label:"Drawer",...wt.drawer},{type:"popover",label:"Popover",...wt.popover},{type:"divider",label:"Divider",...wt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...wt.card},{type:"text",label:"Text",...wt.text},{type:"image",label:"Image",...wt.image},{type:"video",label:"Video",...wt.video},{type:"table",label:"Table",...wt.table},{type:"grid",label:"Grid",...wt.grid},{type:"list",label:"List",...wt.list},{type:"chart",label:"Chart",...wt.chart},{type:"codeBlock",label:"Code Block",...wt.codeBlock},{type:"map",label:"Map",...wt.map},{type:"timeline",label:"Timeline",...wt.timeline},{type:"calendar",label:"Calendar",...wt.calendar},{type:"accordion",label:"Accordion",...wt.accordion},{type:"carousel",label:"Carousel",...wt.carousel},{type:"logo",label:"Logo",...wt.logo},{type:"faq",label:"FAQ",...wt.faq},{type:"gallery",label:"Gallery",...wt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...wt.button},{type:"input",label:"Input",...wt.input},{type:"search",label:"Search",...wt.search},{type:"form",label:"Form",...wt.form},{type:"tabs",label:"Tabs",...wt.tabs},{type:"dropdown",label:"Dropdown",...wt.dropdown},{type:"toggle",label:"Toggle",...wt.toggle},{type:"stepper",label:"Stepper",...wt.stepper},{type:"rating",label:"Rating",...wt.rating},{type:"fileUpload",label:"File Upload",...wt.fileUpload},{type:"checkbox",label:"Checkbox",...wt.checkbox},{type:"radio",label:"Radio",...wt.radio},{type:"slider",label:"Slider",...wt.slider},{type:"datePicker",label:"Date Picker",...wt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...wt.avatar},{type:"badge",label:"Badge",...wt.badge},{type:"tag",label:"Tag",...wt.tag},{type:"breadcrumb",label:"Breadcrumb",...wt.breadcrumb},{type:"pagination",label:"Pagination",...wt.pagination},{type:"progress",label:"Progress",...wt.progress},{type:"alert",label:"Alert",...wt.alert},{type:"toast",label:"Toast",...wt.toast},{type:"notification",label:"Notification",...wt.notification},{type:"tooltip",label:"Tooltip",...wt.tooltip},{type:"stat",label:"Stat",...wt.stat},{type:"skeleton",label:"Skeleton",...wt.skeleton},{type:"chip",label:"Chip",...wt.chip},{type:"icon",label:"Icon",...wt.icon},{type:"spinner",label:"Spinner",...wt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...wt.pricing},{type:"testimonial",label:"Testimonial",...wt.testimonial},{type:"cta",label:"CTA",...wt.cta},{type:"productCard",label:"Product Card",...wt.productCard},{type:"profile",label:"Profile",...wt.profile},{type:"feature",label:"Feature",...wt.feature},{type:"team",label:"Team",...wt.team},{type:"login",label:"Login",...wt.login},{type:"contact",label:"Contact",...wt.contact}]}],qi={};for(const t of eb)for(const n of t.items)qi[n.type]=n;function He({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ei({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function FS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(He,{w:t*.06}),l.jsx(He,{w:t*.07}),l.jsx(He,{w:t*.05}),l.jsx(He,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function XS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(He,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(He,{w:t*.6}),l.jsx(He,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function GS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(He,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(He,{w:t*(.4+c*17%30/100)})]},c))]})}function qS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"70%",h:2}),l.jsx(He,{w:"60%",h:2})]},c))})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"90%"}),l.jsx(He,{w:"70%"}),l.jsx(He,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:4,strong:!0}),l.jsx(He,{w:"95%",h:2}),l.jsx(He,{w:"85%",h:2}),l.jsx(He,{w:"50%",h:2})]})]})}function ZS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(He,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(He,{w:`${70+u*13%25}%`,h:2},u))]})}function JS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function e4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function t4({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ei,{size:8}),l.jsx(He,{w:`${55+c*17%35}%`,h:2})]},c))})}function n4({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(He,{w:Math.max(20,t*.5),h:3,strong:!0})})}function s4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(He,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(He,{w:"40%",h:2})})]})}function o4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function i4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(He,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"65%",h:2}),l.jsx(He,{w:"75%",h:2})]})]})}function a4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function r4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0})})}function l4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(He,{w:t*.35})]})}function c4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx(He,{w:t*.7}),l.jsx(He,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function u4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function d4({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(He,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(He,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function f4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function h4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ei,{size:Math.min(14,n*.4)}),l.jsx(He,{w:"50%",h:2})]})}function m4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function p4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function _4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function g4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function y4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function x4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(He,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function b4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function v4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function w4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(He,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(ei,{size:5}),l.jsx(ei,{size:5})]})]})}function C4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(He,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(He,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function k4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"75%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ei,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(He,{w:60,h:3,strong:!0}),l.jsx(He,{w:40,h:2})]})]})]})}function j4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(He,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"40%",h:3,strong:!0}),l.jsx(He,{w:"70%",h:2})]})]})}function E4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function T4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(He,{w:t*.5,h:2}),l.jsx(He,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(He,{w:t*.3,h:2})]})}function A4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function D4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function R4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function B4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ei,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(He,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function L4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(He,{w:t*.4,h:2}),l.jsx(He,{w:t*.25,h:2})]})}function O4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ei,{size:6}),l.jsx(ei,{size:6}),l.jsx(ei,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(He,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function z4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(He,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function $4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"50%",h:3,strong:!0}),l.jsx(He,{w:"75%",h:2})]}),l.jsx(He,{w:30,h:2})]})}function I4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"65%",h:4,strong:!0}),l.jsx(He,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function P4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ei,{size:i}),l.jsx(He,{w:t*.45,h:4,strong:!0}),l.jsx(He,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]})]})]})}function H4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(He,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(He,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function V4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:3,strong:!0}),l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function U4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(He,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function Y4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(He,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function W4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function F4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function X4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function G4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function q4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(He,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function K4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Q4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(He,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Z4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function J4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function e6({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(He,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function t6({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ei,{size:a}),l.jsx(He,{w:t*.12,h:3,strong:!0}),l.jsx(He,{w:t*.08,h:2})]},u))})]})}function n6({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(He,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(He,{w:t*.4,h:2})]})}function s6({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(He,{w:t*.4,h:4,strong:!0}),l.jsx(He,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(He,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var o6={navigation:FS,hero:XS,sidebar:GS,footer:qS,modal:KS,card:QS,text:ZS,image:JS,table:e4,list:t4,button:n4,input:s4,form:o4,tabs:i4,avatar:a4,badge:r4,header:l4,section:c4,grid:u4,dropdown:d4,toggle:f4,search:h4,toast:m4,progress:p4,chart:_4,video:g4,tooltip:y4,breadcrumb:x4,pagination:b4,divider:v4,accordion:w4,carousel:S4,pricing:C4,testimonial:k4,cta:j4,alert:M4,banner:E4,stat:T4,stepper:A4,tag:N4,rating:D4,map:R4,timeline:B4,fileUpload:L4,codeBlock:O4,calendar:z4,notification:$4,productCard:I4,profile:P4,drawer:H4,popover:V4,logo:U4,faq:Y4,gallery:W4,checkbox:F4,radio:X4,slider:G4,datePicker:q4,skeleton:K4,chip:Q4,icon:Z4,spinner:J4,feature:e6,team:t6,login:n6,contact:s6};function i6({type:t,width:n,height:i,text:a}){const c=o6[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var a6=`svg[fill=none] {
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
}`,r6={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=a6}var Be=r6,ll=24,Xu=5;function Uy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],M=[];for(const oe of n)i.has(oe.id)||M.push(oe);c&&M.push(...c);for(const oe of M){const Ee=oe.x,Ve=oe.x+oe.width,ee=oe.x+oe.width/2,fe=oe.y,I=oe.y+oe.height,se=oe.y+oe.height/2;for(const W of S)for(const he of[Ee,Ve,ee]){const Me=he-W;Math.abs(Me)<Xu&&Math.abs(Me)<Math.abs(u)&&(u=Me)}for(const W of j)for(const he of[fe,I,se]){const Me=he-W;Math.abs(Me)<Xu&&Math.abs(Me)<Math.abs(d)&&(d=Me)}}const E=Math.abs(u)<Xu?u:0,O=Math.abs(d)<Xu?d:0,L=[],D=new Set,G=h+E,V=p+E,q=y+E,H=_+O,J=x+O,ae=b+O;for(const oe of M){const Ee=oe.x,Ve=oe.x+oe.width,ee=oe.x+oe.width/2,fe=oe.y,I=oe.y+oe.height,se=oe.y+oe.height/2;for(const W of[Ee,ee,Ve])for(const he of[G,q,V])if(Math.abs(he-W)<.5){const Me=`x:${Math.round(W)}`;D.has(Me)||(D.add(Me),L.push({axis:"x",pos:W}))}for(const W of[fe,se,I])for(const he of[H,ae,J])if(Math.abs(he-W)<.5){const Me=`y:${Math.round(W)}`;D.has(Me)||(D.add(Me),L.push({axis:"y",pos:W}))}}return{dx:E,dy:O,guides:L}}function Yy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function l6({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[M,E]=g.useState(new Set),[O,L]=g.useState(null),[D,G]=g.useState(null),[V,q]=g.useState(null),[H,J]=g.useState([]),[ae,oe]=g.useState(null),[Ee,Ve]=g.useState(!1),ee=g.useRef(!1),[fe,I]=g.useState(new Set),se=g.useRef(new Map),W=g.useRef(null),he=g.useRef(null),Me=g.useRef(t);Me.current=t;const $=g.useRef(_);$.current=_;const ue=g.useRef(b);ue.current=b;const X=g.useRef(w);X.current=w;const de=g.useRef(x);g.useEffect(()=>{x!==de.current&&(de.current=x,E(new Set))},[x]);const be=g.useRef(S);g.useEffect(()=>{if(S!==void 0&&S!==be.current){be.current=S;const ne=new Set(Me.current.map(Te=>Te.id));ne.size>0&&(I(ne),E(new Set),he.current=null,Vt(()=>{n([]),I(new Set)},180))}},[S,n]),g.useEffect(()=>{const ne=Te=>{const Ye=Te.target;if(!(Ye.tagName==="INPUT"||Ye.tagName==="TEXTAREA"||Ye.isContentEditable)){if((Te.key==="Backspace"||Te.key==="Delete")&&M.size>0){Te.preventDefault();const Xe=new Set(M);I(Xe),E(new Set),Vt(()=>{n(Me.current.filter(Ge=>!Xe.has(Ge.id))),I(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Te.key)&&M.size>0){Te.preventDefault();const Xe=Te.shiftKey?20:1,Ge=Te.key==="ArrowLeft"?-Xe:Te.key==="ArrowRight"?Xe:0,ht=Te.key==="ArrowUp"?-Xe:Te.key==="ArrowDown"?Xe:0;n(t.map(pt=>M.has(pt.id)?{...pt,x:Math.max(0,pt.x+Ge),y:Math.max(0,pt.y+ht)}:pt));return}if(Te.key==="Escape"){i?a(null):M.size>0&&E(new Set);return}}};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[M,i,t,n,a]);const Ae=g.useCallback(ne=>{if(ne.button!==0||p||ne.target.closest(`.${Be.placement}`))return;ne.preventDefault(),ne.stopPropagation();const Ye=window.scrollY,We=ne.clientX,Xe=ne.clientY;if(i){he.current="place",d==null||d(!0);let Ge=!1,ht=We,pt=Xe;const At=dt=>{ht=dt.clientX,pt=dt.clientY;const P=Math.abs(ht-We),K=Math.abs(pt-Xe);if((P>5||K>5)&&(Ge=!0),Ge){const me=Math.min(We,ht),ke=Math.min(Xe,pt),nt=Math.abs(ht-We),Ze=Math.abs(pt-Xe);L({x:me,y:ke,w:nt,h:Ze}),q({x:dt.clientX+12,y:dt.clientY+12,text:`${Math.round(nt)} × ${Math.round(Ze)}`})}},qt=dt=>{window.removeEventListener("mousemove",At),window.removeEventListener("mouseup",qt),L(null),q(null),he.current=null,d==null||d(!1);const P=wt[i];let K,me,ke,nt;Ge?(K=Math.min(We,ht),me=Math.min(Xe,pt)+Ye,ke=Math.max(ll,Math.abs(ht-We)),nt=Math.max(ll,Math.abs(pt-Xe))):(ke=P.width,nt=P.height,K=We-ke/2,me=Xe+Ye-nt/2),K=Math.max(0,K),me=Math.max(0,me);const Ze={id:Yy(),type:i,x:K,y:me,width:ke,height:nt,scrollY:Ye,timestamp:Date.now()},je=[...t,Ze];n(je),E(new Set([Ze.id])),a(null)};window.addEventListener("mousemove",At),window.addEventListener("mouseup",qt)}else{ne.shiftKey||E(new Set),he.current="select";let Ge=!1;const ht=At=>{const qt=Math.abs(At.clientX-We),dt=Math.abs(At.clientY-Xe);if((qt>4||dt>4)&&(Ge=!0),Ge){const P=Math.min(We,At.clientX),K=Math.min(Xe,At.clientY);G({x:P,y:K,w:Math.abs(At.clientX-We),h:Math.abs(At.clientY-Xe)})}},pt=At=>{if(window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",pt),he.current=null,Ge){const qt=Math.min(We,At.clientX),dt=Math.min(Xe,At.clientY)+Ye,P=Math.abs(At.clientX-We),K=Math.abs(At.clientY-Xe),me=new Set(ne.shiftKey?M:new Set);for(const ke of t)ke.y-Ye,ke.x+ke.width>qt&&ke.x<qt+P&&ke.y+ke.height>dt&&ke.y<dt+K&&me.add(ke.id);E(me)}G(null)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",pt)}},[i,p,t,n,M]),Ue=g.useCallback((ne,Te)=>{var Ze;if(ne.button!==0)return;const Ye=ne.target;if(Ye.closest(`.${Be.handle}`)||Ye.closest(`.${Be.deleteButton}`))return;ne.preventDefault(),ne.stopPropagation();let We;ne.shiftKey?(We=new Set(M),We.has(Te)?We.delete(Te):We.add(Te)):M.has(Te)?We=new Set(M):We=new Set([Te]),E(We),(We.size!==M.size||[...We].some(je=>!M.has(je)))&&((Ze=$.current)==null||Ze.call($,We,ne.shiftKey));const Ge=ne.clientX,ht=ne.clientY,pt=new Map;for(const je of t)We.has(je.id)&&pt.set(je.id,{x:je.x,y:je.y});he.current="move",d==null||d(!0);let At=!1,qt=!1,dt=t,P=0,K=0;const me=new Map;for(const je of t)pt.has(je.id)&&me.set(je.id,{w:je.width,h:je.height});const ke=je=>{var en;const bt=je.clientX-Ge,qe=je.clientY-ht;if((Math.abs(bt)>2||Math.abs(qe)>2)&&(At=!0),!At)return;if(je.altKey&&!qt){qt=!0;const mt=[];for(const yt of t)pt.has(yt.id)&&mt.push({...yt,id:Yy(),timestamp:Date.now()});dt=[...t,...mt]}let Pt=1/0,gt=1/0,tt=-1/0,Bt=-1/0;for(const[mt,yt]of pt){const cn=me.get(mt);cn&&(Pt=Math.min(Pt,yt.x+bt),gt=Math.min(gt,yt.y+qe),tt=Math.max(tt,yt.x+bt+cn.w),Bt=Math.max(Bt,yt.y+qe+cn.h))}const $t={x:Pt,y:gt,width:tt-Pt,height:Bt-gt},{dx:Zt,dy:ct,guides:lt}=Uy($t,dt,new Set(pt.keys()),void 0,y);J(lt);const Tt=bt+Zt,vt=qe+ct;P=Tt,K=vt,n(dt.map(mt=>{const yt=pt.get(mt.id);return yt?{...mt,x:Math.max(0,yt.x+Tt),y:Math.max(0,yt.y+vt)}:mt})),(en=ue.current)==null||en.call(ue,Tt,vt)},nt=()=>{var je;window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",nt),he.current=null,d==null||d(!1),J([]),(je=X.current)==null||je.call(X,P,K,At)};window.addEventListener("mousemove",ke),window.addEventListener("mouseup",nt)},[M,t,n,d]),Pe=g.useCallback((ne,Te,Ye)=>{ne.preventDefault(),ne.stopPropagation();const We=t.find(me=>me.id===Te);if(!We)return;E(new Set([Te])),he.current="resize",d==null||d(!0);const Xe=ne.clientX,Ge=ne.clientY,ht=We.width,pt=We.height,At=We.x,qt=We.y,dt={left:Ye.includes("w"),right:Ye.includes("e"),top:Ye.includes("n"),bottom:Ye.includes("s")},P=me=>{const ke=me.clientX-Xe,nt=me.clientY-Ge;let Ze=ht,je=pt,bt=At,qe=qt;Ye.includes("e")&&(Ze=Math.max(ll,ht+ke)),Ye.includes("w")&&(Ze=Math.max(ll,ht-ke),bt=At+ht-Ze),Ye.includes("s")&&(je=Math.max(ll,pt+nt)),Ye.includes("n")&&(je=Math.max(ll,pt-nt),qe=qt+pt-je);const Pt={x:bt,y:qe,width:Ze,height:je},{dx:gt,dy:tt,guides:Bt}=Uy(Pt,Me.current,new Set([Te]),dt,y);J(Bt),gt!==0&&(dt.right?Ze+=gt:dt.left&&(bt+=gt,Ze-=gt)),tt!==0&&(dt.bottom?je+=tt:dt.top&&(qe+=tt,je-=tt)),n(Me.current.map($t=>$t.id===Te?{...$t,x:bt,y:qe,width:Ze,height:je}:$t)),q({x:me.clientX+12,y:me.clientY+12,text:`${Math.round(Ze)} × ${Math.round(je)}`})},K=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",K),q(null),he.current=null,d==null||d(!1),J([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",K)},[t,n,d]),at=g.useCallback(ne=>{he.current=null,I(Te=>{const Ye=new Set(Te);return Ye.add(ne),Ye}),E(Te=>{const Ye=new Set(Te);return Ye.delete(ne),Ye}),Vt(()=>{n(Me.current.filter(Te=>Te.id!==ne)),I(Te=>{const Ye=new Set(Te);return Ye.delete(ne),Ye})},180)},[n]),Ot={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Qt=g.useCallback(ne=>{const Te=t.find(Ye=>Ye.id===ne);Te&&(ee.current=!!Te.text,oe(ne),Ve(!1))},[t]),Fe=g.useCallback(()=>{ae&&(Ve(!0),Vt(()=>{oe(null),Ve(!1)},150))},[ae]);g.useEffect(()=>{u&&ae&&Fe()},[u]);const rt=g.useCallback(ne=>{ae&&(n(t.map(Te=>Te.id===ae?{...Te,text:ne.trim()||void 0}:Te)),Fe())},[ae,t,n,Fe]),Ut=typeof window<"u"?window.scrollY:0,Je=["nw","ne","se","sw"],St=j?"#f97316":"#3c82f7",xe=[{dir:"n",cls:Be.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:St})})},{dir:"e",cls:Be.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:St})})},{dir:"s",cls:Be.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:St})})},{dir:"w",cls:Be.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:St})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${Be.overlay} ${c?"":Be.light} ${i?Be.placing:""} ${p?Be.passthrough:""} ${u?Be.overlayExiting:""} ${j?Be.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ae,children:t.map(ne=>{var Xe;const Te=M.has(ne.id),Ye=((Xe=qi[ne.type])==null?void 0:Xe.label)||ne.type,We=ne.y-Ut;return l.jsxs("div",{"data-design-placement":ne.id,className:`${Be.placement} ${Te?Be.selected:""} ${fe.has(ne.id)?Be.exiting:""}`,style:{left:ne.x,top:We,width:ne.width,height:ne.height,position:"fixed"},onMouseDown:Ge=>Ue(Ge,ne.id),onDoubleClick:()=>Qt(ne.id),children:[l.jsx("span",{className:Be.placementLabel,children:Ye}),l.jsx("span",{className:`${Be.placementAnnotation} ${ne.text?Be.annotationVisible:""}`,children:(ne.text&&se.current.set(ne.id,ne.text),ne.text||se.current.get(ne.id)||"")}),l.jsx("div",{className:Be.placementContent,children:l.jsx(i6,{type:ne.type,width:ne.width,height:ne.height,text:ne.text})}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>at(ne.id),children:"✕"}),Je.map(Ge=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:ht=>Pe(ht,ne.id,Ge)},Ge)),xe.map(({dir:Ge,cls:ht,arrow:pt})=>l.jsx("div",{className:`${Be.edgeHandle} ${ht}`,onMouseDown:At=>Pe(At,ne.id,Ge),children:pt},Ge))]},ne.id)})}),ae&&(()=>{var qt,dt;const ne=t.find(P=>P.id===ae);if(!ne)return null;const Te=ne.y-Ut,Ye=ne.x+ne.width/2,We=Te-8,Xe=Te+ne.height+8,Ge=We>200,ht=Xe<window.innerHeight-100,pt=Math.max(160,Math.min(window.innerWidth-160,Ye));let At;return Ge?At={left:pt,bottom:window.innerHeight-We}:ht?At={left:pt,top:Xe}:At={left:pt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((qt=qi[ne.type])==null?void 0:qt.label)||ne.type,placeholder:Ot[ne.type]||"Label or content text",initialValue:(dt=ne.text)!=null?dt:"",submitLabel:ee.current?"Save":"Set",onSubmit:rt,onCancel:Fe,onDelete:ee.current?()=>{rt("")}:void 0,isExiting:Ee,lightMode:!c,style:At})})(),O&&l.jsx("div",{className:Be.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:Be.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),V&&l.jsx("div",{className:Be.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),H.map((ne,Te)=>l.jsx("div",{className:Be.guideLine,style:ne.axis==="x"?{position:"fixed",left:ne.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ne.pos-Ut,right:0,height:1},"data-feedback-toolbar":!0},`${ne.axis}-${ne.pos}-${Te}`))]})}function c6(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Be.fadeTop:""} ${i?Be.fadeBottom:""}`}var z="currentColor",Re="0.5";function u6({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:z,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:z,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:z,strokeWidth:Re})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:z,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:z,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:z,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:z,strokeWidth:Re,fill:z,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:z,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Re})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:z,strokeWidth:Re,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:z,strokeWidth:Re,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:z,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:z,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:z,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Re})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:z,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:z,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:z,strokeWidth:Re})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:z,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:z,opacity:".15",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:z,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:z,strokeWidth:Re})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:z,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:z,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:z,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:z,strokeWidth:Re})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:z,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:z,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:z,opacity:".2",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:z,strokeWidth:Re})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:z,strokeWidth:Re,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:z,opacity:".15",stroke:z,strokeWidth:Re})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:z,opacity:".2",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:z,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:z,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:z,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Re,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:z,strokeWidth:Re})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:z,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:z,strokeWidth:Re,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:z,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:z,strokeWidth:Re})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:z,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:z,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:z,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:z,opacity:".08",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:z,strokeWidth:Re,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:z,strokeWidth:Re,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:z,strokeWidth:Re,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:z,strokeWidth:Re,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:z,strokeWidth:Re,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:z,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:z,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:z,opacity:".2"})]});default:return null}}function d6({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Be.placeScroll} ${c||""}`,children:eb.map(d=>l.jsxs("div",{className:Be.paletteSection,children:[l.jsx("div",{className:Be.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Be.paletteItem} ${t===h.type?Be.active:""} ${u?Be.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Be.paletteItemIcon,children:l.jsx(u6,{type:h.type})}),l.jsx("span",{className:Be.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function f6({value:t,suffix:n}){const[i,a]=g.useState(null),[c,u]=g.useState(n),[d,h]=g.useState("up"),p=g.useRef(t),y=g.useRef(n),_=g.useRef(),x=i!==null&&c!==n;return g.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(_.current),_.current=Vt(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Be.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Be.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function h6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,M]=g.useState(!1),[E,O]=g.useState("exit"),[L,D]=g.useState(!1),[G,V]=g.useState(!0),q=g.useRef(0),H=g.useRef(""),J=g.useRef(0),ae=g.useRef(),oe=g.useRef(null),[Ee,Ve]=g.useState("");g.useEffect(()=>(u?(M(!0),clearTimeout(ae.current),cancelAnimationFrame(J.current),J.current=fl(()=>{J.current=fl(()=>{O("enter")})})):(cancelAnimationFrame(J.current),O("exit"),clearTimeout(ae.current),ae.current=Vt(()=>{M(!1),d==null||d()},200)),()=>cancelAnimationFrame(J.current)),[u]);const ee=h>0||a>0,fe=h+a;return fe>0&&(q.current=fe,H.current=_?fe===1?"Component":"Components":fe===1?"Change":"Changes"),g.useEffect(()=>{if(ee)L?V(!1):(V(!0),D(!0),fl(()=>{fl(()=>{V(!1)})}));else{V(!0);const I=Vt(()=>D(!1),300);return()=>clearTimeout(I)}},[ee]),g.useEffect(()=>{if(!j)return;const I=oe.current;if(!I)return;const se=()=>Ve(c6(I));se(),I.addEventListener("scroll",se,{passive:!0});const W=new ResizeObserver(se);return W.observe(I),()=>{I.removeEventListener("scroll",se),W.disconnect()}},[j]),j?l.jsxs("div",{className:`${Be.palette} ${Be[E]} ${i?"":Be.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation(),onTransitionEnd:I=>{I.target===I.currentTarget&&(u||(clearTimeout(ae.current),M(!1),O("exit"),d==null||d()))},children:[l.jsxs("div",{className:Be.paletteHeader,children:[l.jsx("div",{className:Be.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Be.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Be.canvasToggle} ${_?Be.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Be.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Be.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Be.wireframePurposeWrap} ${_?"":Be.collapsed}`,children:l.jsx("div",{className:Be.wireframePurposeInner,children:l.jsx("textarea",{className:Be.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:I=>w(I.target.value),rows:2})})}),l.jsx(d6,{activeType:t,onSelect:n,onDragStart:y,scrollRef:oe,fadeClass:Ee,blankCanvas:_}),L&&l.jsx("div",{className:`${Be.paletteFooterWrap} ${G?Be.footerHidden:""}`,children:l.jsx("div",{className:Be.paletteFooterInner,children:l.jsx("div",{className:Be.paletteFooterInnerContent,children:l.jsxs("div",{className:Be.paletteFooter,children:[l.jsx("span",{className:Be.paletteFooterCount,children:l.jsx(f6,{value:q.current,suffix:H.current})}),l.jsx("button",{className:Be.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function gl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Qo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=gl(i)}return null}function m6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=gl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,_;const n=m6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Qo(t,"svg");if(x){const b=gl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=gl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=gl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var tb=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),p6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),_6=new Set(["input","textarea","select"]),g6=new Set(["img","video","canvas","svg"]),y6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;p6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:_6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:g6.has(a)?c=["width","height","objectFit","borderRadius"]:y6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!tb.has(h)&&(i[u]=h)}return i}var x6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of x6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!tb.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function b6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=gl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var v6=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Wy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},w6=new Set(["script","style","noscript","link","meta"]),S6=40;function nb(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(Wy[n])return Wy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function sb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function ob(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function C6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(w6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<S6)return;const y=v6.has(d),_=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!_&&!x)return;const b=window.scrollY,w=nb(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:sb(c),textSnippet:ob(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function k6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=nb(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:sb(t),textSnippet:ob(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Fy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Xy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Gy=16,ed=5;function qy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const q of n)i.has(q.id)||b.push(q.currentRect);a&&b.push(...a);for(const q of b){const H=q.x,J=q.x+q.width,ae=q.x+q.width/2,oe=q.y,Ee=q.y+q.height,Ve=q.y+q.height/2;for(const ee of[d,h,p])for(const fe of[H,J,ae]){const I=fe-ee;Math.abs(I)<ed&&Math.abs(I)<Math.abs(c)&&(c=I)}for(const ee of[y,_,x])for(const fe of[oe,Ee,Ve]){const I=fe-ee;Math.abs(I)<ed&&Math.abs(I)<Math.abs(u)&&(u=I)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,j=[],M=new Set,E=d+w,O=h+w,L=p+w,D=y+S,G=_+S,V=x+S;for(const q of b){const H=q.x,J=q.x+q.width,ae=q.x+q.width/2,oe=q.y,Ee=q.y+q.height,Ve=q.y+q.height/2;for(const ee of[H,ae,J])for(const fe of[E,L,O])if(Math.abs(fe-ee)<.5){const I=`x:${Math.round(ee)}`;M.has(I)||(M.add(I),j.push({axis:"x",pos:ee}))}for(const ee of[oe,Ve,Ee])for(const fe of[D,V,G])if(Math.abs(fe-ee)<.5){const I=`y:${Math.round(ee)}`;M.has(I)||(M.add(I),j.push({axis:"y",pos:ee}))}}return{dx:w,dy:S,guides:j}}var j6=new Set(["script","style","noscript","link","meta","br","hr"]);function Ky(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(j6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Gy&&i.height>=Gy)return n;n=n.parentElement}return null}function M6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=g.useRef(t);w.current=t;const[S,j]=g.useState(new Set),[M,E]=g.useState(!1),O=g.useRef(x);g.useEffect(()=>{x!==void 0&&x!==O.current&&(O.current=x,b.length>0&&E(!0))},[x,b.length]);const L=g.useRef(p);g.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[D,G]=g.useState(null),[V,q]=g.useState(!1),H=g.useRef(!1),J=g.useCallback(P=>{const K=b.find(me=>me.id===P);K&&(H.current=!!K.note,G(P),q(!1))},[b]),ae=g.useCallback(()=>{D&&(q(!0),Vt(()=>{G(null),q(!1)},150))},[D]),oe=g.useCallback(P=>{D&&(n({...t,sections:b.map(K=>K.id===D?{...K,note:P.trim()||void 0}:K)}),ae())},[D,b,t,n,ae]);g.useEffect(()=>{a&&D&&ae()},[a]);const[Ee,Ve]=g.useState(new Set),ee=g.useRef(new Map),[fe,I]=g.useState(null),[se,W]=g.useState(null),[he,Me]=g.useState([]),[$,ue]=g.useState(0),X=g.useRef(null),de=g.useRef(new Set),be=g.useRef(new Map),[Ae,Ue]=g.useState(new Map),[Pe,at]=g.useState(new Map),Ot=g.useRef(new Set),Qt=g.useRef(new Map),Fe=g.useRef(h);Fe.current=h;const rt=g.useRef(y);rt.current=y;const Ut=g.useRef(_);Ut.current=_,g.useEffect(()=>{u&&j(new Set)},[u]);const[Je,St]=g.useState(()=>!t.sections.some(P=>{const K=P.originalRect,me=P.currentRect;return Math.abs(K.x-me.x)>1||Math.abs(K.y-me.y)>1||Math.abs(K.width-me.width)>1||Math.abs(K.height-me.height)>1}));g.useEffect(()=>{if(!Je){const P=Vt(()=>St(!0),380);return()=>clearTimeout(P)}},[]);const xe=g.useRef(new Set);g.useEffect(()=>{xe.current=new Set(b.map(P=>P.selector))},[b]),g.useEffect(()=>{const P=()=>ue(window.scrollY);return P(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[]),g.useEffect(()=>{const P=K=>{if(X.current){I(null);return}const me=document.elementFromPoint(K.clientX,K.clientY);if(!me){I(null);return}if(me.closest("[data-feedback-toolbar]")){I(null);return}if(me.closest("[data-design-placement]")){I(null);return}if(me.closest("[data-annotation-popup]")){I(null);return}const ke=Ky(me);if(!ke){I(null);return}for(const Ze of xe.current)try{const je=document.querySelector(Ze);if(je&&(je===ke||ke.contains(je))){I(null);return}}catch{}const nt=ke.getBoundingClientRect();I({x:nt.x,y:nt.y,w:nt.width,h:nt.height})};return document.addEventListener("mousemove",P,{passive:!0}),()=>document.removeEventListener("mousemove",P)},[b]),g.useEffect(()=>{const P=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=P}},[]),g.useEffect(()=>{const P=K=>{var je,bt,qe,Pt;if(X.current||K.button!==0)return;const me=K.target;if(!me||me.closest("[data-feedback-toolbar]")||me.closest("[data-design-placement]")||me.closest("[data-annotation-popup]"))return;const ke=Ky(me);let nt=!1;if(ke)for(const gt of xe.current)try{const tt=document.querySelector(gt);if(tt&&(tt===ke||ke.contains(tt))){nt=!0;break}}catch{}const Ze=!!(K.shiftKey||K.metaKey||K.ctrlKey);if(ke&&!nt){K.preventDefault(),K.stopPropagation();const gt=k6(ke),tt=[...b,gt],Bt=[...t.originalOrder,gt.id];n({...t,sections:tt,originalOrder:Bt});const $t=new Set([gt.id]);j($t),(je=Fe.current)==null||je.call(Fe,$t,Ze),I(null);const Zt=K.clientX,ct=K.clientY,lt={x:gt.currentRect.x,y:gt.currentRect.y};gt.originalRect;let Tt=!1,vt=0,en=0;X.current="move";const mt=cn=>{var fn;const Wt=cn.clientX-Zt,Ht=cn.clientY-ct;if(!Tt&&(Math.abs(Wt)>2||Math.abs(Ht)>2)&&(Tt=!0),!Tt)return;const ds={x:lt.x+Wt,y:lt.y+Ht,width:gt.currentRect.width,height:gt.currentRect.height},In=qy(ds,tt,new Set([gt.id]),d);Me(In.guides);const Mn=Wt+In.dx,An=Ht+In.dy;vt=Mn,en=An;const mn=document.querySelector(`[data-rearrange-section="${gt.id}"]`);mn&&(mn.style.transform=`translate(${Mn}px, ${An}px)`),Ue(new Map([[gt.id,{x:lt.x+Mn,y:lt.y+An,width:gt.currentRect.width,height:gt.currentRect.height}]])),(fn=rt.current)==null||fn.call(rt,Mn,An)},yt=()=>{var Wt;window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",yt),X.current=null,Me([]),Ue(new Map);const cn=document.querySelector(`[data-rearrange-section="${gt.id}"]`);cn&&(cn.style.transform=""),Tt&&n({...t,sections:tt.map(Ht=>Ht.id===gt.id?{...Ht,currentRect:{...Ht.currentRect,x:Math.max(0,lt.x+vt),y:Math.max(0,lt.y+en)}}:Ht),originalOrder:Bt}),(Wt=Ut.current)==null||Wt.call(Ut,vt,en,Tt)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",yt)}else if(nt&&ke){K.preventDefault();for(const gt of b)try{const tt=document.querySelector(gt.selector);if(tt&&tt===ke){const Bt=new Set([gt.id]);j(Bt),(bt=Fe.current)==null||bt.call(Fe,Bt,Ze);return}}catch{}Ze||(j(new Set),(qe=Fe.current)==null||qe.call(Fe,new Set,!1))}else Ze||(j(new Set),(Pt=Fe.current)==null||Pt.call(Fe,new Set,!1))};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[b,t,n]),g.useEffect(()=>{const P=K=>{const me=K.target;if(!(me.tagName==="INPUT"||me.tagName==="TEXTAREA"||me.isContentEditable)){if((K.key==="Backspace"||K.key==="Delete")&&S.size>0){K.preventDefault();const ke=new Set(S);Ve(nt=>{const Ze=new Set(nt);for(const je of ke)Ze.add(je);return Ze}),j(new Set),Vt(()=>{const nt=w.current;n({...nt,sections:nt.sections.filter(Ze=>!ke.has(Ze.id)),originalOrder:nt.originalOrder.filter(Ze=>!ke.has(Ze))}),Ve(Ze=>{const je=new Set(Ze);for(const bt of ke)je.delete(bt);return je})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(K.key)&&S.size>0){K.preventDefault();const ke=K.shiftKey?20:1,nt=K.key==="ArrowLeft"?-ke:K.key==="ArrowRight"?ke:0,Ze=K.key==="ArrowUp"?-ke:K.key==="ArrowDown"?ke:0;n({...t,sections:b.map(je=>S.has(je.id)?{...je,currentRect:{...je.currentRect,x:Math.max(0,je.currentRect.x+nt),y:Math.max(0,je.currentRect.y+Ze)}}:je)});return}K.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[S,b,t,n]);const ne=g.useCallback((P,K)=>{var Zt;if(P.button!==0)return;const me=P.target;if(me.closest(`.${Be.handle}`)||me.closest(`.${Be.deleteButton}`))return;P.preventDefault(),P.stopPropagation();let ke;P.shiftKey||P.metaKey||P.ctrlKey?(ke=new Set(S),ke.has(K)?ke.delete(K):ke.add(K)):S.has(K)?ke=new Set(S):ke=new Set([K]),j(ke),(ke.size!==S.size||[...ke].some(ct=>!S.has(ct)))&&((Zt=Fe.current)==null||Zt.call(Fe,ke,!!(P.shiftKey||P.metaKey||P.ctrlKey)));const Ze=P.clientX,je=P.clientY,bt=new Map;for(const ct of b)ke.has(ct.id)&&bt.set(ct.id,{x:ct.currentRect.x,y:ct.currentRect.y});X.current="move";let qe=!1,Pt=0,gt=0;const tt=new Map;for(const ct of b)if(ke.has(ct.id)){const lt=document.querySelector(`[data-rearrange-section="${ct.id}"]`);tt.set(ct.id,{outlineEl:lt,curW:ct.currentRect.width,curH:ct.currentRect.height})}const Bt=ct=>{var In;const lt=ct.clientX-Ze,Tt=ct.clientY-je;if(lt===0&&Tt===0)return;qe=!0;let vt=1/0,en=1/0,mt=-1/0,yt=-1/0;for(const[Mn,{curW:An,curH:mn}]of tt){const fn=bt.get(Mn);if(!fn)continue;const Yn=fn.x+lt,et=fn.y+Tt;vt=Math.min(vt,Yn),en=Math.min(en,et),mt=Math.max(mt,Yn+An),yt=Math.max(yt,et+mn)}const cn=qy({x:vt,y:en,width:mt-vt,height:yt-en},b,ke,d),Wt=lt+cn.dx,Ht=Tt+cn.dy;Pt=Wt,gt=Ht,Me(cn.guides);for(const[,{outlineEl:Mn}]of tt)Mn&&(Mn.style.transform=`translate(${Wt}px, ${Ht}px)`);const ds=new Map;for(const[Mn,{curW:An,curH:mn}]of tt){const fn=bt.get(Mn);if(fn){const Yn={x:Math.max(0,fn.x+Wt),y:Math.max(0,fn.y+Ht),width:An,height:mn};ds.set(Mn,Yn)}}Ue(ds),(In=rt.current)==null||In.call(rt,Wt,Ht)},$t=ct=>{var lt,Tt;window.removeEventListener("mousemove",Bt),window.removeEventListener("mouseup",$t),X.current=null,Me([]),Ue(new Map);for(const[,{outlineEl:vt}]of tt)vt&&(vt.style.transform="");if(qe){const vt=ct.clientX-Ze,en=ct.clientY-je;if(Math.abs(vt)<5&&Math.abs(en)<5)n({...t,sections:b.map(mt=>{const yt=bt.get(mt.id);return yt?{...mt,currentRect:{...mt.currentRect,x:yt.x,y:yt.y}}:mt})});else{n({...t,sections:b.map(mt=>{const yt=bt.get(mt.id);return yt?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,yt.x+Pt),y:Math.max(0,yt.y+gt)}}:mt})}),(lt=Ut.current)==null||lt.call(Ut,Pt,gt,!0);return}}(Tt=Ut.current)==null||Tt.call(Ut,0,0,!1)};window.addEventListener("mousemove",Bt),window.addEventListener("mouseup",$t)},[S,b,t,n]),Te=g.useCallback((P,K,me)=>{P.preventDefault(),P.stopPropagation();const ke=b.find(Bt=>Bt.id===K);if(!ke)return;j(new Set([K])),X.current="resize";const nt=P.clientX,Ze=P.clientY,je={...ke.currentRect};ke.originalRect;const bt=je.width/je.height;let qe={...je};const Pt=document.querySelector(`[data-rearrange-section="${K}"]`),gt=Bt=>{const $t=Bt.clientX-nt,Zt=Bt.clientY-Ze;let ct=je.x,lt=je.y,Tt=je.width,vt=je.height;if(me.includes("e")&&(Tt=Math.max(Ju,je.width+$t)),me.includes("w")&&(Tt=Math.max(Ju,je.width-$t),ct=je.x+je.width-Tt),me.includes("s")&&(vt=Math.max(Ju,je.height+Zt)),me.includes("n")&&(vt=Math.max(Ju,je.height-Zt),lt=je.y+je.height-vt),Bt.shiftKey)if(me.length===2){const mt=Math.abs(Tt-je.width),yt=Math.abs(vt-je.height);mt>yt?vt=Tt/bt:Tt=vt*bt,me.includes("w")&&(ct=je.x+je.width-Tt),me.includes("n")&&(lt=je.y+je.height-vt)}else me==="e"||me==="w"?vt=Tt/bt:Tt=vt*bt,me==="w"&&(ct=je.x+je.width-Tt),me==="n"&&(lt=je.y+je.height-vt);qe={x:ct,y:lt,width:Tt,height:vt},Pt&&(Pt.style.left=`${ct}px`,Pt.style.top=`${lt-$}px`,Pt.style.width=`${Tt}px`,Pt.style.height=`${vt}px`),W({x:Bt.clientX+12,y:Bt.clientY+12,text:`${Math.round(Tt)} × ${Math.round(vt)}`}),Ue(new Map([[K,qe]]))},tt=()=>{window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",tt),W(null),X.current=null,Ue(new Map),n({...t,sections:b.map(Bt=>Bt.id===K?{...Bt,currentRect:qe}:Bt)})};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",tt)},[b,t,n,$]),Ye=g.useCallback(P=>{Ve(K=>{const me=new Set(K);return me.add(P),me}),j(K=>{const me=new Set(K);return me.delete(P),me}),Vt(()=>{const K=w.current;n({...K,sections:K.sections.filter(me=>me.id!==P),originalOrder:K.originalOrder.filter(me=>me!==P)}),Ve(me=>{const ke=new Set(me);return ke.delete(P),ke})},180)},[n]),We=P=>{const K=P.originalRect,me=P.currentRect;return Math.abs(K.x-me.x)>1||Math.abs(K.y-me.y)>1||Math.abs(K.width-me.width)>1||Math.abs(K.height-me.height)>1},Xe=P=>{const K=P.originalRect,me=P.currentRect;return Math.abs(K.x-me.x)>1||Math.abs(K.y-me.y)>1},Ge=P=>{const K=P.originalRect,me=P.currentRect;return Math.abs(K.width-me.width)>1||Math.abs(K.height-me.height)>1};for(const P of b)be.current.has(P.id)||(Xe(P)?be.current.set(P.id,"move"):Ge(P)&&be.current.set(P.id,"resize"));for(const P of be.current.keys())b.some(K=>K.id===P)||be.current.delete(P);const ht=b.filter(P=>{try{if(Ee.has(P.id)||S.has(P.id))return!0;const K=document.querySelector(P.selector);if(!K)return!1;const me=K.getBoundingClientRect(),ke=P.originalRect;return Math.abs(me.width-ke.width)+Math.abs(me.height-ke.height)<200}catch{return!1}}),pt=ht.filter(P=>We(P)),At=ht.filter(P=>!We(P)),qt=new Set(pt.map(P=>P.id));for(const P of de.current)qt.has(P)||de.current.delete(P);const dt=[...qt].sort().join(",");for(const P of pt)Qt.current.set(P.id,{currentRect:P.currentRect,originalRect:P.originalRect,isFixed:P.isFixed});return g.useEffect(()=>{const P=Ot.current;Ot.current=qt;const K=new Map;for(const me of P)if(!qt.has(me)){if(!b.some(nt=>nt.id===me))continue;const ke=Qt.current.get(me);ke&&(K.set(me,{orig:ke.originalRect,target:ke.currentRect,isFixed:ke.isFixed}),Qt.current.delete(me))}if(K.size>0){at(ke=>{const nt=new Map(ke);for(const[Ze,je]of K)nt.set(Ze,je);return nt});const me=Vt(()=>{at(ke=>{const nt=new Map(ke);for(const Ze of K.keys())nt.delete(Ze);return nt})},250);return()=>clearTimeout(me)}},[dt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Be.rearrangeOverlay} ${i?"":Be.light} ${a?Be.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[fe&&l.jsx("div",{className:Be.hoverHighlight,style:{left:fe.x,top:fe.y,width:fe.w,height:fe.h}}),At.map(P=>{const K=P.currentRect,me=P.isFixed?K.y:K.y-$,ke=Fy,nt=S.has(P.id);return l.jsxs("div",{"data-rearrange-section":P.id,className:`${Be.sectionOutline} ${nt?Be.selected:""} ${M||a||Ee.has(P.id)?Be.exiting:""}`,style:{left:K.x,top:me,width:K.width,height:K.height,borderColor:ke.border,backgroundColor:ke.bg,...Je?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ze=>ne(Ze,P.id),onDoubleClick:()=>J(P.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:ke.pill},children:P.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${P.note?Be.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(K.width)," × ",Math.round(K.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Ze=>Ze.stopPropagation(),onClick:()=>Ye(P.id),children:"✕"}),Xy.map(Ze=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Ze.charAt(0).toUpperCase()}${Ze.slice(1)}`]}`,onMouseDown:je=>Te(je,P.id,Ze)},Ze))]},P.id)}),pt.map(P=>{const K=P.currentRect,me=P.isFixed?K.y:K.y-$,ke=S.has(P.id),nt=Xe(P),Ze=Ge(P);if(u&&!ke)return null;const bt=!de.current.has(P.id);return bt&&de.current.add(P.id),l.jsxs("div",{"data-rearrange-section":P.id,className:`${Be.ghostOutline} ${ke?Be.selected:""} ${M||a||Ee.has(P.id)?Be.exiting:""}`,style:{left:K.x,top:me,width:K.width,height:K.height,...Je?{}:{opacity:0,animation:"none",transition:"none"},...bt?{}:{animation:"none"}},onMouseDown:qe=>ne(qe,P.id),onDoubleClick:()=>J(P.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:Fy.pill},children:P.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${P.note?Be.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(K.width)," × ",Math.round(K.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:qe=>qe.stopPropagation(),onClick:()=>Ye(P.id),children:"✕"}),Xy.map(qe=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${qe.charAt(0).toUpperCase()}${qe.slice(1)}`]}`,onMouseDown:Pt=>Te(Pt,P.id,qe)},qe)),l.jsx("span",{className:Be.ghostBadge,children:(()=>{const qe=be.current.get(P.id);if(nt&&Ze){const[Pt,gt]=qe==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Pt," ",l.jsxs("span",{className:Be.ghostBadgeExtra,children:["& ",gt]})]})}return`Suggested ${Ze?"Resize":"Move"}`})()})]},P.id)})]}),!u&&(()=>{const P=[];for(const K of pt){const me=Ae.get(K.id);P.push({id:K.id,orig:K.originalRect,target:me||K.currentRect,isFixed:K.isFixed,isSelected:S.has(K.id),isExiting:Ee.has(K.id)})}for(const[K,me]of Ae)if(!P.some(ke=>ke.id===K)){const ke=b.find(nt=>nt.id===K);ke&&P.push({id:K,orig:ke.originalRect,target:me,isFixed:ke.isFixed,isSelected:S.has(K)})}for(const[K,me]of Pe)P.some(ke=>ke.id===K)||P.push({id:K,orig:me.orig,target:me.target,isFixed:me.isFixed,isSelected:!1,isExiting:!0});return P.length===0?null:l.jsxs("svg",{className:`${Be.connectorSvg} ${M||a?Be.connectorExiting:""}`,children:[P.map(({id:K,orig:me,target:ke,isFixed:nt,isSelected:Ze,isExiting:je})=>{const bt=me.x+me.width/2,qe=(nt?me.y:me.y-$)+me.height/2,Pt=ke.x+ke.width/2,gt=(nt?ke.y:ke.y-$)+ke.height/2,tt=Pt-bt,Bt=gt-qe,$t=Math.sqrt(tt*tt+Bt*Bt);if($t<2)return null;const Zt=Math.min(1,$t/40),ct=Math.min($t*.3,60),lt=$t>0?-Bt/$t:0,Tt=$t>0?tt/$t:0,vt=(bt+Pt)/2+lt*ct,en=(qe+gt)/2+Tt*ct,mt=Ae.has(K),yt=mt||Ze?1:.4,cn=mt||Ze?1:.5;return l.jsxs("g",{className:je?Be.connectorExiting:"",children:[l.jsx("path",{className:Be.connectorLine,d:`M ${bt} ${qe} Q ${vt} ${en} ${Pt} ${gt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:yt*Zt}),l.jsx("circle",{className:Be.connectorDot,cx:bt,cy:qe,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:cn*Zt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Be.connectorDot,cx:Pt,cy:gt,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:cn*Zt,filter:"url(#connDotShadow)"})]},`conn-${K}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var gt;const P=b.find(tt=>tt.id===D);if(!P)return null;const K=P.currentRect,me=P.isFixed?K.y:K.y-$,ke=K.x+K.width/2,nt=me-8,Ze=me+K.height+8,je=nt>200,bt=Ze<window.innerHeight-100,qe=Math.max(160,Math.min(window.innerWidth-160,ke));let Pt;return je?Pt={left:qe,bottom:window.innerHeight-nt}:bt?Pt={left:qe,top:Ze}:Pt={left:qe,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:P.label,placeholder:"Add a note about this section",initialValue:(gt=P.note)!=null?gt:"",submitLabel:H.current?"Save":"Set",onSubmit:oe,onCancel:ae,onDelete:H.current?()=>{oe("")}:void 0,isExiting:V,lightMode:!i,style:Pt})})(),se&&l.jsx("div",{className:Be.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),he.map((P,K)=>l.jsx("div",{className:Be.guideLine,style:P.axis==="x"?{position:"fixed",left:P.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:P.pos-$,width:"100vw",height:1}},`${P.axis}-${P.pos}-${K}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function E6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function T6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function A6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?T6(n):E6(),a=A6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,M=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const E=Math.round(a.top-S.bottom);(!c||E<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.top>=a.bottom-5){const E=Math.round(S.top-a.bottom);(!u||E<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(M&&S.right<=a.left+5){const E=Math.round(a.left-S.right);(!d||E<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(M&&S.left>=a.right-5){const E=Math.round(S.left-a.right);(!h||E<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}}const y=window.innerWidth,_=window.innerHeight,x=D6(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=N6(a,t,y,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function N6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(y){const _=[];t.left<y.left-2&&_.push("left"),t.right>y.right+2&&_.push("right"),t.top<y.top-2&&_.push("top"),t.bottom>y.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function D6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function ib(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function ab(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=ib(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function R6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(ib(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Qy=15;function Zy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function B6(t){var d;if(t.length<2)return[];const n=Zy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Zy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(y=x,_=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function rb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function L6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function lb(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,_=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function cb(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function O6(t){const n=L6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Jy(t,n,i,a="standard"){var M,E,O,L;if(t.length===0)return"";const c=[...t].sort((D,G)=>Math.abs(D.y-G.y)<20?D.x-G.x:D.y-G.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,G)=>{var q;const V=((q=qi[D.type])==null?void 0:q.label)||D.type;u+=`${G+1}. **${V}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=rb(n);u+=cb(d),u+=`### Components
`,c.forEach((D,G)=>{var Ee;const V=((Ee=qi[D.type])==null?void 0:Ee.label)||D.type,q={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${G+1}. **${V}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const H=Lm(q),ae=ab(H,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ve of ae)u+=`   - ${Ve}
`;const oe=lb(q,d);oe&&(u+=`   - CSS: ${oe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const G=h.find(V=>Math.abs(V.y-D.y)<30);G?G.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,G)=>D.y-G.y),h.forEach((D,G)=>{D.items.sort((q,H)=>q.x-H.x);const V=D.items.map(q=>{var H;return((H=qi[q.type])==null?void 0:H.label)||q.type});if(D.items.length===1){const H=D.items[0].width>n.width*.8;u+=`- Row ${G+1} (y≈${Math.round(D.y)}): ${V[0]}${H?" — full width":""}
`}else u+=`- Row ${G+1} (y≈${Math.round(D.y)}): ${V.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const G=c[D],V=c[D+1],q=((M=qi[G.type])==null?void 0:M.label)||G.type,H=((E=qi[V.type])==null?void 0:E.label)||V.type,J=Math.round(V.y-(G.y+G.height)),ae=Math.round(V.x-(G.x+G.width));Math.abs(G.y-V.y)<30?u+=`- ${q} → ${H}: \`${ae}px\` horizontal gap
`:u+=`- ${q} → ${H}: \`${J}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let G=D+1;G<c.length;G++){const V=c[D],q=c[G],H=((O=qi[V.type])==null?void 0:O.label)||V.type,J=((L=qi[q.type])==null?void 0:L.label)||q.type,ae=Math.round(q.y-(V.y+V.height)),oe=Math.round(q.x-(V.x+V.width));u+=`- ${H} ↔ ${J}: h=\`${oe}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,G)=>{var q;const V=((q=qi[D.type])==null?void 0:q.label)||D.type;u+=`${G}. ${V} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),y=c.some(D=>D.type==="hero"),_=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),w=c.filter(D=>D.type==="form"),S=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const D=c.find(G=>G.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function e1(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=rb({width:d,height:h});n!=="compact"&&(u+=cb(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const M=Lm(w,y("original")),E=Lm(S,y("current")),O=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${R6(M,{x:w.x,y:w.y},O)}
`;const L=b?{width:S.width,height:S.height}:void 0,D=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,G=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",q=ab(E,{includeLeftRight:n==="detailed"||n==="forensic"});if(q.length>0){u+=`  - Suggested position ${D}${G}: ${q[0]}
`;for(let J=1;J<q.length;J++)u+=`    ${q[J]}
`}else u+=`  - Suggested position ${D}${G}
`;const H=lb(S,p);H&&(u+=`  - CSS: ${H}
`)}const j=O6(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const M=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;M!==_.selector&&(u+=`  - Element: \`${M}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=B6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",ub=7;function Ed(t){return`${Om}${t}`}function tm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-ub*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function db(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function z6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-ub*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));db(t,a)}var mp="agentation-design-";function $6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function I6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function P6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-rearrange-";function H6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function V6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function U6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var _p="agentation-wireframe-";function Y6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${_p}${t}`);return n?JSON.parse(n):null}catch{return null}}function t1(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${_p}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${_p}${t}`)}catch{}}var fb="agentation-session-";function gp(t){return`${fb}${t}`}function W6(t){if(typeof window>"u")return null;try{return localStorage.getItem(gp(t))}catch{return null}}function nm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(gp(t),n)}catch{}}function F6(t){if(!(typeof window>"u"))try{localStorage.removeItem(gp(t))}catch{}}var hb=`${fb}toolbar-hidden`;function X6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(hb)==="1"}catch{return!1}}function G6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(hb,"1")}catch{}}async function sm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function n1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function s1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var $n={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},o1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),i1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],q6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function K6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=o1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...o1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...i1,...t.skipPatterns]:i1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:q6,filter:t==null?void 0:t.filter}}function Q6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Z6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function J6(t,n){const i=Q6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function eC(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&J6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,tC=new WeakMap;function om(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function nC(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&om(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&om(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(om(n))return ul=!0,!0}return ul=!1,!1}var uc={map:tC};function sC(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function oC(t){const n=sC(t);return n?t[n]:null}function wr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function iC(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===$n.HostComponent||n===$n.HostText||n===$n.HostHoistable||n===$n.HostSingleton||n===$n.Fragment||n===$n.Mode||n===$n.Profiler||n===$n.DehydratedFragment||n===$n.HostRoot||n===$n.HostPortal||n===$n.ScopeComponent||n===$n.OffscreenComponent||n===$n.LegacyHiddenComponent||n===$n.CacheComponent||n===$n.TracingMarkerComponent||n===$n.Throw||n===$n.ViewTransitionComponent||n===$n.ActivityComponent)return null;if(n===$n.ForwardRef){const u=a;if(u!=null&&u.render){const d=wr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===$n.MemoComponent||n===$n.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=wr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===$n.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===$n.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===$n.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?wr(u._result):null}return n===$n.SuspenseComponent||n===$n.SuspenseListComponent?null:n===$n.IncompleteClassComponent||n===$n.IncompleteFunctionComponent||n===$n.FunctionComponent||n===$n.ClassComponent||n===$n.IndeterminateComponent?wr(i):null}function aC(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function rC(t,n){const i=K6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!nC()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?Z6(t):void 0,u=[];try{let p=oC(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const _=iC(p);_&&!aC(_)&&eC(_,y,i,c)&&u.push(_),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function lC(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function cC(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function uC(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function dC(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function fC(){const t=Vv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function hC(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function mC(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function pC(t){const n=dC(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=fC();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=hC(d.stack);h&&(c={fileName:mC(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Ec(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function _C(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=pC(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=lC(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=cC(n);if(i||(i=uC(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=_C(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function gC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function yC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var xC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,bC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=xC}var Qe=bC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function a1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var vC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,wC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=vC}var Fs=wC;function r1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:M}){const E=(h||p)&&!y,O=E&&x==="delete",L=t.isMultiSelect,D=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",G=c?Fs.exit:u?Fs.clearing:d?"":Fs.enter,V=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Fs.marker} ${L?Fs.multiSelect:""} ${G} ${O?Fs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:O?void 0:D,animationDelay:V},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:q=>{q.stopPropagation(),c||j(t)},onContextMenu:M?q=>{x==="delete"&&(q.preventDefault(),q.stopPropagation(),c||M(t))}:void 0,children:[E?O?l.jsx(Zx,{size:L?18:16}):l.jsx(LS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Fs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Fs.markerTooltip} ${Fs.enter}`,style:b,children:[l.jsxs("span",{className:Fs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Fs.markerNote,children:t.comment})]})]})}function SC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Fs.marker} ${Fs.pending} ${i?Fs.multiSelect:""} ${a?Fs.exit:Fs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(SS,{size:12})})}function l1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Fs.marker} ${n?Fs.fixed:""} ${Fs.hovered} ${i?Fs.multiSelect:""} ${Fs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Zx,{size:i?12:10})})}var CC=`.styles-module__switchContainer___Ka-AB {
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
}`,kC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=CC}var im=kC,am=({className:t="",...n})=>l.jsxs("div",{className:`${im.switchContainer} ${t}`,children:[l.jsx("input",{className:im.switchInput,type:"checkbox",...n}),l.jsx("div",{className:im.switchThumb})]}),jC=`.styles-module__checkboxContainer___joqZk {
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
}`,MC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=jC}var sd=MC,EC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),TC=`.styles-module__container___w8eAF {
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
}`,AC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=TC}var c1=AC,u1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=g.useId();return l.jsxs("div",{className:`${c1.container} ${t}`,...u,children:[l.jsx(EC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:c1.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},NC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,DC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=NC}var Ct=DC;function RC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${y==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(RS,{size:20}):l.jsx(BS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const S=(fc.findIndex(j=>j.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===w.value?Ct.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(am,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(am,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===w.id?Ct.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(u1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(u1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${y==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(zS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(am,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function rm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=rC(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var d1=!1,lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},aa=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],BC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};BC();function Sr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function cm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:yC(t);if(i.found&&i.source)return gC(i.source,"path")}function LC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Us,xs,It,Dn,_n,pe,Ie;const[j,M]=g.useState(!1),[E,O]=g.useState([]),[L,D]=g.useState(!0),[G,V]=g.useState(()=>X6()),[q,H]=g.useState(!1),J=g.useRef(null);g.useEffect(()=>{const C=R=>{const B=J.current;B&&B.contains(R.target)&&R.stopPropagation()},T=["mousedown","click","pointerdown"];return T.forEach(R=>document.body.addEventListener(R,C)),()=>{T.forEach(R=>document.body.removeEventListener(R,C))}},[]);const[ae,oe]=g.useState(!1),[Ee,Ve]=g.useState(!1),[ee,fe]=g.useState(null),[I,se]=g.useState({x:0,y:0}),[W,he]=g.useState(null),[Me,$]=g.useState(!1),[ue,X]=g.useState("idle"),[de,be]=g.useState(!1),[Ae,Ue]=g.useState(!1),[Pe,at]=g.useState(null),[Ot,Qt]=g.useState(null),[Fe,rt]=g.useState([]),[Ut,Je]=g.useState(null),[St,xe]=g.useState(null),[ne,Te]=g.useState(null),[Ye,We]=g.useState(null),[Xe,Ge]=g.useState([]),[ht,pt]=g.useState(0),[At,qt]=g.useState(!1),[dt,P]=g.useState(!1),[K,me]=g.useState(!1),[ke,nt]=g.useState(!1),[Ze,je]=g.useState(!1),[bt,qe]=g.useState("main"),[Pt,gt]=g.useState(!1),[tt,Bt]=g.useState(!1),[$t,Zt]=g.useState(!1),[ct,lt]=g.useState([]),[Tt,vt]=g.useState(null),en=g.useRef(!1),[mt,yt]=g.useState(!1),[cn,Wt]=g.useState(!1),[Ht,ds]=g.useState(1),[In,Mn]=g.useState("new-page"),[An,mn]=g.useState(""),[fn,Yn]=g.useState(!1),[et,ss]=g.useState(null),Ho=g.useRef(!1),Vo=g.useRef({rearrange:null,placements:[]}),Xs=g.useRef({rearrange:null,placements:[]}),[Is,di]=g.useState(0),[Ts,Do]=g.useState(0),[bo,vo]=g.useState(0),[xn,vi]=g.useState(0),bn=g.useRef(new Set),gs=g.useRef(new Set),os=g.useRef(null),ks=g.useRef(),Uo=tt&&j&&!$t&&mt;g.useEffect(()=>{if(Uo){Wt(!1);const C=fl(()=>{Wt(!0)});return()=>cancelAnimationFrame(C)}else Wt(!1)},[Uo]);const fs=g.useRef(new Map),is=g.useRef(new Map),ys=g.useRef(),[un,Pn]=g.useState(!1),[pn,qn]=g.useState([]),fa=g.useRef(pn);fa.current=pn;const[Yo,fi]=g.useState(null),wo=g.useRef(null);g.useRef(!1),g.useRef([]),g.useRef(0),g.useRef(null),g.useRef(null),g.useRef(1);const[Wo,As]=g.useState(!1),hs=g.useRef(null),[Nn,Ns]=g.useState([]),On=g.useRef({cmd:!1,shift:!1}),as=()=>{gt(!0)},wi=()=>{gt(!1)},Fo=()=>{Wo||(hs.current=Vt(()=>As(!0),850))},Ji=()=>{hs.current&&(clearTimeout(hs.current),hs.current=null),As(!1),wi()};g.useEffect(()=>()=>{hs.current&&clearTimeout(hs.current)},[]);const[Gt,Gs]=g.useState(()=>{var C;try{const T=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...lm,...T,annotationColorId:vc.find(R=>R.id===T.annotationColorId)?T.annotationColorId:lm.annotationColorId}}catch{return lm}}),[Ps,Xo]=g.useState(!0),[Si,Go]=g.useState(!1),qs=()=>{var C;(C=J.current)==null||C.classList.add(Qe.disableTransitions),Xo(T=>!T),fl(()=>{var T;(T=J.current)==null||T.classList.remove(Qe.disableTransitions)})},Ci=!1,io="off",[kn,mo]=g.useState(x!=null?x:null),Hn=g.useRef(!1),[Ds,ao]=g.useState(_?"connecting":"disconnected"),[dn,Hs]=g.useState(null),[Vs,Rs]=g.useState(!1),[ms,Ro]=g.useState(null),Ks=g.useRef(!1),[So,po]=g.useState(new Set),[Bo,En]=g.useState(new Set),[Vn,Wn]=g.useState(!1),[Co,ro]=g.useState(!1),[Qs,ti]=g.useState(!1),_o=g.useRef(null),js=g.useRef(null),Bs=g.useRef(null),qo=g.useRef(null),ko=g.useRef(!1),go=g.useRef(0),Lo=g.useRef(null),Oo=g.useRef(null),ki=8,ea=50,Ii=g.useRef(null),lo=g.useRef(null),Zs=g.useRef(null),jt=typeof window<"u"?window.location.pathname:"/";g.useEffect(()=>{if(ke)je(!0);else{gt(!1),qe("main");const C=Vt(()=>je(!1),0);return()=>clearTimeout(C)}},[ke]);const zo=j&&L&&!tt;g.useEffect(()=>{if(zo){Ve(!1),oe(!0),po(new Set);const C=Vt(()=>{po(T=>{const R=new Set(T);return E.forEach(B=>R.add(B.id)),R})},350);return()=>clearTimeout(C)}else if(ae){Ve(!0);const C=Vt(()=>{oe(!1),Ve(!1)},250);return()=>clearTimeout(C)}},[zo]),g.useEffect(()=>{P(!0),pt(window.scrollY);const C=tm(jt);O(C.filter(Cr)),d1||(Go(!0),d1=!0,Vt(()=>Go(!1),750));try{const T=localStorage.getItem("feedback-toolbar-theme");T!==null&&Xo(T==="dark")}catch{}try{const T=localStorage.getItem("feedback-toolbar-position");if(T){const R=JSON.parse(T);typeof R.x=="number"&&typeof R.y=="number"&&Hs(R)}}catch{}},[jt]),g.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Gt))},[Gt,dt]),g.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-theme",Ps?"dark":"light")},[Ps,dt]);const co=g.useRef(!1);g.useEffect(()=>{const C=co.current;co.current=Vs,C&&!Vs&&dn&&dt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(dn))},[Vs,dn,dt]),g.useEffect(()=>{if(!_||!dt||Hn.current)return;Hn.current=!0,ao("connecting"),(async()=>{try{const T=W6(jt),R=x||T;let B=!1;if(R)try{const F=await n1(_,R);mo(F.id),ao("connected"),nm(jt,F.id),B=!0;const ie=tm(jt),De=new Set(F.annotations.map($e=>$e.id)),Ce=ie.filter($e=>!De.has($e.id));if(Ce.length>0){const ut=`${typeof window<"u"?window.location.origin:""}${jt}`,Mt=(await Promise.allSettled(Ce.map(xt=>cl(_,F.id,{...xt,sessionId:F.id,url:ut})))).map((xt,_t)=>xt.status==="fulfilled"?xt.value:(console.warn("[Agentation] Failed to sync annotation:",xt.reason),Ce[_t])),Lt=[...F.annotations,...Mt];O(Lt.filter(Cr)),cc(jt,Lt.filter(Cr),F.id)}else O(F.annotations.filter(Cr)),cc(jt,F.annotations.filter(Cr),F.id)}catch(F){console.warn("[Agentation] Could not join session, creating new:",F),F6(jt)}if(!B){const F=typeof window<"u"?window.location.href:"/",ie=await sm(_,F);mo(ie.id),ao("connected"),nm(jt,ie.id),b==null||b(ie.id);const De=z6(),Ce=typeof window<"u"?window.location.origin:"",$e=[];for(const[ut,ft]of De){const Mt=ft.filter(_t=>!_t._syncedTo);if(Mt.length===0)continue;const Lt=`${Ce}${ut}`,xt=ut===jt;$e.push((async()=>{try{const _t=xt?ie:await sm(_,Lt),vs=(await Promise.allSettled(Mt.map(jn=>cl(_,_t.id,{...jn,sessionId:_t.id,url:Lt})))).map((jn,Un)=>jn.status==="fulfilled"?jn.value:(console.warn("[Agentation] Failed to sync annotation:",jn.reason),Mt[Un])).filter(Cr);if(cc(ut,vs,_t.id),xt){const jn=new Set(Mt.map(Un=>Un.id));O(Un=>{const Xt=Un.filter(Kt=>!jn.has(Kt.id));return[...vs,...Xt]})}}catch(_t){console.warn(`[Agentation] Failed to sync annotations for ${ut}:`,_t)}})())}await Promise.allSettled($e)}}catch(T){ao("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",T)}})()},[_,x,dt,b,jt]),g.useEffect(()=>{if(!_||!dt)return;const C=async()=>{try{(await fetch(`${_}/health`)).ok?ao("connected"):ao("disconnected")}catch{ao("disconnected")}};C();const T=PS(C,1e4);return()=>clearInterval(T)},[_,dt]),g.useEffect(()=>{if(!_||!dt||!kn)return;const C=new EventSource(`${_}/sessions/${kn}/events`),T=["resolved","dismissed"],R=B=>{var F;try{const ie=JSON.parse(B.data);if(T.includes((F=ie.payload)==null?void 0:F.status)){const De=ie.payload.id,Ce=ie.payload.kind;if(Ce==="placement"){for(const[$e,ut]of fs.current)if(ut===De){fs.current.delete($e),lt(ft=>ft.filter(Mt=>Mt.id!==$e));break}}else if(Ce==="rearrange"){for(const[$e,ut]of is.current)if(ut===De){is.current.delete($e),ss(ft=>{if(!ft)return null;const Mt=ft.sections.filter(Lt=>Lt.id!==$e);return Mt.length===0?null:{...ft,sections:Mt}});break}}else En($e=>new Set($e).add(De)),Vt(()=>{O($e=>$e.filter(ut=>ut.id!==De)),En($e=>{const ut=new Set($e);return ut.delete(De),ut})},150)}}catch{}};return C.addEventListener("annotation.updated",R),()=>{C.removeEventListener("annotation.updated",R),C.close()}},[_,dt,kn]),g.useEffect(()=>{if(!_||!dt)return;const C=Oo.current==="disconnected",T=Ds==="connected";Oo.current=Ds,C&&T&&(async()=>{try{const B=tm(jt);if(B.length===0)return;const ie=`${typeof window<"u"?window.location.origin:""}${jt}`;let De=kn,Ce=[];if(De)try{Ce=(await n1(_,De)).annotations}catch{De=null}De||(De=(await sm(_,ie)).id,mo(De),nm(jt,De));const $e=new Set(Ce.map(ft=>ft.id)),ut=B.filter(ft=>!$e.has(ft.id));if(ut.length>0){const Mt=(await Promise.allSettled(ut.map(_t=>cl(_,De,{..._t,sessionId:De,url:ie})))).map((_t,Kn)=>_t.status==="fulfilled"?_t.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",_t.reason),ut[Kn])),xt=[...Ce,...Mt].filter(Cr);O(xt),cc(jt,xt,De)}}catch(B){console.warn("[Agentation] Failed to sync on reconnect:",B)}})()},[Ds,_,dt,kn,jt]);const ni=g.useCallback(()=>{q||(H(!0),nt(!1),M(!1),Vt(()=>{G6(!0),V(!0),H(!1)},400))},[q]);g.useEffect(()=>{if(!i||!dt||!t||t.length===0||E.length>0)return;const C=[];return C.push(Vt(()=>{M(!0)},n-200)),t.forEach((T,R)=>{const B=n+R*300;C.push(Vt(()=>{const F=document.querySelector(T.selector);if(!F)return;const ie=F.getBoundingClientRect(),{name:De,path:Ce}=_l(F),$e={id:`demo-${Date.now()}-${R}`,x:(ie.left+ie.width/2)/window.innerWidth*100,y:ie.top+ie.height/2+window.scrollY,comment:T.comment,element:De,elementPath:Ce,timestamp:Date.now(),selectedText:T.selectedText,boundingBox:{x:ie.left,y:ie.top+window.scrollY,width:ie.width,height:ie.height},nearbyText:rc(F),cssClasses:lc(F)};O(ut=>[...ut,$e])},B))}),()=>{C.forEach(clearTimeout)}},[i,dt,t,n]),g.useEffect(()=>{const C=()=>{pt(window.scrollY),qt(!0),Zs.current&&clearTimeout(Zs.current),Zs.current=Vt(()=>{qt(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),Zs.current&&clearTimeout(Zs.current)}},[]),g.useEffect(()=>{dt&&E.length>0?kn?cc(jt,E,kn):db(jt,E):dt&&E.length===0&&localStorage.removeItem(Ed(jt))},[E,jt,dt,kn]),g.useEffect(()=>{if(dt&&!en.current){en.current=!0;const C=$6(jt);C.length>0&&lt(C)}},[dt,jt]),g.useEffect(()=>{dt&&en.current&&!mt&&(ct.length>0?I6(jt,ct):P6(jt))},[ct,jt,dt,mt]),g.useEffect(()=>{if(dt&&!Ho.current){Ho.current=!0;const C=H6(jt);if(C){const T={...C,sections:C.sections.map(R=>{var B;return{...R,currentRect:(B=R.currentRect)!=null?B:{...R.originalRect}}})};ss(T)}}},[dt,jt]),g.useEffect(()=>{dt&&Ho.current&&!mt&&(et?V6(jt,et):U6(jt))},[et,jt,dt,mt]);const si=g.useRef(!1);g.useEffect(()=>{if(dt&&!si.current){si.current=!0;const C=Y6(jt);C&&(Xs.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&mn(C.purpose))}},[dt,jt]),g.useEffect(()=>{var T,R,B,F,ie;if(!dt||!si.current)return;const C=Xs.current;mt?((R=(T=et==null?void 0:et.sections)==null?void 0:T.length)!=null?R:0)>0||ct.length>0||An?t1(jt,{rearrange:et,placements:ct,purpose:An}):td(jt):((ie=(F=(B=C.rearrange)==null?void 0:B.sections)==null?void 0:F.length)!=null?ie:0)>0||C.placements.length>0||An?t1(jt,{rearrange:C.rearrange,placements:C.placements,purpose:An}):td(jt)},[et,ct,An,mt,jt,dt]),g.useEffect(()=>{tt&&!et&&ss({sections:[],originalOrder:[],detectedAt:Date.now()})},[tt,et]),g.useEffect(()=>{if(!_||!kn)return;const C=fs.current,T=new Set(ct.map(R=>R.id));for(const R of ct){if(C.has(R.id))continue;C.set(R.id,"");const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;cl(_,kn,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}×${R.height}px${R.text?` — "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:B,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then(F=>{C.has(R.id)&&C.set(R.id,F.id)}).catch(F=>{console.warn("[Agentation] Failed to sync placement annotation:",F),C.delete(R.id)})}for(const[R,B]of C)T.has(R)||(C.delete(R),B&&tr(_,B).catch(()=>{}))},[ct,_,kn,jt]),g.useEffect(()=>{if(!(!_||!kn))return ys.current&&clearTimeout(ys.current),ys.current=Vt(()=>{const C=is.current;if(!et||et.sections.length===0){for(const[,B]of C)B&&tr(_,B).catch(()=>{});C.clear();return}const T=new Set(et.sections.map(B=>B.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;for(const B of et.sections){const F=B.originalRect,ie=B.currentRect;if(!(Math.abs(F.x-ie.x)>1||Math.abs(F.y-ie.y)>1||Math.abs(F.width-ie.width)>1||Math.abs(F.height-ie.height)>1)){const $e=C.get(B.id);$e&&(C.delete(B.id),tr(_,$e).catch(()=>{}));continue}const Ce=C.get(B.id);Ce?s1(_,Ce,{comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(F.x)},${Math.round(F.y)}) ${Math.round(F.width)}×${Math.round(F.height)} to (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)}`}).catch($e=>{console.warn("[Agentation] Failed to update rearrange annotation:",$e)}):(C.set(B.id,""),cl(_,kn,{id:B.id,x:ie.x/window.innerWidth*100,y:ie.y,comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(F.x)},${Math.round(F.y)}) ${Math.round(F.width)}×${Math.round(F.height)} to (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)}`,element:B.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:B.selector,label:B.label,tagName:B.tagName,originalRect:F,currentRect:ie}}).then($e=>{C.has(B.id)&&C.set(B.id,$e.id)}).catch($e=>{console.warn("[Agentation] Failed to sync rearrange annotation:",$e),C.delete(B.id)}))}for(const[B,F]of C)T.has(B)||(C.delete(B),F&&tr(_,F).catch(()=>{}))},300),()=>{ys.current&&clearTimeout(ys.current)}},[et,_,kn,jt]);const Ms=g.useRef(new Map);g.useLayoutEffect(()=>{var R;const C=(R=et==null?void 0:et.sections)!=null?R:[],T=new Set;if((tt||$t)&&j)for(const B of C){T.add(B.id);try{const F=document.querySelector(B.selector);if(!F)continue;if(!Ms.current.has(B.id)){const ie={transform:F.style.transform,transformOrigin:F.style.transformOrigin,opacity:F.style.opacity,position:F.style.position,zIndex:F.style.zIndex,display:F.style.display},De=[];let Ce=F.parentElement;for(;Ce&&Ce!==document.body;){const ut=getComputedStyle(Ce);(ut.overflow!=="visible"||ut.overflowX!=="visible"||ut.overflowY!=="visible")&&(De.push({el:Ce,overflow:Ce.style.overflow}),Ce.style.overflow="visible"),Ce=Ce.parentElement}getComputedStyle(F).display==="inline"&&(F.style.display="inline-block"),Ms.current.set(B.id,{el:F,origStyles:ie,ancestors:De}),F.style.transformOrigin="top left",F.style.zIndex="9999"}}catch{}}for(const[B,F]of Ms.current)if(!T.has(B)){const{el:ie,origStyles:De,ancestors:Ce}=F;ie.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ie.style.transform=De.transform,ie.style.transformOrigin=De.transformOrigin,ie.style.opacity=De.opacity,ie.style.position=De.position,ie.style.zIndex=De.zIndex,Ms.current.delete(B),Vt(()=>{ie.style.transition="",ie.style.display=De.display;for(const $e of Ce)$e.el.style.overflow=$e.overflow},450)}},[et,tt,$t,j]),g.useEffect(()=>()=>{for(const[,C]of Ms.current){const{el:T,origStyles:R,ancestors:B}=C;T.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",T.style.transform=R.transform,T.style.transformOrigin=R.transformOrigin,T.style.opacity=R.opacity,T.style.position=R.position,T.style.zIndex=R.zIndex,Vt(()=>{T.style.transition="",T.style.display=R.display;for(const F of B)F.el.style.overflow=F.overflow},450)}Ms.current.clear()},[]);const yo=g.useCallback(()=>{Zt(!0),Bt(!1),vt(null),clearTimeout(ks.current),ks.current=Vt(()=>{Zt(!1)},300)},[]),k=g.useCallback(()=>{tt&&(Zt(!0),Bt(!1),vt(null),clearTimeout(ks.current),ks.current=Vt(()=>{Zt(!1)},300)),M(!1)},[tt]),U=g.useCallback(()=>{K||(VS(),me(!0))},[K]),ce=g.useCallback(()=>{K&&(Hy(),me(!1))},[K]),we=g.useCallback(()=>{K?ce():U()},[K,U,ce]),Ke=g.useCallback(()=>{if(Nn.length===0)return;const C=Nn[0],T=C.element,R=Nn.length>1,B=Nn.map(F=>F.element.getBoundingClientRect());if(R){const F={left:Math.min(...B.map(_t=>_t.left)),top:Math.min(...B.map(_t=>_t.top)),right:Math.max(...B.map(_t=>_t.right)),bottom:Math.max(...B.map(_t=>_t.bottom))},ie=Nn.slice(0,5).map(_t=>_t.name).join(", "),De=Nn.length>5?` +${Nn.length-5} more`:"",Ce=B.map(_t=>({x:_t.left,y:_t.top+window.scrollY,width:_t.width,height:_t.height})),ut=Nn[Nn.length-1].element,ft=B[B.length-1],Mt=ft.left+ft.width/2,Lt=ft.top+ft.height/2,xt=cm(ut);he({x:Mt/window.innerWidth*100,y:xt?Lt:Lt+window.scrollY,clientY:Lt,element:`${Nn.length} elements: ${ie}${De}`,elementPath:"multi-select",boundingBox:{x:F.left,y:F.top+window.scrollY,width:F.right-F.left,height:F.bottom-F.top},isMultiSelect:!0,isFixed:xt,elementBoundingBoxes:Ce,multiSelectElements:Nn.map(_t=>_t.element),targetElement:ut,fullPath:Zu(T),accessibility:Qu(T),computedStyles:Ku(T),computedStylesObj:qu(T),nearbyElements:Gu(T),cssClasses:lc(T),nearbyText:rc(T),sourceFile:od(T)})}else{const F=B[0],ie=cm(T);he({x:F.left/window.innerWidth*100,y:ie?F.top:F.top+window.scrollY,clientY:F.top,element:C.name,elementPath:C.path,boundingBox:{x:F.left,y:ie?F.top:F.top+window.scrollY,width:F.width,height:F.height},isFixed:ie,fullPath:Zu(T),accessibility:Qu(T),computedStyles:Ku(T),computedStylesObj:qu(T),nearbyElements:Gu(T),cssClasses:lc(T),nearbyText:rc(T),reactComponents:C.reactComponents,sourceFile:od(T)})}Ns([]),fe(null)},[Nn]);g.useEffect(()=>{j||(he(null),Te(null),We(null),Ge([]),fe(null),nt(!1),Ns([]),On.current={cmd:!1,shift:!1},K&&ce())},[j,K,ce]),g.useEffect(()=>()=>{Hy()},[]),g.useEffect(()=>{if(!j)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),T=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${T} {
        cursor: crosshair !important;
      }

      body :is(${C})${T} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{const B=document.getElementById("feedback-cursor-styles");B&&B.remove()}},[j]),g.useEffect(()=>{if(Yo!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Yo,j]),g.useEffect(()=>{if(!j||W||un||tt)return;const C=T=>{const R=T.composedPath()[0]||T.target;if(Qo(R,"[data-feedback-toolbar]")){fe(null);return}const B=Sr(T.clientX,T.clientY);if(!B||Qo(B,"[data-feedback-toolbar]")){fe(null);return}const{name:F,elementName:ie,path:De,reactComponents:Ce}=rm(B,io),$e=B.getBoundingClientRect();fe({element:F,elementName:ie,elementPath:De,rect:$e,reactComponents:Ce}),se({x:T.clientX,y:T.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[j,W,un,tt,io,pn]);const st=g.useCallback(C=>{var T;if(Te(C),at(null),Qt(null),rt([]),(T=C.elementBoundingBoxes)!=null&&T.length){const R=[];for(const B of C.elementBoundingBoxes){const F=B.x+B.width/2,ie=B.y+B.height/2-window.scrollY,De=Sr(F,ie);De&&R.push(De)}Ge(R),We(null)}else if(C.boundingBox){const R=C.boundingBox,B=R.x+R.width/2,F=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,ie=Sr(B,F);if(ie){const De=ie.getBoundingClientRect(),Ce=De.width/R.width,$e=De.height/R.height;Ce<.5||$e<.5?We(null):We(ie)}else We(null);Ge([])}else We(null),Ge([])},[]);g.useEffect(()=>{if(!j||un||tt)return;const C=T=>{var bs,vs;if(ko.current){ko.current=!1;return}const R=T.composedPath()[0]||T.target;if(Qo(R,"[data-feedback-toolbar]")||Qo(R,"[data-annotation-popup]")||Qo(R,"[data-annotation-marker]"))return;if(T.metaKey&&T.shiftKey&&!W&&!ne){T.preventDefault(),T.stopPropagation();const jn=Sr(T.clientX,T.clientY);if(!jn)return;const Un=jn.getBoundingClientRect(),{name:Xt,path:Kt,reactComponents:ws}=rm(jn,io),Tn=Nn.findIndex(uo=>uo.element===jn);Tn>=0?Ns(uo=>uo.filter(($o,ls)=>ls!==Tn)):Ns(uo=>[...uo,{element:jn,rect:Un,name:Xt,path:Kt,reactComponents:ws!=null?ws:void 0}]);return}const B=Qo(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(Gt.blockInteractions&&B&&(T.preventDefault(),T.stopPropagation()),W){if(B&&!Gt.blockInteractions)return;T.preventDefault(),(bs=Ii.current)==null||bs.shake();return}if(ne){if(B&&!Gt.blockInteractions)return;T.preventDefault(),(vs=lo.current)==null||vs.shake();return}T.preventDefault();const F=Sr(T.clientX,T.clientY);if(!F)return;const{name:ie,path:De,reactComponents:Ce}=rm(F,io),$e=F.getBoundingClientRect(),ut=T.clientX/window.innerWidth*100,ft=cm(F),Mt=ft?T.clientY:T.clientY+window.scrollY,Lt=window.getSelection();let xt;Lt&&Lt.toString().trim().length>0&&(xt=Lt.toString().trim().slice(0,500));const _t=qu(F),Kn=Ku(F);he({x:ut,y:Mt,clientY:T.clientY,element:ie,elementPath:De,selectedText:xt,boundingBox:{x:$e.left,y:ft?$e.top:$e.top+window.scrollY,width:$e.width,height:$e.height},nearbyText:rc(F),cssClasses:lc(F),isFixed:ft,fullPath:Zu(F),accessibility:Qu(F),computedStyles:Kn,computedStylesObj:_t,nearbyElements:Gu(F),reactComponents:Ce!=null?Ce:void 0,sourceFile:od(F),targetElement:F}),fe(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[j,un,tt,W,ne,Gt.blockInteractions,io,Nn]),g.useEffect(()=>{if(!j)return;const C=B=>{B.key==="Meta"&&(On.current.cmd=!0),B.key==="Shift"&&(On.current.shift=!0)},T=B=>{const F=On.current.cmd&&On.current.shift;B.key==="Meta"&&(On.current.cmd=!1),B.key==="Shift"&&(On.current.shift=!1);const ie=On.current.cmd&&On.current.shift;F&&!ie&&Nn.length>0&&Ke()},R=()=>{On.current={cmd:!1,shift:!1},Ns([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",T),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",T),window.removeEventListener("blur",R)}},[j,Nn,Ke]),g.useEffect(()=>{if(!j||W||un||tt)return;const C=T=>{const R=T.composedPath()[0]||T.target;Qo(R,"[data-feedback-toolbar]")||Qo(R,"[data-annotation-marker]")||Qo(R,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable||(T.preventDefault(),_o.current={x:T.clientX,y:T.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[j,W,un,tt]),g.useEffect(()=>{if(!j||W)return;const C=T=>{if(!_o.current)return;const R=T.clientX-_o.current.x,B=T.clientY-_o.current.y,F=R*R+B*B,ie=ki*ki;if(!Qs&&F>=ie&&(js.current=_o.current,ti(!0),T.preventDefault()),(Qs||F>=ie)&&js.current){if(Bs.current){const Xt=Math.min(js.current.x,T.clientX),Kt=Math.min(js.current.y,T.clientY),ws=Math.abs(T.clientX-js.current.x),Tn=Math.abs(T.clientY-js.current.y);Bs.current.style.transform=`translate(${Xt}px, ${Kt}px)`,Bs.current.style.width=`${ws}px`,Bs.current.style.height=`${Tn}px`}const De=Date.now();if(De-go.current<ea)return;go.current=De;const Ce=js.current.x,$e=js.current.y,ut=Math.min(Ce,T.clientX),ft=Math.min($e,T.clientY),Mt=Math.max(Ce,T.clientX),Lt=Math.max($e,T.clientY),xt=(ut+Mt)/2,_t=(ft+Lt)/2,Kn=new Set,bs=[[ut,ft],[Mt,ft],[ut,Lt],[Mt,Lt],[xt,_t],[xt,ft],[xt,Lt],[ut,_t],[Mt,_t]];for(const[Xt,Kt]of bs){const ws=document.elementsFromPoint(Xt,Kt);for(const Tn of ws)Tn instanceof HTMLElement&&Kn.add(Tn)}const vs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Xt of vs)if(Xt instanceof HTMLElement){const Kt=Xt.getBoundingClientRect(),ws=Kt.left+Kt.width/2,Tn=Kt.top+Kt.height/2,uo=ws>=ut&&ws<=Mt&&Tn>=ft&&Tn<=Lt,$o=Math.min(Kt.right,Mt)-Math.max(Kt.left,ut),ls=Math.min(Kt.bottom,Lt)-Math.max(Kt.top,ft),ji=$o>0&&ls>0?$o*ls:0,Pi=Kt.width*Kt.height,Hi=Pi>0?ji/Pi:0;(uo||Hi>.5)&&Kn.add(Xt)}const jn=[],Un=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Xt of Kn){if(Qo(Xt,"[data-feedback-toolbar]")||Qo(Xt,"[data-annotation-marker]"))continue;const Kt=Xt.getBoundingClientRect();if(!(Kt.width>window.innerWidth*.8&&Kt.height>window.innerHeight*.5)&&!(Kt.width<10||Kt.height<10)&&Kt.left<Mt&&Kt.right>ut&&Kt.top<Lt&&Kt.bottom>ft){const ws=Xt.tagName;let Tn=Un.has(ws);if(!Tn&&(ws==="DIV"||ws==="SPAN")){const uo=Xt.textContent&&Xt.textContent.trim().length>0,$o=Xt.onclick!==null||Xt.getAttribute("role")==="button"||Xt.getAttribute("role")==="link"||Xt.classList.contains("clickable")||Xt.hasAttribute("data-clickable");(uo||$o)&&!Xt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let uo=!1;for(const $o of jn)if($o.left<=Kt.left&&$o.right>=Kt.right&&$o.top<=Kt.top&&$o.bottom>=Kt.bottom){uo=!0;break}uo||jn.push(Kt)}}}if(qo.current){const Xt=qo.current;for(;Xt.children.length>jn.length;)Xt.removeChild(Xt.lastChild);jn.forEach((Kt,ws)=>{let Tn=Xt.children[ws];Tn||(Tn=document.createElement("div"),Tn.className=Qe.selectedElementHighlight,Xt.appendChild(Tn)),Tn.style.transform=`translate(${Kt.left}px, ${Kt.top}px)`,Tn.style.width=`${Kt.width}px`,Tn.style.height=`${Kt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[j,W,Qs,ki]),g.useEffect(()=>{if(!j)return;const C=T=>{const R=Qs,B=js.current;if(Qs&&B){ko.current=!0;const F=Math.min(B.x,T.clientX),ie=Math.min(B.y,T.clientY),De=Math.max(B.x,T.clientX),Ce=Math.max(B.y,T.clientY),$e=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(xt=>{if(!(xt instanceof HTMLElement)||Qo(xt,"[data-feedback-toolbar]")||Qo(xt,"[data-annotation-marker]"))return;const _t=xt.getBoundingClientRect();_t.width>window.innerWidth*.8&&_t.height>window.innerHeight*.5||_t.width<10||_t.height<10||_t.left<De&&_t.right>F&&_t.top<Ce&&_t.bottom>ie&&$e.push({element:xt,rect:_t})});const ft=$e.filter(({element:xt})=>!$e.some(({element:_t})=>_t!==xt&&xt.contains(_t))),Mt=T.clientX/window.innerWidth*100,Lt=T.clientY+window.scrollY;if(ft.length>0){const xt=ft.reduce((Un,{rect:Xt})=>({left:Math.min(Un.left,Xt.left),top:Math.min(Un.top,Xt.top),right:Math.max(Un.right,Xt.right),bottom:Math.max(Un.bottom,Xt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),_t=ft.slice(0,5).map(({element:Un})=>_l(Un).name).join(", "),Kn=ft.length>5?` +${ft.length-5} more`:"",bs=ft[0].element,vs=qu(bs),jn=Ku(bs);he({x:Mt,y:Lt,clientY:T.clientY,element:`${ft.length} elements: ${_t}${Kn}`,elementPath:"multi-select",boundingBox:{x:xt.left,y:xt.top+window.scrollY,width:xt.right-xt.left,height:xt.bottom-xt.top},isMultiSelect:!0,fullPath:Zu(bs),accessibility:Qu(bs),computedStyles:jn,computedStylesObj:vs,nearbyElements:Gu(bs),cssClasses:lc(bs),nearbyText:rc(bs),sourceFile:od(bs)})}else{const xt=Math.abs(De-F),_t=Math.abs(Ce-ie);xt>20&&_t>20&&he({x:Mt,y:Lt,clientY:T.clientY,element:"Area selection",elementPath:`region at (${Math.round(F)}, ${Math.round(ie)})`,boundingBox:{x:F,y:ie+window.scrollY,width:xt,height:_t},isMultiSelect:!0})}fe(null)}else R&&(ko.current=!0);_o.current=null,js.current=null,ti(!1),qo.current&&(qo.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[j,Qs]);const Rt=g.useCallback(async(C,T,R)=>{const B=Gt.webhookUrl||w;if(!B||!Gt.webhooksEnabled&&!R)return!1;try{return(await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...T})})).ok}catch(F){return console.warn("[Agentation] Webhook failed:",F),!1}},[w,Gt.webhookUrl,Gt.webhooksEnabled]),Ft=g.useCallback(C=>{var R;if(!W)return;const T={id:Date.now().toString(),x:W.x,y:W.y,comment:C,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,..._&&kn?{sessionId:kn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};O(B=>[...B,T]),Lo.current=T.id,Vt(()=>{Lo.current=null},300),Vt(()=>{po(B=>new Set(B).add(T.id))},250),a==null||a(T),Rt("annotation.add",{annotation:T}),Wn(!0),Vt(()=>{he(null),Wn(!1)},150),(R=window.getSelection())==null||R.removeAllRanges(),_&&kn&&cl(_,kn,T).then(B=>{B.id!==T.id&&(O(F=>F.map(ie=>ie.id===T.id?{...ie,id:B.id}:ie)),po(F=>{const ie=new Set(F);return ie.delete(T.id),ie.add(B.id),ie}))}).catch(B=>{console.warn("[Agentation] Failed to sync annotation:",B)})},[W,a,Rt,_,kn]),tn=g.useCallback(()=>{Wn(!0),Vt(()=>{he(null),Wn(!1)},150)},[]),rn=g.useCallback(C=>{const T=E.findIndex(B=>B.id===C),R=E[T];(ne==null?void 0:ne.id)===C&&(ro(!0),Vt(()=>{Te(null),We(null),Ge([]),ro(!1)},150)),Je(C),En(B=>new Set(B).add(C)),R&&(c==null||c(R),Rt("annotation.delete",{annotation:R})),_&&tr(_,C).catch(B=>{console.warn("[Agentation] Failed to delete annotation from server:",B)}),Vt(()=>{O(B=>B.filter(F=>F.id!==C)),En(B=>{const F=new Set(B);return F.delete(C),F}),Je(null),T<E.length-1&&(xe(T),Vt(()=>xe(null),200))},150)},[E,ne,c,Rt,_]),on=g.useCallback(C=>{var T;if(!C){at(null),Qt(null),rt([]);return}if(at(C.id),(T=C.elementBoundingBoxes)!=null&&T.length){const R=[];for(const B of C.elementBoundingBoxes){const F=B.x+B.width/2,ie=B.y+B.height/2-window.scrollY,Ce=document.elementsFromPoint(F,ie).find($e=>!$e.closest("[data-annotation-marker]")&&!$e.closest("[data-agentation-root]"));Ce&&R.push(Ce)}rt(R),Qt(null)}else if(C.boundingBox){const R=C.boundingBox,B=R.x+R.width/2,F=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,ie=Sr(B,F);if(ie){const De=ie.getBoundingClientRect(),Ce=De.width/R.width,$e=De.height/R.height;Ce<.5||$e<.5?Qt(null):Qt(ie)}else Qt(null);rt([])}else Qt(null),rt([])},[]),vn=g.useCallback(C=>{if(!ne)return;const T={...ne,comment:C};O(R=>R.map(B=>B.id===ne.id?T:B)),u==null||u(T),Rt("annotation.update",{annotation:T}),_&&s1(_,ne.id,{comment:C}).catch(R=>{console.warn("[Agentation] Failed to update annotation on server:",R)}),ro(!0),Vt(()=>{Te(null),We(null),Ge([]),ro(!1)},150)},[ne,u,Rt,_]),N=g.useCallback(()=>{ro(!0),Vt(()=>{Te(null),We(null),Ge([]),ro(!1)},150)},[]),Y=g.useCallback(()=>{const C=E.length,T=ct.length>0||!!et;if(C===0&&pn.length===0&&!T)return;if(d==null||d(E),Rt("annotations.clear",{annotations:E}),_){Promise.all(E.map(F=>tr(_,F.id).catch(ie=>{console.warn("[Agentation] Failed to delete annotation from server:",ie)})));for(const[,F]of fs.current)F&&tr(_,F).catch(()=>{});fs.current.clear();for(const[,F]of is.current)F&&tr(_,F).catch(()=>{});is.current.clear()}Ue(!0),be(!0),qn([]);const R=wo.current;if(R){const F=R.getContext("2d");F&&F.clearRect(0,0,R.width,R.height)}(ct.length>0||et)&&(vo(F=>F+1),vi(F=>F+1),Vt(()=>{lt([]),ss(null)},200)),mt&&yt(!1),An&&mn(""),Xs.current={rearrange:null,placements:[]},td(jt);const B=C*30+200;Vt(()=>{O([]),po(new Set),localStorage.removeItem(Ed(jt)),Ue(!1)},B),Vt(()=>be(!1),1500)},[jt,E,pn,ct,et,mt,An,d,Rt,_]),Z=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt,T=tt&&mt;let R;if(T){if(ct.length===0&&!et&&!An)return;R=""}else{if(R=a1(E,C,Gt.outputDetail),!R&&pn.length===0&&ct.length===0&&!et)return;R||(R=`## Page Feedback: ${C}
`)}if(!T&&pn.length>0){const B=new Set;for(const Ce of E)Ce.drawingIndex!=null&&B.add(Ce.drawingIndex);const F=wo.current;F&&(F.style.visibility="hidden");const ie=[],De=window.scrollY;for(let Ce=0;Ce<pn.length;Ce++){if(B.has(Ce))continue;const $e=pn[Ce];if($e.points.length<2)continue;const ut=$e.fixed?$e.points:$e.points.map(Qn=>({x:Qn.x,y:Qn.y-De}));let ft=1/0,Mt=1/0,Lt=-1/0,xt=-1/0;for(const Qn of ut)ft=Math.min(ft,Qn.x),Mt=Math.min(Mt,Qn.y),Lt=Math.max(Lt,Qn.x),xt=Math.max(xt,Qn.y);const _t=Lt-ft,Kn=xt-Mt,bs=Math.hypot(_t,Kn),vs=ut[0],jn=ut[ut.length-1],Un=Math.hypot(jn.x-vs.x,jn.y-vs.y);let Xt;const Kt=Un<bs*.35,ws=_t/Math.max(Kn,1);if(Kt&&bs>20){const Qn=Math.max(_t,Kn)*.15;let Vi=0;for(const ta of ut){const Pc=ta.x-ft<Qn,Wd=Lt-ta.x<Qn,Fd=ta.y-Mt<Qn,Xd=xt-ta.y<Qn;(Pc||Wd)&&(Fd||Xd)&&Vi++}Xt=Vi>ut.length*.15?"box":"circle"}else ws>3&&Kn<40?Xt="underline":Un>bs*.5?Xt="arrow":Xt="drawing";const Tn=Math.min(10,ut.length),uo=Math.max(1,Math.floor(ut.length/Tn)),$o=new Set,ls=[],ji=[vs];for(let Qn=uo;Qn<ut.length-1;Qn+=uo)ji.push(ut[Qn]);ji.push(jn);for(const Qn of ji){const Vi=Sr(Qn.x,Qn.y);if(!Vi||$o.has(Vi)||Qo(Vi,"[data-feedback-toolbar]"))continue;$o.add(Vi);const{name:ta}=_l(Vi);ls.includes(ta)||ls.push(ta)}const Pi=`${Math.round(ft)},${Math.round(Mt)} → ${Math.round(Lt)},${Math.round(xt)}`;let Hi;(Xt==="circle"||Xt==="box")&&ls.length>0?Hi=`${Xt==="box"?"Boxed":"Circled"} **${ls[0]}**${ls.length>1?` (and ${ls.slice(1).join(", ")})`:""} (region: ${Pi})`:Xt==="underline"&&ls.length>0?Hi=`Underlined **${ls[0]}** (${Pi})`:Xt==="arrow"&&ls.length>=2?Hi=`Arrow from **${ls[0]}** to **${ls[ls.length-1]}** (${Math.round(vs.x)},${Math.round(vs.y)} → ${Math.round(jn.x)},${Math.round(jn.y)})`:ls.length>0?Hi=`${Xt==="arrow"?"Arrow":"Drawing"} near **${ls.join("**, **")}** (region: ${Pi})`:Hi=`Drawing at ${Pi}`,ie.push(Hi)}F&&(F.style.visibility=""),ie.length>0&&(R+=`
**Drawings:**
`,ie.forEach((Ce,$e)=>{R+=`${$e+1}. ${Ce}
`}))}if((ct.length>0||T&&An)&&(R+=`
`+Jy(ct,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:An||void 0},Gt.outputDetail)),et){const B=e1(et,Gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(R+=`
`+B)}if(y)try{await navigator.clipboard.writeText(R)}catch{}h==null||h(R),$(!0),Vt(()=>$(!1),2e3),Gt.autoClearAfterCopy&&Vt(()=>Y(),500)},[E,pn,ct,et,mt,tt,In,An,jt,Gt.outputDetail,io,Gt.autoClearAfterCopy,Y,y,h]),re=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;let T=a1(E,C,Gt.outputDetail);if(!T&&ct.length===0&&!et)return;if(T||(T=`## Page Feedback: ${C}
`),ct.length>0&&(T+=`
`+Jy(ct,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:An||void 0},Gt.outputDetail)),et){const B=e1(et,Gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(T+=`
`+B)}p&&p(T,E),X("sending"),await new Promise(B=>Vt(B,150));const R=await Rt("submit",{output:T,annotations:E},!0);X(R?"sent":"failed"),Vt(()=>X("idle"),2500),R&&Gt.autoClearAfterCopy&&Vt(()=>Y(),500)},[p,Rt,E,ct,et,mt,In,jt,Gt.outputDetail,io,Gt.autoClearAfterCopy,Y]);g.useEffect(()=>{if(!ms)return;const C=10,T=B=>{const F=B.clientX-ms.x,ie=B.clientY-ms.y,De=Math.sqrt(F*F+ie*ie);if(!Vs&&De>C&&Rs(!0),Vs||De>C){let Ce=ms.toolbarX+F,$e=ms.toolbarY+ie;const ut=20,ft=337,Mt=44,xt=ft-(j?Ds==="connected"?297:257:44),_t=ut-xt,Kn=window.innerWidth-ut-ft;Ce=Math.max(_t,Math.min(Kn,Ce)),$e=Math.max(ut,Math.min(window.innerHeight-Mt-ut,$e)),Hs({x:Ce,y:$e})}},R=()=>{Vs&&(Ks.current=!0),Rs(!1),Ro(null)};return document.addEventListener("mousemove",T),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",R)}},[ms,Vs,j,Ds]);const Le=g.useCallback(C=>{var ie,De;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const T=C.currentTarget.parentElement;if(!T)return;const R=T.getBoundingClientRect(),B=(ie=dn==null?void 0:dn.x)!=null?ie:R.left,F=(De=dn==null?void 0:dn.y)!=null?De:R.top;Ro({x:C.clientX,y:C.clientY,toolbarX:B,toolbarY:F})},[dn]);if(g.useEffect(()=>{if(!dn)return;const C=()=>{let F=dn.x,ie=dn.y;const $e=20-(337-(j?Ds==="connected"?297:257:44)),ut=window.innerWidth-20-337;F=Math.max($e,Math.min(ut,F)),ie=Math.max(20,Math.min(window.innerHeight-44-20,ie)),(F!==dn.x||ie!==dn.y)&&Hs({x:F,y:ie})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[dn,j,Ds]),g.useEffect(()=>{const C=T=>{const R=T.target,B=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(T.key==="Escape"){if(tt){Tt?vt(null):yo();return}if(un){Pn(!1);return}if(Nn.length>0){Ns([]);return}W||j&&(as(),M(!1))}if((T.metaKey||T.ctrlKey)&&T.shiftKey&&(T.key==="f"||T.key==="F")){T.preventDefault(),as(),j?k():M(!0);return}if(!(B||T.metaKey||T.ctrlKey)&&((T.key==="p"||T.key==="P")&&(T.preventDefault(),as(),we()),(T.key==="l"||T.key==="L")&&(T.preventDefault(),as(),un&&Pn(!1),ke&&nt(!1),W&&tn(),tt?yo():Bt(!0)),(T.key==="h"||T.key==="H")&&E.length>0&&(T.preventDefault(),as(),D(F=>!F)),(T.key==="c"||T.key==="C")&&(E.length>0||ct.length>0||et)&&(T.preventDefault(),as(),Z()),(T.key==="x"||T.key==="X")&&(E.length>0||ct.length>0||et)&&(T.preventDefault(),as(),Y(),ct.length>0&&lt([]),et&&ss(null)),T.key==="s"||T.key==="S")){const F=aa(Gt.webhookUrl)||aa(w||"");E.length>0&&F&&ue==="idle"&&(T.preventDefault(),as(),re())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[j,un,tt,Tt,ct,et,W,E.length,Gt.webhookUrl,w,ue,re,we,Z,Y,Nn]),!dt||G)return null;const ot=E.length>0,it=E.filter(C=>!Bo.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Nt=it.length>0,Jt=E.filter(C=>Bo.has(C.id)),rs=C=>{const ie=C.x/100*window.innerWidth,De=typeof C.y=="string"?parseFloat(C.y):C.y,Ce={};window.innerHeight-De-22-10<80&&(Ce.top="auto",Ce.bottom="calc(100% + 10px)");const ut=ie-200/2,ft=10;if(ut<ft){const Mt=ft-ut;Ce.left=`calc(50% + ${Mt}px)`}else if(ut+200>window.innerWidth-ft){const Mt=ut+200-(window.innerWidth-ft);Ce.left=`calc(50% - ${Mt}px)`}return Ce};return Bc.createPortal(l.jsxs("div",{ref:J,style:{display:"contents"},"data-agentation-theme":Ps?"dark":"light","data-agentation-accent":Gt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Qe.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:dn?{left:dn.x,top:dn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Qe.toolbarContainer} ${j?Qe.expanded:Qe.collapsed} ${Si?Qe.entrance:""} ${q?Qe.hiding:""} ${!Gt.webhooksEnabled&&(aa(Gt.webhookUrl)||aa(w||""))?Qe.serverConnected:""}`,onClick:j?void 0:C=>{if(Ks.current){Ks.current=!1,C.preventDefault();return}M(!0)},onMouseDown:Le,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Qe.toggleContent} ${j?Qe.hidden:Qe.visible}`,children:[l.jsx(CS,{size:24}),Nt&&l.jsx("span",{className:`${Qe.badge} ${j?Qe.fadeOut:""} ${Si?Qe.entrance:""}`,children:it.length})]}),l.jsxs("div",{className:`${Qe.controlsContent} ${j?Qe.visible:Qe.hidden} ${dn&&dn.y<100?Qe.tooltipBelow:""} ${Pt||ke?Qe.tooltipsHidden:""} ${Wo?Qe.tooltipsInSession:""}`,onMouseEnter:Fo,onMouseLeave:Ji,children:[l.jsxs("div",{className:`${Qe.buttonWrapper} ${dn&&dn.x<120?Qe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:C=>{C.stopPropagation(),as(),we()},"data-active":K,children:l.jsx(TS,{size:24,isPaused:K})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[K?"Resume animations":"Pause animations",l.jsx("span",{className:Qe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${Ps?"":Qe.light}`,onClick:C=>{C.stopPropagation(),as(),un&&Pn(!1),ke&&nt(!1),W&&tn(),tt?yo():Bt(!0)},"data-active":tt,style:tt&&mt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx($S,{size:21})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[tt?"Exit layout mode":"Layout mode",l.jsx("span",{className:Qe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:C=>{C.stopPropagation(),as(),D(!L)},disabled:!ot||tt,children:l.jsx(ES,{size:24,isOpen:L})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Qe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${Me?Qe.statusShowing:""}`,onClick:C=>{C.stopPropagation(),as(),Z()},disabled:tt&&mt?ct.length===0&&!((Us=et==null?void 0:et.sections)!=null&&Us.length):!ot&&pn.length===0&&ct.length===0&&!((xs=et==null?void 0:et.sections)!=null&&xs.length),"data-active":Me,children:l.jsx(jS,{size:24,copied:Me,tint:tt&&mt&&(ct.length>0||(It=et==null?void 0:et.sections)!=null&&It.length)?"#f97316":void 0})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[tt&&mt?"Copy layout":"Copy feedback",l.jsx("span",{className:Qe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${Qe.sendButtonWrapper} ${j&&!Gt.webhooksEnabled&&(aa(Gt.webhookUrl)||aa(w||""))?Qe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Qe.controlButton} ${ue==="sent"||ue==="failed"?Qe.statusShowing:""}`,onClick:C=>{C.stopPropagation(),as(),re()},disabled:!ot||!aa(Gt.webhookUrl)&&!aa(w||"")||ue==="sending","data-no-hover":ue==="sent"||ue==="failed",tabIndex:aa(Gt.webhookUrl)||aa(w||"")?0:-1,children:[l.jsx(MS,{size:24,state:ue}),ot&&ue==="idle"&&l.jsx("span",{className:Qe.buttonBadge,children:E.length})]}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Qe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:C=>{C.stopPropagation(),as(),Y()},disabled:!ot&&pn.length===0&&ct.length===0&&!((Dn=et==null?void 0:et.sections)!=null&&Dn.length),"data-danger":!0,children:l.jsx(NS,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Qe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:C=>{C.stopPropagation(),as(),tt&&yo(),nt(!ke)},children:l.jsx(AS,{size:24})}),_&&Ds!=="disconnected"&&l.jsx("span",{className:`${Qe.mcpIndicator} ${Qe[Ds]} ${ke?Qe.hidden:""}`,title:Ds==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Qe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Qe.divider}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${dn&&typeof window<"u"&&dn.x>window.innerWidth-120?Qe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:C=>{C.stopPropagation(),as(),k()},children:l.jsx(DS,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Exit",l.jsx("span",{className:Qe.shortcut,children:"Esc"})]})]})]}),l.jsx(h6,{visible:tt&&j,activeType:Tt,onSelect:C=>{vt(Tt===C?null:C)},isDarkMode:Ps,sectionCount:(_n=et==null?void 0:et.sections.length)!=null?_n:0,onDetectSections:()=>{var De,Ce;const C=C6(),T=(De=et==null?void 0:et.sections)!=null?De:[],R=new Set(T.map($e=>$e.selector)),B=C.filter($e=>!R.has($e.selector)),F=[...T,...B],ie=[...(Ce=et==null?void 0:et.originalOrder)!=null?Ce:[],...B.map($e=>$e.id)];ss({sections:F,originalOrder:ie,detectedAt:Date.now()})},placementCount:ct.length,onClearPlacements:()=>{vo(C=>C+1),vi(C=>C+1),Vt(()=>{ss({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:mt,onBlankCanvasChange:C=>{const T={sections:[],originalOrder:[],detectedAt:Date.now()};C?(Vo.current={rearrange:et,placements:ct},ss(Xs.current.rearrange||T),lt(Xs.current.placements),vt(null)):(Xs.current={rearrange:et,placements:ct},ss(Vo.current.rearrange||T),lt(Vo.current.placements)),yt(C)},wireframePurpose:An,onWireframePurposeChange:mn,Tooltip:Er,onDragStart:(C,T)=>{var Mt;T.preventDefault();const R=wt[C];let B=null,F=!1;const ie=T.clientX,De=T.clientY,Ce=T.target.closest("[data-feedback-toolbar]"),$e=(Mt=Ce==null?void 0:Ce.getBoundingClientRect().top)!=null?Mt:window.innerHeight,ut=Lt=>{const xt=Lt.clientX-ie,_t=Lt.clientY-De;if(!F&&(Math.abs(xt)>4||Math.abs(_t)>4)&&(F=!0,B=document.createElement("div"),B.className=`${Be.dragPreview}${mt?` ${Be.dragPreviewWireframe}`:""}`,document.body.appendChild(B)),!B)return;const Kn=Math.max(0,$e-Lt.clientY),bs=Math.min(1,Kn/180),vs=1-Math.pow(1-bs,2),jn=28,Un=20,Xt=Math.min(140,R.width*.18),Kt=Math.min(90,R.height*.18),ws=jn+(Xt-jn)*vs,Tn=Un+(Kt-Un)*vs;B.style.width=`${ws}px`,B.style.height=`${Tn}px`,B.style.left=`${Lt.clientX-ws/2}px`,B.style.top=`${Lt.clientY-Tn/2}px`,B.style.opacity=`${.5+.5*vs}`,B.textContent=vs>.25?C:""},ft=Lt=>{if(window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",ft),B&&document.body.removeChild(B),F){const xt=R.width,_t=R.height,Kn=window.scrollY,bs=Math.max(0,Lt.clientX-xt/2),vs=Math.max(0,Lt.clientY+Kn-_t/2),jn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:bs,y:vs,width:xt,height:_t,scrollY:Kn,timestamp:Date.now()};lt(Un=>[...Un,jn]),vt(null),bn.current=new Set,di(Un=>Un+1)}};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",ft)}}),l.jsx(RC,{settings:Gt,onSettingsChange:C=>Gs(T=>({...T,...C})),isDarkMode:Ps,onToggleTheme:qs,isDevMode:Ci,connectionStatus:Ds,endpoint:_,isVisible:Ze,toolbarNearBottom:!!dn&&dn.y<230,settingsPage:bt,onSettingsPageChange:qe,onHideToolbar:ni})]})}),(tt||$t)&&l.jsx("div",{className:`${Be.blankCanvas} ${cn?Be.visible:""} ${fn?Be.gridActive:""}`,style:{"--canvas-opacity":Ht},"data-feedback-toolbar":!0}),tt&&mt&&cn&&l.jsxs("div",{className:Be.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Be.wireframeOpacityRow,children:[l.jsx("span",{className:Be.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Be.wireframeOpacitySlider,min:0,max:1,step:.01,value:Ht,onChange:C=>ds(Number(C.target.value))})]}),l.jsxs("div",{className:Be.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Be.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Be.wireframeNoticeDivider}),l.jsx("button",{className:Be.wireframeStartOver,onClick:()=>{vo(C=>C+1),ss({sections:[],originalOrder:[],detectedAt:Date.now()}),Xs.current={rearrange:null,placements:[]},mn(""),td(jt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(tt||$t)&&l.jsx(l6,{placements:ct,onChange:lt,activeComponent:$t?null:Tt,onActiveComponentChange:vt,isDarkMode:Ps,exiting:$t,onInteractionChange:Yn,passthrough:!Tt,extraSnapRects:et==null?void 0:et.sections.map(C=>C.currentRect),deselectSignal:Is,clearSignal:bo,wireframe:mt,onSelectionChange:(C,T)=>{bn.current=C,T||(gs.current=new Set,Do(R=>R+1))},onDragMove:(C,T)=>{const R=gs.current;if(!(!R.size||!et)){if(!os.current){os.current=new Map;for(const B of et.sections)R.has(B.id)&&os.current.set(B.id,{x:B.currentRect.x,y:B.currentRect.y})}for(const B of et.sections){if(!R.has(B.id)||!os.current.get(B.id))continue;const ie=document.querySelector(`[data-rearrange-section="${B.id}"]`);ie&&(ie.style.transform=`translate(${C}px, ${T}px)`)}}},onDragEnd:(C,T,R)=>{const B=gs.current,F=os.current;if(os.current=null,!(!B.size||!et||!F)){for(const ie of B){const De=document.querySelector(`[data-rearrange-section="${ie}"]`);De&&(De.style.transform="")}R&&ss(ie=>ie&&{...ie,sections:ie.sections.map(De=>{const Ce=F.get(De.id);return Ce?{...De,currentRect:{...De.currentRect,x:Math.max(0,Ce.x+C),y:Math.max(0,Ce.y+T)}}:De})})}}}),(tt||$t)&&et&&l.jsx(M6,{rearrangeState:et,onChange:ss,isDarkMode:Ps,exiting:$t,blankCanvas:mt,extraSnapRects:ct.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:xn,deselectSignal:Ts,onSelectionChange:(C,T)=>{gs.current=C,T||(bn.current=new Set,di(R=>R+1))},onDragMove:(C,T)=>{const R=bn.current;if(R.size){if(!os.current){os.current=new Map;for(const B of ct)R.has(B.id)&&os.current.set(B.id,{x:B.x,y:B.y})}for(const B of R){const F=document.querySelector(`[data-design-placement="${B}"]`);F&&(F.style.transform=`translate(${C}px, ${T}px)`)}}},onDragEnd:(C,T,R)=>{const B=bn.current,F=os.current;if(os.current=null,!(!B.size||!F)){for(const ie of B){const De=document.querySelector(`[data-design-placement="${ie}"]`);De&&(De.style.transform="")}R&&lt(ie=>ie.map(De=>{const Ce=F.get(De.id);return Ce?{...De,x:Math.max(0,Ce.x+C),y:Math.max(0,Ce.y+T)}:De}))}}}),l.jsx("canvas",{ref:wo,className:`${Qe.drawCanvas} ${un?Qe.active:""}`,style:{opacity:zo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Qe.markersLayer,"data-feedback-toolbar":!0,children:[ae&&it.filter(C=>!C.isFixed).map((C,T,R)=>l.jsx(r1,{annotation:C,globalIndex:it.findIndex(B=>B.id===C.id),layerIndex:T,layerSize:R.length,isExiting:Ee,isClearing:Ae,isAnimated:So.has(C.id),isHovered:!Ee&&Pe===C.id,isDeleting:Ut===C.id,isEditingAny:!!ne,renumberFrom:St,markerClickBehavior:Gt.markerClickBehavior,tooltipStyle:rs(C),onHoverEnter:B=>!Ee&&B.id!==Lo.current&&on(B),onHoverLeave:()=>on(null),onClick:B=>Gt.markerClickBehavior==="delete"?rn(B.id):st(B),onContextMenu:st},C.id)),ae&&!Ee&&Jt.filter(C=>!C.isFixed).map(C=>l.jsx(l1,{annotation:C},C.id))]}),l.jsxs("div",{className:Qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&it.filter(C=>C.isFixed).map((C,T,R)=>l.jsx(r1,{annotation:C,globalIndex:it.findIndex(B=>B.id===C.id),layerIndex:T,layerSize:R.length,isExiting:Ee,isClearing:Ae,isAnimated:So.has(C.id),isHovered:!Ee&&Pe===C.id,isDeleting:Ut===C.id,isEditingAny:!!ne,renumberFrom:St,markerClickBehavior:Gt.markerClickBehavior,tooltipStyle:rs(C),onHoverEnter:B=>!Ee&&B.id!==Lo.current&&on(B),onHoverLeave:()=>on(null),onClick:B=>Gt.markerClickBehavior==="delete"?rn(B.id):st(B),onContextMenu:st},C.id)),ae&&!Ee&&Jt.filter(C=>C.isFixed).map(C=>l.jsx(l1,{annotation:C,fixed:!0},C.id))]}),j&&l.jsxs("div",{className:Qe.overlay,"data-feedback-toolbar":!0,style:W||ne?{zIndex:99999}:void 0,children:[(ee==null?void 0:ee.rect)&&!W&&!At&&!Qs&&l.jsx("div",{className:`${Qe.hoverHighlight} ${Qe.enter}`,style:{left:ee.rect.left,top:ee.rect.top,width:ee.rect.width,height:ee.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Nn.filter(C=>document.contains(C.element)).map((C,T)=>{const R=C.element.getBoundingClientRect(),B=Nn.length>1;return l.jsx("div",{className:B?Qe.multiSelectOutline:Qe.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},T)}),Pe&&!W&&(()=>{var F;const C=E.find(ie=>ie.id===Pe);if(!(C!=null&&C.boundingBox))return null;if((F=C.elementBoundingBoxes)!=null&&F.length)return Fe.length>0?Fe.filter(ie=>document.contains(ie)).map((ie,De)=>{const Ce=ie.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:Ce.left,top:Ce.top,width:Ce.width,height:Ce.height}},`hover-outline-live-${De}`)}):C.elementBoundingBoxes.map((ie,De)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:ie.x,top:ie.y-ht,width:ie.width,height:ie.height}},`hover-outline-${De}`));const T=Ot&&document.contains(Ot)?Ot.getBoundingClientRect():null,R=T?{x:T.left,y:T.top,width:T.width,height:T.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-ht,width:C.boundingBox.width,height:C.boundingBox.height},B=C.isMultiSelect;return l.jsx("div",{className:`${B?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ee&&!W&&!At&&!Qs&&l.jsxs("div",{className:`${Qe.hoverTooltip} ${Qe.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(ee.reactComponents?48:32),8)},children:[ee.reactComponents&&l.jsx("div",{className:Qe.hoverReactPath,children:ee.reactComponents}),l.jsx("div",{className:Qe.hoverElementName,children:ee.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(pe=W.multiSelectElements)!=null&&pe.length?W.multiSelectElements.filter(C=>document.contains(C)).map((C,T)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${T}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const C=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Qe.singleSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-ht,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=W.x,T=W.isFixed?W.y:W.y-ht;return l.jsxs(l.Fragment,{children:[l.jsx(SC,{x:C,y:T,isMultiSelect:W.isMultiSelect,isExiting:Vn}),l.jsx(jd,{ref:Ii,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Ft,onCancel:tn,isExiting:Vn,lightMode:!Ps,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}})]})})()]}),ne&&l.jsxs(l.Fragment,{children:[(Ie=ne.elementBoundingBoxes)!=null&&Ie.length?Xe.length>0?Xe.filter(C=>document.contains(C)).map((C,T)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${T}`)}):ne.elementBoundingBoxes.map((C,T)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:C.x,top:C.y-ht,width:C.width,height:C.height}},`edit-multi-${T}`)):(()=>{const C=Ye&&document.contains(Ye)?Ye.getBoundingClientRect():null,T=C?{x:C.left,y:C.top,width:C.width,height:C.height}:ne.boundingBox?{x:ne.boundingBox.x,y:ne.isFixed?ne.boundingBox.y:ne.boundingBox.y-ht,width:ne.boundingBox.width,height:ne.boundingBox.height}:null;return T?l.jsx("div",{className:`${ne.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...ne.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:lo,element:ne.element,selectedText:ne.selectedText,computedStyles:b6(ne.computedStyles),placeholder:"Edit your feedback...",initialValue:ne.comment,submitLabel:"Save",onSubmit:vn,onCancel:N,onDelete:()=>rn(ne.id),isExiting:Co,lightMode:!Ps,accentColor:ne.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=ne.isFixed?ne.y:ne.y-ht;return{left:Math.max(160,Math.min(window.innerWidth-160,ne.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),Qs&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Bs,className:Qe.dragSelection}),l.jsx("div",{ref:qo,className:Qe.highlightsContainer})]})]})]}),document.body)}const yp=g.createContext({});function Lc(t){const n=g.useRef(null);return n.current===null&&(n.current=t()),n.current}const OC=typeof window<"u",xp=OC?g.useLayoutEffect:g.useEffect,zd=g.createContext(null);function bp(t,n){t.indexOf(n)===-1&&t.push(n)}function yl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const da=(t,n,i)=>i>n?n:i<t?t:i;let vp=()=>{};const ar={},mb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function pb(t){return typeof t=="object"&&t!==null}const _b=t=>/^0[^.\s]+$/u.test(t);function gb(t){let n;return()=>(n===void 0&&(n=t()),n)}const zi=t=>t,zC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(zC),xl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class wp{constructor(){this.subscriptions=[]}add(n){return bp(this.subscriptions,n),()=>yl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ui=t=>t*1e3,Oi=t=>t/1e3;function yb(t,n){return n?t*(1e3/n):0}const $C=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},xb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,IC=1e-7,PC=12;function HC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=xb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>IC&&++h<PC);return d}function zc(t,n,i,a){if(t===n&&i===a)return zi;const c=u=>HC(u,0,1,t,i);return u=>u===0||u===1?u:xb(c(u),n,a)}const bb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,vb=t=>n=>1-t(1-n),wb=zc(.33,1.53,.69,.99),Sp=vb(wb),Sb=bb(Sp),Cb=t=>t>=1?1:(t*=2)<1?.5*Sp(t):.5*(2-Math.pow(2,-10*(t-1))),Cp=t=>1-Math.sin(Math.acos(t)),kb=vb(Cp),jb=bb(Cp),VC=zc(.42,0,1,1),UC=zc(0,0,.58,1),Mb=zc(.42,0,.58,1),Eb=t=>Array.isArray(t)&&typeof t[0]!="number";function Tb(t,n){return Eb(t)?t[$C(0,t.length,n)]:t}const Ab=t=>Array.isArray(t)&&typeof t[0]=="number",YC={linear:zi,easeIn:VC,easeInOut:Mb,easeOut:UC,circIn:Cp,circInOut:jb,circOut:kb,backIn:Sp,backInOut:Sb,backOut:wb,anticipate:Cb},WC=t=>typeof t=="string",f1=t=>{if(Ab(t)){vp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(WC(t))return YC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function FC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(y.schedule(_),t()),_(h)}const y={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(_))}};return y}const XC=40;function Nb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,D)=>(L[D]=FC(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const L=ar.useManualTiming,D=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,XC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},M=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,D)=>{const G=d[D];return L[D]=(V,q=!1,H=!1)=>(i||M(),G.schedule(V,q,H)),L},{}),cancel:L=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(L)},state:c,steps:d}}const{schedule:ns,cancel:Na,state:No,steps:um}=Nb(typeof requestAnimationFrame<"u"?requestAnimationFrame:zi,!0);let pd;function GC(){pd=void 0}const Zo={now:()=>(pd===void 0&&Zo.set(No.isProcessing||ar.useManualTiming?No.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(GC)}},Db=t=>n=>typeof n=="string"&&n.startsWith(t),Rb=Db("--"),qC=Db("var(--"),kp=t=>qC(t)?KC.test(t.split("/*")[0].trim()):!1,KC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function h1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...wl,transform:t=>da(0,1,t)},ad={...wl,default:1},wc=t=>Math.round(t*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function QC(t){return t==null}const ZC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(t,n)=>i=>!!(typeof i=="string"&&ZC.test(i)&&i.startsWith(t)||n&&!QC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Bb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(jp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},JC=t=>da(0,255,t),dm={...wl,transform:t=>Math.round(JC(t))},Tr={test:Mp("rgb","red"),parse:Bb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+dm.transform(t)+", "+dm.transform(n)+", "+dm.transform(i)+", "+wc(Tc.transform(a))+")"};function e3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:Mp("#"),parse:e3,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=$c("deg"),ua=$c("%"),Et=$c("px"),t3=$c("vh"),n3=$c("vw"),m1={...ua,parse:t=>ua.parse(t)/100,transform:t=>ua.transform(t*100)},hl={test:Mp("hsl","hue"),parse:Bb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ua.transform(wc(n))+", "+ua.transform(wc(i))+", "+wc(Tc.transform(a))+")"},oo={test:t=>Tr.test(t)||$m.test(t)||hl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):hl.test(t)?hl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):hl.transform(t),getAnimatableNone:t=>{const n=oo.parse(t);return n.alpha=0,oo.transform(n)}},s3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function o3(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(jp))==null?void 0:n.length)||0)+(((i=t.match(s3))==null?void 0:i.length)||0)>0}const Lb="number",Ob="color",i3="var",a3="var(",p1="${}",r3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(r3,p=>(oo.test(p)?(a.color.push(u),c.push(Ob),i.push(oo.parse(p))):p.startsWith(a3)?(a.var.push(u),c.push(i3),i.push(p)):(a.number.push(u),c.push(Lb),i.push(parseFloat(p))),++u,p1)).split(p1);return{values:i,split:h,indexes:a,types:c}}function l3(t){return bl(t).values}function zb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Lb?c+=wc(a[u]):d===Ob?c+=oo.transform(a[u]):c+=a[u]}return c}}function c3(t){return zb(bl(t))}const u3=t=>typeof t=="number"?0:oo.test(t)?oo.getAnimatableNone(t):t,d3=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:u3(t);function f3(t){const n=bl(t);return zb(n)(n.values.map((a,c)=>d3(a,n.split[c])))}const Qi={test:o3,parse:l3,createTransformer:c3,getAnimatableNone:f3};function fm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function h3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=fm(p,h,t+1/3),u=fm(p,h,t),d=fm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const _s=(t,n,i)=>t+(n-t)*i,hm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},m3=[$m,Tr,hl],p3=t=>m3.find(n=>n.test(t));function _1(t){const n=p3(t);if(!n)return!1;let i=n.parse(t);return n===hl&&(i=h3(i)),i}const g1=(t,n)=>{const i=_1(t),a=_1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=hm(i.red,a.red,u),c.green=hm(i.green,a.green,u),c.blue=hm(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),Tr.transform(c))},Im=new Set(["none","hidden"]);function _3(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function g3(t,n){return i=>_s(t,n,i)}function Ep(t){return typeof t=="number"?g3:typeof t=="string"?kp(t)?Td:oo.test(t)?g1:b3:Array.isArray(t)?$b:typeof t=="object"?oo.test(t)?g1:y3:Td}function $b(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Ep(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function y3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Ep(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function x3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const b3=(t,n)=>{const i=Qi.createTransformer(n),a=bl(t),c=bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?_3(t,n):Oc($b(x3(a,c),c.values),i):Td(t,n)};function Ib(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?_s(t,n,i):Ep(t)(t,n)}const v3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ns.update(n,i),stop:()=>Na(n),now:()=>No.isProcessing?No.timestamp:Zo.now()}},Pb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Hb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Oi(c)}}const $s={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const w3=12;function S3(t,n,i){let a=i;for(let c=1;c<w3;c++)a=a-t(a)/n(a);return a}const mm=.001;function C3({duration:t=$s.duration,bounce:n=$s.bounce,velocity:i=$s.velocity,mass:a=$s.mass}){let c,u,d=1-n;d=da($s.minDamping,$s.maxDamping,d),t=da($s.minDuration,$s.maxDuration,Oi(t)),d<1?(c=y=>{const _=y*d,x=_*t,b=_-i,w=Pm(y,d),S=Math.exp(-x);return mm-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),j=Pm(Math.pow(y,2),d);return(-c(y)+mm>0?-1:1)*((b-w)*S)/j}):(c=y=>{const _=Math.exp(-y*t),x=(y-i)*t+1;return-mm+_*x},u=y=>{const _=Math.exp(-y*t),x=(i-y)*(t*t);return _*x});const h=5/t,p=S3(c,u,h);if(t=ui(t),isNaN(p))return{stiffness:$s.stiffness,damping:$s.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const k3=["duration","bounce"],j3=["stiffness","damping","mass"];function y1(t,n){return n.some(i=>t[i]!==void 0)}function M3(t){let n={velocity:$s.velocity,stiffness:$s.stiffness,damping:$s.damping,mass:$s.mass,isResolvedFromDuration:!1,...t};if(!y1(t,j3)&&y1(t,k3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*da(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:$s.mass,stiffness:c,damping:u}}else{const i=C3({...t,velocity:0});n={...n,...i,mass:$s.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=$s.visualDuration,n=$s.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=M3({...i,velocity:-Oi(i.velocity||0)}),S=b||0,j=y/(2*Math.sqrt(p*_)),M=d-u,E=Oi(Math.sqrt(p/_)),O=Math.abs(M)<5;a||(a=O?$s.restSpeed.granular:$s.restSpeed.default),c||(c=O?$s.restDelta.granular:$s.restDelta.default);let L,D,G,V,q,H;if(j<1)G=Pm(E,j),V=(S+j*E*M)/G,L=ae=>{const oe=Math.exp(-j*E*ae);return d-oe*(V*Math.sin(G*ae)+M*Math.cos(G*ae))},q=j*E*V+M*G,H=j*E*M-V*G,D=ae=>Math.exp(-j*E*ae)*(q*Math.sin(G*ae)+H*Math.cos(G*ae));else if(j===1){L=oe=>d-Math.exp(-E*oe)*(M+(S+E*M)*oe);const ae=S+E*M;D=oe=>Math.exp(-E*oe)*(E*ae*oe-S)}else{const ae=E*Math.sqrt(j*j-1);L=ee=>{const fe=Math.exp(-j*E*ee),I=Math.min(ae*ee,300);return d-fe*((S+j*E*M)*Math.sinh(I)+ae*M*Math.cosh(I))/ae};const oe=(S+j*E*M)/ae,Ee=j*E*oe-M*ae,Ve=j*E*M-oe*ae;D=ee=>{const fe=Math.exp(-j*E*ee),I=Math.min(ae*ee,300);return fe*(Ee*Math.sinh(I)+Ve*Math.cosh(I))}}const J={calculatedDuration:w&&x||null,velocity:ae=>ui(D(ae)),next:ae=>{if(!w&&j<1){const Ee=Math.exp(-j*E*ae),Ve=Math.sin(G*ae),ee=Math.cos(G*ae),fe=d-Ee*(V*Ve+M*ee),I=ui(Ee*(q*Ve+H*ee));return h.done=Math.abs(I)<=a&&Math.abs(d-fe)<=c,h.value=h.done?d:fe,h}const oe=L(ae);if(w)h.done=ae>=x;else{const Ee=ui(D(ae));h.done=Math.abs(Ee)<=a&&Math.abs(d-oe)<=c}return h.value=h.done?d:oe,h},toString:()=>{const ae=Math.min(Tp(J),Ad),oe=Pb(Ee=>J.next(ae*Ee).value,ae,30);return ae+"ms "+oe},toTransition:()=>{}};return J}Ac.applyToOptions=t=>{const n=Hb(t,100,Ac);return t.ease=n.ease,t.duration=ui(n.duration),t.type="keyframes",t};const E3=5;function Vb(t,n,i){const a=Math.max(n-E3,0);return yb(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=H=>h!==void 0&&H<h||p!==void 0&&H>p,S=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let j=i*n;const M=x+j,E=d===void 0?M:d(M);E!==M&&(j=E-x);const O=H=>-j*Math.exp(-H/a),L=H=>E+O(H),D=H=>{const J=O(H),ae=L(H);b.done=Math.abs(J)<=y,b.value=b.done?E:ae};let G,V;const q=H=>{w(b.value)&&(G=H,V=Ac({keyframes:[b.value,S(b.value)],velocity:Vb(L,H,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:_}))};return q(0),{calculatedDuration:null,next:H=>{let J=!1;return!V&&G===void 0&&(J=!0,D(H),q(H)),G!==void 0&&H>=G?V.next(H-G):(!J&&D(H),b)}}}function T3(t,n,i){const a=[],c=i||ar.mix||Ib,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||zi:n;h=Oc(p,h)}a.push(h)}return a}function Ub(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(vp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=T3(n,a,c),p=h.length,y=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=xl(t[x],t[x+1],_);return h[x](b)};return i?_=>y(da(t[0],t[u-1],_)):y}function Yb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=xl(0,n,a);t.push(_s(i,1,c))}}function Wb(t){const n=[0];return Yb(n,t.length-1),n}function A3(t,n){return t.map(i=>i*n)}function N3(t,n){return t.map(()=>n||Mb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Eb(a)?a.map(f1):f1(a),u={done:!1,value:n[0]},d=A3(i&&i.length===n.length?i:Wb(n),t),h=Ub(d,n,{ease:Array.isArray(c)?c:N3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const D3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(D3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const R3={decay:Hm,inertia:Hm,tween:Sc,keyframes:Sc,spring:Ac};function Fb(t){typeof t.type=="string"&&(t.type=R3[t.type])}class Ap{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const B3=t=>t/100;class Nd extends Ap{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Zo.now()&&this.tick(Zo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Fb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(B3,Ib(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Tp(y));const{calculatedDuration:_}=y;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const E=this.currentTime-y*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?E<0:E>c;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,D=a;if(x){const H=Math.min(this.currentTime,c)/h;let J=Math.floor(H),ae=H%1;!ae&&H>=1&&(ae=1),ae===1&&J--,J=Math.min(J,x+1),!!(J%2)&&(b==="reverse"?(ae=1-ae,w&&(ae-=w/h)):b==="mirror"&&(D=d)),L=da(0,1,ae)*h}let G;O?(this.delayState.value=_[0],G=this.delayState):G=D.next(L),u&&!O&&(G.value=u(G.value));let{done:V}=G;!O&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return q&&S!==Hm&&(G.value=$d(_,this.options,M,this.speed)),j&&j(G.value),q&&this.finish(),G}then(n,i){return this.finished.then(n,i)}get duration(){return Oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(this.currentTime)}set time(n){n=ui(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Vb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Zo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=v3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Zo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function L3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Vm=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Um(n)},O3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Vm,rotateZ:Vm,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),x1=Vm,b1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),v1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),z3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:b1,scaleY:v1,scale:t=>(b1(t)+v1(t))/2,rotateX:t=>Um(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Um(Ar(Math.atan2(-t[2],t[0]))),rotateZ:x1,rotate:x1,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=z3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=O3,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(I3);return typeof u=="function"?u(d):d[u]}const $3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function I3(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),w1=t=>t===wl||t===Et,P3=new Set(["x","y","z"]),H3=Sl.filter(t=>!P3.has(t));function V3(t){const n=[];return H3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Nr=new Set;let Fm=!1,Xm=!1,Gm=!1;function Xb(){if(Xm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=V3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,Nr.forEach(t=>t.complete(Gm)),Nr.clear()}function Gb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function U3(){Gm=!0,Gb(),Xb(),Gm=!1}class Np{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Fm||(Fm=!0,ns.read(Gb),ns.resolveKeyframes(Xb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}L3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Y3=t=>t.startsWith("--");function qb(t,n,i){Y3(n)?t.style.setProperty(n,i):t.style[n]=i}const W3={};function Kb(t,n){const i=gb(t);return()=>{var a;return(a=W3[n])!=null?a:i()}}const F3=Kb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Qb=Kb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,S1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function Zb(t,n){if(t)return typeof t=="function"?Qb()?Pb(t,n):"ease-out":Ab(t)?gc(t):Array.isArray(t)?t.map(i=>Zb(i,n)||S1.easeOut):S1[t]}function X3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const _={[n]:i};p&&(_.offset=p);const x=Zb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(_,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function G3({type:t,...n}){var i,a;return Dp(t)&&Qb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Jb extends Ap{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,vp(typeof n.type!="string");const y=G3(n);this.animation=X3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),qb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ui(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&F3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),zi):c(this)}}const e5={anticipate:Cb,backInOut:Sb,circInOut:jb};function q3(t){return t in e5}function K3(t){typeof t.ease=="string"&&q3(t.ease)&&(t.ease=e5[t.ease])}const pm=10;class Q3 extends Jb{constructor(n){K3(n),Fb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(pm,Zo.now()-this.startTime),y=da(0,pm,p-pm),_=h.sample(p).value,{name:x}=this.options;u&&x&&qb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,_,y),h.stop()}}const C1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Qi.test(t)||t==="0")&&!t.startsWith("url("));function Z3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function J3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=C1(c,n),h=C1(u,n);return!d||!h?!1:Z3(t)||(i==="spring"||Dp(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const t5=new Set(["opacity","clipPath","filter","transform"]),ek=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function tk(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&ek.test(t[n]))return!0;return!1}const nk=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),sk=gb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ok(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:_}=n.owner.getProps();return sk()&&i&&(t5.has(i)||nk.has(i)&&tk(h))&&(i!=="transform"||!_)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const ik=40;class ak extends Ap{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:_,...x}){var S;super(),this.stop=()=>{var j,M;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=Zo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Np;this.keyframeResolver=new w(h,(j,M,E)=>this.onKeyframesResolved(j,M,b,!E),p,y,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var E,O;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:_}=a;this.resolvedAt=Zo.now();let x=!0;J3(n,u,d,h)||(x=!1,(ar.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>ik?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&ok(w),j=(O=(E=w.motionValue)==null?void 0:E.owner)==null?void 0:O.current;let M;if(S)try{M=new Q3({...w,element:j})}catch{M=new Nd(w)}else M=new Nd(w);M.finished.then(()=>{this.notifyFinished()}).catch(zi),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),U3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class rk{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return k1(this.animations,"duration")}get iterationDuration(){return k1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function k1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class lk extends rk{then(n,i){return this.finished.finally(n).then(()=>{})}}function n5(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,_)=>y.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const ck=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function uk(t){const n=ck.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function s5(t,n,i=1){const[a,c]=uk(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return mb(d)?parseFloat(d):d}return kp(c)?s5(c,n,i+1):c}const dk={type:"spring",stiffness:500,damping:25,restSpeed:10},fk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),hk={type:"keyframes",duration:.8},mk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pk=(t,{keyframes:n})=>n.length>2?hk:Cl.has(t)?t.startsWith("scale")?fk(n[1]):dk:mk;function o5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Rp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?o5(i,t):i}const _k=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function gk(t){for(const n in t)if(!_k.has(n))return!0;return!1}const Bp=(t,n,i,a={},c,u)=>d=>{const h=Rp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ui(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};gk(h)||Object.assign(_,pk(t,_)),_.duration&&(_.duration=ui(_.duration)),_.repeatDelay&&(_.repeatDelay=ui(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(qm(_),_.delay===0&&(x=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){ns.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Nd(_):new ak(_)};function j1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Lp(t,n,i,a){if(typeof n=="function"){const[c,u]=j1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=j1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Lp(a,n,i!==void 0?i:a.custom,t)}const i5=new Set(["width","height","top","left","right","bottom",...Sl]),M1=30,yk=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class xk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Zo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Zo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=yk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new wp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ns.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Zo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>M1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,M1);return yb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new xk(t,n)}const Km=t=>Array.isArray(t);function bk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function vk(t){return Km(t)?t[t.length-1]||0:t}function wk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=vk(u[d]);bk(t,d,h)}}const ho=t=>!!(t&&t.getVelocity);function Sk(t){return!!(ho(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(Sk(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Op(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Ck="framerAppearId",a5="data-"+Op(Ck);function r5(t){return t.props[a5]}function kk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function zp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?o5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&kk(x,w))continue;const M={delay:i,...Rp(u||{},w)},E=S.get();if(E!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===E&&!M.velocity){ns.update(()=>S.set(j));continue}let O=!1;if(window.MotionHandoffAnimation){const G=r5(t);if(G){const V=window.MotionHandoffAnimation(G,w,ns);V!==null&&(M.startTime=V,O=!0)}}Qm(t,w);const L=y!=null?y:t.shouldReduceMotion;S.start(Bp(w,S,j,L&&i5.has(w)?{type:!1}:M,t,O));const D=S.animation;D&&_.push(D)}if(d){const w=()=>ns.update(()=>{d&&wk(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Zm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(zp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return jk(t,n,y,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,_]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function jk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+n5(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function Mk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(zp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const Ek={test:t=>t==="auto",parse:t=>t},l5=t=>n=>n.test(t),c5=[wl,Et,ua,nr,n3,t3,Ek],E1=t=>c5.find(l5(t));function Tk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_b(t):!0}const Ak=new Set(["brightness","contrast","saturate","opacity"]);function Nk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(jp)||[];if(!a)return t;const c=i.replace(a,"");let u=Ak.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const Dk=/\b([a-z-]*)\(.*?\)/gu,Jm={...Qi,getAnimatableNone:t=>{const n=t.match(Dk);return n?n.map(Nk).join(" "):t}},ep={...Qi,getAnimatableNone:t=>{const n=Qi.parse(t);return Qi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},T1={...wl,transform:Math.round},Rk={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:nr,skewX:nr,skewY:nr,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:Tc,originX:m1,originY:m1,originZ:Et},$p={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,top:Et,right:Et,bottom:Et,left:Et,inset:Et,insetBlock:Et,insetBlockStart:Et,insetBlockEnd:Et,insetInline:Et,insetInlineStart:Et,insetInlineEnd:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,paddingBlock:Et,paddingBlockStart:Et,paddingBlockEnd:Et,paddingInline:Et,paddingInlineStart:Et,paddingInlineEnd:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,marginBlock:Et,marginBlockStart:Et,marginBlockEnd:Et,marginInline:Et,marginInlineStart:Et,marginInlineEnd:Et,fontSize:Et,backgroundPositionX:Et,backgroundPositionY:Et,...Rk,zIndex:T1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:T1},Bk={...$p,color:oo,backgroundColor:oo,outlineColor:oo,fill:oo,stroke:oo,borderColor:oo,borderTopColor:oo,borderRightColor:oo,borderBottomColor:oo,borderLeftColor:oo,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},u5=t=>Bk[t],Lk=new Set([Jm,ep]);function d5(t,n){let i=u5(t);return Lk.has(i)||(i=Qi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Ok=new Set(["auto","none","0"]);function zk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Ok.has(u)&&bl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=d5(i,c)}class $k extends Np{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),kp(x))){const b=s5(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!i5.has(a)||n.length!==2)return;const[c,u]=n,d=E1(c),h=E1(u),p=h1(c),y=h1(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if(w1(d)&&w1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||Tk(n[c]))&&a.push(c);a.length&&zk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Ip(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const f5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return pb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Pp}=Nb(queueMicrotask,!1),Gi={x:!1,y:!1};function h5(){return Gi.x||Gi.y}function Ik(t){return t==="x"||t==="y"?Gi[t]?null:(Gi[t]=!0,()=>{Gi[t]=!1}):Gi.x||Gi.y?null:(Gi.x=Gi.y=!0,()=>{Gi.x=Gi.y=!1})}function m5(t,n){const i=Ip(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Pk(t){return!(t.pointerType==="touch"||h5())}function Hk(t,n,i={}){const[a,c,u]=m5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const _=()=>{d.removeEventListener("pointerleave",S)},x=M=>{y&&(y(M),y=void 0),_()},b=M=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(M))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=M=>{if(M.pointerType!=="touch"){if(h){p=!0;return}x(M)}},j=M=>{if(!Pk(M))return;p=!1;const E=n(d,M);typeof E=="function"&&(y=E,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const p5=(t,n)=>n?t===n?!0:p5(t,n.parentElement):!1,Hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Vk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Uk(t){return Vk.has(t.tagName)||t.isContentEditable===!0}const Yk=new Set(["INPUT","SELECT","TEXTAREA"]);function Wk(t){return Yk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function A1(t){return n=>{n.key==="Enter"&&t(n)}}function _m(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Fk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=A1(()=>{if(gd.has(i))return;_m(i,"down");const c=A1(()=>{_m(i,"up")}),u=()=>_m(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function N1(t){return Hp(t)&&!h5()}const D1=new WeakSet;function Xk(t,n,i={}){const[a,c,u]=m5(t,i),d=h=>{const p=h.currentTarget;if(!N1(h)||D1.has(h))return;gd.add(p),i.stopPropagation&&D1.add(h);const y=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),N1(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||p5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>Fk(y,c)),!Uk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return pb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let sr;const _5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Gk=_5("inline","width","offsetWidth"),qk=_5("block","height","offsetHeight");function Kk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Gk(t,n)},get height(){return qk(t,n)}})})}function Qk(t){t.forEach(Kk)}function Zk(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(Qk))}function Jk(t,n){sr||Zk();const i=Ip(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const xd=new Set;let ml;function e8(){ml=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",ml)}function t8(t){return xd.add(t),ml||e8(),()=>{xd.delete(t),!xd.size&&typeof ml=="function"&&(window.removeEventListener("resize",ml),ml=void 0)}}function R1(t,n){return typeof t=="function"?t8(t):Jk(t,n)}function g5(t){return Id(t)&&t.tagName==="svg"}function n8(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Ub(c,u,d);return n?h(a):h}const s8=[...c5,oo,Qi],o8=t=>s8.find(l5(t)),B1=()=>({translate:0,scale:1,origin:0,originPoint:0}),pl=()=>({x:B1(),y:B1()}),L1=()=>({min:0,max:0}),so=()=>({x:L1(),y:L1()}),Nc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Vp];function Hd(t){return Pd(t.animate)||Up.some(n=>Dc(t[n]))}function y5(t){return!!(Hd(t)||t.variants)}function i8(t,n,i){for(const a in n){const c=n[a],u=i[a];if(ho(c))t.addValue(a,c);else if(ho(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},x5={current:!1},a8=typeof window<"u";function r8(){if(x5.current=!0,!!a8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const O1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function b5(t){Dd=t}function l8(){return Dd}class v5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Np,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Zo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ns.render(this.render,!1,!0))};const{latestValues:y,renderState:_}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=y5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&ho(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Nc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(x5.current||r8(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&t5.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:_}=i.accelerate,x=new Jb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ui(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ns.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):so()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<O1.length;a++){const c=O1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=i8(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(mb(a)||_b(a))?a=parseFloat(a):!o8(a)&&Qi.test(i)&&(a=d5(n,i)),this.setBaseTarget(n,ho(a)?a.get():a)),ho(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Lp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!ho(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new wp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Pp.render(this.render)}}class w5 extends v5{constructor(){super(...arguments),this.KeyframeResolver=$k}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;ho(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function S5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function c8({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function u8(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function gm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!gm(t)||!gm(n)||!gm(i)}function jr(t){return np(t)||C5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function C5(t){return z1(t.x)||z1(t.y)}function z1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function $1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=$1(t.min,n,i,a,c),t.max=$1(t.max,n,i,a,c)}function k5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const I1=.999999999999,P1=1.0000000000001;function d8(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(la(t.x,-u.scroll.offset.x),la(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,k5(t,d)),a&&jr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<P1&&n.x>I1&&(n.x=1),n.y<P1&&n.y>I1&&(n.y=1)}function la(t,n){t.min+=n,t.max+=n}function H1(t,n,i,a,c=.5){const u=_s(t.min,t.max,c);sp(t,n,i,u,a)}function V1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;H1(t.x,V1(n.x,a.x),n.scaleX,n.scale,n.originX),H1(t.y,V1(n.y,a.y),n.scaleY,n.scale,n.originY)}function j5(t,n){return S5(u8(t.getBoundingClientRect(),n))}function f8(t,n,i){const a=j5(t,i),{scroll:c}=n;return c&&(la(a.x,c.offset.x),la(a.y,c.offset.y)),a}const h8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},m8=Sl.length;function p8(t,n,i){let a="",c=!0;for(let u=0;u<m8;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=f5(h,$p[d]);if(!p){c=!1;const _=h8[d]||d;a+=`${_}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Yp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(Rb(p)){c[p]=y;continue}else{const _=f5(y,$p[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=p8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${y} ${_}`}}function M5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function U1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Et.test(t))t=parseFloat(t);else return t;const i=U1(t,n.target.x),a=U1(t,n.target.y);return`${i}% ${a}%`}},_8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Qi.parse(t);if(c.length>5)return a;const u=Qi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},op={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:_8};function E5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Wp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(ho(a[h])||c&&ho(c[h])||E5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function g8(t){return window.getComputedStyle(t)}class T5 extends w5{constructor(){super(...arguments),this.type="html",this.renderInstance=M5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):$3(n,i);{const c=g8(n),u=(Rb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return j5(n,i)}build(n,i,a){Yp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Wp(n,i,a)}}function y8(t,n){return t in n}class x8 extends v5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(y8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return so()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const b8={offset:"stroke-dashoffset",array:"stroke-dasharray"},v8={offset:"strokeDashoffset",array:"strokeDasharray"};function w8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?b8:v8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const S8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function A5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,_){var w,S;if(Yp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of S8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&w8(x,c,u,d,!1)}const N5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),D5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function C8(t,n,i,a){M5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(N5.has(c)?c:Op(c),n.attrs[c])}function R5(t,n,i){const a=Wp(t,n,i);for(const c in t)if(ho(t[c])||ho(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class B5 extends w5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=so}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=u5(i);return a&&a.default||0}return i=N5.has(i)?i:Op(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return R5(n,i,a)}build(n,i,a){A5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){C8(n,i,a,c)}mount(n){this.isSVGTag=D5(n.tagName),super.mount(n)}}const k8=Up.length;function L5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?L5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<k8;i++){const a=Up[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function O5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const j8=[...Vp].reverse(),M8=Vp.length;function E8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>Mk(t,i,a)))}function T8(t){let n=E8(t),i=Y1(),a=!0,c=!1;const u=y=>(_,x)=>{var w;const b=Dr(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...M}=b;_={..._,...M,...j}}return _};function d(y){n=y(t)}function h(y){const{props:_}=t,x=L5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let E=0;E<M8;E++){const O=j8[E],L=i[O],D=_[O]!==void 0?_[O]:x[O],G=Dc(D),V=O===y?L.isActive:null;V===!1&&(j=E);let q=D===x[O]&&D!==_[O]&&G;if(q&&(a||c)&&t.manuallyAnimateOnMount&&(q=!1),L.protectedKeys={...S},!L.isActive&&V===null||!D&&!L.prevProp||Pd(D)||typeof D=="boolean")continue;if(O==="exit"&&L.isActive&&V!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const H=A8(L.prevProp,D);let J=H||O===y&&L.isActive&&!q&&G||E>j&&G,ae=!1;const oe=Array.isArray(D)?D:[D];let Ee=oe.reduce(u(O),{});V===!1&&(Ee={});const{prevResolvedValues:Ve={}}=L,ee={...Ve,...Ee},fe=W=>{J=!0,w.has(W)&&(ae=!0,w.delete(W)),L.needsAnimating[W]=!0;const he=t.getValue(W);he&&(he.liveStyle=!1)};for(const W in ee){const he=Ee[W],Me=Ve[W];if(S.hasOwnProperty(W))continue;let $=!1;Km(he)&&Km(Me)?$=!O5(he,Me):$=he!==Me,$?he!=null?fe(W):w.add(W):he!==void 0&&w.has(W)?fe(W):L.protectedKeys[W]=!0}L.prevProp=D,L.prevResolvedValues=Ee,L.isActive&&(S={...S,...Ee}),(a||c)&&t.blockInitialAnimation&&(J=!1);const I=q&&H;J&&(!I||ae)&&b.push(...oe.map(W=>{const he={type:O};if(typeof W=="string"&&(a||c)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:Me}=t,$=Dr(Me,W);if(Me.enteringChildren&&$){const{delayChildren:ue}=$.transition||{};he.delay=n5(Me.enteringChildren,t,ue)}}return{animation:W,options:he}}))}if(w.size){const E={};if(typeof _.initial!="boolean"){const O=Dr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);O&&O.transition&&(E.transition=O.transition)}w.forEach(O=>{const L=t.getBaseTarget(O),D=t.getValue(O);D&&(D.liveStyle=!0),E[O]=L!=null?L:null}),b.push({animation:E})}let M=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(M=!1),a=!1,c=!1,M?n(b):Promise.resolve()}function p(y,_){var b;if(i[y].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,_)}),i[y].isActive=_;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=Y1(),c=!0}}}function A8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!O5(n,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Y1(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}function ip(t,n){t.min=n.min,t.max=n.max}function Xi(t,n){ip(t.x,n.x),ip(t.y,n.y)}function W1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const z5=1e-4,N8=1-z5,D8=1+z5,$5=.01,R8=0-$5,B8=0+$5;function Jo(t){return t.max-t.min}function L8(t,n,i){return Math.abs(t-n)<=i}function F1(t,n,i,a=.5){t.origin=a,t.originPoint=_s(n.min,n.max,t.origin),t.scale=Jo(i)/Jo(n),t.translate=_s(i.min,i.max,t.origin)-t.originPoint,(t.scale>=N8&&t.scale<=D8||isNaN(t.scale))&&(t.scale=1),(t.translate>=R8&&t.translate<=B8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){F1(t.x,n.x,i.x,a?a.originX:void 0),F1(t.y,n.y,i.y,a?a.originY:void 0)}function X1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Jo(n)}function O8(t,n,i,a){X1(t.x,n.x,i.x,a==null?void 0:a.x),X1(t.y,n.y,i.y,a==null?void 0:a.y)}function G1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Jo(n)}function Bd(t,n,i,a){G1(t.x,n.x,i.x,a==null?void 0:a.x),G1(t.y,n.y,i.y,a==null?void 0:a.y)}function q1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function z8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ua.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);t===u&&(h-=n),t.min=q1(t.min,n,i,h,c),t.max=q1(t.max,n,i,h,c)}function K1(t,n,[i,a,c],u,d){z8(t,n[i],n[a],n[c],n.scale,u,d)}const $8=["x","scaleX","originX"],I8=["y","scaleY","originY"];function Q1(t,n,i,a){K1(t.x,n,$8,i?i.x:void 0,a?a.x:void 0),K1(t.y,n,I8,i?i.y:void 0,a?a.y:void 0)}function Z1(t){return t.translate===0&&t.scale===1}function I5(t){return Z1(t.x)&&Z1(t.y)}function J1(t,n){return t.min===n.min&&t.max===n.max}function P8(t,n){return J1(t.x,n.x)&&J1(t.y,n.y)}function ex(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function P5(t,n){return ex(t.x,n.x)&&ex(t.y,n.y)}function tx(t){return Jo(t.x)/Jo(t.y)}function nx(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function ra(t){return[t("x"),t("y")]}function H8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const H5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],V8=H5.length,sx=t=>typeof t=="string"?parseFloat(t):t,ox=t=>typeof t=="number"||Et.test(t);function U8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=_s(0,(d=i.opacity)!=null?d:1,Y8(a)),t.opacityExit=_s((h=n.opacity)!=null?h:1,0,W8(a))):u&&(t.opacity=_s((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let _=0;_<V8;_++){const x=H5[_];let b=ix(n,x),w=ix(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||ox(b)===ox(w)?(t[x]=Math.max(_s(sx(b),sx(w),a),0),(ua.test(w)||ua.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=_s(n.rotate||0,i.rotate||0,a))}function ix(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const Y8=V5(0,.5,kb),W8=V5(.5,.95,zi);function V5(t,n,i){return a=>a<t?0:a>n?1:i(xl(t,n,a))}function U5(t,n,i){const a=ho(t)?t:rr(t);return a.start(Bp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const F8=(t,n)=>t.depth-n.depth;class X8{constructor(){this.children=[],this.isDirty=!1}add(n){bp(this.children,n),this.isDirty=!0}remove(n){yl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(F8),this.isDirty=!1,this.children.forEach(n)}}function G8(t,n){const i=Zo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Na(a),t(u-n))};return ns.setup(a,!0),()=>Na(a)}function vd(t){return ho(t)?t.get():t}class q8{constructor(){this.members=[]}add(n){bp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(yl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(yl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ym=["","X","Y","Z"],K8=1e3;let Q8=0;function xm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function Y5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=r5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ns,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&Y5(a)}function W5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=Q8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ej),this.nodes.forEach(aj),this.nodes.forEach(rj),this.nodes.forEach(tj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new X8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new wp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!g5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;ns.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=G8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(lx)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||fj,{onLayoutAnimationStart:j,onLayoutAnimationComplete:M}=y.getProps(),E=!this.targetLayout||!P5(this.targetLayout,w),O=!x&&b;if(this.options.layoutRoot||this.resumeFrom||O||x&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Rp(S,"layout"),onPlay:j,onComplete:M};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(_,O)}else x||lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Y5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(sj),this.nodes.forEach(ax);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(rx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(oj),this.nodes.forEach(ij),this.nodes.forEach(Z8),this.nodes.forEach(J8)):this.nodes.forEach(rx),this.clearAllSnapshots();const h=Zo.now();No.delta=da(0,1e3/60,h-No.timestamp),No.timestamp=h,No.isProcessing=!0,um.update.process(No),um.preRender.process(No),um.render.process(No),No.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nj),this.sharedNodes.forEach(cj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ns.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ns.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Jo(this.snapshot.measuredBox.x)&&!Jo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=so()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!I5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,_=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||_)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),hj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return so();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(mj))){const{scroll:_}=this.root;_&&(la(h.x,_.offset.x),la(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=so();if(Xi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const _=this.path[y],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Xi(h,d),la(h.x,x.offset.x),la(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const y=p||so();Xi(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(la(y.x,-w.scroll.offset.x),la(y.y,-w.scroll.offset.y)),jr(w.latestValues)&&bd(y,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return jr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=so();Xi(h,d);for(let y=0;y<this.path.length;y++){const _=this.path[y];if(!jr(_.latestValues))continue;let x;_.instance&&(np(_.latestValues)&&_.updateSnapshot(),x=so(),Xi(x,_.measurePageBox())),Q1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&Q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==No.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=No.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=so(),this.targetWithTransforms=so()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),O8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xi(this.target,this.layout.layoutBox),k5(this.target,this.targetDelta)):Xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||C5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=so(),this.relativeTargetOrigin=so(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Xi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===No.timestamp&&(p=!1),p)return;const{layout:y,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||_))return;Xi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;d8(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=so());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(W1(this.prevProjectionDelta.x,this.projectionDelta.x),W1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pl(),this.projectionDelta=pl(),this.projectionDeltaWithTransform=pl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},_={...this.latestValues},x=pl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=so(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,M=this.getStack(),E=!M||M.members.length<=1,O=!!(j&&!E&&this.options.crossfade===!0&&!this.path.some(dj));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const G=D/1e3;cx(x.x,d.x,G),cx(x.y,d.y,G),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),uj(this.relativeTarget,this.relativeTargetOrigin,b,G),L&&P8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=so()),Xi(L,this.relativeTarget)),j&&(this.animationValues=_,U8(_,y,this.latestValues,G,O,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ns.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=U5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(K8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:_}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&F5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||so();const x=Jo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Jo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Xi(h,p),bd(h,_),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new q8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&xm("z",d,y,this.animationValues);for(let _=0;_<ym.length;_++)xm(`rotate${ym[_]}`,d,y,this.animationValues),xm(`skew${ym[_]}`,d,y,this.animationValues);d.render();for(const _ in y)d.setStaticValue(_,y[_]),this.animationValues&&(this.animationValues[_]=y[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=H8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=y===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const M in op){if(_[M]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:L}=op[M],D=x==="none"?_[M]:E(_[M],y);if(O){const G=O.length;for(let V=0;V<G;V++)d[O[V]]=D}else L?this.options.visualElement.renderState.vars[M]=D:d[M]=D}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ax),this.root.sharedNodes.clear()}}}function Z8(t){t.updateLayout()}function J8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")ra(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Jo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else F5(u,n.layoutBox,a)&&ra(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Jo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=pl();kc(h,a,n.layoutBox);const p=pl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!I5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=so();Bd(j,n.layoutBox,b.layoutBox,S);const M=so();Bd(M,a,w.layoutBox,S),P5(j,M)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function ej(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function tj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function nj(t){t.clearSnapshot()}function ax(t){t.clearMeasurements()}function sj(t){t.isLayoutDirty=!0,t.updateLayout()}function rx(t){t.isLayoutDirty=!1}function oj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function ij(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function lx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function aj(t){t.resolveTargetDelta()}function rj(t){t.calcProjection()}function lj(t){t.resetSkewAndRotation()}function cj(t){t.removeLeadSnapshot()}function cx(t,n,i){t.translate=_s(n.translate,0,i),t.scale=_s(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function ux(t,n,i,a){t.min=_s(n.min,i.min,a),t.max=_s(n.max,i.max,a)}function uj(t,n,i,a){ux(t.x,n.x,i.x,a),ux(t.y,n.y,i.y,a)}function dj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const fj={duration:.45,ease:[.4,0,.1,1]},dx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),fx=dx("applewebkit/")&&!dx("chrome/")?Math.round:zi;function hx(t){t.min=fx(t.min),t.max=fx(t.max)}function hj(t){hx(t.x),hx(t.y)}function F5(t,n,i){return t==="position"||t==="preserve-aspect"&&!L8(tx(n),tx(i),.2)}function mj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const pj=W5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bm={current:void 0},X5=W5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bm.current){const t=new pj({});t.mount(window),t.setOptions({layoutScroll:!0}),bm.current=t}return bm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Vd=g.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function mx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function _j(...t){return n=>{let i=!1;const a=t.map(c=>{const u=mx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():mx(t[c],null)}}}}function gj(...t){return g.useCallback(_j(...t),t)}class yj extends g.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function xj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=g.useId(),h=g.useRef(null),p=g.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=g.useContext(Vd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=gj(h,_);return g.useInsertionEffect(()=>{const{width:S,height:j,top:M,left:E,right:O,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!j)return;const D=i==="left"?`left: ${E}`:`right: ${O}`,G=a==="bottom"?`bottom: ${L}`:`top: ${M}`;h.current.dataset.motionPopId=d;const V=document.createElement("style");y&&(V.nonce=y);const q=c!=null?c:document.head;return q.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${G}px !important;
          }
        `),()=>{var H;(H=h.current)==null||H.removeAttribute("data-motion-pop-id"),q.contains(V)&&q.removeChild(V)}},[n]),l.jsx(yj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:g.cloneElement(t,{ref:x})})}const bj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const _=Lc(vj),x=g.useId();let b=!0,w=g.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const j of _.values())if(!j)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),g.useMemo(()=>{_.forEach((S,j)=>_.set(j,!1))},[i]),g.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(xj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function vj(){return new Map}function G5(t=!0){const n=g.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=g.useId();g.useEffect(()=>{if(t)return c(u)},[t]);const d=g.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function px(t){const n=[];return g.Children.forEach(t,i=>{g.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[_,x]=G5(d),b=g.useMemo(()=>px(t),[t]),w=d&&!_?[]:b.map(rd),S=g.useRef(!0),j=g.useRef(b),M=Lc(()=>new Map),E=g.useRef(new Set),[O,L]=g.useState(b),[D,G]=g.useState(b);xp(()=>{S.current=!1,j.current=b;for(let H=0;H<D.length;H++){const J=rd(D[H]);w.includes(J)?(M.delete(J),E.current.delete(J)):M.get(J)!==!0&&M.set(J,!1)}},[D,w.length,w.join("-")]);const V=[];if(b!==O){let H=[...b];for(let J=0;J<D.length;J++){const ae=D[J],oe=rd(ae);w.includes(oe)||(H.splice(J,0,ae),V.push(ae))}return u==="wait"&&V.length&&(H=V),G(px(H)),L(b),null}const{forceRender:q}=g.useContext(yp);return l.jsx(l.Fragment,{children:D.map(H=>{const J=rd(H),ae=d&&!_?!1:b===D||w.includes(J),oe=()=>{if(E.current.has(J))return;if(M.has(J))E.current.add(J),M.set(J,!0);else return;let Ee=!0;M.forEach(Ve=>{Ve||(Ee=!1)}),Ee&&(q==null||q(),G(j.current),d&&(x==null||x()),a&&a())};return l.jsx(bj,{isPresent:ae,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:ae?void 0:oe,anchorX:h,anchorY:p,children:H},J)})})},q5=g.createContext({strict:!1}),_x={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let gx=!1;function wj(){if(gx)return;const t={};for(const n in _x)t[n]={isEnabled:i=>_x[n].some(a=>!!i[a])};b5(t),gx=!0}function K5(){return wj(),l8()}function Sj(t){const n=K5();for(const i in t)n[i]={...n[i],...t[i]};b5(n)}const Cj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Cj.has(t)}let Q5=t=>!Ld(t);function kj(t){typeof t=="function"&&(Q5=n=>n.startsWith("on")?!Ld(n):t(n))}try{kj(require("@emotion/is-prop-valid").default)}catch{}function jj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||ho(t[c])||(Q5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=g.createContext({});function Mj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Ej(t){const{initial:n,animate:i}=Mj(t,g.useContext(Yd));return g.useMemo(()=>({initial:n,animate:i}),[yx(n),yx(i)])}function yx(t){return Array.isArray(t)?t.join(" "):t}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Z5(t,n,i){for(const a in n)!ho(n[a])&&!E5(a,i)&&(t[a]=n[a])}function Tj({transformTemplate:t},n){return g.useMemo(()=>{const i=Fp();return Yp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Aj(t,n){const i=t.style||{},a={};return Z5(a,i,t),Object.assign(a,Tj(t,n)),a}function Nj(t,n){const i={},a=Aj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const J5=()=>({...Fp(),attrs:{}});function Dj(t,n,i,a){const c=g.useMemo(()=>{const u=J5();return A5(u,n,D5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};Z5(u,t.style,t),c.style={...u,...c.style}}return c}const Rj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xp(t){return typeof t!="string"||t.includes("-")?!1:!!(Rj.indexOf(t)>-1||/[A-Z]/u.test(t))}function Bj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Xp(t))?Dj:Nj)(n,a,c,t),y=jj(n,typeof t=="string",u),_=t!==g.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=g.useMemo(()=>ho(x)?x.get():x,[x]);return g.createElement(t,{..._,children:b})}function Lj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Oj(i,a,c,t),renderState:n()}}function Oj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=y5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Lp(t,b[w]);if(S){const{transitionEnd:j,transition:M,...E}=S;for(const O in E){let L=E[O];if(Array.isArray(L)){const D=_?L.length-1:0;L=L[D]}L!==null&&(c[O]=L)}for(const O in j)c[O]=j[O]}}}return c}const e2=t=>(n,i)=>{const a=g.useContext(Yd),c=g.useContext(zd),u=()=>Lj(t,n,a,c);return i?u():Lc(u)},zj=e2({scrapeMotionValuesFromProps:Wp,createRenderState:Fp}),$j=e2({scrapeMotionValuesFromProps:R5,createRenderState:J5}),Ij=Symbol.for("motionComponentSymbol");function Pj(t,n,i){const a=g.useRef(i);g.useInsertionEffect(()=>{a.current=i});const c=g.useRef(null);return g.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const t2=g.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Hj(t,n,i,a,c,u){var L,D;const{visualElement:d}=g.useContext(Yd),h=g.useContext(q5),p=g.useContext(zd),y=g.useContext(Vd),_=y.reducedMotion,x=y.skipAnimations,b=g.useRef(null),w=g.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=g.useContext(t2);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Vj(b.current,i,c,j);const M=g.useRef(!1);g.useInsertionEffect(()=>{S&&M.current&&S.update(i,p)});const E=i[a5],O=g.useRef(!!E&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,E))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,E)));return xp(()=>{w.current=!0,S&&(M.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),O.current&&S.animationState&&S.animationState.animateChanges())}),g.useEffect(()=>{S&&(!O.current&&S.animationState&&S.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var G;(G=window.MotionHandoffMarkAsComplete)==null||G.call(window,E)}),O.current=!1),S.enteringChildren=void 0)}),S}function Vj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:n2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:_})}function n2(t){if(t)return t.options.allowProjection!==!1?t.projection:n2(t.parent)}function vm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,_;a&&Sj(a);const u=i?i==="svg":Xp(t),d=u?$j:zj;function h(x,b){let w;const S={...g.useContext(Vd),...x,layoutId:Uj(x)},{isStatic:j}=S,M=Ej(x),E=d(x,j);if(!j&&typeof window<"u"){Yj();const O=Wj(S);w=O.MeasureLayout,M.visualElement=Hj(t,E,S,c,O.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:M,children:[w&&M.visualElement?l.jsx(w,{visualElement:M.visualElement,...S}):null,Bj(t,x,Pj(E,M.visualElement,b),E,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(y=t.displayName)!=null?y:t.name)!=null?_:""})`}`;const p=g.forwardRef(h);return p[Ij]=t,p}function Uj({layoutId:t}){const n=g.useContext(yp).id;return n&&t!==void 0?n+"-"+t:t}function Yj(t,n){g.useContext(q5).strict}function Wj(t){const n=K5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Fj(t,n){if(typeof Proxy>"u")return vm;const i=new Map,a=(u,d)=>vm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,vm(d,void 0,t,n)),i.get(d))})}const Xj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Xp(t))?new B5(n):new T5(n,{allowProjection:t!==g.Fragment})};class Gj extends lr{constructor(n){super(n),n.animationState||(n.animationState=T8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let qj=0;class Kj extends lr{constructor(){super(...arguments),this.id=qj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Qj={animation:{Feature:Gj},exit:{Feature:Kj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Zj=t=>n=>Hp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,Zj(i),a)}const s2=({current:t})=>t?t.ownerDocument.defaultView:null,xx=(t,n)=>Math.abs(t-n);function Jj(t,n){const i=xx(t.x,n.x),a=xx(t.y,n.y);return Math.sqrt(i**2+a**2)}const bx=new Set(["auto","scroll"]);class o2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=wm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Jj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:M}=w,{timestamp:E}=No;this.history.push({...M,timestamp:E});const{onStart:O,onMove:L}=this.handlers;S||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),ns.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:M,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=wm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,O),M&&M(w,O)},!Hp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:_}=y,{timestamp:x}=No;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,wm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(bx.has(a.overflowX)||bx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ns.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function vx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function wm({point:t},n){return{point:t,delta:vx(t,i2(n)),offset:vx(t,eM(n)),velocity:tM(n,.1)}}function eM(t){return t[0]}function i2(t){return t[t.length-1]}function tM(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=i2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ui(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ui(n)*2&&(a=t[1]);const u=Oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function nM(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?_s(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?_s(i,t,a.max):Math.min(t,i)),t}function wx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function sM(t,{top:n,left:i,bottom:a,right:c}){return{x:wx(t.x,i,c),y:wx(t.y,n,a)}}function Sx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function oM(t,n){return{x:Sx(t.x,n.x),y:Sx(t.y,n.y)}}function iM(t,n){let i=.5;const a=Jo(t),c=Jo(n);return c>a?i=xl(n.min,n.max-a,t.min):a>c&&(i=xl(t.min,t.max-c,n.min)),da(0,1,i)}function aM(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function rM(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:Cx(t,"left","right"),y:Cx(t,"top","bottom")}}function Cx(t,n,i){return{min:kx(t,n),max:kx(t,i)}}function kx(t,n){return typeof t=="number"?t:t[n]||0}const lM=new WeakMap;class cM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=so(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ik(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ra(E=>{let O=this.getAxisMotionValue(E).get()||0;if(ua.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[E];D&&(O=Jo(D)*(parseFloat(O)/100))}}this.originPoint[E]=O}),j&&ns.update(()=>j(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:M}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=b;if(S&&this.currentDirection===null){this.currentDirection=dM(E),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),M&&ns.update(()=>M(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new o2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:s2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ns.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=nM(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=sM(a.layoutBox,n):this.constraints=!1,this.elastic=rM(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ra(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=aM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=f8(a,c.root,this.visualElement.getTransformPagePoint());let d=oM(c.layout.layoutBox,u);if(i){const h=i(c8(d));this.hasMutatedConstraints=!!h,h&&(d=S5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=ra(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Bp(n,a,0,i,this.visualElement,!1))}stopAnimation(){ra(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ra(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ra(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=iM({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ra(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(_s(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lM.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&Wk(b);_&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=uM(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ns.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:_})=>{this.isDragging&&_&&(ra(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function jx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function uM(t,n,i){const a=R1(t,jx(i)),c=R1(n,jx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function dM(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class fM extends lr{constructor(n){super(n),this.removeGroupControls=zi,this.removeListeners=zi,this.controls=new cM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Sm=t=>(n,i)=>{t&&ns.update(()=>t(n,i),!1,!0)};class hM extends lr{constructor(){super(...arguments),this.removePointerDownListener=zi}onPointerDown(n){this.session=new o2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:s2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:Sm(n),onStart:Sm(i),onMove:Sm(a),onEnd:(u,d)=>{delete this.session,c&&ns.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Cm=!1;class mM extends g.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Cm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Cm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ns.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Pp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Cm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function a2(t){const[n,i]=G5(),a=g.useContext(yp);return l.jsx(mM,{...t,layoutGroup:a,switchLayoutGroup:g.useContext(t2),isPresent:n,safeToRemove:i})}const pM={pan:{Feature:hM},drag:{Feature:fM,ProjectionNode:X5,MeasureLayout:a2}};function Mx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ns.postRender(()=>u(n,Ic(n)))}class _M extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=Hk(n,(i,a)=>(Mx(this.node,a,"Start"),c=>Mx(this.node,c,"End"))))}unmount(){}}class gM extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ex(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ns.postRender(()=>u(n,Ic(n)))}class yM extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Xk(n,(c,u)=>(Ex(this.node,u,"Start"),(d,{success:h})=>Ex(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,km=new WeakMap,xM=t=>{const n=rp.get(t.target);n&&n(t)},bM=t=>{t.forEach(xM)};function vM({root:t,...n}){const i=t||document;km.has(i)||km.set(i,{});const a=km.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(bM,{root:t,...n})),a[c]}function wM(t,n,i){const a=vM(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const SM={some:0,all:1};class CM extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:SM[c]},h=y=>{const{isIntersecting:_}=y;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(y)};this.stopObserver=wM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(kM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function kM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const jM={inView:{Feature:CM},tap:{Feature:yM},focus:{Feature:gM},hover:{Feature:_M}},MM={layout:{ProjectionNode:X5,MeasureLayout:a2}},EM={...Qj,...jM,...pM,...MM},ci=Fj(EM,Xj);function lp(t){const n=Lc(()=>rr(t)),{isStatic:i}=g.useContext(Vd);if(i){const[,a]=g.useState(t);g.useEffect(()=>n.on("change",a),[])}return n}function r2(t,n){const i=lp(n()),a=()=>i.set(n());return a(),xp(()=>{const c=()=>ns.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Na(a)}}),i}function TM(t){Cc.current=[],t();const n=r2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return TM(t);const u=typeof n=="function"?n:n8(n,i,a),d=Array.isArray(t)?Tx(t,u):Tx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Tx(t,n){const i=Lc(()=>[]);return r2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Gp(t){return typeof t=="object"&&!Array.isArray(t)}function l2(t,n,i,a){return t==null?[]:typeof t=="string"&&Gp(n)?Ip(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function AM(t,n,i){return t*(n+1)}function Ax(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function NM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(yl(t,c),a--)}}function DM(t,n,i,a,c,u){NM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:_s(c,u,a[d]),easing:Tb(i,d)})}function RM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function BM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const LM="easeInOut";function OM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,Ax(x,S.at,_,y));continue}let[j,M,E={}]=S;E.at!==void 0&&(x=Ax(x,E.at,_,y));let O=0;const L=(D,G,V,q=0,H=0)=>{const J=zM(D),{delay:ae=0,times:oe=Wb(J),type:Ee=n.type||"keyframes",repeat:Ve,repeatType:ee,repeatDelay:fe=0,...I}=G;let{ease:se=n.ease||"easeOut",duration:W}=G;const he=typeof ae=="function"?ae(q,H):ae,Me=J.length,$=Dp(Ee)?Ee:c==null?void 0:c[Ee||"keyframes"];if(Me<=2&&$){let be=100;if(Me===2&&PM(J)){const Pe=J[1]-J[0];be=Math.abs(Pe)}const Ae={...n,...I};W!==void 0&&(Ae.duration=ui(W));const Ue=Hb(Ae,be,$);se=Ue.ease,W=Ue.duration}W!=null||(W=u);const ue=x+he;oe.length===1&&oe[0]===0&&(oe[1]=1);const X=oe.length-J.length;if(X>0&&Yb(oe,X),J.length===1&&J.unshift(null),Ve){W=AM(W,Ve);const be=[...J],Ae=[...oe];se=Array.isArray(se)?[...se]:[se];const Ue=[...se];for(let Pe=0;Pe<Ve;Pe++){J.push(...be);for(let at=0;at<be.length;at++)oe.push(Ae[at]+(Pe+1)),se.push(at===0?"linear":Tb(Ue,at-1))}RM(oe,Ve)}const de=ue+W;DM(V,J,se,oe,ue,de),O=Math.max(he+W,O),b=Math.max(de,b)};if(ho(j)){const D=Nx(j,h);L(M,E,Dx("default",D))}else{const D=l2(j,M,a,p),G=D.length;for(let V=0;V<G;V++){M=M,E=E;const q=D[V],H=Nx(q,h);for(const J in M)L(M[J],$M(E,J),Dx(J,H),V,G)}}_=x,x+=O}return h.forEach((w,S)=>{for(const j in w){const M=w[j];M.sort(BM);const E=[],O=[],L=[];for(let q=0;q<M.length;q++){const{at:H,value:J,easing:ae}=M[q];E.push(J),O.push(xl(0,b,H)),L.push(ae||"easeOut")}O[0]!==0&&(O.unshift(0),E.unshift(E[0]),L.unshift(LM)),O[O.length-1]!==1&&(O.push(1),E.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const D=d.get(S);D.keyframes[j]=E;const{type:G,...V}=n;D.transition[j]={...V,duration:b,ease:L,times:O,...i}}}),d}function Nx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Dx(t,n){return n[t]||(n[t]=[]),n[t]}function zM(t){return Array.isArray(t)?t:[t]}function $M(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const IM=t=>typeof t=="number",PM=t=>t.every(IM);function HM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!g5(t)?new B5(n):new T5(n);i.mount(t),Nc.set(t,i)}function VM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new x8(n);i.mount(t),Nc.set(t,i)}function UM(t,n){return ho(t)||typeof t=="number"||typeof t=="string"&&!Gp(n)}function c2(t,n,i,a){const c=[];if(UM(t,n))c.push(U5(t,Gp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=l2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?HM:VM;Nc.has(p)||y(p);const _=Nc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...zp(_,{...n,transition:x},{}))}}return c}function YM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return OM(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...c2(p,d,h))}),a}function WM(t){return Array.isArray(t)&&t.some(Array.isArray)}function FM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(WM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=YM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=c2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new lk(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{yl(n.animations,y)})),y}return a}const Rx=FM();var XM=Object.freeze({}),GM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),M=d.get(j);(M==null?void 0:M.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:XM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],_=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},sn=new GM;function qM(t,n,i){const a=g.useId(),c=`${t}-${a}`,u=g.useRef(n),d=JSON.stringify(n);u.current=n;const h=g.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=g.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);g.useEffect(()=>(sn.registerPanel(c,t,u.current,p.current),()=>sn.unregisterPanel(c)),[c,t]);const _=g.useRef(!1);g.useEffect(()=>{if(!_.current){_.current=!0;return}sn.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),g.useEffect(()=>sn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=g.useSyncExternalStore(b=>sn.subscribe(c,b),()=>sn.getValues(c),()=>sn.getValues(c));return u2(n,x,"")}function u2(t,n,i){var c,u,d,h,p,y,_,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const M=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[M])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[M])!=null?u:j;else if(KM(j)||QM(j))a[S]=(d=n[M])!=null?d:j;else if(ZM(j))a[S]=(h=n[M])!=null?h:j;else if(JM(j)){const E=(p=j.default)!=null?p:n7(j.options);a[S]=(y=n[M])!=null?y:E}else e7(j)?a[S]=(x=(_=n[M])!=null?_:j.default)!=null?x:"#000000":t7(j)?a[S]=(w=(b=n[M])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=u2(j,n,M))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function KM(t){return kl(t,"spring")}function QM(t){return kl(t,"easing")}function ZM(t){return kl(t,"action")}function JM(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function e7(t){return kl(t,"color")}function t7(t){return kl(t,"text")}function n7(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,_;const u=sn.getValue(t,n),d=(y=i.min)!=null?y:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));sn.updateValue(t,n,Sd(p,a))}function s7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function jm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function d2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=d2(i.children,n);if(a)return a}}return null}var fd=4;function o7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function i7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=o7(n);return t.key?`${f2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function a7(t){return t.key?`${f2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function f2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var h2=g.createContext({activePanelId:null,activePath:null});function r7({children:t}){const[n,i]=g.useState({activePanelId:null,activePath:null}),a=g.useRef(new Set),c=g.useRef(!1),u=g.useRef(null),d=g.useRef(0),h=g.useCallback(p=>{var y;for(const _ of a.current){const x=sn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((y=S.interaction)!=null?y:"scroll")!==p)continue;const j=d2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return g.useEffect(()=>{const p=j=>{if(dd())return;const M=j.key.toLowerCase();if((M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const G=M==="arrowright"||M==="arrowup"?1:-1,V=mc(D.control,D.shortcut);pc(D.panelId,D.path,D.control,V,G);return}}const E=a.current.has(M);a.current.add(M);const O=jm(j),L=sn.resolveShortcutTarget(M,O);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!E&&L.control.type==="toggle")){const D=sn.getValue(L.panelId,L.path);sn.updateValue(L.panelId,L.path,!D)}E||(u.current=null,d.current=0)},y=j=>{const M=j.key.toLowerCase();if(a.current.delete(M),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let E=!1;for(const O of a.current){const L=jm(j),D=sn.resolveShortcutTarget(O,L);if(D){i({activePanelId:D.panelId,activePath:D.path}),E=!0;break}}E||i({activePanelId:null,activePath:null})}},_=j=>{var O,L;if(dd())return;const M=jm(j);if(a.current.size>0)for(const D of a.current){const G=sn.resolveShortcutTarget(D,M);if(!G)continue;const{panelId:V,path:q,control:H}=G;if(((L=(O=H.shortcut)==null?void 0:O.interaction)!=null?L:"scroll")!=="scroll"||H.type!=="slider")continue;j.preventDefault();const ae=mc(H,H.shortcut),oe=j.deltaY>0?-1:1;pc(V,q,H,ae,oe);return}const E=sn.resolveScrollOnlyTargets();for(const{panelId:D,path:G,control:V,shortcut:q}of E){if(V.type!=="slider")continue;j.preventDefault();const H=mc(V,q),J=j.deltaY>0?-1:1;pc(D,G,V,H,J);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(dd()||a.current.size===0)return;if(c.current){const E=h("drag");if(E&&u.current!==null){const O=j.clientX-u.current;u.current=j.clientX,d.current+=O;const L=mc(E.control,E.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,pc(E.panelId,E.path,E.control,L,D))}return}const M=h("move");if(M){if(u.current===null){u.current=j.clientX;return}const E=j.clientX-u.current;u.current=j.clientX,d.current+=E;const O=mc(M.control,M.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(M.panelId,M.path,M.control,O,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(h2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",l7="M5 12.75L10 19L19 5",Mm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},c7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],u7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Bx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=g.useState(i),[y,_]=g.useState(!i),x=g.useRef(null),[b,w]=g.useState(void 0),[S,j]=g.useState(typeof window<"u"?window.innerHeight:800);g.useEffect(()=>{if(!a)return;const O=()=>j(window.innerHeight);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[a]),g.useEffect(()=>{const O=x.current;if(!O)return;const L=new ResizeObserver(()=>{if(h){const D=O.offsetHeight;w(G=>G===D?G:D)}});return L.observe(O),()=>L.disconnect()},[h]);const M=()=>{if(c&&a)return;const O=!h;p(O),_(!O),u==null||u(O)},E=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:M,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Bx.path,fill:"currentColor"}),Bx.circles.map((O,L)=>l.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ci.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:O=>O.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ci.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:E});const O=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ci.div,{className:"dialkit-panel-inner",style:O,onClick:h?void 0:M,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:E})}return E}var d7=3,f7=32,h7=200,m7=8;function Po({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var dt;const y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=g.useRef(null),w=g.useRef(null),[S,j]=g.useState(!1),[M,E]=g.useState(!1),[O,L]=g.useState(!1),[D,G]=g.useState(!1),[V,q]=g.useState(!1),[H,J]=g.useState(!1),[ae,oe]=g.useState(""),Ee=g.useRef(null),Ve=g.useRef(null),ee=g.useRef(!0),fe=g.useRef(null),I=g.useRef(null),se=g.useRef(1),W=(n-a)/(c-a)*100,he=S||O,Me=lp(W),$=ud(Me,P=>`${P}%`),ue=ud(Me,P=>`max(5px, calc(${P}% - 9px))`),X=lp(0),de=ud(X,P=>`calc(100% + ${Math.abs(P)}px)`),be=ud(X,P=>P<0?P:0);g.useEffect(()=>{!S&&!fe.current&&Me.jump(W)},[W,S,Me]);const Ae=g.useCallback(P=>{const K=I.current;if(!K)return n;const ke=(P-K.left)/se.current,nt=y.current?y.current.offsetWidth:K.width,Ze=Math.max(0,Math.min(1,ke/nt)),je=a+Ze*(c-a);return Math.max(a,Math.min(c,je))},[a,c,n]),Ue=g.useCallback(P=>(P-a)/(c-a)*100,[a,c]),Pe=g.useCallback((P,K)=>{const me=I.current;if(!me)return 0;const ke=K<0?me.left-P:P-me.right,nt=Math.max(0,ke-f7);return K*m7*Math.sqrt(Math.min(nt/h7,1))},[]),at=g.useCallback(P=>{if(!H&&(P.preventDefault(),P.target.setPointerCapture(P.pointerId),Ve.current={x:P.clientX,y:P.clientY},ee.current=!0,j(!0),y.current)){I.current=y.current.getBoundingClientRect();const K=y.current.offsetWidth;se.current=I.current.width/K}},[H]),Ot=g.useCallback(P=>{if(!S||!Ve.current)return;const K=P.clientX-Ve.current.x,me=P.clientY-Ve.current.y,ke=Math.sqrt(K*K+me*me);if(ee.current&&ke>d7&&(ee.current=!1,E(!0)),!ee.current){const nt=I.current;nt&&(P.clientX<nt.left?X.jump(Pe(P.clientX,-1)):P.clientX>nt.right?X.jump(Pe(P.clientX,1)):X.jump(0));const Ze=Ae(P.clientX),je=Ue(Ze);fe.current&&(fe.current.stop(),fe.current=null),Me.jump(je),i(Sd(Ze,u))}},[S,Ae,Ue,i,Me,X,Pe]),Qt=g.useCallback(P=>{if(S){if(ee.current){const K=Ae(P.clientX),ke=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((K-a)/u)*u)):s7(K,a,c),nt=Ue(ke);fe.current&&fe.current.stop(),fe.current=Rx(Me,nt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{fe.current=null}}),i(Sd(ke,u))}X.get()!==0&&Rx(X,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),E(!1),Ve.current=null}},[S,Ae,Ue,i,a,c,Me,X]);g.useEffect(()=>(D&&!H&&!V?Ee.current=setTimeout(()=>{q(!0)},800):!D&&!H&&(Ee.current&&(clearTimeout(Ee.current),Ee.current=null),q(!1)),()=>{Ee.current&&clearTimeout(Ee.current)}),[D,H,V]),g.useEffect(()=>{H&&x.current&&(x.current.focus(),x.current.select())},[H]);const Fe=P=>{oe(P.target.value)},rt=()=>{const P=parseFloat(ae);if(!isNaN(P)){const K=Math.max(a,Math.min(c,P));i(Sd(K,u))}J(!1),G(!1),q(!1)},Ut=P=>{V&&(P.stopPropagation(),P.preventDefault(),J(!0),oe(n.toFixed(cp(u))))},Je=P=>{P.key==="Enter"?rt():P.key==="Escape"&&(J(!1),G(!1))},St=()=>{rt()},xe=n.toFixed(cp(u)),ne=8,Te=10,Ye=10;let We=30,Xe=78;const Ge=(dt=y.current)==null?void 0:dt.offsetWidth;Ge&&Ge>0&&(b.current&&(We=(Te+b.current.offsetWidth+ne)/Ge*100),w.current&&(Xe=(Ge-Ye-w.current.offsetWidth-ne)/Ge*100));const ht=W<We||W>Xe,pt=he?ht?.1:M?.9:.5:0,At=(c-a)/u,qt=At<=10?Array.from({length:At-1},(P,K)=>{const me=(K+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},K)}):Array.from({length:9},(P,K)=>{const me=(K+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},K)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ci.div,{ref:_,className:`dialkit-slider ${he?"dialkit-slider-active":""}`,onPointerDown:at,onPointerMove:Ot,onPointerUp:Qt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:de,x:be},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:qt}),l.jsx(ci.div,{className:"dialkit-slider-fill",style:{width:$}}),l.jsx(ci.div,{className:"dialkit-slider-handle",style:{left:ue,y:"-50%"},animate:{opacity:pt,scaleX:he?1:.25,scaleY:he&&ht?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:i7(h)})]}),H?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:Fe,onKeyDown:Je,onBlur:St,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${V?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>G(!0),onMouseLeave:()=>G(!1),onClick:Ut,onMouseDown:P=>V&&P.stopPropagation(),style:{cursor:V?"text":"default"},children:xe})]})})}function Kp({options:t,value:n,onChange:i}){const a=g.useRef(null),c=g.useRef(!1),[u,d]=g.useState(null),h=g.useCallback(()=>{const y=a.current;if(!y)return;const _=y.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);g.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const _=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(_),children:y.label},y.value)})]})}function p7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:a7(a)})]}),l.jsx(Kp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function _7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function m2({spring:t,isSimpleMode:n}){var j,M,E,O,L;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,G=(M=t.bounce)!=null?M:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-G)*Math.sqrt(c*d)}else c=(E=t.stiffness)!=null?E:400,u=(O=t.damping)!=null?O:17,d=(L=t.mass)!=null?L:1;const h=2,p=_7(c,u,d,h),y=p.map(([,D])=>D),_=Math.min(...y),b=Math.max(...y)-_,w=p.map(([D,G],V)=>{const q=D/h*256,J=140-((G-_)/(b||1)*140*.6+140*.2);return`${V===0?"M":"L"} ${q} ${J}`}).join(" "),S=[];for(let D=1;D<4;D++){const G=64*D,V=140/4*D;S.push(l.jsx("line",{x1:G,y1:0,x2:G,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:V,x2:256,y2:V,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function g7({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=g.useSyncExternalStore(j=>sn.subscribe(t,j),()=>sn.getSpringMode(t,n),()=>sn.getSpringMode(t,n)),d=u==="simple",h=g.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{sn.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,M)=>{if(d){const{stiffness:E,damping:O,mass:L,...D}=a;c({...D,[j]:M})}else{const{visualDuration:E,bounce:O,...L}=a;c({...L,[j]:M})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(m2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function y7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function x7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,M,E,O;const u=g.useSyncExternalStore(L=>sn.subscribe(t,L),()=>sn.getTransitionMode(t,n),()=>sn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=g.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=L=>{sn.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,D)=>{if(h){const{stiffness:G,damping:V,mass:q,...H}=y;c({...H,[L]:D})}else{const{visualDuration:G,bounce:V,...q}=y;c({...q,[L]:D})}},w=(L,D)=>{const G=[..._.ease];G[L]=D,c({..._,ease:G})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(y7,{easing:_}):l.jsx(m2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"x1",value:_.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y1",value:_.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"x2",value:_.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y2",value:_.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"Duration",value:_.duration,onChange:L=>c({..._,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(v7,{ease:_.ease,onChange:L=>c({..._,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(M=y.stiffness)!=null?M:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(E=y.damping)!=null?E:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(O=y.mass)!=null?O:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Lx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function b7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function v7({ease:t,onChange:n}){const[i,a]=g.useState(!1),[c,u]=g.useState(""),d=()=>{u(Lx(t)),a(!0)},h=()=>{const y=b7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Lx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function w7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function S7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function C7(t){return t.map(n=>typeof n=="string"?{value:n,label:S7(n)}:n)}function k7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState(null),[_,x]=g.useState(null),b=C7(i),w=b.find(M=>M.value===n),S=g.useCallback(()=>{const M=d.current;if(!M)return;const E=M.getBoundingClientRect(),O=8+b.length*36,L=window.innerHeight-E.bottom-4,D=L<O&&E.top>L;x({top:D?E.top-4:E.bottom+4,left:E.left,width:E.width,above:D})},[b.length]);return g.useEffect(()=>{var E;const M=(E=d.current)==null?void 0:E.closest(".dialkit-root");y(M!=null?M:document.body)},[]),g.useEffect(()=>{c&&S()},[c,S]),g.useEffect(()=>{if(!c)return;const M=E=>{const O=E.target;d.current&&!d.current.contains(O)&&h.current&&!h.current.contains(O)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Bc.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ci.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(M=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(M.value===n),onClick:()=>{a(M.value),u(!1)},children:M.label},M.value))})}),p)]})}var j7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function M7({label:t,value:n,onChange:i}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useRef(null);g.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),j7.test(u)?i(u):d(n)}function y(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?E7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function E7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function T7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(E=>E.id===i),b=g.useCallback(()=>{var O;if(!_)return;const E=(O=d.current)==null?void 0:O.getBoundingClientRect();E&&y({top:E.bottom+4,left:E.left,width:E.width}),u(!0)},[_]),w=g.useCallback(()=>u(!1),[]),S=g.useCallback(()=>{c?w():b()},[c,b,w]);g.useEffect(()=>{if(!c)return;const E=O=>{var D,G;const L=O.target;(D=d.current)!=null&&D.contains(L)||(G=h.current)!=null&&G.contains(L)||w()};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c,w]);const j=E=>{E?sn.loadPreset(t,E):sn.clearActivePreset(t),w()},M=(E,O)=>{E.stopPropagation(),sn.deletePreset(t,O)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Bc.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ci.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(E=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(E.id===i),onClick:()=>j(E.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:E.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:O=>M(O,E.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u7.map((O,L)=>l.jsx("path",{d:O},L))})})]},E.id))]})}),document.body)]})}function A7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useContext(h2);Object.keys(t.shortcuts).length>0;const p=g.useSyncExternalStore(M=>sn.subscribe(t.id,M),()=>sn.getValues(t.id),()=>sn.getValues(t.id)),y=sn.getPresets(t.id),_=sn.getActivePresetId(t.id),x=()=>{const M=y.length+2;sn.savePreset(t.id,`Version ${M}`)},b=()=>{const M=JSON.stringify(p,null,2),E=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${M}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(E),c(!0),setTimeout(()=>c(!1),1500)},w=M=>{var O,L,D;const E=p[M.path];switch(M.type){case"slider":return l.jsx(Po,{label:M.label,value:E,onChange:G=>sn.updateValue(t.id,M.path,G),min:M.min,max:M.max,step:M.step,shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"toggle":return l.jsx(p7,{label:M.label,checked:E,onChange:G=>sn.updateValue(t.id,M.path,G),shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"spring":return l.jsx(g7,{panelId:t.id,path:M.path,label:M.label,spring:E,onChange:G=>sn.updateValue(t.id,M.path,G)},M.path);case"transition":return l.jsx(x7,{panelId:t.id,path:M.path,label:M.label,value:E,onChange:G=>sn.updateValue(t.id,M.path,G)},M.path);case"folder":return l.jsx(Od,{title:M.label,defaultOpen:(O=M.defaultOpen)!=null?O:!0,children:(L=M.children)==null?void 0:L.map(w)},M.path);case"text":return l.jsx(w7,{label:M.label,value:E,onChange:G=>sn.updateValue(t.id,M.path,G),placeholder:M.placeholder},M.path);case"select":return l.jsx(k7,{label:M.label,value:E,options:(D=M.options)!=null?D:[],onChange:G=>sn.updateValue(t.id,M.path,G)},M.path);case"color":return l.jsx(M7,{label:M.label,value:E,onChange:G=>sn.updateValue(t.id,M.path,G)},M.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>sn.triggerAction(t.id,M.path),children:M.label},M.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c7.map((M,E)=>l.jsx("path",{d:M},E))})}),l.jsx(T7,{panelId:t.id,presets:y,activePresetId:_,onAdd:x}),l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ci.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:l7})},"check"):l.jsxs(ci.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Mm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Mm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Mm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var N7=typeof process<"u"?!1:!(typeof import.meta<"u");function D7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=N7}){if(!c)return null;const[u,d]=g.useState([]),[h,p]=g.useState(!1),y=i==="inline",_=g.useRef(null),[x,b]=g.useState(null),[w,S]=g.useState(t),j=g.useRef(null),M=g.useRef(!1),E=g.useRef(null),O=g.useRef(!1);g.useEffect(()=>(p(!0),d(sn.getPanels()),sn.subscribeGlobal(()=>{d(sn.getPanels())})),[]),g.useEffect(()=>{if(!_.current||y)return;const H=new MutationObserver(()=>{var oe;const J=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!J)return;if(J.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Ee=x.x+21,Ve=window.innerWidth/2;S(Ee<Ve?"top-left":"top-right")}else S(t);b(null)}});return H.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>H.disconnect()},[y,x,t]);const L=g.useCallback(H=>{var oe;const J=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!J||J.getAttribute("data-collapsed")!=="true")return;const ae=_.current.getBoundingClientRect();E.current={pointerX:H.clientX,pointerY:H.clientY,elX:ae.left,elY:ae.top},O.current=!1,M.current=!0,H.target.setPointerCapture(H.pointerId)},[]),D=g.useCallback(H=>{if(!M.current||!E.current)return;const J=H.clientX-E.current.pointerX,ae=H.clientY-E.current.pointerY;!O.current&&Math.abs(J)+Math.abs(ae)<4||(O.current=!0,b({x:E.current.elX+J,y:E.current.elY+ae}))},[]),G=g.useCallback(H=>{var J;if(M.current&&(M.current=!1,E.current=null,O.current)){H.stopPropagation();const ae=(J=_.current)==null?void 0:J.querySelector(".dialkit-panel-inner");if(ae){const oe=Ee=>{Ee.stopPropagation()};ae.addEventListener("click",oe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const V=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,q=l.jsx(r7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:V,onPointerDown:y?void 0:L,onPointerMove:y?void 0:D,onPointerUp:y?void 0:G,children:u.map(H=>l.jsx(A7,{panel:H,defaultOpen:y||n,inline:y},H.id))})})});return y?q:Bc.createPortal(q,document.body)}const R7=()=>(qM("Git Visualizer",{preview:[1,0,1]}),null),B7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(R7,{}),l.jsx(D7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(LC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Hv.createRoot(document.getElementById("root")).render(l.jsx(B7,{children:l.jsx(yS,{})}));

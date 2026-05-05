(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Ix(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hh={exports:{}},gc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Lv(){if(ny)return gc;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return gc.Fragment=n,gc.jsx=i,gc.jsxs=i,gc}var sy;function Ov(){return sy||(sy=1,Hh.exports=Lv()),Hh.exports}var l=Ov(),Uh={exports:{}},yc={},Vh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function zv(){return oy||(oy=1,(function(t){function n(L,ae){var F=L.length;L.push(ae);e:for(;0<F;){var me=F-1>>>1,Ee=L[me];if(0<c(Ee,ae))L[me]=ae,L[F]=Ee,F=me;else break e}}function i(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var ae=L[0],F=L.pop();if(F!==ae){L[0]=F;e:for(var me=0,Ee=L.length,$=Ee>>>1;me<$;){var le=2*(me+1)-1,ne=L[le],Se=le+1,De=L[Se];if(0>c(ne,F))Se<Ee&&0>c(De,ne)?(L[me]=De,L[Se]=F,me=Se):(L[me]=ne,L[le]=F,me=le);else if(Se<Ee&&0>c(De,F))L[me]=De,L[Se]=F,me=Se;else break e}}return ae}function c(L,ae){var F=L.sortIndex-ae.sortIndex;return F!==0?F:L.id-ae.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function M(L){for(var ae=i(y);ae!==null;){if(ae.callback===null)a(y);else if(ae.startTime<=L)a(y),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=i(y)}}function q(L){if(j=!1,M(L),!S)if(i(p)!==null)S=!0,G||(G=!0,Ne());else{var ae=i(y);ae!==null&&ie(q,ae.startTime-L)}}var G=!1,W=-1,Z=5,he=-1;function pe(){return k?!0:!(t.unstable_now()-he<Z)}function be(){if(k=!1,G){var L=t.unstable_now();he=L;var ae=!0;try{e:{S=!1,j&&(j=!1,U(W),W=-1),w=!0;var F=b;try{t:{for(M(L),x=i(p);x!==null&&!(x.expirationTime>L&&pe());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var Ee=me(x.expirationTime<=L);if(L=t.unstable_now(),typeof Ee=="function"){x.callback=Ee,M(L),ae=!0;break t}x===i(p)&&a(p),M(L)}else a(p);x=i(p)}if(x!==null)ae=!0;else{var $=i(y);$!==null&&ie(q,$.startTime-L),ae=!1}}break e}finally{x=null,b=F,w=!1}ae=void 0}}finally{ae?Ne():G=!1}}}var Ne;if(typeof R=="function")Ne=function(){R(be)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,re=Ze.port2;Ze.port1.onmessage=be,Ne=function(){re.postMessage(null)}}else Ne=function(){T(be,0)};function ie(L,ae){W=T(function(){L(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(L){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var F=b;b=ae;try{return L()}finally{b=F}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(L,ae){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=b;b=L;try{return ae()}finally{b=F}},t.unstable_scheduleCallback=function(L,ae,F){var me=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=F+Ee,L={id:g++,callback:ae,priorityLevel:L,startTime:F,expirationTime:Ee,sortIndex:-1},F>me?(L.sortIndex=F,n(y,L),i(p)===null&&L===i(y)&&(j?(U(W),W=-1):j=!0,ie(q,F-me))):(L.sortIndex=Ee,n(p,L),S||w||(S=!0,G||(G=!0,Ne()))),L},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(L){var ae=b;return function(){var F=b;b=ae;try{return L.apply(this,arguments)}finally{b=F}}}})(Yh)),Yh}var iy;function $v(){return iy||(iy=1,Vh.exports=zv()),Vh.exports}var Wh={exports:{}},cn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Iv(){if(ay)return cn;ay=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w($){return $===null||typeof $!="object"?null:($=b&&$[b]||$["@@iterator"],typeof $=="function"?$:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function T($,le,ne){this.props=$,this.context=le,this.refs=k,this.updater=ne||S}T.prototype.isReactComponent={},T.prototype.setState=function($,le){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,le,"setState")},T.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function U(){}U.prototype=T.prototype;function R($,le,ne){this.props=$,this.context=le,this.refs=k,this.updater=ne||S}var M=R.prototype=new U;M.constructor=R,j(M,T.prototype),M.isPureReactComponent=!0;var q=Array.isArray;function G(){}var W={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function he($,le,ne){var Se=ne.ref;return{$$typeof:t,type:$,key:le,ref:Se!==void 0?Se:null,props:ne}}function pe($,le){return he($.type,le,$.props)}function be($){return typeof $=="object"&&$!==null&&$.$$typeof===t}function Ne($){var le={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(ne){return le[ne]})}var Ze=/\/+/g;function re($,le){return typeof $=="object"&&$!==null&&$.key!=null?Ne(""+$.key):le.toString(36)}function ie($){switch($.status){case"fulfilled":return $.value;case"rejected":throw $.reason;default:switch(typeof $.status=="string"?$.then(G,G):($.status="pending",$.then(function(le){$.status==="pending"&&($.status="fulfilled",$.value=le)},function(le){$.status==="pending"&&($.status="rejected",$.reason=le)})),$.status){case"fulfilled":return $.value;case"rejected":throw $.reason}}throw $}function L($,le,ne,Se,De){var _e=typeof $;(_e==="undefined"||_e==="boolean")&&($=null);var Le=!1;if($===null)Le=!0;else switch(_e){case"bigint":case"string":case"number":Le=!0;break;case"object":switch($.$$typeof){case t:case n:Le=!0;break;case g:return Le=$._init,L(Le($._payload),le,ne,Se,De)}}if(Le)return De=De($),Le=Se===""?"."+re($,0):Se,q(De)?(ne="",Le!=null&&(ne=Le.replace(Ze,"$&/")+"/"),L(De,le,ne,"",function(kt){return kt})):De!=null&&(be(De)&&(De=pe(De,ne+(De.key==null||$&&$.key===De.key?"":(""+De.key).replace(Ze,"$&/")+"/")+Le)),le.push(De)),1;Le=0;var ot=Se===""?".":Se+":";if(q($))for(var Ie=0;Ie<$.length;Ie++)Se=$[Ie],_e=ot+re(Se,Ie),Le+=L(Se,le,ne,_e,De);else if(Ie=w($),typeof Ie=="function")for($=Ie.call($),Ie=0;!(Se=$.next()).done;)Se=Se.value,_e=ot+re(Se,Ie++),Le+=L(Se,le,ne,_e,De);else if(_e==="object"){if(typeof $.then=="function")return L(ie($),le,ne,Se,De);throw le=String($),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.")}return Le}function ae($,le,ne){if($==null)return $;var Se=[],De=0;return L($,Se,"","",function(_e){return le.call(ne,_e,De++)}),Se}function F($){if($._status===-1){var le=$._result;le=le(),le.then(function(ne){($._status===0||$._status===-1)&&($._status=1,$._result=ne)},function(ne){($._status===0||$._status===-1)&&($._status=2,$._result=ne)}),$._status===-1&&($._status=0,$._result=le)}if($._status===1)return $._result.default;throw $._result}var me=typeof reportError=="function"?reportError:function($){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var le=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof $=="object"&&$!==null&&typeof $.message=="string"?String($.message):String($),error:$});if(!window.dispatchEvent(le))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",$);return}console.error($)},Ee={map:ae,forEach:function($,le,ne){ae($,function(){le.apply(this,arguments)},ne)},count:function($){var le=0;return ae($,function(){le++}),le},toArray:function($){return ae($,function(le){return le})||[]},only:function($){if(!be($))throw Error("React.Children.only expected to receive a single React element child.");return $}};return cn.Activity=x,cn.Children=Ee,cn.Component=T,cn.Fragment=i,cn.Profiler=c,cn.PureComponent=R,cn.StrictMode=a,cn.Suspense=p,cn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,cn.__COMPILER_RUNTIME={__proto__:null,c:function($){return W.H.useMemoCache($)}},cn.cache=function($){return function(){return $.apply(null,arguments)}},cn.cacheSignal=function(){return null},cn.cloneElement=function($,le,ne){if($==null)throw Error("The argument must be a React element, but you passed "+$+".");var Se=j({},$.props),De=$.key;if(le!=null)for(_e in le.key!==void 0&&(De=""+le.key),le)!Z.call(le,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&le.ref===void 0||(Se[_e]=le[_e]);var _e=arguments.length-2;if(_e===1)Se.children=ne;else if(1<_e){for(var Le=Array(_e),ot=0;ot<_e;ot++)Le[ot]=arguments[ot+2];Se.children=Le}return he($.type,De,Se)},cn.createContext=function($){return $={$$typeof:d,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null},$.Provider=$,$.Consumer={$$typeof:u,_context:$},$},cn.createElement=function($,le,ne){var Se,De={},_e=null;if(le!=null)for(Se in le.key!==void 0&&(_e=""+le.key),le)Z.call(le,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(De[Se]=le[Se]);var Le=arguments.length-2;if(Le===1)De.children=ne;else if(1<Le){for(var ot=Array(Le),Ie=0;Ie<Le;Ie++)ot[Ie]=arguments[Ie+2];De.children=ot}if($&&$.defaultProps)for(Se in Le=$.defaultProps,Le)De[Se]===void 0&&(De[Se]=Le[Se]);return he($,_e,De)},cn.createRef=function(){return{current:null}},cn.forwardRef=function($){return{$$typeof:h,render:$}},cn.isValidElement=be,cn.lazy=function($){return{$$typeof:g,_payload:{_status:-1,_result:$},_init:F}},cn.memo=function($,le){return{$$typeof:y,type:$,compare:le===void 0?null:le}},cn.startTransition=function($){var le=W.T,ne={};W.T=ne;try{var Se=$(),De=W.S;De!==null&&De(ne,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(G,me)}catch(_e){me(_e)}finally{le!==null&&ne.types!==null&&(le.types=ne.types),W.T=le}},cn.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},cn.use=function($){return W.H.use($)},cn.useActionState=function($,le,ne){return W.H.useActionState($,le,ne)},cn.useCallback=function($,le){return W.H.useCallback($,le)},cn.useContext=function($){return W.H.useContext($)},cn.useDebugValue=function(){},cn.useDeferredValue=function($,le){return W.H.useDeferredValue($,le)},cn.useEffect=function($,le){return W.H.useEffect($,le)},cn.useEffectEvent=function($){return W.H.useEffectEvent($)},cn.useId=function(){return W.H.useId()},cn.useImperativeHandle=function($,le,ne){return W.H.useImperativeHandle($,le,ne)},cn.useInsertionEffect=function($,le){return W.H.useInsertionEffect($,le)},cn.useLayoutEffect=function($,le){return W.H.useLayoutEffect($,le)},cn.useMemo=function($,le){return W.H.useMemo($,le)},cn.useOptimistic=function($,le){return W.H.useOptimistic($,le)},cn.useReducer=function($,le,ne){return W.H.useReducer($,le,ne)},cn.useRef=function($){return W.H.useRef($)},cn.useState=function($){return W.H.useState($)},cn.useSyncExternalStore=function($,le,ne){return W.H.useSyncExternalStore($,le,ne)},cn.useTransition=function(){return W.H.useTransition()},cn.version="19.2.4",cn}var ry;function hp(){return ry||(ry=1,Wh.exports=Iv()),Wh.exports}var Fh={exports:{}},Go={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Pv(){if(ly)return Go;ly=1;var t=hp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Go.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Go.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Go.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Go.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Go.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Go.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Go.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Go.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Go.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Go.requestFormReset=function(p){a.d.r(p)},Go.unstable_batchedUpdates=function(p,y){return p(y)},Go.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Go.useFormStatus=function(){return d.H.useHostTransitionStatus()},Go.version="19.2.4",Go}var cy;function Px(){if(cy)return Fh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Fh.exports=Pv(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Hv(){if(uy)return yc;uy=1;var t=$v(),n=hp(),i=Px();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case k:return"StrictMode";case q:return"Suspense";case G:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case R:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case M:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return s=e.displayName||null,s!==null?s:re(e.type)||"Memo";case Z:s=e._payload,e=e._init;try{return re(e(s))}catch{}}return null}var ie=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function $(e){return{current:e}}function le(e){0>Ee||(e.current=me[Ee],me[Ee]=null,Ee--)}function ne(e,s){Ee++,me[Ee]=e.current,e.current=s}var Se=$(null),De=$(null),_e=$(null),Le=$(null);function ot(e,s){switch(ne(_e,s),ne(De,e),ne(Se,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=k0(s),e=j0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}le(Se),ne(Se,e)}function Ie(){le(Se),le(De),le(_e)}function kt(e){e.memoizedState!==null&&ne(Le,e);var s=Se.current,o=j0(s,e.type);s!==o&&(ne(De,e),ne(Se,o))}function Ot(e){De.current===e&&(le(Se),le(De)),Le.current===e&&(le(Le),hc._currentValue=F)}var yt,et;function lt(e){if(yt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);yt=s&&s[1]||"",et=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+et}var Pt=!1;function an(e,s){if(!e||Pt)return"";Pt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var We=function(){throw Error()};if(Object.defineProperty(We.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(We,[])}catch(Te){var Ce=Te}Reflect.construct(e,[],We)}else{try{We.call()}catch(Te){Ce=Te}e.call(We.prototype)}}else{try{throw Error()}catch(Te){Ce=Te}(We=e())&&typeof We.catch=="function"&&We.catch(function(){})}}catch(Te){if(Te&&Ce&&typeof Te.stack=="string")return[Te.stack,Ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Q=v.split(`
`),xe=A.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<xe.length&&!xe[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===xe.length)for(r=Q.length-1,f=xe.length-1;1<=r&&0<=f&&Q[r]!==xe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==xe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==xe[f]){var ze=`
`+Q[r].replace(" at new "," at ");return e.displayName&&ze.includes("<anonymous>")&&(ze=ze.replace("<anonymous>",e.displayName)),ze}while(1<=r&&0<=f);break}}}finally{Pt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?lt(o):""}function tn(e,s){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return e.child!==s&&s!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return an(e.type,!1);case 11:return an(e.type.render,!1);case 1:return an(e.type,!0);case 31:return lt("Activity");default:return""}}function J(e){try{var s="",o=null;do s+=tn(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Oe=Object.prototype.hasOwnProperty,mt=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Ke=t.unstable_shouldYield,it=t.unstable_requestPaint,gt=t.unstable_now,xt=t.unstable_getCurrentPriorityLevel,Et=t.unstable_ImmediatePriority,Bt=t.unstable_UserBlockingPriority,ct=t.unstable_NormalPriority,Y=t.unstable_LowPriority,te=t.unstable_IdlePriority,ve=t.log,Ae=t.unstable_setDisableYieldValue,rt=null,qe=null;function Be(e){if(typeof ve=="function"&&Ae(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(rt,e)}catch{}}var ge=Math.clz32?Math.clz32:Je,tt=Math.log,Fe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(tt(e)/Fe|0)|0}var Re=256,nt=262144,St=4194304;function Ct(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Ct(r):(v&=A,v!==0?f=Ct(v):o||(o=A&~e,o!==0&&(f=Ct(o))))):(A=r&~m,A!==0?f=Ct(A):v!==0?f=Ct(v):o||(o=r&~e,o!==0&&(f=Ct(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Lt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function jt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=St;return St<<=1,(St&62914560)===0&&(St=4194304),e}function dn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function pt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ht(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Q=e.expirationTimes,xe=e.hiddenUpdates;for(o=v&~o;0<o;){var ze=31-ge(o),We=1<<ze;A[ze]=0,Q[ze]=-1;var Ce=xe[ze];if(Ce!==null)for(xe[ze]=null,ze=0;ze<Ce.length;ze++){var Te=Ce[ze];Te!==null&&(Te.lane&=-536870913)}o&=~We}r!==0&&nn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function nn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-ge(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function zt(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-ge(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function vt(e,s){var o=s&-s;return o=(o&42)!==0?1:qt(o),(o&(e.suspendedLanes|s))!==0?0:o}function qt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fn(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function Nt(e,s){var o=ae.p;try{return ae.p=e,s()}finally{ae.p=o}}var yn=Math.random().toString(36).slice(2),It="__reactFiber$"+yn,xn="__reactProps$"+yn,at="__reactContainer$"+yn,Kn="__reactEvents$"+yn,Ls="__reactListeners$"+yn,No="__reactHandles$"+yn,So="__reactResources$"+yn,Co="__reactMarker$"+yn;function mo(e){delete e[It],delete e[xn],delete e[Kn],delete e[Ls],delete e[No]}function Qt(e){var s=e[It];if(s)return s;for(var o=e.parentNode;o;){if(s=o[at]||o[It]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=R0(e);e!==null;){if(o=e[It])return o;e=R0(e)}return s}e=o,o=e.parentNode}return null}function Rn(e){if(e=e[It]||e[at]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Es(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Qn(e){var s=e[So];return s||(s=e[So]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Cn(e){e[Co]=!0}var no=new Set,Ts={};function As(e,s){mn(e,s),mn(e+"Capture",s)}function mn(e,s){for(Ts[e]=s,e=0;e<s.length;e++)no.add(s[e])}var ws=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},fs={};function ko(e){return Oe.call(fs,e)?!0:Oe.call(Ro,e)?!1:ws.test(e)?fs[e]=!0:(Ro[e]=!0,!1)}function so(e,s,o){if(ko(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Jn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Fs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Ss(e){if(!e._valueTracker){var s=Xs(e)?"checked":"value";e._valueTracker=vi(e,s,""+e[s])}}function po(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Xs(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hs=/[\n"\\]/g;function es(e){return e.replace(hs,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function oo(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+hn(s)):e.value!==""+hn(s)&&(e.value=""+hn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Cs(e,v,hn(s)):o!=null?Cs(e,v,hn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+hn(A):e.removeAttribute("name")}function In(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ss(e);return}o=o!=null?""+hn(o):"",s=s!=null?""+hn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ss(e)}function Cs(e,s,o){s==="number"&&Ds(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ms(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+hn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ps(e,s,o){if(s!=null&&(s=""+hn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+hn(o):""}function Li(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ie(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=hn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Ss(e)}function Ko(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Ki.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function wi(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&on(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&on(e,m,s[m])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return Zi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _s(){}var Oi=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pn=null,jo=null;function ri(e){var s=Rn(e);if(s&&(e=s.stateNode)){var o=e[xn]||null;e:switch(e=s.stateNode,s.type){case"input":if(oo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+es(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[xn]||null;if(!f)throw Error(a(90));oo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&po(r)}break e;case"textarea":ps(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ms(e,!!o.multiple,s,!1)}}}var $s=!1;function Bo(e,s,o){if($s)return e(s,o);$s=!0;try{var r=e(s);return r}finally{if($s=!1,(Pn!==null||jo!==null)&&(Au(),Pn&&(s=Pn,e=jo,jo=Pn=null,ri(s),e)))for(s=0;s<e.length;s++)ri(e[s])}}function bn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[xn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=!1;if(Gs)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Is=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Is=!1}var Ns=null,li=null,Wo=null;function Si(){if(Wo)return Wo;var e,s=li,o=s.length,r,f="value"in Ns?Ns.value:Ns.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Wo=f.slice(e,1<r?1-r:void 0)}function io(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function xs(){return!1}function Vn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:xs,this.isPropagationStopped=xs,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),s}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Vn(is),go=x({},is,{view:0,detail:0}),ao=Vn(go),Hn,Ps,Un,qs=x({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(Hn=e.screenX-Un.screenX,Ps=e.screenY-Un.screenY):Ps=Hn=0,Un=e),Hn)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),Qo=Vn(qs),Zo=x({},qs,{dataTransfer:0}),zi=Vn(Zo),ci=x({},go,{relatedTarget:0}),ui=Vn(ci),Lo=x({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Vn(Lo),Jo=x({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),To=Vn(Jo),Oo=x({},is,{data:0}),Rt=Vn(Oo),$i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xo(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Fo[e])?!!s[e]:!1}function Ks(){return Xo}var zo=x({},go,{key:function(e){if(e.key){var s=$i[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vn=Vn(zo),xo=x({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C=Vn(xo),X=x({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),ce=Vn(X),Me=x({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=Vn(Me),dt=x({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kt=Vn(dt),Yt=x({},is,{newState:0,oldState:0}),ln=Vn(Yt),kn=[9,13,27,32],Tn=Gs&&"CompositionEvent"in window,pn=null;Gs&&"documentMode"in document&&(pn=document.documentMode);var ts=Gs&&"TextEvent"in window&&!pn,Qs=Gs&&(!Tn||pn&&8<pn&&11>=pn),Wt=" ",jn=!1;function bs(e,s){switch(e){case"keyup":return kn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var z=!1;function H(e,s){switch(e){case"compositionend":return N(s);case"keypress":return s.which!==32?null:(jn=!0,Wt);case"textInput":return e=s.data,e===Wt&&jn?null:e;default:return null}}function ee(e,s){if(z)return e==="compositionend"||!Tn&&bs(e,s)?(e=Si(),Wo=li=Ns=null,z=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Qs&&s.locale!=="ko"?null:s.data;default:return null}}var fe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function He(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!fe[e.type]:s==="textarea"}function Ge(e,s,o,r){Pn?jo?jo.push(r):jo=[r]:Pn=r,s=zu(s,"onChange"),0<s.length&&(o=new Eo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var wt=null,sn=null;function ks(e){x0(e,0)}function D(e){var s=Es(e);if(po(s))return e}function B(e,s){if(e==="change")return s}var I=!1;if(Gs){var V;if(Gs){var E="oninput"in document;if(!E){var P=document.createElement("div");P.setAttribute("oninput","return;"),E=typeof P.oninput=="function"}V=E}else V=!1;I=V&&(!document.documentMode||9<document.documentMode)}function oe(){wt&&(wt.detachEvent("onpropertychange",K),sn=wt=null)}function K(e){if(e.propertyName==="value"&&D(sn)){var s=[];Ge(s,sn,e,zs(e)),Bo(ks,s)}}function ue(e,s,o){e==="focusin"?(oe(),wt=s,sn=o,wt.attachEvent("onpropertychange",K)):e==="focusout"&&oe()}function ke(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(sn)}function Ye(e,s){if(e==="click")return D(s)}function ft(e,s){if(e==="input"||e==="change")return D(s)}function bt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ht=typeof Object.is=="function"?Object.is:bt;function ut(e,s){if(ht(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Oe.call(s,f)||!ht(e[f],s[f]))return!1}return!0}function An(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function en(e,s){var o=An(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=An(o)}}function Zt(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?Zt(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Ft(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Ds(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Ds(e.document)}return s}function Bn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Ut=Gs&&"documentMode"in document&&11>=document.documentMode,Xt=null,as=null,Ln=null,Hs=!1;function bo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hs||Xt==null||Xt!==Ds(r)||(r=Xt,"selectionStart"in r&&Bn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ln&&ut(Ln,r)||(Ln=r,r=zu(as,"onSelect"),0<r.length&&(s=new Eo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Xt)))}function Zn(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ei={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},di={},fi={};Gs&&(fi=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Xn(e){if(di[e])return di[e];if(!ei[e])return e;var s=ei[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in fi)return di[e]=s[o];return e}var hi=Xn("animationend"),Ci=Xn("animationiteration"),pr=Xn("animationstart"),Hr=Xn("transitionrun"),Ur=Xn("transitionstart"),Vr=Xn("transitioncancel"),zl=Xn("transitionend"),$l=new Map,Yr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yr.push("scrollEnd");function mi(e,s){$l.set(e,s),As(s,[e])}var wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mn=[],Zs=0,ki=0;function ya(){for(var e=Zs,s=ki=Zs=0;s<e;){var o=Mn[s];Mn[s++]=null;var r=Mn[s];Mn[s++]=null;var f=Mn[s];Mn[s++]=null;var m=Mn[s];if(Mn[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&e_(o,f,m)}}function Ao(e,s,o,r){Mn[Zs++]=e,Mn[Zs++]=s,Mn[Zs++]=o,Mn[Zs++]=r,ki|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Rs(e,s,o,r){return Ao(e,s,o,r),Jc(e)}function _r(e,s){return Ao(e,null,null,s),Jc(e)}function e_(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-ge(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Jc(e){if(50<ac)throw ac=0,dh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Wr={};function y2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(e,s,o,r){return new y2(e,s,o,r)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,s){var o=e.alternate;return o===null?(o=ji(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function t_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function eu(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")nf(e)&&(v=1);else if(typeof e=="string")v=Sv(e,o,Se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=ji(31,o,s,f),e.elementType=he,e.lanes=m,e;case j:return gr(o.children,f,m,s);case k:v=8,f|=24;break;case T:return e=ji(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case q:return e=ji(13,o,s,f),e.elementType=q,e.lanes=m,e;case G:return e=ji(19,o,s,f),e.elementType=G,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:v=10;break e;case U:v=9;break e;case M:v=11;break e;case W:v=14;break e;case Z:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=ji(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function gr(e,s,o,r){return e=ji(7,e,r,s),e.lanes=o,e}function sf(e,s,o){return e=ji(6,e,null,s),e.lanes=o,e}function n_(e){var s=ji(18,null,null,0);return s.stateNode=e,s}function of(e,s,o){return s=ji(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var s_=new WeakMap;function Ii(e,s){if(typeof e=="object"&&e!==null){var o=s_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:J(s)},s_.set(e,s),s)}return{value:e,source:s,stack:J(s)}}var Fr=[],Xr=0,tu=null,Il=0,Pi=[],Hi=0,Ia=null,ca=1,ua="";function ba(e,s){Fr[Xr++]=Il,Fr[Xr++]=tu,tu=e,Il=s}function o_(e,s,o){Pi[Hi++]=ca,Pi[Hi++]=ua,Pi[Hi++]=Ia,Ia=e;var r=ca;e=ua;var f=32-ge(r)-1;r&=~(1<<f),o+=1;var m=32-ge(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ca=1<<32-ge(s)+f|o<<f|r,ua=m+e}else ca=1<<m|o<<f|r,ua=e}function af(e){e.return!==null&&(ba(e,1),o_(e,1,0))}function rf(e){for(;e===tu;)tu=Fr[--Xr],Fr[Xr]=null,Il=Fr[--Xr],Fr[Xr]=null;for(;e===Ia;)Ia=Pi[--Hi],Pi[Hi]=null,ua=Pi[--Hi],Pi[Hi]=null,ca=Pi[--Hi],Pi[Hi]=null}function i_(e,s){Pi[Hi++]=ca,Pi[Hi++]=ua,Pi[Hi++]=Ia,ca=s.id,ua=s.overflow,Ia=e}var $o=null,js=null,$n=!1,Pa=null,Ui=!1,lf=Error(a(519));function Ha(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(Ii(s,e)),lf}function a_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[It]=e,s[xn]=r,o){case"dialog":Nn("cancel",s),Nn("close",s);break;case"iframe":case"object":case"embed":Nn("load",s);break;case"video":case"audio":for(o=0;o<lc.length;o++)Nn(lc[o],s);break;case"source":Nn("error",s);break;case"img":case"image":case"link":Nn("error",s),Nn("load",s);break;case"details":Nn("toggle",s);break;case"input":Nn("invalid",s),In(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Nn("invalid",s);break;case"textarea":Nn("invalid",s),Li(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||S0(s.textContent,o)?(r.popover!=null&&(Nn("beforetoggle",s),Nn("toggle",s)),r.onScroll!=null&&Nn("scroll",s),r.onScrollEnd!=null&&Nn("scrollend",s),r.onClick!=null&&(s.onclick=_s),s=!0):s=!1,s||Ha(e,!0)}function r_(e){for($o=e.return;$o;)switch($o.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:$o=$o.return}}function Gr(e){if(e!==$o)return!1;if(!$n)return r_(e),$n=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||jh(e.type,e.memoizedProps)),o=!o),o&&js&&Ha(e),r_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));js=N0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));js=N0(e)}else s===27?(s=js,tr(e.type)?(e=Dh,Dh=null,js=e):js=s):js=$o?Yi(e.stateNode.nextSibling):null;return!0}function yr(){js=$o=null,$n=!1}function cf(){var e=Pa;return e!==null&&(yi===null?yi=e:yi.push.apply(yi,e),Pa=null),e}function Pl(e){Pa===null?Pa=[e]:Pa.push(e)}var uf=$(null),xr=null,va=null;function Ua(e,s,o){ne(uf,s._currentValue),s._currentValue=o}function wa(e){e._currentValue=uf.current,le(uf)}function df(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function ff(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Q=0;Q<s.length;Q++)if(A.context===s[Q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),df(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),df(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function qr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;ht(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Le.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(hc):e=[hc])}f=f.return}e!==null&&ff(s,e,o,r),s.flags|=262144}function nu(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){xr=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Io(e){return l_(xr,e)}function su(e,s){return xr===null&&br(e),l_(e,s)}function l_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},va===null){if(e===null)throw Error(a(308));va=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else va=va.next=s;return o}var x2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},b2=t.unstable_scheduleCallback,v2=t.unstable_NormalPriority,ro={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new x2,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&b2(v2,function(){e.controller.abort()})}var Ul=null,mf=0,Kr=0,Qr=null;function w2(e,s){if(Ul===null){var o=Ul=[];mf=0,Kr=gh(),Qr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return mf++,s.then(c_,c_),s}function c_(){if(--mf===0&&Ul!==null){Qr!==null&&(Qr.status="fulfilled");var e=Ul;Ul=null,Kr=0,Qr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function S2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var u_=L.S;L.S=function(e,s){Xg=gt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&w2(e,s),u_!==null&&u_(e,s)};var vr=$(null);function pf(){var e=vr.current;return e!==null?e:gs.pooledCache}function ou(e,s){s===null?ne(vr,vr.current):ne(vr,s.pool)}function d_(){var e=pf();return e===null?null:{parent:ro._currentValue,pool:e}}var Zr=Error(a(460)),_f=Error(a(474)),iu=Error(a(542)),au={then:function(){}};function f_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(_s,_s),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e;default:if(typeof s.status=="string")s.then(_s,_s);else{if(e=gs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e}throw Sr=s,Zr}}function wr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Sr=o,Zr):o}}var Sr=null;function m_(){if(Sr===null)throw Error(a(459));var e=Sr;return Sr=null,e}function p_(e){if(e===Zr||e===iu)throw Error(a(483))}var Jr=null,Vl=0;function ru(e){var s=Vl;return Vl+=1,Jr===null&&(Jr=[]),h_(Jr,e,s)}function Yl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function lu(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function __(e){function s(de,se){if(e){var ye=de.deletions;ye===null?(de.deletions=[se],de.flags|=16):ye.push(se)}}function o(de,se){if(!e)return null;for(;se!==null;)s(de,se),se=se.sibling;return null}function r(de){for(var se=new Map;de!==null;)de.key!==null?se.set(de.key,de):se.set(de.index,de),de=de.sibling;return se}function f(de,se){return de=xa(de,se),de.index=0,de.sibling=null,de}function m(de,se,ye){return de.index=ye,e?(ye=de.alternate,ye!==null?(ye=ye.index,ye<se?(de.flags|=67108866,se):ye):(de.flags|=67108866,se)):(de.flags|=1048576,se)}function v(de){return e&&de.alternate===null&&(de.flags|=67108866),de}function A(de,se,ye,Ue){return se===null||se.tag!==6?(se=sf(ye,de.mode,Ue),se.return=de,se):(se=f(se,ye),se.return=de,se)}function Q(de,se,ye,Ue){var Vt=ye.type;return Vt===j?ze(de,se,ye.props.children,Ue,ye.key):se!==null&&(se.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Z&&wr(Vt)===se.type)?(se=f(se,ye.props),Yl(se,ye),se.return=de,se):(se=eu(ye.type,ye.key,ye.props,null,de.mode,Ue),Yl(se,ye),se.return=de,se)}function xe(de,se,ye,Ue){return se===null||se.tag!==4||se.stateNode.containerInfo!==ye.containerInfo||se.stateNode.implementation!==ye.implementation?(se=of(ye,de.mode,Ue),se.return=de,se):(se=f(se,ye.children||[]),se.return=de,se)}function ze(de,se,ye,Ue,Vt){return se===null||se.tag!==7?(se=gr(ye,de.mode,Ue,Vt),se.return=de,se):(se=f(se,ye),se.return=de,se)}function We(de,se,ye){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=sf(""+se,de.mode,ye),se.return=de,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case w:return ye=eu(se.type,se.key,se.props,null,de.mode,ye),Yl(ye,se),ye.return=de,ye;case S:return se=of(se,de.mode,ye),se.return=de,se;case Z:return se=wr(se),We(de,se,ye)}if(ie(se)||Ne(se))return se=gr(se,de.mode,ye,null),se.return=de,se;if(typeof se.then=="function")return We(de,ru(se),ye);if(se.$$typeof===R)return We(de,su(de,se),ye);lu(de,se)}return null}function Ce(de,se,ye,Ue){var Vt=se!==null?se.key:null;if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Vt!==null?null:A(de,se,""+ye,Ue);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case w:return ye.key===Vt?Q(de,se,ye,Ue):null;case S:return ye.key===Vt?xe(de,se,ye,Ue):null;case Z:return ye=wr(ye),Ce(de,se,ye,Ue)}if(ie(ye)||Ne(ye))return Vt!==null?null:ze(de,se,ye,Ue,null);if(typeof ye.then=="function")return Ce(de,se,ru(ye),Ue);if(ye.$$typeof===R)return Ce(de,se,su(de,ye),Ue);lu(de,ye)}return null}function Te(de,se,ye,Ue,Vt){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number"||typeof Ue=="bigint")return de=de.get(ye)||null,A(se,de,""+Ue,Vt);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case w:return de=de.get(Ue.key===null?ye:Ue.key)||null,Q(se,de,Ue,Vt);case S:return de=de.get(Ue.key===null?ye:Ue.key)||null,xe(se,de,Ue,Vt);case Z:return Ue=wr(Ue),Te(de,se,ye,Ue,Vt)}if(ie(Ue)||Ne(Ue))return de=de.get(ye)||null,ze(se,de,Ue,Vt,null);if(typeof Ue.then=="function")return Te(de,se,ye,ru(Ue),Vt);if(Ue.$$typeof===R)return Te(de,se,ye,su(se,Ue),Vt);lu(se,Ue)}return null}function At(de,se,ye,Ue){for(var Vt=null,Yn=null,$t=se,Sn=se=0,zn=null;$t!==null&&Sn<ye.length;Sn++){$t.index>Sn?(zn=$t,$t=null):zn=$t.sibling;var Wn=Ce(de,$t,ye[Sn],Ue);if(Wn===null){$t===null&&($t=zn);break}e&&$t&&Wn.alternate===null&&s(de,$t),se=m(Wn,se,Sn),Yn===null?Vt=Wn:Yn.sibling=Wn,Yn=Wn,$t=zn}if(Sn===ye.length)return o(de,$t),$n&&ba(de,Sn),Vt;if($t===null){for(;Sn<ye.length;Sn++)$t=We(de,ye[Sn],Ue),$t!==null&&(se=m($t,se,Sn),Yn===null?Vt=$t:Yn.sibling=$t,Yn=$t);return $n&&ba(de,Sn),Vt}for($t=r($t);Sn<ye.length;Sn++)zn=Te($t,de,Sn,ye[Sn],Ue),zn!==null&&(e&&zn.alternate!==null&&$t.delete(zn.key===null?Sn:zn.key),se=m(zn,se,Sn),Yn===null?Vt=zn:Yn.sibling=zn,Yn=zn);return e&&$t.forEach(function(ar){return s(de,ar)}),$n&&ba(de,Sn),Vt}function Jt(de,se,ye,Ue){if(ye==null)throw Error(a(151));for(var Vt=null,Yn=null,$t=se,Sn=se=0,zn=null,Wn=ye.next();$t!==null&&!Wn.done;Sn++,Wn=ye.next()){$t.index>Sn?(zn=$t,$t=null):zn=$t.sibling;var ar=Ce(de,$t,Wn.value,Ue);if(ar===null){$t===null&&($t=zn);break}e&&$t&&ar.alternate===null&&s(de,$t),se=m(ar,se,Sn),Yn===null?Vt=ar:Yn.sibling=ar,Yn=ar,$t=zn}if(Wn.done)return o(de,$t),$n&&ba(de,Sn),Vt;if($t===null){for(;!Wn.done;Sn++,Wn=ye.next())Wn=We(de,Wn.value,Ue),Wn!==null&&(se=m(Wn,se,Sn),Yn===null?Vt=Wn:Yn.sibling=Wn,Yn=Wn);return $n&&ba(de,Sn),Vt}for($t=r($t);!Wn.done;Sn++,Wn=ye.next())Wn=Te($t,de,Sn,Wn.value,Ue),Wn!==null&&(e&&Wn.alternate!==null&&$t.delete(Wn.key===null?Sn:Wn.key),se=m(Wn,se,Sn),Yn===null?Vt=Wn:Yn.sibling=Wn,Yn=Wn);return e&&$t.forEach(function(Bv){return s(de,Bv)}),$n&&ba(de,Sn),Vt}function cs(de,se,ye,Ue){if(typeof ye=="object"&&ye!==null&&ye.type===j&&ye.key===null&&(ye=ye.props.children),typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case w:e:{for(var Vt=ye.key;se!==null;){if(se.key===Vt){if(Vt=ye.type,Vt===j){if(se.tag===7){o(de,se.sibling),Ue=f(se,ye.props.children),Ue.return=de,de=Ue;break e}}else if(se.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Z&&wr(Vt)===se.type){o(de,se.sibling),Ue=f(se,ye.props),Yl(Ue,ye),Ue.return=de,de=Ue;break e}o(de,se);break}else s(de,se);se=se.sibling}ye.type===j?(Ue=gr(ye.props.children,de.mode,Ue,ye.key),Ue.return=de,de=Ue):(Ue=eu(ye.type,ye.key,ye.props,null,de.mode,Ue),Yl(Ue,ye),Ue.return=de,de=Ue)}return v(de);case S:e:{for(Vt=ye.key;se!==null;){if(se.key===Vt)if(se.tag===4&&se.stateNode.containerInfo===ye.containerInfo&&se.stateNode.implementation===ye.implementation){o(de,se.sibling),Ue=f(se,ye.children||[]),Ue.return=de,de=Ue;break e}else{o(de,se);break}else s(de,se);se=se.sibling}Ue=of(ye,de.mode,Ue),Ue.return=de,de=Ue}return v(de);case Z:return ye=wr(ye),cs(de,se,ye,Ue)}if(ie(ye))return At(de,se,ye,Ue);if(Ne(ye)){if(Vt=Ne(ye),typeof Vt!="function")throw Error(a(150));return ye=Vt.call(ye),Jt(de,se,ye,Ue)}if(typeof ye.then=="function")return cs(de,se,ru(ye),Ue);if(ye.$$typeof===R)return cs(de,se,su(de,ye),Ue);lu(de,ye)}return typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint"?(ye=""+ye,se!==null&&se.tag===6?(o(de,se.sibling),Ue=f(se,ye),Ue.return=de,de=Ue):(o(de,se),Ue=sf(ye,de.mode,Ue),Ue.return=de,de=Ue),v(de)):o(de,se)}return function(de,se,ye,Ue){try{Vl=0;var Vt=cs(de,se,ye,Ue);return Jr=null,Vt}catch($t){if($t===Zr||$t===iu)throw $t;var Yn=ji(29,$t,null,de.mode);return Yn.lanes=Ue,Yn.return=de,Yn}finally{}}}var Cr=__(!0),g_=__(!1),Va=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Gn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Jc(e),e_(e,null,o),s}return Ao(e,r,s,o),Jc(e)}function Wl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,zt(e,o)}}function xf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var bf=!1;function Fl(){if(bf){var e=Qr;if(e!==null)throw e}}function Xl(e,s,o,r){bf=!1;var f=e.updateQueue;Va=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Q=A,xe=Q.next;Q.next=null,v===null?m=xe:v.next=xe,v=Q;var ze=e.alternate;ze!==null&&(ze=ze.updateQueue,A=ze.lastBaseUpdate,A!==v&&(A===null?ze.firstBaseUpdate=xe:A.next=xe,ze.lastBaseUpdate=Q))}if(m!==null){var We=f.baseState;v=0,ze=xe=Q=null,A=m;do{var Ce=A.lane&-536870913,Te=Ce!==A.lane;if(Te?(On&Ce)===Ce:(r&Ce)===Ce){Ce!==0&&Ce===Kr&&(bf=!0),ze!==null&&(ze=ze.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var At=e,Jt=A;Ce=s;var cs=o;switch(Jt.tag){case 1:if(At=Jt.payload,typeof At=="function"){We=At.call(cs,We,Ce);break e}We=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Jt.payload,Ce=typeof At=="function"?At.call(cs,We,Ce):At,Ce==null)break e;We=x({},We,Ce);break e;case 2:Va=!0}}Ce=A.callback,Ce!==null&&(e.flags|=64,Te&&(e.flags|=8192),Te=f.callbacks,Te===null?f.callbacks=[Ce]:Te.push(Ce))}else Te={lane:Ce,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ze===null?(xe=ze=Te,Q=We):ze=ze.next=Te,v|=Ce;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Te=A,A=Te.next,Te.next=null,f.lastBaseUpdate=Te,f.shared.pending=null}}while(!0);ze===null&&(Q=We),f.baseState=Q,f.firstBaseUpdate=xe,f.lastBaseUpdate=ze,m===null&&(f.shared.lanes=0),Ka|=v,e.lanes=v,e.memoizedState=We}}function y_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function x_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)y_(o[e],s)}var el=$(null),cu=$(0);function b_(e,s){e=Da,ne(cu,e),ne(el,s),Da=e|s.baseLanes}function vf(){ne(cu,Da),ne(el,el.current)}function wf(){Da=cu.current,le(el),le(cu)}var Mi=$(null),Vi=null;function Fa(e){var s=e.alternate;ne(Js,Js.current&1),ne(Mi,e),Vi===null&&(s===null||el.current!==null||s.memoizedState!==null)&&(Vi=e)}function Sf(e){ne(Js,Js.current),ne(Mi,e),Vi===null&&(Vi=e)}function v_(e){e.tag===22?(ne(Js,Js.current),ne(Mi,e),Vi===null&&(Vi=e)):Xa()}function Xa(){ne(Js,Js.current),ne(Mi,Mi.current)}function Ei(e){le(Mi),Vi===e&&(Vi=null),le(Js)}var Js=$(0);function uu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Th(o)||Ah(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Sa=0,_n=null,rs=null,lo=null,du=!1,tl=!1,kr=!1,fu=0,Gl=0,nl=null,C2=0;function Us(){throw Error(a(321))}function Cf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ht(e[o],s[o]))return!1;return!0}function kf(e,s,o,r,f,m){return Sa=m,_n=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,L.H=e===null||e.memoizedState===null?og:Pf,kr=!1,m=o(r,f),kr=!1,tl&&(m=S_(s,o,r,f)),w_(e),m}function w_(e){L.H=Ql;var s=rs!==null&&rs.next!==null;if(Sa=0,lo=rs=_n=null,du=!1,Gl=0,nl=null,s)throw Error(a(300));e===null||co||(e=e.dependencies,e!==null&&nu(e)&&(co=!0))}function S_(e,s,o,r){_n=e;var f=0;do{if(tl&&(nl=null),Gl=0,tl=!1,25<=f)throw Error(a(301));if(f+=1,lo=rs=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=ig,m=s(o,r)}while(tl);return m}function k2(){var e=L.H,s=e.useState()[0];return s=typeof s.then=="function"?ql(s):s,e=e.useState()[0],(rs!==null?rs.memoizedState:null)!==e&&(_n.flags|=1024),s}function jf(){var e=fu!==0;return fu=0,e}function Mf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Ef(e){if(du){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}du=!1}Sa=0,lo=rs=_n=null,tl=!1,Gl=fu=0,nl=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?_n.memoizedState=lo=e:lo=lo.next=e,lo}function eo(){if(rs===null){var e=_n.alternate;e=e!==null?e.memoizedState:null}else e=rs.next;var s=lo===null?_n.memoizedState:lo.next;if(s!==null)lo=s,rs=e;else{if(e===null)throw _n.alternate===null?Error(a(467)):Error(a(310));rs=e,e={memoizedState:rs.memoizedState,baseState:rs.baseState,baseQueue:rs.baseQueue,queue:rs.queue,next:null},lo===null?_n.memoizedState=lo=e:lo=lo.next=e}return lo}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var s=Gl;return Gl+=1,nl===null&&(nl=[]),e=h_(nl,e,s),s=_n,(lo===null?s.memoizedState:lo.next)===null&&(s=s.alternate,L.H=s===null||s.memoizedState===null?og:Pf),e}function mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===R)return Io(e)}throw Error(a(438,String(e)))}function Tf(e){var s=null,o=_n.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=_n.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=hu(),_n.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=pe;return s.index++,o}function Ca(e,s){return typeof s=="function"?s(e):s}function pu(e){var s=eo();return Af(s,rs,e)}function Af(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Q=null,xe=s,ze=!1;do{var We=xe.lane&-536870913;if(We!==xe.lane?(On&We)===We:(Sa&We)===We){var Ce=xe.revertLane;if(Ce===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),We===Kr&&(ze=!0);else if((Sa&Ce)===Ce){xe=xe.next,Ce===Kr&&(ze=!0);continue}else We={lane:0,revertLane:xe.revertLane,gesture:null,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null},Q===null?(A=Q=We,v=m):Q=Q.next=We,_n.lanes|=Ce,Ka|=Ce;We=xe.action,kr&&o(m,We),m=xe.hasEagerState?xe.eagerState:o(m,We)}else Ce={lane:We,revertLane:xe.revertLane,gesture:xe.gesture,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null},Q===null?(A=Q=Ce,v=m):Q=Q.next=Ce,_n.lanes|=We,Ka|=We;xe=xe.next}while(xe!==null&&xe!==s);if(Q===null?v=m:Q.next=A,!ht(m,e.memoizedState)&&(co=!0,ze&&(o=Qr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Df(e){var s=eo(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);ht(m,s.memoizedState)||(co=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function C_(e,s,o){var r=_n,f=eo(),m=$n;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!ht((rs||f).memoizedState,o);if(v&&(f.memoizedState=o,co=!0),f=f.queue,Bf(M_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,sl(9,{destroy:void 0},j_.bind(null,r,f,o,s),null),gs===null)throw Error(a(349));m||(Sa&127)!==0||k_(r,s,o)}return o}function k_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=_n.updateQueue,s===null?(s=hu(),_n.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function j_(e,s,o,r){s.value=o,s.getSnapshot=r,E_(s)&&T_(e)}function M_(e,s,o){return o(function(){E_(s)&&T_(e)})}function E_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ht(e,o)}catch{return!0}}function T_(e){var s=_r(e,2);s!==null&&xi(s,e,2)}function Nf(e){var s=ti();if(typeof e=="function"){var o=e;if(e=o(),kr){Be(!0);try{o()}finally{Be(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},s}function A_(e,s,o,r){return e.baseState=o,Af(e,rs,typeof r=="function"?r:Ca)}function j2(e,s,o,r,f){if(yu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};L.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,D_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function D_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=L.T,v={};L.T=v;try{var A=o(f,r),Q=L.S;Q!==null&&Q(v,A),N_(e,s,A)}catch(xe){Rf(e,s,xe)}finally{m!==null&&v.types!==null&&(m.types=v.types),L.T=m}}else try{m=o(f,r),N_(e,s,m)}catch(xe){Rf(e,s,xe)}}function N_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){R_(e,s,r)},function(r){return Rf(e,s,r)}):R_(e,s,o)}function R_(e,s,o){s.status="fulfilled",s.value=o,B_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,D_(e,o)))}function Rf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,B_(s),s=s.next;while(s!==r)}e.action=null}function B_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function L_(e,s){return s}function O_(e,s){if($n){var o=gs.formState;if(o!==null){e:{var r=_n;if($n){if(js){t:{for(var f=js,m=Ui;f.nodeType!==8;){if(!m){f=null;break t}if(f=Yi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){js=Yi(f.nextSibling),r=f.data==="F!";break e}}Ha(r)}r=!1}r&&(s=o[0])}}return o=ti(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:s},o.queue=r,o=tg.bind(null,_n,r),r.dispatch=o,r=Nf(!1),m=If.bind(null,_n,!1,r.queue),r=ti(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=j2.bind(null,_n,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function z_(e){var s=eo();return $_(s,rs,e)}function $_(e,s,o){if(s=Af(e,s,L_)[0],e=pu(Ca)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=ql(s)}catch(v){throw v===Zr?iu:v}else r=s;s=eo();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(_n.flags|=2048,sl(9,{destroy:void 0},M2.bind(null,f,o),null)),[r,m,e]}function M2(e,s){e.action=s}function I_(e){var s=eo(),o=rs;if(o!==null)return $_(s,o,e);eo(),s=s.memoizedState,o=eo();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function sl(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=_n.updateQueue,s===null&&(s=hu(),_n.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function P_(){return eo().memoizedState}function _u(e,s,o,r){var f=ti();_n.flags|=e,f.memoizedState=sl(1|s,{destroy:void 0},o,r===void 0?null:r)}function gu(e,s,o,r){var f=eo();r=r===void 0?null:r;var m=f.memoizedState.inst;rs!==null&&r!==null&&Cf(r,rs.memoizedState.deps)?f.memoizedState=sl(s,m,o,r):(_n.flags|=e,f.memoizedState=sl(1|s,m,o,r))}function H_(e,s){_u(8390656,8,e,s)}function Bf(e,s){gu(2048,8,e,s)}function E2(e){_n.flags|=4;var s=_n.updateQueue;if(s===null)s=hu(),_n.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function U_(e){var s=eo().memoizedState;return E2({ref:s,nextImpl:e}),function(){if((Gn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function V_(e,s){return gu(4,2,e,s)}function Y_(e,s){return gu(4,4,e,s)}function W_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function F_(e,s,o){o=o!=null?o.concat([e]):null,gu(4,4,W_.bind(null,s,e),o)}function Lf(){}function X_(e,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Cf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function G_(e,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Cf(s,r[1]))return r[0];if(r=e(),kr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r}function Of(e,s,o){return o===void 0||(Sa&1073741824)!==0&&(On&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=qg(),_n.lanes|=e,Ka|=e,o)}function q_(e,s,o,r){return ht(o,s)?o:el.current!==null?(e=Of(e,o,r),ht(e,s)||(co=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(On&261930)===0?(co=!0,e.memoizedState=o):(e=qg(),_n.lanes|=e,Ka|=e,s)}function K_(e,s,o,r,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var v=L.T,A={};L.T=A,If(e,!1,s,o);try{var Q=f(),xe=L.S;if(xe!==null&&xe(A,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var ze=S2(Q,r);Kl(e,s,ze,Di(e))}else Kl(e,s,r,Di(e))}catch(We){Kl(e,s,{then:function(){},status:"rejected",reason:We},Di())}finally{ae.p=m,v!==null&&A.types!==null&&(v.types=A.types),L.T=v}}function T2(){}function zf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=Q_(e).queue;K_(e,f,s,F,o===null?T2:function(){return Z_(e),o(r)})}function Q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Z_(e){var s=Q_(e);s.next===null&&(s=e.alternate.memoizedState),Kl(e,s.next.queue,{},Di())}function $f(){return Io(hc)}function J_(){return eo().memoizedState}function eg(){return eo().memoizedState}function A2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=Di();e=Ya(o);var r=Wa(s,e,o);r!==null&&(xi(r,s,o),Wl(r,s,o)),s={cache:hf()},e.payload=s;return}s=s.return}}function D2(e,s,o){var r=Di();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},yu(e)?ng(s,o):(o=Rs(e,s,o,r),o!==null&&(xi(o,e,r),sg(o,s,r)))}function tg(e,s,o){var r=Di();Kl(e,s,o,r)}function Kl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(yu(e))ng(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,ht(A,v))return Ao(e,s,f,0),gs===null&&ya(),!1}catch{}finally{}if(o=Rs(e,s,f,r),o!==null)return xi(o,e,r),sg(o,s,r),!0}return!1}function If(e,s,o,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yu(e)){if(s)throw Error(a(479))}else s=Rs(e,o,r,2),s!==null&&xi(s,e,2)}function yu(e){var s=e.alternate;return e===_n||s!==null&&s===_n}function ng(e,s){tl=du=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function sg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,zt(e,o)}}var Ql={readContext:Io,use:mu,useCallback:Us,useContext:Us,useEffect:Us,useImperativeHandle:Us,useLayoutEffect:Us,useInsertionEffect:Us,useMemo:Us,useReducer:Us,useRef:Us,useState:Us,useDebugValue:Us,useDeferredValue:Us,useTransition:Us,useSyncExternalStore:Us,useId:Us,useHostTransitionStatus:Us,useFormState:Us,useActionState:Us,useOptimistic:Us,useMemoCache:Us,useCacheRefresh:Us};Ql.useEffectEvent=Us;var og={readContext:Io,use:mu,useCallback:function(e,s){return ti().memoizedState=[e,s===void 0?null:s],e},useContext:Io,useEffect:H_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,_u(4194308,4,W_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return _u(4194308,4,e,s)},useInsertionEffect:function(e,s){_u(4,2,e,s)},useMemo:function(e,s){var o=ti();s=s===void 0?null:s;var r=e();if(kr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=ti();if(o!==void 0){var f=o(s);if(kr){Be(!0);try{o(s)}finally{Be(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=D2.bind(null,_n,e),[r.memoizedState,e]},useRef:function(e){var s=ti();return e={current:e},s.memoizedState=e},useState:function(e){e=Nf(e);var s=e.queue,o=tg.bind(null,_n,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Lf,useDeferredValue:function(e,s){var o=ti();return Of(o,e,s)},useTransition:function(){var e=Nf(!1);return e=K_.bind(null,_n,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=_n,f=ti();if($n){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),gs===null)throw Error(a(349));(On&127)!==0||k_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,H_(M_.bind(null,r,m,e),[e]),r.flags|=2048,sl(9,{destroy:void 0},j_.bind(null,r,m,o,s),null),o},useId:function(){var e=ti(),s=gs.identifierPrefix;if($n){var o=ua,r=ca;o=(r&~(1<<32-ge(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=fu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=C2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:$f,useFormState:O_,useActionState:O_,useOptimistic:function(e){var s=ti();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=If.bind(null,_n,!0,o),o.dispatch=s,[e,s]},useMemoCache:Tf,useCacheRefresh:function(){return ti().memoizedState=A2.bind(null,_n)},useEffectEvent:function(e){var s=ti(),o={impl:e};return s.memoizedState=o,function(){if((Gn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Pf={readContext:Io,use:mu,useCallback:X_,useContext:Io,useEffect:Bf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:pu,useRef:P_,useState:function(){return pu(Ca)},useDebugValue:Lf,useDeferredValue:function(e,s){var o=eo();return q_(o,rs.memoizedState,e,s)},useTransition:function(){var e=pu(Ca)[0],s=eo().memoizedState;return[typeof e=="boolean"?e:ql(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:$f,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=eo();return A_(o,rs,e,s)},useMemoCache:Tf,useCacheRefresh:eg};Pf.useEffectEvent=U_;var ig={readContext:Io,use:mu,useCallback:X_,useContext:Io,useEffect:Bf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:Df,useRef:P_,useState:function(){return Df(Ca)},useDebugValue:Lf,useDeferredValue:function(e,s){var o=eo();return rs===null?Of(o,e,s):q_(o,rs.memoizedState,e,s)},useTransition:function(){var e=Df(Ca)[0],s=eo().memoizedState;return[typeof e=="boolean"?e:ql(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:$f,useFormState:I_,useActionState:I_,useOptimistic:function(e,s){var o=eo();return rs!==null?A_(o,rs,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:eg};ig.useEffectEvent=U_;function Hf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Uf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=Di(),f=Ya(r);f.payload=s,o!=null&&(f.callback=o),s=Wa(e,f,r),s!==null&&(xi(s,e,r),Wl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=Di(),f=Ya(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Wa(e,f,r),s!==null&&(xi(s,e,r),Wl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=Di(),r=Ya(o);r.tag=2,s!=null&&(r.callback=s),s=Wa(e,r,o),s!==null&&(xi(s,e,o),Wl(s,e,o))}};function ag(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ut(o,r)||!ut(f,m):!0}function rg(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Uf.enqueueReplaceState(s,s.state,null)}function jr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function lg(e){wn(e)}function cg(e){console.error(e)}function ug(e){wn(e)}function xu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function dg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(e,s,o){return o=Ya(o),o.tag=3,o.payload={element:null},o.callback=function(){xu(e,s)},o}function fg(e){return e=Ya(e),e.tag=3,e}function hg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){dg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dg(s,o,r),typeof f!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function N2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&qr(s,o,f,!0),o=Mi.current,o!==null){switch(o.tag){case 31:case 13:return Vi===null?Du():o.alternate===null&&Vs===0&&(Vs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===au?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),mh(e,r,f)),!1;case 22:return o.flags|=65536,r===au?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),mh(e,r,f)),!1}throw Error(a(435,o.tag))}return mh(e,r,f),Du(),!1}if($n)return s=Mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==lf&&(e=Error(a(422),{cause:r}),Pl(Ii(e,o)))):(r!==lf&&(s=Error(a(423),{cause:r}),Pl(Ii(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ii(r,o),f=Vf(e.stateNode,r,f),xf(e,f),Vs!==4&&(Vs=2)),!1;var m=Error(a(520),{cause:r});if(m=Ii(m,o),ic===null?ic=[m]:ic.push(m),Vs!==4&&(Vs=2),s===null)return!0;r=Ii(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Vf(o.stateNode,r,e),xf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qa===null||!Qa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=fg(f),hg(f,e,o,r),xf(o,f),!1}o=o.return}while(o!==null);return!1}var Yf=Error(a(461)),co=!1;function Po(e,s,o,r){s.child=e===null?g_(s,null,o,r):Cr(s,e.child,o,r)}function mg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return br(s),r=kf(e,s,o,v,m,f),A=jf(),e!==null&&!co?(Mf(e,s,f),ka(e,s,f)):($n&&A&&af(s),s.flags|=1,Po(e,s,r,f),s.child)}function pg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,_g(e,s,m,r,f)):(e=eu(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Zf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ut,o(v,r)&&e.ref===s.ref)return ka(e,s,f)}return s.flags|=1,e=xa(m,r),e.ref=s.ref,e.return=s,s.child=e}function _g(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ut(m,r)&&e.ref===s.ref)if(co=!1,s.pendingProps=r=m,Zf(e,f))(e.flags&131072)!==0&&(co=!0);else return s.lanes=e.lanes,ka(e,s,f)}return Wf(e,s,o,r,f)}function gg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return yg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(s,m!==null?m.cachePool:null),m!==null?b_(s,m):vf(),v_(s);else return r=s.lanes=536870912,yg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(ou(s,m.cachePool),b_(s,m),Xa(),s.memoizedState=null):(e!==null&&ou(s,null),vf(),Xa());return Po(e,s,f,o),s.child}function Zl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function yg(e,s,o,r,f){var m=pf();return m=m===null?null:{parent:ro._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&ou(s,null),vf(),v_(s),e!==null&&qr(e,s,r,!0),s.childLanes=f,null}function bu(e,s){return s=wu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function xg(e,s,o){return Cr(s,e.child,null,o),e=bu(s,s.pendingProps),e.flags|=2,Ei(s),s.memoizedState=null,e}function R2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if($n){if(r.mode==="hidden")return e=bu(s,r),s.lanes=536870912,Zl(null,e);if(Sf(s),(e=js)?(e=D0(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,$o=s,js=null)):e=null,e===null)throw Ha(s);return s.lanes=536870912,null}return bu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(Sf(s),f)if(s.flags&256)s.flags&=-257,s=xg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(co||qr(e,s,o,!1),f=(o&e.childLanes)!==0,co||f){if(r=gs,r!==null&&(v=vt(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,_r(e,v),xi(r,e,v),Yf;Du(),s=xg(e,s,o)}else e=m.treeContext,js=Yi(v.nextSibling),$o=s,$n=!0,Pa=null,Ui=!1,e!==null&&i_(s,e),s=bu(s,r),s.flags|=4096;return s}return e=xa(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function vu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Wf(e,s,o,r,f){return br(s),o=kf(e,s,o,r,void 0,f),r=jf(),e!==null&&!co?(Mf(e,s,f),ka(e,s,f)):($n&&r&&af(s),s.flags|=1,Po(e,s,o,f),s.child)}function bg(e,s,o,r,f,m){return br(s),s.updateQueue=null,o=S_(s,r,o,f),w_(e),r=jf(),e!==null&&!co?(Mf(e,s,m),ka(e,s,m)):($n&&r&&af(s),s.flags|=1,Po(e,s,o,m),s.child)}function vg(e,s,o,r,f){if(br(s),s.stateNode===null){var m=Wr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Io(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},gf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Io(v):Wr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Hf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Uf.enqueueReplaceState(m,m.state,null),Xl(s,r,m,f),Fl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Q=jr(o,A);m.props=Q;var xe=m.context,ze=o.contextType;v=Wr,typeof ze=="object"&&ze!==null&&(v=Io(ze));var We=o.getDerivedStateFromProps;ze=typeof We=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,ze||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||xe!==v)&&rg(s,m,r,v),Va=!1;var Ce=s.memoizedState;m.state=Ce,Xl(s,r,m,f),Fl(),xe=s.memoizedState,A||Ce!==xe||Va?(typeof We=="function"&&(Hf(s,o,We,r),xe=s.memoizedState),(Q=Va||ag(s,o,Q,r,Ce,xe,v))?(ze||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=xe),m.props=r,m.state=xe,m.context=v,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,yf(e,s),v=s.memoizedProps,ze=jr(o,v),m.props=ze,We=s.pendingProps,Ce=m.context,xe=o.contextType,Q=Wr,typeof xe=="object"&&xe!==null&&(Q=Io(xe)),A=o.getDerivedStateFromProps,(xe=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==We||Ce!==Q)&&rg(s,m,r,Q),Va=!1,Ce=s.memoizedState,m.state=Ce,Xl(s,r,m,f),Fl();var Te=s.memoizedState;v!==We||Ce!==Te||Va||e!==null&&e.dependencies!==null&&nu(e.dependencies)?(typeof A=="function"&&(Hf(s,o,A,r),Te=s.memoizedState),(ze=Va||ag(s,o,ze,r,Ce,Te,Q)||e!==null&&e.dependencies!==null&&nu(e.dependencies))?(xe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Te,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Te,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&Ce===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Ce===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Te),m.props=r,m.state=Te,m.context=Q,r=ze):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&Ce===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Ce===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,vu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=Cr(s,e.child,null,f),s.child=Cr(s,null,o,f)):Po(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ka(e,s,f),e}function wg(e,s,o,r){return yr(),s.flags|=256,Po(e,s,o,r),s.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(e){return{baseLanes:e,cachePool:d_()}}function Gf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=Ai),e}function Sg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Js.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if($n){if(f?Fa(s):Xa(),(e=js)?(e=D0(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,$o=s,js=null)):e=null,e===null)throw Ha(s);return Ah(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Xa(),f=s.mode,A=wu({mode:"hidden",children:A},f),r=gr(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(e,v,o),s.memoizedState=Ff,Zl(null,r)):(Fa(s),qf(s,A))}var Q=e.memoizedState;if(Q!==null&&(A=Q.dehydrated,A!==null)){if(m)s.flags&256?(Fa(s),s.flags&=-257,s=Kf(e,s,o)):s.memoizedState!==null?(Xa(),s.child=e.child,s.flags|=128,s=null):(Xa(),A=r.fallback,f=s.mode,r=wu({mode:"visible",children:r.children},f),A=gr(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,Cr(s,e.child,null,o),r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(e,v,o),s.memoizedState=Ff,s=Zl(null,r));else if(Fa(s),Ah(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var xe=v.dgst;v=xe,r=Error(a(419)),r.stack="",r.digest=v,Pl({value:r,source:null,stack:null}),s=Kf(e,s,o)}else if(co||qr(e,s,o,!1),v=(o&e.childLanes)!==0,co||v){if(v=gs,v!==null&&(r=vt(v,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,_r(e,r),xi(v,e,r),Yf;Th(A)||Du(),s=Kf(e,s,o)}else Th(A)?(s.flags|=192,s.child=e.child,s=null):(e=Q.treeContext,js=Yi(A.nextSibling),$o=s,$n=!0,Pa=null,Ui=!1,e!==null&&i_(s,e),s=qf(s,r.children),s.flags|=4096);return s}return f?(Xa(),A=r.fallback,f=s.mode,Q=e.child,xe=Q.sibling,r=xa(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,xe!==null?A=xa(xe,A):(A=gr(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Zl(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Xf(o):(f=A.cachePool,f!==null?(Q=ro._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=d_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Gf(e,v,o),s.memoizedState=Ff,Zl(e.child,r)):(Fa(s),o=e.child,e=o.sibling,o=xa(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function qf(e,s){return s=wu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function wu(e,s){return e=ji(22,e,null,s),e.lanes=0,e}function Kf(e,s,o){return Cr(s,e.child,null,o),e=qf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Cg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),df(e.return,s,o)}function Qf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function kg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Js.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,ne(Js,v),Po(e,s,r,o),r=$n?Il:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,o,s);else if(e.tag===19)Cg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&uu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Qf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&uu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Qf(s,!0,o,null,m,r);break;case"together":Qf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ka(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ka|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(qr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=xa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=xa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Zf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&nu(e)))}function B2(e,s,o){switch(s.tag){case 3:ot(s,s.stateNode.containerInfo),Ua(s,ro,e.memoizedState.cache),yr();break;case 27:case 5:kt(s);break;case 4:ot(s,s.stateNode.containerInfo);break;case 10:Ua(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Sf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Fa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Sg(e,s,o):(Fa(s),e=ka(e,s,o),e!==null?e.sibling:null);Fa(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(qr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return kg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(Js,Js.current),r)break;return null;case 22:return s.lanes=0,gg(e,s,o,s.pendingProps);case 24:Ua(s,ro,e.memoizedState.cache)}return ka(e,s,o)}function jg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)co=!0;else{if(!Zf(e,o)&&(s.flags&128)===0)return co=!1,B2(e,s,o);co=(e.flags&131072)!==0}else co=!1,$n&&(s.flags&1048576)!==0&&o_(s,Il,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=wr(s.elementType),s.type=e,typeof e=="function")nf(e)?(r=jr(e,r),s.tag=1,s=vg(null,s,e,r,o)):(s.tag=0,s=Wf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===M){s.tag=11,s=mg(null,s,e,r,o);break e}else if(f===W){s.tag=14,s=pg(null,s,e,r,o);break e}}throw s=re(e)||e,Error(a(306,s,""))}}return s;case 0:return Wf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=jr(r,s.pendingProps),vg(e,s,r,f,o);case 3:e:{if(ot(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,yf(e,s),Xl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ua(s,ro,r),r!==m.cache&&ff(s,[ro],o,!0),Fl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=wg(e,s,r,o);break e}else if(r!==f){f=Ii(Error(a(424)),s),Pl(f),s=wg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(js=Yi(e.firstChild),$o=s,$n=!0,Pa=null,Ui=!0,o=g_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(yr(),r===f){s=ka(e,s,o);break e}Po(e,s,r,o)}s=s.child}return s;case 26:return vu(e,s),e===null?(o=z0(s.type,null,s.pendingProps,null))?s.memoizedState=o:$n||(o=s.type,e=s.pendingProps,r=$u(_e.current).createElement(o),r[It]=s,r[xn]=e,Ho(r,o,e),Cn(r),s.stateNode=r):s.memoizedState=z0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return kt(s),e===null&&$n&&(r=s.stateNode=B0(s.type,s.pendingProps,_e.current),$o=s,Ui=!0,f=js,tr(s.type)?(Dh=f,js=Yi(r.firstChild)):js=f),Po(e,s,s.pendingProps.children,o),vu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&$n&&((f=r=js)&&(r=uv(r,s.type,s.pendingProps,Ui),r!==null?(s.stateNode=r,$o=s,js=Yi(r.firstChild),Ui=!1,f=!0):f=!1),f||Ha(s)),kt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,jh(f,m)?r=null:v!==null&&jh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=kf(e,s,k2,null,null,o),hc._currentValue=f),vu(e,s),Po(e,s,r,o),s.child;case 6:return e===null&&$n&&((e=o=js)&&(o=dv(o,s.pendingProps,Ui),o!==null?(s.stateNode=o,$o=s,js=null,e=!0):e=!1),e||Ha(s)),null;case 13:return Sg(e,s,o);case 4:return ot(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=Cr(s,null,r,o):Po(e,s,r,o),s.child;case 11:return mg(e,s,s.type,s.pendingProps,o);case 7:return Po(e,s,s.pendingProps,o),s.child;case 8:return Po(e,s,s.pendingProps.children,o),s.child;case 12:return Po(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ua(s,s.type,r.value),Po(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,br(s),f=Io(f),r=r(f),s.flags|=1,Po(e,s,r,o),s.child;case 14:return pg(e,s,s.type,s.pendingProps,o);case 15:return _g(e,s,s.type,s.pendingProps,o);case 19:return kg(e,s,o);case 31:return R2(e,s,o);case 22:return gg(e,s,o,s.pendingProps);case 24:return br(s),r=Io(ro),e===null?(f=pf(),f===null&&(f=gs,m=hf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},gf(s),Ua(s,ro,f)):((e.lanes&o)!==0&&(yf(e,s),Xl(s,null,null,o),Fl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ua(s,ro,r)):(r=m.cache,Ua(s,ro,r),r!==f.cache&&ff(s,[ro],o,!0))),Po(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ja(e){e.flags|=4}function Jf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw Sr=au,_f}else e.flags&=-16777217}function Mg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(s))if(Jg())e.flags|=8192;else throw Sr=au,_f}function Su(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?_t():536870912,e.lanes|=s,rl|=s)}function Jl(e,s){if(!$n)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ms(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function L2(e,s,o){var r=s.pendingProps;switch(rf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ms(s),null;case 1:return Ms(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),wa(ro),Ie(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Gr(s)?ja(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,cf())),Ms(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ja(s),m!==null?(Ms(s),Mg(s,m)):(Ms(s),Jf(s,f,null,r,o))):m?m!==e.memoizedState?(ja(s),Ms(s),Mg(s,m)):(Ms(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ja(s),Ms(s),Jf(s,f,e,r,o)),null;case 27:if(Ot(s),o=_e.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ja(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ms(s),null}e=Se.current,Gr(s)?a_(s):(e=B0(f,r,o),s.stateNode=e,ja(s))}return Ms(s),null;case 5:if(Ot(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ja(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ms(s),null}if(m=Se.current,Gr(s))a_(s);else{var v=$u(_e.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[It]=s,m[xn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Ho(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ja(s)}}return Ms(s),Jf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ja(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=_e.current,Gr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=$o,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[It]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||S0(e.nodeValue,o)),e||Ha(s,!0)}else e=$u(e).createTextNode(r),e[It]=s,s.stateNode=e}return Ms(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Gr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[It]=s}else yr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ms(s),e=!1}else o=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(Ei(s),s):(Ei(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Ms(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Gr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[It]=s}else yr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ms(s),f=!1}else f=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ei(s),s):(Ei(s),null)}return Ei(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),Su(s,s.updateQueue),Ms(s),null);case 4:return Ie(),e===null&&vh(s.stateNode.containerInfo),Ms(s),null;case 10:return wa(s.type),Ms(s),null;case 19:if(le(Js),r=s.memoizedState,r===null)return Ms(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Jl(r,!1);else{if(Vs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=uu(e),m!==null){for(s.flags|=128,Jl(r,!1),e=m.updateQueue,s.updateQueue=e,Su(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)t_(o,e),o=o.sibling;return ne(Js,Js.current&1|2),$n&&ba(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&gt()>Eu&&(s.flags|=128,f=!0,Jl(r,!1),s.lanes=4194304)}else{if(!f)if(e=uu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,Su(s,e),Jl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!$n)return Ms(s),null}else 2*gt()-r.renderingStartTime>Eu&&o!==536870912&&(s.flags|=128,f=!0,Jl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=gt(),e.sibling=null,o=Js.current,ne(Js,f?o&1|2:o&1),$n&&ba(s,r.treeForkCount),e):(Ms(s),null);case 22:case 23:return Ei(s),wf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Ms(s),s.subtreeFlags&6&&(s.flags|=8192)):Ms(s),o=s.updateQueue,o!==null&&Su(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&le(vr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),wa(ro),Ms(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function O2(e,s){switch(rf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return wa(ro),Ie(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Ot(s),null;case 31:if(s.memoizedState!==null){if(Ei(s),s.alternate===null)throw Error(a(340));yr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(Ei(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));yr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return le(Js),null;case 4:return Ie(),null;case 10:return wa(s.type),null;case 22:case 23:return Ei(s),wf(),e!==null&&le(vr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return wa(ro),null;case 25:return null;default:return null}}function Eg(e,s){switch(rf(s),s.tag){case 3:wa(ro),Ie();break;case 26:case 27:case 5:Ot(s);break;case 4:Ie();break;case 31:s.memoizedState!==null&&Ei(s);break;case 13:Ei(s);break;case 19:le(Js);break;case 10:wa(s.type);break;case 22:case 23:Ei(s),wf(),e!==null&&le(vr);break;case 24:wa(ro)}}function ec(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){ss(s,s.return,A)}}function Ga(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Q=o,xe=A;try{xe()}catch(ze){ss(f,Q,ze)}}}r=r.next}while(r!==m)}}catch(ze){ss(s,s.return,ze)}}function Tg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{x_(s,o)}catch(r){ss(e,e.return,r)}}}function Ag(e,s,o){o.props=jr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){ss(e,s,r)}}function tc(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){ss(e,s,f)}}function da(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){ss(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ss(e,s,f)}else o.current=null}function Dg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){ss(e,e.return,f)}}function eh(e,s,o){try{var r=e.stateNode;ov(r,e.type,o,s),r[xn]=s}catch(f){ss(e,e.return,f)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tr(e.type)||e.tag===4}function th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=_s));else if(r!==4&&(r===27&&tr(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(nh(e,s,o),e=e.sibling;e!==null;)nh(e,s,o),e=e.sibling}function Cu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&tr(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(Cu(e,s,o),e=e.sibling;e!==null;)Cu(e,s,o),e=e.sibling}function Rg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ho(s,r,o),s[It]=e,s[xn]=o}catch(m){ss(e,e.return,m)}}var Ma=!1,uo=!1,sh=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,Do=null;function z2(e,s){if(e=e.containerInfo,Ch=Wu,e=Ft(e),Bn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Q=-1,xe=0,ze=0,We=e,Ce=null;t:for(;;){for(var Te;We!==o||f!==0&&We.nodeType!==3||(A=v+f),We!==m||r!==0&&We.nodeType!==3||(Q=v+r),We.nodeType===3&&(v+=We.nodeValue.length),(Te=We.firstChild)!==null;)Ce=We,We=Te;for(;;){if(We===e)break t;if(Ce===o&&++xe===f&&(A=v),Ce===m&&++ze===r&&(Q=v),(Te=We.nextSibling)!==null)break;We=Ce,Ce=We.parentNode}We=Te}o=A===-1||Q===-1?null:{start:A,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(kh={focusedElem:e,selectionRange:o},Wu=!1,Do=s;Do!==null;)if(s=Do,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,Do=e;else for(;Do!==null;){switch(s=Do,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var At=jr(o.type,f);e=r.getSnapshotBeforeUpdate(At,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){ss(o,o.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Eh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,Do=e;break}Do=s.return}}function Lg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Ta(e,o),r&4&&ec(5,o);break;case 1:if(Ta(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){ss(o,o.return,v)}else{var f=jr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ss(o,o.return,v)}}r&64&&Tg(o),r&512&&tc(o,o.return);break;case 3:if(Ta(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{x_(e,s)}catch(v){ss(o,o.return,v)}}break;case 27:s===null&&r&4&&Rg(o);case 26:case 5:Ta(e,o),s===null&&r&4&&Dg(o),r&512&&tc(o,o.return);break;case 12:Ta(e,o);break;case 31:Ta(e,o),r&4&&$g(e,o);break;case 13:Ta(e,o),r&4&&Ig(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=F2.bind(null,o),fv(e,o))));break;case 22:if(r=o.memoizedState!==null||Ma,!r){s=s!==null&&s.memoizedState!==null||uo,f=Ma;var m=uo;Ma=r,(uo=s)&&!m?Aa(e,o,(o.subtreeFlags&8772)!==0):Ta(e,o),Ma=f,uo=m}break;case 30:break;default:Ta(e,o)}}function Og(e){var s=e.alternate;s!==null&&(e.alternate=null,Og(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&mo(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Bs=null,pi=!1;function Ea(e,s,o){for(o=o.child;o!==null;)zg(e,s,o),o=o.sibling}function zg(e,s,o){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(rt,o)}catch{}switch(o.tag){case 26:uo||da(o,s),Ea(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:uo||da(o,s);var r=Bs,f=pi;tr(o.type)&&(Bs=o.stateNode,pi=!1),Ea(e,s,o),uc(o.stateNode),Bs=r,pi=f;break;case 5:uo||da(o,s);case 6:if(r=Bs,f=pi,Bs=null,Ea(e,s,o),Bs=r,pi=f,Bs!==null)if(pi)try{(Bs.nodeType===9?Bs.body:Bs.nodeName==="HTML"?Bs.ownerDocument.body:Bs).removeChild(o.stateNode)}catch(m){ss(o,s,m)}else try{Bs.removeChild(o.stateNode)}catch(m){ss(o,s,m)}break;case 18:Bs!==null&&(pi?(e=Bs,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),pl(e)):T0(Bs,o.stateNode));break;case 4:r=Bs,f=pi,Bs=o.stateNode.containerInfo,pi=!0,Ea(e,s,o),Bs=r,pi=f;break;case 0:case 11:case 14:case 15:Ga(2,o,s),uo||Ga(4,o,s),Ea(e,s,o);break;case 1:uo||(da(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Ag(o,s,r)),Ea(e,s,o);break;case 21:Ea(e,s,o);break;case 22:uo=(r=uo)||o.memoizedState!==null,Ea(e,s,o),uo=r;break;default:Ea(e,s,o)}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(o){ss(s,s.return,o)}}}function Ig(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(o){ss(s,s.return,o)}}function $2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Bg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Bg),s;default:throw Error(a(435,e.tag))}}function ku(e,s){var o=$2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=X2.bind(null,e,r);r.then(f,f)}})}function _i(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(tr(A.type)){Bs=A.stateNode,pi=!1;break e}break;case 5:Bs=A.stateNode,pi=!1;break e;case 3:case 4:Bs=A.stateNode.containerInfo,pi=!0;break e}A=A.return}if(Bs===null)throw Error(a(160));zg(m,v,f),Bs=null,pi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Pg(s,e),s=s.sibling}var Ji=null;function Pg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_i(s,e),gi(e),r&4&&(Ga(3,e,e.return),ec(3,e),Ga(5,e,e.return));break;case 1:_i(s,e),gi(e),r&512&&(uo||o===null||da(o,o.return)),r&64&&Ma&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Ji;if(_i(s,e),gi(e),r&512&&(uo||o===null||da(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Co]||m[It]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ho(m,r,o),m[It]=e,Cn(m),r=m;break e;case"link":var v=P0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Ho(m,r,o),f.head.appendChild(m);break;case"meta":if(v=P0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Ho(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[It]=e,Cn(m),r=m}e.stateNode=r}else H0(f,e.type,e.stateNode);else e.stateNode=I0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?H0(f,e.type,e.stateNode):I0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&eh(e,e.memoizedProps,o.memoizedProps)}break;case 27:_i(s,e),gi(e),r&512&&(uo||o===null||da(o,o.return)),o!==null&&r&4&&eh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(_i(s,e),gi(e),r&512&&(uo||o===null||da(o,o.return)),e.flags&32){f=e.stateNode;try{Ko(f,"")}catch(At){ss(e,e.return,At)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,eh(e,f,o!==null?o.memoizedProps:f)),r&1024&&(sh=!0);break;case 6:if(_i(s,e),gi(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(At){ss(e,e.return,At)}}break;case 3:if(Hu=null,f=Ji,Ji=Iu(s.containerInfo),_i(s,e),Ji=f,gi(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{pl(s.containerInfo)}catch(At){ss(e,e.return,At)}sh&&(sh=!1,Hg(e));break;case 4:r=Ji,Ji=Iu(e.stateNode.containerInfo),_i(s,e),gi(e),Ji=r;break;case 12:_i(s,e),gi(e);break;case 31:_i(s,e),gi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ku(e,r)));break;case 13:_i(s,e),gi(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Mu=gt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ku(e,r)));break;case 22:f=e.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,xe=Ma,ze=uo;if(Ma=xe||f,uo=ze||Q,_i(s,e),uo=ze,Ma=xe,gi(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||Ma||uo||Mr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Q.stateNode;var We=Q.memoizedProps.style,Ce=We!=null&&We.hasOwnProperty("display")?We.display:null;A.style.display=Ce==null||typeof Ce=="boolean"?"":(""+Ce).trim()}}catch(At){ss(Q,Q.return,At)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(At){ss(Q,Q.return,At)}}}else if(s.tag===18){if(o===null){Q=s;try{var Te=Q.stateNode;f?A0(Te,!0):A0(Q.stateNode,!1)}catch(At){ss(Q,Q.return,At)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,ku(e,o))));break;case 19:_i(s,e),gi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ku(e,r)));break;case 30:break;case 21:break;default:_i(s,e),gi(e)}}function gi(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ng(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=th(e);Cu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Ko(v,""),o.flags&=-33);var A=th(e);Cu(e,A,v);break;case 3:case 4:var Q=o.stateNode.containerInfo,xe=th(e);nh(e,xe,Q);break;default:throw Error(a(161))}}catch(ze){ss(e,e.return,ze)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Hg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Ta(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Lg(e,s.alternate,s),s=s.sibling}function Mr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ga(4,s,s.return),Mr(s);break;case 1:da(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Ag(s,s.return,o),Mr(s);break;case 27:uc(s.stateNode);case 26:case 5:da(s,s.return),Mr(s);break;case 22:s.memoizedState===null&&Mr(s);break;case 30:Mr(s);break;default:Mr(s)}e=e.sibling}}function Aa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Aa(f,m,o),ec(4,m);break;case 1:if(Aa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(xe){ss(r,r.return,xe)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)y_(Q[f],A)}catch(xe){ss(r,r.return,xe)}}o&&v&64&&Tg(m),tc(m,m.return);break;case 27:Rg(m);case 26:case 5:Aa(f,m,o),o&&r===null&&v&4&&Dg(m),tc(m,m.return);break;case 12:Aa(f,m,o);break;case 31:Aa(f,m,o),o&&v&4&&$g(f,m);break;case 13:Aa(f,m,o),o&&v&4&&Ig(f,m);break;case 22:m.memoizedState===null&&Aa(f,m,o),tc(m,m.return);break;case 30:break;default:Aa(f,m,o)}s=s.sibling}}function oh(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Hl(o))}function ih(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Hl(e))}function ea(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ug(e,s,o,r),s=s.sibling}function Ug(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ea(e,s,o,r),f&2048&&ec(9,s);break;case 1:ea(e,s,o,r);break;case 3:ea(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Hl(e)));break;case 12:if(f&2048){ea(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){ss(s,s.return,Q)}}else ea(e,s,o,r);break;case 31:ea(e,s,o,r);break;case 13:ea(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?ea(e,s,o,r):nc(e,s):m._visibility&2?ea(e,s,o,r):(m._visibility|=2,ol(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&oh(v,s);break;case 24:ea(e,s,o,r),f&2048&&ih(s.alternate,s);break;default:ea(e,s,o,r)}}function ol(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Q=r,xe=v.flags;switch(v.tag){case 0:case 11:case 15:ol(m,v,A,Q,f),ec(8,v);break;case 23:break;case 22:var ze=v.stateNode;v.memoizedState!==null?ze._visibility&2?ol(m,v,A,Q,f):nc(m,v):(ze._visibility|=2,ol(m,v,A,Q,f)),f&&xe&2048&&oh(v.alternate,v);break;case 24:ol(m,v,A,Q,f),f&&xe&2048&&ih(v.alternate,v);break;default:ol(m,v,A,Q,f)}s=s.sibling}}function nc(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:nc(o,r),f&2048&&oh(r.alternate,r);break;case 24:nc(o,r),f&2048&&ih(r.alternate,r);break;default:nc(o,r)}s=s.sibling}}var sc=8192;function il(e,s,o){if(e.subtreeFlags&sc)for(e=e.child;e!==null;)Vg(e,s,o),e=e.sibling}function Vg(e,s,o){switch(e.tag){case 26:il(e,s,o),e.flags&sc&&e.memoizedState!==null&&Cv(o,Ji,e.memoizedState,e.memoizedProps);break;case 5:il(e,s,o);break;case 3:case 4:var r=Ji;Ji=Iu(e.stateNode.containerInfo),il(e,s,o),Ji=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=sc,sc=16777216,il(e,s,o),sc=r):il(e,s,o));break;default:il(e,s,o)}}function Yg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function oc(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Do=r,Fg(r,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:oc(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:oc(e);break;case 12:oc(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,ju(e)):oc(e);break;default:oc(e)}}function ju(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Do=r,Fg(r,e)}Yg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ga(8,s,s.return),ju(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,ju(s));break;default:ju(s)}e=e.sibling}}function Fg(e,s){for(;Do!==null;){var o=Do;switch(o.tag){case 0:case 11:case 15:Ga(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Hl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Do=r;else e:for(o=e;Do!==null;){r=Do;var f=r.sibling,m=r.return;if(Og(r),r===o){Do=null;break e}if(f!==null){f.return=m,Do=f;break e}Do=m}}}var I2={getCacheForType:function(e){var s=Io(ro),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Io(ro).controller.signal}},P2=typeof WeakMap=="function"?WeakMap:Map,Gn=0,gs=null,Dn=null,On=0,ns=0,Ti=null,qa=!1,al=!1,ah=!1,Da=0,Vs=0,Ka=0,Er=0,rh=0,Ai=0,rl=0,ic=null,yi=null,lh=!1,Mu=0,Xg=0,Eu=1/0,Tu=null,Qa=null,vo=0,Za=null,ll=null,Na=0,ch=0,uh=null,Gg=null,ac=0,dh=null;function Di(){return(Gn&2)!==0&&On!==0?On&-On:L.T!==null?gh():fn()}function qg(){if(Ai===0)if((On&536870912)===0||$n){var e=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),Ai=e}else Ai=536870912;return e=Mi.current,e!==null&&(e.flags|=32),Ai}function xi(e,s,o){(e===gs&&(ns===2||ns===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Ja(e,On,Ai,!1)),pt(e,o),((Gn&2)===0||e!==gs)&&(e===gs&&((Gn&2)===0&&(Er|=o),Vs===4&&Ja(e,On,Ai,!1)),fa(e))}function Kg(e,s,o){if((Gn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Lt(e,s),f=r?V2(e,s):hh(e,s,!0),m=r;do{if(f===0){al&&!r&&Ja(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!H2(o)){f=hh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=ic;var Q=A.current.memoizedState.isDehydrated;if(Q&&(cl(A,v).flags|=256),v=hh(A,v,!1),v!==2){if(ah&&!Q){A.errorRecoveryDisabledLanes|=m,Er|=m,f=4;break e}m=yi,yi=f,m!==null&&(yi===null?yi=m:yi.push.apply(yi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){cl(e,0),Ja(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ja(r,s,Ai,!qa);break e;case 2:yi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Mu+300-gt(),10<f)){if(Ja(r,s,Ai,!qa),st(r,0,!0)!==0)break e;Na=s,r.timeoutHandle=M0(Qg.bind(null,r,o,yi,Tu,lh,s,Ai,Er,rl,qa,m,"Throttled",-0,0),f);break e}Qg(r,o,yi,Tu,lh,s,Ai,Er,rl,qa,m,null,-0,0)}}break}while(!0);fa(e)}function Qg(e,s,o,r,f,m,v,A,Q,xe,ze,We,Ce,Te){if(e.timeoutHandle=-1,We=s.subtreeFlags,We&8192||(We&16785408)===16785408){We={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_s},Vg(s,m,We);var At=(m&62914560)===m?Mu-gt():(m&4194048)===m?Xg-gt():0;if(At=kv(We,At),At!==null){Na=m,e.cancelPendingCommit=At(i0.bind(null,e,s,m,o,r,f,v,A,Q,ze,We,null,Ce,Te)),Ja(e,m,v,!xe);return}}i0(e,s,m,o,r,f,v,A,Q)}function H2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ht(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ja(e,s,o,r){s&=~rh,s&=~Er,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-ge(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&nn(e,o,s)}function Au(){return(Gn&6)===0?(rc(0),!1):!0}function fh(){if(Dn!==null){if(ns===0)var e=Dn.return;else e=Dn,va=xr=null,Ef(e),Jr=null,Vl=0,e=Dn;for(;e!==null;)Eg(e.alternate,e),e=e.return;Dn=null}}function cl(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,rv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Na=0,fh(),gs=e,Dn=o=xa(e.current,null),On=s,ns=0,Ti=null,qa=!1,al=Lt(e,s),ah=!1,rl=Ai=rh=Er=Ka=Vs=0,yi=ic=null,lh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-ge(r),m=1<<f;s|=e[f],r&=~m}return Da=s,ya(),o}function Zg(e,s){_n=null,L.H=Ql,s===Zr||s===iu?(s=m_(),ns=3):s===_f?(s=m_(),ns=4):ns=s===Yf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ti=s,Dn===null&&(Vs=1,xu(e,Ii(s,e.current)))}function Jg(){var e=Mi.current;return e===null?!0:(On&4194048)===On?Vi===null:(On&62914560)===On||(On&536870912)!==0?e===Vi:!1}function e0(){var e=L.H;return L.H=Ql,e===null?Ql:e}function t0(){var e=L.A;return L.A=I2,e}function Du(){Vs=4,qa||(On&4194048)!==On&&Mi.current!==null||(al=!0),(Ka&134217727)===0&&(Er&134217727)===0||gs===null||Ja(gs,On,Ai,!1)}function hh(e,s,o){var r=Gn;Gn|=2;var f=e0(),m=t0();(gs!==e||On!==s)&&(Tu=null,cl(e,s)),s=!1;var v=Vs;e:do try{if(ns!==0&&Dn!==null){var A=Dn,Q=Ti;switch(ns){case 8:fh(),v=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(s=!0);var xe=ns;if(ns=0,Ti=null,ul(e,A,Q,xe),o&&al){v=0;break e}break;default:xe=ns,ns=0,Ti=null,ul(e,A,Q,xe)}}U2(),v=Vs;break}catch(ze){Zg(e,ze)}while(!0);return s&&e.shellSuspendCounter++,va=xr=null,Gn=r,L.H=f,L.A=m,Dn===null&&(gs=null,On=0,ya()),v}function U2(){for(;Dn!==null;)n0(Dn)}function V2(e,s){var o=Gn;Gn|=2;var r=e0(),f=t0();gs!==e||On!==s?(Tu=null,Eu=gt()+500,cl(e,s)):al=Lt(e,s);e:do try{if(ns!==0&&Dn!==null){s=Dn;var m=Ti;t:switch(ns){case 1:ns=0,Ti=null,ul(e,s,m,1);break;case 2:case 9:if(f_(m)){ns=0,Ti=null,s0(s);break}s=function(){ns!==2&&ns!==9||gs!==e||(ns=7),fa(e)},m.then(s,s);break e;case 3:ns=7;break e;case 4:ns=5;break e;case 7:f_(m)?(ns=0,Ti=null,s0(s)):(ns=0,Ti=null,ul(e,s,m,7));break;case 5:var v=null;switch(Dn.tag){case 26:v=Dn.memoizedState;case 5:case 27:var A=Dn;if(v?U0(v):A.stateNode.complete){ns=0,Ti=null;var Q=A.sibling;if(Q!==null)Dn=Q;else{var xe=A.return;xe!==null?(Dn=xe,Nu(xe)):Dn=null}break t}}ns=0,Ti=null,ul(e,s,m,5);break;case 6:ns=0,Ti=null,ul(e,s,m,6);break;case 8:fh(),Vs=6;break e;default:throw Error(a(462))}}Y2();break}catch(ze){Zg(e,ze)}while(!0);return va=xr=null,L.H=r,L.A=f,Gn=o,Dn!==null?0:(gs=null,On=0,ya(),Vs)}function Y2(){for(;Dn!==null&&!Ke();)n0(Dn)}function n0(e){var s=jg(e.alternate,e,Da);e.memoizedProps=e.pendingProps,s===null?Nu(e):Dn=s}function s0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=bg(o,s,s.pendingProps,s.type,void 0,On);break;case 11:s=bg(o,s,s.pendingProps,s.type.render,s.ref,On);break;case 5:Ef(s);default:Eg(o,s),s=Dn=t_(s,Da),s=jg(o,s,Da)}e.memoizedProps=e.pendingProps,s===null?Nu(e):Dn=s}function ul(e,s,o,r){va=xr=null,Ef(s),Jr=null,Vl=0;var f=s.return;try{if(N2(e,f,s,o,On)){Vs=1,xu(e,Ii(o,e.current)),Dn=null;return}}catch(m){if(f!==null)throw Dn=f,m;Vs=1,xu(e,Ii(o,e.current)),Dn=null;return}s.flags&32768?($n||r===1?e=!0:al||(On&536870912)!==0?e=!1:(qa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),o0(s,e)):Nu(s)}function Nu(e){var s=e;do{if((s.flags&32768)!==0){o0(s,qa);return}e=s.return;var o=L2(s.alternate,s,Da);if(o!==null){Dn=o;return}if(s=s.sibling,s!==null){Dn=s;return}Dn=s=e}while(s!==null);Vs===0&&(Vs=5)}function o0(e,s){do{var o=O2(e.alternate,e);if(o!==null){o.flags&=32767,Dn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){Dn=e;return}Dn=e=o}while(e!==null);Vs=6,Dn=null}function i0(e,s,o,r,f,m,v,A,Q){e.cancelPendingCommit=null;do Ru();while(vo!==0);if((Gn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=ki,Ht(e,o,m,v,A,Q),e===gs&&(Dn=gs=null,On=0),ll=s,Za=e,Na=o,ch=m,uh=f,Gg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G2(ct,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,f=ae.p,ae.p=2,v=Gn,Gn|=4;try{z2(e,s,o)}finally{Gn=v,ae.p=f,L.T=r}}vo=1,a0(),r0(),l0()}}function a0(){if(vo===1){vo=0;var e=Za,s=ll,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=L.T,L.T=null;var r=ae.p;ae.p=2;var f=Gn;Gn|=4;try{Pg(s,e);var m=kh,v=Ft(e.containerInfo),A=m.focusedElem,Q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&Zt(A.ownerDocument.documentElement,A)){if(Q!==null&&Bn(A)){var xe=Q.start,ze=Q.end;if(ze===void 0&&(ze=xe),"selectionStart"in A)A.selectionStart=xe,A.selectionEnd=Math.min(ze,A.value.length);else{var We=A.ownerDocument||document,Ce=We&&We.defaultView||window;if(Ce.getSelection){var Te=Ce.getSelection(),At=A.textContent.length,Jt=Math.min(Q.start,At),cs=Q.end===void 0?Jt:Math.min(Q.end,At);!Te.extend&&Jt>cs&&(v=cs,cs=Jt,Jt=v);var de=en(A,Jt),se=en(A,cs);if(de&&se&&(Te.rangeCount!==1||Te.anchorNode!==de.node||Te.anchorOffset!==de.offset||Te.focusNode!==se.node||Te.focusOffset!==se.offset)){var ye=We.createRange();ye.setStart(de.node,de.offset),Te.removeAllRanges(),Jt>cs?(Te.addRange(ye),Te.extend(se.node,se.offset)):(ye.setEnd(se.node,se.offset),Te.addRange(ye))}}}}for(We=[],Te=A;Te=Te.parentNode;)Te.nodeType===1&&We.push({element:Te,left:Te.scrollLeft,top:Te.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<We.length;A++){var Ue=We[A];Ue.element.scrollLeft=Ue.left,Ue.element.scrollTop=Ue.top}}Wu=!!Ch,kh=Ch=null}finally{Gn=f,ae.p=r,L.T=o}}e.current=s,vo=2}}function r0(){if(vo===2){vo=0;var e=Za,s=ll,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=L.T,L.T=null;var r=ae.p;ae.p=2;var f=Gn;Gn|=4;try{Lg(e,s.alternate,s)}finally{Gn=f,ae.p=r,L.T=o}}vo=3}}function l0(){if(vo===4||vo===3){vo=0,it();var e=Za,s=ll,o=Na,r=Gg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?vo=5:(vo=0,ll=Za=null,c0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Qa=null),rn(o),s=s.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(rt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=L.T,f=ae.p,ae.p=2,L.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{L.T=s,ae.p=f}}(Na&3)!==0&&Ru(),fa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===dh?ac++:(ac=0,dh=e):ac=0,rc(0)}}function c0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Hl(s)))}function Ru(){return a0(),r0(),l0(),u0()}function u0(){if(vo!==5)return!1;var e=Za,s=ch;ch=0;var o=rn(Na),r=L.T,f=ae.p;try{ae.p=32>o?32:o,L.T=null,o=uh,uh=null;var m=Za,v=Na;if(vo=0,ll=Za=null,Na=0,(Gn&6)!==0)throw Error(a(331));var A=Gn;if(Gn|=4,Wg(m.current),Ug(m,m.current,v,o),Gn=A,rc(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(rt,m)}catch{}return!0}finally{ae.p=f,L.T=r,c0(e,s)}}function d0(e,s,o){s=Ii(o,s),s=Vf(e.stateNode,s,2),e=Wa(e,s,2),e!==null&&(pt(e,2),fa(e))}function ss(e,s,o){if(e.tag===3)d0(e,e,o);else for(;s!==null;){if(s.tag===3){d0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qa===null||!Qa.has(r))){e=Ii(o,e),o=fg(2),r=Wa(s,o,2),r!==null&&(hg(o,r,s,e),pt(r,2),fa(r));break}}s=s.return}}function mh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new P2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(ah=!0,f.add(o),e=W2.bind(null,e,s,o),s.then(e,e))}function W2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,gs===e&&(On&o)===o&&(Vs===4||Vs===3&&(On&62914560)===On&&300>gt()-Mu?(Gn&2)===0&&cl(e,0):rh|=o,rl===On&&(rl=0)),fa(e)}function f0(e,s){s===0&&(s=_t()),e=_r(e,s),e!==null&&(pt(e,s),fa(e))}function F2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),f0(e,o)}function X2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),f0(e,o)}function G2(e,s){return mt(e,s)}var Bu=null,dl=null,ph=!1,Lu=!1,_h=!1,er=0;function fa(e){e!==dl&&e.next===null&&(dl===null?Bu=dl=e:dl=dl.next=e),Lu=!0,ph||(ph=!0,K2())}function rc(e,s){if(!_h&&Lu){_h=!0;do for(var o=!1,r=Bu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-ge(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,_0(r,m))}else m=On,m=st(r,r===gs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Lt(r,m)||(o=!0,_0(r,m));r=r.next}while(o);_h=!1}}function q2(){h0()}function h0(){Lu=ph=!1;var e=0;er!==0&&av()&&(e=er);for(var s=gt(),o=null,r=Bu;r!==null;){var f=r.next,m=m0(r,s);m===0?(r.next=null,o===null?Bu=f:o.next=f,f===null&&(dl=o)):(o=r,(e!==0||(m&3)!==0)&&(Lu=!0)),r=f}vo!==0&&vo!==5||rc(e),er!==0&&(er=0)}function m0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-ge(m),A=1<<v,Q=f[v];Q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=jt(A,s)):Q<=s&&(e.expiredLanes|=A),m&=~A}if(s=gs,o=On,o=st(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(ns===2||ns===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Lt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&je(r),rn(o)){case 2:case 8:o=Bt;break;case 32:o=ct;break;case 268435456:o=te;break;default:o=ct}return r=p0.bind(null,e),o=mt(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,s){if(vo!==0&&vo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Ru()&&e.callbackNode!==o)return null;var r=On;return r=st(e,e===gs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Kg(e,r,s),m0(e,gt()),e.callbackNode!=null&&e.callbackNode===o?p0.bind(null,e):null)}function _0(e,s){if(Ru())return null;Kg(e,s,!0)}function K2(){lv(function(){(Gn&6)!==0?mt(Et,q2):h0()})}function gh(){if(er===0){var e=Kr;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),er=e}return er}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function y0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function Q2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=g0((f[xn]||null).action),v=r.submitter;v&&(s=(s=v[xn]||null)?g0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Eo("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(er!==0){var Q=v?y0(f,v):new FormData(f);zf(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(A.preventDefault(),Q=v?y0(f,v):new FormData(f),zf(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var yh=0;yh<Yr.length;yh++){var xh=Yr[yh],Z2=xh.toLowerCase(),J2=xh[0].toUpperCase()+xh.slice(1);mi(Z2,"on"+J2)}mi(hi,"onAnimationEnd"),mi(Ci,"onAnimationIteration"),mi(pr,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Hr,"onTransitionRun"),mi(Ur,"onTransitionStart"),mi(Vr,"onTransitionCancel"),mi(zl,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),As("onBeforeInput",["compositionend","keypress","textInput","paste"]),As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lc));function x0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Q=A.instance,xe=A.currentTarget;if(A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=xe;try{m(f)}catch(ze){wn(ze)}f.currentTarget=null,m=Q}else for(v=0;v<r.length;v++){if(A=r[v],Q=A.instance,xe=A.currentTarget,A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=xe;try{m(f)}catch(ze){wn(ze)}f.currentTarget=null,m=Q}}}}function Nn(e,s){var o=s[Kn];o===void 0&&(o=s[Kn]=new Set);var r=e+"__bubble";o.has(r)||(b0(s,e,2,!1),o.add(r))}function bh(e,s,o){var r=0;s&&(r|=4),b0(o,e,r,s)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function vh(e){if(!e[Ou]){e[Ou]=!0,no.forEach(function(o){o!=="selectionchange"&&(ev.has(o)||bh(o,!1,e),bh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Ou]||(s[Ou]=!0,bh("selectionchange",!1,s))}}function b0(e,s,o,r){switch(q0(s)){case 2:var f=Ev;break;case 8:f=Tv;break;default:f=Oh}o=f.bind(null,s,o,e),f=void 0,!Is||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function wh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=Qt(A),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}Bo(function(){var xe=m,ze=zs(o),We=[];e:{var Ce=$l.get(e);if(Ce!==void 0){var Te=Eo,At=e;switch(e){case"keypress":if(io(o)===0)break e;case"keydown":case"keyup":Te=vn;break;case"focusin":At="focus",Te=ui;break;case"focusout":At="blur",Te=ui;break;case"beforeblur":case"afterblur":Te=ui;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Te=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Te=zi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Te=ce;break;case hi:case Ci:case pr:Te=la;break;case zl:Te=Ve;break;case"scroll":case"scrollend":Te=ao;break;case"wheel":Te=Kt;break;case"copy":case"cut":case"paste":Te=To;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Te=C;break;case"toggle":case"beforetoggle":Te=ln}var Jt=(s&4)!==0,cs=!Jt&&(e==="scroll"||e==="scrollend"),de=Jt?Ce!==null?Ce+"Capture":null:Ce;Jt=[];for(var se=xe,ye;se!==null;){var Ue=se;if(ye=Ue.stateNode,Ue=Ue.tag,Ue!==5&&Ue!==26&&Ue!==27||ye===null||de===null||(Ue=bn(se,de),Ue!=null&&Jt.push(cc(se,Ue,ye))),cs)break;se=se.return}0<Jt.length&&(Ce=new Te(Ce,At,null,o,ze),We.push({event:Ce,listeners:Jt}))}}if((s&7)===0){e:{if(Ce=e==="mouseover"||e==="pointerover",Te=e==="mouseout"||e==="pointerout",Ce&&o!==Oi&&(At=o.relatedTarget||o.fromElement)&&(Qt(At)||At[at]))break e;if((Te||Ce)&&(Ce=ze.window===ze?ze:(Ce=ze.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Te?(At=o.relatedTarget||o.toElement,Te=xe,At=At?Qt(At):null,At!==null&&(cs=u(At),Jt=At.tag,At!==cs||Jt!==5&&Jt!==27&&Jt!==6)&&(At=null)):(Te=null,At=xe),Te!==At)){if(Jt=Qo,Ue="onMouseLeave",de="onMouseEnter",se="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=C,Ue="onPointerLeave",de="onPointerEnter",se="pointer"),cs=Te==null?Ce:Es(Te),ye=At==null?Ce:Es(At),Ce=new Jt(Ue,se+"leave",Te,o,ze),Ce.target=cs,Ce.relatedTarget=ye,Ue=null,Qt(ze)===xe&&(Jt=new Jt(de,se+"enter",At,o,ze),Jt.target=ye,Jt.relatedTarget=cs,Ue=Jt),cs=Ue,Te&&At)t:{for(Jt=tv,de=Te,se=At,ye=0,Ue=de;Ue;Ue=Jt(Ue))ye++;Ue=0;for(var Vt=se;Vt;Vt=Jt(Vt))Ue++;for(;0<ye-Ue;)de=Jt(de),ye--;for(;0<Ue-ye;)se=Jt(se),Ue--;for(;ye--;){if(de===se||se!==null&&de===se.alternate){Jt=de;break t}de=Jt(de),se=Jt(se)}Jt=null}else Jt=null;Te!==null&&v0(We,Ce,Te,Jt,!1),At!==null&&cs!==null&&v0(We,cs,At,Jt,!0)}}e:{if(Ce=xe?Es(xe):window,Te=Ce.nodeName&&Ce.nodeName.toLowerCase(),Te==="select"||Te==="input"&&Ce.type==="file")var Yn=B;else if(He(Ce))if(I)Yn=ft;else{Yn=ke;var $t=ue}else Te=Ce.nodeName,!Te||Te.toLowerCase()!=="input"||Ce.type!=="checkbox"&&Ce.type!=="radio"?xe&&Os(xe.elementType)&&(Yn=B):Yn=Ye;if(Yn&&(Yn=Yn(e,xe))){Ge(We,Yn,o,ze);break e}$t&&$t(e,Ce,xe),e==="focusout"&&xe&&Ce.type==="number"&&xe.memoizedProps.value!=null&&Cs(Ce,"number",Ce.value)}switch($t=xe?Es(xe):window,e){case"focusin":(He($t)||$t.contentEditable==="true")&&(Xt=$t,as=xe,Ln=null);break;case"focusout":Ln=as=Xt=null;break;case"mousedown":Hs=!0;break;case"contextmenu":case"mouseup":case"dragend":Hs=!1,bo(We,o,ze);break;case"selectionchange":if(Ut)break;case"keydown":case"keyup":bo(We,o,ze)}var Sn;if(Tn)e:{switch(e){case"compositionstart":var zn="onCompositionStart";break e;case"compositionend":zn="onCompositionEnd";break e;case"compositionupdate":zn="onCompositionUpdate";break e}zn=void 0}else z?bs(e,o)&&(zn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(zn="onCompositionStart");zn&&(Qs&&o.locale!=="ko"&&(z||zn!=="onCompositionStart"?zn==="onCompositionEnd"&&z&&(Sn=Si()):(Ns=ze,li="value"in Ns?Ns.value:Ns.textContent,z=!0)),$t=zu(xe,zn),0<$t.length&&(zn=new Rt(zn,e,null,o,ze),We.push({event:zn,listeners:$t}),Sn?zn.data=Sn:(Sn=N(o),Sn!==null&&(zn.data=Sn)))),(Sn=ts?H(e,o):ee(e,o))&&(zn=zu(xe,"onBeforeInput"),0<zn.length&&($t=new Rt("onBeforeInput","beforeinput",null,o,ze),We.push({event:$t,listeners:zn}),$t.data=Sn)),Q2(We,e,xe,o,ze)}x0(We,s)})}function cc(e,s,o){return{instance:e,listener:s,currentTarget:o}}function zu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=bn(e,o),f!=null&&r.unshift(cc(e,f,m)),f=bn(e,s),f!=null&&r.push(cc(e,f,m))),e.tag===3)return r;e=e.return}return[]}function tv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Q=A.alternate,xe=A.stateNode;if(A=A.tag,Q!==null&&Q===r)break;A!==5&&A!==26&&A!==27||xe===null||(Q=xe,f?(xe=bn(o,m),xe!=null&&v.unshift(cc(o,xe,Q))):f||(xe=bn(o,m),xe!=null&&v.push(cc(o,xe,Q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var nv=/\r\n?/g,sv=/\u0000|\uFFFD/g;function w0(e){return(typeof e=="string"?e:""+e).replace(nv,`
`).replace(sv,"")}function S0(e,s){return s=w0(s),w0(e)===s}function ls(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Ko(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Ko(e,""+r);break;case"className":Jn(e,"class",r);break;case"tabIndex":Jn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,o,r);break;case"style":wi(e,r,m);break;case"data":if(s!=="object"){Jn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Yo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ls(e,s,"name",f.name,f,null),ls(e,s,"formEncType",f.formEncType,f,null),ls(e,s,"formMethod",f.formMethod,f,null),ls(e,s,"formTarget",f.formTarget,f,null)):(ls(e,s,"encType",f.encType,f,null),ls(e,s,"method",f.method,f,null),ls(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Yo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=_s);break;case"onScroll":r!=null&&Nn("scroll",e);break;case"onScrollEnd":r!=null&&Nn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Yo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":Nn("beforetoggle",e),Nn("toggle",e),so(e,"popover",r);break;case"xlinkActuate":Fs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Fs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Fs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Fs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Fs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Fs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":so(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Qi.get(o)||o,so(e,o,r))}}function Sh(e,s,o,r,f,m){switch(o){case"style":wi(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Ko(e,r):(typeof r=="number"||typeof r=="bigint")&&Ko(e,""+r);break;case"onScroll":r!=null&&Nn("scroll",e);break;case"onScrollEnd":r!=null&&Nn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ts.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[xn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):so(e,o,r)}}}function Ho(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nn("error",e),Nn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ls(e,s,m,v,o,null)}}f&&ls(e,s,"srcSet",o.srcSet,o,null),r&&ls(e,s,"src",o.src,o,null);return;case"input":Nn("invalid",e);var A=m=v=f=null,Q=null,xe=null;for(r in o)if(o.hasOwnProperty(r)){var ze=o[r];if(ze!=null)switch(r){case"name":f=ze;break;case"type":v=ze;break;case"checked":Q=ze;break;case"defaultChecked":xe=ze;break;case"value":m=ze;break;case"defaultValue":A=ze;break;case"children":case"dangerouslySetInnerHTML":if(ze!=null)throw Error(a(137,s));break;default:ls(e,s,r,ze,o,null)}}In(e,m,A,Q,xe,v,f,!1);return;case"select":Nn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ls(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?ms(e,!!r,s,!1):o!=null&&ms(e,!!r,o,!0);return;case"textarea":Nn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ls(e,s,v,A,o,null)}Li(e,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ls(e,s,Q,r,o,null)}return;case"dialog":Nn("beforetoggle",e),Nn("toggle",e),Nn("cancel",e),Nn("close",e);break;case"iframe":case"object":Nn("load",e);break;case"video":case"audio":for(r=0;r<lc.length;r++)Nn(lc[r],e);break;case"image":Nn("error",e),Nn("load",e);break;case"details":Nn("toggle",e);break;case"embed":case"source":case"link":Nn("error",e),Nn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(xe in o)if(o.hasOwnProperty(xe)&&(r=o[xe],r!=null))switch(xe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ls(e,s,xe,r,o,null)}return;default:if(Os(s)){for(ze in o)o.hasOwnProperty(ze)&&(r=o[ze],r!==void 0&&Sh(e,s,ze,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ls(e,s,A,r,o,null))}function ov(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Q=null,xe=null,ze=null;for(Te in o){var We=o[Te];if(o.hasOwnProperty(Te)&&We!=null)switch(Te){case"checked":break;case"value":break;case"defaultValue":Q=We;default:r.hasOwnProperty(Te)||ls(e,s,Te,null,r,We)}}for(var Ce in r){var Te=r[Ce];if(We=o[Ce],r.hasOwnProperty(Ce)&&(Te!=null||We!=null))switch(Ce){case"type":m=Te;break;case"name":f=Te;break;case"checked":xe=Te;break;case"defaultChecked":ze=Te;break;case"value":v=Te;break;case"defaultValue":A=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(a(137,s));break;default:Te!==We&&ls(e,s,Ce,Te,r,We)}}oo(e,v,A,Q,xe,ze,m,f);return;case"select":Te=v=A=Ce=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":Te=Q;default:r.hasOwnProperty(m)||ls(e,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":Ce=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Q&&ls(e,s,f,m,r,Q)}s=A,o=v,r=Te,Ce!=null?ms(e,!!o,Ce,!1):!!r!=!!o&&(s!=null?ms(e,!!o,s,!0):ms(e,!!o,o?[]:"",!1));return;case"textarea":Te=Ce=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ls(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":Ce=f;break;case"defaultValue":Te=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ls(e,s,v,f,r,m)}ps(e,Ce,Te);return;case"option":for(var At in o)if(Ce=o[At],o.hasOwnProperty(At)&&Ce!=null&&!r.hasOwnProperty(At))switch(At){case"selected":e.selected=!1;break;default:ls(e,s,At,null,r,Ce)}for(Q in r)if(Ce=r[Q],Te=o[Q],r.hasOwnProperty(Q)&&Ce!==Te&&(Ce!=null||Te!=null))switch(Q){case"selected":e.selected=Ce&&typeof Ce!="function"&&typeof Ce!="symbol";break;default:ls(e,s,Q,Ce,r,Te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in o)Ce=o[Jt],o.hasOwnProperty(Jt)&&Ce!=null&&!r.hasOwnProperty(Jt)&&ls(e,s,Jt,null,r,Ce);for(xe in r)if(Ce=r[xe],Te=o[xe],r.hasOwnProperty(xe)&&Ce!==Te&&(Ce!=null||Te!=null))switch(xe){case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:ls(e,s,xe,Ce,r,Te)}return;default:if(Os(s)){for(var cs in o)Ce=o[cs],o.hasOwnProperty(cs)&&Ce!==void 0&&!r.hasOwnProperty(cs)&&Sh(e,s,cs,void 0,r,Ce);for(ze in r)Ce=r[ze],Te=o[ze],!r.hasOwnProperty(ze)||Ce===Te||Ce===void 0&&Te===void 0||Sh(e,s,ze,Ce,r,Te);return}}for(var de in o)Ce=o[de],o.hasOwnProperty(de)&&Ce!=null&&!r.hasOwnProperty(de)&&ls(e,s,de,null,r,Ce);for(We in r)Ce=r[We],Te=o[We],!r.hasOwnProperty(We)||Ce===Te||Ce==null&&Te==null||ls(e,s,We,Ce,r,Te)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&C0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],xe=Q.startTime;if(xe>A)break;var ze=Q.transferSize,We=Q.initiatorType;ze&&C0(We)&&(Q=Q.responseEnd,v+=ze*(Q<A?1:(A-xe)/(Q-xe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ch=null,kh=null;function $u(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function jh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mh=null;function av(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(cv)}:M0;function cv(e){setTimeout(function(){throw e})}function tr(e){return e==="head"}function T0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),pl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")uc(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,uc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Co]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&uc(e.ownerDocument.body);o=f}while(o);pl(s)}function A0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Eh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Eh(o),mo(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function uv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Co])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Yi(e.nextSibling),e===null)break}return null}function dv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Yi(e.nextSibling),e===null))return null;return e}function D0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Yi(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function Ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Yi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Dh=null;function N0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Yi(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function B0(e,s,o){switch(s=$u(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function uc(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);mo(e)}var Wi=new Map,L0=new Set;function Iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ra=ae.d;ae.d={f:hv,r:mv,D:pv,C:_v,L:gv,m:yv,X:bv,S:xv,M:vv};function hv(){var e=Ra.f(),s=Au();return e||s}function mv(e){var s=Rn(e);s!==null&&s.tag===5&&s.type==="form"?Z_(s):Ra.r(e)}var fl=typeof document>"u"?null:document;function O0(e,s,o){var r=fl;if(r&&typeof s=="string"&&s){var f=es(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),L0.has(f)||(L0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ho(s,"link",e),Cn(s),r.head.appendChild(s)))}}function pv(e){Ra.D(e),O0("dns-prefetch",e,null)}function _v(e,s){Ra.C(e,s),O0("preconnect",e,s)}function gv(e,s,o){Ra.L(e,s,o);var r=fl;if(r&&e&&s){var f='link[rel="preload"][as="'+es(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+es(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+es(o.imageSizes)+'"]')):f+='[href="'+es(e)+'"]';var m=f;switch(s){case"style":m=hl(e);break;case"script":m=ml(e)}Wi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Wi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(dc(m))||s==="script"&&r.querySelector(fc(m))||(s=r.createElement("link"),Ho(s,"link",e),Cn(s),r.head.appendChild(s)))}}function yv(e,s){Ra.m(e,s);var o=fl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+es(r)+'"][href="'+es(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ml(e)}if(!Wi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Wi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(fc(m)))return}r=o.createElement("link"),Ho(r,"link",e),Cn(r),o.head.appendChild(r)}}}function xv(e,s,o){Ra.S(e,s,o);var r=fl;if(r&&e){var f=Qn(r).hoistableStyles,m=hl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(dc(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Wi.get(m))&&Nh(e,o);var Q=v=r.createElement("link");Cn(Q),Ho(Q,"link",e),Q._p=new Promise(function(xe,ze){Q.onload=xe,Q.onerror=ze}),Q.addEventListener("load",function(){A.loading|=1}),Q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Pu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function bv(e,s){Ra.X(e,s);var o=fl;if(o&&e){var r=Qn(o).hoistableScripts,f=ml(e),m=r.get(f);m||(m=o.querySelector(fc(f)),m||(e=x({src:e,async:!0},s),(s=Wi.get(f))&&Rh(e,s),m=o.createElement("script"),Cn(m),Ho(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function vv(e,s){Ra.M(e,s);var o=fl;if(o&&e){var r=Qn(o).hoistableScripts,f=ml(e),m=r.get(f);m||(m=o.querySelector(fc(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Wi.get(f))&&Rh(e,s),m=o.createElement("script"),Cn(m),Ho(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function z0(e,s,o,r){var f=(f=_e.current)?Iu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=hl(o.href),o=Qn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=hl(o.href);var m=Qn(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(dc(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Wi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Wi.set(e,o),m||wv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ml(o),o=Qn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function hl(e){return'href="'+es(e)+'"'}function dc(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function wv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ho(s,"link",o),Cn(s),e.head.appendChild(s))}function ml(e){return'[src="'+es(e)+'"]'}function fc(e){return"script[async]"+e}function I0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+es(o.href)+'"]');if(r)return s.instance=r,Cn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Cn(r),Ho(r,"style",f),Pu(r,o.precedence,e),s.instance=r;case"stylesheet":f=hl(o.href);var m=e.querySelector(dc(f));if(m)return s.state.loading|=4,s.instance=m,Cn(m),m;r=$0(o),(f=Wi.get(f))&&Nh(r,f),m=(e.ownerDocument||e).createElement("link"),Cn(m);var v=m;return v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),Ho(m,"link",r),s.state.loading|=4,Pu(m,o.precedence,e),s.instance=m;case"script":return m=ml(o.src),(f=e.querySelector(fc(m)))?(s.instance=f,Cn(f),f):(r=o,(f=Wi.get(m))&&(r=x({},o),Rh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),Cn(f),Ho(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Pu(r,o.precedence,e));return s.instance}function Pu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Nh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Rh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Hu=null;function P0(e,s,o){if(Hu===null){var r=new Map,f=Hu=new Map;f.set(o,r)}else f=Hu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Co]||m[It]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function H0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function Sv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=hl(r.href),m=s.querySelector(dc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Uu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,Cn(m);return}m=s.ownerDocument||s,r=$0(r),(f=Wi.get(f))&&Nh(r,f),m=m.createElement("link"),Cn(m);var v=m;v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),Ho(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Uu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Bh=0;function kv(e,s){return e.stylesheets&&e.count===0&&Yu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Bh===0&&(Bh=62500*iv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Bh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vu=null;function Yu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vu=new Map,s.forEach(jv,e),Vu=null,Uu.call(e))}function jv(e,s){if(!(s.state.loading&4)){var o=Vu.get(e);if(o)var r=o.get(null);else{o=new Map,Vu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Uu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var hc={$$typeof:R,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Mv(e,s,o,r,f,m,v,A,Q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.hiddenUpdates=dn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function V0(e,s,o,r,f,m,v,A,Q,xe,ze,We){return e=new Mv(e,s,o,v,Q,xe,ze,We,A),s=1,m===!0&&(s|=24),m=ji(3,null,null,s),e.current=m,m.stateNode=e,s=hf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},gf(m),e}function Y0(e){return e?(e=Wr,e):Wr}function W0(e,s,o,r,f,m){f=Y0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ya(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Wa(e,r,s),o!==null&&(xi(o,e,s),Wl(o,e,s))}function F0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Lh(e,s){F0(e,s),(e=e.alternate)&&F0(e,s)}function X0(e){if(e.tag===13||e.tag===31){var s=_r(e,67108864);s!==null&&xi(s,e,67108864),Lh(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var s=Di();s=qt(s);var o=_r(e,s);o!==null&&xi(o,e,s),Lh(e,s)}}var Wu=!0;function Ev(e,s,o,r){var f=L.T;L.T=null;var m=ae.p;try{ae.p=2,Oh(e,s,o,r)}finally{ae.p=m,L.T=f}}function Tv(e,s,o,r){var f=L.T;L.T=null;var m=ae.p;try{ae.p=8,Oh(e,s,o,r)}finally{ae.p=m,L.T=f}}function Oh(e,s,o,r){if(Wu){var f=zh(r);if(f===null)wh(e,s,r,Fu,o),K0(e,r);else if(Dv(f,e,s,o,r))r.stopPropagation();else if(K0(e,r),s&4&&-1<Av.indexOf(e)){for(;f!==null;){var m=Rn(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Ct(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Q=1<<31-ge(v);A.entanglements[1]|=Q,v&=~Q}fa(m),(Gn&6)===0&&(Eu=gt()+500,rc(0))}}break;case 31:case 13:A=_r(m,2),A!==null&&xi(A,m,2),Au(),Lh(m,2)}if(m=zh(r),m===null&&wh(e,s,r,Fu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else wh(e,s,r,null,o)}}function zh(e){return e=zs(e),$h(e)}var Fu=null;function $h(e){if(Fu=null,e=Qt(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Fu=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case Et:return 2;case Bt:return 8;case ct:case Y:return 32;case te:return 268435456;default:return 32}default:return 32}}var Ih=!1,nr=null,sr=null,or=null,mc=new Map,pc=new Map,ir=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,s){switch(e){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":mc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(s.pointerId)}}function _c(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Rn(s),s!==null&&X0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Dv(e,s,o,r,f){switch(s){case"focusin":return nr=_c(nr,e,s,o,r,f),!0;case"dragenter":return sr=_c(sr,e,s,o,r,f),!0;case"mouseover":return or=_c(or,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return mc.set(m,_c(mc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,pc.set(m,_c(pc.get(m)||null,e,s,o,r,f)),!0}return!1}function Q0(e){var s=Qt(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Nt(e.priority,function(){G0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Nt(e.priority,function(){G0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=zh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Oi=r,o.target.dispatchEvent(r),Oi=null}else return s=Rn(o),s!==null&&X0(s),e.blockedOn=o,!1;s.shift()}return!0}function Z0(e,s,o){Xu(e)&&o.delete(s)}function Nv(){Ih=!1,nr!==null&&Xu(nr)&&(nr=null),sr!==null&&Xu(sr)&&(sr=null),or!==null&&Xu(or)&&(or=null),mc.forEach(Z0),pc.forEach(Z0)}function Gu(e,s){e.blockedOn===s&&(e.blockedOn=null,Ih||(Ih=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Nv)))}var qu=null;function J0(e){qu!==e&&(qu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if($h(r||o)===null)continue;break}var m=Rn(o);m!==null&&(e.splice(s,3),s-=3,zf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function pl(e){function s(Q){return Gu(Q,e)}nr!==null&&Gu(nr,e),sr!==null&&Gu(sr,e),or!==null&&Gu(or,e),mc.forEach(s),pc.forEach(s);for(var o=0;o<ir.length;o++){var r=ir[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)Q0(o),o.blockedOn===null&&ir.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[xn]||null;if(typeof m=="function")v||J0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[xn]||null)A=v.formAction;else if($h(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),J0(o)}}}function ey(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Ph(e){this._internalRoot=e}Ku.prototype.render=Ph.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Di();W0(o,r,e,s,null,null)},Ku.prototype.unmount=Ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;W0(e.current,2,null,e,null,null),Au(),s[at]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var s=fn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<ir.length&&s!==0&&s<ir[o].priority;o++);ir.splice(o,0,e),o===0&&Q0(e)}};var ty=n.version;if(ty!=="19.2.4")throw Error(a(527,ty,"19.2.4"));ae.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Rv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{rt=Qu.inject(Rv),qe=Qu}catch{}}return yc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=lg,m=cg,v=ug;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=V0(e,1,!1,null,null,o,r,null,f,m,v,ey),e[at]=s.current,vh(e),new Ph(s)},yc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=lg,v=cg,A=ug,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=V0(e,1,!0,s,o!=null?o:null,r,f,Q,m,v,A,ey),s.context=Y0(null),o=s.current,r=Di(),r=qt(r),f=Ya(r),f.callback=null,Wa(o,f,r),o=r,s.current.lanes=o,pt(s,o),fa(s),e[at]=s.current,vh(e),new Ku(s)},yc.version="19.2.4",yc}var dy;function Uv(){if(dy)return Uh.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Uh.exports=Hv(),Uh.exports}var Vv=Uv();const Yv=Ix(Vv);var _=hp();const Wv=Ix(_);function Fv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Xv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var Cd;const qi="__TAURI_TO_IPC_KEY__";function Gv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class qv{get rid(){return Fv(this,Cd,"f")}constructor(n){Cd.set(this,void 0),Xv(this,Cd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}Cd=new WeakMap;var Ri;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(Ri||(Ri={}));async function Hx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function Nc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Gv(n)}).then(u=>async()=>Hx(t,u))}async function Kv(t,n,i){return Nc(t,a=>{Hx(t,a.id),n(a)},i)}async function Qv(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function Zv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ux{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Rc(this.width*n,this.height*n)}[qi](){return{width:this.width,height:this.height}}toJSON(){return this[qi]()}}class Rc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ux(this.width/n,this.height/n)}[qi](){return{width:this.width,height:this.height}}toJSON(){return this[qi]()}}class _l{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ux?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Rc?this.size:this.size.toPhysical(n)}[qi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[qi]()}}class Vx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new ur(this.x*n,this.y*n)}[qi](){return{x:this.x,y:this.y}}toJSON(){return this[qi]()}}class ur{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Vx(this.x/n,this.y/n)}[qi](){return{x:this.x,y:this.y}}toJSON(){return this[qi]()}}class Zu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Vx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof ur?this.position:this.position.toPhysical(n)}[qi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[qi]()}}class Bc extends qv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:Ld(n),width:i,height:a}).then(c=>new Bc(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:Ld(n)}).then(i=>new Bc(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new Bc(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function Ld(t){return t==null?null:typeof t=="string"?t:t instanceof Bc?t.rid:t}var Dm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Dm||(Dm={}));class Jv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var fy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(fy||(fy={}));function mp(){return new Yx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Xh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new Yx(n,{skip:!0})))}const Gh=["tauri://created","tauri://error"];class Yx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Xh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return mp()}static async getAll(){return Xh()}static async getFocusedWindow(){for(const n of await Xh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Nc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Kv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Gh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Qv(n,i)}async emitTo(n,i,a){if(Gh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Zv(n,i,a)}_handleTauriEvent(n,i){return Gh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new ur(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new ur(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new Rc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new Rc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Dm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof _l?n:new _l(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof _l?n:n?new _l(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof _l?n:n?new _l(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Zu?n:new Zu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:Ld(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Zu?n:new Zu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?Ld(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Ri.WINDOW_RESIZED,i=>{i.payload=new Rc(i.payload),n(i)})}async onMoved(n){return this.listen(Ri.WINDOW_MOVED,i=>{i.payload=new ur(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Ri.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Jv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Ri.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new ur(d.payload.position)}})}),a=await this.listen(Ri.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new ur(d.payload.position)}})}),c=await this.listen(Ri.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new ur(d.payload.position)}})}),u=await this.listen(Ri.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Ri.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Ri.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Ri.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Ri.WINDOW_THEME_CHANGED,n)}}var hy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(hy||(hy={}));var my;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(my||(my={}));var py;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(py||(py={}));var _y;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(_y||(_y={}));async function ew(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=t=>{const n=nw(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=_.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...sw,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Wx("lucide",c),...!u&&!ow(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(iw,{ref:u,iconNode:n,className:Wx(`lucide-${tw(gy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=gy(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fx=ra("chevron-down",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],lw=ra("chevron-right",rw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],uw=ra("chevron-up",cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],fw=ra("ellipsis",dw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],mw=ra("folder-git-2",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Xx=ra("git-branch-plus",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],gw=ra("git-commit-horizontal",_w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],xw=ra("git-merge",yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],vw=ra("panel-left-close",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Sw=ra("panel-left-open",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],kw=ra("search",Cw),jw=3.7,Ju=200,Nm=240,Fn=540,Ys=176,qh=32,Dl=20,Mw=Nm/2,gl=Fn+Mw,Ba=18,La=18,Kh="var(--border)";function yy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Br(t,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function Oa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Ac(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Oa(t).localeCompare(Oa(n))}function Gx(t){return[...t].sort(Ac)}function Ew(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(w=>[Oa(w),w])),i=new Map,a=new Map;t.forEach(w=>i.set(Oa(w),0));for(const w of t){const S=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const j of S){if(!j||!n.has(j))continue;const k=Oa(w);i.set(k,((y=i.get(k))!=null?y:0)+1);const T=(g=a.get(j))!=null?g:[];T.push(w),a.set(j,T)}}for(const w of a.values())w.sort(Ac);const c=t.filter(w=>{var S;return((S=i.get(Oa(w)))!=null?S:0)===0}).sort(Ac),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),S=Oa(w);if(!d.has(S)){d.add(S),u.push(w);for(const j of(x=a.get(S))!=null?x:[]){const k=Oa(j),T=((b=i.get(k))!=null?b:0)-1;i.set(k,T),T===0&&c.push(j)}c.sort(Ac)}}return u.length===t.length?u:[...u,...t.filter(w=>!d.has(Oa(w))).sort(Ac)]}function qx(t,n){var i;return Gx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Kx(t,n,i){return qx(t,i)}function Qh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Tw(t,n){var u,d;if(!n||t.length===0)return Qh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Qh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Qh(t)}function ed(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Aw(t,n,i){var g,x,b,w,S,j,k;const a=Kx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Br(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((k=(j=Tw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function Dw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=qx(t.name,i);if(a.length>0){const y=a.map(b=>Br(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function pp(t,n,i={},a={}){var pe,be,Ne,Ze;const u=new Map(t.map(re=>[re.name,re])),d=new Map,h=new Map;for(const re of t){const L=((pe=i[re.name])!=null?pe:[]).filter(ae=>ae.kind!=="branch-created").map(ae=>new Date(ae.date).getTime()).filter(ae=>Number.isFinite(ae)).sort((ae,F)=>ae-F)[0];L!=null&&h.set(re.name,L)}const p=re=>{const ie=h.get(re.name);return ie!=null?ie:yy(re).start},y=re=>{var L;const ie=(L=a[re.name])!=null?L:null;return ie&&ie!==re.name&&(ie===n||u.has(ie))?ie:re.name===n?null:re.parentBranch&&re.parentBranch!==re.name&&(re.parentBranch===n||u.has(re.parentBranch))?re.parentBranch:null};for(const re of t){if(re.name===n)continue;const ie=(be=y(re))!=null?be:n,L=(Ne=d.get(ie))!=null?Ne:[];L.push(re),d.set(ie,L)}for(const re of d.values())re.sort((ie,L)=>p(ie)-p(L)||ie.name.localeCompare(L.name));const g=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const re of Object.values(i))for(const ie of re){const L=new Date(ie.date).getTime();Number.isFinite(L)&&(ie.fullSha&&S.set(ie.fullSha,L),ie.sha&&S.set(ie.sha,L))}const j=(re,ie)=>({start:Math.min(re,ie),end:Math.max(re,ie)}),k=re=>{var ne,Se;const ie=j(p(re),yy(re).end),L=[ie],ae=ie.start,F=Dw(re,n,i),me=F?S.get(F):void 0,Ee=new Date((Se=(ne=re.divergedFromDate)!=null?ne:re.createdDate)!=null?Se:re.lastCommitDate).getTime(),$=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(Ee)?Ee:null;if($==null)return L;const le=j($,ae);return le.start!==le.end&&L.push(le),L},T=Math.max(1,360*60*1e3*jw),U=(re,ie)=>!(re.start-ie.end>=T||ie.start-re.end>=T),R=(re,ie)=>ie.some(L=>{var ae;return((ae=w.get(re))!=null?ae:[]).some(F=>U(L,F))}),M=(re,ie=new Set)=>{const L=b.get(re);if(L!=null)return L;if(ie.has(re))return 1;ie.add(re);const ae=u.get(re);if(!ae||re===n)return ie.delete(re),b.set(re,0),0;const F=y(ae),me=F?M(F,ie)+1:1;return ie.delete(re),b.set(re,me),me},q=(re,ie=new Set)=>{var _e,Le;const L=g.get(re);if(L)return L.column;if(ie.has(re))return 0;ie.add(re);const ae=u.get(re);if(!ae)return ie.delete(re),0;if(re===n){const ot={name:re,column:0,parentName:null};g.set(re,ot),x.push(ot);const Ie=k(ae);return w.set(0,[...(_e=w.get(0))!=null?_e:[],...Ie]),ie.delete(re),0}const F=y(ae),me=F&&!ie.has(F)?F:null,Ee=me?q(me,ie):0,$=Math.max(1,M(re)),le=Math.max(me?Ee+1:1,$),ne=k(ae);let Se=le;for(;R(Se,ne);)Se+=1;const De={name:re,column:Se,parentName:me};return g.set(re,De),x.push(De),w.set(Se,[...(Le=w.get(Se))!=null?Le:[],...ne]),ie.delete(re),Se};q(n);const G=t.filter(re=>!g.has(re.name)).sort((re,ie)=>p(re)-p(ie)||re.name.localeCompare(ie.name)),W=G.filter(re=>y(re)!=null),Z=G.filter(re=>y(re)==null);for(const re of W)q(re.name);let he=Math.max(0,...x.map(re=>re.column))+1+1;for(const re of Z){const ie=k(re);let L=he;for(;R(L,ie);)L+=1;const ae={name:re.name,column:L,parentName:null};g.set(re.name,ae),x.push(ae),w.set(L,[...(Ze=w.get(L))!=null?Ze:[],...ie]),he=L+1}return x.sort((re,ie)=>re.column-ie.column||re.name.localeCompare(ie.name))}function Nw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const td=2.25,ta=0,Zh=0,Rw=3600*1e3,Bw=3600*1e3,Fi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Uo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function xy(t,n,i=new Map){var Z,he,pe,be,Ne,Ze,re,ie,L,ae,F,me,Ee,$,le;if(t.length===0)return new Map;const a=[...t].sort((ne,Se)=>{const De=Fi(ne.date)-Fi(Se.date);return De!==0?De:ne.id!==Se.id?ne.id.localeCompare(Se.id):ne.visualId.localeCompare(Se.visualId)}),c=new Map;for(const ne of t){const Se=(Z=ne.parentSha)!=null?Z:null;if(Se){const De=(he=c.get(Se))!=null?he:new Set;De.add(ne.id),c.set(Se,De)}for(const De of(pe=i.get(ne.id))!=null?pe:[]){if(!De)continue;const _e=(be=c.get(De))!=null?be:new Set;_e.add(ne.id),c.set(De,_e)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const ne of t){const Se=(Ne=y.get(ne.branchName))!=null?Ne:new Set;Se.add(ne.id),y.set(ne.branchName,Se);const De=(re=(Ze=n.get(ne.branchName))==null?void 0:Ze.column)!=null?re:0,_e=(ie=g.get(ne.id))!=null?ie:new Set;_e.add(De),g.set(ne.id,_e);const Le=new Set;ne.parentSha&&Le.add(ne.parentSha),x.set(ne.visualId,Le);const ot=new Set(Le);for(const Ie of(L=i.get(ne.id))!=null?L:[])Ie&&ot.add(Ie);b.set(ne.visualId,ot)}const w=new Set(Array.from(g.keys())),S=Array.from(w),j=new Map,k=ne=>{const Se=[];for(const De of S)Uo(De,ne)&&Se.push(De);return Se},T=new Map;for(const ne of S)T.set(ne,new Set);for(const ne of t){const Se=k(ne.id);if(Se.length===0)continue;const De=(ae=b.get(ne.visualId))!=null?ae:new Set,_e=new Set;for(const Le of De)for(const ot of k(Le))_e.add(ot);for(const Le of Se){const ot=(F=T.get(Le))!=null?F:new Set;for(const Ie of _e)ot.add(Ie);T.set(Le,ot)}}const U=new Map,R=(ne,Se=new Set)=>{var ot;const De=U.get(ne);if(De)return De;if(Se.has(ne))return new Set;Se.add(ne);const _e=(ot=T.get(ne))!=null?ot:new Set,Le=new Set;for(const Ie of _e){Le.add(Ie);for(const kt of R(Ie,Se))Le.add(kt)}return Se.delete(ne),U.set(ne,Le),Le},M=(ne,Se)=>{if(Uo(ne,Se))return!0;const De=k(ne),_e=k(Se);for(const Le of De){const ot=R(Le);for(const Ie of _e)if(ot.has(Ie))return!0}for(const Le of _e){const ot=R(Le);for(const Ie of De)if(ot.has(Ie))return!0}return!1};let q=1;const G=(ne,Se)=>{var mt,je,Ke,it,gt,xt,Et,Bt,ct;const De=(je=(mt=n.get(ne.branchName))==null?void 0:mt.column)!=null?je:0,_e=(Ke=y.get(ne.branchName))!=null?Ke:new Set,ot=!(!!ne.parentSha&&_e.has(ne.parentSha))&&ne.parentSha?ne.parentSha:null,Ie=Array.from(Se).flatMap(Y=>k(Y).flatMap(te=>{var ve;return(ve=j.get(te))!=null?ve:[]})),kt=(ne.kind==="branch-created"||ne.kind==="stash")&&Ie.length>0?Math.max(...Ie)+1:null,Ot=Ie.length>0?Math.max(...Ie)+1:1,yt=(it=c.get(ne.id))!=null?it:new Set,lt=Array.from(yt).flatMap(Y=>{var te;return Array.from((te=g.get(Y))!=null?te:[])}).some(Y=>Y!==De),Pt=new Date(ne.date).getTime(),an=Math.max(Ot,1);let tn=null;for(let Y=an;Y<q;Y+=1){const te=(gt=d.get(Y))!=null?gt:[];if(te.length===0||lt||p.has(Y))continue;const ve=(xt=b.get(ne.visualId))!=null?xt:new Set;if(!(te.some(Be=>M(ne.id,Be.sha)?!0:Array.from(ve).some(tt=>Uo(tt,Be.sha)))||te.some(Be=>Be.column===De)||!Number.isFinite(Pt)||!te.every(Be=>{if(!Number.isFinite(Be.time))return!1;const tt=!!ot&&!!Be.branchEntryParentSha&&ot===Be.branchEntryParentSha?Bw:Rw;return Math.abs(Be.time-Pt)<=tt}))){tn=Y;break}}kt!=null&&(tn=kt),tn==null&&(tn=Math.max(Ot,q)),u.set(ne.visualId,tn),tn>=q&&(q=tn+1);const J=(Et=d.get(tn))!=null?Et:[];J.push({visualId:ne.visualId,sha:ne.id,column:De,time:Pt,branchEntryParentSha:ot}),d.set(tn,J),lt&&p.add(tn);for(const Y of Se){const te=(Bt=h.get(Y))!=null?Bt:[];te.push(tn),h.set(Y,te)}const Oe=(ct=j.get(ne.id))!=null?ct:[];Oe.push(tn),j.set(ne.id,Oe)};for(const ne of a){const Se=(me=x.get(ne.visualId))!=null?me:new Set;G(ne,Se)}const W=Math.max(1,a.length*2);for(let ne=0;ne<W;ne+=1){let Se=!1;for(const De of a){const _e=(Ee=x.get(De.visualId))!=null?Ee:new Set;if(_e.size===0)continue;const Le=($=u.get(De.visualId))!=null?$:1;let ot=1;for(const Ie of _e){const kt=k(Ie).flatMap(Ot=>{var yt;return(yt=j.get(Ot))!=null?yt:[]});kt.length>0&&(ot=Math.max(ot,Math.max(...kt)+1))}if(Le<ot){u.set(De.visualId,ot);const Ie=(le=j.get(De.id))!=null?le:[];Ie.length===0?j.set(De.id,[ot]):j.set(De.id,[...Ie.slice(0,-1),ot]),Se=!0}}if(!Se)break}return u}function Hc(t){var Ko,Ki,on,wi,Os,Qi,Zi,Yo,_s,Oi,zs,Pn,jo,ri,$s,Bo,bn,Gs,Is,Mo,Ns,li,Wo,Si,io,_o,xs,Vn,is,Eo,go,ao,Hn,Ps,Un,qs,Qo,Zo,zi,ci,ui,Lo,la,Jo,To,Oo,Rt,$i,yo,Fo,Xo,Ks,zo,vn,xo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,isDebugOpen:w,gridSearchQuery:S,gridFocusSha:j,checkedOutRef:k,orientation:T="horizontal",nodePositionOverrides:U={}}=t,R=T==="horizontal",M=new Map(i.map(C=>[C.name,C])),q=new Map(n.map(C=>[C.name,C])),G=Ew([...a.map(C=>{var X,ce,Me,Ve;return{id:C.fullSha,branchName:h,message:(X=C.prTitle)!=null?X:C.sha,author:"",date:C.date,parentSha:(Me=(ce=C.parentShas)==null?void 0:ce[0])!=null?Me:null,parentShas:(Ve=C.parentShas)!=null?Ve:[]}}),...((Ko=p[h])!=null?Ko:[]).map(C=>Br(h,C)),...c.map(C=>Br(C.branch||"",C)),...u.map(C=>Br(C.branch||"",C))]),W=new Map,Z=new Map;for(const C of i){if(C.name===h)continue;const X=Kx(C.name,g,p);Z.set(C.name,X);const ce=Gx(X.map(Yt=>Br(C.name,Yt)));if(ce.length>0){W.set(C.name,ce);continue}const Me=(wi=(on=(Ki=C.presidesFromSha)!=null?Ki:C.divergedFromSha)!=null?on:C.createdFromSha)!=null?wi:null;if(!Me)continue;const Ve=(Os=c.find(Yt=>Uo(Yt.fullSha,Me)||Uo(Yt.sha,Me)))==null?void 0:Os.date,dt=Ve?null:(Qi=Object.values(p).flat().find(Yt=>Uo(Yt.fullSha,Me)||Uo(Yt.sha,Me)))==null?void 0:Qi.date,Kt={id:`BRANCH_HEAD:${C.name}:${Me}`,branchName:C.name,message:`Branch ${C.name}`,author:C.lastCommitAuthor,date:(_s=(Yo=(Zi=Ve!=null?Ve:dt)!=null?Zi:C.createdDate)!=null?Yo:C.divergedFromDate)!=null?_s:C.lastCommitDate,parentSha:Me,clusterKey:null,childShas:[],kind:"branch-created"};W.set(C.name,[Kt])}const he=new Set(G.map(C=>C.id)),pe=(Oi=[...G].sort((C,X)=>Fi(C.date)-Fi(X.date)||C.id.localeCompare(X.id))[0])!=null?Oi:null,be=new Map(Array.from(W.entries()).map(([C,X])=>[C,new Set(X.map(ce=>ce.id))])),Ne=new Map;for(const C of i){if(C.name===h)continue;const X=Aw(C.name,p,g);if(X){Ne.set(C.name,X);continue}const ce=(zs=W.get(C.name))==null?void 0:zs[0];if(ce){const Me=(ri=(jo=(Pn=C.presidesFromSha)!=null?Pn:C.divergedFromSha)!=null?jo:C.createdFromSha)!=null?ri:null;Ne.set(C.name,{...ce,parentSha:Me})}}const Ze=new Map;for(const[C,X]of W.entries()){const ce=X.find(Me=>Me.kind!=="branch-created");ce&&Ze.set(C,ce)}const re=new Map;for(const[C,X]of W.entries()){const ce=X.filter(dt=>dt.kind!=="branch-created"),Ve=($s=(ce.length>0?ce:X)[0])!=null?$s:null;Ve&&re.set(C,Ve)}const ie=new Map;for(const C of i){if(C.name===h)continue;const X=(Bo=re.get(C.name))!=null?Bo:null,ce=(Gs=(bn=Ne.get(C.name))==null?void 0:bn.parentSha)!=null?Gs:null,Me=(Ns=(Mo=(Is=C.presidesFromSha)!=null?Is:C.divergedFromSha)!=null?Mo:C.createdFromSha)!=null?Ns:null,Ve=(li=X==null?void 0:X.parentSha)!=null?li:null,dt=(Wo=Ve!=null?Ve:ce)!=null?Wo:Me;dt&&ie.set(C.name,dt)}const L=C=>{var dt,Kt,Yt,ln,kn,Tn,pn,ts;const X=(dt=y[C.name])!=null?dt:null;if(!(X&&X!==h&&X!==C.name&&M.has(X)))return X!=null?X:"";const Me=(ln=(Yt=(Kt=ie.get(C.name))!=null?Kt:C.presidesFromSha)!=null?Yt:C.divergedFromSha)!=null?ln:C.createdFromSha;if(Me&&((kn=be.get(X))!=null?kn:new Set).has(Me))return X;const Ve=(pn=(Tn=Ne.get(C.name))==null?void 0:Tn.parentSha)!=null?pn:null;return Ve&&((ts=be.get(X))!=null?ts:new Set).has(Ve),X},ae=C=>{var Ve,dt,Kt,Yt,ln,kn,Tn,pn;const X=Ne.get(C.name),ce=(ln=(Yt=(Kt=(dt=(Ve=ie.get(C.name))!=null?Ve:X==null?void 0:X.parentSha)!=null?dt:C.presidesFromSha)!=null?Kt:C.divergedFromSha)!=null?Yt:C.createdFromSha)!=null?ln:null;if(!C.parentBranch&&!ce||!ce)return null;if(L(C)===h){if(he.has(ce))return ce;const ts=(kn=X==null?void 0:X.parentSha)!=null?kn:null;return ts&&he.has(ts)?ts:(pn=(Tn=pe==null?void 0:pe.id)!=null?Tn:ts)!=null?pn:ce}return he.has(ce),ce},F=C=>ae(C),me=new Map;for(const C of[...c,...u]){const X={...Br(C.branch||"",C),visualId:`${C.branch||""}:${C.fullSha}`};me.set(C.fullSha,X)}const Ee=new Map(me),$=C=>{Ee.has(C.id)||Ee.set(C.id,C)},le=new Map(Object.entries(d).map(([C,X])=>[C,new Set(X)])),ne=new Map(Array.from(W.entries()).map(([C,X])=>[C,new Set(X.map(ce=>ce.id))])),Se=new Set;for(const C of ne.values())for(const X of C)Se.add(X);for(const C of G)Se.has(C.id)||$({...C,visualId:`${C.branchName}:${C.id}`});for(const[C,X]of W.entries())for(const ce of X)$({...ce,visualId:`${C}:${ce.id}`});const _e=[...Array.from(Ee.values()).map(C=>({...C,visualId:`${C.branchName}:${C.id}`}))].sort((C,X)=>Fi(C.date)-Fi(X.date)||C.id.localeCompare(X.id)),Le=new Map;for(const C of _e){const X=(Si=Le.get(C.branchName))!=null?Si:new Set;X.add(C.id),Le.set(C.branchName,X)}const ot=(C,X)=>{const ce=Le.get(C);if(!ce||ce.size===0)return!1;for(const Me of ce)if(Uo(Me,X))return!0;return!1},Ie=(C,X)=>{const ce=Array.from(Le.entries()).filter(([Me])=>Me!==X).filter(([,Me])=>Array.from(Me).some(Ve=>Uo(Ve,C))).map(([Me])=>Me);return ce.length>0?ce.sort()[0]:C.slice(0,7)},kt=[],Ot=new Map,yt=new Map;for(const C of a){const X=C.fullSha,ce=C.targetBranch,Me=C.targetCommitSha;if(!X||!ce||!Me||!ot(ce,Me))continue;const Ve=((io=C.parentShas)!=null?io:[]).slice(1).filter(Kt=>!!Kt&&!Uo(Kt,X));if(Ve.length===0)continue;const dt=(_o=yt.get(X))!=null?_o:new Set;for(const Kt of Ve){dt.add(Kt);const Yt=Ie(Kt,ce);kt.push({sourceCommitSha:Kt,sourceBranchName:Yt,mergeCommitSha:X,targetCommitSha:Me,targetBranchName:ce});const ln=(xs=Ot.get(Yt))!=null?xs:new Map,kn=(Vn=ln.get(Kt))!=null?Vn:new Set;kn.add(ce),ln.set(Kt,kn),Ot.set(Yt,ln)}yt.set(X,dt)}const et=new Map;for(const C of i){if(C.name===h)continue;const X=ae(C);X&&et.set(C.name,X)}const lt=new Map;for(const C of _e){const X=yt.get(C.id);if(X&&X.size>0){const Ve=(is=lt.get(C.id))!=null?is:new Set;for(const dt of X)Ve.add(dt);lt.set(C.id,Ve)}if(C.branchName===h)continue;const ce=et.get(C.branchName);if(!ce||ce===C.id)continue;const Me=(Eo=lt.get(C.id))!=null?Eo:new Set;Me.add(ce),lt.set(C.id,Me)}const Pt=new Map,an=new Map;for(const C of _e){if(an.set(C.id,C),C.parentSha){const X=(go=Pt.get(C.parentSha))!=null?go:new Set;X.add(C.id),Pt.set(C.parentSha,X)}for(const X of(ao=lt.get(C.id))!=null?ao:[]){if(!X)continue;const ce=(Hn=Pt.get(X))!=null?Hn:new Set;ce.add(C.id),Pt.set(X,ce)}}const tn=new Map;for(const[C,X]of Pt.entries())tn.set(C,Array.from(X));const J=new Set(["branch-created","stash"]),Oe=new Set,mt=C=>{if(!C)return null;const X=_e.find(ce=>Uo(ce.id,C)||Uo(ce.visualId.split(":").slice(1).join(":"),C));return X!=null?X:null};for(const C of _e){if(C.parentSha){const ce=mt(C.parentSha),Me=!!ce&&Oe.has(ce.visualId);ce&&(C.kind==="stash"||C.kind==="branch-created"||Me)&&Oe.add(ce.visualId)}const X=(Ps=Pt.get(C.id))!=null?Ps:new Set;(X.size>1||Array.from(X).map(ce=>an.get(ce)).some(ce=>ce!=null&&ce.kind!=null&&J.has(ce.kind)))&&Oe.add(C.visualId)}const je=_e.map(C=>{var X,ce;return{...C,childShas:(ce=(X=tn.get(C.id))!=null?X:C.childShas)!=null?ce:[]}}),Ke=xy(je,q,lt),it=new Map;for(const C of je){const X=(Un=it.get(C.branchName))!=null?Un:[];X.push(C),it.set(C.branchName,X)}const gt=new Map,xt=new Map,Et=new Map,Bt=new Map,ct=new Map,Y=(C,X)=>{var kn,Tn,pn,ts,Qs;if(X.length===0)return[];const ce=[...X].sort((Wt,jn)=>{var z,H;const bs=(z=Ke.get(Wt.visualId))!=null?z:Number.MAX_SAFE_INTEGER,N=(H=Ke.get(jn.visualId))!=null?H:Number.MAX_SAFE_INTEGER;return bs!==N?bs-N:Fi(Wt.date)-Fi(jn.date)||Wt.id.localeCompare(jn.id)}),Me=new Map;let Ve=null,dt=0;const Kt=Wt=>{if(Wt.kind==="uncommitted")return"uncommitted";if(Wt.kind==="stash")return"stash";if(Wt.kind==="branch-created")return"branch-created";const jn=le.get(Wt.branchName);return jn!=null&&jn.has(Wt.id)?"unpushed":"pushed"};let Yt=null;for(const Wt of ce){const jn=Wt.kind==="stash"||Wt.kind==="branch-created",bs=Oe.has(Wt.visualId);if(jn)continue;const N=Kt(Wt);(!Ve||Yt!=null&&Yt!==N)&&(dt+=1,Ve=`cluster:${C}:segment:${dt}`);const z=(kn=Me.get(Ve))!=null?kn:[];z.push(Wt),Me.set(Ve,z),bs&&(Ve=null),Yt=N}const ln=[];for(const[Wt,jn]of Me.entries()){if(jn.length===0)continue;const N=[...jn].sort((ee,fe)=>{var wt,sn;const He=(wt=Ke.get(ee.visualId))!=null?wt:Number.MIN_SAFE_INTEGER,Ge=(sn=Ke.get(fe.visualId))!=null?sn:Number.MIN_SAFE_INTEGER;return He!==Ge?Ge-He:Fi(fe.date)-Fi(ee.date)||fe.id.localeCompare(ee.id)})[0].visualId,z={branchName:C,key:Wt,commitIds:jn.map(ee=>ee.visualId),leadId:N,count:jn.length};ln.push(z);const H=(Tn=ct.get(Wt))!=null?Tn:0;if(!Bt.has(Wt))Bt.set(Wt,N);else{const ee=Bt.get(Wt),fe=an.get(ee.split(":").slice(1).join(":"));if(fe){const He=(pn=Ke.get(fe.visualId))!=null?pn:Number.MIN_SAFE_INTEGER;((ts=Ke.get(N))!=null?ts:Number.MIN_SAFE_INTEGER)>He&&Bt.set(Wt,N)}}ct.set(Wt,Math.max(H,jn.length));for(const ee of z.commitIds){xt.set(ee,Wt);const fe=ee.split(":").slice(1).join(":"),He=(Qs=Et.get(fe))!=null?Qs:[];He.includes(Wt)||He.push(Wt),Et.set(fe,He)}}return ln};for(const[C,X]of it.entries())gt.set(C,Y(C,X));const te=new Map;for(const C of je)te.set(C.id,C);const ve=C=>{if(!C)return"none";const X=Array.from(te.values()).find(ce=>Uo(ce.id,C)||Uo(ce.id.slice(0,7),C)||Uo(C,ce.id));return X?`${X.id.slice(0,7)} ${X.branchName}`:C.slice(0,7)},Ae=w?["Lane rows (expected):",...[...n].sort((C,X)=>C.column-X.column||C.name.localeCompare(X.name)).map(C=>{var X;return`  row=${C.column} branch=${C.name} parent=${(X=C.parentName)!=null?X:"none"}`}),"",...i.flatMap(C=>{var Kt,Yt,ln,kn,Tn,pn,ts,Qs;const X=(Kt=p[C.name])!=null?Kt:[],ce=[...(Yt=Z.get(C.name))!=null?Yt:[]].reverse(),Me=new Set(((ln=W.get(C.name))!=null?ln:[]).map(Wt=>Wt.id)),Ve=(Tn=(kn=ce.find(Wt=>!Wt.parentSha||!ce.some(jn=>{var bs;return Uo(jn.fullSha,(bs=Wt.parentSha)!=null?bs:"")})))!=null?kn:ce[0])!=null?Tn:null,dt=(ts=(pn=Ve==null?void 0:Ve.parentSha)!=null?pn:ie.get(C.name))!=null?ts:null;return[`Branch ${C.name}`,`  ahead=${(Qs=g[C.name])!=null?Qs:0} previews=${ce.length} rendered=${Me.size}`,`  db parent commit=${ve(dt)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${C.name}`:"none"}`,...ce.map(Wt=>{const jn=Me.has(Wt.fullSha)?"visible":"hidden",bs=Me.has(Wt.fullSha)?"kept by render set":"dropped by render set";return`  ${jn} ${Wt.fullSha.slice(0,7)} ${Wt.message} [${bs}]`}),X.length===0?"  no preview data":null].filter(Wt=>Wt!=null)})]:[],rt=w?Array.from(W.entries()).map(([C,X])=>[`Branch debug ${C}`,...X.map(ce=>`  ${ce.id.slice(0,7)} ${ce.message}`)].join(`
`)):[],qe=Ke,Be=Nm/td,ge=20/td,tt=R?Fn+Be+ge:Ju+Be+ge,Fe=R?Ju+Be+ge:gl,Je=Math.max(0,...je.map(C=>{var X;return(X=qe.get(C.visualId))!=null?X:1})),Re=je.map(C=>{var Ve,dt;const X=q.get(C.branchName),ce=(Ve=qe.get(C.visualId))!=null?Ve:1,Me=(dt=X==null?void 0:X.column)!=null?dt:0;return R?{commit:C,row:ce,column:Me,x:La+(ce-1)*tt,y:Ba+Me*Fe}:{commit:C,row:ce,column:Me,x:La+Me*gl,y:Ba+(Je-ce)*tt}}),nt=C=>{var ce;const X=(ce=U[C.commit.visualId])!=null?ce:U[C.commit.id];return X?{...C,x:X.x,y:X.y}:C},St=Re.map(nt),Ct=S.trim().toLowerCase(),st=Ct?St.filter(C=>{const X=C.commit.id.toLowerCase(),ce=C.commit.id.slice(0,7).toLowerCase(),Me=C.commit.message.toLowerCase(),Ve=C.commit.branchName.toLowerCase();return X.includes(Ct)||ce.includes(Ct)||Me.includes(Ct)||Ve.includes(Ct)}):St,Lt=j&&(qs=St.find(C=>C.commit.id===j))!=null?qs:null,jt=new Set(st.map(C=>C.commit.id)),_t=(Qo=k==null?void 0:k.headSha)!=null?Qo:null,dn=(()=>{var X,ce;const C=(X=k==null?void 0:k.branchName)!=null?X:null;return!_t||!C?null:(ce=xt.get(`${C}:${_t}`))!=null?ce:null})(),pt=new Set;for(const[C,X]of ct.entries())X>1&&C!==dn&&pt.add(C);const Ht=[..._e].filter(C=>{var dt;const X=xt.get(C.visualId);if(!X)return!0;const ce=Bt.get(X),Me=(dt=ct.get(X))!=null?dt:1,Ve=x.has(X)||!pt.has(X)&&!b.has(X);return Me<=1||Ve||ce===C.visualId}),nn=xy(Ht,q,lt),zt=Nm/td,vt=20/td,qt=R?Fn+zt+vt:Ju+zt+vt,rn=R?Ju+zt+vt:gl,fn=Math.max(0,..._e.map(C=>{var X;return(X=Ke.get(C.visualId))!=null?X:1})),Nt=Math.max(0,...Ht.map(C=>{var X;return(X=nn.get(C.visualId))!=null?X:1})),yn=Math.max(0,fn-Nt),xn=[...Ht.map(C=>{var Ve,dt;const X=q.get(C.branchName),ce=(Ve=nn.get(C.visualId))!=null?Ve:1,Me=(dt=X==null?void 0:X.column)!=null?dt:0;return nt(R?{commit:C,row:ce,column:Me,x:La+(yn+ce-1)*qt,y:Ba+Me*rn}:{commit:C,row:ce,column:Me,x:La+Me*gl,y:Ba+(Nt-ce)*qt})})].sort((C,X)=>C.row!==X.row?C.row-X.row:C.column!==X.column?C.column-X.column:C.commit.visualId.localeCompare(X.commit.visualId)).map(C=>({...C})),at=new Set;for(const C of xn){let X=C.row,ce=`${C.column}:${X}`;for(;at.has(ce);)X+=1,ce=`${C.column}:${X}`;C.row=X,at.add(ce)}const Kn=Math.max(0,...xn.map(C=>C.row));for(const C of xn){if(R){C.x=La+(yn+C.row-1)*qt,C.y=Ba+C.column*rn;continue}C.x=La+C.column*gl,C.y=Ba+(Kn-C.row)*qt}const Ls=new Map;for(const C of xn){const X=(Zo=Ls.get(C.commit.id))!=null?Zo:[];X.push(C),Ls.set(C.commit.id,X)}const No=new Map;for(const C of xn){const X=xt.get(C.commit.visualId);if(!X)continue;const ce=No.get(X);(!ce||(R?C.x>ce.x:C.y<ce.y))&&No.set(X,C)}const So=(C,X)=>`${C.toFixed(1)} ${X.toFixed(1)}`,Co=Math.max(0,...xn.map(C=>C.row)),mo=Math.max(0,...n.map(C=>C.column)),Qt=Math.max(0,...xn.map(C=>C.x+Fn)),Rn=Math.max(0,...xn.map(C=>C.y+Dl+Ys)),Es=Math.max(R?La*2+Math.max(0,Co-1)*qt+Fn+qh+vt:La*2+(mo+1)*gl,Qt+La),Qn=Math.max(R?Ba*2+mo*rn+Ys+qh+vt:Ba*2+Math.max(0,Co-1)*qt+Ys+qh+vt,Rn+Ba),Cn=[],no=new Map(i.map(C=>{var ce,Me;const X=new Date((Me=(ce=C.createdDate)!=null?ce:C.divergedFromDate)!=null?Me:C.lastCommitDate).getTime();return[C.name,Number.isFinite(X)?X:0]})),Ts=C=>{var X;return(X=no.get(C))!=null?X:0},As=[],mn=C=>{w&&As.push(C)},ws=new Set,Ro=new Map,fs=(C,X)=>{var Me;const ce=(Me=Ro.get(C))!=null?Me:[];ce.includes(X)||ce.push(X),Ro.set(C,ce)},ko=new Set,so=new Set,Jn=new Set,Fs=(C,X)=>{var Ve,dt;if(!C)return null;const ce=ed(Ls,C,X);if(ce)return ce;const Me=(Ve=xt.get(`${X!=null?X:h}:${C}`))!=null?Ve:xt.get(C);return Me&&(dt=No.get(Me))!=null?dt:null},hn=new Set;for(const C of i){const X=F(C);X&&so.add(X);const ce=(zi=ie.get(C.name))!=null?zi:null;ce&&Jn.add(ce)}const Xs=C=>{var Ve;const X=Fs(C.id,C.branchName);if(X)return X;const ce=xt.get(C.visualId);if(!ce)return null;const Me=Bt.get(ce);return Me&&(Ve=xn.find(dt=>dt.commit.id===Me))!=null?Ve:null},vi=(C,X)=>C?ed(Ls,C,X):null,Ss=(C,X)=>R?{x:C.x-ta,y:C.y+Ys/2,face:"left"}:{x:C.x+Fn/2,y:C.y+Ys+ta,face:"bottom"},po=C=>R?{x:C.x-ta,y:C.y+Ys/2,face:"left"}:{x:C.x+Fn/2,y:C.y+Ys+ta,face:"bottom"},Ds=(C,X)=>C.column!==X.column?!0:R?C.commit.branchName!==X.commit.branchName:!1,hs=(C,X,ce)=>{if(!R)return{x:X?C.x+Fn:C.x+Fn/2,y:X?C.y+Ys/2:C.y,face:X?"right":"top"};if(!X)return{x:C.x+Fn+ta,y:C.y+Ys/2,face:"right"};if(ce&&ce.column===C.column&&ce.commit.branchName!==C.commit.branchName){if(ce.x>C.x)return{x:C.x+Fn/2,y:C.y+Ys+ta,face:"bottom"};if(ce.x<C.x)return{x:C.x+Fn/2,y:C.y-ta,face:"top"}}return!ce||ce.column===C.column?{x:C.x+Fn+ta,y:C.y+Ys/2,face:"right"}:ce.column>C.column?{x:C.x+Fn/2,y:C.y+Ys+ta,face:"bottom"}:{x:C.x+Fn/2,y:C.y-ta,face:"top"}},es=C=>R?{x:C.x+Fn/2,y:C.y+Ys+ta,face:"bottom"}:{x:C.x+Fn,y:C.y+Ys/2,face:"right"},oo=(C,X)=>ed(Ls,C,X),In=(C,X)=>vi(C,X),Cs=[],ms=new Set;for(const C of kt){const X=(ci=Fs(C.targetCommitSha,C.targetBranchName))!=null?ci:null;if(!X){mn({id:`merge:${C.mergeCommitSha}:${C.sourceCommitSha}:target`,kind:"merge",parent:C.sourceCommitSha,child:C.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ce=C.sourceCommitSha,Me=`merge:${C.mergeCommitSha}:${ce!=null?ce:"unknown"}`;if(!ce||Uo(ce,C.targetCommitSha)){mn({id:Me,kind:"merge",parent:ce!=null?ce:"unknown",child:C.targetCommitSha,rendered:!1,reason:ce?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(ui=ed(Ls,ce))!=null?ui:null;if(!Ve){mn({id:Me,kind:"merge",parent:ce,child:C.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===X.commit.id){mn({id:Me,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let dt,Kt,Yt;const ln=R?X.x+Fn/2:X.x+Fn-Zh,kn=R?X.y+Ys+Zh:X.y+Ys/2,Tn=R?"bottom":"right";R?(dt=Ve.x+Fn+Zh,Kt=Ve.y+Ys/2,Yt="right"):(dt=Ve.x+Fn/2,Kt=Ve.y,Yt="top");const pn=`${dt.toFixed(2)}:${Kt.toFixed(2)}:${ln.toFixed(2)}:${kn.toFixed(2)}`;if(ms.has(pn)){mn({id:Me,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}ms.add(pn),Cs.push({id:Me,fromX:dt,fromY:Kt,toX:ln,toY:kn,fromFace:Yt,toFace:Tn,zIndex:Ts(Ve.commit.branchName)}),mn({id:Me,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!0,reason:`merge connector rendered to ${C.targetBranchName}`})}const ps=new Set;for(const C of i){if(C.name===h)continue;const X=Ne.get(C.name);if(!X)continue;const ce=L(C),Me=oo((Lo=ie.get(C.name))!=null?Lo:"",ce),Ve=(la=Ze.get(C.name))!=null?la:X,dt=(Jo=In(Ve.id,C.name))!=null?Jo:Xs(Ve);if(!Me||!dt||Me.commit.id===dt.commit.id){const Tn=xt.get(`${C.name}:${X.id}`),pn=xt.get(`${C.name}:${Ve.id}`),ts=!!Tn&&!pt.has(Tn),Qs=!!pn&&!pt.has(pn),Wt=!!Tn&&!x.has(Tn)&&(ts?b.has(Tn):!0),jn=!!pn&&!x.has(pn)&&(Qs?b.has(pn):!0);!Me&&!Wt&&fs((To=dt==null?void 0:dt.commit.id)!=null?To:X.id,"Missing parent node"),!dt&&!jn&&fs(X.id,"Missing child node"),mn({id:`branch:${(Oo=Me==null?void 0:Me.commit.id)!=null?Oo:"null"}->${(Rt=dt==null?void 0:dt.commit.id)!=null?Rt:"null"}`,kind:"branch",parent:($i=Me==null?void 0:Me.commit.id)!=null?$i:"null",child:(yo=dt==null?void 0:dt.commit.id)!=null?yo:"null",rendered:!1,reason:Me?dt?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Kt=`branch:${Me.commit.id}->${dt.commit.id}`;if(hn.has(Kt)){mn({id:Kt,kind:"branch",parent:Me.commit.id,child:dt.commit.id,rendered:!1,reason:"duplicate connector key"});continue}hn.add(Kt),ko.add(Me.commit.id);const Yt=Ds(Me,dt);Me.commit.branchName!==dt.commit.branchName&&ps.add(Me.commit.id);const ln=es(Me),kn=po(dt);Cn.push({id:Kt,fromX:ln.x,fromY:ln.y,toX:kn.x,toY:kn.y,fromFace:ln.face,toFace:kn.face,zIndex:Ts(dt.commit.branchName)}),mn({id:Kt,kind:"branch",parent:Me.commit.id,child:dt.commit.id,rendered:!0,reason:Yt?"branch connector rendered":R?"horizontal connector rendered":"vertical connector rendered"})}for(const C of _e){const X=Xs(C);if(!X)continue;const ce=(Fo=C.parentSha)!=null?Fo:null;if(!ce)continue;const Me=(Xo=Fs(ce,C.branchName))!=null?Xo:oo(ce,C.branchName);if(!Me){const ln=(Ks=xt.get(`${C.branchName}:${ce}`))!=null?Ks:xt.get(ce),kn=!!ln&&!pt.has(ln);!!ln&&!x.has(ln)&&(kn?b.has(ln):!0)||fs(C.id,"Missing parent node"),mn({id:`${C.visualId}->${ce}`,kind:"ancestry",parent:ce,child:C.id,rendered:!1,reason:"missing parent node"});continue}if(X.commit.id===Me.commit.id){fs(X.commit.id,"Parent and child resolve to the same node"),mn({id:`${Me.commit.id}->${X.commit.id}`,kind:"ancestry",parent:Me.commit.id,child:X.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${C.branchName}:${(zo=Me.commit.visualId)!=null?zo:Me.commit.id}->${X.commit.visualId}`;if(hn.has(Ve)){fs(Me.commit.id,"Duplicate connector key"),fs(X.commit.id,"Duplicate connector key"),mn({id:Ve,kind:"ancestry",parent:Me.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate connector key"});continue}hn.add(Ve),ko.add(Me.commit.id);const dt=Ds(Me,X),Kt=hs(Me,dt,X),Yt=Ss(X);Cn.push({id:Ve,fromX:Kt.x,fromY:Kt.y,toX:Yt.x,toY:Yt.y,fromFace:Kt.face,toFace:Yt.face,zIndex:Ts(X.commit.branchName)}),mn({id:Ve,kind:"ancestry",parent:Me.commit.id,child:X.commit.id,rendered:!0,reason:dt?"ancestry connector rendered":R?"horizontal ancestry rendered":"vertical ancestry rendered"}),ws.add(Me.commit.id),ws.add(X.commit.id)}const Li=new Map;for(const C of xn){const X=(vn=Li.get(C.commit.branchName))!=null?vn:[];X.push(C),Li.set(C.commit.branchName,X)}for(const[C,X]of Li.entries()){if(X.length<2)continue;const ce=[...X].sort((Me,Ve)=>{var dt,Kt,Yt,ln,kn,Tn,pn,ts;return Me.row!==Ve.row?Me.row-Ve.row:Fi((Kt=(dt=Me==null?void 0:Me.commit)==null?void 0:dt.date)!=null?Kt:null)-Fi((ln=(Yt=Ve==null?void 0:Ve.commit)==null?void 0:Yt.date)!=null?ln:null)||((Tn=(kn=Me==null?void 0:Me.commit)==null?void 0:kn.id)!=null?Tn:"").localeCompare((ts=(pn=Ve==null?void 0:Ve.commit)==null?void 0:pn.id)!=null?ts:"")});for(let Me=1;Me<ce.length;Me+=1){const Ve=ce[Me-1],dt=ce[Me];if(Ve.commit.id===dt.commit.id)continue;const Kt=(xo=dt.commit.parentSha)!=null?xo:null;if(Kt&&oo(Kt,dt.commit.branchName))continue;const Yt=`chain:${C}:${Ve.commit.id}->${dt.commit.id}`;if(hn.has(Yt)){fs(Ve.commit.id,"Duplicate branch chain connector"),fs(dt.commit.id,"Duplicate branch chain connector"),mn({id:Yt,kind:"ancestry",parent:Ve.commit.id,child:dt.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}hn.add(Yt);const ln=Ds(Ve,dt),kn=hs(Ve,ln,dt),Tn=Ss(dt);Cn.push({id:Yt,fromX:kn.x,fromY:kn.y,toX:Tn.x,toY:Tn.y,fromFace:kn.face,toFace:Tn.face,zIndex:Ts(dt.commit.branchName)}),mn({id:Yt,kind:"ancestry",parent:Ve.commit.id,child:dt.commit.id,rendered:!0,reason:"branch chain rendered"}),ws.add(Ve.commit.id),ws.add(dt.commit.id)}}return{branchByName:M,laneByName:q,mainCommits:G,branchCommitsByLane:W,branchPreviewSets:Z,allCommits:_e,clustersByBranch:gt,clusterKeyByCommitId:xt,clusterKeyBySha:Et,leadByClusterKey:Bt,clusterCounts:ct,debugRows:Ae,branchDebugRows:rt,nodes:Re,normalizedSearchQuery:Ct,matchingNodes:st,matchingNodeIds:jt,focusedNode:Lt,checkedOutClusterKey:dn,defaultCollapsedClumps:pt,visibleCommitsList:Ht,renderNodes:xn,visibleNodesBySha:Ls,visibleNodeByClusterKey:No,pointFormatter:So,contentWidth:Es,contentHeight:Qn,connectors:Cn,mergeConnectors:Cs,connectorDecisions:As,nodeWarnings:Ro,connectorParentShas:ko,branchStartShas:so,branchOffNodeShas:Jn,crossBranchOutgoingShas:ps,commitIdsWithRenderedAncestry:ws,branchBaseCommitByName:Ne,firstBranchCommitByName:re,mergeDestinations:kt,mergeTargetBranchesBySourceBranchAndCommitSha:Ot}}const Lw=8,Ow=44,by=120,vy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Qx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Lw){const G=d/g,W=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+G*Z,c1y:n+W*Z,c2x:i-G*Z,c2y:a-W*Z}}if(Math.min(p,y)<Ow){const G=d/g,W=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+G*Z,c1y:n+W*Z,c2x:i-G*Z,c2y:a-W*Z}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,y*.32),k=Math.min(160,y*.42),T=vy(c),U=vy(u);if(!(T==="v"&&U==="h"||T==="v"&&U==null&&y>=p||T==null&&U==="h"&&y>=p||T==="v"&&U==="v"||T==null&&U==null&&y>p)){const G=i,W=n;return{kind:"elbowH",cx:G,cy:W,s1c1x:t+x*w,s1c1y:n,s1c2x:G-x*S,s1c2y:W,s2c1x:G,s2c1y:W+b*j,s2c2x:i,s2c2y:a-b*k}}const M=t,q=a;return{kind:"elbowV",cx:M,cy:q,s1c1x:t,s1c1y:n+b*k,s1c2x:M,s1c2y:q-b*j,s2c1x:M+x*w,s2c1y:q,s2c2x:i-x*S,s2c2y:a}}function zw(t,n,i,a,c,u){const d=Qx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function wy(t,n,i,a,c,u,d){const h=Qx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,T=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const _p=2.25,xc=_p/2,$w=.45,Iw=.02,ia=_p,Od=10,Pw=-100,Sy=0,Hw=.25,nd=.001,Uw=12,Vw=Fn+48;function gn(...t){return t.filter(Boolean).join(" ")}function Cy(t){return Math.max($w,Math.min(_p,t))}function Yw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ww(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Fw(t,n,i,a,c,u,d){const h=zw(t,n,i,a,u,d),p=Ww(h);return Zx(c,p)}function Jx(t,n){return{left:t.x,top:t.y+n,right:t.x+Fn,bottom:t.y+Dl+Ys+4}}function Xw(t,n){const i=Vw,a=Math.max(120,Math.ceil(Dl+Ys+4-n+24)),c=new Map;for(const u of t){const d=Jx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=g;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Gw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=g;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Jx(S,a);Zx(n,j)&&b.add(w)}return b}function ky(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ia;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function qw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function jy(t,n,i){const a=n/ia;return!Number.isFinite(a)||a<=0?t:qw(t,100/a)}function My(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function Bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Rm(t,n){if(n){const i=My(n),a=My(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Jh(t,n){return t.pathExists===!1?!1:Rm(t,n)}function Kw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Qw({compactLabels:t=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:w,onMergeRefsIntoBranch:S,selectedPushTargets:j,selectedPushLabel:k,canPushCurrentBranch:T,pushCurrentBranchLabel:U,pushableRemoteBranchCount:R,selectedCommitTargetOption:M,mergeInProgress:q,setMergeTargetCommitSha:G,worktrees:W,currentRepoPath:Z,worktreeMenuOpen:he,setWorktreeMenuOpen:pe,onSwitchToWorktree:be,onRemoveWorktree:Ne,removeWorktreeInProgress:Ze,setCommitDialogOpen:re,setNewBranchDialogOpen:ie}){var yt,et;const L=n.length>0,ae=n.length>0&&n.every(lt=>lt==="WORKING_TREE"),[F,me]=_.useState(!1),Ee=_.useRef(null),$=_.useRef(null),le="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ne=!!y&&h&&!a&&!i&&(!L||ae),Se=!!x&&T&&!L&&!d,De=!!w&&j.length>0&&!d,_e=!!b&&R>=2&&!L&&!d,Le=!!g&&!u&&!L&&!c,ot="Push Selected...",Ie=ne?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>re(!0),disabled:!ne}:Se?{label:d?"Pushing...":U,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Se}:De?{label:ot,iconSrc:"/icon-pushSelected.svg",run:()=>void(w==null?void 0:w(j.map(lt=>({branchName:lt.branchName,targetSha:lt.targetSha})))),disabled:!De}:null,kt=(lt,Pt)=>l.jsx("span",{"aria-hidden":"true",className:gn("inline-block shrink-0 bg-current",Pt),style:{WebkitMaskImage:`url(${lt})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${lt})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const lt=Pt=>{var tn,J;const an=Pt.target;an&&((tn=Ee.current)!=null&&tn.contains(an)||(J=$.current)!=null&&J.contains(an)||(me(!1),pe(!1)))};return window.addEventListener("pointerdown",lt),()=>window.removeEventListener("pointerdown",lt)},[pe]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:Ee,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{Ie&&Ie.run()},disabled:!Ie||Ie.disabled,className:gn(le,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[kt((yt=Ie==null?void 0:Ie.iconSrc)!=null?yt:"/icon-commit.svg","h-4.5 w-4.5"),t?null:l.jsx("span",{children:(et=Ie==null?void 0:Ie.label)!=null?et:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>me(lt=>!lt),disabled:!Ie,"aria-haspopup":"menu","aria-expanded":F,className:gn(le,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(Fx,{className:"h-3.5 w-3.5 shrink-0"})}),F&&Ie?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{me(!1),re(!0)},disabled:!ne,className:gn(le,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ne&&"text-foreground opacity-50"),children:[kt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{me(!1),x==null||x()},disabled:!Se,className:gn(le,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Se&&"text-foreground opacity-50"),children:[kt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":U]}),l.jsxs("button",{type:"button",onClick:()=>{me(!1),w==null||w(j.map(lt=>({branchName:lt.branchName,targetSha:lt.targetSha})))},disabled:!De,className:gn(le,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!De&&"text-foreground opacity-50"),title:k,children:[kt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),ot]}),l.jsxs("button",{type:"button",onClick:()=>{me(!1),b==null||b()},disabled:!_e,className:gn(le,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!_e&&"text-foreground opacity-50"),children:[kt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{me(!1),g==null||g()},disabled:!Le,className:gn(le,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Le&&"text-foreground opacity-50"),children:[kt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>ie(!0),disabled:p,className:gn(le,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",t?"w-7 justify-center px-0":""),children:[l.jsx(Xx,{className:gn("h-3.5 w-3.5 shrink-0",t?"":"mr-1.5")}),t?null:p?"Creating...":"Branch"]})}),n.length>1&&M.options.length>0&&M.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),M.options.map(lt=>{const Pt=lt.targetBranch===M.targetBranch;return l.jsx("button",{type:"button",onClick:()=>G(lt.targetSha),className:gn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Pt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:lt.targetBranch},`merge-${lt.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(M.sources,M.targetBranch),disabled:M.sources.length===0||q,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(xw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),q?"Merging...":"Confirm"]})]}):null,W.length>0&&(be||Ne)?l.jsxs("div",{ref:$,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>pe(lt=>!lt),className:gn(le,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(mw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),W.length,t?null:` ${W.length===1?"Worktree":"Worktrees"}`]}),he?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:W.map(lt=>{var Pt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:lt.path,children:Rm(lt,Z)?Kw(lt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(Pt=lt.branchName)!=null?Pt:"detached"," • ",lt.headSha.slice(0,7)]})]}),Rm(lt,Z)?l.jsxs("div",{className:"flex items-center gap-1",children:[be?l.jsx("button",{type:"button",onClick:()=>{pe(!1),be(lt.path)},disabled:Ze||lt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Ne?l.jsx("button",{type:"button",onClick:()=>void Ne(lt.path,lt.isPrunable),disabled:Ze,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ze?"...":"Remove"}):null]}):null]},lt.path)})}):null]}):null]})})}function Zw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Jw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:j,focusedNode:k,renderNodes:T,shouldRenderNode:U,manuallyOpenedClumps:R,manuallyClosedClumps:M,defaultCollapsedClumps:q,leadByClusterKey:G,clusterKeyByCommitId:W,clusterCounts:Z,commitIdsWithRenderedAncestry:he,nodeWarnings:pe,connectorParentShas:be,branchStartShas:Ne,branchOffNodeShas:Ze,crossBranchOutgoingShas:re,branchBaseCommitByName:ie,branchStartAccentClass:L,connectorParentAccentClass:ae,commitCornerRadiusPx:F,lineStrokeWidth:me,pointFormatter:Ee,connectors:$,mergeConnectors:le,cullConnectorPath:ne,flushCameraReactTick:Se,setManuallyOpenedClumps:De,setManuallyClosedClumps:_e,onCommitCardClick:Le,unpushedCommitShasSetByBranch:ot,remoteCommitShas:Ie,checkedOutHeadSha:kt}){const[Ot,yt]=_.useState(new Set),et=_.useRef(null);_.useEffect(()=>{const J=new Set;Z.forEach((je,Ke)=>{(R.has(Ke)||!q.has(Ke)&&!M.has(Ke))&&J.add(Ke)});const Oe=et.current;if(Oe==null){et.current=J;return}const mt=[];if(J.forEach(je=>{Oe.has(je)||mt.push(je)}),mt.length>0){yt(Ke=>{const it=new Set(Ke);return mt.forEach(gt=>it.add(gt)),it});const je=window.setTimeout(()=>{yt(Ke=>{const it=new Set(Ke);return mt.forEach(gt=>it.delete(gt)),it})},260);return et.current=J,()=>{window.clearTimeout(je)}}et.current=J},[Z,q,M,R]);const lt=(J,Oe)=>{const mt=Oe.zIndex-J.zIndex;if(mt!==0)return mt;const je=Math.min(J.fromY,J.toY),Ke=Math.min(Oe.fromY,Oe.toY),it=je-Ke;return it!==0?it:J.id.localeCompare(Oe.id)},Pt=le.filter(J=>ne(J)).sort(lt),an=$.filter(J=>ne(J)).sort(lt),tn=T.filter(J=>U(J));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[tn.map(J=>{var Ht,nn,zt,vt,qt,rn;const Oe=W.get(J.commit.visualId),mt=Oe?R.has(Oe)||!q.has(Oe)&&!M.has(Oe):!1,je=Oe?G.get(Oe)===J.commit.visualId:!1,Ke=Oe!=null&&mt&&!je&&Ot.has(Oe),it=Oe&&(Ht=Z.get(Oe))!=null?Ht:1,gt=he.has(J.commit.id),xt=(nn=pe.get(J.commit.id))!=null?nn:[],Et=xt.length>0&&!gt,Bt=w.includes(J.commit.id),ct=J.commit.id==="WORKING_TREE"||J.commit.kind==="uncommitted",Y=J.commit.kind==="stash"||J.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(J.commit.id),ve=te?`Stash:${te[1]}`:null,Ae=Y?J.commit.message.trim()&&J.commit.message.trim()!=="git-visualizer"?J.commit.message:"Stashed changes":J.commit.message,rt=J.commit.kind==="branch-created"&&J.commit.id.startsWith("BRANCH_HEAD:"),qe=ct||((vt=(zt=ot.get(J.commit.branchName))==null?void 0:zt.has(J.commit.id))!=null?vt:!1),Be=J.commit.isRemote===!0,ge=!ct&&!qe&&(Be||Ie.has(J.commit.id)),Fe=(ct||kt!=null&&J.commit.id===kt)&&!Bt,Je=ge&&!Fe&&!Bt,Re=Fe?"text-checked":Je?"text-remote":Bt?"text-select":"text-foreground",nt=Fe?{color:"var(--checked)"}:Je?{color:"var(--remote)"}:Bt?{color:"var(--select)"}:void 0,St=(qt=nt==null?void 0:nt.color)!=null?qt:"var(--foreground)",Ct=(k==null?void 0:k.commit.id)===J.commit.id?St:Fe?"var(--checked)":Je?"var(--remote)":Bt?"var(--select)":Kh,st=Y||rt||ct?1.25/b:me,Lt=Y||ct||rt,jt=`${12/b} ${6/b}`,_t=st/2,dn=`M ${_t} ${_t} H ${Fn-_t-F} Q ${Fn-_t} ${_t} ${Fn-_t} ${_t+F} V ${176-_t-F} Q ${Fn-_t} ${176-_t} ${Fn-_t-F} ${176-_t} H ${_t+F} Q ${_t} ${176-_t} ${_t} ${176-_t-F} V ${_t}`,pt=qe&&!Fe&&!Bt?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(Zw,{fadeIn:Ke,dataCommitCard:"true",className:gn("group absolute z-20",S&&!j.has(J.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&j.has(J.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===J.commit.id?"z-30":""),style:{left:J.x,top:J.y,width:Fn,height:Dl+Ys+4,overflow:"visible"},onClick:fn=>Le(fn,J),onPointerDown:fn=>y(fn,J),children:[Lt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Fn} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:dn,fill:"none",stroke:Ct,strokeWidth:st,strokeDasharray:jt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-background/95 pb-0",children:[l.jsx("div",{className:gn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Re,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:nt!=null?nt:pt,children:Y&&ve?ve:J.commit.branchName?`${J.commit.branchName}/${J.commit.id.slice(0,7)}`:J.commit.id.slice(0,7)}),je&&it>1?l.jsx("button",{type:"button",onMouseDown:fn=>{fn.stopPropagation()},onClick:fn=>{if(fn.stopPropagation(),fn.preventDefault(),!Oe)return;!q.has(Oe)?(De(yn=>{if(!yn.has(Oe))return yn;const It=new Set(yn);return It.delete(Oe),It}),_e(yn=>{const It=new Set(yn);return It.has(Oe)?It.delete(Oe):It.add(Oe),It})):(_e(yn=>{if(!yn.has(Oe))return yn;const It=new Set(yn);return It.delete(Oe),It}),De(yn=>{const It=new Set(yn);return It.has(Oe)?It.delete(Oe):It.add(Oe),It})),Se()},className:gn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Re),style:nt!=null?nt:pt,children:mt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${it-1}`}):null]})}),l.jsx("div",{className:gn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Fe&&!qe&&!Y&&!rt?"bg-checked-muted":Je&&!Y&&!rt?"bg-remote-muted":Bt&&!qe&&!Y&&!rt?"bg-select-muted":qe||Y||rt?"bg-transparent":"bg-muted",Lt?"border-solid":"",Ze.has(J.commit.id)||Ne.has(J.commit.id)||re.has(J.commit.id)?L:be.has(J.commit.id)?ae:((rn=ie.get(J.commit.branchName))==null?void 0:rn.id)===J.commit.id?"border-amber-500":Et?"border-red-500":"",(S&&j.has(J.commit.id)&&!d,"")),style:{top:0,borderWidth:`${st}px`,borderColor:Lt?"transparent":Ct,borderTopLeftRadius:0,borderTopRightRadius:`${F}px`,borderBottomRightRadius:`${F}px`,borderBottomLeftRadius:`${F}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:gn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Re,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:nt!=null?nt:pt,children:je&&mt?Ae:je&&it>1?`${Ae} +${it-1}`:Ae}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Et?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:xt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!Y?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:gn("select-text text-sm font-normal",Re),"data-selectable-text":"true",style:nt!=null?nt:pt,children:["@",J.commit.author]}),l.jsx("div",{className:gn("select-text text-sm font-normal",Re),"data-selectable-text":"true",style:nt!=null?nt:pt,children:new Date(J.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},J.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Pt.map(J=>{const{fromX:Oe,fromY:mt,toX:je,toY:Ke}=J,it=wy(Oe,mt,je,Ke,Ee,J.fromFace,J.toFace);return l.jsx("path",{d:it,fill:"none",stroke:Kh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},J.id)}),an.map(J=>{const{fromX:Oe,fromY:mt,toX:je,toY:Ke}=J,it=wy(Oe,mt,je,Ke,Ee,J.fromFace,J.toFace);return l.jsx("path",{d:it,fill:"none",stroke:Kh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},J.id)})]})]})})})}function eS({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function tS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:T,onNewBranchConfirm:U,selectedCommitCanCreateBranch:R,currentCheckedOutCommitCanCreateBranch:M,createBranchFromNodeInProgress:q}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:G=>i(G.target.value),onKeyDown:G=>{(G.metaKey||G.ctrlKey)&&G.key==="Enter"&&(G.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(gw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(G=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:G},G))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:gn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:gn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:G=>j(G.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:U,disabled:!w.trim()||q||S==="from-selected-node"&&!R&&!M,className:gn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Xx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),q?"Creating...":"Create"]})]})]})}):null]})}const Ey="/icon-GitOrientation.svg";function nS({compactLabels:t=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:gn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",t?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:gn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ey})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ey})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),t?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function sS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(kw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(uw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Fx,{className:"h-4 w-4 shrink-0"})})]}):null]})}const oS="git-visualizer:map-grid-camera:";function iS({mapPadHostRef:t,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a}){const c=_.useRef({x:0,y:0}),u=_.useRef(xc),d=_.useRef(null),h=_.useRef({panX:0,panY:0,zoom:xc}),p=_.useRef(null),y=_.useRef(xc),g=_.useRef(null),[x,b]=_.useState(!1),[w,S]=_.useState(xc),[j,k]=_.useState(0),T=_.useRef(null),U=_.useRef(0),R=_.useRef(!1),M=_.useCallback(()=>`${oS}${window.location.pathname}`,[]),q=_.useCallback(ie=>{try{window.localStorage.setItem(M(),JSON.stringify(ie))}catch{}},[M]),G=_.useCallback(()=>{const ie=t.current;if(!ie)return null;const L=ie.getBoundingClientRect(),ae=getComputedStyle(ie),F=Number.parseFloat(ae.borderLeftWidth)||0,me=Number.parseFloat(ae.borderTopWidth)||0,Ee=Number.parseFloat(ae.paddingLeft)||Od,$=Number.parseFloat(ae.paddingTop)||Od;return{x:L.left+F+Ee,y:L.top+me+$}},[t]),W=_.useCallback(()=>{T.current!=null&&(window.clearTimeout(T.current),T.current=null),_.startTransition(()=>{k(ie=>ie+1)}),U.current=performance.now()},[]),Z=_.useCallback((ie,L,ae,F)=>{const me=h.current,Ee={panX:ie,panY:L,zoom:ae};h.current=Ee;const $=n.current;if($&&($.style.transform=`translate3d(${ie}px, ${L}px, 0) scale(${ae/ia})`),Math.abs(y.current-ae)>nd&&(y.current=ae,S(ae)),(F==null?void 0:F.emitTick)===!1||R.current)return;if(Math.abs(ae-me.zoom)>nd){W();return}const Se=performance.now()-U.current;if(Se>=Sy){W();return}T.current!=null&&window.clearTimeout(T.current),T.current=window.setTimeout(()=>{T.current=null,W()},Sy-Se)},[W,n]),he=_.useRef(null),pe=_.useCallback(()=>{p.current!=null||!he.current||(p.current=window.requestAnimationFrame(he.current))},[]),be=_.useCallback(()=>{R.current=!0,b(!0),g.current!=null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{g.current=null,R.current=!1,b(!1),W(),q(h.current)},90)},[W,q]),Ne=_.useCallback((ie,L,ae)=>{i&&(c.current={x:ie,y:L},u.current=ae,be(),pe())},[i,be,pe]);he.current=()=>{p.current=null;const ie=h.current,L=c.current.x,ae=c.current.y,F=u.current,me=d.current,Ee=Math.abs(F-ie.zoom)<=nd?F:ie.zoom+(F-ie.zoom)*Hw,$=me!=null?me.anchorX-me.worldX*(Ee/ia):L,le=me!=null?me.anchorY-me.worldY*(Ee/ia):ae;me!=null&&Math.abs(Ee-F)<=nd&&(d.current=null),Z($,le,Ee),$!==L||le!==ae||Ee!==F?he.current&&(p.current=window.requestAnimationFrame(he.current)):W()};const Ze=_.useCallback((ie,L,ae)=>{if(!i)return;const F=Cy(ae),me=c.current.x,Ee=c.current.y,$=u.current,le=G();if(!le){Ne(me,Ee,F);return}const ne=ie-le.x,Se=L-le.y,De=$/ia,_e=F/ia,Le=(ne-me)/De,ot=(Se-Ee)/De,Ie=ne-Le*_e,kt=Se-ot*_e;d.current={anchorX:ne,anchorY:Se,worldX:Le,worldY:ot},Ne(Ie,kt,F)},[G,i,Ne]),re=_.useCallback(ie=>{if(!i)return;if(ie.preventDefault(),ie.ctrlKey||ie.metaKey){a==null||a();const me=Math.exp(-ie.deltaY*Iw);Ze(ie.clientX,ie.clientY,u.current*me);return}a==null||a(),d.current=null;const L=h.current;c.current={x:L.panX,y:L.panY},u.current=L.zoom;const ae=L.panX-ie.deltaX,F=L.panY-ie.deltaY;c.current={x:ae,y:F},Z(ae,F,L.zoom)},[Z,i,a,Ze]);return _.useLayoutEffect(()=>{if(!i)return;let ie={panX:0,panY:0,zoom:xc};try{const L=window.localStorage.getItem(M());if(L){const ae=JSON.parse(L);typeof ae.panX=="number"&&Number.isFinite(ae.panX)&&typeof ae.panY=="number"&&Number.isFinite(ae.panY)&&typeof ae.zoom=="number"&&Number.isFinite(ae.zoom)&&(ie={panX:ae.panX,panY:ae.panY,zoom:Cy(ae.zoom)})}}catch{}return c.current={x:ie.panX,y:ie.panY},u.current=ie.zoom,Z(ie.panX,ie.panY,ie.zoom,{emitTick:!1}),()=>{g.current!=null&&window.clearTimeout(g.current),p.current!=null&&window.cancelAnimationFrame(p.current),T.current!=null&&(window.clearTimeout(T.current),T.current=null),q(h.current)}},[Z,M,i,q]),{isCameraMoving:x,renderedZoom:w,cameraRenderTick:j,renderedCameraRef:h,interactionIdleTimeoutRef:g,getTransformLayerOriginScreen:G,flushCameraReactTick:W,syncCamera:Ne,handleWheel:re}}function aS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function rS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[w,S]=_.useState([]),[j,k]=_.useState(null),T=_.useCallback(R=>{const M=t.current,q=i();if(!M||!q)return[];const G=M.getBoundingClientRect(),W=n.current.zoom/ia;if(W<=0)return[];const Z=[],he=R.left,pe=R.left+R.width,be=R.top,Ne=R.top+R.height;for(const Ze of a){if(!c(Ze))continue;const re=q.x+n.current.panX+Ze.x*W-G.left,ie=q.y+n.current.panY+Ze.y*W-G.top,L=re+Fn*W,ae=ie+(Dl+Ys)*W;!(L<he||re>pe||ae<be||ie>Ne)&&Z.push(Ze.commit.id)}return Z},[i,a,n,t,c]),U=_.useCallback(R=>{if(R.button!==0)return;const M=R.target;if(M!=null&&M.closest("[data-commit-card]")||M!=null&&M.closest("button, a, input, textarea, select"))return;const q=t.current;if(!q)return;R.preventDefault();const G=q.getBoundingClientRect(),W=R.clientX-G.left,Z=R.clientY-G.top;d.current={startX:W,startY:Z,currentX:W,currentY:Z,additive:R.metaKey||R.ctrlKey},h.current=!1,p.current=R.metaKey||R.ctrlKey?w:[],g(!0),b({left:W,top:Z,width:0,height:0})},[t,w]);return _.useEffect(()=>{const R=q=>{var be;const G=d.current;if(!G)return;const W=t.current;if(!W)return;const Z=W.getBoundingClientRect();G.currentX=q.clientX-Z.left,G.currentY=q.clientY-Z.top,!h.current&&(Math.abs(G.currentX-G.startX)>2||Math.abs(G.currentY-G.startY)>2)&&(h.current=!0);const he=aS(G);b(he);const pe=T(he);S(G.additive?Array.from(new Set([...p.current,...pe])):Array.from(new Set(pe))),G.additive||k((be=pe[pe.length-1])!=null?be:null)},M=()=>{if(d.current){const q=h.current;d.current=null,h.current=!1,g(!1),b(null),q||(S([]),k(null));return}u()};return window.addEventListener("mousemove",R),window.addEventListener("mouseup",M),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",M)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:U}}function lS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Ty({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:T,onPushCurrentBranch:U,onPushCommitTargets:R,pushInProgress:M=!1,onDeleteSelection:q,deleteInProgress:G=!1,worktrees:W=[],currentRepoPath:Z,onRemoveWorktree:he,removeWorktreeInProgress:pe=!1,onSwitchToWorktree:be,onStashLocalChanges:Ne,stashInProgress:Ze=!1,stashDisabled:re=!1,onCommitLocalChanges:ie,commitInProgress:L=!1,commitDisabled:ae=!1,onStageAllChanges:F,stageInProgress:me=!1,onCreateBranchFromNode:Ee,onCreateRootBranch:$,createBranchFromNodeInProgress:le=!1,isDebugOpen:ne=!1,onDebugClose:Se,orientation:De="horizontal",branchCommitPreviews:_e={},branchParentByName:Le={},branchUniqueAheadCounts:ot={},gridSearchQuery:Ie="",gridSearchJumpToken:kt=0,gridSearchJumpDirection:Ot=1,gridFocusSha:yt=null,checkedOutRef:et=null,onGridSearchResultCountChange:lt,onGridSearchResultIndexChange:Pt,onGridSearchFocusChange:an,onInteractionChange:tn,manuallyOpenedClumps:J,manuallyClosedClumps:Oe,setManuallyOpenedClumps:mt,setManuallyClosedClumps:je,gridHudProps:Ke}){var N,z,H,ee,fe,He,Ge,wt,sn,ks,D,B,I,V;const it=_.useRef(null),gt=_.useRef(null),xt=_.useRef(null),Et=_.useRef(null),Bt=_.useRef(null),ct=_.useRef(void 0),Y=_.useRef(void 0),te=_.useRef(void 0),ve=_.useRef(0),Ae=_.useRef(null),[rt,qe]=_.useState(!1),[Be,ge]=_.useState(!1),[tt,Fe]=_.useState(""),[Je,Re]=_.useState(!1),[nt,St]=_.useState(!1),[Ct,st]=_.useState(""),[Lt,jt]=_.useState("from-selected-node"),[_t,dn]=_.useState(()=>new Set),[pt,Ht]=_.useState(()=>new Set),[nn,zt]=_.useState({}),vt=_.useRef(!1),qt=_.useRef(null),rn=_.useRef(null),fn=J!=null?J:_t,Nt=Oe!=null?Oe:pt,yn=mt!=null?mt:dn,It=je!=null?je:Ht,[xn,at]=_.useState(null),[Kn,Ls]=_.useState(null),[No,So]=_.useState(!1),[Co,mo]=_.useState(!1),{isCameraMoving:Qt,renderedZoom:Rn,cameraRenderTick:Es,renderedCameraRef:Qn,interactionIdleTimeoutRef:Cn,getTransformLayerOriginScreen:no,flushCameraReactTick:Ts,syncCamera:As,handleWheel:mn}=iS({mapPadHostRef:xt,transformLayerRef:Et}),ws=_.useMemo(()=>pp(t,d,_e,Le),[t,d,_e,Le]),fs=_.useMemo(()=>Hc({lanes:ws,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:_e,branchParentByName:Le,branchUniqueAheadCounts:ot,manuallyOpenedClumps:fn,manuallyClosedClumps:Nt,isDebugOpen:ne,gridSearchQuery:Ie,gridFocusSha:yt,checkedOutRef:et!=null?et:null,orientation:De,nodePositionOverrides:nn}),[ws,t,n,i,a,c,d,_e,Le,ot,fn,Nt,ne,Ie,yt,(N=et==null?void 0:et.headSha)!=null?N:null,(z=et==null?void 0:et.branchName)!=null?z:null,De,nn]),ko=_.useMemo(()=>Hc({lanes:ws,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_e,branchParentByName:Le,branchUniqueAheadCounts:ot,manuallyOpenedClumps:fn,manuallyClosedClumps:Nt,isDebugOpen:ne,gridSearchQuery:Ie,gridFocusSha:yt,checkedOutRef:et!=null?et:null,orientation:De,nodePositionOverrides:nn}),[ws,t,n,i,a,d,_e,Le,ot,fn,Nt,ne,Ie,yt,(H=et==null?void 0:et.headSha)!=null?H:null,(ee=et==null?void 0:et.branchName)!=null?ee:null,De,nn]),{allCommits:so,clusterKeyByCommitId:Jn,leadByClusterKey:Fs,clusterCounts:hn,matchingNodes:Xs,matchingNodeIds:vi,normalizedSearchQuery:Ss,focusedNode:po,defaultCollapsedClumps:Ds,renderNodes:hs,visibleNodesBySha:es,contentWidth:oo,contentHeight:In,connectors:Cs,mergeConnectors:ms,connectorDecisions:ps,nodeWarnings:Li,commitIdsWithRenderedAncestry:Ko,connectorParentShas:Ki,branchStartShas:on,branchOffNodeShas:wi,crossBranchOutgoingShas:Os,branchBaseCommitByName:Qi,pointFormatter:Zi}=fs,Yo=!!Ss,_s=Rn/ia,Oi=_.useMemo(()=>({transform:`scale(${1/_s})`,transformOrigin:"top left",width:`${100*_s}%`,height:`${100*_s}%`}),[_s]),zs=-(20/_s),Pn=_.useMemo(()=>{const E=new Map;for(const P of hs)E.set(P.commit.visualId,P);return E},[hs]),jo=_.useMemo(()=>Xw(hs,zs),[hs,zs]),ri=E=>{var ue;const P=E.commit.id,oe=E.commit.visualId;if(Yo&&vi.has(P)||(po==null?void 0:po.commit.id)===P||xn===null)return!0;if(!xn.has(oe))return!1;const K=Jn.get(oe);return K&&((ue=hn.get(K))!=null?ue:1)>1&&(fn.has(K)||!Ds.has(K)&&!Nt.has(K)),!0},$s=1.25/_s,Bo=Uw/_s,bn="border-border/70",Gs="border-select",Is=_.useMemo(()=>new Map(t.map(E=>[E.name,E])),[t]),Mo=(fe=et==null?void 0:et.hasUncommittedChanges)!=null?fe:!1;_.useMemo(()=>new Set(t.filter(E=>E.commitsAhead===0&&!E.name.startsWith("*")).map(E=>E.name)),[t]);const Ns=_.useMemo(()=>{var P,oe;const E=new Map;for(const K of hs){const ue=(P=E.get(K.commit.id))!=null?P:new Set;ue.add(K.commit.branchName),E.set(K.commit.id,ue)}for(const K of i){const ue=(oe=E.get(K.fullSha))!=null?oe:new Set;K.branch&&ue.add(K.branch),E.set(K.fullSha,ue)}return E},[hs,i,d]),li=_.useMemo(()=>new Map(Object.entries(c).map(([E,P])=>[E,new Set(P)])),[c]),Wo=_.useMemo(()=>{var K;const E=new Set(i.map(ue=>ue.fullSha)),P=new Set,oe=ue=>{ue&&(P.add(ue),P.add(ue.slice(0,7)))};for(const ue of t){if(ue.commitsBehind<=0)continue;const ke=(K=_e[ue.name])!=null?K:[];for(const Ye of ke)Ye.kind==="branch-created"||Ye.kind==="uncommitted"||Ye.kind==="stash"||E.has(Ye.fullSha)||oe(Ye.fullSha);ue.headSha&&!E.has(ue.headSha)&&oe(ue.headSha)}return P},[t,_e,i]),Si=_.useCallback(()=>{Cn.current,Ts()},[Ts,Cn]),{isMarqueeSelecting:io,marqueeRect:_o,selectedCommitShas:xs,setSelectedCommitShas:Vn,mergeTargetCommitSha:is,setMergeTargetCommitSha:Eo,startMarqueeDrag:go}=rS({scrollContainerRef:it,renderedCameraRef:Qn,getTransformLayerOriginScreen:no,renderNodes:hs,shouldRenderNode:ri,onPointerReleaseNoMarquee:Si}),ao=_.useMemo(()=>new Set(hs.map(E=>E.commit.id)),[hs]),Hn=_.useMemo(()=>xs.filter(E=>ao.has(E)),[xs,ao]),Ps=_.useCallback((E,P)=>{var ue;if(!P)return!1;if(((ue=_e[E])!=null?ue:[]).some(ke=>Bi(ke.fullSha,P)||Bi(ke.sha,P)))return!0;const K=Is.get(E);return!!(K!=null&&K.headSha&&Bi(K.headSha,P))},[_e,Is]),Un=(He=et==null?void 0:et.branchName)!=null?He:null,qs=(Ge=et==null?void 0:et.headSha)!=null?Ge:null,Qo=Un==null,Zo=_.useMemo(()=>{if(!yt)return null;const E=hs.filter(P=>P.commit.id===yt);return E.length===0?null:E.length===1||!po?E[0]:E.reduce((P,oe)=>{const K=(P.x-po.x)**2+(P.y-po.y)**2;return(oe.x-po.x)**2+(oe.y-po.y)**2<K?oe:P})},[yt,hs,po]),zi=_.useCallback((E,P,oe)=>{for(const K of W){if(!Jh(K,Z))continue;if(K.branchName){if(K.branchName===E&&Bi(K.headSha,P))return K;continue}if(!Bi(K.headSha,P)&&!Bi(K.headSha,oe))continue;if(K.parentSha&&Ps(E,K.parentSha)||Ps(E,K.headSha))return K;const ue=Is.get(E);if(ue&&Bi(ue.headSha,K.headSha)||E===d&&i.some(ke=>Bi(ke.fullSha,K.headSha)))return K}return null},[W,Z,Ps,Is,d,i]),ci=_.useCallback(E=>{for(const P of W)if(Jh(P,Z)&&P.branchName===E)return P;return null},[W,Z]),ui=_.useCallback((E,P)=>{for(const oe of W)if(Jh(oe,Z)&&(Bi(oe.headSha,E)||Bi(oe.headSha,P)))return oe;return null},[W,Z]),Lo=_.useCallback(E=>{var P;return Array.from((P=Ns.get(E))!=null?P:[])},[Ns]),la=_.useMemo(()=>{var ue,ke,Ye,ft;const E=new Map;for(const bt of Hn){const ht=Lo(bt);if(ht.length===0)continue;const ut=(ue=ht.find(en=>en!==d))!=null?ue:ht[0],An=Hn.filter(en=>en!==bt).filter(en=>!new Set(Lo(en)).has(ut));E.set(ut,{targetSha:bt,targetBranch:ut,sourceRefs:An})}const P=Array.from(E.values()),oe=is?P.find(bt=>{var ht;return bt.targetSha===is||bt.targetBranch===((ht=Lo(is)[0])!=null?ht:"")}):null,K=(ke=oe!=null?oe:P[P.length-1])!=null?ke:null;return{options:P,selected:K,targetBranch:(Ye=K==null?void 0:K.targetBranch)!=null?Ye:null,sources:(ft=K==null?void 0:K.sourceRefs)!=null?ft:[]}},[Hn,Lo,d,is]),Jo=_.useMemo(()=>{const E=[...Un===d?[{name:d,headSha:qs!=null?qs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(P=>!P.name.startsWith("*")&&P.unpushedCommits>0&&P.remoteSyncStatus!=="on-github").map(P=>[P.name,P]);return new Map(E)},[t,Un,qs,d,a.length]),To=_.useMemo(()=>{const E=K=>{var ke;const ue=Lo(K).filter(Ye=>Jo.has(Ye));return ue.length===0?null:ue.length===1?ue[0]:Un&&ue.includes(Un)?Un:(ke=ue.find(Ye=>Ye!==d))!=null?ke:ue[0]},P=K=>{var ue;return K===d?a.map(ke=>{var Ye,ft;return{fullSha:ke.fullSha,sha:ke.sha,parentSha:(Ye=ke.parentSha)!=null?Ye:null,message:ke.message,author:ke.author,date:ke.date,kind:(ft=ke.kind)!=null?ft:"commit"}}):(ue=_e[K])!=null?ue:[]},oe=new Map;for(const K of Hn){const ue=E(K);if(!ue)continue;const ke=Jo.get(ue);if(!ke)continue;const Ye=P(ue).slice(0,ke.unpushedCommits),ft=Ye.findIndex(ht=>ht.fullSha===K);if(ft===-1)continue;const bt=oe.get(ue);(!bt||ft<bt.targetIndex)&&oe.set(ue,{branchName:ue,targetSha:K,targetIndex:ft,commitCount:Ye.length-ft})}return Array.from(oe.values())},[Hn,Lo,Jo,Un,d,a,_e]),Oo=_.useMemo(()=>Array.from(new Set(Hn.map(E=>/^STASH:(\d+)$/.exec(E)).filter(E=>!!E).map(E=>parseInt(E[1],10)))).sort((E,P)=>E-P),[Hn]),Rt=Hn.includes("WORKING_TREE"),$i=(Rt?1:0)+Oo.length,yo=[...Rt?["Uncommitted changes"]:[],...Oo.map(E=>`Stash ${E+1}`)],Fo=Jo.size,Xo=!Qo&&!!Un&&Jo.has(Un),Ks=Un?`Push ${Un}`:"Push current branch",zo=To.length===1?To[0].commitCount>1?`Push ${To[0].commitCount} commits on ${To[0].branchName}`:`Push ${To[0].targetSha.slice(0,7)} on ${To[0].branchName}`:`Push ${To.length} selected ranges`,vn=_.useCallback(E=>{const P=E.target;P!=null&&P.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||mp().startDragging()},[]);_.useEffect(()=>{const E=Qt||io;Bt.current!==E&&(Bt.current=E,tn==null||tn(E))},[Qt,io,tn]),_.useEffect(()=>{const E=Ss?Xs.length:null;ct.current!==E&&(ct.current=E,lt==null||lt(E))},[Xs.length,Ss,lt]),_.useEffect(()=>{const E=Ss&&yt?(()=>{const P=Xs.findIndex(oe=>oe.commit.id===yt);return P>=0?P:null})():null;Y.current!==E&&(Y.current=E,Pt==null||Pt(E))},[yt,Xs,Ss,Pt]);const xo=_.useMemo(()=>{var bt,ht,ut,An,en,Zt;if(!Ss)return null;const E=Ss,P=t.map(Ft=>Ft.name),oe=P.find(Ft=>Ft.toLowerCase()===E),K=oe!=null?oe:P.find(Ft=>Ft.toLowerCase().startsWith(E)),ke=K!=null?K:P.find(Ft=>Ft.toLowerCase().includes(E));if(!ke)return null;const Ye=(bt=t.find(Ft=>Ft.name===ke))!=null?bt:null;if(Ye!=null&&Ye.headSha)return Ye.headSha;const ft=(ht=_e[ke])!=null?ht:[];return ft.length>0?(An=(ut=ft[0])==null?void 0:ut.fullSha)!=null?An:null:ke===d&&(Zt=(en=i[0])==null?void 0:en.fullSha)!=null?Zt:null},[Ss,t,_e,d,i]);_.useEffect(()=>{var K,ue,ke;if(!Ss){if(ve.current=kt,te.current===null)return;te.current=null,an==null||an(null);return}if(kt<=0||ve.current===kt)return;ve.current=kt;let E;const P=yt?Xs.findIndex(Ye=>Ye.commit.id===yt):-1,oe=Xs.length>0?P<0?0:(P+Ot+Xs.length)%Xs.length:-1;E=(ke=(ue=(K=Xs[oe])==null?void 0:K.commit.id)!=null?ue:xo)!=null?ke:null,te.current!==E&&(te.current=E,an==null||an(E))},[Xs,Ss,an,xo,kt,Ot]),_.useLayoutEffect(()=>{if(!yt)return;const E=`${yt}:${kt}`;if(Ae.current===E)return;const P=it.current,oe=Zo;if(!P||!oe)return;const K=no();if(!K)return;const ue=P.getBoundingClientRect(),ke=Qn.current.zoom,Ye=ke/ia,ft=oe.x+Fn/2,bt=oe.y+Dl+Ys/2,ht=ue.left+ue.width/2,ut=ue.top+ue.height/2;As(ht-K.x-ft*Ye,ut-K.y-bt*Ye,ke),Ae.current=E},[yt,kt,Zo,no,As,Qn]);const C=(ks=(sn=Kn==null?void 0:Kn.width)!=null?sn:(wt=it.current)==null?void 0:wt.clientWidth)!=null?ks:0,X=(I=(B=Kn==null?void 0:Kn.height)!=null?B:(D=it.current)==null?void 0:D.clientHeight)!=null?I:0,ce=C>0&&X>0?ky(C,X,Qn.current,{innerPaddingPx:Od}):null,Me=ce!=null?jy(ce,Qn.current.zoom):null,Ve=E=>{if(!Me)return!0;const{fromX:P,fromY:oe,toX:K,toY:ue}=E;return Fw(P,oe,K,ue,Me,E.fromFace,E.toFace)};_.useLayoutEffect(()=>{var Ye;if(Qt)return;const E=it.current;if(!E||E.clientWidth<=0||E.clientHeight<=0)return;const P=E.clientWidth,oe=E.clientHeight;Ls(ft=>(ft==null?void 0:ft.width)===P&&(ft==null?void 0:ft.height)===oe?ft:{width:P,height:oe});const K=ky(P,oe,Qn.current,{innerPaddingPx:Od});if(!K){at(ft=>ft===null?ft:null);return}const ue=jy(K,Qn.current.zoom),ke=Gw(jo,ue,Pn,zs);for(const ft of hs){const bt=Jn.get(ft.commit.visualId);if(!bt||((Ye=hn.get(bt))!=null?Ye:1)<=1)continue;(fn.has(bt)||!Ds.has(bt)&&!Nt.has(bt))&&ke.add(ft.commit.visualId)}at(ft=>Yw(ft,ke)?ft:ke)},[Rn,kt,yt,Qt,Es,fn,Nt,Ds,Jn,hn,hs,Kn,jo,Pn,zs]),_.useLayoutEffect(()=>{const E=it.current;if(!E)return;const P=()=>{const K=E.clientWidth,ue=E.clientHeight;K<=0||ue<=0||Ls(ke=>(ke==null?void 0:ke.width)===K&&(ke==null?void 0:ke.height)===ue?ke:{width:K,height:ue})};P();const oe=new ResizeObserver(P);return oe.observe(E),()=>oe.disconnect()},[so.length]);const dt=hs.filter(E=>ri(E)).length,Kt=ms.filter(E=>Ve(E)).length,Yt=Cs.filter(E=>Ve(E)).length,ln=_.useCallback((E,P)=>{if(vt.current){E.preventDefault(),E.stopPropagation();return}E.stopPropagation();const oe=P.commit.id;if(E.shiftKey?(Vn(Ye=>Ye.includes(oe)?Ye.filter(ft=>ft!==oe):[...Ye,oe]),Eo(oe)):(Vn(Ye=>Ye.includes(oe)?[]:[oe]),Eo(Ye=>Ye===oe?null:oe)),!(E.metaKey||E.ctrlKey||E.detail>=2)||oe==="WORKING_TREE")return;const ue=oe.length>=40?oe.slice(0,7):oe;let ke=null;if(P.commit.branchName?(ke=zi(P.commit.branchName,oe,ue),ke||(ke=ci(P.commit.branchName))):ke=ui(oe,ue),ke&&be){be(ke.path);return}h==null||h({commitSha:oe})},[ui,zi,ci,h,be]),kn=_.useCallback((E,P)=>{var ft,bt,ht,ut,An;if(E.button!==0)return;const oe=E.target;if(oe!=null&&oe.closest('[data-selectable-text="true"]')||oe!=null&&oe.closest("button, a, input, textarea, select"))return;E.stopPropagation(),E.preventDefault(),vt.current=!1,E.currentTarget.setPointerCapture(E.pointerId);const K=(ft=nn[P.commit.visualId])!=null?ft:nn[P.commit.id];qt.current={nodeId:P.commit.visualId,startX:E.clientX,startY:E.clientY,baseX:(bt=K==null?void 0:K.x)!=null?bt:P.x,baseY:(ht=K==null?void 0:K.y)!=null?ht:P.y,moved:!1,pendingX:(ut=K==null?void 0:K.x)!=null?ut:P.x,pendingY:(An=K==null?void 0:K.y)!=null?An:P.y};const ue=()=>{rn.current=null;const en=qt.current;en&&zt(Zt=>({...Zt,[en.nodeId]:{x:en.pendingX,y:en.pendingY}}))},ke=en=>{const Zt=qt.current;if(!Zt)return;const Ft=Qn.current.zoom/ia,Bn=Ft>0?1/Ft:1,Ut=(en.clientX-Zt.startX)*Bn,Xt=(en.clientY-Zt.startY)*Bn;(Math.abs(Ut)>2||Math.abs(Xt)>2)&&(Zt.moved=!0),Zt.moved&&(vt.current=!0),Zt.pendingX=Zt.baseX+Ut,Zt.pendingY=Zt.baseY+Xt,rn.current==null&&(rn.current=window.requestAnimationFrame(ue))},Ye=()=>{window.removeEventListener("pointermove",ke),window.removeEventListener("pointerup",Ye),window.removeEventListener("pointercancel",Ye),rn.current!=null&&(window.cancelAnimationFrame(rn.current),rn.current=null,ue());try{E.currentTarget.releasePointerCapture(E.pointerId)}catch{}const en=qt.current;qt.current=null,en&&window.setTimeout(()=>{vt.current=!1},0)};window.addEventListener("pointermove",ke),window.addEventListener("pointerup",Ye),window.addEventListener("pointercancel",Ye)},[nn]),Tn=_.useCallback(async()=>{if(!ie)return;await ie(tt)&&(ge(!1),Fe(""))},[ie,tt]),pn=_.useCallback(async()=>{q&&(await q({branchNames:[],discardUncommittedChanges:Rt,stashIndices:Oo}),Re(!1),Vn([]),Eo(null))},[q,Rt,Oo]),ts=_.useCallback(async()=>{var P;const E=Ct.trim();if(E){if(Lt==="new-root"){if(!$)return;await $(E)}else{if(!Ee)return;const oe=Hn.length===1?Hn[0]:(P=et==null?void 0:et.headSha)!=null?P:null;if(!oe||!(oe==="WORKING_TREE"||oe.startsWith("STASH:")||oe===(et==null?void 0:et.headSha)))return;await Ee(oe,E)}St(!1),st(""),jt("from-selected-node"),Vn([]),Eo(null)}},[et==null?void 0:et.headSha,Lt,Ct,Ee,$,Hn]),Qs=!!(et!=null&&et.headSha),Wt=Hn.length===0&&Qs,jn=Hn.length===1&&(Hn[0]==="WORKING_TREE"||Hn[0].startsWith("STASH:"))||Wt,bs=!!$;return _.useEffect(()=>{if(nt){if(!jn&&!Wt&&bs){jt("new-root");return}(jn||Wt)&&jt("from-selected-node")}},[bs,Wt,nt,jn]),_.useEffect(()=>{const E=gt.current;if(!E)return;const P=640,oe=440,K=()=>{const ke=E.getBoundingClientRect().width;So(ke<P),mo(ke<oe)};K();const ue=new ResizeObserver(()=>K());return ue.observe(E),()=>ue.disconnect()},[]),_.useEffect(()=>{const E=P=>{if(!q||Je||Hn.length===0)return;const oe=P.target;oe!=null&&oe.closest('input, textarea, select, button, [contenteditable="true"]')||P.key!=="Delete"&&P.key!=="Backspace"||(P.preventDefault(),Re(!0))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[Je,q,Hn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(eS,{isOpen:ne,onClose:()=>Se==null?void 0:Se(),visibleBounds:Me,renderedNodeCount:dt,totalNodeCount:hs.length,renderedMergeConnectorCount:Kt,totalMergeConnectorCount:ms.length,renderedConnectorCount:Yt,totalConnectorCount:Cs.length,mapGridCullViewportInsetScreenPx:Pw,debugRows:ko.debugRows,branchDebugRows:ko.branchDebugRows,connectorDecisions:ps}),Ke?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:vn,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:gt,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Qw,{compactLabels:No,selectedVisibleCommitShas:Hn,commitInProgress:L,commitDisabled:ae,stageInProgress:me,stashInProgress:Ze,stashDisabled:re,pushInProgress:M,hasUncommittedChanges:Mo,createBranchFromNodeInProgress:le,onCommitLocalChanges:ie,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:Ne,onPushCurrentBranch:U,onPushAllBranches:T,onPushCommitTargets:R,onMergeRefsIntoBranch:j,selectedPushTargets:To,selectedPushLabel:zo,canPushCurrentBranch:Xo,pushCurrentBranchLabel:Ks,pushableRemoteBranchCount:Fo,selectedCommitTargetOption:la,mergeInProgress:k,mergeTargetCommitSha:is,setMergeTargetCommitSha:Eo,worktrees:W,currentRepoPath:Z,worktreeMenuOpen:rt,setWorktreeMenuOpen:qe,onSwitchToWorktree:be,onRemoveWorktree:he,removeWorktreeInProgress:pe,setCommitDialogOpen:ge,setNewBranchDialogOpen:St})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[Co?null:l.jsx(sS,{query:Ke.gridSearchQuery,onQueryChange:Ke.setGridSearchQuery,resultCount:Ke.gridSearchResultCount,resultIndex:Ke.gridSearchResultIndex,onJump:E=>{Ke.setGridSearchJumpDirection(E),Ke.setGridSearchJumpToken(P=>P+1)}}),l.jsx(nS,{compactLabels:No,orientation:Ke.mapGridOrientation,onOrientationChange:Ke.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(V=Ke.githubAuthStatus)!=null&&V.ghAvailable&&!Ke.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ke.onGitHubAuthSetup,disabled:Ke.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ke.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ke.githubAuthStatus&&!Ke.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ke.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ke.githubAuthMessage,children:Ke.githubAuthMessage})]}):null,Ke.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ke.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ke.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:Ke.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ke.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ke.commitSwitchFeedback.message})]}):null]})]}):null,x||so.length===0?l.jsx(lS,{}):l.jsx(Jw,{scrollContainerRef:it,mapPadHostRef:xt,transformLayerRef:Et,isMarqueeSelecting:io,contentWidth:oo,contentHeight:In,isCameraMoving:Qt,onWheel:mn,onMouseDown:go,onNodePointerDown:kn,labelTopPx:zs,inverseZoomStyle:Oi,displayZoom:_s,selectedVisibleCommitShas:Hn,normalizedSearchQuery:Ss,matchingNodeIds:vi,focusedNode:Zo,renderNodes:hs,shouldRenderNode:ri,manuallyOpenedClumps:fn,manuallyClosedClumps:Nt,defaultCollapsedClumps:Ds,leadByClusterKey:Fs,clusterKeyByCommitId:Jn,clusterCounts:hn,commitIdsWithRenderedAncestry:Ko,nodeWarnings:Li,connectorParentShas:Ki,branchStartShas:on,branchOffNodeShas:wi,crossBranchOutgoingShas:Os,branchBaseCommitByName:Qi,branchStartAccentClass:Gs,connectorParentAccentClass:bn,commitCornerRadiusPx:Bo,lineStrokeWidth:$s,pointFormatter:Zi,connectors:Cs,mergeConnectors:ms,cullConnectorPath:Ve,flushCameraReactTick:Ts,setManuallyOpenedClumps:yn,setManuallyClosedClumps:It,onCommitCardClick:ln,unpushedCommitShasSetByBranch:li,remoteCommitShas:Wo,checkedOutHeadSha:qs,orientation:De}),_o&&io?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:_o.left,top:_o.top,width:_o.width,height:_o.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(tS,{commitDialogOpen:Be,commitMessageDraft:tt,onCommitMessageDraftChange:Fe,onCommitDialogClose:()=>ge(!1),onCommitConfirm:()=>void Tn(),commitInProgress:L,deleteConfirmOpen:Je,deleteSelectionItems:yo,onDeleteConfirmClose:()=>Re(!1),onDeleteConfirm:()=>void pn(),deleteInProgress:G,deletableSelectionCount:$i,newBranchDialogOpen:nt,newBranchName:Ct,newBranchCreateMode:Lt,onNewBranchNameChange:st,onNewBranchCreateModeChange:jt,onNewBranchDialogClose:()=>St(!1),onNewBranchConfirm:()=>void ts(),selectedCommitCanCreateBranch:jn,currentCheckedOutCommitCanCreateBranch:Wt,createBranchFromNodeInProgress:le})]})}function cS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:U,onGridSearchFocusChange:R,view:M="time",isLoading:q=!1,scrollRequest:G,focusedErrorBranch:W,checkedOutRef:Z=null,mapTopInsetPx:he=0,onMergeRefsIntoBranch:pe,mergeInProgress:be=!1,onPushAllBranches:Ne,onPushCurrentBranch:Ze,onPushCommitTargets:re,pushInProgress:ie=!1,onDeleteSelection:L,worktrees:ae=[],currentRepoPath:F,onRemoveWorktree:me,removeWorktreeInProgress:Ee=!1,onSwitchToWorktree:$,onStashLocalChanges:le,stashInProgress:ne=!1,stashDisabled:Se=!1,onCommitLocalChanges:De,commitInProgress:_e=!1,commitDisabled:Le=!1,onStageAllChanges:ot,stageInProgress:Ie=!1,onCreateBranchFromNode:kt,onCreateRootBranch:Ot,createBranchFromNodeInProgress:yt=!1,isMutationBusy:et=!1,onMoveNodeBackToBranch:lt,isDebugOpen:Pt=!1,onDebugClose:an,orientation:tn="horizontal",onInteractionChange:J,manuallyOpenedClumps:Oe,manuallyClosedClumps:mt,setManuallyOpenedClumps:je,setManuallyClosedClumps:Ke,layoutModel:it,gridHudProps:gt}){const xt=new Set(u.map(te=>te.branchName)),Et=14*864e5,Bt=Date.now();function ct(te){return xt.has(te.name)||Bt-new Date(te.lastCommitDate).getTime()<=Et}const Y=t.filter(te=>te.status==="stale"&&ct(te)).sort((te,ve)=>new Date(ve.lastCommitDate).getTime()-new Date(te.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:M==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:U,onGridSearchFocusChange:R,staleBranches:Y,isLoading:q,scrollRequest:G,focusedErrorBranch:W,checkedOutRef:Z,mapTopInsetPx:he,onMergeRefsIntoBranch:pe,mergeInProgress:be,onPushAllBranches:Ne,onPushCurrentBranch:Ze,onPushCommitTargets:re,pushInProgress:ie,onDeleteSelection:L,worktrees:ae,currentRepoPath:F,onRemoveWorktree:me,removeWorktreeInProgress:Ee,onSwitchToWorktree:$,onStashLocalChanges:le,stashInProgress:ne,stashDisabled:Se,onCommitLocalChanges:De,commitInProgress:_e,commitDisabled:Le,onStageAllChanges:ot,stageInProgress:Ie,onCreateBranchFromNode:kt,onCreateRootBranch:Ot,createBranchFromNodeInProgress:yt,isMutationBusy:et,onMoveNodeBackToBranch:lt,isDebugOpen:Pt,onDebugClose:an,orientation:tn,onInteractionChange:J,manuallyOpenedClumps:Oe,manuallyClosedClumps:mt,setManuallyOpenedClumps:je,setManuallyClosedClumps:Ke,layoutModel:it,gridHudProps:gt})}):M==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:Z,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:U,onGridSearchFocusChange:R,onInteractionChange:J,manuallyOpenedClumps:Oe,manuallyClosedClumps:mt,setManuallyOpenedClumps:je,setManuallyClosedClumps:Ke,layoutModel:it,isDebugOpen:Pt,onDebugClose:an,orientation:tn,gridHudProps:gt})}):null})}var Nl=Px();const gp=_.createContext({});function Gc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const uS=typeof window<"u",yp=uS?_.useLayoutEffect:_.useEffect,Gd=_.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function Ml(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ga=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const fr={},eb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function tb(t){return typeof t=="object"&&t!==null}const nb=t=>/^0[^.\s]+$/u.test(t);function sb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Gi=t=>t,dS=(t,n)=>i=>n(t(i)),qc=(...t)=>t.reduce(dS),El=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>Ml(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bi=t=>t*1e3,Xi=t=>t/1e3;function ob(t,n){return n?t*(1e3/n):0}const fS=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},ib=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,hS=1e-7,mS=12;function pS(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=ib(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>hS&&++h<mS);return d}function Kc(t,n,i,a){if(t===n&&i===a)return Gi;const c=u=>pS(u,0,1,t,i);return u=>u===0||u===1?u:ib(c(u),n,a)}const ab=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,rb=t=>n=>1-t(1-n),lb=Kc(.33,1.53,.69,.99),wp=rb(lb),cb=ab(wp),ub=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),db=rb(Sp),fb=ab(Sp),_S=Kc(.42,0,1,1),gS=Kc(0,0,.58,1),hb=Kc(.42,0,.58,1),mb=t=>Array.isArray(t)&&typeof t[0]!="number";function pb(t,n){return mb(t)?t[fS(0,t.length,n)]:t}const _b=t=>Array.isArray(t)&&typeof t[0]=="number",yS={linear:Gi,easeIn:_S,easeInOut:hb,easeOut:gS,circIn:Sp,circInOut:fb,circOut:db,backIn:wp,backInOut:cb,backOut:lb,anticipate:ub},xS=t=>typeof t=="string",Ay=t=>{if(_b(t)){bp(t.length===4);const[n,i,a,c]=t;return Kc(n,i,a,c)}else if(xS(t))return yS[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function bS(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const vS=40;function gb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((R,M)=>(R[M]=bS(u),R),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const R=fr.useManualTiming,M=R?c.timestamp:performance.now();i=!1,R||(c.delta=a?1e3/60:Math.max(Math.min(M-c.timestamp,vS),1)),c.timestamp=M,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:sd.reduce((R,M)=>{const q=d[M];return R[M]=(G,W=!1,Z=!1)=>(i||k(),q.schedule(G,W,Z)),R},{}),cancel:R=>{for(let M=0;M<sd.length;M++)d[sd[M]].cancel(R)},state:c,steps:d}}const{schedule:ds,cancel:$a,state:Vo,steps:em}=gb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gi,!0);let kd;function wS(){kd=void 0}const si={now:()=>(kd===void 0&&si.set(Vo.isProcessing||fr.useManualTiming?Vo.timestamp:performance.now()),kd),set:t=>{kd=t,queueMicrotask(wS)}},yb=t=>n=>typeof n=="string"&&n.startsWith(t),xb=yb("--"),SS=yb("var(--"),Cp=t=>SS(t)?CS.test(t.split("/*")[0].trim()):!1,CS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Dy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Rl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Uc={...Rl,transform:t=>ga(0,1,t)},od={...Rl,default:1},Lc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function kS(t){return t==null}const jS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&jS.test(i)&&i.startsWith(t)||n&&!kS(i)&&Object.prototype.hasOwnProperty.call(i,n)),bb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},MS=t=>ga(0,255,t),tm={...Rl,transform:t=>Math.round(MS(t))},Or={test:jp("rgb","red"),parse:bb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+tm.transform(t)+", "+tm.transform(n)+", "+tm.transform(i)+", "+Lc(Uc.transform(a))+")"};function ES(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Bm={test:jp("#"),parse:ES,transform:Or.transform},Qc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),lr=Qc("deg"),_a=Qc("%"),Dt=Qc("px"),TS=Qc("vh"),AS=Qc("vw"),Ny={..._a,parse:t=>_a.parse(t)/100,transform:t=>_a.transform(t*100)},wl={test:jp("hsl","hue"),parse:bb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+_a.transform(Lc(n))+", "+_a.transform(Lc(i))+", "+Lc(Uc.transform(a))+")"},ho={test:t=>Or.test(t)||Bm.test(t)||wl.test(t),parse:t=>Or.test(t)?Or.parse(t):wl.test(t)?wl.parse(t):Bm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Or.transform(t):wl.transform(t),getAnimatableNone:t=>{const n=ho.parse(t);return n.alpha=0,ho.transform(n)}},DS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NS(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(DS))==null?void 0:i.length)||0)>0}const vb="number",wb="color",RS="var",BS="var(",Ry="${}",LS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(LS,p=>(ho.test(p)?(a.color.push(u),c.push(wb),i.push(ho.parse(p))):p.startsWith(BS)?(a.var.push(u),c.push(RS),i.push(p)):(a.number.push(u),c.push(vb),i.push(parseFloat(p))),++u,Ry)).split(Ry);return{values:i,split:h,indexes:a,types:c}}function OS(t){return Tl(t).values}function Sb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===vb?c+=Lc(a[u]):d===wb?c+=ho.transform(a[u]):c+=a[u]}return c}}function zS(t){return Sb(Tl(t))}const $S=t=>typeof t=="number"?0:ho.test(t)?ho.getAnimatableNone(t):t,IS=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:$S(t);function PS(t){const n=Tl(t);return Sb(n)(n.values.map((a,c)=>IS(a,n.split[c])))}const aa={test:NS,parse:OS,createTransformer:zS,getAnimatableNone:PS};function nm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function HS({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=nm(p,h,t+1/3),u=nm(p,h,t),d=nm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function zd(t,n){return i=>i>0?n:t}const vs=(t,n,i)=>t+(n-t)*i,sm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},US=[Bm,Or,wl],VS=t=>US.find(n=>n.test(t));function By(t){const n=VS(t);if(!n)return!1;let i=n.parse(t);return n===wl&&(i=HS(i)),i}const Ly=(t,n)=>{const i=By(t),a=By(n);if(!i||!a)return zd(t,n);const c={...i};return u=>(c.red=sm(i.red,a.red,u),c.green=sm(i.green,a.green,u),c.blue=sm(i.blue,a.blue,u),c.alpha=vs(i.alpha,a.alpha,u),Or.transform(c))},Lm=new Set(["none","hidden"]);function YS(t,n){return Lm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function WS(t,n){return i=>vs(t,n,i)}function Mp(t){return typeof t=="number"?WS:typeof t=="string"?Cp(t)?zd:ho.test(t)?Ly:GS:Array.isArray(t)?Cb:typeof t=="object"?ho.test(t)?Ly:FS:zd}function Cb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function FS(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function XS(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const GS=(t,n)=>{const i=aa.createTransformer(n),a=Tl(t),c=Tl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Lm.has(t)&&!c.values.length||Lm.has(n)&&!a.values.length?YS(t,n):qc(Cb(XS(a,c),c.values),i):zd(t,n)};function kb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?vs(t,n,i):Mp(t)(t,n)}const qS=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ds.update(n,i),stop:()=>$a(n),now:()=>Vo.isProcessing?Vo.timestamp:si.now()}},jb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},$d=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<$d;)n+=i,a=t.next(n);return n>=$d?1/0:n}function Mb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),$d);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Xi(c)}}const Ws={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Om(t,n){return t*Math.sqrt(1-n*n)}const KS=12;function QS(t,n,i){let a=i;for(let c=1;c<KS;c++)a=a-t(a)/n(a);return a}const om=.001;function ZS({duration:t=Ws.duration,bounce:n=Ws.bounce,velocity:i=Ws.velocity,mass:a=Ws.mass}){let c,u,d=1-n;d=ga(Ws.minDamping,Ws.maxDamping,d),t=ga(Ws.minDuration,Ws.maxDuration,Xi(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,w=Om(y,d),S=Math.exp(-x);return om-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),j=Om(Math.pow(y,2),d);return(-c(y)+om>0?-1:1)*((b-w)*S)/j}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-om+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=QS(c,u,h);if(t=bi(t),isNaN(p))return{stiffness:Ws.stiffness,damping:Ws.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const JS=["duration","bounce"],e4=["stiffness","damping","mass"];function Oy(t,n){return n.some(i=>t[i]!==void 0)}function t4(t){let n={velocity:Ws.velocity,stiffness:Ws.stiffness,damping:Ws.damping,mass:Ws.mass,isResolvedFromDuration:!1,...t};if(!Oy(t,e4)&&Oy(t,JS))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ga(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ws.mass,stiffness:c,damping:u}}else{const i=ZS({...t,velocity:0});n={...n,...i,mass:Ws.mass},n.isResolvedFromDuration=!0}return n}function Vc(t=Ws.visualDuration,n=Ws.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=t4({...i,velocity:-Xi(i.velocity||0)}),S=b||0,j=y/(2*Math.sqrt(p*g)),k=d-u,T=Xi(Math.sqrt(p/g)),U=Math.abs(k)<5;a||(a=U?Ws.restSpeed.granular:Ws.restSpeed.default),c||(c=U?Ws.restDelta.granular:Ws.restDelta.default);let R,M,q,G,W,Z;if(j<1)q=Om(T,j),G=(S+j*T*k)/q,R=pe=>{const be=Math.exp(-j*T*pe);return d-be*(G*Math.sin(q*pe)+k*Math.cos(q*pe))},W=j*T*G+k*q,Z=j*T*k-G*q,M=pe=>Math.exp(-j*T*pe)*(W*Math.sin(q*pe)+Z*Math.cos(q*pe));else if(j===1){R=be=>d-Math.exp(-T*be)*(k+(S+T*k)*be);const pe=S+T*k;M=be=>Math.exp(-T*be)*(T*pe*be-S)}else{const pe=T*Math.sqrt(j*j-1);R=re=>{const ie=Math.exp(-j*T*re),L=Math.min(pe*re,300);return d-ie*((S+j*T*k)*Math.sinh(L)+pe*k*Math.cosh(L))/pe};const be=(S+j*T*k)/pe,Ne=j*T*be-k*pe,Ze=j*T*k-be*pe;M=re=>{const ie=Math.exp(-j*T*re),L=Math.min(pe*re,300);return ie*(Ne*Math.sinh(L)+Ze*Math.cosh(L))}}const he={calculatedDuration:w&&x||null,velocity:pe=>bi(M(pe)),next:pe=>{if(!w&&j<1){const Ne=Math.exp(-j*T*pe),Ze=Math.sin(q*pe),re=Math.cos(q*pe),ie=d-Ne*(G*Ze+k*re),L=bi(Ne*(W*Ze+Z*re));return h.done=Math.abs(L)<=a&&Math.abs(d-ie)<=c,h.value=h.done?d:ie,h}const be=R(pe);if(w)h.done=pe>=x;else{const Ne=bi(M(pe));h.done=Math.abs(Ne)<=a&&Math.abs(d-be)<=c}return h.value=h.done?d:be,h},toString:()=>{const pe=Math.min(Ep(he),$d),be=jb(Ne=>he.next(pe*Ne).value,pe,30);return pe+"ms "+be},toTransition:()=>{}};return he}Vc.applyToOptions=t=>{const n=Mb(t,100,Vc);return t.ease=n.ease,t.duration=bi(n.duration),t.type="keyframes",t};const n4=5;function Eb(t,n,i){const a=Math.max(n-n4,0);return ob(i-t(a),n-a)}function zm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},w=Z=>h!==void 0&&Z<h||p!==void 0&&Z>p,S=Z=>h===void 0?p:p===void 0||Math.abs(h-Z)<Math.abs(p-Z)?h:p;let j=i*n;const k=x+j,T=d===void 0?k:d(k);T!==k&&(j=T-x);const U=Z=>-j*Math.exp(-Z/a),R=Z=>T+U(Z),M=Z=>{const he=U(Z),pe=R(Z);b.done=Math.abs(he)<=y,b.value=b.done?T:pe};let q,G;const W=Z=>{w(b.value)&&(q=Z,G=Vc({keyframes:[b.value,S(b.value)],velocity:Eb(R,Z,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return W(0),{calculatedDuration:null,next:Z=>{let he=!1;return!G&&q===void 0&&(he=!0,M(Z),W(Z)),q!==void 0&&Z>=q?G.next(Z-q):(!he&&M(Z),b)}}}function s4(t,n,i){const a=[],c=i||fr.mix||kb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Gi:n;h=qc(p,h)}a.push(h)}return a}function Tb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=s4(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=El(t[x],t[x+1],g);return h[x](b)};return i?g=>y(ga(t[0],t[u-1],g)):y}function Ab(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=El(0,n,a);t.push(vs(i,1,c))}}function Db(t){const n=[0];return Ab(n,t.length-1),n}function o4(t,n){return t.map(i=>i*n)}function i4(t,n){return t.map(()=>n||hb).splice(0,t.length-1)}function Oc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=mb(a)?a.map(Ay):Ay(a),u={done:!1,value:n[0]},d=o4(i&&i.length===n.length?i:Db(n),t),h=Tb(d,n,{ease:Array.isArray(c)?c:i4(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const a4=t=>t!==null;function qd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(a4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const r4={decay:zm,inertia:zm,tween:Oc,keyframes:Oc,spring:Vc};function Nb(t){typeof t.type=="string"&&(t.type=r4[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const l4=t=>t/100;class Id extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==si.now()&&this.tick(si.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Nb(n);const{type:i=Oc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Oc;p!==Oc&&typeof h[0]!="number"&&(this.mixKeyframes=qc(l4,kb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ep(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),U=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let R=this.currentTime,M=a;if(x){const Z=Math.min(this.currentTime,c)/h;let he=Math.floor(Z),pe=Z%1;!pe&&Z>=1&&(pe=1),pe===1&&he--,he=Math.min(he,x+1),!!(he%2)&&(b==="reverse"?(pe=1-pe,w&&(pe-=w/h)):b==="mirror"&&(M=d)),R=ga(0,1,pe)*h}let q;U?(this.delayState.value=g[0],q=this.delayState):q=M.next(R),u&&!U&&(q.value=u(q.value));let{done:G}=q;!U&&p!==null&&(G=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return W&&S!==zm&&(q.value=qd(g,this.options,k,this.speed)),j&&j(q.value),W&&this.finish(),q}then(n,i){return this.finished.then(n,i)}get duration(){return Xi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Xi(n)}get time(){return Xi(this.currentTime)}set time(n){n=bi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Eb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(si.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Xi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=qS,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(si.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function c4(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const zr=t=>t*180/Math.PI,$m=t=>{const n=zr(Math.atan2(t[1],t[0]));return Im(n)},u4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:$m,rotateZ:$m,skewX:t=>zr(Math.atan(t[1])),skewY:t=>zr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Im=t=>(t=t%360,t<0&&(t+=360),t),zy=$m,$y=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Iy=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),d4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$y,scaleY:Iy,scale:t=>($y(t)+Iy(t))/2,rotateX:t=>Im(zr(Math.atan2(t[6],t[5]))),rotateY:t=>Im(zr(Math.atan2(-t[2],t[0]))),rotateZ:zy,rotate:zy,skewX:t=>zr(Math.atan(t[4])),skewY:t=>zr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Pm(t){return t.includes("scale")?1:0}function Hm(t,n){if(!t||t==="none")return Pm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=d4,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=u4,c=h}if(!c)return Pm(n);const u=a[n],d=c[1].split(",").map(h4);return typeof u=="function"?u(d):d[u]}const f4=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Hm(i,n)};function h4(t){return parseFloat(t.trim())}const Bl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ll=new Set(Bl),Py=t=>t===Rl||t===Dt,m4=new Set(["x","y","z"]),p4=Bl.filter(t=>!m4.has(t));function _4(t){const n=[];return p4.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const dr={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Hm(n,"x"),y:(t,{transform:n})=>Hm(n,"y")};dr.translateX=dr.x;dr.translateY=dr.y;const $r=new Set;let Um=!1,Vm=!1,Ym=!1;function Rb(){if(Vm){const t=Array.from($r).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=_4(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Vm=!1,Um=!1,$r.forEach(t=>t.complete(Ym)),$r.clear()}function Bb(){$r.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Vm=!0)})}function g4(){Ym=!0,Bb(),Rb(),Ym=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?($r.add(this),Um||(Um=!0,ds.read(Bb),ds.resolveKeyframes(Rb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}c4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),$r.delete(this)}cancel(){this.state==="scheduled"&&($r.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const y4=t=>t.startsWith("--");function Lb(t,n,i){y4(n)?t.style.setProperty(n,i):t.style[n]=i}const x4={};function Ob(t,n){const i=sb(t);return()=>{var a;return(a=x4[n])!=null?a:i()}}const b4=Ob(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),zb=Ob(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Dc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,Hy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Dc([0,.65,.55,1]),circOut:Dc([.55,0,1,.45]),backIn:Dc([.31,.01,.66,-.59]),backOut:Dc([.33,1.53,.69,.99])};function $b(t,n){if(t)return typeof t=="function"?zb()?jb(t,n):"ease-out":_b(t)?Dc(t):Array.isArray(t)?t.map(i=>$b(i,n)||Hy.easeOut):Hy[t]}function v4(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=$b(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function w4({type:t,...n}){var i,a;return Dp(t)&&zb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Ib extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const y=w4(n);this.animation=v4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=qd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Lb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Xi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Xi(n)}get time(){return Xi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=bi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&b4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Gi):c(this)}}const Pb={anticipate:ub,backInOut:cb,circInOut:fb};function S4(t){return t in Pb}function C4(t){typeof t.ease=="string"&&S4(t.ease)&&(t.ease=Pb[t.ease])}const im=10;class k4 extends Ib{constructor(n){C4(n),Nb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Id({...d,autoplay:!1}),p=Math.max(im,si.now()-this.startTime),y=ga(0,im,p-im),g=h.sample(p).value,{name:x}=this.options;u&&x&&Lb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Uy=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(aa.test(t)||t==="0")&&!t.startsWith("url("));function j4(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function M4(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=Uy(c,n),h=Uy(u,n);return!d||!h?!1:j4(t)||(i==="spring"||Dp(i))&&a}function Wm(t){t.duration=0,t.type="keyframes"}const Hb=new Set(["opacity","clipPath","filter","transform"]),E4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function T4(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&E4.test(t[n]))return!0;return!1}const A4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),D4=sb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function N4(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return D4()&&i&&(Hb.has(i)||A4.has(i)&&T4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const R4=40;class B4 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=si.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(j,k,T)=>this.onKeyframesResolved(j,k,b,!T),p,y,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,U;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=si.now();let x=!0;M4(n,u,d,h)||(x=!1,(fr.instantAnimations||!p)&&(g==null||g(qd(n,a,i))),n[0]=n[n.length-1],Wm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>R4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&N4(w),j=(U=(T=w.motionValue)==null?void 0:T.owner)==null?void 0:U.current;let k;if(S)try{k=new k4({...w,element:j})}catch{k=new Id(w)}else k=new Id(w);k.finished.then(()=>{this.notifyFinished()}).catch(Gi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),g4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class L4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Vy(this.animations,"duration")}get iterationDuration(){return Vy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Vy(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class O4 extends L4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Ub(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const z4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $4(t){const n=z4.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Vb(t,n,i=1){const[a,c]=$4(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return eb(d)?parseFloat(d):d}return Cp(c)?Vb(c,n,i+1):c}const I4={type:"spring",stiffness:500,damping:25,restSpeed:10},P4=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),H4={type:"keyframes",duration:.8},U4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},V4=(t,{keyframes:n})=>n.length>2?H4:Ll.has(t)?t.startsWith("scale")?P4(n[1]):I4:U4;function Yb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Yb(i,t):i}const Y4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function W4(t){for(const n in t)if(!Y4.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-bi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};W4(h)||Object.assign(g,V4(t,g)),g.duration&&(g.duration=bi(g.duration)),g.repeatDelay&&(g.repeatDelay=bi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Wm(g),g.delay===0&&(x=!0)),(fr.instantAnimations||fr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Wm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=qd(g.keyframes,h);if(b!==void 0){ds.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Id(g):new B4(g)};function Yy(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=Yy(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=Yy(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Ir(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const Wb=new Set(["width","height","top","left","right","bottom",...Bl]),Wy=30,F4=t=>!isNaN(parseFloat(t)),zc={current:void 0};class X4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=si.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=si.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=F4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ds.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return zc.current&&zc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=si.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Wy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Wy);return ob(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hr(t,n){return new X4(t,n)}const Fm=t=>Array.isArray(t);function G4(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,hr(i))}function q4(t){return Fm(t)?t[t.length-1]||0:t}function K4(t,n){const i=Ir(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=q4(u[d]);G4(t,d,h)}}const wo=t=>!!(t&&t.getVelocity);function Q4(t){return!!(wo(t)&&t.add)}function Xm(t,n){const i=t.getValue("willChange");if(Q4(i))return i.add(n);if(!i&&fr.WillChange){const a=new fr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Z4="framerAppearId",Fb="data-"+Lp(Z4);function Xb(t){return t.props[Fb]}function J4({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Yb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&J4(x,w))continue;const k={delay:i,...Np(u||{},w)},T=S.get();if(T!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===T&&!k.velocity){ds.update(()=>S.set(j));continue}let U=!1;if(window.MotionHandoffAnimation){const q=Xb(t);if(q){const G=window.MotionHandoffAnimation(q,w,ds);G!==null&&(k.startTime=G,U=!0)}}Xm(t,w);const R=y!=null?y:t.shouldReduceMotion;S.start(Rp(w,S,j,R&&Wb.has(w)?{type:!1}:k,t,U));const M=S.animation;M&&g.push(M)}if(d){const w=()=>ds.update(()=>{d&&K4(t,d)});g.length?Promise.all(g).then(w):w()}return g}function Gm(t,n,i={}){var p;const a=Ir(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return eC(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function eC(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Gm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Ub(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function tC(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Gm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Gm(t,n,i);else{const c=typeof n=="function"?Ir(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const nC={test:t=>t==="auto",parse:t=>t},Gb=t=>n=>n.test(t),qb=[Rl,Dt,_a,lr,AS,TS,nC],Fy=t=>qb.find(Gb(t));function sC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nb(t):!0}const oC=new Set(["brightness","contrast","saturate","opacity"]);function iC(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=oC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const aC=/\b([a-z-]*)\(.*?\)/gu,qm={...aa,getAnimatableNone:t=>{const n=t.match(aC);return n?n.map(iC).join(" "):t}},Km={...aa,getAnimatableNone:t=>{const n=aa.parse(t);return aa.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Xy={...Rl,transform:Math.round},rC={rotate:lr,rotateX:lr,rotateY:lr,rotateZ:lr,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:lr,skewX:lr,skewY:lr,distance:Dt,translateX:Dt,translateY:Dt,translateZ:Dt,x:Dt,y:Dt,z:Dt,perspective:Dt,transformPerspective:Dt,opacity:Uc,originX:Ny,originY:Ny,originZ:Dt},zp={borderWidth:Dt,borderTopWidth:Dt,borderRightWidth:Dt,borderBottomWidth:Dt,borderLeftWidth:Dt,borderRadius:Dt,borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomRightRadius:Dt,borderBottomLeftRadius:Dt,width:Dt,maxWidth:Dt,height:Dt,maxHeight:Dt,top:Dt,right:Dt,bottom:Dt,left:Dt,inset:Dt,insetBlock:Dt,insetBlockStart:Dt,insetBlockEnd:Dt,insetInline:Dt,insetInlineStart:Dt,insetInlineEnd:Dt,padding:Dt,paddingTop:Dt,paddingRight:Dt,paddingBottom:Dt,paddingLeft:Dt,paddingBlock:Dt,paddingBlockStart:Dt,paddingBlockEnd:Dt,paddingInline:Dt,paddingInlineStart:Dt,paddingInlineEnd:Dt,margin:Dt,marginTop:Dt,marginRight:Dt,marginBottom:Dt,marginLeft:Dt,marginBlock:Dt,marginBlockStart:Dt,marginBlockEnd:Dt,marginInline:Dt,marginInlineStart:Dt,marginInlineEnd:Dt,fontSize:Dt,backgroundPositionX:Dt,backgroundPositionY:Dt,...rC,zIndex:Xy,fillOpacity:Uc,strokeOpacity:Uc,numOctaves:Xy},lC={...zp,color:ho,backgroundColor:ho,outlineColor:ho,fill:ho,stroke:ho,borderColor:ho,borderTopColor:ho,borderRightColor:ho,borderBottomColor:ho,borderLeftColor:ho,filter:qm,WebkitFilter:qm,mask:Km,WebkitMask:Km},Kb=t=>lC[t],cC=new Set([qm,Km]);function Qb(t,n){let i=Kb(t);return cC.has(i)||(i=aa),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const uC=new Set(["auto","none","0"]);function dC(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!uC.has(u)&&Tl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Qb(i,c)}class fC extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=Vb(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Wb.has(a)||n.length!==2)return;const[c,u]=n,d=Fy(c),h=Fy(u),p=Dy(c),y=Dy(u);if(p!==y&&dr[a]){this.needsMeasurement=!0;return}if(d!==h)if(Py(d)&&Py(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else dr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||sC(n[c]))&&a.push(c);a.length&&dC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=dr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=dr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const Zb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function jd(t){return tb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=gb(queueMicrotask,!1),sa={x:!1,y:!1};function Jb(){return sa.x||sa.y}function hC(t){return t==="x"||t==="y"?sa[t]?null:(sa[t]=!0,()=>{sa[t]=!1}):sa.x||sa.y?null:(sa.x=sa.y=!0,()=>{sa.x=sa.y=!1})}function e5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function mC(t){return!(t.pointerType==="touch"||Jb())}function pC(t,n,i={}){const[a,c,u]=e5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",S)},x=k=>{y&&(y(k),y=void 0),g()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!mC(k))return;p=!1;const T=n(d,k);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const t5=(t,n)=>n?t===n?!0:t5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,_C=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function gC(t){return _C.has(t.tagName)||t.isContentEditable===!0}const yC=new Set(["INPUT","SELECT","TEXTAREA"]);function xC(t){return yC.has(t.tagName)||t.isContentEditable===!0}const Md=new WeakSet;function Gy(t){return n=>{n.key==="Enter"&&t(n)}}function am(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const bC=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=Gy(()=>{if(Md.has(i))return;am(i,"down");const c=Gy(()=>{am(i,"up")}),u=()=>am(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function qy(t){return Pp(t)&&!Jb()}const Ky=new WeakSet;function vC(t,n,i={}){const[a,c,u]=e5(t,i),d=h=>{const p=h.currentTarget;if(!qy(h)||Ky.has(h))return;Md.add(p),i.stopPropagation&&Ky.add(h);const y=n(p,h),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),Md.has(p)&&Md.delete(p),qy(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||t5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),jd(h)&&(h.addEventListener("focus",y=>bC(y,c)),!gC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Kd(t){return tb(t)&&"ownerSVGElement"in t}const Ed=new WeakMap;let cr;const n5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Kd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],wC=n5("inline","width","offsetWidth"),SC=n5("block","height","offsetHeight");function CC({target:t,borderBoxSize:n}){var i;(i=Ed.get(t))==null||i.forEach(a=>{a(t,{get width(){return wC(t,n)},get height(){return SC(t,n)}})})}function kC(t){t.forEach(CC)}function jC(){typeof ResizeObserver>"u"||(cr=new ResizeObserver(kC))}function MC(t,n){cr||jC();const i=$p(t);return i.forEach(a=>{let c=Ed.get(a);c||(c=new Set,Ed.set(a,c)),c.add(n),cr==null||cr.observe(a)}),()=>{i.forEach(a=>{const c=Ed.get(a);c==null||c.delete(n),c!=null&&c.size||cr==null||cr.unobserve(a)})}}const Td=new Set;let Sl;function EC(){Sl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Td.forEach(n=>n(t))},window.addEventListener("resize",Sl)}function TC(t){return Td.add(t),Sl||EC(),()=>{Td.delete(t),!Td.size&&typeof Sl=="function"&&(window.removeEventListener("resize",Sl),Sl=void 0)}}function Qy(t,n){return typeof t=="function"?TC(t):MC(t,n)}function s5(t){return Kd(t)&&t.tagName==="svg"}function AC(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Tb(c,u,d);return n?h(a):h}const DC=[...qb,ho,aa],NC=t=>DC.find(Gb(t)),Zy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cl=()=>({x:Zy(),y:Zy()}),Jy=()=>({min:0,max:0}),fo=()=>({x:Jy(),y:Jy()}),Yc=new WeakMap;function Qd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Wc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Zd(t){return Qd(t.animate)||Up.some(n=>Wc(t[n]))}function o5(t){return!!(Zd(t)||t.variants)}function RC(t,n,i){for(const a in n){const c=n[a],u=i[a];if(wo(c))t.addValue(a,c);else if(wo(u))t.addValue(a,hr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,hr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Qm={current:null},i5={current:!1},BC=typeof window<"u";function LC(){if(i5.current=!0,!!BC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Qm.current=t.matches;t.addEventListener("change",n),n()}else Qm.current=!1}const e1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Pd={};function a5(t){Pd=t}function OC(){return Pd}class r5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=si.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ds.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Zd(i),this.isVariantNode=o5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&wo(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Yc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(i5.current||LC(),this.shouldReduceMotion=Qm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),$a(this.notifyUpdate),$a(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Hb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new Ib({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:bi(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Ll.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ds.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Pd){const i=Pd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<e1.length;a++){const c=e1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=RC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=hr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(eb(a)||nb(a))?a=parseFloat(a):!NC(a)&&aa.test(i)&&(a=Qb(n,i)),this.setBaseTarget(n,wo(a)?a.get():a)),wo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!wo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class l5 extends r5{constructor(){super(...arguments),this.KeyframeResolver=fC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;wo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class mr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function c5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function zC({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function $C(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function rm(t){return t===void 0||t===1}function Zm({scale:t,scaleX:n,scaleY:i}){return!rm(t)||!rm(n)||!rm(i)}function Rr(t){return Zm(t)||u5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function u5(t){return t1(t.x)||t1(t.y)}function t1(t){return t&&t!=="0%"}function Hd(t,n,i){const a=t-i,c=n*a;return i+c}function n1(t,n,i,a,c){return c!==void 0&&(t=Hd(t,c,a)),Hd(t,i,a)+n}function Jm(t,n=0,i=1,a,c){t.min=n1(t.min,n,i,a,c),t.max=n1(t.max,n,i,a,c)}function d5(t,{x:n,y:i}){Jm(t.x,n.translate,n.scale,n.originPoint),Jm(t.y,i.translate,i.scale,i.originPoint)}const s1=.999999999999,o1=1.0000000000001;function IC(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(pa(t.x,-u.scroll.offset.x),pa(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,d5(t,d)),a&&Rr(u.latestValues)&&Ad(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<o1&&n.x>s1&&(n.x=1),n.y<o1&&n.y>s1&&(n.y=1)}function pa(t,n){t.min+=n,t.max+=n}function i1(t,n,i,a,c=.5){const u=vs(t.min,t.max,c);Jm(t,n,i,u,a)}function a1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function Ad(t,n,i){const a=i!=null?i:t;i1(t.x,a1(n.x,a.x),n.scaleX,n.scale,n.originX),i1(t.y,a1(n.y,a.y),n.scaleY,n.scale,n.originY)}function f5(t,n){return c5($C(t.getBoundingClientRect(),n))}function PC(t,n,i){const a=f5(t,i),{scroll:c}=n;return c&&(pa(a.x,c.offset.x),pa(a.y,c.offset.y)),a}const HC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UC=Bl.length;function VC(t,n,i){let a="",c=!0;for(let u=0;u<UC;u++){const d=Bl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=Zb(h,zp[d]);if(!p){c=!1;const g=HC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Ll.has(p)){d=!0;continue}else if(xb(p)){c[p]=y;continue}else{const g=Zb(y,zp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=VC(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function h5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function r1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const bc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Dt.test(t))t=parseFloat(t);else return t;const i=r1(t,n.target.x),a=r1(t,n.target.y);return`${i}% ${a}%`}},YC={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=aa.parse(t);if(c.length>5)return a;const u=aa.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=vs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},ep={borderRadius:{...bc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bc,borderTopRightRadius:bc,borderBottomLeftRadius:bc,borderBottomRightRadius:bc,boxShadow:YC};function m5(t,{layout:n,layoutId:i}){return Ll.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!ep[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(wo(a[h])||c&&wo(c[h])||m5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function WC(t){return window.getComputedStyle(t)}class p5 extends l5{constructor(){super(...arguments),this.type="html",this.renderInstance=h5}readValueFromInstance(n,i){var a;if(Ll.has(i))return(a=this.projection)!=null&&a.isProjecting?Pm(i):f4(n,i);{const c=WC(n),u=(xb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return f5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function FC(t,n){return t in n}class XC extends r5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(FC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return fo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const GC={offset:"stroke-dashoffset",array:"stroke-dasharray"},qC={offset:"strokeDashoffset",array:"strokeDasharray"};function KC(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?GC:qC;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const QC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function _5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var w,S;if(Vp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of QC)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&KC(x,c,u,d,!1)}const g5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),y5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ZC(t,n,i,a){h5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(g5.has(c)?c:Lp(c),n.attrs[c])}function x5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(wo(t[c])||wo(n[c])){const u=Bl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class b5 extends l5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Ll.has(i)){const a=Kb(i);return a&&a.default||0}return i=g5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return x5(n,i,a)}build(n,i,a){_5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){ZC(n,i,a,c)}mount(n){this.isSVGTag=y5(n.tagName),super.mount(n)}}const JC=Up.length;function v5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?v5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<JC;i++){const a=Up[i],c=t.props[a];(Wc(c)||c===!1)&&(n[a]=c)}return n}function w5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const e6=[...Hp].reverse(),t6=Hp.length;function n6(t){return n=>Promise.all(n.map(({animation:i,options:a})=>tC(t,i,a)))}function s6(t){let n=n6(t),i=l1(),a=!0,c=!1;const u=y=>(g,x)=>{var w;const b=Ir(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;g={...g,...k,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=v5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let T=0;T<t6;T++){const U=e6[T],R=i[U],M=g[U]!==void 0?g[U]:x[U],q=Wc(M),G=U===y?R.isActive:null;G===!1&&(j=T);let W=M===x[U]&&M!==g[U]&&q;if(W&&(a||c)&&t.manuallyAnimateOnMount&&(W=!1),R.protectedKeys={...S},!R.isActive&&G===null||!M&&!R.prevProp||Qd(M)||typeof M=="boolean")continue;if(U==="exit"&&R.isActive&&G!==!0){R.prevResolvedValues&&(S={...S,...R.prevResolvedValues});continue}const Z=o6(R.prevProp,M);let he=Z||U===y&&R.isActive&&!W&&q||T>j&&q,pe=!1;const be=Array.isArray(M)?M:[M];let Ne=be.reduce(u(U),{});G===!1&&(Ne={});const{prevResolvedValues:Ze={}}=R,re={...Ze,...Ne},ie=F=>{he=!0,w.has(F)&&(pe=!0,w.delete(F)),R.needsAnimating[F]=!0;const me=t.getValue(F);me&&(me.liveStyle=!1)};for(const F in re){const me=Ne[F],Ee=Ze[F];if(S.hasOwnProperty(F))continue;let $=!1;Fm(me)&&Fm(Ee)?$=!w5(me,Ee):$=me!==Ee,$?me!=null?ie(F):w.add(F):me!==void 0&&w.has(F)?ie(F):R.protectedKeys[F]=!0}R.prevProp=M,R.prevResolvedValues=Ne,R.isActive&&(S={...S,...Ne}),(a||c)&&t.blockInitialAnimation&&(he=!1);const L=W&&Z;he&&(!L||pe)&&b.push(...be.map(F=>{const me={type:U};if(typeof F=="string"&&(a||c)&&!L&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ee}=t,$=Ir(Ee,F);if(Ee.enteringChildren&&$){const{delayChildren:le}=$.transition||{};me.delay=Ub(Ee.enteringChildren,t,le)}}return{animation:F,options:me}}))}if(w.size){const T={};if(typeof g.initial!="boolean"){const U=Ir(t,Array.isArray(g.initial)?g.initial[0]:g.initial);U&&U.transition&&(T.transition=U.transition)}w.forEach(U=>{const R=t.getBaseTarget(U),M=t.getValue(U);M&&(M.liveStyle=!0),T[U]=R!=null?R:null}),b.push({animation:T})}let k=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=l1(),c=!0}}}function o6(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!w5(n,t):!1}function Tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function l1(){return{animate:Tr(!0),whileInView:Tr(),whileHover:Tr(),whileTap:Tr(),whileDrag:Tr(),whileFocus:Tr(),exit:Tr()}}function tp(t,n){t.min=n.min,t.max=n.max}function na(t,n){tp(t.x,n.x),tp(t.y,n.y)}function c1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const S5=1e-4,i6=1-S5,a6=1+S5,C5=.01,r6=0-C5,l6=0+C5;function oi(t){return t.max-t.min}function c6(t,n,i){return Math.abs(t-n)<=i}function u1(t,n,i,a=.5){t.origin=a,t.originPoint=vs(n.min,n.max,t.origin),t.scale=oi(i)/oi(n),t.translate=vs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=i6&&t.scale<=a6||isNaN(t.scale))&&(t.scale=1),(t.translate>=r6&&t.translate<=l6||isNaN(t.translate))&&(t.translate=0)}function $c(t,n,i,a){u1(t.x,n.x,i.x,a?a.originX:void 0),u1(t.y,n.y,i.y,a?a.originY:void 0)}function d1(t,n,i,a=0){const c=a?vs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+oi(n)}function u6(t,n,i,a){d1(t.x,n.x,i.x,a==null?void 0:a.x),d1(t.y,n.y,i.y,a==null?void 0:a.y)}function f1(t,n,i,a=0){const c=a?vs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+oi(n)}function Ud(t,n,i,a){f1(t.x,n.x,i.x,a==null?void 0:a.x),f1(t.y,n.y,i.y,a==null?void 0:a.y)}function h1(t,n,i,a,c){return t-=n,t=Hd(t,1/i,a),c!==void 0&&(t=Hd(t,1/c,a)),t}function d6(t,n=0,i=1,a=.5,c,u=t,d=t){if(_a.test(n)&&(n=parseFloat(n),n=vs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=vs(u.min,u.max,a);t===u&&(h-=n),t.min=h1(t.min,n,i,h,c),t.max=h1(t.max,n,i,h,c)}function m1(t,n,[i,a,c],u,d){d6(t,n[i],n[a],n[c],n.scale,u,d)}const f6=["x","scaleX","originX"],h6=["y","scaleY","originY"];function p1(t,n,i,a){m1(t.x,n,f6,i?i.x:void 0,a?a.x:void 0),m1(t.y,n,h6,i?i.y:void 0,a?a.y:void 0)}function _1(t){return t.translate===0&&t.scale===1}function k5(t){return _1(t.x)&&_1(t.y)}function g1(t,n){return t.min===n.min&&t.max===n.max}function m6(t,n){return g1(t.x,n.x)&&g1(t.y,n.y)}function y1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function j5(t,n){return y1(t.x,n.x)&&y1(t.y,n.y)}function x1(t){return oi(t.x)/oi(t.y)}function b1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function ma(t){return[t("x"),t("y")]}function p6(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const M5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],_6=M5.length,v1=t=>typeof t=="string"?parseFloat(t):t,w1=t=>typeof t=="number"||Dt.test(t);function g6(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=vs(0,(d=i.opacity)!=null?d:1,y6(a)),t.opacityExit=vs((h=n.opacity)!=null?h:1,0,x6(a))):u&&(t.opacity=vs((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<_6;g++){const x=M5[g];let b=S1(n,x),w=S1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||w1(b)===w1(w)?(t[x]=Math.max(vs(v1(b),v1(w),a),0),(_a.test(w)||_a.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=vs(n.rotate||0,i.rotate||0,a))}function S1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const y6=E5(0,.5,db),x6=E5(.5,.95,Gi);function E5(t,n,i){return a=>a<t?0:a>n?1:i(El(t,n,a))}function T5(t,n,i){const a=wo(t)?t:hr(t);return a.start(Rp("",a,n,i)),a.animation}function Fc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const b6=(t,n)=>t.depth-n.depth;class v6{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){Ml(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(b6),this.isDirty=!1,this.children.forEach(n)}}function w6(t,n){const i=si.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&($a(a),t(u-n))};return ds.setup(a,!0),()=>$a(a)}function Dd(t){return wo(t)?t.get():t}class S6{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Ml(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Ml(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Nd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lm=["","X","Y","Z"],C6=1e3;let k6=0;function cm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function A5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Xb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ds,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&A5(a)}function D5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=k6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(E6),this.nodes.forEach(B6),this.nodes.forEach(L6),this.nodes.forEach(T6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new v6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Kd(d)&&!s5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;ds.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=w6(b,250),Nd.hasAnimatedSinceResize&&(Nd.hasAnimatedSinceResize=!1,this.nodes.forEach(j1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||P6,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=y.getProps(),T=!this.targetLayout||!j5(this.targetLayout,w),U=!x&&b;if(this.options.layoutRoot||this.resumeFrom||U||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Np(S,"layout"),onPlay:j,onComplete:k};(y.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(g,U)}else x||j1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$a(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(O6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&A5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(D6),this.nodes.forEach(C1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(k1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(N6),this.nodes.forEach(R6),this.nodes.forEach(j6),this.nodes.forEach(M6)):this.nodes.forEach(k1),this.clearAllSnapshots();const h=si.now();Vo.delta=ga(0,1e3/60,h-Vo.timestamp),Vo.timestamp=h,Vo.isProcessing=!0,em.update.process(Vo),em.preRender.process(Vo),em.render.process(Vo),Vo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(A6),this.sharedNodes.forEach(z6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ds.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ds.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!oi(this.snapshot.measuredBox.x)&&!oi(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=fo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!k5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||Rr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),H6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return fo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(U6))){const{scroll:g}=this.root;g&&(pa(h.x,g.offset.x),pa(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=fo();if(na(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&na(h,d),pa(h.x,x.offset.x),pa(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||fo();na(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(pa(y.x,-w.scroll.offset.x),pa(y.y,-w.scroll.offset.y)),Rr(w.latestValues)&&Ad(y,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return Rr(this.latestValues)&&Ad(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=fo();na(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!Rr(g.latestValues))continue;let x;g.instance&&(Zm(g.latestValues)&&g.updateSnapshot(),x=fo(),na(x,g.measurePageBox())),p1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return Rr(this.latestValues)&&p1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Vo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=fo(),this.targetWithTransforms=fo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),u6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):na(this.target,this.layout.layoutBox),d5(this.target,this.targetDelta)):na(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zm(this.parent.latestValues)||u5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fo(),this.relativeTargetOrigin=fo(),Ud(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),na(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Vo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;na(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;IC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=fo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(c1(this.prevProjectionDelta.x,this.projectionDelta.x),c1(this.prevProjectionDelta.y,this.projectionDelta.y)),$c(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!b1(this.projectionDelta.x,this.prevProjectionDelta.x)||!b1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Cl(),this.projectionDelta=Cl(),this.projectionDeltaWithTransform=Cl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=Cl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=fo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),T=!k||k.members.length<=1,U=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(I6));this.animationProgress=0;let R;this.mixTargetDelta=M=>{const q=M/1e3;M1(x.x,d.x,q),M1(x.y,d.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ud(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),$6(this.relativeTarget,this.relativeTargetOrigin,b,q),R&&m6(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=fo()),na(R,this.relativeTarget)),j&&(this.animationValues=g,g6(g,y,this.latestValues,q,U,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&($a(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ds.update(()=>{Nd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hr(0)),this.motionValue.jump(0,!1),this.currentAnimation=T5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(C6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&N5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||fo();const x=oi(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=oi(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}na(h,p),Ad(h,g),$c(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new S6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&cm("z",d,y,this.animationValues);for(let g=0;g<lm.length;g++)cm(`rotate${lm[g]}`,d,y,this.animationValues),cm(`skew${lm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Dd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Dd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Rr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=p6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const k in ep){if(g[k]===void 0)continue;const{correct:T,applyTo:U,isCSSVariable:R}=ep[k],M=x==="none"?g[k]:T(g[k],y);if(U){const q=U.length;for(let G=0;G<q;G++)d[U[G]]=M}else R?this.options.visualElement.renderState.vars[k]=M:d[k]=M}this.options.layoutId&&(d.pointerEvents=y===this?Dd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(C1),this.root.sharedNodes.clear()}}}function j6(t){t.updateLayout()}function M6(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=oi(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";tp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else N5(u,n.layoutBox,a)&&ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=oi(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=Cl();$c(h,a,n.layoutBox);const p=Cl();d?$c(p,t.applyTransform(c,!0),n.measuredBox):$c(p,a,n.layoutBox);const y=!k5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=fo();Ud(j,n.layoutBox,b.layoutBox,S);const k=fo();Ud(k,a,w.layoutBox,S),j5(j,k)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function E6(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function T6(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function A6(t){t.clearSnapshot()}function C1(t){t.clearMeasurements()}function D6(t){t.isLayoutDirty=!0,t.updateLayout()}function k1(t){t.isLayoutDirty=!1}function N6(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function R6(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function j1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function B6(t){t.resolveTargetDelta()}function L6(t){t.calcProjection()}function O6(t){t.resetSkewAndRotation()}function z6(t){t.removeLeadSnapshot()}function M1(t,n,i){t.translate=vs(n.translate,0,i),t.scale=vs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function E1(t,n,i,a){t.min=vs(n.min,i.min,a),t.max=vs(n.max,i.max,a)}function $6(t,n,i,a){E1(t.x,n.x,i.x,a),E1(t.y,n.y,i.y,a)}function I6(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const P6={duration:.45,ease:[.4,0,.1,1]},T1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),A1=T1("applewebkit/")&&!T1("chrome/")?Math.round:Gi;function D1(t){t.min=A1(t.min),t.max=A1(t.max)}function H6(t){D1(t.x),D1(t.y)}function N5(t,n,i){return t==="position"||t==="preserve-aspect"&&!c6(x1(n),x1(i),.2)}function U6(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const V6=D5({attachResizeListener:(t,n)=>Fc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),um={current:void 0},R5=D5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!um.current){const t=new V6({});t.mount(window),t.setOptions({layoutScroll:!0}),um.current=t}return um.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Jd=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function N1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function Y6(...t){return n=>{let i=!1;const a=t.map(c=>{const u=N1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():N1(t[c],null)}}}}function W6(...t){return _.useCallback(Y6(...t),t)}class F6 extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(jd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=jd(a)&&a.offsetWidth||0,u=jd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function X6({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Jd),g=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=W6(h,g);return _.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:T,right:U,bottom:R}=p.current;if(n||u===!1||!h.current||!S||!j)return;const M=i==="left"?`left: ${T}`:`right: ${U}`,q=a==="bottom"?`bottom: ${R}`:`top: ${k}`;h.current.dataset.motionPopId=d;const G=document.createElement("style");y&&(G.nonce=y);const W=c!=null?c:document.head;return W.appendChild(G),G.sheet&&G.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${M}px !important;
            ${q}px !important;
          }
        `),()=>{var Z;(Z=h.current)==null||Z.removeAttribute("data-motion-pop-id"),W.contains(G)&&W.removeChild(G)}},[n]),l.jsx(F6,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const G6=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Gc(q6),x=_.useId();let b=!0,w=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const j of g.values())if(!j)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&b&&(w={...w}),_.useMemo(()=>{g.forEach((S,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(X6,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(Gd.Provider,{value:w,children:t})};function q6(){return new Map}function B5(t=!0){const n=_.useContext(Gd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function R1(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const ef=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=B5(d),b=_.useMemo(()=>R1(t),[t]),w=d&&!g?[]:b.map(id),S=_.useRef(!0),j=_.useRef(b),k=Gc(()=>new Map),T=_.useRef(new Set),[U,R]=_.useState(b),[M,q]=_.useState(b);yp(()=>{S.current=!1,j.current=b;for(let Z=0;Z<M.length;Z++){const he=id(M[Z]);w.includes(he)?(k.delete(he),T.current.delete(he)):k.get(he)!==!0&&k.set(he,!1)}},[M,w.length,w.join("-")]);const G=[];if(b!==U){let Z=[...b];for(let he=0;he<M.length;he++){const pe=M[he],be=id(pe);w.includes(be)||(Z.splice(he,0,pe),G.push(pe))}return u==="wait"&&G.length&&(Z=G),q(R1(Z)),R(b),null}const{forceRender:W}=_.useContext(gp);return l.jsx(l.Fragment,{children:M.map(Z=>{const he=id(Z),pe=d&&!g?!1:b===M||w.includes(he),be=()=>{if(T.current.has(he))return;if(k.has(he))T.current.add(he),k.set(he,!0);else return;let Ne=!0;k.forEach(Ze=>{Ze||(Ne=!1)}),Ne&&(W==null||W(),q(j.current),d&&(x==null||x()),a&&a())};return l.jsx(G6,{isPresent:pe,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:pe?void 0:be,anchorX:h,anchorY:p,children:Z},he)})})},L5=_.createContext({strict:!1}),B1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let L1=!1;function K6(){if(L1)return;const t={};for(const n in B1)t[n]={isEnabled:i=>B1[n].some(a=>!!i[a])};a5(t),L1=!0}function O5(){return K6(),OC()}function Q6(t){const n=O5();for(const i in t)n[i]={...n[i],...t[i]};a5(n)}const Z6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Vd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Z6.has(t)}let z5=t=>!Vd(t);function J6(t){typeof t=="function"&&(z5=n=>n.startsWith("on")?!Vd(n):t(n))}try{J6(require("@emotion/is-prop-valid").default)}catch{}function ek(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||wo(t[c])||(z5(c)||i===!0&&Vd(c)||!n&&!Vd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const tf=_.createContext({});function tk(t,n){if(Zd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Wc(i)?i:void 0,animate:Wc(a)?a:void 0}}return t.inherit!==!1?n:{}}function nk(t){const{initial:n,animate:i}=tk(t,_.useContext(tf));return _.useMemo(()=>({initial:n,animate:i}),[O1(n),O1(i)])}function O1(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $5(t,n,i){for(const a in n)!wo(n[a])&&!m5(a,i)&&(t[a]=n[a])}function sk({transformTemplate:t},n){return _.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function ok(t,n){const i=t.style||{},a={};return $5(a,i,t),Object.assign(a,sk(t,n)),a}function ik(t,n){const i={},a=ok(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const I5=()=>({...Wp(),attrs:{}});function ak(t,n,i,a){const c=_.useMemo(()=>{const u=I5();return _5(u,n,y5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};$5(u,t.style,t),c.style={...u,...c.style}}return c}const rk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(rk.indexOf(t)>-1||/[A-Z]/u.test(t))}function lk(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?ak:ik)(n,a,c,t),y=ek(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>wo(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function ck({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:uk(i,a,c,t),renderState:n()}}function uk(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=Dd(u[b]);let{initial:d,animate:h}=t;const p=Zd(t),y=o5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Qd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:j,transition:k,...T}=S;for(const U in T){let R=T[U];if(Array.isArray(R)){const M=g?R.length-1:0;R=R[M]}R!==null&&(c[U]=R)}for(const U in j)c[U]=j[U]}}}return c}const P5=t=>(n,i)=>{const a=_.useContext(tf),c=_.useContext(Gd),u=()=>ck(t,n,a,c);return i?u():Gc(u)},dk=P5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),fk=P5({scrapeMotionValuesFromProps:x5,createRenderState:I5}),hk=Symbol.for("motionComponentSymbol");function mk(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const H5=_.createContext({});function vl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function pk(t,n,i,a,c,u){var R,M;const{visualElement:d}=_.useContext(tf),h=_.useContext(L5),p=_.useContext(Gd),y=_.useContext(Jd),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),w=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=_.useContext(H5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&_k(b.current,i,c,j);const k=_.useRef(!1);_.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const T=i[Fb],U=_.useRef(!!T&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,T))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,T)));return yp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),U.current&&S.animationState&&S.animationState.animateChanges())}),_.useEffect(()=>{S&&(!U.current&&S.animationState&&S.animationState.animateChanges(),U.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,T)}),U.current=!1),S.enteringChildren=void 0)}),S}function _k(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:U5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&vl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function U5(t){if(t)return t.options.allowProjection!==!1?t.projection:U5(t.parent)}function dm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&Q6(a);const u=i?i==="svg":Fp(t),d=u?fk:dk;function h(x,b){let w;const S={..._.useContext(Jd),...x,layoutId:gk(x)},{isStatic:j}=S,k=nk(x),T=d(x,j);if(!j&&typeof window<"u"){yk();const U=xk(S);w=U.MeasureLayout,k.visualElement=pk(t,T,S,c,U.ProjectionNode,u)}return l.jsxs(tf.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,lk(t,x,mk(T,k.visualElement,b),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[hk]=t,p}function gk({layoutId:t}){const n=_.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function yk(t,n){_.useContext(L5).strict}function xk(t){const n=O5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function bk(t,n){if(typeof Proxy>"u")return dm;const i=new Map,a=(u,d)=>dm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,dm(d,void 0,t,n)),i.get(d))})}const vk=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new b5(n):new p5(n,{allowProjection:t!==_.Fragment})};class wk extends mr{constructor(n){super(n),n.animationState||(n.animationState=s6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Qd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Sk=0;class Ck extends mr{constructor(){super(...arguments),this.id=Sk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Ir(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const kk={animation:{Feature:wk},exit:{Feature:Ck}};function Zc(t){return{point:{x:t.pageX,y:t.pageY}}}const jk=t=>n=>Pp(n)&&t(n,Zc(n));function Ic(t,n,i,a){return Fc(t,n,jk(i),a)}const V5=({current:t})=>t?t.ownerDocument.defaultView:null,z1=(t,n)=>Math.abs(t-n);function Mk(t,n){const i=z1(t.x,n.x),a=z1(t.y,n.y);return Math.sqrt(i**2+a**2)}const $1=new Set(["auto","scroll"]);class Y5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const w=fm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Mk(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:T}=Vo;this.history.push({...k,timestamp:T});const{onStart:U,onMove:R}=this.handlers;S||(U&&U(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ad(S,this.transformPagePoint),ds.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=fm(w.type==="pointercancel"?this.lastMoveEventInfo:ad(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,U),k&&k(w,U)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Zc(n),y=ad(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Vo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,fm(y,this.history)),this.removeListeners=qc(Ic(this.contextWindow,"pointermove",this.handlePointerMove),Ic(this.contextWindow,"pointerup",this.handlePointerUp),Ic(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);($1.has(a.overflowX)||$1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ds.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),$a(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function I1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function fm({point:t},n){return{point:t,delta:I1(t,W5(n)),offset:I1(t,Ek(n)),velocity:Tk(n,.1)}}function Ek(t){return t[0]}function W5(t){return t[t.length-1]}function Tk(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=W5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>bi(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>bi(n)*2&&(a=t[1]);const u=Xi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ak(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?vs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?vs(i,t,a.max):Math.min(t,i)),t}function P1(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Dk(t,{top:n,left:i,bottom:a,right:c}){return{x:P1(t.x,i,c),y:P1(t.y,n,a)}}function H1(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Nk(t,n){return{x:H1(t.x,n.x),y:H1(t.y,n.y)}}function Rk(t,n){let i=.5;const a=oi(t),c=oi(n);return c>a?i=El(n.min,n.max-a,t.min):a>c&&(i=El(t.min,t.max-c,n.min)),ga(0,1,i)}function Bk(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const np=.35;function Lk(t=np){return t===!1?t=0:t===!0&&(t=np),{x:U1(t,"left","right"),y:U1(t,"top","bottom")}}function U1(t,n,i){return{min:V1(t,n),max:V1(t,i)}}function V1(t,n){return typeof t=="number"?t:t[n]||0}const Ok=new WeakMap;class zk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Zc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=hC(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ma(T=>{let U=this.getAxisMotionValue(T).get()||0;if(_a.test(U)){const{projection:R}=this.visualElement;if(R&&R.layout){const M=R.layout.layoutBox[T];M&&(U=oi(M)*(parseFloat(U)/100))}}this.originPoint[T]=U}),j&&ds.update(()=>j(x,b),!1,!0),Xm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:T}=b;if(S&&this.currentDirection===null){this.currentDirection=Ik(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),k&&ds.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new Y5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:V5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ds.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ak(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&vl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Dk(a.layoutBox,n):this.constraints=!1,this.elastic=Lk(i),c!==this.constraints&&!vl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ma(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Bk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!vl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=PC(a,c.root,this.visualElement.getTransformPagePoint());let d=Nk(c.layout.layoutBox,u);if(i){const h=i(zC(d));this.hasMutatedConstraints=!!h,h&&(d=c5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=ma(g=>{if(!rd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Xm(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){ma(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ma(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-vs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!vl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ma(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Rk({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ma(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(vs(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ok.set(this.visualElement,this);const n=this.visualElement.current,i=Ic(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&xC(b);g&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();vl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=$k(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ds.read(c);const h=Fc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(ma(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=np,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Y1(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function $k(t,n,i){const a=Qy(t,Y1(i)),c=Qy(n,Y1(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Ik(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class Pk extends mr{constructor(n){super(n),this.removeGroupControls=Gi,this.removeListeners=Gi,this.controls=new zk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hm=t=>(n,i)=>{t&&ds.update(()=>t(n,i),!1,!0)};class Hk extends mr{constructor(){super(...arguments),this.removePointerDownListener=Gi}onPointerDown(n){this.session=new Y5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:V5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:hm(n),onStart:hm(i),onMove:hm(a),onEnd:(u,d)=>{delete this.session,c&&ds.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Ic(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let mm=!1;class Uk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),mm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Nd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),mm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ds.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;mm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function F5(t){const[n,i]=B5(),a=_.useContext(gp);return l.jsx(Uk,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(H5),isPresent:n,safeToRemove:i})}const Vk={pan:{Feature:Hk},drag:{Feature:Pk,ProjectionNode:R5,MeasureLayout:F5}};function W1(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ds.postRender(()=>u(n,Zc(n)))}class Yk extends mr{mount(){const{current:n}=this.node;n&&(this.unmount=pC(n,(i,a)=>(W1(this.node,a,"Start"),c=>W1(this.node,c,"End"))))}unmount(){}}class Wk extends mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qc(Fc(this.node.current,"focus",()=>this.onFocus()),Fc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function F1(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ds.postRender(()=>u(n,Zc(n)))}class Fk extends mr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=vC(n,(c,u)=>(F1(this.node,u,"Start"),(d,{success:h})=>F1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const sp=new WeakMap,pm=new WeakMap,Xk=t=>{const n=sp.get(t.target);n&&n(t)},Gk=t=>{t.forEach(Xk)};function qk({root:t,...n}){const i=t||document;pm.has(i)||pm.set(i,{});const a=pm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Gk,{root:t,...n})),a[c]}function Kk(t,n,i){const a=qk(n);return sp.set(t,i),a.observe(t),()=>{sp.delete(t),a.unobserve(t)}}const Qk={some:0,all:1};class Zk extends mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Qk[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(y)};this.stopObserver=Kk(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Jk(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Jk({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const e3={inView:{Feature:Zk},tap:{Feature:Fk},focus:{Feature:Wk},hover:{Feature:Yk}},t3={layout:{ProjectionNode:R5,MeasureLayout:F5}},n3={...kk,...e3,...Vk,...t3},ii=bk(n3,vk);function op(t){const n=Gc(()=>hr(t)),{isStatic:i}=_.useContext(Jd);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function X5(t,n){const i=op(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>ds.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),$a(a)}}),i}function s3(t){zc.current=[],t();const n=X5(zc.current,t);return zc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return s3(t);const u=typeof n=="function"?n:AC(n,i,a),d=Array.isArray(t)?X1(t,u):X1([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function X1(t,n){const i=Gc(()=>[]);return X5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function G5(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function o3(t,n,i){return t*(n+1)}function G1(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function i3(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(Ml(t,c),a--)}}function a3(t,n,i,a,c,u){i3(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:vs(c,u,a[d]),easing:pb(i,d)})}function r3(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function l3(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const c3="easeInOut";function u3(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,G1(x,S.at,g,y));continue}let[j,k,T={}]=S;T.at!==void 0&&(x=G1(x,T.at,g,y));let U=0;const R=(M,q,G,W=0,Z=0)=>{const he=d3(M),{delay:pe=0,times:be=Db(he),type:Ne=n.type||"keyframes",repeat:Ze,repeatType:re,repeatDelay:ie=0,...L}=q;let{ease:ae=n.ease||"easeOut",duration:F}=q;const me=typeof pe=="function"?pe(W,Z):pe,Ee=he.length,$=Dp(Ne)?Ne:c==null?void 0:c[Ne||"keyframes"];if(Ee<=2&&$){let De=100;if(Ee===2&&m3(he)){const ot=he[1]-he[0];De=Math.abs(ot)}const _e={...n,...L};F!==void 0&&(_e.duration=bi(F));const Le=Mb(_e,De,$);ae=Le.ease,F=Le.duration}F!=null||(F=u);const le=x+me;be.length===1&&be[0]===0&&(be[1]=1);const ne=be.length-he.length;if(ne>0&&Ab(be,ne),he.length===1&&he.unshift(null),Ze){F=o3(F,Ze);const De=[...he],_e=[...be];ae=Array.isArray(ae)?[...ae]:[ae];const Le=[...ae];for(let ot=0;ot<Ze;ot++){he.push(...De);for(let Ie=0;Ie<De.length;Ie++)be.push(_e[Ie]+(ot+1)),ae.push(Ie===0?"linear":pb(Le,Ie-1))}r3(be,Ze)}const Se=le+F;a3(G,he,ae,be,le,Se),U=Math.max(me+F,U),b=Math.max(Se,b)};if(wo(j)){const M=q1(j,h);R(k,T,K1("default",M))}else{const M=G5(j,k,a,p),q=M.length;for(let G=0;G<q;G++){k=k,T=T;const W=M[G],Z=q1(W,h);for(const he in k)R(k[he],f3(T,he),K1(he,Z),G,q)}}g=x,x+=U}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(l3);const T=[],U=[],R=[];for(let W=0;W<k.length;W++){const{at:Z,value:he,easing:pe}=k[W];T.push(he),U.push(El(0,b,Z)),R.push(pe||"easeOut")}U[0]!==0&&(U.unshift(0),T.unshift(T[0]),R.unshift(c3)),U[U.length-1]!==1&&(U.push(1),T.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const M=d.get(S);M.keyframes[j]=T;const{type:q,...G}=n;M.transition[j]={...G,duration:b,ease:R,times:U,...i}}}),d}function q1(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function K1(t,n){return n[t]||(n[t]=[]),n[t]}function d3(t){return Array.isArray(t)?t:[t]}function f3(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const h3=t=>typeof t=="number",m3=t=>t.every(h3);function p3(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Kd(t)&&!s5(t)?new b5(n):new p5(n);i.mount(t),Yc.set(t,i)}function _3(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new XC(n);i.mount(t),Yc.set(t,i)}function g3(t,n){return wo(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function q5(t,n,i,a){const c=[];if(g3(t,n))c.push(T5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=G5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?p3:_3;Yc.has(p)||y(p);const g=Yc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(g,{...n,transition:x},{}))}}return c}function y3(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=hr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return u3(c,n,i,{spring:Vc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...q5(p,d,h))}),a}function x3(t){return Array.isArray(t)&&t.some(Array.isArray)}function b3(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(x3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=y3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=q5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new O4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Ml(n.animations,y)})),y}return a}const Q1=b3(),za=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Z1(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function v3(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>za(p.fullSha,i)||za(p.sha,i)?Z1(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(za(g.fullSha,i)||za(g.sha,i))?Z1(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function w3(t,n,i,a){if(!t)return null;const c=d=>za(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function S3(t,n,i,a,c,u,d=!1){const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=w3(h,i,a,u),x=(()=>{var G;if(!h)return null;const q=i.find(W=>za(W.fullSha,h)||za(W.sha,h));if(q!=null&&q.date)return q.date;if(g&&!d){const W=((G=a[g])!=null?G:[]).find(Z=>za(Z.fullSha,h)||za(Z.sha,h));if(W!=null&&W.date)return W.date}return null})(),b=x?new Date(x).getTime():Number.NaN,w=Date.now(),S=Number.isFinite(b)?Math.max(w,b+1+t.index):w+t.index,j=new Date(S).toISOString(),k=t.message.trim(),T={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:k||y,author:"You",date:j,kind:"stash"},U=`*Stash:${t.index}`,R={name:U,commitsAhead:1,commitsBehind:0,lastCommitDate:j,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},M=v3(i,a,h,p,U,u);return{branches:[R,...n],directCommits:M.directCommits,branchCommitPreviews:{...M.branchCommitPreviews,[U]:[T]},branchUniqueAheadCounts:{...c,[U]:1}}}function K5(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=S3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function C3({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var W,Z;const j=K5(y,t,i,u,h,c,(W=p==null?void 0:p.hasUncommittedChanges)!=null?W:!1);let k=j.branches,T=j.directCommits,U=j.branchCommitPreviews,R=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const he=p.headSha||p.parentSha||null,pe=(F,me)=>!F||!me?!1:F===me||F.startsWith(me)||me.startsWith(F),be=p.branchName?k.find(F=>F.name===p.branchName):void 0,Ne=(()=>{var me;if(!he)return null;const F=T.find(Ee=>pe(Ee.fullSha,he)||pe(Ee.sha,he));if(F!=null&&F.date)return F.date;if(be){const Ee=((me=U[be.name])!=null?me:[]).find($=>pe($.fullSha,he)||pe($.sha,he));if(Ee!=null&&Ee.date)return Ee.date}return null})(),Ze=Ne?new Date(Ne).getTime():Number.NaN,re=Date.now(),ie=Number.isFinite(Ze)?Math.max(re,Ze+1):re,L=new Date(ie).toISOString(),ae={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:he,message:"Local uncommitted changes",author:"You",date:L,kind:"uncommitted"};be?(k=k.map(F=>F.name===be.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:L,headSha:"WORKING_TREE"}:F),U={...U,[be.name]:[ae,...U[be.name]||[]]},R={...R,[be.name]:Math.max(0,(Z=Object.prototype.hasOwnProperty.call(R,be.name)?R[be.name]:be.commitsAhead)!=null?Z:0)+1}):U={...U,[c]:[ae,...U[c]||[]]}}const M={...d};M[c]=null;const q=pp(k,c,U,M),G=Hc({lanes:q,branches:k,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:U,branchParentByName:M,branchUniqueAheadCounts:R,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:U,enrichedBranchUniqueAheadCounts:R,enrichedDirectCommits:T,sharedGridLayoutModel:G}}const J1="git-visualizer:expanded-projects",ex="git-visualizer:expanded-branches";function k3(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function j3(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function M3(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function tx(t,n){if(!t||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(t),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function ip({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:w,sourceBranchName:S,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:T,onToggleGridCluster:U,onSelectCommit:R,onSelectBranch:M,isActiveProject:q}){var Se,De;if(x.has(t))return null;const G=a.get(t);if(!G)return null;const W=(Se=u.get(t))!=null?Se:[],Z=W.length>0,he=_.useMemo(()=>{var _e;return[...(_e=c[t])!=null?_e:[]]},[c,t]),pe=b&&he.length>0,be=b,Ne=Z||pe,Ze=h.has(t),re=be?he:[],ie=Ze&&re.length>0,L=y===t||g!=null&&G.headSha===g,ae=new Set(x);ae.add(t);const F="top-[-0.45rem] h-5 w-[10px]",me="rounded-bl-[7px]",Ee="left-[0.65rem]",$=new Map,le=[];for(const _e of W){const Le=d.get(_e);if(Le){const ot=re.findIndex(Ie=>Bi(Ie.fullSha,Le)||Bi(Ie.sha,Le));if(ot>=0){const Ie=(De=$.get(ot))!=null?De:[];Ie.push(_e),$.set(ot,Ie);continue}}le.push(_e)}const ne=_.useMemo(()=>{if(!b||re.length===0)return[];const _e=[];let Le=[],ot=null;const Ie=()=>{if(Le.length===0)return;const kt=Le[Le.length-1],Ot=`sidebar-single-${t}-${kt.fullSha}`;_e.push({key:ot!=null?ot:Ot,commits:Le,count:Le.length,lead:kt}),Le=[],ot=null};return re.forEach(kt=>{var lt,Pt;const Ot=(lt=j.get(`${t}:${kt.fullSha}`))!=null?lt:null,yt=((Pt=k[t])!=null?Pt:[]).includes(kt.fullSha),et=`${Ot!=null?Ot:`sidebar-single-${t}-${kt.fullSha}`}:${yt?"unpushed":"pushed"}`;if(Le.length===0){Le=[kt],ot=et;return}if(et===ot){Le.push(kt);return}Ie(),Le=[kt],ot=et}),Ie(),_e},[t,b,re,j,k]);return l.jsxs("li",{className:gn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Ze?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:gn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",me,Ee,F)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:gn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",Ee)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:gn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":q?"true":"false","data-checked-out-branch":L?"true":"false",style:{color:q?L?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{q?M==null||M(t):Ne?p(t):M==null||M(t)},onKeyDown:_e=>{(_e.key==="Enter"||_e.key===" ")&&(_e.preventDefault(),q?M==null||M(t):Ne?p(t):M==null||M(t))},children:[Ne?l.jsx("button",{type:"button","aria-label":`${Ze?"Collapse":"Expand"} ${t}`,onPointerDown:_e=>{_e.preventDefault()},onClick:_e=>{_e.preventDefault(),_e.stopPropagation(),p(t)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(lw,{"aria-hidden":"true",className:gn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Ze?"rotate-90":"")})}):null,l.jsx("span",{className:gn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:t})]})}),ie?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ne.map(_e=>{const Le=_e.count>1&&!T(_e.key);return(Le?[_e.lead]:_e.commits).map(Ie=>{var yt;const kt=re.findIndex(et=>et.fullSha===Ie.fullSha),Ot=w(Ie.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>R==null?void 0:R(Ie.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:Ie.message,children:[l.jsx("span",{className:"block truncate",children:Ie.message}),Ot.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Ot.map(et=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:et})]},`${Ie.fullSha}:${et}`))}):null]}),_e.count>1&&Ie.fullSha===_e.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${_e.lead.fullSha}`,onClick:()=>U(_e.key,`${t}:${_e.lead.fullSha}`),className:gn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Le?"":"min-w-[2ch] text-center"),children:Le?`+${Math.max(1,_e.count-1)}`:"−"}):null]}),(yt=$.get(kt))!=null&&yt.length?l.jsx("ul",{className:"relative space-y-1",children:$.get(kt).map((et,lt,Pt)=>l.jsx(ip,{branchName:et,depth:n+1,isLast:lt===Pt.length-1&&le.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ae,showCommits:b,getMergeTargetLabels:w,sourceBranchName:et,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:T,onToggleGridCluster:U,onSelectCommit:R,onSelectBranch:M,isActiveProject:q},et))}):null]},`${t}:${Ie.fullSha}`)})})}):null,Z&&Ze&&le.length>0?l.jsx("ul",{className:"relative space-y-1",children:le.map((_e,Le)=>l.jsx(ip,{branchName:_e,depth:n+1,isLast:Le===le.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ae,showCommits:b,getMergeTargetLabels:w,sourceBranchName:_e,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:T,onToggleGridCluster:U,onSelectCommit:R,onSelectBranch:M,isActiveProject:q},_e))}):null]})}function E3({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function T3({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:w,setManuallyOpenedClumps:S,setManuallyClosedClumps:j,gridLayoutModel:k,onSelectCommit:T,onSelectBranch:U,showCommits:R,className:M,style:q,collapsed:G=!1}){var qe,Be;const W=_.useRef(null),Z=_.useRef(null),[he,pe]=_.useState(()=>{if(typeof window>"u")return new Set;try{const ge=window.localStorage.getItem(J1);if(ge){const tt=JSON.parse(ge);if(Array.isArray(tt)){const Fe=new Set;for(const Je of tt)typeof Je=="string"&&Fe.add(Je);return Fe}}}catch{}return new Set(t.map(ge=>ge.path))}),[be,Ne]=_.useState({}),[Ze,re]=_.useState(()=>new Set),[ie,L]=_.useState(()=>new Set),[ae,F]=_.useState(null),me=b!=null?b:Ze,Ee=w!=null?w:ie,$=S!=null?S:re,le=j!=null?j:L,[ne,Se]=_.useState(null),[De,_e]=_.useState(null),[Le,ot]=_.useState(null),[Ie,kt]=_.useState(null),[Ot,yt]=_.useState(null),[et,lt]=_.useState(null),[Pt,an]=_.useState(null),tn=_.useRef(new Map),J=_.useRef(!1),Oe=_.useRef(null),mt=_.useRef(null),je=ge=>{try{window.localStorage.setItem(J1,JSON.stringify(Array.from(ge)))}catch{}},Ke=ge=>{try{const tt=Object.fromEntries(Object.entries(ge).map(([Fe,Je])=>[Fe,Array.from(Je)]));window.localStorage.setItem(ex,JSON.stringify(tt))}catch{}};_.useEffect(()=>{je(he)},[he]),_.useEffect(()=>{try{const ge=window.localStorage.getItem(ex);if(!ge)return;const tt=JSON.parse(ge);if(!tt||typeof tt!="object")return;const Fe={};for(const[Je,Re]of Object.entries(tt)){if(!Array.isArray(Re))continue;const nt=new Set;for(const St of Re)typeof St=="string"&&nt.add(St);Fe[Je]=nt}Ne(Fe)}catch{}},[]),_.useEffect(()=>{Ke(be)},[be]);const it=t,gt=_.useMemo(()=>{if(!Ie)return it;const ge=it.find(Re=>Re.path===Ie);if(!ge)return it;const tt=it.filter(Re=>Re.path!==Ie);if(Ot==null)return tt;const Fe=[...tt],Je=Math.max(0,Math.min(Ot,Fe.length));return Fe.splice(Je,0,ge),Fe},[Ot,Ie,it]),xt=_.useCallback(ge=>{d==null||d(ge)},[d]),Et=_.useCallback(()=>{ot(null),kt(null),yt(null),lt(null)},[]);_.useEffect(()=>{if(!Le)return;const ge=Fe=>{const Je=Oe.current;!Je||!Je.active||Math.abs(Fe.clientX-Je.startX)<=4&&Math.abs(Fe.clientY-Je.startY)<=4||mt.current==null&&(mt.current=window.requestAnimationFrame(()=>{var st,Lt;mt.current=null;const Re=Oe.current;if(!Re||!Re.active)return;(Math.abs(Fe.clientX-Re.startX)>4||Math.abs(Fe.clientY-Re.startY)>4)&&(Re.moved=!0,kt(Re.path)),lt({x:Fe.clientX-Re.offsetX,y:Fe.clientY-Re.offsetY,width:Re.width});const St=Array.from((Lt=(st=Z.current)==null?void 0:st.querySelectorAll("[data-project-path]"))!=null?Lt:[]).filter(jt=>jt.dataset.projectPath&&jt.dataset.projectPath!==Re.path);let Ct=St.length;if(St.length>0)for(let jt=0;jt<St.length;jt+=1){const _t=St[jt].getBoundingClientRect(),dn=_t.top+_t.height/2;if(Fe.clientY<dn){Ct=jt;break}}yt(Ct)}))},tt=()=>{const Fe=Oe.current;if(Oe.current=null,mt.current!=null&&(window.cancelAnimationFrame(mt.current),mt.current=null),!Fe){Et();return}if(!Fe.moved){Et();return}J.current=!0;const Je=it.map(st=>st.path);if(Je.indexOf(Fe.path)<0){Et();return}const nt=Ot;if(nt==null){Et();return}const St=Je.filter(st=>st!==Fe.path),Ct=Math.max(0,Math.min(nt,St.length));St.splice(Ct,0,Fe.path),xt(St),Et(),window.requestAnimationFrame(()=>{J.current=!1,F(null)})};return window.addEventListener("pointermove",ge),window.addEventListener("pointerup",tt),window.addEventListener("pointercancel",tt),()=>{window.removeEventListener("pointermove",ge),window.removeEventListener("pointerup",tt),window.removeEventListener("pointercancel",tt)}},[Et,xt,Le,Ot,it]);const Bt=_.useCallback((ge,tt)=>{if(ge.button!==0)return;const Fe=ge.currentTarget.getBoundingClientRect();Oe.current={active:!0,path:tt,startX:ge.clientX,startY:ge.clientY,offsetX:ge.clientX-Fe.left,offsetY:ge.clientY-Fe.top,width:Fe.width,moved:!1},ot(tt),kt(null),yt(null),lt({x:ge.clientX-Fe.left,y:ge.clientY-Fe.top,width:Fe.width})},[]),ct=(qe=k==null?void 0:k.defaultCollapsedClumps)!=null?qe:new Set,Y=ge=>me.has(ge)||!ct.has(ge)&&!Ee.has(ge),te=(ge,tt)=>{const Fe=W.current,Je=Z.current;if(Fe&&Je){const Re=`[data-clump-toggle-id="${tt}"]`,nt=Fe.querySelector(Re);if(nt){const St=nt.getBoundingClientRect().top-Je.getBoundingClientRect().top;_e({id:tt,topWithinScrollBody:St})}else _e(null)}else _e(null);Se(tt),$(Re=>{const nt=new Set(Re),St=Y(ge);return le(Ct=>{const st=new Set(Ct);return St?(nt.delete(ge),st.add(ge)):(st.delete(ge),nt.add(ge)),st}),nt})};_.useLayoutEffect(()=>{if(!ne)return;const ge=W.current,tt=Z.current;if(!ge||!tt)return;const Fe=`[data-clump-toggle-id="${ne}"]`,Je=ge.querySelector(Fe);if(Je){if((De==null?void 0:De.id)===ne){const nt=Je.getBoundingClientRect().top-tt.getBoundingClientRect().top-De.topWithinScrollBody;Number.isFinite(nt)&&nt!==0&&(tt.scrollTop+=nt)}Je.focus({preventScroll:!0}),Se(null),_e(null)}},[me,Ee,ne,De]);const ve=(ge,tt)=>{Ne(Fe=>{var St;const Je=(St=Fe[ge])!=null?St:new Set,Re=new Set(Je);Re.has(tt)?Re.delete(tt):Re.add(tt);const nt={...Fe,[ge]:Re};return Ke(nt),nt})};_.useEffect(()=>{if(ae==null)return;const ge=()=>{const Fe=tn.current.get(ae);if(!Fe)return;const Je=Fe.getBoundingClientRect();an({top:Je.bottom+8,right:Math.max(8,window.innerWidth-Je.right)})};ge();const tt=()=>F(null);return window.addEventListener("pointerdown",tt),window.addEventListener("resize",ge),window.addEventListener("scroll",ge,!0),()=>{window.removeEventListener("pointerdown",tt),window.removeEventListener("resize",ge),window.removeEventListener("scroll",ge,!0)}},[ae]);const Ae=_.useMemo(()=>{var tt,Fe,Je,Re,nt,St,Ct,st,Lt,jt,_t,dn,pt,Ht,nn,zt;const ge=new Map;for(const vt of t){const qt=C3({branches:vt.branches,mergeNodes:vt.mergeNodes,directCommits:vt.directCommits,unpushedDirectCommits:vt.unpushedDirectCommits,defaultBranch:vt.defaultBranch,branchCommitPreviews:vt.branchCommitPreviews,branchUniqueAheadCounts:vt.branchUniqueAheadCounts,checkedOutRef:vt.checkedOutRef,stashes:vt.stashes,manuallyOpenedClumps:(tt=g[vt.path])!=null?tt:new Set,manuallyClosedClumps:(Fe=x[vt.path])!=null?Fe:new Set}),rn=qt.enrichedBranches.some(Qt=>Qt.name===vt.defaultBranch)?qt.enrichedBranches:[{name:vt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...qt.enrichedBranches],fn=new Map(qt.sharedGridLayoutModel.nodes.map(Qt=>[Qt.commit.visualId,Qt.row])),Nt={};for(const Qt of qt.sharedGridLayoutModel.allCommits){const Rn=(Je=Nt[Qt.branchName])!=null?Je:[];Rn.push({fullSha:Qt.id,sha:Qt.id.slice(0,7),parentSha:(Re=Qt.parentSha)!=null?Re:null,message:Qt.message,author:Qt.author,date:Qt.date,kind:(nt=Qt.kind)!=null?nt:"commit"}),Nt[Qt.branchName]=Rn}for(const Qt of Object.keys(Nt))Nt[Qt]=Nt[Qt].sort((Rn,Es)=>{var As,mn;const Qn=new Date(Rn.date).getTime(),Cn=new Date(Es.date).getTime();if(Qn!==Cn)return Qn-Cn;const no=(As=fn.get(`${Qt}:${Rn.fullSha}`))!=null?As:Number.MAX_SAFE_INTEGER,Ts=(mn=fn.get(`${Qt}:${Es.fullSha}`))!=null?mn:Number.MAX_SAFE_INTEGER;return no!==Ts?no-Ts:Rn.fullSha.localeCompare(Es.fullSha)});const yn=(St=qt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?St:new Map,It=(Qt,Rn)=>{const Es=yn.get(Rn);if(!Es)return[];for(const[Qn,Cn]of Es.entries())if(Bi(Qt,Qn))return Array.from(Cn).sort();return[]},xn=k3(rn,vt.defaultBranch),at=j3(rn,vt.defaultBranch,xn),Kn=new Map(rn.map(Qt=>[Qt.name,Qt])),Ls=new Map;for(const Qt of rn){const Rn=(st=(Ct=qt.sharedGridLayoutModel.firstBranchCommitByName.get(Qt.name))==null?void 0:Ct.parentSha)!=null?st:null,Es=Rn!=null?Rn:null;Ls.set(Qt.name,Es)}const No=(Lt=qt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Lt:new Set,So=(jt=g[vt.path])!=null?jt:new Set,Co=(_t=x[vt.path])!=null?_t:new Set,mo=Qt=>So.has(Qt)||!No.has(Qt)&&!Co.has(Qt);ge.set(vt.path,{rootBranchNames:at,branchByName:Kn,branchCommitPreviewsFromLayout:Nt,childNamesByParent:xn,branchAnchorShaByName:Ls,unpushedCommitShasByBranch:vt.unpushedCommitShasByBranch,checkedOutBranchName:(pt=(dn=vt.checkedOutRef)==null?void 0:dn.branchName)!=null?pt:null,checkedOutHeadSha:(nn=(Ht=vt.checkedOutRef)==null?void 0:Ht.headSha)!=null?nn:null,clusterKeyByCommitId:(zt=qt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?zt:new Map,getMergeTargetLabels:It,isGridClusterOpen:mo})}return ge},[n,x,g,t]),rt=(ge,tt={})=>{var _t,dn,pt,Ht,nn;const Fe=(_t=tt.ghostMode)!=null?_t:!1,Je=(dn=tt.hideLive)!=null?dn:!1,Re=tx(ge.path,n),nt=he.has(ge.path),St=(pt=ge.treeLoaded)!=null?pt:ge.branches.length>0,Ct=Ae.get(ge.path),st=(Ht=be[ge.path])!=null?Ht:Ct?M3(Ct.rootBranchNames,Ct.childNamesByParent,y,ge.defaultBranch):new Set,Lt=Ie===ge.path,jt=tx(ge.path,n);return l.jsxs(ii.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":ge.path,"data-active-project":jt?"true":"false",className:gn("project-row relative z-10 flex flex-col gap-1 transition-colors",nt&&Ct?"mb-2.5":""),children:[Ot!==null&&Ie!==ge.path&&((nn=gt[Ot])==null?void 0:nn.path)===ge.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:gn("relative z-0 px-1",Je?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:gn(Fe?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Lt&&!Fe?"opacity-0":""),onPointerDownCapture:zt=>{if(Fe)return;const vt=zt.target;vt!=null&&vt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||Bt(zt,ge.path)},onClick:zt=>{if(Fe||jt||Ie===ge.path||J.current)return;const vt=zt.target;vt!=null&&vt.closest('button, input, textarea, select, [contenteditable="true"]')||i(ge.path)},children:[l.jsx("button",{type:"button",onPointerDown:zt=>zt.stopPropagation(),onClick:zt=>{zt.preventDefault(),zt.stopPropagation(),pe(vt=>{const qt=new Set(vt);return qt.has(ge.path)?qt.delete(ge.path):qt.add(ge.path),je(qt),qt})},"aria-expanded":nt,"aria-label":`${nt?"Collapse":"Expand"} ${ge.name}`,className:gn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",Fe?"pointer-events-none":""),style:{color:jt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(E3,{open:nt})}),l.jsx("span",{className:gn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:jt?"var(--foreground)":"var(--muted-foreground)"},children:ge.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:zt=>zt.stopPropagation(),"aria-label":`Project actions for ${ge.name}`,"aria-expanded":ae===ge.path,ref:zt=>{tn.current.set(ge.path,zt)},onClick:zt=>{zt.stopPropagation();const vt=zt.currentTarget.getBoundingClientRect();an({top:vt.bottom+8,right:Math.max(8,window.innerWidth-vt.right)}),F(qt=>qt===ge.path?null:ge.path)},className:gn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",Fe?"pointer-events-none":""),children:l.jsx(fw,{className:"h-4 w-4 shrink-0"})}),ae===ge.path&&!Fe&&Pt&&typeof document<"u"?Nl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${Pt.top}px`,right:`${Pt.right}px`},onPointerDownCapture:zt=>zt.stopPropagation(),onClick:zt=>zt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:zt=>zt.stopPropagation(),onClick:()=>{F(null),u(ge.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:zt=>zt.stopPropagation(),onClick:()=>{F(null),c(ge.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),nt?St&&Ct?l.jsx("ul",{className:gn("relative z-0 space-y-1 pt-0",Fe?"opacity-70":""),children:Ct.rootBranchNames.map((zt,vt)=>l.jsx(ip,{branchName:zt,depth:0,isLast:vt===Ct.rootBranchNames.length-1,branchByName:Ct.branchByName,branchCommitPreviews:Ct.branchCommitPreviewsFromLayout,childNamesByParent:Ct.childNamesByParent,branchAnchorShaByName:Ct.branchAnchorShaByName,expandedBranchNames:st,onToggleBranch:qt=>ve(ge.path,qt),checkedOutBranchName:Ct.checkedOutBranchName,checkedOutHeadSha:Ct.checkedOutHeadSha,ancestors:new Set,showCommits:R,getMergeTargetLabels:Ct.getMergeTargetLabels,sourceBranchName:zt,clusterKeyByCommitId:Ct.clusterKeyByCommitId,unpushedCommitShasByBranch:Ct.unpushedCommitShasByBranch,isGridClusterOpen:Ct.isGridClusterOpen,onToggleGridCluster:te,onSelectCommit:async qt=>{Re||await i(ge.path),T==null||T(qt)},onSelectBranch:async qt=>{Re||await i(ge.path),U==null||U(qt)},isActiveProject:jt},`${ge.path}:${zt}`))}):l.jsx("p",{className:gn("px-2 py-2 text-xs text-muted-foreground",Fe?"opacity-70":""),children:"Loading branch tree..."}):null]})]},ge.path)};return l.jsxs("aside",{ref:W,"aria-label":"Dense branch sidebar",className:gn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",M),style:q,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:gn("px-2 pb-2",G?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:Z,className:gn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",G?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:gt.map(ge=>rt(ge,{hideLive:Ie===ge.path}))})]}),Ie&&et?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${et.x}px, ${et.y}px, 0)`,width:`${et.width}px`},children:rt((Be=t.find(ge=>ge.path===Ie))!=null?Be:it.find(ge=>ge.path===Ie),{ghostMode:!0})}):null]})}const A3="git-visualizer",vc="git-visualizer:projects",_m="git-visualizer:active-project",nx="git-visualizer:map-orientation",cd=12,sx=1400,D3=180,ox="git-visualizer:sidebar-width",ix="git-visualizer:sidebar-collapsed",ax="git-visualizer:grid-clumps",rx=360,lx=180,cx=360;function Ni(t){return t==="/"?t:t.replace(/\/+$/,"")}function N3(...t){return t.filter(Boolean).join(" ")}function Rd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function R3(t){return Rd(t)===A3}function ux(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function B3(){var ts,Qs,Wt,jn,bs;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,w]=_.useState([]),[S,j]=_.useState([]),[k,T]=_.useState([]),[U,R]=_.useState({}),[M,q]=_.useState("main"),[G,W]=_.useState(null),[Z,he]=_.useState([]),[pe,be]=_.useState(!1),[Ne,Ze]=_.useState(""),[re,ie]=_.useState(0),[L,ae]=_.useState(1),[F,me]=_.useState({}),[Ee,$]=_.useState({}),[le,ne]=_.useState(null),[Se,De]=_.useState(null),[_e,Le]=_.useState(null),[ot,Ie]=_.useState(!1),[kt,Ot]=_.useState(!1),[yt,et]=_.useState(null),[lt,Pt]=_.useState(null),[an,tn]=_.useState(!1),[J,Oe]=_.useState(null),[mt,je]=_.useState(null),[Ke,it]=_.useState(!1),[gt,xt]=_.useState(!1),[Et,Bt]=_.useState(!1),[ct,Y]=_.useState(!1),[te,ve]=_.useState({}),[Ae,rt]=_.useState({}),[qe,Be]=_.useState({}),[ge,tt]=_.useState({}),[Fe,Je]=_.useState({}),[Re,nt]=_.useState([]),[St,Ct]=_.useState([]),[st,Lt]=_.useState(!1),[jt,_t]=_.useState(!1),[dn,pt]=_.useState(!1),[Ht,nn]=_.useState(!1),zt=jt||dn||st||Et||ct||gt||pe||Ht,[vt,qt]=_.useState(!1),[rn,fn]=_.useState("horizontal"),[Nt,yn]=_.useState(null),[It,xn]=_.useState(null),[at,Kn]=_.useState(null),[Ls,No]=_.useState(!1),[So,Co]=_.useState(!1),[mo,Qt]=_.useState(rx),[Rn,Es]=_.useState(!1),Qn=_.useRef(null),Cn=_.useRef(0),no=_.useRef(0),Ts=_.useRef({}),As=_.useRef(null),mn=_.useRef({}),ws=_.useRef({}),Ro=_.useRef(!1),fs=_.useRef(null),ko=_.useRef(rx),so=_.useRef(null),Jn=_.useRef(null),Fs=R3(t)||!0,hn=_.useRef(!1),Xs=_.useRef(!1),vi=_.useRef(new Set),Ss=_.useRef([]),po=_.useRef([]),Ds=_.useRef(null),hs=_.useRef({}),es=t!=null?t:"__no-repo__",oo=(N,z)=>{try{const H={opened:Object.fromEntries(Object.entries(N).map(([ee,fe])=>[ee,Array.from(fe)])),closed:Object.fromEntries(Object.entries(z).map(([ee,fe])=>[ee,Array.from(fe)]))};window.localStorage.setItem(ax,JSON.stringify(H))}catch{}};_.useEffect(()=>{var N,z;try{const H=window.localStorage.getItem(ax);if(!H)return;const ee=JSON.parse(H);if(!ee||typeof ee!="object")return;const fe={},He={},Ge=ee;for(const[wt,sn]of Object.entries((N=Ge.opened)!=null?N:{}))Array.isArray(sn)&&(fe[wt]=new Set(sn.filter(ks=>typeof ks=="string")));for(const[wt,sn]of Object.entries((z=Ge.closed)!=null?z:{}))Array.isArray(sn)&&(He[wt]=new Set(sn.filter(ks=>typeof ks=="string")));me(fe),$(He)}catch{}},[]),_.useEffect(()=>{oo(F,Ee)},[Ee,F]);const In=_.useMemo(()=>{var N;return(N=F[es])!=null?N:new Set},[es,F]),Cs=_.useMemo(()=>{var N;return(N=Ee[es])!=null?N:new Set},[es,Ee]),ms=_.useCallback(N=>{me(z=>{var He;const H=(He=z[es])!=null?He:new Set,ee=typeof N=="function"?N(H):N,fe={...z,[es]:new Set(ee)};return oo(fe,Ee),fe})},[es,Ee]),ps=_.useCallback(N=>{$(z=>{var He;const H=(He=z[es])!=null?He:new Set,ee=typeof N=="function"?N(H):N,fe={...z,[es]:new Set(ee)};return oo(F,fe),fe})},[es,F]),Li=_.useMemo(()=>c.map(N=>{var ee,fe,He,Ge,wt,sn,ks,D,B,I,V,E,P,oe,K;const z=(()=>{if(!t)return!1;const ue=Ni(N.path).toLowerCase(),ke=Ni(t).toLowerCase();return ue===ke})(),H=(ee=d[N.path])!=null?ee:{};return{...N,...H,branches:(fe=H.branches)!=null?fe:[],mergeNodes:(He=H.mergeNodes)!=null?He:[],directCommits:(Ge=H.directCommits)!=null?Ge:[],unpushedDirectCommits:(wt=H.unpushedDirectCommits)!=null?wt:[],unpushedCommitShasByBranch:(sn=H.unpushedCommitShasByBranch)!=null?sn:{},checkedOutRef:z?G:(ks=H.checkedOutRef)!=null?ks:null,worktrees:(D=H.worktrees)!=null?D:[],stashes:(B=H.stashes)!=null?B:[],branchCommitPreviews:(I=H.branchCommitPreviews)!=null?I:{},laneByBranch:(V=H.laneByBranch)!=null?V:{},branchUniqueAheadCounts:(E=H.branchUniqueAheadCounts)!=null?E:{},defaultBranch:(oe=(P=H.defaultBranch)!=null?P:N.branchName)!=null?oe:"main",treeLoaded:(K=H.loaded)!=null?K:!1}}),[c,d,t,G]),Ko=_.useMemo(()=>({githubAuthStatus:lt,githubAuthLoading:an,onGitHubAuthSetup:Un,gridSearchQuery:Ne,setGridSearchQuery:Ze,gridSearchResultCount:le,gridSearchResultIndex:Se,setGridSearchJumpDirection:ae,setGridSearchJumpToken:ie,mapGridOrientation:rn,setMapGridOrientation:fn,setIsGridDebugOpen:Co,githubAuthMessage:J,commitSwitchFeedback:mt,isCommitSwitchFeedbackVisible:Ke}),[mt,an,J,lt,Ne,le,Se,Un,Ke,rn,Ze,ae,ie,Co,fn]);function Ki(N,z){const H=ux(z);return Ts.current[N]===H?!1:(Ts.current={...Ts.current,[N]:H},h(fe=>fe[N]===z?fe:{...fe,[N]:z}),!0)}function on(N){var z;return[N.repoPath,N.defaultBranch,N.headSha,(z=N.upstreamSha)!=null?z:"",N.hasUncommittedChanges?"1":"0",N.branchCount,N.worktreeCount,N.stashCount].join("|")}function wi(N){var z;return[N.repoPath,N.headSha,(z=N.upstreamSha)!=null?z:"",N.hasUncommittedChanges?"1":"0"].join("|")}function Os(N,z){var H,ee,fe,He,Ge,wt;return{repoPath:N,headSha:(ee=(H=z.checkedOutRef)==null?void 0:H.headSha)!=null?ee:"",upstreamSha:(He=(fe=z.checkedOutRef)==null?void 0:fe.parentSha)!=null?He:null,hasUncommittedChanges:(wt=(Ge=z.checkedOutRef)==null?void 0:Ge.hasUncommittedChanges)!=null?wt:!1}}function Qi(N,z,H){var ee,fe,He,Ge,wt,sn;return{repoPath:N,defaultBranch:z,headSha:(fe=(ee=H.checkedOutRef)==null?void 0:ee.headSha)!=null?fe:"",upstreamSha:(Ge=(He=H.checkedOutRef)==null?void 0:He.parentSha)!=null?Ge:null,hasUncommittedChanges:(sn=(wt=H.checkedOutRef)==null?void 0:wt.hasUncommittedChanges)!=null?sn:!1,branchCount:H.branches.length,worktreeCount:H.worktrees.length,stashCount:H.stashes.length}}_.useEffect(()=>{try{const N=localStorage.getItem(vc);if(!N)return;const z=JSON.parse(N);if(!Array.isArray(z))return;const H=z.filter(ee=>typeof ee=="object"&&ee!==null&&typeof ee.path=="string"&&typeof ee.name=="string"&&typeof ee.lastOpenedAt=="number");u(H.slice(0,cd))}catch{u([])}},[]),_.useEffect(()=>{try{const N=window.localStorage.getItem(nx);(N==="vertical"||N==="horizontal")&&fn(N)}catch{}},[]),_.useEffect(()=>{var H;if(Xs.current||t||c.length===0)return;const N=(()=>{try{return window.localStorage.getItem(_m)}catch{return null}})(),z=N?c.find(ee=>Ni(ee.path).toLowerCase()===Ni(N).toLowerCase()):null;Xs.current=!0,Hn((H=z==null?void 0:z.path)!=null?H:c[0].path)},[c,t]),_.useEffect(()=>{if(t)try{window.localStorage.setItem(_m,t)}catch{}},[t]),_.useEffect(()=>{try{window.localStorage.setItem(nx,rn)}catch{}},[rn]);const Zi=_.useMemo(()=>b.reduce((N,z)=>(N[z.targetCommitSha]=z.targetBranch,N),{}),[b]);_.useEffect(()=>{t&&(Ro.current||h(N=>{var z,H;return{...N,[t]:{path:t,name:i||Rd(t),branches:g,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((ee,fe)=>(ee[fe.targetCommitSha]=fe.targetBranch,ee),{}),unpushedCommitShasByBranch:U,checkedOutRef:G,worktrees:Z,stashes:Re,branchCommitPreviews:Ae,branchParentByName:qe,laneByBranch:ge,branchUniqueAheadCounts:Fe,defaultBranch:M,loaded:!0,cacheSchemaVersion:(H=(z=N[t])==null?void 0:z.cacheSchemaVersion)!=null?H:1,updatedAtMs:Date.now()}}}))},[t,i,g,b,S,k,Zi,U,G,Z,Re,Ae,qe,ge,Fe,M]);async function Yo(N,z=!1){var ee;const H=Ni(N);if(H&&!vi.current.has(H)&&!(!z&&((ee=d[H])!=null&&ee.loaded))){vi.current.add(H),H===t&&y(!0);try{const fe=await we("get_repo_visual_snapshot",{repoPath:H,forceRefresh:z});Ki(H,fe)}finally{vi.current.delete(H),H===t&&vi.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(N=>{Yo(N.path),we("watch_repo",{repoPath:N.path}).catch(console.error)})},[c]),_.useEffect(()=>{let N=!1,z=null;return Nc("git-activity",H=>{if(N)return;const ee=Ni(H.payload.repoPath);!ee||ee===t||Yo(ee,!0)}).then(H=>{N?H():z=H}).catch(console.error),()=>{N=!0,z&&z()}},[t]);function _s(N){u(z=>{const H=Ni(N.path);if(!H)return z;const ee={...N,path:H},He=(z.some(Ge=>Ge.path===H)?z.map(Ge=>Ge.path===H?ee:Ge):[...z,ee]).slice(-cd);try{localStorage.setItem(vc,JSON.stringify(He))}catch{}return He})}function Oi(N){u(z=>{const H=new Map(z.map(fe=>[fe.path,fe])),ee=[];for(const fe of N){const He=H.get(fe);He&&(ee.push(He),H.delete(fe))}for(const fe of z)H.has(fe.path)&&ee.push(fe);try{localStorage.setItem(vc,JSON.stringify(ee.slice(0,cd)))}catch{}return ee.slice(0,cd)})}async function zs(N){const z=Ni(N);if(z){et(null);try{const[H,ee]=await Promise.all([we("get_repo_info",{repoPath:z}),we("get_default_branch",{repoPath:z}).catch(()=>"main")]);_s({path:z,name:H.name,lastOpenedAt:Date.now(),branchName:ee}),await Yo(z,!0)}catch(H){et(H instanceof Error?H.message:String(H))}}}function Pn(N,z){u(H=>{const ee=H.map(fe=>fe.path===N?{...fe,branchName:z}:fe);try{localStorage.setItem(vc,JSON.stringify(ee))}catch{}return ee})}function jo(N){var H,ee;const z=Ni(N);if(z){u(fe=>{const He=fe.filter(Ge=>Ge.path!==z);try{localStorage.setItem(vc,JSON.stringify(He))}catch{}return He});try{t&&Ni(t).toLowerCase()===z.toLowerCase()&&window.localStorage.removeItem(_m)}catch{}if(h(fe=>{if(!(z in fe))return fe;const He={...fe};return delete He[z],He}),t===z){const fe=(ee=(H=c.find(He=>He.path!==z))==null?void 0:H.path)!=null?ee:null;fe?Hn(fe):(n(null),a(""),x([]),w([]),j([]),T([]),R({}),W(null),he([]),nt([]),rt({}),Be({}),tt({}),Je({}))}}}async function ri(N){const z=Ni(N);if(z)try{await we("reveal_in_finder",{path:z})}catch(H){et(H instanceof Error?H.message:String(H))}}const $s=()=>{(async()=>{var N,z;try{const H=await ew({directory:!0,multiple:!1,defaultPath:(z=(N=c[0])==null?void 0:N.path)!=null?z:void 0});typeof H=="string"&&H&&await zs(H)}catch(H){et(H instanceof Error?H.message:String(H))}})()};async function Bo(N,z){const ee=[];let fe=0;for(;;){const He=await we("get_merge_nodes",{repoPath:N,branch:z,page:fe,perPage:100});if(ee.push(...He.nodes),!He.hasMore||He.nodes.length===0)break;fe+=1}return ee}async function bn(N,z,H){const ee=Array.from(new Set([H,...z.map(Ge=>Ge.name)].filter(Ge=>!!Ge)));if(ee.length===0)return[];const fe=await Promise.all(ee.map(Ge=>Bo(N,Ge).catch(()=>[]))),He=new Map;for(const Ge of fe)for(const wt of Ge){const sn=`${wt.targetCommitSha}:${wt.targetBranch}`;He.has(sn)||He.set(sn,wt)}return Array.from(He.values())}const Gs=N=>N.map(z=>`${z.name}|${z.headSha}|${z.commitsAhead}|${z.commitsBehind}|${z.unpushedCommits}|${z.remoteSyncStatus}`).join("||"),Is=N=>N.map(z=>z.fullSha).join("|"),Mo=N=>{var z,H;return N?`${(z=N.branchName)!=null?z:""}|${N.headSha}|${(H=N.parentSha)!=null?H:""}|${N.hasUncommittedChanges?1:0}`:"__none__"},Ns=N=>N.map(z=>z.fullSha).join("|"),li=N=>N.map(z=>{var H,ee;return`${z.path}|${(H=z.branchName)!=null?H:""}|${(ee=z.headSha)!=null?ee:""}|${z.isCurrent?1:0}`}).join("||"),Wo=N=>N.map(z=>`${z.index}|${z.baseSha}|${z.message}`).join("||"),Si=N=>Object.entries(N).sort(([z],[H])=>z.localeCompare(H)).map(([z,H])=>`${z}:${H.join(",")}`).join("||");async function io(N,z,H){const ee={graphChanged:!1,remoteTipChanged:!1,unpushedChanged:!1,stashChanged:!1,dirtyChanged:!1,worktreeChanged:!1},[fe,He,Ge,wt,sn]=await Promise.all([we("get_branches",{repoPath:N}).catch(()=>Ss.current),we("get_all_repo_commits",{repoPath:N}).catch(()=>po.current),we("get_unpushed_direct_commits",{repoPath:N,branch:z}).catch(()=>k),we("list_worktrees",{repoPath:N}).catch(()=>Z),we("list_stashes",{repoPath:N}).catch(()=>Re)]),ks=Ss.current,D=po.current,B=Ds.current,I=Gs(fe)!==Gs(ks)||Is(He)!==Is(D);ee.graphChanged=I;const V=Ns(Ge)!==Ns(k);ee.unpushedChanged=V;const E=li(wt)!==li(Z);ee.worktreeChanged=E;const P=Wo(sn)!==Wo(Re);ee.stashChanged=P;const oe=!!(H!=null&&H.forceDirtyCheck)||!(B!=null&&B.hasUncommittedChanges)||!!(H!=null&&H.expectPossibleCleanTransition)||I||P;let K=B;oe&&(K=await we("get_checked_out_ref",{repoPath:N}).catch(()=>B)),ee.dirtyChanged=Mo(K)!==Mo(B);const ue=await we("get_remote_branch_head_sha",{repoPath:N,branch:z}).catch(()=>Nt),[ke,Ye]=await Promise.all([ue?we("get_commit_metadata",{repoPath:N,sha:ue}).catch(()=>null):Promise.resolve(null),ue&&(K!=null&&K.headSha)?we("get_merge_base",{repoPath:N,leftSha:ue,rightSha:K.headSha}).catch(()=>null):Promise.resolve(null)]),ft=ue!==Nt;ee.remoteTipChanged=ft;const bt=I||V||ee.dirtyChanged,ht=bt?await Promise.all([z,...fe.map(Zt=>Zt.name)].map(async Zt=>{const Ft=await we("get_branch_unpushed_commit_shas",{repoPath:N,branch:Zt}).catch(()=>[]);return[Zt,Ft]})):Object.entries(U),ut=Object.fromEntries(ht),en=I?await bn(N,fe,z).catch(()=>b):b;return _.startTransition(()=>{if(I&&(x(fe),j(He),w(en)),V&&T(Ge),bt){const Zt=Si(ut),Ft=Si(U);Zt!==Ft&&R(ut)}E&&he(wt),P&&nt(sn),ee.dirtyChanged&&(W(K),K!=null&&K.branchName&&Pn(N,K.branchName)),ft&&(yn(ue!=null?ue:null),xn(ke&&ke.subject.trim().length>0?ke:null),Kn(Ye),No(!0))}),ee}async function _o(N,z,H){var oe,K,ue,ke;const ee=z!=null?z:M,fe=(oe=H==null?void 0:H.includeMergeNodes)!=null?oe:!0,He=(K=H==null?void 0:H.includeUnpushedShaMap)!=null?K:!0,Ge=(ue=H==null?void 0:H.includeWorktrees)!=null?ue:!0,wt=(ke=H==null?void 0:H.includeStashes)!=null?ke:!0,[sn,ks,D,B,I,V]=await Promise.all([we("get_branches",{repoPath:N}),we("get_all_repo_commits",{repoPath:N}),we("get_unpushed_direct_commits",{repoPath:N,branch:ee}).catch(()=>[]),we("get_checked_out_ref",{repoPath:N}).catch(()=>null),Ge?we("list_worktrees",{repoPath:N}).catch(()=>[]):Promise.resolve(Z),wt?we("list_stashes",{repoPath:N}).catch(()=>[]):Promise.resolve(Re)]),E=fe?await bn(N,sn,ee):b,P=He?await Promise.all([ee,...sn.map(Ye=>Ye.name)].map(async Ye=>{const ft=await we("get_branch_unpushed_commit_shas",{repoPath:N,branch:Ye}).catch(()=>[]);return[Ye,ft]})):Object.entries(U);_.startTransition(()=>{x(sn),w(E),j(ks),T(D),R(Object.fromEntries(P)),W(B),he(I),nt(V)})}async function xs(N,z){await _o(N,z,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Vn(N,z){const H=M,[ee,fe]=await Promise.all([we("get_branches",{repoPath:N}),we("get_checked_out_ref",{repoPath:N}).catch(()=>null)]),He=await Promise.all([H,...ee.map(Ge=>Ge.name)].map(async Ge=>{const wt=await we("get_branch_unpushed_commit_shas",{repoPath:N,branch:Ge}).catch(()=>[]);return[Ge,wt]}));_.startTransition(()=>{x(ee),R(Object.fromEntries(He)),W(fe)})}async function is(){await new Promise(N=>{window.requestAnimationFrame(()=>N())})}async function Eo(N){je(null),Ot(!0),Ro.current=!0;try{const[z,H]=await Promise.all([we("get_repo_info",{repoPath:N}),we("get_default_branch",{repoPath:N})]);a(z.name),q(H),n(N),await _o(N,H),Ps(N),je({kind:"success",message:`Now targeting worktree at ${N}`})}catch(z){const H=z instanceof Error?z.message:String(z);je({kind:"error",message:H}),console.error("Failed to switch worktree:",H)}finally{Ot(!1),Ro.current=!1}}async function go(N,z){if(!(!t||pe)){be(!0),je(null);try{await we("remove_worktree",{repoPath:t,worktreePath:N,force:z}),await xs(t),je({kind:"success",message:`Removed worktree at ${N}`})}catch(H){const ee=H instanceof Error?H.message:String(H);je({kind:"error",message:ee}),console.error("Failed to remove worktree:",ee)}finally{be(!1)}}}function ao(N,z){var ee,fe;const H=ux(z);return As.current===H?!1:(As.current=H,a(z.name||Rd(N)),q(z.defaultBranch||"main"),x(z.branches),w(z.mergeNodes),j(z.directCommits),T(z.unpushedDirectCommits),R(z.unpushedCommitShasByBranch),W(z.checkedOutRef),he(z.worktrees),nt(z.stashes),rt(z.branchCommitPreviews),Be((ee=z.branchParentByName)!=null?ee:{}),tt((fe=z.laneByBranch)!=null?fe:{}),Je(z.branchUniqueAheadCounts),n(N),!0)}async function Hn(N){var fe;const z=++Cn.current,H=Ni(N);if(!H)return;Ro.current=!0;const ee=d[H];if(ee!=null&&ee.loaded)try{const He=await we("get_repo_quick_state",{repoPath:H});if(z!==Cn.current)return;const Ge=wi(He);if(((fe=ws.current[H])!=null?fe:ee?wi(Os(H,ee)):null)===Ge){et(null),ws.current={...ws.current,[H]:Ge},ao(H,ee),_s({path:H,name:ee.name||Rd(H),lastOpenedAt:Date.now(),branchName:ee.defaultBranch}),Ot(!1),Ie(!1),Ps(H),Ro.current=!1;return}ws.current={...ws.current,[H]:Ge}}catch{}if(Ie(!0),Ot(!0),et(null),await new Promise(He=>setTimeout(He,15)),z===Cn.current)try{const[He,Ge]=await Promise.all([we("get_repo_info",{repoPath:H}),we("get_default_branch",{repoPath:H})]);if(z!==Cn.current)return;a(He.name),q(Ge);const wt=await we("get_repo_visual_snapshot",{repoPath:H,forceRefresh:!0});if(z!==Cn.current)return;Ki(H,wt),mn.current={...mn.current,[H]:on(Qi(H,Ge,wt))},ws.current={...ws.current,[H]:wi(Os(H,wt))},ao(H,wt),_s({path:H,name:He.name,lastOpenedAt:Date.now(),branchName:Ge}),Ot(!1),Ie(!1),Ps(H)}catch(He){if(z!==Cn.current)return;console.error("Failed to load repo:",He),et(He instanceof Error?He.message:String(He)),n(null),Ie(!1),Ot(!1)}finally{Ro.current=!1}}async function Ps(N){const z=++no.current;try{if(z!==no.current)return;Oe(null);const H=await we("get_github_info",{repoPath:N}),ee=await we("get_github_auth_status");if(z!==no.current||(Pt(ee),!ee.ghAvailable||!ee.authenticated))return;const fe=await we("get_open_prs",{owner:H.owner,repo:H.repo});if(z!==no.current)return;Ct(fe)}catch(H){if(z!==no.current)return;console.log("GitHub data not available:",H),Oe(H instanceof Error?H.message:String(H))}}_.useEffect(()=>{let N=null,z=!1;const H=(()=>{try{return mp().label}catch{return null}})(),ee=async He=>{var wt;const Ge=(wt=He==null?void 0:He.path)==null?void 0:wt.trim();!Ge||z||t!==Ge&&await Hn(Ge)};return(async()=>{H==="main"&&(N=await Nc("gitviz://open-repo",async Ge=>{await ee(Ge.payload)}));const He=await we("take_pending_open_repo");await ee(He)})(),()=>{z=!0,N&&N()}},[t]),_.useEffect(()=>{Ss.current=g},[g]),_.useEffect(()=>{po.current=S},[S]),_.useEffect(()=>{Ds.current=G},[G]),_.useEffect(()=>{hs.current=qe},[qe]),_.useEffect(()=>{hn.current=vt},[vt]),_.useEffect(()=>{if(!t||!M)return;we("watch_repo",{repoPath:t}).catch(console.error);let N=!1,z=!1,H=!1,ee=!1,fe=null,He=null,Ge=!1,wt=Nt;const sn=async(B=!1)=>{if(!N){if(z){H=!0;return}if(hn.current){H=!0;return}z=!0;try{await io(t,M,{forceDirtyCheck:B,expectPossibleCleanTransition:Ge}),Ge=!1}catch(I){console.warn("Project status tick failed:",I)}finally{z=!1,H&&!N&&(H=!1,window.setTimeout(()=>{sn(!1)},0))}}},ks=async()=>{var B;if(!(N||ee||z||hn.current)){ee=!0;try{const I=!((B=Ds.current)!=null&&B.hasUncommittedChanges)||Ge,[V,E]=await Promise.all([I?we("get_checked_out_ref",{repoPath:t}).catch(()=>Ds.current):Promise.resolve(Ds.current),we("get_remote_branch_head_sha",{repoPath:t,branch:M}).catch(()=>wt)]),P=Mo(V)!==Mo(Ds.current),oe=E!==wt;oe&&(wt=E),(P||oe||Ge)&&sn(P||Ge)}finally{ee=!1}}},D=()=>{if(N)return;fe!=null&&window.clearTimeout(fe);const I=document.visibilityState!=="visible"?6e4:15e3;fe=window.setTimeout(()=>{if(hn.current){D();return}typeof window.requestIdleCallback=="function"?window.requestIdleCallback(()=>{if(hn.current){D();return}ks(),D()},{timeout:2e3}):(ks(),D())},I)};return Nc("git-activity",B=>{Ni(B.payload.repoPath)===t&&(B.payload.kind!=="local"&&(Ge=!0),sn(B.payload.kind!=="local"))}).then(B=>{N?B():He=B}).catch(console.error),sn(!0),D(),()=>{N=!0,fe!=null&&window.clearTimeout(fe),He&&He()}},[t,M,Fs]);async function Un(){if(t){tn(!0),Oe(null);try{await we("authenticate_github");const N=await we("get_github_auth_status");Pt(N),N.authenticated?await Ps(t):N.message&&Oe(N.message)}catch(N){Oe(N instanceof Error?N.message:String(N))}finally{tn(!1)}}}_.useEffect(()=>{ve({}),Jn.current=null,tn(!1),Pt(null),Oe(null),Ct([]),je(null)},[t]),_.useEffect(()=>{var sn,ks,D,B;if(!t||!M){ve({}),rt({}),Be({}),tt({}),Je({}),Jn.current=null;return}const N=g.map(I=>{var V;return`${I.name}:${I.headSha}:${(V=I.parentBranch)!=null?V:""}:${I.commitsAhead}`}).join("|"),z=b.map(I=>{var V,E;return`${I.fullSha}:${(E=(V=I.parentShas)==null?void 0:V[1])!=null?E:""}`}).join("|"),H=`${t}|${M}|${N}|${z}`;if(Jn.current===H)return;Jn.current=H;const ee={},fe={};for(const I of g){if(I.name===M)continue;const V=S.filter(E=>E.branch===I.name).map(E=>{var P;return{fullSha:E.fullSha,sha:E.sha,parentSha:(P=E.parentSha)!=null?P:null,message:E.message,author:E.author,date:E.date,kind:"commit"}});ee[I.name]=V,fe[I.name]=V.length}const He=new Map;for(const I of S)He.set(I.fullSha,I.branch);const Ge=I=>{if(!I)return null;const V=He.get(I);if(V)return V;for(const[E,P]of He.entries())if(E.startsWith(I)||I.startsWith(E))return P;return null},wt={[M]:null};for(const I of g){if(I.name===M){wt[I.name]=null;continue}const V=S.filter(K=>K.branch===I.name),E=new Set(V.map(K=>K.fullSha)),P=(ks=(sn=V.filter(K=>{var ke;const ue=(ke=K.parentSha)!=null?ke:null;return!ue||!E.has(ue)}).sort((K,ue)=>{const ke=new Date(K.date).getTime()-new Date(ue.date).getTime();return ke!==0?ke:K.fullSha.localeCompare(ue.fullSha)})[0])==null?void 0:sn.parentSha)!=null?ks:null,oe=Ge(P);wt[I.name]=(B=(D=oe!=null?oe:hs.current[I.name])!=null?D:I.parentBranch)!=null?B:null}ve({}),rt(ee),Be(wt),tt(I=>{const V={};for(const E of g){const P=I[E.name];P!=null&&Number.isFinite(P)&&(V[E.name]=P)}return V}),Je(fe)},[t,M,g,b,S]),_.useEffect(()=>{if(!mt){it(!1);return}it(!0);const N=window.setTimeout(()=>{it(!1)},sx),z=window.setTimeout(()=>{je(null)},sx+D3);return()=>{window.clearTimeout(N),window.clearTimeout(z)}},[mt]),_.useEffect(()=>{if(!t||g.length===0)return;const N=ee=>new Promise(fe=>setTimeout(fe,ee));async function z(){const fe=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${fe}`),await N(800),await we("screenshot",{path:`${fe}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${fe}`)}const H=ee=>{if((ee.metaKey||ee.ctrlKey)&&!ee.shiftKey&&!ee.altKey&&ee.key.toLowerCase()==="b"){ee.preventDefault(),Es(fe=>!fe);return}(ee.metaKey||ee.ctrlKey)&&ee.shiftKey&&ee.key==="S"&&(ee.preventDefault(),z())};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[t,i,g]);async function qs(N){if(!t)return;je(null);const z=/^STASH:(\d+)$/.exec(N.commitSha);if(z){try{const H=parseInt(z[1],10),ee=await we("apply_stash_restore",{repoPath:t,stashIndex:H});W(ee),await xs(t);const fe=`Stash ${H+1}`,He=ee.branchName?` on branch ${ee.branchName}`:" at the stash base (detached HEAD)";je({kind:"success",message:`Restored ${fe}${He}; stash applied and dropped (uncommitted changes).`})}catch(H){const ee=H instanceof Error?H.message:String(H);je({kind:"error",message:ee}),console.error("Failed to apply stash:",ee)}return}if(N.branchName){const H=(fe,He)=>{const Ge=fe.replace(/\\/g,"/").replace(/\/+$/,""),wt=He.replace(/\\/g,"/").replace(/\/+$/,"");return Ge===wt||Ge.toLowerCase()===wt.toLowerCase()},ee=Z.find(fe=>fe.pathExists===!1||fe.isCurrent||t&&H(fe.path,t)?!1:fe.branchName===N.branchName);if(ee){await Eo(ee.path);return}}try{let H="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),H="Stashed local changes (including untracked), then ",await xs(t));const fe=N.branchName?await we("checkout_branch",{repoPath:t,branchName:N.branchName}):await we("checkout_ref",{repoPath:t,refName:N.commitSha}),He=await we("get_checked_out_ref",{repoPath:t}).catch(()=>fe);W(He),await xs(t);const Ge=He.branchName?He.branchName:`${He.headSha.slice(0,7)} (detached)`;je({kind:"success",message:`${H}Checked out ${Ge}`})}catch(H){const ee=H instanceof Error?H.message:String(H);je({kind:"error",message:ee}),console.error("Failed to checkout commit:",ee)}}async function Qo(){if(!(!t||st)){je(null),Lt(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){je({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await is(),await xs(t),je({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(N){const z=N instanceof Error?N.message:String(N);je({kind:"error",message:z}),console.error("Failed to stash:",z)}finally{Lt(!1)}}}async function Zo(N){if(!t||jt)return!1;const z=N.trim();if(!z)return je({kind:"error",message:"Enter a commit message."}),!1;je(null),_t(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return je({kind:"error",message:"No local changes to commit."}),!1;const ee=await we("commit_working_tree",{repoPath:t,message:z});return W(ee),await is(),await xs(t),je({kind:"success",message:"Committed local changes."}),!0}catch(H){const ee=H instanceof Error?H.message:String(H);return je({kind:"error",message:ee}),console.error("Failed to commit:",ee),!1}finally{_t(!1)}}async function zi(){if(!t||dn)return!1;je(null),pt(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return je({kind:"error",message:"No local changes to stage."}),!1;const z=await we("stage_working_tree",{repoPath:t});return W(z),await is(),await xs(t),je({kind:"success",message:"Staged all changes."}),!0}catch(N){const z=N instanceof Error?N.message:String(N);return je({kind:"error",message:z}),console.error("Failed to stage:",z),!1}finally{pt(!1)}}async function ci(N,z){if(!(!t||Ht)){nn(!0),je(null);try{const H=/^STASH:(\d+)$/.exec(N);let ee;if(H){const fe=parseInt(H[1],10);ee=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:fe,branchName:z})}else ee=await we("create_branch_from_uncommitted",{repoPath:t,branchName:z});W(ee),await xs(t),je({kind:"success",message:`Moved to new branch "${z}"`})}catch(H){const ee=H instanceof Error?H.message:String(H);je({kind:"error",message:ee}),console.error("Failed to create branch from node:",ee)}finally{nn(!1)}}}async function ui(N){if(!(!t||Ht)){nn(!0),je(null);try{const z=await we("create_root_branch",{repoPath:t,branchName:N});W(z),await xs(t),je({kind:"success",message:`Created new root branch "${N}"`})}catch(z){const H=z instanceof Error?z.message:String(z);je({kind:"error",message:H}),console.error("Failed to create root branch:",H)}finally{nn(!1)}}}async function Lo(N,z){if(!t)return;const H=Array.from(new Set(N.filter(ee=>!!ee&&ee!==z)));if(H.length!==0){je(null),xt(!0);try{let ee=null;for(const fe of H)ee=await we("merge_ref_into_branch",{repoPath:t,sourceRef:fe,targetBranch:z});await xs(t),ee&&W(ee),je({kind:"success",message:H.length===1?`Merged ${H[0].slice(0,7)} into ${z}`:`Merged ${H.length} commits into ${z}`})}catch(ee){const fe=ee instanceof Error?ee.message:String(ee);je({kind:"error",message:fe}),console.error("Failed to merge refs into branch:",fe)}finally{xt(!1)}}}async function la(){if(!(!t||Et)){je(null),Bt(!0);try{let N=[];try{N=await we("push_all_unpushed_branches",{repoPath:t})}catch(z){const H=z instanceof Error?z.message:String(z);if(!/non-fast-forward|fetch first|rejected/i.test(H))throw z;const fe=G==null?void 0:G.branchName;if(!fe)throw z;const He=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await we("pull_branch_with_strategy",{repoPath:t,branchName:fe,rebase:He}),N=await we("push_all_unpushed_branches",{repoPath:t})}await is(),await Vn(t),je({kind:"success",message:N.length>0?N.length===1?`Pushed ${N[0].branchName}`:`Pushed ${N.length} branches`:"Everything local is already pushed."})}catch(N){const z=N instanceof Error?N.message:String(N);je({kind:"error",message:z}),console.error("Failed to push all branches:",z)}finally{Bt(!1)}}}async function Jo(){if(!(!t||Et)){je(null),Bt(!0);try{const N=await we("push_current_branch",{repoPath:t});await is(),await Vn(t),je({kind:"success",message:`Pushed ${N.branchName}`})}catch(N){const z=N instanceof Error?N.message:String(N);if(/non-fast-forward|fetch first|rejected/i.test(z)){const ee=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const fe=G==null?void 0:G.branchName;if(!fe)throw new Error("Cannot resolve current branch for pull.");await we("pull_branch_with_strategy",{repoPath:t,branchName:fe,rebase:ee});const He=await we("push_current_branch",{repoPath:t});await is(),await Vn(t),je({kind:"success",message:`Pulled (${ee?"rebase":"merge"}) and pushed ${He.branchName}`});return}catch(fe){const He=fe instanceof Error?fe.message:String(fe);je({kind:"error",message:He}),console.error("Failed to resolve non-fast-forward:",He);return}}je({kind:"error",message:z}),console.error("Failed to push current branch:",z)}finally{Bt(!1)}}}async function To(N){var H;if(!t||Et)return;const z=Array.from(new Map(N.filter(ee=>ee.branchName&&ee.targetSha).map(ee=>[ee.branchName,ee])).values());if(z.length!==0){je(null),Bt(!0);try{for(const ee of z)try{await we("push_branch",{repoPath:t,branchName:ee.branchName,targetSha:ee.targetSha})}catch(fe){const He=fe instanceof Error?fe.message:String(fe);if(!/non-fast-forward|fetch first|rejected/i.test(He))throw fe;const wt=window.confirm(`Push rejected for ${ee.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await we("pull_branch_with_strategy",{repoPath:t,branchName:ee.branchName,rebase:wt}),await we("push_branch",{repoPath:t,branchName:ee.branchName,targetSha:ee.targetSha})}await xs(t),je({kind:"success",message:z.length===1?`Pushed ${z[0].branchName} through ${(H=z[0].targetSha)==null?void 0:H.slice(0,7)}`:`Pushed ${z.length} selected commit ranges`})}catch(ee){const fe=ee instanceof Error?ee.message:String(ee);je({kind:"error",message:fe}),console.error("Failed to push selected commits:",fe)}finally{Bt(!1)}}}async function Oo(N){var He;if(!t||ct)return;const z=Array.from(new Set(N.branchNames.filter(Ge=>Ge&&Ge!==M))),H=!!N.discardUncommittedChanges,ee=(He=N.stashIndices)!=null?He:[],fe=Array.from(new Set(ee)).sort((Ge,wt)=>wt-Ge);if(!(z.length===0&&!H&&fe.length===0)){je(null),Y(!0);try{for(const sn of fe)await we("stash_drop",{repoPath:t,stashIndex:sn});const Ge=z.length>0||H?await we("delete_selected_elements",{repoPath:t,branchNames:z,discardUncommittedChanges:H}):{deletedBranches:[],discardedUncommittedChanges:!1};await xs(t);const wt=[];fe.length>0&&wt.push(fe.length===1?`removed stash ${fe[0]+1}`:`removed ${fe.length} stashes`),Ge.discardedUncommittedChanges&&wt.push("discarded local uncommitted changes"),Ge.deletedBranches.length>0&&wt.push(Ge.deletedBranches.length===1?`deleted ${Ge.deletedBranches[0]}`:`deleted ${Ge.deletedBranches.length} branches`),je({kind:"success",message:wt.length>0?wt.join(" and "):"Nothing to delete."})}catch(Ge){const wt=Ge instanceof Error?Ge.message:String(Ge);je({kind:"error",message:wt}),console.error("Failed to delete selected elements:",wt)}finally{Y(!1)}}}function Rt(N){N&&(Le(N),ie(z=>z+1))}function $i(N){N&&(Ze(N),ie(z=>z+1))}const{enrichedBranches:yo,enrichedBranchCommitPreviews:Fo,enrichedBranchUniqueAheadCounts:Xo,enrichedDirectCommits:Ks,enrichedUnpushedDirectCommits:zo,visualCheckedOutRef:vn}=_.useMemo(()=>{var ut,An,en,Zt,Ft,Bn,Ut,Xt,as,Ln,Hs,bo,Zn,ei,di,fi,Xn,hi,Ci,pr,Hr,Ur,Vr,zl,$l,Yr,mi;const N=K5(Re,g,S,Ae,Fe,M,(ut=G==null?void 0:G.hasUncommittedChanges)!=null?ut:!1);let z=N.branches,H=N.directCommits,ee=k,fe=N.branchCommitPreviews,He=N.branchUniqueAheadCounts,Ge=G;const wt=Nt?H.some(wn=>wn.fullSha===Nt||wn.sha===Nt.slice(0,7)):!0;if(Nt&&at&&!wt){const wn=(Bn=(Ft=(An=H.find(Ao=>Ao.fullSha===at||Ao.sha===at.slice(0,7)))==null?void 0:An.date)!=null?Ft:(Zt=(en=fe[M])==null?void 0:en.find(Ao=>Ao.fullSha===at||Ao.sha===at.slice(0,7)))==null?void 0:Zt.date)!=null?Bn:null,Mn=wn?new Date(new Date(wn).getTime()+1e3).toISOString():new Date().toISOString(),Zs=(Ln=at!=null?at:(Ut=z.find(Ao=>Ao.name===M))==null?void 0:Ut.headSha)!=null?Ln:(as=(Xt=H[0])==null?void 0:Xt.fullSha)!=null?as:null,ki={fullSha:Nt,sha:Nt.slice(0,7),parentSha:Zs,message:((Hs=It==null?void 0:It.subject)==null?void 0:Hs.trim())||`Remote commit on origin/${M}`,author:((bo=It==null?void 0:It.author)==null?void 0:bo.trim())||"Unknown",date:Mn,kind:"commit",isRemote:!0};H=[{fullSha:Nt,sha:Nt.slice(0,7),parentSha:Zs,parentShas:Zs?[Zs]:[],childShas:[],branch:M,message:ki.message,author:ki.author,date:Mn,kind:"commit",isRemote:!0},...H],fe={...fe,[M]:[ki,...(Zn=fe[M])!=null?Zn:[]]},z=z.map(Ao=>Ao.name===M?{...Ao,headSha:Nt,lastCommitDate:Mn}:Ao)}if(!!Nt&&!!at&&!wt&&(G==null?void 0:G.branchName)===M&&G.headSha!==Nt&&(G.hasUncommittedChanges||k.length>0)){const wn=`${M} (local)`,Mn=new Set(k.map(Rs=>Rs.fullSha));G!=null&&G.headSha&&Mn.add(G.headSha);const Zs=(Xn=(fi=(ei=k[0])==null?void 0:ei.date)!=null?fi:G!=null&&G.headSha?(di=H.find(Rs=>Rs.fullSha===G.headSha))==null?void 0:di.date:void 0)!=null?Xn:new Date().toISOString();z.some(Rs=>Rs.name===wn)||(z=[...z,{name:wn,commitsAhead:Math.max(1,Mn.size),commitsBehind:0,lastCommitDate:Zs,lastCommitAuthor:(hi=G==null?void 0:G.branchName)!=null?hi:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,Mn.size),headSha:(Hr=G==null?void 0:G.headSha)!=null?Hr:(pr=(Ci=k[0])==null?void 0:Ci.fullSha)!=null?pr:"WORKING_TREE",parentBranch:M}]),H=H.map(Rs=>Rs.branch===M&&Mn.has(Rs.fullSha)?{...Rs,branch:wn}:Rs),ee=ee.map(Rs=>Rs.branch===M&&Mn.has(Rs.fullSha)?{...Rs,branch:wn}:Rs);const ki=(Ur=fe[M])!=null?Ur:[],ya=ki.filter(Rs=>Rs.fullSha==="WORKING_TREE"||Mn.has(Rs.fullSha)),Ao=ki.filter(Rs=>!ya.includes(Rs));ya.length>0&&(fe={...fe,[M]:Ao,[wn]:[...ya,...(Vr=fe[wn])!=null?Vr:[]]}),He={...He,[wn]:Math.max(1,Mn.size)},(Ge==null?void 0:Ge.branchName)===M&&(Ge={...Ge,branchName:wn})}if(!(Ge!=null&&Ge.hasUncommittedChanges))return{enrichedBranches:z,enrichedDirectCommits:H,enrichedUnpushedDirectCommits:ee,enrichedBranchCommitPreviews:fe,enrichedBranchUniqueAheadCounts:He,visualCheckedOutRef:Ge};const D=Ge.headSha||Ge.parentSha||null,B=($l=(zl=H[0])==null?void 0:zl.fullSha)!=null?$l:null,I=(wn,Mn)=>!wn||!Mn?!1:wn===Mn||wn.startsWith(Mn)||Mn.startsWith(wn),V=[{name:M,headSha:B!=null?B:"",isDefault:!0},...z.map(wn=>({name:wn.name,headSha:wn.headSha,isDefault:!1}))],E=Ge.branchName?V.find(wn=>wn.name===Ge.branchName):void 0,P=D?V.filter(wn=>I(wn.headSha,D)):[],oe=(Yr=E!=null?E:P.find(wn=>wn.isDefault))!=null?Yr:P[0],K=oe&&!oe.isDefault?z.find(wn=>wn.name===oe.name):void 0,ue=(()=>{var Mn;if(!D)return null;const wn=H.find(Zs=>I(Zs.fullSha,D)||I(Zs.sha,D));if(wn!=null&&wn.date)return wn.date;if(K){const Zs=((Mn=fe[K.name])!=null?Mn:[]).find(ki=>I(ki.fullSha,D)||I(ki.sha,D));if(Zs!=null&&Zs.date)return Zs.date}return null})(),ke=ue?new Date(ue).getTime():Number.NaN,Ye=Date.now(),ft=Number.isFinite(ke)?Math.max(Ye,ke+1):Ye,bt=new Date(ft).toISOString(),ht={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:D,message:"Local uncommitted changes",author:"You",date:bt,kind:"uncommitted"};return K?{enrichedBranches:z.map(Mn=>Mn.name===K.name?{...Mn,commitsAhead:Mn.commitsAhead+1,unpushedCommits:Mn.unpushedCommits+1,lastCommitDate:bt,headSha:"WORKING_TREE"}:Mn),enrichedDirectCommits:H,enrichedUnpushedDirectCommits:ee,enrichedBranchCommitPreviews:{...fe,[K.name]:[ht,...fe[K.name]||[]]},enrichedBranchUniqueAheadCounts:{...He,[K.name]:Math.max(0,(mi=Object.prototype.hasOwnProperty.call(He,K.name)?He[K.name]:K.commitsAhead)!=null?mi:0)+1},visualCheckedOutRef:Ge}:{enrichedBranches:z,enrichedBranchCommitPreviews:{...fe,[M]:[ht,...fe[M]||[]]},enrichedBranchUniqueAheadCounts:{...He},enrichedDirectCommits:H,enrichedUnpushedDirectCommits:ee,visualCheckedOutRef:Ge}},[g,Ae,Fe,G,M,S,It,at,Nt,Re,k]);_.useEffect(()=>{var ee;if(!(!kt&&!ot&&(Nt==null||Ls&&at!=null)))return;const z=vn!=null&&vn.hasUncommittedChanges?"WORKING_TREE":(ee=vn==null?void 0:vn.headSha)!=null?ee:null;if(!z)return;const H=`${t!=null?t:"__no-repo__"}|${rn}|${z}`;Qn.current!==H&&(Qn.current=H,Le(z),ie(fe=>fe+1))},[Ls,ot,rn,kt,at,Nt,t,vn==null?void 0:vn.hasUncommittedChanges,vn==null?void 0:vn.headSha]),_.useEffect(()=>{Qn.current=null},[t]);const xo=_.useMemo(()=>{const N={...qe};return N[M]=null,N},[qe,M,yo]),C=_.useMemo(()=>{var N;return(N=Nw(yo,M,xo,ge))!=null?N:pp(yo,M,Fo,xo)},[yo,M,Fo,xo,ge]),X=_.useMemo(()=>Hc({lanes:C,branches:yo,mergeNodes:b,directCommits:Ks,unpushedDirectCommits:zo,defaultBranch:M,branchCommitPreviews:Fo,branchParentByName:xo,branchUniqueAheadCounts:Xo,manuallyOpenedClumps:In,manuallyClosedClumps:Cs,isDebugOpen:!1,gridSearchQuery:Ne,gridFocusSha:_e,checkedOutRef:vn!=null?vn:null,orientation:rn}),[C,yo,b,Ks,zo,M,Fo,xo,Xo,In,Cs,Ne,_e,(ts=vn==null?void 0:vn.headSha)!=null?ts:null,(Qs=vn==null?void 0:vn.branchName)!=null?Qs:null,rn]),ce=_.useMemo(()=>{var N;return _e&&(N=X.clusterKeyByCommitId.get(_e))!=null?N:null},[X.clusterKeyByCommitId,_e]),Me=_.useMemo(()=>{if(!ce||Cs.has(ce))return In;const N=new Set(In);return N.add(ce),N},[Cs,In,ce]),Ve=_.useMemo(()=>{if(!ce)return Cs;const N=new Set(Cs);return N.delete(ce),N},[Cs,ce]),dt=_.useMemo(()=>Hc({lanes:C,branches:yo,mergeNodes:b,directCommits:Ks,unpushedDirectCommits:zo,defaultBranch:M,branchCommitPreviews:Fo,branchParentByName:xo,branchUniqueAheadCounts:Xo,manuallyOpenedClumps:Me,manuallyClosedClumps:Ve,isDebugOpen:!1,gridSearchQuery:Ne,gridFocusSha:_e,checkedOutRef:vn!=null?vn:null,orientation:rn}),[C,yo,b,Ks,zo,M,Fo,xo,Xo,Me,Ve,Ne,_e,(Wt=vn==null?void 0:vn.headSha)!=null?Wt:null,(jn=vn==null?void 0:vn.branchName)!=null?jn:null,rn]);_.useEffect(()=>{try{const N=window.localStorage.getItem(ox);if(N){const H=Number(N);Number.isFinite(H)&&Qt(Math.min(cx,Math.max(lx,H)))}const z=window.localStorage.getItem(ix);z!=null&&Es(z==="true")}catch{}},[]),_.useEffect(()=>{ko.current=mo},[mo]),_.useEffect(()=>{const N=so.current;N&&(N.style.width=Rn?"0px":`${mo}px`)},[mo,Rn]),_.useEffect(()=>{try{window.localStorage.setItem(ix,String(Rn))}catch{}},[Rn]);const Kt=N=>{const z=fs.current;if(!z)return;const H=z.startWidth+(N-z.startX);z.pendingWidth=Math.min(cx,Math.max(lx,H));const ee=so.current;ee&&(ee.style.width=`${z.pendingWidth}px`)},Yt=(N,z)=>{const H=fs.current;if(H&&!(z!=null&&H.pointerId!==z)){fs.current=null,document.body.style.cursor="",document.body.style.userSelect="",Qt(H.pendingWidth);try{window.localStorage.setItem(ox,String(H.pendingWidth))}catch{}}},ln=N=>{N.button===0&&(N.preventDefault(),fs.current={startX:N.clientX,startWidth:ko.current,pendingWidth:ko.current,pointerId:N.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",N.currentTarget.setPointerCapture(N.pointerId))},kn=N=>{const z=fs.current;!z||z.pointerId!==N.pointerId||Kt(N.clientX)},Tn=N=>{if(fs.current){try{N.currentTarget.releasePointerCapture(N.pointerId)}catch{}Yt("pointerup",N.pointerId)}},pn=N=>{if(fs.current){try{N.currentTarget.releasePointerCapture(N.pointerId)}catch{}Yt("pointercancel",N.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:so,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:Rn?64:mo},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":Rn?"Open sidebar":"Collapse sidebar",onClick:()=>Es(N=>!N),children:Rn?l.jsx(Sw,{className:"h-4 w-4 shrink-0"}):l.jsx(vw,{className:"h-4 w-4 shrink-0"})}),l.jsx(T3,{className:N3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Rn,projects:Li,activeProjectPath:t,onSelectProject:Hn,onAddProject:$s,onRemoveProject:jo,onReorderProjects:Oi,onRevealProjectInFinder:ri,projectLoading:ot||(p&&t?!((bs=d[t])!=null&&bs.loaded):!1),projectError:yt,checkedOutRef:G,showCommits:!1,manuallyOpenedClumpsByProject:F,manuallyClosedClumpsByProject:Ee,manuallyOpenedClumps:Me,manuallyClosedClumps:Ve,setManuallyOpenedClumps:ms,setManuallyClosedClumps:ps,gridLayoutModel:dt,onSelectCommit:Rt,onSelectBranch:$i}),Rn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:ln,onPointerMove:kn,onPointerUp:Tn,onPointerCancel:pn,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(cS,{branches:yo,mergeNodes:b,directCommits:Ks,unpushedDirectCommits:zo,unpushedCommitShasByBranch:U,openPRs:St,defaultBranch:M,branchCommitPreviews:Fo,branchParentByName:xo,branchUniqueAheadCounts:Xo,gridSearchQuery:Ne,gridSearchJumpToken:re,gridSearchJumpDirection:L,gridFocusSha:_e,onGridSearchResultCountChange:ne,onGridSearchResultIndexChange:De,onGridSearchFocusChange:Le,checkedOutRef:vn,onCommitClick:qs,onMergeRefsIntoBranch:Lo,mergeInProgress:gt,onPushAllBranches:la,onPushCurrentBranch:Jo,onPushCommitTargets:To,pushInProgress:Et,onDeleteSelection:Oo,deleteInProgress:ct,worktrees:Z,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:go,removeWorktreeInProgress:pe,onSwitchToWorktree:Eo,onStashLocalChanges:Qo,stashInProgress:st,stashDisabled:!1,onCommitLocalChanges:Zo,commitInProgress:jt,commitDisabled:!1,onStageAllChanges:zi,stageInProgress:dn,onCreateBranchFromNode:ci,onCreateRootBranch:ui,createBranchFromNodeInProgress:Ht,isMutationBusy:zt,isDebugOpen:So,onDebugClose:()=>Co(!1),onInteractionChange:qt,manuallyOpenedClumps:Me,manuallyClosedClumps:Ve,setManuallyOpenedClumps:ms,setManuallyClosedClumps:ps,layoutModel:dt,orientation:rn,gridHudProps:Ko})]})]})})})}var L3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,O3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=L3}var ys=O3,z3=`.icon-transitions-module__iconState___uqK9J {
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
}`,$3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=z3}var us=$3,I3=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),P3=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),H3=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),U3=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${us.iconState} ${n?us.hiddenScaled:us.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${us.iconState} ${n?us.visibleScaled:us.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),V3=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${us.iconStateFast} ${i?us.visibleScaled:u?us.sending:us.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${us.iconStateFast} ${a?us.visibleScaled:us.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${us.iconStateFast} ${c?us.visibleScaled:us.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Y3=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${us.iconFade} ${n?us.visible:us.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${us.iconFade} ${n?us.hidden:us.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),W3=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${us.iconFadeFast} ${n?us.hidden:us.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${us.iconFadeFast} ${n?us.visible:us.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),F3=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),X3=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Q5=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),G3=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),q3=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),K3=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Q3=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Z3=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),J3=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ej=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Z5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],gm=Z5.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),ap="feedback-freeze-styles",ym="__agentation_freeze";function tj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[ym]||(t[ym]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[ym]}var En=tj();typeof window<"u"&&!En.installed&&(En.origSetTimeout=window.setTimeout.bind(window),En.origSetInterval=window.setInterval.bind(window),En.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?En.origSetTimeout(t,n):En.origSetTimeout((...a)=>{En.frozen?En.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?En.origSetInterval(t,n):En.origSetInterval((...a)=>{En.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>En.origRAF(n=>{En.frozen?En.frozenRAFQueue.push(t):t(n)}),En.installed=!0);var Gt=En.origSetTimeout,nj=En.origSetInterval,kl=En.origRAF;function sj(t){return t?Z5.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function oj(){if(typeof document>"u"||En.frozen)return;En.frozen=!0,En.frozenTimeoutQueue=[],En.frozenRAFQueue=[];let t=document.getElementById(ap);t||(t=document.createElement("style"),t.id=ap),t.textContent=`
    *${gm},
    *${gm}::before,
    *${gm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),En.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;sj(i)||(n.pause(),En.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function dx(){var i;if(typeof document>"u"||!En.frozen)return;En.frozen=!1;const t=En.frozenTimeoutQueue;En.frozenTimeoutQueue=[];for(const a of t)En.origSetTimeout(()=>{if(En.frozen){En.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=En.frozenRAFQueue;En.frozenRAFQueue=[];for(const a of n)En.origRAF(c=>{if(En.frozen){En.frozenRAFQueue.push(a);return}a(c)});for(const a of En.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}En.pausedAnimations=[],(i=document.getElementById(ap))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function xm(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Yd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,T]=_.useState(u),[U,R]=_.useState(!1),[M,q]=_.useState("initial"),[G,W]=_.useState(!1),[Z,he]=_.useState(!1),pe=_.useRef(null),be=_.useRef(null),Ne=_.useRef(null),Ze=_.useRef(null);_.useEffect(()=>{b&&M!=="exit"&&q("exit")},[b,M]),_.useEffect(()=>{Gt(()=>{q("enter")},0);const me=Gt(()=>{q("entered")},200),Ee=Gt(()=>{const $=pe.current;$&&(xm($),$.selectionStart=$.selectionEnd=$.value.length,$.scrollTop=$.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Ee),Ne.current&&clearTimeout(Ne.current),Ze.current&&clearTimeout(Ze.current)}},[]);const re=_.useCallback(()=>{Ze.current&&clearTimeout(Ze.current),R(!0),Ze.current=Gt(()=>{R(!1),xm(pe.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:re}),[re]);const ie=_.useCallback(()=>{q("exit"),Ne.current=Gt(()=>{p()},150)},[p]),L=_.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),ae=_.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),L()),me.key==="Escape"&&ie())},[L,ie]),F=[ys.popup,w?ys.light:"",M==="enter"?ys.enter:"",M==="entered"?ys.entered:"",M==="exit"?ys.exit:"",U?ys.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:be,className:F,"data-annotation-popup":!0,style:g,onClick:me=>me.stopPropagation(),children:[l.jsxs("div",{className:ys.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ys.headerToggle,onClick:()=>{const me=Z;he(!Z),me&&Gt(()=>xm(pe.current),0)},type:"button",children:[l.jsx("svg",{className:`${ys.chevron} ${Z?ys.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ys.element,children:n})]}):l.jsx("span",{className:ys.element,children:n}),i&&l.jsx("span",{className:ys.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ys.stylesWrapper} ${Z?ys.expanded:""}`,children:l.jsx("div",{className:ys.stylesInner,children:l.jsx("div",{className:ys.stylesBlock,children:Object.entries(S).map(([me,Ee])=>l.jsxs("div",{className:ys.styleLine,children:[l.jsx("span",{className:ys.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ys.styleValue,children:Ee}),";"]},me))})})}),a&&l.jsxs("div",{className:ys.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:pe,className:ys.textarea,style:{borderColor:G?x:void 0},placeholder:c,value:k,onChange:me=>T(me.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ae}),l.jsxs("div",{className:ys.actions,children:[y&&l.jsx("div",{className:ys.deleteWrapper,children:l.jsx("button",{className:ys.deleteButton,onClick:y,type:"button",children:l.jsx(Z3,{size:22})})}),l.jsx("button",{className:ys.cancel,onClick:ie,children:"Cancel"}),l.jsx("button",{className:ys.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:L,disabled:!k.trim(),children:d})]})]})}),ij=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Gt(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Gt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Nl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},aj=`.styles-module__tooltip___mcXL2 {
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
}`,rj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=aj}var fx=rj,Lr=({content:t})=>l.jsx(ij,{className:fx.tooltip,content:t,children:l.jsx(H3,{className:fx.tooltipIcon})}),Mt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},J5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Mt.navigation},{type:"header",label:"Header",...Mt.header},{type:"hero",label:"Hero",...Mt.hero},{type:"section",label:"Section",...Mt.section},{type:"sidebar",label:"Sidebar",...Mt.sidebar},{type:"footer",label:"Footer",...Mt.footer},{type:"modal",label:"Modal",...Mt.modal},{type:"banner",label:"Banner",...Mt.banner},{type:"drawer",label:"Drawer",...Mt.drawer},{type:"popover",label:"Popover",...Mt.popover},{type:"divider",label:"Divider",...Mt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Mt.card},{type:"text",label:"Text",...Mt.text},{type:"image",label:"Image",...Mt.image},{type:"video",label:"Video",...Mt.video},{type:"table",label:"Table",...Mt.table},{type:"grid",label:"Grid",...Mt.grid},{type:"list",label:"List",...Mt.list},{type:"chart",label:"Chart",...Mt.chart},{type:"codeBlock",label:"Code Block",...Mt.codeBlock},{type:"map",label:"Map",...Mt.map},{type:"timeline",label:"Timeline",...Mt.timeline},{type:"calendar",label:"Calendar",...Mt.calendar},{type:"accordion",label:"Accordion",...Mt.accordion},{type:"carousel",label:"Carousel",...Mt.carousel},{type:"logo",label:"Logo",...Mt.logo},{type:"faq",label:"FAQ",...Mt.faq},{type:"gallery",label:"Gallery",...Mt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Mt.button},{type:"input",label:"Input",...Mt.input},{type:"search",label:"Search",...Mt.search},{type:"form",label:"Form",...Mt.form},{type:"tabs",label:"Tabs",...Mt.tabs},{type:"dropdown",label:"Dropdown",...Mt.dropdown},{type:"toggle",label:"Toggle",...Mt.toggle},{type:"stepper",label:"Stepper",...Mt.stepper},{type:"rating",label:"Rating",...Mt.rating},{type:"fileUpload",label:"File Upload",...Mt.fileUpload},{type:"checkbox",label:"Checkbox",...Mt.checkbox},{type:"radio",label:"Radio",...Mt.radio},{type:"slider",label:"Slider",...Mt.slider},{type:"datePicker",label:"Date Picker",...Mt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Mt.avatar},{type:"badge",label:"Badge",...Mt.badge},{type:"tag",label:"Tag",...Mt.tag},{type:"breadcrumb",label:"Breadcrumb",...Mt.breadcrumb},{type:"pagination",label:"Pagination",...Mt.pagination},{type:"progress",label:"Progress",...Mt.progress},{type:"alert",label:"Alert",...Mt.alert},{type:"toast",label:"Toast",...Mt.toast},{type:"notification",label:"Notification",...Mt.notification},{type:"tooltip",label:"Tooltip",...Mt.tooltip},{type:"stat",label:"Stat",...Mt.stat},{type:"skeleton",label:"Skeleton",...Mt.skeleton},{type:"chip",label:"Chip",...Mt.chip},{type:"icon",label:"Icon",...Mt.icon},{type:"spinner",label:"Spinner",...Mt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Mt.pricing},{type:"testimonial",label:"Testimonial",...Mt.testimonial},{type:"cta",label:"CTA",...Mt.cta},{type:"productCard",label:"Product Card",...Mt.productCard},{type:"profile",label:"Profile",...Mt.profile},{type:"feature",label:"Feature",...Mt.feature},{type:"team",label:"Team",...Mt.team},{type:"login",label:"Login",...Mt.login},{type:"contact",label:"Contact",...Mt.contact}]}],oa={};for(const t of J5)for(const n of t.items)oa[n.type]=n;function Xe({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function os({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ai({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function lj({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(os,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Xe,{w:t*.06}),l.jsx(Xe,{w:t*.07}),l.jsx(Xe,{w:t*.05}),l.jsx(Xe,{w:t*.06})]}),l.jsx(os,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function cj({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Xe,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Xe,{w:t*.6}),l.jsx(Xe,{w:t*.4}),l.jsx(os,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function uj({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Xe,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(os,{w:10,h:10,radius:2}),l.jsx(Xe,{w:t*(.4+c*17%30/100)})]},c))]})}function dj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:"60%",h:3,strong:!0}),l.jsx(Xe,{w:"80%",h:2}),l.jsx(Xe,{w:"70%",h:2}),l.jsx(Xe,{w:"60%",h:2})]},c))})}function fj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Xe,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Xe,{w:"90%"}),l.jsx(Xe,{w:"70%"}),l.jsx(Xe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(os,{w:70,h:26,radius:4}),l.jsx(os,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function hj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"70%",h:4,strong:!0}),l.jsx(Xe,{w:"95%",h:2}),l.jsx(Xe,{w:"85%",h:2}),l.jsx(Xe,{w:"50%",h:2})]})]})}function mj({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Xe,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Xe,{w:`${70+u*13%25}%`,h:2},u))]})}function pj({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function _j({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Xe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Xe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function gj({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ai,{size:8}),l.jsx(Xe,{w:`${55+c*17%35}%`,h:2})]},c))})}function yj({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Xe,{w:Math.max(20,t*.5),h:3,strong:!0})})}function xj({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Xe,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Xe,{w:"40%",h:2})})]})}function bj({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:60+c*17%30,h:2}),l.jsx(os,{w:"100%",h:28,radius:4})]},c)),l.jsx(os,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function vj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Xe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Xe,{w:"80%",h:2}),l.jsx(Xe,{w:"65%",h:2}),l.jsx(Xe,{w:"75%",h:2})]})]})}function wj({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Sj({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Xe,{w:Math.max(16,t*.5),h:2,strong:!0})})}function Cj({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Xe,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Xe,{w:t*.35})]})}function kj({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Xe,{w:t*.3,h:4,strong:!0}),l.jsx(Xe,{w:t*.7}),l.jsx(Xe,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(os,{w:"33%",h:"100%",radius:4}),l.jsx(os,{w:"33%",h:"100%",radius:4}),l.jsx(os,{w:"33%",h:"100%",radius:4})]})]})}function jj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(os,{w:"100%",h:"100%",radius:4},u))})}function Mj({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Xe,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Xe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Ej({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Tj({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ai,{size:Math.min(14,n*.4)}),l.jsx(Xe,{w:"50%",h:2})]})}function Aj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ai,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"60%",h:3,strong:!0}),l.jsx(Xe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Dj({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Nj({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(os,{w:a,h:`${d}%`,radius:2},u)})})}function Rj({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(os,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Bj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Xe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Lj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Xe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Oj({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(os,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function zj({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function $j({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Xe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Ij({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(os,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ai,{size:5}),l.jsx(ai,{size:5}),l.jsx(ai,{size:5})]})]})}function Pj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Xe,{w:t*.4,h:3,strong:!0}),l.jsx(Xe,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ai,{size:5}),l.jsx(Xe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(os,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Hj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:"90%",h:2}),l.jsx(Xe,{w:"75%",h:2}),l.jsx(Xe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ai,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Xe,{w:60,h:3,strong:!0}),l.jsx(Xe,{w:40,h:2})]})]})]})}function Uj({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Xe,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Xe,{w:t*.35}),l.jsx(os,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Vj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"40%",h:3,strong:!0}),l.jsx(Xe,{w:"70%",h:2})]})]})}function Yj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Xe,{w:t*.4,h:3,strong:!0}),l.jsx(os,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Wj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Xe,{w:t*.5,h:2}),l.jsx(Xe,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Xe,{w:t*.3,h:2})]})}function Fj({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Xj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Xe,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Gj({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function qj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Kj({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ai,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Xe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function Qj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Xe,{w:t*.4,h:2}),l.jsx(Xe,{w:t*.25,h:2})]})}function Zj({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ai,{size:6}),l.jsx(ai,{size:6}),l.jsx(ai,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Xe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function Jj({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Xe,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Xe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function e8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ai,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"50%",h:3,strong:!0}),l.jsx(Xe,{w:"75%",h:2})]}),l.jsx(Xe,{w:30,h:2})]})}function t8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"65%",h:4,strong:!0}),l.jsx(Xe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Xe,{w:"30%",h:5,strong:!0}),l.jsx(os,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function n8({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ai,{size:i}),l.jsx(Xe,{w:t*.45,h:4,strong:!0}),l.jsx(Xe,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]})]})]})}function s8({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Xe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Xe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function o8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"70%",h:3,strong:!0}),l.jsx(Xe,{w:"90%",h:2}),l.jsx(Xe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function i8({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(os,{w:i,h:i,radius:i*.25}),l.jsx(Xe,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function a8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Xe,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function r8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function l8({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function c8({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function u8({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function d8({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Xe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Xe,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function f8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function h8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Xe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function m8({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function p8({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function _8({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(os,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Xe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function g8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Xe,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ai,{size:a}),l.jsx(Xe,{w:t*.12,h:3,strong:!0}),l.jsx(Xe,{w:t*.08,h:2})]},u))})]})}function y8({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Xe,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Xe,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:Math.min(60,t*.2),h:2}),l.jsx(os,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(os,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Xe,{w:t*.4,h:2})]})}function x8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Xe,{w:t*.4,h:4,strong:!0}),l.jsx(Xe,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:50,h:2}),l.jsx(os,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:40,h:2}),l.jsx(os,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:50,h:2}),l.jsx(os,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Xe,{w:60,h:2}),l.jsx(os,{w:"100%",h:"100%",radius:4})]}),l.jsx(os,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var b8={navigation:lj,hero:cj,sidebar:uj,footer:dj,modal:fj,card:hj,text:mj,image:pj,table:_j,list:gj,button:yj,input:xj,form:bj,tabs:vj,avatar:wj,badge:Sj,header:Cj,section:kj,grid:jj,dropdown:Mj,toggle:Ej,search:Tj,toast:Aj,progress:Dj,chart:Nj,video:Rj,tooltip:Bj,breadcrumb:Lj,pagination:Oj,divider:zj,accordion:$j,carousel:Ij,pricing:Pj,testimonial:Hj,cta:Uj,alert:Vj,banner:Yj,stat:Wj,stepper:Fj,tag:Xj,rating:Gj,map:qj,timeline:Kj,fileUpload:Qj,codeBlock:Zj,calendar:Jj,notification:e8,productCard:t8,profile:n8,drawer:s8,popover:o8,logo:i8,faq:a8,gallery:r8,checkbox:l8,radio:c8,slider:u8,datePicker:d8,skeleton:f8,chip:h8,icon:m8,spinner:p8,feature:_8,team:g8,login:y8,contact:x8};function v8({type:t,width:n,height:i,text:a}){const c=b8[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var w8=`svg[fill=none] {
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
}`,S8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=w8}var Pe=S8,yl=24,ud=5;function hx(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],k=[];for(const be of n)i.has(be.id)||k.push(be);c&&k.push(...c);for(const be of k){const Ne=be.x,Ze=be.x+be.width,re=be.x+be.width/2,ie=be.y,L=be.y+be.height,ae=be.y+be.height/2;for(const F of S)for(const me of[Ne,Ze,re]){const Ee=me-F;Math.abs(Ee)<ud&&Math.abs(Ee)<Math.abs(u)&&(u=Ee)}for(const F of j)for(const me of[ie,L,ae]){const Ee=me-F;Math.abs(Ee)<ud&&Math.abs(Ee)<Math.abs(d)&&(d=Ee)}}const T=Math.abs(u)<ud?u:0,U=Math.abs(d)<ud?d:0,R=[],M=new Set,q=h+T,G=p+T,W=y+T,Z=g+U,he=x+U,pe=b+U;for(const be of k){const Ne=be.x,Ze=be.x+be.width,re=be.x+be.width/2,ie=be.y,L=be.y+be.height,ae=be.y+be.height/2;for(const F of[Ne,re,Ze])for(const me of[q,W,G])if(Math.abs(me-F)<.5){const Ee=`x:${Math.round(F)}`;M.has(Ee)||(M.add(Ee),R.push({axis:"x",pos:F}))}for(const F of[ie,ae,L])for(const me of[Z,pe,he])if(Math.abs(me-F)<.5){const Ee=`y:${Math.round(F)}`;M.has(Ee)||(M.add(Ee),R.push({axis:"y",pos:F}))}}return{dx:T,dy:U,guides:R}}function mx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function C8({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,T]=_.useState(new Set),[U,R]=_.useState(null),[M,q]=_.useState(null),[G,W]=_.useState(null),[Z,he]=_.useState([]),[pe,be]=_.useState(null),[Ne,Ze]=_.useState(!1),re=_.useRef(!1),[ie,L]=_.useState(new Set),ae=_.useRef(new Map),F=_.useRef(null),me=_.useRef(null),Ee=_.useRef(t);Ee.current=t;const $=_.useRef(g);$.current=g;const le=_.useRef(b);le.current=b;const ne=_.useRef(w);ne.current=w;const Se=_.useRef(x);_.useEffect(()=>{x!==Se.current&&(Se.current=x,T(new Set))},[x]);const De=_.useRef(S);_.useEffect(()=>{if(S!==void 0&&S!==De.current){De.current=S;const J=new Set(Ee.current.map(Oe=>Oe.id));J.size>0&&(L(J),T(new Set),me.current=null,Gt(()=>{n([]),L(new Set)},180))}},[S,n]),_.useEffect(()=>{const J=Oe=>{const mt=Oe.target;if(!(mt.tagName==="INPUT"||mt.tagName==="TEXTAREA"||mt.isContentEditable)){if((Oe.key==="Backspace"||Oe.key==="Delete")&&k.size>0){Oe.preventDefault();const Ke=new Set(k);L(Ke),T(new Set),Gt(()=>{n(Ee.current.filter(it=>!Ke.has(it.id))),L(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Oe.key)&&k.size>0){Oe.preventDefault();const Ke=Oe.shiftKey?20:1,it=Oe.key==="ArrowLeft"?-Ke:Oe.key==="ArrowRight"?Ke:0,gt=Oe.key==="ArrowUp"?-Ke:Oe.key==="ArrowDown"?Ke:0;n(t.map(xt=>k.has(xt.id)?{...xt,x:Math.max(0,xt.x+it),y:Math.max(0,xt.y+gt)}:xt));return}if(Oe.key==="Escape"){i?a(null):k.size>0&&T(new Set);return}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[k,i,t,n,a]);const _e=_.useCallback(J=>{if(J.button!==0||p||J.target.closest(`.${Pe.placement}`))return;J.preventDefault(),J.stopPropagation();const mt=window.scrollY,je=J.clientX,Ke=J.clientY;if(i){me.current="place",d==null||d(!0);let it=!1,gt=je,xt=Ke;const Et=ct=>{gt=ct.clientX,xt=ct.clientY;const Y=Math.abs(gt-je),te=Math.abs(xt-Ke);if((Y>5||te>5)&&(it=!0),it){const ve=Math.min(je,gt),Ae=Math.min(Ke,xt),rt=Math.abs(gt-je),qe=Math.abs(xt-Ke);R({x:ve,y:Ae,w:rt,h:qe}),W({x:ct.clientX+12,y:ct.clientY+12,text:`${Math.round(rt)} × ${Math.round(qe)}`})}},Bt=ct=>{window.removeEventListener("mousemove",Et),window.removeEventListener("mouseup",Bt),R(null),W(null),me.current=null,d==null||d(!1);const Y=Mt[i];let te,ve,Ae,rt;it?(te=Math.min(je,gt),ve=Math.min(Ke,xt)+mt,Ae=Math.max(yl,Math.abs(gt-je)),rt=Math.max(yl,Math.abs(xt-Ke))):(Ae=Y.width,rt=Y.height,te=je-Ae/2,ve=Ke+mt-rt/2),te=Math.max(0,te),ve=Math.max(0,ve);const qe={id:mx(),type:i,x:te,y:ve,width:Ae,height:rt,scrollY:mt,timestamp:Date.now()},Be=[...t,qe];n(Be),T(new Set([qe.id])),a(null)};window.addEventListener("mousemove",Et),window.addEventListener("mouseup",Bt)}else{J.shiftKey||T(new Set),me.current="select";let it=!1;const gt=Et=>{const Bt=Math.abs(Et.clientX-je),ct=Math.abs(Et.clientY-Ke);if((Bt>4||ct>4)&&(it=!0),it){const Y=Math.min(je,Et.clientX),te=Math.min(Ke,Et.clientY);q({x:Y,y:te,w:Math.abs(Et.clientX-je),h:Math.abs(Et.clientY-Ke)})}},xt=Et=>{if(window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",xt),me.current=null,it){const Bt=Math.min(je,Et.clientX),ct=Math.min(Ke,Et.clientY)+mt,Y=Math.abs(Et.clientX-je),te=Math.abs(Et.clientY-Ke),ve=new Set(J.shiftKey?k:new Set);for(const Ae of t)Ae.y-mt,Ae.x+Ae.width>Bt&&Ae.x<Bt+Y&&Ae.y+Ae.height>ct&&Ae.y<ct+te&&ve.add(Ae.id);T(ve)}q(null)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",xt)}},[i,p,t,n,k]),Le=_.useCallback((J,Oe)=>{var qe;if(J.button!==0)return;const mt=J.target;if(mt.closest(`.${Pe.handle}`)||mt.closest(`.${Pe.deleteButton}`))return;J.preventDefault(),J.stopPropagation();let je;J.shiftKey?(je=new Set(k),je.has(Oe)?je.delete(Oe):je.add(Oe)):k.has(Oe)?je=new Set(k):je=new Set([Oe]),T(je),(je.size!==k.size||[...je].some(Be=>!k.has(Be)))&&((qe=$.current)==null||qe.call($,je,J.shiftKey));const it=J.clientX,gt=J.clientY,xt=new Map;for(const Be of t)je.has(Be.id)&&xt.set(Be.id,{x:Be.x,y:Be.y});me.current="move",d==null||d(!0);let Et=!1,Bt=!1,ct=t,Y=0,te=0;const ve=new Map;for(const Be of t)xt.has(Be.id)&&ve.set(Be.id,{w:Be.width,h:Be.height});const Ae=Be=>{var dn;const ge=Be.clientX-it,tt=Be.clientY-gt;if((Math.abs(ge)>2||Math.abs(tt)>2)&&(Et=!0),!Et)return;if(Be.altKey&&!Bt){Bt=!0;const pt=[];for(const Ht of t)xt.has(Ht.id)&&pt.push({...Ht,id:mx(),timestamp:Date.now()});ct=[...t,...pt]}let Fe=1/0,Je=1/0,Re=-1/0,nt=-1/0;for(const[pt,Ht]of xt){const nn=ve.get(pt);nn&&(Fe=Math.min(Fe,Ht.x+ge),Je=Math.min(Je,Ht.y+tt),Re=Math.max(Re,Ht.x+ge+nn.w),nt=Math.max(nt,Ht.y+tt+nn.h))}const St={x:Fe,y:Je,width:Re-Fe,height:nt-Je},{dx:Ct,dy:st,guides:Lt}=hx(St,ct,new Set(xt.keys()),void 0,y);he(Lt);const jt=ge+Ct,_t=tt+st;Y=jt,te=_t,n(ct.map(pt=>{const Ht=xt.get(pt.id);return Ht?{...pt,x:Math.max(0,Ht.x+jt),y:Math.max(0,Ht.y+_t)}:pt})),(dn=le.current)==null||dn.call(le,jt,_t)},rt=()=>{var Be;window.removeEventListener("mousemove",Ae),window.removeEventListener("mouseup",rt),me.current=null,d==null||d(!1),he([]),(Be=ne.current)==null||Be.call(ne,Y,te,Et)};window.addEventListener("mousemove",Ae),window.addEventListener("mouseup",rt)},[k,t,n,d]),ot=_.useCallback((J,Oe,mt)=>{J.preventDefault(),J.stopPropagation();const je=t.find(ve=>ve.id===Oe);if(!je)return;T(new Set([Oe])),me.current="resize",d==null||d(!0);const Ke=J.clientX,it=J.clientY,gt=je.width,xt=je.height,Et=je.x,Bt=je.y,ct={left:mt.includes("w"),right:mt.includes("e"),top:mt.includes("n"),bottom:mt.includes("s")},Y=ve=>{const Ae=ve.clientX-Ke,rt=ve.clientY-it;let qe=gt,Be=xt,ge=Et,tt=Bt;mt.includes("e")&&(qe=Math.max(yl,gt+Ae)),mt.includes("w")&&(qe=Math.max(yl,gt-Ae),ge=Et+gt-qe),mt.includes("s")&&(Be=Math.max(yl,xt+rt)),mt.includes("n")&&(Be=Math.max(yl,xt-rt),tt=Bt+xt-Be);const Fe={x:ge,y:tt,width:qe,height:Be},{dx:Je,dy:Re,guides:nt}=hx(Fe,Ee.current,new Set([Oe]),ct,y);he(nt),Je!==0&&(ct.right?qe+=Je:ct.left&&(ge+=Je,qe-=Je)),Re!==0&&(ct.bottom?Be+=Re:ct.top&&(tt+=Re,Be-=Re)),n(Ee.current.map(St=>St.id===Oe?{...St,x:ge,y:tt,width:qe,height:Be}:St)),W({x:ve.clientX+12,y:ve.clientY+12,text:`${Math.round(qe)} × ${Math.round(Be)}`})},te=()=>{window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",te),W(null),me.current=null,d==null||d(!1),he([])};window.addEventListener("mousemove",Y),window.addEventListener("mouseup",te)},[t,n,d]),Ie=_.useCallback(J=>{me.current=null,L(Oe=>{const mt=new Set(Oe);return mt.add(J),mt}),T(Oe=>{const mt=new Set(Oe);return mt.delete(J),mt}),Gt(()=>{n(Ee.current.filter(Oe=>Oe.id!==J)),L(Oe=>{const mt=new Set(Oe);return mt.delete(J),mt})},180)},[n]),kt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Ot=_.useCallback(J=>{const Oe=t.find(mt=>mt.id===J);Oe&&(re.current=!!Oe.text,be(J),Ze(!1))},[t]),yt=_.useCallback(()=>{pe&&(Ze(!0),Gt(()=>{be(null),Ze(!1)},150))},[pe]);_.useEffect(()=>{u&&pe&&yt()},[u]);const et=_.useCallback(J=>{pe&&(n(t.map(Oe=>Oe.id===pe?{...Oe,text:J.trim()||void 0}:Oe)),yt())},[pe,t,n,yt]),lt=typeof window<"u"?window.scrollY:0,Pt=["nw","ne","se","sw"],an=j?"#f97316":"#3c82f7",tn=[{dir:"n",cls:Pe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:an})})},{dir:"e",cls:Pe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:an})})},{dir:"s",cls:Pe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:an})})},{dir:"w",cls:Pe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:an})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${Pe.overlay} ${c?"":Pe.light} ${i?Pe.placing:""} ${p?Pe.passthrough:""} ${u?Pe.overlayExiting:""} ${j?Pe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:_e,children:t.map(J=>{var Ke;const Oe=k.has(J.id),mt=((Ke=oa[J.type])==null?void 0:Ke.label)||J.type,je=J.y-lt;return l.jsxs("div",{"data-design-placement":J.id,className:`${Pe.placement} ${Oe?Pe.selected:""} ${ie.has(J.id)?Pe.exiting:""}`,style:{left:J.x,top:je,width:J.width,height:J.height,position:"fixed"},onMouseDown:it=>Le(it,J.id),onDoubleClick:()=>Ot(J.id),children:[l.jsx("span",{className:Pe.placementLabel,children:mt}),l.jsx("span",{className:`${Pe.placementAnnotation} ${J.text?Pe.annotationVisible:""}`,children:(J.text&&ae.current.set(J.id,J.text),J.text||ae.current.get(J.id)||"")}),l.jsx("div",{className:Pe.placementContent,children:l.jsx(v8,{type:J.type,width:J.width,height:J.height,text:J.text})}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:it=>it.stopPropagation(),onClick:()=>Ie(J.id),children:"✕"}),Pt.map(it=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${it.charAt(0).toUpperCase()}${it.slice(1)}`]}`,onMouseDown:gt=>ot(gt,J.id,it)},it)),tn.map(({dir:it,cls:gt,arrow:xt})=>l.jsx("div",{className:`${Pe.edgeHandle} ${gt}`,onMouseDown:Et=>ot(Et,J.id,it),children:xt},it))]},J.id)})}),pe&&(()=>{var Bt,ct;const J=t.find(Y=>Y.id===pe);if(!J)return null;const Oe=J.y-lt,mt=J.x+J.width/2,je=Oe-8,Ke=Oe+J.height+8,it=je>200,gt=Ke<window.innerHeight-100,xt=Math.max(160,Math.min(window.innerWidth-160,mt));let Et;return it?Et={left:xt,bottom:window.innerHeight-je}:gt?Et={left:xt,top:Ke}:Et={left:xt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Yd,{element:((Bt=oa[J.type])==null?void 0:Bt.label)||J.type,placeholder:kt[J.type]||"Label or content text",initialValue:(ct=J.text)!=null?ct:"",submitLabel:re.current?"Save":"Set",onSubmit:et,onCancel:yt,onDelete:re.current?()=>{et("")}:void 0,isExiting:Ne,lightMode:!c,style:Et})})(),U&&l.jsx("div",{className:Pe.drawBox,style:{left:U.x,top:U.y,width:U.w,height:U.h},"data-feedback-toolbar":!0}),M&&l.jsx("div",{className:Pe.selectBox,style:{left:M.x,top:M.y,width:M.w,height:M.h},"data-feedback-toolbar":!0}),G&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:G.x,top:G.y},"data-feedback-toolbar":!0,children:G.text}),Z.map((J,Oe)=>l.jsx("div",{className:Pe.guideLine,style:J.axis==="x"?{position:"fixed",left:J.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:J.pos-lt,right:0,height:1},"data-feedback-toolbar":!0},`${J.axis}-${J.pos}-${Oe}`))]})}function k8(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Pe.fadeTop:""} ${i?Pe.fadeBottom:""}`}var O="currentColor",$e="0.5";function j8({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:O,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:O,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:O,strokeWidth:$e})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:O,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:O,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:O,strokeWidth:$e})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:O,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:O,strokeWidth:$e,fill:O,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:$e})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:O,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:$e})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:O,strokeWidth:$e,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:O,strokeWidth:$e,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:O,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:O,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:O,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:O,strokeWidth:$e})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:$e})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:O,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:O,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:O,strokeWidth:$e})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:O,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:O,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:O,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:O,opacity:".15",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:$e})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:O,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:O,strokeWidth:$e})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:O,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:O,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:O,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:O,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:O,strokeWidth:$e})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:O,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:O,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:O,strokeWidth:$e})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:O,opacity:".2",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:O,strokeWidth:$e})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:O,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:O,strokeWidth:$e,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:O,strokeWidth:$e,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:O,opacity:".15",stroke:O,strokeWidth:$e})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:O,opacity:".2",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:O,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:$e,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:O,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:O,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:O,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:O,strokeWidth:$e})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:$e,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:O,strokeWidth:$e})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:O,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:O,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:$e})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:O,strokeWidth:$e,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:O,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:O,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:O,strokeWidth:$e})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:O,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:O,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:O,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:O,opacity:".08",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:O,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:O,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:O,strokeWidth:$e,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:O,strokeWidth:$e,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:O,strokeWidth:$e,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:O,strokeWidth:$e,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:O,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:O,strokeWidth:$e,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:O,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:O,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:O,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:O,opacity:".2"})]});default:return null}}function M8({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Pe.placeScroll} ${c||""}`,children:J5.map(d=>l.jsxs("div",{className:Pe.paletteSection,children:[l.jsx("div",{className:Pe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Pe.paletteItem} ${t===h.type?Pe.active:""} ${u?Pe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Pe.paletteItemIcon,children:l.jsx(j8,{type:h.type})}),l.jsx("span",{className:Pe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function E8({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Gt(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function T8({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=_.useState(!1),[T,U]=_.useState("exit"),[R,M]=_.useState(!1),[q,G]=_.useState(!0),W=_.useRef(0),Z=_.useRef(""),he=_.useRef(0),pe=_.useRef(),be=_.useRef(null),[Ne,Ze]=_.useState("");_.useEffect(()=>(u?(k(!0),clearTimeout(pe.current),cancelAnimationFrame(he.current),he.current=kl(()=>{he.current=kl(()=>{U("enter")})})):(cancelAnimationFrame(he.current),U("exit"),clearTimeout(pe.current),pe.current=Gt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(he.current)),[u]);const re=h>0||a>0,ie=h+a;return ie>0&&(W.current=ie,Z.current=g?ie===1?"Component":"Components":ie===1?"Change":"Changes"),_.useEffect(()=>{if(re)R?G(!1):(G(!0),M(!0),kl(()=>{kl(()=>{G(!1)})}));else{G(!0);const L=Gt(()=>M(!1),300);return()=>clearTimeout(L)}},[re]),_.useEffect(()=>{if(!j)return;const L=be.current;if(!L)return;const ae=()=>Ze(k8(L));ae(),L.addEventListener("scroll",ae,{passive:!0});const F=new ResizeObserver(ae);return F.observe(L),()=>{L.removeEventListener("scroll",ae),F.disconnect()}},[j]),j?l.jsxs("div",{className:`${Pe.palette} ${Pe[T]} ${i?"":Pe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:L=>L.stopPropagation(),onMouseDown:L=>L.stopPropagation(),onTransitionEnd:L=>{L.target===L.currentTarget&&(u||(clearTimeout(pe.current),k(!1),U("exit"),d==null||d()))},children:[l.jsxs("div",{className:Pe.paletteHeader,children:[l.jsx("div",{className:Pe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Pe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Pe.canvasToggle} ${g?Pe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Pe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Pe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Pe.wireframePurposeWrap} ${g?"":Pe.collapsed}`,children:l.jsx("div",{className:Pe.wireframePurposeInner,children:l.jsx("textarea",{className:Pe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:L=>w(L.target.value),rows:2})})}),l.jsx(M8,{activeType:t,onSelect:n,onDragStart:y,scrollRef:be,fadeClass:Ne,blankCanvas:g}),R&&l.jsx("div",{className:`${Pe.paletteFooterWrap} ${q?Pe.footerHidden:""}`,children:l.jsx("div",{className:Pe.paletteFooterInner,children:l.jsx("div",{className:Pe.paletteFooterInnerContent,children:l.jsxs("div",{className:Pe.paletteFooter,children:[l.jsx("span",{className:Pe.paletteFooterCount,children:l.jsx(E8,{value:W.current,suffix:Z.current})}),l.jsx("button",{className:Pe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Al(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function ni(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=Al(i)}return null}function A8(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=Al(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function jl(t){var a,c,u,d,h,p,y,g;const n=A8(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=ni(t,"svg");if(x){const b=Al(x);if(b instanceof HTMLElement)return{name:`graphic in ${jl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=Al(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function wc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function dd(t){const n=Al(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Sc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var e2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),D8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),N8=new Set(["input","textarea","select"]),R8=new Set(["img","video","canvas","svg"]),B8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function fd(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;D8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:N8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:R8.has(a)?c=["width","height","objectFit","borderRadius"]:B8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!e2.has(h)&&(i[u]=h)}return i}var L8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function hd(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of L8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!e2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function O8(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function md(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function pd(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=Al(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var z8=new Set(["nav","header","main","section","article","footer","aside"]),rp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},px={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},$8=new Set(["script","style","noscript","link","meta"]),I8=40;function t2(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Pr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Pr(i)} > ${n}:nth-child(${c})`}return n}function Wd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&rp[a])return rp[a];if(px[n])return px[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=jl(t);return u.charAt(0).toUpperCase()+u.slice(1)}function n2(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function s2(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function P8(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if($8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<I8)return;const y=z8.has(d),g=c.getAttribute("role")&&rp[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,w=t2(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Wd(c),tagName:d,selector:Pr(c),role:c.getAttribute("role"),className:n2(c),textSnippet:s2(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function H8(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=t2(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Wd(t),tagName:t.tagName.toLowerCase(),selector:Pr(t),role:t.getAttribute("role"),className:n2(t),textSnippet:s2(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var _x={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},gx=["nw","n","ne","e","se","s","sw","w"],_d=24,yx=16,gd=5;function xx(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const Z=W.x,he=W.x+W.width,pe=W.x+W.width/2,be=W.y,Ne=W.y+W.height,Ze=W.y+W.height/2;for(const re of[d,h,p])for(const ie of[Z,he,pe]){const L=ie-re;Math.abs(L)<gd&&Math.abs(L)<Math.abs(c)&&(c=L)}for(const re of[y,g,x])for(const ie of[be,Ne,Ze]){const L=ie-re;Math.abs(L)<gd&&Math.abs(L)<Math.abs(u)&&(u=L)}}const w=Math.abs(c)<gd?c:0,S=Math.abs(u)<gd?u:0,j=[],k=new Set,T=d+w,U=h+w,R=p+w,M=y+S,q=g+S,G=x+S;for(const W of b){const Z=W.x,he=W.x+W.width,pe=W.x+W.width/2,be=W.y,Ne=W.y+W.height,Ze=W.y+W.height/2;for(const re of[Z,pe,he])for(const ie of[T,R,U])if(Math.abs(ie-re)<.5){const L=`x:${Math.round(re)}`;k.has(L)||(k.add(L),j.push({axis:"x",pos:re}))}for(const re of[be,Ze,Ne])for(const ie of[M,G,q])if(Math.abs(ie-re)<.5){const L=`y:${Math.round(re)}`;k.has(L)||(k.add(L),j.push({axis:"y",pos:re}))}}return{dx:w,dy:S,guides:j}}var U8=new Set(["script","style","noscript","link","meta","br","hr"]);function bx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(U8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=yx&&i.height>=yx)return n;n=n.parentElement}return null}function V8({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,w=_.useRef(t);w.current=t;const[S,j]=_.useState(new Set),[k,T]=_.useState(!1),U=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==U.current&&(U.current=x,b.length>0&&T(!0))},[x,b.length]);const R=_.useRef(p);_.useEffect(()=>{p!==R.current&&(R.current=p,j(new Set))},[p]);const[M,q]=_.useState(null),[G,W]=_.useState(!1),Z=_.useRef(!1),he=_.useCallback(Y=>{const te=b.find(ve=>ve.id===Y);te&&(Z.current=!!te.note,q(Y),W(!1))},[b]),pe=_.useCallback(()=>{M&&(W(!0),Gt(()=>{q(null),W(!1)},150))},[M]),be=_.useCallback(Y=>{M&&(n({...t,sections:b.map(te=>te.id===M?{...te,note:Y.trim()||void 0}:te)}),pe())},[M,b,t,n,pe]);_.useEffect(()=>{a&&M&&pe()},[a]);const[Ne,Ze]=_.useState(new Set),re=_.useRef(new Map),[ie,L]=_.useState(null),[ae,F]=_.useState(null),[me,Ee]=_.useState([]),[$,le]=_.useState(0),ne=_.useRef(null),Se=_.useRef(new Set),De=_.useRef(new Map),[_e,Le]=_.useState(new Map),[ot,Ie]=_.useState(new Map),kt=_.useRef(new Set),Ot=_.useRef(new Map),yt=_.useRef(h);yt.current=h;const et=_.useRef(y);et.current=y;const lt=_.useRef(g);lt.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[Pt,an]=_.useState(()=>!t.sections.some(Y=>{const te=Y.originalRect,ve=Y.currentRect;return Math.abs(te.x-ve.x)>1||Math.abs(te.y-ve.y)>1||Math.abs(te.width-ve.width)>1||Math.abs(te.height-ve.height)>1}));_.useEffect(()=>{if(!Pt){const Y=Gt(()=>an(!0),380);return()=>clearTimeout(Y)}},[]);const tn=_.useRef(new Set);_.useEffect(()=>{tn.current=new Set(b.map(Y=>Y.selector))},[b]),_.useEffect(()=>{const Y=()=>le(window.scrollY);return Y(),window.addEventListener("scroll",Y,{passive:!0}),window.addEventListener("resize",Y,{passive:!0}),()=>{window.removeEventListener("scroll",Y),window.removeEventListener("resize",Y)}},[]),_.useEffect(()=>{const Y=te=>{if(ne.current){L(null);return}const ve=document.elementFromPoint(te.clientX,te.clientY);if(!ve){L(null);return}if(ve.closest("[data-feedback-toolbar]")){L(null);return}if(ve.closest("[data-design-placement]")){L(null);return}if(ve.closest("[data-annotation-popup]")){L(null);return}const Ae=bx(ve);if(!Ae){L(null);return}for(const qe of tn.current)try{const Be=document.querySelector(qe);if(Be&&(Be===Ae||Ae.contains(Be))){L(null);return}}catch{}const rt=Ae.getBoundingClientRect();L({x:rt.x,y:rt.y,w:rt.width,h:rt.height})};return document.addEventListener("mousemove",Y,{passive:!0}),()=>document.removeEventListener("mousemove",Y)},[b]),_.useEffect(()=>{const Y=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=Y}},[]),_.useEffect(()=>{const Y=te=>{var Be,ge,tt,Fe;if(ne.current||te.button!==0)return;const ve=te.target;if(!ve||ve.closest("[data-feedback-toolbar]")||ve.closest("[data-design-placement]")||ve.closest("[data-annotation-popup]"))return;const Ae=bx(ve);let rt=!1;if(Ae)for(const Je of tn.current)try{const Re=document.querySelector(Je);if(Re&&(Re===Ae||Ae.contains(Re))){rt=!0;break}}catch{}const qe=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(Ae&&!rt){te.preventDefault(),te.stopPropagation();const Je=H8(Ae),Re=[...b,Je],nt=[...t.originalOrder,Je.id];n({...t,sections:Re,originalOrder:nt});const St=new Set([Je.id]);j(St),(Be=yt.current)==null||Be.call(yt,St,qe),L(null);const Ct=te.clientX,st=te.clientY,Lt={x:Je.currentRect.x,y:Je.currentRect.y};Je.originalRect;let jt=!1,_t=0,dn=0;ne.current="move";const pt=nn=>{var It;const zt=nn.clientX-Ct,vt=nn.clientY-st;if(!jt&&(Math.abs(zt)>2||Math.abs(vt)>2)&&(jt=!0),!jt)return;const qt={x:Lt.x+zt,y:Lt.y+vt,width:Je.currentRect.width,height:Je.currentRect.height},rn=xx(qt,Re,new Set([Je.id]),d);Ee(rn.guides);const fn=zt+rn.dx,Nt=vt+rn.dy;_t=fn,dn=Nt;const yn=document.querySelector(`[data-rearrange-section="${Je.id}"]`);yn&&(yn.style.transform=`translate(${fn}px, ${Nt}px)`),Le(new Map([[Je.id,{x:Lt.x+fn,y:Lt.y+Nt,width:Je.currentRect.width,height:Je.currentRect.height}]])),(It=et.current)==null||It.call(et,fn,Nt)},Ht=()=>{var zt;window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",Ht),ne.current=null,Ee([]),Le(new Map);const nn=document.querySelector(`[data-rearrange-section="${Je.id}"]`);nn&&(nn.style.transform=""),jt&&n({...t,sections:Re.map(vt=>vt.id===Je.id?{...vt,currentRect:{...vt.currentRect,x:Math.max(0,Lt.x+_t),y:Math.max(0,Lt.y+dn)}}:vt),originalOrder:nt}),(zt=lt.current)==null||zt.call(lt,_t,dn,jt)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",Ht)}else if(rt&&Ae){te.preventDefault();for(const Je of b)try{const Re=document.querySelector(Je.selector);if(Re&&Re===Ae){const nt=new Set([Je.id]);j(nt),(ge=yt.current)==null||ge.call(yt,nt,qe);return}}catch{}qe||(j(new Set),(tt=yt.current)==null||tt.call(yt,new Set,!1))}else qe||(j(new Set),(Fe=yt.current)==null||Fe.call(yt,new Set,!1))};return document.addEventListener("mousedown",Y,!0),()=>document.removeEventListener("mousedown",Y,!0)},[b,t,n]),_.useEffect(()=>{const Y=te=>{const ve=te.target;if(!(ve.tagName==="INPUT"||ve.tagName==="TEXTAREA"||ve.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&S.size>0){te.preventDefault();const Ae=new Set(S);Ze(rt=>{const qe=new Set(rt);for(const Be of Ae)qe.add(Be);return qe}),j(new Set),Gt(()=>{const rt=w.current;n({...rt,sections:rt.sections.filter(qe=>!Ae.has(qe.id)),originalOrder:rt.originalOrder.filter(qe=>!Ae.has(qe))}),Ze(qe=>{const Be=new Set(qe);for(const ge of Ae)Be.delete(ge);return Be})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&S.size>0){te.preventDefault();const Ae=te.shiftKey?20:1,rt=te.key==="ArrowLeft"?-Ae:te.key==="ArrowRight"?Ae:0,qe=te.key==="ArrowUp"?-Ae:te.key==="ArrowDown"?Ae:0;n({...t,sections:b.map(Be=>S.has(Be.id)?{...Be,currentRect:{...Be.currentRect,x:Math.max(0,Be.currentRect.x+rt),y:Math.max(0,Be.currentRect.y+qe)}}:Be)});return}te.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[S,b,t,n]);const J=_.useCallback((Y,te)=>{var Ct;if(Y.button!==0)return;const ve=Y.target;if(ve.closest(`.${Pe.handle}`)||ve.closest(`.${Pe.deleteButton}`))return;Y.preventDefault(),Y.stopPropagation();let Ae;Y.shiftKey||Y.metaKey||Y.ctrlKey?(Ae=new Set(S),Ae.has(te)?Ae.delete(te):Ae.add(te)):S.has(te)?Ae=new Set(S):Ae=new Set([te]),j(Ae),(Ae.size!==S.size||[...Ae].some(st=>!S.has(st)))&&((Ct=yt.current)==null||Ct.call(yt,Ae,!!(Y.shiftKey||Y.metaKey||Y.ctrlKey)));const qe=Y.clientX,Be=Y.clientY,ge=new Map;for(const st of b)Ae.has(st.id)&&ge.set(st.id,{x:st.currentRect.x,y:st.currentRect.y});ne.current="move";let tt=!1,Fe=0,Je=0;const Re=new Map;for(const st of b)if(Ae.has(st.id)){const Lt=document.querySelector(`[data-rearrange-section="${st.id}"]`);Re.set(st.id,{outlineEl:Lt,curW:st.currentRect.width,curH:st.currentRect.height})}const nt=st=>{var rn;const Lt=st.clientX-qe,jt=st.clientY-Be;if(Lt===0&&jt===0)return;tt=!0;let _t=1/0,dn=1/0,pt=-1/0,Ht=-1/0;for(const[fn,{curW:Nt,curH:yn}]of Re){const It=ge.get(fn);if(!It)continue;const xn=It.x+Lt,at=It.y+jt;_t=Math.min(_t,xn),dn=Math.min(dn,at),pt=Math.max(pt,xn+Nt),Ht=Math.max(Ht,at+yn)}const nn=xx({x:_t,y:dn,width:pt-_t,height:Ht-dn},b,Ae,d),zt=Lt+nn.dx,vt=jt+nn.dy;Fe=zt,Je=vt,Ee(nn.guides);for(const[,{outlineEl:fn}]of Re)fn&&(fn.style.transform=`translate(${zt}px, ${vt}px)`);const qt=new Map;for(const[fn,{curW:Nt,curH:yn}]of Re){const It=ge.get(fn);if(It){const xn={x:Math.max(0,It.x+zt),y:Math.max(0,It.y+vt),width:Nt,height:yn};qt.set(fn,xn)}}Le(qt),(rn=et.current)==null||rn.call(et,zt,vt)},St=st=>{var Lt,jt;window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",St),ne.current=null,Ee([]),Le(new Map);for(const[,{outlineEl:_t}]of Re)_t&&(_t.style.transform="");if(tt){const _t=st.clientX-qe,dn=st.clientY-Be;if(Math.abs(_t)<5&&Math.abs(dn)<5)n({...t,sections:b.map(pt=>{const Ht=ge.get(pt.id);return Ht?{...pt,currentRect:{...pt.currentRect,x:Ht.x,y:Ht.y}}:pt})});else{n({...t,sections:b.map(pt=>{const Ht=ge.get(pt.id);return Ht?{...pt,currentRect:{...pt.currentRect,x:Math.max(0,Ht.x+Fe),y:Math.max(0,Ht.y+Je)}}:pt})}),(Lt=lt.current)==null||Lt.call(lt,Fe,Je,!0);return}}(jt=lt.current)==null||jt.call(lt,0,0,!1)};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",St)},[S,b,t,n]),Oe=_.useCallback((Y,te,ve)=>{Y.preventDefault(),Y.stopPropagation();const Ae=b.find(nt=>nt.id===te);if(!Ae)return;j(new Set([te])),ne.current="resize";const rt=Y.clientX,qe=Y.clientY,Be={...Ae.currentRect};Ae.originalRect;const ge=Be.width/Be.height;let tt={...Be};const Fe=document.querySelector(`[data-rearrange-section="${te}"]`),Je=nt=>{const St=nt.clientX-rt,Ct=nt.clientY-qe;let st=Be.x,Lt=Be.y,jt=Be.width,_t=Be.height;if(ve.includes("e")&&(jt=Math.max(_d,Be.width+St)),ve.includes("w")&&(jt=Math.max(_d,Be.width-St),st=Be.x+Be.width-jt),ve.includes("s")&&(_t=Math.max(_d,Be.height+Ct)),ve.includes("n")&&(_t=Math.max(_d,Be.height-Ct),Lt=Be.y+Be.height-_t),nt.shiftKey)if(ve.length===2){const pt=Math.abs(jt-Be.width),Ht=Math.abs(_t-Be.height);pt>Ht?_t=jt/ge:jt=_t*ge,ve.includes("w")&&(st=Be.x+Be.width-jt),ve.includes("n")&&(Lt=Be.y+Be.height-_t)}else ve==="e"||ve==="w"?_t=jt/ge:jt=_t*ge,ve==="w"&&(st=Be.x+Be.width-jt),ve==="n"&&(Lt=Be.y+Be.height-_t);tt={x:st,y:Lt,width:jt,height:_t},Fe&&(Fe.style.left=`${st}px`,Fe.style.top=`${Lt-$}px`,Fe.style.width=`${jt}px`,Fe.style.height=`${_t}px`),F({x:nt.clientX+12,y:nt.clientY+12,text:`${Math.round(jt)} × ${Math.round(_t)}`}),Le(new Map([[te,tt]]))},Re=()=>{window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",Re),F(null),ne.current=null,Le(new Map),n({...t,sections:b.map(nt=>nt.id===te?{...nt,currentRect:tt}:nt)})};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",Re)},[b,t,n,$]),mt=_.useCallback(Y=>{Ze(te=>{const ve=new Set(te);return ve.add(Y),ve}),j(te=>{const ve=new Set(te);return ve.delete(Y),ve}),Gt(()=>{const te=w.current;n({...te,sections:te.sections.filter(ve=>ve.id!==Y),originalOrder:te.originalOrder.filter(ve=>ve!==Y)}),Ze(ve=>{const Ae=new Set(ve);return Ae.delete(Y),Ae})},180)},[n]),je=Y=>{const te=Y.originalRect,ve=Y.currentRect;return Math.abs(te.x-ve.x)>1||Math.abs(te.y-ve.y)>1||Math.abs(te.width-ve.width)>1||Math.abs(te.height-ve.height)>1},Ke=Y=>{const te=Y.originalRect,ve=Y.currentRect;return Math.abs(te.x-ve.x)>1||Math.abs(te.y-ve.y)>1},it=Y=>{const te=Y.originalRect,ve=Y.currentRect;return Math.abs(te.width-ve.width)>1||Math.abs(te.height-ve.height)>1};for(const Y of b)De.current.has(Y.id)||(Ke(Y)?De.current.set(Y.id,"move"):it(Y)&&De.current.set(Y.id,"resize"));for(const Y of De.current.keys())b.some(te=>te.id===Y)||De.current.delete(Y);const gt=b.filter(Y=>{try{if(Ne.has(Y.id)||S.has(Y.id))return!0;const te=document.querySelector(Y.selector);if(!te)return!1;const ve=te.getBoundingClientRect(),Ae=Y.originalRect;return Math.abs(ve.width-Ae.width)+Math.abs(ve.height-Ae.height)<200}catch{return!1}}),xt=gt.filter(Y=>je(Y)),Et=gt.filter(Y=>!je(Y)),Bt=new Set(xt.map(Y=>Y.id));for(const Y of Se.current)Bt.has(Y)||Se.current.delete(Y);const ct=[...Bt].sort().join(",");for(const Y of xt)Ot.current.set(Y.id,{currentRect:Y.currentRect,originalRect:Y.originalRect,isFixed:Y.isFixed});return _.useEffect(()=>{const Y=kt.current;kt.current=Bt;const te=new Map;for(const ve of Y)if(!Bt.has(ve)){if(!b.some(rt=>rt.id===ve))continue;const Ae=Ot.current.get(ve);Ae&&(te.set(ve,{orig:Ae.originalRect,target:Ae.currentRect,isFixed:Ae.isFixed}),Ot.current.delete(ve))}if(te.size>0){Ie(Ae=>{const rt=new Map(Ae);for(const[qe,Be]of te)rt.set(qe,Be);return rt});const ve=Gt(()=>{Ie(Ae=>{const rt=new Map(Ae);for(const qe of te.keys())rt.delete(qe);return rt})},250);return()=>clearTimeout(ve)}},[ct,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Pe.rearrangeOverlay} ${i?"":Pe.light} ${a?Pe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ie&&l.jsx("div",{className:Pe.hoverHighlight,style:{left:ie.x,top:ie.y,width:ie.w,height:ie.h}}),Et.map(Y=>{const te=Y.currentRect,ve=Y.isFixed?te.y:te.y-$,Ae=_x,rt=S.has(Y.id);return l.jsxs("div",{"data-rearrange-section":Y.id,className:`${Pe.sectionOutline} ${rt?Pe.selected:""} ${k||a||Ne.has(Y.id)?Pe.exiting:""}`,style:{left:te.x,top:ve,width:te.width,height:te.height,borderColor:Ae.border,backgroundColor:Ae.bg,...Pt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:qe=>J(qe,Y.id),onDoubleClick:()=>he(Y.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:Ae.pill},children:Y.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${Y.note?Pe.annotationVisible:""}`,children:(Y.note&&re.current.set(Y.id,Y.note),Y.note||re.current.get(Y.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:qe=>qe.stopPropagation(),onClick:()=>mt(Y.id),children:"✕"}),gx.map(qe=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${qe.charAt(0).toUpperCase()}${qe.slice(1)}`]}`,onMouseDown:Be=>Oe(Be,Y.id,qe)},qe))]},Y.id)}),xt.map(Y=>{const te=Y.currentRect,ve=Y.isFixed?te.y:te.y-$,Ae=S.has(Y.id),rt=Ke(Y),qe=it(Y);if(u&&!Ae)return null;const ge=!Se.current.has(Y.id);return ge&&Se.current.add(Y.id),l.jsxs("div",{"data-rearrange-section":Y.id,className:`${Pe.ghostOutline} ${Ae?Pe.selected:""} ${k||a||Ne.has(Y.id)?Pe.exiting:""}`,style:{left:te.x,top:ve,width:te.width,height:te.height,...Pt?{}:{opacity:0,animation:"none",transition:"none"},...ge?{}:{animation:"none"}},onMouseDown:tt=>J(tt,Y.id),onDoubleClick:()=>he(Y.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:_x.pill},children:Y.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${Y.note?Pe.annotationVisible:""}`,children:(Y.note&&re.current.set(Y.id,Y.note),Y.note||re.current.get(Y.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:tt=>tt.stopPropagation(),onClick:()=>mt(Y.id),children:"✕"}),gx.map(tt=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${tt.charAt(0).toUpperCase()}${tt.slice(1)}`]}`,onMouseDown:Fe=>Oe(Fe,Y.id,tt)},tt)),l.jsx("span",{className:Pe.ghostBadge,children:(()=>{const tt=De.current.get(Y.id);if(rt&&qe){const[Fe,Je]=tt==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Fe," ",l.jsxs("span",{className:Pe.ghostBadgeExtra,children:["& ",Je]})]})}return`Suggested ${qe?"Resize":"Move"}`})()})]},Y.id)})]}),!u&&(()=>{const Y=[];for(const te of xt){const ve=_e.get(te.id);Y.push({id:te.id,orig:te.originalRect,target:ve||te.currentRect,isFixed:te.isFixed,isSelected:S.has(te.id),isExiting:Ne.has(te.id)})}for(const[te,ve]of _e)if(!Y.some(Ae=>Ae.id===te)){const Ae=b.find(rt=>rt.id===te);Ae&&Y.push({id:te,orig:Ae.originalRect,target:ve,isFixed:Ae.isFixed,isSelected:S.has(te)})}for(const[te,ve]of ot)Y.some(Ae=>Ae.id===te)||Y.push({id:te,orig:ve.orig,target:ve.target,isFixed:ve.isFixed,isSelected:!1,isExiting:!0});return Y.length===0?null:l.jsxs("svg",{className:`${Pe.connectorSvg} ${k||a?Pe.connectorExiting:""}`,children:[Y.map(({id:te,orig:ve,target:Ae,isFixed:rt,isSelected:qe,isExiting:Be})=>{const ge=ve.x+ve.width/2,tt=(rt?ve.y:ve.y-$)+ve.height/2,Fe=Ae.x+Ae.width/2,Je=(rt?Ae.y:Ae.y-$)+Ae.height/2,Re=Fe-ge,nt=Je-tt,St=Math.sqrt(Re*Re+nt*nt);if(St<2)return null;const Ct=Math.min(1,St/40),st=Math.min(St*.3,60),Lt=St>0?-nt/St:0,jt=St>0?Re/St:0,_t=(ge+Fe)/2+Lt*st,dn=(tt+Je)/2+jt*st,pt=_e.has(te),Ht=pt||qe?1:.4,nn=pt||qe?1:.5;return l.jsxs("g",{className:Be?Pe.connectorExiting:"",children:[l.jsx("path",{className:Pe.connectorLine,d:`M ${ge} ${tt} Q ${_t} ${dn} ${Fe} ${Je}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ht*Ct}),l.jsx("circle",{className:Pe.connectorDot,cx:ge,cy:tt,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*Ct,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Pe.connectorDot,cx:Fe,cy:Je,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*Ct,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),M&&(()=>{var Je;const Y=b.find(Re=>Re.id===M);if(!Y)return null;const te=Y.currentRect,ve=Y.isFixed?te.y:te.y-$,Ae=te.x+te.width/2,rt=ve-8,qe=ve+te.height+8,Be=rt>200,ge=qe<window.innerHeight-100,tt=Math.max(160,Math.min(window.innerWidth-160,Ae));let Fe;return Be?Fe={left:tt,bottom:window.innerHeight-rt}:ge?Fe={left:tt,top:qe}:Fe={left:tt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Yd,{element:Y.label,placeholder:"Add a note about this section",initialValue:(Je=Y.note)!=null?Je:"",submitLabel:Z.current?"Save":"Set",onSubmit:be,onCancel:pe,onDelete:Z.current?()=>{be("")}:void 0,isExiting:G,lightMode:!i,style:Fe})})(),ae&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),me.map((Y,te)=>l.jsx("div",{className:Pe.guideLine,style:Y.axis==="x"?{position:"fixed",left:Y.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:Y.pos-$,width:"100vw",height:1}},`${Y.axis}-${Y.pos}-${te}`))]})}var lp=new Set(["script","style","noscript","link","meta","br","hr"]);function Y8(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||lp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Wd(c),selector:Pr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||lp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Wd(h),selector:Pr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function W8(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function F8(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function cp(t,n){const i=n?W8(n):Y8(),a=F8(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const T=Math.round(a.top-S.bottom);(!c||T<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(j&&S.top>=a.bottom-5){const T=Math.round(S.top-a.bottom);(!u||T<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(k&&S.right<=a.left+5){const T=Math.round(a.left-S.right);(!d||T<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(k&&S.left>=a.right-5){const T=Math.round(S.left-a.right);(!h||T<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,x=G8(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=X8(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function X8(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function G8(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function o2(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function i2(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=o2(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function q8(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(o2(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var vx=15;function wx(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<vx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<vx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function K8(t){var d;if(t.length<2)return[];const n=wx(t.map(h=>({label:h.label,rect:h.originalRect}))),i=wx(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function a2(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||lp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Pr(h)}}}return{viewport:t,contentArea:null}}function Q8(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Pr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function r2(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function l2(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function Z8(t){const n=Q8(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Sx(t,n,i,a="standard"){var k,T,U,R;if(t.length===0)return"";const c=[...t].sort((M,q)=>Math.abs(M.y-q.y)<20?M.x-q.x:M.y-q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((M,q)=>{var W;const G=((W=oa[M.type])==null?void 0:W.label)||M.type;u+=`${q+1}. **${G}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}),u;const d=a2(n);u+=l2(d),u+=`### Components
`,c.forEach((M,q)=>{var Ne;const G=((Ne=oa[M.type])==null?void 0:Ne.label)||M.type,W={x:M.x,y:M.y,width:M.width,height:M.height};u+=`${q+1}. **${G}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`;const Z=cp(W),pe=i2(Z,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ze of pe)u+=`   - ${Ze}
`;const be=r2(W,d);be&&(u+=`   - CSS: ${be}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const M of c){const q=h.find(G=>Math.abs(G.y-M.y)<30);q?q.items.push(M):h.push({y:M.y,items:[M]})}if(h.sort((M,q)=>M.y-q.y),h.forEach((M,q)=>{M.items.sort((W,Z)=>W.x-Z.x);const G=M.items.map(W=>{var Z;return((Z=oa[W.type])==null?void 0:Z.label)||W.type});if(M.items.length===1){const Z=M.items[0].width>n.width*.8;u+=`- Row ${q+1} (y≈${Math.round(M.y)}): ${G[0]}${Z?" — full width":""}
`}else u+=`- Row ${q+1} (y≈${Math.round(M.y)}): ${G.join(" | ")} — ${M.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let M=0;M<c.length-1;M++){const q=c[M],G=c[M+1],W=((k=oa[q.type])==null?void 0:k.label)||q.type,Z=((T=oa[G.type])==null?void 0:T.label)||G.type,he=Math.round(G.y-(q.y+q.height)),pe=Math.round(G.x-(q.x+q.width));Math.abs(q.y-G.y)<30?u+=`- ${W} → ${Z}: \`${pe}px\` horizontal gap
`:u+=`- ${W} → ${Z}: \`${he}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let M=0;M<c.length;M++)for(let q=M+1;q<c.length;q++){const G=c[M],W=c[q],Z=((U=oa[G.type])==null?void 0:U.label)||G.type,he=((R=oa[W.type])==null?void 0:R.label)||W.type,pe=Math.round(W.y-(G.y+G.height)),be=Math.round(W.x-(G.x+G.width));u+=`- ${Z} ↔ ${he}: h=\`${be}px\` v=\`${pe}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((M,q)=>{var W;const G=((W=oa[M.type])==null?void 0:W.label)||M.type;u+=`${q}. ${G} at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(M=>M.type==="navigation"),y=c.some(M=>M.type==="hero"),g=c.some(M=>M.type==="sidebar"),x=c.some(M=>M.type==="footer"),b=c.filter(M=>M.type==="card"),w=c.filter(M=>M.type==="form"),S=c.filter(M=>M.type==="table"),j=c.filter(M=>M.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const M=c.find(q=>q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(M.width)}px 1fr;\`
`}if(b.length>1){const M=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${M}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Cx(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=a2({width:d,height:h});n!=="compact"&&(u+=l2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=cp(w,y("original")),T=cp(S,y("current")),U=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${q8(k,{x:w.x,y:w.y},U)}
`;const R=b?{width:S.width,height:S.height}:void 0,M=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,q=R?`, ${Math.round(R.width)}×${Math.round(R.height)}px`:"",W=i2(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${M}${q}: ${W[0]}
`;for(let he=1;he<W.length;he++)u+=`    ${W[he]}
`}else u+=`  - Suggested position ${M}${q}
`;const Z=r2(S,p);Z&&(u+=`  - CSS: ${Z}
`)}const j=Z8(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const k=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;k!==g.selector&&(u+=`  - Element: \`${k}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=K8(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var up="feedback-annotations-",c2=7;function Fd(t){return`${up}${t}`}function bm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Fd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-c2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function u2(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Fd(t),JSON.stringify(n))}catch{}}function J8(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-c2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(up)){const c=a.slice(up.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function Cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));u2(t,a)}var Gp="agentation-design-";function eM(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Gp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function tM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Gp}${t}`,JSON.stringify(n))}catch{}}function nM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Gp}${t}`)}catch{}}var qp="agentation-rearrange-";function sM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${qp}${t}`);return n?JSON.parse(n):null}catch{return null}}function oM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${qp}${t}`,JSON.stringify(n))}catch{}}function iM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${qp}${t}`)}catch{}}var Kp="agentation-wireframe-";function aM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Kp}${t}`);return n?JSON.parse(n):null}catch{return null}}function kx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Kp}${t}`,JSON.stringify(n))}catch{}}function yd(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Kp}${t}`)}catch{}}var d2="agentation-session-";function Qp(t){return`${d2}${t}`}function rM(t){if(typeof window>"u")return null;try{return localStorage.getItem(Qp(t))}catch{return null}}function vm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Qp(t),n)}catch{}}function lM(t){if(!(typeof window>"u"))try{localStorage.removeItem(Qp(t))}catch{}}var f2=`${d2}toolbar-hidden`;function cM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(f2)==="1"}catch{return!1}}function uM(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(f2,"1")}catch{}}async function wm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function jx(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function xl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Mx(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function rr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var qn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ex=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Tx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],dM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function fM(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Ex;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Ex,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Tx,...t.skipPatterns]:Tx,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:dM,filter:t==null?void 0:t.filter}}function hM(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function mM(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function pM(t,n){const i=hM(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function _M(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&pM(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var bl=null,gM=new WeakMap;function Sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function yM(){if(bl!==null)return bl;if(typeof document>"u")return!1;if(document.body&&Sm(document.body))return bl=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&Sm(i))return bl=!0,!0}if(document.body){for(const n of document.body.children)if(Sm(n))return bl=!0,!0}return bl=!1,!1}var kc={map:gM};function xM(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function bM(t){const n=xM(t);return n?t[n]:null}function Ar(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function vM(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===qn.HostComponent||n===qn.HostText||n===qn.HostHoistable||n===qn.HostSingleton||n===qn.Fragment||n===qn.Mode||n===qn.Profiler||n===qn.DehydratedFragment||n===qn.HostRoot||n===qn.HostPortal||n===qn.ScopeComponent||n===qn.OffscreenComponent||n===qn.LegacyHiddenComponent||n===qn.CacheComponent||n===qn.TracingMarkerComponent||n===qn.Throw||n===qn.ViewTransitionComponent||n===qn.ActivityComponent)return null;if(n===qn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Ar(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Ar(i)}if(n===qn.MemoComponent||n===qn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Ar(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Ar(i)}if(n===qn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===qn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===qn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Ar(u._result):null}return n===qn.SuspenseComponent||n===qn.SuspenseListComponent?null:n===qn.IncompleteClassComponent||n===qn.IncompleteFunctionComponent||n===qn.FunctionComponent||n===qn.ClassComponent||n===qn.IndeterminateComponent?Ar(i):null}function wM(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function SM(t,n){const i=fM(n),a=i.mode==="all";if(a){const p=kc.map.get(t);if(p!==void 0)return p}if(!yM()){const p={path:null,components:[]};return a&&kc.map.set(t,p),p}const c=i.mode==="smart"?mM(t):void 0,u=[];try{let p=bM(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=vM(p);g&&!wM(g)&&_M(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&kc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&kc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&kc.map.set(t,h),h}var jc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function CM(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Xc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function kM(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Xc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Xc(i._debugOwner)};i=i.return,a++}return null}function jM(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Xc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Xc(n)}}}n=n.return,i++}return null}var xd=new Map;function MM(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===jc.FunctionComponent||n===jc.IndeterminateComponent)&&typeof i=="function")return i;if(n===jc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===jc.MemoComponent||n===jc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function EM(){const t=Wv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function TM(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function AM(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function DM(t){const n=MM(t);if(!n)return null;if(xd.has(n))return xd.get(n);const i=EM();if(!i)return xd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=TM(d.stack);h&&(c={fileName:AM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Xc(t)||void 0})}}}finally{i.set(a)}return xd.set(n,c),c}function NM(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=DM(i);if(c)return c;i=i.return,a++}return null}function dp(t){const n=CM(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=kM(n);if(i||(i=jM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=NM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function RM(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function BM(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=dp(i);if(c.found)return c;i=i.parentElement,a++}return dp(t)}var LM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,OM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=LM}var Qe=OM,Mc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ax(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var zM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,$M={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=zM}var to=$M;function Dx({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const T=(h||p)&&!y,U=T&&x==="delete",R=t.isMultiSelect,M=R?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=c?to.exit:u?to.clearing:d?"":to.enter,G=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${to.marker} ${R?to.multiSelect:""} ${q} ${U?to.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:U?void 0:M,animationDelay:G},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:W=>{W.stopPropagation(),c||j(t)},onContextMenu:k?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||k(t))}:void 0,children:[T?U?l.jsx(Q5,{size:R?18:16}):l.jsx(Q3,{size:16}):l.jsx("span",{className:g!==null&&n>=g?to.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${to.markerTooltip} ${to.enter}`,style:b,children:[l.jsxs("span",{className:to.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:to.markerNote,children:t.comment})]})]})}function IM({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${to.marker} ${to.pending} ${i?to.multiSelect:""} ${a?to.exit:to.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(I3,{size:12})})}function Nx({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${to.marker} ${n?to.fixed:""} ${to.hovered} ${i?to.multiSelect:""} ${to.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Q5,{size:i?12:10})})}var PM=`.styles-module__switchContainer___Ka-AB {
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
}`,HM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=PM}var Cm=HM,km=({className:t="",...n})=>l.jsxs("div",{className:`${Cm.switchContainer} ${t}`,children:[l.jsx("input",{className:Cm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Cm.switchThumb})]}),UM=`.styles-module__checkboxContainer___joqZk {
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
}`,VM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=UM}var bd=VM,YM=({className:t="",...n})=>l.jsxs("div",{className:`${bd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:bd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:bd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:bd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),WM=`.styles-module__container___w8eAF {
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
}`,FM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=WM}var Rx=FM,Bx=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Rx.container} ${t}`,...u,children:[l.jsx(YM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Rx.label,htmlFor:d,children:n}),i&&l.jsx(Lr,{content:i})]})},XM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,GM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=XM}var Tt=GM;function qM({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Tt.settingsPanel} ${h?Tt.enter:Tt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Tt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Tt.settingsPage} ${y==="automations"?Tt.slideLeft:""}`,children:[l.jsxs("div",{className:Tt.settingsHeader,children:[l.jsx("a",{className:Tt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Tt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Tt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Tt.themeIconWrapper,children:l.jsx("span",{className:Tt.themeIcon,children:i?l.jsx(q3,{size:20}):l.jsx(K3,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Output Detail",l.jsx(Lr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Tt.cycleButton,onClick:()=>{const S=(Mc.findIndex(j=>j.value===t.outputDetail)+1)%Mc.length;n({outputDetail:Mc[S].value})},children:[l.jsx("span",{className:Tt.cycleButtonText,children:(b=Mc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Tt.cycleDots,children:Mc.map(w=>l.jsx("span",{className:`${Tt.cycleDot} ${t.outputDetail===w.value?Tt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop} ${c?"":Tt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["React Components",l.jsx(Lr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(km,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Hide Until Restart",l.jsx(Lr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(km,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx("div",{className:`${Tt.settingsLabel} ${Tt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Tt.colorOptions,children:Pc.map(w=>l.jsx("button",{className:`${Tt.colorOption} ${t.annotationColorId===w.id?Tt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx(Bx,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Bx,{className:Tt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("button",{className:Tt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Tt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Tt.mcpNavIndicator} ${Tt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Tt.settingsPage} ${Tt.automationsPage} ${y==="automations"?Tt.slideIn:""}`,children:[l.jsxs("button",{className:Tt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(J3,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["MCP Connection",l.jsx(Lr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Tt.mcpStatusDot} ${Tt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Tt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Tt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:`${Tt.settingsSection} ${Tt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["Webhooks",l.jsx(Lr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Tt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Tt.autoSendLabel} ${t.webhooksEnabled?Tt.active:""} ${t.webhookUrl?"":Tt.disabled}`,children:"Auto-Send"}),l.jsx(km,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Tt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Tt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function jm(t,n="filtered"){const{name:i,path:a}=jl(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=SM(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Lx=!1,Mm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ha=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Pc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],KM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Pc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Pc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Pc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};KM();function Dr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function Em(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Nr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function vd(t){const n=dp(t),i=n.found?n:BM(t);if(i.found&&i.source)return RM(i.source,"path")}function QM({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var ee,fe,He,Ge,wt,sn,ks;const[j,k]=_.useState(!1),[T,U]=_.useState([]),[R,M]=_.useState(!0),[q,G]=_.useState(()=>cM()),[W,Z]=_.useState(!1),he=_.useRef(null);_.useEffect(()=>{const D=I=>{const V=he.current;V&&V.contains(I.target)&&I.stopPropagation()},B=["mousedown","click","pointerdown"];return B.forEach(I=>document.body.addEventListener(I,D)),()=>{B.forEach(I=>document.body.removeEventListener(I,D))}},[]);const[pe,be]=_.useState(!1),[Ne,Ze]=_.useState(!1),[re,ie]=_.useState(null),[L,ae]=_.useState({x:0,y:0}),[F,me]=_.useState(null),[Ee,$]=_.useState(!1),[le,ne]=_.useState("idle"),[Se,De]=_.useState(!1),[_e,Le]=_.useState(!1),[ot,Ie]=_.useState(null),[kt,Ot]=_.useState(null),[yt,et]=_.useState([]),[lt,Pt]=_.useState(null),[an,tn]=_.useState(null),[J,Oe]=_.useState(null),[mt,je]=_.useState(null),[Ke,it]=_.useState([]),[gt,xt]=_.useState(0),[Et,Bt]=_.useState(!1),[ct,Y]=_.useState(!1),[te,ve]=_.useState(!1),[Ae,rt]=_.useState(!1),[qe,Be]=_.useState(!1),[ge,tt]=_.useState("main"),[Fe,Je]=_.useState(!1),[Re,nt]=_.useState(!1),[St,Ct]=_.useState(!1),[st,Lt]=_.useState([]),[jt,_t]=_.useState(null),dn=_.useRef(!1),[pt,Ht]=_.useState(!1),[nn,zt]=_.useState(!1),[vt,qt]=_.useState(1),[rn,fn]=_.useState("new-page"),[Nt,yn]=_.useState(""),[It,xn]=_.useState(!1),[at,Kn]=_.useState(null),Ls=_.useRef(!1),No=_.useRef({rearrange:null,placements:[]}),So=_.useRef({rearrange:null,placements:[]}),[Co,mo]=_.useState(0),[Qt,Rn]=_.useState(0),[Es,Qn]=_.useState(0),[Cn,no]=_.useState(0),Ts=_.useRef(new Set),As=_.useRef(new Set),mn=_.useRef(null),ws=_.useRef(),Ro=Re&&j&&!St&&pt;_.useEffect(()=>{if(Ro){zt(!1);const D=kl(()=>{zt(!0)});return()=>cancelAnimationFrame(D)}else zt(!1)},[Ro]);const fs=_.useRef(new Map),ko=_.useRef(new Map),so=_.useRef(),[Jn,Fs]=_.useState(!1),[hn,Xs]=_.useState([]),vi=_.useRef(hn);vi.current=hn;const[Ss,po]=_.useState(null),Ds=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[hs,es]=_.useState(!1),oo=_.useRef(null),[In,Cs]=_.useState([]),ms=_.useRef({cmd:!1,shift:!1}),ps=()=>{Je(!0)},Li=()=>{Je(!1)},Ko=()=>{hs||(oo.current=Gt(()=>es(!0),850))},Ki=()=>{oo.current&&(clearTimeout(oo.current),oo.current=null),es(!1),Li()};_.useEffect(()=>()=>{oo.current&&clearTimeout(oo.current)},[]);const[on,wi]=_.useState(()=>{var D;try{const B=JSON.parse((D=localStorage.getItem("feedback-toolbar-settings"))!=null?D:"");return{...Mm,...B,annotationColorId:Pc.find(I=>I.id===B.annotationColorId)?B.annotationColorId:Mm.annotationColorId}}catch{return Mm}}),[Os,Qi]=_.useState(!0),[Zi,Yo]=_.useState(!1),_s=()=>{var D;(D=he.current)==null||D.classList.add(Qe.disableTransitions),Qi(B=>!B),kl(()=>{var B;(B=he.current)==null||B.classList.remove(Qe.disableTransitions)})},Oi=!1,zs="off",[Pn,jo]=_.useState(x!=null?x:null),ri=_.useRef(!1),[$s,Bo]=_.useState(g?"connecting":"disconnected"),[bn,Gs]=_.useState(null),[Is,Mo]=_.useState(!1),[Ns,li]=_.useState(null),Wo=_.useRef(!1),[Si,io]=_.useState(new Set),[_o,xs]=_.useState(new Set),[Vn,is]=_.useState(!1),[Eo,go]=_.useState(!1),[ao,Hn]=_.useState(!1),Ps=_.useRef(null),Un=_.useRef(null),qs=_.useRef(null),Qo=_.useRef(null),Zo=_.useRef(!1),zi=_.useRef(0),ci=_.useRef(null),ui=_.useRef(null),Lo=8,la=50,Jo=_.useRef(null),To=_.useRef(null),Oo=_.useRef(null),Rt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ae)Be(!0);else{Je(!1),tt("main");const D=Gt(()=>Be(!1),0);return()=>clearTimeout(D)}},[Ae]);const $i=j&&R&&!Re;_.useEffect(()=>{if($i){Ze(!1),be(!0),io(new Set);const D=Gt(()=>{io(B=>{const I=new Set(B);return T.forEach(V=>I.add(V.id)),I})},350);return()=>clearTimeout(D)}else if(pe){Ze(!0);const D=Gt(()=>{be(!1),Ze(!1)},250);return()=>clearTimeout(D)}},[$i]),_.useEffect(()=>{Y(!0),xt(window.scrollY);const D=bm(Rt);U(D.filter(Nr)),Lx||(Yo(!0),Lx=!0,Gt(()=>Yo(!1),750));try{const B=localStorage.getItem("feedback-toolbar-theme");B!==null&&Qi(B==="dark")}catch{}try{const B=localStorage.getItem("feedback-toolbar-position");if(B){const I=JSON.parse(B);typeof I.x=="number"&&typeof I.y=="number"&&Gs(I)}}catch{}},[Rt]),_.useEffect(()=>{ct&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(on))},[on,ct]),_.useEffect(()=>{ct&&localStorage.setItem("feedback-toolbar-theme",Os?"dark":"light")},[Os,ct]);const yo=_.useRef(!1);_.useEffect(()=>{const D=yo.current;yo.current=Is,D&&!Is&&bn&&ct&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(bn))},[Is,bn,ct]),_.useEffect(()=>{if(!g||!ct||ri.current)return;ri.current=!0,Bo("connecting"),(async()=>{try{const B=rM(Rt),I=x||B;let V=!1;if(I)try{const E=await jx(g,I);jo(E.id),Bo("connected"),vm(Rt,E.id),V=!0;const P=bm(Rt),oe=new Set(E.annotations.map(ue=>ue.id)),K=P.filter(ue=>!oe.has(ue.id));if(K.length>0){const ke=`${typeof window<"u"?window.location.origin:""}${Rt}`,ft=(await Promise.allSettled(K.map(ht=>xl(g,E.id,{...ht,sessionId:E.id,url:ke})))).map((ht,ut)=>ht.status==="fulfilled"?ht.value:(console.warn("[Agentation] Failed to sync annotation:",ht.reason),K[ut])),bt=[...E.annotations,...ft];U(bt.filter(Nr)),Cc(Rt,bt.filter(Nr),E.id)}else U(E.annotations.filter(Nr)),Cc(Rt,E.annotations.filter(Nr),E.id)}catch(E){console.warn("[Agentation] Could not join session, creating new:",E),lM(Rt)}if(!V){const E=typeof window<"u"?window.location.href:"/",P=await wm(g,E);jo(P.id),Bo("connected"),vm(Rt,P.id),b==null||b(P.id);const oe=J8(),K=typeof window<"u"?window.location.origin:"",ue=[];for(const[ke,Ye]of oe){const ft=Ye.filter(ut=>!ut._syncedTo);if(ft.length===0)continue;const bt=`${K}${ke}`,ht=ke===Rt;ue.push((async()=>{try{const ut=ht?P:await wm(g,bt),Zt=(await Promise.allSettled(ft.map(Ft=>xl(g,ut.id,{...Ft,sessionId:ut.id,url:bt})))).map((Ft,Bn)=>Ft.status==="fulfilled"?Ft.value:(console.warn("[Agentation] Failed to sync annotation:",Ft.reason),ft[Bn])).filter(Nr);if(Cc(ke,Zt,ut.id),ht){const Ft=new Set(ft.map(Bn=>Bn.id));U(Bn=>{const Ut=Bn.filter(Xt=>!Ft.has(Xt.id));return[...Zt,...Ut]})}}catch(ut){console.warn(`[Agentation] Failed to sync annotations for ${ke}:`,ut)}})())}await Promise.allSettled(ue)}}catch(B){Bo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",B)}})()},[g,x,ct,b,Rt]),_.useEffect(()=>{if(!g||!ct)return;const D=async()=>{try{(await fetch(`${g}/health`)).ok?Bo("connected"):Bo("disconnected")}catch{Bo("disconnected")}};D();const B=nj(D,1e4);return()=>clearInterval(B)},[g,ct]),_.useEffect(()=>{if(!g||!ct||!Pn)return;const D=new EventSource(`${g}/sessions/${Pn}/events`),B=["resolved","dismissed"],I=V=>{var E;try{const P=JSON.parse(V.data);if(B.includes((E=P.payload)==null?void 0:E.status)){const oe=P.payload.id,K=P.payload.kind;if(K==="placement"){for(const[ue,ke]of fs.current)if(ke===oe){fs.current.delete(ue),Lt(Ye=>Ye.filter(ft=>ft.id!==ue));break}}else if(K==="rearrange"){for(const[ue,ke]of ko.current)if(ke===oe){ko.current.delete(ue),Kn(Ye=>{if(!Ye)return null;const ft=Ye.sections.filter(bt=>bt.id!==ue);return ft.length===0?null:{...Ye,sections:ft}});break}}else xs(ue=>new Set(ue).add(oe)),Gt(()=>{U(ue=>ue.filter(ke=>ke.id!==oe)),xs(ue=>{const ke=new Set(ue);return ke.delete(oe),ke})},150)}}catch{}};return D.addEventListener("annotation.updated",I),()=>{D.removeEventListener("annotation.updated",I),D.close()}},[g,ct,Pn]),_.useEffect(()=>{if(!g||!ct)return;const D=ui.current==="disconnected",B=$s==="connected";ui.current=$s,D&&B&&(async()=>{try{const V=bm(Rt);if(V.length===0)return;const P=`${typeof window<"u"?window.location.origin:""}${Rt}`;let oe=Pn,K=[];if(oe)try{K=(await jx(g,oe)).annotations}catch{oe=null}oe||(oe=(await wm(g,P)).id,jo(oe),vm(Rt,oe));const ue=new Set(K.map(Ye=>Ye.id)),ke=V.filter(Ye=>!ue.has(Ye.id));if(ke.length>0){const ft=(await Promise.allSettled(ke.map(ut=>xl(g,oe,{...ut,sessionId:oe,url:P})))).map((ut,An)=>ut.status==="fulfilled"?ut.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ut.reason),ke[An])),ht=[...K,...ft].filter(Nr);U(ht),Cc(Rt,ht,oe)}}catch(V){console.warn("[Agentation] Failed to sync on reconnect:",V)}})()},[$s,g,ct,Pn,Rt]);const Fo=_.useCallback(()=>{W||(Z(!0),rt(!1),k(!1),Gt(()=>{uM(!0),G(!0),Z(!1)},400))},[W]);_.useEffect(()=>{if(!i||!ct||!t||t.length===0||T.length>0)return;const D=[];return D.push(Gt(()=>{k(!0)},n-200)),t.forEach((B,I)=>{const V=n+I*300;D.push(Gt(()=>{const E=document.querySelector(B.selector);if(!E)return;const P=E.getBoundingClientRect(),{name:oe,path:K}=jl(E),ue={id:`demo-${Date.now()}-${I}`,x:(P.left+P.width/2)/window.innerWidth*100,y:P.top+P.height/2+window.scrollY,comment:B.comment,element:oe,elementPath:K,timestamp:Date.now(),selectedText:B.selectedText,boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.width,height:P.height},nearbyText:wc(E),cssClasses:Sc(E)};U(ke=>[...ke,ue])},V))}),()=>{D.forEach(clearTimeout)}},[i,ct,t,n]),_.useEffect(()=>{const D=()=>{xt(window.scrollY),Bt(!0),Oo.current&&clearTimeout(Oo.current),Oo.current=Gt(()=>{Bt(!1)},150)};return window.addEventListener("scroll",D,{passive:!0}),()=>{window.removeEventListener("scroll",D),Oo.current&&clearTimeout(Oo.current)}},[]),_.useEffect(()=>{ct&&T.length>0?Pn?Cc(Rt,T,Pn):u2(Rt,T):ct&&T.length===0&&localStorage.removeItem(Fd(Rt))},[T,Rt,ct,Pn]),_.useEffect(()=>{if(ct&&!dn.current){dn.current=!0;const D=eM(Rt);D.length>0&&Lt(D)}},[ct,Rt]),_.useEffect(()=>{ct&&dn.current&&!pt&&(st.length>0?tM(Rt,st):nM(Rt))},[st,Rt,ct,pt]),_.useEffect(()=>{if(ct&&!Ls.current){Ls.current=!0;const D=sM(Rt);if(D){const B={...D,sections:D.sections.map(I=>{var V;return{...I,currentRect:(V=I.currentRect)!=null?V:{...I.originalRect}}})};Kn(B)}}},[ct,Rt]),_.useEffect(()=>{ct&&Ls.current&&!pt&&(at?oM(Rt,at):iM(Rt))},[at,Rt,ct,pt]);const Xo=_.useRef(!1);_.useEffect(()=>{if(ct&&!Xo.current){Xo.current=!0;const D=aM(Rt);D&&(So.current={rearrange:D.rearrange,placements:D.placements||[]},D.purpose&&yn(D.purpose))}},[ct,Rt]),_.useEffect(()=>{var B,I,V,E,P;if(!ct||!Xo.current)return;const D=So.current;pt?((I=(B=at==null?void 0:at.sections)==null?void 0:B.length)!=null?I:0)>0||st.length>0||Nt?kx(Rt,{rearrange:at,placements:st,purpose:Nt}):yd(Rt):((P=(E=(V=D.rearrange)==null?void 0:V.sections)==null?void 0:E.length)!=null?P:0)>0||D.placements.length>0||Nt?kx(Rt,{rearrange:D.rearrange,placements:D.placements,purpose:Nt}):yd(Rt)},[at,st,Nt,pt,Rt,ct]),_.useEffect(()=>{Re&&!at&&Kn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Re,at]),_.useEffect(()=>{if(!g||!Pn)return;const D=fs.current,B=new Set(st.map(I=>I.id));for(const I of st){if(D.has(I.id))continue;D.set(I.id,"");const V=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Rt;xl(g,Pn,{id:I.id,x:I.x/window.innerWidth*100,y:I.y,comment:`Place ${I.type} at (${Math.round(I.x)}, ${Math.round(I.y)}), ${I.width}×${I.height}px${I.text?` — "${I.text}"`:""}`,element:`[design:${I.type}]`,elementPath:"[placement]",timestamp:I.timestamp,url:V,intent:"change",severity:"important",kind:"placement",placement:{componentType:I.type,width:I.width,height:I.height,scrollY:I.scrollY,text:I.text}}).then(E=>{D.has(I.id)&&D.set(I.id,E.id)}).catch(E=>{console.warn("[Agentation] Failed to sync placement annotation:",E),D.delete(I.id)})}for(const[I,V]of D)B.has(I)||(D.delete(I),V&&rr(g,V).catch(()=>{}))},[st,g,Pn,Rt]),_.useEffect(()=>{if(!(!g||!Pn))return so.current&&clearTimeout(so.current),so.current=Gt(()=>{const D=ko.current;if(!at||at.sections.length===0){for(const[,V]of D)V&&rr(g,V).catch(()=>{});D.clear();return}const B=new Set(at.sections.map(V=>V.id)),I=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Rt;for(const V of at.sections){const E=V.originalRect,P=V.currentRect;if(!(Math.abs(E.x-P.x)>1||Math.abs(E.y-P.y)>1||Math.abs(E.width-P.width)>1||Math.abs(E.height-P.height)>1)){const ue=D.get(V.id);ue&&(D.delete(V.id),rr(g,ue).catch(()=>{}));continue}const K=D.get(V.id);K?Mx(g,K,{comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)}`}).catch(ue=>{console.warn("[Agentation] Failed to update rearrange annotation:",ue)}):(D.set(V.id,""),xl(g,Pn,{id:V.id,x:P.x/window.innerWidth*100,y:P.y,comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)}`,element:V.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:I,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:V.selector,label:V.label,tagName:V.tagName,originalRect:E,currentRect:P}}).then(ue=>{D.has(V.id)&&D.set(V.id,ue.id)}).catch(ue=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ue),D.delete(V.id)}))}for(const[V,E]of D)B.has(V)||(D.delete(V),E&&rr(g,E).catch(()=>{}))},300),()=>{so.current&&clearTimeout(so.current)}},[at,g,Pn,Rt]);const Ks=_.useRef(new Map);_.useLayoutEffect(()=>{var I;const D=(I=at==null?void 0:at.sections)!=null?I:[],B=new Set;if((Re||St)&&j)for(const V of D){B.add(V.id);try{const E=document.querySelector(V.selector);if(!E)continue;if(!Ks.current.has(V.id)){const P={transform:E.style.transform,transformOrigin:E.style.transformOrigin,opacity:E.style.opacity,position:E.style.position,zIndex:E.style.zIndex,display:E.style.display},oe=[];let K=E.parentElement;for(;K&&K!==document.body;){const ke=getComputedStyle(K);(ke.overflow!=="visible"||ke.overflowX!=="visible"||ke.overflowY!=="visible")&&(oe.push({el:K,overflow:K.style.overflow}),K.style.overflow="visible"),K=K.parentElement}getComputedStyle(E).display==="inline"&&(E.style.display="inline-block"),Ks.current.set(V.id,{el:E,origStyles:P,ancestors:oe}),E.style.transformOrigin="top left",E.style.zIndex="9999"}}catch{}}for(const[V,E]of Ks.current)if(!B.has(V)){const{el:P,origStyles:oe,ancestors:K}=E;P.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",P.style.transform=oe.transform,P.style.transformOrigin=oe.transformOrigin,P.style.opacity=oe.opacity,P.style.position=oe.position,P.style.zIndex=oe.zIndex,Ks.current.delete(V),Gt(()=>{P.style.transition="",P.style.display=oe.display;for(const ue of K)ue.el.style.overflow=ue.overflow},450)}},[at,Re,St,j]),_.useEffect(()=>()=>{for(const[,D]of Ks.current){const{el:B,origStyles:I,ancestors:V}=D;B.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",B.style.transform=I.transform,B.style.transformOrigin=I.transformOrigin,B.style.opacity=I.opacity,B.style.position=I.position,B.style.zIndex=I.zIndex,Gt(()=>{B.style.transition="",B.style.display=I.display;for(const E of V)E.el.style.overflow=E.overflow},450)}Ks.current.clear()},[]);const zo=_.useCallback(()=>{Ct(!0),nt(!1),_t(null),clearTimeout(ws.current),ws.current=Gt(()=>{Ct(!1)},300)},[]),vn=_.useCallback(()=>{Re&&(Ct(!0),nt(!1),_t(null),clearTimeout(ws.current),ws.current=Gt(()=>{Ct(!1)},300)),k(!1)},[Re]),xo=_.useCallback(()=>{te||(oj(),ve(!0))},[te]),C=_.useCallback(()=>{te&&(dx(),ve(!1))},[te]),X=_.useCallback(()=>{te?C():xo()},[te,xo,C]),ce=_.useCallback(()=>{if(In.length===0)return;const D=In[0],B=D.element,I=In.length>1,V=In.map(E=>E.element.getBoundingClientRect());if(I){const E={left:Math.min(...V.map(ut=>ut.left)),top:Math.min(...V.map(ut=>ut.top)),right:Math.max(...V.map(ut=>ut.right)),bottom:Math.max(...V.map(ut=>ut.bottom))},P=In.slice(0,5).map(ut=>ut.name).join(", "),oe=In.length>5?` +${In.length-5} more`:"",K=V.map(ut=>({x:ut.left,y:ut.top+window.scrollY,width:ut.width,height:ut.height})),ke=In[In.length-1].element,Ye=V[V.length-1],ft=Ye.left+Ye.width/2,bt=Ye.top+Ye.height/2,ht=Em(ke);me({x:ft/window.innerWidth*100,y:ht?bt:bt+window.scrollY,clientY:bt,element:`${In.length} elements: ${P}${oe}`,elementPath:"multi-select",boundingBox:{x:E.left,y:E.top+window.scrollY,width:E.right-E.left,height:E.bottom-E.top},isMultiSelect:!0,isFixed:ht,elementBoundingBoxes:K,multiSelectElements:In.map(ut=>ut.element),targetElement:ke,fullPath:pd(B),accessibility:md(B),computedStyles:hd(B),computedStylesObj:fd(B),nearbyElements:dd(B),cssClasses:Sc(B),nearbyText:wc(B),sourceFile:vd(B)})}else{const E=V[0],P=Em(B);me({x:E.left/window.innerWidth*100,y:P?E.top:E.top+window.scrollY,clientY:E.top,element:D.name,elementPath:D.path,boundingBox:{x:E.left,y:P?E.top:E.top+window.scrollY,width:E.width,height:E.height},isFixed:P,fullPath:pd(B),accessibility:md(B),computedStyles:hd(B),computedStylesObj:fd(B),nearbyElements:dd(B),cssClasses:Sc(B),nearbyText:wc(B),reactComponents:D.reactComponents,sourceFile:vd(B)})}Cs([]),ie(null)},[In]);_.useEffect(()=>{j||(me(null),Oe(null),je(null),it([]),ie(null),rt(!1),Cs([]),ms.current={cmd:!1,shift:!1},te&&C())},[j,te,C]),_.useEffect(()=>()=>{dx()},[]),_.useEffect(()=>{if(!j)return;const D=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),B=":not([data-agentation-root]):not([data-agentation-root] *)",I=document.createElement("style");return I.id="feedback-cursor-styles",I.textContent=`
      body ${B} {
        cursor: crosshair !important;
      }

      body :is(${D})${B} {
        cursor: text !important;
      }
    `,document.head.appendChild(I),()=>{const V=document.getElementById("feedback-cursor-styles");V&&V.remove()}},[j]),_.useEffect(()=>{if(Ss!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ss,j]),_.useEffect(()=>{if(!j||F||Jn||Re)return;const D=B=>{const I=B.composedPath()[0]||B.target;if(ni(I,"[data-feedback-toolbar]")){ie(null);return}const V=Dr(B.clientX,B.clientY);if(!V||ni(V,"[data-feedback-toolbar]")){ie(null);return}const{name:E,elementName:P,path:oe,reactComponents:K}=jm(V,zs),ue=V.getBoundingClientRect();ie({element:E,elementName:P,elementPath:oe,rect:ue,reactComponents:K}),ae({x:B.clientX,y:B.clientY})};return document.addEventListener("mousemove",D),()=>document.removeEventListener("mousemove",D)},[j,F,Jn,Re,zs,hn]);const Me=_.useCallback(D=>{var B;if(Oe(D),Ie(null),Ot(null),et([]),(B=D.elementBoundingBoxes)!=null&&B.length){const I=[];for(const V of D.elementBoundingBoxes){const E=V.x+V.width/2,P=V.y+V.height/2-window.scrollY,oe=Dr(E,P);oe&&I.push(oe)}it(I),je(null)}else if(D.boundingBox){const I=D.boundingBox,V=I.x+I.width/2,E=D.isFixed?I.y+I.height/2:I.y+I.height/2-window.scrollY,P=Dr(V,E);if(P){const oe=P.getBoundingClientRect(),K=oe.width/I.width,ue=oe.height/I.height;K<.5||ue<.5?je(null):je(P)}else je(null);it([])}else je(null),it([])},[]);_.useEffect(()=>{if(!j||Jn||Re)return;const D=B=>{var en,Zt;if(Zo.current){Zo.current=!1;return}const I=B.composedPath()[0]||B.target;if(ni(I,"[data-feedback-toolbar]")||ni(I,"[data-annotation-popup]")||ni(I,"[data-annotation-marker]"))return;if(B.metaKey&&B.shiftKey&&!F&&!J){B.preventDefault(),B.stopPropagation();const Ft=Dr(B.clientX,B.clientY);if(!Ft)return;const Bn=Ft.getBoundingClientRect(),{name:Ut,path:Xt,reactComponents:as}=jm(Ft,zs),Ln=In.findIndex(Hs=>Hs.element===Ft);Ln>=0?Cs(Hs=>Hs.filter((bo,Zn)=>Zn!==Ln)):Cs(Hs=>[...Hs,{element:Ft,rect:Bn,name:Ut,path:Xt,reactComponents:as!=null?as:void 0}]);return}const V=ni(I,"button, a, input, select, textarea, [role='button'], [onclick]");if(on.blockInteractions&&V&&(B.preventDefault(),B.stopPropagation()),F){if(V&&!on.blockInteractions)return;B.preventDefault(),(en=Jo.current)==null||en.shake();return}if(J){if(V&&!on.blockInteractions)return;B.preventDefault(),(Zt=To.current)==null||Zt.shake();return}B.preventDefault();const E=Dr(B.clientX,B.clientY);if(!E)return;const{name:P,path:oe,reactComponents:K}=jm(E,zs),ue=E.getBoundingClientRect(),ke=B.clientX/window.innerWidth*100,Ye=Em(E),ft=Ye?B.clientY:B.clientY+window.scrollY,bt=window.getSelection();let ht;bt&&bt.toString().trim().length>0&&(ht=bt.toString().trim().slice(0,500));const ut=fd(E),An=hd(E);me({x:ke,y:ft,clientY:B.clientY,element:P,elementPath:oe,selectedText:ht,boundingBox:{x:ue.left,y:Ye?ue.top:ue.top+window.scrollY,width:ue.width,height:ue.height},nearbyText:wc(E),cssClasses:Sc(E),isFixed:Ye,fullPath:pd(E),accessibility:md(E),computedStyles:An,computedStylesObj:ut,nearbyElements:dd(E),reactComponents:K!=null?K:void 0,sourceFile:vd(E),targetElement:E}),ie(null)};return document.addEventListener("click",D,!0),()=>document.removeEventListener("click",D,!0)},[j,Jn,Re,F,J,on.blockInteractions,zs,In]),_.useEffect(()=>{if(!j)return;const D=V=>{V.key==="Meta"&&(ms.current.cmd=!0),V.key==="Shift"&&(ms.current.shift=!0)},B=V=>{const E=ms.current.cmd&&ms.current.shift;V.key==="Meta"&&(ms.current.cmd=!1),V.key==="Shift"&&(ms.current.shift=!1);const P=ms.current.cmd&&ms.current.shift;E&&!P&&In.length>0&&ce()},I=()=>{ms.current={cmd:!1,shift:!1},Cs([])};return document.addEventListener("keydown",D),document.addEventListener("keyup",B),window.addEventListener("blur",I),()=>{document.removeEventListener("keydown",D),document.removeEventListener("keyup",B),window.removeEventListener("blur",I)}},[j,In,ce]),_.useEffect(()=>{if(!j||F||Jn||Re)return;const D=B=>{const I=B.composedPath()[0]||B.target;ni(I,"[data-feedback-toolbar]")||ni(I,"[data-annotation-marker]")||ni(I,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(I.tagName)||I.isContentEditable||(B.preventDefault(),Ps.current={x:B.clientX,y:B.clientY})};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[j,F,Jn,Re]),_.useEffect(()=>{if(!j||F)return;const D=B=>{if(!Ps.current)return;const I=B.clientX-Ps.current.x,V=B.clientY-Ps.current.y,E=I*I+V*V,P=Lo*Lo;if(!ao&&E>=P&&(Un.current=Ps.current,Hn(!0),B.preventDefault()),(ao||E>=P)&&Un.current){if(qs.current){const Ut=Math.min(Un.current.x,B.clientX),Xt=Math.min(Un.current.y,B.clientY),as=Math.abs(B.clientX-Un.current.x),Ln=Math.abs(B.clientY-Un.current.y);qs.current.style.transform=`translate(${Ut}px, ${Xt}px)`,qs.current.style.width=`${as}px`,qs.current.style.height=`${Ln}px`}const oe=Date.now();if(oe-zi.current<la)return;zi.current=oe;const K=Un.current.x,ue=Un.current.y,ke=Math.min(K,B.clientX),Ye=Math.min(ue,B.clientY),ft=Math.max(K,B.clientX),bt=Math.max(ue,B.clientY),ht=(ke+ft)/2,ut=(Ye+bt)/2,An=new Set,en=[[ke,Ye],[ft,Ye],[ke,bt],[ft,bt],[ht,ut],[ht,Ye],[ht,bt],[ke,ut],[ft,ut]];for(const[Ut,Xt]of en){const as=document.elementsFromPoint(Ut,Xt);for(const Ln of as)Ln instanceof HTMLElement&&An.add(Ln)}const Zt=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ut of Zt)if(Ut instanceof HTMLElement){const Xt=Ut.getBoundingClientRect(),as=Xt.left+Xt.width/2,Ln=Xt.top+Xt.height/2,Hs=as>=ke&&as<=ft&&Ln>=Ye&&Ln<=bt,bo=Math.min(Xt.right,ft)-Math.max(Xt.left,ke),Zn=Math.min(Xt.bottom,bt)-Math.max(Xt.top,Ye),ei=bo>0&&Zn>0?bo*Zn:0,di=Xt.width*Xt.height,fi=di>0?ei/di:0;(Hs||fi>.5)&&An.add(Ut)}const Ft=[],Bn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ut of An){if(ni(Ut,"[data-feedback-toolbar]")||ni(Ut,"[data-annotation-marker]"))continue;const Xt=Ut.getBoundingClientRect();if(!(Xt.width>window.innerWidth*.8&&Xt.height>window.innerHeight*.5)&&!(Xt.width<10||Xt.height<10)&&Xt.left<ft&&Xt.right>ke&&Xt.top<bt&&Xt.bottom>Ye){const as=Ut.tagName;let Ln=Bn.has(as);if(!Ln&&(as==="DIV"||as==="SPAN")){const Hs=Ut.textContent&&Ut.textContent.trim().length>0,bo=Ut.onclick!==null||Ut.getAttribute("role")==="button"||Ut.getAttribute("role")==="link"||Ut.classList.contains("clickable")||Ut.hasAttribute("data-clickable");(Hs||bo)&&!Ut.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ln=!0)}if(Ln){let Hs=!1;for(const bo of Ft)if(bo.left<=Xt.left&&bo.right>=Xt.right&&bo.top<=Xt.top&&bo.bottom>=Xt.bottom){Hs=!0;break}Hs||Ft.push(Xt)}}}if(Qo.current){const Ut=Qo.current;for(;Ut.children.length>Ft.length;)Ut.removeChild(Ut.lastChild);Ft.forEach((Xt,as)=>{let Ln=Ut.children[as];Ln||(Ln=document.createElement("div"),Ln.className=Qe.selectedElementHighlight,Ut.appendChild(Ln)),Ln.style.transform=`translate(${Xt.left}px, ${Xt.top}px)`,Ln.style.width=`${Xt.width}px`,Ln.style.height=`${Xt.height}px`})}}};return document.addEventListener("mousemove",D,{passive:!0}),()=>document.removeEventListener("mousemove",D)},[j,F,ao,Lo]),_.useEffect(()=>{if(!j)return;const D=B=>{const I=ao,V=Un.current;if(ao&&V){Zo.current=!0;const E=Math.min(V.x,B.clientX),P=Math.min(V.y,B.clientY),oe=Math.max(V.x,B.clientX),K=Math.max(V.y,B.clientY),ue=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ht=>{if(!(ht instanceof HTMLElement)||ni(ht,"[data-feedback-toolbar]")||ni(ht,"[data-annotation-marker]"))return;const ut=ht.getBoundingClientRect();ut.width>window.innerWidth*.8&&ut.height>window.innerHeight*.5||ut.width<10||ut.height<10||ut.left<oe&&ut.right>E&&ut.top<K&&ut.bottom>P&&ue.push({element:ht,rect:ut})});const Ye=ue.filter(({element:ht})=>!ue.some(({element:ut})=>ut!==ht&&ht.contains(ut))),ft=B.clientX/window.innerWidth*100,bt=B.clientY+window.scrollY;if(Ye.length>0){const ht=Ye.reduce((Bn,{rect:Ut})=>({left:Math.min(Bn.left,Ut.left),top:Math.min(Bn.top,Ut.top),right:Math.max(Bn.right,Ut.right),bottom:Math.max(Bn.bottom,Ut.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ut=Ye.slice(0,5).map(({element:Bn})=>jl(Bn).name).join(", "),An=Ye.length>5?` +${Ye.length-5} more`:"",en=Ye[0].element,Zt=fd(en),Ft=hd(en);me({x:ft,y:bt,clientY:B.clientY,element:`${Ye.length} elements: ${ut}${An}`,elementPath:"multi-select",boundingBox:{x:ht.left,y:ht.top+window.scrollY,width:ht.right-ht.left,height:ht.bottom-ht.top},isMultiSelect:!0,fullPath:pd(en),accessibility:md(en),computedStyles:Ft,computedStylesObj:Zt,nearbyElements:dd(en),cssClasses:Sc(en),nearbyText:wc(en),sourceFile:vd(en)})}else{const ht=Math.abs(oe-E),ut=Math.abs(K-P);ht>20&&ut>20&&me({x:ft,y:bt,clientY:B.clientY,element:"Area selection",elementPath:`region at (${Math.round(E)}, ${Math.round(P)})`,boundingBox:{x:E,y:P+window.scrollY,width:ht,height:ut},isMultiSelect:!0})}ie(null)}else I&&(Zo.current=!0);Ps.current=null,Un.current=null,Hn(!1),Qo.current&&(Qo.current.innerHTML="")};return document.addEventListener("mouseup",D),()=>document.removeEventListener("mouseup",D)},[j,ao]);const Ve=_.useCallback(async(D,B,I)=>{const V=on.webhookUrl||w;if(!V||!on.webhooksEnabled&&!I)return!1;try{return(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:D,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...B})})).ok}catch(E){return console.warn("[Agentation] Webhook failed:",E),!1}},[w,on.webhookUrl,on.webhooksEnabled]),dt=_.useCallback(D=>{var I;if(!F)return;const B={id:Date.now().toString(),x:F.x,y:F.y,comment:D,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&Pn?{sessionId:Pn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};U(V=>[...V,B]),ci.current=B.id,Gt(()=>{ci.current=null},300),Gt(()=>{io(V=>new Set(V).add(B.id))},250),a==null||a(B),Ve("annotation.add",{annotation:B}),is(!0),Gt(()=>{me(null),is(!1)},150),(I=window.getSelection())==null||I.removeAllRanges(),g&&Pn&&xl(g,Pn,B).then(V=>{V.id!==B.id&&(U(E=>E.map(P=>P.id===B.id?{...P,id:V.id}:P)),io(E=>{const P=new Set(E);return P.delete(B.id),P.add(V.id),P}))}).catch(V=>{console.warn("[Agentation] Failed to sync annotation:",V)})},[F,a,Ve,g,Pn]),Kt=_.useCallback(()=>{is(!0),Gt(()=>{me(null),is(!1)},150)},[]),Yt=_.useCallback(D=>{const B=T.findIndex(V=>V.id===D),I=T[B];(J==null?void 0:J.id)===D&&(go(!0),Gt(()=>{Oe(null),je(null),it([]),go(!1)},150)),Pt(D),xs(V=>new Set(V).add(D)),I&&(c==null||c(I),Ve("annotation.delete",{annotation:I})),g&&rr(g,D).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)}),Gt(()=>{U(V=>V.filter(E=>E.id!==D)),xs(V=>{const E=new Set(V);return E.delete(D),E}),Pt(null),B<T.length-1&&(tn(B),Gt(()=>tn(null),200))},150)},[T,J,c,Ve,g]),ln=_.useCallback(D=>{var B;if(!D){Ie(null),Ot(null),et([]);return}if(Ie(D.id),(B=D.elementBoundingBoxes)!=null&&B.length){const I=[];for(const V of D.elementBoundingBoxes){const E=V.x+V.width/2,P=V.y+V.height/2-window.scrollY,K=document.elementsFromPoint(E,P).find(ue=>!ue.closest("[data-annotation-marker]")&&!ue.closest("[data-agentation-root]"));K&&I.push(K)}et(I),Ot(null)}else if(D.boundingBox){const I=D.boundingBox,V=I.x+I.width/2,E=D.isFixed?I.y+I.height/2:I.y+I.height/2-window.scrollY,P=Dr(V,E);if(P){const oe=P.getBoundingClientRect(),K=oe.width/I.width,ue=oe.height/I.height;K<.5||ue<.5?Ot(null):Ot(P)}else Ot(null);et([])}else Ot(null),et([])},[]),kn=_.useCallback(D=>{if(!J)return;const B={...J,comment:D};U(I=>I.map(V=>V.id===J.id?B:V)),u==null||u(B),Ve("annotation.update",{annotation:B}),g&&Mx(g,J.id,{comment:D}).catch(I=>{console.warn("[Agentation] Failed to update annotation on server:",I)}),go(!0),Gt(()=>{Oe(null),je(null),it([]),go(!1)},150)},[J,u,Ve,g]),Tn=_.useCallback(()=>{go(!0),Gt(()=>{Oe(null),je(null),it([]),go(!1)},150)},[]),pn=_.useCallback(()=>{const D=T.length,B=st.length>0||!!at;if(D===0&&hn.length===0&&!B)return;if(d==null||d(T),Ve("annotations.clear",{annotations:T}),g){Promise.all(T.map(E=>rr(g,E.id).catch(P=>{console.warn("[Agentation] Failed to delete annotation from server:",P)})));for(const[,E]of fs.current)E&&rr(g,E).catch(()=>{});fs.current.clear();for(const[,E]of ko.current)E&&rr(g,E).catch(()=>{});ko.current.clear()}Le(!0),De(!0),Xs([]);const I=Ds.current;if(I){const E=I.getContext("2d");E&&E.clearRect(0,0,I.width,I.height)}(st.length>0||at)&&(Qn(E=>E+1),no(E=>E+1),Gt(()=>{Lt([]),Kn(null)},200)),pt&&Ht(!1),Nt&&yn(""),So.current={rearrange:null,placements:[]},yd(Rt);const V=D*30+200;Gt(()=>{U([]),io(new Set),localStorage.removeItem(Fd(Rt)),Le(!1)},V),Gt(()=>De(!1),1500)},[Rt,T,hn,st,at,pt,Nt,d,Ve,g]),ts=_.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Rt,B=Re&&pt;let I;if(B){if(st.length===0&&!at&&!Nt)return;I=""}else{if(I=Ax(T,D,on.outputDetail),!I&&hn.length===0&&st.length===0&&!at)return;I||(I=`## Page Feedback: ${D}
`)}if(!B&&hn.length>0){const V=new Set;for(const K of T)K.drawingIndex!=null&&V.add(K.drawingIndex);const E=Ds.current;E&&(E.style.visibility="hidden");const P=[],oe=window.scrollY;for(let K=0;K<hn.length;K++){if(V.has(K))continue;const ue=hn[K];if(ue.points.length<2)continue;const ke=ue.fixed?ue.points:ue.points.map(Xn=>({x:Xn.x,y:Xn.y-oe}));let Ye=1/0,ft=1/0,bt=-1/0,ht=-1/0;for(const Xn of ke)Ye=Math.min(Ye,Xn.x),ft=Math.min(ft,Xn.y),bt=Math.max(bt,Xn.x),ht=Math.max(ht,Xn.y);const ut=bt-Ye,An=ht-ft,en=Math.hypot(ut,An),Zt=ke[0],Ft=ke[ke.length-1],Bn=Math.hypot(Ft.x-Zt.x,Ft.y-Zt.y);let Ut;const Xt=Bn<en*.35,as=ut/Math.max(An,1);if(Xt&&en>20){const Xn=Math.max(ut,An)*.15;let hi=0;for(const Ci of ke){const pr=Ci.x-Ye<Xn,Hr=bt-Ci.x<Xn,Ur=Ci.y-ft<Xn,Vr=ht-Ci.y<Xn;(pr||Hr)&&(Ur||Vr)&&hi++}Ut=hi>ke.length*.15?"box":"circle"}else as>3&&An<40?Ut="underline":Bn>en*.5?Ut="arrow":Ut="drawing";const Ln=Math.min(10,ke.length),Hs=Math.max(1,Math.floor(ke.length/Ln)),bo=new Set,Zn=[],ei=[Zt];for(let Xn=Hs;Xn<ke.length-1;Xn+=Hs)ei.push(ke[Xn]);ei.push(Ft);for(const Xn of ei){const hi=Dr(Xn.x,Xn.y);if(!hi||bo.has(hi)||ni(hi,"[data-feedback-toolbar]"))continue;bo.add(hi);const{name:Ci}=jl(hi);Zn.includes(Ci)||Zn.push(Ci)}const di=`${Math.round(Ye)},${Math.round(ft)} → ${Math.round(bt)},${Math.round(ht)}`;let fi;(Ut==="circle"||Ut==="box")&&Zn.length>0?fi=`${Ut==="box"?"Boxed":"Circled"} **${Zn[0]}**${Zn.length>1?` (and ${Zn.slice(1).join(", ")})`:""} (region: ${di})`:Ut==="underline"&&Zn.length>0?fi=`Underlined **${Zn[0]}** (${di})`:Ut==="arrow"&&Zn.length>=2?fi=`Arrow from **${Zn[0]}** to **${Zn[Zn.length-1]}** (${Math.round(Zt.x)},${Math.round(Zt.y)} → ${Math.round(Ft.x)},${Math.round(Ft.y)})`:Zn.length>0?fi=`${Ut==="arrow"?"Arrow":"Drawing"} near **${Zn.join("**, **")}** (region: ${di})`:fi=`Drawing at ${di}`,P.push(fi)}E&&(E.style.visibility=""),P.length>0&&(I+=`
**Drawings:**
`,P.forEach((K,ue)=>{I+=`${ue+1}. ${K}
`}))}if((st.length>0||B&&Nt)&&(I+=`
`+Sx(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:Nt||void 0},on.outputDetail)),at){const V=Cx(at,on.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(I+=`
`+V)}if(y)try{await navigator.clipboard.writeText(I)}catch{}h==null||h(I),$(!0),Gt(()=>$(!1),2e3),on.autoClearAfterCopy&&Gt(()=>pn(),500)},[T,hn,st,at,pt,Re,rn,Nt,Rt,on.outputDetail,zs,on.autoClearAfterCopy,pn,y,h]),Qs=_.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Rt;let B=Ax(T,D,on.outputDetail);if(!B&&st.length===0&&!at)return;if(B||(B=`## Page Feedback: ${D}
`),st.length>0&&(B+=`
`+Sx(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:Nt||void 0},on.outputDetail)),at){const V=Cx(at,on.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(B+=`
`+V)}p&&p(B,T),ne("sending"),await new Promise(V=>Gt(V,150));const I=await Ve("submit",{output:B,annotations:T},!0);ne(I?"sent":"failed"),Gt(()=>ne("idle"),2500),I&&on.autoClearAfterCopy&&Gt(()=>pn(),500)},[p,Ve,T,st,at,pt,rn,Rt,on.outputDetail,zs,on.autoClearAfterCopy,pn]);_.useEffect(()=>{if(!Ns)return;const D=10,B=V=>{const E=V.clientX-Ns.x,P=V.clientY-Ns.y,oe=Math.sqrt(E*E+P*P);if(!Is&&oe>D&&Mo(!0),Is||oe>D){let K=Ns.toolbarX+E,ue=Ns.toolbarY+P;const ke=20,Ye=337,ft=44,ht=Ye-(j?$s==="connected"?297:257:44),ut=ke-ht,An=window.innerWidth-ke-Ye;K=Math.max(ut,Math.min(An,K)),ue=Math.max(ke,Math.min(window.innerHeight-ft-ke,ue)),Gs({x:K,y:ue})}},I=()=>{Is&&(Wo.current=!0),Mo(!1),li(null)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",I),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",I)}},[Ns,Is,j,$s]);const Wt=_.useCallback(D=>{var P,oe;if(D.target.closest("button")||D.target.closest("[data-agentation-settings-panel]"))return;const B=D.currentTarget.parentElement;if(!B)return;const I=B.getBoundingClientRect(),V=(P=bn==null?void 0:bn.x)!=null?P:I.left,E=(oe=bn==null?void 0:bn.y)!=null?oe:I.top;li({x:D.clientX,y:D.clientY,toolbarX:V,toolbarY:E})},[bn]);if(_.useEffect(()=>{if(!bn)return;const D=()=>{let E=bn.x,P=bn.y;const ue=20-(337-(j?$s==="connected"?297:257:44)),ke=window.innerWidth-20-337;E=Math.max(ue,Math.min(ke,E)),P=Math.max(20,Math.min(window.innerHeight-44-20,P)),(E!==bn.x||P!==bn.y)&&Gs({x:E,y:P})};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[bn,j,$s]),_.useEffect(()=>{const D=B=>{const I=B.target,V=I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable;if(B.key==="Escape"){if(Re){jt?_t(null):zo();return}if(Jn){Fs(!1);return}if(In.length>0){Cs([]);return}F||j&&(ps(),k(!1))}if((B.metaKey||B.ctrlKey)&&B.shiftKey&&(B.key==="f"||B.key==="F")){B.preventDefault(),ps(),j?vn():k(!0);return}if(!(V||B.metaKey||B.ctrlKey)&&((B.key==="p"||B.key==="P")&&(B.preventDefault(),ps(),X()),(B.key==="l"||B.key==="L")&&(B.preventDefault(),ps(),Jn&&Fs(!1),Ae&&rt(!1),F&&Kt(),Re?zo():nt(!0)),(B.key==="h"||B.key==="H")&&T.length>0&&(B.preventDefault(),ps(),M(E=>!E)),(B.key==="c"||B.key==="C")&&(T.length>0||st.length>0||at)&&(B.preventDefault(),ps(),ts()),(B.key==="x"||B.key==="X")&&(T.length>0||st.length>0||at)&&(B.preventDefault(),ps(),pn(),st.length>0&&Lt([]),at&&Kn(null)),B.key==="s"||B.key==="S")){const E=ha(on.webhookUrl)||ha(w||"");T.length>0&&E&&le==="idle"&&(B.preventDefault(),ps(),Qs())}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[j,Jn,Re,jt,st,at,F,T.length,on.webhookUrl,w,le,Qs,X,ts,pn,In]),!ct||q)return null;const jn=T.length>0,bs=T.filter(D=>!_o.has(D.id)&&D.kind!=="placement"&&D.kind!=="rearrange"),N=bs.length>0,z=T.filter(D=>_o.has(D.id)),H=D=>{const P=D.x/100*window.innerWidth,oe=typeof D.y=="string"?parseFloat(D.y):D.y,K={};window.innerHeight-oe-22-10<80&&(K.top="auto",K.bottom="calc(100% + 10px)");const ke=P-200/2,Ye=10;if(ke<Ye){const ft=Ye-ke;K.left=`calc(50% + ${ft}px)`}else if(ke+200>window.innerWidth-Ye){const ft=ke+200-(window.innerWidth-Ye);K.left=`calc(50% - ${ft}px)`}return K};return Nl.createPortal(l.jsxs("div",{ref:he,style:{display:"contents"},"data-agentation-theme":Os?"dark":"light","data-agentation-accent":on.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Qe.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:bn?{left:bn.x,top:bn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Qe.toolbarContainer} ${j?Qe.expanded:Qe.collapsed} ${Zi?Qe.entrance:""} ${W?Qe.hiding:""} ${!on.webhooksEnabled&&(ha(on.webhookUrl)||ha(w||""))?Qe.serverConnected:""}`,onClick:j?void 0:D=>{if(Wo.current){Wo.current=!1,D.preventDefault();return}k(!0)},onMouseDown:Wt,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Qe.toggleContent} ${j?Qe.hidden:Qe.visible}`,children:[l.jsx(P3,{size:24}),N&&l.jsx("span",{className:`${Qe.badge} ${j?Qe.fadeOut:""} ${Zi?Qe.entrance:""}`,children:bs.length})]}),l.jsxs("div",{className:`${Qe.controlsContent} ${j?Qe.visible:Qe.hidden} ${bn&&bn.y<100?Qe.tooltipBelow:""} ${Fe||Ae?Qe.tooltipsHidden:""} ${hs?Qe.tooltipsInSession:""}`,onMouseEnter:Ko,onMouseLeave:Ki,children:[l.jsxs("div",{className:`${Qe.buttonWrapper} ${bn&&bn.x<120?Qe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:D=>{D.stopPropagation(),ps(),X()},"data-active":te,children:l.jsx(W3,{size:24,isPaused:te})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Qe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${Os?"":Qe.light}`,onClick:D=>{D.stopPropagation(),ps(),Jn&&Fs(!1),Ae&&rt(!1),F&&Kt(),Re?zo():nt(!0)},"data-active":Re,style:Re&&pt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(ej,{size:21})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[Re?"Exit layout mode":"Layout mode",l.jsx("span",{className:Qe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:D=>{D.stopPropagation(),ps(),M(!R)},disabled:!jn||Re,children:l.jsx(Y3,{size:24,isOpen:R})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[R?"Hide markers":"Show markers",l.jsx("span",{className:Qe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${Ee?Qe.statusShowing:""}`,onClick:D=>{D.stopPropagation(),ps(),ts()},disabled:Re&&pt?st.length===0&&!((ee=at==null?void 0:at.sections)!=null&&ee.length):!jn&&hn.length===0&&st.length===0&&!((fe=at==null?void 0:at.sections)!=null&&fe.length),"data-active":Ee,children:l.jsx(U3,{size:24,copied:Ee,tint:Re&&pt&&(st.length>0||(He=at==null?void 0:at.sections)!=null&&He.length)?"#f97316":void 0})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[Re&&pt?"Copy layout":"Copy feedback",l.jsx("span",{className:Qe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${Qe.sendButtonWrapper} ${j&&!on.webhooksEnabled&&(ha(on.webhookUrl)||ha(w||""))?Qe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Qe.controlButton} ${le==="sent"||le==="failed"?Qe.statusShowing:""}`,onClick:D=>{D.stopPropagation(),ps(),Qs()},disabled:!jn||!ha(on.webhookUrl)&&!ha(w||"")||le==="sending","data-no-hover":le==="sent"||le==="failed",tabIndex:ha(on.webhookUrl)||ha(w||"")?0:-1,children:[l.jsx(V3,{size:24,state:le}),jn&&le==="idle"&&l.jsx("span",{className:Qe.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Qe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:D=>{D.stopPropagation(),ps(),pn()},disabled:!jn&&hn.length===0&&st.length===0&&!((Ge=at==null?void 0:at.sections)!=null&&Ge.length),"data-danger":!0,children:l.jsx(X3,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Qe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:D=>{D.stopPropagation(),ps(),Re&&zo(),rt(!Ae)},children:l.jsx(F3,{size:24})}),g&&$s!=="disconnected"&&l.jsx("span",{className:`${Qe.mcpIndicator} ${Qe[$s]} ${Ae?Qe.hidden:""}`,title:$s==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Qe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Qe.divider}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${bn&&typeof window<"u"&&bn.x>window.innerWidth-120?Qe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:D=>{D.stopPropagation(),ps(),vn()},children:l.jsx(G3,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Exit",l.jsx("span",{className:Qe.shortcut,children:"Esc"})]})]})]}),l.jsx(T8,{visible:Re&&j,activeType:jt,onSelect:D=>{_t(jt===D?null:D)},isDarkMode:Os,sectionCount:(wt=at==null?void 0:at.sections.length)!=null?wt:0,onDetectSections:()=>{var oe,K;const D=P8(),B=(oe=at==null?void 0:at.sections)!=null?oe:[],I=new Set(B.map(ue=>ue.selector)),V=D.filter(ue=>!I.has(ue.selector)),E=[...B,...V],P=[...(K=at==null?void 0:at.originalOrder)!=null?K:[],...V.map(ue=>ue.id)];Kn({sections:E,originalOrder:P,detectedAt:Date.now()})},placementCount:st.length,onClearPlacements:()=>{Qn(D=>D+1),no(D=>D+1),Gt(()=>{Kn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:pt,onBlankCanvasChange:D=>{const B={sections:[],originalOrder:[],detectedAt:Date.now()};D?(No.current={rearrange:at,placements:st},Kn(So.current.rearrange||B),Lt(So.current.placements),_t(null)):(So.current={rearrange:at,placements:st},Kn(No.current.rearrange||B),Lt(No.current.placements)),Ht(D)},wireframePurpose:Nt,onWireframePurposeChange:yn,Tooltip:Lr,onDragStart:(D,B)=>{var ft;B.preventDefault();const I=Mt[D];let V=null,E=!1;const P=B.clientX,oe=B.clientY,K=B.target.closest("[data-feedback-toolbar]"),ue=(ft=K==null?void 0:K.getBoundingClientRect().top)!=null?ft:window.innerHeight,ke=bt=>{const ht=bt.clientX-P,ut=bt.clientY-oe;if(!E&&(Math.abs(ht)>4||Math.abs(ut)>4)&&(E=!0,V=document.createElement("div"),V.className=`${Pe.dragPreview}${pt?` ${Pe.dragPreviewWireframe}`:""}`,document.body.appendChild(V)),!V)return;const An=Math.max(0,ue-bt.clientY),en=Math.min(1,An/180),Zt=1-Math.pow(1-en,2),Ft=28,Bn=20,Ut=Math.min(140,I.width*.18),Xt=Math.min(90,I.height*.18),as=Ft+(Ut-Ft)*Zt,Ln=Bn+(Xt-Bn)*Zt;V.style.width=`${as}px`,V.style.height=`${Ln}px`,V.style.left=`${bt.clientX-as/2}px`,V.style.top=`${bt.clientY-Ln/2}px`,V.style.opacity=`${.5+.5*Zt}`,V.textContent=Zt>.25?D:""},Ye=bt=>{if(window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Ye),V&&document.body.removeChild(V),E){const ht=I.width,ut=I.height,An=window.scrollY,en=Math.max(0,bt.clientX-ht/2),Zt=Math.max(0,bt.clientY+An-ut/2),Ft={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:D,x:en,y:Zt,width:ht,height:ut,scrollY:An,timestamp:Date.now()};Lt(Bn=>[...Bn,Ft]),_t(null),Ts.current=new Set,mo(Bn=>Bn+1)}};window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Ye)}}),l.jsx(qM,{settings:on,onSettingsChange:D=>wi(B=>({...B,...D})),isDarkMode:Os,onToggleTheme:_s,isDevMode:Oi,connectionStatus:$s,endpoint:g,isVisible:qe,toolbarNearBottom:!!bn&&bn.y<230,settingsPage:ge,onSettingsPageChange:tt,onHideToolbar:Fo})]})}),(Re||St)&&l.jsx("div",{className:`${Pe.blankCanvas} ${nn?Pe.visible:""} ${It?Pe.gridActive:""}`,style:{"--canvas-opacity":vt},"data-feedback-toolbar":!0}),Re&&pt&&nn&&l.jsxs("div",{className:Pe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Pe.wireframeOpacityRow,children:[l.jsx("span",{className:Pe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Pe.wireframeOpacitySlider,min:0,max:1,step:.01,value:vt,onChange:D=>qt(Number(D.target.value))})]}),l.jsxs("div",{className:Pe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Pe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Pe.wireframeNoticeDivider}),l.jsx("button",{className:Pe.wireframeStartOver,onClick:()=>{Qn(D=>D+1),Kn({sections:[],originalOrder:[],detectedAt:Date.now()}),So.current={rearrange:null,placements:[]},yn(""),yd(Rt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Re||St)&&l.jsx(C8,{placements:st,onChange:Lt,activeComponent:St?null:jt,onActiveComponentChange:_t,isDarkMode:Os,exiting:St,onInteractionChange:xn,passthrough:!jt,extraSnapRects:at==null?void 0:at.sections.map(D=>D.currentRect),deselectSignal:Co,clearSignal:Es,wireframe:pt,onSelectionChange:(D,B)=>{Ts.current=D,B||(As.current=new Set,Rn(I=>I+1))},onDragMove:(D,B)=>{const I=As.current;if(!(!I.size||!at)){if(!mn.current){mn.current=new Map;for(const V of at.sections)I.has(V.id)&&mn.current.set(V.id,{x:V.currentRect.x,y:V.currentRect.y})}for(const V of at.sections){if(!I.has(V.id)||!mn.current.get(V.id))continue;const P=document.querySelector(`[data-rearrange-section="${V.id}"]`);P&&(P.style.transform=`translate(${D}px, ${B}px)`)}}},onDragEnd:(D,B,I)=>{const V=As.current,E=mn.current;if(mn.current=null,!(!V.size||!at||!E)){for(const P of V){const oe=document.querySelector(`[data-rearrange-section="${P}"]`);oe&&(oe.style.transform="")}I&&Kn(P=>P&&{...P,sections:P.sections.map(oe=>{const K=E.get(oe.id);return K?{...oe,currentRect:{...oe.currentRect,x:Math.max(0,K.x+D),y:Math.max(0,K.y+B)}}:oe})})}}}),(Re||St)&&at&&l.jsx(V8,{rearrangeState:at,onChange:Kn,isDarkMode:Os,exiting:St,blankCanvas:pt,extraSnapRects:st.map(D=>({x:D.x,y:D.y,width:D.width,height:D.height})),clearSignal:Cn,deselectSignal:Qt,onSelectionChange:(D,B)=>{As.current=D,B||(Ts.current=new Set,mo(I=>I+1))},onDragMove:(D,B)=>{const I=Ts.current;if(I.size){if(!mn.current){mn.current=new Map;for(const V of st)I.has(V.id)&&mn.current.set(V.id,{x:V.x,y:V.y})}for(const V of I){const E=document.querySelector(`[data-design-placement="${V}"]`);E&&(E.style.transform=`translate(${D}px, ${B}px)`)}}},onDragEnd:(D,B,I)=>{const V=Ts.current,E=mn.current;if(mn.current=null,!(!V.size||!E)){for(const P of V){const oe=document.querySelector(`[data-design-placement="${P}"]`);oe&&(oe.style.transform="")}I&&Lt(P=>P.map(oe=>{const K=E.get(oe.id);return K?{...oe,x:Math.max(0,K.x+D),y:Math.max(0,K.y+B)}:oe}))}}}),l.jsx("canvas",{ref:Ds,className:`${Qe.drawCanvas} ${Jn?Qe.active:""}`,style:{opacity:$i?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Qe.markersLayer,"data-feedback-toolbar":!0,children:[pe&&bs.filter(D=>!D.isFixed).map((D,B,I)=>l.jsx(Dx,{annotation:D,globalIndex:bs.findIndex(V=>V.id===D.id),layerIndex:B,layerSize:I.length,isExiting:Ne,isClearing:_e,isAnimated:Si.has(D.id),isHovered:!Ne&&ot===D.id,isDeleting:lt===D.id,isEditingAny:!!J,renumberFrom:an,markerClickBehavior:on.markerClickBehavior,tooltipStyle:H(D),onHoverEnter:V=>!Ne&&V.id!==ci.current&&ln(V),onHoverLeave:()=>ln(null),onClick:V=>on.markerClickBehavior==="delete"?Yt(V.id):Me(V),onContextMenu:Me},D.id)),pe&&!Ne&&z.filter(D=>!D.isFixed).map(D=>l.jsx(Nx,{annotation:D},D.id))]}),l.jsxs("div",{className:Qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[pe&&bs.filter(D=>D.isFixed).map((D,B,I)=>l.jsx(Dx,{annotation:D,globalIndex:bs.findIndex(V=>V.id===D.id),layerIndex:B,layerSize:I.length,isExiting:Ne,isClearing:_e,isAnimated:Si.has(D.id),isHovered:!Ne&&ot===D.id,isDeleting:lt===D.id,isEditingAny:!!J,renumberFrom:an,markerClickBehavior:on.markerClickBehavior,tooltipStyle:H(D),onHoverEnter:V=>!Ne&&V.id!==ci.current&&ln(V),onHoverLeave:()=>ln(null),onClick:V=>on.markerClickBehavior==="delete"?Yt(V.id):Me(V),onContextMenu:Me},D.id)),pe&&!Ne&&z.filter(D=>D.isFixed).map(D=>l.jsx(Nx,{annotation:D,fixed:!0},D.id))]}),j&&l.jsxs("div",{className:Qe.overlay,"data-feedback-toolbar":!0,style:F||J?{zIndex:99999}:void 0,children:[(re==null?void 0:re.rect)&&!F&&!Et&&!ao&&l.jsx("div",{className:`${Qe.hoverHighlight} ${Qe.enter}`,style:{left:re.rect.left,top:re.rect.top,width:re.rect.width,height:re.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),In.filter(D=>document.contains(D.element)).map((D,B)=>{const I=D.element.getBoundingClientRect(),V=In.length>1;return l.jsx("div",{className:V?Qe.multiSelectOutline:Qe.singleSelectOutline,style:{position:"fixed",left:I.left,top:I.top,width:I.width,height:I.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},B)}),ot&&!F&&(()=>{var E;const D=T.find(P=>P.id===ot);if(!(D!=null&&D.boundingBox))return null;if((E=D.elementBoundingBoxes)!=null&&E.length)return yt.length>0?yt.filter(P=>document.contains(P)).map((P,oe)=>{const K=P.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`hover-outline-live-${oe}`)}):D.elementBoundingBoxes.map((P,oe)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:P.x,top:P.y-gt,width:P.width,height:P.height}},`hover-outline-${oe}`));const B=kt&&document.contains(kt)?kt.getBoundingClientRect():null,I=B?{x:B.left,y:B.top,width:B.width,height:B.height}:{x:D.boundingBox.x,y:D.isFixed?D.boundingBox.y:D.boundingBox.y-gt,width:D.boundingBox.width,height:D.boundingBox.height},V=D.isMultiSelect;return l.jsx("div",{className:`${V?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:I.x,top:I.y,width:I.width,height:I.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),re&&!F&&!Et&&!ao&&l.jsxs("div",{className:`${Qe.hoverTooltip} ${Qe.enter}`,style:{left:Math.max(8,Math.min(L.x,window.innerWidth-100)),top:Math.max(L.y-(re.reactComponents?48:32),8)},children:[re.reactComponents&&l.jsx("div",{className:Qe.hoverReactPath,children:re.reactComponents}),l.jsx("div",{className:Qe.hoverElementName,children:re.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(sn=F.multiSelectElements)!=null&&sn.length?F.multiSelectElements.filter(D=>document.contains(D)).map((D,B)=>{const I=D.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:I.left,top:I.top,width:I.width,height:I.height}},`pending-multi-${B}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const D=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Qe.singleSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Vn?Qe.exit:Qe.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-gt,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const D=F.x,B=F.isFixed?F.y:F.y-gt;return l.jsxs(l.Fragment,{children:[l.jsx(IM,{x:D,y:B,isMultiSelect:F.isMultiSelect,isExiting:Vn}),l.jsx(Yd,{ref:Jo,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:dt,onCancel:Kt,isExiting:Vn,lightMode:!Os,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,D/100*window.innerWidth)),...B>window.innerHeight-290?{bottom:window.innerHeight-B+20}:{top:B+20}}})]})})()]}),J&&l.jsxs(l.Fragment,{children:[(ks=J.elementBoundingBoxes)!=null&&ks.length?Ke.length>0?Ke.filter(D=>document.contains(D)).map((D,B)=>{const I=D.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:I.left,top:I.top,width:I.width,height:I.height}},`edit-multi-live-${B}`)}):J.elementBoundingBoxes.map((D,B)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:D.x,top:D.y-gt,width:D.width,height:D.height}},`edit-multi-${B}`)):(()=>{const D=mt&&document.contains(mt)?mt.getBoundingClientRect():null,B=D?{x:D.left,y:D.top,width:D.width,height:D.height}:J.boundingBox?{x:J.boundingBox.x,y:J.isFixed?J.boundingBox.y:J.boundingBox.y-gt,width:J.boundingBox.width,height:J.boundingBox.height}:null;return B?l.jsx("div",{className:`${J.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:B.x,top:B.y,width:B.width,height:B.height,...J.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Yd,{ref:To,element:J.element,selectedText:J.selectedText,computedStyles:O8(J.computedStyles),placeholder:"Edit your feedback...",initialValue:J.comment,submitLabel:"Save",onSubmit:kn,onCancel:Tn,onDelete:()=>Yt(J.id),isExiting:Eo,lightMode:!Os,accentColor:J.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const D=J.isFixed?J.y:J.y-gt;return{left:Math.max(160,Math.min(window.innerWidth-160,J.x/100*window.innerWidth)),...D>window.innerHeight-290?{bottom:window.innerHeight-D+20}:{top:D+20}}})()})]}),ao&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:qs,className:Qe.dragSelection}),l.jsx("div",{ref:Qo,className:Qe.highlightsContainer})]})]})]}),document.body)}var ZM=Object.freeze({}),JM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:ZM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},un=new JM;function e7(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(un.registerPanel(c,t,u.current,p.current),()=>un.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}un.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>un.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>un.subscribe(c,b),()=>un.getValues(c),()=>un.getValues(c));return h2(n,x,"")}function h2(t,n,i){var c,u,d,h,p,y,g,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(t7(j)||n7(j))a[S]=(d=n[k])!=null?d:j;else if(s7(j))a[S]=(h=n[k])!=null?h:j;else if(o7(j)){const T=(p=j.default)!=null?p:r7(j.options);a[S]=(y=n[k])!=null?y:T}else i7(j)?a[S]=(x=(g=n[k])!=null?g:j.default)!=null?x:"#000000":a7(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=h2(j,n,k))}return a}function Ol(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function t7(t){return Ol(t,"spring")}function n7(t){return Ol(t,"easing")}function s7(t){return Ol(t,"action")}function o7(t){return Ol(t,"select")&&"options"in t&&Array.isArray(t.options)}function i7(t){return Ol(t,"color")}function a7(t){return Ol(t,"text")}function r7(t){const n=t[0];return typeof n=="string"?n:n.value}function fp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Bd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(fp(n)))}function Ec(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function Tc(t,n,i,a,c){var y,g;const u=un.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));un.updateValue(t,n,Bd(p,a))}function l7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function wd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Tm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function m2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=m2(i.children,n);if(a)return a}}return null}var Sd=4;function c7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function u7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=c7(n);return t.key?`${p2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function d7(t){return t.key?`${p2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function p2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var _2=_.createContext({activePanelId:null,activePath:null});function f7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=un.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((y=S.interaction)!=null?y:"scroll")!==p)continue;const j=m2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(wd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const M=h("scroll")||h("drag")||h("move");if(M&&M.control.type==="slider"){j.preventDefault();const q=k==="arrowright"||k==="arrowup"?1:-1,G=Ec(M.control,M.shortcut);Tc(M.panelId,M.path,M.control,G,q);return}}const T=a.current.has(k);a.current.add(k);const U=Tm(j),R=un.resolveShortcutTarget(k,U);if(R&&(i({activePanelId:R.panelId,activePath:R.path}),!T&&R.control.type==="toggle")){const M=un.getValue(R.panelId,R.path);un.updateValue(R.panelId,R.path,!M)}T||(u.current=null,d.current=0)},y=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const U of a.current){const R=Tm(j),M=un.resolveShortcutTarget(U,R);if(M){i({activePanelId:M.panelId,activePath:M.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=j=>{var U,R;if(wd())return;const k=Tm(j);if(a.current.size>0)for(const M of a.current){const q=un.resolveShortcutTarget(M,k);if(!q)continue;const{panelId:G,path:W,control:Z}=q;if(((R=(U=Z.shortcut)==null?void 0:U.interaction)!=null?R:"scroll")!=="scroll"||Z.type!=="slider")continue;j.preventDefault();const pe=Ec(Z,Z.shortcut),be=j.deltaY>0?-1:1;Tc(G,W,Z,pe,be);return}const T=un.resolveScrollOnlyTargets();for(const{panelId:M,path:q,control:G,shortcut:W}of T){if(G.type!=="slider")continue;j.preventDefault();const Z=Ec(G,W),he=j.deltaY>0?-1:1;Tc(M,q,G,Z,he);return}},x=j=>{if(wd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(wd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const U=j.clientX-u.current;u.current=j.clientX,d.current+=U;const R=Ec(T.control,T.shortcut),M=Math.trunc(d.current/Sd);M!==0&&(d.current-=M*Sd,Tc(T.panelId,T.path,T.control,R,M))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const U=Ec(k.control,k.shortcut),R=Math.trunc(d.current/Sd);R!==0&&(d.current-=R*Sd,Tc(k.panelId,k.path,k.control,U,R))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(_2.Provider,{value:n,children:t})}var Zp="M6 9.5L12 15.5L18 9.5",h7="M5 12.75L10 19L19 5",Am={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},m7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],p7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ox={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Xd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,w]=_.useState(void 0),[S,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const U=()=>j(window.innerHeight);return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[a]),_.useEffect(()=>{const U=x.current;if(!U)return;const R=new ResizeObserver(()=>{if(h){const M=U.offsetHeight;w(q=>q===M?q:M)}});return R.observe(U),()=>R.disconnect()},[h]);const k=()=>{if(c&&a)return;const U=!h;p(U),g(!U),u==null||u(U)},T=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Ox.path,fill:"currentColor"}),Ox.circles.map((U,R)=>l.jsx("circle",{cx:U.cx,cy:U.cy,r:U.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},R))]}),!a&&l.jsx(ii.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Zp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:U=>U.stopPropagation(),children:d})]}),l.jsx(ef,{initial:!1,children:h&&l.jsx(ii.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const U=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ii.div,{className:"dialkit-panel-inner",style:U,onClick:h?void 0:k,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var _7=3,g7=32,y7=200,x7=8;function qo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ct;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),w=_.useRef(null),[S,j]=_.useState(!1),[k,T]=_.useState(!1),[U,R]=_.useState(!1),[M,q]=_.useState(!1),[G,W]=_.useState(!1),[Z,he]=_.useState(!1),[pe,be]=_.useState(""),Ne=_.useRef(null),Ze=_.useRef(null),re=_.useRef(!0),ie=_.useRef(null),L=_.useRef(null),ae=_.useRef(1),F=(n-a)/(c-a)*100,me=S||U,Ee=op(F),$=ld(Ee,Y=>`${Y}%`),le=ld(Ee,Y=>`max(5px, calc(${Y}% - 9px))`),ne=op(0),Se=ld(ne,Y=>`calc(100% + ${Math.abs(Y)}px)`),De=ld(ne,Y=>Y<0?Y:0);_.useEffect(()=>{!S&&!ie.current&&Ee.jump(F)},[F,S,Ee]);const _e=_.useCallback(Y=>{const te=L.current;if(!te)return n;const Ae=(Y-te.left)/ae.current,rt=y.current?y.current.offsetWidth:te.width,qe=Math.max(0,Math.min(1,Ae/rt)),Be=a+qe*(c-a);return Math.max(a,Math.min(c,Be))},[a,c,n]),Le=_.useCallback(Y=>(Y-a)/(c-a)*100,[a,c]),ot=_.useCallback((Y,te)=>{const ve=L.current;if(!ve)return 0;const Ae=te<0?ve.left-Y:Y-ve.right,rt=Math.max(0,Ae-g7);return te*x7*Math.sqrt(Math.min(rt/y7,1))},[]),Ie=_.useCallback(Y=>{if(!Z&&(Y.preventDefault(),Y.target.setPointerCapture(Y.pointerId),Ze.current={x:Y.clientX,y:Y.clientY},re.current=!0,j(!0),y.current)){L.current=y.current.getBoundingClientRect();const te=y.current.offsetWidth;ae.current=L.current.width/te}},[Z]),kt=_.useCallback(Y=>{if(!S||!Ze.current)return;const te=Y.clientX-Ze.current.x,ve=Y.clientY-Ze.current.y,Ae=Math.sqrt(te*te+ve*ve);if(re.current&&Ae>_7&&(re.current=!1,T(!0)),!re.current){const rt=L.current;rt&&(Y.clientX<rt.left?ne.jump(ot(Y.clientX,-1)):Y.clientX>rt.right?ne.jump(ot(Y.clientX,1)):ne.jump(0));const qe=_e(Y.clientX),Be=Le(qe);ie.current&&(ie.current.stop(),ie.current=null),Ee.jump(Be),i(Bd(qe,u))}},[S,_e,Le,i,Ee,ne,ot]),Ot=_.useCallback(Y=>{if(S){if(re.current){const te=_e(Y.clientX),Ae=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):l7(te,a,c),rt=Le(Ae);ie.current&&ie.current.stop(),ie.current=Q1(Ee,rt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ie.current=null}}),i(Bd(Ae,u))}ne.get()!==0&&Q1(ne,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),Ze.current=null}},[S,_e,Le,i,a,c,Ee,ne]);_.useEffect(()=>(M&&!Z&&!G?Ne.current=setTimeout(()=>{W(!0)},800):!M&&!Z&&(Ne.current&&(clearTimeout(Ne.current),Ne.current=null),W(!1)),()=>{Ne.current&&clearTimeout(Ne.current)}),[M,Z,G]),_.useEffect(()=>{Z&&x.current&&(x.current.focus(),x.current.select())},[Z]);const yt=Y=>{be(Y.target.value)},et=()=>{const Y=parseFloat(pe);if(!isNaN(Y)){const te=Math.max(a,Math.min(c,Y));i(Bd(te,u))}he(!1),q(!1),W(!1)},lt=Y=>{G&&(Y.stopPropagation(),Y.preventDefault(),he(!0),be(n.toFixed(fp(u))))},Pt=Y=>{Y.key==="Enter"?et():Y.key==="Escape"&&(he(!1),q(!1))},an=()=>{et()},tn=n.toFixed(fp(u)),J=8,Oe=10,mt=10;let je=30,Ke=78;const it=(ct=y.current)==null?void 0:ct.offsetWidth;it&&it>0&&(b.current&&(je=(Oe+b.current.offsetWidth+J)/it*100),w.current&&(Ke=(it-mt-w.current.offsetWidth-J)/it*100));const gt=F<je||F>Ke,xt=me?gt?.1:k?.9:.5:0,Et=(c-a)/u,Bt=Et<=10?Array.from({length:Et-1},(Y,te)=>{const ve=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},te)}):Array.from({length:9},(Y,te)=>{const ve=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},te)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ii.div,{ref:g,className:`dialkit-slider ${me?"dialkit-slider-active":""}`,onPointerDown:Ie,onPointerMove:kt,onPointerUp:Ot,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),style:{width:Se,x:De},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Bt}),l.jsx(ii.div,{className:"dialkit-slider-fill",style:{width:$}}),l.jsx(ii.div,{className:"dialkit-slider-handle",style:{left:le,y:"-50%"},animate:{opacity:xt,scaleX:me?1:.25,scaleY:me&&gt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:u7(h)})]}),Z?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:pe,onChange:yt,onKeyDown:Pt,onBlur:an,onClick:Y=>Y.stopPropagation(),onMouseDown:Y=>Y.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${G?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:lt,onMouseDown:Y=>G&&Y.stopPropagation(),style:{cursor:G?"text":"default"},children:tn})]})})}function Jp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function b7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:d7(a)})]}),l.jsx(Jp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function v7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function g2({spring:t,isSimpleMode:n}){var j,k,T,U,R;let c,u,d;if(n){const M=(j=t.visualDuration)!=null?j:.3,q=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/M,c=Math.pow(c,2),u=2*(1-q)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(U=t.damping)!=null?U:17,d=(R=t.mass)!=null?R:1;const h=2,p=v7(c,u,d,h),y=p.map(([,M])=>M),g=Math.min(...y),b=Math.max(...y)-g,w=p.map(([M,q],G)=>{const W=M/h*256,he=140-((q-g)/(b||1)*140*.6+140*.2);return`${G===0?"M":"L"} ${W} ${he}`}).join(" "),S=[];for(let M=1;M<4;M++){const q=64*M,G=140/4*M;S.push(l.jsx("line",{x1:q,y1:0,x2:q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${M}`),l.jsx("line",{x1:0,y1:G,x2:256,y2:G,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${M}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function w7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,S;const u=_.useSyncExternalStore(j=>un.subscribe(t,j),()=>un.getSpringMode(t,n),()=>un.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{un.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,k)=>{if(d){const{stiffness:T,damping:U,mass:R,...M}=a;c({...M,[j]:k})}else{const{visualDuration:T,bounce:U,...R}=a;c({...R,[j]:k})}};return l.jsx(Xd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(g2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Jp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(qo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(qo,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(qo,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function S7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function C7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,T,U;const u=_.useSyncExternalStore(R=>un.subscribe(t,R),()=>un.getTransitionMode(t,n),()=>un.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=R=>{un.updateTransitionMode(t,n,R),c(R==="easing"?p.current.easing:R==="simple"?p.current.simple:p.current.advanced)},b=(R,M)=>{if(h){const{stiffness:q,damping:G,mass:W,...Z}=y;c({...Z,[R]:M})}else{const{visualDuration:q,bounce:G,...W}=y;c({...W,[R]:M})}},w=(R,M)=>{const q=[...g.ease];q[R]=M,c({...g,ease:q})};return l.jsx(Xd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(S7,{easing:g}):l.jsx(g2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Jp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"x1",value:g.ease[0],onChange:R=>w(0,R),min:0,max:1,step:.01}),l.jsx(qo,{label:"y1",value:g.ease[1],onChange:R=>w(1,R),min:-1,max:2,step:.01}),l.jsx(qo,{label:"x2",value:g.ease[2],onChange:R=>w(2,R),min:0,max:1,step:.01}),l.jsx(qo,{label:"y2",value:g.ease[3],onChange:R=>w(3,R),min:-1,max:2,step:.01}),l.jsx(qo,{label:"Duration",value:g.duration,onChange:R=>c({...g,duration:R}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(j7,{ease:g.ease,onChange:R=>c({...g,ease:R})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:R=>b("visualDuration",R),min:.1,max:1,step:.05,unit:"s"}),l.jsx(qo,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:R=>b("bounce",R),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Stiffness",value:(k=y.stiffness)!=null?k:400,onChange:R=>b("stiffness",R),min:1,max:1e3,step:10}),l.jsx(qo,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:R=>b("damping",R),min:1,max:100,step:1}),l.jsx(qo,{label:"Mass",value:(U=y.mass)!=null?U:1,onChange:R=>b("mass",R),min:.1,max:10,step:.1})]})]})})}function zx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function k7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function j7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(zx(t)),a(!0)},h=()=>{const y=k7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:zx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function M7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function E7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function T7(t){return t.map(n=>typeof n=="string"?{value:n,label:E7(n)}:n)}function A7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=T7(i),w=b.find(k=>k.value===n),S=_.useCallback(()=>{const k=d.current;if(!k)return;const T=k.getBoundingClientRect(),U=8+b.length*36,R=window.innerHeight-T.bottom-4,M=R<U&&T.top>R;x({top:M?T.top-4:T.bottom+4,left:T.left,width:T.width,above:M})},[b.length]);return _.useEffect(()=>{var T;const k=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(k!=null?k:document.body)},[]),_.useEffect(()=>{c&&S()},[c,S]),_.useEffect(()=>{if(!c)return;const k=T=>{const U=T.target;d.current&&!d.current.contains(U)&&h.current&&!h.current.contains(U)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ii.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Zp})})]})]}),p&&Nl.createPortal(l.jsx(ef,{children:c&&g&&l.jsx(ii.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var D7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function N7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),D7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?R7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function R7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function B7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(T=>T.id===i),b=_.useCallback(()=>{var U;if(!g)return;const T=(U=d.current)==null?void 0:U.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),w=_.useCallback(()=>u(!1),[]),S=_.useCallback(()=>{c?w():b()},[c,b,w]);_.useEffect(()=>{if(!c)return;const T=U=>{var M,q;const R=U.target;(M=d.current)!=null&&M.contains(R)||(q=h.current)!=null&&q.contains(R)||w()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,w]);const j=T=>{T?un.loadPreset(t,T):un.clearActivePreset(t),w()},k=(T,U)=>{T.stopPropagation(),un.deletePreset(t,U)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ii.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Zp})})]}),Nl.createPortal(l.jsx(ef,{children:c&&l.jsxs(ii.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:U=>k(U,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p7.map((U,R)=>l.jsx("path",{d:U},R))})})]},T.id))]})}),document.body)]})}function L7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(_2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(k=>un.subscribe(t.id,k),()=>un.getValues(t.id),()=>un.getValues(t.id)),y=un.getPresets(t.id),g=un.getActivePresetId(t.id),x=()=>{const k=y.length+2;un.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var U,R,M;const T=p[k.path];switch(k.type){case"slider":return l.jsx(qo,{label:k.label,value:T,onChange:q=>un.updateValue(t.id,k.path,q),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(b7,{label:k.label,checked:T,onChange:q=>un.updateValue(t.id,k.path,q),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(w7,{panelId:t.id,path:k.path,label:k.label,spring:T,onChange:q=>un.updateValue(t.id,k.path,q)},k.path);case"transition":return l.jsx(C7,{panelId:t.id,path:k.path,label:k.label,value:T,onChange:q=>un.updateValue(t.id,k.path,q)},k.path);case"folder":return l.jsx(Xd,{title:k.label,defaultOpen:(U=k.defaultOpen)!=null?U:!0,children:(R=k.children)==null?void 0:R.map(w)},k.path);case"text":return l.jsx(M7,{label:k.label,value:T,onChange:q=>un.updateValue(t.id,k.path,q),placeholder:k.placeholder},k.path);case"select":return l.jsx(A7,{label:k.label,value:T,options:(M=k.options)!=null?M:[],onChange:q=>un.updateValue(t.id,k.path,q)},k.path);case"color":return l.jsx(N7,{label:k.label,value:T,onChange:q=>un.updateValue(t.id,k.path,q)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>un.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ii.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m7.map((k,T)=>l.jsx("path",{d:k},T))})}),l.jsx(B7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ii.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(ef,{initial:!1,mode:"wait",children:a?l.jsx(ii.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:h7})},"check"):l.jsxs(ii.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Am.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Am.sparkle,fill:"currentColor"}),l.jsx("path",{d:Am.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Xd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var O7=typeof process<"u"?!1:!(typeof import.meta<"u");function z7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=O7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[w,S]=_.useState(t),j=_.useRef(null),k=_.useRef(!1),T=_.useRef(null),U=_.useRef(!1);_.useEffect(()=>(p(!0),d(un.getPanels()),un.subscribeGlobal(()=>{d(un.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const Z=new MutationObserver(()=>{var be;const he=(be=g.current)==null?void 0:be.querySelector(".dialkit-panel-inner");if(!he)return;if(he.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Ne=x.x+21,Ze=window.innerWidth/2;S(Ne<Ze?"top-left":"top-right")}else S(t);b(null)}});return Z.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>Z.disconnect()},[y,x,t]);const R=_.useCallback(Z=>{var be;const he=(be=g.current)==null?void 0:be.querySelector(".dialkit-panel-inner");if(!he||he.getAttribute("data-collapsed")!=="true")return;const pe=g.current.getBoundingClientRect();T.current={pointerX:Z.clientX,pointerY:Z.clientY,elX:pe.left,elY:pe.top},U.current=!1,k.current=!0,Z.target.setPointerCapture(Z.pointerId)},[]),M=_.useCallback(Z=>{if(!k.current||!T.current)return;const he=Z.clientX-T.current.pointerX,pe=Z.clientY-T.current.pointerY;!U.current&&Math.abs(he)+Math.abs(pe)<4||(U.current=!0,b({x:T.current.elX+he,y:T.current.elY+pe}))},[]),q=_.useCallback(Z=>{var he;if(k.current&&(k.current=!1,T.current=null,U.current)){Z.stopPropagation();const pe=(he=g.current)==null?void 0:he.querySelector(".dialkit-panel-inner");if(pe){const be=Ne=>{Ne.stopPropagation()};pe.addEventListener("click",be,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const G=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(f7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:G,onPointerDown:y?void 0:R,onPointerMove:y?void 0:M,onPointerUp:y?void 0:q,children:u.map(Z=>l.jsx(L7,{panel:Z,defaultOpen:y||n,inline:y},Z.id))})})});return y?W:Nl.createPortal(W,document.body)}const $7=()=>(e7("Git Visualizer",{preview:[1,0,1]}),null),$x="git-visualizer.chrome-ui-hidden",I7=({children:t})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem($x)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem($x,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[t,l.jsx($7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(z7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(QM,{})]})]})};document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Yv.createRoot(document.getElementById("root")).render(l.jsx(I7,{children:l.jsx(B3,{})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function Qm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qc={exports:{}},as={},qc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function r0(){if(Pp)return le;Pp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=x&&S[x]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,F={};function U(S,b,se){this.props=S,this.context=b,this.refs=F,this.updater=se||T}U.prototype.isReactComponent={},U.prototype.setState=function(S,b){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,b,"setState")},U.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function M(){}M.prototype=U.prototype;function P(S,b,se){this.props=S,this.context=b,this.refs=F,this.updater=se||T}var K=P.prototype=new M;K.constructor=P,R(K,U.prototype),K.isPureReactComponent=!0;var Y=Array.isArray,ie=Object.prototype.hasOwnProperty,ne={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function oe(S,b,se){var ue,pe={},me=null,Ce=null;if(b!=null)for(ue in b.ref!==void 0&&(Ce=b.ref),b.key!==void 0&&(me=""+b.key),b)ie.call(b,ue)&&!re.hasOwnProperty(ue)&&(pe[ue]=b[ue]);var ye=arguments.length-2;if(ye===1)pe.children=se;else if(1<ye){for(var Pe=Array(ye),Ct=0;Ct<ye;Ct++)Pe[Ct]=arguments[Ct+2];pe.children=Pe}if(S&&S.defaultProps)for(ue in ye=S.defaultProps,ye)pe[ue]===void 0&&(pe[ue]=ye[ue]);return{$$typeof:r,type:S,key:me,ref:Ce,props:pe,_owner:ne.current}}function he(S,b){return{$$typeof:r,type:S.type,key:b,ref:S.ref,props:S.props,_owner:S._owner}}function Ee(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Re(S){var b={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return b[se]})}var et=/\/+/g;function tt(S,b){return typeof S=="object"&&S!==null&&S.key!=null?Re(""+S.key):b.toString(36)}function Mt(S,b,se,ue,pe){var me=typeof S;(me==="undefined"||me==="boolean")&&(S=null);var Ce=!1;if(S===null)Ce=!0;else switch(me){case"string":case"number":Ce=!0;break;case"object":switch(S.$$typeof){case r:case e:Ce=!0}}if(Ce)return Ce=S,pe=pe(Ce),S=ue===""?"."+tt(Ce,0):ue,Y(pe)?(se="",S!=null&&(se=S.replace(et,"$&/")+"/"),Mt(pe,b,se,"",function(Ct){return Ct})):pe!=null&&(Ee(pe)&&(pe=he(pe,se+(!pe.key||Ce&&Ce.key===pe.key?"":(""+pe.key).replace(et,"$&/")+"/")+S)),b.push(pe)),1;if(Ce=0,ue=ue===""?".":ue+":",Y(S))for(var ye=0;ye<S.length;ye++){me=S[ye];var Pe=ue+tt(me,ye);Ce+=Mt(me,b,se,Pe,pe)}else if(Pe=v(S),typeof Pe=="function")for(S=Pe.call(S),ye=0;!(me=S.next()).done;)me=me.value,Pe=ue+tt(me,ye++),Ce+=Mt(me,b,se,Pe,pe);else if(me==="object")throw b=String(S),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Ce}function qt(S,b,se){if(S==null)return S;var ue=[],pe=0;return Mt(S,ue,"","",function(me){return b.call(se,me,pe++)}),ue}function pt(S){if(S._status===-1){var b=S._result;b=b(),b.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=b)}if(S._status===1)return S._result.default;throw S._result}var De={current:null},z={transition:null},X={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:z,ReactCurrentOwner:ne};function B(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:qt,forEach:function(S,b,se){qt(S,function(){b.apply(this,arguments)},se)},count:function(S){var b=0;return qt(S,function(){b++}),b},toArray:function(S){return qt(S,function(b){return b})||[]},only:function(S){if(!Ee(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=U,le.Fragment=n,le.Profiler=l,le.PureComponent=P,le.StrictMode=s,le.Suspense=p,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,le.act=B,le.cloneElement=function(S,b,se){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ue=R({},S.props),pe=S.key,me=S.ref,Ce=S._owner;if(b!=null){if(b.ref!==void 0&&(me=b.ref,Ce=ne.current),b.key!==void 0&&(pe=""+b.key),S.type&&S.type.defaultProps)var ye=S.type.defaultProps;for(Pe in b)ie.call(b,Pe)&&!re.hasOwnProperty(Pe)&&(ue[Pe]=b[Pe]===void 0&&ye!==void 0?ye[Pe]:b[Pe])}var Pe=arguments.length-2;if(Pe===1)ue.children=se;else if(1<Pe){ye=Array(Pe);for(var Ct=0;Ct<Pe;Ct++)ye[Ct]=arguments[Ct+2];ue.children=ye}return{$$typeof:r,type:S.type,key:pe,ref:me,props:ue,_owner:Ce}},le.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},le.createElement=oe,le.createFactory=function(S){var b=oe.bind(null,S);return b.type=S,b},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:f,render:S}},le.isValidElement=Ee,le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:pt}},le.memo=function(S,b){return{$$typeof:g,type:S,compare:b===void 0?null:b}},le.startTransition=function(S){var b=z.transition;z.transition={};try{S()}finally{z.transition=b}},le.unstable_act=B,le.useCallback=function(S,b){return De.current.useCallback(S,b)},le.useContext=function(S){return De.current.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S){return De.current.useDeferredValue(S)},le.useEffect=function(S,b){return De.current.useEffect(S,b)},le.useId=function(){return De.current.useId()},le.useImperativeHandle=function(S,b,se){return De.current.useImperativeHandle(S,b,se)},le.useInsertionEffect=function(S,b){return De.current.useInsertionEffect(S,b)},le.useLayoutEffect=function(S,b){return De.current.useLayoutEffect(S,b)},le.useMemo=function(S,b){return De.current.useMemo(S,b)},le.useReducer=function(S,b,se){return De.current.useReducer(S,b,se)},le.useRef=function(S){return De.current.useRef(S)},le.useState=function(S){return De.current.useState(S)},le.useSyncExternalStore=function(S,b,se){return De.current.useSyncExternalStore(S,b,se)},le.useTransition=function(){return De.current.useTransition()},le.version="18.3.1",le}var Ap;function Wu(){return Ap||(Ap=1,qc.exports=r0()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function i0(){if(bp)return as;bp=1;var r=Wu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var y,x={},v=null,T=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(T=p.ref);for(y in p)s.call(p,y)&&!c.hasOwnProperty(y)&&(x[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)x[y]===void 0&&(x[y]=p[y]);return{$$typeof:e,type:f,key:v,ref:T,props:x,_owner:l.current}}return as.Fragment=n,as.jsx=u,as.jsxs=u,as}var Op;function s0(){return Op||(Op=1,Qc.exports=i0()),Qc.exports}var _=s0(),te=Wu();const qm=Qm(te);var tl={},Yc={exports:{}},wt={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function o0(){return Dp||(Dp=1,(function(r){function e(z,X){var B=z.length;z.push(X);e:for(;0<B;){var S=B-1>>>1,b=z[S];if(0<l(b,X))z[S]=X,z[B]=b,B=S;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var X=z[0],B=z.pop();if(B!==X){z[0]=B;e:for(var S=0,b=z.length,se=b>>>1;S<se;){var ue=2*(S+1)-1,pe=z[ue],me=ue+1,Ce=z[me];if(0>l(pe,B))me<b&&0>l(Ce,pe)?(z[S]=Ce,z[me]=B,S=me):(z[S]=pe,z[ue]=B,S=ue);else if(me<b&&0>l(Ce,B))z[S]=Ce,z[me]=B,S=me;else break e}}return X}function l(z,X){var B=z.sortIndex-X.sortIndex;return B!==0?B:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,x=null,v=3,T=!1,R=!1,F=!1,U=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(z){for(var X=n(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=z)s(g),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(g)}}function Y(z){if(F=!1,K(z),!R)if(n(p)!==null)R=!0,pt(ie);else{var X=n(g);X!==null&&De(Y,X.startTime-z)}}function ie(z,X){R=!1,F&&(F=!1,M(oe),oe=-1),T=!0;var B=v;try{for(K(X),x=n(p);x!==null&&(!(x.expirationTime>X)||z&&!Re());){var S=x.callback;if(typeof S=="function"){x.callback=null,v=x.priorityLevel;var b=S(x.expirationTime<=X);X=r.unstable_now(),typeof b=="function"?x.callback=b:x===n(p)&&s(p),K(X)}else s(p);x=n(p)}if(x!==null)var se=!0;else{var ue=n(g);ue!==null&&De(Y,ue.startTime-X),se=!1}return se}finally{x=null,v=B,T=!1}}var ne=!1,re=null,oe=-1,he=5,Ee=-1;function Re(){return!(r.unstable_now()-Ee<he)}function et(){if(re!==null){var z=r.unstable_now();Ee=z;var X=!0;try{X=re(!0,z)}finally{X?tt():(ne=!1,re=null)}}else ne=!1}var tt;if(typeof P=="function")tt=function(){P(et)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,qt=Mt.port2;Mt.port1.onmessage=et,tt=function(){qt.postMessage(null)}}else tt=function(){U(et,0)};function pt(z){re=z,ne||(ne=!0,tt())}function De(z,X){oe=U(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){R||T||(R=!0,pt(ie))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var B=v;v=X;try{return z()}finally{v=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=v;v=z;try{return X()}finally{v=B}},r.unstable_scheduleCallback=function(z,X,B){var S=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?S+B:S):B=S,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,z={id:y++,callback:X,priorityLevel:z,startTime:B,expirationTime:b,sortIndex:-1},B>S?(z.sortIndex=B,e(g,z),n(p)===null&&z===n(g)&&(F?(M(oe),oe=-1):F=!0,De(Y,B-S))):(z.sortIndex=b,e(p,z),R||T||(R=!0,pt(ie))),z},r.unstable_shouldYield=Re,r.unstable_wrapCallback=function(z){var X=v;return function(){var B=v;v=X;try{return z.apply(this,arguments)}finally{v=B}}}})(Jc)),Jc}var Lp;function l0(){return Lp||(Lp=1,Xc.exports=o0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function a0(){if(Mp)return wt;Mp=1;var r=Wu(),e=l0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function v(t){return p.call(x,t)?!0:p.call(y,t)?!1:g.test(t)?x[t]=!0:(y[t]=!0,!1)}function T(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,a){if(i===null||typeof i>"u"||T(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){U[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];U[i]=new F(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){U[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){U[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){U[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){U[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){U[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){U[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){U[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(M,P);U[i]=new F(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(M,P);U[i]=new F(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(M,P);U[i]=new F(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){U[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),U.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){U[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function K(t,i,o,a){var d=U.hasOwnProperty(i)?U[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,a)&&(o=null),a||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var Y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),ne=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),Re=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),Mt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,S;function b(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var se=!1;function ue(t,i){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var a=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){a=N}t.call(i.prototype)}else{try{throw Error()}catch(N){a=N}t()}}catch(N){if(N&&a&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,w=h.length-1;1<=m&&0<=w&&d[m]!==h[w];)w--;for(;1<=m&&0<=w;m--,w--)if(d[m]!==h[w]){if(m!==1||w!==1)do if(m--,w--,0>w||d[m]!==h[w]){var E=`
`+d[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=w);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function pe(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case re:return"Fragment";case ne:return"Portal";case he:return"Profiler";case oe:return"StrictMode";case tt:return"Suspense";case Mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Re:return(t.displayName||"Context")+".Consumer";case Ee:return(t._context.displayName||"Context")+".Provider";case et:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qt:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case pt:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}function Ce(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ct(t){var i=Pe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=Ct(t))}function Ld(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Pe(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ta(t,i){var o=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Md(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jd(t,i){i=i.checked,i!=null&&K(t,"checked",i,!1)}function na(t,i){jd(t,i);var o=ye(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ra(t,i.type,o):i.hasOwnProperty("defaultValue")&&ra(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Fd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ra(t,i,o){(i!=="number"||$s(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ci=Array.isArray;function Rr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ia(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ud(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ci(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function zd(t,i){var o=ye(i.value),a=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Wd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Vd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,Bd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Si(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ly=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){ly.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ii[i]=Ii[t]})});function Hd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+i).trim():i+"px"}function $d(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=Hd(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var ay=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(t,i){if(i){if(ay[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function la(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Pr=null,Ar=null;function Gd(t){if(t=Ki(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),ua(t.stateNode,t.type,i))}}function Kd(t){Pr?Ar?Ar.push(t):Ar=[t]:Pr=t}function Qd(){if(Pr){var t=Pr,i=Ar;if(Ar=Pr=null,Gd(t),i)for(t=0;t<i.length;t++)Gd(i[t])}}function qd(t,i){return t(i)}function Yd(){}var da=!1;function Xd(t,i,o){if(da)return t(i,o);da=!0;try{return qd(t,i,o)}finally{da=!1,(Pr!==null||Ar!==null)&&(Yd(),Qd())}}function ki(t,i){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ha=!1;if(f)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{ha=!1}function cy(t,i,o,a,d,h,m,w,E){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(O){this.onError(O)}}var Ni=!1,Ks=null,Qs=!1,fa=null,uy={onError:function(t){Ni=!0,Ks=t}};function dy(t,i,o,a,d,h,m,w,E){Ni=!1,Ks=null,cy.apply(uy,arguments)}function hy(t,i,o,a,d,h,m,w,E){if(dy.apply(this,arguments),Ni){if(Ni){var N=Ks;Ni=!1,Ks=null}else throw Error(n(198));Qs||(Qs=!0,fa=N)}}function ir(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Jd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Zd(t){if(ir(t)!==t)throw Error(n(188))}function fy(t){var i=t.alternate;if(!i){if(i=ir(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Zd(d),t;if(h===a)return Zd(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,w=d.child;w;){if(w===o){m=!0,o=d,a=h;break}if(w===a){m=!0,a=d,o=h;break}w=w.sibling}if(!m){for(w=h.child;w;){if(w===o){m=!0,o=h,a=d;break}if(w===a){m=!0,a=h,o=d;break}w=w.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function eh(t){return t=fy(t),t!==null?th(t):null}function th(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=th(t);if(i!==null)return i;t=t.sibling}return null}var nh=e.unstable_scheduleCallback,rh=e.unstable_cancelCallback,py=e.unstable_shouldYield,my=e.unstable_requestPaint,Fe=e.unstable_now,gy=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,ih=e.unstable_UserBlockingPriority,qs=e.unstable_NormalPriority,_y=e.unstable_LowPriority,sh=e.unstable_IdlePriority,Ys=null,Yt=null;function yy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:xy,vy=Math.log,wy=Math.LN2;function xy(t){return t>>>=0,t===0?32:31-(vy(t)/wy|0)|0}var Xs=64,Js=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var w=m&~d;w!==0?a=Ri(w):(h&=m,h!==0&&(a=Ri(h)))}else m=o&~d,m!==0?a=Ri(m):h!==0&&(a=Ri(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&d)===0&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-jt(i),d=1<<o,a|=t[o],i&=~d;return a}function Ey(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cy(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),w=1<<m,E=d[m];E===-1?((w&o)===0||(w&a)!==0)&&(d[m]=Ey(w,i)):E<=i&&(t.expiredLanes|=w),h&=~w}}function ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oh(){var t=Xs;return Xs<<=1,(Xs&4194240)===0&&(Xs=64),t}function ga(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function Sy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function _a(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-jt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var ve=0;function lh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ah,ya,ch,uh,dh,va=!1,eo=[],En=null,Cn=null,Sn=null,Ai=new Map,bi=new Map,In=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(t,i){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(i.pointerId)}}function Oi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Ki(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function ky(t,i,o,a,d){switch(i){case"focusin":return En=Oi(En,t,i,o,a,d),!0;case"dragenter":return Cn=Oi(Cn,t,i,o,a,d),!0;case"mouseover":return Sn=Oi(Sn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return Ai.set(h,Oi(Ai.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,bi.set(h,Oi(bi.get(h)||null,t,i,o,a,d)),!0}return!1}function fh(t){var i=sr(t.target);if(i!==null){var o=ir(i);if(o!==null){if(i=o.tag,i===13){if(i=Jd(o),i!==null){t.blockedOn=i,dh(t.priority,function(){ch(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=xa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);aa=a,o.target.dispatchEvent(a),aa=null}else return i=Ki(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function ph(t,i,o){to(t)&&o.delete(i)}function Ty(){va=!1,En!==null&&to(En)&&(En=null),Cn!==null&&to(Cn)&&(Cn=null),Sn!==null&&to(Sn)&&(Sn=null),Ai.forEach(ph),bi.forEach(ph)}function Di(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ty)))}function Li(t){function i(d){return Di(d,t)}if(0<eo.length){Di(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(En!==null&&Di(En,t),Cn!==null&&Di(Cn,t),Sn!==null&&Di(Sn,t),Ai.forEach(i),bi.forEach(i),o=0;o<In.length;o++)a=In[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<In.length&&(o=In[0],o.blockedOn===null);)fh(o),o.blockedOn===null&&In.shift()}var br=Y.ReactCurrentBatchConfig,no=!0;function Ny(t,i,o,a){var d=ve,h=br.transition;br.transition=null;try{ve=1,wa(t,i,o,a)}finally{ve=d,br.transition=h}}function Ry(t,i,o,a){var d=ve,h=br.transition;br.transition=null;try{ve=4,wa(t,i,o,a)}finally{ve=d,br.transition=h}}function wa(t,i,o,a){if(no){var d=xa(t,i,o,a);if(d===null)Fa(t,i,a,ro,o),hh(t,a);else if(ky(d,t,i,o,a))a.stopPropagation();else if(hh(t,a),i&4&&-1<Iy.indexOf(t)){for(;d!==null;){var h=Ki(d);if(h!==null&&ah(h),h=xa(t,i,o,a),h===null&&Fa(t,i,a,ro,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var ro=null;function xa(t,i,o,a){if(ro=null,t=ca(a),t=sr(t),t!==null)if(i=ir(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Jd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function mh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case pa:return 1;case ih:return 4;case qs:case _y:return 16;case sh:return 536870912;default:return 16}default:return 16}}var kn=null,Ea=null,io=null;function gh(){if(io)return io;var t,i=Ea,o=i.length,a,d="value"in kn?kn.value:kn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return io=d.slice(t,1<a?1-a:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function _h(){return!1}function St(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:_h,this.isPropagationStopped=_h,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=St(Or),Mi=B({},Or,{view:0,detail:0}),Py=St(Mi),Sa,Ia,ji,lo=B({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Sa=t.screenX-ji.screenX,Ia=t.screenY-ji.screenY):Ia=Sa=0,ji=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),yh=St(lo),Ay=B({},lo,{dataTransfer:0}),by=St(Ay),Oy=B({},Mi,{relatedTarget:0}),ka=St(Oy),Dy=B({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=St(Dy),My=B({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jy=St(My),Fy=B({},Or,{data:0}),vh=St(Fy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Wy[t])?!!i[t]:!1}function Ta(){return Vy}var By=B({},Mi,{key:function(t){if(t.key){var i=Uy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=St(By),$y=B({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=St($y),Gy=B({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),Ky=St(Gy),Qy=B({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=St(Qy),Yy=B({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=St(Yy),Jy=[9,13,27,32],Na=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var Zy=f&&"TextEvent"in window&&!Fi,xh=f&&(!Na||Fi&&8<Fi&&11>=Fi),Eh=" ",Ch=!1;function Sh(t,i){switch(t){case"keyup":return Jy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function ev(t,i){switch(t){case"compositionend":return Ih(i);case"keypress":return i.which!==32?null:(Ch=!0,Eh);case"textInput":return t=i.data,t===Eh&&Ch?null:t;default:return null}}function tv(t,i){if(Dr)return t==="compositionend"||!Na&&Sh(t,i)?(t=gh(),io=Ea=kn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!nv[t.type]:i==="textarea"}function Th(t,i,o,a){Kd(a),i=fo(i,"onChange"),0<i.length&&(o=new Ca("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Ui=null,zi=null;function rv(t){$h(t,0)}function ao(t){var i=Ur(t);if(Ld(i))return t}function iv(t,i){if(t==="change")return i}var Nh=!1;if(f){var Ra;if(f){var Pa="oninput"in document;if(!Pa){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Pa=typeof Rh.oninput=="function"}Ra=Pa}else Ra=!1;Nh=Ra&&(!document.documentMode||9<document.documentMode)}function Ph(){Ui&&(Ui.detachEvent("onpropertychange",Ah),zi=Ui=null)}function Ah(t){if(t.propertyName==="value"&&ao(zi)){var i=[];Th(i,zi,t,ca(t)),Xd(rv,i)}}function sv(t,i,o){t==="focusin"?(Ph(),Ui=i,zi=o,Ui.attachEvent("onpropertychange",Ah)):t==="focusout"&&Ph()}function ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(zi)}function lv(t,i){if(t==="click")return ao(i)}function av(t,i){if(t==="input"||t==="change")return ao(i)}function cv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:cv;function Wi(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Ft(t[d],i[d]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,i){var o=bh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bh(o)}}function Dh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var t=window,i=$s();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=$s(t.document)}return i}function Aa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function uv(t){var i=Lh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dh(o.ownerDocument.documentElement,o)){if(a!==null&&Aa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=Oh(o,h);var m=Oh(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dv=f&&"documentMode"in document&&11>=document.documentMode,Lr=null,ba=null,Vi=null,Oa=!1;function Mh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Oa||Lr==null||Lr!==$s(a)||(a=Lr,"selectionStart"in a&&Aa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vi&&Wi(Vi,a)||(Vi=a,a=fo(ba,"onSelect"),0<a.length&&(i=new Ca("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Lr)))}function co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Mr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Da={},jh={};f&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function uo(t){if(Da[t])return Da[t];if(!Mr[t])return t;var i=Mr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in jh)return Da[t]=i[o];return t}var Fh=uo("animationend"),Uh=uo("animationiteration"),zh=uo("animationstart"),Wh=uo("transitionend"),Vh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,i){Vh.set(t,i),c(i,[t])}for(var La=0;La<Bh.length;La++){var Ma=Bh[La],hv=Ma.toLowerCase(),fv=Ma[0].toUpperCase()+Ma.slice(1);Tn(hv,"on"+fv)}Tn(Fh,"onAnimationEnd"),Tn(Uh,"onAnimationIteration"),Tn(zh,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Hh(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,hy(a,i,void 0,t),t.currentTarget=null}function $h(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var w=a[m],E=w.instance,N=w.currentTarget;if(w=w.listener,E!==h&&d.isPropagationStopped())break e;Hh(d,w,N),h=E}else for(m=0;m<a.length;m++){if(w=a[m],E=w.instance,N=w.currentTarget,w=w.listener,E!==h&&d.isPropagationStopped())break e;Hh(d,w,N),h=E}}}if(Qs)throw t=fa,Qs=!1,fa=null,t}function Te(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(Gh(i,t,2,!1),o.add(a))}function ja(t,i,o){var a=0;i&&(a|=4),Gh(o,t,a,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(pv.has(o)||ja(o,!1,t),ja(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,ja("selectionchange",!1,i))}}function Gh(t,i,o,a){switch(mh(i)){case 1:var d=Ny;break;case 4:d=Ry;break;default:d=wa}o=d.bind(null,i,o,t),d=void 0,!ha||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,d){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var w=a.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;w!==null;){if(m=sr(w),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}w=w.parentNode}}a=a.return}Xd(function(){var N=h,O=ca(o),D=[];e:{var A=Vh.get(t);if(A!==void 0){var W=Ca,H=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":W=Hy;break;case"focusin":H="focus",W=ka;break;case"focusout":H="blur",W=ka;break;case"beforeblur":case"afterblur":W=ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Ky;break;case Fh:case Uh:case zh:W=Ly;break;case Wh:W=qy;break;case"scroll":W=Py;break;case"wheel":W=Xy;break;case"copy":case"cut":case"paste":W=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=wh}var $=(i&4)!==0,Ue=!$&&t==="scroll",I=$?A!==null?A+"Capture":null:A;$=[];for(var C=N,k;C!==null;){k=C;var L=k.stateNode;if(k.tag===5&&L!==null&&(k=L,I!==null&&(L=ki(C,I),L!=null&&$.push($i(C,L,k)))),Ue)break;C=C.return}0<$.length&&(A=new W(A,H,null,o,O),D.push({event:A,listeners:$}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",A&&o!==aa&&(H=o.relatedTarget||o.fromElement)&&(sr(H)||H[sn]))break e;if((W||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,W?(H=o.relatedTarget||o.toElement,W=N,H=H?sr(H):null,H!==null&&(Ue=ir(H),H!==Ue||H.tag!==5&&H.tag!==6)&&(H=null)):(W=null,H=N),W!==H)){if($=yh,L="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&($=wh,L="onPointerLeave",I="onPointerEnter",C="pointer"),Ue=W==null?A:Ur(W),k=H==null?A:Ur(H),A=new $(L,C+"leave",W,o,O),A.target=Ue,A.relatedTarget=k,L=null,sr(O)===N&&($=new $(I,C+"enter",H,o,O),$.target=k,$.relatedTarget=Ue,L=$),Ue=L,W&&H)t:{for($=W,I=H,C=0,k=$;k;k=jr(k))C++;for(k=0,L=I;L;L=jr(L))k++;for(;0<C-k;)$=jr($),C--;for(;0<k-C;)I=jr(I),k--;for(;C--;){if($===I||I!==null&&$===I.alternate)break t;$=jr($),I=jr(I)}$=null}else $=null;W!==null&&Kh(D,A,W,$,!1),H!==null&&Ue!==null&&Kh(D,Ue,H,$,!0)}}e:{if(A=N?Ur(N):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var G=iv;else if(kh(A))if(Nh)G=av;else{G=ov;var Q=sv}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(G=lv);if(G&&(G=G(t,N))){Th(D,G,o,O);break e}Q&&Q(t,A,N),t==="focusout"&&(Q=A._wrapperState)&&Q.controlled&&A.type==="number"&&ra(A,"number",A.value)}switch(Q=N?Ur(N):window,t){case"focusin":(kh(Q)||Q.contentEditable==="true")&&(Lr=Q,ba=N,Vi=null);break;case"focusout":Vi=ba=Lr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Mh(D,o,O);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Mh(D,o,O)}var q;if(Na)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Dr?Sh(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(xh&&o.locale!=="ko"&&(Dr||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Dr&&(q=gh()):(kn=O,Ea="value"in kn?kn.value:kn.textContent,Dr=!0)),Q=fo(N,Z),0<Q.length&&(Z=new vh(Z,t,null,o,O),D.push({event:Z,listeners:Q}),q?Z.data=q:(q=Ih(o),q!==null&&(Z.data=q)))),(q=Zy?ev(t,o):tv(t,o))&&(N=fo(N,"onBeforeInput"),0<N.length&&(O=new vh("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:N}),O.data=q))}$h(D,i)})}function $i(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fo(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,d)),h=ki(t,i),h!=null&&a.push($i(t,h,d))),t=t.return}return a}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var w=o,E=w.alternate,N=w.stateNode;if(E!==null&&E===a)break;w.tag===5&&N!==null&&(w=N,d?(E=ki(o,h),E!=null&&m.unshift($i(o,E,w))):d||(E=ki(o,h),E!=null&&m.push($i(o,E,w)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var mv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(mv,`
`).replace(gv,"")}function po(t,i,o){if(i=Qh(i),Qh(t)!==i&&o)throw Error(n(425))}function mo(){}var Ua=null,za=null;function Wa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(vv)}:Va;function vv(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Li(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Li(i)}function Nn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Fr,Gi="__reactProps$"+Fr,sn="__reactContainer$"+Fr,Ha="__reactEvents$"+Fr,wv="__reactListeners$"+Fr,xv="__reactHandles$"+Fr;function sr(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Yh(t);t!==null;){if(o=t[Xt])return o;t=Yh(t)}return i}t=o,o=t.parentNode}return null}function Ki(t){return t=t[Xt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Gi]||null}var $a=[],zr=-1;function Rn(t){return{current:t}}function Ne(t){0>zr||(t.current=$a[zr],$a[zr]=null,zr--)}function Se(t,i){zr++,$a[zr]=t.current,t.current=i}var Pn={},nt=Rn(Pn),mt=Rn(!1),or=Pn;function Wr(t,i){var o=t.type.contextTypes;if(!o)return Pn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function gt(t){return t=t.childContextTypes,t!=null}function _o(){Ne(mt),Ne(nt)}function Xh(t,i,o){if(nt.current!==Pn)throw Error(n(168));Se(nt,i),Se(mt,o)}function Jh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Ce(t)||"Unknown",d));return B({},o,a)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,or=nt.current,Se(nt,t),Se(mt,mt.current),!0}function Zh(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Jh(t,i,or),a.__reactInternalMemoizedMergedChildContext=t,Ne(mt),Ne(nt),Se(nt,t)):Ne(mt),Se(mt,o)}var on=null,vo=!1,Ga=!1;function ef(t){on===null?on=[t]:on.push(t)}function Ev(t){vo=!0,ef(t)}function An(){if(!Ga&&on!==null){Ga=!0;var t=0,i=ve;try{var o=on;for(ve=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}on=null,vo=!1}catch(d){throw on!==null&&(on=on.slice(t+1)),nh(pa,An),d}finally{ve=i,Ga=!1}}return null}var Vr=[],Br=0,wo=null,xo=0,Nt=[],Rt=0,lr=null,ln=1,an="";function ar(t,i){Vr[Br++]=xo,Vr[Br++]=wo,wo=t,xo=i}function tf(t,i,o){Nt[Rt++]=ln,Nt[Rt++]=an,Nt[Rt++]=lr,lr=t;var a=ln;t=an;var d=32-jt(a)-1;a&=~(1<<d),o+=1;var h=32-jt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ln=1<<32-jt(i)+d|o<<d|a,an=h+t}else ln=1<<h|o<<d|a,an=t}function Ka(t){t.return!==null&&(ar(t,1),tf(t,1,0))}function Qa(t){for(;t===wo;)wo=Vr[--Br],Vr[Br]=null,xo=Vr[--Br],Vr[Br]=null;for(;t===lr;)lr=Nt[--Rt],Nt[Rt]=null,an=Nt[--Rt],Nt[Rt]=null,ln=Nt[--Rt],Nt[Rt]=null}var It=null,kt=null,Ae=!1,Ut=null;function nf(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function rf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,kt=Nn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=lr!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,kt=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(Ae){var i=kt;if(i){var o=i;if(!rf(t,i)){if(qa(t))throw Error(n(418));i=Nn(o.nextSibling);var a=It;i&&rf(t,i)?nf(a,o):(t.flags=t.flags&-4097|2,Ae=!1,It=t)}}else{if(qa(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ae=!1,It=t}}}function sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Eo(t){if(t!==It)return!1;if(!Ae)return sf(t),Ae=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Wa(t.type,t.memoizedProps)),i&&(i=kt)){if(qa(t))throw of(),Error(n(418));for(;i;)nf(t,i),i=Nn(i.nextSibling)}if(sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kt=Nn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kt=null}}else kt=It?Nn(t.stateNode.nextSibling):null;return!0}function of(){for(var t=kt;t;)t=Nn(t.nextSibling)}function Hr(){kt=It=null,Ae=!1}function Xa(t){Ut===null?Ut=[t]:Ut.push(t)}var Cv=Y.ReactCurrentBatchConfig;function Qi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var w=d.refs;m===null?delete w[h]:w[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function lf(t){var i=t._init;return i(t._payload)}function af(t){function i(I,C){if(t){var k=I.deletions;k===null?(I.deletions=[C],I.flags|=16):k.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)i(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function d(I,C){return I=Un(I,C),I.index=0,I.sibling=null,I}function h(I,C,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<C?(I.flags|=2,C):k):(I.flags|=2,C)):(I.flags|=1048576,C)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function w(I,C,k,L){return C===null||C.tag!==6?(C=Vc(k,I.mode,L),C.return=I,C):(C=d(C,k),C.return=I,C)}function E(I,C,k,L){var G=k.type;return G===re?O(I,C,k.props.children,L,k.key):C!==null&&(C.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&lf(G)===C.type)?(L=d(C,k.props),L.ref=Qi(I,C,k),L.return=I,L):(L=Ko(k.type,k.key,k.props,null,I.mode,L),L.ref=Qi(I,C,k),L.return=I,L)}function N(I,C,k,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=Bc(k,I.mode,L),C.return=I,C):(C=d(C,k.children||[]),C.return=I,C)}function O(I,C,k,L,G){return C===null||C.tag!==7?(C=gr(k,I.mode,L,G),C.return=I,C):(C=d(C,k),C.return=I,C)}function D(I,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Vc(""+C,I.mode,k),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:return k=Ko(C.type,C.key,C.props,null,I.mode,k),k.ref=Qi(I,null,C),k.return=I,k;case ne:return C=Bc(C,I.mode,k),C.return=I,C;case pt:var L=C._init;return D(I,L(C._payload),k)}if(Ci(C)||X(C))return C=gr(C,I.mode,k,null),C.return=I,C;Co(I,C)}return null}function A(I,C,k,L){var G=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return G!==null?null:w(I,C,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ie:return k.key===G?E(I,C,k,L):null;case ne:return k.key===G?N(I,C,k,L):null;case pt:return G=k._init,A(I,C,G(k._payload),L)}if(Ci(k)||X(k))return G!==null?null:O(I,C,k,L,null);Co(I,k)}return null}function W(I,C,k,L,G){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(k)||null,w(C,I,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ie:return I=I.get(L.key===null?k:L.key)||null,E(C,I,L,G);case ne:return I=I.get(L.key===null?k:L.key)||null,N(C,I,L,G);case pt:var Q=L._init;return W(I,C,k,Q(L._payload),G)}if(Ci(L)||X(L))return I=I.get(k)||null,O(C,I,L,G,null);Co(C,L)}return null}function H(I,C,k,L){for(var G=null,Q=null,q=C,Z=C=0,Ke=null;q!==null&&Z<k.length;Z++){q.index>Z?(Ke=q,q=null):Ke=q.sibling;var ge=A(I,q,k[Z],L);if(ge===null){q===null&&(q=Ke);break}t&&q&&ge.alternate===null&&i(I,q),C=h(ge,C,Z),Q===null?G=ge:Q.sibling=ge,Q=ge,q=Ke}if(Z===k.length)return o(I,q),Ae&&ar(I,Z),G;if(q===null){for(;Z<k.length;Z++)q=D(I,k[Z],L),q!==null&&(C=h(q,C,Z),Q===null?G=q:Q.sibling=q,Q=q);return Ae&&ar(I,Z),G}for(q=a(I,q);Z<k.length;Z++)Ke=W(q,I,Z,k[Z],L),Ke!==null&&(t&&Ke.alternate!==null&&q.delete(Ke.key===null?Z:Ke.key),C=h(Ke,C,Z),Q===null?G=Ke:Q.sibling=Ke,Q=Ke);return t&&q.forEach(function(zn){return i(I,zn)}),Ae&&ar(I,Z),G}function $(I,C,k,L){var G=X(k);if(typeof G!="function")throw Error(n(150));if(k=G.call(k),k==null)throw Error(n(151));for(var Q=G=null,q=C,Z=C=0,Ke=null,ge=k.next();q!==null&&!ge.done;Z++,ge=k.next()){q.index>Z?(Ke=q,q=null):Ke=q.sibling;var zn=A(I,q,ge.value,L);if(zn===null){q===null&&(q=Ke);break}t&&q&&zn.alternate===null&&i(I,q),C=h(zn,C,Z),Q===null?G=zn:Q.sibling=zn,Q=zn,q=Ke}if(ge.done)return o(I,q),Ae&&ar(I,Z),G;if(q===null){for(;!ge.done;Z++,ge=k.next())ge=D(I,ge.value,L),ge!==null&&(C=h(ge,C,Z),Q===null?G=ge:Q.sibling=ge,Q=ge);return Ae&&ar(I,Z),G}for(q=a(I,q);!ge.done;Z++,ge=k.next())ge=W(q,I,Z,ge.value,L),ge!==null&&(t&&ge.alternate!==null&&q.delete(ge.key===null?Z:ge.key),C=h(ge,C,Z),Q===null?G=ge:Q.sibling=ge,Q=ge);return t&&q.forEach(function(n0){return i(I,n0)}),Ae&&ar(I,Z),G}function Ue(I,C,k,L){if(typeof k=="object"&&k!==null&&k.type===re&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ie:e:{for(var G=k.key,Q=C;Q!==null;){if(Q.key===G){if(G=k.type,G===re){if(Q.tag===7){o(I,Q.sibling),C=d(Q,k.props.children),C.return=I,I=C;break e}}else if(Q.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&lf(G)===Q.type){o(I,Q.sibling),C=d(Q,k.props),C.ref=Qi(I,Q,k),C.return=I,I=C;break e}o(I,Q);break}else i(I,Q);Q=Q.sibling}k.type===re?(C=gr(k.props.children,I.mode,L,k.key),C.return=I,I=C):(L=Ko(k.type,k.key,k.props,null,I.mode,L),L.ref=Qi(I,C,k),L.return=I,I=L)}return m(I);case ne:e:{for(Q=k.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){o(I,C.sibling),C=d(C,k.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else i(I,C);C=C.sibling}C=Bc(k,I.mode,L),C.return=I,I=C}return m(I);case pt:return Q=k._init,Ue(I,C,Q(k._payload),L)}if(Ci(k))return H(I,C,k,L);if(X(k))return $(I,C,k,L);Co(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,C!==null&&C.tag===6?(o(I,C.sibling),C=d(C,k),C.return=I,I=C):(o(I,C),C=Vc(k,I.mode,L),C.return=I,I=C),m(I)):o(I,C)}return Ue}var $r=af(!0),cf=af(!1),So=Rn(null),Io=null,Gr=null,Ja=null;function Za(){Ja=Gr=Io=null}function ec(t){var i=So.current;Ne(So),t._currentValue=i}function tc(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Kr(t,i){Io=t,Ja=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_t=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:i,next:null},Gr===null){if(Io===null)throw Error(n(308));Gr=t,Io.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return i}var cr=null;function nc(t){cr===null?cr=[t]:cr.push(t)}function uf(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,nc(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,a)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function On(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,cn(t,o)}return d=a.interleaved,d===null?(i.next=i,nc(a)):(i.next=d.next,d.next=i),a.interleaved=i,cn(t,o)}function ko(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}function hf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function To(t,i,o,a){var d=t.updateQueue;bn=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,N=E.next;E.next=null,m===null?h=N:m.next=N,m=E;var O=t.alternate;O!==null&&(O=O.updateQueue,w=O.lastBaseUpdate,w!==m&&(w===null?O.firstBaseUpdate=N:w.next=N,O.lastBaseUpdate=E))}if(h!==null){var D=d.baseState;m=0,O=N=E=null,w=h;do{var A=w.lane,W=w.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:W,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var H=t,$=w;switch(A=i,W=o,$.tag){case 1:if(H=$.payload,typeof H=="function"){D=H.call(W,D,A);break e}D=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=$.payload,A=typeof H=="function"?H.call(W,D,A):H,A==null)break e;D=B({},D,A);break e;case 2:bn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[w]:A.push(w))}else W={eventTime:W,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},O===null?(N=O=W,E=D):O=O.next=W,m|=A;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;A=w,w=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(O===null&&(E=D),d.baseState=E,d.firstBaseUpdate=N,d.lastBaseUpdate=O,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);hr|=m,t.lanes=m,t.memoizedState=D}}function ff(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var qi={},Jt=Rn(qi),Yi=Rn(qi),Xi=Rn(qi);function ur(t){if(t===qi)throw Error(n(174));return t}function ic(t,i){switch(Se(Xi,i),Se(Yi,t),Se(Jt,qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=sa(i,t)}Ne(Jt),Se(Jt,i)}function Qr(){Ne(Jt),Ne(Yi),Ne(Xi)}function pf(t){ur(Xi.current);var i=ur(Jt.current),o=sa(i,t.type);i!==o&&(Se(Yi,t),Se(Jt,o))}function sc(t){Yi.current===t&&(Ne(Jt),Ne(Yi))}var be=Rn(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function lc(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Ro=Y.ReactCurrentDispatcher,ac=Y.ReactCurrentBatchConfig,dr=0,Oe=null,We=null,$e=null,Po=!1,Ji=!1,Zi=0,Sv=0;function rt(){throw Error(n(321))}function cc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function uc(t,i,o,a,d,h){if(dr=h,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?Nv:Rv,t=o(a,d),Ji){h=0;do{if(Ji=!1,Zi=0,25<=h)throw Error(n(301));h+=1,$e=We=null,i.updateQueue=null,Ro.current=Pv,t=o(a,d)}while(Ji)}if(Ro.current=Oo,i=We!==null&&We.next!==null,dr=0,$e=We=Oe=null,Po=!1,i)throw Error(n(300));return t}function dc(){var t=Zi!==0;return Zi=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Oe.memoizedState=$e=t:$e=$e.next=t,$e}function At(){if(We===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=$e===null?Oe.memoizedState:$e.next;if(i!==null)$e=i,We=t;else{if(t===null)throw Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?Oe.memoizedState=$e=t:$e=$e.next=t}return $e}function es(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=We,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var w=m=null,E=null,N=h;do{var O=N.lane;if((dr&O)===O)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),a=N.hasEagerState?N.eagerState:t(a,N.action);else{var D={lane:O,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(w=E=D,m=a):E=E.next=D,Oe.lanes|=O,hr|=O}N=N.next}while(N!==null&&N!==h);E===null?m=a:E.next=w,Ft(a,i.memoizedState)||(_t=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Oe.lanes|=h,hr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Ft(h,i.memoizedState)||(_t=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function mf(){}function gf(t,i){var o=Oe,a=At(),d=i(),h=!Ft(a.memoizedState,d);if(h&&(a.memoizedState=d,_t=!0),a=a.queue,pc(vf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,ts(9,yf.bind(null,o,a,d,i),void 0,null),Ge===null)throw Error(n(349));(dr&30)!==0||_f(o,i,d)}return d}function _f(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function yf(t,i,o,a){i.value=o,i.getSnapshot=a,wf(i)&&xf(t)}function vf(t,i,o){return o(function(){wf(i)&&xf(t)})}function wf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function xf(t){var i=cn(t,1);i!==null&&Bt(i,t,1,-1)}function Ef(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},i.queue=t,t=t.dispatch=Tv.bind(null,Oe,t),[i.memoizedState,t]}function ts(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Cf(){return At().memoizedState}function Ao(t,i,o,a){var d=Zt();Oe.flags|=t,d.memoizedState=ts(1|i,o,void 0,a===void 0?null:a)}function bo(t,i,o,a){var d=At();a=a===void 0?null:a;var h=void 0;if(We!==null){var m=We.memoizedState;if(h=m.destroy,a!==null&&cc(a,m.deps)){d.memoizedState=ts(i,o,h,a);return}}Oe.flags|=t,d.memoizedState=ts(1|i,o,h,a)}function Sf(t,i){return Ao(8390656,8,t,i)}function pc(t,i){return bo(2048,8,t,i)}function If(t,i){return bo(4,2,t,i)}function kf(t,i){return bo(4,4,t,i)}function Tf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Nf(t,i,o){return o=o!=null?o.concat([t]):null,bo(4,4,Tf.bind(null,i,t),o)}function mc(){}function Rf(t,i){var o=At();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Pf(t,i){var o=At();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Af(t,i,o){return(dr&21)===0?(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=o):(Ft(o,i)||(o=oh(),Oe.lanes|=o,hr|=o,t.baseState=!0),i)}function Iv(t,i){var o=ve;ve=o!==0&&4>o?o:4,t(!0);var a=ac.transition;ac.transition={};try{t(!1),i()}finally{ve=o,ac.transition=a}}function bf(){return At().memoizedState}function kv(t,i,o){var a=jn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Of(t))Df(i,o);else if(o=uf(t,i,o,a),o!==null){var d=ct();Bt(o,t,a,d),Lf(o,i,a)}}function Tv(t,i,o){var a=jn(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Of(t))Df(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,w=h(m,o);if(d.hasEagerState=!0,d.eagerState=w,Ft(w,m)){var E=i.interleaved;E===null?(d.next=d,nc(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=uf(t,i,d,a),o!==null&&(d=ct(),Bt(o,t,a,d),Lf(o,i,a))}}function Of(t){var i=t.alternate;return t===Oe||i!==null&&i===Oe}function Df(t,i){Ji=Po=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lf(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}var Oo={readContext:Pt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Nv={readContext:Pt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:Sf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ao(4194308,4,Tf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=kv.bind(null,Oe,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:Ef,useDebugValue:mc,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Ef(!1),i=t[0];return t=Iv.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Oe,d=Zt();if(Ae){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ge===null)throw Error(n(349));(dr&30)!==0||_f(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Sf(vf.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,yf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=Ge.identifierPrefix;if(Ae){var o=an,a=ln;o=(a&~(1<<32-jt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Zi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Sv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:pc,useImperativeHandle:Nf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:hc,useRef:Cf,useState:function(){return hc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=At();return Af(i,We.memoizedState,t)},useTransition:function(){var t=hc(es)[0],i=At().memoizedState;return[t,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:bf,unstable_isNewReconciler:!1},Pv={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:pc,useImperativeHandle:Nf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:fc,useRef:Cf,useState:function(){return fc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=At();return We===null?i.memoizedState=t:Af(i,We.memoizedState,t)},useTransition:function(){var t=fc(es)[0],i=At().memoizedState;return[t,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:bf,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=B({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function gc(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:B({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),ko(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),ko(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ct(),a=jn(t),d=un(o,a);d.tag=2,i!=null&&(d.callback=i),i=On(t,d,a),i!==null&&(Bt(i,t,a,o),ko(i,t,a))}};function Mf(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Wi(o,a)||!Wi(d,h):!0}function jf(t,i,o){var a=!1,d=Pn,h=i.contextType;return typeof h=="object"&&h!==null?h=Pt(h):(d=gt(i)?or:nt.current,a=i.contextTypes,h=(a=a!=null)?Wr(t,d):Pn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ff(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function _c(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},rc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Pt(h):(h=gt(i)?or:nt.current,d.context=Wr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(gc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Do.enqueueReplaceState(d,d.state,null),To(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,i){try{var o="",a=i;do o+=pe(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function yc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Av=typeof WeakMap=="function"?WeakMap:Map;function Uf(t,i,o){o=un(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Wo||(Wo=!0,Dc=a),vc(t,i)},o}function zf(t,i,o){o=un(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Wf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Av;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=$v.bind(null,t,i,o),i.then(t,t))}function Vf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bf(t,i,o,a,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=un(-1,1),i.tag=2,On(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var bv=Y.ReactCurrentOwner,_t=!1;function at(t,i,o,a){i.child=t===null?cf(i,null,o,a):$r(i,t.child,o,a)}function Hf(t,i,o,a,d){o=o.render;var h=i.ref;return Kr(i,d),a=uc(t,i,o,a,h,d),o=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Ae&&o&&Ka(i),i.flags|=1,at(t,i,a,d),i.child)}function $f(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Wc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Gf(t,i,h,a,d)):(t=Ko(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Wi,o(m,a)&&t.ref===i.ref)return dn(t,i,d)}return i.flags|=1,t=Un(h,a),t.ref=i.ref,t.return=i,i.child=t}function Gf(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Wi(h,a)&&t.ref===i.ref)if(_t=!1,i.pendingProps=a=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_t=!0);else return i.lanes=t.lanes,dn(t,i,d)}return wc(t,i,o,a,d)}function Kf(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Xr,Tt),Tt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(Xr,Tt),Tt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(Xr,Tt),Tt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(Xr,Tt),Tt|=a;return at(t,i,d,o),i.child}function Qf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function wc(t,i,o,a,d){var h=gt(o)?or:nt.current;return h=Wr(i,h),Kr(i,d),o=uc(t,i,o,a,h,d),a=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Ae&&a&&Ka(i),i.flags|=1,at(t,i,o,d),i.child)}function qf(t,i,o,a,d){if(gt(o)){var h=!0;yo(i)}else h=!1;if(Kr(i,d),i.stateNode===null)Mo(t,i),jf(i,o,a),_c(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,w=i.memoizedProps;m.props=w;var E=m.context,N=o.contextType;typeof N=="object"&&N!==null?N=Pt(N):(N=gt(o)?or:nt.current,N=Wr(i,N));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function";D||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==a||E!==N)&&Ff(i,m,a,N),bn=!1;var A=i.memoizedState;m.state=A,To(i,a,m,d),E=i.memoizedState,w!==a||A!==E||mt.current||bn?(typeof O=="function"&&(gc(i,o,O,a),E=i.memoizedState),(w=bn||Mf(i,o,w,a,A,E,N))?(D||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=E),m.props=a,m.state=E,m.context=N,a=w):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,df(t,i),w=i.memoizedProps,N=i.type===i.elementType?w:zt(i.type,w),m.props=N,D=i.pendingProps,A=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Pt(E):(E=gt(o)?or:nt.current,E=Wr(i,E));var W=o.getDerivedStateFromProps;(O=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==D||A!==E)&&Ff(i,m,a,E),bn=!1,A=i.memoizedState,m.state=A,To(i,a,m,d);var H=i.memoizedState;w!==D||A!==H||mt.current||bn?(typeof W=="function"&&(gc(i,o,W,a),H=i.memoizedState),(N=bn||Mf(i,o,N,a,A,H,E)||!1)?(O||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,H,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,H,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=H),m.props=a,m.state=H,m.context=E,a=N):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return xc(t,i,o,a,h,d)}function xc(t,i,o,a,d,h){Qf(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Zh(i,o,!1),dn(t,i,h);a=i.stateNode,bv.current=i;var w=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=$r(i,t.child,null,h),i.child=$r(i,null,w,h)):at(t,i,w,h),i.memoizedState=a.state,d&&Zh(i,o,!0),i.child}function Yf(t){var i=t.stateNode;i.pendingContext?Xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Xh(t,i.context,!1),ic(t,i.containerInfo)}function Xf(t,i,o,a,d){return Hr(),Xa(d),i.flags|=256,at(t,i,o,a),i.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Cc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jf(t,i,o){var a=i.pendingProps,d=be.current,h=!1,m=(i.flags&128)!==0,w;if((w=m)||(w=t!==null&&t.memoizedState===null?!1:(d&2)!==0),w?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(be,d&1),t===null)return Ya(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Qo(m,a,0,null),t=gr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Cc(o),i.memoizedState=Ec,t):Sc(i,m));if(d=t.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Ov(t,i,m,a,w,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,w=d.sibling;var E={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=E,i.deletions=null):(a=Un(d,E),a.subtreeFlags=d.subtreeFlags&14680064),w!==null?h=Un(w,h):(h=gr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Cc(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Ec,a}return h=t.child,t=h.sibling,a=Un(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Sc(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Lo(t,i,o,a){return a!==null&&Xa(a),$r(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ov(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yc(Error(n(422))),Lo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=Qo({mode:"visible",children:a.children},d,0,null),h=gr(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&$r(i,t.child,null,m),i.child.memoizedState=Cc(m),i.memoizedState=Ec,h);if((i.mode&1)===0)return Lo(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var w=a.dgst;return a=w,h=Error(n(419)),a=yc(h,a,void 0),Lo(t,i,m,a)}if(w=(m&t.childLanes)!==0,_t||w){if(a=Ge,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Bt(a,t,d,-1))}return zc(),a=yc(Error(n(421))),Lo(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Gv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kt=Nn(d.nextSibling),It=i,Ae=!0,Ut=null,t!==null&&(Nt[Rt++]=ln,Nt[Rt++]=an,Nt[Rt++]=lr,ln=t.id,an=t.overflow,lr=i),i=Sc(i,a.children),i.flags|=4096,i)}function Zf(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),tc(t.return,i,o)}function Ic(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function ep(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(at(t,i,a.children,o),a=be.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,o,i);else if(t.tag===19)Zf(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(be,a),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ic(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&No(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Ic(i,!0,o,null,h);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),hr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Un(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Un(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Dv(t,i,o){switch(i.tag){case 3:Yf(i),Hr();break;case 5:pf(i);break;case 1:gt(i.type)&&yo(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Se(So,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(be,be.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Jf(t,i,o):(Se(be,be.current&1),t=dn(t,i,o),t!==null?t.sibling:null);Se(be,be.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return ep(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(be,be.current),a)break;return null;case 22:case 23:return i.lanes=0,Kf(t,i,o)}return dn(t,i,o)}var tp,kc,np,rp;tp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},np=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,ur(Jt.current);var h=null;switch(o){case"input":d=ta(t,d),a=ta(t,a),h=[];break;case"select":d=B({},d,{value:void 0}),a=B({},a,{value:void 0}),h=[];break;case"textarea":d=ia(t,d),a=ia(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}oa(o,a);var m;o=null;for(N in d)if(!a.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var w=d[N];for(m in w)w.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in a){var E=a[N];if(w=d!=null?d[N]:void 0,a.hasOwnProperty(N)&&E!==w&&(E!=null||w!=null))if(N==="style")if(w){for(m in w)!w.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&w[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(N,o)),o=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(h=h||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&Te("scroll",t),h||w===E||(h=[])):(h=h||[]).push(N,E))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},rp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ns(t,i){if(!Ae)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function it(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Lv(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return gt(i.type)&&_o(),it(i),null;case 3:return a=i.stateNode,Qr(),Ne(mt),Ne(nt),lc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(jc(Ut),Ut=null))),kc(t,i),it(i),null;case 5:sc(i);var d=ur(Xi.current);if(o=i.type,t!==null&&i.stateNode!=null)np(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return it(i),null}if(t=ur(Jt.current),Eo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Gi]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Bi.length;d++)Te(Bi[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Md(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":Ud(a,h),Te("invalid",a)}oa(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var w=h[m];m==="children"?typeof w=="string"?a.textContent!==w&&(h.suppressHydrationWarning!==!0&&po(a.textContent,w,t),d=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&po(a.textContent,w,t),d=["children",""+w]):l.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Hs(a),Fd(a,h,!0);break;case"textarea":Hs(a),Wd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Gi]=a,tp(t,i,!1,!1),i.stateNode=t;e:{switch(m=la(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Bi.length;d++)Te(Bi[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":Md(t,a),d=ta(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=B({},a,{value:void 0}),Te("invalid",t);break;case"textarea":Ud(t,a),d=ia(t,a),Te("invalid",t);break;default:d=a}oa(o,d),w=d;for(h in w)if(w.hasOwnProperty(h)){var E=w[h];h==="style"?$d(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Bd(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Si(t,E):typeof E=="number"&&Si(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&K(t,h,E,m))}switch(o){case"input":Hs(t),Fd(t,a,!1);break;case"textarea":Hs(t),Wd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ye(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Rr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Rr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return it(i),null;case 6:if(t&&i.stateNode!=null)rp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=ur(Xi.current),ur(Jt.current),Eo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return it(i),null;case 13:if(Ne(be),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&kt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)of(),Hr(),i.flags|=98560,h=!1;else if(h=Eo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Hr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),h=!1}else Ut!==null&&(jc(Ut),Ut=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(be.current&1)!==0?Ve===0&&(Ve=3):zc())),i.updateQueue!==null&&(i.flags|=4),it(i),null);case 4:return Qr(),kc(t,i),t===null&&Hi(i.stateNode.containerInfo),it(i),null;case 10:return ec(i.type._context),it(i),null;case 17:return gt(i.type)&&_o(),it(i),null;case 19:if(Ne(be),h=i.memoizedState,h===null)return it(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ns(h,!1);else{if(Ve!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=No(t),m!==null){for(i.flags|=128,ns(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(be,be.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>Jr&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ae)return it(i),null}else 2*Fe()-h.renderingStartTime>Jr&&o!==1073741824&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=be.current,Se(be,a?o&1|2:o&1),i):(it(i),null);case 22:case 23:return Uc(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Tt&1073741824)!==0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Mv(t,i){switch(Qa(i),i.tag){case 1:return gt(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Qr(),Ne(mt),Ne(nt),lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return sc(i),null;case 13:if(Ne(be),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Hr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ne(be),null;case 4:return Qr(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var jo=!1,st=!1,jv=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Le(t,i,a)}else o.current=null}function Tc(t,i,o){try{o()}catch(a){Le(t,i,a)}}var ip=!1;function Fv(t,i){if(Ua=no,t=Lh(),Aa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,w=-1,E=-1,N=0,O=0,D=t,A=null;t:for(;;){for(var W;D!==o||d!==0&&D.nodeType!==3||(w=m+d),D!==h||a!==0&&D.nodeType!==3||(E=m+a),D.nodeType===3&&(m+=D.nodeValue.length),(W=D.firstChild)!==null;)A=D,D=W;for(;;){if(D===t)break t;if(A===o&&++N===d&&(w=m),A===h&&++O===a&&(E=m),(W=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=W}o=w===-1||E===-1?null:{start:w,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},no=!1,V=i;V!==null;)if(i=V,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,V=t;else for(;V!==null;){i=V;try{var H=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var $=H.memoizedProps,Ue=H.memoizedState,I=i.stateNode,C=I.getSnapshotBeforeUpdate(i.elementType===i.type?$:zt(i.type,$),Ue);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Le(i,i.return,L)}if(t=i.sibling,t!==null){t.return=i.return,V=t;break}V=i.return}return H=ip,ip=!1,H}function rs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Tc(i,o,h)}d=d.next}while(d!==a)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Nc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Gi],delete i[Ha],delete i[wv],delete i[xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}function Pc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pc(t,i,o),t=t.sibling;t!==null;)Pc(t,i,o),t=t.sibling}var Ye=null,Wt=!1;function Dn(t,i,o){for(o=o.child;o!==null;)ap(t,i,o),o=o.sibling}function ap(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:st||Yr(o,i);case 6:var a=Ye,d=Wt;Ye=null,Dn(t,i,o),Ye=a,Wt=d,Ye!==null&&(Wt?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Wt?(t=Ye,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),Li(t)):Ba(Ye,o.stateNode));break;case 4:a=Ye,d=Wt,Ye=o.stateNode.containerInfo,Wt=!0,Dn(t,i,o),Ye=a,Wt=d;break;case 0:case 11:case 14:case 15:if(!st&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Tc(o,i,m),d=d.next}while(d!==a)}Dn(t,i,o);break;case 1:if(!st&&(Yr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){Le(o,i,w)}Dn(t,i,o);break;case 21:Dn(t,i,o);break;case 22:o.mode&1?(st=(a=st)||o.memoizedState!==null,Dn(t,i,o),st=a):Dn(t,i,o);break;default:Dn(t,i,o)}}function cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new jv),i.forEach(function(a){var d=Kv.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,w=m;e:for(;w!==null;){switch(w.tag){case 5:Ye=w.stateNode,Wt=!1;break e;case 3:Ye=w.stateNode.containerInfo,Wt=!0;break e;case 4:Ye=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(Ye===null)throw Error(n(160));ap(h,m,d),Ye=null,Wt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(N){Le(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),en(t),a&4){try{rs(3,t,t.return),Fo(3,t)}catch($){Le(t,t.return,$)}try{rs(5,t,t.return)}catch($){Le(t,t.return,$)}}break;case 1:Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return);break;case 5:if(Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return),t.flags&32){var d=t.stateNode;try{Si(d,"")}catch($){Le(t,t.return,$)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,w=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&jd(d,h),la(w,m);var N=la(w,h);for(m=0;m<E.length;m+=2){var O=E[m],D=E[m+1];O==="style"?$d(d,D):O==="dangerouslySetInnerHTML"?Bd(d,D):O==="children"?Si(d,D):K(d,O,D,N)}switch(w){case"input":na(d,h);break;case"textarea":zd(d,h);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Rr(d,!!h.multiple,W,!1):A!==!!h.multiple&&(h.defaultValue!=null?Rr(d,!!h.multiple,h.defaultValue,!0):Rr(d,!!h.multiple,h.multiple?[]:"",!1))}d[Gi]=h}catch($){Le(t,t.return,$)}}break;case 6:if(Vt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch($){Le(t,t.return,$)}}break;case 3:if(Vt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Li(i.containerInfo)}catch($){Le(t,t.return,$)}break;case 4:Vt(i,t),en(t);break;case 13:Vt(i,t),en(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Oc=Fe())),a&4&&cp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(st=(N=st)||O,Vt(i,t),st=N):Vt(i,t),en(t),a&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!O&&(t.mode&1)!==0)for(V=t,O=t.child;O!==null;){for(D=V=O;V!==null;){switch(A=V,W=A.child,A.tag){case 0:case 11:case 14:case 15:rs(4,A,A.return);break;case 1:Yr(A,A.return);var H=A.stateNode;if(typeof H.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,H.props=i.memoizedProps,H.state=i.memoizedState,H.componentWillUnmount()}catch($){Le(a,o,$)}}break;case 5:Yr(A,A.return);break;case 22:if(A.memoizedState!==null){fp(D);continue}}W!==null?(W.return=A,V=W):fp(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{d=D.stateNode,N?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=D.stateNode,E=D.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Hd("display",m))}catch($){Le(t,t.return,$)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch($){Le(t,t.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vt(i,t),en(t),a&4&&cp(t);break;case 21:break;default:Vt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(op(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Si(d,""),a.flags&=-33);var h=lp(t);Pc(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,w=lp(t);Rc(t,w,m);break;default:throw Error(n(161))}}catch(E){Le(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Uv(t,i,o){V=t,dp(t)}function dp(t,i,o){for(var a=(t.mode&1)!==0;V!==null;){var d=V,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||jo;if(!m){var w=d.alternate,E=w!==null&&w.memoizedState!==null||st;w=jo;var N=st;if(jo=m,(st=E)&&!N)for(V=d;V!==null;)m=V,E=m.child,m.tag===22&&m.memoizedState!==null?pp(d):E!==null?(E.return=m,V=E):pp(d);for(;h!==null;)V=h,dp(h),h=h.sibling;V=d,jo=w,st=N}hp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,V=h):hp(t)}}function hp(t){for(;V!==null;){var i=V;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:st||Fo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!st)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ff(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ff(i,m,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var O=N.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&Li(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}st||i.flags&512&&Nc(i)}catch(A){Le(i,i.return,A)}}if(i===t){V=null;break}if(o=i.sibling,o!==null){o.return=i.return,V=o;break}V=i.return}}function fp(t){for(;V!==null;){var i=V;if(i===t){V=null;break}var o=i.sibling;if(o!==null){o.return=i.return,V=o;break}V=i.return}}function pp(t){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fo(4,i)}catch(E){Le(i,o,E)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(E){Le(i,d,E)}}var h=i.return;try{Nc(i)}catch(E){Le(i,h,E)}break;case 5:var m=i.return;try{Nc(i)}catch(E){Le(i,m,E)}}}catch(E){Le(i,i.return,E)}if(i===t){V=null;break}var w=i.sibling;if(w!==null){w.return=i.return,V=w;break}V=i.return}}var zv=Math.ceil,Uo=Y.ReactCurrentDispatcher,Ac=Y.ReactCurrentOwner,bt=Y.ReactCurrentBatchConfig,fe=0,Ge=null,ze=null,Xe=0,Tt=0,Xr=Rn(0),Ve=0,is=null,hr=0,zo=0,bc=0,ss=null,yt=null,Oc=0,Jr=1/0,hn=null,Wo=!1,Dc=null,Ln=null,Vo=!1,Mn=null,Bo=0,os=0,Lc=null,Ho=-1,$o=0;function ct(){return(fe&6)!==0?Fe():Ho!==-1?Ho:Ho=Fe()}function jn(t){return(t.mode&1)===0?1:(fe&2)!==0&&Xe!==0?Xe&-Xe:Cv.transition!==null?($o===0&&($o=oh()),$o):(t=ve,t!==0||(t=window.event,t=t===void 0?16:mh(t.type)),t)}function Bt(t,i,o,a){if(50<os)throw os=0,Lc=null,Error(n(185));Pi(t,o,a),((fe&2)===0||t!==Ge)&&(t===Ge&&((fe&2)===0&&(zo|=o),Ve===4&&Fn(t,Xe)),vt(t,a),o===1&&fe===0&&(i.mode&1)===0&&(Jr=Fe()+500,vo&&An()))}function vt(t,i){var o=t.callbackNode;Cy(t,i);var a=Zs(t,t===Ge?Xe:0);if(a===0)o!==null&&rh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&rh(o),i===1)t.tag===0?Ev(gp.bind(null,t)):ef(gp.bind(null,t)),yv(function(){(fe&6)===0&&An()}),o=null;else{switch(lh(a)){case 1:o=pa;break;case 4:o=ih;break;case 16:o=qs;break;case 536870912:o=sh;break;default:o=qs}o=Sp(o,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function mp(t,i){if(Ho=-1,$o=0,(fe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Zr()&&t.callbackNode!==o)return null;var a=Zs(t,t===Ge?Xe:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Go(t,a);else{i=a;var d=fe;fe|=2;var h=yp();(Ge!==t||Xe!==i)&&(hn=null,Jr=Fe()+500,pr(t,i));do try{Bv();break}catch(w){_p(t,w)}while(!0);Za(),Uo.current=h,fe=d,ze!==null?i=0:(Ge=null,Xe=0,i=Ve)}if(i!==0){if(i===2&&(d=ma(t),d!==0&&(a=d,i=Mc(t,d))),i===1)throw o=is,pr(t,0),Fn(t,a),vt(t,Fe()),o;if(i===6)Fn(t,a);else{if(d=t.current.alternate,(a&30)===0&&!Wv(d)&&(i=Go(t,a),i===2&&(h=ma(t),h!==0&&(a=h,i=Mc(t,h))),i===1))throw o=is,pr(t,0),Fn(t,a),vt(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:mr(t,yt,hn);break;case 3:if(Fn(t,a),(a&130023424)===a&&(i=Oc+500-Fe(),10<i)){if(Zs(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){ct(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Va(mr.bind(null,t,yt,hn),i);break}mr(t,yt,hn);break;case 4:if(Fn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-jt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zv(a/1960))-a,10<a){t.timeoutHandle=Va(mr.bind(null,t,yt,hn),a);break}mr(t,yt,hn);break;case 5:mr(t,yt,hn);break;default:throw Error(n(329))}}}return vt(t,Fe()),t.callbackNode===o?mp.bind(null,t):null}function Mc(t,i){var o=ss;return t.current.memoizedState.isDehydrated&&(pr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=yt,yt=o,i!==null&&jc(i)),t}function jc(t){yt===null?yt=t:yt.push.apply(yt,t)}function Wv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Ft(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fn(t,i){for(i&=~bc,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),a=1<<o;t[o]=-1,i&=~a}}function gp(t){if((fe&6)!==0)throw Error(n(327));Zr();var i=Zs(t,0);if((i&1)===0)return vt(t,Fe()),null;var o=Go(t,i);if(t.tag!==0&&o===2){var a=ma(t);a!==0&&(i=a,o=Mc(t,a))}if(o===1)throw o=is,pr(t,0),Fn(t,i),vt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,mr(t,yt,hn),vt(t,Fe()),null}function Fc(t,i){var o=fe;fe|=1;try{return t(i)}finally{fe=o,fe===0&&(Jr=Fe()+500,vo&&An())}}function fr(t){Mn!==null&&Mn.tag===0&&(fe&6)===0&&Zr();var i=fe;fe|=1;var o=bt.transition,a=ve;try{if(bt.transition=null,ve=1,t)return t()}finally{ve=a,bt.transition=o,fe=i,(fe&6)===0&&An()}}function Uc(){Tt=Xr.current,Ne(Xr)}function pr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_v(o)),ze!==null)for(o=ze.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_o();break;case 3:Qr(),Ne(mt),Ne(nt),lc();break;case 5:sc(a);break;case 4:Qr();break;case 13:Ne(be);break;case 19:Ne(be);break;case 10:ec(a.type._context);break;case 22:case 23:Uc()}o=o.return}if(Ge=t,ze=t=Un(t.current,null),Xe=Tt=i,Ve=0,is=null,bc=zo=hr=0,yt=ss=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}cr=null}return t}function _p(t,i){do{var o=ze;try{if(Za(),Ro.current=Oo,Po){for(var a=Oe.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Po=!1}if(dr=0,$e=We=Oe=null,Ji=!1,Zi=0,Ac.current=null,o===null||o.return===null){Ve=1,is=i,ze=null;break}e:{var h=t,m=o.return,w=o,E=i;if(i=Xe,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,O=w,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var W=Vf(m);if(W!==null){W.flags&=-257,Bf(W,m,w,h,i),W.mode&1&&Wf(h,N,i),i=W,E=N;var H=i.updateQueue;if(H===null){var $=new Set;$.add(E),i.updateQueue=$}else H.add(E);break e}else{if((i&1)===0){Wf(h,N,i),zc();break e}E=Error(n(426))}}else if(Ae&&w.mode&1){var Ue=Vf(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Bf(Ue,m,w,h,i),Xa(qr(E,w));break e}}h=E=qr(E,w),Ve!==4&&(Ve=2),ss===null?ss=[h]:ss.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=Uf(h,E,i);hf(h,I);break e;case 1:w=E;var C=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ln===null||!Ln.has(k)))){h.flags|=65536,i&=-i,h.lanes|=i;var L=zf(h,w,i);hf(h,L);break e}}h=h.return}while(h!==null)}wp(o)}catch(G){i=G,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function yp(){var t=Uo.current;return Uo.current=Oo,t===null?Oo:t}function zc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ge===null||(hr&268435455)===0&&(zo&268435455)===0||Fn(Ge,Xe)}function Go(t,i){var o=fe;fe|=2;var a=yp();(Ge!==t||Xe!==i)&&(hn=null,pr(t,i));do try{Vv();break}catch(d){_p(t,d)}while(!0);if(Za(),fe=o,Uo.current=a,ze!==null)throw Error(n(261));return Ge=null,Xe=0,Ve}function Vv(){for(;ze!==null;)vp(ze)}function Bv(){for(;ze!==null&&!py();)vp(ze)}function vp(t){var i=Cp(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,i===null?wp(t):ze=i,Ac.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Lv(o,i,Tt),o!==null){ze=o;return}}else{if(o=Mv(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Ve===0&&(Ve=5)}function mr(t,i,o){var a=ve,d=bt.transition;try{bt.transition=null,ve=1,Hv(t,i,o,a)}finally{bt.transition=d,ve=a}return null}function Hv(t,i,o,a){do Zr();while(Mn!==null);if((fe&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Sy(t,h),t===Ge&&(ze=Ge=null,Xe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Vo||(Vo=!0,Sp(qs,function(){return Zr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=bt.transition,bt.transition=null;var m=ve;ve=1;var w=fe;fe|=4,Ac.current=null,Fv(t,o),up(o,t),uv(za),no=!!Ua,za=Ua=null,t.current=o,Uv(o),my(),fe=w,ve=m,bt.transition=h}else t.current=o;if(Vo&&(Vo=!1,Mn=t,Bo=d),h=t.pendingLanes,h===0&&(Ln=null),yy(o.stateNode),vt(t,Fe()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Wo)throw Wo=!1,t=Dc,Dc=null,t;return(Bo&1)!==0&&t.tag!==0&&Zr(),h=t.pendingLanes,(h&1)!==0?t===Lc?os++:(os=0,Lc=t):os=0,An(),null}function Zr(){if(Mn!==null){var t=lh(Bo),i=bt.transition,o=ve;try{if(bt.transition=null,ve=16>t?16:t,Mn===null)var a=!1;else{if(t=Mn,Mn=null,Bo=0,(fe&6)!==0)throw Error(n(331));var d=fe;for(fe|=4,V=t.current;V!==null;){var h=V,m=h.child;if((V.flags&16)!==0){var w=h.deletions;if(w!==null){for(var E=0;E<w.length;E++){var N=w[E];for(V=N;V!==null;){var O=V;switch(O.tag){case 0:case 11:case 15:rs(8,O,h)}var D=O.child;if(D!==null)D.return=O,V=D;else for(;V!==null;){O=V;var A=O.sibling,W=O.return;if(sp(O),O===N){V=null;break}if(A!==null){A.return=W,V=A;break}V=W}}}var H=h.alternate;if(H!==null){var $=H.child;if($!==null){H.child=null;do{var Ue=$.sibling;$.sibling=null,$=Ue}while($!==null)}}V=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,V=m;else e:for(;V!==null;){if(h=V,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,V=I;break e}V=h.return}}var C=t.current;for(V=C;V!==null;){m=V;var k=m.child;if((m.subtreeFlags&2064)!==0&&k!==null)k.return=m,V=k;else e:for(m=C;V!==null;){if(w=V,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Fo(9,w)}}catch(G){Le(w,w.return,G)}if(w===m){V=null;break e}var L=w.sibling;if(L!==null){L.return=w.return,V=L;break e}V=w.return}}if(fe=d,An(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{ve=o,bt.transition=i}}return!1}function xp(t,i,o){i=qr(o,i),i=Uf(t,i,1),t=On(t,i,1),i=ct(),t!==null&&(Pi(t,1,i),vt(t,i))}function Le(t,i,o){if(t.tag===3)xp(t,t,o);else for(;i!==null;){if(i.tag===3){xp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=qr(o,t),t=zf(i,t,1),i=On(i,t,1),t=ct(),i!==null&&(Pi(i,1,t),vt(i,t));break}}i=i.return}}function $v(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ct(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(Xe&o)===o&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>Fe()-Oc?pr(t,0):bc|=o),vt(t,i)}function Ep(t,i){i===0&&((t.mode&1)===0?i=1:(i=Js,Js<<=1,(Js&130023424)===0&&(Js=4194304)));var o=ct();t=cn(t,i),t!==null&&(Pi(t,i,o),vt(t,o))}function Gv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ep(t,o)}function Kv(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Ep(t,o)}var Cp;Cp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||mt.current)_t=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return _t=!1,Dv(t,i,o);_t=(t.flags&131072)!==0}else _t=!1,Ae&&(i.flags&1048576)!==0&&tf(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Mo(t,i),t=i.pendingProps;var d=Wr(i,nt.current);Kr(i,o),d=uc(null,i,a,t,d,o);var h=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,gt(a)?(h=!0,yo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=Do,i.stateNode=d,d._reactInternals=i,_c(i,a,t,o),i=xc(null,i,a,!0,h,o)):(i.tag=0,Ae&&h&&Ka(i),at(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Mo(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=qv(a),t=zt(a,t),d){case 0:i=wc(null,i,a,t,o);break e;case 1:i=qf(null,i,a,t,o);break e;case 11:i=Hf(null,i,a,t,o);break e;case 14:i=$f(null,i,a,zt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),wc(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),qf(t,i,a,d,o);case 3:e:{if(Yf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,df(t,i),To(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=qr(Error(n(423)),i),i=Xf(t,i,a,o,d);break e}else if(a!==d){d=qr(Error(n(424)),i),i=Xf(t,i,a,o,d);break e}else for(kt=Nn(i.stateNode.containerInfo.firstChild),It=i,Ae=!0,Ut=null,o=cf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),a===d){i=dn(t,i,o);break e}at(t,i,a,o)}i=i.child}return i;case 5:return pf(i),t===null&&Ya(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Wa(a,d)?m=null:h!==null&&Wa(a,h)&&(i.flags|=32),Qf(t,i),at(t,i,m,o),i.child;case 6:return t===null&&Ya(i),null;case 13:return Jf(t,i,o);case 4:return ic(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=$r(i,null,a,o):at(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Hf(t,i,a,d,o);case 7:return at(t,i,i.pendingProps,o),i.child;case 8:return at(t,i,i.pendingProps.children,o),i.child;case 12:return at(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Se(So,a._currentValue),a._currentValue=m,h!==null)if(Ft(h.value,m)){if(h.children===d.children&&!mt.current){i=dn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var w=h.dependencies;if(w!==null){m=h.child;for(var E=w.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=un(-1,o&-o),E.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var O=N.pending;O===null?E.next=E:(E.next=O.next,O.next=E),N.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),tc(h.return,o,i),w.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),tc(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}at(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,Kr(i,o),d=Pt(d),a=a(d),i.flags|=1,at(t,i,a,o),i.child;case 14:return a=i.type,d=zt(a,i.pendingProps),d=zt(a.type,d),$f(t,i,a,d,o);case 15:return Gf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Mo(t,i),i.tag=1,gt(a)?(t=!0,yo(i)):t=!1,Kr(i,o),jf(i,a,d),_c(i,a,d,o),xc(null,i,a,!0,t,o);case 19:return ep(t,i,o);case 22:return Kf(t,i,o)}throw Error(n(156,i.tag))};function Sp(t,i){return nh(t,i)}function Qv(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new Qv(t,i,o,a)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qv(t){if(typeof t=="function")return Wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===et)return 11;if(t===qt)return 14}return 2}function Un(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ko(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Wc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case re:return gr(o.children,d,h,i);case oe:m=8,d|=8;break;case he:return t=Ot(12,o,i,d|2),t.elementType=he,t.lanes=h,t;case tt:return t=Ot(13,o,i,d),t.elementType=tt,t.lanes=h,t;case Mt:return t=Ot(19,o,i,d),t.elementType=Mt,t.lanes=h,t;case De:return Qo(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ee:m=10;break e;case Re:m=9;break e;case et:m=11;break e;case qt:m=14;break e;case pt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function gr(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function Qo(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=De,t.lanes=o,t.stateNode={isHidden:!1},t}function Vc(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bc(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yv(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,a,d,h,m,w,E){return t=new Yv(t,i,o,w,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(h),t}function Xv(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Ip(t){if(!t)return Pn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(gt(o))return Jh(t,o,i)}return i}function kp(t,i,o,a,d,h,m,w,E){return t=Hc(o,a,!0,t,d,h,m,w,E),t.context=Ip(null),o=t.current,a=ct(),d=jn(o),h=un(a,d),h.callback=i??null,On(o,h,d),t.current.lanes=d,Pi(t,d,a),vt(t,a),t}function qo(t,i,o,a){var d=i.current,h=ct(),m=jn(d);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=un(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=On(d,i,m),t!==null&&(Bt(t,d,m,h),ko(t,d,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $c(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function Jv(){return null}var Np=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Xo.prototype.render=Gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},Xo.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fr(function(){qo(null,t,null,null)}),i[sn]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=uh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<In.length&&i!==0&&i<In[o].priority;o++);In.splice(o,0,t),o===0&&fh(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function Zv(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var N=Yo(m);h.call(N)}}var m=kp(i,a,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=m,t[sn]=m.current,Hi(t.nodeType===8?t.parentNode:t),fr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var w=a;a=function(){var N=Yo(E);w.call(N)}}var E=Hc(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=E,t[sn]=E.current,Hi(t.nodeType===8?t.parentNode:t),fr(function(){qo(i,E,o,a)}),E}function Zo(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var w=d;d=function(){var E=Yo(m);w.call(E)}}qo(i,m,t,d)}else m=Zv(o,i,t,d,a);return Yo(m)}ah=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ri(i.pendingLanes);o!==0&&(_a(i,o|1),vt(i,Fe()),(fe&6)===0&&(Jr=Fe()+500,An()))}break;case 13:fr(function(){var a=cn(t,1);if(a!==null){var d=ct();Bt(a,t,1,d)}}),$c(t,1)}},ya=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ct();Bt(i,t,134217728,o)}$c(t,134217728)}},ch=function(t){if(t.tag===13){var i=jn(t),o=cn(t,i);if(o!==null){var a=ct();Bt(o,t,i,a)}$c(t,i)}},uh=function(){return ve},dh=function(t,i){var o=ve;try{return ve=t,i()}finally{ve=o}},ua=function(t,i,o){switch(i){case"input":if(na(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=go(a);if(!d)throw Error(n(90));Ld(a),na(a,d)}}}break;case"textarea":zd(t,o);break;case"select":i=o.value,i!=null&&Rr(t,!!o.multiple,i,!1)}},qd=Fc,Yd=fr;var e0={usingClientEntryPoint:!1,Events:[Ki,Ur,go,Kd,Qd,Fc]},ls={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t0={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eh(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||Jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(t0),Yt=el}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0,wt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(i))throw Error(n(200));return Xv(t,i,null,o)},wt.createRoot=function(t,i){if(!Kc(t))throw Error(n(299));var o=!1,a="",d=Np;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,a,d),t[sn]=i.current,Hi(t.nodeType===8?t.parentNode:t),new Gc(i)},wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=eh(i),t=t===null?null:t.stateNode,t},wt.flushSync=function(t){return fr(t)},wt.hydrate=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!0,o)},wt.hydrateRoot=function(t,i,o){if(!Kc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Np;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=kp(i,null,t,1,o??null,d,!1,h,m),t[sn]=i.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Xo(i)},wt.render=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!1,o)},wt.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(fr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},wt.unstable_batchedUpdates=Fc,wt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,o,!1,a)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var jp;function c0(){if(jp)return Yc.exports;jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yc.exports=a0(),Yc.exports}var Fp;function u0(){if(Fp)return tl;Fp=1;var r=c0();return tl.createRoot=r.createRoot,tl.hydrateRoot=r.hydrateRoot,tl}var d0=u0();const h0=Qm(d0),f0=()=>{};var Up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(r,e){if(!r)throw mi(e)},mi=function(r){return new Error("Firebase Database ("+Ym.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},p0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],u=r[n++],f=r[n++],p=((l&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],u=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|u&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],u=l+1<r.length,f=u?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,y=c>>2,x=(c&3)<<4|f>>4;let v=(f&15)<<2|g>>6,T=g&63;p||(T=64,u||(v=64)),s.push(n[y],n[x],n[v],n[T])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Xm(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):p0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const x=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||f==null||g==null||x==null)throw new m0;const v=c<<2|f>>4;if(s.push(v),g!==64){const T=f<<4&240|g>>2;if(s.push(T),x!==64){const R=g<<6&192|x;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class m0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jm=function(r){const e=Xm(r);return Vu.encodeByteArray(e,!0)},hl=function(r){return Jm(r).replace(/\./g,"")},fl=function(r){try{return Vu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(r){return Zm(void 0,r)}function Zm(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_0(n)||(r[n]=Zm(r[n],e[n]));return r}function _0(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=()=>y0().__FIREBASE_DEFAULTS__,w0=()=>{if(typeof process>"u"||typeof Up>"u")return;const r=Up.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},x0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fl(r[1]);return e&&JSON.parse(e)},Bu=()=>{try{return f0()||v0()||w0()||x0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},eg=r=>{var e,n;return(n=(e=Bu())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},E0=r=>{const e=eg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tg=()=>{var r;return(r=Bu())==null?void 0:r.config},ng=r=>{var e;return(e=Bu())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rg(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[hl(JSON.stringify(n)),hl(JSON.stringify(u)),""].join(".")}const fs={};function S0(){const r={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?r.emulator.push(e):r.prod.push(e);return r}function I0(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let zp=!1;function ig(r,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||fs[r]===e||fs[r]||zp)return;fs[r]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",c=S0().prod.length>0;function u(){const v=document.getElementById(s);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,T){v.setAttribute("width","24"),v.setAttribute("id",T),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function g(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{zp=!0,u()},v}function y(v,T){v.setAttribute("id",T),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function x(){const v=I0(s),T=n("text"),R=document.getElementById(T)||document.createElement("span"),F=n("learnmore"),U=document.getElementById(F)||document.createElement("a"),M=n("preprendIcon"),P=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const K=v.element;f(K),y(U,F);const Y=g();p(P,M),K.append(P,R,U,Y),document.body.appendChild(K)}c?(R.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function k0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function T0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N0(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function R0(){return Ym.NODE_ADMIN===!0}function P0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;e(((c=l.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=b0,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],u=c?O0(c,s):"Error",f=`${this.serviceName}: ${u} (${l}).`;return new rr(l,f,s)}}function O0(r,e){return r.replace(D0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const D0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(r){return JSON.parse(r)}function He(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=ws(fl(c[0])||""),n=ws(fl(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},L0=function(r){const e=og(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},M0=function(r){const e=og(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ai(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function gu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function pl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function wr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],u=e[l];if(Wp(c)&&Wp(u)){if(!wr(c,u))return!1}else if(c!==u)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Wp(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let x=0;x<16;x++)s[x]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let x=0;x<16;x++)s[x]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let x=16;x<80;x++){const v=s[x-3]^s[x-8]^s[x-14]^s[x-16];s[x]=(v<<1|v>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,y;for(let x=0;x<80;x++){x<40?x<20?(g=f^c&(u^f),y=1518500249):(g=c^u^f,y=1859775393):x<60?(g=c&u|f&(c|u),y=2400959708):(g=c^u^f,y=3395469782);const v=(l<<5|l>>>27)+g+p+y+s[x]&4294967295;p=f,f=u,u=(c<<30|c>>>2)&4294967295,c=l,l=v}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const c=this.buf_;let u=this.inbuf_;for(;l<n;){if(u===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[u]=e.charCodeAt(l),++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}else for(;l<n;)if(c[u]=e[l],++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function F0(r,e){const n=new U0(r,e);return n.subscribe.bind(n)}class U0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");z0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Zc),l.error===void 0&&(l.error=Zc),l.complete===void 0&&(l.complete=Zc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Zc(){}function Ml(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,j(s<r.length,"Surrogate pair missing trail surrogate.");const u=r.charCodeAt(s)-56320;l=65536+(c<<10)+u}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},jl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}class xr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H0(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:B0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B0(r){return r===_r?void 0:r}function H0(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(we||(we={}));const G0={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},K0=we.INFO,Q0={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},q0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Q0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=K0,this._logHandler=q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Y0=(r,e)=>e.some(n=>r instanceof n);let Vp,Bp;function X0(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J0(){return Bp||(Bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,_u=new WeakMap,ag=new WeakMap,eu=new WeakMap,Gu=new WeakMap;function Z0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",u)},c=()=>{n(Kn(r.result)),l()},u=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&lg.set(n,r)}).catch(()=>{}),Gu.set(e,r),e}function ew(r){if(_u.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",u),r.removeEventListener("abort",u)},c=()=>{n(),l()},u=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",u),r.addEventListener("abort",u)});_u.set(r,e)}let yu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return _u.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ag.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function tw(r){yu=r(yu)}function nw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(tu(this),e,...n);return ag.set(s,e.sort?e.sort():[e]),Kn(s)}:J0().includes(r)?function(...e){return r.apply(tu(this),e),Kn(lg.get(this))}:function(...e){return Kn(r.apply(tu(this),e))}}function rw(r){return typeof r=="function"?nw(r):(r instanceof IDBTransaction&&ew(r),Y0(r,X0())?new Proxy(r,yu):r)}function Kn(r){if(r instanceof IDBRequest)return Z0(r);if(eu.has(r))return eu.get(r);const e=rw(r);return e!==r&&(eu.set(r,e),Gu.set(e,r)),e}const tu=r=>Gu.get(r);function iw(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const u=indexedDB.open(r,e),f=Kn(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Kn(u.result),p.oldVersion,p.newVersion,Kn(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const sw=["get","getKey","getAll","getAllKeys","count"],ow=["put","add","delete","clear"],nu=new Map;function Hp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=ow.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||sw.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return nu.set(e,c),c}tw(r=>({...r,get:(e,n,s)=>Hp(e,n)||r.get(e,n,s),has:(e,n)=>!!Hp(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function aw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",$p="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new $u("@firebase/app"),cw="@firebase/app-compat",uw="@firebase/analytics-compat",dw="@firebase/analytics",hw="@firebase/app-check-compat",fw="@firebase/app-check",pw="@firebase/auth",mw="@firebase/auth-compat",gw="@firebase/database",_w="@firebase/data-connect",yw="@firebase/database-compat",vw="@firebase/functions",ww="@firebase/functions-compat",xw="@firebase/installations",Ew="@firebase/installations-compat",Cw="@firebase/messaging",Sw="@firebase/messaging-compat",Iw="@firebase/performance",kw="@firebase/performance-compat",Tw="@firebase/remote-config",Nw="@firebase/remote-config-compat",Rw="@firebase/storage",Pw="@firebase/storage-compat",Aw="@firebase/firestore",bw="@firebase/ai",Ow="@firebase/firestore-compat",Dw="firebase",Lw="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="[DEFAULT]",Mw={[vu]:"fire-core",[cw]:"fire-core-compat",[dw]:"fire-analytics",[uw]:"fire-analytics-compat",[fw]:"fire-app-check",[hw]:"fire-app-check-compat",[pw]:"fire-auth",[mw]:"fire-auth-compat",[gw]:"fire-rtdb",[_w]:"fire-data-connect",[yw]:"fire-rtdb-compat",[vw]:"fire-fn",[ww]:"fire-fn-compat",[xw]:"fire-iid",[Ew]:"fire-iid-compat",[Cw]:"fire-fcm",[Sw]:"fire-fcm-compat",[Iw]:"fire-perf",[kw]:"fire-perf-compat",[Tw]:"fire-rc",[Nw]:"fire-rc-compat",[Rw]:"fire-gcs",[Pw]:"fire-gcs-compat",[Aw]:"fire-fst",[Ow]:"fire-fst-compat",[bw]:"fire-vertex","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,jw=new Map,xu=new Map;function Gp(r,e){try{r.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ci(r){const e=r.name;if(xu.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;xu.set(e,r);for(const n of ml.values())Gp(n,r);for(const n of jw.values())Gp(n,r);return!0}function Ku(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ht(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Os("app","Firebase",Fw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=Lw;function cg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:wu,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=tg()),!n)throw Qn.create("no-options");const c=ml.get(l);if(c){if(wr(n,c.options)&&wr(s,c.config))return c;throw Qn.create("duplicate-app",{appName:l})}const u=new $0(l);for(const p of xu.values())u.addComponent(p);const f=new Uw(n,s,u);return ml.set(l,f),f}function ug(r=wu){const e=ml.get(r);if(!e&&r===wu&&tg())return cg();if(!e)throw Qn.create("no-app",{appName:r});return e}function qn(r,e,n){let s=Mw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const u=[`Unable to register library "${s}" with version "${e}":`];l&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(u.join(" "));return}ci(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firebase-heartbeat-database",Ww=1,xs="firebase-heartbeat-store";let ru=null;function dg(){return ru||(ru=iw(zw,Ww,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),ru}async function Vw(r){try{const n=(await dg()).transaction(xs),s=await n.objectStore(xs).get(hg(r));return await n.done,s}catch(e){if(e instanceof rr)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Kp(r,e){try{const s=(await dg()).transaction(xs,"readwrite");await s.objectStore(xs).put(e,hg(r)),await s.done}catch(n){if(n instanceof rr)_n.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function hg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=1024,Hw=30;class $w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Qp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Hw){const u=Qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:s,unsentEntries:l}=Gw(this._heartbeatsCache.heartbeats),c=hl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _n.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function Gw(r,e=Bw){const n=[];let s=r.slice();for(const l of r){const c=n.find(u=>u.agent===l.agent);if(c){if(c.dates.push(l.date),qp(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(r){return hl(JSON.stringify({version:2,heartbeats:r})).length}function Qw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(r){ci(new xr("platform-logger",e=>new lw(e),"PRIVATE")),ci(new xr("heartbeat",e=>new $w(e),"PRIVATE")),qn(vu,$p,r),qn(vu,$p,"esm2020"),qn("fire-js","")}qw("");var Yw="firebase",Xw="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(Yw,Xw,"app");function fg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=fg,pg=new Os("auth","Firebase",fg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new $u("@firebase/auth");function Zw(r,...e){gl.logLevel<=we.WARN&&gl.warn(`Auth (${yi}): ${r}`,...e)}function ol(r,...e){gl.logLevel<=we.ERROR&&gl.error(`Auth (${yi}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(r,...e){throw Qu(r,...e)}function tn(r,...e){return Qu(r,...e)}function mg(r,e,n){const s={...Jw(),[e]:n};return new Os("auth","Firebase",s).create(e,{appName:r.name})}function Yn(r){return mg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return pg.create(r,...e)}function ee(r,e,...n){if(!r)throw Qu(e,...n)}function fn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ol(e),new Error(e)}function vn(r,e){r||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function ex(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ex()||T0()||"connection"in navigator)?navigator.onLine:!0}function nx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||sg()}get(){return tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(r,e){vn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sx=new Ds(3e4,6e4);function Fl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vi(r,e,n,s,l={}){return _g(r,l,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=_i({key:r.config.apiKey,...u}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...c};return k0()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&gi(r.emulatorConfig.host)&&(g.credentials="include"),gg.fetch()(await vg(r,r.config.apiHost,n,f),g)})}async function _g(r,e,n){r._canInitEmulator=!1;const s={...rx,...e};try{const l=new ox(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw nl(r,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(r,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw nl(r,"email-already-in-use",u);if(p==="USER_DISABLED")throw nl(r,"user-disabled",u);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw mg(r,y,g);yn(r,y)}}catch(l){if(l instanceof rr)throw l;yn(r,"network-request-failed",{message:String(l)})}}async function yg(r,e,n,s,l={}){const c=await vi(r,e,n,s,l);return"mfaPendingCredential"in c&&yn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function vg(r,e,n,s){const l=`${e}${n}?${s}`,c=r,u=c.config.emulator?qu(r.config,l):`${r.config.apiScheme}://${l}`;return ix.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class ox{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),sx.get())})}}function nl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(r,e){return vi(r,"POST","/v1/accounts:delete",e)}async function _l(r,e){return vi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ax(r,e=!1){const n=Et(r),s=await n.getIdToken(e),l=Yu(s);ee(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:ps(iu(l.auth_time)),issuedAtTime:ps(iu(l.iat)),expirationTime:ps(iu(l.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function iu(r){return Number(r)*1e3}function Yu(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=fl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Xp(r){const e=Yu(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&cx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(r){var x;const e=r.auth,n=await r.getIdToken(),s=await Es(r,_l(e,{idToken:n}));ee(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=(x=l.providerUserInfo)!=null&&x.length?wg(l.providerUserInfo):[],u=hx(r.providerData,c),f=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Cu(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,y)}async function dx(r){const e=Et(r);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hx(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function wg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(r,e){const n=await _g(r,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,u=await vg(r,l,"/v1/token",`key=${c}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&gi(r.emulatorConfig.host)&&(p.credentials="include"),gg.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function px(r,e){return vi(r,"POST","/v2/accounts:revokeToken",Fl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Xp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await fx(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,u=new ri;return s&&(ee(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),l&&(ee(typeof l=="string","internal-error",{appName:e}),u.accessToken=l),c&&(ee(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Cu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ax(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Es(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:x,emailVerified:v,isAnonymous:T,providerData:R,stsTokenManager:F}=n;ee(x&&F,e,"internal-error");const U=ri.fromJSON(this.name,F);ee(typeof x=="string",e,"internal-error"),Wn(s,e.name),Wn(l,e.name),ee(typeof v=="boolean",e,"internal-error"),ee(typeof T=="boolean",e,"internal-error"),Wn(c,e.name),Wn(u,e.name),Wn(f,e.name),Wn(p,e.name),Wn(g,e.name),Wn(y,e.name);const M=new Gt({uid:x,auth:e,email:l,emailVerified:v,displayName:s,isAnonymous:T,photoURL:u,phoneNumber:c,tenantId:f,stsTokenManager:U,createdAt:g,lastLoginAt:y});return R&&Array.isArray(R)&&(M.providerData=R.map(P=>({...P}))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,n,s=!1){const l=new ri;l.updateFromServerResponse(n);const c=new Gt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await yl(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ee(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?wg(l.providerUserInfo):[],u=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),f=new ri;f.updateFromIdToken(s);const p=new Gt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Cu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Map;function pn(r){vn(r instanceof Function,"Expected a class definition");let e=Jp.get(r);return e?(vn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Jp.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xg.type="NONE";const Zp=xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(r,e,n){return`firebase:${r}:${e}:${n}`}class ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,c),this.fullPersistenceKey=ll("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _l(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ii(pn(Zp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=l[0]||pn(Zp);const u=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(u);if(y){let x;if(typeof y=="string"){const v=await _l(e,{idToken:y}).catch(()=>{});if(!v)break;x=await Gt._fromGetAccountInfoResponse(e,v,y)}else x=Gt._fromJSON(e,y);g!==c&&(f=x),c=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ii(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(u)}catch{}})),new ii(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tg(e))return"Blackberry";if(Ng(e))return"Webos";if(Cg(e))return"Safari";if((e.includes("chrome/")||Sg(e))&&!e.includes("edge/"))return"Chrome";if(kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(r=ft()){return/firefox\//i.test(r)}function Cg(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sg(r=ft()){return/crios\//i.test(r)}function Ig(r=ft()){return/iemobile/i.test(r)}function kg(r=ft()){return/android/i.test(r)}function Tg(r=ft()){return/blackberry/i.test(r)}function Ng(r=ft()){return/webos/i.test(r)}function Xu(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function mx(r=ft()){var e;return Xu(r)&&!!((e=window.navigator)!=null&&e.standalone)}function gx(){return N0()&&document.documentMode===10}function Rg(r=ft()){return Xu(r)||kg(r)||Ng(r)||Tg(r)||/windows phone/i.test(r)||Ig(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(r,e=[]){let n;switch(r){case"Browser":n=em(ft());break;case"Worker":n=`${em(ft())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((u,f)=>{try{const p=e(c);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(r,e={}){return vi(r,"GET","/v2/passwordPolicy",Fl(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=6;class wx{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tm(this),this.idTokenSubscription=new tm(this),this.beforeStateQueue=new _x(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,l,c;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Ht(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(c=this.redirectUser)==null?void 0:c._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Yn(this));const n=e?Et(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yx(this),n=new wx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await px(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(f,this,"internal-error"),f.then(()=>{u||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Zw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ul(r){return Et(r)}class tm{constructor(e){this.auth=e,this.observer=null,this.addObserver=F0(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ex(r){Ju=r}function Cx(r){return Ju.loadJS(r)}function Sx(){return Ju.gapiScript}function Ix(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(r,e){const n=Ku(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(wr(c,e??{}))return l;yn(l,"already-initialized")}return n.initialize({options:e})}function Tx(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Nx(r,e,n){const s=Ul(r);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Ag(e),{host:u,port:f}=Rx(e),p=f===null?"":`:${f}`,g={url:`${c}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(wr(g,s.config.emulator)&&wr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,gi(u)?(rg(`${c}//${u}${p}`),ig("Auth",!0)):Px()}function Ag(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Rx(r){const e=Ag(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:nm(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:nm(u)}}}function nm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Px(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(r,e){return yg(r,"POST","/v1/accounts:signInWithIdp",Fl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="http://localhost";class Er extends bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const u=new Er(s,l);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,si(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:Ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ls{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ls{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ls{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(r,e){return yg(r,"POST","/v1/accounts:signUp",Fl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await Gt._fromIdTokenResponse(e,s,l),u=rm(s);return new Zn({user:c,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=rm(s);return new Zn({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function rm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(r){var l;if(Ht(r.app))return Promise.reject(Yn(r));const e=Ul(r);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new Zn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await bx(e,{returnSecureToken:!0}),s=await Zn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends rr{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new vl(e,n,s,l)}}function Dg(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(r,c,e,s):c})}async function Dx(r,e,n=!1){const s=await Es(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zn._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(r,e,n=!1){const{auth:s}=r;if(Ht(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const c=await Es(r,Dg(s,l,e,r),n);ee(c.idToken,s,"internal-error");const u=Yu(c.idToken);ee(u,s,"internal-error");const{sub:f}=u;return ee(r.uid===f,s,"user-mismatch"),Zn._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&yn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s="signIn",l=await Dg(r,s,e),c=await Zn._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(r,e){return Et(r).setPersistence(e)}function Fx(r,e,n,s){return Et(r).onIdTokenChanged(e,n,s)}function Ux(r,e,n){return Et(r).beforeAuthStateChanged(e,n)}function zx(r,e,n,s){return Et(r).onAuthStateChanged(e,n,s)}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=1e3,Vx=10;class Mg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);gx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Vx):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const Bx=Mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jg.type="SESSION";const Zu=jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,u=this.handlersMap[l];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(u).map(async g=>g(n.origin,c)),p=await Hx(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const g=ed("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:l,onMessage(x){const v=x;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(v.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),l.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function Gx(r){nn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function Kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qx(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function qx(){return Fg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="firebaseLocalStorageDb",Yx=1,xl="firebaseLocalStorage",zg="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(r,e){return r.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function Xx(){const r=indexedDB.deleteDatabase(Ug);return new Ms(r).toPromise()}function Su(){const r=indexedDB.open(Ug,Yx);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(xl,{keyPath:zg})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(xl)?e(s):(s.close(),await Xx(),e(await Su()))})})}async function im(r,e,n){const s=Wl(r,!0).put({[zg]:e,value:n});return new Ms(s).toPromise()}async function Jx(r,e){const n=Wl(r,!1).get(e),s=await new Ms(n).toPromise();return s===void 0?null:s.value}function sm(r,e){const n=Wl(r,!0).delete(e);return new Ms(n).toPromise()}const Zx=800,eE=3;class Wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(qx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Kx(),!this.activeServiceWorker)return;this.sender=new $x(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await im(e,wl,"1"),await sm(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>im(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Jx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Wl(l,!1).getAll();return new Ms(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wg.type="LOCAL";const tE=Wg;new Ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(r,e){return e?pn(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rE(r){return Mx(r.auth,new td(r),r.bypassAuthState)}function iE(r){const{auth:e,user:n}=r;return ee(n,e,"internal-error"),Lx(n,new td(r),r.bypassAuthState)}async function sE(r){const{auth:e,user:n}=r;return ee(n,e,"internal-error"),Dx(n,new td(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rE;case"linkViaPopup":case"linkViaRedirect":return sE;case"reauthViaPopup":case"reauthViaRedirect":return iE;default:yn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Ds(2e3,1e4);class ti extends Vg{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oE.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="pendingRedirect",al=new Map;class aE extends Vg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await cE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cE(r,e){const n=hE(e),s=dE(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function uE(r,e){al.set(r._key(),e)}function dE(r){return pn(r._redirectPersistence)}function hE(r){return ll(lE,r.config.apiKey,r.name)}async function fE(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s=Ul(r),l=nE(s,e),u=await new aE(s,l,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=600*1e3;class mE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bg(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pE&&this.cachedEventUids.clear(),this.cachedEventUids.has(om(e))}saveEventToCache(e){this.cachedEventUids.add(om(e)),this.lastProcessedEventTime=Date.now()}}function om(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Bg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bg(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(r,e={}){return vi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vE=/^https?/;async function wE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _E(r);for(const n of e)try{if(xE(n))return}catch{}yn(r,"unauthorized-domain")}function xE(r){const e=Eu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!vE.test(n))return!1;if(yE.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Ds(3e4,6e4);function lm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CE(r){return new Promise((e,n)=>{var l,c,u;function s(){lm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lm(),n(tn(r,"network-request-failed"))},timeout:EE.get()})}if((c=(l=nn().gapi)==null?void 0:l.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((u=nn().gapi)!=null&&u.load)s();else{const f=Ix("iframefcb");return nn()[f]=()=>{gapi.load?s():n(tn(r,"network-request-failed"))},Cx(`${Sx()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function SE(r){return cl=cl||CE(r),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Ds(5e3,15e3),kE="__/auth/iframe",TE="emulator/auth/iframe",NE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PE(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?qu(e,TE):`https://${r.config.authDomain}/${kE}`,s={apiKey:e.apiKey,appName:r.name,v:yi},l=RE.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${_i(s).slice(1)}`}async function AE(r){const e=await SE(r),n=nn().gapi;return ee(n,r,"internal-error"),e.open({where:document.body,url:PE(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NE,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const u=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{c(u)},IE.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OE=500,DE=600,LE="_blank",ME="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jE(r,e,n,s=OE,l=DE){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...bE,width:s.toString(),height:l.toString(),top:c,left:u},g=ft().toLowerCase();n&&(f=Sg(g)?LE:n),Eg(g)&&(e=e||ME,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[T,R])=>`${v}${T}=${R},`,"");if(mx(g)&&f!=="_self")return FE(e||"",f),new am(null);const x=window.open(e||"",f,y);ee(x,r,"popup-blocked");try{x.focus()}catch{}return new am(x)}function FE(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__/auth/handler",zE="emulator/auth/handler",WE=encodeURIComponent("fac");async function cm(r,e,n,s,l,c){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof Og){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",gu(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,x]of Object.entries({}))u[y]=x}if(e instanceof Ls){const y=e.getScopes().filter(x=>x!=="");y.length>0&&(u.scopes=y.join(","))}r.tenantId&&(u.tid=r.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),g=p?`#${WE}=${encodeURIComponent(p)}`:"";return`${VE(r)}?${_i(f).slice(1)}${g}`}function VE({config:r}){return r.emulator?qu(r,zE):`https://${r.authDomain}/${UE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="webStorageSupport";class BE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zu,this._completeRedirectFn=fE,this._overrideRedirectResult=uE}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await cm(e,n,s,Eu(),l);return jE(e,c,ed())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await cm(e,n,s,Eu(),l);return Gx(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(vn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AE(e),s=new mE(e);return n.register("authEvent",l=>(ee(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},l=>{var u;const c=(u=l==null?void 0:l[0])==null?void 0:u[su];c!==void 0&&n(!!c),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rg()||Cg()||Xu()}}const HE=BE;var um="@firebase/auth",dm="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KE(r){ci(new xr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;ee(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(r)},g=new xx(s,l,c,p);return Tx(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ci(new xr("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(s=>new $E(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(um,dm,GE(r)),qn(um,dm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=300,qE=ng("authIdTokenMaxAge")||QE;let hm=null;const YE=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qE)return;const l=n==null?void 0:n.token;hm!==l&&(hm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function XE(r=ug()){const e=Ku(r,"auth");if(e.isInitialized())return e.getImmediate();const n=kx(r,{popupRedirectResolver:HE,persistence:[tE,Bx,Zu]}),s=ng("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const u=YE(c.toString());Ux(n,u,()=>u(n.currentUser)),Fx(n,f=>u(f))}}const l=eg("auth");return l&&Nx(n,`http://${l}`),n}function JE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Ex({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=tn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",JE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KE("Browser");var fm={};const pm="@firebase/database",mm="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg="";function ZE(r){Hg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eC(e)}}catch{}return new tC},vr=$g("localStorage"),nC=$g("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new $u("@firebase/database"),rC=(function(){let r=1;return function(){return r++}})(),Gg=function(r){const e=W0(r),n=new j0;n.update(e);const s=n.digest();return Vu.encodeByteArray(s)},js=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=js.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let ms=null,gm=!0;const iC=function(r,e){j(!0,"Can't turn on custom loggers persistently."),oi.logLevel=we.VERBOSE,ms=oi.log.bind(oi)},Je=function(...r){if(gm===!0&&(gm=!1,ms===null&&nC.get("logging_enabled")===!0&&iC()),ms){const e=js.apply(null,r);ms(e)}},Fs=function(r){return function(...e){Je(r,...e)}},Iu=function(...r){const e="FIREBASE INTERNAL ERROR: "+js(...r);oi.error(e)},wn=function(...r){const e=`FIREBASE FATAL ERROR: ${js(...r)}`;throw oi.error(e),new Error(e)},dt=function(...r){const e="FIREBASE WARNING: "+js(...r);oi.warn(e)},sC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},oC=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ui="[MIN_NAME]",Cr="[MAX_NAME]",Tr=function(r,e){if(r===e)return 0;if(r===ui||e===Cr)return-1;if(e===ui||r===Cr)return 1;{const n=_m(r),s=_m(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},lC=function(r,e){return r===e?0:r<e?-1:1},cs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},rd=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=rd(r[e[s]]);return n+="}",n},Kg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ze(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Qg=function(r){j(!nd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,u,f,p;r===0?(c=0,u=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=f+s,u=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(l?1:0),g.reverse();const y=g.join("");let x="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),x=x+v}return x.toLowerCase()},aC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uC(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const dC=new RegExp("^-?(0*)\\d{1,10}$"),hC=-2147483648,fC=2147483647,_m=function(r){if(dC.test(r)){const e=Number(r);if(e>=hC&&e<=fC)return e}return null},wi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},pC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class ul{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ul.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="5",qg="v",Yg="s",Xg="r",Jg="f",Zg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,e_="ls",t_="p",ku="ac",n_="websocket",r_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,s,l,c=!1,u="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _C(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function s_(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===n_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===r_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_C(r)&&(n.ns=r.namespace);const l=[];return Ze(n,(c,u)=>{l.push(c+"="+u)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return g0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={},lu={};function sd(r){const e=r.toString();return ou[e]||(ou[e]=new yC),ou[e]}function vC(r,e){const n=r.toString();return lu[n]||(lu[n]=e()),lu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&wi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="start",xC="close",EC="pLPCommand",CC="pRTLPCB",o_="id",l_="pw",a_="ser",SC="cb",IC="seg",kC="ts",TC="d",NC="dframe",c_=1870,u_=30,RC=c_-u_,PC=25e3,AC=3e4;class ni{constructor(e,n,s,l,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=sd(n),this.urlFn=p=>(this.appCheckToken&&(p[ku]=this.appCheckToken),s_(n,r_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AC)),oC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...c)=>{const[u,f,p,g,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===ym)this.id=f,this.password=p;else if(u===xC)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[ym]="t",s[a_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[SC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qg]=id,this.transportSessionId&&(s[Yg]=this.transportSessionId),this.lastSessionId&&(s[e_]=this.lastSessionId),this.applicationId&&(s[t_]=this.applicationId),this.appCheckToken&&(s[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(s[Xg]=Jg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aC()&&!cC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jm(n),l=Kg(s,RC);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[NC]="t",s[o_]=e,s[l_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rC(),window[EC+this.uniqueCallbackIdentifier]=e,window[CC+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Je("frame writing exception"),f.stack&&Je(f.stack),Je(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[o_]=this.myID,e[l_]=this.myPW,e[a_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+u_+s.length<=c_;){const u=this.pendingSegs.shift();s=s+"&"+IC+l+"="+u.seg+"&"+kC+l+"="+u.ts+"&"+TC+l+"="+u.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(PC)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=16384,OC=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class $t{constructor(e,n,s,l,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=sd(n),this.connURL=$t.connectionURL_(n,u,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const u={};return u[qg]=id,typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(u[Xg]=Jg),n&&(u[Yg]=n),s&&(u[e_]=s),l&&(u[ku]=l),c&&(u[t_]=c),s_(e,n_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vr.set("previous_websocket_failure",!0);try{let s;R0(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!$t.forceDisallow_}static previouslyFailed(){return vr.isInMemoryStorage||vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Kg(n,bC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static get ALL_TRANSPORTS(){return[ni,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const c of Cs.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=6e4,LC=5e3,MC=10*1024,jC=100*1024,au="t",vm="d",FC="s",wm="r",UC="e",xm="o",Em="a",Cm="n",Sm="p",zC="h";class WC{constructor(e,n,s,l,c,u,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(au in e){const n=e[au];n===Em?this.upgradeIfSecondaryHealthy_():n===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Em,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(au,e);if(vm in e){const s=e[vm];if(n===zC){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Cm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FC?this.onConnectionShutdown_(s):n===wm?this.onReset_(s):n===UC?Iu("Server Error: "+s):n===xm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Iu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),id!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends h_{static getInstance(){return new Cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=32,km=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new xe("")}function ae(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function ke(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new xe(r.pieces_,e)}function ld(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function VC(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ss(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function f_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new xe(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new xe(n,0)}function de(r){return r.pieceNum_>=r.pieces_.length}function ut(r,e){const n=ae(r),s=ae(e);if(n===null)return e;if(n===s)return ut(ke(r),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function BC(r,e){const n=Ss(r,0),s=Ss(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=Tr(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function ad(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class HC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jl(this.parts_[s]);p_(this)}}function $C(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=jl(e),p_(r)}function GC(r){const e=r.parts_.pop();r.byteLength_-=jl(e),r.parts_.length>0&&(r.byteLength_-=1)}function p_(r){if(r.byteLength_>km)throw new Error(r.errorPrefix_+"has a key path longer than "+km+" bytes ("+r.byteLength_+").");if(r.parts_.length>Im)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Im+") or object contains a cycle "+yr(r))}function yr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends h_{static getInstance(){return new cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=1e3,KC=300*1e3,Tm=30*1e3,QC=1.3,qC=3e4,YC="server_kill",Nm=3;class gn extends d_{constructor(e,n,s,l,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=KC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(He(c)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new bs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,g=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const s=ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||M0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=L0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,u=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";l&&(c.q=s,c.t=l),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{l&&setTimeout(()=>{l(u.s,u.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Iu("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qC&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(x){j(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(x)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=v&&v.token,f=new WC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{dt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(YC)},c))}catch(x){this.log_("Failed to get token: "+x),u||(this.repoInfo_.nodeAdmin&&dt(x),p())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>rd(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nm&&(this.reconnectDelay_=Tm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hg.replace(/\./g,"-")]=1,Hu()?e["framework.cordova"]=1:sg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cl.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(ui,e),l=new ce(ui,n);return this.compare(s,l)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class m_ extends Vl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Tr(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Cr,rl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,rl)}toString(){return".key"}}const li=new m_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,l&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??qe.RED,this.left=l??xt.EMPTY_NODE,this.right=c??xt.EMPTY_NODE}copy(e,n,s,l,c){return new qe(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class XC{copy(e,n,s,l,c){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new XC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(r,e){return Tr(r.name,e.name)}function ud(r,e){return Tr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;function ZC(r){Tu=r}const g_=function(r){return typeof r=="number"?"number:"+Qg(r):"string:"+r},__=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else j(r===Tu||r.isEmpty(),"priority of unexpected type.");j(r===Tu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm;class Qe{static set __childrenNodeConstructor(e){Rm=e}static get __childrenNodeConstructor(){return Rm}constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:ae(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+g_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qg(this.value_):e+=this.value_,this.lazyHash_=Gg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Qe.VALUE_TYPE_ORDER.indexOf(n),c=Qe.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y_,v_;function eS(r){y_=r}function tS(r){v_=r}class nS extends Vl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?Tr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Cr,new Qe("[PRIORITY-POST]",v_))}makePost(e,n){const s=y_(e);return new ce(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const je=new nS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=Math.log(2);class iS{constructor(e){const n=c=>parseInt(Math.log(c)/rS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sl=function(r,e,n,s){r.sort(e);const l=function(p,g){const y=g-p;let x,v;if(y===0)return null;if(y===1)return x=r[p],v=n?n(x):x,new qe(v,x.node,qe.BLACK,null,null);{const T=parseInt(y/2,10)+p,R=l(p,T),F=l(T+1,g);return x=r[T],v=n?n(x):x,new qe(v,x.node,qe.BLACK,R,F)}},c=function(p){let g=null,y=null,x=r.length;const v=function(R,F){const U=x-R,M=x;x-=R;const P=l(U+1,M),K=r[U],Y=n?n(K):K;T(new qe(Y,K.node,F,null,P))},T=function(R){g?(g.left=R,g=R):(y=R,g=R)};for(let R=0;R<p.count;++R){const F=p.nextBitIsOne(),U=Math.pow(2,p.count-(R+1));F?v(U,qe.BLACK):(v(U,qe.BLACK),v(U,qe.RED))}return y},u=new iS(r.length),f=c(u);return new xt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;const ei={};class mn{static get Default(){return j(ei&&je,"ChildrenNode.ts has not been loaded"),cu=cu||new mn({".priority":ei},{".priority":je}),cu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(ce.Wrap);let u=c.getNext();for(;u;)l=l||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;l?f=Sl(s,e.getCompare()):f=ei;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=f,new mn(y,g)}addToIndexes(e,n){const s=pl(this.indexes_,(l,c)=>{const u=ai(this.indexSet_,c);if(j(u,"Missing index implementation for "+c),l===ei)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(ce.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Sl(f,u.getCompare())}else return ei;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ce(e.name,f))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=pl(this.indexes_,l=>{if(l===ei)return l;{const c=n.get(e.name);return c?l.remove(new ce(e.name,c)):l}});return new mn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class J{static get EMPTY_NODE(){return ds||(ds=new J(new xt(ud),null,mn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=l.isEmpty()?ds:this.priorityNode_;return new J(l,u,c)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{j(ae(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(je,(u,f)=>{n[u]=f.val(e),s++,c&&J.INTEGER_REGEXP_.test(u)?l=Math.max(l,Number(u)):c=!1}),!e&&c&&l<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+g_(this.getPriority().val())+":"),this.forEachChild(je,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Gg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ce(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(je),l=n.getIterator(je);let c=s.getNext(),u=l.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=l.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===li?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sS extends J{constructor(){super(new xt(ud),J.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Us=new sS;Object.defineProperties(ce,{MIN:{value:new ce(ui,J.EMPTY_NODE)},MAX:{value:new ce(Cr,Us)}});m_.__EMPTY_NODE=J.EMPTY_NODE;Qe.__childrenNodeConstructor=J;ZC(Us);tS(Us);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=!0;function Be(r,e=null){if(r===null)return J.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Qe(n,Be(e))}if(!(r instanceof Array)&&oS){const n=[];let s=!1;if(Ze(r,(u,f)=>{if(u.substring(0,1)!=="."){const p=Be(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ce(u,p)))}}),n.length===0)return J.EMPTY_NODE;const c=Sl(n,JC,u=>u.name,ud);if(s){const u=Sl(n,je.getCompare());return new J(c,Be(e),new mn({".priority":u},{".priority":je}))}else return new J(c,Be(e),mn.Default)}else{let n=J.EMPTY_NODE;return Ze(r,(s,l)=>{if(rn(r,s)&&s.substring(0,1)!=="."){const c=Be(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Be(e))}}eS(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS extends Vl{constructor(e){super(),this.indexPath_=e,j(!de(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?Tr(e.name,n.name):c}makePost(e,n){const s=Be(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Us);return new ce(Cr,e)}toString(){return Ss(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS extends Vl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=Be(e);return new ce(n,s)}toString(){return".value"}}const cS=new aS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(r){return{type:"value",snapshotNode:r}}function di(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Is(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function ks(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function uS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.index_=e}updateChild(e,n,s,l,c,u){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Is(n,f)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(di(n,s)):u.trackChildChange(ks(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(je,(l,c)=>{n.hasChild(l)||s.trackChildChange(Is(l,c))}),n.isLeafNode()||n.forEachChild(je,(l,c)=>{if(e.hasChild(l)){const u=e.getImmediateChild(l);u.equals(c)||s.trackChildChange(ks(l,c,u))}else s.trackChildChange(di(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,u){return this.matches(new ce(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const c=this;return n.forEachChild(je,(u,f)=>{c.matches(new ce(u,f))||(l=l.updateImmediateChild(u,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,u){return this.rangedFilter_.matches(new ce(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let u=0;for(;c.hasNext();){const f=c.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let u;if(this.reverse_){const x=this.index_.getCompare();u=(v,T)=>x(T,v)}else u=this.index_.getCompare();const f=e;j(f.numChildren()===this.limit_,"");const p=new ce(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const x=f.getImmediateChild(n);let v=l.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=l.getChildAfterChild(this.index_,v,this.reverse_);const T=v==null?1:u(v,p);if(y&&!s.isEmpty()&&T>=0)return c!=null&&c.trackChildChange(ks(n,s,x)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Is(n,x));const F=f.updateImmediateChild(n,J.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(c!=null&&c.trackChildChange(di(v.name,v.node)),F.updateImmediateChild(v.name,v.node)):F}}else return s.isEmpty()?e:y&&u(g,p)>=0?(c!=null&&(c.trackChildChange(Is(g.name,g.node)),c.trackChildChange(di(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ui}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hS(r){return r.loadsAllData()?new dd(r.getIndex()):r.hasLimit()?new dS(r):new Ts(r)}function Pm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===je?n="$priority":r.index_===cS?n="$value":r.index_===li?n="$key":(j(r.index_ instanceof lS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Am(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==je&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends d_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Fs("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=Il.getListenId_(e,s),f={};this.listens_[u]=f;const p=Pm(e._queryParams);this.restRequest_(c+".json",p,(g,y)=>{let x=y;if(g===404&&(x=null,g=null),g===null&&this.onDataUpdate_(c,x,!1,s),ai(this.listens_,u)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",l(v,null)}})}unlisten(e,n){const s=Il.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pm(e._queryParams),s=e._path.toString(),l=new bs;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ws(f.responseText)}catch{dt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&dt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return{value:null,children:new Map}}function x_(r,e,n){if(de(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ae(e);r.children.has(s)||r.children.set(s,kl());const l=r.children.get(s);e=ke(e),x_(l,e,n)}}function Nu(r,e,n){r.value!==null?n(e,r.value):pS(r,(s,l)=>{const c=new xe(e.toString()+"/"+s);Nu(l,c,n)})}function pS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ze(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=10*1e3,gS=30*1e3,_S=300*1e3;class yS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mS(e);const s=bm+(gS-bm)*Math.random();gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(l,c)=>{c>0&&rn(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*_S))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function fd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function md(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=fd()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Tl(_e(),n,this.revert)}}else return j(ae(this.path)===e,"operationForChild called for unrelated child."),new Tl(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Ns(this.source,_e()):new Ns(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return de(this.path)?new Sr(this.source,_e(),this.snap.getImmediateChild(e)):new Sr(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Sr(this.source,_e(),n.value):new hi(this.source,_e(),n)}else return j(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wS(r,e,n,s){const l=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&r.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(uS(u.childName,u.snapshotNode))}),hs(r,l,"child_removed",e,s,n),hs(r,l,"child_added",e,s,n),hs(r,l,"child_moved",c,s,n),hs(r,l,"child_changed",e,s,n),hs(r,l,"value",e,s,n),l}function hs(r,e,n,s,l,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>ES(r,f,p)),u.forEach(f=>{const p=xS(r,f,c);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function xS(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function ES(r,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),l=new ce(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r,e){return{eventCache:r,serverCache:e}}function _s(r,e,n,s){return Bl(new tr(e,n,s),r.serverCache)}function E_(r,e,n,s){return Bl(r.eventCache,new tr(e,n,s))}function Nl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ir(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;const CS=()=>(uu||(uu=new xt(lC)),uu);class Ie{static fromObject(e){let n=new Ie(null);return Ze(e,(s,l)=>{n=n.set(new xe(s),l)}),n}constructor(e,n=CS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(de(e))return null;{const s=ae(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(ke(e),n);return c!=null?{path:Me(new xe(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Ie(null)}}set(e,n){if(de(e))return new Ie(n,this.children);{const s=ae(e),c=(this.children.get(s)||new Ie(null)).set(ke(e),n),u=this.children.insert(s,c);return new Ie(this.value,u)}}remove(e){if(de(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const l=s.remove(ke(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new Ie(null):new Ie(this.value,c)}else return this}}get(e){if(de(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(de(e))return n;{const s=ae(e),c=(this.children.get(s)||new Ie(null)).setTree(ke(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new Ie(this.value,u)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(de(e))return null;{const c=ae(e),u=this.children.get(c);return u?u.findOnPath_(ke(e),Me(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(de(e))return this;{this.value&&s(n,this.value);const l=ae(e),c=this.children.get(l);return c?c.foreachOnPath_(ke(e),Me(n,l),s):new Ie(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new Ie(null))}}function ys(r,e,n){if(de(e))return new Qt(new Ie(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const u=ut(l,e);return c=c.updateChild(u,n),new Qt(r.writeTree_.set(l,c))}else{const l=new Ie(n),c=r.writeTree_.setTree(e,l);return new Qt(c)}}}function Ru(r,e,n){let s=r;return Ze(n,(l,c)=>{s=ys(s,Me(e,l),c)}),s}function Om(r,e){if(de(e))return Qt.empty();{const n=r.writeTree_.setTree(e,new Ie(null));return new Qt(n)}}function Pu(r,e){return Nr(r,e)!=null}function Nr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function Dm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(s,l)=>{e.push(new ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ce(s,l.value))}),e}function Xn(r,e){if(de(e))return r;{const n=Nr(r,e);return n!=null?new Qt(new Ie(n)):new Qt(r.writeTree_.subtree(e))}}function Au(r){return r.writeTree_.isEmpty()}function fi(r,e){return C_(_e(),r.writeTree_,e)}function C_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(j(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=C_(Me(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(r,e){return T_(e,r)}function SS(r,e,n,s,l){j(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ys(r.visibleWrites,e,n)),r.lastWriteId=s}function IS(r,e,n,s){j(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Ru(r.visibleWrites,e,n),r.lastWriteId=s}function kS(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function TS(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,u=r.allWrites.length-1;for(;l&&u>=0;){const f=r.allWrites[u];f.visible&&(u>=n&&NS(f,s.path)?l=!1:Dt(s.path,f.path)&&(c=!0)),u--}if(l){if(c)return RS(r),!0;if(s.snap)r.visibleWrites=Om(r.visibleWrites,s.path);else{const f=s.children;Ze(f,p=>{r.visibleWrites=Om(r.visibleWrites,Me(s.path,p))})}return!0}else return!1}function NS(r,e){if(r.snap)return Dt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Dt(Me(r.path,n),e))return!0;return!1}function RS(r){r.visibleWrites=S_(r.allWrites,PS,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function PS(r){return r.visible}function S_(r,e,n){let s=Qt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const u=c.path;let f;if(c.snap)Dt(n,u)?(f=ut(n,u),s=ys(s,f,c.snap)):Dt(u,n)&&(f=ut(u,n),s=ys(s,_e(),c.snap.getChild(f)));else if(c.children){if(Dt(n,u))f=ut(n,u),s=Ru(s,f,c.children);else if(Dt(u,n))if(f=ut(u,n),de(f))s=Ru(s,_e(),c.children);else{const p=ai(c.children,ae(f));if(p){const g=p.getChild(ke(f));s=ys(s,_e(),g)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function I_(r,e,n,s,l){if(!s&&!l){const c=Nr(r.visibleWrites,e);if(c!=null)return c;{const u=Xn(r.visibleWrites,e);if(Au(u))return n;if(n==null&&!Pu(u,_e()))return null;{const f=n||J.EMPTY_NODE;return fi(u,f)}}}else{const c=Xn(r.visibleWrites,e);if(!l&&Au(c))return n;if(!l&&n==null&&!Pu(c,_e()))return null;{const u=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Dt(g.path,e)||Dt(e,g.path))},f=S_(r.allWrites,u,e),p=n||J.EMPTY_NODE;return fi(f,p)}}}function AS(r,e,n){let s=J.EMPTY_NODE;const l=Nr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(je,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=Xn(r.visibleWrites,e);return n.forEachChild(je,(u,f)=>{const p=fi(Xn(c,new xe(u)),f);s=s.updateImmediateChild(u,p)}),Dm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=Xn(r.visibleWrites,e);return Dm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function bS(r,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Me(e,n);if(Pu(r.visibleWrites,c))return null;{const u=Xn(r.visibleWrites,c);return Au(u)?l.getChild(n):fi(u,l.getChild(n))}}function OS(r,e,n,s){const l=Me(e,n),c=Nr(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=Xn(r.visibleWrites,l);return fi(u,s.getNode().getImmediateChild(n))}else return null}function DS(r,e){return Nr(r.visibleWrites,e)}function LS(r,e,n,s,l,c,u){let f;const p=Xn(r.visibleWrites,e),g=Nr(p,_e());if(g!=null)f=g;else if(n!=null)f=fi(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],x=u.getCompare(),v=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let T=v.getNext();for(;T&&y.length<l;)x(T,s)!==0&&y.push(T),T=v.getNext();return y}else return[]}function MS(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function Rl(r,e,n,s){return I_(r.writeTree,r.treePath,e,n,s)}function gd(r,e){return AS(r.writeTree,r.treePath,e)}function Lm(r,e,n,s){return bS(r.writeTree,r.treePath,e,n,s)}function Pl(r,e){return DS(r.writeTree,Me(r.treePath,e))}function jS(r,e,n,s,l,c){return LS(r.writeTree,r.treePath,e,n,s,l,c)}function _d(r,e,n){return OS(r.writeTree,r.treePath,e,n)}function k_(r,e){return T_(Me(r.treePath,e),r.writeTree)}function T_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Is(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,di(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,l.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const N_=new US;class yd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _d(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),c=jS(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(r){return{filter:r}}function WS(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function VS(r,e,n,s,l){const c=new FS;let u,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?u=bu(r,e,g.path,g.snap,s,l,c):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!de(g.path),u=Al(r,e,g.path,g.snap,s,l,f,c))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?u=HS(r,e,g.path,g.children,s,l,c):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Ou(r,e,g.path,g.children,s,l,f,c))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?u=KS(r,e,g.path,s,l,c):u=$S(r,e,g.path,g.affectedTree,s,l,c)}else if(n.type===Kt.LISTEN_COMPLETE)u=GS(r,e,n.path,s,c);else throw mi("Unknown operation type: "+n.type);const p=c.getChanges();return BS(e,u,p),{viewCache:u,changes:p}}function BS(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Nl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(w_(Nl(e)))}}function R_(r,e,n,s,l,c){const u=e.eventCache;if(Pl(s,n)!=null)return e;{let f,p;if(de(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ir(e),y=g instanceof J?g:J.EMPTY_NODE,x=gd(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),x,c)}else{const g=Rl(s,Ir(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=ae(n);if(g===".priority"){j(er(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const x=Lm(s,n,y,p);x!=null?f=r.filter.updatePriority(y,x):f=u.getNode()}else{const y=ke(n);let x;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const v=Lm(s,n,u.getNode(),p);v!=null?x=u.getNode().getImmediateChild(g).updateChild(y,v):x=u.getNode().getImmediateChild(g)}else x=_d(s,g,e.serverCache);x!=null?f=r.filter.updateChild(u.getNode(),g,x,y,l,c):f=u.getNode()}}return _s(e,f,u.isFullyInitialized()||de(n),r.filter.filtersNodes())}}function Al(r,e,n,s,l,c,u,f){const p=e.serverCache;let g;const y=u?r.filter:r.filter.getIndexedFilter();if(de(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const T=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),T,null)}else{const T=ae(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const R=ke(n),U=p.getNode().getImmediateChild(T).updateChild(R,s);T===".priority"?g=y.updatePriority(p.getNode(),U):g=y.updateChild(p.getNode(),T,U,R,N_,null)}const x=E_(e,g,p.isFullyInitialized()||de(n),y.filtersNodes()),v=new yd(l,x,c);return R_(r,x,n,l,v,f)}function bu(r,e,n,s,l,c,u){const f=e.eventCache;let p,g;const y=new yd(l,e,c);if(de(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,u),p=_s(e,g,!0,r.filter.filtersNodes());else{const x=ae(n);if(x===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=_s(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=ke(n),T=f.getNode().getImmediateChild(x);let R;if(de(v))R=s;else{const F=y.getCompleteChild(x);F!=null?ld(v)===".priority"&&F.getChild(f_(v)).isEmpty()?R=F:R=F.updateChild(v,s):R=J.EMPTY_NODE}if(T.equals(R))p=e;else{const F=r.filter.updateChild(f.getNode(),x,R,v,y,u);p=_s(e,F,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Mm(r,e){return r.eventCache.isCompleteForChild(e)}function HS(r,e,n,s,l,c,u){let f=e;return s.foreach((p,g)=>{const y=Me(n,p);Mm(e,ae(y))&&(f=bu(r,f,y,g,l,c,u))}),s.foreach((p,g)=>{const y=Me(n,p);Mm(e,ae(y))||(f=bu(r,f,y,g,l,c,u))}),f}function jm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ou(r,e,n,s,l,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;de(n)?g=s:g=new Ie(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((x,v)=>{if(y.hasChild(x)){const T=e.serverCache.getNode().getImmediateChild(x),R=jm(r,T,v);p=Al(r,p,new xe(x),R,l,c,u,f)}}),g.children.inorderTraversal((x,v)=>{const T=!e.serverCache.isCompleteForChild(x)&&v.value===null;if(!y.hasChild(x)&&!T){const R=e.serverCache.getNode().getImmediateChild(x),F=jm(r,R,v);p=Al(r,p,new xe(x),F,l,c,u,f)}}),p}function $S(r,e,n,s,l,c,u){if(Pl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(de(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Al(r,e,n,p.getNode().getChild(n),l,c,f,u);if(de(n)){let g=new Ie(null);return p.getNode().forEachChild(li,(y,x)=>{g=g.set(new xe(y),x)}),Ou(r,e,n,g,l,c,f,u)}else return e}else{let g=new Ie(null);return s.foreach((y,x)=>{const v=Me(n,y);p.isCompleteForPath(v)&&(g=g.set(y,p.getNode().getChild(v)))}),Ou(r,e,n,g,l,c,f,u)}}function GS(r,e,n,s,l){const c=e.serverCache,u=E_(e,c.getNode(),c.isFullyInitialized()||de(n),c.isFiltered());return R_(r,u,n,s,N_,l)}function KS(r,e,n,s,l,c){let u;if(Pl(s,n)!=null)return e;{const f=new yd(s,e,l),p=e.eventCache.getNode();let g;if(de(n)||ae(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Rl(s,Ir(e));else{const x=e.serverCache.getNode();j(x instanceof J,"serverChildren would be complete if leaf node"),y=gd(s,x)}y=y,g=r.filter.updateFullNode(p,y,c)}else{const y=ae(n);let x=_d(s,y,e.serverCache);x==null&&e.serverCache.isCompleteForChild(y)&&(x=p.getImmediateChild(y)),x!=null?g=r.filter.updateChild(p,y,x,ke(n),f,c):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(p,y,J.EMPTY_NODE,ke(n),f,c):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Rl(s,Ir(e)),u.isLeafNode()&&(g=r.filter.updateFullNode(g,u,c)))}return u=e.serverCache.isFullyInitialized()||Pl(s,_e())!=null,_s(e,g,u,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new dd(s.getIndex()),c=hS(s);this.processor_=zS(c);const u=n.serverCache,f=n.eventCache,p=l.updateFullNode(J.EMPTY_NODE,u.getNode(),null),g=c.updateFullNode(J.EMPTY_NODE,f.getNode(),null),y=new tr(p,u.isFullyInitialized(),l.filtersNodes()),x=new tr(g,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Bl(x,y),this.eventGenerator_=new vS(this.query_)}get query(){return this.query_}}function qS(r){return r.viewCache_.serverCache.getNode()}function YS(r){return Nl(r.viewCache_)}function XS(r,e){const n=Ir(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Fm(r){return r.eventRegistrations_.length===0}function JS(r,e){r.eventRegistrations_.push(e)}function Um(r,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,l);u&&s.push(u)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const u=r.eventRegistrations_[c];if(!u.matches(e))l.push(u);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function zm(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(j(Ir(r.viewCache_),"We should always have a full cache before handling merges"),j(Nl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=VS(r.processor_,l,e,n,s);return WS(r.processor_,c.viewCache),j(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,P_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function ZS(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(c,u)=>{s.push(di(c,u))}),n.isFullyInitialized()&&s.push(w_(n.getNode())),P_(r,s,n.getNode(),e)}function P_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return wS(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;class A_{constructor(){this.views=new Map}}function e1(r){j(!bl,"__referenceConstructor has already been defined"),bl=r}function t1(){return j(bl,"Reference.ts has not been loaded"),bl}function n1(r){return r.views.size===0}function vd(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return j(c!=null,"SyncTree gave us an op for an invalid query."),zm(c,e,n,s)}else{let c=[];for(const u of r.views.values())c=c.concat(zm(u,e,n,s));return c}}function b_(r,e,n,s,l){const c=e._queryIdentifier,u=r.views.get(c);if(!u){let f=Rl(n,l?s:null),p=!1;f?p=!0:s instanceof J?(f=gd(n,s),p=!1):(f=J.EMPTY_NODE,p=!1);const g=Bl(new tr(f,p,!1),new tr(s,l,!1));return new QS(e,g)}return u}function r1(r,e,n,s,l,c){const u=b_(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,u),JS(u,n),ZS(u,n)}function i1(r,e,n,s){const l=e._queryIdentifier,c=[];let u=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())u=u.concat(Um(g,n,s)),Fm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||c.push(g.query));else{const p=r.views.get(l);p&&(u=u.concat(Um(p,n,s)),Fm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!nr(r)&&c.push(new(t1())(e._repo,e._path)),{removed:c,events:u}}function O_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jn(r,e){let n=null;for(const s of r.views.values())n=n||XS(s,e);return n}function D_(r,e){if(e._queryParams.loadsAllData())return $l(r);{const s=e._queryIdentifier;return r.views.get(s)}}function L_(r,e){return D_(r,e)!=null}function nr(r){return $l(r)!=null}function $l(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;function s1(r){j(!Ol,"__referenceConstructor has already been defined"),Ol=r}function o1(){return j(Ol,"Reference.ts has not been loaded"),Ol}let l1=1;class Wm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=MS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function M_(r,e,n,s,l){return SS(r.pendingWriteTree_,e,n,s,l),l?xi(r,new Sr(fd(),e,n)):[]}function a1(r,e,n,s){IS(r.pendingWriteTree_,e,n,s);const l=Ie.fromObject(n);return xi(r,new hi(fd(),e,l))}function Gn(r,e,n=!1){const s=kS(r.pendingWriteTree_,e);if(TS(r.pendingWriteTree_,e)){let c=new Ie(null);return s.snap!=null?c=c.set(_e(),!0):Ze(s.children,u=>{c=c.set(new xe(u),!0)}),xi(r,new Tl(s.path,c,n))}else return[]}function zs(r,e,n){return xi(r,new Sr(pd(),e,n))}function c1(r,e,n){const s=Ie.fromObject(n);return xi(r,new hi(pd(),e,s))}function u1(r,e){return xi(r,new Ns(pd(),e))}function d1(r,e,n){const s=xd(r,n);if(s){const l=Ed(s),c=l.path,u=l.queryId,f=ut(c,e),p=new Ns(md(u),f);return Cd(r,c,p)}else return[]}function Dl(r,e,n,s,l=!1){const c=e._path,u=r.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||L_(u,e))){const p=i1(u,e,n,s);n1(u)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,x=r.syncPointTree_.findOnPath(c,(v,T)=>nr(T));if(y&&!x){const v=r.syncPointTree_.subtree(c);if(!v.isEmpty()){const T=p1(v);for(let R=0;R<T.length;++R){const F=T[R],U=F.query,M=z_(r,F);r.listenProvider_.startListening(vs(U),Rs(r,U),M.hashFn,M.onComplete)}}}!x&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(vs(e),null):g.forEach(v=>{const T=r.queryToTagMap.get(Gl(v));r.listenProvider_.stopListening(vs(v),T)}))}m1(r,g)}return f}function j_(r,e,n,s){const l=xd(r,s);if(l!=null){const c=Ed(l),u=c.path,f=c.queryId,p=ut(u,e),g=new Sr(md(f),p,n);return Cd(r,u,g)}else return[]}function h1(r,e,n,s){const l=xd(r,s);if(l){const c=Ed(l),u=c.path,f=c.queryId,p=ut(u,e),g=Ie.fromObject(n),y=new hi(md(f),p,g);return Cd(r,u,y)}else return[]}function Du(r,e,n,s=!1){const l=e._path;let c=null,u=!1;r.syncPointTree_.foreachOnPath(l,(v,T)=>{const R=ut(v,l);c=c||Jn(T,R),u=u||nr(T)});let f=r.syncPointTree_.get(l);f?(u=u||nr(f),c=c||Jn(f,_e())):(f=new A_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;c!=null?p=!0:(p=!1,c=J.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((T,R)=>{const F=Jn(R,_e());F&&(c=c.updateImmediateChild(T,F))}));const g=L_(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=Gl(e);j(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const T=g1();r.queryToTagMap.set(v,T),r.tagToQueryMap.set(T,v)}const y=Hl(r.pendingWriteTree_,l);let x=r1(f,e,n,y,c,p);if(!g&&!u&&!s){const v=D_(f,e);x=x.concat(_1(r,e,v))}return x}function wd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(u,f)=>{const p=ut(u,e),g=Jn(f,p);if(g)return g});return I_(l,e,c,n,!0)}function f1(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,y)=>{const x=ut(g,n);s=s||Jn(y,x)});let l=r.syncPointTree_.get(n);l?s=s||Jn(l,_e()):(l=new A_,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=s!=null,u=c?new tr(s,!0,!1):null,f=Hl(r.pendingWriteTree_,e._path),p=b_(l,e,f,c?u.getNode():J.EMPTY_NODE,c);return YS(p)}function xi(r,e){return F_(e,r.syncPointTree_,null,Hl(r.pendingWriteTree_,_e()))}function F_(r,e,n,s){if(de(r.path))return U_(r,e,n,s);{const l=e.get(_e());n==null&&l!=null&&(n=Jn(l,_e()));let c=[];const u=ae(r.path),f=r.operationForChild(u),p=e.children.get(u);if(p&&f){const g=n?n.getImmediateChild(u):null,y=k_(s,u);c=c.concat(F_(f,p,g,y))}return l&&(c=c.concat(vd(l,r,s,n))),c}}function U_(r,e,n,s){const l=e.get(_e());n==null&&l!=null&&(n=Jn(l,_e()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,g=k_(s,u),y=r.operationForChild(u);y&&(c=c.concat(U_(y,f,p,g)))}),l&&(c=c.concat(vd(l,r,s,n))),c}function z_(r,e){const n=e.query,s=Rs(r,n);return{hashFn:()=>(qS(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?d1(r,n._path,s):u1(r,n._path);{const c=uC(l,n);return Dl(r,n,null,c)}}}}function Rs(r,e){const n=Gl(e);return r.queryToTagMap.get(n)}function Gl(r){return r._path.toString()+"$"+r._queryIdentifier}function xd(r,e){return r.tagToQueryMap.get(e)}function Ed(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new xe(r.substr(0,e))}}function Cd(r,e,n){const s=r.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=Hl(r.pendingWriteTree_,e);return vd(s,n,l,null)}function p1(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[$l(n)];{let l=[];return n&&(l=O_(n)),Ze(s,(c,u)=>{l=l.concat(u)}),l}})}function vs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(o1())(r._repo,r._path):r}function m1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Gl(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function g1(){return l1++}function _1(r,e,n){const s=e._path,l=Rs(r,e),c=z_(r,n),u=r.listenProvider_.startListening(vs(e),l,c.hashFn,c.onComplete),f=r.syncPointTree_.subtree(s);if(l)j(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,x)=>{if(!de(g)&&y&&nr(y))return[$l(y).query];{let v=[];return y&&(v=v.concat(O_(y).map(T=>T.query))),Ze(x,(T,R)=>{v=v.concat(R)}),v}});for(let g=0;g<p.length;++g){const y=p[g];r.listenProvider_.stopListening(vs(y),Rs(r,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Id(this.syncTree_,n)}node(){return wd(this.syncTree_,this.path_)}}const y1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Vm=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return v1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return w1(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},v1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},w1=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const u=l.getValue();return typeof u!="number"?s:u+s},W_=function(r,e,n,s){return kd(e,new Id(n,r),s)},V_=function(r,e,n){return kd(r,new Sd(e),n)};function kd(r,e,n){const s=r.getPriority().val(),l=Vm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const u=r,f=Vm(u.getValue(),e,n);return f!==u.getValue()||l!==u.getPriority().val()?new Qe(f,Be(l)):r}else{const u=r;return c=u,l!==u.getPriority().val()&&(c=c.updatePriority(new Qe(l))),u.forEachChild(je,(f,p)=>{const g=kd(p,e.getImmediateChild(f),n);g!==p&&(c=c.updateImmediateChild(f,g))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nd(r,e){let n=e instanceof xe?e:new xe(e),s=r,l=ae(n);for(;l!==null;){const c=ai(s.node.children,l)||{children:{},childCount:0};s=new Td(l,s,c),n=ke(n),l=ae(n)}return s}function Ei(r){return r.node.value}function B_(r,e){r.node.value=e,Lu(r)}function H_(r){return r.node.childCount>0}function x1(r){return Ei(r)===void 0&&!H_(r)}function Kl(r,e){Ze(r.node.children,(n,s)=>{e(new Td(n,r,s))})}function $_(r,e,n,s){n&&e(r),Kl(r,l=>{$_(l,e,!0)})}function E1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(r){return new xe(r.parent===null?r.name:Ws(r.parent)+"/"+r.name)}function Lu(r){r.parent!==null&&C1(r.parent,r.name,r)}function C1(r,e,n){const s=x1(n),l=rn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Lu(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Lu(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=/[\[\].#$\/\u0000-\u001F\u007F]/,I1=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Rd=function(r){return typeof r=="string"&&r.length!==0&&!S1.test(r)},G_=function(r){return typeof r=="string"&&r.length!==0&&!I1.test(r)},k1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),G_(r)},T1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!nd(r)||r&&typeof r=="object"&&rn(r,".sv")},N1=function(r,e,n,s){Ql(Ml(r,"value"),e,n)},Ql=function(r,e,n){const s=n instanceof xe?new HC(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(r+"contains a function "+yr(s)+" with contents = "+e.toString());if(nd(e))throw new Error(r+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>du/3&&jl(e)>du)throw new Error(r+"contains a string greater than "+du+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(Ze(e,(u,f)=>{if(u===".value")l=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!Rd(u)))throw new Error(r+" contains an invalid key ("+u+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$C(s,u),Ql(r,f,s),GC(s)}),l&&c)throw new Error(r+' contains ".value" child '+yr(s)+" in addition to actual children.")}},R1=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=Ss(s);for(let u=0;u<c.length;u++)if(!(c[u]===".priority"&&u===c.length-1)){if(!Rd(c[u]))throw new Error(r+"contains an invalid key ("+c[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(BC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Dt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},P1=function(r,e,n,s){const l=Ml(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];Ze(e,(u,f)=>{const p=new xe(u);if(Ql(l,f,Me(n,p)),ld(p)===".priority"&&!T1(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(p)}),R1(l,c)},K_=function(r,e,n,s){if(!G_(n))throw new Error(Ml(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},A1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),K_(r,e,n)},Q_=function(r,e){if(ae(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},b1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k1(n))throw new Error(Ml(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!ad(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function q_(r,e,n){ql(r,n),Y_(r,s=>ad(s,e))}function Lt(r,e,n){ql(r,n),Y_(r,s=>Dt(s,e)||Dt(e,s))}function Y_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(D1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function D1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ms&&Je("event: "+n.toString()),wi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="repo_interrupt",M1=25;class j1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kl(),this.transactionQueueTree_=new Td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F1(r,e,n){if(r.stats_=sd(r.repoInfo_),r.forceRestClient_||pC())r.server_=new Il(r.repoInfo_,(s,l,c,u)=>{Bm(r,s,l,c,u)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Hm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new gn(r.repoInfo_,e,(s,l,c,u)=>{Bm(r,s,l,c,u)},s=>{Hm(r,s)},s=>{z1(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=vC(r.repoInfo_,()=>new yS(r.stats_,r.server_)),r.infoData_=new fS,r.infoSyncTree_=new Wm({startListening:(s,l,c,u)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=zs(r.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Pd(r,"connected",!1),r.serverSyncTree_=new Wm({startListening:(s,l,c,u)=>(r.server_.listen(s,c,l,(f,p)=>{const g=u(f,p);Lt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function U1(r){const n=r.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(r){return y1({timestamp:U1(r)})}function Bm(r,e,n,s,l){r.dataUpdateCount++;const c=new xe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let u=[];if(l)if(s){const p=pl(n,g=>Be(g));u=h1(r.serverSyncTree_,c,p,l)}else{const p=Be(n);u=j_(r.serverSyncTree_,c,p,l)}else if(s){const p=pl(n,g=>Be(g));u=c1(r.serverSyncTree_,c,p)}else{const p=Be(n);u=zs(r.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=pi(r,c)),Lt(r.eventQueue_,f,u)}function Hm(r,e){Pd(r,"connected",e),e===!1&&H1(r)}function z1(r,e){Ze(e,(n,s)=>{Pd(r,n,s)})}function Pd(r,e,n){const s=new xe("/.info/"+e),l=Be(n);r.infoData_.updateSnapshot(s,l);const c=zs(r.infoSyncTree_,s,l);Lt(r.eventQueue_,s,c)}function Ad(r){return r.nextWriteId_++}function W1(r,e,n){const s=f1(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=Be(l).withIndex(e._queryParams.getIndex());Du(r.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=zs(r.serverSyncTree_,e._path,c);else{const f=Rs(r.serverSyncTree_,e);u=j_(r.serverSyncTree_,e._path,c,f)}return Lt(r.eventQueue_,e._path,u),Dl(r.serverSyncTree_,e,n,null,!0),c},l=>(Vs(r,"get for query "+He(e)+" failed: "+l),Promise.reject(new Error(l))))}function V1(r,e,n,s,l){Vs(r,"set",{path:e.toString(),value:n,priority:s});const c=Yl(r),u=Be(n,s),f=wd(r.serverSyncTree_,e),p=V_(u,f,c),g=Ad(r),y=M_(r.serverSyncTree_,e,p,g,!0);ql(r.eventQueue_,y),r.server_.put(e.toString(),u.val(!0),(v,T)=>{const R=v==="ok";R||dt("set at "+e+" failed: "+v);const F=Gn(r.serverSyncTree_,g,!R);Lt(r.eventQueue_,e,F),Mu(r,l,v,T)});const x=Od(r,e);pi(r,x),Lt(r.eventQueue_,x,[])}function B1(r,e,n,s){Vs(r,"update",{path:e.toString(),value:n});let l=!0;const c=Yl(r),u={};if(Ze(n,(f,p)=>{l=!1,u[f]=W_(Me(e,f),Be(p),r.serverSyncTree_,c)}),l)Je("update() called with empty data.  Don't do anything."),Mu(r,s,"ok",void 0);else{const f=Ad(r),p=a1(r.serverSyncTree_,e,u,f);ql(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,y)=>{const x=g==="ok";x||dt("update at "+e+" failed: "+g);const v=Gn(r.serverSyncTree_,f,!x),T=v.length>0?pi(r,e):e;Lt(r.eventQueue_,T,v),Mu(r,s,g,y)}),Ze(n,g=>{const y=Od(r,Me(e,g));pi(r,y)}),Lt(r.eventQueue_,e,[])}}function H1(r){Vs(r,"onDisconnectEvents");const e=Yl(r),n=kl();Nu(r.onDisconnect_,_e(),(l,c)=>{const u=W_(l,c,r.serverSyncTree_,e);x_(n,l,u)});let s=[];Nu(n,_e(),(l,c)=>{s=s.concat(zs(r.serverSyncTree_,l,c));const u=Od(r,l);pi(r,u)}),r.onDisconnect_=kl(),Lt(r.eventQueue_,_e(),s)}function $1(r,e,n){let s;ae(e._path)===".info"?s=Du(r.infoSyncTree_,e,n):s=Du(r.serverSyncTree_,e,n),q_(r.eventQueue_,e._path,s)}function X_(r,e,n){let s;ae(e._path)===".info"?s=Dl(r.infoSyncTree_,e,n):s=Dl(r.serverSyncTree_,e,n),q_(r.eventQueue_,e._path,s)}function G1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(L1)}function Vs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Je(n,...e)}function Mu(r,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const u=new Error(c);u.code=l,e(u)}})}function J_(r,e,n){return wd(r.serverSyncTree_,e,n)||J.EMPTY_NODE}function bd(r,e=r.transactionQueueTree_){if(e||Xl(r,e),Ei(e)){const n=ey(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&K1(r,Ws(e),n)}else H_(e)&&Kl(e,n=>{bd(r,n)})}function K1(r,e,n){const s=n.map(g=>g.currentWriteId),l=J_(r,e,s);let c=l;const u=l.hash();for(let g=0;g<n.length;g++){const y=n[g];j(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const x=ut(e,y.path);c=c.updateChild(x,y.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Vs(r,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const x=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(Gn(r.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&x.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Xl(r,Nd(r.transactionQueueTree_,e)),bd(r,r.transactionQueueTree_),Lt(r.eventQueue_,e,y);for(let v=0;v<x.length;v++)wi(x[v])}else{if(g==="datastale")for(let x=0;x<n.length;x++)n[x].status===3?n[x].status=4:n[x].status=0;else{dt("transaction at "+p.toString()+" failed: "+g);for(let x=0;x<n.length;x++)n[x].status=4,n[x].abortReason=g}pi(r,e)}},u)}function pi(r,e){const n=Z_(r,e),s=Ws(n),l=ey(r,n);return Q1(r,l,s),s}function Q1(r,e,n){if(e.length===0)return;const s=[];let l=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=ut(n,p.path);let y=!1,x;if(j(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,x=p.abortReason,l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=M1)y=!0,x="maxretry",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else{const v=J_(r,p.path,u);p.currentInputSnapshot=v;const T=e[f].update(v.val());if(T!==void 0){Ql("transaction failed: Data returned ",T,p.path);let R=Be(T);typeof T=="object"&&T!=null&&rn(T,".priority")||(R=R.updatePriority(v.getPriority()));const U=p.currentWriteId,M=Yl(r),P=V_(R,v,M);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=P,p.currentWriteId=Ad(r),u.splice(u.indexOf(U),1),l=l.concat(M_(r.serverSyncTree_,p.path,P,p.currentWriteId,p.applyLocally)),l=l.concat(Gn(r.serverSyncTree_,U,!0))}else y=!0,x="nodata",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0))}Lt(r.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(x==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(x),!1,null))))}Xl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);bd(r,r.transactionQueueTree_)}function Z_(r,e){let n,s=r.transactionQueueTree_;for(n=ae(e);n!==null&&Ei(s)===void 0;)s=Nd(s,n),e=ke(e),n=ae(e);return s}function ey(r,e){const n=[];return ty(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ty(r,e,n){const s=Ei(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Kl(e,l=>{ty(r,l,n)})}function Xl(r,e){const n=Ei(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,B_(e,n.length>0?n:void 0)}Kl(e,s=>{Xl(r,s)})}function Od(r,e){const n=Ws(Z_(r,e)),s=Nd(r.transactionQueueTree_,e);return E1(s,l=>{hu(r,l)}),hu(r,s),$_(s,l=>{hu(r,l)}),n}function hu(r,e){const n=Ei(e);if(n){const s=[];let l=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(j(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(j(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),l=l.concat(Gn(r.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?B_(e,void 0):n.length=c+1,Lt(r.eventQueue_,Ws(e),l);for(let u=0;u<s.length;u++)wi(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Y1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${r}'`)}return e}const $m=function(r,e){const n=X1(r),s=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sC();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new i_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new xe(n.pathString)}},X1=function(r){let e="",n="",s="",l="",c="",u=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let x=r.indexOf("?");x===-1&&(x=r.length),e=r.substring(0,Math.min(y,x)),y<x&&(l=q1(r.substring(y,x)));const v=Y1(r.substring(Math.min(r.length,x)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const T=e.slice(0,g);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),c=s}"ns"in v&&(c=v.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:l,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class Z1{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return de(this._path)?null:ld(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Am(this._queryParams),n=rd(e);return n==="{}"?"default":n}get _queryObject(){return Am(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof Dd))return!1;const n=this._repo===e._repo,s=ad(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+VC(this._path)}}class xn extends Dd{constructor(e,n){super(e,n,new hd,!1)}get parent(){const e=f_(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),s=ju(this.ref,e);return new Ps(this._node.getChild(n),s,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ps(l,ju(this.ref,s),je)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ot(r,e){return r=Et(r),r._checkNotDeleted("ref"),e!==void 0?ju(r._root,e):r._root}function ju(r,e){return r=Et(r),ae(r._path)===null?A1("child","path",e):K_("child","path",e),new xn(r._repo,Me(r._path,e))}function eI(r){return Q_("remove",r._path),Jl(r,null)}function Jl(r,e){r=Et(r),Q_("set",r._path),N1("set",e,r._path);const n=new bs;return V1(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function kr(r,e){P1("update",e,r._path);const n=new bs;return B1(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function Ll(r){r=Et(r);const e=new ny(()=>{}),n=new Zl(e);return W1(r._repo,r,n).then(s=>new Ps(s,new xn(r._repo,r._path),r._queryParams.getIndex()))}class Zl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new J1("value",this,new Ps(e.snapshotNode,new xn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Z1(this,e,n):null}matches(e){return e instanceof Zl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tI(r,e,n,s,l){const c=new ny(n,void 0),u=new Zl(c);return $1(r._repo,r,u),()=>X_(r._repo,r,u)}function nI(r,e,n,s){return tI(r,"value",e)}function rI(r,e,n){X_(r._repo,r,null)}e1(xn);s1(xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let sI=!1;function oI(r,e,n,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),u=gi(c);r.repoInfo_=new i_(e,u,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function lI(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let u=$m(c,l),f=u.repoInfo,p;typeof process<"u"&&fm&&(p=fm[iI]),p?(c=`http://${p}?ns=${f.namespace}`,u=$m(c,l),f=u.repoInfo):u.repoInfo.secure;const g=new gC(r.name,r.options,e);b1("Invalid Firebase Database URL",u),de(u.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=cI(f,r,g,new mC(r,n));return new uI(y,r)}function aI(r,e){const n=Fu[e];(!n||n[r.key]!==r)&&wn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),G1(r),delete n[r.key]}function cI(r,e,n,s){let l=Fu[e.name];l||(l={},Fu[e.name]=l);let c=l[r.toURLString()];return c&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new j1(r,sI,n,s),l[r.toURLString()]=c,c}class uI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function dI(r=ug(),e){const n=Ku(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=E0("database");s&&hI(n,...s)}return n}function hI(r,e,n,s={}){r=Et(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&wr(s,c.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ul(ul.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:C0(s.mockUserToken,r.app.options.projectId);u=new ul(f)}gi(e)&&(rg(e),ig("Database",!0)),oI(c,l,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r){ZE(yi),ci(new xr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return lI(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),qn(pm,mm,r),qn(pm,mm,"esm2020")}gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};fI();const pI={apiKey:"AIzaSyCLgGHXRhXRn6yubYySyQ9WUt1e0lDckX8",authDomain:"sekimeki-3c6d9.firebaseapp.com",databaseURL:"https://sekimeki-3c6d9-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"sekimeki-3c6d9",storageBucket:"sekimeki-3c6d9.firebasestorage.app",messagingSenderId:"269784219722",appId:"1:269784219722:web:fd1ecbae99bd3da98526b3"},ry=cg(pI),fu=XE(ry),lt=dI(ry);let iy=null;function mI(){return new Promise((r,e)=>{jx(fu,Zu).then(()=>{zx(fu,n=>{n&&(iy=n.uid,r(n.uid))}),Ox(fu).catch(e)}).catch(e)})}function ea(){return iy??""}function Gm(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<4;n++)e+=r[Math.floor(Math.random()*r.length)];return e}async function gI(r,e){const n=ea();let s=Gm(),l=await Ll(ot(lt,`rooms/${s}`)),c=0;for(;l.exists()&&c<10;)s=Gm(),l=await Ll(ot(lt,`rooms/${s}`)),c++;return await Jl(ot(lt,`rooms/${s}/config`),{mode:r,layout:e,adminId:n,state:"waiting",createdAt:Date.now()}),s}async function _I(r){return(await Ll(ot(lt,`rooms/${r}/config`))).exists()}async function yI(r){const e=await Ll(ot(lt,`rooms/${r}/config`));return e.exists()?e.val():null}async function vI(r,e){const n=ea();return await Jl(ot(lt,`rooms/${r}/participants/${n}`),{name:e.name,gender:e.gender??null,avatar:e.avatar,answers:null,completed:!1}),n}async function wI(r){const e=ea();await eI(ot(lt,`rooms/${r}/participants/${e}`))}async function xI(r,e){const n=ea();await kr(ot(lt,`rooms/${r}/participants/${n}`),{answers:e,completed:!0})}async function EI(r,e,n,s,l){const c={};for(const p of e){const g=[p.id1,p.id2].sort().join("_");c[g]={...p,visible:!0}}const u={};n.forEach((p,g)=>{u[String(g)]=p});const f={};s.forEach((p,g)=>{f[String(g)]=p}),await Jl(ot(lt,`rooms/${r}/results`),{compatibility:c,seatAssignments:u,awards:f,revealed:!1}),await kr(ot(lt,`rooms/${r}/config`),{state:"admin-review"});for(const[p,g]of Object.entries(l))await kr(ot(lt,`rooms/${r}/participants/${p}`),g)}async function CI(r,e,n){await kr(ot(lt,`rooms/${r}/results/compatibility/${e}`),{visible:n})}async function SI(r){await kr(ot(lt,`rooms/${r}/results`),{revealed:!0}),await kr(ot(lt,`rooms/${r}/config`),{state:"results"})}async function II(r,e,n){const s={};e.forEach((c,u)=>{s[String(u)]=c});const l={};n.forEach((c,u)=>{l[String(u)]=c}),await kr(ot(lt,`rooms/${r}/results`),{seatAssignments:s,awards:l})}function kI(r,e){const n=ot(lt,`rooms/${r}`);return nI(n,s=>{e(s.val())}),()=>rI(n)}function TI(){var M,P,K,Y;const[r,e]=te.useState(""),[n,s]=te.useState(null),[l,c]=te.useState(null),[u,f]=te.useState(!1);te.useEffect(()=>{mI().then(ie=>{e(ie),f(!0)})},[]),te.useEffect(()=>{if(!n){c(null);return}return kI(n,ne=>{c(ne)})},[n]);const p=l&&r?l.config.adminId===r?"admin":"participant":null,g=l!=null&&l.participants?Object.entries(l.participants).map(([ie,ne])=>({id:ie,name:ne.name,gender:ne.gender,avatar:ne.avatar,answers:ne.answers??[],completed:ne.completed,vector:ne.vector,personalType:ne.personalType,personalTypeEmoji:ne.personalTypeEmoji})):[],y=g.find(ie=>ie.id===r)??null,x=(M=l==null?void 0:l.results)!=null&&M.compatibility?Object.values(l.results.compatibility):[],v=x.filter(ie=>ie.visible!==!1),T=(P=l==null?void 0:l.results)!=null&&P.seatAssignments?Object.values(l.results.seatAssignments):[],R=(K=l==null?void 0:l.results)!=null&&K.awards?Object.values(l.results.awards):[],F=((Y=l==null?void 0:l.results)==null?void 0:Y.revealed)??!1,U=g.length>0&&g.every(ie=>ie.completed);return{uid:r,roomCode:n,roomData:l,role:p,participants:g,myParticipant:y,compatibilityResults:x,visibleResults:v,seatAssignments:T,awards:R,revealed:F,allCompleted:U,isReady:u,setRoomCode:s}}const NI={S:{E:"魂のパリピ同盟",C:"以心伝心のふたり",V:"運命の冒険パートナー",L:"恋のシンクロ率MAX",H:"爆笑ソウルメイト"},A:{E:"ノリが合う飲み仲間",C:"会話キャッチボール名人",V:"趣味トーク無限ループ",L:"じわじわ来る恋の予感",H:"ツボが近い笑い仲間"},B:{E:"新しい扉を開く関係",C:"未知の言語を学ぶ感覚",V:"お互い新世界への案内人",L:"押し引きのスリルあり",H:"笑いの化学反応待ち"},C:{E:"テンションの異文化交流",C:"沈黙すら味になる関係",V:"真逆だからこそ面白い",L:"恋の迷路を楽しんで",H:"笑いの新大陸を発見せよ"}};function RI(r){return r>=85?"S":r>=70?"A":r>=55?"B":"C"}const PI=[{condition:r=>r[0]>=4&&r[2]>=4,emoji:"🌪️",name:"お祭りハリケーン"},{condition:r=>r[0]<=2&&r[4]>=4,emoji:"🎯",name:"スナイパー芸人"},{condition:r=>r[1]>=4&&r[3]>=4,emoji:"🦁",name:"恋のライオン"},{condition:r=>r[1]<=2&&r[2]<=2,emoji:"🐱",name:"癒しの守護猫"},{condition:r=>r[0]>=4&&r[4]>=4,emoji:"🎉",name:"パーティーモンスター"},{condition:r=>r[0]>=4&&r[3]>=4,emoji:"💘",name:"情熱のストライカー"},{condition:r=>r[2]>=4&&r[4]>=4,emoji:"🎪",name:"アドベンチャーコメディアン"},{condition:r=>r[0]<=2&&r[2]<=2,emoji:"🏠",name:"おうちの守り神"},{condition:r=>r[1]>=4&&r[4]>=4,emoji:"🎤",name:"トークの魔術師"},{condition:r=>r[3]<=2&&r[1]<=2,emoji:"🌙",name:"ミステリアスな月"},{condition:r=>r[0]>=4&&r[1]>=4,emoji:"☀️",name:"太陽系リーダー"},{condition:r=>r[3]>=4&&r[2]>=4,emoji:"🚀",name:"恋のロケットランチャー"},{condition:r=>r[0]<=2&&r[3]<=2,emoji:"🍵",name:"まったり茶道マスター"},{condition:r=>r[2]<=2&&r[4]<=2,emoji:"📚",name:"哲学者の休日"},{condition:r=>r[1]<=2&&r[4]>=4,emoji:"🎭",name:"ギャップの天才"},{condition:r=>{const e=r.reduce((n,s)=>n+s,0)/5;return r.every(n=>Math.abs(n-e)<1)},emoji:"🌈",name:"万能カメレオン"}];function AI(r){for(const e of PI)if(e.condition(r))return{emoji:e.emoji,name:e.name};return{emoji:"🌈",name:"万能カメレオン"}}const pu={E:{common:["2人とも行きたい「最高の金曜夜プラン」を3秒で答えて！","理想の飲み会メンバー、有名人3人だけ呼べるなら？","一緒に行くならフェス？それとも秘境温泉？"],diff:["お互いの「理想の金曜夜」をプレゼンしてみて！","インドア派 vs アウトドア派、1分ディベート開始！","相手の趣味を1つ体験するなら何にする？"]},C:{common:["最近あった「聞いてほしい話」を30秒で！","2人で一番盛り上がれる話題は何だと思う？","お互いの第一印象、正直に言い合おう！"],diff:["じゃあ今から1分間、いつもと逆の会話スタイルで話してみよう！","「相手に聞いてみたかったこと」を3つ！","2人の会話スタイルが合体したら最強説、検証！"]},V:{common:["次の3連休、予定なかったらどこ行く？3秒で！","2人で旅行に行くならどの国？","「これだけはやってみたいこと」を1つずつ！"],diff:["相手の価値観で1日過ごすなら何する？","お互いの「譲れないこだわり」を発表！","もし2人で24時間お出かけするなら、プランどう立てる？"]},L:{common:["理想のデートプラン、相手に聞かずに考えて同時に発表！","「こんなサプライズされたらキュンとする」を告白！","恋愛映画でどのシーンに一番グッとくる？"],diff:["もし2人でドラマに出るなら、どんなジャンル？","お互いの恋愛の距離感を料理で例えると？","「この人いいな」と思う瞬間を3秒で！"]},H:{common:["今まで一番笑った出来事は？","一緒に見るなら何のお笑い番組？","相手をお笑い芸人に例えると誰？"],diff:["お互いの笑いのツボを探る質問タイム！","1分間で相手を笑わせるチャレンジ！","「この人面白いな」と思った瞬間を再現！"]}},Uu=[{id:1,axis:"E",text:"金曜の夜、理想の過ごし方は？",leftLabel:"少人数でゆったりバー",rightLabel:"大人数でワイワイ飲み会"},{id:2,axis:"E",text:"旅行先で盛り上がるのは？",leftLabel:"隠れ家カフェ巡り",rightLabel:"有名スポットで写真撮りまくり"},{id:3,axis:"C",text:"初対面の人との会話スタイルは？",leftLabel:"相手の話をじっくり聞く",rightLabel:"自分から話題をどんどん振る"},{id:4,axis:"C",text:"友達の悩み相談、あなたの対応は？",leftLabel:"まず気持ちに寄り添う",rightLabel:"一緒に解決策を考える"},{id:5,axis:"V",text:"理想の休日は？",leftLabel:"おうちでまったり",rightLabel:"外に出てアクティブに"},{id:6,axis:"V",text:"旅行のスタイルは？",leftLabel:"計画をしっかり立てる",rightLabel:"ノープランで行き当たりばったり"},{id:7,axis:"L",text:"気になる人へのアプローチは？",leftLabel:"じっくり友達から",rightLabel:"すぐに距離を詰める"},{id:8,axis:"L",text:"デートに誘うなら？",leftLabel:"自然な流れを待つ",rightLabel:"ストレートに誘う"},{id:9,axis:"H",text:"笑いのツボに近いのは？",leftLabel:"じわじわ来る知的なウィット",rightLabel:"勢いとテンションで爆笑"},{id:10,axis:"H",text:"飲み会での立ち位置は？",leftLabel:"絶妙なタイミングで一言",rightLabel:"場を仕切るMC役"}],zu={E:.25,C:.2,V:.2,L:.2,H:.15},bI=["E","V","H"],OI=["C","L"],DI=1.5,LI=1.2;function MI(r){return["E","C","V","L","H"].map(n=>{const c=Uu.filter(u=>u.axis===n).map(u=>u.id-1).map(u=>r[u]??3);return c.reduce((u,f)=>u+f,0)/c.length})}function jI(r,e){return 1-Math.abs(r-e)/4}function FI(r,e){const n=Math.abs(r-e);return Math.exp(-((n-DI)**2)/(2*LI**2))}function UI(r,e){const n=["E","C","V","L","H"],s={};return n.forEach((l,c)=>{bI.includes(l)?s[l]=jI(r[c],e[c]):OI.includes(l)&&(s[l]=FI(r[c],e[c]))}),s}function zI(r){let e=0;for(const n of Object.keys(zu))e+=zu[n]*r[n];return e}function WI(r){return Math.round(40+r*55)}function VI(r){const e=["E","C","V","L","H"];let n=-1,s="E";for(const l of e){const c=zu[l]*r[l];c>n&&(n=c,s=l)}return s}function BI(r,e){var s;const n=RI(r);return((s=NI[n])==null?void 0:s[e])??"未知の化学反応"}function HI(r){const e=[];for(let n=0;n<r.length;n++)for(let s=n+1;s<r.length;s++){const l=r[n],c=r[s];if(!l.vector||!c.vector)continue;const u=UI(l.vector,c.vector),f=zI(u),p=WI(f),g=VI(u),y=BI(p,g);e.push({id1:l.id,id2:c.id,axisScores:u,rawScore:f,displayScore:p,typeName:y,topAxis:g})}return e}function Bs(r,e,n){return r.find(s=>s.id1===e&&s.id2===n||s.id1===n&&s.id2===e)}function sy(r,e){const n=Array.from({length:e},()=>Array(e).fill(0));switch(r){case"facing-long":case"facing-short":{const s=Math.ceil(e/2);for(let l=0;l<s;l++){for(let c=s;c<e;c++){const u=l,f=c-s,p=Math.abs(u-f);p===0?n[l][c]=n[c][l]=1:p===1&&(n[l][c]=n[c][l]=.5)}l+1<s&&(n[l][l+1]=n[l+1][l]=.3)}for(let l=s;l<e-1;l++)n[l][l+1]=n[l+1][l]=.3;break}case"round":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.min(Math.abs(s-l),e-Math.abs(s-l));c===1?n[s][l]=n[l][s]=1:c===2?n[s][l]=n[l][s]=.4:c===Math.floor(e/2)?n[s][l]=n[l][s]=.3:c===3&&(n[s][l]=n[l][s]=.1)}break}case"counter":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.2)}break}case"alternate":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=s<Math.ceil(e/2)?0:1,u=l<Math.ceil(e/2)?0:1,f=c===0?s:s-Math.ceil(e/2),p=u===0?l:l-Math.ceil(e/2);if(c!==u){const g=Math.abs(f-p);g===0?n[s][l]=n[l][s]=1:g===1&&(n[s][l]=n[l][s]=.5)}else Math.abs(f-p)===1&&(n[s][l]=n[l][s]=.3)}break}case"l-shape":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.3)}break}}return n}function $I(r,e,n,s){if(s==="free")return n;const l=r.gender!==e.gender;return n*(l?1:.2)}function As(r,e,n,s,l){let c=0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){const p=Bs(n,e[u].id,e[f].id);if(!p)continue;const g=s[r[u]][r[f]],y=$I(e[u],e[f],g,l);c+=p.rawScore*y}return c}function GI(r,e,n,s,l){let c=1/0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){if(l==="goukon"&&e[u].gender===e[f].gender||s[r[u]][r[f]]<.5)continue;const p=Bs(n,e[u].id,e[f].id);p&&p.rawScore<c&&(c=p.rawScore)}return c===1/0?0:c}function oy(r){if(r.length<=1)return[r];const e=[];for(let n=0;n<r.length;n++){const s=[...r.slice(0,n),...r.slice(n+1)];for(const l of oy(s))e.push([r[n],...l])}return e}function KI(r,e,n,s){const l=r.length,c=Array.from({length:l},(v,T)=>T),u=oy(c);let f=-1/0,p=-1/0,g=c;const y=.95;let x=-1/0;for(const v of u){const T=As(v,r,e,n,s);T>x&&(x=T)}for(const v of u){const T=As(v,r,e,n,s);if(T>=x*y){const R=GI(v,r,e,n,s);(R>p||R===p&&T>f)&&(p=R,f=T,g=[...v])}}return g}function QI(r,e,n,s){const l=r.length;let c=Array.from({length:l},(T,R)=>R);for(let T=l-1;T>0;T--){const R=Math.floor(Math.random()*(T+1));[c[T],c[R]]=[c[R],c[T]]}let u=As(c,r,e,n,s),f=[...c],p=u;const g=100,y=.995,x=.01,v=1e4;for(let T=0;T<3;T++){let R=g,F=0;for(;R>x&&F<v;){const U=Math.floor(Math.random()*l);let M=Math.floor(Math.random()*(l-1));M>=U&&M++;const P=[...c];[P[U],P[M]]=[P[M],P[U]];const K=As(P,r,e,n,s),Y=K-u;(Y>0||Math.random()<Math.exp(Y/R))&&(c=P,u=K,u>p&&(f=[...c],p=u)),R*=y,F++}}return f}function dl(r,e,n,s){const l=r.length;if(l<=1)return r.map((f,p)=>({participantId:f.id,seatIndex:p}));const c=sy(n,l),u=l<=10?KI(r,e,c,s):QI(r,e,c,s);return r.map((f,p)=>({participantId:f.id,seatIndex:u[p]}))}function qI(r,e,n,s,l,c){if(l<=1)return dl(r,e,n,s);const u=r.length,f=sy(n,u);if(l===2){let g=c,y=-1/0;for(let x=0;x<u;x++)for(let v=x+1;v<u;v++){if(s==="goukon"&&r[x].gender!==r[v].gender)continue;const T=[...c],R=T[x].seatIndex;T[x]={...T[x],seatIndex:T[v].seatIndex},T[v]={...T[v],seatIndex:R};const F=T.map(M=>M.seatIndex),U=As(F,r,e,f,s);U>y&&(y=U,g=T)}return g}if(l===3)return dl(r,e,n,s);const p=dl(r,e,n,s);for(let g=u-1;g>0;g--)if(Math.random()<.5){const y=Math.floor(Math.random()*(g+1)),x=p[g].seatIndex;p[g]={...p[g],seatIndex:p[y].seatIndex},p[y]={...p[y],seatIndex:x}}return p}function Km(r,e,n){const s=[],l=[];for(let M=0;M<r.length;M++)for(let P=M+1;P<r.length;P++){const K=n.find(ne=>ne.participantId===r[M].id),Y=n.find(ne=>ne.participantId===r[P].id);if(!K||!Y)continue;const ie=Math.abs(K.seatIndex-Y.seatIndex);if(ie<=1||ie===r.length-1){const ne=Bs(e,r[M].id,r[P].id);ne&&l.push([r[M],r[P],ne])}}const c=e.map(M=>({p1:r.find(P=>P.id===M.id1),p2:r.find(P=>P.id===M.id2),result:M}));if(l.length>0){const M=l.reduce((P,K)=>P[2].displayScore>=K[2].displayScore?P:K);s.push({emoji:"👑",title:"ベストマッチ賞",description:`最高の席順相性！${M[2].displayScore}点`,targetIds:[M[0].id,M[1].id]})}const u=c.find(M=>M.result.displayScore>=90);u&&s.push({emoji:"🔥",title:"運命の出会い賞",description:`相性${u.result.displayScore}点の奇跡！`,targetIds:[u.p1.id,u.p2.id]});let f=-1,p=null;for(const M of c){const P=Object.values(M.result.axisScores),K=P.reduce((ie,ne)=>ie+ne,0)/P.length,Y=P.reduce((ie,ne)=>ie+(ne-K)**2,0)/P.length;Y>f&&(f=Y,p=M)}p&&s.push({emoji:"🌀",title:"カオスコンビ賞",description:"予測不能な化学反応！",targetIds:[p.p1.id,p.p2.id]});let g=-1,y=null;for(const M of c){const P=M.result.axisScores.C+M.result.axisScores.L;P>g&&(g=P,y=M)}y&&s.push({emoji:"🎭",title:"ミステリアス賞",description:"真逆だからこそ惹かれる！",targetIds:[y.p1.id,y.p2.id]});let x=-1,v=null;for(const M of r){if(!M.vector)continue;const P=M.vector[0]+M.vector[1];P>x&&(x=P,v=M)}v&&s.push({emoji:"🎤",title:"パーティーMC賞",description:"場を盛り上げるMVP！",targetIds:[v.id]});let T=1/0,R=null;for(const M of r)M.vector&&M.vector[0]<T&&(T=M.vector[0],R=M);R&&R.id!==(v==null?void 0:v.id)&&s.push({emoji:"🐱",title:"癒しオーラ賞",description:"ほっとする存在感！",targetIds:[R.id]});let F=-1,U=null;for(const M of r){const P=e.filter(Y=>Y.id1===M.id||Y.id2===M.id);if(P.length===0)continue;const K=P.reduce((Y,ie)=>Y+ie.displayScore,0)/P.length;K>F&&(F=K,U=M)}return U&&s.push({emoji:"🔄",title:"万能プレイヤー賞",description:"誰とでも仲良くなれる！",targetIds:[U.id]}),s}const YI=({onStart:r,onJoin:e})=>_.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[_.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((n,s)=>_.jsx("div",{className:"absolute rounded-full opacity-20",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:["#ff6b6b","#4ecdc4","#ffd93d"][s%3],animation:`float ${3+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*3}s`}},s))}),_.jsxs("div",{className:"animate-fade-in relative z-10",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🍻"}),_.jsx("h1",{className:"text-5xl font-black tracking-tight mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"SEKIMEKI"})}),_.jsx("p",{className:"text-lg text-gray-300 mb-12 font-medium",children:"「運命の席順、決めます」"}),_.jsxs("div",{className:"space-y-4 w-full max-w-xs mx-auto",children:[_.jsx("button",{onClick:r,className:"w-full py-4 px-8 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームをつくる"}),_.jsx("button",{onClick:e,className:"w-full py-4 px-8 bg-gray-800/80 border-2 border-gray-600 text-white font-bold text-lg rounded-2xl hover:border-secondary hover:bg-gray-700/80 transition-all duration-200 active:scale-95",children:"コードで参加する"})]}),_.jsx("p",{className:"mt-8 text-sm text-gray-500",children:"※アプリ不要・登録不要"}),_.jsx("p",{className:"mt-2 text-xs text-gray-600",children:"各自のスマホで診断 → 最適な席順を提案！"})]}),_.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `})]}),XI=[{id:"facing-long",name:"対面ロング",icon:"═══",desc:"向かい合う長テーブル"},{id:"facing-short",name:"対面ショート",icon:"═══",desc:"向かい合う短テーブル"},{id:"round",name:"円卓",icon:"◯",desc:"丸テーブル"},{id:"counter",name:"カウンター",icon:"───",desc:"横並びカウンター席"},{id:"alternate",name:"交互型",icon:"⊞",desc:"男女交互に配置"},{id:"l-shape",name:"L字・コの字",icon:"⌐",desc:"L字型テーブル"}],JI=({onComplete:r,onBack:e})=>{const[n,s]=te.useState("goukon"),[l,c]=te.useState("facing-long");return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-8 animate-fade-in",children:"ルーム設定"}),_.jsxs("div",{className:"mb-8 animate-slide-up",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"モード"}),_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("button",{onClick:()=>s("goukon"),className:`p-4 rounded-xl border-2 transition-all ${n==="goukon"?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"💕"}),_.jsx("div",{className:"font-bold text-sm",children:"合コンモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"男女別で席配置"})]}),_.jsxs("button",{onClick:()=>s("free"),className:`p-4 rounded-xl border-2 transition-all ${n==="free"?"border-secondary bg-secondary/10 shadow-lg shadow-secondary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"🎉"}),_.jsx("div",{className:"font-bold text-sm",children:"フリーモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"性別不問で席配置"})]})]})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.1s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"席の配置"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:XI.map(u=>_.jsxs("button",{onClick:()=>c(u.id),className:`p-4 rounded-xl border-2 transition-all text-left ${l===u.id?"border-accent bg-accent/10 shadow-lg shadow-accent/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-lg font-mono mb-1 text-gray-300",children:u.icon}),_.jsx("div",{className:"font-bold text-sm",children:u.name}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:u.desc})]},u.id))})]}),_.jsx("button",{onClick:()=>r(n,l),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームを作成する"})]})},ZI=({onJoin:r,onBack:e})=>{const[n,s]=te.useState(""),[l,c]=te.useState(""),[u,f]=te.useState(!1),p=async()=>{const g=n.trim().toUpperCase();if(g.length!==4){c("4文字のコードを入力してください");return}f(!0),c("");const y=await _I(g);if(f(!1),!y){c("ルームが見つかりません");return}r(g)};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔑"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"ルームに参加"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"ルームコード"}),_.jsx("input",{type:"text",value:n,onChange:g=>{s(g.target.value.toUpperCase().slice(0,4)),c("")},placeholder:"例：A3K7",maxLength:4,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-4 text-white text-center text-3xl font-mono tracking-[0.5em] placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase",onKeyDown:g=>g.key==="Enter"&&p(),autoFocus:!0}),l&&_.jsx("p",{className:"text-red-400 text-sm mt-2 text-center",children:l})]}),_.jsx("button",{onClick:p,disabled:n.length!==4||u,className:"w-full py-4 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:u?"確認中...":"参加する"})]})]})},ht=[{id:"dog",emoji:"🐶",label:"イヌ"},{id:"cat",emoji:"🐱",label:"ネコ"},{id:"bear",emoji:"🐻",label:"クマ"},{id:"fox",emoji:"🦊",label:"キツネ"},{id:"lion",emoji:"🦁",label:"ライオン"},{id:"rabbit",emoji:"🐰",label:"ウサギ"},{id:"panda",emoji:"🐼",label:"パンダ"},{id:"penguin",emoji:"🐧",label:"ペンギン"},{id:"koala",emoji:"🐨",label:"コアラ"},{id:"unicorn",emoji:"🦄",label:"ユニコーン"},{id:"dolphin",emoji:"🐬",label:"イルカ"},{id:"owl",emoji:"🦉",label:"フクロウ"},{id:"tiger",emoji:"🐯",label:"トラ"},{id:"monkey",emoji:"🐵",label:"サル"},{id:"wolf",emoji:"🐺",label:"オオカミ"},{id:"hamster",emoji:"🐹",label:"ハムスター"}],ek=({mode:r,usedAvatars:e,onSubmit:n,onBack:s})=>{var v;const[l,c]=te.useState(""),[u,f]=te.useState("male"),p=ht.filter(T=>!e.includes(T.id)),[g,y]=te.useState(((v=p[0])==null?void 0:v.id)??ht[0].id),x=()=>{l.trim()&&n({name:l.trim(),gender:r==="goukon"?u:void 0,avatar:g})};return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:s,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-2",children:"✨"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"プロフィール登録"}),_.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50",children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"ニックネーム"}),_.jsx("input",{type:"text",value:l,onChange:T=>c(T.target.value),placeholder:"最大8文字",maxLength:8,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors",autoFocus:!0})]}),r==="goukon"&&_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"性別"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[_.jsx("button",{onClick:()=>f("male"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="male"?"border-blue-400 bg-blue-500/10 text-blue-300":"border-gray-700 text-gray-400"}`,children:"♂ 男性"}),_.jsx("button",{onClick:()=>f("female"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="female"?"border-pink-400 bg-pink-500/10 text-pink-300":"border-gray-700 text-gray-400"}`,children:"♀ 女性"})]})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"アイコン"}),_.jsx("div",{className:"grid grid-cols-8 gap-2",children:ht.map(T=>{const R=e.includes(T.id);return _.jsx("button",{onClick:()=>!R&&y(T.id),disabled:R,className:`text-2xl p-2 rounded-xl transition-all ${R?"opacity-20 cursor-not-allowed":g===T.id?"bg-accent/20 ring-2 ring-accent scale-110":"hover:bg-gray-700/50"}`,children:T.emoji},T.id)})})]}),_.jsx("button",{onClick:x,disabled:!l.trim(),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:"参加する！"})]})]})]})},tk=({roomCode:r,participants:e,role:n,onCalculateResults:s,onBack:l})=>{const c=e.filter(f=>f.completed).length,u=e.length>=2&&e.every(f=>f.completed);return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:l,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 退出"}),_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"ルーム"}),_.jsxs("div",{className:"inline-block bg-gray-800/80 rounded-2xl px-8 py-4 border border-gray-600/50 mb-4",children:[_.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"ルームコード"}),_.jsx("p",{className:"text-4xl font-mono font-black tracking-[0.3em] text-accent",children:r})]}),_.jsx("p",{className:"text-sm text-gray-400",children:"このコードを共有して参加してもらおう"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsxs("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:["参加者 (",e.length,"名)",e.length>0&&_.jsxs("span",{className:"ml-2 text-secondary",children:[c,"/",e.length," 回答済み"]})]}),_.jsx("div",{className:"space-y-2",children:e.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 animate-slide-up",style:{animationDelay:`${p*.1}s`},children:[_.jsx("span",{className:"text-2xl",children:g==null?void 0:g.emoji}),_.jsx("span",{className:"font-medium flex-1",children:f.name}),f.gender&&_.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${f.gender==="male"?"bg-blue-500/20 text-blue-300":"bg-pink-500/20 text-pink-300"}`,children:f.gender==="male"?"♂":"♀"}),_.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${f.completed?"bg-green-500/20 text-green-300":"bg-gray-600/30 text-gray-500"}`,children:f.completed?"✓ 完了":"回答中..."})]},f.id)})}),e.length===0&&_.jsx("div",{className:"text-center text-gray-500 py-8 animate-pulse-slow",children:"参加者を待っています..."})]}),n==="admin"&&_.jsx("div",{children:_.jsx("button",{onClick:s,disabled:!u,className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${u?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:u?"🎯 結果を計算する":e.length<2?"あと2人以上の参加が必要です":`${c}/${e.length} 人回答済み（全員完了で計算可能）`})})]})};function nk(r){const e=Uu.map((s,l)=>l);let n=0;for(let s=0;s<r.length;s++)n=(n<<5)-n+r.charCodeAt(s)|0;for(let s=e.length-1;s>0;s--){n=(n<<5)-n+s|0;const l=Math.abs(n)%(s+1);[e[s],e[l]]=[e[l],e[s]]}return e.map(s=>({...Uu[s],originalIndex:s}))}const mu=9,rk=({participant:r,onComplete:e})=>{const[n,s]=te.useState(!1),[l,c]=te.useState(0),[u,f]=te.useState(Array(10).fill(0)),[p,g]=te.useState(3),[y,x]=te.useState(mu),[v,T]=te.useState(!1),R=qm.useMemo(()=>nk(r.id),[r.id]),F=ht.find(P=>P.id===r.avatar),U=te.useCallback(P=>{if(v)return;T(!0);const K=[...u];K[R[l].originalIndex]=P,f(K),l<9?setTimeout(()=>{c(Y=>Y+1),g(3),x(mu),T(!1)},300):setTimeout(()=>{e(K)},300)},[u,l,R,v,e]);if(te.useEffect(()=>{if(!n)return;const P=setInterval(()=>{x(K=>K<=1?(U(3),mu):K-1)},1e3);return()=>clearInterval(P)},[n,l,U]),!n)return _.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:_.jsxs("div",{className:"animate-pop",children:[_.jsx("div",{className:"text-6xl mb-4",children:F==null?void 0:F.emoji}),_.jsxs("h2",{className:"text-3xl font-bold mb-2",children:[r.name,"さん"]}),_.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"10問の質問に答えてね（1問9秒）"}),_.jsx("button",{onClick:()=>s(!0),className:"py-4 px-12 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95",children:"スタート！"})]})});const M=R[l];return _.jsxs("div",{className:"min-h-screen flex flex-col px-6 py-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-xl",children:F==null?void 0:F.emoji}),_.jsx("span",{className:"text-sm font-medium text-gray-400",children:r.name})]}),_.jsxs("span",{className:"text-sm text-gray-500",children:[l+1," / 10"]})]}),_.jsx("div",{className:"w-full h-1.5 bg-gray-800 rounded-full mb-2 overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300",style:{width:`${(l+1)/10*100}%`}})}),_.jsx("div",{className:"flex justify-end mb-6",children:_.jsxs("div",{className:`text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${y<=3?"bg-red-500/20 text-red-400 animate-pulse":"bg-gray-800 text-gray-400"}`,children:[y,"s"]})}),_.jsx("div",{className:"flex-1 flex flex-col justify-center",children:_.jsxs("div",{className:`animate-slide-in-right ${v?"opacity-50":""}`,children:[_.jsx("h3",{className:"text-2xl font-bold text-center mb-12 leading-relaxed",children:M.text}),_.jsxs("div",{className:"flex justify-between mb-4 px-2",children:[_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-left",children:M.leftLabel}),_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-right",children:M.rightLabel})]}),_.jsx("div",{className:"flex gap-3 justify-center mb-8",children:[1,2,3,4,5].map(P=>_.jsx("button",{onClick:()=>g(P),className:`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-200 ${p===P?"bg-gradient-to-br from-primary to-pink-500 text-white scale-110 shadow-lg shadow-primary/30":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:P},P))}),_.jsx("button",{onClick:()=>U(p),disabled:v,className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50",children:l<9?"次へ":"回答完了！"})]},l)})]})},ik=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onTogglePair:c,onReveal:u,onReshuffle:f,revealed:p})=>{const g=[...e].sort((y,x)=>x.displayScore-y.displayScore);return _.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("div",{className:"text-4xl mb-2",children:"👑"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",children:"管理者画面"})}),_.jsx("p",{className:"text-sm text-gray-400",children:p?"結果は公開済みです":"表示するペアを選択して結果を公開してください"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"ペア表示設定"}),_.jsx("div",{className:"space-y-2",children:g.map(y=>{const x=r.find(M=>M.id===y.id1),v=r.find(M=>M.id===y.id2);if(!x||!v)return null;const T=ht.find(M=>M.id===x.avatar),R=ht.find(M=>M.id===v.avatar),F=[y.id1,y.id2].sort().join("_"),U=y.visible!==!1;return _.jsxs("div",{className:`rounded-xl p-4 border transition-all ${U?"bg-gray-800/60 border-gray-600/50":"bg-gray-900/40 border-gray-800/50 opacity-60"}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{onClick:()=>c(F,!U),className:`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${U?"bg-secondary":"bg-gray-700"}`,children:_.jsx("div",{className:`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${U?"translate-x-6":"translate-x-0.5"}`})}),_.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[_.jsx("span",{className:"text-lg",children:T==null?void 0:T.emoji}),_.jsx("span",{className:"text-sm truncate",children:x.name}),_.jsx("span",{className:"text-gray-600 text-xs",children:"×"}),_.jsx("span",{className:"text-sm truncate",children:v.name}),_.jsx("span",{className:"text-lg",children:R==null?void 0:R.emoji})]}),_.jsxs("div",{className:"flex-shrink-0 text-right",children:[_.jsx("span",{className:`text-lg font-bold ${y.displayScore>=85?"text-primary":y.displayScore>=70?"text-accent":y.displayScore>=55?"text-secondary":"text-gray-400"}`,children:y.displayScore}),_.jsx("span",{className:"text-xs text-gray-500",children:"点"})]})]}),_.jsx("div",{className:"mt-1 ml-15 text-xs text-gray-500 pl-[60px]",children:y.typeName})]},F)})})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"称号プレビュー"}),_.jsx("div",{className:"space-y-2",children:s.map((y,x)=>{const v=y.targetIds.map(T=>r.find(R=>R.id===T)).filter(Boolean);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-2 border border-gray-700/30",children:[_.jsx("span",{className:"text-xl",children:y.emoji}),_.jsxs("div",{className:"flex-1",children:[_.jsx("span",{className:"text-sm font-medium text-accent",children:y.title}),_.jsx("span",{className:"text-xs text-gray-500 ml-2",children:v.map(T=>T.name).join(" & ")})]})]},x)})})]}),_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsx("div",{className:"flex gap-3 max-w-lg mx-auto",children:p?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:f,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:()=>{},className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl transition-all",children:"✅ 公開済み"})]}):_.jsx("button",{onClick:u,className:"flex-1 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95 animate-glow",children:"🎉 結果を公開する"})})})]})},sk=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onReshuffle:c,onShowMatrix:u,reshuffleCount:f})=>{const[p,g]=te.useState("countdown"),[y,x]=te.useState(3),[v,T]=te.useState(0),[R,F]=te.useState(0),[U,M]=te.useState(!1),[P,K]=te.useState(null),Y=[...r].sort((re,oe)=>{const he=n.find(Re=>Re.participantId===re.id),Ee=n.find(Re=>Re.participantId===oe.id);return((he==null?void 0:he.seatIndex)??0)-((Ee==null?void 0:Ee.seatIndex)??0)});te.useEffect(()=>{if(f>1){g("done"),T(r.length),F(10);return}if(p==="countdown"){const re=setInterval(()=>{x(oe=>oe<=1?(clearInterval(re),g("seats"),0):oe-1)},1e3);return()=>clearInterval(re)}if(p==="seats"){const re=setInterval(()=>{T(oe=>oe>=r.length?(clearInterval(re),setTimeout(()=>g("scores"),500),oe):oe+1)},400);return()=>clearInterval(re)}if(p==="scores"){const re=ie(),oe=setInterval(()=>{F(he=>he>=re.length?(clearInterval(oe),setTimeout(()=>g("awards"),500),he):he+1)},800);return()=>clearInterval(oe)}p==="awards"&&setTimeout(()=>g("done"),2e3)},[p,r.length,f]);function ie(){const re=[];for(let oe=0;oe<Y.length-1;oe++){const he=Y[oe],Ee=Y[oe+1],Re=Bs(e,he.id,Ee.id);Re&&re.push({p1:he,p2:Ee,result:Re})}return re}const ne=ie();return p==="countdown"?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-8xl font-black text-primary animate-pop",children:y},y),_.jsx("p",{className:"text-gray-400 mt-4",children:"運命の席順を発表..."})]})}):_.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("h2",{className:"text-3xl font-black mb-2 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"席順発表！"})}),_.jsx("p",{className:"text-gray-400 text-sm",children:"🍻 この席順で乾杯！"})]}),_.jsx("div",{className:"mb-8",children:_.jsx(ak,{participants:Y,revealedCount:v,layout:l})}),(p==="scores"||p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"隣り合うペアの相性"}),_.jsx("div",{className:"space-y-3",children:ne.map((re,oe)=>{if(oe>=R&&p!=="done")return null;const he=ht.find(et=>et.id===re.p1.avatar),Ee=ht.find(et=>et.id===re.p2.avatar),Re=`${re.p1.id}-${re.p2.id}`;return _.jsxs("div",{className:"animate-slide-up",style:{animationDelay:`${oe*.1}s`},children:[_.jsxs("button",{onClick:()=>K(P===Re?null:Re),className:"w-full bg-gray-800/60 rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-2xl",children:he==null?void 0:he.emoji}),_.jsx("span",{className:"text-sm font-medium",children:re.p1.name}),_.jsx("span",{className:"text-gray-600",children:"×"}),_.jsx("span",{className:"text-sm font-medium",children:re.p2.name}),_.jsx("span",{className:"text-2xl",children:Ee==null?void 0:Ee.emoji})]}),_.jsx("div",{className:"text-right",children:_.jsx(ok,{score:re.result.displayScore})})]}),_.jsx("div",{className:"mt-2 text-sm text-secondary font-medium",children:re.result.typeName})]}),P===Re&&_.jsx("div",{className:"mt-2 space-y-2 animate-slide-up",children:lk(re.result).map((et,tt)=>_.jsxs("div",{className:"bg-gray-900/60 rounded-xl p-3 border border-gray-700/30",children:[_.jsx("div",{className:"text-xs text-accent mb-1",children:["💬 共通点探し","🔍 違い発見","💭 妄想系"][tt]}),_.jsx("p",{className:"text-sm",children:et})]},tt))})]},Re)})})]}),(p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8 animate-fade-in",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"称号発表！"}),_.jsx("div",{className:"space-y-3",children:s.map((re,oe)=>{const he=re.targetIds.map(Ee=>r.find(Re=>Re.id===Ee)).filter(Boolean);return _.jsx("div",{className:"bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-accent/20 animate-pop",style:{animationDelay:`${oe*.15}s`},children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-3xl",children:re.emoji}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold text-accent",children:re.title}),_.jsx("div",{className:"text-sm text-gray-300",children:re.description}),_.jsx("div",{className:"text-xs text-gray-500 mt-1",children:he.map(Ee=>Ee.name).join(" & ")})]})]})},oe)})})]}),p==="done"&&_.jsx("p",{className:"text-center text-xs text-gray-600 mb-6",children:"※ あくまでお楽しみ診断です"}),p==="done"&&_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsxs("div",{className:"flex gap-3 max-w-lg mx-auto",children:[c&&_.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all active:scale-95",children:"📊 相性一覧"})]})})]})};function ok({score:r}){const e=r>=85?"text-primary":r>=70?"text-accent":r>=55?"text-secondary":"text-gray-400";return _.jsxs("span",{className:`text-2xl font-black ${e}`,children:[r,_.jsx("span",{className:"text-sm font-normal text-gray-500",children:"点"})]})}function lk(r){var p,g,y;const e=Object.entries(r.axisScores);e.sort((x,v)=>v[1]-x[1]);const n=e[0][0],s=e[e.length-1][0],l=[],c=((p=pu[n])==null?void 0:p.common)??[],u=((g=pu[s])==null?void 0:g.diff)??[],f=((y=pu.L)==null?void 0:y.common)??[];return l.push(c[Math.floor(Math.random()*c.length)]??"好きな食べ物は？"),l.push(u[Math.floor(Math.random()*u.length)]??"お互いの趣味を紹介！"),l.push(f[Math.floor(Math.random()*f.length)]??"もし2人でドラマに出るなら？"),l}function ak({participants:r,revealedCount:e,layout:n}){const s=Math.ceil(r.length/2);if(n==="facing-long"||n==="facing-short"||n==="alternate"){const l=r.slice(0,s),c=r.slice(s);return _.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-3 justify-center",children:l.map((u,f)=>_.jsx(sl,{participant:u,revealed:f<e,delay:f*.2},u.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full my-2"}),_.jsx("div",{className:"flex gap-3 justify-center",children:c.map((u,f)=>_.jsx(sl,{participant:u,revealed:s+f<e,delay:(s+f)*.2},u.id))})]})}return n==="round"?_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"relative",style:{width:280,height:260},children:[_.jsx("div",{className:"absolute rounded-full bg-amber-900/30 border-2 border-amber-800/40",style:{width:100*1.2,height:100*1.2,left:140-100*.6,top:130-100*.6}}),r.map((f,p)=>{const g=2*Math.PI*p/r.length-Math.PI/2,y=140+100*Math.cos(g)-32,x=130+100*Math.sin(g)-28;return _.jsx("div",{className:"absolute",style:{left:y,top:x},children:_.jsx(sl,{participant:f,revealed:p<e,delay:p*.2,compact:!0})},f.id)})]})}):_.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-2 justify-center flex-wrap",children:r.map((l,c)=>_.jsx(sl,{participant:l,revealed:c<e,delay:c*.2},l.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full"})]})}function sl({participant:r,revealed:e,delay:n,compact:s}){const l=ht.find(c=>c.id===r.avatar);return e?_.jsxs("div",{className:`${s?"w-14 p-1.5":"w-16 p-2"} bg-gray-800/80 rounded-xl border border-gray-600/50 text-center animate-slot-spin`,style:{animationDelay:`${n}s`},children:[_.jsx("div",{className:s?"text-xl":"text-2xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:`${s?"text-[10px]":"text-xs"} font-medium mt-1 truncate`,children:r.name})]}):_.jsx("div",{className:`${s?"w-14 h-14":"w-16 h-20"} bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center`,children:_.jsx("span",{className:"text-gray-600 text-lg",children:"?"})})}const ck={E:"テンション波長",C:"会話スタイル",V:"価値観ベクトル",L:"恋愛スタンス",H:"ユーモア相性"},uk=({participants:r,results:e,onBack:n})=>{const[s,l]=te.useState(null),c=f=>f>=85?"bg-primary/80":f>=70?"bg-accent/60":f>=55?"bg-secondary/50":"bg-gray-600/40",u=f=>f>=85?"text-white font-bold":f>=70||f>=55?"text-white":"text-gray-300";return _.jsxs("div",{className:"min-h-screen px-4 py-8",children:[_.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 席順に戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-6 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-secondary to-teal-400 bg-clip-text text-transparent",children:"相性マトリクス"})}),_.jsx("div",{className:"overflow-x-auto mb-8",children:_.jsxs("table",{className:"w-full border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{className:"w-12"}),r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("th",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:p==null?void 0:p.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]},f.id)})]})}),_.jsx("tbody",{children:r.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("tr",{children:[_.jsxs("td",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:g==null?void 0:g.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]}),r.map((y,x)=>{if(p===x)return _.jsx("td",{className:"p-1",children:_.jsx("div",{className:"w-12 h-12 bg-gray-800/30 rounded-lg flex items-center justify-center",children:_.jsx("span",{className:"text-gray-700",children:"-"})})},y.id);const v=Bs(e,f.id,y.id);return v?_.jsx("td",{className:"p-1",children:_.jsx("button",{onClick:()=>l({p1:f,p2:y,result:v}),className:`w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${c(v.displayScore)}`,children:_.jsx("span",{className:`text-sm ${u(v.displayScore)}`,children:v.displayScore})})},y.id):_.jsx("td",{},y.id)})]},f.id)})})]})}),_.jsxs("div",{className:"flex items-center justify-center gap-4 mb-8 text-xs text-gray-400",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-primary/80"})," 85+"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-accent/60"})," 70-84"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-secondary/50"})," 55-69"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-gray-600/40"})," 40-54"]})]}),s&&_.jsx(dk,{p1:s.p1,p2:s.p2,result:s.result,onClose:()=>l(null)}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"みんなのタイプ"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("div",{className:"bg-gray-800/60 rounded-xl p-3 border border-gray-700/50",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("span",{className:"text-2xl",children:p==null?void 0:p.emoji}),_.jsx("span",{className:"font-medium text-sm",children:f.name})]}),_.jsxs("div",{className:"text-lg",children:[f.personalTypeEmoji," ",f.personalType]}),f.vector&&_.jsx("div",{className:"mt-2 space-y-1",children:["E","C","V","L","H"].map((g,y)=>_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[10px] text-gray-500 w-8",children:g}),_.jsx("div",{className:"flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all",style:{width:`${(f.vector[y]-1)/4*100}%`}})}),_.jsx("span",{className:"text-[10px] text-gray-500",children:f.vector[y].toFixed(1)})]},g))})]},f.id)})})]})]})};function dk({p1:r,p2:e,result:n,onClose:s}){const l=ht.find(u=>u.id===r.avatar),c=ht.find(u=>u.id===e.avatar);return _.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6",onClick:s,children:_.jsxs("div",{className:"bg-dark-200 rounded-2xl p-6 w-full max-w-sm border border-gray-700 animate-pop",onClick:u=>u.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:"text-sm font-medium",children:r.name})]}),_.jsx("div",{className:"text-2xl text-primary",children:"×"}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:c==null?void 0:c.emoji}),_.jsx("div",{className:"text-sm font-medium",children:e.name})]})]}),_.jsxs("div",{className:"text-center mb-4",children:[_.jsx("span",{className:"text-4xl font-black text-primary",children:n.displayScore}),_.jsx("span",{className:"text-lg text-gray-400",children:"点"})]}),_.jsx("div",{className:"text-center text-secondary font-medium mb-6",children:n.typeName}),_.jsx("div",{className:"space-y-3 mb-6",children:["E","C","V","L","H"].map(u=>{const p=n.axisScores[u]*100;return _.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[_.jsx("span",{className:"text-gray-400",children:ck[u]}),_.jsxs("span",{className:"text-gray-300",children:[Math.round(p),"%"]})]}),_.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500",style:{width:`${p}%`}})})]},u)})}),_.jsx("button",{onClick:s,className:"w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all",children:"閉じる"})]})})}const hk=()=>{var U,M;const r=TI(),[e,n]=te.useState("loading"),[s,l]=te.useState(1),[c,u]=te.useState(null);te.useEffect(()=>{r.isReady&&e==="loading"&&n("top")},[r.isReady,e]),te.useEffect(()=>{if(!r.roomData||!c)return;const P=r.roomData.config.state;c==="participant"&&P==="results"&&r.revealed&&n("result")},[(U=r.roomData)==null?void 0:U.config.state,r.allCompleted,r.revealed,(M=r.myParticipant)==null?void 0:M.completed]);const f=te.useCallback(async(P,K)=>{const Y=await gI(P,K);r.setRoomCode(Y),u("admin"),n("waiting")},[r]),p=te.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const P=r.participants.map(he=>{const Ee=MI(he.answers),Re=AI(Ee);return{...he,vector:Ee,personalType:Re.name,personalTypeEmoji:Re.emoji}}),K=HI(P),Y=r.roomData.config.mode,ie=r.roomData.config.layout,ne=dl(P,K,ie,Y),re=Km(P,K,ne),oe={};for(const he of P)oe[he.id]={vector:he.vector,personalType:he.personalType,personalTypeEmoji:he.personalTypeEmoji};await EI(r.roomCode,K,ne,re,oe),n("admin-review")},[r.roomCode,r.roomData,r.participants]),g=te.useCallback(async(P,K)=>{r.roomCode&&await CI(r.roomCode,P,K)},[r.roomCode]),y=te.useCallback(async()=>{r.roomCode&&await SI(r.roomCode)},[r.roomCode]),x=te.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const P=s+1,K=r.roomData.config.mode,Y=r.roomData.config.layout,ie=qI(r.participants,r.compatibilityResults,Y,K,P,r.seatAssignments),ne=Km(r.participants,r.compatibilityResults,ie);await II(r.roomCode,ie,ne),l(P)},[r.roomCode,r.roomData,r.participants,r.compatibilityResults,r.seatAssignments,s]),v=te.useCallback(async P=>{await yI(P)&&(r.setRoomCode(P),u("participant"),n("profile"))},[r]),T=te.useCallback(async P=>{r.roomCode&&(await vI(r.roomCode,{name:P.name,gender:P.gender,avatar:P.avatar}),n("diagnosis"))},[r.roomCode]),R=te.useCallback(async P=>{r.roomCode&&(await xI(r.roomCode,P),n(c==="admin"?"waiting":"waiting-results"))},[r.roomCode,c]),F=te.useCallback(async()=>{r.roomCode&&e==="waiting"&&c==="participant"&&await wI(r.roomCode),r.setRoomCode(""),u(null),n("top")},[r,e,c]);return e==="loading"?_.jsx("div",{className:"min-h-screen flex items-center justify-center",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-4xl mb-4",children:"🍻"}),_.jsx("p",{className:"text-gray-400",children:"読み込み中..."})]})}):_.jsxs("div",{className:"max-w-lg mx-auto",children:[e==="top"&&_.jsx(YI,{onStart:()=>n("setup"),onJoin:()=>n("join")}),e==="setup"&&_.jsx(JI,{onComplete:f,onBack:()=>n("top")}),e==="join"&&_.jsx(ZI,{onJoin:v,onBack:()=>n("top")}),e==="profile"&&r.roomData&&_.jsx(ek,{mode:r.roomData.config.mode,usedAvatars:r.participants.map(P=>P.avatar),onSubmit:T,onBack:F}),e==="waiting"&&r.roomCode&&c&&_.jsx(tk,{roomCode:r.roomCode,participants:r.participants,role:c,onCalculateResults:p,onBack:F}),e==="diagnosis"&&r.myParticipant&&_.jsx(rk,{participant:r.myParticipant,onComplete:R}),e==="waiting-results"&&_.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🔮"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:"結果を待っています..."}),_.jsx("p",{className:"text-gray-400",children:r.allCompleted?"幹事が結果を準備中です":`${r.participants.filter(P=>P.completed).length} / ${r.participants.length} 人回答済み`}),_.jsx("div",{className:"mt-8 flex justify-center gap-2",children:[0,1,2].map(P=>_.jsx("div",{className:"w-3 h-3 bg-primary rounded-full animate-bounce",style:{animationDelay:`${P*.15}s`}},P))})]})}),e==="admin-review"&&r.roomData&&_.jsx(ik,{participants:r.participants,results:r.compatibilityResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onTogglePair:g,onReveal:y,onReshuffle:x,revealed:r.revealed}),e==="result"&&r.roomData&&_.jsx(sk,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onReshuffle:c==="admin"?x:void 0,onShowMatrix:()=>n("matrix"),reshuffleCount:s}),e==="matrix"&&_.jsx(uk,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,onBack:()=>n("result")})]})};h0.createRoot(document.getElementById("root")).render(_.jsx(qm.StrictMode,{children:_.jsx(hk,{})}));

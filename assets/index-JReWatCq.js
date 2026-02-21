(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function Km(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qc={exports:{}},as={},qc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function r0(){if(Tp)return le;Tp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=x&&S[x]||S["@@iterator"],typeof S=="function"?S:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,F={};function U(S,b,oe){this.props=S,this.context=b,this.refs=F,this.updater=oe||N}U.prototype.isReactComponent={},U.prototype.setState=function(S,b){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,b,"setState")},U.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function R(){}R.prototype=U.prototype;function L(S,b,oe){this.props=S,this.context=b,this.refs=F,this.updater=oe||N}var q=L.prototype=new R;q.constructor=L,P(q,U.prototype),q.isPureReactComponent=!0;var Y=Array.isArray,se=Object.prototype.hasOwnProperty,ie={current:null},te={key:!0,ref:!0,__self:!0,__source:!0};function re(S,b,oe){var ue,fe={},pe=null,Ee=null;if(b!=null)for(ue in b.ref!==void 0&&(Ee=b.ref),b.key!==void 0&&(pe=""+b.key),b)se.call(b,ue)&&!te.hasOwnProperty(ue)&&(fe[ue]=b[ue]);var _e=arguments.length-2;if(_e===1)fe.children=oe;else if(1<_e){for(var Re=Array(_e),Ct=0;Ct<_e;Ct++)Re[Ct]=arguments[Ct+2];fe.children=Re}if(S&&S.defaultProps)for(ue in _e=S.defaultProps,_e)fe[ue]===void 0&&(fe[ue]=_e[ue]);return{$$typeof:r,type:S,key:pe,ref:Ee,props:fe,_owner:ie.current}}function ve(S,b){return{$$typeof:r,type:S.type,key:b,ref:S.ref,props:S.props,_owner:S._owner}}function Ce(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function je(S){var b={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(oe){return b[oe]})}var nt=/\/+/g;function rt(S,b){return typeof S=="object"&&S!==null&&S.key!=null?je(""+S.key):b.toString(36)}function Mt(S,b,oe,ue,fe){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(pe){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,fe=fe(Ee),S=ue===""?"."+rt(Ee,0):ue,Y(fe)?(oe="",S!=null&&(oe=S.replace(nt,"$&/")+"/"),Mt(fe,b,oe,"",function(Ct){return Ct})):fe!=null&&(Ce(fe)&&(fe=ve(fe,oe+(!fe.key||Ee&&Ee.key===fe.key?"":(""+fe.key).replace(nt,"$&/")+"/")+S)),b.push(fe)),1;if(Ee=0,ue=ue===""?".":ue+":",Y(S))for(var _e=0;_e<S.length;_e++){pe=S[_e];var Re=ue+rt(pe,_e);Ee+=Mt(pe,b,oe,Re,fe)}else if(Re=v(S),typeof Re=="function")for(S=Re.call(S),_e=0;!(pe=S.next()).done;)pe=pe.value,Re=ue+rt(pe,_e++),Ee+=Mt(pe,b,oe,Re,fe);else if(pe==="object")throw b=String(S),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Ee}function qt(S,b,oe){if(S==null)return S;var ue=[],fe=0;return Mt(S,ue,"","",function(pe){return b.call(oe,pe,fe++)}),ue}function pt(S){if(S._status===-1){var b=S._result;b=b(),b.then(function(oe){(S._status===0||S._status===-1)&&(S._status=1,S._result=oe)},function(oe){(S._status===0||S._status===-1)&&(S._status=2,S._result=oe)}),S._status===-1&&(S._status=0,S._result=b)}if(S._status===1)return S._result.default;throw S._result}var Oe={current:null},z={transition:null},X={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:qt,forEach:function(S,b,oe){qt(S,function(){b.apply(this,arguments)},oe)},count:function(S){var b=0;return qt(S,function(){b++}),b},toArray:function(S){return qt(S,function(b){return b})||[]},only:function(S){if(!Ce(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=U,le.Fragment=n,le.Profiler=l,le.PureComponent=L,le.StrictMode=s,le.Suspense=p,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,le.act=B,le.cloneElement=function(S,b,oe){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ue=P({},S.props),fe=S.key,pe=S.ref,Ee=S._owner;if(b!=null){if(b.ref!==void 0&&(pe=b.ref,Ee=ie.current),b.key!==void 0&&(fe=""+b.key),S.type&&S.type.defaultProps)var _e=S.type.defaultProps;for(Re in b)se.call(b,Re)&&!te.hasOwnProperty(Re)&&(ue[Re]=b[Re]===void 0&&_e!==void 0?_e[Re]:b[Re])}var Re=arguments.length-2;if(Re===1)ue.children=oe;else if(1<Re){_e=Array(Re);for(var Ct=0;Ct<Re;Ct++)_e[Ct]=arguments[Ct+2];ue.children=_e}return{$$typeof:r,type:S.type,key:fe,ref:pe,props:ue,_owner:Ee}},le.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},le.createElement=re,le.createFactory=function(S){var b=re.bind(null,S);return b.type=S,b},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:f,render:S}},le.isValidElement=Ce,le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:pt}},le.memo=function(S,b){return{$$typeof:g,type:S,compare:b===void 0?null:b}},le.startTransition=function(S){var b=z.transition;z.transition={};try{S()}finally{z.transition=b}},le.unstable_act=B,le.useCallback=function(S,b){return Oe.current.useCallback(S,b)},le.useContext=function(S){return Oe.current.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S){return Oe.current.useDeferredValue(S)},le.useEffect=function(S,b){return Oe.current.useEffect(S,b)},le.useId=function(){return Oe.current.useId()},le.useImperativeHandle=function(S,b,oe){return Oe.current.useImperativeHandle(S,b,oe)},le.useInsertionEffect=function(S,b){return Oe.current.useInsertionEffect(S,b)},le.useLayoutEffect=function(S,b){return Oe.current.useLayoutEffect(S,b)},le.useMemo=function(S,b){return Oe.current.useMemo(S,b)},le.useReducer=function(S,b,oe){return Oe.current.useReducer(S,b,oe)},le.useRef=function(S){return Oe.current.useRef(S)},le.useState=function(S){return Oe.current.useState(S)},le.useSyncExternalStore=function(S,b,oe){return Oe.current.useSyncExternalStore(S,b,oe)},le.useTransition=function(){return Oe.current.useTransition()},le.version="18.3.1",le}var Rp;function zu(){return Rp||(Rp=1,qc.exports=r0()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function i0(){if(Pp)return as;Pp=1;var r=zu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var y,x={},v=null,N=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(N=p.ref);for(y in p)s.call(p,y)&&!c.hasOwnProperty(y)&&(x[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)x[y]===void 0&&(x[y]=p[y]);return{$$typeof:e,type:f,key:v,ref:N,props:x,_owner:l.current}}return as.Fragment=n,as.jsx=u,as.jsxs=u,as}var Ap;function s0(){return Ap||(Ap=1,Qc.exports=i0()),Qc.exports}var _=s0(),ne=zu();const Qm=Km(ne);var tl={},Yc={exports:{}},wt={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function o0(){return bp||(bp=1,(function(r){function e(z,X){var B=z.length;z.push(X);e:for(;0<B;){var S=B-1>>>1,b=z[S];if(0<l(b,X))z[S]=X,z[B]=b,B=S;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var X=z[0],B=z.pop();if(B!==X){z[0]=B;e:for(var S=0,b=z.length,oe=b>>>1;S<oe;){var ue=2*(S+1)-1,fe=z[ue],pe=ue+1,Ee=z[pe];if(0>l(fe,B))pe<b&&0>l(Ee,fe)?(z[S]=Ee,z[pe]=B,S=pe):(z[S]=fe,z[ue]=B,S=ue);else if(pe<b&&0>l(Ee,B))z[S]=Ee,z[pe]=B,S=pe;else break e}}return X}function l(z,X){var B=z.sortIndex-X.sortIndex;return B!==0?B:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,x=null,v=3,N=!1,P=!1,F=!1,U=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(z){for(var X=n(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=z)s(g),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(g)}}function Y(z){if(F=!1,q(z),!P)if(n(p)!==null)P=!0,pt(se);else{var X=n(g);X!==null&&Oe(Y,X.startTime-z)}}function se(z,X){P=!1,F&&(F=!1,R(re),re=-1),N=!0;var B=v;try{for(q(X),x=n(p);x!==null&&(!(x.expirationTime>X)||z&&!je());){var S=x.callback;if(typeof S=="function"){x.callback=null,v=x.priorityLevel;var b=S(x.expirationTime<=X);X=r.unstable_now(),typeof b=="function"?x.callback=b:x===n(p)&&s(p),q(X)}else s(p);x=n(p)}if(x!==null)var oe=!0;else{var ue=n(g);ue!==null&&Oe(Y,ue.startTime-X),oe=!1}return oe}finally{x=null,v=B,N=!1}}var ie=!1,te=null,re=-1,ve=5,Ce=-1;function je(){return!(r.unstable_now()-Ce<ve)}function nt(){if(te!==null){var z=r.unstable_now();Ce=z;var X=!0;try{X=te(!0,z)}finally{X?rt():(ie=!1,te=null)}}else ie=!1}var rt;if(typeof L=="function")rt=function(){L(nt)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,qt=Mt.port2;Mt.port1.onmessage=nt,rt=function(){qt.postMessage(null)}}else rt=function(){U(nt,0)};function pt(z){te=z,ie||(ie=!0,rt())}function Oe(z,X){re=U(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){P||N||(P=!0,pt(se))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var B=v;v=X;try{return z()}finally{v=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=v;v=z;try{return X()}finally{v=B}},r.unstable_scheduleCallback=function(z,X,B){var S=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?S+B:S):B=S,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,z={id:y++,callback:X,priorityLevel:z,startTime:B,expirationTime:b,sortIndex:-1},B>S?(z.sortIndex=B,e(g,z),n(p)===null&&z===n(g)&&(F?(R(re),re=-1):F=!0,Oe(Y,B-S))):(z.sortIndex=b,e(p,z),P||N||(P=!0,pt(se))),z},r.unstable_shouldYield=je,r.unstable_wrapCallback=function(z){var X=v;return function(){var B=v;v=X;try{return z.apply(this,arguments)}finally{v=B}}}})(Jc)),Jc}var Op;function l0(){return Op||(Op=1,Xc.exports=o0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function a0(){if(Dp)return wt;Dp=1;var r=zu(),e=l0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function v(t){return p.call(x,t)?!0:p.call(y,t)?!1:g.test(t)?x[t]=!0:(y[t]=!0,!1)}function N(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P(t,i,o,a){if(i===null||typeof i>"u"||N(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){U[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];U[i]=new F(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){U[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){U[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){U[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){U[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){U[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){U[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){U[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(R,L);U[i]=new F(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(R,L);U[i]=new F(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(R,L);U[i]=new F(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){U[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),U.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){U[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function q(t,i,o,a){var d=U.hasOwnProperty(i)?U[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(P(i,o,d,a)&&(o=null),a||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var Y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),ie=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),je=Symbol.for("react.context"),nt=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Mt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,S;function b(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var oe=!1;function ue(t,i){if(!t||oe)return"";oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){var a=T}Reflect.construct(t,[],i)}else{try{i.call()}catch(T){a=T}t.call(i.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,w=h.length-1;1<=m&&0<=w&&d[m]!==h[w];)w--;for(;1<=m&&0<=w;m--,w--)if(d[m]!==h[w]){if(m!==1||w!==1)do if(m--,w--,0>w||d[m]!==h[w]){var C=`
`+d[m].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=m&&0<=w);break}}}finally{oe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function fe(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case te:return"Fragment";case ie:return"Portal";case ve:return"Profiler";case re:return"StrictMode";case rt:return"Suspense";case Mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case je:return(t.displayName||"Context")+".Consumer";case Ce:return(t._context.displayName||"Context")+".Provider";case nt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qt:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case pt:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ct(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=Ct(t))}function Od(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ta(t,i){var o=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Dd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ld(t,i){i=i.checked,i!=null&&q(t,"checked",i,!1)}function na(t,i){Ld(t,i);var o=_e(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ra(t,i.type,o):i.hasOwnProperty("defaultValue")&&ra(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Md(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ra(t,i,o){(i!=="number"||$s(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ei=Array.isArray;function Rr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ia(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ei(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:_e(o)}}function Fd(t,i){var o=_e(i.value),a=_e(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Ud(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function zd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?zd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,Wd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Si(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ly=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){ly.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ii[i]=Ii[t]})});function Vd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+i).trim():i+"px"}function Bd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=Vd(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var ay=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(t,i){if(i){if(ay[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function la(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Pr=null,Ar=null;function Hd(t){if(t=Ki(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),ua(t.stateNode,t.type,i))}}function $d(t){Pr?Ar?Ar.push(t):Ar=[t]:Pr=t}function Gd(){if(Pr){var t=Pr,i=Ar;if(Ar=Pr=null,Hd(t),i)for(t=0;t<i.length;t++)Hd(i[t])}}function Kd(t,i){return t(i)}function Qd(){}var da=!1;function qd(t,i,o){if(da)return t(i,o);da=!0;try{return Kd(t,i,o)}finally{da=!1,(Pr!==null||Ar!==null)&&(Qd(),Gd())}}function ki(t,i){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ha=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{ha=!1}function cy(t,i,o,a,d,h,m,w,C){var T=Array.prototype.slice.call(arguments,3);try{i.apply(o,T)}catch(O){this.onError(O)}}var Ti=!1,Ks=null,Qs=!1,fa=null,uy={onError:function(t){Ti=!0,Ks=t}};function dy(t,i,o,a,d,h,m,w,C){Ti=!1,Ks=null,cy.apply(uy,arguments)}function hy(t,i,o,a,d,h,m,w,C){if(dy.apply(this,arguments),Ti){if(Ti){var T=Ks;Ti=!1,Ks=null}else throw Error(n(198));Qs||(Qs=!0,fa=T)}}function sr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Xd(t){if(sr(t)!==t)throw Error(n(188))}function fy(t){var i=t.alternate;if(!i){if(i=sr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Xd(d),t;if(h===a)return Xd(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,w=d.child;w;){if(w===o){m=!0,o=d,a=h;break}if(w===a){m=!0,a=d,o=h;break}w=w.sibling}if(!m){for(w=h.child;w;){if(w===o){m=!0,o=h,a=d;break}if(w===a){m=!0,a=h,o=d;break}w=w.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Jd(t){return t=fy(t),t!==null?Zd(t):null}function Zd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Zd(t);if(i!==null)return i;t=t.sibling}return null}var eh=e.unstable_scheduleCallback,th=e.unstable_cancelCallback,py=e.unstable_shouldYield,my=e.unstable_requestPaint,Fe=e.unstable_now,gy=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,nh=e.unstable_UserBlockingPriority,qs=e.unstable_NormalPriority,_y=e.unstable_LowPriority,rh=e.unstable_IdlePriority,Ys=null,Yt=null;function yy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:xy,vy=Math.log,wy=Math.LN2;function xy(t){return t>>>=0,t===0?32:31-(vy(t)/wy|0)|0}var Xs=64,Js=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var w=m&~d;w!==0?a=Ri(w):(h&=m,h!==0&&(a=Ri(h)))}else m=o&~d,m!==0?a=Ri(m):h!==0&&(a=Ri(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&d)===0&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-jt(i),d=1<<o,a|=t[o],i&=~d;return a}function Cy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ey(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),w=1<<m,C=d[m];C===-1?((w&o)===0||(w&a)!==0)&&(d[m]=Cy(w,i)):C<=i&&(t.expiredLanes|=w),h&=~w}}function ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ih(){var t=Xs;return Xs<<=1,(Xs&4194240)===0&&(Xs=64),t}function ga(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function Sy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function _a(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-jt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var ye=0;function sh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var oh,ya,lh,ah,ch,va=!1,eo=[],Cn=null,En=null,Sn=null,Ai=new Map,bi=new Map,In=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(t,i){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(i.pointerId)}}function Oi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Ki(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function ky(t,i,o,a,d){switch(i){case"focusin":return Cn=Oi(Cn,t,i,o,a,d),!0;case"dragenter":return En=Oi(En,t,i,o,a,d),!0;case"mouseover":return Sn=Oi(Sn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return Ai.set(h,Oi(Ai.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,bi.set(h,Oi(bi.get(h)||null,t,i,o,a,d)),!0}return!1}function dh(t){var i=or(t.target);if(i!==null){var o=sr(i);if(o!==null){if(i=o.tag,i===13){if(i=Yd(o),i!==null){t.blockedOn=i,ch(t.priority,function(){lh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=xa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);aa=a,o.target.dispatchEvent(a),aa=null}else return i=Ki(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function hh(t,i,o){to(t)&&o.delete(i)}function Ny(){va=!1,Cn!==null&&to(Cn)&&(Cn=null),En!==null&&to(En)&&(En=null),Sn!==null&&to(Sn)&&(Sn=null),Ai.forEach(hh),bi.forEach(hh)}function Di(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ny)))}function Li(t){function i(d){return Di(d,t)}if(0<eo.length){Di(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Cn!==null&&Di(Cn,t),En!==null&&Di(En,t),Sn!==null&&Di(Sn,t),Ai.forEach(i),bi.forEach(i),o=0;o<In.length;o++)a=In[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<In.length&&(o=In[0],o.blockedOn===null);)dh(o),o.blockedOn===null&&In.shift()}var br=Y.ReactCurrentBatchConfig,no=!0;function Ty(t,i,o,a){var d=ye,h=br.transition;br.transition=null;try{ye=1,wa(t,i,o,a)}finally{ye=d,br.transition=h}}function Ry(t,i,o,a){var d=ye,h=br.transition;br.transition=null;try{ye=4,wa(t,i,o,a)}finally{ye=d,br.transition=h}}function wa(t,i,o,a){if(no){var d=xa(t,i,o,a);if(d===null)Fa(t,i,a,ro,o),uh(t,a);else if(ky(d,t,i,o,a))a.stopPropagation();else if(uh(t,a),i&4&&-1<Iy.indexOf(t)){for(;d!==null;){var h=Ki(d);if(h!==null&&oh(h),h=xa(t,i,o,a),h===null&&Fa(t,i,a,ro,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var ro=null;function xa(t,i,o,a){if(ro=null,t=ca(a),t=or(t),t!==null)if(i=sr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case pa:return 1;case nh:return 4;case qs:case _y:return 16;case rh:return 536870912;default:return 16}default:return 16}}var kn=null,Ca=null,io=null;function ph(){if(io)return io;var t,i=Ca,o=i.length,a,d="value"in kn?kn.value:kn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return io=d.slice(t,1<a?1-a:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function mh(){return!1}function Et(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:mh,this.isPropagationStopped=mh,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=Et(Or),Mi=B({},Or,{view:0,detail:0}),Py=Et(Mi),Sa,Ia,ji,lo=B({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Sa=t.screenX-ji.screenX,Ia=t.screenY-ji.screenY):Ia=Sa=0,ji=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),gh=Et(lo),Ay=B({},lo,{dataTransfer:0}),by=Et(Ay),Oy=B({},Mi,{relatedTarget:0}),ka=Et(Oy),Dy=B({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=Et(Dy),My=B({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jy=Et(My),Fy=B({},Or,{data:0}),_h=Et(Fy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Wy[t])?!!i[t]:!1}function Na(){return Vy}var By=B({},Mi,{key:function(t){if(t.key){var i=Uy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=Et(By),$y=B({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=Et($y),Gy=B({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),Ky=Et(Gy),Qy=B({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=Et(Qy),Yy=B({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=Et(Yy),Jy=[9,13,27,32],Ta=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var Zy=f&&"TextEvent"in window&&!Fi,vh=f&&(!Ta||Fi&&8<Fi&&11>=Fi),wh=" ",xh=!1;function Ch(t,i){switch(t){case"keyup":return Jy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function ev(t,i){switch(t){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(xh=!0,wh);case"textInput":return t=i.data,t===wh&&xh?null:t;default:return null}}function tv(t,i){if(Dr)return t==="compositionend"||!Ta&&Ch(t,i)?(t=ph(),io=Ca=kn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vh&&i.locale!=="ko"?null:i.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!nv[t.type]:i==="textarea"}function Ih(t,i,o,a){$d(a),i=fo(i,"onChange"),0<i.length&&(o=new Ea("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Ui=null,zi=null;function rv(t){Bh(t,0)}function ao(t){var i=Ur(t);if(Od(i))return t}function iv(t,i){if(t==="change")return i}var kh=!1;if(f){var Ra;if(f){var Pa="oninput"in document;if(!Pa){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Pa=typeof Nh.oninput=="function"}Ra=Pa}else Ra=!1;kh=Ra&&(!document.documentMode||9<document.documentMode)}function Th(){Ui&&(Ui.detachEvent("onpropertychange",Rh),zi=Ui=null)}function Rh(t){if(t.propertyName==="value"&&ao(zi)){var i=[];Ih(i,zi,t,ca(t)),qd(rv,i)}}function sv(t,i,o){t==="focusin"?(Th(),Ui=i,zi=o,Ui.attachEvent("onpropertychange",Rh)):t==="focusout"&&Th()}function ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(zi)}function lv(t,i){if(t==="click")return ao(i)}function av(t,i){if(t==="input"||t==="change")return ao(i)}function cv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:cv;function Wi(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Ft(t[d],i[d]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,i){var o=Ph(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ph(o)}}function bh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Oh(){for(var t=window,i=$s();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=$s(t.document)}return i}function Aa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function uv(t){var i=Oh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&bh(o.ownerDocument.documentElement,o)){if(a!==null&&Aa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=Ah(o,h);var m=Ah(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dv=f&&"documentMode"in document&&11>=document.documentMode,Lr=null,ba=null,Vi=null,Oa=!1;function Dh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Oa||Lr==null||Lr!==$s(a)||(a=Lr,"selectionStart"in a&&Aa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vi&&Wi(Vi,a)||(Vi=a,a=fo(ba,"onSelect"),0<a.length&&(i=new Ea("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Lr)))}function co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Mr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Da={},Lh={};f&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function uo(t){if(Da[t])return Da[t];if(!Mr[t])return t;var i=Mr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Lh)return Da[t]=i[o];return t}var Mh=uo("animationend"),jh=uo("animationiteration"),Fh=uo("animationstart"),Uh=uo("transitionend"),zh=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){zh.set(t,i),c(i,[t])}for(var La=0;La<Wh.length;La++){var Ma=Wh[La],hv=Ma.toLowerCase(),fv=Ma[0].toUpperCase()+Ma.slice(1);Nn(hv,"on"+fv)}Nn(Mh,"onAnimationEnd"),Nn(jh,"onAnimationIteration"),Nn(Fh,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Uh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Vh(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,hy(a,i,void 0,t),t.currentTarget=null}function Bh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var w=a[m],C=w.instance,T=w.currentTarget;if(w=w.listener,C!==h&&d.isPropagationStopped())break e;Vh(d,w,T),h=C}else for(m=0;m<a.length;m++){if(w=a[m],C=w.instance,T=w.currentTarget,w=w.listener,C!==h&&d.isPropagationStopped())break e;Vh(d,w,T),h=C}}}if(Qs)throw t=fa,Qs=!1,fa=null,t}function Ne(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(Hh(i,t,2,!1),o.add(a))}function ja(t,i,o){var a=0;i&&(a|=4),Hh(o,t,a,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(pv.has(o)||ja(o,!1,t),ja(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,ja("selectionchange",!1,i))}}function Hh(t,i,o,a){switch(fh(i)){case 1:var d=Ty;break;case 4:d=Ry;break;default:d=wa}o=d.bind(null,i,o,t),d=void 0,!ha||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,d){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var w=a.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var C=m.tag;if((C===3||C===4)&&(C=m.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;m=m.return}for(;w!==null;){if(m=or(w),m===null)return;if(C=m.tag,C===5||C===6){a=h=m;continue e}w=w.parentNode}}a=a.return}qd(function(){var T=h,O=ca(o),D=[];e:{var A=zh.get(t);if(A!==void 0){var W=Ea,H=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":W=Hy;break;case"focusin":H="focus",W=ka;break;case"focusout":H="blur",W=ka;break;case"beforeblur":case"afterblur":W=ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Ky;break;case Mh:case jh:case Fh:W=Ly;break;case Uh:W=qy;break;case"scroll":W=Py;break;case"wheel":W=Xy;break;case"copy":case"cut":case"paste":W=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=yh}var $=(i&4)!==0,Ue=!$&&t==="scroll",I=$?A!==null?A+"Capture":null:A;$=[];for(var E=T,k;E!==null;){k=E;var M=k.stateNode;if(k.tag===5&&M!==null&&(k=M,I!==null&&(M=ki(E,I),M!=null&&$.push($i(E,M,k)))),Ue)break;E=E.return}0<$.length&&(A=new W(A,H,null,o,O),D.push({event:A,listeners:$}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",A&&o!==aa&&(H=o.relatedTarget||o.fromElement)&&(or(H)||H[sn]))break e;if((W||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,W?(H=o.relatedTarget||o.toElement,W=T,H=H?or(H):null,H!==null&&(Ue=sr(H),H!==Ue||H.tag!==5&&H.tag!==6)&&(H=null)):(W=null,H=T),W!==H)){if($=gh,M="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&($=yh,M="onPointerLeave",I="onPointerEnter",E="pointer"),Ue=W==null?A:Ur(W),k=H==null?A:Ur(H),A=new $(M,E+"leave",W,o,O),A.target=Ue,A.relatedTarget=k,M=null,or(O)===T&&($=new $(I,E+"enter",H,o,O),$.target=k,$.relatedTarget=Ue,M=$),Ue=M,W&&H)t:{for($=W,I=H,E=0,k=$;k;k=jr(k))E++;for(k=0,M=I;M;M=jr(M))k++;for(;0<E-k;)$=jr($),E--;for(;0<k-E;)I=jr(I),k--;for(;E--;){if($===I||I!==null&&$===I.alternate)break t;$=jr($),I=jr(I)}$=null}else $=null;W!==null&&$h(D,A,W,$,!1),H!==null&&Ue!==null&&$h(D,Ue,H,$,!0)}}e:{if(A=T?Ur(T):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var G=iv;else if(Sh(A))if(kh)G=av;else{G=ov;var K=sv}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(G=lv);if(G&&(G=G(t,T))){Ih(D,G,o,O);break e}K&&K(t,A,T),t==="focusout"&&(K=A._wrapperState)&&K.controlled&&A.type==="number"&&ra(A,"number",A.value)}switch(K=T?Ur(T):window,t){case"focusin":(Sh(K)||K.contentEditable==="true")&&(Lr=K,ba=T,Vi=null);break;case"focusout":Vi=ba=Lr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Dh(D,o,O);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Dh(D,o,O)}var Q;if(Ta)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Dr?Ch(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(vh&&o.locale!=="ko"&&(Dr||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Dr&&(Q=ph()):(kn=O,Ca="value"in kn?kn.value:kn.textContent,Dr=!0)),K=fo(T,Z),0<K.length&&(Z=new _h(Z,t,null,o,O),D.push({event:Z,listeners:K}),Q?Z.data=Q:(Q=Eh(o),Q!==null&&(Z.data=Q)))),(Q=Zy?ev(t,o):tv(t,o))&&(T=fo(T,"onBeforeInput"),0<T.length&&(O=new _h("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:T}),O.data=Q))}Bh(D,i)})}function $i(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fo(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,d)),h=ki(t,i),h!=null&&a.push($i(t,h,d))),t=t.return}return a}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var w=o,C=w.alternate,T=w.stateNode;if(C!==null&&C===a)break;w.tag===5&&T!==null&&(w=T,d?(C=ki(o,h),C!=null&&m.unshift($i(o,C,w))):d||(C=ki(o,h),C!=null&&m.push($i(o,C,w)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var mv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Gh(t){return(typeof t=="string"?t:""+t).replace(mv,`
`).replace(gv,"")}function po(t,i,o){if(i=Gh(i),Gh(t)!==i&&o)throw Error(n(425))}function mo(){}var Ua=null,za=null;function Wa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(vv)}:Va;function vv(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Li(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Li(i)}function Tn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Fr,Gi="__reactProps$"+Fr,sn="__reactContainer$"+Fr,Ha="__reactEvents$"+Fr,wv="__reactListeners$"+Fr,xv="__reactHandles$"+Fr;function or(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Qh(t);t!==null;){if(o=t[Xt])return o;t=Qh(t)}return i}t=o,o=t.parentNode}return null}function Ki(t){return t=t[Xt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Gi]||null}var $a=[],zr=-1;function Rn(t){return{current:t}}function Te(t){0>zr||(t.current=$a[zr],$a[zr]=null,zr--)}function Se(t,i){zr++,$a[zr]=t.current,t.current=i}var Pn={},it=Rn(Pn),mt=Rn(!1),lr=Pn;function Wr(t,i){var o=t.type.contextTypes;if(!o)return Pn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function gt(t){return t=t.childContextTypes,t!=null}function _o(){Te(mt),Te(it)}function qh(t,i,o){if(it.current!==Pn)throw Error(n(168));Se(it,i),Se(mt,o)}function Yh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return B({},o,a)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,lr=it.current,Se(it,t),Se(mt,mt.current),!0}function Xh(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Yh(t,i,lr),a.__reactInternalMemoizedMergedChildContext=t,Te(mt),Te(it),Se(it,t)):Te(mt),Se(mt,o)}var on=null,vo=!1,Ga=!1;function Jh(t){on===null?on=[t]:on.push(t)}function Cv(t){vo=!0,Jh(t)}function An(){if(!Ga&&on!==null){Ga=!0;var t=0,i=ye;try{var o=on;for(ye=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}on=null,vo=!1}catch(d){throw on!==null&&(on=on.slice(t+1)),eh(pa,An),d}finally{ye=i,Ga=!1}}return null}var Vr=[],Br=0,wo=null,xo=0,Tt=[],Rt=0,ar=null,ln=1,an="";function cr(t,i){Vr[Br++]=xo,Vr[Br++]=wo,wo=t,xo=i}function Zh(t,i,o){Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=ar,ar=t;var a=ln;t=an;var d=32-jt(a)-1;a&=~(1<<d),o+=1;var h=32-jt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ln=1<<32-jt(i)+d|o<<d|a,an=h+t}else ln=1<<h|o<<d|a,an=t}function Ka(t){t.return!==null&&(cr(t,1),Zh(t,1,0))}function Qa(t){for(;t===wo;)wo=Vr[--Br],Vr[Br]=null,xo=Vr[--Br],Vr[Br]=null;for(;t===ar;)ar=Tt[--Rt],Tt[Rt]=null,an=Tt[--Rt],Tt[Rt]=null,ln=Tt[--Rt],Tt[Rt]=null}var St=null,It=null,Pe=!1,Ut=null;function ef(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function tf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,St=t,It=Tn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,St=t,It=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ar!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,St=t,It=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(Pe){var i=It;if(i){var o=i;if(!tf(t,i)){if(qa(t))throw Error(n(418));i=Tn(o.nextSibling);var a=St;i&&tf(t,i)?ef(a,o):(t.flags=t.flags&-4097|2,Pe=!1,St=t)}}else{if(qa(t))throw Error(n(418));t.flags=t.flags&-4097|2,Pe=!1,St=t}}}function nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Co(t){if(t!==St)return!1;if(!Pe)return nf(t),Pe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Wa(t.type,t.memoizedProps)),i&&(i=It)){if(qa(t))throw rf(),Error(n(418));for(;i;)ef(t,i),i=Tn(i.nextSibling)}if(nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){It=Tn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}It=null}}else It=St?Tn(t.stateNode.nextSibling):null;return!0}function rf(){for(var t=It;t;)t=Tn(t.nextSibling)}function Hr(){It=St=null,Pe=!1}function Xa(t){Ut===null?Ut=[t]:Ut.push(t)}var Ev=Y.ReactCurrentBatchConfig;function Qi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var w=d.refs;m===null?delete w[h]:w[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Eo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function sf(t){var i=t._init;return i(t._payload)}function of(t){function i(I,E){if(t){var k=I.deletions;k===null?(I.deletions=[E],I.flags|=16):k.push(E)}}function o(I,E){if(!t)return null;for(;E!==null;)i(I,E),E=E.sibling;return null}function a(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function d(I,E){return I=Un(I,E),I.index=0,I.sibling=null,I}function h(I,E,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function w(I,E,k,M){return E===null||E.tag!==6?(E=Vc(k,I.mode,M),E.return=I,E):(E=d(E,k),E.return=I,E)}function C(I,E,k,M){var G=k.type;return G===te?O(I,E,k.props.children,M,k.key):E!==null&&(E.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&sf(G)===E.type)?(M=d(E,k.props),M.ref=Qi(I,E,k),M.return=I,M):(M=Ko(k.type,k.key,k.props,null,I.mode,M),M.ref=Qi(I,E,k),M.return=I,M)}function T(I,E,k,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=Bc(k,I.mode,M),E.return=I,E):(E=d(E,k.children||[]),E.return=I,E)}function O(I,E,k,M,G){return E===null||E.tag!==7?(E=_r(k,I.mode,M,G),E.return=I,E):(E=d(E,k),E.return=I,E)}function D(I,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vc(""+E,I.mode,k),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case se:return k=Ko(E.type,E.key,E.props,null,I.mode,k),k.ref=Qi(I,null,E),k.return=I,k;case ie:return E=Bc(E,I.mode,k),E.return=I,E;case pt:var M=E._init;return D(I,M(E._payload),k)}if(Ei(E)||X(E))return E=_r(E,I.mode,k,null),E.return=I,E;Eo(I,E)}return null}function A(I,E,k,M){var G=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return G!==null?null:w(I,E,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case se:return k.key===G?C(I,E,k,M):null;case ie:return k.key===G?T(I,E,k,M):null;case pt:return G=k._init,A(I,E,G(k._payload),M)}if(Ei(k)||X(k))return G!==null?null:O(I,E,k,M,null);Eo(I,k)}return null}function W(I,E,k,M,G){if(typeof M=="string"&&M!==""||typeof M=="number")return I=I.get(k)||null,w(E,I,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case se:return I=I.get(M.key===null?k:M.key)||null,C(E,I,M,G);case ie:return I=I.get(M.key===null?k:M.key)||null,T(E,I,M,G);case pt:var K=M._init;return W(I,E,k,K(M._payload),G)}if(Ei(M)||X(M))return I=I.get(k)||null,O(E,I,M,G,null);Eo(E,M)}return null}function H(I,E,k,M){for(var G=null,K=null,Q=E,Z=E=0,Ke=null;Q!==null&&Z<k.length;Z++){Q.index>Z?(Ke=Q,Q=null):Ke=Q.sibling;var me=A(I,Q,k[Z],M);if(me===null){Q===null&&(Q=Ke);break}t&&Q&&me.alternate===null&&i(I,Q),E=h(me,E,Z),K===null?G=me:K.sibling=me,K=me,Q=Ke}if(Z===k.length)return o(I,Q),Pe&&cr(I,Z),G;if(Q===null){for(;Z<k.length;Z++)Q=D(I,k[Z],M),Q!==null&&(E=h(Q,E,Z),K===null?G=Q:K.sibling=Q,K=Q);return Pe&&cr(I,Z),G}for(Q=a(I,Q);Z<k.length;Z++)Ke=W(Q,I,Z,k[Z],M),Ke!==null&&(t&&Ke.alternate!==null&&Q.delete(Ke.key===null?Z:Ke.key),E=h(Ke,E,Z),K===null?G=Ke:K.sibling=Ke,K=Ke);return t&&Q.forEach(function(zn){return i(I,zn)}),Pe&&cr(I,Z),G}function $(I,E,k,M){var G=X(k);if(typeof G!="function")throw Error(n(150));if(k=G.call(k),k==null)throw Error(n(151));for(var K=G=null,Q=E,Z=E=0,Ke=null,me=k.next();Q!==null&&!me.done;Z++,me=k.next()){Q.index>Z?(Ke=Q,Q=null):Ke=Q.sibling;var zn=A(I,Q,me.value,M);if(zn===null){Q===null&&(Q=Ke);break}t&&Q&&zn.alternate===null&&i(I,Q),E=h(zn,E,Z),K===null?G=zn:K.sibling=zn,K=zn,Q=Ke}if(me.done)return o(I,Q),Pe&&cr(I,Z),G;if(Q===null){for(;!me.done;Z++,me=k.next())me=D(I,me.value,M),me!==null&&(E=h(me,E,Z),K===null?G=me:K.sibling=me,K=me);return Pe&&cr(I,Z),G}for(Q=a(I,Q);!me.done;Z++,me=k.next())me=W(Q,I,Z,me.value,M),me!==null&&(t&&me.alternate!==null&&Q.delete(me.key===null?Z:me.key),E=h(me,E,Z),K===null?G=me:K.sibling=me,K=me);return t&&Q.forEach(function(n0){return i(I,n0)}),Pe&&cr(I,Z),G}function Ue(I,E,k,M){if(typeof k=="object"&&k!==null&&k.type===te&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case se:e:{for(var G=k.key,K=E;K!==null;){if(K.key===G){if(G=k.type,G===te){if(K.tag===7){o(I,K.sibling),E=d(K,k.props.children),E.return=I,I=E;break e}}else if(K.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pt&&sf(G)===K.type){o(I,K.sibling),E=d(K,k.props),E.ref=Qi(I,K,k),E.return=I,I=E;break e}o(I,K);break}else i(I,K);K=K.sibling}k.type===te?(E=_r(k.props.children,I.mode,M,k.key),E.return=I,I=E):(M=Ko(k.type,k.key,k.props,null,I.mode,M),M.ref=Qi(I,E,k),M.return=I,I=M)}return m(I);case ie:e:{for(K=k.key;E!==null;){if(E.key===K)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){o(I,E.sibling),E=d(E,k.children||[]),E.return=I,I=E;break e}else{o(I,E);break}else i(I,E);E=E.sibling}E=Bc(k,I.mode,M),E.return=I,I=E}return m(I);case pt:return K=k._init,Ue(I,E,K(k._payload),M)}if(Ei(k))return H(I,E,k,M);if(X(k))return $(I,E,k,M);Eo(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(o(I,E.sibling),E=d(E,k),E.return=I,I=E):(o(I,E),E=Vc(k,I.mode,M),E.return=I,I=E),m(I)):o(I,E)}return Ue}var $r=of(!0),lf=of(!1),So=Rn(null),Io=null,Gr=null,Ja=null;function Za(){Ja=Gr=Io=null}function ec(t){var i=So.current;Te(So),t._currentValue=i}function tc(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Kr(t,i){Io=t,Ja=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_t=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:i,next:null},Gr===null){if(Io===null)throw Error(n(308));Gr=t,Io.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return i}var ur=null;function nc(t){ur===null?ur=[t]:ur.push(t)}function af(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,nc(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,a)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function On(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(he&2)!==0){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,cn(t,o)}return d=a.interleaved,d===null?(i.next=i,nc(a)):(i.next=d.next,d.next=i),a.interleaved=i,cn(t,o)}function ko(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}function uf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function No(t,i,o,a){var d=t.updateQueue;bn=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var C=w,T=C.next;C.next=null,m===null?h=T:m.next=T,m=C;var O=t.alternate;O!==null&&(O=O.updateQueue,w=O.lastBaseUpdate,w!==m&&(w===null?O.firstBaseUpdate=T:w.next=T,O.lastBaseUpdate=C))}if(h!==null){var D=d.baseState;m=0,O=T=C=null,w=h;do{var A=w.lane,W=w.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:W,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var H=t,$=w;switch(A=i,W=o,$.tag){case 1:if(H=$.payload,typeof H=="function"){D=H.call(W,D,A);break e}D=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=$.payload,A=typeof H=="function"?H.call(W,D,A):H,A==null)break e;D=B({},D,A);break e;case 2:bn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[w]:A.push(w))}else W={eventTime:W,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},O===null?(T=O=W,C=D):O=O.next=W,m|=A;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;A=w,w=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(O===null&&(C=D),d.baseState=C,d.firstBaseUpdate=T,d.lastBaseUpdate=O,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);fr|=m,t.lanes=m,t.memoizedState=D}}function df(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var qi={},Jt=Rn(qi),Yi=Rn(qi),Xi=Rn(qi);function dr(t){if(t===qi)throw Error(n(174));return t}function ic(t,i){switch(Se(Xi,i),Se(Yi,t),Se(Jt,qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=sa(i,t)}Te(Jt),Se(Jt,i)}function Qr(){Te(Jt),Te(Yi),Te(Xi)}function hf(t){dr(Xi.current);var i=dr(Jt.current),o=sa(i,t.type);i!==o&&(Se(Yi,t),Se(Jt,o))}function sc(t){Yi.current===t&&(Te(Jt),Te(Yi))}var Ae=Rn(0);function To(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function lc(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Ro=Y.ReactCurrentDispatcher,ac=Y.ReactCurrentBatchConfig,hr=0,be=null,We=null,$e=null,Po=!1,Ji=!1,Zi=0,Sv=0;function st(){throw Error(n(321))}function cc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function uc(t,i,o,a,d,h){if(hr=h,be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?Tv:Rv,t=o(a,d),Ji){h=0;do{if(Ji=!1,Zi=0,25<=h)throw Error(n(301));h+=1,$e=We=null,i.updateQueue=null,Ro.current=Pv,t=o(a,d)}while(Ji)}if(Ro.current=Oo,i=We!==null&&We.next!==null,hr=0,$e=We=be=null,Po=!1,i)throw Error(n(300));return t}function dc(){var t=Zi!==0;return Zi=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?be.memoizedState=$e=t:$e=$e.next=t,$e}function At(){if(We===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=$e===null?be.memoizedState:$e.next;if(i!==null)$e=i,We=t;else{if(t===null)throw Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?be.memoizedState=$e=t:$e=$e.next=t}return $e}function es(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=We,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var w=m=null,C=null,T=h;do{var O=T.lane;if((hr&O)===O)C!==null&&(C=C.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var D={lane:O,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};C===null?(w=C=D,m=a):C=C.next=D,be.lanes|=O,fr|=O}T=T.next}while(T!==null&&T!==h);C===null?m=a:C.next=w,Ft(a,i.memoizedState)||(_t=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=C,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,be.lanes|=h,fr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Ft(h,i.memoizedState)||(_t=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function ff(){}function pf(t,i){var o=be,a=At(),d=i(),h=!Ft(a.memoizedState,d);if(h&&(a.memoizedState=d,_t=!0),a=a.queue,pc(_f.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,ts(9,gf.bind(null,o,a,d,i),void 0,null),Ge===null)throw Error(n(349));(hr&30)!==0||mf(o,i,d)}return d}function mf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=be.updateQueue,i===null?(i={lastEffect:null,stores:null},be.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function gf(t,i,o,a){i.value=o,i.getSnapshot=a,yf(i)&&vf(t)}function _f(t,i,o){return o(function(){yf(i)&&vf(t)})}function yf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function vf(t){var i=cn(t,1);i!==null&&Bt(i,t,1,-1)}function wf(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},i.queue=t,t=t.dispatch=Nv.bind(null,be,t),[i.memoizedState,t]}function ts(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=be.updateQueue,i===null?(i={lastEffect:null,stores:null},be.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function xf(){return At().memoizedState}function Ao(t,i,o,a){var d=Zt();be.flags|=t,d.memoizedState=ts(1|i,o,void 0,a===void 0?null:a)}function bo(t,i,o,a){var d=At();a=a===void 0?null:a;var h=void 0;if(We!==null){var m=We.memoizedState;if(h=m.destroy,a!==null&&cc(a,m.deps)){d.memoizedState=ts(i,o,h,a);return}}be.flags|=t,d.memoizedState=ts(1|i,o,h,a)}function Cf(t,i){return Ao(8390656,8,t,i)}function pc(t,i){return bo(2048,8,t,i)}function Ef(t,i){return bo(4,2,t,i)}function Sf(t,i){return bo(4,4,t,i)}function If(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kf(t,i,o){return o=o!=null?o.concat([t]):null,bo(4,4,If.bind(null,i,t),o)}function mc(){}function Nf(t,i){var o=At();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Tf(t,i){var o=At();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Rf(t,i,o){return(hr&21)===0?(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=o):(Ft(o,i)||(o=ih(),be.lanes|=o,fr|=o,t.baseState=!0),i)}function Iv(t,i){var o=ye;ye=o!==0&&4>o?o:4,t(!0);var a=ac.transition;ac.transition={};try{t(!1),i()}finally{ye=o,ac.transition=a}}function Pf(){return At().memoizedState}function kv(t,i,o){var a=jn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Af(t))bf(i,o);else if(o=af(t,i,o,a),o!==null){var d=ct();Bt(o,t,a,d),Of(o,i,a)}}function Nv(t,i,o){var a=jn(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Af(t))bf(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,w=h(m,o);if(d.hasEagerState=!0,d.eagerState=w,Ft(w,m)){var C=i.interleaved;C===null?(d.next=d,nc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}o=af(t,i,d,a),o!==null&&(d=ct(),Bt(o,t,a,d),Of(o,i,a))}}function Af(t){var i=t.alternate;return t===be||i!==null&&i===be}function bf(t,i){Ji=Po=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Of(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}var Oo={readContext:Pt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Tv={readContext:Pt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:Cf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ao(4194308,4,If.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=kv.bind(null,be,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:wf,useDebugValue:mc,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=wf(!1),i=t[0];return t=Iv.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=be,d=Zt();if(Pe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ge===null)throw Error(n(349));(hr&30)!==0||mf(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Cf(_f.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,gf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=Ge.identifierPrefix;if(Pe){var o=an,a=ln;o=(a&~(1<<32-jt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Zi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Sv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Pt,useCallback:Nf,useContext:Pt,useEffect:pc,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:Tf,useReducer:hc,useRef:xf,useState:function(){return hc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=At();return Rf(i,We.memoizedState,t)},useTransition:function(){var t=hc(es)[0],i=At().memoizedState;return[t,i]},useMutableSource:ff,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1},Pv={readContext:Pt,useCallback:Nf,useContext:Pt,useEffect:pc,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:Tf,useReducer:fc,useRef:xf,useState:function(){return fc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=At();return We===null?i.memoizedState=t:Rf(i,We.memoizedState,t)},useTransition:function(){var t=fc(es)[0],i=At().memoizedState;return[t,i]},useMutableSource:ff,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=B({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function gc(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:B({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),ko(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),ko(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ct(),a=jn(t),d=un(o,a);d.tag=2,i!=null&&(d.callback=i),i=On(t,d,a),i!==null&&(Bt(i,t,a,o),ko(i,t,a))}};function Df(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Wi(o,a)||!Wi(d,h):!0}function Lf(t,i,o){var a=!1,d=Pn,h=i.contextType;return typeof h=="object"&&h!==null?h=Pt(h):(d=gt(i)?lr:it.current,a=i.contextTypes,h=(a=a!=null)?Wr(t,d):Pn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Mf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function _c(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},rc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Pt(h):(h=gt(i)?lr:it.current,d.context=Wr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(gc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Do.enqueueReplaceState(d,d.state,null),No(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,i){try{var o="",a=i;do o+=fe(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function yc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Av=typeof WeakMap=="function"?WeakMap:Map;function jf(t,i,o){o=un(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Wo||(Wo=!0,Dc=a),vc(t,i)},o}function Ff(t,i,o){o=un(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Uf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Av;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=$v.bind(null,t,i,o),i.then(t,t))}function zf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Wf(t,i,o,a,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=un(-1,1),i.tag=2,On(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var bv=Y.ReactCurrentOwner,_t=!1;function at(t,i,o,a){i.child=t===null?lf(i,null,o,a):$r(i,t.child,o,a)}function Vf(t,i,o,a,d){o=o.render;var h=i.ref;return Kr(i,d),a=uc(t,i,o,a,h,d),o=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Pe&&o&&Ka(i),i.flags|=1,at(t,i,a,d),i.child)}function Bf(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Wc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Hf(t,i,h,a,d)):(t=Ko(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Wi,o(m,a)&&t.ref===i.ref)return dn(t,i,d)}return i.flags|=1,t=Un(h,a),t.ref=i.ref,t.return=i,i.child=t}function Hf(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Wi(h,a)&&t.ref===i.ref)if(_t=!1,i.pendingProps=a=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_t=!0);else return i.lanes=t.lanes,dn(t,i,d)}return wc(t,i,o,a,d)}function $f(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Xr,kt),kt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(Xr,kt),kt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(Xr,kt),kt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(Xr,kt),kt|=a;return at(t,i,d,o),i.child}function Gf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function wc(t,i,o,a,d){var h=gt(o)?lr:it.current;return h=Wr(i,h),Kr(i,d),o=uc(t,i,o,a,h,d),a=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Pe&&a&&Ka(i),i.flags|=1,at(t,i,o,d),i.child)}function Kf(t,i,o,a,d){if(gt(o)){var h=!0;yo(i)}else h=!1;if(Kr(i,d),i.stateNode===null)Mo(t,i),Lf(i,o,a),_c(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,w=i.memoizedProps;m.props=w;var C=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Pt(T):(T=gt(o)?lr:it.current,T=Wr(i,T));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function";D||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==a||C!==T)&&Mf(i,m,a,T),bn=!1;var A=i.memoizedState;m.state=A,No(i,a,m,d),C=i.memoizedState,w!==a||A!==C||mt.current||bn?(typeof O=="function"&&(gc(i,o,O,a),C=i.memoizedState),(w=bn||Df(i,o,w,a,A,C,T))?(D||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=C),m.props=a,m.state=C,m.context=T,a=w):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,cf(t,i),w=i.memoizedProps,T=i.type===i.elementType?w:zt(i.type,w),m.props=T,D=i.pendingProps,A=m.context,C=o.contextType,typeof C=="object"&&C!==null?C=Pt(C):(C=gt(o)?lr:it.current,C=Wr(i,C));var W=o.getDerivedStateFromProps;(O=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==D||A!==C)&&Mf(i,m,a,C),bn=!1,A=i.memoizedState,m.state=A,No(i,a,m,d);var H=i.memoizedState;w!==D||A!==H||mt.current||bn?(typeof W=="function"&&(gc(i,o,W,a),H=i.memoizedState),(T=bn||Df(i,o,T,a,A,H,C)||!1)?(O||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,H,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,H,C)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=H),m.props=a,m.state=H,m.context=C,a=T):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return xc(t,i,o,a,h,d)}function xc(t,i,o,a,d,h){Gf(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Xh(i,o,!1),dn(t,i,h);a=i.stateNode,bv.current=i;var w=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=$r(i,t.child,null,h),i.child=$r(i,null,w,h)):at(t,i,w,h),i.memoizedState=a.state,d&&Xh(i,o,!0),i.child}function Qf(t){var i=t.stateNode;i.pendingContext?qh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(t,i.context,!1),ic(t,i.containerInfo)}function qf(t,i,o,a,d){return Hr(),Xa(d),i.flags|=256,at(t,i,o,a),i.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yf(t,i,o){var a=i.pendingProps,d=Ae.current,h=!1,m=(i.flags&128)!==0,w;if((w=m)||(w=t!==null&&t.memoizedState===null?!1:(d&2)!==0),w?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(Ae,d&1),t===null)return Ya(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Qo(m,a,0,null),t=_r(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ec(o),i.memoizedState=Cc,t):Sc(i,m));if(d=t.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Ov(t,i,m,a,w,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,w=d.sibling;var C={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=C,i.deletions=null):(a=Un(d,C),a.subtreeFlags=d.subtreeFlags&14680064),w!==null?h=Un(w,h):(h=_r(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Ec(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Cc,a}return h=t.child,t=h.sibling,a=Un(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Sc(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Lo(t,i,o,a){return a!==null&&Xa(a),$r(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ov(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yc(Error(n(422))),Lo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=Qo({mode:"visible",children:a.children},d,0,null),h=_r(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&$r(i,t.child,null,m),i.child.memoizedState=Ec(m),i.memoizedState=Cc,h);if((i.mode&1)===0)return Lo(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var w=a.dgst;return a=w,h=Error(n(419)),a=yc(h,a,void 0),Lo(t,i,m,a)}if(w=(m&t.childLanes)!==0,_t||w){if(a=Ge,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Bt(a,t,d,-1))}return zc(),a=yc(Error(n(421))),Lo(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Gv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,It=Tn(d.nextSibling),St=i,Pe=!0,Ut=null,t!==null&&(Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=ar,ln=t.id,an=t.overflow,ar=i),i=Sc(i,a.children),i.flags|=4096,i)}function Xf(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),tc(t.return,i,o)}function Ic(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function Jf(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(at(t,i,a.children,o),a=Ae.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xf(t,o,i);else if(t.tag===19)Xf(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(Ae,a),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&To(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ic(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&To(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Ic(i,!0,o,null,h);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Un(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Un(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Dv(t,i,o){switch(i.tag){case 3:Qf(i),Hr();break;case 5:hf(i);break;case 1:gt(i.type)&&yo(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Se(So,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(Ae,Ae.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yf(t,i,o):(Se(Ae,Ae.current&1),t=dn(t,i,o),t!==null?t.sibling:null);Se(Ae,Ae.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Jf(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Ae,Ae.current),a)break;return null;case 22:case 23:return i.lanes=0,$f(t,i,o)}return dn(t,i,o)}var Zf,kc,ep,tp;Zf=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},ep=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,dr(Jt.current);var h=null;switch(o){case"input":d=ta(t,d),a=ta(t,a),h=[];break;case"select":d=B({},d,{value:void 0}),a=B({},a,{value:void 0}),h=[];break;case"textarea":d=ia(t,d),a=ia(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}oa(o,a);var m;o=null;for(T in d)if(!a.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var w=d[T];for(m in w)w.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var C=a[T];if(w=d!=null?d[T]:void 0,a.hasOwnProperty(T)&&C!==w&&(C!=null||w!=null))if(T==="style")if(w){for(m in w)!w.hasOwnProperty(m)||C&&C.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in C)C.hasOwnProperty(m)&&w[m]!==C[m]&&(o||(o={}),o[m]=C[m])}else o||(h||(h=[]),h.push(T,o)),o=C;else T==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(h=h||[]).push(T,C)):T==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(T,""+C):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(C!=null&&T==="onScroll"&&Ne("scroll",t),h||w===C||(h=[])):(h=h||[]).push(T,C))}o&&(h=h||[]).push("style",o);var T=h;(i.updateQueue=T)&&(i.flags|=4)}},tp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ns(t,i){if(!Pe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Lv(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return gt(i.type)&&_o(),ot(i),null;case 3:return a=i.stateNode,Qr(),Te(mt),Te(it),lc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Co(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(jc(Ut),Ut=null))),kc(t,i),ot(i),null;case 5:sc(i);var d=dr(Xi.current);if(o=i.type,t!==null&&i.stateNode!=null)ep(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return ot(i),null}if(t=dr(Jt.current),Co(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Gi]=h,t=(i.mode&1)!==0,o){case"dialog":Ne("cancel",a),Ne("close",a);break;case"iframe":case"object":case"embed":Ne("load",a);break;case"video":case"audio":for(d=0;d<Bi.length;d++)Ne(Bi[d],a);break;case"source":Ne("error",a);break;case"img":case"image":case"link":Ne("error",a),Ne("load",a);break;case"details":Ne("toggle",a);break;case"input":Dd(a,h),Ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ne("invalid",a);break;case"textarea":jd(a,h),Ne("invalid",a)}oa(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var w=h[m];m==="children"?typeof w=="string"?a.textContent!==w&&(h.suppressHydrationWarning!==!0&&po(a.textContent,w,t),d=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&po(a.textContent,w,t),d=["children",""+w]):l.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Ne("scroll",a)}switch(o){case"input":Hs(a),Md(a,h,!0);break;case"textarea":Hs(a),Ud(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Gi]=a,Zf(t,i,!1,!1),i.stateNode=t;e:{switch(m=la(o,a),o){case"dialog":Ne("cancel",t),Ne("close",t),d=a;break;case"iframe":case"object":case"embed":Ne("load",t),d=a;break;case"video":case"audio":for(d=0;d<Bi.length;d++)Ne(Bi[d],t);d=a;break;case"source":Ne("error",t),d=a;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),d=a;break;case"details":Ne("toggle",t),d=a;break;case"input":Dd(t,a),d=ta(t,a),Ne("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=B({},a,{value:void 0}),Ne("invalid",t);break;case"textarea":jd(t,a),d=ia(t,a),Ne("invalid",t);break;default:d=a}oa(o,d),w=d;for(h in w)if(w.hasOwnProperty(h)){var C=w[h];h==="style"?Bd(t,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Wd(t,C)):h==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Si(t,C):typeof C=="number"&&Si(t,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Ne("scroll",t):C!=null&&q(t,h,C,m))}switch(o){case"input":Hs(t),Md(t,a,!1);break;case"textarea":Hs(t),Ud(t);break;case"option":a.value!=null&&t.setAttribute("value",""+_e(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Rr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Rr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ot(i),null;case 6:if(t&&i.stateNode!=null)tp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=dr(Xi.current),dr(Jt.current),Co(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=St,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return ot(i),null;case 13:if(Te(Ae),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&It!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rf(),Hr(),i.flags|=98560,h=!1;else if(h=Co(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Hr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else Ut!==null&&(jc(Ut),Ut=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ae.current&1)!==0?Ve===0&&(Ve=3):zc())),i.updateQueue!==null&&(i.flags|=4),ot(i),null);case 4:return Qr(),kc(t,i),t===null&&Hi(i.stateNode.containerInfo),ot(i),null;case 10:return ec(i.type._context),ot(i),null;case 17:return gt(i.type)&&_o(),ot(i),null;case 19:if(Te(Ae),h=i.memoizedState,h===null)return ot(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ns(h,!1);else{if(Ve!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=To(t),m!==null){for(i.flags|=128,ns(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Ae,Ae.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>Jr&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304)}else{if(!a)if(t=To(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Pe)return ot(i),null}else 2*Fe()-h.renderingStartTime>Jr&&o!==1073741824&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=Ae.current,Se(Ae,a?o&1|2:o&1),i):(ot(i),null);case 22:case 23:return Uc(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(kt&1073741824)!==0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Mv(t,i){switch(Qa(i),i.tag){case 1:return gt(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Qr(),Te(mt),Te(it),lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return sc(i),null;case 13:if(Te(Ae),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Hr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Te(Ae),null;case 4:return Qr(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var jo=!1,lt=!1,jv=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){De(t,i,a)}else o.current=null}function Nc(t,i,o){try{o()}catch(a){De(t,i,a)}}var np=!1;function Fv(t,i){if(Ua=no,t=Oh(),Aa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,w=-1,C=-1,T=0,O=0,D=t,A=null;t:for(;;){for(var W;D!==o||d!==0&&D.nodeType!==3||(w=m+d),D!==h||a!==0&&D.nodeType!==3||(C=m+a),D.nodeType===3&&(m+=D.nodeValue.length),(W=D.firstChild)!==null;)A=D,D=W;for(;;){if(D===t)break t;if(A===o&&++T===d&&(w=m),A===h&&++O===a&&(C=m),(W=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=W}o=w===-1||C===-1?null:{start:w,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},no=!1,V=i;V!==null;)if(i=V,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,V=t;else for(;V!==null;){i=V;try{var H=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var $=H.memoizedProps,Ue=H.memoizedState,I=i.stateNode,E=I.getSnapshotBeforeUpdate(i.elementType===i.type?$:zt(i.type,$),Ue);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(M){De(i,i.return,M)}if(t=i.sibling,t!==null){t.return=i.return,V=t;break}V=i.return}return H=np,np=!1,H}function rs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Nc(i,o,h)}d=d.next}while(d!==a)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Tc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Gi],delete i[Ha],delete i[wv],delete i[xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}function Pc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pc(t,i,o),t=t.sibling;t!==null;)Pc(t,i,o),t=t.sibling}var Ye=null,Wt=!1;function Dn(t,i,o){for(o=o.child;o!==null;)op(t,i,o),o=o.sibling}function op(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:lt||Yr(o,i);case 6:var a=Ye,d=Wt;Ye=null,Dn(t,i,o),Ye=a,Wt=d,Ye!==null&&(Wt?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Wt?(t=Ye,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),Li(t)):Ba(Ye,o.stateNode));break;case 4:a=Ye,d=Wt,Ye=o.stateNode.containerInfo,Wt=!0,Dn(t,i,o),Ye=a,Wt=d;break;case 0:case 11:case 14:case 15:if(!lt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Nc(o,i,m),d=d.next}while(d!==a)}Dn(t,i,o);break;case 1:if(!lt&&(Yr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){De(o,i,w)}Dn(t,i,o);break;case 21:Dn(t,i,o);break;case 22:o.mode&1?(lt=(a=lt)||o.memoizedState!==null,Dn(t,i,o),lt=a):Dn(t,i,o);break;default:Dn(t,i,o)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new jv),i.forEach(function(a){var d=Kv.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,w=m;e:for(;w!==null;){switch(w.tag){case 5:Ye=w.stateNode,Wt=!1;break e;case 3:Ye=w.stateNode.containerInfo,Wt=!0;break e;case 4:Ye=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(Ye===null)throw Error(n(160));op(h,m,d),Ye=null,Wt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(T){De(d,i,T)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),en(t),a&4){try{rs(3,t,t.return),Fo(3,t)}catch($){De(t,t.return,$)}try{rs(5,t,t.return)}catch($){De(t,t.return,$)}}break;case 1:Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return);break;case 5:if(Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return),t.flags&32){var d=t.stateNode;try{Si(d,"")}catch($){De(t,t.return,$)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,w=t.type,C=t.updateQueue;if(t.updateQueue=null,C!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&Ld(d,h),la(w,m);var T=la(w,h);for(m=0;m<C.length;m+=2){var O=C[m],D=C[m+1];O==="style"?Bd(d,D):O==="dangerouslySetInnerHTML"?Wd(d,D):O==="children"?Si(d,D):q(d,O,D,T)}switch(w){case"input":na(d,h);break;case"textarea":Fd(d,h);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Rr(d,!!h.multiple,W,!1):A!==!!h.multiple&&(h.defaultValue!=null?Rr(d,!!h.multiple,h.defaultValue,!0):Rr(d,!!h.multiple,h.multiple?[]:"",!1))}d[Gi]=h}catch($){De(t,t.return,$)}}break;case 6:if(Vt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch($){De(t,t.return,$)}}break;case 3:if(Vt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Li(i.containerInfo)}catch($){De(t,t.return,$)}break;case 4:Vt(i,t),en(t);break;case 13:Vt(i,t),en(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Oc=Fe())),a&4&&lp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(lt=(T=lt)||O,Vt(i,t),lt=T):Vt(i,t),en(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!O&&(t.mode&1)!==0)for(V=t,O=t.child;O!==null;){for(D=V=O;V!==null;){switch(A=V,W=A.child,A.tag){case 0:case 11:case 14:case 15:rs(4,A,A.return);break;case 1:Yr(A,A.return);var H=A.stateNode;if(typeof H.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,H.props=i.memoizedProps,H.state=i.memoizedState,H.componentWillUnmount()}catch($){De(a,o,$)}}break;case 5:Yr(A,A.return);break;case 22:if(A.memoizedState!==null){dp(D);continue}}W!==null?(W.return=A,V=W):dp(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{d=D.stateNode,T?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=D.stateNode,C=D.memoizedProps.style,m=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=Vd("display",m))}catch($){De(t,t.return,$)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=T?"":D.memoizedProps}catch($){De(t,t.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vt(i,t),en(t),a&4&&lp(t);break;case 21:break;default:Vt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ip(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Si(d,""),a.flags&=-33);var h=sp(t);Pc(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,w=sp(t);Rc(t,w,m);break;default:throw Error(n(161))}}catch(C){De(t,t.return,C)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Uv(t,i,o){V=t,cp(t)}function cp(t,i,o){for(var a=(t.mode&1)!==0;V!==null;){var d=V,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||jo;if(!m){var w=d.alternate,C=w!==null&&w.memoizedState!==null||lt;w=jo;var T=lt;if(jo=m,(lt=C)&&!T)for(V=d;V!==null;)m=V,C=m.child,m.tag===22&&m.memoizedState!==null?hp(d):C!==null?(C.return=m,V=C):hp(d);for(;h!==null;)V=h,cp(h),h=h.sibling;V=d,jo=w,lt=T}up(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,V=h):up(t)}}function up(t){for(;V!==null;){var i=V;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:lt||Fo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!lt)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&df(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}df(i,m,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var T=i.alternate;if(T!==null){var O=T.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&Li(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}lt||i.flags&512&&Tc(i)}catch(A){De(i,i.return,A)}}if(i===t){V=null;break}if(o=i.sibling,o!==null){o.return=i.return,V=o;break}V=i.return}}function dp(t){for(;V!==null;){var i=V;if(i===t){V=null;break}var o=i.sibling;if(o!==null){o.return=i.return,V=o;break}V=i.return}}function hp(t){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fo(4,i)}catch(C){De(i,o,C)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(C){De(i,d,C)}}var h=i.return;try{Tc(i)}catch(C){De(i,h,C)}break;case 5:var m=i.return;try{Tc(i)}catch(C){De(i,m,C)}}}catch(C){De(i,i.return,C)}if(i===t){V=null;break}var w=i.sibling;if(w!==null){w.return=i.return,V=w;break}V=i.return}}var zv=Math.ceil,Uo=Y.ReactCurrentDispatcher,Ac=Y.ReactCurrentOwner,bt=Y.ReactCurrentBatchConfig,he=0,Ge=null,ze=null,Xe=0,kt=0,Xr=Rn(0),Ve=0,is=null,fr=0,zo=0,bc=0,ss=null,yt=null,Oc=0,Jr=1/0,hn=null,Wo=!1,Dc=null,Ln=null,Vo=!1,Mn=null,Bo=0,os=0,Lc=null,Ho=-1,$o=0;function ct(){return(he&6)!==0?Fe():Ho!==-1?Ho:Ho=Fe()}function jn(t){return(t.mode&1)===0?1:(he&2)!==0&&Xe!==0?Xe&-Xe:Ev.transition!==null?($o===0&&($o=ih()),$o):(t=ye,t!==0||(t=window.event,t=t===void 0?16:fh(t.type)),t)}function Bt(t,i,o,a){if(50<os)throw os=0,Lc=null,Error(n(185));Pi(t,o,a),((he&2)===0||t!==Ge)&&(t===Ge&&((he&2)===0&&(zo|=o),Ve===4&&Fn(t,Xe)),vt(t,a),o===1&&he===0&&(i.mode&1)===0&&(Jr=Fe()+500,vo&&An()))}function vt(t,i){var o=t.callbackNode;Ey(t,i);var a=Zs(t,t===Ge?Xe:0);if(a===0)o!==null&&th(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&th(o),i===1)t.tag===0?Cv(pp.bind(null,t)):Jh(pp.bind(null,t)),yv(function(){(he&6)===0&&An()}),o=null;else{switch(sh(a)){case 1:o=pa;break;case 4:o=nh;break;case 16:o=qs;break;case 536870912:o=rh;break;default:o=qs}o=Cp(o,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function fp(t,i){if(Ho=-1,$o=0,(he&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Zr()&&t.callbackNode!==o)return null;var a=Zs(t,t===Ge?Xe:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Go(t,a);else{i=a;var d=he;he|=2;var h=gp();(Ge!==t||Xe!==i)&&(hn=null,Jr=Fe()+500,mr(t,i));do try{Bv();break}catch(w){mp(t,w)}while(!0);Za(),Uo.current=h,he=d,ze!==null?i=0:(Ge=null,Xe=0,i=Ve)}if(i!==0){if(i===2&&(d=ma(t),d!==0&&(a=d,i=Mc(t,d))),i===1)throw o=is,mr(t,0),Fn(t,a),vt(t,Fe()),o;if(i===6)Fn(t,a);else{if(d=t.current.alternate,(a&30)===0&&!Wv(d)&&(i=Go(t,a),i===2&&(h=ma(t),h!==0&&(a=h,i=Mc(t,h))),i===1))throw o=is,mr(t,0),Fn(t,a),vt(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:gr(t,yt,hn);break;case 3:if(Fn(t,a),(a&130023424)===a&&(i=Oc+500-Fe(),10<i)){if(Zs(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){ct(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Va(gr.bind(null,t,yt,hn),i);break}gr(t,yt,hn);break;case 4:if(Fn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-jt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zv(a/1960))-a,10<a){t.timeoutHandle=Va(gr.bind(null,t,yt,hn),a);break}gr(t,yt,hn);break;case 5:gr(t,yt,hn);break;default:throw Error(n(329))}}}return vt(t,Fe()),t.callbackNode===o?fp.bind(null,t):null}function Mc(t,i){var o=ss;return t.current.memoizedState.isDehydrated&&(mr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=yt,yt=o,i!==null&&jc(i)),t}function jc(t){yt===null?yt=t:yt.push.apply(yt,t)}function Wv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Ft(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fn(t,i){for(i&=~bc,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),a=1<<o;t[o]=-1,i&=~a}}function pp(t){if((he&6)!==0)throw Error(n(327));Zr();var i=Zs(t,0);if((i&1)===0)return vt(t,Fe()),null;var o=Go(t,i);if(t.tag!==0&&o===2){var a=ma(t);a!==0&&(i=a,o=Mc(t,a))}if(o===1)throw o=is,mr(t,0),Fn(t,i),vt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,gr(t,yt,hn),vt(t,Fe()),null}function Fc(t,i){var o=he;he|=1;try{return t(i)}finally{he=o,he===0&&(Jr=Fe()+500,vo&&An())}}function pr(t){Mn!==null&&Mn.tag===0&&(he&6)===0&&Zr();var i=he;he|=1;var o=bt.transition,a=ye;try{if(bt.transition=null,ye=1,t)return t()}finally{ye=a,bt.transition=o,he=i,(he&6)===0&&An()}}function Uc(){kt=Xr.current,Te(Xr)}function mr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_v(o)),ze!==null)for(o=ze.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_o();break;case 3:Qr(),Te(mt),Te(it),lc();break;case 5:sc(a);break;case 4:Qr();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:ec(a.type._context);break;case 22:case 23:Uc()}o=o.return}if(Ge=t,ze=t=Un(t.current,null),Xe=kt=i,Ve=0,is=null,bc=zo=fr=0,yt=ss=null,ur!==null){for(i=0;i<ur.length;i++)if(o=ur[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}ur=null}return t}function mp(t,i){do{var o=ze;try{if(Za(),Ro.current=Oo,Po){for(var a=be.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Po=!1}if(hr=0,$e=We=be=null,Ji=!1,Zi=0,Ac.current=null,o===null||o.return===null){Ve=1,is=i,ze=null;break}e:{var h=t,m=o.return,w=o,C=i;if(i=Xe,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var T=C,O=w,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var W=zf(m);if(W!==null){W.flags&=-257,Wf(W,m,w,h,i),W.mode&1&&Uf(h,T,i),i=W,C=T;var H=i.updateQueue;if(H===null){var $=new Set;$.add(C),i.updateQueue=$}else H.add(C);break e}else{if((i&1)===0){Uf(h,T,i),zc();break e}C=Error(n(426))}}else if(Pe&&w.mode&1){var Ue=zf(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Wf(Ue,m,w,h,i),Xa(qr(C,w));break e}}h=C=qr(C,w),Ve!==4&&(Ve=2),ss===null?ss=[h]:ss.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=jf(h,C,i);uf(h,I);break e;case 1:w=C;var E=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ln===null||!Ln.has(k)))){h.flags|=65536,i&=-i,h.lanes|=i;var M=Ff(h,w,i);uf(h,M);break e}}h=h.return}while(h!==null)}yp(o)}catch(G){i=G,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function gp(){var t=Uo.current;return Uo.current=Oo,t===null?Oo:t}function zc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ge===null||(fr&268435455)===0&&(zo&268435455)===0||Fn(Ge,Xe)}function Go(t,i){var o=he;he|=2;var a=gp();(Ge!==t||Xe!==i)&&(hn=null,mr(t,i));do try{Vv();break}catch(d){mp(t,d)}while(!0);if(Za(),he=o,Uo.current=a,ze!==null)throw Error(n(261));return Ge=null,Xe=0,Ve}function Vv(){for(;ze!==null;)_p(ze)}function Bv(){for(;ze!==null&&!py();)_p(ze)}function _p(t){var i=xp(t.alternate,t,kt);t.memoizedProps=t.pendingProps,i===null?yp(t):ze=i,Ac.current=null}function yp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Lv(o,i,kt),o!==null){ze=o;return}}else{if(o=Mv(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Ve===0&&(Ve=5)}function gr(t,i,o){var a=ye,d=bt.transition;try{bt.transition=null,ye=1,Hv(t,i,o,a)}finally{bt.transition=d,ye=a}return null}function Hv(t,i,o,a){do Zr();while(Mn!==null);if((he&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Sy(t,h),t===Ge&&(ze=Ge=null,Xe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Vo||(Vo=!0,Cp(qs,function(){return Zr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=bt.transition,bt.transition=null;var m=ye;ye=1;var w=he;he|=4,Ac.current=null,Fv(t,o),ap(o,t),uv(za),no=!!Ua,za=Ua=null,t.current=o,Uv(o),my(),he=w,ye=m,bt.transition=h}else t.current=o;if(Vo&&(Vo=!1,Mn=t,Bo=d),h=t.pendingLanes,h===0&&(Ln=null),yy(o.stateNode),vt(t,Fe()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Wo)throw Wo=!1,t=Dc,Dc=null,t;return(Bo&1)!==0&&t.tag!==0&&Zr(),h=t.pendingLanes,(h&1)!==0?t===Lc?os++:(os=0,Lc=t):os=0,An(),null}function Zr(){if(Mn!==null){var t=sh(Bo),i=bt.transition,o=ye;try{if(bt.transition=null,ye=16>t?16:t,Mn===null)var a=!1;else{if(t=Mn,Mn=null,Bo=0,(he&6)!==0)throw Error(n(331));var d=he;for(he|=4,V=t.current;V!==null;){var h=V,m=h.child;if((V.flags&16)!==0){var w=h.deletions;if(w!==null){for(var C=0;C<w.length;C++){var T=w[C];for(V=T;V!==null;){var O=V;switch(O.tag){case 0:case 11:case 15:rs(8,O,h)}var D=O.child;if(D!==null)D.return=O,V=D;else for(;V!==null;){O=V;var A=O.sibling,W=O.return;if(rp(O),O===T){V=null;break}if(A!==null){A.return=W,V=A;break}V=W}}}var H=h.alternate;if(H!==null){var $=H.child;if($!==null){H.child=null;do{var Ue=$.sibling;$.sibling=null,$=Ue}while($!==null)}}V=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,V=m;else e:for(;V!==null;){if(h=V,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,V=I;break e}V=h.return}}var E=t.current;for(V=E;V!==null;){m=V;var k=m.child;if((m.subtreeFlags&2064)!==0&&k!==null)k.return=m,V=k;else e:for(m=E;V!==null;){if(w=V,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Fo(9,w)}}catch(G){De(w,w.return,G)}if(w===m){V=null;break e}var M=w.sibling;if(M!==null){M.return=w.return,V=M;break e}V=w.return}}if(he=d,An(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{ye=o,bt.transition=i}}return!1}function vp(t,i,o){i=qr(o,i),i=jf(t,i,1),t=On(t,i,1),i=ct(),t!==null&&(Pi(t,1,i),vt(t,i))}function De(t,i,o){if(t.tag===3)vp(t,t,o);else for(;i!==null;){if(i.tag===3){vp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=qr(o,t),t=Ff(i,t,1),i=On(i,t,1),t=ct(),i!==null&&(Pi(i,1,t),vt(i,t));break}}i=i.return}}function $v(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ct(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(Xe&o)===o&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>Fe()-Oc?mr(t,0):bc|=o),vt(t,i)}function wp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Js,Js<<=1,(Js&130023424)===0&&(Js=4194304)));var o=ct();t=cn(t,i),t!==null&&(Pi(t,i,o),vt(t,o))}function Gv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),wp(t,o)}function Kv(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),wp(t,o)}var xp;xp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||mt.current)_t=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return _t=!1,Dv(t,i,o);_t=(t.flags&131072)!==0}else _t=!1,Pe&&(i.flags&1048576)!==0&&Zh(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Mo(t,i),t=i.pendingProps;var d=Wr(i,it.current);Kr(i,o),d=uc(null,i,a,t,d,o);var h=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,gt(a)?(h=!0,yo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=Do,i.stateNode=d,d._reactInternals=i,_c(i,a,t,o),i=xc(null,i,a,!0,h,o)):(i.tag=0,Pe&&h&&Ka(i),at(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Mo(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=qv(a),t=zt(a,t),d){case 0:i=wc(null,i,a,t,o);break e;case 1:i=Kf(null,i,a,t,o);break e;case 11:i=Vf(null,i,a,t,o);break e;case 14:i=Bf(null,i,a,zt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),wc(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Kf(t,i,a,d,o);case 3:e:{if(Qf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,cf(t,i),No(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=qr(Error(n(423)),i),i=qf(t,i,a,o,d);break e}else if(a!==d){d=qr(Error(n(424)),i),i=qf(t,i,a,o,d);break e}else for(It=Tn(i.stateNode.containerInfo.firstChild),St=i,Pe=!0,Ut=null,o=lf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),a===d){i=dn(t,i,o);break e}at(t,i,a,o)}i=i.child}return i;case 5:return hf(i),t===null&&Ya(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Wa(a,d)?m=null:h!==null&&Wa(a,h)&&(i.flags|=32),Gf(t,i),at(t,i,m,o),i.child;case 6:return t===null&&Ya(i),null;case 13:return Yf(t,i,o);case 4:return ic(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=$r(i,null,a,o):at(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Vf(t,i,a,d,o);case 7:return at(t,i,i.pendingProps,o),i.child;case 8:return at(t,i,i.pendingProps.children,o),i.child;case 12:return at(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Se(So,a._currentValue),a._currentValue=m,h!==null)if(Ft(h.value,m)){if(h.children===d.children&&!mt.current){i=dn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var w=h.dependencies;if(w!==null){m=h.child;for(var C=w.firstContext;C!==null;){if(C.context===a){if(h.tag===1){C=un(-1,o&-o),C.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var O=T.pending;O===null?C.next=C:(C.next=O.next,O.next=C),T.pending=C}}h.lanes|=o,C=h.alternate,C!==null&&(C.lanes|=o),tc(h.return,o,i),w.lanes|=o;break}C=C.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),tc(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}at(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,Kr(i,o),d=Pt(d),a=a(d),i.flags|=1,at(t,i,a,o),i.child;case 14:return a=i.type,d=zt(a,i.pendingProps),d=zt(a.type,d),Bf(t,i,a,d,o);case 15:return Hf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Mo(t,i),i.tag=1,gt(a)?(t=!0,yo(i)):t=!1,Kr(i,o),Lf(i,a,d),_c(i,a,d,o),xc(null,i,a,!0,t,o);case 19:return Jf(t,i,o);case 22:return $f(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return eh(t,i)}function Qv(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new Qv(t,i,o,a)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qv(t){if(typeof t=="function")return Wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nt)return 11;if(t===qt)return 14}return 2}function Un(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ko(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Wc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case te:return _r(o.children,d,h,i);case re:m=8,d|=8;break;case ve:return t=Ot(12,o,i,d|2),t.elementType=ve,t.lanes=h,t;case rt:return t=Ot(13,o,i,d),t.elementType=rt,t.lanes=h,t;case Mt:return t=Ot(19,o,i,d),t.elementType=Mt,t.lanes=h,t;case Oe:return Qo(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ce:m=10;break e;case je:m=9;break e;case nt:m=11;break e;case qt:m=14;break e;case pt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function _r(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function Qo(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function Vc(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bc(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yv(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,a,d,h,m,w,C){return t=new Yv(t,i,o,w,C),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(h),t}function Xv(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Ep(t){if(!t)return Pn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(gt(o))return Yh(t,o,i)}return i}function Sp(t,i,o,a,d,h,m,w,C){return t=Hc(o,a,!0,t,d,h,m,w,C),t.context=Ep(null),o=t.current,a=ct(),d=jn(o),h=un(a,d),h.callback=i??null,On(o,h,d),t.current.lanes=d,Pi(t,d,a),vt(t,a),t}function qo(t,i,o,a){var d=i.current,h=ct(),m=jn(d);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=un(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=On(d,i,m),t!==null&&(Bt(t,d,m,h),ko(t,d,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $c(t,i){Ip(t,i),(t=t.alternate)&&Ip(t,i)}function Jv(){return null}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Xo.prototype.render=Gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},Xo.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pr(function(){qo(null,t,null,null)}),i[sn]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=ah();t={blockedOn:null,target:t,priority:i};for(var o=0;o<In.length&&i!==0&&i<In[o].priority;o++);In.splice(o,0,t),o===0&&dh(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function Zv(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var T=Yo(m);h.call(T)}}var m=Sp(i,a,t,0,null,!1,!1,"",Np);return t._reactRootContainer=m,t[sn]=m.current,Hi(t.nodeType===8?t.parentNode:t),pr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var w=a;a=function(){var T=Yo(C);w.call(T)}}var C=Hc(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=C,t[sn]=C.current,Hi(t.nodeType===8?t.parentNode:t),pr(function(){qo(i,C,o,a)}),C}function Zo(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var w=d;d=function(){var C=Yo(m);w.call(C)}}qo(i,m,t,d)}else m=Zv(o,i,t,d,a);return Yo(m)}oh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ri(i.pendingLanes);o!==0&&(_a(i,o|1),vt(i,Fe()),(he&6)===0&&(Jr=Fe()+500,An()))}break;case 13:pr(function(){var a=cn(t,1);if(a!==null){var d=ct();Bt(a,t,1,d)}}),$c(t,1)}},ya=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ct();Bt(i,t,134217728,o)}$c(t,134217728)}},lh=function(t){if(t.tag===13){var i=jn(t),o=cn(t,i);if(o!==null){var a=ct();Bt(o,t,i,a)}$c(t,i)}},ah=function(){return ye},ch=function(t,i){var o=ye;try{return ye=t,i()}finally{ye=o}},ua=function(t,i,o){switch(i){case"input":if(na(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=go(a);if(!d)throw Error(n(90));Od(a),na(a,d)}}}break;case"textarea":Fd(t,o);break;case"select":i=o.value,i!=null&&Rr(t,!!o.multiple,i,!1)}},Kd=Fc,Qd=pr;var e0={usingClientEntryPoint:!1,Events:[Ki,Ur,go,$d,Gd,Fc]},ls={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t0={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jd(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||Jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(t0),Yt=el}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0,wt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(i))throw Error(n(200));return Xv(t,i,null,o)},wt.createRoot=function(t,i){if(!Kc(t))throw Error(n(299));var o=!1,a="",d=kp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,a,d),t[sn]=i.current,Hi(t.nodeType===8?t.parentNode:t),new Gc(i)},wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Jd(i),t=t===null?null:t.stateNode,t},wt.flushSync=function(t){return pr(t)},wt.hydrate=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!0,o)},wt.hydrateRoot=function(t,i,o){if(!Kc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=kp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Sp(i,null,t,1,o??null,d,!1,h,m),t[sn]=i.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Xo(i)},wt.render=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!1,o)},wt.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},wt.unstable_batchedUpdates=Fc,wt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,o,!1,a)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var Lp;function c0(){if(Lp)return Yc.exports;Lp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yc.exports=a0(),Yc.exports}var Mp;function u0(){if(Mp)return tl;Mp=1;var r=c0();return tl.createRoot=r.createRoot,tl.hydrateRoot=r.hydrateRoot,tl}var d0=u0();const h0=Km(d0),f0=()=>{};var jp={};/**
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
 */const qm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(r,e){if(!r)throw mi(e)},mi=function(r){return new Error("Firebase Database ("+qm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Ym=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},p0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],u=r[n++],f=r[n++],p=((l&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],u=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|u&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],u=l+1<r.length,f=u?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,y=c>>2,x=(c&3)<<4|f>>4;let v=(f&15)<<2|g>>6,N=g&63;p||(N=64,u||(v=64)),s.push(n[y],n[x],n[v],n[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ym(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):p0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const x=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||f==null||g==null||x==null)throw new m0;const v=c<<2|f>>4;if(s.push(v),g!==64){const N=f<<4&240|g>>2;if(s.push(N),x!==64){const P=g<<6&192|x;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class m0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xm=function(r){const e=Ym(r);return Wu.encodeByteArray(e,!0)},hl=function(r){return Xm(r).replace(/\./g,"")},fl=function(r){try{return Wu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function g0(r){return Jm(void 0,r)}function Jm(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_0(n)||(r[n]=Jm(r[n],e[n]));return r}function _0(r){return r!=="__proto__"}/**
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
 */const v0=()=>y0().__FIREBASE_DEFAULTS__,w0=()=>{if(typeof process>"u"||typeof jp>"u")return;const r=jp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},x0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fl(r[1]);return e&&JSON.parse(e)},Vu=()=>{try{return f0()||v0()||w0()||x0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Zm=r=>{var e,n;return(n=(e=Vu())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},C0=r=>{const e=Zm(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eg=()=>{var r;return(r=Vu())==null?void 0:r.config},tg=r=>{var e;return(e=Vu())==null?void 0:e[`_${r}`]};/**
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
 */function gi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ng(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function E0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[hl(JSON.stringify(n)),hl(JSON.stringify(u)),""].join(".")}const fs={};function S0(){const r={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?r.emulator.push(e):r.prod.push(e);return r}function I0(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Fp=!1;function rg(r,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||fs[r]===e||fs[r]||Fp)return;fs[r]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",c=S0().prod.length>0;function u(){const v=document.getElementById(s);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,N){v.setAttribute("width","24"),v.setAttribute("id",N),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function g(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Fp=!0,u()},v}function y(v,N){v.setAttribute("id",N),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function x(){const v=I0(s),N=n("text"),P=document.getElementById(N)||document.createElement("span"),F=n("learnmore"),U=document.getElementById(F)||document.createElement("a"),R=n("preprendIcon"),L=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const q=v.element;f(q),y(U,F);const Y=g();p(L,R),q.append(L,P,U,Y),document.body.appendChild(q)}c?(P.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function k0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T0(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function R0(){return qm.NODE_ADMIN===!0}function P0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;e(((c=l.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const b0="FirebaseError";class ir extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=b0,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],u=c?O0(c,s):"Error",f=`${this.serviceName}: ${u} (${l}).`;return new ir(l,f,s)}}function O0(r,e){return r.replace(D0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const D0=/\{\$([^}]+)}/g;/**
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
 */const sg=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=ws(fl(c[0])||""),n=ws(fl(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},L0=function(r){const e=sg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},M0=function(r){const e=sg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ai(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function mu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function pl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function xr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],u=e[l];if(Up(c)&&Up(u)){if(!xr(c,u))return!1}else if(c!==u)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Up(r){return r!==null&&typeof r=="object"}/**
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
 */function Nt(r){return r&&r._delegate?r._delegate:r}class Cr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class V0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H0(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:B0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B0(r){return r===yr?void 0:r}function H0(r){return r.instantiationMode==="EAGER"}/**
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
 */var we;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(we||(we={}));const G0={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},K0=we.INFO,Q0={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},q0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Q0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=K0,this._logHandler=q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Y0=(r,e)=>e.some(n=>r instanceof n);let zp,Wp;function X0(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J0(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const og=new WeakMap,gu=new WeakMap,lg=new WeakMap,eu=new WeakMap,$u=new WeakMap;function Z0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",u)},c=()=>{n(Kn(r.result)),l()},u=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&og.set(n,r)}).catch(()=>{}),$u.set(e,r),e}function ew(r){if(gu.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",u),r.removeEventListener("abort",u)},c=()=>{n(),l()},u=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",u),r.addEventListener("abort",u)});gu.set(r,e)}let _u={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return gu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||lg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function tw(r){_u=r(_u)}function nw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(tu(this),e,...n);return lg.set(s,e.sort?e.sort():[e]),Kn(s)}:J0().includes(r)?function(...e){return r.apply(tu(this),e),Kn(og.get(this))}:function(...e){return Kn(r.apply(tu(this),e))}}function rw(r){return typeof r=="function"?nw(r):(r instanceof IDBTransaction&&ew(r),Y0(r,X0())?new Proxy(r,_u):r)}function Kn(r){if(r instanceof IDBRequest)return Z0(r);if(eu.has(r))return eu.get(r);const e=rw(r);return e!==r&&(eu.set(r,e),$u.set(e,r)),e}const tu=r=>$u.get(r);function iw(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const u=indexedDB.open(r,e),f=Kn(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Kn(u.result),p.oldVersion,p.newVersion,Kn(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const sw=["get","getKey","getAll","getAllKeys","count"],ow=["put","add","delete","clear"],nu=new Map;function Vp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=ow.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||sw.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return nu.set(e,c),c}tw(r=>({...r,get:(e,n,s)=>Vp(e,n)||r.get(e,n,s),has:(e,n)=>!!Vp(e,n)||r.has(e,n)}));/**
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
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function aw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",Bp="0.14.8";/**
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
 */const _n=new Hu("@firebase/app"),cw="@firebase/app-compat",uw="@firebase/analytics-compat",dw="@firebase/analytics",hw="@firebase/app-check-compat",fw="@firebase/app-check",pw="@firebase/auth",mw="@firebase/auth-compat",gw="@firebase/database",_w="@firebase/data-connect",yw="@firebase/database-compat",vw="@firebase/functions",ww="@firebase/functions-compat",xw="@firebase/installations",Cw="@firebase/installations-compat",Ew="@firebase/messaging",Sw="@firebase/messaging-compat",Iw="@firebase/performance",kw="@firebase/performance-compat",Nw="@firebase/remote-config",Tw="@firebase/remote-config-compat",Rw="@firebase/storage",Pw="@firebase/storage-compat",Aw="@firebase/firestore",bw="@firebase/ai",Ow="@firebase/firestore-compat",Dw="firebase",Lw="12.9.0";/**
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
 */const vu="[DEFAULT]",Mw={[yu]:"fire-core",[cw]:"fire-core-compat",[dw]:"fire-analytics",[uw]:"fire-analytics-compat",[fw]:"fire-app-check",[hw]:"fire-app-check-compat",[pw]:"fire-auth",[mw]:"fire-auth-compat",[gw]:"fire-rtdb",[_w]:"fire-data-connect",[yw]:"fire-rtdb-compat",[vw]:"fire-fn",[ww]:"fire-fn-compat",[xw]:"fire-iid",[Cw]:"fire-iid-compat",[Ew]:"fire-fcm",[Sw]:"fire-fcm-compat",[Iw]:"fire-perf",[kw]:"fire-perf-compat",[Nw]:"fire-rc",[Tw]:"fire-rc-compat",[Rw]:"fire-gcs",[Pw]:"fire-gcs-compat",[Aw]:"fire-fst",[Ow]:"fire-fst-compat",[bw]:"fire-vertex","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
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
 */const ml=new Map,jw=new Map,wu=new Map;function Hp(r,e){try{r.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ci(r){const e=r.name;if(wu.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;wu.set(e,r);for(const n of ml.values())Hp(n,r);for(const n of jw.values())Hp(n,r);return!0}function Gu(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ht(r){return r==null?!1:r.settings!==void 0}/**
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
 */class Uw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=Lw;function ag(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:vu,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=eg()),!n)throw Qn.create("no-options");const c=ml.get(l);if(c){if(xr(n,c.options)&&xr(s,c.config))return c;throw Qn.create("duplicate-app",{appName:l})}const u=new $0(l);for(const p of wu.values())u.addComponent(p);const f=new Uw(n,s,u);return ml.set(l,f),f}function cg(r=vu){const e=ml.get(r);if(!e&&r===vu&&eg())return ag();if(!e)throw Qn.create("no-app",{appName:r});return e}function qn(r,e,n){let s=Mw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const u=[`Unable to register library "${s}" with version "${e}":`];l&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(u.join(" "));return}ci(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zw="firebase-heartbeat-database",Ww=1,xs="firebase-heartbeat-store";let ru=null;function ug(){return ru||(ru=iw(zw,Ww,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),ru}async function Vw(r){try{const n=(await ug()).transaction(xs),s=await n.objectStore(xs).get(dg(r));return await n.done,s}catch(e){if(e instanceof ir)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function $p(r,e){try{const s=(await ug()).transaction(xs,"readwrite");await s.objectStore(xs).put(e,dg(r)),await s.done}catch(n){if(n instanceof ir)_n.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function dg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Bw=1024,Hw=30;class $w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Gp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Hw){const u=Qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:l}=Gw(this._heartbeatsCache.heartbeats),c=hl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _n.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function Gw(r,e=Bw){const n=[];let s=r.slice();for(const l of r){const c=n.find(u=>u.agent===l.agent);if(c){if(c.dates.push(l.date),Kp(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Kp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kp(r){return hl(JSON.stringify({version:2,heartbeats:r})).length}function Qw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function qw(r){ci(new Cr("platform-logger",e=>new lw(e),"PRIVATE")),ci(new Cr("heartbeat",e=>new $w(e),"PRIVATE")),qn(yu,Bp,r),qn(yu,Bp,"esm2020"),qn("fire-js","")}qw("");var Yw="firebase",Xw="12.9.0";/**
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
 */qn(Yw,Xw,"app");function hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=hg,fg=new Os("auth","Firebase",hg());/**
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
 */const gl=new Hu("@firebase/auth");function Zw(r,...e){gl.logLevel<=we.WARN&&gl.warn(`Auth (${yi}): ${r}`,...e)}function ol(r,...e){gl.logLevel<=we.ERROR&&gl.error(`Auth (${yi}): ${r}`,...e)}/**
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
 */function yn(r,...e){throw Ku(r,...e)}function tn(r,...e){return Ku(r,...e)}function pg(r,e,n){const s={...Jw(),[e]:n};return new Os("auth","Firebase",s).create(e,{appName:r.name})}function Yn(r){return pg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ku(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return fg.create(r,...e)}function ee(r,e,...n){if(!r)throw Ku(e,...n)}function fn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ol(e),new Error(e)}function vn(r,e){r||fn(e)}/**
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
 */function xu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function ex(){return Qp()==="http:"||Qp()==="https:"}function Qp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ex()||N0()||"connection"in navigator)?navigator.onLine:!0}function nx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bu()||ig()}get(){return tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qu(r,e){vn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ix=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sx=new Ds(3e4,6e4);function Fl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vi(r,e,n,s,l={}){return gg(r,l,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=_i({key:r.config.apiKey,...u}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...c};return k0()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&gi(r.emulatorConfig.host)&&(g.credentials="include"),mg.fetch()(await yg(r,r.config.apiHost,n,f),g)})}async function gg(r,e,n){r._canInitEmulator=!1;const s={...rx,...e};try{const l=new ox(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw nl(r,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(r,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw nl(r,"email-already-in-use",u);if(p==="USER_DISABLED")throw nl(r,"user-disabled",u);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw pg(r,y,g);yn(r,y)}}catch(l){if(l instanceof ir)throw l;yn(r,"network-request-failed",{message:String(l)})}}async function _g(r,e,n,s,l={}){const c=await vi(r,e,n,s,l);return"mfaPendingCredential"in c&&yn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function yg(r,e,n,s){const l=`${e}${n}?${s}`,c=r,u=c.config.emulator?Qu(r.config,l):`${r.config.apiScheme}://${l}`;return ix.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class ox{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),sx.get())})}}function nl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */function ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ax(r,e=!1){const n=Nt(r),s=await n.getIdToken(e),l=qu(s);ee(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:ps(iu(l.auth_time)),issuedAtTime:ps(iu(l.iat)),expirationTime:ps(iu(l.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function iu(r){return Number(r)*1e3}function qu(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=fl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function qp(r){const e=qu(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ir&&cx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */async function yl(r){var x;const e=r.auth,n=await r.getIdToken(),s=await Cs(r,_l(e,{idToken:n}));ee(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=(x=l.providerUserInfo)!=null&&x.length?vg(l.providerUserInfo):[],u=hx(r.providerData,c),f=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Cu(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,y)}async function dx(r){const e=Nt(r);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hx(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function vg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fx(r,e){const n=await gg(r,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,u=await yg(r,l,"/v1/token",`key=${c}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&gi(r.emulatorConfig.host)&&(p.credentials="include"),mg.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function px(r,e){return vi(r,"POST","/v2/accounts:revokeToken",Fl(r,e))}/**
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
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=qp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await fx(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,u=new ri;return s&&(ee(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),l&&(ee(typeof l=="string","internal-error",{appName:e}),u.accessToken=l),c&&(ee(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Wn(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Cu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ax(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Cs(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:x,emailVerified:v,isAnonymous:N,providerData:P,stsTokenManager:F}=n;ee(x&&F,e,"internal-error");const U=ri.fromJSON(this.name,F);ee(typeof x=="string",e,"internal-error"),Wn(s,e.name),Wn(l,e.name),ee(typeof v=="boolean",e,"internal-error"),ee(typeof N=="boolean",e,"internal-error"),Wn(c,e.name),Wn(u,e.name),Wn(f,e.name),Wn(p,e.name),Wn(g,e.name),Wn(y,e.name);const R=new Gt({uid:x,auth:e,email:l,emailVerified:v,displayName:s,isAnonymous:N,photoURL:u,phoneNumber:c,tenantId:f,stsTokenManager:U,createdAt:g,lastLoginAt:y});return P&&Array.isArray(P)&&(R.providerData=P.map(L=>({...L}))),p&&(R._redirectEventId=p),R}static async _fromIdTokenResponse(e,n,s=!1){const l=new ri;l.updateFromServerResponse(n);const c=new Gt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await yl(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ee(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?vg(l.providerUserInfo):[],u=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),f=new ri;f.updateFromIdToken(s);const p=new Gt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Cu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,g),p}}/**
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
 */const Yp=new Map;function pn(r){vn(r instanceof Function,"Expected a class definition");let e=Yp.get(r);return e?(vn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Yp.set(r,e),e)}/**
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
 */class wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wg.type="NONE";const Xp=wg;/**
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
 */function ll(r,e,n){return`firebase:${r}:${e}:${n}`}class ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,c),this.fullPersistenceKey=ll("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _l(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ii(pn(Xp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=l[0]||pn(Xp);const u=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(u);if(y){let x;if(typeof y=="string"){const v=await _l(e,{idToken:y}).catch(()=>{});if(!v)break;x=await Gt._fromGetAccountInfoResponse(e,v,y)}else x=Gt._fromJSON(e,y);g!==c&&(f=x),c=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ii(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(u)}catch{}})),new ii(c,e,s))}}/**
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
 */function Jp(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kg(e))return"Blackberry";if(Ng(e))return"Webos";if(Cg(e))return"Safari";if((e.includes("chrome/")||Eg(e))&&!e.includes("edge/"))return"Chrome";if(Ig(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xg(r=ft()){return/firefox\//i.test(r)}function Cg(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eg(r=ft()){return/crios\//i.test(r)}function Sg(r=ft()){return/iemobile/i.test(r)}function Ig(r=ft()){return/android/i.test(r)}function kg(r=ft()){return/blackberry/i.test(r)}function Ng(r=ft()){return/webos/i.test(r)}function Yu(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function mx(r=ft()){var e;return Yu(r)&&!!((e=window.navigator)!=null&&e.standalone)}function gx(){return T0()&&document.documentMode===10}function Tg(r=ft()){return Yu(r)||Ig(r)||Ng(r)||kg(r)||/windows phone/i.test(r)||Sg(r)}/**
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
 */function Rg(r,e=[]){let n;switch(r){case"Browser":n=Jp(ft());break;case"Worker":n=`${Jp(ft())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */class xx{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new _x(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,l,c;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Ht(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(c=this.redirectUser)==null?void 0:c._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Yn(this));const n=e?Nt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yx(this),n=new wx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await px(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(f,this,"internal-error"),f.then(()=>{u||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Zw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ul(r){return Nt(r)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=F0(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cx(r){Xu=r}function Ex(r){return Xu.loadJS(r)}function Sx(){return Xu.gapiScript}function Ix(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kx(r,e){const n=Gu(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(xr(c,e??{}))return l;yn(l,"already-initialized")}return n.initialize({options:e})}function Nx(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Tx(r,e,n){const s=Ul(r);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Pg(e),{host:u,port:f}=Rx(e),p=f===null?"":`:${f}`,g={url:`${c}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(xr(g,s.config.emulator)&&xr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,gi(u)?(ng(`${c}//${u}${p}`),rg("Auth",!0)):Px()}function Pg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Rx(r){const e=Pg(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:em(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:em(u)}}}function em(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Px(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function si(r,e){return _g(r,"POST","/v1/accounts:signInWithIdp",Fl(r,e))}/**
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
 */const Ax="http://localhost";class Er extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const u=new Er(s,l);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,si(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:Ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */class bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function bx(r,e){return _g(r,"POST","/v1/accounts:signUp",Fl(r,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await Gt._fromIdTokenResponse(e,s,l),u=tm(s);return new Zn({user:c,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=tm(s);return new Zn({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function tm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class vl extends ir{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new vl(e,n,s,l)}}function Og(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(r,c,e,s):c})}async function Dx(r,e,n=!1){const s=await Cs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zn._forOperation(r,"link",s)}/**
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
 */async function Lx(r,e,n=!1){const{auth:s}=r;if(Ht(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const c=await Cs(r,Og(s,l,e,r),n);ee(c.idToken,s,"internal-error");const u=qu(c.idToken);ee(u,s,"internal-error");const{sub:f}=u;return ee(r.uid===f,s,"user-mismatch"),Zn._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&yn(s,"user-mismatch"),c}}/**
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
 */async function Mx(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s="signIn",l=await Og(r,s,e),c=await Zn._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}function jx(r,e,n,s){return Nt(r).onIdTokenChanged(e,n,s)}function Fx(r,e,n){return Nt(r).beforeAuthStateChanged(e,n)}function Ux(r,e,n,s){return Nt(r).onAuthStateChanged(e,n,s)}const wl="__sak";/**
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
 */class Dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zx=1e3,Wx=10;class Lg extends Dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);gx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Wx):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lg.type="LOCAL";const Vx=Lg;/**
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
 */class Mg extends Dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mg.type="SESSION";const jg=Mg;/**
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
 */function Bx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,u=this.handlersMap[l];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(u).map(async g=>g(n.origin,c)),p=await Bx(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function Ju(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class Hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const g=Ju("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:l,onMessage(x){const v=x;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(v.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),l.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function nn(){return window}function $x(r){nn().location.href=r}/**
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
 */function Fg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function Gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kx(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Qx(){return Fg()?self:null}/**
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
 */const Ug="firebaseLocalStorageDb",qx=1,xl="firebaseLocalStorage",zg="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(r,e){return r.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function Yx(){const r=indexedDB.deleteDatabase(Ug);return new Ms(r).toPromise()}function Eu(){const r=indexedDB.open(Ug,qx);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(xl,{keyPath:zg})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(xl)?e(s):(s.close(),await Yx(),e(await Eu()))})})}async function nm(r,e,n){const s=Wl(r,!0).put({[zg]:e,value:n});return new Ms(s).toPromise()}async function Xx(r,e){const n=Wl(r,!1).get(e),s=await new Ms(n).toPromise();return s===void 0?null:s.value}function rm(r,e){const n=Wl(r,!0).delete(e);return new Ms(n).toPromise()}const Jx=800,Zx=3;class Wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Zx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(Qx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Gx(),!this.activeServiceWorker)return;this.sender=new Hx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await nm(e,wl,"1"),await rm(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Xx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Wl(l,!1).getAll();return new Ms(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wg.type="LOCAL";const eC=Wg;new Ds(3e4,6e4);/**
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
 */function tC(r,e){return e?pn(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zu extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nC(r){return Mx(r.auth,new Zu(r),r.bypassAuthState)}function rC(r){const{auth:e,user:n}=r;return ee(n,e,"internal-error"),Lx(n,new Zu(r),r.bypassAuthState)}async function iC(r){const{auth:e,user:n}=r;return ee(n,e,"internal-error"),Dx(n,new Zu(r),r.bypassAuthState)}/**
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
 */class Vg{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nC;case"linkViaPopup":case"linkViaRedirect":return iC;case"reauthViaPopup":case"reauthViaRedirect":return rC;default:yn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sC=new Ds(2e3,1e4);class ti extends Vg{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sC.get())};e()}}ti.currentPopupAction=null;/**
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
 */const oC="pendingRedirect",al=new Map;class lC extends Vg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await aC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aC(r,e){const n=dC(e),s=uC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function cC(r,e){al.set(r._key(),e)}function uC(r){return pn(r._redirectPersistence)}function dC(r){return ll(oC,r.config.apiKey,r.name)}async function hC(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s=Ul(r),l=tC(s,e),u=await new lC(s,l,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const fC=600*1e3;class pC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bg(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fC&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Bg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bg(r);default:return!1}}/**
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
 */async function gC(r,e={}){return vi(r,"GET","/v1/projects",e)}/**
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
 */const _C=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yC=/^https?/;async function vC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await gC(r);for(const n of e)try{if(wC(n))return}catch{}yn(r,"unauthorized-domain")}function wC(r){const e=xu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!yC.test(n))return!1;if(_C.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const xC=new Ds(3e4,6e4);function sm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CC(r){return new Promise((e,n)=>{var l,c,u;function s(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(tn(r,"network-request-failed"))},timeout:xC.get()})}if((c=(l=nn().gapi)==null?void 0:l.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((u=nn().gapi)!=null&&u.load)s();else{const f=Ix("iframefcb");return nn()[f]=()=>{gapi.load?s():n(tn(r,"network-request-failed"))},Ex(`${Sx()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function EC(r){return cl=cl||CC(r),cl}/**
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
 */const SC=new Ds(5e3,15e3),IC="__/auth/iframe",kC="emulator/auth/iframe",NC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RC(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Qu(e,kC):`https://${r.config.authDomain}/${IC}`,s={apiKey:e.apiKey,appName:r.name,v:yi},l=TC.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${_i(s).slice(1)}`}async function PC(r){const e=await EC(r),n=nn().gapi;return ee(n,r,"internal-error"),e.open({where:document.body,url:RC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NC,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const u=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{c(u)},SC.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
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
 */const AC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bC=500,OC=600,DC="_blank",LC="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MC(r,e,n,s=bC,l=OC){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...AC,width:s.toString(),height:l.toString(),top:c,left:u},g=ft().toLowerCase();n&&(f=Eg(g)?DC:n),xg(g)&&(e=e||LC,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[N,P])=>`${v}${N}=${P},`,"");if(mx(g)&&f!=="_self")return jC(e||"",f),new om(null);const x=window.open(e||"",f,y);ee(x,r,"popup-blocked");try{x.focus()}catch{}return new om(x)}function jC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FC="__/auth/handler",UC="emulator/auth/handler",zC=encodeURIComponent("fac");async function lm(r,e,n,s,l,c){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof bg){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",mu(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,x]of Object.entries({}))u[y]=x}if(e instanceof Ls){const y=e.getScopes().filter(x=>x!=="");y.length>0&&(u.scopes=y.join(","))}r.tenantId&&(u.tid=r.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),g=p?`#${zC}=${encodeURIComponent(p)}`:"";return`${WC(r)}?${_i(f).slice(1)}${g}`}function WC({config:r}){return r.emulator?Qu(r,UC):`https://${r.authDomain}/${FC}`}/**
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
 */const su="webStorageSupport";class VC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=hC,this._overrideRedirectResult=cC}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await lm(e,n,s,xu(),l);return MC(e,c,Ju())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await lm(e,n,s,xu(),l);return $x(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(vn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await PC(e),s=new pC(e);return n.register("authEvent",l=>(ee(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},l=>{var u;const c=(u=l==null?void 0:l[0])==null?void 0:u[su];c!==void 0&&n(!!c),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tg()||Cg()||Yu()}}const BC=VC;var am="@firebase/auth",cm="1.12.0";/**
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
 */class HC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GC(r){ci(new Cr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;ee(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rg(r)},g=new xx(s,l,c,p);return Nx(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ci(new Cr("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(s=>new HC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(am,cm,$C(r)),qn(am,cm,"esm2020")}/**
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
 */const KC=300,QC=tg("authIdTokenMaxAge")||KC;let um=null;const qC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QC)return;const l=n==null?void 0:n.token;um!==l&&(um=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function YC(r=cg()){const e=Gu(r,"auth");if(e.isInitialized())return e.getImmediate();const n=kx(r,{popupRedirectResolver:BC,persistence:[eC,Vx,jg]}),s=tg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const u=qC(c.toString());Fx(n,u,()=>u(n.currentUser)),jx(n,f=>u(f))}}const l=Zm("auth");return l&&Tx(n,`http://${l}`),n}function XC(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Cx({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=tn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",XC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GC("Browser");var dm={};const hm="@firebase/database",fm="1.1.0";/**
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
 */let Hg="";function JC(r){Hg=r}/**
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
 */class ZC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $g=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZC(e)}}catch{}return new eE},wr=$g("localStorage"),tE=$g("sessionStorage");/**
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
 */const oi=new Hu("@firebase/database"),nE=(function(){let r=1;return function(){return r++}})(),Gg=function(r){const e=W0(r),n=new j0;n.update(e);const s=n.digest();return Wu.encodeByteArray(s)},js=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=js.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let ms=null,pm=!0;const rE=function(r,e){j(!0,"Can't turn on custom loggers persistently."),oi.logLevel=we.VERBOSE,ms=oi.log.bind(oi)},Je=function(...r){if(pm===!0&&(pm=!1,ms===null&&tE.get("logging_enabled")===!0&&rE()),ms){const e=js.apply(null,r);ms(e)}},Fs=function(r){return function(...e){Je(r,...e)}},Su=function(...r){const e="FIREBASE INTERNAL ERROR: "+js(...r);oi.error(e)},wn=function(...r){const e=`FIREBASE FATAL ERROR: ${js(...r)}`;throw oi.error(e),new Error(e)},dt=function(...r){const e="FIREBASE WARNING: "+js(...r);oi.warn(e)},iE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ed=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},sE=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ui="[MIN_NAME]",Sr="[MAX_NAME]",Nr=function(r,e){if(r===e)return 0;if(r===ui||e===Sr)return-1;if(e===ui||r===Sr)return 1;{const n=mm(r),s=mm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},oE=function(r,e){return r===e?0:r<e?-1:1},cs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},td=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=td(r[e[s]]);return n+="}",n},Kg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function tt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Qg=function(r){j(!ed(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,u,f,p;r===0?(c=0,u=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=f+s,u=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(l?1:0),g.reverse();const y=g.join("");let x="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),x=x+v}return x.toLowerCase()},lE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cE(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const uE=new RegExp("^-?(0*)\\d{1,10}$"),dE=-2147483648,hE=2147483647,mm=function(r){if(uE.test(r)){const e=Number(r);if(e>=dE&&e<=hE)return e}return null},wi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},fE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class ul{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ul.OWNER="owner";/**
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
 */const nd="5",qg="v",Yg="s",Xg="r",Jg="f",Zg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,e_="ls",t_="p",Iu="ac",n_="websocket",r_="long_polling";/**
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
 */class i_{constructor(e,n,s,l,c=!1,u="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function s_(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===n_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===r_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gE(r)&&(n.ns=r.namespace);const l=[];return tt(n,(c,u)=>{l.push(c+"="+u)}),s+l.join("&")}/**
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
 */class _E{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return g0(this.counters_)}}/**
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
 */const ou={},lu={};function rd(r){const e=r.toString();return ou[e]||(ou[e]=new _E),ou[e]}function yE(r,e){const n=r.toString();return lu[n]||(lu[n]=e()),lu[n]}/**
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
 */class vE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&wi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gm="start",wE="close",xE="pLPCommand",CE="pRTLPCB",o_="id",l_="pw",a_="ser",EE="cb",SE="seg",IE="ts",kE="d",NE="dframe",c_=1870,u_=30,TE=c_-u_,RE=25e3,PE=3e4;class ni{constructor(e,n,s,l,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=rd(n),this.urlFn=p=>(this.appCheckToken&&(p[Iu]=this.appCheckToken),s_(n,r_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PE)),sE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new id((...c)=>{const[u,f,p,g,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===gm)this.id=f,this.password=p;else if(u===wE)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[gm]="t",s[a_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[EE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qg]=nd,this.transportSessionId&&(s[Yg]=this.transportSessionId),this.lastSessionId&&(s[e_]=this.lastSessionId),this.applicationId&&(s[t_]=this.applicationId),this.appCheckToken&&(s[Iu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(s[Xg]=Jg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lE()&&!aE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xm(n),l=Kg(s,TE);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[NE]="t",s[o_]=e,s[l_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class id{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nE(),window[xE+this.uniqueCallbackIdentifier]=e,window[CE+this.uniqueCallbackIdentifier]=n,this.myIFrame=id.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Je("frame writing exception"),f.stack&&Je(f.stack),Je(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[o_]=this.myID,e[l_]=this.myPW,e[a_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+u_+s.length<=c_;){const u=this.pendingSegs.shift();s=s+"&"+SE+l+"="+u.seg+"&"+IE+l+"="+u.ts+"&"+kE+l+"="+u.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(RE)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const AE=16384,bE=45e3;let Cl=null;typeof MozWebSocket<"u"?Cl=MozWebSocket:typeof WebSocket<"u"&&(Cl=WebSocket);class $t{constructor(e,n,s,l,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=rd(n),this.connURL=$t.connectionURL_(n,u,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const u={};return u[qg]=nd,typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(u[Xg]=Jg),n&&(u[Yg]=n),s&&(u[e_]=s),l&&(u[Iu]=l),c&&(u[t_]=c),s_(e,n_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;R0(),this.mySock=new Cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cl!==null&&!$t.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Kg(n,AE);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Es{static get ALL_TRANSPORTS(){return[ni,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const c of Es.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const OE=6e4,DE=5e3,LE=10*1024,ME=100*1024,au="t",_m="d",jE="s",ym="r",FE="e",vm="o",wm="a",xm="n",Cm="p",UE="h";class zE{constructor(e,n,s,l,c,u,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ME?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(au in e){const n=e[au];n===wm?this.upgradeIfSecondaryHealthy_():n===ym?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(au,e);if(_m in e){const s=e[_m];if(n===UE){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jE?this.onConnectionShutdown_(s):n===ym?this.onReset_(s):n===FE?Su("Server Error: "+s):n===vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Su("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nd!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class El extends h_{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Em=32,Sm=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new xe("")}function ae(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function ke(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new xe(r.pieces_,e)}function sd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function WE(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ss(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function f_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new xe(e,0)}function Le(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new xe(n,0)}function de(r){return r.pieceNum_>=r.pieces_.length}function ut(r,e){const n=ae(r),s=ae(e);if(n===null)return e;if(n===s)return ut(ke(r),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function VE(r,e){const n=Ss(r,0),s=Ss(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=Nr(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function od(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class BE{constructor(e,n){this.errorPrefix_=n,this.parts_=Ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jl(this.parts_[s]);p_(this)}}function HE(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=jl(e),p_(r)}function $E(r){const e=r.parts_.pop();r.byteLength_-=jl(e),r.parts_.length>0&&(r.byteLength_-=1)}function p_(r){if(r.byteLength_>Sm)throw new Error(r.errorPrefix_+"has a key path longer than "+Sm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Em)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Em+") or object contains a cycle "+vr(r))}function vr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class ld extends h_{static getInstance(){return new ld}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const us=1e3,GE=300*1e3,Im=30*1e3,KE=1.3,QE=3e4,qE="server_kill",km=3;class gn extends d_{constructor(e,n,s,l,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=GE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ld.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(He(c)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new bs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,g=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const s=ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||M0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Im)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=L0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,u=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";l&&(c.q=s,c.t=l),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{l&&setTimeout(()=>{l(u.s,u.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Su("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QE&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(x){j(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(x)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=v&&v.token,f=new zE(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{dt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(qE)},c))}catch(x){this.log_("Failed to get token: "+x),u||(this.repoInfo_.nodeAdmin&&dt(x),p())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mu(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>td(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=km&&(this.reconnectDelay_=Im,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hg.replace(/\./g,"-")]=1,Bu()?e["framework.cordova"]=1:ig()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return mu(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */let rl;class m_ extends Vl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Sr,rl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,rl)}toString(){return".key"}}const li=new m_;/**
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
 */class il{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,l&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??qe.RED,this.left=l??xt.EMPTY_NODE,this.right=c??xt.EMPTY_NODE}copy(e,n,s,l,c){return new qe(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class YE{copy(e,n,s,l,c){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new YE;/**
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
 */function XE(r,e){return Nr(r.name,e.name)}function ad(r,e){return Nr(r,e)}/**
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
 */let ku;function JE(r){ku=r}const g_=function(r){return typeof r=="number"?"number:"+Qg(r):"string:"+r},__=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else j(r===ku||r.isEmpty(),"priority of unexpected type.");j(r===ku||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nm;class Qe{static set __childrenNodeConstructor(e){Nm=e}static get __childrenNodeConstructor(){return Nm}constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:ae(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+g_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qg(this.value_):e+=this.value_,this.lazyHash_=Gg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Qe.VALUE_TYPE_ORDER.indexOf(n),c=Qe.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let y_,v_;function ZE(r){y_=r}function eS(r){v_=r}class tS extends Vl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?Nr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Sr,new Qe("[PRIORITY-POST]",v_))}makePost(e,n){const s=y_(e);return new ce(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new tS;/**
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
 */const nS=Math.log(2);class rS{constructor(e){const n=c=>parseInt(Math.log(c)/nS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sl=function(r,e,n,s){r.sort(e);const l=function(p,g){const y=g-p;let x,v;if(y===0)return null;if(y===1)return x=r[p],v=n?n(x):x,new qe(v,x.node,qe.BLACK,null,null);{const N=parseInt(y/2,10)+p,P=l(p,N),F=l(N+1,g);return x=r[N],v=n?n(x):x,new qe(v,x.node,qe.BLACK,P,F)}},c=function(p){let g=null,y=null,x=r.length;const v=function(P,F){const U=x-P,R=x;x-=P;const L=l(U+1,R),q=r[U],Y=n?n(q):q;N(new qe(Y,q.node,F,null,L))},N=function(P){g?(g.left=P,g=P):(y=P,g=P)};for(let P=0;P<p.count;++P){const F=p.nextBitIsOne(),U=Math.pow(2,p.count-(P+1));F?v(U,qe.BLACK):(v(U,qe.BLACK),v(U,qe.RED))}return y},u=new rS(r.length),f=c(u);return new xt(s||e,f)};/**
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
 */let cu;const ei={};class mn{static get Default(){return j(ei&&Me,"ChildrenNode.ts has not been loaded"),cu=cu||new mn({".priority":ei},{".priority":Me}),cu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(ce.Wrap);let u=c.getNext();for(;u;)l=l||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;l?f=Sl(s,e.getCompare()):f=ei;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=f,new mn(y,g)}addToIndexes(e,n){const s=pl(this.indexes_,(l,c)=>{const u=ai(this.indexSet_,c);if(j(u,"Missing index implementation for "+c),l===ei)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(ce.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Sl(f,u.getCompare())}else return ei;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ce(e.name,f))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=pl(this.indexes_,l=>{if(l===ei)return l;{const c=n.get(e.name);return c?l.remove(new ce(e.name,c)):l}});return new mn(s,this.indexSet_)}}/**
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
 */let ds;class J{static get EMPTY_NODE(){return ds||(ds=new J(new xt(ad),null,mn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=l.isEmpty()?ds:this.priorityNode_;return new J(l,u,c)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{j(ae(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(Me,(u,f)=>{n[u]=f.val(e),s++,c&&J.INTEGER_REGEXP_.test(u)?l=Math.max(l,Number(u)):c=!1}),!e&&c&&l<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+g_(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Gg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ce(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),l=n.getIterator(Me);let c=s.getNext(),u=l.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=l.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===li?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iS extends J{constructor(){super(new xt(ad),J.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Us=new iS;Object.defineProperties(ce,{MIN:{value:new ce(ui,J.EMPTY_NODE)},MAX:{value:new ce(Sr,Us)}});m_.__EMPTY_NODE=J.EMPTY_NODE;Qe.__childrenNodeConstructor=J;JE(Us);eS(Us);/**
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
 */const sS=!0;function Be(r,e=null){if(r===null)return J.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Qe(n,Be(e))}if(!(r instanceof Array)&&sS){const n=[];let s=!1;if(tt(r,(u,f)=>{if(u.substring(0,1)!=="."){const p=Be(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ce(u,p)))}}),n.length===0)return J.EMPTY_NODE;const c=Sl(n,XE,u=>u.name,ad);if(s){const u=Sl(n,Me.getCompare());return new J(c,Be(e),new mn({".priority":u},{".priority":Me}))}else return new J(c,Be(e),mn.Default)}else{let n=J.EMPTY_NODE;return tt(r,(s,l)=>{if(rn(r,s)&&s.substring(0,1)!=="."){const c=Be(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Be(e))}}ZE(Be);/**
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
 */class oS extends Vl{constructor(e){super(),this.indexPath_=e,j(!de(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?Nr(e.name,n.name):c}makePost(e,n){const s=Be(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Us);return new ce(Sr,e)}toString(){return Ss(this.indexPath_,0).join("/")}}/**
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
 */class lS extends Vl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=Be(e);return new ce(n,s)}toString(){return".value"}}const aS=new lS;/**
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
 */function w_(r){return{type:"value",snapshotNode:r}}function di(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Is(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function ks(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function cS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class cd{constructor(e){this.index_=e}updateChild(e,n,s,l,c,u){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Is(n,f)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(di(n,s)):u.trackChildChange(ks(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(l,c)=>{n.hasChild(l)||s.trackChildChange(Is(l,c))}),n.isLeafNode()||n.forEachChild(Me,(l,c)=>{if(e.hasChild(l)){const u=e.getImmediateChild(l);u.equals(c)||s.trackChildChange(ks(l,c,u))}else s.trackChildChange(di(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ns{constructor(e){this.indexedFilter_=new cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,u){return this.matches(new ce(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const c=this;return n.forEachChild(Me,(u,f)=>{c.matches(new ce(u,f))||(l=l.updateImmediateChild(u,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class uS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,u){return this.rangedFilter_.matches(new ce(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let u=0;for(;c.hasNext();){const f=c.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let u;if(this.reverse_){const x=this.index_.getCompare();u=(v,N)=>x(N,v)}else u=this.index_.getCompare();const f=e;j(f.numChildren()===this.limit_,"");const p=new ce(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const x=f.getImmediateChild(n);let v=l.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=l.getChildAfterChild(this.index_,v,this.reverse_);const N=v==null?1:u(v,p);if(y&&!s.isEmpty()&&N>=0)return c!=null&&c.trackChildChange(ks(n,s,x)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Is(n,x));const F=f.updateImmediateChild(n,J.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(c!=null&&c.trackChildChange(di(v.name,v.node)),F.updateImmediateChild(v.name,v.node)):F}}else return s.isEmpty()?e:y&&u(g,p)>=0?(c!=null&&(c.trackChildChange(Is(g.name,g.node)),c.trackChildChange(di(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,J.EMPTY_NODE)):e}}/**
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
 */class ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ui}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dS(r){return r.loadsAllData()?new cd(r.getIndex()):r.hasLimit()?new uS(r):new Ns(r)}function Tm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Me?n="$priority":r.index_===aS?n="$value":r.index_===li?n="$key":(j(r.index_ instanceof oS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Rm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Me&&(e.i=r.index_.toString()),e}/**
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
 */class Il extends d_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Fs("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=Il.getListenId_(e,s),f={};this.listens_[u]=f;const p=Tm(e._queryParams);this.restRequest_(c+".json",p,(g,y)=>{let x=y;if(g===404&&(x=null,g=null),g===null&&this.onDataUpdate_(c,x,!1,s),ai(this.listens_,u)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",l(v,null)}})}unlisten(e,n){const s=Il.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tm(e._queryParams),s=e._path.toString(),l=new bs;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ws(f.responseText)}catch{dt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&dt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class hS{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function kl(){return{value:null,children:new Map}}function x_(r,e,n){if(de(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ae(e);r.children.has(s)||r.children.set(s,kl());const l=r.children.get(s);e=ke(e),x_(l,e,n)}}function Nu(r,e,n){r.value!==null?n(e,r.value):fS(r,(s,l)=>{const c=new xe(e.toString()+"/"+s);Nu(l,c,n)})}function fS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class pS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&tt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Pm=10*1e3,mS=30*1e3,gS=300*1e3;class _S{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pS(e);const s=Pm+(mS-Pm)*Math.random();gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(l,c)=>{c>0&&rn(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*gS))}}/**
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
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function dd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Nl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=dd()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Nl(ge(),n,this.revert)}}else return j(ae(this.path)===e,"operationForChild called for unrelated child."),new Nl(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Ts(this.source,ge()):new Ts(this.source,ke(this.path))}}/**
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
 */class Ir{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return de(this.path)?new Ir(this.source,ge(),this.snap.getImmediateChild(e)):new Ir(this.source,ke(this.path),this.snap)}}/**
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
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Ir(this.source,ge(),n.value):new hi(this.source,ge(),n)}else return j(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vS(r,e,n,s){const l=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&r.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(cS(u.childName,u.snapshotNode))}),hs(r,l,"child_removed",e,s,n),hs(r,l,"child_added",e,s,n),hs(r,l,"child_moved",c,s,n),hs(r,l,"child_changed",e,s,n),hs(r,l,"value",e,s,n),l}function hs(r,e,n,s,l,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>xS(r,f,p)),u.forEach(f=>{const p=wS(r,f,c);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function wS(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function xS(r,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),l=new ce(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function Bl(r,e){return{eventCache:r,serverCache:e}}function _s(r,e,n,s){return Bl(new tr(e,n,s),r.serverCache)}function C_(r,e,n,s){return Bl(r.eventCache,new tr(e,n,s))}function Tl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function kr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let uu;const CS=()=>(uu||(uu=new xt(oE)),uu);class Ie{static fromObject(e){let n=new Ie(null);return tt(e,(s,l)=>{n=n.set(new xe(s),l)}),n}constructor(e,n=CS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(de(e))return null;{const s=ae(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(ke(e),n);return c!=null?{path:Le(new xe(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Ie(null)}}set(e,n){if(de(e))return new Ie(n,this.children);{const s=ae(e),c=(this.children.get(s)||new Ie(null)).set(ke(e),n),u=this.children.insert(s,c);return new Ie(this.value,u)}}remove(e){if(de(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const l=s.remove(ke(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new Ie(null):new Ie(this.value,c)}else return this}}get(e){if(de(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(de(e))return n;{const s=ae(e),c=(this.children.get(s)||new Ie(null)).setTree(ke(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new Ie(this.value,u)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(de(e))return null;{const c=ae(e),u=this.children.get(c);return u?u.findOnPath_(ke(e),Le(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(de(e))return this;{this.value&&s(n,this.value);const l=ae(e),c=this.children.get(l);return c?c.foreachOnPath_(ke(e),Le(n,l),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new Ie(null))}}function ys(r,e,n){if(de(e))return new Qt(new Ie(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const u=ut(l,e);return c=c.updateChild(u,n),new Qt(r.writeTree_.set(l,c))}else{const l=new Ie(n),c=r.writeTree_.setTree(e,l);return new Qt(c)}}}function Tu(r,e,n){let s=r;return tt(n,(l,c)=>{s=ys(s,Le(e,l),c)}),s}function Am(r,e){if(de(e))return Qt.empty();{const n=r.writeTree_.setTree(e,new Ie(null));return new Qt(n)}}function Ru(r,e){return Tr(r,e)!=null}function Tr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function bm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,l)=>{e.push(new ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ce(s,l.value))}),e}function Xn(r,e){if(de(e))return r;{const n=Tr(r,e);return n!=null?new Qt(new Ie(n)):new Qt(r.writeTree_.subtree(e))}}function Pu(r){return r.writeTree_.isEmpty()}function fi(r,e){return E_(ge(),r.writeTree_,e)}function E_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(j(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=E_(Le(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Le(r,".priority"),s)),n}}/**
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
 */function Hl(r,e){return N_(e,r)}function ES(r,e,n,s,l){j(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ys(r.visibleWrites,e,n)),r.lastWriteId=s}function SS(r,e,n,s){j(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Tu(r.visibleWrites,e,n),r.lastWriteId=s}function IS(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function kS(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,u=r.allWrites.length-1;for(;l&&u>=0;){const f=r.allWrites[u];f.visible&&(u>=n&&NS(f,s.path)?l=!1:Dt(s.path,f.path)&&(c=!0)),u--}if(l){if(c)return TS(r),!0;if(s.snap)r.visibleWrites=Am(r.visibleWrites,s.path);else{const f=s.children;tt(f,p=>{r.visibleWrites=Am(r.visibleWrites,Le(s.path,p))})}return!0}else return!1}function NS(r,e){if(r.snap)return Dt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Dt(Le(r.path,n),e))return!0;return!1}function TS(r){r.visibleWrites=S_(r.allWrites,RS,ge()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function RS(r){return r.visible}function S_(r,e,n){let s=Qt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const u=c.path;let f;if(c.snap)Dt(n,u)?(f=ut(n,u),s=ys(s,f,c.snap)):Dt(u,n)&&(f=ut(u,n),s=ys(s,ge(),c.snap.getChild(f)));else if(c.children){if(Dt(n,u))f=ut(n,u),s=Tu(s,f,c.children);else if(Dt(u,n))if(f=ut(u,n),de(f))s=Tu(s,ge(),c.children);else{const p=ai(c.children,ae(f));if(p){const g=p.getChild(ke(f));s=ys(s,ge(),g)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function I_(r,e,n,s,l){if(!s&&!l){const c=Tr(r.visibleWrites,e);if(c!=null)return c;{const u=Xn(r.visibleWrites,e);if(Pu(u))return n;if(n==null&&!Ru(u,ge()))return null;{const f=n||J.EMPTY_NODE;return fi(u,f)}}}else{const c=Xn(r.visibleWrites,e);if(!l&&Pu(c))return n;if(!l&&n==null&&!Ru(c,ge()))return null;{const u=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Dt(g.path,e)||Dt(e,g.path))},f=S_(r.allWrites,u,e),p=n||J.EMPTY_NODE;return fi(f,p)}}}function PS(r,e,n){let s=J.EMPTY_NODE;const l=Tr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Me,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=Xn(r.visibleWrites,e);return n.forEachChild(Me,(u,f)=>{const p=fi(Xn(c,new xe(u)),f);s=s.updateImmediateChild(u,p)}),bm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=Xn(r.visibleWrites,e);return bm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function AS(r,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Le(e,n);if(Ru(r.visibleWrites,c))return null;{const u=Xn(r.visibleWrites,c);return Pu(u)?l.getChild(n):fi(u,l.getChild(n))}}function bS(r,e,n,s){const l=Le(e,n),c=Tr(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=Xn(r.visibleWrites,l);return fi(u,s.getNode().getImmediateChild(n))}else return null}function OS(r,e){return Tr(r.visibleWrites,e)}function DS(r,e,n,s,l,c,u){let f;const p=Xn(r.visibleWrites,e),g=Tr(p,ge());if(g!=null)f=g;else if(n!=null)f=fi(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],x=u.getCompare(),v=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let N=v.getNext();for(;N&&y.length<l;)x(N,s)!==0&&y.push(N),N=v.getNext();return y}else return[]}function LS(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function Rl(r,e,n,s){return I_(r.writeTree,r.treePath,e,n,s)}function pd(r,e){return PS(r.writeTree,r.treePath,e)}function Om(r,e,n,s){return AS(r.writeTree,r.treePath,e,n,s)}function Pl(r,e){return OS(r.writeTree,Le(r.treePath,e))}function MS(r,e,n,s,l,c){return DS(r.writeTree,r.treePath,e,n,s,l,c)}function md(r,e,n){return bS(r.writeTree,r.treePath,e,n)}function k_(r,e){return N_(Le(r.treePath,e),r.writeTree)}function N_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class jS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Is(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,di(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,l.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const T_=new FS;class gd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return md(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),c=MS(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
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
 */function US(r){return{filter:r}}function zS(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function WS(r,e,n,s,l){const c=new jS;let u,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?u=Au(r,e,g.path,g.snap,s,l,c):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!de(g.path),u=Al(r,e,g.path,g.snap,s,l,f,c))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?u=BS(r,e,g.path,g.children,s,l,c):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=bu(r,e,g.path,g.children,s,l,f,c))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?u=GS(r,e,g.path,s,l,c):u=HS(r,e,g.path,g.affectedTree,s,l,c)}else if(n.type===Kt.LISTEN_COMPLETE)u=$S(r,e,n.path,s,c);else throw mi("Unknown operation type: "+n.type);const p=c.getChanges();return VS(e,u,p),{viewCache:u,changes:p}}function VS(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Tl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(w_(Tl(e)))}}function R_(r,e,n,s,l,c){const u=e.eventCache;if(Pl(s,n)!=null)return e;{let f,p;if(de(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=kr(e),y=g instanceof J?g:J.EMPTY_NODE,x=pd(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),x,c)}else{const g=Rl(s,kr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=ae(n);if(g===".priority"){j(er(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const x=Om(s,n,y,p);x!=null?f=r.filter.updatePriority(y,x):f=u.getNode()}else{const y=ke(n);let x;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const v=Om(s,n,u.getNode(),p);v!=null?x=u.getNode().getImmediateChild(g).updateChild(y,v):x=u.getNode().getImmediateChild(g)}else x=md(s,g,e.serverCache);x!=null?f=r.filter.updateChild(u.getNode(),g,x,y,l,c):f=u.getNode()}}return _s(e,f,u.isFullyInitialized()||de(n),r.filter.filtersNodes())}}function Al(r,e,n,s,l,c,u,f){const p=e.serverCache;let g;const y=u?r.filter:r.filter.getIndexedFilter();if(de(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),N,null)}else{const N=ae(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const P=ke(n),U=p.getNode().getImmediateChild(N).updateChild(P,s);N===".priority"?g=y.updatePriority(p.getNode(),U):g=y.updateChild(p.getNode(),N,U,P,T_,null)}const x=C_(e,g,p.isFullyInitialized()||de(n),y.filtersNodes()),v=new gd(l,x,c);return R_(r,x,n,l,v,f)}function Au(r,e,n,s,l,c,u){const f=e.eventCache;let p,g;const y=new gd(l,e,c);if(de(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,u),p=_s(e,g,!0,r.filter.filtersNodes());else{const x=ae(n);if(x===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=_s(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=ke(n),N=f.getNode().getImmediateChild(x);let P;if(de(v))P=s;else{const F=y.getCompleteChild(x);F!=null?sd(v)===".priority"&&F.getChild(f_(v)).isEmpty()?P=F:P=F.updateChild(v,s):P=J.EMPTY_NODE}if(N.equals(P))p=e;else{const F=r.filter.updateChild(f.getNode(),x,P,v,y,u);p=_s(e,F,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Dm(r,e){return r.eventCache.isCompleteForChild(e)}function BS(r,e,n,s,l,c,u){let f=e;return s.foreach((p,g)=>{const y=Le(n,p);Dm(e,ae(y))&&(f=Au(r,f,y,g,l,c,u))}),s.foreach((p,g)=>{const y=Le(n,p);Dm(e,ae(y))||(f=Au(r,f,y,g,l,c,u))}),f}function Lm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function bu(r,e,n,s,l,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;de(n)?g=s:g=new Ie(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((x,v)=>{if(y.hasChild(x)){const N=e.serverCache.getNode().getImmediateChild(x),P=Lm(r,N,v);p=Al(r,p,new xe(x),P,l,c,u,f)}}),g.children.inorderTraversal((x,v)=>{const N=!e.serverCache.isCompleteForChild(x)&&v.value===null;if(!y.hasChild(x)&&!N){const P=e.serverCache.getNode().getImmediateChild(x),F=Lm(r,P,v);p=Al(r,p,new xe(x),F,l,c,u,f)}}),p}function HS(r,e,n,s,l,c,u){if(Pl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(de(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Al(r,e,n,p.getNode().getChild(n),l,c,f,u);if(de(n)){let g=new Ie(null);return p.getNode().forEachChild(li,(y,x)=>{g=g.set(new xe(y),x)}),bu(r,e,n,g,l,c,f,u)}else return e}else{let g=new Ie(null);return s.foreach((y,x)=>{const v=Le(n,y);p.isCompleteForPath(v)&&(g=g.set(y,p.getNode().getChild(v)))}),bu(r,e,n,g,l,c,f,u)}}function $S(r,e,n,s,l){const c=e.serverCache,u=C_(e,c.getNode(),c.isFullyInitialized()||de(n),c.isFiltered());return R_(r,u,n,s,T_,l)}function GS(r,e,n,s,l,c){let u;if(Pl(s,n)!=null)return e;{const f=new gd(s,e,l),p=e.eventCache.getNode();let g;if(de(n)||ae(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Rl(s,kr(e));else{const x=e.serverCache.getNode();j(x instanceof J,"serverChildren would be complete if leaf node"),y=pd(s,x)}y=y,g=r.filter.updateFullNode(p,y,c)}else{const y=ae(n);let x=md(s,y,e.serverCache);x==null&&e.serverCache.isCompleteForChild(y)&&(x=p.getImmediateChild(y)),x!=null?g=r.filter.updateChild(p,y,x,ke(n),f,c):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(p,y,J.EMPTY_NODE,ke(n),f,c):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Rl(s,kr(e)),u.isLeafNode()&&(g=r.filter.updateFullNode(g,u,c)))}return u=e.serverCache.isFullyInitialized()||Pl(s,ge())!=null,_s(e,g,u,r.filter.filtersNodes())}}/**
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
 */class KS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new cd(s.getIndex()),c=dS(s);this.processor_=US(c);const u=n.serverCache,f=n.eventCache,p=l.updateFullNode(J.EMPTY_NODE,u.getNode(),null),g=c.updateFullNode(J.EMPTY_NODE,f.getNode(),null),y=new tr(p,u.isFullyInitialized(),l.filtersNodes()),x=new tr(g,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Bl(x,y),this.eventGenerator_=new yS(this.query_)}get query(){return this.query_}}function QS(r){return r.viewCache_.serverCache.getNode()}function qS(r){return Tl(r.viewCache_)}function YS(r,e){const n=kr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Mm(r){return r.eventRegistrations_.length===0}function XS(r,e){r.eventRegistrations_.push(e)}function jm(r,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,l);u&&s.push(u)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const u=r.eventRegistrations_[c];if(!u.matches(e))l.push(u);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Fm(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(j(kr(r.viewCache_),"We should always have a full cache before handling merges"),j(Tl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=WS(r.processor_,l,e,n,s);return zS(r.processor_,c.viewCache),j(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,P_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function JS(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(c,u)=>{s.push(di(c,u))}),n.isFullyInitialized()&&s.push(w_(n.getNode())),P_(r,s,n.getNode(),e)}function P_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return vS(r.eventGenerator_,e,n,l)}/**
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
 */let bl;class A_{constructor(){this.views=new Map}}function ZS(r){j(!bl,"__referenceConstructor has already been defined"),bl=r}function e1(){return j(bl,"Reference.ts has not been loaded"),bl}function t1(r){return r.views.size===0}function _d(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return j(c!=null,"SyncTree gave us an op for an invalid query."),Fm(c,e,n,s)}else{let c=[];for(const u of r.views.values())c=c.concat(Fm(u,e,n,s));return c}}function b_(r,e,n,s,l){const c=e._queryIdentifier,u=r.views.get(c);if(!u){let f=Rl(n,l?s:null),p=!1;f?p=!0:s instanceof J?(f=pd(n,s),p=!1):(f=J.EMPTY_NODE,p=!1);const g=Bl(new tr(f,p,!1),new tr(s,l,!1));return new KS(e,g)}return u}function n1(r,e,n,s,l,c){const u=b_(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,u),XS(u,n),JS(u,n)}function r1(r,e,n,s){const l=e._queryIdentifier,c=[];let u=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())u=u.concat(jm(g,n,s)),Mm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||c.push(g.query));else{const p=r.views.get(l);p&&(u=u.concat(jm(p,n,s)),Mm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!nr(r)&&c.push(new(e1())(e._repo,e._path)),{removed:c,events:u}}function O_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jn(r,e){let n=null;for(const s of r.views.values())n=n||YS(s,e);return n}function D_(r,e){if(e._queryParams.loadsAllData())return $l(r);{const s=e._queryIdentifier;return r.views.get(s)}}function L_(r,e){return D_(r,e)!=null}function nr(r){return $l(r)!=null}function $l(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ol;function i1(r){j(!Ol,"__referenceConstructor has already been defined"),Ol=r}function s1(){return j(Ol,"Reference.ts has not been loaded"),Ol}let o1=1;class Um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=LS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function M_(r,e,n,s,l){return ES(r.pendingWriteTree_,e,n,s,l),l?xi(r,new Ir(dd(),e,n)):[]}function l1(r,e,n,s){SS(r.pendingWriteTree_,e,n,s);const l=Ie.fromObject(n);return xi(r,new hi(dd(),e,l))}function Gn(r,e,n=!1){const s=IS(r.pendingWriteTree_,e);if(kS(r.pendingWriteTree_,e)){let c=new Ie(null);return s.snap!=null?c=c.set(ge(),!0):tt(s.children,u=>{c=c.set(new xe(u),!0)}),xi(r,new Nl(s.path,c,n))}else return[]}function zs(r,e,n){return xi(r,new Ir(hd(),e,n))}function a1(r,e,n){const s=Ie.fromObject(n);return xi(r,new hi(hd(),e,s))}function c1(r,e){return xi(r,new Ts(hd(),e))}function u1(r,e,n){const s=vd(r,n);if(s){const l=wd(s),c=l.path,u=l.queryId,f=ut(c,e),p=new Ts(fd(u),f);return xd(r,c,p)}else return[]}function Dl(r,e,n,s,l=!1){const c=e._path,u=r.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||L_(u,e))){const p=r1(u,e,n,s);t1(u)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,x=r.syncPointTree_.findOnPath(c,(v,N)=>nr(N));if(y&&!x){const v=r.syncPointTree_.subtree(c);if(!v.isEmpty()){const N=f1(v);for(let P=0;P<N.length;++P){const F=N[P],U=F.query,R=z_(r,F);r.listenProvider_.startListening(vs(U),Rs(r,U),R.hashFn,R.onComplete)}}}!x&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(vs(e),null):g.forEach(v=>{const N=r.queryToTagMap.get(Gl(v));r.listenProvider_.stopListening(vs(v),N)}))}p1(r,g)}return f}function j_(r,e,n,s){const l=vd(r,s);if(l!=null){const c=wd(l),u=c.path,f=c.queryId,p=ut(u,e),g=new Ir(fd(f),p,n);return xd(r,u,g)}else return[]}function d1(r,e,n,s){const l=vd(r,s);if(l){const c=wd(l),u=c.path,f=c.queryId,p=ut(u,e),g=Ie.fromObject(n),y=new hi(fd(f),p,g);return xd(r,u,y)}else return[]}function Ou(r,e,n,s=!1){const l=e._path;let c=null,u=!1;r.syncPointTree_.foreachOnPath(l,(v,N)=>{const P=ut(v,l);c=c||Jn(N,P),u=u||nr(N)});let f=r.syncPointTree_.get(l);f?(u=u||nr(f),c=c||Jn(f,ge())):(f=new A_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;c!=null?p=!0:(p=!1,c=J.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((N,P)=>{const F=Jn(P,ge());F&&(c=c.updateImmediateChild(N,F))}));const g=L_(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=Gl(e);j(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const N=m1();r.queryToTagMap.set(v,N),r.tagToQueryMap.set(N,v)}const y=Hl(r.pendingWriteTree_,l);let x=n1(f,e,n,y,c,p);if(!g&&!u&&!s){const v=D_(f,e);x=x.concat(g1(r,e,v))}return x}function yd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(u,f)=>{const p=ut(u,e),g=Jn(f,p);if(g)return g});return I_(l,e,c,n,!0)}function h1(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,y)=>{const x=ut(g,n);s=s||Jn(y,x)});let l=r.syncPointTree_.get(n);l?s=s||Jn(l,ge()):(l=new A_,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=s!=null,u=c?new tr(s,!0,!1):null,f=Hl(r.pendingWriteTree_,e._path),p=b_(l,e,f,c?u.getNode():J.EMPTY_NODE,c);return qS(p)}function xi(r,e){return F_(e,r.syncPointTree_,null,Hl(r.pendingWriteTree_,ge()))}function F_(r,e,n,s){if(de(r.path))return U_(r,e,n,s);{const l=e.get(ge());n==null&&l!=null&&(n=Jn(l,ge()));let c=[];const u=ae(r.path),f=r.operationForChild(u),p=e.children.get(u);if(p&&f){const g=n?n.getImmediateChild(u):null,y=k_(s,u);c=c.concat(F_(f,p,g,y))}return l&&(c=c.concat(_d(l,r,s,n))),c}}function U_(r,e,n,s){const l=e.get(ge());n==null&&l!=null&&(n=Jn(l,ge()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,g=k_(s,u),y=r.operationForChild(u);y&&(c=c.concat(U_(y,f,p,g)))}),l&&(c=c.concat(_d(l,r,s,n))),c}function z_(r,e){const n=e.query,s=Rs(r,n);return{hashFn:()=>(QS(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?u1(r,n._path,s):c1(r,n._path);{const c=cE(l,n);return Dl(r,n,null,c)}}}}function Rs(r,e){const n=Gl(e);return r.queryToTagMap.get(n)}function Gl(r){return r._path.toString()+"$"+r._queryIdentifier}function vd(r,e){return r.tagToQueryMap.get(e)}function wd(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new xe(r.substr(0,e))}}function xd(r,e,n){const s=r.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=Hl(r.pendingWriteTree_,e);return _d(s,n,l,null)}function f1(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[$l(n)];{let l=[];return n&&(l=O_(n)),tt(s,(c,u)=>{l=l.concat(u)}),l}})}function vs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(s1())(r._repo,r._path):r}function p1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Gl(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function m1(){return o1++}function g1(r,e,n){const s=e._path,l=Rs(r,e),c=z_(r,n),u=r.listenProvider_.startListening(vs(e),l,c.hashFn,c.onComplete),f=r.syncPointTree_.subtree(s);if(l)j(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,x)=>{if(!de(g)&&y&&nr(y))return[$l(y).query];{let v=[];return y&&(v=v.concat(O_(y).map(N=>N.query))),tt(x,(N,P)=>{v=v.concat(P)}),v}});for(let g=0;g<p.length;++g){const y=p[g];r.listenProvider_.stopListening(vs(y),Rs(r,y))}}return u}/**
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
 */class Cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cd(n)}node(){return this.node_}}class Ed{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Ed(this.syncTree_,n)}node(){return yd(this.syncTree_,this.path_)}}const _1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},zm=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return y1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return v1(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},y1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},v1=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const u=l.getValue();return typeof u!="number"?s:u+s},W_=function(r,e,n,s){return Sd(e,new Ed(n,r),s)},V_=function(r,e,n){return Sd(r,new Cd(e),n)};function Sd(r,e,n){const s=r.getPriority().val(),l=zm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const u=r,f=zm(u.getValue(),e,n);return f!==u.getValue()||l!==u.getPriority().val()?new Qe(f,Be(l)):r}else{const u=r;return c=u,l!==u.getPriority().val()&&(c=c.updatePriority(new Qe(l))),u.forEachChild(Me,(f,p)=>{const g=Sd(p,e.getImmediateChild(f),n);g!==p&&(c=c.updateImmediateChild(f,g))}),c}}/**
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
 */class Id{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function kd(r,e){let n=e instanceof xe?e:new xe(e),s=r,l=ae(n);for(;l!==null;){const c=ai(s.node.children,l)||{children:{},childCount:0};s=new Id(l,s,c),n=ke(n),l=ae(n)}return s}function Ci(r){return r.node.value}function B_(r,e){r.node.value=e,Du(r)}function H_(r){return r.node.childCount>0}function w1(r){return Ci(r)===void 0&&!H_(r)}function Kl(r,e){tt(r.node.children,(n,s)=>{e(new Id(n,r,s))})}function $_(r,e,n,s){n&&e(r),Kl(r,l=>{$_(l,e,!0)})}function x1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(r){return new xe(r.parent===null?r.name:Ws(r.parent)+"/"+r.name)}function Du(r){r.parent!==null&&C1(r.parent,r.name,r)}function C1(r,e,n){const s=w1(n),l=rn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Du(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Du(r))}/**
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
 */const E1=/[\[\].#$\/\u0000-\u001F\u007F]/,S1=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Nd=function(r){return typeof r=="string"&&r.length!==0&&!E1.test(r)},G_=function(r){return typeof r=="string"&&r.length!==0&&!S1.test(r)},I1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),G_(r)},k1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!ed(r)||r&&typeof r=="object"&&rn(r,".sv")},N1=function(r,e,n,s){Ql(Ml(r,"value"),e,n)},Ql=function(r,e,n){const s=n instanceof xe?new BE(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(r+"contains a function "+vr(s)+" with contents = "+e.toString());if(ed(e))throw new Error(r+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>du/3&&jl(e)>du)throw new Error(r+"contains a string greater than "+du+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(tt(e,(u,f)=>{if(u===".value")l=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!Nd(u)))throw new Error(r+" contains an invalid key ("+u+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HE(s,u),Ql(r,f,s),$E(s)}),l&&c)throw new Error(r+' contains ".value" child '+vr(s)+" in addition to actual children.")}},T1=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=Ss(s);for(let u=0;u<c.length;u++)if(!(c[u]===".priority"&&u===c.length-1)){if(!Nd(c[u]))throw new Error(r+"contains an invalid key ("+c[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(VE);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Dt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},R1=function(r,e,n,s){const l=Ml(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];tt(e,(u,f)=>{const p=new xe(u);if(Ql(l,f,Le(n,p)),sd(p)===".priority"&&!k1(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(p)}),T1(l,c)},K_=function(r,e,n,s){if(!G_(n))throw new Error(Ml(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),K_(r,e,n)},Q_=function(r,e){if(ae(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},A1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!I1(n))throw new Error(Ml(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!od(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function q_(r,e,n){ql(r,n),Y_(r,s=>od(s,e))}function Lt(r,e,n){ql(r,n),Y_(r,s=>Dt(s,e)||Dt(e,s))}function Y_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(O1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function O1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ms&&Je("event: "+n.toString()),wi(s)}}}/**
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
 */const D1="repo_interrupt",L1=25;class M1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kl(),this.transactionQueueTree_=new Id,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j1(r,e,n){if(r.stats_=rd(r.repoInfo_),r.forceRestClient_||fE())r.server_=new Il(r.repoInfo_,(s,l,c,u)=>{Wm(r,s,l,c,u)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Vm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new gn(r.repoInfo_,e,(s,l,c,u)=>{Wm(r,s,l,c,u)},s=>{Vm(r,s)},s=>{U1(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=yE(r.repoInfo_,()=>new _S(r.stats_,r.server_)),r.infoData_=new hS,r.infoSyncTree_=new Um({startListening:(s,l,c,u)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=zs(r.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Td(r,"connected",!1),r.serverSyncTree_=new Um({startListening:(s,l,c,u)=>(r.server_.listen(s,c,l,(f,p)=>{const g=u(f,p);Lt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function F1(r){const n=r.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(r){return _1({timestamp:F1(r)})}function Wm(r,e,n,s,l){r.dataUpdateCount++;const c=new xe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let u=[];if(l)if(s){const p=pl(n,g=>Be(g));u=d1(r.serverSyncTree_,c,p,l)}else{const p=Be(n);u=j_(r.serverSyncTree_,c,p,l)}else if(s){const p=pl(n,g=>Be(g));u=a1(r.serverSyncTree_,c,p)}else{const p=Be(n);u=zs(r.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=pi(r,c)),Lt(r.eventQueue_,f,u)}function Vm(r,e){Td(r,"connected",e),e===!1&&B1(r)}function U1(r,e){tt(e,(n,s)=>{Td(r,n,s)})}function Td(r,e,n){const s=new xe("/.info/"+e),l=Be(n);r.infoData_.updateSnapshot(s,l);const c=zs(r.infoSyncTree_,s,l);Lt(r.eventQueue_,s,c)}function Rd(r){return r.nextWriteId_++}function z1(r,e,n){const s=h1(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=Be(l).withIndex(e._queryParams.getIndex());Ou(r.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=zs(r.serverSyncTree_,e._path,c);else{const f=Rs(r.serverSyncTree_,e);u=j_(r.serverSyncTree_,e._path,c,f)}return Lt(r.eventQueue_,e._path,u),Dl(r.serverSyncTree_,e,n,null,!0),c},l=>(Vs(r,"get for query "+He(e)+" failed: "+l),Promise.reject(new Error(l))))}function W1(r,e,n,s,l){Vs(r,"set",{path:e.toString(),value:n,priority:s});const c=Yl(r),u=Be(n,s),f=yd(r.serverSyncTree_,e),p=V_(u,f,c),g=Rd(r),y=M_(r.serverSyncTree_,e,p,g,!0);ql(r.eventQueue_,y),r.server_.put(e.toString(),u.val(!0),(v,N)=>{const P=v==="ok";P||dt("set at "+e+" failed: "+v);const F=Gn(r.serverSyncTree_,g,!P);Lt(r.eventQueue_,e,F),Lu(r,l,v,N)});const x=Ad(r,e);pi(r,x),Lt(r.eventQueue_,x,[])}function V1(r,e,n,s){Vs(r,"update",{path:e.toString(),value:n});let l=!0;const c=Yl(r),u={};if(tt(n,(f,p)=>{l=!1,u[f]=W_(Le(e,f),Be(p),r.serverSyncTree_,c)}),l)Je("update() called with empty data.  Don't do anything."),Lu(r,s,"ok",void 0);else{const f=Rd(r),p=l1(r.serverSyncTree_,e,u,f);ql(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,y)=>{const x=g==="ok";x||dt("update at "+e+" failed: "+g);const v=Gn(r.serverSyncTree_,f,!x),N=v.length>0?pi(r,e):e;Lt(r.eventQueue_,N,v),Lu(r,s,g,y)}),tt(n,g=>{const y=Ad(r,Le(e,g));pi(r,y)}),Lt(r.eventQueue_,e,[])}}function B1(r){Vs(r,"onDisconnectEvents");const e=Yl(r),n=kl();Nu(r.onDisconnect_,ge(),(l,c)=>{const u=W_(l,c,r.serverSyncTree_,e);x_(n,l,u)});let s=[];Nu(n,ge(),(l,c)=>{s=s.concat(zs(r.serverSyncTree_,l,c));const u=Ad(r,l);pi(r,u)}),r.onDisconnect_=kl(),Lt(r.eventQueue_,ge(),s)}function H1(r,e,n){let s;ae(e._path)===".info"?s=Ou(r.infoSyncTree_,e,n):s=Ou(r.serverSyncTree_,e,n),q_(r.eventQueue_,e._path,s)}function X_(r,e,n){let s;ae(e._path)===".info"?s=Dl(r.infoSyncTree_,e,n):s=Dl(r.serverSyncTree_,e,n),q_(r.eventQueue_,e._path,s)}function $1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(D1)}function Vs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Je(n,...e)}function Lu(r,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const u=new Error(c);u.code=l,e(u)}})}function J_(r,e,n){return yd(r.serverSyncTree_,e,n)||J.EMPTY_NODE}function Pd(r,e=r.transactionQueueTree_){if(e||Xl(r,e),Ci(e)){const n=ey(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&G1(r,Ws(e),n)}else H_(e)&&Kl(e,n=>{Pd(r,n)})}function G1(r,e,n){const s=n.map(g=>g.currentWriteId),l=J_(r,e,s);let c=l;const u=l.hash();for(let g=0;g<n.length;g++){const y=n[g];j(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const x=ut(e,y.path);c=c.updateChild(x,y.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Vs(r,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const x=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(Gn(r.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&x.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Xl(r,kd(r.transactionQueueTree_,e)),Pd(r,r.transactionQueueTree_),Lt(r.eventQueue_,e,y);for(let v=0;v<x.length;v++)wi(x[v])}else{if(g==="datastale")for(let x=0;x<n.length;x++)n[x].status===3?n[x].status=4:n[x].status=0;else{dt("transaction at "+p.toString()+" failed: "+g);for(let x=0;x<n.length;x++)n[x].status=4,n[x].abortReason=g}pi(r,e)}},u)}function pi(r,e){const n=Z_(r,e),s=Ws(n),l=ey(r,n);return K1(r,l,s),s}function K1(r,e,n){if(e.length===0)return;const s=[];let l=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=ut(n,p.path);let y=!1,x;if(j(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,x=p.abortReason,l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=L1)y=!0,x="maxretry",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else{const v=J_(r,p.path,u);p.currentInputSnapshot=v;const N=e[f].update(v.val());if(N!==void 0){Ql("transaction failed: Data returned ",N,p.path);let P=Be(N);typeof N=="object"&&N!=null&&rn(N,".priority")||(P=P.updatePriority(v.getPriority()));const U=p.currentWriteId,R=Yl(r),L=V_(P,v,R);p.currentOutputSnapshotRaw=P,p.currentOutputSnapshotResolved=L,p.currentWriteId=Rd(r),u.splice(u.indexOf(U),1),l=l.concat(M_(r.serverSyncTree_,p.path,L,p.currentWriteId,p.applyLocally)),l=l.concat(Gn(r.serverSyncTree_,U,!0))}else y=!0,x="nodata",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0))}Lt(r.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(x==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(x),!1,null))))}Xl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);Pd(r,r.transactionQueueTree_)}function Z_(r,e){let n,s=r.transactionQueueTree_;for(n=ae(e);n!==null&&Ci(s)===void 0;)s=kd(s,n),e=ke(e),n=ae(e);return s}function ey(r,e){const n=[];return ty(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ty(r,e,n){const s=Ci(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Kl(e,l=>{ty(r,l,n)})}function Xl(r,e){const n=Ci(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,B_(e,n.length>0?n:void 0)}Kl(e,s=>{Xl(r,s)})}function Ad(r,e){const n=Ws(Z_(r,e)),s=kd(r.transactionQueueTree_,e);return x1(s,l=>{hu(r,l)}),hu(r,s),$_(s,l=>{hu(r,l)}),n}function hu(r,e){const n=Ci(e);if(n){const s=[];let l=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(j(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(j(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),l=l.concat(Gn(r.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?B_(e,void 0):n.length=c+1,Lt(r.eventQueue_,Ws(e),l);for(let u=0;u<s.length;u++)wi(s[u])}}/**
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
 */function Q1(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function q1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Bm=function(r,e){const n=Y1(r),s=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new i_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new xe(n.pathString)}},Y1=function(r){let e="",n="",s="",l="",c="",u=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let x=r.indexOf("?");x===-1&&(x=r.length),e=r.substring(0,Math.min(y,x)),y<x&&(l=Q1(r.substring(y,x)));const v=q1(r.substring(Math.min(r.length,x)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),n=e.substring(P+1),c=s}"ns"in v&&(c=v.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:l,namespace:c}};/**
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
 */class X1{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class J1{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class bd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return de(this._path)?null:sd(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Rm(this._queryParams),n=td(e);return n==="{}"?"default":n}get _queryObject(){return Rm(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof bd))return!1;const n=this._repo===e._repo,s=od(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+WE(this._path)}}class xn extends bd{constructor(e,n){super(e,n,new ud,!1)}get parent(){const e=f_(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),s=Mu(this.ref,e);return new Ps(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ps(l,Mu(this.ref,s),Me)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ze(r,e){return r=Nt(r),r._checkNotDeleted("ref"),e!==void 0?Mu(r._root,e):r._root}function Mu(r,e){return r=Nt(r),ae(r._path)===null?P1("child","path",e):K_("child","path",e),new xn(r._repo,Le(r._path,e))}function Z1(r){return Q_("remove",r._path),Jl(r,null)}function Jl(r,e){r=Nt(r),Q_("set",r._path),N1("set",e,r._path);const n=new bs;return W1(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function rr(r,e){R1("update",e,r._path);const n=new bs;return V1(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function Ll(r){r=Nt(r);const e=new ny(()=>{}),n=new Zl(e);return z1(r._repo,r,n).then(s=>new Ps(s,new xn(r._repo,r._path),r._queryParams.getIndex()))}class Zl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new X1("value",this,new Ps(e.snapshotNode,new xn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new J1(this,e,n):null}matches(e){return e instanceof Zl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function eI(r,e,n,s,l){const c=new ny(n,void 0),u=new Zl(c);return H1(r._repo,r,u),()=>X_(r._repo,r,u)}function tI(r,e,n,s){return eI(r,"value",e)}function nI(r,e,n){X_(r._repo,r,null)}ZS(xn);i1(xn);/**
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
 */const rI="FIREBASE_DATABASE_EMULATOR_HOST",ju={};let iI=!1;function sI(r,e,n,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),u=gi(c);r.repoInfo_=new i_(e,u,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function oI(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let u=Bm(c,l),f=u.repoInfo,p;typeof process<"u"&&dm&&(p=dm[rI]),p?(c=`http://${p}?ns=${f.namespace}`,u=Bm(c,l),f=u.repoInfo):u.repoInfo.secure;const g=new mE(r.name,r.options,e);A1("Invalid Firebase Database URL",u),de(u.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=aI(f,r,g,new pE(r,n));return new cI(y,r)}function lI(r,e){const n=ju[e];(!n||n[r.key]!==r)&&wn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),$1(r),delete n[r.key]}function aI(r,e,n,s){let l=ju[e.name];l||(l={},ju[e.name]=l);let c=l[r.toURLString()];return c&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new M1(r,iI,n,s),l[r.toURLString()]=c,c}class cI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function uI(r=cg(),e){const n=Gu(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=C0("database");s&&dI(n,...s)}return n}function dI(r,e,n,s={}){r=Nt(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&xr(s,c.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ul(ul.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:E0(s.mockUserToken,r.app.options.projectId);u=new ul(f)}gi(e)&&(ng(e),rg("Database",!0)),sI(c,l,s,u)}/**
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
 */function hI(r){JC(yi),ci(new Cr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return oI(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),qn(hm,fm,r),qn(hm,fm,"esm2020")}gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};hI();const fI={apiKey:"AIzaSyCLgGHXRhXRn6yubYySyQ9WUt1e0lDckX8",authDomain:"sekimeki-3c6d9.firebaseapp.com",databaseURL:"https://sekimeki-3c6d9-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"sekimeki-3c6d9",storageBucket:"sekimeki-3c6d9.firebasestorage.app",messagingSenderId:"269784219722",appId:"1:269784219722:web:fd1ecbae99bd3da98526b3"},ry=ag(fI),Hm=YC(ry),et=uI(ry);let iy=null;function pI(){return new Promise((r,e)=>{Ux(Hm,n=>{n&&(iy=n.uid,r(n.uid))}),Ox(Hm).catch(e)})}function ea(){return iy??""}function $m(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<4;n++)e+=r[Math.floor(Math.random()*r.length)];return e}async function mI(r,e){const n=ea();let s=$m(),l=await Ll(Ze(et,`rooms/${s}`)),c=0;for(;l.exists()&&c<10;)s=$m(),l=await Ll(Ze(et,`rooms/${s}`)),c++;return await Jl(Ze(et,`rooms/${s}/config`),{mode:r,layout:e,adminId:n,state:"waiting",createdAt:Date.now()}),s}async function gI(r){return(await Ll(Ze(et,`rooms/${r}/config`))).exists()}async function _I(r){const e=await Ll(Ze(et,`rooms/${r}/config`));return e.exists()?e.val():null}async function yI(r,e){const n=ea();return await Jl(Ze(et,`rooms/${r}/participants/${n}`),{name:e.name,gender:e.gender??null,avatar:e.avatar,answers:null,completed:!1}),n}async function vI(r){const e=ea();await Z1(Ze(et,`rooms/${r}/participants/${e}`))}async function wI(r){await rr(Ze(et,`rooms/${r}/config`),{state:"diagnosing"})}async function xI(r,e){const n=ea();await rr(Ze(et,`rooms/${r}/participants/${n}`),{answers:e,completed:!0})}async function CI(r,e,n,s,l){const c={};for(const p of e){const g=[p.id1,p.id2].sort().join("_");c[g]={...p,visible:!0}}const u={};n.forEach((p,g)=>{u[String(g)]=p});const f={};s.forEach((p,g)=>{f[String(g)]=p}),await Jl(Ze(et,`rooms/${r}/results`),{compatibility:c,seatAssignments:u,awards:f,revealed:!1}),await rr(Ze(et,`rooms/${r}/config`),{state:"admin-review"});for(const[p,g]of Object.entries(l))await rr(Ze(et,`rooms/${r}/participants/${p}`),g)}async function EI(r,e,n){await rr(Ze(et,`rooms/${r}/results/compatibility/${e}`),{visible:n})}async function SI(r){await rr(Ze(et,`rooms/${r}/results`),{revealed:!0}),await rr(Ze(et,`rooms/${r}/config`),{state:"results"})}async function II(r,e,n){const s={};e.forEach((c,u)=>{s[String(u)]=c});const l={};n.forEach((c,u)=>{l[String(u)]=c}),await rr(Ze(et,`rooms/${r}/results`),{seatAssignments:s,awards:l})}function kI(r,e){const n=Ze(et,`rooms/${r}`);return tI(n,s=>{e(s.val())}),()=>nI(n)}function NI(){var R,L,q,Y;const[r,e]=ne.useState(""),[n,s]=ne.useState(null),[l,c]=ne.useState(null),[u,f]=ne.useState(!1);ne.useEffect(()=>{pI().then(se=>{e(se),f(!0)})},[]),ne.useEffect(()=>{if(!n){c(null);return}return kI(n,ie=>{c(ie)})},[n]);const p=l&&r?l.config.adminId===r?"admin":"participant":null,g=l!=null&&l.participants?Object.entries(l.participants).map(([se,ie])=>({id:se,name:ie.name,gender:ie.gender,avatar:ie.avatar,answers:ie.answers??[],completed:ie.completed,vector:ie.vector,personalType:ie.personalType,personalTypeEmoji:ie.personalTypeEmoji})):[],y=g.find(se=>se.id===r)??null,x=(R=l==null?void 0:l.results)!=null&&R.compatibility?Object.values(l.results.compatibility):[],v=x.filter(se=>se.visible!==!1),N=(L=l==null?void 0:l.results)!=null&&L.seatAssignments?Object.values(l.results.seatAssignments):[],P=(q=l==null?void 0:l.results)!=null&&q.awards?Object.values(l.results.awards):[],F=((Y=l==null?void 0:l.results)==null?void 0:Y.revealed)??!1,U=g.length>0&&g.every(se=>se.completed);return{uid:r,roomCode:n,roomData:l,role:p,participants:g,myParticipant:y,compatibilityResults:x,visibleResults:v,seatAssignments:N,awards:P,revealed:F,allCompleted:U,isReady:u,setRoomCode:s}}const TI={S:{E:"魂のパリピ同盟",C:"以心伝心のふたり",V:"運命の冒険パートナー",L:"恋のシンクロ率MAX",H:"爆笑ソウルメイト"},A:{E:"ノリが合う飲み仲間",C:"会話キャッチボール名人",V:"趣味トーク無限ループ",L:"じわじわ来る恋の予感",H:"ツボが近い笑い仲間"},B:{E:"新しい扉を開く関係",C:"未知の言語を学ぶ感覚",V:"お互い新世界への案内人",L:"押し引きのスリルあり",H:"笑いの化学反応待ち"},C:{E:"テンションの異文化交流",C:"沈黙すら味になる関係",V:"真逆だからこそ面白い",L:"恋の迷路を楽しんで",H:"笑いの新大陸を発見せよ"}};function RI(r){return r>=85?"S":r>=70?"A":r>=55?"B":"C"}const PI=[{condition:r=>r[0]>=4&&r[2]>=4,emoji:"🌪️",name:"お祭りハリケーン"},{condition:r=>r[0]<=2&&r[4]>=4,emoji:"🎯",name:"スナイパー芸人"},{condition:r=>r[1]>=4&&r[3]>=4,emoji:"🦁",name:"恋のライオン"},{condition:r=>r[1]<=2&&r[2]<=2,emoji:"🐱",name:"癒しの守護猫"},{condition:r=>r[0]>=4&&r[4]>=4,emoji:"🎉",name:"パーティーモンスター"},{condition:r=>r[0]>=4&&r[3]>=4,emoji:"💘",name:"情熱のストライカー"},{condition:r=>r[2]>=4&&r[4]>=4,emoji:"🎪",name:"アドベンチャーコメディアン"},{condition:r=>r[0]<=2&&r[2]<=2,emoji:"🏠",name:"おうちの守り神"},{condition:r=>r[1]>=4&&r[4]>=4,emoji:"🎤",name:"トークの魔術師"},{condition:r=>r[3]<=2&&r[1]<=2,emoji:"🌙",name:"ミステリアスな月"},{condition:r=>r[0]>=4&&r[1]>=4,emoji:"☀️",name:"太陽系リーダー"},{condition:r=>r[3]>=4&&r[2]>=4,emoji:"🚀",name:"恋のロケットランチャー"},{condition:r=>r[0]<=2&&r[3]<=2,emoji:"🍵",name:"まったり茶道マスター"},{condition:r=>r[2]<=2&&r[4]<=2,emoji:"📚",name:"哲学者の休日"},{condition:r=>r[1]<=2&&r[4]>=4,emoji:"🎭",name:"ギャップの天才"},{condition:r=>{const e=r.reduce((n,s)=>n+s,0)/5;return r.every(n=>Math.abs(n-e)<1)},emoji:"🌈",name:"万能カメレオン"}];function AI(r){for(const e of PI)if(e.condition(r))return{emoji:e.emoji,name:e.name};return{emoji:"🌈",name:"万能カメレオン"}}const fu={E:{common:["2人とも行きたい「最高の金曜夜プラン」を3秒で答えて！","理想の飲み会メンバー、有名人3人だけ呼べるなら？","一緒に行くならフェス？それとも秘境温泉？"],diff:["お互いの「理想の金曜夜」をプレゼンしてみて！","インドア派 vs アウトドア派、1分ディベート開始！","相手の趣味を1つ体験するなら何にする？"]},C:{common:["最近あった「聞いてほしい話」を30秒で！","2人で一番盛り上がれる話題は何だと思う？","お互いの第一印象、正直に言い合おう！"],diff:["じゃあ今から1分間、いつもと逆の会話スタイルで話してみよう！","「相手に聞いてみたかったこと」を3つ！","2人の会話スタイルが合体したら最強説、検証！"]},V:{common:["次の3連休、予定なかったらどこ行く？3秒で！","2人で旅行に行くならどの国？","「これだけはやってみたいこと」を1つずつ！"],diff:["相手の価値観で1日過ごすなら何する？","お互いの「譲れないこだわり」を発表！","もし2人で24時間お出かけするなら、プランどう立てる？"]},L:{common:["理想のデートプラン、相手に聞かずに考えて同時に発表！","「こんなサプライズされたらキュンとする」を告白！","恋愛映画でどのシーンに一番グッとくる？"],diff:["もし2人でドラマに出るなら、どんなジャンル？","お互いの恋愛の距離感を料理で例えると？","「この人いいな」と思う瞬間を3秒で！"]},H:{common:["今まで一番笑った出来事は？","一緒に見るなら何のお笑い番組？","相手をお笑い芸人に例えると誰？"],diff:["お互いの笑いのツボを探る質問タイム！","1分間で相手を笑わせるチャレンジ！","「この人面白いな」と思った瞬間を再現！"]}},Fu=[{id:1,axis:"E",text:"金曜の夜、理想の過ごし方は？",leftLabel:"少人数でゆったりバー",rightLabel:"大人数でワイワイ飲み会"},{id:2,axis:"E",text:"旅行先で盛り上がるのは？",leftLabel:"隠れ家カフェ巡り",rightLabel:"有名スポットで写真撮りまくり"},{id:3,axis:"C",text:"初対面の人との会話スタイルは？",leftLabel:"相手の話をじっくり聞く",rightLabel:"自分から話題をどんどん振る"},{id:4,axis:"C",text:"友達の悩み相談、あなたの対応は？",leftLabel:"まず気持ちに寄り添う",rightLabel:"一緒に解決策を考える"},{id:5,axis:"V",text:"理想の休日は？",leftLabel:"おうちでまったり",rightLabel:"外に出てアクティブに"},{id:6,axis:"V",text:"旅行のスタイルは？",leftLabel:"計画をしっかり立てる",rightLabel:"ノープランで行き当たりばったり"},{id:7,axis:"L",text:"気になる人へのアプローチは？",leftLabel:"じっくり友達から",rightLabel:"すぐに距離を詰める"},{id:8,axis:"L",text:"デートに誘うなら？",leftLabel:"自然な流れを待つ",rightLabel:"ストレートに誘う"},{id:9,axis:"H",text:"笑いのツボに近いのは？",leftLabel:"じわじわ来る知的なウィット",rightLabel:"勢いとテンションで爆笑"},{id:10,axis:"H",text:"飲み会での立ち位置は？",leftLabel:"絶妙なタイミングで一言",rightLabel:"場を仕切るMC役"}],Uu={E:.25,C:.2,V:.2,L:.2,H:.15},bI=["E","V","H"],OI=["C","L"],DI=1.5,LI=1.2;function MI(r){return["E","C","V","L","H"].map(n=>{const c=Fu.filter(u=>u.axis===n).map(u=>u.id-1).map(u=>r[u]??3);return c.reduce((u,f)=>u+f,0)/c.length})}function jI(r,e){return 1-Math.abs(r-e)/4}function FI(r,e){const n=Math.abs(r-e);return Math.exp(-((n-DI)**2)/(2*LI**2))}function UI(r,e){const n=["E","C","V","L","H"],s={};return n.forEach((l,c)=>{bI.includes(l)?s[l]=jI(r[c],e[c]):OI.includes(l)&&(s[l]=FI(r[c],e[c]))}),s}function zI(r){let e=0;for(const n of Object.keys(Uu))e+=Uu[n]*r[n];return e}function WI(r){return Math.round(40+r*55)}function VI(r){const e=["E","C","V","L","H"];let n=-1,s="E";for(const l of e){const c=Uu[l]*r[l];c>n&&(n=c,s=l)}return s}function BI(r,e){var s;const n=RI(r);return((s=TI[n])==null?void 0:s[e])??"未知の化学反応"}function HI(r){const e=[];for(let n=0;n<r.length;n++)for(let s=n+1;s<r.length;s++){const l=r[n],c=r[s];if(!l.vector||!c.vector)continue;const u=UI(l.vector,c.vector),f=zI(u),p=WI(f),g=VI(u),y=BI(p,g);e.push({id1:l.id,id2:c.id,axisScores:u,rawScore:f,displayScore:p,typeName:y,topAxis:g})}return e}function Bs(r,e,n){return r.find(s=>s.id1===e&&s.id2===n||s.id1===n&&s.id2===e)}function sy(r,e){const n=Array.from({length:e},()=>Array(e).fill(0));switch(r){case"facing-long":case"facing-short":{const s=Math.ceil(e/2);for(let l=0;l<s;l++){for(let c=s;c<e;c++){const u=l,f=c-s,p=Math.abs(u-f);p===0?n[l][c]=n[c][l]=1:p===1&&(n[l][c]=n[c][l]=.5)}l+1<s&&(n[l][l+1]=n[l+1][l]=.3)}for(let l=s;l<e-1;l++)n[l][l+1]=n[l+1][l]=.3;break}case"round":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.min(Math.abs(s-l),e-Math.abs(s-l));c===1?n[s][l]=n[l][s]=1:c===2?n[s][l]=n[l][s]=.4:c===Math.floor(e/2)?n[s][l]=n[l][s]=.3:c===3&&(n[s][l]=n[l][s]=.1)}break}case"counter":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.2)}break}case"alternate":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=s<Math.ceil(e/2)?0:1,u=l<Math.ceil(e/2)?0:1,f=c===0?s:s-Math.ceil(e/2),p=u===0?l:l-Math.ceil(e/2);if(c!==u){const g=Math.abs(f-p);g===0?n[s][l]=n[l][s]=1:g===1&&(n[s][l]=n[l][s]=.5)}else Math.abs(f-p)===1&&(n[s][l]=n[l][s]=.3)}break}case"l-shape":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.3)}break}}return n}function $I(r,e,n,s){if(s==="free")return n;const l=r.gender!==e.gender;return n*(l?1:.2)}function As(r,e,n,s,l){let c=0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){const p=Bs(n,e[u].id,e[f].id);if(!p)continue;const g=s[r[u]][r[f]],y=$I(e[u],e[f],g,l);c+=p.rawScore*y}return c}function GI(r,e,n,s,l){let c=1/0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){if(l==="goukon"&&e[u].gender===e[f].gender||s[r[u]][r[f]]<.5)continue;const p=Bs(n,e[u].id,e[f].id);p&&p.rawScore<c&&(c=p.rawScore)}return c===1/0?0:c}function oy(r){if(r.length<=1)return[r];const e=[];for(let n=0;n<r.length;n++){const s=[...r.slice(0,n),...r.slice(n+1)];for(const l of oy(s))e.push([r[n],...l])}return e}function KI(r,e,n,s){const l=r.length,c=Array.from({length:l},(v,N)=>N),u=oy(c);let f=-1/0,p=-1/0,g=c;const y=.95;let x=-1/0;for(const v of u){const N=As(v,r,e,n,s);N>x&&(x=N)}for(const v of u){const N=As(v,r,e,n,s);if(N>=x*y){const P=GI(v,r,e,n,s);(P>p||P===p&&N>f)&&(p=P,f=N,g=[...v])}}return g}function QI(r,e,n,s){const l=r.length;let c=Array.from({length:l},(N,P)=>P);for(let N=l-1;N>0;N--){const P=Math.floor(Math.random()*(N+1));[c[N],c[P]]=[c[P],c[N]]}let u=As(c,r,e,n,s),f=[...c],p=u;const g=100,y=.995,x=.01,v=1e4;for(let N=0;N<3;N++){let P=g,F=0;for(;P>x&&F<v;){const U=Math.floor(Math.random()*l);let R=Math.floor(Math.random()*(l-1));R>=U&&R++;const L=[...c];[L[U],L[R]]=[L[R],L[U]];const q=As(L,r,e,n,s),Y=q-u;(Y>0||Math.random()<Math.exp(Y/P))&&(c=L,u=q,u>p&&(f=[...c],p=u)),P*=y,F++}}return f}function dl(r,e,n,s){const l=r.length;if(l<=1)return r.map((f,p)=>({participantId:f.id,seatIndex:p}));const c=sy(n,l),u=l<=10?KI(r,e,c,s):QI(r,e,c,s);return r.map((f,p)=>({participantId:f.id,seatIndex:u[p]}))}function qI(r,e,n,s,l,c){if(l<=1)return dl(r,e,n,s);const u=r.length,f=sy(n,u);if(l===2){let g=c,y=-1/0;for(let x=0;x<u;x++)for(let v=x+1;v<u;v++){if(s==="goukon"&&r[x].gender!==r[v].gender)continue;const N=[...c],P=N[x].seatIndex;N[x]={...N[x],seatIndex:N[v].seatIndex},N[v]={...N[v],seatIndex:P};const F=N.map(R=>R.seatIndex),U=As(F,r,e,f,s);U>y&&(y=U,g=N)}return g}if(l===3)return dl(r,e,n,s);const p=dl(r,e,n,s);for(let g=u-1;g>0;g--)if(Math.random()<.5){const y=Math.floor(Math.random()*(g+1)),x=p[g].seatIndex;p[g]={...p[g],seatIndex:p[y].seatIndex},p[y]={...p[y],seatIndex:x}}return p}function Gm(r,e,n){const s=[],l=[];for(let R=0;R<r.length;R++)for(let L=R+1;L<r.length;L++){const q=n.find(ie=>ie.participantId===r[R].id),Y=n.find(ie=>ie.participantId===r[L].id);if(!q||!Y)continue;const se=Math.abs(q.seatIndex-Y.seatIndex);if(se<=1||se===r.length-1){const ie=Bs(e,r[R].id,r[L].id);ie&&l.push([r[R],r[L],ie])}}const c=e.map(R=>({p1:r.find(L=>L.id===R.id1),p2:r.find(L=>L.id===R.id2),result:R}));if(l.length>0){const R=l.reduce((L,q)=>L[2].displayScore>=q[2].displayScore?L:q);s.push({emoji:"👑",title:"ベストマッチ賞",description:`最高の席順相性！${R[2].displayScore}点`,targetIds:[R[0].id,R[1].id]})}const u=c.find(R=>R.result.displayScore>=90);u&&s.push({emoji:"🔥",title:"運命の出会い賞",description:`相性${u.result.displayScore}点の奇跡！`,targetIds:[u.p1.id,u.p2.id]});let f=-1,p=null;for(const R of c){const L=Object.values(R.result.axisScores),q=L.reduce((se,ie)=>se+ie,0)/L.length,Y=L.reduce((se,ie)=>se+(ie-q)**2,0)/L.length;Y>f&&(f=Y,p=R)}p&&s.push({emoji:"🌀",title:"カオスコンビ賞",description:"予測不能な化学反応！",targetIds:[p.p1.id,p.p2.id]});let g=-1,y=null;for(const R of c){const L=R.result.axisScores.C+R.result.axisScores.L;L>g&&(g=L,y=R)}y&&s.push({emoji:"🎭",title:"ミステリアス賞",description:"真逆だからこそ惹かれる！",targetIds:[y.p1.id,y.p2.id]});let x=-1,v=null;for(const R of r){if(!R.vector)continue;const L=R.vector[0]+R.vector[1];L>x&&(x=L,v=R)}v&&s.push({emoji:"🎤",title:"パーティーMC賞",description:"場を盛り上げるMVP！",targetIds:[v.id]});let N=1/0,P=null;for(const R of r)R.vector&&R.vector[0]<N&&(N=R.vector[0],P=R);P&&P.id!==(v==null?void 0:v.id)&&s.push({emoji:"🐱",title:"癒しオーラ賞",description:"ほっとする存在感！",targetIds:[P.id]});let F=-1,U=null;for(const R of r){const L=e.filter(Y=>Y.id1===R.id||Y.id2===R.id);if(L.length===0)continue;const q=L.reduce((Y,se)=>Y+se.displayScore,0)/L.length;q>F&&(F=q,U=R)}return U&&s.push({emoji:"🔄",title:"万能プレイヤー賞",description:"誰とでも仲良くなれる！",targetIds:[U.id]}),s}const YI=({onStart:r,onJoin:e})=>_.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[_.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((n,s)=>_.jsx("div",{className:"absolute rounded-full opacity-20",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:["#ff6b6b","#4ecdc4","#ffd93d"][s%3],animation:`float ${3+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*3}s`}},s))}),_.jsxs("div",{className:"animate-fade-in relative z-10",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🍻"}),_.jsx("h1",{className:"text-5xl font-black tracking-tight mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"SEKIMEKI"})}),_.jsx("p",{className:"text-lg text-gray-300 mb-12 font-medium",children:"「運命の席順、決めます」"}),_.jsxs("div",{className:"space-y-4 w-full max-w-xs mx-auto",children:[_.jsx("button",{onClick:r,className:"w-full py-4 px-8 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームをつくる"}),_.jsx("button",{onClick:e,className:"w-full py-4 px-8 bg-gray-800/80 border-2 border-gray-600 text-white font-bold text-lg rounded-2xl hover:border-secondary hover:bg-gray-700/80 transition-all duration-200 active:scale-95",children:"コードで参加する"})]}),_.jsx("p",{className:"mt-8 text-sm text-gray-500",children:"※アプリ不要・登録不要"}),_.jsx("p",{className:"mt-2 text-xs text-gray-600",children:"各自のスマホで診断 → 最適な席順を提案！"})]}),_.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `})]}),XI=[{id:"facing-long",name:"対面ロング",icon:"═══",desc:"向かい合う長テーブル"},{id:"facing-short",name:"対面ショート",icon:"═══",desc:"向かい合う短テーブル"},{id:"round",name:"円卓",icon:"◯",desc:"丸テーブル"},{id:"counter",name:"カウンター",icon:"───",desc:"横並びカウンター席"},{id:"alternate",name:"交互型",icon:"⊞",desc:"男女交互に配置"},{id:"l-shape",name:"L字・コの字",icon:"⌐",desc:"L字型テーブル"}],JI=({onComplete:r,onBack:e})=>{const[n,s]=ne.useState("goukon"),[l,c]=ne.useState("facing-long");return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-8 animate-fade-in",children:"ルーム設定"}),_.jsxs("div",{className:"mb-8 animate-slide-up",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"モード"}),_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("button",{onClick:()=>s("goukon"),className:`p-4 rounded-xl border-2 transition-all ${n==="goukon"?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"💕"}),_.jsx("div",{className:"font-bold text-sm",children:"合コンモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"男女別で席配置"})]}),_.jsxs("button",{onClick:()=>s("free"),className:`p-4 rounded-xl border-2 transition-all ${n==="free"?"border-secondary bg-secondary/10 shadow-lg shadow-secondary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"🎉"}),_.jsx("div",{className:"font-bold text-sm",children:"フリーモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"性別不問で席配置"})]})]})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.1s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"席の配置"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:XI.map(u=>_.jsxs("button",{onClick:()=>c(u.id),className:`p-4 rounded-xl border-2 transition-all text-left ${l===u.id?"border-accent bg-accent/10 shadow-lg shadow-accent/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-lg font-mono mb-1 text-gray-300",children:u.icon}),_.jsx("div",{className:"font-bold text-sm",children:u.name}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:u.desc})]},u.id))})]}),_.jsx("button",{onClick:()=>r(n,l),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームを作成する"})]})},ZI=({onJoin:r,onBack:e})=>{const[n,s]=ne.useState(""),[l,c]=ne.useState(""),[u,f]=ne.useState(!1),p=async()=>{const g=n.trim().toUpperCase();if(g.length!==4){c("4文字のコードを入力してください");return}f(!0),c("");const y=await gI(g);if(f(!1),!y){c("ルームが見つかりません");return}r(g)};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔑"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"ルームに参加"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"ルームコード"}),_.jsx("input",{type:"text",value:n,onChange:g=>{s(g.target.value.toUpperCase().slice(0,4)),c("")},placeholder:"例：A3K7",maxLength:4,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-4 text-white text-center text-3xl font-mono tracking-[0.5em] placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase",onKeyDown:g=>g.key==="Enter"&&p(),autoFocus:!0}),l&&_.jsx("p",{className:"text-red-400 text-sm mt-2 text-center",children:l})]}),_.jsx("button",{onClick:p,disabled:n.length!==4||u,className:"w-full py-4 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:u?"確認中...":"参加する"})]})]})},ht=[{id:"dog",emoji:"🐶",label:"イヌ"},{id:"cat",emoji:"🐱",label:"ネコ"},{id:"bear",emoji:"🐻",label:"クマ"},{id:"fox",emoji:"🦊",label:"キツネ"},{id:"lion",emoji:"🦁",label:"ライオン"},{id:"rabbit",emoji:"🐰",label:"ウサギ"},{id:"panda",emoji:"🐼",label:"パンダ"},{id:"penguin",emoji:"🐧",label:"ペンギン"},{id:"koala",emoji:"🐨",label:"コアラ"},{id:"unicorn",emoji:"🦄",label:"ユニコーン"},{id:"dolphin",emoji:"🐬",label:"イルカ"},{id:"owl",emoji:"🦉",label:"フクロウ"},{id:"tiger",emoji:"🐯",label:"トラ"},{id:"monkey",emoji:"🐵",label:"サル"},{id:"wolf",emoji:"🐺",label:"オオカミ"},{id:"hamster",emoji:"🐹",label:"ハムスター"}],ek=({mode:r,usedAvatars:e,onSubmit:n,onBack:s})=>{var v;const[l,c]=ne.useState(""),[u,f]=ne.useState("male"),p=ht.filter(N=>!e.includes(N.id)),[g,y]=ne.useState(((v=p[0])==null?void 0:v.id)??ht[0].id),x=()=>{l.trim()&&n({name:l.trim(),gender:r==="goukon"?u:void 0,avatar:g})};return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:s,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-2",children:"✨"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"プロフィール登録"}),_.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50",children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"ニックネーム"}),_.jsx("input",{type:"text",value:l,onChange:N=>c(N.target.value),placeholder:"最大8文字",maxLength:8,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors",autoFocus:!0})]}),r==="goukon"&&_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"性別"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[_.jsx("button",{onClick:()=>f("male"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="male"?"border-blue-400 bg-blue-500/10 text-blue-300":"border-gray-700 text-gray-400"}`,children:"♂ 男性"}),_.jsx("button",{onClick:()=>f("female"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="female"?"border-pink-400 bg-pink-500/10 text-pink-300":"border-gray-700 text-gray-400"}`,children:"♀ 女性"})]})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"アイコン"}),_.jsx("div",{className:"grid grid-cols-8 gap-2",children:ht.map(N=>{const P=e.includes(N.id);return _.jsx("button",{onClick:()=>!P&&y(N.id),disabled:P,className:`text-2xl p-2 rounded-xl transition-all ${P?"opacity-20 cursor-not-allowed":g===N.id?"bg-accent/20 ring-2 ring-accent scale-110":"hover:bg-gray-700/50"}`,children:N.emoji},N.id)})})]}),_.jsx("button",{onClick:x,disabled:!l.trim(),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:"参加する！"})]})]})]})},tk=({roomCode:r,participants:e,role:n,onStartDiagnosis:s,onBack:l})=>{const c=e.length>=3;return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:l,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 退出"}),_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"ルーム"}),_.jsxs("div",{className:"inline-block bg-gray-800/80 rounded-2xl px-8 py-4 border border-gray-600/50 mb-4",children:[_.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"ルームコード"}),_.jsx("p",{className:"text-4xl font-mono font-black tracking-[0.3em] text-accent",children:r})]}),_.jsx("p",{className:"text-sm text-gray-400",children:"このコードを共有して参加してもらおう"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsxs("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:["参加者 (",e.length,"名)"]}),_.jsx("div",{className:"space-y-2",children:e.map((u,f)=>{const p=ht.find(g=>g.id===u.avatar);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 animate-slide-up",style:{animationDelay:`${f*.1}s`},children:[_.jsx("span",{className:"text-2xl",children:p==null?void 0:p.emoji}),_.jsx("span",{className:"font-medium flex-1",children:u.name}),u.gender&&_.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${u.gender==="male"?"bg-blue-500/20 text-blue-300":"bg-pink-500/20 text-pink-300"}`,children:u.gender==="male"?"♂":"♀"})]},u.id)})}),e.length===0&&_.jsx("div",{className:"text-center text-gray-500 py-8 animate-pulse-slow",children:"参加者を待っています..."})]}),n==="admin"?_.jsx("div",{children:_.jsx("button",{onClick:s,disabled:!c,className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${c?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:c?"🚀 診断スタート！":`あと${3-e.length}人で開始できます`})}):_.jsx("div",{className:"text-center py-4",children:_.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-800/60 rounded-full px-6 py-3",children:[_.jsx("div",{className:"w-2 h-2 bg-secondary rounded-full animate-pulse"}),_.jsx("span",{className:"text-gray-300 text-sm",children:"幹事がスタートするまでお待ちください"})]})})]})};function nk(r){const e=Fu.map((s,l)=>l);let n=0;for(let s=0;s<r.length;s++)n=(n<<5)-n+r.charCodeAt(s)|0;for(let s=e.length-1;s>0;s--){n=(n<<5)-n+s|0;const l=Math.abs(n)%(s+1);[e[s],e[l]]=[e[l],e[s]]}return e.map(s=>({...Fu[s],originalIndex:s}))}const pu=9,rk=({participant:r,onComplete:e})=>{const[n,s]=ne.useState(!1),[l,c]=ne.useState(0),[u,f]=ne.useState(Array(10).fill(0)),[p,g]=ne.useState(3),[y,x]=ne.useState(pu),[v,N]=ne.useState(!1),P=Qm.useMemo(()=>nk(r.id),[r.id]),F=ht.find(L=>L.id===r.avatar),U=ne.useCallback(L=>{if(v)return;N(!0);const q=[...u];q[P[l].originalIndex]=L,f(q),l<9?setTimeout(()=>{c(Y=>Y+1),g(3),x(pu),N(!1)},300):setTimeout(()=>{e(q)},300)},[u,l,P,v,e]);if(ne.useEffect(()=>{if(!n)return;const L=setInterval(()=>{x(q=>q<=1?(U(3),pu):q-1)},1e3);return()=>clearInterval(L)},[n,l,U]),!n)return _.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:_.jsxs("div",{className:"animate-pop",children:[_.jsx("div",{className:"text-6xl mb-4",children:F==null?void 0:F.emoji}),_.jsxs("h2",{className:"text-3xl font-bold mb-2",children:[r.name,"さん"]}),_.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"10問の質問に答えてね（1問9秒）"}),_.jsx("button",{onClick:()=>s(!0),className:"py-4 px-12 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95",children:"スタート！"})]})});const R=P[l];return _.jsxs("div",{className:"min-h-screen flex flex-col px-6 py-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-xl",children:F==null?void 0:F.emoji}),_.jsx("span",{className:"text-sm font-medium text-gray-400",children:r.name})]}),_.jsxs("span",{className:"text-sm text-gray-500",children:[l+1," / 10"]})]}),_.jsx("div",{className:"w-full h-1.5 bg-gray-800 rounded-full mb-2 overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300",style:{width:`${(l+1)/10*100}%`}})}),_.jsx("div",{className:"flex justify-end mb-6",children:_.jsxs("div",{className:`text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${y<=3?"bg-red-500/20 text-red-400 animate-pulse":"bg-gray-800 text-gray-400"}`,children:[y,"s"]})}),_.jsx("div",{className:"flex-1 flex flex-col justify-center",children:_.jsxs("div",{className:`animate-slide-in-right ${v?"opacity-50":""}`,children:[_.jsx("h3",{className:"text-2xl font-bold text-center mb-12 leading-relaxed",children:R.text}),_.jsxs("div",{className:"flex justify-between mb-4 px-2",children:[_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-left",children:R.leftLabel}),_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-right",children:R.rightLabel})]}),_.jsx("div",{className:"flex gap-3 justify-center mb-8",children:[1,2,3,4,5].map(L=>_.jsx("button",{onClick:()=>g(L),className:`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-200 ${p===L?"bg-gradient-to-br from-primary to-pink-500 text-white scale-110 shadow-lg shadow-primary/30":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:L},L))}),_.jsx("button",{onClick:()=>U(p),disabled:v,className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50",children:l<9?"次へ":"回答完了！"})]},l)})]})},ik=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onTogglePair:c,onReveal:u,onReshuffle:f,revealed:p})=>{const g=[...e].sort((y,x)=>x.displayScore-y.displayScore);return _.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("div",{className:"text-4xl mb-2",children:"👑"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",children:"管理者画面"})}),_.jsx("p",{className:"text-sm text-gray-400",children:p?"結果は公開済みです":"表示するペアを選択して結果を公開してください"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"ペア表示設定"}),_.jsx("div",{className:"space-y-2",children:g.map(y=>{const x=r.find(R=>R.id===y.id1),v=r.find(R=>R.id===y.id2);if(!x||!v)return null;const N=ht.find(R=>R.id===x.avatar),P=ht.find(R=>R.id===v.avatar),F=[y.id1,y.id2].sort().join("_"),U=y.visible!==!1;return _.jsxs("div",{className:`rounded-xl p-4 border transition-all ${U?"bg-gray-800/60 border-gray-600/50":"bg-gray-900/40 border-gray-800/50 opacity-60"}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{onClick:()=>c(F,!U),className:`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${U?"bg-secondary":"bg-gray-700"}`,children:_.jsx("div",{className:`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${U?"translate-x-6":"translate-x-0.5"}`})}),_.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[_.jsx("span",{className:"text-lg",children:N==null?void 0:N.emoji}),_.jsx("span",{className:"text-sm truncate",children:x.name}),_.jsx("span",{className:"text-gray-600 text-xs",children:"×"}),_.jsx("span",{className:"text-sm truncate",children:v.name}),_.jsx("span",{className:"text-lg",children:P==null?void 0:P.emoji})]}),_.jsxs("div",{className:"flex-shrink-0 text-right",children:[_.jsx("span",{className:`text-lg font-bold ${y.displayScore>=85?"text-primary":y.displayScore>=70?"text-accent":y.displayScore>=55?"text-secondary":"text-gray-400"}`,children:y.displayScore}),_.jsx("span",{className:"text-xs text-gray-500",children:"点"})]})]}),_.jsx("div",{className:"mt-1 ml-15 text-xs text-gray-500 pl-[60px]",children:y.typeName})]},F)})})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"称号プレビュー"}),_.jsx("div",{className:"space-y-2",children:s.map((y,x)=>{const v=y.targetIds.map(N=>r.find(P=>P.id===N)).filter(Boolean);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-2 border border-gray-700/30",children:[_.jsx("span",{className:"text-xl",children:y.emoji}),_.jsxs("div",{className:"flex-1",children:[_.jsx("span",{className:"text-sm font-medium text-accent",children:y.title}),_.jsx("span",{className:"text-xs text-gray-500 ml-2",children:v.map(N=>N.name).join(" & ")})]})]},x)})})]}),_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsx("div",{className:"flex gap-3 max-w-lg mx-auto",children:p?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:f,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:()=>{},className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl transition-all",children:"✅ 公開済み"})]}):_.jsx("button",{onClick:u,className:"flex-1 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95 animate-glow",children:"🎉 結果を公開する"})})})]})},sk=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onReshuffle:c,onShowMatrix:u,reshuffleCount:f})=>{const[p,g]=ne.useState("countdown"),[y,x]=ne.useState(3),[v,N]=ne.useState(0),[P,F]=ne.useState(0),[U,R]=ne.useState(!1),[L,q]=ne.useState(null),Y=[...r].sort((te,re)=>{const ve=n.find(je=>je.participantId===te.id),Ce=n.find(je=>je.participantId===re.id);return((ve==null?void 0:ve.seatIndex)??0)-((Ce==null?void 0:Ce.seatIndex)??0)});ne.useEffect(()=>{if(f>1){g("done"),N(r.length),F(10);return}if(p==="countdown"){const te=setInterval(()=>{x(re=>re<=1?(clearInterval(te),g("seats"),0):re-1)},1e3);return()=>clearInterval(te)}if(p==="seats"){const te=setInterval(()=>{N(re=>re>=r.length?(clearInterval(te),setTimeout(()=>g("scores"),500),re):re+1)},400);return()=>clearInterval(te)}if(p==="scores"){const te=se(),re=setInterval(()=>{F(ve=>ve>=te.length?(clearInterval(re),setTimeout(()=>g("awards"),500),ve):ve+1)},800);return()=>clearInterval(re)}p==="awards"&&setTimeout(()=>g("done"),2e3)},[p,r.length,f]);function se(){const te=[];for(let re=0;re<Y.length-1;re++){const ve=Y[re],Ce=Y[re+1],je=Bs(e,ve.id,Ce.id);je&&te.push({p1:ve,p2:Ce,result:je})}return te}const ie=se();return p==="countdown"?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-8xl font-black text-primary animate-pop",children:y},y),_.jsx("p",{className:"text-gray-400 mt-4",children:"運命の席順を発表..."})]})}):_.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("h2",{className:"text-3xl font-black mb-2 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"席順発表！"})}),_.jsx("p",{className:"text-gray-400 text-sm",children:"🍻 この席順で乾杯！"})]}),_.jsx("div",{className:"mb-8",children:_.jsx(ak,{participants:Y,revealedCount:v,layout:l})}),(p==="scores"||p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"隣り合うペアの相性"}),_.jsx("div",{className:"space-y-3",children:ie.map((te,re)=>{if(re>=P&&p!=="done")return null;const ve=ht.find(nt=>nt.id===te.p1.avatar),Ce=ht.find(nt=>nt.id===te.p2.avatar),je=`${te.p1.id}-${te.p2.id}`;return _.jsxs("div",{className:"animate-slide-up",style:{animationDelay:`${re*.1}s`},children:[_.jsxs("button",{onClick:()=>q(L===je?null:je),className:"w-full bg-gray-800/60 rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-2xl",children:ve==null?void 0:ve.emoji}),_.jsx("span",{className:"text-sm font-medium",children:te.p1.name}),_.jsx("span",{className:"text-gray-600",children:"×"}),_.jsx("span",{className:"text-sm font-medium",children:te.p2.name}),_.jsx("span",{className:"text-2xl",children:Ce==null?void 0:Ce.emoji})]}),_.jsx("div",{className:"text-right",children:_.jsx(ok,{score:te.result.displayScore})})]}),_.jsx("div",{className:"mt-2 text-sm text-secondary font-medium",children:te.result.typeName})]}),L===je&&_.jsx("div",{className:"mt-2 space-y-2 animate-slide-up",children:lk(te.result).map((nt,rt)=>_.jsxs("div",{className:"bg-gray-900/60 rounded-xl p-3 border border-gray-700/30",children:[_.jsx("div",{className:"text-xs text-accent mb-1",children:["💬 共通点探し","🔍 違い発見","💭 妄想系"][rt]}),_.jsx("p",{className:"text-sm",children:nt})]},rt))})]},je)})})]}),(p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8 animate-fade-in",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"称号発表！"}),_.jsx("div",{className:"space-y-3",children:s.map((te,re)=>{const ve=te.targetIds.map(Ce=>r.find(je=>je.id===Ce)).filter(Boolean);return _.jsx("div",{className:"bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-accent/20 animate-pop",style:{animationDelay:`${re*.15}s`},children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-3xl",children:te.emoji}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold text-accent",children:te.title}),_.jsx("div",{className:"text-sm text-gray-300",children:te.description}),_.jsx("div",{className:"text-xs text-gray-500 mt-1",children:ve.map(Ce=>Ce.name).join(" & ")})]})]})},re)})})]}),p==="done"&&_.jsx("p",{className:"text-center text-xs text-gray-600 mb-6",children:"※ あくまでお楽しみ診断です"}),p==="done"&&_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsxs("div",{className:"flex gap-3 max-w-lg mx-auto",children:[c&&_.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all active:scale-95",children:"📊 相性一覧"})]})})]})};function ok({score:r}){const e=r>=85?"text-primary":r>=70?"text-accent":r>=55?"text-secondary":"text-gray-400";return _.jsxs("span",{className:`text-2xl font-black ${e}`,children:[r,_.jsx("span",{className:"text-sm font-normal text-gray-500",children:"点"})]})}function lk(r){var p,g,y;const e=Object.entries(r.axisScores);e.sort((x,v)=>v[1]-x[1]);const n=e[0][0],s=e[e.length-1][0],l=[],c=((p=fu[n])==null?void 0:p.common)??[],u=((g=fu[s])==null?void 0:g.diff)??[],f=((y=fu.L)==null?void 0:y.common)??[];return l.push(c[Math.floor(Math.random()*c.length)]??"好きな食べ物は？"),l.push(u[Math.floor(Math.random()*u.length)]??"お互いの趣味を紹介！"),l.push(f[Math.floor(Math.random()*f.length)]??"もし2人でドラマに出るなら？"),l}function ak({participants:r,revealedCount:e,layout:n}){const s=Math.ceil(r.length/2);if(n==="facing-long"||n==="facing-short"||n==="alternate"){const l=r.slice(0,s),c=r.slice(s);return _.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-3 justify-center",children:l.map((u,f)=>_.jsx(sl,{participant:u,revealed:f<e,delay:f*.2},u.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full my-2"}),_.jsx("div",{className:"flex gap-3 justify-center",children:c.map((u,f)=>_.jsx(sl,{participant:u,revealed:s+f<e,delay:(s+f)*.2},u.id))})]})}return n==="round"?_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"relative",style:{width:280,height:260},children:[_.jsx("div",{className:"absolute rounded-full bg-amber-900/30 border-2 border-amber-800/40",style:{width:100*1.2,height:100*1.2,left:140-100*.6,top:130-100*.6}}),r.map((f,p)=>{const g=2*Math.PI*p/r.length-Math.PI/2,y=140+100*Math.cos(g)-32,x=130+100*Math.sin(g)-28;return _.jsx("div",{className:"absolute",style:{left:y,top:x},children:_.jsx(sl,{participant:f,revealed:p<e,delay:p*.2,compact:!0})},f.id)})]})}):_.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-2 justify-center flex-wrap",children:r.map((l,c)=>_.jsx(sl,{participant:l,revealed:c<e,delay:c*.2},l.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full"})]})}function sl({participant:r,revealed:e,delay:n,compact:s}){const l=ht.find(c=>c.id===r.avatar);return e?_.jsxs("div",{className:`${s?"w-14 p-1.5":"w-16 p-2"} bg-gray-800/80 rounded-xl border border-gray-600/50 text-center animate-slot-spin`,style:{animationDelay:`${n}s`},children:[_.jsx("div",{className:s?"text-xl":"text-2xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:`${s?"text-[10px]":"text-xs"} font-medium mt-1 truncate`,children:r.name})]}):_.jsx("div",{className:`${s?"w-14 h-14":"w-16 h-20"} bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center`,children:_.jsx("span",{className:"text-gray-600 text-lg",children:"?"})})}const ck={E:"テンション波長",C:"会話スタイル",V:"価値観ベクトル",L:"恋愛スタンス",H:"ユーモア相性"},uk=({participants:r,results:e,onBack:n})=>{const[s,l]=ne.useState(null),c=f=>f>=85?"bg-primary/80":f>=70?"bg-accent/60":f>=55?"bg-secondary/50":"bg-gray-600/40",u=f=>f>=85?"text-white font-bold":f>=70||f>=55?"text-white":"text-gray-300";return _.jsxs("div",{className:"min-h-screen px-4 py-8",children:[_.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 席順に戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-6 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-secondary to-teal-400 bg-clip-text text-transparent",children:"相性マトリクス"})}),_.jsx("div",{className:"overflow-x-auto mb-8",children:_.jsxs("table",{className:"w-full border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{className:"w-12"}),r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("th",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:p==null?void 0:p.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]},f.id)})]})}),_.jsx("tbody",{children:r.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("tr",{children:[_.jsxs("td",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:g==null?void 0:g.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]}),r.map((y,x)=>{if(p===x)return _.jsx("td",{className:"p-1",children:_.jsx("div",{className:"w-12 h-12 bg-gray-800/30 rounded-lg flex items-center justify-center",children:_.jsx("span",{className:"text-gray-700",children:"-"})})},y.id);const v=Bs(e,f.id,y.id);return v?_.jsx("td",{className:"p-1",children:_.jsx("button",{onClick:()=>l({p1:f,p2:y,result:v}),className:`w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${c(v.displayScore)}`,children:_.jsx("span",{className:`text-sm ${u(v.displayScore)}`,children:v.displayScore})})},y.id):_.jsx("td",{},y.id)})]},f.id)})})]})}),_.jsxs("div",{className:"flex items-center justify-center gap-4 mb-8 text-xs text-gray-400",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-primary/80"})," 85+"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-accent/60"})," 70-84"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-secondary/50"})," 55-69"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-gray-600/40"})," 40-54"]})]}),s&&_.jsx(dk,{p1:s.p1,p2:s.p2,result:s.result,onClose:()=>l(null)}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"みんなのタイプ"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("div",{className:"bg-gray-800/60 rounded-xl p-3 border border-gray-700/50",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("span",{className:"text-2xl",children:p==null?void 0:p.emoji}),_.jsx("span",{className:"font-medium text-sm",children:f.name})]}),_.jsxs("div",{className:"text-lg",children:[f.personalTypeEmoji," ",f.personalType]}),f.vector&&_.jsx("div",{className:"mt-2 space-y-1",children:["E","C","V","L","H"].map((g,y)=>_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[10px] text-gray-500 w-8",children:g}),_.jsx("div",{className:"flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all",style:{width:`${(f.vector[y]-1)/4*100}%`}})}),_.jsx("span",{className:"text-[10px] text-gray-500",children:f.vector[y].toFixed(1)})]},g))})]},f.id)})})]})]})};function dk({p1:r,p2:e,result:n,onClose:s}){const l=ht.find(u=>u.id===r.avatar),c=ht.find(u=>u.id===e.avatar);return _.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6",onClick:s,children:_.jsxs("div",{className:"bg-dark-200 rounded-2xl p-6 w-full max-w-sm border border-gray-700 animate-pop",onClick:u=>u.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:"text-sm font-medium",children:r.name})]}),_.jsx("div",{className:"text-2xl text-primary",children:"×"}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:c==null?void 0:c.emoji}),_.jsx("div",{className:"text-sm font-medium",children:e.name})]})]}),_.jsxs("div",{className:"text-center mb-4",children:[_.jsx("span",{className:"text-4xl font-black text-primary",children:n.displayScore}),_.jsx("span",{className:"text-lg text-gray-400",children:"点"})]}),_.jsx("div",{className:"text-center text-secondary font-medium mb-6",children:n.typeName}),_.jsx("div",{className:"space-y-3 mb-6",children:["E","C","V","L","H"].map(u=>{const p=n.axisScores[u]*100;return _.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[_.jsx("span",{className:"text-gray-400",children:ck[u]}),_.jsxs("span",{className:"text-gray-300",children:[Math.round(p),"%"]})]}),_.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500",style:{width:`${p}%`}})})]},u)})}),_.jsx("button",{onClick:s,className:"w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all",children:"閉じる"})]})})}const hk=()=>{var F,U;const r=NI(),[e,n]=ne.useState("loading"),[s,l]=ne.useState(1);ne.useEffect(()=>{r.isReady&&e==="loading"&&n("top")},[r.isReady,e]),ne.useEffect(()=>{var L;if(!r.roomData||!r.role)return;const R=r.roomData.config.state;r.role==="participant"&&(R==="diagnosing"&&r.myParticipant&&!r.myParticipant.completed?n("diagnosis"):R==="diagnosing"&&((L=r.myParticipant)!=null&&L.completed)||R==="admin-review"&&!r.revealed?n("waiting-results"):R==="results"&&r.revealed&&n("result")),r.role==="admin"&&R==="diagnosing"&&r.allCompleted&&e==="diagnosis"&&f()},[(F=r.roomData)==null?void 0:F.config.state,r.allCompleted,r.revealed,(U=r.myParticipant)==null?void 0:U.completed]);const c=ne.useCallback(async(R,L)=>{const q=await mI(R,L);r.setRoomCode(q),n("waiting")},[r]),u=ne.useCallback(async()=>{r.roomCode&&(await wI(r.roomCode),n("diagnosis"))},[r.roomCode]),f=ne.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const R=r.participants.map(re=>{const ve=MI(re.answers),Ce=AI(ve);return{...re,vector:ve,personalType:Ce.name,personalTypeEmoji:Ce.emoji}}),L=HI(R),q=r.roomData.config.mode,Y=r.roomData.config.layout,se=dl(R,L,Y,q),ie=Gm(R,L,se),te={};for(const re of R)te[re.id]={vector:re.vector,personalType:re.personalType,personalTypeEmoji:re.personalTypeEmoji};await CI(r.roomCode,L,se,ie,te),n("admin-review")},[r.roomCode,r.roomData,r.participants]),p=ne.useCallback(async(R,L)=>{r.roomCode&&await EI(r.roomCode,R,L)},[r.roomCode]),g=ne.useCallback(async()=>{r.roomCode&&await SI(r.roomCode)},[r.roomCode]),y=ne.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const R=s+1,L=r.roomData.config.mode,q=r.roomData.config.layout,Y=qI(r.participants,r.compatibilityResults,q,L,R,r.seatAssignments),se=Gm(r.participants,r.compatibilityResults,Y);await II(r.roomCode,Y,se),l(R)},[r.roomCode,r.roomData,r.participants,r.compatibilityResults,r.seatAssignments,s]),x=ne.useCallback(async R=>{const L=await _I(R);L&&(r.setRoomCode(R),L.adminId===r.uid?L.state==="waiting"?n("waiting"):L.state==="admin-review"?n("admin-review"):L.state==="results"?n("result"):n("waiting"):n("profile"))},[r]),v=ne.useCallback(async R=>{r.roomCode&&(await yI(r.roomCode,{name:R.name,gender:R.gender,avatar:R.avatar}),n("waiting"))},[r.roomCode]),N=ne.useCallback(async R=>{r.roomCode&&(await xI(r.roomCode,R),r.role==="admin"?n("waiting"):n("waiting-results"))},[r.roomCode,r.role]),P=ne.useCallback(async()=>{r.roomCode&&e==="waiting"&&r.role==="participant"&&await vI(r.roomCode),r.setRoomCode(""),n("top")},[r,e]);return e==="loading"?_.jsx("div",{className:"min-h-screen flex items-center justify-center",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-4xl mb-4",children:"🍻"}),_.jsx("p",{className:"text-gray-400",children:"読み込み中..."})]})}):_.jsxs("div",{className:"max-w-lg mx-auto",children:[e==="top"&&_.jsx(YI,{onStart:()=>n("setup"),onJoin:()=>n("join")}),e==="setup"&&_.jsx(JI,{onComplete:c,onBack:()=>n("top")}),e==="join"&&_.jsx(ZI,{onJoin:x,onBack:()=>n("top")}),e==="profile"&&r.roomData&&_.jsx(ek,{mode:r.roomData.config.mode,usedAvatars:r.participants.map(R=>R.avatar),onSubmit:v,onBack:P}),e==="waiting"&&r.roomCode&&_.jsx(tk,{roomCode:r.roomCode,participants:r.participants,role:r.role,onStartDiagnosis:u,onBack:P}),e==="diagnosis"&&r.myParticipant&&_.jsx(rk,{participant:r.myParticipant,onComplete:N}),e==="diagnosis"&&r.role==="admin"&&!r.myParticipant&&_.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-4xl mb-4",children:"📊"}),_.jsx("h2",{className:"text-xl font-bold mb-2",children:"診断進行中"}),_.jsxs("p",{className:"text-gray-400 mb-4",children:[r.participants.filter(R=>R.completed).length," / ",r.participants.length," 人完了"]}),_.jsx("div",{className:"flex justify-center gap-2",children:[0,1,2].map(R=>_.jsx("div",{className:"w-3 h-3 bg-secondary rounded-full animate-bounce",style:{animationDelay:`${R*.15}s`}},R))})]})}),e==="waiting-results"&&_.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🔮"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:"結果を待っています..."}),_.jsx("p",{className:"text-gray-400",children:r.allCompleted?"幹事が結果を準備中です":`${r.participants.filter(R=>R.completed).length} / ${r.participants.length} 人回答済み`}),_.jsx("div",{className:"mt-8 flex justify-center gap-2",children:[0,1,2].map(R=>_.jsx("div",{className:"w-3 h-3 bg-primary rounded-full animate-bounce",style:{animationDelay:`${R*.15}s`}},R))})]})}),e==="admin-review"&&r.roomData&&_.jsx(ik,{participants:r.participants,results:r.compatibilityResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onTogglePair:p,onReveal:g,onReshuffle:y,revealed:r.revealed}),e==="result"&&r.roomData&&_.jsx(sk,{participants:r.participants,results:r.role==="admin"?r.compatibilityResults:r.visibleResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onReshuffle:r.role==="admin"?y:void 0,onShowMatrix:()=>n("matrix"),reshuffleCount:s}),e==="matrix"&&_.jsx(uk,{participants:r.participants,results:r.role==="admin"?r.compatibilityResults:r.visibleResults,onBack:()=>n("result")})]})};h0.createRoot(document.getElementById("root")).render(_.jsx(Qm.StrictMode,{children:_.jsx(hk,{})}));

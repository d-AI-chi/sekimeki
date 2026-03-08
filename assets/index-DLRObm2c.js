(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function Ym(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qc={exports:{}},as={},qc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function o0(){if(bp)return le;bp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function P(S,O,oe){this.props=S,this.context=O,this.refs=b,this.updater=oe||k}P.prototype.isReactComponent={},P.prototype.setState=function(S,O){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,O,"setState")},P.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function z(){}z.prototype=P.prototype;function W(S,O,oe){this.props=S,this.context=O,this.refs=b,this.updater=oe||k}var M=W.prototype=new z;M.constructor=W,R(M,P.prototype),M.isPureReactComponent=!0;var j=Array.isArray,J=Object.prototype.hasOwnProperty,se={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function X(S,O,oe){var ue,me={},ge=null,Se=null;if(O!=null)for(ue in O.ref!==void 0&&(Se=O.ref),O.key!==void 0&&(ge=""+O.key),O)J.call(O,ue)&&!V.hasOwnProperty(ue)&&(me[ue]=O[ue]);var ve=arguments.length-2;if(ve===1)me.children=oe;else if(1<ve){for(var Pe=Array(ve),Et=0;Et<ve;Et++)Pe[Et]=arguments[Et+2];me.children=Pe}if(S&&S.defaultProps)for(ue in ve=S.defaultProps,ve)me[ue]===void 0&&(me[ue]=ve[ue]);return{$$typeof:r,type:S,key:ge,ref:Se,props:me,_owner:se.current}}function he(S,O){return{$$typeof:r,type:S.type,key:O,ref:S.ref,props:S.props,_owner:S._owner}}function fe(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function xe(S){var O={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(oe){return O[oe]})}var Ae=/\/+/g;function Ve(S,O){return typeof S=="object"&&S!==null&&S.key!=null?xe(""+S.key):O.toString(36)}function Mt(S,O,oe,ue,me){var ge=typeof S;(ge==="undefined"||ge==="boolean")&&(S=null);var Se=!1;if(S===null)Se=!0;else switch(ge){case"string":case"number":Se=!0;break;case"object":switch(S.$$typeof){case r:case e:Se=!0}}if(Se)return Se=S,me=me(Se),S=ue===""?"."+Ve(Se,0):ue,j(me)?(oe="",S!=null&&(oe=S.replace(Ae,"$&/")+"/"),Mt(me,O,oe,"",function(Et){return Et})):me!=null&&(fe(me)&&(me=he(me,oe+(!me.key||Se&&Se.key===me.key?"":(""+me.key).replace(Ae,"$&/")+"/")+S)),O.push(me)),1;if(Se=0,ue=ue===""?".":ue+":",j(S))for(var ve=0;ve<S.length;ve++){ge=S[ve];var Pe=ue+Ve(ge,ve);Se+=Mt(ge,O,oe,Pe,me)}else if(Pe=v(S),typeof Pe=="function")for(S=Pe.call(S),ve=0;!(ge=S.next()).done;)ge=ge.value,Pe=ue+Ve(ge,ve++),Se+=Mt(ge,O,oe,Pe,me);else if(ge==="object")throw O=String(S),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Se}function qt(S,O,oe){if(S==null)return S;var ue=[],me=0;return Mt(S,ue,"","",function(ge){return O.call(oe,ge,me++)}),ue}function pt(S){if(S._status===-1){var O=S._result;O=O(),O.then(function(oe){(S._status===0||S._status===-1)&&(S._status=1,S._result=oe)},function(oe){(S._status===0||S._status===-1)&&(S._status=2,S._result=oe)}),S._status===-1&&(S._status=0,S._result=O)}if(S._status===1)return S._result.default;throw S._result}var Le={current:null},B={transition:null},te={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:B,ReactCurrentOwner:se};function G(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:qt,forEach:function(S,O,oe){qt(S,function(){O.apply(this,arguments)},oe)},count:function(S){var O=0;return qt(S,function(){O++}),O},toArray:function(S){return qt(S,function(O){return O})||[]},only:function(S){if(!fe(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=P,le.Fragment=n,le.Profiler=l,le.PureComponent=W,le.StrictMode=s,le.Suspense=p,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,le.act=G,le.cloneElement=function(S,O,oe){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ue=R({},S.props),me=S.key,ge=S.ref,Se=S._owner;if(O!=null){if(O.ref!==void 0&&(ge=O.ref,Se=se.current),O.key!==void 0&&(me=""+O.key),S.type&&S.type.defaultProps)var ve=S.type.defaultProps;for(Pe in O)J.call(O,Pe)&&!V.hasOwnProperty(Pe)&&(ue[Pe]=O[Pe]===void 0&&ve!==void 0?ve[Pe]:O[Pe])}var Pe=arguments.length-2;if(Pe===1)ue.children=oe;else if(1<Pe){ve=Array(Pe);for(var Et=0;Et<Pe;Et++)ve[Et]=arguments[Et+2];ue.children=ve}return{$$typeof:r,type:S.type,key:me,ref:ge,props:ue,_owner:Se}},le.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},le.createElement=X,le.createFactory=function(S){var O=X.bind(null,S);return O.type=S,O},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:f,render:S}},le.isValidElement=fe,le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:pt}},le.memo=function(S,O){return{$$typeof:g,type:S,compare:O===void 0?null:O}},le.startTransition=function(S){var O=B.transition;B.transition={};try{S()}finally{B.transition=O}},le.unstable_act=G,le.useCallback=function(S,O){return Le.current.useCallback(S,O)},le.useContext=function(S){return Le.current.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S){return Le.current.useDeferredValue(S)},le.useEffect=function(S,O){return Le.current.useEffect(S,O)},le.useId=function(){return Le.current.useId()},le.useImperativeHandle=function(S,O,oe){return Le.current.useImperativeHandle(S,O,oe)},le.useInsertionEffect=function(S,O){return Le.current.useInsertionEffect(S,O)},le.useLayoutEffect=function(S,O){return Le.current.useLayoutEffect(S,O)},le.useMemo=function(S,O){return Le.current.useMemo(S,O)},le.useReducer=function(S,O,oe){return Le.current.useReducer(S,O,oe)},le.useRef=function(S){return Le.current.useRef(S)},le.useState=function(S){return Le.current.useState(S)},le.useSyncExternalStore=function(S,O,oe){return Le.current.useSyncExternalStore(S,O,oe)},le.useTransition=function(){return Le.current.useTransition()},le.version="18.3.1",le}var Ap;function Wu(){return Ap||(Ap=1,qc.exports=o0()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function l0(){if(Op)return as;Op=1;var r=Wu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var y,w={},v=null,k=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(k=p.ref);for(y in p)s.call(p,y)&&!c.hasOwnProperty(y)&&(w[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)w[y]===void 0&&(w[y]=p[y]);return{$$typeof:e,type:f,key:v,ref:k,props:w,_owner:l.current}}return as.Fragment=n,as.jsx=u,as.jsxs=u,as}var Dp;function a0(){return Dp||(Dp=1,Qc.exports=l0()),Qc.exports}var _=a0(),Y=Wu();const Xm=Ym(Y);var nl={},Yc={exports:{}},wt={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function c0(){return Lp||(Lp=1,(function(r){function e(B,te){var G=B.length;B.push(te);e:for(;0<G;){var S=G-1>>>1,O=B[S];if(0<l(O,te))B[S]=te,B[G]=O,G=S;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var te=B[0],G=B.pop();if(G!==te){B[0]=G;e:for(var S=0,O=B.length,oe=O>>>1;S<oe;){var ue=2*(S+1)-1,me=B[ue],ge=ue+1,Se=B[ge];if(0>l(me,G))ge<O&&0>l(Se,me)?(B[S]=Se,B[ge]=G,S=ge):(B[S]=me,B[ue]=G,S=ue);else if(ge<O&&0>l(Se,G))B[S]=Se,B[ge]=G,S=ge;else break e}}return te}function l(B,te){var G=B.sortIndex-te.sortIndex;return G!==0?G:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,w=null,v=3,k=!1,R=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(B){for(var te=n(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=B)s(g),te.sortIndex=te.expirationTime,e(p,te);else break;te=n(g)}}function j(B){if(b=!1,M(B),!R)if(n(p)!==null)R=!0,pt(J);else{var te=n(g);te!==null&&Le(j,te.startTime-B)}}function J(B,te){R=!1,b&&(b=!1,z(X),X=-1),k=!0;var G=v;try{for(M(te),w=n(p);w!==null&&(!(w.expirationTime>te)||B&&!xe());){var S=w.callback;if(typeof S=="function"){w.callback=null,v=w.priorityLevel;var O=S(w.expirationTime<=te);te=r.unstable_now(),typeof O=="function"?w.callback=O:w===n(p)&&s(p),M(te)}else s(p);w=n(p)}if(w!==null)var oe=!0;else{var ue=n(g);ue!==null&&Le(j,ue.startTime-te),oe=!1}return oe}finally{w=null,v=G,k=!1}}var se=!1,V=null,X=-1,he=5,fe=-1;function xe(){return!(r.unstable_now()-fe<he)}function Ae(){if(V!==null){var B=r.unstable_now();fe=B;var te=!0;try{te=V(!0,B)}finally{te?Ve():(se=!1,V=null)}}else se=!1}var Ve;if(typeof W=="function")Ve=function(){W(Ae)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,qt=Mt.port2;Mt.port1.onmessage=Ae,Ve=function(){qt.postMessage(null)}}else Ve=function(){P(Ae,0)};function pt(B){V=B,se||(se=!0,Ve())}function Le(B,te){X=P(function(){B(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){R||k||(R=!0,pt(J))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var te=3;break;default:te=v}var G=v;v=te;try{return B()}finally{v=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=v;v=B;try{return te()}finally{v=G}},r.unstable_scheduleCallback=function(B,te,G){var S=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?S+G:S):G=S,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=G+O,B={id:y++,callback:te,priorityLevel:B,startTime:G,expirationTime:O,sortIndex:-1},G>S?(B.sortIndex=G,e(g,B),n(p)===null&&B===n(g)&&(b?(z(X),X=-1):b=!0,Le(j,G-S))):(B.sortIndex=O,e(p,B),R||k||(R=!0,pt(J))),B},r.unstable_shouldYield=xe,r.unstable_wrapCallback=function(B){var te=v;return function(){var G=v;v=te;try{return B.apply(this,arguments)}finally{v=G}}}})(Jc)),Jc}var Mp;function u0(){return Mp||(Mp=1,Xc.exports=c0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function d0(){if(jp)return wt;jp=1;var r=Wu(),e=u0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function v(t){return p.call(w,t)?!0:p.call(y,t)?!1:g.test(t)?w[t]=!0:(y[t]=!0,!1)}function k(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,a){if(i===null||typeof i>"u"||k(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){P[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];P[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){P[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){P[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){P[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){P[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){P[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){P[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){P[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(z,W);P[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(z,W);P[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(z,W);P[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){P[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),P.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){P[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function M(t,i,o,a){var d=P.hasOwnProperty(i)?P[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,a)&&(o=null),a||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),se=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),Mt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),B=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,S;function O(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var oe=!1;function ue(t,i){if(!t||oe)return"";oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){var a=T}Reflect.construct(t,[],i)}else{try{i.call()}catch(T){a=T}t.call(i.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,x=h.length-1;1<=m&&0<=x&&d[m]!==h[x];)x--;for(;1<=m&&0<=x;m--,x--)if(d[m]!==h[x]){if(m!==1||x!==1)do if(m--,x--,0>x||d[m]!==h[x]){var C=`
`+d[m].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=m&&0<=x);break}}}finally{oe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?O(t):""}function me(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case se:return"Portal";case he:return"Profiler";case X:return"StrictMode";case Ve:return"Suspense";case Mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xe:return(t.displayName||"Context")+".Consumer";case fe:return(t._context.displayName||"Context")+".Provider";case Ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qt:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case pt:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(t){var i=Pe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function $s(t){t._valueTracker||(t._valueTracker=Et(t))}function Md(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Pe(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Gs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ta(t,i){var o=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function jd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Fd(t,i){i=i.checked,i!=null&&M(t,"checked",i,!1)}function na(t,i){Fd(t,i);var o=ve(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ra(t,i.type,o):i.hasOwnProperty("defaultValue")&&ra(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ud(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ra(t,i,o){(i!=="number"||Gs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ei=Array.isArray;function Tr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ia(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ei(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ve(o)}}function Wd(t,i){var o=ve(i.value),a=ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Vd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Bd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Bd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,Hd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Si(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uy=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){uy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ii[i]=Ii[t]})});function $d(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+i).trim():i+"px"}function Gd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=$d(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var dy=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(t,i){if(i){if(dy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function la(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Rr=null,Pr=null;function Kd(t){if(t=Ki(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),ua(t.stateNode,t.type,i))}}function Qd(t){Rr?Pr?Pr.push(t):Pr=[t]:Rr=t}function qd(){if(Rr){var t=Rr,i=Pr;if(Pr=Rr=null,Kd(t),i)for(t=0;t<i.length;t++)Kd(i[t])}}function Yd(t,i){return t(i)}function Xd(){}var da=!1;function Jd(t,i,o){if(da)return t(i,o);da=!0;try{return Yd(t,i,o)}finally{da=!1,(Rr!==null||Pr!==null)&&(Xd(),qd())}}function ki(t,i){var o=t.stateNode;if(o===null)return null;var a=_o(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ha=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{ha=!1}function hy(t,i,o,a,d,h,m,x,C){var T=Array.prototype.slice.call(arguments,3);try{i.apply(o,T)}catch(D){this.onError(D)}}var Ti=!1,Qs=null,qs=!1,fa=null,fy={onError:function(t){Ti=!0,Qs=t}};function py(t,i,o,a,d,h,m,x,C){Ti=!1,Qs=null,hy.apply(fy,arguments)}function my(t,i,o,a,d,h,m,x,C){if(py.apply(this,arguments),Ti){if(Ti){var T=Qs;Ti=!1,Qs=null}else throw Error(n(198));qs||(qs=!0,fa=T)}}function ir(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function eh(t){if(ir(t)!==t)throw Error(n(188))}function gy(t){var i=t.alternate;if(!i){if(i=ir(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return eh(d),t;if(h===a)return eh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,x=d.child;x;){if(x===o){m=!0,o=d,a=h;break}if(x===a){m=!0,a=d,o=h;break}x=x.sibling}if(!m){for(x=h.child;x;){if(x===o){m=!0,o=h,a=d;break}if(x===a){m=!0,a=h,o=d;break}x=x.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function th(t){return t=gy(t),t!==null?nh(t):null}function nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=nh(t);if(i!==null)return i;t=t.sibling}return null}var rh=e.unstable_scheduleCallback,ih=e.unstable_cancelCallback,_y=e.unstable_shouldYield,yy=e.unstable_requestPaint,Ue=e.unstable_now,vy=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,sh=e.unstable_UserBlockingPriority,Ys=e.unstable_NormalPriority,wy=e.unstable_LowPriority,oh=e.unstable_IdlePriority,Xs=null,Yt=null;function xy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Xs,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Sy,Cy=Math.log,Ey=Math.LN2;function Sy(t){return t>>>=0,t===0?32:31-(Cy(t)/Ey|0)|0}var Js=64,Zs=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var x=m&~d;x!==0?a=Ri(x):(h&=m,h!==0&&(a=Ri(h)))}else m=o&~d,m!==0?a=Ri(m):h!==0&&(a=Ri(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&d)===0&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-jt(i),d=1<<o,a|=t[o],i&=~d;return a}function Iy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),x=1<<m,C=d[m];C===-1?((x&o)===0||(x&a)!==0)&&(d[m]=Iy(x,i)):C<=i&&(t.expiredLanes|=x),h&=~x}}function ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lh(){var t=Js;return Js<<=1,(Js&4194240)===0&&(Js=64),t}function ga(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function Ny(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function _a(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-jt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var we=0;function ah(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ch,ya,uh,dh,hh,va=!1,to=[],Cn=null,En=null,Sn=null,bi=new Map,Ai=new Map,In=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,i){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(i.pointerId)}}function Oi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Ki(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Ry(t,i,o,a,d){switch(i){case"focusin":return Cn=Oi(Cn,t,i,o,a,d),!0;case"dragenter":return En=Oi(En,t,i,o,a,d),!0;case"mouseover":return Sn=Oi(Sn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return bi.set(h,Oi(bi.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,Ai.set(h,Oi(Ai.get(h)||null,t,i,o,a,d)),!0}return!1}function ph(t){var i=sr(t.target);if(i!==null){var o=ir(i);if(o!==null){if(i=o.tag,i===13){if(i=Zd(o),i!==null){t.blockedOn=i,hh(t.priority,function(){uh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=xa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);aa=a,o.target.dispatchEvent(a),aa=null}else return i=Ki(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function mh(t,i,o){no(t)&&o.delete(i)}function Py(){va=!1,Cn!==null&&no(Cn)&&(Cn=null),En!==null&&no(En)&&(En=null),Sn!==null&&no(Sn)&&(Sn=null),bi.forEach(mh),Ai.forEach(mh)}function Di(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Py)))}function Li(t){function i(d){return Di(d,t)}if(0<to.length){Di(to[0],t);for(var o=1;o<to.length;o++){var a=to[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Cn!==null&&Di(Cn,t),En!==null&&Di(En,t),Sn!==null&&Di(Sn,t),bi.forEach(i),Ai.forEach(i),o=0;o<In.length;o++)a=In[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<In.length&&(o=In[0],o.blockedOn===null);)ph(o),o.blockedOn===null&&In.shift()}var br=j.ReactCurrentBatchConfig,ro=!0;function by(t,i,o,a){var d=we,h=br.transition;br.transition=null;try{we=1,wa(t,i,o,a)}finally{we=d,br.transition=h}}function Ay(t,i,o,a){var d=we,h=br.transition;br.transition=null;try{we=4,wa(t,i,o,a)}finally{we=d,br.transition=h}}function wa(t,i,o,a){if(ro){var d=xa(t,i,o,a);if(d===null)Fa(t,i,a,io,o),fh(t,a);else if(Ry(d,t,i,o,a))a.stopPropagation();else if(fh(t,a),i&4&&-1<Ty.indexOf(t)){for(;d!==null;){var h=Ki(d);if(h!==null&&ch(h),h=xa(t,i,o,a),h===null&&Fa(t,i,a,io,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var io=null;function xa(t,i,o,a){if(io=null,t=ca(a),t=sr(t),t!==null)if(i=ir(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case pa:return 1;case sh:return 4;case Ys:case wy:return 16;case oh:return 536870912;default:return 16}default:return 16}}var kn=null,Ca=null,so=null;function _h(){if(so)return so;var t,i=Ca,o=i.length,a,d="value"in kn?kn.value:kn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return so=d.slice(t,1<a?1-a:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function yh(){return!1}function St(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(o=t[x],this[x]=o?o(h):h[x]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:yh,this.isPropagationStopped=yh,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=St(Ar),Mi=G({},Ar,{view:0,detail:0}),Oy=St(Mi),Sa,Ia,ji,ao=G({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Sa=t.screenX-ji.screenX,Ia=t.screenY-ji.screenY):Ia=Sa=0,ji=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),vh=St(ao),Dy=G({},ao,{dataTransfer:0}),Ly=St(Dy),My=G({},Mi,{relatedTarget:0}),ka=St(My),jy=G({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=St(jy),Uy=G({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zy=St(Uy),Wy=G({},Ar,{data:0}),wh=St(Wy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Hy[t])?!!i[t]:!1}function Na(){return $y}var Gy=G({},Mi,{key:function(t){if(t.key){var i=Vy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?By[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ky=St(Gy),Qy=G({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=St(Qy),qy=G({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),Yy=St(qy),Xy=G({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=St(Xy),Zy=G({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=St(Zy),tv=[9,13,27,32],Ta=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var nv=f&&"TextEvent"in window&&!Fi,Ch=f&&(!Ta||Fi&&8<Fi&&11>=Fi),Eh=" ",Sh=!1;function Ih(t,i){switch(t){case"keyup":return tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function rv(t,i){switch(t){case"compositionend":return kh(i);case"keypress":return i.which!==32?null:(Sh=!0,Eh);case"textInput":return t=i.data,t===Eh&&Sh?null:t;default:return null}}function iv(t,i){if(Or)return t==="compositionend"||!Ta&&Ih(t,i)?(t=_h(),so=Ca=kn=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ch&&i.locale!=="ko"?null:i.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!sv[t.type]:i==="textarea"}function Th(t,i,o,a){Qd(a),i=po(i,"onChange"),0<i.length&&(o=new Ea("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Ui=null,zi=null;function ov(t){Gh(t,0)}function co(t){var i=Fr(t);if(Md(i))return t}function lv(t,i){if(t==="change")return i}var Rh=!1;if(f){var Ra;if(f){var Pa="oninput"in document;if(!Pa){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),Pa=typeof Ph.oninput=="function"}Ra=Pa}else Ra=!1;Rh=Ra&&(!document.documentMode||9<document.documentMode)}function bh(){Ui&&(Ui.detachEvent("onpropertychange",Ah),zi=Ui=null)}function Ah(t){if(t.propertyName==="value"&&co(zi)){var i=[];Th(i,zi,t,ca(t)),Jd(ov,i)}}function av(t,i,o){t==="focusin"?(bh(),Ui=i,zi=o,Ui.attachEvent("onpropertychange",Ah)):t==="focusout"&&bh()}function cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(zi)}function uv(t,i){if(t==="click")return co(i)}function dv(t,i){if(t==="input"||t==="change")return co(i)}function hv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:hv;function Wi(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Ft(t[d],i[d]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,i){var o=Oh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function Lh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Lh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var t=window,i=Gs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Gs(t.document)}return i}function ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function fv(t){var i=Mh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Lh(o.ownerDocument.documentElement,o)){if(a!==null&&ba(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=Dh(o,h);var m=Dh(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pv=f&&"documentMode"in document&&11>=document.documentMode,Dr=null,Aa=null,Vi=null,Oa=!1;function jh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Oa||Dr==null||Dr!==Gs(a)||(a=Dr,"selectionStart"in a&&ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vi&&Wi(Vi,a)||(Vi=a,a=po(Aa,"onSelect"),0<a.length&&(i=new Ea("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Dr)))}function uo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Lr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Da={},Fh={};f&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ho(t){if(Da[t])return Da[t];if(!Lr[t])return t;var i=Lr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Fh)return Da[t]=i[o];return t}var Uh=ho("animationend"),zh=ho("animationiteration"),Wh=ho("animationstart"),Vh=ho("transitionend"),Bh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){Bh.set(t,i),c(i,[t])}for(var La=0;La<Hh.length;La++){var Ma=Hh[La],mv=Ma.toLowerCase(),gv=Ma[0].toUpperCase()+Ma.slice(1);Nn(mv,"on"+gv)}Nn(Uh,"onAnimationEnd"),Nn(zh,"onAnimationIteration"),Nn(Wh,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Vh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function $h(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,my(a,i,void 0,t),t.currentTarget=null}function Gh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var x=a[m],C=x.instance,T=x.currentTarget;if(x=x.listener,C!==h&&d.isPropagationStopped())break e;$h(d,x,T),h=C}else for(m=0;m<a.length;m++){if(x=a[m],C=x.instance,T=x.currentTarget,x=x.listener,C!==h&&d.isPropagationStopped())break e;$h(d,x,T),h=C}}}if(qs)throw t=fa,qs=!1,fa=null,t}function Te(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(Kh(i,t,2,!1),o.add(a))}function ja(t,i,o){var a=0;i&&(a|=4),Kh(o,t,a,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[fo]){t[fo]=!0,s.forEach(function(o){o!=="selectionchange"&&(_v.has(o)||ja(o,!1,t),ja(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,ja("selectionchange",!1,i))}}function Kh(t,i,o,a){switch(gh(i)){case 1:var d=by;break;case 4:d=Ay;break;default:d=wa}o=d.bind(null,i,o,t),d=void 0,!ha||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,d){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var x=a.stateNode.containerInfo;if(x===d||x.nodeType===8&&x.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var C=m.tag;if((C===3||C===4)&&(C=m.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;m=m.return}for(;x!==null;){if(m=sr(x),m===null)return;if(C=m.tag,C===5||C===6){a=h=m;continue e}x=x.parentNode}}a=a.return}Jd(function(){var T=h,D=ca(o),L=[];e:{var A=Bh.get(t);if(A!==void 0){var H=Ea,K=t;switch(t){case"keypress":if(oo(o)===0)break e;case"keydown":case"keyup":H=Ky;break;case"focusin":K="focus",H=ka;break;case"focusout":K="blur",H=ka;break;case"beforeblur":case"afterblur":H=ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Yy;break;case Uh:case zh:case Wh:H=Fy;break;case Vh:H=Jy;break;case"scroll":H=Oy;break;case"wheel":H=ev;break;case"copy":case"cut":case"paste":H=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=xh}var Q=(i&4)!==0,ze=!Q&&t==="scroll",I=Q?A!==null?A+"Capture":null:A;Q=[];for(var E=T,N;E!==null;){N=E;var F=N.stateNode;if(N.tag===5&&F!==null&&(N=F,I!==null&&(F=ki(E,I),F!=null&&Q.push($i(E,F,N)))),ze)break;E=E.return}0<Q.length&&(A=new H(A,K,null,o,D),L.push({event:A,listeners:Q}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",A&&o!==aa&&(K=o.relatedTarget||o.fromElement)&&(sr(K)||K[sn]))break e;if((H||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,H?(K=o.relatedTarget||o.toElement,H=T,K=K?sr(K):null,K!==null&&(ze=ir(K),K!==ze||K.tag!==5&&K.tag!==6)&&(K=null)):(H=null,K=T),H!==K)){if(Q=vh,F="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(Q=xh,F="onPointerLeave",I="onPointerEnter",E="pointer"),ze=H==null?A:Fr(H),N=K==null?A:Fr(K),A=new Q(F,E+"leave",H,o,D),A.target=ze,A.relatedTarget=N,F=null,sr(D)===T&&(Q=new Q(I,E+"enter",K,o,D),Q.target=N,Q.relatedTarget=ze,F=Q),ze=F,H&&K)t:{for(Q=H,I=K,E=0,N=Q;N;N=Mr(N))E++;for(N=0,F=I;F;F=Mr(F))N++;for(;0<E-N;)Q=Mr(Q),E--;for(;0<N-E;)I=Mr(I),N--;for(;E--;){if(Q===I||I!==null&&Q===I.alternate)break t;Q=Mr(Q),I=Mr(I)}Q=null}else Q=null;H!==null&&Qh(L,A,H,Q,!1),K!==null&&ze!==null&&Qh(L,ze,K,Q,!0)}}e:{if(A=T?Fr(T):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var q=lv;else if(Nh(A))if(Rh)q=dv;else{q=cv;var Z=av}else(H=A.nodeName)&&H.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(q=uv);if(q&&(q=q(t,T))){Th(L,q,o,D);break e}Z&&Z(t,A,T),t==="focusout"&&(Z=A._wrapperState)&&Z.controlled&&A.type==="number"&&ra(A,"number",A.value)}switch(Z=T?Fr(T):window,t){case"focusin":(Nh(Z)||Z.contentEditable==="true")&&(Dr=Z,Aa=T,Vi=null);break;case"focusout":Vi=Aa=Dr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,jh(L,o,D);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":jh(L,o,D)}var ee;if(Ta)e:{switch(t){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Or?Ih(t,o)&&(re="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(re="onCompositionStart");re&&(Ch&&o.locale!=="ko"&&(Or||re!=="onCompositionStart"?re==="onCompositionEnd"&&Or&&(ee=_h()):(kn=D,Ca="value"in kn?kn.value:kn.textContent,Or=!0)),Z=po(T,re),0<Z.length&&(re=new wh(re,t,null,o,D),L.push({event:re,listeners:Z}),ee?re.data=ee:(ee=kh(o),ee!==null&&(re.data=ee)))),(ee=nv?rv(t,o):iv(t,o))&&(T=po(T,"onBeforeInput"),0<T.length&&(D=new wh("onBeforeInput","beforeinput",null,o,D),L.push({event:D,listeners:T}),D.data=ee))}Gh(L,i)})}function $i(t,i,o){return{instance:t,listener:i,currentTarget:o}}function po(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,d)),h=ki(t,i),h!=null&&a.push($i(t,h,d))),t=t.return}return a}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var x=o,C=x.alternate,T=x.stateNode;if(C!==null&&C===a)break;x.tag===5&&T!==null&&(x=T,d?(C=ki(o,h),C!=null&&m.unshift($i(o,C,x))):d||(C=ki(o,h),C!=null&&m.push($i(o,C,x)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var yv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(yv,`
`).replace(vv,"")}function mo(t,i,o){if(i=qh(i),qh(t)!==i&&o)throw Error(n(425))}function go(){}var Ua=null,za=null;function Wa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,wv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(Cv)}:Va;function Cv(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Li(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Li(i)}function Tn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Xh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+jr,Gi="__reactProps$"+jr,sn="__reactContainer$"+jr,Ha="__reactEvents$"+jr,Ev="__reactListeners$"+jr,Sv="__reactHandles$"+jr;function sr(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Xh(t);t!==null;){if(o=t[Xt])return o;t=Xh(t)}return i}t=o,o=t.parentNode}return null}function Ki(t){return t=t[Xt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[Gi]||null}var $a=[],Ur=-1;function Rn(t){return{current:t}}function Re(t){0>Ur||(t.current=$a[Ur],$a[Ur]=null,Ur--)}function Ie(t,i){Ur++,$a[Ur]=t.current,t.current=i}var Pn={},nt=Rn(Pn),mt=Rn(!1),or=Pn;function zr(t,i){var o=t.type.contextTypes;if(!o)return Pn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function gt(t){return t=t.childContextTypes,t!=null}function yo(){Re(mt),Re(nt)}function Jh(t,i,o){if(nt.current!==Pn)throw Error(n(168));Ie(nt,i),Ie(mt,o)}function Zh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Se(t)||"Unknown",d));return G({},o,a)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,or=nt.current,Ie(nt,t),Ie(mt,mt.current),!0}function ef(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Zh(t,i,or),a.__reactInternalMemoizedMergedChildContext=t,Re(mt),Re(nt),Ie(nt,t)):Re(mt),Ie(mt,o)}var on=null,wo=!1,Ga=!1;function tf(t){on===null?on=[t]:on.push(t)}function Iv(t){wo=!0,tf(t)}function bn(){if(!Ga&&on!==null){Ga=!0;var t=0,i=we;try{var o=on;for(we=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}on=null,wo=!1}catch(d){throw on!==null&&(on=on.slice(t+1)),rh(pa,bn),d}finally{we=i,Ga=!1}}return null}var Wr=[],Vr=0,xo=null,Co=0,Tt=[],Rt=0,lr=null,ln=1,an="";function ar(t,i){Wr[Vr++]=Co,Wr[Vr++]=xo,xo=t,Co=i}function nf(t,i,o){Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=lr,lr=t;var a=ln;t=an;var d=32-jt(a)-1;a&=~(1<<d),o+=1;var h=32-jt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ln=1<<32-jt(i)+d|o<<d|a,an=h+t}else ln=1<<h|o<<d|a,an=t}function Ka(t){t.return!==null&&(ar(t,1),nf(t,1,0))}function Qa(t){for(;t===xo;)xo=Wr[--Vr],Wr[Vr]=null,Co=Wr[--Vr],Wr[Vr]=null;for(;t===lr;)lr=Tt[--Rt],Tt[Rt]=null,an=Tt[--Rt],Tt[Rt]=null,ln=Tt[--Rt],Tt[Rt]=null}var It=null,kt=null,be=!1,Ut=null;function rf(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function sf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,kt=Tn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=lr!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,kt=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(be){var i=kt;if(i){var o=i;if(!sf(t,i)){if(qa(t))throw Error(n(418));i=Tn(o.nextSibling);var a=It;i&&sf(t,i)?rf(a,o):(t.flags=t.flags&-4097|2,be=!1,It=t)}}else{if(qa(t))throw Error(n(418));t.flags=t.flags&-4097|2,be=!1,It=t}}}function of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Eo(t){if(t!==It)return!1;if(!be)return of(t),be=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Wa(t.type,t.memoizedProps)),i&&(i=kt)){if(qa(t))throw lf(),Error(n(418));for(;i;)rf(t,i),i=Tn(i.nextSibling)}if(of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kt=Tn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kt=null}}else kt=It?Tn(t.stateNode.nextSibling):null;return!0}function lf(){for(var t=kt;t;)t=Tn(t.nextSibling)}function Br(){kt=It=null,be=!1}function Xa(t){Ut===null?Ut=[t]:Ut.push(t)}var kv=j.ReactCurrentBatchConfig;function Qi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var x=d.refs;m===null?delete x[h]:x[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function So(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function af(t){var i=t._init;return i(t._payload)}function cf(t){function i(I,E){if(t){var N=I.deletions;N===null?(I.deletions=[E],I.flags|=16):N.push(E)}}function o(I,E){if(!t)return null;for(;E!==null;)i(I,E),E=E.sibling;return null}function a(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function d(I,E){return I=Un(I,E),I.index=0,I.sibling=null,I}function h(I,E,N){return I.index=N,t?(N=I.alternate,N!==null?(N=N.index,N<E?(I.flags|=2,E):N):(I.flags|=2,E)):(I.flags|=1048576,E)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function x(I,E,N,F){return E===null||E.tag!==6?(E=Vc(N,I.mode,F),E.return=I,E):(E=d(E,N),E.return=I,E)}function C(I,E,N,F){var q=N.type;return q===V?D(I,E,N.props.children,F,N.key):E!==null&&(E.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===pt&&af(q)===E.type)?(F=d(E,N.props),F.ref=Qi(I,E,N),F.return=I,F):(F=Qo(N.type,N.key,N.props,null,I.mode,F),F.ref=Qi(I,E,N),F.return=I,F)}function T(I,E,N,F){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Bc(N,I.mode,F),E.return=I,E):(E=d(E,N.children||[]),E.return=I,E)}function D(I,E,N,F,q){return E===null||E.tag!==7?(E=gr(N,I.mode,F,q),E.return=I,E):(E=d(E,N),E.return=I,E)}function L(I,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vc(""+E,I.mode,N),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case J:return N=Qo(E.type,E.key,E.props,null,I.mode,N),N.ref=Qi(I,null,E),N.return=I,N;case se:return E=Bc(E,I.mode,N),E.return=I,E;case pt:var F=E._init;return L(I,F(E._payload),N)}if(Ei(E)||te(E))return E=gr(E,I.mode,N,null),E.return=I,E;So(I,E)}return null}function A(I,E,N,F){var q=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return q!==null?null:x(I,E,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case J:return N.key===q?C(I,E,N,F):null;case se:return N.key===q?T(I,E,N,F):null;case pt:return q=N._init,A(I,E,q(N._payload),F)}if(Ei(N)||te(N))return q!==null?null:D(I,E,N,F,null);So(I,N)}return null}function H(I,E,N,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(N)||null,x(E,I,""+F,q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case J:return I=I.get(F.key===null?N:F.key)||null,C(E,I,F,q);case se:return I=I.get(F.key===null?N:F.key)||null,T(E,I,F,q);case pt:var Z=F._init;return H(I,E,N,Z(F._payload),q)}if(Ei(F)||te(F))return I=I.get(N)||null,D(E,I,F,q,null);So(E,F)}return null}function K(I,E,N,F){for(var q=null,Z=null,ee=E,re=E=0,qe=null;ee!==null&&re<N.length;re++){ee.index>re?(qe=ee,ee=null):qe=ee.sibling;var _e=A(I,ee,N[re],F);if(_e===null){ee===null&&(ee=qe);break}t&&ee&&_e.alternate===null&&i(I,ee),E=h(_e,E,re),Z===null?q=_e:Z.sibling=_e,Z=_e,ee=qe}if(re===N.length)return o(I,ee),be&&ar(I,re),q;if(ee===null){for(;re<N.length;re++)ee=L(I,N[re],F),ee!==null&&(E=h(ee,E,re),Z===null?q=ee:Z.sibling=ee,Z=ee);return be&&ar(I,re),q}for(ee=a(I,ee);re<N.length;re++)qe=H(ee,I,re,N[re],F),qe!==null&&(t&&qe.alternate!==null&&ee.delete(qe.key===null?re:qe.key),E=h(qe,E,re),Z===null?q=qe:Z.sibling=qe,Z=qe);return t&&ee.forEach(function(zn){return i(I,zn)}),be&&ar(I,re),q}function Q(I,E,N,F){var q=te(N);if(typeof q!="function")throw Error(n(150));if(N=q.call(N),N==null)throw Error(n(151));for(var Z=q=null,ee=E,re=E=0,qe=null,_e=N.next();ee!==null&&!_e.done;re++,_e=N.next()){ee.index>re?(qe=ee,ee=null):qe=ee.sibling;var zn=A(I,ee,_e.value,F);if(zn===null){ee===null&&(ee=qe);break}t&&ee&&zn.alternate===null&&i(I,ee),E=h(zn,E,re),Z===null?q=zn:Z.sibling=zn,Z=zn,ee=qe}if(_e.done)return o(I,ee),be&&ar(I,re),q;if(ee===null){for(;!_e.done;re++,_e=N.next())_e=L(I,_e.value,F),_e!==null&&(E=h(_e,E,re),Z===null?q=_e:Z.sibling=_e,Z=_e);return be&&ar(I,re),q}for(ee=a(I,ee);!_e.done;re++,_e=N.next())_e=H(ee,I,re,_e.value,F),_e!==null&&(t&&_e.alternate!==null&&ee.delete(_e.key===null?re:_e.key),E=h(_e,E,re),Z===null?q=_e:Z.sibling=_e,Z=_e);return t&&ee.forEach(function(s0){return i(I,s0)}),be&&ar(I,re),q}function ze(I,E,N,F){if(typeof N=="object"&&N!==null&&N.type===V&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case J:e:{for(var q=N.key,Z=E;Z!==null;){if(Z.key===q){if(q=N.type,q===V){if(Z.tag===7){o(I,Z.sibling),E=d(Z,N.props.children),E.return=I,I=E;break e}}else if(Z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===pt&&af(q)===Z.type){o(I,Z.sibling),E=d(Z,N.props),E.ref=Qi(I,Z,N),E.return=I,I=E;break e}o(I,Z);break}else i(I,Z);Z=Z.sibling}N.type===V?(E=gr(N.props.children,I.mode,F,N.key),E.return=I,I=E):(F=Qo(N.type,N.key,N.props,null,I.mode,F),F.ref=Qi(I,E,N),F.return=I,I=F)}return m(I);case se:e:{for(Z=N.key;E!==null;){if(E.key===Z)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){o(I,E.sibling),E=d(E,N.children||[]),E.return=I,I=E;break e}else{o(I,E);break}else i(I,E);E=E.sibling}E=Bc(N,I.mode,F),E.return=I,I=E}return m(I);case pt:return Z=N._init,ze(I,E,Z(N._payload),F)}if(Ei(N))return K(I,E,N,F);if(te(N))return Q(I,E,N,F);So(I,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,E!==null&&E.tag===6?(o(I,E.sibling),E=d(E,N),E.return=I,I=E):(o(I,E),E=Vc(N,I.mode,F),E.return=I,I=E),m(I)):o(I,E)}return ze}var Hr=cf(!0),uf=cf(!1),Io=Rn(null),ko=null,$r=null,Ja=null;function Za(){Ja=$r=ko=null}function ec(t){var i=Io.current;Re(Io),t._currentValue=i}function tc(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Gr(t,i){ko=t,Ja=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_t=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:i,next:null},$r===null){if(ko===null)throw Error(n(308));$r=t,ko.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return i}var cr=null;function nc(t){cr===null?cr=[t]:cr.push(t)}function df(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,nc(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,a)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var An=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function On(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,cn(t,o)}return d=a.interleaved,d===null?(i.next=i,nc(a)):(i.next=d.next,d.next=i),a.interleaved=i,cn(t,o)}function No(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}function ff(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function To(t,i,o,a){var d=t.updateQueue;An=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var C=x,T=C.next;C.next=null,m===null?h=T:m.next=T,m=C;var D=t.alternate;D!==null&&(D=D.updateQueue,x=D.lastBaseUpdate,x!==m&&(x===null?D.firstBaseUpdate=T:x.next=T,D.lastBaseUpdate=C))}if(h!==null){var L=d.baseState;m=0,D=T=C=null,x=h;do{var A=x.lane,H=x.eventTime;if((a&A)===A){D!==null&&(D=D.next={eventTime:H,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var K=t,Q=x;switch(A=i,H=o,Q.tag){case 1:if(K=Q.payload,typeof K=="function"){L=K.call(H,L,A);break e}L=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Q.payload,A=typeof K=="function"?K.call(H,L,A):K,A==null)break e;L=G({},L,A);break e;case 2:An=!0}}x.callback!==null&&x.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[x]:A.push(x))}else H={eventTime:H,lane:A,tag:x.tag,payload:x.payload,callback:x.callback,next:null},D===null?(T=D=H,C=L):D=D.next=H,m|=A;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;A=x,x=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(D===null&&(C=L),d.baseState=C,d.firstBaseUpdate=T,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);hr|=m,t.lanes=m,t.memoizedState=L}}function pf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var qi={},Jt=Rn(qi),Yi=Rn(qi),Xi=Rn(qi);function ur(t){if(t===qi)throw Error(n(174));return t}function ic(t,i){switch(Ie(Xi,i),Ie(Yi,t),Ie(Jt,qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=sa(i,t)}Re(Jt),Ie(Jt,i)}function Kr(){Re(Jt),Re(Yi),Re(Xi)}function mf(t){ur(Xi.current);var i=ur(Jt.current),o=sa(i,t.type);i!==o&&(Ie(Yi,t),Ie(Jt,o))}function sc(t){Yi.current===t&&(Re(Jt),Re(Yi))}var Oe=Rn(0);function Ro(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function lc(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Po=j.ReactCurrentDispatcher,ac=j.ReactCurrentBatchConfig,dr=0,De=null,Be=null,Ke=null,bo=!1,Ji=!1,Zi=0,Nv=0;function rt(){throw Error(n(321))}function cc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function uc(t,i,o,a,d,h){if(dr=h,De=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=t===null||t.memoizedState===null?bv:Av,t=o(a,d),Ji){h=0;do{if(Ji=!1,Zi=0,25<=h)throw Error(n(301));h+=1,Ke=Be=null,i.updateQueue=null,Po.current=Ov,t=o(a,d)}while(Ji)}if(Po.current=Do,i=Be!==null&&Be.next!==null,dr=0,Ke=Be=De=null,bo=!1,i)throw Error(n(300));return t}function dc(){var t=Zi!==0;return Zi=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?De.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function bt(){if(Be===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var i=Ke===null?De.memoizedState:Ke.next;if(i!==null)Ke=i,Be=t;else{if(t===null)throw Error(n(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?De.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function es(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Be,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var x=m=null,C=null,T=h;do{var D=T.lane;if((dr&D)===D)C!==null&&(C=C.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var L={lane:D,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};C===null?(x=C=L,m=a):C=C.next=L,De.lanes|=D,hr|=D}T=T.next}while(T!==null&&T!==h);C===null?m=a:C.next=x,Ft(a,i.memoizedState)||(_t=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=C,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,De.lanes|=h,hr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Ft(h,i.memoizedState)||(_t=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function gf(){}function _f(t,i){var o=De,a=bt(),d=i(),h=!Ft(a.memoizedState,d);if(h&&(a.memoizedState=d,_t=!0),a=a.queue,pc(wf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,ts(9,vf.bind(null,o,a,d,i),void 0,null),Qe===null)throw Error(n(349));(dr&30)!==0||yf(o,i,d)}return d}function yf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=De.updateQueue,i===null?(i={lastEffect:null,stores:null},De.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function vf(t,i,o,a){i.value=o,i.getSnapshot=a,xf(i)&&Cf(t)}function wf(t,i,o){return o(function(){xf(i)&&Cf(t)})}function xf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function Cf(t){var i=cn(t,1);i!==null&&Bt(i,t,1,-1)}function Ef(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},i.queue=t,t=t.dispatch=Pv.bind(null,De,t),[i.memoizedState,t]}function ts(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=De.updateQueue,i===null?(i={lastEffect:null,stores:null},De.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Sf(){return bt().memoizedState}function Ao(t,i,o,a){var d=Zt();De.flags|=t,d.memoizedState=ts(1|i,o,void 0,a===void 0?null:a)}function Oo(t,i,o,a){var d=bt();a=a===void 0?null:a;var h=void 0;if(Be!==null){var m=Be.memoizedState;if(h=m.destroy,a!==null&&cc(a,m.deps)){d.memoizedState=ts(i,o,h,a);return}}De.flags|=t,d.memoizedState=ts(1|i,o,h,a)}function If(t,i){return Ao(8390656,8,t,i)}function pc(t,i){return Oo(2048,8,t,i)}function kf(t,i){return Oo(4,2,t,i)}function Nf(t,i){return Oo(4,4,t,i)}function Tf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rf(t,i,o){return o=o!=null?o.concat([t]):null,Oo(4,4,Tf.bind(null,i,t),o)}function mc(){}function Pf(t,i){var o=bt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function bf(t,i){var o=bt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Af(t,i,o){return(dr&21)===0?(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=o):(Ft(o,i)||(o=lh(),De.lanes|=o,hr|=o,t.baseState=!0),i)}function Tv(t,i){var o=we;we=o!==0&&4>o?o:4,t(!0);var a=ac.transition;ac.transition={};try{t(!1),i()}finally{we=o,ac.transition=a}}function Of(){return bt().memoizedState}function Rv(t,i,o){var a=jn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Df(t))Lf(i,o);else if(o=df(t,i,o,a),o!==null){var d=ct();Bt(o,t,a,d),Mf(o,i,a)}}function Pv(t,i,o){var a=jn(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Df(t))Lf(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,x=h(m,o);if(d.hasEagerState=!0,d.eagerState=x,Ft(x,m)){var C=i.interleaved;C===null?(d.next=d,nc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}o=df(t,i,d,a),o!==null&&(d=ct(),Bt(o,t,a,d),Mf(o,i,a))}}function Df(t){var i=t.alternate;return t===De||i!==null&&i===De}function Lf(t,i){Ji=bo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Mf(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}var Do={readContext:Pt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},bv={readContext:Pt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:If,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ao(4194308,4,Tf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Rv.bind(null,De,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:Ef,useDebugValue:mc,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Ef(!1),i=t[0];return t=Tv.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=De,d=Zt();if(be){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qe===null)throw Error(n(349));(dr&30)!==0||yf(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,If(wf.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,vf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=Qe.identifierPrefix;if(be){var o=an,a=ln;o=(a&~(1<<32-jt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Zi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Nv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Av={readContext:Pt,useCallback:Pf,useContext:Pt,useEffect:pc,useImperativeHandle:Rf,useInsertionEffect:kf,useLayoutEffect:Nf,useMemo:bf,useReducer:hc,useRef:Sf,useState:function(){return hc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=bt();return Af(i,Be.memoizedState,t)},useTransition:function(){var t=hc(es)[0],i=bt().memoizedState;return[t,i]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1},Ov={readContext:Pt,useCallback:Pf,useContext:Pt,useEffect:pc,useImperativeHandle:Rf,useInsertionEffect:kf,useLayoutEffect:Nf,useMemo:bf,useReducer:fc,useRef:Sf,useState:function(){return fc(es)},useDebugValue:mc,useDeferredValue:function(t){var i=bt();return Be===null?i.memoizedState=t:Af(i,Be.memoizedState,t)},useTransition:function(){var t=fc(es)[0],i=bt().memoizedState;return[t,i]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=G({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function gc(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:G({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Lo={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),No(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),No(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ct(),a=jn(t),d=un(o,a);d.tag=2,i!=null&&(d.callback=i),i=On(t,d,a),i!==null&&(Bt(i,t,a,o),No(i,t,a))}};function jf(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Wi(o,a)||!Wi(d,h):!0}function Ff(t,i,o){var a=!1,d=Pn,h=i.contextType;return typeof h=="object"&&h!==null?h=Pt(h):(d=gt(i)?or:nt.current,a=i.contextTypes,h=(a=a!=null)?zr(t,d):Pn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Uf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function _c(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},rc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Pt(h):(h=gt(i)?or:nt.current,d.context=zr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(gc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Lo.enqueueReplaceState(d,d.state,null),To(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Qr(t,i){try{var o="",a=i;do o+=me(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function yc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function zf(t,i,o){o=un(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Vo||(Vo=!0,Dc=a),vc(t,i)},o}function Wf(t,i,o){o=un(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Vf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Dv;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=Qv.bind(null,t,i,o),i.then(t,t))}function Bf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Hf(t,i,o,a,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=un(-1,1),i.tag=2,On(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Lv=j.ReactCurrentOwner,_t=!1;function at(t,i,o,a){i.child=t===null?uf(i,null,o,a):Hr(i,t.child,o,a)}function $f(t,i,o,a,d){o=o.render;var h=i.ref;return Gr(i,d),a=uc(t,i,o,a,h,d),o=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(be&&o&&Ka(i),i.flags|=1,at(t,i,a,d),i.child)}function Gf(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Wc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kf(t,i,h,a,d)):(t=Qo(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Wi,o(m,a)&&t.ref===i.ref)return dn(t,i,d)}return i.flags|=1,t=Un(h,a),t.ref=i.ref,t.return=i,i.child=t}function Kf(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Wi(h,a)&&t.ref===i.ref)if(_t=!1,i.pendingProps=a=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_t=!0);else return i.lanes=t.lanes,dn(t,i,d)}return wc(t,i,o,a,d)}function Qf(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Yr,Nt),Nt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ie(Yr,Nt),Nt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Ie(Yr,Nt),Nt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Ie(Yr,Nt),Nt|=a;return at(t,i,d,o),i.child}function qf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function wc(t,i,o,a,d){var h=gt(o)?or:nt.current;return h=zr(i,h),Gr(i,d),o=uc(t,i,o,a,h,d),a=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(be&&a&&Ka(i),i.flags|=1,at(t,i,o,d),i.child)}function Yf(t,i,o,a,d){if(gt(o)){var h=!0;vo(i)}else h=!1;if(Gr(i,d),i.stateNode===null)jo(t,i),Ff(i,o,a),_c(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,x=i.memoizedProps;m.props=x;var C=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Pt(T):(T=gt(o)?or:nt.current,T=zr(i,T));var D=o.getDerivedStateFromProps,L=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function";L||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==a||C!==T)&&Uf(i,m,a,T),An=!1;var A=i.memoizedState;m.state=A,To(i,a,m,d),C=i.memoizedState,x!==a||A!==C||mt.current||An?(typeof D=="function"&&(gc(i,o,D,a),C=i.memoizedState),(x=An||jf(i,o,x,a,A,C,T))?(L||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=C),m.props=a,m.state=C,m.context=T,a=x):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,hf(t,i),x=i.memoizedProps,T=i.type===i.elementType?x:zt(i.type,x),m.props=T,L=i.pendingProps,A=m.context,C=o.contextType,typeof C=="object"&&C!==null?C=Pt(C):(C=gt(o)?or:nt.current,C=zr(i,C));var H=o.getDerivedStateFromProps;(D=typeof H=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==L||A!==C)&&Uf(i,m,a,C),An=!1,A=i.memoizedState,m.state=A,To(i,a,m,d);var K=i.memoizedState;x!==L||A!==K||mt.current||An?(typeof H=="function"&&(gc(i,o,H,a),K=i.memoizedState),(T=An||jf(i,o,T,a,A,K,C)||!1)?(D||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,K,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,K,C)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=K),m.props=a,m.state=K,m.context=C,a=T):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return xc(t,i,o,a,h,d)}function xc(t,i,o,a,d,h){qf(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&ef(i,o,!1),dn(t,i,h);a=i.stateNode,Lv.current=i;var x=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Hr(i,t.child,null,h),i.child=Hr(i,null,x,h)):at(t,i,x,h),i.memoizedState=a.state,d&&ef(i,o,!0),i.child}function Xf(t){var i=t.stateNode;i.pendingContext?Jh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Jh(t,i.context,!1),ic(t,i.containerInfo)}function Jf(t,i,o,a,d){return Br(),Xa(d),i.flags|=256,at(t,i,o,a),i.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zf(t,i,o){var a=i.pendingProps,d=Oe.current,h=!1,m=(i.flags&128)!==0,x;if((x=m)||(x=t!==null&&t.memoizedState===null?!1:(d&2)!==0),x?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ie(Oe,d&1),t===null)return Ya(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=qo(m,a,0,null),t=gr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ec(o),i.memoizedState=Cc,t):Sc(i,m));if(d=t.memoizedState,d!==null&&(x=d.dehydrated,x!==null))return Mv(t,i,m,a,x,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,x=d.sibling;var C={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=C,i.deletions=null):(a=Un(d,C),a.subtreeFlags=d.subtreeFlags&14680064),x!==null?h=Un(x,h):(h=gr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Ec(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Cc,a}return h=t.child,t=h.sibling,a=Un(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Sc(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Mo(t,i,o,a){return a!==null&&Xa(a),Hr(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Mv(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yc(Error(n(422))),Mo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=qo({mode:"visible",children:a.children},d,0,null),h=gr(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Hr(i,t.child,null,m),i.child.memoizedState=Ec(m),i.memoizedState=Cc,h);if((i.mode&1)===0)return Mo(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var x=a.dgst;return a=x,h=Error(n(419)),a=yc(h,a,void 0),Mo(t,i,m,a)}if(x=(m&t.childLanes)!==0,_t||x){if(a=Qe,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Bt(a,t,d,-1))}return zc(),a=yc(Error(n(421))),Mo(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=qv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kt=Tn(d.nextSibling),It=i,be=!0,Ut=null,t!==null&&(Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=lr,ln=t.id,an=t.overflow,lr=i),i=Sc(i,a.children),i.flags|=4096,i)}function ep(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),tc(t.return,i,o)}function Ic(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function tp(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(at(t,i,a.children,o),a=Oe.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,o,i);else if(t.tag===19)ep(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ie(Oe,a),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ro(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ic(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ro(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Ic(i,!0,o,null,h);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),hr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Un(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Un(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function jv(t,i,o){switch(i.tag){case 3:Xf(i),Br();break;case 5:mf(i);break;case 1:gt(i.type)&&vo(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Ie(Io,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Ie(Oe,Oe.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zf(t,i,o):(Ie(Oe,Oe.current&1),t=dn(t,i,o),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return tp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ie(Oe,Oe.current),a)break;return null;case 22:case 23:return i.lanes=0,Qf(t,i,o)}return dn(t,i,o)}var np,kc,rp,ip;np=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},rp=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,ur(Jt.current);var h=null;switch(o){case"input":d=ta(t,d),a=ta(t,a),h=[];break;case"select":d=G({},d,{value:void 0}),a=G({},a,{value:void 0}),h=[];break;case"textarea":d=ia(t,d),a=ia(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=go)}oa(o,a);var m;o=null;for(T in d)if(!a.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var x=d[T];for(m in x)x.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var C=a[T];if(x=d!=null?d[T]:void 0,a.hasOwnProperty(T)&&C!==x&&(C!=null||x!=null))if(T==="style")if(x){for(m in x)!x.hasOwnProperty(m)||C&&C.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in C)C.hasOwnProperty(m)&&x[m]!==C[m]&&(o||(o={}),o[m]=C[m])}else o||(h||(h=[]),h.push(T,o)),o=C;else T==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,x=x?x.__html:void 0,C!=null&&x!==C&&(h=h||[]).push(T,C)):T==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(T,""+C):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(C!=null&&T==="onScroll"&&Te("scroll",t),h||x===C||(h=[])):(h=h||[]).push(T,C))}o&&(h=h||[]).push("style",o);var T=h;(i.updateQueue=T)&&(i.flags|=4)}},ip=function(t,i,o,a){o!==a&&(i.flags|=4)};function ns(t,i){if(!be)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function it(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Fv(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return gt(i.type)&&yo(),it(i),null;case 3:return a=i.stateNode,Kr(),Re(mt),Re(nt),lc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(jc(Ut),Ut=null))),kc(t,i),it(i),null;case 5:sc(i);var d=ur(Xi.current);if(o=i.type,t!==null&&i.stateNode!=null)rp(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return it(i),null}if(t=ur(Jt.current),Eo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Gi]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Bi.length;d++)Te(Bi[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":jd(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":zd(a,h),Te("invalid",a)}oa(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var x=h[m];m==="children"?typeof x=="string"?a.textContent!==x&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,x,t),d=["children",x]):typeof x=="number"&&a.textContent!==""+x&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,x,t),d=["children",""+x]):l.hasOwnProperty(m)&&x!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":$s(a),Ud(a,h,!0);break;case"textarea":$s(a),Vd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=go)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Gi]=a,np(t,i,!1,!1),i.stateNode=t;e:{switch(m=la(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Bi.length;d++)Te(Bi[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":jd(t,a),d=ta(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=G({},a,{value:void 0}),Te("invalid",t);break;case"textarea":zd(t,a),d=ia(t,a),Te("invalid",t);break;default:d=a}oa(o,d),x=d;for(h in x)if(x.hasOwnProperty(h)){var C=x[h];h==="style"?Gd(t,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Hd(t,C)):h==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Si(t,C):typeof C=="number"&&Si(t,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Te("scroll",t):C!=null&&M(t,h,C,m))}switch(o){case"input":$s(t),Ud(t,a,!1);break;case"textarea":$s(t),Vd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ve(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Tr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Tr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=go)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return it(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=ur(Xi.current),ur(Jt.current),Eo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:mo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return it(i),null;case 13:if(Re(Oe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&kt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lf(),Br(),i.flags|=98560,h=!1;else if(h=Eo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Br(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),h=!1}else Ut!==null&&(jc(Ut),Ut=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Oe.current&1)!==0?He===0&&(He=3):zc())),i.updateQueue!==null&&(i.flags|=4),it(i),null);case 4:return Kr(),kc(t,i),t===null&&Hi(i.stateNode.containerInfo),it(i),null;case 10:return ec(i.type._context),it(i),null;case 17:return gt(i.type)&&yo(),it(i),null;case 19:if(Re(Oe),h=i.memoizedState,h===null)return it(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ns(h,!1);else{if(He!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Ro(t),m!==null){for(i.flags|=128,ns(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(Oe,Oe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ue()>Xr&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304)}else{if(!a)if(t=Ro(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!be)return it(i),null}else 2*Ue()-h.renderingStartTime>Xr&&o!==1073741824&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ue(),i.sibling=null,o=Oe.current,Ie(Oe,a?o&1|2:o&1),i):(it(i),null);case 22:case 23:return Uc(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Nt&1073741824)!==0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Uv(t,i){switch(Qa(i),i.tag){case 1:return gt(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Kr(),Re(mt),Re(nt),lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return sc(i),null;case 13:if(Re(Oe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Br()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Re(Oe),null;case 4:return Kr(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Fo=!1,st=!1,zv=typeof WeakSet=="function"?WeakSet:Set,$=null;function qr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Me(t,i,a)}else o.current=null}function Nc(t,i,o){try{o()}catch(a){Me(t,i,a)}}var sp=!1;function Wv(t,i){if(Ua=ro,t=Mh(),ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,x=-1,C=-1,T=0,D=0,L=t,A=null;t:for(;;){for(var H;L!==o||d!==0&&L.nodeType!==3||(x=m+d),L!==h||a!==0&&L.nodeType!==3||(C=m+a),L.nodeType===3&&(m+=L.nodeValue.length),(H=L.firstChild)!==null;)A=L,L=H;for(;;){if(L===t)break t;if(A===o&&++T===d&&(x=m),A===h&&++D===a&&(C=m),(H=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=H}o=x===-1||C===-1?null:{start:x,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},ro=!1,$=i;$!==null;)if(i=$,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,$=t;else for(;$!==null;){i=$;try{var K=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var Q=K.memoizedProps,ze=K.memoizedState,I=i.stateNode,E=I.getSnapshotBeforeUpdate(i.elementType===i.type?Q:zt(i.type,Q),ze);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var N=i.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Me(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,$=t;break}$=i.return}return K=sp,sp=!1,K}function rs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Nc(i,o,h)}d=d.next}while(d!==a)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Tc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function op(t){var i=t.alternate;i!==null&&(t.alternate=null,op(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Gi],delete i[Ha],delete i[Ev],delete i[Sv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=go));else if(a!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}function Pc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pc(t,i,o),t=t.sibling;t!==null;)Pc(t,i,o),t=t.sibling}var Je=null,Wt=!1;function Dn(t,i,o){for(o=o.child;o!==null;)cp(t,i,o),o=o.sibling}function cp(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Xs,o)}catch{}switch(o.tag){case 5:st||qr(o,i);case 6:var a=Je,d=Wt;Je=null,Dn(t,i,o),Je=a,Wt=d,Je!==null&&(Wt?(t=Je,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Je.removeChild(o.stateNode));break;case 18:Je!==null&&(Wt?(t=Je,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),Li(t)):Ba(Je,o.stateNode));break;case 4:a=Je,d=Wt,Je=o.stateNode.containerInfo,Wt=!0,Dn(t,i,o),Je=a,Wt=d;break;case 0:case 11:case 14:case 15:if(!st&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Nc(o,i,m),d=d.next}while(d!==a)}Dn(t,i,o);break;case 1:if(!st&&(qr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(x){Me(o,i,x)}Dn(t,i,o);break;case 21:Dn(t,i,o);break;case 22:o.mode&1?(st=(a=st)||o.memoizedState!==null,Dn(t,i,o),st=a):Dn(t,i,o);break;default:Dn(t,i,o)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new zv),i.forEach(function(a){var d=Yv.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,x=m;e:for(;x!==null;){switch(x.tag){case 5:Je=x.stateNode,Wt=!1;break e;case 3:Je=x.stateNode.containerInfo,Wt=!0;break e;case 4:Je=x.stateNode.containerInfo,Wt=!0;break e}x=x.return}if(Je===null)throw Error(n(160));cp(h,m,d),Je=null,Wt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(T){Me(d,i,T)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,t),i=i.sibling}function dp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),en(t),a&4){try{rs(3,t,t.return),Uo(3,t)}catch(Q){Me(t,t.return,Q)}try{rs(5,t,t.return)}catch(Q){Me(t,t.return,Q)}}break;case 1:Vt(i,t),en(t),a&512&&o!==null&&qr(o,o.return);break;case 5:if(Vt(i,t),en(t),a&512&&o!==null&&qr(o,o.return),t.flags&32){var d=t.stateNode;try{Si(d,"")}catch(Q){Me(t,t.return,Q)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,x=t.type,C=t.updateQueue;if(t.updateQueue=null,C!==null)try{x==="input"&&h.type==="radio"&&h.name!=null&&Fd(d,h),la(x,m);var T=la(x,h);for(m=0;m<C.length;m+=2){var D=C[m],L=C[m+1];D==="style"?Gd(d,L):D==="dangerouslySetInnerHTML"?Hd(d,L):D==="children"?Si(d,L):M(d,D,L,T)}switch(x){case"input":na(d,h);break;case"textarea":Wd(d,h);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var H=h.value;H!=null?Tr(d,!!h.multiple,H,!1):A!==!!h.multiple&&(h.defaultValue!=null?Tr(d,!!h.multiple,h.defaultValue,!0):Tr(d,!!h.multiple,h.multiple?[]:"",!1))}d[Gi]=h}catch(Q){Me(t,t.return,Q)}}break;case 6:if(Vt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Q){Me(t,t.return,Q)}}break;case 3:if(Vt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Li(i.containerInfo)}catch(Q){Me(t,t.return,Q)}break;case 4:Vt(i,t),en(t);break;case 13:Vt(i,t),en(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Oc=Ue())),a&4&&up(t);break;case 22:if(D=o!==null&&o.memoizedState!==null,t.mode&1?(st=(T=st)||D,Vt(i,t),st=T):Vt(i,t),en(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!D&&(t.mode&1)!==0)for($=t,D=t.child;D!==null;){for(L=$=D;$!==null;){switch(A=$,H=A.child,A.tag){case 0:case 11:case 14:case 15:rs(4,A,A.return);break;case 1:qr(A,A.return);var K=A.stateNode;if(typeof K.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,K.props=i.memoizedProps,K.state=i.memoizedState,K.componentWillUnmount()}catch(Q){Me(a,o,Q)}}break;case 5:qr(A,A.return);break;case 22:if(A.memoizedState!==null){pp(L);continue}}H!==null?(H.return=A,$=H):pp(L)}D=D.sibling}e:for(D=null,L=t;;){if(L.tag===5){if(D===null){D=L;try{d=L.stateNode,T?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(x=L.stateNode,C=L.memoizedProps.style,m=C!=null&&C.hasOwnProperty("display")?C.display:null,x.style.display=$d("display",m))}catch(Q){Me(t,t.return,Q)}}}else if(L.tag===6){if(D===null)try{L.stateNode.nodeValue=T?"":L.memoizedProps}catch(Q){Me(t,t.return,Q)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===t)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===t)break e;for(;L.sibling===null;){if(L.return===null||L.return===t)break e;D===L&&(D=null),L=L.return}D===L&&(D=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Vt(i,t),en(t),a&4&&up(t);break;case 21:break;default:Vt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(lp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Si(d,""),a.flags&=-33);var h=ap(t);Pc(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,x=ap(t);Rc(t,x,m);break;default:throw Error(n(161))}}catch(C){Me(t,t.return,C)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Vv(t,i,o){$=t,hp(t)}function hp(t,i,o){for(var a=(t.mode&1)!==0;$!==null;){var d=$,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Fo;if(!m){var x=d.alternate,C=x!==null&&x.memoizedState!==null||st;x=Fo;var T=st;if(Fo=m,(st=C)&&!T)for($=d;$!==null;)m=$,C=m.child,m.tag===22&&m.memoizedState!==null?mp(d):C!==null?(C.return=m,$=C):mp(d);for(;h!==null;)$=h,hp(h),h=h.sibling;$=d,Fo=x,st=T}fp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,$=h):fp(t)}}function fp(t){for(;$!==null;){var i=$;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:st||Uo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!st)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&pf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}pf(i,m,o)}break;case 5:var x=i.stateNode;if(o===null&&i.flags&4){o=x;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var T=i.alternate;if(T!==null){var D=T.memoizedState;if(D!==null){var L=D.dehydrated;L!==null&&Li(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}st||i.flags&512&&Tc(i)}catch(A){Me(i,i.return,A)}}if(i===t){$=null;break}if(o=i.sibling,o!==null){o.return=i.return,$=o;break}$=i.return}}function pp(t){for(;$!==null;){var i=$;if(i===t){$=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$=o;break}$=i.return}}function mp(t){for(;$!==null;){var i=$;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Uo(4,i)}catch(C){Me(i,o,C)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(C){Me(i,d,C)}}var h=i.return;try{Tc(i)}catch(C){Me(i,h,C)}break;case 5:var m=i.return;try{Tc(i)}catch(C){Me(i,m,C)}}}catch(C){Me(i,i.return,C)}if(i===t){$=null;break}var x=i.sibling;if(x!==null){x.return=i.return,$=x;break}$=i.return}}var Bv=Math.ceil,zo=j.ReactCurrentDispatcher,bc=j.ReactCurrentOwner,At=j.ReactCurrentBatchConfig,pe=0,Qe=null,We=null,Ze=0,Nt=0,Yr=Rn(0),He=0,is=null,hr=0,Wo=0,Ac=0,ss=null,yt=null,Oc=0,Xr=1/0,hn=null,Vo=!1,Dc=null,Ln=null,Bo=!1,Mn=null,Ho=0,os=0,Lc=null,$o=-1,Go=0;function ct(){return(pe&6)!==0?Ue():$o!==-1?$o:$o=Ue()}function jn(t){return(t.mode&1)===0?1:(pe&2)!==0&&Ze!==0?Ze&-Ze:kv.transition!==null?(Go===0&&(Go=lh()),Go):(t=we,t!==0||(t=window.event,t=t===void 0?16:gh(t.type)),t)}function Bt(t,i,o,a){if(50<os)throw os=0,Lc=null,Error(n(185));Pi(t,o,a),((pe&2)===0||t!==Qe)&&(t===Qe&&((pe&2)===0&&(Wo|=o),He===4&&Fn(t,Ze)),vt(t,a),o===1&&pe===0&&(i.mode&1)===0&&(Xr=Ue()+500,wo&&bn()))}function vt(t,i){var o=t.callbackNode;ky(t,i);var a=eo(t,t===Qe?Ze:0);if(a===0)o!==null&&ih(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&ih(o),i===1)t.tag===0?Iv(_p.bind(null,t)):tf(_p.bind(null,t)),xv(function(){(pe&6)===0&&bn()}),o=null;else{switch(ah(a)){case 1:o=pa;break;case 4:o=sh;break;case 16:o=Ys;break;case 536870912:o=oh;break;default:o=Ys}o=Ip(o,gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function gp(t,i){if($o=-1,Go=0,(pe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Jr()&&t.callbackNode!==o)return null;var a=eo(t,t===Qe?Ze:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Ko(t,a);else{i=a;var d=pe;pe|=2;var h=vp();(Qe!==t||Ze!==i)&&(hn=null,Xr=Ue()+500,pr(t,i));do try{Gv();break}catch(x){yp(t,x)}while(!0);Za(),zo.current=h,pe=d,We!==null?i=0:(Qe=null,Ze=0,i=He)}if(i!==0){if(i===2&&(d=ma(t),d!==0&&(a=d,i=Mc(t,d))),i===1)throw o=is,pr(t,0),Fn(t,a),vt(t,Ue()),o;if(i===6)Fn(t,a);else{if(d=t.current.alternate,(a&30)===0&&!Hv(d)&&(i=Ko(t,a),i===2&&(h=ma(t),h!==0&&(a=h,i=Mc(t,h))),i===1))throw o=is,pr(t,0),Fn(t,a),vt(t,Ue()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:mr(t,yt,hn);break;case 3:if(Fn(t,a),(a&130023424)===a&&(i=Oc+500-Ue(),10<i)){if(eo(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){ct(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Va(mr.bind(null,t,yt,hn),i);break}mr(t,yt,hn);break;case 4:if(Fn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-jt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Ue()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Bv(a/1960))-a,10<a){t.timeoutHandle=Va(mr.bind(null,t,yt,hn),a);break}mr(t,yt,hn);break;case 5:mr(t,yt,hn);break;default:throw Error(n(329))}}}return vt(t,Ue()),t.callbackNode===o?gp.bind(null,t):null}function Mc(t,i){var o=ss;return t.current.memoizedState.isDehydrated&&(pr(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=yt,yt=o,i!==null&&jc(i)),t}function jc(t){yt===null?yt=t:yt.push.apply(yt,t)}function Hv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Ft(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fn(t,i){for(i&=~Ac,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),a=1<<o;t[o]=-1,i&=~a}}function _p(t){if((pe&6)!==0)throw Error(n(327));Jr();var i=eo(t,0);if((i&1)===0)return vt(t,Ue()),null;var o=Ko(t,i);if(t.tag!==0&&o===2){var a=ma(t);a!==0&&(i=a,o=Mc(t,a))}if(o===1)throw o=is,pr(t,0),Fn(t,i),vt(t,Ue()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,mr(t,yt,hn),vt(t,Ue()),null}function Fc(t,i){var o=pe;pe|=1;try{return t(i)}finally{pe=o,pe===0&&(Xr=Ue()+500,wo&&bn())}}function fr(t){Mn!==null&&Mn.tag===0&&(pe&6)===0&&Jr();var i=pe;pe|=1;var o=At.transition,a=we;try{if(At.transition=null,we=1,t)return t()}finally{we=a,At.transition=o,pe=i,(pe&6)===0&&bn()}}function Uc(){Nt=Yr.current,Re(Yr)}function pr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,wv(o)),We!==null)for(o=We.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yo();break;case 3:Kr(),Re(mt),Re(nt),lc();break;case 5:sc(a);break;case 4:Kr();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:ec(a.type._context);break;case 22:case 23:Uc()}o=o.return}if(Qe=t,We=t=Un(t.current,null),Ze=Nt=i,He=0,is=null,Ac=Wo=hr=0,yt=ss=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}cr=null}return t}function yp(t,i){do{var o=We;try{if(Za(),Po.current=Do,bo){for(var a=De.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}bo=!1}if(dr=0,Ke=Be=De=null,Ji=!1,Zi=0,bc.current=null,o===null||o.return===null){He=1,is=i,We=null;break}e:{var h=t,m=o.return,x=o,C=i;if(i=Ze,x.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var T=C,D=x,L=D.tag;if((D.mode&1)===0&&(L===0||L===11||L===15)){var A=D.alternate;A?(D.updateQueue=A.updateQueue,D.memoizedState=A.memoizedState,D.lanes=A.lanes):(D.updateQueue=null,D.memoizedState=null)}var H=Bf(m);if(H!==null){H.flags&=-257,Hf(H,m,x,h,i),H.mode&1&&Vf(h,T,i),i=H,C=T;var K=i.updateQueue;if(K===null){var Q=new Set;Q.add(C),i.updateQueue=Q}else K.add(C);break e}else{if((i&1)===0){Vf(h,T,i),zc();break e}C=Error(n(426))}}else if(be&&x.mode&1){var ze=Bf(m);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Hf(ze,m,x,h,i),Xa(Qr(C,x));break e}}h=C=Qr(C,x),He!==4&&(He=2),ss===null?ss=[h]:ss.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=zf(h,C,i);ff(h,I);break e;case 1:x=C;var E=h.type,N=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ln===null||!Ln.has(N)))){h.flags|=65536,i&=-i,h.lanes|=i;var F=Wf(h,x,i);ff(h,F);break e}}h=h.return}while(h!==null)}xp(o)}catch(q){i=q,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function vp(){var t=zo.current;return zo.current=Do,t===null?Do:t}function zc(){(He===0||He===3||He===2)&&(He=4),Qe===null||(hr&268435455)===0&&(Wo&268435455)===0||Fn(Qe,Ze)}function Ko(t,i){var o=pe;pe|=2;var a=vp();(Qe!==t||Ze!==i)&&(hn=null,pr(t,i));do try{$v();break}catch(d){yp(t,d)}while(!0);if(Za(),pe=o,zo.current=a,We!==null)throw Error(n(261));return Qe=null,Ze=0,He}function $v(){for(;We!==null;)wp(We)}function Gv(){for(;We!==null&&!_y();)wp(We)}function wp(t){var i=Sp(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,i===null?xp(t):We=i,bc.current=null}function xp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Fv(o,i,Nt),o!==null){We=o;return}}else{if(o=Uv(o,i),o!==null){o.flags&=32767,We=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,We=null;return}}if(i=i.sibling,i!==null){We=i;return}We=i=t}while(i!==null);He===0&&(He=5)}function mr(t,i,o){var a=we,d=At.transition;try{At.transition=null,we=1,Kv(t,i,o,a)}finally{At.transition=d,we=a}return null}function Kv(t,i,o,a){do Jr();while(Mn!==null);if((pe&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ny(t,h),t===Qe&&(We=Qe=null,Ze=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Bo||(Bo=!0,Ip(Ys,function(){return Jr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=At.transition,At.transition=null;var m=we;we=1;var x=pe;pe|=4,bc.current=null,Wv(t,o),dp(o,t),fv(za),ro=!!Ua,za=Ua=null,t.current=o,Vv(o),yy(),pe=x,we=m,At.transition=h}else t.current=o;if(Bo&&(Bo=!1,Mn=t,Ho=d),h=t.pendingLanes,h===0&&(Ln=null),xy(o.stateNode),vt(t,Ue()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Vo)throw Vo=!1,t=Dc,Dc=null,t;return(Ho&1)!==0&&t.tag!==0&&Jr(),h=t.pendingLanes,(h&1)!==0?t===Lc?os++:(os=0,Lc=t):os=0,bn(),null}function Jr(){if(Mn!==null){var t=ah(Ho),i=At.transition,o=we;try{if(At.transition=null,we=16>t?16:t,Mn===null)var a=!1;else{if(t=Mn,Mn=null,Ho=0,(pe&6)!==0)throw Error(n(331));var d=pe;for(pe|=4,$=t.current;$!==null;){var h=$,m=h.child;if(($.flags&16)!==0){var x=h.deletions;if(x!==null){for(var C=0;C<x.length;C++){var T=x[C];for($=T;$!==null;){var D=$;switch(D.tag){case 0:case 11:case 15:rs(8,D,h)}var L=D.child;if(L!==null)L.return=D,$=L;else for(;$!==null;){D=$;var A=D.sibling,H=D.return;if(op(D),D===T){$=null;break}if(A!==null){A.return=H,$=A;break}$=H}}}var K=h.alternate;if(K!==null){var Q=K.child;if(Q!==null){K.child=null;do{var ze=Q.sibling;Q.sibling=null,Q=ze}while(Q!==null)}}$=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,$=m;else e:for(;$!==null;){if(h=$,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,$=I;break e}$=h.return}}var E=t.current;for($=E;$!==null;){m=$;var N=m.child;if((m.subtreeFlags&2064)!==0&&N!==null)N.return=m,$=N;else e:for(m=E;$!==null;){if(x=$,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Uo(9,x)}}catch(q){Me(x,x.return,q)}if(x===m){$=null;break e}var F=x.sibling;if(F!==null){F.return=x.return,$=F;break e}$=x.return}}if(pe=d,bn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Xs,t)}catch{}a=!0}return a}finally{we=o,At.transition=i}}return!1}function Cp(t,i,o){i=Qr(o,i),i=zf(t,i,1),t=On(t,i,1),i=ct(),t!==null&&(Pi(t,1,i),vt(t,i))}function Me(t,i,o){if(t.tag===3)Cp(t,t,o);else for(;i!==null;){if(i.tag===3){Cp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=Qr(o,t),t=Wf(i,t,1),i=On(i,t,1),t=ct(),i!==null&&(Pi(i,1,t),vt(i,t));break}}i=i.return}}function Qv(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ct(),t.pingedLanes|=t.suspendedLanes&o,Qe===t&&(Ze&o)===o&&(He===4||He===3&&(Ze&130023424)===Ze&&500>Ue()-Oc?pr(t,0):Ac|=o),vt(t,i)}function Ep(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zs,Zs<<=1,(Zs&130023424)===0&&(Zs=4194304)));var o=ct();t=cn(t,i),t!==null&&(Pi(t,i,o),vt(t,o))}function qv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ep(t,o)}function Yv(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Ep(t,o)}var Sp;Sp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||mt.current)_t=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return _t=!1,jv(t,i,o);_t=(t.flags&131072)!==0}else _t=!1,be&&(i.flags&1048576)!==0&&nf(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;jo(t,i),t=i.pendingProps;var d=zr(i,nt.current);Gr(i,o),d=uc(null,i,a,t,d,o);var h=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,gt(a)?(h=!0,vo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=Lo,i.stateNode=d,d._reactInternals=i,_c(i,a,t,o),i=xc(null,i,a,!0,h,o)):(i.tag=0,be&&h&&Ka(i),at(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(jo(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=Jv(a),t=zt(a,t),d){case 0:i=wc(null,i,a,t,o);break e;case 1:i=Yf(null,i,a,t,o);break e;case 11:i=$f(null,i,a,t,o);break e;case 14:i=Gf(null,i,a,zt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),wc(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Yf(t,i,a,d,o);case 3:e:{if(Xf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,hf(t,i),To(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Qr(Error(n(423)),i),i=Jf(t,i,a,o,d);break e}else if(a!==d){d=Qr(Error(n(424)),i),i=Jf(t,i,a,o,d);break e}else for(kt=Tn(i.stateNode.containerInfo.firstChild),It=i,be=!0,Ut=null,o=uf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Br(),a===d){i=dn(t,i,o);break e}at(t,i,a,o)}i=i.child}return i;case 5:return mf(i),t===null&&Ya(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Wa(a,d)?m=null:h!==null&&Wa(a,h)&&(i.flags|=32),qf(t,i),at(t,i,m,o),i.child;case 6:return t===null&&Ya(i),null;case 13:return Zf(t,i,o);case 4:return ic(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Hr(i,null,a,o):at(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),$f(t,i,a,d,o);case 7:return at(t,i,i.pendingProps,o),i.child;case 8:return at(t,i,i.pendingProps.children,o),i.child;case 12:return at(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Ie(Io,a._currentValue),a._currentValue=m,h!==null)if(Ft(h.value,m)){if(h.children===d.children&&!mt.current){i=dn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var x=h.dependencies;if(x!==null){m=h.child;for(var C=x.firstContext;C!==null;){if(C.context===a){if(h.tag===1){C=un(-1,o&-o),C.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var D=T.pending;D===null?C.next=C:(C.next=D.next,D.next=C),T.pending=C}}h.lanes|=o,C=h.alternate,C!==null&&(C.lanes|=o),tc(h.return,o,i),x.lanes|=o;break}C=C.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,x=m.alternate,x!==null&&(x.lanes|=o),tc(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}at(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,Gr(i,o),d=Pt(d),a=a(d),i.flags|=1,at(t,i,a,o),i.child;case 14:return a=i.type,d=zt(a,i.pendingProps),d=zt(a.type,d),Gf(t,i,a,d,o);case 15:return Kf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),jo(t,i),i.tag=1,gt(a)?(t=!0,vo(i)):t=!1,Gr(i,o),Ff(i,a,d),_c(i,a,d,o),xc(null,i,a,!0,t,o);case 19:return tp(t,i,o);case 22:return Qf(t,i,o)}throw Error(n(156,i.tag))};function Ip(t,i){return rh(t,i)}function Xv(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new Xv(t,i,o,a)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jv(t){if(typeof t=="function")return Wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ae)return 11;if(t===qt)return 14}return 2}function Un(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Qo(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Wc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case V:return gr(o.children,d,h,i);case X:m=8,d|=8;break;case he:return t=Ot(12,o,i,d|2),t.elementType=he,t.lanes=h,t;case Ve:return t=Ot(13,o,i,d),t.elementType=Ve,t.lanes=h,t;case Mt:return t=Ot(19,o,i,d),t.elementType=Mt,t.lanes=h,t;case Le:return qo(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fe:m=10;break e;case xe:m=9;break e;case Ae:m=11;break e;case qt:m=14;break e;case pt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function gr(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function qo(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function Vc(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bc(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Zv(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,a,d,h,m,x,C){return t=new Zv(t,i,o,x,C),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(h),t}function e0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function kp(t){if(!t)return Pn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(gt(o))return Zh(t,o,i)}return i}function Np(t,i,o,a,d,h,m,x,C){return t=Hc(o,a,!0,t,d,h,m,x,C),t.context=kp(null),o=t.current,a=ct(),d=jn(o),h=un(a,d),h.callback=i??null,On(o,h,d),t.current.lanes=d,Pi(t,d,a),vt(t,a),t}function Yo(t,i,o,a){var d=i.current,h=ct(),m=jn(d);return o=kp(o),i.context===null?i.context=o:i.pendingContext=o,i=un(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=On(d,i,m),t!==null&&(Bt(t,d,m,h),No(t,d,m)),m}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $c(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function t0(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Jo.prototype.render=Gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Jo.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fr(function(){Yo(null,t,null,null)}),i[sn]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=dh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<In.length&&i!==0&&i<In[o].priority;o++);In.splice(o,0,t),o===0&&ph(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function n0(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var T=Xo(m);h.call(T)}}var m=Np(i,a,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=m,t[sn]=m.current,Hi(t.nodeType===8?t.parentNode:t),fr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var x=a;a=function(){var T=Xo(C);x.call(T)}}var C=Hc(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=C,t[sn]=C.current,Hi(t.nodeType===8?t.parentNode:t),fr(function(){Yo(i,C,o,a)}),C}function el(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var x=d;d=function(){var C=Xo(m);x.call(C)}}Yo(i,m,t,d)}else m=n0(o,i,t,d,a);return Xo(m)}ch=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ri(i.pendingLanes);o!==0&&(_a(i,o|1),vt(i,Ue()),(pe&6)===0&&(Xr=Ue()+500,bn()))}break;case 13:fr(function(){var a=cn(t,1);if(a!==null){var d=ct();Bt(a,t,1,d)}}),$c(t,1)}},ya=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ct();Bt(i,t,134217728,o)}$c(t,134217728)}},uh=function(t){if(t.tag===13){var i=jn(t),o=cn(t,i);if(o!==null){var a=ct();Bt(o,t,i,a)}$c(t,i)}},dh=function(){return we},hh=function(t,i){var o=we;try{return we=t,i()}finally{we=o}},ua=function(t,i,o){switch(i){case"input":if(na(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=_o(a);if(!d)throw Error(n(90));Md(a),na(a,d)}}}break;case"textarea":Wd(t,o);break;case"select":i=o.value,i!=null&&Tr(t,!!o.multiple,i,!1)}},Yd=Fc,Xd=fr;var r0={usingClientEntryPoint:!1,Events:[Ki,Fr,_o,Qd,qd,Fc]},ls={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i0={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=th(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Xs=tl.inject(i0),Yt=tl}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0,wt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(i))throw Error(n(200));return e0(t,i,null,o)},wt.createRoot=function(t,i){if(!Kc(t))throw Error(n(299));var o=!1,a="",d=Rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,a,d),t[sn]=i.current,Hi(t.nodeType===8?t.parentNode:t),new Gc(i)},wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=th(i),t=t===null?null:t.stateNode,t},wt.flushSync=function(t){return fr(t)},wt.hydrate=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!0,o)},wt.hydrateRoot=function(t,i,o){if(!Kc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Np(i,null,t,1,o??null,d,!1,h,m),t[sn]=i.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Jo(i)},wt.render=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!1,o)},wt.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(fr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},wt.unstable_batchedUpdates=Fc,wt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Zo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,a)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var Fp;function h0(){if(Fp)return Yc.exports;Fp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yc.exports=d0(),Yc.exports}var Up;function f0(){if(Up)return nl;Up=1;var r=h0();return nl.createRoot=r.createRoot,nl.hydrateRoot=r.hydrateRoot,nl}var p0=f0();const m0=Ym(p0),g0=()=>{};var zp={};/**
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
 */const Jm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw mi(e)},mi=function(r){return new Error("Firebase Database ("+Jm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Zm=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},_0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],u=r[n++],f=r[n++],p=((l&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],u=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|u&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],u=l+1<r.length,f=u?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,y=c>>2,w=(c&3)<<4|f>>4;let v=(f&15)<<2|g>>6,k=g&63;p||(k=64,u||(v=64)),s.push(n[y],n[w],n[v],n[k])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Zm(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const w=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||f==null||g==null||w==null)throw new y0;const v=c<<2|f>>4;if(s.push(v),g!==64){const k=f<<4&240|g>>2;if(s.push(k),w!==64){const R=g<<6&192|w;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(r){const e=Zm(r);return Vu.encodeByteArray(e,!0)},fl=function(r){return eg(r).replace(/\./g,"")},pl=function(r){try{return Vu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function v0(r){return tg(void 0,r)}function tg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!w0(n)||(r[n]=tg(r[n],e[n]));return r}function w0(r){return r!=="__proto__"}/**
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
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const C0=()=>x0().__FIREBASE_DEFAULTS__,E0=()=>{if(typeof process>"u"||typeof zp>"u")return;const r=zp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},S0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&pl(r[1]);return e&&JSON.parse(e)},Bu=()=>{try{return g0()||C0()||E0()||S0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ng=r=>{var e,n;return(n=(e=Bu())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},I0=r=>{const e=ng(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rg=()=>{var r;return(r=Bu())==null?void 0:r.config},ig=r=>{var e;return(e=Bu())==null?void 0:e[`_${r}`]};/**
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
 */class Os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function gi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function k0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[fl(JSON.stringify(n)),fl(JSON.stringify(u)),""].join(".")}const fs={};function N0(){const r={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?r.emulator.push(e):r.prod.push(e);return r}function T0(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Wp=!1;function og(r,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||fs[r]===e||fs[r]||Wp)return;fs[r]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",c=N0().prod.length>0;function u(){const v=document.getElementById(s);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,k){v.setAttribute("width","24"),v.setAttribute("id",k),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function g(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Wp=!0,u()},v}function y(v,k){v.setAttribute("id",k),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function w(){const v=T0(s),k=n("text"),R=document.getElementById(k)||document.createElement("span"),b=n("learnmore"),P=document.getElementById(b)||document.createElement("a"),z=n("preprendIcon"),W=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const M=v.element;f(M),y(P,b);const j=g();p(W,z),M.append(W,R,P,j),document.body.appendChild(M)}c?(R.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function R0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b0(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function A0(){return Jm.NODE_ADMIN===!0}function O0(){try{return typeof indexedDB=="object"}catch{return!1}}function D0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;e(((c=l.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const L0="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=L0,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],u=c?M0(c,s):"Error",f=`${this.serviceName}: ${u} (${l}).`;return new rr(l,f,s)}}function M0(r,e){return r.replace(j0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const j0=/\{\$([^}]+)}/g;/**
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
 */function ws(r){return JSON.parse(r)}function Ge(r){return JSON.stringify(r)}/**
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
 */const ag=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=ws(pl(c[0])||""),n=ws(pl(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},F0=function(r){const e=ag(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},U0=function(r){const e=ag(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function li(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function gu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ml(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function wr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],u=e[l];if(Vp(c)&&Vp(u)){if(!wr(c,u))return!1}else if(c!==u)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Vp(r){return r!==null&&typeof r=="object"}/**
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
 */class z0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)s[w]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let w=0;w<16;w++)s[w]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let w=16;w<80;w++){const v=s[w-3]^s[w-8]^s[w-14]^s[w-16];s[w]=(v<<1|v>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,y;for(let w=0;w<80;w++){w<40?w<20?(g=f^c&(u^f),y=1518500249):(g=c^u^f,y=1859775393):w<60?(g=c&u|f&(c|u),y=2400959708):(g=c^u^f,y=3395469782);const v=(l<<5|l>>>27)+g+p+y+s[w]&4294967295;p=f,f=u,u=(c<<30|c>>>2)&4294967295,c=l,l=v}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const c=this.buf_;let u=this.inbuf_;for(;l<n;){if(u===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[u]=e.charCodeAt(l),++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}else for(;l<n;)if(c[u]=e[l],++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function W0(r,e){const n=new V0(r,e);return n.subscribe.bind(n)}class V0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");B0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Zc),l.error===void 0&&(l.error=Zc),l.complete===void 0&&(l.complete=Zc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Zc(){}function Ml(r,e){return`${r} failed: ${e} argument `}/**
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
 */const H0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const u=r.charCodeAt(s)-56320;l=65536+(c<<10)+u}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},jl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ct(r){return r&&r._delegate?r._delegate:r}class xr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class $0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Os;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K0(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:G0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G0(r){return r===_r?void 0:r}function K0(r){return r.instantiationMode==="EAGER"}/**
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
 */class Q0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const q0={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Y0=Ce.INFO,X0={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},J0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=X0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=Y0,this._logHandler=J0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const Z0=(r,e)=>e.some(n=>r instanceof n);let Bp,Hp;function ew(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tw(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,_u=new WeakMap,ug=new WeakMap,eu=new WeakMap,Gu=new WeakMap;function nw(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",u)},c=()=>{n(Kn(r.result)),l()},u=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,r)}).catch(()=>{}),Gu.set(e,r),e}function rw(r){if(_u.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",u),r.removeEventListener("abort",u)},c=()=>{n(),l()},u=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",u),r.addEventListener("abort",u)});_u.set(r,e)}let yu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return _u.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ug.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function iw(r){yu=r(yu)}function sw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(tu(this),e,...n);return ug.set(s,e.sort?e.sort():[e]),Kn(s)}:tw().includes(r)?function(...e){return r.apply(tu(this),e),Kn(cg.get(this))}:function(...e){return Kn(r.apply(tu(this),e))}}function ow(r){return typeof r=="function"?sw(r):(r instanceof IDBTransaction&&rw(r),Z0(r,ew())?new Proxy(r,yu):r)}function Kn(r){if(r instanceof IDBRequest)return nw(r);if(eu.has(r))return eu.get(r);const e=ow(r);return e!==r&&(eu.set(r,e),Gu.set(e,r)),e}const tu=r=>Gu.get(r);function lw(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const u=indexedDB.open(r,e),f=Kn(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Kn(u.result),p.oldVersion,p.newVersion,Kn(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const aw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],nu=new Map;function $p(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=cw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||aw.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return nu.set(e,c),c}iw(r=>({...r,get:(e,n,s)=>$p(e,n)||r.get(e,n,s),has:(e,n)=>!!$p(e,n)||r.has(e,n)}));/**
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
 */class uw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",Gp="0.14.8";/**
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
 */const _n=new $u("@firebase/app"),hw="@firebase/app-compat",fw="@firebase/analytics-compat",pw="@firebase/analytics",mw="@firebase/app-check-compat",gw="@firebase/app-check",_w="@firebase/auth",yw="@firebase/auth-compat",vw="@firebase/database",ww="@firebase/data-connect",xw="@firebase/database-compat",Cw="@firebase/functions",Ew="@firebase/functions-compat",Sw="@firebase/installations",Iw="@firebase/installations-compat",kw="@firebase/messaging",Nw="@firebase/messaging-compat",Tw="@firebase/performance",Rw="@firebase/performance-compat",Pw="@firebase/remote-config",bw="@firebase/remote-config-compat",Aw="@firebase/storage",Ow="@firebase/storage-compat",Dw="@firebase/firestore",Lw="@firebase/ai",Mw="@firebase/firestore-compat",jw="firebase",Fw="12.9.0";/**
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
 */const wu="[DEFAULT]",Uw={[vu]:"fire-core",[hw]:"fire-core-compat",[pw]:"fire-analytics",[fw]:"fire-analytics-compat",[gw]:"fire-app-check",[mw]:"fire-app-check-compat",[_w]:"fire-auth",[yw]:"fire-auth-compat",[vw]:"fire-rtdb",[ww]:"fire-data-connect",[xw]:"fire-rtdb-compat",[Cw]:"fire-fn",[Ew]:"fire-fn-compat",[Sw]:"fire-iid",[Iw]:"fire-iid-compat",[kw]:"fire-fcm",[Nw]:"fire-fcm-compat",[Tw]:"fire-perf",[Rw]:"fire-perf-compat",[Pw]:"fire-rc",[bw]:"fire-rc-compat",[Aw]:"fire-gcs",[Ow]:"fire-gcs-compat",[Dw]:"fire-fst",[Mw]:"fire-fst-compat",[Lw]:"fire-vertex","fire-js":"fire-js",[jw]:"fire-js-all"};/**
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
 */const gl=new Map,zw=new Map,xu=new Map;function Kp(r,e){try{r.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ai(r){const e=r.name;if(xu.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;xu.set(e,r);for(const n of gl.values())Kp(n,r);for(const n of zw.values())Kp(n,r);return!0}function Ku(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ht(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Ww={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ds("app","Firebase",Ww);/**
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
 */class Vw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=Fw;function dg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:wu,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=rg()),!n)throw Qn.create("no-options");const c=gl.get(l);if(c){if(wr(n,c.options)&&wr(s,c.config))return c;throw Qn.create("duplicate-app",{appName:l})}const u=new Q0(l);for(const p of xu.values())u.addComponent(p);const f=new Vw(n,s,u);return gl.set(l,f),f}function hg(r=wu){const e=gl.get(r);if(!e&&r===wu&&rg())return dg();if(!e)throw Qn.create("no-app",{appName:r});return e}function qn(r,e,n){let s=Uw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const u=[`Unable to register library "${s}" with version "${e}":`];l&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(u.join(" "));return}ai(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Bw="firebase-heartbeat-database",Hw=1,xs="firebase-heartbeat-store";let ru=null;function fg(){return ru||(ru=lw(Bw,Hw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),ru}async function $w(r){try{const n=(await fg()).transaction(xs),s=await n.objectStore(xs).get(pg(r));return await n.done,s}catch(e){if(e instanceof rr)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Qp(r,e){try{const s=(await fg()).transaction(xs,"readwrite");await s.objectStore(xs).put(e,pg(r)),await s.done}catch(n){if(n instanceof rr)_n.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function pg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Gw=1024,Kw=30;class Qw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=qp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Kw){const u=Xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qp(),{heartbeatsToSend:s,unsentEntries:l}=qw(this._heartbeatsCache.heartbeats),c=fl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _n.warn(n),""}}}function qp(){return new Date().toISOString().substring(0,10)}function qw(r,e=Gw){const n=[];let s=r.slice();for(const l of r){const c=n.find(u=>u.agent===l.agent);if(c){if(c.dates.push(l.date),Yp(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Yp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O0()?D0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $w(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yp(r){return fl(JSON.stringify({version:2,heartbeats:r})).length}function Xw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function Jw(r){ai(new xr("platform-logger",e=>new uw(e),"PRIVATE")),ai(new xr("heartbeat",e=>new Qw(e),"PRIVATE")),qn(vu,Gp,r),qn(vu,Gp,"esm2020"),qn("fire-js","")}Jw("");var Zw="firebase",ex="12.9.0";/**
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
 */qn(Zw,ex,"app");function mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tx=mg,gg=new Ds("auth","Firebase",mg());/**
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
 */const _l=new $u("@firebase/auth");function nx(r,...e){_l.logLevel<=Ce.WARN&&_l.warn(`Auth (${yi}): ${r}`,...e)}function ll(r,...e){_l.logLevel<=Ce.ERROR&&_l.error(`Auth (${yi}): ${r}`,...e)}/**
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
 */function yn(r,...e){throw Qu(r,...e)}function tn(r,...e){return Qu(r,...e)}function _g(r,e,n){const s={...tx(),[e]:n};return new Ds("auth","Firebase",s).create(e,{appName:r.name})}function Yn(r){return _g(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return gg.create(r,...e)}function ie(r,e,...n){if(!r)throw Qu(e,...n)}function fn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ll(e),new Error(e)}function vn(r,e){r||fn(e)}/**
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
 */function Cu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function rx(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function ix(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rx()||P0()||"connection"in navigator)?navigator.onLine:!0}function sx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||lg()}get(){return ix()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class yg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ax=new Ls(3e4,6e4);function Fl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vi(r,e,n,s,l={}){return vg(r,l,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=_i({key:r.config.apiKey,...u}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...c};return R0()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&gi(r.emulatorConfig.host)&&(g.credentials="include"),yg.fetch()(await xg(r,r.config.apiHost,n,f),g)})}async function vg(r,e,n){r._canInitEmulator=!1;const s={...ox,...e};try{const l=new cx(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw rl(r,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(r,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw rl(r,"email-already-in-use",u);if(p==="USER_DISABLED")throw rl(r,"user-disabled",u);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw _g(r,y,g);yn(r,y)}}catch(l){if(l instanceof rr)throw l;yn(r,"network-request-failed",{message:String(l)})}}async function wg(r,e,n,s,l={}){const c=await vi(r,e,n,s,l);return"mfaPendingCredential"in c&&yn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function xg(r,e,n,s){const l=`${e}${n}?${s}`,c=r,u=c.config.emulator?qu(r.config,l):`${r.config.apiScheme}://${l}`;return lx.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class cx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),ax.get())})}}function rl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function ux(r,e){return vi(r,"POST","/v1/accounts:delete",e)}async function yl(r,e){return vi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dx(r,e=!1){const n=Ct(r),s=await n.getIdToken(e),l=Yu(s);ie(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:ps(iu(l.auth_time)),issuedAtTime:ps(iu(l.iat)),expirationTime:ps(iu(l.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function iu(r){return Number(r)*1e3}function Yu(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const l=pl(n);return l?JSON.parse(l):(ll("Failed to decode base64 JWT payload"),null)}catch(l){return ll("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Jp(r){const e=Yu(r);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&hx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function hx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class fx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vl(r){var w;const e=r.auth,n=await r.getIdToken(),s=await Cs(r,yl(e,{idToken:n}));ie(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=(w=l.providerUserInfo)!=null&&w.length?Cg(l.providerUserInfo):[],u=mx(r.providerData,c),f=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Eu(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,y)}async function px(r){const e=Ct(r);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mx(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Cg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function gx(r,e){const n=await vg(r,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,u=await xg(r,l,"/v1/token",`key=${c}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&gi(r.emulatorConfig.host)&&(p.credentials="include"),yg.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _x(r,e){return vi(r,"POST","/v2/accounts:revokeToken",Fl(r,e))}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Jp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await gx(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,u=new ni;return s&&(ie(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),l&&(ie(typeof l=="string","internal-error",{appName:e}),u.accessToken=l),c&&(ie(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Wn(r,e){ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new fx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Eu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dx(this,e)}reload(){return px(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Cs(this,ux(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:w,emailVerified:v,isAnonymous:k,providerData:R,stsTokenManager:b}=n;ie(w&&b,e,"internal-error");const P=ni.fromJSON(this.name,b);ie(typeof w=="string",e,"internal-error"),Wn(s,e.name),Wn(l,e.name),ie(typeof v=="boolean",e,"internal-error"),ie(typeof k=="boolean",e,"internal-error"),Wn(c,e.name),Wn(u,e.name),Wn(f,e.name),Wn(p,e.name),Wn(g,e.name),Wn(y,e.name);const z=new Gt({uid:w,auth:e,email:l,emailVerified:v,displayName:s,isAnonymous:k,photoURL:u,phoneNumber:c,tenantId:f,stsTokenManager:P,createdAt:g,lastLoginAt:y});return R&&Array.isArray(R)&&(z.providerData=R.map(W=>({...W}))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(e,n,s=!1){const l=new ni;l.updateFromServerResponse(n);const c=new Gt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await vl(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ie(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Cg(l.providerUserInfo):[],u=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),f=new ni;f.updateFromIdToken(s);const p=new Gt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Eu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,g),p}}/**
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
 */const Zp=new Map;function pn(r){vn(r instanceof Function,"Expected a class definition");let e=Zp.get(r);return e?(vn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Zp.set(r,e),e)}/**
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
 */class Eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Eg.type="NONE";const em=Eg;/**
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
 */function al(r,e,n){return`firebase:${r}:${e}:${n}`}class ri{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=al(this.userKey,l.apiKey,c),this.fullPersistenceKey=al("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ri(pn(em),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=l[0]||pn(em);const u=al(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const v=await yl(e,{idToken:y}).catch(()=>{});if(!v)break;w=await Gt._fromGetAccountInfoResponse(e,v,y)}else w=Gt._fromJSON(e,y);g!==c&&(f=w),c=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ri(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(u)}catch{}})),new ri(c,e,s))}}/**
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
 */function tm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rg(e))return"Blackberry";if(Pg(e))return"Webos";if(Ig(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sg(r=ft()){return/firefox\//i.test(r)}function Ig(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(r=ft()){return/crios\//i.test(r)}function Ng(r=ft()){return/iemobile/i.test(r)}function Tg(r=ft()){return/android/i.test(r)}function Rg(r=ft()){return/blackberry/i.test(r)}function Pg(r=ft()){return/webos/i.test(r)}function Xu(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function yx(r=ft()){var e;return Xu(r)&&!!((e=window.navigator)!=null&&e.standalone)}function vx(){return b0()&&document.documentMode===10}function bg(r=ft()){return Xu(r)||Tg(r)||Pg(r)||Rg(r)||/windows phone/i.test(r)||Ng(r)}/**
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
 */function Ag(r,e=[]){let n;switch(r){case"Browser":n=tm(ft());break;case"Worker":n=`${tm(ft())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */class wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((u,f)=>{try{const p=e(c);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xx(r,e={}){return vi(r,"GET","/v2/passwordPolicy",Fl(r,e))}/**
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
 */const Cx=6;class Ex{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Cx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Sx{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.beforeStateQueue=new wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,l,c;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Ht(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(c=this.redirectUser)==null?void 0:c._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Yn(this));const n=e?Ct(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xx(this),n=new Ex(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _x(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(f,this,"internal-error"),f.then(()=>{u||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&nx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ul(r){return Ct(r)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=W0(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ix(r){Ju=r}function kx(r){return Ju.loadJS(r)}function Nx(){return Ju.gapiScript}function Tx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Rx(r,e){const n=Ku(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(wr(c,e??{}))return l;yn(l,"already-initialized")}return n.initialize({options:e})}function Px(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bx(r,e,n){const s=Ul(r);ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Og(e),{host:u,port:f}=Ax(e),p=f===null?"":`:${f}`,g={url:`${c}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ie(wr(g,s.config.emulator)&&wr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,gi(u)?(sg(`${c}//${u}${p}`),og("Auth",!0)):Ox()}function Og(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Ax(r){const e=Og(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:rm(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:rm(u)}}}function rm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ox(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function ii(r,e){return wg(r,"POST","/v1/accounts:signInWithIdp",Fl(r,e))}/**
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
 */const Dx="http://localhost";class Cr extends Dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const u=new Cr(s,l);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ii(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:Dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */class Lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Ms{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Ms{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class $n extends Ms{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */async function Lx(r,e){return wg(r,"POST","/v1/accounts:signUp",Fl(r,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await Gt._fromIdTokenResponse(e,s,l),u=im(s);return new Zn({user:c,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=im(s);return new Zn({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function im(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function Mx(r){var l;if(Ht(r.app))return Promise.reject(Yn(r));const e=Ul(r);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new Zn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Lx(e,{returnSecureToken:!0}),s=await Zn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class wl extends rr{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new wl(e,n,s,l)}}function Mg(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(r,c,e,s):c})}async function jx(r,e,n=!1){const s=await Cs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zn._forOperation(r,"link",s)}/**
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
 */async function Fx(r,e,n=!1){const{auth:s}=r;if(Ht(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const c=await Cs(r,Mg(s,l,e,r),n);ie(c.idToken,s,"internal-error");const u=Yu(c.idToken);ie(u,s,"internal-error");const{sub:f}=u;return ie(r.uid===f,s,"user-mismatch"),Zn._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&yn(s,"user-mismatch"),c}}/**
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
 */async function Ux(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s="signIn",l=await Mg(r,s,e),c=await Zn._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}/**
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
 */function zx(r,e){return Ct(r).setPersistence(e)}function Wx(r,e,n,s){return Ct(r).onIdTokenChanged(e,n,s)}function Vx(r,e,n){return Ct(r).beforeAuthStateChanged(e,n)}function Bx(r,e,n,s){return Ct(r).onAuthStateChanged(e,n,s)}const xl="__sak";/**
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
 */class jg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hx=1e3,$x=10;class Fg extends jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);vx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,$x):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const Gx=Fg;/**
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
 */class Ug extends jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ug.type="SESSION";const Zu=Ug;/**
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
 */function Kx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,u=this.handlersMap[l];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(u).map(async g=>g(n.origin,c)),p=await Kx(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */class Qx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const g=ed("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:l,onMessage(w){const v=w;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(v.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),l.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function nn(){return window}function qx(r){nn().location.href=r}/**
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
 */function zg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function Yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xx(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Jx(){return zg()?self:null}/**
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
 */const Wg="firebaseLocalStorageDb",Zx=1,Cl="firebaseLocalStorage",Vg="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(r,e){return r.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function eC(){const r=indexedDB.deleteDatabase(Wg);return new js(r).toPromise()}function Su(){const r=indexedDB.open(Wg,Zx);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Cl,{keyPath:Vg})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Cl)?e(s):(s.close(),await eC(),e(await Su()))})})}async function sm(r,e,n){const s=Wl(r,!0).put({[Vg]:e,value:n});return new js(s).toPromise()}async function tC(r,e){const n=Wl(r,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function om(r,e){const n=Wl(r,!0).delete(e);return new js(n).toPromise()}const nC=800,rC=3;class Bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(Jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Yx(),!this.activeServiceWorker)return;this.sender=new Qx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await sm(e,xl,"1"),await om(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>om(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Wl(l,!1).getAll();return new js(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bg.type="LOCAL";const iC=Bg;new Ls(3e4,6e4);/**
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
 */function sC(r,e){return e?pn(e):(ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class td extends Dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oC(r){return Ux(r.auth,new td(r),r.bypassAuthState)}function lC(r){const{auth:e,user:n}=r;return ie(n,e,"internal-error"),Fx(n,new td(r),r.bypassAuthState)}async function aC(r){const{auth:e,user:n}=r;return ie(n,e,"internal-error"),jx(n,new td(r),r.bypassAuthState)}/**
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
 */class Hg{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return lC;default:yn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new Ls(2e3,1e4);class ei extends Hg{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}ei.currentPopupAction=null;/**
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
 */const uC="pendingRedirect",cl=new Map;class dC extends Hg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const s=await hC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hC(r,e){const n=mC(e),s=pC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function fC(r,e){cl.set(r._key(),e)}function pC(r){return pn(r._redirectPersistence)}function mC(r){return al(uC,r.config.apiKey,r.name)}async function gC(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s=Ul(r),l=sC(s,e),u=await new dC(s,l,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const _C=600*1e3;class yC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!$g(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function $g({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $g(r);default:return!1}}/**
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
 */async function wC(r,e={}){return vi(r,"GET","/v1/projects",e)}/**
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
 */const xC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function EC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await wC(r);for(const n of e)try{if(SC(n))return}catch{}yn(r,"unauthorized-domain")}function SC(r){const e=Cu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!CC.test(n))return!1;if(xC.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const IC=new Ls(3e4,6e4);function am(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function kC(r){return new Promise((e,n)=>{var l,c,u;function s(){am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{am(),n(tn(r,"network-request-failed"))},timeout:IC.get()})}if((c=(l=nn().gapi)==null?void 0:l.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((u=nn().gapi)!=null&&u.load)s();else{const f=Tx("iframefcb");return nn()[f]=()=>{gapi.load?s():n(tn(r,"network-request-failed"))},kx(`${Nx()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ul=null,e})}let ul=null;function NC(r){return ul=ul||kC(r),ul}/**
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
 */const TC=new Ls(5e3,15e3),RC="__/auth/iframe",PC="emulator/auth/iframe",bC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(r){const e=r.config;ie(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?qu(e,PC):`https://${r.config.authDomain}/${RC}`,s={apiKey:e.apiKey,appName:r.name,v:yi},l=AC.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${_i(s).slice(1)}`}async function DC(r){const e=await NC(r),n=nn().gapi;return ie(n,r,"internal-error"),e.open({where:document.body,url:OC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bC,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const u=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{c(u)},TC.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
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
 */const LC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,jC=600,FC="_blank",UC="http://localhost";class cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zC(r,e,n,s=MC,l=jC){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...LC,width:s.toString(),height:l.toString(),top:c,left:u},g=ft().toLowerCase();n&&(f=kg(g)?FC:n),Sg(g)&&(e=e||UC,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[k,R])=>`${v}${k}=${R},`,"");if(yx(g)&&f!=="_self")return WC(e||"",f),new cm(null);const w=window.open(e||"",f,y);ie(w,r,"popup-blocked");try{w.focus()}catch{}return new cm(w)}function WC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const VC="__/auth/handler",BC="emulator/auth/handler",HC=encodeURIComponent("fac");async function um(r,e,n,s,l,c){ie(r.config.authDomain,r,"auth-domain-config-required"),ie(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof Lg){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",gu(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof Ms){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}r.tenantId&&(u.tid=r.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),g=p?`#${HC}=${encodeURIComponent(p)}`:"";return`${$C(r)}?${_i(f).slice(1)}${g}`}function $C({config:r}){return r.emulator?qu(r,BC):`https://${r.authDomain}/${VC}`}/**
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
 */const su="webStorageSupport";class GC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zu,this._completeRedirectFn=gC,this._overrideRedirectResult=fC}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await um(e,n,s,Cu(),l);return zC(e,c,ed())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await um(e,n,s,Cu(),l);return qx(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(vn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await DC(e),s=new yC(e);return n.register("authEvent",l=>(ie(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},l=>{var u;const c=(u=l==null?void 0:l[0])==null?void 0:u[su];c!==void 0&&n(!!c),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bg()||Ig()||Xu()}}const KC=GC;var dm="@firebase/auth",hm="1.12.0";/**
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
 */class QC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(r){ai(new xr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;ie(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ag(r)},g=new Sx(s,l,c,p);return Px(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ai(new xr("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(s=>new QC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(dm,hm,qC(r)),qn(dm,hm,"esm2020")}/**
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
 */const XC=300,JC=ig("authIdTokenMaxAge")||XC;let fm=null;const ZC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>JC)return;const l=n==null?void 0:n.token;fm!==l&&(fm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function eE(r=hg()){const e=Ku(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Rx(r,{popupRedirectResolver:KC,persistence:[iC,Gx,Zu]}),s=ig("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const u=ZC(c.toString());Vx(n,u,()=>u(n.currentUser)),Wx(n,f=>u(f))}}const l=ng("auth");return l&&bx(n,`http://${l}`),n}function tE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Ix({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=tn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",tE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");var pm={};const mm="@firebase/database",gm="1.1.0";/**
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
 */let Gg="";function nE(r){Gg=r}/**
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
 */class rE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Kg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rE(e)}}catch{}return new iE},vr=Kg("localStorage"),sE=Kg("sessionStorage");/**
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
 */const si=new $u("@firebase/database"),oE=(function(){let r=1;return function(){return r++}})(),Qg=function(r){const e=H0(r),n=new z0;n.update(e);const s=n.digest();return Vu.encodeByteArray(s)},Fs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Ge(s):e+=s,e+=" "}return e};let ms=null,_m=!0;const lE=function(r,e){U(!0,"Can't turn on custom loggers persistently."),si.logLevel=Ce.VERBOSE,ms=si.log.bind(si)},et=function(...r){if(_m===!0&&(_m=!1,ms===null&&sE.get("logging_enabled")===!0&&lE()),ms){const e=Fs.apply(null,r);ms(e)}},Us=function(r){return function(...e){et(r,...e)}},Iu=function(...r){const e="FIREBASE INTERNAL ERROR: "+Fs(...r);si.error(e)},wn=function(...r){const e=`FIREBASE FATAL ERROR: ${Fs(...r)}`;throw si.error(e),new Error(e)},dt=function(...r){const e="FIREBASE WARNING: "+Fs(...r);si.warn(e)},aE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},cE=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",Er="[MAX_NAME]",kr=function(r,e){if(r===e)return 0;if(r===ci||e===Er)return-1;if(e===ci||r===Er)return 1;{const n=ym(r),s=ym(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},uE=function(r,e){return r===e?0:r<e?-1:1},cs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ge(e))},rd=function(r){if(typeof r!="object"||r===null)return Ge(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ge(e[s]),n+=":",n+=rd(r[e[s]]);return n+="}",n},qg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function tt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Yg=function(r){U(!nd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,u,f,p;r===0?(c=0,u=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=f+s,u=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(l?1:0),g.reverse();const y=g.join("");let w="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),w=w+v}return w.toLowerCase()},dE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fE(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const pE=new RegExp("^-?(0*)\\d{1,10}$"),mE=-2147483648,gE=2147483647,ym=function(r){if(pE.test(r)){const e=Number(r);if(e>=mE&&e<=gE)return e}return null},wi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},_E=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class dl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dl.OWNER="owner";/**
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
 */const id="5",Xg="v",Jg="s",Zg="r",e_="f",t_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,n_="ls",r_="p",ku="ac",i_="websocket",s_="long_polling";/**
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
 */class o_{constructor(e,n,s,l,c=!1,u="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function l_(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===i_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===s_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wE(r)&&(n.ns=r.namespace);const l=[];return tt(n,(c,u)=>{l.push(c+"="+u)}),s+l.join("&")}/**
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
 */class xE{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return v0(this.counters_)}}/**
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
 */const ou={},lu={};function sd(r){const e=r.toString();return ou[e]||(ou[e]=new xE),ou[e]}function CE(r,e){const n=r.toString();return lu[n]||(lu[n]=e()),lu[n]}/**
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
 */class EE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&wi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vm="start",SE="close",IE="pLPCommand",kE="pRTLPCB",a_="id",c_="pw",u_="ser",NE="cb",TE="seg",RE="ts",PE="d",bE="dframe",d_=1870,h_=30,AE=d_-h_,OE=25e3,DE=3e4;class ti{constructor(e,n,s,l,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=sd(n),this.urlFn=p=>(this.appCheckToken&&(p[ku]=this.appCheckToken),l_(n,s_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new EE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DE)),cE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...c)=>{const[u,f,p,g,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===vm)this.id=f,this.password=p;else if(u===SE)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[vm]="t",s[u_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[NE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Xg]=id,this.transportSessionId&&(s[Jg]=this.transportSessionId),this.lastSessionId&&(s[n_]=this.lastSessionId),this.applicationId&&(s[r_]=this.applicationId),this.appCheckToken&&(s[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&t_.test(location.hostname)&&(s[Zg]=e_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dE()&&!hE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eg(n),l=qg(s,AE);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bE]="t",s[a_]=e,s[c_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oE(),window[IE+this.uniqueCallbackIdentifier]=e,window[kE+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){et("frame writing exception"),f.stack&&et(f.stack),et(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[a_]=this.myID,e[c_]=this.myPW,e[u_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h_+s.length<=d_;){const u=this.pendingSegs.shift();s=s+"&"+TE+l+"="+u.seg+"&"+RE+l+"="+u.ts+"&"+PE+l+"="+u.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(OE)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const LE=16384,ME=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class $t{constructor(e,n,s,l,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=sd(n),this.connURL=$t.connectionURL_(n,u,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const u={};return u[Xg]=id,typeof location<"u"&&location.hostname&&t_.test(location.hostname)&&(u[Zg]=e_),n&&(u[Jg]=n),s&&(u[n_]=s),l&&(u[ku]=l),c&&(u[r_]=c),l_(e,i_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vr.set("previous_websocket_failure",!0);try{let s;A0(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!$t.forceDisallow_}static previouslyFailed(){return vr.isInMemoryStorage||vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qg(n,LE);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ME))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Es{static get ALL_TRANSPORTS(){return[ti,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const c of Es.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const jE=6e4,FE=5e3,UE=10*1024,zE=100*1024,au="t",wm="d",WE="s",xm="r",VE="e",Cm="o",Em="a",Sm="n",Im="p",BE="h";class HE{constructor(e,n,s,l,c,u,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(au in e){const n=e[au];n===Em?this.upgradeIfSecondaryHealthy_():n===xm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Em,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(au,e);if(wm in e){const s=e[wm];if(n===BE){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Sm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WE?this.onConnectionShutdown_(s):n===xm?this.onReset_(s):n===VE?Iu("Server Error: "+s):n===Cm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Iu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),id!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class f_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class p_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sl extends p_{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const km=32,Nm=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ee("")}function ae(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function Ne(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ee(r.pieces_,e)}function ld(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function $E(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ss(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function m_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Ee(e,0)}function je(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ee(n,0)}function de(r){return r.pieceNum_>=r.pieces_.length}function ut(r,e){const n=ae(r),s=ae(e);if(n===null)return e;if(n===s)return ut(Ne(r),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function GE(r,e){const n=Ss(r,0),s=Ss(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=kr(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function ad(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class KE{constructor(e,n){this.errorPrefix_=n,this.parts_=Ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jl(this.parts_[s]);g_(this)}}function QE(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=jl(e),g_(r)}function qE(r){const e=r.parts_.pop();r.byteLength_-=jl(e),r.parts_.length>0&&(r.byteLength_-=1)}function g_(r){if(r.byteLength_>Nm)throw new Error(r.errorPrefix_+"has a key path longer than "+Nm+" bytes ("+r.byteLength_+").");if(r.parts_.length>km)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+km+") or object contains a cycle "+yr(r))}function yr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class cd extends p_{static getInstance(){return new cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const us=1e3,YE=300*1e3,Tm=30*1e3,XE=1.3,JE=3e4,ZE="server_kill",Rm=3;class gn extends f_{constructor(e,n,s,l,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=YE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(Ge(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Os,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,g=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const s=li(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||U0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=F0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,u=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";l&&(c.q=s,c.t=l),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{l&&setTimeout(()=>{l(u.s,u.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Iu("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JE&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(w){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(w)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=v&&v.token,f=new HE(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,k=>{dt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZE)},c))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&dt(w),p())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>rd(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rm&&(this.reconnectDelay_=Tm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gg.replace(/\./g,"-")]=1,Hu()?e["framework.cordova"]=1:lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(ci,e),l=new ce(ci,n);return this.compare(s,l)!==0}minPost(){return ce.MIN}}/**
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
 */let il;class __ extends Vl{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return kr(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Er,il)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,il)}toString(){return".key"}}const oi=new __;/**
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
 */class sl{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,l&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=l??xt.EMPTY_NODE,this.right=c??xt.EMPTY_NODE}copy(e,n,s,l,c){return new Xe(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class eS{copy(e,n,s,l,c){return this}insert(e,n,s){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new eS;/**
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
 */function tS(r,e){return kr(r.name,e.name)}function ud(r,e){return kr(r,e)}/**
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
 */let Nu;function nS(r){Nu=r}const y_=function(r){return typeof r=="number"?"number:"+Yg(r):"string:"+r},v_=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else U(r===Nu||r.isEmpty(),"priority of unexpected type.");U(r===Nu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pm;class Ye{static set __childrenNodeConstructor(e){Pm=e}static get __childrenNodeConstructor(){return Pm}constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),v_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:ae(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yg(this.value_):e+=this.value_,this.lazyHash_=Qg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ye.VALUE_TYPE_ORDER.indexOf(n),c=Ye.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let w_,x_;function rS(r){w_=r}function iS(r){x_=r}class sS extends Vl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?kr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Er,new Ye("[PRIORITY-POST]",x_))}makePost(e,n){const s=w_(e);return new ce(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new sS;/**
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
 */const oS=Math.log(2);class lS{constructor(e){const n=c=>parseInt(Math.log(c)/oS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(r,e,n,s){r.sort(e);const l=function(p,g){const y=g-p;let w,v;if(y===0)return null;if(y===1)return w=r[p],v=n?n(w):w,new Xe(v,w.node,Xe.BLACK,null,null);{const k=parseInt(y/2,10)+p,R=l(p,k),b=l(k+1,g);return w=r[k],v=n?n(w):w,new Xe(v,w.node,Xe.BLACK,R,b)}},c=function(p){let g=null,y=null,w=r.length;const v=function(R,b){const P=w-R,z=w;w-=R;const W=l(P+1,z),M=r[P],j=n?n(M):M;k(new Xe(j,M.node,b,null,W))},k=function(R){g?(g.left=R,g=R):(y=R,g=R)};for(let R=0;R<p.count;++R){const b=p.nextBitIsOne(),P=Math.pow(2,p.count-(R+1));b?v(P,Xe.BLACK):(v(P,Xe.BLACK),v(P,Xe.RED))}return y},u=new lS(r.length),f=c(u);return new xt(s||e,f)};/**
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
 */let cu;const Zr={};class mn{static get Default(){return U(Zr&&Fe,"ChildrenNode.ts has not been loaded"),cu=cu||new mn({".priority":Zr},{".priority":Fe}),cu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==oi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(ce.Wrap);let u=c.getNext();for(;u;)l=l||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;l?f=Il(s,e.getCompare()):f=Zr;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=f,new mn(y,g)}addToIndexes(e,n){const s=ml(this.indexes_,(l,c)=>{const u=li(this.indexSet_,c);if(U(u,"Missing index implementation for "+c),l===Zr)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(ce.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Il(f,u.getCompare())}else return Zr;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ce(e.name,f))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ml(this.indexes_,l=>{if(l===Zr)return l;{const c=n.get(e.name);return c?l.remove(new ce(e.name,c)):l}});return new mn(s,this.indexSet_)}}/**
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
 */let ds;class ne{static get EMPTY_NODE(){return ds||(ds=new ne(new xt(ud),null,mn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&v_(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=l.isEmpty()?ds:this.priorityNode_;return new ne(l,u,c)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{U(ae(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(Fe,(u,f)=>{n[u]=f.val(e),s++,c&&ne.INTEGER_REGEXP_.test(u)?l=Math.max(l,Number(u)):c=!1}),!e&&c&&l<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+y_(this.getPriority().val())+":"),this.forEachChild(Fe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Qg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ce(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===oi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===oi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Fe),l=n.getIterator(Fe);let c=s.getNext(),u=l.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=l.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===oi?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aS extends ne{constructor(){super(new xt(ud),ne.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const zs=new aS;Object.defineProperties(ce,{MIN:{value:new ce(ci,ne.EMPTY_NODE)},MAX:{value:new ce(Er,zs)}});__.__EMPTY_NODE=ne.EMPTY_NODE;Ye.__childrenNodeConstructor=ne;nS(zs);iS(zs);/**
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
 */const cS=!0;function $e(r,e=null){if(r===null)return ne.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ye(n,$e(e))}if(!(r instanceof Array)&&cS){const n=[];let s=!1;if(tt(r,(u,f)=>{if(u.substring(0,1)!=="."){const p=$e(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ce(u,p)))}}),n.length===0)return ne.EMPTY_NODE;const c=Il(n,tS,u=>u.name,ud);if(s){const u=Il(n,Fe.getCompare());return new ne(c,$e(e),new mn({".priority":u},{".priority":Fe}))}else return new ne(c,$e(e),mn.Default)}else{let n=ne.EMPTY_NODE;return tt(r,(s,l)=>{if(rn(r,s)&&s.substring(0,1)!=="."){const c=$e(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority($e(e))}}rS($e);/**
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
 */class uS extends Vl{constructor(e){super(),this.indexPath_=e,U(!de(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?kr(e.name,n.name):c}makePost(e,n){const s=$e(e),l=ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,l)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,zs);return new ce(Er,e)}toString(){return Ss(this.indexPath_,0).join("/")}}/**
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
 */class dS extends Vl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?kr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=$e(e);return new ce(n,s)}toString(){return".value"}}const hS=new dS;/**
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
 */function C_(r){return{type:"value",snapshotNode:r}}function ui(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Is(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function ks(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function fS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class dd{constructor(e){this.index_=e}updateChild(e,n,s,l,c,u){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Is(n,f)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ui(n,s)):u.trackChildChange(ks(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(l,c)=>{n.hasChild(l)||s.trackChildChange(Is(l,c))}),n.isLeafNode()||n.forEachChild(Fe,(l,c)=>{if(e.hasChild(l)){const u=e.getImmediateChild(l);u.equals(c)||s.trackChildChange(ks(l,c,u))}else s.trackChildChange(ui(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ns{constructor(e){this.indexedFilter_=new dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,u){return this.matches(new ce(n,s))||(s=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ne.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ne.EMPTY_NODE);const c=this;return n.forEachChild(Fe,(u,f)=>{c.matches(new ce(u,f))||(l=l.updateImmediateChild(u,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class pS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,u){return this.rangedFilter_.matches(new ce(n,s))||(s=ne.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ne.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ne.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let u=0;for(;c.hasNext();){const f=c.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:l=l.updateImmediateChild(f.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let u;if(this.reverse_){const w=this.index_.getCompare();u=(v,k)=>w(k,v)}else u=this.index_.getCompare();const f=e;U(f.numChildren()===this.limit_,"");const p=new ce(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const w=f.getImmediateChild(n);let v=l.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=l.getChildAfterChild(this.index_,v,this.reverse_);const k=v==null?1:u(v,p);if(y&&!s.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(ks(n,s,w)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Is(n,w));const b=f.updateImmediateChild(n,ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(c!=null&&c.trackChildChange(ui(v.name,v.node)),b.updateImmediateChild(v.name,v.node)):b}}else return s.isEmpty()?e:y&&u(g,p)>=0?(c!=null&&(c.trackChildChange(Is(g.name,g.node)),c.trackChildChange(ui(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ne.EMPTY_NODE)):e}}/**
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
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mS(r){return r.loadsAllData()?new dd(r.getIndex()):r.hasLimit()?new pS(r):new Ns(r)}function bm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Fe?n="$priority":r.index_===hS?n="$value":r.index_===oi?n="$key":(U(r.index_ instanceof uS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ge(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ge(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ge(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ge(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ge(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Am(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Fe&&(e.i=r.index_.toString()),e}/**
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
 */class kl extends f_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=kl.getListenId_(e,s),f={};this.listens_[u]=f;const p=bm(e._queryParams);this.restRequest_(c+".json",p,(g,y)=>{let w=y;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(c,w,!1,s),li(this.listens_,u)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",l(v,null)}})}unlisten(e,n){const s=kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bm(e._queryParams),s=e._path.toString(),l=new Os;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ws(f.responseText)}catch{dt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&dt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class gS{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Nl(){return{value:null,children:new Map}}function E_(r,e,n){if(de(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ae(e);r.children.has(s)||r.children.set(s,Nl());const l=r.children.get(s);e=Ne(e),E_(l,e,n)}}function Tu(r,e,n){r.value!==null?n(e,r.value):_S(r,(s,l)=>{const c=new Ee(e.toString()+"/"+s);Tu(l,c,n)})}function _S(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class yS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&tt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Om=10*1e3,vS=30*1e3,wS=300*1e3;class xS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yS(e);const s=Om+(vS-Om)*Math.random();gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(l,c)=>{c>0&&rn(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*wS))}}/**
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
 */class Tl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=fd()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Tl(ye(),n,this.revert)}}else return U(ae(this.path)===e,"operationForChild called for unrelated child."),new Tl(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Ts(this.source,ye()):new Ts(this.source,Ne(this.path))}}/**
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
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return de(this.path)?new Sr(this.source,ye(),this.snap.getImmediateChild(e)):new Sr(this.source,Ne(this.path),this.snap)}}/**
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
 */class di{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Sr(this.source,ye(),n.value):new di(this.source,ye(),n)}else return U(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new di(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class CS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ES(r,e,n,s){const l=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&r.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(fS(u.childName,u.snapshotNode))}),hs(r,l,"child_removed",e,s,n),hs(r,l,"child_added",e,s,n),hs(r,l,"child_moved",c,s,n),hs(r,l,"child_changed",e,s,n),hs(r,l,"value",e,s,n),l}function hs(r,e,n,s,l,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>IS(r,f,p)),u.forEach(f=>{const p=SS(r,f,c);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function SS(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function IS(r,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),l=new ce(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function Bl(r,e){return{eventCache:r,serverCache:e}}function _s(r,e,n,s){return Bl(new tr(e,n,s),r.serverCache)}function S_(r,e,n,s){return Bl(r.eventCache,new tr(e,n,s))}function Rl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ir(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let uu;const kS=()=>(uu||(uu=new xt(uE)),uu);class ke{static fromObject(e){let n=new ke(null);return tt(e,(s,l)=>{n=n.set(new Ee(s),l)}),n}constructor(e,n=kS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(de(e))return null;{const s=ae(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Ne(e),n);return c!=null?{path:je(new Ee(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new ke(null)}}set(e,n){if(de(e))return new ke(n,this.children);{const s=ae(e),c=(this.children.get(s)||new ke(null)).set(Ne(e),n),u=this.children.insert(s,c);return new ke(this.value,u)}}remove(e){if(de(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const l=s.remove(Ne(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new ke(null):new ke(this.value,c)}else return this}}get(e){if(de(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(de(e))return n;{const s=ae(e),c=(this.children.get(s)||new ke(null)).setTree(Ne(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new ke(this.value,u)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(je(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(de(e))return null;{const c=ae(e),u=this.children.get(c);return u?u.findOnPath_(Ne(e),je(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(de(e))return this;{this.value&&s(n,this.value);const l=ae(e),c=this.children.get(l);return c?c.foreachOnPath_(Ne(e),je(n,l),s):new ke(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new ke(null))}}function ys(r,e,n){if(de(e))return new Qt(new ke(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const u=ut(l,e);return c=c.updateChild(u,n),new Qt(r.writeTree_.set(l,c))}else{const l=new ke(n),c=r.writeTree_.setTree(e,l);return new Qt(c)}}}function Ru(r,e,n){let s=r;return tt(n,(l,c)=>{s=ys(s,je(e,l),c)}),s}function Dm(r,e){if(de(e))return Qt.empty();{const n=r.writeTree_.setTree(e,new ke(null));return new Qt(n)}}function Pu(r,e){return Nr(r,e)!=null}function Nr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function Lm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(s,l)=>{e.push(new ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ce(s,l.value))}),e}function Xn(r,e){if(de(e))return r;{const n=Nr(r,e);return n!=null?new Qt(new ke(n)):new Qt(r.writeTree_.subtree(e))}}function bu(r){return r.writeTree_.isEmpty()}function hi(r,e){return I_(ye(),r.writeTree_,e)}function I_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=I_(je(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(je(r,".priority"),s)),n}}/**
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
 */function Hl(r,e){return R_(e,r)}function NS(r,e,n,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ys(r.visibleWrites,e,n)),r.lastWriteId=s}function TS(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Ru(r.visibleWrites,e,n),r.lastWriteId=s}function RS(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function PS(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,u=r.allWrites.length-1;for(;l&&u>=0;){const f=r.allWrites[u];f.visible&&(u>=n&&bS(f,s.path)?l=!1:Dt(s.path,f.path)&&(c=!0)),u--}if(l){if(c)return AS(r),!0;if(s.snap)r.visibleWrites=Dm(r.visibleWrites,s.path);else{const f=s.children;tt(f,p=>{r.visibleWrites=Dm(r.visibleWrites,je(s.path,p))})}return!0}else return!1}function bS(r,e){if(r.snap)return Dt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Dt(je(r.path,n),e))return!0;return!1}function AS(r){r.visibleWrites=k_(r.allWrites,OS,ye()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function OS(r){return r.visible}function k_(r,e,n){let s=Qt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const u=c.path;let f;if(c.snap)Dt(n,u)?(f=ut(n,u),s=ys(s,f,c.snap)):Dt(u,n)&&(f=ut(u,n),s=ys(s,ye(),c.snap.getChild(f)));else if(c.children){if(Dt(n,u))f=ut(n,u),s=Ru(s,f,c.children);else if(Dt(u,n))if(f=ut(u,n),de(f))s=Ru(s,ye(),c.children);else{const p=li(c.children,ae(f));if(p){const g=p.getChild(Ne(f));s=ys(s,ye(),g)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function N_(r,e,n,s,l){if(!s&&!l){const c=Nr(r.visibleWrites,e);if(c!=null)return c;{const u=Xn(r.visibleWrites,e);if(bu(u))return n;if(n==null&&!Pu(u,ye()))return null;{const f=n||ne.EMPTY_NODE;return hi(u,f)}}}else{const c=Xn(r.visibleWrites,e);if(!l&&bu(c))return n;if(!l&&n==null&&!Pu(c,ye()))return null;{const u=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Dt(g.path,e)||Dt(e,g.path))},f=k_(r.allWrites,u,e),p=n||ne.EMPTY_NODE;return hi(f,p)}}}function DS(r,e,n){let s=ne.EMPTY_NODE;const l=Nr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Fe,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=Xn(r.visibleWrites,e);return n.forEachChild(Fe,(u,f)=>{const p=hi(Xn(c,new Ee(u)),f);s=s.updateImmediateChild(u,p)}),Lm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=Xn(r.visibleWrites,e);return Lm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function LS(r,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=je(e,n);if(Pu(r.visibleWrites,c))return null;{const u=Xn(r.visibleWrites,c);return bu(u)?l.getChild(n):hi(u,l.getChild(n))}}function MS(r,e,n,s){const l=je(e,n),c=Nr(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=Xn(r.visibleWrites,l);return hi(u,s.getNode().getImmediateChild(n))}else return null}function jS(r,e){return Nr(r.visibleWrites,e)}function FS(r,e,n,s,l,c,u){let f;const p=Xn(r.visibleWrites,e),g=Nr(p,ye());if(g!=null)f=g;else if(n!=null)f=hi(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],w=u.getCompare(),v=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let k=v.getNext();for(;k&&y.length<l;)w(k,s)!==0&&y.push(k),k=v.getNext();return y}else return[]}function US(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function Pl(r,e,n,s){return N_(r.writeTree,r.treePath,e,n,s)}function gd(r,e){return DS(r.writeTree,r.treePath,e)}function Mm(r,e,n,s){return LS(r.writeTree,r.treePath,e,n,s)}function bl(r,e){return jS(r.writeTree,je(r.treePath,e))}function zS(r,e,n,s,l,c){return FS(r.writeTree,r.treePath,e,n,s,l,c)}function _d(r,e,n){return MS(r.writeTree,r.treePath,e,n)}function T_(r,e){return R_(je(r.treePath,e),r.writeTree)}function R_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class WS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Is(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,ui(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,l.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class VS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const P_=new VS;class yd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _d(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),c=zS(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
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
 */function BS(r){return{filter:r}}function HS(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function $S(r,e,n,s,l){const c=new WS;let u,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?u=Au(r,e,g.path,g.snap,s,l,c):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!de(g.path),u=Al(r,e,g.path,g.snap,s,l,f,c))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?u=KS(r,e,g.path,g.children,s,l,c):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Ou(r,e,g.path,g.children,s,l,f,c))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?u=YS(r,e,g.path,s,l,c):u=QS(r,e,g.path,g.affectedTree,s,l,c)}else if(n.type===Kt.LISTEN_COMPLETE)u=qS(r,e,n.path,s,c);else throw mi("Unknown operation type: "+n.type);const p=c.getChanges();return GS(e,u,p),{viewCache:u,changes:p}}function GS(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Rl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(C_(Rl(e)))}}function b_(r,e,n,s,l,c){const u=e.eventCache;if(bl(s,n)!=null)return e;{let f,p;if(de(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ir(e),y=g instanceof ne?g:ne.EMPTY_NODE,w=gd(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),w,c)}else{const g=Pl(s,Ir(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=ae(n);if(g===".priority"){U(er(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const w=Mm(s,n,y,p);w!=null?f=r.filter.updatePriority(y,w):f=u.getNode()}else{const y=Ne(n);let w;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const v=Mm(s,n,u.getNode(),p);v!=null?w=u.getNode().getImmediateChild(g).updateChild(y,v):w=u.getNode().getImmediateChild(g)}else w=_d(s,g,e.serverCache);w!=null?f=r.filter.updateChild(u.getNode(),g,w,y,l,c):f=u.getNode()}}return _s(e,f,u.isFullyInitialized()||de(n),r.filter.filtersNodes())}}function Al(r,e,n,s,l,c,u,f){const p=e.serverCache;let g;const y=u?r.filter:r.filter.getIndexedFilter();if(de(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),k,null)}else{const k=ae(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const R=Ne(n),P=p.getNode().getImmediateChild(k).updateChild(R,s);k===".priority"?g=y.updatePriority(p.getNode(),P):g=y.updateChild(p.getNode(),k,P,R,P_,null)}const w=S_(e,g,p.isFullyInitialized()||de(n),y.filtersNodes()),v=new yd(l,w,c);return b_(r,w,n,l,v,f)}function Au(r,e,n,s,l,c,u){const f=e.eventCache;let p,g;const y=new yd(l,e,c);if(de(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,u),p=_s(e,g,!0,r.filter.filtersNodes());else{const w=ae(n);if(w===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=_s(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=Ne(n),k=f.getNode().getImmediateChild(w);let R;if(de(v))R=s;else{const b=y.getCompleteChild(w);b!=null?ld(v)===".priority"&&b.getChild(m_(v)).isEmpty()?R=b:R=b.updateChild(v,s):R=ne.EMPTY_NODE}if(k.equals(R))p=e;else{const b=r.filter.updateChild(f.getNode(),w,R,v,y,u);p=_s(e,b,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function jm(r,e){return r.eventCache.isCompleteForChild(e)}function KS(r,e,n,s,l,c,u){let f=e;return s.foreach((p,g)=>{const y=je(n,p);jm(e,ae(y))&&(f=Au(r,f,y,g,l,c,u))}),s.foreach((p,g)=>{const y=je(n,p);jm(e,ae(y))||(f=Au(r,f,y,g,l,c,u))}),f}function Fm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ou(r,e,n,s,l,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;de(n)?g=s:g=new ke(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((w,v)=>{if(y.hasChild(w)){const k=e.serverCache.getNode().getImmediateChild(w),R=Fm(r,k,v);p=Al(r,p,new Ee(w),R,l,c,u,f)}}),g.children.inorderTraversal((w,v)=>{const k=!e.serverCache.isCompleteForChild(w)&&v.value===null;if(!y.hasChild(w)&&!k){const R=e.serverCache.getNode().getImmediateChild(w),b=Fm(r,R,v);p=Al(r,p,new Ee(w),b,l,c,u,f)}}),p}function QS(r,e,n,s,l,c,u){if(bl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(de(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Al(r,e,n,p.getNode().getChild(n),l,c,f,u);if(de(n)){let g=new ke(null);return p.getNode().forEachChild(oi,(y,w)=>{g=g.set(new Ee(y),w)}),Ou(r,e,n,g,l,c,f,u)}else return e}else{let g=new ke(null);return s.foreach((y,w)=>{const v=je(n,y);p.isCompleteForPath(v)&&(g=g.set(y,p.getNode().getChild(v)))}),Ou(r,e,n,g,l,c,f,u)}}function qS(r,e,n,s,l){const c=e.serverCache,u=S_(e,c.getNode(),c.isFullyInitialized()||de(n),c.isFiltered());return b_(r,u,n,s,P_,l)}function YS(r,e,n,s,l,c){let u;if(bl(s,n)!=null)return e;{const f=new yd(s,e,l),p=e.eventCache.getNode();let g;if(de(n)||ae(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Pl(s,Ir(e));else{const w=e.serverCache.getNode();U(w instanceof ne,"serverChildren would be complete if leaf node"),y=gd(s,w)}y=y,g=r.filter.updateFullNode(p,y,c)}else{const y=ae(n);let w=_d(s,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=p.getImmediateChild(y)),w!=null?g=r.filter.updateChild(p,y,w,Ne(n),f,c):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(p,y,ne.EMPTY_NODE,Ne(n),f,c):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Pl(s,Ir(e)),u.isLeafNode()&&(g=r.filter.updateFullNode(g,u,c)))}return u=e.serverCache.isFullyInitialized()||bl(s,ye())!=null,_s(e,g,u,r.filter.filtersNodes())}}/**
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
 */class XS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new dd(s.getIndex()),c=mS(s);this.processor_=BS(c);const u=n.serverCache,f=n.eventCache,p=l.updateFullNode(ne.EMPTY_NODE,u.getNode(),null),g=c.updateFullNode(ne.EMPTY_NODE,f.getNode(),null),y=new tr(p,u.isFullyInitialized(),l.filtersNodes()),w=new tr(g,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Bl(w,y),this.eventGenerator_=new CS(this.query_)}get query(){return this.query_}}function JS(r){return r.viewCache_.serverCache.getNode()}function ZS(r){return Rl(r.viewCache_)}function e1(r,e){const n=Ir(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Um(r){return r.eventRegistrations_.length===0}function t1(r,e){r.eventRegistrations_.push(e)}function zm(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,l);u&&s.push(u)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const u=r.eventRegistrations_[c];if(!u.matches(e))l.push(u);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Wm(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(U(Ir(r.viewCache_),"We should always have a full cache before handling merges"),U(Rl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=$S(r.processor_,l,e,n,s);return HS(r.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,A_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function n1(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(c,u)=>{s.push(ui(c,u))}),n.isFullyInitialized()&&s.push(C_(n.getNode())),A_(r,s,n.getNode(),e)}function A_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return ES(r.eventGenerator_,e,n,l)}/**
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
 */let Ol;class O_{constructor(){this.views=new Map}}function r1(r){U(!Ol,"__referenceConstructor has already been defined"),Ol=r}function i1(){return U(Ol,"Reference.ts has not been loaded"),Ol}function s1(r){return r.views.size===0}function vd(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return U(c!=null,"SyncTree gave us an op for an invalid query."),Wm(c,e,n,s)}else{let c=[];for(const u of r.views.values())c=c.concat(Wm(u,e,n,s));return c}}function D_(r,e,n,s,l){const c=e._queryIdentifier,u=r.views.get(c);if(!u){let f=Pl(n,l?s:null),p=!1;f?p=!0:s instanceof ne?(f=gd(n,s),p=!1):(f=ne.EMPTY_NODE,p=!1);const g=Bl(new tr(f,p,!1),new tr(s,l,!1));return new XS(e,g)}return u}function o1(r,e,n,s,l,c){const u=D_(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,u),t1(u,n),n1(u,n)}function l1(r,e,n,s){const l=e._queryIdentifier,c=[];let u=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())u=u.concat(zm(g,n,s)),Um(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||c.push(g.query));else{const p=r.views.get(l);p&&(u=u.concat(zm(p,n,s)),Um(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!nr(r)&&c.push(new(i1())(e._repo,e._path)),{removed:c,events:u}}function L_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jn(r,e){let n=null;for(const s of r.views.values())n=n||e1(s,e);return n}function M_(r,e){if(e._queryParams.loadsAllData())return $l(r);{const s=e._queryIdentifier;return r.views.get(s)}}function j_(r,e){return M_(r,e)!=null}function nr(r){return $l(r)!=null}function $l(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dl;function a1(r){U(!Dl,"__referenceConstructor has already been defined"),Dl=r}function c1(){return U(Dl,"Reference.ts has not been loaded"),Dl}let u1=1;class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=US(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function F_(r,e,n,s,l){return NS(r.pendingWriteTree_,e,n,s,l),l?xi(r,new Sr(fd(),e,n)):[]}function d1(r,e,n,s){TS(r.pendingWriteTree_,e,n,s);const l=ke.fromObject(n);return xi(r,new di(fd(),e,l))}function Gn(r,e,n=!1){const s=RS(r.pendingWriteTree_,e);if(PS(r.pendingWriteTree_,e)){let c=new ke(null);return s.snap!=null?c=c.set(ye(),!0):tt(s.children,u=>{c=c.set(new Ee(u),!0)}),xi(r,new Tl(s.path,c,n))}else return[]}function Ws(r,e,n){return xi(r,new Sr(pd(),e,n))}function h1(r,e,n){const s=ke.fromObject(n);return xi(r,new di(pd(),e,s))}function f1(r,e){return xi(r,new Ts(pd(),e))}function p1(r,e,n){const s=xd(r,n);if(s){const l=Cd(s),c=l.path,u=l.queryId,f=ut(c,e),p=new Ts(md(u),f);return Ed(r,c,p)}else return[]}function Ll(r,e,n,s,l=!1){const c=e._path,u=r.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||j_(u,e))){const p=l1(u,e,n,s);s1(u)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,w=r.syncPointTree_.findOnPath(c,(v,k)=>nr(k));if(y&&!w){const v=r.syncPointTree_.subtree(c);if(!v.isEmpty()){const k=_1(v);for(let R=0;R<k.length;++R){const b=k[R],P=b.query,z=V_(r,b);r.listenProvider_.startListening(vs(P),Rs(r,P),z.hashFn,z.onComplete)}}}!w&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(vs(e),null):g.forEach(v=>{const k=r.queryToTagMap.get(Gl(v));r.listenProvider_.stopListening(vs(v),k)}))}y1(r,g)}return f}function U_(r,e,n,s){const l=xd(r,s);if(l!=null){const c=Cd(l),u=c.path,f=c.queryId,p=ut(u,e),g=new Sr(md(f),p,n);return Ed(r,u,g)}else return[]}function m1(r,e,n,s){const l=xd(r,s);if(l){const c=Cd(l),u=c.path,f=c.queryId,p=ut(u,e),g=ke.fromObject(n),y=new di(md(f),p,g);return Ed(r,u,y)}else return[]}function Du(r,e,n,s=!1){const l=e._path;let c=null,u=!1;r.syncPointTree_.foreachOnPath(l,(v,k)=>{const R=ut(v,l);c=c||Jn(k,R),u=u||nr(k)});let f=r.syncPointTree_.get(l);f?(u=u||nr(f),c=c||Jn(f,ye())):(f=new O_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;c!=null?p=!0:(p=!1,c=ne.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((k,R)=>{const b=Jn(R,ye());b&&(c=c.updateImmediateChild(k,b))}));const g=j_(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=Gl(e);U(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const k=v1();r.queryToTagMap.set(v,k),r.tagToQueryMap.set(k,v)}const y=Hl(r.pendingWriteTree_,l);let w=o1(f,e,n,y,c,p);if(!g&&!u&&!s){const v=M_(f,e);w=w.concat(w1(r,e,v))}return w}function wd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(u,f)=>{const p=ut(u,e),g=Jn(f,p);if(g)return g});return N_(l,e,c,n,!0)}function g1(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,y)=>{const w=ut(g,n);s=s||Jn(y,w)});let l=r.syncPointTree_.get(n);l?s=s||Jn(l,ye()):(l=new O_,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=s!=null,u=c?new tr(s,!0,!1):null,f=Hl(r.pendingWriteTree_,e._path),p=D_(l,e,f,c?u.getNode():ne.EMPTY_NODE,c);return ZS(p)}function xi(r,e){return z_(e,r.syncPointTree_,null,Hl(r.pendingWriteTree_,ye()))}function z_(r,e,n,s){if(de(r.path))return W_(r,e,n,s);{const l=e.get(ye());n==null&&l!=null&&(n=Jn(l,ye()));let c=[];const u=ae(r.path),f=r.operationForChild(u),p=e.children.get(u);if(p&&f){const g=n?n.getImmediateChild(u):null,y=T_(s,u);c=c.concat(z_(f,p,g,y))}return l&&(c=c.concat(vd(l,r,s,n))),c}}function W_(r,e,n,s){const l=e.get(ye());n==null&&l!=null&&(n=Jn(l,ye()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,g=T_(s,u),y=r.operationForChild(u);y&&(c=c.concat(W_(y,f,p,g)))}),l&&(c=c.concat(vd(l,r,s,n))),c}function V_(r,e){const n=e.query,s=Rs(r,n);return{hashFn:()=>(JS(e)||ne.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?p1(r,n._path,s):f1(r,n._path);{const c=fE(l,n);return Ll(r,n,null,c)}}}}function Rs(r,e){const n=Gl(e);return r.queryToTagMap.get(n)}function Gl(r){return r._path.toString()+"$"+r._queryIdentifier}function xd(r,e){return r.tagToQueryMap.get(e)}function Cd(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ee(r.substr(0,e))}}function Ed(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=Hl(r.pendingWriteTree_,e);return vd(s,n,l,null)}function _1(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[$l(n)];{let l=[];return n&&(l=L_(n)),tt(s,(c,u)=>{l=l.concat(u)}),l}})}function vs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(c1())(r._repo,r._path):r}function y1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Gl(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function v1(){return u1++}function w1(r,e,n){const s=e._path,l=Rs(r,e),c=V_(r,n),u=r.listenProvider_.startListening(vs(e),l,c.hashFn,c.onComplete),f=r.syncPointTree_.subtree(s);if(l)U(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,w)=>{if(!de(g)&&y&&nr(y))return[$l(y).query];{let v=[];return y&&(v=v.concat(L_(y).map(k=>k.query))),tt(w,(k,R)=>{v=v.concat(R)}),v}});for(let g=0;g<p.length;++g){const y=p[g];r.listenProvider_.stopListening(vs(y),Rs(r,y))}}return u}/**
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
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new Id(this.syncTree_,n)}node(){return wd(this.syncTree_,this.path_)}}const x1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Bm=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return C1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return E1(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},C1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},E1=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const u=l.getValue();return typeof u!="number"?s:u+s},B_=function(r,e,n,s){return kd(e,new Id(n,r),s)},H_=function(r,e,n){return kd(r,new Sd(e),n)};function kd(r,e,n){const s=r.getPriority().val(),l=Bm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const u=r,f=Bm(u.getValue(),e,n);return f!==u.getValue()||l!==u.getPriority().val()?new Ye(f,$e(l)):r}else{const u=r;return c=u,l!==u.getPriority().val()&&(c=c.updatePriority(new Ye(l))),u.forEachChild(Fe,(f,p)=>{const g=kd(p,e.getImmediateChild(f),n);g!==p&&(c=c.updateImmediateChild(f,g))}),c}}/**
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
 */class Nd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Td(r,e){let n=e instanceof Ee?e:new Ee(e),s=r,l=ae(n);for(;l!==null;){const c=li(s.node.children,l)||{children:{},childCount:0};s=new Nd(l,s,c),n=Ne(n),l=ae(n)}return s}function Ci(r){return r.node.value}function $_(r,e){r.node.value=e,Lu(r)}function G_(r){return r.node.childCount>0}function S1(r){return Ci(r)===void 0&&!G_(r)}function Kl(r,e){tt(r.node.children,(n,s)=>{e(new Nd(n,r,s))})}function K_(r,e,n,s){n&&e(r),Kl(r,l=>{K_(l,e,!0)})}function I1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vs(r){return new Ee(r.parent===null?r.name:Vs(r.parent)+"/"+r.name)}function Lu(r){r.parent!==null&&k1(r.parent,r.name,r)}function k1(r,e,n){const s=S1(n),l=rn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Lu(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Lu(r))}/**
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
 */const N1=/[\[\].#$\/\u0000-\u001F\u007F]/,T1=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Rd=function(r){return typeof r=="string"&&r.length!==0&&!N1.test(r)},Q_=function(r){return typeof r=="string"&&r.length!==0&&!T1.test(r)},R1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Q_(r)},P1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!nd(r)||r&&typeof r=="object"&&rn(r,".sv")},b1=function(r,e,n,s){Ql(Ml(r,"value"),e,n)},Ql=function(r,e,n){const s=n instanceof Ee?new KE(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(r+"contains a function "+yr(s)+" with contents = "+e.toString());if(nd(e))throw new Error(r+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>du/3&&jl(e)>du)throw new Error(r+"contains a string greater than "+du+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(tt(e,(u,f)=>{if(u===".value")l=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!Rd(u)))throw new Error(r+" contains an invalid key ("+u+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QE(s,u),Ql(r,f,s),qE(s)}),l&&c)throw new Error(r+' contains ".value" child '+yr(s)+" in addition to actual children.")}},A1=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=Ss(s);for(let u=0;u<c.length;u++)if(!(c[u]===".priority"&&u===c.length-1)){if(!Rd(c[u]))throw new Error(r+"contains an invalid key ("+c[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(GE);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Dt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},O1=function(r,e,n,s){const l=Ml(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];tt(e,(u,f)=>{const p=new Ee(u);if(Ql(l,f,je(n,p)),ld(p)===".priority"&&!P1(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(p)}),A1(l,c)},q_=function(r,e,n,s){if(!Q_(n))throw new Error(Ml(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),q_(r,e,n)},Y_=function(r,e){if(ae(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},L1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!R1(n))throw new Error(Ml(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class M1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!ad(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function X_(r,e,n){ql(r,n),J_(r,s=>ad(s,e))}function Lt(r,e,n){ql(r,n),J_(r,s=>Dt(s,e)||Dt(e,s))}function J_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(j1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function j1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ms&&et("event: "+n.toString()),wi(s)}}}/**
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
 */const F1="repo_interrupt",U1=25;class z1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new Nd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W1(r,e,n){if(r.stats_=sd(r.repoInfo_),r.forceRestClient_||_E())r.server_=new kl(r.repoInfo_,(s,l,c,u)=>{Hm(r,s,l,c,u)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>$m(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new gn(r.repoInfo_,e,(s,l,c,u)=>{Hm(r,s,l,c,u)},s=>{$m(r,s)},s=>{B1(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=CE(r.repoInfo_,()=>new xS(r.stats_,r.server_)),r.infoData_=new gS,r.infoSyncTree_=new Vm({startListening:(s,l,c,u)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Ws(r.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Pd(r,"connected",!1),r.serverSyncTree_=new Vm({startListening:(s,l,c,u)=>(r.server_.listen(s,c,l,(f,p)=>{const g=u(f,p);Lt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function V1(r){const n=r.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(r){return x1({timestamp:V1(r)})}function Hm(r,e,n,s,l){r.dataUpdateCount++;const c=new Ee(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let u=[];if(l)if(s){const p=ml(n,g=>$e(g));u=m1(r.serverSyncTree_,c,p,l)}else{const p=$e(n);u=U_(r.serverSyncTree_,c,p,l)}else if(s){const p=ml(n,g=>$e(g));u=h1(r.serverSyncTree_,c,p)}else{const p=$e(n);u=Ws(r.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=fi(r,c)),Lt(r.eventQueue_,f,u)}function $m(r,e){Pd(r,"connected",e),e===!1&&K1(r)}function B1(r,e){tt(e,(n,s)=>{Pd(r,n,s)})}function Pd(r,e,n){const s=new Ee("/.info/"+e),l=$e(n);r.infoData_.updateSnapshot(s,l);const c=Ws(r.infoSyncTree_,s,l);Lt(r.eventQueue_,s,c)}function bd(r){return r.nextWriteId_++}function H1(r,e,n){const s=g1(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=$e(l).withIndex(e._queryParams.getIndex());Du(r.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=Ws(r.serverSyncTree_,e._path,c);else{const f=Rs(r.serverSyncTree_,e);u=U_(r.serverSyncTree_,e._path,c,f)}return Lt(r.eventQueue_,e._path,u),Ll(r.serverSyncTree_,e,n,null,!0),c},l=>(Bs(r,"get for query "+Ge(e)+" failed: "+l),Promise.reject(new Error(l))))}function $1(r,e,n,s,l){Bs(r,"set",{path:e.toString(),value:n,priority:s});const c=Yl(r),u=$e(n,s),f=wd(r.serverSyncTree_,e),p=H_(u,f,c),g=bd(r),y=F_(r.serverSyncTree_,e,p,g,!0);ql(r.eventQueue_,y),r.server_.put(e.toString(),u.val(!0),(v,k)=>{const R=v==="ok";R||dt("set at "+e+" failed: "+v);const b=Gn(r.serverSyncTree_,g,!R);Lt(r.eventQueue_,e,b),Mu(r,l,v,k)});const w=Od(r,e);fi(r,w),Lt(r.eventQueue_,w,[])}function G1(r,e,n,s){Bs(r,"update",{path:e.toString(),value:n});let l=!0;const c=Yl(r),u={};if(tt(n,(f,p)=>{l=!1,u[f]=B_(je(e,f),$e(p),r.serverSyncTree_,c)}),l)et("update() called with empty data.  Don't do anything."),Mu(r,s,"ok",void 0);else{const f=bd(r),p=d1(r.serverSyncTree_,e,u,f);ql(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,y)=>{const w=g==="ok";w||dt("update at "+e+" failed: "+g);const v=Gn(r.serverSyncTree_,f,!w),k=v.length>0?fi(r,e):e;Lt(r.eventQueue_,k,v),Mu(r,s,g,y)}),tt(n,g=>{const y=Od(r,je(e,g));fi(r,y)}),Lt(r.eventQueue_,e,[])}}function K1(r){Bs(r,"onDisconnectEvents");const e=Yl(r),n=Nl();Tu(r.onDisconnect_,ye(),(l,c)=>{const u=B_(l,c,r.serverSyncTree_,e);E_(n,l,u)});let s=[];Tu(n,ye(),(l,c)=>{s=s.concat(Ws(r.serverSyncTree_,l,c));const u=Od(r,l);fi(r,u)}),r.onDisconnect_=Nl(),Lt(r.eventQueue_,ye(),s)}function Q1(r,e,n){let s;ae(e._path)===".info"?s=Du(r.infoSyncTree_,e,n):s=Du(r.serverSyncTree_,e,n),X_(r.eventQueue_,e._path,s)}function Z_(r,e,n){let s;ae(e._path)===".info"?s=Ll(r.infoSyncTree_,e,n):s=Ll(r.serverSyncTree_,e,n),X_(r.eventQueue_,e._path,s)}function q1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(F1)}function Bs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),et(n,...e)}function Mu(r,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const u=new Error(c);u.code=l,e(u)}})}function ey(r,e,n){return wd(r.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Ad(r,e=r.transactionQueueTree_){if(e||Xl(r,e),Ci(e)){const n=ny(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&Y1(r,Vs(e),n)}else G_(e)&&Kl(e,n=>{Ad(r,n)})}function Y1(r,e,n){const s=n.map(g=>g.currentWriteId),l=ey(r,e,s);let c=l;const u=l.hash();for(let g=0;g<n.length;g++){const y=n[g];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=ut(e,y.path);c=c.updateChild(w,y.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Bs(r,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const w=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(Gn(r.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&w.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Xl(r,Td(r.transactionQueueTree_,e)),Ad(r,r.transactionQueueTree_),Lt(r.eventQueue_,e,y);for(let v=0;v<w.length;v++)wi(w[v])}else{if(g==="datastale")for(let w=0;w<n.length;w++)n[w].status===3?n[w].status=4:n[w].status=0;else{dt("transaction at "+p.toString()+" failed: "+g);for(let w=0;w<n.length;w++)n[w].status=4,n[w].abortReason=g}fi(r,e)}},u)}function fi(r,e){const n=ty(r,e),s=Vs(n),l=ny(r,n);return X1(r,l,s),s}function X1(r,e,n){if(e.length===0)return;const s=[];let l=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=ut(n,p.path);let y=!1,w;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,w=p.abortReason,l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=U1)y=!0,w="maxretry",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else{const v=ey(r,p.path,u);p.currentInputSnapshot=v;const k=e[f].update(v.val());if(k!==void 0){Ql("transaction failed: Data returned ",k,p.path);let R=$e(k);typeof k=="object"&&k!=null&&rn(k,".priority")||(R=R.updatePriority(v.getPriority()));const P=p.currentWriteId,z=Yl(r),W=H_(R,v,z);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=W,p.currentWriteId=bd(r),u.splice(u.indexOf(P),1),l=l.concat(F_(r.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),l=l.concat(Gn(r.serverSyncTree_,P,!0))}else y=!0,w="nodata",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0))}Lt(r.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(w==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(w),!1,null))))}Xl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);Ad(r,r.transactionQueueTree_)}function ty(r,e){let n,s=r.transactionQueueTree_;for(n=ae(e);n!==null&&Ci(s)===void 0;)s=Td(s,n),e=Ne(e),n=ae(e);return s}function ny(r,e){const n=[];return ry(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ry(r,e,n){const s=Ci(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Kl(e,l=>{ry(r,l,n)})}function Xl(r,e){const n=Ci(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,$_(e,n.length>0?n:void 0)}Kl(e,s=>{Xl(r,s)})}function Od(r,e){const n=Vs(ty(r,e)),s=Td(r.transactionQueueTree_,e);return I1(s,l=>{hu(r,l)}),hu(r,s),K_(s,l=>{hu(r,l)}),n}function hu(r,e){const n=Ci(e);if(n){const s=[];let l=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(U(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(U(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),l=l.concat(Gn(r.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?$_(e,void 0):n.length=c+1,Lt(r.eventQueue_,Vs(e),l);for(let u=0;u<s.length;u++)wi(s[u])}}/**
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
 */function J1(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Z1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Gm=function(r,e){const n=eI(r),s=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new o_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},eI=function(r){let e="",n="",s="",l="",c="",u=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let w=r.indexOf("?");w===-1&&(w=r.length),e=r.substring(0,Math.min(y,w)),y<w&&(l=J1(r.substring(y,w)));const v=Z1(r.substring(Math.min(r.length,w)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const k=e.slice(0,g);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),c=s}"ns"in v&&(c=v.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:l,namespace:c}};/**
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
 */class tI{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class nI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class iy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return de(this._path)?null:ld(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Am(this._queryParams),n=rd(e);return n==="{}"?"default":n}get _queryObject(){return Am(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof Dd))return!1;const n=this._repo===e._repo,s=ad(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+$E(this._path)}}class xn extends Dd{constructor(e,n){super(e,n,new hd,!1)}get parent(){const e=m_(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),s=ju(this.ref,e);return new Ps(this._node.getChild(n),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ps(l,ju(this.ref,s),Fe)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ot(r,e){return r=Ct(r),r._checkNotDeleted("ref"),e!==void 0?ju(r._root,e):r._root}function ju(r,e){return r=Ct(r),ae(r._path)===null?D1("child","path",e):q_("child","path",e),new xn(r._repo,je(r._path,e))}function rI(r){return Y_("remove",r._path),Jl(r,null)}function Jl(r,e){r=Ct(r),Y_("set",r._path),b1("set",e,r._path);const n=new Os;return $1(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function pi(r,e){O1("update",e,r._path);const n=new Os;return G1(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function bs(r){r=Ct(r);const e=new iy(()=>{}),n=new Zl(e);return H1(r._repo,r,n).then(s=>new Ps(s,new xn(r._repo,r._path),r._queryParams.getIndex()))}class Zl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new tI("value",this,new Ps(e.snapshotNode,new xn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nI(this,e,n):null}matches(e){return e instanceof Zl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function iI(r,e,n,s,l){const c=new iy(n,void 0),u=new Zl(c);return Q1(r._repo,r,u),()=>Z_(r._repo,r,u)}function sI(r,e,n,s){return iI(r,"value",e)}function oI(r,e,n){Z_(r._repo,r,null)}r1(xn);a1(xn);/**
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
 */const lI="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let aI=!1;function cI(r,e,n,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),u=gi(c);r.repoInfo_=new o_(e,u,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function uI(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let u=Gm(c,l),f=u.repoInfo,p;typeof process<"u"&&pm&&(p=pm[lI]),p?(c=`http://${p}?ns=${f.namespace}`,u=Gm(c,l),f=u.repoInfo):u.repoInfo.secure;const g=new vE(r.name,r.options,e);L1("Invalid Firebase Database URL",u),de(u.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=hI(f,r,g,new yE(r,n));return new fI(y,r)}function dI(r,e){const n=Fu[e];(!n||n[r.key]!==r)&&wn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),q1(r),delete n[r.key]}function hI(r,e,n,s){let l=Fu[e.name];l||(l={},Fu[e.name]=l);let c=l[r.toURLString()];return c&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new z1(r,aI,n,s),l[r.toURLString()]=c,c}class fI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function pI(r=hg(),e){const n=Ku(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=I0("database");s&&mI(n,...s)}return n}function mI(r,e,n,s={}){r=Ct(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&wr(s,c.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new dl(dl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:k0(s.mockUserToken,r.app.options.projectId);u=new dl(f)}gi(e)&&(sg(e),og("Database",!0)),cI(c,l,s,u)}/**
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
 */function gI(r){nE(yi),ai(new xr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return uI(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),qn(mm,gm,r),qn(mm,gm,"esm2020")}gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};gI();const _I={apiKey:"AIzaSyCLgGnXhXRn6yubVy5yQ9WUtle8LDckX8",authDomain:"sekimeki-3c6d9.firebaseapp.com",databaseURL:"https://sekimeki-3c6d9-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"sekimeki-3c6d9",storageBucket:"sekimeki-3c6d9.firebasestorage.app",messagingSenderId:"269784219722",appId:"1:269784219722:web:fd1ecbae99bd3da98526b3"},sy=dg(_I),fu=eE(sy),lt=pI(sy);let oy=null;function yI(){return new Promise((r,e)=>{zx(fu,Zu).then(()=>{Bx(fu,n=>{n&&(oy=n.uid,r(n.uid))}),Mx(fu).catch(e)}).catch(e)})}function ea(){return oy??""}function Km(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<4;n++)e+=r[Math.floor(Math.random()*r.length)];return e}async function vI(r,e,n){const s=ea();let l=Km(),c=await bs(ot(lt,`rooms/${l}`)),u=0;for(;c.exists()&&u<10;)l=Km(),c=await bs(ot(lt,`rooms/${l}`)),u++;return await Jl(ot(lt,`rooms/${l}/config`),{mode:r,layout:e,adminId:s,adminPassword:n,state:"waiting",createdAt:Date.now()}),l}async function wI(r,e){const n=await bs(ot(lt,`rooms/${r}/config`));return n.exists()?n.val().adminPassword===e:!1}async function ly(r){return(await bs(ot(lt,`rooms/${r}/config`))).exists()}async function Qm(r){const e=await bs(ot(lt,`rooms/${r}/config`));return e.exists()?e.val():null}async function xI(r,e){const n=ea();return await Jl(ot(lt,`rooms/${r}/participants/${n}`),{name:e.name,gender:e.gender??null,avatar:e.avatar,answers:null,completed:!1}),n}async function CI(r){const e=ea();await rI(ot(lt,`rooms/${r}/participants/${e}`))}async function EI(r,e){const n=ea();await pi(ot(lt,`rooms/${r}/participants/${n}`),{answers:e,completed:!0})}async function SI(r,e,n,s,l){const c={};for(const p of e){const g=[p.id1,p.id2].sort().join("_");c[g]={...p,visible:!0}}const u={};n.forEach((p,g)=>{u[String(g)]=p});const f={};s.forEach((p,g)=>{f[String(g)]=p}),await Jl(ot(lt,`rooms/${r}/results`),{compatibility:c,seatAssignments:u,awards:f,revealed:!1,participantTypes:l}),await pi(ot(lt,`rooms/${r}/config`),{state:"admin-review"})}async function II(r,e,n){await pi(ot(lt,`rooms/${r}/results/compatibility/${e}`),{visible:n})}async function kI(r){await pi(ot(lt,`rooms/${r}/results`),{revealed:!0}),await pi(ot(lt,`rooms/${r}/config`),{state:"results"})}async function NI(r,e,n){const s={};e.forEach((c,u)=>{s[String(u)]=c});const l={};n.forEach((c,u)=>{l[String(u)]=c}),await pi(ot(lt,`rooms/${r}/results`),{seatAssignments:s,awards:l})}function TI(r,e){const n=ot(lt,`rooms/${r}`);return sI(n,s=>{e(s.val())}),()=>oI(n)}function RI(){var W,M,j,J,se;const[r,e]=Y.useState(""),[n,s]=Y.useState(null),[l,c]=Y.useState(null),[u,f]=Y.useState(!1);Y.useEffect(()=>{yI().then(V=>{e(V),f(!0)})},[]),Y.useEffect(()=>{if(!n){c(null);return}return TI(n,X=>{c(X)})},[n]);const p=l&&r?l.config.adminId===r?"admin":"participant":null,g=((W=l==null?void 0:l.results)==null?void 0:W.participantTypes)??{},y=l!=null&&l.participants?Object.entries(l.participants).map(([V,X])=>{var he,fe,xe;return{id:V,name:X.name,gender:X.gender,avatar:X.avatar,answers:X.answers??[],completed:X.completed,vector:((he=g[V])==null?void 0:he.vector)??X.vector,personalType:((fe=g[V])==null?void 0:fe.personalType)??X.personalType,personalTypeEmoji:((xe=g[V])==null?void 0:xe.personalTypeEmoji)??X.personalTypeEmoji}}):[],w=y.find(V=>V.id===r)??null,v=(M=l==null?void 0:l.results)!=null&&M.compatibility?Object.values(l.results.compatibility):[],k=v.filter(V=>V.visible!==!1),R=(j=l==null?void 0:l.results)!=null&&j.seatAssignments?Object.values(l.results.seatAssignments):[],b=(J=l==null?void 0:l.results)!=null&&J.awards?Object.values(l.results.awards):[],P=((se=l==null?void 0:l.results)==null?void 0:se.revealed)??!1,z=y.length>0&&y.every(V=>V.completed);return{uid:r,roomCode:n,roomData:l,role:p,participants:y,myParticipant:w,compatibilityResults:v,visibleResults:k,seatAssignments:R,awards:b,revealed:P,allCompleted:z,isReady:u,setRoomCode:s}}const PI={S:{E:"魂のパリピ同盟",C:"以心伝心のふたり",V:"運命の冒険パートナー",L:"恋のシンクロ率MAX",H:"爆笑ソウルメイト"},A:{E:"ノリが合う飲み仲間",C:"会話キャッチボール名人",V:"趣味トーク無限ループ",L:"じわじわ来る恋の予感",H:"ツボが近い笑い仲間"},B:{E:"新しい扉を開く関係",C:"未知の言語を学ぶ感覚",V:"お互い新世界への案内人",L:"押し引きのスリルあり",H:"笑いの化学反応待ち"},C:{E:"テンションの異文化交流",C:"沈黙すら味になる関係",V:"真逆だからこそ面白い",L:"恋の迷路を楽しんで",H:"笑いの新大陸を発見せよ"}};function bI(r){return r>=85?"S":r>=70?"A":r>=55?"B":"C"}const AI=[{condition:r=>r[0]>=4&&r[2]>=4,emoji:"🌪️",name:"お祭りハリケーン"},{condition:r=>r[0]<=2&&r[4]>=4,emoji:"🎯",name:"スナイパー芸人"},{condition:r=>r[1]>=4&&r[3]>=4,emoji:"🦁",name:"恋のライオン"},{condition:r=>r[1]<=2&&r[2]<=2,emoji:"🐱",name:"癒しの守護猫"},{condition:r=>r[0]>=4&&r[4]>=4,emoji:"🎉",name:"パーティーモンスター"},{condition:r=>r[0]>=4&&r[3]>=4,emoji:"💘",name:"情熱のストライカー"},{condition:r=>r[2]>=4&&r[4]>=4,emoji:"🎪",name:"アドベンチャーコメディアン"},{condition:r=>r[0]<=2&&r[2]<=2,emoji:"🏠",name:"おうちの守り神"},{condition:r=>r[1]>=4&&r[4]>=4,emoji:"🎤",name:"トークの魔術師"},{condition:r=>r[3]<=2&&r[1]<=2,emoji:"🌙",name:"ミステリアスな月"},{condition:r=>r[0]>=4&&r[1]>=4,emoji:"☀️",name:"太陽系リーダー"},{condition:r=>r[3]>=4&&r[2]>=4,emoji:"🚀",name:"恋のロケットランチャー"},{condition:r=>r[0]<=2&&r[3]<=2,emoji:"🍵",name:"まったり茶道マスター"},{condition:r=>r[2]<=2&&r[4]<=2,emoji:"📚",name:"哲学者の休日"},{condition:r=>r[1]<=2&&r[4]>=4,emoji:"🎭",name:"ギャップの天才"},{condition:r=>{const e=r.reduce((n,s)=>n+s,0)/5;return r.every(n=>Math.abs(n-e)<1)},emoji:"🌈",name:"万能カメレオン"}];function OI(r){for(const e of AI)if(e.condition(r))return{emoji:e.emoji,name:e.name};return{emoji:"🌈",name:"万能カメレオン"}}const pu={E:{common:["2人とも行きたい「最高の金曜夜プラン」を3秒で答えて！","理想の飲み会メンバー、有名人3人だけ呼べるなら？","一緒に行くならフェス？それとも秘境温泉？"],diff:["お互いの「理想の金曜夜」をプレゼンしてみて！","インドア派 vs アウトドア派、1分ディベート開始！","相手の趣味を1つ体験するなら何にする？"]},C:{common:["最近あった「聞いてほしい話」を30秒で！","2人で一番盛り上がれる話題は何だと思う？","お互いの第一印象、正直に言い合おう！"],diff:["じゃあ今から1分間、いつもと逆の会話スタイルで話してみよう！","「相手に聞いてみたかったこと」を3つ！","2人の会話スタイルが合体したら最強説、検証！"]},V:{common:["次の3連休、予定なかったらどこ行く？3秒で！","2人で旅行に行くならどの国？","「これだけはやってみたいこと」を1つずつ！"],diff:["相手の価値観で1日過ごすなら何する？","お互いの「譲れないこだわり」を発表！","もし2人で24時間お出かけするなら、プランどう立てる？"]},L:{common:["理想のデートプラン、相手に聞かずに考えて同時に発表！","「こんなサプライズされたらキュンとする」を告白！","恋愛映画でどのシーンに一番グッとくる？"],diff:["もし2人でドラマに出るなら、どんなジャンル？","お互いの恋愛の距離感を料理で例えると？","「この人いいな」と思う瞬間を3秒で！"]},H:{common:["今まで一番笑った出来事は？","一緒に見るなら何のお笑い番組？","相手をお笑い芸人に例えると誰？"],diff:["お互いの笑いのツボを探る質問タイム！","1分間で相手を笑わせるチャレンジ！","「この人面白いな」と思った瞬間を再現！"]}},Uu=[{id:1,axis:"E",text:"金曜の夜、理想の過ごし方は？",leftLabel:"少人数でゆったりバー",rightLabel:"大人数でワイワイ飲み会"},{id:2,axis:"E",text:"旅行先で盛り上がるのは？",leftLabel:"隠れ家カフェ巡り",rightLabel:"有名スポットで写真撮りまくり"},{id:3,axis:"C",text:"初対面の人との会話スタイルは？",leftLabel:"相手の話をじっくり聞く",rightLabel:"自分から話題をどんどん振る"},{id:4,axis:"C",text:"友達の悩み相談、あなたの対応は？",leftLabel:"まず気持ちに寄り添う",rightLabel:"一緒に解決策を考える"},{id:5,axis:"V",text:"理想の休日は？",leftLabel:"おうちでまったり",rightLabel:"外に出てアクティブに"},{id:6,axis:"V",text:"旅行のスタイルは？",leftLabel:"計画をしっかり立てる",rightLabel:"ノープランで行き当たりばったり"},{id:7,axis:"L",text:"気になる人へのアプローチは？",leftLabel:"じっくり友達から",rightLabel:"すぐに距離を詰める"},{id:8,axis:"L",text:"デートに誘うなら？",leftLabel:"自然な流れを待つ",rightLabel:"ストレートに誘う"},{id:9,axis:"H",text:"笑いのツボに近いのは？",leftLabel:"じわじわ来る知的なウィット",rightLabel:"勢いとテンションで爆笑"},{id:10,axis:"H",text:"飲み会での立ち位置は？",leftLabel:"絶妙なタイミングで一言",rightLabel:"場を仕切るMC役"}],zu={E:.25,C:.2,V:.2,L:.2,H:.15},DI=["E","V","H"],LI=["C","L"],MI=1.5,jI=1.2;function FI(r){return["E","C","V","L","H"].map(n=>{const c=Uu.filter(u=>u.axis===n).map(u=>u.id-1).map(u=>r[u]??3);return c.reduce((u,f)=>u+f,0)/c.length})}function UI(r,e){return 1-Math.abs(r-e)/4}function zI(r,e){const n=Math.abs(r-e);return Math.exp(-((n-MI)**2)/(2*jI**2))}function WI(r,e){const n=["E","C","V","L","H"],s={};return n.forEach((l,c)=>{DI.includes(l)?s[l]=UI(r[c],e[c]):LI.includes(l)&&(s[l]=zI(r[c],e[c]))}),s}function VI(r){let e=0;for(const n of Object.keys(zu))e+=zu[n]*r[n];return e}function BI(r){return Math.round(40+r*55)}function HI(r){const e=["E","C","V","L","H"];let n=-1,s="E";for(const l of e){const c=zu[l]*r[l];c>n&&(n=c,s=l)}return s}function $I(r,e){var s;const n=bI(r);return((s=PI[n])==null?void 0:s[e])??"未知の化学反応"}function GI(r){const e=[];for(let n=0;n<r.length;n++)for(let s=n+1;s<r.length;s++){const l=r[n],c=r[s];if(!l.vector||!c.vector)continue;const u=WI(l.vector,c.vector),f=VI(u),p=BI(f),g=HI(u),y=$I(p,g);e.push({id1:l.id,id2:c.id,axisScores:u,rawScore:f,displayScore:p,typeName:y,topAxis:g})}return e}function Hs(r,e,n){return r.find(s=>s.id1===e&&s.id2===n||s.id1===n&&s.id2===e)}function Ld(r,e){const n=Array.from({length:e},()=>Array(e).fill(0));switch(r){case"facing-long":case"facing-short":{const s=Math.ceil(e/2);for(let l=0;l<s;l++){for(let c=s;c<e;c++){const u=l,f=c-s,p=Math.abs(u-f);p===0?n[l][c]=n[c][l]=1:p===1&&(n[l][c]=n[c][l]=.5)}l+1<s&&(n[l][l+1]=n[l+1][l]=.3)}for(let l=s;l<e-1;l++)n[l][l+1]=n[l+1][l]=.3;break}case"round":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.min(Math.abs(s-l),e-Math.abs(s-l));c===1?n[s][l]=n[l][s]=1:c===2?n[s][l]=n[l][s]=.4:c===Math.floor(e/2)?n[s][l]=n[l][s]=.3:c===3&&(n[s][l]=n[l][s]=.1)}break}case"counter":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.2)}break}case"alternate":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=s<Math.ceil(e/2)?0:1,u=l<Math.ceil(e/2)?0:1,f=c===0?s:s-Math.ceil(e/2),p=u===0?l:l-Math.ceil(e/2);if(c!==u){const g=Math.abs(f-p);g===0?n[s][l]=n[l][s]=1:g===1&&(n[s][l]=n[l][s]=.5)}else Math.abs(f-p)===1&&(n[s][l]=n[l][s]=.3)}break}case"l-shape":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.3)}break}}return n}function KI(r,e,n,s){if(s==="free")return n;const l=r.gender!==e.gender;return n*(l?1:.2)}function As(r,e,n,s,l){let c=0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){const p=Hs(n,e[u].id,e[f].id);if(!p)continue;const g=s[r[u]][r[f]],y=KI(e[u],e[f],g,l);c+=p.rawScore*y}return c}function QI(r,e,n,s,l){let c=1/0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){if(l==="goukon"&&e[u].gender===e[f].gender||s[r[u]][r[f]]<.5)continue;const p=Hs(n,e[u].id,e[f].id);p&&p.rawScore<c&&(c=p.rawScore)}return c===1/0?0:c}function ay(r){if(r.length<=1)return[r];const e=[];for(let n=0;n<r.length;n++){const s=[...r.slice(0,n),...r.slice(n+1)];for(const l of ay(s))e.push([r[n],...l])}return e}function qI(r,e,n,s){const l=r.length,c=Array.from({length:l},(v,k)=>k),u=ay(c);let f=-1/0,p=-1/0,g=c;const y=.95;let w=-1/0;for(const v of u){const k=As(v,r,e,n,s);k>w&&(w=k)}for(const v of u){const k=As(v,r,e,n,s);if(k>=w*y){const R=QI(v,r,e,n,s);(R>p||R===p&&k>f)&&(p=R,f=k,g=[...v])}}return g}function YI(r,e,n,s){const l=r.length;let c=Array.from({length:l},(k,R)=>R);for(let k=l-1;k>0;k--){const R=Math.floor(Math.random()*(k+1));[c[k],c[R]]=[c[R],c[k]]}let u=As(c,r,e,n,s),f=[...c],p=u;const g=100,y=.995,w=.01,v=1e4;for(let k=0;k<3;k++){let R=g,b=0;for(;R>w&&b<v;){const P=Math.floor(Math.random()*l);let z=Math.floor(Math.random()*(l-1));z>=P&&z++;const W=[...c];[W[P],W[z]]=[W[z],W[P]];const M=As(W,r,e,n,s),j=M-u;(j>0||Math.random()<Math.exp(j/R))&&(c=W,u=M,u>p&&(f=[...c],p=u)),R*=y,b++}}return f}function hl(r,e,n,s){const l=r.length;if(l<=1)return r.map((f,p)=>({participantId:f.id,seatIndex:p}));const c=Ld(n,l),u=l<=10?qI(r,e,c,s):YI(r,e,c,s);return r.map((f,p)=>({participantId:f.id,seatIndex:u[p]}))}function XI(r,e,n,s,l,c){if(l<=1)return hl(r,e,n,s);const u=r.length,f=Ld(n,u);if(l===2){let g=c,y=-1/0;for(let w=0;w<u;w++)for(let v=w+1;v<u;v++){if(s==="goukon"&&r[w].gender!==r[v].gender)continue;const k=[...c],R=k[w].seatIndex;k[w]={...k[w],seatIndex:k[v].seatIndex},k[v]={...k[v],seatIndex:R};const b=k.map(z=>z.seatIndex),P=As(b,r,e,f,s);P>y&&(y=P,g=k)}return g}if(l===3)return hl(r,e,n,s);const p=hl(r,e,n,s);for(let g=u-1;g>0;g--)if(Math.random()<.5){const y=Math.floor(Math.random()*(g+1)),w=p[g].seatIndex;p[g]={...p[g],seatIndex:p[y].seatIndex},p[y]={...p[y],seatIndex:w}}return p}function cy(r,e,n=.5){const s=Ld(e,r),l=[];for(let c=0;c<r;c++)for(let u=c+1;u<r;u++)s[c][u]>=n&&l.push([c,u]);return l}function qm(r,e,n,s="counter"){const l=[],c=cy(r.length,s),u=[],f={};for(const j of n){const J=r.find(se=>se.id===j.participantId);J&&(f[j.seatIndex]=J)}for(const[j,J]of c){const se=f[j],V=f[J];if(!se||!V)continue;const X=Hs(e,se.id,V.id);X&&u.push([se,V,X])}const p=e.map(j=>({p1:r.find(J=>J.id===j.id1),p2:r.find(J=>J.id===j.id2),result:j}));if(u.length>0){const j=u.reduce((J,se)=>J[2].displayScore>=se[2].displayScore?J:se);l.push({emoji:"👑",title:"ベストマッチ賞",description:`最高の席順相性！${j[2].displayScore}点`,targetIds:[j[0].id,j[1].id]})}const g=p.find(j=>j.result.displayScore>=90);g&&l.push({emoji:"🔥",title:"運命の出会い賞",description:`相性${g.result.displayScore}点の奇跡！`,targetIds:[g.p1.id,g.p2.id]});let y=-1,w=null;for(const j of p){const J=Object.values(j.result.axisScores),se=J.reduce((X,he)=>X+he,0)/J.length,V=J.reduce((X,he)=>X+(he-se)**2,0)/J.length;V>y&&(y=V,w=j)}w&&l.push({emoji:"🌀",title:"カオスコンビ賞",description:"予測不能な化学反応！",targetIds:[w.p1.id,w.p2.id]});let v=-1,k=null;for(const j of p){const J=j.result.axisScores.C+j.result.axisScores.L;J>v&&(v=J,k=j)}k&&l.push({emoji:"🎭",title:"ミステリアス賞",description:"真逆だからこそ惹かれる！",targetIds:[k.p1.id,k.p2.id]});let R=-1,b=null;for(const j of r){if(!j.vector)continue;const J=j.vector[0]+j.vector[1];J>R&&(R=J,b=j)}b&&l.push({emoji:"🎤",title:"パーティーMC賞",description:"場を盛り上げるMVP！",targetIds:[b.id]});let P=1/0,z=null;for(const j of r)j.vector&&j.vector[0]<P&&(P=j.vector[0],z=j);z&&z.id!==(b==null?void 0:b.id)&&l.push({emoji:"🐱",title:"癒しオーラ賞",description:"ほっとする存在感！",targetIds:[z.id]});let W=-1,M=null;for(const j of r){const J=e.filter(V=>V.id1===j.id||V.id2===j.id);if(J.length===0)continue;const se=J.reduce((V,X)=>V+X.displayScore,0)/J.length;se>W&&(W=se,M=j)}return M&&l.push({emoji:"🔄",title:"万能プレイヤー賞",description:"誰とでも仲良くなれる！",targetIds:[M.id]}),l}const JI=({onStart:r,onJoin:e,onAdminLogin:n})=>_.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[_.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((s,l)=>_.jsx("div",{className:"absolute rounded-full opacity-20",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:["#ff6b6b","#4ecdc4","#ffd93d"][l%3],animation:`float ${3+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*3}s`}},l))}),_.jsxs("div",{className:"animate-fade-in relative z-10",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🍻"}),_.jsx("h1",{className:"text-5xl font-black tracking-tight mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"SEKIMEKI"})}),_.jsx("p",{className:"text-lg text-gray-300 mb-12 font-medium",children:"「運命の席順、決めます」"}),_.jsxs("div",{className:"space-y-4 w-full max-w-xs mx-auto",children:[_.jsx("button",{onClick:r,className:"w-full py-4 px-8 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームをつくる"}),_.jsx("button",{onClick:e,className:"w-full py-4 px-8 bg-gray-800/80 border-2 border-gray-600 text-white font-bold text-lg rounded-2xl hover:border-secondary hover:bg-gray-700/80 transition-all duration-200 active:scale-95",children:"コードで参加する"}),_.jsx("button",{onClick:n,className:"w-full py-3 px-8 text-gray-400 text-sm hover:text-accent transition-colors",children:"🔐 管理者ログイン"})]}),_.jsx("p",{className:"mt-8 text-sm text-gray-500",children:"※アプリ不要・登録不要"}),_.jsx("p",{className:"mt-2 text-xs text-gray-600",children:"各自のスマホで診断 → 最適な席順を提案！"})]}),_.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `})]}),ZI=[{id:"facing-long",name:"対面ロング",icon:"═══",desc:"向かい合う長テーブル"},{id:"facing-short",name:"対面ショート",icon:"═══",desc:"向かい合う短テーブル"},{id:"round",name:"円卓",icon:"◯",desc:"丸テーブル"},{id:"counter",name:"カウンター",icon:"───",desc:"横並びカウンター席"},{id:"alternate",name:"交互型",icon:"⊞",desc:"男女交互に配置"},{id:"l-shape",name:"L字・コの字",icon:"⌐",desc:"L字型テーブル"}],ek=({onComplete:r,onBack:e})=>{const[n,s]=Y.useState("goukon"),[l,c]=Y.useState("facing-long"),[u,f]=Y.useState("");return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-8 animate-fade-in",children:"ルーム設定"}),_.jsxs("div",{className:"mb-8 animate-slide-up",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"モード"}),_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("button",{onClick:()=>s("goukon"),className:`p-4 rounded-xl border-2 transition-all ${n==="goukon"?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"💕"}),_.jsx("div",{className:"font-bold text-sm",children:"合コンモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"男女別で席配置"})]}),_.jsxs("button",{onClick:()=>s("free"),className:`p-4 rounded-xl border-2 transition-all ${n==="free"?"border-secondary bg-secondary/10 shadow-lg shadow-secondary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"🎉"}),_.jsx("div",{className:"font-bold text-sm",children:"フリーモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"性別不問で席配置"})]})]})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.1s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"席の配置"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:ZI.map(p=>_.jsxs("button",{onClick:()=>c(p.id),className:`p-4 rounded-xl border-2 transition-all text-left ${l===p.id?"border-accent bg-accent/10 shadow-lg shadow-accent/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-lg font-mono mb-1 text-gray-300",children:p.icon}),_.jsx("div",{className:"font-bold text-sm",children:p.name}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:p.desc})]},p.id))})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.2s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"管理者パスワード"}),_.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),placeholder:"管理ページ用のパスワードを設定",className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"}),_.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"管理者ページに再ログインする際に必要です"})]}),_.jsx("button",{onClick:()=>r(n,l,u),disabled:!u.trim(),className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${u.trim()?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:"ルームを作成する"})]})},tk=({onJoin:r,onBack:e})=>{const[n,s]=Y.useState(["","","",""]),[l,c]=Y.useState(""),[u,f]=Y.useState(!1),p=Y.useRef([]);Y.useEffect(()=>{var R;(R=p.current[0])==null||R.focus()},[]);const g=n.join(""),y=async()=>{const R=g.trim().toUpperCase();if(R.length!==4){c("4文字のコードを入力してください");return}f(!0),c("");const b=await ly(R);if(f(!1),!b){c("ルームが見つかりません");return}r(R)},w=(R,b)=>{var W;const P=b.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g,"");if(!P)return;const z=[...n];z[R]=P,s(z),c(""),R<3&&((W=p.current[R+1])==null||W.focus()),R===3&&z.every(M=>M!=="")&&setTimeout(()=>{var j;z.join("").length===4&&((j=p.current[3])==null||j.blur())},100)},v=(R,b)=>{var P;if(b.key==="Backspace"){b.preventDefault();const z=[...n];n[R]?(z[R]="",s(z)):R>0&&(z[R-1]="",s(z),(P=p.current[R-1])==null||P.focus())}else b.key==="Enter"&&y()},k=R=>{var P;R.preventDefault();const b=R.clipboardData.getData("text").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4);if(b.length>0){const z=["","","",""];for(let M=0;M<Math.min(b.length,4);M++)z[M]=b[M];s(z),c("");const W=Math.min(b.length,3);(P=p.current[W])==null||P.focus()}};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔑"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"ルームに参加"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-3 text-center",children:"ルームコード"}),_.jsx("div",{className:"flex gap-3 justify-center",children:n.map((R,b)=>_.jsx("input",{ref:P=>{p.current[b]=P},type:"text",inputMode:"text",autoComplete:"off",autoCapitalize:"characters",value:R,onChange:P=>w(b,P.target.value),onKeyDown:P=>v(b,P),onPaste:b===0?k:void 0,className:"w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase"},b))}),l&&_.jsx("p",{className:"text-red-400 text-sm mt-3 text-center",children:l})]}),_.jsx("button",{onClick:y,disabled:g.length!==4||u,className:"w-full py-4 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:u?"確認中...":"参加する"})]})]})},ht=[{id:"dog",emoji:"🐶",label:"イヌ"},{id:"cat",emoji:"🐱",label:"ネコ"},{id:"bear",emoji:"🐻",label:"クマ"},{id:"fox",emoji:"🦊",label:"キツネ"},{id:"lion",emoji:"🦁",label:"ライオン"},{id:"rabbit",emoji:"🐰",label:"ウサギ"},{id:"panda",emoji:"🐼",label:"パンダ"},{id:"penguin",emoji:"🐧",label:"ペンギン"},{id:"koala",emoji:"🐨",label:"コアラ"},{id:"unicorn",emoji:"🦄",label:"ユニコーン"},{id:"dolphin",emoji:"🐬",label:"イルカ"},{id:"owl",emoji:"🦉",label:"フクロウ"},{id:"tiger",emoji:"🐯",label:"トラ"},{id:"monkey",emoji:"🐵",label:"サル"},{id:"wolf",emoji:"🐺",label:"オオカミ"},{id:"hamster",emoji:"🐹",label:"ハムスター"}],nk=({mode:r,usedAvatars:e,onSubmit:n,onBack:s})=>{var v;const[l,c]=Y.useState(""),[u,f]=Y.useState("male"),p=ht.filter(k=>!e.includes(k.id)),[g,y]=Y.useState(((v=p[0])==null?void 0:v.id)??ht[0].id),w=()=>{l.trim()&&n({name:l.trim(),gender:r==="goukon"?u:void 0,avatar:g})};return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:s,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-2",children:"✨"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"プロフィール登録"}),_.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50",children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"ニックネーム"}),_.jsx("input",{type:"text",value:l,onChange:k=>c(k.target.value),placeholder:"最大8文字",maxLength:8,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors",autoFocus:!0})]}),r==="goukon"&&_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"性別"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[_.jsx("button",{onClick:()=>f("male"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="male"?"border-blue-400 bg-blue-500/10 text-blue-300":"border-gray-700 text-gray-400"}`,children:"♂ 男性"}),_.jsx("button",{onClick:()=>f("female"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="female"?"border-pink-400 bg-pink-500/10 text-pink-300":"border-gray-700 text-gray-400"}`,children:"♀ 女性"})]})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"アイコン"}),_.jsx("div",{className:"grid grid-cols-8 gap-2",children:ht.map(k=>{const R=e.includes(k.id);return _.jsx("button",{onClick:()=>!R&&y(k.id),disabled:R,className:`text-2xl p-2 rounded-xl transition-all ${R?"opacity-20 cursor-not-allowed":g===k.id?"bg-accent/20 ring-2 ring-accent scale-110":"hover:bg-gray-700/50"}`,children:k.emoji},k.id)})})]}),_.jsx("button",{onClick:w,disabled:!l.trim(),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:"参加する！"})]})]})]})},rk=({roomCode:r,participants:e,role:n,onCalculateResults:s,onBack:l})=>{const c=e.filter(f=>f.completed).length,u=e.length>=2&&e.every(f=>f.completed);return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:l,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 退出"}),_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"ルーム"}),_.jsxs("div",{className:"inline-block bg-gray-800/80 rounded-2xl px-8 py-4 border border-gray-600/50 mb-4",children:[_.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"ルームコード"}),_.jsx("p",{className:"text-4xl font-mono font-black tracking-[0.3em] text-accent",children:r})]}),_.jsx("p",{className:"text-sm text-gray-400",children:"このコードを共有して参加してもらおう"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsxs("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:["参加者 (",e.length,"名)",e.length>0&&_.jsxs("span",{className:"ml-2 text-secondary",children:[c,"/",e.length," 回答済み"]})]}),_.jsx("div",{className:"space-y-2",children:e.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 animate-slide-up",style:{animationDelay:`${p*.1}s`},children:[_.jsx("span",{className:"text-2xl",children:g==null?void 0:g.emoji}),_.jsx("span",{className:"font-medium flex-1",children:f.name}),f.gender&&_.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${f.gender==="male"?"bg-blue-500/20 text-blue-300":"bg-pink-500/20 text-pink-300"}`,children:f.gender==="male"?"♂":"♀"}),_.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${f.completed?"bg-green-500/20 text-green-300":"bg-gray-600/30 text-gray-500"}`,children:f.completed?"✓ 完了":"回答中..."})]},f.id)})}),e.length===0&&_.jsx("div",{className:"text-center text-gray-500 py-8 animate-pulse-slow",children:"参加者を待っています..."})]}),n==="admin"&&_.jsx("div",{children:_.jsx("button",{onClick:s,disabled:!u,className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${u?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:u?"🎯 結果を計算する":e.length<2?"あと2人以上の参加が必要です":`${c}/${e.length} 人回答済み（全員完了で計算可能）`})})]})};function ik(r){const e=Uu.map((s,l)=>l);let n=0;for(let s=0;s<r.length;s++)n=(n<<5)-n+r.charCodeAt(s)|0;for(let s=e.length-1;s>0;s--){n=(n<<5)-n+s|0;const l=Math.abs(n)%(s+1);[e[s],e[l]]=[e[l],e[s]]}return e.map(s=>({...Uu[s],originalIndex:s}))}const mu=9,sk=({participant:r,onComplete:e})=>{const[n,s]=Y.useState(!1),[l,c]=Y.useState(0),[u,f]=Y.useState(Array(10).fill(0)),[p,g]=Y.useState(3),[y,w]=Y.useState(mu),[v,k]=Y.useState(!1),R=Xm.useMemo(()=>ik(r.id),[r.id]),b=ht.find(W=>W.id===r.avatar),P=Y.useCallback(W=>{if(v)return;k(!0);const M=[...u];M[R[l].originalIndex]=W,f(M),l<9?setTimeout(()=>{c(j=>j+1),g(3),w(mu),k(!1)},300):setTimeout(()=>{e(M)},300)},[u,l,R,v,e]);if(Y.useEffect(()=>{if(!n)return;const W=setInterval(()=>{w(M=>M<=1?(P(3),mu):M-1)},1e3);return()=>clearInterval(W)},[n,l,P]),!n)return _.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:_.jsxs("div",{className:"animate-pop",children:[_.jsx("div",{className:"text-6xl mb-4",children:b==null?void 0:b.emoji}),_.jsxs("h2",{className:"text-3xl font-bold mb-2",children:[r.name,"さん"]}),_.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"10問の質問に答えてね（1問9秒）"}),_.jsx("button",{onClick:()=>s(!0),className:"py-4 px-12 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95",children:"スタート！"})]})});const z=R[l];return _.jsxs("div",{className:"min-h-screen flex flex-col px-6 py-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-xl",children:b==null?void 0:b.emoji}),_.jsx("span",{className:"text-sm font-medium text-gray-400",children:r.name})]}),_.jsxs("span",{className:"text-sm text-gray-500",children:[l+1," / 10"]})]}),_.jsx("div",{className:"w-full h-1.5 bg-gray-800 rounded-full mb-2 overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300",style:{width:`${(l+1)/10*100}%`}})}),_.jsx("div",{className:"flex justify-end mb-6",children:_.jsxs("div",{className:`text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${y<=3?"bg-red-500/20 text-red-400 animate-pulse":"bg-gray-800 text-gray-400"}`,children:[y,"s"]})}),_.jsx("div",{className:"flex-1 flex flex-col justify-center",children:_.jsxs("div",{className:`animate-slide-in-right ${v?"opacity-50":""}`,children:[_.jsx("h3",{className:"text-2xl font-bold text-center mb-12 leading-relaxed",children:z.text}),_.jsxs("div",{className:"flex justify-between mb-4 px-2",children:[_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-left",children:z.leftLabel}),_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-right",children:z.rightLabel})]}),_.jsx("div",{className:"flex gap-3 justify-center mb-8",children:[1,2,3,4,5].map(W=>_.jsx("button",{onClick:()=>g(W),className:`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-200 ${p===W?"bg-gradient-to-br from-primary to-pink-500 text-white scale-110 shadow-lg shadow-primary/30":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:W},W))}),_.jsx("button",{onClick:()=>P(p),disabled:v,className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50",children:l<9?"次へ":"回答完了！"})]},l)})]})},ok=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onTogglePair:c,onReveal:u,onReshuffle:f,revealed:p})=>{const g=[...e].sort((y,w)=>w.displayScore-y.displayScore);return _.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("div",{className:"text-4xl mb-2",children:"👑"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",children:"管理者画面"})}),_.jsx("p",{className:"text-sm text-gray-400",children:p?"結果は公開済みです":"表示するペアを選択して結果を公開してください"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"ペア表示設定"}),_.jsx("div",{className:"space-y-2",children:g.map(y=>{const w=r.find(z=>z.id===y.id1),v=r.find(z=>z.id===y.id2);if(!w||!v)return null;const k=ht.find(z=>z.id===w.avatar),R=ht.find(z=>z.id===v.avatar),b=[y.id1,y.id2].sort().join("_"),P=y.visible!==!1;return _.jsxs("div",{className:`rounded-xl p-4 border transition-all ${P?"bg-gray-800/60 border-gray-600/50":"bg-gray-900/40 border-gray-800/50 opacity-60"}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{onClick:()=>c(b,!P),className:`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${P?"bg-secondary":"bg-gray-700"}`,children:_.jsx("div",{className:`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${P?"translate-x-6":"translate-x-0.5"}`})}),_.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[_.jsx("span",{className:"text-lg",children:k==null?void 0:k.emoji}),_.jsx("span",{className:"text-sm truncate",children:w.name}),_.jsx("span",{className:"text-gray-600 text-xs",children:"×"}),_.jsx("span",{className:"text-sm truncate",children:v.name}),_.jsx("span",{className:"text-lg",children:R==null?void 0:R.emoji})]}),_.jsxs("div",{className:"flex-shrink-0 text-right",children:[_.jsx("span",{className:`text-lg font-bold ${y.displayScore>=85?"text-primary":y.displayScore>=70?"text-accent":y.displayScore>=55?"text-secondary":"text-gray-400"}`,children:y.displayScore}),_.jsx("span",{className:"text-xs text-gray-500",children:"点"})]})]}),_.jsx("div",{className:"mt-1 ml-15 text-xs text-gray-500 pl-[60px]",children:y.typeName})]},b)})})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"称号プレビュー"}),_.jsx("div",{className:"space-y-2",children:s.map((y,w)=>{const v=y.targetIds.map(k=>r.find(R=>R.id===k)).filter(Boolean);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-2 border border-gray-700/30",children:[_.jsx("span",{className:"text-xl",children:y.emoji}),_.jsxs("div",{className:"flex-1",children:[_.jsx("span",{className:"text-sm font-medium text-accent",children:y.title}),_.jsx("span",{className:"text-xs text-gray-500 ml-2",children:v.map(k=>k.name).join(" & ")})]})]},w)})})]}),_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsx("div",{className:"flex gap-3 max-w-lg mx-auto",children:p?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:f,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:()=>{},className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl transition-all",children:"✅ 公開済み"})]}):_.jsx("button",{onClick:u,className:"flex-1 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95 animate-glow",children:"🎉 結果を公開する"})})})]})},lk=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onReshuffle:c,onShowMatrix:u,reshuffleCount:f})=>{const[p,g]=Y.useState("countdown"),[y,w]=Y.useState(3),[v,k]=Y.useState(0),[R,b]=Y.useState(0),[P,z]=Y.useState(!1),[W,M]=Y.useState(null),j=[...r].sort((V,X)=>{const he=n.find(xe=>xe.participantId===V.id),fe=n.find(xe=>xe.participantId===X.id);return((he==null?void 0:he.seatIndex)??0)-((fe==null?void 0:fe.seatIndex)??0)});Y.useEffect(()=>{if(f>1){g("done"),k(r.length),b(J().length);return}if(p==="countdown"){const V=setInterval(()=>{w(X=>X<=1?(clearInterval(V),g("seats"),0):X-1)},1e3);return()=>clearInterval(V)}if(p==="seats"){const V=setInterval(()=>{k(X=>X>=r.length?(clearInterval(V),setTimeout(()=>g("scores"),500),X):X+1)},400);return()=>clearInterval(V)}if(p==="scores"){const V=J(),X=setInterval(()=>{b(he=>he>=V.length?(clearInterval(X),setTimeout(()=>g("awards"),500),he):he+1)},800);return()=>clearInterval(X)}p==="awards"&&setTimeout(()=>g("done"),2e3)},[p,r.length,f]);function J(){const V=[],X=cy(j.length,l);for(const[he,fe]of X){const xe=j[he],Ae=j[fe];if(!xe||!Ae)continue;const Ve=Hs(e,xe.id,Ae.id);Ve&&V.push({p1:xe,p2:Ae,result:Ve})}return V}const se=J();return p==="countdown"?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-8xl font-black text-primary animate-pop",children:y},y),_.jsx("p",{className:"text-gray-400 mt-4",children:"運命の席順を発表..."})]})}):_.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("h2",{className:"text-3xl font-black mb-2 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"席順発表！"})}),_.jsx("p",{className:"text-gray-400 text-sm",children:"🍻 この席順で乾杯！"})]}),_.jsx("div",{className:"mb-8",children:_.jsx(uk,{participants:j,revealedCount:v,layout:l})}),(p==="scores"||p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"隣り合うペアの相性"}),_.jsx("div",{className:"space-y-3",children:se.map((V,X)=>{if(X>=R&&p!=="done")return null;const he=ht.find(Ae=>Ae.id===V.p1.avatar),fe=ht.find(Ae=>Ae.id===V.p2.avatar),xe=`${V.p1.id}-${V.p2.id}`;return _.jsxs("div",{className:"animate-slide-up",style:{animationDelay:`${X*.1}s`},children:[_.jsxs("button",{onClick:()=>M(W===xe?null:xe),className:"w-full bg-gray-800/60 rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-2xl",children:he==null?void 0:he.emoji}),_.jsx("span",{className:"text-sm font-medium",children:V.p1.name}),_.jsx("span",{className:"text-gray-600",children:"×"}),_.jsx("span",{className:"text-sm font-medium",children:V.p2.name}),_.jsx("span",{className:"text-2xl",children:fe==null?void 0:fe.emoji})]}),_.jsx("div",{className:"text-right",children:_.jsx(ak,{score:V.result.displayScore})})]}),_.jsx("div",{className:"mt-2 text-sm text-secondary font-medium",children:V.result.typeName})]}),W===xe&&_.jsx("div",{className:"mt-2 space-y-2 animate-slide-up",children:ck(V.result).map((Ae,Ve)=>_.jsxs("div",{className:"bg-gray-900/60 rounded-xl p-3 border border-gray-700/30",children:[_.jsx("div",{className:"text-xs text-accent mb-1",children:["💬 共通点探し","🔍 違い発見","💭 妄想系"][Ve]}),_.jsx("p",{className:"text-sm",children:Ae})]},Ve))})]},xe)})})]}),(p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8 animate-fade-in",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"称号発表！"}),_.jsx("div",{className:"space-y-3",children:s.map((V,X)=>{const he=V.targetIds.map(fe=>r.find(xe=>xe.id===fe)).filter(Boolean);return _.jsx("div",{className:"bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-accent/20 animate-pop",style:{animationDelay:`${X*.15}s`},children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-3xl",children:V.emoji}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold text-accent",children:V.title}),_.jsx("div",{className:"text-sm text-gray-300",children:V.description}),_.jsx("div",{className:"text-xs text-gray-500 mt-1",children:he.map(fe=>fe.name).join(" & ")})]})]})},X)})})]}),p==="done"&&_.jsx("p",{className:"text-center text-xs text-gray-600 mb-6",children:"※ あくまでお楽しみ診断です"}),p==="done"&&_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsxs("div",{className:"flex gap-3 max-w-lg mx-auto",children:[c&&_.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all active:scale-95",children:"📊 相性一覧"})]})})]})};function ak({score:r}){const e=r>=85?"text-primary":r>=70?"text-accent":r>=55?"text-secondary":"text-gray-400";return _.jsxs("span",{className:`text-2xl font-black ${e}`,children:[r,_.jsx("span",{className:"text-sm font-normal text-gray-500",children:"点"})]})}function ck(r){var p,g,y;const e=Object.entries(r.axisScores);e.sort((w,v)=>v[1]-w[1]);const n=e[0][0],s=e[e.length-1][0],l=[],c=((p=pu[n])==null?void 0:p.common)??[],u=((g=pu[s])==null?void 0:g.diff)??[],f=((y=pu.L)==null?void 0:y.common)??[];return l.push(c[Math.floor(Math.random()*c.length)]??"好きな食べ物は？"),l.push(u[Math.floor(Math.random()*u.length)]??"お互いの趣味を紹介！"),l.push(f[Math.floor(Math.random()*f.length)]??"もし2人でドラマに出るなら？"),l}function uk({participants:r,revealedCount:e,layout:n}){const s=Math.ceil(r.length/2);if(n==="facing-long"||n==="facing-short"||n==="alternate"){const l=r.slice(0,s),c=r.slice(s);return _.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-3 justify-center",children:l.map((u,f)=>_.jsx(ol,{participant:u,revealed:f<e,delay:f*.2},u.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full my-2"}),_.jsx("div",{className:"flex gap-3 justify-center",children:c.map((u,f)=>_.jsx(ol,{participant:u,revealed:s+f<e,delay:(s+f)*.2},u.id))})]})}return n==="round"?_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"relative",style:{width:280,height:260},children:[_.jsx("div",{className:"absolute rounded-full bg-amber-900/30 border-2 border-amber-800/40",style:{width:100*1.2,height:100*1.2,left:140-100*.6,top:130-100*.6}}),r.map((f,p)=>{const g=2*Math.PI*p/r.length-Math.PI/2,y=140+100*Math.cos(g)-32,w=130+100*Math.sin(g)-28;return _.jsx("div",{className:"absolute",style:{left:y,top:w},children:_.jsx(ol,{participant:f,revealed:p<e,delay:p*.2,compact:!0})},f.id)})]})}):_.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-2 justify-center flex-wrap",children:r.map((l,c)=>_.jsx(ol,{participant:l,revealed:c<e,delay:c*.2},l.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full"})]})}function ol({participant:r,revealed:e,delay:n,compact:s}){const l=ht.find(c=>c.id===r.avatar);return e?_.jsxs("div",{className:`${s?"w-14 p-1.5":"w-16 p-2"} bg-gray-800/80 rounded-xl border border-gray-600/50 text-center animate-slot-spin`,style:{animationDelay:`${n}s`},children:[_.jsx("div",{className:s?"text-xl":"text-2xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:`${s?"text-[10px]":"text-xs"} font-medium mt-1 truncate`,children:r.name})]}):_.jsx("div",{className:`${s?"w-14 h-14":"w-16 h-20"} bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center`,children:_.jsx("span",{className:"text-gray-600 text-lg",children:"?"})})}const dk={E:"テンション波長",C:"会話スタイル",V:"価値観ベクトル",L:"恋愛スタンス",H:"ユーモア相性"},hk=({participants:r,results:e,onBack:n})=>{const[s,l]=Y.useState(null),c=f=>f>=85?"bg-primary/80":f>=70?"bg-accent/60":f>=55?"bg-secondary/50":"bg-gray-600/40",u=f=>f>=85?"text-white font-bold":f>=70||f>=55?"text-white":"text-gray-300";return _.jsxs("div",{className:"min-h-screen px-4 py-8",children:[_.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 席順に戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-6 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-secondary to-teal-400 bg-clip-text text-transparent",children:"相性マトリクス"})}),_.jsx("div",{className:"overflow-x-auto mb-8",children:_.jsxs("table",{className:"w-full border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{className:"w-12"}),r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("th",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:p==null?void 0:p.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]},f.id)})]})}),_.jsx("tbody",{children:r.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("tr",{children:[_.jsxs("td",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:g==null?void 0:g.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]}),r.map((y,w)=>{if(p===w)return _.jsx("td",{className:"p-1",children:_.jsx("div",{className:"w-12 h-12 bg-gray-800/30 rounded-lg flex items-center justify-center",children:_.jsx("span",{className:"text-gray-700",children:"-"})})},y.id);const v=Hs(e,f.id,y.id);return v?_.jsx("td",{className:"p-1",children:_.jsx("button",{onClick:()=>l({p1:f,p2:y,result:v}),className:`w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${c(v.displayScore)}`,children:_.jsx("span",{className:`text-sm ${u(v.displayScore)}`,children:v.displayScore})})},y.id):_.jsx("td",{},y.id)})]},f.id)})})]})}),_.jsxs("div",{className:"flex items-center justify-center gap-4 mb-8 text-xs text-gray-400",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-primary/80"})," 85+"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-accent/60"})," 70-84"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-secondary/50"})," 55-69"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-gray-600/40"})," 40-54"]})]}),s&&_.jsx(fk,{p1:s.p1,p2:s.p2,result:s.result,onClose:()=>l(null)}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"みんなのタイプ"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("div",{className:"bg-gray-800/60 rounded-xl p-3 border border-gray-700/50",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("span",{className:"text-2xl",children:p==null?void 0:p.emoji}),_.jsx("span",{className:"font-medium text-sm",children:f.name})]}),_.jsxs("div",{className:"text-lg",children:[f.personalTypeEmoji," ",f.personalType]}),f.vector&&_.jsx("div",{className:"mt-2 space-y-1",children:["E","C","V","L","H"].map((g,y)=>_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[10px] text-gray-500 w-8",children:g}),_.jsx("div",{className:"flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all",style:{width:`${(f.vector[y]-1)/4*100}%`}})}),_.jsx("span",{className:"text-[10px] text-gray-500",children:f.vector[y].toFixed(1)})]},g))})]},f.id)})})]})]})};function fk({p1:r,p2:e,result:n,onClose:s}){const l=ht.find(u=>u.id===r.avatar),c=ht.find(u=>u.id===e.avatar);return _.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6",onClick:s,children:_.jsxs("div",{className:"bg-dark-200 rounded-2xl p-6 w-full max-w-sm border border-gray-700 animate-pop",onClick:u=>u.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:"text-sm font-medium",children:r.name})]}),_.jsx("div",{className:"text-2xl text-primary",children:"×"}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:c==null?void 0:c.emoji}),_.jsx("div",{className:"text-sm font-medium",children:e.name})]})]}),_.jsxs("div",{className:"text-center mb-4",children:[_.jsx("span",{className:"text-4xl font-black text-primary",children:n.displayScore}),_.jsx("span",{className:"text-lg text-gray-400",children:"点"})]}),_.jsx("div",{className:"text-center text-secondary font-medium mb-6",children:n.typeName}),_.jsx("div",{className:"space-y-3 mb-6",children:["E","C","V","L","H"].map(u=>{const p=n.axisScores[u]*100;return _.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[_.jsx("span",{className:"text-gray-400",children:dk[u]}),_.jsxs("span",{className:"text-gray-300",children:[Math.round(p),"%"]})]}),_.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500",style:{width:`${p}%`}})})]},u)})}),_.jsx("button",{onClick:s,className:"w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all",children:"閉じる"})]})})}const pk=({onLogin:r,onBack:e})=>{const[n,s]=Y.useState(["","","",""]),[l,c]=Y.useState(""),[u,f]=Y.useState(""),[p,g]=Y.useState(!1),y=Y.useRef([]);Y.useEffect(()=>{var P;(P=y.current[0])==null||P.focus()},[]);const w=n.join(""),v=async()=>{const P=w.trim().toUpperCase();if(P.length!==4){f("4文字のルームコードを入力してください");return}if(!l.trim()){f("パスワードを入力してください");return}if(g(!0),f(""),!await ly(P)){f("ルームが見つかりません"),g(!1);return}const W=await wI(P,l.trim());if(g(!1),!W){f("パスワードが正しくありません");return}r(P)},k=(P,z)=>{var j;const W=z.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g,"");if(!W)return;const M=[...n];M[P]=W,s(M),f(""),P<3&&((j=y.current[P+1])==null||j.focus())},R=(P,z)=>{var W;if(z.key==="Backspace"){z.preventDefault();const M=[...n];n[P]?(M[P]="",s(M)):P>0&&(M[P-1]="",s(M),(W=y.current[P-1])==null||W.focus())}else z.key==="Enter"&&v()},b=P=>{P.preventDefault();const z=P.clipboardData.getData("text").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4);if(z.length>0){const W=["","","",""];for(let M=0;M<Math.min(z.length,4);M++)W[M]=z[M];s(W),f("")}};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔐"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"管理者ログイン"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-3 text-center",children:"ルームコード"}),_.jsx("div",{className:"flex gap-3 justify-center",children:n.map((P,z)=>_.jsx("input",{ref:W=>{y.current[z]=W},type:"text",inputMode:"text",autoComplete:"off",autoCapitalize:"characters",value:P,onChange:W=>k(z,W.target.value),onKeyDown:W=>R(z,W),onPaste:z===0?b:void 0,className:"w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors uppercase"},z))})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2 text-center",children:"パスワード"}),_.jsx("input",{type:"password",value:l,onChange:P=>{c(P.target.value),f("")},placeholder:"管理者パスワード",className:"w-full bg-gray-900/60 border-2 border-gray-600 rounded-xl px-4 py-4 text-white text-center placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors",onKeyDown:P=>P.key==="Enter"&&v()})]}),u&&_.jsx("p",{className:"text-red-400 text-sm mb-4 text-center",children:u}),_.jsx("button",{onClick:v,disabled:w.length!==4||!l.trim()||p,className:"w-full py-4 bg-gradient-to-r from-accent to-yellow-400 text-dark-200 font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:p?"確認中...":"ログイン"})]})]})},mk=()=>{var z,W;const r=RI(),[e,n]=Y.useState("loading"),[s,l]=Y.useState(1),[c,u]=Y.useState(null);Y.useEffect(()=>{r.isReady&&e==="loading"&&n("top")},[r.isReady,e]),Y.useEffect(()=>{if(!r.roomData||!c)return;const M=r.roomData.config.state;c==="participant"&&M==="results"&&r.revealed&&n("result")},[(z=r.roomData)==null?void 0:z.config.state,r.allCompleted,r.revealed,(W=r.myParticipant)==null?void 0:W.completed]);const f=Y.useCallback(async(M,j,J)=>{const se=await vI(M,j,J);r.setRoomCode(se),u("admin"),n("waiting")},[r]),p=Y.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const M=r.participants.map(fe=>{const xe=FI(fe.answers),Ae=OI(xe);return{...fe,vector:xe,personalType:Ae.name,personalTypeEmoji:Ae.emoji}}),j=GI(M),J=r.roomData.config.mode,se=r.roomData.config.layout,V=hl(M,j,se,J),X=qm(M,j,V,se),he={};for(const fe of M)he[fe.id]={vector:fe.vector,personalType:fe.personalType,personalTypeEmoji:fe.personalTypeEmoji};await SI(r.roomCode,j,V,X,he),n("admin-review")},[r.roomCode,r.roomData,r.participants]),g=Y.useCallback(async(M,j)=>{r.roomCode&&await II(r.roomCode,M,j)},[r.roomCode]),y=Y.useCallback(async()=>{r.roomCode&&await kI(r.roomCode)},[r.roomCode]),w=Y.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const M=s+1,j=r.roomData.config.mode,J=r.roomData.config.layout,se=XI(r.participants,r.compatibilityResults,J,j,M,r.seatAssignments),V=qm(r.participants,r.compatibilityResults,se,J);await NI(r.roomCode,se,V),l(M)},[r.roomCode,r.roomData,r.participants,r.compatibilityResults,r.seatAssignments,s]),v=Y.useCallback(async M=>{const j=await Qm(M);j&&(r.setRoomCode(M),u("admin"),j.state==="admin-review"?n("admin-review"):j.state==="results"?n("result"):n("waiting"))},[r]),k=Y.useCallback(async M=>{await Qm(M)&&(r.setRoomCode(M),u("participant"),n("profile"))},[r]),R=Y.useCallback(async M=>{r.roomCode&&(await xI(r.roomCode,{name:M.name,gender:M.gender,avatar:M.avatar}),n("diagnosis"))},[r.roomCode]),b=Y.useCallback(async M=>{r.roomCode&&(await EI(r.roomCode,M),n(c==="admin"?"waiting":"waiting-results"))},[r.roomCode,c]),P=Y.useCallback(async()=>{r.roomCode&&e==="waiting"&&c==="participant"&&await CI(r.roomCode),r.setRoomCode(""),u(null),n("top")},[r,e,c]);return e==="loading"?_.jsx("div",{className:"min-h-screen flex items-center justify-center",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-4xl mb-4",children:"🍻"}),_.jsx("p",{className:"text-gray-400",children:"読み込み中..."})]})}):_.jsxs("div",{className:"max-w-lg mx-auto",children:[e==="top"&&_.jsx(JI,{onStart:()=>n("setup"),onJoin:()=>n("join"),onAdminLogin:()=>n("admin-login")}),e==="admin-login"&&_.jsx(pk,{onLogin:v,onBack:()=>n("top")}),e==="setup"&&_.jsx(ek,{onComplete:f,onBack:()=>n("top")}),e==="join"&&_.jsx(tk,{onJoin:k,onBack:()=>n("top")}),e==="profile"&&r.roomData&&_.jsx(nk,{mode:r.roomData.config.mode,usedAvatars:r.participants.map(M=>M.avatar),onSubmit:R,onBack:P}),e==="waiting"&&r.roomCode&&c&&_.jsx(rk,{roomCode:r.roomCode,participants:r.participants,role:c,onCalculateResults:p,onBack:P}),e==="diagnosis"&&r.myParticipant&&_.jsx(sk,{participant:r.myParticipant,onComplete:b}),e==="waiting-results"&&_.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🔮"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:"結果を待っています..."}),_.jsx("p",{className:"text-gray-400",children:r.allCompleted?"幹事が結果を準備中です":`${r.participants.filter(M=>M.completed).length} / ${r.participants.length} 人回答済み`}),_.jsx("div",{className:"mt-8 flex justify-center gap-2",children:[0,1,2].map(M=>_.jsx("div",{className:"w-3 h-3 bg-primary rounded-full animate-bounce",style:{animationDelay:`${M*.15}s`}},M))})]})}),e==="admin-review"&&r.roomData&&_.jsx(ok,{participants:r.participants,results:r.compatibilityResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onTogglePair:g,onReveal:y,onReshuffle:w,revealed:r.revealed}),e==="result"&&r.roomData&&_.jsx(lk,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onReshuffle:c==="admin"?w:void 0,onShowMatrix:()=>n("matrix"),reshuffleCount:s}),e==="matrix"&&_.jsx(hk,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,onBack:()=>n("result")})]})};m0.createRoot(document.getElementById("root")).render(_.jsx(Xm.StrictMode,{children:_.jsx(mk,{})}));

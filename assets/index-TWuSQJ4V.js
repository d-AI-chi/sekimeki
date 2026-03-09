(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function qm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qc={exports:{}},cs={},qc={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function s0(){if(Pp)return se;Pp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,O={};function b(S,L,ie){this.props=S,this.context=L,this.refs=O,this.updater=ie||N}b.prototype.isReactComponent={},b.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},b.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function A(){}A.prototype=b.prototype;function P(S,L,ie){this.props=S,this.context=L,this.refs=O,this.updater=ie||N}var z=P.prototype=new A;z.constructor=P,R(z,b.prototype),z.isPureReactComponent=!0;var G=Array.isArray,he=Object.prototype.hasOwnProperty,de={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function te(S,L,ie){var ce,pe={},me=null,Se=null;if(L!=null)for(ce in L.ref!==void 0&&(Se=L.ref),L.key!==void 0&&(me=""+L.key),L)he.call(L,ce)&&!q.hasOwnProperty(ce)&&(pe[ce]=L[ce]);var ve=arguments.length-2;if(ve===1)pe.children=ie;else if(1<ve){for(var Pe=Array(ve),Et=0;Et<ve;Et++)Pe[Et]=arguments[Et+2];pe.children=Pe}if(S&&S.defaultProps)for(ce in ve=S.defaultProps,ve)pe[ce]===void 0&&(pe[ce]=ve[ce]);return{$$typeof:r,type:S,key:me,ref:Se,props:pe,_owner:de.current}}function ye(S,L){return{$$typeof:r,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function ae(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Ee(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ie){return L[ie]})}var We=/\/+/g;function rt(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Ee(""+S.key):L.toString(36)}function Mt(S,L,ie,ce,pe){var me=typeof S;(me==="undefined"||me==="boolean")&&(S=null);var Se=!1;if(S===null)Se=!0;else switch(me){case"string":case"number":Se=!0;break;case"object":switch(S.$$typeof){case r:case e:Se=!0}}if(Se)return Se=S,pe=pe(Se),S=ce===""?"."+rt(Se,0):ce,G(pe)?(ie="",S!=null&&(ie=S.replace(We,"$&/")+"/"),Mt(pe,L,ie,"",function(Et){return Et})):pe!=null&&(ae(pe)&&(pe=ye(pe,ie+(!pe.key||Se&&Se.key===pe.key?"":(""+pe.key).replace(We,"$&/")+"/")+S)),L.push(pe)),1;if(Se=0,ce=ce===""?".":ce+":",G(S))for(var ve=0;ve<S.length;ve++){me=S[ve];var Pe=ce+rt(me,ve);Se+=Mt(me,L,ie,Pe,pe)}else if(Pe=v(S),typeof Pe=="function")for(S=Pe.call(S),ve=0;!(me=S.next()).done;)me=me.value,Pe=ce+rt(me,ve++),Se+=Mt(me,L,ie,Pe,pe);else if(me==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Se}function qt(S,L,ie){if(S==null)return S;var ce=[],pe=0;return Mt(S,ce,"","",function(me){return L.call(ie,me,pe++)}),ce}function pt(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(ie){(S._status===0||S._status===-1)&&(S._status=1,S._result=ie)},function(ie){(S._status===0||S._status===-1)&&(S._status=2,S._result=ie)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var De={current:null},W={transition:null},Z={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:W,ReactCurrentOwner:de};function H(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:qt,forEach:function(S,L,ie){qt(S,function(){L.apply(this,arguments)},ie)},count:function(S){var L=0;return qt(S,function(){L++}),L},toArray:function(S){return qt(S,function(L){return L})||[]},only:function(S){if(!ae(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},se.Component=b,se.Fragment=n,se.Profiler=l,se.PureComponent=P,se.StrictMode=s,se.Suspense=p,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,se.act=H,se.cloneElement=function(S,L,ie){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ce=R({},S.props),pe=S.key,me=S.ref,Se=S._owner;if(L!=null){if(L.ref!==void 0&&(me=L.ref,Se=de.current),L.key!==void 0&&(pe=""+L.key),S.type&&S.type.defaultProps)var ve=S.type.defaultProps;for(Pe in L)he.call(L,Pe)&&!q.hasOwnProperty(Pe)&&(ce[Pe]=L[Pe]===void 0&&ve!==void 0?ve[Pe]:L[Pe])}var Pe=arguments.length-2;if(Pe===1)ce.children=ie;else if(1<Pe){ve=Array(Pe);for(var Et=0;Et<Pe;Et++)ve[Et]=arguments[Et+2];ce.children=ve}return{$$typeof:r,type:S.type,key:pe,ref:me,props:ce,_owner:Se}},se.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},se.createElement=te,se.createFactory=function(S){var L=te.bind(null,S);return L.type=S,L},se.createRef=function(){return{current:null}},se.forwardRef=function(S){return{$$typeof:f,render:S}},se.isValidElement=ae,se.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:pt}},se.memo=function(S,L){return{$$typeof:g,type:S,compare:L===void 0?null:L}},se.startTransition=function(S){var L=W.transition;W.transition={};try{S()}finally{W.transition=L}},se.unstable_act=H,se.useCallback=function(S,L){return De.current.useCallback(S,L)},se.useContext=function(S){return De.current.useContext(S)},se.useDebugValue=function(){},se.useDeferredValue=function(S){return De.current.useDeferredValue(S)},se.useEffect=function(S,L){return De.current.useEffect(S,L)},se.useId=function(){return De.current.useId()},se.useImperativeHandle=function(S,L,ie){return De.current.useImperativeHandle(S,L,ie)},se.useInsertionEffect=function(S,L){return De.current.useInsertionEffect(S,L)},se.useLayoutEffect=function(S,L){return De.current.useLayoutEffect(S,L)},se.useMemo=function(S,L){return De.current.useMemo(S,L)},se.useReducer=function(S,L,ie){return De.current.useReducer(S,L,ie)},se.useRef=function(S){return De.current.useRef(S)},se.useState=function(S){return De.current.useState(S)},se.useSyncExternalStore=function(S,L,ie){return De.current.useSyncExternalStore(S,L,ie)},se.useTransition=function(){return De.current.useTransition()},se.version="18.3.1",se}var bp;function Wu(){return bp||(bp=1,qc.exports=s0()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function o0(){if(Ap)return cs;Ap=1;var r=Wu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var y,w={},v=null,N=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(N=p.ref);for(y in p)s.call(p,y)&&!c.hasOwnProperty(y)&&(w[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)w[y]===void 0&&(w[y]=p[y]);return{$$typeof:e,type:f,key:v,ref:N,props:w,_owner:l.current}}return cs.Fragment=n,cs.jsx=u,cs.jsxs=u,cs}var Op;function l0(){return Op||(Op=1,Qc.exports=o0()),Qc.exports}var _=l0(),Y=Wu();const Ym=qm(Y);var rl={},Yc={exports:{}},wt={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function a0(){return Dp||(Dp=1,(function(r){function e(W,Z){var H=W.length;W.push(Z);e:for(;0<H;){var S=H-1>>>1,L=W[S];if(0<l(L,Z))W[S]=Z,W[H]=L,H=S;else break e}}function n(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var Z=W[0],H=W.pop();if(H!==Z){W[0]=H;e:for(var S=0,L=W.length,ie=L>>>1;S<ie;){var ce=2*(S+1)-1,pe=W[ce],me=ce+1,Se=W[me];if(0>l(pe,H))me<L&&0>l(Se,pe)?(W[S]=Se,W[me]=H,S=me):(W[S]=pe,W[ce]=H,S=ce);else if(me<L&&0>l(Se,H))W[S]=Se,W[me]=H,S=me;else break e}}return Z}function l(W,Z){var H=W.sortIndex-Z.sortIndex;return H!==0?H:W.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,w=null,v=3,N=!1,R=!1,O=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(W){for(var Z=n(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=W)s(g),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(g)}}function G(W){if(O=!1,z(W),!R)if(n(p)!==null)R=!0,pt(he);else{var Z=n(g);Z!==null&&De(G,Z.startTime-W)}}function he(W,Z){R=!1,O&&(O=!1,A(te),te=-1),N=!0;var H=v;try{for(z(Z),w=n(p);w!==null&&(!(w.expirationTime>Z)||W&&!Ee());){var S=w.callback;if(typeof S=="function"){w.callback=null,v=w.priorityLevel;var L=S(w.expirationTime<=Z);Z=r.unstable_now(),typeof L=="function"?w.callback=L:w===n(p)&&s(p),z(Z)}else s(p);w=n(p)}if(w!==null)var ie=!0;else{var ce=n(g);ce!==null&&De(G,ce.startTime-Z),ie=!1}return ie}finally{w=null,v=H,N=!1}}var de=!1,q=null,te=-1,ye=5,ae=-1;function Ee(){return!(r.unstable_now()-ae<ye)}function We(){if(q!==null){var W=r.unstable_now();ae=W;var Z=!0;try{Z=q(!0,W)}finally{Z?rt():(de=!1,q=null)}}else de=!1}var rt;if(typeof P=="function")rt=function(){P(We)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,qt=Mt.port2;Mt.port1.onmessage=We,rt=function(){qt.postMessage(null)}}else rt=function(){b(We,0)};function pt(W){q=W,de||(de=!0,rt())}function De(W,Z){te=b(function(){W(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){R||N||(R=!0,pt(he))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(W){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var H=v;v=Z;try{return W()}finally{v=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,Z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var H=v;v=W;try{return Z()}finally{v=H}},r.unstable_scheduleCallback=function(W,Z,H){var S=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,W){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=H+L,W={id:y++,callback:Z,priorityLevel:W,startTime:H,expirationTime:L,sortIndex:-1},H>S?(W.sortIndex=H,e(g,W),n(p)===null&&W===n(g)&&(O?(A(te),te=-1):O=!0,De(G,H-S))):(W.sortIndex=L,e(p,W),R||N||(R=!0,pt(he))),W},r.unstable_shouldYield=Ee,r.unstable_wrapCallback=function(W){var Z=v;return function(){var H=v;v=Z;try{return W.apply(this,arguments)}finally{v=H}}}})(Jc)),Jc}var Lp;function c0(){return Lp||(Lp=1,Xc.exports=a0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function u0(){if(Mp)return wt;Mp=1;var r=Wu(),e=c0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function v(t){return p.call(w,t)?!0:p.call(y,t)?!1:g.test(t)?w[t]=!0:(y[t]=!0,!1)}function N(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,a){if(i===null||typeof i>"u"||N(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){b[t]=new O(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];b[i]=new O(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){b[t]=new O(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){b[t]=new O(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){b[t]=new O(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){b[t]=new O(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){b[t]=new O(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){b[t]=new O(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){b[t]=new O(t,5,!1,t.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(A,P);b[i]=new O(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(A,P);b[i]=new O(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(A,P);b[i]=new O(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){b[t]=new O(t,1,!1,t.toLowerCase(),null,!1,!1)}),b.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){b[t]=new O(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,i,o,a){var d=b.hasOwnProperty(i)?b[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,a)&&(o=null),a||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var G=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),de=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),We=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Mt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),W=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,S;function L(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var ie=!1;function ce(t,i){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){var a=T}Reflect.construct(t,[],i)}else{try{i.call()}catch(T){a=T}t.call(i.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,x=h.length-1;1<=m&&0<=x&&d[m]!==h[x];)x--;for(;1<=m&&0<=x;m--,x--)if(d[m]!==h[x]){if(m!==1||x!==1)do if(m--,x--,0>x||d[m]!==h[x]){var C=`
`+d[m].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=m&&0<=x);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function pe(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case de:return"Portal";case ye:return"Profiler";case te:return"StrictMode";case rt:return"Suspense";case Mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ee:return(t.displayName||"Context")+".Consumer";case ae:return(t._context.displayName||"Context")+".Provider";case We:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qt:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case pt:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(t){var i=Pe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Gs(t){t._valueTracker||(t._valueTracker=Et(t))}function Ld(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Pe(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Ks(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ta(t,i){var o=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Md(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jd(t,i){i=i.checked,i!=null&&z(t,"checked",i,!1)}function na(t,i){jd(t,i);var o=ve(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ra(t,i.type,o):i.hasOwnProperty("defaultValue")&&ra(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Fd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ra(t,i,o){(i!=="number"||Ks(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Si=Array.isArray;function Rr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ia(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ud(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Si(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ve(o)}}function zd(t,i){var o=ve(i.value),a=ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Wd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Vd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qs,Bd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ii(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){cy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ki[i]=ki[t]})});function Hd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ki.hasOwnProperty(t)&&ki[t]?(""+i).trim():i+"px"}function $d(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=Hd(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var uy=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(t,i){if(i){if(uy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function la(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Pr=null,br=null;function Gd(t){if(t=Qi(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),ua(t.stateNode,t.type,i))}}function Kd(t){Pr?br?br.push(t):br=[t]:Pr=t}function Qd(){if(Pr){var t=Pr,i=br;if(br=Pr=null,Gd(t),i)for(t=0;t<i.length;t++)Gd(i[t])}}function qd(t,i){return t(i)}function Yd(){}var da=!1;function Xd(t,i,o){if(da)return t(i,o);da=!0;try{return qd(t,i,o)}finally{da=!1,(Pr!==null||br!==null)&&(Yd(),Qd())}}function Ni(t,i){var o=t.stateNode;if(o===null)return null;var a=yo(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ha=!1;if(f)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{ha=!1}function dy(t,i,o,a,d,h,m,x,C){var T=Array.prototype.slice.call(arguments,3);try{i.apply(o,T)}catch(M){this.onError(M)}}var Ri=!1,qs=null,Ys=!1,fa=null,hy={onError:function(t){Ri=!0,qs=t}};function fy(t,i,o,a,d,h,m,x,C){Ri=!1,qs=null,dy.apply(hy,arguments)}function py(t,i,o,a,d,h,m,x,C){if(fy.apply(this,arguments),Ri){if(Ri){var T=qs;Ri=!1,qs=null}else throw Error(n(198));Ys||(Ys=!0,fa=T)}}function ir(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Jd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Zd(t){if(ir(t)!==t)throw Error(n(188))}function my(t){var i=t.alternate;if(!i){if(i=ir(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Zd(d),t;if(h===a)return Zd(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,x=d.child;x;){if(x===o){m=!0,o=d,a=h;break}if(x===a){m=!0,a=d,o=h;break}x=x.sibling}if(!m){for(x=h.child;x;){if(x===o){m=!0,o=h,a=d;break}if(x===a){m=!0,a=h,o=d;break}x=x.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function eh(t){return t=my(t),t!==null?th(t):null}function th(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=th(t);if(i!==null)return i;t=t.sibling}return null}var nh=e.unstable_scheduleCallback,rh=e.unstable_cancelCallback,gy=e.unstable_shouldYield,_y=e.unstable_requestPaint,Fe=e.unstable_now,yy=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,ih=e.unstable_UserBlockingPriority,Xs=e.unstable_NormalPriority,vy=e.unstable_LowPriority,sh=e.unstable_IdlePriority,Js=null,Yt=null;function wy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Js,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Ey,xy=Math.log,Cy=Math.LN2;function Ey(t){return t>>>=0,t===0?32:31-(xy(t)/Cy|0)|0}var Zs=64,eo=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function to(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var x=m&~d;x!==0?a=Pi(x):(h&=m,h!==0&&(a=Pi(h)))}else m=o&~d,m!==0?a=Pi(m):h!==0&&(a=Pi(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&d)===0&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-jt(i),d=1<<o,a|=t[o],i&=~d;return a}function Sy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),x=1<<m,C=d[m];C===-1?((x&o)===0||(x&a)!==0)&&(d[m]=Sy(x,i)):C<=i&&(t.expiredLanes|=x),h&=~x}}function ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oh(){var t=Zs;return Zs<<=1,(Zs&4194240)===0&&(Zs=64),t}function ga(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function bi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function ky(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function _a(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-jt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var we=0;function lh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ah,ya,ch,uh,dh,va=!1,no=[],Cn=null,En=null,Sn=null,Ai=new Map,Oi=new Map,In=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(t,i){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(i.pointerId)}}function Di(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Qi(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Ty(t,i,o,a,d){switch(i){case"focusin":return Cn=Di(Cn,t,i,o,a,d),!0;case"dragenter":return En=Di(En,t,i,o,a,d),!0;case"mouseover":return Sn=Di(Sn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return Ai.set(h,Di(Ai.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,Oi.set(h,Di(Oi.get(h)||null,t,i,o,a,d)),!0}return!1}function fh(t){var i=sr(t.target);if(i!==null){var o=ir(i);if(o!==null){if(i=o.tag,i===13){if(i=Jd(o),i!==null){t.blockedOn=i,dh(t.priority,function(){ch(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=xa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);aa=a,o.target.dispatchEvent(a),aa=null}else return i=Qi(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function ph(t,i,o){ro(t)&&o.delete(i)}function Ry(){va=!1,Cn!==null&&ro(Cn)&&(Cn=null),En!==null&&ro(En)&&(En=null),Sn!==null&&ro(Sn)&&(Sn=null),Ai.forEach(ph),Oi.forEach(ph)}function Li(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ry)))}function Mi(t){function i(d){return Li(d,t)}if(0<no.length){Li(no[0],t);for(var o=1;o<no.length;o++){var a=no[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Cn!==null&&Li(Cn,t),En!==null&&Li(En,t),Sn!==null&&Li(Sn,t),Ai.forEach(i),Oi.forEach(i),o=0;o<In.length;o++)a=In[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<In.length&&(o=In[0],o.blockedOn===null);)fh(o),o.blockedOn===null&&In.shift()}var Ar=G.ReactCurrentBatchConfig,io=!0;function Py(t,i,o,a){var d=we,h=Ar.transition;Ar.transition=null;try{we=1,wa(t,i,o,a)}finally{we=d,Ar.transition=h}}function by(t,i,o,a){var d=we,h=Ar.transition;Ar.transition=null;try{we=4,wa(t,i,o,a)}finally{we=d,Ar.transition=h}}function wa(t,i,o,a){if(io){var d=xa(t,i,o,a);if(d===null)Fa(t,i,a,so,o),hh(t,a);else if(Ty(d,t,i,o,a))a.stopPropagation();else if(hh(t,a),i&4&&-1<Ny.indexOf(t)){for(;d!==null;){var h=Qi(d);if(h!==null&&ah(h),h=xa(t,i,o,a),h===null&&Fa(t,i,a,so,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var so=null;function xa(t,i,o,a){if(so=null,t=ca(a),t=sr(t),t!==null)if(i=ir(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Jd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function mh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yy()){case pa:return 1;case ih:return 4;case Xs:case vy:return 16;case sh:return 536870912;default:return 16}default:return 16}}var kn=null,Ca=null,oo=null;function gh(){if(oo)return oo;var t,i=Ca,o=i.length,a,d="value"in kn?kn.value:kn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return oo=d.slice(t,1<a?1-a:void 0)}function lo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function _h(){return!1}function St(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(o=t[x],this[x]=o?o(h):h[x]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ao:_h,this.isPropagationStopped=_h,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=St(Or),ji=H({},Or,{view:0,detail:0}),Ay=St(ji),Sa,Ia,Fi,co=H({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(Sa=t.screenX-Fi.screenX,Ia=t.screenY-Fi.screenY):Ia=Sa=0,Fi=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),yh=St(co),Oy=H({},co,{dataTransfer:0}),Dy=St(Oy),Ly=H({},ji,{relatedTarget:0}),ka=St(Ly),My=H({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=St(My),Fy=H({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=St(Fy),zy=H({},Or,{data:0}),vh=St(zy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=By[t])?!!i[t]:!1}function Na(){return Hy}var $y=H({},ji,{key:function(t){if(t.key){var i=Wy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gy=St($y),Ky=H({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=St(Ky),Qy=H({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),qy=St(Qy),Yy=H({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=St(Yy),Jy=H({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=St(Jy),ev=[9,13,27,32],Ta=f&&"CompositionEvent"in window,Ui=null;f&&"documentMode"in document&&(Ui=document.documentMode);var tv=f&&"TextEvent"in window&&!Ui,xh=f&&(!Ta||Ui&&8<Ui&&11>=Ui),Ch=" ",Eh=!1;function Sh(t,i){switch(t){case"keyup":return ev.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function nv(t,i){switch(t){case"compositionend":return Ih(i);case"keypress":return i.which!==32?null:(Eh=!0,Ch);case"textInput":return t=i.data,t===Ch&&Eh?null:t;default:return null}}function rv(t,i){if(Dr)return t==="compositionend"||!Ta&&Sh(t,i)?(t=gh(),oo=Ca=kn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!iv[t.type]:i==="textarea"}function Nh(t,i,o,a){Kd(a),i=mo(i,"onChange"),0<i.length&&(o=new Ea("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var zi=null,Wi=null;function sv(t){$h(t,0)}function uo(t){var i=Ur(t);if(Ld(i))return t}function ov(t,i){if(t==="change")return i}var Th=!1;if(f){var Ra;if(f){var Pa="oninput"in document;if(!Pa){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Pa=typeof Rh.oninput=="function"}Ra=Pa}else Ra=!1;Th=Ra&&(!document.documentMode||9<document.documentMode)}function Ph(){zi&&(zi.detachEvent("onpropertychange",bh),Wi=zi=null)}function bh(t){if(t.propertyName==="value"&&uo(Wi)){var i=[];Nh(i,Wi,t,ca(t)),Xd(sv,i)}}function lv(t,i,o){t==="focusin"?(Ph(),zi=i,Wi=o,zi.attachEvent("onpropertychange",bh)):t==="focusout"&&Ph()}function av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(Wi)}function cv(t,i){if(t==="click")return uo(i)}function uv(t,i){if(t==="input"||t==="change")return uo(i)}function dv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:dv;function Vi(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Ft(t[d],i[d]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,i){var o=Ah(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ah(o)}}function Dh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var t=window,i=Ks();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ks(t.document)}return i}function ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function hv(t){var i=Lh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dh(o.ownerDocument.documentElement,o)){if(a!==null&&ba(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=Oh(o,h);var m=Oh(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fv=f&&"documentMode"in document&&11>=document.documentMode,Lr=null,Aa=null,Bi=null,Oa=!1;function Mh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Oa||Lr==null||Lr!==Ks(a)||(a=Lr,"selectionStart"in a&&ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bi&&Vi(Bi,a)||(Bi=a,a=mo(Aa,"onSelect"),0<a.length&&(i=new Ea("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Lr)))}function ho(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Mr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Da={},jh={};f&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function fo(t){if(Da[t])return Da[t];if(!Mr[t])return t;var i=Mr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in jh)return Da[t]=i[o];return t}var Fh=fo("animationend"),Uh=fo("animationiteration"),zh=fo("animationstart"),Wh=fo("transitionend"),Vh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){Vh.set(t,i),c(i,[t])}for(var La=0;La<Bh.length;La++){var Ma=Bh[La],pv=Ma.toLowerCase(),mv=Ma[0].toUpperCase()+Ma.slice(1);Nn(pv,"on"+mv)}Nn(Fh,"onAnimationEnd"),Nn(Uh,"onAnimationIteration"),Nn(zh,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function Hh(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,py(a,i,void 0,t),t.currentTarget=null}function $h(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var x=a[m],C=x.instance,T=x.currentTarget;if(x=x.listener,C!==h&&d.isPropagationStopped())break e;Hh(d,x,T),h=C}else for(m=0;m<a.length;m++){if(x=a[m],C=x.instance,T=x.currentTarget,x=x.listener,C!==h&&d.isPropagationStopped())break e;Hh(d,x,T),h=C}}}if(Ys)throw t=fa,Ys=!1,fa=null,t}function Te(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(Gh(i,t,2,!1),o.add(a))}function ja(t,i,o){var a=0;i&&(a|=4),Gh(o,t,a,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function $i(t){if(!t[po]){t[po]=!0,s.forEach(function(o){o!=="selectionchange"&&(gv.has(o)||ja(o,!1,t),ja(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,ja("selectionchange",!1,i))}}function Gh(t,i,o,a){switch(mh(i)){case 1:var d=Py;break;case 4:d=by;break;default:d=wa}o=d.bind(null,i,o,t),d=void 0,!ha||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,d){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var x=a.stateNode.containerInfo;if(x===d||x.nodeType===8&&x.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var C=m.tag;if((C===3||C===4)&&(C=m.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;m=m.return}for(;x!==null;){if(m=sr(x),m===null)return;if(C=m.tag,C===5||C===6){a=h=m;continue e}x=x.parentNode}}a=a.return}Xd(function(){var T=h,M=ca(o),j=[];e:{var D=Vh.get(t);if(D!==void 0){var V=Ea,$=t;switch(t){case"keypress":if(lo(o)===0)break e;case"keydown":case"keyup":V=Gy;break;case"focusin":$="focus",V=ka;break;case"focusout":$="blur",V=ka;break;case"beforeblur":case"afterblur":V=ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=qy;break;case Fh:case Uh:case zh:V=jy;break;case Wh:V=Xy;break;case"scroll":V=Ay;break;case"wheel":V=Zy;break;case"copy":case"cut":case"paste":V=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=wh}var K=(i&4)!==0,Ue=!K&&t==="scroll",I=K?D!==null?D+"Capture":null:D;K=[];for(var E=T,k;E!==null;){k=E;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,I!==null&&(F=Ni(E,I),F!=null&&K.push(Gi(E,F,k)))),Ue)break;E=E.return}0<K.length&&(D=new V(D,$,null,o,M),j.push({event:D,listeners:K}))}}if((i&7)===0){e:{if(D=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",D&&o!==aa&&($=o.relatedTarget||o.fromElement)&&(sr($)||$[sn]))break e;if((V||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,V?($=o.relatedTarget||o.toElement,V=T,$=$?sr($):null,$!==null&&(Ue=ir($),$!==Ue||$.tag!==5&&$.tag!==6)&&($=null)):(V=null,$=T),V!==$)){if(K=yh,F="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(K=wh,F="onPointerLeave",I="onPointerEnter",E="pointer"),Ue=V==null?D:Ur(V),k=$==null?D:Ur($),D=new K(F,E+"leave",V,o,M),D.target=Ue,D.relatedTarget=k,F=null,sr(M)===T&&(K=new K(I,E+"enter",$,o,M),K.target=k,K.relatedTarget=Ue,F=K),Ue=F,V&&$)t:{for(K=V,I=$,E=0,k=K;k;k=jr(k))E++;for(k=0,F=I;F;F=jr(F))k++;for(;0<E-k;)K=jr(K),E--;for(;0<k-E;)I=jr(I),k--;for(;E--;){if(K===I||I!==null&&K===I.alternate)break t;K=jr(K),I=jr(I)}K=null}else K=null;V!==null&&Kh(j,D,V,K,!1),$!==null&&Ue!==null&&Kh(j,Ue,$,K,!0)}}e:{if(D=T?Ur(T):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var Q=ov;else if(kh(D))if(Th)Q=uv;else{Q=av;var X=lv}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(Q=cv);if(Q&&(Q=Q(t,T))){Nh(j,Q,o,M);break e}X&&X(t,D,T),t==="focusout"&&(X=D._wrapperState)&&X.controlled&&D.type==="number"&&ra(D,"number",D.value)}switch(X=T?Ur(T):window,t){case"focusin":(kh(X)||X.contentEditable==="true")&&(Lr=X,Aa=T,Bi=null);break;case"focusout":Bi=Aa=Lr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Mh(j,o,M);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Mh(j,o,M)}var J;if(Ta)e:{switch(t){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Dr?Sh(t,o)&&(ne="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ne="onCompositionStart");ne&&(xh&&o.locale!=="ko"&&(Dr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Dr&&(J=gh()):(kn=M,Ca="value"in kn?kn.value:kn.textContent,Dr=!0)),X=mo(T,ne),0<X.length&&(ne=new vh(ne,t,null,o,M),j.push({event:ne,listeners:X}),J?ne.data=J:(J=Ih(o),J!==null&&(ne.data=J)))),(J=tv?nv(t,o):rv(t,o))&&(T=mo(T,"onBeforeInput"),0<T.length&&(M=new vh("onBeforeInput","beforeinput",null,o,M),j.push({event:M,listeners:T}),M.data=J))}$h(j,i)})}function Gi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function mo(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Ni(t,o),h!=null&&a.unshift(Gi(t,h,d)),h=Ni(t,i),h!=null&&a.push(Gi(t,h,d))),t=t.return}return a}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var x=o,C=x.alternate,T=x.stateNode;if(C!==null&&C===a)break;x.tag===5&&T!==null&&(x=T,d?(C=Ni(o,h),C!=null&&m.unshift(Gi(o,C,x))):d||(C=Ni(o,h),C!=null&&m.push(Gi(o,C,x)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var _v=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(_v,`
`).replace(yv,"")}function go(t,i,o){if(i=Qh(i),Qh(t)!==i&&o)throw Error(n(425))}function _o(){}var Ua=null,za=null;function Wa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(xv)}:Va;function xv(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Mi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Mi(i)}function Tn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Fr,Ki="__reactProps$"+Fr,sn="__reactContainer$"+Fr,Ha="__reactEvents$"+Fr,Cv="__reactListeners$"+Fr,Ev="__reactHandles$"+Fr;function sr(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Yh(t);t!==null;){if(o=t[Xt])return o;t=Yh(t)}return i}t=o,o=t.parentNode}return null}function Qi(t){return t=t[Xt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[Ki]||null}var $a=[],zr=-1;function Rn(t){return{current:t}}function Re(t){0>zr||(t.current=$a[zr],$a[zr]=null,zr--)}function Ie(t,i){zr++,$a[zr]=t.current,t.current=i}var Pn={},it=Rn(Pn),mt=Rn(!1),or=Pn;function Wr(t,i){var o=t.type.contextTypes;if(!o)return Pn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function gt(t){return t=t.childContextTypes,t!=null}function vo(){Re(mt),Re(it)}function Xh(t,i,o){if(it.current!==Pn)throw Error(n(168));Ie(it,i),Ie(mt,o)}function Jh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Se(t)||"Unknown",d));return H({},o,a)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,or=it.current,Ie(it,t),Ie(mt,mt.current),!0}function Zh(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Jh(t,i,or),a.__reactInternalMemoizedMergedChildContext=t,Re(mt),Re(it),Ie(it,t)):Re(mt),Ie(mt,o)}var on=null,xo=!1,Ga=!1;function ef(t){on===null?on=[t]:on.push(t)}function Sv(t){xo=!0,ef(t)}function bn(){if(!Ga&&on!==null){Ga=!0;var t=0,i=we;try{var o=on;for(we=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}on=null,xo=!1}catch(d){throw on!==null&&(on=on.slice(t+1)),nh(pa,bn),d}finally{we=i,Ga=!1}}return null}var Vr=[],Br=0,Co=null,Eo=0,Tt=[],Rt=0,lr=null,ln=1,an="";function ar(t,i){Vr[Br++]=Eo,Vr[Br++]=Co,Co=t,Eo=i}function tf(t,i,o){Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=lr,lr=t;var a=ln;t=an;var d=32-jt(a)-1;a&=~(1<<d),o+=1;var h=32-jt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,ln=1<<32-jt(i)+d|o<<d|a,an=h+t}else ln=1<<h|o<<d|a,an=t}function Ka(t){t.return!==null&&(ar(t,1),tf(t,1,0))}function Qa(t){for(;t===Co;)Co=Vr[--Br],Vr[Br]=null,Eo=Vr[--Br],Vr[Br]=null;for(;t===lr;)lr=Tt[--Rt],Tt[Rt]=null,an=Tt[--Rt],Tt[Rt]=null,ln=Tt[--Rt],Tt[Rt]=null}var It=null,kt=null,be=!1,Ut=null;function nf(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function rf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,kt=Tn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=lr!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,kt=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(be){var i=kt;if(i){var o=i;if(!rf(t,i)){if(qa(t))throw Error(n(418));i=Tn(o.nextSibling);var a=It;i&&rf(t,i)?nf(a,o):(t.flags=t.flags&-4097|2,be=!1,It=t)}}else{if(qa(t))throw Error(n(418));t.flags=t.flags&-4097|2,be=!1,It=t}}}function sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function So(t){if(t!==It)return!1;if(!be)return sf(t),be=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Wa(t.type,t.memoizedProps)),i&&(i=kt)){if(qa(t))throw of(),Error(n(418));for(;i;)nf(t,i),i=Tn(i.nextSibling)}if(sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kt=Tn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kt=null}}else kt=It?Tn(t.stateNode.nextSibling):null;return!0}function of(){for(var t=kt;t;)t=Tn(t.nextSibling)}function Hr(){kt=It=null,be=!1}function Xa(t){Ut===null?Ut=[t]:Ut.push(t)}var Iv=G.ReactCurrentBatchConfig;function qi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var x=d.refs;m===null?delete x[h]:x[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Io(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function lf(t){var i=t._init;return i(t._payload)}function af(t){function i(I,E){if(t){var k=I.deletions;k===null?(I.deletions=[E],I.flags|=16):k.push(E)}}function o(I,E){if(!t)return null;for(;E!==null;)i(I,E),E=E.sibling;return null}function a(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function d(I,E){return I=Un(I,E),I.index=0,I.sibling=null,I}function h(I,E,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function x(I,E,k,F){return E===null||E.tag!==6?(E=Vc(k,I.mode,F),E.return=I,E):(E=d(E,k),E.return=I,E)}function C(I,E,k,F){var Q=k.type;return Q===q?M(I,E,k.props.children,F,k.key):E!==null&&(E.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===pt&&lf(Q)===E.type)?(F=d(E,k.props),F.ref=qi(I,E,k),F.return=I,F):(F=qo(k.type,k.key,k.props,null,I.mode,F),F.ref=qi(I,E,k),F.return=I,F)}function T(I,E,k,F){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=Bc(k,I.mode,F),E.return=I,E):(E=d(E,k.children||[]),E.return=I,E)}function M(I,E,k,F,Q){return E===null||E.tag!==7?(E=gr(k,I.mode,F,Q),E.return=I,E):(E=d(E,k),E.return=I,E)}function j(I,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vc(""+E,I.mode,k),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case he:return k=qo(E.type,E.key,E.props,null,I.mode,k),k.ref=qi(I,null,E),k.return=I,k;case de:return E=Bc(E,I.mode,k),E.return=I,E;case pt:var F=E._init;return j(I,F(E._payload),k)}if(Si(E)||Z(E))return E=gr(E,I.mode,k,null),E.return=I,E;Io(I,E)}return null}function D(I,E,k,F){var Q=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return Q!==null?null:x(I,E,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case he:return k.key===Q?C(I,E,k,F):null;case de:return k.key===Q?T(I,E,k,F):null;case pt:return Q=k._init,D(I,E,Q(k._payload),F)}if(Si(k)||Z(k))return Q!==null?null:M(I,E,k,F,null);Io(I,k)}return null}function V(I,E,k,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(k)||null,x(E,I,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case he:return I=I.get(F.key===null?k:F.key)||null,C(E,I,F,Q);case de:return I=I.get(F.key===null?k:F.key)||null,T(E,I,F,Q);case pt:var X=F._init;return V(I,E,k,X(F._payload),Q)}if(Si(F)||Z(F))return I=I.get(k)||null,M(E,I,F,Q,null);Io(E,F)}return null}function $(I,E,k,F){for(var Q=null,X=null,J=E,ne=E=0,Qe=null;J!==null&&ne<k.length;ne++){J.index>ne?(Qe=J,J=null):Qe=J.sibling;var ge=D(I,J,k[ne],F);if(ge===null){J===null&&(J=Qe);break}t&&J&&ge.alternate===null&&i(I,J),E=h(ge,E,ne),X===null?Q=ge:X.sibling=ge,X=ge,J=Qe}if(ne===k.length)return o(I,J),be&&ar(I,ne),Q;if(J===null){for(;ne<k.length;ne++)J=j(I,k[ne],F),J!==null&&(E=h(J,E,ne),X===null?Q=J:X.sibling=J,X=J);return be&&ar(I,ne),Q}for(J=a(I,J);ne<k.length;ne++)Qe=V(J,I,ne,k[ne],F),Qe!==null&&(t&&Qe.alternate!==null&&J.delete(Qe.key===null?ne:Qe.key),E=h(Qe,E,ne),X===null?Q=Qe:X.sibling=Qe,X=Qe);return t&&J.forEach(function(zn){return i(I,zn)}),be&&ar(I,ne),Q}function K(I,E,k,F){var Q=Z(k);if(typeof Q!="function")throw Error(n(150));if(k=Q.call(k),k==null)throw Error(n(151));for(var X=Q=null,J=E,ne=E=0,Qe=null,ge=k.next();J!==null&&!ge.done;ne++,ge=k.next()){J.index>ne?(Qe=J,J=null):Qe=J.sibling;var zn=D(I,J,ge.value,F);if(zn===null){J===null&&(J=Qe);break}t&&J&&zn.alternate===null&&i(I,J),E=h(zn,E,ne),X===null?Q=zn:X.sibling=zn,X=zn,J=Qe}if(ge.done)return o(I,J),be&&ar(I,ne),Q;if(J===null){for(;!ge.done;ne++,ge=k.next())ge=j(I,ge.value,F),ge!==null&&(E=h(ge,E,ne),X===null?Q=ge:X.sibling=ge,X=ge);return be&&ar(I,ne),Q}for(J=a(I,J);!ge.done;ne++,ge=k.next())ge=V(J,I,ne,ge.value,F),ge!==null&&(t&&ge.alternate!==null&&J.delete(ge.key===null?ne:ge.key),E=h(ge,E,ne),X===null?Q=ge:X.sibling=ge,X=ge);return t&&J.forEach(function(i0){return i(I,i0)}),be&&ar(I,ne),Q}function Ue(I,E,k,F){if(typeof k=="object"&&k!==null&&k.type===q&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case he:e:{for(var Q=k.key,X=E;X!==null;){if(X.key===Q){if(Q=k.type,Q===q){if(X.tag===7){o(I,X.sibling),E=d(X,k.props.children),E.return=I,I=E;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===pt&&lf(Q)===X.type){o(I,X.sibling),E=d(X,k.props),E.ref=qi(I,X,k),E.return=I,I=E;break e}o(I,X);break}else i(I,X);X=X.sibling}k.type===q?(E=gr(k.props.children,I.mode,F,k.key),E.return=I,I=E):(F=qo(k.type,k.key,k.props,null,I.mode,F),F.ref=qi(I,E,k),F.return=I,I=F)}return m(I);case de:e:{for(X=k.key;E!==null;){if(E.key===X)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){o(I,E.sibling),E=d(E,k.children||[]),E.return=I,I=E;break e}else{o(I,E);break}else i(I,E);E=E.sibling}E=Bc(k,I.mode,F),E.return=I,I=E}return m(I);case pt:return X=k._init,Ue(I,E,X(k._payload),F)}if(Si(k))return $(I,E,k,F);if(Z(k))return K(I,E,k,F);Io(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(o(I,E.sibling),E=d(E,k),E.return=I,I=E):(o(I,E),E=Vc(k,I.mode,F),E.return=I,I=E),m(I)):o(I,E)}return Ue}var $r=af(!0),cf=af(!1),ko=Rn(null),No=null,Gr=null,Ja=null;function Za(){Ja=Gr=No=null}function ec(t){var i=ko.current;Re(ko),t._currentValue=i}function tc(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Kr(t,i){No=t,Ja=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_t=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:i,next:null},Gr===null){if(No===null)throw Error(n(308));Gr=t,No.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return i}var cr=null;function nc(t){cr===null?cr=[t]:cr.push(t)}function uf(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,nc(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,a)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var An=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function On(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,cn(t,o)}return d=a.interleaved,d===null?(i.next=i,nc(a)):(i.next=d.next,d.next=i),a.interleaved=i,cn(t,o)}function To(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}function hf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ro(t,i,o,a){var d=t.updateQueue;An=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var C=x,T=C.next;C.next=null,m===null?h=T:m.next=T,m=C;var M=t.alternate;M!==null&&(M=M.updateQueue,x=M.lastBaseUpdate,x!==m&&(x===null?M.firstBaseUpdate=T:x.next=T,M.lastBaseUpdate=C))}if(h!==null){var j=d.baseState;m=0,M=T=C=null,x=h;do{var D=x.lane,V=x.eventTime;if((a&D)===D){M!==null&&(M=M.next={eventTime:V,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var $=t,K=x;switch(D=i,V=o,K.tag){case 1:if($=K.payload,typeof $=="function"){j=$.call(V,j,D);break e}j=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=K.payload,D=typeof $=="function"?$.call(V,j,D):$,D==null)break e;j=H({},j,D);break e;case 2:An=!0}}x.callback!==null&&x.lane!==0&&(t.flags|=64,D=d.effects,D===null?d.effects=[x]:D.push(x))}else V={eventTime:V,lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},M===null?(T=M=V,C=j):M=M.next=V,m|=D;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;D=x,x=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(M===null&&(C=j),d.baseState=C,d.firstBaseUpdate=T,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);hr|=m,t.lanes=m,t.memoizedState=j}}function ff(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var Yi={},Jt=Rn(Yi),Xi=Rn(Yi),Ji=Rn(Yi);function ur(t){if(t===Yi)throw Error(n(174));return t}function ic(t,i){switch(Ie(Ji,i),Ie(Xi,t),Ie(Jt,Yi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=sa(i,t)}Re(Jt),Ie(Jt,i)}function Qr(){Re(Jt),Re(Xi),Re(Ji)}function pf(t){ur(Ji.current);var i=ur(Jt.current),o=sa(i,t.type);i!==o&&(Ie(Xi,t),Ie(Jt,o))}function sc(t){Xi.current===t&&(Re(Jt),Re(Xi))}var Ae=Rn(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function lc(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var bo=G.ReactCurrentDispatcher,ac=G.ReactCurrentBatchConfig,dr=0,Oe=null,Ve=null,Ge=null,Ao=!1,Zi=!1,es=0,kv=0;function st(){throw Error(n(321))}function cc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function uc(t,i,o,a,d,h){if(dr=h,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=t===null||t.memoizedState===null?Pv:bv,t=o(a,d),Zi){h=0;do{if(Zi=!1,es=0,25<=h)throw Error(n(301));h+=1,Ge=Ve=null,i.updateQueue=null,bo.current=Av,t=o(a,d)}while(Zi)}if(bo.current=Lo,i=Ve!==null&&Ve.next!==null,dr=0,Ge=Ve=Oe=null,Ao=!1,i)throw Error(n(300));return t}function dc(){var t=es!==0;return es=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Oe.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function bt(){if(Ve===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var i=Ge===null?Oe.memoizedState:Ge.next;if(i!==null)Ge=i,Ve=t;else{if(t===null)throw Error(n(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ge===null?Oe.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function ts(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Ve,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var x=m=null,C=null,T=h;do{var M=T.lane;if((dr&M)===M)C!==null&&(C=C.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var j={lane:M,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};C===null?(x=C=j,m=a):C=C.next=j,Oe.lanes|=M,hr|=M}T=T.next}while(T!==null&&T!==h);C===null?m=a:C.next=x,Ft(a,i.memoizedState)||(_t=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=C,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Oe.lanes|=h,hr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Ft(h,i.memoizedState)||(_t=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function mf(){}function gf(t,i){var o=Oe,a=bt(),d=i(),h=!Ft(a.memoizedState,d);if(h&&(a.memoizedState=d,_t=!0),a=a.queue,pc(vf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Ge!==null&&Ge.memoizedState.tag&1){if(o.flags|=2048,ns(9,yf.bind(null,o,a,d,i),void 0,null),Ke===null)throw Error(n(349));(dr&30)!==0||_f(o,i,d)}return d}function _f(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function yf(t,i,o,a){i.value=o,i.getSnapshot=a,wf(i)&&xf(t)}function vf(t,i,o){return o(function(){wf(i)&&xf(t)})}function wf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function xf(t){var i=cn(t,1);i!==null&&Bt(i,t,1,-1)}function Cf(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},i.queue=t,t=t.dispatch=Rv.bind(null,Oe,t),[i.memoizedState,t]}function ns(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Ef(){return bt().memoizedState}function Oo(t,i,o,a){var d=Zt();Oe.flags|=t,d.memoizedState=ns(1|i,o,void 0,a===void 0?null:a)}function Do(t,i,o,a){var d=bt();a=a===void 0?null:a;var h=void 0;if(Ve!==null){var m=Ve.memoizedState;if(h=m.destroy,a!==null&&cc(a,m.deps)){d.memoizedState=ns(i,o,h,a);return}}Oe.flags|=t,d.memoizedState=ns(1|i,o,h,a)}function Sf(t,i){return Oo(8390656,8,t,i)}function pc(t,i){return Do(2048,8,t,i)}function If(t,i){return Do(4,2,t,i)}function kf(t,i){return Do(4,4,t,i)}function Nf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Tf(t,i,o){return o=o!=null?o.concat([t]):null,Do(4,4,Nf.bind(null,i,t),o)}function mc(){}function Rf(t,i){var o=bt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Pf(t,i){var o=bt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cc(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function bf(t,i,o){return(dr&21)===0?(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=o):(Ft(o,i)||(o=oh(),Oe.lanes|=o,hr|=o,t.baseState=!0),i)}function Nv(t,i){var o=we;we=o!==0&&4>o?o:4,t(!0);var a=ac.transition;ac.transition={};try{t(!1),i()}finally{we=o,ac.transition=a}}function Af(){return bt().memoizedState}function Tv(t,i,o){var a=jn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Of(t))Df(i,o);else if(o=uf(t,i,o,a),o!==null){var d=ct();Bt(o,t,a,d),Lf(o,i,a)}}function Rv(t,i,o){var a=jn(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Of(t))Df(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,x=h(m,o);if(d.hasEagerState=!0,d.eagerState=x,Ft(x,m)){var C=i.interleaved;C===null?(d.next=d,nc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}o=uf(t,i,d,a),o!==null&&(d=ct(),Bt(o,t,a,d),Lf(o,i,a))}}function Of(t){var i=t.alternate;return t===Oe||i!==null&&i===Oe}function Df(t,i){Zi=Ao=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lf(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,_a(t,o)}}var Lo={readContext:Pt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Pv={readContext:Pt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:Sf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oo(4194308,4,Nf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oo(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Tv.bind(null,Oe,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:Cf,useDebugValue:mc,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Cf(!1),i=t[0];return t=Nv.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Oe,d=Zt();if(be){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ke===null)throw Error(n(349));(dr&30)!==0||_f(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Sf(vf.bind(null,a,h,t),[t]),a.flags|=2048,ns(9,yf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=Ke.identifierPrefix;if(be){var o=an,a=ln;o=(a&~(1<<32-jt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=es++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=kv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},bv={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:pc,useImperativeHandle:Tf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:hc,useRef:Ef,useState:function(){return hc(ts)},useDebugValue:mc,useDeferredValue:function(t){var i=bt();return bf(i,Ve.memoizedState,t)},useTransition:function(){var t=hc(ts)[0],i=bt().memoizedState;return[t,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:Af,unstable_isNewReconciler:!1},Av={readContext:Pt,useCallback:Rf,useContext:Pt,useEffect:pc,useImperativeHandle:Tf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:fc,useRef:Ef,useState:function(){return fc(ts)},useDebugValue:mc,useDeferredValue:function(t){var i=bt();return Ve===null?i.memoizedState=t:bf(i,Ve.memoizedState,t)},useTransition:function(){var t=fc(ts)[0],i=bt().memoizedState;return[t,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:Af,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function gc(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:H({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Mo={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),To(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ct(),d=jn(t),h=un(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=On(t,h,d),i!==null&&(Bt(i,t,d,a),To(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ct(),a=jn(t),d=un(o,a);d.tag=2,i!=null&&(d.callback=i),i=On(t,d,a),i!==null&&(Bt(i,t,a,o),To(i,t,a))}};function Mf(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Vi(o,a)||!Vi(d,h):!0}function jf(t,i,o){var a=!1,d=Pn,h=i.contextType;return typeof h=="object"&&h!==null?h=Pt(h):(d=gt(i)?or:it.current,a=i.contextTypes,h=(a=a!=null)?Wr(t,d):Pn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ff(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Mo.enqueueReplaceState(i,i.state,null)}function _c(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},rc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Pt(h):(h=gt(i)?or:it.current,d.context=Wr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(gc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Mo.enqueueReplaceState(d,d.state,null),Ro(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,i){try{var o="",a=i;do o+=pe(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function yc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Uf(t,i,o){o=un(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Bo||(Bo=!0,Dc=a),vc(t,i)},o}function zf(t,i,o){o=un(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Wf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Ov;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=Kv.bind(null,t,i,o),i.then(t,t))}function Vf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bf(t,i,o,a,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=un(-1,1),i.tag=2,On(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Dv=G.ReactCurrentOwner,_t=!1;function at(t,i,o,a){i.child=t===null?cf(i,null,o,a):$r(i,t.child,o,a)}function Hf(t,i,o,a,d){o=o.render;var h=i.ref;return Kr(i,d),a=uc(t,i,o,a,h,d),o=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(be&&o&&Ka(i),i.flags|=1,at(t,i,a,d),i.child)}function $f(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Wc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Gf(t,i,h,a,d)):(t=qo(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Vi,o(m,a)&&t.ref===i.ref)return dn(t,i,d)}return i.flags|=1,t=Un(h,a),t.ref=i.ref,t.return=i,i.child=t}function Gf(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Vi(h,a)&&t.ref===i.ref)if(_t=!1,i.pendingProps=a=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_t=!0);else return i.lanes=t.lanes,dn(t,i,d)}return wc(t,i,o,a,d)}function Kf(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Xr,Nt),Nt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ie(Xr,Nt),Nt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Ie(Xr,Nt),Nt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Ie(Xr,Nt),Nt|=a;return at(t,i,d,o),i.child}function Qf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function wc(t,i,o,a,d){var h=gt(o)?or:it.current;return h=Wr(i,h),Kr(i,d),o=uc(t,i,o,a,h,d),a=dc(),t!==null&&!_t?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(be&&a&&Ka(i),i.flags|=1,at(t,i,o,d),i.child)}function qf(t,i,o,a,d){if(gt(o)){var h=!0;wo(i)}else h=!1;if(Kr(i,d),i.stateNode===null)Fo(t,i),jf(i,o,a),_c(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,x=i.memoizedProps;m.props=x;var C=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Pt(T):(T=gt(o)?or:it.current,T=Wr(i,T));var M=o.getDerivedStateFromProps,j=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function";j||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==a||C!==T)&&Ff(i,m,a,T),An=!1;var D=i.memoizedState;m.state=D,Ro(i,a,m,d),C=i.memoizedState,x!==a||D!==C||mt.current||An?(typeof M=="function"&&(gc(i,o,M,a),C=i.memoizedState),(x=An||Mf(i,o,x,a,D,C,T))?(j||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=C),m.props=a,m.state=C,m.context=T,a=x):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,df(t,i),x=i.memoizedProps,T=i.type===i.elementType?x:zt(i.type,x),m.props=T,j=i.pendingProps,D=m.context,C=o.contextType,typeof C=="object"&&C!==null?C=Pt(C):(C=gt(o)?or:it.current,C=Wr(i,C));var V=o.getDerivedStateFromProps;(M=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==j||D!==C)&&Ff(i,m,a,C),An=!1,D=i.memoizedState,m.state=D,Ro(i,a,m,d);var $=i.memoizedState;x!==j||D!==$||mt.current||An?(typeof V=="function"&&(gc(i,o,V,a),$=i.memoizedState),(T=An||Mf(i,o,T,a,D,$,C)||!1)?(M||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,$,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,$,C)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=$),m.props=a,m.state=$,m.context=C,a=T):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),a=!1)}return xc(t,i,o,a,h,d)}function xc(t,i,o,a,d,h){Qf(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Zh(i,o,!1),dn(t,i,h);a=i.stateNode,Dv.current=i;var x=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=$r(i,t.child,null,h),i.child=$r(i,null,x,h)):at(t,i,x,h),i.memoizedState=a.state,d&&Zh(i,o,!0),i.child}function Yf(t){var i=t.stateNode;i.pendingContext?Xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Xh(t,i.context,!1),ic(t,i.containerInfo)}function Xf(t,i,o,a,d){return Hr(),Xa(d),i.flags|=256,at(t,i,o,a),i.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jf(t,i,o){var a=i.pendingProps,d=Ae.current,h=!1,m=(i.flags&128)!==0,x;if((x=m)||(x=t!==null&&t.memoizedState===null?!1:(d&2)!==0),x?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ie(Ae,d&1),t===null)return Ya(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Yo(m,a,0,null),t=gr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ec(o),i.memoizedState=Cc,t):Sc(i,m));if(d=t.memoizedState,d!==null&&(x=d.dehydrated,x!==null))return Lv(t,i,m,a,x,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,x=d.sibling;var C={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=C,i.deletions=null):(a=Un(d,C),a.subtreeFlags=d.subtreeFlags&14680064),x!==null?h=Un(x,h):(h=gr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Ec(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Cc,a}return h=t.child,t=h.sibling,a=Un(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Sc(t,i){return i=Yo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function jo(t,i,o,a){return a!==null&&Xa(a),$r(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lv(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yc(Error(n(422))),jo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=Yo({mode:"visible",children:a.children},d,0,null),h=gr(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&$r(i,t.child,null,m),i.child.memoizedState=Ec(m),i.memoizedState=Cc,h);if((i.mode&1)===0)return jo(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var x=a.dgst;return a=x,h=Error(n(419)),a=yc(h,a,void 0),jo(t,i,m,a)}if(x=(m&t.childLanes)!==0,_t||x){if(a=Ke,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Bt(a,t,d,-1))}return zc(),a=yc(Error(n(421))),jo(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Qv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kt=Tn(d.nextSibling),It=i,be=!0,Ut=null,t!==null&&(Tt[Rt++]=ln,Tt[Rt++]=an,Tt[Rt++]=lr,ln=t.id,an=t.overflow,lr=i),i=Sc(i,a.children),i.flags|=4096,i)}function Zf(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),tc(t.return,i,o)}function Ic(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function ep(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(at(t,i,a.children,o),a=Ae.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,o,i);else if(t.tag===19)Zf(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ie(Ae,a),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Po(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ic(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Po(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Ic(i,!0,o,null,h);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),hr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Un(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Un(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Mv(t,i,o){switch(i.tag){case 3:Yf(i),Hr();break;case 5:pf(i);break;case 1:gt(i.type)&&wo(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Ie(ko,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Ie(Ae,Ae.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Jf(t,i,o):(Ie(Ae,Ae.current&1),t=dn(t,i,o),t!==null?t.sibling:null);Ie(Ae,Ae.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return ep(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ie(Ae,Ae.current),a)break;return null;case 22:case 23:return i.lanes=0,Kf(t,i,o)}return dn(t,i,o)}var tp,kc,np,rp;tp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},np=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,ur(Jt.current);var h=null;switch(o){case"input":d=ta(t,d),a=ta(t,a),h=[];break;case"select":d=H({},d,{value:void 0}),a=H({},a,{value:void 0}),h=[];break;case"textarea":d=ia(t,d),a=ia(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=_o)}oa(o,a);var m;o=null;for(T in d)if(!a.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var x=d[T];for(m in x)x.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var C=a[T];if(x=d!=null?d[T]:void 0,a.hasOwnProperty(T)&&C!==x&&(C!=null||x!=null))if(T==="style")if(x){for(m in x)!x.hasOwnProperty(m)||C&&C.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in C)C.hasOwnProperty(m)&&x[m]!==C[m]&&(o||(o={}),o[m]=C[m])}else o||(h||(h=[]),h.push(T,o)),o=C;else T==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,x=x?x.__html:void 0,C!=null&&x!==C&&(h=h||[]).push(T,C)):T==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(T,""+C):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(C!=null&&T==="onScroll"&&Te("scroll",t),h||x===C||(h=[])):(h=h||[]).push(T,C))}o&&(h=h||[]).push("style",o);var T=h;(i.updateQueue=T)&&(i.flags|=4)}},rp=function(t,i,o,a){o!==a&&(i.flags|=4)};function rs(t,i){if(!be)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function jv(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return gt(i.type)&&vo(),ot(i),null;case 3:return a=i.stateNode,Qr(),Re(mt),Re(it),lc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(jc(Ut),Ut=null))),kc(t,i),ot(i),null;case 5:sc(i);var d=ur(Ji.current);if(o=i.type,t!==null&&i.stateNode!=null)np(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return ot(i),null}if(t=ur(Jt.current),So(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Ki]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Hi.length;d++)Te(Hi[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Md(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":Ud(a,h),Te("invalid",a)}oa(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var x=h[m];m==="children"?typeof x=="string"?a.textContent!==x&&(h.suppressHydrationWarning!==!0&&go(a.textContent,x,t),d=["children",x]):typeof x=="number"&&a.textContent!==""+x&&(h.suppressHydrationWarning!==!0&&go(a.textContent,x,t),d=["children",""+x]):l.hasOwnProperty(m)&&x!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Gs(a),Fd(a,h,!0);break;case"textarea":Gs(a),Wd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=_o)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Ki]=a,tp(t,i,!1,!1),i.stateNode=t;e:{switch(m=la(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Hi.length;d++)Te(Hi[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":Md(t,a),d=ta(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=H({},a,{value:void 0}),Te("invalid",t);break;case"textarea":Ud(t,a),d=ia(t,a),Te("invalid",t);break;default:d=a}oa(o,d),x=d;for(h in x)if(x.hasOwnProperty(h)){var C=x[h];h==="style"?$d(t,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Bd(t,C)):h==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Ii(t,C):typeof C=="number"&&Ii(t,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Te("scroll",t):C!=null&&z(t,h,C,m))}switch(o){case"input":Gs(t),Fd(t,a,!1);break;case"textarea":Gs(t),Wd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ve(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Rr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Rr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=_o)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ot(i),null;case 6:if(t&&i.stateNode!=null)rp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=ur(Ji.current),ur(Jt.current),So(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:go(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return ot(i),null;case 13:if(Re(Ae),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&kt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)of(),Hr(),i.flags|=98560,h=!1;else if(h=So(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Hr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else Ut!==null&&(jc(Ut),Ut=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ae.current&1)!==0?Be===0&&(Be=3):zc())),i.updateQueue!==null&&(i.flags|=4),ot(i),null);case 4:return Qr(),kc(t,i),t===null&&$i(i.stateNode.containerInfo),ot(i),null;case 10:return ec(i.type._context),ot(i),null;case 17:return gt(i.type)&&vo(),ot(i),null;case 19:if(Re(Ae),h=i.memoizedState,h===null)return ot(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)rs(h,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Po(t),m!==null){for(i.flags|=128,rs(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(Ae,Ae.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>Jr&&(i.flags|=128,a=!0,rs(h,!1),i.lanes=4194304)}else{if(!a)if(t=Po(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),rs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!be)return ot(i),null}else 2*Fe()-h.renderingStartTime>Jr&&o!==1073741824&&(i.flags|=128,a=!0,rs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=Ae.current,Ie(Ae,a?o&1|2:o&1),i):(ot(i),null);case 22:case 23:return Uc(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Nt&1073741824)!==0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Fv(t,i){switch(Qa(i),i.tag){case 1:return gt(i.type)&&vo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Qr(),Re(mt),Re(it),lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return sc(i),null;case 13:if(Re(Ae),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Hr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Re(Ae),null;case 4:return Qr(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Uo=!1,lt=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,B=null;function Yr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Le(t,i,a)}else o.current=null}function Nc(t,i,o){try{o()}catch(a){Le(t,i,a)}}var ip=!1;function zv(t,i){if(Ua=io,t=Lh(),ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,x=-1,C=-1,T=0,M=0,j=t,D=null;t:for(;;){for(var V;j!==o||d!==0&&j.nodeType!==3||(x=m+d),j!==h||a!==0&&j.nodeType!==3||(C=m+a),j.nodeType===3&&(m+=j.nodeValue.length),(V=j.firstChild)!==null;)D=j,j=V;for(;;){if(j===t)break t;if(D===o&&++T===d&&(x=m),D===h&&++M===a&&(C=m),(V=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=V}o=x===-1||C===-1?null:{start:x,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},io=!1,B=i;B!==null;)if(i=B,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,B=t;else for(;B!==null;){i=B;try{var $=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($!==null){var K=$.memoizedProps,Ue=$.memoizedState,I=i.stateNode,E=I.getSnapshotBeforeUpdate(i.elementType===i.type?K:zt(i.type,K),Ue);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Le(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,B=t;break}B=i.return}return $=ip,ip=!1,$}function is(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Nc(i,o,h)}d=d.next}while(d!==a)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Tc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Ki],delete i[Ha],delete i[Cv],delete i[Ev])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_o));else if(a!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}function Pc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pc(t,i,o),t=t.sibling;t!==null;)Pc(t,i,o),t=t.sibling}var Ze=null,Wt=!1;function Dn(t,i,o){for(o=o.child;o!==null;)ap(t,i,o),o=o.sibling}function ap(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Js,o)}catch{}switch(o.tag){case 5:lt||Yr(o,i);case 6:var a=Ze,d=Wt;Ze=null,Dn(t,i,o),Ze=a,Wt=d,Ze!==null&&(Wt?(t=Ze,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ze.removeChild(o.stateNode));break;case 18:Ze!==null&&(Wt?(t=Ze,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),Mi(t)):Ba(Ze,o.stateNode));break;case 4:a=Ze,d=Wt,Ze=o.stateNode.containerInfo,Wt=!0,Dn(t,i,o),Ze=a,Wt=d;break;case 0:case 11:case 14:case 15:if(!lt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Nc(o,i,m),d=d.next}while(d!==a)}Dn(t,i,o);break;case 1:if(!lt&&(Yr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(x){Le(o,i,x)}Dn(t,i,o);break;case 21:Dn(t,i,o);break;case 22:o.mode&1?(lt=(a=lt)||o.memoizedState!==null,Dn(t,i,o),lt=a):Dn(t,i,o);break;default:Dn(t,i,o)}}function cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Uv),i.forEach(function(a){var d=qv.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,x=m;e:for(;x!==null;){switch(x.tag){case 5:Ze=x.stateNode,Wt=!1;break e;case 3:Ze=x.stateNode.containerInfo,Wt=!0;break e;case 4:Ze=x.stateNode.containerInfo,Wt=!0;break e}x=x.return}if(Ze===null)throw Error(n(160));ap(h,m,d),Ze=null,Wt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(T){Le(d,i,T)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),en(t),a&4){try{is(3,t,t.return),zo(3,t)}catch(K){Le(t,t.return,K)}try{is(5,t,t.return)}catch(K){Le(t,t.return,K)}}break;case 1:Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return);break;case 5:if(Vt(i,t),en(t),a&512&&o!==null&&Yr(o,o.return),t.flags&32){var d=t.stateNode;try{Ii(d,"")}catch(K){Le(t,t.return,K)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,x=t.type,C=t.updateQueue;if(t.updateQueue=null,C!==null)try{x==="input"&&h.type==="radio"&&h.name!=null&&jd(d,h),la(x,m);var T=la(x,h);for(m=0;m<C.length;m+=2){var M=C[m],j=C[m+1];M==="style"?$d(d,j):M==="dangerouslySetInnerHTML"?Bd(d,j):M==="children"?Ii(d,j):z(d,M,j,T)}switch(x){case"input":na(d,h);break;case"textarea":zd(d,h);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Rr(d,!!h.multiple,V,!1):D!==!!h.multiple&&(h.defaultValue!=null?Rr(d,!!h.multiple,h.defaultValue,!0):Rr(d,!!h.multiple,h.multiple?[]:"",!1))}d[Ki]=h}catch(K){Le(t,t.return,K)}}break;case 6:if(Vt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(K){Le(t,t.return,K)}}break;case 3:if(Vt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Mi(i.containerInfo)}catch(K){Le(t,t.return,K)}break;case 4:Vt(i,t),en(t);break;case 13:Vt(i,t),en(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Oc=Fe())),a&4&&cp(t);break;case 22:if(M=o!==null&&o.memoizedState!==null,t.mode&1?(lt=(T=lt)||M,Vt(i,t),lt=T):Vt(i,t),en(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!M&&(t.mode&1)!==0)for(B=t,M=t.child;M!==null;){for(j=B=M;B!==null;){switch(D=B,V=D.child,D.tag){case 0:case 11:case 14:case 15:is(4,D,D.return);break;case 1:Yr(D,D.return);var $=D.stateNode;if(typeof $.componentWillUnmount=="function"){a=D,o=D.return;try{i=a,$.props=i.memoizedProps,$.state=i.memoizedState,$.componentWillUnmount()}catch(K){Le(a,o,K)}}break;case 5:Yr(D,D.return);break;case 22:if(D.memoizedState!==null){fp(j);continue}}V!==null?(V.return=D,B=V):fp(j)}M=M.sibling}e:for(M=null,j=t;;){if(j.tag===5){if(M===null){M=j;try{d=j.stateNode,T?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(x=j.stateNode,C=j.memoizedProps.style,m=C!=null&&C.hasOwnProperty("display")?C.display:null,x.style.display=Hd("display",m))}catch(K){Le(t,t.return,K)}}}else if(j.tag===6){if(M===null)try{j.stateNode.nodeValue=T?"":j.memoizedProps}catch(K){Le(t,t.return,K)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===t)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===t)break e;for(;j.sibling===null;){if(j.return===null||j.return===t)break e;M===j&&(M=null),j=j.return}M===j&&(M=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Vt(i,t),en(t),a&4&&cp(t);break;case 21:break;default:Vt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(op(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Ii(d,""),a.flags&=-33);var h=lp(t);Pc(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,x=lp(t);Rc(t,x,m);break;default:throw Error(n(161))}}catch(C){Le(t,t.return,C)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wv(t,i,o){B=t,dp(t)}function dp(t,i,o){for(var a=(t.mode&1)!==0;B!==null;){var d=B,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Uo;if(!m){var x=d.alternate,C=x!==null&&x.memoizedState!==null||lt;x=Uo;var T=lt;if(Uo=m,(lt=C)&&!T)for(B=d;B!==null;)m=B,C=m.child,m.tag===22&&m.memoizedState!==null?pp(d):C!==null?(C.return=m,B=C):pp(d);for(;h!==null;)B=h,dp(h),h=h.sibling;B=d,Uo=x,lt=T}hp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,B=h):hp(t)}}function hp(t){for(;B!==null;){var i=B;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:lt||zo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!lt)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ff(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ff(i,m,o)}break;case 5:var x=i.stateNode;if(o===null&&i.flags&4){o=x;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var T=i.alternate;if(T!==null){var M=T.memoizedState;if(M!==null){var j=M.dehydrated;j!==null&&Mi(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}lt||i.flags&512&&Tc(i)}catch(D){Le(i,i.return,D)}}if(i===t){B=null;break}if(o=i.sibling,o!==null){o.return=i.return,B=o;break}B=i.return}}function fp(t){for(;B!==null;){var i=B;if(i===t){B=null;break}var o=i.sibling;if(o!==null){o.return=i.return,B=o;break}B=i.return}}function pp(t){for(;B!==null;){var i=B;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{zo(4,i)}catch(C){Le(i,o,C)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(C){Le(i,d,C)}}var h=i.return;try{Tc(i)}catch(C){Le(i,h,C)}break;case 5:var m=i.return;try{Tc(i)}catch(C){Le(i,m,C)}}}catch(C){Le(i,i.return,C)}if(i===t){B=null;break}var x=i.sibling;if(x!==null){x.return=i.return,B=x;break}B=i.return}}var Vv=Math.ceil,Wo=G.ReactCurrentDispatcher,bc=G.ReactCurrentOwner,At=G.ReactCurrentBatchConfig,fe=0,Ke=null,ze=null,et=0,Nt=0,Xr=Rn(0),Be=0,ss=null,hr=0,Vo=0,Ac=0,os=null,yt=null,Oc=0,Jr=1/0,hn=null,Bo=!1,Dc=null,Ln=null,Ho=!1,Mn=null,$o=0,ls=0,Lc=null,Go=-1,Ko=0;function ct(){return(fe&6)!==0?Fe():Go!==-1?Go:Go=Fe()}function jn(t){return(t.mode&1)===0?1:(fe&2)!==0&&et!==0?et&-et:Iv.transition!==null?(Ko===0&&(Ko=oh()),Ko):(t=we,t!==0||(t=window.event,t=t===void 0?16:mh(t.type)),t)}function Bt(t,i,o,a){if(50<ls)throw ls=0,Lc=null,Error(n(185));bi(t,o,a),((fe&2)===0||t!==Ke)&&(t===Ke&&((fe&2)===0&&(Vo|=o),Be===4&&Fn(t,et)),vt(t,a),o===1&&fe===0&&(i.mode&1)===0&&(Jr=Fe()+500,xo&&bn()))}function vt(t,i){var o=t.callbackNode;Iy(t,i);var a=to(t,t===Ke?et:0);if(a===0)o!==null&&rh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&rh(o),i===1)t.tag===0?Sv(gp.bind(null,t)):ef(gp.bind(null,t)),wv(function(){(fe&6)===0&&bn()}),o=null;else{switch(lh(a)){case 1:o=pa;break;case 4:o=ih;break;case 16:o=Xs;break;case 536870912:o=sh;break;default:o=Xs}o=Sp(o,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function mp(t,i){if(Go=-1,Ko=0,(fe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Zr()&&t.callbackNode!==o)return null;var a=to(t,t===Ke?et:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Qo(t,a);else{i=a;var d=fe;fe|=2;var h=yp();(Ke!==t||et!==i)&&(hn=null,Jr=Fe()+500,pr(t,i));do try{$v();break}catch(x){_p(t,x)}while(!0);Za(),Wo.current=h,fe=d,ze!==null?i=0:(Ke=null,et=0,i=Be)}if(i!==0){if(i===2&&(d=ma(t),d!==0&&(a=d,i=Mc(t,d))),i===1)throw o=ss,pr(t,0),Fn(t,a),vt(t,Fe()),o;if(i===6)Fn(t,a);else{if(d=t.current.alternate,(a&30)===0&&!Bv(d)&&(i=Qo(t,a),i===2&&(h=ma(t),h!==0&&(a=h,i=Mc(t,h))),i===1))throw o=ss,pr(t,0),Fn(t,a),vt(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:mr(t,yt,hn);break;case 3:if(Fn(t,a),(a&130023424)===a&&(i=Oc+500-Fe(),10<i)){if(to(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){ct(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Va(mr.bind(null,t,yt,hn),i);break}mr(t,yt,hn);break;case 4:if(Fn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-jt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Vv(a/1960))-a,10<a){t.timeoutHandle=Va(mr.bind(null,t,yt,hn),a);break}mr(t,yt,hn);break;case 5:mr(t,yt,hn);break;default:throw Error(n(329))}}}return vt(t,Fe()),t.callbackNode===o?mp.bind(null,t):null}function Mc(t,i){var o=os;return t.current.memoizedState.isDehydrated&&(pr(t,i).flags|=256),t=Qo(t,i),t!==2&&(i=yt,yt=o,i!==null&&jc(i)),t}function jc(t){yt===null?yt=t:yt.push.apply(yt,t)}function Bv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Ft(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fn(t,i){for(i&=~Ac,i&=~Vo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),a=1<<o;t[o]=-1,i&=~a}}function gp(t){if((fe&6)!==0)throw Error(n(327));Zr();var i=to(t,0);if((i&1)===0)return vt(t,Fe()),null;var o=Qo(t,i);if(t.tag!==0&&o===2){var a=ma(t);a!==0&&(i=a,o=Mc(t,a))}if(o===1)throw o=ss,pr(t,0),Fn(t,i),vt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,mr(t,yt,hn),vt(t,Fe()),null}function Fc(t,i){var o=fe;fe|=1;try{return t(i)}finally{fe=o,fe===0&&(Jr=Fe()+500,xo&&bn())}}function fr(t){Mn!==null&&Mn.tag===0&&(fe&6)===0&&Zr();var i=fe;fe|=1;var o=At.transition,a=we;try{if(At.transition=null,we=1,t)return t()}finally{we=a,At.transition=o,fe=i,(fe&6)===0&&bn()}}function Uc(){Nt=Xr.current,Re(Xr)}function pr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,vv(o)),ze!==null)for(o=ze.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vo();break;case 3:Qr(),Re(mt),Re(it),lc();break;case 5:sc(a);break;case 4:Qr();break;case 13:Re(Ae);break;case 19:Re(Ae);break;case 10:ec(a.type._context);break;case 22:case 23:Uc()}o=o.return}if(Ke=t,ze=t=Un(t.current,null),et=Nt=i,Be=0,ss=null,Ac=Vo=hr=0,yt=os=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}cr=null}return t}function _p(t,i){do{var o=ze;try{if(Za(),bo.current=Lo,Ao){for(var a=Oe.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Ao=!1}if(dr=0,Ge=Ve=Oe=null,Zi=!1,es=0,bc.current=null,o===null||o.return===null){Be=1,ss=i,ze=null;break}e:{var h=t,m=o.return,x=o,C=i;if(i=et,x.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var T=C,M=x,j=M.tag;if((M.mode&1)===0&&(j===0||j===11||j===15)){var D=M.alternate;D?(M.updateQueue=D.updateQueue,M.memoizedState=D.memoizedState,M.lanes=D.lanes):(M.updateQueue=null,M.memoizedState=null)}var V=Vf(m);if(V!==null){V.flags&=-257,Bf(V,m,x,h,i),V.mode&1&&Wf(h,T,i),i=V,C=T;var $=i.updateQueue;if($===null){var K=new Set;K.add(C),i.updateQueue=K}else $.add(C);break e}else{if((i&1)===0){Wf(h,T,i),zc();break e}C=Error(n(426))}}else if(be&&x.mode&1){var Ue=Vf(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Bf(Ue,m,x,h,i),Xa(qr(C,x));break e}}h=C=qr(C,x),Be!==4&&(Be=2),os===null?os=[h]:os.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=Uf(h,C,i);hf(h,I);break e;case 1:x=C;var E=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ln===null||!Ln.has(k)))){h.flags|=65536,i&=-i,h.lanes|=i;var F=zf(h,x,i);hf(h,F);break e}}h=h.return}while(h!==null)}wp(o)}catch(Q){i=Q,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function yp(){var t=Wo.current;return Wo.current=Lo,t===null?Lo:t}function zc(){(Be===0||Be===3||Be===2)&&(Be=4),Ke===null||(hr&268435455)===0&&(Vo&268435455)===0||Fn(Ke,et)}function Qo(t,i){var o=fe;fe|=2;var a=yp();(Ke!==t||et!==i)&&(hn=null,pr(t,i));do try{Hv();break}catch(d){_p(t,d)}while(!0);if(Za(),fe=o,Wo.current=a,ze!==null)throw Error(n(261));return Ke=null,et=0,Be}function Hv(){for(;ze!==null;)vp(ze)}function $v(){for(;ze!==null&&!gy();)vp(ze)}function vp(t){var i=Ep(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,i===null?wp(t):ze=i,bc.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=jv(o,i,Nt),o!==null){ze=o;return}}else{if(o=Fv(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Be===0&&(Be=5)}function mr(t,i,o){var a=we,d=At.transition;try{At.transition=null,we=1,Gv(t,i,o,a)}finally{At.transition=d,we=a}return null}function Gv(t,i,o,a){do Zr();while(Mn!==null);if((fe&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ky(t,h),t===Ke&&(ze=Ke=null,et=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ho||(Ho=!0,Sp(Xs,function(){return Zr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=At.transition,At.transition=null;var m=we;we=1;var x=fe;fe|=4,bc.current=null,zv(t,o),up(o,t),hv(za),io=!!Ua,za=Ua=null,t.current=o,Wv(o),_y(),fe=x,we=m,At.transition=h}else t.current=o;if(Ho&&(Ho=!1,Mn=t,$o=d),h=t.pendingLanes,h===0&&(Ln=null),wy(o.stateNode),vt(t,Fe()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Bo)throw Bo=!1,t=Dc,Dc=null,t;return($o&1)!==0&&t.tag!==0&&Zr(),h=t.pendingLanes,(h&1)!==0?t===Lc?ls++:(ls=0,Lc=t):ls=0,bn(),null}function Zr(){if(Mn!==null){var t=lh($o),i=At.transition,o=we;try{if(At.transition=null,we=16>t?16:t,Mn===null)var a=!1;else{if(t=Mn,Mn=null,$o=0,(fe&6)!==0)throw Error(n(331));var d=fe;for(fe|=4,B=t.current;B!==null;){var h=B,m=h.child;if((B.flags&16)!==0){var x=h.deletions;if(x!==null){for(var C=0;C<x.length;C++){var T=x[C];for(B=T;B!==null;){var M=B;switch(M.tag){case 0:case 11:case 15:is(8,M,h)}var j=M.child;if(j!==null)j.return=M,B=j;else for(;B!==null;){M=B;var D=M.sibling,V=M.return;if(sp(M),M===T){B=null;break}if(D!==null){D.return=V,B=D;break}B=V}}}var $=h.alternate;if($!==null){var K=$.child;if(K!==null){$.child=null;do{var Ue=K.sibling;K.sibling=null,K=Ue}while(K!==null)}}B=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,B=m;else e:for(;B!==null;){if(h=B,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:is(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,B=I;break e}B=h.return}}var E=t.current;for(B=E;B!==null;){m=B;var k=m.child;if((m.subtreeFlags&2064)!==0&&k!==null)k.return=m,B=k;else e:for(m=E;B!==null;){if(x=B,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:zo(9,x)}}catch(Q){Le(x,x.return,Q)}if(x===m){B=null;break e}var F=x.sibling;if(F!==null){F.return=x.return,B=F;break e}B=x.return}}if(fe=d,bn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Js,t)}catch{}a=!0}return a}finally{we=o,At.transition=i}}return!1}function xp(t,i,o){i=qr(o,i),i=Uf(t,i,1),t=On(t,i,1),i=ct(),t!==null&&(bi(t,1,i),vt(t,i))}function Le(t,i,o){if(t.tag===3)xp(t,t,o);else for(;i!==null;){if(i.tag===3){xp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=qr(o,t),t=zf(i,t,1),i=On(i,t,1),t=ct(),i!==null&&(bi(i,1,t),vt(i,t));break}}i=i.return}}function Kv(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ct(),t.pingedLanes|=t.suspendedLanes&o,Ke===t&&(et&o)===o&&(Be===4||Be===3&&(et&130023424)===et&&500>Fe()-Oc?pr(t,0):Ac|=o),vt(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=eo,eo<<=1,(eo&130023424)===0&&(eo=4194304)));var o=ct();t=cn(t,i),t!==null&&(bi(t,i,o),vt(t,o))}function Qv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Cp(t,o)}function qv(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Cp(t,o)}var Ep;Ep=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||mt.current)_t=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return _t=!1,Mv(t,i,o);_t=(t.flags&131072)!==0}else _t=!1,be&&(i.flags&1048576)!==0&&tf(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Fo(t,i),t=i.pendingProps;var d=Wr(i,it.current);Kr(i,o),d=uc(null,i,a,t,d,o);var h=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,gt(a)?(h=!0,wo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=Mo,i.stateNode=d,d._reactInternals=i,_c(i,a,t,o),i=xc(null,i,a,!0,h,o)):(i.tag=0,be&&h&&Ka(i),at(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Fo(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=Xv(a),t=zt(a,t),d){case 0:i=wc(null,i,a,t,o);break e;case 1:i=qf(null,i,a,t,o);break e;case 11:i=Hf(null,i,a,t,o);break e;case 14:i=$f(null,i,a,zt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),wc(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),qf(t,i,a,d,o);case 3:e:{if(Yf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,df(t,i),Ro(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=qr(Error(n(423)),i),i=Xf(t,i,a,o,d);break e}else if(a!==d){d=qr(Error(n(424)),i),i=Xf(t,i,a,o,d);break e}else for(kt=Tn(i.stateNode.containerInfo.firstChild),It=i,be=!0,Ut=null,o=cf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),a===d){i=dn(t,i,o);break e}at(t,i,a,o)}i=i.child}return i;case 5:return pf(i),t===null&&Ya(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Wa(a,d)?m=null:h!==null&&Wa(a,h)&&(i.flags|=32),Qf(t,i),at(t,i,m,o),i.child;case 6:return t===null&&Ya(i),null;case 13:return Jf(t,i,o);case 4:return ic(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=$r(i,null,a,o):at(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Hf(t,i,a,d,o);case 7:return at(t,i,i.pendingProps,o),i.child;case 8:return at(t,i,i.pendingProps.children,o),i.child;case 12:return at(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Ie(ko,a._currentValue),a._currentValue=m,h!==null)if(Ft(h.value,m)){if(h.children===d.children&&!mt.current){i=dn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var x=h.dependencies;if(x!==null){m=h.child;for(var C=x.firstContext;C!==null;){if(C.context===a){if(h.tag===1){C=un(-1,o&-o),C.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var M=T.pending;M===null?C.next=C:(C.next=M.next,M.next=C),T.pending=C}}h.lanes|=o,C=h.alternate,C!==null&&(C.lanes|=o),tc(h.return,o,i),x.lanes|=o;break}C=C.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,x=m.alternate,x!==null&&(x.lanes|=o),tc(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}at(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,Kr(i,o),d=Pt(d),a=a(d),i.flags|=1,at(t,i,a,o),i.child;case 14:return a=i.type,d=zt(a,i.pendingProps),d=zt(a.type,d),$f(t,i,a,d,o);case 15:return Gf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:zt(a,d),Fo(t,i),i.tag=1,gt(a)?(t=!0,wo(i)):t=!1,Kr(i,o),jf(i,a,d),_c(i,a,d,o),xc(null,i,a,!0,t,o);case 19:return ep(t,i,o);case 22:return Kf(t,i,o)}throw Error(n(156,i.tag))};function Sp(t,i){return nh(t,i)}function Yv(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new Yv(t,i,o,a)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xv(t){if(typeof t=="function")return Wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===We)return 11;if(t===qt)return 14}return 2}function Un(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Wc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case q:return gr(o.children,d,h,i);case te:m=8,d|=8;break;case ye:return t=Ot(12,o,i,d|2),t.elementType=ye,t.lanes=h,t;case rt:return t=Ot(13,o,i,d),t.elementType=rt,t.lanes=h,t;case Mt:return t=Ot(19,o,i,d),t.elementType=Mt,t.lanes=h,t;case De:return Yo(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ae:m=10;break e;case Ee:m=9;break e;case We:m=11;break e;case qt:m=14;break e;case pt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function gr(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function Yo(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=De,t.lanes=o,t.stateNode={isHidden:!1},t}function Vc(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bc(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Jv(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,a,d,h,m,x,C){return t=new Jv(t,i,o,x,C),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(h),t}function Zv(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Ip(t){if(!t)return Pn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(gt(o))return Jh(t,o,i)}return i}function kp(t,i,o,a,d,h,m,x,C){return t=Hc(o,a,!0,t,d,h,m,x,C),t.context=Ip(null),o=t.current,a=ct(),d=jn(o),h=un(a,d),h.callback=i??null,On(o,h,d),t.current.lanes=d,bi(t,d,a),vt(t,a),t}function Xo(t,i,o,a){var d=i.current,h=ct(),m=jn(d);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=un(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=On(d,i,m),t!==null&&(Bt(t,d,m,h),To(t,d,m)),m}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $c(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function e0(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Zo.prototype.render=Gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xo(t,i,null,null)},Zo.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fr(function(){Xo(null,t,null,null)}),i[sn]=null}};function Zo(t){this._internalRoot=t}Zo.prototype.unstable_scheduleHydration=function(t){if(t){var i=uh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<In.length&&i!==0&&i<In[o].priority;o++);In.splice(o,0,t),o===0&&fh(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function t0(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var T=Jo(m);h.call(T)}}var m=kp(i,a,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=m,t[sn]=m.current,$i(t.nodeType===8?t.parentNode:t),fr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var x=a;a=function(){var T=Jo(C);x.call(T)}}var C=Hc(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=C,t[sn]=C.current,$i(t.nodeType===8?t.parentNode:t),fr(function(){Xo(i,C,o,a)}),C}function tl(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var x=d;d=function(){var C=Jo(m);x.call(C)}}Xo(i,m,t,d)}else m=t0(o,i,t,d,a);return Jo(m)}ah=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Pi(i.pendingLanes);o!==0&&(_a(i,o|1),vt(i,Fe()),(fe&6)===0&&(Jr=Fe()+500,bn()))}break;case 13:fr(function(){var a=cn(t,1);if(a!==null){var d=ct();Bt(a,t,1,d)}}),$c(t,1)}},ya=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ct();Bt(i,t,134217728,o)}$c(t,134217728)}},ch=function(t){if(t.tag===13){var i=jn(t),o=cn(t,i);if(o!==null){var a=ct();Bt(o,t,i,a)}$c(t,i)}},uh=function(){return we},dh=function(t,i){var o=we;try{return we=t,i()}finally{we=o}},ua=function(t,i,o){switch(i){case"input":if(na(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=yo(a);if(!d)throw Error(n(90));Ld(a),na(a,d)}}}break;case"textarea":zd(t,o);break;case"select":i=o.value,i!=null&&Rr(t,!!o.multiple,i,!1)}},qd=Fc,Yd=fr;var n0={usingClientEntryPoint:!1,Events:[Qi,Ur,yo,Kd,Qd,Fc]},as={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r0={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eh(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Js=nl.inject(r0),Yt=nl}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0,wt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(i))throw Error(n(200));return Zv(t,i,null,o)},wt.createRoot=function(t,i){if(!Kc(t))throw Error(n(299));var o=!1,a="",d=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,a,d),t[sn]=i.current,$i(t.nodeType===8?t.parentNode:t),new Gc(i)},wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=eh(i),t=t===null?null:t.stateNode,t},wt.flushSync=function(t){return fr(t)},wt.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},wt.hydrateRoot=function(t,i,o){if(!Kc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=kp(i,null,t,1,o??null,d,!1,h,m),t[sn]=i.current,$i(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Zo(i)},wt.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},wt.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(fr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},wt.unstable_batchedUpdates=Fc,wt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,a)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var jp;function d0(){if(jp)return Yc.exports;jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yc.exports=u0(),Yc.exports}var Fp;function h0(){if(Fp)return rl;Fp=1;var r=d0();return rl.createRoot=r.createRoot,rl.hydrateRoot=r.hydrateRoot,rl}var f0=h0();const p0=qm(f0),m0=()=>{};var Up={};/**
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
 */const Xm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw gi(e)},gi=function(r){return new Error("Firebase Database ("+Xm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Jm=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},g0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],u=r[n++],f=r[n++],p=((l&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],u=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|u&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],u=l+1<r.length,f=u?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,y=c>>2,w=(c&3)<<4|f>>4;let v=(f&15)<<2|g>>6,N=g&63;p||(N=64,u||(v=64)),s.push(n[y],n[w],n[v],n[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Jm(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):g0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const w=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||f==null||g==null||w==null)throw new _0;const v=c<<2|f>>4;if(s.push(v),g!==64){const N=f<<4&240|g>>2;if(s.push(N),w!==64){const R=g<<6&192|w;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zm=function(r){const e=Jm(r);return Vu.encodeByteArray(e,!0)},pl=function(r){return Zm(r).replace(/\./g,"")},ml=function(r){try{return Vu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function y0(r){return eg(void 0,r)}function eg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v0(n)||(r[n]=eg(r[n],e[n]));return r}function v0(r){return r!=="__proto__"}/**
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
 */function w0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const x0=()=>w0().__FIREBASE_DEFAULTS__,C0=()=>{if(typeof process>"u"||typeof Up>"u")return;const r=Up.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},E0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ml(r[1]);return e&&JSON.parse(e)},Bu=()=>{try{return m0()||x0()||C0()||E0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},tg=r=>{var e,n;return(n=(e=Bu())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},S0=r=>{const e=tg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ng=()=>{var r;return(r=Bu())==null?void 0:r.config},rg=r=>{var e;return(e=Bu())==null?void 0:e[`_${r}`]};/**
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
 */function _i(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ig(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function I0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[pl(JSON.stringify(n)),pl(JSON.stringify(u)),""].join(".")}const ps={};function k0(){const r={prod:[],emulator:[]};for(const e of Object.keys(ps))ps[e]?r.emulator.push(e):r.prod.push(e);return r}function N0(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let zp=!1;function sg(r,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||ps[r]===e||ps[r]||zp)return;ps[r]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",c=k0().prod.length>0;function u(){const v=document.getElementById(s);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,N){v.setAttribute("width","24"),v.setAttribute("id",N),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function g(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{zp=!0,u()},v}function y(v,N){v.setAttribute("id",N),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function w(){const v=N0(s),N=n("text"),R=document.getElementById(N)||document.createElement("span"),O=n("learnmore"),b=document.getElementById(O)||document.createElement("a"),A=n("preprendIcon"),P=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const z=v.element;f(z),y(b,O);const G=g();p(P,A),z.append(P,R,b,G),document.body.appendChild(z)}c?(R.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function T0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P0(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function b0(){return Xm.NODE_ADMIN===!0}function A0(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;e(((c=l.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const D0="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=D0,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],u=c?L0(c,s):"Error",f=`${this.serviceName}: ${u} (${l}).`;return new rr(l,f,s)}}function L0(r,e){return r.replace(M0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const M0=/\{\$([^}]+)}/g;/**
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
 */function xs(r){return JSON.parse(r)}function $e(r){return JSON.stringify(r)}/**
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
 */const lg=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=xs(ml(c[0])||""),n=xs(ml(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},j0=function(r){const e=lg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},F0=function(r){const e=lg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ai(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function gu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function gl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function wr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],u=e[l];if(Wp(c)&&Wp(u)){if(!wr(c,u))return!1}else if(c!==u)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Wp(r){return r!==null&&typeof r=="object"}/**
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
 */function yi(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class U0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)s[w]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let w=0;w<16;w++)s[w]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let w=16;w<80;w++){const v=s[w-3]^s[w-8]^s[w-14]^s[w-16];s[w]=(v<<1|v>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,y;for(let w=0;w<80;w++){w<40?w<20?(g=f^c&(u^f),y=1518500249):(g=c^u^f,y=1859775393):w<60?(g=c&u|f&(c|u),y=2400959708):(g=c^u^f,y=3395469782);const v=(l<<5|l>>>27)+g+p+y+s[w]&4294967295;p=f,f=u,u=(c<<30|c>>>2)&4294967295,c=l,l=v}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const c=this.buf_;let u=this.inbuf_;for(;l<n;){if(u===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[u]=e.charCodeAt(l),++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}else for(;l<n;)if(c[u]=e[l],++u,++l,u===this.blockSize){this.compress_(c),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function z0(r,e){const n=new W0(r,e);return n.subscribe.bind(n)}class W0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");V0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Zc),l.error===void 0&&(l.error=Zc),l.complete===void 0&&(l.complete=Zc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Zc(){}function jl(r,e){return`${r} failed: ${e} argument `}/**
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
 */const B0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const u=r.charCodeAt(s)-56320;l=65536+(c<<10)+u}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class H0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Os;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G0(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $0(r){return r===_r?void 0:r}function G0(r){return r.instantiationMode==="EAGER"}/**
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
 */class K0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new H0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const Q0={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},q0=xe.INFO,Y0={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},X0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Y0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=q0,this._logHandler=X0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const J0=(r,e)=>e.some(n=>r instanceof n);let Vp,Bp;function Z0(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return Bp||(Bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,_u=new WeakMap,cg=new WeakMap,eu=new WeakMap,Gu=new WeakMap;function tw(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",u)},c=()=>{n(Kn(r.result)),l()},u=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,r)}).catch(()=>{}),Gu.set(e,r),e}function nw(r){if(_u.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",u),r.removeEventListener("abort",u)},c=()=>{n(),l()},u=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",u),r.addEventListener("abort",u)});_u.set(r,e)}let yu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return _u.get(r);if(e==="objectStoreNames")return r.objectStoreNames||cg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rw(r){yu=r(yu)}function iw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(tu(this),e,...n);return cg.set(s,e.sort?e.sort():[e]),Kn(s)}:ew().includes(r)?function(...e){return r.apply(tu(this),e),Kn(ag.get(this))}:function(...e){return Kn(r.apply(tu(this),e))}}function sw(r){return typeof r=="function"?iw(r):(r instanceof IDBTransaction&&nw(r),J0(r,Z0())?new Proxy(r,yu):r)}function Kn(r){if(r instanceof IDBRequest)return tw(r);if(eu.has(r))return eu.get(r);const e=sw(r);return e!==r&&(eu.set(r,e),Gu.set(e,r)),e}const tu=r=>Gu.get(r);function ow(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const u=indexedDB.open(r,e),f=Kn(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Kn(u.result),p.oldVersion,p.newVersion,Kn(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const lw=["get","getKey","getAll","getAllKeys","count"],aw=["put","add","delete","clear"],nu=new Map;function Hp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=aw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||lw.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return nu.set(e,c),c}rw(r=>({...r,get:(e,n,s)=>Hp(e,n)||r.get(e,n,s),has:(e,n)=>!!Hp(e,n)||r.has(e,n)}));/**
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
 */class cw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",$p="0.14.8";/**
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
 */const _n=new $u("@firebase/app"),dw="@firebase/app-compat",hw="@firebase/analytics-compat",fw="@firebase/analytics",pw="@firebase/app-check-compat",mw="@firebase/app-check",gw="@firebase/auth",_w="@firebase/auth-compat",yw="@firebase/database",vw="@firebase/data-connect",ww="@firebase/database-compat",xw="@firebase/functions",Cw="@firebase/functions-compat",Ew="@firebase/installations",Sw="@firebase/installations-compat",Iw="@firebase/messaging",kw="@firebase/messaging-compat",Nw="@firebase/performance",Tw="@firebase/performance-compat",Rw="@firebase/remote-config",Pw="@firebase/remote-config-compat",bw="@firebase/storage",Aw="@firebase/storage-compat",Ow="@firebase/firestore",Dw="@firebase/ai",Lw="@firebase/firestore-compat",Mw="firebase",jw="12.9.0";/**
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
 */const wu="[DEFAULT]",Fw={[vu]:"fire-core",[dw]:"fire-core-compat",[fw]:"fire-analytics",[hw]:"fire-analytics-compat",[mw]:"fire-app-check",[pw]:"fire-app-check-compat",[gw]:"fire-auth",[_w]:"fire-auth-compat",[yw]:"fire-rtdb",[vw]:"fire-data-connect",[ww]:"fire-rtdb-compat",[xw]:"fire-fn",[Cw]:"fire-fn-compat",[Ew]:"fire-iid",[Sw]:"fire-iid-compat",[Iw]:"fire-fcm",[kw]:"fire-fcm-compat",[Nw]:"fire-perf",[Tw]:"fire-perf-compat",[Rw]:"fire-rc",[Pw]:"fire-rc-compat",[bw]:"fire-gcs",[Aw]:"fire-gcs-compat",[Ow]:"fire-fst",[Lw]:"fire-fst-compat",[Dw]:"fire-vertex","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
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
 */const _l=new Map,Uw=new Map,xu=new Map;function Gp(r,e){try{r.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ci(r){const e=r.name;if(xu.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;xu.set(e,r);for(const n of _l.values())Gp(n,r);for(const n of Uw.values())Gp(n,r);return!0}function Ku(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ht(r){return r==null?!1:r.settings!==void 0}/**
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
 */const zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ds("app","Firebase",zw);/**
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
 */class Ww{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const vi=jw;function ug(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:wu,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=ng()),!n)throw Qn.create("no-options");const c=_l.get(l);if(c){if(wr(n,c.options)&&wr(s,c.config))return c;throw Qn.create("duplicate-app",{appName:l})}const u=new K0(l);for(const p of xu.values())u.addComponent(p);const f=new Ww(n,s,u);return _l.set(l,f),f}function dg(r=wu){const e=_l.get(r);if(!e&&r===wu&&ng())return ug();if(!e)throw Qn.create("no-app",{appName:r});return e}function qn(r,e,n){let s=Fw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const u=[`Unable to register library "${s}" with version "${e}":`];l&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(u.join(" "));return}ci(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vw="firebase-heartbeat-database",Bw=1,Cs="firebase-heartbeat-store";let ru=null;function hg(){return ru||(ru=ow(Vw,Bw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),ru}async function Hw(r){try{const n=(await hg()).transaction(Cs),s=await n.objectStore(Cs).get(fg(r));return await n.done,s}catch(e){if(e instanceof rr)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Kp(r,e){try{const s=(await hg()).transaction(Cs,"readwrite");await s.objectStore(Cs).put(e,fg(r)),await s.done}catch(n){if(n instanceof rr)_n.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function fg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const $w=1024,Gw=30;class Kw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Qp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Gw){const u=Yw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:s,unsentEntries:l}=Qw(this._heartbeatsCache.heartbeats),c=pl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _n.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function Qw(r,e=$w){const n=[];let s=r.slice();for(const l of r){const c=n.find(u=>u.agent===l.agent);if(c){if(c.dates.push(l.date),qp(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A0()?O0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(r){return pl(JSON.stringify({version:2,heartbeats:r})).length}function Yw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function Xw(r){ci(new xr("platform-logger",e=>new cw(e),"PRIVATE")),ci(new xr("heartbeat",e=>new Kw(e),"PRIVATE")),qn(vu,$p,r),qn(vu,$p,"esm2020"),qn("fire-js","")}Xw("");var Jw="firebase",Zw="12.9.0";/**
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
 */qn(Jw,Zw,"app");function pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ex=pg,mg=new Ds("auth","Firebase",pg());/**
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
 */const yl=new $u("@firebase/auth");function tx(r,...e){yl.logLevel<=xe.WARN&&yl.warn(`Auth (${vi}): ${r}`,...e)}function al(r,...e){yl.logLevel<=xe.ERROR&&yl.error(`Auth (${vi}): ${r}`,...e)}/**
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
 */function yn(r,...e){throw Qu(r,...e)}function tn(r,...e){return Qu(r,...e)}function gg(r,e,n){const s={...ex(),[e]:n};return new Ds("auth","Firebase",s).create(e,{appName:r.name})}function Yn(r){return gg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return mg.create(r,...e)}function re(r,e,...n){if(!r)throw Qu(e,...n)}function fn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw al(e),new Error(e)}function vn(r,e){r||fn(e)}/**
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
 */function Cu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function nx(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function rx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nx()||R0()||"connection"in navigator)?navigator.onLine:!0}function ix(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||og()}get(){return rx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class _g{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ox=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lx=new Ls(3e4,6e4);function Ul(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function wi(r,e,n,s,l={}){return yg(r,l,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=yi({key:r.config.apiKey,...u}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...c};return T0()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&_i(r.emulatorConfig.host)&&(g.credentials="include"),_g.fetch()(await wg(r,r.config.apiHost,n,f),g)})}async function yg(r,e,n){r._canInitEmulator=!1;const s={...sx,...e};try{const l=new ax(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw il(r,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(r,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw il(r,"email-already-in-use",u);if(p==="USER_DISABLED")throw il(r,"user-disabled",u);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw gg(r,y,g);yn(r,y)}}catch(l){if(l instanceof rr)throw l;yn(r,"network-request-failed",{message:String(l)})}}async function vg(r,e,n,s,l={}){const c=await wi(r,e,n,s,l);return"mfaPendingCredential"in c&&yn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function wg(r,e,n,s){const l=`${e}${n}?${s}`,c=r,u=c.config.emulator?qu(r.config,l):`${r.config.apiScheme}://${l}`;return ox.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),lx.get())})}}function il(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function cx(r,e){return wi(r,"POST","/v1/accounts:delete",e)}async function vl(r,e){return wi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ms(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ux(r,e=!1){const n=Ct(r),s=await n.getIdToken(e),l=Yu(s);re(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:ms(iu(l.auth_time)),issuedAtTime:ms(iu(l.iat)),expirationTime:ms(iu(l.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function iu(r){return Number(r)*1e3}function Yu(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const l=ml(n);return l?JSON.parse(l):(al("Failed to decode base64 JWT payload"),null)}catch(l){return al("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Xp(r){const e=Yu(r);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&dx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function dx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(r){var w;const e=r.auth,n=await r.getIdToken(),s=await Es(r,vl(e,{idToken:n}));re(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=(w=l.providerUserInfo)!=null&&w.length?xg(l.providerUserInfo):[],u=px(r.providerData,c),f=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Eu(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,y)}async function fx(r){const e=Ct(r);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function px(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function xg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function mx(r,e){const n=await yg(r,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,u=await wg(r,l,"/v1/token",`key=${c}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&_i(r.emulatorConfig.host)&&(p.credentials="include"),_g.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gx(r,e){return wi(r,"POST","/v2/accounts:revokeToken",Ul(r,e))}/**
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
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Xp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await mx(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,u=new ri;return s&&(re(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),l&&(re(typeof l=="string","internal-error",{appName:e}),u.accessToken=l),c&&(re(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Wn(r,e){re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Eu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ux(this,e)}reload(){return fx(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Es(this,cx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:w,emailVerified:v,isAnonymous:N,providerData:R,stsTokenManager:O}=n;re(w&&O,e,"internal-error");const b=ri.fromJSON(this.name,O);re(typeof w=="string",e,"internal-error"),Wn(s,e.name),Wn(l,e.name),re(typeof v=="boolean",e,"internal-error"),re(typeof N=="boolean",e,"internal-error"),Wn(c,e.name),Wn(u,e.name),Wn(f,e.name),Wn(p,e.name),Wn(g,e.name),Wn(y,e.name);const A=new Gt({uid:w,auth:e,email:l,emailVerified:v,displayName:s,isAnonymous:N,photoURL:u,phoneNumber:c,tenantId:f,stsTokenManager:b,createdAt:g,lastLoginAt:y});return R&&Array.isArray(R)&&(A.providerData=R.map(P=>({...P}))),p&&(A._redirectEventId=p),A}static async _fromIdTokenResponse(e,n,s=!1){const l=new ri;l.updateFromServerResponse(n);const c=new Gt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await wl(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];re(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?xg(l.providerUserInfo):[],u=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),f=new ri;f.updateFromIdToken(s);const p=new Gt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Eu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,g),p}}/**
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
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cg.type="NONE";const Zp=Cg;/**
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
 */function cl(r,e,n){return`firebase:${r}:${e}:${n}`}class ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=cl(this.userKey,l.apiKey,c),this.fullPersistenceKey=cl("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ii(pn(Zp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=l[0]||pn(Zp);const u=cl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const v=await vl(e,{idToken:y}).catch(()=>{});if(!v)break;w=await Gt._fromGetAccountInfoResponse(e,v,y)}else w=Gt._fromJSON(e,y);g!==c&&(f=w),c=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ii(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(u)}catch{}})),new ii(c,e,s))}}/**
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
 */function em(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tg(e))return"Blackberry";if(Rg(e))return"Webos";if(Sg(e))return"Safari";if((e.includes("chrome/")||Ig(e))&&!e.includes("edge/"))return"Chrome";if(Ng(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(r=ft()){return/firefox\//i.test(r)}function Sg(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ig(r=ft()){return/crios\//i.test(r)}function kg(r=ft()){return/iemobile/i.test(r)}function Ng(r=ft()){return/android/i.test(r)}function Tg(r=ft()){return/blackberry/i.test(r)}function Rg(r=ft()){return/webos/i.test(r)}function Xu(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _x(r=ft()){var e;return Xu(r)&&!!((e=window.navigator)!=null&&e.standalone)}function yx(){return P0()&&document.documentMode===10}function Pg(r=ft()){return Xu(r)||Ng(r)||Rg(r)||Tg(r)||/windows phone/i.test(r)||kg(r)}/**
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
 */function bg(r,e=[]){let n;switch(r){case"Browser":n=em(ft());break;case"Worker":n=`${em(ft())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${s}`}/**
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
 */class vx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((u,f)=>{try{const p=e(c);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wx(r,e={}){return wi(r,"GET","/v2/passwordPolicy",Ul(r,e))}/**
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
 */const xx=6;class Cx{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Ex{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tm(this),this.idTokenSubscription=new tm(this),this.beforeStateQueue=new vx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,l,c;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vl(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Ht(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(c=this.redirectUser)==null?void 0:c._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ix()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Yn(this));const n=e?Ct(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wx(this),n=new Cx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await gx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(f,this,"internal-error"),f.then(()=>{u||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zl(r){return Ct(r)}class tm{constructor(e){this.auth=e,this.observer=null,this.addObserver=z0(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sx(r){Ju=r}function Ix(r){return Ju.loadJS(r)}function kx(){return Ju.gapiScript}function Nx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Tx(r,e){const n=Ku(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(wr(c,e??{}))return l;yn(l,"already-initialized")}return n.initialize({options:e})}function Rx(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Px(r,e,n){const s=zl(r);re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Ag(e),{host:u,port:f}=bx(e),p=f===null?"":`:${f}`,g={url:`${c}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),re(wr(g,s.config.emulator)&&wr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,_i(u)?(ig(`${c}//${u}${p}`),sg("Auth",!0)):Ax()}function Ag(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bx(r){const e=Ag(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:nm(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:nm(u)}}}function nm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ax(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Og{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function si(r,e){return vg(r,"POST","/v1/accounts:signInWithIdp",Ul(r,e))}/**
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
 */const Ox="http://localhost";class Cr extends Og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const u=new Cr(s,l);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,si(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:Ox,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
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
 */class Dg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Dg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function Dx(r,e){return vg(r,"POST","/v1/accounts:signUp",Ul(r,e))}/**
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
 */async function Lx(r){var l;if(Ht(r.app))return Promise.reject(Yn(r));const e=zl(r);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new Zn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Dx(e,{returnSecureToken:!0}),s=await Zn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class xl extends rr{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new xl(e,n,s,l)}}function Lg(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(r,c,e,s):c})}async function Mx(r,e,n=!1){const s=await Es(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zn._forOperation(r,"link",s)}/**
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
 */async function jx(r,e,n=!1){const{auth:s}=r;if(Ht(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const c=await Es(r,Lg(s,l,e,r),n);re(c.idToken,s,"internal-error");const u=Yu(c.idToken);re(u,s,"internal-error");const{sub:f}=u;return re(r.uid===f,s,"user-mismatch"),Zn._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&yn(s,"user-mismatch"),c}}/**
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
 */async function Fx(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s="signIn",l=await Lg(r,s,e),c=await Zn._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}/**
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
 */function Ux(r,e){return Ct(r).setPersistence(e)}function zx(r,e,n,s){return Ct(r).onIdTokenChanged(e,n,s)}function Wx(r,e,n){return Ct(r).beforeAuthStateChanged(e,n)}function Vx(r,e,n,s){return Ct(r).onAuthStateChanged(e,n,s)}const Cl="__sak";/**
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
 */class Mg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bx=1e3,Hx=10;class jg extends Mg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);yx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Hx):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jg.type="LOCAL";const $x=jg;/**
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
 */class Fg extends Mg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fg.type="SESSION";const Zu=Fg;/**
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
 */function Gx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Wl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,u=this.handlersMap[l];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(u).map(async g=>g(n.origin,c)),p=await Gx(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
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
 */class Kx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const g=ed("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:l,onMessage(w){const v=w;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(v.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),l.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function nn(){return window}function Qx(r){nn().location.href=r}/**
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
 */function Ug(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function qx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yx(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Xx(){return Ug()?self:null}/**
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
 */const zg="firebaseLocalStorageDb",Jx=1,El="firebaseLocalStorage",Wg="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(r,e){return r.transaction([El],e?"readwrite":"readonly").objectStore(El)}function Zx(){const r=indexedDB.deleteDatabase(zg);return new js(r).toPromise()}function Su(){const r=indexedDB.open(zg,Jx);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(El,{keyPath:Wg})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(El)?e(s):(s.close(),await Zx(),e(await Su()))})})}async function im(r,e,n){const s=Vl(r,!0).put({[Wg]:e,value:n});return new js(s).toPromise()}async function eC(r,e){const n=Vl(r,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function sm(r,e){const n=Vl(r,!0).delete(e);return new js(n).toPromise()}const tC=800,nC=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(Xx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await qx(),!this.activeServiceWorker)return;this.sender=new Kx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await im(e,Cl,"1"),await sm(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>im(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Vl(l,!1).getAll();return new js(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const rC=Vg;new Ls(3e4,6e4);/**
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
 */function iC(r,e){return e?pn(e):(re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class td extends Og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sC(r){return Fx(r.auth,new td(r),r.bypassAuthState)}function oC(r){const{auth:e,user:n}=r;return re(n,e,"internal-error"),jx(n,new td(r),r.bypassAuthState)}async function lC(r){const{auth:e,user:n}=r;return re(n,e,"internal-error"),Mx(n,new td(r),r.bypassAuthState)}/**
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
 */class Bg{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sC;case"linkViaPopup":case"linkViaRedirect":return lC;case"reauthViaPopup":case"reauthViaRedirect":return oC;default:yn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aC=new Ls(2e3,1e4);class ti extends Bg{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aC.get())};e()}}ti.currentPopupAction=null;/**
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
 */const cC="pendingRedirect",ul=new Map;class uC extends Bg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await dC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dC(r,e){const n=pC(e),s=fC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function hC(r,e){ul.set(r._key(),e)}function fC(r){return pn(r._redirectPersistence)}function pC(r){return cl(cC,r.config.apiKey,r.name)}async function mC(r,e,n=!1){if(Ht(r.app))return Promise.reject(Yn(r));const s=zl(r),l=iC(s,e),u=await new uC(s,l,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const gC=600*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hg(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gC&&this.cachedEventUids.clear(),this.cachedEventUids.has(om(e))}saveEventToCache(e){this.cachedEventUids.add(om(e)),this.lastProcessedEventTime=Date.now()}}function om(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Hg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(r);default:return!1}}/**
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
 */async function vC(r,e={}){return wi(r,"GET","/v1/projects",e)}/**
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
 */const wC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xC=/^https?/;async function CC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await vC(r);for(const n of e)try{if(EC(n))return}catch{}yn(r,"unauthorized-domain")}function EC(r){const e=Cu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!xC.test(n))return!1;if(wC.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const SC=new Ls(3e4,6e4);function lm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function IC(r){return new Promise((e,n)=>{var l,c,u;function s(){lm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lm(),n(tn(r,"network-request-failed"))},timeout:SC.get()})}if((c=(l=nn().gapi)==null?void 0:l.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((u=nn().gapi)!=null&&u.load)s();else{const f=Nx("iframefcb");return nn()[f]=()=>{gapi.load?s():n(tn(r,"network-request-failed"))},Ix(`${kx()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw dl=null,e})}let dl=null;function kC(r){return dl=dl||IC(r),dl}/**
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
 */const NC=new Ls(5e3,15e3),TC="__/auth/iframe",RC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AC(r){const e=r.config;re(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?qu(e,RC):`https://${r.config.authDomain}/${TC}`,s={apiKey:e.apiKey,appName:r.name,v:vi},l=bC.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${yi(s).slice(1)}`}async function OC(r){const e=await kC(r),n=nn().gapi;return re(n,r,"internal-error"),e.open({where:document.body,url:AC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const u=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{c(u)},NC.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
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
 */const DC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,MC=600,jC="_blank",FC="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(r,e,n,s=LC,l=MC){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...DC,width:s.toString(),height:l.toString(),top:c,left:u},g=ft().toLowerCase();n&&(f=Ig(g)?jC:n),Eg(g)&&(e=e||FC,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[N,R])=>`${v}${N}=${R},`,"");if(_x(g)&&f!=="_self")return zC(e||"",f),new am(null);const w=window.open(e||"",f,y);re(w,r,"popup-blocked");try{w.focus()}catch{}return new am(w)}function zC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const WC="__/auth/handler",VC="emulator/auth/handler",BC=encodeURIComponent("fac");async function cm(r,e,n,s,l,c){re(r.config.authDomain,r,"auth-domain-config-required"),re(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:vi,eventId:l};if(e instanceof Dg){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",gu(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof Ms){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}r.tenantId&&(u.tid=r.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),g=p?`#${BC}=${encodeURIComponent(p)}`:"";return`${HC(r)}?${yi(f).slice(1)}${g}`}function HC({config:r}){return r.emulator?qu(r,VC):`https://${r.authDomain}/${WC}`}/**
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
 */const su="webStorageSupport";class $C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zu,this._completeRedirectFn=mC,this._overrideRedirectResult=hC}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await cm(e,n,s,Cu(),l);return UC(e,c,ed())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await cm(e,n,s,Cu(),l);return Qx(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(vn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OC(e),s=new _C(e);return n.register("authEvent",l=>(re(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},l=>{var u;const c=(u=l==null?void 0:l[0])==null?void 0:u[su];c!==void 0&&n(!!c),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Sg()||Xu()}}const GC=$C;var um="@firebase/auth",dm="1.12.0";/**
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
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(r){ci(new xr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;re(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bg(r)},g=new Ex(s,l,c,p);return Rx(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ci(new xr("auth-internal",e=>{const n=zl(e.getProvider("auth").getImmediate());return(s=>new KC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(um,dm,QC(r)),qn(um,dm,"esm2020")}/**
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
 */const YC=300,XC=rg("authIdTokenMaxAge")||YC;let hm=null;const JC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>XC)return;const l=n==null?void 0:n.token;hm!==l&&(hm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function ZC(r=dg()){const e=Ku(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Tx(r,{popupRedirectResolver:GC,persistence:[rC,$x,Zu]}),s=rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const u=JC(c.toString());Wx(n,u,()=>u(n.currentUser)),zx(n,f=>u(f))}}const l=tg("auth");return l&&Px(n,`http://${l}`),n}function eE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Sx({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=tn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",eE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var fm={};const pm="@firebase/database",mm="1.1.0";/**
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
 */let $g="";function tE(r){$g=r}/**
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
 */class nE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Gg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nE(e)}}catch{}return new rE},vr=Gg("localStorage"),iE=Gg("sessionStorage");/**
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
 */const oi=new $u("@firebase/database"),sE=(function(){let r=1;return function(){return r++}})(),Kg=function(r){const e=B0(r),n=new U0;n.update(e);const s=n.digest();return Vu.encodeByteArray(s)},Fs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=$e(s):e+=s,e+=" "}return e};let gs=null,gm=!0;const oE=function(r,e){U(!0,"Can't turn on custom loggers persistently."),oi.logLevel=xe.VERBOSE,gs=oi.log.bind(oi)},tt=function(...r){if(gm===!0&&(gm=!1,gs===null&&iE.get("logging_enabled")===!0&&oE()),gs){const e=Fs.apply(null,r);gs(e)}},Us=function(r){return function(...e){tt(r,...e)}},Iu=function(...r){const e="FIREBASE INTERNAL ERROR: "+Fs(...r);oi.error(e)},wn=function(...r){const e=`FIREBASE FATAL ERROR: ${Fs(...r)}`;throw oi.error(e),new Error(e)},dt=function(...r){const e="FIREBASE WARNING: "+Fs(...r);oi.warn(e)},lE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},aE=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ui="[MIN_NAME]",Er="[MAX_NAME]",Nr=function(r,e){if(r===e)return 0;if(r===ui||e===Er)return-1;if(e===ui||r===Er)return 1;{const n=_m(r),s=_m(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},cE=function(r,e){return r===e?0:r<e?-1:1},us=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+$e(e))},rd=function(r){if(typeof r!="object"||r===null)return $e(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=$e(e[s]),n+=":",n+=rd(r[e[s]]);return n+="}",n},Qg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function nt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const qg=function(r){U(!nd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,u,f,p;r===0?(c=0,u=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=f+s,u=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(l?1:0),g.reverse();const y=g.join("");let w="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),w=w+v}return w.toLowerCase()},uE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hE(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const fE=new RegExp("^-?(0*)\\d{1,10}$"),pE=-2147483648,mE=2147483647,_m=function(r){if(fE.test(r)){const e=Number(r);if(e>=pE&&e<=mE)return e}return null},xi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},gE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _E{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hl.OWNER="owner";/**
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
 */const id="5",Yg="v",Xg="s",Jg="r",Zg="f",e_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,t_="ls",n_="p",ku="ac",r_="websocket",i_="long_polling";/**
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
 */class s_{constructor(e,n,s,l,c=!1,u="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function o_(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===r_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===i_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vE(r)&&(n.ns=r.namespace);const l=[];return nt(n,(c,u)=>{l.push(c+"="+u)}),s+l.join("&")}/**
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
 */class wE{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return y0(this.counters_)}}/**
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
 */const ou={},lu={};function sd(r){const e=r.toString();return ou[e]||(ou[e]=new wE),ou[e]}function xE(r,e){const n=r.toString();return lu[n]||(lu[n]=e()),lu[n]}/**
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
 */class CE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&xi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ym="start",EE="close",SE="pLPCommand",IE="pRTLPCB",l_="id",a_="pw",c_="ser",kE="cb",NE="seg",TE="ts",RE="d",PE="dframe",u_=1870,d_=30,bE=u_-d_,AE=25e3,OE=3e4;class ni{constructor(e,n,s,l,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=sd(n),this.urlFn=p=>(this.appCheckToken&&(p[ku]=this.appCheckToken),o_(n,i_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OE)),aE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...c)=>{const[u,f,p,g,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===ym)this.id=f,this.password=p;else if(u===EE)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[ym]="t",s[c_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Yg]=id,this.transportSessionId&&(s[Xg]=this.transportSessionId),this.lastSessionId&&(s[t_]=this.lastSessionId),this.applicationId&&(s[n_]=this.applicationId),this.appCheckToken&&(s[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&e_.test(location.hostname)&&(s[Jg]=Zg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uE()&&!dE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zm(n),l=Qg(s,bE);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[PE]="t",s[l_]=e,s[a_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sE(),window[SE+this.uniqueCallbackIdentifier]=e,window[IE+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){tt("frame writing exception"),f.stack&&tt(f.stack),tt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[l_]=this.myID,e[a_]=this.myPW,e[c_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+d_+s.length<=u_;){const u=this.pendingSegs.shift();s=s+"&"+NE+l+"="+u.seg+"&"+TE+l+"="+u.ts+"&"+RE+l+"="+u.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(AE)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const DE=16384,LE=45e3;let Sl=null;typeof MozWebSocket<"u"?Sl=MozWebSocket:typeof WebSocket<"u"&&(Sl=WebSocket);class $t{constructor(e,n,s,l,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=sd(n),this.connURL=$t.connectionURL_(n,u,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const u={};return u[Yg]=id,typeof location<"u"&&location.hostname&&e_.test(location.hostname)&&(u[Jg]=Zg),n&&(u[Xg]=n),s&&(u[t_]=s),l&&(u[ku]=l),c&&(u[n_]=c),o_(e,r_,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vr.set("previous_websocket_failure",!0);try{let s;b0(),this.mySock=new Sl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sl!==null&&!$t.forceDisallow_}static previouslyFailed(){return vr.isInMemoryStorage||vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qg(n,DE);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Ss{static get ALL_TRANSPORTS(){return[ni,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const c of Ss.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
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
 */const ME=6e4,jE=5e3,FE=10*1024,UE=100*1024,au="t",vm="d",zE="s",wm="r",WE="e",xm="o",Cm="a",Em="n",Sm="p",VE="h";class BE{constructor(e,n,s,l,c,u,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(au in e){const n=e[au];n===Cm?this.upgradeIfSecondaryHealthy_():n===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),s=us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),s=us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(au,e);if(vm in e){const s=e[vm];if(n===VE){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zE?this.onConnectionShutdown_(s):n===wm?this.onReset_(s):n===WE?Iu("Server Error: "+s):n===xm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Iu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),id!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ME))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class h_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class f_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Il extends f_{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Im=32,km=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ce("")}function oe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function Ne(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ce(r.pieces_,e)}function ld(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function HE(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Is(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function p_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Ce(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ce(n,0)}function ue(r){return r.pieceNum_>=r.pieces_.length}function ut(r,e){const n=oe(r),s=oe(e);if(n===null)return e;if(n===s)return ut(Ne(r),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function $E(r,e){const n=Is(r,0),s=Is(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=Nr(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function ad(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class GE{constructor(e,n){this.errorPrefix_=n,this.parts_=Is(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);m_(this)}}function KE(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Fl(e),m_(r)}function QE(r){const e=r.parts_.pop();r.byteLength_-=Fl(e),r.parts_.length>0&&(r.byteLength_-=1)}function m_(r){if(r.byteLength_>km)throw new Error(r.errorPrefix_+"has a key path longer than "+km+" bytes ("+r.byteLength_+").");if(r.parts_.length>Im)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Im+") or object contains a cycle "+yr(r))}function yr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class cd extends f_{static getInstance(){return new cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ds=1e3,qE=300*1e3,Nm=30*1e3,YE=1.3,XE=3e4,JE="server_kill",Tm=3;class gn extends h_{constructor(e,n,s,l,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=qE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_($e(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Os,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,g=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const s=ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||F0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=j0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,u=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";l&&(c.q=s,c.t=l),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{l&&setTimeout(()=>{l(u.s,u.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Iu("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XE&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(w){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(w)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=v&&v.token,f=new BE(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{dt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(JE)},c))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&dt(w),p())}}}interrupt(e){tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>rd(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$g.replace(/\./g,"-")]=1,Hu()?e["framework.cordova"]=1:og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
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
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(ui,e),l=new le(ui,n);return this.compare(s,l)!==0}minPost(){return le.MIN}}/**
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
 */let sl;class g_ extends Bl{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Er,sl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,sl)}toString(){return".key"}}const li=new g_;/**
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
 */class ol{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,l&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=l??xt.EMPTY_NODE,this.right=c??xt.EMPTY_NODE}copy(e,n,s,l,c){return new Ye(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class ZE{copy(e,n,s,l,c){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new ZE;/**
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
 */function eS(r,e){return Nr(r.name,e.name)}function ud(r,e){return Nr(r,e)}/**
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
 */let Nu;function tS(r){Nu=r}const __=function(r){return typeof r=="number"?"number:"+qg(r):"string:"+r},y_=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else U(r===Nu||r.isEmpty(),"priority of unexpected type.");U(r===Nu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rm;class qe{static set __childrenNodeConstructor(e){Rm=e}static get __childrenNodeConstructor(){return Rm}constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),y_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:oe(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+__(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qg(this.value_):e+=this.value_,this.lazyHash_=Kg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=qe.VALUE_TYPE_ORDER.indexOf(n),c=qe.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let v_,w_;function nS(r){v_=r}function rS(r){w_=r}class iS extends Bl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?Nr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Er,new qe("[PRIORITY-POST]",w_))}makePost(e,n){const s=v_(e);return new le(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const je=new iS;/**
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
 */const sS=Math.log(2);class oS{constructor(e){const n=c=>parseInt(Math.log(c)/sS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(r,e,n,s){r.sort(e);const l=function(p,g){const y=g-p;let w,v;if(y===0)return null;if(y===1)return w=r[p],v=n?n(w):w,new Ye(v,w.node,Ye.BLACK,null,null);{const N=parseInt(y/2,10)+p,R=l(p,N),O=l(N+1,g);return w=r[N],v=n?n(w):w,new Ye(v,w.node,Ye.BLACK,R,O)}},c=function(p){let g=null,y=null,w=r.length;const v=function(R,O){const b=w-R,A=w;w-=R;const P=l(b+1,A),z=r[b],G=n?n(z):z;N(new Ye(G,z.node,O,null,P))},N=function(R){g?(g.left=R,g=R):(y=R,g=R)};for(let R=0;R<p.count;++R){const O=p.nextBitIsOne(),b=Math.pow(2,p.count-(R+1));O?v(b,Ye.BLACK):(v(b,Ye.BLACK),v(b,Ye.RED))}return y},u=new oS(r.length),f=c(u);return new xt(s||e,f)};/**
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
 */let cu;const ei={};class mn{static get Default(){return U(ei&&je,"ChildrenNode.ts has not been loaded"),cu=cu||new mn({".priority":ei},{".priority":je}),cu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(le.Wrap);let u=c.getNext();for(;u;)l=l||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;l?f=kl(s,e.getCompare()):f=ei;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=f,new mn(y,g)}addToIndexes(e,n){const s=gl(this.indexes_,(l,c)=>{const u=ai(this.indexSet_,c);if(U(u,"Missing index implementation for "+c),l===ei)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(le.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),kl(f,u.getCompare())}else return ei;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new le(e.name,f))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=gl(this.indexes_,l=>{if(l===ei)return l;{const c=n.get(e.name);return c?l.remove(new le(e.name,c)):l}});return new mn(s,this.indexSet_)}}/**
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
 */let hs;class ee{static get EMPTY_NODE(){return hs||(hs=new ee(new xt(ud),null,mn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&y_(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hs}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hs:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=l.isEmpty()?hs:this.priorityNode_;return new ee(l,u,c)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{U(oe(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(je,(u,f)=>{n[u]=f.val(e),s++,c&&ee.INTEGER_REGEXP_.test(u)?l=Math.max(l,Number(u)):c=!1}),!e&&c&&l<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+__(this.getPriority().val())+":"),this.forEachChild(je,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Kg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new le(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,le.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(je),l=n.getIterator(je);let c=s.getNext(),u=l.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=l.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===li?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lS extends ee{constructor(){super(new xt(ud),ee.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const zs=new lS;Object.defineProperties(le,{MIN:{value:new le(ui,ee.EMPTY_NODE)},MAX:{value:new le(Er,zs)}});g_.__EMPTY_NODE=ee.EMPTY_NODE;qe.__childrenNodeConstructor=ee;tS(zs);rS(zs);/**
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
 */const aS=!0;function He(r,e=null){if(r===null)return ee.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new qe(n,He(e))}if(!(r instanceof Array)&&aS){const n=[];let s=!1;if(nt(r,(u,f)=>{if(u.substring(0,1)!=="."){const p=He(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new le(u,p)))}}),n.length===0)return ee.EMPTY_NODE;const c=kl(n,eS,u=>u.name,ud);if(s){const u=kl(n,je.getCompare());return new ee(c,He(e),new mn({".priority":u},{".priority":je}))}else return new ee(c,He(e),mn.Default)}else{let n=ee.EMPTY_NODE;return nt(r,(s,l)=>{if(rn(r,s)&&s.substring(0,1)!=="."){const c=He(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(He(e))}}nS(He);/**
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
 */class cS extends Bl{constructor(e){super(),this.indexPath_=e,U(!ue(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?Nr(e.name,n.name):c}makePost(e,n){const s=He(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,zs);return new le(Er,e)}toString(){return Is(this.indexPath_,0).join("/")}}/**
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
 */class uS extends Bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=He(e);return new le(n,s)}toString(){return".value"}}const dS=new uS;/**
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
 */function x_(r){return{type:"value",snapshotNode:r}}function di(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function ks(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ns(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function hS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class dd{constructor(e){this.index_=e}updateChild(e,n,s,l,c,u){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(ks(n,f)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(di(n,s)):u.trackChildChange(Ns(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(je,(l,c)=>{n.hasChild(l)||s.trackChildChange(ks(l,c))}),n.isLeafNode()||n.forEachChild(je,(l,c)=>{if(e.hasChild(l)){const u=e.getImmediateChild(l);u.equals(c)||s.trackChildChange(Ns(l,c,u))}else s.trackChildChange(di(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ts{constructor(e){this.indexedFilter_=new dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,u){return this.matches(new le(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const c=this;return n.forEachChild(je,(u,f)=>{c.matches(new le(u,f))||(l=l.updateImmediateChild(u,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,u){return this.rangedFilter_.matches(new le(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let u=0;for(;c.hasNext();){const f=c.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:l=l.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let u;if(this.reverse_){const w=this.index_.getCompare();u=(v,N)=>w(N,v)}else u=this.index_.getCompare();const f=e;U(f.numChildren()===this.limit_,"");const p=new le(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const w=f.getImmediateChild(n);let v=l.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=l.getChildAfterChild(this.index_,v,this.reverse_);const N=v==null?1:u(v,p);if(y&&!s.isEmpty()&&N>=0)return c!=null&&c.trackChildChange(Ns(n,s,w)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(ks(n,w));const O=f.updateImmediateChild(n,ee.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(c!=null&&c.trackChildChange(di(v.name,v.node)),O.updateImmediateChild(v.name,v.node)):O}}else return s.isEmpty()?e:y&&u(g,p)>=0?(c!=null&&(c.trackChildChange(ks(g.name,g.node)),c.trackChildChange(di(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
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
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ui}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pS(r){return r.loadsAllData()?new dd(r.getIndex()):r.hasLimit()?new fS(r):new Ts(r)}function Pm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===je?n="$priority":r.index_===dS?n="$value":r.index_===li?n="$key":(U(r.index_ instanceof cS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=$e(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=$e(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+$e(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=$e(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+$e(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function bm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==je&&(e.i=r.index_.toString()),e}/**
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
 */class Nl extends h_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=Nl.getListenId_(e,s),f={};this.listens_[u]=f;const p=Pm(e._queryParams);this.restRequest_(c+".json",p,(g,y)=>{let w=y;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(c,w,!1,s),ai(this.listens_,u)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",l(v,null)}})}unlisten(e,n){const s=Nl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pm(e._queryParams),s=e._path.toString(),l=new Os;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=xs(f.responseText)}catch{dt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&dt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class mS{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Tl(){return{value:null,children:new Map}}function C_(r,e,n){if(ue(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=oe(e);r.children.has(s)||r.children.set(s,Tl());const l=r.children.get(s);e=Ne(e),C_(l,e,n)}}function Tu(r,e,n){r.value!==null?n(e,r.value):gS(r,(s,l)=>{const c=new Ce(e.toString()+"/"+s);Tu(l,c,n)})}function gS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class _S{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&nt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Am=10*1e3,yS=30*1e3,vS=300*1e3;class wS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _S(e);const s=Am+(yS-Am)*Math.random();_s(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nt(e,(l,c)=>{c>0&&rn(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*vS))}}/**
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
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=fd()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Rl(_e(),n,this.revert)}}else return U(oe(this.path)===e,"operationForChild called for unrelated child."),new Rl(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Rs{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Rs(this.source,_e()):new Rs(this.source,Ne(this.path))}}/**
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
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return ue(this.path)?new Sr(this.source,_e(),this.snap.getImmediateChild(e)):new Sr(this.source,Ne(this.path),this.snap)}}/**
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
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Sr(this.source,_e(),n.value):new hi(this.source,_e(),n)}else return U(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class tr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function CS(r,e,n,s){const l=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&r.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(hS(u.childName,u.snapshotNode))}),fs(r,l,"child_removed",e,s,n),fs(r,l,"child_added",e,s,n),fs(r,l,"child_moved",c,s,n),fs(r,l,"child_changed",e,s,n),fs(r,l,"value",e,s,n),l}function fs(r,e,n,s,l,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>SS(r,f,p)),u.forEach(f=>{const p=ES(r,f,c);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function ES(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function SS(r,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),l=new le(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function Hl(r,e){return{eventCache:r,serverCache:e}}function ys(r,e,n,s){return Hl(new tr(e,n,s),r.serverCache)}function E_(r,e,n,s){return Hl(r.eventCache,new tr(e,n,s))}function Pl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ir(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let uu;const IS=()=>(uu||(uu=new xt(cE)),uu);class ke{static fromObject(e){let n=new ke(null);return nt(e,(s,l)=>{n=n.set(new Ce(s),l)}),n}constructor(e,n=IS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ue(e))return null;{const s=oe(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Ne(e),n);return c!=null?{path:Me(new Ce(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new ke(null)}}set(e,n){if(ue(e))return new ke(n,this.children);{const s=oe(e),c=(this.children.get(s)||new ke(null)).set(Ne(e),n),u=this.children.insert(s,c);return new ke(this.value,u)}}remove(e){if(ue(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const l=s.remove(Ne(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new ke(null):new ke(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(ue(e))return n;{const s=oe(e),c=(this.children.get(s)||new ke(null)).setTree(Ne(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new ke(this.value,u)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ue(e))return null;{const c=oe(e),u=this.children.get(c);return u?u.findOnPath_(Ne(e),Me(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const l=oe(e),c=this.children.get(l);return c?c.foreachOnPath_(Ne(e),Me(n,l),s):new ke(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new ke(null))}}function vs(r,e,n){if(ue(e))return new Qt(new ke(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const u=ut(l,e);return c=c.updateChild(u,n),new Qt(r.writeTree_.set(l,c))}else{const l=new ke(n),c=r.writeTree_.setTree(e,l);return new Qt(c)}}}function Ru(r,e,n){let s=r;return nt(n,(l,c)=>{s=vs(s,Me(e,l),c)}),s}function Om(r,e){if(ue(e))return Qt.empty();{const n=r.writeTree_.setTree(e,new ke(null));return new Qt(n)}}function Pu(r,e){return Tr(r,e)!=null}function Tr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function Dm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(s,l)=>{e.push(new le(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new le(s,l.value))}),e}function Xn(r,e){if(ue(e))return r;{const n=Tr(r,e);return n!=null?new Qt(new ke(n)):new Qt(r.writeTree_.subtree(e))}}function bu(r){return r.writeTree_.isEmpty()}function fi(r,e){return S_(_e(),r.writeTree_,e)}function S_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=S_(Me(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
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
 */function $l(r,e){return T_(e,r)}function kS(r,e,n,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=vs(r.visibleWrites,e,n)),r.lastWriteId=s}function NS(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Ru(r.visibleWrites,e,n),r.lastWriteId=s}function TS(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function RS(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,u=r.allWrites.length-1;for(;l&&u>=0;){const f=r.allWrites[u];f.visible&&(u>=n&&PS(f,s.path)?l=!1:Dt(s.path,f.path)&&(c=!0)),u--}if(l){if(c)return bS(r),!0;if(s.snap)r.visibleWrites=Om(r.visibleWrites,s.path);else{const f=s.children;nt(f,p=>{r.visibleWrites=Om(r.visibleWrites,Me(s.path,p))})}return!0}else return!1}function PS(r,e){if(r.snap)return Dt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Dt(Me(r.path,n),e))return!0;return!1}function bS(r){r.visibleWrites=I_(r.allWrites,AS,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function AS(r){return r.visible}function I_(r,e,n){let s=Qt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const u=c.path;let f;if(c.snap)Dt(n,u)?(f=ut(n,u),s=vs(s,f,c.snap)):Dt(u,n)&&(f=ut(u,n),s=vs(s,_e(),c.snap.getChild(f)));else if(c.children){if(Dt(n,u))f=ut(n,u),s=Ru(s,f,c.children);else if(Dt(u,n))if(f=ut(u,n),ue(f))s=Ru(s,_e(),c.children);else{const p=ai(c.children,oe(f));if(p){const g=p.getChild(Ne(f));s=vs(s,_e(),g)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function k_(r,e,n,s,l){if(!s&&!l){const c=Tr(r.visibleWrites,e);if(c!=null)return c;{const u=Xn(r.visibleWrites,e);if(bu(u))return n;if(n==null&&!Pu(u,_e()))return null;{const f=n||ee.EMPTY_NODE;return fi(u,f)}}}else{const c=Xn(r.visibleWrites,e);if(!l&&bu(c))return n;if(!l&&n==null&&!Pu(c,_e()))return null;{const u=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Dt(g.path,e)||Dt(e,g.path))},f=I_(r.allWrites,u,e),p=n||ee.EMPTY_NODE;return fi(f,p)}}}function OS(r,e,n){let s=ee.EMPTY_NODE;const l=Tr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(je,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=Xn(r.visibleWrites,e);return n.forEachChild(je,(u,f)=>{const p=fi(Xn(c,new Ce(u)),f);s=s.updateImmediateChild(u,p)}),Dm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=Xn(r.visibleWrites,e);return Dm(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function DS(r,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Me(e,n);if(Pu(r.visibleWrites,c))return null;{const u=Xn(r.visibleWrites,c);return bu(u)?l.getChild(n):fi(u,l.getChild(n))}}function LS(r,e,n,s){const l=Me(e,n),c=Tr(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=Xn(r.visibleWrites,l);return fi(u,s.getNode().getImmediateChild(n))}else return null}function MS(r,e){return Tr(r.visibleWrites,e)}function jS(r,e,n,s,l,c,u){let f;const p=Xn(r.visibleWrites,e),g=Tr(p,_e());if(g!=null)f=g;else if(n!=null)f=fi(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],w=u.getCompare(),v=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let N=v.getNext();for(;N&&y.length<l;)w(N,s)!==0&&y.push(N),N=v.getNext();return y}else return[]}function FS(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function bl(r,e,n,s){return k_(r.writeTree,r.treePath,e,n,s)}function gd(r,e){return OS(r.writeTree,r.treePath,e)}function Lm(r,e,n,s){return DS(r.writeTree,r.treePath,e,n,s)}function Al(r,e){return MS(r.writeTree,Me(r.treePath,e))}function US(r,e,n,s,l,c){return jS(r.writeTree,r.treePath,e,n,s,l,c)}function _d(r,e,n){return LS(r.writeTree,r.treePath,e,n)}function N_(r,e){return T_(Me(r.treePath,e),r.writeTree)}function T_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class zS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Ns(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,ks(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,di(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Ns(s,e.snapshotNode,l.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class WS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const R_=new WS;class yd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _d(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),c=US(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
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
 */function VS(r){return{filter:r}}function BS(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function HS(r,e,n,s,l){const c=new zS;let u,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?u=Au(r,e,g.path,g.snap,s,l,c):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ue(g.path),u=Ol(r,e,g.path,g.snap,s,l,f,c))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?u=GS(r,e,g.path,g.children,s,l,c):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Ou(r,e,g.path,g.children,s,l,f,c))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?u=qS(r,e,g.path,s,l,c):u=KS(r,e,g.path,g.affectedTree,s,l,c)}else if(n.type===Kt.LISTEN_COMPLETE)u=QS(r,e,n.path,s,c);else throw gi("Unknown operation type: "+n.type);const p=c.getChanges();return $S(e,u,p),{viewCache:u,changes:p}}function $S(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Pl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(x_(Pl(e)))}}function P_(r,e,n,s,l,c){const u=e.eventCache;if(Al(s,n)!=null)return e;{let f,p;if(ue(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ir(e),y=g instanceof ee?g:ee.EMPTY_NODE,w=gd(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),w,c)}else{const g=bl(s,Ir(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=oe(n);if(g===".priority"){U(er(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const w=Lm(s,n,y,p);w!=null?f=r.filter.updatePriority(y,w):f=u.getNode()}else{const y=Ne(n);let w;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const v=Lm(s,n,u.getNode(),p);v!=null?w=u.getNode().getImmediateChild(g).updateChild(y,v):w=u.getNode().getImmediateChild(g)}else w=_d(s,g,e.serverCache);w!=null?f=r.filter.updateChild(u.getNode(),g,w,y,l,c):f=u.getNode()}}return ys(e,f,u.isFullyInitialized()||ue(n),r.filter.filtersNodes())}}function Ol(r,e,n,s,l,c,u,f){const p=e.serverCache;let g;const y=u?r.filter:r.filter.getIndexedFilter();if(ue(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),N,null)}else{const N=oe(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const R=Ne(n),b=p.getNode().getImmediateChild(N).updateChild(R,s);N===".priority"?g=y.updatePriority(p.getNode(),b):g=y.updateChild(p.getNode(),N,b,R,R_,null)}const w=E_(e,g,p.isFullyInitialized()||ue(n),y.filtersNodes()),v=new yd(l,w,c);return P_(r,w,n,l,v,f)}function Au(r,e,n,s,l,c,u){const f=e.eventCache;let p,g;const y=new yd(l,e,c);if(ue(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,u),p=ys(e,g,!0,r.filter.filtersNodes());else{const w=oe(n);if(w===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=ys(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=Ne(n),N=f.getNode().getImmediateChild(w);let R;if(ue(v))R=s;else{const O=y.getCompleteChild(w);O!=null?ld(v)===".priority"&&O.getChild(p_(v)).isEmpty()?R=O:R=O.updateChild(v,s):R=ee.EMPTY_NODE}if(N.equals(R))p=e;else{const O=r.filter.updateChild(f.getNode(),w,R,v,y,u);p=ys(e,O,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Mm(r,e){return r.eventCache.isCompleteForChild(e)}function GS(r,e,n,s,l,c,u){let f=e;return s.foreach((p,g)=>{const y=Me(n,p);Mm(e,oe(y))&&(f=Au(r,f,y,g,l,c,u))}),s.foreach((p,g)=>{const y=Me(n,p);Mm(e,oe(y))||(f=Au(r,f,y,g,l,c,u))}),f}function jm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ou(r,e,n,s,l,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ue(n)?g=s:g=new ke(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((w,v)=>{if(y.hasChild(w)){const N=e.serverCache.getNode().getImmediateChild(w),R=jm(r,N,v);p=Ol(r,p,new Ce(w),R,l,c,u,f)}}),g.children.inorderTraversal((w,v)=>{const N=!e.serverCache.isCompleteForChild(w)&&v.value===null;if(!y.hasChild(w)&&!N){const R=e.serverCache.getNode().getImmediateChild(w),O=jm(r,R,v);p=Ol(r,p,new Ce(w),O,l,c,u,f)}}),p}function KS(r,e,n,s,l,c,u){if(Al(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ue(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Ol(r,e,n,p.getNode().getChild(n),l,c,f,u);if(ue(n)){let g=new ke(null);return p.getNode().forEachChild(li,(y,w)=>{g=g.set(new Ce(y),w)}),Ou(r,e,n,g,l,c,f,u)}else return e}else{let g=new ke(null);return s.foreach((y,w)=>{const v=Me(n,y);p.isCompleteForPath(v)&&(g=g.set(y,p.getNode().getChild(v)))}),Ou(r,e,n,g,l,c,f,u)}}function QS(r,e,n,s,l){const c=e.serverCache,u=E_(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return P_(r,u,n,s,R_,l)}function qS(r,e,n,s,l,c){let u;if(Al(s,n)!=null)return e;{const f=new yd(s,e,l),p=e.eventCache.getNode();let g;if(ue(n)||oe(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=bl(s,Ir(e));else{const w=e.serverCache.getNode();U(w instanceof ee,"serverChildren would be complete if leaf node"),y=gd(s,w)}y=y,g=r.filter.updateFullNode(p,y,c)}else{const y=oe(n);let w=_d(s,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=p.getImmediateChild(y)),w!=null?g=r.filter.updateChild(p,y,w,Ne(n),f,c):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(p,y,ee.EMPTY_NODE,Ne(n),f,c):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=bl(s,Ir(e)),u.isLeafNode()&&(g=r.filter.updateFullNode(g,u,c)))}return u=e.serverCache.isFullyInitialized()||Al(s,_e())!=null,ys(e,g,u,r.filter.filtersNodes())}}/**
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
 */class YS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new dd(s.getIndex()),c=pS(s);this.processor_=VS(c);const u=n.serverCache,f=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,u.getNode(),null),g=c.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),y=new tr(p,u.isFullyInitialized(),l.filtersNodes()),w=new tr(g,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Hl(w,y),this.eventGenerator_=new xS(this.query_)}get query(){return this.query_}}function XS(r){return r.viewCache_.serverCache.getNode()}function JS(r){return Pl(r.viewCache_)}function ZS(r,e){const n=Ir(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function Fm(r){return r.eventRegistrations_.length===0}function e1(r,e){r.eventRegistrations_.push(e)}function Um(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,l);u&&s.push(u)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const u=r.eventRegistrations_[c];if(!u.matches(e))l.push(u);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function zm(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(U(Ir(r.viewCache_),"We should always have a full cache before handling merges"),U(Pl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=HS(r.processor_,l,e,n,s);return BS(r.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,b_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function t1(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(c,u)=>{s.push(di(c,u))}),n.isFullyInitialized()&&s.push(x_(n.getNode())),b_(r,s,n.getNode(),e)}function b_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return CS(r.eventGenerator_,e,n,l)}/**
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
 */let Dl;class A_{constructor(){this.views=new Map}}function n1(r){U(!Dl,"__referenceConstructor has already been defined"),Dl=r}function r1(){return U(Dl,"Reference.ts has not been loaded"),Dl}function i1(r){return r.views.size===0}function vd(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return U(c!=null,"SyncTree gave us an op for an invalid query."),zm(c,e,n,s)}else{let c=[];for(const u of r.views.values())c=c.concat(zm(u,e,n,s));return c}}function O_(r,e,n,s,l){const c=e._queryIdentifier,u=r.views.get(c);if(!u){let f=bl(n,l?s:null),p=!1;f?p=!0:s instanceof ee?(f=gd(n,s),p=!1):(f=ee.EMPTY_NODE,p=!1);const g=Hl(new tr(f,p,!1),new tr(s,l,!1));return new YS(e,g)}return u}function s1(r,e,n,s,l,c){const u=O_(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,u),e1(u,n),t1(u,n)}function o1(r,e,n,s){const l=e._queryIdentifier,c=[];let u=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())u=u.concat(Um(g,n,s)),Fm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||c.push(g.query));else{const p=r.views.get(l);p&&(u=u.concat(Um(p,n,s)),Fm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!nr(r)&&c.push(new(r1())(e._repo,e._path)),{removed:c,events:u}}function D_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jn(r,e){let n=null;for(const s of r.views.values())n=n||ZS(s,e);return n}function L_(r,e){if(e._queryParams.loadsAllData())return Gl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function M_(r,e){return L_(r,e)!=null}function nr(r){return Gl(r)!=null}function Gl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ll;function l1(r){U(!Ll,"__referenceConstructor has already been defined"),Ll=r}function a1(){return U(Ll,"Reference.ts has not been loaded"),Ll}let c1=1;class Wm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=FS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j_(r,e,n,s,l){return kS(r.pendingWriteTree_,e,n,s,l),l?Ci(r,new Sr(fd(),e,n)):[]}function u1(r,e,n,s){NS(r.pendingWriteTree_,e,n,s);const l=ke.fromObject(n);return Ci(r,new hi(fd(),e,l))}function Gn(r,e,n=!1){const s=TS(r.pendingWriteTree_,e);if(RS(r.pendingWriteTree_,e)){let c=new ke(null);return s.snap!=null?c=c.set(_e(),!0):nt(s.children,u=>{c=c.set(new Ce(u),!0)}),Ci(r,new Rl(s.path,c,n))}else return[]}function Ws(r,e,n){return Ci(r,new Sr(pd(),e,n))}function d1(r,e,n){const s=ke.fromObject(n);return Ci(r,new hi(pd(),e,s))}function h1(r,e){return Ci(r,new Rs(pd(),e))}function f1(r,e,n){const s=xd(r,n);if(s){const l=Cd(s),c=l.path,u=l.queryId,f=ut(c,e),p=new Rs(md(u),f);return Ed(r,c,p)}else return[]}function Ml(r,e,n,s,l=!1){const c=e._path,u=r.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||M_(u,e))){const p=o1(u,e,n,s);i1(u)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,w=r.syncPointTree_.findOnPath(c,(v,N)=>nr(N));if(y&&!w){const v=r.syncPointTree_.subtree(c);if(!v.isEmpty()){const N=g1(v);for(let R=0;R<N.length;++R){const O=N[R],b=O.query,A=W_(r,O);r.listenProvider_.startListening(ws(b),Ps(r,b),A.hashFn,A.onComplete)}}}!w&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(ws(e),null):g.forEach(v=>{const N=r.queryToTagMap.get(Kl(v));r.listenProvider_.stopListening(ws(v),N)}))}_1(r,g)}return f}function F_(r,e,n,s){const l=xd(r,s);if(l!=null){const c=Cd(l),u=c.path,f=c.queryId,p=ut(u,e),g=new Sr(md(f),p,n);return Ed(r,u,g)}else return[]}function p1(r,e,n,s){const l=xd(r,s);if(l){const c=Cd(l),u=c.path,f=c.queryId,p=ut(u,e),g=ke.fromObject(n),y=new hi(md(f),p,g);return Ed(r,u,y)}else return[]}function Du(r,e,n,s=!1){const l=e._path;let c=null,u=!1;r.syncPointTree_.foreachOnPath(l,(v,N)=>{const R=ut(v,l);c=c||Jn(N,R),u=u||nr(N)});let f=r.syncPointTree_.get(l);f?(u=u||nr(f),c=c||Jn(f,_e())):(f=new A_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;c!=null?p=!0:(p=!1,c=ee.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((N,R)=>{const O=Jn(R,_e());O&&(c=c.updateImmediateChild(N,O))}));const g=M_(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=Kl(e);U(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const N=y1();r.queryToTagMap.set(v,N),r.tagToQueryMap.set(N,v)}const y=$l(r.pendingWriteTree_,l);let w=s1(f,e,n,y,c,p);if(!g&&!u&&!s){const v=L_(f,e);w=w.concat(v1(r,e,v))}return w}function wd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(u,f)=>{const p=ut(u,e),g=Jn(f,p);if(g)return g});return k_(l,e,c,n,!0)}function m1(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,y)=>{const w=ut(g,n);s=s||Jn(y,w)});let l=r.syncPointTree_.get(n);l?s=s||Jn(l,_e()):(l=new A_,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=s!=null,u=c?new tr(s,!0,!1):null,f=$l(r.pendingWriteTree_,e._path),p=O_(l,e,f,c?u.getNode():ee.EMPTY_NODE,c);return JS(p)}function Ci(r,e){return U_(e,r.syncPointTree_,null,$l(r.pendingWriteTree_,_e()))}function U_(r,e,n,s){if(ue(r.path))return z_(r,e,n,s);{const l=e.get(_e());n==null&&l!=null&&(n=Jn(l,_e()));let c=[];const u=oe(r.path),f=r.operationForChild(u),p=e.children.get(u);if(p&&f){const g=n?n.getImmediateChild(u):null,y=N_(s,u);c=c.concat(U_(f,p,g,y))}return l&&(c=c.concat(vd(l,r,s,n))),c}}function z_(r,e,n,s){const l=e.get(_e());n==null&&l!=null&&(n=Jn(l,_e()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,g=N_(s,u),y=r.operationForChild(u);y&&(c=c.concat(z_(y,f,p,g)))}),l&&(c=c.concat(vd(l,r,s,n))),c}function W_(r,e){const n=e.query,s=Ps(r,n);return{hashFn:()=>(XS(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?f1(r,n._path,s):h1(r,n._path);{const c=hE(l,n);return Ml(r,n,null,c)}}}}function Ps(r,e){const n=Kl(e);return r.queryToTagMap.get(n)}function Kl(r){return r._path.toString()+"$"+r._queryIdentifier}function xd(r,e){return r.tagToQueryMap.get(e)}function Cd(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ce(r.substr(0,e))}}function Ed(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=$l(r.pendingWriteTree_,e);return vd(s,n,l,null)}function g1(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[Gl(n)];{let l=[];return n&&(l=D_(n)),nt(s,(c,u)=>{l=l.concat(u)}),l}})}function ws(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(a1())(r._repo,r._path):r}function _1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Kl(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function y1(){return c1++}function v1(r,e,n){const s=e._path,l=Ps(r,e),c=W_(r,n),u=r.listenProvider_.startListening(ws(e),l,c.hashFn,c.onComplete),f=r.syncPointTree_.subtree(s);if(l)U(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,w)=>{if(!ue(g)&&y&&nr(y))return[Gl(y).query];{let v=[];return y&&(v=v.concat(D_(y).map(N=>N.query))),nt(w,(N,R)=>{v=v.concat(R)}),v}});for(let g=0;g<p.length;++g){const y=p[g];r.listenProvider_.stopListening(ws(y),Ps(r,y))}}return u}/**
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
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Id(this.syncTree_,n)}node(){return wd(this.syncTree_,this.path_)}}const w1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Vm=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return x1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return C1(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},x1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},C1=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const u=l.getValue();return typeof u!="number"?s:u+s},V_=function(r,e,n,s){return kd(e,new Id(n,r),s)},B_=function(r,e,n){return kd(r,new Sd(e),n)};function kd(r,e,n){const s=r.getPriority().val(),l=Vm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const u=r,f=Vm(u.getValue(),e,n);return f!==u.getValue()||l!==u.getPriority().val()?new qe(f,He(l)):r}else{const u=r;return c=u,l!==u.getPriority().val()&&(c=c.updatePriority(new qe(l))),u.forEachChild(je,(f,p)=>{const g=kd(p,e.getImmediateChild(f),n);g!==p&&(c=c.updateImmediateChild(f,g))}),c}}/**
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
 */class Nd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Td(r,e){let n=e instanceof Ce?e:new Ce(e),s=r,l=oe(n);for(;l!==null;){const c=ai(s.node.children,l)||{children:{},childCount:0};s=new Nd(l,s,c),n=Ne(n),l=oe(n)}return s}function Ei(r){return r.node.value}function H_(r,e){r.node.value=e,Lu(r)}function $_(r){return r.node.childCount>0}function E1(r){return Ei(r)===void 0&&!$_(r)}function Ql(r,e){nt(r.node.children,(n,s)=>{e(new Nd(n,r,s))})}function G_(r,e,n,s){n&&e(r),Ql(r,l=>{G_(l,e,!0)})}function S1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vs(r){return new Ce(r.parent===null?r.name:Vs(r.parent)+"/"+r.name)}function Lu(r){r.parent!==null&&I1(r.parent,r.name,r)}function I1(r,e,n){const s=E1(n),l=rn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Lu(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Lu(r))}/**
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
 */const k1=/[\[\].#$\/\u0000-\u001F\u007F]/,N1=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Rd=function(r){return typeof r=="string"&&r.length!==0&&!k1.test(r)},K_=function(r){return typeof r=="string"&&r.length!==0&&!N1.test(r)},T1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),K_(r)},R1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!nd(r)||r&&typeof r=="object"&&rn(r,".sv")},P1=function(r,e,n,s){ql(jl(r,"value"),e,n)},ql=function(r,e,n){const s=n instanceof Ce?new GE(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(r+"contains a function "+yr(s)+" with contents = "+e.toString());if(nd(e))throw new Error(r+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>du/3&&Fl(e)>du)throw new Error(r+"contains a string greater than "+du+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(nt(e,(u,f)=>{if(u===".value")l=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!Rd(u)))throw new Error(r+" contains an invalid key ("+u+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KE(s,u),ql(r,f,s),QE(s)}),l&&c)throw new Error(r+' contains ".value" child '+yr(s)+" in addition to actual children.")}},b1=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=Is(s);for(let u=0;u<c.length;u++)if(!(c[u]===".priority"&&u===c.length-1)){if(!Rd(c[u]))throw new Error(r+"contains an invalid key ("+c[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($E);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Dt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},A1=function(r,e,n,s){const l=jl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];nt(e,(u,f)=>{const p=new Ce(u);if(ql(l,f,Me(n,p)),ld(p)===".priority"&&!R1(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(p)}),b1(l,c)},Q_=function(r,e,n,s){if(!K_(n))throw new Error(jl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},O1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q_(r,e,n)},q_=function(r,e){if(oe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},D1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!T1(n))throw new Error(jl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class L1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yl(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!ad(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function Y_(r,e,n){Yl(r,n),X_(r,s=>ad(s,e))}function Lt(r,e,n){Yl(r,n),X_(r,s=>Dt(s,e)||Dt(e,s))}function X_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(M1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function M1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();gs&&tt("event: "+n.toString()),xi(s)}}}/**
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
 */const j1="repo_interrupt",F1=25;class U1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tl(),this.transactionQueueTree_=new Nd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function z1(r,e,n){if(r.stats_=sd(r.repoInfo_),r.forceRestClient_||gE())r.server_=new Nl(r.repoInfo_,(s,l,c,u)=>{Bm(r,s,l,c,u)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Hm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new gn(r.repoInfo_,e,(s,l,c,u)=>{Bm(r,s,l,c,u)},s=>{Hm(r,s)},s=>{V1(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=xE(r.repoInfo_,()=>new wS(r.stats_,r.server_)),r.infoData_=new mS,r.infoSyncTree_=new Wm({startListening:(s,l,c,u)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Ws(r.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Pd(r,"connected",!1),r.serverSyncTree_=new Wm({startListening:(s,l,c,u)=>(r.server_.listen(s,c,l,(f,p)=>{const g=u(f,p);Lt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function W1(r){const n=r.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xl(r){return w1({timestamp:W1(r)})}function Bm(r,e,n,s,l){r.dataUpdateCount++;const c=new Ce(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let u=[];if(l)if(s){const p=gl(n,g=>He(g));u=p1(r.serverSyncTree_,c,p,l)}else{const p=He(n);u=F_(r.serverSyncTree_,c,p,l)}else if(s){const p=gl(n,g=>He(g));u=d1(r.serverSyncTree_,c,p)}else{const p=He(n);u=Ws(r.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=pi(r,c)),Lt(r.eventQueue_,f,u)}function Hm(r,e){Pd(r,"connected",e),e===!1&&G1(r)}function V1(r,e){nt(e,(n,s)=>{Pd(r,n,s)})}function Pd(r,e,n){const s=new Ce("/.info/"+e),l=He(n);r.infoData_.updateSnapshot(s,l);const c=Ws(r.infoSyncTree_,s,l);Lt(r.eventQueue_,s,c)}function bd(r){return r.nextWriteId_++}function B1(r,e,n){const s=m1(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=He(l).withIndex(e._queryParams.getIndex());Du(r.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=Ws(r.serverSyncTree_,e._path,c);else{const f=Ps(r.serverSyncTree_,e);u=F_(r.serverSyncTree_,e._path,c,f)}return Lt(r.eventQueue_,e._path,u),Ml(r.serverSyncTree_,e,n,null,!0),c},l=>(Bs(r,"get for query "+$e(e)+" failed: "+l),Promise.reject(new Error(l))))}function H1(r,e,n,s,l){Bs(r,"set",{path:e.toString(),value:n,priority:s});const c=Xl(r),u=He(n,s),f=wd(r.serverSyncTree_,e),p=B_(u,f,c),g=bd(r),y=j_(r.serverSyncTree_,e,p,g,!0);Yl(r.eventQueue_,y),r.server_.put(e.toString(),u.val(!0),(v,N)=>{const R=v==="ok";R||dt("set at "+e+" failed: "+v);const O=Gn(r.serverSyncTree_,g,!R);Lt(r.eventQueue_,e,O),Mu(r,l,v,N)});const w=Od(r,e);pi(r,w),Lt(r.eventQueue_,w,[])}function $1(r,e,n,s){Bs(r,"update",{path:e.toString(),value:n});let l=!0;const c=Xl(r),u={};if(nt(n,(f,p)=>{l=!1,u[f]=V_(Me(e,f),He(p),r.serverSyncTree_,c)}),l)tt("update() called with empty data.  Don't do anything."),Mu(r,s,"ok",void 0);else{const f=bd(r),p=u1(r.serverSyncTree_,e,u,f);Yl(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,y)=>{const w=g==="ok";w||dt("update at "+e+" failed: "+g);const v=Gn(r.serverSyncTree_,f,!w),N=v.length>0?pi(r,e):e;Lt(r.eventQueue_,N,v),Mu(r,s,g,y)}),nt(n,g=>{const y=Od(r,Me(e,g));pi(r,y)}),Lt(r.eventQueue_,e,[])}}function G1(r){Bs(r,"onDisconnectEvents");const e=Xl(r),n=Tl();Tu(r.onDisconnect_,_e(),(l,c)=>{const u=V_(l,c,r.serverSyncTree_,e);C_(n,l,u)});let s=[];Tu(n,_e(),(l,c)=>{s=s.concat(Ws(r.serverSyncTree_,l,c));const u=Od(r,l);pi(r,u)}),r.onDisconnect_=Tl(),Lt(r.eventQueue_,_e(),s)}function K1(r,e,n){let s;oe(e._path)===".info"?s=Du(r.infoSyncTree_,e,n):s=Du(r.serverSyncTree_,e,n),Y_(r.eventQueue_,e._path,s)}function J_(r,e,n){let s;oe(e._path)===".info"?s=Ml(r.infoSyncTree_,e,n):s=Ml(r.serverSyncTree_,e,n),Y_(r.eventQueue_,e._path,s)}function Q1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(j1)}function Bs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),tt(n,...e)}function Mu(r,e,n,s){e&&xi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const u=new Error(c);u.code=l,e(u)}})}function Z_(r,e,n){return wd(r.serverSyncTree_,e,n)||ee.EMPTY_NODE}function Ad(r,e=r.transactionQueueTree_){if(e||Jl(r,e),Ei(e)){const n=ty(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&q1(r,Vs(e),n)}else $_(e)&&Ql(e,n=>{Ad(r,n)})}function q1(r,e,n){const s=n.map(g=>g.currentWriteId),l=Z_(r,e,s);let c=l;const u=l.hash();for(let g=0;g<n.length;g++){const y=n[g];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=ut(e,y.path);c=c.updateChild(w,y.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Bs(r,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const w=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(Gn(r.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&w.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Jl(r,Td(r.transactionQueueTree_,e)),Ad(r,r.transactionQueueTree_),Lt(r.eventQueue_,e,y);for(let v=0;v<w.length;v++)xi(w[v])}else{if(g==="datastale")for(let w=0;w<n.length;w++)n[w].status===3?n[w].status=4:n[w].status=0;else{dt("transaction at "+p.toString()+" failed: "+g);for(let w=0;w<n.length;w++)n[w].status=4,n[w].abortReason=g}pi(r,e)}},u)}function pi(r,e){const n=ey(r,e),s=Vs(n),l=ty(r,n);return Y1(r,l,s),s}function Y1(r,e,n){if(e.length===0)return;const s=[];let l=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=ut(n,p.path);let y=!1,w;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,w=p.abortReason,l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=F1)y=!0,w="maxretry",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else{const v=Z_(r,p.path,u);p.currentInputSnapshot=v;const N=e[f].update(v.val());if(N!==void 0){ql("transaction failed: Data returned ",N,p.path);let R=He(N);typeof N=="object"&&N!=null&&rn(N,".priority")||(R=R.updatePriority(v.getPriority()));const b=p.currentWriteId,A=Xl(r),P=B_(R,v,A);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=P,p.currentWriteId=bd(r),u.splice(u.indexOf(b),1),l=l.concat(j_(r.serverSyncTree_,p.path,P,p.currentWriteId,p.applyLocally)),l=l.concat(Gn(r.serverSyncTree_,b,!0))}else y=!0,w="nodata",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0))}Lt(r.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(w==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(w),!1,null))))}Jl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)xi(s[f]);Ad(r,r.transactionQueueTree_)}function ey(r,e){let n,s=r.transactionQueueTree_;for(n=oe(e);n!==null&&Ei(s)===void 0;)s=Td(s,n),e=Ne(e),n=oe(e);return s}function ty(r,e){const n=[];return ny(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ny(r,e,n){const s=Ei(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ql(e,l=>{ny(r,l,n)})}function Jl(r,e){const n=Ei(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,H_(e,n.length>0?n:void 0)}Ql(e,s=>{Jl(r,s)})}function Od(r,e){const n=Vs(ey(r,e)),s=Td(r.transactionQueueTree_,e);return S1(s,l=>{hu(r,l)}),hu(r,s),G_(s,l=>{hu(r,l)}),n}function hu(r,e){const n=Ei(e);if(n){const s=[];let l=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(U(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(U(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),l=l.concat(Gn(r.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?H_(e,void 0):n.length=c+1,Lt(r.eventQueue_,Vs(e),l);for(let u=0;u<s.length;u++)xi(s[u])}}/**
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
 */function X1(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function J1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${r}'`)}return e}const $m=function(r,e){const n=Z1(r),s=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new s_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},Z1=function(r){let e="",n="",s="",l="",c="",u=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let w=r.indexOf("?");w===-1&&(w=r.length),e=r.substring(0,Math.min(y,w)),y<w&&(l=X1(r.substring(y,w)));const v=J1(r.substring(Math.min(r.length,w)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),c=s}"ns"in v&&(c=v.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:l,namespace:c}};/**
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
 */class eI{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class tI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ry{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ue(this._path)?null:ld(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=rd(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof Dd))return!1;const n=this._repo===e._repo,s=ad(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+HE(this._path)}}class xn extends Dd{constructor(e,n){super(e,n,new hd,!1)}get parent(){const e=p_(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),s=ju(this.ref,e);return new bs(this._node.getChild(n),s,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new bs(l,ju(this.ref,s),je)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(r,e){return r=Ct(r),r._checkNotDeleted("ref"),e!==void 0?ju(r._root,e):r._root}function ju(r,e){return r=Ct(r),oe(r._path)===null?O1("child","path",e):Q_("child","path",e),new xn(r._repo,Me(r._path,e))}function nI(r){return q_("remove",r._path),Zl(r,null)}function Zl(r,e){r=Ct(r),q_("set",r._path),P1("set",e,r._path);const n=new Os;return H1(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function kr(r,e){A1("update",e,r._path);const n=new Os;return $1(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function mi(r){r=Ct(r);const e=new ry(()=>{}),n=new ea(e);return B1(r._repo,r,n).then(s=>new bs(s,new xn(r._repo,r._path),r._queryParams.getIndex()))}class ea{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new eI("value",this,new bs(e.snapshotNode,new xn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tI(this,e,n):null}matches(e){return e instanceof ea?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rI(r,e,n,s,l){const c=new ry(n,void 0),u=new ea(c);return K1(r._repo,r,u),()=>J_(r._repo,r,u)}function iI(r,e,n,s){return rI(r,"value",e)}function sI(r,e,n){J_(r._repo,r,null)}n1(xn);l1(xn);/**
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
 */const oI="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let lI=!1;function aI(r,e,n,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),u=_i(c);r.repoInfo_=new s_(e,u,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function cI(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let u=$m(c,l),f=u.repoInfo,p;typeof process<"u"&&fm&&(p=fm[oI]),p?(c=`http://${p}?ns=${f.namespace}`,u=$m(c,l),f=u.repoInfo):u.repoInfo.secure;const g=new yE(r.name,r.options,e);D1("Invalid Firebase Database URL",u),ue(u.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=dI(f,r,g,new _E(r,n));return new hI(y,r)}function uI(r,e){const n=Fu[e];(!n||n[r.key]!==r)&&wn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Q1(r),delete n[r.key]}function dI(r,e,n,s){let l=Fu[e.name];l||(l={},Fu[e.name]=l);let c=l[r.toURLString()];return c&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new U1(r,lI,n,s),l[r.toURLString()]=c,c}class hI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(z1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function fI(r=dg(),e){const n=Ku(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=S0("database");s&&pI(n,...s)}return n}function pI(r,e,n,s={}){r=Ct(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&wr(s,c.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new hl(hl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:I0(s.mockUserToken,r.app.options.projectId);u=new hl(f)}_i(e)&&(ig(e),sg("Database",!0)),aI(c,l,s,u)}/**
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
 */function mI(r){tE(vi),ci(new xr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return cI(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),qn(pm,mm,r),qn(pm,mm,"esm2020")}gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};mI();const gI={apiKey:"AIzaSyCLgGHXRhXRn6yubYySyQ9WUt1e0lDckX8",authDomain:"sekimeki-3c6d9.firebaseapp.com",databaseURL:"https://sekimeki-3c6d9-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"sekimeki-3c6d9",storageBucket:"sekimeki-3c6d9.firebasestorage.app",messagingSenderId:"269784219722",appId:"1:269784219722:web:fd1ecbae99bd3da98526b3"},iy=ug(gI),fu=ZC(iy),Je=fI(iy);let sy=null;function _I(){return new Promise((r,e)=>{Ux(fu,Zu).then(()=>{Vx(fu,n=>{n&&(sy=n.uid,r(n.uid))}),Lx(fu).catch(e)}).catch(e)})}function Hs(){return sy??""}function Gm(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<4;n++)e+=r[Math.floor(Math.random()*r.length)];return e}async function yI(r,e,n){const s=Hs();let l=Gm(),c=await mi(Xe(Je,`rooms/${l}`)),u=0;for(;c.exists()&&u<10;)l=Gm(),c=await mi(Xe(Je,`rooms/${l}`)),u++;return await Zl(Xe(Je,`rooms/${l}/config`),{mode:r,layout:e,adminId:s,adminPassword:n,state:"waiting",createdAt:Date.now()}),l}async function vI(r,e){const n=await mi(Xe(Je,`rooms/${r}/config`));return n.exists()?n.val().adminPassword===e:!1}async function oy(r){return(await mi(Xe(Je,`rooms/${r}/config`))).exists()}async function wI(r){const e=Hs();await kr(Xe(Je,`rooms/${r}/config`),{adminId:e})}async function Km(r){const e=await mi(Xe(Je,`rooms/${r}/config`));return e.exists()?e.val():null}async function xI(r,e){const n=Hs();return await Zl(Xe(Je,`rooms/${r}/participants/${n}`),{name:e.name,gender:e.gender??null,avatar:e.avatar,answers:null,completed:!1}),n}async function CI(r){const e=Hs();await nI(Xe(Je,`rooms/${r}/participants/${e}`))}async function EI(r,e){const n=Hs();await kr(Xe(Je,`rooms/${r}/participants/${n}`),{answers:e,completed:!0})}async function SI(r,e,n,s,l){const c={};for(const p of e){const g=[p.id1,p.id2].sort().join("_");c[g]={...p,visible:!0}}const u={};n.forEach((p,g)=>{u[String(g)]=p});const f={};s.forEach((p,g)=>{f[String(g)]=p}),await Zl(Xe(Je,`rooms/${r}/results`),{compatibility:c,seatAssignments:u,awards:f,revealed:!1,participantTypes:l});try{await kr(Xe(Je,`rooms/${r}/config`),{state:"admin-review"})}catch(p){console.warn("Could not update room state to admin-review (results were saved):",p)}}async function II(r){return(await mi(Xe(Je,`rooms/${r}/results`))).exists()}async function kI(r,e,n){await kr(Xe(Je,`rooms/${r}/results/compatibility/${e}`),{visible:n})}async function NI(r){await kr(Xe(Je,`rooms/${r}/results`),{revealed:!0});try{await kr(Xe(Je,`rooms/${r}/config`),{state:"results"})}catch(e){console.warn("Could not update room state to results (revealed flag was set):",e)}}async function TI(r,e,n){const s={};e.forEach((c,u)=>{s[String(u)]=c});const l={};n.forEach((c,u)=>{l[String(u)]=c}),await kr(Xe(Je,`rooms/${r}/results`),{seatAssignments:s,awards:l})}function RI(r,e){const n=Xe(Je,`rooms/${r}`);return iI(n,s=>{e(s.val())}),()=>sI(n)}function PI(){var P,z,G,he,de;const[r,e]=Y.useState(""),[n,s]=Y.useState(null),[l,c]=Y.useState(null),[u,f]=Y.useState(!1);Y.useEffect(()=>{_I().then(q=>{e(q),f(!0)})},[]),Y.useEffect(()=>{if(!n){c(null);return}return RI(n,te=>{c(te)})},[n]);const p=l&&r?l.config.adminId===r?"admin":"participant":null,g=((P=l==null?void 0:l.results)==null?void 0:P.participantTypes)??{},y=l!=null&&l.participants?Object.entries(l.participants).map(([q,te])=>{var ye,ae,Ee;return{id:q,name:te.name,gender:te.gender,avatar:te.avatar,answers:te.answers??[],completed:te.completed,vector:((ye=g[q])==null?void 0:ye.vector)??te.vector,personalType:((ae=g[q])==null?void 0:ae.personalType)??te.personalType,personalTypeEmoji:((Ee=g[q])==null?void 0:Ee.personalTypeEmoji)??te.personalTypeEmoji}}):[],w=y.find(q=>q.id===r)??null,v=(z=l==null?void 0:l.results)!=null&&z.compatibility?Object.values(l.results.compatibility):[],N=v.filter(q=>q.visible!==!1),R=(G=l==null?void 0:l.results)!=null&&G.seatAssignments?Object.values(l.results.seatAssignments):[],O=(he=l==null?void 0:l.results)!=null&&he.awards?Object.values(l.results.awards):[],b=((de=l==null?void 0:l.results)==null?void 0:de.revealed)??!1,A=y.length>0&&y.every(q=>q.completed);return{uid:r,roomCode:n,roomData:l,role:p,participants:y,myParticipant:w,compatibilityResults:v,visibleResults:N,seatAssignments:R,awards:O,revealed:b,allCompleted:A,isReady:u,setRoomCode:s}}const bI={S:{E:"魂のパリピ同盟",C:"以心伝心のふたり",V:"運命の冒険パートナー",L:"恋のシンクロ率MAX",H:"爆笑ソウルメイト"},A:{E:"ノリが合う飲み仲間",C:"会話キャッチボール名人",V:"趣味トーク無限ループ",L:"じわじわ来る恋の予感",H:"ツボが近い笑い仲間"},B:{E:"新しい扉を開く関係",C:"未知の言語を学ぶ感覚",V:"お互い新世界への案内人",L:"押し引きのスリルあり",H:"笑いの化学反応待ち"},C:{E:"テンションの異文化交流",C:"沈黙すら味になる関係",V:"真逆だからこそ面白い",L:"恋の迷路を楽しんで",H:"笑いの新大陸を発見せよ"}};function AI(r){return r>=85?"S":r>=70?"A":r>=55?"B":"C"}const OI=[{condition:r=>r[0]>=4&&r[2]>=4,emoji:"🌪️",name:"お祭りハリケーン"},{condition:r=>r[0]<=2&&r[4]>=4,emoji:"🎯",name:"スナイパー芸人"},{condition:r=>r[1]>=4&&r[3]>=4,emoji:"🦁",name:"恋のライオン"},{condition:r=>r[1]<=2&&r[2]<=2,emoji:"🐱",name:"癒しの守護猫"},{condition:r=>r[0]>=4&&r[4]>=4,emoji:"🎉",name:"パーティーモンスター"},{condition:r=>r[0]>=4&&r[3]>=4,emoji:"💘",name:"情熱のストライカー"},{condition:r=>r[2]>=4&&r[4]>=4,emoji:"🎪",name:"アドベンチャーコメディアン"},{condition:r=>r[0]<=2&&r[2]<=2,emoji:"🏠",name:"おうちの守り神"},{condition:r=>r[1]>=4&&r[4]>=4,emoji:"🎤",name:"トークの魔術師"},{condition:r=>r[3]<=2&&r[1]<=2,emoji:"🌙",name:"ミステリアスな月"},{condition:r=>r[0]>=4&&r[1]>=4,emoji:"☀️",name:"太陽系リーダー"},{condition:r=>r[3]>=4&&r[2]>=4,emoji:"🚀",name:"恋のロケットランチャー"},{condition:r=>r[0]<=2&&r[3]<=2,emoji:"🍵",name:"まったり茶道マスター"},{condition:r=>r[2]<=2&&r[4]<=2,emoji:"📚",name:"哲学者の休日"},{condition:r=>r[1]<=2&&r[4]>=4,emoji:"🎭",name:"ギャップの天才"},{condition:r=>{const e=r.reduce((n,s)=>n+s,0)/5;return r.every(n=>Math.abs(n-e)<1)},emoji:"🌈",name:"万能カメレオン"}];function DI(r){for(const e of OI)if(e.condition(r))return{emoji:e.emoji,name:e.name};return{emoji:"🌈",name:"万能カメレオン"}}const pu={E:{common:["2人とも行きたい「最高の金曜夜プラン」を3秒で答えて！","理想の飲み会メンバー、有名人3人だけ呼べるなら？","一緒に行くならフェス？それとも秘境温泉？"],diff:["お互いの「理想の金曜夜」をプレゼンしてみて！","インドア派 vs アウトドア派、1分ディベート開始！","相手の趣味を1つ体験するなら何にする？"]},C:{common:["最近あった「聞いてほしい話」を30秒で！","2人で一番盛り上がれる話題は何だと思う？","お互いの第一印象、正直に言い合おう！"],diff:["じゃあ今から1分間、いつもと逆の会話スタイルで話してみよう！","「相手に聞いてみたかったこと」を3つ！","2人の会話スタイルが合体したら最強説、検証！"]},V:{common:["次の3連休、予定なかったらどこ行く？3秒で！","2人で旅行に行くならどの国？","「これだけはやってみたいこと」を1つずつ！"],diff:["相手の価値観で1日過ごすなら何する？","お互いの「譲れないこだわり」を発表！","もし2人で24時間お出かけするなら、プランどう立てる？"]},L:{common:["理想のデートプラン、相手に聞かずに考えて同時に発表！","「こんなサプライズされたらキュンとする」を告白！","恋愛映画でどのシーンに一番グッとくる？"],diff:["もし2人でドラマに出るなら、どんなジャンル？","お互いの恋愛の距離感を料理で例えると？","「この人いいな」と思う瞬間を3秒で！"]},H:{common:["今まで一番笑った出来事は？","一緒に見るなら何のお笑い番組？","相手をお笑い芸人に例えると誰？"],diff:["お互いの笑いのツボを探る質問タイム！","1分間で相手を笑わせるチャレンジ！","「この人面白いな」と思った瞬間を再現！"]}},Uu=[{id:1,axis:"E",text:"金曜の夜、理想の過ごし方は？",leftLabel:"少人数でゆったりバー",rightLabel:"大人数でワイワイ飲み会"},{id:2,axis:"E",text:"旅行先で盛り上がるのは？",leftLabel:"隠れ家カフェ巡り",rightLabel:"有名スポットで写真撮りまくり"},{id:3,axis:"C",text:"初対面の人との会話スタイルは？",leftLabel:"相手の話をじっくり聞く",rightLabel:"自分から話題をどんどん振る"},{id:4,axis:"C",text:"友達の悩み相談、あなたの対応は？",leftLabel:"まず気持ちに寄り添う",rightLabel:"一緒に解決策を考える"},{id:5,axis:"V",text:"理想の休日は？",leftLabel:"おうちでまったり",rightLabel:"外に出てアクティブに"},{id:6,axis:"V",text:"旅行のスタイルは？",leftLabel:"計画をしっかり立てる",rightLabel:"ノープランで行き当たりばったり"},{id:7,axis:"L",text:"気になる人へのアプローチは？",leftLabel:"じっくり友達から",rightLabel:"すぐに距離を詰める"},{id:8,axis:"L",text:"デートに誘うなら？",leftLabel:"自然な流れを待つ",rightLabel:"ストレートに誘う"},{id:9,axis:"H",text:"笑いのツボに近いのは？",leftLabel:"じわじわ来る知的なウィット",rightLabel:"勢いとテンションで爆笑"},{id:10,axis:"H",text:"飲み会での立ち位置は？",leftLabel:"絶妙なタイミングで一言",rightLabel:"場を仕切るMC役"}],zu={E:.25,C:.2,V:.2,L:.2,H:.15},LI=["E","V","H"],MI=["C","L"],jI=1.5,FI=1.2;function UI(r){return["E","C","V","L","H"].map(n=>{const c=Uu.filter(u=>u.axis===n).map(u=>u.id-1).map(u=>r[u]??3);return c.reduce((u,f)=>u+f,0)/c.length})}function zI(r,e){return 1-Math.abs(r-e)/4}function WI(r,e){const n=Math.abs(r-e);return Math.exp(-((n-jI)**2)/(2*FI**2))}function VI(r,e){const n=["E","C","V","L","H"],s={};return n.forEach((l,c)=>{LI.includes(l)?s[l]=zI(r[c],e[c]):MI.includes(l)&&(s[l]=WI(r[c],e[c]))}),s}function BI(r){let e=0;for(const n of Object.keys(zu))e+=zu[n]*r[n];return e}function HI(r){return Math.round(40+r*55)}function $I(r){const e=["E","C","V","L","H"];let n=-1,s="E";for(const l of e){const c=zu[l]*r[l];c>n&&(n=c,s=l)}return s}function GI(r,e){var s;const n=AI(r);return((s=bI[n])==null?void 0:s[e])??"未知の化学反応"}function KI(r){const e=[];for(let n=0;n<r.length;n++)for(let s=n+1;s<r.length;s++){const l=r[n],c=r[s];if(!l.vector||!c.vector)continue;const u=VI(l.vector,c.vector),f=BI(u),p=HI(f),g=$I(u),y=GI(p,g);e.push({id1:l.id,id2:c.id,axisScores:u,rawScore:f,displayScore:p,typeName:y,topAxis:g})}return e}function $s(r,e,n){return r.find(s=>s.id1===e&&s.id2===n||s.id1===n&&s.id2===e)}function ly(r,e){const n=Array.from({length:e},()=>Array(e).fill(0));switch(r){case"facing-long":case"facing-short":{const s=Math.ceil(e/2);for(let l=0;l<s;l++){for(let c=s;c<e;c++){const u=l,f=c-s,p=Math.abs(u-f);p===0?n[l][c]=n[c][l]=1:p===1&&(n[l][c]=n[c][l]=.5)}l+1<s&&(n[l][l+1]=n[l+1][l]=.3)}for(let l=s;l<e-1;l++)n[l][l+1]=n[l+1][l]=.3;break}case"round":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.min(Math.abs(s-l),e-Math.abs(s-l));c===1?n[s][l]=n[l][s]=1:c===2?n[s][l]=n[l][s]=.4:c===Math.floor(e/2)?n[s][l]=n[l][s]=.3:c===3&&(n[s][l]=n[l][s]=.1)}break}case"counter":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.2)}break}case"alternate":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=s<Math.ceil(e/2)?0:1,u=l<Math.ceil(e/2)?0:1,f=c===0?s:s-Math.ceil(e/2),p=u===0?l:l-Math.ceil(e/2);if(c!==u){const g=Math.abs(f-p);g===0?n[s][l]=n[l][s]=1:g===1&&(n[s][l]=n[l][s]=.5)}else Math.abs(f-p)===1&&(n[s][l]=n[l][s]=.3)}break}case"l-shape":{for(let s=0;s<e;s++)for(let l=s+1;l<e;l++){const c=Math.abs(s-l);c===1?n[s][l]=n[l][s]=1:c===2&&(n[s][l]=n[l][s]=.3)}break}}return n}function QI(r,e,n,s){if(s==="free")return n;const l=r.gender!==e.gender;return n*(l?1:.2)}function As(r,e,n,s,l){let c=0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){const p=$s(n,e[u].id,e[f].id);if(!p)continue;const g=s[r[u]][r[f]],y=QI(e[u],e[f],g,l);c+=p.rawScore*y}return c}function qI(r,e,n,s,l){let c=1/0;for(let u=0;u<e.length;u++)for(let f=u+1;f<e.length;f++){if(l==="goukon"&&e[u].gender===e[f].gender||s[r[u]][r[f]]<.5)continue;const p=$s(n,e[u].id,e[f].id);p&&p.rawScore<c&&(c=p.rawScore)}return c===1/0?0:c}function ay(r){if(r.length<=1)return[r];const e=[];for(let n=0;n<r.length;n++){const s=[...r.slice(0,n),...r.slice(n+1)];for(const l of ay(s))e.push([r[n],...l])}return e}function YI(r,e,n,s){const l=r.length,c=Array.from({length:l},(v,N)=>N),u=ay(c);let f=-1/0,p=-1/0,g=c;const y=.95;let w=-1/0;for(const v of u){const N=As(v,r,e,n,s);N>w&&(w=N)}for(const v of u){const N=As(v,r,e,n,s);if(N>=w*y){const R=qI(v,r,e,n,s);(R>p||R===p&&N>f)&&(p=R,f=N,g=[...v])}}return g}function XI(r,e,n,s){const l=r.length;let c=Array.from({length:l},(N,R)=>R);for(let N=l-1;N>0;N--){const R=Math.floor(Math.random()*(N+1));[c[N],c[R]]=[c[R],c[N]]}let u=As(c,r,e,n,s),f=[...c],p=u;const g=100,y=.995,w=.01,v=1e4;for(let N=0;N<3;N++){let R=g,O=0;for(;R>w&&O<v;){const b=Math.floor(Math.random()*l);let A=Math.floor(Math.random()*(l-1));A>=b&&A++;const P=[...c];[P[b],P[A]]=[P[A],P[b]];const z=As(P,r,e,n,s),G=z-u;(G>0||Math.random()<Math.exp(G/R))&&(c=P,u=z,u>p&&(f=[...c],p=u)),R*=y,O++}}return f}function fl(r,e,n,s){const l=r.length;if(l<=1)return r.map((f,p)=>({participantId:f.id,seatIndex:p}));const c=ly(n,l),u=l<=10?YI(r,e,c,s):XI(r,e,c,s);return r.map((f,p)=>({participantId:f.id,seatIndex:u[p]}))}function JI(r,e,n,s,l,c){if(l<=1)return fl(r,e,n,s);const u=r.length,f=ly(n,u);if(l===2){let g=c,y=-1/0;for(let w=0;w<u;w++)for(let v=w+1;v<u;v++){if(s==="goukon"&&r[w].gender!==r[v].gender)continue;const N=[...c],R=N[w].seatIndex;N[w]={...N[w],seatIndex:N[v].seatIndex},N[v]={...N[v],seatIndex:R};const O=N.map(A=>A.seatIndex),b=As(O,r,e,f,s);b>y&&(y=b,g=N)}return g}if(l===3)return fl(r,e,n,s);const p=fl(r,e,n,s);for(let g=u-1;g>0;g--)if(Math.random()<.5){const y=Math.floor(Math.random()*(g+1)),w=p[g].seatIndex;p[g]={...p[g],seatIndex:p[y].seatIndex},p[y]={...p[y],seatIndex:w}}return p}function Qm(r,e,n){const s=[],l=[];for(let A=0;A<r.length;A++)for(let P=A+1;P<r.length;P++){const z=n.find(de=>de.participantId===r[A].id),G=n.find(de=>de.participantId===r[P].id);if(!z||!G)continue;const he=Math.abs(z.seatIndex-G.seatIndex);if(he<=1||he===r.length-1){const de=$s(e,r[A].id,r[P].id);de&&l.push([r[A],r[P],de])}}const c=e.map(A=>({p1:r.find(P=>P.id===A.id1),p2:r.find(P=>P.id===A.id2),result:A}));if(l.length>0){const A=l.reduce((P,z)=>P[2].displayScore>=z[2].displayScore?P:z);s.push({emoji:"👑",title:"ベストマッチ賞",description:`最高の席順相性！${A[2].displayScore}点`,targetIds:[A[0].id,A[1].id]})}const u=c.find(A=>A.result.displayScore>=90);u&&s.push({emoji:"🔥",title:"運命の出会い賞",description:`相性${u.result.displayScore}点の奇跡！`,targetIds:[u.p1.id,u.p2.id]});let f=-1,p=null;for(const A of c){const P=Object.values(A.result.axisScores),z=P.reduce((he,de)=>he+de,0)/P.length,G=P.reduce((he,de)=>he+(de-z)**2,0)/P.length;G>f&&(f=G,p=A)}p&&s.push({emoji:"🌀",title:"カオスコンビ賞",description:"予測不能な化学反応！",targetIds:[p.p1.id,p.p2.id]});let g=-1,y=null;for(const A of c){const P=A.result.axisScores.C+A.result.axisScores.L;P>g&&(g=P,y=A)}y&&s.push({emoji:"🎭",title:"ミステリアス賞",description:"真逆だからこそ惹かれる！",targetIds:[y.p1.id,y.p2.id]});let w=-1,v=null;for(const A of r){if(!A.vector)continue;const P=A.vector[0]+A.vector[1];P>w&&(w=P,v=A)}v&&s.push({emoji:"🎤",title:"パーティーMC賞",description:"場を盛り上げるMVP！",targetIds:[v.id]});let N=1/0,R=null;for(const A of r)A.vector&&A.vector[0]<N&&(N=A.vector[0],R=A);R&&R.id!==(v==null?void 0:v.id)&&s.push({emoji:"🐱",title:"癒しオーラ賞",description:"ほっとする存在感！",targetIds:[R.id]});let O=-1,b=null;for(const A of r){const P=e.filter(G=>G.id1===A.id||G.id2===A.id);if(P.length===0)continue;const z=P.reduce((G,he)=>G+he.displayScore,0)/P.length;z>O&&(O=z,b=A)}return b&&s.push({emoji:"🔄",title:"万能プレイヤー賞",description:"誰とでも仲良くなれる！",targetIds:[b.id]}),s}const ZI=({onStart:r,onJoin:e,onAdminLogin:n})=>_.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[_.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((s,l)=>_.jsx("div",{className:"absolute rounded-full opacity-20",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:["#ff6b6b","#4ecdc4","#ffd93d"][l%3],animation:`float ${3+Math.random()*4}s ease-in-out infinite`,animationDelay:`${Math.random()*3}s`}},l))}),_.jsxs("div",{className:"animate-fade-in relative z-10",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🍻"}),_.jsx("h1",{className:"text-5xl font-black tracking-tight mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"SEKIMEKI"})}),_.jsx("p",{className:"text-lg text-gray-300 mb-12 font-medium",children:"「運命の席順、決めます」"}),_.jsxs("div",{className:"space-y-4 w-full max-w-xs mx-auto",children:[_.jsx("button",{onClick:r,className:"w-full py-4 px-8 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-200 active:scale-95",children:"ルームをつくる"}),_.jsx("button",{onClick:e,className:"w-full py-4 px-8 bg-gray-800/80 border-2 border-gray-600 text-white font-bold text-lg rounded-2xl hover:border-secondary hover:bg-gray-700/80 transition-all duration-200 active:scale-95",children:"コードで参加する"}),_.jsx("button",{onClick:n,className:"w-full py-3 px-8 text-gray-400 text-sm hover:text-accent transition-colors",children:"🔐 管理者ログイン"})]}),_.jsx("p",{className:"mt-8 text-sm text-gray-500",children:"※アプリ不要・登録不要"}),_.jsx("p",{className:"mt-2 text-xs text-gray-600",children:"各自のスマホで診断 → 最適な席順を提案！"})]}),_.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `})]}),ek=[{id:"facing-long",name:"対面ロング",icon:"═══",desc:"向かい合う長テーブル"},{id:"facing-short",name:"対面ショート",icon:"═══",desc:"向かい合う短テーブル"},{id:"round",name:"円卓",icon:"◯",desc:"丸テーブル"},{id:"counter",name:"カウンター",icon:"───",desc:"横並びカウンター席"},{id:"alternate",name:"交互型",icon:"⊞",desc:"男女交互に配置"},{id:"l-shape",name:"L字・コの字",icon:"⌐",desc:"L字型テーブル"}],tk=({onComplete:r,onBack:e})=>{const[n,s]=Y.useState("goukon"),[l,c]=Y.useState("facing-long"),[u,f]=Y.useState("");return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-8 animate-fade-in",children:"ルーム設定"}),_.jsxs("div",{className:"mb-8 animate-slide-up",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"モード"}),_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("button",{onClick:()=>s("goukon"),className:`p-4 rounded-xl border-2 transition-all ${n==="goukon"?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"💕"}),_.jsx("div",{className:"font-bold text-sm",children:"合コンモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"男女別で席配置"})]}),_.jsxs("button",{onClick:()=>s("free"),className:`p-4 rounded-xl border-2 transition-all ${n==="free"?"border-secondary bg-secondary/10 shadow-lg shadow-secondary/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-2xl mb-1",children:"🎉"}),_.jsx("div",{className:"font-bold text-sm",children:"フリーモード"}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"性別不問で席配置"})]})]})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.1s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"席の配置"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:ek.map(p=>_.jsxs("button",{onClick:()=>c(p.id),className:`p-4 rounded-xl border-2 transition-all text-left ${l===p.id?"border-accent bg-accent/10 shadow-lg shadow-accent/20":"border-gray-700 hover:border-gray-500"}`,children:[_.jsx("div",{className:"text-lg font-mono mb-1 text-gray-300",children:p.icon}),_.jsx("div",{className:"font-bold text-sm",children:p.name}),_.jsx("div",{className:"text-xs text-gray-400 mt-1",children:p.desc})]},p.id))})]}),_.jsxs("div",{className:"mb-8 animate-slide-up",style:{animationDelay:"0.2s"},children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"管理者パスワード"}),_.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),placeholder:"管理ページ用のパスワードを設定",className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"}),_.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"管理者ページに再ログインする際に必要です"})]}),_.jsx("button",{onClick:()=>r(n,l,u),disabled:!u.trim(),className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${u.trim()?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:"ルームを作成する"})]})},nk=({onJoin:r,onBack:e})=>{const[n,s]=Y.useState(["","","",""]),[l,c]=Y.useState(""),[u,f]=Y.useState(!1),p=Y.useRef([]);Y.useEffect(()=>{var R;(R=p.current[0])==null||R.focus()},[]);const g=n.join(""),y=async()=>{const R=g.trim().toUpperCase();if(R.length!==4){c("4文字のコードを入力してください");return}f(!0),c("");const O=await oy(R);if(f(!1),!O){c("ルームが見つかりません");return}r(R)},w=(R,O)=>{var P;const b=O.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g,"");if(!b)return;const A=[...n];A[R]=b,s(A),c(""),R<3&&((P=p.current[R+1])==null||P.focus()),R===3&&A.every(z=>z!=="")&&setTimeout(()=>{var G;A.join("").length===4&&((G=p.current[3])==null||G.blur())},100)},v=(R,O)=>{var b;if(O.key==="Backspace"){O.preventDefault();const A=[...n];n[R]?(A[R]="",s(A)):R>0&&(A[R-1]="",s(A),(b=p.current[R-1])==null||b.focus())}else O.key==="Enter"&&y()},N=R=>{var b;R.preventDefault();const O=R.clipboardData.getData("text").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4);if(O.length>0){const A=["","","",""];for(let z=0;z<Math.min(O.length,4);z++)A[z]=O[z];s(A),c("");const P=Math.min(O.length,3);(b=p.current[P])==null||b.focus()}};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔑"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"ルームに参加"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-3 text-center",children:"ルームコード"}),_.jsx("div",{className:"flex gap-3 justify-center",children:n.map((R,O)=>_.jsx("input",{ref:b=>{p.current[O]=b},type:"text",inputMode:"text",autoComplete:"off",autoCapitalize:"characters",value:R,onChange:b=>w(O,b.target.value),onKeyDown:b=>v(O,b),onPaste:O===0?N:void 0,className:"w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors uppercase"},O))}),l&&_.jsx("p",{className:"text-red-400 text-sm mt-3 text-center",children:l})]}),_.jsx("button",{onClick:y,disabled:g.length!==4||u,className:"w-full py-4 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:u?"確認中...":"参加する"})]})]})},ht=[{id:"dog",emoji:"🐶",label:"イヌ"},{id:"cat",emoji:"🐱",label:"ネコ"},{id:"bear",emoji:"🐻",label:"クマ"},{id:"fox",emoji:"🦊",label:"キツネ"},{id:"lion",emoji:"🦁",label:"ライオン"},{id:"rabbit",emoji:"🐰",label:"ウサギ"},{id:"panda",emoji:"🐼",label:"パンダ"},{id:"penguin",emoji:"🐧",label:"ペンギン"},{id:"koala",emoji:"🐨",label:"コアラ"},{id:"unicorn",emoji:"🦄",label:"ユニコーン"},{id:"dolphin",emoji:"🐬",label:"イルカ"},{id:"owl",emoji:"🦉",label:"フクロウ"},{id:"tiger",emoji:"🐯",label:"トラ"},{id:"monkey",emoji:"🐵",label:"サル"},{id:"wolf",emoji:"🐺",label:"オオカミ"},{id:"hamster",emoji:"🐹",label:"ハムスター"}],rk=({mode:r,usedAvatars:e,onSubmit:n,onBack:s})=>{var v;const[l,c]=Y.useState(""),[u,f]=Y.useState("male"),p=ht.filter(N=>!e.includes(N.id)),[g,y]=Y.useState(((v=p[0])==null?void 0:v.id)??ht[0].id),w=()=>{l.trim()&&n({name:l.trim(),gender:r==="goukon"?u:void 0,avatar:g})};return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:s,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-2",children:"✨"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"プロフィール登録"}),_.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50",children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"ニックネーム"}),_.jsx("input",{type:"text",value:l,onChange:N=>c(N.target.value),placeholder:"最大8文字",maxLength:8,className:"w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors",autoFocus:!0})]}),r==="goukon"&&_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"性別"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[_.jsx("button",{onClick:()=>f("male"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="male"?"border-blue-400 bg-blue-500/10 text-blue-300":"border-gray-700 text-gray-400"}`,children:"♂ 男性"}),_.jsx("button",{onClick:()=>f("female"),className:`py-2 rounded-xl border-2 font-medium transition-all ${u==="female"?"border-pink-400 bg-pink-500/10 text-pink-300":"border-gray-700 text-gray-400"}`,children:"♀ 女性"})]})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"アイコン"}),_.jsx("div",{className:"grid grid-cols-8 gap-2",children:ht.map(N=>{const R=e.includes(N.id);return _.jsx("button",{onClick:()=>!R&&y(N.id),disabled:R,className:`text-2xl p-2 rounded-xl transition-all ${R?"opacity-20 cursor-not-allowed":g===N.id?"bg-accent/20 ring-2 ring-accent scale-110":"hover:bg-gray-700/50"}`,children:N.emoji},N.id)})})]}),_.jsx("button",{onClick:w,disabled:!l.trim(),className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:"参加する！"})]})]})]})},ik=({roomCode:r,participants:e,role:n,onCalculateResults:s,onBack:l})=>{const c=e.filter(f=>f.completed).length,u=c>=2;return _.jsxs("div",{className:"min-h-screen px-6 py-8",children:[_.jsx("button",{onClick:l,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 退出"}),_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"ルーム"}),_.jsxs("div",{className:"inline-block bg-gray-800/80 rounded-2xl px-8 py-4 border border-gray-600/50 mb-4",children:[_.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"ルームコード"}),_.jsx("p",{className:"text-4xl font-mono font-black tracking-[0.3em] text-accent",children:r})]}),_.jsx("p",{className:"text-sm text-gray-400",children:"このコードを共有して参加してもらおう"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsxs("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:["参加者 (",e.length,"名)",e.length>0&&_.jsxs("span",{className:"ml-2 text-secondary",children:[c,"/",e.length," 回答済み"]})]}),_.jsx("div",{className:"space-y-2",children:e.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 animate-slide-up",style:{animationDelay:`${p*.1}s`},children:[_.jsx("span",{className:"text-2xl",children:g==null?void 0:g.emoji}),_.jsx("span",{className:"font-medium flex-1",children:f.name}),f.gender&&_.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${f.gender==="male"?"bg-blue-500/20 text-blue-300":"bg-pink-500/20 text-pink-300"}`,children:f.gender==="male"?"♂":"♀"}),_.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${f.completed?"bg-green-500/20 text-green-300":"bg-gray-600/30 text-gray-500"}`,children:f.completed?"✓ 完了":"回答中..."})]},f.id)})}),e.length===0&&_.jsx("div",{className:"text-center text-gray-500 py-8 animate-pulse-slow",children:"参加者を待っています..."})]}),n==="admin"&&_.jsx("div",{children:_.jsx("button",{onClick:s,disabled:!u,className:`w-full py-4 font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 ${u?"bg-gradient-to-r from-primary to-pink-500 text-white hover:scale-105 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:u?`🎯 結果を計算する（${c}人分）`:c<2?`あと${2-c}人の回答が必要です`:"計算できません"})})]})};function sk(r){const e=Uu.map((s,l)=>l);let n=0;for(let s=0;s<r.length;s++)n=(n<<5)-n+r.charCodeAt(s)|0;for(let s=e.length-1;s>0;s--){n=(n<<5)-n+s|0;const l=Math.abs(n)%(s+1);[e[s],e[l]]=[e[l],e[s]]}return e.map(s=>({...Uu[s],originalIndex:s}))}const mu=9,ok=({participant:r,onComplete:e})=>{const[n,s]=Y.useState(!1),[l,c]=Y.useState(0),[u,f]=Y.useState(Array(10).fill(0)),[p,g]=Y.useState(3),[y,w]=Y.useState(mu),[v,N]=Y.useState(!1),R=Ym.useMemo(()=>sk(r.id),[r.id]),O=ht.find(P=>P.id===r.avatar),b=Y.useCallback(P=>{if(v)return;N(!0);const z=[...u];z[R[l].originalIndex]=P,f(z),l<9?setTimeout(()=>{c(G=>G+1),g(3),w(mu),N(!1)},300):setTimeout(()=>{e(z)},300)},[u,l,R,v,e]);if(Y.useEffect(()=>{if(!n)return;const P=setInterval(()=>{w(z=>z<=1?(b(3),mu):z-1)},1e3);return()=>clearInterval(P)},[n,l,b]),!n)return _.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:_.jsxs("div",{className:"animate-pop",children:[_.jsx("div",{className:"text-6xl mb-4",children:O==null?void 0:O.emoji}),_.jsxs("h2",{className:"text-3xl font-bold mb-2",children:[r.name,"さん"]}),_.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"10問の質問に答えてね（1問9秒）"}),_.jsx("button",{onClick:()=>s(!0),className:"py-4 px-12 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95",children:"スタート！"})]})});const A=R[l];return _.jsxs("div",{className:"min-h-screen flex flex-col px-6 py-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-xl",children:O==null?void 0:O.emoji}),_.jsx("span",{className:"text-sm font-medium text-gray-400",children:r.name})]}),_.jsxs("span",{className:"text-sm text-gray-500",children:[l+1," / 10"]})]}),_.jsx("div",{className:"w-full h-1.5 bg-gray-800 rounded-full mb-2 overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300",style:{width:`${(l+1)/10*100}%`}})}),_.jsx("div",{className:"flex justify-end mb-6",children:_.jsxs("div",{className:`text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${y<=3?"bg-red-500/20 text-red-400 animate-pulse":"bg-gray-800 text-gray-400"}`,children:[y,"s"]})}),_.jsx("div",{className:"flex-1 flex flex-col justify-center",children:_.jsxs("div",{className:`animate-slide-in-right ${v?"opacity-50":""}`,children:[_.jsx("h3",{className:"text-2xl font-bold text-center mb-12 leading-relaxed",children:A.text}),_.jsxs("div",{className:"flex justify-between mb-4 px-2",children:[_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-left",children:A.leftLabel}),_.jsx("span",{className:"text-xs text-gray-400 max-w-[120px] text-right",children:A.rightLabel})]}),_.jsx("div",{className:"flex gap-3 justify-center mb-8",children:[1,2,3,4,5].map(P=>_.jsx("button",{onClick:()=>g(P),className:`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-200 ${p===P?"bg-gradient-to-br from-primary to-pink-500 text-white scale-110 shadow-lg shadow-primary/30":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:P},P))}),_.jsx("button",{onClick:()=>b(p),disabled:v,className:"w-full py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50",children:l<9?"次へ":"回答完了！"})]},l)})]})},lk=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onTogglePair:c,onReveal:u,onReshuffle:f,revealed:p})=>{const g=[...e].sort((y,w)=>w.displayScore-y.displayScore);return _.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[_.jsx("div",{className:"text-4xl mb-2",children:"👑"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.jsx("span",{className:"bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",children:"管理者画面"})}),_.jsx("p",{className:"text-sm text-gray-400",children:p?"結果は公開済みです":"表示するペアを選択して結果を公開してください"})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"ペア表示設定"}),_.jsx("div",{className:"space-y-2",children:g.map(y=>{const w=r.find(A=>A.id===y.id1),v=r.find(A=>A.id===y.id2);if(!w||!v)return null;const N=ht.find(A=>A.id===w.avatar),R=ht.find(A=>A.id===v.avatar),O=[y.id1,y.id2].sort().join("_"),b=y.visible!==!1;return _.jsxs("div",{className:`rounded-xl p-4 border transition-all ${b?"bg-gray-800/60 border-gray-600/50":"bg-gray-900/40 border-gray-800/50 opacity-60"}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{onClick:()=>c(O,!b),className:`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${b?"bg-secondary":"bg-gray-700"}`,children:_.jsx("div",{className:`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${b?"translate-x-6":"translate-x-0.5"}`})}),_.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[_.jsx("span",{className:"text-lg",children:N==null?void 0:N.emoji}),_.jsx("span",{className:"text-sm truncate",children:w.name}),_.jsx("span",{className:"text-gray-600 text-xs",children:"×"}),_.jsx("span",{className:"text-sm truncate",children:v.name}),_.jsx("span",{className:"text-lg",children:R==null?void 0:R.emoji})]}),_.jsxs("div",{className:"flex-shrink-0 text-right",children:[_.jsx("span",{className:`text-lg font-bold ${y.displayScore>=85?"text-primary":y.displayScore>=70?"text-accent":y.displayScore>=55?"text-secondary":"text-gray-400"}`,children:y.displayScore}),_.jsx("span",{className:"text-xs text-gray-500",children:"点"})]})]}),_.jsx("div",{className:"mt-1 ml-15 text-xs text-gray-500 pl-[60px]",children:y.typeName})]},O)})})]}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"称号プレビュー"}),_.jsx("div",{className:"space-y-2",children:s.map((y,w)=>{const v=y.targetIds.map(N=>r.find(R=>R.id===N)).filter(Boolean);return _.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-2 border border-gray-700/30",children:[_.jsx("span",{className:"text-xl",children:y.emoji}),_.jsxs("div",{className:"flex-1",children:[_.jsx("span",{className:"text-sm font-medium text-accent",children:y.title}),_.jsx("span",{className:"text-xs text-gray-500 ml-2",children:v.map(N=>N.name).join(" & ")})]})]},w)})})]}),_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsx("div",{className:"flex gap-3 max-w-lg mx-auto",children:p?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:f,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:()=>{},className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl transition-all",children:"✅ 公開済み"})]}):_.jsx("button",{onClick:u,className:"flex-1 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95 animate-glow",children:"🎉 結果を公開する"})})})]})},ak=({participants:r,results:e,seatAssignments:n,awards:s,layout:l,onReshuffle:c,onShowMatrix:u,reshuffleCount:f})=>{const[p,g]=Y.useState("countdown"),[y,w]=Y.useState(3),[v,N]=Y.useState(0),[R,O]=Y.useState(0),[b,A]=Y.useState(!1),[P,z]=Y.useState(null),G=[...r].sort((q,te)=>{const ye=n.find(Ee=>Ee.participantId===q.id),ae=n.find(Ee=>Ee.participantId===te.id);return((ye==null?void 0:ye.seatIndex)??0)-((ae==null?void 0:ae.seatIndex)??0)});Y.useEffect(()=>{if(f>1){g("done"),N(r.length),O(10);return}if(p==="countdown"){const q=setInterval(()=>{w(te=>te<=1?(clearInterval(q),g("seats"),0):te-1)},1e3);return()=>clearInterval(q)}if(p==="seats"){const q=setInterval(()=>{N(te=>te>=r.length?(clearInterval(q),setTimeout(()=>g("scores"),500),te):te+1)},400);return()=>clearInterval(q)}if(p==="scores"){const q=he(),te=setInterval(()=>{O(ye=>ye>=q.length?(clearInterval(te),setTimeout(()=>g("awards"),500),ye):ye+1)},800);return()=>clearInterval(te)}p==="awards"&&setTimeout(()=>g("done"),2e3)},[p,r.length,f]);function he(){const q=[];for(let te=0;te<G.length-1;te++){const ye=G[te],ae=G[te+1],Ee=$s(e,ye.id,ae.id);Ee&&q.push({p1:ye,p2:ae,result:Ee})}return q}const de=he();return p==="countdown"?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-8xl font-black text-primary animate-pop",children:y},y),_.jsx("p",{className:"text-gray-400 mt-4",children:"運命の席順を発表..."})]})}):_.jsxs("div",{className:"min-h-screen px-6 py-8 pb-32",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("h2",{className:"text-3xl font-black mb-2 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"席順発表！"})}),_.jsx("p",{className:"text-gray-400 text-sm",children:"🍻 この席順で乾杯！"})]}),_.jsx("div",{className:"mb-8",children:_.jsx(dk,{participants:G,revealedCount:v,layout:l})}),(p==="scores"||p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"隣り合うペアの相性"}),_.jsx("div",{className:"space-y-3",children:de.map((q,te)=>{if(te>=R&&p!=="done")return null;const ye=ht.find(We=>We.id===q.p1.avatar),ae=ht.find(We=>We.id===q.p2.avatar),Ee=`${q.p1.id}-${q.p2.id}`;return _.jsxs("div",{className:"animate-slide-up",style:{animationDelay:`${te*.1}s`},children:[_.jsxs("button",{onClick:()=>z(P===Ee?null:Ee),className:"w-full bg-gray-800/60 rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-2xl",children:ye==null?void 0:ye.emoji}),_.jsx("span",{className:"text-sm font-medium",children:q.p1.name}),_.jsx("span",{className:"text-gray-600",children:"×"}),_.jsx("span",{className:"text-sm font-medium",children:q.p2.name}),_.jsx("span",{className:"text-2xl",children:ae==null?void 0:ae.emoji})]}),_.jsx("div",{className:"text-right",children:_.jsx(ck,{score:q.result.displayScore})})]}),_.jsx("div",{className:"mt-2 text-sm text-secondary font-medium",children:q.result.typeName})]}),P===Ee&&_.jsx("div",{className:"mt-2 space-y-2 animate-slide-up",children:uk(q.result).map((We,rt)=>_.jsxs("div",{className:"bg-gray-900/60 rounded-xl p-3 border border-gray-700/30",children:[_.jsx("div",{className:"text-xs text-accent mb-1",children:["💬 共通点探し","🔍 違い発見","💭 妄想系"][rt]}),_.jsx("p",{className:"text-sm",children:We})]},rt))})]},Ee)})})]}),(p==="awards"||p==="done")&&_.jsxs("div",{className:"mb-8 animate-fade-in",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"称号発表！"}),_.jsx("div",{className:"space-y-3",children:s.map((q,te)=>{const ye=q.targetIds.map(ae=>r.find(Ee=>Ee.id===ae)).filter(Boolean);return _.jsx("div",{className:"bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-accent/20 animate-pop",style:{animationDelay:`${te*.15}s`},children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-3xl",children:q.emoji}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold text-accent",children:q.title}),_.jsx("div",{className:"text-sm text-gray-300",children:q.description}),_.jsx("div",{className:"text-xs text-gray-500 mt-1",children:ye.map(ae=>ae.name).join(" & ")})]})]})},te)})})]}),p==="done"&&_.jsx("p",{className:"text-center text-xs text-gray-600 mb-6",children:"※ あくまでお楽しみ診断です"}),p==="done"&&_.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-200 via-dark-200 to-transparent",children:_.jsxs("div",{className:"flex gap-3 max-w-lg mx-auto",children:[c&&_.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all active:scale-95",children:"🔄 席替え"}),_.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-secondary to-teal-400 text-white font-bold rounded-xl hover:scale-105 transition-all active:scale-95",children:"📊 相性一覧"})]})})]})};function ck({score:r}){const e=r>=85?"text-primary":r>=70?"text-accent":r>=55?"text-secondary":"text-gray-400";return _.jsxs("span",{className:`text-2xl font-black ${e}`,children:[r,_.jsx("span",{className:"text-sm font-normal text-gray-500",children:"点"})]})}function uk(r){var p,g,y;const e=Object.entries(r.axisScores);e.sort((w,v)=>v[1]-w[1]);const n=e[0][0],s=e[e.length-1][0],l=[],c=((p=pu[n])==null?void 0:p.common)??[],u=((g=pu[s])==null?void 0:g.diff)??[],f=((y=pu.L)==null?void 0:y.common)??[];return l.push(c[Math.floor(Math.random()*c.length)]??"好きな食べ物は？"),l.push(u[Math.floor(Math.random()*u.length)]??"お互いの趣味を紹介！"),l.push(f[Math.floor(Math.random()*f.length)]??"もし2人でドラマに出るなら？"),l}function dk({participants:r,revealedCount:e,layout:n}){const s=Math.ceil(r.length/2);if(n==="facing-long"||n==="facing-short"||n==="alternate"){const l=r.slice(0,s),c=r.slice(s);return _.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-3 justify-center",children:l.map((u,f)=>_.jsx(ll,{participant:u,revealed:f<e,delay:f*.2},u.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full my-2"}),_.jsx("div",{className:"flex gap-3 justify-center",children:c.map((u,f)=>_.jsx(ll,{participant:u,revealed:s+f<e,delay:(s+f)*.2},u.id))})]})}return n==="round"?_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"relative",style:{width:280,height:260},children:[_.jsx("div",{className:"absolute rounded-full bg-amber-900/30 border-2 border-amber-800/40",style:{width:100*1.2,height:100*1.2,left:140-100*.6,top:130-100*.6}}),r.map((f,p)=>{const g=2*Math.PI*p/r.length-Math.PI/2,y=140+100*Math.cos(g)-32,w=130+100*Math.sin(g)-28;return _.jsx("div",{className:"absolute",style:{left:y,top:w},children:_.jsx(ll,{participant:f,revealed:p<e,delay:p*.2,compact:!0})},f.id)})]})}):_.jsxs("div",{className:"flex flex-col items-center gap-2",children:[_.jsx("div",{className:"flex gap-2 justify-center flex-wrap",children:r.map((l,c)=>_.jsx(ll,{participant:l,revealed:c<e,delay:c*.2},l.id))}),_.jsx("div",{className:"w-full max-w-sm h-3 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 rounded-full"})]})}function ll({participant:r,revealed:e,delay:n,compact:s}){const l=ht.find(c=>c.id===r.avatar);return e?_.jsxs("div",{className:`${s?"w-14 p-1.5":"w-16 p-2"} bg-gray-800/80 rounded-xl border border-gray-600/50 text-center animate-slot-spin`,style:{animationDelay:`${n}s`},children:[_.jsx("div",{className:s?"text-xl":"text-2xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:`${s?"text-[10px]":"text-xs"} font-medium mt-1 truncate`,children:r.name})]}):_.jsx("div",{className:`${s?"w-14 h-14":"w-16 h-20"} bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center`,children:_.jsx("span",{className:"text-gray-600 text-lg",children:"?"})})}const hk={E:"テンション波長",C:"会話スタイル",V:"価値観ベクトル",L:"恋愛スタンス",H:"ユーモア相性"},fk=({participants:r,results:e,onBack:n})=>{const[s,l]=Y.useState(null),c=f=>f>=85?"bg-primary/80":f>=70?"bg-accent/60":f>=55?"bg-secondary/50":"bg-gray-600/40",u=f=>f>=85?"text-white font-bold":f>=70||f>=55?"text-white":"text-gray-300";return _.jsxs("div",{className:"min-h-screen px-4 py-8",children:[_.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors",children:"← 席順に戻る"}),_.jsx("h2",{className:"text-2xl font-bold mb-6 animate-fade-in",children:_.jsx("span",{className:"bg-gradient-to-r from-secondary to-teal-400 bg-clip-text text-transparent",children:"相性マトリクス"})}),_.jsx("div",{className:"overflow-x-auto mb-8",children:_.jsxs("table",{className:"w-full border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{className:"w-12"}),r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("th",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:p==null?void 0:p.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]},f.id)})]})}),_.jsx("tbody",{children:r.map((f,p)=>{const g=ht.find(y=>y.id===f.avatar);return _.jsxs("tr",{children:[_.jsxs("td",{className:"p-1 text-center",children:[_.jsx("div",{className:"text-lg",children:g==null?void 0:g.emoji}),_.jsx("div",{className:"text-[10px] text-gray-400 truncate max-w-[48px]",children:f.name})]}),r.map((y,w)=>{if(p===w)return _.jsx("td",{className:"p-1",children:_.jsx("div",{className:"w-12 h-12 bg-gray-800/30 rounded-lg flex items-center justify-center",children:_.jsx("span",{className:"text-gray-700",children:"-"})})},y.id);const v=$s(e,f.id,y.id);return v?_.jsx("td",{className:"p-1",children:_.jsx("button",{onClick:()=>l({p1:f,p2:y,result:v}),className:`w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${c(v.displayScore)}`,children:_.jsx("span",{className:`text-sm ${u(v.displayScore)}`,children:v.displayScore})})},y.id):_.jsx("td",{},y.id)})]},f.id)})})]})}),_.jsxs("div",{className:"flex items-center justify-center gap-4 mb-8 text-xs text-gray-400",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-primary/80"})," 85+"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-accent/60"})," 70-84"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-secondary/50"})," 55-69"]}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("div",{className:"w-4 h-4 rounded bg-gray-600/40"})," 40-54"]})]}),s&&_.jsx(pk,{p1:s.p1,p2:s.p2,result:s.result,onClose:()=>l(null)}),_.jsxs("div",{className:"mb-8",children:[_.jsx("h3",{className:"text-lg font-bold mb-4",children:"みんなのタイプ"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map(f=>{const p=ht.find(g=>g.id===f.avatar);return _.jsxs("div",{className:"bg-gray-800/60 rounded-xl p-3 border border-gray-700/50",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("span",{className:"text-2xl",children:p==null?void 0:p.emoji}),_.jsx("span",{className:"font-medium text-sm",children:f.name})]}),_.jsxs("div",{className:"text-lg",children:[f.personalTypeEmoji," ",f.personalType]}),f.vector&&_.jsx("div",{className:"mt-2 space-y-1",children:["E","C","V","L","H"].map((g,y)=>_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[10px] text-gray-500 w-8",children:g}),_.jsx("div",{className:"flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all",style:{width:`${(f.vector[y]-1)/4*100}%`}})}),_.jsx("span",{className:"text-[10px] text-gray-500",children:f.vector[y].toFixed(1)})]},g))})]},f.id)})})]})]})};function pk({p1:r,p2:e,result:n,onClose:s}){const l=ht.find(u=>u.id===r.avatar),c=ht.find(u=>u.id===e.avatar);return _.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6",onClick:s,children:_.jsxs("div",{className:"bg-dark-200 rounded-2xl p-6 w-full max-w-sm border border-gray-700 animate-pop",onClick:u=>u.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:l==null?void 0:l.emoji}),_.jsx("div",{className:"text-sm font-medium",children:r.name})]}),_.jsx("div",{className:"text-2xl text-primary",children:"×"}),_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"text-3xl",children:c==null?void 0:c.emoji}),_.jsx("div",{className:"text-sm font-medium",children:e.name})]})]}),_.jsxs("div",{className:"text-center mb-4",children:[_.jsx("span",{className:"text-4xl font-black text-primary",children:n.displayScore}),_.jsx("span",{className:"text-lg text-gray-400",children:"点"})]}),_.jsx("div",{className:"text-center text-secondary font-medium mb-6",children:n.typeName}),_.jsx("div",{className:"space-y-3 mb-6",children:["E","C","V","L","H"].map(u=>{const p=n.axisScores[u]*100;return _.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[_.jsx("span",{className:"text-gray-400",children:hk[u]}),_.jsxs("span",{className:"text-gray-300",children:[Math.round(p),"%"]})]}),_.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500",style:{width:`${p}%`}})})]},u)})}),_.jsx("button",{onClick:s,className:"w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all",children:"閉じる"})]})})}const mk=({onLogin:r,onBack:e})=>{const[n,s]=Y.useState(["","","",""]),[l,c]=Y.useState(""),[u,f]=Y.useState(""),[p,g]=Y.useState(!1),y=Y.useRef([]);Y.useEffect(()=>{var b;(b=y.current[0])==null||b.focus()},[]);const w=n.join(""),v=async()=>{const b=w.trim().toUpperCase();if(b.length!==4){f("4文字のルームコードを入力してください");return}if(!l.trim()){f("パスワードを入力してください");return}if(g(!0),f(""),!await oy(b)){f("ルームが見つかりません"),g(!1);return}const P=await vI(b,l.trim());if(g(!1),!P){f("パスワードが正しくありません");return}r(b)},N=(b,A)=>{var G;const P=A.slice(-1).toUpperCase().replace(/[^A-Z0-9]/g,"");if(!P)return;const z=[...n];z[b]=P,s(z),f(""),b<3&&((G=y.current[b+1])==null||G.focus())},R=(b,A)=>{var P;if(A.key==="Backspace"){A.preventDefault();const z=[...n];n[b]?(z[b]="",s(z)):b>0&&(z[b-1]="",s(z),(P=y.current[b-1])==null||P.focus())}else A.key==="Enter"&&v()},O=b=>{b.preventDefault();const A=b.clipboardData.getData("text").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4);if(A.length>0){const P=["","","",""];for(let z=0;z<Math.min(A.length,4);z++)P[z]=A[z];s(P),f("")}};return _.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6",children:[_.jsx("button",{onClick:e,className:"absolute top-6 left-6 text-gray-400 hover:text-white transition-colors",children:"← 戻る"}),_.jsxs("div",{className:"w-full max-w-xs animate-fade-in",children:[_.jsx("div",{className:"text-4xl text-center mb-4",children:"🔐"}),_.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"管理者ログイン"}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-3 text-center",children:"ルームコード"}),_.jsx("div",{className:"flex gap-3 justify-center",children:n.map((b,A)=>_.jsx("input",{ref:P=>{y.current[A]=P},type:"text",inputMode:"text",autoComplete:"off",autoCapitalize:"characters",value:b,onChange:P=>N(A,P.target.value),onKeyDown:P=>R(A,P),onPaste:A===0?O:void 0,className:"w-14 h-16 bg-gray-900/60 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-mono font-bold focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors uppercase"},A))})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{className:"block text-sm text-gray-400 mb-2 text-center",children:"パスワード"}),_.jsx("input",{type:"password",value:l,onChange:b=>{c(b.target.value),f("")},placeholder:"管理者パスワード",className:"w-full bg-gray-900/60 border-2 border-gray-600 rounded-xl px-4 py-4 text-white text-center placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors",onKeyDown:b=>b.key==="Enter"&&v()})]}),u&&_.jsx("p",{className:"text-red-400 text-sm mb-4 text-center",children:u}),_.jsx("button",{onClick:v,disabled:w.length!==4||!l.trim()||p,className:"w-full py-4 bg-gradient-to-r from-accent to-yellow-400 text-dark-200 font-bold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",children:p?"確認中...":"ログイン"})]})]})},gk=()=>{var A;const r=PI(),[e,n]=Y.useState("loading"),[s,l]=Y.useState(1),[c,u]=Y.useState(null);Y.useEffect(()=>{r.isReady&&e==="loading"&&n("top")},[r.isReady,e]),Y.useEffect(()=>{if(!r.roomData||!c)return;const P=r.roomData.config.state;c==="admin"?P==="admin-review"?n("admin-review"):P==="results"&&n("result"):c==="participant"&&r.revealed&&n("result")},[(A=r.roomData)==null?void 0:A.config.state,c,r.revealed]);const f=Y.useCallback(async(P,z,G)=>{const he=await yI(P,z,G);r.setRoomCode(he),u("admin"),n("waiting")},[r]),p=Y.useCallback(async()=>{if(!(!r.roomCode||!r.roomData))try{const P=r.participants.filter(ae=>ae.completed);if(P.length<2)return;const z=P.map(ae=>{const Ee=UI(ae.answers),We=DI(Ee);return{...ae,vector:Ee,personalType:We.name,personalTypeEmoji:We.emoji}}),G=KI(z),he=r.roomData.config.mode,de=r.roomData.config.layout,q=fl(z,G,de,he),te=Qm(z,G,q),ye={};for(const ae of z)ye[ae.id]={vector:ae.vector,personalType:ae.personalType,personalTypeEmoji:ae.personalTypeEmoji};await SI(r.roomCode,G,q,te,ye),n("admin-review")}catch(P){console.error("結果の計算に失敗しました:",P),alert("結果の計算に失敗しました。もう一度お試しください。")}},[r.roomCode,r.roomData,r.participants]),g=Y.useCallback(async(P,z)=>{r.roomCode&&await kI(r.roomCode,P,z)},[r.roomCode]),y=Y.useCallback(async()=>{r.roomCode&&(await NI(r.roomCode),n("result"))},[r.roomCode]),w=Y.useCallback(async()=>{if(!r.roomCode||!r.roomData)return;const P=s+1,z=r.roomData.config.mode,G=r.roomData.config.layout,he=JI(r.participants,r.compatibilityResults,G,z,P,r.seatAssignments),de=Qm(r.participants,r.compatibilityResults,he);await TI(r.roomCode,he,de),l(P)},[r.roomCode,r.roomData,r.participants,r.compatibilityResults,r.seatAssignments,s]),v=Y.useCallback(async P=>{const z=await Km(P);if(z){try{await wI(P)}catch(G){console.warn("Could not update adminId, write access may be limited:",G)}if(r.setRoomCode(P),u("admin"),z.state==="admin-review")n("admin-review");else if(z.state==="results")n("result");else{const G=await II(P);n(G?"admin-review":"waiting")}}},[r]),N=Y.useCallback(async P=>{await Km(P)&&(r.setRoomCode(P),u("participant"),n("profile"))},[r]),R=Y.useCallback(async P=>{r.roomCode&&(await xI(r.roomCode,{name:P.name,gender:P.gender,avatar:P.avatar}),n("diagnosis"))},[r.roomCode]),O=Y.useCallback(async P=>{r.roomCode&&(await EI(r.roomCode,P),n(c==="admin"?"waiting":"waiting-results"))},[r.roomCode,c]),b=Y.useCallback(async()=>{r.roomCode&&e==="waiting"&&c==="participant"&&await CI(r.roomCode),r.setRoomCode(""),u(null),n("top")},[r,e,c]);return e==="loading"?_.jsx("div",{className:"min-h-screen flex items-center justify-center",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-4xl mb-4",children:"🍻"}),_.jsx("p",{className:"text-gray-400",children:"読み込み中..."})]})}):_.jsxs("div",{className:"max-w-lg mx-auto",children:[e==="top"&&_.jsx(ZI,{onStart:()=>n("setup"),onJoin:()=>n("join"),onAdminLogin:()=>n("admin-login")}),e==="admin-login"&&_.jsx(mk,{onLogin:v,onBack:()=>n("top")}),e==="setup"&&_.jsx(tk,{onComplete:f,onBack:()=>n("top")}),e==="join"&&_.jsx(nk,{onJoin:N,onBack:()=>n("top")}),e==="profile"&&r.roomData&&_.jsx(rk,{mode:r.roomData.config.mode,usedAvatars:r.participants.map(P=>P.avatar),onSubmit:R,onBack:b}),e==="waiting"&&r.roomCode&&c&&_.jsx(ik,{roomCode:r.roomCode,participants:r.participants,role:c,onCalculateResults:p,onBack:b}),e==="diagnosis"&&r.myParticipant&&_.jsx(ok,{participant:r.myParticipant,onComplete:O}),e==="waiting-results"&&_.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:_.jsxs("div",{className:"text-center animate-pulse-slow",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🔮"}),_.jsx("h2",{className:"text-2xl font-bold mb-2",children:"結果を待っています..."}),_.jsx("p",{className:"text-gray-400",children:r.allCompleted?"幹事が結果を準備中です":`${r.participants.filter(P=>P.completed).length} / ${r.participants.length} 人回答済み`}),_.jsx("div",{className:"mt-8 flex justify-center gap-2",children:[0,1,2].map(P=>_.jsx("div",{className:"w-3 h-3 bg-primary rounded-full animate-bounce",style:{animationDelay:`${P*.15}s`}},P))})]})}),e==="admin-review"&&r.roomData&&_.jsx(lk,{participants:r.participants,results:r.compatibilityResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onTogglePair:g,onReveal:y,onReshuffle:w,revealed:r.revealed}),e==="result"&&r.roomData&&_.jsx(ak,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,seatAssignments:r.seatAssignments,awards:r.awards,layout:r.roomData.config.layout,onReshuffle:c==="admin"?w:void 0,onShowMatrix:()=>n("matrix"),reshuffleCount:s}),e==="matrix"&&_.jsx(fk,{participants:r.participants,results:c==="admin"?r.compatibilityResults:r.visibleResults,onBack:()=>n("result")})]})};p0.createRoot(document.getElementById("root")).render(_.jsx(Ym.StrictMode,{children:_.jsx(gk,{})}));

function lE(i,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in i)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(i,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function uE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Sh={exports:{}},la={},Ah={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function cE(){if(dm)return Ae;dm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),P=Symbol.iterator;function M(V){return V===null||typeof V!="object"?null:(V=P&&V[P]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,G={};function j(V,z,ce){this.props=V,this.context=z,this.refs=G,this.updater=ce||B}j.prototype.isReactComponent={},j.prototype.setState=function(V,z){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,z,"setState")},j.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ue(){}ue.prototype=j.prototype;function he(V,z,ce){this.props=V,this.context=z,this.refs=G,this.updater=ce||B}var te=he.prototype=new ue;te.constructor=he,Q(te,j.prototype),te.isPureReactComponent=!0;var le=Array.isArray,Me=Object.prototype.hasOwnProperty,Re={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,z,ce){var Ie,Se={},Ne=null,be=null;if(z!=null)for(Ie in z.ref!==void 0&&(be=z.ref),z.key!==void 0&&(Ne=""+z.key),z)Me.call(z,Ie)&&!N.hasOwnProperty(Ie)&&(Se[Ie]=z[Ie]);var Fe=arguments.length-2;if(Fe===1)Se.children=ce;else if(1<Fe){for(var $e=Array(Fe),mt=0;mt<Fe;mt++)$e[mt]=arguments[mt+2];Se.children=$e}if(V&&V.defaultProps)for(Ie in Fe=V.defaultProps,Fe)Se[Ie]===void 0&&(Se[Ie]=Fe[Ie]);return{$$typeof:i,type:V,key:Ne,ref:be,props:Se,_owner:Re.current}}function A(V,z){return{$$typeof:i,type:V.type,key:z,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var z={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return z[ce]})}var x=/\/+/g;function S(V,z){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):z.toString(36)}function tt(V,z,ce,Ie,Se){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Ne){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case i:case e:be=!0}}if(be)return be=V,Se=Se(be),V=Ie===""?"."+S(be,0):Ie,le(Se)?(ce="",V!=null&&(ce=V.replace(x,"$&/")+"/"),tt(Se,z,ce,"",function(mt){return mt})):Se!=null&&(C(Se)&&(Se=A(Se,ce+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(x,"$&/")+"/")+V)),z.push(Se)),1;if(be=0,Ie=Ie===""?".":Ie+":",le(V))for(var Fe=0;Fe<V.length;Fe++){Ne=V[Fe];var $e=Ie+S(Ne,Fe);be+=tt(Ne,z,ce,$e,Se)}else if($e=M(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(Ne=V.next()).done;)Ne=Ne.value,$e=Ie+S(Ne,Fe++),be+=tt(Ne,z,ce,$e,Se);else if(Ne==="object")throw z=String(V),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return be}function kt(V,z,ce){if(V==null)return V;var Ie=[],Se=0;return tt(V,Ie,"","",function(Ne){return z.call(ce,Ne,Se++)}),Ie}function Nt(V){if(V._status===-1){var z=V._result;z=z(),z.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=z)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},J={transition:null},fe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:J,ReactCurrentOwner:Re};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:kt,forEach:function(V,z,ce){kt(V,function(){z.apply(this,arguments)},ce)},count:function(V){var z=0;return kt(V,function(){z++}),z},toArray:function(V){return kt(V,function(z){return z})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=j,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=he,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ae.act=ee,Ae.cloneElement=function(V,z,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=Q({},V.props),Se=V.key,Ne=V.ref,be=V._owner;if(z!=null){if(z.ref!==void 0&&(Ne=z.ref,be=Re.current),z.key!==void 0&&(Se=""+z.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in z)Me.call(z,$e)&&!N.hasOwnProperty($e)&&(Ie[$e]=z[$e]===void 0&&Fe!==void 0?Fe[$e]:z[$e])}var $e=arguments.length-2;if($e===1)Ie.children=ce;else if(1<$e){Fe=Array($e);for(var mt=0;mt<$e;mt++)Fe[mt]=arguments[mt+2];Ie.children=Fe}return{$$typeof:i,type:V.type,key:Se,ref:Ne,props:Ie,_owner:be}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ae.createElement=I,Ae.createFactory=function(V){var z=I.bind(null,V);return z.type=V,z},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:m,render:V}},Ae.isValidElement=C,Ae.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Ae.memo=function(V,z){return{$$typeof:v,type:V,compare:z===void 0?null:z}},Ae.startTransition=function(V){var z=J.transition;J.transition={};try{V()}finally{J.transition=z}},Ae.unstable_act=ee,Ae.useCallback=function(V,z){return Be.current.useCallback(V,z)},Ae.useContext=function(V){return Be.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Ae.useEffect=function(V,z){return Be.current.useEffect(V,z)},Ae.useId=function(){return Be.current.useId()},Ae.useImperativeHandle=function(V,z,ce){return Be.current.useImperativeHandle(V,z,ce)},Ae.useInsertionEffect=function(V,z){return Be.current.useInsertionEffect(V,z)},Ae.useLayoutEffect=function(V,z){return Be.current.useLayoutEffect(V,z)},Ae.useMemo=function(V,z){return Be.current.useMemo(V,z)},Ae.useReducer=function(V,z,ce){return Be.current.useReducer(V,z,ce)},Ae.useRef=function(V){return Be.current.useRef(V)},Ae.useState=function(V){return Be.current.useState(V)},Ae.useSyncExternalStore=function(V,z,ce){return Be.current.useSyncExternalStore(V,z,ce)},Ae.useTransition=function(){return Be.current.useTransition()},Ae.version="18.3.1",Ae}var fm;function hd(){return fm||(fm=1,Ah.exports=cE()),Ah.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function hE(){if(pm)return la;pm=1;var i=hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,P={},M=null,B=null;v!==void 0&&(M=""+v),g.key!==void 0&&(M=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(P[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)P[w]===void 0&&(P[w]=g[w]);return{$$typeof:e,type:m,key:M,ref:B,props:P,_owner:o.current}}return la.Fragment=t,la.jsx=h,la.jsxs=h,la}var mm;function dE(){return mm||(mm=1,Sh.exports=hE()),Sh.exports}var ae=dE(),Ee=hd();const fE=uE(Ee),pE=lE({__proto__:null,default:fE},[Ee]);var eu={},Rh={exports:{}},Yt={},Ph={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function mE(){return gm||(gm=1,function(i){function e(J,fe){var ee=J.length;J.push(fe);e:for(;0<ee;){var V=ee-1>>>1,z=J[V];if(0<o(z,fe))J[V]=fe,J[ee]=z,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var fe=J[0],ee=J.pop();if(ee!==fe){J[0]=ee;e:for(var V=0,z=J.length,ce=z>>>1;V<ce;){var Ie=2*(V+1)-1,Se=J[Ie],Ne=Ie+1,be=J[Ne];if(0>o(Se,ee))Ne<z&&0>o(be,Se)?(J[V]=be,J[Ne]=ee,V=Ne):(J[V]=Se,J[Ie]=ee,V=Ie);else if(Ne<z&&0>o(be,ee))J[V]=be,J[Ne]=ee,V=Ne;else break e}}return fe}function o(J,fe){var ee=J.sortIndex-fe.sortIndex;return ee!==0?ee:J.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,P=null,M=3,B=!1,Q=!1,G=!1,j=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(J){for(var fe=t(v);fe!==null;){if(fe.callback===null)s(v);else if(fe.startTime<=J)s(v),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(v)}}function le(J){if(G=!1,te(J),!Q)if(t(g)!==null)Q=!0,Nt(Me);else{var fe=t(v);fe!==null&&Be(le,fe.startTime-J)}}function Me(J,fe){Q=!1,G&&(G=!1,ue(I),I=-1),B=!0;var ee=M;try{for(te(fe),P=t(g);P!==null&&(!(P.expirationTime>fe)||J&&!D());){var V=P.callback;if(typeof V=="function"){P.callback=null,M=P.priorityLevel;var z=V(P.expirationTime<=fe);fe=i.unstable_now(),typeof z=="function"?P.callback=z:P===t(g)&&s(g),te(fe)}else s(g);P=t(g)}if(P!==null)var ce=!0;else{var Ie=t(v);Ie!==null&&Be(le,Ie.startTime-fe),ce=!1}return ce}finally{P=null,M=ee,B=!1}}var Re=!1,N=null,I=-1,A=5,C=-1;function D(){return!(i.unstable_now()-C<A)}function x(){if(N!==null){var J=i.unstable_now();C=J;var fe=!0;try{fe=N(!0,J)}finally{fe?S():(Re=!1,N=null)}}else Re=!1}var S;if(typeof he=="function")S=function(){he(x)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,kt=tt.port2;tt.port1.onmessage=x,S=function(){kt.postMessage(null)}}else S=function(){j(x,0)};function Nt(J){N=J,Re||(Re=!0,S())}function Be(J,fe){I=j(function(){J(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||B||(Q=!0,Nt(Me))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(M){case 1:case 2:case 3:var fe=3;break;default:fe=M}var ee=M;M=fe;try{return J()}finally{M=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,fe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=M;M=J;try{return fe()}finally{M=ee}},i.unstable_scheduleCallback=function(J,fe,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ee+z,J={id:w++,callback:fe,priorityLevel:J,startTime:ee,expirationTime:z,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(G?(ue(I),I=-1):G=!0,Be(le,ee-V))):(J.sortIndex=z,e(g,J),Q||B||(Q=!0,Nt(Me))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var fe=M;return function(){var ee=M;M=fe;try{return J.apply(this,arguments)}finally{M=ee}}}}(Ch)),Ch}var ym;function gE(){return ym||(ym=1,Ph.exports=mE()),Ph.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function yE(){if(_m)return Yt;_m=1;var i=hd(),e=gE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},P={};function M(n){return g.call(P,n)?!0:g.call(w,n)?!1:v.test(n)?P[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function G(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];j[r]=new G(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ue,he);j[r]=new G(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ue,he);j[r]=new G(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ue,he);j[r]=new G(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,r,a,c){var d=j.hasOwnProperty(r)?j[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?M(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var le=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),Re=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),J=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function z(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ce=!1;function Ie(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function Se(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Re:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function er(n){n._valueTracker||(n._valueTracker=mt(n))}function Zi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Cr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function di(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function es(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function po(n,r){r=r.checked,r!=null&&te(n,"checked",r,!1)}function mo(n,r){po(n,r);var a=Fe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ts(n,r.type,a):r.hasOwnProperty("defaultValue")&&ts(n,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ua(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ts(n,r,a){(r!=="number"||Cr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function go(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ns(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Fe(a)}}function rs(n,r){var a=Fe(r.value),c=Fe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function yo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,_o=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function kr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pi=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(n){pi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),fi[r]=fi[n]})});function vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||fi.hasOwnProperty(n)&&fi[n]?(""+r).trim():r+"px"}function Eo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var wo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(n,r){if(r){if(wo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Io(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ss=null,on=null,Ln=null;function os(n){if(n=Ko(n)){if(typeof ss!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ml(r),ss(n.stateNode,n.type,r))}}function Mn(n){on?Ln?Ln.push(n):Ln=[n]:on=n}function So(){if(on){var n=on,r=Ln;if(Ln=on=null,os(n),r)for(n=0;n<r.length;n++)os(r[n])}}function gi(n,r){return n(r)}function Ao(){}var ir=!1;function Ro(n,r,a){if(ir)return n(r,a);ir=!0;try{return gi(n,r,a)}finally{ir=!1,(on!==null||Ln!==null)&&(Ao(),So())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=ml(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var as=!1;if(m)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){as=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{as=!1}function yi(n,r,a,c,d,p,_,T,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var _i=!1,ls=null,_n=!1,Po=null,Ju={onError:function(n){_i=!0,ls=n}};function us(n,r,a,c,d,p,_,T,R){_i=!1,ls=null,yi.apply(Ju,arguments)}function ja(n,r,a,c,d,p,_,T,R){if(us.apply(this,arguments),_i){if(_i){var F=ls;_i=!1,ls=null}else throw Error(t(198));_n||(_n=!0,Po=F)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function vi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function En(n){if(vn(n)!==n)throw Error(t(188))}function Ba(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return En(d),n;if(p===c)return En(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Co(n){return n=Ba(n),n!==null?cs(n):null}function cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=cs(n);if(r!==null)return r;n=n.sibling}return null}var hs=e.unstable_scheduleCallback,ko=e.unstable_cancelCallback,za=e.unstable_shouldYield,Zu=e.unstable_requestPaint,We=e.unstable_now,$a=e.unstable_getCurrentPriorityLevel,Ei=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,No=e.unstable_LowPriority,Wa=e.unstable_IdlePriority,wi=null,Xt=null;function Ha(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(wi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Ka,Do=Math.log,qa=Math.LN2;function Ka(n){return n>>>=0,n===0?32:31-(Do(n)/qa|0)|0}var ds=64,fs=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ti(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Dr(T):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function ec(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=ec(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ii(){var n=ds;return ds<<=1,(ds&4194240)===0&&(ds=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function xr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ga,ps,Qa,Ya,Xa,Vo=!1,bn=[],wt=null,wn=null,Tn=null,Mr=new Map,ln=new Map,Fn=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ja(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Ko(r),r!==null&&ps(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function nc(n,r,a,c,d){switch(r){case"focusin":return wt=$t(wt,n,r,a,c,d),!0;case"dragenter":return wn=$t(wn,n,r,a,c,d),!0;case"mouseover":return Tn=$t(Tn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,$t(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,$t(ln.get(p)||null,n,r,a,c,d)),!0}return!1}function Za(n){var r=Ci(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=vi(a),r!==null){n.blockedOn=r,Xa(n.priority,function(){Qa(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ms(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);mi=c,a.target.dispatchEvent(c),mi=null}else return r=Ko(a),r!==null&&ps(r),n.blockedOn=a,!1;r.shift()}return!0}function Si(n,r,a){or(n)&&a.delete(r)}function el(){Vo=!1,wt!==null&&or(wt)&&(wt=null),wn!==null&&or(wn)&&(wn=null),Tn!==null&&or(Tn)&&(Tn=null),Mr.forEach(Si),ln.forEach(Si)}function In(n,r){n.blockedOn===r&&(n.blockedOn=null,Vo||(Vo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,el)))}function Sn(n){function r(d){return In(d,n)}if(0<bn.length){In(bn[0],n);for(var a=1;a<bn.length;a++){var c=bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&In(wt,n),wn!==null&&In(wn,n),Tn!==null&&In(Tn,n),Mr.forEach(r),ln.forEach(r),a=0;a<Fn.length;a++)c=Fn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Fn.length&&(a=Fn[0],a.blockedOn===null);)Za(a),a.blockedOn===null&&Fn.shift()}var ar=le.ReactCurrentBatchConfig,br=!0;function Ge(n,r,a,c){var d=Ce,p=ar.transition;ar.transition=null;try{Ce=1,xo(n,r,a,c)}finally{Ce=d,ar.transition=p}}function rc(n,r,a,c){var d=Ce,p=ar.transition;ar.transition=null;try{Ce=4,xo(n,r,a,c)}finally{Ce=d,ar.transition=p}}function xo(n,r,a,c){if(br){var d=ms(n,r,a,c);if(d===null)pc(n,r,c,Ai,a),Ja(n,c);else if(nc(d,n,r,a,c))c.stopPropagation();else if(Ja(n,c),r&4&&-1<tc.indexOf(n)){for(;d!==null;){var p=Ko(d);if(p!==null&&Ga(p),p=ms(n,r,a,c),p===null&&pc(n,r,c,Ai,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else pc(n,r,c,null,a)}}var Ai=null;function ms(n,r,a,c){if(Ai=null,n=is(c),n=Ci(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=vi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ai=n,null}function Oo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($a()){case Ei:return 1;case Nr:return 4;case an:case No:return 16;case Wa:return 536870912;default:return 16}default:return 16}}var Zt=null,gs=null,Wt=null;function Lo(){if(Wt)return Wt;var n,r=gs,a=r.length,c,d="value"in Zt?Zt.value:Zt.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function ys(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Un(){return!0}function Mo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:Mo,this.isPropagationStopped=Mo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=Tt(An),jn=ee({},An,{view:0,detail:0}),ic=Tt(jn),vs,lr,Fr,Ri=ee({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(vs=n.screenX-Fr.screenX,lr=n.screenY-Fr.screenY):lr=vs=0,Fr=n),vs)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),Es=Tt(Ri),bo=ee({},Ri,{dataTransfer:0}),tl=Tt(bo),ws=ee({},jn,{relatedTarget:0}),Ts=Tt(ws),nl=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=Tt(nl),rl=ee({},An,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),il=Tt(rl),sl=ee({},An,{data:0}),Fo=Tt(sl),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ol={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function al(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ol[n])?!!r[n]:!1}function Bn(){return al}var l=ee({},jn,{key:function(n){if(n.key){var r=Is[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ys(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?ys(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ys(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),y=ee({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(y),O=ee({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=Tt(O),X=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Tt(X),ct=ee({},Ri,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Tt(ct),gt=[9,13,27,32],st=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var en=m&&"TextEvent"in window&&!un,Pi=m&&(!st||un&&8<un&&11>=un),Ss=" ",of=!1;function af(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function sv(n,r){switch(n){case"compositionend":return lf(r);case"keypress":return r.which!==32?null:(of=!0,Ss);case"textInput":return n=r.data,n===Ss&&of?null:n;default:return null}}function ov(n,r){if(As)return n==="compositionend"||!st&&af(n,r)?(n=Lo(),Wt=gs=Zt=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pi&&r.locale!=="ko"?null:r.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!av[n.type]:r==="textarea"}function cf(n,r,a,c){Mn(c),r=dl(r,"onChange"),0<r.length&&(a=new _s("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Uo=null,jo=null;function lv(n){Cf(n,0)}function ll(n){var r=Ns(n);if(Zi(r))return n}function uv(n,r){if(n==="change")return r}var hf=!1;if(m){var sc;if(m){var oc="oninput"in document;if(!oc){var df=document.createElement("div");df.setAttribute("oninput","return;"),oc=typeof df.oninput=="function"}sc=oc}else sc=!1;hf=sc&&(!document.documentMode||9<document.documentMode)}function ff(){Uo&&(Uo.detachEvent("onpropertychange",pf),jo=Uo=null)}function pf(n){if(n.propertyName==="value"&&ll(jo)){var r=[];cf(r,jo,n,is(n)),Ro(lv,r)}}function cv(n,r,a){n==="focusin"?(ff(),Uo=r,jo=a,Uo.attachEvent("onpropertychange",pf)):n==="focusout"&&ff()}function hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(jo)}function dv(n,r){if(n==="click")return ll(r)}function fv(n,r){if(n==="input"||n==="change")return ll(r)}function pv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Rn=typeof Object.is=="function"?Object.is:pv;function Bo(n,r){if(Rn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Rn(n[d],r[d]))return!1}return!0}function mf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gf(n,r){var a=mf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mf(a)}}function yf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?yf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function _f(){for(var n=window,r=Cr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Cr(n.document)}return r}function ac(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function mv(n){var r=_f(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&yf(a.ownerDocument.documentElement,a)){if(c!==null&&ac(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=gf(a,p);var _=gf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gv=m&&"documentMode"in document&&11>=document.documentMode,Rs=null,lc=null,zo=null,uc=!1;function vf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||Rs==null||Rs!==Cr(c)||(c=Rs,"selectionStart"in c&&ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),zo&&Bo(zo,c)||(zo=c,c=dl(lc,"onSelect"),0<c.length&&(r=new _s("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Rs)))}function ul(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ps={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},cc={},Ef={};m&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function cl(n){if(cc[n])return cc[n];if(!Ps[n])return n;var r=Ps[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ef)return cc[n]=r[a];return n}var wf=cl("animationend"),Tf=cl("animationiteration"),If=cl("animationstart"),Sf=cl("transitionend"),Af=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Af.set(n,r),u(r,[n])}for(var hc=0;hc<Rf.length;hc++){var dc=Rf[hc],yv=dc.toLowerCase(),_v=dc[0].toUpperCase()+dc.slice(1);Ur(yv,"on"+_v)}Ur(wf,"onAnimationEnd"),Ur(Tf,"onAnimationIteration"),Ur(If,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Sf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Pf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,ja(c,r,void 0,n),n.currentTarget=null}function Cf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Pf(d,T,F),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,F=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Pf(d,T,F),p=R}}}if(_n)throw n=Po,_n=!1,Po=null,n}function qe(n,r){var a=r[Ec];a===void 0&&(a=r[Ec]=new Set);var c=n+"__bubble";a.has(c)||(kf(r,n,2,!1),a.add(c))}function fc(n,r,a){var c=0;r&&(c|=4),kf(a,n,c,r)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[hl]){n[hl]=!0,s.forEach(function(a){a!=="selectionchange"&&(vv.has(a)||fc(a,!1,n),fc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[hl]||(r[hl]=!0,fc("selectionchange",!1,r))}}function kf(n,r,a,c){switch(Oo(r)){case 1:var d=Ge;break;case 4:d=rc;break;default:d=xo}a=d.bind(null,r,a,n),d=void 0,!as||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function pc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ci(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Ro(function(){var F=p,W=is(a),K=[];e:{var $=Af.get(n);if($!==void 0){var Z=_s,re=n;switch(n){case"keypress":if(ys(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ts;break;case"focusout":re="blur",Z=Ts;break;case"beforeblur":case"afterblur":Z=Ts;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=tl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case wf:case Tf:case If:Z=ur;break;case Sf:Z=Ue;break;case"scroll":Z=ic;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,rt=!ie&&n==="scroll",L=ie?$!==null?$+"Capture":null:$;ie=[];for(var k=F,b;k!==null;){b=k;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=nt(k,L),Y!=null&&ie.push(Ho(k,Y,b)))),rt)break;k=k.return}0<ie.length&&($=new Z($,re,null,a,W),K.push({event:$,listeners:ie}))}}if((r&7)===0){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&a!==mi&&(re=a.relatedTarget||a.fromElement)&&(Ci(re)||re[cr]))break e;if((Z||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?Ci(re):null,re!==null&&(rt=vn(re),re!==rt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=Es,Y="onMouseLeave",L="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,Y="onPointerLeave",L="onPointerEnter",k="pointer"),rt=Z==null?$:Ns(Z),b=re==null?$:Ns(re),$=new ie(Y,k+"leave",Z,a,W),$.target=rt,$.relatedTarget=b,Y=null,Ci(W)===F&&(ie=new ie(L,k+"enter",re,a,W),ie.target=b,ie.relatedTarget=rt,Y=ie),rt=Y,Z&&re)t:{for(ie=Z,L=re,k=0,b=ie;b;b=Cs(b))k++;for(b=0,Y=L;Y;Y=Cs(Y))b++;for(;0<k-b;)ie=Cs(ie),k--;for(;0<b-k;)L=Cs(L),b--;for(;k--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=Cs(ie),L=Cs(L)}ie=null}else ie=null;Z!==null&&Nf(K,$,Z,ie,!1),re!==null&&rt!==null&&Nf(K,rt,re,ie,!0)}}e:{if($=F?Ns(F):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var oe=uv;else if(uf($))if(hf)oe=fv;else{oe=hv;var pe=cv}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(oe=dv);if(oe&&(oe=oe(n,F))){cf(K,oe,a,W);break e}pe&&pe(n,$,F),n==="focusout"&&(pe=$._wrapperState)&&pe.controlled&&$.type==="number"&&ts($,"number",$.value)}switch(pe=F?Ns(F):window,n){case"focusin":(uf(pe)||pe.contentEditable==="true")&&(Rs=pe,lc=F,zo=null);break;case"focusout":zo=lc=Rs=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,vf(K,a,W);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":vf(K,a,W)}var me;if(st)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else As?af(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Pi&&a.locale!=="ko"&&(As||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&As&&(me=Lo()):(Zt=W,gs="value"in Zt?Zt.value:Zt.textContent,As=!0)),pe=dl(F,ye),0<pe.length&&(ye=new Fo(ye,n,null,a,W),K.push({event:ye,listeners:pe}),me?ye.data=me:(me=lf(a),me!==null&&(ye.data=me)))),(me=en?sv(n,a):ov(n,a))&&(F=dl(F,"onBeforeInput"),0<F.length&&(W=new Fo("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=me))}Cf(K,r)})}function Ho(n,r,a){return{instance:n,listener:r,currentTarget:a}}function dl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(Ho(n,p,d)),p=nt(n,r),p!=null&&c.push(Ho(n,p,d))),n=n.return}return c}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=nt(a,p),R!=null&&_.unshift(Ho(a,R,T))):d||(R=nt(a,p),R!=null&&_.push(Ho(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Ev=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Df(n){return(typeof n=="string"?n:""+n).replace(Ev,`
`).replace(wv,"")}function fl(n,r,a){if(r=Df(r),Df(n)!==r&&a)throw Error(t(425))}function pl(){}var mc=null,gc=null;function yc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,Tv=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(n){return Vf.resolve(null).then(n).catch(Sv)}:_c;function Sv(n){setTimeout(function(){throw n})}function vc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sn(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function xf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),zn="__reactFiber$"+ks,qo="__reactProps$"+ks,cr="__reactContainer$"+ks,Ec="__reactEvents$"+ks,Av="__reactListeners$"+ks,Rv="__reactHandles$"+ks;function Ci(n){var r=n[zn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[cr]||a[zn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=xf(n);n!==null;){if(a=n[zn])return a;n=xf(n)}return r}n=a,a=n.parentNode}return null}function Ko(n){return n=n[zn]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ml(n){return n[qo]||null}var wc=[],Ds=-1;function Br(n){return{current:n}}function Ke(n){0>Ds||(n.current=wc[Ds],wc[Ds]=null,Ds--)}function He(n,r){Ds++,wc[Ds]=n.current,n.current=r}var zr={},Dt=Br(zr),Ht=Br(!1),ki=zr;function Vs(n,r){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function gl(){Ke(Ht),Ke(Dt)}function Of(n,r,a){if(Dt.current!==zr)throw Error(t(168));He(Dt,r),He(Ht,a)}function Lf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return ee({},a,c)}function yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,ki=Dt.current,He(Dt,n),He(Ht,Ht.current),!0}function Mf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Lf(n,r,ki),c.__reactInternalMemoizedMergedChildContext=n,Ke(Ht),Ke(Dt),He(Dt,n)):Ke(Ht),He(Ht,a)}var hr=null,_l=!1,Tc=!1;function bf(n){hr===null?hr=[n]:hr.push(n)}function Pv(n){_l=!0,bf(n)}function $r(){if(!Tc&&hr!==null){Tc=!0;var n=0,r=Ce;try{var a=hr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,_l=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),hs(Ei,$r),d}finally{Ce=r,Tc=!1}}return null}var xs=[],Os=0,vl=null,El=0,cn=[],hn=0,Ni=null,dr=1,fr="";function Di(n,r){xs[Os++]=El,xs[Os++]=vl,vl=n,El=r}function Ff(n,r,a){cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Ni,Ni=n;var c=dr;n=fr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-Ut(r)+d|a<<d|c,fr=p+n}else dr=1<<p|a<<d|c,fr=n}function Ic(n){n.return!==null&&(Di(n,1),Ff(n,1,0))}function Sc(n){for(;n===vl;)vl=xs[--Os],xs[Os]=null,El=xs[--Os],xs[Os]=null;for(;n===Ni;)Ni=cn[--hn],cn[hn]=null,fr=cn[--hn],cn[hn]=null,dr=cn[--hn],cn[hn]=null}var tn=null,nn=null,Qe=!1,Pn=null;function Uf(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,tn=n,nn=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,tn=n,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ni!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,tn=n,nn=null,!0):!1;default:return!1}}function Ac(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rc(n){if(Qe){var r=nn;if(r){var a=r;if(!jf(n,r)){if(Ac(n))throw Error(t(418));r=jr(a.nextSibling);var c=tn;r&&jf(n,r)?Uf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,tn=n)}}else{if(Ac(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,tn=n}}}function Bf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;tn=n}function wl(n){if(n!==tn)return!1;if(!Qe)return Bf(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!yc(n.type,n.memoizedProps)),r&&(r=nn)){if(Ac(n))throw zf(),Error(t(418));for(;r;)Uf(n,r),r=jr(r.nextSibling)}if(Bf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){nn=jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}nn=null}}else nn=tn?jr(n.stateNode.nextSibling):null;return!0}function zf(){for(var n=nn;n;)n=jr(n.nextSibling)}function Ls(){nn=tn=null,Qe=!1}function Pc(n){Pn===null?Pn=[n]:Pn.push(n)}var Cv=le.ReactCurrentBatchConfig;function Go(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function $f(n){var r=n._init;return r(n._payload)}function Wf(n){function r(L,k){if(n){var b=L.deletions;b===null?(L.deletions=[k],L.flags|=16):b.push(k)}}function a(L,k){if(!n)return null;for(;k!==null;)r(L,k),k=k.sibling;return null}function c(L,k){for(L=new Map;k!==null;)k.key!==null?L.set(k.key,k):L.set(k.index,k),k=k.sibling;return L}function d(L,k){return L=Xr(L,k),L.index=0,L.sibling=null,L}function p(L,k,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<k?(L.flags|=2,k):b):(L.flags|=2,k)):(L.flags|=1048576,k)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,k,b,Y){return k===null||k.tag!==6?(k=_h(b,L.mode,Y),k.return=L,k):(k=d(k,b),k.return=L,k)}function R(L,k,b,Y){var oe=b.type;return oe===N?W(L,k,b.props.children,Y,b.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&$f(oe)===k.type)?(Y=d(k,b.props),Y.ref=Go(L,k,b),Y.return=L,Y):(Y=ql(b.type,b.key,b.props,null,L.mode,Y),Y.ref=Go(L,k,b),Y.return=L,Y)}function F(L,k,b,Y){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=vh(b,L.mode,Y),k.return=L,k):(k=d(k,b.children||[]),k.return=L,k)}function W(L,k,b,Y,oe){return k===null||k.tag!==7?(k=Ui(b,L.mode,Y,oe),k.return=L,k):(k=d(k,b),k.return=L,k)}function K(L,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=_h(""+k,L.mode,b),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Me:return b=ql(k.type,k.key,k.props,null,L.mode,b),b.ref=Go(L,null,k),b.return=L,b;case Re:return k=vh(k,L.mode,b),k.return=L,k;case Nt:var Y=k._init;return K(L,Y(k._payload),b)}if(tr(k)||fe(k))return k=Ui(k,L.mode,b,null),k.return=L,k;Tl(L,k)}return null}function $(L,k,b,Y){var oe=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:T(L,k,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Me:return b.key===oe?R(L,k,b,Y):null;case Re:return b.key===oe?F(L,k,b,Y):null;case Nt:return oe=b._init,$(L,k,oe(b._payload),Y)}if(tr(b)||fe(b))return oe!==null?null:W(L,k,b,Y,null);Tl(L,b)}return null}function Z(L,k,b,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,T(k,L,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Me:return L=L.get(Y.key===null?b:Y.key)||null,R(k,L,Y,oe);case Re:return L=L.get(Y.key===null?b:Y.key)||null,F(k,L,Y,oe);case Nt:var pe=Y._init;return Z(L,k,b,pe(Y._payload),oe)}if(tr(Y)||fe(Y))return L=L.get(b)||null,W(k,L,Y,oe,null);Tl(k,Y)}return null}function re(L,k,b,Y){for(var oe=null,pe=null,me=k,ye=k=0,vt=null;me!==null&&ye<b.length;ye++){me.index>ye?(vt=me,me=null):vt=me.sibling;var Oe=$(L,me,b[ye],Y);if(Oe===null){me===null&&(me=vt);break}n&&me&&Oe.alternate===null&&r(L,me),k=p(Oe,k,ye),pe===null?oe=Oe:pe.sibling=Oe,pe=Oe,me=vt}if(ye===b.length)return a(L,me),Qe&&Di(L,ye),oe;if(me===null){for(;ye<b.length;ye++)me=K(L,b[ye],Y),me!==null&&(k=p(me,k,ye),pe===null?oe=me:pe.sibling=me,pe=me);return Qe&&Di(L,ye),oe}for(me=c(L,me);ye<b.length;ye++)vt=Z(me,L,ye,b[ye],Y),vt!==null&&(n&&vt.alternate!==null&&me.delete(vt.key===null?ye:vt.key),k=p(vt,k,ye),pe===null?oe=vt:pe.sibling=vt,pe=vt);return n&&me.forEach(function(Jr){return r(L,Jr)}),Qe&&Di(L,ye),oe}function ie(L,k,b,Y){var oe=fe(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var pe=oe=null,me=k,ye=k=0,vt=null,Oe=b.next();me!==null&&!Oe.done;ye++,Oe=b.next()){me.index>ye?(vt=me,me=null):vt=me.sibling;var Jr=$(L,me,Oe.value,Y);if(Jr===null){me===null&&(me=vt);break}n&&me&&Jr.alternate===null&&r(L,me),k=p(Jr,k,ye),pe===null?oe=Jr:pe.sibling=Jr,pe=Jr,me=vt}if(Oe.done)return a(L,me),Qe&&Di(L,ye),oe;if(me===null){for(;!Oe.done;ye++,Oe=b.next())Oe=K(L,Oe.value,Y),Oe!==null&&(k=p(Oe,k,ye),pe===null?oe=Oe:pe.sibling=Oe,pe=Oe);return Qe&&Di(L,ye),oe}for(me=c(L,me);!Oe.done;ye++,Oe=b.next())Oe=Z(me,L,ye,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&me.delete(Oe.key===null?ye:Oe.key),k=p(Oe,k,ye),pe===null?oe=Oe:pe.sibling=Oe,pe=Oe);return n&&me.forEach(function(aE){return r(L,aE)}),Qe&&Di(L,ye),oe}function rt(L,k,b,Y){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Me:e:{for(var oe=b.key,pe=k;pe!==null;){if(pe.key===oe){if(oe=b.type,oe===N){if(pe.tag===7){a(L,pe.sibling),k=d(pe,b.props.children),k.return=L,L=k;break e}}else if(pe.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&$f(oe)===pe.type){a(L,pe.sibling),k=d(pe,b.props),k.ref=Go(L,pe,b),k.return=L,L=k;break e}a(L,pe);break}else r(L,pe);pe=pe.sibling}b.type===N?(k=Ui(b.props.children,L.mode,Y,b.key),k.return=L,L=k):(Y=ql(b.type,b.key,b.props,null,L.mode,Y),Y.ref=Go(L,k,b),Y.return=L,L=Y)}return _(L);case Re:e:{for(pe=b.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(L,k.sibling),k=d(k,b.children||[]),k.return=L,L=k;break e}else{a(L,k);break}else r(L,k);k=k.sibling}k=vh(b,L.mode,Y),k.return=L,L=k}return _(L);case Nt:return pe=b._init,rt(L,k,pe(b._payload),Y)}if(tr(b))return re(L,k,b,Y);if(fe(b))return ie(L,k,b,Y);Tl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(L,k.sibling),k=d(k,b),k.return=L,L=k):(a(L,k),k=_h(b,L.mode,Y),k.return=L,L=k),_(L)):a(L,k)}return rt}var Ms=Wf(!0),Hf=Wf(!1),Il=Br(null),Sl=null,bs=null,Cc=null;function kc(){Cc=bs=Sl=null}function Nc(n){var r=Il.current;Ke(Il),n._currentValue=r}function Dc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Fs(n,r){Sl=n,Cc=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Cc!==n)if(n={context:n,memoizedValue:r,next:null},bs===null){if(Sl===null)throw Error(t(308));bs=n,Sl.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return r}var Vi=null;function Vc(n){Vi===null?Vi=[n]:Vi.push(n)}function qf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Vc(r)):(a.next=d.next,d.next=a),r.interleaved=a,pr(n,c)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wr=!1;function xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pr(n,a)}return d=c.interleaved,d===null?(r.next=r,Vc(c)):(r.next=d.next,d.next=r),c.interleaved=r,pr(n,a)}function Al(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function Gf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Rl(n,r,a,c){var d=n.updateQueue;Wr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;_=0,W=F=R=null,T=p;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch($=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){K=re.call(Z,K,$);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(Z,K,$):re,$==null)break e;K=ee({},K,$);break e;case 2:Wr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=d.effects,$===null?d.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=Z,R=K):W=W.next=Z,_|=$;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;$=T,T=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(W===null&&(R=K),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Li|=_,n.lanes=_,n.memoizedState=K}}function Qf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Qo={},$n=Br(Qo),Yo=Br(Qo),Xo=Br(Qo);function xi(n){if(n===Qo)throw Error(t(174));return n}function Oc(n,r){switch(He(Xo,r),He(Yo,n),He($n,Qo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}Ke($n),He($n,r)}function Us(){Ke($n),Ke(Yo),Ke(Xo)}function Yf(n){xi(Xo.current);var r=xi($n.current),a=ut(r,n.type);r!==a&&(He(Yo,n),He($n,a))}function Lc(n){Yo.current===n&&(Ke($n),Ke(Yo))}var Xe=Br(0);function Pl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Mc=[];function bc(){for(var n=0;n<Mc.length;n++)Mc[n]._workInProgressVersionPrimary=null;Mc.length=0}var Cl=le.ReactCurrentDispatcher,Fc=le.ReactCurrentBatchConfig,Oi=0,Je=null,ht=null,yt=null,kl=!1,Jo=!1,Zo=0,kv=0;function Vt(){throw Error(t(321))}function Uc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Rn(n[a],r[a]))return!1;return!0}function jc(n,r,a,c,d,p){if(Oi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Cl.current=n===null||n.memoizedState===null?xv:Ov,n=a(c,d),Jo){p=0;do{if(Jo=!1,Zo=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,Cl.current=Lv,n=a(c,d)}while(Jo)}if(Cl.current=Vl,r=ht!==null&&ht.next!==null,Oi=0,yt=ht=Je=null,kl=!1,r)throw Error(t(300));return n}function Bc(){var n=Zo!==0;return Zo=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=n:yt=yt.next=n,yt}function fn(){if(ht===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Je.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Je.memoizedState=yt=n:yt=yt.next=n}return yt}function ea(n,r){return typeof r=="function"?r(n):r}function zc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,F=p;do{var W=F.lane;if((Oi&W)===W)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=K,_=c):R=R.next=K,Je.lanes|=W,Li|=W}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=T,Rn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,Li|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function $c(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Rn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Xf(){}function Jf(n,r){var a=Je,c=fn(),d=r(),p=!Rn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,Wc(tp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ta(9,ep.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Oi&30)!==0||Zf(a,r,d)}return d}function Zf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function ep(n,r,a,c){r.value=a,r.getSnapshot=c,np(r)&&rp(n)}function tp(n,r,a){return a(function(){np(r)&&rp(n)})}function np(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Rn(n,a)}catch{return!0}}function rp(n){var r=pr(n,1);r!==null&&Dn(r,n,1,-1)}function ip(n){var r=Wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=Vv.bind(null,Je,n),[r.memoizedState,n]}function ta(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function sp(){return fn().memoizedState}function Nl(n,r,a,c){var d=Wn();Je.flags|=n,d.memoizedState=ta(1|r,a,void 0,c===void 0?null:c)}function Dl(n,r,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Uc(c,_.deps)){d.memoizedState=ta(r,a,p,c);return}}Je.flags|=n,d.memoizedState=ta(1|r,a,p,c)}function op(n,r){return Nl(8390656,8,n,r)}function Wc(n,r){return Dl(2048,8,n,r)}function ap(n,r){return Dl(4,2,n,r)}function lp(n,r){return Dl(4,4,n,r)}function up(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function cp(n,r,a){return a=a!=null?a.concat([n]):null,Dl(4,4,up.bind(null,r,n),a)}function Hc(){}function hp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Uc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function dp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Uc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function fp(n,r,a){return(Oi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Rn(a,r)||(a=Ii(),Je.lanes|=a,Li|=a,n.baseState=!0),r)}function Nv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Fc.transition;Fc.transition={};try{n(!1),r()}finally{Ce=a,Fc.transition=c}}function pp(){return fn().memoizedState}function Dv(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(r,a);else if(a=qf(n,r,a,c),a!==null){var d=zt();Dn(a,n,c,d),yp(a,r,c)}}function Vv(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Rn(T,_)){var R=r.interleaved;R===null?(d.next=d,Vc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=qf(n,r,d,c),a!==null&&(d=zt(),Dn(a,n,c,d),yp(a,r,c))}}function mp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function gp(n,r){Jo=kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function yp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var Vl={readContext:dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},xv={readContext:dn,useCallback:function(n,r){return Wn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:op,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Nl(4194308,4,up.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Nl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Nl(4,2,n,r)},useMemo:function(n,r){var a=Wn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Wn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Dv.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Wn();return n={current:n},r.memoizedState=n},useState:ip,useDebugValue:Hc,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=ip(!1),r=n[0];return n=Nv.bind(null,n[1]),Wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Wn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Oi&30)!==0||Zf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,op(tp.bind(null,c,p,n),[n]),c.flags|=2048,ta(9,ep.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Wn(),r=_t.identifierPrefix;if(Qe){var a=fr,c=dr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Zo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=kv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Ov={readContext:dn,useCallback:hp,useContext:dn,useEffect:Wc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:zc,useRef:sp,useState:function(){return zc(ea)},useDebugValue:Hc,useDeferredValue:function(n){var r=fn();return fp(r,ht.memoizedState,n)},useTransition:function(){var n=zc(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Xf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1},Lv={readContext:dn,useCallback:hp,useContext:dn,useEffect:Wc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:$c,useRef:sp,useState:function(){return $c(ea)},useDebugValue:Hc,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:fp(r,ht.memoizedState,n)},useTransition:function(){var n=$c(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Xf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1};function Cn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function qc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var xl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Qr(n),p=mr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(Dn(r,n,d,c),Al(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Qr(n),p=mr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(Dn(r,n,d,c),Al(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=zt(),c=Qr(n),d=mr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(Dn(r,n,c,a),Al(r,n,c))}};function _p(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Bo(a,c)||!Bo(d,p):!0}function vp(n,r,a){var c=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=qt(r)?ki:Dt.current,c=r.contextTypes,p=(c=c!=null)?Vs(n,d):zr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Ep(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&xl.enqueueReplaceState(r,r.state,null)}function Kc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},xc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=qt(r)?ki:Dt.current,d.context=Vs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(qc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&xl.enqueueReplaceState(d,d.state,null),Rl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Gc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Qc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Mv=typeof WeakMap=="function"?WeakMap:Map;function wp(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){jl||(jl=!0,ch=c),Qc(n,r)},a}function Tp(n,r,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Qc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Qc(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Ip(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Mv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=Yv.bind(null,n,r,a),r.then(n,n))}function Sp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Ap(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,Hr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var bv=le.ReactCurrentOwner,Kt=!1;function Bt(n,r,a,c){r.child=n===null?Hf(r,null,a,c):Ms(r,n.child,a,c)}function Rp(n,r,a,c,d){a=a.render;var p=r.ref;return Fs(r,d),c=jc(n,r,a,c,p,d),a=Bc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&a&&Ic(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Pp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!yh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Cp(n,r,p,c,d)):(n=ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(_,c)&&n.ref===r.ref)return gr(n,r,d)}return r.flags|=1,n=Xr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Cp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Bo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,gr(n,r,d)}return Yc(n,r,a,c,d)}function kp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(zs,rn),rn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(zs,rn),rn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(zs,rn),rn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(zs,rn),rn|=c;return Bt(n,r,d,a),r.child}function Np(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Yc(n,r,a,c,d){var p=qt(a)?ki:Dt.current;return p=Vs(r,p),Fs(r,d),a=jc(n,r,a,c,p,d),c=Bc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&c&&Ic(r),r.flags|=1,Bt(n,r,a,d),r.child)}function Dp(n,r,a,c,d){if(qt(a)){var p=!0;yl(r)}else p=!1;if(Fs(r,d),r.stateNode===null)Ll(n,r),vp(r,a,c),Kc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=dn(F):(F=qt(a)?ki:Dt.current,F=Vs(r,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==F)&&Ep(r,_,c,F),Wr=!1;var $=r.memoizedState;_.state=$,Rl(r,c,_,d),R=r.memoizedState,T!==c||$!==R||Ht.current||Wr?(typeof W=="function"&&(qc(r,a,W,c),R=r.memoizedState),(T=Wr||_p(r,a,T,c,$,R,F))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Kf(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Cn(r.type,T),_.props=F,K=r.pendingProps,$=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=dn(R):(R=qt(a)?ki:Dt.current,R=Vs(r,R));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||$!==R)&&Ep(r,_,c,R),Wr=!1,$=r.memoizedState,_.state=$,Rl(r,c,_,d);var re=r.memoizedState;T!==K||$!==re||Ht.current||Wr?(typeof Z=="function"&&(qc(r,a,Z,c),re=r.memoizedState),(F=Wr||_p(r,a,F,c,$,re,R)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return Xc(n,r,a,c,p,d)}function Xc(n,r,a,c,d,p){Np(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Mf(r,a,!1),gr(n,r,p);c=r.stateNode,bv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ms(r,n.child,null,p),r.child=Ms(r,null,T,p)):Bt(n,r,T,p),r.memoizedState=c.state,d&&Mf(r,a,!0),r.child}function Vp(n){var r=n.stateNode;r.pendingContext?Of(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Of(n,r.context,!1),Oc(n,r.containerInfo)}function xp(n,r,a,c,d){return Ls(),Pc(d),r.flags|=256,Bt(n,r,a,c),r.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return Rc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Kl(_,c,0,null),n=Ui(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Zc(a),r.memoizedState=Jc,n):eh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Fv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Xr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Xr(T,p):(p=Ui(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Zc(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=Jc,c}return p=n.child,n=p.sibling,c=Xr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function eh(n,r){return r=Kl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ol(n,r,a,c){return c!==null&&Pc(c),Ms(r,n.child,null,a),n=eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Fv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Gc(Error(t(422))),Ol(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Kl({mode:"visible",children:c.children},d,0,null),p=Ui(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Ms(r,n.child,null,_),r.child.memoizedState=Zc(_),r.memoizedState=Jc,p);if((r.mode&1)===0)return Ol(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Gc(p,c,void 0),Ol(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(n,d),Dn(c,n,d,-1))}return gh(),c=Gc(Error(t(421))),Ol(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Xv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,nn=jr(d.nextSibling),tn=r,Qe=!0,Pn=null,n!==null&&(cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Ni,dr=n.id,fr=n.overflow,Ni=r),r=eh(r,c.children),r.flags|=4096,r)}function Lp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Dc(n.return,r,a)}function th(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Mp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lp(n,a,r);else if(n.tag===19)Lp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Pl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),th(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Pl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}th(r,!0,a,null,p);break;case"together":th(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Li|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Uv(n,r,a){switch(r.tag){case 3:Vp(r),Ls();break;case 5:Yf(r);break;case 1:qt(r.type)&&yl(r);break;case 4:Oc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Il,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Op(n,r,a):(He(Xe,Xe.current&1),n=gr(n,r,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Mp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,kp(n,r,a)}return gr(n,r,a)}var bp,nh,Fp,Up;bp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nh=function(){},Fp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,xi($n.current);var p=null;switch(a){case"input":d=di(n,d),c=di(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=go(n,d),c=go(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=pl)}To(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&qe("scroll",n),p||T===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Up=function(n,r,a,c){a!==c&&(r.flags|=4)};function na(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function jv(n,r,a){var c=r.pendingProps;switch(Sc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return qt(r.type)&&gl(),xt(r),null;case 3:return c=r.stateNode,Us(),Ke(Ht),Ke(Dt),bc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pn!==null&&(fh(Pn),Pn=null))),nh(n,r),xt(r),null;case 5:Lc(r);var d=xi(Xo.current);if(a=r.type,n!==null&&r.stateNode!=null)Fp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return xt(r),null}if(n=xi($n.current),wl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[zn]=r,c[qo]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<$o.length;d++)qe($o[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":es(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":ns(c,p),qe("invalid",c)}To(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&fl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&fl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":er(c),Ua(c,p,!0);break;case"textarea":er(c),yo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[zn]=r,n[qo]=c,bp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Io(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<$o.length;d++)qe($o[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":es(n,c),d=di(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),qe("invalid",n);break;case"textarea":ns(n,c),d=go(n,c),qe("invalid",n);break;default:d=c}To(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Eo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&_o(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&kr(n,R):typeof R=="number"&&kr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&qe("scroll",n):R!=null&&te(n,p,R,_))}switch(a){case"input":er(n),Ua(n,c,!1);break;case"textarea":er(n),yo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?nr(n,!!c.multiple,p,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(n&&r.stateNode!=null)Up(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=xi(Xo.current),xi($n.current),wl(r)){if(c=r.stateNode,a=r.memoizedProps,c[zn]=r,(p=c.nodeValue!==a)&&(n=tn,n!==null))switch(n.tag){case 3:fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[zn]=r,r.stateNode=c}return xt(r),null;case 13:if(Ke(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&nn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)zf(),Ls(),r.flags|=98560,p=!1;else if(p=wl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[zn]=r}else Ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xt(r),p=!1}else Pn!==null&&(fh(Pn),Pn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?dt===0&&(dt=3):gh())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return Us(),nh(n,r),n===null&&Wo(r.stateNode.containerInfo),xt(r),null;case 10:return Nc(r.type._context),xt(r),null;case 17:return qt(r.type)&&gl(),xt(r),null;case 19:if(Ke(Xe),p=r.memoizedState,p===null)return xt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)na(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Pl(n),_!==null){for(r.flags|=128,na(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&We()>$s&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304)}else{if(!c)if(n=Pl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),na(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return xt(r),null}else 2*We()-p.renderingStartTime>$s&&a!==1073741824&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=We(),r.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),r):(xt(r),null);case 22:case 23:return mh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(rn&1073741824)!==0&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Bv(n,r){switch(Sc(r),r.tag){case 1:return qt(r.type)&&gl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),Ke(Ht),Ke(Dt),bc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Lc(r),null;case 13:if(Ke(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ls()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ke(Xe),null;case 4:return Us(),null;case 10:return Nc(r.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Ml=!1,Ot=!1,zv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Bs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function rh(n,r,a){try{a()}catch(c){et(n,r,c)}}var jp=!1;function $v(n,r){if(mc=br,n=_f(),ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,F=0,W=0,K=n,$=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(R=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)$=K,K=Z;for(;;){if(K===n)break t;if($===a&&++F===d&&(T=_),$===p&&++W===c&&(R=_),(Z=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:n,selectionRange:a},br=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,rt=re.memoizedState,L=r.stateNode,k=L.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Cn(r.type,ie),rt);L.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=jp,jp=!1,re}function ra(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&rh(r,a,p)}d=d.next}while(d!==c)}}function bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ih(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Bp(n){var r=n.alternate;r!==null&&(n.alternate=null,Bp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zn],delete r[qo],delete r[Ec],delete r[Av],delete r[Rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function $p(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=pl));else if(c!==4&&(n=n.child,n!==null))for(sh(n,r,a),n=n.sibling;n!==null;)sh(n,r,a),n=n.sibling}function oh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(oh(n,r,a),n=n.sibling;n!==null;)oh(n,r,a),n=n.sibling}var It=null,kn=!1;function qr(n,r,a){for(a=a.child;a!==null;)Wp(n,r,a),a=a.sibling}function Wp(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(wi,a)}catch{}switch(a.tag){case 5:Ot||Bs(a,r);case 6:var c=It,d=kn;It=null,qr(n,r,a),It=c,kn=d,It!==null&&(kn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(kn?(n=It,a=a.stateNode,n.nodeType===8?vc(n.parentNode,a):n.nodeType===1&&vc(n,a),Sn(n)):vc(It,a.stateNode));break;case 4:c=It,d=kn,It=a.stateNode.containerInfo,kn=!0,qr(n,r,a),It=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&rh(a,r,_),d=d.next}while(d!==c)}qr(n,r,a);break;case 1:if(!Ot&&(Bs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){et(a,r,T)}qr(n,r,a);break;case 21:qr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,qr(n,r,a),Ot=c):qr(n,r,a);break;default:qr(n,r,a)}}function Hp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new zv),r.forEach(function(c){var d=Jv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,kn=!1;break e;case 3:It=T.stateNode.containerInfo,kn=!0;break e;case 4:It=T.stateNode.containerInfo,kn=!0;break e}T=T.return}if(It===null)throw Error(t(160));Wp(p,_,d),It=null,kn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qp(r,n),r=r.sibling}function qp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(r,n),Hn(n),c&4){try{ra(3,n,n.return),bl(3,n)}catch(ie){et(n,n.return,ie)}try{ra(5,n,n.return)}catch(ie){et(n,n.return,ie)}}break;case 1:Nn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return);break;case 5:if(Nn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return),n.flags&32){var d=n.stateNode;try{kr(d,"")}catch(ie){et(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&po(d,p),Io(T,_);var F=Io(T,p);for(_=0;_<R.length;_+=2){var W=R[_],K=R[_+1];W==="style"?Eo(d,K):W==="dangerouslySetInnerHTML"?_o(d,K):W==="children"?kr(d,K):te(d,W,K,F)}switch(T){case"input":mo(d,p);break;case"textarea":rs(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?nr(d,!!p.multiple,Z,!1):$!==!!p.multiple&&(p.defaultValue!=null?nr(d,!!p.multiple,p.defaultValue,!0):nr(d,!!p.multiple,p.multiple?[]:"",!1))}d[qo]=p}catch(ie){et(n,n.return,ie)}}break;case 6:if(Nn(r,n),Hn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){et(n,n.return,ie)}}break;case 3:if(Nn(r,n),Hn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(ie){et(n,n.return,ie)}break;case 4:Nn(r,n),Hn(n);break;case 13:Nn(r,n),Hn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(uh=We())),c&4&&Hp(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||W,Nn(r,n),Ot=F):Nn(r,n),Hn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ne=n,W=n.child;W!==null;){for(K=ne=W;ne!==null;){switch($=ne,Z=$.child,$.tag){case 0:case 11:case 14:case 15:ra(4,$,$.return);break;case 1:Bs($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){c=$,a=$.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){et(c,a,ie)}}break;case 5:Bs($,$.return);break;case 22:if($.memoizedState!==null){Qp(K);continue}}Z!==null?(Z.return=$,ne=Z):Qp(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=vo("display",_))}catch(ie){et(n,n.return,ie)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(ie){et(n,n.return,ie)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Nn(r,n),Hn(n),c&4&&Hp(n);break;case 21:break;default:Nn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(zp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(kr(d,""),c.flags&=-33);var p=$p(n);oh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=$p(n);sh(n,T,_);break;default:throw Error(t(161))}}catch(R){et(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Wv(n,r,a){ne=n,Kp(n)}function Kp(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ml;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ml;var F=Ot;if(Ml=_,(Ot=R)&&!F)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?Yp(d):R!==null?(R.return=_,ne=R):Yp(d);for(;p!==null;)ne=p,Kp(p),p=p.sibling;ne=d,Ml=T,Ot=F}Gp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ne=p):Gp(n)}}function Gp(n){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||bl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Cn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Qf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Qf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Sn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&ih(r)}catch($){et(r,r.return,$)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Qp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Yp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{bl(4,r)}catch(R){et(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){et(r,d,R)}}var p=r.return;try{ih(r)}catch(R){et(r,p,R)}break;case 5:var _=r.return;try{ih(r)}catch(R){et(r,_,R)}}}catch(R){et(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var Hv=Math.ceil,Fl=le.ReactCurrentDispatcher,ah=le.ReactCurrentOwner,pn=le.ReactCurrentBatchConfig,xe=0,_t=null,ot=null,St=0,rn=0,zs=Br(0),dt=0,ia=null,Li=0,Ul=0,lh=0,sa=null,Gt=null,uh=0,$s=1/0,yr=null,jl=!1,ch=null,Kr=null,Bl=!1,Gr=null,zl=0,oa=0,hh=null,$l=-1,Wl=0;function zt(){return(xe&6)!==0?We():$l!==-1?$l:$l=We()}function Qr(n){return(n.mode&1)===0?1:(xe&2)!==0&&St!==0?St&-St:Cv.transition!==null?(Wl===0&&(Wl=Ii()),Wl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Oo(n.type)),n)}function Dn(n,r,a,c){if(50<oa)throw oa=0,hh=null,Error(t(185));xr(n,a,c),((xe&2)===0||n!==_t)&&(n===_t&&((xe&2)===0&&(Ul|=a),dt===4&&Yr(n,St)),Qt(n,c),a===1&&xe===0&&(r.mode&1)===0&&($s=We()+500,_l&&$r()))}function Qt(n,r){var a=n.callbackNode;sr(n,r);var c=Ti(n,n===_t?St:0);if(c===0)a!==null&&ko(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&ko(a),r===1)n.tag===0?Pv(Jp.bind(null,n)):bf(Jp.bind(null,n)),Iv(function(){(xe&6)===0&&$r()}),a=null;else{switch(Lr(c)){case 1:a=Ei;break;case 4:a=Nr;break;case 16:a=an;break;case 536870912:a=Wa;break;default:a=an}a=om(a,Xp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Xp(n,r){if($l=-1,Wl=0,(xe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Ti(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Hl(n,c);else{r=c;var d=xe;xe|=2;var p=em();(_t!==n||St!==r)&&(yr=null,$s=We()+500,bi(n,r));do try{Gv();break}catch(T){Zp(n,T)}while(!0);kc(),Fl.current=p,xe=d,ot!==null?r=0:(_t=null,St=0,r=dt)}if(r!==0){if(r===2&&(d=Jt(n),d!==0&&(c=d,r=dh(n,d))),r===1)throw a=ia,bi(n,0),Yr(n,c),Qt(n,We()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!qv(d)&&(r=Hl(n,c),r===2&&(p=Jt(n),p!==0&&(c=p,r=dh(n,p))),r===1))throw a=ia,bi(n,0),Yr(n,c),Qt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Fi(n,Gt,yr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=uh+500-We(),10<r)){if(Ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=_c(Fi.bind(null,n,Gt,yr),r);break}Fi(n,Gt,yr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hv(c/1960))-c,10<c){n.timeoutHandle=_c(Fi.bind(null,n,Gt,yr),c);break}Fi(n,Gt,yr);break;case 5:Fi(n,Gt,yr);break;default:throw Error(t(329))}}}return Qt(n,We()),n.callbackNode===a?Xp.bind(null,n):null}function dh(n,r){var a=sa;return n.current.memoizedState.isDehydrated&&(bi(n,r).flags|=256),n=Hl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&fh(r)),n}function fh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function qv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~lh,r&=~Ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function Jp(n){if((xe&6)!==0)throw Error(t(327));Ws();var r=Ti(n,0);if((r&1)===0)return Qt(n,We()),null;var a=Hl(n,r);if(n.tag!==0&&a===2){var c=Jt(n);c!==0&&(r=c,a=dh(n,c))}if(a===1)throw a=ia,bi(n,0),Yr(n,r),Qt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Fi(n,Gt,yr),Qt(n,We()),null}function ph(n,r){var a=xe;xe|=1;try{return n(r)}finally{xe=a,xe===0&&($s=We()+500,_l&&$r())}}function Mi(n){Gr!==null&&Gr.tag===0&&(xe&6)===0&&Ws();var r=xe;xe|=1;var a=pn.transition,c=Ce;try{if(pn.transition=null,Ce=1,n)return n()}finally{Ce=c,pn.transition=a,xe=r,(xe&6)===0&&$r()}}function mh(){rn=zs.current,Ke(zs)}function bi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tv(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Sc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&gl();break;case 3:Us(),Ke(Ht),Ke(Dt),bc();break;case 5:Lc(c);break;case 4:Us();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:Nc(c.type._context);break;case 22:case 23:mh()}a=a.return}if(_t=n,ot=n=Xr(n.current,null),St=rn=r,dt=0,ia=null,lh=Ul=Li=0,Gt=sa=null,Vi!==null){for(r=0;r<Vi.length;r++)if(a=Vi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Vi=null}return n}function Zp(n,r){do{var a=ot;try{if(kc(),Cl.current=Vl,kl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}kl=!1}if(Oi=0,yt=ht=Je=null,Jo=!1,Zo=0,ah.current=null,a===null||a.return===null){dt=1,ia=r,ot=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var $=W.alternate;$?(W.updateQueue=$.updateQueue,W.memoizedState=$.memoizedState,W.lanes=$.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=Sp(_);if(Z!==null){Z.flags&=-257,Ap(Z,_,T,p,r),Z.mode&1&&Ip(p,F,r),r=Z,R=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else re.add(R);break e}else{if((r&1)===0){Ip(p,F,r),gh();break e}R=Error(t(426))}}else if(Qe&&T.mode&1){var rt=Sp(_);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Ap(rt,_,T,p,r),Pc(js(R,T));break e}}p=R=js(R,T),dt!==4&&(dt=2),sa===null?sa=[p]:sa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=wp(p,R,r);Gf(p,L);break e;case 1:T=R;var k=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Tp(p,T,r);Gf(p,Y);break e}}p=p.return}while(p!==null)}nm(a)}catch(oe){r=oe,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function em(){var n=Fl.current;return Fl.current=Vl,n===null?Vl:n}function gh(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||(Li&268435455)===0&&(Ul&268435455)===0||Yr(_t,St)}function Hl(n,r){var a=xe;xe|=2;var c=em();(_t!==n||St!==r)&&(yr=null,bi(n,r));do try{Kv();break}catch(d){Zp(n,d)}while(!0);if(kc(),xe=a,Fl.current=c,ot!==null)throw Error(t(261));return _t=null,St=0,dt}function Kv(){for(;ot!==null;)tm(ot)}function Gv(){for(;ot!==null&&!za();)tm(ot)}function tm(n){var r=sm(n.alternate,n,rn);n.memoizedProps=n.pendingProps,r===null?nm(n):ot=r,ah.current=null}function nm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=jv(a,r,rn),a!==null){ot=a;return}}else{if(a=Bv(a,r),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ot=null;return}}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);dt===0&&(dt=5)}function Fi(n,r,a){var c=Ce,d=pn.transition;try{pn.transition=null,Ce=1,Qv(n,r,a,c)}finally{pn.transition=d,Ce=c}return null}function Qv(n,r,a,c){do Ws();while(Gr!==null);if((xe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(ot=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bl||(Bl=!0,om(an,function(){return Ws(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var _=Ce;Ce=1;var T=xe;xe|=4,ah.current=null,$v(n,a),qp(a,n),mv(gc),br=!!mc,gc=mc=null,n.current=a,Wv(a),Zu(),xe=T,Ce=_,pn.transition=p}else n.current=a;if(Bl&&(Bl=!1,Gr=n,zl=d),p=n.pendingLanes,p===0&&(Kr=null),Ha(a.stateNode),Qt(n,We()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(jl)throw jl=!1,n=ch,ch=null,n;return(zl&1)!==0&&n.tag!==0&&Ws(),p=n.pendingLanes,(p&1)!==0?n===hh?oa++:(oa=0,hh=n):oa=0,$r(),null}function Ws(){if(Gr!==null){var n=Lr(zl),r=pn.transition,a=Ce;try{if(pn.transition=null,Ce=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,zl=0,(xe&6)!==0)throw Error(t(331));var d=xe;for(xe|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if((ne.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(ne=F;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:ra(8,W,p)}var K=W.child;if(K!==null)K.return=W,ne=K;else for(;ne!==null;){W=ne;var $=W.sibling,Z=W.return;if(Bp(W),W===F){ne=null;break}if($!==null){$.return=Z,ne=$;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var rt=ie.sibling;ie.sibling=null,ie=rt}while(ie!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ra(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ne=b;else e:for(_=k;ne!==null;){if(T=ne,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:bl(9,T)}}catch(oe){et(T,T.return,oe)}if(T===_){ne=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ne=Y;break e}ne=T.return}}if(xe=d,$r(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(wi,n)}catch{}c=!0}return c}finally{Ce=a,pn.transition=r}}return!1}function rm(n,r,a){r=js(a,r),r=wp(n,r,1),n=Hr(n,r,1),r=zt(),n!==null&&(xr(n,1,r),Qt(n,r))}function et(n,r,a){if(n.tag===3)rm(n,n,a);else for(;r!==null;){if(r.tag===3){rm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=js(a,n),n=Tp(r,n,1),r=Hr(r,n,1),n=zt(),r!==null&&(xr(r,1,n),Qt(r,n));break}}r=r.return}}function Yv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(dt===4||dt===3&&(St&130023424)===St&&500>We()-uh?bi(n,0):lh|=a),Qt(n,r)}function im(n,r){r===0&&((n.mode&1)===0?r=1:(r=fs,fs<<=1,(fs&130023424)===0&&(fs=4194304)));var a=zt();n=pr(n,r),n!==null&&(xr(n,r,a),Qt(n,a))}function Xv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),im(n,a)}function Jv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),im(n,a)}var sm;sm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,Uv(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Qe&&(r.flags&1048576)!==0&&Ff(r,El,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ll(n,r),n=r.pendingProps;var d=Vs(r,Dt.current);Fs(r,a),d=jc(null,r,c,n,d,a);var p=Bc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(p=!0,yl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xc(r),d.updater=xl,r.stateNode=d,d._reactInternals=r,Kc(r,c,n,a),r=Xc(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&Ic(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=eE(c),n=Cn(c,n),d){case 0:r=Yc(null,r,c,n,a);break e;case 1:r=Dp(null,r,c,n,a);break e;case 11:r=Rp(null,r,c,n,a);break e;case 14:r=Pp(null,r,c,Cn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Yc(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Dp(n,r,c,d,a);case 3:e:{if(Vp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Kf(n,r),Rl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=js(Error(t(423)),r),r=xp(n,r,c,a,d);break e}else if(c!==d){d=js(Error(t(424)),r),r=xp(n,r,c,a,d);break e}else for(nn=jr(r.stateNode.containerInfo.firstChild),tn=r,Qe=!0,Pn=null,a=Hf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),c===d){r=gr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return Yf(r),n===null&&Rc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,yc(c,d)?_=null:p!==null&&yc(c,p)&&(r.flags|=32),Np(n,r),Bt(n,r,_,a),r.child;case 6:return n===null&&Rc(r),null;case 13:return Op(n,r,a);case 4:return Oc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ms(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Rp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,He(Il,c._currentValue),c._currentValue=_,p!==null)if(Rn(p.value,_)){if(p.children===d.children&&!Ht.current){r=gr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=mr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?R.next=R:(R.next=W.next,W.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Dc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Dc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Fs(r,a),d=dn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Cn(c,r.pendingProps),d=Cn(c.type,d),Pp(n,r,c,d,a);case 15:return Cp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Ll(n,r),r.tag=1,qt(c)?(n=!0,yl(r)):n=!1,Fs(r,a),vp(r,c,d),Kc(r,c,d,a),Xc(null,r,c,!0,n,a);case 19:return Mp(n,r,a);case 22:return kp(n,r,a)}throw Error(t(156,r.tag))};function om(n,r){return hs(n,r)}function Zv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new Zv(n,r,a,c)}function yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eE(n){if(typeof n=="function")return yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===kt)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")yh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Ui(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=mn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,a,r,d),n.elementType=S,n.lanes=p,n;case tt:return n=mn(19,a,r,d),n.elementType=tt,n.lanes=p,n;case Be:return Kl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case D:_=9;break e;case x:_=11;break e;case kt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ui(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function Kl(n,r,a,c){return n=mn(22,n,c,r),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function _h(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function vh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function tE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Eh(n,r,a,c,d,p,_,T,R){return n=new tE(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(p),n}function nE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function am(n){if(!n)return zr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return Lf(n,a,r)}return r}function lm(n,r,a,c,d,p,_,T,R){return n=Eh(a,c,!0,n,d,p,_,T,R),n.context=am(null),a=n.current,c=zt(),d=Qr(a),p=mr(c,d),p.callback=r??null,Hr(a,p,d),n.current.lanes=d,xr(n,d,c),Qt(n,c),n}function Gl(n,r,a,c){var d=r.current,p=zt(),_=Qr(d);return a=am(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,_),n!==null&&(Dn(n,d,_,p),Al(n,d,_)),_}function Ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function wh(n,r){um(n,r),(n=n.alternate)&&um(n,r)}function rE(){return null}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Th(n){this._internalRoot=n}Yl.prototype.render=Th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Gl(n,r,null,null)},Yl.prototype.unmount=Th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Mi(function(){Gl(null,n,null,null)}),r[cr]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ya();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Fn.length&&r!==0&&r<Fn[a].priority;a++);Fn.splice(a,0,n),a===0&&Za(n)}};function Ih(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function iE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Ql(_);p.call(F)}}var _=lm(r,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=_,n[cr]=_.current,Wo(n.nodeType===8?n.parentNode:n),Mi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Ql(R);T.call(F)}}var R=Eh(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=R,n[cr]=R.current,Wo(n.nodeType===8?n.parentNode:n),Mi(function(){Gl(r,R,a,c)}),R}function Jl(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Ql(_);T.call(R)}}Gl(r,_,n,d)}else _=iE(a,r,n,d,c);return Ql(_)}Ga=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Or(r,a|1),Qt(r,We()),(xe&6)===0&&($s=We()+500,$r()))}break;case 13:Mi(function(){var c=pr(n,1);if(c!==null){var d=zt();Dn(c,n,1,d)}}),wh(n,1)}},ps=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=zt();Dn(r,n,134217728,a)}wh(n,134217728)}},Qa=function(n){if(n.tag===13){var r=Qr(n),a=pr(n,r);if(a!==null){var c=zt();Dn(a,n,r,c)}wh(n,r)}},Ya=function(){return Ce},Xa=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},ss=function(n,r,a){switch(r){case"input":if(mo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=ml(c);if(!d)throw Error(t(90));Zi(c),mo(c,d)}}}break;case"textarea":rs(n,a);break;case"select":r=a.value,r!=null&&nr(n,!!a.multiple,r,!1)}},gi=ph,Ao=Mi;var sE={usingClientEntryPoint:!1,Events:[Ko,Ns,ml,Mn,So,ph]},aa={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oE={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Co(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{wi=Zl.inject(oE),Xt=Zl}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(r))throw Error(t(200));return nE(n,r,null,a)},Yt.createRoot=function(n,r){if(!Ih(n))throw Error(t(299));var a=!1,c="",d=cm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Eh(n,1,!1,null,null,a,!1,c,d),n[cr]=r.current,Wo(n.nodeType===8?n.parentNode:n),new Th(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Co(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Mi(n)},Yt.hydrate=function(n,r,a){if(!Xl(r))throw Error(t(200));return Jl(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Ih(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=lm(r,null,n,1,a??null,d,!1,p,_),n[cr]=r.current,Wo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Yl(r)},Yt.render=function(n,r,a){if(!Xl(r))throw Error(t(200));return Jl(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(Mi(function(){Jl(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Yt.unstable_batchedUpdates=ph,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jl(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var vm;function bg(){if(vm)return Rh.exports;vm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Rh.exports=yE(),Rh.exports}var Em;function _E(){if(Em)return eu;Em=1;var i=bg();return eu.createRoot=i.createRoot,eu.hydrateRoot=i.hydrateRoot,eu}var vE=_E();bg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},_a.apply(this,arguments)}var Bi;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Bi||(Bi={}));const wm="popstate";function EE(i){i===void 0&&(i={});function e(s,o){let{pathname:u,search:h,hash:m}=s.location;return Bh("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Fg(o)}return TE(e,t,null,i)}function qn(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function wE(){return Math.random().toString(36).substr(2,8)}function Tm(i,e){return{usr:i.state,key:i.key,idx:e}}function Bh(i,e,t,s){return t===void 0&&(t=null),_a({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Ou(e):e,{state:t,key:e&&e.key||s||wE()})}function Fg(i){let{pathname:e="/",search:t="",hash:s=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ou(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substr(s),i=i.substr(0,s)),i&&(e.pathname=i)}return e}function TE(i,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,m=Bi.Pop,g=null,v=w();v==null&&(v=0,h.replaceState(_a({},h.state,{idx:v}),""));function w(){return(h.state||{idx:null}).idx}function P(){m=Bi.Pop;let j=w(),ue=j==null?null:j-v;v=j,g&&g({action:m,location:G.location,delta:ue})}function M(j,ue){m=Bi.Push;let he=Bh(G.location,j,ue);v=w()+1;let te=Tm(he,v),le=G.createHref(he);try{h.pushState(te,"",le)}catch(Me){if(Me instanceof DOMException&&Me.name==="DataCloneError")throw Me;o.location.assign(le)}u&&g&&g({action:m,location:G.location,delta:1})}function B(j,ue){m=Bi.Replace;let he=Bh(G.location,j,ue);v=w();let te=Tm(he,v),le=G.createHref(he);h.replaceState(te,"",le),u&&g&&g({action:m,location:G.location,delta:0})}function Q(j){let ue=o.location.origin!=="null"?o.location.origin:o.location.href,he=typeof j=="string"?j:Fg(j);return he=he.replace(/ $/,"%20"),qn(ue,"No window.location.(origin|href) available to create URL for href: "+he),new URL(he,ue)}let G={get action(){return m},get location(){return i(o,h)},listen(j){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(wm,P),g=j,()=>{o.removeEventListener(wm,P),g=null}},createHref(j){return e(o,j)},createURL:Q,encodeLocation(j){let ue=Q(j);return{pathname:ue.pathname,search:ue.search,hash:ue.hash}},push:M,replace:B,go(j){return h.go(j)}};return G}var Im;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Im||(Im={}));function IE(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function SE(i,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?Ou(i):i;return{pathname:t?t.startsWith("/")?t:AE(t,e):e,search:NE(s),hash:DE(o)}}function AE(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kh(i,e,t,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RE(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function PE(i,e){let t=RE(i);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function CE(i,e,t,s){s===void 0&&(s=!1);let o;typeof i=="string"?o=Ou(i):(o=_a({},i),qn(!o.pathname||!o.pathname.includes("?"),kh("?","pathname","search",o)),qn(!o.pathname||!o.pathname.includes("#"),kh("#","pathname","hash",o)),qn(!o.search||!o.search.includes("#"),kh("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=t;else{let P=e.length-1;if(!s&&h.startsWith("..")){let M=h.split("/");for(;M[0]==="..";)M.shift(),P-=1;o.pathname=M.join("/")}m=P>=0?e[P]:"/"}let g=SE(o,m),v=h&&h!=="/"&&h.endsWith("/"),w=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||w)&&(g.pathname+="/"),g}const kE=i=>i.join("/").replace(/\/\/+/g,"/"),NE=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,DE=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Ug=["post","put","patch","delete"];new Set(Ug);const VE=["get",...Ug];new Set(VE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},gu.apply(this,arguments)}const jg=Ee.createContext(null),dd=Ee.createContext(null),fd=Ee.createContext(null),pd=Ee.createContext({outlet:null,matches:[],isDataRoute:!1});function md(){return Ee.useContext(fd)!=null}function xE(){return md()||qn(!1),Ee.useContext(fd).location}function Bg(i){Ee.useContext(dd).static||Ee.useLayoutEffect(i)}function zg(){let{isDataRoute:i}=Ee.useContext(pd);return i?FE():OE()}function OE(){md()||qn(!1);let i=Ee.useContext(jg),{basename:e,future:t,navigator:s}=Ee.useContext(dd),{matches:o}=Ee.useContext(pd),{pathname:u}=xE(),h=JSON.stringify(PE(o,t.v7_relativeSplatPath)),m=Ee.useRef(!1);return Bg(()=>{m.current=!0}),Ee.useCallback(function(v,w){if(w===void 0&&(w={}),!m.current)return;if(typeof v=="number"){s.go(v);return}let P=CE(v,JSON.parse(h),u,w.relative==="path");i==null&&e!=="/"&&(P.pathname=P.pathname==="/"?e:kE([e,P.pathname])),(w.replace?s.replace:s.push)(P,w.state,w)},[e,s,h,u,i])}var $g=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}($g||{}),Wg=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Wg||{});function LE(i){let e=Ee.useContext(jg);return e||qn(!1),e}function ME(i){let e=Ee.useContext(pd);return e||qn(!1),e}function bE(i){let e=ME(),t=e.matches[e.matches.length-1];return t.route.id||qn(!1),t.route.id}function FE(){let{router:i}=LE($g.UseNavigateStable),e=bE(Wg.UseNavigateStable),t=Ee.useRef(!1);return Bg(()=>{t.current=!0}),Ee.useCallback(function(o,u){u===void 0&&(u={}),t.current&&(typeof o=="number"?i.navigate(o):i.navigate(o,gu({fromRouteId:e},u)))},[i,e])}function UE(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function jE(i){let{basename:e="/",children:t=null,location:s,navigationType:o=Bi.Pop,navigator:u,static:h=!1,future:m}=i;md()&&qn(!1);let g=e.replace(/^\/*/,"/"),v=Ee.useMemo(()=>({basename:g,navigator:u,static:h,future:gu({v7_relativeSplatPath:!1},m)}),[g,m,u,h]);typeof s=="string"&&(s=Ou(s));let{pathname:w="/",search:P="",hash:M="",state:B=null,key:Q="default"}=s,G=Ee.useMemo(()=>{let j=IE(w,g);return j==null?null:{location:{pathname:j,search:P,hash:M,state:B,key:Q},navigationType:o}},[g,w,P,M,B,Q,o]);return G==null?null:Ee.createElement(dd.Provider,{value:v},Ee.createElement(fd.Provider,{children:t,value:G}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const BE="6";try{window.__reactRouterVersion=BE}catch{}const zE="startTransition",Sm=pE[zE];function $E(i){let{basename:e,children:t,future:s,window:o}=i,u=Ee.useRef();u.current==null&&(u.current=EE({window:o,v5Compat:!0}));let h=u.current,[m,g]=Ee.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},w=Ee.useCallback(P=>{v&&Sm?Sm(()=>g(P)):g(P)},[g,v]);return Ee.useLayoutEffect(()=>h.listen(w),[h,w]),Ee.useEffect(()=>UE(s),[s]),Ee.createElement(jE,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:h,future:s})}var Am;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Am||(Am={}));var Rm;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Rm||(Rm={}));var Pm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,P=(u&3)<<4|m>>4;let M=(m&15)<<2|v>>6,B=v&63;g||(B=64,h||(M=64)),s.push(t[w],t[P],t[M],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Hg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):WE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const P=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||P==null)throw new HE;const M=u<<2|m>>4;if(s.push(M),v!==64){const B=m<<4&240|v>>2;if(s.push(B),P!==64){const Q=v<<6&192|P;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qE=function(i){const e=Hg(i);return qg.encodeByteArray(e,!0)},yu=function(i){return qE(i).replace(/\./g,"")},Kg=function(i){try{return qg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GE=()=>KE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof Pm>"u")return;const i=Pm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},YE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Kg(i[1]);return e&&JSON.parse(e)},Lu=()=>{try{return GE()||QE()||YE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Gg=i=>{var e,t;return(t=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},XE=i=>{const e=Gg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qg=()=>{var i;return(i=Lu())===null||i===void 0?void 0:i.config},Yg=i=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ZE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[yu(JSON.stringify(t)),yu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function tw(){var i;const e=(i=Lu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ow(){return!tw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aw(){try{return typeof indexedDB=="object"}catch{return!1}}function lw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uw,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?cw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Pr(o,m,s)}}function cw(i,e){return i.replace(hw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hw=/\{\$([^}]+)}/g;function dw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function _u(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Cm(u)&&Cm(h)){if(!_u(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Cm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fw(i,e){const t=new pw(i,e);return t.subscribe.bind(t)}class pw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Nh),o.error===void 0&&(o.error=Nh),o.complete===void 0&&(o.complete=Nh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Nh(){}/**
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
 */function sn(i){return i&&i._delegate?i._delegate:i}class qi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class gw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new JE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(i){return i===ji?void 0:i}function _w(i){return i.instantiationMode==="EAGER"}/**
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
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Ew={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},ww=ke.INFO,Tw={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Iw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Tw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gd{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=Iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Sw=(i,e)=>e.some(t=>i instanceof t);let km,Nm;function Aw(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,zh=new WeakMap,Jg=new WeakMap,Dh=new WeakMap,yd=new WeakMap;function Pw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Xg.set(t,i)}).catch(()=>{}),yd.set(e,i),e}function Cw(i){if(zh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});zh.set(i,e)}let $h={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return zh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Jg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function kw(i){$h=i($h)}function Nw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Vh(this),e,...t);return Jg.set(s,e.sort?e.sort():[e]),ii(s)}:Rw().includes(i)?function(...e){return i.apply(Vh(this),e),ii(Xg.get(this))}:function(...e){return ii(i.apply(Vh(this),e))}}function Dw(i){return typeof i=="function"?Nw(i):(i instanceof IDBTransaction&&Cw(i),Sw(i,Aw())?new Proxy(i,$h):i)}function ii(i){if(i instanceof IDBRequest)return Pw(i);if(Dh.has(i))return Dh.get(i);const e=Dw(i);return e!==i&&(Dh.set(i,e),yd.set(e,i)),e}const Vh=i=>yd.get(i);function Vw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ii(h.result),g.oldVersion,g.newVersion,ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const xw=["get","getKey","getAll","getAllKeys","count"],Ow=["put","add","delete","clear"],xh=new Map;function Dm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Ow.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return xh.set(e,u),u}kw(i=>({...i,get:(e,t,s)=>Dm(e,t)||i.get(e,t,s),has:(e,t)=>!!Dm(e,t)||i.has(e,t)}));/**
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
 */class Lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Vm="0.10.13";/**
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
 */const Ir=new gd("@firebase/app"),bw="@firebase/app-compat",Fw="@firebase/analytics-compat",Uw="@firebase/analytics",jw="@firebase/app-check-compat",Bw="@firebase/app-check",zw="@firebase/auth",$w="@firebase/auth-compat",Ww="@firebase/database",Hw="@firebase/data-connect",qw="@firebase/database-compat",Kw="@firebase/functions",Gw="@firebase/functions-compat",Qw="@firebase/installations",Yw="@firebase/installations-compat",Xw="@firebase/messaging",Jw="@firebase/messaging-compat",Zw="@firebase/performance",e0="@firebase/performance-compat",t0="@firebase/remote-config",n0="@firebase/remote-config-compat",r0="@firebase/storage",i0="@firebase/storage-compat",s0="@firebase/firestore",o0="@firebase/vertexai-preview",a0="@firebase/firestore-compat",l0="firebase",u0="10.14.1";/**
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
 */const Hh="[DEFAULT]",c0={[Wh]:"fire-core",[bw]:"fire-core-compat",[Uw]:"fire-analytics",[Fw]:"fire-analytics-compat",[Bw]:"fire-app-check",[jw]:"fire-app-check-compat",[zw]:"fire-auth",[$w]:"fire-auth-compat",[Ww]:"fire-rtdb",[Hw]:"fire-data-connect",[qw]:"fire-rtdb-compat",[Kw]:"fire-fn",[Gw]:"fire-fn-compat",[Qw]:"fire-iid",[Yw]:"fire-iid-compat",[Xw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Zw]:"fire-perf",[e0]:"fire-perf-compat",[t0]:"fire-rc",[n0]:"fire-rc-compat",[r0]:"fire-gcs",[i0]:"fire-gcs-compat",[s0]:"fire-fst",[a0]:"fire-fst-compat",[o0]:"fire-vertex","fire-js":"fire-js",[l0]:"fire-js-all"};/**
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
 */const vu=new Map,h0=new Map,qh=new Map;function xm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Js(i){const e=i.name;if(qh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,i);for(const t of vu.values())xm(t,i);for(const t of h0.values())xm(t,i);return!0}function _d(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vr(i){return i.settings!==void 0}/**
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
 */const d0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Ca("app","Firebase",d0);/**
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
 */class f0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const ao=u0;function Zg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=Qg()),!t)throw si.create("no-options");const u=vu.get(o);if(u){if(_u(t,u.options)&&_u(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new vw(o);for(const g of qh.values())h.addComponent(g);const m=new f0(t,s,h);return vu.set(o,m),m}function ey(i=Hh){const e=vu.get(i);if(!e&&i===Hh&&Qg())return Zg();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=c0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}Js(new qi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const p0="firebase-heartbeat-database",m0=1,va="firebase-heartbeat-store";let Oh=null;function ty(){return Oh||(Oh=Vw(p0,m0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(va)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),Oh}async function g0(i){try{const t=(await ty()).transaction(va),s=await t.objectStore(va).get(ny(i));return await t.done,s}catch(e){if(e instanceof Pr)Ir.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function Om(i,e){try{const s=(await ty()).transaction(va,"readwrite");await s.objectStore(va).put(e,ny(i)),await s.done}catch(t){if(t instanceof Pr)Ir.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function ny(i){return`${i.name}!${i.options.appId}`}/**
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
 */const y0=1024,_0=30*24*60*60*1e3;class v0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new w0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Lm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=_0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lm(),{heartbeatsToSend:s,unsentEntries:o}=E0(this._heartbeatsCache.heartbeats),u=yu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Lm(){return new Date().toISOString().substring(0,10)}function E0(i,e=y0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Mm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Mm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class w0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aw()?lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await g0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Mm(i){return yu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function T0(i){Js(new qi("platform-logger",e=>new Lw(e),"PRIVATE")),Js(new qi("heartbeat",e=>new v0(e),"PRIVATE")),oi(Wh,Vm,i),oi(Wh,Vm,"esm2017"),oi("fire-js","")}T0("");var I0="firebase",S0="10.14.1";/**
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
 */oi(I0,S0,"app");function vd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function ry(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A0=ry,iy=new Ca("auth","Firebase",ry());/**
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
 */const Eu=new gd("@firebase/auth");function R0(i,...e){Eu.logLevel<=ke.WARN&&Eu.warn(`Auth (${ao}): ${i}`,...e)}function au(i,...e){Eu.logLevel<=ke.ERROR&&Eu.error(`Auth (${ao}): ${i}`,...e)}/**
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
 */function Xn(i,...e){throw wd(i,...e)}function xn(i,...e){return wd(i,...e)}function Ed(i,e,t){const s=Object.assign(Object.assign({},A0()),{[e]:t});return new Ca("auth","Firebase",s).create(e,{appName:i.name})}function Wi(i){return Ed(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function P0(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xn(i,"argument-error"),Ed(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return iy.create(i,...e)}function _e(i,e,...t){if(!i)throw wd(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw au(e),new Error(e)}function Sr(i,e){i||Er(e)}/**
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
 */function Kh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function C0(){return bm()==="http:"||bm()==="https:"}function bm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function k0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C0()||rw()||"connection"in navigator)?navigator.onLine:!0}function N0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Na{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile=ew()||iw()}get(){return k0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(i,e){Sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V0=new Na(3e4,6e4);function Id(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function lo(i,e,t,s,o={}){return oy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=ka(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return nw()||(v.referrerPolicy="no-referrer"),sy.fetch()(ay(i,i.config.apiHost,t,m),v)})}async function oy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},D0),e);try{const o=new O0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw tu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw tu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw tu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw tu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Ed(i,w,v);Xn(i,w)}}catch(o){if(o instanceof Pr)throw o;Xn(i,"network-request-failed",{message:String(o)})}}async function x0(i,e,t,s,o={}){const u=await lo(i,e,t,s,o);return"mfaPendingCredential"in u&&Xn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function ay(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Td(i.config,o):`${i.config.apiScheme}://${o}`}class O0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),V0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=xn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function L0(i,e){return lo(i,"POST","/v1/accounts:delete",e)}async function ly(i,e){return lo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function fa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M0(i,e=!1){const t=sn(i),s=await t.getIdToken(e),o=Sd(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:fa(Lh(o.auth_time)),issuedAtTime:fa(Lh(o.iat)),expirationTime:fa(Lh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Lh(i){return Number(i)*1e3}function Sd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return au("JWT malformed, contained fewer than 3 sections"),null;try{const o=Kg(t);return o?JSON.parse(o):(au("Failed to decode base64 JWT payload"),null)}catch(o){return au("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Fm(i){const e=Sd(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ea(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&b0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function b0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class F0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ea(i,ly(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?uy(u.providerUserInfo):[],m=j0(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,P={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Gh(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,P)}async function U0(i){const e=sn(i);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function uy(i){return i.map(e=>{var{providerId:t}=e,s=vd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function B0(i,e){const t=await oy(i,{},async()=>{const s=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=ay(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",sy.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function z0(i,e){return lo(i,"POST","/v2/accounts:revokeToken",Id(i,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Fm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await B0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Gs;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Zr(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Gh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ea(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M0(this,e)}reload(){return U0(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vr(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await Ea(this,L0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const P=(s=t.displayName)!==null&&s!==void 0?s:void 0,M=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(m=t.tenantId)!==null&&m!==void 0?m:void 0,j=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ue=(v=t.createdAt)!==null&&v!==void 0?v:void 0,he=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:te,emailVerified:le,isAnonymous:Me,providerData:Re,stsTokenManager:N}=t;_e(te&&N,e,"internal-error");const I=Gs.fromJSON(this.name,N);_e(typeof te=="string",e,"internal-error"),Zr(P,e.name),Zr(M,e.name),_e(typeof le=="boolean",e,"internal-error"),_e(typeof Me=="boolean",e,"internal-error"),Zr(B,e.name),Zr(Q,e.name),Zr(G,e.name),Zr(j,e.name),Zr(ue,e.name),Zr(he,e.name);const A=new wr({uid:te,auth:e,email:M,emailVerified:le,displayName:P,isAnonymous:Me,photoURL:Q,phoneNumber:B,tenantId:G,stsTokenManager:I,createdAt:ue,lastLoginAt:he});return Re&&Array.isArray(Re)&&(A.providerData=Re.map(C=>Object.assign({},C))),j&&(A._redirectEventId=j),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Gs;o.updateFromServerResponse(t);const u=new wr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?uy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Gs;m.updateFromIdToken(s);const g=new wr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Gh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const Um=new Map;function Tr(i){Sr(i instanceof Function,"Expected a class definition");let e=Um.get(i);return e?(Sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Um.set(i,e),e)}/**
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
 */class cy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cy.type="NONE";const jm=cy;/**
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
 */function lu(i,e,t){return`firebase:${i}:${e}:${t}`}class Qs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=lu(this.userKey,o.apiKey,u),this.fullPersistenceKey=lu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Qs(Tr(jm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Tr(jm);const h=lu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const P=wr._fromJSON(e,w);v!==u&&(m=P),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Qs(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Qs(u,e,s))}}/**
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
 */function Bm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gy(e))return"Blackberry";if(yy(e))return"Webos";if(dy(e))return"Safari";if((e.includes("chrome/")||fy(e))&&!e.includes("edge/"))return"Chrome";if(my(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hy(i=Ft()){return/firefox\//i.test(i)}function dy(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fy(i=Ft()){return/crios\//i.test(i)}function py(i=Ft()){return/iemobile/i.test(i)}function my(i=Ft()){return/android/i.test(i)}function gy(i=Ft()){return/blackberry/i.test(i)}function yy(i=Ft()){return/webos/i.test(i)}function Ad(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function $0(i=Ft()){var e;return Ad(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W0(){return sw()&&document.documentMode===10}function _y(i=Ft()){return Ad(i)||my(i)||yy(i)||gy(i)||/windows phone/i.test(i)||py(i)}/**
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
 */function vy(i,e=[]){let t;switch(i){case"Browser":t=Bm(Ft());break;case"Worker":t=`${Bm(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ao}/${s}`}/**
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
 */class H0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function q0(i,e={}){return lo(i,"GET","/v2/passwordPolicy",Id(i,e))}/**
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
 */const K0=6;class G0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:K0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class Q0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new H0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ly(this,{idToken:e}),s=await wr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vr(this.app))return Promise.reject(Wi(this));const t=e?sn(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vr(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vr(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q0(this),t=new G0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await z0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&R0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mu(i){return sn(i)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=fw(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y0(i){Rd=i}function X0(i){return Rd.loadJS(i)}function J0(){return Rd.gapiScript}function Z0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function eT(i,e){const t=_d(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(_u(u,e??{}))return o;Xn(o,"already-initialized")}return t.initialize({options:e})}function tT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function nT(i,e,t){const s=Mu(i);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Ey(e),{host:h,port:m}=rT(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),iT()}function Ey(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function rT(i){const e=Ey(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:$m(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:$m(h)}}}function $m(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function iT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class wy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function Ys(i,e){return x0(i,"POST","/v1/accounts:signInWithIdp",Id(i,e))}/**
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
 */const sT="http://localhost";class Ki extends wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=vd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ki(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ys(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ys(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ys(e,t)}buildRequest(){const e={requestUri:sT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ka(t)}return e}}/**
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
 */class Pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends Pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ei extends Da{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class _r extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ki._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _r.credential(t,s)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class ti extends Da{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Da{constructor(){super("twitter.com")}static credential(e,t){return Ki._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await wr._fromIdTokenResponse(e,s,o),h=Wm(s);return new Zs({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Wm(s);return new Zs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Wm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Tu extends Pr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Tu(e,t,s,o)}}function Ty(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(i,u,e,s):u})}async function oT(i,e,t=!1){const s=await Ea(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Zs._forOperation(i,"link",s)}/**
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
 */async function aT(i,e,t=!1){const{auth:s}=i;if(vr(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const u=await Ea(i,Ty(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=Sd(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),Zs._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Xn(s,"user-mismatch"),u}}/**
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
 */async function lT(i,e,t=!1){if(vr(i.app))return Promise.reject(Wi(i));const s="signIn",o=await Ty(i,s,e),u=await Zs._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function uT(i,e,t,s){return sn(i).onIdTokenChanged(e,t,s)}function cT(i,e,t){return sn(i).beforeAuthStateChanged(e,t)}function hT(i,e,t,s){return sn(i).onAuthStateChanged(e,t,s)}function Iy(i){return sn(i).signOut()}const Iu="__sak";/**
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
 */class Sy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Iu,"1"),this.storage.removeItem(Iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dT=1e3,fT=10;class Ay extends Sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);W0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,fT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ay.type="LOCAL";const pT=Ay;/**
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
 */class Ry extends Sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ry.type="SESSION";const Py=Ry;/**
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
 */function mT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new bu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await mT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
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
 */function Cd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Cd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(P){const M=P;if(M.data.eventId===v)switch(M.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(M.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Kn(){return window}function yT(i){Kn().location.href=i}/**
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
 */function Cy(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ET(){return Cy()?self:null}/**
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
 */const ky="firebaseLocalStorageDb",wT=1,Su="firebaseLocalStorage",Ny="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fu(i,e){return i.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function TT(){const i=indexedDB.deleteDatabase(ky);return new Va(i).toPromise()}function Qh(){const i=indexedDB.open(ky,wT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Su,{keyPath:Ny})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Su)?e(s):(s.close(),await TT(),e(await Qh()))})})}async function Hm(i,e,t){const s=Fu(i,!0).put({[Ny]:e,value:t});return new Va(s).toPromise()}async function IT(i,e){const t=Fu(i,!1).get(e),s=await new Va(t).toPromise();return s===void 0?null:s.value}function qm(i,e){const t=Fu(i,!0).delete(e);return new Va(t).toPromise()}const ST=800,AT=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await Hm(e,Iu,"1"),await qm(e,Iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>IT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Fu(o,!1).getAll();return new Va(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ST)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const RT=Dy;new Na(3e4,6e4);/**
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
 */function Vy(i,e){return e?Tr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class kd extends wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ys(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PT(i){return lT(i.auth,new kd(i),i.bypassAuthState)}function CT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),aT(t,new kd(i),i.bypassAuthState)}async function kT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),oT(t,new kd(i),i.bypassAuthState)}/**
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
 */class xy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PT;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return CT;default:Xn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NT=new Na(2e3,1e4);async function DT(i,e,t){if(vr(i.app))return Promise.reject(xn(i,"operation-not-supported-in-this-environment"));const s=Mu(i);P0(i,e,Pd);const o=Vy(s,t);return new zi(s,"signInViaPopup",e,o).executeNotNull()}class zi extends xy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NT.get())};e()}}zi.currentPopupAction=null;/**
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
 */const VT="pendingRedirect",uu=new Map;class xT extends xy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=uu.get(this.auth._key());if(!e){try{const s=await OT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}uu.set(this.auth._key(),e)}return this.bypassAuthState||uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OT(i,e){const t=bT(e),s=MT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function LT(i,e){uu.set(i._key(),e)}function MT(i){return Tr(i._redirectPersistence)}function bT(i){return lu(VT,i.config.apiKey,i.name)}async function FT(i,e,t=!1){if(vr(i.app))return Promise.reject(Wi(i));const s=Mu(i),o=Vy(s,e),h=await new xT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const UT=10*60*1e3;class jT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Oy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Km(e))}saveEventToCache(e){this.cachedEventUids.add(Km(e)),this.lastProcessedEventTime=Date.now()}}function Km(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Oy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oy(i);default:return!1}}/**
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
 */async function zT(i,e={}){return lo(i,"GET","/v1/projects",e)}/**
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
 */const $T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WT=/^https?/;async function HT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await zT(i);for(const t of e)try{if(qT(t))return}catch{}Xn(i,"unauthorized-domain")}function qT(i){const e=Kh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!WT.test(t))return!1;if($T.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const KT=new Na(3e4,6e4);function Gm(){const i=Kn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function GT(i){return new Promise((e,t)=>{var s,o,u;function h(){Gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gm(),t(xn(i,"network-request-failed"))},timeout:KT.get()})}if(!((o=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Kn().gapi)===null||u===void 0)&&u.load)h();else{const m=Z0("iframefcb");return Kn()[m]=()=>{gapi.load?h():t(xn(i,"network-request-failed"))},X0(`${J0()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw cu=null,e})}let cu=null;function QT(i){return cu=cu||GT(i),cu}/**
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
 */const YT=new Na(5e3,15e3),XT="__/auth/iframe",JT="emulator/auth/iframe",ZT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Td(e,JT):`https://${i.config.authDomain}/${XT}`,s={apiKey:e.apiKey,appName:i.name,v:ao},o=eI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${ka(s).slice(1)}`}async function nI(i){const e=await QT(i),t=Kn().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:tI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=xn(i,"network-request-failed"),m=Kn().setTimeout(()=>{u(h)},YT.get());function g(){Kn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,sI=600,oI="_blank",aI="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lI(i,e,t,s=iI,o=sI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},rI),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=fy(v)?oI:t),hy(v)&&(e=e||aI,g.scrollbars="yes");const w=Object.entries(g).reduce((M,[B,Q])=>`${M}${B}=${Q},`,"");if($0(v)&&m!=="_self")return uI(e||"",m),new Qm(null);const P=window.open(e||"",m,w);_e(P,i,"popup-blocked");try{P.focus()}catch{}return new Qm(P)}function uI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cI="__/auth/handler",hI="emulator/auth/handler",dI=encodeURIComponent("fac");async function Ym(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ao,eventId:o};if(e instanceof Pd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",dw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,P]of Object.entries({}))h[w]=P}if(e instanceof Da){const w=e.getScopes().filter(P=>P!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${dI}=${encodeURIComponent(g)}`:"";return`${fI(i)}?${ka(m).slice(1)}${v}`}function fI({config:i}){return i.emulator?Td(i,hI):`https://${i.authDomain}/${cI}`}/**
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
 */const Mh="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Py,this._completeRedirectFn=FT,this._overrideRedirectResult=LT}async _openPopup(e,t,s,o){var u;Sr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ym(e,t,s,Kh(),o);return lI(e,h,Cd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ym(e,t,s,Kh(),o);return yT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nI(e),s=new jT(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mh,{type:Mh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Mh];h!==void 0&&t(!!h),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _y()||dy()||Ad()}}const mI=pI;var Xm="@firebase/auth",Jm="1.7.9";/**
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
 */class gI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _I(i){Js(new qi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vy(i)},v=new Q0(s,o,u,g);return tT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Js(new qi("auth-internal",e=>{const t=Mu(e.getProvider("auth").getImmediate());return(s=>new gI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(Xm,Jm,yI(i)),oi(Xm,Jm,"esm2017")}/**
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
 */const vI=5*60,EI=Yg("authIdTokenMaxAge")||vI;let Zm=null;const wI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>EI)return;const o=t==null?void 0:t.token;Zm!==o&&(Zm=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Yh(i=ey()){const e=_d(i,"auth");if(e.isInitialized())return e.getImmediate();const t=eT(i,{popupRedirectResolver:mI,persistence:[RT,pT,Py]}),s=Yg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=wI(u.toString());cT(t,h,()=>h(t.currentUser)),uT(t,m=>h(m))}}const o=Gg("auth");return o&&nT(t,`http://${o}`),t}function TI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Y0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",TI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_I("Browser");var eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,Ly;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(C,D,x){for(var S=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)S[tt-2]=arguments[tt];return I.prototype[D].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)C[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var x=N.g[3],S=I+(x^A&(D^x))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[2]+606105819&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[6]+2821735955&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[10]+4294925233&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[14]+2792965006&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^x&(A^D))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[11]+643717713&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[15]+3634488961&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[3]+4107603335&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[7]+1735328473&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^x)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[11]+1839030562&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[7]+4139469664&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[3]+3572445317&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[15]+530742520&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~x))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[14]+2878612391&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[10]+4293915773&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[6]+2734768916&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[2]+718787259&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+x&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,C=this.B,D=this.h,x=0;x<I;){if(D==0)for(;x<=A;)o(this,N,x),x+=this.blockSize;if(typeof N=="string"){for(;x<I;)if(C[D++]=N.charCodeAt(x++),D==this.blockSize){o(this,C),D=0;break}}else for(;x<I;)if(C[D++]=N[x++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)N[A++]=this.g[I]>>>C&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],C=!0,D=N.length-1;0<=D;D--){var x=N[D]|0;C&&x==I||(A[D]=x,C=!1)}this.g=A}var m={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return P;if(0>N)return j(v(-N));for(var I=[],A=1,C=0;N>=A;C++)I[C]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return j(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=P,D=0;D<N.length;D+=8){var x=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+x),I);8>x?(x=v(Math.pow(I,x)),C=C.j(x).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var P=g(0),M=g(1),B=g(16777216);i=h.prototype,i.m=function(){if(G(this))return-j(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);N+=(0<=C?C:4294967296+C)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(G(this))return"-"+j(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,C="";;){var D=le(A,I).g;A=ue(A,D.j(I));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,Q(A))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function G(N){return N.h==-1}i.l=function(N){return N=ue(this,N),G(N)?-1:Q(N)?0:1};function j(N){for(var I=N.g.length,A=[],C=0;C<I;C++)A[C]=~N.g[C];return new h(A,~N.h).add(M)}i.abs=function(){return G(this)?j(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0,D=0;D<=I;D++){var x=C+(this.i(D)&65535)+(N.i(D)&65535),S=(x>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);C=S>>>16,x&=65535,S&=65535,A[D]=S<<16|x}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ue(N,I){return N.add(j(I))}i.j=function(N){if(Q(this)||Q(N))return P;if(G(this))return G(N)?j(this).j(j(N)):j(j(this).j(N));if(G(N))return j(this.j(j(N)));if(0>this.l(B)&&0>N.l(B))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<N.g.length;D++){var x=this.i(C)>>>16,S=this.i(C)&65535,tt=N.i(D)>>>16,kt=N.i(D)&65535;A[2*C+2*D]+=S*kt,he(A,2*C+2*D),A[2*C+2*D+1]+=x*kt,he(A,2*C+2*D+1),A[2*C+2*D+1]+=S*tt,he(A,2*C+2*D+1),A[2*C+2*D+2]+=x*tt,he(A,2*C+2*D+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function he(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function te(N,I){this.g=N,this.h=I}function le(N,I){if(Q(I))throw Error("division by zero");if(Q(N))return new te(P,P);if(G(N))return I=le(j(N),I),new te(j(I.g),j(I.h));if(G(I))return I=le(N,j(I)),new te(j(I.g),I.h);if(30<N.g.length){if(G(N)||G(I))throw Error("slowDivide_ only works with positive integers.");for(var A=M,C=I;0>=C.l(N);)A=Me(A),C=Me(C);var D=Re(A,1),x=Re(C,1);for(C=Re(C,2),A=Re(A,2);!Q(C);){var S=x.add(C);0>=S.l(N)&&(D=D.add(A),x=S),C=Re(C,1),A=Re(A,1)}return I=ue(N,D.j(I)),new te(D,I)}for(D=P;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=v(A),S=x.j(I);G(S)||0<S.l(N);)A-=C,x=v(A),S=x.j(I);Q(x)&&(x=M),D=D.add(x),N=ue(N,S)}return new te(D,N)}i.A=function(N){return le(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&N.i(C);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|N.i(C);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^N.i(C);return new h(A,this.h^N.h)};function Me(N){for(var I=N.g.length+1,A=[],C=0;C<I;C++)A[C]=N.i(C)<<1|N.i(C-1)>>>31;return new h(A,N.h)}function Re(N,I){var A=I>>5;I%=32;for(var C=N.g.length-A,D=[],x=0;x<C;x++)D[x]=0<I?N.i(x+A)>>>I|N.i(x+A+1)<<32-I:N.i(x+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ly=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Hi=h}).apply(typeof eg<"u"?eg:typeof self<"u"?self:typeof window<"u"?window:{});var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var My,ca,by,hu,Xh,Fy,Uy,jy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof nu=="object"&&nu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in y))break e;y=y[O]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,O={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function P(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function M(l,f,y){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:P,M.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,O,U){for(var X=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)X[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,X)}}function G(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function j(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const O=l.length||0,U=E.length||0;l.length=O+U;for(let X=0;X<U;X++)l[O+X]=E[X]}else l.push(E)}}class ue{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function he(l){return/^[\s\xa0]*$/.test(l)}function te(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function le(l){return le[" "](l),l}le[" "]=function(){};var Me=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Re(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let y,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(y in E)l[y]=E[y];for(let U=0;U<A.length;U++)y=A[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new ue(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,J=!1,fe=new tt,ee=()=>{const l=m.Promise.resolve(void 0);Be=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){x(y)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Se(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Me){e:{try{le(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}Q(Se,ce);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(l,f,y,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=O,this.key=++Fe,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,y,E,O){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Cr(l,f,E,O);return-1<X?(f=l[X],y||(f.fa=!1)):(f=new $e(f,this.src,U,!!E,O),f.fa=y,l.push(f)),f};function Zi(l,f){var y=f.type;if(y in l.g){var E=l.g[y],O=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(E,O,1),U&&(mt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Cr(l,f,y,E){for(var O=0;O<l.length;++O){var U=l[O];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return O}return-1}var di="closure_lm_"+(1e6*Math.random()|0),es={};function po(l,f,y,E,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)po(l,f[U],y,E,O);return null}return y=yo(y),l&&l[be]?l.K(f,y,v(E)?!!E.capture:!1,O):mo(l,f,y,!1,E,O)}function mo(l,f,y,E,O,U){if(!f)throw Error("Invalid event type");var X=v(O)?!!O.capture:!!O,Ue=ns(l);if(Ue||(l[di]=Ue=new er(l)),y=Ue.add(f,y,E,X,U),y.proxy)return y;if(E=Ua(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ie||(O=X),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(nr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ua(){function l(y){return f.call(l.src,l.listener,y)}const f=go;return l}function ts(l,f,y,E,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)ts(l,f[U],y,E,O);else E=v(E)?!!E.capture:!!E,y=yo(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Cr(U,y,E,O),-1<y&&(mt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ns(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Cr(f,y,E,O)),(y=-1<l?f[l]:null)&&tr(y))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])Zi(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(nr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ns(f))?(Zi(y,l),y.h==0&&(y.src=null,f[di]=null)):mt(l)}}}function nr(l){return l in es?es[l]:es[l]="on"+l}function go(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&tr(l),l=y.call(E,f)}return l}function ns(l){return l=l[di],l instanceof er?l:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(l){return typeof l=="function"?l:(l[rs]||(l[rs]=function(f){return l.handleEvent(f)}),l[rs])}function lt(){z.call(this),this.i=new er(this),this.M=this,this.F=null}Q(lt,z),lt.prototype[be]=!0,lt.prototype.removeEventListener=function(l,f,y,E){ts(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var O=f;f=new ce(E,l),C(f,O)}if(O=!0,y)for(var U=y.length-1;0<=U;U--){var X=f.g=y[U];O=rr(X,E,!0,f)&&O}if(X=f.g=l,O=rr(X,E,!0,f)&&O,O=rr(X,E,!1,f)&&O,y)for(U=0;U<y.length;U++)X=f.g=y[U],O=rr(X,E,!1,f)&&O}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)mt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function rr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==y){var Ue=X.listener,ct=X.ha||X.src;X.fa&&Zi(l.i,X),O=Ue.call(ct,E)!==!1&&O}}return O&&!E.defaultPrevented}function _o(l,f,y){if(typeof l=="function")y&&(l=M(l,y));else if(l&&typeof l.handleEvent=="function")l=M(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function kr(l){l.g=_o(()=>{l.g=null,l.i&&(l.i=!1,kr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class fi extends z{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(l){z.call(this),this.h=l,this.g={}}Q(pi,z);var vo=[];function Eo(l){Re(l.g,function(f,y){this.g.hasOwnProperty(y)&&tr(f)},l),l.g={}}pi.prototype.N=function(){pi.aa.N.call(this),Eo(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=m.JSON.stringify,To=m.JSON.parse,Io=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function mi(){}mi.prototype.h=null;function is(l){return l.h||(l.h=l.i())}function ss(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){ce.call(this,"d")}Q(Ln,ce);function os(){ce.call(this,"c")}Q(os,ce);var Mn={},So=null;function gi(){return So=So||new lt}Mn.La="serverreachability";function Ao(l){ce.call(this,Mn.La,l)}Q(Ao,ce);function ir(l){const f=gi();ut(f,new Ao(f))}Mn.STAT_EVENT="statevent";function Ro(l,f){ce.call(this,Mn.STAT_EVENT,l),this.stat=f}Q(Ro,ce);function nt(l){const f=gi();ut(f,new Ro(f,l))}Mn.Ma="timingevent";function as(l,f){ce.call(this,Mn.Ma,l),this.size=f}Q(as,ce);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function _i(l,f,y,E,O,U){l.info(function(){if(l.g)if(U)for(var X="",Ue=U.split("&"),ct=0;ct<Ue.length;ct++){var De=Ue[ct].split("=");if(1<De.length){var gt=De[0];De=De[1];var st=gt.split("_");X=2<=st.length&&st[1]=="type"?X+(gt+"="+De+"&"):X+(gt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+y+`
`+X})}function ls(l,f,y,E,O,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+y+`
`+U+" "+X})}function _n(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ju(l,y)+(E?" "+E:"")})}function Po(l,f){l.info(function(){return"TIMEOUT: "+f})}yi.prototype.info=function(){};function Ju(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return wo(y)}catch{return f}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function vi(){}Q(vi,mi),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},vn=new vi;function En(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var Co={},cs={};function hs(l,f,y){l.L=1,l.v=Or(Jt(f)),l.m=y,l.P=!0,ko(l,null)}function ko(l,f){l.F=Date.now(),We(l),l.A=Jt(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Ba,l.g=sl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new fi(M(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(vo[0]=O.toString()),O=vo);for(var U=0;U<O.length;U++){var X=po(y,O[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),_i(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const st=Wt(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||st!=4||f==7||(f==8||0>=un?ir(3):ir(2)),Ei(this);var y=this.g.Z();this.X=y;t:if(za(this)){var E=Lo(this.g);l="";var O=E.length,U=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Nr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,ls(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ct=this.g;if((Ue=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Ue)){var De=Ue;break t}}De=null}if(y=De)_n(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,y);else{this.o=!1,this.s=3,nt(12),an(this),Nr(this);break e}}if(this.P){y=!0;let en;for(;!this.J&&this.C<X.length;)if(en=Zu(this,X),en==cs){st==4&&(this.s=4,nt(14),y=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Co){this.s=4,nt(15),_n(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else _n(this.i,this.l,en,null),No(this,en);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||X.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)_n(this.i,this.l,X,"[Invalid Chunked Response]"),an(this),Nr(this);else if(0<X.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),bo(gt),gt.M=!0,nt(11))}}else _n(this.i,this.l,X,null),No(this,X);st==4&&an(this),this.o&&!this.J&&(st==4?Ts(this.j,this):(this.o=!1,We(this)))}else ys(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),an(this),Nr(this)}}}catch{}finally{}};function za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Zu(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?cs:(y=Number(f.substring(y,E)),isNaN(y)?Co:(E+=1,E+y>f.length?cs:(f=f.slice(E,E+y),l.C=E+y,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function We(l){l.S=Date.now()+l.I,$a(l,l.I)}function $a(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(M(l.ba,l),f)}function Ei(l){l.B&&(m.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Po(this.i,this.A),this.L!=2&&(ir(),nt(17)),an(this),this.s=2,Nr(this)):$a(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Ts(l.j,l)}function an(l){Ei(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Eo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function No(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)ws(y),An(y);else break e;Es(y),nt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=yn(M(y.Za,y),6e3));if(1>=Ha(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ur(y,11)}else if((l.K||y.g==l)&&ws(y),!he(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let De=O[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const gt=De[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const st=De[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const un=De[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const en=l.g;if(en){const Pi=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var U=E.h;U.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Do(U,U.h),U.h=null))}if(E.D){const Ss=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(E.ya=Ss,ze(E.I,E.D,Ss))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=il(E,E.J?E.ia:null,E.W),X.K){qa(E.h,X);var Ue=X,ct=E.L;ct&&(Ue.I=ct),Ue.B&&(Ei(Ue),We(Ue)),E.g=X}else Ri(E);0<y.i.length&&jn(y)}else De[0]!="stop"&&De[0]!="close"||ur(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?ur(y,7):Tt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}ir(4)}catch{}}var Wa=class{constructor(l,f){this.g=l,this.map=f}};function wi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ha(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Do(l,f){l.g?l.g.add(f):l.h=f}function qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}wi.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ka(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return G(l.i)}function ds(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function fs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=fs(l),E=ds(l),O=E.length,U=0;U<O;U++)f.call(void 0,E[U],y&&y[U],l)}var Ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ec(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),O=null;if(0<=E){var U=l[y].substring(0,E);O=l[y].substring(E+1)}else U=l[y];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Ii(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,y=new bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),xr(this,y),this.m=l.m}else l&&(f=String(l).match(Ti))?(this.h=!1,Ii(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Vr(this,f[4]),this.l=Ce(f[5]||"",!0),xr(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,ps,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,ps,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Lr(y,y.charAt(0)=="/"?Ya:Qa,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Lr(y,Vo)),l.join("")};function Jt(l){return new sr(l)}function Ii(l,f,y){l.j=y?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function xr(l,f,y){f instanceof bn?(l.i=f,Fn(l.i,l.h)):(y||(f=Lr(f,Xa)),l.i=new bn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Or(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Ga),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ga(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ps=/[#\/\?@]/g,Qa=/[#\?:]/g,Ya=/[#\?]/g,Xa=/[#\?@]/g,Vo=/#/g;function bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&ec(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=bn.prototype,i.add=function(l,f){wt(this),this.i=null,l=ln(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function wn(l,f){wt(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return wt(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(y,E){y.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const O=l[E];for(let U=0;U<O.length;U++)y.push(f[E])}return y},i.V=function(l){wt(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return wt(this),this.i=null,l=ln(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,y){wn(l,f),0<y.length&&(l.i=null,l.g.set(ln(l,f),G(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var O=U;X[E]!==""&&(O+="="+encodeURIComponent(String(X[E]))),l.push(O)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Fn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,E){var O=E.toLowerCase();E!=O&&(wn(this,E),Mr(this,O,y))},l)),l.j=f}function tc(l,f){const y=new yi;if(m.Image){const E=new Image;E.onload=B($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B($t,y,"TestLoadImage: error",!1,f,E),E.onabort=B($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Ja(l,f){const y=new yi,E=new AbortController,O=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(O),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(y)}catch{}}function nc(){this.g=new Io}function Za(l,f,y){const E=y||"";try{Dr(l,function(O,U){let X=O;v(O)&&(X=wo(O)),f.push(E+U+"="+encodeURIComponent(X))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(or,mi),or.prototype.g=function(){return new Si(this.l,this.j)},or.prototype.i=function(l){return function(){return l}}({});function Si(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Si,lt),i=Si.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;el(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function el(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&el(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return Re(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function br(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=ar(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Ge,lt);var rc=/^https?$/i,xo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?is(this.o):is(vn),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ai(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)y.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(xo,f,void 0))||E||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ai(this,U)}};function Ai(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ms(l),Zt(l)}function ms(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Oo(this):this.bb())},i.bb=function(){Oo(this)};function Oo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)_o(l.Ea,0,l);else if(ut(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var O=String(l.D).match(Ti)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!rc.test(O?O.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<Wt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ms(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){gs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function gs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),To(f)}};function Lo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ys(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(he(l[E]))continue;var y=D(l[E]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[O]||[];f[O]=U,U.push(y)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Mo(l){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(l&&l.concurrentRequestLimit),this.Da=new nc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Mo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){nt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=il(this,null,this.W),jn(this)};function Tt(l){if(_s(l),l.G==3){var f=l.U++,y=Jt(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),lr(l,y),f=new En(l,l.j,f),f.L=2,f.v=Or(Jt(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=sl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),We(f)}rl(l)}function An(l){l.g&&(bo(l),l.g.cancel(),l.g=null)}function _s(l){An(l),l.u&&(m.clearTimeout(l.u),l.u=null),ws(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function jn(l){if(!Xt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Be||ee(),J||(Be(),J=!0),fe.add(f,l),l.B=0}}function ic(l,f){return Ha(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(M(l.Ga,l,f),nl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new En(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Fr(this,O,f),y=Jt(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),lr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(ar(U)))+"&"+f:this.m&&br(y,this.m,U)),Do(this.h,O),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),O.T=!0,hs(O,y,null)):hs(O,y,f),this.G=2}}else this.G==3&&(l?vs(this,l):this.i.length==0||Xt(this.h)||vs(this))};function vs(l,f){var y;f?y=f.l:y=l.U++;const E=Jt(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),lr(l,E),l.m&&l.o&&br(E,l.m,l.o),y=new En(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Do(l.h,y),hs(y,E,f)}function lr(l,f){l.H&&Re(l.H,function(y,E){ze(f,E,y)}),l.l&&Dr({},function(y,E){ze(f,E,y)})}function Fr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?M(l.l.Na,l.l,l):null;e:{var O=l.i;let U=-1;for(;;){const X=["count="+y];U==-1?0<y?(U=O[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Ue=!0;for(let ct=0;ct<y;ct++){let De=O[ct].g;const gt=O[ct].map;if(De-=U,0>De)U=Math.max(0,O[ct].g-100),Ue=!1;else try{Za(gt,X,"req"+De+"_")}catch{E&&E(gt)}}if(Ue){E=X.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ri(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Be||ee(),J||(Be(),J=!0),fe.add(f,l),l.v=0}}function Es(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(M(l.Fa,l),nl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,tl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(M(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),An(this),tl(this))};function bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function tl(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Jt(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Or(Jt(f)),y.m=null,y.P=!0,ko(y,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),Es(this),nt(19))};function ws(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ts(l,f){var y=null;if(l.g==f){ws(l),bo(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=gi(),ut(E,new as(E,y)),jn(l)}else Ri(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&ic(l,f)||E==2&&Es(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),O){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function nl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var y=M(l.fb,l),E=l.Xa;const O=!E;E=new sr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ii(E,"https"),Or(E),O?tc(E.toString(),y):Ja(E.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),rl(l),_s(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function rl(l){if(l.G=0,l.ka=[],l.l){const f=Ka(l.h);(f.length!=0||l.i.length!=0)&&(j(l.ka,f),j(l.ka,l.i),l.h.i.length=0,G(l.i),l.i.length=0),l.l.ra()}}function il(l,f,y){var E=y instanceof sr?Jt(y):new sr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Vr(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new sr(null);E&&Ii(U,E),f&&(U.g=f),O&&Vr(U,O),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),lr(l,E),E}function sl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new or({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}i=Fo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Is(){}Is.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){lt.call(this),this.g=new Mo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!he(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!he(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}Q(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Tt(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=wo(l),l=y);f.i.push(new Wa(f.Ya++,l)),f.G==3&&jn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,jt.aa.N.call(this)};function ol(l){Ln.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(ol,Ln);function al(){os.call(this),this.status=1}Q(al,os);function Bn(l){this.g=l}Q(Bn,Fo),Bn.prototype.ua=function(){ut(this.g,"a")},Bn.prototype.ta=function(l){ut(this.g,new ol(l))},Bn.prototype.sa=function(l){ut(this.g,new al)},Bn.prototype.ra=function(){ut(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,jy=function(){return new Is},Uy=function(){return gi()},Fy=Mn,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,hu=us,ja.COMPLETE="complete",by=ja,ss.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ca=ss,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,My=Ge}).apply(typeof nu<"u"?nu:typeof self<"u"?self:typeof window<"u"?window:{});const tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new gd("@firebase/firestore");function ua(){return Gi.logLevel}function se(i,...e){if(Gi.logLevel<=ke.DEBUG){const t=e.map(Nd);Gi.debug(`Firestore (${uo}): ${i}`,...t)}}function Ar(i,...e){if(Gi.logLevel<=ke.ERROR){const t=e.map(Nd);Gi.error(`Firestore (${uo}): ${i}`,...t)}}function eo(i,...e){if(Gi.logLevel<=ke.WARN){const t=e.map(Nd);Gi.warn(`Firestore (${uo}): ${i}`,...t)}}function Nd(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i="Unexpected state"){const e=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: `+i;throw Ar(e),new Error(e)}function je(i,e){i||ve()}function Te(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class II{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class SI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class AI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ai,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ai)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string"),new By(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Mt(e)}}class RI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new RI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new CI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=NI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Le(i,e){return i<e?-1:i>e?1:0}function to(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new de(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new pt(0,0))}static max(){return new we(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(),s===void 0?s=e.length-t:s>e.length-t&&ve(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return wa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends wa{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const DI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends wa{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return DI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new de(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function VI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new ui(o,ge.empty(),e)}function xI(i){return new ui(i.readTime,i.key,-1)}class ui{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ui(we.min(),ge.empty(),-1)}static max(){return new ui(we.max(),ge.empty(),-1)}}function OI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:Le(i.largestBatchId,e.largestBatchId))}/**
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
 */const LI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==LI)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,s)=>{t(e)})}static reject(e){return new H((t,s)=>{s(e)})}static waitFor(e){return new H((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next(o=>o?H.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new H((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new H((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function bI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oa(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dd.oe=-1;function Uu(i){return i==null}function Au(i){return i===0&&1/i==-1/0}function FI(i){return typeof i=="number"&&Number.isInteger(i)&&!Au(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function co(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function $y(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ru(this.root,e,this.comparator,!0)}}class ru{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rg(this.data.getIterator())}getIteratorFrom(e){return new rg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class rg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Wy("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const UI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(je(!!i),typeof i=="string"){let e=0;const t=UI.exec(i);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Qi(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
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
 */function Vd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xd(i){const e=i.mapValue.fields.__previous_value__;return Vd(e)?xd(e):e}function Ta(i){const e=ci(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Ia{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const iu={mapValue:{}};function Yi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Vd(i)?4:zI(i)?9007199254740991:BI(i)?10:11:ve()}function Jn(i,e){if(i===e)return!0;const t=Yi(i);if(t!==Yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ta(i).isEqual(Ta(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ci(o.timestampValue),m=ci(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Qi(o.bytesValue).isEqual(Qi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?Au(h)===Au(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return to(i.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(ng(h)!==ng(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Jn(h[g],m[g])))return!1;return!0}(i,e);default:return ve()}}function Sa(i,e){return(i.values||[]).find(t=>Jn(t,e))!==void 0}function no(i,e){if(i===e)return 0;const t=Yi(i),s=Yi(e);if(t!==s)return Le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return ig(i.timestampValue,e.timestampValue);case 4:return ig(Ta(i),Ta(e));case 5:return Le(i.stringValue,e.stringValue);case 6:return function(u,h){const m=Qi(u),g=Qi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Le(m[v],g[v]);if(w!==0)return w}return Le(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Le(it(u.latitude),it(h.latitude));return m!==0?m:Le(it(u.longitude),it(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return sg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const P=u.fields||{},M=h.fields||{},B=(m=P.value)===null||m===void 0?void 0:m.arrayValue,Q=(g=M.value)===null||g===void 0?void 0:g.arrayValue,G=Le(((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0,((w=Q==null?void 0:Q.values)===null||w===void 0?void 0:w.length)||0);return G!==0?G:sg(B,Q)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===iu.mapValue&&h===iu.mapValue)return 0;if(u===iu.mapValue)return 1;if(h===iu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let P=0;P<g.length&&P<w.length;++P){const M=Le(g[P],w[P]);if(M!==0)return M;const B=no(m[g[P]],v[w[P]]);if(B!==0)return B}return Le(g.length,w.length)}(i.mapValue,e.mapValue);default:throw ve()}}function ig(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Le(i,e);const t=ci(i),s=ci(e),o=Le(t.seconds,s.seconds);return o!==0?o:Le(t.nanos,s.nanos)}function sg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=no(t[o],s[o]);if(u)return u}return Le(t.length,s.length)}function ro(i){return Jh(i)}function Jh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ci(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Qi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ge.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Jh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Jh(t.fields[h])}`;return o+"}"}(i.mapValue):ve()}function Zh(i){return!!i&&"integerValue"in i}function Od(i){return!!i&&"arrayValue"in i}function og(i){return!!i&&"nullValue"in i}function ag(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function du(i){return!!i&&"mapValue"in i}function BI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return co(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=pa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function zI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=pa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){co(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new gn(pa(this.value))}}function Hy(i){const e=[];return co(i.fields,(t,s)=>{const o=new Rt([t]);if(du(s)){const u=Hy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,we.min(),we.min(),we.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,we.min(),we.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,we.min(),we.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,t){this.position=e,this.inclusive=t}}function lg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=no(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ug(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Jn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pu{constructor(e,t="asc"){this.field=e,this.dir=t}}function $I(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class qy{}class ft extends qy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new HI(e,t,s):t==="array-contains"?new GI(e,s):t==="in"?new QI(e,s):t==="not-in"?new YI(e,s):t==="array-contains-any"?new XI(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qI(e,s):new KI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(no(t,this.value)):t!==null&&Yi(this.value)===Yi(t)&&this.matchesComparison(no(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends qy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Zn(e,t)}matches(e){return Ky(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ky(i){return i.op==="and"}function Gy(i){return WI(i)&&Ky(i)}function WI(i){for(const e of i.filters)if(e instanceof Zn)return!1;return!0}function ed(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+ro(i.value);if(Gy(i))return i.filters.map(e=>ed(e)).join(",");{const e=i.filters.map(t=>ed(t)).join(",");return`${i.op}(${e})`}}function Qy(i,e){return i instanceof ft?function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&Jn(s.value,o.value)}(i,e):i instanceof Zn?function(s,o){return o instanceof Zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Qy(h,o.filters[m]),!0):!1}(i,e):void ve()}function Yy(i){return i instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${ro(t.value)}`}(i):i instanceof Zn?function(t){return t.op.toString()+" {"+t.getFilters().map(Yy).join(" ,")+"}"}(i):"Filter"}class HI extends ft{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class qI extends ft{constructor(e,t){super(e,"in",t),this.keys=Xy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KI extends ft{constructor(e,t){super(e,"not-in",t),this.keys=Xy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class GI extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Od(t)&&Sa(t.arrayValue,this.value)}}class QI extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sa(this.value.arrayValue,t)}}class YI extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sa(this.value.arrayValue,t)}}class XI extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Od(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Sa(this.value.arrayValue,s))}}/**
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
 */class JI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function cg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new JI(i,e,t,s,o,u,h)}function Ld(i){const e=Te(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ed(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Uu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ro(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ro(s)).join(",")),e.ue=t}return e.ue}function Md(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!$I(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Qy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ug(i.startAt,e.startAt)&&ug(i.endAt,e.endAt)}function td(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZI(i,e,t,s,o,u,h,m){return new ju(i,e,t,s,o,u,h,m)}function Jy(i){return new ju(i)}function hg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function eS(i){return i.collectionGroup!==null}function ma(i){const e=Te(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Pt(Rt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Pu(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Pu(Rt.keyField(),s))}return e.ce}function Gn(i){const e=Te(i);return e.le||(e.le=tS(e,ma(i))),e.le}function tS(i,e){if(i.limitType==="F")return cg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Pu(o.field,u)});const t=i.endAt?new Ru(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ru(i.startAt.position,i.startAt.inclusive):null;return cg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function nd(i,e,t){return new ju(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Bu(i,e){return Md(Gn(i),Gn(e))&&i.limitType===e.limitType}function Zy(i){return`${Ld(Gn(i))}|lt:${i.limitType}`}function Hs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Yy(o)).join(", ")}]`),Uu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>ro(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>ro(o)).join(",")),`Target(${s})`}(Gn(i))}; limitType=${i.limitType})`}function zu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=lg(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,ma(s),o)||s.endAt&&!function(h,m,g){const v=lg(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,ma(s),o))}(i,e)}function nS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function e_(i){return(e,t)=>{let s=!1;for(const o of ma(i)){const u=rS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function rS(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?no(g,v):ve()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){co(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return $y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new Ze(ge.comparator);function Rr(){return iS}const t_=new Ze(ge.comparator);function ha(...i){let e=t_;for(const t of i)e=e.insert(t.key,t);return e}function n_(i){let e=t_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function $i(){return ga()}function r_(){return ga()}function ga(){return new ho(i=>i.toString(),(i,e)=>i.isEqual(e))}const sS=new Ze(ge.comparator),oS=new Pt(ge.comparator);function Pe(...i){let e=oS;for(const t of i)e=e.add(t);return e}const aS=new Pt(Le);function lS(){return aS}/**
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
 */function bd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function i_(i){return{integerValue:""+i}}function uS(i,e){return FI(e)?i_(e):bd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this._=void 0}}function cS(i,e,t){return i instanceof Cu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Vd(u)&&(u=xd(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Aa?o_(i,e):i instanceof Ra?a_(i,e):function(o,u){const h=s_(o,u),m=dg(h)+dg(o.Pe);return Zh(h)&&Zh(o.Pe)?i_(m):bd(o.serializer,m)}(i,e)}function hS(i,e,t){return i instanceof Aa?o_(i,e):i instanceof Ra?a_(i,e):t}function s_(i,e){return i instanceof ku?function(s){return Zh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Cu extends $u{}class Aa extends $u{constructor(e){super(),this.elements=e}}function o_(i,e){const t=l_(e);for(const s of i.elements)t.some(o=>Jn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ra extends $u{constructor(e){super(),this.elements=e}}function a_(i,e){let t=l_(e);for(const s of i.elements)t=t.filter(o=>!Jn(o,s));return{arrayValue:{values:t}}}class ku extends $u{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dg(i){return it(i.integerValue||i.doubleValue)}function l_(i){return Od(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dS(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Aa&&o instanceof Aa||s instanceof Ra&&o instanceof Ra?to(s.elements,o.elements,Jn):s instanceof ku&&o instanceof ku?Jn(s.Pe,o.Pe):s instanceof Cu&&o instanceof Cu}(i.transform,e.transform)}class fS{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Wu{}function u_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Fd(i.key,Qn.none()):new La(i.key,i.data,Qn.none());{const t=i.data,s=gn.empty();let o=new Pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Xi(i.key,s,new Vn(o.toArray()),Qn.none())}}function pS(i,e,t){i instanceof La?function(o,u,h){const m=o.value.clone(),g=pg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Xi?function(o,u,h){if(!fu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=pg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(c_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ya(i,e,t,s){return i instanceof La?function(u,h,m,g){if(!fu(u.precondition,h))return m;const v=u.value.clone(),w=mg(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Xi?function(u,h,m,g){if(!fu(u.precondition,h))return m;const v=mg(u.fieldTransforms,g,h),w=h.data;return w.setAll(c_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(P=>P.field))}(i,e,t,s):function(u,h,m){return fu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function mS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=s_(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function fg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&to(s,o,(u,h)=>dS(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class La extends Wu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xi extends Wu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function c_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function pg(i,e,t){const s=new Map;je(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,hS(h,m,t[o]))}return s}function mg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,cS(u,h,e))}return s}class Fd extends Wu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gS extends Wu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&pS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=r_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=u_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(t,s)=>fg(t,s))&&to(this.baseMutations,e.baseMutations,(t,s)=>fg(t,s))}}class Ud{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length);let o=function(){return sS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ud(e,t,s,o)}}/**
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
 */class _S{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ve;function ES(i){switch(i){default:return ve();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function h_(i){if(i===void 0)return Ar("GRPC error has no .code"),q.UNKNOWN;switch(i){case at.OK:return q.OK;case at.CANCELLED:return q.CANCELLED;case at.UNKNOWN:return q.UNKNOWN;case at.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case at.INTERNAL:return q.INTERNAL;case at.UNAVAILABLE:return q.UNAVAILABLE;case at.UNAUTHENTICATED:return q.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case at.NOT_FOUND:return q.NOT_FOUND;case at.ALREADY_EXISTS:return q.ALREADY_EXISTS;case at.PERMISSION_DENIED:return q.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case at.ABORTED:return q.ABORTED;case at.OUT_OF_RANGE:return q.OUT_OF_RANGE;case at.UNIMPLEMENTED:return q.UNIMPLEMENTED;case at.DATA_LOSS:return q.DATA_LOSS;default:return ve()}}(Ve=at||(at={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wS(){return new TextEncoder}/**
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
 */const TS=new Hi([4294967295,4294967295],0);function gg(i){const e=wS().encode(i),t=new Ly;return t.update(e),new Uint8Array(t.digest())}function yg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Hi([t,s],0),new Hi([o,u],0)]}class jd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new da(`Invalid padding: ${t}`);if(s<0)throw new da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new da(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Hi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(Hi.fromNumber(s)));return o.compare(TS)===1&&(o=new Hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gg(e),[s,o]=yg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new jd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ie===0)return;const t=gg(e),[s,o]=yg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Hu(we.min(),o,new Ze(Le),Rr(),Pe())}}class Ma{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ma(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class d_{constructor(e,t){this.targetId=e,this.me=t}}class f_{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class _g{constructor(){this.fe=0,this.ge=Eg(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),s=Pe();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new Ma(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Eg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class IS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=vg(),this.Qe=new Ze(Le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(td(u))if(s===0){const h=new ge(u.path);this.Ue(t,h,bt.newNoDocument(h,we.min()))}else je(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),g=m?this.Xe(m,e,h):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Qi(s).toUint8Array()}catch(g){if(g instanceof Wy)return eo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new jd(h,o,u)}catch(g){return eo(g instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Je(h);if(m){if(u.current&&td(m.target)){const g=new ge(m.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Pe();this.qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Hu(e,t,this.Qe,this.ke,s);return this.ke=Rr(),this.qe=vg(),this.Qe=new Ze(Le),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new _g,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pt(Le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _g),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vg(){return new Ze(ge.comparator)}function Eg(){return new Ze(ge.comparator)}const SS={asc:"ASCENDING",desc:"DESCENDING"},AS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RS={and:"AND",or:"OR"};class PS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rd(i,e){return i.useProto3Json||Uu(e)?e:{value:e}}function Nu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CS(i,e){return Nu(i,e.toTimestamp())}function Yn(i){return je(!!i),we.fromTimestamp(function(t){const s=ci(t);return new pt(s.seconds,s.nanos)}(i))}function Bd(i,e){return id(i,e).canonicalString()}function id(i,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function m_(i){const e=Ye.fromString(i);return je(E_(e)),e}function sd(i,e){return Bd(i.databaseId,e.path)}function bh(i,e){const t=m_(e);if(t.get(1)!==i.databaseId.projectId)throw new de(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new de(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(y_(t))}function g_(i,e){return Bd(i.databaseId,e)}function kS(i){const e=m_(i);return e.length===4?Ye.emptyPath():y_(e)}function od(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function y_(i){return je(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function wg(i,e,t){return{name:sd(i,e),fields:t.value.mapValue.fields}}function NS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(je(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?q.UNKNOWN:h_(v.code);return new de(w,v.message||"")}(h);t=new f_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=bh(i,s.document.name),u=Yn(s.document.updateTime),h=s.document.createTime?Yn(s.document.createTime):we.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new pu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=bh(i,s.document),u=s.readTime?Yn(s.readTime):we.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new pu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=bh(i,s.document),u=s.removedTargetIds||[];t=new pu([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new vS(o,u),m=s.targetId;t=new d_(m,h)}}return t}function DS(i,e){let t;if(e instanceof La)t={update:wg(i,e.key,e.value)};else if(e instanceof Fd)t={delete:sd(i,e.key)};else if(e instanceof Xi)t={update:wg(i,e.key,e.data),updateMask:jS(e.fieldMask)};else{if(!(e instanceof gS))return ve();t={verify:sd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Cu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Aa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ra)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ku)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ve()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:CS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(i,e.precondition)),t}function VS(i,e){return i&&i.length>0?(je(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Yn(o.updateTime):Yn(u);return h.isEqual(we.min())&&(h=Yn(u)),new fS(h,o.transformResults||[])}(t,e))):[]}function xS(i,e){return{documents:[g_(i,e.path)]}}function OS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=g_(i,o);const u=function(v){if(v.length!==0)return v_(Zn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(M){return{field:qs(M.field),direction:bS(M.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=rd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{_t:t,parent:o}}function LS(i){let e=kS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(P){const M=__(P);return M instanceof Zn&&Gy(M)?M.getFilters():[M]}(t.where));let h=[];t.orderBy&&(h=function(P){return P.map(M=>function(Q){return new Pu(Ks(Q.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(M))}(t.orderBy));let m=null;t.limit&&(m=function(P){let M;return M=typeof P=="object"?P.value:P,Uu(M)?null:M}(t.limit));let g=null;t.startAt&&(g=function(P){const M=!!P.before,B=P.values||[];return new Ru(B,M)}(t.startAt));let v=null;return t.endAt&&(v=function(P){const M=!P.before,B=P.values||[];return new Ru(B,M)}(t.endAt)),ZI(e,o,h,u,m,"F",g,v)}function MS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function __(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ks(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ks(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ks(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ks(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(i):i.fieldFilter!==void 0?function(t){return ft.create(Ks(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Zn.create(t.compositeFilter.filters.map(s=>__(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(t.compositeFilter.op))}(i):ve()}function bS(i){return SS[i]}function FS(i){return AS[i]}function US(i){return RS[i]}function qs(i){return{fieldPath:i.canonicalString()}}function Ks(i){return Rt.fromServerFormat(i.fieldPath)}function v_(i){return i instanceof ft?function(t){if(t.op==="=="){if(ag(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NAN"}};if(og(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ag(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NAN"}};if(og(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(t.field),op:FS(t.op),value:t.value}}}(i):i instanceof Zn?function(t){const s=t.getFilters().map(o=>v_(o));return s.length===1?s[0]:{compositeFilter:{op:US(t.op),filters:s}}}(i):ve()}function jS(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function E_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,s,o,u=we.min(),h=we.min(),m=Ct.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.ct=e}}function zS(i){const e=LS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?nd(e,e.limit,"L"):e}/**
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
 */class $S{constructor(){this.un=new WS}addToCollectionParentIndex(e,t){return this.un.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(ui.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class WS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Pt(Ye.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Pt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new io(0)}static kn(){return new io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.changes=new ho(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class qS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ya(s.mutation,o,Vn.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=$i();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ha();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=$i();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=ga(),m=function(){return ga()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Xi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ya(w.mutation,v,w.mutation.getFieldMask(),pt.now())):h.set(v.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var P;return m.set(v,new qS(w,(P=h.get(v))!==null&&P!==void 0?P:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ga();let o=new Ze((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||Vn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const P=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,P)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,P=r_();w.forEach(M=>{if(!u.has(M)){const B=u_(t.get(M),s.get(M));B!==null&&P.set(M,B),u=u.add(M)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,P))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve($i());let m=-1,g=u;return h.next(v=>H.forEach(v,(w,P)=>(m<P.largestBatchId&&(m=P.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(M=>{g=g.insert(w,M)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Pe())).next(w=>({batchId:m,changes:n_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let o=ha();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ha();return this.indexManager.getCollectionParents(e,u).next(m=>H.forEach(m,g=>{const v=function(P,M){return new ju(M,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((P,M)=>{h=h.insert(P,M)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=ha();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&ya(w.mutation,v,Vn.empty(),pt.now()),zu(t,v)&&(m=m.insert(g,v))}),m})}}/**
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
 */class GS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return H.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Yn(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:zS(o.bundledQuery),readTime:Yn(o.readTime)}}(t)),H.resolve()}}/**
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
 */class QS{constructor(){this.overlays=new Ze(ge.comparator),this.Ir=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$i();return H.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.ht(e,t,u)}),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Ir.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=$i(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=$i(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=$i(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return H.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new _S(t,s));let u=this.Ir.get(t);u===void 0&&(u=Pe(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.Tr=new Pt(Et.Er),this.dr=new Pt(Et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new Et(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new ge(new Ye([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.dr.forEachInRange([s,o],h=>{this.Vr(h),u.push(h.key)}),u}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ge(new Ye([])),s=new Et(t,e),o=new Et(t,e+1);let u=Pe();return this.dr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ge.comparator(e.key,t.key)||Le(e.wr,t.wr)}static Ar(e,t){return Le(e.wr,t.wr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Pt(Et.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new yS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],h=>{const m=this.Dr(h.wr);u.push(m)}),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Pt(Le);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],m=>{s=s.add(m.wr)})}),H.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ge(u),0);let m=new Pt(Le);return this.br.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.wr)),!0)},h),H.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return H.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new Et(t,0),o=this.br.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.Mr=e,this.docs=function(){return new Ze(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new ge(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||OI(xI(w),s)<=0||(o.has(w.key)||zu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve()}Or(e,t){return H.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ZS(this)}getSize(e){return H.resolve(this.size)}}class ZS extends HS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),H.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.persistence=e,this.Nr=new ho(t=>Ld(t),Md),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zd,this.targetCount=0,this.kr=io.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),H.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new io(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Kn(t),H.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),H.waitFor(u).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Dd(0),this.Kr=!1,this.Kr=!0,this.$r=new YS,this.referenceDelegate=e(this),this.Ur=new eA(this),this.indexManager=new $S,this.remoteDocumentCache=function(o){return new JS(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new BS(t),this.Gr=new GS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new XS(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new nA(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(u=>this.referenceDelegate.jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Hr(e,t){return H.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class nA extends MI{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.Jr=new zd,this.Yr=null}static Zr(e){return new $d(e)}get Xr(){if(this.Yr)return this.Yr;throw ve()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),H.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.Xr.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,s=>{const o=ge.fromPath(s);return this.ei(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return H.or([()=>H.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Wd(e,t.fromCache,s,o)}}/**
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
 */class rA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ow()?8:bI(Ft())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Zi(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new rA;return this.Xi(e,t,h).next(m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)})}).next(()=>u.result)}es(e,t,s,o){return s.documentReadCount<this.ji?(ua()<=ke.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ua()<=ke.DEBUG&&se("QueryEngine","Query:",Hs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(ua()<=ke.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(t))):H.resolve())}Yi(e,t){if(hg(t))return H.resolve(null);let s=Gn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=nd(t,null,"F"),s=Gn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.Ji.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.ts(t,m);return this.ns(t,v,h,g.readTime)?this.Yi(e,nd(t,null,"F")):this.rs(e,v,t,g)}))})))}Zi(e,t,s,o){return hg(t)||o.isEqual(we.min())?H.resolve(null):this.Ji.getDocuments(e,s).next(u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?H.resolve(null):(ua()<=ke.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Hs(t)),this.rs(e,h,t,VI(o,-1)).next(m=>m))})}ts(e,t){let s=new Pt(e_(e));return t.forEach((o,u)=>{zu(e,u)&&(s=s.add(u))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return ua()<=ke.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Hs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ui.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class sA{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Ze(Le),this._s=new ho(u=>Ld(u),Md),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function oA(i,e,t,s){return new sA(i,e,t,s)}async function w_(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({hs:v,removedBatchIds:h,addedBatchIds:m}))})})}function aA(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const P=v.batch,M=P.keys();let B=H.resolve();return M.forEach(Q=>{B=B.next(()=>w.getEntry(g,Q)).next(G=>{const j=v.docVersions.get(Q);je(j!==null),G.version.compareTo(j)<0&&(P.applyToRemoteDocument(G,v),G.isValidDocument()&&(G.setReadTime(v.commitVersion),w.addEntry(G)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,P))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function T_(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function lA(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach((w,P)=>{const M=o.get(P);if(!M)return;m.push(t.Ur.removeMatchingKeys(u,w.removedDocuments,P).next(()=>t.Ur.addMatchingKeys(u,w.addedDocuments,P)));let B=M.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(P)!==null?B=B.withResumeToken(Ct.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(P,B),function(G,j,ue){return G.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=3e8?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0}(M,B,w)&&m.push(t.Ur.updateTargetData(u,B))});let g=Rr(),v=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(uA(u,h,e.documentUpdates).next(w=>{g=w.Ps,v=w.Is})),!s.isEqual(we.min())){const w=t.Ur.getLastRemoteSnapshotVersion(u).next(P=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return H.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.os=o,u))}function uA(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):se("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Ps:h,Is:o}})}function cA(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function hA(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ur.getTargetData(s,e).next(u=>u?(o=u,H.resolve(o)):t.Ur.allocateTargetId(s).next(h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function ad(i,e,t){const s=Te(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Oa(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function Tg(i,e,t){const s=Te(i);let o=we.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const P=Te(g),M=P._s.get(w);return M!==void 0?H.resolve(P.os.get(M)):P.Ur.getTargetData(v,w)}(s,h,Gn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Pe())).next(m=>(dA(s,nS(e),m),{documents:m,Ts:u})))}function dA(i,e,t){let s=i.us.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.us.set(e,s)}class Ig{constructor(){this.activeTargetIds=lS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fA{constructor(){this.so=new Ig,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ig,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pA{_o(e){}shutdown(){}}/**
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
 */class Sg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let su=null;function Fh(){return su===null?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)}/**
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
 */const mA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class yA extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=Fh(),g=this.xo(t,s.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,g,v,o).then(w=>(se("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw eo("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}xo(t,s){const o=mA[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=Fh();return new Promise((h,m)=>{const g=new My;g.setWithCredentials(!0),g.listenOnce(by.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case hu.NO_ERROR:const w=g.getResponseJson();se(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case hu.TIMEOUT:se(Lt,`RPC '${e}' ${u} timed out`),m(new de(q.DEADLINE_EXCEEDED,"Request time out"));break;case hu.HTTP_ERROR:const P=g.getStatus();if(se(Lt,`RPC '${e}' ${u} failed with status:`,P,"response text:",g.getResponseText()),P>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const B=M==null?void 0:M.error;if(B&&B.status&&B.message){const Q=function(j){const ue=j.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ue)>=0?ue:q.UNKNOWN}(B.status);m(new de(Q,B.message))}else m(new de(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new de(q.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{se(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);se(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}Bo(e,t,s){const o=Fh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=jy(),m=Uy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");se(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const P=h.createWebChannel(w,g);let M=!1,B=!1;const Q=new gA({Io:j=>{B?se(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(M||(se(Lt,`Opening RPC '${e}' stream ${o} transport.`),P.open(),M=!0),se(Lt,`RPC '${e}' stream ${o} sending:`,j),P.send(j))},To:()=>P.close()}),G=(j,ue,he)=>{j.listen(ue,te=>{try{he(te)}catch(le){setTimeout(()=>{throw le},0)}})};return G(P,ca.EventType.OPEN,()=>{B||(se(Lt,`RPC '${e}' stream ${o} transport opened.`),Q.yo())}),G(P,ca.EventType.CLOSE,()=>{B||(B=!0,se(Lt,`RPC '${e}' stream ${o} transport closed`),Q.So())}),G(P,ca.EventType.ERROR,j=>{B||(B=!0,eo(Lt,`RPC '${e}' stream ${o} transport errored:`,j),Q.So(new de(q.UNAVAILABLE,"The operation could not be completed")))}),G(P,ca.EventType.MESSAGE,j=>{var ue;if(!B){const he=j.data[0];je(!!he);const te=he,le=te.error||((ue=te[0])===null||ue===void 0?void 0:ue.error);if(le){se(Lt,`RPC '${e}' stream ${o} received error:`,le);const Me=le.status;let Re=function(A){const C=at[A];if(C!==void 0)return h_(C)}(Me),N=le.message;Re===void 0&&(Re=q.INTERNAL,N="Unknown error status: "+Me+" with message "+le.message),B=!0,Q.So(new de(Re,N)),P.close()}else se(Lt,`RPC '${e}' stream ${o} received:`,he),Q.bo(he)}}),G(m,Fy.STAT_EVENT,j=>{j.stat===Xh.PROXY?se(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Xh.NOPROXY&&se(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.wo()},0),Q}}function Uh(){return typeof document<"u"?document:null}/**
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
 */function qu(i){return new PS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t,s,o,u,h,m,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new I_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new de(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _A extends S_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=NS(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?Yn(h.readTime):we.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=od(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=td(g)?{documents:xS(u,g)}:{query:OS(u,g)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=p_(u,h.resumeToken);const v=rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Nu(u,h.snapshotVersion.toTimestamp());const v=rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=MS(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=od(this.serializer),t.removeTarget=e,this.a_(t)}}class vA extends S_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=VS(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=od(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>DS(this.serializer,s))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new de(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Mo(e,id(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(q.UNKNOWN,u.toString())})}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Lo(e,id(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(q.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ar(t),this.D_=!1):se("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o(h=>{s.enqueueAndForget(async()=>{Ji(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=Te(g);v.L_.add(4),await ba(v),v.q_.set("Unknown"),v.L_.delete(4),await Ku(v)}(this))})}),this.q_=new wA(s,o)}}async function Ku(i){if(Ji(i))for(const e of i.B_)await e(!0)}async function ba(i){for(const e of i.B_)await e(!1)}function A_(i,e){const t=Te(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Gd(t)?Kd(t):fo(t).r_()&&qd(t,e))}function Hd(i,e){const t=Te(i),s=fo(t);t.N_.delete(e),s.r_()&&R_(t,e),t.N_.size===0&&(s.r_()?s.o_():Ji(t)&&t.q_.set("Unknown"))}function qd(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fo(i).A_(e)}function R_(i,e){i.Q_.xe(e),fo(i).R_(e)}function Kd(i){i.Q_=new IS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),fo(i).start(),i.q_.v_()}function Gd(i){return Ji(i)&&!fo(i).n_()&&i.N_.size>0}function Ji(i){return Te(i).L_.size===0}function P_(i){i.Q_=void 0}async function IA(i){i.q_.set("Online")}async function SA(i){i.N_.forEach((e,t)=>{qd(i,e)})}async function AA(i,e){P_(i),Gd(i)?(i.q_.M_(e),Kd(i)):i.q_.set("Unknown")}async function RA(i,e,t){if(i.q_.set("Online"),e instanceof f_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))}(i,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Du(i,s)}else if(e instanceof pu?i.Q_.Ke(e):e instanceof d_?i.Q_.He(e):i.Q_.We(e),!t.isEqual(we.min()))try{const s=await T_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.N_.get(v);w&&u.N_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.N_.get(g);if(!w)return;u.N_.set(g,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),R_(u,g);const P=new ri(w.target,g,v,w.sequenceNumber);qd(u,P)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await Du(i,s)}}async function Du(i,e,t){if(!Oa(e))throw e;i.L_.add(1),await ba(i),i.q_.set("Offline"),t||(t=()=>T_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await Ku(i)})}function C_(i,e){return e().catch(t=>Du(i,t,e))}async function Gu(i){const e=Te(i),t=hi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PA(e);)try{const o=await cA(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,CA(e,o)}catch(o){await Du(e,o)}k_(e)&&N_(e)}function PA(i){return Ji(i)&&i.O_.length<10}function CA(i,e){i.O_.push(e);const t=hi(i);t.r_()&&t.V_&&t.m_(e.mutations)}function k_(i){return Ji(i)&&!hi(i).n_()&&i.O_.length>0}function N_(i){hi(i).start()}async function kA(i){hi(i).p_()}async function NA(i){const e=hi(i);for(const t of i.O_)e.m_(t.mutations)}async function DA(i,e,t){const s=i.O_.shift(),o=Ud.from(s,e,t);await C_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Gu(i)}async function VA(i,e){e&&hi(i).V_&&await async function(s,o){if(function(h){return ES(h)&&h!==q.ABORTED}(o.code)){const u=s.O_.shift();hi(s).s_(),await C_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Gu(s)}}(i,e),k_(i)&&N_(i)}async function Ag(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=Ji(t);t.L_.add(3),await ba(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ku(t)}async function xA(i,e){const t=Te(i);e?(t.L_.delete(2),await Ku(t)):e||(t.L_.add(2),await ba(t),t.q_.set("Unknown"))}function fo(i){return i.K_||(i.K_=function(t,s,o){const u=Te(t);return u.w_(),new _A(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:IA.bind(null,i),Ro:SA.bind(null,i),mo:AA.bind(null,i),d_:RA.bind(null,i)}),i.B_.push(async e=>{e?(i.K_.s_(),Gd(i)?Kd(i):i.q_.set("Unknown")):(await i.K_.stop(),P_(i))})),i.K_}function hi(i){return i.U_||(i.U_=function(t,s,o){const u=Te(t);return u.w_(),new vA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kA.bind(null,i),mo:VA.bind(null,i),f_:NA.bind(null,i),g_:DA.bind(null,i)}),i.B_.push(async e=>{e?(i.U_.s_(),await Gu(i)):(await i.U_.stop(),i.O_.length>0&&(se("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Qd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yd(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),Oa(i))return new de(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=ha(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.W_=new Ze(ge.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ve():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class so{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new so(e,t,Xs.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LA{constructor(){this.queries=Pg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=Pg(),u.forEach((h,m)=>{for(const g of m.j_)g.onError(s)})})(this,new de(q.ABORTED,"Firestore shutting down"))}}function Pg(){return new ho(i=>Zy(i),Bu)}async function MA(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new OA,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Yd(h,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&Xd(t)}async function bA(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function FA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&Xd(t)}function UA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function Xd(i){i.Y_.forEach(e=>{e.next()})}var ld,Cg;(Cg=ld||(ld={})).ea="default",Cg.Cache="cache";class jA{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new so(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ld.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.key=e}}class V_{constructor(e){this.key=e}}class BA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=e_(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new Rg,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,P)=>{const M=o.get(w),B=zu(this.query,P)?P:null,Q=!!M&&this.mutatedKeys.has(M.key),G=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let j=!1;M&&B?M.data.isEqual(B.data)?Q!==G&&(s.track({type:3,doc:B}),j=!0):this.ga(M,B)||(s.track({type:2,doc:B}),j=!0,(g&&this.Aa(B,g)>0||v&&this.Aa(B,v)<0)&&(m=!0)):!M&&B?(s.track({type:0,doc:B}),j=!0):M&&!B&&(s.track({type:1,doc:M}),j=!0,(g||v)&&(m=!0)),j&&(B?(h=h.add(B),u=G?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((w,P)=>function(B,Q){const G=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return G(B)-G(Q)}(w.type,P.type)||this.Aa(w.doc,P.doc)),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,h.length!==0||v?{snapshot:new so(this.query,e.Ra,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new V_(s))}),this.da.forEach(s=>{e.has(s)||t.push(new D_(s))}),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return so.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class $A{constructor(e){this.key=e,this.va=!1}}class WA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new ho(m=>Zy(m),Bu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(ge.comparator),this.Na=new Map,this.La=new zd,this.Ba={},this.ka=new Map,this.qa=io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HA(i,e,t=!0){const s=F_(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await x_(s,e,t,!0),o}async function qA(i,e){const t=F_(i);await x_(t,e,!0,!1)}async function x_(i,e,t,s){const o=await hA(i.localStore,Gn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await KA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&A_(i.remoteStore,o),m}async function KA(i,e,t,s,o){i.Ka=(P,M,B)=>async function(G,j,ue,he){let te=j.view.ma(ue);te.ns&&(te=await Tg(G.localStore,j.query,!1).then(({documents:N})=>j.view.ma(N,te)));const le=he&&he.targetChanges.get(j.targetId),Me=he&&he.targetMismatches.get(j.targetId)!=null,Re=j.view.applyChanges(te,G.isPrimaryClient,le,Me);return Ng(G,j.targetId,Re.wa),Re.snapshot}(i,P,M,B);const u=await Tg(i.localStore,e,!0),h=new BA(e,u.Ts),m=h.ma(u.documents),g=Ma.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);Ng(i,t,v.wa);const w=new zA(e,t,h);return i.Fa.set(e,w),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function GA(i,e,t){const s=Te(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter(h=>!Bu(h,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ad(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Hd(s.remoteStore,o.targetId),ud(s,o.targetId)}).catch(xa)):(ud(s,o.targetId),await ad(s.localStore,o.targetId,!0))}async function QA(i,e){const t=Te(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Hd(t.remoteStore,s.targetId))}async function YA(i,e,t){const s=rR(i);try{const o=await function(h,m){const g=Te(h),v=pt.now(),w=m.reduce((B,Q)=>B.add(Q.key),Pe());let P,M;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let Q=Rr(),G=Pe();return g.cs.getEntries(B,w).next(j=>{Q=j,Q.forEach((ue,he)=>{he.isValidDocument()||(G=G.add(ue))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,Q)).next(j=>{P=j;const ue=[];for(const he of m){const te=mS(he,P.get(he.key).overlayedDocument);te!=null&&ue.push(new Xi(he.key,te,Hy(te.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,v,ue,m)}).next(j=>{M=j;const ue=j.applyToLocalDocumentSet(P,G);return g.documentOverlayCache.saveOverlays(B,j.batchId,ue)})}).then(()=>({batchId:M.batchId,changes:n_(P)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new Ze(Le)),v=v.insert(m,g),h.Ba[h.currentUser.toKey()]=v}(s,o.batchId,t),await Fa(s,o.changes),await Gu(s.remoteStore)}catch(o){const u=Yd(o,"Failed to persist write");t.reject(u)}}async function O_(i,e){const t=Te(i);try{const s=await lA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Na.get(u);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?je(h.va):o.removedDocuments.size>0&&(je(h.va),h.va=!1))}),await Fa(t,s,e)}catch(s){await xa(s)}}function kg(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Te(h);g.onlineState=m;let v=!1;g.queries.forEach((w,P)=>{for(const M of P.j_)M.Z_(m)&&(v=!0)}),v&&Xd(g)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function XA(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new Ze(ge.comparator);h=h.insert(u,bt.newNoDocument(u,we.min()));const m=Pe().add(u),g=new Hu(we.min(),new Map,new Ze(Le),h,m);await O_(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),Jd(s)}else await ad(s.localStore,e,!1).then(()=>ud(s,e,t)).catch(xa)}async function JA(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await aA(t.localStore,e);M_(t,s,null),L_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fa(t,o)}catch(o){await xa(o)}}async function ZA(i,e,t){const s=Te(i);try{const o=await function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(P=>(je(P!==null),w=P.keys(),g.mutationQueue.removeMutationBatch(v,P))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);M_(s,e,t),L_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fa(s,o)}catch(o){await xa(o)}}function L_(i,e){(i.ka.get(e)||[]).forEach(t=>{t.resolve()}),i.ka.delete(e)}function M_(i,e,t){const s=Te(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function ud(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach(s=>{i.La.containsKey(s)||b_(i,s)})}function b_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Hd(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),Jd(i))}function Ng(i,e,t){for(const s of t)s instanceof D_?(i.La.addReference(s.key,e),eR(i,s)):s instanceof V_?(se("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||b_(i,s.key)):ve()}function eR(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(se("SyncEngine","New document in limbo: "+t),i.xa.add(s),Jd(i))}function Jd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new ge(Ye.fromString(e)),s=i.qa.next();i.Na.set(s,new $A(t)),i.Oa=i.Oa.insert(t,s),A_(i.remoteStore,new ri(Gn(Jy(t.path)),s,"TargetPurposeLimboResolution",Dd.oe))}}async function Fa(i,e,t){const s=Te(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((m,g)=>{h.push(s.Ka(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const P=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,P?"current":"not-current")}if(v){o.push(v);const P=Wd.Wi(g.targetId,v);u.push(P)}}))}),await Promise.all(h),s.Ca.d_(o),await async function(g,v){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>H.forEach(v,M=>H.forEach(M.$i,B=>w.persistence.referenceDelegate.addReference(P,M.targetId,B)).next(()=>H.forEach(M.Ui,B=>w.persistence.referenceDelegate.removeReference(P,M.targetId,B)))))}catch(P){if(!Oa(P))throw P;se("LocalStore","Failed to update sequence numbers: "+P)}for(const P of v){const M=P.targetId;if(!P.fromCache){const B=w.os.get(M),Q=B.snapshotVersion,G=B.withLastLimboFreeSnapshotVersion(Q);w.os=w.os.insert(M,G)}}}(s.localStore,u))}async function tR(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await w_(t.localStore,e);t.currentUser=e,function(u,h){u.ka.forEach(m=>{m.forEach(g=>{g.reject(new de(q.CANCELLED,h))})}),u.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fa(t,s.hs)}}function nR(i,e){const t=Te(i),s=t.Na.get(e);if(s&&s.va)return Pe().add(s.key);{let o=Pe();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function F_(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=O_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XA.bind(null,e),e.Ca.d_=FA.bind(null,e.eventManager),e.Ca.$a=UA.bind(null,e.eventManager),e}function rR(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZA.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return oA(this.persistence,new iA,e.initialUser,this.serializer)}Ga(e){return new tA($d.Zr,this.serializer)}Wa(e){return new fA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await xA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LA}()}createDatastore(e){const t=qu(e.databaseInfo.databaseId),s=function(u){return new yA(u)}(e.databaseInfo);return function(u,h,m,g){return new EA(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new TA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>kg(this.syncEngine,t,0),function(){return Sg.D()?new Sg:new pA}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const P=new WA(o,u,h,m,g,v);return w&&(P.Qa=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);se("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await ba(u),u.k_.shutdown(),u.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}cd.provider={build:()=>new cd};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=zy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Yd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function jh(i,e){i.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await w_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Dg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await oR(i);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Ag(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Ag(e.remoteStore,o)),i._onlineComponents=e}async function oR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;eo("Error using user provided cache. Falling back to memory cache: "+t),await jh(i,new Vu)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await jh(i,new Vu);return i._offlineComponents}async function U_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Dg(i,i._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Dg(i,new cd))),i._onlineComponents}function aR(i){return U_(i).then(e=>e.syncEngine)}async function lR(i){const e=await U_(i),t=e.eventManager;return t.onListen=HA.bind(null,e.syncEngine),t.onUnlisten=GA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QA.bind(null,e.syncEngine),t}function uR(i,e,t={}){const s=new ai;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new iR({next:M=>{w.Za(),h.enqueueAndForget(()=>bA(u,P)),M.fromCache&&g.source==="server"?v.reject(new de(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(M)},error:M=>v.reject(M)}),P=new jA(m,w,{includeMetadataChanges:!0,_a:!0});return MA(u,P)}(await lR(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function j_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Vg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(i,e,t){if(!t)throw new de(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function cR(i,e,t,s){if(e===!0&&s===!0)throw new de(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!ge.isDocumentKey(i))throw new de(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Og(i){if(ge.isDocumentKey(i))throw new de(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Zd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve()}function Pa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new de(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zd(i);throw new de(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class Lg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new II;switch(s.type){case"firstParty":return new PI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Vg.get(t);s&&(se("ComponentProvider","Removing Datastore"),Vg.delete(t),s.terminate())}(this),Promise.resolve()}}function hR(i,e,t,s={}){var o;const u=(i=Pa(i,Qu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Mt.MOCK_USER;else{m=ZE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new de(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}i._authCredentials=new SI(new By(m,g))}}/**
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
 */class Yu{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Yu(this.firestore,e,this._query)}}class On{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class li extends Yu{constructor(e,t,s){super(e,t,Jy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new ge(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function z_(i,e,...t){if(i=sn(i),B_("collection","path",e),i instanceof Qu){const s=Ye.fromString(e,...t);return Og(s),new li(i,null,s)}{if(!(i instanceof On||i instanceof li))throw new de(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return Og(s),new li(i.firestore,null,s)}}function $_(i,e,...t){if(i=sn(i),arguments.length===1&&(e=zy.newId()),B_("doc","path",e),i instanceof Qu){const s=Ye.fromString(e,...t);return xg(s),new On(i,null,new ge(s))}{if(!(i instanceof On||i instanceof li))throw new de(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return xg(s),new On(i.firestore,i instanceof li?i.converter:null,new ge(s))}}/**
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
 */class Mg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new I_(this,"async_queue_retry"),this.Vu=()=>{const s=Uh();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Uh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Uh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ai;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Oa(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Qd.createAndSchedule(this,e,t,s,u=>this.yu(u));return this.Tu.push(o),o}fu(){this.Eu&&ve()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Xu extends Qu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Mg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mg(e),this._firestoreClient=void 0,await e}}}function dR(i,e){const t=typeof i=="object"?i:ey(),s=typeof i=="string"?i:"(default)",o=_d(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=XE("firestore");u&&hR(o,...u)}return o}function W_(i){if(i._terminated)throw new de(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||fR(i),i._firestoreClient}function fR(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new jI(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,j_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new sR(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oo(Ct.fromBase64String(e))}catch(t){throw new de(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oo(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class H_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^__.*__$/;class mR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new La(e,this.data,t,this.fieldTransforms)}}function q_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class rf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(q_(this.Cu)&&pR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||qu(e)}Qu(e,t,s,o=!1){return new rf({Cu:e,methodName:t,qu:s,path:Rt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yR(i){const e=i._freezeSettings(),t=qu(i._databaseId);return new gR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function _R(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);Y_("Data must be an object, but it was:",h,s);const m=G_(s,h);let g,v;if(u.merge)g=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const P of u.mergeFields){const M=vR(e,P,t);if(!h.contains(M))throw new de(q.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);wR(w,M)||w.push(M)}g=new Vn(w),v=h.fieldTransforms.filter(P=>g.covers(P.field))}else g=null,v=h.fieldTransforms;return new mR(new gn(m),g,v)}function K_(i,e){if(Q_(i=sn(i)))return Y_("Unsupported field value:",e,i),G_(i,e);if(i instanceof H_)return function(s,o){if(!q_(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=K_(m,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=sn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return uS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Nu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Nu(o.serializer,u)}}if(s instanceof tf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof oo)return{bytesValue:p_(o.serializer,s._byteString)};if(s instanceof On){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Bd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof nf)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.Bu("VectorValues must only contain numeric values.");return bd(m.serializer,g)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${Zd(s)}`)}(i,e)}function G_(i,e){const t={};return $y(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):co(i,(s,o)=>{const u=K_(o,e.Mu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Q_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof tf||i instanceof oo||i instanceof On||i instanceof H_||i instanceof nf)}function Y_(i,e,t){if(!Q_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Zd(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function vR(i,e,t){if((e=sn(e))instanceof ef)return e._internalPath;if(typeof e=="string")return X_(i,e);throw xu("Field path arguments must be of type string or ",i,!1,void 0,t)}const ER=new RegExp("[~\\*/\\[\\]]");function X_(i,e,t){if(e.search(ER)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function xu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new de(q.INVALID_ARGUMENT,m+i+g)}function wR(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class J_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Z_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TR extends J_{data(){return super.data()}}function Z_(i,e){return typeof e=="string"?X_(i,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
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
 */function IR(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new de(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class SR{convertValue(e,t="none"){switch(Yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return co(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new nf(u)}convertGeoPoint(e){return new tf(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=xd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const t=ci(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);je(E_(s));const o=new Ia(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function AR(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class ou{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RR extends J_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Z_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class mu extends RR{data(e={}){return super.data(e)}}class PR{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ou(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new mu(this._firestore,this._userDataWriter,s.key,s,new ou(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ou(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ou(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:CR(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function CR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class kR extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new oo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,t)}}function NR(i){i=Pa(i,Yu);const e=Pa(i.firestore,Xu),t=W_(e),s=new kR(e);return IR(i._query),uR(t,i._query).then(o=>new PR(e,s,i,o))}function DR(i){return ev(Pa(i.firestore,Xu),[new Fd(i._key,Qn.none())])}function VR(i,e){const t=Pa(i.firestore,Xu),s=$_(i),o=AR(i.converter,e);return ev(t,[_R(yR(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then(()=>s)}function ev(i,e){return function(s,o){const u=new ai;return s.asyncQueue.enqueueAndForget(async()=>YA(await aR(s),o,u)),u.promise}(W_(i),e)}(function(e,t=!0){(function(o){uo=o})(ao),Js(new qi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Xu(new AI(s.getProvider("auth-internal")),new kI(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new de(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),oi(tg,"4.7.3",e),oi(tg,"4.7.3","esm2017")})();const xR={apiKey:"AIzaSyBuyO0TJ6PSssYZjUwvLJrTMTVHavB_0n0",authDomain:"bookstore-c42b9.firebaseapp.com",projectId:"bookstore-c42b9",storageBucket:"bookstore-c42b9.firebasestorage.app",messagingSenderId:"436887994001",appId:"1:436887994001:web:667fb333ddd5019d830930",measurementId:"G-H2SM799P21"},tv=Zg(xR),nv=Yh(tv),sf=dR(tv),OR=new _r,LR=async()=>{try{return(await DT(nv,OR)).user}catch(i){throw console.error("Error signing in with Google:",i),i}},MR=async()=>{try{await Iy(nv)}catch(i){throw console.error("Error signing out:",i),i}},bR=async i=>{try{const e={title:i.title,author:i.author,price:Number(i.price)};return(await VR(z_(sf,"books"),e)).id}catch(e){throw console.error("Error adding document:",e),e}},FR=async i=>{try{await DR($_(sf,"books",i))}catch(e){throw console.error("Error deleting document:",e),e}},UR=i=>{typeof window<"u"&&(window.location.href=i)},rv=()=>{const[i,e]=Ee.useState(null);let t;try{t=zg()}catch{t=UR}return Ee.useEffect(()=>{const o=Yh(),u=hT(o,h=>{e(h),h||t("/")});return()=>u()},[t]),{user:i,signOut:async()=>{try{const o=Yh();await Iy(o),t("/")}catch(o){console.error("Error signing out:",o)}}}},jR=()=>{const{user:i}=rv(),e=()=>{LR()},t=()=>{MR()};return ae.jsx("div",{children:i?ae.jsx("button",{onClick:t,className:"login-button",children:"Logout"}):ae.jsx("button",{onClick:e,className:"login-button",children:"Login with Google"})})},BR=()=>{const[i,e]=Ee.useState([]),t=async()=>{try{const h=(await NR(z_(sf,"books"))).docs.map(m=>{const g=m.data();return{id:m.id,title:g.title,author:g.author,price:Number(g.price)}});console.log("isRealdoing?",h),e(h)}catch(u){throw console.error("Error refreshing books:",u),u}};return Ee.useEffect(()=>{t()},[]),{books:i,addBook:async u=>{try{await bR(u),await t()}catch(h){throw console.error("Error adding book:",h),h}},deleteBook:async u=>{try{window.confirm("Are you sure you want to delete this book? This action cannot be undone.")&&(await FR(u),await t())}catch(h){throw console.error("Error deleting book:",h),h}}}},iv=({isOpen:i,onClose:e,onAddBook:t})=>{const[s,o]=Ee.useState(""),[u,h]=Ee.useState(""),[m,g]=Ee.useState(""),v=async w=>{if(w.preventDefault(),s&&u&&m)try{const P={title:s,author:u,price:Number(m)};await t(P),o(""),h(""),g(""),e()}catch(P){console.error("Error adding book:",P)}};return Ee.useEffect(()=>{i||(o(""),h(""),g(""))},[i]),i?ae.jsx("div",{className:"modal-overlay",children:ae.jsxs("div",{className:"modal",children:[ae.jsx("h2",{children:"Add New Book"}),ae.jsx("button",{className:"close-btn",onClick:e,children:"×"}),ae.jsxs("form",{onSubmit:v,className:"add-book-form",children:[ae.jsxs("div",{className:"form-group",children:[ae.jsx("label",{children:"Title:"}),ae.jsx("input",{type:"text",value:s,onChange:w=>o(w.target.value),required:!0})]}),ae.jsxs("div",{className:"form-group",children:[ae.jsx("label",{children:"Author:"}),ae.jsx("input",{type:"text",value:u,onChange:w=>h(w.target.value),required:!0})]}),ae.jsxs("div",{className:"form-group",children:[ae.jsx("label",{children:"Price:"}),ae.jsx("input",{type:"number",value:m,onChange:w=>g(w.target.value),required:!0})]}),ae.jsxs("div",{className:"form-buttons",children:[ae.jsx("button",{type:"submit",className:"add-btn",children:"Add Book"}),ae.jsx("button",{type:"button",onClick:e,className:"cancel-btn",children:"Cancel"})]})]})]})}):null},zR=({searchTerm:i,books:e,addBook:t,deleteBook:s,itemsPerPage:o=10})=>{const[u,h]=Ee.useState(!1),[m,g]=Ee.useState(1),[v,w]=Ee.useState(null);console.log("BooksList received books:",e);const P=Ee.useMemo(()=>{let te=[...e].filter(le=>le.title.toLowerCase().includes(i.toLowerCase())||le.author.toLowerCase().includes(i.toLowerCase()));return v&&te.sort((le,Me)=>v==="asc"?le.price-Me.price:Me.price-le.price),te},[e,i,v]),M=Math.ceil(P.length/o),B=m*o,Q=B-o,G=P.slice(Q,B),j=()=>{g(1),w(te=>te===null?"asc":te==="asc"?"desc":null)},ue=async te=>{try{await t(te),h(!1)}catch(le){throw console.error("Error adding book:",le),le}},he=async te=>{try{await s(te)}catch(le){throw console.error("Error deleting book:",le),le}};return ae.jsxs("div",{className:"books-list",children:[ae.jsx(iv,{isOpen:u,onClose:()=>h(!1),onAddBook:ue}),P.length>0?ae.jsxs(ae.Fragment,{children:[ae.jsxs("div",{className:"books-table",children:[ae.jsxs("div",{className:"table-header",children:[ae.jsx("div",{className:"header-cell number",children:"#"}),ae.jsx("div",{className:"header-cell title",children:"Title"}),ae.jsx("div",{className:"header-cell author",children:"Author"}),ae.jsxs("div",{className:"header-cell price sortable",onClick:j,children:["Price",v&&ae.jsx("span",{className:"sort-arrow",children:v==="asc"?"↑":"↓"})]}),ae.jsx("div",{className:"header-cell actions",children:"Actions"})]}),G.map((te,le)=>ae.jsxs("div",{className:"table-row",children:[ae.jsx("div",{className:"cell number",children:le+Q+1}),ae.jsx("div",{className:"cell title",children:te.title}),ae.jsx("div",{className:"cell author",children:te.author}),ae.jsxs("div",{className:"cell price",children:["$",te.price]}),ae.jsx("div",{className:"cell actions",children:ae.jsx("button",{onClick:()=>he(te.id),className:"delete-btn",children:"Delete"})})]},te.id))]}),ae.jsxs("div",{className:"pagination",children:[ae.jsx("button",{onClick:()=>g(te=>Math.max(1,te-1)),disabled:m===1,className:"pagination-btn",children:"Previous"}),ae.jsxs("span",{className:"page-info",children:["Page ",m," of ",M]}),ae.jsx("button",{onClick:()=>g(te=>Math.min(M,te+1)),disabled:m===M,className:"pagination-btn",children:"Next"})]})]}):ae.jsx("div",{className:"no-books",children:i?"No books found":"No books yet"})]})};function $R(){const{user:i,signOut:e}=rv(),[t,s]=Ee.useState(""),[o,u]=Ee.useState(!1),{books:h,addBook:m,deleteBook:g}=BR(),v=zg(),w=async()=>{if(window.confirm("Are you sure you want to log out?"))try{await e(),v("/")}catch(B){console.error("Error during logout:",B)}},P=async M=>{await m(M),u(!1)};return ae.jsxs("div",{className:"App",children:[ae.jsx("h1",{children:"Book Store"}),i&&ae.jsxs("div",{className:"books-header",children:[ae.jsx("div",{className:"header-left",children:ae.jsx("input",{type:"text",className:"search-bar",placeholder:"Search books...",value:t,onChange:M=>s(M.target.value)})}),ae.jsxs("div",{className:"header-right",children:[ae.jsx("button",{className:"add-book-btn",onClick:()=>u(!0),children:"Add Book"}),ae.jsx("button",{className:"logout-btn",onClick:w,children:"Logout"})]})]}),i&&ae.jsxs(ae.Fragment,{children:[ae.jsx(iv,{isOpen:o,onClose:()=>u(!1),onAddBook:P}),ae.jsx(zR,{searchTerm:t,books:h,addBook:m,deleteBook:g})]}),!i&&ae.jsx(jR,{})]})}vE.createRoot(document.getElementById("root")).render(ae.jsx(Ee.StrictMode,{children:ae.jsx($E,{children:ae.jsx($R,{})})}));

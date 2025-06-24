function mE(i,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in i)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(i,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function gE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nh={exports:{}},ha={},Dh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function yE(){if(Sm)return Re;Sm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function V(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function U(x,z,ue){this.props=x,this.context=z,this.refs=$,this.updater=ue||B}U.prototype.isReactComponent={},U.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},U.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Z(){}Z.prototype=U.prototype;function ee(x,z,ue){this.props=x,this.context=z,this.refs=$,this.updater=ue||B}var he=ee.prototype=new Z;he.constructor=ee,W(he,U.prototype),he.isPureReactComponent=!0;var Ee=Array.isArray,Ue=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(x,z,ue){var Se,Ae={},Ne=null,be=null;if(z!=null)for(Se in z.ref!==void 0&&(be=z.ref),z.key!==void 0&&(Ne=""+z.key),z)Ue.call(z,Se)&&!D.hasOwnProperty(Se)&&(Ae[Se]=z[Se]);var Fe=arguments.length-2;if(Fe===1)Ae.children=ue;else if(1<Fe){for(var We=Array(Fe),gt=0;gt<Fe;gt++)We[gt]=arguments[gt+2];Ae.children=We}if(x&&x.defaultProps)for(Se in Fe=x.defaultProps,Fe)Ae[Se]===void 0&&(Ae[Se]=Fe[Se]);return{$$typeof:i,type:x,key:Ne,ref:be,props:Ae,_owner:Ie.current}}function A(x,z){return{$$typeof:i,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function R(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function k(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return z[ue]})}var O=/\/+/g;function S(x,z){return typeof x=="object"&&x!==null&&x.key!=null?k(""+x.key):z.toString(36)}function nt(x,z,ue,Se,Ae){var Ne=typeof x;(Ne==="undefined"||Ne==="boolean")&&(x=null);var be=!1;if(x===null)be=!0;else switch(Ne){case"string":case"number":be=!0;break;case"object":switch(x.$$typeof){case i:case e:be=!0}}if(be)return be=x,Ae=Ae(be),x=Se===""?"."+S(be,0):Se,Ee(Ae)?(ue="",x!=null&&(ue=x.replace(O,"$&/")+"/"),nt(Ae,z,ue,"",function(gt){return gt})):Ae!=null&&(R(Ae)&&(Ae=A(Ae,ue+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+x)),z.push(Ae)),1;if(be=0,Se=Se===""?".":Se+":",Ee(x))for(var Fe=0;Fe<x.length;Fe++){Ne=x[Fe];var We=Se+S(Ne,Fe);be+=nt(Ne,z,ue,We,Ae)}else if(We=V(x),typeof We=="function")for(x=We.call(x),Fe=0;!(Ne=x.next()).done;)Ne=Ne.value,We=Se+S(Ne,Fe++),be+=nt(Ne,z,ue,We,Ae);else if(Ne==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return be}function Nt(x,z,ue){if(x==null)return x;var Se=[],Ae=0;return nt(x,Se,"","",function(Ne){return z.call(ue,Ne,Ae++)}),Se}function Dt(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var ze={current:null},J={transition:null},de={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ie};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Nt,forEach:function(x,z,ue){Nt(x,function(){z.apply(this,arguments)},ue)},count:function(x){var z=0;return Nt(x,function(){z++}),z},toArray:function(x){return Nt(x,function(z){return z})||[]},only:function(x){if(!R(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Re.Component=U,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ee,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=ne,Re.cloneElement=function(x,z,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Se=W({},x.props),Ae=x.key,Ne=x.ref,be=x._owner;if(z!=null){if(z.ref!==void 0&&(Ne=z.ref,be=Ie.current),z.key!==void 0&&(Ae=""+z.key),x.type&&x.type.defaultProps)var Fe=x.type.defaultProps;for(We in z)Ue.call(z,We)&&!D.hasOwnProperty(We)&&(Se[We]=z[We]===void 0&&Fe!==void 0?Fe[We]:z[We])}var We=arguments.length-2;if(We===1)Se.children=ue;else if(1<We){Fe=Array(We);for(var gt=0;gt<We;gt++)Fe[gt]=arguments[gt+2];Se.children=Fe}return{$$typeof:i,type:x.type,key:Ae,ref:Ne,props:Se,_owner:be}},Re.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Re.createElement=I,Re.createFactory=function(x){var z=I.bind(null,x);return z.type=x,z},Re.createRef=function(){return{current:null}},Re.forwardRef=function(x){return{$$typeof:m,render:x}},Re.isValidElement=R,Re.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Dt}},Re.memo=function(x,z){return{$$typeof:v,type:x,compare:z===void 0?null:z}},Re.startTransition=function(x){var z=J.transition;J.transition={};try{x()}finally{J.transition=z}},Re.unstable_act=ne,Re.useCallback=function(x,z){return ze.current.useCallback(x,z)},Re.useContext=function(x){return ze.current.useContext(x)},Re.useDebugValue=function(){},Re.useDeferredValue=function(x){return ze.current.useDeferredValue(x)},Re.useEffect=function(x,z){return ze.current.useEffect(x,z)},Re.useId=function(){return ze.current.useId()},Re.useImperativeHandle=function(x,z,ue){return ze.current.useImperativeHandle(x,z,ue)},Re.useInsertionEffect=function(x,z){return ze.current.useInsertionEffect(x,z)},Re.useLayoutEffect=function(x,z){return ze.current.useLayoutEffect(x,z)},Re.useMemo=function(x,z){return ze.current.useMemo(x,z)},Re.useReducer=function(x,z,ue){return ze.current.useReducer(x,z,ue)},Re.useRef=function(x){return ze.current.useRef(x)},Re.useState=function(x){return ze.current.useState(x)},Re.useSyncExternalStore=function(x,z,ue){return ze.current.useSyncExternalStore(x,z,ue)},Re.useTransition=function(){return ze.current.useTransition()},Re.version="18.3.1",Re}var Am;function Ed(){return Am||(Am=1,Dh.exports=yE()),Dh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function _E(){if(Rm)return ha;Rm=1;var i=Ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,C={},V=null,B=null;v!==void 0&&(V=""+v),g.key!==void 0&&(V=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(C[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:e,type:m,key:V,ref:B,props:C,_owner:o.current}}return ha.Fragment=t,ha.jsx=h,ha.jsxs=h,ha}var Pm;function vE(){return Pm||(Pm=1,Nh.exports=_E()),Nh.exports}var oe=vE(),ge=Ed();const EE=gE(ge),wE=mE({__proto__:null,default:EE},[ge]);var ru={},Vh={exports:{}},Jt={},xh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function TE(){return Cm||(Cm=1,function(i){function e(J,de){var ne=J.length;J.push(de);e:for(;0<ne;){var x=ne-1>>>1,z=J[x];if(0<o(z,de))J[x]=de,J[ne]=z,ne=x;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var de=J[0],ne=J.pop();if(ne!==de){J[0]=ne;e:for(var x=0,z=J.length,ue=z>>>1;x<ue;){var Se=2*(x+1)-1,Ae=J[Se],Ne=Se+1,be=J[Ne];if(0>o(Ae,ne))Ne<z&&0>o(be,Ae)?(J[x]=be,J[Ne]=ne,x=Ne):(J[x]=Ae,J[Se]=ne,x=Se);else if(Ne<z&&0>o(be,ne))J[x]=be,J[Ne]=ne,x=Ne;else break e}}return de}function o(J,de){var ne=J.sortIndex-de.sortIndex;return ne!==0?ne:J.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,C=null,V=3,B=!1,W=!1,$=!1,U=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(J){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=J)s(v),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(v)}}function Ee(J){if($=!1,he(J),!W)if(t(g)!==null)W=!0,Dt(Ue);else{var de=t(v);de!==null&&ze(Ee,de.startTime-J)}}function Ue(J,de){W=!1,$&&($=!1,Z(I),I=-1),B=!0;var ne=V;try{for(he(de),C=t(g);C!==null&&(!(C.expirationTime>de)||J&&!k());){var x=C.callback;if(typeof x=="function"){C.callback=null,V=C.priorityLevel;var z=x(C.expirationTime<=de);de=i.unstable_now(),typeof z=="function"?C.callback=z:C===t(g)&&s(g),he(de)}else s(g);C=t(g)}if(C!==null)var ue=!0;else{var Se=t(v);Se!==null&&ze(Ee,Se.startTime-de),ue=!1}return ue}finally{C=null,V=ne,B=!1}}var Ie=!1,D=null,I=-1,A=5,R=-1;function k(){return!(i.unstable_now()-R<A)}function O(){if(D!==null){var J=i.unstable_now();R=J;var de=!0;try{de=D(!0,J)}finally{de?S():(Ie=!1,D=null)}}else Ie=!1}var S;if(typeof ee=="function")S=function(){ee(O)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Nt=nt.port2;nt.port1.onmessage=O,S=function(){Nt.postMessage(null)}}else S=function(){U(O,0)};function Dt(J){D=J,Ie||(Ie=!0,S())}function ze(J,de){I=U(function(){J(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){W||B||(W=!0,Dt(Ue))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(V){case 1:case 2:case 3:var de=3;break;default:de=V}var ne=V;V=de;try{return J()}finally{V=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,de){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=V;V=J;try{return de()}finally{V=ne}},i.unstable_scheduleCallback=function(J,de,ne){var x=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?x+ne:x):ne=x,J){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ne+z,J={id:w++,callback:de,priorityLevel:J,startTime:ne,expirationTime:z,sortIndex:-1},ne>x?(J.sortIndex=ne,e(v,J),t(g)===null&&J===t(v)&&($?(Z(I),I=-1):$=!0,ze(Ee,ne-x))):(J.sortIndex=z,e(g,J),W||B||(W=!0,Dt(Ue))),J},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(J){var de=V;return function(){var ne=V;V=de;try{return J.apply(this,arguments)}finally{V=ne}}}}(Oh)),Oh}var km;function IE(){return km||(km=1,xh.exports=TE()),xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function SE(){if(Nm)return Jt;Nm=1;var i=Ed(),e=IE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function V(n){return g.call(C,n)?!0:g.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function $(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){U[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];U[r]=new $(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){U[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){U[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){U[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){U[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){U[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){U[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){U[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function ee(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Z,ee);U[r]=new $(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Z,ee);U[r]=new $(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Z,ee);U[r]=new $(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){U[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),U.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){U[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,r,a,c){var d=U.hasOwnProperty(r)?U[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,a,d,c)&&(a=null),c||d===null?V(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),J=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,x;function z(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var ue=!1;function Se(n,r){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=T);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function Ae(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Dt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function tr(n){n._valueTracker||(n._valueTracker=gt(n))}function ns(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pi(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function yo(n,r){r=r.checked,r!=null&&he(n,"checked",r,!1)}function _o(n,r){yo(n,r);var a=Fe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?is(n,r.type,a):r.hasOwnProperty("defaultValue")&&is(n,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function za(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function is(n,r,a){(r!=="number"||kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nr=Array.isArray;function rr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function vo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ss(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(nr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Fe(a)}}function os(n,r){var a=Fe(r.value),c=Fe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Eo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ir,wo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ir.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Nr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gi=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(n){gi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),mi[r]=mi[n]})});function To(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mi.hasOwnProperty(n)&&mi[n]?(""+r).trim():r+"px"}function Io(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=To(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var So=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(n,r){if(r){if(So[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ro(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function as(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ls=null,un=null,bn=null;function us(n){if(n=Yo(n)){if(typeof ls!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),ls(n.stateNode,n.type,r))}}function Fn(n){un?bn?bn.push(n):bn=[n]:un=n}function Po(){if(un){var n=un,r=bn;if(bn=un=null,us(n),r)for(n=0;n<r.length;n++)us(r[n])}}function _i(n,r){return n(r)}function Co(){}var sr=!1;function ko(n,r,a){if(sr)return n(r,a);sr=!0;try{return _i(n,r,a)}finally{sr=!1,(un!==null||bn!==null)&&(Co(),Po())}}function rt(n,r){var a=n.stateNode;if(a===null)return null;var c=_l(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cs=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){cs=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{cs=!1}function vi(n,r,a,c,d,p,_,T,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var Ei=!1,hs=null,wn=!1,No=null,ic={onError:function(n){Ei=!0,hs=n}};function ds(n,r,a,c,d,p,_,T,P){Ei=!1,hs=null,vi.apply(ic,arguments)}function $a(n,r,a,c,d,p,_,T,P){if(ds.apply(this,arguments),Ei){if(Ei){var F=hs;Ei=!1,hs=null}else throw Error(t(198));wn||(wn=!0,No=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function wi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function Wa(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Do(n){return n=Wa(n),n!==null?fs(n):null}function fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=fs(n);if(r!==null)return r;n=n.sibling}return null}var ps=e.unstable_scheduleCallback,Vo=e.unstable_cancelCallback,Ha=e.unstable_shouldYield,sc=e.unstable_requestPaint,He=e.unstable_now,qa=e.unstable_getCurrentPriorityLevel,Ti=e.unstable_ImmediatePriority,Dr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,xo=e.unstable_LowPriority,Ka=e.unstable_IdlePriority,Ii=null,en=null;function Ga(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ii,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Ya,Oo=Math.log,Qa=Math.LN2;function Ya(n){return n>>>=0,n===0?32:31-(Oo(n)/Qa|0)|0}var ms=64,gs=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Vr(T):(p&=_,p!==0&&(c=Vr(p)))}else _=a&~d,_!==0?c=Vr(_):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function oc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function or(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Bt(p),T=1<<_,P=d[_];P===-1?((T&a)===0||(T&c)!==0)&&(d[_]=oc(T,r)):P<=r&&(n.expiredLanes|=T),p&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ai(){var n=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Or(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function $e(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Lr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Mr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Xa,ys,Ja,Za,el,Lo=!1,Un=[],Tt=null,Sn=null,An=null,br=new Map,hn=new Map,jn=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Ht(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Yo(r),r!==null&&ys(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function lc(n,r,a,c,d){switch(r){case"focusin":return Tt=Ht(Tt,n,r,a,c,d),!0;case"dragenter":return Sn=Ht(Sn,n,r,a,c,d),!0;case"mouseover":return An=Ht(An,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return br.set(p,Ht(br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Ht(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function nl(n){var r=Ni(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=wi(a),r!==null){n.blockedOn=r,el(n.priority,function(){Ja(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ar(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_s(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);yi=c,a.target.dispatchEvent(c),yi=null}else return r=Yo(a),r!==null&&ys(r),n.blockedOn=a,!1;r.shift()}return!0}function Ri(n,r,a){ar(n)&&a.delete(r)}function rl(){Lo=!1,Tt!==null&&ar(Tt)&&(Tt=null),Sn!==null&&ar(Sn)&&(Sn=null),An!==null&&ar(An)&&(An=null),br.forEach(Ri),hn.forEach(Ri)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,Lo||(Lo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rl)))}function Pn(n){function r(d){return Rn(d,n)}if(0<Un.length){Rn(Un[0],n);for(var a=1;a<Un.length;a++){var c=Un[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Rn(Tt,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),br.forEach(r),hn.forEach(r),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)nl(a),a.blockedOn===null&&jn.shift()}var lr=Ee.ReactCurrentBatchConfig,Fr=!0;function Qe(n,r,a,c){var d=Ce,p=lr.transition;lr.transition=null;try{Ce=1,Mo(n,r,a,c)}finally{Ce=d,lr.transition=p}}function uc(n,r,a,c){var d=Ce,p=lr.transition;lr.transition=null;try{Ce=4,Mo(n,r,a,c)}finally{Ce=d,lr.transition=p}}function Mo(n,r,a,c){if(Fr){var d=_s(n,r,a,c);if(d===null)Ec(n,r,c,Pi,a),tl(n,c);else if(lc(d,n,r,a,c))c.stopPropagation();else if(tl(n,c),r&4&&-1<ac.indexOf(n)){for(;d!==null;){var p=Yo(d);if(p!==null&&Xa(p),p=_s(n,r,a,c),p===null&&Ec(n,r,c,Pi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ec(n,r,c,null,a)}}var Pi=null;function _s(n,r,a,c){if(Pi=null,n=as(c),n=Ni(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=wi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Pi=n,null}function bo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qa()){case Ti:return 1;case Dr:return 4;case cn:case xo:return 16;case Ka:return 536870912;default:return 16}default:return 16}}var nn=null,vs=null,qt=null;function Fo(){if(qt)return qt;var n,r=vs,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function Es(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Uo(){return!1}function It(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Uo,this.isPropagationStopped=Uo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=It(Cn),zn=ne({},Cn,{view:0,detail:0}),cc=It(zn),Ts,ur,Ur,Ci=ne({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(Ts=n.screenX-Ur.screenX,ur=n.screenY-Ur.screenY):ur=Ts=0,Ur=n),Ts)},movementY:function(n){return"movementY"in n?n.movementY:ur}}),Is=It(Ci),jo=ne({},Ci,{dataTransfer:0}),il=It(jo),Ss=ne({},zn,{relatedTarget:0}),As=It(Ss),sl=ne({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),cr=It(sl),ol=ne({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),al=It(ol),ll=ne({},Cn,{data:0}),Bo=It(ll),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ul[n])?!!r[n]:!1}function $n(){return cl}var l=ne({},zn,{key:function(n){if(n.key){var r=Rs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Es(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(n){return n.type==="keypress"?Es(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Es(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=ne({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=ne({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n}),j=It(L),X=ne({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=It(X),ht=ne({},Ci,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=It(ht),yt=[9,13,27,32],ot=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,ki=m&&(!ot||dn&&8<dn&&11>=dn),Ps=" ",_f=!1;function vf(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function dv(n,r){switch(n){case"compositionend":return Ef(r);case"keypress":return r.which!==32?null:(_f=!0,Ps);case"textInput":return n=r.data,n===Ps&&_f?null:n;default:return null}}function fv(n,r){if(Cs)return n==="compositionend"||!ot&&vf(n,r)?(n=Fo(),qt=vs=nn=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ki&&r.locale!=="ko"?null:r.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!pv[n.type]:r==="textarea"}function Tf(n,r,a,c){Fn(c),r=ml(r,"onChange"),0<r.length&&(a=new ws("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var zo=null,$o=null;function mv(n){jf(n,0)}function hl(n){var r=xs(n);if(ns(r))return n}function gv(n,r){if(n==="change")return r}var If=!1;if(m){var hc;if(m){var dc="oninput"in document;if(!dc){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),dc=typeof Sf.oninput=="function"}hc=dc}else hc=!1;If=hc&&(!document.documentMode||9<document.documentMode)}function Af(){zo&&(zo.detachEvent("onpropertychange",Rf),$o=zo=null)}function Rf(n){if(n.propertyName==="value"&&hl($o)){var r=[];Tf(r,$o,n,as(n)),ko(mv,r)}}function yv(n,r,a){n==="focusin"?(Af(),zo=r,$o=a,zo.attachEvent("onpropertychange",Rf)):n==="focusout"&&Af()}function _v(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl($o)}function vv(n,r){if(n==="click")return hl(r)}function Ev(n,r){if(n==="input"||n==="change")return hl(r)}function wv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var kn=typeof Object.is=="function"?Object.is:wv;function Wo(n,r){if(kn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!kn(n[d],r[d]))return!1}return!0}function Pf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cf(n,r){var a=Pf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pf(a)}}function kf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?kf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Nf(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=kr(n.document)}return r}function fc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Tv(n){var r=Nf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&kf(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Cf(a,p);var _=Cf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Iv=m&&"documentMode"in document&&11>=document.documentMode,ks=null,pc=null,Ho=null,mc=!1;function Df(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||ks==null||ks!==kr(c)||(c=ks,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&Wo(Ho,c)||(Ho=c,c=ml(pc,"onSelect"),0<c.length&&(r=new ws("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=ks)))}function dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ns={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},gc={},Vf={};m&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function fl(n){if(gc[n])return gc[n];if(!Ns[n])return n;var r=Ns[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Vf)return gc[n]=r[a];return n}var xf=fl("animationend"),Of=fl("animationiteration"),Lf=fl("animationstart"),Mf=fl("transitionend"),bf=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,r){bf.set(n,r),u(r,[n])}for(var yc=0;yc<Ff.length;yc++){var _c=Ff[yc],Sv=_c.toLowerCase(),Av=_c[0].toUpperCase()+_c.slice(1);jr(Sv,"on"+Av)}jr(xf,"onAnimationEnd"),jr(Of,"onAnimationIteration"),jr(Lf,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Mf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Uf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,r,void 0,n),n.currentTarget=null}function jf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],P=T.instance,F=T.currentTarget;if(T=T.listener,P!==p&&d.isPropagationStopped())break e;Uf(d,T,F),p=P}else for(_=0;_<c.length;_++){if(T=c[_],P=T.instance,F=T.currentTarget,T=T.listener,P!==p&&d.isPropagationStopped())break e;Uf(d,T,F),p=P}}}if(wn)throw n=No,wn=!1,No=null,n}function Ke(n,r){var a=r[Rc];a===void 0&&(a=r[Rc]=new Set);var c=n+"__bubble";a.has(c)||(Bf(r,n,2,!1),a.add(c))}function vc(n,r,a){var c=0;r&&(c|=4),Bf(a,n,c,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[pl]){n[pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Rv.has(a)||vc(a,!1,n),vc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,vc("selectionchange",!1,r))}}function Bf(n,r,a,c){switch(bo(r)){case 1:var d=Qe;break;case 4:d=uc;break;default:d=Mo}a=d.bind(null,r,a,n),d=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ec(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ni(T),_===null)return;if(P=_.tag,P===5||P===6){c=p=_;continue e}T=T.parentNode}}c=c.return}ko(function(){var F=p,q=as(a),Q=[];e:{var H=bf.get(n);if(H!==void 0){var te=ws,ie=n;switch(n){case"keypress":if(Es(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":ie="focus",te=As;break;case"focusout":ie="blur",te=As;break;case"beforeblur":case"afterblur":te=As;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=j;break;case xf:case Of:case Lf:te=cr;break;case Mf:te=je;break;case"scroll":te=cc;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var se=(r&4)!==0,it=!se&&n==="scroll",M=se?H!==null?H+"Capture":null:H;se=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=rt(N,M),Y!=null&&se.push(Go(N,Y,b)))),it)break;N=N.return}0<se.length&&(H=new te(H,ie,null,a,q),Q.push({event:H,listeners:se}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==yi&&(ie=a.relatedTarget||a.fromElement)&&(Ni(ie)||ie[hr]))break e;if((te||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=F,ie=ie?Ni(ie):null,ie!==null&&(it=Tn(ie),ie!==it||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=F),te!==ie)){if(se=Is,Y="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Y="onPointerLeave",M="onPointerEnter",N="pointer"),it=te==null?H:xs(te),b=ie==null?H:xs(ie),H=new se(Y,N+"leave",te,a,q),H.target=it,H.relatedTarget=b,Y=null,Ni(q)===F&&(se=new se(M,N+"enter",ie,a,q),se.target=b,se.relatedTarget=it,Y=se),it=Y,te&&ie)t:{for(se=te,M=ie,N=0,b=se;b;b=Ds(b))N++;for(b=0,Y=M;Y;Y=Ds(Y))b++;for(;0<N-b;)se=Ds(se),N--;for(;0<b-N;)M=Ds(M),b--;for(;N--;){if(se===M||M!==null&&se===M.alternate)break t;se=Ds(se),M=Ds(M)}se=null}else se=null;te!==null&&zf(Q,H,te,se,!1),ie!==null&&it!==null&&zf(Q,it,ie,se,!0)}}e:{if(H=F?xs(F):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var le=gv;else if(wf(H))if(If)le=Ev;else{le=_v;var fe=yv}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=vv);if(le&&(le=le(n,F))){Tf(Q,le,a,q);break e}fe&&fe(n,H,F),n==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&is(H,"number",H.value)}switch(fe=F?xs(F):window,n){case"focusin":(wf(fe)||fe.contentEditable==="true")&&(ks=fe,pc=F,Ho=null);break;case"focusout":Ho=pc=ks=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Df(Q,a,q);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Df(Q,a,q)}var pe;if(ot)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Cs?vf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(ki&&a.locale!=="ko"&&(Cs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Cs&&(pe=Fo()):(nn=q,vs="value"in nn?nn.value:nn.textContent,Cs=!0)),fe=ml(F,ye),0<fe.length&&(ye=new Bo(ye,n,null,a,q),Q.push({event:ye,listeners:fe}),pe?ye.data=pe:(pe=Ef(a),pe!==null&&(ye.data=pe)))),(pe=rn?dv(n,a):fv(n,a))&&(F=ml(F,"onBeforeInput"),0<F.length&&(q=new Bo("onBeforeInput","beforeinput",null,a,q),Q.push({event:q,listeners:F}),q.data=pe))}jf(Q,r)})}function Go(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ml(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=rt(n,a),p!=null&&c.unshift(Go(n,p,d)),p=rt(n,r),p!=null&&c.push(Go(n,p,d))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,P=T.alternate,F=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&F!==null&&(T=F,d?(P=rt(a,p),P!=null&&_.unshift(Go(a,P,T))):d||(P=rt(a,p),P!=null&&_.push(Go(a,P,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Pv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(Pv,`
`).replace(Cv,"")}function gl(n,r,a){if(r=$f(r),$f(n)!==r&&a)throw Error(t(425))}function yl(){}var wc=null,Tc=null;function Ic(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(n){return Wf.resolve(null).then(n).catch(Dv)}:Sc;function Dv(n){setTimeout(function(){throw n})}function Ac(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Hf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Vs,Qo="__reactProps$"+Vs,hr="__reactContainer$"+Vs,Rc="__reactEvents$"+Vs,Vv="__reactListeners$"+Vs,xv="__reactHandles$"+Vs;function Ni(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[hr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Hf(n);n!==null;){if(a=n[Wn])return a;n=Hf(n)}return r}n=a,a=n.parentNode}return null}function Yo(n){return n=n[Wn]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[Qo]||null}var Pc=[],Os=-1;function zr(n){return{current:n}}function Ge(n){0>Os||(n.current=Pc[Os],Pc[Os]=null,Os--)}function qe(n,r){Os++,Pc[Os]=n.current,n.current=r}var $r={},Vt=zr($r),Kt=zr(!1),Di=$r;function Ls(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function vl(){Ge(Kt),Ge(Vt)}function qf(n,r,a){if(Vt.current!==$r)throw Error(t(168));qe(Vt,r),qe(Kt,a)}function Kf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return ne({},a,c)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Di=Vt.current,qe(Vt,n),qe(Kt,Kt.current),!0}function Gf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kf(n,r,Di),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(Vt),qe(Vt,n)):Ge(Kt),qe(Kt,a)}var dr=null,wl=!1,Cc=!1;function Qf(n){dr===null?dr=[n]:dr.push(n)}function Ov(n){wl=!0,Qf(n)}function Wr(){if(!Cc&&dr!==null){Cc=!0;var n=0,r=Ce;try{var a=dr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}dr=null,wl=!1}catch(d){throw dr!==null&&(dr=dr.slice(n+1)),ps(Ti,Wr),d}finally{Ce=r,Cc=!1}}return null}var Ms=[],bs=0,Tl=null,Il=0,fn=[],pn=0,Vi=null,fr=1,pr="";function xi(n,r){Ms[bs++]=Il,Ms[bs++]=Tl,Tl=n,Il=r}function Yf(n,r,a){fn[pn++]=fr,fn[pn++]=pr,fn[pn++]=Vi,Vi=n;var c=fr;n=pr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,fr=1<<32-Bt(r)+d|a<<d|c,pr=p+n}else fr=1<<p|a<<d|c,pr=n}function kc(n){n.return!==null&&(xi(n,1),Yf(n,1,0))}function Nc(n){for(;n===Tl;)Tl=Ms[--bs],Ms[bs]=null,Il=Ms[--bs],Ms[bs]=null;for(;n===Vi;)Vi=fn[--pn],fn[pn]=null,pr=fn[--pn],fn[pn]=null,fr=fn[--pn],fn[pn]=null}var sn=null,on=null,Ye=!1,Nn=null;function Xf(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Vi!==null?{id:fr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Ye){var r=on;if(r){var a=r;if(!Jf(n,r)){if(Dc(n))throw Error(t(418));r=Br(a.nextSibling);var c=sn;r&&Jf(n,r)?Xf(c,a):(n.flags=n.flags&-4097|2,Ye=!1,sn=n)}}else{if(Dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,sn=n}}}function Zf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Sl(n){if(n!==sn)return!1;if(!Ye)return Zf(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ic(n.type,n.memoizedProps)),r&&(r=on)){if(Dc(n))throw ep(),Error(t(418));for(;r;)Xf(n,r),r=Br(r.nextSibling)}if(Zf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Br(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=on;n;)n=Br(n.nextSibling)}function Fs(){on=sn=null,Ye=!1}function xc(n){Nn===null?Nn=[n]:Nn.push(n)}var Lv=Ee.ReactCurrentBatchConfig;function Xo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tp(n){var r=n._init;return r(n._payload)}function np(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=Jr(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,Y){return N===null||N.tag!==6?(N=Sh(b,M.mode,Y),N.return=M,N):(N=d(N,b),N.return=M,N)}function P(M,N,b,Y){var le=b.type;return le===D?q(M,N,b.props.children,Y,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&tp(le)===N.type)?(Y=d(N,b.props),Y.ref=Xo(M,N,b),Y.return=M,Y):(Y=Ql(b.type,b.key,b.props,null,M.mode,Y),Y.ref=Xo(M,N,b),Y.return=M,Y)}function F(M,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Ah(b,M.mode,Y),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function q(M,N,b,Y,le){return N===null||N.tag!==7?(N=Bi(b,M.mode,Y,le),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Sh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ue:return b=Ql(N.type,N.key,N.props,null,M.mode,b),b.ref=Xo(M,null,N),b.return=M,b;case Ie:return N=Ah(N,M.mode,b),N.return=M,N;case Dt:var Y=N._init;return Q(M,Y(N._payload),b)}if(nr(N)||de(N))return N=Bi(N,M.mode,b,null),N.return=M,N;Al(M,N)}return null}function H(M,N,b,Y){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ue:return b.key===le?P(M,N,b,Y):null;case Ie:return b.key===le?F(M,N,b,Y):null;case Dt:return le=b._init,H(M,N,le(b._payload),Y)}if(nr(b)||de(b))return le!==null?null:q(M,N,b,Y,null);Al(M,b)}return null}function te(M,N,b,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(N,M,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ue:return M=M.get(Y.key===null?b:Y.key)||null,P(N,M,Y,le);case Ie:return M=M.get(Y.key===null?b:Y.key)||null,F(N,M,Y,le);case Dt:var fe=Y._init;return te(M,N,b,fe(Y._payload),le)}if(nr(Y)||de(Y))return M=M.get(b)||null,q(N,M,Y,le,null);Al(N,Y)}return null}function ie(M,N,b,Y){for(var le=null,fe=null,pe=N,ye=N=0,Et=null;pe!==null&&ye<b.length;ye++){pe.index>ye?(Et=pe,pe=null):Et=pe.sibling;var Le=H(M,pe,b[ye],Y);if(Le===null){pe===null&&(pe=Et);break}n&&pe&&Le.alternate===null&&r(M,pe),N=p(Le,N,ye),fe===null?le=Le:fe.sibling=Le,fe=Le,pe=Et}if(ye===b.length)return a(M,pe),Ye&&xi(M,ye),le;if(pe===null){for(;ye<b.length;ye++)pe=Q(M,b[ye],Y),pe!==null&&(N=p(pe,N,ye),fe===null?le=pe:fe.sibling=pe,fe=pe);return Ye&&xi(M,ye),le}for(pe=c(M,pe);ye<b.length;ye++)Et=te(pe,M,ye,b[ye],Y),Et!==null&&(n&&Et.alternate!==null&&pe.delete(Et.key===null?ye:Et.key),N=p(Et,N,ye),fe===null?le=Et:fe.sibling=Et,fe=Et);return n&&pe.forEach(function(Zr){return r(M,Zr)}),Ye&&xi(M,ye),le}function se(M,N,b,Y){var le=de(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var fe=le=null,pe=N,ye=N=0,Et=null,Le=b.next();pe!==null&&!Le.done;ye++,Le=b.next()){pe.index>ye?(Et=pe,pe=null):Et=pe.sibling;var Zr=H(M,pe,Le.value,Y);if(Zr===null){pe===null&&(pe=Et);break}n&&pe&&Zr.alternate===null&&r(M,pe),N=p(Zr,N,ye),fe===null?le=Zr:fe.sibling=Zr,fe=Zr,pe=Et}if(Le.done)return a(M,pe),Ye&&xi(M,ye),le;if(pe===null){for(;!Le.done;ye++,Le=b.next())Le=Q(M,Le.value,Y),Le!==null&&(N=p(Le,N,ye),fe===null?le=Le:fe.sibling=Le,fe=Le);return Ye&&xi(M,ye),le}for(pe=c(M,pe);!Le.done;ye++,Le=b.next())Le=te(pe,M,ye,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?ye:Le.key),N=p(Le,N,ye),fe===null?le=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function(pE){return r(M,pE)}),Ye&&xi(M,ye),le}function it(M,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ue:e:{for(var le=b.key,fe=N;fe!==null;){if(fe.key===le){if(le=b.type,le===D){if(fe.tag===7){a(M,fe.sibling),N=d(fe,b.props.children),N.return=M,M=N;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&tp(le)===fe.type){a(M,fe.sibling),N=d(fe,b.props),N.ref=Xo(M,fe,b),N.return=M,M=N;break e}a(M,fe);break}else r(M,fe);fe=fe.sibling}b.type===D?(N=Bi(b.props.children,M.mode,Y,b.key),N.return=M,M=N):(Y=Ql(b.type,b.key,b.props,null,M.mode,Y),Y.ref=Xo(M,N,b),Y.return=M,M=Y)}return _(M);case Ie:e:{for(fe=b.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Ah(b,M.mode,Y),N.return=M,M=N}return _(M);case Dt:return fe=b._init,it(M,N,fe(b._payload),Y)}if(nr(b))return ie(M,N,b,Y);if(de(b))return se(M,N,b,Y);Al(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Sh(b,M.mode,Y),N.return=M,M=N),_(M)):a(M,N)}return it}var Us=np(!0),rp=np(!1),Rl=zr(null),Pl=null,js=null,Oc=null;function Lc(){Oc=js=Pl=null}function Mc(n){var r=Rl.current;Ge(Rl),n._currentValue=r}function bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Bs(n,r){Pl=n,Oc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Qt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:r,next:null},js===null){if(Pl===null)throw Error(t(308));js=n,Pl.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return r}var Oi=null;function Fc(n){Oi===null?Oi=[n]:Oi.push(n)}function ip(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Fc(r)):(a.next=d.next,d.next=a),r.interleaved=a,mr(n,c)}function mr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Hr=!1;function Uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,mr(n,a)}return d=c.interleaved,d===null?(r.next=r,Fc(c)):(r.next=d.next,d.next=r),c.interleaved=r,mr(n,a)}function Cl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}function op(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function kl(n,r,a,c){var d=n.updateQueue;Hr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var P=T,F=P.next;P.next=null,_===null?p=F:_.next=F,_=P;var q=n.alternate;q!==null&&(q=q.updateQueue,T=q.lastBaseUpdate,T!==_&&(T===null?q.firstBaseUpdate=F:T.next=F,q.lastBaseUpdate=P))}if(p!==null){var Q=d.baseState;_=0,q=F=P=null,T=p;do{var H=T.lane,te=T.eventTime;if((c&H)===H){q!==null&&(q=q.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(H=r,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(te,Q,H);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(te,Q,H):ie,H==null)break e;Q=ne({},Q,H);break e;case 2:Hr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else te={eventTime:te,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},q===null?(F=q=te,P=Q):q=q.next=te,_|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(q===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);bi|=_,n.lanes=_,n.memoizedState=Q}}function ap(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Jo={},Hn=zr(Jo),Zo=zr(Jo),ea=zr(Jo);function Li(n){if(n===Jo)throw Error(t(174));return n}function jc(n,r){switch(qe(ea,r),qe(Zo,n),qe(Hn,Jo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ct(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ct(r,n)}Ge(Hn),qe(Hn,r)}function zs(){Ge(Hn),Ge(Zo),Ge(ea)}function lp(n){Li(ea.current);var r=Li(Hn.current),a=ct(r,n.type);r!==a&&(qe(Zo,n),qe(Hn,a))}function Bc(n){Zo.current===n&&(Ge(Hn),Ge(Zo))}var Je=zr(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zc=[];function $c(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var Dl=Ee.ReactCurrentDispatcher,Wc=Ee.ReactCurrentBatchConfig,Mi=0,Ze=null,dt=null,_t=null,Vl=!1,ta=!1,na=0,Mv=0;function xt(){throw Error(t(321))}function Hc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!kn(n[a],r[a]))return!1;return!0}function qc(n,r,a,c,d,p){if(Mi=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?jv:Bv,n=a(c,d),ta){p=0;do{if(ta=!1,na=0,25<=p)throw Error(t(301));p+=1,_t=dt=null,r.updateQueue=null,Dl.current=zv,n=a(c,d)}while(ta)}if(Dl.current=Ll,r=dt!==null&&dt.next!==null,Mi=0,_t=dt=Ze=null,Vl=!1,r)throw Error(t(300));return n}function Kc(){var n=na!==0;return na=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ze.memoizedState=_t=n:_t=_t.next=n,_t}function gn(){if(dt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var r=_t===null?Ze.memoizedState:_t.next;if(r!==null)_t=r,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Ze.memoizedState=_t=n:_t=_t.next=n}return _t}function ra(n,r){return typeof r=="function"?r(n):r}function Gc(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,P=null,F=p;do{var q=F.lane;if((Mi&q)===q)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(T=P=Q,_=c):P=P.next=Q,Ze.lanes|=q,bi|=q}F=F.next}while(F!==null&&F!==p);P===null?_=c:P.next=T,kn(c,r.memoizedState)||(Qt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,bi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Qc(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);kn(p,r.memoizedState)||(Qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function up(){}function cp(n,r){var a=Ze,c=gn(),d=r(),p=!kn(c.memoizedState,d);if(p&&(c.memoizedState=d,Qt=!0),c=c.queue,Yc(fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ia(9,dp.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));(Mi&30)!==0||hp(a,r,d)}return d}function hp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function dp(n,r,a,c){r.value=a,r.getSnapshot=c,pp(r)&&mp(n)}function fp(n,r,a){return a(function(){pp(r)&&mp(n)})}function pp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!kn(n,a)}catch{return!0}}function mp(n){var r=mr(n,1);r!==null&&On(r,n,1,-1)}function gp(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},r.queue=n,n=n.dispatch=Uv.bind(null,Ze,n),[r.memoizedState,n]}function ia(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function yp(){return gn().memoizedState}function xl(n,r,a,c){var d=qn();Ze.flags|=n,d.memoizedState=ia(1|r,a,void 0,c===void 0?null:c)}function Ol(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(dt!==null){var _=dt.memoizedState;if(p=_.destroy,c!==null&&Hc(c,_.deps)){d.memoizedState=ia(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=ia(1|r,a,p,c)}function _p(n,r){return xl(8390656,8,n,r)}function Yc(n,r){return Ol(2048,8,n,r)}function vp(n,r){return Ol(4,2,n,r)}function Ep(n,r){return Ol(4,4,n,r)}function wp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Tp(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4,4,wp.bind(null,r,n),a)}function Xc(){}function Ip(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Hc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Sp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Hc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ap(n,r,a){return(Mi&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(kn(a,r)||(a=Ai(),Ze.lanes|=a,bi|=a,n.baseState=!0),r)}function bv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Wc.transition;Wc.transition={};try{n(!1),r()}finally{Ce=a,Wc.transition=c}}function Rp(){return gn().memoizedState}function Fv(n,r,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Cp(r,a);else if(a=ip(n,r,a,c),a!==null){var d=Wt();On(a,n,c,d),kp(a,r,c)}}function Uv(n,r,a){var c=Yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Cp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,kn(T,_)){var P=r.interleaved;P===null?(d.next=d,Fc(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=ip(n,r,d,c),a!==null&&(d=Wt(),On(a,n,c,d),kp(a,r,c))}}function Pp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Cp(n,r){ta=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function kp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}var Ll={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},jv={readContext:mn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:_p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,xl(4194308,4,wp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return xl(4194308,4,n,r)},useInsertionEffect:function(n,r){return xl(4,2,n,r)},useMemo:function(n,r){var a=qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Fv.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:gp,useDebugValue:Xc,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=gp(!1),r=n[0];return n=bv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));(Mi&30)!==0||hp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,_p(fp.bind(null,c,p,n),[n]),c.flags|=2048,ia(9,dp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=qn(),r=vt.identifierPrefix;if(Ye){var a=pr,c=fr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=na++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Mv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Bv={readContext:mn,useCallback:Ip,useContext:mn,useEffect:Yc,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:Sp,useReducer:Gc,useRef:yp,useState:function(){return Gc(ra)},useDebugValue:Xc,useDeferredValue:function(n){var r=gn();return Ap(r,dt.memoizedState,n)},useTransition:function(){var n=Gc(ra)[0],r=gn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1},zv={readContext:mn,useCallback:Ip,useContext:mn,useEffect:Yc,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:Sp,useReducer:Qc,useRef:yp,useState:function(){return Qc(ra)},useDebugValue:Xc,useDeferredValue:function(n){var r=gn();return dt===null?r.memoizedState=n:Ap(r,dt.memoizedState,n)},useTransition:function(){var n=Qc(ra)[0],r=gn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Jc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ml={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Wt(),d=Yr(n),p=gr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(On(r,n,d,c),Cl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Wt(),d=Yr(n),p=gr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(On(r,n,d,c),Cl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Wt(),c=Yr(n),d=gr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(On(r,n,c,a),Cl(r,n,c))}};function Np(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Wo(a,c)||!Wo(d,p):!0}function Dp(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Gt(r)?Di:Vt.current,c=r.contextTypes,p=(c=c!=null)?Ls(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Vp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function Zc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Uc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Gt(r)?Di:Vt.current,d.context=Ls(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Jc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ml.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function eh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function th(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function xp(n,r,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){$l||($l=!0,gh=c),th(n,r)},a}function Op(n,r,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){th(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){th(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Lp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $v;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=rE.bind(null,n,r,a),r.then(n,n))}function Mp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function bp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=gr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Wv=Ee.ReactCurrentOwner,Qt=!1;function $t(n,r,a,c){r.child=n===null?rp(r,null,a,c):Us(r,n.child,a,c)}function Fp(n,r,a,c,d){a=a.render;var p=r.ref;return Bs(r,d),c=qc(n,r,a,c,p,d),a=Kc(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,yr(n,r,d)):(Ye&&a&&kc(r),r.flags|=1,$t(n,r,c,d),r.child)}function Up(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Ih(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,jp(n,r,p,c,d)):(n=Ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,c)&&n.ref===r.ref)return yr(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function jp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Wo(p,c)&&n.ref===r.ref)if(Qt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return r.lanes=n.lanes,yr(n,r,d)}return nh(n,r,a,c,d)}function Bp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Hs,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Hs,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Hs,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Hs,an),an|=c;return $t(n,r,d,a),r.child}function zp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function nh(n,r,a,c,d){var p=Gt(a)?Di:Vt.current;return p=Ls(r,p),Bs(r,d),a=qc(n,r,a,c,p,d),c=Kc(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,yr(n,r,d)):(Ye&&c&&kc(r),r.flags|=1,$t(n,r,a,d),r.child)}function $p(n,r,a,c,d){if(Gt(a)){var p=!0;El(r)}else p=!1;if(Bs(r,d),r.stateNode===null)Fl(n,r),Dp(r,a,c),Zc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var P=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Gt(a)?Di:Vt.current,F=Ls(r,F));var q=a.getDerivedStateFromProps,Q=typeof q=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||P!==F)&&Vp(r,_,c,F),Hr=!1;var H=r.memoizedState;_.state=H,kl(r,c,_,d),P=r.memoizedState,T!==c||H!==P||Kt.current||Hr?(typeof q=="function"&&(Jc(r,a,q,c),P=r.memoizedState),(T=Hr||Np(r,a,T,c,H,P,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,sp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Dn(r.type,T),_.props=F,Q=r.pendingProps,H=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Gt(a)?Di:Vt.current,P=Ls(r,P));var te=a.getDerivedStateFromProps;(q=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||H!==P)&&Vp(r,_,c,P),Hr=!1,H=r.memoizedState,_.state=H,kl(r,c,_,d);var ie=r.memoizedState;T!==Q||H!==ie||Kt.current||Hr?(typeof te=="function"&&(Jc(r,a,te,c),ie=r.memoizedState),(F=Hr||Np(r,a,F,c,H,ie,P)||!1)?(q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=P,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return rh(n,r,a,c,p,d)}function rh(n,r,a,c,d,p){zp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Gf(r,a,!1),yr(n,r,p);c=r.stateNode,Wv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Us(r,n.child,null,p),r.child=Us(r,null,T,p)):$t(n,r,T,p),r.memoizedState=c.state,d&&Gf(r,a,!0),r.child}function Wp(n){var r=n.stateNode;r.pendingContext?qf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&qf(n,r.context,!1),jc(n,r.containerInfo)}function Hp(n,r,a,c,d){return Fs(),xc(d),r.flags|=256,$t(n,r,a,c),r.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function sh(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Je,d&1),n===null)return Vc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Yl(_,c,0,null),n=Bi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=sh(a),r.memoizedState=ih,n):oh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Hv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=Jr(d,P),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Jr(T,p):(p=Bi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?sh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=ih,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function oh(n,r){return r=Yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function bl(n,r,a,c){return c!==null&&xc(c),Us(r,n.child,null,a),n=oh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Hv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=eh(Error(t(422))),bl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Yl({mode:"visible",children:c.children},d,0,null),p=Bi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Us(r,n.child,null,_),r.child.memoizedState=sh(_),r.memoizedState=ih,p);if((r.mode&1)===0)return bl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=eh(p,c,void 0),bl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Qt||T){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,mr(n,d),On(c,n,d,-1))}return Th(),c=eh(Error(t(421))),bl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=iE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=Br(d.nextSibling),sn=r,Ye=!0,Nn=null,n!==null&&(fn[pn++]=fr,fn[pn++]=pr,fn[pn++]=Vi,fr=n.id,pr=n.overflow,Vi=r),r=oh(r,c.children),r.flags|=4096,r)}function Kp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),bc(n.return,r,a)}function ah(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Gp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,r);else if(n.tag===19)Kp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),ah(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Nl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ah(r,!0,a,null,p);break;case"together":ah(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function yr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),bi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function qv(n,r,a){switch(r.tag){case 3:Wp(r),Fs();break;case 5:lp(r);break;case 1:Gt(r.type)&&El(r);break;case 4:jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Rl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?qp(n,r,a):(qe(Je,Je.current&1),n=yr(n,r,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Gp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,Bp(n,r,a)}return yr(n,r,a)}var Qp,lh,Yp,Xp;Qp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lh=function(){},Yp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Li(Hn.current);var p=null;switch(a){case"input":d=pi(n,d),c=pi(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=vo(n,d),c=vo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yl)}Ao(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==T&&(P!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&T[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ke("scroll",n),p||T===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Xp=function(n,r,a,c){a!==c&&(r.flags|=4)};function sa(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Kv(n,r,a){var c=r.pendingProps;switch(Nc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Gt(r.type)&&vl(),Ot(r),null;case 3:return c=r.stateNode,zs(),Ge(Kt),Ge(Vt),$c(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nn!==null&&(vh(Nn),Nn=null))),lh(n,r),Ot(r),null;case 5:Bc(r);var d=Li(ea.current);if(a=r.type,n!==null&&r.stateNode!=null)Yp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Li(Hn.current),Sl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[Qo]=p,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<qo.length;d++)Ke(qo[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":rs(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":ss(c,p),Ke("invalid",c)}Ao(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ke("scroll",c)}switch(a){case"input":tr(c),za(c,p,!0);break;case"textarea":tr(c),Eo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[Qo]=c,Qp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Ro(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<qo.length;d++)Ke(qo[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":rs(n,c),d=pi(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":ss(n,c),d=vo(n,c),Ke("invalid",n);break;default:d=c}Ao(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var P=T[p];p==="style"?Io(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&wo(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Nr(n,P):typeof P=="number"&&Nr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ke("scroll",n):P!=null&&he(n,p,P,_))}switch(a){case"input":tr(n),za(n,c,!1);break;case"textarea":tr(n),Eo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?rr(n,!!c.multiple,p,!1):c.defaultValue!=null&&rr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)Xp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Li(ea.current),Li(Hn.current),Sl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Ge(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ep(),Fs(),r.flags|=98560,p=!1;else if(p=Sl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Nn!==null&&(vh(Nn),Nn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?ft===0&&(ft=3):Th())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return zs(),lh(n,r),n===null&&Ko(r.stateNode.containerInfo),Ot(r),null;case 10:return Mc(r.type._context),Ot(r),null;case 17:return Gt(r.type)&&vl(),Ot(r),null;case 19:if(Ge(Je),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)sa(p,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Nl(n),_!==null){for(r.flags|=128,sa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&He()>qs&&(r.flags|=128,c=!0,sa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Nl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ye)return Ot(r),null}else 2*He()-p.renderingStartTime>qs&&a!==1073741824&&(r.flags|=128,c=!0,sa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=He(),r.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return wh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Gv(n,r){switch(Nc(r),r.tag){case 1:return Gt(r.type)&&vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return zs(),Ge(Kt),Ge(Vt),$c(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Bc(r),null;case 13:if(Ge(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Je),null;case 4:return zs(),null;case 10:return Mc(r.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var Ul=!1,Lt=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,re=null;function Ws(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,r,c)}else a.current=null}function uh(n,r,a){try{a()}catch(c){tt(n,r,c)}}var Jp=!1;function Yv(n,r){if(wc=Fr,n=Nf(),fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,P=-1,F=0,q=0,Q=n,H=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(P=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===n)break t;if(H===a&&++F===d&&(T=_),H===p&&++q===c&&(P=_),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:n,selectionRange:a},Fr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,it=ie.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:Dn(r.type,se),it);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Jp,Jp=!1,ie}function oa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&uh(r,a,p)}d=d.next}while(d!==c)}}function jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Zp(n){var r=n.alternate;r!==null&&(n.alternate=null,Zp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[Qo],delete r[Rc],delete r[Vv],delete r[xv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yl));else if(c!==4&&(n=n.child,n!==null))for(hh(n,r,a),n=n.sibling;n!==null;)hh(n,r,a),n=n.sibling}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}var St=null,Vn=!1;function Kr(n,r,a){for(a=a.child;a!==null;)nm(n,r,a),a=a.sibling}function nm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ii,a)}catch{}switch(a.tag){case 5:Lt||Ws(a,r);case 6:var c=St,d=Vn;St=null,Kr(n,r,a),St=c,Vn=d,St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?Ac(n.parentNode,a):n.nodeType===1&&Ac(n,a),Pn(n)):Ac(St,a.stateNode));break;case 4:c=St,d=Vn,St=a.stateNode.containerInfo,Vn=!0,Kr(n,r,a),St=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&uh(a,r,_),d=d.next}while(d!==c)}Kr(n,r,a);break;case 1:if(!Lt&&(Ws(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){tt(a,r,T)}Kr(n,r,a);break;case 21:Kr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Kr(n,r,a),Lt=c):Kr(n,r,a);break;default:Kr(n,r,a)}}function rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Qv),r.forEach(function(c){var d=sE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Vn=!1;break e;case 3:St=T.stateNode.containerInfo,Vn=!0;break e;case 4:St=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(St===null)throw Error(t(160));nm(p,_,d),St=null,Vn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){tt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(r,n),Kn(n),c&4){try{oa(3,n,n.return),jl(3,n)}catch(se){tt(n,n.return,se)}try{oa(5,n,n.return)}catch(se){tt(n,n.return,se)}}break;case 1:xn(r,n),Kn(n),c&512&&a!==null&&Ws(a,a.return);break;case 5:if(xn(r,n),Kn(n),c&512&&a!==null&&Ws(a,a.return),n.flags&32){var d=n.stateNode;try{Nr(d,"")}catch(se){tt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&yo(d,p),Ro(T,_);var F=Ro(T,p);for(_=0;_<P.length;_+=2){var q=P[_],Q=P[_+1];q==="style"?Io(d,Q):q==="dangerouslySetInnerHTML"?wo(d,Q):q==="children"?Nr(d,Q):he(d,q,Q,F)}switch(T){case"input":_o(d,p);break;case"textarea":os(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?rr(d,!!p.multiple,te,!1):H!==!!p.multiple&&(p.defaultValue!=null?rr(d,!!p.multiple,p.defaultValue,!0):rr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Qo]=p}catch(se){tt(n,n.return,se)}}break;case 6:if(xn(r,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){tt(n,n.return,se)}}break;case 3:if(xn(r,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(se){tt(n,n.return,se)}break;case 4:xn(r,n),Kn(n);break;case 13:xn(r,n),Kn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(mh=He())),c&4&&rm(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||q,xn(r,n),Lt=F):xn(r,n),Kn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&(n.mode&1)!==0)for(re=n,q=n.child;q!==null;){for(Q=re=q;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:oa(4,H,H.return);break;case 1:Ws(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){tt(c,a,se)}}break;case 5:Ws(H,H.return);break;case 22:if(H.memoizedState!==null){am(Q);continue}}te!==null?(te.return=H,re=te):am(Q)}q=q.sibling}e:for(q=null,Q=n;;){if(Q.tag===5){if(q===null){q=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,P=Q.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=To("display",_))}catch(se){tt(n,n.return,se)}}}else if(Q.tag===6){if(q===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(se){tt(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;q===Q&&(q=null),Q=Q.return}q===Q&&(q=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:xn(r,n),Kn(n),c&4&&rm(n);break;case 21:break;default:xn(r,n),Kn(n)}}function Kn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Nr(d,""),c.flags&=-33);var p=tm(n);dh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=tm(n);hh(n,T,_);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Xv(n,r,a){re=n,sm(n)}function sm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ul;if(!_){var T=d.alternate,P=T!==null&&T.memoizedState!==null||Lt;T=Ul;var F=Lt;if(Ul=_,(Lt=P)&&!F)for(re=d;re!==null;)_=re,P=_.child,_.tag===22&&_.memoizedState!==null?lm(d):P!==null?(P.return=_,re=P):lm(d);for(;p!==null;)re=p,sm(p),p=p.sibling;re=d,Ul=T,Lt=F}om(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):om(n)}}function om(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ap(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ap(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var Q=q.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&ch(r)}catch(H){tt(r,r.return,H)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function am(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function lm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{jl(4,r)}catch(P){tt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){tt(r,d,P)}}var p=r.return;try{ch(r)}catch(P){tt(r,p,P)}break;case 5:var _=r.return;try{ch(r)}catch(P){tt(r,_,P)}}}catch(P){tt(r,r.return,P)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var Jv=Math.ceil,Bl=Ee.ReactCurrentDispatcher,fh=Ee.ReactCurrentOwner,yn=Ee.ReactCurrentBatchConfig,xe=0,vt=null,at=null,At=0,an=0,Hs=zr(0),ft=0,aa=null,bi=0,zl=0,ph=0,la=null,Yt=null,mh=0,qs=1/0,_r=null,$l=!1,gh=null,Gr=null,Wl=!1,Qr=null,Hl=0,ua=0,yh=null,ql=-1,Kl=0;function Wt(){return(xe&6)!==0?He():ql!==-1?ql:ql=He()}function Yr(n){return(n.mode&1)===0?1:(xe&2)!==0&&At!==0?At&-At:Lv.transition!==null?(Kl===0&&(Kl=Ai()),Kl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:bo(n.type)),n)}function On(n,r,a,c){if(50<ua)throw ua=0,yh=null,Error(t(185));Or(n,a,c),((xe&2)===0||n!==vt)&&(n===vt&&((xe&2)===0&&(zl|=a),ft===4&&Xr(n,At)),Xt(n,c),a===1&&xe===0&&(r.mode&1)===0&&(qs=He()+500,wl&&Wr()))}function Xt(n,r){var a=n.callbackNode;or(n,r);var c=Si(n,n===vt?At:0);if(c===0)a!==null&&Vo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Vo(a),r===1)n.tag===0?Ov(cm.bind(null,n)):Qf(cm.bind(null,n)),Nv(function(){(xe&6)===0&&Wr()}),a=null;else{switch(Mr(c)){case 1:a=Ti;break;case 4:a=Dr;break;case 16:a=cn;break;case 536870912:a=Ka;break;default:a=cn}a=_m(a,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function um(n,r){if(ql=-1,Kl=0,(xe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var c=Si(n,n===vt?At:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Gl(n,c);else{r=c;var d=xe;xe|=2;var p=dm();(vt!==n||At!==r)&&(_r=null,qs=He()+500,Ui(n,r));do try{tE();break}catch(T){hm(n,T)}while(!0);Lc(),Bl.current=p,xe=d,at!==null?r=0:(vt=null,At=0,r=ft)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=_h(n,d))),r===1)throw a=aa,Ui(n,0),Xr(n,c),Xt(n,He()),a;if(r===6)Xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Zv(d)&&(r=Gl(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=_h(n,p))),r===1))throw a=aa,Ui(n,0),Xr(n,c),Xt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:ji(n,Yt,_r);break;case 3:if(Xr(n,c),(c&130023424)===c&&(r=mh+500-He(),10<r)){if(Si(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Sc(ji.bind(null,n,Yt,_r),r);break}ji(n,Yt,_r);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Jv(c/1960))-c,10<c){n.timeoutHandle=Sc(ji.bind(null,n,Yt,_r),c);break}ji(n,Yt,_r);break;case 5:ji(n,Yt,_r);break;default:throw Error(t(329))}}}return Xt(n,He()),n.callbackNode===a?um.bind(null,n):null}function _h(n,r){var a=la;return n.current.memoizedState.isDehydrated&&(Ui(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Yt,Yt=a,r!==null&&vh(r)),n}function vh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function Zv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!kn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~ph,r&=~zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function cm(n){if((xe&6)!==0)throw Error(t(327));Ks();var r=Si(n,0);if((r&1)===0)return Xt(n,He()),null;var a=Gl(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=_h(n,c))}if(a===1)throw a=aa,Ui(n,0),Xr(n,r),Xt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ji(n,Yt,_r),Xt(n,He()),null}function Eh(n,r){var a=xe;xe|=1;try{return n(r)}finally{xe=a,xe===0&&(qs=He()+500,wl&&Wr())}}function Fi(n){Qr!==null&&Qr.tag===0&&(xe&6)===0&&Ks();var r=xe;xe|=1;var a=yn.transition,c=Ce;try{if(yn.transition=null,Ce=1,n)return n()}finally{Ce=c,yn.transition=a,xe=r,(xe&6)===0&&Wr()}}function wh(){an=Hs.current,Ge(Hs)}function Ui(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kv(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:zs(),Ge(Kt),Ge(Vt),$c();break;case 5:Bc(c);break;case 4:zs();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Mc(c.type._context);break;case 22:case 23:wh()}a=a.return}if(vt=n,at=n=Jr(n.current,null),At=an=r,ft=0,aa=null,ph=zl=bi=0,Yt=la=null,Oi!==null){for(r=0;r<Oi.length;r++)if(a=Oi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Oi=null}return n}function hm(n,r){do{var a=at;try{if(Lc(),Dl.current=Ll,Vl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(Mi=0,_t=dt=Ze=null,ta=!1,na=0,fh.current=null,a===null||a.return===null){ft=1,aa=r,at=null;break}e:{var p=n,_=a.return,T=a,P=r;if(r=At,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,q=T,Q=q.tag;if((q.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=q.alternate;H?(q.updateQueue=H.updateQueue,q.memoizedState=H.memoizedState,q.lanes=H.lanes):(q.updateQueue=null,q.memoizedState=null)}var te=Mp(_);if(te!==null){te.flags&=-257,bp(te,_,T,p,r),te.mode&1&&Lp(p,F,r),r=te,P=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(P),r.updateQueue=se}else ie.add(P);break e}else{if((r&1)===0){Lp(p,F,r),Th();break e}P=Error(t(426))}}else if(Ye&&T.mode&1){var it=Mp(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),bp(it,_,T,p,r),xc($s(P,T));break e}}p=P=$s(P,T),ft!==4&&(ft=2),la===null?la=[p]:la.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=xp(p,P,r);op(p,M);break e;case 1:T=P;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gr===null||!Gr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Op(p,T,r);op(p,Y);break e}}p=p.return}while(p!==null)}pm(a)}catch(le){r=le,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function dm(){var n=Bl.current;return Bl.current=Ll,n===null?Ll:n}function Th(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||(bi&268435455)===0&&(zl&268435455)===0||Xr(vt,At)}function Gl(n,r){var a=xe;xe|=2;var c=dm();(vt!==n||At!==r)&&(_r=null,Ui(n,r));do try{eE();break}catch(d){hm(n,d)}while(!0);if(Lc(),xe=a,Bl.current=c,at!==null)throw Error(t(261));return vt=null,At=0,ft}function eE(){for(;at!==null;)fm(at)}function tE(){for(;at!==null&&!Ha();)fm(at)}function fm(n){var r=ym(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?pm(n):at=r,fh.current=null}function pm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Kv(a,r,an),a!==null){at=a;return}}else{if(a=Gv(a,r),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}if(r=r.sibling,r!==null){at=r;return}at=r=n}while(r!==null);ft===0&&(ft=5)}function ji(n,r,a){var c=Ce,d=yn.transition;try{yn.transition=null,Ce=1,nE(n,r,a,c)}finally{yn.transition=d,Ce=c}return null}function nE(n,r,a,c){do Ks();while(Qr!==null);if((xe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if($e(n,p),n===vt&&(at=vt=null,At=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wl||(Wl=!0,_m(cn,function(){return Ks(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var _=Ce;Ce=1;var T=xe;xe|=4,fh.current=null,Yv(n,a),im(a,n),Tv(Tc),Fr=!!wc,Tc=wc=null,n.current=a,Xv(a),sc(),xe=T,Ce=_,yn.transition=p}else n.current=a;if(Wl&&(Wl=!1,Qr=n,Hl=d),p=n.pendingLanes,p===0&&(Gr=null),Ga(a.stateNode),Xt(n,He()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($l)throw $l=!1,n=gh,gh=null,n;return(Hl&1)!==0&&n.tag!==0&&Ks(),p=n.pendingLanes,(p&1)!==0?n===yh?ua++:(ua=0,yh=n):ua=0,Wr(),null}function Ks(){if(Qr!==null){var n=Mr(Hl),r=yn.transition,a=Ce;try{if(yn.transition=null,Ce=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,Hl=0,(xe&6)!==0)throw Error(t(331));var d=xe;for(xe|=4,re=n.current;re!==null;){var p=re,_=p.child;if((re.flags&16)!==0){var T=p.deletions;if(T!==null){for(var P=0;P<T.length;P++){var F=T[P];for(re=F;re!==null;){var q=re;switch(q.tag){case 0:case 11:case 15:oa(8,q,p)}var Q=q.child;if(Q!==null)Q.return=q,re=Q;else for(;re!==null;){q=re;var H=q.sibling,te=q.return;if(Zp(q),q===F){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var it=se.sibling;se.sibling=null,se=it}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:oa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:jl(9,T)}}catch(le){tt(T,T.return,le)}if(T===_){re=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,re=Y;break e}re=T.return}}if(xe=d,Wr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ii,n)}catch{}c=!0}return c}finally{Ce=a,yn.transition=r}}return!1}function mm(n,r,a){r=$s(a,r),r=xp(n,r,1),n=qr(n,r,1),r=Wt(),n!==null&&(Or(n,1,r),Xt(n,r))}function tt(n,r,a){if(n.tag===3)mm(n,n,a);else for(;r!==null;){if(r.tag===3){mm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=$s(a,n),n=Op(r,n,1),r=qr(r,n,1),n=Wt(),r!==null&&(Or(r,1,n),Xt(r,n));break}}r=r.return}}function rE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Wt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>He()-mh?Ui(n,0):ph|=a),Xt(n,r)}function gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=gs,gs<<=1,(gs&130023424)===0&&(gs=4194304)));var a=Wt();n=mr(n,r),n!==null&&(Or(n,r,a),Xt(n,a))}function iE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),gm(n,a)}function sE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),gm(n,a)}var ym;ym=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Qt=!1,qv(n,r,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ye&&(r.flags&1048576)!==0&&Yf(r,Il,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Fl(n,r),n=r.pendingProps;var d=Ls(r,Vt.current);Bs(r,a),d=qc(null,r,c,n,d,a);var p=Kc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(p=!0,El(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uc(r),d.updater=Ml,r.stateNode=d,d._reactInternals=r,Zc(r,c,n,a),r=rh(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&kc(r),$t(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Fl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=aE(c),n=Dn(c,n),d){case 0:r=nh(null,r,c,n,a);break e;case 1:r=$p(null,r,c,n,a);break e;case 11:r=Fp(null,r,c,n,a);break e;case 14:r=Up(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),nh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),$p(n,r,c,d,a);case 3:e:{if(Wp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,sp(n,r),kl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=$s(Error(t(423)),r),r=Hp(n,r,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),r),r=Hp(n,r,c,a,d);break e}else for(on=Br(r.stateNode.containerInfo.firstChild),sn=r,Ye=!0,Nn=null,a=rp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=yr(n,r,a);break e}$t(n,r,c,a)}r=r.child}return r;case 5:return lp(r),n===null&&Vc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Ic(c,d)?_=null:p!==null&&Ic(c,p)&&(r.flags|=32),zp(n,r),$t(n,r,_,a),r.child;case 6:return n===null&&Vc(r),null;case 13:return qp(n,r,a);case 4:return jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Us(r,null,c,a):$t(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Fp(n,r,c,d,a);case 7:return $t(n,r,r.pendingProps,a),r.child;case 8:return $t(n,r,r.pendingProps.children,a),r.child;case 12:return $t(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(Rl,c._currentValue),c._currentValue=_,p!==null)if(kn(p.value,_)){if(p.children===d.children&&!Kt.current){r=yr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=gr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?P.next=P:(P.next=q.next,q.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),bc(p.return,a,r),T.lanes|=a;break}P=P.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),bc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}$t(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Bs(r,a),d=mn(d),c=c(d),r.flags|=1,$t(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Up(n,r,c,d,a);case 15:return jp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Fl(n,r),r.tag=1,Gt(c)?(n=!0,El(r)):n=!1,Bs(r,a),Dp(r,c,d),Zc(r,c,d,a),rh(null,r,c,!0,n,a);case 19:return Gp(n,r,a);case 22:return Bp(n,r,a)}throw Error(t(156,r.tag))};function _m(n,r){return ps(n,r)}function oE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new oE(n,r,a,c)}function Ih(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aE(n){if(typeof n=="function")return Ih(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Nt)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Ih(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Bi(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=_n(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=p,n;case nt:return n=_n(19,a,r,d),n.elementType=nt,n.lanes=p,n;case ze:return Yl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:_=10;break e;case k:_=9;break e;case O:_=11;break e;case Nt:_=14;break e;case Dt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Bi(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function Yl(n,r,a,c){return n=_n(22,n,c,r),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Sh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Ah(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function lE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rh(n,r,a,c,d,p,_,T,P){return n=new lE(n,r,a,T,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(p),n}function uE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function vm(n){if(!n)return $r;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return Kf(n,a,r)}return r}function Em(n,r,a,c,d,p,_,T,P){return n=Rh(a,c,!0,n,d,p,_,T,P),n.context=vm(null),a=n.current,c=Wt(),d=Yr(a),p=gr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Or(n,d,c),Xt(n,c),n}function Xl(n,r,a,c){var d=r.current,p=Wt(),_=Yr(d);return a=vm(a),r.context===null?r.context=a:r.pendingContext=a,r=gr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(On(n,d,_,p),Cl(n,d,_)),_}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ph(n,r){wm(n,r),(n=n.alternate)&&wm(n,r)}function cE(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ch(n){this._internalRoot=n}Zl.prototype.render=Ch.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},Zl.prototype.unmount=Ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Fi(function(){Xl(null,n,null,null)}),r[hr]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Za();n={blockedOn:null,target:n,priority:r};for(var a=0;a<jn.length&&r!==0&&r<jn[a].priority;a++);jn.splice(a,0,n),a===0&&nl(n)}};function kh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function hE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Jl(_);p.call(F)}}var _=Em(r,c,n,0,null,!1,!1,"",Im);return n._reactRootContainer=_,n[hr]=_.current,Ko(n.nodeType===8?n.parentNode:n),Fi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Jl(P);T.call(F)}}var P=Rh(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=P,n[hr]=P.current,Ko(n.nodeType===8?n.parentNode:n),Fi(function(){Xl(r,P,a,c)}),P}function tu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var P=Jl(_);T.call(P)}}Xl(r,_,n,d)}else _=hE(a,r,n,d,c);return Jl(_)}Xa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(Lr(r,a|1),Xt(r,He()),(xe&6)===0&&(qs=He()+500,Wr()))}break;case 13:Fi(function(){var c=mr(n,1);if(c!==null){var d=Wt();On(c,n,1,d)}}),Ph(n,1)}},ys=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var a=Wt();On(r,n,134217728,a)}Ph(n,134217728)}},Ja=function(n){if(n.tag===13){var r=Yr(n),a=mr(n,r);if(a!==null){var c=Wt();On(a,n,r,c)}Ph(n,r)}},Za=function(){return Ce},el=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},ls=function(n,r,a){switch(r){case"input":if(_o(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=_l(c);if(!d)throw Error(t(90));ns(c),_o(c,d)}}}break;case"textarea":os(n,a);break;case"select":r=a.value,r!=null&&rr(n,!!a.multiple,r,!1)}},_i=Eh,Co=Fi;var dE={usingClientEntryPoint:!1,Events:[Yo,xs,_l,Fn,Po,Eh]},ca={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Do(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ii=nu.inject(fE),en=nu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE,Jt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kh(r))throw Error(t(200));return uE(n,r,null,a)},Jt.createRoot=function(n,r){if(!kh(n))throw Error(t(299));var a=!1,c="",d=Tm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Rh(n,1,!1,null,null,a,!1,c,d),n[hr]=r.current,Ko(n.nodeType===8?n.parentNode:n),new Ch(r)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Do(r),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Fi(n)},Jt.hydrate=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!0,a)},Jt.hydrateRoot=function(n,r,a){if(!kh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Em(r,null,n,1,a??null,d,!1,p,_),n[hr]=r.current,Ko(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Zl(r)},Jt.render=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!1,a)},Jt.unmountComponentAtNode=function(n){if(!eu(n))throw Error(t(40));return n._reactRootContainer?(Fi(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Eh,Jt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tu(n,r,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Dm;function Qg(){if(Dm)return Vh.exports;Dm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Vh.exports=SE(),Vh.exports}var Vm;function AE(){if(Vm)return ru;Vm=1;var i=Qg();return ru.createRoot=i.createRoot,ru.hydrateRoot=i.hydrateRoot,ru}var RE=AE();Qg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},wa.apply(this,arguments)}var $i;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})($i||($i={}));const xm="popstate";function PE(i){i===void 0&&(i={});function e(s,o){let{pathname:u,search:h,hash:m}=s.location;return Kh("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Yg(o)}return kE(e,t,null,i)}function Gn(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function CE(){return Math.random().toString(36).substr(2,8)}function Om(i,e){return{usr:i.state,key:i.key,idx:e}}function Kh(i,e,t,s){return t===void 0&&(t=null),wa({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Fu(e):e,{state:t,key:e&&e.key||s||CE()})}function Yg(i){let{pathname:e="/",search:t="",hash:s=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Fu(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substr(s),i=i.substr(0,s)),i&&(e.pathname=i)}return e}function kE(i,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,m=$i.Pop,g=null,v=w();v==null&&(v=0,h.replaceState(wa({},h.state,{idx:v}),""));function w(){return(h.state||{idx:null}).idx}function C(){m=$i.Pop;let U=w(),Z=U==null?null:U-v;v=U,g&&g({action:m,location:$.location,delta:Z})}function V(U,Z){m=$i.Push;let ee=Kh($.location,U,Z);v=w()+1;let he=Om(ee,v),Ee=$.createHref(ee);try{h.pushState(he,"",Ee)}catch(Ue){if(Ue instanceof DOMException&&Ue.name==="DataCloneError")throw Ue;o.location.assign(Ee)}u&&g&&g({action:m,location:$.location,delta:1})}function B(U,Z){m=$i.Replace;let ee=Kh($.location,U,Z);v=w();let he=Om(ee,v),Ee=$.createHref(ee);h.replaceState(he,"",Ee),u&&g&&g({action:m,location:$.location,delta:0})}function W(U){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof U=="string"?U:Yg(U);return ee=ee.replace(/ $/,"%20"),Gn(Z,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,Z)}let $={get action(){return m},get location(){return i(o,h)},listen(U){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(xm,C),g=U,()=>{o.removeEventListener(xm,C),g=null}},createHref(U){return e(o,U)},createURL:W,encodeLocation(U){let Z=W(U);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:V,replace:B,go(U){return h.go(U)}};return $}var Lm;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Lm||(Lm={}));function NE(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function DE(i,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?Fu(i):i;return{pathname:t?t.startsWith("/")?t:VE(t,e):e,search:bE(s),hash:FE(o)}}function VE(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Lh(i,e,t,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xE(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function OE(i,e){let t=xE(i);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function LE(i,e,t,s){s===void 0&&(s=!1);let o;typeof i=="string"?o=Fu(i):(o=wa({},i),Gn(!o.pathname||!o.pathname.includes("?"),Lh("?","pathname","search",o)),Gn(!o.pathname||!o.pathname.includes("#"),Lh("#","pathname","hash",o)),Gn(!o.search||!o.search.includes("#"),Lh("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=t;else{let C=e.length-1;if(!s&&h.startsWith("..")){let V=h.split("/");for(;V[0]==="..";)V.shift(),C-=1;o.pathname=V.join("/")}m=C>=0?e[C]:"/"}let g=DE(o,m),v=h&&h!=="/"&&h.endsWith("/"),w=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||w)&&(g.pathname+="/"),g}const ME=i=>i.join("/").replace(/\/\/+/g,"/"),bE=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,FE=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Xg=["post","put","patch","delete"];new Set(Xg);const UE=["get",...Xg];new Set(UE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},vu.apply(this,arguments)}const Jg=ge.createContext(null),wd=ge.createContext(null),Td=ge.createContext(null),Id=ge.createContext({outlet:null,matches:[],isDataRoute:!1});function Sd(){return ge.useContext(Td)!=null}function jE(){return Sd()||Gn(!1),ge.useContext(Td).location}function Zg(i){ge.useContext(wd).static||ge.useLayoutEffect(i)}function ey(){let{isDataRoute:i}=ge.useContext(Id);return i?HE():BE()}function BE(){Sd()||Gn(!1);let i=ge.useContext(Jg),{basename:e,future:t,navigator:s}=ge.useContext(wd),{matches:o}=ge.useContext(Id),{pathname:u}=jE(),h=JSON.stringify(OE(o,t.v7_relativeSplatPath)),m=ge.useRef(!1);return Zg(()=>{m.current=!0}),ge.useCallback(function(v,w){if(w===void 0&&(w={}),!m.current)return;if(typeof v=="number"){s.go(v);return}let C=LE(v,JSON.parse(h),u,w.relative==="path");i==null&&e!=="/"&&(C.pathname=C.pathname==="/"?e:ME([e,C.pathname])),(w.replace?s.replace:s.push)(C,w.state,w)},[e,s,h,u,i])}var ty=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(ty||{}),ny=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(ny||{});function zE(i){let e=ge.useContext(Jg);return e||Gn(!1),e}function $E(i){let e=ge.useContext(Id);return e||Gn(!1),e}function WE(i){let e=$E(),t=e.matches[e.matches.length-1];return t.route.id||Gn(!1),t.route.id}function HE(){let{router:i}=zE(ty.UseNavigateStable),e=WE(ny.UseNavigateStable),t=ge.useRef(!1);return Zg(()=>{t.current=!0}),ge.useCallback(function(o,u){u===void 0&&(u={}),t.current&&(typeof o=="number"?i.navigate(o):i.navigate(o,vu({fromRouteId:e},u)))},[i,e])}function qE(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function KE(i){let{basename:e="/",children:t=null,location:s,navigationType:o=$i.Pop,navigator:u,static:h=!1,future:m}=i;Sd()&&Gn(!1);let g=e.replace(/^\/*/,"/"),v=ge.useMemo(()=>({basename:g,navigator:u,static:h,future:vu({v7_relativeSplatPath:!1},m)}),[g,m,u,h]);typeof s=="string"&&(s=Fu(s));let{pathname:w="/",search:C="",hash:V="",state:B=null,key:W="default"}=s,$=ge.useMemo(()=>{let U=NE(w,g);return U==null?null:{location:{pathname:U,search:C,hash:V,state:B,key:W},navigationType:o}},[g,w,C,V,B,W,o]);return $==null?null:ge.createElement(wd.Provider,{value:v},ge.createElement(Td.Provider,{children:t,value:$}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const GE="6";try{window.__reactRouterVersion=GE}catch{}const QE="startTransition",Mm=wE[QE];function YE(i){let{basename:e,children:t,future:s,window:o}=i,u=ge.useRef();u.current==null&&(u.current=PE({window:o,v5Compat:!0}));let h=u.current,[m,g]=ge.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},w=ge.useCallback(C=>{v&&Mm?Mm(()=>g(C)):g(C)},[g,v]);return ge.useLayoutEffect(()=>h.listen(w),[h,w]),ge.useEffect(()=>qE(s),[s]),ge.createElement(KE,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:h,future:s})}var bm;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(bm||(bm={}));var Fm;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Fm||(Fm={}));var Um={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},XE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},iy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let V=(m&15)<<2|v>>6,B=v&63;g||(B=64,h||(V=64)),s.push(t[w],t[C],t[V],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):XE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new JE;const V=u<<2|m>>4;if(s.push(V),v!==64){const B=m<<4&240|v>>2;if(s.push(B),C!==64){const W=v<<6&192|C;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class JE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZE=function(i){const e=ry(i);return iy.encodeByteArray(e,!0)},Eu=function(i){return ZE(i).replace(/\./g,"")},sy=function(i){try{return iy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tw=()=>ew().__FIREBASE_DEFAULTS__,nw=()=>{if(typeof process>"u"||typeof Um>"u")return;const i=Um.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},rw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sy(i[1]);return e&&JSON.parse(e)},Uu=()=>{try{return tw()||nw()||rw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oy=i=>{var e,t;return(t=(e=Uu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},iw=i=>{const e=oy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ay=()=>{var i;return(i=Uu())===null||i===void 0?void 0:i.config},ly=i=>{var e;return(e=Uu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ow(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Eu(JSON.stringify(t)),Eu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function lw(){var i;const e=(i=Uu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function fw(){return!lw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pw(){try{return typeof indexedDB=="object"}catch{return!1}}function mw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=gw,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?yw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,m,s)}}function yw(i,e){return i.replace(_w,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const _w=/\{\$([^}]+)}/g;function vw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function wu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(jm(u)&&jm(h)){if(!wu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function jm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ew(i,e){const t=new ww(i,e);return t.subscribe.bind(t)}class ww{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Tw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Mh(){}/**
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
 */function jt(i){return i&&i._delegate?i._delegate:i}class Gi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zi="[DEFAULT]";/**
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
 */class Iw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new sw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aw(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sw(i){return i===zi?void 0:i}function Aw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Iw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Pw={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Cw=ke.INFO,kw={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Nw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=kw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ad{constructor(e){this.name=e,this._logLevel=Cw,this._logHandler=Nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Dw=(i,e)=>e.some(t=>i instanceof t);let Bm,zm;function Vw(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xw(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uy=new WeakMap,Gh=new WeakMap,cy=new WeakMap,bh=new WeakMap,Rd=new WeakMap;function Ow(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&uy.set(t,i)}).catch(()=>{}),Rd.set(e,i),e}function Lw(i){if(Gh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Gh.set(i,e)}let Qh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Gh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||cy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Mw(i){Qh=i(Qh)}function bw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Fh(this),e,...t);return cy.set(s,e.sort?e.sort():[e]),si(s)}:xw().includes(i)?function(...e){return i.apply(Fh(this),e),si(uy.get(this))}:function(...e){return si(i.apply(Fh(this),e))}}function Fw(i){return typeof i=="function"?bw(i):(i instanceof IDBTransaction&&Lw(i),Dw(i,Vw())?new Proxy(i,Qh):i)}function si(i){if(i instanceof IDBRequest)return Ow(i);if(bh.has(i))return bh.get(i);const e=Fw(i);return e!==i&&(bh.set(i,e),Rd.set(e,i)),e}const Fh=i=>Rd.get(i);function Uw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(si(h.result),g.oldVersion,g.newVersion,si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const jw=["get","getKey","getAll","getAllKeys","count"],Bw=["put","add","delete","clear"],Uh=new Map;function $m(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Bw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||jw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Uh.set(e,u),u}Mw(i=>({...i,get:(e,t,s)=>$m(e,t)||i.get(e,t,s),has:(e,t)=>!!$m(e,t)||i.has(e,t)}));/**
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
 */class zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($w(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $w(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Wm="0.10.13";/**
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
 */const Sr=new Ad("@firebase/app"),Ww="@firebase/app-compat",Hw="@firebase/analytics-compat",qw="@firebase/analytics",Kw="@firebase/app-check-compat",Gw="@firebase/app-check",Qw="@firebase/auth",Yw="@firebase/auth-compat",Xw="@firebase/database",Jw="@firebase/data-connect",Zw="@firebase/database-compat",e0="@firebase/functions",t0="@firebase/functions-compat",n0="@firebase/installations",r0="@firebase/installations-compat",i0="@firebase/messaging",s0="@firebase/messaging-compat",o0="@firebase/performance",a0="@firebase/performance-compat",l0="@firebase/remote-config",u0="@firebase/remote-config-compat",c0="@firebase/storage",h0="@firebase/storage-compat",d0="@firebase/firestore",f0="@firebase/vertexai-preview",p0="@firebase/firestore-compat",m0="firebase",g0="10.14.1";/**
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
 */const Xh="[DEFAULT]",y0={[Yh]:"fire-core",[Ww]:"fire-core-compat",[qw]:"fire-analytics",[Hw]:"fire-analytics-compat",[Gw]:"fire-app-check",[Kw]:"fire-app-check-compat",[Qw]:"fire-auth",[Yw]:"fire-auth-compat",[Xw]:"fire-rtdb",[Jw]:"fire-data-connect",[Zw]:"fire-rtdb-compat",[e0]:"fire-fn",[t0]:"fire-fn-compat",[n0]:"fire-iid",[r0]:"fire-iid-compat",[i0]:"fire-fcm",[s0]:"fire-fcm-compat",[o0]:"fire-perf",[a0]:"fire-perf-compat",[l0]:"fire-rc",[u0]:"fire-rc-compat",[c0]:"fire-gcs",[h0]:"fire-gcs-compat",[d0]:"fire-fst",[p0]:"fire-fst-compat",[f0]:"fire-vertex","fire-js":"fire-js",[m0]:"fire-js-all"};/**
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
 */const Tu=new Map,_0=new Map,Jh=new Map;function Hm(i,e){try{i.container.addComponent(e)}catch(t){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Jh.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,i);for(const t of Tu.values())Hm(t,i);for(const t of _0.values())Hm(t,i);return!0}function Pd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Er(i){return i.settings!==void 0}/**
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
 */const v0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new Na("app","Firebase",v0);/**
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
 */class E0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
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
 */const ho=g0;function hy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=ay()),!t)throw oi.create("no-options");const u=Tu.get(o);if(u){if(wu(t,u.options)&&wu(s,u.config))return u;throw oi.create("duplicate-app",{appName:o})}const h=new Rw(o);for(const g of Jh.values())h.addComponent(g);const m=new E0(t,s,h);return Tu.set(o,m),m}function dy(i=Xh){const e=Tu.get(i);if(!e&&i===Xh&&ay())return hy();if(!e)throw oi.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let o=(s=y0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(m.join(" "));return}no(new Gi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const w0="firebase-heartbeat-database",T0=1,Ta="firebase-heartbeat-store";let jh=null;function fy(){return jh||(jh=Uw(w0,T0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ta)}catch(t){console.warn(t)}}}}).catch(i=>{throw oi.create("idb-open",{originalErrorMessage:i.message})})),jh}async function I0(i){try{const t=(await fy()).transaction(Ta),s=await t.objectStore(Ta).get(py(i));return await t.done,s}catch(e){if(e instanceof Cr)Sr.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(t.message)}}}async function qm(i,e){try{const s=(await fy()).transaction(Ta,"readwrite");await s.objectStore(Ta).put(e,py(i)),await s.done}catch(t){if(t instanceof Cr)Sr.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sr.warn(s.message)}}}function py(i){return`${i.name}!${i.options.appId}`}/**
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
 */const S0=1024,A0=30*24*60*60*1e3;class R0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new C0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Km();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=A0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Km(),{heartbeatsToSend:s,unsentEntries:o}=P0(this._heartbeatsCache.heartbeats),u=Eu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Sr.warn(t),""}}}function Km(){return new Date().toISOString().substring(0,10)}function P0(i,e=S0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Gm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Gm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class C0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pw()?mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await I0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Gm(i){return Eu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function k0(i){no(new Gi("platform-logger",e=>new zw(e),"PRIVATE")),no(new Gi("heartbeat",e=>new R0(e),"PRIVATE")),ai(Yh,Wm,i),ai(Yh,Wm,"esm2017"),ai("fire-js","")}k0("");var Qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,my;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function A(){}A.prototype=I.prototype,D.D=I.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(R,k,O){for(var S=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)S[nt-2]=arguments[nt];return I.prototype[k].apply(R,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,A){A||(A=0);var R=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)R[k]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(k=0;16>k;++k)R[k]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=D.g[0],A=D.g[1],k=D.g[2];var O=D.g[3],S=I+(O^A&(k^O))+R[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(k^I&(A^k))+R[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(A^O&(I^A))+R[2]+606105819&4294967295,k=O+(S<<17&4294967295|S>>>15),S=A+(I^k&(O^I))+R[3]+3250441966&4294967295,A=k+(S<<22&4294967295|S>>>10),S=I+(O^A&(k^O))+R[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(k^I&(A^k))+R[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(A^O&(I^A))+R[6]+2821735955&4294967295,k=O+(S<<17&4294967295|S>>>15),S=A+(I^k&(O^I))+R[7]+4249261313&4294967295,A=k+(S<<22&4294967295|S>>>10),S=I+(O^A&(k^O))+R[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(k^I&(A^k))+R[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(A^O&(I^A))+R[10]+4294925233&4294967295,k=O+(S<<17&4294967295|S>>>15),S=A+(I^k&(O^I))+R[11]+2304563134&4294967295,A=k+(S<<22&4294967295|S>>>10),S=I+(O^A&(k^O))+R[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(k^I&(A^k))+R[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(A^O&(I^A))+R[14]+2792965006&4294967295,k=O+(S<<17&4294967295|S>>>15),S=A+(I^k&(O^I))+R[15]+1236535329&4294967295,A=k+(S<<22&4294967295|S>>>10),S=I+(k^O&(A^k))+R[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^k&(I^A))+R[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^A&(O^I))+R[11]+643717713&4294967295,k=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(k^O))+R[0]+3921069994&4294967295,A=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(A^k))+R[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^k&(I^A))+R[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^A&(O^I))+R[15]+3634488961&4294967295,k=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(k^O))+R[4]+3889429448&4294967295,A=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(A^k))+R[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^k&(I^A))+R[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^A&(O^I))+R[3]+4107603335&4294967295,k=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(k^O))+R[8]+1163531501&4294967295,A=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(A^k))+R[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^k&(I^A))+R[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^A&(O^I))+R[7]+1735328473&4294967295,k=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(k^O))+R[12]+2368359562&4294967295,A=k+(S<<20&4294967295|S>>>12),S=I+(A^k^O)+R[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^k)+R[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^A)+R[11]+1839030562&4294967295,k=O+(S<<16&4294967295|S>>>16),S=A+(k^O^I)+R[14]+4259657740&4294967295,A=k+(S<<23&4294967295|S>>>9),S=I+(A^k^O)+R[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^k)+R[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^A)+R[7]+4139469664&4294967295,k=O+(S<<16&4294967295|S>>>16),S=A+(k^O^I)+R[10]+3200236656&4294967295,A=k+(S<<23&4294967295|S>>>9),S=I+(A^k^O)+R[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^k)+R[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^A)+R[3]+3572445317&4294967295,k=O+(S<<16&4294967295|S>>>16),S=A+(k^O^I)+R[6]+76029189&4294967295,A=k+(S<<23&4294967295|S>>>9),S=I+(A^k^O)+R[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^k)+R[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^A)+R[15]+530742520&4294967295,k=O+(S<<16&4294967295|S>>>16),S=A+(k^O^I)+R[2]+3299628645&4294967295,A=k+(S<<23&4294967295|S>>>9),S=I+(k^(A|~O))+R[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~k))+R[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~A))+R[14]+2878612391&4294967295,k=O+(S<<15&4294967295|S>>>17),S=A+(O^(k|~I))+R[5]+4237533241&4294967295,A=k+(S<<21&4294967295|S>>>11),S=I+(k^(A|~O))+R[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~k))+R[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~A))+R[10]+4293915773&4294967295,k=O+(S<<15&4294967295|S>>>17),S=A+(O^(k|~I))+R[1]+2240044497&4294967295,A=k+(S<<21&4294967295|S>>>11),S=I+(k^(A|~O))+R[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~k))+R[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~A))+R[6]+2734768916&4294967295,k=O+(S<<15&4294967295|S>>>17),S=A+(O^(k|~I))+R[13]+1309151649&4294967295,A=k+(S<<21&4294967295|S>>>11),S=I+(k^(A|~O))+R[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~k))+R[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~A))+R[2]+718787259&4294967295,k=O+(S<<15&4294967295|S>>>17),S=A+(O^(k|~I))+R[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var A=I-this.blockSize,R=this.B,k=this.h,O=0;O<I;){if(k==0)for(;O<=A;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(R[k++]=D.charCodeAt(O++),k==this.blockSize){o(this,R),k=0;break}}else for(;O<I;)if(R[k++]=D[O++],k==this.blockSize){o(this,R),k=0;break}}this.h=k,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var A=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=A&255,A/=256;for(this.u(D),D=Array(16),I=A=0;4>I;++I)for(var R=0;32>R;R+=8)D[A++]=this.g[I]>>>R&255;return D};function u(D,I){var A=m;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=I(D)}function h(D,I){this.h=I;for(var A=[],R=!0,k=D.length-1;0<=k;k--){var O=D[k]|0;R&&O==I||(A[k]=O,R=!1)}this.g=A}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return C;if(0>D)return U(v(-D));for(var I=[],A=1,R=0;D>=A;R++)I[R]=D/A|0,A*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return U(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),R=C,k=0;k<D.length;k+=8){var O=Math.min(8,D.length-k),S=parseInt(D.substring(k,k+O),I);8>O?(O=v(Math.pow(I,O)),R=R.j(O).add(v(S))):(R=R.j(A),R=R.add(v(S)))}return R}var C=g(0),V=g(1),B=g(16777216);i=h.prototype,i.m=function(){if($(this))return-U(this).m();for(var D=0,I=1,A=0;A<this.g.length;A++){var R=this.i(A);D+=(0<=R?R:4294967296+R)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(W(this))return"0";if($(this))return"-"+U(this).toString(D);for(var I=v(Math.pow(D,6)),A=this,R="";;){var k=Ee(A,I).g;A=Z(A,k.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=k,W(A))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function W(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function $(D){return D.h==-1}i.l=function(D){return D=Z(this,D),$(D)?-1:W(D)?0:1};function U(D){for(var I=D.g.length,A=[],R=0;R<I;R++)A[R]=~D.g[R];return new h(A,~D.h).add(V)}i.abs=function(){return $(this)?U(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],R=0,k=0;k<=I;k++){var O=R+(this.i(k)&65535)+(D.i(k)&65535),S=(O>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);R=S>>>16,O&=65535,S&=65535,A[k]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Z(D,I){return D.add(U(I))}i.j=function(D){if(W(this)||W(D))return C;if($(this))return $(D)?U(this).j(U(D)):U(U(this).j(D));if($(D))return U(this.j(U(D)));if(0>this.l(B)&&0>D.l(B))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,A=[],R=0;R<2*I;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<D.g.length;k++){var O=this.i(R)>>>16,S=this.i(R)&65535,nt=D.i(k)>>>16,Nt=D.i(k)&65535;A[2*R+2*k]+=S*Nt,ee(A,2*R+2*k),A[2*R+2*k+1]+=O*Nt,ee(A,2*R+2*k+1),A[2*R+2*k+1]+=S*nt,ee(A,2*R+2*k+1),A[2*R+2*k+2]+=O*nt,ee(A,2*R+2*k+2)}for(R=0;R<I;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=I;R<2*I;R++)A[R]=0;return new h(A,0)};function ee(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function he(D,I){this.g=D,this.h=I}function Ee(D,I){if(W(I))throw Error("division by zero");if(W(D))return new he(C,C);if($(D))return I=Ee(U(D),I),new he(U(I.g),U(I.h));if($(I))return I=Ee(D,U(I)),new he(U(I.g),I.h);if(30<D.g.length){if($(D)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=V,R=I;0>=R.l(D);)A=Ue(A),R=Ue(R);var k=Ie(A,1),O=Ie(R,1);for(R=Ie(R,2),A=Ie(A,2);!W(R);){var S=O.add(R);0>=S.l(D)&&(k=k.add(A),O=S),R=Ie(R,1),A=Ie(A,1)}return I=Z(D,k.j(I)),new he(k,I)}for(k=C;0<=D.l(I);){for(A=Math.max(1,Math.floor(D.m()/I.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=v(A),S=O.j(I);$(S)||0<S.l(D);)A-=R,O=v(A),S=O.j(I);W(O)&&(O=V),k=k.add(O),D=Z(D,S)}return new he(k,D)}i.A=function(D){return Ee(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)&D.i(R);return new h(A,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)|D.i(R);return new h(A,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)^D.i(R);return new h(A,this.h^D.h)};function Ue(D){for(var I=D.g.length+1,A=[],R=0;R<I;R++)A[R]=D.i(R)<<1|D.i(R-1)>>>31;return new h(A,D.h)}function Ie(D,I){var A=I>>5;I%=32;for(var R=D.g.length-A,k=[],O=0;O<R;O++)k[O]=0<I?D.i(O+A)>>>I|D.i(O+A+1)<<32-I:D.i(O+A);return new h(k,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,my=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,qi=h}).apply(typeof Qm<"u"?Qm:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gy,fa,yy,cu,Zh,_y,vy,Ey;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var j=y++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function C(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function V(l,f,y){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,V.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,j){for(var X=Array(arguments.length-2),je=2;je<arguments.length;je++)X[je-2]=arguments[je];return f.prototype[L].apply(E,X)}}function $(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function U(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,j=E.length||0;l.length=L+j;for(let X=0;X<j;X++)l[L+X]=E[X]}else l.push(E)}}class Z{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ee(l){return/^[\s\xa0]*$/.test(l)}function he(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ee(l){return Ee[" "](l),l}Ee[" "]=function(){};var Ue=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function Ie(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let j=0;j<A.length;j++)y=A[j],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function k(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=de;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,y){const E=Nt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new Z(()=>new Dt,l=>l.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,J=!1,de=new nt,ne=()=>{const l=m.Promise.resolve(void 0);ze=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=Nt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ae(l,f){if(ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ue){e:{try{Ee(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}W(Ae,ue);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function We(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function tr(l){this.src=l,this.g={},this.h=0}tr.prototype.add=function(l,f,y,E,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var X=kr(l,f,E,L);return-1<X?(f=l[X],y||(f.fa=!1)):(f=new We(f,this.src,j,!!E,L),f.fa=y,l.push(f)),f};function ns(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function kr(l,f,y,E){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==E)return L}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),rs={};function yo(l,f,y,E,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)yo(l,f[j],y,E,L);return null}return y=Eo(y),l&&l[be]?l.K(f,y,v(E)?!!E.capture:!1,L):_o(l,f,y,!1,E,L)}function _o(l,f,y,E,L,j){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,je=ss(l);if(je||(l[pi]=je=new tr(l)),y=je.add(f,y,E,X,j),y.proxy)return y;if(E=za(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Se||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(rr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function za(){function l(y){return f.call(l.src,l.listener,y)}const f=vo;return l}function is(l,f,y,E,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)is(l,f[j],y,E,L);else E=v(E)?!!E.capture:!!E,y=Eo(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],y=kr(j,y,E,L),-1<y&&(gt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ss(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,y,E,L)),(y=-1<l?f[l]:null)&&nr(y))}function nr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])ns(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(rr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ss(f))?(ns(y,l),y.h==0&&(y.src=null,f[pi]=null)):gt(l)}}}function rr(l){return l in rs?rs[l]:rs[l]="on"+l}function vo(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&nr(l),l=y.call(E,f)}return l}function ss(l){return l=l[pi],l instanceof tr?l:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eo(l){return typeof l=="function"?l:(l[os]||(l[os]=function(f){return l.handleEvent(f)}),l[os])}function ut(){z.call(this),this.i=new tr(this),this.M=this,this.F=null}W(ut,z),ut.prototype[be]=!0,ut.prototype.removeEventListener=function(l,f,y,E){is(this,l,f,y,E)};function ct(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ue(f,l);else if(f instanceof ue)f.target=f.target||l;else{var L=f;f=new ue(E,l),R(f,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var X=f.g=y[j];L=ir(X,E,!0,f)&&L}if(X=f.g=l,L=ir(X,E,!0,f)&&L,L=ir(X,E,!1,f)&&L,y)for(j=0;j<y.length;j++)X=f.g=y[j],L=ir(X,E,!1,f)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)gt(y[E]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ut.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function ir(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var X=f[j];if(X&&!X.da&&X.capture==y){var je=X.listener,ht=X.ha||X.src;X.fa&&ns(l.i,X),L=je.call(ht,E)!==!1&&L}}return L&&!E.defaultPrevented}function wo(l,f,y){if(typeof l=="function")y&&(l=V(l,y));else if(l&&typeof l.handleEvent=="function")l=V(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Nr(l){l.g=wo(()=>{l.g=null,l.i&&(l.i=!1,Nr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class mi extends z{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Nr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(l){z.call(this),this.h=l,this.g={}}W(gi,z);var To=[];function Io(l){Ie(l.g,function(f,y){this.g.hasOwnProperty(y)&&nr(f)},l),l.g={}}gi.prototype.N=function(){gi.aa.N.call(this),Io(this)},gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=m.JSON.stringify,Ao=m.JSON.parse,Ro=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function yi(){}yi.prototype.h=null;function as(l){return l.h||(l.h=l.i())}function ls(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){ue.call(this,"d")}W(bn,ue);function us(){ue.call(this,"c")}W(us,ue);var Fn={},Po=null;function _i(){return Po=Po||new ut}Fn.La="serverreachability";function Co(l){ue.call(this,Fn.La,l)}W(Co,ue);function sr(l){const f=_i();ct(f,new Co(f))}Fn.STAT_EVENT="statevent";function ko(l,f){ue.call(this,Fn.STAT_EVENT,l),this.stat=f}W(ko,ue);function rt(l){const f=_i();ct(f,new ko(f,l))}Fn.Ma="timingevent";function cs(l,f){ue.call(this,Fn.Ma,l),this.size=f}W(cs,ue);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function Ei(l,f,y,E,L,j){l.info(function(){if(l.g)if(j)for(var X="",je=j.split("&"),ht=0;ht<je.length;ht++){var De=je[ht].split("=");if(1<De.length){var yt=De[0];De=De[1];var ot=yt.split("_");X=2<=ot.length&&ot[1]=="type"?X+(yt+"="+De+"&"):X+(yt+"=redacted&")}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+X})}function hs(l,f,y,E,L,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+j+" "+X})}function wn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ic(l,y)+(E?" "+E:"")})}function No(l,f){l.info(function(){return"TIMEOUT: "+f})}vi.prototype.info=function(){};function ic(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return So(y)}catch{return f}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function wi(){}W(wi,yi),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},Tn=new wi;function In(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var Do={},fs={};function ps(l,f,y){l.L=1,l.v=Lr(tn(f)),l.m=y,l.P=!0,Vo(l,null)}function Vo(l,f){l.F=Date.now(),He(l),l.A=tn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),br(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Wa,l.g=ll(l.j,y?f:null,!l.m),0<l.O&&(l.M=new mi(V(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(To[0]=L.toString()),L=To);for(var j=0;j<L.length;j++){var X=yo(y,L[j],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),sr(),Ei(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const ot=qt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Fo(this.g)))){this.J||ot!=4||f==7||(f==8||0>=dn?sr(3):sr(2)),Ti(this);var y=this.g.Z();this.X=y;t:if(Ha(this)){var E=Fo(this.g);l="";var L=E.length,j=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Dr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,hs(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ht=this.g;if((je=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(je)){var De=je;break t}}De=null}if(y=De)wn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,y);else{this.o=!1,this.s=3,rt(12),cn(this),Dr(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<X.length;)if(rn=sc(this,X),rn==fs){ot==4&&(this.s=4,rt(14),y=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Do){this.s=4,rt(15),wn(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else wn(this.i,this.l,rn,null),xo(this,rn);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||X.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)wn(this.i,this.l,X,"[Invalid Chunked Response]"),cn(this),Dr(this);else if(0<X.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),jo(yt),yt.M=!0,rt(11))}}else wn(this.i,this.l,X,null),xo(this,X);ot==4&&cn(this),this.o&&!this.J&&(ot==4?As(this.j,this):(this.o=!1,He(this)))}else Es(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),cn(this),Dr(this)}}}catch{}finally{}};function Ha(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?fs:(y=Number(f.substring(y,E)),isNaN(y)?Do:(E+=1,E+y>f.length?fs:(f=f.slice(E,E+y),l.C=E+y,f)))}In.prototype.cancel=function(){this.J=!0,cn(this)};function He(l){l.S=Date.now()+l.I,qa(l,l.I)}function qa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(V(l.ba,l),f)}function Ti(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(No(this.i,this.A),this.L!=2&&(sr(),rt(17)),cn(this),this.s=2,Dr(this)):qa(this,this.S-l)};function Dr(l){l.j.G==0||l.J||As(l.j,l)}function cn(l){Ti(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Io(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function xo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ss(y),Cn(y);else break e;Is(y),rt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(V(y.Za,y),6e3));if(1>=Ga(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else cr(y,11)}else if((l.K||y.g==l)&&Ss(y),!ee(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const yt=De[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const ot=De[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const dn=De[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rn=l.g;if(rn){const ki=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var j=E.h;j.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Oo(j,j.h),j.h=null))}if(E.D){const Ps=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(E.ya=Ps,$e(E.I,E.D,Ps))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=al(E,E.J?E.ia:null,E.W),X.K){Qa(E.h,X);var je=X,ht=E.L;ht&&(je.I=ht),je.B&&(Ti(je),He(je)),E.g=X}else Ci(E);0<y.i.length&&zn(y)}else De[0]!="stop"&&De[0]!="close"||cr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?cr(y,7):It(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}sr(4)}catch{}}var Ka=class{constructor(l,f){this.g=l,this.map=f}};function Ii(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ga(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Oo(l,f){l.g?l.g.add(f):l.h=f}function Qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ii.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ya(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return $(l.i)}function ms(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function gs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=gs(l),E=ms(l),L=E.length,j=0;j<L;j++)f.call(void 0,E[j],y&&y[j],l)}var Si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var j=l[y].substring(0,E);L=l[y].substring(E+1)}else j=l[y];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function or(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof or){this.h=l.h,Ai(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,y=new Un;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Or(this,y),this.m=l.m}else l&&(f=String(l).match(Si))?(this.h=!1,Ai(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),xr(this,f[4]),this.l=Ce(f[5]||"",!0),Or(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}or.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mr(f,ys,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mr(f,ys,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Mr(y,y.charAt(0)=="/"?Za:Ja,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Mr(y,Lo)),l.join("")};function tn(l){return new or(l)}function Ai(l,f,y){l.j=y?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Or(l,f,y){f instanceof Un?(l.i=f,jn(l.i,l.h)):(y||(f=Mr(f,el)),l.i=new Un(f,l.h))}function $e(l,f,y){l.i.set(f,y)}function Lr(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Xa),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Xa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ys=/[#\/\?@]/g,Ja=/[#\?:]/g,Za=/[#\?]/g,el=/[#\?@]/g,Lo=/#/g;function Un(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&oc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Un.prototype,i.add=function(l,f){Tt(this),this.i=null,l=hn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Sn(l,f){Tt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Tt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let j=0;j<L.length;j++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=hn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function br(l,f,y){Sn(l,f),0<y.length&&(l.i=null,l.g.set(hn(l,f),$(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const j=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=j;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Sn(this,E),br(this,L,y))},l)),l.j=f}function ac(l,f){const y=new vi;if(m.Image){const E=new Image;E.onload=B(Ht,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B(Ht,y,"TestLoadImage: error",!1,f,E),E.onabort=B(Ht,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B(Ht,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function tl(l,f){const y=new vi,E=new AbortController,L=setTimeout(()=>{E.abort(),Ht(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?Ht(y,"TestPingServer: ok",!0,f):Ht(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Ht(y,"TestPingServer: error",!1,f)})}function Ht(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function lc(){this.g=new Ro}function nl(l,f,y){const E=y||"";try{Vr(l,function(L,j){let X=L;v(L)&&(X=So(L)),f.push(E+j+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ar(l){this.l=l.Ub||null,this.j=l.eb||!1}W(ar,yi),ar.prototype.g=function(){return new Ri(this.l,this.j)},ar.prototype.i=function(l){return function(){return l}}({});function Ri(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Ri,ut),i=Ri.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Pn(this),this.readyState==3&&rl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function lr(l){let f="";return Ie(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Fr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=lr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):$e(l,f,y))}function Qe(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Qe,ut);var uc=/^https?$/i,Mo=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?as(this.o):as(Tn),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Pi(this,j);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Mo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Pi(this,j)}};function Pi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,_s(l),nn(l)}function _s(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ct(this,"complete"),ct(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?bo(this):this.bb())},i.bb=function(){bo(this)};function bo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)wo(l.Ea,0,l);else if(ct(l,"readystatechange"),qt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var L=String(l.D).match(Si)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!uc.test(L?L.toLowerCase():"")}y=E}if(y)ct(l,"complete"),ct(l,"success");else{l.m=6;try{var j=2<qt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",_s(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){vs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ct(l,"ready");try{y.onreadystatechange=E}catch{}}}function vs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Ao(f)}};function Fo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ee(l[E]))continue;var y=k(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[L]||[];f[L]=j,j.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Uo(l){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ii(l&&l.concurrentRequestLimit),this.Da=new lc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Uo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){rt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=al(this,null,this.W),zn(this)};function It(l){if(ws(l),l.G==3){var f=l.U++,y=tn(l.I);if($e(y,"SID",l.K),$e(y,"RID",f),$e(y,"TYPE","terminate"),ur(l,y),f=new In(l,l.j,f),f.L=2,f.v=Lr(tn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),He(f)}ol(l)}function Cn(l){l.g&&(jo(l),l.g.cancel(),l.g=null)}function ws(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ss(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;ze||ne(),J||(ze(),J=!0),de.add(f,l),l.B=0}}function cc(l,f){return Ga(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(V(l.Ga,l,f),sl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new In(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Ur(this,L,f),y=tn(this.I),$e(y,"RID",l),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),ur(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(lr(j)))+"&"+f:this.m&&Fr(y,this.m,j)),Oo(this.h,L),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",f),$e(y,"SID","null"),L.T=!0,ps(L,y,null)):ps(L,y,f),this.G=2}}else this.G==3&&(l?Ts(this,l):this.i.length==0||en(this.h)||Ts(this))};function Ts(l,f){var y;f?y=f.l:y=l.U++;const E=tn(l.I);$e(E,"SID",l.K),$e(E,"RID",y),$e(E,"AID",l.T),ur(l,E),l.m&&l.o&&Fr(E,l.m,l.o),y=new In(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ur(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Oo(l.h,y),ps(y,E,f)}function ur(l,f){l.H&&Ie(l.H,function(y,E){$e(f,E,y)}),l.l&&Vr({},function(y,E){$e(f,E,y)})}function Ur(l,f,y){y=Math.min(l.i.length,y);var E=l.l?V(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const X=["count="+y];j==-1?0<y?(j=L[0].g,X.push("ofs="+j)):j=0:X.push("ofs="+j);let je=!0;for(let ht=0;ht<y;ht++){let De=L[ht].g;const yt=L[ht].map;if(De-=j,0>De)j=Math.max(0,L[ht].g-100),je=!1;else try{nl(yt,X,"req"+De+"_")}catch{E&&E(yt)}}if(je){E=X.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ci(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ze||ne(),J||(ze(),J=!0),de.add(f,l),l.v=0}}function Is(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(V(l.Fa,l),sl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(V(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Cn(this),il(this))};function jo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function il(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);$e(f,"RID","rpc"),$e(f,"SID",l.K),$e(f,"AID",l.T),$e(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(f,"TO",l.ja),$e(f,"TYPE","xmlhttp"),ur(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Lr(tn(f)),y.m=null,y.P=!0,Vo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Cn(this),Is(this),rt(19))};function Ss(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function As(l,f){var y=null;if(l.g==f){Ss(l),jo(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,Qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=_i(),ct(E,new cs(E,y)),zn(l)}else Ci(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&cc(l,f)||E==2&&Is(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:cr(l,5);break;case 4:cr(l,10);break;case 3:cr(l,6);break;default:cr(l,2)}}}function sl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function cr(l,f){if(l.j.info("Error code "+f),f==2){var y=V(l.fb,l),E=l.Xa;const L=!E;E=new or(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ai(E,"https"),Lr(E),L?ac(E.toString(),y):tl(E.toString(),y)}else rt(2);l.G=0,l.l&&l.l.sa(f),ol(l),ws(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function ol(l){if(l.G=0,l.ka=[],l.l){const f=Ya(l.h);(f.length!=0||l.i.length!=0)&&(U(l.ka,f),U(l.ka,l.i),l.h.i.length=0,$(l.i),l.i.length=0),l.l.ra()}}function al(l,f,y){var E=y instanceof or?tn(y):new or(y);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new or(null);E&&Ai(j,E),f&&(j.g=f),L&&xr(j,L),y&&(j.l=y),E=j}return y=l.D,f=l.ya,y&&f&&$e(E,y,f),$e(E,"VER",l.la),ur(l,E),E}function ll(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new ar({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bo(){}i=Bo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Rs(){}Rs.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){ut.call(this),this.g=new Uo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ee(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ee(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new $n(this)}W(zt,ut),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){It(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=So(l),l=y);f.i.push(new Ka(f.Ya++,l)),f.G==3&&zn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,zt.aa.N.call(this)};function ul(l){bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}W(ul,bn);function cl(){us.call(this),this.status=1}W(cl,us);function $n(l){this.g=l}W($n,Bo),$n.prototype.ua=function(){ct(this.g,"a")},$n.prototype.ta=function(l){ct(this.g,new ul(l))},$n.prototype.sa=function(l){ct(this.g,new cl)},$n.prototype.ra=function(){ct(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Ey=function(){return new Rs},vy=function(){return _i()},_y=Fn,Zh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,cu=ds,$a.COMPLETE="complete",yy=$a,ls.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ut.prototype.listen=ut.prototype.K,fa=ls,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,gy=Qe}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const Ym="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Ad("@firebase/firestore");function da(){return Qi.logLevel}function ae(i,...e){if(Qi.logLevel<=ke.DEBUG){const t=e.map(Cd);Qi.debug(`Firestore (${fo}): ${i}`,...t)}}function Ar(i,...e){if(Qi.logLevel<=ke.ERROR){const t=e.map(Cd);Qi.error(`Firestore (${fo}): ${i}`,...t)}}function ro(i,...e){if(Qi.logLevel<=ke.WARN){const t=e.map(Cd);Qi.warn(`Firestore (${fo}): ${i}`,...t)}}function Cd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(i="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+i;throw Ar(e),new Error(e)}function Be(i,e){i||ve()}function Te(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(bt.UNAUTHENTICATED))}shutdown(){}}class D0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V0{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new li;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new li,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new li)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string"),new wy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new bt(e)}}class x0{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new x0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new L0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=b0(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function io(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new mt(0,0))}static max(){return new we(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(),s===void 0?s=e.length-t:s>e.length-t&&ve(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ia.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ia?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Xe extends Ia{construct(e,t,s){return new Xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const F0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Ia{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return F0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Xe.fromString(e))}static fromName(e){return new me(Xe.fromString(e).popFirst(5))}static empty(){return new me(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Xe(e.slice()))}}function U0(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new ci(o,me.empty(),e)}function j0(i){return new ci(i.readTime,i.key,-1)}class ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ci(we.min(),me.empty(),-1)}static max(){return new ci(we.max(),me.empty(),-1)}}function B0(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(i.documentKey,e.documentKey),t!==0?t:Me(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==z0)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new K((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function W0(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xa(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class kd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kd.oe=-1;function ju(i){return i==null}function Iu(i){return i===0&&1/i==-1/0}function H0(i){return typeof i=="number"&&Number.isInteger(i)&&!Iu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function es(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Iy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jm(this.data.getIterator())}getIteratorFrom(e){return new Jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ct(this.comparator);return t.data=e,t}}class Jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ln([])}unionWith(e){let t=new Ct(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Sy("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const q0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(i){if(Be(!!i),typeof i=="string"){let e=0;const t=q0.exec(i);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(i.seconds),nanos:st(i.nanos)}}function st(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Yi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dd(i){const e=i.mapValue.fields.__previous_value__;return Nd(e)?Dd(e):e}function Sa(i){const e=hi(i.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Aa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={mapValue:{}};function Xi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Nd(i)?4:Q0(i)?9007199254740991:G0(i)?10:11:ve()}function Jn(i,e){if(i===e)return!0;const t=Xi(i);if(t!==Xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Sa(i).isEqual(Sa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=hi(o.timestampValue),m=hi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Yi(o.bytesValue).isEqual(Yi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return st(o.geoPointValue.latitude)===st(u.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return st(o.integerValue)===st(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=st(o.doubleValue),m=st(u.doubleValue);return h===m?Iu(h)===Iu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return io(i.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Xm(h)!==Xm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Jn(h[g],m[g])))return!1;return!0}(i,e);default:return ve()}}function Ra(i,e){return(i.values||[]).find(t=>Jn(t,e))!==void 0}function so(i,e){if(i===e)return 0;const t=Xi(i),s=Xi(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=st(u.integerValue||u.doubleValue),g=st(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return Zm(i.timestampValue,e.timestampValue);case 4:return Zm(Sa(i),Sa(e));case 5:return Me(i.stringValue,e.stringValue);case 6:return function(u,h){const m=Yi(u),g=Yi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Me(m[v],g[v]);if(w!==0)return w}return Me(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Me(st(u.latitude),st(h.latitude));return m!==0?m:Me(st(u.longitude),st(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return eg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const C=u.fields||{},V=h.fields||{},B=(m=C.value)===null||m===void 0?void 0:m.arrayValue,W=(g=V.value)===null||g===void 0?void 0:g.arrayValue,$=Me(((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0,((w=W==null?void 0:W.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:eg(B,W)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===ou.mapValue&&h===ou.mapValue)return 0;if(u===ou.mapValue)return 1;if(h===ou.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let C=0;C<g.length&&C<w.length;++C){const V=Me(g[C],w[C]);if(V!==0)return V;const B=so(m[g[C]],v[w[C]]);if(B!==0)return B}return Me(g.length,w.length)}(i.mapValue,e.mapValue);default:throw ve()}}function Zm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const t=hi(i),s=hi(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function eg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=so(t[o],s[o]);if(u)return u}return Me(t.length,s.length)}function oo(i){return ed(i)}function ed(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=hi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Yi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return me.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ed(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ed(t.fields[h])}`;return o+"}"}(i.mapValue):ve()}function td(i){return!!i&&"integerValue"in i}function Vd(i){return!!i&&"arrayValue"in i}function tg(i){return!!i&&"nullValue"in i}function ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function hu(i){return!!i&&"mapValue"in i}function G0(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ga(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return es(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ga(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ga(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Q0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ga(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){es(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Zt(ga(this.value))}}function Ay(i){const e=[];return es(i.fields,(t,s)=>{const o=new Pt([t]);if(hu(s)){const u=Ay(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,we.min(),we.min(),we.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,we.min(),we.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,we.min(),we.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Su{constructor(e,t){this.position=e,this.inclusive=t}}function rg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=so(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ig(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Jn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Au{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y0(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Ry{}class pt extends Ry{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new J0(e,t,s):t==="array-contains"?new tT(e,s):t==="in"?new nT(e,s):t==="not-in"?new rT(e,s):t==="array-contains-any"?new iT(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Z0(e,s):new eT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(so(t,this.value)):t!==null&&Xi(this.value)===Xi(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends Ry{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Zn(e,t)}matches(e){return Py(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Py(i){return i.op==="and"}function Cy(i){return X0(i)&&Py(i)}function X0(i){for(const e of i.filters)if(e instanceof Zn)return!1;return!0}function nd(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+oo(i.value);if(Cy(i))return i.filters.map(e=>nd(e)).join(",");{const e=i.filters.map(t=>nd(t)).join(",");return`${i.op}(${e})`}}function ky(i,e){return i instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&Jn(s.value,o.value)}(i,e):i instanceof Zn?function(s,o){return o instanceof Zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&ky(h,o.filters[m]),!0):!1}(i,e):void ve()}function Ny(i){return i instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${oo(t.value)}`}(i):i instanceof Zn?function(t){return t.op.toString()+" {"+t.getFilters().map(Ny).join(" ,")+"}"}(i):"Filter"}class J0 extends pt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class Z0 extends pt{constructor(e,t){super(e,"in",t),this.keys=Dy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eT extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Dy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Dy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class tT extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vd(t)&&Ra(t.arrayValue,this.value)}}class nT extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ra(this.value.arrayValue,t)}}class rT extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ra(this.value.arrayValue,t)}}class iT extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ra(this.value.arrayValue,s))}}/**
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
 */class sT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function sg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new sT(i,e,t,s,o,u,h)}function xd(i){const e=Te(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>nd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ju(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>oo(s)).join(",")),e.ue=t}return e.ue}function Od(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Y0(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!ky(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ig(i.startAt,e.startAt)&&ig(i.endAt,e.endAt)}function rd(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oT(i,e,t,s,o,u,h,m){return new Bu(i,e,t,s,o,u,h,m)}function Vy(i){return new Bu(i)}function og(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function aT(i){return i.collectionGroup!==null}function ya(i){const e=Te(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Ct(Pt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Au(u,s))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new Au(Pt.keyField(),s))}return e.ce}function Qn(i){const e=Te(i);return e.le||(e.le=lT(e,ya(i))),e.le}function lT(i,e){if(i.limitType==="F")return sg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Au(o.field,u)});const t=i.endAt?new Su(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Su(i.startAt.position,i.startAt.inclusive):null;return sg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function id(i,e,t){return new Bu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function zu(i,e){return Od(Qn(i),Qn(e))&&i.limitType===e.limitType}function xy(i){return`${xd(Qn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Ny(o)).join(", ")}]`),ju(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>oo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>oo(o)).join(",")),`Target(${s})`}(Qn(i))}; limitType=${i.limitType})`}function $u(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ya(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=rg(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,ya(s),o)||s.endAt&&!function(h,m,g){const v=rg(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,ya(s),o))}(i,e)}function uT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Oy(i){return(e,t)=>{let s=!1;for(const o of ya(i)){const u=cT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function cT(i,e,t){const s=i.field.isKeyField()?me.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?so(g,v):ve()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Iy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new et(me.comparator);function Rr(){return hT}const Ly=new et(me.comparator);function pa(...i){let e=Ly;for(const t of i)e=e.insert(t.key,t);return e}function My(i){let e=Ly;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Wi(){return _a()}function by(){return _a()}function _a(){return new po(i=>i.toString(),(i,e)=>i.isEqual(e))}const dT=new et(me.comparator),fT=new Ct(me.comparator);function Pe(...i){let e=fT;for(const t of i)e=e.add(t);return e}const pT=new Ct(Me);function mT(){return pT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function Fy(i){return{integerValue:""+i}}function gT(i,e){return H0(e)?Fy(e):Ld(i,e)}/**
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
 */class Wu{constructor(){this._=void 0}}function yT(i,e,t){return i instanceof Ru?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Nd(u)&&(u=Dd(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Pa?jy(i,e):i instanceof Ca?By(i,e):function(o,u){const h=Uy(o,u),m=ag(h)+ag(o.Pe);return td(h)&&td(o.Pe)?Fy(m):Ld(o.serializer,m)}(i,e)}function _T(i,e,t){return i instanceof Pa?jy(i,e):i instanceof Ca?By(i,e):t}function Uy(i,e){return i instanceof Pu?function(s){return td(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Ru extends Wu{}class Pa extends Wu{constructor(e){super(),this.elements=e}}function jy(i,e){const t=zy(e);for(const s of i.elements)t.some(o=>Jn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ca extends Wu{constructor(e){super(),this.elements=e}}function By(i,e){let t=zy(e);for(const s of i.elements)t=t.filter(o=>!Jn(o,s));return{arrayValue:{values:t}}}class Pu extends Wu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ag(i){return st(i.integerValue||i.doubleValue)}function zy(i){return Vd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function vT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Pa&&o instanceof Pa||s instanceof Ca&&o instanceof Ca?io(s.elements,o.elements,Jn):s instanceof Pu&&o instanceof Pu?Jn(s.Pe,o.Pe):s instanceof Ru&&o instanceof Ru}(i.transform,e.transform)}class ET{constructor(e,t){this.version=e,this.transformResults=t}}class Ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Hu{}function $y(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Md(i.key,Ln.none()):new Oa(i.key,i.data,Ln.none());{const t=i.data,s=Zt.empty();let o=new Ct(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new fi(i.key,s,new ln(o.toArray()),Ln.none())}}function wT(i,e,t){i instanceof Oa?function(o,u,h){const m=o.value.clone(),g=ug(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof fi?function(o,u,h){if(!du(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ug(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Wy(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function va(i,e,t,s){return i instanceof Oa?function(u,h,m,g){if(!du(u.precondition,h))return m;const v=u.value.clone(),w=cg(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof fi?function(u,h,m,g){if(!du(u.precondition,h))return m;const v=cg(u.fieldTransforms,g,h),w=h.data;return w.setAll(Wy(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,m){return du(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function TT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Uy(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function lg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,(u,h)=>vT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Oa extends Hu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fi extends Hu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Wy(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function ug(i,e,t){const s=new Map;Be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,_T(h,m,t[o]))}return s}function cg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,yT(u,h,e))}return s}class Md extends Hu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IT extends Hu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&wT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=by();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=$y(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(t,s)=>lg(t,s))&&io(this.baseMutations,e.baseMutations,(t,s)=>lg(t,s))}}class bd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length);let o=function(){return dT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new bd(e,t,s,o)}}/**
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
 */class AT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Ve;function PT(i){switch(i){default:return ve();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function Hy(i){if(i===void 0)return Ar("GRPC error has no .code"),G.UNKNOWN;switch(i){case lt.OK:return G.OK;case lt.CANCELLED:return G.CANCELLED;case lt.UNKNOWN:return G.UNKNOWN;case lt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case lt.INTERNAL:return G.INTERNAL;case lt.UNAVAILABLE:return G.UNAVAILABLE;case lt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case lt.NOT_FOUND:return G.NOT_FOUND;case lt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case lt.ABORTED:return G.ABORTED;case lt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case lt.DATA_LOSS:return G.DATA_LOSS;default:return ve()}}(Ve=lt||(lt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CT(){return new TextEncoder}/**
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
 */const kT=new qi([4294967295,4294967295],0);function hg(i){const e=CT().encode(i),t=new my;return t.update(e),new Uint8Array(t.digest())}function dg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new qi([t,s],0),new qi([o,u],0)]}class Fd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ma(`Invalid padding: ${t}`);if(s<0)throw new ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ma(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(qi.fromNumber(s)));return o.compare(kT)===1&&(o=new qi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=hg(e),[s,o]=dg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Fd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ie===0)return;const t=hg(e),[s,o]=dg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new qu(we.min(),o,new et(Me),Rr(),Pe())}}class La{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new La(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class qy{constructor(e,t){this.targetId=e,this.me=t}}class Ky{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class fg{constructor(){this.fe=0,this.ge=mg(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),s=Pe();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new La(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=mg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=pg(),this.Qe=new et(Me)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(rd(u))if(s===0){const h=new me(u.path);this.Ue(t,h,Ft.newNoDocument(h,we.min()))}else Be(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),g=m?this.Xe(m,e,h):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Yi(s).toUint8Array()}catch(g){if(g instanceof Sy)return ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Fd(h,o,u)}catch(g){return ro(g instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Je(h);if(m){if(u.current&&rd(m.target)){const g=new me(m.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Ft.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Pe();this.qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new qu(e,t,this.Qe,this.ke,s);return this.ke=Rr(),this.qe=pg(),this.Qe=new et(Me),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fg,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ct(Me),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function pg(){return new et(me.comparator)}function mg(){return new et(me.comparator)}const DT={asc:"ASCENDING",desc:"DESCENDING"},VT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xT={and:"AND",or:"OR"};class OT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sd(i,e){return i.useProto3Json||ju(e)?e:{value:e}}function Cu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function LT(i,e){return Cu(i,e.toTimestamp())}function Yn(i){return Be(!!i),we.fromTimestamp(function(t){const s=hi(t);return new mt(s.seconds,s.nanos)}(i))}function Ud(i,e){return od(i,e).canonicalString()}function od(i,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Qy(i){const e=Xe.fromString(i);return Be(e_(e)),e}function ad(i,e){return Ud(i.databaseId,e.path)}function Bh(i,e){const t=Qy(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new me(Xy(t))}function Yy(i,e){return Ud(i.databaseId,e)}function MT(i){const e=Qy(i);return e.length===4?Xe.emptyPath():Xy(e)}function ld(i){return new Xe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Xy(i){return Be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function gg(i,e,t){return{name:ad(i,e),fields:t.value.mapValue.fields}}function bT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Be(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?G.UNKNOWN:Hy(v.code);return new ce(w,v.message||"")}(h);t=new Ky(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Bh(i,s.document.name),u=Yn(s.document.updateTime),h=s.document.createTime?Yn(s.document.createTime):we.min(),m=new Zt({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new fu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Bh(i,s.document),u=s.readTime?Yn(s.readTime):we.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new fu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Bh(i,s.document),u=s.removedTargetIds||[];t=new fu([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new RT(o,u),m=s.targetId;t=new qy(m,h)}}return t}function FT(i,e){let t;if(e instanceof Oa)t={update:gg(i,e.key,e.value)};else if(e instanceof Md)t={delete:ad(i,e.key)};else if(e instanceof fi)t={update:gg(i,e.key,e.data),updateMask:KT(e.fieldMask)};else{if(!(e instanceof IT))return ve();t={verify:ad(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Ru)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Pa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ca)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Pu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ve()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:LT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(i,e.precondition)),t}function UT(i,e){return i&&i.length>0?(Be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Yn(o.updateTime):Yn(u);return h.isEqual(we.min())&&(h=Yn(u)),new ET(h,o.transformResults||[])}(t,e))):[]}function jT(i,e){return{documents:[Yy(i,e.path)]}}function BT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Yy(i,o);const u=function(v){if(v.length!==0)return Zy(Zn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(V){return{field:Qs(V.field),direction:WT(V.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=sd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{_t:t,parent:o}}function zT(i){let e=MT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const V=Jy(C);return V instanceof Zn&&Cy(V)?V.getFilters():[V]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(V=>function(W){return new Au(Ys(W.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(V))}(t.orderBy));let m=null;t.limit&&(m=function(C){let V;return V=typeof C=="object"?C.value:C,ju(V)?null:V}(t.limit));let g=null;t.startAt&&(g=function(C){const V=!!C.before,B=C.values||[];return new Su(B,V)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const V=!C.before,B=C.values||[];return new Su(B,V)}(t.endAt)),oT(e,o,h,u,m,"F",g,v)}function $T(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jy(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(i):i.fieldFilter!==void 0?function(t){return pt.create(Ys(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Zn.create(t.compositeFilter.filters.map(s=>Jy(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(t.compositeFilter.op))}(i):ve()}function WT(i){return DT[i]}function HT(i){return VT[i]}function qT(i){return xT[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return Pt.fromServerFormat(i.fieldPath)}function Zy(i){return i instanceof pt?function(t){if(t.op==="=="){if(ng(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(tg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ng(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(tg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:HT(t.op),value:t.value}}}(i):i instanceof Zn?function(t){const s=t.getFilters().map(o=>Zy(o));return s.length===1?s[0]:{compositeFilter:{op:qT(t.op),filters:s}}}(i):ve()}function KT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function e_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,u=we.min(),h=we.min(),m=kt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.ct=e}}function QT(i){const e=zT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?id(e,e.limit,"L"):e}/**
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
 */class YT{constructor(){this.un=new XT}addToCollectionParentIndex(e,t){return this.un.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(ci.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class XT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ct(Xe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ct(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ao(0)}static kn(){return new ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.changes=new po(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&va(s.mutation,o,ln.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Wi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=pa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Wi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=_a(),m=function(){return _a()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof fi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),va(w.mutation,v,w.mutation.getFieldMask(),mt.now())):h.set(v.key,ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var C;return m.set(v,new ZT(w,(C=h.get(v))!==null&&C!==void 0?C:null))}),m))}recalculateAndSaveOverlays(e,t){const s=_a();let o=new et((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||ln.empty();w=m.applyToLocalView(v,w),s.set(g,w);const C=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,C)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,C=by();w.forEach(V=>{if(!u.has(V)){const B=$y(t.get(V),s.get(V));B!==null&&C.set(V,B),u=u.add(V)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):aT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):K.resolve(Wi());let m=-1,g=u;return h.next(v=>K.forEach(v,(w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next(V=>{g=g.insert(w,V)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Pe())).next(w=>({batchId:m,changes:My(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let o=pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=pa();return this.indexManager.getCollectionParents(e,u).next(m=>K.forEach(m,g=>{const v=function(C,V){return new Bu(V,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,V)=>{h=h.insert(C,V)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))});let m=pa();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&va(w.mutation,v,ln.empty(),mt.now()),$u(t,v)&&(m=m.insert(g,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return K.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Yn(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:QT(o.bundledQuery),readTime:Yn(o.readTime)}}(t)),K.resolve()}}/**
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
 */class nI{constructor(){this.overlays=new et(me.comparator),this.Ir=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Wi();return K.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.ht(e,t,u)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Ir.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Wi(),u=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Wi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Wi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return K.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new AT(t,s));let u=this.Ir.get(t);u===void 0&&(u=Pe(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
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
 */class rI{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Tr=new Ct(wt.Er),this.dr=new Ct(wt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new wt(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new me(new Xe([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.dr.forEachInRange([s,o],h=>{this.Vr(h),u.push(h.key)}),u}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new me(new Xe([])),s=new wt(t,e),o=new wt(t,e+1);let u=Pe();return this.dr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return me.comparator(e.key,t.key)||Me(e.wr,t.wr)}static Ar(e,t){return Me(e.wr,t.wr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ct(wt.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ST(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],h=>{const m=this.Dr(h.wr);u.push(m)}),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ct(Me);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],m=>{s=s.add(m.wr)})}),K.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const h=new wt(new me(u),0);let m=new Ct(Me);return this.br.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.wr)),!0)},h),K.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return K.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new wt(t,0),o=this.br.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.Mr=e,this.docs=function(){return new et(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new me(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||B0(j0(w),s)<=0||(o.has(w.key)||$u(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve()}Or(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new oI(this)}getSize(e){return K.resolve(this.size)}}class oI extends JT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.persistence=e,this.Nr=new po(t=>xd(t),Od),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jd,this.targetCount=0,this.kr=ao.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),K.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Kn(t),K.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),K.waitFor(u).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.qr={},this.overlays={},this.Qr=new kd(0),this.Kr=!1,this.Kr=!0,this.$r=new rI,this.referenceDelegate=e(this),this.Ur=new aI(this),this.indexManager=new YT,this.remoteDocumentCache=function(o){return new sI(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new GT(t),this.Gr=new tI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new iI(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new uI(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(u=>this.referenceDelegate.jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Hr(e,t){return K.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class uI extends $0{constructor(e){super(),this.currentSequenceNumber=e}}class Bd{constructor(e){this.persistence=e,this.Jr=new jd,this.Yr=null}static Zr(e){return new Bd(e)}get Xr(){if(this.Yr)return this.Yr;throw ve()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.Xr.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,s=>{const o=me.fromPath(s);return this.ei(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return K.or([()=>K.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new zd(e,t.fromCache,s,o)}}/**
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
 */class cI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fw()?8:W0(Ut())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Zi(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new cI;return this.Xi(e,t,h).next(m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)})}).next(()=>u.result)}es(e,t,s,o){return s.documentReadCount<this.ji?(da()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(da()<=ke.DEBUG&&ae("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(da()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):K.resolve())}Yi(e,t){if(og(t))return K.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=id(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.Ji.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.ts(t,m);return this.ns(t,v,h,g.readTime)?this.Yi(e,id(t,null,"F")):this.rs(e,v,t,g)}))})))}Zi(e,t,s,o){return og(t)||o.isEqual(we.min())?K.resolve(null):this.Ji.getDocuments(e,s).next(u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?K.resolve(null):(da()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.rs(e,h,t,U0(o,-1)).next(m=>m))})}ts(e,t){let s=new Ct(Oy(e));return t.forEach((o,u)=>{$u(e,u)&&(s=s.add(u))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return da()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ci.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new et(Me),this._s=new po(u=>xd(u),Od),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function fI(i,e,t,s){return new dI(i,e,t,s)}async function t_(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({hs:v,removedBatchIds:h,addedBatchIds:m}))})})}function pI(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const C=v.batch,V=C.keys();let B=K.resolve();return V.forEach(W=>{B=B.next(()=>w.getEntry(g,W)).next($=>{const U=v.docVersions.get(W);Be(U!==null),$.version.compareTo(U)<0&&(C.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),w.addEntry($)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function n_(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function mI(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach((w,C)=>{const V=o.get(C);if(!V)return;m.push(t.Ur.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Ur.addMatchingKeys(u,w.addedDocuments,C)));let B=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?B=B.withResumeToken(kt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(C,B),function($,U,Z){return $.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(V,B,w)&&m.push(t.Ur.updateTargetData(u,B))});let g=Rr(),v=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(gI(u,h,e.documentUpdates).next(w=>{g=w.Ps,v=w.Is})),!s.isEqual(we.min())){const w=t.Ur.getLastRemoteSnapshotVersion(u).next(C=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return K.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.os=o,u))}function gI(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ae("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Ps:h,Is:o}})}function yI(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _I(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ur.getTargetData(s,e).next(u=>u?(o=u,K.resolve(o)):t.Ur.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function ud(i,e,t){const s=Te(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!xa(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function yg(i,e,t){const s=Te(i);let o=we.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const C=Te(g),V=C._s.get(w);return V!==void 0?K.resolve(C.os.get(V)):C.Ur.getTargetData(v,w)}(s,h,Qn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Pe())).next(m=>(vI(s,uT(e),m),{documents:m,Ts:u})))}function vI(i,e,t){let s=i.us.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.us.set(e,s)}class _g{constructor(){this.activeTargetIds=mT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EI{constructor(){this.so=new _g,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _g,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wI{_o(e){}shutdown(){}}/**
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
 */class vg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let au=null;function zh(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class SI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=zh(),g=this.xo(t,s.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,g,v,o).then(w=>(ae("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw ro("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}xo(t,s){const o=TI[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=zh();return new Promise((h,m)=>{const g=new gy;g.setWithCredentials(!0),g.listenOnce(yy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cu.NO_ERROR:const w=g.getResponseJson();ae(Mt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case cu.TIMEOUT:ae(Mt,`RPC '${e}' ${u} timed out`),m(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const C=g.getStatus();if(ae(Mt,`RPC '${e}' ${u} failed with status:`,C,"response text:",g.getResponseText()),C>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const B=V==null?void 0:V.error;if(B&&B.status&&B.message){const W=function(U){const Z=U.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(Z)>=0?Z:G.UNKNOWN}(B.status);m(new ce(W,B.message))}else m(new ce(G.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ce(G.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ae(Mt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ae(Mt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}Bo(e,t,s){const o=zh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ey(),m=vy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ae(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const C=h.createWebChannel(w,g);let V=!1,B=!1;const W=new II({Io:U=>{B?ae(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(V||(ae(Mt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),V=!0),ae(Mt,`RPC '${e}' stream ${o} sending:`,U),C.send(U))},To:()=>C.close()}),$=(U,Z,ee)=>{U.listen(Z,he=>{try{ee(he)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return $(C,fa.EventType.OPEN,()=>{B||(ae(Mt,`RPC '${e}' stream ${o} transport opened.`),W.yo())}),$(C,fa.EventType.CLOSE,()=>{B||(B=!0,ae(Mt,`RPC '${e}' stream ${o} transport closed`),W.So())}),$(C,fa.EventType.ERROR,U=>{B||(B=!0,ro(Mt,`RPC '${e}' stream ${o} transport errored:`,U),W.So(new ce(G.UNAVAILABLE,"The operation could not be completed")))}),$(C,fa.EventType.MESSAGE,U=>{var Z;if(!B){const ee=U.data[0];Be(!!ee);const he=ee,Ee=he.error||((Z=he[0])===null||Z===void 0?void 0:Z.error);if(Ee){ae(Mt,`RPC '${e}' stream ${o} received error:`,Ee);const Ue=Ee.status;let Ie=function(A){const R=lt[A];if(R!==void 0)return Hy(R)}(Ue),D=Ee.message;Ie===void 0&&(Ie=G.INTERNAL,D="Unknown error status: "+Ue+" with message "+Ee.message),B=!0,W.So(new ce(Ie,D)),C.close()}else ae(Mt,`RPC '${e}' stream ${o} received:`,ee),W.bo(ee)}}),$(m,_y.STAT_EVENT,U=>{U.stat===Zh.PROXY?ae(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===Zh.NOPROXY&&ae(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.wo()},0),W}}function $h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(i){return new OT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,s,o,u,h,m,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new r_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AI extends i_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=bT(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?Yn(h.readTime):we.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=ld(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=rd(g)?{documents:jT(u,g)}:{query:BT(u,g)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Gy(u,h.resumeToken);const v=sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Cu(u,h.snapshotVersion.toTimestamp());const v=sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=$T(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=ld(this.serializer),t.removeTarget=e,this.a_(t)}}class RI extends i_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=UT(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=ld(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>FT(this.serializer,s))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Mo(e,od(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(G.UNKNOWN,u.toString())})}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Lo(e,od(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(G.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ar(t),this.D_=!1):ae("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o(h=>{s.enqueueAndForget(async()=>{ts(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=Te(g);v.L_.add(4),await Ma(v),v.q_.set("Unknown"),v.L_.delete(4),await Gu(v)}(this))})}),this.q_=new CI(s,o)}}async function Gu(i){if(ts(i))for(const e of i.B_)await e(!0)}async function Ma(i){for(const e of i.B_)await e(!1)}function s_(i,e){const t=Te(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),qd(t)?Hd(t):mo(t).r_()&&Wd(t,e))}function $d(i,e){const t=Te(i),s=mo(t);t.N_.delete(e),s.r_()&&o_(t,e),t.N_.size===0&&(s.r_()?s.o_():ts(t)&&t.q_.set("Unknown"))}function Wd(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mo(i).A_(e)}function o_(i,e){i.Q_.xe(e),mo(i).R_(e)}function Hd(i){i.Q_=new NT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),mo(i).start(),i.q_.v_()}function qd(i){return ts(i)&&!mo(i).n_()&&i.N_.size>0}function ts(i){return Te(i).L_.size===0}function a_(i){i.Q_=void 0}async function NI(i){i.q_.set("Online")}async function DI(i){i.N_.forEach((e,t)=>{Wd(i,e)})}async function VI(i,e){a_(i),qd(i)?(i.q_.M_(e),Hd(i)):i.q_.set("Unknown")}async function xI(i,e,t){if(i.q_.set("Online"),e instanceof Ky&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))}(i,e)}catch(s){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ku(i,s)}else if(e instanceof fu?i.Q_.Ke(e):e instanceof qy?i.Q_.He(e):i.Q_.We(e),!t.isEqual(we.min()))try{const s=await n_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.N_.get(v);w&&u.N_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.N_.get(g);if(!w)return;u.N_.set(g,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),o_(u,g);const C=new ii(w.target,g,v,w.sequenceNumber);Wd(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ae("RemoteStore","Failed to raise snapshot:",s),await ku(i,s)}}async function ku(i,e,t){if(!xa(e))throw e;i.L_.add(1),await Ma(i),i.q_.set("Offline"),t||(t=()=>n_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await Gu(i)})}function l_(i,e){return e().catch(t=>ku(i,t,e))}async function Qu(i){const e=Te(i),t=di(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OI(e);)try{const o=await yI(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,LI(e,o)}catch(o){await ku(e,o)}u_(e)&&c_(e)}function OI(i){return ts(i)&&i.O_.length<10}function LI(i,e){i.O_.push(e);const t=di(i);t.r_()&&t.V_&&t.m_(e.mutations)}function u_(i){return ts(i)&&!di(i).n_()&&i.O_.length>0}function c_(i){di(i).start()}async function MI(i){di(i).p_()}async function bI(i){const e=di(i);for(const t of i.O_)e.m_(t.mutations)}async function FI(i,e,t){const s=i.O_.shift(),o=bd.from(s,e,t);await l_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Qu(i)}async function UI(i,e){e&&di(i).V_&&await async function(s,o){if(function(h){return PT(h)&&h!==G.ABORTED}(o.code)){const u=s.O_.shift();di(s).s_(),await l_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Qu(s)}}(i,e),u_(i)&&c_(i)}async function Eg(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const s=ts(t);t.L_.add(3),await Ma(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gu(t)}async function jI(i,e){const t=Te(i);e?(t.L_.delete(2),await Gu(t)):e||(t.L_.add(2),await Ma(t),t.q_.set("Unknown"))}function mo(i){return i.K_||(i.K_=function(t,s,o){const u=Te(t);return u.w_(),new AI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:NI.bind(null,i),Ro:DI.bind(null,i),mo:VI.bind(null,i),d_:xI.bind(null,i)}),i.B_.push(async e=>{e?(i.K_.s_(),qd(i)?Hd(i):i.q_.set("Unknown")):(await i.K_.stop(),a_(i))})),i.K_}function di(i){return i.U_||(i.U_=function(t,s,o){const u=Te(t);return u.w_(),new RI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:MI.bind(null,i),mo:UI.bind(null,i),f_:bI.bind(null,i),g_:FI.bind(null,i)}),i.B_.push(async e=>{e?(i.U_.s_(),await Qu(i)):(await i.U_.stop(),i.O_.length>0&&(ae("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Kd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),xa(i))return new ce(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=pa(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class wg{constructor(){this.W_=new et(me.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ve():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class lo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new lo(e,t,Xs.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zI{constructor(){this.queries=Tg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=Tg(),u.forEach((h,m)=>{for(const g of m.j_)g.onError(s)})})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function Tg(){return new po(i=>xy(i),zu)}async function $I(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new BI,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Gd(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&Qd(t)}async function WI(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function HI(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&Qd(t)}function qI(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function Qd(i){i.Y_.forEach(e=>{e.next()})}var cd,Ig;(Ig=cd||(cd={})).ea="default",Ig.Cache="cache";class KI{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.key=e}}class d_{constructor(e){this.key=e}}class GI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=Oy(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new wg,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const V=o.get(w),B=$u(this.query,C)?C:null,W=!!V&&this.mutatedKeys.has(V.key),$=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let U=!1;V&&B?V.data.isEqual(B.data)?W!==$&&(s.track({type:3,doc:B}),U=!0):this.ga(V,B)||(s.track({type:2,doc:B}),U=!0,(g&&this.Aa(B,g)>0||v&&this.Aa(B,v)<0)&&(m=!0)):!V&&B?(s.track({type:0,doc:B}),U=!0):V&&!B&&(s.track({type:1,doc:V}),U=!0,(g||v)&&(m=!0)),U&&(B?(h=h.add(B),u=$?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((w,C)=>function(B,W){const $=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return $(B)-$(W)}(w.type,C.type)||this.Aa(w.doc,C.doc)),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,h.length!==0||v?{snapshot:new lo(this.query,e.Ra,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new d_(s))}),this.da.forEach(s=>{e.has(s)||t.push(new h_(s))}),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class QI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class YI{constructor(e){this.key=e,this.va=!1}}class XI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new po(m=>xy(m),zu),this.Ma=new Map,this.xa=new Set,this.Oa=new et(me.comparator),this.Na=new Map,this.La=new jd,this.Ba={},this.ka=new Map,this.qa=ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function JI(i,e,t=!0){const s=__(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await f_(s,e,t,!0),o}async function ZI(i,e){const t=__(i);await f_(t,e,!0,!1)}async function f_(i,e,t,s){const o=await _I(i.localStore,Qn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await eS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&s_(i.remoteStore,o),m}async function eS(i,e,t,s,o){i.Ka=(C,V,B)=>async function($,U,Z,ee){let he=U.view.ma(Z);he.ns&&(he=await yg($.localStore,U.query,!1).then(({documents:D})=>U.view.ma(D,he)));const Ee=ee&&ee.targetChanges.get(U.targetId),Ue=ee&&ee.targetMismatches.get(U.targetId)!=null,Ie=U.view.applyChanges(he,$.isPrimaryClient,Ee,Ue);return Ag($,U.targetId,Ie.wa),Ie.snapshot}(i,C,V,B);const u=await yg(i.localStore,e,!0),h=new GI(e,u.Ts),m=h.ma(u.documents),g=La.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);Ag(i,t,v.wa);const w=new QI(e,t,h);return i.Fa.set(e,w),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function tS(i,e,t){const s=Te(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter(h=>!zu(h,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ud(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&$d(s.remoteStore,o.targetId),hd(s,o.targetId)}).catch(Va)):(hd(s,o.targetId),await ud(s.localStore,o.targetId,!0))}async function nS(i,e){const t=Te(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),$d(t.remoteStore,s.targetId))}async function rS(i,e,t){const s=cS(i);try{const o=await function(h,m){const g=Te(h),v=mt.now(),w=m.reduce((B,W)=>B.add(W.key),Pe());let C,V;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let W=Rr(),$=Pe();return g.cs.getEntries(B,w).next(U=>{W=U,W.forEach((Z,ee)=>{ee.isValidDocument()||($=$.add(Z))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,W)).next(U=>{C=U;const Z=[];for(const ee of m){const he=TT(ee,C.get(ee.key).overlayedDocument);he!=null&&Z.push(new fi(ee.key,he,Ay(he.value.mapValue),Ln.exists(!0)))}return g.mutationQueue.addMutationBatch(B,v,Z,m)}).next(U=>{V=U;const Z=U.applyToLocalDocumentSet(C,$);return g.documentOverlayCache.saveOverlays(B,U.batchId,Z)})}).then(()=>({batchId:V.batchId,changes:My(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new et(Me)),v=v.insert(m,g),h.Ba[h.currentUser.toKey()]=v}(s,o.batchId,t),await ba(s,o.changes),await Qu(s.remoteStore)}catch(o){const u=Gd(o,"Failed to persist write");t.reject(u)}}async function p_(i,e){const t=Te(i);try{const s=await mI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Na.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Be(h.va):o.removedDocuments.size>0&&(Be(h.va),h.va=!1))}),await ba(t,s,e)}catch(s){await Va(s)}}function Sg(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Te(h);g.onlineState=m;let v=!1;g.queries.forEach((w,C)=>{for(const V of C.j_)V.Z_(m)&&(v=!0)}),v&&Qd(g)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iS(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new et(me.comparator);h=h.insert(u,Ft.newNoDocument(u,we.min()));const m=Pe().add(u),g=new qu(we.min(),new Map,new et(Me),h,m);await p_(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),Yd(s)}else await ud(s.localStore,e,!1).then(()=>hd(s,e,t)).catch(Va)}async function sS(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await pI(t.localStore,e);g_(t,s,null),m_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ba(t,o)}catch(o){await Va(o)}}async function oS(i,e,t){const s=Te(i);try{const o=await function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(C=>(Be(C!==null),w=C.keys(),g.mutationQueue.removeMutationBatch(v,C))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);g_(s,e,t),m_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ba(s,o)}catch(o){await Va(o)}}function m_(i,e){(i.ka.get(e)||[]).forEach(t=>{t.resolve()}),i.ka.delete(e)}function g_(i,e,t){const s=Te(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function hd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach(s=>{i.La.containsKey(s)||y_(i,s)})}function y_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&($d(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),Yd(i))}function Ag(i,e,t){for(const s of t)s instanceof h_?(i.La.addReference(s.key,e),aS(i,s)):s instanceof d_?(ae("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||y_(i,s.key)):ve()}function aS(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(ae("SyncEngine","New document in limbo: "+t),i.xa.add(s),Yd(i))}function Yd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new me(Xe.fromString(e)),s=i.qa.next();i.Na.set(s,new YI(t)),i.Oa=i.Oa.insert(t,s),s_(i.remoteStore,new ii(Qn(Vy(t.path)),s,"TargetPurposeLimboResolution",kd.oe))}}async function ba(i,e,t){const s=Te(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((m,g)=>{h.push(s.Ka(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,C?"current":"not-current")}if(v){o.push(v);const C=zd.Wi(g.targetId,v);u.push(C)}}))}),await Promise.all(h),s.Ca.d_(o),await async function(g,v){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>K.forEach(v,V=>K.forEach(V.$i,B=>w.persistence.referenceDelegate.addReference(C,V.targetId,B)).next(()=>K.forEach(V.Ui,B=>w.persistence.referenceDelegate.removeReference(C,V.targetId,B)))))}catch(C){if(!xa(C))throw C;ae("LocalStore","Failed to update sequence numbers: "+C)}for(const C of v){const V=C.targetId;if(!C.fromCache){const B=w.os.get(V),W=B.snapshotVersion,$=B.withLastLimboFreeSnapshotVersion(W);w.os=w.os.insert(V,$)}}}(s.localStore,u))}async function lS(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const s=await t_(t.localStore,e);t.currentUser=e,function(u,h){u.ka.forEach(m=>{m.forEach(g=>{g.reject(new ce(G.CANCELLED,h))})}),u.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ba(t,s.hs)}}function uS(i,e){const t=Te(i),s=t.Na.get(e);if(s&&s.va)return Pe().add(s.key);{let o=Pe();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function __(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=p_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iS.bind(null,e),e.Ca.d_=HI.bind(null,e.eventManager),e.Ca.$a=qI.bind(null,e.eventManager),e}function cS(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oS.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return fI(this.persistence,new hI,e.initialUser,this.serializer)}Ga(e){return new lI(Bd.Zr,this.serializer)}Wa(e){return new EI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class dd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lS.bind(null,this.syncEngine),await jI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zI}()}createDatastore(e){const t=Ku(e.databaseInfo.databaseId),s=function(u){return new SI(u)}(e.databaseInfo);return function(u,h,m,g){return new PI(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new kI(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Sg(this.syncEngine,t,0),function(){return vg.D()?new vg:new wI}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const C=new XI(o,u,h,m,g,v);return w&&(C.Qa=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);ae("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await Ma(u),u.k_.shutdown(),u.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}dd.provider={build:()=>new dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Ty.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wh(i,e){i.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await t_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Rg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await fS(i);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Eg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Eg(e.remoteStore,o)),i._onlineComponents=e}async function fS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ro("Error using user provided cache. Falling back to memory cache: "+t),await Wh(i,new Nu)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Wh(i,new Nu);return i._offlineComponents}async function v_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Rg(i,i._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Rg(i,new dd))),i._onlineComponents}function pS(i){return v_(i).then(e=>e.syncEngine)}async function mS(i){const e=await v_(i),t=e.eventManager;return t.onListen=JI.bind(null,e.syncEngine),t.onUnlisten=tS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nS.bind(null,e.syncEngine),t}function gS(i,e,t={}){const s=new li;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new hS({next:V=>{w.Za(),h.enqueueAndForget(()=>WI(u,C)),V.fromCache&&g.source==="server"?v.reject(new ce(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),C=new KI(m,w,{includeMetadataChanges:!0,_a:!0});return $I(u,C)}(await mS(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function E_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(i,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function yS(i,e,t,s){if(e===!0&&s===!0)throw new ce(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Cg(i){if(!me.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function kg(i){if(me.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Xd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve()}function Ji(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(i);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new N0;switch(s.type){case"firstParty":return new O0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Pg.get(t);s&&(ae("ComponentProvider","Removing Datastore"),Pg.delete(t),s.terminate())}(this),Promise.resolve()}}function _S(i,e,t,s={}){var o;const u=(i=Ji(i,Yu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=bt.MOCK_USER;else{m=ow(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new bt(v)}i._authCredentials=new D0(new wy(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xu(this.firestore,e,this._query)}}class vn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class ui extends Xu{constructor(e,t,s){super(e,t,Vy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new me(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Du(i,e,...t){if(i=jt(i),w_("collection","path",e),i instanceof Yu){const s=Xe.fromString(e,...t);return kg(s),new ui(i,null,s)}{if(!(i instanceof vn||i instanceof ui))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return kg(s),new ui(i.firestore,null,s)}}function Jd(i,e,...t){if(i=jt(i),arguments.length===1&&(e=Ty.newId()),w_("doc","path",e),i instanceof Yu){const s=Xe.fromString(e,...t);return Cg(s),new vn(i,null,new me(s))}{if(!(i instanceof vn||i instanceof ui))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return Cg(s),new vn(i.firestore,i instanceof ui?i.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new r_(this,"async_queue_retry"),this.Vu=()=>{const s=$h();s&&ae("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=$h();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=$h();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new li;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!xa(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Kd.createAndSchedule(this,e,t,s,u=>this.yu(u));return this.Tu.push(o),o}fu(){this.Eu&&ve()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Fa extends Yu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Dg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dg(e),this._firestoreClient=void 0,await e}}}function vS(i,e){const t=typeof i=="object"?i:dy(),s=typeof i=="string"?i:"(default)",o=Pd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=iw("firestore");u&&_S(o,...u)}return o}function T_(i){if(i._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||ES(i),i._firestoreClient}function ES(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new K0(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,E_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new dS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(kt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new uo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class tf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/^__.*__$/;class TS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oa(e,this.data,t,this.fieldTransforms)}}class I_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function S_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class nf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(S_(this.Cu)&&wS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class IS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ku(e)}Qu(e,t,s,o=!1){return new nf({Cu:e,methodName:t,qu:s,path:Pt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A_(i){const e=i._freezeSettings(),t=Ku(i._databaseId);return new IS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function SS(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);rf("Data must be an object, but it was:",h,s);const m=R_(s,h);let g,v;if(u.merge)g=new ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const V=fd(e,C,t);if(!h.contains(V))throw new ce(G.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);C_(w,V)||w.push(V)}g=new ln(w),v=h.fieldTransforms.filter(C=>g.covers(C.field))}else g=null,v=h.fieldTransforms;return new TS(new Zt(m),g,v)}class Zu extends Zd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function AS(i,e,t,s){const o=i.Qu(1,e,t);rf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();es(s,(g,v)=>{const w=sf(e,g,t);v=jt(v);const C=o.Nu(w);if(v instanceof Zu)u.push(w);else{const V=ec(v,C);V!=null&&(u.push(w),h.set(w,V))}});const m=new ln(u);return new I_(h,m,o.fieldTransforms)}function RS(i,e,t,s,o,u){const h=i.Qu(1,e,t),m=[fd(e,s,t)],g=[o];if(u.length%2!=0)throw new ce(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<u.length;V+=2)m.push(fd(e,u[V])),g.push(u[V+1]);const v=[],w=Zt.empty();for(let V=m.length-1;V>=0;--V)if(!C_(v,m[V])){const B=m[V];let W=g[V];W=jt(W);const $=h.Nu(B);if(W instanceof Zu)v.push(B);else{const U=ec(W,$);U!=null&&(v.push(B),w.set(B,U))}}const C=new ln(v);return new I_(w,C,h.fieldTransforms)}function ec(i,e){if(P_(i=jt(i)))return rf("Unsupported field value:",e,i),R_(i,e);if(i instanceof Zd)return function(s,o){if(!S_(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=ec(m,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=mt.fromDate(s);return{timestampValue:Cu(o.serializer,u)}}if(s instanceof mt){const u=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cu(o.serializer,u)}}if(s instanceof ef)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:Gy(o.serializer,s._byteString)};if(s instanceof vn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ud(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tf)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.Bu("VectorValues must only contain numeric values.");return Ld(m.serializer,g)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${Xd(s)}`)}(i,e)}function R_(i,e){const t={};return Iy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(i,(s,o)=>{const u=ec(o,e.Mu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function P_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof mt||i instanceof ef||i instanceof uo||i instanceof vn||i instanceof Zd||i instanceof tf)}function rf(i,e,t){if(!P_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Xd(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function fd(i,e,t){if((e=jt(e))instanceof Ju)return e._internalPath;if(typeof e=="string")return sf(i,e);throw Vu("Field path arguments must be of type string or ",i,!1,void 0,t)}const PS=new RegExp("[~\\*/\\[\\]]");function sf(i,e,t){if(e.search(PS)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ju(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Vu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ce(G.INVALID_ARGUMENT,m+i+g)}function C_(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(N_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CS extends k_{data(){return super.data()}}function N_(i,e){return typeof e=="string"?sf(i,e):e instanceof Ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NS{convertValue(e,t="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return es(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new tf(u)}convertGeoPoint(e){return new ef(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const t=hi(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Xe.fromString(e);Be(e_(s));const o=new Aa(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VS extends k_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(N_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class pu extends VS{data(e={}){return super.data(e)}}class xS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new lu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new pu(this._firestore,this._userDataWriter,s.key,s,new lu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new pu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new pu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:OS(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function OS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class LS extends NS{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,t)}}function pd(i){i=Ji(i,Xu);const e=Ji(i.firestore,Fa),t=T_(e),s=new LS(e);return kS(i._query),gS(t,i._query).then(o=>new xS(e,s,i,o))}function MS(i,e,t,...s){i=Ji(i,vn);const o=Ji(i.firestore,Fa),u=A_(o);let h;return h=typeof(e=jt(e))=="string"||e instanceof Ju?RS(u,"updateDoc",i._key,e,t,s):AS(u,"updateDoc",i._key,e),of(o,[h.toMutation(i._key,Ln.exists(!0))])}function bS(i){return of(Ji(i.firestore,Fa),[new Md(i._key,Ln.none())])}function FS(i,e){const t=Ji(i.firestore,Fa),s=Jd(i),o=DS(i.converter,e);return of(t,[SS(A_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function of(i,e){return function(s,o){const u=new li;return s.asyncQueue.enqueueAndForget(async()=>rS(await pS(s),o,u)),u.promise}(T_(i),e)}(function(e,t=!0){(function(o){fo=o})(ho),no(new Gi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Fa(new V0(s.getProvider("auth-internal")),new M0(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ai(Ym,"4.7.3",e),ai(Ym,"4.7.3","esm2017")})();var US="firebase",jS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai(US,jS,"app");function af(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=D_,V_=new Na("auth","Firebase",D_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Ad("@firebase/auth");function zS(i,...e){xu.logLevel<=ke.WARN&&xu.warn(`Auth (${ho}): ${i}`,...e)}function mu(i,...e){xu.logLevel<=ke.ERROR&&xu.error(`Auth (${ho}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(i,...e){throw uf(i,...e)}function Mn(i,...e){return uf(i,...e)}function lf(i,e,t){const s=Object.assign(Object.assign({},BS()),{[e]:t});return new Na("auth","Firebase",s).create(e,{appName:i.name})}function Ki(i){return lf(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $S(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&er(i,"argument-error"),lf(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return V_.create(i,...e)}function _e(i,e,...t){if(!i)throw uf(e,...t)}function wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw mu(e),new Error(e)}function Pr(i,e){i||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function WS(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WS()||cw()||"connection"in navigator)?navigator.onLine:!0}function qS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=aw()||hw()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(i,e){Pr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new Ua(3e4,6e4);function hf(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function go(i,e,t,s,o={}){return O_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Da(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return uw()||(v.referrerPolicy="no-referrer"),x_.fetch()(L_(i,i.config.apiHost,t,m),v)})}async function O_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},KS),e);try{const o=new YS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw uu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw uu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw uu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw lf(i,w,v);er(i,w)}}catch(o){if(o instanceof Cr)throw o;er(i,"network-request-failed",{message:String(o)})}}async function QS(i,e,t,s,o={}){const u=await go(i,e,t,s,o);return"mfaPendingCredential"in u&&er(i,"multi-factor-auth-required",{_serverResponse:u}),u}function L_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?cf(i.config,o):`${i.config.apiScheme}://${o}`}class YS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),GS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(i,e){return go(i,"POST","/v1/accounts:delete",e)}async function M_(i,e){return go(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JS(i,e=!1){const t=jt(i),s=await t.getIdToken(e),o=df(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ea(Hh(o.auth_time)),issuedAtTime:Ea(Hh(o.iat)),expirationTime:Ea(Hh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hh(i){return Number(i)*1e3}function df(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return mu("JWT malformed, contained fewer than 3 sections"),null;try{const o=sy(t);return o?JSON.parse(o):(mu("Failed to decode base64 JWT payload"),null)}catch(o){return mu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function xg(i){const e=df(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&ZS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ZS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(i){var e;const t=i.auth,s=await i.getIdToken(),o=await ka(i,M_(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?b_(u.providerUserInfo):[],m=nA(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new gd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function tA(i){const e=jt(i);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function b_(i){return i.map(e=>{var{providerId:t}=e,s=af(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(i,e){const t=await O_(i,{},async()=>{const s=Da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=L_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",x_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iA(i,e){return go(i,"POST","/v2/accounts:revokeToken",hf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=xg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await rA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Js;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new gd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ka(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return JS(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ou(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Er(this.auth.app))return Promise.reject(Ki(this.auth));const e=await this.getIdToken();return await ka(this,XS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,V=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(m=t.tenantId)!==null&&m!==void 0?m:void 0,U=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Z=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ee=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:he,emailVerified:Ee,isAnonymous:Ue,providerData:Ie,stsTokenManager:D}=t;_e(he&&D,e,"internal-error");const I=Js.fromJSON(this.name,D);_e(typeof he=="string",e,"internal-error"),ei(C,e.name),ei(V,e.name),_e(typeof Ee=="boolean",e,"internal-error"),_e(typeof Ue=="boolean",e,"internal-error"),ei(B,e.name),ei(W,e.name),ei($,e.name),ei(U,e.name),ei(Z,e.name),ei(ee,e.name);const A=new Tr({uid:he,auth:e,email:V,emailVerified:Ee,displayName:C,isAnonymous:Ue,photoURL:W,phoneNumber:B,tenantId:$,stsTokenManager:I,createdAt:Z,lastLoginAt:ee});return Ie&&Array.isArray(Ie)&&(A.providerData=Ie.map(R=>Object.assign({},R))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const u=new Tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ou(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?b_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Js;m.updateFromIdToken(s);const g=new Tr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;function Ir(i){Pr(i instanceof Function,"Expected a class definition");let e=Og.get(i);return e?(Pr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Og.set(i,e),e)}/**
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
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}F_.type="NONE";const Lg=F_;/**
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
 */function gu(i,e,t){return`firebase:${i}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=gu(this.userKey,o.apiKey,u),this.fullPersistenceKey=gu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Ir(Lg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ir(Lg);const h=gu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const C=Tr._fromJSON(e,w);v!==u&&(m=C),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Zs(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Zs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(H_(e))return"Webos";if(j_(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if($_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function U_(i=Ut()){return/firefox\//i.test(i)}function j_(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(i=Ut()){return/crios\//i.test(i)}function z_(i=Ut()){return/iemobile/i.test(i)}function $_(i=Ut()){return/android/i.test(i)}function W_(i=Ut()){return/blackberry/i.test(i)}function H_(i=Ut()){return/webos/i.test(i)}function ff(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function sA(i=Ut()){var e;return ff(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oA(){return dw()&&document.documentMode===10}function q_(i=Ut()){return ff(i)||$_(i)||H_(i)||W_(i)||/windows phone/i.test(i)||z_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(i,e=[]){let t;switch(i){case"Browser":t=Mg(Ut());break;case"Worker":t=`${Mg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${s}`}/**
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
 */class aA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lA(i,e={}){return go(i,"GET","/v2/passwordPolicy",hf(i,e))}/**
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
 */const uA=6;class cA{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:uA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bg(this),this.idTokenSubscription=new bg(this),this.beforeStateQueue=new aA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await M_(this,{idToken:e}),s=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Er(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Er(this.app))return Promise.reject(Ki(this));const t=e?jt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Er(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Er(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lA(this),t=new cA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await iA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tc(i){return jt(i)}class bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ew(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dA(i){pf=i}function fA(i){return pf.loadJS(i)}function pA(){return pf.gapiScript}function mA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(i,e){const t=Pd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(wu(u,e??{}))return o;er(o,"already-initialized")}return t.initialize({options:e})}function yA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _A(i,e,t){const s=tc(i);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=G_(e),{host:h,port:m}=vA(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),EA()}function G_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function vA(i){const e=G_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Fg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Fg(h)}}}function Fg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function EA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(i,e){return QS(i,"POST","/v1/accounts:signInWithIdp",hf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="http://localhost";class Zi extends Q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=af(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Zi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Da(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ja extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ja{constructor(){super("facebook.com")}static credential(e){return Zi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return vr.credential(t,s)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ja{constructor(){super("github.com")}static credential(e){return Zi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ja{constructor(){super("twitter.com")}static credential(e,t){return Zi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Tr._fromIdTokenResponse(e,s,o),h=Ug(s);return new co({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ug(s);return new co({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ug(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Lu(e,t,s,o)}}function Y_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(i,u,e,s):u})}async function TA(i,e,t=!1){const s=await ka(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return co._forOperation(i,"link",s)}/**
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
 */async function IA(i,e,t=!1){const{auth:s}=i;if(Er(s.app))return Promise.reject(Ki(s));const o="reauthenticate";try{const u=await ka(i,Y_(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=df(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),co._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&er(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(i,e,t=!1){if(Er(i.app))return Promise.reject(Ki(i));const s="signIn",o=await Y_(i,s,e),u=await co._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function AA(i,e,t,s){return jt(i).onIdTokenChanged(e,t,s)}function RA(i,e,t){return jt(i).beforeAuthStateChanged(e,t)}function PA(i,e,t,s){return jt(i).onAuthStateChanged(e,t,s)}function X_(i){return jt(i).signOut()}const Mu="__sak";/**
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
 */class J_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=1e3,kA=10;class Z_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);oA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,kA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z_.type="LOCAL";const NA=Z_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ev.type="SESSION";const tv=ev;/**
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
 */function DA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await DA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class VA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=gf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const V=C;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(V.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function xA(i){Xn().location.href=i}/**
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
 */function nv(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function OA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function MA(){return nv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",bA=1,bu="firebaseLocalStorage",iv="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rc(i,e){return i.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function FA(){const i=indexedDB.deleteDatabase(rv);return new Ba(i).toPromise()}function yd(){const i=indexedDB.open(rv,bA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(bu,{keyPath:iv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(bu)?e(s):(s.close(),await FA(),e(await yd()))})})}async function jg(i,e,t){const s=rc(i,!0).put({[iv]:e,value:t});return new Ba(s).toPromise()}async function UA(i,e){const t=rc(i,!1).get(e),s=await new Ba(t).toPromise();return s===void 0?null:s.value}function Bg(i,e){const t=rc(i,!0).delete(e);return new Ba(t).toPromise()}const jA=800,BA=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>BA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(MA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await OA(),!this.activeServiceWorker)return;this.sender=new VA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await jg(e,Mu,"1"),await Bg(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>UA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=rc(o,!1).getAll();return new Ba(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const zA=sv;new Ua(3e4,6e4);/**
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
 */function ov(i,e){return e?Ir(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class yf extends Q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $A(i){return SA(i.auth,new yf(i),i.bypassAuthState)}function WA(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),IA(t,new yf(i),i.bypassAuthState)}async function HA(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),TA(t,new yf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $A;case"linkViaPopup":case"linkViaRedirect":return HA;case"reauthViaPopup":case"reauthViaRedirect":return WA;default:er(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Ua(2e3,1e4);async function KA(i,e,t){if(Er(i.app))return Promise.reject(Mn(i,"operation-not-supported-in-this-environment"));const s=tc(i);$S(i,e,mf);const o=ov(s,t);return new Hi(s,"signInViaPopup",e,o).executeNotNull()}class Hi extends av{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="pendingRedirect",yu=new Map;class QA extends av{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=yu.get(this.auth._key());if(!e){try{const s=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}yu.set(this.auth._key(),e)}return this.bypassAuthState||yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(i,e){const t=ZA(e),s=JA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function XA(i,e){yu.set(i._key(),e)}function JA(i){return Ir(i._redirectPersistence)}function ZA(i){return gu(GA,i.config.apiKey,i.name)}async function eR(i,e,t=!1){if(Er(i.app))return Promise.reject(Ki(i));const s=tc(i),o=ov(s,e),h=await new QA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!lv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function lv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(i,e={}){return go(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function aR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await iR(i);for(const t of e)try{if(lR(t))return}catch{}er(i,"unauthorized-domain")}function lR(i){const e=md(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!oR.test(t))return!1;if(sR.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const uR=new Ua(3e4,6e4);function $g(){const i=Xn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function cR(i){return new Promise((e,t)=>{var s,o,u;function h(){$g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$g(),t(Mn(i,"network-request-failed"))},timeout:uR.get()})}if(!((o=(s=Xn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Xn().gapi)===null||u===void 0)&&u.load)h();else{const m=mA("iframefcb");return Xn()[m]=()=>{gapi.load?h():t(Mn(i,"network-request-failed"))},fA(`${pA()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw _u=null,e})}let _u=null;function hR(i){return _u=_u||cR(i),_u}/**
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
 */const dR=new Ua(5e3,15e3),fR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yR(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?cf(e,pR):`https://${i.config.authDomain}/${fR}`,s={apiKey:e.apiKey,appName:i.name,v:ho},o=gR.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Da(s).slice(1)}`}async function _R(i){const e=await hR(i),t=Xn().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:yR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mn(i,"network-request-failed"),m=Xn().setTimeout(()=>{u(h)},dR.get());function g(){Xn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const vR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,wR=600,TR="_blank",IR="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SR(i,e,t,s=ER,o=wR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},vR),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(m=B_(v)?TR:t),U_(v)&&(e=e||IR,g.scrollbars="yes");const w=Object.entries(g).reduce((V,[B,W])=>`${V}${B}=${W},`,"");if(sA(v)&&m!=="_self")return AR(e||"",m),new Wg(null);const C=window.open(e||"",m,w);_e(C,i,"popup-blocked");try{C.focus()}catch{}return new Wg(C)}function AR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const RR="__/auth/handler",PR="emulator/auth/handler",CR=encodeURIComponent("fac");async function Hg(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ho,eventId:o};if(e instanceof mf){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",vw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof ja){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${CR}=${encodeURIComponent(g)}`:"";return`${kR(i)}?${Da(m).slice(1)}${v}`}function kR({config:i}){return i.emulator?cf(i,PR):`https://${i.authDomain}/${RR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="webStorageSupport";class NR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=eR,this._overrideRedirectResult=XA}async _openPopup(e,t,s,o){var u;Pr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Hg(e,t,s,md(),o);return SR(e,h,gf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Hg(e,t,s,md(),o);return xA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _R(e),s=new nR(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[qh];h!==void 0&&t(!!h),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||j_()||ff()}}const DR=NR;var qg="@firebase/auth",Kg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OR(i){no(new Gi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(i)},v=new hA(s,o,u,g);return yA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Gi("auth-internal",e=>{const t=tc(e.getProvider("auth").getImmediate());return(s=>new VR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(qg,Kg,xR(i)),ai(qg,Kg,"esm2017")}/**
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
 */const LR=5*60,MR=ly("authIdTokenMaxAge")||LR;let Gg=null;const bR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>MR)return;const o=t==null?void 0:t.token;Gg!==o&&(Gg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function _d(i=dy()){const e=Pd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=gA(i,{popupRedirectResolver:DR,persistence:[zA,NA,tv]}),s=ly("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=bR(u.toString());RA(t,h,()=>h(t.currentUser)),AA(t,m=>h(m))}}const o=oy("auth");return o&&_A(t,`http://${o}`),t}function FR(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}dA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Mn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",FR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OR("Browser");const UR={apiKey:"AIzaSyBuyO0TJ6PSssYZjUwvLJrTMTVHavB_0n0",authDomain:"bookstore-c42b9.firebaseapp.com",projectId:"bookstore-c42b9",storageBucket:"bookstore-c42b9.firebasestorage.app",messagingSenderId:"436887994001",appId:"1:436887994001:web:667fb333ddd5019d830930",measurementId:"G-H2SM799P21"},uv=hy(UR),cv=_d(uv),to=vS(uv),jR=new vr,BR=async()=>{try{return(await KA(cv,jR)).user}catch(i){throw console.error("Error signing in with Google:",i),i}},zR=async()=>{try{await X_(cv)}catch(i){throw console.error("Error signing out:",i),i}},$R=async i=>{try{const e={title:i.title,author:i.author,price:Number(i.price)};return(await FS(Du(to,"books"),e)).id}catch(e){throw console.error("Error adding document:",e),e}},WR=async i=>{try{await bS(Jd(to,"books",i))}catch(e){throw console.error("Error deleting document:",e),e}},HR=i=>{typeof window<"u"&&(window.location.href=i)},hv=()=>{const[i,e]=ge.useState(null);let t;try{t=ey()}catch{t=HR}return ge.useEffect(()=>{const o=_d(),u=PA(o,h=>{e(h),h||t("/")});return()=>u()},[t]),{user:i,signOut:async()=>{try{const o=_d();await X_(o),t("/")}catch(o){console.error("Error signing out:",o)}}}},qR=()=>{const{user:i}=hv(),e=()=>{BR()},t=()=>{zR()};return oe.jsx("div",{children:i?oe.jsx("button",{onClick:t,className:"login-button",children:"Logout"}):oe.jsx("button",{onClick:e,className:"login-button",children:"Login with Google"})})},vd=({isOpen:i,onClose:e,onAddBook:t,onDeleteBook:s,book:o,isEditing:u=!1})=>{const[h,m]=ge.useState((o==null?void 0:o.title)||""),[g,v]=ge.useState((o==null?void 0:o.author)||""),[w,C]=ge.useState((o==null?void 0:o.price.toString())||""),V=async B=>{if(B.preventDefault(),h&&g&&w)try{const W={title:h,author:g,price:Number(w)};await t(W),m(""),v(""),C(""),e()}catch(W){console.error("Error adding book:",W)}};return ge.useEffect(()=>{i?(m((o==null?void 0:o.title)||""),v((o==null?void 0:o.author)||""),C((o==null?void 0:o.price.toString())||"")):(m(""),v(""),C(""))},[i,o]),i?oe.jsx("div",{className:"modal-overlay",children:oe.jsxs("div",{className:"modal",children:[oe.jsx("h2",{children:u?"Edit Book":"Add New Book"}),oe.jsx("button",{className:"close-btn",onClick:e,children:"×"}),oe.jsxs("form",{onSubmit:V,className:"add-book-form",children:[oe.jsxs("div",{className:"form-group",children:[oe.jsx("label",{children:"Title:"}),oe.jsx("input",{type:"text",value:h,onChange:B=>m(B.target.value),placeholder:"Enter book title",required:!0})]}),oe.jsxs("div",{className:"form-group",children:[oe.jsx("label",{children:"Author:"}),oe.jsx("input",{type:"text",value:g,onChange:B=>v(B.target.value),placeholder:"Enter author's name",required:!0})]}),oe.jsxs("div",{className:"form-group",children:[oe.jsx("label",{children:"Price ($):"}),oe.jsx("input",{type:"number",value:w,onChange:B=>C(B.target.value),placeholder:"Enter price ($)",min:"0.01",step:"0.01",required:!0})]}),oe.jsxs("div",{className:"form-buttons",children:[oe.jsx("button",{type:"submit",className:"add-btn",children:u?"Update Book":"Add Book"}),u&&s&&oe.jsx("button",{type:"button",onClick:async B=>{if(B.stopPropagation(),o!=null&&o.id)try{await(s==null?void 0:s(o.id)),e()}catch(W){console.error("Error deleting book:",W)}},className:"delete-btn",children:"Delete Book"}),oe.jsx("button",{type:"button",onClick:e,className:"cancel-btn",children:"Cancel"})]})]})]})}):null},KR="_booksList_1776s_2",GR="_booksTable_1776s_9",QR="_tableHeader_1776s_21",YR="_tableRow_1776s_32",XR="_headerCell_1776s_51",JR="_cell_1776s_51",ZR="_number_1776s_76",eP="_title_1776s_76",tP="_author_1776s_76",nP="_price_1776s_76",rP="_actions_1776s_76",iP="_priceAmount_1776s_112",sP="_sortable_1776s_119",oP="_sortArrow_1776s_130",aP="_noBooks_1776s_142",lP="_pagination_1776s_150",uP="_pageInfo_1776s_163",cP="_paginationBtn_1776s_168",hP="_editBtn_1776s_190",Oe={booksList:KR,booksTable:GR,tableHeader:QR,tableRow:YR,headerCell:XR,cell:JR,number:ZR,title:eP,author:tP,price:nP,actions:rP,priceAmount:iP,sortable:sP,sortArrow:oP,noBooks:aP,pagination:lP,pageInfo:uP,paginationBtn:cP,editBtn:hP},dP=({searchTerm:i,books:e,addBook:t,deleteBook:s,onEditBook:o,itemsPerPage:u=10})=>{const[h,m]=ge.useState(!1),[g,v]=ge.useState(!1),[w,C]=ge.useState(null),[V,B]=ge.useState(1),[W,$]=ge.useState(null);console.log("BooksList received books:",e);const U=ge.useMemo(()=>{let R=[...e].filter(k=>k.title.toLowerCase().includes(i.toLowerCase())||k.author.toLowerCase().includes(i.toLowerCase()));return W&&R.sort((k,O)=>W==="asc"?k.price-O.price:O.price-k.price),R},[e,i,W]),Z=Math.ceil(U.length/u),ee=V*u,he=ee-u,Ee=U.slice(he,ee),Ue=()=>{B(1),$(R=>R===null?"asc":R==="asc"?"desc":null)},Ie=async R=>{try{await t(R),m(!1)}catch(k){throw console.error("Error adding book:",k),k}},D=R=>{C(R),v(!0)},I=async R=>{if(w)try{await o(w.id,R),v(!1),C(null)}catch(k){throw console.error("Error updating book:",k),k}},A=()=>{v(!1),C(null)};return oe.jsxs("div",{className:Oe.booksList,children:[oe.jsx(vd,{isOpen:h,onClose:()=>m(!1),onAddBook:Ie}),oe.jsx(vd,{isOpen:g,onClose:A,onAddBook:I,onDeleteBook:w?()=>s(w.id):void 0,book:w,isEditing:!0}),U.length>0?oe.jsxs(oe.Fragment,{children:[oe.jsxs("div",{className:Oe.booksTable,children:[oe.jsxs("div",{className:Oe.tableHeader,children:[oe.jsx("div",{className:`${Oe.headerCell} ${Oe.number}`,children:"#"}),oe.jsx("div",{className:`${Oe.headerCell} ${Oe.title}`,children:"Title"}),oe.jsx("div",{className:`${Oe.headerCell} ${Oe.author}`,children:"Author"}),oe.jsxs("div",{className:`${Oe.headerCell} ${Oe.price} ${Oe.sortable}`,onClick:Ue,children:["Price",oe.jsx("span",{className:Oe.sortArrow,children:W==="asc"?"↑":W==="desc"?"↓":"↕"})]}),oe.jsx("div",{className:`${Oe.headerCell} ${Oe.actions}`,children:"Actions"})]}),Ee.map((R,k)=>oe.jsxs("div",{className:Oe.tableRow,children:[oe.jsx("div",{className:`${Oe.cell} ${Oe.number}`,children:k+he+1}),oe.jsx("div",{className:`${Oe.cell} ${Oe.title}`,children:R.title}),oe.jsx("div",{className:`${Oe.cell} ${Oe.author}`,children:R.author}),oe.jsx("div",{className:`${Oe.cell} ${Oe.price}`,children:oe.jsxs("span",{className:Oe.priceAmount,children:["$",R.price.toFixed(2)]})}),oe.jsx("div",{className:`${Oe.cell} ${Oe.actions}`,children:oe.jsx("button",{onClick:()=>D(R),className:Oe.editBtn,children:"Edit"})})]},R.id))]}),oe.jsxs("div",{className:Oe.pagination,children:[oe.jsx("button",{onClick:()=>B(R=>Math.max(1,R-1)),disabled:V===1,className:Oe.paginationBtn,children:"Previous"}),oe.jsxs("span",{className:Oe.pageInfo,children:["Page ",V," of ",Z]}),oe.jsx("button",{onClick:()=>B(R=>Math.min(Z,R+1)),disabled:V===Z,className:Oe.paginationBtn,children:"Next"})]})]}):oe.jsx("div",{className:Oe.noBooks,children:i?"No books found":"No books yet"})]})},fP=()=>{const[i,e]=ge.useState([]),t=async()=>{try{const h=(await pd(Du(to,"books"))).docs.map(m=>{const g=m.data();return{id:m.id,title:g.title,author:g.author,price:Number(g.price)}});console.log("isRealdoing?",h),e(h)}catch(u){throw console.error("Error refreshing books:",u),u}};return ge.useEffect(()=>{t()},[]),{books:i,addBook:async u=>{try{await $R(u),await t()}catch(h){throw console.error("Error adding book:",h),h}},deleteBook:async u=>{try{await WR(u),e(h=>h.filter(m=>m.id!==u))}catch(h){throw console.error("Error deleting book:",h),h}}}};function pP(){const{user:i,signOut:e}=hv(),[t,s]=ge.useState(""),[o,u]=ge.useState(!1),[h,m]=ge.useState([]),{addBook:g,deleteBook:v}=fP(),w=async $=>{if(window.confirm("Are you sure you want to delete this book? This action cannot be undone."))try{await v($),m(Z=>Z.filter(ee=>ee.id!==$))}catch(Z){console.error("Error deleting book:",Z)}},C=ey();ge.useEffect(()=>{(async()=>{try{const Z=(await pd(Du(to,"books"))).docs.map(ee=>({id:ee.id,title:ee.data().title,author:ee.data().author,price:ee.data().price}));m(Z)}catch(U){console.error("Error loading books:",U)}})()},[]);const V=async()=>{if(window.confirm("Are you sure you want to log out?"))try{await e(),C("/")}catch(U){console.error("Error during logout:",U)}},B=async $=>{try{await g($);const Z=(await pd(Du(to,"books"))).docs.map(ee=>({id:ee.id,title:ee.data().title,author:ee.data().author,price:ee.data().price}));m(Z),u(!1)}catch(U){console.error("Error adding book:",U)}},W=async($,U)=>{try{const Z=Jd(to,"books",$);await MS(Z,U),m(ee=>ee.map(he=>he.id===$?{...he,...U}:he))}catch(Z){throw console.error("Error updating book:",Z),Z}};return oe.jsxs("div",{className:"App",children:[oe.jsx("h1",{children:"Book Store"}),oe.jsx("h3",{children:"Discover and manage your favourite books!"}),i&&oe.jsxs("div",{className:"books-header",children:[oe.jsx("div",{className:"header-left",children:oe.jsx("input",{type:"text",className:"search-bar",placeholder:"Search books...",value:t,onChange:$=>s($.target.value)})}),oe.jsxs("div",{className:"header-right",children:[oe.jsx("button",{className:"add-book-btn",onClick:()=>u(!0),children:"Add Book"}),oe.jsx("button",{className:"logout-btn",onClick:V,children:"Logout"})]})]}),oe.jsx(dP,{searchTerm:t,books:h,addBook:g,deleteBook:w,onEditBook:W}),oe.jsx(vd,{isOpen:o,onClose:()=>u(!1),onAddBook:B}),!i&&oe.jsx(qR,{})]})}RE.createRoot(document.getElementById("root")).render(oe.jsx(ge.StrictMode,{children:oe.jsx(YE,{children:oe.jsx(pP,{})})}));
